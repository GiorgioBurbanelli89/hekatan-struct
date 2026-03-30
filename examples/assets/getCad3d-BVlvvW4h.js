const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { d as Pt, _ as ia, p as Fn, m as ca, s as da, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Fo, P as Bo, g as pa, a as fa, o as ua } from "./theme-CzzIlc4y.js";
import { V as Ee, P as po, R as zs, b as Ts, B as Wt, c as ma, d as To, e as Lo, f as ba, S as ha, M as ga, g as xa, F as ho, a as Ao, L as go, h as va, G as ya, A as Jo, i as Vo, T as Pn, j as Xo, k as Ko, C as $a, l as wa } from "./Text-Cin90tvN.js";
import { g as on, b as nn, a as Co } from "./analyze-hNAfpj64.js";
import { g as to, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as yo, s as oo, m as jt, t as _n } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let Cs, Ia, ol;
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
  const Rn = [
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
  ], Po = [
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
  function Ma(e, x) {
    return e === "kN" && x === "m" ? "kPa" : e === "kN" && x === "mm" || e === "N" && x === "mm" ? "MPa" : e === "N" && x === "m" ? "Pa" : e === "kip" && x === "in" ? "ksi" : e === "kip" && x === "ft" ? "ksf" : `${e}/${x}\xB2`;
  }
  const xo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function vo(e, x) {
    const _ = Rn.find((W) => W.id === e), T = Po.find((W) => W.id === x), V = _.toKN, H = T.toM, U = (W, be, L) => L / (Math.pow(V, W) * Math.pow(H, be));
    let Y, j;
    switch (e) {
      case "kN":
        Y = 10, j = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        Y = 1, j = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        Y = 1e3, j = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        Y = 10, j = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        Y = 5e3, j = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        Y = 1e4, j = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${x}`,
      label: `${_.label}, ${T.label}`,
      force: _.label,
      length: T.label,
      stress: Ma(e, x),
      moment: `${_.label}\xB7${T.label}`,
      E: U(1, -2, xo.E),
      G: U(1, -2, xo.G),
      A: U(0, 2, xo.A),
      Iz: U(0, 4, xo.Iz),
      Iy: U(0, 4, xo.Iy),
      J: U(0, 4, xo.J),
      rho: U(1, -4, xo.rho),
      spanRange: T.spanRange,
      heightRange: T.heightRange,
      defaultSpan: T.defaultSpan,
      defaultHeight: T.defaultHeight,
      defaultForce: Y,
      forceRange: j,
      galponSpan: T.galponSpan,
      galponLength: T.galponLength,
      galponHeight: T.galponHeight,
      galponRise: T.galponRise
    };
  }
  vo("kN", "m"), vo("kip", "in");
  function Uo() {
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
  function Sa(e) {
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
  function Ea(e) {
    const x = e.force, [_, T, V] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CV (${x})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: _,
          max: T,
          step: V,
          label: `Ex sismo (${x})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: _,
          max: T,
          step: V,
          label: `Ex sismo (${x})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: T,
          step: V,
          label: `Ex sismo (${x})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: T,
          step: V,
          label: `Ex sismo (${x})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: T,
          step: V,
          label: `Ey sismo (${x})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CV (${x})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `F axial (${x})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: V,
          label: `CM (${x})`
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
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  Ia = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let x = false;
    function _(T, V) {
      var _a2, _b;
      if (!T.frequencies || T.frequencies.length === 0) {
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
      ], U = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let Y = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${V.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (Y += '<div id="modal-body" style="padding:0 12px 10px 12px;">', V.properties) for (const j of V.properties) Y += `<span style="color:#888">${j}</span>
`;
      Y += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const j of H) Y += `<th style="padding:2px 5px">${j}</th>`;
      if (Y += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, T.frequencies.forEach((j, W) => {
        var _a3;
        const be = j > 0 ? 1 / j : 0, L = j * 2 * Math.PI, le = ((_a3 = T.massParticipation) == null ? void 0 : _a3[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let Me = 0; Me < 6; Me++) U[Me] += le[Me];
        Y += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${j.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${be.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${L.toFixed(2)}</td>`;
        for (let Me = 0; Me < 6; Me++) {
          const me = (le[Me] * 100).toFixed(1), re = le[Me] > 0.5 ? "#f00" : le[Me] > 0.1 ? "#ff0" : "#0f0";
          Y += `<td style="padding:2px 5px; text-align:right; color:${re}">${me}%</td>`;
        }
        Y += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(U[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[5] * 100).toFixed(1)}%</td></tr>`;
      }), Y += "</table></div>", e.innerHTML = Y, x) {
        const j = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        j && (j.style.display = "none"), W && (W.textContent = "\u25A2", W.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        x = !x;
        const j = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        x ? (j.style.display = "none", W.textContent = "\u25A2", W.title = "Restaurar") : (j.style.display = "block", W.textContent = "\u25AC", W.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const j = [];
        j.push(`Modal Analysis \u2014 ${V.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        j.push(W), j.push("-".repeat(W.length));
        const be = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        T.frequencies.forEach((le, Me) => {
          var _a3;
          const me = le > 0 ? 1 / le : 0, re = le * 2 * Math.PI, de = ((_a3 = T.massParticipation) == null ? void 0 : _a3[Me]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Ce = 0; Ce < 6; Ce++) be[Ce] += de[Ce];
          const ue = de.map((Ce) => ((Ce * 100).toFixed(1) + "%").padStart(6)).join(" ");
          j.push(`${String(Me + 1).padStart(4)}  ${le.toFixed(4).padStart(9)}  ${me.toFixed(4).padStart(9)}  ${re.toFixed(2).padStart(9)}  ${ue}  ${(be[0] * 100).toFixed(1).padStart(5)}%  ${(be[1] * 100).toFixed(1).padStart(5)}%  ${(be[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(j.join(`
`));
        const L = e.querySelector("#modal-copy");
        L.textContent = "\u2713", setTimeout(() => L.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: _
    };
  };
  const xe = 64516e-8, C = 416231e-12, B = 0.0254, fo = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * xe,
      Iz: 16.4 * C,
      Iy: 2.2 * C,
      J: 0.0405 * C,
      d: 5.9 * B,
      bf: 3.94 * B
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * xe,
      Iz: 29.1 * C,
      Iy: 9.32 * C,
      J: 0.103 * C,
      d: 5.99 * B,
      bf: 5.99 * B
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * xe,
      Iz: 41.4 * C,
      Iy: 13.3 * C,
      J: 0.204 * C,
      d: 6.2 * B,
      bf: 6.02 * B
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * xe,
      Iz: 30.8 * C,
      Iy: 2.09 * C,
      J: 0.0426 * C,
      d: 7.89 * B,
      bf: 3.94 * B
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * xe,
      Iz: 61.9 * C,
      Iy: 7.97 * C,
      J: 0.172 * C,
      d: 8.14 * B,
      bf: 5.25 * B
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * xe,
      Iz: 82.7 * C,
      Iy: 18.3 * C,
      J: 0.346 * C,
      d: 7.93 * B,
      bf: 6.5 * B
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * xe,
      Iz: 110 * C,
      Iy: 37.1 * C,
      J: 0.536 * C,
      d: 8 * B,
      bf: 7.995 * B
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 146 * C,
      Iy: 49.1 * C,
      J: 0.871 * C,
      d: 8.25 * B,
      bf: 8.07 * B
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 184 * C,
      Iy: 60.9 * C,
      J: 1.45 * C,
      d: 8.5 * B,
      bf: 8.11 * B
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 272 * C,
      Iy: 88.6 * C,
      J: 3.54 * C,
      d: 9 * B,
      bf: 8.28 * B
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * xe,
      Iz: 53.8 * C,
      Iy: 2.18 * C,
      J: 0.0547 * C,
      d: 9.87 * B,
      bf: 3.96 * B
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 118 * C,
      Iy: 11.4 * C,
      J: 0.239 * C,
      d: 10.17 * B,
      bf: 5.75 * B
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * xe,
      Iz: 171 * C,
      Iy: 36.6 * C,
      J: 0.583 * C,
      d: 9.73 * B,
      bf: 7.96 * B
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * xe,
      Iz: 272 * C,
      Iy: 93.4 * C,
      J: 1.39 * C,
      d: 9.98 * B,
      bf: 10 * B
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * xe,
      Iz: 394 * C,
      Iy: 134 * C,
      J: 3.56 * C,
      d: 10.4 * B,
      bf: 10.13 * B
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * xe,
      Iz: 623 * C,
      Iy: 207 * C,
      J: 10.9 * C,
      d: 11.1 * B,
      bf: 10.34 * B
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * xe,
      Iz: 88.6 * C,
      Iy: 2.36 * C,
      J: 0.0704 * C,
      d: 11.91 * B,
      bf: 3.97 * B
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * xe,
      Iz: 156 * C,
      Iy: 4.66 * C,
      J: 0.293 * C,
      d: 12.31 * B,
      bf: 4.03 * B
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * xe,
      Iz: 204 * C,
      Iy: 17.3 * C,
      J: 0.3 * C,
      d: 12.22 * B,
      bf: 6.49 * B
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 310 * C,
      Iy: 44.1 * C,
      J: 0.906 * C,
      d: 11.94 * B,
      bf: 8.01 * B
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * xe,
      Iz: 425 * C,
      Iy: 95.8 * C,
      J: 1.58 * C,
      d: 12.06 * B,
      bf: 9.99 * B
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * xe,
      Iz: 597 * C,
      Iy: 195 * C,
      J: 4.05 * C,
      d: 12.25 * B,
      bf: 12.04 * B
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * xe,
      Iz: 833 * C,
      Iy: 270 * C,
      J: 8.44 * C,
      d: 12.71 * B,
      bf: 12.16 * B
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * xe,
      Iz: 1070 * C,
      Iy: 345 * C,
      J: 16 * C,
      d: 13.12 * B,
      bf: 12.32 * B
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 199 * C,
      Iy: 7 * C,
      J: 0.208 * C,
      d: 13.74 * B,
      bf: 5 * B
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * xe,
      Iz: 291 * C,
      Iy: 19.6 * C,
      J: 0.38 * C,
      d: 13.84 * B,
      bf: 6.73 * B
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * xe,
      Iz: 385 * C,
      Iy: 26.7 * C,
      J: 0.798 * C,
      d: 14.1 * B,
      bf: 6.77 * B
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 485 * C,
      Iy: 51.4 * C,
      J: 1.45 * C,
      d: 13.79 * B,
      bf: 8.03 * B
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * xe,
      Iz: 640 * C,
      Iy: 107 * C,
      J: 2.19 * C,
      d: 13.89 * B,
      bf: 9.99 * B
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * xe,
      Iz: 882 * C,
      Iy: 148 * C,
      J: 5.07 * C,
      d: 14.31 * B,
      bf: 10.13 * B
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * xe,
      Iz: 1240 * C,
      Iy: 447 * C,
      J: 7.12 * C,
      d: 14.32 * B,
      bf: 14.61 * B
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * xe,
      Iz: 1530 * C,
      Iy: 548 * C,
      J: 12.3 * C,
      d: 14.66 * B,
      bf: 14.73 * B
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * xe,
      Iz: 2140 * C,
      Iy: 838 * C,
      J: 23.7 * C,
      d: 15.22 * B,
      bf: 15.65 * B
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * xe,
      Iz: 301 * C,
      Iy: 9.59 * C,
      J: 0.262 * C,
      d: 15.69 * B,
      bf: 5.5 * B
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * xe,
      Iz: 448 * C,
      Iy: 24.5 * C,
      J: 0.545 * C,
      d: 15.86 * B,
      bf: 6.99 * B
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 659 * C,
      Iy: 37.2 * C,
      J: 1.52 * C,
      d: 16.26 * B,
      bf: 7.07 * B
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 954 * C,
      Iy: 119 * C,
      J: 2.39 * C,
      d: 16.33 * B,
      bf: 10.24 * B
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * xe,
      Iz: 1300 * C,
      Iy: 163 * C,
      J: 5.45 * C,
      d: 16.75 * B,
      bf: 10.37 * B
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * xe,
      Iz: 510 * C,
      Iy: 15.3 * C,
      J: 0.506 * C,
      d: 17.7 * B,
      bf: 6 * B
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 800 * C,
      Iy: 40.1 * C,
      J: 1.24 * C,
      d: 17.99 * B,
      bf: 7.5 * B
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * xe,
      Iz: 1170 * C,
      Iy: 60.3 * C,
      J: 3.49 * C,
      d: 18.47 * B,
      bf: 7.64 * B
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * xe,
      Iz: 1750 * C,
      Iy: 201 * C,
      J: 5.86 * C,
      d: 18.59 * B,
      bf: 11.15 * B
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * xe,
      Iz: 843 * C,
      Iy: 20.7 * C,
      J: 0.77 * C,
      d: 20.66 * B,
      bf: 6.5 * B
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * xe,
      Iz: 1330 * C,
      Iy: 57.5 * C,
      J: 1.83 * C,
      d: 20.99 * B,
      bf: 8.24 * B
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * xe,
      Iz: 1830 * C,
      Iy: 81.4 * C,
      J: 4.34 * C,
      d: 21.43 * B,
      bf: 8.36 * B
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * xe,
      Iz: 2670 * C,
      Iy: 274 * C,
      J: 6.83 * C,
      d: 21.51 * B,
      bf: 12.34 * B
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * xe,
      Iz: 1350 * C,
      Iy: 29.1 * C,
      J: 1.18 * C,
      d: 23.57 * B,
      bf: 7.01 * B
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * xe,
      Iz: 2100 * C,
      Iy: 82.5 * C,
      J: 2.68 * C,
      d: 23.92 * B,
      bf: 8.99 * B
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * xe,
      Iz: 3100 * C,
      Iy: 259 * C,
      J: 4.72 * C,
      d: 24.06 * B,
      bf: 12.75 * B
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * xe,
      Iz: 4020 * C,
      Iy: 340 * C,
      J: 9.5 * C,
      d: 24.48 * B,
      bf: 12.86 * B
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * xe,
      Iz: 4580 * C,
      Iy: 391 * C,
      J: 12.6 * C,
      d: 24.74 * B,
      bf: 12.9 * B
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * xe,
      Iz: 5680 * C,
      Iy: 479 * C,
      J: 21.2 * C,
      d: 25.24 * B,
      bf: 12.9 * B
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * xe,
      Iz: 2850 * C,
      Iy: 106 * C,
      J: 2.81 * C,
      d: 26.71 * B,
      bf: 9.96 * B
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * xe,
      Iz: 4090 * C,
      Iy: 159 * C,
      J: 6.77 * C,
      d: 27.29 * B,
      bf: 10.07 * B
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * xe,
      Iz: 3610 * C,
      Iy: 115 * C,
      J: 3.06 * C,
      d: 29.53 * B,
      bf: 10.4 * B
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * xe,
      Iz: 4930 * C,
      Iy: 164 * C,
      J: 6.43 * C,
      d: 30.01 * B,
      bf: 10.5 * B
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * xe,
      Iz: 5900 * C,
      Iy: 187 * C,
      J: 5.3 * C,
      d: 32.86 * B,
      bf: 11.48 * B
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * xe,
      Iz: 7800 * C,
      Iy: 225 * C,
      J: 7 * C,
      d: 35.55 * B,
      bf: 11.95 * B
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * xe,
      Iz: 8.22 * C,
      Iy: 8.22 * C,
      J: 13.4 * C,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * xe,
      Iz: 10.7 * C,
      Iy: 10.7 * C,
      J: 17.9 * C,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * xe,
      Iz: 12.3 * C,
      Iy: 12.3 * C,
      J: 21 * C,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 30.3 * C,
      Iy: 30.3 * C,
      J: 48.3 * C,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 41.1 * C,
      Iy: 41.1 * C,
      J: 66.9 * C,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * xe,
      Iz: 49.6 * C,
      Iy: 49.6 * C,
      J: 82.2 * C,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * xe,
      Iz: 70.7 * C,
      Iy: 70.7 * C,
      J: 112 * C,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 98 * C,
      Iy: 98 * C,
      J: 158 * C,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * xe,
      Iz: 122 * C,
      Iy: 122 * C,
      J: 199 * C,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 202 * C,
      Iy: 202 * C,
      J: 323 * C,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * xe,
      Iz: 254 * C,
      Iy: 254 * C,
      J: 412 * C,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * xe,
      Iz: 355 * C,
      Iy: 355 * C,
      J: 564 * C,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * xe,
      Iz: 452 * C,
      Iy: 452 * C,
      J: 724 * C,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * xe,
      Iz: 18 * C,
      Iy: 9.58 * C,
      J: 22.6 * C,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * xe,
      Iz: 23.8 * C,
      Iy: 12.3 * C,
      J: 30.3 * C,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 33.6 * C,
      Iy: 11.8 * C,
      J: 33 * C,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 45.1 * C,
      Iy: 15 * C,
      J: 44.5 * C,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * xe,
      Iz: 46.1 * C,
      Iy: 28.2 * C,
      J: 61.3 * C,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * xe,
      Iz: 63 * C,
      Iy: 37.5 * C,
      J: 84.6 * C,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 103 * C,
      Iy: 47.1 * C,
      J: 115 * C,
      d: 10 * B,
      bf: 6 * B
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 196 * C,
      Iy: 102 * C,
      J: 249 * C,
      d: 12 * B,
      bf: 8 * B
    }
  ];
  function Zo() {
    const e = {};
    return fo.forEach((x, _) => {
      x.type === "W" && (e[x.name] = _);
    }), e;
  }
  function Qo() {
    const e = {};
    return fo.forEach((x, _) => {
      x.type === "HSS" && (e[x.name] = _);
    }), e;
  }
  function ka(e) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h;
    const { nodes: x, elements: _, elementInputs: T, nodeInputs: V, deformOutputs: H } = e, U = x.length * 6, Y = _.length, j = _.filter((re) => re.length === 2).length, W = _.filter((re) => re.length >= 3).length, be = document.createElement("div");
    be.className = "rpt-overlay";
    let L = "";
    L += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', L += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", L += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', L += '<hr class="rpt-sep"/>', L += "<h2>1. Input Data</h2>", L += '<table class="rpt-info"><tbody>', L += `<tr><td>Number of nodes</td><td class="val">${x.length}</td></tr>`, L += `<tr><td>Number of elements</td><td class="val">${Y} (${j} frames, ${W} shells)</td></tr>`, L += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', L += `<tr><td>Total DOFs</td><td class="val">${U}</td></tr>`, L += "</tbody></table>", L += "<h3>1.1 Node Coordinates</h3>", L += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', x.forEach((re, de) => {
      L += `<tr><td>${de}</td><td>${Ke(re[0])}</td><td>${Ke(re[1])}</td><td>${Ke(re[2])}</td></tr>`;
    }), L += "</tbody></table>", L += "<h3>1.2 Element Connectivity</h3>", L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((re, de) => {
      var _a3, _b2, _c2, _d2;
      const ue = re.length === 2, Ce = re.map((Ue) => x[Ue]), Be = ue ? yo(oo(Ce[1], Ce[0])) : 0, qe = ((_a3 = T.elasticities) == null ? void 0 : _a3.get(de)) ?? 0, Ve = ((_b2 = T.areas) == null ? void 0 : _b2.get(de)) ?? 0, st = ((_c2 = T.momentsOfInertiaZ) == null ? void 0 : _c2.get(de)) ?? 0, Ye = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(de)) ?? 0;
      L += `<tr><td>${de}</td><td>${ue ? "Frame" : "Shell"}</td><td>${re.join(" \u2192 ")}</td>`, L += `<td>${Ke(Be)}</td><td>${Ke(qe)}</td><td>${Ke(Ve)}</td><td>${Ke(st)}</td><td>${Ke(Ye)}</td></tr>`;
    }), L += "</tbody></table>", L += "<h2>2. Element Formulation</h2>", j > 0 && (L += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", L += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", L += "<h4>2.1.1 Shape Functions</h4>", L += "<p><b>Axial</b> (linear interpolation):</p>", L += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', L += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', L += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', L += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', L += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', L += "</tbody></table>", L += Ta(), L += "<p><b>Torsion</b> (linear): same as axial.</p>", L += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", L += "<p>The B matrix relates nodal displacements to internal strains:</p>", L += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', L += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', L += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', L += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', L += "<h4>2.1.3 Constitutive Relations D</h4>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', L += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', L += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', L += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', L += "</tbody></table>", L += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", L += "<p>Obtained by analytical integration:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', L += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", L += '<div class="rpt-eq-small">', L += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", L += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", L += "</div>", L += "<h4>2.1.5 Transformation Matrix T</h4>", L += "<p>Direction cosines of element axis:</p>", L += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', L += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', L += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', L += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", L += "<h4>2.1.6 Global Stiffness Matrix</h4>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), L += "<h2>3. Numerical Results per Element</h2>", L += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let re = 0; re < Y; re++) {
      const de = _[re], ue = de.map((it) => x[it]);
      if (!(de.length === 2)) continue;
      const Be = yo(oo(ue[1], ue[0])), qe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(re)) ?? 0, Ve = ((_b = T.areas) == null ? void 0 : _b.get(re)) ?? 0, st = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(re)) ?? 0, Ye = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(re)) ?? 0, Ue = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(re)) ?? 0, bt = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(re)) ?? 0;
      let vt = null, fe = null, Oe = null;
      try {
        vt = on(ue, T, re), fe = nn(ue), Oe = jt(_n(fe), jt(vt, fe));
      } catch {
        continue;
      }
      const He = oo(ue[1], ue[0]), et = He[0] / Be, Ze = He[1] / Be, De = He[2] / Be;
      L += '<div class="rpt-elem-block">', L += `<h3 class="rpt-elem-title" data-toggle="elem${re}">\u25B6 Element ${re} \u2014 Nodes ${de[0]} \u2192 ${de[1]}, L = ${Ke(Be)}</h3>`, L += `<div id="rpt-elem${re}" class="rpt-elem-body" style="display:none">`, L += "<h4>Properties (numerical substitution)</h4>", L += '<div class="rpt-eq-small">', L += `E = ${Ke(qe)} &nbsp;&nbsp; A = ${Ke(Ve)} &nbsp;&nbsp; I<sub>z</sub> = ${Ke(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Ke(Ye)} &nbsp;&nbsp; G = ${Ke(Ue)} &nbsp;&nbsp; J = ${Ke(bt)}<br/>`, L += `EA/L = ${Ke(qe)}\xB7${Ke(Ve)}/${Ke(Be)} = <b>${Ke(qe * Ve / Be)}</b><br/>`, L += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ke(qe)}\xB7${Ke(st)}/${Ke(Be)}\xB3 = <b>${Ke(12 * qe * st / Be ** 3)}</b><br/>`, L += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ke(qe)}\xB7${Ke(Ye)}/${Ke(Be)}\xB3 = <b>${Ke(12 * qe * Ye / Be ** 3)}</b><br/>`, L += `GJ/L = ${Ke(Ue)}\xB7${Ke(bt)}/${Ke(Be)} = <b>${Ke(Ue * bt / Be)}</b>`, L += "</div>", L += "<h4>Direction cosines</h4>", L += `<div class="rpt-eq-small">l = ${en(et)}, m = ${en(Ze)}, n = ${en(De)}, D = ${en(Math.sqrt(et ** 2 + Ze ** 2))}</div>`, L += "<h4>K<sub>local</sub> (12\xD712)</h4>", L += qn(vt, 12), L += "<h4>T \u2014 Transformation (12\xD712)</h4>", L += qn(fe, 12), L += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", L += qn(Oe, 12), L += "<h4>Assembly</h4>", L += `<div class="rpt-eq-small">Global DOFs: node ${de[0]} \u2192 [${de[0] * 6}..${de[0] * 6 + 5}], node ${de[1]} \u2192 [${de[1] * 6}..${de[1] * 6 + 5}]</div>`, L += "</div></div>";
    }
    L += "<h2>4. Global Assembly</h2>", L += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Y - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, L += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", L += La(_, x.length), L += "<h2>5. Boundary Conditions</h2>";
    const le = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], Me = [];
    if (L += "<h3>5.1 Supports (fixed DOFs)</h3>", V.supports && V.supports.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of le) L += `<th>${re}</th>`;
      L += "</tr></thead><tbody>", V.supports.forEach((re, de) => {
        L += `<tr><td>${de}</td>`, re.forEach((ue, Ce) => {
          ue && Me.push(de * 6 + Ce), L += `<td class="${ue ? "fixed" : ""}">${ue ? "Fixed" : "Free"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += `<div class="rpt-eq-small">Fixed DOFs: [${Me.join(", ")}] \u2192 ${Me.length} constraints<br/>`, L += `Free DOFs: ${U} \u2212 ${Me.length} = <b>${U - Me.length}</b></div>`, L += "<h3>5.2 Applied Loads</h3>", V.loads && V.loads.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const re = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const de of re) L += `<th>${de}</th>`;
      L += "</tr></thead><tbody>", V.loads.forEach((de, ue) => {
        L += `<tr><td>${ue}</td>`, de.forEach((Ce) => {
          const Be = Math.abs(Ce) > 1e-10;
          L += `<td class="${Be ? "nz" : ""}">${Be ? Ke(Ce) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>6. Solution</h2>", L += "<p>After removing fixed DOFs, the reduced system is:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', L += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", L += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of le) L += `<th>${re}</th>`;
      L += "</tr></thead><tbody>", H.deformations.forEach((re, de) => {
        L += `<tr><td>${de}</td>`, re.forEach((ue) => {
          const Ce = Math.abs(ue) > 1e-10;
          L += `<td class="${Ce ? "nz" : ""}">${Ke(ue, 6)}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h3>6.2 Reactions</h3>", L += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of le) L += `<th>${re}</th>`;
      L += "</tr></thead><tbody>", H.reactions.forEach((re, de) => {
        L += `<tr><td>${de}</td>`, re.forEach((ue) => {
          const Ce = Math.abs(ue) > 1e-10;
          L += `<td class="${Ce ? "nz-react" : ""}">${Ce ? Ke(ue, 4) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>7. Internal Forces</h2>", L += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", L += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', L += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const re = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const de of re) L += `<th>${de}<sub>i</sub></th>`;
      for (const de of re) L += `<th>${de}<sub>j</sub></th>`;
      L += "</tr></thead><tbody>";
      for (let de = 0; de < Y; de++) {
        const ue = _[de];
        if (ue.length !== 2) continue;
        const Ce = ue.map((Be) => x[Be]);
        try {
          const Be = on(Ce, T, de), qe = nn(Ce), Ve = [];
          for (const Ue of ue) {
            const bt = ((_g = H.deformations) == null ? void 0 : _g.get(Ue)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ve.push(...bt);
          }
          const st = jt(qe, Ve), Ye = jt(Be, st);
          L += `<tr><td>${de}</td><td>${ue.join("\u2192")}</td>`;
          for (let Ue = 0; Ue < 12; Ue++) {
            const bt = Math.abs(Ye[Ue]) > 1e-10;
            L += `<td class="${bt ? "nz" : ""}">${Ke(Ye[Ue], 2)}</td>`;
          }
          L += "</tr>";
        } catch {
        }
      }
      L += "</tbody></table>";
    }
    const me = `
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
    return be.innerHTML = me + L, (_h = be.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => be.remove()), be.querySelectorAll("[data-toggle]").forEach((re) => {
      re.addEventListener("click", () => {
        const de = re.dataset.toggle, ue = be.querySelector(`#rpt-${de}`);
        if (ue) {
          const Ce = ue.style.display !== "none";
          ue.style.display = Ce ? "none" : "", re.textContent = re.textContent.replace(/^[▼▶]/, Ce ? "\u25B6" : "\u25BC");
        }
      });
    }), be;
  }
  function Ke(e, x = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(x) : e.toFixed(x);
  }
  function en(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function qn(e, x) {
    var _a2;
    const _ = Math.min(x, 12);
    let T = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let V = 0; V < _; V++) {
      T += "<tr>";
      for (let H = 0; H < _; H++) {
        const U = ((_a2 = e[V]) == null ? void 0 : _a2[H]) ?? 0, Y = Math.abs(U) < 1e-10;
        T += `<td class="${Y ? "z" : ""} ${V === H && !Y ? "diag" : ""}">${Y ? "0" : za(U)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", x > _ && (T += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${x}\xD7${x})</div>`), T += "</div>", T;
  }
  function za(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Ta() {
    const U = [
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
    let Y = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    Y += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, Y += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', Y += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, Y += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, Y += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const j of U) {
      let W = "";
      for (let Me = 0; Me <= 80; Me++) {
        const me = Me / 80, re = 30 + me * 540, de = 180 / 2 - j.fn(me) * 60;
        W += (Me === 0 ? "M" : "L") + `${re.toFixed(1)},${de.toFixed(1)}`;
      }
      Y += `<path d="${W}" fill="none" stroke="${j.color}" stroke-width="2.5"/>`;
      const be = 0.75, L = 30 + be * 540 + 8, le = 180 / 2 - j.fn(be) * 60 - 6;
      Y += `<text x="${L}" y="${le}" fill="${j.color}" font-size="11" font-weight="bold" font-family="sans-serif">${j.name}</text>`;
    }
    return Y += "</svg>", Y;
  }
  function La(e, x) {
    const _ = x * 6, T = Math.min(_, 30);
    let V = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    V += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', V += "<tr><td></td>";
    for (let U = 0; U < T; U++) V += `<td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
    V += "</tr>";
    const H = Array.from({
      length: T
    }, () => Array(T).fill(0));
    for (let U = 0; U < e.length; U++) {
      const Y = e[U].map((j) => j * 6);
      for (const j of Y) for (const W of Y) for (let be = 0; be < 6; be++) for (let L = 0; L < 6; L++) {
        const le = j + be, Me = W + L;
        le < T && Me < T && H[le][Me]++;
      }
    }
    for (let U = 0; U < T; U++) {
      V += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
      for (let Y = 0; Y < T; Y++) {
        const j = H[U][Y], W = j === 0 ? "#fff" : j === 1 ? "#e8f0fe" : j === 2 ? "#c6dcf5" : "#a0c4e8", be = j === 0 ? "" : j.toString();
        V += `<td style="background:${W};color:#003366">${be}</td>`;
      }
      V += "</tr>";
    }
    return V += "</table></div>", _ > T && (V += `<div style="color:#888;font-size:9pt">(showing ${T}\xD7${T} of ${_}\xD7${_})</div>`), V;
  }
  let On = false;
  function Aa(e) {
    if (On || window.katex) {
      On = true, e();
      return;
    }
    const x = document.createElement("link");
    x.rel = "stylesheet", x.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(x);
    const _ = document.createElement("script");
    _.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", _.onload = () => {
      On = true, e();
    }, document.head.appendChild(_);
  }
  function Ls(e, x = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: x,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Ca(e, x, _, T, V, H) {
    var _a2, _b, _c, _d, _e2, _f;
    const U = _[e], Y = U.map((fe) => x[fe]), j = U.length === 2, W = j ? yo(oo(Y[1], Y[0])) : 0, be = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, L = ((_b = T.areas) == null ? void 0 : _b.get(e)) ?? 0, le = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, Me = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, me = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(e)) ?? 0, re = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let de = null, ue = null, Ce = null;
    try {
      de = on(Y, T, e), ue = nn(Y), Ce = jt(_n(ue), jt(de, ue));
    } catch {
    }
    const Be = j ? oo(Y[1], Y[0]) : [
      0,
      0,
      0
    ], qe = W > 0 ? Be[0] / W : 0, Ve = W > 0 ? Be[1] / W : 0, st = W > 0 ? Be[2] / W : 0, Ye = Math.sqrt(qe ** 2 + Ve ** 2), Ue = [];
    if ((V == null ? void 0 : V.deformations) && j) for (const fe of U) {
      const Oe = V.deformations.get(fe) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ue.push(...Oe);
    }
    let bt = [], vt = [];
    if (Ue.length === 12 && ue && de) {
      try {
        bt = jt(ue, Ue);
      } catch {
        bt = Array(12).fill(0);
      }
      try {
        vt = jt(de, bt);
      } catch {
        vt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: U,
      elmNodes: Y,
      isFrame: j,
      L: W,
      E: be,
      A: L,
      Iz: le,
      Iy: Me,
      G: me,
      J: re,
      kLocal: de,
      T: ue,
      kGlobal: Ce,
      l: qe,
      m: Ve,
      n: st,
      D: Ye,
      uGlobal: Ue,
      uLocal: bt,
      fLocal: vt,
      dOut: V,
      aOut: H,
      totalNodes: x.length
    };
  }
  function Fa(e, x, _, T, V, H) {
    var _a2, _b;
    const U = Ca(e, x, _, T, V, H), Y = document.createElement("div");
    return Y.className = "er-panel", Y.innerHTML = Na + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${U.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${U.elem.join(" \u2192 ")} \u2014 L = ${_e(U.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Pa(U)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${As(U)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${qa(U)}</div>
  `, Y.querySelectorAll(".er-tab").forEach((j) => {
      j.addEventListener("click", () => {
        Y.querySelectorAll(".er-tab").forEach((be) => be.classList.remove("active")), j.classList.add("active");
        const W = j.dataset.tab;
        Y.querySelectorAll(".er-body").forEach((be) => be.style.display = "none"), Y.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a2 = Y.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => Y.remove()), (_b = Y.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const j = Y.classList.toggle("er-fullscreen-mode"), W = Y.querySelector("#er-fullscreen");
      W && (W.textContent = j ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const j = Y.querySelector("#er-sf-canvas");
      j && Nn(j);
      const W = Y.querySelector("#er-sf-canvas-math");
      W && Nn(W);
    }, 50), Aa(() => {
      const j = Y.querySelector("#er-body-math");
      j && (j.innerHTML = As(U)), setTimeout(() => {
        const W = Y.querySelector("#er-sf-canvas-math");
        W && Nn(W);
      }, 50), Y.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const be = W.dataset.toggle, L = Y.querySelector(`#er-${be}`);
          L && (L.style.display = L.style.display === "none" ? "" : "none");
        });
      });
    }), Y;
  }
  function Pa(e) {
    let x = "";
    if (x += '<div class="er-section-title">1. Propiedades</div>', x += '<table class="er-props">', x += `<tr><td>E</td><td>${_e(e.E)}</td><td>A</td><td>${_e(e.A)}</td></tr>`, x += `<tr><td>I<sub>z</sub></td><td>${_e(e.Iz)}</td><td>I<sub>y</sub></td><td>${_e(e.Iy)}</td></tr>`, x += `<tr><td>G</td><td>${_e(e.G)}</td><td>J</td><td>${_e(e.J)}</td></tr>`, x += "</table>", e.kLocal && (x += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, x += Wo(e.kLocal)), e.T && (x += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', x += Wo(e.T)), e.kGlobal && (x += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', x += Wo(e.kGlobal)), x += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const _ = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let T = 0; T < e.elem.length; T++) {
        x += `<div class="er-sub">Nodo ${e.elem[T]}: `;
        for (let V = 0; V < 6; V++) {
          const H = e.uGlobal[T * 6 + V];
          x += `${_[V]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${_e(H, 6)}</span> `;
        }
        x += "</div>";
      }
    } else x += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (x += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((_) => _ !== 0)) {
      const _ = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      x += '<table class="er-forces"><tr><th></th>';
      for (const T of _) x += `<th>${T}</th>`;
      x += "</tr>", x += "<tr><td>Nodo i</td>";
      for (let T = 0; T < 6; T++) x += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[T], 3)}</td>`;
      x += "</tr><tr><td>Nodo j</td>";
      for (let T = 6; T < 12; T++) x += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[T], 3)}</td>`;
      x += "</tr></table>";
    } else x += '<div class="er-sub">Sin an\xE1lisis</div>';
    return x;
  }
  function As(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let x = "";
    const _ = (be) => Ls(be), T = (be) => Ls(be, true);
    x += '<div class="er-section-title">1. Geometria del elemento</div>', x += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", x += `<div class="er-eq">${T("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, x += '<div class="er-eq-num">', x += `${_("\\text{Nodo } i")} = (${e.elmNodes[0].map((be) => _e(be)).join(", ")})<br/>`, x += `${_("\\text{Nodo } j")} = (${e.elmNodes[1].map((be) => _e(be)).join(", ")})<br/>`, x += `${T(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${_e(e.L)}}`)}`, x += "</div>", x += '<div class="er-section-title">2. Funciones de forma</div>', x += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", x += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', x += `<div class="er-eq">${T("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, x += "<p>Primera derivada:</p>", x += `<div class="er-eq">${T("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, x += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', x += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, x += `<div class="er-eq">${T("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, x += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, x += `<div class="er-eq">${T("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, x += `<div class="er-eq">${T("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, x += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', x += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', x += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", x += `<div class="er-eq">${T("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, x += '<div class="er-subsec">3.1 Deformacion axial</div>', x += `<div class="er-eq">${T("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, x += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, x += `<div class="er-eq">${T("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, x += `<div class="er-eq">${T("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, x += '<div class="er-subsec">3.4 Torsion</div>', x += `<div class="er-eq">${T("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, x += '<div class="er-section-title">4. Relaciones constitutivas D</div>', x += "<p>Cada modo de deformacion tiene su rigidez material:</p>", x += `<div class="er-eq">${T(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${_e(e.E)} \\times ${_e(e.A)} = \\mathbf{${_e(e.E * e.A)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${_e(e.E)} \\times ${_e(e.Iz)} = \\mathbf{${_e(e.E * e.Iz)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${_e(e.E)} \\times ${_e(e.Iy)} = \\mathbf{${_e(e.E * e.Iy)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${_e(e.G)} \\times ${_e(e.J)} = \\mathbf{${_e(e.G * e.J)}}`)}</div>`, x += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, x += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", x += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const V = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, U = e.E * e.Iy / e.L ** 3, Y = e.G * e.J / e.L;
    if (x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', x += "<p><b>Paso 1:</b> Funcion de forma axial</p>", x += `<div class="er-eq">${T("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, x += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", x += `<div class="er-eq">${T("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, x += `<div class="er-eq">${T("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.E)}\\times${_e(e.A)}}{${_e(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, x += `<div class="er-eq">${T(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${_e(V)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', x += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, x += `<div class="er-eq">${T("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, x += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", x += `<div class="er-eq">${T("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, x += `<div class="er-eq">${T("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, x += `<div class="er-eq">${T("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, x += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, x += `<div class="er-eq">${T("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${_e(e.E)} \\times ${_e(e.Iz)}}{${_e(e.L)}^3} = \\mathbf{${_e(12 * H)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', x += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', x += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, x += `<div class="er-eq">${T(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.G)}\\times${_e(e.J)}}{${_e(e.L)}} = \\mathbf{${_e(Y)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', x += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', x += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, x += `<div class="er-eq">${T("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, x += "</div></div>", x += '<div class="er-subsec">Resumen de coeficientes:</div>', x += `<div class="er-eq">${T(`\\frac{EA}{L} = \\mathbf{${_e(V)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${_e(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${_e(12 * U)}}`)}</div>`, x += `<div class="er-eq">${T(`\\frac{GJ}{L} = \\mathbf{${_e(Y)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${_e(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${_e(4 * e.E * e.Iz / e.L)}}`)}</div>`, x += `<div class="er-eq">${T(`\\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${_e(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (x += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, x += Wo(e.kLocal)), x += '<div class="er-section-title">6. Transformacion de coordenadas</div>', x += "<p>Los cosenos directores del eje del elemento:</p>", x += `<div class="er-eq">${T(`l = \\frac{x_j - x_i}{L} = ${tn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${tn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${tn(e.n)}`)}</div>`, x += `<div class="er-eq">${T(`D = \\sqrt{l^2 + m^2} = ${tn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      x += `<p>Caso especial: elemento vertical (${_(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const be = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      x += `<div class="er-eq">${T(be)}</div>`;
    } else x += `<div class="er-eq">${T("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    x += `<div class="er-eq er-eq-main">${T("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, x += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, x += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", x += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (x += Wo(e.kGlobal)), x += '<div class="er-section-title">8. Ensamblaje</div>';
    const j = e.elem[0] * 6, W = e.elem[1] * 6;
    if (x += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, x += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, x += `<div class="er-eq">${T("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, x += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', x += `<div class="er-eq">${T("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, x += `<div class="er-eq er-eq-main">${T("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((be) => be !== 0)) {
      const be = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      x += '<table class="er-forces"><tr><th></th>';
      for (const L of be) x += `<th>${L}</th>`;
      x += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let L = 0; L < 6; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let L = 6; L < 12; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += "</tr></table>";
    }
    return x;
  }
  function qa(e) {
    let x = "";
    if (x += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, x += '<table class="er-props">', x += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, x += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, x += `<tr><td>Longitud</td><td><b>${_e(e.L)}</b></td></tr>`, x += `<tr><td>E</td><td>${_e(e.E)}</td></tr>`, x += `<tr><td>A</td><td>${_e(e.A)}</td></tr>`, x += "</table>", e.uGlobal.length > 0) {
      x += '<div class="er-section-title">Desplazamientos</div>';
      const _ = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      x += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const T of _) x += `<th>${T}</th>`;
      x += "</tr>";
      for (let T = 0; T < e.elem.length; T++) {
        x += `<tr><td>${e.elem[T]}</td>`;
        for (let V = 0; V < 6; V++) {
          const H = e.uGlobal[T * 6 + V];
          x += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${_e(H, 6)}</td>`;
        }
        x += "</tr>";
      }
      x += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((_) => _ !== 0)) {
      x += '<div class="er-section-title">Fuerzas internas</div>';
      const _ = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      x += '<table class="er-forces"><tr><th></th>';
      for (const T of _) x += `<th>${T}</th>`;
      x += "</tr><tr><td>Nodo i</td>";
      for (let T = 0; T < 6; T++) x += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[T], 3)}</td>`;
      x += "</tr><tr><td>Nodo j</td>";
      for (let T = 6; T < 12; T++) x += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[T], 3)}</td>`;
      x += "</tr></table>";
    }
    return x;
  }
  function _e(e, x = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(x) : e.toFixed(x);
  }
  function tn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Wo(e) {
    var _a2;
    const x = e.length, _ = Math.min(x, 12);
    let T = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let V = 0; V < _; V++) {
      T += "<tr>";
      for (let H = 0; H < _; H++) {
        const U = ((_a2 = e[V]) == null ? void 0 : _a2[H]) ?? 0, Y = Math.abs(U) < 1e-10;
        T += `<td class="${Y ? "z" : ""} ${V === H && !Y ? "diag" : ""}">${Y ? "0" : Oa(U)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", x > _ && (T += `<div style="color:var(--fem-label);font-size:9px">(${_}\xD7${_} de ${x}\xD7${x})</div>`), T += "</div>", T;
  }
  function Oa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Nn(e) {
    const x = e.getContext("2d");
    if (!x) return;
    const _ = e.width, T = e.height, V = 30, H = _ - 2 * V, U = (T - 3 * V) / 2;
    x.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", x.fillRect(0, 0, _, T);
    const Y = (j, W, be) => {
      x.strokeStyle = "#333", x.lineWidth = 1, x.strokeRect(V, j, H, U), x.strokeStyle = "#444", x.beginPath(), x.moveTo(V, j + U / 2), x.lineTo(V + H, j + U / 2), x.stroke(), x.fillStyle = "#888", x.font = "11px sans-serif", x.fillText(W, V + 4, j + 14);
      for (const le of be) {
        x.strokeStyle = le.color, x.lineWidth = 2.5, x.beginPath();
        for (let Me = 0; Me <= 100; Me++) {
          const me = Me / 100, re = V + me * H, de = j + U / 2 - le.fn(me) * (U / 2 * 0.85);
          Me === 0 ? x.moveTo(re, de) : x.lineTo(re, de);
        }
        x.stroke();
      }
      let L = V + H - 90;
      for (const le of be) x.fillStyle = le.color, x.font = "bold 10px sans-serif", x.fillText(le.label, L, j + U - 6), L += 36;
      x.fillStyle = "#666", x.font = "9px monospace", x.fillText("0", V, j + U + 12), x.fillText("1", V + H - 6, j + U + 12), x.fillText("\u03BE", V + H / 2, j + U + 12);
    };
    Y(V, "Axial (lineal)", [
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
    ]), Y(V + U + V, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  const Na = `<style>
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
</style>`, Do = [
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
  let sn = false, $o = null, Yt = null, Lt = null, wt = null;
  function Ra() {
    wt = document.createElement("button"), wt.id = "help-tour-btn", wt.innerHTML = "?", wt.title = "Ayuda interactiva \u2014 Tour guiado", wt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, wt.addEventListener("mouseenter", () => {
      wt.style.transform = "scale(1.15)", wt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), wt.addEventListener("mouseleave", () => {
      wt.style.transform = "scale(1)", wt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), wt.addEventListener("click", () => {
      sn ? Hn() : _a();
    });
    const e = document.createElement("style");
    return e.textContent = `
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
  `, document.head.appendChild(e), wt;
  }
  function _a() {
    sn = true, wt && (wt.innerHTML = "\u2715", wt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", wt.style.animation = "none"), $o = document.createElement("div"), $o.id = "tour-overlay", $o.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild($o), qo(0);
  }
  function Hn() {
    sn = false, wt && (wt.innerHTML = "?", wt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", wt.style.animation = "helpPulse 2s infinite"), Yt && (Yt.remove(), Yt = null), Lt && (Lt.remove(), Lt = null), $o && ($o.remove(), $o = null);
  }
  function qo(e) {
    var _a2, _b;
    if (e >= Do.length) {
      Ha();
      return;
    }
    const x = Do[e], _ = document.querySelector(x.selector);
    if (!_) {
      qo(e + 1);
      return;
    }
    _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Yt && Yt.remove(), Lt && Lt.remove();
    const T = _.getBoundingClientRect(), V = window.innerWidth, H = window.innerHeight, U = 320, Y = 180;
    Yt = document.createElement("div"), Yt.style.cssText = `
    position: fixed;
    left: ${T.left - 6}px; top: ${T.top - 6}px;
    width: ${T.width + 12}px; height: ${T.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Yt);
    const j = V - T.right, W = T.left, be = H - T.bottom, L = T.top;
    let le = x.position || "bottom";
    le === "bottom" && be < Y + 20 && (le = "top"), le === "top" && L < Y + 20 && (le = "right"), le === "right" && j < U + 20 && (le = "left"), le === "left" && W < U + 20 && (le = "bottom");
    let Me, me, re = "";
    switch (le) {
      case "bottom":
        Me = T.left + T.width / 2 - U / 2, me = T.bottom + 14, re = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        Me = T.left + T.width / 2 - U / 2, me = T.top - Y - 14, re = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        Me = T.right + 14, me = T.top + T.height / 2 - Y / 2, re = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        Me = T.left - U - 14, me = T.top + T.height / 2 - Y / 2, re = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    Me = Math.max(10, Math.min(Me, V - U - 10)), me = Math.max(10, Math.min(me, H - Y - 10)), Lt = document.createElement("div"), Lt.style.cssText = `
    position: fixed;
    left: ${Me}px; top: ${me}px;
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
  `, Lt.innerHTML = `
    <div style="${re}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${x.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Do.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${x.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Do.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Do.map((ue, Ce) => `<div style="width:${Ce === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${Ce === e ? "#0099ff" : Ce < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Lt), (_a2 = Lt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      qo(e + 1);
    }), (_b = Lt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      qo(e - 1);
    });
    const de = (ue) => {
      if (!sn) {
        document.removeEventListener("keydown", de);
        return;
      }
      (ue.key === "ArrowRight" || ue.key === "Enter") && (qo(e + 1), document.removeEventListener("keydown", de)), ue.key === "ArrowLeft" && (qo(Math.max(0, e - 1)), document.removeEventListener("keydown", de)), ue.key === "Escape" && (Hn(), document.removeEventListener("keydown", de));
    };
    document.addEventListener("keydown", de);
  }
  function Ha() {
    var _a2;
    Yt && (Yt.remove(), Yt = null), Lt && (Lt.remove(), Lt = null), Lt = document.createElement("div"), Lt.style.cssText = `
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
  `, Lt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Lt), (_a2 = Lt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Hn());
  }
  function Ba(e) {
    var _a2;
    const x = e.split(/\r?\n/), _ = {
      force: "TONF",
      length: "M"
    }, T = [], V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], j = [], W = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = [], le = [];
    let Me = "", me = "";
    const re = /* @__PURE__ */ new Map();
    for (const ge of x) {
      const ve = ge.trim();
      if (!ve || ve.startsWith("$")) {
        ve.startsWith("$ ") && (me = ve.substring(2).trim());
        continue;
      }
      if (me && (re.has(me) || re.set(me, []), re.get(me).push(ge)), me === "CONTROLS") {
        const ee = ve.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ee && (_.force = ee[1], _.length = ee[2]);
        const Le = ve.match(/TITLE2\s+"([^"]+)"/);
        Le && (Me = Le[1]);
      }
      if (me === "STORIES - IN SEQUENCE FROM TOP") {
        const ee = ve.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ee) {
          const Le = ee[1], oe = ee[2] ? parseFloat(ee[2]) : 0, he = ee[3] ? parseFloat(ee[3]) : void 0;
          T.push({
            name: Le,
            height: oe,
            elev: he ?? 0
          });
        }
      }
      if (me === "MATERIAL PROPERTIES") {
        const ee = ve.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ee) {
          const Le = ee[1];
          V.has(Le) || V.set(Le, {
            type: ee[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const oe = V.get(Le);
          ee[2] && (oe.type = ee[2]);
          const he = ve.match(/\bE\s+([\d.eE+-]+)/);
          he && (oe.E = parseFloat(he[1]));
          const Re = ve.match(/\bU\s+([\d.eE+-]+)/);
          Re && (oe.nu = parseFloat(Re[1]), oe.G = oe.E / (2 * (1 + oe.nu)));
          const Ie = ve.match(/\bFY\s+([\d.eE+-]+)/);
          Ie && (oe.fy = parseFloat(Ie[1]));
          const ot = ve.match(/\bFC\s+([\d.eE+-]+)/);
          ot && (oe.fc = parseFloat(ot[1]));
          const Ne = ve.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ne && (oe.density = parseFloat(Ne[1]));
        }
      }
      if (me === "FRAME SECTIONS") {
        const ee = ve.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ee) {
          const Le = ee[1];
          H.has(Le) || H.set(Le, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const oe = H.get(Le), he = ve.match(/MATERIAL\s+"([^"]+)"/);
          he && (oe.material = he[1]);
          const Re = ve.match(/SHAPE\s+"([^"]+)"/);
          Re && (oe.shape = Re[1]);
          const Ie = ve.match(/\bD\s+([\d.eE+-]+)/);
          Ie && (oe.D = parseFloat(Ie[1]));
          const ot = ve.match(/\bB\s+([\d.eE+-]+)/);
          ot && (oe.B = parseFloat(ot[1]));
          const Ne = ve.match(/\bTF\s+([\d.eE+-]+)/);
          Ne && (oe.TF = parseFloat(Ne[1]));
          const Fe = ve.match(/\bTW\s+([\d.eE+-]+)/);
          Fe && (oe.TW = parseFloat(Fe[1]));
          const Qe = ve.match(/\bR\s+([\d.eE+-]+)/);
          Qe && (oe.R = parseFloat(Qe[1]));
          const Ge = ve.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ge && (oe.fillMaterial = Ge[1]);
          const rt = ve.match(/I2MOD\s+([\d.eE+-]+)/);
          rt && (oe.modI2 = parseFloat(rt[1]));
          const Ct = ve.match(/I3MOD\s+([\d.eE+-]+)/);
          Ct && (oe.modI3 = parseFloat(Ct[1]));
        }
      }
      if (me === "POINT COORDINATES") {
        const ee = ve.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ee && U.set(ee[1], [
          parseFloat(ee[2]),
          parseFloat(ee[3])
        ]);
      }
      if (me === "LINE CONNECTIVITIES") {
        const ee = ve.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ee && Y.push({
          name: ee[1],
          type: ee[2],
          pt1: ee[3],
          pt2: ee[4],
          nStories: parseInt(ee[5])
        });
      }
      if (me === "POINT ASSIGNS") {
        const ee = ve.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ee && W.set(`${ee[1]}@${ee[2]}`, ee[3].split(/\s+/));
      }
      if (me === "LINE ASSIGNS") {
        const ee = ve.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ee) {
          const Le = {
            story: ee[2],
            section: ee[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, oe = ve.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          oe && (Le.rigidZone = parseFloat(oe[1]));
          const he = ve.match(/RELEASE\s+"([^"]+)"/);
          he && (Le.releases = he[1].split(/\s+/));
          const Re = ve.match(/ANG\s+([-\d.eE+]+)/);
          Re && (Le.angle = parseFloat(Re[1])), be.set(`${ee[1]}@${ee[2]}`, Le);
        }
      }
      if (me === "GRIDS") {
        const ee = ve.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ee && le.push({
          label: ee[1],
          dir: ee[2],
          coord: parseFloat(ee[3])
        });
      }
      if (me === "FRAME OBJECT LOADS") {
        const ee = ve.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ee && L.push({
          line: ee[1],
          story: ee[2],
          type: ee[3],
          dir: ee[4],
          lc: ee[5],
          val: parseFloat(ee[6])
        });
      }
      if (me === "AREA CONNECTIVITIES") {
        const ee = ve.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ee) {
          const Le = ((_a2 = ee[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((oe) => oe.replace(/"/g, ""))) || [];
          j.push({
            name: ee[1],
            pts: Le,
            nStories: 0
          });
        }
      }
    }
    const de = /* @__PURE__ */ new Map();
    if (T.length > 0) {
      const ge = T.length - 1;
      de.set(T[ge].name, T[ge].elev);
      for (let ve = ge - 1; ve >= 0; ve--) {
        const Le = de.get(T[ve + 1].name) + T[ve].height;
        T[ve].elev = Le, de.set(T[ve].name, Le);
      }
    }
    const ue = [], Ce = [], Be = /* @__PURE__ */ new Map(), qe = (ge, ve) => `${ge}@${ve}`, Ve = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const ge of Y) st.set(ge.name, ge);
    for (const ge of Y) for (const [ve, ee] of be) {
      if (!ve.startsWith(ge.name + "@")) continue;
      const Le = ee.story, oe = T.findIndex((he) => he.name === Le);
      if (!(oe < 0)) if (ge.type === "COLUMN" || ge.type === "BRACE") {
        Ve.add(qe(ge.pt2, Le));
        const he = Math.max(ge.nStories, 1), Re = Math.min(oe + he, T.length - 1);
        Ve.add(qe(ge.pt1, T[Re].name));
      } else Ve.add(qe(ge.pt1, Le)), Ve.add(qe(ge.pt2, Le));
    }
    for (const [ge] of W) Ve.add(ge);
    for (const ge of Ve) {
      const [ve, ee] = ge.split("@"), Le = U.get(ve), oe = de.get(ee);
      Le === void 0 || oe === void 0 || (ue.push([
        Le[0],
        Le[1],
        oe
      ]), Ce.push(ge), Be.set(ge, ue.length - 1));
    }
    const Ye = [], Ue = [], bt = [], vt = [], fe = /* @__PURE__ */ new Map();
    for (const ge of Y) for (const [ve, ee] of be) {
      if (!ve.startsWith(ge.name + "@")) continue;
      const Le = ee.story, oe = T.findIndex((Fe) => Fe.name === Le);
      if (oe < 0) continue;
      let he, Re;
      if (ge.type === "COLUMN" || ge.type === "BRACE") {
        const Fe = Math.max(ge.nStories, 1), Qe = Math.min(oe + Fe, T.length - 1);
        he = qe(ge.pt1, T[Qe].name), Re = qe(ge.pt2, Le);
      } else he = qe(ge.pt1, Le), Re = qe(ge.pt2, Le);
      const Ie = Be.get(he), ot = Be.get(Re);
      if (Ie === void 0 || ot === void 0 || Ie === ot) continue;
      const Ne = Ye.length;
      if (Ye.push([
        Ie,
        ot
      ]), Ue.push(ge.name), bt.push(ge.type), vt.push(Le), fe.set(Ne, ee.section), ee.rigidZone > 0 && it.set(Ne, [
        ee.rigidZone,
        ee.rigidZone
      ]), ee.releases.length > 0) {
        const Fe = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const Qe of ee.releases) Qe === "TI" && (Fe[0] = true), Qe === "M2I" && (Fe[1] = true), Qe === "M3I" && (Fe[2] = true), Qe === "TJ" && (Fe[3] = true), Qe === "M2J" && (Fe[4] = true), Qe === "M3J" && (Fe[5] = true);
        at.set(Ne, Fe);
      }
    }
    const Oe = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map();
    for (const [ge, ve] of fe) {
      const ee = H.get(ve);
      if (!ee) continue;
      const Le = V.get(ee.material);
      Le && (Oe.set(ge, Le.E), He.set(ge, Le.G));
      const oe = ee.D, he = ee.B, Re = ee.TF, Ie = ee.TW;
      let ot = 0, Ne = 0, Fe = 0, Qe = 0, Ge = 0, rt = 0, Ct = "rect";
      switch (ee.shape) {
        case "Concrete Rectangular":
          ot = oe * he, Ne = he * oe ** 3 / 12, Fe = oe * he ** 3 / 12, Qe = he * oe ** 3 * (1 / 3 - 0.21 * (oe / he) * (1 - oe ** 4 / (12 * he ** 4))), Ge = rt = 5 / 6 * ot, Ct = "rect";
          break;
        case "Concrete Circle":
          ot = Math.PI * oe ** 2 / 4, Ne = Fe = Math.PI * oe ** 4 / 64, Qe = Math.PI * oe ** 4 / 32, Ge = rt = 0.9 * ot, Ct = "circ";
          break;
        case "Steel I/Wide Flange":
          ot = 2 * he * Re + (oe - 2 * Re) * Ie, Ne = (he * oe ** 3 - (he - Ie) * (oe - 2 * Re) ** 3) / 12, Fe = (2 * Re * he ** 3 + (oe - 2 * Re) * Ie ** 3) / 12, Qe = (2 * he * Re ** 3 + (oe - 2 * Re) * Ie ** 3) / 3, Ge = (oe - 2 * Re) * Ie, rt = 2 * he * Re * 5 / 6, Ct = "I";
          break;
        case "Steel Tube":
          ot = oe * he - (oe - 2 * Ie) * (he - 2 * Ie), Ne = (he * oe ** 3 - (he - 2 * Ie) * (oe - 2 * Ie) ** 3) / 12, Fe = (oe * he ** 3 - (oe - 2 * Ie) * (he - 2 * Ie) ** 3) / 12, Qe = 2 * Ie * (oe - Ie) * (he - Ie) * ((oe - Ie) * (he - Ie)) / (oe - Ie + (he - Ie)), Ge = 2 * oe * Ie, rt = 2 * he * Ie, Ct = "HSS";
          break;
        case "Filled Steel Tube":
          ot = oe * he, Ne = he * oe ** 3 / 12, Fe = oe * he ** 3 / 12, Qe = 2 * Ie * (oe - Ie) * (he - Ie) * ((oe - Ie) * (he - Ie)) / (oe - Ie + (he - Ie)), Ge = 2 * oe * Ie + 5 / 6 * (oe - 2 * Ie) * (he - 2 * Ie), rt = 2 * he * Ie + 5 / 6 * (oe - 2 * Ie) * (he - 2 * Ie), Ct = "CFT";
          break;
        case "Steel Angle": {
          const qt = Re || Ie;
          ot = qt * (oe + he - qt), Ne = qt * (oe ** 3 + he * qt ** 2 + qt ** 2 * (oe - qt)) / 12, Fe = qt * (he ** 3 + oe * qt ** 2 + qt ** 2 * (he - qt)) / 12, Qe = (oe + he - qt) * qt ** 3 / 3, Ge = oe * qt, rt = he * qt, Ct = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ot = 2 * he * Re + (oe - 2 * Re) * Ie, Ne = (Ie * oe ** 3 + 2 * he * Re * (oe - Re) ** 2) / 12, Fe = (2 * Re * he ** 3 + (oe - 2 * Re) * Ie ** 3) / 12, Qe = (2 * he * Re ** 3 + (oe - 2 * Re) * Ie ** 3) / 3, Ge = (oe - 2 * Re) * Ie, rt = 2 * he * Re * 5 / 6, Ct = ee.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ot = 2 * (2 * he * Re + (oe - 2 * Re) * Ie), Ne = 2 * (Ie * oe ** 3 + 2 * he * Re * (oe - Re) ** 2) / 12, Fe = 2 * (2 * Re * he ** 3 + (oe - 2 * Re) * Ie ** 3) / 12, Qe = 2 * (2 * he * Re ** 3 + (oe - 2 * Re) * Ie ** 3) / 3, Ge = 2 * (oe - 2 * Re) * Ie, rt = 4 * he * Re * 5 / 6, Ct = "2C";
          break;
        default:
          oe > 0 && he > 0 && (ot = oe * he, Ne = he * oe ** 3 / 12, Fe = oe * he ** 3 / 12, Qe = Math.min(oe, he) * Math.max(oe, he) ** 3 / 3 * 0.3, Ge = rt = 5 / 6 * ot);
          break;
      }
      ee.modI2 && (Fe *= ee.modI2), ee.modI3 && (Ne *= ee.modI3), et.set(ge, ot), yt.set(ge, Ne), It.set(ge, Fe), lt.set(ge, Qe), Ge > 0 && Ze.set(ge, Ge), rt > 0 && De.set(ge, rt), At.set(ge, {
        type: Ct,
        b: he || void 0,
        h: oe || void 0,
        d: Ct === "circ" || Ct === "pipe" ? oe : void 0,
        tw: Ie || void 0,
        tf: Re || void 0,
        r: ee.R,
        name: ve
      });
    }
    const kt = /* @__PURE__ */ new Map();
    for (const [ge, ve] of W) {
      const ee = Be.get(ge);
      if (ee === void 0) continue;
      const Le = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const oe of ve) oe === "UX" && (Le[0] = true), oe === "UY" && (Le[1] = true), oe === "UZ" && (Le[2] = true), oe === "RX" && (Le[3] = true), oe === "RY" && (Le[4] = true), oe === "RZ" && (Le[5] = true);
      kt.set(ee, Le);
    }
    const ke = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
    for (let ge = 0; ge < Ue.length; ge++) Mt.set(`${Ue[ge]}@${vt[ge]}`, ge);
    for (const ge of L) {
      const ve = Mt.get(`${ge.line}@${ge.story}`);
      if (ve === void 0) continue;
      const [ee, Le] = Ye[ve], oe = ue[ee], he = ue[Le], Re = Math.sqrt((he[0] - oe[0]) ** 2 + (he[1] - oe[1]) ** 2 + (he[2] - oe[2]) ** 2);
      if (Re < 1e-10) continue;
      const Ie = ge.val * Re / 2;
      let ot = 0, Ne = 0, Fe = 0;
      ge.dir === "GRAV" || ge.dir === "GRAVITY" ? Fe = -Ie : ge.dir === "X" ? ot = Ie : ge.dir === "Y" ? Ne = Ie : ge.dir === "Z" && (Fe = -Ie);
      for (const Qe of [
        ee,
        Le
      ]) {
        const Ge = ke.get(Qe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ge[0] += ot, Ge[1] += Ne, Ge[2] += Fe, ke.set(Qe, Ge);
      }
    }
    const ht = /* @__PURE__ */ new Map();
    for (const [ge, ve] of fe) {
      const ee = H.get(ve);
      if (!ee) continue;
      const Le = V.get(ee.material);
      (Le == null ? void 0 : Le.density) && ht.set(ge, Le.density);
    }
    return {
      units: _,
      stories: T.reverse(),
      materials: V,
      frameSections: H,
      nodes: ue,
      nodeNames: Ce,
      nodeNameToIdx: Be,
      elements: Ye,
      elementNames: Ue,
      elementTypes: bt,
      elementStories: vt,
      elementSections: fe,
      nodeInputs: {
        supports: kt,
        loads: ke
      },
      elementInputs: {
        elasticities: Oe,
        shearModuli: He,
        areas: et,
        momentsOfInertiaZ: yt,
        momentsOfInertiaY: It,
        torsionalConstants: lt,
        shearAreasY: Ze,
        shearAreasZ: De,
        rigidOffsets: it,
        momentReleases: at,
        densities: ht,
        sectionShapes: At
      },
      sectionShapes: At,
      grids: le,
      info: {
        nNodes: ue.length,
        nFrames: Ye.length,
        nAreas: j.length,
        title: Me
      },
      rawSections: re
    };
  }
  function Da(e) {
    const { e2kModel: x } = e, _ = x == null ? void 0 : x.rawSections;
    return _ && _.size > 0 ? Wa(_) : ja(e);
  }
  function Wa(e, x) {
    const _ = [], T = [
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
    _.push("$ File exported from Awatif FEM Studio (round-trip)"), _.push("");
    for (const V of T) {
      const H = e.get(V);
      if (!(!H || H.length === 0)) {
        _.push(`$ ${V}`);
        for (const U of H) _.push(U);
        _.push("");
      }
    }
    for (const [V, H] of e) if (!T.includes(V) && H.length !== 0) {
      _.push(`$ ${V}`);
      for (const U of H) _.push(U);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function ja(e) {
    var _a2, _b, _c, _d;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: V, title: H, units: U } = e, Y = (U == null ? void 0 : U.force) || "TONF", j = (U == null ? void 0 : U.length) || "M", W = [], be = (fe) => Math.round(fe * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${Y}"  "${j}"  "C"  `), H && W.push(`  TITLE2  "${H}"  `), W.push("");
    const L = /* @__PURE__ */ new Set();
    x.forEach((fe) => L.add(be(fe[1])));
    const le = [
      ...L
    ].sort((fe, Oe) => fe - Oe), Me = [], me = /* @__PURE__ */ new Map();
    Me.push("Base"), me.set(le[0], "Base");
    for (let fe = 1; fe < le.length; fe++) {
      const Oe = `Level_${fe}`;
      Me.push(Oe), me.set(le[fe], Oe);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let fe = le.length - 1; fe >= 1; fe--) W.push(`  STORY "${Me[fe]}"  HEIGHT ${be(le[fe] - le[fe - 1])} MASTERSTORY "Yes"  `);
    le.length > 0 && W.push(`  STORY "Base"  ELEV ${le[0]} `), W.push(""), _.some((fe) => fe.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const de = /* @__PURE__ */ new Set();
    (_a2 = V.elasticities) == null ? void 0 : _a2.forEach((fe) => de.add(fe));
    const ue = /* @__PURE__ */ new Map();
    let Ce = 0;
    for (const fe of de) {
      const Oe = `Mat_${++Ce}`;
      ue.set(fe, Oe), W.push(`  MATERIAL  "${Oe}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Oe}"    SYMTYPE "Isotropic"  E ${fe}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const Be = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
    _.forEach((fe, Oe) => {
      var _a3, _b2;
      if (fe.length !== 2) return;
      const He = (_a3 = V.sectionShapes) == null ? void 0 : _a3.get(Oe), et = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(Oe)) ?? 0, Ze = ue.get(et) || "Mat_1", De = (He == null ? void 0 : He.h) ?? 0, it = (He == null ? void 0 : He.b) ?? 0, at = (He == null ? void 0 : He.d) ?? 0, yt = (He == null ? void 0 : He.tf) ?? 0, It = (He == null ? void 0 : He.tw) ?? 0, lt = (He == null ? void 0 : He.type) || "rect", At = `${lt}_${De}_${it}_${at}_${yt}_${It}`;
      (He == null ? void 0 : He.name) && !Ve.has(At) && Ve.set(At, He.name);
      let kt = Ve.get(At);
      if (kt || (lt === "rect" ? kt = `R${be(it * 100)}x${be(De * 100)}` : lt === "circ" ? kt = `C_D${be(at * 100)}` : lt === "I" ? kt = `I_${be(De * 100)}` : kt = `Sec_${Be.size + 1}`, Ve.set(At, kt)), qe.set(Oe, kt), Be.has(kt)) return;
      Be.add(kt);
      const Mt = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[lt] || "Concrete Rectangular";
      let ht = `  FRAMESECTION  "${kt}"  MATERIAL "${Ze}"  SHAPE "${Mt}"`;
      De && (ht += `  D ${De}`), it && (ht += `  B ${it}`), at && !De && (ht += `  D ${at}`), yt && (ht += `  TF ${yt}`), It && (ht += `  TW ${It}`), W.push(ht);
    }), W.push("");
    const st = /* @__PURE__ */ new Map();
    let Ye = 0;
    x.forEach((fe) => {
      const Oe = `${be(fe[0])},${be(fe[2])}`;
      st.has(Oe) || st.set(Oe, `${++Ye}`);
    }), W.push("$ POINT COORDINATES");
    for (const [fe, Oe] of st) {
      const [He, et] = fe.split(",").map(Number);
      W.push(`  POINT "${Oe}"  ${He} ${et} `);
    }
    W.push("");
    const Ue = (fe) => {
      const Oe = x[fe], He = `${be(Oe[0])},${be(Oe[2])}`;
      return {
        pt: st.get(He) || "1",
        story: me.get(be(Oe[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const bt = [];
    _.forEach((fe, Oe) => {
      if (fe.length !== 2) return;
      const He = Ya(x, fe), et = qe.get(Oe) || `Sec_${Oe}`;
      if (He === "BEAM") {
        const Ze = Ue(fe[0]), De = Ue(fe[1]);
        W.push(`  LINE  "E${Oe + 1}"  BEAM  "${Ze.pt}"  "${De.pt}"  0`), bt.push(`  LINEASSIGN  "E${Oe + 1}"  "${Ze.story}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const Ze = x[fe[0]][1] <= x[fe[1]][1] ? fe[0] : fe[1], De = x[fe[0]][1] <= x[fe[1]][1] ? fe[1] : fe[0];
        Ue(Ze);
        const it = Ue(De), at = be(x[Ze][1]), yt = be(x[De][1]), It = le.indexOf(at), lt = le.indexOf(yt), At = Math.max(1, lt >= 0 && It >= 0 ? lt - It : 1);
        W.push(`  LINE  "E${Oe + 1}"  ${He}  "${it.pt}"  "${it.pt}"  ${At}`);
        for (let kt = 0; kt < At; kt++) {
          const ke = lt - kt;
          ke >= 0 && ke < Me.length && bt.push(`  LINEASSIGN  "E${Oe + 1}"  "${Me[ke]}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = T.supports) == null ? void 0 : _b.forEach((fe, Oe) => {
      const He = [];
      if (fe[0] && He.push("UX"), fe[1] && He.push("UY"), fe[2] && He.push("UZ"), fe[3] && He.push("RX"), fe[4] && He.push("RY"), fe[5] && He.push("RZ"), He.length > 0) {
        const et = Ue(Oe);
        W.push(`  POINTASSIGN  "${et.pt}"  "${et.story}"  RESTRAINT "${He.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), bt.forEach((fe) => W.push(fe)), W.push("");
    const vt = [];
    if (_.forEach((fe, Oe) => {
      if (fe.length === 4) {
        const He = x[fe[0]], et = x[fe[1]], Ze = x[fe[2]], De = [
          et[0] - He[0],
          et[1] - He[1],
          et[2] - He[2]
        ], it = [
          Ze[0] - He[0],
          Ze[1] - He[1],
          Ze[2] - He[2]
        ], at = Math.abs(De[2] * it[0] - De[0] * it[2]), yt = Math.sqrt((De[1] * it[2] - De[2] * it[1]) ** 2 + at ** 2 + (De[0] * it[1] - De[1] * it[0]) ** 2), It = yt > 1e-10 && at / yt < 0.5;
        vt.push({
          idx: Oe,
          el: fe,
          isWall: It
        });
      }
    }), vt.some((fe) => !fe.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const fe = ((_c = V.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${ue.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${fe} `), W.push("");
    }
    if (vt.some((fe) => fe.isWall)) {
      W.push("$ WALL PROPERTIES");
      const fe = ((_d = V.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${ue.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${fe} `), W.push("");
    }
    if (vt.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const fe = [];
      vt.forEach((Oe, He) => {
        const { el: et, isWall: Ze } = Oe, De = Ze ? `W${He + 1}` : `F${He + 1}`, it = Ze ? "PANEL" : "FLOOR", at = et.map((yt) => Ue(yt));
        if (Ze) {
          const yt = x[et[0]][1] <= x[et[2]][1] ? 0 : 2, It = x[et[1]][1] <= x[et[3]][1] ? 1 : 3;
          W.push(`  AREA "${De}"  ${it}  4  "${at[yt].pt}"  "${at[It].pt}"  "${at[It].pt}"  "${at[yt].pt}"  1  1  0  0  `);
          const lt = at[yt === 0 ? 2 : 0].story;
          fe.push(`  AREAASSIGN  "${De}"  "${lt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${De}"  ${it}  4  "${at[0].pt}"  "${at[1].pt}"  "${at[2].pt}"  "${at[3].pt}"  0  0  0  0  `), fe.push(`  AREAASSIGN  "${De}"  "${at[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), fe.forEach((Oe) => W.push(Oe)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), T.loads && T.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), T.loads.forEach((fe, Oe) => {
      const [He, et, Ze] = fe, De = Ue(Oe);
      Math.abs(He) > 1e-10 && W.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FX ${He}`), Math.abs(et) > 1e-10 && W.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FY ${et}`), Math.abs(Ze) > 1e-10 && W.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FZ ${Ze}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Ya(e, x) {
    const _ = e[x[0]], T = e[x[1]], V = Math.abs(T[1] - _[1]), H = Math.sqrt((T[0] - _[0]) ** 2 + (T[2] - _[2]) ** 2), U = V > H * 0.5;
    return U && H > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
  }
  function Ga(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: V } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${x.length} nodes, ${_.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), x.forEach((U, Y) => {
      H.push(`ops.node(${Y + 1}, ${U[0]}, ${U[1]}, ${U[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a2 = T.supports) == null ? void 0 : _a2.forEach((U, Y) => {
      const j = U.map((W) => W ? 1 : 0).join(", ");
      H.push(`ops.fix(${Y + 1}, ${j})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((U, Y) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (U.length !== 2) return;
      const j = x[U[0]], W = x[U[1]], L = Math.abs(W[2] - j[2]) > Math.max(Math.abs(W[0] - j[0]), Math.abs(W[1] - j[1])) ? 2 : 1, le = ((_a3 = V.areas) == null ? void 0 : _a3.get(Y)) ?? 1, Me = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, me = ((_c = V.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, re = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, de = ((_e2 = V.momentsOfInertiaY) == null ? void 0 : _e2.get(Y)) ?? 1, ue = ((_f = V.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${Y + 1}, ${U[0] + 1}, ${U[1] + 1}, ${le}, ${Me}, ${me}, ${re}, ${de}, ${ue}, ${L})`);
    }), H.push(""), T.loads && T.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), T.loads.forEach((U, Y) => {
      const j = U.map((W) => W).join(", ");
      H.push(`ops.load(${Y + 1}, ${j})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), x.forEach((U, Y) => {
      H.push(`print(f"Node {${Y + 1}}: {ops.nodeDisp(${Y + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = T.supports) == null ? void 0 : _b.forEach((U, Y) => {
      H.push(`print(f"Node {${Y + 1}}: {ops.nodeReaction(${Y + 1})}")`);
    }), H.join(`
`);
  }
  function Ja(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: V } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${x.length} nodes, ${_.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), x.forEach((U, Y) => {
      H.push(`node ${Y + 1} ${U[0]} ${U[1]} ${U[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a2 = T.supports) == null ? void 0 : _a2.forEach((U, Y) => {
      const j = U.map((W) => W ? 1 : 0).join(" ");
      H.push(`fix ${Y + 1} ${j}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), _.forEach((U, Y) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (U.length !== 2) return;
      const j = x[U[0]], W = x[U[1]], L = Math.abs(W[2] - j[2]) > Math.max(Math.abs(W[0] - j[0]), Math.abs(W[1] - j[1])) ? 2 : 1, le = ((_a3 = V.areas) == null ? void 0 : _a3.get(Y)) ?? 1, Me = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, me = ((_c = V.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, re = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, de = ((_e2 = V.momentsOfInertiaY) == null ? void 0 : _e2.get(Y)) ?? 1, ue = ((_f = V.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      H.push(`element elasticBeamColumn ${Y + 1} ${U[0] + 1} ${U[1] + 1} ${le} ${Me} ${me} ${re} ${de} ${ue} ${L}`);
    }), H.push(""), T.loads && T.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), T.loads.forEach((U, Y) => {
      const j = U.map((W) => W).join(" ");
      H.push(`  load ${Y + 1} ${j}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), x.forEach((U, Y) => {
      H.push(`puts "Node ${Y + 1}: [nodeDisp ${Y + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = T.supports) == null ? void 0 : _b.forEach((U, Y) => {
      H.push(`puts "Node ${Y + 1}: [nodeReaction ${Y + 1}]"`);
    }), H.join(`
`);
  }
  function Va(e) {
    const x = [], _ = [], T = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map();
    for (const Me of e.split(/\r?\n/)) {
      const me = Me.trim(), re = me.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (re) {
        const Be = parseInt(re[1]), qe = x.length;
        x.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), L.set(Be, qe);
        continue;
      }
      const de = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (de) {
        const Be = parseInt(de[1]), qe = L.get(Be);
        qe !== void 0 && T.set(qe, [
          de[2] === "1",
          de[3] === "1",
          de[4] === "1",
          de[5] === "1",
          de[6] === "1",
          de[7] === "1"
        ]);
        continue;
      }
      const ue = me.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ue) {
        const Be = parseInt(ue[1]), qe = L.get(parseInt(ue[2])), Ve = L.get(parseInt(ue[3]));
        if (qe !== void 0 && Ve !== void 0) {
          const st = _.length;
          _.push([
            qe,
            Ve
          ]), le.set(Be, st), Y.set(st, parseFloat(ue[4])), H.set(st, parseFloat(ue[5])), U.set(st, parseFloat(ue[6])), be.set(st, parseFloat(ue[7])), j.set(st, parseFloat(ue[8])), W.set(st, parseFloat(ue[9]));
        }
        continue;
      }
      const Ce = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Ce) {
        const Be = L.get(parseInt(Ce[1]));
        Be !== void 0 && V.set(Be, [
          parseFloat(Ce[2]),
          parseFloat(Ce[3]),
          parseFloat(Ce[4]),
          parseFloat(Ce[5]),
          parseFloat(Ce[6]),
          parseFloat(Ce[7])
        ]);
      }
    }
    return {
      nodes: x,
      elements: _,
      nodeInputs: {
        supports: T,
        loads: V
      },
      elementInputs: {
        elasticities: H,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: W,
        torsionalConstants: be
      }
    };
  }
  function Xa(e) {
    const x = [], _ = [], T = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
    for (const le of e.split(/\r?\n/)) {
      const Me = le.trim();
      if (Me.startsWith("#") || Me.startsWith("//")) continue;
      const me = Me.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const re = parseInt(me[1]), de = x.length;
        x.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), L.set(re, de);
        continue;
      }
      if (me[0] === "fix" && me.length >= 8) {
        const re = L.get(parseInt(me[1]));
        re !== void 0 && T.set(re, [
          me[2] === "1",
          me[3] === "1",
          me[4] === "1",
          me[5] === "1",
          me[6] === "1",
          me[7] === "1"
        ]);
        continue;
      }
      if (me[0] === "element" && me[1] === "elasticBeamColumn" && me.length >= 12) {
        const re = L.get(parseInt(me[3])), de = L.get(parseInt(me[4]));
        if (re !== void 0 && de !== void 0) {
          const ue = _.length;
          _.push([
            re,
            de
          ]), Y.set(ue, parseFloat(me[5])), H.set(ue, parseFloat(me[6])), U.set(ue, parseFloat(me[7])), be.set(ue, parseFloat(me[8])), j.set(ue, parseFloat(me[9])), W.set(ue, parseFloat(me[10]));
        }
        continue;
      }
      if (me[0] === "load" && me.length >= 8) {
        const re = L.get(parseInt(me[1]));
        re !== void 0 && V.set(re, [
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4]),
          parseFloat(me[5]),
          parseFloat(me[6]),
          parseFloat(me[7])
        ]);
      }
    }
    return {
      nodes: x,
      elements: _,
      nodeInputs: {
        supports: T,
        loads: V
      },
      elementInputs: {
        elasticities: H,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: W,
        torsionalConstants: be
      }
    };
  }
  Cs = Fo.state(false);
  ol = function(e) {
    e.nodeInputs || (e.nodeInputs = Fo.state({})), e.elementInputs || (e.elementInputs = Fo.state({})), e.deformOutputs || (e.deformOutputs = Fo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Fo.state({}));
    let x = "tonf", _ = "m", T = vo(x, _), V = {
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
    }, U = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
    let j = false;
    const W = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
    let L = "", le = {}, Me = null, me = "", re = [], de = [], ue = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), st = null, Ye = [], Ue = 0.2, bt = 2, vt = 2, fe = false, Oe = 2, He = "x", et = /* @__PURE__ */ new Set(), Ze = true, De = 0.15, it = 2, at = 2, yt = /* @__PURE__ */ new Set(), It = false, lt = "perimeter";
    const At = () => ({
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
    }), kt = (t, o) => ({
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
      }, At),
      vigasY: Array.from({
        length: o
      }, At)
    }), ke = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Mt = 0, ht = 3, ge = false, ve = 0, ee = null, Le = 0, oe = [], he = 1, Re = true;
    const Ie = Ia();
    Ie.div.style.display = "none";
    function ot() {
      const t = Uo()[L];
      return t && t[Mt] ? t[Mt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ne = [], Fe = [], Qe = 0, Ge = [], rt = null;
    function Ct() {
      if (!rt) return;
      const t = tt();
      t && t.scene.remove(rt), rt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), rt = null;
    }
    function qt(t, o, n, l, s) {
      Ct();
      const c = tt();
      if (!c) return;
      rt = new Vo(), rt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), d = Math.max(...o), i = Math.max(...n), b = r - a || 1, $ = d - f || 1, M = 3359829, v = 2241348;
      for (const h of n) {
        for (const w of o) {
          const E = new Wt().setFromPoints([
            new Ee(a, h, w),
            new Ee(r, h, w)
          ]), k = new To({
            color: M,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), P = new go(E, k);
          P.computeLineDistances(), P.renderOrder = -10, rt.add(P);
        }
        for (const w of t) {
          const E = new Wt().setFromPoints([
            new Ee(w, h, f),
            new Ee(w, h, d)
          ]), k = new To({
            color: M,
            dashSize: $ * 0.015,
            gapSize: $ * 0.01,
            transparent: true,
            opacity: 0.25
          }), P = new go(E, k);
          P.computeLineDistances(), P.renderOrder = -10, rt.add(P);
        }
      }
      for (const h of t) for (const w of o) {
        const E = new Wt().setFromPoints([
          new Ee(h, 0, w),
          new Ee(h, i, w)
        ]), k = new To({
          color: v,
          dashSize: i * 0.01,
          gapSize: i * 8e-3,
          transparent: true,
          opacity: 0.15
        }), P = new go(E, k);
        P.computeLineDistances(), P.renderOrder = -10, rt.add(P);
      }
      const p = Math.min(b, $) * 0.015;
      for (const h of n) for (const w of t) for (const E of o) {
        const k = [
          new Ee(w - p, h, E),
          new Ee(w + p, h, E),
          new Ee(w, h, E - p),
          new Ee(w, h, E + p)
        ], P = new Wt().setFromPoints(k), q = new Ao({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), g = new Lo(P, q);
        g.renderOrder = -5, rt.add(g);
      }
      rt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((w) => {
          w.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(rt), c.render();
    }
    let St = null;
    function Bn() {
      if (!St) return;
      const t = tt();
      t && t.scene.remove(St), St.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), St = null;
    }
    function Oo(t, o, n, l, s) {
      Bn();
      const c = tt();
      if (!c) return;
      St = new Vo(), St.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), d = Math.max(...o), i = r - a || 1, b = d - f || 1, $ = Math.max(i, b), M = $ * 0.08, v = l || t.map((g, u) => String.fromCharCode(65 + u)), p = s || o.map((g, u) => String(u + 1)), h = $ * 0.018, w = o.length <= 1, E = 8947848;
      for (let g = 0; g < t.length; g++) {
        const u = t[g];
        if (w) {
          const m = -M - h * 1.5;
          cn(u, 0, 0, u, 0, m + h, E, St), dn(v[g] || `${g}`, u, 0, m, h, St);
        } else {
          const m = f - M - h * 1.5;
          cn(u, f, 0, u, m + h, 0, E, St), dn(v[g] || `${g}`, u, m, 0, h, St);
        }
      }
      if (!w) for (let g = 0; g < o.length; g++) {
        const u = o[g], m = a - M - h * 1.5;
        cn(a, u, 0, m + h, u, 0, E, St), dn(p[g] || `${g}`, m, u, 0, h, St);
      }
      const k = h * 1.8, P = M * 1.2, q = M * 1.2;
      for (let g = 0; g < t.length - 1; g++) {
        const u = t[g], m = t[g + 1], y = Math.abs(m - u), S = (u + m) / 2, A = `${y.toFixed(2)} m`;
        w ? (ln(A, S, 0, -P, k, St), rn(u, 0, -P * 0.7, m, 0, -P * 0.7, 16763904, St)) : (ln(A, S, f - q, 0, k, St), rn(u, f - q * 0.7, 0, m, f - q * 0.7, 0, 16763904, St));
      }
      if (!w) for (let g = 0; g < o.length - 1; g++) {
        const u = o[g], m = o[g + 1], y = Math.abs(m - u), S = (u + m) / 2, A = `${y.toFixed(2)} m`;
        ln(A, a - P, S, 0, k, St), rn(a - P * 0.7, u, 0, a - P * 0.7, m, 0, 16763904, St);
      }
      St.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), c.scene.add(St), c.render();
    }
    let Ot = null;
    function Dn() {
      if (!Ot) return;
      const t = tt();
      t && t.scene.remove(Ot), Ot.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ot = null;
    }
    function an(t, o, n) {
      if (Dn(), t.length === 0) return;
      const l = tt();
      if (!l) return;
      Ot = new Vo(), Ot.name = "storyLevels";
      const s = Math.min(...o), c = Math.max(...o), a = Math.min(...n), r = Math.max(...n), f = c - s || 1, d = r - a || 1, i = Math.max(f, d), b = i * 0.06, $ = n.length <= 1, M = 4491519, v = i * 0.015;
      for (const p of t) {
        const h = p.elev;
        $ ? (No(s - b, 0, h, c + b, 0, h, M, Ot), Wn(p.name, c + b * 1.5, 0, h, v, Ot)) : (No(s, a, h, c, a, h, M, Ot), No(c, a, h, c, r, h, M, Ot), No(c, r, h, s, r, h, M, Ot), No(s, r, h, s, a, h, M, Ot), Wn(p.name, s - b * 1.5, a, h, v, Ot));
      }
      Ot.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Ot), l.render();
    }
    function No(t, o, n, l, s, c, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (c - n) ** 2) || 1, d = new Wt().setFromPoints([
        new Ee(t, o, n),
        new Ee(l, s, c)
      ]), i = new To({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new go(d, i);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function Wn(t, o, n, l, s, c) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      d.beginPath(), d.moveTo(i, 0), d.lineTo(r - i, 0), d.quadraticCurveTo(r, 0, r, i), d.lineTo(r, f - i), d.quadraticCurveTo(r, f, r - i, f), d.lineTo(i, f), d.quadraticCurveTo(0, f, 0, f - i), d.lineTo(0, i), d.quadraticCurveTo(0, 0, i, 0), d.closePath(), d.fill(), d.fillStyle = "#88bbff", d.font = "bold 38px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, r / 2, f / 2);
      const b = new Pn(a);
      b.needsUpdate = true;
      const $ = new Ko({
        map: b,
        depthTest: false,
        transparent: true
      }), M = new Xo($);
      M.position.set(o, n, l), M.scale.set(s * 8, s, 1), M.renderOrder = 101, c.add(M);
    }
    function ln(t, o, n, l, s, c) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      d.beginPath(), d.moveTo(i, 0), d.lineTo(r - i, 0), d.quadraticCurveTo(r, 0, r, i), d.lineTo(r, f - i), d.quadraticCurveTo(r, f, r - i, f), d.lineTo(i, f), d.quadraticCurveTo(0, f, 0, f - i), d.lineTo(0, i), d.quadraticCurveTo(0, 0, i, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, r / 2, f / 2);
      const b = new $a(a);
      b.minFilter = wa;
      const $ = new Ko({
        map: b,
        transparent: true,
        depthTest: false
      }), M = new Xo($);
      M.position.set(o, n, l);
      const v = r / f;
      M.scale.set(s * v, s, 1), M.renderOrder = 999, c.add(M);
    }
    function rn(t, o, n, l, s, c, a, r) {
      const f = [
        new Ee(t, o, n),
        new Ee(l, s, c)
      ], d = new Wt().setFromPoints(f), i = new Ao({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new go(d, i);
      b.renderOrder = 998, r.add(b);
    }
    function cn(t, o, n, l, s, c, a, r) {
      const f = new Wt().setFromPoints([
        new Ee(t, o, n),
        new Ee(l, s, c)
      ]), d = new To({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new go(f, d);
      i.computeLineDistances(), r.add(i);
    }
    function dn(t, o, n, l, s, c) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const d = new Pn(a);
      d.needsUpdate = true;
      const i = new Ko({
        map: d,
        depthTest: false,
        transparent: true
      }), b = new Xo(i);
      b.position.set(o, n, l);
      const $ = s * 2;
      b.scale.set($, $, 1), b.renderOrder = 100, c.add(b);
    }
    const je = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Je(), s;
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
        const n = e.elements.val.map(([l, s]) => {
          const c = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            c,
            a
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Je();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Je(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Je();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Je();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Je();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Je();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Je();
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
          dof: n.map((s) => s ? 1 : 0).join("")
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
        const n = ye.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", c = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || c.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = o !== void 0 ? o : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || c}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = ye.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[s] = l.checked;
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
          Ct(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const a of t) l.push(l[l.length - 1] + a);
        const s = [
          0
        ];
        for (const a of o || [
          0
        ]) s.push(s[s.length - 1] + a);
        const c = [
          0
        ];
        for (const a of n || [
          3
        ]) c.push(c[c.length - 1] + a);
        qt(l, s, c), Ne = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Fe = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), Qe = c[c.length - 1], Ge = c.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), Oo(Ne.map((a) => a.coord), Fe.map((a) => a.coord), Qe, Ne.map((a) => a.label), Fe.map((a) => a.label));
        {
          const a = c.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - c[f - 1] : 0,
            elev: r
          }));
          an(a, Ne.map((r) => r.coord), Fe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (Ne.length === 0 || Ge.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, c] = o.split("x").map((R) => parseFloat(R) / 100), [a, r] = n.split("x").map((R) => parseFloat(R) / 100), f = Ne.map((R) => R.coord), d = Fe.map((R) => R.coord), i = Ge.map((R) => R.elev), b = f.length, $ = d.length, M = i.length, v = M - 1, p = [], h = {};
        for (let R = 0; R < M; R++) for (let ne = 0; ne < $; ne++) for (let Q = 0; Q < b; Q++) h[`${Q},${ne},${R}`] = p.length, p.push([
          f[Q],
          d[ne],
          i[R]
        ]);
        const w = [], E = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map();
        for (let R = 0; R < v; R++) for (let ne = 0; ne < $; ne++) for (let Q = 0; Q < b; Q++) {
          const J = w.length;
          w.push([
            h[`${Q},${ne},${R}`],
            h[`${Q},${ne},${R + 1}`]
          ]), E.add(J), P.set(J, R);
        }
        for (let R = 1; R < M; R++) for (let ne = 0; ne < $; ne++) for (let Q = 0; Q < b - 1; Q++) {
          const J = w.length;
          w.push([
            h[`${Q},${ne},${R}`],
            h[`${Q + 1},${ne},${R}`]
          ]), k.add(J), P.set(J, R - 1);
        }
        for (let R = 1; R < M; R++) for (let ne = 0; ne < b; ne++) for (let Q = 0; Q < $ - 1; Q++) {
          const J = w.length;
          w.push([
            h[`${ne},${Q},${R}`],
            h[`${ne},${Q + 1},${R}`]
          ]), k.add(J), P.set(J, R - 1);
        }
        const q = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", g = /* @__PURE__ */ new Set();
        if (q) {
          const R = q === "all" || q === "x" || q === "perimeter", ne = q === "all" || q === "y" || q === "perimeter";
          for (let Q = 0; Q < v; Q++) {
            if (R) for (let J = 0; J < $; J++) {
              if (q === "perimeter" && J !== 0 && J !== $ - 1) continue;
              const D = Math.floor((b - 1) / 2);
              for (let pe = 0; pe < b - 1; pe++) {
                if (q === "perimeter" && pe !== D) continue;
                const Se = w.length;
                w.push([
                  h[`${pe},${J},${Q}`],
                  h[`${pe + 1},${J},${Q + 1}`]
                ]), g.add(Se), P.set(Se, Q);
                const ie = w.length;
                w.push([
                  h[`${pe + 1},${J},${Q}`],
                  h[`${pe},${J},${Q + 1}`]
                ]), g.add(ie), P.set(ie, Q);
              }
            }
            if (ne) for (let J = 0; J < b; J++) {
              if (q === "perimeter" && J !== 0 && J !== b - 1) continue;
              const D = Math.floor(($ - 1) / 2);
              for (let pe = 0; pe < $ - 1; pe++) {
                if (q === "perimeter" && pe !== D) continue;
                const Se = w.length;
                w.push([
                  h[`${J},${pe},${Q}`],
                  h[`${J},${pe + 1},${Q + 1}`]
                ]), g.add(Se), P.set(Se, Q);
                const ie = w.length;
                w.push([
                  h[`${J},${pe + 1},${Q}`],
                  h[`${J},${pe},${Q + 1}`]
                ]), g.add(ie), P.set(ie, Q);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, m = u / (2 * (1 + 0.2)), y = s * c, S = s * c ** 3 / 12, A = c * s ** 3 / 12, z = s * c * (s ** 2 + c ** 2) / 12, I = a * r, F = a * r ** 3 / 12, O = r * a ** 3 / 12, te = a * r * (a ** 2 + r ** 2) / 12, se = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
        for (let R = 0; R < w.length; R++) se.set(R, u), X.set(R, m), E.has(R) ? (Z.set(R, y), K.set(R, S), ae.set(R, A), we.set(R, z), Te.set(R, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${o}`
        })) : g.has(R) ? (Z.set(R, y), K.set(R, S), ae.set(R, A), we.set(R, z), Te.set(R, {
          type: "rect",
          b: s,
          h: c,
          name: `BR${o}`
        })) : (Z.set(R, I), K.set(R, F), ae.set(R, O), we.set(R, te), Te.set(R, {
          type: "rect",
          b: a,
          h: r,
          name: `V${n}`
        }));
        const Pe = /* @__PURE__ */ new Map();
        for (let R = 0; R < $; R++) for (let ne = 0; ne < b; ne++) Pe.set(h[`${ne},${R},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = w, e.nodeInputs.val = {
          supports: Pe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: se,
          shearModuli: X,
          areas: Z,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: ae,
          torsionalConstants: we,
          sectionShapes: Te
        }, ue = E, Ce = k, qe = P, console.log(`Built: ${p.length} nodes, ${w.length} elements (${E.size} cols, ${k.size} beams, ${g.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${q ? `, braces=${q}` : ""}`), {
          nodes: p.length,
          elements: w.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ne.findIndex((v) => v.label === t), s = Fe.findIndex((v) => v.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ne.map((v) => v.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Fe.map((v) => v.label)}`);
          return;
        }
        const c = Ne[l].coord, a = Fe[s].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const d = (v) => {
          const p = r.findIndex((h) => Math.abs(h[0] - c) < 1e-3 && Math.abs(h[1] - a) < 1e-3 && Math.abs(h[2] - v) < 1e-3);
          return p >= 0 ? p : (r.push([
            c,
            a,
            v
          ]), r.length - 1);
        }, i = n ? [
          Ge.findIndex((v) => v.label === n)
        ] : Array.from({
          length: Ge.length - 1
        }, (v, p) => p + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), $ = d(Ge[0].elev);
        b.has($) || b.set($, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let M = 0;
        for (const v of i) {
          if (v < 1 || v >= Ge.length) continue;
          const p = d(Ge[v - 1].elev), h = d(Ge[v].elev);
          f.push([
            p,
            h
          ]), ue.add(f.length - 1), qe.set(f.length - 1, v - 1), M++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${M} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), M;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const c = Ne.findIndex((P) => P.label === t), a = Fe.findIndex((P) => P.label === o), r = Ne.findIndex((P) => P.label === n), f = Fe.findIndex((P) => P.label === l), d = Ge.findIndex((P) => P.label === s);
        if (c < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (d < 1) {
          console.log(`Story "${s}" not found. Available: ${Ge.filter((P) => P.label !== "Base").map((P) => P.label)}`);
          return;
        }
        const i = Ne[c].coord, b = Fe[a].coord, $ = Ne[r].coord, M = Fe[f].coord, v = Ge[d].elev, p = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], w = (P, q, g) => {
          const u = p.findIndex((m) => Math.abs(m[0] - P) < 1e-3 && Math.abs(m[1] - q) < 1e-3 && Math.abs(m[2] - g) < 1e-3);
          return u >= 0 ? u : (p.push([
            P,
            q,
            g
          ]), p.length - 1);
        }, E = w(i, b, v), k = w($, M, v);
        return h.push([
          E,
          k
        ]), Ce.add(h.length - 1), qe.set(h.length - 1, d - 1), e.nodes.val = p, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, o, n, l, s, c) {
        var _a2;
        const a = Ne.findIndex((u) => u.label === t), r = Fe.findIndex((u) => u.label === o), f = Ge.findIndex((u) => u.label === n), d = Ne.findIndex((u) => u.label === l), i = Fe.findIndex((u) => u.label === s), b = Ge.findIndex((u) => u.label === c);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (d < 0 || i < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const $ = Ne[a].coord, M = Fe[r].coord, v = Ge[f].elev, p = Ne[d].coord, h = Fe[i].coord, w = Ge[b].elev, E = [
          ...e.nodes.val
        ], k = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], P = (u, m, y) => {
          const S = E.findIndex((A) => Math.abs(A[0] - u) < 1e-3 && Math.abs(A[1] - m) < 1e-3 && Math.abs(A[2] - y) < 1e-3);
          return S >= 0 ? S : (E.push([
            u,
            m,
            y
          ]), E.length - 1);
        }, q = P($, M, v), g = P(p, h, w);
        return k.push([
          q,
          g
        ]), qe.set(k.length - 1, Math.min(f, b)), e.nodes.val = E, e.elements.val = k, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${c}`), k.length - 1;
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
        je.clear();
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
        ], s = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((D) => parseFloat(D) / 100), [d, i] = c.split("x").map((D) => parseFloat(D) / 100), b = [
          0
        ];
        for (const D of o) b.push(b[b.length - 1] + D);
        const $ = [
          0
        ];
        for (const D of n) $.push($[$.length - 1] + D);
        const M = [
          0
        ];
        for (const D of l) M.push(M[M.length - 1] + D);
        const v = b.length, p = $.length, h = M.length, w = l.length, E = [], k = {};
        for (let D = 0; D < h; D++) for (let pe = 0; pe < p; pe++) for (let Se = 0; Se < v; Se++) k[`${Se},${D},${pe}`] = E.length, E.push([
          b[Se],
          M[D],
          $[pe]
        ]);
        const P = [], q = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let D = 0; D < w; D++) for (let pe = 0; pe < p; pe++) for (let Se = 0; Se < v; Se++) {
          const ie = P.length;
          P.push([
            k[`${Se},${D},${pe}`],
            k[`${Se},${D + 1},${pe}`]
          ]), q.add(ie), u.set(ie, D);
        }
        for (let D = 1; D < h; D++) for (let pe = 0; pe < p; pe++) for (let Se = 0; Se < v - 1; Se++) {
          const ie = P.length;
          P.push([
            k[`${Se},${D},${pe}`],
            k[`${Se + 1},${D},${pe}`]
          ]), g.add(ie), u.set(ie, D - 1);
        }
        for (let D = 1; D < h; D++) for (let pe = 0; pe < v; pe++) for (let Se = 0; Se < p - 1; Se++) {
          const ie = P.length;
          P.push([
            k[`${pe},${D},${Se}`],
            k[`${pe},${D},${Se + 1}`]
          ]), g.add(ie), u.set(ie, D - 1);
        }
        const y = 15100 * Math.sqrt(a) * 10, S = y / (2 * (1 + 0.2)), A = r * f, z = r * f ** 3 / 12, I = f * r ** 3 / 12, F = r * f * (r ** 2 + f ** 2) / 12, O = d * i, te = d * i ** 3 / 12, se = i * d ** 3 / 12, X = d * i * (d ** 2 + i ** 2) / 12, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
        for (let D = 0; D < P.length; D++) Z.set(D, y), K.set(D, S), q.has(D) ? (ae.set(D, A), we.set(D, z), Te.set(D, I), Pe.set(D, F), R.set(D, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (ae.set(D, O), we.set(D, te), Te.set(D, se), Pe.set(D, X), R.set(D, {
          type: "rect",
          b: d,
          h: i,
          name: `V${c}`
        }));
        const ne = /* @__PURE__ */ new Map();
        for (let D = 0; D < p; D++) for (let pe = 0; pe < v; pe++) ne.set(k[`${pe},0,${D}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = E, e.elements.val = P, e.nodeInputs.val = {
          supports: ne,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: K,
          areas: ae,
          momentsOfInertiaZ: we,
          momentsOfInertiaY: Te,
          torsionalConstants: Pe,
          sectionShapes: R
        }, ue = q, Ce = g, qe = u, Ne = b.map((D, pe) => ({
          label: String.fromCharCode(65 + pe),
          coord: D
        })), Fe = $.map((D, pe) => ({
          label: `${pe + 1}`,
          coord: D
        })), Qe = M[M.length - 1], Oo(Ne.map((D) => D.coord), Fe.map((D) => D.coord), Qe, Ne.map((D) => D.label), Fe.map((D) => D.label));
        {
          const D = M.map((pe, Se) => ({
            name: Se === 0 ? "Base" : `P${Se}`,
            height: Se > 0 ? pe - M[Se - 1] : 0,
            elev: pe
          }));
          an(D, b, $);
        }
        const Q = ye.querySelector("#cad3d-axis-buttons");
        if (Q) {
          Q.style.display = "flex";
          const D = Ne.map((Se) => Se.label), pe = Fe.map((Se) => Se.label);
          Q.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Se of D) Q.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Se}">${Se}</button>`;
          Q.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Se of pe) Q.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Se}">${Se}</button>`;
        }
        const J = ye.querySelector("#cad3d-floor-buttons");
        if (J) {
          J.style.display = "flex", J.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let D = 0; D < w; D++) J.innerHTML += `<button class="floor-btn" data-floor="${D}">P${D + 1}</button>`;
        }
        return qt(b, $, M), Je(), console.log(`Model3D: ${E.length}n ${P.length}e | ${v}x${p} grid, ${w} floors | COL${s} V${c} f'c=${a}`), {
          nodes: E.length,
          elements: P.length,
          columns: q.size,
          beams: g.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), ue = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Ne = [], Fe = [], Qe = 0, Bn(), Dn(), Ct();
        const t = ye.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Je();
      },
      frame(t, o, n = 0, l = 0) {
        je.clear();
        const s = [];
        n > 0 && s.push(-n);
        let c = 0;
        s.push(c);
        for (const v of t) c += v, s.push(c);
        l > 0 && s.push(c + l);
        const a = [
          0
        ];
        let r = 0;
        for (const v of o) r += v, a.push(r);
        const f = (v) => n > 0 && v === 0 || l > 0 && v === s.length - 1, d = {}, i = [];
        for (let v = 0; v < a.length; v++) for (let p = 0; p < s.length; p++) v === 0 && f(p) || (d[`${p},${v}`] = i.length, i.push([
          s[p],
          0,
          a[v]
        ]));
        const b = [];
        ue = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set();
        for (let v = 0; v < a.length - 1; v++) for (let p = 0; p < s.length; p++) f(p) || (ue.add(b.length), b.push([
          d[`${p},${v}`],
          d[`${p},${v + 1}`]
        ]));
        for (let v = 1; v < a.length; v++) for (let p = 0; p < s.length - 1; p++) Ce.add(b.length), b.push([
          d[`${p},${v}`],
          d[`${p + 1},${v}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), M = ot();
        for (let v = 0; v < s.length; v++) {
          if (f(v)) continue;
          const p = `${v},0`;
          d[p] !== void 0 && $.set(d[p], [
            ...M
          ]);
        }
        return e.nodes.val = i, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), Ne = [
          ...s
        ], Fe = [
          0
        ], Qe = a[a.length - 1] || 0, setTimeout(() => {
          Et(), Oo(s, [
            0
          ]), yn(), $n();
        }, 50), Je(), {
          nodes: i.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, s = 0, c = 0, a = 0, r = 0, f = 1) {
        je.clear();
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const u of t) d.push(d[d.length - 1] + u);
        c > 0 && d.push(d[d.length - 1] + c);
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of o) i.push(i[i.length - 1] + u);
        r > 0 && i.push(i[i.length - 1] + r);
        const b = [
          0
        ];
        for (const u of n) b.push(b[b.length - 1] + u);
        const $ = (u) => s > 0 && u === 0 || c > 0 && u === d.length - 1, M = (u) => a > 0 && u === 0 || r > 0 && u === i.length - 1, v = (u, m) => $(u) || M(m), p = [], h = {};
        for (let u = 0; u < b.length; u++) for (let m = 0; m < i.length; m++) for (let y = 0; y < d.length; y++) u === 0 && v(y, m) || (h[`${y},${m},${u}`] = p.length, p.push([
          d[y],
          i[m],
          b[u]
        ]));
        const w = p.length, E = [];
        ue = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map();
        const k = [];
        for (let u = 0; u < b.length - 1; u++) for (let m = 0; m < i.length; m++) for (let y = 0; y < d.length; y++) v(y, m) || k.push({
          el: [
            h[`${y},${m},${u}`],
            h[`${y},${m},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, m], floor: y } of k) {
          if (f <= 1) {
            ue.add(E.length), qe.set(E.length, y), E.push([
              u,
              m
            ]);
            continue;
          }
          const S = p[u], A = p[m];
          let z = u;
          for (let I = 1; I < f; I++) {
            const F = I / f, O = p.length;
            p.push([
              S[0] + (A[0] - S[0]) * F,
              S[1] + (A[1] - S[1]) * F,
              S[2] + (A[2] - S[2]) * F
            ]), ue.add(E.length), qe.set(E.length, y), E.push([
              z,
              O
            ]), z = O;
          }
          ue.add(E.length), qe.set(E.length, y), E.push([
            z,
            m
          ]);
        }
        Ve = /* @__PURE__ */ new Map();
        const P = [];
        for (let u = 1; u < b.length; u++) for (let m = 0; m < i.length; m++) for (let y = 0; y < d.length - 1; y++) P.push({
          el: [
            h[`${y},${m},${u}`],
            h[`${y + 1},${m},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: y
        });
        for (let u = 1; u < b.length; u++) for (let m = 0; m < d.length; m++) for (let y = 0; y < i.length - 1; y++) P.push({
          el: [
            h[`${m},${y},${u}`],
            h[`${m},${y + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: y
        });
        for (const { el: [u, m], floor: y, dir: S, bay: A } of P) {
          const z = p[u], I = p[m];
          let F = u;
          for (let te = 1; te < l; te++) {
            const se = te / l, X = p.length;
            p.push([
              z[0] + (I[0] - z[0]) * se,
              z[1] + (I[1] - z[1]) * se,
              z[2] + (I[2] - z[2]) * se
            ]);
            const Z = E.length;
            Ce.add(Z), qe.set(Z, y), Ve.set(Z, {
              dir: S,
              bay: A
            }), E.push([
              F,
              X
            ]), F = X;
          }
          const O = E.length;
          Ce.add(O), qe.set(O, y), Ve.set(O, {
            dir: S,
            bay: A
          }), E.push([
            F,
            m
          ]);
        }
        if (et = /* @__PURE__ */ new Set(), fe && Oe > 0) {
          const u = (m, y, S) => {
            for (let z = 0; z < p.length; z++) if (Math.abs(p[z][0] - m) < 1e-6 && Math.abs(p[z][1] - y) < 1e-6 && Math.abs(p[z][2] - S) < 1e-6) return z;
            const A = p.length;
            return p.push([
              m,
              y,
              S
            ]), A;
          };
          for (let m = 1; m < b.length; m++) if (He === "x") for (let y = 0; y < i.length - 1; y++) {
            const S = i[y], A = i[y + 1];
            for (let z = 1; z <= Oe; z++) {
              const I = S + z / (Oe + 1) * (A - S), F = [];
              for (let O = 0; O < d.length; O++) F.push(u(d[O], I, b[m]));
              for (let O = 0; O < d.length - 1; O++) {
                const te = E.length;
                et.add(te), Ce.add(te), qe.set(te, m - 1), Ve.set(te, {
                  dir: "x",
                  bay: O
                }), E.push([
                  F[O],
                  F[O + 1]
                ]);
              }
            }
          }
          else for (let y = 0; y < d.length - 1; y++) {
            const S = d[y], A = d[y + 1];
            for (let z = 1; z <= Oe; z++) {
              const I = S + z / (Oe + 1) * (A - S), F = [];
              for (let O = 0; O < i.length; O++) F.push(u(I, i[O], b[m]));
              for (let O = 0; O < i.length - 1; O++) {
                const te = E.length;
                et.add(te), Ce.add(te), qe.set(te, m - 1), Ve.set(te, {
                  dir: "y",
                  bay: O
                }), E.push([
                  F[O],
                  F[O + 1]
                ]);
              }
            }
          }
        }
        const q = /* @__PURE__ */ new Map(), g = ot();
        for (let u = 0; u < i.length; u++) for (let m = 0; m < d.length; m++) v(m, u) || q.set(h[`${m},${u},0`], [
          ...g
        ]);
        Be = /* @__PURE__ */ new Set();
        for (const u of Ye) {
          const m = b.length - 1, y = u.floors.includes(-1) ? Array.from({
            length: m
          }, (S, A) => A) : u.floors.filter((S) => S < m);
          for (const S of y) {
            let A, z, I, F;
            u.dir === "x" ? (A = u.bay, I = u.bay + 1, z = u.axisIdx, F = u.axisIdx) : (A = u.axisIdx, I = u.axisIdx, z = u.bay, F = u.bay + 1);
            const O = h[`${A},${z},${S}`], te = h[`${A},${z},${S + 1}`];
            let se, X;
            if (u.dir === "x" ? (se = h[`${I},${F},${S}`], X = h[`${I},${F},${S + 1}`]) : (se = h[`${I},${F},${S}`], X = h[`${I},${F},${S + 1}`]), O === void 0 || se === void 0 || te === void 0 || X === void 0) continue;
            const Z = vt, K = bt, ae = p[O], we = p[se], Te = p[te], Pe = p[X], R = [];
            for (let ne = 0; ne <= K; ne++) {
              const Q = [], J = ne / K;
              for (let D = 0; D <= Z; D++) {
                const pe = D / Z, Se = (1 - J) * ((1 - pe) * ae[0] + pe * we[0]) + J * ((1 - pe) * Te[0] + pe * Pe[0]), ie = (1 - J) * ((1 - pe) * ae[1] + pe * we[1]) + J * ((1 - pe) * Te[1] + pe * Pe[1]), Ae = (1 - J) * ((1 - pe) * ae[2] + pe * we[2]) + J * ((1 - pe) * Te[2] + pe * Pe[2]);
                ne === 0 && D === 0 ? Q.push(O) : ne === 0 && D === Z ? Q.push(se) : ne === K && D === 0 ? Q.push(te) : ne === K && D === Z ? Q.push(X) : (Q.push(p.length), p.push([
                  Se,
                  ie,
                  Ae
                ]));
              }
              R.push(Q);
            }
            for (let ne = 0; ne < K; ne++) for (let Q = 0; Q < Z; Q++) {
              const J = R[ne][Q], D = R[ne][Q + 1], pe = R[ne + 1][Q + 1], Se = R[ne + 1][Q], ie = E.length;
              Be.add(ie), qe.set(ie, S), E.push([
                J,
                D,
                pe,
                Se
              ]);
            }
            if (S === 0) for (let ne = 0; ne <= Z; ne++) {
              const Q = R[0][ne];
              Q >= w && q.set(Q, [
                ...g
              ]);
            }
          }
        }
        if (yt = /* @__PURE__ */ new Set(), Ze) {
          const u = l, m = l, y = /* @__PURE__ */ new Map(), S = (A, z, I) => `${Math.round(A * 1e4)},${Math.round(z * 1e4)},${Math.round(I * 1e4)}`;
          for (let A = 0; A < p.length; A++) y.set(S(p[A][0], p[A][1], p[A][2]), A);
          for (let A = 1; A < b.length; A++) {
            const z = b[A];
            for (let I = 0; I < d.length - 1; I++) for (let F = 0; F < i.length - 1; F++) {
              const O = d[I], te = d[I + 1], se = i[F], X = i[F + 1], Z = [];
              for (let K = 0; K <= m; K++) {
                const ae = [];
                for (let we = 0; we <= u; we++) {
                  const Te = O + we / u * (te - O), Pe = se + K / m * (X - se);
                  if (K === 0 && we === 0) ae.push(h[`${I},${F},${A}`]);
                  else if (K === 0 && we === u) ae.push(h[`${I + 1},${F},${A}`]);
                  else if (K === m && we === 0) ae.push(h[`${I},${F + 1},${A}`]);
                  else if (K === m && we === u) ae.push(h[`${I + 1},${F + 1},${A}`]);
                  else {
                    const R = S(Te, Pe, z), ne = y.get(R);
                    if (ne !== void 0) ae.push(ne);
                    else {
                      const Q = p.length;
                      p.push([
                        Te,
                        Pe,
                        z
                      ]), y.set(R, Q), ae.push(Q);
                    }
                  }
                }
                Z.push(ae);
              }
              for (let K = 0; K < m; K++) for (let ae = 0; ae < u; ae++) {
                const we = Z[K][ae], Te = Z[K][ae + 1], Pe = Z[K + 1][ae + 1], R = Z[K + 1][ae], ne = E.length;
                yt.add(ne), qe.set(ne, A - 1), E.push([
                  we,
                  Te,
                  Pe,
                  R
                ]);
              }
            }
          }
        }
        if (It && lt) {
          const u = lt === "all" || lt === "x" || lt === "perimeter", m = lt === "all" || lt === "y" || lt === "perimeter", y = b.length - 1;
          for (let S = 0; S < y; S++) {
            if (u) for (let A = 0; A < i.length; A++) {
              if (lt === "perimeter" && A !== 0 && A !== i.length - 1) continue;
              const z = Math.floor((d.length - 1) / 2);
              for (let I = 0; I < d.length - 1; I++) {
                if (lt === "perimeter" && I !== z || v(I, A) || v(I + 1, A)) continue;
                const F = h[`${I},${A},${S}`], O = h[`${I + 1},${A},${S + 1}`], te = h[`${I + 1},${A},${S}`], se = h[`${I},${A},${S + 1}`];
                F !== void 0 && O !== void 0 && (E.push([
                  F,
                  O
                ]), qe.set(E.length - 1, S)), te !== void 0 && se !== void 0 && (E.push([
                  te,
                  se
                ]), qe.set(E.length - 1, S));
              }
            }
            if (m) for (let A = 0; A < d.length; A++) {
              if (lt === "perimeter" && A !== 0 && A !== d.length - 1) continue;
              const z = Math.floor((i.length - 1) / 2);
              for (let I = 0; I < i.length - 1; I++) {
                if (lt === "perimeter" && I !== z || v(A, I) || v(A, I + 1)) continue;
                const F = h[`${A},${I},${S}`], O = h[`${A},${I + 1},${S + 1}`], te = h[`${A},${I + 1},${S}`], se = h[`${A},${I},${S + 1}`];
                F !== void 0 && O !== void 0 && (E.push([
                  F,
                  O
                ]), qe.set(E.length - 1, S)), te !== void 0 && se !== void 0 && (E.push([
                  te,
                  se
                ]), qe.set(E.length - 1, S));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = E, e.nodeInputs && (e.nodeInputs.val = {
          supports: q
        }), Ne = [
          ...d
        ], Fe = [
          ...i
        ], Qe = b[b.length - 1] || 0, setTimeout(() => {
          Et(), Oo(d, i), yn(), $n();
        }, 50), Je(), {
          nodes: p.length,
          elements: E.length,
          nJointNodes: w
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        je.clear();
        const a = [], r = [], f = (M) => n + l * (1 - Math.pow(2 * M / t - 1, 2)), d = [], i = c + 1;
        for (let M = 0; M < i; M++) {
          const v = [], p = o / c * M;
          v.push(a.length), a.push([
            0,
            p,
            0
          ]), v.push(a.length), a.push([
            t,
            p,
            0
          ]), v.push(a.length), a.push([
            0,
            p,
            n
          ]);
          for (let h = 1; h < s; h++) {
            const w = t / s * h;
            v.push(a.length), a.push([
              w,
              p,
              f(w)
            ]);
          }
          v.push(a.length), a.push([
            t,
            p,
            n
          ]), d.push(v);
        }
        for (let M = 0; M < i; M++) {
          const v = d[M];
          r.push([
            v[0],
            v[2]
          ]), r.push([
            v[1],
            v[v.length - 1]
          ]);
          for (let p = 2; p < v.length - 1; p++) r.push([
            v[p],
            v[p + 1]
          ]);
        }
        for (let M = 0; M < c; M++) for (let v = 2; v < d[0].length; v++) r.push([
          d[M][v],
          d[M + 1][v]
        ]);
        for (let M = 0; M < c; M++) for (let v = 2; v < d[0].length - 1; v += 2) r.push([
          d[M][v],
          d[M + 1][v + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), $ = ot();
        for (let M = 0; M < i; M++) b.set(d[M][0], [
          ...$
        ]), b.set(d[M][1], [
          ...$
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), Je(), {
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
            je.clear(), Xe("truss"), Gn();
            break;
          }
          case "beams": {
            je.clear(), Xe("beams"), Jn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            je.clear(), Xe("3d"), Vn();
            break;
          }
          case "portico": {
            Xe("frame"), $e();
            break;
          }
          case "edificio": {
            Xe("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, Ye = [], Ze = false, fe = false, It = false, $e();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Xe("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Ye = [], fe = true, Oe = 2;
            const o = re.reduce((l, s) => l + s, 0) / re.length, n = de.reduce((l, s) => l + s, 0) / de.length;
            He = o >= n ? "y" : "x", Ze = true, De = 0.08, It = false, $e();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Xe("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Ye = [], fe = true, Oe = 2;
            const o = re.reduce((l, s) => l + s, 0) / re.length, n = de.reduce((l, s) => l + s, 0) / de.length;
            He = o >= n ? "y" : "x", Ze = true, De = 0.08, It = true, lt = "perimeter", $e();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Xe("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, fe = false;
            const o = Math.round(((_a2 = le.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = le.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Ye = [
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
            ], Ze = true, De = 0.15, $e();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Xe("edificio"), ke.colMat = 2, ke.vigaMat = 0, fe = false;
            const o = Math.round(((_c = le.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = le.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Ye = [
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
            ], Ze = true, De = 0.12, $e();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Xe("edificio"), le.nPisos && (le.nPisos.val = 1), le.hPiso && (le.hPiso.val = 4.5), le.nVanosX && (le.nVanosX.val = 3), le.nVanosY && (le.nVanosY.val = 2), le.nSubViga && (le.nSubViga.val = 3), re = [
              6,
              6,
              6
            ], de = [
              5,
              5
            ], ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Ye = [], fe = true, Oe = 2, He = re[0] >= de[0] ? "y" : "x", Ze = true, De = 0.08, it = 3, at = 3, $e();
            break;
          }
          case "galpon": {
            Xe("galpon"), $e();
            break;
          }
          case "barra": {
            Xe("barra"), $e();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            je.clear(), Xe("placa-3q"), Xn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            je.clear(), Xe("placa-q4"), Kn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            je.clear(), Xe("losa-rect"), Un();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            je.clear(), Xe("losa-plana"), Zn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            je.clear(), Xe("viga-alta"), Qn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            je.clear(), Xe("muro-contencion"), es();
            break;
          }
          case "zapata":
          case "footing": {
            je.clear(), Xe("zapata"), ts();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            je.clear(), Xe("placa-orificios"), os();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            je.clear(), Xe("col-placa"), ns();
            break;
          }
          case "talud":
          case "slope": {
            je.clear(), Xe("talud"), ss();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            je.clear(), Xe("eiffel"), ys();
            break;
          }
          case "arco":
          case "arco-gateway": {
            je.clear(), Xe("arco"), $s();
            break;
          }
          case "puente":
          case "puente-colgante": {
            je.clear(), Xe("puente"), ws();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            je.clear(), Xe("twisted"), Ms();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            je.clear(), Xe("burj"), Ss();
            break;
          }
          case "opera":
          case "sydney-opera": {
            je.clear(), Xe("opera"), Es();
            break;
          }
          case "diagrid":
          case "gherkin": {
            je.clear(), Xe("diagrid"), Is();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", c = -10, a = 0.2, r = 3e7, f = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${c}, t=${a}`);
        const b = performance.now(), $ = Fn({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: c,
          theoryType: d
        }), M = performance.now() - b;
        console.log(`Solved in ${M.toFixed(1)} ms`), console.log(`w_max = ${$.maxW.toExponential(6)}`), console.log(`w_center = ${($.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${$.maxMxx.toExponential(4)}, Myy_max = ${$.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${$.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${$.maxQx.toExponential(4)}, Qy_max = ${$.maxQy.toExponential(4)}`);
        const v = $.nodeResults.map((k) => [
          k.x,
          k.y,
          0
        ]), p = $.elementResults.map((k) => [
          ...k.nodes
        ]);
        e.nodes.val = v, e.elements.val = p;
        const h = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((k, P) => {
          h.set(P, [
            0,
            0,
            k.w,
            k.bx,
            k.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const w = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((k, P) => {
          (k.x < 1e-10 || k.x > t - 1e-10 || k.y < 1e-10 || k.y > o - 1e-10) && w.set(P, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const E = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const k = c * t * o / v.length;
          v.forEach((P, q) => {
            w.has(q) || E.set(q, [
              0,
              0,
              k,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: w,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const k = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
          $.elementResults.forEach((g, u) => {
            k.set(u, [
              g.Mxx,
              g.Mxx,
              g.Mxx
            ]), P.set(u, [
              g.Myy,
              g.Myy,
              g.Myy
            ]), q.set(u, [
              g.Mxy,
              g.Mxy,
              g.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: k,
            bendingYY: P,
            bendingXY: q
          };
        }
        return setTimeout(() => Et(), 50), Je(), $;
      },
      set(t, o) {
        le[t] ? (le[t].val = o, console.log(`${t} = ${o}`), Jt(), $e()) : nt[t] ? (nt[t].val = o, console.log(`${t} = ${o}`), Jt(), $e()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...le,
          ...nt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in le) o[l] = le[l].val;
          for (const l in nt) o[l] = nt[l].val;
          o.plateTheory = ht, o.supportType = Mt;
          const n = Uo()[L];
          return n && n[Mt] && (o.supportLabel = n[Mt].label), console.table(o), o;
        }
        if (le[t]) return le[t].val;
        if (nt[t]) return nt[t].val;
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
        }[t.toLowerCase()] || 3), ht = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[ht] || ht}`), L.includes("placa") && (Jt(), $e());
      },
      setBc(t) {
        const o = Uo()[L];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        Mt = t, Mt >= o.length && (Mt = 0), console.log(`Apoyo: ${o[Mt].label} \u2192 DOFs: [${o[Mt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Jt(), $e();
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
        t && (x = t), o && (_ = o), T = vo(x, _);
        const n = ye.querySelector("#cad3d-force-unit"), l = ye.querySelector("#cad3d-length-unit");
        return n && (n.textContent = x), l && (l.textContent = _), L && Xe(L), console.log(`Unidades: ${T.label} | E=${T.E.toExponential(3)} ${T.stress}`), T.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function jn() {
      return Sa(T);
    }
    function Yn() {
      return Ea(T);
    }
    let nt = {};
    function Xe(t) {
      var _a2, _b;
      L = t, Cs.val = true, Mt = 0, Le && bn(), le = {};
      const o = jn()[t];
      if (o) for (const l of o) le[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      nt = {};
      const n = Yn()[t];
      if (n) for (const l of n) nt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = le.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = le.nVanosY) == null ? void 0 : _b.val) ?? 2);
        re = Array(l).fill(T.defaultSpan), de = Array(s).fill(T.defaultSpan * 0.8);
      }
      Jt(), setTimeout(() => {
        Ds(), $e();
      }, 50);
    }
    function G(t) {
      var _a2, _b;
      return ((_a2 = le[t]) == null ? void 0 : _a2.val) ?? ((_b = nt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function $e() {
      switch (L) {
        case "truss":
          Gn();
          break;
        case "beams":
          Jn();
          break;
        case "3d":
          Vn();
          break;
        case "frame": {
          const o = Math.round(G("nVanos")), n = G("spanV"), l = Math.round(G("nPisos")), s = G("hPiso");
          je.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(G("nPisos")), n = G("hPiso"), l = G("Lvix") || 0, s = G("Lvdx") || 0, c = G("Lviy") || 0, a = G("Lvdy") || 0, r = Math.max(1, Math.round(G("nSubViga") || 3)), f = Math.max(1, Math.round(G("nSubCol") || 1));
          je.building([
            ...re
          ], [
            ...de
          ], Array(o).fill(n), r, l, s, c, a, f);
          break;
        }
        case "galpon":
          je.galpon(G("span"), G("length"), G("height"), G("archRise"), Math.round(G("xDiv")), Math.round(G("yDiv")));
          break;
        case "barra":
          Fs();
          break;
        case "placa-3q":
          Xn();
          break;
        case "placa-q4":
          Kn();
          break;
        case "losa-rect":
          Un();
          break;
        case "losa-plana":
          Zn();
          break;
        case "viga-alta":
          Qn();
          break;
        case "muro-contencion":
          es();
          break;
        case "zapata":
          ts();
          break;
        case "placa-orificios":
          os();
          break;
        case "col-placa":
          ns();
          break;
        case "talud":
          ss();
          break;
        case "eiffel":
          ys();
          break;
        case "arco":
          $s();
          break;
        case "puente":
          ws();
          break;
        case "twisted":
          Ms();
          break;
        case "burj":
          Ss();
          break;
        case "opera":
          Es();
          break;
        case "diagrid":
          Is();
          break;
      }
      if ((L === "frame" || L === "edificio" || L === "galpon") && e.nodeInputs) {
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
        "diagrid"
      ].includes(L)) {
        if (U.size > 0 || Y.size > 0 || j) {
          const o = e.elements.val, n = o.filter((l, s) => !(U.has(s) || Y.has(s) || j && !W.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          no(), hn();
        }, 30);
      }
    }
    function Gn() {
      const t = G("span"), o = Math.round(G("divisions")), n = G("height"), l = t / o, s = [], c = [];
      for (let i = 0; i <= o; i++) s.push([
        l * i,
        0,
        0
      ]);
      for (let i = 0; i <= o; i++) s.push([
        l * i,
        0,
        n
      ]);
      const a = o + 1;
      for (let i = 0; i < o; i++) c.push([
        i,
        i + 1
      ]);
      for (let i = 0; i < o; i++) c.push([
        a + i,
        a + i + 1
      ]);
      for (let i = 0; i <= o; i++) c.push([
        i,
        a + i
      ]);
      for (let i = 0; i < o; i++) i < o / 2 ? c.push([
        i,
        a + i + 1
      ]) : c.push([
        a + i,
        i + 1
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
      ]), f = (G("CM") ?? 0) + (G("CV") ?? 0), d = /* @__PURE__ */ new Map();
      if (f !== 0) for (let i = 0; i <= o; i++) d.set(i, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: d
      }), Je();
    }
    function Jn() {
      const t = G("width"), o = G("height"), n = G("Ex") ?? 0, l = (G("CM") ?? 0) + (G("CV") ?? 0), s = Math.max(1, Math.round(G("nSub") || 4)), c = [
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
        o
      ], f = [
        t,
        0,
        o
      ];
      let d = 1;
      for (let b = 1; b < s; b++) {
        const $ = b / s, M = c.length;
        c.push([
          r[0] + (f[0] - r[0]) * $,
          r[1] + (f[1] - r[1]) * $,
          r[2] + (f[2] - r[2]) * $
        ]), a.push([
          d,
          M
        ]), d = M;
      }
      a.push([
        d,
        2
      ]);
      const i = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) i.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || i.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || i.set(b, [
        b === 2 ? n : 0,
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
        loads: i
      }), Je();
    }
    function Vn() {
      const t = G("dx"), o = G("dy"), n = G("dz"), l = Math.round(G("stories")), s = Math.max(1, Math.round(G("nSub") || 3)), c = [];
      for (let p = 0; p <= l; p++) c.push([
        0,
        0,
        n * p
      ], [
        t,
        0,
        n * p
      ], [
        t,
        o,
        n * p
      ], [
        0,
        o,
        n * p
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
      const d = [];
      for (let p = 1; p <= l; p++) {
        const h = p * 4;
        d.push([
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
      for (const [p, h] of d) {
        const w = c[p], E = c[h];
        let k = p;
        for (let P = 1; P < s; P++) {
          const q = P / s, g = r.length;
          r.push([
            w[0] + (E[0] - w[0]) * q,
            w[1] + (E[1] - w[1]) * q,
            w[2] + (E[2] - w[2]) * q
          ]), f.push([
            k,
            g
          ]), k = g;
        }
        f.push([
          k,
          h
        ]);
      }
      const i = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) i.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = G("Ex") ?? 0, $ = (G("CM") ?? 0) + (G("CV") ?? 0), M = a - 2, v = /* @__PURE__ */ new Map();
      if (b !== 0 && $ === 0) v.set(M, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if ($ !== 0 && b === 0) for (let p = 0; p < r.length; p++) i.has(p) || v.set(p, [
        0,
        0,
        $,
        0,
        0,
        0
      ]);
      else if (b !== 0 && $ !== 0) for (let p = 0; p < r.length; p++) i.has(p) || v.set(p, [
        p === M ? b : 0,
        0,
        $,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: v
      }), Je();
    }
    function Fs() {
      const t = G("L"), o = Math.round(G("nElem")), n = G("F"), l = t / o, s = [], c = [];
      for (let f = 0; f <= o; f++) s.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < o; f++) c.push([
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
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      }), Je();
    }
    function Xn() {
      const t = G("Lx") || 15, o = G("Ly") || 10, n = G("meshSize") || 0.5, l = G("q") || -3, s = G("t") || 1, c = G("E") || 3e7, a = G("nu") || 0.3, r = c / (2 * (1 + a)), f = ht === 1 ? "Membrana" : ht === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: i, boundaryIndices: b } = to({
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
      }), $ = t * o, M = l * $ / d.length, v = new Map(b.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(d.map((h, w) => [
        w,
        [
          0,
          0,
          M,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = d, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: v,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(i.map((h, w) => [
          w,
          c
        ])),
        elasticitiesOrthogonal: new Map(i.map((h, w) => [
          w,
          c
        ])),
        thicknesses: new Map(i.map((h, w) => [
          w,
          s
        ])),
        poissonsRatios: new Map(i.map((h, w) => [
          w,
          a
        ])),
        shearModuli: new Map(i.map((h, w) => [
          w,
          r
        ]))
      });
      try {
        const h = Pt(d, i, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const w = Co(d, i, e.elementInputs.val, h);
        w && e.analyzeOutputs && (e.analyzeOutputs.val = w), console.log(`Plate 3Q [${f}]: ${d.length} nodes, ${i.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function Kn() {
      const t = G("Lx") || 10, o = G("Ly") || 10, n = Math.round(G("nx") || 16), l = Math.round(G("ny") || 16), s = G("t") || 0.2, c = G("q") || -10, a = G("E") || 3e7, r = G("nu") || 0.3, f = Mt === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 0;
      return je.plateQ4(t, o, n, l, f, c, s, a, r, i);
    }
    function Un() {
      const t = G("a") || 6, o = G("b") || 4, n = Math.round(G("nx") || 12), l = Math.round(G("ny") || 8), s = G("t") || 0.1, c = G("q") || -10, a = G("E") || 35e6, r = G("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 0, i = je.plateQ4(t, o, n, l, "simply-supported", c, s, a, r, d), b = a * s * s * s / (12 * (1 - r * r));
      let $ = 0;
      for (let M = 1; M <= 19; M += 2) for (let v = 1; v <= 19; v += 2) {
        const p = M * M / (t * t) + v * v / (o * o);
        $ += 1 / (M * v * p * p);
      }
      if ($ *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${$.toExponential(6)}`), i) {
        const M = Math.abs((Math.abs(i.centerW || 0) - $) / $ * 100);
        console.log(`   WASM w_center = ${(i.centerW || 0).toExponential(6)}, error = ${M.toFixed(2)}%`);
      }
      return i;
    }
    function Zn() {
      const t = G("t") || 0.2, o = G("q") || -10, n = G("E") || 35e6, l = G("nu") || 0.2, s = G("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = c.reduce((z, I) => z + I, 0), f = a.reduce((z, I) => z + I, 0), d = [
        0
      ];
      for (const z of c) d.push(d[d.length - 1] + z);
      const i = [
        0
      ];
      for (const z of a) i.push(i[i.length - 1] + z);
      const b = Math.max(2, Math.round(r / s)), $ = Math.max(2, Math.round(f / s)), M = r / b, v = f / $, p = [];
      for (let z = 0; z <= $; z++) for (let I = 0; I <= b; I++) p.push([
        I * M,
        z * v
      ]);
      const h = [], w = /* @__PURE__ */ new Set();
      for (const z of d) for (const I of i) {
        let F = 1 / 0, O = 0;
        for (let te = 0; te < p.length; te++) {
          const se = Math.hypot(p[te][0] - z, p[te][1] - I);
          se < F && (F = se, O = te);
        }
        w.has(O) || (w.add(O), h.push({
          node: O,
          dof: 0,
          k: 1e15
        }));
      }
      const k = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][k]}]: ${r}\xD7${f}m, ${b}\xD7${$} elem, ${w.size} columnas`);
      const P = performance.now(), q = Fn({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: b,
        meshNy: $,
        bcType: "none",
        pressure: o,
        theoryType: k,
        springs: h
      }), g = performance.now() - P;
      console.log(`Solved in ${g.toFixed(1)} ms, w_max = ${q.maxW.toExponential(4)}`);
      const u = q.nodeResults.map((z) => [
        z.x,
        z.y,
        0
      ]), m = q.elementResults.map((z) => [
        ...z.nodes
      ]);
      e.nodes.val = u, e.elements.val = m;
      const y = /* @__PURE__ */ new Map();
      q.nodeResults.forEach((z, I) => {
        y.set(I, [
          0,
          0,
          z.w,
          z.bx,
          z.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: y
      });
      const S = /* @__PURE__ */ new Map();
      for (const z of w) S.set(z, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const A = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const z = o * r * f / u.length;
        u.forEach((I, F) => {
          S.has(F) || A.set(F, [
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
        supports: S,
        loads: A
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const z = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
        q.elementResults.forEach((O, te) => {
          z.set(te, [
            O.Mxx,
            O.Mxx,
            O.Mxx
          ]), I.set(te, [
            O.Myy,
            O.Myy,
            O.Myy
          ]), F.set(te, [
            O.Mxy,
            O.Mxy,
            O.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: z,
          bendingYY: I,
          bendingXY: F
        };
      }
      setTimeout(() => Et(), 50), Je();
    }
    function Qn() {
      const t = G("L") || 4, o = G("H") || 2, n = G("t") || 0.1, l = G("E") || 2e7, s = G("nu") || 0.2, c = l / (2 * (1 + s)), a = G("q") || -100, r = G("b") || 0.8, f = G("meshSize") || 0.2, { nodes: d, elements: i, boundaryIndices: b } = to({
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
        maxMeshSize: f
      }), $ = d, M = 0.4, v = /* @__PURE__ */ new Map();
      for (let g = 0; g < $.length; g++) {
        const u = $[g][0], m = $[g][1];
        Math.abs(m) < 1e-6 && (u <= M + 1e-6 || u >= t - M - 1e-6) && v.set(g, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - r) / 2, h = p + r, w = [];
      for (let g = 0; g < $.length; g++) if (Math.abs($[g][1] - o) < 1e-6) {
        const u = $[g][0];
        u >= p - 1e-6 && u <= h + 1e-6 && w.push(g);
      }
      const E = a * r / Math.max(w.length, 1), k = /* @__PURE__ */ new Map();
      for (const g of w) k.set(g, [
        0,
        E,
        0,
        0,
        0,
        0
      ]);
      const P = {
        elasticities: new Map(i.map((g, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(i.map((g, u) => [
          u,
          l
        ])),
        thicknesses: new Map(i.map((g, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(i.map((g, u) => [
          u,
          s
        ])),
        shearModuli: new Map(i.map((g, u) => [
          u,
          c
        ]))
      }, q = {
        supports: v,
        loads: k
      };
      try {
        const g = Pt($, i, q, P), u = Co($, i, P, g), m = $.map((S) => [
          S[0],
          0,
          S[1]
        ]);
        if (e.nodes.val = m, e.elements.val = i, g && g.deformations) {
          const S = /* @__PURE__ */ new Map();
          g.deformations.forEach((A, z) => {
            S.set(z, [
              A[0],
              A[2],
              A[1],
              A[3],
              A[5],
              A[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: S
          });
        }
        if (e.nodeInputs) {
          const S = /* @__PURE__ */ new Map();
          v.forEach((z, I) => S.set(I, z));
          const A = /* @__PURE__ */ new Map();
          k.forEach((z, I) => A.set(I, [
            z[0],
            z[2],
            z[1],
            z[3],
            z[5],
            z[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: S,
            loads: A
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let y = 0;
        g && g.deformations && g.deformations.forEach((S) => {
          const A = Math.sqrt(S[0] * S[0] + S[1] * S[1] + S[2] * S[2]);
          y = Math.max(y, A);
        }), console.log(`Viga Alta: ${$.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${y.toExponential(4)}`);
      } catch (g) {
        console.warn("Viga Alta analysis failed:", g.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function es() {
      const t = G("H") || 4, o = G("B") || 3, n = G("tw") || 0.3, l = G("tb") || 0.4, s = G("meshSize") || 0.2, c = G("E") || 25e6, a = G("nu") || 0.2, r = c / (2 * (1 + a)), f = G("gamma") || 18, d = G("Ka") || 0.33, i = G("Es") || 5e4, b = G("nus") || 0.3, $ = i / (2 * (1 + b)), M = G("kn") || 1e6, v = G("ks") || 1e4, p = G("gammaW") || 9.81, h = G("Hw") || 3.5, w = G("qs") || 0, E = Mt, k = o * 0.3, P = o * 0.7, q = [
        [
          -k,
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
          -k,
          l,
          0
        ]
      ];
      let g = [], u = [], m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), S;
      if (E === 0) {
        const I = to({
          points: q,
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
        g = I.nodes, u = I.elements;
        for (let O = 0; O < g.length; O++) Math.abs(g[O][1]) < 1e-6 && m.set(O, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const F = [];
        for (let O = 0; O < g.length; O++) {
          const te = g[O][0], se = g[O][1];
          Math.abs(te - n) < s * 0.6 && se >= l - 1e-6 && F.push({
            idx: O,
            y: se
          });
        }
        F.sort((O, te) => O.y - te.y);
        for (let O = 0; O < F.length; O++) {
          const { idx: te, y: se } = F[O], X = l + t - se, Z = d * f * X + d * w;
          let K = s;
          O > 0 && O < F.length - 1 ? K = (F[O + 1].y - F[O - 1].y) / 2 : O === 0 && F.length > 1 ? K = (F[1].y - F[0].y) / 2 : O === F.length - 1 && F.length > 1 && (K = (F[O].y - F[O - 1].y) / 2);
          const ae = Z * K;
          Math.abs(ae) > 1e-10 && y.set(te, [
            ae,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        S = {
          elasticities: new Map(u.map((O, te) => [
            te,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((O, te) => [
            te,
            c
          ])),
          thicknesses: new Map(u.map((O, te) => [
            te,
            n
          ])),
          poissonsRatios: new Map(u.map((O, te) => [
            te,
            a
          ])),
          shearModuli: new Map(u.map((O, te) => [
            te,
            r
          ]))
        };
      } else if (E === 1 || E === 2) {
        const I = P, F = l + t;
        if (E === 2) {
          const O = [
            [
              -k,
              0,
              0
            ],
            [
              I,
              0,
              0
            ],
            [
              I,
              F,
              0
            ],
            [
              n,
              F,
              0
            ],
            [
              0,
              F,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -k,
              l,
              0
            ]
          ], te = Math.max(3, Math.ceil((F - l) / s)), se = [];
          for (let ie = 0; ie <= te; ie++) se.push([
            n,
            l + ie * (F - l) / te,
            0
          ]);
          const X = to({
            points: [
              ...O,
              ...se
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
          g = X.nodes, u = X.elements;
          const Z = s * 0.4, K = [];
          for (let ie = 0; ie < g.length; ie++) {
            const Ae = g[ie][0], We = g[ie][1];
            Math.abs(Ae - n) < Z && We >= l - Z && K.push(ie);
          }
          K.sort((ie, Ae) => g[ie][1] - g[Ae][1]);
          const ae = [
            K[0]
          ];
          for (let ie = 1; ie < K.length; ie++) {
            const Ae = g[K[ie]][1] - g[ae[ae.length - 1]][1];
            Math.abs(Ae) > s * 0.05 && ae.push(K[ie]);
          }
          K.length = 0, K.push(...ae);
          const we = /* @__PURE__ */ new Map();
          for (const ie of K) {
            const Ae = g.length;
            g.push([
              g[ie][0],
              g[ie][1],
              g[ie][2]
            ]), we.set(ie, Ae);
          }
          const Te = u.length, Pe = [];
          for (let ie = 0; ie < Te; ie++) {
            const Ae = u[ie], We = (g[Ae[0]][0] + g[Ae[1]][0] + g[Ae[2]][0]) / 3, pt = (g[Ae[0]][1] + g[Ae[1]][1] + g[Ae[2]][1]) / 3, $t = We >= -k && We <= P && pt >= 0 && pt <= l, zo = We >= 0 && We <= n && pt >= l && pt <= l + t, co = $t || zo;
            if (Pe.push(!co), !co) for (let Ut = 0; Ut < Ae.length; Ut++) {
              const Qt = we.get(Ae[Ut]);
              Qt !== void 0 && (Ae[Ut] = Qt);
            }
          }
          const R = u.length;
          for (let ie = 0; ie < K.length - 1; ie++) {
            const Ae = K[ie], We = K[ie + 1], pt = we.get(Ae), $t = we.get(We);
            u.push([
              We,
              Ae,
              pt,
              $t
            ]);
          }
          const ne = u.length - R, Q = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map();
          for (let ie = 0; ie < Te; ie++) Pe[ie] ? (Q.set(ie, i), J.set(ie, i), pe.set(ie, b), Se.set(ie, $), D.set(ie, 1)) : (Q.set(ie, c), J.set(ie, c), pe.set(ie, a), Se.set(ie, r), D.set(ie, 1));
          for (let ie = R; ie < u.length; ie++) Q.set(ie, M), J.set(ie, 0), pe.set(ie, 0), Se.set(ie, v), D.set(ie, 0);
          S = {
            elasticities: Q,
            elasticitiesOrthogonal: J,
            thicknesses: D,
            poissonsRatios: pe,
            shearModuli: Se
          };
          for (let ie = 0; ie < g.length; ie++) {
            const Ae = g[ie][0], We = g[ie][1];
            Math.abs(We) < 1e-6 ? m.set(ie, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ae - I) < s * 0.1 && m.set(ie, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ie = 0; ie < Te; ie++) {
            if (!Pe[ie]) continue;
            const Ae = u[ie], We = g[Ae[0]], pt = g[Ae[1]], $t = g[Ae[2]], zo = Math.abs((pt[0] - We[0]) * ($t[1] - We[1]) - ($t[0] - We[0]) * (pt[1] - We[1])) / 2, co = -f * zo / 3;
            for (const Ut of Ae) {
              const Qt = y.get(Ut) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Qt[1] += co, y.set(Ut, Qt);
            }
          }
          if (w > 0) {
            const ie = [];
            for (let Ae = 0; Ae < g.length; Ae++) {
              const We = g[Ae][0], pt = g[Ae][1];
              Math.abs(pt - F) < s * 0.1 && We > n - 1e-6 && ie.push({
                idx: Ae,
                x: We
              });
            }
            ie.sort((Ae, We) => Ae.x - We.x);
            for (let Ae = 0; Ae < ie.length; Ae++) {
              let We = s;
              Ae > 0 && Ae < ie.length - 1 ? We = (ie[Ae + 1].x - ie[Ae - 1].x) / 2 : Ae === 0 && ie.length > 1 ? We = (ie[1].x - ie[0].x) / 2 : Ae === ie.length - 1 && ie.length > 1 && (We = (ie[Ae].x - ie[Ae - 1].x) / 2);
              const pt = -w * We, $t = y.get(ie[Ae].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              $t[1] += pt, y.set(ie[Ae].idx, $t);
            }
          }
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${ne} elem interfaz, kn=${M}, ks=${v}`);
        } else {
          const O = [
            [
              -k,
              0,
              0
            ],
            [
              I,
              0,
              0
            ],
            [
              I,
              F,
              0
            ],
            [
              n,
              F,
              0
            ],
            [
              0,
              F,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -k,
              l,
              0
            ]
          ], te = [
            [
              n,
              l,
              0
            ]
          ], se = to({
            points: [
              ...O,
              ...te
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
          g = se.nodes, u = se.elements;
          const X = (R) => {
            const ne = (g[R[0]][0] + g[R[1]][0] + g[R[2]][0]) / 3, Q = (g[R[0]][1] + g[R[1]][1] + g[R[2]][1]) / 3, J = ne >= -k && ne <= P && Q >= 0 && Q <= l, D = ne >= 0 && ne <= n && Q >= l && Q <= l + t;
            return J || D;
          }, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Pe = [];
          for (let R = 0; R < u.length; R++) {
            const ne = X(u[R]);
            Pe.push(!ne), ne ? (Z.set(R, c), K.set(R, c), we.set(R, a), Te.set(R, r), ae.set(R, 1)) : (Z.set(R, i), K.set(R, i), we.set(R, b), Te.set(R, $), ae.set(R, 1));
          }
          S = {
            elasticities: Z,
            elasticitiesOrthogonal: K,
            thicknesses: ae,
            poissonsRatios: we,
            shearModuli: Te
          };
          for (let R = 0; R < g.length; R++) {
            const ne = g[R][0], Q = g[R][1];
            Math.abs(Q) < 1e-6 ? m.set(R, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ne - I) < s * 0.1 && m.set(R, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let R = 0; R < u.length; R++) {
            if (!Pe[R]) continue;
            const ne = u[R], Q = g[ne[0]], J = g[ne[1]], D = g[ne[2]], pe = Math.abs((J[0] - Q[0]) * (D[1] - Q[1]) - (D[0] - Q[0]) * (J[1] - Q[1])) / 2, Se = -f * pe / 3;
            for (const ie of ne) {
              const Ae = y.get(ie) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ae[1] += Se, y.set(ie, Ae);
            }
          }
          if (w > 0) {
            const R = [];
            for (let ne = 0; ne < g.length; ne++) {
              const Q = g[ne][0], J = g[ne][1];
              Math.abs(J - F) < s * 0.1 && Q > n - 1e-6 && R.push({
                idx: ne,
                x: Q
              });
            }
            R.sort((ne, Q) => ne.x - Q.x);
            for (let ne = 0; ne < R.length; ne++) {
              let Q = s;
              ne > 0 && ne < R.length - 1 ? Q = (R[ne + 1].x - R[ne - 1].x) / 2 : ne === 0 && R.length > 1 ? Q = (R[1].x - R[0].x) / 2 : ne === R.length - 1 && R.length > 1 && (Q = (R[ne].x - R[ne - 1].x) / 2);
              const J = -w * Q, D = y.get(R[ne].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              D[1] += J, y.set(R[ne].idx, D);
            }
          }
        }
      }
      if (E === 3) {
        const I = to({
          points: q,
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
        g = I.nodes, u = I.elements;
        for (let X = 0; X < g.length; X++) Math.abs(g[X][1]) < 1e-6 && m.set(X, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const F = l + t, O = Math.min(h, t), te = F - O, se = [];
        for (let X = 0; X < g.length; X++) {
          const Z = g[X][0], K = g[X][1];
          Math.abs(Z - n) < s * 0.6 && K >= l - 1e-6 && se.push({
            idx: X,
            y: K
          });
        }
        se.sort((X, Z) => X.y - Z.y);
        for (let X = 0; X < se.length; X++) {
          const { idx: Z, y: K } = se[X], ae = Math.max(0, F - K);
          if (ae <= 0 || K < te - 1e-6) continue;
          const we = Math.min(ae, O), Te = p * we;
          let Pe = s;
          X > 0 && X < se.length - 1 ? Pe = (se[X + 1].y - se[X - 1].y) / 2 : X === 0 && se.length > 1 ? Pe = (se[1].y - se[0].y) / 2 : X === se.length - 1 && se.length > 1 && (Pe = (se[X].y - se[X - 1].y) / 2);
          const R = Te * Pe;
          Math.abs(R) > 1e-10 && y.set(Z, [
            R,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        S = {
          elasticities: new Map(u.map((X, Z) => [
            Z,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((X, Z) => [
            Z,
            c
          ])),
          thicknesses: new Map(u.map((X, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(u.map((X, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(u.map((X, Z) => [
            Z,
            r
          ]))
        };
      }
      const A = {
        supports: m,
        loads: y
      }, z = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const I = Pt(g, u, A, S), F = u.filter((ae) => ae.length === 3), O = {};
        for (const ae of Object.keys(S)) {
          const we = S[ae];
          if (we && we instanceof Map) {
            const Te = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let R = 0; R < u.length; R++) u[R].length === 3 && (we.has(R) && Te.set(Pe, we.get(R)), Pe++);
            O[ae] = Te;
          }
        }
        const te = Co(g, F, O, I), se = g.map((ae) => [
          ae[0],
          0,
          ae[1]
        ]);
        if (e.nodes.val = se, e.elements.val = F, I && I.deformations) {
          const ae = /* @__PURE__ */ new Map();
          I.deformations.forEach((we, Te) => {
            ae.set(Te, [
              we[0],
              we[2],
              we[1],
              we[3],
              we[5],
              we[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: ae
          });
        }
        const X = /* @__PURE__ */ new Map();
        m.forEach((ae, we) => X.set(we, ae));
        const Z = /* @__PURE__ */ new Map();
        y.forEach((ae, we) => Z.set(we, [
          ae[0],
          ae[2],
          ae[1],
          ae[3],
          ae[5],
          ae[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: X,
          loads: Z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let K = 0;
        I && I.deformations && I.deformations.forEach((ae) => {
          const we = Math.sqrt(ae[0] * ae[0] + ae[1] * ae[1] + ae[2] * ae[2]);
          K = Math.max(K, we);
        }), console.log(`Muro Contencion [${z[E]}]: ${g.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${f}, qs=${w}`), E === 1 && console.log(`  Es=${i}, nus=${b}`), E === 2 && console.log(`  Es=${i}, nus=${b}, kn=${M}, ks=${v}`), E === 3 && console.log(`  gammaW=${p}, Hw=${h}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (I) {
        console.warn("Muro Contencion failed:", I.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ts() {
      const t = G("Lx") || 2, o = G("Ly") || 2, n = G("t") || 0.5, l = G("colA") || 0.4, s = G("colH") || 1.5, c = Math.round(G("nx") || 8), a = Math.round(G("ny") || 8), r = G("E") || 25e6, f = G("nu") || 0.2, d = G("P") || -500, i = G("Mx") || 0, b = G("My") || 0, $ = G("ks") || 2e4, M = t / c, v = o / a, p = t / 2, h = o / 2, w = l / 2, E = [];
      for (let m = 0; m <= a; m++) for (let y = 0; y <= c; y++) {
        const S = m * (c + 1) + y;
        let A = M, z = v;
        (y === 0 || y === c) && (A = M / 2), (m === 0 || m === a) && (z = v / 2), E.push({
          node: S,
          dof: 0,
          k: $ * A * z
        });
      }
      let k = 0;
      for (let m = 0; m <= a; m++) for (let y = 0; y <= c; y++) Math.abs(y * M - p) <= w + 1e-6 && Math.abs(m * v - h) <= w + 1e-6 && k++;
      const P = d / Math.max(k, 1), q = [];
      for (let m = 0; m <= a; m++) for (let y = 0; y <= c; y++) {
        const S = y * M, A = m * v;
        Math.abs(S - p) <= w + 1e-6 && Math.abs(A - h) <= w + 1e-6 && q.push({
          node: m * (c + 1) + y,
          dof: 0,
          value: P
        });
      }
      if (Math.abs(i) > 1e-6) {
        const m = w > 1e-6 ? w : v, y = i / m;
        for (let S = 0; S <= a; S++) for (let A = 0; A <= c; A++) {
          const z = A * M, I = S * v;
          if (Math.abs(z - p) <= w + 1e-6 && Math.abs(I - h) <= w + 1e-6) {
            const F = I - h;
            if (Math.abs(F) > 1e-6) {
              const O = F > 0 ? 1 : -1;
              q.push({
                node: S * (c + 1) + A,
                dof: 0,
                value: O * y / k * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const m = w > 1e-6 ? w : M, y = b / m;
        for (let S = 0; S <= a; S++) for (let A = 0; A <= c; A++) {
          const z = A * M, I = S * v;
          if (Math.abs(z - p) <= w + 1e-6 && Math.abs(I - h) <= w + 1e-6) {
            const F = z - p;
            if (Math.abs(F) > 1e-6) {
              const O = F > 0 ? 1 : -1;
              q.push({
                node: S * (c + 1) + A,
                dof: 0,
                value: O * y / k * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${a} elem`), console.log(`  col=${l}m, P=${d}, Mx=${i}, My=${b}, ks=${$}`);
      try {
        const m = Fn({
          E: r,
          nu: f,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: c,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: E,
          pointLoads: q
        });
        console.log(`  Solved: w_max = ${m.maxW.toExponential(4)}`);
        const y = m.nodeResults.map((te) => [
          te.x,
          te.y,
          0
        ]), S = y.length;
        y.push([
          p - w,
          h - w,
          0
        ]), y.push([
          p + w,
          h - w,
          0
        ]), y.push([
          p + w,
          h + w,
          0
        ]), y.push([
          p - w,
          h + w,
          0
        ]), y.push([
          p - w,
          h - w,
          s
        ]), y.push([
          p + w,
          h - w,
          s
        ]), y.push([
          p + w,
          h + w,
          s
        ]), y.push([
          p - w,
          h + w,
          s
        ]);
        const A = m.elementResults.map((te) => [
          ...te.nodes
        ]);
        A.push([
          S,
          S + 4
        ]), A.push([
          S + 1,
          S + 5
        ]), A.push([
          S + 2,
          S + 6
        ]), A.push([
          S + 3,
          S + 7
        ]), A.push([
          S + 4,
          S + 5
        ]), A.push([
          S + 5,
          S + 6
        ]), A.push([
          S + 6,
          S + 7
        ]), A.push([
          S + 7,
          S + 4
        ]), A.push([
          S,
          S + 1
        ]), A.push([
          S + 1,
          S + 2
        ]), A.push([
          S + 2,
          S + 3
        ]), A.push([
          S + 3,
          S
        ]), e.nodes.val = y, e.elements.val = A;
        const z = /* @__PURE__ */ new Map();
        m.nodeResults.forEach((te, se) => {
          z.set(se, [
            0,
            0,
            te.w,
            te.bx,
            te.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: z
        });
        const I = /* @__PURE__ */ new Map();
        m.nodeResults.forEach((te, se) => {
          const X = te.x, Z = te.y;
          (X < 1e-6 || X > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && I.set(se, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const F = /* @__PURE__ */ new Map();
        if (F.set(S + 4, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), F.set(S + 5, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), F.set(S + 6, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), F.set(S + 7, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: F
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const te = m.elementResults.length, se = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          m.elementResults.forEach((K, ae) => {
            se.set(ae, [
              K.Mxx,
              K.Mxx,
              K.Mxx
            ]), X.set(ae, [
              K.Myy,
              K.Myy,
              K.Myy
            ]), Z.set(ae, [
              K.Mxy,
              K.Mxy,
              K.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: se,
            bendingYY: X,
            bendingXY: Z
          };
        }
        const O = tt();
        O && (O.settings.shellResults.val = "bendingXX");
      } catch (m) {
        console.warn("Zapata solver failed:", m.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function os() {
      const t = G("Lx") || 0.4, o = G("Ly") || 0.4, n = G("t") || 0.025, l = G("dBolt") || 0.022, s = G("sx") || 0.28, c = G("sy") || 0.28, a = G("colA") || 0.2, r = G("meshSize") || 8e-3, f = G("E") || 2e8, d = G("nu") || 0.3, i = f / (2 * (1 + d)), b = G("P") || -200, $ = Math.round(G("nBolts") || 4), M = t / 2, v = o / 2, p = l / 2, h = a / 2, w = [];
      $ >= 4 && (w.push([
        M - s / 2,
        v - c / 2
      ]), w.push([
        M + s / 2,
        v - c / 2
      ]), w.push([
        M + s / 2,
        v + c / 2
      ]), w.push([
        M - s / 2,
        v + c / 2
      ])), $ >= 6 && (w.push([
        M,
        v - c / 2
      ]), w.push([
        M,
        v + c / 2
      ])), $ >= 8 && (w.push([
        M - s / 2,
        v
      ]), w.push([
        M + s / 2,
        v
      ]));
      const { nodes: E, elements: k } = to({
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
      }), P = (z, I) => {
        for (const [F, O] of w) if ((z - F) * (z - F) + (I - O) * (I - O) < p * p) return true;
        return false;
      }, q = k.filter((z) => {
        const I = (E[z[0]][0] + E[z[1]][0] + E[z[2]][0]) / 3, F = (E[z[0]][1] + E[z[1]][1] + E[z[2]][1]) / 3;
        return !P(I, F);
      }), g = E, u = /* @__PURE__ */ new Map();
      for (let z = 0; z < g.length; z++) {
        const I = g[z][0], F = g[z][1];
        for (const [O, te] of w) {
          const se = Math.sqrt((I - O) * (I - O) + (F - te) * (F - te));
          se >= p * 0.7 && se <= p * 1.5 && u.set(z, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const m = /* @__PURE__ */ new Map();
      let y = 0;
      for (let z = 0; z < g.length; z++) {
        const I = g[z][0], F = g[z][1];
        Math.abs(I - M) <= h && Math.abs(F - v) <= h && y++;
      }
      const S = b / Math.max(y, 1);
      for (let z = 0; z < g.length; z++) {
        const I = g[z][0], F = g[z][1];
        if (Math.abs(I - M) <= h && Math.abs(F - v) <= h) {
          const O = m.get(z) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O[2] += S, m.set(z, O);
        }
      }
      const A = {
        elasticities: new Map(q.map((z, I) => [
          I,
          f
        ])),
        elasticitiesOrthogonal: new Map(q.map((z, I) => [
          I,
          f
        ])),
        thicknesses: new Map(q.map((z, I) => [
          I,
          n
        ])),
        poissonsRatios: new Map(q.map((z, I) => [
          I,
          d
        ])),
        shearModuli: new Map(q.map((z, I) => [
          I,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${q.length} triangulos, ${g.length} nodos`);
      try {
        const z = Pt(g, q, {
          supports: u,
          loads: m
        }, A), I = Co(g, q, A, z);
        e.nodes.val = g, e.elements.val = q, z && e.deformOutputs && (e.deformOutputs.val = z), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: m
        }), e.elementInputs && (e.elementInputs.val = {}), I && e.analyzeOutputs && (e.analyzeOutputs.val = I);
        let F = 0;
        z && z.deformations && z.deformations.forEach((O) => {
          const te = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]);
          F = Math.max(F, te);
        }), console.log(`  max|u| = ${F.toExponential(4)}`);
      } catch (z) {
        console.warn("Placa Base failed:", z.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ns() {
      const t = G("colB") || 0.3, o = G("colH") || 0.3, n = G("colT") || 8e-3, l = G("colLen") || 1.5, s = G("Lx") || 0.45, c = G("Ly") || 0.45, a = G("tPlaca") || 0.025, r = G("dBolt") || 0.022, f = G("sx") || 0.32, d = G("sy") || 0.32, i = Math.round(G("nSubColV") || 6), b = Math.round(G("nSubColH") || 4), $ = Math.round(G("nSubPlaca") || 10), M = G("E") || 2e8, v = G("nu") || 0.3, p = M / (2 * (1 + v)), h = G("P") || -300, w = s / 2, E = c / 2, k = r / 2, P = t / 2, q = o / 2, g = [], u = [], m = $, y = s / m, S = c / m, A = (J, D) => D * (m + 1) + J;
      for (let J = 0; J <= m; J++) for (let D = 0; D <= m; D++) g.push([
        D * y,
        J * S,
        0
      ]);
      const z = [
        [
          w - f / 2,
          E - d / 2
        ],
        [
          w + f / 2,
          E - d / 2
        ],
        [
          w + f / 2,
          E + d / 2
        ],
        [
          w - f / 2,
          E + d / 2
        ]
      ], I = (J, D) => {
        for (const [pe, Se] of z) if ((J - pe) * (J - pe) + (D - Se) * (D - Se) < k * k) return true;
        return false;
      }, F = u.length;
      for (let J = 0; J < m; J++) for (let D = 0; D < m; D++) {
        const pe = (D + 0.5) * y, Se = (J + 0.5) * S;
        I(pe, Se) || u.push([
          A(D, J),
          A(D + 1, J),
          A(D + 1, J + 1),
          A(D, J + 1)
        ]);
      }
      const O = u.length - F, te = i, se = b, X = [
        [
          w - P,
          E - q
        ],
        [
          w + P,
          E - q
        ],
        [
          w + P,
          E + q
        ],
        [
          w - P,
          E + q
        ]
      ], Z = u.length, K = [
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
      ], ae = (J, D) => {
        for (let pe = 0; pe < (m + 1) * (m + 1); pe++) if (Math.abs(g[pe][0] - J) < y * 0.3 && Math.abs(g[pe][1] - D) < S * 0.3 && Math.abs(g[pe][2]) < 1e-6) return pe;
        return -1;
      };
      for (const [J, D] of K) {
        const [pe, Se] = X[J], [ie, Ae] = X[D], We = [];
        for (let pt = 0; pt <= te; pt++) {
          const $t = [], zo = pt / te * l;
          for (let co = 0; co <= se; co++) {
            const Ut = co / se, Qt = pe + Ut * (ie - pe), An = Se + Ut * (Ae - Se);
            if (pt === 0) {
              const eo = ae(Qt, An);
              if (eo >= 0) {
                $t.push(eo);
                continue;
              }
            }
            let Cn = -1;
            for (let eo = 0; eo < g.length; eo++) if (Math.abs(g[eo][0] - Qt) < 1e-6 && Math.abs(g[eo][1] - An) < 1e-6 && Math.abs(g[eo][2] - zo) < 1e-6) {
              Cn = eo;
              break;
            }
            Cn >= 0 ? $t.push(Cn) : ($t.push(g.length), g.push([
              Qt,
              An,
              zo
            ]));
          }
          We.push($t);
        }
        for (let pt = 0; pt < te; pt++) for (let $t = 0; $t < se; $t++) u.push([
          We[pt][$t],
          We[pt][$t + 1],
          We[pt + 1][$t + 1],
          We[pt + 1][$t]
        ]);
      }
      const we = u.length - Z, Te = /* @__PURE__ */ new Map();
      for (let J = 0; J < (m + 1) * (m + 1); J++) {
        const D = g[J][0], pe = g[J][1];
        for (const [Se, ie] of z) {
          const Ae = Math.sqrt((D - Se) * (D - Se) + (pe - ie) * (pe - ie));
          Ae >= k * 0.5 && Ae <= k * 2 && Te.set(J, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Pe = /* @__PURE__ */ new Map(), R = [];
      for (let J = 0; J < g.length; J++) Math.abs(g[J][2] - l) < 1e-6 && R.push(J);
      const ne = h / Math.max(R.length, 1);
      for (const J of R) Pe.set(J, [
        0,
        0,
        ne,
        0,
        0,
        0
      ]);
      const Q = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let J = F; J < F + O; J++) Q.elasticities.set(J, M), Q.poissonsRatios.set(J, v), Q.thicknesses.set(J, a), Q.shearModuli.set(J, p);
      for (let J = Z; J < Z + we; J++) Q.elasticities.set(J, M), Q.poissonsRatios.set(J, v), Q.thicknesses.set(J, n), Q.shearModuli.set(J, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${O} Q4 placa + ${we} Q4 columna = ${u.length} total`), console.log(`  ${g.length} nodos, P=${h} kN`);
      try {
        const J = Pt(g, u, {
          supports: Te,
          loads: Pe
        }, Q), D = Co(g, u, Q, J);
        e.nodes.val = g, e.elements.val = u, J && e.deformOutputs && (e.deformOutputs.val = J), e.nodeInputs && (e.nodeInputs.val = {
          supports: Te,
          loads: Pe
        }), e.elementInputs && (e.elementInputs.val = Q), D && e.analyzeOutputs && (e.analyzeOutputs.val = D);
        let pe = 0;
        (J == null ? void 0 : J.deformations) && J.deformations.forEach((Se) => {
          const ie = Math.sqrt(Se[0] * Se[0] + Se[1] * Se[1] + Se[2] * Se[2]);
          pe = Math.max(pe, ie);
        }), console.log(`  max|u| = ${pe.toExponential(4)}`);
      } catch (J) {
        console.warn("Col+Placa failed:", J.message), e.nodes.val = g, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Te,
          loads: Pe
        });
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ss() {
      const t = G("H") || 6, o = G("angle") || 45, n = G("bTop") || 3, l = G("bBot") || 3, s = G("meshSize") || 2, c = G("E") || 5e4, a = G("nu") || 0.3, r = G("gamma") || 18, f = G("c") || 15, d = G("phi") || 30, i = G("qs") || 0, b = t / Math.tan(o * Math.PI / 180), $ = l + b + n, M = t, v = [
        [
          0,
          -M,
          0
        ],
        [
          $,
          -M,
          0
        ],
        [
          $,
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
      ], { nodes: p, elements: h } = to({
        points: v,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: s
      }), w = p, E = [], k = /* @__PURE__ */ new Map();
      for (let q = 0; q < w.length; q++) {
        const g = w[q][0], u = w[q][1];
        Math.abs(u + M) < 1e-6 ? (E.push({
          node: q,
          fixX: true,
          fixY: true
        }), k.set(q, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(g) < 1e-6 || Math.abs(g - $) < 1e-6) && (E.push({
          node: q,
          fixX: true,
          fixY: false
        }), k.set(q, [
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
        const q = w.map((I) => [
          I[0],
          I[1]
        ]), g = h.map((I) => [
          I[0],
          I[1],
          I[2]
        ]), u = da({
          nodes: q,
          elements: g,
          E: c,
          nu: a,
          gamma: r,
          c: f,
          phi: d,
          thickness: 1,
          supports: E,
          surcharge: i,
          surfaceYThreshold: P
        }), m = w.map((I) => [
          I[0],
          0,
          I[1]
        ]);
        e.nodes.val = m, e.elements.val = h;
        const y = /* @__PURE__ */ new Map();
        for (let I = 0; I < u.displacements.length; I++) {
          const [F, O] = u.displacements[I];
          y.set(I, [
            F,
            0,
            O,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: y
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), e.elementInputs && (e.elementInputs.val = {});
        const S = /* @__PURE__ */ new Map();
        for (let I = 0; I < u.plasticStrain.length; I++) {
          const F = u.plasticStrain[I];
          S.set(I, [
            F,
            F,
            F
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: S
        });
        let A = 0;
        for (const [I, F] of u.displacements) {
          const O = Math.sqrt(I * I + F * F);
          A = Math.max(A, O);
        }
        let z = 0;
        for (const I of u.plasticStrain) z = Math.max(z, I);
        console.log(`Talud SRM: ${w.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${f} kPa, \u03C6=${d}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${A.toExponential(4)}`), console.log(`  max \u03B5_pl = ${z.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (q) {
        console.warn("Talud SRM failed:", q.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    let Gt = null, gt = null, Zt = null;
    function Ps() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const s = o.parentElement;
          s.removeChild(o), n.appendChild(t), n.appendChild(l), n.appendChild(o), s.appendChild(n);
        }
        n ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function ft(t) {
      const o = Po.find((n) => n.id === _);
      return t / o.toM;
    }
    function ut(t) {
      const o = Po.find((n) => n.id === _);
      return t * o.toM;
    }
    function uo(t) {
      const o = Rn.find((l) => l.id === V.forceId), n = Po.find((l) => l.id === V.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function pn(t) {
      const o = Rn.find((l) => l.id === V.forceId), n = Po.find((l) => l.id === V.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function fn() {
      return V.label;
    }
    function qs() {
      switch (Po.find((o) => o.id === _).id) {
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
    function Os() {
      const t = uo(20594), o = uo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function as(t, o, n, l, s) {
      const c = ke.steelVigaType, a = c === 0 ? Zo() : Qo();
      if (ke.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], d = `b${n}${r}`, i = `h${n}${r}`, b = {};
          b[d] = +ft(f.b).toFixed(2), b[i] = +ft(f.h).toFixed(2), t.addBinding(b, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(b, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, d = f == null ? void 0 : f.match(new RegExp(`^b${n}(\\d+)$`)), i = f == null ? void 0 : f.match(new RegExp(`^h${n}(\\d+)$`));
          d && (o[parseInt(d[1])].b = ut(r.value), $e()), i && (o[parseInt(i[1])].h = ut(r.value), $e());
        });
      } else if (c <= 1) {
        for (let r = 0; r < o.length; r++) {
          const f = {};
          f[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(f, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: a
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const d = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          d && (o[parseInt(d[1])].profileIdx = r.value, $e());
        });
      } else if (c === 2) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], d = {}, i = `${n}${r}`;
          d[`bf${i}`] = +ft(f.bf ?? 0.2).toFixed(3), d[`h${i}`] = +ft(f.hf ?? 0.4).toFixed(3), d[`tf${i}`] = +ft(f.tf ?? 0.015).toFixed(3), d[`tw${i}`] = +ft(f.tw ?? 0.01).toFixed(3), t.addBinding(d, `bf${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(d, `h${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(d, `tf${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(d, `tw${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const i = `${n}${d}`;
            f === `bf${i}` && (o[d].bf = ut(r.value), $e()), f === `h${i}` && (o[d].hf = ut(r.value), $e()), f === `tf${i}` && (o[d].tf = ut(r.value), $e()), f === `tw${i}` && (o[d].tw = ut(r.value), $e());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], d = {}, i = `${n}${r}`;
          d[`bc${i}`] = +ft(f.bc ?? 0.2).toFixed(3), d[`hc${i}`] = +ft(f.hc ?? 0.3).toFixed(3), d[`t${i}`] = +ft(f.t ?? 8e-3).toFixed(3), t.addBinding(d, `bc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(d, `hc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(d, `t${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const i = `${n}${d}`;
            f === `bc${i}` && (o[d].bc = ut(r.value), $e()), f === `hc${i}` && (o[d].hc = ut(r.value), $e()), f === `t${i}` && (o[d].t = ut(r.value), $e());
          }
        });
      }
    }
    function wo() {
      var _a2;
      if (gt) {
        try {
          gt.dispose();
        } catch {
        }
        gt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), L !== "edificio" && L !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Ps();
      if (!o) return;
      o.style.display = "";
      const n = T, l = Math.round(((_a2 = le.nPisos) == null ? void 0 : _a2.val) ?? 3), s = qs(), c = Os(), a = re.length || 1, r = de.length || 1;
      for (; ke.perFloor.length < l; ) {
        const g = ke.perFloor.length > 0 ? JSON.parse(JSON.stringify(ke.perFloor[ke.perFloor.length - 1])) : kt(a, r);
        ke.perFloor.push(g);
      }
      ke.perFloor.length > l && (ke.perFloor.length = l);
      for (const g of ke.perFloor) {
        for (; g.vigasX.length < a; ) g.vigasX.push(g.vigasX.length > 0 ? {
          ...g.vigasX[g.vigasX.length - 1]
        } : At());
        for (g.vigasX.length > a && (g.vigasX.length = a); g.vigasY.length < r; ) g.vigasY.push(g.vigasY.length > 0 ? {
          ...g.vigasY[g.vigasY.length - 1]
        } : At());
        g.vigasY.length > r && (g.vigasY.length = r);
      }
      gt = new Bo({
        title: `Sections (${n.label})`,
        container: o
      });
      const f = {
        colMat: ke.colMat
      };
      if (gt.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (g) => {
        ke.colMat = g.value, wo(), $e();
      }), ke.colMat === 0) {
        const g = {
          forma: ke.colShape
        };
        gt.addBinding(g, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (m) => {
          ke.colShape = m.value, wo(), $e();
        });
        const u = {
          fc: +uo(ke.fc).toFixed(1)
        };
        gt.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${fn()})`
        }), gt.on("change", (m) => {
          var _a3;
          ((_a3 = m.target) == null ? void 0 : _a3.key) === "fc" && (ke.fc = pn(m.value), $e());
        });
      } else if (ke.colMat === 1) {
        const g = {
          colType: ke.steelColType
        };
        gt.addBinding(g, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          ke.steelColType = u.value, wo(), $e();
        });
      }
      gt.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: ke.vigaMat
      };
      if (gt.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (g) => {
        ke.vigaMat = g.value, wo(), $e();
      }), ke.vigaMat === 1) {
        const g = {
          vigaType: ke.steelVigaType
        };
        gt.addBinding(g, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          ke.steelVigaType = u.value, wo(), $e();
        });
      }
      const i = ke.steelColType === 0 ? Zo() : Qo();
      ke.steelVigaType === 0 ? Zo() : Qo();
      const b = _ === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : _ === "cm" ? [
        0.5,
        10,
        0.1
      ] : _ === "mm" ? [
        5,
        100,
        1
      ] : _ === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let g = 0; g < l; g++) {
        const u = ke.perFloor[g], m = gt.addFolder({
          title: `Piso ${g + 1}`,
          expanded: g < 2
        });
        if (ke.colMat === 0) if (ke.colShape === 1) {
          const y = {
            dCol: +ft(u.dCol).toFixed(2)
          };
          m.addBinding(y, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), m.on("change", (S) => {
            var _a3;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = ut(S.value), $e());
          });
        } else {
          const y = {
            bCol: +ft(u.bCol).toFixed(2),
            hCol: +ft(u.hCol).toFixed(2)
          };
          m.addBinding(y, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), m.addBinding(y, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), m.on("change", (S) => {
            var _a3, _b;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = ut(S.value), $e()), ((_b = S.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = ut(S.value), $e());
          });
        }
        else if (ke.colMat === 1) if (ke.steelColType <= 1) {
          const y = {
            col: u.colProfileIdx
          };
          m.addBinding(y, "col", {
            label: "Columna",
            options: i
          }).on("change", (S) => {
            u.colProfileIdx = S.value, $e();
          });
        } else if (ke.steelColType === 2) {
          const y = {
            bf: +ft(u.colBf ?? 0.3).toFixed(3),
            h: +ft(u.colHf ?? 0.3).toFixed(3),
            tf: +ft(u.colTf ?? 0.02).toFixed(3),
            tw: +ft(u.colTw ?? 0.012).toFixed(3)
          };
          m.addBinding(y, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), m.addBinding(y, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), m.addBinding(y, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), m.addBinding(y, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), m.on("change", (S) => {
            var _a3, _b, _c, _d;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = ut(S.value), $e()), ((_b = S.target) == null ? void 0 : _b.key) === "h" && (u.colHf = ut(S.value), $e()), ((_c = S.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = ut(S.value), $e()), ((_d = S.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = ut(S.value), $e());
          });
        } else {
          const y = {
            bc: +ft(u.colBc ?? 0.3).toFixed(3),
            hc: +ft(u.colHc ?? 0.3).toFixed(3),
            t: +ft(u.colT ?? 0.01).toFixed(3)
          };
          m.addBinding(y, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), m.addBinding(y, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), m.addBinding(y, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), m.on("change", (S) => {
            var _a3, _b, _c;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = ut(S.value), $e()), ((_b = S.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = ut(S.value), $e()), ((_c = S.target) == null ? void 0 : _c.key) === "t" && (u.colT = ut(S.value), $e());
          });
        }
        else {
          const y = {
            bc: +ft(u.colBc ?? 0.3).toFixed(3),
            hc: +ft(u.colHc ?? 0.3).toFixed(3),
            t: +ft(u.colT ?? 0.01).toFixed(3),
            Es: +uo(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +uo(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          m.addBinding(y, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), m.addBinding(y, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), m.addBinding(y, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), m.addBlade({
            view: "separator"
          });
          const S = +uo(1e8).toFixed(0), A = +uo(3e8).toFixed(0), z = Math.max(1, Math.round((A - S) / 200));
          m.addBinding(y, "Es", {
            min: S,
            max: A,
            step: z,
            label: `Es (${fn()})`
          }), m.addBinding(y, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), m.addBinding(y, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${fn()})`
          }), m.addBinding(y, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), m.on("change", (I) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = I.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = ut(I.value), $e()), ((_b = I.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = ut(I.value), $e()), ((_c = I.target) == null ? void 0 : _c.key) === "t" && (u.colT = ut(I.value), $e()), ((_d = I.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = pn(I.value), $e()), ((_e2 = I.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = I.value, $e()), ((_f = I.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = pn(I.value), $e()), ((_g = I.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = I.value, $e());
          });
        }
        if (u.vigasX.length > 0) {
          const y = m.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          as(y, u.vigasX, "x", s, b);
        }
        if (u.vigasY.length > 0) {
          const y = m.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          as(y, u.vigasY, "y", s, b);
        }
      }
      gt.addBlade({
        view: "separator"
      });
      const $ = gt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), M = {
        activar: fe,
        direccion: He === "x" ? 0 : 1,
        cantidad: Oe
      };
      $.addBinding(M, "activar", {
        label: "Activar"
      }), $.addBinding(M, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), $.addBinding(M, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), $.on("change", (g) => {
        var _a3, _b, _c;
        ((_a3 = g.target) == null ? void 0 : _a3.key) === "activar" && (fe = g.value, $e()), ((_b = g.target) == null ? void 0 : _b.key) === "direccion" && (He = g.value === 0 ? "x" : "y", $e()), ((_c = g.target) == null ? void 0 : _c.key) === "cantidad" && (Oe = Math.round(g.value), $e());
      }), gt.addBlade({
        view: "separator"
      });
      const v = gt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: Ze,
        espesor: +ft(De).toFixed(3),
        subdivX: it,
        subdivY: at
      };
      v.addBinding(p, "activar", {
        label: "Activar losas"
      }), v.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), v.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), v.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), v.on("change", (g) => {
        var _a3, _b, _c, _d;
        ((_a3 = g.target) == null ? void 0 : _a3.key) === "activar" && (Ze = g.value, $e()), ((_b = g.target) == null ? void 0 : _b.key) === "espesor" && (De = ut(g.value), $e()), ((_c = g.target) == null ? void 0 : _c.key) === "subdivX" && (it = Math.round(g.value), $e()), ((_d = g.target) == null ? void 0 : _d.key) === "subdivY" && (at = Math.round(g.value), $e());
      }), gt.addBlade({
        view: "separator"
      });
      const h = gt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), w = {
        espesor: +ft(Ue).toFixed(3),
        subdivH: bt,
        subdivW: vt
      };
      h.addBinding(w, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), h.addBinding(w, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(w, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (g) => {
        var _a3, _b, _c;
        ((_a3 = g.target) == null ? void 0 : _a3.key) === "espesor" && (Ue = ut(g.value), $e()), ((_b = g.target) == null ? void 0 : _b.key) === "subdivH" && (bt = Math.round(g.value), $e()), ((_c = g.target) == null ? void 0 : _c.key) === "subdivW" && (vt = Math.round(g.value), $e());
      });
      const E = re.length || 1, k = de.length || 1, P = E + 1, q = k + 1;
      if (E > 0) {
        const g = h.addFolder({
          title: `Muros dir X (${E} vanos)`,
          expanded: false
        });
        for (let u = 0; u < E; u++) for (let m = 0; m < q; m++) {
          const y = `wx_${u}_${m}`, S = Ye.some((I) => I.dir === "x" && I.bay === u && I.axisIdx === m), A = {};
          A[y] = S;
          const z = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + m)}`;
          g.addBinding(A, y, {
            label: z
          }).on("change", (I) => {
            I.value ? Ye.push({
              dir: "x",
              bay: u,
              axisIdx: m,
              floors: [
                -1
              ]
            }) : Ye = Ye.filter((F) => !(F.dir === "x" && F.bay === u && F.axisIdx === m)), $e();
          });
        }
      }
      if (k > 0) {
        const g = h.addFolder({
          title: `Muros dir Y (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let m = 0; m < P; m++) {
          const y = `wy_${u}_${m}`, S = Ye.some((I) => I.dir === "y" && I.bay === u && I.axisIdx === m), A = {};
          A[y] = S;
          const z = `Vano Y${u + 1} / Eje X${m + 1}`;
          g.addBinding(A, y, {
            label: z
          }).on("change", (I) => {
            I.value ? Ye.push({
              dir: "y",
              bay: u,
              axisIdx: m,
              floors: [
                -1
              ]
            }) : Ye = Ye.filter((F) => !(F.dir === "y" && F.bay === u && F.axisIdx === m)), $e();
          });
        }
      }
      if (Ye.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const g = {
          muros: `${Ye.length} ubicaciones`
        };
        h.addBinding(g, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Jt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (me || (me = t.innerHTML), Me) {
        try {
          Me.dispose();
        } catch {
        }
        Me = null;
      }
      if (Gt) {
        try {
          Gt.dispose();
        } catch {
        }
        Gt = null;
      }
      t.innerHTML = "";
      const o = L.charAt(0).toUpperCase() + L.slice(1);
      Me = new Bo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = jn()[L];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = le[a.key].val;
        for (const a of n) Me.addBinding(s, a.key, {
          min: le[a.key].min,
          max: le[a.key].max,
          step: le[a.key].step,
          label: le[a.key].label
        });
        const c = Me.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const r = {
            min: le[a.key].min,
            max: le[a.key].max
          };
          c.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            le[a.key] && (le[a.key].min = r.min, le[a.key].max = r.max, le[a.key].val < r.min && (le[a.key].val = r.min), le[a.key].val > r.max && (le[a.key].val = r.max)), Jt(), $e();
          });
        }
        Me.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && le[r]) {
            if (le[r].val = a.value, L === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(le.nVanosX.val), d = Math.round(le.nVanosY.val);
                for (; re.length < f; ) re.push(re[re.length - 1] ?? T.defaultSpan);
                for (re.length > f && (re.length = f); de.length < d; ) de.push(de[de.length - 1] ?? T.defaultSpan * 0.8);
                de.length > d && (de.length = d);
              }
              Jt();
            }
            $e();
          }
        });
      }
      if (L === "edificio") {
        if (Zt) {
          try {
            Zt.dispose();
          } catch {
          }
          Zt = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const c = T;
          Zt = new Bo({
            title: `Luces (${c.length})`,
            container: s
          });
          const a = Zt.addFolder({
            title: "Luces X",
            expanded: true
          }), r = {};
          for (let i = 0; i < re.length; i++) r[`svx_${i + 1}`] = re[i];
          for (let i = 0; i < re.length; i++) a.addBinding(r, `svx_${i + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a2, _b;
            const $ = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (re[parseInt($[1]) - 1] = i.value, $e());
          });
          const f = Zt.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let i = 0; i < de.length; i++) d[`svy_${i + 1}`] = de[i];
          for (let i = 0; i < de.length; i++) f.addBinding(d, `svy_${i + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${i + 1}`
          });
          f.on("change", (i) => {
            var _a2, _b;
            const $ = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (de[parseInt($[1]) - 1] = i.value, $e());
          });
        }
      }
      if (wo(), Me) {
        Me.addBlade({
          view: "separator"
        });
        const s = Uo()[L];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((r, f) => {
            c[r.label] = f;
          });
          const a = {
            apoyo: Mt
          };
          Me.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (r) => {
            Mt = r.value, $e();
          });
        }
        if (L === "placa-3q" || L === "placa-q4") {
          const c = {
            teoria: ht
          };
          Me.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            ht = a.value, $e();
          });
        }
      }
      const l = Yn()[L];
      if (l && l.length > 0) {
        Gt = new Bo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = nt[a.key].val;
        for (const a of l) Gt.addBinding(s, a.key, {
          min: nt[a.key].min,
          max: nt[a.key].max,
          step: nt[a.key].step,
          label: nt[a.key].label
        });
        const c = Gt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const r = {
            min: nt[a.key].min,
            max: nt[a.key].max
          };
          c.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            nt[a.key] && (nt[a.key].min = r.min, nt[a.key].max = r.max, nt[a.key].val < r.min && (nt[a.key].val = r.min), nt[a.key].val > r.max && (nt[a.key].val = r.max)), Jt(), $e();
          });
        }
        Gt.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && nt[r]) {
            if (nt[r].val = a.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => hn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (le[s]) le[s].val = c, $e(), Jt();
          else if (nt[s]) {
            if (nt[s].val = c, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              hn(), Jt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in le) s[c] = le[c].val;
          for (const c in nt) s[c] = nt[c].val;
          return s;
        },
        setGenerator: Xe,
        createCustomPanel: (s, c, a) => Ns(s, c, a),
        removeCustomPanel: (s) => {
          ls(s);
        }
      };
    }
    const un = /* @__PURE__ */ new Map();
    function Ns(t, o, n) {
      var _a2;
      ls(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const c = new Bo({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(o)) {
        const d = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const i = {
            [r]: f.value.join(", ")
          };
          c.addBinding(i, r, {
            label: d
          }).on("change", (b) => {
            a[r] = b.value.split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($)), n && n({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const i = {
            [r]: f.value
          }, b = {};
          for (const $ of f.options) b[$] = $;
          c.addBinding(i, r, {
            label: d,
            options: b
          }).on("change", ($) => {
            a[r] = $.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[r] = f.value;
          const i = {
            [r]: f.value
          };
          c.addBinding(i, r, {
            label: d
          }).on("change", (b) => {
            a[r] = b.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "string") {
          a[r] = f.value;
          const i = {
            [r]: f.value
          };
          c.addBinding(i, r, {
            label: d
          }).on("change", (b) => {
            a[r] = b.value, n && n({
              ...a
            });
          });
        } else {
          a[r] = f.value;
          const i = {
            [r]: f.value
          }, b = {
            label: d
          };
          f.min !== void 0 && (b.min = f.min), f.max !== void 0 && (b.max = f.max), f.step !== void 0 && (b.step = f.step), c.addBinding(i, r, b).on("change", ($) => {
            a[r] = $.value, n && n({
              ...a
            });
          });
        }
      }
      return n && c.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...a
        });
      }), un.set(t, {
        pane: c,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
    }
    function ls(t) {
      const o = un.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        un.delete(t);
      }
    }
    function Rs() {
      if (Me) {
        try {
          Me.dispose();
        } catch {
        }
        Me = null;
      }
      if (Gt) {
        try {
          Gt.dispose();
        } catch {
        }
        Gt = null;
      }
      if (gt) {
        try {
          gt.dispose();
        } catch {
        }
        gt = null;
      }
      if (Zt) {
        try {
          Zt.dispose();
        } catch {
        }
        Zt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && me && (n.innerHTML = me);
    }
    const ye = document.createElement("div");
    ye.id = "cad3d-panel";
    const rs = document.createElement("style");
    rs.textContent = `
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
  `, document.head.appendChild(rs), fa() === "light" && document.documentElement.classList.add("awatif-light"), ua((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), L && Et(true);
    }), ye.innerHTML = `
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
          <option value="export-e2k">\u{1F4E4} Export E2K (ETABS)</option>
          <option value="import-py">\u{1F4E5} Import OpenSeesPy</option>
          <option value="export-py">\u{1F4E4} Export OpenSeesPy</option>
          <option value="import-tcl">\u{1F4E5} Import OpenSees Tcl</option>
          <option value="export-tcl">\u{1F4E4} Export OpenSees Tcl</option>
        </select>
        <input type="file" id="cad3d-io-file" accept=".e2k,.E2K,.py,.tcl" style="display:none">
        <select id="cad3d-tests-menu" title="Validation tests vs ETABS" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="">\u{1F9EA} Tests</option>
          <option value="test-cantilever">1. Cantilever (Exact)</option>
          <option value="test-portal-1p">2. Portal 1-Story (ETABS)</option>
          <option value="test-portal-2p">3. Portal 2-Story (ETABS)</option>
          <option value="test-wall-only">4. Wall Q4 Only (ETABS)</option>
          <option value="test-portal-wall">5. Portal + Wall (ETABS)</option>
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
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="5" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
      </div>
      <div id="cad3d-mode-label" style="display:none;color:var(--cad-heading);font-size:10px;line-height:16px;padding:2px 4px;white-space:nowrap;overflow-x:auto">Modo 1</div>
      <div class="btn-row" style="margin-top:2px">
        <button id="cad3d-nonlinear" title="An\xE1lisis no-lineal din\xE1mico (BRB + sismo)">\u{1F525} Nonlinear</button>
        <button id="cad3d-pushover" title="Pushover c\xEDclico con hist\xE9resis">\u{1F4CA} Pushover</button>
        <button id="cad3d-fem-solver" title="Report Explained: derivaci\xF3n FEM paso a paso de todos los elementos">\u{1F4D0} Report Explained</button>
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
    let xt = null;
    function _s() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = _, c = x, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${L || "custom"}`), a.push(`# Units: ${c}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((d, i) => {
        a.push(`  ${String(i).padStart(4)}  ${d[0].toFixed(4).padStart(10)}  ${d[1].toFixed(4).padStart(10)}  ${d[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((d, i) => {
        const b = d.map(($) => String($).padStart(6)).join("");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((d, i) => {
        const b = d.map(($) => $ ? "  1" : "  0").join("");
        a.push(`  ${String(i).padStart(4)} ${b}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((d, i) => {
        const b = d.map(($) => $.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), l) {
        a.push("## ELEMENT PROPERTIES");
        const d = [
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
        ], i = "# elem  " + d.map((b) => b.name.padStart(12)).join(" ");
        a.push(i);
        for (let b = 0; b < o.length; b++) {
          const $ = d.map((M) => {
            var _a3;
            const v = (_a3 = M.map) == null ? void 0 : _a3.get(b);
            return v !== void 0 ? v.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${$}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((d, i) => {
        const b = d.map(($) => $.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((d, i) => {
        const b = d.map(($) => $.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), L) {
        a.push("## CLI COMMAND");
        const d = Object.entries(le).map(([i, b]) => `${i}=${b.val}`).join(" ");
        a.push(`cad.${L === "edificio" ? "building" : L}(${d})`);
      }
      return a.join(`
`);
    }
    let Ro = false;
    function Hs() {
      var _a2, _b, _c, _d;
      if (xt) {
        xt.remove(), xt = null, Ro = false;
        return;
      }
      const t = _s();
      xt = document.createElement("div"), xt.id = "export-overlay", xt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, xt.innerHTML = `
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
    `, document.body.appendChild(xt), (_a2 = xt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        xt == null ? void 0 : xt.remove(), xt = null, Ro = false;
      }), (_b = xt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = xt.querySelector("#export-body"), n = xt.querySelector("#export-minimize");
        Ro = !Ro, Ro ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", xt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", xt.style.width = "720px");
      }), (_c = xt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = xt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = xt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = xt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: L || "custom",
          units: {
            force: x,
            length: _
          },
          nodes: o.map((i, b) => ({
            id: b,
            x: i[0],
            y: i[1],
            z: i[2]
          })),
          elements: n.map((i, b) => ({
            id: b,
            nodes: i
          }))
        };
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((i, b) => c.supports.push({
          node: b,
          dofs: i
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((i, b) => c.loads.push({
          node: b,
          forces: i
        }))), s && (c.properties = {}, s.elasticities && (c.properties.E = Object.fromEntries(s.elasticities)), s.areas && (c.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (c.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (c.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (c.displacements = {}, a.forEach((i, b) => c.displacements[b] = i));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (c.reactions = {}, r.forEach((i, b) => c.reactions[b] = i));
        const f = xt.querySelector("#export-text");
        f.value = JSON.stringify(c, null, 2);
        const d = xt.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Je() {
      var _a2, _b, _c;
      const t = ye.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, a = 0, r = 0;
        for (const d of n) d.length === 2 ? c++ : d.length === 3 ? a++ : d.length === 4 && r++;
        let f = `${o}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${c}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function mn() {
      var _a2;
      if (!ge || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = ca(t, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          ee = c, oe = t.map((d) => [
            ...d
          ]), ve = 0;
          const { extent: a } = so(), r = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let d = 0;
            for (let i = 0; i < t.length; i++) {
              const b = r[i * 6] || 0, $ = r[i * 6 + 1] || 0, M = r[i * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + $ * $ + M * M));
            }
            he = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const f = `${L} \u2014 ${t.length}n ${o.length}e`;
          Ie.render(c, {
            title: f
          }), Ie.div.style.display = "", _o(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ee = null;
      }
    }
    function bn() {
      Le && (cancelAnimationFrame(Le), Le = 0), oe.length > 0 && (e.nodes.val = oe.map((t) => [
        ...t
      ])), Ie.div.style.display = "none", ee = null;
    }
    function _o() {
      var _a2;
      if (Le && cancelAnimationFrame(Le), !(ee == null ? void 0 : ee.modeShapes) || !oe.length) return;
      const t = ee.modeShapes[ve];
      if (!t) return;
      const o = ((_a2 = ee.frequencies) == null ? void 0 : _a2[ve]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = oe.length, c = e.elements.rawVal, { extent: a } = so(), r = ye.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let d = 0;
      for (let k = 0; k < s; k++) {
        const P = t[k * 6] || 0, q = t[k * 6 + 1] || 0, g = t[k * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(P * P + q * q + g * g));
      }
      const i = d > 1e-12 ? a * f / 100 / d : 1, b = tt();
      if (!b) return;
      let $ = null, M = null, v = null;
      b.scene.traverse((k) => {
        var _a3, _b;
        !$ && k.isPoints && k.geometry && ($ = k), !M && k.isLineSegments && k.geometry && !k.name && (M = k), !v && k.isMesh && ((_a3 = k.material) == null ? void 0 : _a3.transparent) && ((_b = k.material) == null ? void 0 : _b.opacity) < 0.5 && k.geometry && (v = k);
      });
      const p = new Float32Array(s * 3), h = [];
      for (const k of c) if (k.length === 2) h.push([
        k[0],
        k[1]
      ]);
      else for (let P = 0; P < k.length; P++) h.push([
        k[P],
        k[(P + 1) % k.length]
      ]);
      const w = new Float32Array(h.length * 6);
      function E() {
        const k = (performance.now() - l) / 1e3, P = Math.sin(2 * Math.PI * n * k) * i;
        for (let q = 0; q < s; q++) {
          const g = oe[q];
          p[q * 3] = g[0] + (t[q * 6] || 0) * P, p[q * 3 + 1] = g[1] + (t[q * 6 + 1] || 0) * P, p[q * 3 + 2] = g[2] + (t[q * 6 + 2] || 0) * P;
        }
        if ($) {
          const q = $.geometry, g = q.getAttribute("position");
          g && g.array.length === p.length ? (g.array.set(p), g.needsUpdate = true) : q.setAttribute("position", new ho(p.slice(), 3));
        }
        if (M) {
          for (let u = 0; u < h.length; u++) {
            const [m, y] = h[u];
            w[u * 6] = p[m * 3], w[u * 6 + 1] = p[m * 3 + 1], w[u * 6 + 2] = p[m * 3 + 2], w[u * 6 + 3] = p[y * 3], w[u * 6 + 4] = p[y * 3 + 1], w[u * 6 + 5] = p[y * 3 + 2];
          }
          const q = M.geometry, g = q.getAttribute("position");
          g && g.array.length === w.length ? (g.array.set(w), g.needsUpdate = true) : q.setAttribute("position", new ho(w.slice(), 3));
        }
        if (v) {
          const q = [];
          for (const g of c) if (g.length === 3) {
            const [u, m, y] = g;
            q.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), q.push(p[m * 3], p[m * 3 + 1], p[m * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]);
          } else if (g.length === 4) {
            const [u, m, y, S] = g;
            q.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), q.push(p[m * 3], p[m * 3 + 1], p[m * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), q.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), q.push(p[S * 3], p[S * 3 + 1], p[S * 3 + 2]);
          }
          if (q.length > 0) {
            const g = v.geometry, u = new Float32Array(q), m = g.getAttribute("position");
            m && m.array.length === u.length ? (m.array.set(u), m.needsUpdate = true) : g.setAttribute("position", new ho(u, 3));
          }
        }
        b.render(), Le = requestAnimationFrame(E);
      }
      Le = requestAnimationFrame(E);
    }
    function hn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const v = G("CM") ?? 0, p = G("CV") ?? 0, h = v + p, w = G("Ex") ?? 0, E = G("Ey") ?? 0;
        if (h === 0 && w === 0 && E === 0) return;
        const k = /* @__PURE__ */ new Map(), P = [];
        for (let I = 0; I < t.length; I++) n.supports.has(I) || P.push(I);
        const q = (I) => Math.round(I * 1e3) / 1e3, g = /* @__PURE__ */ new Set();
        n.supports.forEach((I, F) => {
          g.add(`${q(t[F][0])},${q(t[F][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const I of P) g.has(`${q(t[I][0])},${q(t[I][1])}`) && u.add(I);
        const m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
        if (w !== 0 || E !== 0) {
          let I = -1 / 0, F = -1 / 0;
          for (const te of u) I = Math.max(I, q(t[te][0])), F = Math.max(F, q(t[te][1]));
          const O = /* @__PURE__ */ new Map();
          for (const te of u) {
            const se = q(t[te][2]);
            O.has(se) || O.set(se, []), O.get(se).push(te);
          }
          O.forEach((te) => {
            if (w !== 0) {
              const se = /* @__PURE__ */ new Set();
              for (const X of te) if (q(t[X][0]) === I) {
                const Z = q(t[X][1]);
                se.has(Z) || (se.add(Z), m.add(X));
              }
            }
            if (E !== 0) {
              const se = /* @__PURE__ */ new Set();
              for (const X of te) if (q(t[X][1]) === F) {
                const Z = q(t[X][0]);
                se.has(Z) || (se.add(Z), y.add(X));
              }
            }
          });
        }
        const S = 9.81, A = /* @__PURE__ */ new Map();
        for (let I = 0; I < o.length; I++) {
          const F = o[I], O = ((_a2 = l.densities) == null ? void 0 : _a2.get(I)) ?? 0;
          if (!(Math.abs(O) < 1e-15)) {
            if (F.length === 2) {
              const te = ((_b = l.areas) == null ? void 0 : _b.get(I)) ?? 0, se = t[F[0]], X = t[F[1]], Z = Math.sqrt((X[0] - se[0]) ** 2 + (X[1] - se[1]) ** 2 + (X[2] - se[2]) ** 2), ae = -(O * te * Z * S) / 2;
              A.set(F[0], (A.get(F[0]) ?? 0) + ae), A.set(F[1], (A.get(F[1]) ?? 0) + ae);
            } else if (F.length >= 3) {
              const te = ((_c = l.thicknesses) == null ? void 0 : _c.get(I)) ?? 0;
              let se = 0;
              if (F.length === 3) {
                const [K, ae, we] = F.map((Te) => t[Te]);
                se = 0.5 * Math.abs((ae[0] - K[0]) * (we[1] - K[1]) - (we[0] - K[0]) * (ae[1] - K[1]));
              } else if (F.length === 4) {
                const [K, ae, we, Te] = F.map((Pe) => t[Pe]);
                if (se = 0.5 * Math.abs((ae[0] - K[0]) * (we[1] - K[1]) - (we[0] - K[0]) * (ae[1] - K[1])) + 0.5 * Math.abs((we[0] - K[0]) * (Te[1] - K[1]) - (Te[0] - K[0]) * (we[1] - K[1])), se < 1e-10) {
                  const Pe = [
                    ae[0] - K[0],
                    ae[1] - K[1],
                    ae[2] - K[2]
                  ], R = [
                    Te[0] - K[0],
                    Te[1] - K[1],
                    Te[2] - K[2]
                  ], ne = [
                    Pe[1] * R[2] - Pe[2] * R[1],
                    Pe[2] * R[0] - Pe[0] * R[2],
                    Pe[0] * R[1] - Pe[1] * R[0]
                  ];
                  se = Math.sqrt(ne[0] ** 2 + ne[1] ** 2 + ne[2] ** 2);
                }
              }
              const Z = -(O * te * se * S) / F.length;
              for (const K of F) A.set(K, (A.get(K) ?? 0) + Z);
            }
          }
        }
        const z = /* @__PURE__ */ new Set();
        for (const I of o) I.length === 2 && (z.add(I[0]), z.add(I[1]));
        for (const I of P) {
          const F = m.has(I) ? w : 0, O = y.has(I) ? E : 0, te = A.get(I) ?? 0, se = z.has(I) ? h : 0, X = te + se;
          (F !== 0 || O !== 0 || Math.abs(X) > 1e-10) && k.set(I, [
            F,
            O,
            X,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: k
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let c = 0, a = 0, r = 0;
      for (const v of o) v.length === 2 ? c++ : v.length === 3 ? r++ : v.length === 4 && a++;
      const f = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, i = t.length * 6, b = i - f * 6, $ = [], M = (v) => $.push(v);
      M('<b style="color:var(--cad-heading)">FEM Solver</b>'), M(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && M(`&nbsp;&nbsp;Frames: <b>${c}</b>`), a && M(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && M(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), M(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${d}`), M(`<span style="color:var(--cad-info)">DOFs:</span> ${i} total, ~${b} libres`), M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${i}&times;${i})`), M("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const v = Pt(t, o, n, l), p = performance.now() - s;
        if (v) {
          e.deformOutputs.val = v, M(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let h = 0, w = -1, E = 0, k = 0;
          v.deformations && v.deformations.forEach((m, y) => {
            const S = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
            S > h && (h = S, w = y, E = m[0], k = m[2]);
          }), M('<span style="color:#888">3.</span> Desplazamientos:'), M(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${w})</span>`), M(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(E * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(k * 1e3).toFixed(4)} mm`);
          const P = performance.now(), q = Co(t, o, l, v), g = performance.now() - P;
          q && (e.analyzeOutputs.val = q, M(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${g.toFixed(0)} ms</span>`), M("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (v) {
        const p = performance.now() - s;
        M(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${v.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ge && setTimeout(() => mn(), 50);
    }
    function gn(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, c = Math.min(t, o), a = Math.max(t, o), r = c * c * c * a * (1 / 3 - 0.21 * c / a * (1 - c * c * c * c / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: r
      };
    }
    function is(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function xn(t, o, n, l) {
      const s = o - 2 * n, c = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, r = (2 * n * t * t * t + s * l * l * l) / 12, f = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function vn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, c = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, r = (o * t * t * t - s * l * l * l) / 12, f = (t - n) * (o - n), d = 2 * ((t - n) / n + (o - n) / n), i = 4 * f * f / (d > 0 ? d : 1);
      return {
        A: c,
        Iz: a,
        Iy: r,
        J: i
      };
    }
    function Bs(t, o, n, l, s, c, a) {
      const f = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = t - 2 * n, i = o - 2 * n, b = t * o - d * i, $ = (t * o * o * o - d * i * i * i) / 12, M = (o * t * t * t - i * d * d * d) / 12, v = d * i, p = d * i * i * i / 12, h = i * d * d * d / 12, w = b + f * v, E = $ + f * p, k = M + f * h, P = l / (2 * (1 + s)), q = (t - n) * (o - n), g = 2 * ((t - n) / n + (o - n) / n), u = 4 * q * q / (g > 0 ? g : 1);
      return {
        A: w,
        Iz: E,
        Iy: k,
        J: u,
        Es: l,
        Gs: P,
        A_steel: b,
        A_conc: v
      };
    }
    function no() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = T, n = {
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
      if ((L === "edificio" || L === "frame") && ue.size > 0) {
        const { colMat: s, vigaMat: c, colShape: a, fc: r, perFloor: f } = ke, d = 4700 * Math.sqrt(r / 1e3) * 1e3, i = d / (2 * 1.2), b = 24 / 9.80665, $ = o.E, M = o.G, v = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (Be.has(p)) {
            const m = 4700 * Math.sqrt(r / 1e3) * 1e3, y = 0.2;
            n.elasticities.set(p, m), n.poissonsRatios.set(p, y), n.thicknesses.set(p, Ue), n.shearModuli.set(p, m / (2 * (1 + y))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (yt.has(p)) {
            const m = 4700 * Math.sqrt(r / 1e3) * 1e3, y = 0.2;
            n.elasticities.set(p, m), n.poissonsRatios.set(p, y), n.thicknesses.set(p, De), n.shearModuli.set(p, m / (2 * (1 + y))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const h = ue.has(p), w = qe.get(p) ?? 0, E = f[w] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let k, P, q, g;
          if (h) if (s === 0) P = d, q = i, g = b, k = a === 1 ? is(E.dCol) : gn(E.bCol, E.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: E.dCol
          } : {
            type: "rect",
            b: E.bCol,
            h: E.hCol
          });
          else if (s === 1) {
            P = $, q = M, g = v;
            const m = ke.steelColType;
            if (m <= 1) {
              const y = fo[E.colProfileIdx] ?? fo[0];
              k = {
                A: y.A,
                Iz: y.Iz,
                Iy: y.Iy,
                J: y.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: y.bf,
                h: y.d,
                name: y.name
              });
            } else if (m === 2) {
              const y = E.colBf ?? 0.3, S = E.colHf ?? 0.3, A = E.colTf ?? 0.02, z = E.colTw ?? 0.012;
              k = xn(y, S, A, z);
              const I = `I${(S * 100).toFixed(0)}x${(y * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: y,
                h: S,
                tf: A,
                tw: z,
                name: I
              });
            } else {
              const y = E.colBc ?? 0.3, S = E.colHc ?? 0.3, A = E.colT ?? 0.01;
              k = vn(y, S, A);
              const z = `\u25A1${(S * 100).toFixed(0)}x${(y * 100).toFixed(0)}x${(A * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: y,
                h: S,
                tw: A,
                name: z
              });
            }
          } else {
            const m = E.colBc ?? 0.3, y = E.colHc ?? 0.3, S = E.colT ?? 0.01, A = E.colFc ?? 28e3, z = E.colEs ?? 2e8, I = E.colNuS ?? 0.3;
            E.colNuC;
            const F = Bs(m, y, S, z, I, A);
            k = {
              A: F.A,
              Iz: F.Iz,
              Iy: F.Iy,
              J: F.J
            }, P = F.Es, q = F.Gs;
            const O = 7.85, te = 24 / 9.80665;
            g = (O * F.A_steel + te * F.A_conc) / (F.A_steel + F.A_conc);
            const se = `CFT ${(y * 1e3).toFixed(0)}X${(m * 1e3).toFixed(0)}X${(S * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: m,
              h: y,
              tw: S,
              name: se
            });
          }
          else {
            const m = Ve.get(p), y = m ? m.dir === "x" ? E.vigasX : E.vigasY : [], S = m ? y[m.bay] ?? y[0] ?? At() : At();
            if (c === 0) P = d, q = i, g = b, k = gn(S.b, S.h), n.sectionShapes.set(p, {
              type: "rect",
              b: S.b,
              h: S.h
            });
            else {
              P = $, q = M, g = v;
              const A = ke.steelVigaType;
              if (A <= 1) {
                const z = fo[S.profileIdx ?? 0] ?? fo[0];
                k = {
                  A: z.A,
                  Iz: z.Iz,
                  Iy: z.Iy,
                  J: z.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: z.bf,
                  h: z.d,
                  name: z.name
                });
              } else if (A === 2) {
                const z = S.bf ?? 0.2, I = S.hf ?? 0.4, F = S.tf ?? 0.015, O = S.tw ?? 0.01;
                k = xn(z, I, F, O);
                const te = `I${(I * 100).toFixed(0)}x${(z * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: z,
                  h: I,
                  tf: F,
                  tw: O,
                  name: te
                });
              } else {
                const z = S.bc ?? 0.2, I = S.hc ?? 0.3, F = S.t ?? 8e-3;
                k = vn(z, I, F);
                const O = `\u25A1${(I * 100).toFixed(0)}x${(z * 100).toFixed(0)}x${(F * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: z,
                  h: I,
                  tw: F,
                  name: O
                });
              }
            }
          }
          const u = be.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (P = d, q = i, g = b) : (P = $, q = M, g = v), u.secType === "rect" && u.b && u.h) k = gn(u.b, u.h), n.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) k = is(u.b), n.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const y = fo[u.profileIdx] ?? fo[0];
              k = {
                A: y.A,
                Iz: y.Iz,
                Iy: y.Iy,
                J: y.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: y.bf,
                h: y.d,
                name: y.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              k = xn(u.bf, u.hf, u.tf, u.tw);
              const y = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: y
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              k = vn(u.bc, u.hc, u.t);
              const y = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: y
              });
            }
          }
          n.elasticities.set(p, P), n.shearModuli.set(p, q), n.areas.set(p, k.A), n.momentsOfInertiaZ.set(p, k.Iy), n.momentsOfInertiaY.set(p, k.Iz), n.torsionalConstants.set(p, k.J), n.densities.set(p, g);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function cs(t) {
      ye.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = ye.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (m) => {
        m.stopPropagation(), ye.classList.add("collapsed");
      }), (_b = ye.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (m) => {
        m.stopPropagation(), ye.classList.remove("collapsed");
      }), ye.querySelectorAll("[data-ex]").forEach((m) => {
        m.addEventListener("click", (y) => {
          y.stopPropagation();
          const S = m.dataset.ex;
          cs(S), je.example(S);
        });
      }), ye.querySelectorAll("[data-view]").forEach((m) => {
        m.addEventListener("click", (y) => {
          y.stopPropagation();
          const S = m.dataset.view;
          ao(S), ye.querySelectorAll("[data-view]").forEach((A) => A.classList.remove("view-active")), m.classList.add("view-active");
        });
      }), (_c = ye.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (m) => {
        m.stopPropagation(), L = "", Cs.val = false, Rs(), je.clear();
      }), (_d = ye.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (m) => {
        var _a3;
        m.stopPropagation(), Dt && (Dt = false, bo()), Vt && Go(), Nt = !Nt, (_a3 = ye.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Nt);
        const S = tt();
        S && (S.controls.enabled = !Nt), Nt || Yo();
      }), (_e2 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (m) => {
        var _a3;
        m.stopPropagation(), Dt && (Dt = false, bo()), Nt && Yo(), Vt = !Vt, (_a3 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Vt), Vt ? Gs() : Go();
      }), (_f = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (m) => {
        var _a3;
        m.stopPropagation(), Nt && Yo(), Vt && Go(), Dt = !Dt, (_a3 = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Dt), Dt || bo();
      }), (_g = ye.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (m) => {
        m.stopPropagation(), je.clear(), st = null;
      });
      const t = ye.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const m = t.value;
        t.value = "", m && o(m);
      });
      function o(m) {
        const A = 15e3 * Math.sqrt(210) * 10, z = 0.2, I = A / (2 * (1 + z)), F = 0.09, O = 0.3 ** 4 / 12, te = 0.141 * 0.3 ** 4, se = 0.25 * 0.4, X = 0.25 * 0.4 ** 3 / 12, Z = 0.4 * 0.25 ** 3 / 12, K = 1e-3, ae = 5 / 6 * F, we = 5 / 6 * se, Te = [];
        function Pe(R, ne, Q) {
          const J = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const D of ne) J.elasticities.set(D, A), J.shearModuli.set(D, I), J.areas.set(D, F), J.momentsOfInertiaZ.set(D, O), J.momentsOfInertiaY.set(D, O), J.torsionalConstants.set(D, te), J.shearAreasY.set(D, ae), J.shearAreasZ.set(D, ae);
          for (const D of Q) J.elasticities.set(D, A), J.shearModuli.set(D, I), J.areas.set(D, se), J.momentsOfInertiaZ.set(D, X), J.momentsOfInertiaY.set(D, Z), J.torsionalConstants.set(D, K), J.shearAreasY.set(D, we), J.shearAreasZ.set(D, we);
          return J;
        }
        if (m === "test-cantilever" || m === "test-all") {
          const Q = 270 / (3 * A * O), J = [
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
          ], D = [
            [
              0,
              1
            ]
          ], pe = Pe(1, [], []);
          pe.elasticities.set(0, A), pe.shearModuli.set(0, I), pe.areas.set(0, F), pe.momentsOfInertiaZ.set(0, O), pe.momentsOfInertiaY.set(0, O), pe.torsionalConstants.set(0, te);
          const Se = Pt(J, D, {
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
                  10,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, pe);
          Te.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: J,
            elements: D,
            results: [
              {
                label: "Uy tip (cm)",
                awatif: Se.deformations.get(1)[1] * 100,
                reference: Q * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (m === "test-portal-1p" || m === "test-all") {
          const R = [
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
              3,
              0
            ],
            [
              4,
              3,
              0
            ]
          ], ne = [
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
          ], Q = Pe(3, [
            0,
            1
          ], [
            2
          ]), J = Pt(R, ne, {
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
          }, Q);
          Te.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: R,
            elements: ne,
            results: [
              {
                label: "Ux top (cm)",
                awatif: J.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (m === "test-portal-2p" || m === "test-all") {
          const R = [
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
              3,
              0
            ],
            [
              4,
              3,
              0
            ],
            [
              0,
              6,
              0
            ],
            [
              4,
              6,
              0
            ]
          ], ne = [
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
          ], Q = Pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), J = Pt(R, ne, {
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
          }, Q);
          Te.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: R,
            elements: ne,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: J.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: J.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (m === "test-wall-only" || m === "test-all") {
          const R = [
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
              3,
              0
            ],
            [
              0,
              3,
              0
            ]
          ], ne = [
            [
              0,
              1,
              2,
              3
            ]
          ], J = Pt(R, ne, {
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
                A
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                I
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
                z
              ]
            ])
          });
          Te.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: R,
            elements: ne,
            results: [
              {
                label: "Ux top (cm)",
                awatif: J.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (m === "test-portal-wall" || m === "test-all") {
          const R = [
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
              3,
              0
            ],
            [
              4,
              3,
              0
            ],
            [
              0,
              6,
              0
            ],
            [
              4,
              6,
              0
            ]
          ], ne = [
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
          ], Q = Pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Q.elasticities.set(6, A), Q.shearModuli.set(6, I), Q.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Q.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              z
            ]
          ]);
          const J = Pt(R, ne, {
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
          }, Q);
          Te.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: R,
            elements: ne,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: J.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: J.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (n(Te), Te.length > 0) {
          const R = Te[Te.length - 1];
          Pe(R.elements.length, [], []), e.nodes.val = R.nodes, e.elements.val = R.elements;
        }
      }
      function n(m) {
        let y = document.getElementById("test-results-overlay");
        y && y.remove(), y = document.createElement("div"), y.id = "test-results-overlay", y.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:700px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let S = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">\u{1F9EA} Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">\u2715</button>
      </div>`, A = true;
        for (const I of m) {
          S += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', S += `<div style="font-weight:bold;color:#00d4ff;margin-bottom:4px">${I.name}</div>`, S += `<div style="color:#888;font-size:11px;margin-bottom:8px">${I.formulation}</div>`, S += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center">Status</td></tr>`;
          for (const F of I.results) {
            const O = F.reference !== 0 ? F.awatif / F.reference : 1, te = Math.abs(O - 1) < 0.05;
            te || (A = false);
            const se = te ? "#4caf50" : "#f44336", X = te ? "\u2705" : "\u274C";
            S += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${F.label}</td>
            <td style="text-align:right;color:#fff">${F.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${F.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${se};font-weight:bold">${O.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${F.refSource}</td>
            <td style="text-align:center">${X}</td></tr>`;
          }
          S += "</table></div>";
        }
        S += A ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">\u2705 ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">\u26A0 Some tests exceeded 5% tolerance</div>', y.innerHTML = S, document.body.appendChild(y);
      }
      (_h = ye.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (m) => {
        m.stopPropagation(), Hs();
      });
      let l = "";
      const s = ye.querySelector("#cad3d-io-menu"), c = ye.querySelector("#cad3d-io-file");
      function a(m, y) {
        e.nodes.val = m.nodes, e.elements.val = m.elements, e.nodeInputs.val = m.nodeInputs, e.elementInputs.val = m.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${y}: ${m.nodes.length} nodes, ${m.elements.length} elements`);
      }
      function r(m) {
        ue = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
        const y = /* @__PURE__ */ new Map();
        for (let X = 0; X < m.stories.length; X++) y.set(m.stories[X].name, X);
        for (let X = 0; X < m.elementTypes.length; X++) {
          const Z = m.elementTypes[X], K = m.elementStories[X], ae = y.get(K) ?? 0;
          qe.set(X, ae), Z === "COLUMN" || Z === "BRACE" ? ue.add(X) : Ce.add(X);
        }
        L = "edificio";
        const S = m.grids.filter((X) => X.dir === "X").sort((X, Z) => X.coord - Z.coord), A = m.grids.filter((X) => X.dir === "Y").sort((X, Z) => X.coord - Z.coord);
        let z, I, F, O;
        if (S.length > 0 || A.length > 0) z = S.map((X) => X.coord), I = A.map((X) => X.coord), F = S.map((X) => X.label), O = A.map((X) => X.label);
        else {
          const X = new Set(m.nodes.map((K) => K[0])), Z = new Set(m.nodes.map((K) => K[1]));
          z = [
            ...X
          ].sort((K, ae) => K - ae), I = [
            ...Z
          ].sort((K, ae) => K - ae), F = z.map((K, ae) => String(ae + 1)), O = I.map((K, ae) => String.fromCharCode(65 + ae));
        }
        const te = m.stories.length > 0 ? Math.max(...m.stories.map((X) => X.elev)) : Math.max(...m.nodes.map((X) => X[2]));
        Ne = z, Fe = I, Qe = te, setTimeout(() => {
          Et(), Oo(z, I, te, F, O), an(m.stories, z, I), yn(), $n();
        }, 100);
        const se = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const X of m.elementTypes) se[X]++;
        console.log(`E2K grids: X=[${F.join(",")}] Y=[${O.join(",")}]`), console.log(`E2K stories: ${m.stories.map((X) => `${X.name}@${X.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${se.COLUMN} columns, ${se.BEAM} beams, ${se.BRACE} braces`), Je();
      }
      function f(m, y) {
        const S = new Blob([
          m
        ], {
          type: "text/plain"
        }), A = URL.createObjectURL(S), z = document.createElement("a");
        z.href = A, z.download = y, z.click(), URL.revokeObjectURL(A);
      }
      s && s.addEventListener("change", () => {
        if (l = s.value, s.value = "", l.startsWith("import")) l === "import-e2k" ? c.accept = ".e2k,.E2K" : l === "import-py" ? c.accept = ".py" : l === "import-tcl" && (c.accept = ".tcl"), c.click();
        else if (l.startsWith("export")) {
          const m = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            l === "export-e2k" ? f(Da({
              ...m,
              title: "Awatif Model",
              e2kModel: st ?? void 0
            }), "model.e2k") : l === "export-py" ? f(Ga(m), "model_opensees.py") : l === "export-tcl" && f(Ja(m), "model_opensees.tcl");
          } catch (y) {
            alert("Export error: " + y.message);
          }
        }
      }), c && c.addEventListener("change", () => {
        var _a3;
        const m = (_a3 = c.files) == null ? void 0 : _a3[0];
        if (!m) return;
        const y = new FileReader();
        y.onload = () => {
          const S = y.result;
          try {
            if (l === "import-e2k") {
              const A = Ba(S);
              st = A, a(A, "E2K imported"), r(A);
            } else if (l === "import-py") {
              const A = Va(S);
              a(A, "OpenSeesPy imported");
            } else if (l === "import-tcl") {
              const A = Xa(S);
              a(A, "OpenSees Tcl imported");
            }
          } catch (A) {
            alert("Import error: " + A.message), console.error(A);
          }
        }, y.readAsText(m), c.value = "";
      });
      const d = ye.querySelector("#cad3d-force-unit");
      d && (d.value = x, d.addEventListener("change", (m) => {
        m.stopPropagation(), x = d.value, T = vo(x, _), L && Xe(L);
      }));
      const i = ye.querySelector("#cad3d-length-unit");
      i && (i.value = _, i.addEventListener("change", (m) => {
        m.stopPropagation(), _ = i.value, T = vo(x, _), L && Xe(L);
      })), ye.querySelectorAll("[data-preset]").forEach((m) => {
        m.addEventListener("click", (y) => {
          y.stopPropagation();
          const S = m.dataset.preset, A = H[S];
          A && (x = A.force, _ = A.length, V = A.stress, T = vo(x, _), d && (d.value = x), i && (i.value = _), ye.querySelectorAll("[data-preset]").forEach((z) => {
            z.classList.toggle("active", z.dataset.preset === S);
          }), L && Xe(L), console.log(`Preset: ${S} \u2192 ${x}+${_}, stress: ${V.label}`));
        });
      }), (_i = ye.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (m) => {
        m.stopPropagation(), ea();
      }), (_j = ye.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (m) => {
        m.stopPropagation(), ta();
      }), (_k = ye.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (m) => {
        m.stopPropagation(), na();
      }), (_l = ye.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (m) => {
        m.stopPropagation(), aa();
      }), (_m = ye.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (m) => {
        var _a3, _b2;
        m.stopPropagation(), ge = !ge, (_a3 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ge);
        const S = ye.querySelector("#cad3d-mode-prev"), A = ye.querySelector("#cad3d-mode-next"), z = ye.querySelector("#cad3d-mode-label"), I = ye.querySelector("#cad3d-modal-scale");
        if (ge) {
          const F = tt();
          ((_b2 = F == null ? void 0 : F.settings) == null ? void 0 : _b2.loads) && (Re = F.settings.loads.rawVal, F.settings.loads.val = false), mn(), S.style.display = "", A.style.display = "", z.style.display = "", I && (I.style.display = ""), b();
        } else bn(), S.style.display = "none", A.style.display = "none", z.style.display = "none", I && (I.style.display = "none"), L && L !== "placa-q4" && L !== "placa-3q" && $e(), setTimeout(() => {
          var _a4;
          const F = tt();
          ((_a4 = F == null ? void 0 : F.settings) == null ? void 0 : _a4.loads) && Re && (F.settings.loads.val = true);
        }, 600);
      });
      function b() {
        var _a3;
        const m = ye.querySelector("#cad3d-mode-label");
        if (!m || !(ee == null ? void 0 : ee.frequencies)) return;
        const y = ee.frequencies[ve], S = y > 0 ? 1 / y : 0, A = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let z = 0; z <= ve; z++) {
          const I = (_a3 = ee.massParticipation) == null ? void 0 : _a3[z];
          if (I) for (let F = 0; F < 6; F++) A[F] += I[F];
        }
        m.textContent = `Modo ${ve + 1} \u2014 ${y.toFixed(2)} Hz \u2014 T=${S.toFixed(3)}s \u2014 \u03A3Ux=${(A[0] * 100).toFixed(1)}% \u03A3Uy=${(A[1] * 100).toFixed(1)}% \u03A3Rz=${(A[5] * 100).toFixed(1)}%`;
      }
      (_n2 = ye.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (m) => {
        if (m.stopPropagation(), !(ee == null ? void 0 : ee.modeShapes)) return;
        ve = (ve - 1 + ee.modeShapes.length) % ee.modeShapes.length;
        const y = ee.modeShapes[ve], { extent: S } = so();
        let A = 0;
        for (let z = 0; z < oe.length; z++) {
          const I = y[z * 6] || 0, F = y[z * 6 + 1] || 0, O = y[z * 6 + 2] || 0;
          A = Math.max(A, Math.sqrt(I * I + F * F + O * O));
        }
        he = A > 1e-12 ? S * 0.05 / A : 1, _o(), b();
      }), (_o2 = ye.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (m) => {
        if (m.stopPropagation(), !(ee == null ? void 0 : ee.modeShapes)) return;
        ve = (ve + 1) % ee.modeShapes.length;
        const y = ee.modeShapes[ve], { extent: S } = so();
        let A = 0;
        for (let z = 0; z < oe.length; z++) {
          const I = y[z * 6] || 0, F = y[z * 6 + 1] || 0, O = y[z * 6 + 2] || 0;
          A = Math.max(A, Math.sqrt(I * I + F * F + O * O));
        }
        he = A > 1e-12 ? S * 0.05 / A : 1, _o(), b();
      });
      const $ = ye.querySelector("#cad3d-modal-scale");
      $ == null ? void 0 : $.addEventListener("mousedown", (m) => m.stopPropagation()), $ == null ? void 0 : $.addEventListener("change", () => {
        ge && (ee == null ? void 0 : ee.modeShapes) && _o();
      });
      const M = ye.querySelector("#cad3d-cli-toggle"), v = ye.querySelector("#cad3d-cli-panel"), p = ye.querySelector("#cad3d-cli-output"), h = ye.querySelector("#cad3d-cmd"), w = [];
      let E = -1;
      M == null ? void 0 : M.addEventListener("click", (m) => {
        if (m.stopPropagation(), v) {
          const y = v.style.display !== "none";
          v.style.display = y ? "none" : "block", y || (h == null ? void 0 : h.focus(), p && !p.textContent && (p.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), h == null ? void 0 : h.addEventListener("mousedown", (m) => m.stopPropagation()), document.addEventListener("keydown", (m) => {
        var _a3;
        if ((m.ctrlKey || m.metaKey) && m.key === "z" && !m.shiftKey) {
          m.preventDefault(), ps();
          return;
        }
        if ((m.ctrlKey || m.metaKey) && (m.key === "y" || m.key === "z" && m.shiftKey)) {
          m.preventDefault(), fs();
          return;
        }
        if ((m.key === "Delete" || m.key === "Backspace") && ct.size > 0) {
          m.preventDefault(), ct.forEach((y) => U.add(y)), ct.clear(), Kt && (Kt.remove(), Kt = null), $e();
          return;
        }
        if (m.key === "Escape") {
          if (Vt) if (dt !== null) {
            dt = null;
            const y = tt();
            zt && y && (y.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), Tt && y && (y.scene.remove(Tt), Tt.geometry.dispose(), Tt.material.dispose(), Tt = null), y == null ? void 0 : y.render();
          } else Go();
          Nt && Yo(), Dt && (Dt = false, bo(), (_a3 = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), h == null ? void 0 : h.addEventListener("keydown", (m) => {
        if (m.stopPropagation(), m.key === "Enter") {
          const y = h.value.trim();
          if (y) {
            w.unshift(y), E = -1, p && (p.textContent += `> ${y}
`);
            try {
              const S = new Function("cad", `return ${y}`)(je);
              if (S !== void 0 && p) {
                const A = typeof S == "object" ? JSON.stringify(S, null, 2) : String(S);
                p.textContent += `${A}
`;
              }
            } catch (S) {
              p && (p.textContent += `ERROR: ${S.message}
`);
            }
            p && (p.scrollTop = p.scrollHeight), h.value = "";
          }
        } else m.key === "ArrowUp" ? (m.preventDefault(), w.length > 0 && E < w.length - 1 && (E++, h.value = w[E])) : m.key === "ArrowDown" && (m.preventDefault(), E > 0 ? (E--, h.value = w[E]) : (E = -1, h.value = ""));
      });
      let k = false, P = 0, q = 0, g = 0, u = 0;
      ye.addEventListener("mousedown", (m) => {
        const y = m.target.tagName;
        if (y === "BUTTON" || y === "INPUT" || y === "SELECT") return;
        k = true;
        const S = ye.getBoundingClientRect();
        ye.style.bottom = "unset", P = m.clientX, q = m.clientY, g = S.left, u = S.top, m.preventDefault();
      }), window.addEventListener("mousemove", (m) => {
        k && (m.preventDefault(), ye.style.left = g + (m.clientX - P) + "px", ye.style.top = u + (m.clientY - q) + "px");
      }), window.addEventListener("mouseup", () => {
        k = false;
      }), Je();
    }, 10);
    function tt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function so() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ee(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, a = -1 / 0;
      for (const [d, i, b] of t) d < o && (o = d), d > s && (s = d), i < n && (n = i), i > c && (c = i), b < l && (l = b), b > a && (a = b);
      const r = new Ee((o + s) / 2, (n + c) / 2, (l + a) / 2), f = Math.max(s - o, c - n, a - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function Et(t = false) {
      const o = tt();
      if (!o) return;
      const { extent: n } = so();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const c = pa(), a = new ya(l, 20, c.grid, c.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some(($) => $ instanceof Jo))).forEach((b) => {
        b.traverse(($) => {
          $.geometry && $.geometry.dispose(), $.material && ($.material.map && $.material.map.dispose(), $.material.dispose());
        }), o.scene.remove(b);
      });
      const f = 0.05 * l, d = new Vo();
      d.name = "viewerAxes";
      const i = c.axisArrow;
      d.add(new Jo(new Ee(1, 0, 0), new Ee(), 1, i, 0.2, 0.2)), d.add(new Jo(new Ee(0, 1, 0), new Ee(), 1, i, 0.2, 0.2)), d.add(new Jo(new Ee(0, 0, 1), new Ee(), 1, i, 0.2, 0.2)), d.children.forEach((b) => b.scale.set(f, f, f));
      for (const [b, $, M] of [
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
        const v = document.createElement("canvas");
        v.width = 64, v.height = 64;
        const p = v.getContext("2d");
        p.fillStyle = $, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(b, 32, 34);
        const h = new Pn(v);
        h.needsUpdate = true;
        const w = new Xo(new Ko({
          map: h,
          depthTest: false,
          transparent: true
        }));
        w.position.set(M[0], M[1], M[2]), w.scale.set(0.4 * f, 0.4 * f, 1), w.renderOrder = 99, d.add(w);
      }
      o.scene.add(d), t ? o.render() : ao("3d");
    }
    function ds(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function ao(t) {
      var _a2;
      const o = tt();
      if (!o) return;
      const { center: n, extent: l } = so(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", d = r.isSprite, i = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || d || i) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + f * 0.5, n.y - f * 0.8, n.z + f * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -c * s, r.right = c * s, r.top = c, r.bottom = -c, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (d, i, b) => {
          r.position.copy(d), r.up.copy(b), o.controls.target.copy(i), r.lookAt(i), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], f(new Ee(n.x, n.y, n.z + l * 2), new Ee(n.x, n.y, n.z), new Ee(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const d = parseInt(t.split(":")[1]), i = ((_a2 = le.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * i, $ = i * 0.45;
          o.renderer.clippingPlanes = [
            new po(new Ee(0, 0, -1), b + $),
            new po(new Ee(0, 0, 1), -b + $)
          ], a(), f(new Ee(n.x, n.y, b + l * 2), new Ee(n.x, n.y, b), new Ee(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const d = parseInt(t.split(":")[1]), i = Ne[d] ?? n.x;
          if (Fe.length > 1) {
            const $ = ds(Ne, d, l);
            o.renderer.clippingPlanes = [
              new po(new Ee(-1, 0, 0), i + $),
              new po(new Ee(1, 0, 0), -i + $)
            ], a(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const d = parseInt(t.split(":")[1]), i = Fe[d] ?? n.y;
          if (Ne.length > 1) {
            const $ = ds(Fe, d, l);
            o.renderer.clippingPlanes = [
              new po(new Ee(0, -1, 0), i + $),
              new po(new Ee(0, 1, 0), -i + $)
            ], a(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function yn() {
      const t = ye.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ne.length < 2 && Fe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, a, r) => {
        const f = document.createElement("button");
        return f.textContent = c, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (d) => {
          var _a2;
          d.stopPropagation();
          const i = f.classList.contains("view-active");
          ye.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), i ? (ao("3d"), (_a2 = ye.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (ao(a), f.classList.add("view-active"));
        }), f;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ne.forEach((c, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Fe.forEach((c, a) => {
        const r = `${a + 1}`;
        t.appendChild(o(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function $n() {
      var _a2;
      const t = ye.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = le.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, c, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = c, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const d = r.classList.contains("view-active");
          ye.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), d ? (ao("3d"), (_a3 = ye.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (ao(c), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ds() {
      ao("3d"), ye.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    je.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, ao(t), ye.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Dt = false, Nt = false, Vt = false, Ft = "line", _t = [], dt = null, zt = null, Tt = null, Mo = null, Ht = null;
    const mt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, wn = 0.5;
    let Mn = [], Bt = null, mo = null;
    const So = [], jo = [], Ws = 50;
    function Eo() {
      So.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), So.length > Ws && So.shift(), jo.length = 0;
    }
    function ps() {
      if (So.length === 0) return;
      jo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = So.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, no(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function fs() {
      if (jo.length === 0) return;
      So.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = jo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, no(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ct = /* @__PURE__ */ new Set();
    let Rt = null, lo = [], Xt = null, Kt = null;
    function Sn(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const f = n[l[r]], d = n[l[(r + 1) % l.length]];
        s.push(f[0], f[1], f[2], d[0], d[1], d[2]);
      }
      const c = new Wt();
      c.setAttribute("position", new ho(s, 3));
      const a = new Lo(c, new Ao({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), lo.push(a), o.render();
    }
    function ro() {
      const t = tt();
      lo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), lo = [], t == null ? void 0 : t.render();
    }
    function io() {
      Kt && Kt.remove();
      const t = Y.size > 0 || j;
      if (ct.size === 0 && !t) {
        Kt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${ct.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Kt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        la([
          ...ct
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (ct.size === 1) {
          const n = [
            ...ct
          ][0];
          vs(n);
        } else {
          const n = [
            ...ct
          ], l = e.nodes.val, s = e.elements.val;
          let c = 0, a = 0, r = 0, f = 0;
          n.forEach((i) => {
            const b = s[i];
            if (b) if (b.length === 2) {
              const $ = l[b[0]], M = l[b[1]], v = Math.abs(M[0] - $[0]), p = Math.abs(M[1] - $[1]), h = Math.abs(M[2] - $[2]);
              h > v && h > p ? c++ : a++;
            } else b.length === 3 ? r++ : b.length === 4 && f++;
          });
          const d = [];
          c && d.push(`${c} columnas`), a && d.push(`${a} vigas`), f && d.push(`${f} shells Q4`), r && d.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ct.forEach((n) => Y.add(n)), ct.clear(), ro(), io(), $e();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        j = true, W.clear(), ct.forEach((n) => W.add(n)), ct.clear(), ro(), io(), $e();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        Y.clear(), j = false, W.clear(), io(), $e();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Eo(), ct.forEach((n) => U.add(n)), ct.clear(), ro(), io(), $e();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ct.clear(), ro(), io();
      });
    }
    function Yo() {
      var _a2;
      Nt = false, ct.clear(), ro(), Kt && (Kt.remove(), Kt = null), (_a2 = ye.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = tt();
      o && (o.controls.enabled = true);
    }
    function bo() {
      if (Rt) {
        const t = tt();
        t == null ? void 0 : t.scene.remove(Rt), Rt.geometry.dispose(), Rt.material.dispose(), Rt = null, t == null ? void 0 : t.render();
      }
      Xt && (Xt.remove(), Xt = null);
    }
    function js(t) {
      En();
      const o = tt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      mo = t;
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
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), f = new Wt();
        f.setAttribute("position", new ma(r, 3));
        const d = new To({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new Lo(f, d);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), Mn.push(i);
      }
      o.render();
    }
    function En() {
      const t = tt();
      for (const o of Mn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Mn = [], mo = null, Bt && (Bt.remove(), Bt = null);
    }
    function us(t, o, n, l) {
      Bt || (Bt = document.createElement("div"), Bt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Bt));
      const s = l.x - n.x, c = l.y - n.y, a = l.z - n.z, r = Math.sqrt(s * s + c * c + a * a), f = Math.abs(s), d = Math.abs(c), i = Math.abs(a);
      let b = "";
      f > d && f > i ? b = `\u0394X=${s.toFixed(2)}` : d > f && d > i ? b = `\u0394Y=${c.toFixed(2)}` : i > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Bt.textContent = `${r.toFixed(3)} m  ${b}`, Bt.style.left = t + 20 + "px", Bt.style.top = o - 10 + "px";
    }
    function Ys(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Ee(l[0], l[1], l[2]), c = t.clone(), a = c.clone().sub(s), r = 0.3, f = Math.abs(a.x), d = Math.abs(a.y), i = Math.abs(a.z);
      return d < r && i < r && f > 0.01 ? new Ee(c.x, s.y, s.z) : f < r && i < r && d > 0.01 ? new Ee(s.x, c.y, s.z) : f < r && d < r && i > 0.01 ? new Ee(s.x, s.y, c.z) : null;
    }
    function Go() {
      var _a2;
      const t = tt();
      zt && t && (t.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), Tt && t && (t.scene.remove(Tt), Tt.geometry.dispose(), Tt.material.dispose(), Tt = null), En(), dt = null, Ht = null, Vt = false, Mo && (Mo.remove(), Mo = null), (_a2 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Gs() {
      Mo && Mo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Ft === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Ft === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Ft === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Ft === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(mt.node)}">Node</button>
      <button id="ds-grid" style="${n(mt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(mt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(mt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${wn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Mo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = o(Ft === "line")), c && (c.style.cssText = o(Ft === "arc")), a && (a.style.cssText = o(Ft === "node")), r && (r.style.cssText = o(Ft === "area"));
        const f = t.querySelector("#ds-node"), d = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        f && (f.style.cssText = n(mt.node)), d && (d.style.cssText = n(mt.grid)), i && (i.style.cssText = n(mt.midpoint)), b && (b.style.cssText = n(mt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Ft = "line", dt = null, Ht = null, _t = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Ft = "arc", dt = null, Ht = null, _t = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Ft = "node", dt = null, Ht = null, _t = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Ft = "area", dt = null, Ht = null, _t = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        mt.node = !mt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        mt.grid = !mt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        mt.midpoint = !mt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        mt.track = !mt.track, mt.track || En(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        mt.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => ps()), t.querySelector("#dt-redo").addEventListener("click", () => fs());
    }
    function ms(t, o, n, l) {
      const s = l.getBoundingClientRect(), c = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, r = new zs();
      r.setFromCamera(new Ts(c, a), n);
      const f = e.nodes.val, d = e.elements.val, i = 0.12;
      if (mt.node) {
        let M = -1, v = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const h = f[p], w = new Ee(h[0], h[1], h[2]).project(n), E = Math.sqrt((w.x - c) ** 2 + (w.y - a) ** 2);
          E < i && E < v && (v = E, M = p);
        }
        if (M >= 0) return {
          nodeIdx: M,
          worldPos: new Ee(...f[M]),
          snapType: "node"
        };
      }
      if (mt.midpoint) {
        let M = 1 / 0, v = null;
        for (const p of d) {
          if (p.length !== 2) continue;
          const h = f[p[0]], w = f[p[1]], E = new Ee((h[0] + w[0]) / 2, (h[1] + w[1]) / 2, (h[2] + w[2]) / 2), k = E.clone().project(n), P = Math.sqrt((k.x - c) ** 2 + (k.y - a) ** 2);
          P < i * 0.8 && P < M && (M = P, v = E);
        }
        if (v) return {
          nodeIdx: null,
          worldPos: v,
          snapType: "mid"
        };
      }
      if (mt.grid) {
        const M = new po(new Ee(0, 0, 1), 0), v = new Ee();
        if (r.ray.intersectPlane(M, v)) {
          const p = mt.gridSize || wn;
          return v.x = Math.round(v.x / p) * p, v.y = Math.round(v.y / p) * p, v.z = Math.round(v.z / p) * p, {
            nodeIdx: null,
            worldPos: v,
            snapType: "grid"
          };
        }
      }
      const b = new po(new Ee(0, 0, 1), 0), $ = new Ee();
      return r.ray.intersectPlane(b, $), {
        nodeIdx: null,
        worldPos: $,
        snapType: "free"
      };
    }
    function bs(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val;
      if (Tt && (o.scene.remove(Tt), Tt.geometry.dispose(), Tt.material.dispose(), Tt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new ba(s * 2, s * 2, s * 2) : new ha(s, 12, 12), a = new ga({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Tt = new xa(c, a), Tt.position.copy(t.worldPos), Tt.renderOrder = 9999, o.scene.add(Tt);
      }
      if (zt && (o.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), dt !== null && t.worldPos) {
        const l = n[dt], s = new Wt();
        if (Ft === "arc" && Ht !== null) {
          const a = n[Ht], r = hs(new Ee(l[0], l[1], l[2]), new Ee(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let d = 0; d < r.length - 1; d++) f.push(r[d].x, r[d].y, r[d].z, r[d + 1].x, r[d + 1].y, r[d + 1].z);
          s.setAttribute("position", new ho(f, 3));
        } else s.setAttribute("position", new ho([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new Ao({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        zt = new go(s, c), Ft === "arc" && Ht !== null && (zt = new Lo(s, c)), zt.renderOrder = 9999, o.scene.add(zt);
      }
      o.render();
    }
    function hs(t, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const a = c / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), d = 2 * (1 - a) * a, i = a * a;
        s.push(new Ee(f * t.x + d * r.x + i * n.x, f * t.y + d * r.y + i * n.y, f * t.z + d * r.z + i * n.z));
      }
      return s;
    }
    function In(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      Eo();
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
    function Js(t) {
      var _a2;
      if (Ft === "node") {
        if (!t.worldPos) return;
        Eo();
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
      if (Ft === "line") {
        const o = In(t);
        if (o < 0) return;
        if (dt === null) {
          dt = o;
          return;
        }
        if (o === dt) return;
        Eo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === dt && s[1] === o || s[1] === dt && s[0] === o)) || (n.push([
          dt,
          o
        ]), e.elements.val = n, no(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), dt = o;
        return;
      }
      if (Ft === "arc") {
        const o = In(t);
        if (o < 0) return;
        if (dt === null) {
          dt = o;
          return;
        }
        if (Ht === null) {
          if (o === dt) return;
          Ht = o;
          return;
        }
        if (o === dt || o === Ht) return;
        const n = e.nodes.val, l = new Ee(...n[dt]), s = new Ee(...n[Ht]), c = new Ee(...n[o]), a = Math.max(4, Math.round(((_a2 = le.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = hs(l, s, c, a);
        Eo();
        const f = [
          ...e.nodes.val
        ], d = [
          ...e.elements.val
        ];
        let i = dt;
        for (let b = 1; b < r.length; b++) {
          let $;
          if (b === r.length - 1) $ = o;
          else {
            const M = r[b];
            $ = f.length, f.push([
              M.x,
              M.y,
              M.z
            ]);
          }
          d.push([
            i,
            $
          ]), i = $;
        }
        e.nodes.val = f, e.elements.val = d, no(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, dt = o, Ht = null;
        return;
      }
      if (Ft === "area") {
        const o = In(t);
        if (o < 0) return;
        if (_t.length >= 3 && o === _t[0]) {
          Eo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = _t.map((c) => n[c]);
          try {
            const c = to({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: wn || 0.5
            }), a = [];
            for (const r of c.nodes) {
              let f = -1;
              for (let d = 0; d < n.length; d++) {
                const i = Math.abs(n[d][0] - r[0]), b = Math.abs(n[d][1] - r[1]), $ = Math.abs(n[d][2] - r[2]);
                if (i < 0.01 && b < 0.01 && $ < 0.01) {
                  f = d;
                  break;
                }
              }
              f >= 0 ? a.push(f) : (a.push(n.length), n.push([
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
            e.nodes.val = n, e.elements.val = l, no(), console.log(`Area: ${c.elements.length} triangulos creados desde ${_t.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          _t = [];
          return;
        }
        if (_t.push(o), console.log(`Area vertex ${_t.length}: node ${o}`), _t.length >= 2) {
          const n = _t[_t.length - 2], l = e.nodes.val, s = tt();
          if (s) {
            const c = new Wt().setFromPoints([
              new Ee(...l[n]),
              new Ee(...l[o])
            ]), a = new Lo(c, new Ao({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function gs(t) {
      const o = tt();
      if (!o) return;
      Rt && (o.scene.remove(Rt), Rt.geometry.dispose(), Rt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const r = n[l[a]], f = n[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const c = new Wt();
      c.setAttribute("position", new ho(s, 3)), Rt = new Lo(c, new Ao({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Rt.renderOrder = 9999, o.scene.add(Rt), o.render();
    }
    function kn(t) {
      const o = tt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new Ts((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new zs();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, a = e.elements.val;
      if (c.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const d = s.ray;
      for (let b = 0; b < a.length; b++) {
        const $ = a[b];
        if ($.length === 2) {
          const M = new Ee(...c[$[0]]), v = new Ee(...c[$[1]]), p = new va(M, v), h = new Ee(), w = new Ee();
          d.closestPointToPoint(p.getCenter(new Ee()), h), p.closestPointToPoint(h, true, w);
          const E = h.distanceTo(w);
          E < r && (r = E, f = b);
        } else if ($.length === 3) {
          const M = new Ee(...c[$[0]]), v = new Ee(...c[$[1]]), p = new Ee(...c[$[2]]), h = new Ee();
          if (d.intersectTriangle(M, v, p, false, h)) {
            const E = d.origin.distanceTo(h);
            E < r && (r = E, f = b);
          } else {
            const E = M.add(v).add(p).divideScalar(3), k = new Ee();
            d.closestPointToPoint(E, k);
            const P = k.distanceTo(E);
            P < r && (r = P, f = b);
          }
        } else if ($.length === 4) {
          const M = new Ee(...c[$[0]]), v = new Ee(...c[$[1]]), p = new Ee(...c[$[2]]), h = new Ee(...c[$[3]]), w = new Ee();
          let E = d.intersectTriangle(M, v, p, false, w);
          if (E) {
            const k = d.origin.distanceTo(w);
            k < r && (r = k, f = b);
          }
          if (E = d.intersectTriangle(M, p, h, false, w), E) {
            const k = d.origin.distanceTo(w);
            k < r && (r = k, f = b);
          }
        }
      }
      const { extent: i } = so();
      return r < i * 0.1 ? f : -1;
    }
    function ce(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function zn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let c = "<table>";
      if (o) {
        c += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) c += `<td class="header">${o[a] || a}</td>`;
        c += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        c += "<tr>", o && (c += `<td class="header">${o[a] || a}</td>`);
        for (let r = 0; r < s; r++) {
          const f = t[a][r], d = Math.abs(f) > 1e-10 ? "nonzero" : "";
          c += `<td class="${d}">${ce(f, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function ze(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function N(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Vs(t, o, n, l, s, c, a) {
      const r = `${ze(N("E") + "\xB7" + N("A"), N("L"))}`, f = `${ze("12\xB7" + N("E") + "\xB7" + N("I", "z"), N("L") + "\xB3")}`, d = `${ze("12\xB7" + N("E") + "\xB7" + N("I", "y"), N("L") + "\xB3")}`, i = `${ze(N("G") + "\xB7" + N("J"), N("L"))}`, b = `${ze("4\xB7" + N("E") + "\xB7" + N("I", "y"), N("L"))}`, $ = `${ze("4\xB7" + N("E") + "\xB7" + N("I", "z"), N("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${r} = ${ze(ce(t) + "\xB7" + ce(o), ce(a))} = <span class="highlight">${ce(t * o / a)}</span></div>
      <div>${f} = ${ze("12\xB7" + ce(t) + "\xB7" + ce(n), ce(a) + "\xB3")} = <span class="highlight">${ce(12 * t * n / a ** 3)}</span></div>
      <div>${d} = ${ze("12\xB7" + ce(t) + "\xB7" + ce(l), ce(a) + "\xB3")} = <span class="highlight">${ce(12 * t * l / a ** 3)}</span></div>
      <div>${i} = ${ze(ce(s) + "\xB7" + ce(c), ce(a))} = <span class="highlight">${ce(s * c / a)}</span></div>
      <div>${b} = ${ze("4\xB7" + ce(t) + "\xB7" + ce(l), ce(a))} = <span class="highlight">${ce(4 * t * l / a)}</span></div>
      <div>${$} = ${ze("4\xB7" + ce(t) + "\xB7" + ce(n), ce(a))} = <span class="highlight">${ce(4 * t * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${N("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ze(N("EA"), N("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ze("\u2212" + N("EA"), N("L"))}</span>
        <span class="cell">0</span><span class="cell">${ze("12" + N("EI", "z"), N("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ze("\u2212" + N("EA"), N("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ze(N("EA"), N("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Xs(t) {
      if (t.length === 2) {
        const n = oo(t[1], t[0]), l = yo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${N("l")} = cos(\u03B1) = ${ze("\u0394x", N("L"))} = ${ze(ce(n[0]), ce(l))} = <span class="highlight">${ce(s)}</span></div>
        <div>${N("m")} = cos(\u03B2) = ${ze("\u0394y", N("L"))} = ${ze(ce(n[1]), ce(l))} = <span class="highlight">${ce(c)}</span></div>
        <div>${N("n")} = cos(\u03B3) = ${ze("\u0394z", N("L"))} = ${ze(ce(n[2]), ce(l))} = <span class="highlight">${ce(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${N("l")}</span><span class="cell">${N("m")}</span><span class="cell">${N("n")}</span>
          <span class="cell">${ze("\u2212" + N("m"), N("D"))}</span><span class="cell">${ze(N("l"), N("D"))}</span><span class="cell">0</span>
          <span class="cell">${ze("\u2212" + N("l") + "\xB7" + N("n"), N("D"))}</span><span class="cell">${ze("\u2212" + N("m") + "\xB7" + N("n"), N("D"))}</span><span class="cell">${N("D")}</span>
        </span>
        &nbsp; donde ${N("D")} = \u221A(${N("l")}\xB2 + ${N("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${N("T")} = ${N("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${N("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Ks() {
      return `<div class="fem-eq">
      ${N("K", "global")} = ${N("T")}<sup>T</sup> \xB7 ${N("k", "local")} \xB7 ${N("T")}
    </div>`;
    }
    function Us(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${N("K", "global")}[${N("i")}, ${N("j")}] += ${N("K", "elem")}[${N("i")}, ${N("j")}]</div>
      <div style="margin-top:4px">donde ${N("i")}, ${N("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Zs(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${N("u", "local")} = ${N("T")} \xB7 ${N("u", "global")}</div>
        <div>${N("f", "local")} = ${N("k", "local")} \xB7 ${N("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${N("f")} = [${N("N", "i")}, ${N("V", "y,i")}, ${N("V", "z,i")}, ${N("M", "x,i")}, ${N("M", "y,i")}, ${N("M", "z,i")}, ${N("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${ze("1", "2" + N("A"))} \xB7 ${N("D")} \xB7 ${N("B")} \xB7 ${N("u")}</div>
      <div>${N("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${N("t")} &nbsp;&nbsp; ${N("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ze(N("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Tn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let c = 0; c < n; c++) {
          const a = t[s][c], r = (s === c ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${ce(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function xs() {
      const t = "0", o = ze(N("EA"), N("L")), n = ze("\u2212" + N("EA"), N("L")), l = ze("12" + N("EI", "z"), N("L") + "\xB3"), s = ze("\u221212" + N("EI", "z"), N("L") + "\xB3"), c = ze("12" + N("EI", "y"), N("L") + "\xB3"), a = ze("\u221212" + N("EI", "y"), N("L") + "\xB3"), r = ze("6" + N("EI", "z"), N("L") + "\xB2"), f = ze("\u22126" + N("EI", "z"), N("L") + "\xB2"), d = ze("6" + N("EI", "y"), N("L") + "\xB2"), i = ze("\u22126" + N("EI", "y"), N("L") + "\xB2"), b = ze(N("GJ"), N("L")), $ = ze("\u2212" + N("GJ"), N("L")), M = ze("4" + N("EI", "z"), N("L")), v = ze("2" + N("EI", "z"), N("L")), p = ze("4" + N("EI", "y"), N("L")), h = ze("2" + N("EI", "y"), N("L")), w = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', E = [
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
      ], k = [
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
          i,
          t,
          t,
          t,
          a,
          t,
          i,
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
          $,
          t,
          t
        ],
        [
          t,
          t,
          i,
          t,
          p,
          t,
          t,
          t,
          d,
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
          M,
          t,
          f,
          t,
          t,
          t,
          v
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
          d,
          t,
          t,
          t,
          c,
          t,
          d,
          t
        ],
        [
          t,
          t,
          t,
          $,
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
          i,
          t,
          h,
          t,
          t,
          t,
          d,
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
          v,
          t,
          f,
          t,
          t,
          t,
          M
        ]
      ];
      let q = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      q += '<table><tr><td class="hdr"></td>';
      for (const g of k) q += `<td class="hdr">${g}</td>`;
      q += "</tr>";
      for (let g = 0; g < 12; g++) {
        q += `<tr><td class="hdr">${E[g]}</td>`;
        for (let u = 0; u < 12; u++) if (u < g) q += `<td style="color:var(--fem-border-cell)">${u === 0 && g > 0 ? w : ""}</td>`;
        else {
          const m = P[g][u], y = (g === u ? "diag " : "") + (m !== "0" ? "nz" : "");
          q += `<td class="${y}">${m}</td>`;
        }
        q += "</tr>";
      }
      return q += "</table>", q;
    }
    function Qs(t, o, n, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${ze(N("E") + "\xB7" + N("A"), N("L"))}`,
          calc: `${ze(ce(t) + "\xD7" + ce(o), ce(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${ze("12\xB7" + N("E") + "\xB7" + N("I", "z"), N("L") + "\xB3")}`,
          calc: `${ze("12\xD7" + ce(t) + "\xD7" + ce(n), ce(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${ze("6\xB7" + N("E") + "\xB7" + N("I", "z"), N("L") + "\xB2")}`,
          calc: `${ze("6\xD7" + ce(t) + "\xD7" + ce(n), ce(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ze("12\xB7" + N("E") + "\xB7" + N("I", "y"), N("L") + "\xB3")}`,
          calc: `${ze("12\xD7" + ce(t) + "\xD7" + ce(l), ce(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${ze("6\xB7" + N("E") + "\xB7" + N("I", "y"), N("L") + "\xB2")}`,
          calc: `${ze("6\xD7" + ce(t) + "\xD7" + ce(l), ce(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ze(N("G") + "\xB7" + N("J"), N("L"))}`,
          calc: `${ze(ce(s) + "\xD7" + ce(c), ce(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${ze("4\xB7" + N("E") + "\xB7" + N("I", "z"), N("L"))}`,
          calc: `${ze("4\xD7" + ce(t) + "\xD7" + ce(n), ce(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ze("2\xB7" + N("E") + "\xB7" + N("I", "z"), N("L"))}`,
          calc: `${ze("2\xD7" + ce(t) + "\xD7" + ce(n), ce(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ze("4\xB7" + N("E") + "\xB7" + N("I", "y"), N("L"))}`,
          calc: `${ze("4\xD7" + ce(t) + "\xD7" + ce(l), ce(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ze("2\xB7" + N("E") + "\xB7" + N("I", "y"), N("L"))}`,
          calc: `${ze("2\xD7" + ce(t) + "\xD7" + ce(l), ce(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${ce(f.val)}</span></div>`).join("")}</div>`;
    }
    function Ln(t, o, n, l) {
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
    `, document.body.appendChild(c), (_a2 = c.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => c.remove()), c.addEventListener("click", (a) => {
        a.target === c && c.remove();
      });
    }
    function vs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Xt && Xt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((g) => o[g]), c = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const g = yo(oo(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, m = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, y = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, S = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, A = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, z = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${ce(g)}${ce(u)}${ce(m)}${ce(y)}${ce(S)}${ce(A)}${ce(z)}`;
      } else {
        const g = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, u = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, m = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${ce(g)}${ce(u)}${ce(m)}`;
      }
      let d = "", i = "", b = "", $ = "", M = "", v = "", p = "", h = "", w = null, E = null, k = null, P = [];
      try {
        if (w = on(s, a, t), E = nn(s), k = jt(_n(E), jt(w, E)), P = c ? [
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
          const y = yo(oo(s[1], s[0])), S = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, A = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, z = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, I = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, F = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, O = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          $ = Vs(S, A, z, I, F, O, y);
        }
        M = Xs(s), v = Ks(), p = Us(l), h = Zs(c);
        const g = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', m = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${w.length}\xD7${w.length}) ${g}</div>${zn(w, P)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${E.length}\xD7${E.length}) ${u}</div>${zn(E, P)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${m}</div>${zn(k, P)}`;
      } catch (g) {
        d = `<div style="color:red">Error: ${g.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
        const g = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, m) => {
          var _a3;
          const y = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], S = g.map((A, z) => `<span class="prop-key">${A}</span>: <span class="${Math.abs(y[z]) > 1e-10 ? "result-val" : ""}">${ce(y[z])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${S}</div>`;
        }).join("");
      }
      if (f && c && (r == null ? void 0 : r.deformations) && w && E) {
        const g = (_s2 = f.normals) == null ? void 0 : _s2.get(t), u = (_t2 = f.shearsY) == null ? void 0 : _t2.get(t), m = (_u = f.shearsZ) == null ? void 0 : _u.get(t), y = (_v = f.torsions) == null ? void 0 : _v.get(t), S = (_w = f.bendingsY) == null ? void 0 : _w.get(t), A = (_x = f.bendingsZ) == null ? void 0 : _x.get(t), z = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], I = [];
        for (const Z of l) {
          const K = ((_y = r.deformations) == null ? void 0 : _y.get(Z)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          I.push(...K);
        }
        let F = [];
        try {
          F = jt(E, I);
        } catch {
          F = new Array(12).fill(0);
        }
        let O = [];
        try {
          O = jt(w, F);
        } catch {
          O = new Array(12).fill(0);
        }
        const te = (Z, K) => Z.map((ae, we) => `<span style="color:${Math.abs(ae) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[we % 6]}=${ce(ae)}</span>`).join(", "), X = [
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
        ].map((Z, K) => `${Z}${K < 6 ? "\u1D62" : "\u2C7C"}`);
        `${N("u", "global")}${l.map((Z, K) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${z.map((ae, we) => `<span style="color:${Math.abs(I[K * 6 + we]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${ce(I[K * 6 + we])}</span>`).join(", ")}`).join(" | ")}${N("u", "local")}${N("T")}${N("u", "global")}${N("u", "local")}${te(F, [
          ...z,
          ...z
        ])}${N("f", "local")}${N("k", "local")}${N("u", "local")}${N("f", "local")}${O.map((Z, K) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${X[K]}=${ce(Z)}</span>`).join(", ")}${N("P", "1")}${N("N", "i")}${ce(O[0])}${N("P", "7")}${N("N", "j")}${ce(O[6])}${N("P", "2")}${N("V", "y,i")}${ce(O[1])}${N("P", "8")}${N("V", "y,j")}${ce(O[7])}${N("P", "3")}${N("V", "z,i")}${ce(O[2])}${N("P", "9")}${N("V", "z,j")}${ce(O[8])}${N("P", "4")}${N("M", "x,i")}${ce(O[3])}${N("P", "10")}${N("M", "x,j")}${ce(O[9])}${N("P", "5")}${N("M", "y,i")}${ce(O[4])}${N("P", "11")}${N("M", "y,j")}${ce(O[10])}${N("P", "6")}${N("M", "z,i")}${ce(O[5])}${N("P", "12")}${N("M", "z,j")}${ce(O[11])}${g ? g.map((Z) => ce(Z)).join(", ") : "\u2014"}${u ? u.map((Z) => ce(Z)).join(", ") : "\u2014"}${m ? m.map((Z) => ce(Z)).join(", ") : "\u2014"}${y ? y.map((Z) => ce(Z)).join(", ") : "\u2014"}${S ? S.map((Z) => ce(Z)).join(", ") : "\u2014"}${A ? A.map((Z) => ce(Z)).join(", ") : "\u2014"}`;
      } else if (f && c) {
        const g = (_z = f.normals) == null ? void 0 : _z.get(t), u = (_A = f.shearsY) == null ? void 0 : _A.get(t), m = (_B = f.shearsZ) == null ? void 0 : _B.get(t), y = (_C = f.torsions) == null ? void 0 : _C.get(t), S = (_D = f.bendingsY) == null ? void 0 : _D.get(t), A = (_E = f.bendingsZ) == null ? void 0 : _E.get(t);
        `${g ? g.map((z) => ce(z)).join(", ") : "\u2014"}${u ? u.map((z) => ce(z)).join(", ") : "\u2014"}${m ? m.map((z) => ce(z)).join(", ") : "\u2014"}${y ? y.map((z) => ce(z)).join(", ") : "\u2014"}${S ? S.map((z) => ce(z)).join(", ") : "\u2014"}${A ? A.map((z) => ce(z)).join(", ") : "\u2014"}`;
      } else if (f && !c) {
        const g = (_F = f.bendingXX) == null ? void 0 : _F.get(t), u = (_G = f.bendingYY) == null ? void 0 : _G.get(t), m = (_H = f.bendingXY) == null ? void 0 : _H.get(t), y = (_I = f.membraneXX) == null ? void 0 : _I.get(t), S = (_J = f.membraneYY) == null ? void 0 : _J.get(t), A = (_K = f.membraneXY) == null ? void 0 : _K.get(t);
        `${g ? g.map((z) => ce(z)).join(", ") : "\u2014"}${u ? u.map((z) => ce(z)).join(", ") : "\u2014"}${m ? m.map((z) => ce(z)).join(", ") : "\u2014"}${y ? y.map((z) => ce(z)).join(", ") : "\u2014"}${S ? S.map((z) => ce(z)).join(", ") : "\u2014"}${A ? A.map((z) => ce(z)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Xt = Fa(t, o, n, a, r, f), Xt.id = "fem-inspect-panel", document.body.appendChild(Xt), (_L = Xt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => bo());
      const q = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const g = yo(oo(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, m = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, y = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, S = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, A = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, z = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Qs(u, m, y, S, A, z, g);
      })() : void 0;
      Xt.querySelectorAll("[data-full]").forEach((g) => {
        g.addEventListener("click", (u) => {
          u.stopPropagation();
          const m = g.dataset.full;
          if (m === "kLocal" && w) {
            const y = c ? xs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Ln(`Elemento ${t} \u2014 Rigidez Local k_local`, y, Tn(w, P), q);
          } else if (m === "T" && E) Ln(`Elemento ${t} \u2014 Transformaci\xF3n T`, M, Tn(E, P));
          else if (m === "kGlobal" && k) {
            const y = c ? xs() : "<em>Shell 18\xD718</em>";
            Ln(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, y, Tn(k, P), q);
          }
        });
      });
    }
    function ys() {
      const l = [], s = [];
      for (let v = 0; v <= 8; v++) {
        const p = v / 8, h = 30 * p, E = 12 * (1 - p) * (1 - p * 0.3) / 2, k = l.length;
        if (l.push([
          -E,
          -E,
          h
        ]), l.push([
          E,
          -E,
          h
        ]), l.push([
          E,
          E,
          h
        ]), l.push([
          -E,
          E,
          h
        ]), s.push([
          k,
          k + 1
        ]), s.push([
          k + 1,
          k + 2
        ]), s.push([
          k + 2,
          k + 3
        ]), s.push([
          k + 3,
          k
        ]), v > 0 && v < 8 && (s.push([
          k,
          k + 2
        ]), s.push([
          k + 1,
          k + 3
        ])), v > 0) {
          const P = k - 4;
          for (let q = 0; q < 4; q++) s.push([
            P + q,
            k + q
          ]);
          s.push([
            P,
            k + 1
          ]), s.push([
            P + 1,
            k + 2
          ]), s.push([
            P + 2,
            k + 3
          ]), s.push([
            P + 3,
            k
          ]);
        }
      }
      const c = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) c.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) r.set(a + v, [
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
      const f = 2e8, d = 77e6, i = 5e-3, b = 2e-6, $ = 1e-6, M = {
        elasticities: new Map(s.map((v, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((v, p) => [
          p,
          d
        ])),
        areas: new Map(s.map((v, p) => [
          p,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((v, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((v, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map((v, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const v = Pt(l, s, {
          supports: c,
          loads: r
        }, M);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Eiffel deform:", v.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function $s() {
      const l = [], s = [];
      for (let M = 0; M <= 20; M++) {
        const v = M / 20, p = 20 * v, h = 20 * (1 - Math.pow(2 * v - 1, 2)), w = 2;
        l.push([
          p,
          -2 / 2,
          h
        ]), l.push([
          p,
          w / 2,
          h
        ]);
      }
      for (let M = 0; M < 20; M++) s.push([
        M * 2,
        (M + 1) * 2
      ]), s.push([
        M * 2 + 1,
        (M + 1) * 2 + 1
      ]), s.push([
        M * 2,
        M * 2 + 1
      ]), s.push([
        M * 2,
        (M + 1) * 2 + 1
      ]), s.push([
        M * 2 + 1,
        (M + 1) * 2
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
      for (let M = 0; M <= 20; M++) a.set(M * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), a.set(M * 2 + 1, [
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
      const r = 2e8, f = 77e6, d = 0.01, i = 5e-6, b = 2e-6, $ = {
        elasticities: new Map(s.map((M, v) => [
          v,
          r
        ])),
        shearModuli: new Map(s.map((M, v) => [
          v,
          f
        ])),
        areas: new Map(s.map((M, v) => [
          v,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((M, v) => [
          v,
          i
        ])),
        momentsOfInertiaY: new Map(s.map((M, v) => [
          v,
          i
        ])),
        torsionalConstants: new Map(s.map((M, v) => [
          v,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const M = Pt(l, s, {
          supports: c,
          loads: a
        }, $);
        M && e.deformOutputs && (e.deformOutputs.val = M);
      } catch (M) {
        console.warn("Arco:", M.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ws() {
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
      ], d = [];
      for (const p of f) {
        const h = 60 * p / 16, w = c.length;
        c.push([
          h,
          -6 / 2,
          0
        ]);
        const E = c.length;
        c.push([
          h,
          6 / 2,
          0
        ]);
        const k = c.length;
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
        ]), d.push(k, P), a.push([
          w,
          p * 2
        ]), a.push([
          p * 2,
          k
        ]), a.push([
          E,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          P
        ]), a.push([
          k,
          P
        ]);
      }
      for (const p of d) {
        const h = c[p][0];
        for (let w = 0; w <= 16; w++) {
          const E = 60 * w / 16;
          if (Math.abs(E - h) > 60 * 0.05 && Math.abs(E - h) < 60 * 0.45) {
            const k = c[p][1] < 0 ? w * 2 : w * 2 + 1;
            w % 2 === 0 && a.push([
              p,
              k
            ]);
          }
        }
      }
      const i = /* @__PURE__ */ new Map();
      i.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), i.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), i.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), i.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let p = r; p < r + f.length * 4; p += 4) i.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(p + 1, [
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
        supports: i,
        loads: b
      });
      const $ = 2e8, M = 77e6, v = {
        elasticities: new Map(a.map((p, h) => [
          h,
          $
        ])),
        shearModuli: new Map(a.map((p, h) => [
          h,
          M
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
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const p = Pt(c, a, {
          supports: i,
          loads: b
        }, v);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Puente atirantado: ${c.length} nodos, ${a.length} elem, span=60m`);
    }
    function Ms() {
      const c = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const w = h * 3.5, E = h * 5 * Math.PI / 180;
        for (let k = 0; k < 6; k++) {
          const P = E + 2 * Math.PI * k / 6, q = 5 * Math.cos(P), g = 5 * Math.sin(P);
          c.push([
            q,
            g,
            w
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const w = h * 6;
        for (let E = 0; E < 6; E++) a.push([
          w + E,
          w + (E + 1) % 6
        ]);
        if (h < 12) {
          const E = (h + 1) * 6;
          for (let k = 0; k < 6; k++) a.push([
            w + k,
            E + k
          ]), a.push([
            w + k,
            E + (k + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const w = c.length;
        c.push([
          0,
          0,
          h * 3.5
        ]);
        const E = h * 6;
        for (let k = 0; k < 6; k++) a.push([
          w,
          E + k
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
      const d = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const w = 10 * h / 12, E = h * 6;
        for (let k = 0; k < 6; k++) d.set(E + k, [
          w,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: d
      });
      const i = 2e8, b = 77e6, $ = 8e-3, M = 1e-5, v = 5e-6, p = {
        elasticities: new Map(a.map((h, w) => [
          w,
          i
        ])),
        shearModuli: new Map(a.map((h, w) => [
          w,
          b
        ])),
        areas: new Map(a.map((h, w) => [
          w,
          $
        ])),
        momentsOfInertiaZ: new Map(a.map((h, w) => [
          w,
          M
        ])),
        momentsOfInertiaY: new Map(a.map((h, w) => [
          w,
          M
        ])),
        torsionalConstants: new Map(a.map((h, w) => [
          w,
          v
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const h = Pt(c, a, {
          supports: f,
          loads: d
        }, p);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Torre Twist: ${c.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ss() {
      const s = [], c = [];
      for (let p = 0; p <= 20; p++) {
        const h = p / 20, w = p * 3;
        let E = 8 * (1 - h * 0.7);
        h > 0.4 && (E *= 0.85), h > 0.7 && (E *= 0.7);
        const k = s.length;
        s.push([
          0,
          0,
          w
        ]);
        for (let P = 0; P < 3; P++) {
          const q = P * 2 * Math.PI / 3 - Math.PI / 2, g = E * Math.cos(q), u = E * Math.sin(q), m = s.length;
          s.push([
            g,
            u,
            w
          ]), c.push([
            k,
            m
          ]);
          const y = s.length;
          s.push([
            g * 0.5,
            u * 0.5,
            w
          ]), c.push([
            k,
            y
          ]), c.push([
            y,
            m
          ]);
        }
        for (let P = 0; P < 3; P++) {
          const q = k + 1 + P * 2, g = k + 1 + (P + 1) % 3 * 2;
          c.push([
            q,
            g
          ]);
        }
        if (p < 20) {
          const q = k + 7;
          c.push([
            k,
            q
          ]);
          for (let g = 0; g < 3; g++) c.push([
            k + 1 + g * 2,
            q + 1 + g * 2
          ]), c.push([
            k + 2 + g * 2,
            q + 2 + g * 2
          ]), c.push([
            k + 1 + g * 2,
            q + 2 + g * 2
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
        const h = p * r, w = 5 * p / 20;
        f.set(h, [
          w,
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
      const d = 35e6, i = 14e6, b = 0.02, $ = 5e-5, M = 2e-5, v = {
        elasticities: new Map(c.map((p, h) => [
          h,
          d
        ])),
        shearModuli: new Map(c.map((p, h) => [
          h,
          i
        ])),
        areas: new Map(c.map((p, h) => [
          h,
          b
        ])),
        momentsOfInertiaZ: new Map(c.map((p, h) => [
          h,
          $
        ])),
        momentsOfInertiaY: new Map(c.map((p, h) => [
          h,
          $
        ])),
        torsionalConstants: new Map(c.map((p, h) => [
          h,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const p = Pt(s, c, {
          supports: a,
          loads: f
        }, v);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Es() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const $ = b * 12, M = 15 - b * 2, v = 20 - b * 3, p = 8 - b, h = t.length;
        for (let E = 0; E <= 4; E++) {
          const k = E / 4, P = -p / 2 + p * k, q = v * (1 - k * k * 0.3);
          for (let g = 0; g <= 12; g++) {
            const u = g / 12, m = $ + q * u, y = M * Math.sin(Math.PI * u) * (1 - k * k * 0.5), S = P;
            t.push([
              m,
              S,
              y
            ]);
          }
        }
        const w = 13;
        for (let E = 0; E < 4; E++) for (let k = 0; k < 12; k++) {
          const P = h + E * w + k, q = h + E * w + k + 1, g = h + (E + 1) * w + k + 1, u = h + (E + 1) * w + k;
          o.push([
            P,
            q,
            g,
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
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: c
      });
      const a = 35e6, r = 0.2, f = 0.15, d = a / (2 * (1 + r)), i = {
        elasticities: new Map(o.map((b, $) => [
          $,
          a
        ])),
        poissonsRatios: new Map(o.map((b, $) => [
          $,
          r
        ])),
        thicknesses: new Map(o.map((b, $) => [
          $,
          f
        ])),
        shearModuli: new Map(o.map((b, $) => [
          $,
          d
        ]))
      };
      e.elementInputs && (e.elementInputs.val = i);
      try {
        const b = Pt(t, o, {
          supports: s,
          loads: c
        }, i);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Is() {
      const l = [], s = [];
      for (let v = 0; v <= 15; v++) {
        const p = v / 15, h = v * 3.5, w = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const E = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let k = 0; k < 12; k++) {
            const P = 2 * Math.PI * k / 12;
            l.push([
              Math.max(E, 1) * Math.cos(P),
              Math.max(E, 1) * Math.sin(P),
              h
            ]);
          }
        } else for (let E = 0; E < 12; E++) {
          const k = 2 * Math.PI * E / 12;
          l.push([
            w * Math.cos(k),
            w * Math.sin(k),
            h
          ]);
        }
      }
      for (let v = 0; v < 15; v++) {
        const p = v * 12, h = (v + 1) * 12;
        for (let E = 0; E < 12; E++) s.push([
          p + E,
          p + (E + 1) % 12
        ]);
        const w = v % 2 === 0 ? 1 : -1;
        for (let E = 0; E < 12; E++) {
          const k = (E + w + 12) % 12;
          s.push([
            p + E,
            h + k
          ]), s.push([
            p + E,
            h + E
          ]);
        }
      }
      const c = 15 * 12;
      for (let v = 0; v < 12; v++) s.push([
        c + v,
        c + (v + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let v = 0; v < 12; v++) a.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let v = 1; v <= 15; v++) {
        const p = v * 12, h = 3 * v / 15;
        for (let w = 0; w < 12; w += 3) r.set(p + w, [
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
      const f = 2e8, d = 77e6, i = 6e-3, b = 8e-6, $ = 4e-6, M = {
        elasticities: new Map(s.map((v, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((v, p) => [
          p,
          d
        ])),
        areas: new Map(s.map((v, p) => [
          p,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((v, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((v, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map((v, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const v = Pt(l, s, {
          supports: a,
          loads: r
        }, M);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Diagrid:", v.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function ea() {
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
    function ta() {
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
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, c = o("po-fy") * 1e3, a = o("po-H"), r = o("po-L"), f = o("po-As") * 1e-4, d = o("po-nbar"), i = o("po-drift") / 100, b = o("po-ncycles"), $ = t.querySelector("#pushover-status");
        $.textContent = "Generando historia de desplazamientos...";
        const M = [], v = i * a, p = 40;
        for (let h = 1; h <= b; h++) {
          const w = v * h / b;
          for (let E = 0; E <= p; E++) M.push(w * Math.sin(2 * Math.PI * E / p));
        }
        $.textContent = `Resolviendo pushover (${M.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ia(async () => {
            const { cyclicPushover: E } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: E
            };
          }, __vite__mapDeps([0,1]), import.meta.url), w = await h({
            colHeight: a,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: d
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: d
            },
            dispHistory: M
          });
          $.textContent = `Completado: ${w.nSteps} pasos`, oa(t.querySelector("#pushover-canvas"), w.displacements, w.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          $.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function oa(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const c = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = c - r.left - r.right, d = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, c, a);
      let i = Math.min(...o), b = Math.max(...o), $ = Math.min(...n), M = Math.max(...n);
      i === b && (i -= 0.01, b += 0.01), $ === M && ($ -= 1, M += 1);
      const v = b - i, p = M - $, h = (P) => r.left + (P - i) / v * f, w = (P) => r.top + d - (P - $) / p * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, i < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), r.top), s.lineTo(h(0), r.top + d), s.stroke()), $ < 0 && M > 0 && (s.beginPath(), s.moveTo(r.left, w(0)), s.lineTo(r.left + f, w(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), w(n[0]));
      for (let P = 1; P < o.length; P++) s.lineTo(h(o[P]), w(n[P]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const E = v / 5;
      for (let P = 0; P <= 5; P++) {
        const q = i + E * P;
        s.fillText((q * 1e3).toFixed(1), h(q), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const k = p / 5;
      for (let P = 0; P <= 5; P++) {
        const q = $ + k * P;
        s.fillText(q.toFixed(0), r.left - 5, w(q) + 3);
      }
    }
    let Ho = null;
    function na() {
      if (Ho) {
        Ho.remove(), Ho = null;
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
    `, document.body.appendChild(t), Ho = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), Ho = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => sa(t));
    }
    function sa(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let se = 0; se < a; se++) {
        const X = c * (1 + se * 0.5);
        for (let Z = 0; Z < r; Z++) {
          const K = Z / r * 2 * Math.PI;
          f.push(X * Math.sin(K));
        }
      }
      const d = o / n, i = l * n;
      let b = 0, $ = 0, M = -d, v = d, p = 0, h = 0, w = 0, E = 0, k = 0, P = 0;
      const q = [];
      for (const se of f) {
        let X = M, Z = v, K = p, ae = h, we = w, Te = E, Pe = k, R = P, ne;
        const Q = se - b;
        if (Math.abs(Q) < 1e-20) {
          q.push($);
          continue;
        }
        if ((R === 0 || R === 3) && (Q < 0 ? (R = 2, ae = -d, we = -o, K = ae, Te = 0, Pe = 0) : (R = 1, ae = d, we = o, K = ae, Te = 0, Pe = 0)), R === 2 && Q > 0) {
          R = 1, Te = b, Pe = $, b < X && (X = b);
          const Ae = (Z - X) / (2 * 1 * d), We = 1 + 0 * Math.pow(Ae, 0.8);
          ae = (o * We - i * d * We - Pe + n * Te) / (n - i), we = o * We + i * (ae - d * We), K = Z;
        } else if (R === 1 && Q < 0) {
          R = 2, Te = b, Pe = $, b > Z && (Z = b);
          const Ae = (Z - X) / (2 * 1 * d), We = 1 + 0 * Math.pow(Ae, 0.8);
          ae = (-o * We + i * d * We - Pe + n * Te) / (n - i), we = -o * We + i * (ae + d * We), K = X;
        }
        const J = Math.abs((K - ae) / d);
        let D = s - 0.925 * J / (0.15 + J);
        D < 0.1 && (D = 0.1);
        const pe = (se - Te) / (ae - Te), Se = 1 + Math.pow(Math.abs(pe), D), ie = Math.pow(Se, 1 / D);
        ne = l * pe + (1 - l) * pe / ie, ne = ne * (we - Pe) + Pe, q.push(ne), b = se, $ = ne, M = X, v = Z, p = K, h = ae, w = we, E = Te, k = Pe, P = R;
      }
      const g = t.querySelector("#nl-canvas"), u = g.getContext("2d"), m = g.width, y = g.height;
      u.clearRect(0, 0, m, y);
      const S = Math.max(...f.map(Math.abs)), A = Math.max(...q.map(Math.abs)), z = (m - 40) / (2 * S), I = (y - 40) / (2 * A), F = m / 2, O = y / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, O), u.lineTo(m - 20, O), u.stroke(), u.beginPath(), u.moveTo(F, 20), u.lineTo(F, y - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", m - 40, O - 5), u.fillText("\u03C3 (stress)", F + 30, 15), u.fillText(`\xB1${(S * 100).toFixed(1)}%`, m - 30, O + 12), u.fillText(`\xB1${(A / 1e3).toFixed(0)} MPa`, F + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let se = 0; se < f.length; se++) {
        const X = F + f[se] * z, Z = O - q[se] * I;
        se === 0 ? u.moveTo(X, Z) : u.lineTo(X, Z);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, O - o * I), u.lineTo(m - 20, O - o * I), u.stroke(), u.beginPath(), u.moveTo(20, O + o * I), u.lineTo(m - 20, O + o * I), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, m - 50, O - o * I - 5);
      const te = t.querySelector("#nl-info");
      te.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function aa() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, c = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = ka({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(a);
    }
    let Io = null;
    function la(t) {
      Io && Io.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Zo(), l = Qo(), s = Object.entries(n).map(([d, i]) => `<option value="${i}">${d}</option>`).join(""), c = Object.entries(l).map(([d, i]) => `<option value="${i}">${d}</option>`).join("");
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
        <b style="color:#ff6666;font-size:11px;">Releases (articulaciones)</b>
        <div style="margin-top:4px;display:grid;grid-template-columns:1fr 1fr;gap:3px;font-size:11px;">
          <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" id="asgn-rel-rot-start"> R\xF3tula Inicio</label>
          <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" id="asgn-rel-rot-end"> R\xF3tula Fin</label>
          <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" id="asgn-rel-axial"> Libre Axial</label>
          <label style="display:flex;align-items:center;gap:4px;"><input type="checkbox" id="asgn-rel-torsion"> Libre Torsi\xF3n</label>
        </div>
        <div style="color:#888;font-size:9px;margin-top:2px;">R\xF3tula = el momento en ese extremo es 0 (pin)</div>
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
    `, document.body.appendChild(o), Io = o;
      const a = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
      function f() {
        const d = a.value;
        let i = "";
        d === "rect" ? i = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : d === "circ" ? i = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : d === "W" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : d === "HSS" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : d === "I-param" ? i = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : d === "tubular" && (i = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = i;
      }
      a.addEventListener("change", f), f(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Io = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = a.value, i = {
          secType: d
        };
        d === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : d === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : d === "W" || d === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : d === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : d === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((b) => be.set(b, {
          ...i
        })), o.remove(), Io = null, no(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((d) => be.delete(d)), o.remove(), Io = null, no(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let ko = null;
    function ra(t) {
      var _a2, _b, _c;
      ko && ko.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > c && a > r, d = Math.sqrt(c * c + a * a + r * r), i = qe.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), $ = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), M = document.createElement("div");
      M.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", M.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${i + 1} &nbsp;
        <span style="color:#888;">L:</span> ${d.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${$}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(M), ko = M, M.querySelector("#ep-close").addEventListener("click", () => {
        M.remove(), ko = null, bo();
      }), M.querySelector("#ep-delete").addEventListener("click", () => {
        U.add(t), M.remove(), ko = null, bo(), $e();
      }), M.querySelector("#ep-inspect").addEventListener("click", () => {
        M.remove(), ko = null, vs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function c(f) {
        const d = tt();
        if (!d) return null;
        const i = d.controls.object, b = new Ee(f[0], f[1], f[2]);
        b.project(i);
        const $ = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * $.width,
          y: (-b.y + 1) / 2 * $.height
        };
      }
      function a(f, d, i, b, $) {
        const M = Math.min(f, i), v = Math.max(f, i), p = Math.min(d, b), h = Math.max(d, b), w = e.nodes.val, E = e.elements.val, k = [];
        for (let P = 0; P < E.length; P++) {
          const q = E[P], g = q.map((u) => c(w[u])).filter(Boolean);
          if (g.length !== 0) if ($) g.every((m) => m.x >= M && m.x <= v && m.y >= p && m.y <= h) && k.push(P);
          else {
            if (g.some((m) => m.x >= M && m.x <= v && m.y >= p && m.y <= h)) {
              k.push(P);
              continue;
            }
            if (q.length === 2) {
              const m = g[0], y = g[1];
              r(m.x, m.y, y.x, y.y, M, p, v, h) && k.push(P);
            }
          }
        }
        return k;
      }
      function r(f, d, i, b, $, M, v, p) {
        const h = (E, k) => E >= $ && E <= v && k >= M && k <= p;
        if (h(f, d) || h(i, b)) return true;
        const w = (E, k, P, q, g, u, m, y) => {
          const S = (P - E) * (y - u) - (q - k) * (m - g);
          if (Math.abs(S) < 1e-10) return false;
          const A = ((g - E) * (y - u) - (u - k) * (m - g)) / S, z = ((g - E) * (q - k) - (u - k) * (P - E)) / S;
          return A >= 0 && A <= 1 && z >= 0 && z <= 1;
        };
        return w(f, d, i, b, $, M, v, M) || w(f, d, i, b, v, M, v, p) || w(f, d, i, b, $, p, v, p) || w(f, d, i, b, $, M, $, p);
      }
      o.addEventListener("mousedown", (f) => {
        Nt && (n = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), o.addEventListener("mousemove", (f) => {
        if (Vt) {
          const i = tt();
          if (!i) return;
          const b = ms(f.clientX, f.clientY, i.camera, i.rendererElm);
          if (mt.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== mo && js(b.nodeIdx), mt.track && mo !== null && b.worldPos && b.snapType !== "node") {
            const $ = Ys(b.worldPos, mo);
            $ && (b.worldPos = $, b.snapType = "grid");
          }
          if (mo !== null && b.worldPos) {
            const $ = e.nodes.val[mo];
            $ && us(f.clientX, f.clientY, new Ee(...$), b.worldPos);
          } else if (dt !== null && b.worldPos) {
            const $ = e.nodes.val[dt];
            $ && us(f.clientX, f.clientY, new Ee(...$), b.worldPos);
          } else Bt && (Bt.remove(), Bt = null);
          b.nodeIdx, bs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Dt && !Nt) return;
        if (Nt && n) {
          const i = f.offsetX - n.x, b = f.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const $ = i > 0, M = Math.min(n.x, f.offsetX), v = Math.min(n.y, f.offsetY), p = Math.abs(i), h = Math.abs(b);
            l.style.left = M + "px", l.style.top = v + "px", l.style.width = p + "px", l.style.height = h + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = kn(f);
        if (d >= 0) gs(d), o.style.cursor = "pointer";
        else {
          if (Rt) {
            const i = tt();
            i == null ? void 0 : i.scene.remove(Rt), Rt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = Nt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (f) => {
        if (Nt && n) {
          const d = f.offsetX - n.x, i = f.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(i) > s) {
            const b = d > 0, $ = a(n.x, n.y, f.offsetX, f.offsetY, b);
            f.ctrlKey || f.metaKey || (ct.clear(), ro()), $.forEach((v) => {
              ct.has(v) || (ct.add(v), Sn(v));
            }), io();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (f) => {
        if (Vt) {
          const d = tt();
          if (!d) return;
          const i = ms(f.clientX, f.clientY, d.camera, d.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (Js(i), bs(i));
          return;
        }
        if (Nt) {
          if (l) return;
          const d = kn(f), i = f.ctrlKey || f.metaKey;
          if (d >= 0) {
            if (i) if (ct.has(d)) {
              ct.delete(d);
              const b = lo.findIndex(($) => $.__elemIdx === d);
              if (b >= 0) {
                const $ = tt();
                $ == null ? void 0 : $.scene.remove(lo[b]), lo[b].geometry.dispose(), lo[b].material.dispose(), lo.splice(b, 1), $ == null ? void 0 : $.render();
              }
            } else ct.add(d), Sn(d);
            else ct.clear(), ro(), ct.add(d), Sn(d);
            io();
          } else i || (ct.clear(), ro(), io());
          return;
        }
        if (Dt) {
          const d = kn(f);
          d >= 0 && (gs(d), ra(d));
        }
      });
    }, 500), Fo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Je();
    }), je.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !ge), ge = t, (_a2 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ge), ge) {
        const n = tt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Re = n.settings.loads.rawVal, n.settings.loads.val = false), mn(), ye.querySelector("#cad3d-mode-prev").style.display = "", ye.querySelector("#cad3d-mode-next").style.display = "", ye.querySelector("#cad3d-mode-label").style.display = "";
      } else bn(), ye.querySelector("#cad3d-mode-prev").style.display = "none", ye.querySelector("#cad3d-mode-next").style.display = "none", ye.querySelector("#cad3d-mode-label").style.display = "none", L && L !== "placa-q4" && L !== "placa-3q" && $e(), setTimeout(() => {
        var _a3;
        const n = tt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Re && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ge ? "ON" : "OFF"}`);
    }, je.setMode = (t) => {
      var _a2;
      if (!(ee == null ? void 0 : ee.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ve = Math.max(0, Math.min(t, ee.modeShapes.length - 1));
      const o = ee.modeShapes[ve], { extent: n } = so();
      let l = 0;
      for (let c = 0; c < oe.length; c++) {
        const a = o[c * 6] || 0, r = o[c * 6 + 1] || 0, f = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      he = l > 1e-12 ? n * 0.05 / l : 1, _o();
      const s = ye.querySelector("#cad3d-mode-label");
      s && ee.frequencies && (s.textContent = `Modo ${ve + 1} \u2014 ${ee.frequencies[ve].toFixed(2)} Hz`), console.log(`Modo ${ve + 1}: f = ${(_a2 = ee.frequencies) == null ? void 0 : _a2[ve].toFixed(4)} Hz`);
    }, window.cad = je, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ye), document.body.appendChild(Ie.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Xe("edificio"), $e(), cs("edificio"));
    }, 100), document.body.appendChild(Ra());
    const ks = document.createElement("span");
    return ks.style.display = "none", ks;
  };
});
export {
  __tla,
  Cs as a,
  Ia as c,
  ol as g
};
