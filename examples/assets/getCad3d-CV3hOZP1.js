const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-CToQkEkn.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as zt, _ as ta, p as Un, m as Ua, s as Xa, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as Jo, P as on, g as Ka, a as Za, o as Qa } from "./theme-CzzIlc4y.js";
import { G as sn, b as el, M as oa, D as na, B as to, c as xn, d as tl, C as ol, e as da, V as Ne, P as Io, R as sa, f as aa, g as Wo, h as Go, i as nl, S as sl, j as al, F as Lo, a as Yo, L as Co, k as ll, l as rl, A as dn, T as Xn, m as pn, n as fn, o as il, p as cl } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as bo } from "./analyze-ClLKGn9k.js";
import { g as ho, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as Po, s as xo, m as no, t as ns } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
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
  function dl(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
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
  function Ro(e, g) {
    const P = os.find((W) => W.id === e), M = Vo.find((W) => W.id === g), J = P.toKN, B = M.toM, Z = (W, he, T) => T / (Math.pow(J, W) * Math.pow(B, he));
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
      label: `${P.label}, ${M.label}`,
      force: P.label,
      length: M.label,
      stress: dl(e, g),
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
          val: 4,
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
    const g = e.force, [P, M, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: J,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: P,
          max: M,
          step: J,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
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
          min: P,
          max: 0,
          step: J,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: P,
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
    let g = false;
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
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((W, he) => {
        var _a2;
        const T = W > 0 ? 1 / W : 0, K = W * 2 * Math.PI, $e = ((_a2 = M.massParticipation) == null ? void 0 : _a2[he]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let pe = 0; pe < 6; pe++) Z[pe] += $e[pe];
        Y += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${he + 1}</td>
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
      }), Y += "</table></div>", e.innerHTML = Y, g) {
        const W = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        W && (W.style.display = "none"), he && (he.textContent = "\u25A2", he.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        g = !g;
        const W = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        g ? (W.style.display = "none", he.textContent = "\u25A2", he.title = "Restaurar") : (W.style.display = "block", he.textContent = "\u25AC", he.title = "Minimizar");
      });
      const H = e.querySelector("#modal-header");
      if (H) {
        let W = false, he = 0, T = 0, K = 0, $e = 0;
        H.addEventListener("mousedown", (pe) => {
          if (pe.target.tagName === "BUTTON") return;
          W = true, he = pe.clientX, T = pe.clientY;
          const ce = e.getBoundingClientRect();
          K = ce.left, $e = ce.top, pe.preventDefault();
        }), document.addEventListener("mousemove", (pe) => {
          if (!W) return;
          const ce = pe.clientX - he, oe = pe.clientY - T;
          e.style.left = K + ce + "px", e.style.top = $e + oe + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          W = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const W = [];
        W.push(`Modal Analysis \u2014 ${J.title}`);
        const he = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${B.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        W.push(he), W.push("-".repeat(he.length));
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
          const ce = $e > 0 ? 1 / $e : 0, oe = $e * 2 * Math.PI, _ = ((_a2 = M.massParticipation) == null ? void 0 : _a2[pe]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let G = 0; G < 6; G++) T[G] += _[G];
          const D = _.map((G) => ((G * 100).toFixed(1) + "%").padStart(6)).join(" ");
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
  const Pe = 64516e-8, N = 416231e-12, ae = 0.0254, ko = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Pe,
      Iz: 16.4 * N,
      Iy: 2.2 * N,
      J: 0.0405 * N,
      d: 5.9 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Pe,
      Iz: 29.1 * N,
      Iy: 9.32 * N,
      J: 0.103 * N,
      d: 5.99 * ae,
      bf: 5.99 * ae
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Pe,
      Iz: 41.4 * N,
      Iy: 13.3 * N,
      J: 0.204 * N,
      d: 6.2 * ae,
      bf: 6.02 * ae
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Pe,
      Iz: 30.8 * N,
      Iy: 2.09 * N,
      J: 0.0426 * N,
      d: 7.89 * ae,
      bf: 3.94 * ae
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Pe,
      Iz: 61.9 * N,
      Iy: 7.97 * N,
      J: 0.172 * N,
      d: 8.14 * ae,
      bf: 5.25 * ae
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Pe,
      Iz: 82.7 * N,
      Iy: 18.3 * N,
      J: 0.346 * N,
      d: 7.93 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Pe,
      Iz: 110 * N,
      Iy: 37.1 * N,
      J: 0.536 * N,
      d: 8 * ae,
      bf: 7.995 * ae
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Pe,
      Iz: 146 * N,
      Iy: 49.1 * N,
      J: 0.871 * N,
      d: 8.25 * ae,
      bf: 8.07 * ae
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Pe,
      Iz: 184 * N,
      Iy: 60.9 * N,
      J: 1.45 * N,
      d: 8.5 * ae,
      bf: 8.11 * ae
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Pe,
      Iz: 272 * N,
      Iy: 88.6 * N,
      J: 3.54 * N,
      d: 9 * ae,
      bf: 8.28 * ae
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Pe,
      Iz: 53.8 * N,
      Iy: 2.18 * N,
      J: 0.0547 * N,
      d: 9.87 * ae,
      bf: 3.96 * ae
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Pe,
      Iz: 118 * N,
      Iy: 11.4 * N,
      J: 0.239 * N,
      d: 10.17 * ae,
      bf: 5.75 * ae
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Pe,
      Iz: 171 * N,
      Iy: 36.6 * N,
      J: 0.583 * N,
      d: 9.73 * ae,
      bf: 7.96 * ae
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Pe,
      Iz: 272 * N,
      Iy: 93.4 * N,
      J: 1.39 * N,
      d: 9.98 * ae,
      bf: 10 * ae
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Pe,
      Iz: 394 * N,
      Iy: 134 * N,
      J: 3.56 * N,
      d: 10.4 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Pe,
      Iz: 623 * N,
      Iy: 207 * N,
      J: 10.9 * N,
      d: 11.1 * ae,
      bf: 10.34 * ae
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Pe,
      Iz: 88.6 * N,
      Iy: 2.36 * N,
      J: 0.0704 * N,
      d: 11.91 * ae,
      bf: 3.97 * ae
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Pe,
      Iz: 156 * N,
      Iy: 4.66 * N,
      J: 0.293 * N,
      d: 12.31 * ae,
      bf: 4.03 * ae
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Pe,
      Iz: 204 * N,
      Iy: 17.3 * N,
      J: 0.3 * N,
      d: 12.22 * ae,
      bf: 6.49 * ae
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Pe,
      Iz: 310 * N,
      Iy: 44.1 * N,
      J: 0.906 * N,
      d: 11.94 * ae,
      bf: 8.01 * ae
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Pe,
      Iz: 425 * N,
      Iy: 95.8 * N,
      J: 1.58 * N,
      d: 12.06 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Pe,
      Iz: 597 * N,
      Iy: 195 * N,
      J: 4.05 * N,
      d: 12.25 * ae,
      bf: 12.04 * ae
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Pe,
      Iz: 833 * N,
      Iy: 270 * N,
      J: 8.44 * N,
      d: 12.71 * ae,
      bf: 12.16 * ae
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Pe,
      Iz: 1070 * N,
      Iy: 345 * N,
      J: 16 * N,
      d: 13.12 * ae,
      bf: 12.32 * ae
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Pe,
      Iz: 199 * N,
      Iy: 7 * N,
      J: 0.208 * N,
      d: 13.74 * ae,
      bf: 5 * ae
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Pe,
      Iz: 291 * N,
      Iy: 19.6 * N,
      J: 0.38 * N,
      d: 13.84 * ae,
      bf: 6.73 * ae
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Pe,
      Iz: 385 * N,
      Iy: 26.7 * N,
      J: 0.798 * N,
      d: 14.1 * ae,
      bf: 6.77 * ae
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Pe,
      Iz: 485 * N,
      Iy: 51.4 * N,
      J: 1.45 * N,
      d: 13.79 * ae,
      bf: 8.03 * ae
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Pe,
      Iz: 640 * N,
      Iy: 107 * N,
      J: 2.19 * N,
      d: 13.89 * ae,
      bf: 9.99 * ae
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Pe,
      Iz: 882 * N,
      Iy: 148 * N,
      J: 5.07 * N,
      d: 14.31 * ae,
      bf: 10.13 * ae
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Pe,
      Iz: 1240 * N,
      Iy: 447 * N,
      J: 7.12 * N,
      d: 14.32 * ae,
      bf: 14.61 * ae
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Pe,
      Iz: 1530 * N,
      Iy: 548 * N,
      J: 12.3 * N,
      d: 14.66 * ae,
      bf: 14.73 * ae
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Pe,
      Iz: 2140 * N,
      Iy: 838 * N,
      J: 23.7 * N,
      d: 15.22 * ae,
      bf: 15.65 * ae
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Pe,
      Iz: 301 * N,
      Iy: 9.59 * N,
      J: 0.262 * N,
      d: 15.69 * ae,
      bf: 5.5 * ae
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Pe,
      Iz: 448 * N,
      Iy: 24.5 * N,
      J: 0.545 * N,
      d: 15.86 * ae,
      bf: 6.99 * ae
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Pe,
      Iz: 659 * N,
      Iy: 37.2 * N,
      J: 1.52 * N,
      d: 16.26 * ae,
      bf: 7.07 * ae
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Pe,
      Iz: 954 * N,
      Iy: 119 * N,
      J: 2.39 * N,
      d: 16.33 * ae,
      bf: 10.24 * ae
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Pe,
      Iz: 1300 * N,
      Iy: 163 * N,
      J: 5.45 * N,
      d: 16.75 * ae,
      bf: 10.37 * ae
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Pe,
      Iz: 510 * N,
      Iy: 15.3 * N,
      J: 0.506 * N,
      d: 17.7 * ae,
      bf: 6 * ae
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Pe,
      Iz: 800 * N,
      Iy: 40.1 * N,
      J: 1.24 * N,
      d: 17.99 * ae,
      bf: 7.5 * ae
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Pe,
      Iz: 1170 * N,
      Iy: 60.3 * N,
      J: 3.49 * N,
      d: 18.47 * ae,
      bf: 7.64 * ae
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Pe,
      Iz: 1750 * N,
      Iy: 201 * N,
      J: 5.86 * N,
      d: 18.59 * ae,
      bf: 11.15 * ae
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Pe,
      Iz: 843 * N,
      Iy: 20.7 * N,
      J: 0.77 * N,
      d: 20.66 * ae,
      bf: 6.5 * ae
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Pe,
      Iz: 1330 * N,
      Iy: 57.5 * N,
      J: 1.83 * N,
      d: 20.99 * ae,
      bf: 8.24 * ae
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Pe,
      Iz: 1830 * N,
      Iy: 81.4 * N,
      J: 4.34 * N,
      d: 21.43 * ae,
      bf: 8.36 * ae
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Pe,
      Iz: 2670 * N,
      Iy: 274 * N,
      J: 6.83 * N,
      d: 21.51 * ae,
      bf: 12.34 * ae
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Pe,
      Iz: 1350 * N,
      Iy: 29.1 * N,
      J: 1.18 * N,
      d: 23.57 * ae,
      bf: 7.01 * ae
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Pe,
      Iz: 2100 * N,
      Iy: 82.5 * N,
      J: 2.68 * N,
      d: 23.92 * ae,
      bf: 8.99 * ae
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Pe,
      Iz: 3100 * N,
      Iy: 259 * N,
      J: 4.72 * N,
      d: 24.06 * ae,
      bf: 12.75 * ae
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Pe,
      Iz: 4020 * N,
      Iy: 340 * N,
      J: 9.5 * N,
      d: 24.48 * ae,
      bf: 12.86 * ae
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Pe,
      Iz: 4580 * N,
      Iy: 391 * N,
      J: 12.6 * N,
      d: 24.74 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Pe,
      Iz: 5680 * N,
      Iy: 479 * N,
      J: 21.2 * N,
      d: 25.24 * ae,
      bf: 12.9 * ae
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Pe,
      Iz: 2850 * N,
      Iy: 106 * N,
      J: 2.81 * N,
      d: 26.71 * ae,
      bf: 9.96 * ae
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Pe,
      Iz: 4090 * N,
      Iy: 159 * N,
      J: 6.77 * N,
      d: 27.29 * ae,
      bf: 10.07 * ae
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Pe,
      Iz: 3610 * N,
      Iy: 115 * N,
      J: 3.06 * N,
      d: 29.53 * ae,
      bf: 10.4 * ae
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Pe,
      Iz: 4930 * N,
      Iy: 164 * N,
      J: 6.43 * N,
      d: 30.01 * ae,
      bf: 10.5 * ae
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Pe,
      Iz: 5900 * N,
      Iy: 187 * N,
      J: 5.3 * N,
      d: 32.86 * ae,
      bf: 11.48 * ae
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Pe,
      Iz: 7800 * N,
      Iy: 225 * N,
      J: 7 * N,
      d: 35.55 * ae,
      bf: 11.95 * ae
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Pe,
      Iz: 8.22 * N,
      Iy: 8.22 * N,
      J: 13.4 * N,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Pe,
      Iz: 10.7 * N,
      Iy: 10.7 * N,
      J: 17.9 * N,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Pe,
      Iz: 12.3 * N,
      Iy: 12.3 * N,
      J: 21 * N,
      d: 4 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Pe,
      Iz: 30.3 * N,
      Iy: 30.3 * N,
      J: 48.3 * N,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Pe,
      Iz: 41.1 * N,
      Iy: 41.1 * N,
      J: 66.9 * N,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Pe,
      Iz: 49.6 * N,
      Iy: 49.6 * N,
      J: 82.2 * N,
      d: 6 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Pe,
      Iz: 70.7 * N,
      Iy: 70.7 * N,
      J: 112 * N,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Pe,
      Iz: 98 * N,
      Iy: 98 * N,
      J: 158 * N,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Pe,
      Iz: 122 * N,
      Iy: 122 * N,
      J: 199 * N,
      d: 8 * ae,
      bf: 8 * ae
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Pe,
      Iz: 202 * N,
      Iy: 202 * N,
      J: 323 * N,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Pe,
      Iz: 254 * N,
      Iy: 254 * N,
      J: 412 * N,
      d: 10 * ae,
      bf: 10 * ae
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Pe,
      Iz: 355 * N,
      Iy: 355 * N,
      J: 564 * N,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Pe,
      Iz: 452 * N,
      Iy: 452 * N,
      J: 724 * N,
      d: 12 * ae,
      bf: 12 * ae
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Pe,
      Iz: 18 * N,
      Iy: 9.58 * N,
      J: 22.6 * N,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Pe,
      Iz: 23.8 * N,
      Iy: 12.3 * N,
      J: 30.3 * N,
      d: 6 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Pe,
      Iz: 33.6 * N,
      Iy: 11.8 * N,
      J: 33 * N,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Pe,
      Iz: 45.1 * N,
      Iy: 15 * N,
      J: 44.5 * N,
      d: 8 * ae,
      bf: 4 * ae
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Pe,
      Iz: 46.1 * N,
      Iy: 28.2 * N,
      J: 61.3 * N,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Pe,
      Iz: 63 * N,
      Iy: 37.5 * N,
      J: 84.6 * N,
      d: 8 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Pe,
      Iz: 103 * N,
      Iy: 47.1 * N,
      J: 115 * N,
      d: 10 * ae,
      bf: 6 * ae
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Pe,
      Iz: 196 * N,
      Iy: 102 * N,
      J: 249 * N,
      d: 12 * ae,
      bf: 8 * ae
    }
  ];
  function mn() {
    const e = {};
    return ko.forEach((g, P) => {
      g.type === "W" && (e[g.name] = P);
    }), e;
  }
  function bn() {
    const e = {};
    return ko.forEach((g, P) => {
      g.type === "HSS" && (e[g.name] = P);
    }), e;
  }
  function ml(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: P, elementInputs: M, nodeInputs: J, deformOutputs: B } = e, Z = g.length * 6, Y = P.length, H = P.filter((ce) => ce.length === 2).length, W = P.filter((ce) => ce.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${Y} (${H} frames, ${W} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((ce, oe) => {
      T += `<tr><td>${oe}</td><td>${at(ce[0])}</td><td>${at(ce[1])}</td><td>${at(ce[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', P.forEach((ce, oe) => {
      var _a2, _b2, _c2, _d2;
      const _ = ce.length === 2, D = ce.map((ye) => g[ye]), G = _ ? Po(xo(D[1], D[0])) : 0, ue = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(oe)) ?? 0, Me = ((_b2 = M.areas) == null ? void 0 : _b2.get(oe)) ?? 0, ze = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(oe)) ?? 0, Ve = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(oe)) ?? 0;
      T += `<tr><td>${oe}</td><td>${_ ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, T += `<td>${at(G)}</td><td>${at(ue)}</td><td>${at(Me)}</td><td>${at(ze)}</td><td>${at(Ve)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", H > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += gl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < Y; ce++) {
      const oe = P[ce], _ = oe.map((rt) => g[rt]);
      if (!(oe.length === 2)) continue;
      const G = Po(xo(_[1], _[0])), ue = ((_a = M.elasticities) == null ? void 0 : _a.get(ce)) ?? 0, Me = ((_b = M.areas) == null ? void 0 : _b.get(ce)) ?? 0, ze = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Ve = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, ye = ((_e = M.shearModuli) == null ? void 0 : _e.get(ce)) ?? 0, He = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let je = null, ge = null, ke = null;
      try {
        je = vn(_, M, ce), ge = yn(_), ke = no(ns(ge), no(je, ge));
      } catch {
        continue;
      }
      const Ae = xo(_[1], _[0]), Je = Ae[0] / G, lt = Ae[1] / G, Ue = Ae[2] / G;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${oe[0]} \u2192 ${oe[1]}, L = ${at(G)}</h3>`, T += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${at(ue)} &nbsp;&nbsp; A = ${at(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${at(ze)} &nbsp;&nbsp; I<sub>y</sub> = ${at(Ve)} &nbsp;&nbsp; G = ${at(ye)} &nbsp;&nbsp; J = ${at(He)}<br/>`, T += `EA/L = ${at(ue)}\xB7${at(Me)}/${at(G)} = <b>${at(ue * Me / G)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${at(ue)}\xB7${at(ze)}/${at(G)}\xB3 = <b>${at(12 * ue * ze / G ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${at(ue)}\xB7${at(Ve)}/${at(G)}\xB3 = <b>${at(12 * ue * Ve / G ** 3)}</b><br/>`, T += `GJ/L = ${at(ye)}\xB7${at(He)}/${at(G)} = <b>${at(ye * He / G)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${gn(Je)}, m = ${gn(lt)}, n = ${gn(Ue)}, D = ${gn(Math.sqrt(Je ** 2 + lt ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += Kn(je, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += Kn(ge, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += Kn(ke, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${oe[0]} \u2192 [${oe[0] * 6}..${oe[0] * 6 + 5}], node ${oe[1]} \u2192 [${oe[1] * 6}..${oe[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Y - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += hl(P, g.length), T += "<h2>5. Boundary Conditions</h2>";
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
        T += `<tr><td>${oe}</td>`, ce.forEach((_, D) => {
          _ && $e.push(oe * 6 + D), T += `<td class="${_ ? "fixed" : ""}">${_ ? "Fixed" : "Free"}</td>`;
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
      T += "</tr></thead><tbody>", J.loads.forEach((oe, _) => {
        T += `<tr><td>${_}</td>`, oe.forEach((D) => {
          const G = Math.abs(D) > 1e-10;
          T += `<td class="${G ? "nz" : ""}">${G ? at(D) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", B == null ? void 0 : B.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of K) T += `<th>${ce}</th>`;
      T += "</tr></thead><tbody>", B.deformations.forEach((ce, oe) => {
        T += `<tr><td>${oe}</td>`, ce.forEach((_) => {
          const D = Math.abs(_) > 1e-10;
          T += `<td class="${D ? "nz" : ""}">${at(_, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', B == null ? void 0 : B.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of K) T += `<th>${ce}</th>`;
      T += "</tr></thead><tbody>", B.reactions.forEach((ce, oe) => {
        T += `<tr><td>${oe}</td>`, ce.forEach((_) => {
          const D = Math.abs(_) > 1e-10;
          T += `<td class="${D ? "nz-react" : ""}">${D ? at(_, 4) : "0"}</td>`;
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
        const _ = P[oe];
        if (_.length !== 2) continue;
        const D = _.map((G) => g[G]);
        try {
          const G = vn(D, M, oe), ue = yn(D), Me = [];
          for (const ye of _) {
            const He = ((_g = B.deformations) == null ? void 0 : _g.get(ye)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Me.push(...He);
          }
          const ze = no(ue, Me), Ve = no(G, ze);
          T += `<tr><td>${oe}</td><td>${_.join("\u2192")}</td>`;
          for (let ye = 0; ye < 12; ye++) {
            const He = Math.abs(Ve[ye]) > 1e-10;
            T += `<td class="${He ? "nz" : ""}">${at(Ve[ye], 2)}</td>`;
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
    return he.innerHTML = pe + T, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((ce) => {
      ce.addEventListener("click", () => {
        const oe = ce.dataset.toggle, _ = he.querySelector(`#rpt-${oe}`);
        if (_) {
          const D = _.style.display !== "none";
          _.style.display = D ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function at(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function gn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Kn(e, g) {
    var _a;
    const P = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < P; J++) {
      M += "<tr>";
      for (let B = 0; B < P; B++) {
        const Z = ((_a = e[J]) == null ? void 0 : _a[B]) ?? 0, Y = Math.abs(Z) < 1e-10;
        M += `<td class="${Y ? "z" : ""} ${J === B && !Y ? "diag" : ""}">${Y ? "0" : bl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > P && (M += `<div style="color:#888;font-size:9pt">(showing ${P}\xD7${P} of ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function bl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function gl() {
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
      const he = 0.75, T = 30 + he * 540 + 8, K = 180 / 2 - H.fn(he) * 60 - 6;
      Y += `<text x="${T}" y="${K}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return Y += "</svg>", Y;
  }
  function hl(e, g) {
    const P = g * 6, M = Math.min(P, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let Z = 0; Z < M; Z++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
    J += "</tr>";
    const B = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let Z = 0; Z < e.length; Z++) {
      const Y = e[Z].map((H) => H * 6);
      for (const H of Y) for (const W of Y) for (let he = 0; he < 6; he++) for (let T = 0; T < 6; T++) {
        const K = H + he, $e = W + T;
        K < M && $e < M && B[K][$e]++;
      }
    }
    for (let Z = 0; Z < M; Z++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
      for (let Y = 0; Y < M; Y++) {
        const H = B[Z][Y], W = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", he = H === 0 ? "" : H.toString();
        J += `<td style="background:${W};color:#003366">${he}</td>`;
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
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const P = document.createElement("script");
    P.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", P.onload = () => {
      Zn = true, e();
    }, document.head.appendChild(P);
  }
  function la(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function vl(e, g, P, M, J, B) {
    var _a, _b, _c, _d, _e, _f;
    const Z = P[e], Y = Z.map((ge) => g[ge]), H = Z.length === 2, W = H ? Po(xo(Y[1], Y[0])) : 0, he = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, K = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, pe = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ce = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let oe = null, _ = null, D = null;
    try {
      oe = vn(Y, M, e), _ = yn(Y), D = no(ns(_), no(oe, _));
    } catch {
    }
    const G = H ? xo(Y[1], Y[0]) : [
      0,
      0,
      0
    ], ue = W > 0 ? G[0] / W : 0, Me = W > 0 ? G[1] / W : 0, ze = W > 0 ? G[2] / W : 0, Ve = Math.sqrt(ue ** 2 + Me ** 2), ye = [];
    if ((J == null ? void 0 : J.deformations) && H) for (const ge of Z) {
      const ke = J.deformations.get(ge) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ye.push(...ke);
    }
    let He = [], je = [];
    if (ye.length === 12 && _ && oe) {
      try {
        He = no(_, ye);
      } catch {
        He = Array(12).fill(0);
      }
      try {
        je = no(oe, He);
      } catch {
        je = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: Z,
      elmNodes: Y,
      isFrame: H,
      L: W,
      E: he,
      A: T,
      Iz: K,
      Iy: $e,
      G: pe,
      J: ce,
      kLocal: oe,
      T: _,
      kGlobal: D,
      l: ue,
      m: Me,
      n: ze,
      D: Ve,
      uGlobal: ye,
      uLocal: He,
      fLocal: je,
      dOut: J,
      aOut: B,
      totalNodes: g.length
    };
  }
  function yl(e, g, P, M, J, B) {
    var _a, _b;
    const Z = vl(e, g, P, M, J, B), Y = document.createElement("div");
    return Y.className = "er-panel", Y.innerHTML = El + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Z.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Z.elem.join(" \u2192 ")} \u2014 L = ${Ye(Z.L)}</span>
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
        Y.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), H.classList.add("active");
        const W = H.dataset.tab;
        Y.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), Y.querySelector(`#er-body-${W}`).style.display = "";
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
          const he = W.dataset.toggle, T = Y.querySelector(`#er-${he}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), Y;
  }
  function $l(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Ye(e.E)}</td><td>A</td><td>${Ye(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Ye(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ye(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Ye(e.G)}</td><td>J</td><td>${Ye(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += an(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += an(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += an(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const P = [
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
          g += `${P[J]}=<span class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Ye(B, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((P) => P !== 0)) {
      const P = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const M of P) g += `<th>${M}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function ra(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const P = (he) => la(he), M = (he) => la(he, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${P("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => Ye(he)).join(", ")})<br/>`, g += `${P("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => Ye(he)).join(", ")})<br/>`, g += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ye(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${P("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${P("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${P("I_z")})</div>`, g += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${P("I_y")})</div>`, g += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ye(e.E)} \\times ${Ye(e.A)} = \\mathbf{${Ye(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ye(e.E)} \\times ${Ye(e.Iz)} = \\mathbf{${Ye(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ye(e.E)} \\times ${Ye(e.Iy)} = \\mathbf{${Ye(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ye(e.G)} \\times ${Ye(e.J)} = \\mathbf{${Ye(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${P("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, B = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, Y = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${P("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.E)}\\times${Ye(e.A)}}{${Ye(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ye(J)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${P("v(\\xi)")}</p>`, g += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${P("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${P("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ye(e.E)} \\times ${Ye(e.Iz)}}{${Ye(e.L)}^3} = \\mathbf{${Ye(12 * B)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${P("\\theta_x")} y ${P("GJ")}:</p>`, g += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.G)}\\times${Ye(e.J)}}{${Ye(e.L)}} = \\mathbf{${Ye(Y)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${P("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Ye(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ye(12 * B)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ye(12 * Z)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Ye(Y)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ye(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ye(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${P("\\mathbf{K}_{local}")} (12x12)</div>`, g += an(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${hn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${hn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${hn(e.n)}`)}</div>`, g += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${hn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${P(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${M(he)}</div>`;
    } else g += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${P("\\mathbf{K}_{global}")} = ${P("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += an(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, W = e.elem[1] * 6;
    if (g += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, g += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, g += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((he) => he !== 0)) {
      const he = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const T of he) g += `<th>${T}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let T = 0; T < 6; T++) g += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[T], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) g += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[T], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ml(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Ye(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Ye(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Ye(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const P = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of P) g += `<th>${M}</th>`;
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
    if (e.fLocal.length > 0 && e.fLocal.some((P) => P !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const P = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const M of P) g += `<th>${M}</th>`;
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
  function hn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function an(e) {
    var _a;
    const g = e.length, P = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < P; J++) {
      M += "<tr>";
      for (let B = 0; B < P; B++) {
        const Z = ((_a = e[J]) == null ? void 0 : _a[B]) ?? 0, Y = Math.abs(Z) < 1e-10;
        M += `<td class="${Y ? "z" : ""} ${J === B && !Y ? "diag" : ""}">${Y ? "0" : wl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > P && (M += `<div style="color:var(--fem-label);font-size:9px">(${P}\xD7${P} de ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Qn(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const P = e.width, M = e.height, J = 30, B = P - 2 * J, Z = (M - 3 * J) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, P, M);
    const Y = (H, W, he) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(J, H, B, Z), g.strokeStyle = "#444", g.beginPath(), g.moveTo(J, H + Z / 2), g.lineTo(J + B, H + Z / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(W, J + 4, H + 14);
      for (const K of he) {
        g.strokeStyle = K.color, g.lineWidth = 2.5, g.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const pe = $e / 100, ce = J + pe * B, oe = H + Z / 2 - K.fn(pe) * (Z / 2 * 0.85);
          $e === 0 ? g.moveTo(ce, oe) : g.lineTo(ce, oe);
        }
        g.stroke();
      }
      let T = J + B - 90;
      for (const K of he) g.fillStyle = K.color, g.font = "bold 10px sans-serif", g.fillText(K.label, T, H + Z - 6), T += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", J, H + Z + 12), g.fillText("1", J + B - 6, H + Z + 12), g.fillText("\u03BE", J + B / 2, H + Z + 12);
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
  let Mn = false, Oo = null, lo = null, Bt = null, Lt = null;
  function Sl() {
    Lt = document.createElement("button"), Lt.id = "help-tour-btn", Lt.innerHTML = "?", Lt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const g = (M) => {
      Lt.style.cssText = M ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    g(false), Lt.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, g(e), Lt.innerHTML = "?";
    }), Lt.addEventListener("mouseenter", () => {
      Lt.style.transform = "scale(1.15)", Lt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Lt.addEventListener("mouseleave", () => {
      Lt.style.transform = "scale(1)", Lt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Lt.addEventListener("click", () => {
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
  `, document.head.appendChild(P), Lt;
  }
  function Il() {
    Mn = true, Lt && (Lt.innerHTML = "\u2715", Lt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Lt.style.animation = "none"), Oo = document.createElement("div"), Oo.id = "tour-overlay", Oo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Oo), Uo(0);
  }
  function ss() {
    Mn = false, Lt && (Lt.innerHTML = "?", Lt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Lt.style.animation = "helpPulse 2s infinite"), lo && (lo.remove(), lo = null), Bt && (Bt.remove(), Bt = null), Oo && (Oo.remove(), Oo = null);
  }
  function Uo(e) {
    var _a, _b;
    if (e >= nn.length) {
      kl();
      return;
    }
    const g = nn[e], P = document.querySelector(g.selector);
    if (!P) {
      Uo(e + 1);
      return;
    }
    P.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), lo && lo.remove(), Bt && Bt.remove();
    const M = P.getBoundingClientRect(), J = window.innerWidth, B = window.innerHeight, Z = 320, Y = 180;
    lo = document.createElement("div"), lo.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(lo);
    const H = J - M.right, W = M.left, he = B - M.bottom, T = M.top;
    let K = g.position || "bottom";
    K === "bottom" && he < Y + 20 && (K = "top"), K === "top" && T < Y + 20 && (K = "right"), K === "right" && H < Z + 20 && (K = "left"), K === "left" && W < Z + 20 && (K = "bottom");
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
    $e = Math.max(10, Math.min($e, J - Z - 10)), pe = Math.max(10, Math.min(pe, B - Y - 10)), Bt = document.createElement("div"), Bt.style.cssText = `
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
  `, Bt.innerHTML = `
    <div style="${ce}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${nn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < nn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${nn.map((_, D) => `<div style="width:${D === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${D === e ? "#0099ff" : D < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Bt), (_a = Bt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Uo(e + 1);
    }), (_b = Bt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Uo(e - 1);
    });
    const oe = (_) => {
      if (!Mn) {
        document.removeEventListener("keydown", oe);
        return;
      }
      (_.key === "ArrowRight" || _.key === "Enter") && (Uo(e + 1), document.removeEventListener("keydown", oe)), _.key === "ArrowLeft" && (Uo(Math.max(0, e - 1)), document.removeEventListener("keydown", oe)), _.key === "Escape" && (ss(), document.removeEventListener("keydown", oe));
    };
    document.addEventListener("keydown", oe);
  }
  function kl() {
    var _a;
    lo && (lo.remove(), lo = null), Bt && (Bt.remove(), Bt = null), Bt = document.createElement("div"), Bt.style.cssText = `
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
  function Tl(e) {
    var _a;
    const g = e.split(/\r?\n/), P = {
      force: "TONF",
      length: "M"
    }, M = [], J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = [], H = [], W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = [], K = [];
    let $e = "", pe = "";
    const ce = /* @__PURE__ */ new Map();
    for (const Re of g) {
      const _e = Re.trim();
      if (!_e || _e.startsWith("$")) {
        _e.startsWith("$ ") && (pe = _e.substring(2).trim());
        continue;
      }
      if (pe && (ce.has(pe) || ce.set(pe, []), ce.get(pe).push(Re)), pe === "CONTROLS") {
        const xe = _e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (P.force = xe[1], P.length = xe[2]);
        const Le = _e.match(/TITLE2\s+"([^"]+)"/);
        Le && ($e = Le[1]);
      }
      if (pe === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = _e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Le = xe[1], ve = xe[2] ? parseFloat(xe[2]) : 0, Te = xe[3] ? parseFloat(xe[3]) : void 0;
          M.push({
            name: Le,
            height: ve,
            elev: Te ?? 0
          });
        }
      }
      if (pe === "MATERIAL PROPERTIES") {
        const xe = _e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Le = xe[1];
          J.has(Le) || J.set(Le, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ve = J.get(Le);
          xe[2] && (ve.type = xe[2]);
          const Te = _e.match(/\bE\s+([\d.eE+-]+)/);
          Te && (ve.E = parseFloat(Te[1]));
          const Ge = _e.match(/\bU\s+([\d.eE+-]+)/);
          Ge && (ve.nu = parseFloat(Ge[1]), ve.G = ve.E / (2 * (1 + ve.nu)));
          const De = _e.match(/\bFY\s+([\d.eE+-]+)/);
          De && (ve.fy = parseFloat(De[1]));
          const ct = _e.match(/\bFC\s+([\d.eE+-]+)/);
          ct && (ve.fc = parseFloat(ct[1]));
          const mt = _e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          mt && (ve.density = parseFloat(mt[1]));
        }
      }
      if (pe === "FRAME SECTIONS") {
        const xe = _e.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Le = xe[1];
          B.has(Le) || B.set(Le, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ve = B.get(Le), Te = _e.match(/MATERIAL\s+"([^"]+)"/);
          Te && (ve.material = Te[1]);
          const Ge = _e.match(/SHAPE\s+"([^"]+)"/);
          Ge && (ve.shape = Ge[1]);
          const De = _e.match(/\bD\s+([\d.eE+-]+)/);
          De && (ve.D = parseFloat(De[1]));
          const ct = _e.match(/\bB\s+([\d.eE+-]+)/);
          ct && (ve.B = parseFloat(ct[1]));
          const mt = _e.match(/\bTF\s+([\d.eE+-]+)/);
          mt && (ve.TF = parseFloat(mt[1]));
          const We = _e.match(/\bTW\s+([\d.eE+-]+)/);
          We && (ve.TW = parseFloat(We[1]));
          const Xe = _e.match(/\bR\s+([\d.eE+-]+)/);
          Xe && (ve.R = parseFloat(Xe[1]));
          const pt = _e.match(/FILLMATERIAL\s+"([^"]+)"/);
          pt && (ve.fillMaterial = pt[1]);
          const it = _e.match(/I2MOD\s+([\d.eE+-]+)/);
          it && (ve.modI2 = parseFloat(it[1]));
          const bt = _e.match(/I3MOD\s+([\d.eE+-]+)/);
          bt && (ve.modI3 = parseFloat(bt[1]));
        }
      }
      if (pe === "POINT COORDINATES") {
        const xe = _e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && Z.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (pe === "LINE CONNECTIVITIES") {
        const xe = _e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && Y.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (pe === "POINT ASSIGNS") {
        const xe = _e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && W.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (pe === "LINE ASSIGNS") {
        const xe = _e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Le = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ve = _e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ve && (Le.rigidZone = parseFloat(ve[1]));
          const Te = _e.match(/RELEASE\s+"([^"]+)"/);
          Te && (Le.releases = Te[1].split(/\s+/));
          const Ge = _e.match(/ANG\s+([-\d.eE+]+)/);
          Ge && (Le.angle = parseFloat(Ge[1])), he.set(`${xe[1]}@${xe[2]}`, Le);
        }
      }
      if (pe === "GRIDS") {
        const xe = _e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && K.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (pe === "FRAME OBJECT LOADS") {
        const xe = _e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && T.push({
          line: xe[1],
          story: xe[2],
          type: xe[3],
          dir: xe[4],
          lc: xe[5],
          val: parseFloat(xe[6])
        });
      }
      if (pe === "AREA CONNECTIVITIES") {
        const xe = _e.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Le = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((ve) => ve.replace(/"/g, ""))) || [];
          H.push({
            name: xe[1],
            pts: Le,
            nStories: 0
          });
        }
      }
    }
    const oe = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Re = M.length - 1;
      oe.set(M[Re].name, M[Re].elev);
      for (let _e = Re - 1; _e >= 0; _e--) {
        const Le = oe.get(M[_e + 1].name) + M[_e].height;
        M[_e].elev = Le, oe.set(M[_e].name, Le);
      }
    }
    const _ = [], D = [], G = /* @__PURE__ */ new Map(), ue = (Re, _e) => `${Re}@${_e}`, Me = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
    for (const Re of Y) ze.set(Re.name, Re);
    for (const Re of Y) for (const [_e, xe] of he) {
      if (!_e.startsWith(Re.name + "@")) continue;
      const Le = xe.story, ve = M.findIndex((Te) => Te.name === Le);
      if (!(ve < 0)) if (Re.type === "COLUMN" || Re.type === "BRACE") {
        Me.add(ue(Re.pt2, Le));
        const Te = Math.max(Re.nStories, 1), Ge = Math.min(ve + Te, M.length - 1);
        Me.add(ue(Re.pt1, M[Ge].name));
      } else Me.add(ue(Re.pt1, Le)), Me.add(ue(Re.pt2, Le));
    }
    for (const [Re] of W) Me.add(Re);
    for (const Re of Me) {
      const [_e, xe] = Re.split("@"), Le = Z.get(_e), ve = oe.get(xe);
      Le === void 0 || ve === void 0 || (_.push([
        Le[0],
        Le[1],
        ve
      ]), D.push(Re), G.set(Re, _.length - 1));
    }
    const Ve = [], ye = [], He = [], je = [], ge = /* @__PURE__ */ new Map();
    for (const Re of Y) for (const [_e, xe] of he) {
      if (!_e.startsWith(Re.name + "@")) continue;
      const Le = xe.story, ve = M.findIndex((We) => We.name === Le);
      if (ve < 0) continue;
      let Te, Ge;
      if (Re.type === "COLUMN" || Re.type === "BRACE") {
        const We = Math.max(Re.nStories, 1), Xe = Math.min(ve + We, M.length - 1);
        Te = ue(Re.pt1, M[Xe].name), Ge = ue(Re.pt2, Le);
      } else Te = ue(Re.pt1, Le), Ge = ue(Re.pt2, Le);
      const De = G.get(Te), ct = G.get(Ge);
      if (De === void 0 || ct === void 0 || De === ct) continue;
      const mt = Ve.length;
      if (Ve.push([
        De,
        ct
      ]), ye.push(Re.name), He.push(Re.type), je.push(Le), ge.set(mt, xe.section), xe.rigidZone > 0 && rt.set(mt, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
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
        for (const pt of xe.releases) {
          const it = Xe[pt];
          it !== void 0 && (We[it] = true);
        }
        dt.set(mt, We);
      }
    }
    const ke = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
    for (const [Re, _e] of ge) {
      const xe = B.get(_e);
      if (!xe) continue;
      const Le = J.get(xe.material);
      Le && (ke.set(Re, Le.E), Ae.set(Re, Le.G));
      const ve = xe.D, Te = xe.B, Ge = xe.TF, De = xe.TW;
      let ct = 0, mt = 0, We = 0, Xe = 0, pt = 0, it = 0, bt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ct = ve * Te, mt = Te * ve ** 3 / 12, We = ve * Te ** 3 / 12, Xe = Te * ve ** 3 * (1 / 3 - 0.21 * (ve / Te) * (1 - ve ** 4 / (12 * Te ** 4))), pt = it = 5 / 6 * ct, bt = "rect";
          break;
        case "Concrete Circle":
          ct = Math.PI * ve ** 2 / 4, mt = We = Math.PI * ve ** 4 / 64, Xe = Math.PI * ve ** 4 / 32, pt = it = 0.9 * ct, bt = "circ";
          break;
        case "Steel I/Wide Flange":
          ct = 2 * Te * Ge + (ve - 2 * Ge) * De, mt = (Te * ve ** 3 - (Te - De) * (ve - 2 * Ge) ** 3) / 12, We = (2 * Ge * Te ** 3 + (ve - 2 * Ge) * De ** 3) / 12, Xe = (2 * Te * Ge ** 3 + (ve - 2 * Ge) * De ** 3) / 3, pt = (ve - 2 * Ge) * De, it = 2 * Te * Ge * 5 / 6, bt = "I";
          break;
        case "Steel Tube":
          ct = ve * Te - (ve - 2 * De) * (Te - 2 * De), mt = (Te * ve ** 3 - (Te - 2 * De) * (ve - 2 * De) ** 3) / 12, We = (ve * Te ** 3 - (ve - 2 * De) * (Te - 2 * De) ** 3) / 12, Xe = 2 * De * (ve - De) * (Te - De) * ((ve - De) * (Te - De)) / (ve - De + (Te - De)), pt = 2 * ve * De, it = 2 * Te * De, bt = "HSS";
          break;
        case "Filled Steel Tube":
          ct = ve * Te, mt = Te * ve ** 3 / 12, We = ve * Te ** 3 / 12, Xe = 2 * De * (ve - De) * (Te - De) * ((ve - De) * (Te - De)) / (ve - De + (Te - De)), pt = 2 * ve * De + 5 / 6 * (ve - 2 * De) * (Te - 2 * De), it = 2 * Te * De + 5 / 6 * (ve - 2 * De) * (Te - 2 * De), bt = "CFT";
          break;
        case "Steel Angle": {
          const Ht = Ge || De;
          ct = Ht * (ve + Te - Ht), mt = Ht * (ve ** 3 + Te * Ht ** 2 + Ht ** 2 * (ve - Ht)) / 12, We = Ht * (Te ** 3 + ve * Ht ** 2 + Ht ** 2 * (Te - Ht)) / 12, Xe = (ve + Te - Ht) * Ht ** 3 / 3, pt = ve * Ht, it = Te * Ht, bt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ct = 2 * Te * Ge + (ve - 2 * Ge) * De, mt = (De * ve ** 3 + 2 * Te * Ge * (ve - Ge) ** 2) / 12, We = (2 * Ge * Te ** 3 + (ve - 2 * Ge) * De ** 3) / 12, Xe = (2 * Te * Ge ** 3 + (ve - 2 * Ge) * De ** 3) / 3, pt = (ve - 2 * Ge) * De, it = 2 * Te * Ge * 5 / 6, bt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ct = 2 * (2 * Te * Ge + (ve - 2 * Ge) * De), mt = 2 * (De * ve ** 3 + 2 * Te * Ge * (ve - Ge) ** 2) / 12, We = 2 * (2 * Ge * Te ** 3 + (ve - 2 * Ge) * De ** 3) / 12, Xe = 2 * (2 * Te * Ge ** 3 + (ve - 2 * Ge) * De ** 3) / 3, pt = 2 * (ve - 2 * Ge) * De, it = 4 * Te * Ge * 5 / 6, bt = "2C";
          break;
        default:
          ve > 0 && Te > 0 && (ct = ve * Te, mt = Te * ve ** 3 / 12, We = ve * Te ** 3 / 12, Xe = Math.min(ve, Te) * Math.max(ve, Te) ** 3 / 3 * 0.3, pt = it = 5 / 6 * ct);
          break;
      }
      xe.modI2 && (We *= xe.modI2), xe.modI3 && (mt *= xe.modI3), Je.set(Re, ct), Mt.set(Re, mt), Ct.set(Re, We), Pt.set(Re, Xe), pt > 0 && lt.set(Re, pt), it > 0 && Ue.set(Re, it), ht.set(Re, {
        type: bt,
        b: Te || void 0,
        h: ve || void 0,
        d: bt === "circ" || bt === "pipe" ? ve : void 0,
        tw: De || void 0,
        tf: Ge || void 0,
        r: xe.R,
        name: _e
      });
    }
    const ut = /* @__PURE__ */ new Map();
    for (const [Re, _e] of W) {
      const xe = G.get(Re);
      if (xe === void 0) continue;
      const Le = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ve of _e) ve === "UX" && (Le[0] = true), ve === "UY" && (Le[1] = true), ve === "UZ" && (Le[2] = true), ve === "RX" && (Le[3] = true), ve === "RY" && (Le[4] = true), ve === "RZ" && (Le[5] = true);
      ut.set(xe, Le);
    }
    const ro = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
    for (let Re = 0; Re < ye.length; Re++) qe.set(`${ye[Re]}@${je[Re]}`, Re);
    for (const Re of T) {
      const _e = qe.get(`${Re.line}@${Re.story}`);
      if (_e === void 0) continue;
      const [xe, Le] = Ve[_e], ve = _[xe], Te = _[Le], Ge = Math.sqrt((Te[0] - ve[0]) ** 2 + (Te[1] - ve[1]) ** 2 + (Te[2] - ve[2]) ** 2);
      if (Ge < 1e-10) continue;
      const De = Re.val * Ge / 2;
      let ct = 0, mt = 0, We = 0;
      Re.dir === "GRAV" || Re.dir === "GRAVITY" ? We = -De : Re.dir === "X" ? ct = De : Re.dir === "Y" ? mt = De : Re.dir === "Z" && (We = -De);
      for (const Xe of [
        xe,
        Le
      ]) {
        const pt = ro.get(Xe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        pt[0] += ct, pt[1] += mt, pt[2] += We, ro.set(Xe, pt);
      }
    }
    const vt = /* @__PURE__ */ new Map();
    for (const [Re, _e] of ge) {
      const xe = B.get(_e);
      if (!xe) continue;
      const Le = J.get(xe.material);
      (Le == null ? void 0 : Le.density) && vt.set(Re, Le.density);
    }
    return {
      units: P,
      stories: M.reverse(),
      materials: J,
      frameSections: B,
      nodes: _,
      nodeNames: D,
      nodeNameToIdx: G,
      elements: Ve,
      elementNames: ye,
      elementTypes: He,
      elementStories: je,
      elementSections: ge,
      nodeInputs: {
        supports: ut,
        loads: ro
      },
      elementInputs: {
        elasticities: ke,
        shearModuli: Ae,
        areas: Je,
        momentsOfInertiaZ: Mt,
        momentsOfInertiaY: Ct,
        torsionalConstants: Pt,
        shearAreasY: lt,
        shearAreasZ: Ue,
        rigidOffsets: rt,
        momentReleases: dt,
        densities: vt,
        sectionShapes: ht
      },
      sectionShapes: ht,
      grids: K,
      info: {
        nNodes: _.length,
        nFrames: Ve.length,
        nAreas: H.length,
        title: $e
      },
      rawSections: ce
    };
  }
  function nt(e) {
    return e && parseFloat(e) || 0;
  }
  function pa(e) {
    const g = /* @__PURE__ */ new Map(), P = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = P.exec(e)) !== null; ) g.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return g;
  }
  function zl(e) {
    const g = e.split(/\r?\n/);
    return g.some((M) => M.trim().startsWith("TABLE:")) ? Al(g) : Ll(g);
  }
  function Al(e) {
    var _a, _b, _c, _d, _e, _f;
    const g = [];
    let P = "";
    for (const oe of e) {
      const _ = oe.trimEnd();
      _.endsWith("_") ? P += _.slice(0, -1) + " " : (P += _, g.push(P), P = "");
    }
    P && g.push(P);
    const M = {
      force: "KN",
      length: "m"
    };
    let J = "UX,UY,UZ,RX,RY,RZ";
    const B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = [], he = [], T = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), pe = [];
    let ce = "";
    for (const oe of g) {
      const _ = oe.trim();
      if (!_ || _.startsWith(";") || _.startsWith("File ")) continue;
      if (_.startsWith("TABLE:")) {
        const G = _.match(/TABLE:\s+"(.+?)"/);
        ce = G ? G[1].toUpperCase() : "";
        continue;
      }
      if (_ === "END TABLE DATA") {
        ce = "";
        continue;
      }
      const D = pa(_);
      switch (ce) {
        case "PROGRAM CONTROL": {
          const G = D.get("CurrUnits");
          if (G) {
            const ue = G.split(",").map((Me) => Me.trim());
            ue[0] && (M.force = ue[0]), ue[1] && (M.length = ue[1]);
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
            const ue = B.get(G) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ue.E = nt(D.get("E1")), ue.G = nt(D.get("G12")), ue.nu = nt(D.get("U12")), ue.density = nt(D.get("UnitMass")), B.set(G, ue);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const G = D.get("Material");
          G && B.has(G) && (B.get(G).fy = nt(D.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const G = D.get("SectionName");
          G && Z.set(G, {
            material: D.get("Material") || "",
            shape: D.get("Shape") || "Rectangular",
            D: nt(D.get("t3")),
            B: nt(D.get("t2")),
            TF: nt(D.get("tf")),
            TW: nt(D.get("tw")),
            A: nt(D.get("Area")),
            Iz: nt(D.get("I33")),
            Iy: nt(D.get("I22")),
            J: nt(D.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const G = D.get("Section");
          G && Y.set(G, {
            material: D.get("Material") || "",
            type: D.get("Type") || "Shell",
            thickness: nt(D.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const G = D.get("Joint");
          if (G) {
            const ue = nt(D.get("XorR")), Me = nt(D.get("Y")), ze = nt(D.get("Z"));
            H.set(G, [
              ue,
              Me,
              ze
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const G = D.get("Frame"), ue = D.get("JointI"), Me = D.get("JointJ");
          G && ue && Me && W.push({
            name: G,
            j1: ue,
            j2: Me
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const G = D.get("Area");
          if (G) {
            const ue = parseInt(D.get("NumJoints") || "4"), Me = [];
            for (let ze = 1; ze <= ue; ze++) {
              const Ve = D.get(`Joint${ze}`);
              Ve && Me.push(Ve);
            }
            Me.length >= 3 && he.push({
              name: G,
              joints: Me
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const G = D.get("Joint");
          if (G) {
            const ue = [
              ((_a = D.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = D.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = D.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = D.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = D.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = D.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            T.set(G, ue);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const G = D.get("Frame"), ue = D.get("AnalSect");
          G && ue && K.set(G, ue);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const G = D.get("Area"), ue = D.get("Section");
          G && ue && $e.set(G, ue);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const G = D.get("Joint");
          G && pe.push({
            joint: G,
            fx: nt(D.get("F1")),
            fy: nt(D.get("F2")),
            fz: nt(D.get("F3")),
            mx: nt(D.get("M1")),
            my: nt(D.get("M2")),
            mz: nt(D.get("M3"))
          });
          break;
        }
      }
    }
    return fa(M, J, B, Z, Y, H, W, he, T, K, $e, pe);
  }
  function Ll(e) {
    const g = {
      force: "KN",
      length: "m"
    };
    let P = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = [], H = [], W = /* @__PURE__ */ new Map(), he = [];
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
      const _ = pa(oe), D = oe.split(/\s+/);
      switch (T) {
        case "SYSTEM": {
          const G = _.get("DOF");
          G && (P = G);
          const ue = _.get("LENGTH");
          ue && (g.length = ue);
          const Me = _.get("FORCE");
          Me && (g.force = Me);
          break;
        }
        case "JOINT": {
          const G = D[0];
          Z.set(G, [
            nt(_.get("X")),
            nt(_.get("Y")),
            nt(_.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const G = _.get("ADD"), ue = _.get("DOF");
          if (G && ue) {
            const Me = ue.split(","), ze = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ve of Me) {
              const ye = Ve.toUpperCase();
              (ye === "UX" || ye === "U1") && (ze[0] = true), (ye === "UY" || ye === "U2") && (ze[1] = true), (ye === "UZ" || ye === "U3") && (ze[2] = true), (ye === "RX" || ye === "R1") && (ze[3] = true), (ye === "RY" || ye === "R2") && (ze[4] = true), (ye === "RZ" || ye === "R3") && (ze[5] = true);
            }
            W.set(G, ze);
          }
          break;
        }
        case "MATERIAL": {
          const G = _.get("NAME");
          if (G) K = G, M.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (K) {
            const ue = M.get(K), Me = _.get("E");
            Me && (ue.E = nt(Me));
            const ze = _.get("U");
            ze && (ue.nu = nt(ze)), ue.G = ue.E / (2 * (1 + ue.nu));
            const Ve = _.get("M");
            Ve && (ue.density = nt(Ve));
          }
          break;
        }
        case "SHELL": {
          const G = D[0], ue = _.get("J");
          _.get("SEC"), ue && H.push({
            name: G,
            joints: ue.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const G = _.get("NAME");
          G && B.set(G, {
            material: _.get("MAT") || "",
            type: _.get("TYPE") || "Shell",
            thickness: nt(_.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const G = D[0], ue = _.get("J");
          if (ue) {
            const Me = ue.split(",");
            Me.length >= 2 && Y.push({
              name: G,
              j1: Me[0],
              j2: Me[1]
            });
          }
          break;
        }
        case "LOAD": {
          const G = _.get("ADD");
          G && he.push({
            joint: G,
            fx: nt(_.get("UX")),
            fy: nt(_.get("UY")),
            fz: nt(_.get("UZ")),
            mx: nt(_.get("MX")),
            my: nt(_.get("MY")),
            mz: nt(_.get("MZ"))
          });
          break;
        }
      }
    }
    return fa(g, P, M, J, B, Z, Y, H, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), he);
  }
  function fa(e, g, P, M, J, B, Z, Y, H, W, he, T) {
    var _a;
    const K = [], $e = /* @__PURE__ */ new Map(), pe = [];
    for (const [ye, He] of B) $e.set(ye, pe.length), K.push(ye), pe.push(He);
    const ce = [], oe = [], _ = /* @__PURE__ */ new Map();
    for (const ye of Z) {
      const He = $e.get(ye.j1), je = $e.get(ye.j2);
      if (He !== void 0 && je !== void 0) {
        const ge = ce.length;
        ce.push([
          He,
          je
        ]), oe.push(ye.name);
        const ke = W.get(ye.name);
        ke && _.set(ge, ke);
      }
    }
    const D = ce.length;
    for (const ye of Y) {
      const He = ye.joints.map((je) => $e.get(je)).filter((je) => je !== void 0);
      if (He.length >= 3) {
        const je = ce.length;
        ce.push(He), oe.push(ye.name);
        const ge = he.get(ye.name);
        ge && _.set(je, ge);
      }
    }
    const G = ce.length - D, ue = {
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
    for (let ye = 0; ye < ce.length; ye++) {
      const He = _.get(ye), je = He ? M.get(He) : null, ge = He ? J.get(He) : null;
      if (je || ce[ye].length === 2) {
        const ke = je || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ae = P.get(ke.material) || ze, Je = Ae.E || ze.E, lt = Ae.nu || 0.3, Ue = Ae.G || Je / (2 * (1 + lt));
        ue.elasticities.set(ye, Je), ue.shearModuli.set(ye, Ue), ue.areas.set(ye, ke.A || ke.D * ke.B), ue.momentsOfInertiaZ.set(ye, ke.Iz || ke.B * ke.D ** 3 / 12), ue.momentsOfInertiaY.set(ye, ke.Iy || ke.D * ke.B ** 3 / 12), ue.torsionalConstants.set(ye, ke.J || 0), ue.densities.set(ye, Ae.density || 0), ((_a = ke.shape) == null ? void 0 : _a.includes("Wide Flange")) || ke.shape === "I" ? Me.set(ye, {
          type: "I",
          b: ke.B,
          h: ke.D,
          name: He || "I-section"
        }) : Me.set(ye, {
          type: "rect",
          b: ke.B,
          h: ke.D
        });
      } else if (ge) {
        const ke = P.get(ge.material) || ze, Ae = ke.E || ze.E, Je = ke.nu || 0.2, lt = ke.G || Ae / (2 * (1 + Je));
        ue.elasticities.set(ye, Ae), ue.shearModuli.set(ye, lt), ue.thicknesses.set(ye, ge.thickness), ue.poissonsRatios.set(ye, Je), ue.densities.set(ye, ke.density || 0);
      }
    }
    const Ve = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ye, He] of H) {
      const je = $e.get(ye);
      je !== void 0 && Ve.supports.set(je, He);
    }
    for (const ye of T) {
      const He = $e.get(ye.joint);
      if (He !== void 0) {
        const je = Ve.forces.get(He) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        je[0] += ye.fx, je[1] += ye.fy, je[2] += ye.fz, je[3] += ye.mx, je[4] += ye.my, je[5] += ye.mz, Ve.forces.set(He, je);
      }
    }
    return {
      units: e,
      dof: g,
      materials: P,
      frameSections: M,
      shellSections: J,
      nodes: pe,
      nodeNames: K,
      nodeNameToIdx: $e,
      elements: ce,
      elementNames: oe,
      elementSections: _,
      nodeInputs: Ve,
      elementInputs: ue,
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
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: J } = e, B = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", Y = [], H = (_) => Y.push(_), W = () => Y.push(" ");
    H(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), W(), H('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), H("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
    const he = [], T = [];
    if (P.forEach((_, D) => {
      _.length === 2 ? he.push(D) : T.push(D);
    }), he.length > 0) {
      H('TABLE:  "CONNECTIVITY - FRAME"');
      for (const _ of he) {
        const D = P[_];
        H(`   Frame=${_ + 1}   JointI=${D[0] + 1}   JointJ=${D[1] + 1}   IsCurved=No`);
      }
      W();
    }
    if (T.length > 0) {
      H('TABLE:  "CONNECTIVITY - AREA"');
      for (const _ of T) {
        const D = P[_], G = D.map((ue, Me) => `Joint${Me + 1}=${ue + 1}`).join("   ");
        H(`   Area=${_ + 1}   NumJoints=${D.length}   ${G}`);
      }
      W();
    }
    H('TABLE:  "COORDINATE SYSTEMS"'), H("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), W(), H('TABLE:  "DATABASE FORMAT TYPES"'), H("   UnitsCurr=Yes   OverrideE=No"), W();
    const K = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const _ of he) {
      const D = ((_a = J.areas) == null ? void 0 : _a.get(_)) || 0, G = ((_b = J.momentsOfInertiaZ) == null ? void 0 : _b.get(_)) || 0, ue = ((_c = J.momentsOfInertiaY) == null ? void 0 : _c.get(_)) || 0, Me = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(_)) || 0, ze = ((_e = J.elasticities) == null ? void 0 : _e.get(_)) || 0, Ve = `MAT_${Math.round(ze)}`, ye = `A${D.toPrecision(6)}_Iz${G.toPrecision(6)}`;
      if (!K.has(ye)) {
        let je = 0.3, ge = 0.3;
        D > 0 && G > 0 && (je = Math.sqrt(12 * G / D), ge = D / je), K.set(ye, {
          A: D,
          Iz: G,
          Iy: ue,
          J: Me,
          b: ge,
          h: je,
          matKey: Ve
        });
      }
      const He = [
        ...K.keys()
      ].indexOf(ye) + 1;
      $e.set(_, `SEC${He}`);
    }
    if (he.length > 0) {
      H('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const _ of he) {
        const D = $e.get(_) || "SEC1";
        H(`   Frame=${_ + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      W();
    }
    if (K.size > 0) {
      H('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let _ = 0;
      for (const [, D] of K) {
        _++;
        const G = D.A * 5 / 6;
        H(`   SectionName=SEC${_}   Material=${D.matKey}   Shape=Rectangular   t3=${At(D.h)}   t2=${At(D.b)}   Area=${At(D.A)}   TorsConst=${At(D.J)}   I33=${At(D.Iz)}   I22=${At(D.Iy)}   I23=0   AS2=${At(G)}   AS3=${At(G)} _`), H("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const pe = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
    for (const _ of T) {
      const D = ((_f = J.thicknesses) == null ? void 0 : _f.get(_)) || 0.1, G = ((_g = J.elasticities) == null ? void 0 : _g.get(_)) || 0, ue = `MAT_${Math.round(G)}`, Me = `t${D.toPrecision(6)}`;
      pe.has(Me) || pe.set(Me, {
        t: D,
        matKey: ue
      });
      const ze = [
        ...pe.keys()
      ].indexOf(Me) + 1;
      ce.set(_, `SSEC${ze}`);
    }
    if (T.length > 0) {
      H('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of T) {
        const G = ce.get(D) || "SSEC1";
        H(`   Area=${D + 1}   Section=${G}   MatProp=Default`);
      }
      W(), H('TABLE:  "AREA SECTION PROPERTIES"');
      let _ = 0;
      for (const [, D] of pe) _++, H(`   Section=SSEC${_}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${At(D.t)}   BendThick=${At(D.t)}   Color=Cyan`);
      W();
    }
    H('TABLE:  "JOINT COORDINATES"');
    for (let _ = 0; _ < g.length; _++) {
      const D = g[_];
      H(`   Joint=${_ + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${At(D[0])}   Y=${At(D[1])}   Z=${At(D[2])}   SpecialJt=No`);
    }
    if (W(), M.supports && M.supports.size > 0) {
      H('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [_, D] of M.supports) {
        if (!D.some((ue) => ue)) continue;
        const G = (ue) => ue ? "Yes" : "No";
        H(`   Joint=${_ + 1}   U1=${G(D[0])}   U2=${G(D[1])}   U3=${G(D[2])}   R1=${G(D[3])}   R2=${G(D[4])}   R3=${G(D[5])}`);
      }
      W();
    }
    if (H('TABLE:  "LOAD PATTERN DEFINITIONS"'), H("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), W(), H('TABLE:  "LOAD CASE DEFINITIONS"'), H('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), W(), H('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), H('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), W(), M.forces && M.forces.size > 0) {
      H('TABLE:  "JOINT LOADS - FORCE"');
      for (const [_, D] of M.forces) D.some((G) => Math.abs(G) > 1e-12) && H(`   Joint=${_ + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${At(D[0])}   F2=${At(D[1])}   F3=${At(D[2])}   M1=${At(D[3])}   M2=${At(D[4])}   M3=${At(D[5])}`);
      W();
    }
    const oe = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < P.length; _++) {
      const D = ((_h = J.elasticities) == null ? void 0 : _h.get(_)) || 0, G = ((_i = J.shearModuli) == null ? void 0 : _i.get(_)) || 0, ue = D > 0 && G > 0 ? Math.max(0, Math.min(0.5, D / (2 * G) - 1)) : 0.2, Me = ((_j = J.densities) == null ? void 0 : _j.get(_)) || 0, ze = `MAT_${Math.round(D)}`;
      oe.has(ze) || oe.set(ze, {
        E: D,
        nu: ue,
        G,
        rho: Me
      });
    }
    H('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [_] of oe) H(`   Material=${_}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    W(), H('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [_, D] of oe) H(`   Material=${_}   UnitWeight=${At(D.rho * 9.81)}   UnitMass=${At(D.rho)}   E1=${At(D.E)}   G12=${At(D.G)}   U12=${At(D.nu)}   A1=9.9E-06`);
    W(), H('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [_] of oe) H(`   Material=${_}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), H('TABLE:  "PROGRAM CONTROL"'), H(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${B.force}, ${B.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), H("END TABLE DATA"), H(""), Y.join(`\r
`);
  }
  function At(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Fl(e) {
    const { e2kModel: g } = e, P = g == null ? void 0 : g.rawSections;
    return P && P.size > 0 ? Rl(P) : Pl(e);
  }
  function Rl(e, g) {
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
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: J, title: B, units: Z } = e, Y = (Z == null ? void 0 : Z.force) || "TONF", H = (Z == null ? void 0 : Z.length) || "M", W = [], he = (ge) => Math.round(ge * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${Y}"  "${H}"  "C"  `), B && W.push(`  TITLE2  "${B}"  `), W.push("");
    const T = /* @__PURE__ */ new Set();
    g.forEach((ge) => T.add(he(ge[1])));
    const K = [
      ...T
    ].sort((ge, ke) => ge - ke), $e = [], pe = /* @__PURE__ */ new Map();
    $e.push("Base"), pe.set(K[0], "Base");
    for (let ge = 1; ge < K.length; ge++) {
      const ke = `Level_${ge}`;
      $e.push(ke), pe.set(K[ge], ke);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let ge = K.length - 1; ge >= 1; ge--) W.push(`  STORY "${$e[ge]}"  HEIGHT ${he(K[ge] - K[ge - 1])} MASTERSTORY "Yes"  `);
    K.length > 0 && W.push(`  STORY "Base"  ELEV ${K[0]} `), W.push(""), P.some((ge) => ge.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const oe = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((ge) => oe.add(ge));
    const _ = /* @__PURE__ */ new Map();
    let D = 0;
    for (const ge of oe) {
      const ke = `Mat_${++D}`;
      _.set(ge, ke), W.push(`  MATERIAL  "${ke}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${ke}"    SYMTYPE "Isotropic"  E ${ge}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const G = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    P.forEach((ge, ke) => {
      var _a2, _b2;
      if (ge.length !== 2) return;
      const Ae = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(ke), Je = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(ke)) ?? 0, lt = _.get(Je) || "Mat_1", Ue = (Ae == null ? void 0 : Ae.h) ?? 0, rt = (Ae == null ? void 0 : Ae.b) ?? 0, dt = (Ae == null ? void 0 : Ae.d) ?? 0, Mt = (Ae == null ? void 0 : Ae.tf) ?? 0, Ct = (Ae == null ? void 0 : Ae.tw) ?? 0, Pt = (Ae == null ? void 0 : Ae.type) || "rect", ht = `${Pt}_${Ue}_${rt}_${dt}_${Mt}_${Ct}`;
      (Ae == null ? void 0 : Ae.name) && !Me.has(ht) && Me.set(ht, Ae.name);
      let ut = Me.get(ht);
      if (ut || (Pt === "rect" ? ut = `R${he(rt * 100)}x${he(Ue * 100)}` : Pt === "circ" ? ut = `C_D${he(dt * 100)}` : Pt === "I" ? ut = `I_${he(Ue * 100)}` : ut = `Sec_${G.size + 1}`, Me.set(ht, ut)), ue.set(ke, ut), G.has(ut)) return;
      G.add(ut);
      const qe = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Pt] || "Concrete Rectangular";
      let vt = `  FRAMESECTION  "${ut}"  MATERIAL "${lt}"  SHAPE "${qe}"`;
      Ue && (vt += `  D ${Ue}`), rt && (vt += `  B ${rt}`), dt && !Ue && (vt += `  D ${dt}`), Mt && (vt += `  TF ${Mt}`), Ct && (vt += `  TW ${Ct}`), W.push(vt);
    }), W.push("");
    const ze = /* @__PURE__ */ new Map();
    let Ve = 0;
    g.forEach((ge) => {
      const ke = `${he(ge[0])},${he(ge[2])}`;
      ze.has(ke) || ze.set(ke, `${++Ve}`);
    }), W.push("$ POINT COORDINATES");
    for (const [ge, ke] of ze) {
      const [Ae, Je] = ge.split(",").map(Number);
      W.push(`  POINT "${ke}"  ${Ae} ${Je} `);
    }
    W.push("");
    const ye = (ge) => {
      const ke = g[ge], Ae = `${he(ke[0])},${he(ke[2])}`;
      return {
        pt: ze.get(Ae) || "1",
        story: pe.get(he(ke[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const He = [];
    P.forEach((ge, ke) => {
      if (ge.length !== 2) return;
      const Ae = Ol(g, ge), Je = ue.get(ke) || `Sec_${ke}`;
      if (Ae === "BEAM") {
        const lt = ye(ge[0]), Ue = ye(ge[1]);
        W.push(`  LINE  "E${ke + 1}"  BEAM  "${lt.pt}"  "${Ue.pt}"  0`), He.push(`  LINEASSIGN  "E${ke + 1}"  "${lt.story}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const lt = g[ge[0]][1] <= g[ge[1]][1] ? ge[0] : ge[1], Ue = g[ge[0]][1] <= g[ge[1]][1] ? ge[1] : ge[0];
        ye(lt);
        const rt = ye(Ue), dt = he(g[lt][1]), Mt = he(g[Ue][1]), Ct = K.indexOf(dt), Pt = K.indexOf(Mt), ht = Math.max(1, Pt >= 0 && Ct >= 0 ? Pt - Ct : 1);
        W.push(`  LINE  "E${ke + 1}"  ${Ae}  "${rt.pt}"  "${rt.pt}"  ${ht}`);
        for (let ut = 0; ut < ht; ut++) {
          const ro = Pt - ut;
          ro >= 0 && ro < $e.length && He.push(`  LINEASSIGN  "E${ke + 1}"  "${$e[ro]}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((ge, ke) => {
      const Ae = [];
      if (ge[0] && Ae.push("UX"), ge[1] && Ae.push("UY"), ge[2] && Ae.push("UZ"), ge[3] && Ae.push("RX"), ge[4] && Ae.push("RY"), ge[5] && Ae.push("RZ"), Ae.length > 0) {
        const Je = ye(ke);
        W.push(`  POINTASSIGN  "${Je.pt}"  "${Je.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), He.forEach((ge) => W.push(ge)), W.push("");
    const je = [];
    if (P.forEach((ge, ke) => {
      if (ge.length === 4) {
        const Ae = g[ge[0]], Je = g[ge[1]], lt = g[ge[2]], Ue = [
          Je[0] - Ae[0],
          Je[1] - Ae[1],
          Je[2] - Ae[2]
        ], rt = [
          lt[0] - Ae[0],
          lt[1] - Ae[1],
          lt[2] - Ae[2]
        ], dt = Math.abs(Ue[2] * rt[0] - Ue[0] * rt[2]), Mt = Math.sqrt((Ue[1] * rt[2] - Ue[2] * rt[1]) ** 2 + dt ** 2 + (Ue[0] * rt[1] - Ue[1] * rt[0]) ** 2), Ct = Mt > 1e-10 && dt / Mt < 0.5;
        je.push({
          idx: ke,
          el: ge,
          isWall: Ct
        });
      }
    }), je.some((ge) => !ge.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const ge = ((_c = J.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${ge} `), W.push("");
    }
    if (je.some((ge) => ge.isWall)) {
      W.push("$ WALL PROPERTIES");
      const ge = ((_d = J.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${ge} `), W.push("");
    }
    if (je.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const ge = [];
      je.forEach((ke, Ae) => {
        const { el: Je, isWall: lt } = ke, Ue = lt ? `W${Ae + 1}` : `F${Ae + 1}`, rt = lt ? "PANEL" : "FLOOR", dt = Je.map((Mt) => ye(Mt));
        if (lt) {
          const Mt = g[Je[0]][1] <= g[Je[2]][1] ? 0 : 2, Ct = g[Je[1]][1] <= g[Je[3]][1] ? 1 : 3;
          W.push(`  AREA "${Ue}"  ${rt}  4  "${dt[Mt].pt}"  "${dt[Ct].pt}"  "${dt[Ct].pt}"  "${dt[Mt].pt}"  1  1  0  0  `);
          const Pt = dt[Mt === 0 ? 2 : 0].story;
          ge.push(`  AREAASSIGN  "${Ue}"  "${Pt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${Ue}"  ${rt}  4  "${dt[0].pt}"  "${dt[1].pt}"  "${dt[2].pt}"  "${dt[3].pt}"  0  0  0  0  `), ge.push(`  AREAASSIGN  "${Ue}"  "${dt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), ge.forEach((ke) => W.push(ke)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), M.loads && M.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), M.loads.forEach((ge, ke) => {
      const [Ae, Je, lt] = ge, Ue = ye(ke);
      Math.abs(Ae) > 1e-10 && W.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Je) > 1e-10 && W.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FY ${Je}`), Math.abs(lt) > 1e-10 && W.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FZ ${lt}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Ol(e, g) {
    const P = e[g[0]], M = e[g[1]], J = Math.abs(M[1] - P[1]), B = Math.sqrt((M[0] - P[0]) ** 2 + (M[2] - P[2]) ** 2), Z = J > B * 0.5;
    return Z && B > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: J } = e, B = [];
    return B.push("# OpenSeesPy model exported from Awatif FEM Studio"), B.push(`# ${g.length} nodes, ${P.length} elements`), B.push(""), B.push("import openseespy.opensees as ops"), B.push(""), B.push("ops.wipe()"), B.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), B.push(""), B.push("# --- Nodes ---"), g.forEach((Z, Y) => {
      B.push(`ops.node(${Y + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, Y) => {
      const H = Z.map((W) => W ? 1 : 0).join(", ");
      B.push(`ops.fix(${Y + 1}, ${H})`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), B.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), B.push(""), B.push("# --- Elements (elasticBeamColumn) ---"), P.forEach((Z, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const H = g[Z[0]], W = g[Z[1]], T = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, K = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, $e = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, pe = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ce = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, oe = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, _ = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      B.push(`ops.element('elasticBeamColumn', ${Y + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${K}, ${$e}, ${pe}, ${ce}, ${oe}, ${_}, ${T})`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("ops.timeSeries('Linear', 1)"), B.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((Z, Y) => {
      const H = Z.map((W) => W).join(", ");
      B.push(`ops.load(${Y + 1}, ${H})`);
    }), B.push("")), B.push("# --- Analysis ---"), B.push("ops.system('BandGeneral')"), B.push("ops.numberer('RCM')"), B.push("ops.constraints('Plain')"), B.push("ops.integrator('LoadControl', 1.0)"), B.push("ops.algorithm('Linear')"), B.push("ops.analysis('Static')"), B.push("ops.analyze(1)"), B.push(""), B.push("# --- Results ---"), B.push('print("\\n=== Displacements ===")'), g.forEach((Z, Y) => {
      B.push(`print(f"Node {${Y + 1}}: {ops.nodeDisp(${Y + 1})}")`);
    }), B.push(""), B.push('print("\\n=== Reactions ===")'), B.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, Y) => {
      B.push(`print(f"Node {${Y + 1}}: {ops.nodeReaction(${Y + 1})}")`);
    }), B.join(`
`);
  }
  function ql(e) {
    var _a, _b;
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: J } = e, B = [];
    return B.push("# OpenSees Tcl model exported from Awatif FEM Studio"), B.push(`# ${g.length} nodes, ${P.length} elements`), B.push(""), B.push("wipe"), B.push("model basic -ndm 3 -ndf 6"), B.push(""), B.push("# --- Nodes ---"), g.forEach((Z, Y) => {
      B.push(`node ${Y + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, Y) => {
      const H = Z.map((W) => W ? 1 : 0).join(" ");
      B.push(`fix ${Y + 1} ${H}`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("geomTransf Linear 1 0.0 0.0 1.0"), B.push("geomTransf Linear 2 -1.0 0.0 0.0"), B.push(""), B.push("# --- Elements ---"), P.forEach((Z, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const H = g[Z[0]], W = g[Z[1]], T = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, K = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, $e = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, pe = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ce = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, oe = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, _ = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      B.push(`element elasticBeamColumn ${Y + 1} ${Z[0] + 1} ${Z[1] + 1} ${K} ${$e} ${pe} ${ce} ${oe} ${_} ${T}`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("timeSeries Linear 1"), B.push("pattern Plain 1 1 {"), M.loads.forEach((Z, Y) => {
      const H = Z.map((W) => W).join(" ");
      B.push(`  load ${Y + 1} ${H}`);
    }), B.push("}"), B.push("")), B.push("# --- Analysis ---"), B.push("system BandGeneral"), B.push("numberer RCM"), B.push("constraints Plain"), B.push("integrator LoadControl 1.0"), B.push("algorithm Linear"), B.push("analysis Static"), B.push("analyze 1"), B.push(""), B.push("# --- Results ---"), B.push('puts "\\n=== Displacements ==="'), g.forEach((Z, Y) => {
      B.push(`puts "Node ${Y + 1}: [nodeDisp ${Y + 1}]"`);
    }), B.push('puts "\\n=== Reactions ==="'), B.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, Y) => {
      B.push(`puts "Node ${Y + 1}: [nodeReaction ${Y + 1}]"`);
    }), B.join(`
`);
  }
  function _l(e) {
    const g = [], P = [], M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const pe = $e.trim(), ce = pe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const G = parseInt(ce[1]), ue = g.length;
        g.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), T.set(G, ue);
        continue;
      }
      const oe = pe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (oe) {
        const G = parseInt(oe[1]), ue = T.get(G);
        ue !== void 0 && M.set(ue, [
          oe[2] === "1",
          oe[3] === "1",
          oe[4] === "1",
          oe[5] === "1",
          oe[6] === "1",
          oe[7] === "1"
        ]);
        continue;
      }
      const _ = pe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const G = parseInt(_[1]), ue = T.get(parseInt(_[2])), Me = T.get(parseInt(_[3]));
        if (ue !== void 0 && Me !== void 0) {
          const ze = P.length;
          P.push([
            ue,
            Me
          ]), K.set(G, ze), Y.set(ze, parseFloat(_[4])), B.set(ze, parseFloat(_[5])), Z.set(ze, parseFloat(_[6])), he.set(ze, parseFloat(_[7])), H.set(ze, parseFloat(_[8])), W.set(ze, parseFloat(_[9]));
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
      nodes: g,
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
        torsionalConstants: he
      }
    };
  }
  function Dl(e) {
    const g = [], P = [], M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const K of e.split(/\r?\n/)) {
      const $e = K.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const pe = $e.split(/\s+/);
      if (pe[0] === "node" && pe.length >= 5) {
        const ce = parseInt(pe[1]), oe = g.length;
        g.push([
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
          const _ = P.length;
          P.push([
            ce,
            oe
          ]), Y.set(_, parseFloat(pe[5])), B.set(_, parseFloat(pe[6])), Z.set(_, parseFloat(pe[7])), he.set(_, parseFloat(pe[8])), H.set(_, parseFloat(pe[9])), W.set(_, parseFloat(pe[10]));
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
      nodes: g,
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
        torsionalConstants: he
      }
    };
  }
  function Ut(e) {
    const g = [];
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
        g.push(J.trim()), J = "";
        continue;
      }
      J += Z;
    }
    return J.trim() && g.push(J.trim()), g;
  }
  function ua(e, g) {
    const P = Ut(e);
    if (g < P.length) {
      let M = P[g].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function Bl(e) {
    const g = {
      schema: "",
      project: "",
      app: ""
    }, P = {}, M = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (g.schema = J[1]);
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
        H && (g.project = H);
      }
    }
    return {
      meta: g,
      entities: P,
      typeIndex: M
    };
  }
  function Wt(e, g) {
    const P = g.match(/#(\d+)/);
    return P && e[parseInt(P[1])] || null;
  }
  function ma(e, g) {
    const P = Ut(g.args), M = Wt(e, P[0]), J = M ? Hl(e, M) : [
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
      const Y = Wt(e, P[1]);
      Y && (B = ia(e, Y));
    }
    if (P[2] && P[2] !== "$") {
      const Y = Wt(e, P[2]);
      Y && (Z = ia(e, Y));
    }
    return {
      origin: J,
      dirZ: B,
      dirX: Z
    };
  }
  function Hl(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ia(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ba(e, g) {
    const P = Ut(g.args), M = Wt(e, P[1]);
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
      const B = Wt(e, P[0]);
      if (B && B.type === "IFCLOCALPLACEMENT") {
        const Z = ba(e, B), Y = ts(J.origin, Z.dirX, es(Z.dirZ, Z.dirX), Z.dirZ);
        J.origin = [
          Z.origin[0] + Y[0],
          Z.origin[1] + Y[1],
          Z.origin[2] + Y[2]
        ], J.dirZ = ts(J.dirZ, Z.dirX, es(Z.dirZ, Z.dirX), Z.dirZ), J.dirX = ts(J.dirX, Z.dirX, es(Z.dirZ, Z.dirX), Z.dirZ);
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
  function ts(e, g, P, M) {
    return [
      e[0] * g[0] + e[1] * P[0] + e[2] * M[0],
      e[0] * g[1] + e[1] * P[1] + e[2] * M[1],
      e[0] * g[2] + e[1] * P[2] + e[2] * M[2]
    ];
  }
  const jl = 0.01;
  function Wl(e) {
    const g = Bl(e), { entities: P, typeIndex: M } = g, J = [], B = [], Z = /* @__PURE__ */ new Map();
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
    function W(oe, _, D) {
      for (const G of J) {
        const ue = G.x - oe, Me = G.y - _, ze = G.z - D;
        if (Math.sqrt(ue * ue + Me * Me + ze * ze) < jl) return G.id;
      }
      return J.push({
        id: Y,
        x: oe,
        y: _,
        z: D
      }), Y++;
    }
    function he(oe) {
      const _ = ua(oe.args, 2) || "", D = M.IFCRELASSOCIATESMATERIAL || [];
      for (const ue of D) {
        const Me = P[ue];
        if (!Me) continue;
        const ze = Ut(Me.args);
        if ((ze[4] || ze[3] || "").includes(`#${oe.id}`)) {
          const ye = ze[5] || ze[4] || "", He = Wt(P, ye);
          if (He) return T(He);
        }
      }
      const G = _.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return G ? {
        b: parseFloat(G[1]) / 100,
        h: parseFloat(G[2]) / 100,
        name: _
      } : {
        b: 0.3,
        h: 0.3,
        name: _ || "Default"
      };
    }
    function T(oe) {
      const _ = oe.type;
      if (_ === "IFCRECTANGLEPROFILEDEF") {
        const D = Ut(oe.args), G = (D[1] || "").replace(/'/g, ""), ue = parseFloat(D[3]) || 0.3, Me = parseFloat(D[4]) || 0.3;
        return {
          b: ue,
          h: Me,
          name: G
        };
      }
      if (_ === "IFCMATERIALPROFILE") {
        const D = Ut(oe.args), G = D[2] || D[1] || "", ue = Wt(P, G);
        if (ue) return T(ue);
      }
      if (_ === "IFCMATERIALPROFILESET") {
        const D = Ut(oe.args), ue = (D[2] || D[1] || "").match(/#(\d+)/);
        if (ue) {
          const Me = P[parseInt(ue[1])];
          if (Me) return T(Me);
        }
      }
      if (_ === "IFCMATERIALPROFILESETUSAGE") {
        const G = Ut(oe.args)[0], ue = Wt(P, G);
        if (ue) return T(ue);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function K(oe, _, D, G) {
      const ue = M[oe] || [];
      for (const Me of ue) {
        const ze = P[Me];
        if (!ze) continue;
        const Ve = Ut(ze.args), ye = Ve[5] || Ve[4] || "", He = Wt(P, ye);
        if (!He) continue;
        const je = ba(P, He), ge = he(ze);
        let ke = G, Ae = null, Je = null;
        const lt = Ve[6] || Ve[5] || "", Ue = Wt(P, lt);
        if (Ue) {
          const ut = $n(P, Ue);
          ut && (ke = ut.depth || G, Ae = ut.origin, Je = ut.direction);
        }
        const rt = Ae ? Ae[0] : je.origin[0], dt = Ae ? Ae[1] : je.origin[1], Mt = Ae ? Ae[2] : je.origin[2], Ct = Je || (D === "Z" ? je.dirZ : je.dirX), Pt = W(rt, dt, Mt), ht = W(rt + Ct[0] * ke, dt + Ct[1] * ke, Mt + Ct[2] * ke);
        B.push({
          id: H++,
          type: "frame",
          nodeIds: [
            Pt,
            ht
          ],
          category: _,
          sectionName: ge.name,
          b: ge.b,
          h: ge.h,
          material: "Hormigon",
          expressID: Me
        });
      }
    }
    K("IFCCOLUMN", "column", "Z", 3), K("IFCBEAM", "beam", "X", 5), K("IFCMEMBER", "diagonal", "X", 4), K("IFCPILE", "pile", "Z", 10), K("IFCSTAIRFLIGHT", "stair", "X", 3), K("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(oe, _, D) {
      const G = M[oe] || [];
      for (const ue of G) {
        const Me = P[ue];
        if (!Me) continue;
        const ze = Ut(Me.args), Ve = ze[5] || ze[4] || "";
        if (!Wt(P, Ve)) continue;
        let He = D;
        const je = ze[6] || ze[5] || "", ge = Wt(P, je);
        ge && (He = Gl(P, ge) || D);
        const ke = _ === "slab" ? `Losa e=${(He * 100).toFixed(0)}cm` : _ === "wall" ? `Muro e=${(He * 100).toFixed(0)}cm` : _ === "footing" ? `Zapata e=${(He * 100).toFixed(0)}cm` : `${_} e=${(He * 100).toFixed(0)}cm`;
        B.push({
          id: H++,
          type: "shell",
          nodeIds: [],
          category: _,
          sectionName: ke,
          b: He,
          h: He,
          material: "Hormigon",
          expressID: ue
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const pe = [], ce = M.IFCBUILDINGSTOREY || [];
    for (const oe of ce) {
      const _ = P[oe];
      if (!_) continue;
      const D = Ut(_.args), G = (D[2] || "").replace(/'/g, ""), ue = parseFloat(D[9]) || 0;
      pe.push({
        name: G,
        elevation: ue
      });
    }
    return pe.sort((oe, _) => oe.elevation - _.elevation), {
      nodes: J,
      elements: B,
      materials: Z,
      levels: pe,
      projectName: g.meta.project,
      schema: g.meta.schema
    };
  }
  function $n(e, g) {
    const P = Ut(g.args);
    for (const M of P) {
      const J = M.match(/#(\d+)/g) || [];
      for (const B of J) {
        const Z = parseInt(B.replace("#", "")), Y = e[Z];
        if (Y) {
          if (Y.type === "IFCEXTRUDEDAREASOLID") {
            const H = Ut(Y.args), W = parseFloat(H[3]) || 0, he = Wt(e, H[1]);
            let T = [
              0,
              0,
              0
            ];
            he && (T = ma(e, he).origin);
            const K = Wt(e, H[2]);
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
            const H = Ut(Y.args), W = Wt(e, H[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const he = Ut(W.args), T = Wt(e, he[1]);
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
  function Gl(e, g) {
    const P = $n(e, g);
    return P ? P.depth : null;
  }
  const ga = [
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
  for (const [e, g] of ga) xa.set(e, g);
  function Yl(e) {
    return xa.get(e) ?? "other";
  }
  new Set(ha);
  async function Jl(e, g) {
    var _a, _b;
    const P = window.WebIFC;
    if (!P) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new P.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(J), await M.Init();
    const B = M.OpenModel(new Uint8Array(g)), Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = {
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
    for (const [$e] of ga) {
      const pe = Yl($e);
      try {
        const ce = M.GetLineIDsWithType(B, $e);
        for (let oe = 0; oe < ce.size(); oe++) {
          const _ = ce.get(oe);
          Z.set(_, pe);
          let D = "";
          try {
            const G = M.GetLine(B, _);
            D = ((_a = G == null ? void 0 : G.Name) == null ? void 0 : _a.value) || ((_b = G == null ? void 0 : G.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          Y.set(_, {
            expressID: _,
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
    const he = new el();
    let T = 0;
    const K = new oa({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: na
    });
    return M.StreamAllMeshes(B, ($e) => {
      const pe = Z.get($e.expressID) ?? "other", ce = W.get(pe), oe = $e.geometries;
      for (let _ = 0; _ < oe.size(); _++) {
        const D = oe.get(_), G = M.GetGeometry(B, D.geometryExpressID), ue = M.GetVertexArray(G.GetVertexData(), G.GetVertexDataSize()), Me = M.GetIndexArray(G.GetIndexData(), G.GetIndexDataSize()), ze = new to(), Ve = new Float32Array(ue.length / 2), ye = new Float32Array(ue.length / 2);
        for (let Ae = 0; Ae < ue.length; Ae += 6) {
          const Je = Ae / 2;
          Ve[Je] = ue[Ae], Ve[Je + 1] = ue[Ae + 1], Ve[Je + 2] = ue[Ae + 2], ye[Je] = ue[Ae + 3], ye[Je + 1] = ue[Ae + 4], ye[Je + 2] = ue[Ae + 5];
        }
        ze.setAttribute("position", new xn(Ve, 3)), ze.setAttribute("normal", new xn(ye, 3)), ze.setIndex(new xn(new Uint32Array(Me), 1));
        const He = new tl();
        He.fromArray(D.flatTransformation);
        let je;
        const ge = D.color;
        ge && (ge.x !== 1 || ge.y !== 1 || ge.z !== 1) ? je = new oa({
          color: new ol(ge.x, ge.y, ge.z),
          transparent: ge.w < 1,
          opacity: ge.w,
          side: na
        }) : je = K, je._origOpacity = je.opacity;
        const ke = new da(ze, je);
        ke.applyMatrix4(He), ke.userData.expressID = $e.expressID, ke.userData.category = pe, ce.add(ke), he.expandByObject(ke), T++, G.delete();
      }
    }), M.CloseModel(B), {
      meshCount: T,
      bbox: he,
      detailCategories: W,
      elementInfo: Y
    };
  }
  ca = Jo.state(false);
  tr = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let g = "tonf", P = "m", M = Ro(g, P), J = {
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
    const W = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let T = "", K = {}, $e = null, pe = "", ce = [], oe = [], _ = [], D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ve = null, ye = [], He = 0.2, je = 2, ge = 2, ke = false, Ae = 2, Je = "x", lt = /* @__PURE__ */ new Set(), Ue = true, rt = 0.15, dt = 2, Mt = 2, Ct = /* @__PURE__ */ new Set(), Pt = false, ht = "perimeter";
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
    }), ro = (t, o) => ({
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
        length: o
      }, ut)
    }), qe = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let vt = 0, Re = 3, _e = false, xe = 0, Le = null, ve = 0, Te = [], Ge = 1, De = true;
    const ct = ul();
    ct.div.style.display = "none";
    function mt() {
      const t = un()[T];
      return t && t[vt] ? t[vt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let We = [], Xe = [], pt = 0, it = [], bt = null;
    function Ht() {
      if (!bt) return;
      const t = Ze();
      t && t.scene.remove(bt), bt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), bt = null;
    }
    function as(t, o, n, l, a) {
      Ht();
      const i = Ze();
      if (!i) return;
      bt = new sn(), bt.name = "refGrid";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), c = Math.max(...o), d = Math.max(...n), b = r - s || 1, S = c - p || 1, $ = 3359829, y = 2241348;
      for (const h of n) {
        for (const I of o) {
          const L = new to().setFromPoints([
            new Ne(s, h, I),
            new Ne(r, h, I)
          ]), z = new Wo({
            color: $,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new Co(L, z);
          O.computeLineDistances(), O.renderOrder = -10, bt.add(O);
        }
        for (const I of t) {
          const L = new to().setFromPoints([
            new Ne(I, h, p),
            new Ne(I, h, c)
          ]), z = new Wo({
            color: $,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new Co(L, z);
          O.computeLineDistances(), O.renderOrder = -10, bt.add(O);
        }
      }
      for (const h of t) for (const I of o) {
        const L = new to().setFromPoints([
          new Ne(h, 0, I),
          new Ne(h, d, I)
        ]), z = new Wo({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), O = new Co(L, z);
        O.computeLineDistances(), O.renderOrder = -10, bt.add(O);
      }
      const f = Math.min(b, S) * 0.015;
      for (const h of n) for (const I of t) for (const L of o) {
        const z = [
          new Ne(I - f, h, L),
          new Ne(I + f, h, L),
          new Ne(I, h, L - f),
          new Ne(I, h, L + f)
        ], O = new to().setFromPoints(z), k = new Yo({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new Go(O, k);
        m.renderOrder = -5, bt.add(m);
      }
      bt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), i.scene.add(bt), i.render();
    }
    let Ot = null;
    function ls() {
      if (!Ot) return;
      const t = Ze();
      t && t.scene.remove(Ot), Ot.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ot = null;
    }
    function Xo(t, o, n, l, a) {
      ls();
      const i = Ze();
      if (!i) return;
      Ot = new sn(), Ot.name = "gridAxes";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), c = Math.max(...o), d = r - s || 1, b = c - p || 1, S = Math.max(d, b), $ = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), h = S * 0.018, I = o.length <= 1, L = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -$ - h * 1.5;
          In(u, 0, 0, u, 0, E + h, L, Ot), kn(y[m] || `${m}`, u, 0, E, h, Ot);
        } else {
          const E = p - $ - h * 1.5;
          In(u, p, 0, u, E + h, 0, L, Ot), kn(y[m] || `${m}`, u, E, 0, h, Ot);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], E = s - $ - h * 1.5;
        In(s, u, 0, E + h, u, 0, L, Ot), kn(f[m] || `${m}`, E, u, 0, h, Ot);
      }
      const z = h * 1.8, O = $ * 1.2, k = $ * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], A = Math.abs(E - u), R = (u + E) / 2, j = `${A.toFixed(2)} m`;
        I ? (En(j, R, 0, -O, z, Ot), Sn(u, 0, -O * 0.7, E, 0, -O * 0.7, 16763904, Ot)) : (En(j, R, p - k, 0, z, Ot), Sn(u, p - k * 0.7, 0, E, p - k * 0.7, 0, 16763904, Ot));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], E = o[m + 1], A = Math.abs(E - u), R = (u + E) / 2, j = `${A.toFixed(2)} m`;
        En(j, s - O, R, 0, z, Ot), Sn(s - O * 0.7, u, 0, s - O * 0.7, E, 0, 16763904, Ot);
      }
      Ot.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), i.scene.add(Ot), i.render();
    }
    let Gt = null;
    function rs() {
      if (!Gt) return;
      const t = Ze();
      t && t.scene.remove(Gt), Gt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Gt = null;
    }
    function wn(t, o, n) {
      if (rs(), t.length === 0) return;
      const l = Ze();
      if (!l) return;
      Gt = new sn(), Gt.name = "storyLevels";
      const a = Math.min(...o), i = Math.max(...o), s = Math.min(...n), r = Math.max(...n), p = i - a || 1, c = r - s || 1, d = Math.max(p, c), b = d * 0.06, S = n.length <= 1, $ = 4491519, y = d * 0.015;
      for (const f of t) {
        const h = f.elev;
        S ? (Ko(a - b, 0, h, i + b, 0, h, $, Gt), is(f.name, i + b * 1.5, 0, h, y, Gt)) : (Ko(a, s, h, i, s, h, $, Gt), Ko(i, s, h, i, r, h, $, Gt), Ko(i, r, h, a, r, h, $, Gt), Ko(a, r, h, a, s, h, $, Gt), is(f.name, a - b * 1.5, s, h, y, Gt));
      }
      Gt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Gt), l.render();
    }
    function Ko(t, o, n, l, a, i, s, r) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (i - n) ** 2) || 1, c = new to().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, a, i)
      ]), d = new Wo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Co(c, d);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function is(t, o, n, l, a, i) {
      const s = document.createElement("canvas"), r = 512, p = 64;
      s.width = r, s.height = p;
      const c = s.getContext("2d");
      c.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      c.beginPath(), c.moveTo(d, 0), c.lineTo(r - d, 0), c.quadraticCurveTo(r, 0, r, d), c.lineTo(r, p - d), c.quadraticCurveTo(r, p, r - d, p), c.lineTo(d, p), c.quadraticCurveTo(0, p, 0, p - d), c.lineTo(0, d), c.quadraticCurveTo(0, 0, d, 0), c.closePath(), c.fill(), c.fillStyle = "#88bbff", c.font = "bold 38px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, p / 2);
      const b = new Xn(s);
      b.needsUpdate = true;
      const S = new fn({
        map: b,
        depthTest: false,
        transparent: true
      }), $ = new pn(S);
      $.position.set(o, n, l), $.scale.set(a * 8, a, 1), $.renderOrder = 101, i.add($);
    }
    function En(t, o, n, l, a, i) {
      const s = document.createElement("canvas"), r = 256, p = 64;
      s.width = r, s.height = p;
      const c = s.getContext("2d");
      c.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      c.beginPath(), c.moveTo(d, 0), c.lineTo(r - d, 0), c.quadraticCurveTo(r, 0, r, d), c.lineTo(r, p - d), c.quadraticCurveTo(r, p, r - d, p), c.lineTo(d, p), c.quadraticCurveTo(0, p, 0, p - d), c.lineTo(0, d), c.quadraticCurveTo(0, 0, d, 0), c.closePath(), c.fill(), c.fillStyle = "#ffcc00", c.font = "bold 36px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, p / 2);
      const b = new il(s);
      b.minFilter = cl;
      const S = new fn({
        map: b,
        transparent: true,
        depthTest: false
      }), $ = new pn(S);
      $.position.set(o, n, l);
      const y = r / p;
      $.scale.set(a * y, a, 1), $.renderOrder = 999, i.add($);
    }
    function Sn(t, o, n, l, a, i, s, r) {
      const p = [
        new Ne(t, o, n),
        new Ne(l, a, i)
      ], c = new to().setFromPoints(p), d = new Yo({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Co(c, d);
      b.renderOrder = 998, r.add(b);
    }
    function In(t, o, n, l, a, i, s, r) {
      const p = new to().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, a, i)
      ]), c = new Wo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(i - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(i - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new Co(p, c);
      d.computeLineDistances(), r.add(d);
    }
    function kn(t, o, n, l, a, i) {
      const s = document.createElement("canvas"), r = 128;
      s.width = r, s.height = r;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = r * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${r * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, r / 2, r / 2 + r * 0.02);
      const c = new Xn(s);
      c.needsUpdate = true;
      const d = new fn({
        map: c,
        depthTest: false,
        transparent: true
      }), b = new pn(d);
      b.position.set(o, n, l);
      const S = a * 2;
      b.scale.set(S, S, 1), b.renderOrder = 100, i.add(b);
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
          const i = l > t ? l - 1 : l, s = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            i,
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
          const a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", i = l.id || "";
          if (a.toLowerCase().includes(t.toLowerCase()) || i.toLowerCase().includes(t.toLowerCase())) {
            const s = l;
            return s.checked = o !== void 0 ? o : !s.checked, s.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${a || i}: ${s.checked}`), s.checked;
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
          Ht(), console.log("Reference grid cleared");
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
        const i = [
          0
        ];
        for (const s of n || [
          3
        ]) i.push(i[i.length - 1] + s);
        as(l, a, i), We = l.map((s, r) => ({
          label: String.fromCharCode(65 + r),
          coord: s
        })), Xe = a.map((s, r) => ({
          label: `${r + 1}`,
          coord: s
        })), pt = i[i.length - 1], it = i.map((s, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: s
        })), Xo(We.map((s) => s.coord), Xe.map((s) => s.coord), pt, We.map((s) => s.label), Xe.map((s) => s.label));
        {
          const s = i.map((r, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? r - i[p - 1] : 0,
            elev: r
          }));
          wn(s, We.map((r) => r.coord), Xe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${i}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: i
        };
      },
      build(t) {
        var _a2;
        if (We.length === 0 || it.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, i] = o.split("x").map((q) => parseFloat(q) / 100), [s, r] = n.split("x").map((q) => parseFloat(q) / 100), p = We.map((q) => q.coord), c = Xe.map((q) => q.coord), d = it.map((q) => q.elev), b = p.length, S = c.length, $ = d.length, y = $ - 1, f = [], h = {};
        for (let q = 0; q < $; q++) for (let me = 0; me < S; me++) for (let ne = 0; ne < b; ne++) h[`${ne},${me},${q}`] = f.length, f.push([
          p[ne],
          c[me],
          d[q]
        ]);
        const I = [], L = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
        for (let q = 0; q < y; q++) for (let me = 0; me < S; me++) for (let ne = 0; ne < b; ne++) {
          const fe = I.length;
          I.push([
            h[`${ne},${me},${q}`],
            h[`${ne},${me},${q + 1}`]
          ]), L.add(fe), O.set(fe, q);
        }
        for (let q = 1; q < $; q++) for (let me = 0; me < S; me++) for (let ne = 0; ne < b - 1; ne++) {
          const fe = I.length;
          I.push([
            h[`${ne},${me},${q}`],
            h[`${ne + 1},${me},${q}`]
          ]), z.add(fe), O.set(fe, q - 1);
        }
        for (let q = 1; q < $; q++) for (let me = 0; me < b; me++) for (let ne = 0; ne < S - 1; ne++) {
          const fe = I.length;
          I.push([
            h[`${me},${ne},${q}`],
            h[`${me},${ne + 1},${q}`]
          ]), z.add(fe), O.set(fe, q - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const q = k === "all" || k === "x" || k === "perimeter", me = k === "all" || k === "y" || k === "perimeter";
          for (let ne = 0; ne < y; ne++) {
            if (q) for (let fe = 0; fe < S; fe++) {
              if (k === "perimeter" && fe !== 0 && fe !== S - 1) continue;
              const te = Math.floor((b - 1) / 2);
              for (let be = 0; be < b - 1; be++) {
                if (k === "perimeter" && be !== te) continue;
                const Ee = I.length;
                I.push([
                  h[`${be},${fe},${ne}`],
                  h[`${be + 1},${fe},${ne + 1}`]
                ]), m.add(Ee), O.set(Ee, ne);
                const le = I.length;
                I.push([
                  h[`${be + 1},${fe},${ne}`],
                  h[`${be},${fe},${ne + 1}`]
                ]), m.add(le), O.set(le, ne);
              }
            }
            if (me) for (let fe = 0; fe < b; fe++) {
              if (k === "perimeter" && fe !== 0 && fe !== b - 1) continue;
              const te = Math.floor((S - 1) / 2);
              for (let be = 0; be < S - 1; be++) {
                if (k === "perimeter" && be !== te) continue;
                const Ee = I.length;
                I.push([
                  h[`${fe},${be},${ne}`],
                  h[`${fe},${be + 1},${ne + 1}`]
                ]), m.add(Ee), O.set(Ee, ne);
                const le = I.length;
                I.push([
                  h[`${fe},${be + 1},${ne}`],
                  h[`${fe},${be},${ne + 1}`]
                ]), m.add(le), O.set(le, ne);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), A = a * i, R = a * i ** 3 / 12, j = i * a ** 3 / 12, x = a * i * (a ** 2 + i ** 2) / 12, w = s * r, v = s * r ** 3 / 12, C = r * s ** 3 / 12, U = s * r * (s ** 2 + r ** 2) / 12, V = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) V.set(q, u), se.set(q, E), L.has(q) ? (ee.set(q, A), Q.set(q, R), de.set(q, j), ie.set(q, x), Se.set(q, {
          type: "rect",
          b: a,
          h: i,
          name: `COL${o}`
        })) : m.has(q) ? (ee.set(q, A), Q.set(q, R), de.set(q, j), ie.set(q, x), Se.set(q, {
          type: "rect",
          b: a,
          h: i,
          name: `BR${o}`
        })) : (ee.set(q, w), Q.set(q, v), de.set(q, C), ie.set(q, U), Se.set(q, {
          type: "rect",
          b: s,
          h: r,
          name: `V${n}`
        }));
        const Fe = /* @__PURE__ */ new Map();
        for (let q = 0; q < S; q++) for (let me = 0; me < b; me++) Fe.set(h[`${me},${q},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = I, e.nodeInputs.val = {
          supports: Fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: V,
          shearModuli: se,
          areas: ee,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: de,
          torsionalConstants: ie,
          sectionShapes: Se
        }, D = L, G = z, Me = O, console.log(`Built: ${f.length} nodes, ${I.length} elements (${L.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
          nodes: f.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = We.findIndex((y) => y.label === t), a = Xe.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${We.map((y) => y.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Xe.map((y) => y.label)}`);
          return;
        }
        const i = We[l].coord, s = Xe[a].coord, r = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const c = (y) => {
          const f = r.findIndex((h) => Math.abs(h[0] - i) < 1e-3 && Math.abs(h[1] - s) < 1e-3 && Math.abs(h[2] - y) < 1e-3);
          return f >= 0 ? f : (r.push([
            i,
            s,
            y
          ]), r.length - 1);
        }, d = n ? [
          it.findIndex((y) => y.label === n)
        ] : Array.from({
          length: it.length - 1
        }, (y, f) => f + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = c(it[0].elev);
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
          if (y < 1 || y >= it.length) continue;
          const f = c(it[y - 1].elev), h = c(it[y].elev);
          p.push([
            f,
            h
          ]), D.add(p.length - 1), Me.set(p.length - 1, y - 1), $++;
        }
        return e.nodes.val = r, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${$} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), $;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const i = We.findIndex((O) => O.label === t), s = Xe.findIndex((O) => O.label === o), r = We.findIndex((O) => O.label === n), p = Xe.findIndex((O) => O.label === l), c = it.findIndex((O) => O.label === a);
        if (i < 0 || s < 0 || r < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (c < 1) {
          console.log(`Story "${a}" not found. Available: ${it.filter((O) => O.label !== "Base").map((O) => O.label)}`);
          return;
        }
        const d = We[i].coord, b = Xe[s].coord, S = We[r].coord, $ = Xe[p].coord, y = it[c].elev, f = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (O, k, m) => {
          const u = f.findIndex((E) => Math.abs(E[0] - O) < 1e-3 && Math.abs(E[1] - k) < 1e-3 && Math.abs(E[2] - m) < 1e-3);
          return u >= 0 ? u : (f.push([
            O,
            k,
            m
          ]), f.length - 1);
        }, L = I(d, b, y), z = I(S, $, y);
        return h.push([
          L,
          z
        ]), G.add(h.length - 1), Me.set(h.length - 1, c - 1), e.nodes.val = f, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), h.length - 1;
      },
      addBrace(t, o, n, l, a, i) {
        var _a2;
        const s = We.findIndex((u) => u.label === t), r = Xe.findIndex((u) => u.label === o), p = it.findIndex((u) => u.label === n), c = We.findIndex((u) => u.label === l), d = Xe.findIndex((u) => u.label === a), b = it.findIndex((u) => u.label === i);
        if (s < 0 || r < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (c < 0 || d < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${i}`);
          return;
        }
        const S = We[s].coord, $ = Xe[r].coord, y = it[p].elev, f = We[c].coord, h = Xe[d].coord, I = it[b].elev, L = [
          ...e.nodes.val
        ], z = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], O = (u, E, A) => {
          const R = L.findIndex((j) => Math.abs(j[0] - u) < 1e-3 && Math.abs(j[1] - E) < 1e-3 && Math.abs(j[2] - A) < 1e-3);
          return R >= 0 ? R : (L.push([
            u,
            E,
            A
          ]), L.length - 1);
        }, k = O(S, $, y), m = O(f, h, I);
        return z.push([
          k,
          m
        ]), Me.set(z.length - 1, Math.min(p, b)), e.nodes.val = L, e.elements.val = z, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${i}`), z.length - 1;
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
        ], a = (t == null ? void 0 : t.col) || "40x40", i = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [r, p] = a.split("x").map((te) => parseFloat(te) / 100), [c, d] = i.split("x").map((te) => parseFloat(te) / 100), b = [
          0
        ];
        for (const te of o) b.push(b[b.length - 1] + te);
        const S = [
          0
        ];
        for (const te of n) S.push(S[S.length - 1] + te);
        const $ = [
          0
        ];
        for (const te of l) $.push($[$.length - 1] + te);
        const y = b.length, f = S.length, h = $.length, I = l.length, L = [], z = {};
        for (let te = 0; te < h; te++) for (let be = 0; be < f; be++) for (let Ee = 0; Ee < y; Ee++) z[`${Ee},${te},${be}`] = L.length, L.push([
          b[Ee],
          $[te],
          S[be]
        ]);
        const O = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let te = 0; te < I; te++) for (let be = 0; be < f; be++) for (let Ee = 0; Ee < y; Ee++) {
          const le = O.length;
          O.push([
            z[`${Ee},${te},${be}`],
            z[`${Ee},${te + 1},${be}`]
          ]), k.add(le), u.set(le, te);
        }
        for (let te = 1; te < h; te++) for (let be = 0; be < f; be++) for (let Ee = 0; Ee < y - 1; Ee++) {
          const le = O.length;
          O.push([
            z[`${Ee},${te},${be}`],
            z[`${Ee + 1},${te},${be}`]
          ]), m.add(le), u.set(le, te - 1);
        }
        for (let te = 1; te < h; te++) for (let be = 0; be < y; be++) for (let Ee = 0; Ee < f - 1; Ee++) {
          const le = O.length;
          O.push([
            z[`${be},${te},${Ee}`],
            z[`${be},${te},${Ee + 1}`]
          ]), m.add(le), u.set(le, te - 1);
        }
        const A = 15100 * Math.sqrt(s) * 10, R = A / (2 * (1 + 0.2)), j = r * p, x = r * p ** 3 / 12, w = p * r ** 3 / 12, v = r * p * (r ** 2 + p ** 2) / 12, C = c * d, U = c * d ** 3 / 12, V = d * c ** 3 / 12, se = c * d * (c ** 2 + d ** 2) / 12, ee = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let te = 0; te < O.length; te++) ee.set(te, A), Q.set(te, R), k.has(te) ? (de.set(te, j), ie.set(te, x), Se.set(te, w), Fe.set(te, v), q.set(te, {
          type: "rect",
          b: r,
          h: p,
          name: `COL${a}`
        })) : (de.set(te, C), ie.set(te, U), Se.set(te, V), Fe.set(te, se), q.set(te, {
          type: "rect",
          b: c,
          h: d,
          name: `V${i}`
        }));
        const me = /* @__PURE__ */ new Map();
        for (let te = 0; te < f; te++) for (let be = 0; be < y; be++) me.set(z[`${be},0,${te}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = L, e.elements.val = O, e.nodeInputs.val = {
          supports: me,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: ee,
          shearModuli: Q,
          areas: de,
          momentsOfInertiaZ: ie,
          momentsOfInertiaY: Se,
          torsionalConstants: Fe,
          sectionShapes: q
        }, D = k, G = m, Me = u, We = b.map((te, be) => ({
          label: String.fromCharCode(65 + be),
          coord: te
        })), Xe = S.map((te, be) => ({
          label: `${be + 1}`,
          coord: te
        })), pt = $[$.length - 1], Xo(We.map((te) => te.coord), Xe.map((te) => te.coord), pt, We.map((te) => te.label), Xe.map((te) => te.label));
        {
          const te = $.map((be, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? be - $[Ee - 1] : 0,
            elev: be
          }));
          wn(te, b, S);
        }
        const ne = Ce.querySelector("#cad3d-axis-buttons");
        if (ne) {
          ne.style.display = "flex";
          const te = We.map((Ee) => Ee.label), be = Xe.map((Ee) => Ee.label);
          ne.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of te) ne.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          ne.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of be) ne.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const fe = Ce.querySelector("#cad3d-floor-buttons");
        if (fe) {
          fe.style.display = "flex", fe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let te = 0; te < I; te++) fe.innerHTML += `<button class="floor-btn" data-floor="${te}">P${te + 1}</button>`;
        }
        return as(b, S, $), et(), console.log(`Model3D: ${L.length}n ${O.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${i} f'c=${s}`), {
          nodes: L.length,
          elements: O.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), We = [], Xe = [], pt = 0, ls(), rs(), Ht();
        const t = Ce.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), et();
      },
      frame(t, o, n = 0, l = 0) {
        Qe.clear();
        const a = [];
        n > 0 && a.push(-n);
        let i = 0;
        a.push(i);
        for (const y of t) i += y, a.push(i);
        l > 0 && a.push(i + l);
        const s = [
          0
        ];
        let r = 0;
        for (const y of o) r += y, s.push(r);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === a.length - 1, c = {}, d = [];
        for (let y = 0; y < s.length; y++) for (let f = 0; f < a.length; f++) y === 0 && p(f) || (c[`${f},${y}`] = d.length, d.push([
          a[f],
          0,
          s[y]
        ]));
        const b = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (D.add(b.length), b.push([
          c[`${f},${y}`],
          c[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) G.add(b.length), b.push([
          c[`${f},${y}`],
          c[`${f + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), $ = mt();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          c[f] !== void 0 && S.set(c[f], [
            ...$
          ]);
        }
        return e.nodes.val = d, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), We = [
          ...a
        ], Xe = [
          0
        ], pt = s[s.length - 1] || 0, setTimeout(() => {
          yt(), Xo(a, [
            0
          ]), Nn(), qn();
        }, 50), et(), {
          nodes: d.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, a = 0, i = 0, s = 0, r = 0, p = 1) {
        Qe.clear();
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const u of t) c.push(c[c.length - 1] + u);
        i > 0 && c.push(c[c.length - 1] + i);
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const u of o) d.push(d[d.length - 1] + u);
        r > 0 && d.push(d[d.length - 1] + r);
        const b = [
          0
        ];
        for (const u of n) b.push(b[b.length - 1] + u);
        const S = (u) => a > 0 && u === 0 || i > 0 && u === c.length - 1, $ = (u) => s > 0 && u === 0 || r > 0 && u === d.length - 1, y = (u, E) => S(u) || $(E), f = [], h = {};
        for (let u = 0; u < b.length; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < c.length; A++) u === 0 && y(A, E) || (h[`${A},${E},${u}`] = f.length, f.push([
          c[A],
          d[E],
          b[u]
        ]));
        const I = f.length, L = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < b.length - 1; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < c.length; A++) y(A, E) || z.push({
          el: [
            h[`${A},${E},${u}`],
            h[`${A},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: A } of z) {
          if (p <= 1) {
            D.add(L.length), Me.set(L.length, A), L.push([
              u,
              E
            ]);
            continue;
          }
          const R = f[u], j = f[E];
          let x = u;
          for (let w = 1; w < p; w++) {
            const v = w / p, C = f.length;
            f.push([
              R[0] + (j[0] - R[0]) * v,
              R[1] + (j[1] - R[1]) * v,
              R[2] + (j[2] - R[2]) * v
            ]), D.add(L.length), Me.set(L.length, A), L.push([
              x,
              C
            ]), x = C;
          }
          D.add(L.length), Me.set(L.length, A), L.push([
            x,
            E
          ]);
        }
        ze = /* @__PURE__ */ new Map();
        const O = [];
        for (let u = 1; u < b.length; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < c.length - 1; A++) O.push({
          el: [
            h[`${A},${E},${u}`],
            h[`${A + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: A
        });
        for (let u = 1; u < b.length; u++) for (let E = 0; E < c.length; E++) for (let A = 0; A < d.length - 1; A++) O.push({
          el: [
            h[`${E},${A},${u}`],
            h[`${E},${A + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: A
        });
        for (const { el: [u, E], floor: A, dir: R, bay: j } of O) {
          const x = f[u], w = f[E];
          let v = u;
          for (let U = 1; U < l; U++) {
            const V = U / l, se = f.length;
            f.push([
              x[0] + (w[0] - x[0]) * V,
              x[1] + (w[1] - x[1]) * V,
              x[2] + (w[2] - x[2]) * V
            ]);
            const ee = L.length;
            G.add(ee), Me.set(ee, A), ze.set(ee, {
              dir: R,
              bay: j
            }), L.push([
              v,
              se
            ]), v = se;
          }
          const C = L.length;
          G.add(C), Me.set(C, A), ze.set(C, {
            dir: R,
            bay: j
          }), L.push([
            v,
            E
          ]);
        }
        if (lt = /* @__PURE__ */ new Set(), ke && Ae > 0) {
          const u = (E, A, R) => {
            for (let x = 0; x < f.length; x++) if (Math.abs(f[x][0] - E) < 1e-6 && Math.abs(f[x][1] - A) < 1e-6 && Math.abs(f[x][2] - R) < 1e-6) return x;
            const j = f.length;
            return f.push([
              E,
              A,
              R
            ]), j;
          };
          for (let E = 1; E < b.length; E++) if (Je === "x") for (let A = 0; A < d.length - 1; A++) {
            const R = d[A], j = d[A + 1];
            for (let x = 1; x <= Ae; x++) {
              const w = R + x / (Ae + 1) * (j - R), v = [];
              for (let C = 0; C < c.length; C++) v.push(u(c[C], w, b[E]));
              for (let C = 0; C < c.length - 1; C++) {
                const U = L.length;
                lt.add(U), G.add(U), Me.set(U, E - 1), ze.set(U, {
                  dir: "x",
                  bay: C
                }), L.push([
                  v[C],
                  v[C + 1]
                ]);
              }
            }
          }
          else for (let A = 0; A < c.length - 1; A++) {
            const R = c[A], j = c[A + 1];
            for (let x = 1; x <= Ae; x++) {
              const w = R + x / (Ae + 1) * (j - R), v = [];
              for (let C = 0; C < d.length; C++) v.push(u(w, d[C], b[E]));
              for (let C = 0; C < d.length - 1; C++) {
                const U = L.length;
                lt.add(U), G.add(U), Me.set(U, E - 1), ze.set(U, {
                  dir: "y",
                  bay: C
                }), L.push([
                  v[C],
                  v[C + 1]
                ]);
              }
            }
          }
        }
        const k = /* @__PURE__ */ new Map(), m = mt();
        for (let u = 0; u < d.length; u++) for (let E = 0; E < c.length; E++) y(E, u) || k.set(h[`${E},${u},0`], [
          ...m
        ]);
        ue = /* @__PURE__ */ new Set();
        for (const u of ye) {
          const E = b.length - 1, A = u.floors.includes(-1) ? Array.from({
            length: E
          }, (R, j) => j) : u.floors.filter((R) => R < E);
          for (const R of A) {
            let j, x, w, v;
            u.dir === "x" ? (j = u.bay, w = u.bay + 1, x = u.axisIdx, v = u.axisIdx) : (j = u.axisIdx, w = u.axisIdx, x = u.bay, v = u.bay + 1);
            const C = h[`${j},${x},${R}`], U = h[`${j},${x},${R + 1}`];
            let V, se;
            if (u.dir === "x" ? (V = h[`${w},${v},${R}`], se = h[`${w},${v},${R + 1}`]) : (V = h[`${w},${v},${R}`], se = h[`${w},${v},${R + 1}`]), C === void 0 || V === void 0 || U === void 0 || se === void 0) continue;
            const ee = ge, Q = je, de = f[C], ie = f[V], Se = f[U], Fe = f[se], q = [];
            for (let me = 0; me <= Q; me++) {
              const ne = [], fe = me / Q;
              for (let te = 0; te <= ee; te++) {
                const be = te / ee, Ee = (1 - fe) * ((1 - be) * de[0] + be * ie[0]) + fe * ((1 - be) * Se[0] + be * Fe[0]), le = (1 - fe) * ((1 - be) * de[1] + be * ie[1]) + fe * ((1 - be) * Se[1] + be * Fe[1]), X = (1 - fe) * ((1 - be) * de[2] + be * ie[2]) + fe * ((1 - be) * Se[2] + be * Fe[2]);
                me === 0 && te === 0 ? ne.push(C) : me === 0 && te === ee ? ne.push(V) : me === Q && te === 0 ? ne.push(U) : me === Q && te === ee ? ne.push(se) : (ne.push(f.length), f.push([
                  Ee,
                  le,
                  X
                ]));
              }
              q.push(ne);
            }
            for (let me = 0; me < Q; me++) for (let ne = 0; ne < ee; ne++) {
              const fe = q[me][ne], te = q[me][ne + 1], be = q[me + 1][ne + 1], Ee = q[me + 1][ne], le = L.length;
              ue.add(le), Me.set(le, R), L.push([
                fe,
                te,
                be,
                Ee
              ]);
            }
            if (R === 0) for (let me = 0; me <= ee; me++) {
              const ne = q[0][me];
              ne >= I && k.set(ne, [
                ...m
              ]);
            }
          }
        }
        if (Ct = /* @__PURE__ */ new Set(), Ue) {
          const u = l, E = l, A = /* @__PURE__ */ new Map(), R = (j, x, w) => `${Math.round(j * 1e4)},${Math.round(x * 1e4)},${Math.round(w * 1e4)}`;
          for (let j = 0; j < f.length; j++) A.set(R(f[j][0], f[j][1], f[j][2]), j);
          for (let j = 1; j < b.length; j++) {
            const x = b[j];
            for (let w = 0; w < c.length - 1; w++) for (let v = 0; v < d.length - 1; v++) {
              const C = c[w], U = c[w + 1], V = d[v], se = d[v + 1], ee = [];
              for (let Q = 0; Q <= E; Q++) {
                const de = [];
                for (let ie = 0; ie <= u; ie++) {
                  const Se = C + ie / u * (U - C), Fe = V + Q / E * (se - V);
                  if (Q === 0 && ie === 0) de.push(h[`${w},${v},${j}`]);
                  else if (Q === 0 && ie === u) de.push(h[`${w + 1},${v},${j}`]);
                  else if (Q === E && ie === 0) de.push(h[`${w},${v + 1},${j}`]);
                  else if (Q === E && ie === u) de.push(h[`${w + 1},${v + 1},${j}`]);
                  else {
                    const q = R(Se, Fe, x), me = A.get(q);
                    if (me !== void 0) de.push(me);
                    else {
                      const ne = f.length;
                      f.push([
                        Se,
                        Fe,
                        x
                      ]), A.set(q, ne), de.push(ne);
                    }
                  }
                }
                ee.push(de);
              }
              for (let Q = 0; Q < E; Q++) for (let de = 0; de < u; de++) {
                const ie = ee[Q][de], Se = ee[Q][de + 1], Fe = ee[Q + 1][de + 1], q = ee[Q + 1][de], me = L.length;
                Ct.add(me), Me.set(me, j - 1), L.push([
                  ie,
                  Se,
                  Fe,
                  q
                ]);
              }
            }
          }
        }
        if (Pt && ht) {
          const u = ht === "all" || ht === "x" || ht === "perimeter", E = ht === "all" || ht === "y" || ht === "perimeter", A = b.length - 1;
          for (let R = 0; R < A; R++) {
            if (u) for (let j = 0; j < d.length; j++) {
              if (ht === "perimeter" && j !== 0 && j !== d.length - 1) continue;
              const x = Math.floor((c.length - 1) / 2);
              for (let w = 0; w < c.length - 1; w++) {
                if (ht === "perimeter" && w !== x || y(w, j) || y(w + 1, j)) continue;
                const v = h[`${w},${j},${R}`], C = h[`${w + 1},${j},${R + 1}`], U = h[`${w + 1},${j},${R}`], V = h[`${w},${j},${R + 1}`];
                v !== void 0 && C !== void 0 && (L.push([
                  v,
                  C
                ]), Me.set(L.length - 1, R)), U !== void 0 && V !== void 0 && (L.push([
                  U,
                  V
                ]), Me.set(L.length - 1, R));
              }
            }
            if (E) for (let j = 0; j < c.length; j++) {
              if (ht === "perimeter" && j !== 0 && j !== c.length - 1) continue;
              const x = Math.floor((d.length - 1) / 2);
              for (let w = 0; w < d.length - 1; w++) {
                if (ht === "perimeter" && w !== x || y(j, w) || y(j, w + 1)) continue;
                const v = h[`${j},${w},${R}`], C = h[`${j},${w + 1},${R + 1}`], U = h[`${j},${w + 1},${R}`], V = h[`${j},${w},${R + 1}`];
                v !== void 0 && C !== void 0 && (L.push([
                  v,
                  C
                ]), Me.set(L.length - 1, R)), U !== void 0 && V !== void 0 && (L.push([
                  U,
                  V
                ]), Me.set(L.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), We = [
          ...c
        ], Xe = [
          ...d
        ], pt = b[b.length - 1] || 0, setTimeout(() => {
          yt(), Xo(c, d), Nn(), qn();
        }, 50), et(), {
          nodes: f.length,
          elements: L.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, i = 4) {
        Qe.clear();
        const s = [], r = [], p = ($) => n + l * (1 - Math.pow(2 * $ / t - 1, 2)), c = [], d = i + 1;
        for (let $ = 0; $ < d; $++) {
          const y = [], f = o / i * $;
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
          ]), c.push(y);
        }
        for (let $ = 0; $ < d; $++) {
          const y = c[$];
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
        for (let $ = 0; $ < i; $++) for (let y = 2; y < c[0].length; y++) r.push([
          c[$][y],
          c[$ + 1][y]
        ]);
        for (let $ = 0; $ < i; $++) for (let y = 2; y < c[0].length - 1; y += 2) r.push([
          c[$][y],
          c[$ + 1][y + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), S = mt();
        for (let $ = 0; $ < d; $++) b.set(c[$][0], [
          ...S
        ]), b.set(c[$][1], [
          ...S
        ]);
        return e.nodes.val = s, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
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
            qe.colMat = 1, qe.vigaMat = 1, Qe.clear(), tt("truss"), ps();
            break;
          }
          case "beams": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Qe.clear(), tt("beams"), fs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            qe.colMat = 1, qe.vigaMat = 1, Qe.clear(), tt("3d"), us();
            break;
          }
          case "portico": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, tt("frame"), Oe();
            break;
          }
          case "edificio": {
            tt("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, ye = [], Ue = false, ke = false, Pt = false, Oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            tt("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ye = [], ke = true, Ae = 2;
            const o = ce.reduce((l, a) => l + a, 0) / ce.length, n = oe.reduce((l, a) => l + a, 0) / oe.length;
            Je = o >= n ? "y" : "x", Ue = true, rt = 0.08, Pt = false, Oe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            tt("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ye = [], ke = true, Ae = 2;
            const o = ce.reduce((l, a) => l + a, 0) / ce.length, n = oe.reduce((l, a) => l + a, 0) / oe.length;
            Je = o >= n ? "y" : "x", Ue = true, rt = 0.08, Pt = true, ht = "perimeter", Oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            tt("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, ke = false;
            const o = Math.round(((_a2 = K.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Ue = true, rt = 0.15, Oe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            tt("edificio"), qe.colMat = 2, qe.vigaMat = 0, ke = false;
            const o = Math.round(((_c = K.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = K.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            ], Ue = true, rt = 0.12, Oe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            tt("edificio"), K.nPisos && (K.nPisos.val = 1), K.hPiso && (K.hPiso.val = 4.5), K.nVanosX && (K.nVanosX.val = 3), K.nVanosY && (K.nVanosY.val = 2), K.nSubViga && (K.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], oe = [
              5,
              5
            ], qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ye = [], ke = true, Ae = 2, Je = ce[0] >= oe[0] ? "y" : "x", Ue = true, rt = 0.08, dt = 3, Mt = 3, Oe();
            break;
          }
          case "galpon": {
            tt("galpon"), qe.colMat = 1, qe.vigaMat = 1, Oe();
            break;
          }
          case "barra": {
            tt("barra"), Oe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Qe.clear(), tt("placa-3q"), ms();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Qe.clear(), tt("placa-q4"), bs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Qe.clear(), tt("losa-rect"), gs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Qe.clear(), tt("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Qe.clear(), tt("viga-alta"), xs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Qe.clear(), tt("muro-contencion"), vs();
            break;
          }
          case "zapata":
          case "footing": {
            Qe.clear(), tt("zapata"), ys();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Qe.clear(), tt("placa-orificios"), $s();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Qe.clear(), tt("col-placa"), Ms();
            break;
          }
          case "talud":
          case "slope": {
            Qe.clear(), tt("talud"), ws();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Qe.clear(), tt("eiffel"), _s();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Qe.clear(), tt("arco"), Ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Qe.clear(), tt("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Qe.clear(), tt("twisted"), Hs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Qe.clear(), tt("burj"), js();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Qe.clear(), tt("opera"), Ws();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Qe.clear(), tt("diagrid"), Gs();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            Qe.clear(), tt("muro-q4"), Vn();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            Qe.clear(), tt("viga-q4"), Ys();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            Qe.clear(), tt("placa-xz"), Js();
            break;
          }
          case "pergola":
          case "cubierta": {
            Qe.clear(), tt("pergola"), Vs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", i = -10, s = 0.2, r = 3e7, p = 0.3, c = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][c]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${i}, t=${s}`);
        const b = performance.now(), S = Un({
          E: r,
          nu: p,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: i,
          theoryType: c
        }), $ = performance.now() - b;
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
        if (Math.abs(i) > 1e-30) {
          const z = i * t * o / y.length;
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
        return setTimeout(() => yt(), 50), et(), S;
      },
      set(t, o) {
        K[t] ? (K[t].val = o, console.log(`${t} = ${o}`), so(), Oe()) : ft[t] ? (ft[t].val = o, console.log(`${t} = ${o}`), so(), Oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...K,
          ...ft
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in K) o[l] = K[l].val;
          for (const l in ft) o[l] = ft[l].val;
          o.plateTheory = Re, o.supportType = vt;
          const n = un()[T];
          return n && n[vt] && (o.supportLabel = n[vt].label), console.table(o), o;
        }
        if (K[t]) return K[t].val;
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
        }[t.toLowerCase()] || 3), Re = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Re] || Re}`), T.includes("placa") && (so(), Oe());
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
        vt = t, vt >= o.length && (vt = 0), console.log(`Apoyo: ${o[vt].label} \u2192 DOFs: [${o[vt].dofs.map((n) => n ? "1" : "0").join(",")}]`), so(), Oe();
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
        t && (g = t), o && (P = o), M = Ro(g, P);
        const n = Ce.querySelector("#cad3d-force-unit"), l = Ce.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = P), T && tt(T), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
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
    let ft = {};
    function tt(t) {
      var _a2, _b, _c, _d;
      T = t, ca.val = true, vt = 0, ve && Cn(), K = {};
      const o = cs()[t];
      if (o) for (const l of o) K[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      ft = {};
      const n = ds()[t];
      if (n) for (const l of n) ft[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = K.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ce = Array(l).fill(M.defaultSpan), oe = Array(a).fill(M.defaultSpan * 0.8);
        const i = Math.round(((_c = K.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = K.hPiso) == null ? void 0 : _d.val) ?? 3;
        _ = Array(i).fill(s);
      }
      so(), setTimeout(() => {
        Ta(), Oe();
      }, 50);
    }
    function re(t) {
      var _a2, _b;
      return ((_a2 = K[t]) == null ? void 0 : _a2.val) ?? ((_b = ft[t]) == null ? void 0 : _b.val) ?? 0;
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
          const o = re("Lvix") || 0, n = re("Lvdx") || 0, l = re("Lviy") || 0, a = re("Lvdy") || 0, i = Math.max(1, Math.round(re("nSubViga") || 3)), s = Math.max(1, Math.round(re("nSubCol") || 1)), r = re("hPiso"), p = _.length > 0 ? [
            ..._
          ] : Array(Math.round(re("nPisos"))).fill(r);
          Qe.building([
            ...ce
          ], [
            ...oe
          ], p, i, o, n, l, a, s);
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
            n.forEach((i) => i.forEach((s) => l.add(s)));
            const a = e.nodes.val;
            if (l.size < a.length) {
              const i = [
                ...l
              ].sort((p, c) => p - c), s = /* @__PURE__ */ new Map();
              i.forEach((p, c) => s.set(p, c)), e.nodes.val = i.map((p) => a[p]), n.forEach((p, c) => {
                n[c] = p.map((d) => s.get(d) ?? d);
              });
              const r = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val;
              if (r == null ? void 0 : r.supports) {
                const p = /* @__PURE__ */ new Map();
                r.supports.forEach((c, d) => {
                  s.has(d) && p.set(s.get(d), c);
                }), r.supports = p;
              }
              if (r == null ? void 0 : r.loads) {
                const p = /* @__PURE__ */ new Map();
                r.loads.forEach((c, d) => {
                  s.has(d) && p.set(s.get(d), c);
                }), r.loads = p;
              }
              r && (e.nodeInputs.val = r);
            }
            e.elements.val = n;
          }
        }
        setTimeout(() => {
          vo(), Fn();
        }, 30);
      }
    }
    function ps() {
      const t = re("span"), o = Math.round(re("divisions")), n = re("height"), l = t / o, a = [], i = [];
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
      for (let d = 0; d < o; d++) i.push([
        d,
        d + 1
      ]);
      for (let d = 0; d < o; d++) i.push([
        s + d,
        s + d + 1
      ]);
      for (let d = 0; d <= o; d++) i.push([
        d,
        s + d
      ]);
      for (let d = 0; d < o; d++) d < o / 2 ? i.push([
        d,
        s + d + 1
      ]) : i.push([
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
      ]), p = (re("CM") ?? 0) + (re("CV") ?? 0), c = /* @__PURE__ */ new Map();
      if (p !== 0) for (let d = 0; d <= o; d++) c.set(d, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      }), et();
    }
    function fs() {
      const t = re("width"), o = re("height"), n = re("Ex") ?? 0, l = (re("CM") ?? 0) + (re("CV") ?? 0), a = Math.max(1, Math.round(re("nSub") || 4)), i = [
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
      let c = 1;
      for (let b = 1; b < a; b++) {
        const S = b / a, $ = i.length;
        i.push([
          r[0] + (p[0] - r[0]) * S,
          r[1] + (p[1] - r[1]) * S,
          r[2] + (p[2] - r[2]) * S
        ]), s.push([
          c,
          $
        ]), c = $;
      }
      s.push([
        c,
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
      else if (l !== 0 && n === 0) for (let b = 1; b < i.length; b++) b === 0 || b === 3 || d.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < i.length; b++) b === 0 || b === 3 || d.set(b, [
        b === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
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
      const t = re("dx"), o = re("dy"), n = re("dz"), l = Math.round(re("stories")), a = Math.max(1, Math.round(re("nSub") || 3)), i = [];
      for (let f = 0; f <= l; f++) i.push([
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
      const s = i.length, r = [
        ...i
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
      const c = [];
      for (let f = 1; f <= l; f++) {
        const h = f * 4;
        c.push([
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
      for (const [f, h] of c) {
        const I = i[f], L = i[h];
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
      const b = re("Ex") ?? 0, S = (re("CM") ?? 0) + (re("CV") ?? 0), $ = s - 2, y = /* @__PURE__ */ new Map();
      if (b !== 0 && S === 0) y.set($, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && b === 0) for (let f = 0; f < r.length; f++) d.has(f) || y.set(f, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (b !== 0 && S !== 0) for (let f = 0; f < r.length; f++) d.has(f) || y.set(f, [
        f === $ ? b : 0,
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
      const t = re("L"), o = Math.round(re("nElem")), n = re("F"), l = t / o, a = [], i = [];
      for (let p = 0; p <= o; p++) a.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) i.push([
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
      e.nodes.val = a, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: r
      }), et();
    }
    function ms() {
      const t = re("Lx") || 15, o = re("Ly") || 10, n = re("meshSize") || 0.5, l = re("q") || -3, a = re("t") || 1, i = re("E") || 3e7, s = re("nu") || 0.3, r = i / (2 * (1 + s)), p = Re === 1 ? "Membrana" : Re === 2 ? "Kirchhoff" : "Mindlin", { nodes: c, elements: d, boundaryIndices: b } = ho({
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
      }), S = t * o, $ = l * S / c.length, y = new Map(b.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(c.map((h, I) => [
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
      e.nodes.val = c, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(d.map((h, I) => [
          I,
          i
        ])),
        elasticitiesOrthogonal: new Map(d.map((h, I) => [
          I,
          i
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
        const h = zt(c, d, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const I = bo(c, d, e.elementInputs.val, h);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${c.length} nodes, ${d.length} triangles, t=${a}, E=${i}, \u03BD=${s}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => yt(), 50), et();
    }
    function bs() {
      const t = re("Lx") || 10, o = re("Ly") || 10, n = Math.round(re("nx") || 16), l = Math.round(re("ny") || 16), a = re("t") || 0.2, i = re("q") || -10, s = re("E") || 3e7, r = re("nu") || 0.3, p = vt === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 0;
      return Qe.plateQ4(t, o, n, l, p, i, a, s, r, d);
    }
    function gs() {
      const t = re("a") || 6, o = re("b") || 4, n = Math.round(re("nx") || 12), l = Math.round(re("ny") || 8), a = re("t") || 0.1, i = re("q") || -10, s = re("E") || 35e6, r = re("nu") || 0.15, c = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 0, d = Qe.plateQ4(t, o, n, l, "simply-supported", i, a, s, r, c), b = s * a * a * a / (12 * (1 - r * r));
      let S = 0;
      for (let $ = 1; $ <= 19; $ += 2) for (let y = 1; y <= 19; y += 2) {
        const f = $ * $ / (t * t) + y * y / (o * o);
        S += 1 / ($ * y * f * f);
      }
      if (S *= 16 * Math.abs(i) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), d) {
        const $ = Math.abs((Math.abs(d.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(d.centerW || 0).toExponential(6)}, error = ${$.toFixed(2)}%`);
      }
      return d;
    }
    function hs() {
      const t = re("t") || 0.2, o = re("q") || -10, n = re("E") || 35e6, l = re("nu") || 0.2, a = re("meshSize") || 0.6, i = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], r = i.reduce((x, w) => x + w, 0), p = s.reduce((x, w) => x + w, 0), c = [
        0
      ];
      for (const x of i) c.push(c[c.length - 1] + x);
      const d = [
        0
      ];
      for (const x of s) d.push(d[d.length - 1] + x);
      const b = Math.max(2, Math.round(r / a)), S = Math.max(2, Math.round(p / a)), $ = r / b, y = p / S, f = [];
      for (let x = 0; x <= S; x++) for (let w = 0; w <= b; w++) f.push([
        w * $,
        x * y
      ]);
      const h = [], I = /* @__PURE__ */ new Set();
      for (const x of c) for (const w of d) {
        let v = 1 / 0, C = 0;
        for (let U = 0; U < f.length; U++) {
          const V = Math.hypot(f[U][0] - x, f[U][1] - w);
          V < v && (v = V, C = U);
        }
        I.has(C) || (I.add(C), h.push({
          node: C,
          dof: 0,
          k: 1e15
        }));
      }
      const z = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${r}\xD7${p}m, ${b}\xD7${S} elem, ${I.size} columnas`);
      const O = performance.now(), k = Un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: p,
        meshNx: b,
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
      ]), E = k.elementResults.map((x) => [
        ...x.nodes
      ]);
      e.nodes.val = u, e.elements.val = E;
      const A = /* @__PURE__ */ new Map();
      k.nodeResults.forEach((x, w) => {
        A.set(w, [
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
        u.forEach((w, v) => {
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
        const x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        k.elementResults.forEach((C, U) => {
          x.set(U, [
            C.Mxx,
            C.Mxx,
            C.Mxx
          ]), w.set(U, [
            C.Myy,
            C.Myy,
            C.Myy
          ]), v.set(U, [
            C.Mxy,
            C.Mxy,
            C.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: x,
          bendingYY: w,
          bendingXY: v
        };
      }
      setTimeout(() => yt(), 50), et();
    }
    function xs() {
      const t = re("L") || 4, o = re("H") || 2, n = re("t") || 0.1, l = re("E") || 2e7, a = re("nu") || 0.2, i = l / (2 * (1 + a)), s = re("q") || -100, r = re("b") || 0.8, p = re("meshSize") || 0.2, { nodes: c, elements: d, boundaryIndices: b } = ho({
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
      }), S = c, $ = 0.4, y = /* @__PURE__ */ new Map();
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
          i
        ]))
      }, k = {
        supports: y,
        loads: z
      };
      try {
        const m = zt(S, d, k, O), u = bo(S, d, O, m), E = S.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = E, e.elements.val = d, m && m.deformations) {
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
          y.forEach((x, w) => R.set(w, x));
          const j = /* @__PURE__ */ new Map();
          z.forEach((x, w) => j.set(w, [
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
      setTimeout(() => yt(), 50), et();
    }
    function vs() {
      const t = re("H") || 4, o = re("B") || 3, n = re("tw") || 0.3, l = re("tb") || 0.4, a = re("meshSize") || 0.2, i = re("E") || 25e6, s = re("nu") || 0.2, r = i / (2 * (1 + s)), p = re("gamma") || 18, c = re("Ka") || 0.33, d = re("Es") || 5e4, b = re("nus") || 0.3, S = d / (2 * (1 + b)), $ = re("kn") || 1e6, y = re("ks") || 1e4, f = re("gammaW") || 9.81, h = re("Hw") || 3.5, I = re("qs") || 0, L = vt, z = o * 0.3, O = o * 0.7, k = [
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
      let m = [], u = [], E = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), R;
      if (L === 0) {
        const w = ho({
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
        for (let C = 0; C < m.length; C++) Math.abs(m[C][1]) < 1e-6 && E.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let C = 0; C < m.length; C++) {
          const U = m[C][0], V = m[C][1];
          Math.abs(U - n) < a * 0.6 && V >= l - 1e-6 && v.push({
            idx: C,
            y: V
          });
        }
        v.sort((C, U) => C.y - U.y);
        for (let C = 0; C < v.length; C++) {
          const { idx: U, y: V } = v[C], se = l + t - V, ee = c * p * se + c * I;
          let Q = a;
          C > 0 && C < v.length - 1 ? Q = (v[C + 1].y - v[C - 1].y) / 2 : C === 0 && v.length > 1 ? Q = (v[1].y - v[0].y) / 2 : C === v.length - 1 && v.length > 1 && (Q = (v[C].y - v[C - 1].y) / 2);
          const de = ee * Q;
          Math.abs(de) > 1e-10 && A.set(U, [
            de,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((C, U) => [
            U,
            i
          ])),
          elasticitiesOrthogonal: new Map(u.map((C, U) => [
            U,
            i
          ])),
          thicknesses: new Map(u.map((C, U) => [
            U,
            n
          ])),
          poissonsRatios: new Map(u.map((C, U) => [
            U,
            s
          ])),
          shearModuli: new Map(u.map((C, U) => [
            U,
            r
          ]))
        };
      } else if (L === 1 || L === 2) {
        const w = O, v = l + t;
        if (L === 2) {
          const C = [
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
          ], U = Math.max(3, Math.ceil((v - l) / a)), V = [];
          for (let le = 0; le <= U; le++) V.push([
            n,
            l + le * (v - l) / U,
            0
          ]);
          const se = ho({
            points: [
              ...C,
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
          m = se.nodes, u = se.elements;
          const ee = a * 0.4, Q = [];
          for (let le = 0; le < m.length; le++) {
            const X = m[le][0], Ie = m[le][1];
            Math.abs(X - n) < ee && Ie >= l - ee && Q.push(le);
          }
          Q.sort((le, X) => m[le][1] - m[X][1]);
          const de = [
            Q[0]
          ];
          for (let le = 1; le < Q.length; le++) {
            const X = m[Q[le]][1] - m[de[de.length - 1]][1];
            Math.abs(X) > a * 0.05 && de.push(Q[le]);
          }
          Q.length = 0, Q.push(...de);
          const ie = /* @__PURE__ */ new Map();
          for (const le of Q) {
            const X = m.length;
            m.push([
              m[le][0],
              m[le][1],
              m[le][2]
            ]), ie.set(le, X);
          }
          const Se = u.length, Fe = [];
          for (let le = 0; le < Se; le++) {
            const X = u[le], Ie = (m[X[0]][0] + m[X[1]][0] + m[X[2]][0]) / 3, Ke = (m[X[0]][1] + m[X[1]][1] + m[X[2]][1]) / 3, ot = Ie >= -z && Ie <= O && Ke >= 0 && Ke <= l, gt = Ie >= 0 && Ie <= n && Ke >= l && Ke <= l + t, It = ot || gt;
            if (Fe.push(!It), !It) for (let kt = 0; kt < X.length; kt++) {
              const Dt = ie.get(X[kt]);
              Dt !== void 0 && (X[kt] = Dt);
            }
          }
          const q = u.length;
          for (let le = 0; le < Q.length - 1; le++) {
            const X = Q[le], Ie = Q[le + 1], Ke = ie.get(X), ot = ie.get(Ie);
            u.push([
              Ie,
              X,
              Ke,
              ot
            ]);
          }
          const me = u.length - q, ne = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let le = 0; le < Se; le++) Fe[le] ? (ne.set(le, d), fe.set(le, d), be.set(le, b), Ee.set(le, S), te.set(le, 1)) : (ne.set(le, i), fe.set(le, i), be.set(le, s), Ee.set(le, r), te.set(le, 1));
          for (let le = q; le < u.length; le++) ne.set(le, $), fe.set(le, 0), be.set(le, 0), Ee.set(le, y), te.set(le, 0);
          R = {
            elasticities: ne,
            elasticitiesOrthogonal: fe,
            thicknesses: te,
            poissonsRatios: be,
            shearModuli: Ee
          };
          for (let le = 0; le < m.length; le++) {
            const X = m[le][0], Ie = m[le][1];
            Math.abs(Ie) < 1e-6 ? E.set(le, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(X - w) < a * 0.1 && E.set(le, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let le = 0; le < Se; le++) {
            if (!Fe[le]) continue;
            const X = u[le], Ie = m[X[0]], Ke = m[X[1]], ot = m[X[2]], gt = Math.abs((Ke[0] - Ie[0]) * (ot[1] - Ie[1]) - (ot[0] - Ie[0]) * (Ke[1] - Ie[1])) / 2, It = -p * gt / 3;
            for (const kt of X) {
              const Dt = A.get(kt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Dt[1] += It, A.set(kt, Dt);
            }
          }
          if (I > 0) {
            const le = [];
            for (let X = 0; X < m.length; X++) {
              const Ie = m[X][0], Ke = m[X][1];
              Math.abs(Ke - v) < a * 0.1 && Ie > n - 1e-6 && le.push({
                idx: X,
                x: Ie
              });
            }
            le.sort((X, Ie) => X.x - Ie.x);
            for (let X = 0; X < le.length; X++) {
              let Ie = a;
              X > 0 && X < le.length - 1 ? Ie = (le[X + 1].x - le[X - 1].x) / 2 : X === 0 && le.length > 1 ? Ie = (le[1].x - le[0].x) / 2 : X === le.length - 1 && le.length > 1 && (Ie = (le[X].x - le[X - 1].x) / 2);
              const Ke = -I * Ie, ot = A.get(le[X].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ot[1] += Ke, A.set(le[X].idx, ot);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${me} elem interfaz, kn=${$}, ks=${y}`);
        } else {
          const C = [
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
          ], U = [
            [
              n,
              l,
              0
            ]
          ], V = ho({
            points: [
              ...C,
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
          m = V.nodes, u = V.elements;
          const se = (q) => {
            const me = (m[q[0]][0] + m[q[1]][0] + m[q[2]][0]) / 3, ne = (m[q[0]][1] + m[q[1]][1] + m[q[2]][1]) / 3, fe = me >= -z && me <= O && ne >= 0 && ne <= l, te = me >= 0 && me <= n && ne >= l && ne <= l + t;
            return fe || te;
          }, ee = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Fe = [];
          for (let q = 0; q < u.length; q++) {
            const me = se(u[q]);
            Fe.push(!me), me ? (ee.set(q, i), Q.set(q, i), ie.set(q, s), Se.set(q, r), de.set(q, 1)) : (ee.set(q, d), Q.set(q, d), ie.set(q, b), Se.set(q, S), de.set(q, 1));
          }
          R = {
            elasticities: ee,
            elasticitiesOrthogonal: Q,
            thicknesses: de,
            poissonsRatios: ie,
            shearModuli: Se
          };
          for (let q = 0; q < m.length; q++) {
            const me = m[q][0], ne = m[q][1];
            Math.abs(ne) < 1e-6 ? E.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(me - w) < a * 0.1 && E.set(q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let q = 0; q < u.length; q++) {
            if (!Fe[q]) continue;
            const me = u[q], ne = m[me[0]], fe = m[me[1]], te = m[me[2]], be = Math.abs((fe[0] - ne[0]) * (te[1] - ne[1]) - (te[0] - ne[0]) * (fe[1] - ne[1])) / 2, Ee = -p * be / 3;
            for (const le of me) {
              const X = A.get(le) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              X[1] += Ee, A.set(le, X);
            }
          }
          if (I > 0) {
            const q = [];
            for (let me = 0; me < m.length; me++) {
              const ne = m[me][0], fe = m[me][1];
              Math.abs(fe - v) < a * 0.1 && ne > n - 1e-6 && q.push({
                idx: me,
                x: ne
              });
            }
            q.sort((me, ne) => me.x - ne.x);
            for (let me = 0; me < q.length; me++) {
              let ne = a;
              me > 0 && me < q.length - 1 ? ne = (q[me + 1].x - q[me - 1].x) / 2 : me === 0 && q.length > 1 ? ne = (q[1].x - q[0].x) / 2 : me === q.length - 1 && q.length > 1 && (ne = (q[me].x - q[me - 1].x) / 2);
              const fe = -I * ne, te = A.get(q[me].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              te[1] += fe, A.set(q[me].idx, te);
            }
          }
        }
      }
      if (L === 3) {
        const w = ho({
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
        for (let se = 0; se < m.length; se++) Math.abs(m[se][1]) < 1e-6 && E.set(se, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, C = Math.min(h, t), U = v - C, V = [];
        for (let se = 0; se < m.length; se++) {
          const ee = m[se][0], Q = m[se][1];
          Math.abs(ee - n) < a * 0.6 && Q >= l - 1e-6 && V.push({
            idx: se,
            y: Q
          });
        }
        V.sort((se, ee) => se.y - ee.y);
        for (let se = 0; se < V.length; se++) {
          const { idx: ee, y: Q } = V[se], de = Math.max(0, v - Q);
          if (de <= 0 || Q < U - 1e-6) continue;
          const ie = Math.min(de, C), Se = f * ie;
          let Fe = a;
          se > 0 && se < V.length - 1 ? Fe = (V[se + 1].y - V[se - 1].y) / 2 : se === 0 && V.length > 1 ? Fe = (V[1].y - V[0].y) / 2 : se === V.length - 1 && V.length > 1 && (Fe = (V[se].y - V[se - 1].y) / 2);
          const q = Se * Fe;
          Math.abs(q) > 1e-10 && A.set(ee, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((se, ee) => [
            ee,
            i
          ])),
          elasticitiesOrthogonal: new Map(u.map((se, ee) => [
            ee,
            i
          ])),
          thicknesses: new Map(u.map((se, ee) => [
            ee,
            n
          ])),
          poissonsRatios: new Map(u.map((se, ee) => [
            ee,
            s
          ])),
          shearModuli: new Map(u.map((se, ee) => [
            ee,
            r
          ]))
        };
      }
      const j = {
        supports: E,
        loads: A
      }, x = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const w = zt(m, u, j, R), v = u.filter((de) => de.length === 3), C = {};
        for (const de of Object.keys(R)) {
          const ie = R[de];
          if (ie && ie instanceof Map) {
            const Se = /* @__PURE__ */ new Map();
            let Fe = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (ie.has(q) && Se.set(Fe, ie.get(q)), Fe++);
            C[de] = Se;
          }
        }
        const U = bo(m, v, C, w), V = m.map((de) => [
          de[0],
          0,
          de[1]
        ]);
        if (e.nodes.val = V, e.elements.val = v, w && w.deformations) {
          const de = /* @__PURE__ */ new Map();
          w.deformations.forEach((ie, Se) => {
            de.set(Se, [
              ie[0],
              ie[2],
              ie[1],
              ie[3],
              ie[5],
              ie[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: de
          });
        }
        const se = /* @__PURE__ */ new Map();
        E.forEach((de, ie) => se.set(ie, de));
        const ee = /* @__PURE__ */ new Map();
        A.forEach((de, ie) => ee.set(ie, [
          de[0],
          de[2],
          de[1],
          de[3],
          de[5],
          de[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: se,
          loads: ee
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Q = 0;
        w && w.deformations && w.deformations.forEach((de) => {
          const ie = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          Q = Math.max(Q, ie);
        }), console.log(`Muro Contencion [${x[L]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${c}, gamma=${p}, qs=${I}`), L === 1 && console.log(`  Es=${d}, nus=${b}`), L === 2 && console.log(`  Es=${d}, nus=${b}, kn=${$}, ks=${y}`), L === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch (w) {
        console.warn("Muro Contencion failed:", w.message);
      }
      setTimeout(() => yt(), 50), et();
    }
    function ys() {
      const t = re("Lx") || 2, o = re("Ly") || 2, n = re("t") || 0.5, l = re("colA") || 0.4, a = re("colH") || 1.5, i = Math.round(re("nx") || 8), s = Math.round(re("ny") || 8), r = re("E") || 25e6, p = re("nu") || 0.2, c = re("P") || -500, d = re("Mx") || 0, b = re("My") || 0, S = re("ks") || 2e4, $ = t / i, y = o / s, f = t / 2, h = o / 2, I = l / 2, L = [];
      for (let E = 0; E <= s; E++) for (let A = 0; A <= i; A++) {
        const R = E * (i + 1) + A;
        let j = $, x = y;
        (A === 0 || A === i) && (j = $ / 2), (E === 0 || E === s) && (x = y / 2), L.push({
          node: R,
          dof: 0,
          k: S * j * x
        });
      }
      let z = 0;
      for (let E = 0; E <= s; E++) for (let A = 0; A <= i; A++) Math.abs(A * $ - f) <= I + 1e-6 && Math.abs(E * y - h) <= I + 1e-6 && z++;
      const O = c / Math.max(z, 1), k = [];
      for (let E = 0; E <= s; E++) for (let A = 0; A <= i; A++) {
        const R = A * $, j = E * y;
        Math.abs(R - f) <= I + 1e-6 && Math.abs(j - h) <= I + 1e-6 && k.push({
          node: E * (i + 1) + A,
          dof: 0,
          value: O
        });
      }
      if (Math.abs(d) > 1e-6) {
        const E = I > 1e-6 ? I : y, A = d / E;
        for (let R = 0; R <= s; R++) for (let j = 0; j <= i; j++) {
          const x = j * $, w = R * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = w - h;
            if (Math.abs(v) > 1e-6) {
              const C = v > 0 ? 1 : -1;
              k.push({
                node: R * (i + 1) + j,
                dof: 0,
                value: C * A / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const E = I > 1e-6 ? I : $, A = b / E;
        for (let R = 0; R <= s; R++) for (let j = 0; j <= i; j++) {
          const x = j * $, w = R * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = x - f;
            if (Math.abs(v) > 1e-6) {
              const C = v > 0 ? 1 : -1;
              k.push({
                node: R * (i + 1) + j,
                dof: 0,
                value: C * A / z * 2
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
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${i}x${s} elem`), console.log(`  col=${l}m, P=${c}, Mx=${d}, My=${b}, ks=${S}`);
      try {
        const E = Un({
          E: r,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: i,
          meshNy: s,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: L,
          pointLoads: k
        });
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const A = E.nodeResults.map((U) => [
          U.x,
          U.y,
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
        const j = E.elementResults.map((U) => [
          ...U.nodes
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
        E.nodeResults.forEach((U, V) => {
          x.set(V, [
            0,
            0,
            U.w,
            U.bx,
            U.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((U, V) => {
          const se = U.x, ee = U.y;
          (se < 1e-6 || se > t - 1e-6 || ee < 1e-6 || ee > o - 1e-6) && w.set(V, [
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
          c / 4,
          0,
          0,
          0
        ]), v.set(R + 5, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), v.set(R + 6, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), v.set(R + 7, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: w,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const U = E.elementResults.length, V = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
          E.elementResults.forEach((Q, de) => {
            V.set(de, [
              Q.Mxx,
              Q.Mxx,
              Q.Mxx
            ]), se.set(de, [
              Q.Myy,
              Q.Myy,
              Q.Myy
            ]), ee.set(de, [
              Q.Mxy,
              Q.Mxy,
              Q.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: V,
            bendingYY: se,
            bendingXY: ee
          };
        }
        const C = Ze();
        C && (C.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => yt(), 50), et();
    }
    function $s() {
      const t = re("Lx") || 0.4, o = re("Ly") || 0.4, n = re("t") || 0.025, l = re("dBolt") || 0.022, a = re("sx") || 0.28, i = re("sy") || 0.28, s = re("colA") || 0.2, r = re("meshSize") || 8e-3, p = re("E") || 2e8, c = re("nu") || 0.3, d = p / (2 * (1 + c)), b = re("P") || -200, S = Math.round(re("nBolts") || 4), $ = t / 2, y = o / 2, f = l / 2, h = s / 2, I = [];
      S >= 4 && (I.push([
        $ - a / 2,
        y - i / 2
      ]), I.push([
        $ + a / 2,
        y - i / 2
      ]), I.push([
        $ + a / 2,
        y + i / 2
      ]), I.push([
        $ - a / 2,
        y + i / 2
      ])), S >= 6 && (I.push([
        $,
        y - i / 2
      ]), I.push([
        $,
        y + i / 2
      ])), S >= 8 && (I.push([
        $ - a / 2,
        y
      ]), I.push([
        $ + a / 2,
        y
      ]));
      const { nodes: L, elements: z } = ho({
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
      }), O = (x, w) => {
        for (const [v, C] of I) if ((x - v) * (x - v) + (w - C) * (w - C) < f * f) return true;
        return false;
      }, k = z.filter((x) => {
        const w = (L[x[0]][0] + L[x[1]][0] + L[x[2]][0]) / 3, v = (L[x[0]][1] + L[x[1]][1] + L[x[2]][1]) / 3;
        return !O(w, v);
      }), m = L, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        for (const [C, U] of I) {
          const V = Math.sqrt((w - C) * (w - C) + (v - U) * (v - U));
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
      const E = /* @__PURE__ */ new Map();
      let A = 0;
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        Math.abs(w - $) <= h && Math.abs(v - y) <= h && A++;
      }
      const R = b / Math.max(A, 1);
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        if (Math.abs(w - $) <= h && Math.abs(v - y) <= h) {
          const C = E.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += R, E.set(x, C);
        }
      }
      const j = {
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
          c
        ])),
        shearModuli: new Map(k.map((x, w) => [
          w,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${s * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const x = zt(m, k, {
          supports: u,
          loads: E
        }, j), w = bo(m, k, j, x);
        e.nodes.val = m, e.elements.val = k, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), w && e.analyzeOutputs && (e.analyzeOutputs.val = w);
        let v = 0;
        x && x.deformations && x.deformations.forEach((C) => {
          const U = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          v = Math.max(v, U);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => yt(), 50), et();
    }
    function Ms() {
      const t = re("colB") || 0.3, o = re("colH") || 0.3, n = re("colT") || 8e-3, l = re("colLen") || 1.5, a = re("Lx") || 0.45, i = re("Ly") || 0.45, s = re("tPlaca") || 0.025, r = re("dBolt") || 0.022, p = re("sx") || 0.32, c = re("sy") || 0.32, d = Math.round(re("nSubColV") || 6), b = Math.round(re("nSubColH") || 4), S = Math.round(re("nSubPlaca") || 10), $ = re("E") || 2e8, y = re("nu") || 0.3, f = $ / (2 * (1 + y)), h = re("P") || -300, I = a / 2, L = i / 2, z = r / 2, O = t / 2, k = o / 2, m = [], u = [], E = S, A = a / E, R = i / E, j = (fe, te) => te * (E + 1) + fe;
      for (let fe = 0; fe <= E; fe++) for (let te = 0; te <= E; te++) m.push([
        te * A,
        fe * R,
        0
      ]);
      const x = [
        [
          I - p / 2,
          L - c / 2
        ],
        [
          I + p / 2,
          L - c / 2
        ],
        [
          I + p / 2,
          L + c / 2
        ],
        [
          I - p / 2,
          L + c / 2
        ]
      ], w = (fe, te) => {
        for (const [be, Ee] of x) if ((fe - be) * (fe - be) + (te - Ee) * (te - Ee) < z * z) return true;
        return false;
      }, v = u.length;
      for (let fe = 0; fe < E; fe++) for (let te = 0; te < E; te++) {
        const be = (te + 0.5) * A, Ee = (fe + 0.5) * R;
        w(be, Ee) || u.push([
          j(te, fe),
          j(te + 1, fe),
          j(te + 1, fe + 1),
          j(te, fe + 1)
        ]);
      }
      const C = u.length - v, U = d, V = b, se = [
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
      ], de = (fe, te) => {
        for (let be = 0; be < (E + 1) * (E + 1); be++) if (Math.abs(m[be][0] - fe) < A * 0.3 && Math.abs(m[be][1] - te) < R * 0.3 && Math.abs(m[be][2]) < 1e-6) return be;
        return -1;
      };
      for (const [fe, te] of Q) {
        const [be, Ee] = se[fe], [le, X] = se[te], Ie = [];
        for (let Ke = 0; Ke <= U; Ke++) {
          const ot = [], gt = Ke / U * l;
          for (let It = 0; It <= V; It++) {
            const kt = It / V, Dt = be + kt * (le - be), So = Ee + kt * (X - Ee);
            if (Ke === 0) {
              const Vt = de(Dt, So);
              if (Vt >= 0) {
                ot.push(Vt);
                continue;
              }
            }
            let ao = -1;
            for (let Vt = 0; Vt < m.length; Vt++) if (Math.abs(m[Vt][0] - Dt) < 1e-6 && Math.abs(m[Vt][1] - So) < 1e-6 && Math.abs(m[Vt][2] - gt) < 1e-6) {
              ao = Vt;
              break;
            }
            ao >= 0 ? ot.push(ao) : (ot.push(m.length), m.push([
              Dt,
              So,
              gt
            ]));
          }
          Ie.push(ot);
        }
        for (let Ke = 0; Ke < U; Ke++) for (let ot = 0; ot < V; ot++) u.push([
          Ie[Ke][ot],
          Ie[Ke][ot + 1],
          Ie[Ke + 1][ot + 1],
          Ie[Ke + 1][ot]
        ]);
      }
      const ie = u.length - ee, Se = /* @__PURE__ */ new Map();
      for (let fe = 0; fe < (E + 1) * (E + 1); fe++) {
        const te = m[fe][0], be = m[fe][1];
        for (const [Ee, le] of x) {
          const X = Math.sqrt((te - Ee) * (te - Ee) + (be - le) * (be - le));
          X >= z * 0.5 && X <= z * 2 && Se.set(fe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Fe = /* @__PURE__ */ new Map(), q = [];
      for (let fe = 0; fe < m.length; fe++) Math.abs(m[fe][2] - l) < 1e-6 && q.push(fe);
      const me = h / Math.max(q.length, 1);
      for (const fe of q) Fe.set(fe, [
        0,
        0,
        me,
        0,
        0,
        0
      ]);
      const ne = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let fe = v; fe < v + C; fe++) ne.elasticities.set(fe, $), ne.poissonsRatios.set(fe, y), ne.thicknesses.set(fe, s), ne.shearModuli.set(fe, f);
      for (let fe = ee; fe < ee + ie; fe++) ne.elasticities.set(fe, $), ne.poissonsRatios.set(fe, y), ne.thicknesses.set(fe, n), ne.shearModuli.set(fe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${i * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${C} Q4 placa + ${ie} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const fe = zt(m, u, {
          supports: Se,
          loads: Fe
        }, ne), te = bo(m, u, ne, fe);
        e.nodes.val = m, e.elements.val = u, fe && e.deformOutputs && (e.deformOutputs.val = fe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Se,
          loads: Fe
        }), e.elementInputs && (e.elementInputs.val = ne), te && e.analyzeOutputs && (e.analyzeOutputs.val = te);
        let be = 0;
        (fe == null ? void 0 : fe.deformations) && fe.deformations.forEach((Ee) => {
          const le = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          be = Math.max(be, le);
        }), console.log(`  max|u| = ${be.toExponential(4)}`);
      } catch (fe) {
        console.warn("Col+Placa failed:", fe.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Se,
          loads: Fe
        });
      }
      setTimeout(() => yt(), 50), et();
    }
    function ws() {
      const t = re("H") || 6, o = re("angle") || 45, n = re("bTop") || 3, l = re("bBot") || 3, a = re("meshSize") || 2, i = re("E") || 5e4, s = re("nu") || 0.3, r = re("gamma") || 18, p = re("c") || 15, c = re("phi") || 30, d = re("qs") || 0, b = t / Math.tan(o * Math.PI / 180), S = l + b + n, $ = t, y = [
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
      ], { nodes: f, elements: h } = ho({
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
        const k = I.map((w) => [
          w[0],
          w[1]
        ]), m = h.map((w) => [
          w[0],
          w[1],
          w[2]
        ]), u = Xa({
          nodes: k,
          elements: m,
          E: i,
          nu: s,
          gamma: r,
          c: p,
          phi: c,
          thickness: 1,
          supports: L,
          surcharge: d,
          surfaceYThreshold: O
        }), E = I.map((w) => [
          w[0],
          0,
          w[1]
        ]);
        e.nodes.val = E, e.elements.val = h;
        const A = /* @__PURE__ */ new Map();
        for (let w = 0; w < u.displacements.length; w++) {
          const [v, C] = u.displacements[w];
          A.set(w, [
            v,
            0,
            C,
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
        for (let w = 0; w < u.plasticStrain.length; w++) {
          const v = u.plasticStrain[w];
          R.set(w, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: R
        });
        let j = 0;
        for (const [w, v] of u.displacements) {
          const C = Math.sqrt(w * w + v * v);
          j = Math.max(j, C);
        }
        let x = 0;
        for (const w of u.plasticStrain) x = Math.max(x, w);
        console.log(`Talud SRM: ${I.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${c}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${j.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => yt(), 50), et();
    }
    let io = null, Ft = null, co = null;
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
    function wt(t) {
      const o = Vo.find((n) => n.id === P);
      return t / o.toM;
    }
    function Et(t) {
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
      const i = qe.steelVigaType, s = i === 0 ? mn() : bn();
      if (qe.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], c = `b${n}${r}`, d = `h${n}${r}`, b = {};
          b[c] = +wt(p.b).toFixed(2), b[d] = +wt(p.h).toFixed(2), t.addBinding(b, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(b, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key, c = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), d = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          c && (o[parseInt(c[1])].b = Et(r.value), Oe()), d && (o[parseInt(d[1])].h = Et(r.value), Oe());
        });
      } else if (i <= 1) {
        for (let r = 0; r < o.length; r++) {
          const p = {};
          p[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(p, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: s
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const c = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          c && (o[parseInt(c[1])].profileIdx = r.value, Oe());
        });
      } else if (i === 2) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], c = {}, d = `${n}${r}`;
          c[`bf${d}`] = +wt(p.bf ?? 0.2).toFixed(3), c[`h${d}`] = +wt(p.hf ?? 0.4).toFixed(3), c[`tf${d}`] = +wt(p.tf ?? 0.015).toFixed(3), c[`tw${d}`] = +wt(p.tw ?? 0.01).toFixed(3), t.addBinding(c, `bf${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(c, `h${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `tf${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(c, `tw${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const d = `${n}${c}`;
            p === `bf${d}` && (o[c].bf = Et(r.value), Oe()), p === `h${d}` && (o[c].hf = Et(r.value), Oe()), p === `tf${d}` && (o[c].tf = Et(r.value), Oe()), p === `tw${d}` && (o[c].tw = Et(r.value), Oe());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], c = {}, d = `${n}${r}`;
          c[`bc${d}`] = +wt(p.bc ?? 0.2).toFixed(3), c[`hc${d}`] = +wt(p.hc ?? 0.3).toFixed(3), c[`t${d}`] = +wt(p.t ?? 8e-3).toFixed(3), t.addBinding(c, `bc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(c, `hc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `t${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const d = `${n}${c}`;
            p === `bc${d}` && (o[c].bc = Et(r.value), Oe()), p === `hc${d}` && (o[c].hc = Et(r.value), Oe()), p === `t${d}` && (o[c].t = Et(r.value), Oe());
          }
        });
      }
    }
    function No() {
      var _a2;
      if (Ft) {
        try {
          Ft.dispose();
        } catch {
        }
        Ft = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), T !== "edificio" && T !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = ya();
      if (!o) return;
      o.style.display = "";
      const n = M, l = Math.round(((_a2 = K.nPisos) == null ? void 0 : _a2.val) ?? 3), a = $a(), i = Ma(), s = ce.length || 1, r = oe.length || 1;
      for (; qe.perFloor.length < l; ) {
        const m = qe.perFloor.length > 0 ? JSON.parse(JSON.stringify(qe.perFloor[qe.perFloor.length - 1])) : ro(s, r);
        qe.perFloor.push(m);
      }
      qe.perFloor.length > l && (qe.perFloor.length = l);
      for (const m of qe.perFloor) {
        for (; m.vigasX.length < s; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : ut());
        for (m.vigasX.length > s && (m.vigasX.length = s); m.vigasY.length < r; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : ut());
        m.vigasY.length > r && (m.vigasY.length = r);
      }
      Ft = new on({
        title: `Sections (${n.label})`,
        container: o
      });
      const p = {
        colMat: qe.colMat
      };
      if (Ft.addBinding(p, "colMat", {
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
        Ft.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (E) => {
          qe.colShape = E.value, No(), Oe();
        });
        const u = {
          fc: +To(qe.fc).toFixed(1)
        };
        Ft.addBinding(u, "fc", {
          min: i[0],
          max: i[1],
          step: i[2],
          label: `f'c col (${zn()})`
        }), Ft.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (qe.fc = Tn(E.value), Oe());
        });
      } else if (qe.colMat === 1) {
        const m = {
          colType: qe.steelColType
        };
        Ft.addBinding(m, "colType", {
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
      Ft.addBlade({
        view: "separator"
      });
      const c = {
        vigaMat: qe.vigaMat
      };
      if (Ft.addBinding(c, "vigaMat", {
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
        Ft.addBinding(m, "vigaType", {
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
      const d = qe.steelColType === 0 ? mn() : bn();
      qe.steelVigaType === 0 ? mn() : bn();
      const b = P === "m" ? [
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
        const u = qe.perFloor[m], E = Ft.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (qe.colMat === 0) if (qe.colShape === 1) {
          const A = {
            dCol: +wt(u.dCol).toFixed(2)
          };
          E.addBinding(A, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), E.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Et(R.value), Oe());
          });
        } else {
          const A = {
            bCol: +wt(u.bCol).toFixed(2),
            hCol: +wt(u.hCol).toFixed(2)
          };
          E.addBinding(A, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), E.addBinding(A, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), E.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Et(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Et(R.value), Oe());
          });
        }
        else if (qe.colMat === 1) if (qe.steelColType <= 1) {
          const A = {
            col: u.colProfileIdx
          };
          E.addBinding(A, "col", {
            label: "Columna",
            options: d
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Oe();
          });
        } else if (qe.steelColType === 2) {
          const A = {
            bf: +wt(u.colBf ?? 0.3).toFixed(3),
            h: +wt(u.colHf ?? 0.3).toFixed(3),
            tf: +wt(u.colTf ?? 0.02).toFixed(3),
            tw: +wt(u.colTw ?? 0.012).toFixed(3)
          };
          E.addBinding(A, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), E.addBinding(A, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(A, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), E.addBinding(A, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), E.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Et(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Et(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Et(R.value), Oe()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Et(R.value), Oe());
          });
        } else {
          const A = {
            bc: +wt(u.colBc ?? 0.3).toFixed(3),
            hc: +wt(u.colHc ?? 0.3).toFixed(3),
            t: +wt(u.colT ?? 0.01).toFixed(3)
          };
          E.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(A, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), E.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Et(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Et(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = Et(R.value), Oe());
          });
        }
        else {
          const A = {
            bc: +wt(u.colBc ?? 0.3).toFixed(3),
            hc: +wt(u.colHc ?? 0.3).toFixed(3),
            t: +wt(u.colT ?? 0.01).toFixed(3),
            Es: +To(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +To(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          E.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), E.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), E.addBinding(A, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), E.addBlade({
            view: "separator"
          });
          const R = +To(1e8).toFixed(0), j = +To(3e8).toFixed(0), x = Math.max(1, Math.round((j - R) / 200));
          E.addBinding(A, "Es", {
            min: R,
            max: j,
            step: x,
            label: `Es (${zn()})`
          }), E.addBinding(A, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(A, "fc", {
            min: i[0],
            max: i[1],
            step: i[2],
            label: `f'c (${zn()})`
          }), E.addBinding(A, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", (w) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = w.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Et(w.value), Oe()), ((_b = w.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Et(w.value), Oe()), ((_c = w.target) == null ? void 0 : _c.key) === "t" && (u.colT = Et(w.value), Oe()), ((_d = w.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Tn(w.value), Oe()), ((_e2 = w.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = w.value, Oe()), ((_f = w.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Tn(w.value), Oe()), ((_g = w.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = w.value, Oe());
          });
        }
        if (u.vigasX.length > 0) {
          const A = E.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Es(A, u.vigasX, "x", a, b);
        }
        if (u.vigasY.length > 0) {
          const A = E.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Es(A, u.vigasY, "y", a, b);
        }
      }
      Ft.addBlade({
        view: "separator"
      });
      const S = Ft.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), $ = {
        activar: ke,
        direccion: Je === "x" ? 0 : 1,
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (ke = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Je = m.value === 0 ? "x" : "y", Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ae = Math.round(m.value), Oe());
      }), Ft.addBlade({
        view: "separator"
      });
      const y = Ft.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ue,
        espesor: +wt(rt).toFixed(3),
        subdivX: dt,
        subdivY: Mt
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ue = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (rt = Et(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (dt = Math.round(m.value), Oe()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Mt = Math.round(m.value), Oe());
      }), Ft.addBlade({
        view: "separator"
      });
      const h = Ft.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +wt(He).toFixed(3),
        subdivH: je,
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (He = Et(m.value), Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (je = Math.round(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (ge = Math.round(m.value), Oe());
      });
      const L = ce.length || 1, z = oe.length || 1, O = L + 1, k = z + 1;
      if (L > 0) {
        const m = h.addFolder({
          title: `Muros dir X (${L} vanos)`,
          expanded: false
        });
        for (let u = 0; u < L; u++) for (let E = 0; E < k; E++) {
          const A = `wx_${u}_${E}`, R = ye.some((w) => w.dir === "x" && w.bay === u && w.axisIdx === E), j = {};
          j[A] = R;
          const x = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + E)}`;
          m.addBinding(j, A, {
            label: x
          }).on("change", (w) => {
            w.value ? ye.push({
              dir: "x",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ye = ye.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === E)), Oe();
          });
        }
      }
      if (z > 0) {
        const m = h.addFolder({
          title: `Muros dir Y (${z} vanos)`,
          expanded: false
        });
        for (let u = 0; u < z; u++) for (let E = 0; E < O; E++) {
          const A = `wy_${u}_${E}`, R = ye.some((w) => w.dir === "y" && w.bay === u && w.axisIdx === E), j = {};
          j[A] = R;
          const x = `Vano Y${u + 1} / Eje X${E + 1}`;
          m.addBinding(j, A, {
            label: x
          }).on("change", (w) => {
            w.value ? ye.push({
              dir: "y",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : ye = ye.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === E)), Oe();
          });
        }
      }
      if (ye.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${ye.length} ubicaciones`
        };
        h.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function so() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (pe || (pe = t.innerHTML), $e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
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
        const i = $e.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of n) {
          const r = {
            min: K[s.key].min,
            max: K[s.key].max
          };
          i.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), i.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), i.on("change", () => {
            K[s.key] && (K[s.key].min = r.min, K[s.key].max = r.max, K[s.key].val < r.min && (K[s.key].val = r.min), K[s.key].val > r.max && (K[s.key].val = r.max)), so(), Oe();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && K[r]) {
            if (K[r].val = s.value, T === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const p = Math.round(K.nVanosX.val), c = Math.round(K.nVanosY.val);
                for (; ce.length < p; ) ce.push(ce[ce.length - 1] ?? M.defaultSpan);
                for (ce.length > p && (ce.length = p); oe.length < c; ) oe.push(oe[oe.length - 1] ?? M.defaultSpan * 0.8);
                oe.length > c && (oe.length = c);
              }
              if (r === "nPisos" || r === "hPiso") {
                const p = Math.round(K.nPisos.val), c = ((_b = K.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; _.length < p; ) _.push(_[_.length - 1] ?? c);
                _.length > p && (_.length = p);
              }
              so();
            }
            Oe();
          }
        });
      }
      if (T === "edificio") {
        if (co) {
          try {
            co.dispose();
          } catch {
          }
          co = null;
        }
        const a = document.getElementById("luces-panel");
        if (a) {
          let i = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", c = ((_a2 = K.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = K.Lvdx) == null ? void 0 : _b.val) || 0, b = ((_c = K.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = K.Lvdy) == null ? void 0 : _d.val) || 0;
            let $ = "X: ";
            c > 0 && ($ += `\u251C${c.toFixed(1)}\u2524`);
            for (let h = 0; h < ce.length; h++) $ += `[${p[h + (c > 0 ? 1 : 0)]}]\u2500\u2500${ce[h].toFixed(1)}\u2500\u2500`;
            $ += `[${p[ce.length + (c > 0 ? 1 : 0)]}]`, d > 0 && ($ += `\u251C${d.toFixed(1)}\u2524`);
            let y = "Y: ";
            b > 0 && (y += `\u251C${b.toFixed(1)}\u2524`);
            for (let h = 0; h < oe.length; h++) y += `[${h + 1 + (b > 0 ? 1 : 0)}]\u2500\u2500${oe[h].toFixed(1)}\u2500\u2500`;
            y += `[${oe.length + 1 + (b > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let h = 0; h < _.length; h++) f += `P${h + 1}=${_[h].toFixed(1)} `;
            r.textContent = $ + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = M;
          try {
            co = new on({
              title: `Luces (${s.length})`,
              container: a
            });
            const p = co.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let d = 0; d < ce.length; d++) {
              const b = d, S = {
                v: ce[d]
              };
              p.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", ($) => {
                ce[b] = $.value, Oe();
              });
            }
            const c = co.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let d = 0; d < oe.length; d++) {
              const b = d, S = {
                v: oe[d]
              };
              c.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", ($) => {
                oe[b] = $.value, Oe();
              });
            }
            if (_.length > 0) {
              const d = co.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let b = 0; b < _.length; b++) {
                const S = b, $ = {
                  v: _[b]
                };
                d.addBinding($, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `Piso ${b + 1}`
                }).on("change", (y) => {
                  _[S] = y.value, Oe();
                });
              }
            }
          } catch (p) {
            console.error("Luces Tweakpane error:", p);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", i(), a.appendChild(r);
        }
      }
      if (No(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const a = un()[T];
        if (a && a.length > 0) {
          const i = {};
          a.forEach((r, p) => {
            i[r.label] = p;
          });
          const s = {
            apoyo: vt
          };
          $e.addBinding(s, "apoyo", {
            label: "Apoyo",
            options: i
          }).on("change", (r) => {
            vt = r.value, Oe();
          });
        }
        if (T === "placa-3q" || T === "placa-q4") {
          const i = {
            teoria: Re
          };
          $e.addBinding(i, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (s) => {
            Re = s.value, Oe();
          });
        }
      }
      const l = ds()[T];
      if (l && l.length > 0) {
        io = new on({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = ft[s.key].val;
        for (const s of l) io.addBinding(a, s.key, {
          min: ft[s.key].min,
          max: ft[s.key].max,
          step: ft[s.key].step,
          label: ft[s.key].label
        });
        const i = io.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of l) {
          const r = {
            min: ft[s.key].min,
            max: ft[s.key].max
          };
          i.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), i.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), i.on("change", () => {
            ft[s.key] && (ft[s.key].min = r.min, ft[s.key].max = r.max, ft[s.key].val < r.min && (ft[s.key].val = r.min), ft[s.key].val > r.max && (ft[s.key].val = r.max)), so(), Oe();
          });
        }
        io.on("change", (s) => {
          var _a2;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && ft[r]) {
            if (ft[r].val = s.value, e.nodeInputs) {
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
        setParam: (a, i) => {
          if (K[a]) K[a].val = i, Oe(), so();
          else if (ft[a]) {
            if (ft[a].val = i, e.nodeInputs) {
              const s = e.nodeInputs.val;
              s.supports && (e.nodeInputs.val = {
                supports: s.supports
              });
            }
            setTimeout(() => {
              Fn(), so();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const i in K) a[i] = K[i].val;
          for (const i in ft) a[i] = ft[i].val;
          return a;
        },
        setGenerator: tt,
        createCustomPanel: (a, i, s) => wa(a, i, s),
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
      const i = new on({
        title: t,
        container: a
      }), s = {};
      for (const [r, p] of Object.entries(o)) {
        const c = p.label || r;
        if (Array.isArray(p.value)) {
          s[r] = p.value;
          const d = {
            [r]: p.value.join(", ")
          };
          i.addBinding(d, r, {
            label: c
          }).on("change", (b) => {
            s[r] = b.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), n && n({
              ...s
            });
          });
        } else if (p.options) {
          s[r] = p.value;
          const d = {
            [r]: p.value
          }, b = {};
          for (const S of p.options) b[S] = S;
          i.addBinding(d, r, {
            label: c,
            options: b
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
          i.addBinding(d, r, {
            label: c
          }).on("change", (b) => {
            s[r] = b.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "string") {
          s[r] = p.value;
          const d = {
            [r]: p.value
          };
          i.addBinding(d, r, {
            label: c
          }).on("change", (b) => {
            s[r] = b.value, n && n({
              ...s
            });
          });
        } else {
          s[r] = p.value;
          const d = {
            [r]: p.value
          }, b = {
            label: c
          };
          p.min !== void 0 && (b.min = p.min), p.max !== void 0 && (b.max = p.max), p.step !== void 0 && (b.step = p.step), i.addBinding(d, r, b).on("change", (S) => {
            s[r] = S.value, n && n({
              ...s
            });
          });
        }
      }
      return n && i.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...s
        });
      }), An.set(t, {
        pane: i,
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
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
      }
      if (Ft) {
        try {
          Ft.dispose();
        } catch {
        }
        Ft = null;
      }
      if (co) {
        try {
          co.dispose();
        } catch {
        }
        co = null;
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
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), T && yt(true);
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
    let Rt = null;
    function Sa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = P, i = g, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${T || "custom"}`), s.push(`# Units: ${i}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((c, d) => {
        s.push(`  ${String(d).padStart(4)}  ${c[0].toFixed(4).padStart(10)}  ${c[1].toFixed(4).padStart(10)}  ${c[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((c, d) => {
        const b = c.map((S) => String(S).padStart(6)).join("");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((c, d) => {
        const b = c.map((S) => S ? "  1" : "  0").join("");
        s.push(`  ${String(d).padStart(4)} ${b}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((c, d) => {
        const b = c.map((S) => S.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push("")), l) {
        s.push("## ELEMENT PROPERTIES");
        const c = [
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
        ], d = "# elem  " + c.map((b) => b.name.padStart(12)).join(" ");
        s.push(d);
        for (let b = 0; b < o.length; b++) {
          const S = c.map(($) => {
            var _a3;
            const y = (_a3 = $.map) == null ? void 0 : _a3.get(b);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(b).padStart(4)}  ${S}`);
        }
        s.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (s.push(`## DISPLACEMENTS (${r.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((c, d) => {
        const b = c.map((S) => S.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((c, d) => {
        const b = c.map((S) => S.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push("")), T) {
        s.push("## CLI COMMAND");
        const c = Object.entries(K).map(([d, b]) => `${d}=${b.val}`).join(" ");
        s.push(`cad.${T === "edificio" ? "building" : T}(${c})`);
      }
      return s.join(`
`);
    }
    let Zo = false;
    function Ia() {
      var _a2, _b, _c, _d;
      if (Rt) {
        Rt.remove(), Rt = null, Zo = false;
        return;
      }
      const t = Sa();
      Rt = document.createElement("div"), Rt.id = "export-overlay", Rt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Rt.innerHTML = `
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
    `, document.body.appendChild(Rt), (_a2 = Rt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Rt == null ? void 0 : Rt.remove(), Rt = null, Zo = false;
      }), (_b = Rt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Rt.querySelector("#export-body"), n = Rt.querySelector("#export-minimize");
        Zo = !Zo, Zo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Rt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Rt.style.width = "720px");
      }), (_c = Rt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Rt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Rt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Rt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, i = {
          generator: T || "custom",
          units: {
            force: g,
            length: P
          },
          nodes: o.map((d, b) => ({
            id: b,
            x: d[0],
            y: d[1],
            z: d[2]
          })),
          elements: n.map((d, b) => ({
            id: b,
            nodes: d
          }))
        };
        (l == null ? void 0 : l.supports) && (i.supports = [], l.supports.forEach((d, b) => i.supports.push({
          node: b,
          dofs: d
        }))), (l == null ? void 0 : l.loads) && (i.loads = [], l.loads.forEach((d, b) => i.loads.push({
          node: b,
          forces: d
        }))), a && (i.properties = {}, a.elasticities && (i.properties.E = Object.fromEntries(a.elasticities)), a.areas && (i.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (i.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (i.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (i.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (i.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (i.displacements = {}, s.forEach((d, b) => i.displacements[b] = d));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (i.reactions = {}, r.forEach((d, b) => i.reactions[b] = d));
        const p = Rt.querySelector("#export-text");
        p.value = JSON.stringify(i, null, 2);
        const c = Rt.querySelector("#export-status");
        c.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function et() {
      var _a2, _b, _c;
      const t = Ce.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let i = 0, s = 0, r = 0;
        for (const c of n) c.length === 2 ? i++ : c.length === 3 ? s++ : c.length === 4 && r++;
        let p = `${o}n ${l}e ${a}s`;
        (r > 0 || s > 0) && (p += ` | ${i}fr`, r > 0 && (p += ` ${r}q4`), s > 0 && (p += ` ${s}tri`)), t.textContent = p;
      }
    }
    function Ln() {
      var _a2;
      if (!_e || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const i = Ua(t, o, n, l, Math.min(a, 12));
        if (i.frequencies && i.frequencies.length > 0) {
          Le = i, Te = t.map((c) => [
            ...c
          ]), xe = 0;
          const { extent: s } = yo(), r = (_a2 = i.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let c = 0;
            for (let d = 0; d < t.length; d++) {
              const b = r[d * 6] || 0, S = r[d * 6 + 1] || 0, $ = r[d * 6 + 2] || 0;
              c = Math.max(c, Math.sqrt(b * b + S * S + $ * $));
            }
            Ge = c > 1e-12 ? s * 0.15 / c : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          ct.render(i, {
            title: p
          }), ct.div.style.display = "", Qo(), console.log(`Modal: ${i.frequencies.length} modos. f\u2081 = ${i.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Le = null;
      }
    }
    function Cn() {
      ve && (cancelAnimationFrame(ve), ve = 0), Te.length > 0 && (e.nodes.val = Te.map((o) => [
        ...o
      ]));
      const t = Ze();
      t && t.scene.traverse((o) => {
        var _a2;
        o.isMesh && ((_a2 = o.material) == null ? void 0 : _a2.vertexColors) && o.visible === false && (o.visible = true);
      }), ct.div.style.display = "none", Le = null;
    }
    function Qo() {
      var _a2;
      if (ve && cancelAnimationFrame(ve), !(Le == null ? void 0 : Le.modeShapes) || !Te.length) return;
      const t = Le.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Le.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = Te.length, i = e.elements.rawVal, { extent: s } = yo(), r = Ce.querySelector("#cad3d-modal-scale"), p = r && parseFloat(r.value) || 15;
      let c = 0;
      for (let z = 0; z < a; z++) {
        const O = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        c = Math.max(c, Math.sqrt(O * O + k * k + m * m));
      }
      const d = c > 1e-12 ? s * p / 100 / c : 1, b = Ze();
      if (!b) return;
      let S = null, $ = null, y = null;
      b.scene.traverse((z) => {
        var _a3;
        !S && z.isPoints && z.geometry && (S = z), !$ && z.isLineSegments && z.geometry && !z.name && ($ = z), z.isMesh && ((_a3 = z.material) == null ? void 0 : _a3.vertexColors) && z.geometry && (y ? z.visible = false : y = z);
      });
      const f = new Float32Array(a * 3), h = [];
      for (const z of i) if (z.length === 2) h.push([
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
            const [E, A] = h[u];
            I[u * 6] = f[E * 3], I[u * 6 + 1] = f[E * 3 + 1], I[u * 6 + 2] = f[E * 3 + 2], I[u * 6 + 3] = f[A * 3], I[u * 6 + 4] = f[A * 3 + 1], I[u * 6 + 5] = f[A * 3 + 2];
          }
          const k = $.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Lo(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of i) if (m.length === 3) {
            const [u, E, A] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]);
          } else if (m.length === 4) {
            const [u, E, A, R] = m;
            k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[E * 3], f[E * 3 + 1], f[E * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), k.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), k.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), k.push(f[R * 3], f[R * 3 + 1], f[R * 3 + 2]);
          }
          if (k.length > 0) {
            const m = y.geometry, u = new Float32Array(k), E = m.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : m.setAttribute("position", new Lo(u, 3));
          }
        }
        b.render(), ve = requestAnimationFrame(L);
      }
      ve = requestAnimationFrame(L);
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
        for (let w = 0; w < t.length; w++) n.supports.has(w) || O.push(w);
        const k = (w) => Math.round(w * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((w, v) => {
          m.add(`${k(t[v][0])},${k(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const w of O) m.has(`${k(t[w][0])},${k(t[w][1])}`) && u.add(w);
        const E = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
        if (I !== 0 || L !== 0) {
          let w = -1 / 0, v = -1 / 0;
          for (const U of u) w = Math.max(w, k(t[U][0])), v = Math.max(v, k(t[U][1]));
          const C = /* @__PURE__ */ new Map();
          for (const U of u) {
            const V = k(t[U][2]);
            C.has(V) || C.set(V, []), C.get(V).push(U);
          }
          C.forEach((U) => {
            if (I !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const se of U) if (k(t[se][0]) === w) {
                const ee = k(t[se][1]);
                V.has(ee) || (V.add(ee), E.add(se));
              }
            }
            if (L !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const se of U) if (k(t[se][1]) === v) {
                const ee = k(t[se][0]);
                V.has(ee) || (V.add(ee), A.add(se));
              }
            }
          });
        }
        const R = 9.81, j = /* @__PURE__ */ new Map();
        for (let w = 0; w < o.length; w++) {
          const v = o[w], C = ((_a2 = l.densities) == null ? void 0 : _a2.get(w)) ?? 0;
          if (!(Math.abs(C) < 1e-15)) {
            if (v.length === 2) {
              const U = ((_b = l.areas) == null ? void 0 : _b.get(w)) ?? 0, V = t[v[0]], se = t[v[1]], ee = Math.sqrt((se[0] - V[0]) ** 2 + (se[1] - V[1]) ** 2 + (se[2] - V[2]) ** 2), de = -(C * U * ee * R) / 2;
              j.set(v[0], (j.get(v[0]) ?? 0) + de), j.set(v[1], (j.get(v[1]) ?? 0) + de);
            } else if (v.length >= 3) {
              const U = ((_c = l.thicknesses) == null ? void 0 : _c.get(w)) ?? 0;
              let V = 0;
              if (v.length === 3) {
                const [Q, de, ie] = v.map((Se) => t[Se]);
                V = 0.5 * Math.abs((de[0] - Q[0]) * (ie[1] - Q[1]) - (ie[0] - Q[0]) * (de[1] - Q[1]));
              } else if (v.length === 4) {
                const [Q, de, ie, Se] = v.map((Fe) => t[Fe]);
                if (V = 0.5 * Math.abs((de[0] - Q[0]) * (ie[1] - Q[1]) - (ie[0] - Q[0]) * (de[1] - Q[1])) + 0.5 * Math.abs((ie[0] - Q[0]) * (Se[1] - Q[1]) - (Se[0] - Q[0]) * (ie[1] - Q[1])), V < 1e-10) {
                  const Fe = [
                    de[0] - Q[0],
                    de[1] - Q[1],
                    de[2] - Q[2]
                  ], q = [
                    Se[0] - Q[0],
                    Se[1] - Q[1],
                    Se[2] - Q[2]
                  ], me = [
                    Fe[1] * q[2] - Fe[2] * q[1],
                    Fe[2] * q[0] - Fe[0] * q[2],
                    Fe[0] * q[1] - Fe[1] * q[0]
                  ];
                  V = Math.sqrt(me[0] ** 2 + me[1] ** 2 + me[2] ** 2);
                }
              }
              const ee = -(C * U * V * R) / v.length;
              for (const Q of v) j.set(Q, (j.get(Q) ?? 0) + ee);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const w of o) w.length === 2 && (x.add(w[0]), x.add(w[1]));
        for (const w of O) {
          const v = E.has(w) ? I : 0, C = A.has(w) ? L : 0, U = j.get(w) ?? 0, V = x.has(w) ? h : 0, se = U + V;
          (v !== 0 || C !== 0 || Math.abs(se) > 1e-10) && z.set(w, [
            v,
            C,
            se,
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
      let i = 0, s = 0, r = 0;
      for (const y of o) y.length === 2 ? i++ : y.length === 3 ? r++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, c = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, b = d - p * 6, S = [], $ = (y) => S.push(y);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), i && $(`&nbsp;&nbsp;Frames: <b>${i}</b>`), s && $(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), r && $(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), $(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${c}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${b} libres`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${d}&times;${d})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = zt(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, I = -1, L = 0, z = 0;
          y.deformations && y.deformations.forEach((E, A) => {
            const R = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            R > h && (h = R, I = A, L = E[0], z = E[2]);
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
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, i = Math.min(t, o), s = Math.max(t, o), r = i * i * i * s * (1 / 3 - 0.21 * i / s * (1 - i * i * i * i / (12 * s * s * s * s)));
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
      const a = o - 2 * n, i = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, r = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: i,
        Iz: s,
        Iy: r,
        J: p
      };
    }
    function On(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, i = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, r = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), c = 2 * ((t - n) / n + (o - n) / n), d = 4 * p * p / (c > 0 ? c : 1);
      return {
        A: i,
        Iz: s,
        Iy: r,
        J: d
      };
    }
    function ka(t, o, n, l, a, i, s) {
      const p = 4700 * Math.sqrt(i / 1e3) * 1e3 / l, c = t - 2 * n, d = o - 2 * n, b = t * o - c * d, S = (t * o * o * o - c * d * d * d) / 12, $ = (o * t * t * t - d * c * c * c) / 12, y = c * d, f = c * d * d * d / 12, h = d * c * c * c / 12, I = b + p * y, L = S + p * f, z = $ + p * h, O = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
      return {
        A: I,
        Iz: L,
        Iy: z,
        J: u,
        Es: l,
        Gs: O,
        A_steel: b,
        A_conc: y
      };
    }
    function vo() {
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
        const { colMat: a, vigaMat: i, colShape: s, fc: r, perFloor: p } = qe, c = 4700 * Math.sqrt(r / 1e3) * 1e3, d = c / (2 * 1.2), b = 24 / 9.80665, S = o.E, $ = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (ue.has(f)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, A), n.thicknesses.set(f, He), n.shearModuli.set(f, E / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Ct.has(f)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, A), n.thicknesses.set(f, rt), n.shearModuli.set(f, E / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = D.has(f), I = Me.get(f) ?? 0, L = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, O, k, m;
          if (h) if (a === 0) O = c, k = d, m = b, z = s === 1 ? ks(L.dCol) : Rn(L.bCol, L.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (a === 1) {
            O = S, k = $, m = y;
            const E = qe.steelColType;
            if (E <= 1) {
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
            } else if (E === 2) {
              const A = L.colBf ?? 0.3, R = L.colHf ?? 0.3, j = L.colTf ?? 0.02, x = L.colTw ?? 0.012;
              z = Pn(A, R, j, x);
              const w = `I${(R * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: A,
                h: R,
                tf: j,
                tw: x,
                name: w
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
            const E = L.colBc ?? 0.3, A = L.colHc ?? 0.3, R = L.colT ?? 0.01, j = L.colFc ?? 28e3, x = L.colEs ?? 2e8, w = L.colNuS ?? 0.3;
            L.colNuC;
            const v = ka(E, A, R, x, w, j);
            z = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, O = v.Es, k = v.Gs;
            const C = 7.85, U = 24 / 9.80665;
            m = (C * v.A_steel + U * v.A_conc) / (v.A_steel + v.A_conc);
            const V = `CFT ${(A * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: E,
              h: A,
              tw: R,
              name: V
            });
          }
          else {
            const E = ze.get(f), A = E ? E.dir === "x" ? L.vigasX : L.vigasY : [], R = E ? A[E.bay] ?? A[0] ?? ut() : ut();
            if (i === 0) O = c, k = d, m = b, z = Rn(R.b, R.h), n.sectionShapes.set(f, {
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
                const x = R.bf ?? 0.2, w = R.hf ?? 0.4, v = R.tf ?? 0.015, C = R.tw ?? 0.01;
                z = Pn(x, w, v, C);
                const U = `I${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: x,
                  h: w,
                  tf: v,
                  tw: C,
                  name: U
                });
              } else {
                const x = R.bc ?? 0.2, w = R.hc ?? 0.3, v = R.t ?? 8e-3;
                z = On(x, w, v);
                const C = `\u25A1${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: x,
                  h: w,
                  tw: v,
                  name: C
                });
              }
            }
          }
          const u = he.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (O = c, k = d, m = b) : (O = S, k = $, m = y), u.secType === "rect" && u.b && u.h) z = Rn(u.b, u.h), n.sectionShapes.set(f, {
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
          n.elasticities.set(f, O), n.shearModuli.set(f, k), n.areas.set(f, z.A), n.momentsOfInertiaZ.set(f, z.Iy), n.momentsOfInertiaY.set(f, z.Iz), n.torsionalConstants.set(f, z.J), n.densities.set(f, m), u && u.releases12 && u.releases12.some((E) => E) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((E) => E > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
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
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.ex;
          Ts(v), Qe.example(v);
        });
      }), Ce.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.view;
          $o(v), Ce.querySelectorAll("[data-view]").forEach((C) => C.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = Ce.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), T = "", ca.val = false, Ea(), Qe.clear();
      }), (_d = Ce.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), oo && (oo = false, Ao()), po && cn(), Yt = !Yt, (_a3 = Ce.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt);
        const v = Ze();
        v && (v.controls.enabled = !Yt), Yt || rn();
      }), (_e2 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), oo && (oo = false, Ao()), Yt && rn(), po = !po, (_a3 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po ? Ca() : cn();
      }), (_f = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Yt && rn(), po && cn(), oo = !oo, (_a3 = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", oo), oo || Ao();
      }), (_g = Ce.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), Qe.clear(), Ve = null;
      });
      const t = Ce.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && o(x);
      });
      function o(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const C = 15e3 * Math.sqrt(210) * 10, U = 0.2, V = C / (2 * (1 + U)), se = 0.09, ee = 0.3 ** 4 / 12, Q = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, ie = 0.25 * 0.4 ** 3 / 12, Se = 0.4 * 0.25 ** 3 / 12, Fe = 1e-3, q = 5 / 6 * se, me = 5 / 6 * de, ne = [];
        function fe(te, be, Ee) {
          const le = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const X of be) le.elasticities.set(X, C), le.shearModuli.set(X, V), le.areas.set(X, se), le.momentsOfInertiaZ.set(X, ee), le.momentsOfInertiaY.set(X, ee), le.torsionalConstants.set(X, Q), le.shearAreasY.set(X, q), le.shearAreasZ.set(X, q);
          for (const X of Ee) le.elasticities.set(X, C), le.shearModuli.set(X, V), le.areas.set(X, de), le.momentsOfInertiaZ.set(X, Se), le.momentsOfInertiaY.set(X, ie), le.torsionalConstants.set(X, Fe), le.shearAreasY.set(X, me), le.shearAreasZ.set(X, me);
          return le;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const Ee = 270 / (3 * C * ee), le = [
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
          ], X = [
            [
              0,
              1
            ]
          ], Ie = fe(1, [], []);
          Ie.elasticities.set(0, C), Ie.shearModuli.set(0, V), Ie.areas.set(0, se), Ie.momentsOfInertiaZ.set(0, ee), Ie.momentsOfInertiaY.set(0, ee), Ie.torsionalConstants.set(0, Q);
          const Ke = zt(le, X, {
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
          }, Ie);
          ne.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: le,
            elements: X,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: Ke.deformations.get(1)[2] * 100,
                reference: Ee * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (x === "test-portal-1p" || x === "test-all") {
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
          ], be = [
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
          ], Ee = fe(3, [
            0,
            1
          ], [
            2
          ]), le = zt(te, be, {
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
          ne.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux top (cm)",
                awatif: le.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-2p" || x === "test-all") {
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
          ], be = [
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
          ], Ee = fe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), le = zt(te, be, {
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
          ne.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: le.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: le.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wall-only" || x === "test-all") {
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
          ], be = [
            [
              0,
              1,
              2,
              3
            ]
          ], le = zt(te, be, {
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
                C
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
                U
              ]
            ])
          });
          ne.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux top (cm)",
                awatif: le.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-wall" || x === "test-all") {
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
          ], be = [
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
          ], Ee = fe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Ee.elasticities.set(6, C), Ee.shearModuli.set(6, V), Ee.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Ee.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              U
            ]
          ]);
          const le = zt(te, be, {
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
          ne.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: le.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: le.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wilson-beam" || x === "test-all") {
          const Ke = 0.6666666666666666, ot = [
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
          ], gt = [
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
          ], It = {
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
          }, kt = /* @__PURE__ */ new Map();
          kt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), kt.set(5, [
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
          const So = 5 ** 3 / (3 * 1500 * Ke);
          try {
            const ao = zt(ot, gt, {
              supports: kt,
              loads: Dt
            }, It), Vt = Math.abs(((_b2 = (_a3 = ao.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), st = Math.abs(((_d2 = (_c2 = ao.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), Tt = (Vt + st) / 2, eo = Tt / So;
            ne.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: ot,
              elements: gt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: eo,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: Tt,
                  reference: So * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (ao) {
            ne.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + ao.message,
              nodes: ot,
              elements: gt,
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
          const Ke = 40 * Math.PI / 180, ot = 8, gt = 8, It = [];
          for (let st = 0; st <= ot; st++) for (let Tt = 0; Tt <= gt; Tt++) {
            const eo = 25 * st / ot, Nt = Ke * Tt / gt, go = 25 * Math.sin(Nt), mo = 25 * Math.cos(Nt) - 25 * Math.cos(Ke);
            It.push([
              eo,
              go,
              mo
            ]);
          }
          const kt = [];
          for (let st = 0; st < ot; st++) for (let Tt = 0; Tt < gt; Tt++) {
            const eo = st * (gt + 1) + Tt, Nt = (st + 1) * (gt + 1) + Tt, go = (st + 1) * (gt + 1) + (Tt + 1), mo = st * (gt + 1) + (Tt + 1);
            kt.push([
              eo,
              Nt,
              go,
              mo
            ]);
          }
          const Dt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, So = 432e6 / (2 * 1);
          for (let st = 0; st < kt.length; st++) Dt.elasticities.set(st, 432e6), Dt.shearModuli.set(st, So), Dt.thicknesses.set(st, 0.25), Dt.poissonsRatios.set(st, 0);
          const ao = /* @__PURE__ */ new Map();
          for (let st = 0; st <= ot; st++) for (let Tt = 0; Tt <= gt; Tt++) {
            const eo = st * (gt + 1) + Tt, Nt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            st === 0 && (Nt[0] = true, Nt[4] = true, Nt[5] = true), st === ot && (Nt[1] = true, Nt[2] = true, Nt[3] = true), Tt === 0 && (Nt[1] = true, Nt[3] = true, Nt[5] = true), Nt.some((go) => go) && ao.set(eo, Nt);
          }
          const Vt = /* @__PURE__ */ new Map();
          for (const st of kt) {
            const Tt = It[st[0]], eo = It[st[1]], Nt = It[st[2]], go = It[st[3]], mo = [
              Nt[0] - Tt[0],
              Nt[1] - Tt[1],
              Nt[2] - Tt[2]
            ], jo = [
              go[0] - eo[0],
              go[1] - eo[1],
              go[2] - eo[2]
            ], Xs = mo[1] * jo[2] - mo[2] * jo[1], Ks = mo[2] * jo[0] - mo[0] * jo[2], Zs = mo[0] * jo[1] - mo[1] * jo[0], Va = -90 * (0.5 * Math.sqrt(Xs * Xs + Ks * Ks + Zs * Zs)) / 4;
            for (const Qs of st) {
              const ea = Vt.get(Qs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ea[2] += Va, Vt.set(Qs, ea);
            }
          }
          try {
            const st = zt(It, kt, {
              supports: ao,
              loads: Vt
            }, Dt), Tt = gt, eo = ((_f2 = (_e3 = st.deformations) == null ? void 0 : _e3.get(Tt)) == null ? void 0 : _f2[2]) ?? 0;
            ne.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${ot}x${gt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: It,
              elements: kt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(eo),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (st) {
            ne.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + st.message,
              nodes: It,
              elements: kt,
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
        if (i(ne), ne.length > 0) {
          const te = ne[ne.length - 1];
          e.nodes.val = te.nodes, e.elements.val = te.elements;
          const be = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), le = Math.max(...te.nodes.map((X) => X[2]));
          te.nodes.forEach((X, Ie) => {
            Math.abs(X[2]) < 0.01 && be.set(Ie, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(X[2] - le) < 0.01 && Ee.set(Ie, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: be,
            loads: Ee
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const C = /* @__PURE__ */ new Set();
        x.nodes.forEach((q) => C.add(Math.round(q[1] * 1e4) / 1e4));
        const U = [
          ...C
        ].sort((q, me) => q - me), V = U.map((q, me) => me === 0 ? "Base" : `Level_${me}`), se = /* @__PURE__ */ new Map();
        U.forEach((q, me) => se.set(q, V[me])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = U.length - 1; q >= 1; q--) v.push(`  STORY "${V[q]}"  HEIGHT ${U[q] - U[q - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${U[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${w}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const ee = x.elements.some((q) => q.length === 4);
        ee && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const Q = /* @__PURE__ */ new Map();
        let de = 0;
        x.nodes.forEach((q) => {
          const me = `${q[0]},${q[2]}`;
          Q.has(me) || Q.set(me, `${++de}`);
        }), v.push("$ POINT COORDINATES");
        for (const [q, me] of Q) {
          const [ne, fe] = q.split(",").map(Number);
          v.push(`  POINT "${me}"  ${ne} ${fe} `);
        }
        v.push("");
        const ie = (q) => {
          const me = x.nodes[q], ne = `${me[0]},${me[2]}`;
          return {
            pt: Q.get(ne) || "1",
            story: se.get(Math.round(me[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Se = [];
        if (x.elements.forEach((q, me) => {
          if (q.length !== 2) return;
          const ne = x.nodes[q[0]], fe = x.nodes[q[1]], te = Math.abs(fe[1] - ne[1]), be = Math.sqrt((fe[0] - ne[0]) ** 2 + (fe[2] - ne[2]) ** 2), Ee = te > be * 0.5, le = ie(q[0]), X = ie(q[1]), Ie = Ee ? "COL30" : "VIGA";
          Ee ? (v.push(`  LINE  "E${me + 1}"  COLUMN  "${le.pt}"  "${le.pt}"  1`), Se.push(`  LINEASSIGN  "E${me + 1}"  "${X.story}"  SECTION "${Ie}"  `)) : (v.push(`  LINE  "E${me + 1}"  BEAM  "${le.pt}"  "${X.pt}"  0`), Se.push(`  LINEASSIGN  "E${me + 1}"  "${le.story}"  SECTION "${Ie}"  `));
        }), v.push(""), ee) {
          v.push("$ AREA CONNECTIVITIES");
          const q = [];
          x.elements.forEach((me, ne) => {
            if (me.length !== 4) return;
            const fe = me.map((te) => ie(te));
            v.push(`  AREA "W${ne + 1}"  PANEL  4  "${fe[0].pt}"  "${fe[1].pt}"  "${fe[2].pt}"  "${fe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${ne + 1}"  "${fe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), q.forEach((me) => v.push(me)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((q, me) => {
          if (Math.abs(q[1]) < 0.01) {
            const ne = ie(me);
            v.push(`  POINTASSIGN  "${ne.pt}"  "${ne.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Se.forEach((q) => v.push(q)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Fe = Math.max(...x.nodes.map((q) => q[1]));
        return x.nodes.forEach((q, me) => {
          if (Math.abs(q[1] - Fe) < 0.01) {
            const ne = ie(me);
            v.push(`  POINTLOAD  "${ne.pt}"  "${ne.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${w}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((V) => V.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((V, se) => {
          if (V.length === 2) {
            const ee = x.nodes[V[0]], Q = x.nodes[V[1]], de = Math.abs(Q[1] - ee[1]), ie = Math.sqrt((Q[0] - ee[0]) ** 2 + (Q[2] - ee[2]) ** 2), Se = de > ie * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${ee[0]},${ee[2]},${ee[1]}, ${Q[0]},${Q[2]},${Q[1]}, FN,"${Se}","E${se + 1}","Global")`);
          } else if (V.length === 4) {
            const ee = V.map((Q) => x.nodes[Q]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${ee.map((Q) => Q[0]).join(",")}], [${ee.map((Q) => Q[2]).join(",")}], [${ee.map((Q) => Q[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const U = Math.max(...x.nodes.map((V) => V[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${U}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const V of x.results) v.push(`print(f"  ${V.label}: Awatif=${V.awatif.toFixed(4)}, ETABS=${V.reference.toFixed(4)}, Ratio={${V.awatif.toFixed(4)}/${V.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(v), U = document.createElement("a");
        U.href = C, U.download = w, U.click(), URL.revokeObjectURL(C);
      }
      function i(x) {
        let w = document.getElementById("test-results-overlay");
        w && w.remove(), w = document.createElement("div"), w.id = "test-results-overlay", w.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, C = true;
        window.__awatifTests = x;
        for (let V = 0; V < x.length; V++) {
          const se = x[V];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${se.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${V})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${V})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${se.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const ee of se.results) {
            const Q = ee.reference !== 0 ? ee.awatif / ee.reference : 1, de = Math.abs(Q - 1) < 0.05;
            de || (C = false);
            const ie = de ? "#4caf50" : "#f44336", Se = de ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${ee.label}</td>
            <td style="text-align:right;color:#fff">${ee.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${ee.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${ie};font-weight:bold">${Q.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${ee.refSource}</td>
            <td style="text-align:center;color:${ie};font-size:10px;font-weight:bold">${Se}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += C ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', w.innerHTML = v, document.body.appendChild(w), window.__awatifDownloadE2k = (V) => {
          const se = window.__awatifTests[V], ee = se.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(se), `${ee}.e2k`);
        }, window.__awatifDownloadPy = (V) => {
          const se = window.__awatifTests[V], ee = se.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(se), `${ee}_etabs.py`);
        };
      }
      (_h = Ce.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Ia();
      });
      let s = "";
      const r = Ce.querySelector("#cad3d-io-menu"), p = Ce.querySelector("#cad3d-io-file");
      function c(x, w) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((U) => U.length === 2).length, C = x.elements.filter((U) => U.length >= 3).length;
        console.log(`${w} (${x.nodes.length} nodos, ${v} frames, ${C} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => yt(), 50);
      }
      function d(x, w) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((Q) => v[Q.category] = (v[Q.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const C = document.createElement("div");
        C.id = "ifc-filter-panel", C.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const U = [
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
        ], se = {
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
        let ee = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const Q of U) {
          const de = v[Q] || 0;
          if (de === 0) continue;
          const ie = [
            "column",
            "beam",
            "slab"
          ].includes(Q) ? "checked" : "";
          ee += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${Q}" ${ie}>
          <span>${se[Q] || Q}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        ee += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const Q of V) {
          const de = v[Q] || 0;
          de !== 0 && (ee += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${Q}" disabled>
          <span>${se[Q] || Q}</span>
          <span style="margin-left:auto">(${de})</span>
        </label>`);
        }
        ee += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, C.innerHTML = ee, document.body.appendChild(C), C.querySelectorAll("input[data-ifc-cat]").forEach((Q) => {
          Q.addEventListener("change", () => {
            const de = Q.dataset.ifcCat, ie = x.detailCategories.get(de);
            if (ie) {
              ie.visible = Q.checked;
              const Se = Ze();
              Se && Se.render();
            }
          });
        }), (_b2 = C.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Q = /* @__PURE__ */ new Set();
          C.querySelectorAll("input[data-ifc-cat]:checked").forEach((ne) => {
            Q.add(ne.dataset.ifcCat);
          });
          const de = w.nodes.map((ne) => [
            ne.x,
            ne.y,
            ne.z
          ]), ie = [], Se = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Fe = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let q = 0;
          for (const ne of w.elements) if (Q.has(ne.category) && ne.type === "frame" && ne.nodeIds.length >= 2) {
            ie.push(ne.nodeIds);
            const fe = ((_a4 = w.materials) == null ? void 0 : _a4.get(ne.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, te = ne.b || 0.3, be = ne.h || 0.3, Ee = te * be, le = te * be * be * be / 12, X = be * te * te * te / 12, Ie = te * be * (te * te + be * be) / 12, Ke = fe.E / (2 * (1 + fe.nu));
            Se.elasticities.set(q, fe.E), Se.shearModuli.set(q, Ke), Se.areas.set(q, Ee), Se.momentsOfInertiaZ.set(q, X), Se.momentsOfInertiaY.set(q, le), Se.torsionalConstants.set(q, Ie), Se.densities.set(q, fe.rho), Se.sectionShapes.set(q, {
              type: "rect",
              b: te,
              h: be,
              name: ne.sectionName
            }), q++;
          }
          const me = Math.min(...de.map((ne) => ne[2]));
          de.forEach((ne, fe) => {
            Math.abs(ne[2] - me) < 0.05 && Fe.supports.set(fe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, ne] of x.detailCategories) {
            const fe = Ze();
            fe && fe.scene.remove(ne);
          }
          c({
            nodes: de,
            elements: ie,
            nodeInputs: Fe,
            elementInputs: Se,
            sectionShapes: Se.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: ie.length
            }
          }, "IFC analytical"), C.remove();
        }), (_c2 = C.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of x.detailCategories) {
            const ie = Ze();
            ie && ie.scene.remove(de);
          }
          const Q = Ze();
          Q && Q.render(), C.remove();
        });
      }
      function b(x) {
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        const w = /* @__PURE__ */ new Map();
        for (let ie = 0; ie < x.stories.length; ie++) w.set(x.stories[ie].name, ie);
        for (let ie = 0; ie < x.elementTypes.length; ie++) {
          const Se = x.elementTypes[ie], Fe = x.elementStories[ie], q = w.get(Fe) ?? 0;
          Me.set(ie, q), Se === "COLUMN" || Se === "BRACE" ? D.add(ie) : G.add(ie);
        }
        T = "edificio";
        const v = x.grids.filter((ie) => ie.dir === "X").sort((ie, Se) => ie.coord - Se.coord), C = x.grids.filter((ie) => ie.dir === "Y").sort((ie, Se) => ie.coord - Se.coord);
        let U, V, se, ee;
        if (v.length > 0 || C.length > 0) U = v.map((ie) => ie.coord), V = C.map((ie) => ie.coord), se = v.map((ie) => ie.label), ee = C.map((ie) => ie.label);
        else {
          const ie = new Set(x.nodes.map((Fe) => Fe[0])), Se = new Set(x.nodes.map((Fe) => Fe[1]));
          U = [
            ...ie
          ].sort((Fe, q) => Fe - q), V = [
            ...Se
          ].sort((Fe, q) => Fe - q), se = U.map((Fe, q) => String(q + 1)), ee = V.map((Fe, q) => String.fromCharCode(65 + q));
        }
        const Q = x.stories.length > 0 ? Math.max(...x.stories.map((ie) => ie.elev)) : Math.max(...x.nodes.map((ie) => ie[2]));
        We = U, Xe = V, pt = Q, setTimeout(() => {
          yt(), Xo(U, V, Q, se, ee), wn(x.stories, U, V), Nn(), qn();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const ie of x.elementTypes) de[ie]++;
        console.log(`E2K grids: X=[${se.join(",")}] Y=[${ee.join(",")}]`), console.log(`E2K stories: ${x.stories.map((ie) => `${ie.name}@${ie.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), et();
      }
      function S(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(v), U = document.createElement("a");
        U.href = C, U.download = w, U.click(), URL.revokeObjectURL(C);
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
              e2kModel: Ve ?? void 0
            }), "model.e2k") : s === "export-s2k" ? S(Cl({
              ...x,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? S(Nl(x), "model_opensees.py") : s === "export-tcl" && S(ql(x), "model_opensees.tcl");
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
            const C = v.result;
            try {
              const U = Ze();
              if (!U) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const V = await Jl(U.scene, C);
              console.log(`IFC: ${V.meshCount} meshes loaded, bbox:`, V.bbox);
              const se = new Ne();
              V.bbox.getCenter(se);
              const ee = new Ne();
              V.bbox.getSize(ee);
              const Q = Math.max(ee.x, ee.y, ee.z);
              U.controls.target.copy(se), U.camera.position.set(se.x + Q, se.y + Q * 0.5, se.z + Q), U.camera.lookAt(se), U.controls.maxDistance = Q * 5, U.controls.update(), U.render(), window.__ifcLoadResult = V, window.__ifcArrayBuffer = C;
              const de = new FileReader();
              de.onload = () => {
                const ie = de.result, Se = Wl(ie);
                window.__ifcAnalytical = Se;
                const Fe = {};
                V.elementInfo.forEach((q) => Fe[q.category] = (Fe[q.category] || 0) + 1), console.log("IFC categories:", Fe), console.log(`IFC: ${V.elementInfo.size} geometric elements, ${Se.elements.length} analytical elements`), d(V, Se);
              }, de.readAsText(x);
            } catch (U) {
              alert("IFC error: " + U.message), console.error(U);
            }
          }, v.readAsArrayBuffer(x), p.value = "";
          return;
        }
        const w = new FileReader();
        w.onload = () => {
          const v = w.result;
          try {
            if (s === "import-e2k") {
              const C = Tl(v);
              Ve = C, c(C, "E2K imported"), b(C);
            } else if (s === "import-s2k") {
              const C = zl(v);
              c({
                nodes: C.nodes,
                elements: C.elements,
                nodeInputs: C.nodeInputs,
                elementInputs: C.elementInputs,
                sectionShapes: C.sectionShapes,
                info: C.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const C = _l(v);
              c(C, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const C = Dl(v);
              c(C, "OpenSees Tcl imported");
            }
          } catch (C) {
            alert("Import error: " + C.message), console.error(C);
          }
        }, w.readAsText(x), p.value = "";
      });
      const $ = Ce.querySelector("#cad3d-force-unit");
      $ && ($.value = g, $.addEventListener("change", (x) => {
        x.stopPropagation(), g = $.value, M = Ro(g, P), T && tt(T);
      }));
      const y = Ce.querySelector("#cad3d-length-unit");
      y && (y.value = P, y.addEventListener("change", (x) => {
        x.stopPropagation(), P = y.value, M = Ro(g, P), T && tt(T);
      })), Ce.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.preset, C = B[v];
          C && (g = C.force, P = C.length, J = C.stress, M = Ro(g, P), $ && ($.value = g), y && (y.value = P), Ce.querySelectorAll("[data-preset]").forEach((U) => {
            U.classList.toggle("active", U.dataset.preset === v);
          }), T && tt(T), console.log(`Preset: ${v} \u2192 ${g}+${P}, stress: ${J.label}`));
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
          const { openCalcPanel: w } = await import("./calcPanel-CToQkEkn.js").then(async (m2) => {
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
      }), (_n2 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (x) => {
        var _a3, _b2;
        x.stopPropagation(), _e = !_e, (_a3 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", _e);
        const v = Ce.querySelector("#cad3d-mode-prev"), C = Ce.querySelector("#cad3d-mode-next"), U = Ce.querySelector("#cad3d-mode-label"), V = Ce.querySelector("#cad3d-modal-scale");
        if (_e) {
          const se = Ze();
          ((_b2 = se == null ? void 0 : se.settings) == null ? void 0 : _b2.loads) && (De = se.settings.loads.rawVal, se.settings.loads.val = false), Ln(), v.style.display = "", C.style.display = "", U.style.display = "", V && (V.style.display = ""), f();
        } else Cn(), v.style.display = "none", C.style.display = "none", U.style.display = "none", V && (V.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
          var _a4;
          const se = Ze();
          ((_a4 = se == null ? void 0 : se.settings) == null ? void 0 : _a4.loads) && De && (se.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const x = Ce.querySelector("#cad3d-mode-label");
        if (!x || !(Le == null ? void 0 : Le.frequencies)) return;
        const w = Le.frequencies[xe], v = w > 0 ? 1 / w : 0, C = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let U = 0; U <= xe; U++) {
          const V = (_a3 = Le.massParticipation) == null ? void 0 : _a3[U];
          if (V) for (let se = 0; se < 6; se++) C[se] += V[se];
        }
        x.textContent = `Modo ${xe + 1} \u2014 ${w.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(C[0] * 100).toFixed(1)}% \u03A3Uy=${(C[1] * 100).toFixed(1)}% \u03A3Rz=${(C[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ce.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(Le == null ? void 0 : Le.modeShapes)) return;
        xe = (xe - 1 + Le.modeShapes.length) % Le.modeShapes.length;
        const w = Le.modeShapes[xe], { extent: v } = yo();
        let C = 0;
        for (let U = 0; U < Te.length; U++) {
          const V = w[U * 6] || 0, se = w[U * 6 + 1] || 0, ee = w[U * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(V * V + se * se + ee * ee));
        }
        Ge = C > 1e-12 ? v * 0.05 / C : 1, Qo(), f();
      }), (_p = Ce.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (x) => {
        var _a3, _b2;
        if (x.stopPropagation(), !(Le == null ? void 0 : Le.modeShapes)) return;
        xe = (xe + 1) % Le.modeShapes.length;
        const w = Le.modeShapes[xe];
        if (!w) {
          console.warn("No shape for mode", xe);
          return;
        }
        const { extent: v } = yo();
        let C = 0;
        for (let U = 0; U < Te.length; U++) {
          const V = w[U * 6] || 0, se = w[U * 6 + 1] || 0, ee = w[U * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(V * V + se * se + ee * ee));
        }
        Ge = C > 1e-12 ? v * 0.05 / C : 1, console.log(`Mode ${xe + 1}: maxDisp=${C.toExponential(3)}, scale=${Ge.toFixed(1)}, f=${(_b2 = (_a3 = Le.frequencies) == null ? void 0 : _a3[xe]) == null ? void 0 : _b2.toFixed(2)} Hz`), Qo(), f();
      });
      const h = Ce.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (x) => x.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        _e && (Le == null ? void 0 : Le.modeShapes) && Qo();
      });
      const I = Ce.querySelector("#cad3d-cli-toggle"), L = Ce.querySelector("#cad3d-cli-panel"), z = Ce.querySelector("#cad3d-cli-output"), O = Ce.querySelector("#cad3d-cmd"), k = [];
      let m = -1;
      I == null ? void 0 : I.addEventListener("click", (x) => {
        if (x.stopPropagation(), L) {
          const w = L.style.display !== "none";
          L.style.display = w ? "none" : "block", w || (O == null ? void 0 : O.focus(), z && !z.textContent && (z.textContent = `CLI ready. Commands:
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
        if ((x.key === "Delete" || x.key === "Backspace") && xt.size > 0) {
          x.preventDefault(), xt.forEach((w) => Z.add(w)), xt.clear(), fo && (fo.remove(), fo = null), Oe();
          return;
        }
        if (x.key === "Escape") {
          if (po) if ($t !== null) {
            $t = null;
            const w = Ze();
            qt && w && (w.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), _t && w && (w.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), w == null ? void 0 : w.render();
          } else cn();
          Yt && rn(), oo && (oo = false, Ao(), (_a3 = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), O == null ? void 0 : O.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const w = O.value.trim();
          if (w) {
            k.unshift(w), m = -1, z && (z.textContent += `> ${w}
`);
            try {
              const v = new Function("cad", `return ${w}`)(Qe);
              if (v !== void 0 && z) {
                const C = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                z.textContent += `${C}
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
      let u = false, E = 0, A = 0, R = 0, j = 0;
      Ce.addEventListener("mousedown", (x) => {
        const w = x.target.tagName;
        if (w === "BUTTON" || w === "INPUT" || w === "SELECT") return;
        u = true;
        const v = Ce.getBoundingClientRect();
        Ce.style.bottom = "unset", E = x.clientX, A = x.clientY, R = v.left, j = v.top, x.preventDefault();
      }), window.addEventListener("mousemove", (x) => {
        u && (x.preventDefault(), Ce.style.left = R + (x.clientX - E) + "px", Ce.style.top = j + (x.clientY - A) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), et();
    }, 10);
    function Ze() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function yo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ne(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, i = -1 / 0, s = -1 / 0;
      for (const [c, d, b] of t) c < o && (o = c), c > a && (a = c), d < n && (n = d), d > i && (i = d), b < l && (l = b), b > s && (s = b);
      const r = new Ne((o + a) / 2, (n + i) / 2, (l + s) / 2), p = Math.max(a - o, i - n, s - l, 1);
      return {
        center: r,
        extent: p
      };
    }
    function yt(t = false) {
      const o = Ze();
      if (!o) return;
      const { extent: n } = yo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const i = Ka(), s = new rl(l, 20, i.grid, i.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((S) => S instanceof dn))).forEach((b) => {
        b.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(b);
      });
      const p = 0.05 * l, c = new sn();
      c.name = "viewerAxes";
      const d = i.axisArrow;
      c.add(new dn(new Ne(1, 0, 0), new Ne(), 1, d, 0.2, 0.2)), c.add(new dn(new Ne(0, 1, 0), new Ne(), 1, d, 0.2, 0.2)), c.add(new dn(new Ne(0, 0, 1), new Ne(), 1, d, 0.2, 0.2)), c.children.forEach((b) => b.scale.set(p, p, p));
      for (const [b, S, $] of [
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
        f.fillStyle = S, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(b, 32, 34);
        const h = new Xn(y);
        h.needsUpdate = true;
        const I = new pn(new fn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        I.position.set($[0], $[1], $[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, c.add(I);
      }
      o.scene.add(c), t ? o.render() : $o("3d");
    }
    function zs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function $o(t) {
      var _a2;
      const o = Ze();
      if (!o) return;
      const { center: n, extent: l } = yo(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), i = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const p = r.type === "GridHelper" || r.type === "AxesHelper", c = r.isSprite, d = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (p || c || d) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, p = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -i * a, r.right = i * a, r.top = i, r.bottom = -i, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const p = (c, d, b) => {
          r.position.copy(c), r.up.copy(b), o.controls.target.copy(d), r.lookAt(d), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new Ne(n.x, n.y, n.z + l * 2), new Ne(n.x, n.y, n.z), new Ne(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const c = parseInt(t.split(":")[1]), d = ((_a2 = K.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (c + 1) * d, S = d * 0.45;
          o.renderer.clippingPlanes = [
            new Io(new Ne(0, 0, -1), b + S),
            new Io(new Ne(0, 0, 1), -b + S)
          ], s(), p(new Ne(n.x, n.y, b + l * 2), new Ne(n.x, n.y, b), new Ne(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const c = parseInt(t.split(":")[1]), d = We[c] ?? n.x;
          if (Xe.length > 1) {
            const S = zs(We, c, l);
            o.renderer.clippingPlanes = [
              new Io(new Ne(-1, 0, 0), d + S),
              new Io(new Ne(1, 0, 0), -d + S)
            ], s(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const c = parseInt(t.split(":")[1]), d = Xe[c] ?? n.y;
          if (We.length > 1) {
            const S = zs(Xe, c, l);
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
      if (We.length < 2 && Xe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (i, s, r) => {
        const p = document.createElement("button");
        return p.textContent = i, p.dataset.view = s, p.title = r, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (c) => {
          var _a2;
          c.stopPropagation();
          const d = p.classList.contains("view-active");
          Ce.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), d ? ($o("3d"), (_a2 = Ce.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : ($o(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      We.forEach((i, s) => {
        const r = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(r, `axisX:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Xe.forEach((i, s) => {
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
      const n = (a, i, s) => {
        const r = document.createElement("button");
        return r.textContent = a, r.dataset.view = i, r.title = s, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const c = r.classList.contains("view-active");
          Ce.querySelectorAll("[data-view]").forEach((d) => d.classList.remove("view-active")), c ? ($o("3d"), (_a3 = Ce.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : ($o(i), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `Planta Piso ${a + 1}`));
    }
    function Ta() {
      $o("3d"), Ce.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Qe.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, $o(t), Ce.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let oo = false, Yt = false, po = false, jt = "line", Xt = [], $t = null, qt = null, _t = null, qo = null, Zt = null;
    const St = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Dn = [], Qt = null, zo = null;
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
      e.nodes.val = t.nodes, e.elements.val = t.elements, vo(), e.elementInputs.val = {
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
      e.nodes.val = t.nodes, e.elements.val = t.elements, vo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const xt = /* @__PURE__ */ new Set();
    let Jt = null, Mo = [], Kt = null, fo = null;
    function Bn(t) {
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let r = 0; r < l.length; r++) {
        const p = n[l[r]], c = n[l[(r + 1) % l.length]];
        a.push(p[0], p[1], p[2], c[0], c[1], c[2]);
      }
      const i = new to();
      i.setAttribute("position", new Lo(a, 3));
      const s = new Go(i, new Yo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), Mo.push(s), o.render();
    }
    function wo() {
      const t = Ze();
      Mo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Mo = [], t == null ? void 0 : t.render();
    }
    function Eo() {
      fo && fo.remove();
      const t = Y.size > 0 || H;
      if (xt.size === 0 && !t) {
        fo = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${xt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), fo = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ya([
          ...xt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (xt.size === 1) {
          const n = [
            ...xt
          ][0];
          qs(n);
        } else {
          const n = [
            ...xt
          ], l = e.nodes.val, a = e.elements.val;
          let i = 0, s = 0, r = 0, p = 0;
          n.forEach((d) => {
            const b = a[d];
            if (b) if (b.length === 2) {
              const S = l[b[0]], $ = l[b[1]], y = Math.abs($[0] - S[0]), f = Math.abs($[1] - S[1]), h = Math.abs($[2] - S[2]);
              h > y && h > f ? i++ : s++;
            } else b.length === 3 ? r++ : b.length === 4 && p++;
          });
          const c = [];
          i && c.push(`${i} columnas`), s && c.push(`${s} vigas`), p && c.push(`${p} shells Q4`), r && c.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${c.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        xt.forEach((n) => Y.add(n)), xt.clear(), wo(), Eo(), Oe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, W.clear(), xt.forEach((n) => W.add(n)), xt.clear(), wo(), Eo(), Oe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        Y.clear(), H = false, W.clear(), Eo(), Oe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Do(), xt.forEach((n) => Z.add(n)), xt.clear(), wo(), Eo(), Oe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        xt.clear(), wo(), Eo();
      });
    }
    function rn() {
      var _a2;
      Yt = false, xt.clear(), wo(), fo && (fo.remove(), fo = null), (_a2 = Ce.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ze();
      o && (o.controls.enabled = true);
    }
    function Ao() {
      if (Jt) {
        const t = Ze();
        t == null ? void 0 : t.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose(), Jt = null, t == null ? void 0 : t.render();
      }
      Kt && (Kt.remove(), Kt = null);
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
      for (const [i, s] of a) {
        const r = new Float32Array([
          n[0] - i[0] * l,
          n[1] - i[1] * l,
          n[2] - i[2] * l,
          n[0] + i[0] * l,
          n[1] + i[1] * l,
          n[2] + i[2] * l
        ]), p = new to();
        p.setAttribute("position", new xn(r, 3));
        const c = new Wo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new Go(p, c);
        d.computeLineDistances(), d.renderOrder = 9990, o.scene.add(d), Dn.push(d);
      }
      o.render();
    }
    function Hn() {
      const t = Ze();
      for (const o of Dn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Dn = [], zo = null, Qt && (Qt.remove(), Qt = null);
    }
    function Cs(t, o, n, l) {
      Qt || (Qt = document.createElement("div"), Qt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Qt));
      const a = l.x - n.x, i = l.y - n.y, s = l.z - n.z, r = Math.sqrt(a * a + i * i + s * s), p = Math.abs(a), c = Math.abs(i), d = Math.abs(s);
      let b = "";
      p > c && p > d ? b = `\u0394X=${a.toFixed(2)}` : c > p && c > d ? b = `\u0394Y=${i.toFixed(2)}` : d > 0.01 && (b = `\u0394Z=${s.toFixed(2)}`), Qt.textContent = `${r.toFixed(3)} m  ${b}`, Qt.style.left = t + 20 + "px", Qt.style.top = o - 10 + "px";
    }
    function La(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new Ne(l[0], l[1], l[2]), i = t.clone(), s = i.clone().sub(a), r = 0.3, p = Math.abs(s.x), c = Math.abs(s.y), d = Math.abs(s.z);
      return c < r && d < r && p > 0.01 ? new Ne(i.x, a.y, a.z) : p < r && d < r && c > 0.01 ? new Ne(a.x, i.y, a.z) : p < r && c < r && d > 0.01 ? new Ne(a.x, a.y, i.z) : null;
    }
    function cn() {
      var _a2;
      const t = Ze();
      qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), _t && t && (t.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), Hn(), $t = null, Zt = null, po = false, qo && (qo.remove(), qo = null), (_a2 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ca() {
      qo && qo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(St.node)}">Node</button>
      <button id="ds-grid" style="${n(St.grid)}">Grid</button>
      <button id="ds-mid" style="${n(St.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(St.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${_n}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), qo = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), i = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        a && (a.style.cssText = o(jt === "line")), i && (i.style.cssText = o(jt === "arc")), s && (s.style.cssText = o(jt === "node")), r && (r.style.cssText = o(jt === "area"));
        const p = t.querySelector("#ds-node"), c = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        p && (p.style.cssText = n(St.node)), c && (c.style.cssText = n(St.grid)), d && (d.style.cssText = n(St.midpoint)), b && (b.style.cssText = n(St.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        jt = "line", $t = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        jt = "arc", $t = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        jt = "node", $t = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        jt = "area", $t = null, Zt = null, Xt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        St.node = !St.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        St.grid = !St.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        St.midpoint = !St.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        St.track = !St.track, St.track || Hn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        St.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => As()), t.querySelector("#dt-redo").addEventListener("click", () => Ls());
    }
    function Fs(t, o, n, l) {
      const a = l.getBoundingClientRect(), i = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, r = new sa();
      r.setFromCamera(new aa(i, s), n);
      const p = e.nodes.val, c = e.elements.val, d = 0.12;
      if (St.node) {
        let $ = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const h = p[f], I = new Ne(h[0], h[1], h[2]).project(n), L = Math.sqrt((I.x - i) ** 2 + (I.y - s) ** 2);
          L < d && L < y && (y = L, $ = f);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new Ne(...p[$]),
          snapType: "node"
        };
      }
      if (St.midpoint) {
        let $ = 1 / 0, y = null;
        for (const f of c) {
          if (f.length !== 2) continue;
          const h = p[f[0]], I = p[f[1]], L = new Ne((h[0] + I[0]) / 2, (h[1] + I[1]) / 2, (h[2] + I[2]) / 2), z = L.clone().project(n), O = Math.sqrt((z.x - i) ** 2 + (z.y - s) ** 2);
          O < d * 0.8 && O < $ && ($ = O, y = L);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (St.grid) {
        const $ = new Io(new Ne(0, 0, 1), 0), y = new Ne();
        if (r.ray.intersectPlane($, y)) {
          const f = St.gridSize || _n;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const b = new Io(new Ne(0, 0, 1), 0), S = new Ne();
      return r.ray.intersectPlane(b, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Rs(t) {
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val;
      if (_t && (o.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, i = t.snapType === "mid" ? new nl(a * 2, a * 2, a * 2) : new sl(a, 12, 12), s = new al({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        _t = new da(i, s), _t.position.copy(t.worldPos), _t.renderOrder = 9999, o.scene.add(_t);
      }
      if (qt && (o.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), $t !== null && t.worldPos) {
        const l = n[$t], a = new to();
        if (jt === "arc" && Zt !== null) {
          const s = n[Zt], r = Ps(new Ne(l[0], l[1], l[2]), new Ne(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let c = 0; c < r.length - 1; c++) p.push(r[c].x, r[c].y, r[c].z, r[c + 1].x, r[c + 1].y, r[c + 1].z);
          a.setAttribute("position", new Lo(p, 3));
        } else a.setAttribute("position", new Lo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const i = new Yo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        qt = new Co(a, i), jt === "arc" && Zt !== null && (qt = new Go(a, i)), qt.renderOrder = 9999, o.scene.add(qt);
      }
      o.render();
    }
    function Ps(t, o, n, l) {
      const a = [];
      for (let i = 0; i <= l; i++) {
        const s = i / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), c = 2 * (1 - s) * s, d = s * s;
        a.push(new Ne(p * t.x + c * r.x + d * n.x, p * t.y + c * r.y + d * n.y, p * t.z + c * r.z + d * n.z));
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
      if (jt === "node") {
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
      if (jt === "line") {
        const o = jn(t);
        if (o < 0) return;
        if ($t === null) {
          $t = o;
          return;
        }
        if (o === $t) return;
        Do();
        const n = [
          ...e.elements.val
        ];
        n.some((a) => a.length === 2 && (a[0] === $t && a[1] === o || a[1] === $t && a[0] === o)) || (n.push([
          $t,
          o
        ]), e.elements.val = n, vo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), $t = o;
        return;
      }
      if (jt === "arc") {
        const o = jn(t);
        if (o < 0) return;
        if ($t === null) {
          $t = o;
          return;
        }
        if (Zt === null) {
          if (o === $t) return;
          Zt = o;
          return;
        }
        if (o === $t || o === Zt) return;
        const n = e.nodes.val, l = new Ne(...n[$t]), a = new Ne(...n[Zt]), i = new Ne(...n[o]), s = Math.max(4, Math.round(((_a2 = K.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ps(l, a, i, s);
        Do();
        const p = [
          ...e.nodes.val
        ], c = [
          ...e.elements.val
        ];
        let d = $t;
        for (let b = 1; b < r.length; b++) {
          let S;
          if (b === r.length - 1) S = o;
          else {
            const $ = r[b];
            S = p.length, p.push([
              $.x,
              $.y,
              $.z
            ]);
          }
          c.push([
            d,
            S
          ]), d = S;
        }
        e.nodes.val = p, e.elements.val = c, vo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, $t = o, Zt = null;
        return;
      }
      if (jt === "area") {
        const o = jn(t);
        if (o < 0) return;
        if (Xt.length >= 3 && o === Xt[0]) {
          Do();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = Xt.map((i) => n[i]);
          try {
            const i = ho({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (r, p) => p),
              maxMeshSize: _n || 0.5
            }), s = [];
            for (const r of i.nodes) {
              let p = -1;
              for (let c = 0; c < n.length; c++) {
                const d = Math.abs(n[c][0] - r[0]), b = Math.abs(n[c][1] - r[1]), S = Math.abs(n[c][2] - r[2]);
                if (d < 0.01 && b < 0.01 && S < 0.01) {
                  p = c;
                  break;
                }
              }
              p >= 0 ? s.push(p) : (s.push(n.length), n.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of i.elements) l.push([
              s[r[0]],
              s[r[1]],
              s[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, vo(), console.log(`Area: ${i.elements.length} triangulos creados desde ${Xt.length} vertices`);
          } catch (i) {
            console.error("Area mesh failed:", i.message);
          }
          Xt = [];
          return;
        }
        if (Xt.push(o), console.log(`Area vertex ${Xt.length}: node ${o}`), Xt.length >= 2) {
          const n = Xt[Xt.length - 2], l = e.nodes.val, a = Ze();
          if (a) {
            const i = new to().setFromPoints([
              new Ne(...l[n]),
              new Ne(...l[o])
            ]), s = new Go(i, new Yo({
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
      Jt && (o.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const r = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(r[0], r[1], r[2], p[0], p[1], p[2]);
      }
      const i = new to();
      i.setAttribute("position", new Lo(a, 3)), Jt = new Go(i, new Yo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Jt.renderOrder = 9999, o.scene.add(Jt), o.render();
    }
    function Wn(t) {
      const o = Ze();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new aa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new sa();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const i = e.nodes.val, s = e.elements.val;
      if (i.length === 0 || s.length === 0) return -1;
      let r = 1 / 0, p = -1;
      const c = a.ray;
      for (let b = 0; b < s.length; b++) {
        const S = s[b];
        if (S.length === 2) {
          const $ = new Ne(...i[S[0]]), y = new Ne(...i[S[1]]), f = new ll($, y), h = new Ne(), I = new Ne();
          c.closestPointToPoint(f.getCenter(new Ne()), h), f.closestPointToPoint(h, true, I);
          const L = h.distanceTo(I);
          L < r && (r = L, p = b);
        } else if (S.length === 3) {
          const $ = new Ne(...i[S[0]]), y = new Ne(...i[S[1]]), f = new Ne(...i[S[2]]), h = new Ne();
          if (c.intersectTriangle($, y, f, false, h)) {
            const L = c.origin.distanceTo(h);
            L < r && (r = L, p = b);
          } else {
            const L = $.add(y).add(f).divideScalar(3), z = new Ne();
            c.closestPointToPoint(L, z);
            const O = z.distanceTo(L);
            O < r && (r = O, p = b);
          }
        } else if (S.length === 4) {
          const $ = new Ne(...i[S[0]]), y = new Ne(...i[S[1]]), f = new Ne(...i[S[2]]), h = new Ne(...i[S[3]]), I = new Ne();
          let L = c.intersectTriangle($, y, f, false, I);
          if (L) {
            const z = c.origin.distanceTo(I);
            z < r && (r = z, p = b);
          }
          if (L = c.intersectTriangle($, f, h, false, I), L) {
            const z = c.origin.distanceTo(I);
            z < r && (r = z, p = b);
          }
        }
      }
      const { extent: d } = yo();
      return r < d * 0.1 ? p : -1;
    }
    function we(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let i = "<table>";
      if (o) {
        i += '<tr><td class="header"></td>';
        for (let s = 0; s < a; s++) i += `<td class="header">${o[s] || s}</td>`;
        i += "</tr>";
      }
      for (let s = 0; s < l; s++) {
        i += "<tr>", o && (i += `<td class="header">${o[s] || s}</td>`);
        for (let r = 0; r < a; r++) {
          const p = t[s][r], c = Math.abs(p) > 1e-10 ? "nonzero" : "";
          i += `<td class="${c}">${we(p, 2)}</td>`;
        }
        i += "</tr>";
      }
      return i += "</table>", i;
    }
    function Be(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ra(t, o, n, l, a, i, s) {
      const r = 0.8333333333333334 * o, p = 5 / 6 * o, c = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, d = r > 0 && a > 0 ? 12 * t * l / (a * r * s ** 2) : 0, b = t * o / s, S = a * i / s, $ = 12 * t * n / s ** 3 / (1 + c), y = 6 * t * n / s ** 2 / (1 + c), f = 4 * t * n / s * (1 + c / 4) / (1 + c), h = 2 * t * n / s * (1 - c / 2) / (1 + c), I = c > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${F("A", "s")} = ${Be("5", "6")} \xB7 ${F("A")} = <span class="highlight">${we(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Be("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("G") + "\xB7" + F("A", "s") + "\xB7" + F("L") + "\xB2")} = <span class="highlight">${we(c)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${we(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${F("t", "z")} = ${Be("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we($)}</span> &nbsp;(cortante)</div>
      <div>${F("b", "z")} = ${Be("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${F("k", "z")} = ${Be("4\xB7" + F("E") + "\xB7" + F("I", "z") + "\xB7(1+\u03C6/4)", F("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${F("a", "z")} = ${Be("2\xB7" + F("E") + "\xB7" + F("I", "z") + "\xB7(1\u2212\u03C6/2)", F("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Be(F("E") + "\xB7" + F("A"), F("L"))} = <span class="highlight">${we(b)}</span> &nbsp;(axial)</div>
      <div>${Be(F("G") + "\xB7" + F("J"), F("L"))} = <span class="highlight">${we(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${Be("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")} = <span class="highlight">${we($)}</span></div>
      <div>${Be("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))} = <span class="highlight">${we(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Be(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Be("\u2212" + F("EA"), F("L"))}</span>
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
    function Pa(t) {
      if (t.length === 2) {
        const n = xo(t[1], t[0]), l = Po(n), a = n[0] / l, i = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${Be("\u0394x", F("L"))} = ${Be(we(n[0]), we(l))} = <span class="highlight">${we(a)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${Be("\u0394y", F("L"))} = ${Be(we(n[1]), we(l))} = <span class="highlight">${we(i)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${Be("\u0394z", F("L"))} = ${Be(we(n[2]), we(l))} = <span class="highlight">${we(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${Be("\u2212" + F("m"), F("D"))}</span><span class="cell">${Be(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${Be("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${Be("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Oa() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function Na(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function qa(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Be("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Be(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let i = 0; i < n; i++) {
          const s = t[a][i], r = (a === i ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${we(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ns() {
      const t = "0", o = Be(F("EA"), F("L")), n = Be("\u2212" + F("EA"), F("L")), l = Be("12" + F("EI", "z"), F("L") + "\xB3"), a = Be("\u221212" + F("EI", "z"), F("L") + "\xB3"), i = Be("12" + F("EI", "y"), F("L") + "\xB3"), s = Be("\u221212" + F("EI", "y"), F("L") + "\xB3"), r = Be("6" + F("EI", "z"), F("L") + "\xB2"), p = Be("\u22126" + F("EI", "z"), F("L") + "\xB2"), c = Be("6" + F("EI", "y"), F("L") + "\xB2"), d = Be("\u22126" + F("EI", "y"), F("L") + "\xB2"), b = Be(F("GJ"), F("L")), S = Be("\u2212" + F("GJ"), F("L")), $ = Be("4" + F("EI", "z"), F("L")), y = Be("2" + F("EI", "z"), F("L")), f = Be("4" + F("EI", "y"), F("L")), h = Be("2" + F("EI", "y"), F("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
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
          i,
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
          f,
          t,
          t,
          t,
          c,
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
          c,
          t,
          t,
          t,
          i,
          t,
          c,
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
          c,
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
          const E = O[m][u], A = (m === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          k += `<td class="${A}">${E}</td>`;
        }
        k += "</tr>";
      }
      return k += "</table>", k;
    }
    function _a(t, o, n, l, a, i, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${Be(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${Be(we(t) + "\xD7" + we(o), we(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${Be("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + we(t) + "\xD7" + we(n), we(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${Be("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + we(t) + "\xD7" + we(n), we(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Be("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + we(t) + "\xD7" + we(l), we(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${Be("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + we(t) + "\xD7" + we(l), we(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Be(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${Be(we(a) + "\xD7" + we(i), we(s))}`,
          val: a * i / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${Be("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${Be("4\xD7" + we(t) + "\xD7" + we(n), we(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${Be("2\xD7" + we(t) + "\xD7" + we(n), we(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Be("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${Be("4\xD7" + we(t) + "\xD7" + we(l), we(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
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
      const i = document.createElement("div");
      i.className = "fem-full-overlay", i.innerHTML = `
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
    `, document.body.appendChild(i), (_a2 = i.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => i.remove()), i.addEventListener("click", (s) => {
        s.target === i && i.remove();
      });
    }
    function qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Kt && Kt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), i = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var c = "";
      if (i) {
        const m = Po(xo(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, A = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, j = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, w = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], C = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let U = "";
        for (let V = 0; V < 6; V++) {
          const se = V, ee = V + 6, Q = (w.length >= 12 ? w[se] : V >= 3 && w.length >= 6 && w[V - 3]) ? "checked" : "", de = (w.length >= 12 ? w[ee] : V >= 3 && w.length >= 6 && w[V]) ? "checked" : "", ie = v.length >= 12 && v[se] > 0 ? v[se].toFixed(1) : "", Se = v.length >= 12 && v[ee] > 0 ? v[ee].toFixed(1) : "";
          U += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${C[V]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${se}" ${Q}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ee}" ${de}></td>
          <td><input type="number" data-spr="${se}" value="${ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${ee}" value="${Se}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${we(m)}${we(u)}${we(E)}${we(A)}${we(R)}${we(j)}${we(x)}${U}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, A = m / (2 * (1 + E)), R = l.length === 4, j = m / (1 - E * E);
        `${l.length}${l.join(", ")}${we(m)}${we(A)}${we(u)}${we(E)}`, R && (c = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${F("D")} = ${Be(F("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Be("1\u2212\u03BD", "2")}</span>
          </span> = ${Be(we(m), "1\u2212" + we(E) + "\xB2")} = <span class="highlight">${we(j)}</span></div>

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
          <div>${F("B\u0304", "I")} = ${F("B", "I")} + ${F("B", "IC")} &nbsp; donde &nbsp; ${F("B", "IC")} = \u2212${Be("1", "V")}\u222B${F("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${F("K", "drill")} = \u03B1\xB7${F("G")}\xB7${F("t")} \xB7 \u222B${F("B", "d")}<sup>T</sup>\xB7${F("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${F("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${F("D", "b")} = ${Be(F("E") + "\xB7" + F("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${we(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${F("D", "s")} = \u03BA\xB7${F("G")}\xB7${F("t")} = <span class="highlight">${we(5 / 6 * A * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${F("K", "24\xD724")} = ${F("K", "membrana")}(8\xD78) + ${F("K", "flexi\xF3n")}(12\xD712) + ${F("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let d = "", b = "", S = "";
      c || (c = "");
      let $ = "", y = "", f = "", h = "", I = null, L = null, z = null, O = [];
      try {
        if (I = vn(a, s, t), L = yn(a), z = no(ns(L), no(I, L)), O = i ? [
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
        ], i) {
          const A = Po(xo(a[1], a[0])), R = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, j = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, w = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, C = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          c = Ra(R, j, x, w, v, C, A);
        }
        $ = Pa(a), y = Oa(), f = Na(l), h = qa(i);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${m}</div>${Gn(I, O)}`, b = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${L.length}\xD7${L.length}) ${u}</div>${Gn(L, O)}`, S = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${Gn(z, O)}`;
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
        l.map((u, E) => {
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
      if (p && i && (r == null ? void 0 : r.deformations) && I && L) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), E = (_w = p.shearsZ) == null ? void 0 : _w.get(t), A = (_x = p.torsions) == null ? void 0 : _x.get(t), R = (_y = p.bendingsY) == null ? void 0 : _y.get(t), j = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], w = [];
        for (const ee of l) {
          const Q = ((_A = r.deformations) == null ? void 0 : _A.get(ee)) || [
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
          v = no(L, w);
        } catch {
          v = new Array(12).fill(0);
        }
        let C = [];
        try {
          C = no(I, v);
        } catch {
          C = new Array(12).fill(0);
        }
        const U = (ee, Q) => ee.map((de, ie) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[ie % 6]}=${we(de)}</span>`).join(", "), se = [
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
        `${F("u", "global")}${l.map((ee, Q) => `<span style="color:var(--fem-label)">nodo ${ee}:</span> ${x.map((de, ie) => `<span style="color:${Math.abs(w[Q * 6 + ie]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${we(w[Q * 6 + ie])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${U(v, [
          ...x,
          ...x
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${C.map((ee, Q) => `<span style="color:${Math.abs(ee) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${se[Q]}=${we(ee)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${we(C[0])}${F("P", "7")}${F("N", "j")}${we(C[6])}${F("P", "2")}${F("V", "y,i")}${we(C[1])}${F("P", "8")}${F("V", "y,j")}${we(C[7])}${F("P", "3")}${F("V", "z,i")}${we(C[2])}${F("P", "9")}${F("V", "z,j")}${we(C[8])}${F("P", "4")}${F("M", "x,i")}${we(C[3])}${F("P", "10")}${F("M", "x,j")}${we(C[9])}${F("P", "5")}${F("M", "y,i")}${we(C[4])}${F("P", "11")}${F("M", "y,j")}${we(C[10])}${F("P", "6")}${F("M", "z,i")}${we(C[5])}${F("P", "12")}${F("M", "z,j")}${we(C[11])}${m ? m.map((ee) => we(ee)).join(", ") : "\u2014"}${u ? u.map((ee) => we(ee)).join(", ") : "\u2014"}${E ? E.map((ee) => we(ee)).join(", ") : "\u2014"}${A ? A.map((ee) => we(ee)).join(", ") : "\u2014"}${R ? R.map((ee) => we(ee)).join(", ") : "\u2014"}${j ? j.map((ee) => we(ee)).join(", ") : "\u2014"}`;
      } else if (p && i) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), E = (_D = p.shearsZ) == null ? void 0 : _D.get(t), A = (_E = p.torsions) == null ? void 0 : _E.get(t), R = (_F = p.bendingsY) == null ? void 0 : _F.get(t), j = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((x) => we(x)).join(", ") : "\u2014"}${u ? u.map((x) => we(x)).join(", ") : "\u2014"}${E ? E.map((x) => we(x)).join(", ") : "\u2014"}${A ? A.map((x) => we(x)).join(", ") : "\u2014"}${R ? R.map((x) => we(x)).join(", ") : "\u2014"}${j ? j.map((x) => we(x)).join(", ") : "\u2014"}`;
      } else if (p && !i) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), E = (_J = p.bendingXY) == null ? void 0 : _J.get(t), A = (_K = p.membraneXX) == null ? void 0 : _K.get(t), R = (_L = p.membraneYY) == null ? void 0 : _L.get(t), j = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((x) => we(x)).join(", ") : "\u2014"}${u ? u.map((x) => we(x)).join(", ") : "\u2014"}${E ? E.map((x) => we(x)).join(", ") : "\u2014"}${A ? A.map((x) => we(x)).join(", ") : "\u2014"}${R ? R.map((x) => we(x)).join(", ") : "\u2014"}${j ? j.map((x) => we(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Kt = yl(t, o, n, s, r, p), Kt.id = "fem-inspect-panel", document.body.appendChild(Kt), (_N = Kt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ao()), (_O = Kt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = Kt.querySelectorAll("input[data-rel]"), u = Kt.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), A = new Array(12).fill(0);
        m.forEach((j) => {
          E[parseInt(j.dataset.rel)] = j.checked;
        }), u.forEach((j) => {
          const x = parseFloat(j.value);
          x > 0 && (A[parseInt(j.dataset.spr)] = x);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((j) => j) ? s.momentReleases.set(t, E) : s.momentReleases.delete(t), A.some((j) => j > 0) ? s.partialFixitySprings.set(t, A) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((j, x) => j ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, A);
        const R = Kt.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = i ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Po(xo(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, A = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, j = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return _a(u, E, A, R, j, x, m);
      })() : void 0;
      Kt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const A = i ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, A, Yn(I, O), k);
          } else if (E === "T" && L) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, Yn(L, O));
          else if (E === "kGlobal" && z) {
            const A = i ? Ns() : "<em>Shell 18\xD718</em>";
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
      const i = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) i.set(y, [
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
        supports: i,
        loads: r
      });
      const p = 2e8, c = 77e6, d = 5e-3, b = 2e-6, S = 1e-6, $ = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          c
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          b
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          b
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = zt(l, a, {
          supports: i,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
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
      const i = /* @__PURE__ */ new Map();
      i.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(20 * 2 + 1, [
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
        supports: i,
        loads: s
      });
      const r = 2e8, p = 77e6, c = 0.01, d = 5e-6, b = 2e-6, S = {
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
          c
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
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const $ = zt(l, a, {
          supports: i,
          loads: s
        }, S);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Arco:", $.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function Bs() {
      const i = [], s = [];
      for (let f = 0; f <= 16; f++) {
        const h = 60 * f / 16;
        i.push([
          h,
          -6 / 2,
          8
        ]), i.push([
          h,
          6 / 2,
          8
        ]);
      }
      const r = i.length;
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
      ], c = [];
      for (const f of p) {
        const h = 60 * f / 16, I = i.length;
        i.push([
          h,
          -6 / 2,
          0
        ]);
        const L = i.length;
        i.push([
          h,
          6 / 2,
          0
        ]);
        const z = i.length;
        i.push([
          h,
          -6 / 2,
          28
        ]);
        const O = i.length;
        i.push([
          h,
          6 / 2,
          28
        ]), c.push(z, O), s.push([
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
      for (const f of c) {
        const h = i[f][0];
        for (let I = 0; I <= 16; I++) {
          const L = 60 * I / 16;
          if (Math.abs(L - h) > 60 * 0.05 && Math.abs(L - h) < 60 * 0.45) {
            const z = i[f][1] < 0 ? I * 2 : I * 2 + 1;
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
      const b = /* @__PURE__ */ new Map();
      for (let f = 0; f <= 16; f++) b.set(f * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), b.set(f * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: b
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
        const f = zt(i, s, {
          supports: d,
          loads: b
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Puente atirantado: ${i.length} nodos, ${s.length} elem, span=60m`);
    }
    function Hs() {
      const i = [], s = [];
      for (let h = 0; h <= 12; h++) {
        const I = h * 3.5, L = h * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const O = L + 2 * Math.PI * z / 6, k = 5 * Math.cos(O), m = 5 * Math.sin(O);
          i.push([
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
        const I = i.length;
        i.push([
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
      const c = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const I = 10 * h / 12, L = h * 6;
        for (let z = 0; z < 6; z++) c.set(L + z, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = i, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: c
      });
      const d = 2e8, b = 77e6, S = 8e-3, $ = 1e-5, y = 5e-6, f = {
        elasticities: new Map(s.map((h, I) => [
          I,
          d
        ])),
        shearModuli: new Map(s.map((h, I) => [
          I,
          b
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
        const h = zt(i, s, {
          supports: p,
          loads: c
        }, f);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Torre Twist: ${i.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function js() {
      const a = [], i = [];
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
          const k = O * 2 * Math.PI / 3 - Math.PI / 2, m = L * Math.cos(k), u = L * Math.sin(k), E = a.length;
          a.push([
            m,
            u,
            I
          ]), i.push([
            z,
            E
          ]);
          const A = a.length;
          a.push([
            m * 0.5,
            u * 0.5,
            I
          ]), i.push([
            z,
            A
          ]), i.push([
            A,
            E
          ]);
        }
        for (let O = 0; O < 3; O++) {
          const k = z + 1 + O * 2, m = z + 1 + (O + 1) % 3 * 2;
          i.push([
            k,
            m
          ]);
        }
        if (f < 20) {
          const k = z + 7;
          i.push([
            z,
            k
          ]);
          for (let m = 0; m < 3; m++) i.push([
            z + 1 + m * 2,
            k + 1 + m * 2
          ]), i.push([
            z + 2 + m * 2,
            k + 2 + m * 2
          ]), i.push([
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
      e.nodes.val = a, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: p
      });
      const c = 35e6, d = 14e6, b = 0.02, S = 5e-5, $ = 2e-5, y = {
        elasticities: new Map(i.map((f, h) => [
          h,
          c
        ])),
        shearModuli: new Map(i.map((f, h) => [
          h,
          d
        ])),
        areas: new Map(i.map((f, h) => [
          h,
          b
        ])),
        momentsOfInertiaZ: new Map(i.map((f, h) => [
          h,
          S
        ])),
        momentsOfInertiaY: new Map(i.map((f, h) => [
          h,
          S
        ])),
        torsionalConstants: new Map(i.map((f, h) => [
          h,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = zt(a, i, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Burj Khalifa: ${a.length} nodos, ${i.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Ws() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const S = b * 12, $ = 15 - b * 2, y = 20 - b * 3, f = 8 - b, h = t.length;
        for (let L = 0; L <= 4; L++) {
          const z = L / 4, O = -f / 2 + f * z, k = y * (1 - z * z * 0.3);
          for (let m = 0; m <= 12; m++) {
            const u = m / 12, E = S + k * u, A = $ * Math.sin(Math.PI * u) * (1 - z * z * 0.5), R = O;
            t.push([
              E,
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
      for (let b = 0; b < t.length; b++) t[b][2] < 0.5 && a.set(b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && i.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: i
      });
      const s = 35e6, r = 0.2, p = 0.15, c = s / (2 * (1 + r)), d = {
        elasticities: new Map(o.map((b, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(o.map((b, S) => [
          S,
          r
        ])),
        thicknesses: new Map(o.map((b, S) => [
          S,
          p
        ])),
        shearModuli: new Map(o.map((b, S) => [
          S,
          c
        ]))
      };
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const b = zt(t, o, {
          supports: a,
          loads: i
        }, d);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
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
      const i = 15 * 12;
      for (let y = 0; y < 12; y++) a.push([
        i + y,
        i + (y + 1) % 12
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
      const p = 2e8, c = 77e6, d = 6e-3, b = 8e-6, S = 4e-6, $ = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          c
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          b
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          b
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = zt(l, a, {
          supports: s,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => yt(), 50), et(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Vn() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = K.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = K.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = K.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = K.nx) == null ? void 0 : _d.val) ?? 8), i = Math.round(((_e2 = K.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = K.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = K.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = K.P) == null ? void 0 : _h.val) ?? 100, c = s / (2 * (1 + r)), d = o / a, b = n / i, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= i; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * b
      ]);
      const h = a + 1;
      for (let k = 0; k < i; k++) for (let m = 0; m < a; m++) $.push([
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
      for (let k = 0; k <= a; k++) I.push(i * h + k);
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
          c
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = zt(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = bo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = i * h + Math.floor(a / 2), E = k.deformations.get(u), A = E ? E[0] : 0;
          console.log(`Muro Q4: Ux=${A.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const O = Ze();
      O && (O.settings.shellResults.val = "displacementX"), setTimeout(() => yt(), 50), et();
    }
    function Ys() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = K.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = K.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = K.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = K.nx) == null ? void 0 : _d.val) ?? 12), i = Math.round(((_e2 = K.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = K.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = K.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = K.P) == null ? void 0 : _h.val) ?? 50, c = s / (2 * (1 + r)), d = o / a, b = n / i, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let O = 0; O <= i; O++) for (let k = 0; k <= a; k++) S.push([
        k * d,
        O * b,
        0
      ]);
      const h = a + 1;
      for (let O = 0; O < i; O++) for (let k = 0; k < a; k++) $.push([
        O * h + k,
        O * h + k + 1,
        (O + 1) * h + k + 1,
        (O + 1) * h + k
      ]);
      for (let O = 0; O <= i; O++) y.set(O * h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = Math.floor(i / 2) * h + a;
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
          c
        ])),
        densities: new Map($.map((O, k) => [
          k,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = L);
      try {
        const O = zt(S, $, {
          supports: y,
          loads: f
        }, L);
        if (O && e.deformOutputs) {
          e.deformOutputs.val = O;
          const k = bo(S, $, L, O);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = O.deformations.get(I), u = m ? m[2] : 0, E = l * n * n * n / 12, A = p * o * o * o / (3 * s * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${A.toExponential(4)} | ratio=${(Math.abs(u) / A).toFixed(4)}`);
        }
      } catch (O) {
        console.warn("VigaQ4:", O.message);
      }
      const z = Ze();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => yt(), 50), et();
    }
    function Js() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = K.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = K.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = K.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = K.nx) == null ? void 0 : _d.val) ?? 8), i = Math.round(((_e2 = K.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = K.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = K.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = K.P) == null ? void 0 : _h.val) ?? 20, c = s / (2 * (1 + r)), d = o / a, b = n / i, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= i; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * b
      ]);
      const h = a + 1;
      for (let k = 0; k < i; k++) for (let m = 0; m < a; m++) $.push([
        k * h + m,
        k * h + m + 1,
        (k + 1) * h + m + 1,
        (k + 1) * h + m
      ]);
      for (let k = 0; k <= i; k++) y.set(k * h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const I = [];
      for (let k = 0; k <= i; k++) I.push(k * h + a);
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
          c
        ])),
        densities: new Map($.map((k, m) => [
          m,
          t.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = z);
      try {
        const k = zt(S, $, {
          supports: y,
          loads: f
        }, z);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const m = bo(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (i / 2 | 0) * h + a, E = k.deformations.get(u), A = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${A.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const O = Ze();
      O && (O.settings.shellResults.val = "displacementZ"), setTimeout(() => yt(), 50), et();
    }
    function Vs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
      const t = M, o = ((_a2 = K.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = K.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = K.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = K.H2) == null ? void 0 : _d.val) ?? 4.5, i = Math.round(((_e2 = K.nCol) == null ? void 0 : _e2.val) ?? 4), s = Math.round(((_f = K.nCorr) == null ? void 0 : _f.val) ?? 8), r = ((_g = K.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = K.t) == null ? void 0 : _h.val) ?? 5e-4, c = ((_i = K.q) == null ? void 0 : _i.val) ?? 1, d = 0.3, b = r / (2 * (1 + d)), S = 543e-5, $ = 889e-8, y = 249e-7, f = 312e-9, h = 285e-5, I = 142e-8, L = 1943e-8, z = 698e-10, O = 896e-6, k = 422e-9, m = 422e-9, u = 679e-9, E = [], A = [], R = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), x = [];
      for (let X = 0; X < i; X++) x.push(X * n / (i - 1));
      const w = [];
      for (let X = 0; X < s; X++) w.push(X * o / (s - 1));
      const v = (X) => l + (a - l) * X / o, C = [];
      for (let X = 0; X < s; X++) {
        C[X] = [];
        for (let Ie = 0; Ie < i; Ie++) C[X][Ie] = E.length, E.push([
          w[X],
          x[Ie],
          v(w[X])
        ]);
      }
      const U = [], V = [];
      for (let X = 0; X < i; X++) U.push(E.length), E.push([
        0,
        x[X],
        0
      ]), V.push(E.length), E.push([
        o,
        x[X],
        0
      ]);
      const se = [];
      let ee = 0;
      for (let X = 0; X < i; X++) A.push([
        U[X],
        C[0][X]
      ]), se.push("col"), ee++, A.push([
        V[X],
        C[s - 1][X]
      ]), se.push("col"), ee++;
      for (let X = 0; X < i; X++) for (let Ie = 0; Ie < s - 1; Ie++) A.push([
        C[Ie][X],
        C[Ie + 1][X]
      ]), se.push("vig"), ee++;
      A.length;
      for (let X = 0; X < s; X++) for (let Ie = 0; Ie < i - 1; Ie++) A.push([
        C[X][Ie],
        C[X][Ie + 1]
      ]), se.push("corr"), ee++;
      A.length;
      for (let X = 0; X < s - 1; X++) for (let Ie = 0; Ie < i - 1; Ie++) A.push([
        C[X][Ie],
        C[X + 1][Ie],
        C[X + 1][Ie + 1],
        C[X][Ie + 1]
      ]), se.push("shell");
      for (let X = 0; X < i; X++) R.set(U[X], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), R.set(V[X], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let X = 0; X < s; X++) for (let Ie = 0; Ie < i; Ie++) {
        const Ke = X === 0 || X === s - 1 ? w[1] / 2 : (w[Math.min(X + 1, s - 1)] - w[Math.max(X - 1, 0)]) / 2, ot = Ie === 0 || Ie === i - 1 ? x[1] / 2 : (x[Math.min(Ie + 1, i - 1)] - x[Math.max(Ie - 1, 0)]) / 2, gt = -c * Ke * ot, It = C[X][Ie], kt = j.get(It) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        kt[2] += gt, j.set(It, kt);
      }
      e.nodes.val = E, e.elements.val = A, e.nodeInputs && (e.nodeInputs.val = {
        supports: R,
        loads: j
      });
      const Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), be = t.rho;
      for (let X = 0; X < A.length; X++) {
        Q.set(X, r), Fe.set(X, b), me.set(X, be);
        const Ie = se[X];
        if (Ie === "col") {
          de.set(X, S), ie.set(X, $), Se.set(X, y), q.set(X, f);
          const Ke = new Array(12).fill(false);
          Ke[10] = true, Ke[11] = true, te.set(X, Ke);
        } else if (Ie === "vig") de.set(X, h), ie.set(X, I), Se.set(X, L), q.set(X, z);
        else if (Ie === "corr") {
          de.set(X, O), ie.set(X, k), Se.set(X, m), q.set(X, u);
          const Ke = new Array(12).fill(false);
          Ke[4] = true, Ke[5] = true, Ke[10] = true, Ke[11] = true, te.set(X, Ke);
        } else Ie === "shell" && (ne.set(X, d), fe.set(X, p));
      }
      const Ee = {
        elasticities: Q,
        areas: de,
        momentsOfInertiaZ: ie,
        momentsOfInertiaY: Se,
        shearModuli: Fe,
        torsionalConstants: q,
        densities: me,
        poissonsRatios: ne,
        thicknesses: fe,
        momentReleases: te
      };
      e.elementInputs && (e.elementInputs.val = Ee);
      try {
        const X = zt(E, A, {
          supports: R,
          loads: j
        }, Ee);
        if (X && e.deformOutputs) {
          e.deformOutputs.val = X;
          const Ie = bo(E, A, Ee, X);
          e.analyzeOutputs && (e.analyzeOutputs.val = Ie);
          let Ke = 0, ot = 0;
          X.deformations.forEach((gt, It) => {
            Math.abs(gt[2]) > Math.abs(Ke) && (Ke = gt[2], ot = It);
          }), console.log(`P\xE9rgola: Uz_max=${Ke.toExponential(4)} m en nodo ${ot} | ${ee} frames + ${s - 1} shells`);
        }
      } catch (X) {
        console.warn("Pergola:", X.message);
      }
      const le = Ze();
      le && (le.settings.shellResults.val = "displacementZ"), setTimeout(() => yt(), 50), et();
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
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, i = o("po-fy") * 1e3, s = o("po-H"), r = o("po-L"), p = o("po-As") * 1e-4, c = o("po-nbar"), d = o("po-drift") / 100, b = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const $ = [], y = d * s, f = 40;
        for (let h = 1; h <= b; h++) {
          const I = y * h / b;
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
              Fy_rebar: i,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: c
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: i,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: c
            },
            dispHistory: $
          });
          S.textContent = `Completado: ${I.nSteps} pasos`, Ha(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${i / 1e3}MPa`);
        } catch (h) {
          S.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Ha(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const i = t.width, s = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = i - r.left - r.right, c = s - r.top - r.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, i, s);
      let d = Math.min(...o), b = Math.max(...o), S = Math.min(...n), $ = Math.max(...n);
      d === b && (d -= 0.01, b += 0.01), S === $ && (S -= 1, $ += 1);
      const y = b - d, f = $ - S, h = (O) => r.left + (O - d) / y * p, I = (O) => r.top + c - (O - S) / f * c;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && b > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(h(0), r.top), a.lineTo(h(0), r.top + c), a.stroke()), S < 0 && $ > 0 && (a.beginPath(), a.moveTo(r.left, I(0)), a.lineTo(r.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(h(o[0]), I(n[0]));
      for (let O = 1; O < o.length; O++) a.lineTo(h(o[O]), I(n[O]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", r.left + p / 2, s - 5), a.save(), a.translate(12, r.top + c / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, i / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
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
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), i = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), r = 100, p = [];
      for (let V = 0; V < s; V++) {
        const se = i * (1 + V * 0.5);
        for (let ee = 0; ee < r; ee++) {
          const Q = ee / r * 2 * Math.PI;
          p.push(se * Math.sin(Q));
        }
      }
      const c = o / n, d = l * n;
      let b = 0, S = 0, $ = -c, y = c, f = 0, h = 0, I = 0, L = 0, z = 0, O = 0;
      const k = [];
      for (const V of p) {
        let se = $, ee = y, Q = f, de = h, ie = I, Se = L, Fe = z, q = O, me;
        const ne = V - b;
        if (Math.abs(ne) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((q === 0 || q === 3) && (ne < 0 ? (q = 2, de = -c, ie = -o, Q = de, Se = 0, Fe = 0) : (q = 1, de = c, ie = o, Q = de, Se = 0, Fe = 0)), q === 2 && ne > 0) {
          q = 1, Se = b, Fe = S, b < se && (se = b);
          const X = (ee - se) / (2 * 1 * c), Ie = 1 + 0 * Math.pow(X, 0.8);
          de = (o * Ie - d * c * Ie - Fe + n * Se) / (n - d), ie = o * Ie + d * (de - c * Ie), Q = ee;
        } else if (q === 1 && ne < 0) {
          q = 2, Se = b, Fe = S, b > ee && (ee = b);
          const X = (ee - se) / (2 * 1 * c), Ie = 1 + 0 * Math.pow(X, 0.8);
          de = (-o * Ie + d * c * Ie - Fe + n * Se) / (n - d), ie = -o * Ie + d * (de + c * Ie), Q = se;
        }
        const fe = Math.abs((Q - de) / c);
        let te = a - 0.925 * fe / (0.15 + fe);
        te < 0.1 && (te = 0.1);
        const be = (V - Se) / (de - Se), Ee = 1 + Math.pow(Math.abs(be), te), le = Math.pow(Ee, 1 / te);
        me = l * be + (1 - l) * be / le, me = me * (ie - Fe) + Fe, k.push(me), b = V, S = me, $ = se, y = ee, f = Q, h = de, I = ie, L = Se, z = Fe, O = q;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, A = m.height;
      u.clearRect(0, 0, E, A);
      const R = Math.max(...p.map(Math.abs)), j = Math.max(...k.map(Math.abs)), x = (E - 40) / (2 * R), w = (A - 40) / (2 * j), v = E / 2, C = A / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, C), u.lineTo(E - 20, C), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, A - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, C - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, E - 30, C + 12), u.fillText(`\xB1${(j / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let V = 0; V < p.length; V++) {
        const se = v + p[V] * x, ee = C - k[V] * w;
        V === 0 ? u.moveTo(se, ee) : u.lineTo(se, ee);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, C - o * w), u.lineTo(E - 20, C - o * w), u.stroke(), u.beginPath(), u.moveTo(20, C + o * w), u.lineTo(E - 20, C + o * w), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, C - o * w - 5);
      const U = t.querySelector("#nl-info");
      U.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(i * 100).toFixed(1)}%`;
    }
    function Ga() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, i = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const s = ml({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: i
      });
      document.body.appendChild(s);
    }
    let Bo = null;
    function Ya(t) {
      Bo && Bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = mn(), l = bn(), a = Object.entries(n).map(([c, d]) => `<option value="${d}">${c}</option>`).join(""), i = Object.entries(l).map(([c, d]) => `<option value="${d}">${c}</option>`).join("");
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
        const c = s.value;
        let d = "";
        c === "rect" ? d = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : c === "circ" ? d = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : c === "W" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : c === "HSS" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${i}</select>` : c === "I-param" ? d = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : c === "tubular" && (d = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = d;
      }
      s.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const c = s.value, d = {
          secType: c
        };
        c === "rect" ? (d.b = parseFloat(o.querySelector("#ap-b").value), d.h = parseFloat(o.querySelector("#ap-h").value), d.material = 0) : c === "circ" ? (d.b = parseFloat(o.querySelector("#ap-d").value), d.material = 0) : c === "W" || c === "HSS" ? (d.profileIdx = parseInt(o.querySelector("#ap-profile").value), d.material = 1) : c === "I-param" ? (d.bf = parseFloat(o.querySelector("#ap-bf").value), d.hf = parseFloat(o.querySelector("#ap-hf").value), d.tf = parseFloat(o.querySelector("#ap-tf").value), d.tw = parseFloat(o.querySelector("#ap-tw").value), d.material = 1) : c === "tubular" && (d.bc = parseFloat(o.querySelector("#ap-bc").value), d.hc = parseFloat(o.querySelector("#ap-hc").value), d.t = parseFloat(o.querySelector("#ap-t").value), d.material = 1);
        const b = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach(($) => {
          b[parseInt($.dataset.asgnRel)] = $.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach(($) => {
          const y = parseFloat($.value);
          y > 0 && (S[parseInt($.dataset.asgnSpr)] = y);
        }), d.releases12 = b, d.springs12 = S, d.releaseRotStart = b[4] || b[5], d.releaseRotEnd = b[10] || b[11], d.releaseAxial = b[0], d.releaseTorsion = b[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach(($) => he.set($, {
          ...d
        })), o.remove(), Bo = null, vo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((c) => he.delete(c)), o.remove(), Bo = null, vo(), e.elementInputs.val = {
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
      const l = o[n[0]], a = o[n[1]], i = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), r = Math.abs(a[2] - l[2]), p = s > i && s > r, c = Math.sqrt(i * i + s * s + r * r), d = Me.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
      $.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", $.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${p ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${c.toFixed(3)} m
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
      function i(p) {
        const c = Ze();
        if (!c) return null;
        const d = c.controls.object, b = new Ne(p[0], p[1], p[2]);
        b.project(d);
        const S = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * S.width,
          y: (-b.y + 1) / 2 * S.height
        };
      }
      function s(p, c, d, b, S) {
        const $ = Math.min(p, d), y = Math.max(p, d), f = Math.min(c, b), h = Math.max(c, b), I = e.nodes.val, L = e.elements.val, z = [];
        for (let O = 0; O < L.length; O++) {
          const k = L[O], m = k.map((u) => i(I[u])).filter(Boolean);
          if (m.length !== 0) if (S) m.every((E) => E.x >= $ && E.x <= y && E.y >= f && E.y <= h) && z.push(O);
          else {
            if (m.some((E) => E.x >= $ && E.x <= y && E.y >= f && E.y <= h)) {
              z.push(O);
              continue;
            }
            if (k.length === 2) {
              const E = m[0], A = m[1];
              r(E.x, E.y, A.x, A.y, $, f, y, h) && z.push(O);
            }
          }
        }
        return z;
      }
      function r(p, c, d, b, S, $, y, f) {
        const h = (L, z) => L >= S && L <= y && z >= $ && z <= f;
        if (h(p, c) || h(d, b)) return true;
        const I = (L, z, O, k, m, u, E, A) => {
          const R = (O - L) * (A - u) - (k - z) * (E - m);
          if (Math.abs(R) < 1e-10) return false;
          const j = ((m - L) * (A - u) - (u - z) * (E - m)) / R, x = ((m - L) * (k - z) - (u - z) * (O - L)) / R;
          return j >= 0 && j <= 1 && x >= 0 && x <= 1;
        };
        return I(p, c, d, b, S, $, y, $) || I(p, c, d, b, y, $, y, f) || I(p, c, d, b, S, f, y, f) || I(p, c, d, b, S, $, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        Yt && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (po) {
          const d = Ze();
          if (!d) return;
          const b = Fs(p.clientX, p.clientY, d.camera, d.rendererElm);
          if (St.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== zo && Aa(b.nodeIdx), St.track && zo !== null && b.worldPos && b.snapType !== "node") {
            const S = La(b.worldPos, zo);
            S && (b.worldPos = S, b.snapType = "grid");
          }
          if (zo !== null && b.worldPos) {
            const S = e.nodes.val[zo];
            S && Cs(p.clientX, p.clientY, new Ne(...S), b.worldPos);
          } else if ($t !== null && b.worldPos) {
            const S = e.nodes.val[$t];
            S && Cs(p.clientX, p.clientY, new Ne(...S), b.worldPos);
          } else Qt && (Qt.remove(), Qt = null);
          b.nodeIdx, Rs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!oo && !Yt) return;
        if (Yt && n) {
          const d = p.offsetX - n.x, b = p.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(b) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = d > 0, $ = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(d), h = Math.abs(b);
            l.style.left = $ + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const c = Wn(p);
        if (c >= 0) Os(c), o.style.cursor = "pointer";
        else {
          if (Jt) {
            const d = Ze();
            d == null ? void 0 : d.scene.remove(Jt), Jt = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = Yt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (Yt && n) {
          const c = p.offsetX - n.x, d = p.offsetY - n.y;
          if (Math.abs(c) > a || Math.abs(d) > a) {
            const b = c > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, b);
            p.ctrlKey || p.metaKey || (xt.clear(), wo()), S.forEach((y) => {
              xt.has(y) || (xt.add(y), Bn(y));
            }), Eo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (po) {
          const c = Ze();
          if (!c) return;
          const d = Fs(p.clientX, p.clientY, c.camera, c.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Fa(d), Rs(d));
          return;
        }
        if (Yt) {
          if (l) return;
          const c = Wn(p), d = p.ctrlKey || p.metaKey;
          if (c >= 0) {
            if (d) if (xt.has(c)) {
              xt.delete(c);
              const b = Mo.findIndex((S) => S.__elemIdx === c);
              if (b >= 0) {
                const S = Ze();
                S == null ? void 0 : S.scene.remove(Mo[b]), Mo[b].geometry.dispose(), Mo[b].material.dispose(), Mo.splice(b, 1), S == null ? void 0 : S.render();
              }
            } else xt.add(c), Bn(c);
            else xt.clear(), wo(), xt.add(c), Bn(c);
            Eo();
          } else d || (xt.clear(), wo(), Eo());
          return;
        }
        if (oo) {
          const c = Wn(p);
          c >= 0 && (Os(c), Ja(c));
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
      xe = Math.max(0, Math.min(t, Le.modeShapes.length - 1));
      const o = Le.modeShapes[xe], { extent: n } = yo();
      let l = 0;
      for (let i = 0; i < Te.length; i++) {
        const s = o[i * 6] || 0, r = o[i * 6 + 1] || 0, p = o[i * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + r * r + p * p));
      }
      Ge = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const a = Ce.querySelector("#cad3d-mode-label");
      a && Le.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Le.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Le.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = Qe, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ce), document.body.appendChild(ct.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (tt("muro-q4"), Vn(), Ts("muro-q4"), setTimeout(() => {
        T === "muro-q4" && so();
      }, 200));
    }, 100);
    const tn = document.createElement("button");
    tn.id = "mobile-menu-btn", tn.innerHTML = "\u2630", tn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), tn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(tn);
    const uo = document.createElement("button");
    uo.id = "fullscreen-btn", uo.innerHTML = "\u26F6", uo.title = "Pantalla completa", uo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, uo.addEventListener("mouseenter", () => {
      uo.style.transform = "scale(1.15)";
    }), uo.addEventListener("mouseleave", () => {
      uo.style.transform = "scale(1)";
    }), uo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(uo), document.body.appendChild(Sl());
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
