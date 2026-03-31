const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-CToQkEkn.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-BGUxSkhs.js","./cyclicPushoverCpp-Xwxa7wee.js"])))=>i.map(i=>d[i]);
import { d as At, _ as ta, p as Un, m as Ua, s as Xa, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
import { v as Jo, P as on, g as Ka, a as Za, o as Qa } from "./theme-CzzIlc4y.js";
import { G as sn, b as el, M as oa, D as na, B as no, c as xn, d as tl, C as ol, e as da, V as qe, P as Io, R as sa, f as aa, g as Wo, h as Go, i as nl, S as sl, j as al, F as Lo, a as Yo, L as Co, k as ll, l as rl, A as dn, T as Xn, m as pn, n as fn, o as il, p as cl } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as go } from "./analyze-ClLKGn9k.js";
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
    const P = os.find((W) => W.id === e), M = Vo.find((W) => W.id === g), U = P.toKN, B = M.toM, Q = (W, he, T) => T / (Math.pow(U, W) * Math.pow(B, he));
    let V, H;
    switch (e) {
      case "kN":
        V = 10, H = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        V = 1, H = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        V = 1e3, H = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        V = 10, H = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        V = 5e3, H = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        V = 1e4, H = [
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
      E: Q(1, -2, Fo.E),
      G: Q(1, -2, Fo.G),
      A: Q(0, 2, Fo.A),
      Iz: Q(0, 4, Fo.Iz),
      Iy: Q(0, 4, Fo.Iy),
      J: Q(0, 4, Fo.J),
      rho: Q(1, -4, Fo.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: V,
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
    const g = e.force, [P, M, U] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: U,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: P,
          max: M,
          step: U,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: P,
          max: M,
          step: U,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: U,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: U,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: U,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: U,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: U,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: P,
          max: M,
          step: U,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: U,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: U,
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
          step: U,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: U,
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
    function P(M, U) {
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
      ], Q = [
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
      if (V += '<div id="modal-body" style="padding:0 12px 10px 12px;">', U.properties) for (const W of U.properties) V += `<span style="color:#888">${W}</span>
`;
      V += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const W of B) V += `<th style="padding:2px 5px">${W}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((W, he) => {
        var _a2;
        const T = W > 0 ? 1 / W : 0, X = W * 2 * Math.PI, $e = ((_a2 = M.massParticipation) == null ? void 0 : _a2[he]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ce = 0; ce < 6; ce++) Q[ce] += $e[ce];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${he + 1}</td>
  <td style="padding:2px 6px; text-align:right">${W.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${T.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${X.toFixed(2)}</td>`;
        for (let ce = 0; ce < 6; ce++) {
          const ie = ($e[ce] * 100).toFixed(1), oe = $e[ce] > 0.5 ? "#f00" : $e[ce] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${oe}">${ie}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Q[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Q[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Q[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, g) {
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
        let W = false, he = 0, T = 0, X = 0, $e = 0;
        H.addEventListener("mousedown", (ce) => {
          if (ce.target.tagName === "BUTTON") return;
          W = true, he = ce.clientX, T = ce.clientY;
          const ie = e.getBoundingClientRect();
          X = ie.left, $e = ie.top, ce.preventDefault();
        }), document.addEventListener("mousemove", (ce) => {
          if (!W) return;
          const ie = ce.clientX - he, oe = ce.clientY - T;
          e.style.left = X + ie + "px", e.style.top = $e + oe + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          W = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const W = [];
        W.push(`Modal Analysis \u2014 ${U.title}`);
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
        M.frequencies.forEach(($e, ce) => {
          var _a2;
          const ie = $e > 0 ? 1 / $e : 0, oe = $e * 2 * Math.PI, _ = ((_a2 = M.massParticipation) == null ? void 0 : _a2[ce]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let G = 0; G < 6; G++) T[G] += _[G];
          const D = _.map((G) => ((G * 100).toFixed(1) + "%").padStart(6)).join(" ");
          W.push(`${String(ce + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${ie.toFixed(4).padStart(9)}  ${oe.toFixed(2).padStart(9)}  ${D}  ${(T[0] * 100).toFixed(1).padStart(5)}%  ${(T[1] * 100).toFixed(1).padStart(5)}%  ${(T[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(W.join(`
`));
        const X = e.querySelector("#modal-copy");
        X.textContent = "\u2713", setTimeout(() => X.textContent = "\u{1F4CB}", 1500);
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
    const { nodes: g, elements: P, elementInputs: M, nodeInputs: U, deformOutputs: B } = e, Q = g.length * 6, V = P.length, H = P.filter((ie) => ie.length === 2).length, W = P.filter((ie) => ie.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let T = "";
    T += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', T += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", T += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', T += '<hr class="rpt-sep"/>', T += "<h2>1. Input Data</h2>", T += '<table class="rpt-info"><tbody>', T += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, T += `<tr><td>Number of elements</td><td class="val">${V} (${H} frames, ${W} shells)</td></tr>`, T += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', T += `<tr><td>Total DOFs</td><td class="val">${Q}</td></tr>`, T += "</tbody></table>", T += "<h3>1.1 Node Coordinates</h3>", T += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((ie, oe) => {
      T += `<tr><td>${oe}</td><td>${it(ie[0])}</td><td>${it(ie[1])}</td><td>${it(ie[2])}</td></tr>`;
    }), T += "</tbody></table>", T += "<h3>1.2 Element Connectivity</h3>", T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', P.forEach((ie, oe) => {
      var _a2, _b2, _c2, _d2;
      const _ = ie.length === 2, D = ie.map((ye) => g[ye]), G = _ ? Po(vo(D[1], D[0])) : 0, ue = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(oe)) ?? 0, Me = ((_b2 = M.areas) == null ? void 0 : _b2.get(oe)) ?? 0, ze = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(oe)) ?? 0, Xe = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(oe)) ?? 0;
      T += `<tr><td>${oe}</td><td>${_ ? "Frame" : "Shell"}</td><td>${ie.join(" \u2192 ")}</td>`, T += `<td>${it(G)}</td><td>${it(ue)}</td><td>${it(Me)}</td><td>${it(ze)}</td><td>${it(Xe)}</td></tr>`;
    }), T += "</tbody></table>", T += "<h2>2. Element Formulation</h2>", H > 0 && (T += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", T += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", T += "<h4>2.1.1 Shape Functions</h4>", T += "<p><b>Axial</b> (linear interpolation):</p>", T += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', T += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', T += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', T += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', T += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', T += "</tbody></table>", T += gl(), T += "<p><b>Torsion</b> (linear): same as axial.</p>", T += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", T += "<p>The B matrix relates nodal displacements to internal strains:</p>", T += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', T += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', T += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', T += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', T += "<h4>2.1.3 Constitutive Relations D</h4>", T += '<table class="rpt-eq-table"><tbody>', T += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', T += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', T += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', T += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', T += "</tbody></table>", T += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", T += "<p>Obtained by analytical integration:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', T += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", T += '<div class="rpt-eq-small">', T += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", T += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", T += "</div>", T += "<h4>2.1.5 Transformation Matrix T</h4>", T += "<p>Direction cosines of element axis:</p>", T += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', T += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', T += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', T += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", T += "<h4>2.1.6 Global Stiffness Matrix</h4>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), T += "<h2>3. Numerical Results per Element</h2>", T += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ie = 0; ie < V; ie++) {
      const oe = P[ie], _ = oe.map((dt) => g[dt]);
      if (!(oe.length === 2)) continue;
      const G = Po(vo(_[1], _[0])), ue = ((_a = M.elasticities) == null ? void 0 : _a.get(ie)) ?? 0, Me = ((_b = M.areas) == null ? void 0 : _b.get(ie)) ?? 0, ze = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(ie)) ?? 0, Xe = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(ie)) ?? 0, ye = ((_e = M.shearModuli) == null ? void 0 : _e.get(ie)) ?? 0, je = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(ie)) ?? 0;
      let We = null, be = null, ke = null;
      try {
        We = vn(_, M, ie), be = yn(_), ke = ao(ns(be), ao(We, be));
      } catch {
        continue;
      }
      const Ae = vo(_[1], _[0]), Ue = Ae[0] / G, ct = Ae[1] / G, Ke = Ae[2] / G;
      T += '<div class="rpt-elem-block">', T += `<h3 class="rpt-elem-title" data-toggle="elem${ie}">\u25B6 Element ${ie} \u2014 Nodes ${oe[0]} \u2192 ${oe[1]}, L = ${it(G)}</h3>`, T += `<div id="rpt-elem${ie}" class="rpt-elem-body" style="display:none">`, T += "<h4>Properties (numerical substitution)</h4>", T += '<div class="rpt-eq-small">', T += `E = ${it(ue)} &nbsp;&nbsp; A = ${it(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${it(ze)} &nbsp;&nbsp; I<sub>y</sub> = ${it(Xe)} &nbsp;&nbsp; G = ${it(ye)} &nbsp;&nbsp; J = ${it(je)}<br/>`, T += `EA/L = ${it(ue)}\xB7${it(Me)}/${it(G)} = <b>${it(ue * Me / G)}</b><br/>`, T += `12EI<sub>z</sub>/L\xB3 = 12\xB7${it(ue)}\xB7${it(ze)}/${it(G)}\xB3 = <b>${it(12 * ue * ze / G ** 3)}</b><br/>`, T += `12EI<sub>y</sub>/L\xB3 = 12\xB7${it(ue)}\xB7${it(Xe)}/${it(G)}\xB3 = <b>${it(12 * ue * Xe / G ** 3)}</b><br/>`, T += `GJ/L = ${it(ye)}\xB7${it(je)}/${it(G)} = <b>${it(ye * je / G)}</b>`, T += "</div>", T += "<h4>Direction cosines</h4>", T += `<div class="rpt-eq-small">l = ${gn(Ue)}, m = ${gn(ct)}, n = ${gn(Ke)}, D = ${gn(Math.sqrt(Ue ** 2 + ct ** 2))}</div>`, T += "<h4>K<sub>local</sub> (12\xD712)</h4>", T += Kn(We, 12), T += "<h4>T \u2014 Transformation (12\xD712)</h4>", T += Kn(be, 12), T += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", T += Kn(ke, 12), T += "<h4>Assembly</h4>", T += `<div class="rpt-eq-small">Global DOFs: node ${oe[0]} \u2192 [${oe[0] * 6}..${oe[0] * 6 + 5}], node ${oe[1]} \u2192 [${oe[1] * 6}..${oe[1] * 6 + 5}]</div>`, T += "</div></div>";
    }
    T += "<h2>4. Global Assembly</h2>", T += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, T += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", T += hl(P, g.length), T += "<h2>5. Boundary Conditions</h2>";
    const X = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (T += "<h3>5.1 Supports (fixed DOFs)</h3>", U.supports && U.supports.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of X) T += `<th>${ie}</th>`;
      T += "</tr></thead><tbody>", U.supports.forEach((ie, oe) => {
        T += `<tr><td>${oe}</td>`, ie.forEach((_, D) => {
          _ && $e.push(oe * 6 + D), T += `<td class="${_ ? "fixed" : ""}">${_ ? "Fixed" : "Free"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, T += `Free DOFs: ${Q} \u2212 ${$e.length} = <b>${Q - $e.length}</b></div>`, T += "<h3>5.2 Applied Loads</h3>", U.loads && U.loads.size > 0) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ie = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const oe of ie) T += `<th>${oe}</th>`;
      T += "</tr></thead><tbody>", U.loads.forEach((oe, _) => {
        T += `<tr><td>${_}</td>`, oe.forEach((D) => {
          const G = Math.abs(D) > 1e-10;
          T += `<td class="${G ? "nz" : ""}">${G ? it(D) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>6. Solution</h2>", T += "<p>After removing fixed DOFs, the reduced system is:</p>", T += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', T += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", T += "<h3>6.1 Nodal Displacements</h3>", B == null ? void 0 : B.deformations) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of X) T += `<th>${ie}</th>`;
      T += "</tr></thead><tbody>", B.deformations.forEach((ie, oe) => {
        T += `<tr><td>${oe}</td>`, ie.forEach((_) => {
          const D = Math.abs(_) > 1e-10;
          T += `<td class="${D ? "nz" : ""}">${it(_, 6)}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h3>6.2 Reactions</h3>", T += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', B == null ? void 0 : B.reactions) {
      T += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of X) T += `<th>${ie}</th>`;
      T += "</tr></thead><tbody>", B.reactions.forEach((ie, oe) => {
        T += `<tr><td>${oe}</td>`, ie.forEach((_) => {
          const D = Math.abs(_) > 1e-10;
          T += `<td class="${D ? "nz-react" : ""}">${D ? it(_, 4) : "0"}</td>`;
        }), T += "</tr>";
      }), T += "</tbody></table>";
    }
    if (T += "<h2>7. Internal Forces</h2>", T += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", T += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', T += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', B == null ? void 0 : B.deformations) {
      const ie = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      T += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const oe of ie) T += `<th>${oe}<sub>i</sub></th>`;
      for (const oe of ie) T += `<th>${oe}<sub>j</sub></th>`;
      T += "</tr></thead><tbody>";
      for (let oe = 0; oe < V; oe++) {
        const _ = P[oe];
        if (_.length !== 2) continue;
        const D = _.map((G) => g[G]);
        try {
          const G = vn(D, M, oe), ue = yn(D), Me = [];
          for (const ye of _) {
            const je = ((_g = B.deformations) == null ? void 0 : _g.get(ye)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Me.push(...je);
          }
          const ze = ao(ue, Me), Xe = ao(G, ze);
          T += `<tr><td>${oe}</td><td>${_.join("\u2192")}</td>`;
          for (let ye = 0; ye < 12; ye++) {
            const je = Math.abs(Xe[ye]) > 1e-10;
            T += `<td class="${je ? "nz" : ""}">${it(Xe[ye], 2)}</td>`;
          }
          T += "</tr>";
        } catch {
        }
      }
      T += "</tbody></table>";
    }
    const ce = `
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
    return he.innerHTML = ce + T, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((ie) => {
      ie.addEventListener("click", () => {
        const oe = ie.dataset.toggle, _ = he.querySelector(`#rpt-${oe}`);
        if (_) {
          const D = _.style.display !== "none";
          _.style.display = D ? "none" : "", ie.textContent = ie.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function it(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function gn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Kn(e, g) {
    var _a;
    const P = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let U = 0; U < P; U++) {
      M += "<tr>";
      for (let B = 0; B < P; B++) {
        const Q = ((_a = e[U]) == null ? void 0 : _a[B]) ?? 0, V = Math.abs(Q) < 1e-10;
        M += `<td class="${V ? "z" : ""} ${U === B && !V ? "diag" : ""}">${V ? "0" : bl(Q)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > P && (M += `<div style="color:#888;font-size:9pt">(showing ${P}\xD7${P} of ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function bl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function gl() {
    const Q = [
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
    let V = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    V += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, V += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', V += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, V += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, V += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const H of Q) {
      let W = "";
      for (let $e = 0; $e <= 80; $e++) {
        const ce = $e / 80, ie = 30 + ce * 540, oe = 180 / 2 - H.fn(ce) * 60;
        W += ($e === 0 ? "M" : "L") + `${ie.toFixed(1)},${oe.toFixed(1)}`;
      }
      V += `<path d="${W}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const he = 0.75, T = 30 + he * 540 + 8, X = 180 / 2 - H.fn(he) * 60 - 6;
      V += `<text x="${T}" y="${X}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function hl(e, g) {
    const P = g * 6, M = Math.min(P, 30);
    let U = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    U += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', U += "<tr><td></td>";
    for (let Q = 0; Q < M; Q++) U += `<td style="color:#003366;font-weight:bold;font-size:7px">${Q}</td>`;
    U += "</tr>";
    const B = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let Q = 0; Q < e.length; Q++) {
      const V = e[Q].map((H) => H * 6);
      for (const H of V) for (const W of V) for (let he = 0; he < 6; he++) for (let T = 0; T < 6; T++) {
        const X = H + he, $e = W + T;
        X < M && $e < M && B[X][$e]++;
      }
    }
    for (let Q = 0; Q < M; Q++) {
      U += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Q}</td>`;
      for (let V = 0; V < M; V++) {
        const H = B[Q][V], W = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", he = H === 0 ? "" : H.toString();
        U += `<td style="background:${W};color:#003366">${he}</td>`;
      }
      U += "</tr>";
    }
    return U += "</table></div>", P > M && (U += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${P}\xD7${P})</div>`), U;
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
  function vl(e, g, P, M, U, B) {
    var _a, _b, _c, _d, _e, _f;
    const Q = P[e], V = Q.map((be) => g[be]), H = Q.length === 2, W = H ? Po(vo(V[1], V[0])) : 0, he = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, T = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, X = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ce = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ie = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let oe = null, _ = null, D = null;
    try {
      oe = vn(V, M, e), _ = yn(V), D = ao(ns(_), ao(oe, _));
    } catch {
    }
    const G = H ? vo(V[1], V[0]) : [
      0,
      0,
      0
    ], ue = W > 0 ? G[0] / W : 0, Me = W > 0 ? G[1] / W : 0, ze = W > 0 ? G[2] / W : 0, Xe = Math.sqrt(ue ** 2 + Me ** 2), ye = [];
    if ((U == null ? void 0 : U.deformations) && H) for (const be of Q) {
      const ke = U.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ye.push(...ke);
    }
    let je = [], We = [];
    if (ye.length === 12 && _ && oe) {
      try {
        je = ao(_, ye);
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
      elem: Q,
      elmNodes: V,
      isFrame: H,
      L: W,
      E: he,
      A: T,
      Iz: X,
      Iy: $e,
      G: ce,
      J: ie,
      kLocal: oe,
      T: _,
      kGlobal: D,
      l: ue,
      m: Me,
      n: ze,
      D: Xe,
      uGlobal: ye,
      uLocal: je,
      fLocal: We,
      dOut: U,
      aOut: B,
      totalNodes: g.length
    };
  }
  function yl(e, g, P, M, U, B) {
    var _a, _b;
    const Q = vl(e, g, P, M, U, B), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = El + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Q.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Q.elem.join(" \u2192 ")} \u2014 L = ${Ve(Q.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${$l(Q)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ra(Q)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ml(Q)}</div>
  `, V.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), H.classList.add("active");
        const W = H.dataset.tab;
        V.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), V.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = V.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = V.classList.toggle("er-fullscreen-mode"), W = V.querySelector("#er-fullscreen");
      W && (W.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = V.querySelector("#er-sf-canvas");
      H && Qn(H);
      const W = V.querySelector("#er-sf-canvas-math");
      W && Qn(W);
    }, 50), xl(() => {
      const H = V.querySelector("#er-body-math");
      H && (H.innerHTML = ra(Q)), setTimeout(() => {
        const W = V.querySelector("#er-sf-canvas-math");
        W && Qn(W);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const he = W.dataset.toggle, T = V.querySelector(`#er-${he}`);
          T && (T.style.display = T.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function $l(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Ve(e.E)}</td><td>A</td><td>${Ve(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Ve(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ve(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Ve(e.G)}</td><td>J</td><td>${Ve(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += an(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += an(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += an(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
        for (let U = 0; U < 6; U++) {
          const B = e.uGlobal[M * 6 + U];
          g += `${P[U]}=<span class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Ve(B, 6)}</span> `;
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
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function ra(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const P = (he) => la(he), M = (he) => la(he, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${P("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => Ve(he)).join(", ")})<br/>`, g += `${P("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => Ve(he)).join(", ")})<br/>`, g += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ve(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${P("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${P("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${P("I_z")})</div>`, g += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${P("I_y")})</div>`, g += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ve(e.E)} \\times ${Ve(e.A)} = \\mathbf{${Ve(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ve(e.E)} \\times ${Ve(e.Iz)} = \\mathbf{${Ve(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ve(e.E)} \\times ${Ve(e.Iy)} = \\mathbf{${Ve(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ve(e.G)} \\times ${Ve(e.J)} = \\mathbf{${Ve(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${P("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const U = e.E * e.A / e.L, B = e.E * e.Iz / e.L ** 3, Q = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${P("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ve(e.E)}\\times${Ve(e.A)}}{${Ve(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ve(U)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${P("v(\\xi)")}</p>`, g += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${P("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${P("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ve(e.E)} \\times ${Ve(e.Iz)}}{${Ve(e.L)}^3} = \\mathbf{${Ve(12 * B)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${P("\\theta_x")} y ${P("GJ")}:</p>`, g += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ve(e.G)}\\times${Ve(e.J)}}{${Ve(e.L)}} = \\mathbf{${Ve(V)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${P("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Ve(U)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ve(12 * B)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ve(12 * Q)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Ve(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ve(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ve(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${P("\\mathbf{K}_{local}")} (12x12)</div>`, g += an(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${hn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${hn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${hn(e.n)}`)}</div>`, g += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${hn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
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
      for (let T = 0; T < 6; T++) g += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[T], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let T = 6; T < 12; T++) g += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[T], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ml(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Ve(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Ve(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Ve(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
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
        for (let U = 0; U < 6; U++) {
          const B = e.uGlobal[M * 6 + U];
          g += `<td class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${Ve(B, 6)}</td>`;
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
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ve(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function hn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function an(e) {
    var _a;
    const g = e.length, P = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let U = 0; U < P; U++) {
      M += "<tr>";
      for (let B = 0; B < P; B++) {
        const Q = ((_a = e[U]) == null ? void 0 : _a[B]) ?? 0, V = Math.abs(Q) < 1e-10;
        M += `<td class="${V ? "z" : ""} ${U === B && !V ? "diag" : ""}">${V ? "0" : wl(Q)}</td>`;
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
    const P = e.width, M = e.height, U = 30, B = P - 2 * U, Q = (M - 3 * U) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, P, M);
    const V = (H, W, he) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(U, H, B, Q), g.strokeStyle = "#444", g.beginPath(), g.moveTo(U, H + Q / 2), g.lineTo(U + B, H + Q / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(W, U + 4, H + 14);
      for (const X of he) {
        g.strokeStyle = X.color, g.lineWidth = 2.5, g.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const ce = $e / 100, ie = U + ce * B, oe = H + Q / 2 - X.fn(ce) * (Q / 2 * 0.85);
          $e === 0 ? g.moveTo(ie, oe) : g.lineTo(ie, oe);
        }
        g.stroke();
      }
      let T = U + B - 90;
      for (const X of he) g.fillStyle = X.color, g.font = "bold 10px sans-serif", g.fillText(X.label, T, H + Q - 6), T += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", U, H + Q + 12), g.fillText("1", U + B - 6, H + Q + 12), g.fillText("\u03BE", U + B / 2, H + Q + 12);
    };
    V(U, "Axial (lineal)", [
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
    ]), V(U + Q + U, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  let Mn = false, Oo = null, ro = null, Bt = null, Ct = null;
  function Sl() {
    Ct = document.createElement("button"), Ct.id = "help-tour-btn", Ct.innerHTML = "?", Ct.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const g = (M) => {
      Ct.style.cssText = M ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    g(false), Ct.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, g(e), Ct.innerHTML = "?";
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
    Mn = false, Ct && (Ct.innerHTML = "?", Ct.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Ct.style.animation = "helpPulse 2s infinite"), ro && (ro.remove(), ro = null), Bt && (Bt.remove(), Bt = null), Oo && (Oo.remove(), Oo = null);
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
    }), ro && ro.remove(), Bt && Bt.remove();
    const M = P.getBoundingClientRect(), U = window.innerWidth, B = window.innerHeight, Q = 320, V = 180;
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
    const H = U - M.right, W = M.left, he = B - M.bottom, T = M.top;
    let X = g.position || "bottom";
    X === "bottom" && he < V + 20 && (X = "top"), X === "top" && T < V + 20 && (X = "right"), X === "right" && H < Q + 20 && (X = "left"), X === "left" && W < Q + 20 && (X = "bottom");
    let $e, ce, ie = "";
    switch (X) {
      case "bottom":
        $e = M.left + M.width / 2 - Q / 2, ce = M.bottom + 14, ie = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = M.left + M.width / 2 - Q / 2, ce = M.top - V - 14, ie = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = M.right + 14, ce = M.top + M.height / 2 - V / 2, ie = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = M.left - Q - 14, ce = M.top + M.height / 2 - V / 2, ie = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, U - Q - 10)), ce = Math.max(10, Math.min(ce, B - V - 10)), Bt = document.createElement("div"), Bt.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${ce}px;
    width: ${Q}px;
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
    <div style="${ie}"></div>
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
    ro && (ro.remove(), ro = null), Bt && (Bt.remove(), Bt = null), Bt = document.createElement("div"), Bt.style.cssText = `
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
    }, M = [], U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), V = [], H = [], W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = [], X = [];
    let $e = "", ce = "";
    const ie = /* @__PURE__ */ new Map();
    for (const Re of g) {
      const De = Re.trim();
      if (!De || De.startsWith("$")) {
        De.startsWith("$ ") && (ce = De.substring(2).trim());
        continue;
      }
      if (ce && (ie.has(ce) || ie.set(ce, []), ie.get(ce).push(Re)), ce === "CONTROLS") {
        const xe = De.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (P.force = xe[1], P.length = xe[2]);
        const Le = De.match(/TITLE2\s+"([^"]+)"/);
        Le && ($e = Le[1]);
      }
      if (ce === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = De.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Le = xe[1], ve = xe[2] ? parseFloat(xe[2]) : 0, Te = xe[3] ? parseFloat(xe[3]) : void 0;
          M.push({
            name: Le,
            height: ve,
            elev: Te ?? 0
          });
        }
      }
      if (ce === "MATERIAL PROPERTIES") {
        const xe = De.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Le = xe[1];
          U.has(Le) || U.set(Le, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ve = U.get(Le);
          xe[2] && (ve.type = xe[2]);
          const Te = De.match(/\bE\s+([\d.eE+-]+)/);
          Te && (ve.E = parseFloat(Te[1]));
          const Je = De.match(/\bU\s+([\d.eE+-]+)/);
          Je && (ve.nu = parseFloat(Je[1]), ve.G = ve.E / (2 * (1 + ve.nu)));
          const Be = De.match(/\bFY\s+([\d.eE+-]+)/);
          Be && (ve.fy = parseFloat(Be[1]));
          const ft = De.match(/\bFC\s+([\d.eE+-]+)/);
          ft && (ve.fc = parseFloat(ft[1]));
          const ht = De.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          ht && (ve.density = parseFloat(ht[1]));
        }
      }
      if (ce === "FRAME SECTIONS") {
        const xe = De.match(/FRAMESECTION\s+"([^"]+)"/);
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
          const ve = B.get(Le), Te = De.match(/MATERIAL\s+"([^"]+)"/);
          Te && (ve.material = Te[1]);
          const Je = De.match(/SHAPE\s+"([^"]+)"/);
          Je && (ve.shape = Je[1]);
          const Be = De.match(/\bD\s+([\d.eE+-]+)/);
          Be && (ve.D = parseFloat(Be[1]));
          const ft = De.match(/\bB\s+([\d.eE+-]+)/);
          ft && (ve.B = parseFloat(ft[1]));
          const ht = De.match(/\bTF\s+([\d.eE+-]+)/);
          ht && (ve.TF = parseFloat(ht[1]));
          const Ye = De.match(/\bTW\s+([\d.eE+-]+)/);
          Ye && (ve.TW = parseFloat(Ye[1]));
          const Ze = De.match(/\bR\s+([\d.eE+-]+)/);
          Ze && (ve.R = parseFloat(Ze[1]));
          const mt = De.match(/FILLMATERIAL\s+"([^"]+)"/);
          mt && (ve.fillMaterial = mt[1]);
          const pt = De.match(/I2MOD\s+([\d.eE+-]+)/);
          pt && (ve.modI2 = parseFloat(pt[1]));
          const xt = De.match(/I3MOD\s+([\d.eE+-]+)/);
          xt && (ve.modI3 = parseFloat(xt[1]));
        }
      }
      if (ce === "POINT COORDINATES") {
        const xe = De.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && Q.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (ce === "LINE CONNECTIVITIES") {
        const xe = De.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && V.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (ce === "POINT ASSIGNS") {
        const xe = De.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && W.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (ce === "LINE ASSIGNS") {
        const xe = De.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Le = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ve = De.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ve && (Le.rigidZone = parseFloat(ve[1]));
          const Te = De.match(/RELEASE\s+"([^"]+)"/);
          Te && (Le.releases = Te[1].split(/\s+/));
          const Je = De.match(/ANG\s+([-\d.eE+]+)/);
          Je && (Le.angle = parseFloat(Je[1])), he.set(`${xe[1]}@${xe[2]}`, Le);
        }
      }
      if (ce === "GRIDS") {
        const xe = De.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && X.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (ce === "FRAME OBJECT LOADS") {
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
      if (ce === "AREA CONNECTIVITIES") {
        const xe = De.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
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
      for (let De = Re - 1; De >= 0; De--) {
        const Le = oe.get(M[De + 1].name) + M[De].height;
        M[De].elev = Le, oe.set(M[De].name, Le);
      }
    }
    const _ = [], D = [], G = /* @__PURE__ */ new Map(), ue = (Re, De) => `${Re}@${De}`, Me = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
    for (const Re of V) ze.set(Re.name, Re);
    for (const Re of V) for (const [De, xe] of he) {
      if (!De.startsWith(Re.name + "@")) continue;
      const Le = xe.story, ve = M.findIndex((Te) => Te.name === Le);
      if (!(ve < 0)) if (Re.type === "COLUMN" || Re.type === "BRACE") {
        Me.add(ue(Re.pt2, Le));
        const Te = Math.max(Re.nStories, 1), Je = Math.min(ve + Te, M.length - 1);
        Me.add(ue(Re.pt1, M[Je].name));
      } else Me.add(ue(Re.pt1, Le)), Me.add(ue(Re.pt2, Le));
    }
    for (const [Re] of W) Me.add(Re);
    for (const Re of Me) {
      const [De, xe] = Re.split("@"), Le = Q.get(De), ve = oe.get(xe);
      Le === void 0 || ve === void 0 || (_.push([
        Le[0],
        Le[1],
        ve
      ]), D.push(Re), G.set(Re, _.length - 1));
    }
    const Xe = [], ye = [], je = [], We = [], be = /* @__PURE__ */ new Map();
    for (const Re of V) for (const [De, xe] of he) {
      if (!De.startsWith(Re.name + "@")) continue;
      const Le = xe.story, ve = M.findIndex((Ye) => Ye.name === Le);
      if (ve < 0) continue;
      let Te, Je;
      if (Re.type === "COLUMN" || Re.type === "BRACE") {
        const Ye = Math.max(Re.nStories, 1), Ze = Math.min(ve + Ye, M.length - 1);
        Te = ue(Re.pt1, M[Ze].name), Je = ue(Re.pt2, Le);
      } else Te = ue(Re.pt1, Le), Je = ue(Re.pt2, Le);
      const Be = G.get(Te), ft = G.get(Je);
      if (Be === void 0 || ft === void 0 || Be === ft) continue;
      const ht = Xe.length;
      if (Xe.push([
        Be,
        ft
      ]), ye.push(Re.name), je.push(Re.type), We.push(Le), be.set(ht, xe.section), xe.rigidZone > 0 && dt.set(ht, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
        const Ye = new Array(12).fill(false), Ze = {
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
          const pt = Ze[mt];
          pt !== void 0 && (Ye[pt] = true);
        }
        ut.set(ht, Ye);
      }
    }
    const ke = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map();
    for (const [Re, De] of be) {
      const xe = B.get(De);
      if (!xe) continue;
      const Le = U.get(xe.material);
      Le && (ke.set(Re, Le.E), Ae.set(Re, Le.G));
      const ve = xe.D, Te = xe.B, Je = xe.TF, Be = xe.TW;
      let ft = 0, ht = 0, Ye = 0, Ze = 0, mt = 0, pt = 0, xt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ft = ve * Te, ht = Te * ve ** 3 / 12, Ye = ve * Te ** 3 / 12, Ze = Te * ve ** 3 * (1 / 3 - 0.21 * (ve / Te) * (1 - ve ** 4 / (12 * Te ** 4))), mt = pt = 5 / 6 * ft, xt = "rect";
          break;
        case "Concrete Circle":
          ft = Math.PI * ve ** 2 / 4, ht = Ye = Math.PI * ve ** 4 / 64, Ze = Math.PI * ve ** 4 / 32, mt = pt = 0.9 * ft, xt = "circ";
          break;
        case "Steel I/Wide Flange":
          ft = 2 * Te * Je + (ve - 2 * Je) * Be, ht = (Te * ve ** 3 - (Te - Be) * (ve - 2 * Je) ** 3) / 12, Ye = (2 * Je * Te ** 3 + (ve - 2 * Je) * Be ** 3) / 12, Ze = (2 * Te * Je ** 3 + (ve - 2 * Je) * Be ** 3) / 3, mt = (ve - 2 * Je) * Be, pt = 2 * Te * Je * 5 / 6, xt = "I";
          break;
        case "Steel Tube":
          ft = ve * Te - (ve - 2 * Be) * (Te - 2 * Be), ht = (Te * ve ** 3 - (Te - 2 * Be) * (ve - 2 * Be) ** 3) / 12, Ye = (ve * Te ** 3 - (ve - 2 * Be) * (Te - 2 * Be) ** 3) / 12, Ze = 2 * Be * (ve - Be) * (Te - Be) * ((ve - Be) * (Te - Be)) / (ve - Be + (Te - Be)), mt = 2 * ve * Be, pt = 2 * Te * Be, xt = "HSS";
          break;
        case "Filled Steel Tube":
          ft = ve * Te, ht = Te * ve ** 3 / 12, Ye = ve * Te ** 3 / 12, Ze = 2 * Be * (ve - Be) * (Te - Be) * ((ve - Be) * (Te - Be)) / (ve - Be + (Te - Be)), mt = 2 * ve * Be + 5 / 6 * (ve - 2 * Be) * (Te - 2 * Be), pt = 2 * Te * Be + 5 / 6 * (ve - 2 * Be) * (Te - 2 * Be), xt = "CFT";
          break;
        case "Steel Angle": {
          const Ht = Je || Be;
          ft = Ht * (ve + Te - Ht), ht = Ht * (ve ** 3 + Te * Ht ** 2 + Ht ** 2 * (ve - Ht)) / 12, Ye = Ht * (Te ** 3 + ve * Ht ** 2 + Ht ** 2 * (Te - Ht)) / 12, Ze = (ve + Te - Ht) * Ht ** 3 / 3, mt = ve * Ht, pt = Te * Ht, xt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ft = 2 * Te * Je + (ve - 2 * Je) * Be, ht = (Be * ve ** 3 + 2 * Te * Je * (ve - Je) ** 2) / 12, Ye = (2 * Je * Te ** 3 + (ve - 2 * Je) * Be ** 3) / 12, Ze = (2 * Te * Je ** 3 + (ve - 2 * Je) * Be ** 3) / 3, mt = (ve - 2 * Je) * Be, pt = 2 * Te * Je * 5 / 6, xt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ft = 2 * (2 * Te * Je + (ve - 2 * Je) * Be), ht = 2 * (Be * ve ** 3 + 2 * Te * Je * (ve - Je) ** 2) / 12, Ye = 2 * (2 * Je * Te ** 3 + (ve - 2 * Je) * Be ** 3) / 12, Ze = 2 * (2 * Te * Je ** 3 + (ve - 2 * Je) * Be ** 3) / 3, mt = 2 * (ve - 2 * Je) * Be, pt = 4 * Te * Je * 5 / 6, xt = "2C";
          break;
        default:
          ve > 0 && Te > 0 && (ft = ve * Te, ht = Te * ve ** 3 / 12, Ye = ve * Te ** 3 / 12, Ze = Math.min(ve, Te) * Math.max(ve, Te) ** 3 / 3 * 0.3, mt = pt = 5 / 6 * ft);
          break;
      }
      xe.modI2 && (Ye *= xe.modI2), xe.modI3 && (ht *= xe.modI3), Ue.set(Re, ft), St.set(Re, ht), Ft.set(Re, Ye), Ot.set(Re, Ze), mt > 0 && ct.set(Re, mt), pt > 0 && Ke.set(Re, pt), yt.set(Re, {
        type: xt,
        b: Te || void 0,
        h: ve || void 0,
        d: xt === "circ" || xt === "pipe" ? ve : void 0,
        tw: Be || void 0,
        tf: Je || void 0,
        r: xe.R,
        name: De
      });
    }
    const gt = /* @__PURE__ */ new Map();
    for (const [Re, De] of W) {
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
      for (const ve of De) ve === "UX" && (Le[0] = true), ve === "UY" && (Le[1] = true), ve === "UZ" && (Le[2] = true), ve === "RX" && (Le[3] = true), ve === "RY" && (Le[4] = true), ve === "RZ" && (Le[5] = true);
      gt.set(xe, Le);
    }
    const io = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
    for (let Re = 0; Re < ye.length; Re++) _e.set(`${ye[Re]}@${We[Re]}`, Re);
    for (const Re of T) {
      const De = _e.get(`${Re.line}@${Re.story}`);
      if (De === void 0) continue;
      const [xe, Le] = Xe[De], ve = _[xe], Te = _[Le], Je = Math.sqrt((Te[0] - ve[0]) ** 2 + (Te[1] - ve[1]) ** 2 + (Te[2] - ve[2]) ** 2);
      if (Je < 1e-10) continue;
      const Be = Re.val * Je / 2;
      let ft = 0, ht = 0, Ye = 0;
      Re.dir === "GRAV" || Re.dir === "GRAVITY" ? Ye = -Be : Re.dir === "X" ? ft = Be : Re.dir === "Y" ? ht = Be : Re.dir === "Z" && (Ye = -Be);
      for (const Ze of [
        xe,
        Le
      ]) {
        const mt = io.get(Ze) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        mt[0] += ft, mt[1] += ht, mt[2] += Ye, io.set(Ze, mt);
      }
    }
    const Mt = /* @__PURE__ */ new Map();
    for (const [Re, De] of be) {
      const xe = B.get(De);
      if (!xe) continue;
      const Le = U.get(xe.material);
      (Le == null ? void 0 : Le.density) && Mt.set(Re, Le.density);
    }
    return {
      units: P,
      stories: M.reverse(),
      materials: U,
      frameSections: B,
      nodes: _,
      nodeNames: D,
      nodeNameToIdx: G,
      elements: Xe,
      elementNames: ye,
      elementTypes: je,
      elementStories: We,
      elementSections: be,
      nodeInputs: {
        supports: gt,
        loads: io
      },
      elementInputs: {
        elasticities: ke,
        shearModuli: Ae,
        areas: Ue,
        momentsOfInertiaZ: St,
        momentsOfInertiaY: Ft,
        torsionalConstants: Ot,
        shearAreasY: ct,
        shearAreasZ: Ke,
        rigidOffsets: dt,
        momentReleases: ut,
        densities: Mt,
        sectionShapes: yt
      },
      sectionShapes: yt,
      grids: X,
      info: {
        nNodes: _.length,
        nFrames: Xe.length,
        nAreas: H.length,
        title: $e
      },
      rawSections: ie
    };
  }
  function at(e) {
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
    let U = "UX,UY,UZ,RX,RY,RZ";
    const B = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = [], he = [], T = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), ce = [];
    let ie = "";
    for (const oe of g) {
      const _ = oe.trim();
      if (!_ || _.startsWith(";") || _.startsWith("File ")) continue;
      if (_.startsWith("TABLE:")) {
        const G = _.match(/TABLE:\s+"(.+?)"/);
        ie = G ? G[1].toUpperCase() : "";
        continue;
      }
      if (_ === "END TABLE DATA") {
        ie = "";
        continue;
      }
      const D = pa(_);
      switch (ie) {
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
            ue.E = at(D.get("E1")), ue.G = at(D.get("G12")), ue.nu = at(D.get("U12")), ue.density = at(D.get("UnitMass")), B.set(G, ue);
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
          G && Q.set(G, {
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
          G && V.set(G, {
            material: D.get("Material") || "",
            type: D.get("Type") || "Shell",
            thickness: at(D.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const G = D.get("Joint");
          if (G) {
            const ue = at(D.get("XorR")), Me = at(D.get("Y")), ze = at(D.get("Z"));
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
              const Xe = D.get(`Joint${ze}`);
              Xe && Me.push(Xe);
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
          G && ue && X.set(G, ue);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const G = D.get("Area"), ue = D.get("Section");
          G && ue && $e.set(G, ue);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const G = D.get("Joint");
          G && ce.push({
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
    return fa(M, U, B, Q, V, H, W, he, T, X, $e, ce);
  }
  function Ll(e) {
    const g = {
      force: "KN",
      length: "m"
    };
    let P = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), V = [], H = [], W = /* @__PURE__ */ new Map(), he = [];
    let T = "", X = "";
    for (const ie of e) {
      const oe = ie.trim();
      if (!oe || oe.startsWith(";")) continue;
      if (!ie.startsWith(" ") && !ie.startsWith("	")) {
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
          Q.set(G, [
            at(_.get("X")),
            at(_.get("Y")),
            at(_.get("Z"))
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
            for (const Xe of Me) {
              const ye = Xe.toUpperCase();
              (ye === "UX" || ye === "U1") && (ze[0] = true), (ye === "UY" || ye === "U2") && (ze[1] = true), (ye === "UZ" || ye === "U3") && (ze[2] = true), (ye === "RX" || ye === "R1") && (ze[3] = true), (ye === "RY" || ye === "R2") && (ze[4] = true), (ye === "RZ" || ye === "R3") && (ze[5] = true);
            }
            W.set(G, ze);
          }
          break;
        }
        case "MATERIAL": {
          const G = _.get("NAME");
          if (G) X = G, M.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (X) {
            const ue = M.get(X), Me = _.get("E");
            Me && (ue.E = at(Me));
            const ze = _.get("U");
            ze && (ue.nu = at(ze)), ue.G = ue.E / (2 * (1 + ue.nu));
            const Xe = _.get("M");
            Xe && (ue.density = at(Xe));
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
            thickness: at(_.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const G = D[0], ue = _.get("J");
          if (ue) {
            const Me = ue.split(",");
            Me.length >= 2 && V.push({
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
            fx: at(_.get("UX")),
            fy: at(_.get("UY")),
            fz: at(_.get("UZ")),
            mx: at(_.get("MX")),
            my: at(_.get("MY")),
            mz: at(_.get("MZ"))
          });
          break;
        }
      }
    }
    return fa(g, P, M, U, B, Q, V, H, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), he);
  }
  function fa(e, g, P, M, U, B, Q, V, H, W, he, T) {
    var _a;
    const X = [], $e = /* @__PURE__ */ new Map(), ce = [];
    for (const [ye, je] of B) $e.set(ye, ce.length), X.push(ye), ce.push(je);
    const ie = [], oe = [], _ = /* @__PURE__ */ new Map();
    for (const ye of Q) {
      const je = $e.get(ye.j1), We = $e.get(ye.j2);
      if (je !== void 0 && We !== void 0) {
        const be = ie.length;
        ie.push([
          je,
          We
        ]), oe.push(ye.name);
        const ke = W.get(ye.name);
        ke && _.set(be, ke);
      }
    }
    const D = ie.length;
    for (const ye of V) {
      const je = ye.joints.map((We) => $e.get(We)).filter((We) => We !== void 0);
      if (je.length >= 3) {
        const We = ie.length;
        ie.push(je), oe.push(ye.name);
        const be = he.get(ye.name);
        be && _.set(We, be);
      }
    }
    const G = ie.length - D, ue = {
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
    for (let ye = 0; ye < ie.length; ye++) {
      const je = _.get(ye), We = je ? M.get(je) : null, be = je ? U.get(je) : null;
      if (We || ie[ye].length === 2) {
        const ke = We || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ae = P.get(ke.material) || ze, Ue = Ae.E || ze.E, ct = Ae.nu || 0.3, Ke = Ae.G || Ue / (2 * (1 + ct));
        ue.elasticities.set(ye, Ue), ue.shearModuli.set(ye, Ke), ue.areas.set(ye, ke.A || ke.D * ke.B), ue.momentsOfInertiaZ.set(ye, ke.Iz || ke.B * ke.D ** 3 / 12), ue.momentsOfInertiaY.set(ye, ke.Iy || ke.D * ke.B ** 3 / 12), ue.torsionalConstants.set(ye, ke.J || 0), ue.densities.set(ye, Ae.density || 0), ((_a = ke.shape) == null ? void 0 : _a.includes("Wide Flange")) || ke.shape === "I" ? Me.set(ye, {
          type: "I",
          b: ke.B,
          h: ke.D,
          name: je || "I-section"
        }) : Me.set(ye, {
          type: "rect",
          b: ke.B,
          h: ke.D
        });
      } else if (be) {
        const ke = P.get(be.material) || ze, Ae = ke.E || ze.E, Ue = ke.nu || 0.2, ct = ke.G || Ae / (2 * (1 + Ue));
        ue.elasticities.set(ye, Ae), ue.shearModuli.set(ye, ct), ue.thicknesses.set(ye, be.thickness), ue.poissonsRatios.set(ye, Ue), ue.densities.set(ye, ke.density || 0);
      }
    }
    const Xe = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ye, je] of H) {
      const We = $e.get(ye);
      We !== void 0 && Xe.supports.set(We, je);
    }
    for (const ye of T) {
      const je = $e.get(ye.joint);
      if (je !== void 0) {
        const We = Xe.forces.get(je) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        We[0] += ye.fx, We[1] += ye.fy, We[2] += ye.fz, We[3] += ye.mx, We[4] += ye.my, We[5] += ye.mz, Xe.forces.set(je, We);
      }
    }
    return {
      units: e,
      dof: g,
      materials: P,
      frameSections: M,
      shellSections: U,
      nodes: ce,
      nodeNames: X,
      nodeNameToIdx: $e,
      elements: ie,
      elementNames: oe,
      elementSections: _,
      nodeInputs: Xe,
      elementInputs: ue,
      sectionShapes: Me,
      info: {
        nNodes: ce.length,
        nFrames: D,
        nShells: G,
        title: `SAP2000 (${D} frames, ${G} shells)`
      }
    };
  }
  function Cl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: U } = e, B = e.units || {
      force: "KN",
      length: "m"
    }, Q = e.title || "Awatif Model", V = [], H = (_) => V.push(_), W = () => V.push(" ");
    H(`File ${Q}.$2k was saved on m/d/yy at h:mm:ss`), W(), H('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), H("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
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
    const X = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const _ of he) {
      const D = ((_a = U.areas) == null ? void 0 : _a.get(_)) || 0, G = ((_b = U.momentsOfInertiaZ) == null ? void 0 : _b.get(_)) || 0, ue = ((_c = U.momentsOfInertiaY) == null ? void 0 : _c.get(_)) || 0, Me = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(_)) || 0, ze = ((_e = U.elasticities) == null ? void 0 : _e.get(_)) || 0, Xe = `MAT_${Math.round(ze)}`, ye = `A${D.toPrecision(6)}_Iz${G.toPrecision(6)}`;
      if (!X.has(ye)) {
        let We = 0.3, be = 0.3;
        D > 0 && G > 0 && (We = Math.sqrt(12 * G / D), be = D / We), X.set(ye, {
          A: D,
          Iz: G,
          Iy: ue,
          J: Me,
          b: be,
          h: We,
          matKey: Xe
        });
      }
      const je = [
        ...X.keys()
      ].indexOf(ye) + 1;
      $e.set(_, `SEC${je}`);
    }
    if (he.length > 0) {
      H('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const _ of he) {
        const D = $e.get(_) || "SEC1";
        H(`   Frame=${_ + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      W();
    }
    if (X.size > 0) {
      H('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let _ = 0;
      for (const [, D] of X) {
        _++;
        const G = D.A * 5 / 6;
        H(`   SectionName=SEC${_}   Material=${D.matKey}   Shape=Rectangular   t3=${Lt(D.h)}   t2=${Lt(D.b)}   Area=${Lt(D.A)}   TorsConst=${Lt(D.J)}   I33=${Lt(D.Iz)}   I22=${Lt(D.Iy)}   I23=0   AS2=${Lt(G)}   AS3=${Lt(G)} _`), H("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const ce = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const _ of T) {
      const D = ((_f = U.thicknesses) == null ? void 0 : _f.get(_)) || 0.1, G = ((_g = U.elasticities) == null ? void 0 : _g.get(_)) || 0, ue = `MAT_${Math.round(G)}`, Me = `t${D.toPrecision(6)}`;
      ce.has(Me) || ce.set(Me, {
        t: D,
        matKey: ue
      });
      const ze = [
        ...ce.keys()
      ].indexOf(Me) + 1;
      ie.set(_, `SSEC${ze}`);
    }
    if (T.length > 0) {
      H('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of T) {
        const G = ie.get(D) || "SSEC1";
        H(`   Area=${D + 1}   Section=${G}   MatProp=Default`);
      }
      W(), H('TABLE:  "AREA SECTION PROPERTIES"');
      let _ = 0;
      for (const [, D] of ce) _++, H(`   Section=SSEC${_}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Lt(D.t)}   BendThick=${Lt(D.t)}   Color=Cyan`);
      W();
    }
    H('TABLE:  "JOINT COORDINATES"');
    for (let _ = 0; _ < g.length; _++) {
      const D = g[_];
      H(`   Joint=${_ + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Lt(D[0])}   Y=${Lt(D[1])}   Z=${Lt(D[2])}   SpecialJt=No`);
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
      for (const [_, D] of M.forces) D.some((G) => Math.abs(G) > 1e-12) && H(`   Joint=${_ + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Lt(D[0])}   F2=${Lt(D[1])}   F3=${Lt(D[2])}   M1=${Lt(D[3])}   M2=${Lt(D[4])}   M3=${Lt(D[5])}`);
      W();
    }
    const oe = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < P.length; _++) {
      const D = ((_h = U.elasticities) == null ? void 0 : _h.get(_)) || 0, G = ((_i = U.shearModuli) == null ? void 0 : _i.get(_)) || 0, ue = D > 0 && G > 0 ? Math.max(0, Math.min(0.5, D / (2 * G) - 1)) : 0.2, Me = ((_j = U.densities) == null ? void 0 : _j.get(_)) || 0, ze = `MAT_${Math.round(D)}`;
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
    for (const [_, D] of oe) H(`   Material=${_}   UnitWeight=${Lt(D.rho * 9.81)}   UnitMass=${Lt(D.rho)}   E1=${Lt(D.E)}   G12=${Lt(D.G)}   U12=${Lt(D.nu)}   A1=9.9E-06`);
    W(), H('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [_] of oe) H(`   Material=${_}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), H('TABLE:  "PROGRAM CONTROL"'), H(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${B.force}, ${B.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), H("END TABLE DATA"), H(""), V.join(`\r
`);
  }
  function Lt(e) {
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
    for (const U of M) {
      const B = e.get(U);
      if (!(!B || B.length === 0)) {
        P.push(`$ ${U}`);
        for (const Q of B) P.push(Q);
        P.push("");
      }
    }
    for (const [U, B] of e) if (!M.includes(U) && B.length !== 0) {
      P.push(`$ ${U}`);
      for (const Q of B) P.push(Q);
      P.push("");
    }
    return P.push("  END"), P.push("$ END OF MODEL FILE"), P.join(`\r
`);
  }
  function Pl(e) {
    var _a, _b, _c, _d;
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: U, title: B, units: Q } = e, V = (Q == null ? void 0 : Q.force) || "TONF", H = (Q == null ? void 0 : Q.length) || "M", W = [], he = (be) => Math.round(be * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${V}"  "${H}"  "C"  `), B && W.push(`  TITLE2  "${B}"  `), W.push("");
    const T = /* @__PURE__ */ new Set();
    g.forEach((be) => T.add(he(be[1])));
    const X = [
      ...T
    ].sort((be, ke) => be - ke), $e = [], ce = /* @__PURE__ */ new Map();
    $e.push("Base"), ce.set(X[0], "Base");
    for (let be = 1; be < X.length; be++) {
      const ke = `Level_${be}`;
      $e.push(ke), ce.set(X[be], ke);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = X.length - 1; be >= 1; be--) W.push(`  STORY "${$e[be]}"  HEIGHT ${he(X[be] - X[be - 1])} MASTERSTORY "Yes"  `);
    X.length > 0 && W.push(`  STORY "Base"  ELEV ${X[0]} `), W.push(""), P.some((be) => be.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const oe = /* @__PURE__ */ new Set();
    (_a = U.elasticities) == null ? void 0 : _a.forEach((be) => oe.add(be));
    const _ = /* @__PURE__ */ new Map();
    let D = 0;
    for (const be of oe) {
      const ke = `Mat_${++D}`;
      _.set(be, ke), W.push(`  MATERIAL  "${ke}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${ke}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const G = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    P.forEach((be, ke) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const Ae = (_a2 = U.sectionShapes) == null ? void 0 : _a2.get(ke), Ue = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(ke)) ?? 0, ct = _.get(Ue) || "Mat_1", Ke = (Ae == null ? void 0 : Ae.h) ?? 0, dt = (Ae == null ? void 0 : Ae.b) ?? 0, ut = (Ae == null ? void 0 : Ae.d) ?? 0, St = (Ae == null ? void 0 : Ae.tf) ?? 0, Ft = (Ae == null ? void 0 : Ae.tw) ?? 0, Ot = (Ae == null ? void 0 : Ae.type) || "rect", yt = `${Ot}_${Ke}_${dt}_${ut}_${St}_${Ft}`;
      (Ae == null ? void 0 : Ae.name) && !Me.has(yt) && Me.set(yt, Ae.name);
      let gt = Me.get(yt);
      if (gt || (Ot === "rect" ? gt = `R${he(dt * 100)}x${he(Ke * 100)}` : Ot === "circ" ? gt = `C_D${he(ut * 100)}` : Ot === "I" ? gt = `I_${he(Ke * 100)}` : gt = `Sec_${G.size + 1}`, Me.set(yt, gt)), ue.set(ke, gt), G.has(gt)) return;
      G.add(gt);
      const _e = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Ot] || "Concrete Rectangular";
      let Mt = `  FRAMESECTION  "${gt}"  MATERIAL "${ct}"  SHAPE "${_e}"`;
      Ke && (Mt += `  D ${Ke}`), dt && (Mt += `  B ${dt}`), ut && !Ke && (Mt += `  D ${ut}`), St && (Mt += `  TF ${St}`), Ft && (Mt += `  TW ${Ft}`), W.push(Mt);
    }), W.push("");
    const ze = /* @__PURE__ */ new Map();
    let Xe = 0;
    g.forEach((be) => {
      const ke = `${he(be[0])},${he(be[2])}`;
      ze.has(ke) || ze.set(ke, `${++Xe}`);
    }), W.push("$ POINT COORDINATES");
    for (const [be, ke] of ze) {
      const [Ae, Ue] = be.split(",").map(Number);
      W.push(`  POINT "${ke}"  ${Ae} ${Ue} `);
    }
    W.push("");
    const ye = (be) => {
      const ke = g[be], Ae = `${he(ke[0])},${he(ke[2])}`;
      return {
        pt: ze.get(Ae) || "1",
        story: ce.get(he(ke[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const je = [];
    P.forEach((be, ke) => {
      if (be.length !== 2) return;
      const Ae = Ol(g, be), Ue = ue.get(ke) || `Sec_${ke}`;
      if (Ae === "BEAM") {
        const ct = ye(be[0]), Ke = ye(be[1]);
        W.push(`  LINE  "E${ke + 1}"  BEAM  "${ct.pt}"  "${Ke.pt}"  0`), je.push(`  LINEASSIGN  "E${ke + 1}"  "${ct.story}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const ct = g[be[0]][1] <= g[be[1]][1] ? be[0] : be[1], Ke = g[be[0]][1] <= g[be[1]][1] ? be[1] : be[0];
        ye(ct);
        const dt = ye(Ke), ut = he(g[ct][1]), St = he(g[Ke][1]), Ft = X.indexOf(ut), Ot = X.indexOf(St), yt = Math.max(1, Ot >= 0 && Ft >= 0 ? Ot - Ft : 1);
        W.push(`  LINE  "E${ke + 1}"  ${Ae}  "${dt.pt}"  "${dt.pt}"  ${yt}`);
        for (let gt = 0; gt < yt; gt++) {
          const io = Ot - gt;
          io >= 0 && io < $e.length && je.push(`  LINEASSIGN  "E${ke + 1}"  "${$e[io]}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((be, ke) => {
      const Ae = [];
      if (be[0] && Ae.push("UX"), be[1] && Ae.push("UY"), be[2] && Ae.push("UZ"), be[3] && Ae.push("RX"), be[4] && Ae.push("RY"), be[5] && Ae.push("RZ"), Ae.length > 0) {
        const Ue = ye(ke);
        W.push(`  POINTASSIGN  "${Ue.pt}"  "${Ue.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), je.forEach((be) => W.push(be)), W.push("");
    const We = [];
    if (P.forEach((be, ke) => {
      if (be.length === 4) {
        const Ae = g[be[0]], Ue = g[be[1]], ct = g[be[2]], Ke = [
          Ue[0] - Ae[0],
          Ue[1] - Ae[1],
          Ue[2] - Ae[2]
        ], dt = [
          ct[0] - Ae[0],
          ct[1] - Ae[1],
          ct[2] - Ae[2]
        ], ut = Math.abs(Ke[2] * dt[0] - Ke[0] * dt[2]), St = Math.sqrt((Ke[1] * dt[2] - Ke[2] * dt[1]) ** 2 + ut ** 2 + (Ke[0] * dt[1] - Ke[1] * dt[0]) ** 2), Ft = St > 1e-10 && ut / St < 0.5;
        We.push({
          idx: ke,
          el: be,
          isWall: Ft
        });
      }
    }), We.some((be) => !be.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const be = ((_c = U.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), W.push("");
    }
    if (We.some((be) => be.isWall)) {
      W.push("$ WALL PROPERTIES");
      const be = ((_d = U.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), W.push("");
    }
    if (We.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const be = [];
      We.forEach((ke, Ae) => {
        const { el: Ue, isWall: ct } = ke, Ke = ct ? `W${Ae + 1}` : `F${Ae + 1}`, dt = ct ? "PANEL" : "FLOOR", ut = Ue.map((St) => ye(St));
        if (ct) {
          const St = g[Ue[0]][1] <= g[Ue[2]][1] ? 0 : 2, Ft = g[Ue[1]][1] <= g[Ue[3]][1] ? 1 : 3;
          W.push(`  AREA "${Ke}"  ${dt}  4  "${ut[St].pt}"  "${ut[Ft].pt}"  "${ut[Ft].pt}"  "${ut[St].pt}"  1  1  0  0  `);
          const Ot = ut[St === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ke}"  "${Ot}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${Ke}"  ${dt}  4  "${ut[0].pt}"  "${ut[1].pt}"  "${ut[2].pt}"  "${ut[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ke}"  "${ut[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), be.forEach((ke) => W.push(ke)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), M.loads && M.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), M.loads.forEach((be, ke) => {
      const [Ae, Ue, ct] = be, Ke = ye(ke);
      Math.abs(Ae) > 1e-10 && W.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Ue) > 1e-10 && W.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FY ${Ue}`), Math.abs(ct) > 1e-10 && W.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FZ ${ct}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Ol(e, g) {
    const P = e[g[0]], M = e[g[1]], U = Math.abs(M[1] - P[1]), B = Math.sqrt((M[0] - P[0]) ** 2 + (M[2] - P[2]) ** 2), Q = U > B * 0.5;
    return Q && B > 0.01 ? "BRACE" : Q ? "COLUMN" : "BEAM";
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: U } = e, B = [];
    return B.push("# OpenSeesPy model exported from Awatif FEM Studio"), B.push(`# ${g.length} nodes, ${P.length} elements`), B.push(""), B.push("import openseespy.opensees as ops"), B.push(""), B.push("ops.wipe()"), B.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), B.push(""), B.push("# --- Nodes ---"), g.forEach((Q, V) => {
      B.push(`ops.node(${V + 1}, ${Q[0]}, ${Q[1]}, ${Q[2]})`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Q, V) => {
      const H = Q.map((W) => W ? 1 : 0).join(", ");
      B.push(`ops.fix(${V + 1}, ${H})`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), B.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), B.push(""), B.push("# --- Elements (elasticBeamColumn) ---"), P.forEach((Q, V) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Q.length !== 2) return;
      const H = g[Q[0]], W = g[Q[1]], T = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, X = ((_a2 = U.areas) == null ? void 0 : _a2.get(V)) ?? 1, $e = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ce = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ie = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, oe = ((_e = U.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, _ = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      B.push(`ops.element('elasticBeamColumn', ${V + 1}, ${Q[0] + 1}, ${Q[1] + 1}, ${X}, ${$e}, ${ce}, ${ie}, ${oe}, ${_}, ${T})`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("ops.timeSeries('Linear', 1)"), B.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((Q, V) => {
      const H = Q.map((W) => W).join(", ");
      B.push(`ops.load(${V + 1}, ${H})`);
    }), B.push("")), B.push("# --- Analysis ---"), B.push("ops.system('BandGeneral')"), B.push("ops.numberer('RCM')"), B.push("ops.constraints('Plain')"), B.push("ops.integrator('LoadControl', 1.0)"), B.push("ops.algorithm('Linear')"), B.push("ops.analysis('Static')"), B.push("ops.analyze(1)"), B.push(""), B.push("# --- Results ---"), B.push('print("\\n=== Displacements ===")'), g.forEach((Q, V) => {
      B.push(`print(f"Node {${V + 1}}: {ops.nodeDisp(${V + 1})}")`);
    }), B.push(""), B.push('print("\\n=== Reactions ===")'), B.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((Q, V) => {
      B.push(`print(f"Node {${V + 1}}: {ops.nodeReaction(${V + 1})}")`);
    }), B.join(`
`);
  }
  function ql(e) {
    var _a, _b;
    const { nodes: g, elements: P, nodeInputs: M, elementInputs: U } = e, B = [];
    return B.push("# OpenSees Tcl model exported from Awatif FEM Studio"), B.push(`# ${g.length} nodes, ${P.length} elements`), B.push(""), B.push("wipe"), B.push("model basic -ndm 3 -ndf 6"), B.push(""), B.push("# --- Nodes ---"), g.forEach((Q, V) => {
      B.push(`node ${V + 1} ${Q[0]} ${Q[1]} ${Q[2]}`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Q, V) => {
      const H = Q.map((W) => W ? 1 : 0).join(" ");
      B.push(`fix ${V + 1} ${H}`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("geomTransf Linear 1 0.0 0.0 1.0"), B.push("geomTransf Linear 2 -1.0 0.0 0.0"), B.push(""), B.push("# --- Elements ---"), P.forEach((Q, V) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Q.length !== 2) return;
      const H = g[Q[0]], W = g[Q[1]], T = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, X = ((_a2 = U.areas) == null ? void 0 : _a2.get(V)) ?? 1, $e = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ce = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ie = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, oe = ((_e = U.momentsOfInertiaY) == null ? void 0 : _e.get(V)) ?? 1, _ = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      B.push(`element elasticBeamColumn ${V + 1} ${Q[0] + 1} ${Q[1] + 1} ${X} ${$e} ${ce} ${ie} ${oe} ${_} ${T}`);
    }), B.push(""), M.loads && M.loads.size > 0 && (B.push("# --- Loads ---"), B.push("timeSeries Linear 1"), B.push("pattern Plain 1 1 {"), M.loads.forEach((Q, V) => {
      const H = Q.map((W) => W).join(" ");
      B.push(`  load ${V + 1} ${H}`);
    }), B.push("}"), B.push("")), B.push("# --- Analysis ---"), B.push("system BandGeneral"), B.push("numberer RCM"), B.push("constraints Plain"), B.push("integrator LoadControl 1.0"), B.push("algorithm Linear"), B.push("analysis Static"), B.push("analyze 1"), B.push(""), B.push("# --- Results ---"), B.push('puts "\\n=== Displacements ==="'), g.forEach((Q, V) => {
      B.push(`puts "Node ${V + 1}: [nodeDisp ${V + 1}]"`);
    }), B.push('puts "\\n=== Reactions ==="'), B.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((Q, V) => {
      B.push(`puts "Node ${V + 1}: [nodeReaction ${V + 1}]"`);
    }), B.join(`
`);
  }
  function _l(e) {
    const g = [], P = [], M = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const ce = $e.trim(), ie = ce.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const G = parseInt(ie[1]), ue = g.length;
        g.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), T.set(G, ue);
        continue;
      }
      const oe = ce.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
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
      const _ = ce.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const G = parseInt(_[1]), ue = T.get(parseInt(_[2])), Me = T.get(parseInt(_[3]));
        if (ue !== void 0 && Me !== void 0) {
          const ze = P.length;
          P.push([
            ue,
            Me
          ]), X.set(G, ze), V.set(ze, parseFloat(_[4])), B.set(ze, parseFloat(_[5])), Q.set(ze, parseFloat(_[6])), he.set(ze, parseFloat(_[7])), H.set(ze, parseFloat(_[8])), W.set(ze, parseFloat(_[9]));
        }
        continue;
      }
      const D = ce.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (D) {
        const G = T.get(parseInt(D[1]));
        G !== void 0 && U.set(G, [
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
        loads: U
      },
      elementInputs: {
        elasticities: B,
        shearModuli: Q,
        areas: V,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: he
      }
    };
  }
  function Dl(e) {
    const g = [], P = [], M = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
    for (const X of e.split(/\r?\n/)) {
      const $e = X.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const ce = $e.split(/\s+/);
      if (ce[0] === "node" && ce.length >= 5) {
        const ie = parseInt(ce[1]), oe = g.length;
        g.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), T.set(ie, oe);
        continue;
      }
      if (ce[0] === "fix" && ce.length >= 8) {
        const ie = T.get(parseInt(ce[1]));
        ie !== void 0 && M.set(ie, [
          ce[2] === "1",
          ce[3] === "1",
          ce[4] === "1",
          ce[5] === "1",
          ce[6] === "1",
          ce[7] === "1"
        ]);
        continue;
      }
      if (ce[0] === "element" && ce[1] === "elasticBeamColumn" && ce.length >= 12) {
        const ie = T.get(parseInt(ce[3])), oe = T.get(parseInt(ce[4]));
        if (ie !== void 0 && oe !== void 0) {
          const _ = P.length;
          P.push([
            ie,
            oe
          ]), V.set(_, parseFloat(ce[5])), B.set(_, parseFloat(ce[6])), Q.set(_, parseFloat(ce[7])), he.set(_, parseFloat(ce[8])), H.set(_, parseFloat(ce[9])), W.set(_, parseFloat(ce[10]));
        }
        continue;
      }
      if (ce[0] === "load" && ce.length >= 8) {
        const ie = T.get(parseInt(ce[1]));
        ie !== void 0 && U.set(ie, [
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4]),
          parseFloat(ce[5]),
          parseFloat(ce[6]),
          parseFloat(ce[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: U
      },
      elementInputs: {
        elasticities: B,
        shearModuli: Q,
        areas: V,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: he
      }
    };
  }
  function Xt(e) {
    const g = [];
    let P = 0, M = false, U = "";
    for (let B = 0; B < e.length; B++) {
      const Q = e[B];
      if (Q === "'" && (B === 0 || e[B - 1] !== "\\")) {
        M = !M, U += Q;
        continue;
      }
      if (M) {
        U += Q;
        continue;
      }
      if (Q === "(") {
        P++, U += Q;
        continue;
      }
      if (Q === ")") {
        P--, U += Q;
        continue;
      }
      if (Q === "," && P === 0) {
        g.push(U.trim()), U = "";
        continue;
      }
      U += Q;
    }
    return U.trim() && g.push(U.trim()), g;
  }
  function ua(e, g) {
    const P = Xt(e);
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
    }, P = {}, M = {}, U = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    U && (g.schema = U[1]);
    const B = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let Q;
    for (; (Q = B.exec(e)) !== null; ) {
      const V = parseInt(Q[1]), H = Q[2].toUpperCase();
      P[V] = {
        id: V,
        type: H,
        args: Q[3]
      }, M[H] || (M[H] = []), M[H].push(V);
    }
    if (M.IFCPROJECT) {
      const V = P[M.IFCPROJECT[0]];
      if (V) {
        const H = ua(V.args, 2);
        H && (g.project = H);
      }
    }
    return {
      meta: g,
      entities: P,
      typeIndex: M
    };
  }
  function Yt(e, g) {
    const P = g.match(/#(\d+)/);
    return P && e[parseInt(P[1])] || null;
  }
  function ma(e, g) {
    const P = Xt(g.args), M = Yt(e, P[0]), U = M ? Hl(e, M) : [
      0,
      0,
      0
    ];
    let B = [
      0,
      0,
      1
    ], Q = [
      1,
      0,
      0
    ];
    if (P[1] && P[1] !== "$") {
      const V = Yt(e, P[1]);
      V && (B = ia(e, V));
    }
    if (P[2] && P[2] !== "$") {
      const V = Yt(e, P[2]);
      V && (Q = ia(e, V));
    }
    return {
      origin: U,
      dirZ: B,
      dirX: Q
    };
  }
  function Hl(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ia(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ba(e, g) {
    const P = Xt(g.args), M = Yt(e, P[1]);
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
    if (M && (U = ma(e, M)), P[0] && P[0] !== "$") {
      const B = Yt(e, P[0]);
      if (B && B.type === "IFCLOCALPLACEMENT") {
        const Q = ba(e, B), V = ts(U.origin, Q.dirX, es(Q.dirZ, Q.dirX), Q.dirZ);
        U.origin = [
          Q.origin[0] + V[0],
          Q.origin[1] + V[1],
          Q.origin[2] + V[2]
        ], U.dirZ = ts(U.dirZ, Q.dirX, es(Q.dirZ, Q.dirX), Q.dirZ), U.dirX = ts(U.dirX, Q.dirX, es(Q.dirZ, Q.dirX), Q.dirZ);
      }
    }
    return U;
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
    const g = Bl(e), { entities: P, typeIndex: M } = g, U = [], B = [], Q = /* @__PURE__ */ new Map();
    Q.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), Q.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let V = 0, H = 0;
    function W(oe, _, D) {
      for (const G of U) {
        const ue = G.x - oe, Me = G.y - _, ze = G.z - D;
        if (Math.sqrt(ue * ue + Me * Me + ze * ze) < jl) return G.id;
      }
      return U.push({
        id: V,
        x: oe,
        y: _,
        z: D
      }), V++;
    }
    function he(oe) {
      const _ = ua(oe.args, 2) || "", D = M.IFCRELASSOCIATESMATERIAL || [];
      for (const ue of D) {
        const Me = P[ue];
        if (!Me) continue;
        const ze = Xt(Me.args);
        if ((ze[4] || ze[3] || "").includes(`#${oe.id}`)) {
          const ye = ze[5] || ze[4] || "", je = Yt(P, ye);
          if (je) return T(je);
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
        const D = Xt(oe.args), G = (D[1] || "").replace(/'/g, ""), ue = parseFloat(D[3]) || 0.3, Me = parseFloat(D[4]) || 0.3;
        return {
          b: ue,
          h: Me,
          name: G
        };
      }
      if (_ === "IFCMATERIALPROFILE") {
        const D = Xt(oe.args), G = D[2] || D[1] || "", ue = Yt(P, G);
        if (ue) return T(ue);
      }
      if (_ === "IFCMATERIALPROFILESET") {
        const D = Xt(oe.args), ue = (D[2] || D[1] || "").match(/#(\d+)/);
        if (ue) {
          const Me = P[parseInt(ue[1])];
          if (Me) return T(Me);
        }
      }
      if (_ === "IFCMATERIALPROFILESETUSAGE") {
        const G = Xt(oe.args)[0], ue = Yt(P, G);
        if (ue) return T(ue);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function X(oe, _, D, G) {
      const ue = M[oe] || [];
      for (const Me of ue) {
        const ze = P[Me];
        if (!ze) continue;
        const Xe = Xt(ze.args), ye = Xe[5] || Xe[4] || "", je = Yt(P, ye);
        if (!je) continue;
        const We = ba(P, je), be = he(ze);
        let ke = G, Ae = null, Ue = null;
        const ct = Xe[6] || Xe[5] || "", Ke = Yt(P, ct);
        if (Ke) {
          const gt = $n(P, Ke);
          gt && (ke = gt.depth || G, Ae = gt.origin, Ue = gt.direction);
        }
        const dt = Ae ? Ae[0] : We.origin[0], ut = Ae ? Ae[1] : We.origin[1], St = Ae ? Ae[2] : We.origin[2], Ft = Ue || (D === "Z" ? We.dirZ : We.dirX), Ot = W(dt, ut, St), yt = W(dt + Ft[0] * ke, ut + Ft[1] * ke, St + Ft[2] * ke);
        B.push({
          id: H++,
          type: "frame",
          nodeIds: [
            Ot,
            yt
          ],
          category: _,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: Me
        });
      }
    }
    X("IFCCOLUMN", "column", "Z", 3), X("IFCBEAM", "beam", "X", 5), X("IFCMEMBER", "diagonal", "X", 4), X("IFCPILE", "pile", "Z", 10), X("IFCSTAIRFLIGHT", "stair", "X", 3), X("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(oe, _, D) {
      const G = M[oe] || [];
      for (const ue of G) {
        const Me = P[ue];
        if (!Me) continue;
        const ze = Xt(Me.args), Xe = ze[5] || ze[4] || "";
        if (!Yt(P, Xe)) continue;
        let je = D;
        const We = ze[6] || ze[5] || "", be = Yt(P, We);
        be && (je = Gl(P, be) || D);
        const ke = _ === "slab" ? `Losa e=${(je * 100).toFixed(0)}cm` : _ === "wall" ? `Muro e=${(je * 100).toFixed(0)}cm` : _ === "footing" ? `Zapata e=${(je * 100).toFixed(0)}cm` : `${_} e=${(je * 100).toFixed(0)}cm`;
        B.push({
          id: H++,
          type: "shell",
          nodeIds: [],
          category: _,
          sectionName: ke,
          b: je,
          h: je,
          material: "Hormigon",
          expressID: ue
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const ce = [], ie = M.IFCBUILDINGSTOREY || [];
    for (const oe of ie) {
      const _ = P[oe];
      if (!_) continue;
      const D = Xt(_.args), G = (D[2] || "").replace(/'/g, ""), ue = parseFloat(D[9]) || 0;
      ce.push({
        name: G,
        elevation: ue
      });
    }
    return ce.sort((oe, _) => oe.elevation - _.elevation), {
      nodes: U,
      elements: B,
      materials: Q,
      levels: ce,
      projectName: g.meta.project,
      schema: g.meta.schema
    };
  }
  function $n(e, g) {
    const P = Xt(g.args);
    for (const M of P) {
      const U = M.match(/#(\d+)/g) || [];
      for (const B of U) {
        const Q = parseInt(B.replace("#", "")), V = e[Q];
        if (V) {
          if (V.type === "IFCEXTRUDEDAREASOLID") {
            const H = Xt(V.args), W = parseFloat(H[3]) || 0, he = Yt(e, H[1]);
            let T = [
              0,
              0,
              0
            ];
            he && (T = ma(e, he).origin);
            const X = Yt(e, H[2]);
            let $e = [
              0,
              0,
              1
            ];
            if (X && X.type === "IFCDIRECTION") {
              const ce = X.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              ce && ce.length >= 3 && ($e = ce.map(Number));
            }
            return {
              depth: W,
              origin: T,
              direction: $e
            };
          }
          if (V.type === "IFCSHAPEREPRESENTATION") {
            const H = $n(e, V);
            if (H) return H;
          }
          if (V.type === "IFCMAPPEDITEM") {
            const H = Xt(V.args), W = Yt(e, H[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const he = Xt(W.args), T = Yt(e, he[1]);
              if (T) {
                const X = $n(e, T);
                if (X) return X;
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
    const M = new P.IfcAPI(), U = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(U), await M.Init();
    const B = M.OpenModel(new Uint8Array(g)), Q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = {
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
      const ce = Yl($e);
      try {
        const ie = M.GetLineIDsWithType(B, $e);
        for (let oe = 0; oe < ie.size(); oe++) {
          const _ = ie.get(oe);
          Q.set(_, ce);
          let D = "";
          try {
            const G = M.GetLine(B, _);
            D = ((_a = G == null ? void 0 : G.Name) == null ? void 0 : _a.value) || ((_b = G == null ? void 0 : G.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          V.set(_, {
            expressID: _,
            category: ce,
            name: D,
            typeName: H[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const W = /* @__PURE__ */ new Map();
    for (const $e of ha) {
      const ce = new sn();
      ce.name = `ifc-${$e}`, e.add(ce), W.set($e, ce);
    }
    const he = new el();
    let T = 0;
    const X = new oa({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: na
    });
    return M.StreamAllMeshes(B, ($e) => {
      const ce = Q.get($e.expressID) ?? "other", ie = W.get(ce), oe = $e.geometries;
      for (let _ = 0; _ < oe.size(); _++) {
        const D = oe.get(_), G = M.GetGeometry(B, D.geometryExpressID), ue = M.GetVertexArray(G.GetVertexData(), G.GetVertexDataSize()), Me = M.GetIndexArray(G.GetIndexData(), G.GetIndexDataSize()), ze = new no(), Xe = new Float32Array(ue.length / 2), ye = new Float32Array(ue.length / 2);
        for (let Ae = 0; Ae < ue.length; Ae += 6) {
          const Ue = Ae / 2;
          Xe[Ue] = ue[Ae], Xe[Ue + 1] = ue[Ae + 1], Xe[Ue + 2] = ue[Ae + 2], ye[Ue] = ue[Ae + 3], ye[Ue + 1] = ue[Ae + 4], ye[Ue + 2] = ue[Ae + 5];
        }
        ze.setAttribute("position", new xn(Xe, 3)), ze.setAttribute("normal", new xn(ye, 3)), ze.setIndex(new xn(new Uint32Array(Me), 1));
        const je = new tl();
        je.fromArray(D.flatTransformation);
        let We;
        const be = D.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? We = new oa({
          color: new ol(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: na
        }) : We = X, We._origOpacity = We.opacity;
        const ke = new da(ze, We);
        ke.applyMatrix4(je), ke.userData.expressID = $e.expressID, ke.userData.category = ce, ie.add(ke), he.expandByObject(ke), T++, G.delete();
      }
    }), M.CloseModel(B), {
      meshCount: T,
      bbox: he,
      detailCategories: W,
      elementInfo: V
    };
  }
  ca = Jo.state(false);
  tr = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let g = "tonf", P = "m", M = Ro(g, P), U = {
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
    }, Q = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    let H = false;
    const W = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let T = "", X = {}, $e = null, ce = "", ie = [], oe = [], _ = [], D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Xe = null, ye = [], je = 0.2, We = 2, be = 2, ke = false, Ae = 2, Ue = "x", ct = /* @__PURE__ */ new Set(), Ke = true, dt = 0.15, ut = 2, St = 2, Ft = /* @__PURE__ */ new Set(), Ot = false, yt = "perimeter";
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
    }), _e = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Mt = 0, Re = 3, De = false, xe = 0, Le = null, ve = 0, Te = [], Je = 1, Be = true;
    const ft = ul();
    ft.div.style.display = "none";
    function ht() {
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
    let Ye = [], Ze = [], mt = 0, pt = [], xt = null;
    function Ht() {
      if (!xt) return;
      const t = Qe();
      t && t.scene.remove(xt), xt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), xt = null;
    }
    function as(t, o, n, l, a) {
      Ht();
      const c = Qe();
      if (!c) return;
      xt = new sn(), xt.name = "refGrid";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), d = Math.max(...n), b = r - s || 1, S = i - p || 1, $ = 3359829, y = 2241348;
      for (const h of n) {
        for (const I of o) {
          const L = new no().setFromPoints([
            new qe(s, h, I),
            new qe(r, h, I)
          ]), z = new Wo({
            color: $,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new Co(L, z);
          O.computeLineDistances(), O.renderOrder = -10, xt.add(O);
        }
        for (const I of t) {
          const L = new no().setFromPoints([
            new qe(I, h, p),
            new qe(I, h, i)
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
          new qe(h, 0, I),
          new qe(h, d, I)
        ]), z = new Wo({
          color: y,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), O = new Co(L, z);
        O.computeLineDistances(), O.renderOrder = -10, xt.add(O);
      }
      const f = Math.min(b, S) * 0.015;
      for (const h of n) for (const I of t) for (const L of o) {
        const z = [
          new qe(I - f, h, L),
          new qe(I + f, h, L),
          new qe(I, h, L - f),
          new qe(I, h, L + f)
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
    let Nt = null;
    function ls() {
      if (!Nt) return;
      const t = Qe();
      t && t.scene.remove(Nt), Nt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Nt = null;
    }
    function Xo(t, o, n, l, a) {
      ls();
      const c = Qe();
      if (!c) return;
      Nt = new sn(), Nt.name = "gridAxes";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), d = r - s || 1, b = i - p || 1, S = Math.max(d, b), $ = S * 0.08, y = l || t.map((m, u) => String.fromCharCode(65 + u)), f = a || o.map((m, u) => String(u + 1)), h = S * 0.018, I = o.length <= 1, L = 8947848;
      for (let m = 0; m < t.length; m++) {
        const u = t[m];
        if (I) {
          const E = -$ - h * 1.5;
          In(u, 0, 0, u, 0, E + h, L, Nt), kn(y[m] || `${m}`, u, 0, E, h, Nt);
        } else {
          const E = p - $ - h * 1.5;
          In(u, p, 0, u, E + h, 0, L, Nt), kn(y[m] || `${m}`, u, E, 0, h, Nt);
        }
      }
      if (!I) for (let m = 0; m < o.length; m++) {
        const u = o[m], E = s - $ - h * 1.5;
        In(s, u, 0, E + h, u, 0, L, Nt), kn(f[m] || `${m}`, E, u, 0, h, Nt);
      }
      const z = h * 1.8, O = $ * 1.2, k = $ * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const u = t[m], E = t[m + 1], A = Math.abs(E - u), R = (u + E) / 2, j = `${A.toFixed(2)} m`;
        I ? (En(j, R, 0, -O, z, Nt), Sn(u, 0, -O * 0.7, E, 0, -O * 0.7, 16763904, Nt)) : (En(j, R, p - k, 0, z, Nt), Sn(u, p - k * 0.7, 0, E, p - k * 0.7, 0, 16763904, Nt));
      }
      if (!I) for (let m = 0; m < o.length - 1; m++) {
        const u = o[m], E = o[m + 1], A = Math.abs(E - u), R = (u + E) / 2, j = `${A.toFixed(2)} m`;
        En(j, s - O, R, 0, z, Nt), Sn(s - O * 0.7, u, 0, s - O * 0.7, E, 0, 16763904, Nt);
      }
      Nt.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(Nt), c.render();
    }
    let Jt = null;
    function rs() {
      if (!Jt) return;
      const t = Qe();
      t && t.scene.remove(Jt), Jt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Jt = null;
    }
    function wn(t, o, n) {
      if (rs(), t.length === 0) return;
      const l = Qe();
      if (!l) return;
      Jt = new sn(), Jt.name = "storyLevels";
      const a = Math.min(...o), c = Math.max(...o), s = Math.min(...n), r = Math.max(...n), p = c - a || 1, i = r - s || 1, d = Math.max(p, i), b = d * 0.06, S = n.length <= 1, $ = 4491519, y = d * 0.015;
      for (const f of t) {
        const h = f.elev;
        S ? (Ko(a - b, 0, h, c + b, 0, h, $, Jt), is(f.name, c + b * 1.5, 0, h, y, Jt)) : (Ko(a, s, h, c, s, h, $, Jt), Ko(c, s, h, c, r, h, $, Jt), Ko(c, r, h, a, r, h, $, Jt), Ko(a, r, h, a, s, h, $, Jt), is(f.name, a - b * 1.5, s, h, y, Jt));
      }
      Jt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Jt), l.render();
    }
    function Ko(t, o, n, l, a, c, s, r) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (c - n) ** 2) || 1, i = new no().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
      ]), d = new Wo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Co(i, d);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function is(t, o, n, l, a, c) {
      const s = document.createElement("canvas"), r = 512, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      i.beginPath(), i.moveTo(d, 0), i.lineTo(r - d, 0), i.quadraticCurveTo(r, 0, r, d), i.lineTo(r, p - d), i.quadraticCurveTo(r, p, r - d, p), i.lineTo(d, p), i.quadraticCurveTo(0, p, 0, p - d), i.lineTo(0, d), i.quadraticCurveTo(0, 0, d, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const b = new Xn(s);
      b.needsUpdate = true;
      const S = new fn({
        map: b,
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
      const b = new il(s);
      b.minFilter = cl;
      const S = new fn({
        map: b,
        transparent: true,
        depthTest: false
      }), $ = new pn(S);
      $.position.set(o, n, l);
      const y = r / p;
      $.scale.set(a * y, a, 1), $.renderOrder = 999, c.add($);
    }
    function Sn(t, o, n, l, a, c, s, r) {
      const p = [
        new qe(t, o, n),
        new qe(l, a, c)
      ], i = new no().setFromPoints(p), d = new Yo({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Co(i, d);
      b.renderOrder = 998, r.add(b);
    }
    function In(t, o, n, l, a, c, s, r) {
      const p = new no().setFromPoints([
        new qe(t, o, n),
        new qe(l, a, c)
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
      }), b = new pn(d);
      b.position.set(o, n, l);
      const S = a * 2;
      b.scale.set(S, S, 1), b.renderOrder = 100, c.add(b);
    }
    const et = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], a = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), tt(), a;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), tt();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), tt(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), tt();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), tt();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), tt();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), tt();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), tt();
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
        const c = [
          0
        ];
        for (const s of n || [
          3
        ]) c.push(c[c.length - 1] + s);
        as(l, a, c), Ye = l.map((s, r) => ({
          label: String.fromCharCode(65 + r),
          coord: s
        })), Ze = a.map((s, r) => ({
          label: `${r + 1}`,
          coord: s
        })), mt = c[c.length - 1], pt = c.map((s, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: s
        })), Xo(Ye.map((s) => s.coord), Ze.map((s) => s.coord), mt, Ye.map((s) => s.label), Ze.map((s) => s.label));
        {
          const s = c.map((r, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? r - c[p - 1] : 0,
            elev: r
          }));
          wn(s, Ye.map((r) => r.coord), Ze.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${c}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (Ye.length === 0 || pt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, c] = o.split("x").map((q) => parseFloat(q) / 100), [s, r] = n.split("x").map((q) => parseFloat(q) / 100), p = Ye.map((q) => q.coord), i = Ze.map((q) => q.coord), d = pt.map((q) => q.elev), b = p.length, S = i.length, $ = d.length, y = $ - 1, f = [], h = {};
        for (let q = 0; q < $; q++) for (let pe = 0; pe < S; pe++) for (let te = 0; te < b; te++) h[`${te},${pe},${q}`] = f.length, f.push([
          p[te],
          i[pe],
          d[q]
        ]);
        const I = [], L = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
        for (let q = 0; q < y; q++) for (let pe = 0; pe < S; pe++) for (let te = 0; te < b; te++) {
          const fe = I.length;
          I.push([
            h[`${te},${pe},${q}`],
            h[`${te},${pe},${q + 1}`]
          ]), L.add(fe), O.set(fe, q);
        }
        for (let q = 1; q < $; q++) for (let pe = 0; pe < S; pe++) for (let te = 0; te < b - 1; te++) {
          const fe = I.length;
          I.push([
            h[`${te},${pe},${q}`],
            h[`${te + 1},${pe},${q}`]
          ]), z.add(fe), O.set(fe, q - 1);
        }
        for (let q = 1; q < $; q++) for (let pe = 0; pe < b; pe++) for (let te = 0; te < S - 1; te++) {
          const fe = I.length;
          I.push([
            h[`${pe},${te},${q}`],
            h[`${pe},${te + 1},${q}`]
          ]), z.add(fe), O.set(fe, q - 1);
        }
        const k = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (k) {
          const q = k === "all" || k === "x" || k === "perimeter", pe = k === "all" || k === "y" || k === "perimeter";
          for (let te = 0; te < y; te++) {
            if (q) for (let fe = 0; fe < S; fe++) {
              if (k === "perimeter" && fe !== 0 && fe !== S - 1) continue;
              const ee = Math.floor((b - 1) / 2);
              for (let me = 0; me < b - 1; me++) {
                if (k === "perimeter" && me !== ee) continue;
                const Se = I.length;
                I.push([
                  h[`${me},${fe},${te}`],
                  h[`${me + 1},${fe},${te + 1}`]
                ]), m.add(Se), O.set(Se, te);
                const se = I.length;
                I.push([
                  h[`${me + 1},${fe},${te}`],
                  h[`${me},${fe},${te + 1}`]
                ]), m.add(se), O.set(se, te);
              }
            }
            if (pe) for (let fe = 0; fe < b; fe++) {
              if (k === "perimeter" && fe !== 0 && fe !== b - 1) continue;
              const ee = Math.floor((S - 1) / 2);
              for (let me = 0; me < S - 1; me++) {
                if (k === "perimeter" && me !== ee) continue;
                const Se = I.length;
                I.push([
                  h[`${fe},${me},${te}`],
                  h[`${fe},${me + 1},${te + 1}`]
                ]), m.add(Se), O.set(Se, te);
                const se = I.length;
                I.push([
                  h[`${fe},${me + 1},${te}`],
                  h[`${fe},${me},${te + 1}`]
                ]), m.add(se), O.set(se, te);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), A = a * c, R = a * c ** 3 / 12, j = c * a ** 3 / 12, x = a * c * (a ** 2 + c ** 2) / 12, w = s * r, v = s * r ** 3 / 12, F = r * s ** 3 / 12, J = s * r * (s ** 2 + r ** 2) / 12, Y = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) Y.set(q, u), ae.set(q, E), L.has(q) ? (K.set(q, A), Z.set(q, R), de.set(q, j), le.set(q, x), Ee.set(q, {
          type: "rect",
          b: a,
          h: c,
          name: `COL${o}`
        })) : m.has(q) ? (K.set(q, A), Z.set(q, R), de.set(q, j), le.set(q, x), Ee.set(q, {
          type: "rect",
          b: a,
          h: c,
          name: `BR${o}`
        })) : (K.set(q, w), Z.set(q, v), de.set(q, F), le.set(q, J), Ee.set(q, {
          type: "rect",
          b: s,
          h: r,
          name: `V${n}`
        }));
        const Fe = /* @__PURE__ */ new Map();
        for (let q = 0; q < S; q++) for (let pe = 0; pe < b; pe++) Fe.set(h[`${pe},${q},0`], [
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
          elasticities: Y,
          shearModuli: ae,
          areas: K,
          momentsOfInertiaZ: Z,
          momentsOfInertiaY: de,
          torsionalConstants: le,
          sectionShapes: Ee
        }, D = L, G = z, Me = O, console.log(`Built: ${f.length} nodes, ${I.length} elements (${L.size} cols, ${z.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${k ? `, braces=${k}` : ""}`), {
          nodes: f.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ye.findIndex((y) => y.label === t), a = Ze.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ye.map((y) => y.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ze.map((y) => y.label)}`);
          return;
        }
        const c = Ye[l].coord, s = Ze[a].coord, r = [
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
          pt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: pt.length - 1
        }, (y, f) => f + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = i(pt[0].elev);
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
          if (y < 1 || y >= pt.length) continue;
          const f = i(pt[y - 1].elev), h = i(pt[y].elev);
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
        const c = Ye.findIndex((O) => O.label === t), s = Ze.findIndex((O) => O.label === o), r = Ye.findIndex((O) => O.label === n), p = Ze.findIndex((O) => O.label === l), i = pt.findIndex((O) => O.label === a);
        if (c < 0 || s < 0 || r < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${a}" not found. Available: ${pt.filter((O) => O.label !== "Base").map((O) => O.label)}`);
          return;
        }
        const d = Ye[c].coord, b = Ze[s].coord, S = Ye[r].coord, $ = Ze[p].coord, y = pt[i].elev, f = [
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
        ]), G.add(h.length - 1), Me.set(h.length - 1, i - 1), e.nodes.val = f, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), h.length - 1;
      },
      addBrace(t, o, n, l, a, c) {
        var _a2;
        const s = Ye.findIndex((u) => u.label === t), r = Ze.findIndex((u) => u.label === o), p = pt.findIndex((u) => u.label === n), i = Ye.findIndex((u) => u.label === l), d = Ze.findIndex((u) => u.label === a), b = pt.findIndex((u) => u.label === c);
        if (s < 0 || r < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (i < 0 || d < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${c}`);
          return;
        }
        const S = Ye[s].coord, $ = Ze[r].coord, y = pt[p].elev, f = Ye[i].coord, h = Ze[d].coord, I = pt[b].elev, L = [
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
        ]), Me.set(z.length - 1, Math.min(p, b)), e.nodes.val = L, e.elements.val = z, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${c}`), z.length - 1;
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
        et.clear();
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
        ], a = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [r, p] = a.split("x").map((ee) => parseFloat(ee) / 100), [i, d] = c.split("x").map((ee) => parseFloat(ee) / 100), b = [
          0
        ];
        for (const ee of o) b.push(b[b.length - 1] + ee);
        const S = [
          0
        ];
        for (const ee of n) S.push(S[S.length - 1] + ee);
        const $ = [
          0
        ];
        for (const ee of l) $.push($[$.length - 1] + ee);
        const y = b.length, f = S.length, h = $.length, I = l.length, L = [], z = {};
        for (let ee = 0; ee < h; ee++) for (let me = 0; me < f; me++) for (let Se = 0; Se < y; Se++) z[`${Se},${ee},${me}`] = L.length, L.push([
          b[Se],
          $[ee],
          S[me]
        ]);
        const O = [], k = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < I; ee++) for (let me = 0; me < f; me++) for (let Se = 0; Se < y; Se++) {
          const se = O.length;
          O.push([
            z[`${Se},${ee},${me}`],
            z[`${Se},${ee + 1},${me}`]
          ]), k.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let me = 0; me < f; me++) for (let Se = 0; Se < y - 1; Se++) {
          const se = O.length;
          O.push([
            z[`${Se},${ee},${me}`],
            z[`${Se + 1},${ee},${me}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let me = 0; me < y; me++) for (let Se = 0; Se < f - 1; Se++) {
          const se = O.length;
          O.push([
            z[`${me},${ee},${Se}`],
            z[`${me},${ee},${Se + 1}`]
          ]), m.add(se), u.set(se, ee - 1);
        }
        const A = 15100 * Math.sqrt(s) * 10, R = A / (2 * (1 + 0.2)), j = r * p, x = r * p ** 3 / 12, w = p * r ** 3 / 12, v = r * p * (r ** 2 + p ** 2) / 12, F = i * d, J = i * d ** 3 / 12, Y = d * i ** 3 / 12, ae = i * d * (i ** 2 + d ** 2) / 12, K = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < O.length; ee++) K.set(ee, A), Z.set(ee, R), k.has(ee) ? (de.set(ee, j), le.set(ee, x), Ee.set(ee, w), Fe.set(ee, v), q.set(ee, {
          type: "rect",
          b: r,
          h: p,
          name: `COL${a}`
        })) : (de.set(ee, F), le.set(ee, J), Ee.set(ee, Y), Fe.set(ee, ae), q.set(ee, {
          type: "rect",
          b: i,
          h: d,
          name: `V${c}`
        }));
        const pe = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < f; ee++) for (let me = 0; me < y; me++) pe.set(z[`${me},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = L, e.elements.val = O, e.nodeInputs.val = {
          supports: pe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: K,
          shearModuli: Z,
          areas: de,
          momentsOfInertiaZ: le,
          momentsOfInertiaY: Ee,
          torsionalConstants: Fe,
          sectionShapes: q
        }, D = k, G = m, Me = u, Ye = b.map((ee, me) => ({
          label: String.fromCharCode(65 + me),
          coord: ee
        })), Ze = S.map((ee, me) => ({
          label: `${me + 1}`,
          coord: ee
        })), mt = $[$.length - 1], Xo(Ye.map((ee) => ee.coord), Ze.map((ee) => ee.coord), mt, Ye.map((ee) => ee.label), Ze.map((ee) => ee.label));
        {
          const ee = $.map((me, Se) => ({
            name: Se === 0 ? "Base" : `P${Se}`,
            height: Se > 0 ? me - $[Se - 1] : 0,
            elev: me
          }));
          wn(ee, b, S);
        }
        const te = Ce.querySelector("#cad3d-axis-buttons");
        if (te) {
          te.style.display = "flex";
          const ee = Ye.map((Se) => Se.label), me = Ze.map((Se) => Se.label);
          te.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Se of ee) te.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Se}">${Se}</button>`;
          te.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Se of me) te.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Se}">${Se}</button>`;
        }
        const fe = Ce.querySelector("#cad3d-floor-buttons");
        if (fe) {
          fe.style.display = "flex", fe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < I; ee++) fe.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return as(b, S, $), tt(), console.log(`Model3D: ${L.length}n ${O.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${c} f'c=${s}`), {
          nodes: L.length,
          elements: O.length,
          columns: k.size,
          beams: m.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ye = [], Ze = [], mt = 0, ls(), rs(), Ht();
        const t = Ce.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), tt();
      },
      frame(t, o, n = 0, l = 0) {
        et.clear();
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
        const b = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (D.add(b.length), b.push([
          i[`${f},${y}`],
          i[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) G.add(b.length), b.push([
          i[`${f},${y}`],
          i[`${f + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), $ = ht();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          i[f] !== void 0 && S.set(i[f], [
            ...$
          ]);
        }
        return e.nodes.val = d, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), Ye = [
          ...a
        ], Ze = [
          0
        ], mt = s[s.length - 1] || 0, setTimeout(() => {
          wt(), Xo(a, [
            0
          ]), Nn(), qn();
        }, 50), tt(), {
          nodes: d.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, a = 0, c = 0, s = 0, r = 0, p = 1) {
        et.clear();
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        c > 0 && i.push(i[i.length - 1] + c);
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const u of o) d.push(d[d.length - 1] + u);
        r > 0 && d.push(d[d.length - 1] + r);
        const b = [
          0
        ];
        for (const u of n) b.push(b[b.length - 1] + u);
        const S = (u) => a > 0 && u === 0 || c > 0 && u === i.length - 1, $ = (u) => s > 0 && u === 0 || r > 0 && u === d.length - 1, y = (u, E) => S(u) || $(E), f = [], h = {};
        for (let u = 0; u < b.length; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < i.length; A++) u === 0 && y(A, E) || (h[`${A},${E},${u}`] = f.length, f.push([
          i[A],
          d[E],
          b[u]
        ]));
        const I = f.length, L = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const z = [];
        for (let u = 0; u < b.length - 1; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < i.length; A++) y(A, E) || z.push({
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
            const v = w / p, F = f.length;
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
            E
          ]);
        }
        ze = /* @__PURE__ */ new Map();
        const O = [];
        for (let u = 1; u < b.length; u++) for (let E = 0; E < d.length; E++) for (let A = 0; A < i.length - 1; A++) O.push({
          el: [
            h[`${A},${E},${u}`],
            h[`${A + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: A
        });
        for (let u = 1; u < b.length; u++) for (let E = 0; E < i.length; E++) for (let A = 0; A < d.length - 1; A++) O.push({
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
          for (let J = 1; J < l; J++) {
            const Y = J / l, ae = f.length;
            f.push([
              x[0] + (w[0] - x[0]) * Y,
              x[1] + (w[1] - x[1]) * Y,
              x[2] + (w[2] - x[2]) * Y
            ]);
            const K = L.length;
            G.add(K), Me.set(K, A), ze.set(K, {
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
            E
          ]);
        }
        if (ct = /* @__PURE__ */ new Set(), ke && Ae > 0) {
          const u = (E, A, R) => {
            for (let x = 0; x < f.length; x++) if (Math.abs(f[x][0] - E) < 1e-6 && Math.abs(f[x][1] - A) < 1e-6 && Math.abs(f[x][2] - R) < 1e-6) return x;
            const j = f.length;
            return f.push([
              E,
              A,
              R
            ]), j;
          };
          for (let E = 1; E < b.length; E++) if (Ue === "x") for (let A = 0; A < d.length - 1; A++) {
            const R = d[A], j = d[A + 1];
            for (let x = 1; x <= Ae; x++) {
              const w = R + x / (Ae + 1) * (j - R), v = [];
              for (let F = 0; F < i.length; F++) v.push(u(i[F], w, b[E]));
              for (let F = 0; F < i.length - 1; F++) {
                const J = L.length;
                ct.add(J), G.add(J), Me.set(J, E - 1), ze.set(J, {
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
              const w = R + x / (Ae + 1) * (j - R), v = [];
              for (let F = 0; F < d.length; F++) v.push(u(w, d[F], b[E]));
              for (let F = 0; F < d.length - 1; F++) {
                const J = L.length;
                ct.add(J), G.add(J), Me.set(J, E - 1), ze.set(J, {
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
        const k = /* @__PURE__ */ new Map(), m = ht();
        for (let u = 0; u < d.length; u++) for (let E = 0; E < i.length; E++) y(E, u) || k.set(h[`${E},${u},0`], [
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
            const F = h[`${j},${x},${R}`], J = h[`${j},${x},${R + 1}`];
            let Y, ae;
            if (u.dir === "x" ? (Y = h[`${w},${v},${R}`], ae = h[`${w},${v},${R + 1}`]) : (Y = h[`${w},${v},${R}`], ae = h[`${w},${v},${R + 1}`]), F === void 0 || Y === void 0 || J === void 0 || ae === void 0) continue;
            const K = be, Z = We, de = f[F], le = f[Y], Ee = f[J], Fe = f[ae], q = [];
            for (let pe = 0; pe <= Z; pe++) {
              const te = [], fe = pe / Z;
              for (let ee = 0; ee <= K; ee++) {
                const me = ee / K, Se = (1 - fe) * ((1 - me) * de[0] + me * le[0]) + fe * ((1 - me) * Ee[0] + me * Fe[0]), se = (1 - fe) * ((1 - me) * de[1] + me * le[1]) + fe * ((1 - me) * Ee[1] + me * Fe[1]), Ie = (1 - fe) * ((1 - me) * de[2] + me * le[2]) + fe * ((1 - me) * Ee[2] + me * Fe[2]);
                pe === 0 && ee === 0 ? te.push(F) : pe === 0 && ee === K ? te.push(Y) : pe === Z && ee === 0 ? te.push(J) : pe === Z && ee === K ? te.push(ae) : (te.push(f.length), f.push([
                  Se,
                  se,
                  Ie
                ]));
              }
              q.push(te);
            }
            for (let pe = 0; pe < Z; pe++) for (let te = 0; te < K; te++) {
              const fe = q[pe][te], ee = q[pe][te + 1], me = q[pe + 1][te + 1], Se = q[pe + 1][te], se = L.length;
              ue.add(se), Me.set(se, R), L.push([
                fe,
                ee,
                me,
                Se
              ]);
            }
            if (R === 0) for (let pe = 0; pe <= K; pe++) {
              const te = q[0][pe];
              te >= I && k.set(te, [
                ...m
              ]);
            }
          }
        }
        if (Ft = /* @__PURE__ */ new Set(), Ke) {
          const u = l, E = l, A = /* @__PURE__ */ new Map(), R = (j, x, w) => `${Math.round(j * 1e4)},${Math.round(x * 1e4)},${Math.round(w * 1e4)}`;
          for (let j = 0; j < f.length; j++) A.set(R(f[j][0], f[j][1], f[j][2]), j);
          for (let j = 1; j < b.length; j++) {
            const x = b[j];
            for (let w = 0; w < i.length - 1; w++) for (let v = 0; v < d.length - 1; v++) {
              const F = i[w], J = i[w + 1], Y = d[v], ae = d[v + 1], K = [];
              for (let Z = 0; Z <= E; Z++) {
                const de = [];
                for (let le = 0; le <= u; le++) {
                  const Ee = F + le / u * (J - F), Fe = Y + Z / E * (ae - Y);
                  if (Z === 0 && le === 0) de.push(h[`${w},${v},${j}`]);
                  else if (Z === 0 && le === u) de.push(h[`${w + 1},${v},${j}`]);
                  else if (Z === E && le === 0) de.push(h[`${w},${v + 1},${j}`]);
                  else if (Z === E && le === u) de.push(h[`${w + 1},${v + 1},${j}`]);
                  else {
                    const q = R(Ee, Fe, x), pe = A.get(q);
                    if (pe !== void 0) de.push(pe);
                    else {
                      const te = f.length;
                      f.push([
                        Ee,
                        Fe,
                        x
                      ]), A.set(q, te), de.push(te);
                    }
                  }
                }
                K.push(de);
              }
              for (let Z = 0; Z < E; Z++) for (let de = 0; de < u; de++) {
                const le = K[Z][de], Ee = K[Z][de + 1], Fe = K[Z + 1][de + 1], q = K[Z + 1][de], pe = L.length;
                Ft.add(pe), Me.set(pe, j - 1), L.push([
                  le,
                  Ee,
                  Fe,
                  q
                ]);
              }
            }
          }
        }
        if (Ot && yt) {
          const u = yt === "all" || yt === "x" || yt === "perimeter", E = yt === "all" || yt === "y" || yt === "perimeter", A = b.length - 1;
          for (let R = 0; R < A; R++) {
            if (u) for (let j = 0; j < d.length; j++) {
              if (yt === "perimeter" && j !== 0 && j !== d.length - 1) continue;
              const x = Math.floor((i.length - 1) / 2);
              for (let w = 0; w < i.length - 1; w++) {
                if (yt === "perimeter" && w !== x || y(w, j) || y(w + 1, j)) continue;
                const v = h[`${w},${j},${R}`], F = h[`${w + 1},${j},${R + 1}`], J = h[`${w + 1},${j},${R}`], Y = h[`${w},${j},${R + 1}`];
                v !== void 0 && F !== void 0 && (L.push([
                  v,
                  F
                ]), Me.set(L.length - 1, R)), J !== void 0 && Y !== void 0 && (L.push([
                  J,
                  Y
                ]), Me.set(L.length - 1, R));
              }
            }
            if (E) for (let j = 0; j < i.length; j++) {
              if (yt === "perimeter" && j !== 0 && j !== i.length - 1) continue;
              const x = Math.floor((d.length - 1) / 2);
              for (let w = 0; w < d.length - 1; w++) {
                if (yt === "perimeter" && w !== x || y(j, w) || y(j, w + 1)) continue;
                const v = h[`${j},${w},${R}`], F = h[`${j},${w + 1},${R + 1}`], J = h[`${j},${w + 1},${R}`], Y = h[`${j},${w},${R + 1}`];
                v !== void 0 && F !== void 0 && (L.push([
                  v,
                  F
                ]), Me.set(L.length - 1, R)), J !== void 0 && Y !== void 0 && (L.push([
                  J,
                  Y
                ]), Me.set(L.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), Ye = [
          ...i
        ], Ze = [
          ...d
        ], mt = b[b.length - 1] || 0, setTimeout(() => {
          wt(), Xo(i, d), Nn(), qn();
        }, 50), tt(), {
          nodes: f.length,
          elements: L.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, c = 4) {
        et.clear();
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
        const b = /* @__PURE__ */ new Map(), S = ht();
        for (let $ = 0; $ < d; $++) b.set(i[$][0], [
          ...S
        ]), b.set(i[$][1], [
          ...S
        ]);
        return e.nodes.val = s, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), tt(), {
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
            _e.colMat = 1, _e.vigaMat = 1, et.clear(), nt("truss"), ps();
            break;
          }
          case "beams": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, et.clear(), nt("beams"), fs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            _e.colMat = 1, _e.vigaMat = 1, et.clear(), nt("3d"), us();
            break;
          }
          case "portico": {
            _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, nt("frame"), Oe();
            break;
          }
          case "edificio": {
            nt("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ye = [], Ke = false, ke = false, Ot = false, Oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], ke = true, Ae = 2;
            const o = ie.reduce((l, a) => l + a, 0) / ie.length, n = oe.reduce((l, a) => l + a, 0) / oe.length;
            Ue = o >= n ? "y" : "x", Ke = true, dt = 0.08, Ot = false, Oe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            nt("edificio"), _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], ke = true, Ae = 2;
            const o = ie.reduce((l, a) => l + a, 0) / ie.length, n = oe.reduce((l, a) => l + a, 0) / oe.length;
            Ue = o >= n ? "y" : "x", Ke = true, dt = 0.08, Ot = true, yt = "perimeter", Oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            nt("edificio"), _e.colMat = 0, _e.vigaMat = 0, _e.colShape = 0, ke = false;
            const o = Math.round(((_a2 = X.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = X.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Ke = true, dt = 0.15, Oe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            nt("edificio"), _e.colMat = 2, _e.vigaMat = 0, ke = false;
            const o = Math.round(((_c = X.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = X.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            ], Ke = true, dt = 0.12, Oe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            nt("edificio"), X.nPisos && (X.nPisos.val = 1), X.hPiso && (X.hPiso.val = 4.5), X.nVanosX && (X.nVanosX.val = 3), X.nVanosY && (X.nVanosY.val = 2), X.nSubViga && (X.nSubViga.val = 3), ie = [
              6,
              6,
              6
            ], oe = [
              5,
              5
            ], _e.colMat = 1, _e.vigaMat = 1, _e.steelColType = 0, _e.steelVigaType = 0, ye = [], ke = true, Ae = 2, Ue = ie[0] >= oe[0] ? "y" : "x", Ke = true, dt = 0.08, ut = 3, St = 3, Oe();
            break;
          }
          case "galpon": {
            nt("galpon"), _e.colMat = 1, _e.vigaMat = 1, Oe();
            break;
          }
          case "barra": {
            nt("barra"), Oe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            et.clear(), nt("placa-3q"), ms();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            et.clear(), nt("placa-q4"), bs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            et.clear(), nt("losa-rect"), gs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            et.clear(), nt("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            et.clear(), nt("viga-alta"), xs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            et.clear(), nt("muro-contencion"), vs();
            break;
          }
          case "zapata":
          case "footing": {
            et.clear(), nt("zapata"), ys();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            et.clear(), nt("placa-orificios"), $s();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            et.clear(), nt("col-placa"), Ms();
            break;
          }
          case "talud":
          case "slope": {
            et.clear(), nt("talud"), ws();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            et.clear(), nt("eiffel"), _s();
            break;
          }
          case "arco":
          case "arco-gateway": {
            et.clear(), nt("arco"), Ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            et.clear(), nt("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            et.clear(), nt("twisted"), Hs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            et.clear(), nt("burj"), js();
            break;
          }
          case "opera":
          case "sydney-opera": {
            et.clear(), nt("opera"), Ws();
            break;
          }
          case "diagrid":
          case "gherkin": {
            et.clear(), nt("diagrid"), Gs();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            et.clear(), nt("muro-q4"), Vn();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            et.clear(), nt("viga-q4"), Ys();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            et.clear(), nt("placa-xz"), Js();
            break;
          }
          case "pergola":
          case "cubierta": {
            et.clear(), nt("pergola"), Vs();
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
        const b = performance.now(), S = Un({
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
        return setTimeout(() => wt(), 50), tt(), S;
      },
      set(t, o) {
        X[t] ? (X[t].val = o, console.log(`${t} = ${o}`), lo(), Oe()) : bt[t] ? (bt[t].val = o, console.log(`${t} = ${o}`), lo(), Oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...X,
          ...bt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in X) o[l] = X[l].val;
          for (const l in bt) o[l] = bt[l].val;
          o.plateTheory = Re, o.supportType = Mt;
          const n = un()[T];
          return n && n[Mt] && (o.supportLabel = n[Mt].label), console.table(o), o;
        }
        if (X[t]) return X[t].val;
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
        }[Re] || Re}`), T.includes("placa") && (lo(), Oe());
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
        t && (g = t), o && (P = o), M = Ro(g, P);
        const n = Ce.querySelector("#cad3d-force-unit"), l = Ce.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = P), T && nt(T), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
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
    let bt = {};
    function nt(t) {
      var _a2, _b, _c, _d;
      T = t, ca.val = true, Mt = 0, ve && Cn(), X = {};
      const o = cs()[t];
      if (o) for (const l of o) X[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      bt = {};
      const n = ds()[t];
      if (n) for (const l of n) bt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = X.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = X.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ie = Array(l).fill(M.defaultSpan), oe = Array(a).fill(M.defaultSpan * 0.8);
        const c = Math.round(((_c = X.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = X.hPiso) == null ? void 0 : _d.val) ?? 3;
        _ = Array(c).fill(s);
      }
      lo(), setTimeout(() => {
        Ta(), Oe();
      }, 50);
    }
    function re(t) {
      var _a2, _b;
      return ((_a2 = X[t]) == null ? void 0 : _a2.val) ?? ((_b = bt[t]) == null ? void 0 : _b.val) ?? 0;
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
          et.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = re("Lvix") || 0, n = re("Lvdx") || 0, l = re("Lviy") || 0, a = re("Lvdy") || 0, c = Math.max(1, Math.round(re("nSubViga") || 3)), s = Math.max(1, Math.round(re("nSubCol") || 1)), r = re("hPiso"), p = _.length > 0 ? [
            ..._
          ] : Array(Math.round(re("nPisos"))).fill(r);
          et.building([
            ...ie
          ], [
            ...oe
          ], p, c, o, n, l, a, s);
          break;
        }
        case "galpon":
          et.galpon(re("span"), re("length"), re("height"), re("archRise"), Math.round(re("xDiv")), Math.round(re("yDiv")));
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
        if (Q.size > 0 || V.size > 0 || H) {
          const o = e.elements.val, n = o.filter((l, a) => !(Q.has(a) || V.has(a) || H && !W.has(a)));
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
      }), tt();
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
      for (let b = 1; b < a; b++) {
        const S = b / a, $ = c.length;
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
      else if (l !== 0 && n === 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || d.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || d.set(b, [
        b === 2 ? n : 0,
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
      }), tt();
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
      }), tt();
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
      }), tt();
    }
    function ms() {
      const t = re("Lx") || 15, o = re("Ly") || 10, n = re("meshSize") || 0.5, l = re("q") || -3, a = re("t") || 1, c = re("E") || 3e7, s = re("nu") || 0.3, r = c / (2 * (1 + s)), p = Re === 1 ? "Membrana" : Re === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: d, boundaryIndices: b } = xo({
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
      }), S = t * o, $ = l * S / i.length, y = new Map(b.map((h) => [
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
        const I = go(i, d, e.elementInputs.val, h);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${i.length} nodes, ${d.length} triangles, t=${a}, E=${c}, \u03BD=${s}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => wt(), 50), tt();
    }
    function bs() {
      const t = re("Lx") || 10, o = re("Ly") || 10, n = Math.round(re("nx") || 16), l = Math.round(re("ny") || 16), a = re("t") || 0.2, c = re("q") || -10, s = re("E") || 3e7, r = re("nu") || 0.3, p = Mt === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 0;
      return et.plateQ4(t, o, n, l, p, c, a, s, r, d);
    }
    function gs() {
      const t = re("a") || 6, o = re("b") || 4, n = Math.round(re("nx") || 12), l = Math.round(re("ny") || 8), a = re("t") || 0.1, c = re("q") || -10, s = re("E") || 35e6, r = re("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Re] ?? 0, d = et.plateQ4(t, o, n, l, "simply-supported", c, a, s, r, i), b = s * a * a * a / (12 * (1 - r * r));
      let S = 0;
      for (let $ = 1; $ <= 19; $ += 2) for (let y = 1; y <= 19; y += 2) {
        const f = $ * $ / (t * t) + y * y / (o * o);
        S += 1 / ($ * y * f * f);
      }
      if (S *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), d) {
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
      ], r = c.reduce((x, w) => x + w, 0), p = s.reduce((x, w) => x + w, 0), i = [
        0
      ];
      for (const x of c) i.push(i[i.length - 1] + x);
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
      for (const x of i) for (const w of d) {
        let v = 1 / 0, F = 0;
        for (let J = 0; J < f.length; J++) {
          const Y = Math.hypot(f[J][0] - x, f[J][1] - w);
          Y < v && (v = Y, F = J);
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
        k.elementResults.forEach((F, J) => {
          x.set(J, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), w.set(J, [
            F.Myy,
            F.Myy,
            F.Myy
          ]), v.set(J, [
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
      setTimeout(() => wt(), 50), tt();
    }
    function xs() {
      const t = re("L") || 4, o = re("H") || 2, n = re("t") || 0.1, l = re("E") || 2e7, a = re("nu") || 0.2, c = l / (2 * (1 + a)), s = re("q") || -100, r = re("b") || 0.8, p = re("meshSize") || 0.2, { nodes: i, elements: d, boundaryIndices: b } = xo({
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
          c
        ]))
      }, k = {
        supports: y,
        loads: z
      };
      try {
        const m = At(S, d, k, O), u = go(S, d, O, m), E = S.map((R) => [
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
      setTimeout(() => wt(), 50), tt();
    }
    function vs() {
      const t = re("H") || 4, o = re("B") || 3, n = re("tw") || 0.3, l = re("tb") || 0.4, a = re("meshSize") || 0.2, c = re("E") || 25e6, s = re("nu") || 0.2, r = c / (2 * (1 + s)), p = re("gamma") || 18, i = re("Ka") || 0.33, d = re("Es") || 5e4, b = re("nus") || 0.3, S = d / (2 * (1 + b)), $ = re("kn") || 1e6, y = re("ks") || 1e4, f = re("gammaW") || 9.81, h = re("Hw") || 3.5, I = re("qs") || 0, L = Mt, z = o * 0.3, O = o * 0.7, k = [
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
        const w = xo({
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
          const J = m[F][0], Y = m[F][1];
          Math.abs(J - n) < a * 0.6 && Y >= l - 1e-6 && v.push({
            idx: F,
            y: Y
          });
        }
        v.sort((F, J) => F.y - J.y);
        for (let F = 0; F < v.length; F++) {
          const { idx: J, y: Y } = v[F], ae = l + t - Y, K = i * p * ae + i * I;
          let Z = a;
          F > 0 && F < v.length - 1 ? Z = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? Z = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (Z = (v[F].y - v[F - 1].y) / 2);
          const de = K * Z;
          Math.abs(de) > 1e-10 && A.set(J, [
            de,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((F, J) => [
            J,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, J) => [
            J,
            c
          ])),
          thicknesses: new Map(u.map((F, J) => [
            J,
            n
          ])),
          poissonsRatios: new Map(u.map((F, J) => [
            J,
            s
          ])),
          shearModuli: new Map(u.map((F, J) => [
            J,
            r
          ]))
        };
      } else if (L === 1 || L === 2) {
        const w = O, v = l + t;
        if (L === 2) {
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
          ], J = Math.max(3, Math.ceil((v - l) / a)), Y = [];
          for (let se = 0; se <= J; se++) Y.push([
            n,
            l + se * (v - l) / J,
            0
          ]);
          const ae = xo({
            points: [
              ...F,
              ...Y
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
          const K = a * 0.4, Z = [];
          for (let se = 0; se < m.length; se++) {
            const Ie = m[se][0], Ge = m[se][1];
            Math.abs(Ie - n) < K && Ge >= l - K && Z.push(se);
          }
          Z.sort((se, Ie) => m[se][1] - m[Ie][1]);
          const de = [
            Z[0]
          ];
          for (let se = 1; se < Z.length; se++) {
            const Ie = m[Z[se]][1] - m[de[de.length - 1]][1];
            Math.abs(Ie) > a * 0.05 && de.push(Z[se]);
          }
          Z.length = 0, Z.push(...de);
          const le = /* @__PURE__ */ new Map();
          for (const se of Z) {
            const Ie = m.length;
            m.push([
              m[se][0],
              m[se][1],
              m[se][2]
            ]), le.set(se, Ie);
          }
          const Ee = u.length, Fe = [];
          for (let se = 0; se < Ee; se++) {
            const Ie = u[se], Ge = (m[Ie[0]][0] + m[Ie[1]][0] + m[Ie[2]][0]) / 3, st = (m[Ie[0]][1] + m[Ie[1]][1] + m[Ie[2]][1]) / 3, lt = Ge >= -z && Ge <= O && st >= 0 && st <= l, ge = Ge >= 0 && Ge <= n && st >= l && st <= l + t, Ne = lt || ge;
            if (Fe.push(!Ne), !Ne) for (let ot = 0; ot < Ie.length; ot++) {
              const vt = le.get(Ie[ot]);
              vt !== void 0 && (Ie[ot] = vt);
            }
          }
          const q = u.length;
          for (let se = 0; se < Z.length - 1; se++) {
            const Ie = Z[se], Ge = Z[se + 1], st = le.get(Ie), lt = le.get(Ge);
            u.push([
              Ge,
              Ie,
              st,
              lt
            ]);
          }
          const pe = u.length - q, te = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map();
          for (let se = 0; se < Ee; se++) Fe[se] ? (te.set(se, d), fe.set(se, d), me.set(se, b), Se.set(se, S), ee.set(se, 1)) : (te.set(se, c), fe.set(se, c), me.set(se, s), Se.set(se, r), ee.set(se, 1));
          for (let se = q; se < u.length; se++) te.set(se, $), fe.set(se, 0), me.set(se, 0), Se.set(se, y), ee.set(se, 0);
          R = {
            elasticities: te,
            elasticitiesOrthogonal: fe,
            thicknesses: ee,
            poissonsRatios: me,
            shearModuli: Se
          };
          for (let se = 0; se < m.length; se++) {
            const Ie = m[se][0], Ge = m[se][1];
            Math.abs(Ge) < 1e-6 ? E.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ie - w) < a * 0.1 && E.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < Ee; se++) {
            if (!Fe[se]) continue;
            const Ie = u[se], Ge = m[Ie[0]], st = m[Ie[1]], lt = m[Ie[2]], ge = Math.abs((st[0] - Ge[0]) * (lt[1] - Ge[1]) - (lt[0] - Ge[0]) * (st[1] - Ge[1])) / 2, Ne = -p * ge / 3;
            for (const ot of Ie) {
              const vt = A.get(ot) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              vt[1] += Ne, A.set(ot, vt);
            }
          }
          if (I > 0) {
            const se = [];
            for (let Ie = 0; Ie < m.length; Ie++) {
              const Ge = m[Ie][0], st = m[Ie][1];
              Math.abs(st - v) < a * 0.1 && Ge > n - 1e-6 && se.push({
                idx: Ie,
                x: Ge
              });
            }
            se.sort((Ie, Ge) => Ie.x - Ge.x);
            for (let Ie = 0; Ie < se.length; Ie++) {
              let Ge = a;
              Ie > 0 && Ie < se.length - 1 ? Ge = (se[Ie + 1].x - se[Ie - 1].x) / 2 : Ie === 0 && se.length > 1 ? Ge = (se[1].x - se[0].x) / 2 : Ie === se.length - 1 && se.length > 1 && (Ge = (se[Ie].x - se[Ie - 1].x) / 2);
              const st = -I * Ge, lt = A.get(se[Ie].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              lt[1] += st, A.set(se[Ie].idx, lt);
            }
          }
          console.log(`  Interfaz Goodman: ${Z.length} nodos interfaz, ${pe} elem interfaz, kn=${$}, ks=${y}`);
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
          ], J = [
            [
              n,
              l,
              0
            ]
          ], Y = xo({
            points: [
              ...F,
              ...J
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
          m = Y.nodes, u = Y.elements;
          const ae = (q) => {
            const pe = (m[q[0]][0] + m[q[1]][0] + m[q[2]][0]) / 3, te = (m[q[0]][1] + m[q[1]][1] + m[q[2]][1]) / 3, fe = pe >= -z && pe <= O && te >= 0 && te <= l, ee = pe >= 0 && pe <= n && te >= l && te <= l + t;
            return fe || ee;
          }, K = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Fe = [];
          for (let q = 0; q < u.length; q++) {
            const pe = ae(u[q]);
            Fe.push(!pe), pe ? (K.set(q, c), Z.set(q, c), le.set(q, s), Ee.set(q, r), de.set(q, 1)) : (K.set(q, d), Z.set(q, d), le.set(q, b), Ee.set(q, S), de.set(q, 1));
          }
          R = {
            elasticities: K,
            elasticitiesOrthogonal: Z,
            thicknesses: de,
            poissonsRatios: le,
            shearModuli: Ee
          };
          for (let q = 0; q < m.length; q++) {
            const pe = m[q][0], te = m[q][1];
            Math.abs(te) < 1e-6 ? E.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(pe - w) < a * 0.1 && E.set(q, [
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
            const pe = u[q], te = m[pe[0]], fe = m[pe[1]], ee = m[pe[2]], me = Math.abs((fe[0] - te[0]) * (ee[1] - te[1]) - (ee[0] - te[0]) * (fe[1] - te[1])) / 2, Se = -p * me / 3;
            for (const se of pe) {
              const Ie = A.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ie[1] += Se, A.set(se, Ie);
            }
          }
          if (I > 0) {
            const q = [];
            for (let pe = 0; pe < m.length; pe++) {
              const te = m[pe][0], fe = m[pe][1];
              Math.abs(fe - v) < a * 0.1 && te > n - 1e-6 && q.push({
                idx: pe,
                x: te
              });
            }
            q.sort((pe, te) => pe.x - te.x);
            for (let pe = 0; pe < q.length; pe++) {
              let te = a;
              pe > 0 && pe < q.length - 1 ? te = (q[pe + 1].x - q[pe - 1].x) / 2 : pe === 0 && q.length > 1 ? te = (q[1].x - q[0].x) / 2 : pe === q.length - 1 && q.length > 1 && (te = (q[pe].x - q[pe - 1].x) / 2);
              const fe = -I * te, ee = A.get(q[pe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += fe, A.set(q[pe].idx, ee);
            }
          }
        }
      }
      if (L === 3) {
        const w = xo({
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
        for (let ae = 0; ae < m.length; ae++) Math.abs(m[ae][1]) < 1e-6 && E.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, F = Math.min(h, t), J = v - F, Y = [];
        for (let ae = 0; ae < m.length; ae++) {
          const K = m[ae][0], Z = m[ae][1];
          Math.abs(K - n) < a * 0.6 && Z >= l - 1e-6 && Y.push({
            idx: ae,
            y: Z
          });
        }
        Y.sort((ae, K) => ae.y - K.y);
        for (let ae = 0; ae < Y.length; ae++) {
          const { idx: K, y: Z } = Y[ae], de = Math.max(0, v - Z);
          if (de <= 0 || Z < J - 1e-6) continue;
          const le = Math.min(de, F), Ee = f * le;
          let Fe = a;
          ae > 0 && ae < Y.length - 1 ? Fe = (Y[ae + 1].y - Y[ae - 1].y) / 2 : ae === 0 && Y.length > 1 ? Fe = (Y[1].y - Y[0].y) / 2 : ae === Y.length - 1 && Y.length > 1 && (Fe = (Y[ae].y - Y[ae - 1].y) / 2);
          const q = Ee * Fe;
          Math.abs(q) > 1e-10 && A.set(K, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((ae, K) => [
            K,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, K) => [
            K,
            c
          ])),
          thicknesses: new Map(u.map((ae, K) => [
            K,
            n
          ])),
          poissonsRatios: new Map(u.map((ae, K) => [
            K,
            s
          ])),
          shearModuli: new Map(u.map((ae, K) => [
            K,
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
        const w = At(m, u, j, R), v = u.filter((de) => de.length === 3), F = {};
        for (const de of Object.keys(R)) {
          const le = R[de];
          if (le && le instanceof Map) {
            const Ee = /* @__PURE__ */ new Map();
            let Fe = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (le.has(q) && Ee.set(Fe, le.get(q)), Fe++);
            F[de] = Ee;
          }
        }
        const J = go(m, v, F, w), Y = m.map((de) => [
          de[0],
          0,
          de[1]
        ]);
        if (e.nodes.val = Y, e.elements.val = v, w && w.deformations) {
          const de = /* @__PURE__ */ new Map();
          w.deformations.forEach((le, Ee) => {
            de.set(Ee, [
              le[0],
              le[2],
              le[1],
              le[3],
              le[5],
              le[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: de
          });
        }
        const ae = /* @__PURE__ */ new Map();
        E.forEach((de, le) => ae.set(le, de));
        const K = /* @__PURE__ */ new Map();
        A.forEach((de, le) => K.set(le, [
          de[0],
          de[2],
          de[1],
          de[3],
          de[5],
          de[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: K
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Z = 0;
        w && w.deformations && w.deformations.forEach((de) => {
          const le = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          Z = Math.max(Z, le);
        }), console.log(`Muro Contencion [${x[L]}]: ${m.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${i}, gamma=${p}, qs=${I}`), L === 1 && console.log(`  Es=${d}, nus=${b}`), L === 2 && console.log(`  Es=${d}, nus=${b}, kn=${$}, ks=${y}`), L === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${Z.toExponential(4)}`);
      } catch (w) {
        console.warn("Muro Contencion failed:", w.message);
      }
      setTimeout(() => wt(), 50), tt();
    }
    function ys() {
      const t = re("Lx") || 2, o = re("Ly") || 2, n = re("t") || 0.5, l = re("colA") || 0.4, a = re("colH") || 1.5, c = Math.round(re("nx") || 8), s = Math.round(re("ny") || 8), r = re("E") || 25e6, p = re("nu") || 0.2, i = re("P") || -500, d = re("Mx") || 0, b = re("My") || 0, S = re("ks") || 2e4, $ = t / c, y = o / s, f = t / 2, h = o / 2, I = l / 2, L = [];
      for (let E = 0; E <= s; E++) for (let A = 0; A <= c; A++) {
        const R = E * (c + 1) + A;
        let j = $, x = y;
        (A === 0 || A === c) && (j = $ / 2), (E === 0 || E === s) && (x = y / 2), L.push({
          node: R,
          dof: 0,
          k: S * j * x
        });
      }
      let z = 0;
      for (let E = 0; E <= s; E++) for (let A = 0; A <= c; A++) Math.abs(A * $ - f) <= I + 1e-6 && Math.abs(E * y - h) <= I + 1e-6 && z++;
      const O = i / Math.max(z, 1), k = [];
      for (let E = 0; E <= s; E++) for (let A = 0; A <= c; A++) {
        const R = A * $, j = E * y;
        Math.abs(R - f) <= I + 1e-6 && Math.abs(j - h) <= I + 1e-6 && k.push({
          node: E * (c + 1) + A,
          dof: 0,
          value: O
        });
      }
      if (Math.abs(d) > 1e-6) {
        const E = I > 1e-6 ? I : y, A = d / E;
        for (let R = 0; R <= s; R++) for (let j = 0; j <= c; j++) {
          const x = j * $, w = R * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
            const v = w - h;
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
      if (Math.abs(b) > 1e-6) {
        const E = I > 1e-6 ? I : $, A = b / E;
        for (let R = 0; R <= s; R++) for (let j = 0; j <= c; j++) {
          const x = j * $, w = R * y;
          if (Math.abs(x - f) <= I + 1e-6 && Math.abs(w - h) <= I + 1e-6) {
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
      }[Re] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${s} elem`), console.log(`  col=${l}m, P=${i}, Mx=${d}, My=${b}, ks=${S}`);
      try {
        const E = Un({
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
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const A = E.nodeResults.map((J) => [
          J.x,
          J.y,
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
        const j = E.elementResults.map((J) => [
          ...J.nodes
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
        E.nodeResults.forEach((J, Y) => {
          x.set(Y, [
            0,
            0,
            J.w,
            J.bx,
            J.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((J, Y) => {
          const ae = J.x, K = J.y;
          (ae < 1e-6 || ae > t - 1e-6 || K < 1e-6 || K > o - 1e-6) && w.set(Y, [
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
          supports: w,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const J = E.elementResults.length, Y = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
          E.elementResults.forEach((Z, de) => {
            Y.set(de, [
              Z.Mxx,
              Z.Mxx,
              Z.Mxx
            ]), ae.set(de, [
              Z.Myy,
              Z.Myy,
              Z.Myy
            ]), K.set(de, [
              Z.Mxy,
              Z.Mxy,
              Z.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: Y,
            bendingYY: ae,
            bendingXY: K
          };
        }
        const F = Qe();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => wt(), 50), tt();
    }
    function $s() {
      const t = re("Lx") || 0.4, o = re("Ly") || 0.4, n = re("t") || 0.025, l = re("dBolt") || 0.022, a = re("sx") || 0.28, c = re("sy") || 0.28, s = re("colA") || 0.2, r = re("meshSize") || 8e-3, p = re("E") || 2e8, i = re("nu") || 0.3, d = p / (2 * (1 + i)), b = re("P") || -200, S = Math.round(re("nBolts") || 4), $ = t / 2, y = o / 2, f = l / 2, h = s / 2, I = [];
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
      }), O = (x, w) => {
        for (const [v, F] of I) if ((x - v) * (x - v) + (w - F) * (w - F) < f * f) return true;
        return false;
      }, k = z.filter((x) => {
        const w = (L[x[0]][0] + L[x[1]][0] + L[x[2]][0]) / 3, v = (L[x[0]][1] + L[x[1]][1] + L[x[2]][1]) / 3;
        return !O(w, v);
      }), m = L, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < m.length; x++) {
        const w = m[x][0], v = m[x][1];
        for (const [F, J] of I) {
          const Y = Math.sqrt((w - F) * (w - F) + (v - J) * (v - J));
          Y >= f * 0.7 && Y <= f * 1.5 && u.set(x, [
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
          const F = E.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += R, E.set(x, F);
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
          i
        ])),
        shearModuli: new Map(k.map((x, w) => [
          w,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${s * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${k.length} triangulos, ${m.length} nodos`);
      try {
        const x = At(m, k, {
          supports: u,
          loads: E
        }, j), w = go(m, k, j, x);
        e.nodes.val = m, e.elements.val = k, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), w && e.analyzeOutputs && (e.analyzeOutputs.val = w);
        let v = 0;
        x && x.deformations && x.deformations.forEach((F) => {
          const J = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          v = Math.max(v, J);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => wt(), 50), tt();
    }
    function Ms() {
      const t = re("colB") || 0.3, o = re("colH") || 0.3, n = re("colT") || 8e-3, l = re("colLen") || 1.5, a = re("Lx") || 0.45, c = re("Ly") || 0.45, s = re("tPlaca") || 0.025, r = re("dBolt") || 0.022, p = re("sx") || 0.32, i = re("sy") || 0.32, d = Math.round(re("nSubColV") || 6), b = Math.round(re("nSubColH") || 4), S = Math.round(re("nSubPlaca") || 10), $ = re("E") || 2e8, y = re("nu") || 0.3, f = $ / (2 * (1 + y)), h = re("P") || -300, I = a / 2, L = c / 2, z = r / 2, O = t / 2, k = o / 2, m = [], u = [], E = S, A = a / E, R = c / E, j = (fe, ee) => ee * (E + 1) + fe;
      for (let fe = 0; fe <= E; fe++) for (let ee = 0; ee <= E; ee++) m.push([
        ee * A,
        fe * R,
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
      ], w = (fe, ee) => {
        for (const [me, Se] of x) if ((fe - me) * (fe - me) + (ee - Se) * (ee - Se) < z * z) return true;
        return false;
      }, v = u.length;
      for (let fe = 0; fe < E; fe++) for (let ee = 0; ee < E; ee++) {
        const me = (ee + 0.5) * A, Se = (fe + 0.5) * R;
        w(me, Se) || u.push([
          j(ee, fe),
          j(ee + 1, fe),
          j(ee + 1, fe + 1),
          j(ee, fe + 1)
        ]);
      }
      const F = u.length - v, J = d, Y = b, ae = [
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
      ], K = u.length, Z = [
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
      ], de = (fe, ee) => {
        for (let me = 0; me < (E + 1) * (E + 1); me++) if (Math.abs(m[me][0] - fe) < A * 0.3 && Math.abs(m[me][1] - ee) < R * 0.3 && Math.abs(m[me][2]) < 1e-6) return me;
        return -1;
      };
      for (const [fe, ee] of Z) {
        const [me, Se] = ae[fe], [se, Ie] = ae[ee], Ge = [];
        for (let st = 0; st <= J; st++) {
          const lt = [], ge = st / J * l;
          for (let Ne = 0; Ne <= Y; Ne++) {
            const ot = Ne / Y, vt = me + ot * (se - me), to = Se + ot * (Ie - Se);
            if (st === 0) {
              const Wt = de(vt, to);
              if (Wt >= 0) {
                lt.push(Wt);
                continue;
              }
            }
            let Gt = -1;
            for (let Wt = 0; Wt < m.length; Wt++) if (Math.abs(m[Wt][0] - vt) < 1e-6 && Math.abs(m[Wt][1] - to) < 1e-6 && Math.abs(m[Wt][2] - ge) < 1e-6) {
              Gt = Wt;
              break;
            }
            Gt >= 0 ? lt.push(Gt) : (lt.push(m.length), m.push([
              vt,
              to,
              ge
            ]));
          }
          Ge.push(lt);
        }
        for (let st = 0; st < J; st++) for (let lt = 0; lt < Y; lt++) u.push([
          Ge[st][lt],
          Ge[st][lt + 1],
          Ge[st + 1][lt + 1],
          Ge[st + 1][lt]
        ]);
      }
      const le = u.length - K, Ee = /* @__PURE__ */ new Map();
      for (let fe = 0; fe < (E + 1) * (E + 1); fe++) {
        const ee = m[fe][0], me = m[fe][1];
        for (const [Se, se] of x) {
          const Ie = Math.sqrt((ee - Se) * (ee - Se) + (me - se) * (me - se));
          Ie >= z * 0.5 && Ie <= z * 2 && Ee.set(fe, [
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
      const pe = h / Math.max(q.length, 1);
      for (const fe of q) Fe.set(fe, [
        0,
        0,
        pe,
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
      for (let fe = v; fe < v + F; fe++) te.elasticities.set(fe, $), te.poissonsRatios.set(fe, y), te.thicknesses.set(fe, s), te.shearModuli.set(fe, f);
      for (let fe = K; fe < K + le; fe++) te.elasticities.set(fe, $), te.poissonsRatios.set(fe, y), te.thicknesses.set(fe, n), te.shearModuli.set(fe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${c * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${le} Q4 columna = ${u.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const fe = At(m, u, {
          supports: Ee,
          loads: Fe
        }, te), ee = go(m, u, te, fe);
        e.nodes.val = m, e.elements.val = u, fe && e.deformOutputs && (e.deformOutputs.val = fe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ee,
          loads: Fe
        }), e.elementInputs && (e.elementInputs.val = te), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let me = 0;
        (fe == null ? void 0 : fe.deformations) && fe.deformations.forEach((Se) => {
          const se = Math.sqrt(Se[0] * Se[0] + Se[1] * Se[1] + Se[2] * Se[2]);
          me = Math.max(me, se);
        }), console.log(`  max|u| = ${me.toExponential(4)}`);
      } catch (fe) {
        console.warn("Col+Placa failed:", fe.message), e.nodes.val = m, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ee,
          loads: Fe
        });
      }
      setTimeout(() => wt(), 50), tt();
    }
    function ws() {
      const t = re("H") || 6, o = re("angle") || 45, n = re("bTop") || 3, l = re("bBot") || 3, a = re("meshSize") || 2, c = re("E") || 5e4, s = re("nu") || 0.3, r = re("gamma") || 18, p = re("c") || 15, i = re("phi") || 30, d = re("qs") || 0, b = t / Math.tan(o * Math.PI / 180), S = l + b + n, $ = t, y = [
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
          E: c,
          nu: s,
          gamma: r,
          c: p,
          phi: i,
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
          const [v, F] = u.displacements[w];
          A.set(w, [
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
          const F = Math.sqrt(w * w + v * v);
          j = Math.max(j, F);
        }
        let x = 0;
        for (const w of u.plasticStrain) x = Math.max(x, w);
        console.log(`Talud SRM: ${I.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${j.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (k) {
        console.warn("Talud SRM failed:", k.message);
      }
      setTimeout(() => wt(), 50), tt();
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
      const o = os.find((l) => l.id === U.forceId), n = Vo.find((l) => l.id === U.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Tn(t) {
      const o = os.find((l) => l.id === U.forceId), n = Vo.find((l) => l.id === U.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function zn() {
      return U.label;
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
      const c = _e.steelVigaType, s = c === 0 ? mn() : bn();
      if (_e.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = `b${n}${r}`, d = `h${n}${r}`, b = {};
          b[i] = +It(p.b).toFixed(2), b[d] = +It(p.h).toFixed(2), t.addBinding(b, i, {
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
      const n = M, l = Math.round(((_a2 = X.nPisos) == null ? void 0 : _a2.val) ?? 3), a = $a(), c = Ma(), s = ie.length || 1, r = oe.length || 1;
      for (; _e.perFloor.length < l; ) {
        const m = _e.perFloor.length > 0 ? JSON.parse(JSON.stringify(_e.perFloor[_e.perFloor.length - 1])) : io(s, r);
        _e.perFloor.push(m);
      }
      _e.perFloor.length > l && (_e.perFloor.length = l);
      for (const m of _e.perFloor) {
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
        colMat: _e.colMat
      };
      if (Rt.addBinding(p, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        _e.colMat = m.value, No(), Oe();
      }), _e.colMat === 0) {
        const m = {
          forma: _e.colShape
        };
        Rt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (E) => {
          _e.colShape = E.value, No(), Oe();
        });
        const u = {
          fc: +To(_e.fc).toFixed(1)
        };
        Rt.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${zn()})`
        }), Rt.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (_e.fc = Tn(E.value), Oe());
        });
      } else if (_e.colMat === 1) {
        const m = {
          colType: _e.steelColType
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
          _e.steelColType = u.value, No(), Oe();
        });
      }
      Rt.addBlade({
        view: "separator"
      });
      const i = {
        vigaMat: _e.vigaMat
      };
      if (Rt.addBinding(i, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        _e.vigaMat = m.value, No(), Oe();
      }), _e.vigaMat === 1) {
        const m = {
          vigaType: _e.steelVigaType
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
          _e.steelVigaType = u.value, No(), Oe();
        });
      }
      const d = _e.steelColType === 0 ? mn() : bn();
      _e.steelVigaType === 0 ? mn() : bn();
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
        const u = _e.perFloor[m], E = Rt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (_e.colMat === 0) if (_e.colShape === 1) {
          const A = {
            dCol: +It(u.dCol).toFixed(2)
          };
          E.addBinding(A, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), E.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = kt(R.value), Oe());
          });
        } else {
          const A = {
            bCol: +It(u.bCol).toFixed(2),
            hCol: +It(u.hCol).toFixed(2)
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
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = kt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = kt(R.value), Oe());
          });
        }
        else if (_e.colMat === 1) if (_e.steelColType <= 1) {
          const A = {
            col: u.colProfileIdx
          };
          E.addBinding(A, "col", {
            label: "Columna",
            options: d
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Oe();
          });
        } else if (_e.steelColType === 2) {
          const A = {
            bf: +It(u.colBf ?? 0.3).toFixed(3),
            h: +It(u.colHf ?? 0.3).toFixed(3),
            tf: +It(u.colTf ?? 0.02).toFixed(3),
            tw: +It(u.colTw ?? 0.012).toFixed(3)
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
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = kt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = kt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = kt(R.value), Oe()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = kt(R.value), Oe());
          });
        } else {
          const A = {
            bc: +It(u.colBc ?? 0.3).toFixed(3),
            hc: +It(u.colHc ?? 0.3).toFixed(3),
            t: +It(u.colT ?? 0.01).toFixed(3)
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
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${zn()})`
          }), E.addBinding(A, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", (w) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = w.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = kt(w.value), Oe()), ((_b = w.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = kt(w.value), Oe()), ((_c = w.target) == null ? void 0 : _c.key) === "t" && (u.colT = kt(w.value), Oe()), ((_d = w.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Tn(w.value), Oe()), ((_e2 = w.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = w.value, Oe()), ((_f = w.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Tn(w.value), Oe()), ((_g = w.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = w.value, Oe());
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
      Rt.addBlade({
        view: "separator"
      });
      const S = Rt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), $ = {
        activar: ke,
        direccion: Ue === "x" ? 0 : 1,
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (ke = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Ue = m.value === 0 ? "x" : "y", Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ae = Math.round(m.value), Oe());
      }), Rt.addBlade({
        view: "separator"
      });
      const y = Rt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ke,
        espesor: +It(dt).toFixed(3),
        subdivX: ut,
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ke = m.value, Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (dt = kt(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (ut = Math.round(m.value), Oe()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (St = Math.round(m.value), Oe());
      }), Rt.addBlade({
        view: "separator"
      });
      const h = Rt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +It(je).toFixed(3),
        subdivH: We,
        subdivW: be
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (je = kt(m.value), Oe()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (We = Math.round(m.value), Oe()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(m.value), Oe());
      });
      const L = ie.length || 1, z = oe.length || 1, O = L + 1, k = z + 1;
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
    function lo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ce || (ce = t.innerHTML), $e) {
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
        for (const s of n) a[s.key] = X[s.key].val;
        for (const s of n) $e.addBinding(a, s.key, {
          min: X[s.key].min,
          max: X[s.key].max,
          step: X[s.key].step,
          label: X[s.key].label
        });
        const c = $e.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of n) {
          const r = {
            min: X[s.key].min,
            max: X[s.key].max
          };
          c.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            X[s.key] && (X[s.key].min = r.min, X[s.key].max = r.max, X[s.key].val < r.min && (X[s.key].val = r.min), X[s.key].val > r.max && (X[s.key].val = r.max)), lo(), Oe();
          });
        }
        $e.on("change", (s) => {
          var _a2, _b;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && X[r]) {
            if (X[r].val = s.value, T === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const p = Math.round(X.nVanosX.val), i = Math.round(X.nVanosY.val);
                for (; ie.length < p; ) ie.push(ie[ie.length - 1] ?? M.defaultSpan);
                for (ie.length > p && (ie.length = p); oe.length < i; ) oe.push(oe[oe.length - 1] ?? M.defaultSpan * 0.8);
                oe.length > i && (oe.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const p = Math.round(X.nPisos.val), i = ((_b = X.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; _.length < p; ) _.push(_[_.length - 1] ?? i);
                _.length > p && (_.length = p);
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
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = X.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = X.Lvdx) == null ? void 0 : _b.val) || 0, b = ((_c = X.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = X.Lvdy) == null ? void 0 : _d.val) || 0;
            let $ = "X: ";
            i > 0 && ($ += `\u251C${i.toFixed(1)}\u2524`);
            for (let h = 0; h < ie.length; h++) $ += `[${p[h + (i > 0 ? 1 : 0)]}]\u2500\u2500${ie[h].toFixed(1)}\u2500\u2500`;
            $ += `[${p[ie.length + (i > 0 ? 1 : 0)]}]`, d > 0 && ($ += `\u251C${d.toFixed(1)}\u2524`);
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
            po = new on({
              title: `Luces (${s.length})`,
              container: a
            });
            const p = po.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let d = 0; d < ie.length; d++) {
              const b = d, S = {
                v: ie[d]
              };
              p.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", ($) => {
                ie[b] = $.value, Oe();
              });
            }
            const i = po.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let d = 0; d < oe.length; d++) {
              const b = d, S = {
                v: oe[d]
              };
              i.addBinding(S, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", ($) => {
                oe[b] = $.value, Oe();
              });
            }
            if (_.length > 0) {
              const d = po.addFolder({
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
            teoria: Re
          };
          $e.addBinding(c, "teoria", {
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
        co = new on({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = bt[s.key].val;
        for (const s of l) co.addBinding(a, s.key, {
          min: bt[s.key].min,
          max: bt[s.key].max,
          step: bt[s.key].step,
          label: bt[s.key].label
        });
        const c = co.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of l) {
          const r = {
            min: bt[s.key].min,
            max: bt[s.key].max
          };
          c.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), c.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), c.on("change", () => {
            bt[s.key] && (bt[s.key].min = r.min, bt[s.key].max = r.max, bt[s.key].val < r.min && (bt[s.key].val = r.min), bt[s.key].val > r.max && (bt[s.key].val = r.max)), lo(), Oe();
          });
        }
        co.on("change", (s) => {
          var _a2;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && bt[r]) {
            if (bt[r].val = s.value, e.nodeInputs) {
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
          if (X[a]) X[a].val = c, Oe(), lo();
          else if (bt[a]) {
            if (bt[a].val = c, e.nodeInputs) {
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
          for (const c in X) a[c] = X[c].val;
          for (const c in bt) a[c] = bt[c].val;
          return a;
        },
        setGenerator: nt,
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
          c.addBinding(d, r, {
            label: i,
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
          c.addBinding(d, r, {
            label: i
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
          c.addBinding(d, r, {
            label: i
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
            label: i
          };
          p.min !== void 0 && (b.min = p.min), p.max !== void 0 && (b.max = p.max), p.step !== void 0 && (b.step = p.step), c.addBinding(d, r, b).on("change", (S) => {
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ce && (n.innerHTML = ce);
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
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = P, c = g, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${T || "custom"}`), s.push(`# Units: ${c}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((i, d) => {
        s.push(`  ${String(d).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((i, d) => {
        const b = i.map((S) => String(S).padStart(6)).join("");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((i, d) => {
        const b = i.map((S) => S ? "  1" : "  0").join("");
        s.push(`  ${String(d).padStart(4)} ${b}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((i, d) => {
        const b = i.map((S) => S.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
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
        ], d = "# elem  " + i.map((b) => b.name.padStart(12)).join(" ");
        s.push(d);
        for (let b = 0; b < o.length; b++) {
          const S = i.map(($) => {
            var _a3;
            const y = (_a3 = $.map) == null ? void 0 : _a3.get(b);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(b).padStart(4)}  ${S}`);
        }
        s.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (s.push(`## DISPLACEMENTS (${r.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, d) => {
        const b = i.map((S) => S.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((i, d) => {
        const b = i.map((S) => S.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${b}`);
      }), s.push("")), T) {
        s.push("## CLI COMMAND");
        const i = Object.entries(X).map(([d, b]) => `${d}=${b.val}`).join(" ");
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
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((d, b) => c.supports.push({
          node: b,
          dofs: d
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((d, b) => c.loads.push({
          node: b,
          forces: d
        }))), a && (c.properties = {}, a.elasticities && (c.properties.E = Object.fromEntries(a.elasticities)), a.areas && (c.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (c.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (c.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (c.displacements = {}, s.forEach((d, b) => c.displacements[b] = d));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (c.reactions = {}, r.forEach((d, b) => c.reactions[b] = d));
        const p = Pt.querySelector("#export-text");
        p.value = JSON.stringify(c, null, 2);
        const i = Pt.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function tt() {
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
      if (!De || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const c = Ua(t, o, n, l, Math.min(a, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Le = c, Te = t.map((i) => [
            ...i
          ]), xe = 0;
          const { extent: s } = $o(), r = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let d = 0; d < t.length; d++) {
              const b = r[d * 6] || 0, S = r[d * 6 + 1] || 0, $ = r[d * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(b * b + S * S + $ * $));
            }
            Je = i > 1e-12 ? s * 0.15 / i : 1;
          }
          const p = `${T} \u2014 ${t.length}n ${o.length}e`;
          ft.render(c, {
            title: p
          }), ft.div.style.display = "", Qo(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Le = null;
      }
    }
    function Cn() {
      ve && (cancelAnimationFrame(ve), ve = 0), Te.length > 0 && (e.nodes.val = Te.map((o) => [
        ...o
      ]));
      const t = Qe();
      t && t.scene.traverse((o) => {
        var _a2;
        o.isMesh && ((_a2 = o.material) == null ? void 0 : _a2.vertexColors) && o.visible === false && (o.visible = true);
      }), ft.div.style.display = "none", Le = null;
    }
    function Qo() {
      var _a2;
      if (ve && cancelAnimationFrame(ve), !(Le == null ? void 0 : Le.modeShapes) || !Te.length) return;
      const t = Le.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Le.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = Te.length, c = e.elements.rawVal, { extent: s } = $o(), r = Ce.querySelector("#cad3d-modal-scale"), p = r && parseFloat(r.value) || 15;
      let i = 0;
      for (let z = 0; z < a; z++) {
        const O = t[z * 6] || 0, k = t[z * 6 + 1] || 0, m = t[z * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(O * O + k * k + m * m));
      }
      const d = i > 1e-12 ? s * p / 100 / i : 1, b = Qe();
      if (!b) return;
      let S = null, $ = null, y = null;
      b.scene.traverse((z) => {
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
            const [E, A] = h[u];
            I[u * 6] = f[E * 3], I[u * 6 + 1] = f[E * 3 + 1], I[u * 6 + 2] = f[E * 3 + 2], I[u * 6 + 3] = f[A * 3], I[u * 6 + 4] = f[A * 3 + 1], I[u * 6 + 5] = f[A * 3 + 2];
          }
          const k = $.geometry, m = k.getAttribute("position");
          m && m.array.length === I.length ? (m.array.set(I), m.needsUpdate = true) : k.setAttribute("position", new Lo(I.slice(), 3));
        }
        if (y) {
          const k = [];
          for (const m of c) if (m.length === 3) {
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
          for (const J of u) w = Math.max(w, k(t[J][0])), v = Math.max(v, k(t[J][1]));
          const F = /* @__PURE__ */ new Map();
          for (const J of u) {
            const Y = k(t[J][2]);
            F.has(Y) || F.set(Y, []), F.get(Y).push(J);
          }
          F.forEach((J) => {
            if (I !== 0) {
              const Y = /* @__PURE__ */ new Set();
              for (const ae of J) if (k(t[ae][0]) === w) {
                const K = k(t[ae][1]);
                Y.has(K) || (Y.add(K), E.add(ae));
              }
            }
            if (L !== 0) {
              const Y = /* @__PURE__ */ new Set();
              for (const ae of J) if (k(t[ae][1]) === v) {
                const K = k(t[ae][0]);
                Y.has(K) || (Y.add(K), A.add(ae));
              }
            }
          });
        }
        const R = 9.81, j = /* @__PURE__ */ new Map();
        for (let w = 0; w < o.length; w++) {
          const v = o[w], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(w)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const J = ((_b = l.areas) == null ? void 0 : _b.get(w)) ?? 0, Y = t[v[0]], ae = t[v[1]], K = Math.sqrt((ae[0] - Y[0]) ** 2 + (ae[1] - Y[1]) ** 2 + (ae[2] - Y[2]) ** 2), de = -(F * J * K * R) / 2;
              j.set(v[0], (j.get(v[0]) ?? 0) + de), j.set(v[1], (j.get(v[1]) ?? 0) + de);
            } else if (v.length >= 3) {
              const J = ((_c = l.thicknesses) == null ? void 0 : _c.get(w)) ?? 0;
              let Y = 0;
              if (v.length === 3) {
                const [Z, de, le] = v.map((Ee) => t[Ee]);
                Y = 0.5 * Math.abs((de[0] - Z[0]) * (le[1] - Z[1]) - (le[0] - Z[0]) * (de[1] - Z[1]));
              } else if (v.length === 4) {
                const [Z, de, le, Ee] = v.map((Fe) => t[Fe]);
                if (Y = 0.5 * Math.abs((de[0] - Z[0]) * (le[1] - Z[1]) - (le[0] - Z[0]) * (de[1] - Z[1])) + 0.5 * Math.abs((le[0] - Z[0]) * (Ee[1] - Z[1]) - (Ee[0] - Z[0]) * (le[1] - Z[1])), Y < 1e-10) {
                  const Fe = [
                    de[0] - Z[0],
                    de[1] - Z[1],
                    de[2] - Z[2]
                  ], q = [
                    Ee[0] - Z[0],
                    Ee[1] - Z[1],
                    Ee[2] - Z[2]
                  ], pe = [
                    Fe[1] * q[2] - Fe[2] * q[1],
                    Fe[2] * q[0] - Fe[0] * q[2],
                    Fe[0] * q[1] - Fe[1] * q[0]
                  ];
                  Y = Math.sqrt(pe[0] ** 2 + pe[1] ** 2 + pe[2] ** 2);
                }
              }
              const K = -(F * J * Y * R) / v.length;
              for (const Z of v) j.set(Z, (j.get(Z) ?? 0) + K);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const w of o) w.length === 2 && (x.add(w[0]), x.add(w[1]));
        for (const w of O) {
          const v = E.has(w) ? I : 0, F = A.has(w) ? L : 0, J = j.get(w) ?? 0, Y = x.has(w) ? h : 0, ae = J + Y;
          (v !== 0 || F !== 0 || Math.abs(ae) > 1e-10) && z.set(w, [
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
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, b = d - p * 6, S = [], $ = (y) => S.push(y);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && $(`&nbsp;&nbsp;Frames: <b>${c}</b>`), s && $(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), r && $(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), $(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${i}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${b} libres`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${d}&times;${d})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = At(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, I = -1, L = 0, z = 0;
          y.deformations && y.deformations.forEach((E, A) => {
            const R = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            R > h && (h = R, I = A, L = E[0], z = E[2]);
          }), $('<span style="color:#888">3.</span> Desplazamientos:'), $(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), $(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(L * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const O = performance.now(), k = go(t, o, l, y), m = performance.now() - O;
          k && (e.analyzeOutputs.val = k, $(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), $("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        $(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), De && setTimeout(() => Ln(), 50);
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
      const p = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, i = t - 2 * n, d = o - 2 * n, b = t * o - i * d, S = (t * o * o * o - i * d * d * d) / 12, $ = (o * t * t * t - d * i * i * i) / 12, y = i * d, f = i * d * d * d / 12, h = d * i * i * i / 12, I = b + p * y, L = S + p * f, z = $ + p * h, O = l / (2 * (1 + a)), k = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), u = 4 * k * k / (m > 0 ? m : 1);
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
        const { colMat: a, vigaMat: c, colShape: s, fc: r, perFloor: p } = _e, i = 4700 * Math.sqrt(r / 1e3) * 1e3, d = i / (2 * 1.2), b = 24 / 9.80665, S = o.E, $ = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (ue.has(f)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, A), n.thicknesses.set(f, je), n.shearModuli.set(f, E / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Ft.has(f)) {
            const E = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, E), n.poissonsRatios.set(f, A), n.thicknesses.set(f, dt), n.shearModuli.set(f, E / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = D.has(f), I = Me.get(f) ?? 0, L = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, O, k, m;
          if (h) if (a === 0) O = i, k = d, m = b, z = s === 1 ? ks(L.dCol) : Rn(L.bCol, L.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (a === 1) {
            O = S, k = $, m = y;
            const E = _e.steelColType;
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
            const F = 7.85, J = 24 / 9.80665;
            m = (F * v.A_steel + J * v.A_conc) / (v.A_steel + v.A_conc);
            const Y = `CFT ${(A * 1e3).toFixed(0)}X${(E * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: E,
              h: A,
              tw: R,
              name: Y
            });
          }
          else {
            const E = ze.get(f), A = E ? E.dir === "x" ? L.vigasX : L.vigasY : [], R = E ? A[E.bay] ?? A[0] ?? gt() : gt();
            if (c === 0) O = i, k = d, m = b, z = Rn(R.b, R.h), n.sectionShapes.set(f, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              O = S, k = $, m = y;
              const j = _e.steelVigaType;
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
                const x = R.bf ?? 0.2, w = R.hf ?? 0.4, v = R.tf ?? 0.015, F = R.tw ?? 0.01;
                z = Pn(x, w, v, F);
                const J = `I${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: x,
                  h: w,
                  tf: v,
                  tw: F,
                  name: J
                });
              } else {
                const x = R.bc ?? 0.2, w = R.hc ?? 0.3, v = R.t ?? 8e-3;
                z = On(x, w, v);
                const F = `\u25A1${(w * 100).toFixed(0)}x${(x * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: x,
                  h: w,
                  tw: v,
                  name: F
                });
              }
            }
          }
          const u = he.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (O = i, k = d, m = b) : (O = S, k = $, m = y), u.secType === "rect" && u.b && u.h) z = Rn(u.b, u.h), n.sectionShapes.set(f, {
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
          Ts(v), et.example(v);
        });
      }), Ce.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.view;
          Mo(v), Ce.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = Ce.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), T = "", ca.val = false, Ea(), et.clear();
      }), (_d = Ce.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), so && (so = false, Ao()), fo && cn(), Vt = !Vt, (_a3 = Ce.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Vt);
        const v = Qe();
        v && (v.controls.enabled = !Vt), Vt || rn();
      }), (_e2 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), so && (so = false, Ao()), Vt && rn(), fo = !fo, (_a3 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", fo), fo ? Ca() : cn();
      }), (_f = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Vt && rn(), fo && cn(), so = !so, (_a3 = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", so), so || Ao();
      }), (_g = Ce.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), et.clear(), Xe = null;
      });
      const t = Ce.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && o(x);
      });
      function o(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const F = 15e3 * Math.sqrt(210) * 10, J = 0.2, Y = F / (2 * (1 + J)), ae = 0.09, K = 0.3 ** 4 / 12, Z = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, le = 0.25 * 0.4 ** 3 / 12, Ee = 0.4 * 0.25 ** 3 / 12, Fe = 1e-3, q = 5 / 6 * ae, pe = 5 / 6 * de, te = [];
        function fe(ee, me, Se) {
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
          for (const Ie of me) se.elasticities.set(Ie, F), se.shearModuli.set(Ie, Y), se.areas.set(Ie, ae), se.momentsOfInertiaZ.set(Ie, K), se.momentsOfInertiaY.set(Ie, K), se.torsionalConstants.set(Ie, Z), se.shearAreasY.set(Ie, q), se.shearAreasZ.set(Ie, q);
          for (const Ie of Se) se.elasticities.set(Ie, F), se.shearModuli.set(Ie, Y), se.areas.set(Ie, de), se.momentsOfInertiaZ.set(Ie, Ee), se.momentsOfInertiaY.set(Ie, le), se.torsionalConstants.set(Ie, Fe), se.shearAreasY.set(Ie, pe), se.shearAreasZ.set(Ie, pe);
          return se;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const Se = 270 / (3 * F * K), se = [
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
          ], Ie = [
            [
              0,
              1
            ]
          ], Ge = fe(1, [], []);
          Ge.elasticities.set(0, F), Ge.shearModuli.set(0, Y), Ge.areas.set(0, ae), Ge.momentsOfInertiaZ.set(0, K), Ge.momentsOfInertiaY.set(0, K), Ge.torsionalConstants.set(0, Z);
          const st = At(se, Ie, {
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
          }, Ge);
          te.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: se,
            elements: Ie,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: st.deformations.get(1)[2] * 100,
                reference: Se * 100,
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
          ], Se = fe(3, [
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
          }, Se);
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
          ], Se = fe(6, [
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
          }, Se);
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
                Y
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
                J
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
          ], Se = fe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Se.elasticities.set(6, F), Se.shearModuli.set(6, Y), Se.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Se.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              J
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
          }, Se);
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
          const st = 0.6666666666666666, lt = [
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
          ], ge = [
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
          ], Ne = {
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
          }, ot = /* @__PURE__ */ new Map();
          ot.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), ot.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const vt = /* @__PURE__ */ new Map();
          vt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), vt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const to = 5 ** 3 / (3 * 1500 * st);
          try {
            const Gt = At(lt, ge, {
              supports: ot,
              loads: vt
            }, Ne), Wt = Math.abs(((_b2 = (_a3 = Gt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), rt = Math.abs(((_d2 = (_c2 = Gt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), zt = (Wt + rt) / 2, oo = zt / to;
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: lt,
              elements: ge,
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
                  reference: to * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (Gt) {
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + Gt.message,
              nodes: lt,
              elements: ge,
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
          const st = 40 * Math.PI / 180, lt = 8, ge = 8, Ne = [];
          for (let rt = 0; rt <= lt; rt++) for (let zt = 0; zt <= ge; zt++) {
            const oo = 25 * rt / lt, qt = st * zt / ge, ho = 25 * Math.sin(qt), bo = 25 * Math.cos(qt) - 25 * Math.cos(st);
            Ne.push([
              oo,
              ho,
              bo
            ]);
          }
          const ot = [];
          for (let rt = 0; rt < lt; rt++) for (let zt = 0; zt < ge; zt++) {
            const oo = rt * (ge + 1) + zt, qt = (rt + 1) * (ge + 1) + zt, ho = (rt + 1) * (ge + 1) + (zt + 1), bo = rt * (ge + 1) + (zt + 1);
            ot.push([
              oo,
              qt,
              ho,
              bo
            ]);
          }
          const vt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, to = 432e6 / (2 * 1);
          for (let rt = 0; rt < ot.length; rt++) vt.elasticities.set(rt, 432e6), vt.shearModuli.set(rt, to), vt.thicknesses.set(rt, 0.25), vt.poissonsRatios.set(rt, 0);
          const Gt = /* @__PURE__ */ new Map();
          for (let rt = 0; rt <= lt; rt++) for (let zt = 0; zt <= ge; zt++) {
            const oo = rt * (ge + 1) + zt, qt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            rt === 0 && (qt[0] = true, qt[4] = true, qt[5] = true), rt === lt && (qt[1] = true, qt[2] = true, qt[3] = true), zt === 0 && (qt[1] = true, qt[3] = true, qt[5] = true), qt.some((ho) => ho) && Gt.set(oo, qt);
          }
          const Wt = /* @__PURE__ */ new Map();
          for (const rt of ot) {
            const zt = Ne[rt[0]], oo = Ne[rt[1]], qt = Ne[rt[2]], ho = Ne[rt[3]], bo = [
              qt[0] - zt[0],
              qt[1] - zt[1],
              qt[2] - zt[2]
            ], jo = [
              ho[0] - oo[0],
              ho[1] - oo[1],
              ho[2] - oo[2]
            ], Xs = bo[1] * jo[2] - bo[2] * jo[1], Ks = bo[2] * jo[0] - bo[0] * jo[2], Zs = bo[0] * jo[1] - bo[1] * jo[0], Va = -90 * (0.5 * Math.sqrt(Xs * Xs + Ks * Ks + Zs * Zs)) / 4;
            for (const Qs of rt) {
              const ea = Wt.get(Qs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ea[2] += Va, Wt.set(Qs, ea);
            }
          }
          try {
            const rt = At(Ne, ot, {
              supports: Gt,
              loads: Wt
            }, vt), zt = ge, oo = ((_f2 = (_e3 = rt.deformations) == null ? void 0 : _e3.get(zt)) == null ? void 0 : _f2[2]) ?? 0;
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${lt}x${ge} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Ne,
              elements: ot,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(oo),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (rt) {
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + rt.message,
              nodes: Ne,
              elements: ot,
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
          const me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), se = Math.max(...ee.nodes.map((Ie) => Ie[2]));
          ee.nodes.forEach((Ie, Ge) => {
            Math.abs(Ie[2]) < 0.01 && me.set(Ge, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Ie[2] - se) < 0.01 && Se.set(Ge, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: me,
            loads: Se
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        x.nodes.forEach((q) => F.add(Math.round(q[1] * 1e4) / 1e4));
        const J = [
          ...F
        ].sort((q, pe) => q - pe), Y = J.map((q, pe) => pe === 0 ? "Base" : `Level_${pe}`), ae = /* @__PURE__ */ new Map();
        J.forEach((q, pe) => ae.set(q, Y[pe])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = J.length - 1; q >= 1; q--) v.push(`  STORY "${Y[q]}"  HEIGHT ${J[q] - J[q - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${J[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${w}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const K = x.elements.some((q) => q.length === 4);
        K && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const Z = /* @__PURE__ */ new Map();
        let de = 0;
        x.nodes.forEach((q) => {
          const pe = `${q[0]},${q[2]}`;
          Z.has(pe) || Z.set(pe, `${++de}`);
        }), v.push("$ POINT COORDINATES");
        for (const [q, pe] of Z) {
          const [te, fe] = q.split(",").map(Number);
          v.push(`  POINT "${pe}"  ${te} ${fe} `);
        }
        v.push("");
        const le = (q) => {
          const pe = x.nodes[q], te = `${pe[0]},${pe[2]}`;
          return {
            pt: Z.get(te) || "1",
            story: ae.get(Math.round(pe[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Ee = [];
        if (x.elements.forEach((q, pe) => {
          if (q.length !== 2) return;
          const te = x.nodes[q[0]], fe = x.nodes[q[1]], ee = Math.abs(fe[1] - te[1]), me = Math.sqrt((fe[0] - te[0]) ** 2 + (fe[2] - te[2]) ** 2), Se = ee > me * 0.5, se = le(q[0]), Ie = le(q[1]), Ge = Se ? "COL30" : "VIGA";
          Se ? (v.push(`  LINE  "E${pe + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), Ee.push(`  LINEASSIGN  "E${pe + 1}"  "${Ie.story}"  SECTION "${Ge}"  `)) : (v.push(`  LINE  "E${pe + 1}"  BEAM  "${se.pt}"  "${Ie.pt}"  0`), Ee.push(`  LINEASSIGN  "E${pe + 1}"  "${se.story}"  SECTION "${Ge}"  `));
        }), v.push(""), K) {
          v.push("$ AREA CONNECTIVITIES");
          const q = [];
          x.elements.forEach((pe, te) => {
            if (pe.length !== 4) return;
            const fe = pe.map((ee) => le(ee));
            v.push(`  AREA "W${te + 1}"  PANEL  4  "${fe[0].pt}"  "${fe[1].pt}"  "${fe[2].pt}"  "${fe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${te + 1}"  "${fe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), q.forEach((pe) => v.push(pe)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((q, pe) => {
          if (Math.abs(q[1]) < 0.01) {
            const te = le(pe);
            v.push(`  POINTASSIGN  "${te.pt}"  "${te.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Ee.forEach((q) => v.push(q)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Fe = Math.max(...x.nodes.map((q) => q[1]));
        return x.nodes.forEach((q, pe) => {
          if (Math.abs(q[1] - Fe) < 0.01) {
            const te = le(pe);
            v.push(`  POINTLOAD  "${te.pt}"  "${te.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const w = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${w}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((Y) => Y.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((Y, ae) => {
          if (Y.length === 2) {
            const K = x.nodes[Y[0]], Z = x.nodes[Y[1]], de = Math.abs(Z[1] - K[1]), le = Math.sqrt((Z[0] - K[0]) ** 2 + (Z[2] - K[2]) ** 2), Ee = de > le * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${K[0]},${K[2]},${K[1]}, ${Z[0]},${Z[2]},${Z[1]}, FN,"${Ee}","E${ae + 1}","Global")`);
          } else if (Y.length === 4) {
            const K = Y.map((Z) => x.nodes[Z]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${K.map((Z) => Z[0]).join(",")}], [${K.map((Z) => Z[2]).join(",")}], [${K.map((Z) => Z[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const J = Math.max(...x.nodes.map((Y) => Y[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${J}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const Y of x.results) v.push(`print(f"  ${Y.label}: Awatif=${Y.awatif.toFixed(4)}, ETABS=${Y.reference.toFixed(4)}, Ratio={${Y.awatif.toFixed(4)}/${Y.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), J = document.createElement("a");
        J.href = F, J.download = w, J.click(), URL.revokeObjectURL(F);
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
        for (let Y = 0; Y < x.length; Y++) {
          const ae = x[Y];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${Y})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${Y})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const K of ae.results) {
            const Z = K.reference !== 0 ? K.awatif / K.reference : 1, de = Math.abs(Z - 1) < 0.05;
            de || (F = false);
            const le = de ? "#4caf50" : "#f44336", Ee = de ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${K.label}</td>
            <td style="text-align:right;color:#fff">${K.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${K.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${le};font-weight:bold">${Z.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${K.refSource}</td>
            <td style="text-align:center;color:${le};font-size:10px;font-weight:bold">${Ee}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', w.innerHTML = v, document.body.appendChild(w), window.__awatifDownloadE2k = (Y) => {
          const ae = window.__awatifTests[Y], K = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(ae), `${K}.e2k`);
        }, window.__awatifDownloadPy = (Y) => {
          const ae = window.__awatifTests[Y], K = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(ae), `${K}_etabs.py`);
        };
      }
      (_h = Ce.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Ia();
      });
      let s = "";
      const r = Ce.querySelector("#cad3d-io-menu"), p = Ce.querySelector("#cad3d-io-file");
      function i(x, w) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((J) => J.length === 2).length, F = x.elements.filter((J) => J.length >= 3).length;
        console.log(`${w} (${x.nodes.length} nodos, ${v} frames, ${F} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => wt(), 50);
      }
      function d(x, w) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((Z) => v[Z.category] = (v[Z.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const F = document.createElement("div");
        F.id = "ifc-filter-panel", F.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const J = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], Y = [
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
        let K = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const Z of J) {
          const de = v[Z] || 0;
          if (de === 0) continue;
          const le = [
            "column",
            "beam",
            "slab"
          ].includes(Z) ? "checked" : "";
          K += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${Z}" ${le}>
          <span>${ae[Z] || Z}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        K += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const Z of Y) {
          const de = v[Z] || 0;
          de !== 0 && (K += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${Z}" disabled>
          <span>${ae[Z] || Z}</span>
          <span style="margin-left:auto">(${de})</span>
        </label>`);
        }
        K += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, F.innerHTML = K, document.body.appendChild(F), F.querySelectorAll("input[data-ifc-cat]").forEach((Z) => {
          Z.addEventListener("change", () => {
            const de = Z.dataset.ifcCat, le = x.detailCategories.get(de);
            if (le) {
              le.visible = Z.checked;
              const Ee = Qe();
              Ee && Ee.render();
            }
          });
        }), (_b2 = F.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Z = /* @__PURE__ */ new Set();
          F.querySelectorAll("input[data-ifc-cat]:checked").forEach((te) => {
            Z.add(te.dataset.ifcCat);
          });
          const de = w.nodes.map((te) => [
            te.x,
            te.y,
            te.z
          ]), le = [], Ee = {
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
          for (const te of w.elements) if (Z.has(te.category) && te.type === "frame" && te.nodeIds.length >= 2) {
            le.push(te.nodeIds);
            const fe = ((_a4 = w.materials) == null ? void 0 : _a4.get(te.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = te.b || 0.3, me = te.h || 0.3, Se = ee * me, se = ee * me * me * me / 12, Ie = me * ee * ee * ee / 12, Ge = ee * me * (ee * ee + me * me) / 12, st = fe.E / (2 * (1 + fe.nu));
            Ee.elasticities.set(q, fe.E), Ee.shearModuli.set(q, st), Ee.areas.set(q, Se), Ee.momentsOfInertiaZ.set(q, Ie), Ee.momentsOfInertiaY.set(q, se), Ee.torsionalConstants.set(q, Ge), Ee.densities.set(q, fe.rho), Ee.sectionShapes.set(q, {
              type: "rect",
              b: ee,
              h: me,
              name: te.sectionName
            }), q++;
          }
          const pe = Math.min(...de.map((te) => te[2]));
          de.forEach((te, fe) => {
            Math.abs(te[2] - pe) < 0.05 && Fe.supports.set(fe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, te] of x.detailCategories) {
            const fe = Qe();
            fe && fe.scene.remove(te);
          }
          i({
            nodes: de,
            elements: le,
            nodeInputs: Fe,
            elementInputs: Ee,
            sectionShapes: Ee.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: le.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of x.detailCategories) {
            const le = Qe();
            le && le.scene.remove(de);
          }
          const Z = Qe();
          Z && Z.render(), F.remove();
        });
      }
      function b(x) {
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        const w = /* @__PURE__ */ new Map();
        for (let le = 0; le < x.stories.length; le++) w.set(x.stories[le].name, le);
        for (let le = 0; le < x.elementTypes.length; le++) {
          const Ee = x.elementTypes[le], Fe = x.elementStories[le], q = w.get(Fe) ?? 0;
          Me.set(le, q), Ee === "COLUMN" || Ee === "BRACE" ? D.add(le) : G.add(le);
        }
        T = "edificio";
        const v = x.grids.filter((le) => le.dir === "X").sort((le, Ee) => le.coord - Ee.coord), F = x.grids.filter((le) => le.dir === "Y").sort((le, Ee) => le.coord - Ee.coord);
        let J, Y, ae, K;
        if (v.length > 0 || F.length > 0) J = v.map((le) => le.coord), Y = F.map((le) => le.coord), ae = v.map((le) => le.label), K = F.map((le) => le.label);
        else {
          const le = new Set(x.nodes.map((Fe) => Fe[0])), Ee = new Set(x.nodes.map((Fe) => Fe[1]));
          J = [
            ...le
          ].sort((Fe, q) => Fe - q), Y = [
            ...Ee
          ].sort((Fe, q) => Fe - q), ae = J.map((Fe, q) => String(q + 1)), K = Y.map((Fe, q) => String.fromCharCode(65 + q));
        }
        const Z = x.stories.length > 0 ? Math.max(...x.stories.map((le) => le.elev)) : Math.max(...x.nodes.map((le) => le[2]));
        Ye = J, Ze = Y, mt = Z, setTimeout(() => {
          wt(), Xo(J, Y, Z, ae, K), wn(x.stories, J, Y), Nn(), qn();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const le of x.elementTypes) de[le]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${K.join(",")}]`), console.log(`E2K stories: ${x.stories.map((le) => `${le.name}@${le.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), tt();
      }
      function S(x, w) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), J = document.createElement("a");
        J.href = F, J.download = w, J.click(), URL.revokeObjectURL(F);
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
              e2kModel: Xe ?? void 0
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
            const F = v.result;
            try {
              const J = Qe();
              if (!J) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const Y = await Jl(J.scene, F);
              console.log(`IFC: ${Y.meshCount} meshes loaded, bbox:`, Y.bbox);
              const ae = new qe();
              Y.bbox.getCenter(ae);
              const K = new qe();
              Y.bbox.getSize(K);
              const Z = Math.max(K.x, K.y, K.z);
              J.controls.target.copy(ae), J.camera.position.set(ae.x + Z, ae.y + Z * 0.5, ae.z + Z), J.camera.lookAt(ae), J.controls.maxDistance = Z * 5, J.controls.update(), J.render(), window.__ifcLoadResult = Y, window.__ifcArrayBuffer = F;
              const de = new FileReader();
              de.onload = () => {
                const le = de.result, Ee = Wl(le);
                window.__ifcAnalytical = Ee;
                const Fe = {};
                Y.elementInfo.forEach((q) => Fe[q.category] = (Fe[q.category] || 0) + 1), console.log("IFC categories:", Fe), console.log(`IFC: ${Y.elementInfo.size} geometric elements, ${Ee.elements.length} analytical elements`), d(Y, Ee);
              }, de.readAsText(x);
            } catch (J) {
              alert("IFC error: " + J.message), console.error(J);
            }
          }, v.readAsArrayBuffer(x), p.value = "";
          return;
        }
        const w = new FileReader();
        w.onload = () => {
          const v = w.result;
          try {
            if (s === "import-e2k") {
              const F = Tl(v);
              Xe = F, i(F, "E2K imported"), b(F);
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
        }, w.readAsText(x), p.value = "";
      });
      const $ = Ce.querySelector("#cad3d-force-unit");
      $ && ($.value = g, $.addEventListener("change", (x) => {
        x.stopPropagation(), g = $.value, M = Ro(g, P), T && nt(T);
      }));
      const y = Ce.querySelector("#cad3d-length-unit");
      y && (y.value = P, y.addEventListener("change", (x) => {
        x.stopPropagation(), P = y.value, M = Ro(g, P), T && nt(T);
      })), Ce.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (w) => {
          w.stopPropagation();
          const v = x.dataset.preset, F = B[v];
          F && (g = F.force, P = F.length, U = F.stress, M = Ro(g, P), $ && ($.value = g), y && (y.value = P), Ce.querySelectorAll("[data-preset]").forEach((J) => {
            J.classList.toggle("active", J.dataset.preset === v);
          }), T && nt(T), console.log(`Preset: ${v} \u2192 ${g}+${P}, stress: ${U.label}`));
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
        x.stopPropagation(), De = !De, (_a3 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", De);
        const v = Ce.querySelector("#cad3d-mode-prev"), F = Ce.querySelector("#cad3d-mode-next"), J = Ce.querySelector("#cad3d-mode-label"), Y = Ce.querySelector("#cad3d-modal-scale");
        if (De) {
          const ae = Qe();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (Be = ae.settings.loads.rawVal, ae.settings.loads.val = false), Ln(), v.style.display = "", F.style.display = "", J.style.display = "", Y && (Y.style.display = ""), f();
        } else Cn(), v.style.display = "none", F.style.display = "none", J.style.display = "none", Y && (Y.style.display = "none"), T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
          var _a4;
          const ae = Qe();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && Be && (ae.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const x = Ce.querySelector("#cad3d-mode-label");
        if (!x || !(Le == null ? void 0 : Le.frequencies)) return;
        const w = Le.frequencies[xe], v = w > 0 ? 1 / w : 0, F = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let J = 0; J <= xe; J++) {
          const Y = (_a3 = Le.massParticipation) == null ? void 0 : _a3[J];
          if (Y) for (let ae = 0; ae < 6; ae++) F[ae] += Y[ae];
        }
        x.textContent = `Modo ${xe + 1} \u2014 ${w.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(F[0] * 100).toFixed(1)}% \u03A3Uy=${(F[1] * 100).toFixed(1)}% \u03A3Rz=${(F[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ce.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(Le == null ? void 0 : Le.modeShapes)) return;
        xe = (xe - 1 + Le.modeShapes.length) % Le.modeShapes.length;
        const w = Le.modeShapes[xe], { extent: v } = $o();
        let F = 0;
        for (let J = 0; J < Te.length; J++) {
          const Y = w[J * 6] || 0, ae = w[J * 6 + 1] || 0, K = w[J * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(Y * Y + ae * ae + K * K));
        }
        Je = F > 1e-12 ? v * 0.05 / F : 1, Qo(), f();
      }), (_p = Ce.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (x) => {
        var _a3, _b2;
        if (x.stopPropagation(), !(Le == null ? void 0 : Le.modeShapes)) return;
        xe = (xe + 1) % Le.modeShapes.length;
        const w = Le.modeShapes[xe];
        if (!w) {
          console.warn("No shape for mode", xe);
          return;
        }
        const { extent: v } = $o();
        let F = 0;
        for (let J = 0; J < Te.length; J++) {
          const Y = w[J * 6] || 0, ae = w[J * 6 + 1] || 0, K = w[J * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(Y * Y + ae * ae + K * K));
        }
        Je = F > 1e-12 ? v * 0.05 / F : 1, console.log(`Mode ${xe + 1}: maxDisp=${F.toExponential(3)}, scale=${Je.toFixed(1)}, f=${(_b2 = (_a3 = Le.frequencies) == null ? void 0 : _a3[xe]) == null ? void 0 : _b2.toFixed(2)} Hz`), Qo(), f();
      });
      const h = Ce.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (x) => x.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        De && (Le == null ? void 0 : Le.modeShapes) && Qo();
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
        if ((x.key === "Delete" || x.key === "Backspace") && $t.size > 0) {
          x.preventDefault(), $t.forEach((w) => Q.add(w)), $t.clear(), uo && (uo.remove(), uo = null), Oe();
          return;
        }
        if (x.key === "Escape") {
          if (fo) if (Et !== null) {
            Et = null;
            const w = Qe();
            _t && w && (w.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), Dt && w && (w.scene.remove(Dt), Dt.geometry.dispose(), Dt.material.dispose(), Dt = null), w == null ? void 0 : w.render();
          } else cn();
          Vt && rn(), so && (so = false, Ao(), (_a3 = Ce.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), O == null ? void 0 : O.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const w = O.value.trim();
          if (w) {
            k.unshift(w), m = -1, z && (z.textContent += `> ${w}
`);
            try {
              const v = new Function("cad", `return ${w}`)(et);
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
      }), tt();
    }, 10);
    function Qe() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function $o() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new qe(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, c = -1 / 0, s = -1 / 0;
      for (const [i, d, b] of t) i < o && (o = i), i > a && (a = i), d < n && (n = d), d > c && (c = d), b < l && (l = b), b > s && (s = b);
      const r = new qe((o + a) / 2, (n + c) / 2, (l + s) / 2), p = Math.max(a - o, c - n, s - l, 1);
      return {
        center: r,
        extent: p
      };
    }
    function wt(t = false) {
      const o = Qe();
      if (!o) return;
      const { extent: n } = $o();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const c = Ka(), s = new rl(l, 20, c.grid, c.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((S) => S instanceof dn))).forEach((b) => {
        b.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(b);
      });
      const p = 0.05 * l, i = new sn();
      i.name = "viewerAxes";
      const d = c.axisArrow;
      i.add(new dn(new qe(1, 0, 0), new qe(), 1, d, 0.2, 0.2)), i.add(new dn(new qe(0, 1, 0), new qe(), 1, d, 0.2, 0.2)), i.add(new dn(new qe(0, 0, 1), new qe(), 1, d, 0.2, 0.2)), i.children.forEach((b) => b.scale.set(p, p, p));
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
      const o = Qe();
      if (!o) return;
      const { center: n, extent: l } = $o(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const p = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, d = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (p || i || d) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, p = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -c * a, r.right = c * a, r.top = c, r.bottom = -c, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const p = (i, d, b) => {
          r.position.copy(i), r.up.copy(b), o.controls.target.copy(d), r.lookAt(d), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new qe(n.x, n.y, n.z + l * 2), new qe(n.x, n.y, n.z), new qe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), d = ((_a2 = X.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (i + 1) * d, S = d * 0.45;
          o.renderer.clippingPlanes = [
            new Io(new qe(0, 0, -1), b + S),
            new Io(new qe(0, 0, 1), -b + S)
          ], s(), p(new qe(n.x, n.y, b + l * 2), new qe(n.x, n.y, b), new qe(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), d = Ye[i] ?? n.x;
          if (Ze.length > 1) {
            const S = zs(Ye, i, l);
            o.renderer.clippingPlanes = [
              new Io(new qe(-1, 0, 0), d + S),
              new Io(new qe(1, 0, 0), -d + S)
            ], s(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), d = Ze[i] ?? n.y;
          if (Ye.length > 1) {
            const S = zs(Ze, i, l);
            o.renderer.clippingPlanes = [
              new Io(new qe(0, -1, 0), d + S),
              new Io(new qe(0, 1, 0), -d + S)
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
      if (Ye.length < 2 && Ze.length < 2) {
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
          Ce.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), d ? (Mo("3d"), (_a2 = Ce.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Mo(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ye.forEach((c, s) => {
        const r = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(r, `axisX:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Ze.forEach((c, s) => {
        const r = `${s + 1}`;
        t.appendChild(o(r, `axisY:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qn() {
      var _a2;
      const t = Ce.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = X.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
    et.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Mo(t), Ce.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let so = false, Vt = false, fo = false, jt = "line", Kt = [], Et = null, _t = null, Dt = null, qo = null, Qt = null;
    const Tt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Dn = [], eo = null, zo = null;
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
    const $t = /* @__PURE__ */ new Set();
    let Ut = null, wo = [], Zt = null, uo = null;
    function Bn(t) {
      const o = Qe();
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
      const t = Qe();
      wo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), wo = [], t == null ? void 0 : t.render();
    }
    function So() {
      uo && uo.remove();
      const t = V.size > 0 || H;
      if ($t.size === 0 && !t) {
        uo = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${$t.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), uo = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ya([
          ...$t
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if ($t.size === 1) {
          const n = [
            ...$t
          ][0];
          qs(n);
        } else {
          const n = [
            ...$t
          ], l = e.nodes.val, a = e.elements.val;
          let c = 0, s = 0, r = 0, p = 0;
          n.forEach((d) => {
            const b = a[d];
            if (b) if (b.length === 2) {
              const S = l[b[0]], $ = l[b[1]], y = Math.abs($[0] - S[0]), f = Math.abs($[1] - S[1]), h = Math.abs($[2] - S[2]);
              h > y && h > f ? c++ : s++;
            } else b.length === 3 ? r++ : b.length === 4 && p++;
          });
          const i = [];
          c && i.push(`${c} columnas`), s && i.push(`${s} vigas`), p && i.push(`${p} shells Q4`), r && i.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        $t.forEach((n) => V.add(n)), $t.clear(), Eo(), So(), Oe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, W.clear(), $t.forEach((n) => W.add(n)), $t.clear(), Eo(), So(), Oe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), H = false, W.clear(), So(), Oe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Do(), $t.forEach((n) => Q.add(n)), $t.clear(), Eo(), So(), Oe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        $t.clear(), Eo(), So();
      });
    }
    function rn() {
      var _a2;
      Vt = false, $t.clear(), Eo(), uo && (uo.remove(), uo = null), (_a2 = Ce.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Qe();
      o && (o.controls.enabled = true);
    }
    function Ao() {
      if (Ut) {
        const t = Qe();
        t == null ? void 0 : t.scene.remove(Ut), Ut.geometry.dispose(), Ut.material.dispose(), Ut = null, t == null ? void 0 : t.render();
      }
      Zt && (Zt.remove(), Zt = null);
    }
    function Aa(t) {
      Hn();
      const o = Qe();
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
      const t = Qe();
      for (const o of Dn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Dn = [], zo = null, eo && (eo.remove(), eo = null);
    }
    function Cs(t, o, n, l) {
      eo || (eo = document.createElement("div"), eo.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(eo));
      const a = l.x - n.x, c = l.y - n.y, s = l.z - n.z, r = Math.sqrt(a * a + c * c + s * s), p = Math.abs(a), i = Math.abs(c), d = Math.abs(s);
      let b = "";
      p > i && p > d ? b = `\u0394X=${a.toFixed(2)}` : i > p && i > d ? b = `\u0394Y=${c.toFixed(2)}` : d > 0.01 && (b = `\u0394Z=${s.toFixed(2)}`), eo.textContent = `${r.toFixed(3)} m  ${b}`, eo.style.left = t + 20 + "px", eo.style.top = o - 10 + "px";
    }
    function La(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new qe(l[0], l[1], l[2]), c = t.clone(), s = c.clone().sub(a), r = 0.3, p = Math.abs(s.x), i = Math.abs(s.y), d = Math.abs(s.z);
      return i < r && d < r && p > 0.01 ? new qe(c.x, a.y, a.z) : p < r && d < r && i > 0.01 ? new qe(a.x, c.y, a.z) : p < r && i < r && d > 0.01 ? new qe(a.x, a.y, c.z) : null;
    }
    function cn() {
      var _a2;
      const t = Qe();
      _t && t && (t.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), Dt && t && (t.scene.remove(Dt), Dt.geometry.dispose(), Dt.material.dispose(), Dt = null), Hn(), Et = null, Qt = null, fo = false, qo && (qo.remove(), qo = null), (_a2 = Ce.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
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
        a && (a.style.cssText = o(jt === "line")), c && (c.style.cssText = o(jt === "arc")), s && (s.style.cssText = o(jt === "node")), r && (r.style.cssText = o(jt === "area"));
        const p = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Tt.node)), i && (i.style.cssText = n(Tt.grid)), d && (d.style.cssText = n(Tt.midpoint)), b && (b.style.cssText = n(Tt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        jt = "line", Et = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        jt = "arc", Et = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        jt = "node", Et = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        jt = "area", Et = null, Qt = null, Kt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
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
          const h = p[f], I = new qe(h[0], h[1], h[2]).project(n), L = Math.sqrt((I.x - c) ** 2 + (I.y - s) ** 2);
          L < d && L < y && (y = L, $ = f);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new qe(...p[$]),
          snapType: "node"
        };
      }
      if (Tt.midpoint) {
        let $ = 1 / 0, y = null;
        for (const f of i) {
          if (f.length !== 2) continue;
          const h = p[f[0]], I = p[f[1]], L = new qe((h[0] + I[0]) / 2, (h[1] + I[1]) / 2, (h[2] + I[2]) / 2), z = L.clone().project(n), O = Math.sqrt((z.x - c) ** 2 + (z.y - s) ** 2);
          O < d * 0.8 && O < $ && ($ = O, y = L);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Tt.grid) {
        const $ = new Io(new qe(0, 0, 1), 0), y = new qe();
        if (r.ray.intersectPlane($, y)) {
          const f = Tt.gridSize || _n;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const b = new Io(new qe(0, 0, 1), 0), S = new qe();
      return r.ray.intersectPlane(b, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Rs(t) {
      const o = Qe();
      if (!o) return;
      const n = e.nodes.val;
      if (Dt && (o.scene.remove(Dt), Dt.geometry.dispose(), Dt.material.dispose(), Dt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new nl(a * 2, a * 2, a * 2) : new sl(a, 12, 12), s = new al({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Dt = new da(c, s), Dt.position.copy(t.worldPos), Dt.renderOrder = 9999, o.scene.add(Dt);
      }
      if (_t && (o.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), Et !== null && t.worldPos) {
        const l = n[Et], a = new no();
        if (jt === "arc" && Qt !== null) {
          const s = n[Qt], r = Ps(new qe(l[0], l[1], l[2]), new qe(s[0], s[1], s[2]), t.worldPos, 16), p = [];
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
        _t = new Co(a, c), jt === "arc" && Qt !== null && (_t = new Go(a, c)), _t.renderOrder = 9999, o.scene.add(_t);
      }
      o.render();
    }
    function Ps(t, o, n, l) {
      const a = [];
      for (let c = 0; c <= l; c++) {
        const s = c / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), i = 2 * (1 - s) * s, d = s * s;
        a.push(new qe(p * t.x + i * r.x + d * n.x, p * t.y + i * r.y + d * n.y, p * t.z + i * r.z + d * n.z));
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
      if (jt === "arc") {
        const o = jn(t);
        if (o < 0) return;
        if (Et === null) {
          Et = o;
          return;
        }
        if (Qt === null) {
          if (o === Et) return;
          Qt = o;
          return;
        }
        if (o === Et || o === Qt) return;
        const n = e.nodes.val, l = new qe(...n[Et]), a = new qe(...n[Qt]), c = new qe(...n[o]), s = Math.max(4, Math.round(((_a2 = X.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ps(l, a, c, s);
        Do();
        const p = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let d = Et;
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
          i.push([
            d,
            S
          ]), d = S;
        }
        e.nodes.val = p, e.elements.val = i, yo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, Et = o, Qt = null;
        return;
      }
      if (jt === "area") {
        const o = jn(t);
        if (o < 0) return;
        if (Kt.length >= 3 && o === Kt[0]) {
          Do();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = Kt.map((c) => n[c]);
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
                const d = Math.abs(n[i][0] - r[0]), b = Math.abs(n[i][1] - r[1]), S = Math.abs(n[i][2] - r[2]);
                if (d < 0.01 && b < 0.01 && S < 0.01) {
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
            e.nodes.val = n, e.elements.val = l, yo(), console.log(`Area: ${c.elements.length} triangulos creados desde ${Kt.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          Kt = [];
          return;
        }
        if (Kt.push(o), console.log(`Area vertex ${Kt.length}: node ${o}`), Kt.length >= 2) {
          const n = Kt[Kt.length - 2], l = e.nodes.val, a = Qe();
          if (a) {
            const c = new no().setFromPoints([
              new qe(...l[n]),
              new qe(...l[o])
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
      const o = Qe();
      if (!o) return;
      Ut && (o.scene.remove(Ut), Ut.geometry.dispose(), Ut.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const r = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(r[0], r[1], r[2], p[0], p[1], p[2]);
      }
      const c = new no();
      c.setAttribute("position", new Lo(a, 3)), Ut = new Go(c, new Yo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Ut.renderOrder = 9999, o.scene.add(Ut), o.render();
    }
    function Wn(t) {
      const o = Qe();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new aa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new sa();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, s = e.elements.val;
      if (c.length === 0 || s.length === 0) return -1;
      let r = 1 / 0, p = -1;
      const i = a.ray;
      for (let b = 0; b < s.length; b++) {
        const S = s[b];
        if (S.length === 2) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new ll($, y), h = new qe(), I = new qe();
          i.closestPointToPoint(f.getCenter(new qe()), h), f.closestPointToPoint(h, true, I);
          const L = h.distanceTo(I);
          L < r && (r = L, p = b);
        } else if (S.length === 3) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), h = new qe();
          if (i.intersectTriangle($, y, f, false, h)) {
            const L = i.origin.distanceTo(h);
            L < r && (r = L, p = b);
          } else {
            const L = $.add(y).add(f).divideScalar(3), z = new qe();
            i.closestPointToPoint(L, z);
            const O = z.distanceTo(L);
            O < r && (r = O, p = b);
          }
        } else if (S.length === 4) {
          const $ = new qe(...c[S[0]]), y = new qe(...c[S[1]]), f = new qe(...c[S[2]]), h = new qe(...c[S[3]]), I = new qe();
          let L = i.intersectTriangle($, y, f, false, I);
          if (L) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, p = b);
          }
          if (L = i.intersectTriangle($, f, h, false, I), L) {
            const z = i.origin.distanceTo(I);
            z < r && (r = z, p = b);
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
    function He(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function C(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ra(t, o, n, l, a, c, s) {
      const r = 0.8333333333333334 * o, p = 5 / 6 * o, i = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, d = r > 0 && a > 0 ? 12 * t * l / (a * r * s ** 2) : 0, b = t * o / s, S = a * c / s, $ = 12 * t * n / s ** 3 / (1 + i), y = 6 * t * n / s ** 2 / (1 + i), f = 4 * t * n / s * (1 + i / 4) / (1 + i), h = 2 * t * n / s * (1 - i / 2) / (1 + i), I = i > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${C("A", "s")} = ${He("5", "6")} \xB7 ${C("A")} = <span class="highlight">${we(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${He("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("G") + "\xB7" + C("A", "s") + "\xB7" + C("L") + "\xB2")} = <span class="highlight">${we(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${we(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${C("t", "z")} = ${He("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we($)}</span> &nbsp;(cortante)</div>
      <div>${C("b", "z")} = ${He("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${C("k", "z")} = ${He("4\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1+\u03C6/4)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${C("a", "z")} = ${He("2\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1\u2212\u03C6/2)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${He(C("E") + "\xB7" + C("A"), C("L"))} = <span class="highlight">${we(b)}</span> &nbsp;(axial)</div>
      <div>${He(C("G") + "\xB7" + C("J"), C("L"))} = <span class="highlight">${we(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${He("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")} = <span class="highlight">${we($)}</span></div>
      <div>${He("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))} = <span class="highlight">${we(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${He(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${He("\u2212" + C("EA"), C("L"))}</span>
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
        <div>${C("l")} = cos(\u03B1) = ${He("\u0394x", C("L"))} = ${He(we(n[0]), we(l))} = <span class="highlight">${we(a)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${He("\u0394y", C("L"))} = ${He(we(n[1]), we(l))} = <span class="highlight">${we(c)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${He("\u0394z", C("L"))} = ${He(we(n[2]), we(l))} = <span class="highlight">${we(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${He("\u2212" + C("m"), C("D"))}</span><span class="cell">${He(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${He("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${He("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
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
      <div>\u03C3 = ${He("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${He(C("t") + "\xB3", "12")}</div>
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
      const t = "0", o = He(C("EA"), C("L")), n = He("\u2212" + C("EA"), C("L")), l = He("12" + C("EI", "z"), C("L") + "\xB3"), a = He("\u221212" + C("EI", "z"), C("L") + "\xB3"), c = He("12" + C("EI", "y"), C("L") + "\xB3"), s = He("\u221212" + C("EI", "y"), C("L") + "\xB3"), r = He("6" + C("EI", "z"), C("L") + "\xB2"), p = He("\u22126" + C("EI", "z"), C("L") + "\xB2"), i = He("6" + C("EI", "y"), C("L") + "\xB2"), d = He("\u22126" + C("EI", "y"), C("L") + "\xB2"), b = He(C("GJ"), C("L")), S = He("\u2212" + C("GJ"), C("L")), $ = He("4" + C("EI", "z"), C("L")), y = He("2" + C("EI", "z"), C("L")), f = He("4" + C("EI", "y"), C("L")), h = He("2" + C("EI", "y"), C("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
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
    function _a(t, o, n, l, a, c, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${He(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${He(we(t) + "\xD7" + we(o), we(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${He("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${He("12\xD7" + we(t) + "\xD7" + we(n), we(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${He("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${He("6\xD7" + we(t) + "\xD7" + we(n), we(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${He("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${He("12\xD7" + we(t) + "\xD7" + we(l), we(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${He("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${He("6\xD7" + we(t) + "\xD7" + we(l), we(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${He(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${He(we(a) + "\xD7" + we(c), we(s))}`,
          val: a * c / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${He("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${He("4\xD7" + we(t) + "\xD7" + we(n), we(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${He("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${He("2\xD7" + we(t) + "\xD7" + we(n), we(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${He("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${He("4\xD7" + we(t) + "\xD7" + we(l), we(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${He("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${He("2\xD7" + we(t) + "\xD7" + we(l), we(s))}`,
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
      Zt && Zt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((m) => o[m]), c = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      var i = "";
      if (c) {
        const m = Po(vo(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, A = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, j = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, w = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let J = "";
        for (let Y = 0; Y < 6; Y++) {
          const ae = Y, K = Y + 6, Z = (w.length >= 12 ? w[ae] : Y >= 3 && w.length >= 6 && w[Y - 3]) ? "checked" : "", de = (w.length >= 12 ? w[K] : Y >= 3 && w.length >= 6 && w[Y]) ? "checked" : "", le = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", Ee = v.length >= 12 && v[K] > 0 ? v[K].toFixed(1) : "";
          J += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[Y]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${Z}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${K}" ${de}></td>
          <td><input type="number" data-spr="${ae}" value="${le}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${K}" value="${Ee}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${we(m)}${we(u)}${we(E)}${we(A)}${we(R)}${we(j)}${we(x)}${J}`;
      } else {
        const m = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, A = m / (2 * (1 + E)), R = l.length === 4, j = m / (1 - E * E);
        `${l.length}${l.join(", ")}${we(m)}${we(A)}${we(u)}${we(E)}`, R && (i = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${C("D")} = ${He(C("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${He("1\u2212\u03BD", "2")}</span>
          </span> = ${He(we(m), "1\u2212" + we(E) + "\xB2")} = <span class="highlight">${we(j)}</span></div>

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
          <div>${C("B\u0304", "I")} = ${C("B", "I")} + ${C("B", "IC")} &nbsp; donde &nbsp; ${C("B", "IC")} = \u2212${He("1", "V")}\u222B${C("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${C("K", "drill")} = \u03B1\xB7${C("G")}\xB7${C("t")} \xB7 \u222B${C("B", "d")}<sup>T</sup>\xB7${C("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${C("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${C("D", "b")} = ${He(C("E") + "\xB7" + C("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${we(m * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${C("D", "s")} = \u03BA\xB7${C("G")}\xB7${C("t")} = <span class="highlight">${we(5 / 6 * A * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${C("K", "24\xD724")} = ${C("K", "membrana")}(8\xD78) + ${C("K", "flexi\xF3n")}(12\xD712) + ${C("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let d = "", b = "", S = "";
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
          const A = Po(vo(a[1], a[0])), R = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, j = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, w = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t2 = s.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          i = Ra(R, j, x, w, v, F, A);
        }
        $ = Pa(a), y = Oa(), f = Na(l), h = qa(c);
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
      if (p && c && (r == null ? void 0 : r.deformations) && I && L) {
        const m = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), E = (_w = p.shearsZ) == null ? void 0 : _w.get(t), A = (_x = p.torsions) == null ? void 0 : _x.get(t), R = (_y = p.bendingsY) == null ? void 0 : _y.get(t), j = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], w = [];
        for (const K of l) {
          const Z = ((_A = r.deformations) == null ? void 0 : _A.get(K)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          w.push(...Z);
        }
        let v = [];
        try {
          v = ao(L, w);
        } catch {
          v = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = ao(I, v);
        } catch {
          F = new Array(12).fill(0);
        }
        const J = (K, Z) => K.map((de, le) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Z[le % 6]}=${we(de)}</span>`).join(", "), ae = [
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
        ].map((K, Z) => `${K}${Z < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((K, Z) => `<span style="color:var(--fem-label)">nodo ${K}:</span> ${x.map((de, le) => `<span style="color:${Math.abs(w[Z * 6 + le]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${we(w[Z * 6 + le])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${J(v, [
          ...x,
          ...x
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${F.map((K, Z) => `<span style="color:${Math.abs(K) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[Z]}=${we(K)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${we(F[0])}${C("P", "7")}${C("N", "j")}${we(F[6])}${C("P", "2")}${C("V", "y,i")}${we(F[1])}${C("P", "8")}${C("V", "y,j")}${we(F[7])}${C("P", "3")}${C("V", "z,i")}${we(F[2])}${C("P", "9")}${C("V", "z,j")}${we(F[8])}${C("P", "4")}${C("M", "x,i")}${we(F[3])}${C("P", "10")}${C("M", "x,j")}${we(F[9])}${C("P", "5")}${C("M", "y,i")}${we(F[4])}${C("P", "11")}${C("M", "y,j")}${we(F[10])}${C("P", "6")}${C("M", "z,i")}${we(F[5])}${C("P", "12")}${C("M", "z,j")}${we(F[11])}${m ? m.map((K) => we(K)).join(", ") : "\u2014"}${u ? u.map((K) => we(K)).join(", ") : "\u2014"}${E ? E.map((K) => we(K)).join(", ") : "\u2014"}${A ? A.map((K) => we(K)).join(", ") : "\u2014"}${R ? R.map((K) => we(K)).join(", ") : "\u2014"}${j ? j.map((K) => we(K)).join(", ") : "\u2014"}`;
      } else if (p && c) {
        const m = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), E = (_D = p.shearsZ) == null ? void 0 : _D.get(t), A = (_E = p.torsions) == null ? void 0 : _E.get(t), R = (_F = p.bendingsY) == null ? void 0 : _F.get(t), j = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${m ? m.map((x) => we(x)).join(", ") : "\u2014"}${u ? u.map((x) => we(x)).join(", ") : "\u2014"}${E ? E.map((x) => we(x)).join(", ") : "\u2014"}${A ? A.map((x) => we(x)).join(", ") : "\u2014"}${R ? R.map((x) => we(x)).join(", ") : "\u2014"}${j ? j.map((x) => we(x)).join(", ") : "\u2014"}`;
      } else if (p && !c) {
        const m = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), E = (_J = p.bendingXY) == null ? void 0 : _J.get(t), A = (_K = p.membraneXX) == null ? void 0 : _K.get(t), R = (_L = p.membraneYY) == null ? void 0 : _L.get(t), j = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${m ? m.map((x) => we(x)).join(", ") : "\u2014"}${u ? u.map((x) => we(x)).join(", ") : "\u2014"}${E ? E.map((x) => we(x)).join(", ") : "\u2014"}${A ? A.map((x) => we(x)).join(", ") : "\u2014"}${R ? R.map((x) => we(x)).join(", ") : "\u2014"}${j ? j.map((x) => we(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Zt = yl(t, o, n, s, r, p), Zt.id = "fem-inspect-panel", document.body.appendChild(Zt), (_N = Zt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ao()), (_O = Zt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const m = Zt.querySelectorAll("input[data-rel]"), u = Zt.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), A = new Array(12).fill(0);
        m.forEach((j) => {
          E[parseInt(j.dataset.rel)] = j.checked;
        }), u.forEach((j) => {
          const x = parseFloat(j.value);
          x > 0 && (A[parseInt(j.dataset.spr)] = x);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((j) => j) ? s.momentReleases.set(t, E) : s.momentReleases.delete(t), A.some((j) => j > 0) ? s.partialFixitySprings.set(t, A) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((j, x) => j ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, A);
        const R = Zt.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const k = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = Po(vo(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, A = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, j = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return _a(u, E, A, R, j, x, m);
      })() : void 0;
      Zt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = m.dataset.full;
          if (E === "kLocal" && I) {
            const A = c ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, A, Yn(I, O), k);
          } else if (E === "T" && L) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, Yn(L, O));
          else if (E === "kGlobal" && z) {
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
      const p = 2e8, i = 77e6, d = 5e-3, b = 2e-6, S = 1e-6, $ = {
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
        const y = At(l, a, {
          supports: c,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => wt(), 50), tt(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
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
      const r = 2e8, p = 77e6, i = 0.01, d = 5e-6, b = 2e-6, S = {
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
          b
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
      setTimeout(() => wt(), 50), tt(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
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
      e.nodes.val = c, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
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
        const f = At(c, s, {
          supports: d,
          loads: b
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => wt(), 50), tt(), console.log(`Puente atirantado: ${c.length} nodos, ${s.length} elem, span=60m`);
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
        const h = At(c, s, {
          supports: p,
          loads: i
        }, f);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => wt(), 50), tt(), console.log(`Torre Twist: ${c.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
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
          const k = O * 2 * Math.PI / 3 - Math.PI / 2, m = L * Math.cos(k), u = L * Math.sin(k), E = a.length;
          a.push([
            m,
            u,
            I
          ]), c.push([
            z,
            E
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
            E
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
      const i = 35e6, d = 14e6, b = 0.02, S = 5e-5, $ = 2e-5, y = {
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
          b
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
      setTimeout(() => wt(), 50), tt(), console.log(`Burj Khalifa: ${a.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
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
      const c = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && c.set(b, [
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
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const b = At(t, o, {
          supports: a,
          loads: c
        }, d);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => wt(), 50), tt(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
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
      const p = 2e8, i = 77e6, d = 6e-3, b = 8e-6, S = 4e-6, $ = {
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
        const y = At(l, a, {
          supports: s,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => wt(), 50), tt(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Vn() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = X.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = X.H) == null ? void 0 : _b.val) ?? 3, l = ((_c = X.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = X.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = X.ny) == null ? void 0 : _e2.val) ?? 6), s = ((_f = X.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = X.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = X.P) == null ? void 0 : _h.val) ?? 100, i = s / (2 * (1 + r)), d = o / a, b = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * b
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
          const m = go(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = c * h + Math.floor(a / 2), E = k.deformations.get(u), A = E ? E[0] : 0;
          console.log(`Muro Q4: Ux=${A.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (k) {
        console.warn("MuroQ4:", k.message);
      }
      const O = Qe();
      O && (O.settings.shellResults.val = "displacementX"), setTimeout(() => wt(), 50), tt();
    }
    function Ys() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = X.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = X.h) == null ? void 0 : _b.val) ?? 0.5, l = ((_c = X.t) == null ? void 0 : _c.val) ?? 0.2, a = Math.round(((_d = X.nx) == null ? void 0 : _d.val) ?? 12), c = Math.round(((_e2 = X.ny) == null ? void 0 : _e2.val) ?? 4), s = ((_f = X.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = X.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = X.P) == null ? void 0 : _h.val) ?? 50, i = s / (2 * (1 + r)), d = o / a, b = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let O = 0; O <= c; O++) for (let k = 0; k <= a; k++) S.push([
        k * d,
        O * b,
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
          const k = go(S, $, L, O);
          e.analyzeOutputs && (e.analyzeOutputs.val = k);
          const m = O.deformations.get(I), u = m ? m[2] : 0, E = l * n * n * n / 12, A = p * o * o * o / (3 * s * E);
          console.log(`Viga Q4: Uz_tip=${u.toExponential(4)} | Analitico=${A.toExponential(4)} | ratio=${(Math.abs(u) / A).toFixed(4)}`);
        }
      } catch (O) {
        console.warn("VigaQ4:", O.message);
      }
      const z = Qe();
      z && (z.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), tt();
    }
    function Js() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = M, o = ((_a2 = X.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = X.Lz) == null ? void 0 : _b.val) ?? 2, l = ((_c = X.t) == null ? void 0 : _c.val) ?? 0.15, a = Math.round(((_d = X.nx) == null ? void 0 : _d.val) ?? 8), c = Math.round(((_e2 = X.nz) == null ? void 0 : _e2.val) ?? 4), s = ((_f = X.E) == null ? void 0 : _f.val) ?? 25e6, r = ((_g = X.nu) == null ? void 0 : _g.val) ?? 0.2, p = ((_h = X.P) == null ? void 0 : _h.val) ?? 20, i = s / (2 * (1 + r)), d = o / a, b = n / c, S = [], $ = [], y = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      for (let k = 0; k <= c; k++) for (let m = 0; m <= a; m++) S.push([
        m * d,
        0,
        k * b
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
          const m = go(S, $, z, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = m);
          const u = (c / 2 | 0) * h + a, E = k.deformations.get(u), A = E ? E[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${A.toExponential(4)} m`);
        }
      } catch (k) {
        console.warn("PlacaXZ:", k.message);
      }
      const O = Qe();
      O && (O.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), tt();
    }
    function Vs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i;
      const t = M, o = ((_a2 = X.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = X.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = X.H1) == null ? void 0 : _c.val) ?? 3, a = ((_d = X.H2) == null ? void 0 : _d.val) ?? 4.5, c = Math.round(((_e2 = X.nCol) == null ? void 0 : _e2.val) ?? 4), s = Math.round(((_f = X.nCorr) == null ? void 0 : _f.val) ?? 8), r = ((_g = X.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = X.t) == null ? void 0 : _h.val) ?? 5e-4, i = ((_i = X.q) == null ? void 0 : _i.val) ?? 1, d = 0.3, b = r / (2 * (1 + d)), S = 543e-5, $ = 889e-8, y = 249e-7, f = 312e-9, h = 285e-5, I = 142e-8, L = 1943e-8, z = 698e-10, O = 896e-6, k = 422e-9, m = 422e-9, u = 679e-9, E = 3, A = [], R = [], j = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = [];
      for (let ge = 0; ge < E; ge++) w.push(ge * o / (E - 1));
      const v = [];
      for (let ge = 0; ge < c; ge++) v.push(ge * n / (c - 1));
      const F = [];
      for (let ge = 0; ge < s; ge++) F.push(ge * n / (s - 1));
      for (const ge of v) F.some((Ne) => Math.abs(Ne - ge) < 1e-6) || F.push(ge);
      const J = F.sort((ge, Ne) => ge - Ne), Y = J.length, ae = (ge) => l + (a - l) * ge / n, K = [];
      for (let ge = 0; ge < E; ge++) {
        K[ge] = [];
        for (let Ne = 0; Ne < Y; Ne++) K[ge][Ne] = A.length, A.push([
          w[ge],
          J[Ne],
          ae(J[Ne])
        ]);
      }
      const Z = [];
      for (let ge = 0; ge < E; ge++) {
        Z[ge] = [];
        for (let Ne = 0; Ne < c; Ne++) Z[ge][Ne] = A.length, A.push([
          w[ge],
          v[Ne],
          0
        ]);
      }
      const de = [];
      for (let ge = 0; ge < c; ge++) de.push(J.findIndex((Ne) => Math.abs(Ne - v[ge]) < 1e-6));
      const le = [];
      let Ee = 0;
      for (let ge = 0; ge < E; ge++) for (let Ne = 0; Ne < c; Ne++) R.push([
        Z[ge][Ne],
        K[ge][de[Ne]]
      ]), le.push("col"), Ee++;
      for (let ge = 0; ge < E; ge++) for (let Ne = 0; Ne < Y - 1; Ne++) R.push([
        K[ge][Ne],
        K[ge][Ne + 1]
      ]), le.push("vig"), Ee++;
      R.length;
      for (let ge = 0; ge < Y; ge++) for (let Ne = 0; Ne < E - 1; Ne++) R.push([
        K[Ne][ge],
        K[Ne + 1][ge]
      ]), le.push("corr"), Ee++;
      R.length;
      for (let ge = 0; ge < E - 1; ge++) for (let Ne = 0; Ne < Y - 1; Ne++) R.push([
        K[ge][Ne],
        K[ge + 1][Ne],
        K[ge + 1][Ne + 1],
        K[ge][Ne + 1]
      ]), le.push("shell");
      for (let ge = 0; ge < E; ge++) for (let Ne = 0; Ne < c; Ne++) j.set(Z[ge][Ne], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let ge = 0; ge < E; ge++) for (let Ne = 0; Ne < Y; Ne++) {
        let ot;
        ge === 0 ? ot = (w[1] - w[0]) / 2 : ge === E - 1 ? ot = (w[E - 1] - w[E - 2]) / 2 : ot = (w[ge + 1] - w[ge - 1]) / 2;
        let vt;
        Ne === 0 ? vt = (J[1] - J[0]) / 2 : Ne === Y - 1 ? vt = (J[Y - 1] - J[Y - 2]) / 2 : vt = (J[Ne + 1] - J[Ne - 1]) / 2;
        const to = -i * ot * vt, Gt = K[ge][Ne], Wt = x.get(Gt) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Wt[2] += to, x.set(Gt, Wt);
      }
      e.nodes.val = A, e.elements.val = R, e.nodeInputs && (e.nodeInputs.val = {
        supports: j,
        loads: x
      });
      const Fe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Ge = t.rho;
      for (let ge = 0; ge < R.length; ge++) {
        Fe.set(ge, r), fe.set(ge, b), me.set(ge, Ge);
        const Ne = le[ge];
        if (Ne === "col") {
          q.set(ge, S), pe.set(ge, $), te.set(ge, y), ee.set(ge, f);
          const ot = new Array(12).fill(false);
          ot[10] = true, ot[11] = true, Ie.set(ge, ot);
        } else if (Ne === "vig") q.set(ge, h), pe.set(ge, I), te.set(ge, L), ee.set(ge, z);
        else if (Ne === "corr") {
          q.set(ge, O), pe.set(ge, k), te.set(ge, m), ee.set(ge, u);
          const ot = new Array(12).fill(false);
          ot[4] = true, ot[5] = true, ot[10] = true, ot[11] = true, Ie.set(ge, ot);
        } else Ne === "shell" && (Se.set(ge, d), se.set(ge, p));
      }
      const st = {
        elasticities: Fe,
        areas: q,
        momentsOfInertiaZ: pe,
        momentsOfInertiaY: te,
        shearModuli: fe,
        torsionalConstants: ee,
        densities: me,
        poissonsRatios: Se,
        thicknesses: se,
        momentReleases: Ie
      };
      e.elementInputs && (e.elementInputs.val = st);
      try {
        const ge = At(A, R, {
          supports: j,
          loads: x
        }, st);
        if (ge && e.deformOutputs) {
          e.deformOutputs.val = ge;
          const Ne = go(A, R, st, ge);
          e.analyzeOutputs && (e.analyzeOutputs.val = Ne);
          let ot = 0, vt = 0;
          ge.deformations.forEach((to, Gt) => {
            Math.abs(to[2]) > Math.abs(ot) && (ot = to[2], vt = Gt);
          }), console.log(`P\xE9rgola: Uz_max=${ot.toExponential(4)} m en nodo ${vt} | ${Ee} frames + ${s - 1} shells`);
        }
      } catch (ge) {
        console.warn("Pergola:", ge.message);
      }
      const lt = Qe();
      lt && (lt.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), tt();
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
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, c = o("po-fy") * 1e3, s = o("po-H"), r = o("po-L"), p = o("po-As") * 1e-4, i = o("po-nbar"), d = o("po-drift") / 100, b = o("po-ncycles"), S = t.querySelector("#pushover-status");
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
      let d = Math.min(...o), b = Math.max(...o), S = Math.min(...n), $ = Math.max(...n);
      d === b && (d -= 0.01, b += 0.01), S === $ && (S -= 1, $ += 1);
      const y = b - d, f = $ - S, h = (O) => r.left + (O - d) / y * p, I = (O) => r.top + i - (O - S) / f * i;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && b > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(h(0), r.top), a.lineTo(h(0), r.top + i), a.stroke()), S < 0 && $ > 0 && (a.beginPath(), a.moveTo(r.left, I(0)), a.lineTo(r.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(h(o[0]), I(n[0]));
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
      for (let Y = 0; Y < s; Y++) {
        const ae = c * (1 + Y * 0.5);
        for (let K = 0; K < r; K++) {
          const Z = K / r * 2 * Math.PI;
          p.push(ae * Math.sin(Z));
        }
      }
      const i = o / n, d = l * n;
      let b = 0, S = 0, $ = -i, y = i, f = 0, h = 0, I = 0, L = 0, z = 0, O = 0;
      const k = [];
      for (const Y of p) {
        let ae = $, K = y, Z = f, de = h, le = I, Ee = L, Fe = z, q = O, pe;
        const te = Y - b;
        if (Math.abs(te) < 1e-20) {
          k.push(S);
          continue;
        }
        if ((q === 0 || q === 3) && (te < 0 ? (q = 2, de = -i, le = -o, Z = de, Ee = 0, Fe = 0) : (q = 1, de = i, le = o, Z = de, Ee = 0, Fe = 0)), q === 2 && te > 0) {
          q = 1, Ee = b, Fe = S, b < ae && (ae = b);
          const Ie = (K - ae) / (2 * 1 * i), Ge = 1 + 0 * Math.pow(Ie, 0.8);
          de = (o * Ge - d * i * Ge - Fe + n * Ee) / (n - d), le = o * Ge + d * (de - i * Ge), Z = K;
        } else if (q === 1 && te < 0) {
          q = 2, Ee = b, Fe = S, b > K && (K = b);
          const Ie = (K - ae) / (2 * 1 * i), Ge = 1 + 0 * Math.pow(Ie, 0.8);
          de = (-o * Ge + d * i * Ge - Fe + n * Ee) / (n - d), le = -o * Ge + d * (de + i * Ge), Z = ae;
        }
        const fe = Math.abs((Z - de) / i);
        let ee = a - 0.925 * fe / (0.15 + fe);
        ee < 0.1 && (ee = 0.1);
        const me = (Y - Ee) / (de - Ee), Se = 1 + Math.pow(Math.abs(me), ee), se = Math.pow(Se, 1 / ee);
        pe = l * me + (1 - l) * me / se, pe = pe * (le - Fe) + Fe, k.push(pe), b = Y, S = pe, $ = ae, y = K, f = Z, h = de, I = le, L = Ee, z = Fe, O = q;
      }
      const m = t.querySelector("#nl-canvas"), u = m.getContext("2d"), E = m.width, A = m.height;
      u.clearRect(0, 0, E, A);
      const R = Math.max(...p.map(Math.abs)), j = Math.max(...k.map(Math.abs)), x = (E - 40) / (2 * R), w = (A - 40) / (2 * j), v = E / 2, F = A / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(E - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, A - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, E - 30, F + 12), u.fillText(`\xB1${(j / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let Y = 0; Y < p.length; Y++) {
        const ae = v + p[Y] * x, K = F - k[Y] * w;
        Y === 0 ? u.moveTo(ae, K) : u.lineTo(ae, K);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * w), u.lineTo(E - 20, F - o * w), u.stroke(), u.beginPath(), u.moveTo(20, F + o * w), u.lineTo(E - 20, F + o * w), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, F - o * w - 5);
      const J = t.querySelector("#nl-info");
      J.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(c * 100).toFixed(1)}%`;
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
      const n = mn(), l = bn(), a = Object.entries(n).map(([i, d]) => `<option value="${d}">${i}</option>`).join(""), c = Object.entries(l).map(([i, d]) => `<option value="${d}">${i}</option>`).join("");
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
        const b = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach(($) => {
          b[parseInt($.dataset.asgnRel)] = $.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach(($) => {
          const y = parseFloat($.value);
          y > 0 && (S[parseInt($.dataset.asgnSpr)] = y);
        }), d.releases12 = b, d.springs12 = S, d.releaseRotStart = b[4] || b[5], d.releaseRotEnd = b[10] || b[11], d.releaseAxial = b[0], d.releaseTorsion = b[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach(($) => he.set($, {
          ...d
        })), o.remove(), Bo = null, yo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => he.delete(i)), o.remove(), Bo = null, yo(), e.elementInputs.val = {
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
      const l = o[n[0]], a = o[n[1]], c = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), r = Math.abs(a[2] - l[2]), p = s > c && s > r, i = Math.sqrt(c * c + s * s + r * r), d = Me.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
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
        Q.add(t), $.remove(), Ho = null, Ao(), Oe();
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
        const i = Qe();
        if (!i) return null;
        const d = i.controls.object, b = new qe(p[0], p[1], p[2]);
        b.project(d);
        const S = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * S.width,
          y: (-b.y + 1) / 2 * S.height
        };
      }
      function s(p, i, d, b, S) {
        const $ = Math.min(p, d), y = Math.max(p, d), f = Math.min(i, b), h = Math.max(i, b), I = e.nodes.val, L = e.elements.val, z = [];
        for (let O = 0; O < L.length; O++) {
          const k = L[O], m = k.map((u) => c(I[u])).filter(Boolean);
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
      function r(p, i, d, b, S, $, y, f) {
        const h = (L, z) => L >= S && L <= y && z >= $ && z <= f;
        if (h(p, i) || h(d, b)) return true;
        const I = (L, z, O, k, m, u, E, A) => {
          const R = (O - L) * (A - u) - (k - z) * (E - m);
          if (Math.abs(R) < 1e-10) return false;
          const j = ((m - L) * (A - u) - (u - z) * (E - m)) / R, x = ((m - L) * (k - z) - (u - z) * (O - L)) / R;
          return j >= 0 && j <= 1 && x >= 0 && x <= 1;
        };
        return I(p, i, d, b, S, $, y, $) || I(p, i, d, b, y, $, y, f) || I(p, i, d, b, S, f, y, f) || I(p, i, d, b, S, $, S, f);
      }
      o.addEventListener("mousedown", (p) => {
        Vt && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (fo) {
          const d = Qe();
          if (!d) return;
          const b = Fs(p.clientX, p.clientY, d.camera, d.rendererElm);
          if (Tt.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== zo && Aa(b.nodeIdx), Tt.track && zo !== null && b.worldPos && b.snapType !== "node") {
            const S = La(b.worldPos, zo);
            S && (b.worldPos = S, b.snapType = "grid");
          }
          if (zo !== null && b.worldPos) {
            const S = e.nodes.val[zo];
            S && Cs(p.clientX, p.clientY, new qe(...S), b.worldPos);
          } else if (Et !== null && b.worldPos) {
            const S = e.nodes.val[Et];
            S && Cs(p.clientX, p.clientY, new qe(...S), b.worldPos);
          } else eo && (eo.remove(), eo = null);
          b.nodeIdx, Rs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!so && !Vt) return;
        if (Vt && n) {
          const d = p.offsetX - n.x, b = p.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(b) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = d > 0, $ = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(d), h = Math.abs(b);
            l.style.left = $ + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const i = Wn(p);
        if (i >= 0) Os(i), o.style.cursor = "pointer";
        else {
          if (Ut) {
            const d = Qe();
            d == null ? void 0 : d.scene.remove(Ut), Ut = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = Vt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (Vt && n) {
          const i = p.offsetX - n.x, d = p.offsetY - n.y;
          if (Math.abs(i) > a || Math.abs(d) > a) {
            const b = i > 0, S = s(n.x, n.y, p.offsetX, p.offsetY, b);
            p.ctrlKey || p.metaKey || ($t.clear(), Eo()), S.forEach((y) => {
              $t.has(y) || ($t.add(y), Bn(y));
            }), So();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (fo) {
          const i = Qe();
          if (!i) return;
          const d = Fs(p.clientX, p.clientY, i.camera, i.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Fa(d), Rs(d));
          return;
        }
        if (Vt) {
          if (l) return;
          const i = Wn(p), d = p.ctrlKey || p.metaKey;
          if (i >= 0) {
            if (d) if ($t.has(i)) {
              $t.delete(i);
              const b = wo.findIndex((S) => S.__elemIdx === i);
              if (b >= 0) {
                const S = Qe();
                S == null ? void 0 : S.scene.remove(wo[b]), wo[b].geometry.dispose(), wo[b].material.dispose(), wo.splice(b, 1), S == null ? void 0 : S.render();
              }
            } else $t.add(i), Bn(i);
            else $t.clear(), Eo(), $t.add(i), Bn(i);
            So();
          } else d || ($t.clear(), Eo(), So());
          return;
        }
        if (so) {
          const i = Wn(p);
          i >= 0 && (Os(i), Ja(i));
        }
      });
    }, 500), Jo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, tt();
    }), et.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !De), De = t, (_a2 = Ce.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", De), De) {
        const n = Qe();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Be = n.settings.loads.rawVal, n.settings.loads.val = false), Ln(), Ce.querySelector("#cad3d-mode-prev").style.display = "", Ce.querySelector("#cad3d-mode-next").style.display = "", Ce.querySelector("#cad3d-mode-label").style.display = "";
      } else Cn(), Ce.querySelector("#cad3d-mode-prev").style.display = "none", Ce.querySelector("#cad3d-mode-next").style.display = "none", Ce.querySelector("#cad3d-mode-label").style.display = "none", T && T !== "placa-q4" && T !== "placa-3q" && Oe(), setTimeout(() => {
        var _a3;
        const n = Qe();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Be && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${De ? "ON" : "OFF"}`);
    }, et.setMode = (t) => {
      var _a2;
      if (!(Le == null ? void 0 : Le.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Le.modeShapes.length - 1));
      const o = Le.modeShapes[xe], { extent: n } = $o();
      let l = 0;
      for (let c = 0; c < Te.length; c++) {
        const s = o[c * 6] || 0, r = o[c * 6 + 1] || 0, p = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + r * r + p * p));
      }
      Je = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const a = Ce.querySelector("#cad3d-mode-label");
      a && Le.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Le.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Le.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = et, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ce), document.body.appendChild(ft.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (nt("muro-q4"), Vn(), Ts("muro-q4"), setTimeout(() => {
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
