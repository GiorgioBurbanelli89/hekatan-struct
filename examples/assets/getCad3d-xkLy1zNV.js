const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-CToQkEkn.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as At, _ as ta, p as Un, m as Ua, s as Xa, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as Jo, P as on, g as Ka, a as Za, o as Qa } from "./theme-CzzIlc4y.js";
import { G as sn, b as el, M as oa, D as na, B as no, c as xn, d as tl, C as ol, e as da, V as Ne, P as Io, R as sa, f as aa, g as Wo, h as Go, i as nl, S as sl, j as al, F as Lo, a as Yo, L as Co, k as ll, l as rl, A as dn, T as Xn, m as pn, n as fn, o as il, p as cl } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as bo } from "./analyze-ClLKGn9k.js";
import { g as xo, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as Po, s as vo, m as ao, t as ns } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ca, ul, tr;
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
  const os = [
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
  ], Vo = [
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
  function dl(e, b) {
    return e === "kN" && b === "m" ? "kPa" : e === "kN" && b === "mm" || e === "N" && b === "mm" ? "MPa" : e === "N" && b === "m" ? "Pa" : e === "kip" && b === "in" ? "ksi" : e === "kip" && b === "ft" ? "ksf" : `${e}/${b}\xB2`;
  }
  const Fo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Ro(e, b) {
    const P = os.find((W) => W.id === e), M = Vo.find((W) => W.id === b), J = P.toKN, B = M.toM, Z = (W, be, T) => T / (Math.pow(J, W) * Math.pow(B, be));
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
      id: `${e}-${b}`,
      label: `${P.label}, ${M.label}`,
      force: P.label,
      length: M.label,
      stress: dl(e, b),
      moment: `${P.label}\xB7${M.label}`,
      E: Z(1, -2, Fo.E),
      G: Z(1, -2, Fo.G),
      A: Z(0, 2, Fo.A),
      Iz: Z(0, 4, Fo.Iz),
      Iy: Z(0, 4, Fo.Iy),
      J: Z(0, 4, Fo.J),
      rho: Z(1, -4, Fo.rho),
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
  Ro("kN", "m"), Ro("kip", "in");
  function un() {
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
  function pl(e) {
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
      pergola: [
        {
          key: "Lx",
          val: 6,
          min: 2,
          max: 20,
          step: 0.5,
          label: `Ancho Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 8,
          min: 3,
          max: 30,
          step: 0.5,
          label: `Largo Ly (${e.length})`
        },
        {
          key: "H1",
          val: 3,
          min: 1,
          max: 8,
          step: 0.25,
          label: `H bajo (${e.length})`
        },
        {
          key: "H2",
          val: 4.5,
          min: 1,
          max: 10,
          step: 0.25,
          label: `H alto (${e.length})`
        },
        {
          key: "nCol",
          val: 3,
          min: 2,
          max: 8,
          step: 1,
          label: "Columnas/lado"
        },
        {
          key: "nCorr",
          val: 8,
          min: 3,
          max: 20,
          step: 1,
          label: "Correas"
        },
        {
          key: "E",
          val: e.E,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E acero (${e.stress})`
        },
        {
          key: "t",
          val: 5e-4,
          min: 3e-4,
          max: 3e-3,
          step: 1e-4,
          label: `t panel (${e.length})`
        },
        {
          key: "q",
          val: e.defaultForce * 0.5,
          min: 0.1,
          max: e.forceRange[1] * 5,
          step: e.forceRange[2] * 0.1,
          label: `q carga (${e.force}/${e.length}\xB2)`
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
  function fl(e) {
    const b = e.force, [P, M, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: P,
          max: M,
          step: J,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${b})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `F axial (${b})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CM (${b})`
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
  ul = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; max-height: 60vh; overflow: auto; pointer-events: auto;
    border: 1px solid #0f03; resize: both;
  `;
    let b = false;
    function P(M, J) {
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
      ], Z = [
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
      if (Y += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const W of J.properties) Y += `<span style="color:#888">${W}</span>
`;
      Y += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const W of B) Y += `<th style="padding:2px 5px">${W}</th>`;
      if (Y += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((W, be) => {
        var _a2;
        const T = W > 0 ? 1 / W : 0, K = W * 2 * Math.PI, $e = ((_a2 = M.massParticipation) == null ? void 0 : _a2[be]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let pe = 0; pe < 6; pe++) Z[pe] += $e[pe];
        Y += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${be + 1}</td>
  <td style="padding:2px 6px; text-align:right">${W.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${K.toFixed(2)}</td>`;
        for (let pe = 0; pe < 6; pe++) {
          const ce = ($e[pe] * 100).toFixed(1), oe = $e[pe] > 0.5 ? "#f00" : $e[pe] > 0.1 ? "#ff0" : "#0f0";
          Y += `<td style="padding:2px 5px; text-align:right; color:${oe}">${ce}%</td>`;
        }
        Y += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[5] * 100).toFixed(1)}%</td></tr>`;
      }), Y += "</table></div>", e.innerHTML = Y, b) {
        const W = e.querySelector("#modal-body"), be = e.querySelector("#modal-minimize");
        W && (W.style.display = "none"), be && (be.textContent = "\u25A2", be.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const W = e.querySelector("#modal-body"), be = e.querySelector("#modal-minimize");
        b ? (W.style.display = "none", be.textContent = "\u25A2", be.title = "Restaurar") : (W.style.display = "block", be.textContent = "\u25AC", be.title = "Minimizar");
      });
      const H = e.querySelector("#modal-header");
      if (H) {
        let W = false, be = 0, T = 0, K = 0, $e = 0;
        H.addEventListener("mousedown", (pe) => {
          if (pe.target.tagName === "BUTTON") return;
          W = true, be = pe.clientX, T = pe.clientY;
          const ce = e.getBoundingClientRect();
          K = ce.left, $e = ce.top, pe.preventDefault();
        }), document.addEventListener("mousemove", (pe) => {
          if (!W) return;
          const ce = pe.clientX - be, oe = pe.clientY - T;
          e.style.left = K + ce + "px", e.style.top = $e + oe + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          W = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const W = [];
        W.push(`Modal Analysis \u2014 ${J.title}`);
        const be = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${B.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        W.push(be), W.push("-".repeat(be.length));
        const T = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach(($e, pe) => {
          var _a2;
          const ce = $e > 0 ? 1 / $e : 0, oe = $e * 2 * Math.PI, q = ((_a2 = M.massParticipation) == null ? void 0 : _a2[pe]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let G = 0; G < 6; G++) T[G] += q[G];
          const D = q.map((G) => ((G * 100).toFixed(1) + "%").padStart(6)).join(" ");
          W.push(`${String(pe + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${ce.toFixed(4).padStart(9)}  ${oe.toFixed(2).padStart(9)}  ${D}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(W.join(`
`));
        const K = e.querySelector("#modal-copy");
        K.textContent = "\u2713", setTimeout(() => K.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: P
    };
  };
  const Pe = 64516e-8, N = 416231e-12, ne = 0.0254, ko = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Pe,
      Iz: 16.4 * N,
      Iy: 2.2 * N,
      J: 0.0405 * N,
      d: 5.9 * ne,
      bf: 3.94 * ne
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Pe,
      Iz: 29.1 * N,
      Iy: 9.32 * N,
      J: 0.103 * N,
      d: 5.99 * ne,
      bf: 5.99 * ne
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Pe,
      Iz: 41.4 * N,
      Iy: 13.3 * N,
      J: 0.204 * N,
      d: 6.2 * ne,
      bf: 6.02 * ne
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Pe,
      Iz: 30.8 * N,
      Iy: 2.09 * N,
      J: 0.0426 * N,
      d: 7.89 * ne,
      bf: 3.94 * ne
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Pe,
      Iz: 61.9 * N,
      Iy: 7.97 * N,
      J: 0.172 * N,
      d: 8.14 * ne,
      bf: 5.25 * ne
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Pe,
      Iz: 82.7 * N,
      Iy: 18.3 * N,
      J: 0.346 * N,
      d: 7.93 * ne,
      bf: 6.5 * ne
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Pe,
      Iz: 110 * N,
      Iy: 37.1 * N,
      J: 0.536 * N,
      d: 8 * ne,
      bf: 7.995 * ne
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Pe,
      Iz: 146 * N,
      Iy: 49.1 * N,
      J: 0.871 * N,
      d: 8.25 * ne,
      bf: 8.07 * ne
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Pe,
      Iz: 184 * N,
      Iy: 60.9 * N,
      J: 1.45 * N,
      d: 8.5 * ne,
      bf: 8.11 * ne
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Pe,
      Iz: 272 * N,
      Iy: 88.6 * N,
      J: 3.54 * N,
      d: 9 * ne,
      bf: 8.28 * ne
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Pe,
      Iz: 53.8 * N,
      Iy: 2.18 * N,
      J: 0.0547 * N,
      d: 9.87 * ne,
      bf: 3.96 * ne
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Pe,
      Iz: 118 * N,
      Iy: 11.4 * N,
      J: 0.239 * N,
      d: 10.17 * ne,
      bf: 5.75 * ne
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Pe,
      Iz: 171 * N,
      Iy: 36.6 * N,
      J: 0.583 * N,
      d: 9.73 * ne,
      bf: 7.96 * ne
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Pe,
      Iz: 272 * N,
      Iy: 93.4 * N,
      J: 1.39 * N,
      d: 9.98 * ne,
      bf: 10 * ne
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Pe,
      Iz: 394 * N,
      Iy: 134 * N,
      J: 3.56 * N,
      d: 10.4 * ne,
      bf: 10.13 * ne
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Pe,
      Iz: 623 * N,
      Iy: 207 * N,
      J: 10.9 * N,
      d: 11.1 * ne,
      bf: 10.34 * ne
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Pe,
      Iz: 88.6 * N,
      Iy: 2.36 * N,
      J: 0.0704 * N,
      d: 11.91 * ne,
      bf: 3.97 * ne
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Pe,
      Iz: 156 * N,
      Iy: 4.66 * N,
      J: 0.293 * N,
      d: 12.31 * ne,
      bf: 4.03 * ne
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Pe,
      Iz: 204 * N,
      Iy: 17.3 * N,
      J: 0.3 * N,
      d: 12.22 * ne,
      bf: 6.49 * ne
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Pe,
      Iz: 310 * N,
      Iy: 44.1 * N,
      J: 0.906 * N,
      d: 11.94 * ne,
      bf: 8.01 * ne
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Pe,
      Iz: 425 * N,
      Iy: 95.8 * N,
      J: 1.58 * N,
      d: 12.06 * ne,
      bf: 9.99 * ne
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Pe,
      Iz: 597 * N,
      Iy: 195 * N,
      J: 4.05 * N,
      d: 12.25 * ne,
      bf: 12.04 * ne
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Pe,
      Iz: 833 * N,
      Iy: 270 * N,
      J: 8.44 * N,
      d: 12.71 * ne,
      bf: 12.16 * ne
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Pe,
      Iz: 1070 * N,
      Iy: 345 * N,
      J: 16 * N,
      d: 13.12 * ne,
      bf: 12.32 * ne
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Pe,
      Iz: 199 * N,
      Iy: 7 * N,
      J: 0.208 * N,
      d: 13.74 * ne,
      bf: 5 * ne
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Pe,
      Iz: 291 * N,
      Iy: 19.6 * N,
      J: 0.38 * N,
      d: 13.84 * ne,
      bf: 6.73 * ne
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Pe,
      Iz: 385 * N,
      Iy: 26.7 * N,
      J: 0.798 * N,
      d: 14.1 * ne,
      bf: 6.77 * ne
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Pe,
      Iz: 485 * N,
      Iy: 51.4 * N,
      J: 1.45 * N,
      d: 13.79 * ne,
      bf: 8.03 * ne
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Pe,
      Iz: 640 * N,
      Iy: 107 * N,
      J: 2.19 * N,
      d: 13.89 * ne,
      bf: 9.99 * ne
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Pe,
      Iz: 882 * N,
      Iy: 148 * N,
      J: 5.07 * N,
      d: 14.31 * ne,
      bf: 10.13 * ne
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Pe,
      Iz: 1240 * N,
      Iy: 447 * N,
      J: 7.12 * N,
      d: 14.32 * ne,
      bf: 14.61 * ne
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Pe,
      Iz: 1530 * N,
      Iy: 548 * N,
      J: 12.3 * N,
      d: 14.66 * ne,
      bf: 14.73 * ne
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Pe,
      Iz: 2140 * N,
      Iy: 838 * N,
      J: 23.7 * N,
      d: 15.22 * ne,
      bf: 15.65 * ne
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Pe,
      Iz: 301 * N,
      Iy: 9.59 * N,
      J: 0.262 * N,
      d: 15.69 * ne,
      bf: 5.5 * ne
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Pe,
      Iz: 448 * N,
      Iy: 24.5 * N,
      J: 0.545 * N,
      d: 15.86 * ne,
      bf: 6.99 * ne
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Pe,
      Iz: 659 * N,
      Iy: 37.2 * N,
      J: 1.52 * N,
      d: 16.26 * ne,
      bf: 7.07 * ne
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Pe,
      Iz: 954 * N,
      Iy: 119 * N,
      J: 2.39 * N,
      d: 16.33 * ne,
      bf: 10.24 * ne
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Pe,
      Iz: 1300 * N,
      Iy: 163 * N,
      J: 5.45 * N,
      d: 16.75 * ne,
      bf: 10.37 * ne
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Pe,
      Iz: 510 * N,
      Iy: 15.3 * N,
      J: 0.506 * N,
      d: 17.7 * ne,
      bf: 6 * ne
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Pe,
      Iz: 800 * N,
      Iy: 40.1 * N,
      J: 1.24 * N,
      d: 17.99 * ne,
      bf: 7.5 * ne
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Pe,
      Iz: 1170 * N,
      Iy: 60.3 * N,
      J: 3.49 * N,
      d: 18.47 * ne,
      bf: 7.64 * ne
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Pe,
      Iz: 1750 * N,
      Iy: 201 * N,
      J: 5.86 * N,
      d: 18.59 * ne,
      bf: 11.15 * ne
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Pe,
      Iz: 843 * N,
      Iy: 20.7 * N,
      J: 0.77 * N,
      d: 20.66 * ne,
      bf: 6.5 * ne
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Pe,
      Iz: 1330 * N,
      Iy: 57.5 * N,
      J: 1.83 * N,
      d: 20.99 * ne,
      bf: 8.24 * ne
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Pe,
      Iz: 1830 * N,
      Iy: 81.4 * N,
      J: 4.34 * N,
      d: 21.43 * ne,
      bf: 8.36 * ne
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Pe,
      Iz: 2670 * N,
      Iy: 274 * N,
      J: 6.83 * N,
      d: 21.51 * ne,
      bf: 12.34 * ne
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Pe,
      Iz: 1350 * N,
      Iy: 29.1 * N,
      J: 1.18 * N,
      d: 23.57 * ne,
      bf: 7.01 * ne
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Pe,
      Iz: 2100 * N,
      Iy: 82.5 * N,
      J: 2.68 * N,
      d: 23.92 * ne,
      bf: 8.99 * ne
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Pe,
      Iz: 3100 * N,
      Iy: 259 * N,
      J: 4.72 * N,
      d: 24.06 * ne,
      bf: 12.75 * ne
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Pe,
      Iz: 4020 * N,
      Iy: 340 * N,
      J: 9.5 * N,
      d: 24.48 * ne,
      bf: 12.86 * ne
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Pe,
      Iz: 4580 * N,
      Iy: 391 * N,
      J: 12.6 * N,
      d: 24.74 * ne,
      bf: 12.9 * ne
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Pe,
      Iz: 5680 * N,
      Iy: 479 * N,
      J: 21.2 * N,
      d: 25.24 * ne,
      bf: 12.9 * ne
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Pe,
      Iz: 2850 * N,
      Iy: 106 * N,
      J: 2.81 * N,
      d: 26.71 * ne,
      bf: 9.96 * ne
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Pe,
      Iz: 4090 * N,
      Iy: 159 * N,
      J: 6.77 * N,
      d: 27.29 * ne,
      bf: 10.07 * ne
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Pe,
      Iz: 3610 * N,
      Iy: 115 * N,
      J: 3.06 * N,
      d: 29.53 * ne,
      bf: 10.4 * ne
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Pe,
      Iz: 4930 * N,
      Iy: 164 * N,
      J: 6.43 * N,
      d: 30.01 * ne,
      bf: 10.5 * ne
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Pe,
      Iz: 5900 * N,
      Iy: 187 * N,
      J: 5.3 * N,
      d: 32.86 * ne,
      bf: 11.48 * ne
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Pe,
      Iz: 7800 * N,
      Iy: 225 * N,
      J: 7 * N,
      d: 35.55 * ne,
      bf: 11.95 * ne
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Pe,
      Iz: 8.22 * N,
      Iy: 8.22 * N,
      J: 13.4 * N,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Pe,
      Iz: 10.7 * N,
      Iy: 10.7 * N,
      J: 17.9 * N,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Pe,
      Iz: 12.3 * N,
      Iy: 12.3 * N,
      J: 21 * N,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Pe,
      Iz: 30.3 * N,
      Iy: 30.3 * N,
      J: 48.3 * N,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Pe,
      Iz: 41.1 * N,
      Iy: 41.1 * N,
      J: 66.9 * N,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Pe,
      Iz: 49.6 * N,
      Iy: 49.6 * N,
      J: 82.2 * N,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Pe,
      Iz: 70.7 * N,
      Iy: 70.7 * N,
      J: 112 * N,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Pe,
      Iz: 98 * N,
      Iy: 98 * N,
      J: 158 * N,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Pe,
      Iz: 122 * N,
      Iy: 122 * N,
      J: 199 * N,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Pe,
      Iz: 202 * N,
      Iy: 202 * N,
      J: 323 * N,
      d: 10 * ne,
      bf: 10 * ne
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Pe,
      Iz: 254 * N,
      Iy: 254 * N,
      J: 412 * N,
      d: 10 * ne,
      bf: 10 * ne
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Pe,
      Iz: 355 * N,
      Iy: 355 * N,
      J: 564 * N,
      d: 12 * ne,
      bf: 12 * ne
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Pe,
      Iz: 452 * N,
      Iy: 452 * N,
      J: 724 * N,
      d: 12 * ne,
      bf: 12 * ne
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Pe,
      Iz: 18 * N,
      Iy: 9.58 * N,
      J: 22.6 * N,
      d: 6 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Pe,
      Iz: 23.8 * N,
      Iy: 12.3 * N,
      J: 30.3 * N,
      d: 6 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Pe,
      Iz: 33.6 * N,
      Iy: 11.8 * N,
      J: 33 * N,
      d: 8 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Pe,
      Iz: 45.1 * N,
      Iy: 15 * N,
      J: 44.5 * N,
      d: 8 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Pe,
      Iz: 46.1 * N,
      Iy: 28.2 * N,
      J: 61.3 * N,
      d: 8 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Pe,
      Iz: 63 * N,
      Iy: 37.5 * N,
      J: 84.6 * N,
      d: 8 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Pe,
      Iz: 103 * N,
      Iy: 47.1 * N,
      J: 115 * N,
      d: 10 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Pe,
      Iz: 196 * N,
      Iy: 102 * N,
      J: 249 * N,
      d: 12 * ne,
      bf: 8 * ne
    }
  ];
  function mn() {
    const e = {};
    return ko.forEach((b, P) => {
      b.type === "W" && (e[b.name] = P);
    }), e;
  }
  function gn() {
    const e = {};
    return ko.forEach((b, P) => {
      b.type === "HSS" && (e[b.name] = P);
    }), e;
  }
  function ml(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: P, elementInputs: M, nodeInputs: J, deformOutputs: B } = e, Z = b.length * 6, Y = P.length, H = P.filter((ce) => ce.length === 2).length, W = P.filter((ce) => ce.length >= 3).length, be = document.createElement("div");
    be.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${Y} (${H} frames, ${W} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((ce, oe) => {
      T += `<tr><td>${oe}</td><td>${lt(ce[0])}</td><td>${lt(ce[1])}</td><td>${lt(ce[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', P.forEach((ce, oe) => {
      var _a2, _b2, _c2, _d2;
      const q = ce.length === 2, D = ce.map((ve) => b[ve]), G = q ? Po(vo(D[1], D[0])) : 0, fe = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(oe)) ?? 0, Me = ((_b2 = M.areas) == null ? void 0 : _b2.get(oe)) ?? 0, ze = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(oe)) ?? 0, Ue = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(oe)) ?? 0;
      T += `<tr><td>${oe}</td><td>${q ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, T += `<td>${lt(G)}</td><td>${lt(fe)}</td><td>${lt(Me)}</td><td>${lt(ze)}</td><td>${lt(Ue)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", H > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += bl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < Y; ce++) {
      const oe = P[ce], q = oe.map((it) => b[it]);
      if (!(oe.length === 2)) continue;
      const G = Po(vo(q[1], q[0])), fe = ((_a = M.elasticities) == null ? void 0 : _a.get(ce)) ?? 0, Me = ((_b = M.areas) == null ? void 0 : _b.get(ce)) ?? 0, ze = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Ue = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, ve = ((_e = M.shearModuli) == null ? void 0 : _e.get(ce)) ?? 0, je = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let We = null, ge = null, Ie = null;
      try {
        We = vn(q, M, ce), ge = yn(q), Ie = ao(ns(ge), ao(We, ge));
      } catch {
        continue;
      }
      const Ae = vo(q[1], q[0]), Ve = Ae[0] / G, rt = Ae[1] / G, Xe = Ae[2] / G;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${oe[0]} \u2192 ${oe[1]}, L = ${lt(G)}</h3>`, T += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${lt(fe)} &nbsp;&nbsp; A = ${lt(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${lt(ze)} &nbsp;&nbsp; I<sub>y</sub> = ${lt(Ue)} &nbsp;&nbsp; G = ${lt(ve)} &nbsp;&nbsp; J = ${lt(je)}<br/>`, T += `EA/L = ${lt(fe)}\xB7${lt(Me)}/${lt(G)} = <b>${lt(fe * Me / G)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${lt(fe)}\xB7${lt(ze)}/${lt(G)}\xB3 = <b>${lt(12 * fe * ze / G ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${lt(fe)}\xB7${lt(Ue)}/${lt(G)}\xB3 = <b>${lt(12 * fe * Ue / G ** 3)}</b><br/>`, T += `GJ/L = ${lt(ve)}\xB7${lt(je)}/${lt(G)} = <b>${lt(ve * je / G)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${bn(Ve)}, m = ${bn(rt)}, n = ${bn(Xe)}, D = ${bn(Math.sqrt(Ve ** 2 + rt ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += Kn(We, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += Kn(ge, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += Kn(Ie, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${oe[0]} \u2192 [${oe[0] * 6}..${oe[0] * 6 + 5}], node ${oe[1]} \u2192 [${oe[1] * 6}..${oe[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Y - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += hl(P, b.length), T += "<h2>5. Boundary Conditions</h2>";
    const K = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (T += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of K) T += `<th>${ce}</th>`;
      T += "</tr></thead><tbody>", J.supports.forEach((ce, oe) => {
        T += `<tr><td>${oe}</td>`, ce.forEach((q, D) => {
          q && $e.push(oe * 6 + D), T += `<td class="${q ? "fixed" : ""}">${q ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, T += `Free DOFs: ${Z} \u2212 ${$e.length} = <b>${Z - $e.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ce = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const oe of ce) T += `<th>${oe}</th>`;
      T += "</tr></thead><tbody>", J.loads.forEach((oe, q) => {
        T += `<tr><td>${q}</td>`, oe.forEach((D) => {
          const G = Math.abs(D) > 1e-10;
          T += `<td class="${G ? "nz" : ""}">${G ? lt(D) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", B == null ? void 0 : B.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of K) T += `<th>${ce}</th>`;
      T += "</tr></thead><tbody>", B.deformations.forEach((ce, oe) => {
        T += `<tr><td>${oe}</td>`, ce.forEach((q) => {
          const D = Math.abs(q) > 1e-10;
          T += `<td class="${D ? "nz" : ""}">${lt(q, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', B == null ? void 0 : B.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of K) T += `<th>${ce}</th>`;
      T += "</tr></thead><tbody>", B.reactions.forEach((ce, oe) => {
        T += `<tr><td>${oe}</td>`, ce.forEach((q) => {
          const D = Math.abs(q) > 1e-10;
          T += `<td class="${D ? "nz-react" : ""}">${D ? lt(q, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', B == null ? void 0 : B.deformations) {
      const ce = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const oe of ce) T += `<th>${oe}<sub>i</sub></th>`;
      for (const oe of ce) T += `<th>${oe}<sub>j</sub></th>`;
      T += "</tr></thead><tbody>";
      for (let oe = 0; oe < Y; oe++) {
        const q = P[oe];
        if (q.length !== 2) continue;
        const D = q.map((G) => b[G]);
        try {
          const G = vn(D, M, oe), fe = yn(D), Me = [];
          for (const ve of q) {
            const je = ((_g = B.deformations) == null ? void 0 : _g.get(ve)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Me.push(...je);
          }
          const ze = ao(fe, Me), Ue = ao(G, ze);
          T += `<tr><td>${oe}</td><td>${q.join("\u2192")}</td>`;
          for (let ve = 0; ve < 12; ve++) {
            const je = Math.abs(Ue[ve]) > 1e-10;
            T += `<td class="${je ? "nz" : ""}">${lt(Ue[ve], 2)}</td>`;
          }
          T += "</tr>";
        } catch {
        }
      }
      T += "</tbody></table>";
    }
    const pe = `
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
    return be.innerHTML = pe + T, (_h = be.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => be.remove()), be.querySelectorAll("[data-toggle]").forEach((ce) => {
      ce.addEventListener("click", () => {
        const oe = ce.dataset.toggle, q = be.querySelector(`#rpt-${oe}`);
        if (q) {
          const D = q.style.display !== "none";
          q.style.display = D ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), be;
  }
  function lt(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function bn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Kn(e, b) {
    var _a;
    const P = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < P; J++) {
      M += "<tr>";
      for (let B = 0; B < P; B++) {
        const Z = ((_a = e[J]) == null ? void 0 : _a[B]) ?? 0, Y = Math.abs(Z) < 1e-10;
        M += `<td class="${Y ? "z" : ""} ${J === B && !Y ? "diag" : ""}">${Y ? "0" : gl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > P && (M += `<div style="color:#888;font-size:9pt">(showing ${P}\xD7${P} of ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function gl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function bl() {
    const Z = [
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
    for (const H of Z) {
      let W = "";
      for (let $e = 0; $e <= 80; $e++) {
        const pe = $e / 80, ce = 30 + pe * 540, oe = 180 / 2 - H.fn(pe) * 60;
        W += ($e === 0 ? "M" : "L") + `${ce.toFixed(1)},${oe.toFixed(1)}`;
      }
      Y += `<path d="${W}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const be = 0.75, T = 30 + be * 540 + 8, K = 180 / 2 - H.fn(be) * 60 - 6;
      Y += `<text x="${T}" y="${K}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return Y += "</svg>", Y;
  }
  function hl(e, b) {
    const P = b * 6, M = Math.min(P, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let Z = 0; Z < M; Z++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
    J += "</tr>";
    const B = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let Z = 0; Z < e.length; Z++) {
      const Y = e[Z].map((H) => H * 6);
      for (const H of Y) for (const W of Y) for (let be = 0; be < 6; be++) for (let T = 0; T < 6; T++) {
        const K = H + be, $e = W + T;
        K < M && $e < M && B[K][$e]++;
      }
    }
    for (let Z = 0; Z < M; Z++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
      for (let Y = 0; Y < M; Y++) {
        const H = B[Z][Y], W = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", be = H === 0 ? "" : H.toString();
        J += `<td style="background:${W};color:#003366">${be}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", P > M && (J += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${P}\xD7${P})</div>`), J;
  }
  let Zn = false;
  function xl(e) {
    if (Zn || window.katex) {
      Zn = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const P = document.createElement("script");
    P.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", P.onload = () => {
      Zn = true, e();
    }, document.head.appendChild(P);
  }
  function la(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function vl(e, b, P, M, J, B) {
    var _a, _b, _c, _d, _e, _f;
    const Z = P[e], Y = Z.map((ge) => b[ge]), H = Z.length === 2, W = H ? Po(vo(Y[1], Y[0])) : 0, be = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, K = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, pe = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ce = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let oe = null, q = null, D = null;
    try {
      oe = vn(Y, M, e), q = yn(Y), D = ao(ns(q), ao(oe, q));
    } catch {
    }
    const G = H ? vo(Y[1], Y[0]) : [
      0,
      0,
      0
    ], fe = W > 0 ? G[0] / W : 0, Me = W > 0 ? G[1] / W : 0, ze = W > 0 ? G[2] / W : 0, Ue = Math.sqrt(fe ** 2 + Me ** 2), ve = [];
    if ((J == null ? void 0 : J.deformations) && H) for (const ge of Z) {
      const Ie = J.deformations.get(ge) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ve.push(...Ie);
    }
    let je = [], We = [];
    if (ve.length === 12 && q && oe) {
      try {
        je = ao(q, ve);
      } catch {
        je = Array(12).fill(0);
      }
      try {
        We = ao(oe, je);
      } catch {
        We = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: Z,
      elmNodes: Y,
      isFrame: H,
      L: W,
      E: be,
      A: T,
      Iz: K,
      Iy: $e,
      G: pe,
      J: ce,
      kLocal: oe,
      T: q,
      kGlobal: D,
      l: fe,
      m: Me,
      n: ze,
      D: Ue,
      uGlobal: ve,
      uLocal: je,
      fLocal: We,
      dOut: J,
      aOut: B,
      totalNodes: b.length
    };
  }
  function yl(e, b, P, M, J, B) {
    var _a, _b;
    const Z = vl(e, b, P, M, J, B), Y = document.createElement("div");
    return Y.className = "er-panel", Y.innerHTML = El + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Z.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Z.elem.join(" \u2192 ")} \u2014 L = ${Je(Z.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${$l(Z)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ra(Z)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ml(Z)}</div>
  `, Y.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        Y.querySelectorAll(".er-tab").forEach((be) => be.classList.remove("active")), H.classList.add("active");
        const W = H.dataset.tab;
        Y.querySelectorAll(".er-body").forEach((be) => be.style.display = "none"), Y.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = Y.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => Y.remove()), (_b = Y.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = Y.classList.toggle("er-fullscreen-mode"), W = Y.querySelector("#er-fullscreen");
      W && (W.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = Y.querySelector("#er-sf-canvas");
      H && Qn(H);
      const W = Y.querySelector("#er-sf-canvas-math");
      W && Qn(W);
    }, 50), xl(() => {
      const H = Y.querySelector("#er-body-math");
      H && (H.innerHTML = ra(Z)), setTimeout(() => {
        const W = Y.querySelector("#er-sf-canvas-math");
        W && Qn(W);
      }, 50), Y.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const be = W.dataset.toggle, T = Y.querySelector(`#er-${be}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), Y;
  }
  function $l(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Je(e.E)}</td><td>A</td><td>${Je(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Je(e.Iz)}</td><td>I<sub>y</sub></td><td>${Je(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Je(e.G)}</td><td>J</td><td>${Je(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += an(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += an(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += an(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const P = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let M = 0; M < e.elem.length; M++) {
        b += `<div class="er-sub">Nodo ${e.elem[M]}: `;
        for (let J = 0; J < 6; J++) {
          const B = e.uGlobal[M * 6 + J];
          b += `${P[J]}=<span class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Je(B, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((P) => P !== 0)) {
      const P = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const M of P) b += `<th>${M}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function ra(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const P = (be) => la(be), M = (be) => la(be, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${P("\\text{Nodo } i")} = (${e.elmNodes[0].map((be) => Je(be)).join(", ")})<br/>`, b += `${P("\\text{Nodo } j")} = (${e.elmNodes[1].map((be) => Je(be)).join(", ")})<br/>`, b += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Je(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${P("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${P("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${P("I_z")})</div>`, b += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${P("I_y")})</div>`, b += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Je(e.E)} \\times ${Je(e.A)} = \\mathbf{${Je(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Je(e.E)} \\times ${Je(e.Iz)} = \\mathbf{${Je(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Je(e.E)} \\times ${Je(e.Iy)} = \\mathbf{${Je(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Je(e.G)} \\times ${Je(e.J)} = \\mathbf{${Je(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${P("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, B = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, Y = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${P("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Je(e.E)}\\times${Je(e.A)}}{${Je(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Je(J)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${P("v(\\xi)")}</p>`, b += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${P("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${P("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Je(e.E)} \\times ${Je(e.Iz)}}{${Je(e.L)}^3} = \\mathbf{${Je(12 * B)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${P("\\theta_x")} y ${P("GJ")}:</p>`, b += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Je(e.G)}\\times${Je(e.J)}}{${Je(e.L)}} = \\mathbf{${Je(Y)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${P("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Je(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Je(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Je(12 * B)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Je(12 * Z)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Je(Y)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Je(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Je(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Je(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Je(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${P("\\mathbf{K}_{local}")} (12x12)</div>`, b += an(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${hn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${hn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${hn(e.n)}`)}</div>`, b += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${hn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${P(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const be = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${M(be)}</div>`;
    } else b += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${P("\\mathbf{K}_{global}")} = ${P("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += an(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, W = e.elem[1] * 6;
    if (b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, b += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((be) => be !== 0)) {
      const be = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const T of be) b += `<th>${T}</th>`;
      b += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let T = 0; T < 6; T++) b += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[T], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) b += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[T], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ml(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Je(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Je(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Je(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const P = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of P) b += `<th>${M}</th>`;
      b += "</tr>";
      for (let M = 0; M < e.elem.length; M++) {
        b += `<tr><td>${e.elem[M]}</td>`;
        for (let J = 0; J < 6; J++) {
          const B = e.uGlobal[M * 6 + J];
          b += `<td class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Je(B, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((P) => P !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const P = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const M of P) b += `<th>${M}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Je(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function hn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function an(e) {
    var _a;
    const b = e.length, P = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < P; J++) {
      M += "<tr>";
      for (let B = 0; B < P; B++) {
        const Z = ((_a = e[J]) == null ? void 0 : _a[B]) ?? 0, Y = Math.abs(Z) < 1e-10;
        M += `<td class="${Y ? "z" : ""} ${J === B && !Y ? "diag" : ""}">${Y ? "0" : wl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > P && (M += `<div style="color:var(--fem-label);font-size:9px">(${P}\xD7${P} de ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Qn(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const P = e.width, M = e.height, J = 30, B = P - 2 * J, Z = (M - 3 * J) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, P, M);
    const Y = (H, W, be) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(J, H, B, Z), b.strokeStyle = "#444", b.beginPath(), b.moveTo(J, H + Z / 2), b.lineTo(J + B, H + Z / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(W, J + 4, H + 14);
      for (const K of be) {
        b.strokeStyle = K.color, b.lineWidth = 2.5, b.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const pe = $e / 100, ce = J + pe * B, oe = H + Z / 2 - K.fn(pe) * (Z / 2 * 0.85);
          $e === 0 ? b.moveTo(ce, oe) : b.lineTo(ce, oe);
        }
        b.stroke();
      }
      let T = J + B - 90;
      for (const K of be) b.fillStyle = K.color, b.font = "bold 10px sans-serif", b.fillText(K.label, T, H + Z - 6), T += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", J, H + Z + 12), b.fillText("1", J + B - 6, H + Z + 12), b.fillText("\u03BE", J + B / 2, H + Z + 12);
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
    ]), Y(J + Z + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  const El = `<style>
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
</style>`, nn = [
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
  let Mn = false, Oo = null, ro = null, Wt = null, Ct = null;
  function Sl() {
    Ct = document.createElement("button"), Ct.id = "help-tour-btn", Ct.innerHTML = "?", Ct.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const b = (M) => {
      Ct.style.cssText = M ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), Ct.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, b(e), Ct.innerHTML = "?";
    }), Ct.addEventListener("mouseenter", () => {
      Ct.style.transform = "scale(1.15)", Ct.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Ct.addEventListener("mouseleave", () => {
      Ct.style.transform = "scale(1)", Ct.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Ct.addEventListener("click", () => {
      Mn ? ss() : Il();
    });
    const P = document.createElement("style");
    return P.textContent = `
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
  `, document.head.appendChild(P), Ct;
  }
  function Il() {
    Mn = true, Ct && (Ct.innerHTML = "\u2715", Ct.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Ct.style.animation = "none"), Oo = document.createElement("div"), Oo.id = "tour-overlay", Oo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Oo), Uo(0);
  }
  function ss() {
    Mn = false, Ct && (Ct.innerHTML = "?", Ct.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Ct.style.animation = "helpPulse 2s infinite"), ro && (ro.remove(), ro = null), Wt && (Wt.remove(), Wt = null), Oo && (Oo.remove(), Oo = null);
  }
  function Uo(e) {
    var _a, _b;
    if (e >= nn.length) {
      kl();
      return;
    }
    const b = nn[e], P = document.querySelector(b.selector);
    if (!P) {
      Uo(e + 1);
      return;
    }
    P.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), ro && ro.remove(), Wt && Wt.remove();
    const M = P.getBoundingClientRect(), J = window.innerWidth, B = window.innerHeight, Z = 320, Y = 180;
    ro = document.createElement("div"), ro.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(ro);
    const H = J - M.right, W = M.left, be = B - M.bottom, T = M.top;
    let K = b.position || "bottom";
    K === "bottom" && be < Y + 20 && (K = "top"), K === "top" && T < Y + 20 && (K = "right"), K === "right" && H < Z + 20 && (K = "left"), K === "left" && W < Z + 20 && (K = "bottom");
    let $e, pe, ce = "";
    switch (K) {
      case "bottom":
        $e = M.left + M.width / 2 - Z / 2, pe = M.bottom + 14, ce = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = M.left + M.width / 2 - Z / 2, pe = M.top - Y - 14, ce = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = M.right + 14, pe = M.top + M.height / 2 - Y / 2, ce = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = M.left - Z - 14, pe = M.top + M.height / 2 - Y / 2, ce = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, J - Z - 10)), pe = Math.max(10, Math.min(pe, B - Y - 10)), Wt = document.createElement("div"), Wt.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${pe}px;
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
  `, Wt.innerHTML = `
    <div style="${ce}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${nn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < nn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${nn.map((q, D) => `<div style="width:${D === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${D === e ? "#0099ff" : D < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Wt), (_a = Wt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Uo(e + 1);
    }), (_b = Wt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Uo(e - 1);
    });
    const oe = (q) => {
      if (!Mn) {
        document.removeEventListener("keydown", oe);
        return;
      }
      (q.key === "ArrowRight" || q.key === "Enter") && (Uo(e + 1), document.removeEventListener("keydown", oe)), q.key === "ArrowLeft" && (Uo(Math.max(0, e - 1)), document.removeEventListener("keydown", oe)), q.key === "Escape" && (ss(), document.removeEventListener("keydown", oe));
    };
    document.addEventListener("keydown", oe);
  }
  function kl() {
    var _a;
    ro && (ro.remove(), ro = null), Wt && (Wt.remove(), Wt = null), Wt = document.createElement("div"), Wt.style.cssText = `
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
  `, Wt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Wt), (_a = Wt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => ss());
  }
  function Tl(e) {
    var _a;
    const b = e.split(/\r?\n/), P = {
      force: "TONF",
      length: "M"
    }, M = [], J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = [], H = [], W = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), T = [], K = [];
    let $e = "", pe = "";
    const ce = /* @__PURE__ */ new Map();
    for (const Fe of b) {
      const _e = Fe.trim();
      if (!_e || _e.startsWith("$")) {
        _e.startsWith("$ ") && (pe = _e.substring(2).trim());
        continue;
      }
      if (pe && (ce.has(pe) || ce.set(pe, []), ce.get(pe).push(Fe)), pe === "CONTROLS") {
        const he = _e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        he && (P.force = he[1], P.length = he[2]);
        const Le = _e.match(/TITLE2\s+"([^"]+)"/);
        Le && ($e = Le[1]);
      }
      if (pe === "STORIES - IN SEQUENCE FROM TOP") {
        const he = _e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (he) {
          const Le = he[1], xe = he[2] ? parseFloat(he[2]) : 0, Te = he[3] ? parseFloat(he[3]) : void 0;
          M.push({
            name: Le,
            height: xe,
            elev: Te ?? 0
          });
        }
      }
      if (pe === "MATERIAL PROPERTIES") {
        const he = _e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (he) {
          const Le = he[1];
          J.has(Le) || J.set(Le, {
            type: he[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const xe = J.get(Le);
          he[2] && (xe.type = he[2]);
          const Te = _e.match(/\bE\s+([\d.eE+-]+)/);
          Te && (xe.E = parseFloat(Te[1]));
          const Ye = _e.match(/\bU\s+([\d.eE+-]+)/);
          Ye && (xe.nu = parseFloat(Ye[1]), xe.G = xe.E / (2 * (1 + xe.nu)));
          const De = _e.match(/\bFY\s+([\d.eE+-]+)/);
          De && (xe.fy = parseFloat(De[1]));
          const pt = _e.match(/\bFC\s+([\d.eE+-]+)/);
          pt && (xe.fc = parseFloat(pt[1]));
          const bt = _e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          bt && (xe.density = parseFloat(bt[1]));
        }
      }
      if (pe === "FRAME SECTIONS") {
        const he = _e.match(/FRAMESECTION\s+"([^"]+)"/);
        if (he) {
          const Le = he[1];
          B.has(Le) || B.set(Le, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const xe = B.get(Le), Te = _e.match(/MATERIAL\s+"([^"]+)"/);
          Te && (xe.material = Te[1]);
          const Ye = _e.match(/SHAPE\s+"([^"]+)"/);
          Ye && (xe.shape = Ye[1]);
          const De = _e.match(/\bD\s+([\d.eE+-]+)/);
          De && (xe.D = parseFloat(De[1]));
          const pt = _e.match(/\bB\s+([\d.eE+-]+)/);
          pt && (xe.B = parseFloat(pt[1]));
          const bt = _e.match(/\bTF\s+([\d.eE+-]+)/);
          bt && (xe.TF = parseFloat(bt[1]));
          const Ge = _e.match(/\bTW\s+([\d.eE+-]+)/);
          Ge && (xe.TW = parseFloat(Ge[1]));
          const Ke = _e.match(/\bR\s+([\d.eE+-]+)/);
          Ke && (xe.R = parseFloat(Ke[1]));
          const ut = _e.match(/FILLMATERIAL\s+"([^"]+)"/);
          ut && (xe.fillMaterial = ut[1]);
          const ct = _e.match(/I2MOD\s+([\d.eE+-]+)/);
          ct && (xe.modI2 = parseFloat(ct[1]));
          const xt = _e.match(/I3MOD\s+([\d.eE+-]+)/);
          xt && (xe.modI3 = parseFloat(xt[1]));
        }
      }
      if (pe === "POINT COORDINATES") {
        const he = _e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        he && Z.set(he[1], [
          parseFloat(he[2]),
          parseFloat(he[3])
        ]);
      }
      if (pe === "LINE CONNECTIVITIES") {
        const he = _e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        he && Y.push({
          name: he[1],
          type: he[2],
          pt1: he[3],
          pt2: he[4],
          nStories: parseInt(he[5])
        });
      }
      if (pe === "POINT ASSIGNS") {
        const he = _e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        he && W.set(`${he[1]}@${he[2]}`, he[3].split(/\s+/));
      }
      if (pe === "LINE ASSIGNS") {
        const he = _e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (he) {
          const Le = {
            story: he[2],
            section: he[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, xe = _e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          xe && (Le.rigidZone = parseFloat(xe[1]));
          const Te = _e.match(/RELEASE\s+"([^"]+)"/);
          Te && (Le.releases = Te[1].split(/\s+/));
          const Ye = _e.match(/ANG\s+([-\d.eE+]+)/);
          Ye && (Le.angle = parseFloat(Ye[1])), be.set(`${he[1]}@${he[2]}`, Le);
        }
      }
      if (pe === "GRIDS") {
        const he = _e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        he && K.push({
          label: he[1],
          dir: he[2],
          coord: parseFloat(he[3])
        });
      }
      if (pe === "FRAME OBJECT LOADS") {
        const he = _e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        he && T.push({
          line: he[1],
          story: he[2],
          type: he[3],
          dir: he[4],
          lc: he[5],
          val: parseFloat(he[6])
        });
      }
      if (pe === "AREA CONNECTIVITIES") {
        const he = _e.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (he) {
          const Le = ((_a = he[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((xe) => xe.replace(/"/g, ""))) || [];
          H.push({
            name: he[1],
            pts: Le,
            nStories: 0
          });
        }
      }
    }
    const oe = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Fe = M.length - 1;
      oe.set(M[Fe].name, M[Fe].elev);
      for (let _e = Fe - 1; _e >= 0; _e--) {
        const Le = oe.get(M[_e + 1].name) + M[_e].height;
        M[_e].elev = Le, oe.set(M[_e].name, Le);
      }
    }
    const q = [], D = [], G = /* @__PURE__ */ new Map(), fe = (Fe, _e) => `${Fe}@${_e}`, Me = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
    for (const Fe of Y) ze.set(Fe.name, Fe);
    for (const Fe of Y) for (const [_e, he] of be) {
      if (!_e.startsWith(Fe.name + "@")) continue;
      const Le = he.story, xe = M.findIndex((Te) => Te.name === Le);
      if (!(xe < 0)) if (Fe.type === "COLUMN" || Fe.type === "BRACE") {
        Me.add(fe(Fe.pt2, Le));
        const Te = Math.max(Fe.nStories, 1), Ye = Math.min(xe + Te, M.length - 1);
        Me.add(fe(Fe.pt1, M[Ye].name));
      } else Me.add(fe(Fe.pt1, Le)), Me.add(fe(Fe.pt2, Le));
    }
    for (const [Fe] of W) Me.add(Fe);
    for (const Fe of Me) {
      const [_e, he] = Fe.split("@"), Le = Z.get(_e), xe = oe.get(he);
      Le === void 0 || xe === void 0 || (q.push([
        Le[0],
        Le[1],
        xe
      ]), D.push(Fe), G.set(Fe, q.length - 1));
    }
    const Ue = [], ve = [], je = [], We = [], ge = /* @__PURE__ */ new Map();
    for (const Fe of Y) for (const [_e, he] of be) {
      if (!_e.startsWith(Fe.name + "@")) continue;
      const Le = he.story, xe = M.findIndex((Ge) => Ge.name === Le);
      if (xe < 0) continue;
      let Te, Ye;
      if (Fe.type === "COLUMN" || Fe.type === "BRACE") {
        const Ge = Math.max(Fe.nStories, 1), Ke = Math.min(xe + Ge, M.length - 1);
        Te = fe(Fe.pt1, M[Ke].name), Ye = fe(Fe.pt2, Le);
      } else Te = fe(Fe.pt1, Le), Ye = fe(Fe.pt2, Le);
      const De = G.get(Te), pt = G.get(Ye);
      if (De === void 0 || pt === void 0 || De === pt) continue;
      const bt = Ue.length;
      if (Ue.push([
        De,
        pt
      ]), ve.push(Fe.name), je.push(Fe.type), We.push(Le), ge.set(bt, he.section), he.rigidZone > 0 && it.set(bt, [
        he.rigidZone,
        he.rigidZone
      ]), he.releases.length > 0) {
        const Ge = new Array(12).fill(false), Ke = {
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
        for (const ut of he.releases) {
          const ct = Ke[ut];
          ct !== void 0 && (Ge[ct] = true);
        }
        ft.set(bt, Ge);
      }
    }
    const Ie = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map();
    for (const [Fe, _e] of ge) {
      const he = B.get(_e);
      if (!he) continue;
      const Le = J.get(he.material);
      Le && (Ie.set(Fe, Le.E), Ae.set(Fe, Le.G));
      const xe = he.D, Te = he.B, Ye = he.TF, De = he.TW;
      let pt = 0, bt = 0, Ge = 0, Ke = 0, ut = 0, ct = 0, xt = "rect";
      switch (he.shape) {
        case "Concrete Rectangular":
          pt = xe * Te, bt = Te * xe ** 3 / 12, Ge = xe * Te ** 3 / 12, Ke = Te * xe ** 3 * (1 / 3 - 0.21 * (xe / Te) * (1 - xe ** 4 / (12 * Te ** 4))), ut = ct = 5 / 6 * pt, xt = "rect";
          break;
        case "Concrete Circle":
          pt = Math.PI * xe ** 2 / 4, bt = Ge = Math.PI * xe ** 4 / 64, Ke = Math.PI * xe ** 4 / 32, ut = ct = 0.9 * pt, xt = "circ";
          break;
        case "Steel I/Wide Flange":
          pt = 2 * Te * Ye + (xe - 2 * Ye) * De, bt = (Te * xe ** 3 - (Te - De) * (xe - 2 * Ye) ** 3) / 12, Ge = (2 * Ye * Te ** 3 + (xe - 2 * Ye) * De ** 3) / 12, Ke = (2 * Te * Ye ** 3 + (xe - 2 * Ye) * De ** 3) / 3, ut = (xe - 2 * Ye) * De, ct = 2 * Te * Ye * 5 / 6, xt = "I";
          break;
        case "Steel Tube":
          pt = xe * Te - (xe - 2 * De) * (Te - 2 * De), bt = (Te * xe ** 3 - (Te - 2 * De) * (xe - 2 * De) ** 3) / 12, Ge = (xe * Te ** 3 - (xe - 2 * De) * (Te - 2 * De) ** 3) / 12, Ke = 2 * De * (xe - De) * (Te - De) * ((xe - De) * (Te - De)) / (xe - De + (Te - De)), ut = 2 * xe * De, ct = 2 * Te * De, xt = "HSS";
          break;
        case "Filled Steel Tube":
          pt = xe * Te, bt = Te * xe ** 3 / 12, Ge = xe * Te ** 3 / 12, Ke = 2 * De * (xe - De) * (Te - De) * ((xe - De) * (Te - De)) / (xe - De + (Te - De)), ut = 2 * xe * De + 5 / 6 * (xe - 2 * De) * (Te - 2 * De), ct = 2 * Te * De + 5 / 6 * (xe - 2 * De) * (Te - 2 * De), xt = "CFT";
          break;
        case "Steel Angle": {
          const Gt = Ye || De;
          pt = Gt * (xe + Te - Gt), bt = Gt * (xe ** 3 + Te * Gt ** 2 + Gt ** 2 * (xe - Gt)) / 12, Ge = Gt * (Te ** 3 + xe * Gt ** 2 + Gt ** 2 * (Te - Gt)) / 12, Ke = (xe + Te - Gt) * Gt ** 3 / 3, ut = xe * Gt, ct = Te * Gt, xt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          pt = 2 * Te * Ye + (xe - 2 * Ye) * De, bt = (De * xe ** 3 + 2 * Te * Ye * (xe - Ye) ** 2) / 12, Ge = (2 * Ye * Te ** 3 + (xe - 2 * Ye) * De ** 3) / 12, Ke = (2 * Te * Ye ** 3 + (xe - 2 * Ye) * De ** 3) / 3, ut = (xe - 2 * Ye) * De, ct = 2 * Te * Ye * 5 / 6, xt = he.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          pt = 2 * (2 * Te * Ye + (xe - 2 * Ye) * De), bt = 2 * (De * xe ** 3 + 2 * Te * Ye * (xe - Ye) ** 2) / 12, Ge = 2 * (2 * Ye * Te ** 3 + (xe - 2 * Ye) * De ** 3) / 12, Ke = 2 * (2 * Te * Ye ** 3 + (xe - 2 * Ye) * De ** 3) / 3, ut = 2 * (xe - 2 * Ye) * De, ct = 4 * Te * Ye * 5 / 6, xt = "2C";
          break;
        default:
          xe > 0 && Te > 0 && (pt = xe * Te, bt = Te * xe ** 3 / 12, Ge = xe * Te ** 3 / 12, Ke = Math.min(xe, Te) * Math.max(xe, Te) ** 3 / 3 * 0.3, ut = ct = 5 / 6 * pt);
          break;
      }
      he.modI2 && (Ge *= he.modI2), he.modI3 && (bt *= he.modI3), Ve.set(Fe, pt), St.set(Fe, bt), Ft.set(Fe, Ge), Nt.set(Fe, Ke), ut > 0 && rt.set(Fe, ut), ct > 0 && Xe.set(Fe, ct), vt.set(Fe, {
        type: xt,
        b: Te || void 0,
        h: xe || void 0,
        d: xt === "circ" || xt === "pipe" ? xe : void 0,
        tw: De || void 0,
        tf: Ye || void 0,
        r: he.R,
        name: _e
      });
    }
    const gt = /* @__PURE__ */ new Map();
    for (const [Fe, _e] of W) {
      const he = G.get(Fe);
      if (he === void 0) continue;
      const Le = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const xe of _e) xe === "UX" && (Le[0] = true), xe === "UY" && (Le[1] = true), xe === "UZ" && (Le[2] = true), xe === "RX" && (Le[3] = true), xe === "RY" && (Le[4] = true), xe === "RZ" && (Le[5] = true);
      gt.set(he, Le);
    }
    const io = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
    for (let Fe = 0; Fe < ve.length; Fe++) qe.set(`${ve[Fe]}@${We[Fe]}`, Fe);
    for (const Fe of T) {
      const _e = qe.get(`${Fe.line}@${Fe.story}`);
      if (_e === void 0) continue;
      const [he, Le] = Ue[_e], xe = q[he], Te = q[Le], Ye = Math.sqrt((Te[0] - xe[0]) ** 2 + (Te[1] - xe[1]) ** 2 + (Te[2] - xe[2]) ** 2);
      if (Ye < 1e-10) continue;
      const De = Fe.val * Ye / 2;
      let pt = 0, bt = 0, Ge = 0;
      Fe.dir === "GRAV" || Fe.dir === "GRAVITY" ? Ge = -De : Fe.dir === "X" ? pt = De : Fe.dir === "Y" ? bt = De : Fe.dir === "Z" && (Ge = -De);
      for (const Ke of [
        he,
        Le
      ]) {
        const ut = io.get(Ke) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        ut[0] += pt, ut[1] += bt, ut[2] += Ge, io.set(Ke, ut);
      }
    }
    const Mt = /* @__PURE__ */ new Map();
    for (const [Fe, _e] of ge) {
      const he = B.get(_e);
      if (!he) continue;
      const Le = J.get(he.material);
      (Le == null ? void 0 : Le.density) && Mt.set(Fe, Le.density);
    }
    return {
      units: P,
      stories: M.reverse(),
      materials: J,
      frameSections: B,
      nodes: q,
      nodeNames: D,
      nodeNameToIdx: G,
      elements: Ue,
      elementNames: ve,
      elementTypes: je,
      elementStories: We,
      elementSections: ge,
      nodeInputs: {
        supports: gt,
        loads: io
      },
      elementInputs: {
        elasticities: Ie,
        shearModuli: Ae,
        areas: Ve,
        momentsOfInertiaZ: St,
        momentsOfInertiaY: Ft,
        torsionalConstants: Nt,
        shearAreasY: rt,
        shearAreasZ: Xe,
        rigidOffsets: it,
        momentReleases: ft,
        densities: Mt,
        sectionShapes: vt
      },
      sectionShapes: vt,
      grids: K,
      info: {
        nNodes: q.length,
        nFrames: Ue.length,
        nAreas: H.length,
        title: $e
      },
      rawSections: ce
    };
  }
  function at(e) {
    return e && parseFloat(e) || 0;
  }
  function pa(e) {
    const b = /* @__PURE__ */ new Map(), P = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = P.exec(e)) !== null; ) b.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return b;
  }
  function zl(e) {
    const b = e.split(/\r?\n/);
    return b.some((M) => M.trim().startsWith("TABLE:")) ? Al(b) : Ll(b);
  }
  function Al(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let P = "";
    for (const oe of e) {
      const q = oe.trimEnd();
      q.endsWith("_") ? P += q.slice(0, -1) + " " : (P += q, b.push(P), P = "");
    }
    P && b.push(P);
    const M = {
      force: "KN",
      length: "m"
    };
    let J = "UX,UY,UZ,RX,RY,RZ";
    const B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = [], be = [], T = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), pe = [];
    let ce = "";
    for (const oe of b) {
      const q = oe.trim();
      if (!q || q.startsWith(";") || q.startsWith("File ")) continue;
      if (q.startsWith("TABLE:")) {
        const G = q.match(/TABLE:\s+"(.+?)"/);
        ce = G ? G[1].toUpperCase() : "";
        continue;
      }
      if (q === "END TABLE DATA") {
        ce = "";
        continue;
      }
      const D = pa(q);
      switch (ce) {
        case "PROGRAM CONTROL": {
          const G = D.get("CurrUnits");
          if (G) {
            const fe = G.split(",").map((Me) => Me.trim());
            fe[0] && (M.force = fe[0]), fe[1] && (M.length = fe[1]);
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
            const fe = B.get(G) || {
              E: 0,
              nu: 0,
              G: 0
            };
            fe.E = at(D.get("E1")), fe.G = at(D.get("G12")), fe.nu = at(D.get("U12")), fe.density = at(D.get("UnitMass")), B.set(G, fe);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const G = D.get("Material");
          G && B.has(G) && (B.get(G).fy = at(D.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const G = D.get("SectionName");
          G && Z.set(G, {
            material: D.get("Material") || "",
            shape: D.get("Shape") || "Rectangular",
            D: at(D.get("t3")),
            B: at(D.get("t2")),
            TF: at(D.get("tf")),
            TW: at(D.get("tw")),
            A: at(D.get("Area")),
            Iz: at(D.get("I33")),
            Iy: at(D.get("I22")),
            J: at(D.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const G = D.get("Section");
          G && Y.set(G, {
            material: D.get("Material") || "",
            type: D.get("Type") || "Shell",
            thickness: at(D.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const G = D.get("Joint");
          if (G) {
            const fe = at(D.get("XorR")), Me = at(D.get("Y")), ze = at(D.get("Z"));
            H.set(G, [
              fe,
              Me,
              ze
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const G = D.get("Frame"), fe = D.get("JointI"), Me = D.get("JointJ");
          G && fe && Me && W.push({
            name: G,
            j1: fe,
            j2: Me
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const G = D.get("Area");
          if (G) {
            const fe = parseInt(D.get("NumJoints") || "4"), Me = [];
            for (let ze = 1; ze <= fe; ze++) {
              const Ue = D.get(`Joint${ze}`);
              Ue && Me.push(Ue);
            }
            Me.length >= 3 && be.push({
              name: G,
              joints: Me
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const G = D.get("Joint");
          if (G) {
            const fe = [
              ((_a = D.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = D.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = D.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = D.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = D.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = D.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            T.set(G, fe);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const G = D.get("Frame"), fe = D.get("AnalSect");
          G && fe && K.set(G, fe);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const G = D.get("Area"), fe = D.get("Section");
          G && fe && $e.set(G, fe);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const G = D.get("Joint");
          G && pe.push({
            joint: G,
            fx: at(D.get("F1")),
            fy: at(D.get("F2")),
            fz: at(D.get("F3")),
            mx: at(D.get("M1")),
            my: at(D.get("M2")),
            mz: at(D.get("M3"))
          });
          break;
        }
      }
    }
    return fa(M, J, B, Z, Y, H, W, be, T, K, $e, pe);
  }
  function Ll(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let P = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = [], H = [], W = /* @__PURE__ */ new Map(), be = [];
    let T = "", K = "";
    for (const ce of e) {
      const oe = ce.trim();
      if (!oe || oe.startsWith(";")) continue;
      if (!ce.startsWith(" ") && !ce.startsWith("	")) {
        const G = oe.toUpperCase();
        if (G === "END") break;
        G.startsWith("SHELL SECTION") ? T = "SHELL SECTION" : G.startsWith("FRAME SECTION") ? T = "FRAME SECTION" : T = G.split(/\s+/)[0];
        continue;
      }
      const q = pa(oe), D = oe.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const G = q.get("DOF");
          G && (P = G);
          const fe = q.get("LENGTH");
          fe && (b.length = fe);
          const Me = q.get("FORCE");
          Me && (b.force = Me);
          break;
        }
        case "JOINT": {
          const G = D[0];
          Z.set(G, [
            at(q.get("X")),
            at(q.get("Y")),
            at(q.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const G = q.get("ADD"), fe = q.get("DOF");
          if (G && fe) {
            const Me = fe.split(","), ze = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ue of Me) {
              const ve = Ue.toUpperCase();
              (ve === "UX" || ve === "U1") && (ze[0] = true), (ve === "UY" || ve === "U2") && (ze[1] = true), (ve === "UZ" || ve === "U3") && (ze[2] = true), (ve === "RX" || ve === "R1") && (ze[3] = true), (ve === "RY" || ve === "R2") && (ze[4] = true), (ve === "RZ" || ve === "R3") && (ze[5] = true);
            }
            W.set(G, ze);
          }
          break;
        }
        case "MATERIAL": {
          const G = q.get("NAME");
          if (G) K = G, M.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (K) {
            const fe = M.get(K), Me = q.get("E");
            Me && (fe.E = at(Me));
            const ze = q.get("U");
            ze && (fe.nu = at(ze)), fe.G = fe.E / (2 * (1 + fe.nu));
            const Ue = q.get("M");
            Ue && (fe.density = at(Ue));
          }
          break;
        }
        case "SHELL": {
          const G = D[0], fe = q.get("J");
          q.get("SEC"), fe && H.push({
            name: G,
            joints: fe.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const G = q.get("NAME");
          G && B.set(G, {
            material: q.get("MAT") || "",
            type: q.get("TYPE") || "Shell",
            thickness: at(q.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const G = D[0], fe = q.get("J");
          if (fe) {
            const Me = fe.split(",");
            Me.length >= 2 && Y.push({
              name: G,
              j1: Me[0],
              j2: Me[1]
            });
          }
          break;
        }
        case "LOAD": {
          const G = q.get("ADD");
          G && be.push({
            joint: G,
            fx: at(q.get("UX")),
            fy: at(q.get("UY")),
            fz: at(q.get("UZ")),
            mx: at(q.get("MX")),
            my: at(q.get("MY")),
            mz: at(q.get("MZ"))
          });
          break;
        }
      }
    }
    return fa(b, P, M, J, B, Z, Y, H, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), be);
  }
  function fa(e, b, P, M, J, B, Z, Y, H, W, be, T) {
    var _a;
    const K = [], $e = /* @__PURE__ */ new Map(), pe = [];
    for (const [ve, je] of B) $e.set(ve, pe.length), K.push(ve), pe.push(je);
    const ce = [], oe = [], q = /* @__PURE__ */ new Map();
    for (const ve of Z) {
      const je = $e.get(ve.j1), We = $e.get(ve.j2);
      if (je !== void 0 && We !== void 0) {
        const ge = ce.length;
        ce.push([
          je,
          We
        ]), oe.push(ve.name);
        const Ie = W.get(ve.name);
        Ie && q.set(ge, Ie);
      }
    }
    const D = ce.length;
    for (const ve of Y) {
      const je = ve.joints.map((We) => $e.get(We)).filter((We) => We !== void 0);
      if (je.length >= 3) {
        const We = ce.length;
        ce.push(je), oe.push(ve.name);
        const ge = be.get(ve.name);
        ge && q.set(We, ge);
      }
    }
    const G = ce.length - D, fe = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, Me = /* @__PURE__ */ new Map(), ze = P.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ve = 0; ve < ce.length; ve++) {
      const je = q.get(ve), We = je ? M.get(je) : null, ge = je ? J.get(je) : null;
      if (We || ce[ve].length === 2) {
        const Ie = We || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ae = P.get(Ie.material) || ze, Ve = Ae.E || ze.E, rt = Ae.nu || 0.3, Xe = Ae.G || Ve / (2 * (1 + rt));
        fe.elasticities.set(ve, Ve), fe.shearModuli.set(ve, Xe), fe.areas.set(ve, Ie.A || Ie.D * Ie.B), fe.momentsOfInertiaZ.set(ve, Ie.Iz || Ie.B * Ie.D ** 3 / 12), fe.momentsOfInertiaY.set(ve, Ie.Iy || Ie.D * Ie.B ** 3 / 12), fe.torsionalConstants.set(ve, Ie.J || 0), fe.densities.set(ve, Ae.density || 0), ((_a = Ie.shape) == null ? void 0 : _a.includes("Wide Flange")) || Ie.shape === "I" ? Me.set(ve, {
          type: "I",
          b: Ie.B,
          h: Ie.D,
          name: je || "I-section"
        }) : Me.set(ve, {
          type: "rect",
          b: Ie.B,
          h: Ie.D
        });
      } else if (ge) {
        const Ie = P.get(ge.material) || ze, Ae = Ie.E || ze.E, Ve = Ie.nu || 0.2, rt = Ie.G || Ae / (2 * (1 + Ve));
        fe.elasticities.set(ve, Ae), fe.shearModuli.set(ve, rt), fe.thicknesses.set(ve, ge.thickness), fe.poissonsRatios.set(ve, Ve), fe.densities.set(ve, Ie.density || 0);
      }
    }
    const Ue = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ve, je] of H) {
      const We = $e.get(ve);
      We !== void 0 && Ue.supports.set(We, je);
    }
    for (const ve of T) {
      const je = $e.get(ve.joint);
      if (je !== void 0) {
        const We = Ue.forces.get(je) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        We[0] += ve.fx, We[1] += ve.fy, We[2] += ve.fz, We[3] += ve.mx, We[4] += ve.my, We[5] += ve.mz, Ue.forces.set(je, We);
      }
    }
    return {
      units: e,
      dof: b,
      materials: P,
      frameSections: M,
      shellSections: J,
      nodes: pe,
      nodeNames: K,
      nodeNameToIdx: $e,
      elements: ce,
      elementNames: oe,
      elementSections: q,
      nodeInputs: Ue,
      elementInputs: fe,
      sectionShapes: Me,
      info: {
        nNodes: pe.length,
        nFrames: D,
        nShells: G,
        title: `SAP2000 (${D} frames, ${G} shells)`
      }
    };
  }
  function Cl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: J } = e, B = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", Y = [], H = (q) => Y.push(q), W = () => Y.push(" ");
    H(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), W(), H('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), H("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
    const be = [], T = [];
    if (P.forEach((q, D) => {
      q.length === 2 ? be.push(D) : T.push(D);
    }), be.length > 0) {
      H('TABLE:  "CONNECTIVITY - FRAME"');
      for (const q of be) {
        const D = P[q];
        H(`   Frame=${q + 1}   JointI=${D[0] + 1}   JointJ=${D[1] + 1}   IsCurved=No`);
      }
      W();
    }
    if (T.length > 0) {
      H('TABLE:  "CONNECTIVITY - AREA"');
      for (const q of T) {
        const D = P[q], G = D.map((fe, Me) => `Joint${Me + 1}=${fe + 1}`).join("   ");
        H(`   Area=${q + 1}   NumJoints=${D.length}   ${G}`);
      }
      W();
    }
    H('TABLE:  "COORDINATE SYSTEMS"'), H("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), W(), H('TABLE:  "DATABASE FORMAT TYPES"'), H("   UnitsCurr=Yes   OverrideE=No"), W();
    const K = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const q of be) {
      const D = ((_a = J.areas) == null ? void 0 : _a.get(q)) || 0, G = ((_b = J.momentsOfInertiaZ) == null ? void 0 : _b.get(q)) || 0, fe = ((_c = J.momentsOfInertiaY) == null ? void 0 : _c.get(q)) || 0, Me = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(q)) || 0, ze = ((_e = J.elasticities) == null ? void 0 : _e.get(q)) || 0, Ue = `MAT_${Math.round(ze)}`, ve = `A${D.toPrecision(6)}_Iz${G.toPrecision(6)}`;
      if (!K.has(ve)) {
        let We = 0.3, ge = 0.3;
        D > 0 && G > 0 && (We = Math.sqrt(12 * G / D), ge = D / We), K.set(ve, {
          A: D,
          Iz: G,
          Iy: fe,
          J: Me,
          b: ge,
          h: We,
          matKey: Ue
        });
      }
      const je = [
        ...K.keys()
      ].indexOf(ve) + 1;
      $e.set(q, `SEC${je}`);
    }
    if (be.length > 0) {
      H('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const q of be) {
        const D = $e.get(q) || "SEC1";
        H(`   Frame=${q + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      W();
    }
    if (K.size > 0) {
      H('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let q = 0;
      for (const [, D] of K) {
        q++;
        const G = D.A * 5 / 6;
        H(`   SectionName=SEC${q}   Material=${D.matKey}   Shape=Rectangular   t3=${Lt(D.h)}   t2=${Lt(D.b)}   Area=${Lt(D.A)}   TorsConst=${Lt(D.J)}   I33=${Lt(D.Iz)}   I22=${Lt(D.Iy)}   I23=0   AS2=${Lt(G)}   AS3=${Lt(G)} _`), H("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const pe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
    for (const q of T) {
      const D = ((_f = J.thicknesses) == null ? void 0 : _f.get(q)) || 0.1, G = ((_g = J.elasticities) == null ? void 0 : _g.get(q)) || 0, fe = `MAT_${Math.round(G)}`, Me = `t${D.toPrecision(6)}`;
      pe.has(Me) || pe.set(Me, {
        t: D,
        matKey: fe
      });
      const ze = [
        ...pe.keys()
      ].indexOf(Me) + 1;
      ce.set(q, `SSEC${ze}`);
    }
    if (T.length > 0) {
      H('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of T) {
        const G = ce.get(D) || "SSEC1";
        H(`   Area=${D + 1}   Section=${G}   MatProp=Default`);
      }
      W(), H('TABLE:  "AREA SECTION PROPERTIES"');
      let q = 0;
      for (const [, D] of pe) q++, H(`   Section=SSEC${q}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Lt(D.t)}   BendThick=${Lt(D.t)}   Color=Cyan`);
      W();
    }
    H('TABLE:  "JOINT COORDINATES"');
    for (let q = 0; q < b.length; q++) {
      const D = b[q];
      H(`   Joint=${q + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Lt(D[0])}   Y=${Lt(D[1])}   Z=${Lt(D[2])}   SpecialJt=No`);
    }
    if (W(), M.supports && M.supports.size > 0) {
      H('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [q, D] of M.supports) {
        if (!D.some((fe) => fe)) continue;
        const G = (fe) => fe ? "Yes" : "No";
        H(`   Joint=${q + 1}   U1=${G(D[0])}   U2=${G(D[1])}   U3=${G(D[2])}   R1=${G(D[3])}   R2=${G(D[4])}   R3=${G(D[5])}`);
      }
      W();
    }
    if (H('TABLE:  "LOAD PATTERN DEFINITIONS"'), H("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), W(), H('TABLE:  "LOAD CASE DEFINITIONS"'), H('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), W(), H('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), H('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), W(), M.forces && M.forces.size > 0) {
      H('TABLE:  "JOINT LOADS - FORCE"');
      for (const [q, D] of M.forces) D.some((G) => Math.abs(G) > 1e-12) && H(`   Joint=${q + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Lt(D[0])}   F2=${Lt(D[1])}   F3=${Lt(D[2])}   M1=${Lt(D[3])}   M2=${Lt(D[4])}   M3=${Lt(D[5])}`);
      W();
    }
    const oe = /* @__PURE__ */ new Map();
    for (let q = 0; q < P.length; q++) {
      const D = ((_h = J.elasticities) == null ? void 0 : _h.get(q)) || 0, G = ((_i = J.shearModuli) == null ? void 0 : _i.get(q)) || 0, fe = D > 0 && G > 0 ? Math.max(0, Math.min(0.5, D / (2 * G) - 1)) : 0.2, Me = ((_j = J.densities) == null ? void 0 : _j.get(q)) || 0, ze = `MAT_${Math.round(D)}`;
      oe.has(ze) || oe.set(ze, {
        E: D,
        nu: fe,
        G,
        rho: Me
      });
    }
    H('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [q] of oe) H(`   Material=${q}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    W(), H('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [q, D] of oe) H(`   Material=${q}   UnitWeight=${Lt(D.rho * 9.81)}   UnitMass=${Lt(D.rho)}   E1=${Lt(D.E)}   G12=${Lt(D.G)}   U12=${Lt(D.nu)}   A1=9.9E-06`);
    W(), H('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [q] of oe) H(`   Material=${q}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), H('TABLE:  "PROGRAM CONTROL"'), H(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${B.force}, ${B.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), H("END TABLE DATA"), H(""), Y.join(`\r
`);
  }
  function Lt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Fl(e) {
    const { e2kModel: b } = e, P = b == null ? void 0 : b.rawSections;
    return P && P.size > 0 ? Rl(P) : Pl(e);
  }
  function Rl(e, b) {
    const P = [], M = [
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
    P.push("$ File exported from Awatif FEM Studio (round-trip)"), P.push("");
    for (const J of M) {
      const B = e.get(J);
      if (!(!B || B.length === 0)) {
        P.push(`$ ${J}`);
        for (const Z of B) P.push(Z);
        P.push("");
      }
    }
    for (const [J, B] of e) if (!M.includes(J) && B.length !== 0) {
      P.push(`$ ${J}`);
      for (const Z of B) P.push(Z);
      P.push("");
    }
    return P.push("  END"), P.push("$ END OF MODEL FILE"), P.join(`\r
`);
  }
  function Pl(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: J, title: B, units: Z } = e, Y = (Z == null ? void 0 : Z.force) || "TONF", H = (Z == null ? void 0 : Z.length) || "M", W = [], be = (ge) => Math.round(ge * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${Y}"  "${H}"  "C"  `), B && W.push(`  TITLE2  "${B}"  `), W.push("");
    const T = /* @__PURE__ */ new Set();
    b.forEach((ge) => T.add(be(ge[1])));
    const K = [
      ...T
    ].sort((ge, Ie) => ge - Ie), $e = [], pe = /* @__PURE__ */ new Map();
    $e.push("Base"), pe.set(K[0], "Base");
    for (let ge = 1; ge < K.length; ge++) {
      const Ie = `Level_${ge}`;
      $e.push(Ie), pe.set(K[ge], Ie);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let ge = K.length - 1; ge >= 1; ge--) W.push(`  STORY "${$e[ge]}"  HEIGHT ${be(K[ge] - K[ge - 1])} MASTERSTORY "Yes"  `);
    K.length > 0 && W.push(`  STORY "Base"  ELEV ${K[0]} `), W.push(""), P.some((ge) => ge.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const oe = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((ge) => oe.add(ge));
    const q = /* @__PURE__ */ new Map();
    let D = 0;
    for (const ge of oe) {
      const Ie = `Mat_${++D}`;
      q.set(ge, Ie), W.push(`  MATERIAL  "${Ie}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Ie}"    SYMTYPE "Isotropic"  E ${ge}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const G = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    P.forEach((ge, Ie) => {
      var _a2, _b2;
      if (ge.length !== 2) return;
      const Ae = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(Ie), Ve = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Ie)) ?? 0, rt = q.get(Ve) || "Mat_1", Xe = (Ae == null ? void 0 : Ae.h) ?? 0, it = (Ae == null ? void 0 : Ae.b) ?? 0, ft = (Ae == null ? void 0 : Ae.d) ?? 0, St = (Ae == null ? void 0 : Ae.tf) ?? 0, Ft = (Ae == null ? void 0 : Ae.tw) ?? 0, Nt = (Ae == null ? void 0 : Ae.type) || "rect", vt = `${Nt}_${Xe}_${it}_${ft}_${St}_${Ft}`;
      (Ae == null ? void 0 : Ae.name) && !Me.has(vt) && Me.set(vt, Ae.name);
      let gt = Me.get(vt);
      if (gt || (Nt === "rect" ? gt = `R${be(it * 100)}x${be(Xe * 100)}` : Nt === "circ" ? gt = `C_D${be(ft * 100)}` : Nt === "I" ? gt = `I_${be(Xe * 100)}` : gt = `Sec_${G.size + 1}`, Me.set(vt, gt)), fe.set(Ie, gt), G.has(gt)) return;
      G.add(gt);
      const qe = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Nt] || "Concrete Rectangular";
      let Mt = `  FRAMESECTION  "${gt}"  MATERIAL "${rt}"  SHAPE "${qe}"`;
      Xe && (Mt += `  D ${Xe}`), it && (Mt += `  B ${it}`), ft && !Xe && (Mt += `  D ${ft}`), St && (Mt += `  TF ${St}`), Ft && (Mt += `  TW ${Ft}`), W.push(Mt);
    }), W.push("");
    const ze = /* @__PURE__ */ new Map();
    let Ue = 0;
    b.forEach((ge) => {
      const Ie = `${be(ge[0])},${be(ge[2])}`;
      ze.has(Ie) || ze.set(Ie, `${++Ue}`);
    }), W.push("$ POINT COORDINATES");
    for (const [ge, Ie] of ze) {
      const [Ae, Ve] = ge.split(",").map(Number);
      W.push(`  POINT "${Ie}"  ${Ae} ${Ve} `);
    }
    W.push("");
    const ve = (ge) => {
      const Ie = b[ge], Ae = `${be(Ie[0])},${be(Ie[2])}`;
      return {
        pt: ze.get(Ae) || "1",
        story: pe.get(be(Ie[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const je = [];
    P.forEach((ge, Ie) => {
      if (ge.length !== 2) return;
      const Ae = Ol(b, ge), Ve = fe.get(Ie) || `Sec_${Ie}`;
      if (Ae === "BEAM") {
        const rt = ve(ge[0]), Xe = ve(ge[1]);
        W.push(`  LINE  "E${Ie + 1}"  BEAM  "${rt.pt}"  "${Xe.pt}"  0`), je.push(`  LINEASSIGN  "E${Ie + 1}"  "${rt.story}"  SECTION "${Ve}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const rt = b[ge[0]][1] <= b[ge[1]][1] ? ge[0] : ge[1], Xe = b[ge[0]][1] <= b[ge[1]][1] ? ge[1] : ge[0];
        ve(rt);
        const it = ve(Xe), ft = be(b[rt][1]), St = be(b[Xe][1]), Ft = K.indexOf(ft), Nt = K.indexOf(St), vt = Math.max(1, Nt >= 0 && Ft >= 0 ? Nt - Ft : 1);
        W.push(`  LINE  "E${Ie + 1}"  ${Ae}  "${it.pt}"  "${it.pt}"  ${vt}`);
        for (let gt = 0; gt < vt; gt++) {
          const io = Nt - gt;
          io >= 0 && io < $e.length && je.push(`  LINEASSIGN  "E${Ie + 1}"  "${$e[io]}"  SECTION "${Ve}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((ge, Ie) => {
      const Ae = [];
      if (ge[0] && Ae.push("UX"), ge[1] && Ae.push("UY"), ge[2] && Ae.push("UZ"), ge[3] && Ae.push("RX"), ge[4] && Ae.push("RY"), ge[5] && Ae.push("RZ"), Ae.length > 0) {
        const Ve = ve(Ie);
        W.push(`  POINTASSIGN  "${Ve.pt}"  "${Ve.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), je.forEach((ge) => W.push(ge)), W.push("");
    const We = [];
    if (P.forEach((ge, Ie) => {
      if (ge.length === 4) {
        const Ae = b[ge[0]], Ve = b[ge[1]], rt = b[ge[2]], Xe = [
          Ve[0] - Ae[0],
          Ve[1] - Ae[1],
          Ve[2] - Ae[2]
        ], it = [
          rt[0] - Ae[0],
          rt[1] - Ae[1],
          rt[2] - Ae[2]
        ], ft = Math.abs(Xe[2] * it[0] - Xe[0] * it[2]), St = Math.sqrt((Xe[1] * it[2] - Xe[2] * it[1]) ** 2 + ft ** 2 + (Xe[0] * it[1] - Xe[1] * it[0]) ** 2), Ft = St > 1e-10 && ft / St < 0.5;
        We.push({
          idx: Ie,
          el: ge,
          isWall: Ft
        });
      }
    }), We.some((ge) => !ge.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const ge = ((_c = J.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${ge} `), W.push("");
    }
    if (We.some((ge) => ge.isWall)) {
      W.push("$ WALL PROPERTIES");
      const ge = ((_d = J.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${ge} `), W.push("");
    }
    if (We.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const ge = [];
      We.forEach((Ie, Ae) => {
        const { el: Ve, isWall: rt } = Ie, Xe = rt ? `W${Ae + 1}` : `F${Ae + 1}`, it = rt ? "PANEL" : "FLOOR", ft = Ve.map((St) => ve(St));
        if (rt) {
          const St = b[Ve[0]][1] <= b[Ve[2]][1] ? 0 : 2, Ft = b[Ve[1]][1] <= b[Ve[3]][1] ? 1 : 3;
          W.push(`  AREA "${Xe}"  ${it}  4  "${ft[St].pt}"  "${ft[Ft].pt}"  "${ft[Ft].pt}"  "${ft[St].pt}"  1  1  0  0  `);
          const Nt = ft[St === 0 ? 2 : 0].story;
          ge.push(`  AREAASSIGN  "${Xe}"  "${Nt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${Xe}"  ${it}  4  "${ft[0].pt}"  "${ft[1].pt}"  "${ft[2].pt}"  "${ft[3].pt}"  0  0  0  0  `), ge.push(`  AREAASSIGN  "${Xe}"  "${ft[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), ge.forEach((Ie) => W.push(Ie)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), M.loads && M.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), M.loads.forEach((ge, Ie) => {
      const [Ae, Ve, rt] = ge, Xe = ve(Ie);
      Math.abs(Ae) > 1e-10 && W.push(`  POINTLOAD  "${Xe.pt}"  "${Xe.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Ve) > 1e-10 && W.push(`  POINTLOAD  "${Xe.pt}"  "${Xe.story}"  "Dead"  TYPE "FORCE"  FY ${Ve}`), Math.abs(rt) > 1e-10 && W.push(`  POINTLOAD  "${Xe.pt}"  "${Xe.story}"  "Dead"  TYPE "FORCE"  FZ ${rt}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Ol(e, b) {
    const P = e[b[0]], M = e[b[1]], J = Math.abs(M[1] - P[1]), B = Math.sqrt((M[0] - P[0]) ** 2 + (M[2] - P[2]) ** 2), Z = J > B * 0.5;
    return Z && B > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: J } = e, B = [];
    return B.push("# OpenSeesPy model exported from Awatif FEM Studio"), B.push(`# ${b.length} nodes, ${P.length} elements`), B.push(""), B.push("import openseespy.opensees as ops"), B.push(""), B.push("ops.wipe()"), B.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), B.push(""), B.push("# --- Nodes ---"), b.forEach((Z, Y) => {
      B.push(`ops.node(${Y + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, Y) => {
      const H = Z.map((W) => W ? 1 : 0).join(", ");
      B.push(`ops.fix(${Y + 1}, ${H})`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), B.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), B.push(""), B.push("# --- Elements (elasticBeamColumn) ---"), P.forEach((Z, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const H = b[Z[0]], W = b[Z[1]], T = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, K = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, $e = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, pe = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ce = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, oe = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      B.push(`ops.element('elasticBeamColumn', ${Y + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${K}, ${$e}, ${pe}, ${ce}, ${oe}, ${q}, ${T})`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("ops.timeSeries('Linear', 1)"), B.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((Z, Y) => {
      const H = Z.map((W) => W).join(", ");
      B.push(`ops.load(${Y + 1}, ${H})`);
    }), B.push("")), B.push("# --- Analysis ---"), B.push("ops.system('BandGeneral')"), B.push("ops.numberer('RCM')"), B.push("ops.constraints('Plain')"), B.push("ops.integrator('LoadControl', 1.0)"), B.push("ops.algorithm('Linear')"), B.push("ops.analysis('Static')"), B.push("ops.analyze(1)"), B.push(""), B.push("# --- Results ---"), B.push('print("\\n=== Displacements ===")'), b.forEach((Z, Y) => {
      B.push(`print(f"Node {${Y + 1}}: {ops.nodeDisp(${Y + 1})}")`);
    }), B.push(""), B.push('print("\\n=== Reactions ===")'), B.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, Y) => {
      B.push(`print(f"Node {${Y + 1}}: {ops.nodeReaction(${Y + 1})}")`);
    }), B.join(`
`);
  }
  function ql(e) {
    var _a, _b;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: J } = e, B = [];
    return B.push("# OpenSees Tcl model exported from Awatif FEM Studio"), B.push(`# ${b.length} nodes, ${P.length} elements`), B.push(""), B.push("wipe"), B.push("model basic -ndm 3 -ndf 6"), B.push(""), B.push("# --- Nodes ---"), b.forEach((Z, Y) => {
      B.push(`node ${Y + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, Y) => {
      const H = Z.map((W) => W ? 1 : 0).join(" ");
      B.push(`fix ${Y + 1} ${H}`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("geomTransf Linear 1 0.0 0.0 1.0"), B.push("geomTransf Linear 2 -1.0 0.0 0.0"), B.push(""), B.push("# --- Elements ---"), P.forEach((Z, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const H = b[Z[0]], W = b[Z[1]], T = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, K = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, $e = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, pe = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ce = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, oe = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      B.push(`element elasticBeamColumn ${Y + 1} ${Z[0] + 1} ${Z[1] + 1} ${K} ${$e} ${pe} ${ce} ${oe} ${q} ${T}`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("timeSeries Linear 1"), B.push("pattern Plain 1 1 {"), M.loads.forEach((Z, Y) => {
      const H = Z.map((W) => W).join(" ");
      B.push(`  load ${Y + 1} ${H}`);
    }), B.push("}"), B.push("")), B.push("# --- Analysis ---"), B.push("system BandGeneral"), B.push("numberer RCM"), B.push("constraints Plain"), B.push("integrator LoadControl 1.0"), B.push("algorithm Linear"), B.push("analysis Static"), B.push("analyze 1"), B.push(""), B.push("# --- Results ---"), B.push('puts "\\n=== Displacements ==="'), b.forEach((Z, Y) => {
      B.push(`puts "Node ${Y + 1}: [nodeDisp ${Y + 1}]"`);
    }), B.push('puts "\\n=== Reactions ==="'), B.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, Y) => {
      B.push(`puts "Node ${Y + 1}: [nodeReaction ${Y + 1}]"`);
    }), B.join(`
`);
  }
  function _l(e) {
    const b = [], P = [], M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const pe = $e.trim(), ce = pe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const G = parseInt(ce[1]), fe = b.length;
        b.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), T.set(G, fe);
        continue;
      }
      const oe = pe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (oe) {
        const G = parseInt(oe[1]), fe = T.get(G);
        fe !== void 0 && M.set(fe, [
          oe[2] === "1",
          oe[3] === "1",
          oe[4] === "1",
          oe[5] === "1",
          oe[6] === "1",
          oe[7] === "1"
        ]);
        continue;
      }
      const q = pe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (q) {
        const G = parseInt(q[1]), fe = T.get(parseInt(q[2])), Me = T.get(parseInt(q[3]));
        if (fe !== void 0 && Me !== void 0) {
          const ze = P.length;
          P.push([
            fe,
            Me
          ]), K.set(G, ze), Y.set(ze, parseFloat(q[4])), B.set(ze, parseFloat(q[5])), Z.set(ze, parseFloat(q[6])), be.set(ze, parseFloat(q[7])), H.set(ze, parseFloat(q[8])), W.set(ze, parseFloat(q[9]));
        }
        continue;
      }
      const D = pe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
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
      nodes: b,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: J
      },
      elementInputs: {
        elasticities: B,
        shearModuli: Z,
        areas: Y,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: be
      }
    };
  }
  function Dl(e) {
    const b = [], P = [], M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const K of e.split(/\r?\n/)) {
      const $e = K.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const pe = $e.split(/\s+/);
      if (pe[0] === "node" && pe.length >= 5) {
        const ce = parseInt(pe[1]), oe = b.length;
        b.push([
          parseFloat(pe[2]),
          parseFloat(pe[3]),
          parseFloat(pe[4])
        ]), T.set(ce, oe);
        continue;
      }
      if (pe[0] === "fix" && pe.length >= 8) {
        const ce = T.get(parseInt(pe[1]));
        ce !== void 0 && M.set(ce, [
          pe[2] === "1",
          pe[3] === "1",
          pe[4] === "1",
          pe[5] === "1",
          pe[6] === "1",
          pe[7] === "1"
        ]);
        continue;
      }
      if (pe[0] === "element" && pe[1] === "elasticBeamColumn" && pe.length >= 12) {
        const ce = T.get(parseInt(pe[3])), oe = T.get(parseInt(pe[4]));
        if (ce !== void 0 && oe !== void 0) {
          const q = P.length;
          P.push([
            ce,
            oe
          ]), Y.set(q, parseFloat(pe[5])), B.set(q, parseFloat(pe[6])), Z.set(q, parseFloat(pe[7])), be.set(q, parseFloat(pe[8])), H.set(q, parseFloat(pe[9])), W.set(q, parseFloat(pe[10]));
        }
        continue;
      }
      if (pe[0] === "load" && pe.length >= 8) {
        const ce = T.get(parseInt(pe[1]));
        ce !== void 0 && J.set(ce, [
          parseFloat(pe[2]),
          parseFloat(pe[3]),
          parseFloat(pe[4]),
          parseFloat(pe[5]),
          parseFloat(pe[6]),
          parseFloat(pe[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: J
      },
      elementInputs: {
        elasticities: B,
        shearModuli: Z,
        areas: Y,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: be
      }
    };
  }
  function Kt(e) {
    const b = [];
    let P = 0, M = false, J = "";
    for (let B = 0; B < e.length; B++) {
      const Z = e[B];
      if (Z === "'" && (B === 0 || e[B - 1] !== "\\")) {
        M = !M, J += Z;
        continue;
      }
      if (M) {
        J += Z;
        continue;
      }
      if (Z === "(") {
        P++, J += Z;
        continue;
      }
      if (Z === ")") {
        P--, J += Z;
        continue;
      }
      if (Z === "," && P === 0) {
        b.push(J.trim()), J = "";
        continue;
      }
      J += Z;
    }
    return J.trim() && b.push(J.trim()), b;
  }
  function ua(e, b) {
    const P = Kt(e);
    if (b < P.length) {
      let M = P[b].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function Bl(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, P = {}, M = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (b.schema = J[1]);
    const B = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let Z;
    for (; (Z = B.exec(e)) !== null; ) {
      const Y = parseInt(Z[1]), H = Z[2].toUpperCase();
      P[Y] = {
        id: Y,
        type: H,
        args: Z[3]
      }, M[H] || (M[H] = []), M[H].push(Y);
    }
    if (M.IFCPROJECT) {
      const Y = P[M.IFCPROJECT[0]];
      if (Y) {
        const H = ua(Y.args, 2);
        H && (b.project = H);
      }
    }
    return {
      meta: b,
      entities: P,
      typeIndex: M
    };
  }
  function Jt(e, b) {
    const P = b.match(/#(\d+)/);
    return P && e[parseInt(P[1])] || null;
  }
  function ma(e, b) {
    const P = Kt(b.args), M = Jt(e, P[0]), J = M ? Hl(e, M) : [
      0,
      0,
      0
    ];
    let B = [
      0,
      0,
      1
    ], Z = [
      1,
      0,
      0
    ];
    if (P[1] && P[1] !== "$") {
      const Y = Jt(e, P[1]);
      Y && (B = ia(e, Y));
    }
    if (P[2] && P[2] !== "$") {
      const Y = Jt(e, P[2]);
      Y && (Z = ia(e, Y));
    }
    return {
      origin: J,
      dirZ: B,
      dirX: Z
    };
  }
  function Hl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ia(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ga(e, b) {
    const P = Kt(b.args), M = Jt(e, P[1]);
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
    if (M && (J = ma(e, M)), P[0] && P[0] !== "$") {
      const B = Jt(e, P[0]);
      if (B && B.type === "IFCLOCALPLACEMENT") {
        const Z = ga(e, B), Y = ts(J.origin, Z.dirX, es(Z.dirZ, Z.dirX), Z.dirZ);
        J.origin = [
          Z.origin[0] + Y[0],
          Z.origin[1] + Y[1],
          Z.origin[2] + Y[2]
        ], J.dirZ = ts(J.dirZ, Z.dirX, es(Z.dirZ, Z.dirX), Z.dirZ), J.dirX = ts(J.dirX, Z.dirX, es(Z.dirZ, Z.dirX), Z.dirZ);
      }
    }
    return J;
  }
  function es(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function ts(e, b, P, M) {
    return [
      e[0] * b[0] + e[1] * P[0] + e[2] * M[0],
      e[0] * b[1] + e[1] * P[1] + e[2] * M[1],
      e[0] * b[2] + e[1] * P[2] + e[2] * M[2]
    ];
  }
  const jl = 0.01;
  function Wl(e) {
    const b = Bl(e), { entities: P, typeIndex: M } = b, J = [], B = [], Z = /* @__PURE__ */ new Map();
    Z.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), Z.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let Y = 0, H = 0;
    function W(oe, q, D) {
      for (const G of J) {
        const fe = G.x - oe, Me = G.y - q, ze = G.z - D;
        if (Math.sqrt(fe * fe + Me * Me + ze * ze) < jl) return G.id;
      }
      return J.push({
        id: Y,
        x: oe,
        y: q,
        z: D
      }), Y++;
    }
    function be(oe) {
      const q = ua(oe.args, 2) || "", D = M.IFCRELASSOCIATESMATERIAL || [];
      for (const fe of D) {
        const Me = P[fe];
        if (!Me) continue;
        const ze = Kt(Me.args);
        if ((ze[4] || ze[3] || "").includes(`#${oe.id}`)) {
          const ve = ze[5] || ze[4] || "", je = Jt(P, ve);
          if (je) return T(je);
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
    function T(oe) {
      const q = oe.type;
      if (q === "IFCRECTANGLEPROFILEDEF") {
        const D = Kt(oe.args), G = (D[1] || "").replace(/'/g, ""), fe = parseFloat(D[3]) || 0.3, Me = parseFloat(D[4]) || 0.3;
        return {
          b: fe,
          h: Me,
          name: G
        };
      }
      if (q === "IFCMATERIALPROFILE") {
        const D = Kt(oe.args), G = D[2] || D[1] || "", fe = Jt(P, G);
        if (fe) return T(fe);
      }
      if (q === "IFCMATERIALPROFILESET") {
        const D = Kt(oe.args), fe = (D[2] || D[1] || "").match(/#(\d+)/);
        if (fe) {
          const Me = P[parseInt(fe[1])];
          if (Me) return T(Me);
        }
      }
      if (q === "IFCMATERIALPROFILESETUSAGE") {
        const G = Kt(oe.args)[0], fe = Jt(P, G);
        if (fe) return T(fe);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function K(oe, q, D, G) {
      const fe = M[oe] || [];
      for (const Me of fe) {
        const ze = P[Me];
        if (!ze) continue;
        const Ue = Kt(ze.args), ve = Ue[5] || Ue[4] || "", je = Jt(P, ve);
        if (!je) continue;
        const We = ga(P, je), ge = be(ze);
        let Ie = G, Ae = null, Ve = null;
        const rt = Ue[6] || Ue[5] || "", Xe = Jt(P, rt);
        if (Xe) {
          const gt = $n(P, Xe);
          gt && (Ie = gt.depth || G, Ae = gt.origin, Ve = gt.direction);
        }
        const it = Ae ? Ae[0] : We.origin[0], ft = Ae ? Ae[1] : We.origin[1], St = Ae ? Ae[2] : We.origin[2], Ft = Ve || (D === "Z" ? We.dirZ : We.dirX), Nt = W(it, ft, St), vt = W(it + Ft[0] * Ie, ft + Ft[1] * Ie, St + Ft[2] * Ie);
        B.push({
          id: H++,
          type: "frame",
          nodeIds: [
            Nt,
            vt
          ],
          category: q,
          sectionName: ge.name,
          b: ge.b,
          h: ge.h,
          material: "Hormigon",
          expressID: Me
        });
      }
    }
    K("IFCCOLUMN", "column", "Z", 3), K("IFCBEAM", "beam", "X", 5), K("IFCMEMBER", "diagonal", "X", 4), K("IFCPILE", "pile", "Z", 10), K("IFCSTAIRFLIGHT", "stair", "X", 3), K("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(oe, q, D) {
      const G = M[oe] || [];
      for (const fe of G) {
        const Me = P[fe];
        if (!Me) continue;
        const ze = Kt(Me.args), Ue = ze[5] || ze[4] || "";
        if (!Jt(P, Ue)) continue;
        let je = D;
        const We = ze[6] || ze[5] || "", ge = Jt(P, We);
        ge && (je = Gl(P, ge) || D);
        const Ie = q === "slab" ? `Losa e=${(je * 100).toFixed(0)}cm` : q === "wall" ? `Muro e=${(je * 100).toFixed(0)}cm` : q === "footing" ? `Zapata e=${(je * 100).toFixed(0)}cm` : `${q} e=${(je * 100).toFixed(0)}cm`;
        B.push({
          id: H++,
          type: "shell",
          nodeIds: [],
          category: q,
          sectionName: Ie,
          b: je,
          h: je,
          material: "Hormigon",
          expressID: fe
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const pe = [], ce = M.IFCBUILDINGSTOREY || [];
    for (const oe of ce) {
      const q = P[oe];
      if (!q) continue;
      const D = Kt(q.args), G = (D[2] || "").replace(/'/g, ""), fe = parseFloat(D[9]) || 0;
      pe.push({
        name: G,
        elevation: fe
      });
    }
    return pe.sort((oe, q) => oe.elevation - q.elevation), {
      nodes: J,
      elements: B,
      materials: Z,
      levels: pe,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function $n(e, b) {
    const P = Kt(b.args);
    for (const M of P) {
      const J = M.match(/#(\d+)/g) || [];
      for (const B of J) {
        const Z = parseInt(B.replace("#", "")), Y = e[Z];
        if (Y) {
          if (Y.type === "IFCEXTRUDEDAREASOLID") {
            const H = Kt(Y.args), W = parseFloat(H[3]) || 0, be = Jt(e, H[1]);
            let T = [
              0,
              0,
              0
            ];
            be && (T = ma(e, be).origin);
            const K = Jt(e, H[2]);
            let $e = [
              0,
              0,
              1
            ];
            if (K && K.type === "IFCDIRECTION") {
              const pe = K.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              pe && pe.length >= 3 && ($e = pe.map(Number));
            }
            return {
              depth: W,
              origin: T,
              direction: $e
            };
          }
          if (Y.type === "IFCSHAPEREPRESENTATION") {
            const H = $n(e, Y);
            if (H) return H;
          }
          if (Y.type === "IFCMAPPEDITEM") {
            const H = Kt(Y.args), W = Jt(e, H[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const be = Kt(W.args), T = Jt(e, be[1]);
              if (T) {
                const K = $n(e, T);
                if (K) return K;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Gl(e, b) {
    const P = $n(e, b);
    return P ? P.depth : null;
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
  ], ha = [
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
  ], xa = /* @__PURE__ */ new Map();
  for (const [e, b] of ba) xa.set(e, b);
  function Yl(e) {
    return xa.get(e) ?? "other";
  }
  new Set(ha);
  async function Jl(e, b) {
    var _a, _b;
    const P = window.WebIFC;
    if (!P) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new P.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(J), await M.Init();
    const B = M.OpenModel(new Uint8Array(b)), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = {
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
    for (const [$e] of ba) {
      const pe = Yl($e);
      try {
        const ce = M.GetLineIDsWithType(B, $e);
        for (let oe = 0; oe < ce.size(); oe++) {
          const q = ce.get(oe);
          Z.set(q, pe);
          let D = "";
          try {
            const G = M.GetLine(B, q);
            D = ((_a = G == null ? void 0 : G.Name) == null ? void 0 : _a.value) || ((_b = G == null ? void 0 : G.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          Y.set(q, {
            expressID: q,
            category: pe,
            name: D,
            typeName: H[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const W = /* @__PURE__ */ new Map();
    for (const $e of ha) {
      const pe = new sn();
      pe.name = `ifc-${$e}`, e.add(pe), W.set($e, pe);
    }
    const be = new el();
    let T = 0;
    const K = new oa({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: na
    });
    return M.StreamAllMeshes(B, ($e) => {
      const pe = Z.get($e.expressID) ?? "other", ce = W.get(pe), oe = $e.geometries;
      for (let q = 0; q < oe.size(); q++) {
        const D = oe.get(q), G = M.GetGeometry(B, D.geometryExpressID), fe = M.GetVertexArray(G.GetVertexData(), G.GetVertexDataSize()), Me = M.GetIndexArray(G.GetIndexData(), G.GetIndexDataSize()), ze = new no(), Ue = new Float32Array(fe.length / 2), ve = new Float32Array(fe.length / 2);
        for (let Ae = 0; Ae < fe.length; Ae += 6) {
          const Ve = Ae / 2;
          Ue[Ve] = fe[Ae], Ue[Ve + 1] = fe[Ae + 1], Ue[Ve + 2] = fe[Ae + 2], ve[Ve] = fe[Ae + 3], ve[Ve + 1] = fe[Ae + 4], ve[Ve + 2] = fe[Ae + 5];
        }
        ze.setAttribute("position", new xn(Ue, 3)), ze.setAttribute("normal", new xn(ve, 3)), ze.setIndex(new xn(new Uint32Array(Me), 1));
        const je = new tl();
        je.fromArray(D.flatTransformation);
        let We;
        const ge = D.color;
        ge && (ge.x !== 1 || ge.y !== 1 || ge.z !== 1) ? We = new oa({
          color: new ol(ge.x, ge.y, ge.z),
          transparent: ge.w < 1,
          opacity: ge.w,
          side: na
        }) : We = K, We._origOpacity = We.opacity;
        const Ie = new da(ze, We);
        Ie.applyMatrix4(je), Ie.userData.expressID = $e.expressID, Ie.userData.category = pe, ce.add(Ie), be.expandByObject(Ie), T++, G.delete();
      }
    }), M.CloseModel(B), {
      meshCount: T,
      bbox: be,
      detailCategories: W,
      elementInfo: Y
    };
  }
  ca = Jo.state(false);
  tr = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let b = "tonf", P = "m", M = Ro(b, P), J = {
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
    }, Z = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
    let H = false;
    const W = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
    let T = "", K = {}, $e = null, pe = "", ce = [], oe = [], q = [], D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ue = null, ve = [], je = 0.2, We = 2, ge = 2, Ie = false, Ae = 2, Ve = "x", rt = /* @__PURE__ */ new Set(), Xe = true, it = 0.15, ft = 2, St = 2, Ft = /* @__PURE__ */ new Set(), Nt = false, vt = "perimeter";
    const gt = () => ({
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
    }), io = (t, o) => ({
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
      }, gt),
      vigasY: Array.from({
        length: o
      }, gt)
    }), qe = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Mt = 0, Fe = 3, _e = false, he = 0, Le = null, xe = 0, Te = [], Ye = 1, De = true;
    const pt = ul();
    pt.div.style.display = "none";
    function bt() {
      const t = un()[T];
      return t && t[Mt] ? t[Mt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ge = [], Ke = [], ut = 0, ct = [], xt = null;
    function Gt() {
      if (!xt) return;
      const t = Ze();
      t && t.scene.remove(xt), xt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), xt = null;
    }
    function as(t, o, n, l, a) {
      Gt();
      const c = Ze();
      if (!c) return;
      xt = new sn(), xt.name = "refGrid";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), d = Math.max(...n), g = r - s || 1, S = i - p || 1, $ = 3359829, y = 2241348;
      for (const h of n) {
        for (const I of o) {
          const L = new no().setFromPoints([
            new Ne(s, h, I),
            new Ne(r, h, I)
          ]), z = new Wo({
            color: $,
            dashSize: g * 0.015,
            gapSize: g * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new Co(L, z);
          O.computeLineDistances(), O.renderOrder = -10, xt.add(O);
        }
        for (const I of t) {
          const L = new no().setFromPoints([
            new Ne(I, h, p),
            new Ne(I, h, i)
          ]), z = new Wo({
            color: $,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new Co(L, z);
          O.computeLineDistances(), O.renderOrder = -10, xt.add(O);
        }
      }
      for (const h of t) for (const I of o) {
        const L = new no().setFromPoints([
          new Ne(h, 0, I),
          new Ne(h, d, I)
        ]), z = new Wo({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), O = new Co(L, z);
        O.computeLineDistances(), O.renderOrder = -10, xt.add(O);
      }
      const f = Math.min(g, S) * 0.015;
      for (const h of n) for (const I of t) for (const L of o) {
        const z = [
          new Ne(I - f, h, L),
          new Ne(I + f, h, L),
          new Ne(I, h, L - f),
          new Ne(I, h, L + f)
        ], O = new no().setFromPoints(z), k = new Yo({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new Go(O, k);
        m.renderOrder = -5, xt.add(m);
      }
      xt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(xt), c.render();
    }
    let _t = null;
    function ls() {
      if (!_t) return;
      const t = Ze();
      t && t.scene.remove(_t), _t.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), _t = null;
    }
    function Xo(t, o, n, l, a) {
      ls();
      const c = Ze();
      if (!c) return;
      _t = new sn(), _t.name = "gridAxes";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), d = r - s || 1, g = i - p || 1, S = Math.max(d, g), $ = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), h = S * 0.018, I = o.length <= 1, L = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const w = -$ - h * 1.5;
          In(u, 0, 0, u, 0, w + h, L, _t), kn(y[m] || `${m}`, u, 0, w, h, _t);
        } else {
          const w = p - $ - h * 1.5;
          In(u, p, 0, u, w + h, 0, L, _t), kn(y[m] || `${m}`, u, w, 0, h, _t);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], w = s - $ - h * 1.5;
        In(s, u, 0, w + h, u, 0, L, _t), kn(f[m] || `${m}`, w, u, 0, h, _t);
      }
      const z = h * 1.8, O = $ * 1.2, k = $ * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], w = t[m + 1], A = Math.abs(w - u), R = (u + w) / 2, j = `${A.toFixed(2)} m`;
        I ? (En(j, R, 0, -O, z, _t), Sn(u, 0, -O * 0.7, w, 0, -O * 0.7, 16763904, _t)) : (En(j, R, p - k, 0, z, _t), Sn(u, p - k * 0.7, 0, w, p - k * 0.7, 0, 16763904, _t));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], w = o[m + 1], A = Math.abs(w - u), R = (u + w) / 2, j = `${A.toFixed(2)} m`;
        En(j, s - O, R, 0, z, _t), Sn(s - O * 0.7, u, 0, s - O * 0.7, w, 0, 16763904, _t);
      }
      _t.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(_t), c.render();
    }
    let Vt = null;
    function rs() {
      if (!Vt) return;
      const t = Ze();
      t && t.scene.remove(Vt), Vt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Vt = null;
    }
    function wn(t, o, n) {
      if (rs(), t.length === 0) return;
      const l = Ze();
      if (!l) return;
      Vt = new sn(), Vt.name = "storyLevels";
      const a = Math.min(...o), c = Math.max(...o), s = Math.min(...n), r = Math.max(...n), p = c - a || 1, i = r - s || 1, d = Math.max(p, i), g = d * 0.06, S = n.length <= 1, $ = 4491519, y = d * 0.015;
      for (const f of t) {
        const h = f.elev;
        S ? (Ko(a - g, 0, h, c + g, 0, h, $, Vt), is(f.name, c + g * 1.5, 0, h, y, Vt)) : (Ko(a, s, h, c, s, h, $, Vt), Ko(c, s, h, c, r, h, $, Vt), Ko(c, r, h, a, r, h, $, Vt), Ko(a, r, h, a, s, h, $, Vt), is(f.name, a - g * 1.5, s, h, y, Vt));
      }
      Vt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Vt), l.render();
    }
    function Ko(t, o, n, l, a, c, s, r) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (c - n) ** 2) || 1, i = new no().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, a, c)
      ]), d = new Wo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), g = new Co(i, d);
      g.computeLineDistances(), g.renderOrder = 50, r.add(g);
    }
    function is(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), r = 512, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      i.beginPath(), i.moveTo(d, 0), i.lineTo(r - d, 0), i.quadraticCurveTo(r, 0, r, d), i.lineTo(r, p - d), i.quadraticCurveTo(r, p, r - d, p), i.lineTo(d, p), i.quadraticCurveTo(0, p, 0, p - d), i.lineTo(0, d), i.quadraticCurveTo(0, 0, d, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const g = new Xn(s);
      g.needsUpdate = true;
      const S = new fn({
        map: g,
        depthTest: false,
        transparent: true
      }), $ = new pn(S);
      $.position.set(o, n, l), $.scale.set(a * 8, a, 1), $.renderOrder = 101, c.add($);
    }
    function En(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), r = 256, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      i.beginPath(), i.moveTo(d, 0), i.lineTo(r - d, 0), i.quadraticCurveTo(r, 0, r, d), i.lineTo(r, p - d), i.quadraticCurveTo(r, p, r - d, p), i.lineTo(d, p), i.quadraticCurveTo(0, p, 0, p - d), i.lineTo(0, d), i.quadraticCurveTo(0, 0, d, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const g = new il(s);
      g.minFilter = cl;
      const S = new fn({
        map: g,
        transparent: true,
        depthTest: false
      }), $ = new pn(S);
      $.position.set(o, n, l);
      const y = r / p;
      $.scale.set(a * y, a, 1), $.renderOrder = 999, c.add($);
    }
    function Sn(t, o, n, l, a, c, s, r) {
      const p = [
        new Ne(t, o, n),
        new Ne(l, a, c)
      ], i = new no().setFromPoints(p), d = new Yo({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), g = new Co(i, d);
      g.renderOrder = 998, r.add(g);
    }
    function In(t, o, n, l, a, c, s, r) {
      const p = new no().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, a, c)
      ]), i = new Wo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new Co(p, i);
      d.computeLineDistances(), r.add(d);
    }
    function kn(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), r = 128;
      s.width = r, s.height = r;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = r * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${r * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new Xn(s);
      i.needsUpdate = true;
      const d = new fn({
        map: i,
        depthTest: false,
        transparent: true
      }), g = new pn(d);
      g.position.set(o, n, l);
      const S = a * 2;
      g.scale.set(S, S, 1), g.renderOrder = 100, c.add(g);
    }
    const Qe = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], a = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), et(), a;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), et();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), et(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), et();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), et();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), et();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), et();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), et();
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
        const n = Ce.querySelectorAll("input[type=checkbox]");
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
        const t = Ce.querySelectorAll("input[type=checkbox]"), o = {};
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
          Gt(), console.log("Reference grid cleared");
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
        as(l, a, c), Ge = l.map((s, r) => ({
          label: String.fromCharCode(65 + r),
          coord: s
        })), Ke = a.map((s, r) => ({
          label: `${r + 1}`,
          coord: s
        })), ut = c[c.length - 1], ct = c.map((s, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: s
        })), Xo(Ge.map((s) => s.coord), Ke.map((s) => s.coord), ut, Ge.map((s) => s.label), Ke.map((s) => s.label));
        {
          const s = c.map((r, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? r - c[p - 1] : 0,
            elev: r
          }));
          wn(s, Ge.map((r) => r.coord), Ke.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${c}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (Ge.length === 0 || ct.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, c] = o.split("x").map((_) => parseFloat(_) / 100), [s, r] = n.split("x").map((_) => parseFloat(_) / 100), p = Ge.map((_) => _.coord), i = Ke.map((_) => _.coord), d = ct.map((_) => _.elev), g = p.length, S = i.length, $ = d.length, y = $ - 1, f = [], h = {};
        for (let _ = 0; _ < $; _++) for (let ue = 0; ue < S; ue++) for (let te = 0; te < g; te++) h[`${te},${ue},${_}`] = f.length, f.push([
          p[te],
          i[ue],
          d[_]
        ]);
        const I = [], L = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < y; _++) for (let ue = 0; ue < S; ue++) for (let te = 0; te < g; te++) {
          const de = I.length;
          I.push([
            h[`${te},${ue},${_}`],
            h[`${te},${ue},${_ + 1}`]
          ]), L.add(de), O.set(de, _);
        }
        for (let _ = 1; _ < $; _++) for (let ue = 0; ue < S; ue++) for (let te = 0; te < g - 1; te++) {
          const de = I.length;
          I.push([
            h[`${te},${ue},${_}`],
            h[`${te + 1},${ue},${_}`]
          ]), z.add(de), O.set(de, _ - 1);
        }
        for (let _ = 1; _ < $; _++) for (let ue = 0; ue < g; ue++) for (let te = 0; te < S - 1; te++) {
          const de = I.length;
          I.push([
            h[`${ue},${te},${_}`],
            h[`${ue},${te + 1},${_}`]
          ]), z.add(de), O.set(de, _ - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const _ = k === "all" || k === "x" || k === "perimeter", ue = k === "all" || k === "y" || k === "perimeter";
          for (let te = 0; te < y; te++) {
            if (_) for (let de = 0; de < S; de++) {
              if (k === "perimeter" && de !== 0 && de !== S - 1) continue;
              const ee = Math.floor((g - 1) / 2);
              for (let me = 0; me < g - 1; me++) {
                if (k === "perimeter" && me !== ee) continue;
                const Ee = I.length;
                I.push([
                  h[`${me},${de},${te}`],
                  h[`${me + 1},${de},${te + 1}`]
                ]), m.add(Ee), O.set(Ee, te);
                const se = I.length;
                I.push([
                  h[`${me + 1},${de},${te}`],
                  h[`${me},${de},${te + 1}`]
                ]), m.add(se), O.set(se, te);
              }
            }
            if (ue) for (let de = 0; de < g; de++) {
              if (k === "perimeter" && de !== 0 && de !== g - 1) continue;
              const ee = Math.floor((S - 1) / 2);
              for (let me = 0; me < S - 1; me++) {
                if (k === "perimeter" && me !== ee) continue;
                const Ee = I.length;
                I.push([
                  h[`${de},${me},${te}`],
                  h[`${de},${me + 1},${te + 1}`]
                ]), m.add(Ee), O.set(Ee, te);
                const se = I.length;
                I.push([
                  h[`${de},${me + 1},${te}`],
                  h[`${de},${me},${te + 1}`]
                ]), m.add(se), O.set(se, te);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, w = u / (2 * (1 + 0.2)), A = a * c, R = a * c ** 3 / 12, j = c * a ** 3 / 12, x = a * c * (a ** 2 + c ** 2) / 12, E = s * r, v = s * r ** 3 / 12, F = r * s ** 3 / 12, X = s * r * (s ** 2 + r ** 2) / 12, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < I.length; _++) V.set(_, u), ae.set(_, w), L.has(_) ? (Q.set(_, A), U.set(_, R), ie.set(_, j), le.set(_, x), ke.set(_, {
          type: "rect",
          b: a,
          h: c,
          name: `COL${o}`
        })) : m.has(_) ? (Q.set(_, A), U.set(_, R), ie.set(_, j), le.set(_, x), ke.set(_, {
          type: "rect",
          b: a,
          h: c,
          name: `BR${o}`
        })) : (Q.set(_, E), U.set(_, v), ie.set(_, F), le.set(_, X), ke.set(_, {
          type: "rect",
          b: s,
          h: r,
          name: `V${n}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < S; _++) for (let ue = 0; ue < g; ue++) Re.set(h[`${ue},${_},0`], [
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
          elasticities: V,
          shearModuli: ae,
          areas: Q,
          momentsOfInertiaZ: U,
          momentsOfInertiaY: ie,
          torsionalConstants: le,
          sectionShapes: ke
        }, D = L, G = z, Me = O, console.log(`Built: ${f.length} nodes, ${I.length} elements (${L.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
          nodes: f.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ge.findIndex((y) => y.label === t), a = Ke.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ge.map((y) => y.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ke.map((y) => y.label)}`);
          return;
        }
        const c = Ge[l].coord, s = Ke[a].coord, r = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const i = (y) => {
          const f = r.findIndex((h) => Math.abs(h[0] - c) < 1e-3 && Math.abs(h[1] - s) < 1e-3 && Math.abs(h[2] - y) < 1e-3);
          return f >= 0 ? f : (r.push([
            c,
            s,
            y
          ]), r.length - 1);
        }, d = n ? [
          ct.findIndex((y) => y.label === n)
        ] : Array.from({
          length: ct.length - 1
        }, (y, f) => f + 1), g = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = i(ct[0].elev);
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
          if (y < 1 || y >= ct.length) continue;
          const f = i(ct[y - 1].elev), h = i(ct[y].elev);
          p.push([
            f,
            h
          ]), D.add(p.length - 1), Me.set(p.length - 1, y - 1), $++;
        }
        return e.nodes.val = r, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: g,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${$} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), $;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const c = Ge.findIndex((O) => O.label === t), s = Ke.findIndex((O) => O.label === o), r = Ge.findIndex((O) => O.label === n), p = Ke.findIndex((O) => O.label === l), i = ct.findIndex((O) => O.label === a);
        if (c < 0 || s < 0 || r < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${a}" not found. Available: ${ct.filter((O) => O.label !== "Base").map((O) => O.label)}`);
          return;
        }
        const d = Ge[c].coord, g = Ke[s].coord, S = Ge[r].coord, $ = Ke[p].coord, y = ct[i].elev, f = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (O, k, m) => {
          const u = f.findIndex((w) => Math.abs(w[0] - O) < 1e-3 && Math.abs(w[1] - k) < 1e-3 && Math.abs(w[2] - m) < 1e-3);
          return u >= 0 ? u : (f.push([
            O,
            k,
            m
          ]), f.length - 1);
        }, L = I(d, g, y), z = I(S, $, y);
        return h.push([
          L,
          z
        ]), G.add(h.length - 1), Me.set(h.length - 1, i - 1), e.nodes.val = f, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), h.length - 1;
      },
      addBrace(t, o, n, l, a, c) {
        var _a2;
        const s = Ge.findIndex((u) => u.label === t), r = Ke.findIndex((u) => u.label === o), p = ct.findIndex((u) => u.label === n), i = Ge.findIndex((u) => u.label === l), d = Ke.findIndex((u) => u.label === a), g = ct.findIndex((u) => u.label === c);
        if (s < 0 || r < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (i < 0 || d < 0 || g < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${c}`);
          return;
        }
        const S = Ge[s].coord, $ = Ke[r].coord, y = ct[p].elev, f = Ge[i].coord, h = Ke[d].coord, I = ct[g].elev, L = [
          ...e.nodes.val
        ], z = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], O = (u, w, A) => {
          const R = L.findIndex((j) => Math.abs(j[0] - u) < 1e-3 && Math.abs(j[1] - w) < 1e-3 && Math.abs(j[2] - A) < 1e-3);
          return R >= 0 ? R : (L.push([
            u,
            w,
            A
          ]), L.length - 1);
        }, k = O(S, $, y), m = O(f, h, I);
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
        Qe.clear();
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
        ], a = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [r, p] = a.split("x").map((ee) => parseFloat(ee) / 100), [i, d] = c.split("x").map((ee) => parseFloat(ee) / 100), g = [
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
        for (let ee = 0; ee < h; ee++) for (let me = 0; me < f; me++) for (let Ee = 0; Ee < y; Ee++) z[`${Ee},${ee},${me}`] = L.length, L.push([
          g[Ee],
          $[ee],
          S[me]
        ]);
        const O = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < I; ee++) for (let me = 0; me < f; me++) for (let Ee = 0; Ee < y; Ee++) {
          const se = O.length;
          O.push([
            z[`${Ee},${ee},${me}`],
            z[`${Ee},${ee + 1},${me}`]
          ]), k.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let me = 0; me < f; me++) for (let Ee = 0; Ee < y - 1; Ee++) {
          const se = O.length;
          O.push([
            z[`${Ee},${ee},${me}`],
            z[`${Ee + 1},${ee},${me}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let me = 0; me < y; me++) for (let Ee = 0; Ee < f - 1; Ee++) {
          const se = O.length;
          O.push([
            z[`${me},${ee},${Ee}`],
            z[`${me},${ee},${Ee + 1}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        const A = 15100 * Math.sqrt(s) * 10, R = A / (2 * (1 + 0.2)), j = r * p, x = r * p ** 3 / 12, E = p * r ** 3 / 12, v = r * p * (r ** 2 + p ** 2) / 12, F = i * d, X = i * d ** 3 / 12, V = d * i ** 3 / 12, ae = i * d * (i ** 2 + d ** 2) / 12, Q = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < O.length; ee++) Q.set(ee, A), U.set(ee, R), k.has(ee) ? (ie.set(ee, j), le.set(ee, x), ke.set(ee, E), Re.set(ee, v), _.set(ee, {
          type: "rect",
          b: r,
          h: p,
          name: `COL${a}`
        })) : (ie.set(ee, F), le.set(ee, X), ke.set(ee, V), Re.set(ee, ae), _.set(ee, {
          type: "rect",
          b: i,
          h: d,
          name: `V${c}`
        }));
        const ue = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < f; ee++) for (let me = 0; me < y; me++) ue.set(z[`${me},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = L, e.elements.val = O, e.nodeInputs.val = {
          supports: ue,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Q,
          shearModuli: U,
          areas: ie,
          momentsOfInertiaZ: le,
          momentsOfInertiaY: ke,
          torsionalConstants: Re,
          sectionShapes: _
        }, D = k, G = m, Me = u, Ge = g.map((ee, me) => ({
          label: String.fromCharCode(65 + me),
          coord: ee
        })), Ke = S.map((ee, me) => ({
          label: `${me + 1}`,
          coord: ee
        })), ut = $[$.length - 1], Xo(Ge.map((ee) => ee.coord), Ke.map((ee) => ee.coord), ut, Ge.map((ee) => ee.label), Ke.map((ee) => ee.label));
        {
          const ee = $.map((me, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? me - $[Ee - 1] : 0,
            elev: me
          }));
          wn(ee, g, S);
        }
        const te = Ce.querySelector("#cad3d-axis-buttons");
        if (te) {
          te.style.display = "flex";
          const ee = Ge.map((Ee) => Ee.label), me = Ke.map((Ee) => Ee.label);
          te.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of ee) te.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          te.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of me) te.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const de = Ce.querySelector("#cad3d-floor-buttons");
        if (de) {
          de.style.display = "flex", de.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < I; ee++) de.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return as(g, S, $), et(), console.log(`Model3D: ${L.length}n ${O.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${c} f'c=${s}`), {
          nodes: L.length,
          elements: O.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ge = [], Ke = [], ut = 0, ls(), rs(), Gt();
        const t = Ce.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), et();
      },
      frame(t, o, n = 0, l = 0) {
        Qe.clear();
        const a = [];
        n > 0 && a.push(-n);
        let c = 0;
        a.push(c);
        for (const y of t) c += y, a.push(c);
        l > 0 && a.push(c + l);
        const s = [
          0
        ];
        let r = 0;
        for (const y of o) r += y, s.push(r);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === a.length - 1, i = {}, d = [];
        for (let y = 0; y < s.length; y++) for (let f = 0; f < a.length; f++) y === 0 && p(f) || (i[`${f},${y}`] = d.length, d.push([
          a[f],
          0,
          s[y]
        ]));
        const g = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (D.add(g.length), g.push([
          i[`${f},${y}`],
          i[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) G.add(g.length), g.push([
          i[`${f},${y}`],
          i[`${f + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), $ = bt();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          i[f] !== void 0 && S.set(i[f], [
            ...$
          ]);
        }
        return e.nodes.val = d, e.elements.val = g, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), Ge = [
          ...a
        ], Ke = [
          0
        ], ut = s[s.length - 1] || 0, setTimeout(() => {
          wt(), Xo(a, [
            0
          ]), Nn(), qn();
        }, 50), et(), {
          nodes: d.length,
          elements: g.length
        };
      },
      building(t, o, n, l = 3, a = 0, c = 0, s = 0, r = 0, p = 1) {
        Qe.clear();
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        c > 0 && i.push(i[i.length - 1] + c);
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const u of o) d.push(d[d.length - 1] + u);
        r > 0 && d.push(d[d.length - 1] + r);
        const g = [
          0
        ];
        for (const u of n) g.push(g[g.length - 1] + u);
        const S = (u) => a > 0 && u === 0 || c > 0 && u === i.length - 1, $ = (u) => s > 0 && u === 0 || r > 0 && u === d.length - 1, y = (u, w) => S(u) || $(w), f = [], h = {};
        for (let u = 0; u < g.length; u++) for (let w = 0; w < d.length; w++) for (let A = 0; A < i.length; A++) u === 0 && y(A, w) || (h[`${A},${w},${u}`] = f.length, f.push([
          i[A],
          d[w],
          g[u]
        ]));
        const I = f.length, L = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < g.length - 1; u++) for (let w = 0; w < d.length; w++) for (let A = 0; A < i.length; A++) y(A, w) || z.push({
          el: [
            h[`${A},${w},${u}`],
            h[`${A},${w},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, w], floor: A } of z) {
          if (p <= 1) {
            D.add(L.length), Me.set(L.length, A), L.push([
              u,
              w
            ]);
            continue;
          }
          const R = f[u], j = f[w];
          let x = u;
          for (let E = 1; E < p; E++) {
            const v = E / p, F = f.length;
            f.push([
              R[0] + (j[0] - R[0]) * v,
              R[1] + (j[1] - R[1]) * v,
              R[2] + (j[2] - R[2]) * v
            ]), D.add(L.length), Me.set(L.length, A), L.push([
              x,
              F
            ]), x = F;
          }
          D.add(L.length), Me.set(L.length, A), L.push([
            x,
            w
          ]);
        }
        ze = /* @__PURE__ */ new Map();
        const O = [];
        for (let u = 1; u < g.length; u++) for (let w = 0; w < d.length; w++) for (let A = 0; A < i.length - 1; A++) O.push({
          el: [
            h[`${A},${w},${u}`],
            h[`${A + 1},${w},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: A
        });
        for (let u = 1; u < g.length; u++) for (let w = 0; w < i.length; w++) for (let A = 0; A < d.length - 1; A++) O.push({
          el: [
            h[`${w},${A},${u}`],
            h[`${w},${A + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: A
        });
        for (const { el: [u, w], floor: A, dir: R, bay: j } of O) {
          const x = f[u], E = f[w];
          let v = u;
          for (let X = 1; X < l; X++) {
            const V = X / l, ae = f.length;
            f.push([
              x[0] + (E[0] - x[0]) * V,
              x[1] + (E[1] - x[1]) * V,
              x[2] + (E[2] - x[2]) * V
            ]);
            const Q = L.length;
            G.add(Q), Me.set(Q, A), ze.set(Q, {
              dir: R,
              bay: j
            }), L.push([
              v,
              ae
            ]), v = ae;
          }
          const F = L.length;
          G.add(F), Me.set(F, A), ze.set(F, {
            dir: R,
            bay: j
          }), L.push([
            v,
            w
          ]);
        }
        if (rt = /* @__PURE__ */ new Set(), Ie && Ae > 0) {
          const u = (w, A, R) => {
            for (let x = 0; x < f.length; x++) if (Math.abs(f[x][0] - w) < 1e-6 && Math.abs(f[x][1] - A) < 1e-6 && Math.abs(f[x][2] - R) < 1e-6) return x;
            const j = f.length;
            return f.push([
              w,
              A,
              R
            ]), j;
          };
          for (let w = 1; w < g.length; w++) if (Ve === "x") for (let A = 0; A < d.length - 1; A++) {
            const R = d[A], j = d[A + 1];
            for (let x = 1; x <= Ae; x++) {
              const E = R + x / (Ae + 1) * (j - R), v = [];
              for (let F = 0; F < i.length; F++) v.push(u(i[F], E, g[w]));
              for (let F = 0; F < i.length - 1; F++) {
                const X = L.length;
                rt.add(X), G.add(X), Me.set(X, w - 1), ze.set(X, {
                  dir: "x",
                  bay: F
                }), L.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
          else for (let A = 0; A < i.length - 1; A++) {
            const R = i[A], j = i[A + 1];
            for (let x = 1; x <= Ae; x++) {
              const E = R + x / (Ae + 1) * (j - R), v = [];
              for (let F = 0; F < d.length; F++) v.push(u(E, d[F], g[w]));
              for (let F = 0; F < d.length - 1; F++) {
                const X = L.length;
                rt.add(X), G.add(X), Me.set(X, w - 1), ze.set(X, {
                  dir: "y",
                  bay: F
                }), L.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
        }
        const k = /* @__PURE__ */ new Map(), m = bt();
        for (let u = 0; u < d.length; u++) for (let w = 0; w < i.length; w++) y(w, u) || k.set(h[`${w},${u},0`], [
          ...m
        ]);
        fe = /* @__PURE__ */ new Set();
        for (const u of ve) {
          const w = g.length - 1, A = u.floors.includes(-1) ? Array.from({
            length: w
          }, (R, j) => j) : u.floors.filter((R) => R < w);
          for (const R of A) {
            let j, x, E, v;
            u.dir === "x" ? (j = u.bay, E = u.bay + 1, x = u.axisIdx, v = u.axisIdx) : (j = u.axisIdx, E = u.axisIdx, x = u.bay, v = u.bay + 1);
            const F = h[`${j},${x},${R}`], X = h[`${j},${x},${R + 1}`];
            let V, ae;
            if (u.dir === "x" ? (V = h[`${E},${v},${R}`], ae = h[`${E},${v},${R + 1}`]) : (V = h[`${E},${v},${R}`], ae = h[`${E},${v},${R + 1}`]), F === void 0 || V === void 0 || X === void 0 || ae === void 0) continue;
            const Q = ge, U = We, ie = f[F], le = f[V], ke = f[X], Re = f[ae], _ = [];
            for (let ue = 0; ue <= U; ue++) {
              const te = [], de = ue / U;
              for (let ee = 0; ee <= Q; ee++) {
                const me = ee / Q, Ee = (1 - de) * ((1 - me) * ie[0] + me * le[0]) + de * ((1 - me) * ke[0] + me * Re[0]), se = (1 - de) * ((1 - me) * ie[1] + me * le[1]) + de * ((1 - me) * ke[1] + me * Re[1]), Se = (1 - de) * ((1 - me) * ie[2] + me * le[2]) + de * ((1 - me) * ke[2] + me * Re[2]);
                ue === 0 && ee === 0 ? te.push(F) : ue === 0 && ee === Q ? te.push(V) : ue === U && ee === 0 ? te.push(X) : ue === U && ee === Q ? te.push(ae) : (te.push(f.length), f.push([
                  Ee,
                  se,
                  Se
                ]));
              }
              _.push(te);
            }
            for (let ue = 0; ue < U; ue++) for (let te = 0; te < Q; te++) {
              const de = _[ue][te], ee = _[ue][te + 1], me = _[ue + 1][te + 1], Ee = _[ue + 1][te], se = L.length;
              fe.add(se), Me.set(se, R), L.push([
                de,
                ee,
                me,
                Ee
              ]);
            }
            if (R === 0) for (let ue = 0; ue <= Q; ue++) {
              const te = _[0][ue];
              te >= I && k.set(te, [
                ...m
              ]);
            }
          }
        }
        if (Ft = /* @__PURE__ */ new Set(), Xe) {
          const u = l, w = l, A = /* @__PURE__ */ new Map(), R = (j, x, E) => `${Math.round(j * 1e4)},${Math.round(x * 1e4)},${Math.round(E * 1e4)}`;
          for (let j = 0; j < f.length; j++) A.set(R(f[j][0], f[j][1], f[j][2]), j);
          for (let j = 1; j < g.length; j++) {
            const x = g[j];
            for (let E = 0; E < i.length - 1; E++) for (let v = 0; v < d.length - 1; v++) {
              const F = i[E], X = i[E + 1], V = d[v], ae = d[v + 1], Q = [];
              for (let U = 0; U <= w; U++) {
                const ie = [];
                for (let le = 0; le <= u; le++) {
                  const ke = F + le / u * (X - F), Re = V + U / w * (ae - V);
                  if (U === 0 && le === 0) ie.push(h[`${E},${v},${j}`]);
                  else if (U === 0 && le === u) ie.push(h[`${E + 1},${v},${j}`]);
                  else if (U === w && le === 0) ie.push(h[`${E},${v + 1},${j}`]);
                  else if (U === w && le === u) ie.push(h[`${E + 1},${v + 1},${j}`]);
                  else {
                    const _ = R(ke, Re, x), ue = A.get(_);
                    if (ue !== void 0) ie.push(ue);
                    else {
                      const te = f.length;
                      f.push([
                        ke,
                        Re,
                        x
                      ]), A.set(_, te), ie.push(te);
                    }
                  }
                }
                Q.push(ie);
              }
              for (let U = 0; U < w; U++) for (let ie = 0; ie < u; ie++) {
                const le = Q[U][ie], ke = Q[U][ie + 1], Re = Q[U + 1][ie + 1], _ = Q[U + 1][ie], ue = L.length;
                Ft.add(ue), Me.set(ue, j - 1), L.push([
                  le,
                  ke,
                  Re,
                  _
                ]);
              }
            }
          }
        }
        if (Nt && vt) {
          const u = vt === "all" || vt === "x" || vt === "perimeter", w = vt === "all" || vt === "y" || vt === "perimeter", A = g.length - 1;
          for (let R = 0; R < A; R++) {
            if (u) for (let j = 0; j < d.length; j++) {
              if (vt === "perimeter" && j !== 0 && j !== d.length - 1) continue;
              const x = Math.floor((i.length - 1) / 2);
              for (let E = 0; E < i.length - 1; E++) {
                if (vt === "perimeter" && E !== x || y(E, j) || y(E + 1, j)) continue;
                const v = h[`${E},${j},${R}`], F = h[`${E + 1},${j},${R + 1}`], X = h[`${E + 1},${j},${R}`], V = h[`${E},${j},${R + 1}`];
                v !== void 0 && F !== void 0 && (L.push([
                  v,
                  F
                ]), Me.set(L.length - 1, R)), X !== void 0 && V !== void 0 && (L.push([
                  X,
                  V
                ]), Me.set(L.length - 1, R));
              }
            }
            if (w) for (let j = 0; j < i.length; j++) {
              if (vt === "perimeter" && j !== 0 && j !== i.length - 1) continue;
              const x = Math.floor((d.length - 1) / 2);
              for (let E = 0; E < d.length - 1; E++) {
                if (vt === "perimeter" && E !== x || y(j, E) || y(j, E + 1)) continue;
                const v = h[`${j},${E},${R}`], F = h[`${j},${E + 1},${R + 1}`], X = h[`${j},${E + 1},${R}`], V = h[`${j},${E},${R + 1}`];
                v !== void 0 && F !== void 0 && (L.push([
                  v,
                  F
                ]), Me.set(L.length - 1, R)), X !== void 0 && V !== void 0 && (L.push([
                  X,
                  V
                ]), Me.set(L.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), Ge = [
          ...i
        ], Ke = [
          ...d
        ], ut = g[g.length - 1] || 0, setTimeout(() => {
          wt(), Xo(i, d), Nn(), qn();
        }, 50), et(), {
          nodes: f.length,
          elements: L.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, c = 4) {
        Qe.clear();
        const s = [], r = [], p = ($) => n + l * (1 - Math.pow(2 * $ / t - 1, 2)), i = [], d = c + 1;
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
          for (let f = 2; f < y.length - 1; f++) r.push([
            y[f],
            y[f + 1]
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
        const g = /* @__PURE__ */ new Map(), S = bt();
        for (let $ = 0; $ < d; $++) g.set(i[$][0], [
          ...S
        ]), g.set(i[$][1], [
          ...S
        ]);
        return e.nodes.val = s, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: g
        }), et(), {
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
            qe.colMat = 1, qe.vigaMat = 1, Qe.clear(), ot("truss"), ps();
            break;
          }
          case "beams": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Qe.clear(), ot("beams"), fs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            qe.colMat = 1, qe.vigaMat = 1, Qe.clear(), ot("3d"), us();
            break;
          }
          case "portico": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, ot("frame"), Oe();
            break;
          }
          case "edificio": {
            ot("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, ve = [], Xe = false, Ie = false, Nt = false, Oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            ot("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ve = [], Ie = true, Ae = 2;
            const o = ce.reduce((l, a) => l + a, 0) / ce.length, n = oe.reduce((l, a) => l + a, 0) / oe.length;
            Ve = o >= n ? "y" : "x", Xe = true, it = 0.08, Nt = false, Oe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            ot("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ve = [], Ie = true, Ae = 2;
            const o = ce.reduce((l, a) => l + a, 0) / ce.length, n = oe.reduce((l, a) => l + a, 0) / oe.length;
            Ve = o >= n ? "y" : "x", Xe = true, it = 0.08, Nt = true, vt = "perimeter", Oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            ot("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Ie = false;
            const o = Math.round(((_a2 = K.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Xe = true, it = 0.15, Oe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            ot("edificio"), qe.colMat = 2, qe.vigaMat = 0, Ie = false;
            const o = Math.round(((_c = K.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = K.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], Xe = true, it = 0.12, Oe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            ot("edificio"), K.nPisos && (K.nPisos.val = 1), K.hPiso && (K.hPiso.val = 4.5), K.nVanosX && (K.nVanosX.val = 3), K.nVanosY && (K.nVanosY.val = 2), K.nSubViga && (K.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], oe = [
              5,
              5
            ], qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ve = [], Ie = true, Ae = 2, Ve = ce[0] >= oe[0] ? "y" : "x", Xe = true, it = 0.08, ft = 3, St = 3, Oe();
            break;
          }
          case "galpon": {
            ot("galpon"), qe.colMat = 1, qe.vigaMat = 1, Oe();
            break;
          }
          case "barra": {
            ot("barra"), Oe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Qe.clear(), ot("placa-3q"), ms();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Qe.clear(), ot("placa-q4"), gs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Qe.clear(), ot("losa-rect"), bs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Qe.clear(), ot("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Qe.clear(), ot("viga-alta"), xs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Qe.clear(), ot("muro-contencion"), vs();
            break;
          }
          case "zapata":
          case "footing": {
            Qe.clear(), ot("zapata"), ys();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Qe.clear(), ot("placa-orificios"), $s();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Qe.clear(), ot("col-placa"), Ms();
            break;
          }
          case "talud":
          case "slope": {
            Qe.clear(), ot("talud"), ws();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Qe.clear(), ot("eiffel"), _s();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Qe.clear(), ot("arco"), Ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Qe.clear(), ot("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Qe.clear(), ot("twisted"), Hs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Qe.clear(), ot("burj"), js();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Qe.clear(), ot("opera"), Ws();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Qe.clear(), ot("diagrid"), Gs();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            Qe.clear(), ot("muro-q4"), Vn();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            Qe.clear(), ot("viga-q4"), Ys();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            Qe.clear(), ot("placa-xz"), Js();
            break;
          }
          case "pergola":
          case "cubierta": {
            Qe.clear(), ot("pergola"), Vs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", c = -10, s = 0.2, r = 3e7, p = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${c}, t=${s}`);
        const g = performance.now(), S = Un({
          E: r,
          nu: p,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: c,
          theoryType: i
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
        S.nodeResults.forEach((z, O) => {
          h.set(O, [
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
        S.nodeResults.forEach((z, O) => {
          (z.x < 1e-10 || z.x > t - 1e-10 || z.y < 1e-10 || z.y > o - 1e-10) && I.set(O, [
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
          y.forEach((O, k) => {
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
          const z = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
          S.elementResults.forEach((m, u) => {
            z.set(u, [
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
            bendingXX: z,
            bendingYY: O,
            bendingXY: k
          };
        }
        return setTimeout(() => wt(), 50), et(), S;
      },
      set(t, o) {
        K[t] ? (K[t].val = o, console.log(`${t} = ${o}`), lo(), Oe()) : mt[t] ? (mt[t].val = o, console.log(`${t} = ${o}`), lo(), Oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...K,
          ...mt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in K) o[l] = K[l].val;
          for (const l in mt) o[l] = mt[l].val;
          o.plateTheory = Fe, o.supportType = Mt;
          const n = un()[T];
          return n && n[Mt] && (o.supportLabel = n[Mt].label), console.table(o), o;
        }
        if (K[t]) return K[t].val;
        if (mt[t]) return mt[t].val;
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
        }[t.toLowerCase()] || 3), Fe = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Fe] || Fe}`), T.includes("placa") && (lo(), Oe());
      },
      setBc(t) {
        const o = un()[T];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        Mt = t, Mt >= o.length && (Mt = 0), console.log(`Apoyo: ${o[Mt].label} \u2192 DOFs: [${o[Mt].dofs.map((n) => n ? "1" : "0").join(",")}]`), lo(), Oe();
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
        t && (b = t), o && (P = o), M = Ro(b, P);
        const n = Ce.querySelector("#cad3d-force-unit"), l = Ce.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = P), T && ot(T), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function cs() {
      return pl(M);
    }
    function ds() {
      return fl(M);
    }
    let mt = {};
    function ot(t) {
      var _a2, _b, _c, _d;
      T = t, ca.val = true, Mt = 0, xe && Cn(), K = {};
      const o = cs()[t];
      if (o) for (const l of o) K[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      mt = {};
      const n = ds()[t];
      if (n) for (const l of n) mt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = K.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ce = Array(l).fill(M.defaultSpan), oe = Array(a).fill(M.defaultSpan * 0.8);
        const c = Math.round(((_c = K.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = K.hPiso) == null ? void 0 : _d.val) ?? 3;
        q = Array(c).fill(s);
      }
      lo(), setTimeout(() => {
        Ta(), Oe();
      }, 50);
    }
    function re(t) {
      var _a2, _b;
      return ((_a2 = K[t]) == null ? void 0 : _a2.val) ?? ((_b = mt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Oe() {
      var _a2;
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
          const o = Math.round(re("nVanos")), n = re("spanV"), l = Math.round(re("nPisos")), a = re("hPiso");
          Qe.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = re("Lvix") || 0, n = re("Lvdx") || 0, l = re("Lviy") || 0, a = re("Lvdy") || 0, c = Math.max(1, Math.round(re("nSubViga") || 3)), s = Math.max(1, Math.round(re("nSubCol") || 1)), r = re("hPiso"), p = q.length > 0 ? [
            ...q
          ] : Array(Math.round(re("nPisos"))).fill(r);
          Qe.building([
            ...ce
          ], [
            ...oe
          ], p, c, o, n, l, a, s);
          break;
        }
        case "galpon":
          Qe.galpon(re("span"), re("length"), re("height"), re("archRise"), Math.round(re("xDiv")), Math.round(re("yDiv")));
          break;
        case "barra":
          va();
          break;
        case "placa-3q":
          ms();
          break;
        case "placa-q4":
          gs();
          break;
        case "losa-rect":
          bs();
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
          Vn();
          break;
        case "viga-q4":
          Ys();
          break;
        case "placa-xz":
          Js();
          break;
        case "pergola":
          Vs();
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
        if (Z.size > 0 || Y.size > 0 || H) {
          const o = e.elements.val, n = o.filter((l, a) => !(Z.has(a) || Y.has(a) || H && !W.has(a)));
          if (n.length !== o.length) {
            const l = /* @__PURE__ */ new Set();
            n.forEach((c) => c.forEach((s) => l.add(s)));
            const a = e.nodes.val;
            if (l.size < a.length) {
              const c = [
                ...l
              ].sort((p, i) => p - i), s = /* @__PURE__ */ new Map();
              c.forEach((p, i) => s.set(p, i)), e.nodes.val = c.map((p) => a[p]), n.forEach((p, i) => {
                n[i] = p.map((d) => s.get(d) ?? d);
              });
              const r = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val;
              if (r == null ? void 0 : r.supports) {
                const p = /* @__PURE__ */ new Map();
                r.supports.forEach((i, d) => {
                  s.has(d) && p.set(s.get(d), i);
                }), r.supports = p;
              }
              if (r == null ? void 0 : r.loads) {
                const p = /* @__PURE__ */ new Map();
                r.loads.forEach((i, d) => {
                  s.has(d) && p.set(s.get(d), i);
                }), r.loads = p;
              }
              r && (e.nodeInputs.val = r);
            }
            e.elements.val = n;
          }
        }
        setTimeout(() => {
          yo(), Fn();
        }, 30);
      }
    }
    function ps() {
      const t = re("span"), o = Math.round(re("divisions")), n = re("height"), l = t / o, a = [], c = [];
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
      if (p !== 0) for (let d = 0; d <= o; d++) i.set(d, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      }), et();
    }
    function fs() {
      const t = re("width"), o = re("height"), n = re("Ex") ?? 0, l = (re("CM") ?? 0) + (re("CV") ?? 0), a = Math.max(1, Math.round(re("nSub") || 4)), c = [
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
        const S = g / a, $ = c.length;
        c.push([
          r[0] + (p[0] - r[0]) * S,
          r[1] + (p[1] - r[1]) * S,
          r[2] + (p[2] - r[2]) * S
        ]), s.push([
          i,
          $
        ]), i = $;
      }
      s.push([
        i,
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
      }), et();
    }
    function us() {
      const t = re("dx"), o = re("dy"), n = re("dz"), l = Math.round(re("stories")), a = Math.max(1, Math.round(re("nSub") || 3)), c = [];
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
      const s = c.length, r = [
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
      const i = [];
      for (let f = 1; f <= l; f++) {
        const h = f * 4;
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
      for (const [f, h] of i) {
        const I = c[f], L = c[h];
        let z = f;
        for (let O = 1; O < a; O++) {
          const k = O / a, m = r.length;
          r.push([
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
      const g = re("Ex") ?? 0, S = (re("CM") ?? 0) + (re("CV") ?? 0), $ = s - 2, y = /* @__PURE__ */ new Map();
      if (g !== 0 && S === 0) y.set($, [
        g,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && g === 0) for (let f = 0; f < r.length; f++) d.has(f) || y.set(f, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (g !== 0 && S !== 0) for (let f = 0; f < r.length; f++) d.has(f) || y.set(f, [
        f === $ ? g : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: y
      }), et();
    }
    function va() {
      const t = re("L"), o = Math.round(re("nElem")), n = re("F"), l = t / o, a = [], c = [];
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
      e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: r
      }), et();
    }
    function ms() {
      const t = re("Lx") || 15, o = re("Ly") || 10, n = re("meshSize") || 0.5, l = re("q") || -3, a = re("t") || 1, c = re("E") || 3e7, s = re("nu") || 0.3, r = c / (2 * (1 + s)), p = Fe === 1 ? "Membrana" : Fe === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: d, boundaryIndices: g } = xo({
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
      }), S = t * o, $ = l * S / i.length, y = new Map(g.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(i.map((h, I) => [
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
          r
        ]))
      });
      try {
        const h = At(i, d, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const I = bo(i, d, e.elementInputs.val, h);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${i.length} nodes, ${d.length} triangles, t=${a}, E=${c}, \u03BD=${s}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => wt(), 50), et();
    }
    function gs() {
      const t = re("Lx") || 10, o = re("Ly") || 10, n = Math.round(re("nx") || 16), l = Math.round(re("ny") || 16), a = re("t") || 0.2, c = re("q") || -10, s = re("E") || 3e7, r = re("nu") || 0.3, p = Mt === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 0;
      return Qe.plateQ4(t, o, n, l, p, c, a, s, r, d);
    }
    function bs() {
      const t = re("a") || 6, o = re("b") || 4, n = Math.round(re("nx") || 12), l = Math.round(re("ny") || 8), a = re("t") || 0.1, c = re("q") || -10, s = re("E") || 35e6, r = re("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 0, d = Qe.plateQ4(t, o, n, l, "simply-supported", c, a, s, r, i), g = s * a * a * a / (12 * (1 - r * r));
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
    function hs() {
      const t = re("t") || 0.2, o = re("q") || -10, n = re("E") || 35e6, l = re("nu") || 0.2, a = re("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], r = c.reduce((x, E) => x + E, 0), p = s.reduce((x, E) => x + E, 0), i = [
        0
      ];
      for (const x of c) i.push(i[i.length - 1] + x);
      const d = [
        0
      ];
      for (const x of s) d.push(d[d.length - 1] + x);
      const g = Math.max(2, Math.round(r / a)), S = Math.max(2, Math.round(p / a)), $ = r / g, y = p / S, f = [];
      for (let x = 0; x <= S; x++) for (let E = 0; E <= g; E++) f.push([
        E * $,
        x * y
      ]);
      const h = [], I = /* @__PURE__ */ new Set();
      for (const x of i) for (const E of d) {
        let v = 1 / 0, F = 0;
        for (let X = 0; X < f.length; X++) {
          const V = Math.hypot(f[X][0] - x, f[X][1] - E);
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
      }[Fe] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${r}\xD7${p}m, ${g}\xD7${S} elem, ${I.size} columnas`);
      const O = performance.now(), k = Un({
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
        springs: h
      }), m = performance.now() - O;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${k.maxW.toExponential(4)}`);
      const u = k.nodeResults.map((x) => [
        x.x,
        x.y,
        0
      ]), w = k.elementResults.map((x) => [
        ...x.nodes
      ]);
      e.nodes.val = u, e.elements.val = w;
      const A = /* @__PURE__ */ new Map();
      k.nodeResults.forEach((x, E) => {
        A.set(E, [
          0,
          0,
          x.w,
          x.bx,
          x.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: A
      });
      const R = /* @__PURE__ */ new Map();
      for (const x of I) R.set(x, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const j = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const x = o * r * p / u.length;
        u.forEach((E, v) => {
          R.has(v) || j.set(v, [
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
        supports: R,
        loads: j
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const x = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        k.elementResults.forEach((F, X) => {
          x.set(X, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), E.set(X, [
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
          bendingYY: E,
          bendingXY: v
        };
      }
      setTimeout(() => wt(), 50), et();
    }
    function xs() {
      const t = re("L") || 4, o = re("H") || 2, n = re("t") || 0.1, l = re("E") || 2e7, a = re("nu") || 0.2, c = l / (2 * (1 + a)), s = re("q") || -100, r = re("b") || 0.8, p = re("meshSize") || 0.2, { nodes: i, elements: d, boundaryIndices: g } = xo({
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
      }), S = i, $ = 0.4, y = /* @__PURE__ */ new Map();
      for (let m = 0; m < S.length; m++) {
        const u = S[m][0], w = S[m][1];
        Math.abs(w) < 1e-6 && (u <= $ + 1e-6 || u >= t - $ - 1e-6) && y.set(m, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - r) / 2, h = f + r, I = [];
      for (let m = 0; m < S.length; m++) if (Math.abs(S[m][1] - o) < 1e-6) {
        const u = S[m][0];
        u >= f - 1e-6 && u <= h + 1e-6 && I.push(m);
      }
      const L = s * r / Math.max(I.length, 1), z = /* @__PURE__ */ new Map();
      for (const m of I) z.set(m, [
        0,
        L,
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
        loads: z
      };
      try {
        const m = At(S, d, k, O), u = bo(S, d, O, m), w = S.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = w, e.elements.val = d, m && m.deformations) {
          const R = /* @__PURE__ */ new Map();
          m.deformations.forEach((j, x) => {
            R.set(x, [
              j[0],
              j[2],
              j[1],
              j[3],
              j[5],
              j[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: R
          });
        }
        if (e.nodeInputs) {
          const R = /* @__PURE__ */ new Map();
          y.forEach((x, E) => R.set(E, x));
          const j = /* @__PURE__ */ new Map();
          z.forEach((x, E) => j.set(E, [
            x[0],
            x[2],
            x[1],
            x[3],
            x[5],
            x[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: j
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let A = 0;
        m && m.deformations && m.deformations.forEach((R) => {
          const j = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          A = Math.max(A, j);
        }), console.log(`Viga Alta: ${S.length} nodos, ${d.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${r}m central`), console.log(`  max|u| = ${A.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => wt(), 50), et();
    }
    function vs() {
      const t = re("H") || 4, o = re("B") || 3, n = re("tw") || 0.3, l = re("tb") || 0.4, a = re("meshSize") || 0.2, c = re("E") || 25e6, s = re("nu") || 0.2, r = c / (2 * (1 + s)), p = re("gamma") || 18, i = re("Ka") || 0.33, d = re("Es") || 5e4, g = re("nus") || 0.3, S = d / (2 * (1 + g)), $ = re("kn") || 1e6, y = re("ks") || 1e4, f = re("gammaW") || 9.81, h = re("Hw") || 3.5, I = re("qs") || 0, L = Mt, z = o * 0.3, O = o * 0.7, k = [
        [
          -z,
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
          -z,
          l,
          0
        ]
      ];
      let m = [], u = [], w = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), R;
      if (L === 0) {
        const E = xo({
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
        m = E.nodes, u = E.elements;
        for (let F = 0; F < m.length; F++) Math.abs(m[F][1]) < 1e-6 && w.set(F, [
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
          Math.abs(X - n) < a * 0.6 && V >= l - 1e-6 && v.push({
            idx: F,
            y: V
          });
        }
        v.sort((F, X) => F.y - X.y);
        for (let F = 0; F < v.length; F++) {
          const { idx: X, y: V } = v[F], ae = l + t - V, Q = i * p * ae + i * I;
          let U = a;
          F > 0 && F < v.length - 1 ? U = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? U = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (U = (v[F].y - v[F - 1].y) / 2);
          const ie = Q * U;
          Math.abs(ie) > 1e-10 && A.set(X, [
            ie,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
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
            r
          ]))
        };
      } else if (L === 1 || L === 2) {
        const E = O, v = l + t;
        if (L === 2) {
          const F = [
            [
              -z,
              0,
              0
            ],
            [
              E,
              0,
              0
            ],
            [
              E,
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
          ], X = Math.max(3, Math.ceil((v - l) / a)), V = [];
          for (let se = 0; se <= X; se++) V.push([
            n,
            l + se * (v - l) / X,
            0
          ]);
          const ae = xo({
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
            maxMeshSize: a
          });
          m = ae.nodes, u = ae.elements;
          const Q = a * 0.4, U = [];
          for (let se = 0; se < m.length; se++) {
            const Se = m[se][0], He = m[se][1];
            Math.abs(Se - n) < Q && He >= l - Q && U.push(se);
          }
          U.sort((se, Se) => m[se][1] - m[Se][1]);
          const ie = [
            U[0]
          ];
          for (let se = 1; se < U.length; se++) {
            const Se = m[U[se]][1] - m[ie[ie.length - 1]][1];
            Math.abs(Se) > a * 0.05 && ie.push(U[se]);
          }
          U.length = 0, U.push(...ie);
          const le = /* @__PURE__ */ new Map();
          for (const se of U) {
            const Se = m.length;
            m.push([
              m[se][0],
              m[se][1],
              m[se][2]
            ]), le.set(se, Se);
          }
          const ke = u.length, Re = [];
          for (let se = 0; se < ke; se++) {
            const Se = u[se], He = (m[Se[0]][0] + m[Se[1]][0] + m[Se[2]][0]) / 3, nt = (m[Se[0]][1] + m[Se[1]][1] + m[Se[2]][1]) / 3, dt = He >= -z && He <= O && nt >= 0 && nt <= l, $t = He >= 0 && He <= n && nt >= l && nt <= l + t, Ot = dt || $t;
            if (Re.push(!Ot), !Ot) for (let ye = 0; ye < Se.length; ye++) {
              const st = le.get(Se[ye]);
              st !== void 0 && (Se[ye] = st);
            }
          }
          const _ = u.length;
          for (let se = 0; se < U.length - 1; se++) {
            const Se = U[se], He = U[se + 1], nt = le.get(Se), dt = le.get(He);
            u.push([
              He,
              Se,
              nt,
              dt
            ]);
          }
          const ue = u.length - _, te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let se = 0; se < ke; se++) Re[se] ? (te.set(se, d), de.set(se, d), me.set(se, g), Ee.set(se, S), ee.set(se, 1)) : (te.set(se, c), de.set(se, c), me.set(se, s), Ee.set(se, r), ee.set(se, 1));
          for (let se = _; se < u.length; se++) te.set(se, $), de.set(se, 0), me.set(se, 0), Ee.set(se, y), ee.set(se, 0);
          R = {
            elasticities: te,
            elasticitiesOrthogonal: de,
            thicknesses: ee,
            poissonsRatios: me,
            shearModuli: Ee
          };
          for (let se = 0; se < m.length; se++) {
            const Se = m[se][0], He = m[se][1];
            Math.abs(He) < 1e-6 ? w.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - E) < a * 0.1 && w.set(se, [
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
            const Se = u[se], He = m[Se[0]], nt = m[Se[1]], dt = m[Se[2]], $t = Math.abs((nt[0] - He[0]) * (dt[1] - He[1]) - (dt[0] - He[0]) * (nt[1] - He[1])) / 2, Ot = -p * $t / 3;
            for (const ye of Se) {
              const st = A.get(ye) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              st[1] += Ot, A.set(ye, st);
            }
          }
          if (I > 0) {
            const se = [];
            for (let Se = 0; Se < m.length; Se++) {
              const He = m[Se][0], nt = m[Se][1];
              Math.abs(nt - v) < a * 0.1 && He > n - 1e-6 && se.push({
                idx: Se,
                x: He
              });
            }
            se.sort((Se, He) => Se.x - He.x);
            for (let Se = 0; Se < se.length; Se++) {
              let He = a;
              Se > 0 && Se < se.length - 1 ? He = (se[Se + 1].x - se[Se - 1].x) / 2 : Se === 0 && se.length > 1 ? He = (se[1].x - se[0].x) / 2 : Se === se.length - 1 && se.length > 1 && (He = (se[Se].x - se[Se - 1].x) / 2);
              const nt = -I * He, dt = A.get(se[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              dt[1] += nt, A.set(se[Se].idx, dt);
            }
          }
          console.log(`  Interfaz Goodman: ${U.length} nodos interfaz, ${ue} elem interfaz, kn=${$}, ks=${y}`);
        } else {
          const F = [
            [
              -z,
              0,
              0
            ],
            [
              E,
              0,
              0
            ],
            [
              E,
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
          ], V = xo({
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
          m = V.nodes, u = V.elements;
          const ae = (_) => {
            const ue = (m[_[0]][0] + m[_[1]][0] + m[_[2]][0]) / 3, te = (m[_[0]][1] + m[_[1]][1] + m[_[2]][1]) / 3, de = ue >= -z && ue <= O && te >= 0 && te <= l, ee = ue >= 0 && ue <= n && te >= l && te <= l + t;
            return de || ee;
          }, Q = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Re = [];
          for (let _ = 0; _ < u.length; _++) {
            const ue = ae(u[_]);
            Re.push(!ue), ue ? (Q.set(_, c), U.set(_, c), le.set(_, s), ke.set(_, r), ie.set(_, 1)) : (Q.set(_, d), U.set(_, d), le.set(_, g), ke.set(_, S), ie.set(_, 1));
          }
          R = {
            elasticities: Q,
            elasticitiesOrthogonal: U,
            thicknesses: ie,
            poissonsRatios: le,
            shearModuli: ke
          };
          for (let _ = 0; _ < m.length; _++) {
            const ue = m[_][0], te = m[_][1];
            Math.abs(te) < 1e-6 ? w.set(_, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ue - E) < a * 0.1 && w.set(_, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let _ = 0; _ < u.length; _++) {
            if (!Re[_]) continue;
            const ue = u[_], te = m[ue[0]], de = m[ue[1]], ee = m[ue[2]], me = Math.abs((de[0] - te[0]) * (ee[1] - te[1]) - (ee[0] - te[0]) * (de[1] - te[1])) / 2, Ee = -p * me / 3;
            for (const se of ue) {
              const Se = A.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += Ee, A.set(se, Se);
            }
          }
          if (I > 0) {
            const _ = [];
            for (let ue = 0; ue < m.length; ue++) {
              const te = m[ue][0], de = m[ue][1];
              Math.abs(de - v) < a * 0.1 && te > n - 1e-6 && _.push({
                idx: ue,
                x: te
              });
            }
            _.sort((ue, te) => ue.x - te.x);
            for (let ue = 0; ue < _.length; ue++) {
              let te = a;
              ue > 0 && ue < _.length - 1 ? te = (_[ue + 1].x - _[ue - 1].x) / 2 : ue === 0 && _.length > 1 ? te = (_[1].x - _[0].x) / 2 : ue === _.length - 1 && _.length > 1 && (te = (_[ue].x - _[ue - 1].x) / 2);
              const de = -I * te, ee = A.get(_[ue].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += de, A.set(_[ue].idx, ee);
            }
          }
        }
      }
      if (L === 3) {
        const E = xo({
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
        m = E.nodes, u = E.elements;
        for (let ae = 0; ae < m.length; ae++) Math.abs(m[ae][1]) < 1e-6 && w.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, F = Math.min(h, t), X = v - F, V = [];
        for (let ae = 0; ae < m.length; ae++) {
          const Q = m[ae][0], U = m[ae][1];
          Math.abs(Q - n) < a * 0.6 && U >= l - 1e-6 && V.push({
            idx: ae,
            y: U
          });
        }
        V.sort((ae, Q) => ae.y - Q.y);
        for (let ae = 0; ae < V.length; ae++) {
          const { idx: Q, y: U } = V[ae], ie = Math.max(0, v - U);
          if (ie <= 0 || U < X - 1e-6) continue;
          const le = Math.min(ie, F), ke = f * le;
          let Re = a;
          ae > 0 && ae < V.length - 1 ? Re = (V[ae + 1].y - V[ae - 1].y) / 2 : ae === 0 && V.length > 1 ? Re = (V[1].y - V[0].y) / 2 : ae === V.length - 1 && V.length > 1 && (Re = (V[ae].y - V[ae - 1].y) / 2);
          const _ = ke * Re;
          Math.abs(_) > 1e-10 && A.set(Q, [
            _,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
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
            n
          ])),
          poissonsRatios: new Map(u.map((ae, Q) => [
            Q,
            s
          ])),
          shearModuli: new Map(u.map((ae, Q) => [
            Q,
            r
          ]))
        };
      }
      const j = {
        supports: w,
        loads: A
      }, x = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const E = At(m, u, j, R), v = u.filter((ie) => ie.length === 3), F = {};
        for (const ie of Object.keys(R)) {
          const le = R[ie];
          if (le && le instanceof Map) {
            const ke = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let _ = 0; _ < u.length; _++) u[_].length === 3 && (le.has(_) && ke.set(Re, le.get(_)), Re++);
            F[ie] = ke;
          }
        }
        const X = bo(m, v, F, E), V = m.map((ie) => [
          ie[0],
          0,
          ie[1]
        ]);
        if (e.nodes.val = V, e.elements.val = v, E && E.deformations) {
          const ie = /* @__PURE__ */ new Map();
          E.deformations.forEach((le, ke) => {
            ie.set(ke, [
              le[0],
              le[2],
              le[1],
              le[3],
              le[5],
              le[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: ie
          });
        }
        const ae = /* @__PURE__ */ new Map();
        w.forEach((ie, le) => ae.set(le, ie));
        const Q = /* @__PURE__ */ new Map();
        A.forEach((ie, le) => Q.set(le, [
          ie[0],
          ie[2],
          ie[1],
          ie[3],
          ie[5],
          ie[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Q
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let U = 0;
        E && E.deformations && E.deformations.forEach((ie) => {
          const le = Math.sqrt(ie[0] * ie[0] + ie[1] * ie[1] + ie[2] * ie[2]);
          U = Math.max(U, le);
        }), console.log(`Muro Contencion [${x[L]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${i}, gamma=${p}, qs=${I}`), L === 1 && console.log(`  Es=${d}, nus=${g}`), L === 2 && console.log(`  Es=${d}, nus=${g}, kn=${$}, ks=${y}`), L === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${U.toExponential(4)}`);
      } catch (E) {
        console.warn("Muro Contencion failed:", E.message);
      }
      setTimeout(() => wt(), 50), et();
    }
    function ys() {
      const t = re("Lx") || 2, o = re("Ly") || 2, n = re("t") || 0.5, l = re("colA") || 0.4, a = re("colH") || 1.5, c = Math.round(re("nx") || 8), s = Math.round(re("ny") || 8), r = re("E") || 25e6, p = re("nu") || 0.2, i = re("P") || -500, d = re("Mx") || 0, g = re("My") || 0, S = re("ks") || 2e4, $ = t / c, y = o / s, f = t / 2, h = o / 2, I = l / 2, L = [];
      for (let w = 0; w <= s; w++) for (let A = 0; A <= c; A++) {
        const R = w * (c + 1) + A;
        let j = $, x = y;
        (A === 0 || A === c) && (j = $ / 2), (w === 0 || w === s) && (x = y / 2), L.push({
          node: R,
          dof: 0,
          k: S * j * x
        });
      }
      let z = 0;
      for (let w = 0; w <= s; w++) for (let A = 0; A <= c; A++) Math.abs(A * $ - f) <= I + 1e-6 && Math.abs(w * y - h) <= I + 1e-6 && z++;
      const O = i / Math.max(z, 1), k = [];
      for (let w = 0; w <= s; w++) for (let A = 0; A <= c; A++) {
        const R = A * $, j = w * y;
        Math.abs(R - f) <= I + 1e-6 && Math.abs(j - h) <= I + 1e-6 && k.push({
          node: w * (c + 1) + A,
          dof: 0,
          value: O
        });
      }
      if (Math.abs(d) > 1e-6) {
        const w = I > 1e-6 ? I : y, A = d / w;
        for (let R = 0; R <= s; R++) for (let j = 0; j <= c; j++) {
          const x = j * $, E = R * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(E - h) <= I + 1e-6) {
            const v = E - h;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: R * (c + 1) + j,
                dof: 0,
                value: F * A / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(g) > 1e-6) {
        const w = I > 1e-6 ? I : $, A = g / w;
        for (let R = 0; R <= s; R++) for (let j = 0; j <= c; j++) {
          const x = j * $, E = R * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(E - h) <= I + 1e-6) {
            const v = x - f;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              k.push({
                node: R * (c + 1) + j,
                dof: 0,
                value: F * A / z * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${s} elem`), console.log(`  col=${l}m, P=${i}, Mx=${d}, My=${g}, ks=${S}`);
      try {
        const w = Un({
          E: r,
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
        console.log(`  Solved: w_max = ${w.maxW.toExponential(4)}`);
        const A = w.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), R = A.length;
        A.push([
          f - I,
          h - I,
          0
        ]), A.push([
          f + I,
          h - I,
          0
        ]), A.push([
          f + I,
          h + I,
          0
        ]), A.push([
          f - I,
          h + I,
          0
        ]), A.push([
          f - I,
          h - I,
          a
        ]), A.push([
          f + I,
          h - I,
          a
        ]), A.push([
          f + I,
          h + I,
          a
        ]), A.push([
          f - I,
          h + I,
          a
        ]);
        const j = w.elementResults.map((X) => [
          ...X.nodes
        ]);
        j.push([
          R,
          R + 4
        ]), j.push([
          R + 1,
          R + 5
        ]), j.push([
          R + 2,
          R + 6
        ]), j.push([
          R + 3,
          R + 7
        ]), j.push([
          R + 4,
          R + 5
        ]), j.push([
          R + 5,
          R + 6
        ]), j.push([
          R + 6,
          R + 7
        ]), j.push([
          R + 7,
          R + 4
        ]), j.push([
          R,
          R + 1
        ]), j.push([
          R + 1,
          R + 2
        ]), j.push([
          R + 2,
          R + 3
        ]), j.push([
          R + 3,
          R
        ]), e.nodes.val = A, e.elements.val = j;
        const x = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((X, V) => {
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
        const E = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((X, V) => {
          const ae = X.x, Q = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Q < 1e-6 || Q > o - 1e-6) && E.set(V, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const v = /* @__PURE__ */ new Map();
        if (v.set(R + 4, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(R + 5, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(R + 6, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(R + 7, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: E,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = w.elementResults.length, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
          w.elementResults.forEach((U, ie) => {
            V.set(ie, [
              U.Mxx,
              U.Mxx,
              U.Mxx
            ]), ae.set(ie, [
              U.Myy,
              U.Myy,
              U.Myy
            ]), Q.set(ie, [
              U.Mxy,
              U.Mxy,
              U.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: V,
            bendingYY: ae,
            bendingXY: Q
          };
        }
        const F = Ze();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (w) {
        console.warn("Zapata solver failed:", w.message);
      }
      setTimeout(() => wt(), 50), et();
    }
    function $s() {
      const t = re("Lx") || 0.4, o = re("Ly") || 0.4, n = re("t") || 0.025, l = re("dBolt") || 0.022, a = re("sx") || 0.28, c = re("sy") || 0.28, s = re("colA") || 0.2, r = re("meshSize") || 8e-3, p = re("E") || 2e8, i = re("nu") || 0.3, d = p / (2 * (1 + i)), g = re("P") || -200, S = Math.round(re("nBolts") || 4), $ = t / 2, y = o / 2, f = l / 2, h = s / 2, I = [];
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
      const { nodes: L, elements: z } = xo({
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
      }), O = (x, E) => {
        for (const [v, F] of I) if ((x - v) * (x - v) + (E - F) * (E - F) < f * f) return true;
        return false;
      }, k = z.filter((x) => {
        const E = (L[x[0]][0] + L[x[1]][0] + L[x[2]][0]) / 3, v = (L[x[0]][1] + L[x[1]][1] + L[x[2]][1]) / 3;
        return !O(E, v);
      }), m = L, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < m.length; x++) {
        const E = m[x][0], v = m[x][1];
        for (const [F, X] of I) {
          const V = Math.sqrt((E - F) * (E - F) + (v - X) * (v - X));
          V >= f * 0.7 && V <= f * 1.5 && u.set(x, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const w = /* @__PURE__ */ new Map();
      let A = 0;
      for (let x = 0; x < m.length; x++) {
        const E = m[x][0], v = m[x][1];
        Math.abs(E - $) <= h && Math.abs(v - y) <= h && A++;
      }
      const R = g / Math.max(A, 1);
      for (let x = 0; x < m.length; x++) {
        const E = m[x][0], v = m[x][1];
        if (Math.abs(E - $) <= h && Math.abs(v - y) <= h) {
          const F = w.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += R, w.set(x, F);
        }
      }
      const j = {
        elasticities: new Map(k.map((x, E) => [
          E,
          p
        ])),
        elasticitiesOrthogonal: new Map(k.map((x, E) => [
          E,
          p
        ])),
        thicknesses: new Map(k.map((x, E) => [
          E,
          n
        ])),
        poissonsRatios: new Map(k.map((x, E) => [
          E,
          i
        ])),
        shearModuli: new Map(k.map((x, E) => [
          E,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${g} kN, col=${s * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const x = At(m, k, {
          supports: u,
          loads: w
        }, j), E = bo(m, k, j, x);
        e.nodes.val = m, e.elements.val = k, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: w
        }), e.elementInputs && (e.elementInputs.val = {}), E && e.analyzeOutputs && (e.analyzeOutputs.val = E);
        let v = 0;
        x && x.deformations && x.deformations.forEach((F) => {
          const X = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => wt(), 50), et();
    }
    function Ms() {
      const t = re("colB") || 0.3, o = re("colH") || 0.3, n = re("colT") || 8e-3, l = re("colLen") || 1.5, a = re("Lx") || 0.45, c = re("Ly") || 0.45, s = re("tPlaca") || 0.025, r = re("dBolt") || 0.022, p = re("sx") || 0.32, i = re("sy") || 0.32, d = Math.round(re("nSubColV") || 6), g = Math.round(re("nSubColH") || 4), S = Math.round(re("nSubPlaca") || 10), $ = re("E") || 2e8, y = re("nu") || 0.3, f = $ / (2 * (1 + y)), h = re("P") || -300, I = a / 2, L = c / 2, z = r / 2, O = t / 2, k = o / 2, m = [], u = [], w = S, A = a / w, R = c / w, j = (de, ee) => ee * (w + 1) + de;
      for (let de = 0; de <= w; de++) for (let ee = 0; ee <= w; ee++) m.push([
        ee * A,
        de * R,
        0
      ]);
      const x = [
        [
          I - p / 2,
          L - i / 2
        ],
        [
          I + p / 2,
          L - i / 2
        ],
        [
          I + p / 2,
          L + i / 2
        ],
        [
          I - p / 2,
          L + i / 2
        ]
      ], E = (de, ee) => {
        for (const [me, Ee] of x) if ((de - me) * (de - me) + (ee - Ee) * (ee - Ee) < z * z) return true;
        return false;
      }, v = u.length;
      for (let de = 0; de < w; de++) for (let ee = 0; ee < w; ee++) {
        const me = (ee + 0.5) * A, Ee = (de + 0.5) * R;
        E(me, Ee) || u.push([
          j(ee, de),
          j(ee + 1, de),
          j(ee + 1, de + 1),
          j(ee, de + 1)
        ]);
      }
      const F = u.length - v, X = d, V = g, ae = [
        [
          I - O,
          L - k
        ],
        [
          I + O,
          L - k
        ],
        [
          I + O,
          L + k
        ],
        [
          I - O,
          L + k
        ]
      ], Q = u.length, U = [
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
      ], ie = (de, ee) => {
        for (let me = 0; me < (w + 1) * (w + 1); me++) if (Math.abs(m[me][0] - de) < A * 0.3 && Math.abs(m[me][1] - ee) < R * 0.3 && Math.abs(m[me][2]) < 1e-6) return me;
        return -1;
      };
      for (const [de, ee] of U) {
        const [me, Ee] = ae[de], [se, Se] = ae[ee], He = [];
        for (let nt = 0; nt <= X; nt++) {
          const dt = [], $t = nt / X * l;
          for (let Ot = 0; Ot <= V; Ot++) {
            const ye = Ot / V, st = me + ye * (se - me), ht = Ee + ye * (Se - Ee);
            if (nt === 0) {
              const qt = ie(st, ht);
              if (qt >= 0) {
                dt.push(qt);
                continue;
              }
            }
            let jt = -1;
            for (let qt = 0; qt < m.length; qt++) if (Math.abs(m[qt][0] - st) < 1e-6 && Math.abs(m[qt][1] - ht) < 1e-6 && Math.abs(m[qt][2] - $t) < 1e-6) {
              jt = qt;
              break;
            }
            jt >= 0 ? dt.push(jt) : (dt.push(m.length), m.push([
              st,
              ht,
              $t
            ]));
          }
          He.push(dt);
        }
        for (let nt = 0; nt < X; nt++) for (let dt = 0; dt < V; dt++) u.push([
          He[nt][dt],
          He[nt][dt + 1],
          He[nt + 1][dt + 1],
          He[nt + 1][dt]
        ]);
      }
      const le = u.length - Q, ke = /* @__PURE__ */ new Map();
      for (let de = 0; de < (w + 1) * (w + 1); de++) {
        const ee = m[de][0], me = m[de][1];
        for (const [Ee, se] of x) {
          const Se = Math.sqrt((ee - Ee) * (ee - Ee) + (me - se) * (me - se));
          Se >= z * 0.5 && Se <= z * 2 && ke.set(de, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Re = /* @__PURE__ */ new Map(), _ = [];
      for (let de = 0; de < m.length; de++) Math.abs(m[de][2] - l) < 1e-6 && _.push(de);
      const ue = h / Math.max(_.length, 1);
      for (const de of _) Re.set(de, [
        0,
        0,
        ue,
        0,
        0,
        0
      ]);
      const te = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let de = v; de < v + F; de++) te.elasticities.set(de, $), te.poissonsRatios.set(de, y), te.thicknesses.set(de, s), te.shearModuli.set(de, f);
      for (let de = Q; de < Q + le; de++) te.elasticities.set(de, $), te.poissonsRatios.set(de, y), te.thicknesses.set(de, n), te.shearModuli.set(de, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${c * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${le} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const de = At(m, u, {
          supports: ke,
          loads: Re
        }, te), ee = bo(m, u, te, de);
        e.nodes.val = m, e.elements.val = u, de && e.deformOutputs && (e.deformOutputs.val = de), e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Re
        }), e.elementInputs && (e.elementInputs.val = te), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let me = 0;
        (de == null ? void 0 : de.deformations) && de.deformations.forEach((Ee) => {
          const se = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          me = Math.max(me, se);
        }), console.log(`  max|u| = ${me.toExponential(4)}`);
      } catch (de) {
        console.warn("Col+Placa failed:", de.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Re
        });
      }
      setTimeout(() => wt(), 50), et();
    }
    function ws() {
      const t = re("H") || 6, o = re("angle") || 45, n = re("bTop") || 3, l = re("bBot") || 3, a = re("meshSize") || 2, c = re("E") || 5e4, s = re("nu") || 0.3, r = re("gamma") || 18, p = re("c") || 15, i = re("phi") || 30, d = re("qs") || 0, g = t / Math.tan(o * Math.PI / 180), S = l + g + n, $ = t, y = [
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
      ], { nodes: f, elements: h } = xo({
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
      const O = t - a * 0.3;
      try {
        const k = I.map((E) => [
          E[0],
          E[1]
        ]), m = h.map((E) => [
          E[0],
          E[1],
          E[2]
        ]), u = Xa({
          nodes: k,
          elements: m,
          E: c,
          nu: s,
          gamma: r,
          c: p,
          phi: i,
          thickness: 1,
          supports: L,
          surcharge: d,
          surfaceYThreshold: O
        }), w = I.map((E) => [
          E[0],
          0,
          E[1]
        ]);
        e.nodes.val = w, e.elements.val = h;
        const A = /* @__PURE__ */ new Map();
        for (let E = 0; E < u.displacements.length; E++) {
          const [v, F] = u.displacements[E];
          A.set(E, [
            v,
            0,
            F,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: A
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: z
        }), e.elementInputs && (e.elementInputs.val = {});
        const R = /* @__PURE__ */ new Map();
        for (let E = 0; E < u.plasticStrain.length; E++) {
          const v = u.plasticStrain[E];
          R.set(E, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: R
        });
        let j = 0;
        for (const [E, v] of u.displacements) {
          const F = Math.sqrt(E * E + v * v);
          j = Math.max(j, F);
        }
        let x = 0;
        for (const E of u.plasticStrain) x = Math.max(x, E);
        console.log(`Talud SRM: ${I.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${j.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => wt(), 50), et();
    }
    let co = null, Rt = null, po = null;
    function ya() {
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
    function It(t) {
      const o = Vo.find((n) => n.id === P);
      return t / o.toM;
    }
    function kt(t) {
      const o = Vo.find((n) => n.id === P);
      return t * o.toM;
    }
    function To(t) {
      const o = os.find((l) => l.id === J.forceId), n = Vo.find((l) => l.id === J.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Tn(t) {
      const o = os.find((l) => l.id === J.forceId), n = Vo.find((l) => l.id === J.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function zn() {
      return J.label;
    }
    function $a() {
      switch (Vo.find((o) => o.id === P).id) {
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
    function Ma() {
      const t = To(20594), o = To(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Es(t, o, n, l, a) {
      const c = qe.steelVigaType, s = c === 0 ? mn() : gn();
      if (qe.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = `b${n}${r}`, d = `h${n}${r}`, g = {};
          g[i] = +It(p.b).toFixed(2), g[d] = +It(p.h).toFixed(2), t.addBinding(g, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(g, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key, i = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), d = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          i && (o[parseInt(i[1])].b = kt(r.value), Oe()), d && (o[parseInt(d[1])].h = kt(r.value), Oe());
        });
      } else if (c <= 1) {
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
          i && (o[parseInt(i[1])].profileIdx = r.value, Oe());
        });
      } else if (c === 2) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = {}, d = `${n}${r}`;
          i[`bf${d}`] = +It(p.bf ?? 0.2).toFixed(3), i[`h${d}`] = +It(p.hf ?? 0.4).toFixed(3), i[`tf${d}`] = +It(p.tf ?? 0.015).toFixed(3), i[`tw${d}`] = +It(p.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(i, `h${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(i, `tf${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(i, `tw${d}`, {
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
            const d = `${n}${i}`;
            p === `bf${d}` && (o[i].bf = kt(r.value), Oe()), p === `h${d}` && (o[i].hf = kt(r.value), Oe()), p === `tf${d}` && (o[i].tf = kt(r.value), Oe()), p === `tw${d}` && (o[i].tw = kt(r.value), Oe());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = {}, d = `${n}${r}`;
          i[`bc${d}`] = +It(p.bc ?? 0.2).toFixed(3), i[`hc${d}`] = +It(p.hc ?? 0.3).toFixed(3), i[`t${d}`] = +It(p.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(i, `hc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(i, `t${d}`, {
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
            const d = `${n}${i}`;
            p === `bc${d}` && (o[i].bc = kt(r.value), Oe()), p === `hc${d}` && (o[i].hc = kt(r.value), Oe()), p === `t${d}` && (o[i].t = kt(r.value), Oe());
          }
        });
      }
    }
    function No() {
      var _a2;
      if (Rt) {
        try {
          Rt.dispose();
        } catch {
        }
        Rt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), T !== "edificio" && T !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = ya();
      if (!o) return;
      o.style.display = "";
      const n = M, l = Math.round(((_a2 = K.nPisos) == null ? void 0 : _a2.val) ?? 3), a = $a(), c = Ma(), s = ce.length || 1, r = oe.length || 1;
      for (; qe.perFloor.length < l; ) {
        const m = qe.perFloor.length > 0 ? JSON.parse(JSON.stringify(qe.perFloor[qe.perFloor.length - 1])) : io(s, r);
        qe.perFloor.push(m);
      }
      qe.perFloor.length > l && (qe.perFloor.length = l);
      for (const m of qe.perFloor) {
        for (; m.vigasX.length < s; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : gt());
        for (m.vigasX.length > s && (m.vigasX.length = s); m.vigasY.length < r; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : gt());
        m.vigasY.length > r && (m.vigasY.length = r);
      }
      Rt = new on({
        title: `Sections (${n.label})`,
        container: o
      });
      const p = {
        colMat: qe.colMat
      };
      if (Rt.addBinding(p, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        qe.colMat = m.value, No(), Oe();
      }), qe.colMat === 0) {
        const m = {
          forma: qe.colShape
        };
        Rt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (w) => {
          qe.colShape = w.value, No(), Oe();
        });
        const u = {
          fc: +To(qe.fc).toFixed(1)
        };
        Rt.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${zn()})`
        }), Rt.on("change", (w) => {
          var _a3;
          ((_a3 = w.target) == null ? void 0 : _a3.key) === "fc" && (qe.fc = Tn(w.value), Oe());
        });
      } else if (qe.colMat === 1) {
        const m = {
          colType: qe.steelColType
        };
        Rt.addBinding(m, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          qe.steelColType = u.value, No(), Oe();
        });
      }
      Rt.addBlade({
        view: "separator"
      });
      const i = {
        vigaMat: qe.vigaMat
      };
      if (Rt.addBinding(i, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        qe.vigaMat = m.value, No(), Oe();
      }), qe.vigaMat === 1) {
        const m = {
          vigaType: qe.steelVigaType
        };
        Rt.addBinding(m, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          qe.steelVigaType = u.value, No(), Oe();
        });
      }
      const d = qe.steelColType === 0 ? mn() : gn();
      qe.steelVigaType === 0 ? mn() : gn();
      const g = P === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : P === "cm" ? [
        0.5,
        10,
        0.1
      ] : P === "mm" ? [
        5,
        100,
        1
      ] : P === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let m = 0; m < l; m++) {
        const u = qe.perFloor[m], w = Rt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (qe.colMat === 0) if (qe.colShape === 1) {
          const A = {
            dCol: +It(u.dCol).toFixed(2)
          };
          w.addBinding(A, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), w.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = kt(R.value), Oe());
          });
        } else {
          const A = {
            bCol: +It(u.bCol).toFixed(2),
            hCol: +It(u.hCol).toFixed(2)
          };
          w.addBinding(A, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), w.addBinding(A, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), w.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = kt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = kt(R.value), Oe());
          });
        }
        else if (qe.colMat === 1) if (qe.steelColType <= 1) {
          const A = {
            col: u.colProfileIdx
          };
          w.addBinding(A, "col", {
            label: "Columna",
            options: d
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Oe();
          });
        } else if (qe.steelColType === 2) {
          const A = {
            bf: +It(u.colBf ?? 0.3).toFixed(3),
            h: +It(u.colHf ?? 0.3).toFixed(3),
            tf: +It(u.colTf ?? 0.02).toFixed(3),
            tw: +It(u.colTw ?? 0.012).toFixed(3)
          };
          w.addBinding(A, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), w.addBinding(A, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), w.addBinding(A, "tf", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tf"
          }), w.addBinding(A, "tw", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col tw"
          }), w.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = kt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = kt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = kt(R.value), Oe()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = kt(R.value), Oe());
          });
        } else {
          const A = {
            bc: +It(u.colBc ?? 0.3).toFixed(3),
            hc: +It(u.colHc ?? 0.3).toFixed(3),
            t: +It(u.colT ?? 0.01).toFixed(3)
          };
          w.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), w.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), w.addBinding(A, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), w.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = kt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = kt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = kt(R.value), Oe());
          });
        }
        else {
          const A = {
            bc: +It(u.colBc ?? 0.3).toFixed(3),
            hc: +It(u.colHc ?? 0.3).toFixed(3),
            t: +It(u.colT ?? 0.01).toFixed(3),
            Es: +To(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +To(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          w.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), w.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), w.addBinding(A, "t", {
            min: g[0],
            max: g[1],
            step: g[2],
            label: "Col t"
          }), w.addBlade({
            view: "separator"
          });
          const R = +To(1e8).toFixed(0), j = +To(3e8).toFixed(0), x = Math.max(1, Math.round((j - R) / 200));
          w.addBinding(A, "Es", {
            min: R,
            max: j,
            step: x,
            label: `Es (${zn()})`
          }), w.addBinding(A, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), w.addBinding(A, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${zn()})`
          }), w.addBinding(A, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), w.on("change", (E) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = E.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = kt(E.value), Oe()), ((_b = E.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = kt(E.value), Oe()), ((_c = E.target) == null ? void 0 : _c.key) === "t" && (u.colT = kt(E.value), Oe()), ((_d = E.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Tn(E.value), Oe()), ((_e2 = E.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = E.value, Oe()), ((_f = E.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Tn(E.value), Oe()), ((_g = E.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = E.value, Oe());
          });
        }
        if (u.vigasX.length > 0) {
          const A = w.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Es(A, u.vigasX, "x", a, g);
        }
        if (u.vigasY.length > 0) {
          const A = w.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Es(A, u.vigasY, "y", a, g);
        }
      }
      Rt.addBlade({
        view: "separator"
      });
      const S = Rt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), $ = {
        activar: Ie,
        direccion: Ve === "x" ? 0 : 1,
        cantidad: Ae
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ie = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Ve = m.value === 0 ? "x" : "y", Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ae = Math.round(m.value), Oe());
      }), Rt.addBlade({
        view: "separator"
      });
      const y = Rt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Xe,
        espesor: +It(it).toFixed(3),
        subdivX: ft,
        subdivY: St
      };
      y.addBinding(f, "activar", {
        label: "Activar losas"
      }), y.addBinding(f, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
        label: `Espesor (${n.length})`
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Xe = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (it = kt(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (ft = Math.round(m.value), Oe()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (St = Math.round(m.value), Oe());
      }), Rt.addBlade({
        view: "separator"
      });
      const h = Rt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +It(je).toFixed(3),
        subdivH: We,
        subdivW: ge
      };
      h.addBinding(I, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
        label: `Espesor (${n.length})`
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (je = kt(m.value), Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (We = Math.round(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (ge = Math.round(m.value), Oe());
      });
      const L = ce.length || 1, z = oe.length || 1, O = L + 1, k = z + 1;
      if (L > 0) {
        const m = h.addFolder({
          title: `Muros dir X (${L} vanos)`,
          expanded: false
        });
        for (let u = 0; u < L; u++) for (let w = 0; w < k; w++) {
          const A = `wx_${u}_${w}`, R = ve.some((E) => E.dir === "x" && E.bay === u && E.axisIdx === w), j = {};
          j[A] = R;
          const x = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + w)}`;
          m.addBinding(j, A, {
            label: x
          }).on("change", (E) => {
            E.value ? ve.push({
              dir: "x",
              bay: u,
              axisIdx: w,
              floors: [
                -1
              ]
            }) : ve = ve.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === w)), Oe();
          });
        }
      }
      if (z > 0) {
        const m = h.addFolder({
          title: `Muros dir Y (${z} vanos)`,
          expanded: false
        });
        for (let u = 0; u < z; u++) for (let w = 0; w < O; w++) {
          const A = `wy_${u}_${w}`, R = ve.some((E) => E.dir === "y" && E.bay === u && E.axisIdx === w), j = {};
          j[A] = R;
          const x = `Vano Y${u + 1} / Eje X${w + 1}`;
          m.addBinding(j, A, {
            label: x
          }).on("change", (E) => {
            E.value ? ve.push({
              dir: "y",
              bay: u,
              axisIdx: w,
              floors: [
                -1
              ]
            }) : ve = ve.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === w)), Oe();
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
    function lo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (pe || (pe = t.innerHTML), $e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (co) {
        try {
          co.dispose();
        } catch {
        }
        co = null;
      }
      t.innerHTML = "";
      const o = T.charAt(0).toUpperCase() + T.slice(1);
      $e = new on({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = cs()[T];
      if (n) {
        const a = {};
        for (const s of n) a[s.key] = K[s.key].val;
        for (const s of n) $e.addBinding(a, s.key, {
          min: K[s.key].min,
          max: K[s.key].max,
          step: K[s.key].step,
          label: K[s.key].label
        });
        const c = $e.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of n) {
          const r = {
            min: K[s.key].min,
            max: K[s.key].max
          };
          c.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            K[s.key] && (K[s.key].min = r.min, K[s.key].max = r.max, K[s.key].val < r.min && (K[s.key].val = r.min), K[s.key].val > r.max && (K[s.key].val = r.max)), lo(), Oe();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && K[r]) {
            if (K[r].val = s.value, T === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const p = Math.round(K.nVanosX.val), i = Math.round(K.nVanosY.val);
                for (; ce.length < p; ) ce.push(ce[ce.length - 1] ?? M.defaultSpan);
                for (ce.length > p && (ce.length = p); oe.length < i; ) oe.push(oe[oe.length - 1] ?? M.defaultSpan * 0.8);
                oe.length > i && (oe.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const p = Math.round(K.nPisos.val), i = ((_b = K.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; q.length < p; ) q.push(q[q.length - 1] ?? i);
                q.length > p && (q.length = p);
              }
              lo();
            }
            Oe();
          }
        });
      }
      if (T === "edificio") {
        if (po) {
          try {
            po.dispose();
          } catch {
          }
          po = null;
        }
        const a = document.getElementById("luces-panel");
        if (a) {
          let c = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = K.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = K.Lvdx) == null ? void 0 : _b.val) || 0, g = ((_c = K.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = K.Lvdy) == null ? void 0 : _d.val) || 0;
            let $ = "X: ";
            i > 0 && ($ += `\u251C${i.toFixed(1)}\u2524`);
            for (let h = 0; h < ce.length; h++) $ += `[${p[h + (i > 0 ? 1 : 0)]}]\u2500\u2500${ce[h].toFixed(1)}\u2500\u2500`;
            $ += `[${p[ce.length + (i > 0 ? 1 : 0)]}]`, d > 0 && ($ += `\u251C${d.toFixed(1)}\u2524`);
            let y = "Y: ";
            g > 0 && (y += `\u251C${g.toFixed(1)}\u2524`);
            for (let h = 0; h < oe.length; h++) y += `[${h + 1 + (g > 0 ? 1 : 0)}]\u2500\u2500${oe[h].toFixed(1)}\u2500\u2500`;
            y += `[${oe.length + 1 + (g > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let h = 0; h < q.length; h++) f += `P${h + 1}=${q[h].toFixed(1)} `;
            r.textContent = $ + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = M;
          try {
            po = new on({
              title: `Luces (${s.length})`,
              container: a
            });
            const p = po.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let d = 0; d < ce.length; d++) {
              const g = d, S = {
                v: ce[d]
              };
              p.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", ($) => {
                ce[g] = $.value, Oe();
              });
            }
            const i = po.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let d = 0; d < oe.length; d++) {
              const g = d, S = {
                v: oe[d]
              };
              i.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", ($) => {
                oe[g] = $.value, Oe();
              });
            }
            if (q.length > 0) {
              const d = po.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let g = 0; g < q.length; g++) {
                const S = g, $ = {
                  v: q[g]
                };
                d.addBinding($, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `Piso ${g + 1}`
                }).on("change", (y) => {
                  q[S] = y.value, Oe();
                });
              }
            }
          } catch (p) {
            console.error("Luces Tweakpane error:", p);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", c(), a.appendChild(r);
        }
      }
      if (No(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const a = un()[T];
        if (a && a.length > 0) {
          const c = {};
          a.forEach((r, p) => {
            c[r.label] = p;
          });
          const s = {
            apoyo: Mt
          };
          $e.addBinding(s, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (r) => {
            Mt = r.value, Oe();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const c = {
            teoria: Fe
          };
          $e.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (s) => {
            Fe = s.value, Oe();
          });
        }
      }
      const l = ds()[T];
      if (l && l.length > 0) {
        co = new on({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = mt[s.key].val;
        for (const s of l) co.addBinding(a, s.key, {
          min: mt[s.key].min,
          max: mt[s.key].max,
          step: mt[s.key].step,
          label: mt[s.key].label
        });
        const c = co.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of l) {
          const r = {
            min: mt[s.key].min,
            max: mt[s.key].max
          };
          c.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            mt[s.key] && (mt[s.key].min = r.min, mt[s.key].max = r.max, mt[s.key].val < r.min && (mt[s.key].val = r.min), mt[s.key].val > r.max && (mt[s.key].val = r.max)), lo(), Oe();
          });
        }
        co.on("change", (s) => {
          var _a2;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && mt[r]) {
            if (mt[r].val = s.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => Fn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, c) => {
          if (K[a]) K[a].val = c, Oe(), lo();
          else if (mt[a]) {
            if (mt[a].val = c, e.nodeInputs) {
              const s = e.nodeInputs.val;
              s.supports && (e.nodeInputs.val = {
                supports: s.supports
              });
            }
            setTimeout(() => {
              Fn(), lo();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const c in K) a[c] = K[c].val;
          for (const c in mt) a[c] = mt[c].val;
          return a;
        },
        setGenerator: ot,
        createCustomPanel: (a, c, s) => wa(a, c, s),
        removeCustomPanel: (a) => {
          Ss(a);
        }
      };
    }
    const An = /* @__PURE__ */ new Map();
    function wa(t, o, n) {
      var _a2;
      Ss(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const a = document.createElement("div");
      a.className = "cad3d-custom-panel", a.style.marginBottom = "4px", l.appendChild(a);
      const c = new on({
        title: t,
        container: a
      }), s = {};
      for (const [r, p] of Object.entries(o)) {
        const i = p.label || r;
        if (Array.isArray(p.value)) {
          s[r] = p.value;
          const d = {
            [r]: p.value.join(", ")
          };
          c.addBinding(d, r, {
            label: i
          }).on("change", (g) => {
            s[r] = g.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), n && n({
              ...s
            });
          });
        } else if (p.options) {
          s[r] = p.value;
          const d = {
            [r]: p.value
          }, g = {};
          for (const S of p.options) g[S] = S;
          c.addBinding(d, r, {
            label: i,
            options: g
          }).on("change", (S) => {
            s[r] = S.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "boolean") {
          s[r] = p.value;
          const d = {
            [r]: p.value
          };
          c.addBinding(d, r, {
            label: i
          }).on("change", (g) => {
            s[r] = g.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "string") {
          s[r] = p.value;
          const d = {
            [r]: p.value
          };
          c.addBinding(d, r, {
            label: i
          }).on("change", (g) => {
            s[r] = g.value, n && n({
              ...s
            });
          });
        } else {
          s[r] = p.value;
          const d = {
            [r]: p.value
          }, g = {
            label: i
          };
          p.min !== void 0 && (g.min = p.min), p.max !== void 0 && (g.max = p.max), p.step !== void 0 && (g.step = p.step), c.addBinding(d, r, g).on("change", (S) => {
            s[r] = S.value, n && n({
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
      }), An.set(t, {
        pane: c,
        values: s
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), s;
    }
    function Ss(t) {
      const o = An.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        An.delete(t);
      }
    }
    function Ea() {
      if ($e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (co) {
        try {
          co.dispose();
        } catch {
        }
        co = null;
      }
      if (Rt) {
        try {
          Rt.dispose();
        } catch {
        }
        Rt = null;
      }
      if (po) {
        try {
          po.dispose();
        } catch {
        }
        po = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && pe && (n.innerHTML = pe);
    }
    const Ce = document.createElement("div");
    Ce.id = "cad3d-panel";
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
  `, document.head.appendChild(Is), Za() === "light" && document.documentElement.classList.add("awatif-light"), Qa((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), T && wt(true);
    }), Ce.innerHTML = `
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
        <button data-ex="pergola">P\xE9rgola</button>
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
    let Pt = null;
    function Sa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = P, c = b, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${T || "custom"}`), s.push(`# Units: ${c}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((i, d) => {
        s.push(`  ${String(d).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((i, d) => {
        const g = i.map((S) => String(S).padStart(6)).join("");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((i, d) => {
        const g = i.map((S) => S ? "  1" : "  0").join("");
        s.push(`  ${String(d).padStart(4)} ${g}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((i, d) => {
        const g = i.map((S) => S.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
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
        ], d = "# elem  " + i.map((g) => g.name.padStart(12)).join(" ");
        s.push(d);
        for (let g = 0; g < o.length; g++) {
          const S = i.map(($) => {
            var _a3;
            const y = (_a3 = $.map) == null ? void 0 : _a3.get(g);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(g).padStart(4)}  ${S}`);
        }
        s.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (s.push(`## DISPLACEMENTS (${r.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, d) => {
        const g = i.map((S) => S.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((i, d) => {
        const g = i.map((S) => S.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${g}`);
      }), s.push("")), T) {
        s.push("## CLI COMMAND");
        const i = Object.entries(K).map(([d, g]) => `${d}=${g.val}`).join(" ");
        s.push(`cad.${T === "edificio" ? "building" : T}(${i})`);
      }
      return s.join(`
`);
    }
    let Zo = false;
    function Ia() {
      var _a2, _b, _c, _d;
      if (Pt) {
        Pt.remove(), Pt = null, Zo = false;
        return;
      }
      const t = Sa();
      Pt = document.createElement("div"), Pt.id = "export-overlay", Pt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Pt.innerHTML = `
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
    `, document.body.appendChild(Pt), (_a2 = Pt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Pt == null ? void 0 : Pt.remove(), Pt = null, Zo = false;
      }), (_b = Pt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Pt.querySelector("#export-body"), n = Pt.querySelector("#export-minimize");
        Zo = !Zo, Zo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Pt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Pt.style.width = "720px");
      }), (_c = Pt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Pt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Pt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Pt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: T || "custom",
          units: {
            force: b,
            length: P
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
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (c.reactions = {}, r.forEach((d, g) => c.reactions[g] = d));
        const p = Pt.querySelector("#export-text");
        p.value = JSON.stringify(c, null, 2);
        const i = Pt.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function et() {
      var _a2, _b, _c;
      const t = Ce.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, s = 0, r = 0;
        for (const i of n) i.length === 2 ? c++ : i.length === 3 ? s++ : i.length === 4 && r++;
        let p = `${o}n ${l}e ${a}s`;
        (r > 0 || s > 0) && (p += ` | ${c}fr`, r > 0 && (p += ` ${r}q4`), s > 0 && (p += ` ${s}tri`)), t.textContent = p;
      }
    }
    function Ln() {
      var _a2;
      if (!_e || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const c = Ua(t, o, n, l, Math.min(a, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Le = c, Te = t.map((i) => [
            ...i
          ]), he = 0;
          const { extent: s } = $o(), r = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let d = 0; d < t.length; d++) {
              const g = r[d * 6] || 0, S = r[d * 6 + 1] || 0, $ = r[d * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(g * g + S * S + $ * $));
            }
            Ye = i > 1e-12 ? s * 0.15 / i : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          pt.render(c, {
            title: p
          }), pt.div.style.display = "", Qo(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Le = null;
      }
    }
    function Cn() {
      xe && (cancelAnimationFrame(xe), xe = 0), Te.length > 0 && (e.nodes.val = Te.map((o) => [
        ...o
      ]));
      const t = Ze();
      t && t.scene.traverse((o) => {
        var _a2;
        o.isMesh && ((_a2 = o.material) == null ? void 0 : _a2.vertexColors) && o.visible === false && (o.visible = true);
      }), pt.div.style.display = "none", Le = null;
    }
    function Qo() {
      var _a2;
      if (xe && cancelAnimationFrame(xe), !(Le == null ? void 0 : Le.modeShapes) || !Te.length) return;
      const t = Le.modeShapes[he];
      if (!t) return;
      const o = ((_a2 = Le.frequencies) == null ? void 0 : _a2[he]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = Te.length, c = e.elements.rawVal, { extent: s } = $o(), r = Ce.querySelector("#cad3d-modal-scale"), p = r && parseFloat(r.value) || 15;
      let i = 0;
      for (let z = 0; z < a; z++) {
        const O = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(O * O + k * k + m * m));
      }
      const d = i > 1e-12 ? s * p / 100 / i : 1, g = Ze();
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
      else for (let O = 0; O < z.length; O++) h.push([
        z[O],
        z[(O + 1) % z.length]
      ]);
      const I = new Float32Array(h.length * 6);
      function L() {
        const z = (performance.now() - l) / 1e3, O = Math.sin(2 * Math.PI * n * z) * d;
        for (let k = 0; k < a; k++) {
          const m = Te[k];
          f[k * 3] = m[0] + (t[k * 6] || 0) * O, f[k * 3 + 1] = m[1] + (t[k * 6 + 1] || 0) * O, f[k * 3 + 2] = m[2] + (t[k * 6 + 2] || 0) * O;
        }
        if (S) {
          const k = S.geometry, m = k.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : k.setAttribute("position", new Lo(f.slice(), 3));
        }
        if ($) {
          for (let u = 0; u < h.length; u++) {
            const [w, A] = h[u];
            I[u * 6] = f[w * 3], I[u * 6 + 1] = f[w * 3 + 1], I[u * 6 + 2] = f[w * 3 + 2], I[u * 6 + 3] = f[A * 3], I[u * 6 + 4] = f[A * 3 + 1], I[u * 6 + 5] = f[A * 3 + 2];
          }
          const k = $.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Lo(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of c) if (m.length === 3) {
            const [u, w, A] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[w * 3], f[w * 3 + 1], f[w * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]);
          } else if (m.length === 4) {
            const [u, w, A, R] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[w * 3], f[w * 3 + 1], f[w * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), k.push(f[R * 3], f[R * 3 + 1], f[R * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), w = m.getAttribute("position");
            w && w.array.length === u.length ? (w.array.set(u), w.needsUpdate = true) : m.setAttribute("position", new Lo(u, 3));
          }
        }
        g.render(), xe = requestAnimationFrame(L);
      }
      xe = requestAnimationFrame(L);
    }
    function Fn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = re("CM") ?? 0, f = re("CV") ?? 0, h = y + f, I = re("Ex") ?? 0, L = re("Ey") ?? 0;
        if (h === 0 && I === 0 && L === 0) return;
        const z = /* @__PURE__ */ new Map(), O = [];
        for (let E = 0; E < t.length; E++) n.supports.has(E) || O.push(E);
        const k = (E) => Math.round(E * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((E, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const E of O) m.has(`${k(t[E][0])},${k(t[E][1])}`) && u.add(E);
        const w = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
        if (I !== 0 || L !== 0) {
          let E = -1 / 0, v = -1 / 0;
          for (const X of u) E = Math.max(E, k(t[X][0])), v = Math.max(v, k(t[X][1]));
          const F = /* @__PURE__ */ new Map();
          for (const X of u) {
            const V = k(t[X][2]);
            F.has(V) || F.set(V, []), F.get(V).push(X);
          }
          F.forEach((X) => {
            if (I !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (k(t[ae][0]) === E) {
                const Q = k(t[ae][1]);
                V.has(Q) || (V.add(Q), w.add(ae));
              }
            }
            if (L !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (k(t[ae][1]) === v) {
                const Q = k(t[ae][0]);
                V.has(Q) || (V.add(Q), A.add(ae));
              }
            }
          });
        }
        const R = 9.81, j = /* @__PURE__ */ new Map();
        for (let E = 0; E < o.length; E++) {
          const v = o[E], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(E)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(E)) ?? 0, V = t[v[0]], ae = t[v[1]], Q = Math.sqrt((ae[0] - V[0]) ** 2 + (ae[1] - V[1]) ** 2 + (ae[2] - V[2]) ** 2), ie = -(F * X * Q * R) / 2;
              j.set(v[0], (j.get(v[0]) ?? 0) + ie), j.set(v[1], (j.get(v[1]) ?? 0) + ie);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(E)) ?? 0;
              let V = 0;
              if (v.length === 3) {
                const [U, ie, le] = v.map((ke) => t[ke]);
                V = 0.5 * Math.abs((ie[0] - U[0]) * (le[1] - U[1]) - (le[0] - U[0]) * (ie[1] - U[1]));
              } else if (v.length === 4) {
                const [U, ie, le, ke] = v.map((Re) => t[Re]);
                if (V = 0.5 * Math.abs((ie[0] - U[0]) * (le[1] - U[1]) - (le[0] - U[0]) * (ie[1] - U[1])) + 0.5 * Math.abs((le[0] - U[0]) * (ke[1] - U[1]) - (ke[0] - U[0]) * (le[1] - U[1])), V < 1e-10) {
                  const Re = [
                    ie[0] - U[0],
                    ie[1] - U[1],
                    ie[2] - U[2]
                  ], _ = [
                    ke[0] - U[0],
                    ke[1] - U[1],
                    ke[2] - U[2]
                  ], ue = [
                    Re[1] * _[2] - Re[2] * _[1],
                    Re[2] * _[0] - Re[0] * _[2],
                    Re[0] * _[1] - Re[1] * _[0]
                  ];
                  V = Math.sqrt(ue[0] ** 2 + ue[1] ** 2 + ue[2] ** 2);
                }
              }
              const Q = -(F * X * V * R) / v.length;
              for (const U of v) j.set(U, (j.get(U) ?? 0) + Q);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const E of o) E.length === 2 && (x.add(E[0]), x.add(E[1]));
        for (const E of O) {
          const v = w.has(E) ? I : 0, F = A.has(E) ? L : 0, X = j.get(E) ?? 0, V = x.has(E) ? h : 0, ae = X + V;
          (v !== 0 || F !== 0 || Math.abs(ae) > 1e-10) && z.set(E, [
            v,
            F,
            ae,
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
      let c = 0, s = 0, r = 0;
      for (const y of o) y.length === 2 ? c++ : y.length === 3 ? r++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, g = d - p * 6, S = [], $ = (y) => S.push(y);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && $(`&nbsp;&nbsp;Frames: <b>${c}</b>`), s && $(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), r && $(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), $(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${i}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${g} libres`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${d}&times;${d})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = At(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, I = -1, L = 0, z = 0;
          y.deformations && y.deformations.forEach((w, A) => {
            const R = Math.sqrt(w[0] * w[0] + w[1] * w[1] + w[2] * w[2]);
            R > h && (h = R, I = A, L = w[0], z = w[2]);
          }), $('<span style="color:#888">3.</span> Desplazamientos:'), $(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), $(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(L * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const O = performance.now(), k = bo(t, o, l, y), m = performance.now() - O;
          k && (e.analyzeOutputs.val = k, $(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), $("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        $(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), _e && setTimeout(() => Ln(), 50);
    }
    function Rn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, c = Math.min(t, o), s = Math.max(t, o), r = c * c * c * s * (1 / 3 - 0.21 * c / s * (1 - c * c * c * c / (12 * s * s * s * s)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: r
      };
    }
    function ks(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, a = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: a
      };
    }
    function Pn(t, o, n, l) {
      const a = o - 2 * n, c = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, r = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: c,
        Iz: s,
        Iy: r,
        J: p
      };
    }
    function On(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, c = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, r = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), i = 2 * ((t - n) / n + (o - n) / n), d = 4 * p * p / (i > 0 ? i : 1);
      return {
        A: c,
        Iz: s,
        Iy: r,
        J: d
      };
    }
    function ka(t, o, n, l, a, c, s) {
      const p = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, i = t - 2 * n, d = o - 2 * n, g = t * o - i * d, S = (t * o * o * o - i * d * d * d) / 12, $ = (o * t * t * t - d * i * i * i) / 12, y = i * d, f = i * d * d * d / 12, h = d * i * i * i / 12, I = g + p * y, L = S + p * f, z = $ + p * h, O = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: L,
        Iy: z,
        J: u,
        Es: l,
        Gs: O,
        A_steel: g,
        A_conc: y
      };
    }
    function yo() {
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
      if ((T === "edificio" || T === "frame") && D.size > 0) {
        const { colMat: a, vigaMat: c, colShape: s, fc: r, perFloor: p } = qe, i = 4700 * Math.sqrt(r / 1e3) * 1e3, d = i / (2 * 1.2), g = 24 / 9.80665, S = o.E, $ = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (fe.has(f)) {
            const w = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, w), n.poissonsRatios.set(f, A), n.thicknesses.set(f, je), n.shearModuli.set(f, w / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Ft.has(f)) {
            const w = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, w), n.poissonsRatios.set(f, A), n.thicknesses.set(f, it), n.shearModuli.set(f, w / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = D.has(f), I = Me.get(f) ?? 0, L = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, O, k, m;
          if (h) if (a === 0) O = i, k = d, m = g, z = s === 1 ? ks(L.dCol) : Rn(L.bCol, L.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (a === 1) {
            O = S, k = $, m = y;
            const w = qe.steelColType;
            if (w <= 1) {
              const A = ko[L.colProfileIdx] ?? ko[0];
              z = {
                A: A.A,
                Iz: A.Iz,
                Iy: A.Iy,
                J: A.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: A.bf,
                h: A.d,
                name: A.name
              });
            } else if (w === 2) {
              const A = L.colBf ?? 0.3, R = L.colHf ?? 0.3, j = L.colTf ?? 0.02, x = L.colTw ?? 0.012;
              z = Pn(A, R, j, x);
              const E = `I${(R * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: A,
                h: R,
                tf: j,
                tw: x,
                name: E
              });
            } else {
              const A = L.colBc ?? 0.3, R = L.colHc ?? 0.3, j = L.colT ?? 0.01;
              z = On(A, R, j);
              const x = `\u25A1${(R * 100).toFixed(0)}x${(A * 100).toFixed(0)}x${(j * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: A,
                h: R,
                tw: j,
                name: x
              });
            }
          } else {
            const w = L.colBc ?? 0.3, A = L.colHc ?? 0.3, R = L.colT ?? 0.01, j = L.colFc ?? 28e3, x = L.colEs ?? 2e8, E = L.colNuS ?? 0.3;
            L.colNuC;
            const v = ka(w, A, R, x, E, j);
            z = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, O = v.Es, k = v.Gs;
            const F = 7.85, X = 24 / 9.80665;
            m = (F * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const V = `CFT ${(A * 1e3).toFixed(0)}X${(w * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: w,
              h: A,
              tw: R,
              name: V
            });
          }
          else {
            const w = ze.get(f), A = w ? w.dir === "x" ? L.vigasX : L.vigasY : [], R = w ? A[w.bay] ?? A[0] ?? gt() : gt();
            if (c === 0) O = i, k = d, m = g, z = Rn(R.b, R.h), n.sectionShapes.set(f, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              O = S, k = $, m = y;
              const j = qe.steelVigaType;
              if (j <= 1) {
                const x = ko[R.profileIdx ?? 0] ?? ko[0];
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
              } else if (j === 2) {
                const x = R.bf ?? 0.2, E = R.hf ?? 0.4, v = R.tf ?? 0.015, F = R.tw ?? 0.01;
                z = Pn(x, E, v, F);
                const X = `I${(E * 100).toFixed(0)}x${(x * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: x,
                  h: E,
                  tf: v,
                  tw: F,
                  name: X
                });
              } else {
                const x = R.bc ?? 0.2, E = R.hc ?? 0.3, v = R.t ?? 8e-3;
                z = On(x, E, v);
                const F = `\u25A1${(E * 100).toFixed(0)}x${(x * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: x,
                  h: E,
                  tw: v,
                  name: F
                });
              }
            }
          }
          const u = be.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (O = i, k = d, m = g) : (O = S, k = $, m = y), u.secType === "rect" && u.b && u.h) z = Rn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) z = ks(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const A = ko[u.profileIdx] ?? ko[0];
              z = {
                A: A.A,
                Iz: A.Iz,
                Iy: A.Iy,
                J: A.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: A.bf,
                h: A.d,
                name: A.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              z = Pn(u.bf, u.hf, u.tf, u.tw);
              const A = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: A
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              z = On(u.bc, u.hc, u.t);
              const A = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: A
              });
            }
          }
          n.elasticities.set(f, O), n.shearModuli.set(f, k), n.areas.set(f, z.A), n.momentsOfInertiaZ.set(f, z.Iy), n.momentsOfInertiaY.set(f, z.Iz), n.torsionalConstants.set(f, z.J), n.densities.set(f, m), u && u.releases12 && u.releases12.some((w) => w) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((w) => w > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function Ts(t) {
      Ce.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Ce.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Ce.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (x) => {
        x.stopPropagation(), Ce.classList.add("collapsed");
      }), (_b = Ce.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (x) => {
        x.stopPropagation(), Ce.classList.remove("collapsed");
      }), Ce.querySelectorAll("[data-ex]").forEach((x) => {
        x.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = x.dataset.ex;
          Ts(v), Qe.example(v);
        });
      }), Ce.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = x.dataset.view;
          Mo(v), Ce.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = Ce.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), T = "", ca.val = false, Ea(), Qe.clear();
      }), (_d = Ce.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), so && (so = false, Ao()), fo && cn(), Ut = !Ut, (_a3 = Ce.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Ut);
        const v = Ze();
        v && (v.controls.enabled = !Ut), Ut || rn();
      }), (_e2 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), so && (so = false, Ao()), Ut && rn(), fo = !fo, (_a3 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", fo), fo ? Ca() : cn();
      }), (_f = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Ut && rn(), fo && cn(), so = !so, (_a3 = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", so), so || Ao();
      }), (_g = Ce.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), Qe.clear(), Ue = null;
      });
      const t = Ce.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && o(x);
      });
      function o(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const F = 15e3 * Math.sqrt(210) * 10, X = 0.2, V = F / (2 * (1 + X)), ae = 0.09, Q = 0.3 ** 4 / 12, U = 0.141 * 0.3 ** 4, ie = 0.25 * 0.4, le = 0.25 * 0.4 ** 3 / 12, ke = 0.4 * 0.25 ** 3 / 12, Re = 1e-3, _ = 5 / 6 * ae, ue = 5 / 6 * ie, te = [];
        function de(ee, me, Ee) {
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
          for (const Se of me) se.elasticities.set(Se, F), se.shearModuli.set(Se, V), se.areas.set(Se, ae), se.momentsOfInertiaZ.set(Se, Q), se.momentsOfInertiaY.set(Se, Q), se.torsionalConstants.set(Se, U), se.shearAreasY.set(Se, _), se.shearAreasZ.set(Se, _);
          for (const Se of Ee) se.elasticities.set(Se, F), se.shearModuli.set(Se, V), se.areas.set(Se, ie), se.momentsOfInertiaZ.set(Se, ke), se.momentsOfInertiaY.set(Se, le), se.torsionalConstants.set(Se, Re), se.shearAreasY.set(Se, ue), se.shearAreasZ.set(Se, ue);
          return se;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const Ee = 270 / (3 * F * Q), se = [
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
          ], He = de(1, [], []);
          He.elasticities.set(0, F), He.shearModuli.set(0, V), He.areas.set(0, ae), He.momentsOfInertiaZ.set(0, Q), He.momentsOfInertiaY.set(0, Q), He.torsionalConstants.set(0, U);
          const nt = At(se, Se, {
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
          }, He);
          te.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: se,
            elements: Se,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: nt.deformations.get(1)[2] * 100,
                reference: Ee * 100,
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
          ], Ee = de(3, [
            0,
            1
          ], [
            2
          ]), se = At(ee, me, {
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
          }, Ee);
          te.push({
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
          ], Ee = de(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = At(ee, me, {
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
          }, Ee);
          te.push({
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
          ], se = At(ee, me, {
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
          te.push({
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
          ], Ee = de(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Ee.elasticities.set(6, F), Ee.shearModuli.set(6, V), Ee.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Ee.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
            ]
          ]);
          const se = At(ee, me, {
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
          }, Ee);
          te.push({
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
          const nt = 0.6666666666666666, dt = [
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
          ], $t = [
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
          ], Ot = {
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
          }, ye = /* @__PURE__ */ new Map();
          ye.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), ye.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const st = /* @__PURE__ */ new Map();
          st.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), st.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const ht = 5 ** 3 / (3 * 1500 * nt);
          try {
            const jt = At(dt, $t, {
              supports: ye,
              loads: st
            }, Ot), qt = Math.abs(((_b2 = (_a3 = jt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), tt = Math.abs(((_d2 = (_c2 = jt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), zt = (qt + tt) / 2, oo = zt / ht;
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: dt,
              elements: $t,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: oo,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: zt,
                  reference: ht * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (jt) {
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + jt.message,
              nodes: dt,
              elements: $t,
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
          const nt = 40 * Math.PI / 180, dt = 8, $t = 8, Ot = [];
          for (let tt = 0; tt <= dt; tt++) for (let zt = 0; zt <= $t; zt++) {
            const oo = 25 * tt / dt, Dt = nt * zt / $t, ho = 25 * Math.sin(Dt), go = 25 * Math.cos(Dt) - 25 * Math.cos(nt);
            Ot.push([
              oo,
              ho,
              go
            ]);
          }
          const ye = [];
          for (let tt = 0; tt < dt; tt++) for (let zt = 0; zt < $t; zt++) {
            const oo = tt * ($t + 1) + zt, Dt = (tt + 1) * ($t + 1) + zt, ho = (tt + 1) * ($t + 1) + (zt + 1), go = tt * ($t + 1) + (zt + 1);
            ye.push([
              oo,
              Dt,
              ho,
              go
            ]);
          }
          const st = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, ht = 432e6 / (2 * 1);
          for (let tt = 0; tt < ye.length; tt++) st.elasticities.set(tt, 432e6), st.shearModuli.set(tt, ht), st.thicknesses.set(tt, 0.25), st.poissonsRatios.set(tt, 0);
          const jt = /* @__PURE__ */ new Map();
          for (let tt = 0; tt <= dt; tt++) for (let zt = 0; zt <= $t; zt++) {
            const oo = tt * ($t + 1) + zt, Dt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            tt === 0 && (Dt[0] = true, Dt[4] = true, Dt[5] = true), tt === dt && (Dt[1] = true, Dt[2] = true, Dt[3] = true), zt === 0 && (Dt[1] = true, Dt[3] = true, Dt[5] = true), Dt.some((ho) => ho) && jt.set(oo, Dt);
          }
          const qt = /* @__PURE__ */ new Map();
          for (const tt of ye) {
            const zt = Ot[tt[0]], oo = Ot[tt[1]], Dt = Ot[tt[2]], ho = Ot[tt[3]], go = [
              Dt[0] - zt[0],
              Dt[1] - zt[1],
              Dt[2] - zt[2]
            ], jo = [
              ho[0] - oo[0],
              ho[1] - oo[1],
              ho[2] - oo[2]
            ], Xs = go[1] * jo[2] - go[2] * jo[1], Ks = go[2] * jo[0] - go[0] * jo[2], Zs = go[0] * jo[1] - go[1] * jo[0], Va = -90 * (0.5 * Math.sqrt(Xs * Xs + Ks * Ks + Zs * Zs)) / 4;
            for (const Qs of tt) {
              const ea = qt.get(Qs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ea[2] += Va, qt.set(Qs, ea);
            }
          }
          try {
            const tt = At(Ot, ye, {
              supports: jt,
              loads: qt
            }, st), zt = $t, oo = ((_f2 = (_e3 = tt.deformations) == null ? void 0 : _e3.get(zt)) == null ? void 0 : _f2[2]) ?? 0;
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${dt}x${$t} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Ot,
              elements: ye,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(oo),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (tt) {
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + tt.message,
              nodes: Ot,
              elements: ye,
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
        if (c(te), te.length > 0) {
          const ee = te[te.length - 1];
          e.nodes.val = ee.nodes, e.elements.val = ee.elements;
          const me = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), se = Math.max(...ee.nodes.map((Se) => Se[2]));
          ee.nodes.forEach((Se, He) => {
            Math.abs(Se[2]) < 0.01 && me.set(He, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Se[2] - se) < 0.01 && Ee.set(He, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: me,
            loads: Ee
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(x) {
        const E = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        x.nodes.forEach((_) => F.add(Math.round(_[1] * 1e4) / 1e4));
        const X = [
          ...F
        ].sort((_, ue) => _ - ue), V = X.map((_, ue) => ue === 0 ? "Base" : `Level_${ue}`), ae = /* @__PURE__ */ new Map();
        X.forEach((_, ue) => ae.set(_, V[ue])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let _ = X.length - 1; _ >= 1; _--) v.push(`  STORY "${V[_]}"  HEIGHT ${X[_] - X[_ - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const Q = x.elements.some((_) => _.length === 4);
        Q && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const U = /* @__PURE__ */ new Map();
        let ie = 0;
        x.nodes.forEach((_) => {
          const ue = `${_[0]},${_[2]}`;
          U.has(ue) || U.set(ue, `${++ie}`);
        }), v.push("$ POINT COORDINATES");
        for (const [_, ue] of U) {
          const [te, de] = _.split(",").map(Number);
          v.push(`  POINT "${ue}"  ${te} ${de} `);
        }
        v.push("");
        const le = (_) => {
          const ue = x.nodes[_], te = `${ue[0]},${ue[2]}`;
          return {
            pt: U.get(te) || "1",
            story: ae.get(Math.round(ue[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const ke = [];
        if (x.elements.forEach((_, ue) => {
          if (_.length !== 2) return;
          const te = x.nodes[_[0]], de = x.nodes[_[1]], ee = Math.abs(de[1] - te[1]), me = Math.sqrt((de[0] - te[0]) ** 2 + (de[2] - te[2]) ** 2), Ee = ee > me * 0.5, se = le(_[0]), Se = le(_[1]), He = Ee ? "COL30" : "VIGA";
          Ee ? (v.push(`  LINE  "E${ue + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), ke.push(`  LINEASSIGN  "E${ue + 1}"  "${Se.story}"  SECTION "${He}"  `)) : (v.push(`  LINE  "E${ue + 1}"  BEAM  "${se.pt}"  "${Se.pt}"  0`), ke.push(`  LINEASSIGN  "E${ue + 1}"  "${se.story}"  SECTION "${He}"  `));
        }), v.push(""), Q) {
          v.push("$ AREA CONNECTIVITIES");
          const _ = [];
          x.elements.forEach((ue, te) => {
            if (ue.length !== 4) return;
            const de = ue.map((ee) => le(ee));
            v.push(`  AREA "W${te + 1}"  PANEL  4  "${de[0].pt}"  "${de[1].pt}"  "${de[2].pt}"  "${de[3].pt}"  1  1  0  0  `), _.push(`  AREAASSIGN  "W${te + 1}"  "${de[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), _.forEach((ue) => v.push(ue)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((_, ue) => {
          if (Math.abs(_[1]) < 0.01) {
            const te = le(ue);
            v.push(`  POINTASSIGN  "${te.pt}"  "${te.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), ke.forEach((_) => v.push(_)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Re = Math.max(...x.nodes.map((_) => _[1]));
        return x.nodes.forEach((_, ue) => {
          if (Math.abs(_[1] - Re) < 0.01) {
            const te = le(ue);
            v.push(`  POINTLOAD  "${te.pt}"  "${te.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const E = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${E}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((V) => V.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((V, ae) => {
          if (V.length === 2) {
            const Q = x.nodes[V[0]], U = x.nodes[V[1]], ie = Math.abs(U[1] - Q[1]), le = Math.sqrt((U[0] - Q[0]) ** 2 + (U[2] - Q[2]) ** 2), ke = ie > le * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Q[0]},${Q[2]},${Q[1]}, ${U[0]},${U[2]},${U[1]}, FN,"${ke}","E${ae + 1}","Global")`);
          } else if (V.length === 4) {
            const Q = V.map((U) => x.nodes[U]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${Q.map((U) => U[0]).join(",")}], [${Q.map((U) => U[2]).join(",")}], [${Q.map((U) => U[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...x.nodes.map((V) => V[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const V of x.results) v.push(`print(f"  ${V.label}: Awatif=${V.awatif.toFixed(4)}, ETABS=${V.reference.toFixed(4)}, Ratio={${V.awatif.toFixed(4)}/${V.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(x, E) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = E, X.click(), URL.revokeObjectURL(F);
      }
      function c(x) {
        let E = document.getElementById("test-results-overlay");
        E && E.remove(), E = document.createElement("div"), E.id = "test-results-overlay", E.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
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
            const U = Q.reference !== 0 ? Q.awatif / Q.reference : 1, ie = Math.abs(U - 1) < 0.05;
            ie || (F = false);
            const le = ie ? "#4caf50" : "#f44336", ke = ie ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Q.label}</td>
            <td style="text-align:right;color:#fff">${Q.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Q.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${le};font-weight:bold">${U.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Q.refSource}</td>
            <td style="text-align:center;color:${le};font-size:10px;font-weight:bold">${ke}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', E.innerHTML = v, document.body.appendChild(E), window.__awatifDownloadE2k = (V) => {
          const ae = window.__awatifTests[V], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(ae), `${Q}.e2k`);
        }, window.__awatifDownloadPy = (V) => {
          const ae = window.__awatifTests[V], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(ae), `${Q}_etabs.py`);
        };
      }
      (_h = Ce.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Ia();
      });
      let s = "";
      const r = Ce.querySelector("#cad3d-io-menu"), p = Ce.querySelector("#cad3d-io-file");
      function i(x, E) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((X) => X.length === 2).length, F = x.elements.filter((X) => X.length >= 3).length;
        console.log(`${E} (${x.nodes.length} nodos, ${v} frames, ${F} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => wt(), 50);
      }
      function d(x, E) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((U) => v[U.category] = (v[U.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
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
        for (const U of X) {
          const ie = v[U] || 0;
          if (ie === 0) continue;
          const le = [
            "column",
            "beam",
            "slab"
          ].includes(U) ? "checked" : "";
          Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${U}" ${le}>
          <span>${ae[U] || U}</span>
          <span style="color:#888;margin-left:auto">(${ie})</span>
        </label>`;
        }
        Q += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const U of V) {
          const ie = v[U] || 0;
          ie !== 0 && (Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${U}" disabled>
          <span>${ae[U] || U}</span>
          <span style="margin-left:auto">(${ie})</span>
        </label>`);
        }
        Q += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, F.innerHTML = Q, document.body.appendChild(F), F.querySelectorAll("input[data-ifc-cat]").forEach((U) => {
          U.addEventListener("change", () => {
            const ie = U.dataset.ifcCat, le = x.detailCategories.get(ie);
            if (le) {
              le.visible = U.checked;
              const ke = Ze();
              ke && ke.render();
            }
          });
        }), (_b2 = F.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const U = /* @__PURE__ */ new Set();
          F.querySelectorAll("input[data-ifc-cat]:checked").forEach((te) => {
            U.add(te.dataset.ifcCat);
          });
          const ie = E.nodes.map((te) => [
            te.x,
            te.y,
            te.z
          ]), le = [], ke = {
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
          let _ = 0;
          for (const te of E.elements) if (U.has(te.category) && te.type === "frame" && te.nodeIds.length >= 2) {
            le.push(te.nodeIds);
            const de = ((_a4 = E.materials) == null ? void 0 : _a4.get(te.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = te.b || 0.3, me = te.h || 0.3, Ee = ee * me, se = ee * me * me * me / 12, Se = me * ee * ee * ee / 12, He = ee * me * (ee * ee + me * me) / 12, nt = de.E / (2 * (1 + de.nu));
            ke.elasticities.set(_, de.E), ke.shearModuli.set(_, nt), ke.areas.set(_, Ee), ke.momentsOfInertiaZ.set(_, Se), ke.momentsOfInertiaY.set(_, se), ke.torsionalConstants.set(_, He), ke.densities.set(_, de.rho), ke.sectionShapes.set(_, {
              type: "rect",
              b: ee,
              h: me,
              name: te.sectionName
            }), _++;
          }
          const ue = Math.min(...ie.map((te) => te[2]));
          ie.forEach((te, de) => {
            Math.abs(te[2] - ue) < 0.05 && Re.supports.set(de, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, te] of x.detailCategories) {
            const de = Ze();
            de && de.scene.remove(te);
          }
          i({
            nodes: ie,
            elements: le,
            nodeInputs: Re,
            elementInputs: ke,
            sectionShapes: ke.sectionShapes,
            info: {
              nNodes: ie.length,
              nFrames: le.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, ie] of x.detailCategories) {
            const le = Ze();
            le && le.scene.remove(ie);
          }
          const U = Ze();
          U && U.render(), F.remove();
        });
      }
      function g(x) {
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        const E = /* @__PURE__ */ new Map();
        for (let le = 0; le < x.stories.length; le++) E.set(x.stories[le].name, le);
        for (let le = 0; le < x.elementTypes.length; le++) {
          const ke = x.elementTypes[le], Re = x.elementStories[le], _ = E.get(Re) ?? 0;
          Me.set(le, _), ke === "COLUMN" || ke === "BRACE" ? D.add(le) : G.add(le);
        }
        T = "edificio";
        const v = x.grids.filter((le) => le.dir === "X").sort((le, ke) => le.coord - ke.coord), F = x.grids.filter((le) => le.dir === "Y").sort((le, ke) => le.coord - ke.coord);
        let X, V, ae, Q;
        if (v.length > 0 || F.length > 0) X = v.map((le) => le.coord), V = F.map((le) => le.coord), ae = v.map((le) => le.label), Q = F.map((le) => le.label);
        else {
          const le = new Set(x.nodes.map((Re) => Re[0])), ke = new Set(x.nodes.map((Re) => Re[1]));
          X = [
            ...le
          ].sort((Re, _) => Re - _), V = [
            ...ke
          ].sort((Re, _) => Re - _), ae = X.map((Re, _) => String(_ + 1)), Q = V.map((Re, _) => String.fromCharCode(65 + _));
        }
        const U = x.stories.length > 0 ? Math.max(...x.stories.map((le) => le.elev)) : Math.max(...x.nodes.map((le) => le[2]));
        Ge = X, Ke = V, ut = U, setTimeout(() => {
          wt(), Xo(X, V, U, ae, Q), wn(x.stories, X, V), Nn(), qn();
        }, 100);
        const ie = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const le of x.elementTypes) ie[le]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Q.join(",")}]`), console.log(`E2K stories: ${x.stories.map((le) => `${le.name}@${le.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${ie.COLUMN} columns, ${ie.BEAM} beams, ${ie.BRACE} braces`), et();
      }
      function S(x, E) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = E, X.click(), URL.revokeObjectURL(F);
      }
      r && r.addEventListener("change", () => {
        if (s = r.value, r.value = "", s.startsWith("import")) s === "import-e2k" ? p.accept = ".e2k,.E2K" : s === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? p.accept = ".ifc,.IFC" : s === "import-py" ? p.accept = ".py" : s === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (s.startsWith("export")) {
          const x = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? S(Fl({
              ...x,
              title: "Awatif Model",
              e2kModel: Ue ?? void 0
            }), "model.e2k") : s === "export-s2k" ? S(Cl({
              ...x,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? S(Nl(x), "model_opensees.py") : s === "export-tcl" && S(ql(x), "model_opensees.tcl");
          } catch (E) {
            alert("Export error: " + E.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const x = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!x) return;
        if (s === "import-ifc") {
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
              const V = await Jl(X.scene, F);
              console.log(`IFC: ${V.meshCount} meshes loaded, bbox:`, V.bbox);
              const ae = new Ne();
              V.bbox.getCenter(ae);
              const Q = new Ne();
              V.bbox.getSize(Q);
              const U = Math.max(Q.x, Q.y, Q.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + U, ae.y + U * 0.5, ae.z + U), X.camera.lookAt(ae), X.controls.maxDistance = U * 5, X.controls.update(), X.render(), window.__ifcLoadResult = V, window.__ifcArrayBuffer = F;
              const ie = new FileReader();
              ie.onload = () => {
                const le = ie.result, ke = Wl(le);
                window.__ifcAnalytical = ke;
                const Re = {};
                V.elementInfo.forEach((_) => Re[_.category] = (Re[_.category] || 0) + 1), console.log("IFC categories:", Re), console.log(`IFC: ${V.elementInfo.size} geometric elements, ${ke.elements.length} analytical elements`), d(V, ke);
              }, ie.readAsText(x);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, v.readAsArrayBuffer(x), p.value = "";
          return;
        }
        const E = new FileReader();
        E.onload = () => {
          const v = E.result;
          try {
            if (s === "import-e2k") {
              const F = Tl(v);
              Ue = F, i(F, "E2K imported"), g(F);
            } else if (s === "import-s2k") {
              const F = zl(v);
              i({
                nodes: F.nodes,
                elements: F.elements,
                nodeInputs: F.nodeInputs,
                elementInputs: F.elementInputs,
                sectionShapes: F.sectionShapes,
                info: F.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const F = _l(v);
              i(F, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const F = Dl(v);
              i(F, "OpenSees Tcl imported");
            }
          } catch (F) {
            alert("Import error: " + F.message), console.error(F);
          }
        }, E.readAsText(x), p.value = "";
      });
      const $ = Ce.querySelector("#cad3d-force-unit");
      $ && ($.value = b, $.addEventListener("change", (x) => {
        x.stopPropagation(), b = $.value, M = Ro(b, P), T && ot(T);
      }));
      const y = Ce.querySelector("#cad3d-length-unit");
      y && (y.value = P, y.addEventListener("change", (x) => {
        x.stopPropagation(), P = y.value, M = Ro(b, P), T && ot(T);
      })), Ce.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = x.dataset.preset, F = B[v];
          F && (b = F.force, P = F.length, J = F.stress, M = Ro(b, P), $ && ($.value = b), y && (y.value = P), Ce.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), T && ot(T), console.log(`Preset: ${v} \u2192 ${b}+${P}, stress: ${J.label}`));
        });
      }), (_i = Ce.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (x) => {
        x.stopPropagation(), Da();
      }), (_j = Ce.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (x) => {
        x.stopPropagation(), Ba();
      }), (_k = Ce.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (x) => {
        x.stopPropagation(), ja();
      }), (_l2 = Ce.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (x) => {
        x.stopPropagation(), Ga();
      }), (_m = Ce.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (x) => {
        x.stopPropagation(), ta(async () => {
          const { openCalcPanel: E } = await import("./calcPanel-CToQkEkn.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: E
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ openCalcPanel: E }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: T ? T.charAt(0).toUpperCase() + T.slice(1) : "Modelo"
          };
          E(v);
        });
      }), (_n2 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (x) => {
        var _a3, _b2;
        x.stopPropagation(), _e = !_e, (_a3 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", _e);
        const v = Ce.querySelector("#cad3d-mode-prev"), F = Ce.querySelector("#cad3d-mode-next"), X = Ce.querySelector("#cad3d-mode-label"), V = Ce.querySelector("#cad3d-modal-scale");
        if (_e) {
          const ae = Ze();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (De = ae.settings.loads.rawVal, ae.settings.loads.val = false), Ln(), v.style.display = "", F.style.display = "", X.style.display = "", V && (V.style.display = ""), f();
        } else Cn(), v.style.display = "none", F.style.display = "none", X.style.display = "none", V && (V.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
          var _a4;
          const ae = Ze();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && De && (ae.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const x = Ce.querySelector("#cad3d-mode-label");
        if (!x || !(Le == null ? void 0 : Le.frequencies)) return;
        const E = Le.frequencies[he], v = E > 0 ? 1 / E : 0, F = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= he; X++) {
          const V = (_a3 = Le.massParticipation) == null ? void 0 : _a3[X];
          if (V) for (let ae = 0; ae < 6; ae++) F[ae] += V[ae];
        }
        x.textContent = `Modo ${he + 1} \u2014 ${E.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(F[0] * 100).toFixed(1)}% \u03A3Uy=${(F[1] * 100).toFixed(1)}% \u03A3Rz=${(F[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ce.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(Le == null ? void 0 : Le.modeShapes)) return;
        he = (he - 1 + Le.modeShapes.length) % Le.modeShapes.length;
        const E = Le.modeShapes[he], { extent: v } = $o();
        let F = 0;
        for (let X = 0; X < Te.length; X++) {
          const V = E[X * 6] || 0, ae = E[X * 6 + 1] || 0, Q = E[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(V * V + ae * ae + Q * Q));
        }
        Ye = F > 1e-12 ? v * 0.05 / F : 1, Qo(), f();
      }), (_p = Ce.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (x) => {
        var _a3, _b2;
        if (x.stopPropagation(), !(Le == null ? void 0 : Le.modeShapes)) return;
        he = (he + 1) % Le.modeShapes.length;
        const E = Le.modeShapes[he];
        if (!E) {
          console.warn("No shape for mode", he);
          return;
        }
        const { extent: v } = $o();
        let F = 0;
        for (let X = 0; X < Te.length; X++) {
          const V = E[X * 6] || 0, ae = E[X * 6 + 1] || 0, Q = E[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(V * V + ae * ae + Q * Q));
        }
        Ye = F > 1e-12 ? v * 0.05 / F : 1, console.log(`Mode ${he + 1}: maxDisp=${F.toExponential(3)}, scale=${Ye.toFixed(1)}, f=${(_b2 = (_a3 = Le.frequencies) == null ? void 0 : _a3[he]) == null ? void 0 : _b2.toFixed(2)} Hz`), Qo(), f();
      });
      const h = Ce.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (x) => x.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        _e && (Le == null ? void 0 : Le.modeShapes) && Qo();
      });
      const I = Ce.querySelector("#cad3d-cli-toggle"), L = Ce.querySelector("#cad3d-cli-panel"), z = Ce.querySelector("#cad3d-cli-output"), O = Ce.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (x) => {
        if (x.stopPropagation(), L) {
          const E = L.style.display !== "none";
          L.style.display = E ? "none" : "block", E || (O == null ? void 0 : O.focus(), z && !z.textContent && (z.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), O == null ? void 0 : O.addEventListener("mousedown", (x) => x.stopPropagation()), document.addEventListener("keydown", (x) => {
        var _a3;
        if ((x.ctrlKey || x.metaKey) && x.key === "z" && !x.shiftKey) {
          x.preventDefault(), As();
          return;
        }
        if ((x.ctrlKey || x.metaKey) && (x.key === "y" || x.key === "z" && x.shiftKey)) {
          x.preventDefault(), Ls();
          return;
        }
        if ((x.key === "Delete" || x.key === "Backspace") && yt.size > 0) {
          x.preventDefault(), yt.forEach((E) => Z.add(E)), yt.clear(), uo && (uo.remove(), uo = null), Oe();
          return;
        }
        if (x.key === "Escape") {
          if (fo) if (Et !== null) {
            Et = null;
            const E = Ze();
            Bt && E && (E.scene.remove(Bt), Bt.geometry.dispose(), Bt.material.dispose(), Bt = null), Ht && E && (E.scene.remove(Ht), Ht.geometry.dispose(), Ht.material.dispose(), Ht = null), E == null ? void 0 : E.render();
          } else cn();
          Ut && rn(), so && (so = false, Ao(), (_a3 = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), O == null ? void 0 : O.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const E = O.value.trim();
          if (E) {
            k.unshift(E), m = -1, z && (z.textContent += `> ${E}
`);
            try {
              const v = new Function("cad", `return ${E}`)(Qe);
              if (v !== void 0 && z) {
                const F = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                z.textContent += `${F}
`;
              }
            } catch (v) {
              z && (z.textContent += `ERROR: ${v.message}
`);
            }
            z && (z.scrollTop = z.scrollHeight), O.value = "";
          }
        } else x.key === "ArrowUp" ? (x.preventDefault(), k.length > 0 && m < k.length - 1 && (m++, O.value = k[m])) : x.key === "ArrowDown" && (x.preventDefault(), m > 0 ? (m--, O.value = k[m]) : (m = -1, O.value = ""));
      });
      let u = false, w = 0, A = 0, R = 0, j = 0;
      Ce.addEventListener("mousedown", (x) => {
        const E = x.target.tagName;
        if (E === "BUTTON" || E === "INPUT" || E === "SELECT") return;
        u = true;
        const v = Ce.getBoundingClientRect();
        Ce.style.bottom = "unset", w = x.clientX, A = x.clientY, R = v.left, j = v.top, x.preventDefault();
      }), window.addEventListener("mousemove", (x) => {
        u && (x.preventDefault(), Ce.style.left = R + (x.clientX - w) + "px", Ce.style.top = j + (x.clientY - A) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), et();
    }, 10);
    function Ze() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function $o() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ne(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0, s = -1 / 0;
      for (const [i, d, g] of t) i < o && (o = i), i > a && (a = i), d < n && (n = d), d > c && (c = d), g < l && (l = g), g > s && (s = g);
      const r = new Ne((o + a) / 2, (n + c) / 2, (l + s) / 2), p = Math.max(a - o, c - n, s - l, 1);
      return {
        center: r,
        extent: p
      };
    }
    function wt(t = false) {
      const o = Ze();
      if (!o) return;
      const { extent: n } = $o();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((g) => g.type === "GridHelper").forEach((g) => {
        var _a2, _b;
        (_a2 = g.geometry) == null ? void 0 : _a2.dispose(), (_b = g.material) == null ? void 0 : _b.dispose(), o.scene.remove(g);
      });
      const c = Ka(), s = new rl(l, 20, c.grid, c.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((g) => g.type === "Group" && g.name !== "gridAxes" && g.name !== "loadsGroup" && (g.name === "viewerAxes" || g.children.some((S) => S instanceof dn))).forEach((g) => {
        g.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(g);
      });
      const p = 0.05 * l, i = new sn();
      i.name = "viewerAxes";
      const d = c.axisArrow;
      i.add(new dn(new Ne(1, 0, 0), new Ne(), 1, d, 0.2, 0.2)), i.add(new dn(new Ne(0, 1, 0), new Ne(), 1, d, 0.2, 0.2)), i.add(new dn(new Ne(0, 0, 1), new Ne(), 1, d, 0.2, 0.2)), i.children.forEach((g) => g.scale.set(p, p, p));
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
        const h = new Xn(y);
        h.needsUpdate = true;
        const I = new pn(new fn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        I.position.set($[0], $[1], $[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, i.add(I);
      }
      o.scene.add(i), t ? o.render() : Mo("3d");
    }
    function zs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Mo(t) {
      var _a2;
      const o = Ze();
      if (!o) return;
      const { center: n, extent: l } = $o(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const p = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, d = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (p || i || d) && (Array.isArray(r.material) ? r.material.forEach((g) => {
            g.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, p = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -c * a, r.right = c * a, r.top = c, r.bottom = -c, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const p = (i, d, g) => {
          r.position.copy(i), r.up.copy(g), o.controls.target.copy(d), r.lookAt(d), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new Ne(n.x, n.y, n.z + l * 2), new Ne(n.x, n.y, n.z), new Ne(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), d = ((_a2 = K.hPiso) == null ? void 0 : _a2.val) ?? 3, g = (i + 1) * d, S = d * 0.45;
          o.renderer.clippingPlanes = [
            new Io(new Ne(0, 0, -1), g + S),
            new Io(new Ne(0, 0, 1), -g + S)
          ], s(), p(new Ne(n.x, n.y, g + l * 2), new Ne(n.x, n.y, g), new Ne(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), d = Ge[i] ?? n.x;
          if (Ke.length > 1) {
            const S = zs(Ge, i, l);
            o.renderer.clippingPlanes = [
              new Io(new Ne(-1, 0, 0), d + S),
              new Io(new Ne(1, 0, 0), -d + S)
            ], s(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), d = Ke[i] ?? n.y;
          if (Ge.length > 1) {
            const S = zs(Ke, i, l);
            o.renderer.clippingPlanes = [
              new Io(new Ne(0, -1, 0), d + S),
              new Io(new Ne(0, 1, 0), -d + S)
            ], s(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function Nn() {
      const t = Ce.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ge.length < 2 && Ke.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, s, r) => {
        const p = document.createElement("button");
        return p.textContent = c, p.dataset.view = s, p.title = r, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const d = p.classList.contains("view-active");
          Ce.querySelectorAll("[data-view]").forEach((g) => g.classList.remove("view-active")), d ? (Mo("3d"), (_a2 = Ce.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Mo(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ge.forEach((c, s) => {
        const r = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(r, `axisX:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Ke.forEach((c, s) => {
        const r = `${s + 1}`;
        t.appendChild(o(r, `axisY:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qn() {
      var _a2;
      const t = Ce.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = K.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (a, c, s) => {
        const r = document.createElement("button");
        return r.textContent = a, r.dataset.view = c, r.title = s, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const i = r.classList.contains("view-active");
          Ce.querySelectorAll("[data-view]").forEach((d) => d.classList.remove("view-active")), i ? (Mo("3d"), (_a3 = Ce.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Mo(c), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `Planta Piso ${a + 1}`));
    }
    function Ta() {
      Mo("3d"), Ce.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Qe.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Mo(t), Ce.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let so = false, Ut = false, fo = false, Yt = "line", Zt = [], Et = null, Bt = null, Ht = null, qo = null, eo = null;
    const Tt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Dn = [], to = null, zo = null;
    const _o = [], ln = [], za = 50;
    function Do() {
      _o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), _o.length > za && _o.shift(), ln.length = 0;
    }
    function As() {
      if (_o.length === 0) return;
      ln.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = _o.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, yo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Ls() {
      if (ln.length === 0) return;
      _o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = ln.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, yo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const yt = /* @__PURE__ */ new Set();
    let Xt = null, wo = [], Qt = null, uo = null;
    function Bn(t) {
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let r = 0; r < l.length; r++) {
        const p = n[l[r]], i = n[l[(r + 1) % l.length]];
        a.push(p[0], p[1], p[2], i[0], i[1], i[2]);
      }
      const c = new no();
      c.setAttribute("position", new Lo(a, 3));
      const s = new Go(c, new Yo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), wo.push(s), o.render();
    }
    function Eo() {
      const t = Ze();
      wo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), wo = [], t == null ? void 0 : t.render();
    }
    function So() {
      uo && uo.remove();
      const t = Y.size > 0 || H;
      if (yt.size === 0 && !t) {
        uo = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${yt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), uo = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ya([
          ...yt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (yt.size === 1) {
          const n = [
            ...yt
          ][0];
          qs(n);
        } else {
          const n = [
            ...yt
          ], l = e.nodes.val, a = e.elements.val;
          let c = 0, s = 0, r = 0, p = 0;
          n.forEach((d) => {
            const g = a[d];
            if (g) if (g.length === 2) {
              const S = l[g[0]], $ = l[g[1]], y = Math.abs($[0] - S[0]), f = Math.abs($[1] - S[1]), h = Math.abs($[2] - S[2]);
              h > y && h > f ? c++ : s++;
            } else g.length === 3 ? r++ : g.length === 4 && p++;
          });
          const i = [];
          c && i.push(`${c} columnas`), s && i.push(`${s} vigas`), p && i.push(`${p} shells Q4`), r && i.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        yt.forEach((n) => Y.add(n)), yt.clear(), Eo(), So(), Oe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, W.clear(), yt.forEach((n) => W.add(n)), yt.clear(), Eo(), So(), Oe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        Y.clear(), H = false, W.clear(), So(), Oe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Do(), yt.forEach((n) => Z.add(n)), yt.clear(), Eo(), So(), Oe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        yt.clear(), Eo(), So();
      });
    }
    function rn() {
      var _a2;
      Ut = false, yt.clear(), Eo(), uo && (uo.remove(), uo = null), (_a2 = Ce.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ze();
      o && (o.controls.enabled = true);
    }
    function Ao() {
      if (Xt) {
        const t = Ze();
        t == null ? void 0 : t.scene.remove(Xt), Xt.geometry.dispose(), Xt.material.dispose(), Xt = null, t == null ? void 0 : t.render();
      }
      Qt && (Qt.remove(), Qt = null);
    }
    function Aa(t) {
      Hn();
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      zo = t;
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
        const r = new Float32Array([
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), p = new no();
        p.setAttribute("position", new xn(r, 3));
        const i = new Wo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new Go(p, i);
        d.computeLineDistances(), d.renderOrder = 9990, o.scene.add(d), Dn.push(d);
      }
      o.render();
    }
    function Hn() {
      const t = Ze();
      for (const o of Dn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Dn = [], zo = null, to && (to.remove(), to = null);
    }
    function Cs(t, o, n, l) {
      to || (to = document.createElement("div"), to.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(to));
      const a = l.x - n.x, c = l.y - n.y, s = l.z - n.z, r = Math.sqrt(a * a + c * c + s * s), p = Math.abs(a), i = Math.abs(c), d = Math.abs(s);
      let g = "";
      p > i && p > d ? g = `\u0394X=${a.toFixed(2)}` : i > p && i > d ? g = `\u0394Y=${c.toFixed(2)}` : d > 0.01 && (g = `\u0394Z=${s.toFixed(2)}`), to.textContent = `${r.toFixed(3)} m  ${g}`, to.style.left = t + 20 + "px", to.style.top = o - 10 + "px";
    }
    function La(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new Ne(l[0], l[1], l[2]), c = t.clone(), s = c.clone().sub(a), r = 0.3, p = Math.abs(s.x), i = Math.abs(s.y), d = Math.abs(s.z);
      return i < r && d < r && p > 0.01 ? new Ne(c.x, a.y, a.z) : p < r && d < r && i > 0.01 ? new Ne(a.x, c.y, a.z) : p < r && i < r && d > 0.01 ? new Ne(a.x, a.y, c.z) : null;
    }
    function cn() {
      var _a2;
      const t = Ze();
      Bt && t && (t.scene.remove(Bt), Bt.geometry.dispose(), Bt.material.dispose(), Bt = null), Ht && t && (t.scene.remove(Ht), Ht.geometry.dispose(), Ht.material.dispose(), Ht = null), Hn(), Et = null, eo = null, fo = false, qo && (qo.remove(), qo = null), (_a2 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ca() {
      qo && qo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Yt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Yt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Yt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Yt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Tt.node)}">Node</button>
      <button id="ds-grid" style="${n(Tt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Tt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Tt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${_n}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), qo = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        a && (a.style.cssText = o(Yt === "line")), c && (c.style.cssText = o(Yt === "arc")), s && (s.style.cssText = o(Yt === "node")), r && (r.style.cssText = o(Yt === "area"));
        const p = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), g = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Tt.node)), i && (i.style.cssText = n(Tt.grid)), d && (d.style.cssText = n(Tt.midpoint)), g && (g.style.cssText = n(Tt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Yt = "line", Et = null, eo = null, Zt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Yt = "arc", Et = null, eo = null, Zt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Yt = "node", Et = null, eo = null, Zt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Yt = "area", Et = null, eo = null, Zt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Tt.node = !Tt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Tt.grid = !Tt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Tt.midpoint = !Tt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Tt.track = !Tt.track, Tt.track || Hn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        Tt.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => As()), t.querySelector("#dt-redo").addEventListener("click", () => Ls());
    }
    function Fs(t, o, n, l) {
      const a = l.getBoundingClientRect(), c = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, r = new sa();
      r.setFromCamera(new aa(c, s), n);
      const p = e.nodes.val, i = e.elements.val, d = 0.12;
      if (Tt.node) {
        let $ = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const h = p[f], I = new Ne(h[0], h[1], h[2]).project(n), L = Math.sqrt((I.x - c) ** 2 + (I.y - s) ** 2);
          L < d && L < y && (y = L, $ = f);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new Ne(...p[$]),
          snapType: "node"
        };
      }
      if (Tt.midpoint) {
        let $ = 1 / 0, y = null;
        for (const f of i) {
          if (f.length !== 2) continue;
          const h = p[f[0]], I = p[f[1]], L = new Ne((h[0] + I[0]) / 2, (h[1] + I[1]) / 2, (h[2] + I[2]) / 2), z = L.clone().project(n), O = Math.sqrt((z.x - c) ** 2 + (z.y - s) ** 2);
          O < d * 0.8 && O < $ && ($ = O, y = L);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Tt.grid) {
        const $ = new Io(new Ne(0, 0, 1), 0), y = new Ne();
        if (r.ray.intersectPlane($, y)) {
          const f = Tt.gridSize || _n;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const g = new Io(new Ne(0, 0, 1), 0), S = new Ne();
      return r.ray.intersectPlane(g, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Rs(t) {
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val;
      if (Ht && (o.scene.remove(Ht), Ht.geometry.dispose(), Ht.material.dispose(), Ht = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new nl(a * 2, a * 2, a * 2) : new sl(a, 12, 12), s = new al({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Ht = new da(c, s), Ht.position.copy(t.worldPos), Ht.renderOrder = 9999, o.scene.add(Ht);
      }
      if (Bt && (o.scene.remove(Bt), Bt.geometry.dispose(), Bt.material.dispose(), Bt = null), Et !== null && t.worldPos) {
        const l = n[Et], a = new no();
        if (Yt === "arc" && eo !== null) {
          const s = n[eo], r = Ps(new Ne(l[0], l[1], l[2]), new Ne(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let i = 0; i < r.length - 1; i++) p.push(r[i].x, r[i].y, r[i].z, r[i + 1].x, r[i + 1].y, r[i + 1].z);
          a.setAttribute("position", new Lo(p, 3));
        } else a.setAttribute("position", new Lo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new Yo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Bt = new Co(a, c), Yt === "arc" && eo !== null && (Bt = new Go(a, c)), Bt.renderOrder = 9999, o.scene.add(Bt);
      }
      o.render();
    }
    function Ps(t, o, n, l) {
      const a = [];
      for (let c = 0; c <= l; c++) {
        const s = c / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), i = 2 * (1 - s) * s, d = s * s;
        a.push(new Ne(p * t.x + i * r.x + d * n.x, p * t.y + i * r.y + d * n.y, p * t.z + i * r.z + d * n.z));
      }
      return a;
    }
    function jn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let a = 0; a < o.length; a++) if (Math.abs(o[a][0] - t.worldPos.x) < n && Math.abs(o[a][1] - t.worldPos.y) < n && Math.abs(o[a][2] - t.worldPos.z) < n) return a;
      Do();
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
    function Fa(t) {
      var _a2;
      if (Yt === "node") {
        if (!t.worldPos) return;
        Do();
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
      if (Yt === "line") {
        const o = jn(t);
        if (o < 0) return;
        if (Et === null) {
          Et = o;
          return;
        }
        if (o === Et) return;
        Do();
        const n = [
          ...e.elements.val
        ];
        n.some((a) => a.length === 2 && (a[0] === Et && a[1] === o || a[1] === Et && a[0] === o)) || (n.push([
          Et,
          o
        ]), e.elements.val = n, yo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), Et = o;
        return;
      }
      if (Yt === "arc") {
        const o = jn(t);
        if (o < 0) return;
        if (Et === null) {
          Et = o;
          return;
        }
        if (eo === null) {
          if (o === Et) return;
          eo = o;
          return;
        }
        if (o === Et || o === eo) return;
        const n = e.nodes.val, l = new Ne(...n[Et]), a = new Ne(...n[eo]), c = new Ne(...n[o]), s = Math.max(4, Math.round(((_a2 = K.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ps(l, a, c, s);
        Do();
        const p = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let d = Et;
        for (let g = 1; g < r.length; g++) {
          let S;
          if (g === r.length - 1) S = o;
          else {
            const $ = r[g];
            S = p.length, p.push([
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
        e.nodes.val = p, e.elements.val = i, yo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, Et = o, eo = null;
        return;
      }
      if (Yt === "area") {
        const o = jn(t);
        if (o < 0) return;
        if (Zt.length >= 3 && o === Zt[0]) {
          Do();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = Zt.map((c) => n[c]);
          try {
            const c = xo({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (r, p) => p),
              maxMeshSize: _n || 0.5
            }), s = [];
            for (const r of c.nodes) {
              let p = -1;
              for (let i = 0; i < n.length; i++) {
                const d = Math.abs(n[i][0] - r[0]), g = Math.abs(n[i][1] - r[1]), S = Math.abs(n[i][2] - r[2]);
                if (d < 0.01 && g < 0.01 && S < 0.01) {
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
            for (const r of c.elements) l.push([
              s[r[0]],
              s[r[1]],
              s[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, yo(), console.log(`Area: ${c.elements.length} triangulos creados desde ${Zt.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          Zt = [];
          return;
        }
        if (Zt.push(o), console.log(`Area vertex ${Zt.length}: node ${o}`), Zt.length >= 2) {
          const n = Zt[Zt.length - 2], l = e.nodes.val, a = Ze();
          if (a) {
            const c = new no().setFromPoints([
              new Ne(...l[n]),
              new Ne(...l[o])
            ]), s = new Go(c, new Yo({
              color: 65280,
              linewidth: 2
            }));
            s.name = "area-preview", a.scene.add(s), a.render();
          }
        }
        return;
      }
    }
    function Os(t) {
      const o = Ze();
      if (!o) return;
      Xt && (o.scene.remove(Xt), Xt.geometry.dispose(), Xt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const r = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(r[0], r[1], r[2], p[0], p[1], p[2]);
      }
      const c = new no();
      c.setAttribute("position", new Lo(a, 3)), Xt = new Go(c, new Yo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Xt.renderOrder = 9999, o.scene.add(Xt), o.render();
    }
    function Wn(t) {
      const o = Ze();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new aa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new sa();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, s = e.elements.val;
      if (c.length === 0 || s.length === 0) return -1;
      let r = 1 / 0, p = -1;
      const i = a.ray;
      for (let g = 0; g < s.length; g++) {
        const S = s[g];
        if (S.length === 2) {
          const $ = new Ne(...c[S[0]]), y = new Ne(...c[S[1]]), f = new ll($, y), h = new Ne(), I = new Ne();
          i.closestPointToPoint(f.getCenter(new Ne()), h), f.closestPointToPoint(h, true, I);
          const L = h.distanceTo(I);
          L < r && (r = L, p = g);
        } else if (S.length === 3) {
          const $ = new Ne(...c[S[0]]), y = new Ne(...c[S[1]]), f = new Ne(...c[S[2]]), h = new Ne();
          if (i.intersectTriangle($, y, f, false, h)) {
            const L = i.origin.distanceTo(h);
            L < r && (r = L, p = g);
          } else {
            const L = $.add(y).add(f).divideScalar(3), z = new Ne();
            i.closestPointToPoint(L, z);
            const O = z.distanceTo(L);
            O < r && (r = O, p = g);
          }
        } else if (S.length === 4) {
          const $ = new Ne(...c[S[0]]), y = new Ne(...c[S[1]]), f = new Ne(...c[S[2]]), h = new Ne(...c[S[3]]), I = new Ne();
          let L = i.intersectTriangle($, y, f, false, I);
          if (L) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, p = g);
          }
          if (L = i.intersectTriangle($, f, h, false, I), L) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, p = g);
          }
        }
      }
      const { extent: d } = $o();
      return r < d * 0.1 ? p : -1;
    }
    function we(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
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
        for (let r = 0; r < a; r++) {
          const p = t[s][r], i = Math.abs(p) > 1e-10 ? "nonzero" : "";
          c += `<td class="${i}">${we(p, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function Be(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function C(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ra(t, o, n, l, a, c, s) {
      const r = 0.8333333333333334 * o, p = 5 / 6 * o, i = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, d = r > 0 && a > 0 ? 12 * t * l / (a * r * s ** 2) : 0, g = t * o / s, S = a * c / s, $ = 12 * t * n / s ** 3 / (1 + i), y = 6 * t * n / s ** 2 / (1 + i), f = 4 * t * n / s * (1 + i / 4) / (1 + i), h = 2 * t * n / s * (1 - i / 2) / (1 + i), I = i > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${C("A", "s")} = ${Be("5", "6")} \xB7 ${C("A")} = <span class="highlight">${we(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Be("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("G") + "\xB7" + C("A", "s") + "\xB7" + C("L") + "\xB2")} = <span class="highlight">${we(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${we(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${C("t", "z")} = ${Be("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we($)}</span> &nbsp;(cortante)</div>
      <div>${C("b", "z")} = ${Be("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${C("k", "z")} = ${Be("4\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1+\u03C6/4)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${C("a", "z")} = ${Be("2\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1\u2212\u03C6/2)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Be(C("E") + "\xB7" + C("A"), C("L"))} = <span class="highlight">${we(g)}</span> &nbsp;(axial)</div>
      <div>${Be(C("G") + "\xB7" + C("J"), C("L"))} = <span class="highlight">${we(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${Be("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")} = <span class="highlight">${we($)}</span></div>
      <div>${Be("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))} = <span class="highlight">${we(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Be(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Be("\u2212" + C("EA"), C("L"))}</span>
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
    function Pa(t) {
      if (t.length === 2) {
        const n = vo(t[1], t[0]), l = Po(n), a = n[0] / l, c = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${Be("\u0394x", C("L"))} = ${Be(we(n[0]), we(l))} = <span class="highlight">${we(a)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${Be("\u0394y", C("L"))} = ${Be(we(n[1]), we(l))} = <span class="highlight">${we(c)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${Be("\u0394z", C("L"))} = ${Be(we(n[2]), we(l))} = <span class="highlight">${we(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${Be("\u2212" + C("m"), C("D"))}</span><span class="cell">${Be(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${Be("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${Be("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Oa() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function Na(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function qa(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Be("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Be(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let c = 0; c < n; c++) {
          const s = t[a][c], r = (a === c ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${we(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ns() {
      const t = "0", o = Be(C("EA"), C("L")), n = Be("\u2212" + C("EA"), C("L")), l = Be("12" + C("EI", "z"), C("L") + "\xB3"), a = Be("\u221212" + C("EI", "z"), C("L") + "\xB3"), c = Be("12" + C("EI", "y"), C("L") + "\xB3"), s = Be("\u221212" + C("EI", "y"), C("L") + "\xB3"), r = Be("6" + C("EI", "z"), C("L") + "\xB2"), p = Be("\u22126" + C("EI", "z"), C("L") + "\xB2"), i = Be("6" + C("EI", "y"), C("L") + "\xB2"), d = Be("\u22126" + C("EI", "y"), C("L") + "\xB2"), g = Be(C("GJ"), C("L")), S = Be("\u2212" + C("GJ"), C("L")), $ = Be("4" + C("EI", "z"), C("L")), y = Be("2" + C("EI", "z"), C("L")), f = Be("4" + C("EI", "y"), C("L")), h = Be("2" + C("EI", "y"), C("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
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
          const w = O[m][u], A = (m === u ? "diag " : "") + (w !== "0" ? "nz" : "");
          k += `<td class="${A}">${w}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function _a(t, o, n, l, a, c, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${Be(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${Be(we(t) + "\xD7" + we(o), we(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${Be("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + we(t) + "\xD7" + we(n), we(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${Be("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + we(t) + "\xD7" + we(n), we(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Be("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + we(t) + "\xD7" + we(l), we(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${Be("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + we(t) + "\xD7" + we(l), we(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Be(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${Be(we(a) + "\xD7" + we(c), we(s))}`,
          val: a * c / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${Be("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${Be("4\xD7" + we(t) + "\xD7" + we(n), we(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${Be("2\xD7" + we(t) + "\xD7" + we(n), we(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Be("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${Be("4\xD7" + we(t) + "\xD7" + we(l), we(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${Be("2\xD7" + we(t) + "\xD7" + we(l), we(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${we(p.val)}</span></div>`).join("")}</div>`;
    }
    function Jn(t, o, n, l) {
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
    function qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Qt && Qt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), c = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var i = "";
      if (c) {
        const m = Po(vo(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, w = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, A = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, j = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, E = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let V = 0; V < 6; V++) {
          const ae = V, Q = V + 6, U = (E.length >= 12 ? E[ae] : V >= 3 && E.length >= 6 && E[V - 3]) ? "checked" : "", ie = (E.length >= 12 ? E[Q] : V >= 3 && E.length >= 6 && E[V]) ? "checked" : "", le = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", ke = v.length >= 12 && v[Q] > 0 ? v[Q].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[V]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${U}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Q}" ${ie}></td>
          <td><input type="number" data-spr="${ae}" value="${le}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Q}" value="${ke}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${we(m)}${we(u)}${we(w)}${we(A)}${we(R)}${we(j)}${we(x)}${X}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, w = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, A = m / (2 * (1 + w)), R = l.length === 4, j = m / (1 - w * w);
        `${l.length}${l.join(", ")}${we(m)}${we(A)}${we(u)}${we(w)}`, R && (i = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${C("D")} = ${Be(C("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Be("1\u2212\u03BD", "2")}</span>
          </span> = ${Be(we(m), "1\u2212" + we(w) + "\xB2")} = <span class="highlight">${we(j)}</span></div>

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
          <div>${C("B\u0304", "I")} = ${C("B", "I")} + ${C("B", "IC")} &nbsp; donde &nbsp; ${C("B", "IC")} = \u2212${Be("1", "V")}\u222B${C("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${C("K", "drill")} = \u03B1\xB7${C("G")}\xB7${C("t")} \xB7 \u222B${C("B", "d")}<sup>T</sup>\xB7${C("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${C("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${C("D", "b")} = ${Be(C("E") + "\xB7" + C("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${we(m * u ** 3 / (12 * (1 - w ** 2)))}</span></div>
          <div>${C("D", "s")} = \u03BA\xB7${C("G")}\xB7${C("t")} = <span class="highlight">${we(5 / 6 * A * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${C("K", "24\xD724")} = ${C("K", "membrana")}(8\xD78) + ${C("K", "flexi\xF3n")}(12\xD712) + ${C("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let d = "", g = "", S = "";
      i || (i = "");
      let $ = "", y = "", f = "", h = "", I = null, L = null, z = null, O = [];
      try {
        if (I = vn(a, s, t), L = yn(a), z = ao(ns(L), ao(I, L)), O = c ? [
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
          const A = Po(vo(a[1], a[0])), R = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, j = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, E = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          i = Ra(R, j, x, E, v, F, A);
        }
        $ = Pa(a), y = Oa(), f = Na(l), h = qa(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', w = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${Gn(I, O)}`, g = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${L.length}\xD7${L.length}) ${u}</div>${Gn(L, O)}`, S = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${w}</div>${Gn(z, O)}`;
      } catch (m) {
        d = `<div style="color:red">Error: ${m.message}</div>`;
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
        l.map((u, w) => {
          var _a3;
          const A = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = m.map((j, x) => `<span class="prop-key">${j}</span>: <span class="${Math.abs(A[x]) > 1e-10 ? "result-val" : ""}">${we(A[x])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (p && c && (r == null ? void 0 : r.deformations) && I && L) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), w = (_w = p.shearsZ) == null ? void 0 : _w.get(t), A = (_x = p.torsions) == null ? void 0 : _x.get(t), R = (_y = p.bendingsY) == null ? void 0 : _y.get(t), j = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], E = [];
        for (const Q of l) {
          const U = ((_A = r.deformations) == null ? void 0 : _A.get(Q)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          E.push(...U);
        }
        let v = [];
        try {
          v = ao(L, E);
        } catch {
          v = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = ao(I, v);
        } catch {
          F = new Array(12).fill(0);
        }
        const X = (Q, U) => Q.map((ie, le) => `<span style="color:${Math.abs(ie) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${U[le % 6]}=${we(ie)}</span>`).join(", "), ae = [
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
        ].map((Q, U) => `${Q}${U < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((Q, U) => `<span style="color:var(--fem-label)">nodo ${Q}:</span> ${x.map((ie, le) => `<span style="color:${Math.abs(E[U * 6 + le]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${we(E[U * 6 + le])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${X(v, [
          ...x,
          ...x
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${F.map((Q, U) => `<span style="color:${Math.abs(Q) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[U]}=${we(Q)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${we(F[0])}${C("P", "7")}${C("N", "j")}${we(F[6])}${C("P", "2")}${C("V", "y,i")}${we(F[1])}${C("P", "8")}${C("V", "y,j")}${we(F[7])}${C("P", "3")}${C("V", "z,i")}${we(F[2])}${C("P", "9")}${C("V", "z,j")}${we(F[8])}${C("P", "4")}${C("M", "x,i")}${we(F[3])}${C("P", "10")}${C("M", "x,j")}${we(F[9])}${C("P", "5")}${C("M", "y,i")}${we(F[4])}${C("P", "11")}${C("M", "y,j")}${we(F[10])}${C("P", "6")}${C("M", "z,i")}${we(F[5])}${C("P", "12")}${C("M", "z,j")}${we(F[11])}${m ? m.map((Q) => we(Q)).join(", ") : "\u2014"}${u ? u.map((Q) => we(Q)).join(", ") : "\u2014"}${w ? w.map((Q) => we(Q)).join(", ") : "\u2014"}${A ? A.map((Q) => we(Q)).join(", ") : "\u2014"}${R ? R.map((Q) => we(Q)).join(", ") : "\u2014"}${j ? j.map((Q) => we(Q)).join(", ") : "\u2014"}`;
      } else if (p && c) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), w = (_D = p.shearsZ) == null ? void 0 : _D.get(t), A = (_E = p.torsions) == null ? void 0 : _E.get(t), R = (_F = p.bendingsY) == null ? void 0 : _F.get(t), j = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((x) => we(x)).join(", ") : "\u2014"}${u ? u.map((x) => we(x)).join(", ") : "\u2014"}${w ? w.map((x) => we(x)).join(", ") : "\u2014"}${A ? A.map((x) => we(x)).join(", ") : "\u2014"}${R ? R.map((x) => we(x)).join(", ") : "\u2014"}${j ? j.map((x) => we(x)).join(", ") : "\u2014"}`;
      } else if (p && !c) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), w = (_J = p.bendingXY) == null ? void 0 : _J.get(t), A = (_K = p.membraneXX) == null ? void 0 : _K.get(t), R = (_L = p.membraneYY) == null ? void 0 : _L.get(t), j = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((x) => we(x)).join(", ") : "\u2014"}${u ? u.map((x) => we(x)).join(", ") : "\u2014"}${w ? w.map((x) => we(x)).join(", ") : "\u2014"}${A ? A.map((x) => we(x)).join(", ") : "\u2014"}${R ? R.map((x) => we(x)).join(", ") : "\u2014"}${j ? j.map((x) => we(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Qt = yl(t, o, n, s, r, p), Qt.id = "fem-inspect-panel", document.body.appendChild(Qt), (_N = Qt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ao()), (_O = Qt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = Qt.querySelectorAll("input[data-rel]"), u = Qt.querySelectorAll("input[data-spr]"), w = new Array(12).fill(false), A = new Array(12).fill(0);
        m.forEach((j) => {
          w[parseInt(j.dataset.rel)] = j.checked;
        }), u.forEach((j) => {
          const x = parseFloat(j.value);
          x > 0 && (A[parseInt(j.dataset.spr)] = x);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), w.some((j) => j) ? s.momentReleases.set(t, w) : s.momentReleases.delete(t), A.some((j) => j > 0) ? s.partialFixitySprings.set(t, A) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, w.map((j, x) => j ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, A);
        const R = Qt.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Po(vo(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, w = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, A = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, j = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return _a(u, w, A, R, j, x, m);
      })() : void 0;
      Qt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const w = m.dataset.full;
          if (w === "kLocal" && I) {
            const A = c ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, A, Yn(I, O), k);
          } else if (w === "T" && L) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, Yn(L, O));
          else if (w === "kGlobal" && z) {
            const A = c ? Ns() : "<em>Shell 18\xD718</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, A, Yn(z, O), k);
          }
        });
      });
    }
    function _s() {
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
          const O = z - 4;
          for (let k = 0; k < 4; k++) a.push([
            O + k,
            z + k
          ]);
          a.push([
            O,
            z + 1
          ]), a.push([
            O + 1,
            z + 2
          ]), a.push([
            O + 2,
            z + 3
          ]), a.push([
            O + 3,
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
        supports: c,
        loads: r
      });
      const p = 2e8, i = 77e6, d = 5e-3, g = 2e-6, S = 1e-6, $ = {
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
        const y = At(l, a, {
          supports: c,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function Ds() {
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
      const r = 2e8, p = 77e6, i = 0.01, d = 5e-6, g = 2e-6, S = {
        elasticities: new Map(a.map(($, y) => [
          y,
          r
        ])),
        shearModuli: new Map(a.map(($, y) => [
          y,
          p
        ])),
        areas: new Map(a.map(($, y) => [
          y,
          i
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
        const $ = At(l, a, {
          supports: c,
          loads: s
        }, S);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Arco:", $.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function Bs() {
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
      const r = c.length;
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
        const O = c.length;
        c.push([
          h,
          6 / 2,
          28
        ]), i.push(z, O), s.push([
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
          O
        ]), s.push([
          z,
          O
        ]);
      }
      for (const f of i) {
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
      for (let f = r; f < r + p.length * 4; f += 4) d.set(f, [
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
        const f = At(c, s, {
          supports: d,
          loads: g
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Puente atirantado: ${c.length} nodos, ${s.length} elem, span=60m`);
    }
    function Hs() {
      const c = [], s = [];
      for (let h = 0; h <= 12; h++) {
        const I = h * 3.5, L = h * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const O = L + 2 * Math.PI * z / 6, k = 5 * Math.cos(O), m = 5 * Math.sin(O);
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
      const r = 13 * 6;
      for (let h = 0; h < 12; h++) s.push([
        r + h,
        r + h + 1
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
      p.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const I = 10 * h / 12, L = h * 6;
        for (let z = 0; z < 6; z++) i.set(L + z, [
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
        loads: i
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
        const h = At(c, s, {
          supports: p,
          loads: i
        }, f);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Torre Twist: ${c.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function js() {
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
        for (let O = 0; O < 3; O++) {
          const k = O * 2 * Math.PI / 3 - Math.PI / 2, m = L * Math.cos(k), u = L * Math.sin(k), w = a.length;
          a.push([
            m,
            u,
            I
          ]), c.push([
            z,
            w
          ]);
          const A = a.length;
          a.push([
            m * 0.5,
            u * 0.5,
            I
          ]), c.push([
            z,
            A
          ]), c.push([
            A,
            w
          ]);
        }
        for (let O = 0; O < 3; O++) {
          const k = z + 1 + O * 2, m = z + 1 + (O + 1) % 3 * 2;
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
        const h = f * r, I = 5 * f / 20;
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
      const i = 35e6, d = 14e6, g = 0.02, S = 5e-5, $ = 2e-5, y = {
        elasticities: new Map(c.map((f, h) => [
          h,
          i
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
        const f = At(a, c, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Burj Khalifa: ${a.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Ws() {
      const t = [], o = [];
      for (let g = 0; g < 3; g++) {
        const S = g * 12, $ = 15 - g * 2, y = 20 - g * 3, f = 8 - g, h = t.length;
        for (let L = 0; L <= 4; L++) {
          const z = L / 4, O = -f / 2 + f * z, k = y * (1 - z * z * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, w = S + k * u, A = $ * Math.sin(Math.PI * u) * (1 - z * z * 0.5), R = O;
            t.push([
              w,
              R,
              A
            ]);
          }
        }
        const I = 13;
        for (let L = 0; L < 4; L++) for (let z = 0; z < 12; z++) {
          const O = h + L * I + z, k = h + L * I + z + 1, m = h + (L + 1) * I + z + 1, u = h + (L + 1) * I + z;
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
      const s = 35e6, r = 0.2, p = 0.15, i = s / (2 * (1 + r)), d = {
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
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const g = At(t, o, {
          supports: a,
          loads: c
        }, d);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Opera:", g.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Gs() {
      const l = [], a = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, h = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const L = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let z = 0; z < 12; z++) {
            const O = 2 * Math.PI * z / 12;
            l.push([
              Math.max(L, 1) * Math.cos(O),
              Math.max(L, 1) * Math.sin(O),
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
      const r = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const f = y * 12, h = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) r.set(f + I, [
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
        loads: r
      });
      const p = 2e8, i = 77e6, d = 6e-3, g = 8e-6, S = 4e-6, $ = {
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
        const y = At(l, a, {
          supports: s,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => wt(), 50), et(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Vn() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = K.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = K.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = K.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = K.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = K.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = K.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = K.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = K.P) == null ? void 0 : _h.val) ?? 100, i = s / (2 * (1 + r)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
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
        const k = At(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = bo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = c * h + Math.floor(a / 2), w = k.deformations.get(u), A = w ? w[0] : 0;
          console.log(`Muro Q4: Ux=${A.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const O = Ze();
      O && (O.settings.shellResults.val = "displacementX"), setTimeout(() => wt(), 50), et();
    }
    function Ys() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = K.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = K.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = K.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = K.nx) == null ? void 0 : _d.val) ?? 12), c = Math.round(((_e2 = K.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = K.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = K.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = K.P) == null ? void 0 : _h.val) ?? 50, i = s / (2 * (1 + r)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let O = 0; O <= c; O++) for (let k = 0; k <= a; k++) S.push([
        k * d,
        O * g,
        0
      ]);
      const h = a + 1;
      for (let O = 0; O < c; O++) for (let k = 0; k < a; k++) $.push([
        O * h + k,
        O * h + k + 1,
        (O + 1) * h + k + 1,
        (O + 1) * h + k
      ]);
      for (let O = 0; O <= c; O++) y.set(O * h, [
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
        elasticities: new Map($.map((O, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map($.map((O, k) => [
          k,
          r
        ])),
        thicknesses: new Map($.map((O, k) => [
          k,
          l
        ])),
        shearModuli: new Map($.map((O, k) => [
          k,
          i
        ])),
        densities: new Map($.map((O, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = L);
      try {
        const O = At(S, $, {
          supports: y,
          loads: f
        }, L);
        if (O && e.deformOutputs) {
          e.deformOutputs.val = O;
          const k = bo(S, $, L, O);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = O.deformations.get(I), u = m ? m[2] : 0, w = l * n * n * n / 12, A = p * o * o * o / (3 * s * w);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${A.toExponential(4)} | ratio=${(Math.abs(u) / A).toFixed(4)}`);
        }
      } catch (O) {
        console.warn("VigaQ4:", O.message);
      }
      const z = Ze();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), et();
    }
    function Js() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = K.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = K.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = K.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = K.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = K.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = K.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = K.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = K.P) == null ? void 0 : _h.val) ?? 20, i = s / (2 * (1 + r)), d = o / a, g = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
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
        const k = At(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = bo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (c / 2 | 0) * h + a, w = k.deformations.get(u), A = w ? w[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${A.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const O = Ze();
      O && (O.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), et();
    }
    function Vs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
      const t = M, o = ((_a2 = K.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = K.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = K.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = K.H2) == null ? void 0 : _d.val) ?? 4.5, c = Math.round(((_e2 = K.nCol) == null ? void 0 : _e2.val) ?? 3), s = Math.round(((_f = K.nCorr) == null ? void 0 : _f.val) ?? 8), r = ((_g = K.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = K.t) == null ? void 0 : _h.val) ?? 5e-4, i = ((_i = K.q) == null ? void 0 : _i.val) ?? 1, d = 0.3, g = r / (2 * (1 + d)), S = 543e-5, $ = 889e-8, y = 249e-7, f = 312e-9, h = 285e-5, I = 142e-8, L = 1943e-8, z = 698e-10, O = 896e-6, k = 422e-9, m = 422e-9, u = 679e-9, w = [], A = [], R = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), x = [];
      for (let ye = 0; ye < c; ye++) x.push(ye * n / (c - 1));
      const E = [];
      for (let ye = 0; ye < s; ye++) E.push(ye * n / (s - 1));
      for (const ye of x) E.some((st) => Math.abs(st - ye) < 1e-6) || E.push(ye);
      const v = E.sort((ye, st) => ye - st), F = [], X = [];
      for (let ye = 0; ye < c; ye++) F.push(w.length), w.push([
        0,
        x[ye],
        0
      ]), X.push(w.length), w.push([
        o,
        x[ye],
        0
      ]);
      const V = [], ae = [];
      for (let ye = 0; ye < c; ye++) V.push(w.length), w.push([
        0,
        x[ye],
        l
      ]), ae.push(w.length), w.push([
        o,
        x[ye],
        a
      ]);
      const Q = [], U = [];
      for (let ye = 0; ye < s; ye++) {
        const st = v[ye], ht = x.findIndex((jt) => Math.abs(jt - st) < 1e-6);
        ht >= 0 ? (Q.push(V[ht]), U.push(ae[ht])) : (Q.push(w.length), w.push([
          0,
          st,
          l
        ]), U.push(w.length), w.push([
          o,
          st,
          a
        ]));
      }
      const ie = [];
      let le = 0;
      for (let ye = 0; ye < c; ye++) A.push([
        F[ye],
        V[ye]
      ]), ie.push("col"), le++, A.push([
        X[ye],
        ae[ye]
      ]), ie.push("col"), le++;
      for (let ye = 0; ye < s - 1; ye++) A.push([
        Q[ye],
        Q[ye + 1]
      ]), ie.push("vig"), le++, A.push([
        U[ye],
        U[ye + 1]
      ]), ie.push("vig"), le++;
      A.length;
      for (let ye = 0; ye < s; ye++) A.push([
        Q[ye],
        U[ye]
      ]), ie.push("corr"), le++;
      A.length;
      for (let ye = 0; ye < s - 1; ye++) A.push([
        Q[ye],
        U[ye],
        U[ye + 1],
        Q[ye + 1]
      ]), ie.push("shell");
      for (let ye = 0; ye < c; ye++) R.set(F[ye], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), R.set(X[ye], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const Re = n / (s - 1) * o, _ = 2;
      for (let ye = 0; ye < s; ye++) {
        const st = ye === 0 || ye === s - 1 ? 0.5 : 1, ht = -i * Re * st / _, jt = (qt) => {
          const tt = j.get(qt) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          tt[2] += ht, j.set(qt, tt);
        };
        jt(Q[ye]), jt(U[ye]);
      }
      e.nodes.val = w, e.elements.val = A, e.nodeInputs && (e.nodeInputs.val = {
        supports: R,
        loads: j
      });
      const ue = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), dt = t.rho;
      for (let ye = 0; ye < A.length; ye++) {
        ue.set(ye, r), me.set(ye, g), se.set(ye, dt);
        const st = ie[ye];
        if (st === "col") {
          te.set(ye, S), de.set(ye, $), ee.set(ye, y), Ee.set(ye, f);
          const ht = new Array(12).fill(false);
          ht[10] = true, ht[11] = true, nt.set(ye, ht);
        } else if (st === "vig") te.set(ye, h), de.set(ye, I), ee.set(ye, L), Ee.set(ye, z);
        else if (st === "corr") {
          te.set(ye, O), de.set(ye, k), ee.set(ye, m), Ee.set(ye, u);
          const ht = new Array(12).fill(false);
          ht[4] = true, ht[5] = true, ht[10] = true, ht[11] = true, nt.set(ye, ht);
        } else st === "shell" && (Se.set(ye, d), He.set(ye, p));
      }
      const $t = {
        elasticities: ue,
        areas: te,
        momentsOfInertiaZ: de,
        momentsOfInertiaY: ee,
        shearModuli: me,
        torsionalConstants: Ee,
        densities: se,
        poissonsRatios: Se,
        thicknesses: He,
        momentReleases: nt
      };
      e.elementInputs && (e.elementInputs.val = $t);
      try {
        const ye = At(w, A, {
          supports: R,
          loads: j
        }, $t);
        if (ye && e.deformOutputs) {
          e.deformOutputs.val = ye;
          const st = bo(w, A, $t, ye);
          e.analyzeOutputs && (e.analyzeOutputs.val = st);
          let ht = 0, jt = 0;
          ye.deformations.forEach((qt, tt) => {
            Math.abs(qt[2]) > Math.abs(ht) && (ht = qt[2], jt = tt);
          }), console.log(`P\xE9rgola: Uz_max=${ht.toExponential(4)} m en nodo ${jt} | ${le} frames + ${s - 1} shells`);
        }
      } catch (ye) {
        console.warn("Pergola:", ye.message);
      }
      const Ot = Ze();
      Ot && (Ot.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), et();
    }
    function Da() {
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
    function Ba() {
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
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, c = o("po-fy") * 1e3, s = o("po-H"), r = o("po-L"), p = o("po-As") * 1e-4, i = o("po-nbar"), d = o("po-drift") / 100, g = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const $ = [], y = d * s, f = 40;
        for (let h = 1; h <= g; h++) {
          const I = y * h / g;
          for (let L = 0; L <= f; L++) $.push(I * Math.sin(2 * Math.PI * L / f));
        }
        S.textContent = `Resolviendo pushover (${$.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ta(async () => {
            const { cyclicPushover: L } = await import("./cyclicPushoverCpp-Xwxa7wee.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: L
            };
          }, __vite__mapDeps([6,5]), import.meta.url), I = await h({
            colHeight: s,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: i
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: i
            },
            dispHistory: $
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, Ha(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          S.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Ha(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const c = t.width, s = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = c - r.left - r.right, i = s - r.top - r.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, c, s);
      let d = Math.min(...o), g = Math.max(...o), S = Math.min(...n), $ = Math.max(...n);
      d === g && (d -= 0.01, g += 0.01), S === $ && (S -= 1, $ += 1);
      const y = g - d, f = $ - S, h = (O) => r.left + (O - d) / y * p, I = (O) => r.top + i - (O - S) / f * i;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && g > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(h(0), r.top), a.lineTo(h(0), r.top + i), a.stroke()), S < 0 && $ > 0 && (a.beginPath(), a.moveTo(r.left, I(0)), a.lineTo(r.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(h(o[0]), I(n[0]));
      for (let O = 1; O < o.length; O++) a.lineTo(h(o[O]), I(n[O]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", r.left + p / 2, s - 5), a.save(), a.translate(12, r.top + i / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, c / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const L = y / 5;
      for (let O = 0; O <= 5; O++) {
        const k = d + L * O;
        a.fillText((k * 1e3).toFixed(1), h(k), s - r.bottom + 15);
      }
      a.textAlign = "right";
      const z = f / 5;
      for (let O = 0; O <= 5; O++) {
        const k = S + z * O;
        a.fillText(k.toFixed(0), r.left - 5, I(k) + 3);
      }
    }
    let en = null;
    function ja() {
      if (en) {
        en.remove(), en = null;
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
    `, document.body.appendChild(t), en = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), en = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Wa(t));
    }
    function Wa(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), r = 100, p = [];
      for (let V = 0; V < s; V++) {
        const ae = c * (1 + V * 0.5);
        for (let Q = 0; Q < r; Q++) {
          const U = Q / r * 2 * Math.PI;
          p.push(ae * Math.sin(U));
        }
      }
      const i = o / n, d = l * n;
      let g = 0, S = 0, $ = -i, y = i, f = 0, h = 0, I = 0, L = 0, z = 0, O = 0;
      const k = [];
      for (const V of p) {
        let ae = $, Q = y, U = f, ie = h, le = I, ke = L, Re = z, _ = O, ue;
        const te = V - g;
        if (Math.abs(te) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((_ === 0 || _ === 3) && (te < 0 ? (_ = 2, ie = -i, le = -o, U = ie, ke = 0, Re = 0) : (_ = 1, ie = i, le = o, U = ie, ke = 0, Re = 0)), _ === 2 && te > 0) {
          _ = 1, ke = g, Re = S, g < ae && (ae = g);
          const Se = (Q - ae) / (2 * 1 * i), He = 1 + 0 * Math.pow(Se, 0.8);
          ie = (o * He - d * i * He - Re + n * ke) / (n - d), le = o * He + d * (ie - i * He), U = Q;
        } else if (_ === 1 && te < 0) {
          _ = 2, ke = g, Re = S, g > Q && (Q = g);
          const Se = (Q - ae) / (2 * 1 * i), He = 1 + 0 * Math.pow(Se, 0.8);
          ie = (-o * He + d * i * He - Re + n * ke) / (n - d), le = -o * He + d * (ie + i * He), U = ae;
        }
        const de = Math.abs((U - ie) / i);
        let ee = a - 0.925 * de / (0.15 + de);
        ee < 0.1 && (ee = 0.1);
        const me = (V - ke) / (ie - ke), Ee = 1 + Math.pow(Math.abs(me), ee), se = Math.pow(Ee, 1 / ee);
        ue = l * me + (1 - l) * me / se, ue = ue * (le - Re) + Re, k.push(ue), g = V, S = ue, $ = ae, y = Q, f = U, h = ie, I = le, L = ke, z = Re, O = _;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), w = m.width, A = m.height;
      u.clearRect(0, 0, w, A);
      const R = Math.max(...p.map(Math.abs)), j = Math.max(...k.map(Math.abs)), x = (w - 40) / (2 * R), E = (A - 40) / (2 * j), v = w / 2, F = A / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(w - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, A - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", w - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, w - 30, F + 12), u.fillText(`\xB1${(j / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let V = 0; V < p.length; V++) {
        const ae = v + p[V] * x, Q = F - k[V] * E;
        V === 0 ? u.moveTo(ae, Q) : u.lineTo(ae, Q);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * E), u.lineTo(w - 20, F - o * E), u.stroke(), u.beginPath(), u.moveTo(20, F + o * E), u.lineTo(w - 20, F + o * E), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, w - 50, F - o * E - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function Ga() {
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
      const s = ml({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(s);
    }
    let Bo = null;
    function Ya(t) {
      Bo && Bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = mn(), l = gn(), a = Object.entries(n).map(([i, d]) => `<option value="${d}">${i}</option>`).join(""), c = Object.entries(l).map(([i, d]) => `<option value="${d}">${i}</option>`).join("");
      o.innerHTML = `
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
    `, document.body.appendChild(o), Bo = o;
      const s = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
      function p() {
        const i = s.value;
        let d = "";
        i === "rect" ? d = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : i === "circ" ? d = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : i === "W" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : i === "HSS" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : i === "I-param" ? d = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
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
      s.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = s.value, d = {
          secType: i
        };
        i === "rect" ? (d.b = parseFloat(o.querySelector("#ap-b").value), d.h = parseFloat(o.querySelector("#ap-h").value), d.material = 0) : i === "circ" ? (d.b = parseFloat(o.querySelector("#ap-d").value), d.material = 0) : i === "W" || i === "HSS" ? (d.profileIdx = parseInt(o.querySelector("#ap-profile").value), d.material = 1) : i === "I-param" ? (d.bf = parseFloat(o.querySelector("#ap-bf").value), d.hf = parseFloat(o.querySelector("#ap-hf").value), d.tf = parseFloat(o.querySelector("#ap-tf").value), d.tw = parseFloat(o.querySelector("#ap-tw").value), d.material = 1) : i === "tubular" && (d.bc = parseFloat(o.querySelector("#ap-bc").value), d.hc = parseFloat(o.querySelector("#ap-hc").value), d.t = parseFloat(o.querySelector("#ap-t").value), d.material = 1);
        const g = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach(($) => {
          g[parseInt($.dataset.asgnRel)] = $.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach(($) => {
          const y = parseFloat($.value);
          y > 0 && (S[parseInt($.dataset.asgnSpr)] = y);
        }), d.releases12 = g, d.springs12 = S, d.releaseRotStart = g[4] || g[5], d.releaseRotEnd = g[10] || g[11], d.releaseAxial = g[0], d.releaseTorsion = g[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach(($) => be.set($, {
          ...d
        })), o.remove(), Bo = null, yo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => be.delete(i)), o.remove(), Bo = null, yo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Ho = null;
    function Ja(t) {
      var _a2, _b, _c;
      Ho && Ho.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], c = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), r = Math.abs(a[2] - l[2]), p = s > c && s > r, i = Math.sqrt(c * c + s * s + r * r), d = Me.get(t) ?? 0, g = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (g == null ? void 0 : g.name) || (g ? `${g.type} ${((g.b ?? 0) * 100).toFixed(0)}x${((g.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
      $.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", $.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${p ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${i.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${S}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild($), Ho = $, $.querySelector("#ep-close").addEventListener("click", () => {
        $.remove(), Ho = null, Ao();
      }), $.querySelector("#ep-delete").addEventListener("click", () => {
        Z.add(t), $.remove(), Ho = null, Ao(), Oe();
      }), $.querySelector("#ep-inspect").addEventListener("click", () => {
        $.remove(), Ho = null, qs(t);
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
        const i = Ze();
        if (!i) return null;
        const d = i.controls.object, g = new Ne(p[0], p[1], p[2]);
        g.project(d);
        const S = o.getBoundingClientRect();
        return {
          x: (g.x + 1) / 2 * S.width,
          y: (-g.y + 1) / 2 * S.height
        };
      }
      function s(p, i, d, g, S) {
        const $ = Math.min(p, d), y = Math.max(p, d), f = Math.min(i, g), h = Math.max(i, g), I = e.nodes.val, L = e.elements.val, z = [];
        for (let O = 0; O < L.length; O++) {
          const k = L[O], m = k.map((u) => c(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((w) => w.x >= $ && w.x <= y && w.y >= f && w.y <= h) && z.push(O);
          else {
            if (m.some((w) => w.x >= $ && w.x <= y && w.y >= f && w.y <= h)) {
              z.push(O);
              continue;
            }
            if (k.length === 2) {
              const w = m[0], A = m[1];
              r(w.x, w.y, A.x, A.y, $, f, y, h) && z.push(O);
            }
          }
        }
        return z;
      }
      function r(p, i, d, g, S, $, y, f) {
        const h = (L, z) => L >= S && L <= y && z >= $ && z <= f;
        if (h(p, i) || h(d, g)) return true;
        const I = (L, z, O, k, m, u, w, A) => {
          const R = (O - L) * (A - u) - (k - z) * (w - m);
          if (Math.abs(R) < 1e-10) return false;
          const j = ((m - L) * (A - u) - (u - z) * (w - m)) / R, x = ((m - L) * (k - z) - (u - z) * (O - L)) / R;
          return j >= 0 && j <= 1 && x >= 0 && x <= 1;
        };
        return I(p, i, d, g, S, $, y, $) || I(p, i, d, g, y, $, y, f) || I(p, i, d, g, S, f, y, f) || I(p, i, d, g, S, $, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        Ut && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (fo) {
          const d = Ze();
          if (!d) return;
          const g = Fs(p.clientX, p.clientY, d.camera, d.rendererElm);
          if (Tt.track && g.snapType === "node" && g.nodeIdx !== null && g.nodeIdx !== zo && Aa(g.nodeIdx), Tt.track && zo !== null && g.worldPos && g.snapType !== "node") {
            const S = La(g.worldPos, zo);
            S && (g.worldPos = S, g.snapType = "grid");
          }
          if (zo !== null && g.worldPos) {
            const S = e.nodes.val[zo];
            S && Cs(p.clientX, p.clientY, new Ne(...S), g.worldPos);
          } else if (Et !== null && g.worldPos) {
            const S = e.nodes.val[Et];
            S && Cs(p.clientX, p.clientY, new Ne(...S), g.worldPos);
          } else to && (to.remove(), to = null);
          g.nodeIdx, Rs(g), o.style.cursor = g.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!so && !Ut) return;
        if (Ut && n) {
          const d = p.offsetX - n.x, g = p.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(g) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = d > 0, $ = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(d), h = Math.abs(g);
            l.style.left = $ + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const i = Wn(p);
        if (i >= 0) Os(i), o.style.cursor = "pointer";
        else {
          if (Xt) {
            const d = Ze();
            d == null ? void 0 : d.scene.remove(Xt), Xt = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = Ut ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (Ut && n) {
          const i = p.offsetX - n.x, d = p.offsetY - n.y;
          if (Math.abs(i) > a || Math.abs(d) > a) {
            const g = i > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, g);
            p.ctrlKey || p.metaKey || (yt.clear(), Eo()), S.forEach((y) => {
              yt.has(y) || (yt.add(y), Bn(y));
            }), So();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (fo) {
          const i = Ze();
          if (!i) return;
          const d = Fs(p.clientX, p.clientY, i.camera, i.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Fa(d), Rs(d));
          return;
        }
        if (Ut) {
          if (l) return;
          const i = Wn(p), d = p.ctrlKey || p.metaKey;
          if (i >= 0) {
            if (d) if (yt.has(i)) {
              yt.delete(i);
              const g = wo.findIndex((S) => S.__elemIdx === i);
              if (g >= 0) {
                const S = Ze();
                S == null ? void 0 : S.scene.remove(wo[g]), wo[g].geometry.dispose(), wo[g].material.dispose(), wo.splice(g, 1), S == null ? void 0 : S.render();
              }
            } else yt.add(i), Bn(i);
            else yt.clear(), Eo(), yt.add(i), Bn(i);
            So();
          } else d || (yt.clear(), Eo(), So());
          return;
        }
        if (so) {
          const i = Wn(p);
          i >= 0 && (Os(i), Ja(i));
        }
      });
    }, 500), Jo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, et();
    }), Qe.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !_e), _e = t, (_a2 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", _e), _e) {
        const n = Ze();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (De = n.settings.loads.rawVal, n.settings.loads.val = false), Ln(), Ce.querySelector("#cad3d-mode-prev").style.display = "", Ce.querySelector("#cad3d-mode-next").style.display = "", Ce.querySelector("#cad3d-mode-label").style.display = "";
      } else Cn(), Ce.querySelector("#cad3d-mode-prev").style.display = "none", Ce.querySelector("#cad3d-mode-next").style.display = "none", Ce.querySelector("#cad3d-mode-label").style.display = "none", T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
        var _a3;
        const n = Ze();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && De && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${_e ? "ON" : "OFF"}`);
    }, Qe.setMode = (t) => {
      var _a2;
      if (!(Le == null ? void 0 : Le.modeShapes)) {
        console.error("No modal results");
        return;
      }
      he = Math.max(0, Math.min(t, Le.modeShapes.length - 1));
      const o = Le.modeShapes[he], { extent: n } = $o();
      let l = 0;
      for (let c = 0; c < Te.length; c++) {
        const s = o[c * 6] || 0, r = o[c * 6 + 1] || 0, p = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + r * r + p * p));
      }
      Ye = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const a = Ce.querySelector("#cad3d-mode-label");
      a && Le.frequencies && (a.textContent = `Modo ${he + 1} \u2014 ${Le.frequencies[he].toFixed(2)} Hz`), console.log(`Modo ${he + 1}: f = ${(_a2 = Le.frequencies) == null ? void 0 : _a2[he].toFixed(4)} Hz`);
    }, window.cad = Qe, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ce), document.body.appendChild(pt.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (ot("muro-q4"), Vn(), Ts("muro-q4"), setTimeout(() => {
        T === "muro-q4" && lo();
      }, 200));
    }, 100);
    const tn = document.createElement("button");
    tn.id = "mobile-menu-btn", tn.innerHTML = "\u2630", tn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), tn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(tn);
    const mo = document.createElement("button");
    mo.id = "fullscreen-btn", mo.innerHTML = "\u26F6", mo.title = "Pantalla completa", mo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, mo.addEventListener("mouseenter", () => {
      mo.style.transform = "scale(1.15)";
    }), mo.addEventListener("mouseleave", () => {
      mo.style.transform = "scale(1)";
    }), mo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(mo), document.body.appendChild(Sl());
    const Us = document.createElement("span");
    return Us.style.display = "none", Us;
  };
});
export {
  __tla,
  ca as a,
  ul as c,
  tr as g
};
