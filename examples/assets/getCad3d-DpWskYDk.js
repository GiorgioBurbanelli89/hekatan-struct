const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { d as Ft, _ as ia, p as Pn, m as ca, s as da, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Po, P as Bo, g as pa, a as fa, o as ua } from "./theme-CzzIlc4y.js";
import { V as ke, P as po, R as zs, b as Ts, B as jt, c as ma, d as To, e as Lo, f as ba, S as ha, M as ga, g as xa, F as ho, a as Ao, L as go, h as va, G as ya, A as Jo, i as Vo, T as Fn, j as Xo, k as Uo, C as $a, l as Ma } from "./Text-Cin90tvN.js";
import { g as on, b as nn, a as Co } from "./analyze-hNAfpj64.js";
import { g as to, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as yo, s as oo, m as Wt, t as _n } from "./pureFunctionsAny.generated-BHh0zpCc.js";
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
  ], Fo = [
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
  function wa(e, x) {
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
    const _ = Rn.find((W) => W.id === e), T = Fo.find((W) => W.id === x), U = _.toKN, B = T.toM, ne = (W, xe, L) => L / (Math.pow(U, W) * Math.pow(B, xe));
    let V, Y;
    switch (e) {
      case "kN":
        V = 10, Y = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        V = 1, Y = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        V = 1e3, Y = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        V = 10, Y = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        V = 5e3, Y = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        V = 1e4, Y = [
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
      stress: wa(e, x),
      moment: `${_.label}\xB7${T.label}`,
      E: ne(1, -2, xo.E),
      G: ne(1, -2, xo.G),
      A: ne(0, 2, xo.A),
      Iz: ne(0, 4, xo.Iz),
      Iy: ne(0, 4, xo.Iy),
      J: ne(0, 4, xo.J),
      rho: ne(1, -4, xo.rho),
      spanRange: T.spanRange,
      heightRange: T.heightRange,
      defaultSpan: T.defaultSpan,
      defaultHeight: T.defaultHeight,
      defaultForce: V,
      forceRange: Y,
      galponSpan: T.galponSpan,
      galponLength: T.galponLength,
      galponHeight: T.galponHeight,
      galponRise: T.galponRise
    };
  }
  vo("kN", "m"), vo("kip", "in");
  function Ko() {
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
    const x = e.force, [_, T, U] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: U,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CV (${x})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: _,
          max: T,
          step: U,
          label: `Ex sismo (${x})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: _,
          max: T,
          step: U,
          label: `Ex sismo (${x})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: U,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: T,
          step: U,
          label: `Ex sismo (${x})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: U,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: U,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: T,
          step: U,
          label: `Ex sismo (${x})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: T,
          step: U,
          label: `Ey sismo (${x})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: U,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: U,
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
          step: U,
          label: `CM (${x})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: U,
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
    function _(T, U) {
      var _a2, _b;
      if (!T.frequencies || T.frequencies.length === 0) {
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
      ], ne = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let V = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${U.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (V += '<div id="modal-body" style="padding:0 12px 10px 12px;">', U.properties) for (const Y of U.properties) V += `<span style="color:#888">${Y}</span>
`;
      V += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const Y of B) V += `<th style="padding:2px 5px">${Y}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, T.frequencies.forEach((Y, W) => {
        var _a3;
        const xe = Y > 0 ? 1 / Y : 0, L = Y * 2 * Math.PI, ie = ((_a3 = T.massParticipation) == null ? void 0 : _a3[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let Ee = 0; Ee < 6; Ee++) ne[Ee] += ie[Ee];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${Y.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${xe.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${L.toFixed(2)}</td>`;
        for (let Ee = 0; Ee < 6; Ee++) {
          const ge = (ie[Ee] * 100).toFixed(1), ce = ie[Ee] > 0.5 ? "#f00" : ie[Ee] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${ce}">${ge}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, x) {
        const Y = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        Y && (Y.style.display = "none"), W && (W.textContent = "\u25A2", W.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        x = !x;
        const Y = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        x ? (Y.style.display = "none", W.textContent = "\u25A2", W.title = "Restaurar") : (Y.style.display = "block", W.textContent = "\u25AC", W.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const Y = [];
        Y.push(`Modal Analysis \u2014 ${U.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${B.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        Y.push(W), Y.push("-".repeat(W.length));
        const xe = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        T.frequencies.forEach((ie, Ee) => {
          var _a3;
          const ge = ie > 0 ? 1 / ie : 0, ce = ie * 2 * Math.PI, pe = ((_a3 = T.massParticipation) == null ? void 0 : _a3[Ee]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Pe = 0; Pe < 6; Pe++) xe[Pe] += pe[Pe];
          const be = pe.map((Pe) => ((Pe * 100).toFixed(1) + "%").padStart(6)).join(" ");
          Y.push(`${String(Ee + 1).padStart(4)}  ${ie.toFixed(4).padStart(9)}  ${ge.toFixed(4).padStart(9)}  ${ce.toFixed(2).padStart(9)}  ${be}  ${(xe[0] * 100).toFixed(1).padStart(5)}%  ${(xe[1] * 100).toFixed(1).padStart(5)}%  ${(xe[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(Y.join(`
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
  const $e = 64516e-8, P = 416231e-12, D = 0.0254, fo = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * $e,
      Iz: 16.4 * P,
      Iy: 2.2 * P,
      J: 0.0405 * P,
      d: 5.9 * D,
      bf: 3.94 * D
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * $e,
      Iz: 29.1 * P,
      Iy: 9.32 * P,
      J: 0.103 * P,
      d: 5.99 * D,
      bf: 5.99 * D
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * $e,
      Iz: 41.4 * P,
      Iy: 13.3 * P,
      J: 0.204 * P,
      d: 6.2 * D,
      bf: 6.02 * D
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * $e,
      Iz: 30.8 * P,
      Iy: 2.09 * P,
      J: 0.0426 * P,
      d: 7.89 * D,
      bf: 3.94 * D
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * $e,
      Iz: 61.9 * P,
      Iy: 7.97 * P,
      J: 0.172 * P,
      d: 8.14 * D,
      bf: 5.25 * D
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * $e,
      Iz: 82.7 * P,
      Iy: 18.3 * P,
      J: 0.346 * P,
      d: 7.93 * D,
      bf: 6.5 * D
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * $e,
      Iz: 110 * P,
      Iy: 37.1 * P,
      J: 0.536 * P,
      d: 8 * D,
      bf: 7.995 * D
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * $e,
      Iz: 146 * P,
      Iy: 49.1 * P,
      J: 0.871 * P,
      d: 8.25 * D,
      bf: 8.07 * D
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * $e,
      Iz: 184 * P,
      Iy: 60.9 * P,
      J: 1.45 * P,
      d: 8.5 * D,
      bf: 8.11 * D
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * $e,
      Iz: 272 * P,
      Iy: 88.6 * P,
      J: 3.54 * P,
      d: 9 * D,
      bf: 8.28 * D
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * $e,
      Iz: 53.8 * P,
      Iy: 2.18 * P,
      J: 0.0547 * P,
      d: 9.87 * D,
      bf: 3.96 * D
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * $e,
      Iz: 118 * P,
      Iy: 11.4 * P,
      J: 0.239 * P,
      d: 10.17 * D,
      bf: 5.75 * D
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * $e,
      Iz: 171 * P,
      Iy: 36.6 * P,
      J: 0.583 * P,
      d: 9.73 * D,
      bf: 7.96 * D
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * $e,
      Iz: 272 * P,
      Iy: 93.4 * P,
      J: 1.39 * P,
      d: 9.98 * D,
      bf: 10 * D
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * $e,
      Iz: 394 * P,
      Iy: 134 * P,
      J: 3.56 * P,
      d: 10.4 * D,
      bf: 10.13 * D
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * $e,
      Iz: 623 * P,
      Iy: 207 * P,
      J: 10.9 * P,
      d: 11.1 * D,
      bf: 10.34 * D
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * $e,
      Iz: 88.6 * P,
      Iy: 2.36 * P,
      J: 0.0704 * P,
      d: 11.91 * D,
      bf: 3.97 * D
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * $e,
      Iz: 156 * P,
      Iy: 4.66 * P,
      J: 0.293 * P,
      d: 12.31 * D,
      bf: 4.03 * D
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * $e,
      Iz: 204 * P,
      Iy: 17.3 * P,
      J: 0.3 * P,
      d: 12.22 * D,
      bf: 6.49 * D
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * $e,
      Iz: 310 * P,
      Iy: 44.1 * P,
      J: 0.906 * P,
      d: 11.94 * D,
      bf: 8.01 * D
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * $e,
      Iz: 425 * P,
      Iy: 95.8 * P,
      J: 1.58 * P,
      d: 12.06 * D,
      bf: 9.99 * D
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * $e,
      Iz: 597 * P,
      Iy: 195 * P,
      J: 4.05 * P,
      d: 12.25 * D,
      bf: 12.04 * D
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * $e,
      Iz: 833 * P,
      Iy: 270 * P,
      J: 8.44 * P,
      d: 12.71 * D,
      bf: 12.16 * D
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * $e,
      Iz: 1070 * P,
      Iy: 345 * P,
      J: 16 * P,
      d: 13.12 * D,
      bf: 12.32 * D
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * $e,
      Iz: 199 * P,
      Iy: 7 * P,
      J: 0.208 * P,
      d: 13.74 * D,
      bf: 5 * D
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * $e,
      Iz: 291 * P,
      Iy: 19.6 * P,
      J: 0.38 * P,
      d: 13.84 * D,
      bf: 6.73 * D
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * $e,
      Iz: 385 * P,
      Iy: 26.7 * P,
      J: 0.798 * P,
      d: 14.1 * D,
      bf: 6.77 * D
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * $e,
      Iz: 485 * P,
      Iy: 51.4 * P,
      J: 1.45 * P,
      d: 13.79 * D,
      bf: 8.03 * D
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * $e,
      Iz: 640 * P,
      Iy: 107 * P,
      J: 2.19 * P,
      d: 13.89 * D,
      bf: 9.99 * D
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * $e,
      Iz: 882 * P,
      Iy: 148 * P,
      J: 5.07 * P,
      d: 14.31 * D,
      bf: 10.13 * D
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * $e,
      Iz: 1240 * P,
      Iy: 447 * P,
      J: 7.12 * P,
      d: 14.32 * D,
      bf: 14.61 * D
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * $e,
      Iz: 1530 * P,
      Iy: 548 * P,
      J: 12.3 * P,
      d: 14.66 * D,
      bf: 14.73 * D
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * $e,
      Iz: 2140 * P,
      Iy: 838 * P,
      J: 23.7 * P,
      d: 15.22 * D,
      bf: 15.65 * D
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * $e,
      Iz: 301 * P,
      Iy: 9.59 * P,
      J: 0.262 * P,
      d: 15.69 * D,
      bf: 5.5 * D
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * $e,
      Iz: 448 * P,
      Iy: 24.5 * P,
      J: 0.545 * P,
      d: 15.86 * D,
      bf: 6.99 * D
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * $e,
      Iz: 659 * P,
      Iy: 37.2 * P,
      J: 1.52 * P,
      d: 16.26 * D,
      bf: 7.07 * D
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * $e,
      Iz: 954 * P,
      Iy: 119 * P,
      J: 2.39 * P,
      d: 16.33 * D,
      bf: 10.24 * D
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * $e,
      Iz: 1300 * P,
      Iy: 163 * P,
      J: 5.45 * P,
      d: 16.75 * D,
      bf: 10.37 * D
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * $e,
      Iz: 510 * P,
      Iy: 15.3 * P,
      J: 0.506 * P,
      d: 17.7 * D,
      bf: 6 * D
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * $e,
      Iz: 800 * P,
      Iy: 40.1 * P,
      J: 1.24 * P,
      d: 17.99 * D,
      bf: 7.5 * D
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * $e,
      Iz: 1170 * P,
      Iy: 60.3 * P,
      J: 3.49 * P,
      d: 18.47 * D,
      bf: 7.64 * D
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * $e,
      Iz: 1750 * P,
      Iy: 201 * P,
      J: 5.86 * P,
      d: 18.59 * D,
      bf: 11.15 * D
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * $e,
      Iz: 843 * P,
      Iy: 20.7 * P,
      J: 0.77 * P,
      d: 20.66 * D,
      bf: 6.5 * D
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * $e,
      Iz: 1330 * P,
      Iy: 57.5 * P,
      J: 1.83 * P,
      d: 20.99 * D,
      bf: 8.24 * D
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * $e,
      Iz: 1830 * P,
      Iy: 81.4 * P,
      J: 4.34 * P,
      d: 21.43 * D,
      bf: 8.36 * D
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * $e,
      Iz: 2670 * P,
      Iy: 274 * P,
      J: 6.83 * P,
      d: 21.51 * D,
      bf: 12.34 * D
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * $e,
      Iz: 1350 * P,
      Iy: 29.1 * P,
      J: 1.18 * P,
      d: 23.57 * D,
      bf: 7.01 * D
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * $e,
      Iz: 2100 * P,
      Iy: 82.5 * P,
      J: 2.68 * P,
      d: 23.92 * D,
      bf: 8.99 * D
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * $e,
      Iz: 3100 * P,
      Iy: 259 * P,
      J: 4.72 * P,
      d: 24.06 * D,
      bf: 12.75 * D
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * $e,
      Iz: 4020 * P,
      Iy: 340 * P,
      J: 9.5 * P,
      d: 24.48 * D,
      bf: 12.86 * D
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * $e,
      Iz: 4580 * P,
      Iy: 391 * P,
      J: 12.6 * P,
      d: 24.74 * D,
      bf: 12.9 * D
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * $e,
      Iz: 5680 * P,
      Iy: 479 * P,
      J: 21.2 * P,
      d: 25.24 * D,
      bf: 12.9 * D
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * $e,
      Iz: 2850 * P,
      Iy: 106 * P,
      J: 2.81 * P,
      d: 26.71 * D,
      bf: 9.96 * D
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * $e,
      Iz: 4090 * P,
      Iy: 159 * P,
      J: 6.77 * P,
      d: 27.29 * D,
      bf: 10.07 * D
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * $e,
      Iz: 3610 * P,
      Iy: 115 * P,
      J: 3.06 * P,
      d: 29.53 * D,
      bf: 10.4 * D
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * $e,
      Iz: 4930 * P,
      Iy: 164 * P,
      J: 6.43 * P,
      d: 30.01 * D,
      bf: 10.5 * D
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * $e,
      Iz: 5900 * P,
      Iy: 187 * P,
      J: 5.3 * P,
      d: 32.86 * D,
      bf: 11.48 * D
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * $e,
      Iz: 7800 * P,
      Iy: 225 * P,
      J: 7 * P,
      d: 35.55 * D,
      bf: 11.95 * D
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * $e,
      Iz: 8.22 * P,
      Iy: 8.22 * P,
      J: 13.4 * P,
      d: 4 * D,
      bf: 4 * D
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * $e,
      Iz: 10.7 * P,
      Iy: 10.7 * P,
      J: 17.9 * P,
      d: 4 * D,
      bf: 4 * D
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * $e,
      Iz: 12.3 * P,
      Iy: 12.3 * P,
      J: 21 * P,
      d: 4 * D,
      bf: 4 * D
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * $e,
      Iz: 30.3 * P,
      Iy: 30.3 * P,
      J: 48.3 * P,
      d: 6 * D,
      bf: 6 * D
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * $e,
      Iz: 41.1 * P,
      Iy: 41.1 * P,
      J: 66.9 * P,
      d: 6 * D,
      bf: 6 * D
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * $e,
      Iz: 49.6 * P,
      Iy: 49.6 * P,
      J: 82.2 * P,
      d: 6 * D,
      bf: 6 * D
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * $e,
      Iz: 70.7 * P,
      Iy: 70.7 * P,
      J: 112 * P,
      d: 8 * D,
      bf: 8 * D
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * $e,
      Iz: 98 * P,
      Iy: 98 * P,
      J: 158 * P,
      d: 8 * D,
      bf: 8 * D
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * $e,
      Iz: 122 * P,
      Iy: 122 * P,
      J: 199 * P,
      d: 8 * D,
      bf: 8 * D
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * $e,
      Iz: 202 * P,
      Iy: 202 * P,
      J: 323 * P,
      d: 10 * D,
      bf: 10 * D
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * $e,
      Iz: 254 * P,
      Iy: 254 * P,
      J: 412 * P,
      d: 10 * D,
      bf: 10 * D
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * $e,
      Iz: 355 * P,
      Iy: 355 * P,
      J: 564 * P,
      d: 12 * D,
      bf: 12 * D
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * $e,
      Iz: 452 * P,
      Iy: 452 * P,
      J: 724 * P,
      d: 12 * D,
      bf: 12 * D
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * $e,
      Iz: 18 * P,
      Iy: 9.58 * P,
      J: 22.6 * P,
      d: 6 * D,
      bf: 4 * D
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * $e,
      Iz: 23.8 * P,
      Iy: 12.3 * P,
      J: 30.3 * P,
      d: 6 * D,
      bf: 4 * D
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * $e,
      Iz: 33.6 * P,
      Iy: 11.8 * P,
      J: 33 * P,
      d: 8 * D,
      bf: 4 * D
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * $e,
      Iz: 45.1 * P,
      Iy: 15 * P,
      J: 44.5 * P,
      d: 8 * D,
      bf: 4 * D
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * $e,
      Iz: 46.1 * P,
      Iy: 28.2 * P,
      J: 61.3 * P,
      d: 8 * D,
      bf: 6 * D
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * $e,
      Iz: 63 * P,
      Iy: 37.5 * P,
      J: 84.6 * P,
      d: 8 * D,
      bf: 6 * D
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * $e,
      Iz: 103 * P,
      Iy: 47.1 * P,
      J: 115 * P,
      d: 10 * D,
      bf: 6 * D
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * $e,
      Iz: 196 * P,
      Iy: 102 * P,
      J: 249 * P,
      d: 12 * D,
      bf: 8 * D
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
    const { nodes: x, elements: _, elementInputs: T, nodeInputs: U, deformOutputs: B } = e, ne = x.length * 6, V = _.length, Y = _.filter((ce) => ce.length === 2).length, W = _.filter((ce) => ce.length >= 3).length, xe = document.createElement("div");
    xe.className = "rpt-overlay";
    let L = "";
    L += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', L += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", L += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', L += '<hr class="rpt-sep"/>', L += "<h2>1. Input Data</h2>", L += '<table class="rpt-info"><tbody>', L += `<tr><td>Number of nodes</td><td class="val">${x.length}</td></tr>`, L += `<tr><td>Number of elements</td><td class="val">${V} (${Y} frames, ${W} shells)</td></tr>`, L += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', L += `<tr><td>Total DOFs</td><td class="val">${ne}</td></tr>`, L += "</tbody></table>", L += "<h3>1.1 Node Coordinates</h3>", L += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', x.forEach((ce, pe) => {
      L += `<tr><td>${pe}</td><td>${Ue(ce[0])}</td><td>${Ue(ce[1])}</td><td>${Ue(ce[2])}</td></tr>`;
    }), L += "</tbody></table>", L += "<h3>1.2 Element Connectivity</h3>", L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((ce, pe) => {
      var _a3, _b2, _c2, _d2;
      const be = ce.length === 2, Pe = ce.map((Ke) => x[Ke]), Be = be ? yo(oo(Pe[1], Pe[0])) : 0, Oe = ((_a3 = T.elasticities) == null ? void 0 : _a3.get(pe)) ?? 0, Ve = ((_b2 = T.areas) == null ? void 0 : _b2.get(pe)) ?? 0, st = ((_c2 = T.momentsOfInertiaZ) == null ? void 0 : _c2.get(pe)) ?? 0, Ye = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(pe)) ?? 0;
      L += `<tr><td>${pe}</td><td>${be ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, L += `<td>${Ue(Be)}</td><td>${Ue(Oe)}</td><td>${Ue(Ve)}</td><td>${Ue(st)}</td><td>${Ue(Ye)}</td></tr>`;
    }), L += "</tbody></table>", L += "<h2>2. Element Formulation</h2>", Y > 0 && (L += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", L += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", L += "<h4>2.1.1 Shape Functions</h4>", L += "<p><b>Axial</b> (linear interpolation):</p>", L += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', L += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', L += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', L += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', L += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', L += "</tbody></table>", L += Ta(), L += "<p><b>Torsion</b> (linear): same as axial.</p>", L += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", L += "<p>The B matrix relates nodal displacements to internal strains:</p>", L += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', L += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', L += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', L += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', L += "<h4>2.1.3 Constitutive Relations D</h4>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', L += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', L += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', L += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', L += "</tbody></table>", L += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", L += "<p>Obtained by analytical integration:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', L += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", L += '<div class="rpt-eq-small">', L += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", L += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", L += "</div>", L += "<h4>2.1.5 Transformation Matrix T</h4>", L += "<p>Direction cosines of element axis:</p>", L += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', L += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', L += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', L += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", L += "<h4>2.1.6 Global Stiffness Matrix</h4>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), L += "<h2>3. Numerical Results per Element</h2>", L += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < V; ce++) {
      const pe = _[ce], be = pe.map((it) => x[it]);
      if (!(pe.length === 2)) continue;
      const Be = yo(oo(be[1], be[0])), Oe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(ce)) ?? 0, Ve = ((_b = T.areas) == null ? void 0 : _b.get(ce)) ?? 0, st = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Ye = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, Ke = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(ce)) ?? 0, bt = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let vt = null, me = null, Ne = null;
      try {
        vt = on(be, T, ce), me = nn(be), Ne = Wt(_n(me), Wt(vt, me));
      } catch {
        continue;
      }
      const He = oo(be[1], be[0]), et = He[0] / Be, Ze = He[1] / Be, De = He[2] / Be;
      L += '<div class="rpt-elem-block">', L += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${pe[0]} \u2192 ${pe[1]}, L = ${Ue(Be)}</h3>`, L += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, L += "<h4>Properties (numerical substitution)</h4>", L += '<div class="rpt-eq-small">', L += `E = ${Ue(Oe)} &nbsp;&nbsp; A = ${Ue(Ve)} &nbsp;&nbsp; I<sub>z</sub> = ${Ue(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Ue(Ye)} &nbsp;&nbsp; G = ${Ue(Ke)} &nbsp;&nbsp; J = ${Ue(bt)}<br/>`, L += `EA/L = ${Ue(Oe)}\xB7${Ue(Ve)}/${Ue(Be)} = <b>${Ue(Oe * Ve / Be)}</b><br/>`, L += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ue(Oe)}\xB7${Ue(st)}/${Ue(Be)}\xB3 = <b>${Ue(12 * Oe * st / Be ** 3)}</b><br/>`, L += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ue(Oe)}\xB7${Ue(Ye)}/${Ue(Be)}\xB3 = <b>${Ue(12 * Oe * Ye / Be ** 3)}</b><br/>`, L += `GJ/L = ${Ue(Ke)}\xB7${Ue(bt)}/${Ue(Be)} = <b>${Ue(Ke * bt / Be)}</b>`, L += "</div>", L += "<h4>Direction cosines</h4>", L += `<div class="rpt-eq-small">l = ${en(et)}, m = ${en(Ze)}, n = ${en(De)}, D = ${en(Math.sqrt(et ** 2 + Ze ** 2))}</div>`, L += "<h4>K<sub>local</sub> (12\xD712)</h4>", L += On(vt, 12), L += "<h4>T \u2014 Transformation (12\xD712)</h4>", L += On(me, 12), L += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", L += On(Ne, 12), L += "<h4>Assembly</h4>", L += `<div class="rpt-eq-small">Global DOFs: node ${pe[0]} \u2192 [${pe[0] * 6}..${pe[0] * 6 + 5}], node ${pe[1]} \u2192 [${pe[1] * 6}..${pe[1] * 6 + 5}]</div>`, L += "</div></div>";
    }
    L += "<h2>4. Global Assembly</h2>", L += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, L += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", L += La(_, x.length), L += "<h2>5. Boundary Conditions</h2>";
    const ie = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], Ee = [];
    if (L += "<h3>5.1 Supports (fixed DOFs)</h3>", U.supports && U.supports.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of ie) L += `<th>${ce}</th>`;
      L += "</tr></thead><tbody>", U.supports.forEach((ce, pe) => {
        L += `<tr><td>${pe}</td>`, ce.forEach((be, Pe) => {
          be && Ee.push(pe * 6 + Pe), L += `<td class="${be ? "fixed" : ""}">${be ? "Fixed" : "Free"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += `<div class="rpt-eq-small">Fixed DOFs: [${Ee.join(", ")}] \u2192 ${Ee.length} constraints<br/>`, L += `Free DOFs: ${ne} \u2212 ${Ee.length} = <b>${ne - Ee.length}</b></div>`, L += "<h3>5.2 Applied Loads</h3>", U.loads && U.loads.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ce = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const pe of ce) L += `<th>${pe}</th>`;
      L += "</tr></thead><tbody>", U.loads.forEach((pe, be) => {
        L += `<tr><td>${be}</td>`, pe.forEach((Pe) => {
          const Be = Math.abs(Pe) > 1e-10;
          L += `<td class="${Be ? "nz" : ""}">${Be ? Ue(Pe) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>6. Solution</h2>", L += "<p>After removing fixed DOFs, the reduced system is:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', L += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", L += "<h3>6.1 Nodal Displacements</h3>", B == null ? void 0 : B.deformations) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of ie) L += `<th>${ce}</th>`;
      L += "</tr></thead><tbody>", B.deformations.forEach((ce, pe) => {
        L += `<tr><td>${pe}</td>`, ce.forEach((be) => {
          const Pe = Math.abs(be) > 1e-10;
          L += `<td class="${Pe ? "nz" : ""}">${Ue(be, 6)}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h3>6.2 Reactions</h3>", L += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', B == null ? void 0 : B.reactions) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of ie) L += `<th>${ce}</th>`;
      L += "</tr></thead><tbody>", B.reactions.forEach((ce, pe) => {
        L += `<tr><td>${pe}</td>`, ce.forEach((be) => {
          const Pe = Math.abs(be) > 1e-10;
          L += `<td class="${Pe ? "nz-react" : ""}">${Pe ? Ue(be, 4) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>7. Internal Forces</h2>", L += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", L += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', L += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', B == null ? void 0 : B.deformations) {
      const ce = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const pe of ce) L += `<th>${pe}<sub>i</sub></th>`;
      for (const pe of ce) L += `<th>${pe}<sub>j</sub></th>`;
      L += "</tr></thead><tbody>";
      for (let pe = 0; pe < V; pe++) {
        const be = _[pe];
        if (be.length !== 2) continue;
        const Pe = be.map((Be) => x[Be]);
        try {
          const Be = on(Pe, T, pe), Oe = nn(Pe), Ve = [];
          for (const Ke of be) {
            const bt = ((_g = B.deformations) == null ? void 0 : _g.get(Ke)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ve.push(...bt);
          }
          const st = Wt(Oe, Ve), Ye = Wt(Be, st);
          L += `<tr><td>${pe}</td><td>${be.join("\u2192")}</td>`;
          for (let Ke = 0; Ke < 12; Ke++) {
            const bt = Math.abs(Ye[Ke]) > 1e-10;
            L += `<td class="${bt ? "nz" : ""}">${Ue(Ye[Ke], 2)}</td>`;
          }
          L += "</tr>";
        } catch {
        }
      }
      L += "</tbody></table>";
    }
    const ge = `
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
    return xe.innerHTML = ge + L, (_h = xe.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => xe.remove()), xe.querySelectorAll("[data-toggle]").forEach((ce) => {
      ce.addEventListener("click", () => {
        const pe = ce.dataset.toggle, be = xe.querySelector(`#rpt-${pe}`);
        if (be) {
          const Pe = be.style.display !== "none";
          be.style.display = Pe ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, Pe ? "\u25B6" : "\u25BC");
        }
      });
    }), xe;
  }
  function Ue(e, x = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(x) : e.toFixed(x);
  }
  function en(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function On(e, x) {
    var _a2;
    const _ = Math.min(x, 12);
    let T = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let U = 0; U < _; U++) {
      T += "<tr>";
      for (let B = 0; B < _; B++) {
        const ne = ((_a2 = e[U]) == null ? void 0 : _a2[B]) ?? 0, V = Math.abs(ne) < 1e-10;
        T += `<td class="${V ? "z" : ""} ${U === B && !V ? "diag" : ""}">${V ? "0" : za(ne)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", x > _ && (T += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${x}\xD7${x})</div>`), T += "</div>", T;
  }
  function za(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Ta() {
    const ne = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (Y) => 1 - 3 * Y ** 2 + 2 * Y ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (Y) => Y * (1 - Y) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (Y) => 3 * Y ** 2 - 2 * Y ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (Y) => Y ** 2 * (Y - 1)
      }
    ];
    let V = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    V += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, V += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', V += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, V += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, V += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const Y of ne) {
      let W = "";
      for (let Ee = 0; Ee <= 80; Ee++) {
        const ge = Ee / 80, ce = 30 + ge * 540, pe = 180 / 2 - Y.fn(ge) * 60;
        W += (Ee === 0 ? "M" : "L") + `${ce.toFixed(1)},${pe.toFixed(1)}`;
      }
      V += `<path d="${W}" fill="none" stroke="${Y.color}" stroke-width="2.5"/>`;
      const xe = 0.75, L = 30 + xe * 540 + 8, ie = 180 / 2 - Y.fn(xe) * 60 - 6;
      V += `<text x="${L}" y="${ie}" fill="${Y.color}" font-size="11" font-weight="bold" font-family="sans-serif">${Y.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function La(e, x) {
    const _ = x * 6, T = Math.min(_, 30);
    let U = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    U += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', U += "<tr><td></td>";
    for (let ne = 0; ne < T; ne++) U += `<td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
    U += "</tr>";
    const B = Array.from({
      length: T
    }, () => Array(T).fill(0));
    for (let ne = 0; ne < e.length; ne++) {
      const V = e[ne].map((Y) => Y * 6);
      for (const Y of V) for (const W of V) for (let xe = 0; xe < 6; xe++) for (let L = 0; L < 6; L++) {
        const ie = Y + xe, Ee = W + L;
        ie < T && Ee < T && B[ie][Ee]++;
      }
    }
    for (let ne = 0; ne < T; ne++) {
      U += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
      for (let V = 0; V < T; V++) {
        const Y = B[ne][V], W = Y === 0 ? "#fff" : Y === 1 ? "#e8f0fe" : Y === 2 ? "#c6dcf5" : "#a0c4e8", xe = Y === 0 ? "" : Y.toString();
        U += `<td style="background:${W};color:#003366">${xe}</td>`;
      }
      U += "</tr>";
    }
    return U += "</table></div>", _ > T && (U += `<div style="color:#888;font-size:9pt">(showing ${T}\xD7${T} of ${_}\xD7${_})</div>`), U;
  }
  let Nn = false;
  function Aa(e) {
    if (Nn || window.katex) {
      Nn = true, e();
      return;
    }
    const x = document.createElement("link");
    x.rel = "stylesheet", x.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(x);
    const _ = document.createElement("script");
    _.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", _.onload = () => {
      Nn = true, e();
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
  function Ca(e, x, _, T, U, B) {
    var _a2, _b, _c, _d, _e2, _f;
    const ne = _[e], V = ne.map((me) => x[me]), Y = ne.length === 2, W = Y ? yo(oo(V[1], V[0])) : 0, xe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, L = ((_b = T.areas) == null ? void 0 : _b.get(e)) ?? 0, ie = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, Ee = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ge = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(e)) ?? 0, ce = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let pe = null, be = null, Pe = null;
    try {
      pe = on(V, T, e), be = nn(V), Pe = Wt(_n(be), Wt(pe, be));
    } catch {
    }
    const Be = Y ? oo(V[1], V[0]) : [
      0,
      0,
      0
    ], Oe = W > 0 ? Be[0] / W : 0, Ve = W > 0 ? Be[1] / W : 0, st = W > 0 ? Be[2] / W : 0, Ye = Math.sqrt(Oe ** 2 + Ve ** 2), Ke = [];
    if ((U == null ? void 0 : U.deformations) && Y) for (const me of ne) {
      const Ne = U.deformations.get(me) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ke.push(...Ne);
    }
    let bt = [], vt = [];
    if (Ke.length === 12 && be && pe) {
      try {
        bt = Wt(be, Ke);
      } catch {
        bt = Array(12).fill(0);
      }
      try {
        vt = Wt(pe, bt);
      } catch {
        vt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: ne,
      elmNodes: V,
      isFrame: Y,
      L: W,
      E: xe,
      A: L,
      Iz: ie,
      Iy: Ee,
      G: ge,
      J: ce,
      kLocal: pe,
      T: be,
      kGlobal: Pe,
      l: Oe,
      m: Ve,
      n: st,
      D: Ye,
      uGlobal: Ke,
      uLocal: bt,
      fLocal: vt,
      dOut: U,
      aOut: B,
      totalNodes: x.length
    };
  }
  function Pa(e, x, _, T, U, B) {
    var _a2, _b;
    const ne = Ca(e, x, _, T, U, B), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = qa + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${ne.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${ne.elem.join(" \u2192 ")} \u2014 L = ${_e(ne.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Fa(ne)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${As(ne)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Oa(ne)}</div>
  `, V.querySelectorAll(".er-tab").forEach((Y) => {
      Y.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((xe) => xe.classList.remove("active")), Y.classList.add("active");
        const W = Y.dataset.tab;
        V.querySelectorAll(".er-body").forEach((xe) => xe.style.display = "none"), V.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a2 = V.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const Y = V.classList.toggle("er-fullscreen-mode"), W = V.querySelector("#er-fullscreen");
      W && (W.textContent = Y ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const Y = V.querySelector("#er-sf-canvas");
      Y && qn(Y);
      const W = V.querySelector("#er-sf-canvas-math");
      W && qn(W);
    }, 50), Aa(() => {
      const Y = V.querySelector("#er-body-math");
      Y && (Y.innerHTML = As(ne)), setTimeout(() => {
        const W = V.querySelector("#er-sf-canvas-math");
        W && qn(W);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const xe = W.dataset.toggle, L = V.querySelector(`#er-${xe}`);
          L && (L.style.display = L.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function Fa(e) {
    let x = "";
    if (x += '<div class="er-section-title">1. Propiedades</div>', x += '<table class="er-props">', x += `<tr><td>E</td><td>${_e(e.E)}</td><td>A</td><td>${_e(e.A)}</td></tr>`, x += `<tr><td>I<sub>z</sub></td><td>${_e(e.Iz)}</td><td>I<sub>y</sub></td><td>${_e(e.Iy)}</td></tr>`, x += `<tr><td>G</td><td>${_e(e.G)}</td><td>J</td><td>${_e(e.J)}</td></tr>`, x += "</table>", e.kLocal && (x += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, x += jo(e.kLocal)), e.T && (x += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', x += jo(e.T)), e.kGlobal && (x += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', x += jo(e.kGlobal)), x += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
        for (let U = 0; U < 6; U++) {
          const B = e.uGlobal[T * 6 + U];
          x += `${_[U]}=<span class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${_e(B, 6)}</span> `;
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
    const _ = (xe) => Ls(xe), T = (xe) => Ls(xe, true);
    x += '<div class="er-section-title">1. Geometria del elemento</div>', x += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", x += `<div class="er-eq">${T("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, x += '<div class="er-eq-num">', x += `${_("\\text{Nodo } i")} = (${e.elmNodes[0].map((xe) => _e(xe)).join(", ")})<br/>`, x += `${_("\\text{Nodo } j")} = (${e.elmNodes[1].map((xe) => _e(xe)).join(", ")})<br/>`, x += `${T(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${_e(e.L)}}`)}`, x += "</div>", x += '<div class="er-section-title">2. Funciones de forma</div>', x += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", x += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', x += `<div class="er-eq">${T("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, x += "<p>Primera derivada:</p>", x += `<div class="er-eq">${T("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, x += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', x += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, x += `<div class="er-eq">${T("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, x += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, x += `<div class="er-eq">${T("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, x += `<div class="er-eq">${T("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, x += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', x += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', x += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", x += `<div class="er-eq">${T("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, x += '<div class="er-subsec">3.1 Deformacion axial</div>', x += `<div class="er-eq">${T("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, x += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, x += `<div class="er-eq">${T("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, x += `<div class="er-eq">${T("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, x += '<div class="er-subsec">3.4 Torsion</div>', x += `<div class="er-eq">${T("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, x += '<div class="er-section-title">4. Relaciones constitutivas D</div>', x += "<p>Cada modo de deformacion tiene su rigidez material:</p>", x += `<div class="er-eq">${T(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${_e(e.E)} \\times ${_e(e.A)} = \\mathbf{${_e(e.E * e.A)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${_e(e.E)} \\times ${_e(e.Iz)} = \\mathbf{${_e(e.E * e.Iz)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${_e(e.E)} \\times ${_e(e.Iy)} = \\mathbf{${_e(e.E * e.Iy)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${_e(e.G)} \\times ${_e(e.J)} = \\mathbf{${_e(e.G * e.J)}}`)}</div>`, x += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, x += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", x += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const U = e.E * e.A / e.L, B = e.E * e.Iz / e.L ** 3, ne = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', x += "<p><b>Paso 1:</b> Funcion de forma axial</p>", x += `<div class="er-eq">${T("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, x += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", x += `<div class="er-eq">${T("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, x += `<div class="er-eq">${T("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.E)}\\times${_e(e.A)}}{${_e(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, x += `<div class="er-eq">${T(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${_e(U)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', x += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, x += `<div class="er-eq">${T("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, x += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", x += `<div class="er-eq">${T("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, x += `<div class="er-eq">${T("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, x += `<div class="er-eq">${T("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, x += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, x += `<div class="er-eq">${T("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${_e(e.E)} \\times ${_e(e.Iz)}}{${_e(e.L)}^3} = \\mathbf{${_e(12 * B)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', x += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', x += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, x += `<div class="er-eq">${T(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.G)}\\times${_e(e.J)}}{${_e(e.L)}} = \\mathbf{${_e(V)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', x += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', x += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, x += `<div class="er-eq">${T("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, x += "</div></div>", x += '<div class="er-subsec">Resumen de coeficientes:</div>', x += `<div class="er-eq">${T(`\\frac{EA}{L} = \\mathbf{${_e(U)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${_e(12 * B)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${_e(12 * ne)}}`)}</div>`, x += `<div class="er-eq">${T(`\\frac{GJ}{L} = \\mathbf{${_e(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${_e(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${_e(4 * e.E * e.Iz / e.L)}}`)}</div>`, x += `<div class="er-eq">${T(`\\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${_e(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (x += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, x += jo(e.kLocal)), x += '<div class="er-section-title">6. Transformacion de coordenadas</div>', x += "<p>Los cosenos directores del eje del elemento:</p>", x += `<div class="er-eq">${T(`l = \\frac{x_j - x_i}{L} = ${tn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${tn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${tn(e.n)}`)}</div>`, x += `<div class="er-eq">${T(`D = \\sqrt{l^2 + m^2} = ${tn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      x += `<p>Caso especial: elemento vertical (${_(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const xe = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      x += `<div class="er-eq">${T(xe)}</div>`;
    } else x += `<div class="er-eq">${T("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    x += `<div class="er-eq er-eq-main">${T("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, x += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, x += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", x += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (x += jo(e.kGlobal)), x += '<div class="er-section-title">8. Ensamblaje</div>';
    const Y = e.elem[0] * 6, W = e.elem[1] * 6;
    if (x += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, x += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, x += `<div class="er-eq">${T("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, x += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', x += `<div class="er-eq">${T("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, x += `<div class="er-eq er-eq-main">${T("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((xe) => xe !== 0)) {
      const xe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      x += '<table class="er-forces"><tr><th></th>';
      for (const L of xe) x += `<th>${L}</th>`;
      x += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let L = 0; L < 6; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let L = 6; L < 12; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += "</tr></table>";
    }
    return x;
  }
  function Oa(e) {
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
        for (let U = 0; U < 6; U++) {
          const B = e.uGlobal[T * 6 + U];
          x += `<td class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${_e(B, 6)}</td>`;
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
  function jo(e) {
    var _a2;
    const x = e.length, _ = Math.min(x, 12);
    let T = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let U = 0; U < _; U++) {
      T += "<tr>";
      for (let B = 0; B < _; B++) {
        const ne = ((_a2 = e[U]) == null ? void 0 : _a2[B]) ?? 0, V = Math.abs(ne) < 1e-10;
        T += `<td class="${V ? "z" : ""} ${U === B && !V ? "diag" : ""}">${V ? "0" : Na(ne)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", x > _ && (T += `<div style="color:var(--fem-label);font-size:9px">(${_}\xD7${_} de ${x}\xD7${x})</div>`), T += "</div>", T;
  }
  function Na(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function qn(e) {
    const x = e.getContext("2d");
    if (!x) return;
    const _ = e.width, T = e.height, U = 30, B = _ - 2 * U, ne = (T - 3 * U) / 2;
    x.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", x.fillRect(0, 0, _, T);
    const V = (Y, W, xe) => {
      x.strokeStyle = "#333", x.lineWidth = 1, x.strokeRect(U, Y, B, ne), x.strokeStyle = "#444", x.beginPath(), x.moveTo(U, Y + ne / 2), x.lineTo(U + B, Y + ne / 2), x.stroke(), x.fillStyle = "#888", x.font = "11px sans-serif", x.fillText(W, U + 4, Y + 14);
      for (const ie of xe) {
        x.strokeStyle = ie.color, x.lineWidth = 2.5, x.beginPath();
        for (let Ee = 0; Ee <= 100; Ee++) {
          const ge = Ee / 100, ce = U + ge * B, pe = Y + ne / 2 - ie.fn(ge) * (ne / 2 * 0.85);
          Ee === 0 ? x.moveTo(ce, pe) : x.lineTo(ce, pe);
        }
        x.stroke();
      }
      let L = U + B - 90;
      for (const ie of xe) x.fillStyle = ie.color, x.font = "bold 10px sans-serif", x.fillText(ie.label, L, Y + ne - 6), L += 36;
      x.fillStyle = "#666", x.font = "9px monospace", x.fillText("0", U, Y + ne + 12), x.fillText("1", U + B - 6, Y + ne + 12), x.fillText("\u03BE", U + B / 2, Y + ne + 12);
    };
    V(U, "Axial (lineal)", [
      {
        fn: (Y) => 1 - Y,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (Y) => Y,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), V(U + ne + U, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (Y) => 1 - 3 * Y * Y + 2 * Y * Y * Y,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (Y) => Y * (1 - Y) * (1 - Y),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (Y) => 3 * Y * Y - 2 * Y * Y * Y,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (Y) => Y * Y * (Y - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const qa = `<style>
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
  let sn = false, $o = null, Yt = null, Lt = null, Mt = null;
  function Ra() {
    Mt = document.createElement("button"), Mt.id = "help-tour-btn", Mt.innerHTML = "?", Mt.title = "Ayuda interactiva \u2014 Tour guiado", Mt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, Mt.addEventListener("mouseenter", () => {
      Mt.style.transform = "scale(1.15)", Mt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Mt.addEventListener("mouseleave", () => {
      Mt.style.transform = "scale(1)", Mt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Mt.addEventListener("click", () => {
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
  `, document.head.appendChild(e), Mt;
  }
  function _a() {
    sn = true, Mt && (Mt.innerHTML = "\u2715", Mt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Mt.style.animation = "none"), $o = document.createElement("div"), $o.id = "tour-overlay", $o.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild($o), Oo(0);
  }
  function Hn() {
    sn = false, Mt && (Mt.innerHTML = "?", Mt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Mt.style.animation = "helpPulse 2s infinite"), Yt && (Yt.remove(), Yt = null), Lt && (Lt.remove(), Lt = null), $o && ($o.remove(), $o = null);
  }
  function Oo(e) {
    var _a2, _b;
    if (e >= Do.length) {
      Ha();
      return;
    }
    const x = Do[e], _ = document.querySelector(x.selector);
    if (!_) {
      Oo(e + 1);
      return;
    }
    _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Yt && Yt.remove(), Lt && Lt.remove();
    const T = _.getBoundingClientRect(), U = window.innerWidth, B = window.innerHeight, ne = 320, V = 180;
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
    const Y = U - T.right, W = T.left, xe = B - T.bottom, L = T.top;
    let ie = x.position || "bottom";
    ie === "bottom" && xe < V + 20 && (ie = "top"), ie === "top" && L < V + 20 && (ie = "right"), ie === "right" && Y < ne + 20 && (ie = "left"), ie === "left" && W < ne + 20 && (ie = "bottom");
    let Ee, ge, ce = "";
    switch (ie) {
      case "bottom":
        Ee = T.left + T.width / 2 - ne / 2, ge = T.bottom + 14, ce = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        Ee = T.left + T.width / 2 - ne / 2, ge = T.top - V - 14, ce = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        Ee = T.right + 14, ge = T.top + T.height / 2 - V / 2, ce = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        Ee = T.left - ne - 14, ge = T.top + T.height / 2 - V / 2, ce = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    Ee = Math.max(10, Math.min(Ee, U - ne - 10)), ge = Math.max(10, Math.min(ge, B - V - 10)), Lt = document.createElement("div"), Lt.style.cssText = `
    position: fixed;
    left: ${Ee}px; top: ${ge}px;
    width: ${ne}px;
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
    <div style="${ce}"></div>
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
      ${Do.map((be, Pe) => `<div style="width:${Pe === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${Pe === e ? "#0099ff" : Pe < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Lt), (_a2 = Lt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Oo(e + 1);
    }), (_b = Lt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Oo(e - 1);
    });
    const pe = (be) => {
      if (!sn) {
        document.removeEventListener("keydown", pe);
        return;
      }
      (be.key === "ArrowRight" || be.key === "Enter") && (Oo(e + 1), document.removeEventListener("keydown", pe)), be.key === "ArrowLeft" && (Oo(Math.max(0, e - 1)), document.removeEventListener("keydown", pe)), be.key === "Escape" && (Hn(), document.removeEventListener("keydown", pe));
    };
    document.addEventListener("keydown", pe);
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
    }, T = [], U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = [], Y = [], W = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), L = [], ie = [];
    let Ee = "", ge = "";
    const ce = /* @__PURE__ */ new Map();
    for (const ye of x) {
      const Me = ye.trim();
      if (!Me || Me.startsWith("$")) {
        Me.startsWith("$ ") && (ge = Me.substring(2).trim());
        continue;
      }
      if (ge && (ce.has(ge) || ce.set(ge, []), ce.get(ge).push(ye)), ge === "CONTROLS") {
        const ae = Me.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ae && (_.force = ae[1], _.length = ae[2]);
        const Ce = Me.match(/TITLE2\s+"([^"]+)"/);
        Ce && (Ee = Ce[1]);
      }
      if (ge === "STORIES - IN SEQUENCE FROM TOP") {
        const ae = Me.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ae) {
          const Ce = ae[1], le = ae[2] ? parseFloat(ae[2]) : 0, ve = ae[3] ? parseFloat(ae[3]) : void 0;
          T.push({
            name: Ce,
            height: le,
            elev: ve ?? 0
          });
        }
      }
      if (ge === "MATERIAL PROPERTIES") {
        const ae = Me.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ae) {
          const Ce = ae[1];
          U.has(Ce) || U.set(Ce, {
            type: ae[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const le = U.get(Ce);
          ae[2] && (le.type = ae[2]);
          const ve = Me.match(/\bE\s+([\d.eE+-]+)/);
          ve && (le.E = parseFloat(ve[1]));
          const Re = Me.match(/\bU\s+([\d.eE+-]+)/);
          Re && (le.nu = parseFloat(Re[1]), le.G = le.E / (2 * (1 + le.nu)));
          const Te = Me.match(/\bFY\s+([\d.eE+-]+)/);
          Te && (le.fy = parseFloat(Te[1]));
          const ot = Me.match(/\bFC\s+([\d.eE+-]+)/);
          ot && (le.fc = parseFloat(ot[1]));
          const qe = Me.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          qe && (le.density = parseFloat(qe[1]));
        }
      }
      if (ge === "FRAME SECTIONS") {
        const ae = Me.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ae) {
          const Ce = ae[1];
          B.has(Ce) || B.set(Ce, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const le = B.get(Ce), ve = Me.match(/MATERIAL\s+"([^"]+)"/);
          ve && (le.material = ve[1]);
          const Re = Me.match(/SHAPE\s+"([^"]+)"/);
          Re && (le.shape = Re[1]);
          const Te = Me.match(/\bD\s+([\d.eE+-]+)/);
          Te && (le.D = parseFloat(Te[1]));
          const ot = Me.match(/\bB\s+([\d.eE+-]+)/);
          ot && (le.B = parseFloat(ot[1]));
          const qe = Me.match(/\bTF\s+([\d.eE+-]+)/);
          qe && (le.TF = parseFloat(qe[1]));
          const Fe = Me.match(/\bTW\s+([\d.eE+-]+)/);
          Fe && (le.TW = parseFloat(Fe[1]));
          const Qe = Me.match(/\bR\s+([\d.eE+-]+)/);
          Qe && (le.R = parseFloat(Qe[1]));
          const Ge = Me.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ge && (le.fillMaterial = Ge[1]);
          const rt = Me.match(/I2MOD\s+([\d.eE+-]+)/);
          rt && (le.modI2 = parseFloat(rt[1]));
          const Ct = Me.match(/I3MOD\s+([\d.eE+-]+)/);
          Ct && (le.modI3 = parseFloat(Ct[1]));
        }
      }
      if (ge === "POINT COORDINATES") {
        const ae = Me.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ae && ne.set(ae[1], [
          parseFloat(ae[2]),
          parseFloat(ae[3])
        ]);
      }
      if (ge === "LINE CONNECTIVITIES") {
        const ae = Me.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ae && V.push({
          name: ae[1],
          type: ae[2],
          pt1: ae[3],
          pt2: ae[4],
          nStories: parseInt(ae[5])
        });
      }
      if (ge === "POINT ASSIGNS") {
        const ae = Me.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ae && W.set(`${ae[1]}@${ae[2]}`, ae[3].split(/\s+/));
      }
      if (ge === "LINE ASSIGNS") {
        const ae = Me.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ae) {
          const Ce = {
            story: ae[2],
            section: ae[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, le = Me.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          le && (Ce.rigidZone = parseFloat(le[1]));
          const ve = Me.match(/RELEASE\s+"([^"]+)"/);
          ve && (Ce.releases = ve[1].split(/\s+/));
          const Re = Me.match(/ANG\s+([-\d.eE+]+)/);
          Re && (Ce.angle = parseFloat(Re[1])), xe.set(`${ae[1]}@${ae[2]}`, Ce);
        }
      }
      if (ge === "GRIDS") {
        const ae = Me.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ae && ie.push({
          label: ae[1],
          dir: ae[2],
          coord: parseFloat(ae[3])
        });
      }
      if (ge === "FRAME OBJECT LOADS") {
        const ae = Me.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ae && L.push({
          line: ae[1],
          story: ae[2],
          type: ae[3],
          dir: ae[4],
          lc: ae[5],
          val: parseFloat(ae[6])
        });
      }
      if (ge === "AREA CONNECTIVITIES") {
        const ae = Me.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ae) {
          const Ce = ((_a2 = ae[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((le) => le.replace(/"/g, ""))) || [];
          Y.push({
            name: ae[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const pe = /* @__PURE__ */ new Map();
    if (T.length > 0) {
      const ye = T.length - 1;
      pe.set(T[ye].name, T[ye].elev);
      for (let Me = ye - 1; Me >= 0; Me--) {
        const Ce = pe.get(T[Me + 1].name) + T[Me].height;
        T[Me].elev = Ce, pe.set(T[Me].name, Ce);
      }
    }
    const be = [], Pe = [], Be = /* @__PURE__ */ new Map(), Oe = (ye, Me) => `${ye}@${Me}`, Ve = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const ye of V) st.set(ye.name, ye);
    for (const ye of V) for (const [Me, ae] of xe) {
      if (!Me.startsWith(ye.name + "@")) continue;
      const Ce = ae.story, le = T.findIndex((ve) => ve.name === Ce);
      if (!(le < 0)) if (ye.type === "COLUMN" || ye.type === "BRACE") {
        Ve.add(Oe(ye.pt2, Ce));
        const ve = Math.max(ye.nStories, 1), Re = Math.min(le + ve, T.length - 1);
        Ve.add(Oe(ye.pt1, T[Re].name));
      } else Ve.add(Oe(ye.pt1, Ce)), Ve.add(Oe(ye.pt2, Ce));
    }
    for (const [ye] of W) Ve.add(ye);
    for (const ye of Ve) {
      const [Me, ae] = ye.split("@"), Ce = ne.get(Me), le = pe.get(ae);
      Ce === void 0 || le === void 0 || (be.push([
        Ce[0],
        Ce[1],
        le
      ]), Pe.push(ye), Be.set(ye, be.length - 1));
    }
    const Ye = [], Ke = [], bt = [], vt = [], me = /* @__PURE__ */ new Map();
    for (const ye of V) for (const [Me, ae] of xe) {
      if (!Me.startsWith(ye.name + "@")) continue;
      const Ce = ae.story, le = T.findIndex((Fe) => Fe.name === Ce);
      if (le < 0) continue;
      let ve, Re;
      if (ye.type === "COLUMN" || ye.type === "BRACE") {
        const Fe = Math.max(ye.nStories, 1), Qe = Math.min(le + Fe, T.length - 1);
        ve = Oe(ye.pt1, T[Qe].name), Re = Oe(ye.pt2, Ce);
      } else ve = Oe(ye.pt1, Ce), Re = Oe(ye.pt2, Ce);
      const Te = Be.get(ve), ot = Be.get(Re);
      if (Te === void 0 || ot === void 0 || Te === ot) continue;
      const qe = Ye.length;
      if (Ye.push([
        Te,
        ot
      ]), Ke.push(ye.name), bt.push(ye.type), vt.push(Ce), me.set(qe, ae.section), ae.rigidZone > 0 && it.set(qe, [
        ae.rigidZone,
        ae.rigidZone
      ]), ae.releases.length > 0) {
        const Fe = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const Qe of ae.releases) Qe === "TI" && (Fe[0] = true), Qe === "M2I" && (Fe[1] = true), Qe === "M3I" && (Fe[2] = true), Qe === "TJ" && (Fe[3] = true), Qe === "M2J" && (Fe[4] = true), Qe === "M3J" && (Fe[5] = true);
        at.set(qe, Fe);
      }
    }
    const Ne = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map();
    for (const [ye, Me] of me) {
      const ae = B.get(Me);
      if (!ae) continue;
      const Ce = U.get(ae.material);
      Ce && (Ne.set(ye, Ce.E), He.set(ye, Ce.G));
      const le = ae.D, ve = ae.B, Re = ae.TF, Te = ae.TW;
      let ot = 0, qe = 0, Fe = 0, Qe = 0, Ge = 0, rt = 0, Ct = "rect";
      switch (ae.shape) {
        case "Concrete Rectangular":
          ot = le * ve, qe = ve * le ** 3 / 12, Fe = le * ve ** 3 / 12, Qe = ve * le ** 3 * (1 / 3 - 0.21 * (le / ve) * (1 - le ** 4 / (12 * ve ** 4))), Ge = rt = 5 / 6 * ot, Ct = "rect";
          break;
        case "Concrete Circle":
          ot = Math.PI * le ** 2 / 4, qe = Fe = Math.PI * le ** 4 / 64, Qe = Math.PI * le ** 4 / 32, Ge = rt = 0.9 * ot, Ct = "circ";
          break;
        case "Steel I/Wide Flange":
          ot = 2 * ve * Re + (le - 2 * Re) * Te, qe = (ve * le ** 3 - (ve - Te) * (le - 2 * Re) ** 3) / 12, Fe = (2 * Re * ve ** 3 + (le - 2 * Re) * Te ** 3) / 12, Qe = (2 * ve * Re ** 3 + (le - 2 * Re) * Te ** 3) / 3, Ge = (le - 2 * Re) * Te, rt = 2 * ve * Re * 5 / 6, Ct = "I";
          break;
        case "Steel Tube":
          ot = le * ve - (le - 2 * Te) * (ve - 2 * Te), qe = (ve * le ** 3 - (ve - 2 * Te) * (le - 2 * Te) ** 3) / 12, Fe = (le * ve ** 3 - (le - 2 * Te) * (ve - 2 * Te) ** 3) / 12, Qe = 2 * Te * (le - Te) * (ve - Te) * ((le - Te) * (ve - Te)) / (le - Te + (ve - Te)), Ge = 2 * le * Te, rt = 2 * ve * Te, Ct = "HSS";
          break;
        case "Filled Steel Tube":
          ot = le * ve, qe = ve * le ** 3 / 12, Fe = le * ve ** 3 / 12, Qe = 2 * Te * (le - Te) * (ve - Te) * ((le - Te) * (ve - Te)) / (le - Te + (ve - Te)), Ge = 2 * le * Te + 5 / 6 * (le - 2 * Te) * (ve - 2 * Te), rt = 2 * ve * Te + 5 / 6 * (le - 2 * Te) * (ve - 2 * Te), Ct = "CFT";
          break;
        case "Steel Angle": {
          const Ot = Re || Te;
          ot = Ot * (le + ve - Ot), qe = Ot * (le ** 3 + ve * Ot ** 2 + Ot ** 2 * (le - Ot)) / 12, Fe = Ot * (ve ** 3 + le * Ot ** 2 + Ot ** 2 * (ve - Ot)) / 12, Qe = (le + ve - Ot) * Ot ** 3 / 3, Ge = le * Ot, rt = ve * Ot, Ct = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ot = 2 * ve * Re + (le - 2 * Re) * Te, qe = (Te * le ** 3 + 2 * ve * Re * (le - Re) ** 2) / 12, Fe = (2 * Re * ve ** 3 + (le - 2 * Re) * Te ** 3) / 12, Qe = (2 * ve * Re ** 3 + (le - 2 * Re) * Te ** 3) / 3, Ge = (le - 2 * Re) * Te, rt = 2 * ve * Re * 5 / 6, Ct = ae.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ot = 2 * (2 * ve * Re + (le - 2 * Re) * Te), qe = 2 * (Te * le ** 3 + 2 * ve * Re * (le - Re) ** 2) / 12, Fe = 2 * (2 * Re * ve ** 3 + (le - 2 * Re) * Te ** 3) / 12, Qe = 2 * (2 * ve * Re ** 3 + (le - 2 * Re) * Te ** 3) / 3, Ge = 2 * (le - 2 * Re) * Te, rt = 4 * ve * Re * 5 / 6, Ct = "2C";
          break;
        default:
          le > 0 && ve > 0 && (ot = le * ve, qe = ve * le ** 3 / 12, Fe = le * ve ** 3 / 12, Qe = Math.min(le, ve) * Math.max(le, ve) ** 3 / 3 * 0.3, Ge = rt = 5 / 6 * ot);
          break;
      }
      ae.modI2 && (Fe *= ae.modI2), ae.modI3 && (qe *= ae.modI3), et.set(ye, ot), yt.set(ye, qe), It.set(ye, Fe), lt.set(ye, Qe), Ge > 0 && Ze.set(ye, Ge), rt > 0 && De.set(ye, rt), At.set(ye, {
        type: Ct,
        b: ve || void 0,
        h: le || void 0,
        d: Ct === "circ" || Ct === "pipe" ? le : void 0,
        tw: Te || void 0,
        tf: Re || void 0,
        r: ae.R,
        name: Me
      });
    }
    const kt = /* @__PURE__ */ new Map();
    for (const [ye, Me] of W) {
      const ae = Be.get(ye);
      if (ae === void 0) continue;
      const Ce = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const le of Me) le === "UX" && (Ce[0] = true), le === "UY" && (Ce[1] = true), le === "UZ" && (Ce[2] = true), le === "RX" && (Ce[3] = true), le === "RY" && (Ce[4] = true), le === "RZ" && (Ce[5] = true);
      kt.set(ae, Ce);
    }
    const Le = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map();
    for (let ye = 0; ye < Ke.length; ye++) wt.set(`${Ke[ye]}@${vt[ye]}`, ye);
    for (const ye of L) {
      const Me = wt.get(`${ye.line}@${ye.story}`);
      if (Me === void 0) continue;
      const [ae, Ce] = Ye[Me], le = be[ae], ve = be[Ce], Re = Math.sqrt((ve[0] - le[0]) ** 2 + (ve[1] - le[1]) ** 2 + (ve[2] - le[2]) ** 2);
      if (Re < 1e-10) continue;
      const Te = ye.val * Re / 2;
      let ot = 0, qe = 0, Fe = 0;
      ye.dir === "GRAV" || ye.dir === "GRAVITY" ? Fe = -Te : ye.dir === "X" ? ot = Te : ye.dir === "Y" ? qe = Te : ye.dir === "Z" && (Fe = -Te);
      for (const Qe of [
        ae,
        Ce
      ]) {
        const Ge = Le.get(Qe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ge[0] += ot, Ge[1] += qe, Ge[2] += Fe, Le.set(Qe, Ge);
      }
    }
    const ht = /* @__PURE__ */ new Map();
    for (const [ye, Me] of me) {
      const ae = B.get(Me);
      if (!ae) continue;
      const Ce = U.get(ae.material);
      (Ce == null ? void 0 : Ce.density) && ht.set(ye, Ce.density);
    }
    return {
      units: _,
      stories: T.reverse(),
      materials: U,
      frameSections: B,
      nodes: be,
      nodeNames: Pe,
      nodeNameToIdx: Be,
      elements: Ye,
      elementNames: Ke,
      elementTypes: bt,
      elementStories: vt,
      elementSections: me,
      nodeInputs: {
        supports: kt,
        loads: Le
      },
      elementInputs: {
        elasticities: Ne,
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
      grids: ie,
      info: {
        nNodes: be.length,
        nFrames: Ye.length,
        nAreas: Y.length,
        title: Ee
      },
      rawSections: ce
    };
  }
  function Da(e) {
    const { e2kModel: x } = e, _ = x == null ? void 0 : x.rawSections;
    return _ && _.size > 0 ? ja(_) : Wa(e);
  }
  function ja(e, x) {
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
    for (const U of T) {
      const B = e.get(U);
      if (!(!B || B.length === 0)) {
        _.push(`$ ${U}`);
        for (const ne of B) _.push(ne);
        _.push("");
      }
    }
    for (const [U, B] of e) if (!T.includes(U) && B.length !== 0) {
      _.push(`$ ${U}`);
      for (const ne of B) _.push(ne);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function Wa(e) {
    var _a2, _b, _c, _d;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: U, title: B, units: ne } = e, V = (ne == null ? void 0 : ne.force) || "TONF", Y = (ne == null ? void 0 : ne.length) || "M", W = [], xe = (me) => Math.round(me * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${V}"  "${Y}"  "C"  `), B && W.push(`  TITLE2  "${B}"  `), W.push("");
    const L = /* @__PURE__ */ new Set();
    x.forEach((me) => L.add(xe(me[1])));
    const ie = [
      ...L
    ].sort((me, Ne) => me - Ne), Ee = [], ge = /* @__PURE__ */ new Map();
    Ee.push("Base"), ge.set(ie[0], "Base");
    for (let me = 1; me < ie.length; me++) {
      const Ne = `Level_${me}`;
      Ee.push(Ne), ge.set(ie[me], Ne);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let me = ie.length - 1; me >= 1; me--) W.push(`  STORY "${Ee[me]}"  HEIGHT ${xe(ie[me] - ie[me - 1])} MASTERSTORY "Yes"  `);
    ie.length > 0 && W.push(`  STORY "Base"  ELEV ${ie[0]} `), W.push(""), _.some((me) => me.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const pe = /* @__PURE__ */ new Set();
    (_a2 = U.elasticities) == null ? void 0 : _a2.forEach((me) => pe.add(me));
    const be = /* @__PURE__ */ new Map();
    let Pe = 0;
    for (const me of pe) {
      const Ne = `Mat_${++Pe}`;
      be.set(me, Ne), W.push(`  MATERIAL  "${Ne}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Ne}"    SYMTYPE "Isotropic"  E ${me}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const Be = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
    _.forEach((me, Ne) => {
      var _a3, _b2;
      if (me.length !== 2) return;
      const He = (_a3 = U.sectionShapes) == null ? void 0 : _a3.get(Ne), et = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(Ne)) ?? 0, Ze = be.get(et) || "Mat_1", De = (He == null ? void 0 : He.h) ?? 0, it = (He == null ? void 0 : He.b) ?? 0, at = (He == null ? void 0 : He.d) ?? 0, yt = (He == null ? void 0 : He.tf) ?? 0, It = (He == null ? void 0 : He.tw) ?? 0, lt = (He == null ? void 0 : He.type) || "rect", At = `${lt}_${De}_${it}_${at}_${yt}_${It}`;
      (He == null ? void 0 : He.name) && !Ve.has(At) && Ve.set(At, He.name);
      let kt = Ve.get(At);
      if (kt || (lt === "rect" ? kt = `R${xe(it * 100)}x${xe(De * 100)}` : lt === "circ" ? kt = `C_D${xe(at * 100)}` : lt === "I" ? kt = `I_${xe(De * 100)}` : kt = `Sec_${Be.size + 1}`, Ve.set(At, kt)), Oe.set(Ne, kt), Be.has(kt)) return;
      Be.add(kt);
      const wt = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[lt] || "Concrete Rectangular";
      let ht = `  FRAMESECTION  "${kt}"  MATERIAL "${Ze}"  SHAPE "${wt}"`;
      De && (ht += `  D ${De}`), it && (ht += `  B ${it}`), at && !De && (ht += `  D ${at}`), yt && (ht += `  TF ${yt}`), It && (ht += `  TW ${It}`), W.push(ht);
    }), W.push("");
    const st = /* @__PURE__ */ new Map();
    let Ye = 0;
    x.forEach((me) => {
      const Ne = `${xe(me[0])},${xe(me[2])}`;
      st.has(Ne) || st.set(Ne, `${++Ye}`);
    }), W.push("$ POINT COORDINATES");
    for (const [me, Ne] of st) {
      const [He, et] = me.split(",").map(Number);
      W.push(`  POINT "${Ne}"  ${He} ${et} `);
    }
    W.push("");
    const Ke = (me) => {
      const Ne = x[me], He = `${xe(Ne[0])},${xe(Ne[2])}`;
      return {
        pt: st.get(He) || "1",
        story: ge.get(xe(Ne[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const bt = [];
    _.forEach((me, Ne) => {
      if (me.length !== 2) return;
      const He = Ya(x, me), et = Oe.get(Ne) || `Sec_${Ne}`;
      if (He === "BEAM") {
        const Ze = Ke(me[0]), De = Ke(me[1]);
        W.push(`  LINE  "E${Ne + 1}"  BEAM  "${Ze.pt}"  "${De.pt}"  0`), bt.push(`  LINEASSIGN  "E${Ne + 1}"  "${Ze.story}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const Ze = x[me[0]][1] <= x[me[1]][1] ? me[0] : me[1], De = x[me[0]][1] <= x[me[1]][1] ? me[1] : me[0];
        Ke(Ze);
        const it = Ke(De), at = xe(x[Ze][1]), yt = xe(x[De][1]), It = ie.indexOf(at), lt = ie.indexOf(yt), At = Math.max(1, lt >= 0 && It >= 0 ? lt - It : 1);
        W.push(`  LINE  "E${Ne + 1}"  ${He}  "${it.pt}"  "${it.pt}"  ${At}`);
        for (let kt = 0; kt < At; kt++) {
          const Le = lt - kt;
          Le >= 0 && Le < Ee.length && bt.push(`  LINEASSIGN  "E${Ne + 1}"  "${Ee[Le]}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = T.supports) == null ? void 0 : _b.forEach((me, Ne) => {
      const He = [];
      if (me[0] && He.push("UX"), me[1] && He.push("UY"), me[2] && He.push("UZ"), me[3] && He.push("RX"), me[4] && He.push("RY"), me[5] && He.push("RZ"), He.length > 0) {
        const et = Ke(Ne);
        W.push(`  POINTASSIGN  "${et.pt}"  "${et.story}"  RESTRAINT "${He.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), bt.forEach((me) => W.push(me)), W.push("");
    const vt = [];
    if (_.forEach((me, Ne) => {
      if (me.length === 4) {
        const He = x[me[0]], et = x[me[1]], Ze = x[me[2]], De = [
          et[0] - He[0],
          et[1] - He[1],
          et[2] - He[2]
        ], it = [
          Ze[0] - He[0],
          Ze[1] - He[1],
          Ze[2] - He[2]
        ], at = Math.abs(De[2] * it[0] - De[0] * it[2]), yt = Math.sqrt((De[1] * it[2] - De[2] * it[1]) ** 2 + at ** 2 + (De[0] * it[1] - De[1] * it[0]) ** 2), It = yt > 1e-10 && at / yt < 0.5;
        vt.push({
          idx: Ne,
          el: me,
          isWall: It
        });
      }
    }), vt.some((me) => !me.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const me = ((_c = U.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${be.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${me} `), W.push("");
    }
    if (vt.some((me) => me.isWall)) {
      W.push("$ WALL PROPERTIES");
      const me = ((_d = U.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${be.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${me} `), W.push("");
    }
    if (vt.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const me = [];
      vt.forEach((Ne, He) => {
        const { el: et, isWall: Ze } = Ne, De = Ze ? `W${He + 1}` : `F${He + 1}`, it = Ze ? "PANEL" : "FLOOR", at = et.map((yt) => Ke(yt));
        if (Ze) {
          const yt = x[et[0]][1] <= x[et[2]][1] ? 0 : 2, It = x[et[1]][1] <= x[et[3]][1] ? 1 : 3;
          W.push(`  AREA "${De}"  ${it}  4  "${at[yt].pt}"  "${at[It].pt}"  "${at[It].pt}"  "${at[yt].pt}"  1  1  0  0  `);
          const lt = at[yt === 0 ? 2 : 0].story;
          me.push(`  AREAASSIGN  "${De}"  "${lt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${De}"  ${it}  4  "${at[0].pt}"  "${at[1].pt}"  "${at[2].pt}"  "${at[3].pt}"  0  0  0  0  `), me.push(`  AREAASSIGN  "${De}"  "${at[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), me.forEach((Ne) => W.push(Ne)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), T.loads && T.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), T.loads.forEach((me, Ne) => {
      const [He, et, Ze] = me, De = Ke(Ne);
      Math.abs(He) > 1e-10 && W.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FX ${He}`), Math.abs(et) > 1e-10 && W.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FY ${et}`), Math.abs(Ze) > 1e-10 && W.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FZ ${Ze}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Ya(e, x) {
    const _ = e[x[0]], T = e[x[1]], U = Math.abs(T[1] - _[1]), B = Math.sqrt((T[0] - _[0]) ** 2 + (T[2] - _[2]) ** 2), ne = U > B * 0.5;
    return ne && B > 0.01 ? "BRACE" : ne ? "COLUMN" : "BEAM";
  }
  function Ga(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: U } = e, B = [];
    return B.push("# OpenSeesPy model exported from Awatif FEM Studio"), B.push(`# ${x.length} nodes, ${_.length} elements`), B.push(""), B.push("import openseespy.opensees as ops"), B.push(""), B.push("ops.wipe()"), B.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), B.push(""), B.push("# --- Nodes ---"), x.forEach((ne, V) => {
      B.push(`ops.node(${V + 1}, ${ne[0]}, ${ne[1]}, ${ne[2]})`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a2 = T.supports) == null ? void 0 : _a2.forEach((ne, V) => {
      const Y = ne.map((W) => W ? 1 : 0).join(", ");
      B.push(`ops.fix(${V + 1}, ${Y})`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), B.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), B.push(""), B.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((ne, V) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (ne.length !== 2) return;
      const Y = x[ne[0]], W = x[ne[1]], L = Math.abs(W[2] - Y[2]) > Math.max(Math.abs(W[0] - Y[0]), Math.abs(W[1] - Y[1])) ? 2 : 1, ie = ((_a3 = U.areas) == null ? void 0 : _a3.get(V)) ?? 1, Ee = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ge = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ce = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, pe = ((_e2 = U.momentsOfInertiaY) == null ? void 0 : _e2.get(V)) ?? 1, be = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      B.push(`ops.element('elasticBeamColumn', ${V + 1}, ${ne[0] + 1}, ${ne[1] + 1}, ${ie}, ${Ee}, ${ge}, ${ce}, ${pe}, ${be}, ${L})`);
    }), B.push(""), T.loads && T.loads.size > 0 && (B.push("# --- Loads ---"), B.push("ops.timeSeries('Linear', 1)"), B.push("ops.pattern('Plain', 1, 1)"), T.loads.forEach((ne, V) => {
      const Y = ne.map((W) => W).join(", ");
      B.push(`ops.load(${V + 1}, ${Y})`);
    }), B.push("")), B.push("# --- Analysis ---"), B.push("ops.system('BandGeneral')"), B.push("ops.numberer('RCM')"), B.push("ops.constraints('Plain')"), B.push("ops.integrator('LoadControl', 1.0)"), B.push("ops.algorithm('Linear')"), B.push("ops.analysis('Static')"), B.push("ops.analyze(1)"), B.push(""), B.push("# --- Results ---"), B.push('print("\\n=== Displacements ===")'), x.forEach((ne, V) => {
      B.push(`print(f"Node {${V + 1}}: {ops.nodeDisp(${V + 1})}")`);
    }), B.push(""), B.push('print("\\n=== Reactions ===")'), B.push("ops.reactions()"), (_b = T.supports) == null ? void 0 : _b.forEach((ne, V) => {
      B.push(`print(f"Node {${V + 1}}: {ops.nodeReaction(${V + 1})}")`);
    }), B.join(`
`);
  }
  function Ja(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: U } = e, B = [];
    return B.push("# OpenSees Tcl model exported from Awatif FEM Studio"), B.push(`# ${x.length} nodes, ${_.length} elements`), B.push(""), B.push("wipe"), B.push("model basic -ndm 3 -ndf 6"), B.push(""), B.push("# --- Nodes ---"), x.forEach((ne, V) => {
      B.push(`node ${V + 1} ${ne[0]} ${ne[1]} ${ne[2]}`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a2 = T.supports) == null ? void 0 : _a2.forEach((ne, V) => {
      const Y = ne.map((W) => W ? 1 : 0).join(" ");
      B.push(`fix ${V + 1} ${Y}`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("geomTransf Linear 1 0.0 0.0 1.0"), B.push("geomTransf Linear 2 -1.0 0.0 0.0"), B.push(""), B.push("# --- Elements ---"), _.forEach((ne, V) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (ne.length !== 2) return;
      const Y = x[ne[0]], W = x[ne[1]], L = Math.abs(W[2] - Y[2]) > Math.max(Math.abs(W[0] - Y[0]), Math.abs(W[1] - Y[1])) ? 2 : 1, ie = ((_a3 = U.areas) == null ? void 0 : _a3.get(V)) ?? 1, Ee = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ge = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ce = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, pe = ((_e2 = U.momentsOfInertiaY) == null ? void 0 : _e2.get(V)) ?? 1, be = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      B.push(`element elasticBeamColumn ${V + 1} ${ne[0] + 1} ${ne[1] + 1} ${ie} ${Ee} ${ge} ${ce} ${pe} ${be} ${L}`);
    }), B.push(""), T.loads && T.loads.size > 0 && (B.push("# --- Loads ---"), B.push("timeSeries Linear 1"), B.push("pattern Plain 1 1 {"), T.loads.forEach((ne, V) => {
      const Y = ne.map((W) => W).join(" ");
      B.push(`  load ${V + 1} ${Y}`);
    }), B.push("}"), B.push("")), B.push("# --- Analysis ---"), B.push("system BandGeneral"), B.push("numberer RCM"), B.push("constraints Plain"), B.push("integrator LoadControl 1.0"), B.push("algorithm Linear"), B.push("analysis Static"), B.push("analyze 1"), B.push(""), B.push("# --- Results ---"), B.push('puts "\\n=== Displacements ==="'), x.forEach((ne, V) => {
      B.push(`puts "Node ${V + 1}: [nodeDisp ${V + 1}]"`);
    }), B.push('puts "\\n=== Reactions ==="'), B.push("reactions"), (_b = T.supports) == null ? void 0 : _b.forEach((ne, V) => {
      B.push(`puts "Node ${V + 1}: [nodeReaction ${V + 1}]"`);
    }), B.join(`
`);
  }
  function Va(e) {
    const x = [], _ = [], T = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const Ee of e.split(/\r?\n/)) {
      const ge = Ee.trim(), ce = ge.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const Be = parseInt(ce[1]), Oe = x.length;
        x.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), L.set(Be, Oe);
        continue;
      }
      const pe = ge.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (pe) {
        const Be = parseInt(pe[1]), Oe = L.get(Be);
        Oe !== void 0 && T.set(Oe, [
          pe[2] === "1",
          pe[3] === "1",
          pe[4] === "1",
          pe[5] === "1",
          pe[6] === "1",
          pe[7] === "1"
        ]);
        continue;
      }
      const be = ge.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (be) {
        const Be = parseInt(be[1]), Oe = L.get(parseInt(be[2])), Ve = L.get(parseInt(be[3]));
        if (Oe !== void 0 && Ve !== void 0) {
          const st = _.length;
          _.push([
            Oe,
            Ve
          ]), ie.set(Be, st), V.set(st, parseFloat(be[4])), B.set(st, parseFloat(be[5])), ne.set(st, parseFloat(be[6])), xe.set(st, parseFloat(be[7])), Y.set(st, parseFloat(be[8])), W.set(st, parseFloat(be[9]));
        }
        continue;
      }
      const Pe = ge.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Pe) {
        const Be = L.get(parseInt(Pe[1]));
        Be !== void 0 && U.set(Be, [
          parseFloat(Pe[2]),
          parseFloat(Pe[3]),
          parseFloat(Pe[4]),
          parseFloat(Pe[5]),
          parseFloat(Pe[6]),
          parseFloat(Pe[7])
        ]);
      }
    }
    return {
      nodes: x,
      elements: _,
      nodeInputs: {
        supports: T,
        loads: U
      },
      elementInputs: {
        elasticities: B,
        shearModuli: ne,
        areas: V,
        momentsOfInertiaY: Y,
        momentsOfInertiaZ: W,
        torsionalConstants: xe
      }
    };
  }
  function Xa(e) {
    const x = [], _ = [], T = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
    for (const ie of e.split(/\r?\n/)) {
      const Ee = ie.trim();
      if (Ee.startsWith("#") || Ee.startsWith("//")) continue;
      const ge = Ee.split(/\s+/);
      if (ge[0] === "node" && ge.length >= 5) {
        const ce = parseInt(ge[1]), pe = x.length;
        x.push([
          parseFloat(ge[2]),
          parseFloat(ge[3]),
          parseFloat(ge[4])
        ]), L.set(ce, pe);
        continue;
      }
      if (ge[0] === "fix" && ge.length >= 8) {
        const ce = L.get(parseInt(ge[1]));
        ce !== void 0 && T.set(ce, [
          ge[2] === "1",
          ge[3] === "1",
          ge[4] === "1",
          ge[5] === "1",
          ge[6] === "1",
          ge[7] === "1"
        ]);
        continue;
      }
      if (ge[0] === "element" && ge[1] === "elasticBeamColumn" && ge.length >= 12) {
        const ce = L.get(parseInt(ge[3])), pe = L.get(parseInt(ge[4]));
        if (ce !== void 0 && pe !== void 0) {
          const be = _.length;
          _.push([
            ce,
            pe
          ]), V.set(be, parseFloat(ge[5])), B.set(be, parseFloat(ge[6])), ne.set(be, parseFloat(ge[7])), xe.set(be, parseFloat(ge[8])), Y.set(be, parseFloat(ge[9])), W.set(be, parseFloat(ge[10]));
        }
        continue;
      }
      if (ge[0] === "load" && ge.length >= 8) {
        const ce = L.get(parseInt(ge[1]));
        ce !== void 0 && U.set(ce, [
          parseFloat(ge[2]),
          parseFloat(ge[3]),
          parseFloat(ge[4]),
          parseFloat(ge[5]),
          parseFloat(ge[6]),
          parseFloat(ge[7])
        ]);
      }
    }
    return {
      nodes: x,
      elements: _,
      nodeInputs: {
        supports: T,
        loads: U
      },
      elementInputs: {
        elasticities: B,
        shearModuli: ne,
        areas: V,
        momentsOfInertiaY: Y,
        momentsOfInertiaZ: W,
        torsionalConstants: xe
      }
    };
  }
  Cs = Po.state(false);
  ol = function(e) {
    e.nodeInputs || (e.nodeInputs = Po.state({})), e.elementInputs || (e.elementInputs = Po.state({})), e.deformOutputs || (e.deformOutputs = Po.state({})), e.analyzeOutputs || (e.analyzeOutputs = Po.state({}));
    let x = "tonf", _ = "m", T = vo(x, _), U = {
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
    }, ne = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    let Y = false;
    const W = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Map();
    let L = "", ie = {}, Ee = null, ge = "", ce = [], pe = [], be = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), st = null, Ye = [], Ke = 0.2, bt = 2, vt = 2, me = false, Ne = 2, He = "x", et = /* @__PURE__ */ new Set(), Ze = true, De = 0.15, it = 2, at = 2, yt = /* @__PURE__ */ new Set(), It = false, lt = "perimeter";
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
    }), Le = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let wt = 0, ht = 3, ye = false, Me = 0, ae = null, Ce = 0, le = [], ve = 1, Re = true;
    const Te = Ia();
    Te.div.style.display = "none";
    function ot() {
      const t = Ko()[L];
      return t && t[wt] ? t[wt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let qe = [], Fe = [], Qe = 0, Ge = [], rt = null;
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
    function Ot(t, o, n, l, s) {
      Ct();
      const c = tt();
      if (!c) return;
      rt = new Vo(), rt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), p = Math.min(...o), d = Math.max(...o), i = Math.max(...n), b = r - a || 1, M = d - p || 1, w = 3359829, v = 2241348;
      for (const g of n) {
        for (const S of o) {
          const I = new jt().setFromPoints([
            new ke(a, g, S),
            new ke(r, g, S)
          ]), k = new To({
            color: w,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new go(I, k);
          O.computeLineDistances(), O.renderOrder = -10, rt.add(O);
        }
        for (const S of t) {
          const I = new jt().setFromPoints([
            new ke(S, g, p),
            new ke(S, g, d)
          ]), k = new To({
            color: w,
            dashSize: M * 0.015,
            gapSize: M * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new go(I, k);
          O.computeLineDistances(), O.renderOrder = -10, rt.add(O);
        }
      }
      for (const g of t) for (const S of o) {
        const I = new jt().setFromPoints([
          new ke(g, 0, S),
          new ke(g, i, S)
        ]), k = new To({
          color: v,
          dashSize: i * 0.01,
          gapSize: i * 8e-3,
          transparent: true,
          opacity: 0.15
        }), O = new go(I, k);
        O.computeLineDistances(), O.renderOrder = -10, rt.add(O);
      }
      const f = Math.min(b, M) * 0.015;
      for (const g of n) for (const S of t) for (const I of o) {
        const k = [
          new ke(S - f, g, I),
          new ke(S + f, g, I),
          new ke(S, g, I - f),
          new ke(S, g, I + f)
        ], O = new jt().setFromPoints(k), N = new Ao({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), h = new Lo(O, N);
        h.renderOrder = -5, rt.add(h);
      }
      rt.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
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
    function No(t, o, n, l, s) {
      Bn();
      const c = tt();
      if (!c) return;
      St = new Vo(), St.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), p = Math.min(...o), d = Math.max(...o), i = r - a || 1, b = d - p || 1, M = Math.max(i, b), w = M * 0.08, v = l || t.map((h, u) => String.fromCharCode(65 + u)), f = s || o.map((h, u) => String(u + 1)), g = M * 0.018, S = o.length <= 1, I = 8947848;
      for (let h = 0; h < t.length; h++) {
        const u = t[h];
        if (S) {
          const $ = -w - g * 1.5;
          cn(u, 0, 0, u, 0, $ + g, I, St), dn(v[h] || `${h}`, u, 0, $, g, St);
        } else {
          const $ = p - w - g * 1.5;
          cn(u, p, 0, u, $ + g, 0, I, St), dn(v[h] || `${h}`, u, $, 0, g, St);
        }
      }
      if (!S) for (let h = 0; h < o.length; h++) {
        const u = o[h], $ = a - w - g * 1.5;
        cn(a, u, 0, $ + g, u, 0, I, St), dn(f[h] || `${h}`, $, u, 0, g, St);
      }
      const k = g * 1.8, O = w * 1.2, N = w * 1.2;
      for (let h = 0; h < t.length - 1; h++) {
        const u = t[h], $ = t[h + 1], z = Math.abs($ - u), C = (u + $) / 2, y = `${z.toFixed(2)} m`;
        S ? (ln(y, C, 0, -O, k, St), rn(u, 0, -O * 0.7, $, 0, -O * 0.7, 16763904, St)) : (ln(y, C, p - N, 0, k, St), rn(u, p - N * 0.7, 0, $, p - N * 0.7, 0, 16763904, St));
      }
      if (!S) for (let h = 0; h < o.length - 1; h++) {
        const u = o[h], $ = o[h + 1], z = Math.abs($ - u), C = (u + $) / 2, y = `${z.toFixed(2)} m`;
        ln(y, a - O, C, 0, k, St), rn(a - O * 0.7, u, 0, a - O * 0.7, $, 0, 16763904, St);
      }
      St.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(St), c.render();
    }
    let Nt = null;
    function Dn() {
      if (!Nt) return;
      const t = tt();
      t && t.scene.remove(Nt), Nt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Nt = null;
    }
    function an(t, o, n) {
      if (Dn(), t.length === 0) return;
      const l = tt();
      if (!l) return;
      Nt = new Vo(), Nt.name = "storyLevels";
      const s = Math.min(...o), c = Math.max(...o), a = Math.min(...n), r = Math.max(...n), p = c - s || 1, d = r - a || 1, i = Math.max(p, d), b = i * 0.06, M = n.length <= 1, w = 4491519, v = i * 0.015;
      for (const f of t) {
        const g = f.elev;
        M ? (qo(s - b, 0, g, c + b, 0, g, w, Nt), jn(f.name, c + b * 1.5, 0, g, v, Nt)) : (qo(s, a, g, c, a, g, w, Nt), qo(c, a, g, c, r, g, w, Nt), qo(c, r, g, s, r, g, w, Nt), qo(s, r, g, s, a, g, w, Nt), jn(f.name, s - b * 1.5, a, g, v, Nt));
      }
      Nt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((g) => {
          g.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Nt), l.render();
    }
    function qo(t, o, n, l, s, c, a, r) {
      const p = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (c - n) ** 2) || 1, d = new jt().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, c)
      ]), i = new To({
        color: a,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new go(d, i);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function jn(t, o, n, l, s, c) {
      const a = document.createElement("canvas"), r = 512, p = 64;
      a.width = r, a.height = p;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      d.beginPath(), d.moveTo(i, 0), d.lineTo(r - i, 0), d.quadraticCurveTo(r, 0, r, i), d.lineTo(r, p - i), d.quadraticCurveTo(r, p, r - i, p), d.lineTo(i, p), d.quadraticCurveTo(0, p, 0, p - i), d.lineTo(0, i), d.quadraticCurveTo(0, 0, i, 0), d.closePath(), d.fill(), d.fillStyle = "#88bbff", d.font = "bold 38px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, r / 2, p / 2);
      const b = new Fn(a);
      b.needsUpdate = true;
      const M = new Uo({
        map: b,
        depthTest: false,
        transparent: true
      }), w = new Xo(M);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, c.add(w);
    }
    function ln(t, o, n, l, s, c) {
      const a = document.createElement("canvas"), r = 256, p = 64;
      a.width = r, a.height = p;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      d.beginPath(), d.moveTo(i, 0), d.lineTo(r - i, 0), d.quadraticCurveTo(r, 0, r, i), d.lineTo(r, p - i), d.quadraticCurveTo(r, p, r - i, p), d.lineTo(i, p), d.quadraticCurveTo(0, p, 0, p - i), d.lineTo(0, i), d.quadraticCurveTo(0, 0, i, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, r / 2, p / 2);
      const b = new $a(a);
      b.minFilter = Ma;
      const M = new Uo({
        map: b,
        transparent: true,
        depthTest: false
      }), w = new Xo(M);
      w.position.set(o, n, l);
      const v = r / p;
      w.scale.set(s * v, s, 1), w.renderOrder = 999, c.add(w);
    }
    function rn(t, o, n, l, s, c, a, r) {
      const p = [
        new ke(t, o, n),
        new ke(l, s, c)
      ], d = new jt().setFromPoints(p), i = new Ao({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new go(d, i);
      b.renderOrder = 998, r.add(b);
    }
    function cn(t, o, n, l, s, c, a, r) {
      const p = new jt().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, c)
      ]), d = new To({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new go(p, d);
      i.computeLineDistances(), r.add(i);
    }
    function dn(t, o, n, l, s, c) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const p = a.getContext("2d");
      p.beginPath(), p.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = r * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${r * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, r / 2, r / 2 + r * 0.02);
      const d = new Fn(a);
      d.needsUpdate = true;
      const i = new Uo({
        map: d,
        depthTest: false,
        transparent: true
      }), b = new Xo(i);
      b.position.set(o, n, l);
      const M = s * 2;
      b.scale.set(M, M, 1), b.renderOrder = 100, c.add(b);
    }
    const We = {
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
        const n = we.querySelectorAll("input[type=checkbox]");
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
        const t = we.querySelectorAll("input[type=checkbox]"), o = {};
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
        Ot(l, s, c), qe = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Fe = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), Qe = c[c.length - 1], Ge = c.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), No(qe.map((a) => a.coord), Fe.map((a) => a.coord), Qe, qe.map((a) => a.label), Fe.map((a) => a.label));
        {
          const a = c.map((r, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? r - c[p - 1] : 0,
            elev: r
          }));
          an(a, qe.map((r) => r.coord), Fe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(t) {
        var _a2;
        if (qe.length === 0 || Ge.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, c] = o.split("x").map((q) => parseFloat(q) / 100), [a, r] = n.split("x").map((q) => parseFloat(q) / 100), p = qe.map((q) => q.coord), d = Fe.map((q) => q.coord), i = Ge.map((q) => q.elev), b = p.length, M = d.length, w = i.length, v = w - 1, f = [], g = {};
        for (let q = 0; q < w; q++) for (let oe = 0; oe < M; oe++) for (let se = 0; se < b; se++) g[`${se},${oe},${q}`] = f.length, f.push([
          p[se],
          d[oe],
          i[q]
        ]);
        const S = [], I = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
        for (let q = 0; q < v; q++) for (let oe = 0; oe < M; oe++) for (let se = 0; se < b; se++) {
          const ee = S.length;
          S.push([
            g[`${se},${oe},${q}`],
            g[`${se},${oe},${q + 1}`]
          ]), I.add(ee), O.set(ee, q);
        }
        for (let q = 1; q < w; q++) for (let oe = 0; oe < M; oe++) for (let se = 0; se < b - 1; se++) {
          const ee = S.length;
          S.push([
            g[`${se},${oe},${q}`],
            g[`${se + 1},${oe},${q}`]
          ]), k.add(ee), O.set(ee, q - 1);
        }
        for (let q = 1; q < w; q++) for (let oe = 0; oe < b; oe++) for (let se = 0; se < M - 1; se++) {
          const ee = S.length;
          S.push([
            g[`${oe},${se},${q}`],
            g[`${oe},${se + 1},${q}`]
          ]), k.add(ee), O.set(ee, q - 1);
        }
        const N = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", h = /* @__PURE__ */ new Set();
        if (N) {
          const q = N === "all" || N === "x" || N === "perimeter", oe = N === "all" || N === "y" || N === "perimeter";
          for (let se = 0; se < v; se++) {
            if (q) for (let ee = 0; ee < M; ee++) {
              if (N === "perimeter" && ee !== 0 && ee !== M - 1) continue;
              const J = Math.floor((b - 1) / 2);
              for (let re = 0; re < b - 1; re++) {
                if (N === "perimeter" && re !== J) continue;
                const fe = S.length;
                S.push([
                  g[`${re},${ee},${se}`],
                  g[`${re + 1},${ee},${se + 1}`]
                ]), h.add(fe), O.set(fe, se);
                const Q = S.length;
                S.push([
                  g[`${re + 1},${ee},${se}`],
                  g[`${re},${ee},${se + 1}`]
                ]), h.add(Q), O.set(Q, se);
              }
            }
            if (oe) for (let ee = 0; ee < b; ee++) {
              if (N === "perimeter" && ee !== 0 && ee !== b - 1) continue;
              const J = Math.floor((M - 1) / 2);
              for (let re = 0; re < M - 1; re++) {
                if (N === "perimeter" && re !== J) continue;
                const fe = S.length;
                S.push([
                  g[`${ee},${re},${se}`],
                  g[`${ee},${re + 1},${se + 1}`]
                ]), h.add(fe), O.set(fe, se);
                const Q = S.length;
                S.push([
                  g[`${ee},${re + 1},${se}`],
                  g[`${ee},${re},${se + 1}`]
                ]), h.add(Q), O.set(Q, se);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, $ = u / (2 * (1 + 0.2)), z = s * c, C = s * c ** 3 / 12, y = c * s ** 3 / 12, E = s * c * (s ** 2 + c ** 2) / 12, m = a * r, A = a * r ** 3 / 12, F = r * a ** 3 / 12, H = a * r * (a ** 2 + r ** 2) / 12, G = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        for (let q = 0; q < S.length; q++) G.set(q, u), Z.set(q, $), I.has(q) ? (K.set(q, z), te.set(q, C), j.set(q, y), he.set(q, E), ze.set(q, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${o}`
        })) : h.has(q) ? (K.set(q, z), te.set(q, C), j.set(q, y), he.set(q, E), ze.set(q, {
          type: "rect",
          b: s,
          h: c,
          name: `BR${o}`
        })) : (K.set(q, m), te.set(q, A), j.set(q, F), he.set(q, H), ze.set(q, {
          type: "rect",
          b: a,
          h: r,
          name: `V${n}`
        }));
        const ue = /* @__PURE__ */ new Map();
        for (let q = 0; q < M; q++) for (let oe = 0; oe < b; oe++) ue.set(g[`${oe},${q},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = S, e.nodeInputs.val = {
          supports: ue,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: G,
          shearModuli: Z,
          areas: K,
          momentsOfInertiaZ: te,
          momentsOfInertiaY: j,
          torsionalConstants: he,
          sectionShapes: ze
        }, be = I, Pe = k, Oe = O, console.log(`Built: ${f.length} nodes, ${S.length} elements (${I.size} cols, ${k.size} beams, ${h.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${N ? `, braces=${N}` : ""}`), {
          nodes: f.length,
          elements: S.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = qe.findIndex((v) => v.label === t), s = Fe.findIndex((v) => v.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${qe.map((v) => v.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Fe.map((v) => v.label)}`);
          return;
        }
        const c = qe[l].coord, a = Fe[s].coord, r = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const d = (v) => {
          const f = r.findIndex((g) => Math.abs(g[0] - c) < 1e-3 && Math.abs(g[1] - a) < 1e-3 && Math.abs(g[2] - v) < 1e-3);
          return f >= 0 ? f : (r.push([
            c,
            a,
            v
          ]), r.length - 1);
        }, i = n ? [
          Ge.findIndex((v) => v.label === n)
        ] : Array.from({
          length: Ge.length - 1
        }, (v, f) => f + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), M = d(Ge[0].elev);
        b.has(M) || b.set(M, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let w = 0;
        for (const v of i) {
          if (v < 1 || v >= Ge.length) continue;
          const f = d(Ge[v - 1].elev), g = d(Ge[v].elev);
          p.push([
            f,
            g
          ]), be.add(p.length - 1), Oe.set(p.length - 1, v - 1), w++;
        }
        return e.nodes.val = r, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const c = qe.findIndex((O) => O.label === t), a = Fe.findIndex((O) => O.label === o), r = qe.findIndex((O) => O.label === n), p = Fe.findIndex((O) => O.label === l), d = Ge.findIndex((O) => O.label === s);
        if (c < 0 || a < 0 || r < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (d < 1) {
          console.log(`Story "${s}" not found. Available: ${Ge.filter((O) => O.label !== "Base").map((O) => O.label)}`);
          return;
        }
        const i = qe[c].coord, b = Fe[a].coord, M = qe[r].coord, w = Fe[p].coord, v = Ge[d].elev, f = [
          ...e.nodes.val
        ], g = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], S = (O, N, h) => {
          const u = f.findIndex(($) => Math.abs($[0] - O) < 1e-3 && Math.abs($[1] - N) < 1e-3 && Math.abs($[2] - h) < 1e-3);
          return u >= 0 ? u : (f.push([
            O,
            N,
            h
          ]), f.length - 1);
        }, I = S(i, b, v), k = S(M, w, v);
        return g.push([
          I,
          k
        ]), Pe.add(g.length - 1), Oe.set(g.length - 1, d - 1), e.nodes.val = f, e.elements.val = g, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), g.length - 1;
      },
      addBrace(t, o, n, l, s, c) {
        var _a2;
        const a = qe.findIndex((u) => u.label === t), r = Fe.findIndex((u) => u.label === o), p = Ge.findIndex((u) => u.label === n), d = qe.findIndex((u) => u.label === l), i = Fe.findIndex((u) => u.label === s), b = Ge.findIndex((u) => u.label === c);
        if (a < 0 || r < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (d < 0 || i < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const M = qe[a].coord, w = Fe[r].coord, v = Ge[p].elev, f = qe[d].coord, g = Fe[i].coord, S = Ge[b].elev, I = [
          ...e.nodes.val
        ], k = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], O = (u, $, z) => {
          const C = I.findIndex((y) => Math.abs(y[0] - u) < 1e-3 && Math.abs(y[1] - $) < 1e-3 && Math.abs(y[2] - z) < 1e-3);
          return C >= 0 ? C : (I.push([
            u,
            $,
            z
          ]), I.length - 1);
        }, N = O(M, w, v), h = O(f, g, S);
        return k.push([
          N,
          h
        ]), Oe.set(k.length - 1, Math.min(p, b)), e.nodes.val = I, e.elements.val = k, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${c}`), k.length - 1;
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
        We.clear();
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
        ], s = (t == null ? void 0 : t.col) || "40x40", c = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, p] = s.split("x").map((J) => parseFloat(J) / 100), [d, i] = c.split("x").map((J) => parseFloat(J) / 100), b = [
          0
        ];
        for (const J of o) b.push(b[b.length - 1] + J);
        const M = [
          0
        ];
        for (const J of n) M.push(M[M.length - 1] + J);
        const w = [
          0
        ];
        for (const J of l) w.push(w[w.length - 1] + J);
        const v = b.length, f = M.length, g = w.length, S = l.length, I = [], k = {};
        for (let J = 0; J < g; J++) for (let re = 0; re < f; re++) for (let fe = 0; fe < v; fe++) k[`${fe},${J},${re}`] = I.length, I.push([
          b[fe],
          w[J],
          M[re]
        ]);
        const O = [], N = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let J = 0; J < S; J++) for (let re = 0; re < f; re++) for (let fe = 0; fe < v; fe++) {
          const Q = O.length;
          O.push([
            k[`${fe},${J},${re}`],
            k[`${fe},${J + 1},${re}`]
          ]), N.add(Q), u.set(Q, J);
        }
        for (let J = 1; J < g; J++) for (let re = 0; re < f; re++) for (let fe = 0; fe < v - 1; fe++) {
          const Q = O.length;
          O.push([
            k[`${fe},${J},${re}`],
            k[`${fe + 1},${J},${re}`]
          ]), h.add(Q), u.set(Q, J - 1);
        }
        for (let J = 1; J < g; J++) for (let re = 0; re < v; re++) for (let fe = 0; fe < f - 1; fe++) {
          const Q = O.length;
          O.push([
            k[`${re},${J},${fe}`],
            k[`${re},${J},${fe + 1}`]
          ]), h.add(Q), u.set(Q, J - 1);
        }
        const z = 15100 * Math.sqrt(a) * 10, C = z / (2 * (1 + 0.2)), y = r * p, E = r * p ** 3 / 12, m = p * r ** 3 / 12, A = r * p * (r ** 2 + p ** 2) / 12, F = d * i, H = d * i ** 3 / 12, G = i * d ** 3 / 12, Z = d * i * (d ** 2 + i ** 2) / 12, K = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let J = 0; J < O.length; J++) K.set(J, z), te.set(J, C), N.has(J) ? (j.set(J, y), he.set(J, E), ze.set(J, m), ue.set(J, A), q.set(J, {
          type: "rect",
          b: r,
          h: p,
          name: `COL${s}`
        })) : (j.set(J, F), he.set(J, H), ze.set(J, G), ue.set(J, Z), q.set(J, {
          type: "rect",
          b: d,
          h: i,
          name: `V${c}`
        }));
        const oe = /* @__PURE__ */ new Map();
        for (let J = 0; J < f; J++) for (let re = 0; re < v; re++) oe.set(k[`${re},0,${J}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = I, e.elements.val = O, e.nodeInputs.val = {
          supports: oe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: K,
          shearModuli: te,
          areas: j,
          momentsOfInertiaZ: he,
          momentsOfInertiaY: ze,
          torsionalConstants: ue,
          sectionShapes: q
        }, be = N, Pe = h, Oe = u, qe = b.map((J, re) => ({
          label: String.fromCharCode(65 + re),
          coord: J
        })), Fe = M.map((J, re) => ({
          label: `${re + 1}`,
          coord: J
        })), Qe = w[w.length - 1], No(qe.map((J) => J.coord), Fe.map((J) => J.coord), Qe, qe.map((J) => J.label), Fe.map((J) => J.label));
        {
          const J = w.map((re, fe) => ({
            name: fe === 0 ? "Base" : `P${fe}`,
            height: fe > 0 ? re - w[fe - 1] : 0,
            elev: re
          }));
          an(J, b, M);
        }
        const se = we.querySelector("#cad3d-axis-buttons");
        if (se) {
          se.style.display = "flex";
          const J = qe.map((fe) => fe.label), re = Fe.map((fe) => fe.label);
          se.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const fe of J) se.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${fe}">${fe}</button>`;
          se.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const fe of re) se.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${fe}">${fe}</button>`;
        }
        const ee = we.querySelector("#cad3d-floor-buttons");
        if (ee) {
          ee.style.display = "flex", ee.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let J = 0; J < S; J++) ee.innerHTML += `<button class="floor-btn" data-floor="${J}">P${J + 1}</button>`;
        }
        return Ot(b, M, w), Je(), console.log(`Model3D: ${I.length}n ${O.length}e | ${v}x${f} grid, ${S} floors | COL${s} V${c} f'c=${a}`), {
          nodes: I.length,
          elements: O.length,
          columns: N.size,
          beams: h.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), be = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), qe = [], Fe = [], Qe = 0, Bn(), Dn(), Ct();
        const t = we.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Je();
      },
      frame(t, o, n = 0, l = 0) {
        We.clear();
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
        const p = (v) => n > 0 && v === 0 || l > 0 && v === s.length - 1, d = {}, i = [];
        for (let v = 0; v < a.length; v++) for (let f = 0; f < s.length; f++) v === 0 && p(f) || (d[`${f},${v}`] = i.length, i.push([
          s[f],
          0,
          a[v]
        ]));
        const b = [];
        be = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Set();
        for (let v = 0; v < a.length - 1; v++) for (let f = 0; f < s.length; f++) p(f) || (be.add(b.length), b.push([
          d[`${f},${v}`],
          d[`${f},${v + 1}`]
        ]));
        for (let v = 1; v < a.length; v++) for (let f = 0; f < s.length - 1; f++) Pe.add(b.length), b.push([
          d[`${f},${v}`],
          d[`${f + 1},${v}`]
        ]);
        const M = /* @__PURE__ */ new Map(), w = ot();
        for (let v = 0; v < s.length; v++) {
          if (p(v)) continue;
          const f = `${v},0`;
          d[f] !== void 0 && M.set(d[f], [
            ...w
          ]);
        }
        return e.nodes.val = i, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: M
        }), qe = [
          ...s
        ], Fe = [
          0
        ], Qe = a[a.length - 1] || 0, setTimeout(() => {
          Et(), No(s, [
            0
          ]), yn(), $n();
        }, 50), Je(), {
          nodes: i.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, s = 0, c = 0, a = 0, r = 0, p = 1) {
        We.clear();
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
        const M = (u) => s > 0 && u === 0 || c > 0 && u === d.length - 1, w = (u) => a > 0 && u === 0 || r > 0 && u === i.length - 1, v = (u, $) => M(u) || w($), f = [], g = {};
        for (let u = 0; u < b.length; u++) for (let $ = 0; $ < i.length; $++) for (let z = 0; z < d.length; z++) u === 0 && v(z, $) || (g[`${z},${$},${u}`] = f.length, f.push([
          d[z],
          i[$],
          b[u]
        ]));
        const S = f.length, I = [];
        be = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map();
        const k = [];
        for (let u = 0; u < b.length - 1; u++) for (let $ = 0; $ < i.length; $++) for (let z = 0; z < d.length; z++) v(z, $) || k.push({
          el: [
            g[`${z},${$},${u}`],
            g[`${z},${$},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, $], floor: z } of k) {
          if (p <= 1) {
            be.add(I.length), Oe.set(I.length, z), I.push([
              u,
              $
            ]);
            continue;
          }
          const C = f[u], y = f[$];
          let E = u;
          for (let m = 1; m < p; m++) {
            const A = m / p, F = f.length;
            f.push([
              C[0] + (y[0] - C[0]) * A,
              C[1] + (y[1] - C[1]) * A,
              C[2] + (y[2] - C[2]) * A
            ]), be.add(I.length), Oe.set(I.length, z), I.push([
              E,
              F
            ]), E = F;
          }
          be.add(I.length), Oe.set(I.length, z), I.push([
            E,
            $
          ]);
        }
        Ve = /* @__PURE__ */ new Map();
        const O = [];
        for (let u = 1; u < b.length; u++) for (let $ = 0; $ < i.length; $++) for (let z = 0; z < d.length - 1; z++) O.push({
          el: [
            g[`${z},${$},${u}`],
            g[`${z + 1},${$},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: z
        });
        for (let u = 1; u < b.length; u++) for (let $ = 0; $ < d.length; $++) for (let z = 0; z < i.length - 1; z++) O.push({
          el: [
            g[`${$},${z},${u}`],
            g[`${$},${z + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: z
        });
        for (const { el: [u, $], floor: z, dir: C, bay: y } of O) {
          const E = f[u], m = f[$];
          let A = u;
          for (let H = 1; H < l; H++) {
            const G = H / l, Z = f.length;
            f.push([
              E[0] + (m[0] - E[0]) * G,
              E[1] + (m[1] - E[1]) * G,
              E[2] + (m[2] - E[2]) * G
            ]);
            const K = I.length;
            Pe.add(K), Oe.set(K, z), Ve.set(K, {
              dir: C,
              bay: y
            }), I.push([
              A,
              Z
            ]), A = Z;
          }
          const F = I.length;
          Pe.add(F), Oe.set(F, z), Ve.set(F, {
            dir: C,
            bay: y
          }), I.push([
            A,
            $
          ]);
        }
        if (et = /* @__PURE__ */ new Set(), me && Ne > 0) {
          const u = ($, z, C) => {
            for (let E = 0; E < f.length; E++) if (Math.abs(f[E][0] - $) < 1e-6 && Math.abs(f[E][1] - z) < 1e-6 && Math.abs(f[E][2] - C) < 1e-6) return E;
            const y = f.length;
            return f.push([
              $,
              z,
              C
            ]), y;
          };
          for (let $ = 1; $ < b.length; $++) if (He === "x") for (let z = 0; z < i.length - 1; z++) {
            const C = i[z], y = i[z + 1];
            for (let E = 1; E <= Ne; E++) {
              const m = C + E / (Ne + 1) * (y - C), A = [];
              for (let F = 0; F < d.length; F++) A.push(u(d[F], m, b[$]));
              for (let F = 0; F < d.length - 1; F++) {
                const H = I.length;
                et.add(H), Pe.add(H), Oe.set(H, $ - 1), Ve.set(H, {
                  dir: "x",
                  bay: F
                }), I.push([
                  A[F],
                  A[F + 1]
                ]);
              }
            }
          }
          else for (let z = 0; z < d.length - 1; z++) {
            const C = d[z], y = d[z + 1];
            for (let E = 1; E <= Ne; E++) {
              const m = C + E / (Ne + 1) * (y - C), A = [];
              for (let F = 0; F < i.length; F++) A.push(u(m, i[F], b[$]));
              for (let F = 0; F < i.length - 1; F++) {
                const H = I.length;
                et.add(H), Pe.add(H), Oe.set(H, $ - 1), Ve.set(H, {
                  dir: "y",
                  bay: F
                }), I.push([
                  A[F],
                  A[F + 1]
                ]);
              }
            }
          }
        }
        const N = /* @__PURE__ */ new Map(), h = ot();
        for (let u = 0; u < i.length; u++) for (let $ = 0; $ < d.length; $++) v($, u) || N.set(g[`${$},${u},0`], [
          ...h
        ]);
        Be = /* @__PURE__ */ new Set();
        for (const u of Ye) {
          const $ = b.length - 1, z = u.floors.includes(-1) ? Array.from({
            length: $
          }, (C, y) => y) : u.floors.filter((C) => C < $);
          for (const C of z) {
            let y, E, m, A;
            u.dir === "x" ? (y = u.bay, m = u.bay + 1, E = u.axisIdx, A = u.axisIdx) : (y = u.axisIdx, m = u.axisIdx, E = u.bay, A = u.bay + 1);
            const F = g[`${y},${E},${C}`], H = g[`${y},${E},${C + 1}`];
            let G, Z;
            if (u.dir === "x" ? (G = g[`${m},${A},${C}`], Z = g[`${m},${A},${C + 1}`]) : (G = g[`${m},${A},${C}`], Z = g[`${m},${A},${C + 1}`]), F === void 0 || G === void 0 || H === void 0 || Z === void 0) continue;
            const K = vt, te = bt, j = f[F], he = f[G], ze = f[H], ue = f[Z], q = [];
            for (let oe = 0; oe <= te; oe++) {
              const se = [], ee = oe / te;
              for (let J = 0; J <= K; J++) {
                const re = J / K, fe = (1 - ee) * ((1 - re) * j[0] + re * he[0]) + ee * ((1 - re) * ze[0] + re * ue[0]), Q = (1 - ee) * ((1 - re) * j[1] + re * he[1]) + ee * ((1 - re) * ze[1] + re * ue[1]), Ie = (1 - ee) * ((1 - re) * j[2] + re * he[2]) + ee * ((1 - re) * ze[2] + re * ue[2]);
                oe === 0 && J === 0 ? se.push(F) : oe === 0 && J === K ? se.push(G) : oe === te && J === 0 ? se.push(H) : oe === te && J === K ? se.push(Z) : (se.push(f.length), f.push([
                  fe,
                  Q,
                  Ie
                ]));
              }
              q.push(se);
            }
            for (let oe = 0; oe < te; oe++) for (let se = 0; se < K; se++) {
              const ee = q[oe][se], J = q[oe][se + 1], re = q[oe + 1][se + 1], fe = q[oe + 1][se], Q = I.length;
              Be.add(Q), Oe.set(Q, C), I.push([
                ee,
                J,
                re,
                fe
              ]);
            }
            if (C === 0) for (let oe = 0; oe <= K; oe++) {
              const se = q[0][oe];
              se >= S && N.set(se, [
                ...h
              ]);
            }
          }
        }
        if (yt = /* @__PURE__ */ new Set(), Ze) {
          const u = l, $ = l, z = /* @__PURE__ */ new Map(), C = (y, E, m) => `${Math.round(y * 1e4)},${Math.round(E * 1e4)},${Math.round(m * 1e4)}`;
          for (let y = 0; y < f.length; y++) z.set(C(f[y][0], f[y][1], f[y][2]), y);
          for (let y = 1; y < b.length; y++) {
            const E = b[y];
            for (let m = 0; m < d.length - 1; m++) for (let A = 0; A < i.length - 1; A++) {
              const F = d[m], H = d[m + 1], G = i[A], Z = i[A + 1], K = [];
              for (let te = 0; te <= $; te++) {
                const j = [];
                for (let he = 0; he <= u; he++) {
                  const ze = F + he / u * (H - F), ue = G + te / $ * (Z - G);
                  if (te === 0 && he === 0) j.push(g[`${m},${A},${y}`]);
                  else if (te === 0 && he === u) j.push(g[`${m + 1},${A},${y}`]);
                  else if (te === $ && he === 0) j.push(g[`${m},${A + 1},${y}`]);
                  else if (te === $ && he === u) j.push(g[`${m + 1},${A + 1},${y}`]);
                  else {
                    const q = C(ze, ue, E), oe = z.get(q);
                    if (oe !== void 0) j.push(oe);
                    else {
                      const se = f.length;
                      f.push([
                        ze,
                        ue,
                        E
                      ]), z.set(q, se), j.push(se);
                    }
                  }
                }
                K.push(j);
              }
              for (let te = 0; te < $; te++) for (let j = 0; j < u; j++) {
                const he = K[te][j], ze = K[te][j + 1], ue = K[te + 1][j + 1], q = K[te + 1][j], oe = I.length;
                yt.add(oe), Oe.set(oe, y - 1), I.push([
                  he,
                  ze,
                  ue,
                  q
                ]);
              }
            }
          }
        }
        if (It && lt) {
          const u = lt === "all" || lt === "x" || lt === "perimeter", $ = lt === "all" || lt === "y" || lt === "perimeter", z = b.length - 1;
          for (let C = 0; C < z; C++) {
            if (u) for (let y = 0; y < i.length; y++) {
              if (lt === "perimeter" && y !== 0 && y !== i.length - 1) continue;
              const E = Math.floor((d.length - 1) / 2);
              for (let m = 0; m < d.length - 1; m++) {
                if (lt === "perimeter" && m !== E || v(m, y) || v(m + 1, y)) continue;
                const A = g[`${m},${y},${C}`], F = g[`${m + 1},${y},${C + 1}`], H = g[`${m + 1},${y},${C}`], G = g[`${m},${y},${C + 1}`];
                A !== void 0 && F !== void 0 && (I.push([
                  A,
                  F
                ]), Oe.set(I.length - 1, C)), H !== void 0 && G !== void 0 && (I.push([
                  H,
                  G
                ]), Oe.set(I.length - 1, C));
              }
            }
            if ($) for (let y = 0; y < d.length; y++) {
              if (lt === "perimeter" && y !== 0 && y !== d.length - 1) continue;
              const E = Math.floor((i.length - 1) / 2);
              for (let m = 0; m < i.length - 1; m++) {
                if (lt === "perimeter" && m !== E || v(y, m) || v(y, m + 1)) continue;
                const A = g[`${y},${m},${C}`], F = g[`${y},${m + 1},${C + 1}`], H = g[`${y},${m + 1},${C}`], G = g[`${y},${m},${C + 1}`];
                A !== void 0 && F !== void 0 && (I.push([
                  A,
                  F
                ]), Oe.set(I.length - 1, C)), H !== void 0 && G !== void 0 && (I.push([
                  H,
                  G
                ]), Oe.set(I.length - 1, C));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = I, e.nodeInputs && (e.nodeInputs.val = {
          supports: N
        }), qe = [
          ...d
        ], Fe = [
          ...i
        ], Qe = b[b.length - 1] || 0, setTimeout(() => {
          Et(), No(d, i), yn(), $n();
        }, 50), Je(), {
          nodes: f.length,
          elements: I.length,
          nJointNodes: S
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        We.clear();
        const a = [], r = [], p = (w) => n + l * (1 - Math.pow(2 * w / t - 1, 2)), d = [], i = c + 1;
        for (let w = 0; w < i; w++) {
          const v = [], f = o / c * w;
          v.push(a.length), a.push([
            0,
            f,
            0
          ]), v.push(a.length), a.push([
            t,
            f,
            0
          ]), v.push(a.length), a.push([
            0,
            f,
            n
          ]);
          for (let g = 1; g < s; g++) {
            const S = t / s * g;
            v.push(a.length), a.push([
              S,
              f,
              p(S)
            ]);
          }
          v.push(a.length), a.push([
            t,
            f,
            n
          ]), d.push(v);
        }
        for (let w = 0; w < i; w++) {
          const v = d[w];
          r.push([
            v[0],
            v[2]
          ]), r.push([
            v[1],
            v[v.length - 1]
          ]);
          for (let f = 2; f < v.length - 1; f++) r.push([
            v[f],
            v[f + 1]
          ]);
        }
        for (let w = 0; w < c; w++) for (let v = 2; v < d[0].length; v++) r.push([
          d[w][v],
          d[w + 1][v]
        ]);
        for (let w = 0; w < c; w++) for (let v = 2; v < d[0].length - 1; v += 2) r.push([
          d[w][v],
          d[w + 1][v + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), M = ot();
        for (let w = 0; w < i; w++) b.set(d[w][0], [
          ...M
        ]), b.set(d[w][1], [
          ...M
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
            We.clear(), Xe("truss"), Gn();
            break;
          }
          case "beams": {
            We.clear(), Xe("beams"), Jn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            We.clear(), Xe("3d"), Vn();
            break;
          }
          case "portico": {
            Xe("frame"), Se();
            break;
          }
          case "edificio": {
            Xe("edificio"), Le.colMat = 0, Le.vigaMat = 0, Le.colShape = 0, Ye = [], Ze = false, me = false, It = false, Se();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Xe("edificio"), Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Ye = [], me = true, Ne = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = pe.reduce((l, s) => l + s, 0) / pe.length;
            He = o >= n ? "y" : "x", Ze = true, De = 0.08, It = false, Se();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Xe("edificio"), Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Ye = [], me = true, Ne = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = pe.reduce((l, s) => l + s, 0) / pe.length;
            He = o >= n ? "y" : "x", Ze = true, De = 0.08, It = true, lt = "perimeter", Se();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Xe("edificio"), Le.colMat = 0, Le.vigaMat = 0, Le.colShape = 0, me = false;
            const o = Math.round(((_a2 = ie.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = ie.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Ze = true, De = 0.15, Se();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Xe("edificio"), Le.colMat = 2, Le.vigaMat = 0, me = false;
            const o = Math.round(((_c = ie.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = ie.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            ], Ze = true, De = 0.12, Se();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Xe("edificio"), ie.nPisos && (ie.nPisos.val = 1), ie.hPiso && (ie.hPiso.val = 4.5), ie.nVanosX && (ie.nVanosX.val = 3), ie.nVanosY && (ie.nVanosY.val = 2), ie.nSubViga && (ie.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], pe = [
              5,
              5
            ], Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Ye = [], me = true, Ne = 2, He = ce[0] >= pe[0] ? "y" : "x", Ze = true, De = 0.08, it = 3, at = 3, Se();
            break;
          }
          case "galpon": {
            Xe("galpon"), Se();
            break;
          }
          case "barra": {
            Xe("barra"), Se();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            We.clear(), Xe("placa-3q"), Xn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            We.clear(), Xe("placa-q4"), Un();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            We.clear(), Xe("losa-rect"), Kn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            We.clear(), Xe("losa-plana"), Zn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            We.clear(), Xe("viga-alta"), Qn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            We.clear(), Xe("muro-contencion"), es();
            break;
          }
          case "zapata":
          case "footing": {
            We.clear(), Xe("zapata"), ts();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            We.clear(), Xe("placa-orificios"), os();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            We.clear(), Xe("col-placa"), ns();
            break;
          }
          case "talud":
          case "slope": {
            We.clear(), Xe("talud"), ss();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            We.clear(), Xe("eiffel"), ys();
            break;
          }
          case "arco":
          case "arco-gateway": {
            We.clear(), Xe("arco"), $s();
            break;
          }
          case "puente":
          case "puente-colgante": {
            We.clear(), Xe("puente"), Ms();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            We.clear(), Xe("twisted"), ws();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            We.clear(), Xe("burj"), Ss();
            break;
          }
          case "opera":
          case "sydney-opera": {
            We.clear(), Xe("opera"), Es();
            break;
          }
          case "diagrid":
          case "gherkin": {
            We.clear(), Xe("diagrid"), Is();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", c = -10, a = 0.2, r = 3e7, p = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${c}, t=${a}`);
        const b = performance.now(), M = Pn({
          E: r,
          nu: p,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: c,
          theoryType: d
        }), w = performance.now() - b;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${M.maxW.toExponential(6)}`), console.log(`w_center = ${(M.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${M.maxMxx.toExponential(4)}, Myy_max = ${M.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${M.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${M.maxQx.toExponential(4)}, Qy_max = ${M.maxQy.toExponential(4)}`);
        const v = M.nodeResults.map((k) => [
          k.x,
          k.y,
          0
        ]), f = M.elementResults.map((k) => [
          ...k.nodes
        ]);
        e.nodes.val = v, e.elements.val = f;
        const g = /* @__PURE__ */ new Map();
        M.nodeResults.forEach((k, O) => {
          g.set(O, [
            0,
            0,
            k.w,
            k.bx,
            k.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const S = /* @__PURE__ */ new Map();
        M.nodeResults.forEach((k, O) => {
          (k.x < 1e-10 || k.x > t - 1e-10 || k.y < 1e-10 || k.y > o - 1e-10) && S.set(O, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const I = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const k = c * t * o / v.length;
          v.forEach((O, N) => {
            S.has(N) || I.set(N, [
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
          supports: S,
          loads: I
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const k = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
          M.elementResults.forEach((h, u) => {
            k.set(u, [
              h.Mxx,
              h.Mxx,
              h.Mxx
            ]), O.set(u, [
              h.Myy,
              h.Myy,
              h.Myy
            ]), N.set(u, [
              h.Mxy,
              h.Mxy,
              h.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: k,
            bendingYY: O,
            bendingXY: N
          };
        }
        return setTimeout(() => Et(), 50), Je(), M;
      },
      set(t, o) {
        ie[t] ? (ie[t].val = o, console.log(`${t} = ${o}`), Jt(), Se()) : nt[t] ? (nt[t].val = o, console.log(`${t} = ${o}`), Jt(), Se()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ie,
          ...nt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in ie) o[l] = ie[l].val;
          for (const l in nt) o[l] = nt[l].val;
          o.plateTheory = ht, o.supportType = wt;
          const n = Ko()[L];
          return n && n[wt] && (o.supportLabel = n[wt].label), console.table(o), o;
        }
        if (ie[t]) return ie[t].val;
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
        }[ht] || ht}`), L.includes("placa") && (Jt(), Se());
      },
      setBc(t) {
        const o = Ko()[L];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        wt = t, wt >= o.length && (wt = 0), console.log(`Apoyo: ${o[wt].label} \u2192 DOFs: [${o[wt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Jt(), Se();
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
        const n = we.querySelector("#cad3d-force-unit"), l = we.querySelector("#cad3d-length-unit");
        return n && (n.textContent = x), l && (l.textContent = _), L && Xe(L), console.log(`Unidades: ${T.label} | E=${T.E.toExponential(3)} ${T.stress}`), T.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Wn() {
      return Sa(T);
    }
    function Yn() {
      return Ea(T);
    }
    let nt = {};
    function Xe(t) {
      var _a2, _b;
      L = t, Cs.val = true, wt = 0, Ce && bn(), ie = {};
      const o = Wn()[t];
      if (o) for (const l of o) ie[l.key] = {
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
        const l = Math.round(((_a2 = ie.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = ie.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ce = Array(l).fill(T.defaultSpan), pe = Array(s).fill(T.defaultSpan * 0.8);
      }
      Jt(), setTimeout(() => {
        Ds(), Se();
      }, 50);
    }
    function X(t) {
      var _a2, _b;
      return ((_a2 = ie[t]) == null ? void 0 : _a2.val) ?? ((_b = nt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Se() {
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
          const o = Math.round(X("nVanos")), n = X("spanV"), l = Math.round(X("nPisos")), s = X("hPiso");
          We.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(X("nPisos")), n = X("hPiso"), l = X("Lvix") || 0, s = X("Lvdx") || 0, c = X("Lviy") || 0, a = X("Lvdy") || 0, r = Math.max(1, Math.round(X("nSubViga") || 3)), p = Math.max(1, Math.round(X("nSubCol") || 1));
          We.building([
            ...ce
          ], [
            ...pe
          ], Array(o).fill(n), r, l, s, c, a, p);
          break;
        }
        case "galpon":
          We.galpon(X("span"), X("length"), X("height"), X("archRise"), Math.round(X("xDiv")), Math.round(X("yDiv")));
          break;
        case "barra":
          Ps();
          break;
        case "placa-3q":
          Xn();
          break;
        case "placa-q4":
          Un();
          break;
        case "losa-rect":
          Kn();
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
          Ms();
          break;
        case "twisted":
          ws();
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
        if (ne.size > 0 || V.size > 0 || Y) {
          const o = e.elements.val, n = o.filter((l, s) => !(ne.has(s) || V.has(s) || Y && !W.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          no(), hn();
        }, 30);
      }
    }
    function Gn() {
      const t = X("span"), o = Math.round(X("divisions")), n = X("height"), l = t / o, s = [], c = [];
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
      ]), p = (X("CM") ?? 0) + (X("CV") ?? 0), d = /* @__PURE__ */ new Map();
      if (p !== 0) for (let i = 0; i <= o; i++) d.set(i, [
        0,
        0,
        p,
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
      const t = X("width"), o = X("height"), n = X("Ex") ?? 0, l = (X("CM") ?? 0) + (X("CV") ?? 0), s = Math.max(1, Math.round(X("nSub") || 4)), c = [
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
      ], p = [
        t,
        0,
        o
      ];
      let d = 1;
      for (let b = 1; b < s; b++) {
        const M = b / s, w = c.length;
        c.push([
          r[0] + (p[0] - r[0]) * M,
          r[1] + (p[1] - r[1]) * M,
          r[2] + (p[2] - r[2]) * M
        ]), a.push([
          d,
          w
        ]), d = w;
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
      const t = X("dx"), o = X("dy"), n = X("dz"), l = Math.round(X("stories")), s = Math.max(1, Math.round(X("nSub") || 3)), c = [];
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
      const a = c.length, r = [
        ...c
      ], p = [];
      for (let f = 0; f < l; f++) for (let g = 0; g < 4; g++) p.push([
        f * 4 + g,
        (f + 1) * 4 + g
      ]);
      for (let f = 0; f < l; f++) {
        const g = f * 4;
        p.push([
          g,
          g + 5
        ], [
          g + 3,
          g + 6
        ], [
          g,
          g + 7
        ], [
          g + 1,
          g + 6
        ]);
      }
      const d = [];
      for (let f = 1; f <= l; f++) {
        const g = f * 4;
        d.push([
          g,
          g + 1
        ], [
          g + 1,
          g + 2
        ], [
          g + 2,
          g + 3
        ], [
          g + 3,
          g
        ], [
          g,
          g + 2
        ]);
      }
      for (const [f, g] of d) {
        const S = c[f], I = c[g];
        let k = f;
        for (let O = 1; O < s; O++) {
          const N = O / s, h = r.length;
          r.push([
            S[0] + (I[0] - S[0]) * N,
            S[1] + (I[1] - S[1]) * N,
            S[2] + (I[2] - S[2]) * N
          ]), p.push([
            k,
            h
          ]), k = h;
        }
        p.push([
          k,
          g
        ]);
      }
      const i = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) i.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = X("Ex") ?? 0, M = (X("CM") ?? 0) + (X("CV") ?? 0), w = a - 2, v = /* @__PURE__ */ new Map();
      if (b !== 0 && M === 0) v.set(w, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (M !== 0 && b === 0) for (let f = 0; f < r.length; f++) i.has(f) || v.set(f, [
        0,
        0,
        M,
        0,
        0,
        0
      ]);
      else if (b !== 0 && M !== 0) for (let f = 0; f < r.length; f++) i.has(f) || v.set(f, [
        f === w ? b : 0,
        0,
        M,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: v
      }), Je();
    }
    function Ps() {
      const t = X("L"), o = Math.round(X("nElem")), n = X("F"), l = t / o, s = [], c = [];
      for (let p = 0; p <= o; p++) s.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) c.push([
        p,
        p + 1
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
      const t = X("Lx") || 15, o = X("Ly") || 10, n = X("meshSize") || 0.5, l = X("q") || -3, s = X("t") || 1, c = X("E") || 3e7, a = X("nu") || 0.3, r = c / (2 * (1 + a)), p = ht === 1 ? "Membrana" : ht === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: i, boundaryIndices: b } = to({
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
      }), M = t * o, w = l * M / d.length, v = new Map(b.map((g) => [
        g,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(d.map((g, S) => [
        S,
        [
          0,
          0,
          w,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = d, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: v,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(i.map((g, S) => [
          S,
          c
        ])),
        elasticitiesOrthogonal: new Map(i.map((g, S) => [
          S,
          c
        ])),
        thicknesses: new Map(i.map((g, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(i.map((g, S) => [
          S,
          a
        ])),
        shearModuli: new Map(i.map((g, S) => [
          S,
          r
        ]))
      });
      try {
        const g = Ft(d, i, e.nodeInputs.val, e.elementInputs.val);
        g && e.deformOutputs && (e.deformOutputs.val = g);
        const S = Co(d, i, e.elementInputs.val, g);
        S && e.analyzeOutputs && (e.analyzeOutputs.val = S), console.log(`Plate 3Q [${p}]: ${d.length} nodes, ${i.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function Un() {
      const t = X("Lx") || 10, o = X("Ly") || 10, n = Math.round(X("nx") || 16), l = Math.round(X("ny") || 16), s = X("t") || 0.2, c = X("q") || -10, a = X("E") || 3e7, r = X("nu") || 0.3, p = wt === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 0;
      return We.plateQ4(t, o, n, l, p, c, s, a, r, i);
    }
    function Kn() {
      const t = X("a") || 6, o = X("b") || 4, n = Math.round(X("nx") || 12), l = Math.round(X("ny") || 8), s = X("t") || 0.1, c = X("q") || -10, a = X("E") || 35e6, r = X("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 0, i = We.plateQ4(t, o, n, l, "simply-supported", c, s, a, r, d), b = a * s * s * s / (12 * (1 - r * r));
      let M = 0;
      for (let w = 1; w <= 19; w += 2) for (let v = 1; v <= 19; v += 2) {
        const f = w * w / (t * t) + v * v / (o * o);
        M += 1 / (w * v * f * f);
      }
      if (M *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${M.toExponential(6)}`), i) {
        const w = Math.abs((Math.abs(i.centerW || 0) - M) / M * 100);
        console.log(`   WASM w_center = ${(i.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return i;
    }
    function Zn() {
      const t = X("t") || 0.2, o = X("q") || -10, n = X("E") || 35e6, l = X("nu") || 0.2, s = X("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = c.reduce((E, m) => E + m, 0), p = a.reduce((E, m) => E + m, 0), d = [
        0
      ];
      for (const E of c) d.push(d[d.length - 1] + E);
      const i = [
        0
      ];
      for (const E of a) i.push(i[i.length - 1] + E);
      const b = Math.max(2, Math.round(r / s)), M = Math.max(2, Math.round(p / s)), w = r / b, v = p / M, f = [];
      for (let E = 0; E <= M; E++) for (let m = 0; m <= b; m++) f.push([
        m * w,
        E * v
      ]);
      const g = [], S = /* @__PURE__ */ new Set();
      for (const E of d) for (const m of i) {
        let A = 1 / 0, F = 0;
        for (let H = 0; H < f.length; H++) {
          const G = Math.hypot(f[H][0] - E, f[H][1] - m);
          G < A && (A = G, F = H);
        }
        S.has(F) || (S.add(F), g.push({
          node: F,
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
      ][k]}]: ${r}\xD7${p}m, ${b}\xD7${M} elem, ${S.size} columnas`);
      const O = performance.now(), N = Pn({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: p,
        meshNx: b,
        meshNy: M,
        bcType: "none",
        pressure: o,
        theoryType: k,
        springs: g
      }), h = performance.now() - O;
      console.log(`Solved in ${h.toFixed(1)} ms, w_max = ${N.maxW.toExponential(4)}`);
      const u = N.nodeResults.map((E) => [
        E.x,
        E.y,
        0
      ]), $ = N.elementResults.map((E) => [
        ...E.nodes
      ]);
      e.nodes.val = u, e.elements.val = $;
      const z = /* @__PURE__ */ new Map();
      N.nodeResults.forEach((E, m) => {
        z.set(m, [
          0,
          0,
          E.w,
          E.bx,
          E.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: z
      });
      const C = /* @__PURE__ */ new Map();
      for (const E of S) C.set(E, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const y = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const E = o * r * p / u.length;
        u.forEach((m, A) => {
          C.has(A) || y.set(A, [
            0,
            0,
            E,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: C,
        loads: y
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const E = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
        N.elementResults.forEach((F, H) => {
          E.set(H, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), m.set(H, [
            F.Myy,
            F.Myy,
            F.Myy
          ]), A.set(H, [
            F.Mxy,
            F.Mxy,
            F.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: E,
          bendingYY: m,
          bendingXY: A
        };
      }
      setTimeout(() => Et(), 50), Je();
    }
    function Qn() {
      const t = X("L") || 4, o = X("H") || 2, n = X("t") || 0.1, l = X("E") || 2e7, s = X("nu") || 0.2, c = l / (2 * (1 + s)), a = X("q") || -100, r = X("b") || 0.8, p = X("meshSize") || 0.2, { nodes: d, elements: i, boundaryIndices: b } = to({
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
      }), M = d, w = 0.4, v = /* @__PURE__ */ new Map();
      for (let h = 0; h < M.length; h++) {
        const u = M[h][0], $ = M[h][1];
        Math.abs($) < 1e-6 && (u <= w + 1e-6 || u >= t - w - 1e-6) && v.set(h, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - r) / 2, g = f + r, S = [];
      for (let h = 0; h < M.length; h++) if (Math.abs(M[h][1] - o) < 1e-6) {
        const u = M[h][0];
        u >= f - 1e-6 && u <= g + 1e-6 && S.push(h);
      }
      const I = a * r / Math.max(S.length, 1), k = /* @__PURE__ */ new Map();
      for (const h of S) k.set(h, [
        0,
        I,
        0,
        0,
        0,
        0
      ]);
      const O = {
        elasticities: new Map(i.map((h, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(i.map((h, u) => [
          u,
          l
        ])),
        thicknesses: new Map(i.map((h, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(i.map((h, u) => [
          u,
          s
        ])),
        shearModuli: new Map(i.map((h, u) => [
          u,
          c
        ]))
      }, N = {
        supports: v,
        loads: k
      };
      try {
        const h = Ft(M, i, N, O), u = Co(M, i, O, h), $ = M.map((C) => [
          C[0],
          0,
          C[1]
        ]);
        if (e.nodes.val = $, e.elements.val = i, h && h.deformations) {
          const C = /* @__PURE__ */ new Map();
          h.deformations.forEach((y, E) => {
            C.set(E, [
              y[0],
              y[2],
              y[1],
              y[3],
              y[5],
              y[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: C
          });
        }
        if (e.nodeInputs) {
          const C = /* @__PURE__ */ new Map();
          v.forEach((E, m) => C.set(m, E));
          const y = /* @__PURE__ */ new Map();
          k.forEach((E, m) => y.set(m, [
            E[0],
            E[2],
            E[1],
            E[3],
            E[5],
            E[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: C,
            loads: y
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let z = 0;
        h && h.deformations && h.deformations.forEach((C) => {
          const y = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          z = Math.max(z, y);
        }), console.log(`Viga Alta: ${M.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${z.toExponential(4)}`);
      } catch (h) {
        console.warn("Viga Alta analysis failed:", h.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function es() {
      const t = X("H") || 4, o = X("B") || 3, n = X("tw") || 0.3, l = X("tb") || 0.4, s = X("meshSize") || 0.2, c = X("E") || 25e6, a = X("nu") || 0.2, r = c / (2 * (1 + a)), p = X("gamma") || 18, d = X("Ka") || 0.33, i = X("Es") || 5e4, b = X("nus") || 0.3, M = i / (2 * (1 + b)), w = X("kn") || 1e6, v = X("ks") || 1e4, f = X("gammaW") || 9.81, g = X("Hw") || 3.5, S = X("qs") || 0, I = wt, k = o * 0.3, O = o * 0.7, N = [
        [
          -k,
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
          -k,
          l,
          0
        ]
      ];
      let h = [], u = [], $ = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C;
      if (I === 0) {
        const m = to({
          points: N,
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
        h = m.nodes, u = m.elements;
        for (let F = 0; F < h.length; F++) Math.abs(h[F][1]) < 1e-6 && $.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const A = [];
        for (let F = 0; F < h.length; F++) {
          const H = h[F][0], G = h[F][1];
          Math.abs(H - n) < s * 0.6 && G >= l - 1e-6 && A.push({
            idx: F,
            y: G
          });
        }
        A.sort((F, H) => F.y - H.y);
        for (let F = 0; F < A.length; F++) {
          const { idx: H, y: G } = A[F], Z = l + t - G, K = d * p * Z + d * S;
          let te = s;
          F > 0 && F < A.length - 1 ? te = (A[F + 1].y - A[F - 1].y) / 2 : F === 0 && A.length > 1 ? te = (A[1].y - A[0].y) / 2 : F === A.length - 1 && A.length > 1 && (te = (A[F].y - A[F - 1].y) / 2);
          const j = K * te;
          Math.abs(j) > 1e-10 && z.set(H, [
            j,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        C = {
          elasticities: new Map(u.map((F, H) => [
            H,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, H) => [
            H,
            c
          ])),
          thicknesses: new Map(u.map((F, H) => [
            H,
            n
          ])),
          poissonsRatios: new Map(u.map((F, H) => [
            H,
            a
          ])),
          shearModuli: new Map(u.map((F, H) => [
            H,
            r
          ]))
        };
      } else if (I === 1 || I === 2) {
        const m = O, A = l + t;
        if (I === 2) {
          const F = [
            [
              -k,
              0,
              0
            ],
            [
              m,
              0,
              0
            ],
            [
              m,
              A,
              0
            ],
            [
              n,
              A,
              0
            ],
            [
              0,
              A,
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
          ], H = Math.max(3, Math.ceil((A - l) / s)), G = [];
          for (let Q = 0; Q <= H; Q++) G.push([
            n,
            l + Q * (A - l) / H,
            0
          ]);
          const Z = to({
            points: [
              ...F,
              ...G
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
          h = Z.nodes, u = Z.elements;
          const K = s * 0.4, te = [];
          for (let Q = 0; Q < h.length; Q++) {
            const Ie = h[Q][0], je = h[Q][1];
            Math.abs(Ie - n) < K && je >= l - K && te.push(Q);
          }
          te.sort((Q, Ie) => h[Q][1] - h[Ie][1]);
          const j = [
            te[0]
          ];
          for (let Q = 1; Q < te.length; Q++) {
            const Ie = h[te[Q]][1] - h[j[j.length - 1]][1];
            Math.abs(Ie) > s * 0.05 && j.push(te[Q]);
          }
          te.length = 0, te.push(...j);
          const he = /* @__PURE__ */ new Map();
          for (const Q of te) {
            const Ie = h.length;
            h.push([
              h[Q][0],
              h[Q][1],
              h[Q][2]
            ]), he.set(Q, Ie);
          }
          const ze = u.length, ue = [];
          for (let Q = 0; Q < ze; Q++) {
            const Ie = u[Q], je = (h[Ie[0]][0] + h[Ie[1]][0] + h[Ie[2]][0]) / 3, pt = (h[Ie[0]][1] + h[Ie[1]][1] + h[Ie[2]][1]) / 3, $t = je >= -k && je <= O && pt >= 0 && pt <= l, zo = je >= 0 && je <= n && pt >= l && pt <= l + t, co = $t || zo;
            if (ue.push(!co), !co) for (let Kt = 0; Kt < Ie.length; Kt++) {
              const Qt = he.get(Ie[Kt]);
              Qt !== void 0 && (Ie[Kt] = Qt);
            }
          }
          const q = u.length;
          for (let Q = 0; Q < te.length - 1; Q++) {
            const Ie = te[Q], je = te[Q + 1], pt = he.get(Ie), $t = he.get(je);
            u.push([
              je,
              Ie,
              pt,
              $t
            ]);
          }
          const oe = u.length - q, se = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
          for (let Q = 0; Q < ze; Q++) ue[Q] ? (se.set(Q, i), ee.set(Q, i), re.set(Q, b), fe.set(Q, M), J.set(Q, 1)) : (se.set(Q, c), ee.set(Q, c), re.set(Q, a), fe.set(Q, r), J.set(Q, 1));
          for (let Q = q; Q < u.length; Q++) se.set(Q, w), ee.set(Q, 0), re.set(Q, 0), fe.set(Q, v), J.set(Q, 0);
          C = {
            elasticities: se,
            elasticitiesOrthogonal: ee,
            thicknesses: J,
            poissonsRatios: re,
            shearModuli: fe
          };
          for (let Q = 0; Q < h.length; Q++) {
            const Ie = h[Q][0], je = h[Q][1];
            Math.abs(je) < 1e-6 ? $.set(Q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ie - m) < s * 0.1 && $.set(Q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let Q = 0; Q < ze; Q++) {
            if (!ue[Q]) continue;
            const Ie = u[Q], je = h[Ie[0]], pt = h[Ie[1]], $t = h[Ie[2]], zo = Math.abs((pt[0] - je[0]) * ($t[1] - je[1]) - ($t[0] - je[0]) * (pt[1] - je[1])) / 2, co = -p * zo / 3;
            for (const Kt of Ie) {
              const Qt = z.get(Kt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Qt[1] += co, z.set(Kt, Qt);
            }
          }
          if (S > 0) {
            const Q = [];
            for (let Ie = 0; Ie < h.length; Ie++) {
              const je = h[Ie][0], pt = h[Ie][1];
              Math.abs(pt - A) < s * 0.1 && je > n - 1e-6 && Q.push({
                idx: Ie,
                x: je
              });
            }
            Q.sort((Ie, je) => Ie.x - je.x);
            for (let Ie = 0; Ie < Q.length; Ie++) {
              let je = s;
              Ie > 0 && Ie < Q.length - 1 ? je = (Q[Ie + 1].x - Q[Ie - 1].x) / 2 : Ie === 0 && Q.length > 1 ? je = (Q[1].x - Q[0].x) / 2 : Ie === Q.length - 1 && Q.length > 1 && (je = (Q[Ie].x - Q[Ie - 1].x) / 2);
              const pt = -S * je, $t = z.get(Q[Ie].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              $t[1] += pt, z.set(Q[Ie].idx, $t);
            }
          }
          console.log(`  Interfaz Goodman: ${te.length} nodos interfaz, ${oe} elem interfaz, kn=${w}, ks=${v}`);
        } else {
          const F = [
            [
              -k,
              0,
              0
            ],
            [
              m,
              0,
              0
            ],
            [
              m,
              A,
              0
            ],
            [
              n,
              A,
              0
            ],
            [
              0,
              A,
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
          ], H = [
            [
              n,
              l,
              0
            ]
          ], G = to({
            points: [
              ...F,
              ...H
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
          h = G.nodes, u = G.elements;
          const Z = (q) => {
            const oe = (h[q[0]][0] + h[q[1]][0] + h[q[2]][0]) / 3, se = (h[q[0]][1] + h[q[1]][1] + h[q[2]][1]) / 3, ee = oe >= -k && oe <= O && se >= 0 && se <= l, J = oe >= 0 && oe <= n && se >= l && se <= l + t;
            return ee || J;
          }, K = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ue = [];
          for (let q = 0; q < u.length; q++) {
            const oe = Z(u[q]);
            ue.push(!oe), oe ? (K.set(q, c), te.set(q, c), he.set(q, a), ze.set(q, r), j.set(q, 1)) : (K.set(q, i), te.set(q, i), he.set(q, b), ze.set(q, M), j.set(q, 1));
          }
          C = {
            elasticities: K,
            elasticitiesOrthogonal: te,
            thicknesses: j,
            poissonsRatios: he,
            shearModuli: ze
          };
          for (let q = 0; q < h.length; q++) {
            const oe = h[q][0], se = h[q][1];
            Math.abs(se) < 1e-6 ? $.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(oe - m) < s * 0.1 && $.set(q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let q = 0; q < u.length; q++) {
            if (!ue[q]) continue;
            const oe = u[q], se = h[oe[0]], ee = h[oe[1]], J = h[oe[2]], re = Math.abs((ee[0] - se[0]) * (J[1] - se[1]) - (J[0] - se[0]) * (ee[1] - se[1])) / 2, fe = -p * re / 3;
            for (const Q of oe) {
              const Ie = z.get(Q) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ie[1] += fe, z.set(Q, Ie);
            }
          }
          if (S > 0) {
            const q = [];
            for (let oe = 0; oe < h.length; oe++) {
              const se = h[oe][0], ee = h[oe][1];
              Math.abs(ee - A) < s * 0.1 && se > n - 1e-6 && q.push({
                idx: oe,
                x: se
              });
            }
            q.sort((oe, se) => oe.x - se.x);
            for (let oe = 0; oe < q.length; oe++) {
              let se = s;
              oe > 0 && oe < q.length - 1 ? se = (q[oe + 1].x - q[oe - 1].x) / 2 : oe === 0 && q.length > 1 ? se = (q[1].x - q[0].x) / 2 : oe === q.length - 1 && q.length > 1 && (se = (q[oe].x - q[oe - 1].x) / 2);
              const ee = -S * se, J = z.get(q[oe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              J[1] += ee, z.set(q[oe].idx, J);
            }
          }
        }
      }
      if (I === 3) {
        const m = to({
          points: N,
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
        h = m.nodes, u = m.elements;
        for (let Z = 0; Z < h.length; Z++) Math.abs(h[Z][1]) < 1e-6 && $.set(Z, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const A = l + t, F = Math.min(g, t), H = A - F, G = [];
        for (let Z = 0; Z < h.length; Z++) {
          const K = h[Z][0], te = h[Z][1];
          Math.abs(K - n) < s * 0.6 && te >= l - 1e-6 && G.push({
            idx: Z,
            y: te
          });
        }
        G.sort((Z, K) => Z.y - K.y);
        for (let Z = 0; Z < G.length; Z++) {
          const { idx: K, y: te } = G[Z], j = Math.max(0, A - te);
          if (j <= 0 || te < H - 1e-6) continue;
          const he = Math.min(j, F), ze = f * he;
          let ue = s;
          Z > 0 && Z < G.length - 1 ? ue = (G[Z + 1].y - G[Z - 1].y) / 2 : Z === 0 && G.length > 1 ? ue = (G[1].y - G[0].y) / 2 : Z === G.length - 1 && G.length > 1 && (ue = (G[Z].y - G[Z - 1].y) / 2);
          const q = ze * ue;
          Math.abs(q) > 1e-10 && z.set(K, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        C = {
          elasticities: new Map(u.map((Z, K) => [
            K,
            c
          ])),
          elasticitiesOrthogonal: new Map(u.map((Z, K) => [
            K,
            c
          ])),
          thicknesses: new Map(u.map((Z, K) => [
            K,
            n
          ])),
          poissonsRatios: new Map(u.map((Z, K) => [
            K,
            a
          ])),
          shearModuli: new Map(u.map((Z, K) => [
            K,
            r
          ]))
        };
      }
      const y = {
        supports: $,
        loads: z
      }, E = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const m = Ft(h, u, y, C), A = u.filter((j) => j.length === 3), F = {};
        for (const j of Object.keys(C)) {
          const he = C[j];
          if (he && he instanceof Map) {
            const ze = /* @__PURE__ */ new Map();
            let ue = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (he.has(q) && ze.set(ue, he.get(q)), ue++);
            F[j] = ze;
          }
        }
        const H = Co(h, A, F, m), G = h.map((j) => [
          j[0],
          0,
          j[1]
        ]);
        if (e.nodes.val = G, e.elements.val = A, m && m.deformations) {
          const j = /* @__PURE__ */ new Map();
          m.deformations.forEach((he, ze) => {
            j.set(ze, [
              he[0],
              he[2],
              he[1],
              he[3],
              he[5],
              he[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: j
          });
        }
        const Z = /* @__PURE__ */ new Map();
        $.forEach((j, he) => Z.set(he, j));
        const K = /* @__PURE__ */ new Map();
        z.forEach((j, he) => K.set(he, [
          j[0],
          j[2],
          j[1],
          j[3],
          j[5],
          j[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: Z,
          loads: K
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let te = 0;
        m && m.deformations && m.deformations.forEach((j) => {
          const he = Math.sqrt(j[0] * j[0] + j[1] * j[1] + j[2] * j[2]);
          te = Math.max(te, he);
        }), console.log(`Muro Contencion [${E[I]}]: ${h.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${p}, qs=${S}`), I === 1 && console.log(`  Es=${i}, nus=${b}`), I === 2 && console.log(`  Es=${i}, nus=${b}, kn=${w}, ks=${v}`), I === 3 && console.log(`  gammaW=${f}, Hw=${g}`), console.log(`  max|u| = ${te.toExponential(4)}`);
      } catch (m) {
        console.warn("Muro Contencion failed:", m.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ts() {
      const t = X("Lx") || 2, o = X("Ly") || 2, n = X("t") || 0.5, l = X("colA") || 0.4, s = X("colH") || 1.5, c = Math.round(X("nx") || 8), a = Math.round(X("ny") || 8), r = X("E") || 25e6, p = X("nu") || 0.2, d = X("P") || -500, i = X("Mx") || 0, b = X("My") || 0, M = X("ks") || 2e4, w = t / c, v = o / a, f = t / 2, g = o / 2, S = l / 2, I = [];
      for (let $ = 0; $ <= a; $++) for (let z = 0; z <= c; z++) {
        const C = $ * (c + 1) + z;
        let y = w, E = v;
        (z === 0 || z === c) && (y = w / 2), ($ === 0 || $ === a) && (E = v / 2), I.push({
          node: C,
          dof: 0,
          k: M * y * E
        });
      }
      let k = 0;
      for (let $ = 0; $ <= a; $++) for (let z = 0; z <= c; z++) Math.abs(z * w - f) <= S + 1e-6 && Math.abs($ * v - g) <= S + 1e-6 && k++;
      const O = d / Math.max(k, 1), N = [];
      for (let $ = 0; $ <= a; $++) for (let z = 0; z <= c; z++) {
        const C = z * w, y = $ * v;
        Math.abs(C - f) <= S + 1e-6 && Math.abs(y - g) <= S + 1e-6 && N.push({
          node: $ * (c + 1) + z,
          dof: 0,
          value: O
        });
      }
      if (Math.abs(i) > 1e-6) {
        const $ = S > 1e-6 ? S : v, z = i / $;
        for (let C = 0; C <= a; C++) for (let y = 0; y <= c; y++) {
          const E = y * w, m = C * v;
          if (Math.abs(E - f) <= S + 1e-6 && Math.abs(m - g) <= S + 1e-6) {
            const A = m - g;
            if (Math.abs(A) > 1e-6) {
              const F = A > 0 ? 1 : -1;
              N.push({
                node: C * (c + 1) + y,
                dof: 0,
                value: F * z / k * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const $ = S > 1e-6 ? S : w, z = b / $;
        for (let C = 0; C <= a; C++) for (let y = 0; y <= c; y++) {
          const E = y * w, m = C * v;
          if (Math.abs(E - f) <= S + 1e-6 && Math.abs(m - g) <= S + 1e-6) {
            const A = E - f;
            if (Math.abs(A) > 1e-6) {
              const F = A > 0 ? 1 : -1;
              N.push({
                node: C * (c + 1) + y,
                dof: 0,
                value: F * z / k * 2
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
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${a} elem`), console.log(`  col=${l}m, P=${d}, Mx=${i}, My=${b}, ks=${M}`);
      try {
        const $ = Pn({
          E: r,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: c,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: I,
          pointLoads: N
        });
        console.log(`  Solved: w_max = ${$.maxW.toExponential(4)}`);
        const z = $.nodeResults.map((H) => [
          H.x,
          H.y,
          0
        ]), C = z.length;
        z.push([
          f - S,
          g - S,
          0
        ]), z.push([
          f + S,
          g - S,
          0
        ]), z.push([
          f + S,
          g + S,
          0
        ]), z.push([
          f - S,
          g + S,
          0
        ]), z.push([
          f - S,
          g - S,
          s
        ]), z.push([
          f + S,
          g - S,
          s
        ]), z.push([
          f + S,
          g + S,
          s
        ]), z.push([
          f - S,
          g + S,
          s
        ]);
        const y = $.elementResults.map((H) => [
          ...H.nodes
        ]);
        y.push([
          C,
          C + 4
        ]), y.push([
          C + 1,
          C + 5
        ]), y.push([
          C + 2,
          C + 6
        ]), y.push([
          C + 3,
          C + 7
        ]), y.push([
          C + 4,
          C + 5
        ]), y.push([
          C + 5,
          C + 6
        ]), y.push([
          C + 6,
          C + 7
        ]), y.push([
          C + 7,
          C + 4
        ]), y.push([
          C,
          C + 1
        ]), y.push([
          C + 1,
          C + 2
        ]), y.push([
          C + 2,
          C + 3
        ]), y.push([
          C + 3,
          C
        ]), e.nodes.val = z, e.elements.val = y;
        const E = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((H, G) => {
          E.set(G, [
            0,
            0,
            H.w,
            H.bx,
            H.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: E
        });
        const m = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((H, G) => {
          const Z = H.x, K = H.y;
          (Z < 1e-6 || Z > t - 1e-6 || K < 1e-6 || K > o - 1e-6) && m.set(G, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const A = /* @__PURE__ */ new Map();
        if (A.set(C + 4, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), A.set(C + 5, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), A.set(C + 6, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), A.set(C + 7, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: m,
          loads: A
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const H = $.elementResults.length, G = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
          $.elementResults.forEach((te, j) => {
            G.set(j, [
              te.Mxx,
              te.Mxx,
              te.Mxx
            ]), Z.set(j, [
              te.Myy,
              te.Myy,
              te.Myy
            ]), K.set(j, [
              te.Mxy,
              te.Mxy,
              te.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: G,
            bendingYY: Z,
            bendingXY: K
          };
        }
        const F = tt();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch ($) {
        console.warn("Zapata solver failed:", $.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function os() {
      const t = X("Lx") || 0.4, o = X("Ly") || 0.4, n = X("t") || 0.025, l = X("dBolt") || 0.022, s = X("sx") || 0.28, c = X("sy") || 0.28, a = X("colA") || 0.2, r = X("meshSize") || 8e-3, p = X("E") || 2e8, d = X("nu") || 0.3, i = p / (2 * (1 + d)), b = X("P") || -200, M = Math.round(X("nBolts") || 4), w = t / 2, v = o / 2, f = l / 2, g = a / 2, S = [];
      M >= 4 && (S.push([
        w - s / 2,
        v - c / 2
      ]), S.push([
        w + s / 2,
        v - c / 2
      ]), S.push([
        w + s / 2,
        v + c / 2
      ]), S.push([
        w - s / 2,
        v + c / 2
      ])), M >= 6 && (S.push([
        w,
        v - c / 2
      ]), S.push([
        w,
        v + c / 2
      ])), M >= 8 && (S.push([
        w - s / 2,
        v
      ]), S.push([
        w + s / 2,
        v
      ]));
      const { nodes: I, elements: k } = to({
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
      }), O = (E, m) => {
        for (const [A, F] of S) if ((E - A) * (E - A) + (m - F) * (m - F) < f * f) return true;
        return false;
      }, N = k.filter((E) => {
        const m = (I[E[0]][0] + I[E[1]][0] + I[E[2]][0]) / 3, A = (I[E[0]][1] + I[E[1]][1] + I[E[2]][1]) / 3;
        return !O(m, A);
      }), h = I, u = /* @__PURE__ */ new Map();
      for (let E = 0; E < h.length; E++) {
        const m = h[E][0], A = h[E][1];
        for (const [F, H] of S) {
          const G = Math.sqrt((m - F) * (m - F) + (A - H) * (A - H));
          G >= f * 0.7 && G <= f * 1.5 && u.set(E, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const $ = /* @__PURE__ */ new Map();
      let z = 0;
      for (let E = 0; E < h.length; E++) {
        const m = h[E][0], A = h[E][1];
        Math.abs(m - w) <= g && Math.abs(A - v) <= g && z++;
      }
      const C = b / Math.max(z, 1);
      for (let E = 0; E < h.length; E++) {
        const m = h[E][0], A = h[E][1];
        if (Math.abs(m - w) <= g && Math.abs(A - v) <= g) {
          const F = $.get(E) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += C, $.set(E, F);
        }
      }
      const y = {
        elasticities: new Map(N.map((E, m) => [
          m,
          p
        ])),
        elasticitiesOrthogonal: new Map(N.map((E, m) => [
          m,
          p
        ])),
        thicknesses: new Map(N.map((E, m) => [
          m,
          n
        ])),
        poissonsRatios: new Map(N.map((E, m) => [
          m,
          d
        ])),
        shearModuli: new Map(N.map((E, m) => [
          m,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${M} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${N.length} triangulos, ${h.length} nodos`);
      try {
        const E = Ft(h, N, {
          supports: u,
          loads: $
        }, y), m = Co(h, N, y, E);
        e.nodes.val = h, e.elements.val = N, E && e.deformOutputs && (e.deformOutputs.val = E), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: $
        }), e.elementInputs && (e.elementInputs.val = {}), m && e.analyzeOutputs && (e.analyzeOutputs.val = m);
        let A = 0;
        E && E.deformations && E.deformations.forEach((F) => {
          const H = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          A = Math.max(A, H);
        }), console.log(`  max|u| = ${A.toExponential(4)}`);
      } catch (E) {
        console.warn("Placa Base failed:", E.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ns() {
      const t = X("colB") || 0.3, o = X("colH") || 0.3, n = X("colT") || 8e-3, l = X("colLen") || 1.5, s = X("Lx") || 0.45, c = X("Ly") || 0.45, a = X("tPlaca") || 0.025, r = X("dBolt") || 0.022, p = X("sx") || 0.32, d = X("sy") || 0.32, i = Math.round(X("nSubColV") || 6), b = Math.round(X("nSubColH") || 4), M = Math.round(X("nSubPlaca") || 10), w = X("E") || 2e8, v = X("nu") || 0.3, f = w / (2 * (1 + v)), g = X("P") || -300, S = s / 2, I = c / 2, k = r / 2, O = t / 2, N = o / 2, h = [], u = [], $ = M, z = s / $, C = c / $, y = (ee, J) => J * ($ + 1) + ee;
      for (let ee = 0; ee <= $; ee++) for (let J = 0; J <= $; J++) h.push([
        J * z,
        ee * C,
        0
      ]);
      const E = [
        [
          S - p / 2,
          I - d / 2
        ],
        [
          S + p / 2,
          I - d / 2
        ],
        [
          S + p / 2,
          I + d / 2
        ],
        [
          S - p / 2,
          I + d / 2
        ]
      ], m = (ee, J) => {
        for (const [re, fe] of E) if ((ee - re) * (ee - re) + (J - fe) * (J - fe) < k * k) return true;
        return false;
      }, A = u.length;
      for (let ee = 0; ee < $; ee++) for (let J = 0; J < $; J++) {
        const re = (J + 0.5) * z, fe = (ee + 0.5) * C;
        m(re, fe) || u.push([
          y(J, ee),
          y(J + 1, ee),
          y(J + 1, ee + 1),
          y(J, ee + 1)
        ]);
      }
      const F = u.length - A, H = i, G = b, Z = [
        [
          S - O,
          I - N
        ],
        [
          S + O,
          I - N
        ],
        [
          S + O,
          I + N
        ],
        [
          S - O,
          I + N
        ]
      ], K = u.length, te = [
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
      ], j = (ee, J) => {
        for (let re = 0; re < ($ + 1) * ($ + 1); re++) if (Math.abs(h[re][0] - ee) < z * 0.3 && Math.abs(h[re][1] - J) < C * 0.3 && Math.abs(h[re][2]) < 1e-6) return re;
        return -1;
      };
      for (const [ee, J] of te) {
        const [re, fe] = Z[ee], [Q, Ie] = Z[J], je = [];
        for (let pt = 0; pt <= H; pt++) {
          const $t = [], zo = pt / H * l;
          for (let co = 0; co <= G; co++) {
            const Kt = co / G, Qt = re + Kt * (Q - re), An = fe + Kt * (Ie - fe);
            if (pt === 0) {
              const eo = j(Qt, An);
              if (eo >= 0) {
                $t.push(eo);
                continue;
              }
            }
            let Cn = -1;
            for (let eo = 0; eo < h.length; eo++) if (Math.abs(h[eo][0] - Qt) < 1e-6 && Math.abs(h[eo][1] - An) < 1e-6 && Math.abs(h[eo][2] - zo) < 1e-6) {
              Cn = eo;
              break;
            }
            Cn >= 0 ? $t.push(Cn) : ($t.push(h.length), h.push([
              Qt,
              An,
              zo
            ]));
          }
          je.push($t);
        }
        for (let pt = 0; pt < H; pt++) for (let $t = 0; $t < G; $t++) u.push([
          je[pt][$t],
          je[pt][$t + 1],
          je[pt + 1][$t + 1],
          je[pt + 1][$t]
        ]);
      }
      const he = u.length - K, ze = /* @__PURE__ */ new Map();
      for (let ee = 0; ee < ($ + 1) * ($ + 1); ee++) {
        const J = h[ee][0], re = h[ee][1];
        for (const [fe, Q] of E) {
          const Ie = Math.sqrt((J - fe) * (J - fe) + (re - Q) * (re - Q));
          Ie >= k * 0.5 && Ie <= k * 2 && ze.set(ee, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const ue = /* @__PURE__ */ new Map(), q = [];
      for (let ee = 0; ee < h.length; ee++) Math.abs(h[ee][2] - l) < 1e-6 && q.push(ee);
      const oe = g / Math.max(q.length, 1);
      for (const ee of q) ue.set(ee, [
        0,
        0,
        oe,
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
      for (let ee = A; ee < A + F; ee++) se.elasticities.set(ee, w), se.poissonsRatios.set(ee, v), se.thicknesses.set(ee, a), se.shearModuli.set(ee, f);
      for (let ee = K; ee < K + he; ee++) se.elasticities.set(ee, w), se.poissonsRatios.set(ee, v), se.thicknesses.set(ee, n), se.shearModuli.set(ee, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${he} Q4 columna = ${u.length} total`), console.log(`  ${h.length} nodos, P=${g} kN`);
      try {
        const ee = Ft(h, u, {
          supports: ze,
          loads: ue
        }, se), J = Co(h, u, se, ee);
        e.nodes.val = h, e.elements.val = u, ee && e.deformOutputs && (e.deformOutputs.val = ee), e.nodeInputs && (e.nodeInputs.val = {
          supports: ze,
          loads: ue
        }), e.elementInputs && (e.elementInputs.val = se), J && e.analyzeOutputs && (e.analyzeOutputs.val = J);
        let re = 0;
        (ee == null ? void 0 : ee.deformations) && ee.deformations.forEach((fe) => {
          const Q = Math.sqrt(fe[0] * fe[0] + fe[1] * fe[1] + fe[2] * fe[2]);
          re = Math.max(re, Q);
        }), console.log(`  max|u| = ${re.toExponential(4)}`);
      } catch (ee) {
        console.warn("Col+Placa failed:", ee.message), e.nodes.val = h, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ze,
          loads: ue
        });
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ss() {
      const t = X("H") || 6, o = X("angle") || 45, n = X("bTop") || 3, l = X("bBot") || 3, s = X("meshSize") || 2, c = X("E") || 5e4, a = X("nu") || 0.3, r = X("gamma") || 18, p = X("c") || 15, d = X("phi") || 30, i = X("qs") || 0, b = t / Math.tan(o * Math.PI / 180), M = l + b + n, w = t, v = [
        [
          0,
          -w,
          0
        ],
        [
          M,
          -w,
          0
        ],
        [
          M,
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
      ], { nodes: f, elements: g } = to({
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
      }), S = f, I = [], k = /* @__PURE__ */ new Map();
      for (let N = 0; N < S.length; N++) {
        const h = S[N][0], u = S[N][1];
        Math.abs(u + w) < 1e-6 ? (I.push({
          node: N,
          fixX: true,
          fixY: true
        }), k.set(N, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(h) < 1e-6 || Math.abs(h - M) < 1e-6) && (I.push({
          node: N,
          fixX: true,
          fixY: false
        }), k.set(N, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const O = t - s * 0.3;
      try {
        const N = S.map((m) => [
          m[0],
          m[1]
        ]), h = g.map((m) => [
          m[0],
          m[1],
          m[2]
        ]), u = da({
          nodes: N,
          elements: h,
          E: c,
          nu: a,
          gamma: r,
          c: p,
          phi: d,
          thickness: 1,
          supports: I,
          surcharge: i,
          surfaceYThreshold: O
        }), $ = S.map((m) => [
          m[0],
          0,
          m[1]
        ]);
        e.nodes.val = $, e.elements.val = g;
        const z = /* @__PURE__ */ new Map();
        for (let m = 0; m < u.displacements.length; m++) {
          const [A, F] = u.displacements[m];
          z.set(m, [
            A,
            0,
            F,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: z
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), e.elementInputs && (e.elementInputs.val = {});
        const C = /* @__PURE__ */ new Map();
        for (let m = 0; m < u.plasticStrain.length; m++) {
          const A = u.plasticStrain[m];
          C.set(m, [
            A,
            A,
            A
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: C
        });
        let y = 0;
        for (const [m, A] of u.displacements) {
          const F = Math.sqrt(m * m + A * A);
          y = Math.max(y, F);
        }
        let E = 0;
        for (const m of u.plasticStrain) E = Math.max(E, m);
        console.log(`Talud SRM: ${S.length} nodos, ${g.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${d}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${y.toExponential(4)}`), console.log(`  max \u03B5_pl = ${E.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (N) {
        console.warn("Talud SRM failed:", N.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    let Gt = null, gt = null, Zt = null;
    function Fs() {
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
      const o = Fo.find((n) => n.id === _);
      return t / o.toM;
    }
    function ut(t) {
      const o = Fo.find((n) => n.id === _);
      return t * o.toM;
    }
    function uo(t) {
      const o = Rn.find((l) => l.id === U.forceId), n = Fo.find((l) => l.id === U.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function pn(t) {
      const o = Rn.find((l) => l.id === U.forceId), n = Fo.find((l) => l.id === U.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function fn() {
      return U.label;
    }
    function Os() {
      switch (Fo.find((o) => o.id === _).id) {
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
    function Ns() {
      const t = uo(20594), o = uo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function as(t, o, n, l, s) {
      const c = Le.steelVigaType, a = c === 0 ? Zo() : Qo();
      if (Le.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], d = `b${n}${r}`, i = `h${n}${r}`, b = {};
          b[d] = +ft(p.b).toFixed(2), b[i] = +ft(p.h).toFixed(2), t.addBinding(b, d, {
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
          const p = (_a2 = r.target) == null ? void 0 : _a2.key, d = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), i = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          d && (o[parseInt(d[1])].b = ut(r.value), Se()), i && (o[parseInt(i[1])].h = ut(r.value), Se());
        });
      } else if (c <= 1) {
        for (let r = 0; r < o.length; r++) {
          const p = {};
          p[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(p, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: a
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const d = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          d && (o[parseInt(d[1])].profileIdx = r.value, Se());
        });
      } else if (c === 2) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], d = {}, i = `${n}${r}`;
          d[`bf${i}`] = +ft(p.bf ?? 0.2).toFixed(3), d[`h${i}`] = +ft(p.hf ?? 0.4).toFixed(3), d[`tf${i}`] = +ft(p.tf ?? 0.015).toFixed(3), d[`tw${i}`] = +ft(p.tw ?? 0.01).toFixed(3), t.addBinding(d, `bf${i}`, {
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
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const i = `${n}${d}`;
            p === `bf${i}` && (o[d].bf = ut(r.value), Se()), p === `h${i}` && (o[d].hf = ut(r.value), Se()), p === `tf${i}` && (o[d].tf = ut(r.value), Se()), p === `tw${i}` && (o[d].tw = ut(r.value), Se());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], d = {}, i = `${n}${r}`;
          d[`bc${i}`] = +ft(p.bc ?? 0.2).toFixed(3), d[`hc${i}`] = +ft(p.hc ?? 0.3).toFixed(3), d[`t${i}`] = +ft(p.t ?? 8e-3).toFixed(3), t.addBinding(d, `bc${i}`, {
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
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const i = `${n}${d}`;
            p === `bc${i}` && (o[d].bc = ut(r.value), Se()), p === `hc${i}` && (o[d].hc = ut(r.value), Se()), p === `t${i}` && (o[d].t = ut(r.value), Se());
          }
        });
      }
    }
    function Mo() {
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
      const o = Fs();
      if (!o) return;
      o.style.display = "";
      const n = T, l = Math.round(((_a2 = ie.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Os(), c = Ns(), a = ce.length || 1, r = pe.length || 1;
      for (; Le.perFloor.length < l; ) {
        const h = Le.perFloor.length > 0 ? JSON.parse(JSON.stringify(Le.perFloor[Le.perFloor.length - 1])) : kt(a, r);
        Le.perFloor.push(h);
      }
      Le.perFloor.length > l && (Le.perFloor.length = l);
      for (const h of Le.perFloor) {
        for (; h.vigasX.length < a; ) h.vigasX.push(h.vigasX.length > 0 ? {
          ...h.vigasX[h.vigasX.length - 1]
        } : At());
        for (h.vigasX.length > a && (h.vigasX.length = a); h.vigasY.length < r; ) h.vigasY.push(h.vigasY.length > 0 ? {
          ...h.vigasY[h.vigasY.length - 1]
        } : At());
        h.vigasY.length > r && (h.vigasY.length = r);
      }
      gt = new Bo({
        title: `Sections (${n.label})`,
        container: o
      });
      const p = {
        colMat: Le.colMat
      };
      if (gt.addBinding(p, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (h) => {
        Le.colMat = h.value, Mo(), Se();
      }), Le.colMat === 0) {
        const h = {
          forma: Le.colShape
        };
        gt.addBinding(h, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", ($) => {
          Le.colShape = $.value, Mo(), Se();
        });
        const u = {
          fc: +uo(Le.fc).toFixed(1)
        };
        gt.addBinding(u, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${fn()})`
        }), gt.on("change", ($) => {
          var _a3;
          ((_a3 = $.target) == null ? void 0 : _a3.key) === "fc" && (Le.fc = pn($.value), Se());
        });
      } else if (Le.colMat === 1) {
        const h = {
          colType: Le.steelColType
        };
        gt.addBinding(h, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Le.steelColType = u.value, Mo(), Se();
        });
      }
      gt.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: Le.vigaMat
      };
      if (gt.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (h) => {
        Le.vigaMat = h.value, Mo(), Se();
      }), Le.vigaMat === 1) {
        const h = {
          vigaType: Le.steelVigaType
        };
        gt.addBinding(h, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Le.steelVigaType = u.value, Mo(), Se();
        });
      }
      const i = Le.steelColType === 0 ? Zo() : Qo();
      Le.steelVigaType === 0 ? Zo() : Qo();
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
      for (let h = 0; h < l; h++) {
        const u = Le.perFloor[h], $ = gt.addFolder({
          title: `Piso ${h + 1}`,
          expanded: h < 2
        });
        if (Le.colMat === 0) if (Le.colShape === 1) {
          const z = {
            dCol: +ft(u.dCol).toFixed(2)
          };
          $.addBinding(z, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), $.on("change", (C) => {
            var _a3;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = ut(C.value), Se());
          });
        } else {
          const z = {
            bCol: +ft(u.bCol).toFixed(2),
            hCol: +ft(u.hCol).toFixed(2)
          };
          $.addBinding(z, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), $.addBinding(z, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), $.on("change", (C) => {
            var _a3, _b;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = ut(C.value), Se()), ((_b = C.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = ut(C.value), Se());
          });
        }
        else if (Le.colMat === 1) if (Le.steelColType <= 1) {
          const z = {
            col: u.colProfileIdx
          };
          $.addBinding(z, "col", {
            label: "Columna",
            options: i
          }).on("change", (C) => {
            u.colProfileIdx = C.value, Se();
          });
        } else if (Le.steelColType === 2) {
          const z = {
            bf: +ft(u.colBf ?? 0.3).toFixed(3),
            h: +ft(u.colHf ?? 0.3).toFixed(3),
            tf: +ft(u.colTf ?? 0.02).toFixed(3),
            tw: +ft(u.colTw ?? 0.012).toFixed(3)
          };
          $.addBinding(z, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), $.addBinding(z, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), $.addBinding(z, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), $.addBinding(z, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), $.on("change", (C) => {
            var _a3, _b, _c, _d;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = ut(C.value), Se()), ((_b = C.target) == null ? void 0 : _b.key) === "h" && (u.colHf = ut(C.value), Se()), ((_c = C.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = ut(C.value), Se()), ((_d = C.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = ut(C.value), Se());
          });
        } else {
          const z = {
            bc: +ft(u.colBc ?? 0.3).toFixed(3),
            hc: +ft(u.colHc ?? 0.3).toFixed(3),
            t: +ft(u.colT ?? 0.01).toFixed(3)
          };
          $.addBinding(z, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), $.addBinding(z, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), $.addBinding(z, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), $.on("change", (C) => {
            var _a3, _b, _c;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = ut(C.value), Se()), ((_b = C.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = ut(C.value), Se()), ((_c = C.target) == null ? void 0 : _c.key) === "t" && (u.colT = ut(C.value), Se());
          });
        }
        else {
          const z = {
            bc: +ft(u.colBc ?? 0.3).toFixed(3),
            hc: +ft(u.colHc ?? 0.3).toFixed(3),
            t: +ft(u.colT ?? 0.01).toFixed(3),
            Es: +uo(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +uo(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          $.addBinding(z, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), $.addBinding(z, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), $.addBinding(z, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), $.addBlade({
            view: "separator"
          });
          const C = +uo(1e8).toFixed(0), y = +uo(3e8).toFixed(0), E = Math.max(1, Math.round((y - C) / 200));
          $.addBinding(z, "Es", {
            min: C,
            max: y,
            step: E,
            label: `Es (${fn()})`
          }), $.addBinding(z, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), $.addBinding(z, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${fn()})`
          }), $.addBinding(z, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), $.on("change", (m) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = m.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = ut(m.value), Se()), ((_b = m.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = ut(m.value), Se()), ((_c = m.target) == null ? void 0 : _c.key) === "t" && (u.colT = ut(m.value), Se()), ((_d = m.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = pn(m.value), Se()), ((_e2 = m.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = m.value, Se()), ((_f = m.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = pn(m.value), Se()), ((_g = m.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = m.value, Se());
          });
        }
        if (u.vigasX.length > 0) {
          const z = $.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          as(z, u.vigasX, "x", s, b);
        }
        if (u.vigasY.length > 0) {
          const z = $.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          as(z, u.vigasY, "y", s, b);
        }
      }
      gt.addBlade({
        view: "separator"
      });
      const M = gt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: me,
        direccion: He === "x" ? 0 : 1,
        cantidad: Ne
      };
      M.addBinding(w, "activar", {
        label: "Activar"
      }), M.addBinding(w, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), M.addBinding(w, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), M.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (me = h.value, Se()), ((_b = h.target) == null ? void 0 : _b.key) === "direccion" && (He = h.value === 0 ? "x" : "y", Se()), ((_c = h.target) == null ? void 0 : _c.key) === "cantidad" && (Ne = Math.round(h.value), Se());
      }), gt.addBlade({
        view: "separator"
      });
      const v = gt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ze,
        espesor: +ft(De).toFixed(3),
        subdivX: it,
        subdivY: at
      };
      v.addBinding(f, "activar", {
        label: "Activar losas"
      }), v.addBinding(f, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), v.addBinding(f, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), v.addBinding(f, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), v.on("change", (h) => {
        var _a3, _b, _c, _d;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (Ze = h.value, Se()), ((_b = h.target) == null ? void 0 : _b.key) === "espesor" && (De = ut(h.value), Se()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivX" && (it = Math.round(h.value), Se()), ((_d = h.target) == null ? void 0 : _d.key) === "subdivY" && (at = Math.round(h.value), Se());
      }), gt.addBlade({
        view: "separator"
      });
      const g = gt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +ft(Ke).toFixed(3),
        subdivH: bt,
        subdivW: vt
      };
      g.addBinding(S, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), g.addBinding(S, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), g.addBinding(S, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), g.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "espesor" && (Ke = ut(h.value), Se()), ((_b = h.target) == null ? void 0 : _b.key) === "subdivH" && (bt = Math.round(h.value), Se()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivW" && (vt = Math.round(h.value), Se());
      });
      const I = ce.length || 1, k = pe.length || 1, O = I + 1, N = k + 1;
      if (I > 0) {
        const h = g.addFolder({
          title: `Muros dir X (${I} vanos)`,
          expanded: false
        });
        for (let u = 0; u < I; u++) for (let $ = 0; $ < N; $++) {
          const z = `wx_${u}_${$}`, C = Ye.some((m) => m.dir === "x" && m.bay === u && m.axisIdx === $), y = {};
          y[z] = C;
          const E = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + $)}`;
          h.addBinding(y, z, {
            label: E
          }).on("change", (m) => {
            m.value ? Ye.push({
              dir: "x",
              bay: u,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : Ye = Ye.filter((A) => !(A.dir === "x" && A.bay === u && A.axisIdx === $)), Se();
          });
        }
      }
      if (k > 0) {
        const h = g.addFolder({
          title: `Muros dir Y (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let $ = 0; $ < O; $++) {
          const z = `wy_${u}_${$}`, C = Ye.some((m) => m.dir === "y" && m.bay === u && m.axisIdx === $), y = {};
          y[z] = C;
          const E = `Vano Y${u + 1} / Eje X${$ + 1}`;
          h.addBinding(y, z, {
            label: E
          }).on("change", (m) => {
            m.value ? Ye.push({
              dir: "y",
              bay: u,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : Ye = Ye.filter((A) => !(A.dir === "y" && A.bay === u && A.axisIdx === $)), Se();
          });
        }
      }
      if (Ye.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const h = {
          muros: `${Ye.length} ubicaciones`
        };
        g.addBinding(h, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Jt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ge || (ge = t.innerHTML), Ee) {
        try {
          Ee.dispose();
        } catch {
        }
        Ee = null;
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
      Ee = new Bo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Wn()[L];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = ie[a.key].val;
        for (const a of n) Ee.addBinding(s, a.key, {
          min: ie[a.key].min,
          max: ie[a.key].max,
          step: ie[a.key].step,
          label: ie[a.key].label
        });
        const c = Ee.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const r = {
            min: ie[a.key].min,
            max: ie[a.key].max
          };
          c.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            ie[a.key] && (ie[a.key].min = r.min, ie[a.key].max = r.max, ie[a.key].val < r.min && (ie[a.key].val = r.min), ie[a.key].val > r.max && (ie[a.key].val = r.max)), Jt(), Se();
          });
        }
        Ee.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && ie[r]) {
            if (ie[r].val = a.value, L === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const p = Math.round(ie.nVanosX.val), d = Math.round(ie.nVanosY.val);
                for (; ce.length < p; ) ce.push(ce[ce.length - 1] ?? T.defaultSpan);
                for (ce.length > p && (ce.length = p); pe.length < d; ) pe.push(pe[pe.length - 1] ?? T.defaultSpan * 0.8);
                pe.length > d && (pe.length = d);
              }
              Jt();
            }
            Se();
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
          for (let i = 0; i < ce.length; i++) r[`svx_${i + 1}`] = ce[i];
          for (let i = 0; i < ce.length; i++) a.addBinding(r, `svx_${i + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a2, _b;
            const M = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            M && (ce[parseInt(M[1]) - 1] = i.value, Se());
          });
          const p = Zt.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let i = 0; i < pe.length; i++) d[`svy_${i + 1}`] = pe[i];
          for (let i = 0; i < pe.length; i++) p.addBinding(d, `svy_${i + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${i + 1}`
          });
          p.on("change", (i) => {
            var _a2, _b;
            const M = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            M && (pe[parseInt(M[1]) - 1] = i.value, Se());
          });
        }
      }
      if (Mo(), Ee) {
        Ee.addBlade({
          view: "separator"
        });
        const s = Ko()[L];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((r, p) => {
            c[r.label] = p;
          });
          const a = {
            apoyo: wt
          };
          Ee.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (r) => {
            wt = r.value, Se();
          });
        }
        if (L === "placa-3q" || L === "placa-q4") {
          const c = {
            teoria: ht
          };
          Ee.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            ht = a.value, Se();
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
            nt[a.key] && (nt[a.key].min = r.min, nt[a.key].max = r.max, nt[a.key].val < r.min && (nt[a.key].val = r.min), nt[a.key].val > r.max && (nt[a.key].val = r.max)), Jt(), Se();
          });
        }
        Gt.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && nt[r]) {
            if (nt[r].val = a.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => hn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (ie[s]) ie[s].val = c, Se(), Jt();
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
          for (const c in ie) s[c] = ie[c].val;
          for (const c in nt) s[c] = nt[c].val;
          return s;
        },
        setGenerator: Xe,
        createCustomPanel: (s, c, a) => qs(s, c, a),
        removeCustomPanel: (s) => {
          ls(s);
        }
      };
    }
    const un = /* @__PURE__ */ new Map();
    function qs(t, o, n) {
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
      for (const [r, p] of Object.entries(o)) {
        const d = p.label || r;
        if (Array.isArray(p.value)) {
          a[r] = p.value;
          const i = {
            [r]: p.value.join(", ")
          };
          c.addBinding(i, r, {
            label: d
          }).on("change", (b) => {
            a[r] = b.value.split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M)), n && n({
              ...a
            });
          });
        } else if (p.options) {
          a[r] = p.value;
          const i = {
            [r]: p.value
          }, b = {};
          for (const M of p.options) b[M] = M;
          c.addBinding(i, r, {
            label: d,
            options: b
          }).on("change", (M) => {
            a[r] = M.value, n && n({
              ...a
            });
          });
        } else if (typeof p.value == "boolean") {
          a[r] = p.value;
          const i = {
            [r]: p.value
          };
          c.addBinding(i, r, {
            label: d
          }).on("change", (b) => {
            a[r] = b.value, n && n({
              ...a
            });
          });
        } else if (typeof p.value == "string") {
          a[r] = p.value;
          const i = {
            [r]: p.value
          };
          c.addBinding(i, r, {
            label: d
          }).on("change", (b) => {
            a[r] = b.value, n && n({
              ...a
            });
          });
        } else {
          a[r] = p.value;
          const i = {
            [r]: p.value
          }, b = {
            label: d
          };
          p.min !== void 0 && (b.min = p.min), p.max !== void 0 && (b.max = p.max), p.step !== void 0 && (b.step = p.step), c.addBinding(i, r, b).on("change", (M) => {
            a[r] = M.value, n && n({
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
      if (Ee) {
        try {
          Ee.dispose();
        } catch {
        }
        Ee = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ge && (n.innerHTML = ge);
    }
    const we = document.createElement("div");
    we.id = "cad3d-panel";
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
    }), we.innerHTML = `
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
        const b = d.map((M) => String(M).padStart(6)).join("");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((d, i) => {
        const b = d.map((M) => M ? "  1" : "  0").join("");
        a.push(`  ${String(i).padStart(4)} ${b}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((d, i) => {
        const b = d.map((M) => M.toFixed(3).padStart(11)).join(" ");
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
          const M = d.map((w) => {
            var _a3;
            const v = (_a3 = w.map) == null ? void 0 : _a3.get(b);
            return v !== void 0 ? v.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${M}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((d, i) => {
        const b = d.map((M) => M.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (a.push(`## REACTIONS (${p.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((d, i) => {
        const b = d.map((M) => M.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), L) {
        a.push("## CLI COMMAND");
        const d = Object.entries(ie).map(([i, b]) => `${i}=${b.val}`).join(" ");
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
        const p = xt.querySelector("#export-text");
        p.value = JSON.stringify(c, null, 2);
        const d = xt.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Je() {
      var _a2, _b, _c;
      const t = we.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, a = 0, r = 0;
        for (const d of n) d.length === 2 ? c++ : d.length === 3 ? a++ : d.length === 4 && r++;
        let p = `${o}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (p += ` | ${c}fr`, r > 0 && (p += ` ${r}q4`), a > 0 && (p += ` ${a}tri`)), t.textContent = p;
      }
    }
    function mn() {
      var _a2;
      if (!ye || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = ca(t, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          ae = c, le = t.map((d) => [
            ...d
          ]), Me = 0;
          const { extent: a } = so(), r = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let d = 0;
            for (let i = 0; i < t.length; i++) {
              const b = r[i * 6] || 0, M = r[i * 6 + 1] || 0, w = r[i * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + M * M + w * w));
            }
            ve = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const p = `${L} \u2014 ${t.length}n ${o.length}e`;
          Te.render(c, {
            title: p
          }), Te.div.style.display = "", _o(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ae = null;
      }
    }
    function bn() {
      Ce && (cancelAnimationFrame(Ce), Ce = 0), le.length > 0 && (e.nodes.val = le.map((t) => [
        ...t
      ])), Te.div.style.display = "none", ae = null;
    }
    function _o() {
      var _a2;
      if (Ce && cancelAnimationFrame(Ce), !(ae == null ? void 0 : ae.modeShapes) || !le.length) return;
      const t = ae.modeShapes[Me];
      if (!t) return;
      const o = ((_a2 = ae.frequencies) == null ? void 0 : _a2[Me]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = le.length, c = e.elements.rawVal, { extent: a } = so(), r = we.querySelector("#cad3d-modal-scale"), p = r && parseFloat(r.value) || 5;
      let d = 0;
      for (let k = 0; k < s; k++) {
        const O = t[k * 6] || 0, N = t[k * 6 + 1] || 0, h = t[k * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(O * O + N * N + h * h));
      }
      const i = d > 1e-12 ? a * p / 100 / d : 1, b = tt();
      if (!b) return;
      let M = null, w = null, v = null;
      b.scene.traverse((k) => {
        var _a3, _b;
        !M && k.isPoints && k.geometry && (M = k), !w && k.isLineSegments && k.geometry && !k.name && (w = k), !v && k.isMesh && ((_a3 = k.material) == null ? void 0 : _a3.transparent) && ((_b = k.material) == null ? void 0 : _b.opacity) < 0.5 && k.geometry && (v = k);
      });
      const f = new Float32Array(s * 3), g = [];
      for (const k of c) if (k.length === 2) g.push([
        k[0],
        k[1]
      ]);
      else for (let O = 0; O < k.length; O++) g.push([
        k[O],
        k[(O + 1) % k.length]
      ]);
      const S = new Float32Array(g.length * 6);
      function I() {
        const k = (performance.now() - l) / 1e3, O = Math.sin(2 * Math.PI * n * k) * i;
        for (let N = 0; N < s; N++) {
          const h = le[N];
          f[N * 3] = h[0] + (t[N * 6] || 0) * O, f[N * 3 + 1] = h[1] + (t[N * 6 + 1] || 0) * O, f[N * 3 + 2] = h[2] + (t[N * 6 + 2] || 0) * O;
        }
        if (M) {
          const N = M.geometry, h = N.getAttribute("position");
          h && h.array.length === f.length ? (h.array.set(f), h.needsUpdate = true) : N.setAttribute("position", new ho(f.slice(), 3));
        }
        if (w) {
          for (let u = 0; u < g.length; u++) {
            const [$, z] = g[u];
            S[u * 6] = f[$ * 3], S[u * 6 + 1] = f[$ * 3 + 1], S[u * 6 + 2] = f[$ * 3 + 2], S[u * 6 + 3] = f[z * 3], S[u * 6 + 4] = f[z * 3 + 1], S[u * 6 + 5] = f[z * 3 + 2];
          }
          const N = w.geometry, h = N.getAttribute("position");
          h && h.array.length === S.length ? (h.array.set(S), h.needsUpdate = true) : N.setAttribute("position", new ho(S.slice(), 3));
        }
        if (v) {
          const N = [];
          for (const h of c) if (h.length === 3) {
            const [u, $, z] = h;
            N.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), N.push(f[$ * 3], f[$ * 3 + 1], f[$ * 3 + 2]), N.push(f[z * 3], f[z * 3 + 1], f[z * 3 + 2]);
          } else if (h.length === 4) {
            const [u, $, z, C] = h;
            N.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), N.push(f[$ * 3], f[$ * 3 + 1], f[$ * 3 + 2]), N.push(f[z * 3], f[z * 3 + 1], f[z * 3 + 2]), N.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), N.push(f[z * 3], f[z * 3 + 1], f[z * 3 + 2]), N.push(f[C * 3], f[C * 3 + 1], f[C * 3 + 2]);
          }
          if (N.length > 0) {
            const h = v.geometry, u = new Float32Array(N), $ = h.getAttribute("position");
            $ && $.array.length === u.length ? ($.array.set(u), $.needsUpdate = true) : h.setAttribute("position", new ho(u, 3));
          }
        }
        b.render(), Ce = requestAnimationFrame(I);
      }
      Ce = requestAnimationFrame(I);
    }
    function hn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const v = X("CM") ?? 0, f = X("CV") ?? 0, g = v + f, S = X("Ex") ?? 0, I = X("Ey") ?? 0;
        if (g === 0 && S === 0 && I === 0) return;
        const k = /* @__PURE__ */ new Map(), O = [];
        for (let m = 0; m < t.length; m++) n.supports.has(m) || O.push(m);
        const N = (m) => Math.round(m * 1e3) / 1e3, h = /* @__PURE__ */ new Set();
        n.supports.forEach((m, A) => {
          h.add(`${N(t[A][0])},${N(t[A][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const m of O) h.has(`${N(t[m][0])},${N(t[m][1])}`) && u.add(m);
        const $ = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
        if (S !== 0 || I !== 0) {
          let m = -1 / 0, A = -1 / 0;
          for (const H of u) m = Math.max(m, N(t[H][0])), A = Math.max(A, N(t[H][1]));
          const F = /* @__PURE__ */ new Map();
          for (const H of u) {
            const G = N(t[H][2]);
            F.has(G) || F.set(G, []), F.get(G).push(H);
          }
          F.forEach((H) => {
            if (S !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const Z of H) if (N(t[Z][0]) === m) {
                const K = N(t[Z][1]);
                G.has(K) || (G.add(K), $.add(Z));
              }
            }
            if (I !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const Z of H) if (N(t[Z][1]) === A) {
                const K = N(t[Z][0]);
                G.has(K) || (G.add(K), z.add(Z));
              }
            }
          });
        }
        const C = 9.81, y = /* @__PURE__ */ new Map();
        for (let m = 0; m < o.length; m++) {
          const A = o[m], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(m)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (A.length === 2) {
              const H = ((_b = l.areas) == null ? void 0 : _b.get(m)) ?? 0, G = t[A[0]], Z = t[A[1]], K = Math.sqrt((Z[0] - G[0]) ** 2 + (Z[1] - G[1]) ** 2 + (Z[2] - G[2]) ** 2), j = -(F * H * K * C) / 2;
              y.set(A[0], (y.get(A[0]) ?? 0) + j), y.set(A[1], (y.get(A[1]) ?? 0) + j);
            } else if (A.length >= 3) {
              const H = ((_c = l.thicknesses) == null ? void 0 : _c.get(m)) ?? 0;
              let G = 0;
              if (A.length === 3) {
                const [te, j, he] = A.map((ze) => t[ze]);
                G = 0.5 * Math.abs((j[0] - te[0]) * (he[1] - te[1]) - (he[0] - te[0]) * (j[1] - te[1]));
              } else if (A.length === 4) {
                const [te, j, he, ze] = A.map((ue) => t[ue]);
                if (G = 0.5 * Math.abs((j[0] - te[0]) * (he[1] - te[1]) - (he[0] - te[0]) * (j[1] - te[1])) + 0.5 * Math.abs((he[0] - te[0]) * (ze[1] - te[1]) - (ze[0] - te[0]) * (he[1] - te[1])), G < 1e-10) {
                  const ue = [
                    j[0] - te[0],
                    j[1] - te[1],
                    j[2] - te[2]
                  ], q = [
                    ze[0] - te[0],
                    ze[1] - te[1],
                    ze[2] - te[2]
                  ], oe = [
                    ue[1] * q[2] - ue[2] * q[1],
                    ue[2] * q[0] - ue[0] * q[2],
                    ue[0] * q[1] - ue[1] * q[0]
                  ];
                  G = Math.sqrt(oe[0] ** 2 + oe[1] ** 2 + oe[2] ** 2);
                }
              }
              const K = -(F * H * G * C) / A.length;
              for (const te of A) y.set(te, (y.get(te) ?? 0) + K);
            }
          }
        }
        const E = /* @__PURE__ */ new Set();
        for (const m of o) m.length === 2 && (E.add(m[0]), E.add(m[1]));
        for (const m of O) {
          const A = $.has(m) ? S : 0, F = z.has(m) ? I : 0, H = y.get(m) ?? 0, G = E.has(m) ? g : 0, Z = H + G;
          (A !== 0 || F !== 0 || Math.abs(Z) > 1e-10) && k.set(m, [
            A,
            F,
            Z,
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
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, i = t.length * 6, b = i - p * 6, M = [], w = (v) => M.push(v);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && w(`&nbsp;&nbsp;Frames: <b>${c}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && w(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), w(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${d}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${i} total, ~${b} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${i}&times;${i})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const v = Ft(t, o, n, l), f = performance.now() - s;
        if (v) {
          e.deformOutputs.val = v, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let g = 0, S = -1, I = 0, k = 0;
          v.deformations && v.deformations.forEach(($, z) => {
            const C = Math.sqrt($[0] * $[0] + $[1] * $[1] + $[2] * $[2]);
            C > g && (g = C, S = z, I = $[0], k = $[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(I * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(k * 1e3).toFixed(4)} mm`);
          const O = performance.now(), N = Co(t, o, l, v), h = performance.now() - O;
          N && (e.analyzeOutputs.val = N, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${h.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (v) {
        const f = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${v.message}</b>`);
      }
      window.__femLog = M, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ye && setTimeout(() => mn(), 50);
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
      const s = o - 2 * n, c = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, r = (2 * n * t * t * t + s * l * l * l) / 12, p = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: a,
        Iy: r,
        J: p
      };
    }
    function vn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, c = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, r = (o * t * t * t - s * l * l * l) / 12, p = (t - n) * (o - n), d = 2 * ((t - n) / n + (o - n) / n), i = 4 * p * p / (d > 0 ? d : 1);
      return {
        A: c,
        Iz: a,
        Iy: r,
        J: i
      };
    }
    function Bs(t, o, n, l, s, c, a) {
      const p = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = t - 2 * n, i = o - 2 * n, b = t * o - d * i, M = (t * o * o * o - d * i * i * i) / 12, w = (o * t * t * t - i * d * d * d) / 12, v = d * i, f = d * i * i * i / 12, g = i * d * d * d / 12, S = b + p * v, I = M + p * f, k = w + p * g, O = l / (2 * (1 + s)), N = (t - n) * (o - n), h = 2 * ((t - n) / n + (o - n) / n), u = 4 * N * N / (h > 0 ? h : 1);
      return {
        A: S,
        Iz: I,
        Iy: k,
        J: u,
        Es: l,
        Gs: O,
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
      if ((L === "edificio" || L === "frame") && be.size > 0) {
        const { colMat: s, vigaMat: c, colShape: a, fc: r, perFloor: p } = Le, d = 4700 * Math.sqrt(r / 1e3) * 1e3, i = d / (2 * 1.2), b = 24 / 9.80665, M = o.E, w = o.G, v = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (Be.has(f)) {
            const $ = 4700 * Math.sqrt(r / 1e3) * 1e3, z = 0.2;
            n.elasticities.set(f, $), n.poissonsRatios.set(f, z), n.thicknesses.set(f, Ke), n.shearModuli.set(f, $ / (2 * (1 + z))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (yt.has(f)) {
            const $ = 4700 * Math.sqrt(r / 1e3) * 1e3, z = 0.2;
            n.elasticities.set(f, $), n.poissonsRatios.set(f, z), n.thicknesses.set(f, De), n.shearModuli.set(f, $ / (2 * (1 + z))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const g = be.has(f), S = Oe.get(f) ?? 0, I = p[S] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let k, O, N, h;
          if (g) if (s === 0) O = d, N = i, h = b, k = a === 1 ? is(I.dCol) : gn(I.bCol, I.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: I.dCol
          } : {
            type: "rect",
            b: I.bCol,
            h: I.hCol
          });
          else if (s === 1) {
            O = M, N = w, h = v;
            const $ = Le.steelColType;
            if ($ <= 1) {
              const z = fo[I.colProfileIdx] ?? fo[0];
              k = {
                A: z.A,
                Iz: z.Iz,
                Iy: z.Iy,
                J: z.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: z.bf,
                h: z.d,
                name: z.name
              });
            } else if ($ === 2) {
              const z = I.colBf ?? 0.3, C = I.colHf ?? 0.3, y = I.colTf ?? 0.02, E = I.colTw ?? 0.012;
              k = xn(z, C, y, E);
              const m = `I${(C * 100).toFixed(0)}x${(z * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: z,
                h: C,
                tf: y,
                tw: E,
                name: m
              });
            } else {
              const z = I.colBc ?? 0.3, C = I.colHc ?? 0.3, y = I.colT ?? 0.01;
              k = vn(z, C, y);
              const E = `\u25A1${(C * 100).toFixed(0)}x${(z * 100).toFixed(0)}x${(y * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: z,
                h: C,
                tw: y,
                name: E
              });
            }
          } else {
            const $ = I.colBc ?? 0.3, z = I.colHc ?? 0.3, C = I.colT ?? 0.01, y = I.colFc ?? 28e3, E = I.colEs ?? 2e8, m = I.colNuS ?? 0.3;
            I.colNuC;
            const A = Bs($, z, C, E, m, y);
            k = {
              A: A.A,
              Iz: A.Iz,
              Iy: A.Iy,
              J: A.J
            }, O = A.Es, N = A.Gs;
            const F = 7.85, H = 24 / 9.80665;
            h = (F * A.A_steel + H * A.A_conc) / (A.A_steel + A.A_conc);
            const G = `CFT ${(z * 1e3).toFixed(0)}X${($ * 1e3).toFixed(0)}X${(C * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: $,
              h: z,
              tw: C,
              name: G
            });
          }
          else {
            const $ = Ve.get(f), z = $ ? $.dir === "x" ? I.vigasX : I.vigasY : [], C = $ ? z[$.bay] ?? z[0] ?? At() : At();
            if (c === 0) O = d, N = i, h = b, k = gn(C.b, C.h), n.sectionShapes.set(f, {
              type: "rect",
              b: C.b,
              h: C.h
            });
            else {
              O = M, N = w, h = v;
              const y = Le.steelVigaType;
              if (y <= 1) {
                const E = fo[C.profileIdx ?? 0] ?? fo[0];
                k = {
                  A: E.A,
                  Iz: E.Iz,
                  Iy: E.Iy,
                  J: E.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: E.bf,
                  h: E.d,
                  name: E.name
                });
              } else if (y === 2) {
                const E = C.bf ?? 0.2, m = C.hf ?? 0.4, A = C.tf ?? 0.015, F = C.tw ?? 0.01;
                k = xn(E, m, A, F);
                const H = `I${(m * 100).toFixed(0)}x${(E * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: E,
                  h: m,
                  tf: A,
                  tw: F,
                  name: H
                });
              } else {
                const E = C.bc ?? 0.2, m = C.hc ?? 0.3, A = C.t ?? 8e-3;
                k = vn(E, m, A);
                const F = `\u25A1${(m * 100).toFixed(0)}x${(E * 100).toFixed(0)}x${(A * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: E,
                  h: m,
                  tw: A,
                  name: F
                });
              }
            }
          }
          const u = xe.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (O = d, N = i, h = b) : (O = M, N = w, h = v), u.secType === "rect" && u.b && u.h) k = gn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) k = is(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const z = fo[u.profileIdx] ?? fo[0];
              k = {
                A: z.A,
                Iz: z.Iz,
                Iy: z.Iy,
                J: z.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: z.bf,
                h: z.d,
                name: z.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              k = xn(u.bf, u.hf, u.tf, u.tw);
              const z = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: z
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              k = vn(u.bc, u.hc, u.t);
              const z = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: z
              });
            }
          }
          n.elasticities.set(f, O), n.shearModuli.set(f, N), n.areas.set(f, k.A), n.momentsOfInertiaZ.set(f, k.Iy), n.momentsOfInertiaY.set(f, k.Iz), n.torsionalConstants.set(f, k.J), n.densities.set(f, h);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function cs(t) {
      we.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = we.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (y) => {
        y.stopPropagation(), we.classList.add("collapsed");
      }), (_b = we.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (y) => {
        y.stopPropagation(), we.classList.remove("collapsed");
      }), we.querySelectorAll("[data-ex]").forEach((y) => {
        y.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = y.dataset.ex;
          cs(m), We.example(m);
        });
      }), we.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = y.dataset.view;
          ao(m), we.querySelectorAll("[data-view]").forEach((A) => A.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = we.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), L = "", Cs.val = false, Rs(), We.clear();
      }), (_d = we.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Dt && (Dt = false, bo()), Vt && Go(), qt = !qt, (_a3 = we.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", qt);
        const m = tt();
        m && (m.controls.enabled = !qt), qt || Yo();
      }), (_e2 = we.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Dt && (Dt = false, bo()), qt && Yo(), Vt = !Vt, (_a3 = we.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Vt), Vt ? Gs() : Go();
      }), (_f = we.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), qt && Yo(), Vt && Go(), Dt = !Dt, (_a3 = we.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Dt), Dt || bo();
      }), (_g = we.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), We.clear(), st = null;
      });
      const t = we.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const y = t.value;
        t.value = "", y && o(y);
      });
      function o(y) {
        const A = 15e3 * Math.sqrt(210) * 10, F = 0.2, H = A / (2 * (1 + F)), G = 0.09, Z = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, te = 0.25 * 0.4, j = 0.25 * 0.4 ** 3 / 12, he = 0.4 * 0.25 ** 3 / 12, ze = 1e-3, ue = 5 / 6 * G, q = 5 / 6 * te, oe = [];
        function se(ee, J, re) {
          const fe = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const Q of J) fe.elasticities.set(Q, A), fe.shearModuli.set(Q, H), fe.areas.set(Q, G), fe.momentsOfInertiaZ.set(Q, Z), fe.momentsOfInertiaY.set(Q, Z), fe.torsionalConstants.set(Q, K), fe.shearAreasY.set(Q, ue), fe.shearAreasZ.set(Q, ue);
          for (const Q of re) fe.elasticities.set(Q, A), fe.shearModuli.set(Q, H), fe.areas.set(Q, te), fe.momentsOfInertiaZ.set(Q, j), fe.momentsOfInertiaY.set(Q, he), fe.torsionalConstants.set(Q, ze), fe.shearAreasY.set(Q, q), fe.shearAreasZ.set(Q, q);
          return fe;
        }
        if (y === "test-cantilever" || y === "test-all") {
          const re = 270 / (3 * A * Z), fe = [
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
          ], Q = [
            [
              0,
              1
            ]
          ], Ie = se(1, [], []);
          Ie.elasticities.set(0, A), Ie.shearModuli.set(0, H), Ie.areas.set(0, G), Ie.momentsOfInertiaZ.set(0, Z), Ie.momentsOfInertiaY.set(0, Z), Ie.torsionalConstants.set(0, K);
          const je = Ft(fe, Q, {
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
          }, Ie);
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: fe,
            elements: Q,
            results: [
              {
                label: "Uy tip (cm)",
                awatif: je.deformations.get(1)[1] * 100,
                reference: re * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (y === "test-portal-1p" || y === "test-all") {
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
              3,
              0
            ],
            [
              4,
              3,
              0
            ]
          ], J = [
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
          ], re = se(3, [
            0,
            1
          ], [
            2
          ]), fe = Ft(ee, J, {
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
          }, re);
          oe.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: ee,
            elements: J,
            results: [
              {
                label: "Ux top (cm)",
                awatif: fe.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (y === "test-portal-2p" || y === "test-all") {
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
          ], J = [
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
          ], re = se(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), fe = Ft(ee, J, {
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
          }, re);
          oe.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: ee,
            elements: J,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: fe.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: fe.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (y === "test-wall-only" || y === "test-all") {
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
              3,
              0
            ],
            [
              0,
              3,
              0
            ]
          ], J = [
            [
              0,
              1,
              2,
              3
            ]
          ], fe = Ft(ee, J, {
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
                H
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
                F
              ]
            ])
          });
          oe.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: ee,
            elements: J,
            results: [
              {
                label: "Ux top (cm)",
                awatif: fe.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (y === "test-portal-wall" || y === "test-all") {
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
          ], J = [
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
          ], re = se(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          re.elasticities.set(6, A), re.shearModuli.set(6, H), re.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), re.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              F
            ]
          ]);
          const fe = Ft(ee, J, {
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
          }, re);
          oe.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: ee,
            elements: J,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: fe.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: fe.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (c(oe), oe.length > 0) {
          const ee = oe[oe.length - 1];
          se(ee.elements.length, [], []), e.nodes.val = ee.nodes, e.elements.val = ee.elements;
        }
      }
      function n(y) {
        const E = 15e3 * Math.sqrt(210) * 10, m = [];
        m.push(`$ File exported from Awatif FEM Validation: ${y.name}`), m.push(" "), m.push("$ PROGRAM INFORMATION"), m.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), m.push(""), m.push("$ CONTROLS"), m.push('  UNITS  "TONF"  "M"  "C"  '), m.push("");
        const A = /* @__PURE__ */ new Set();
        y.nodes.forEach((ue) => A.add(Math.round(ue[1] * 1e4) / 1e4));
        const F = [
          ...A
        ].sort((ue, q) => ue - q), H = F.map((ue, q) => q === 0 ? "Base" : `Level_${q}`), G = /* @__PURE__ */ new Map();
        F.forEach((ue, q) => G.set(ue, H[q])), m.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let ue = F.length - 1; ue >= 1; ue--) m.push(`  STORY "${H[ue]}"  HEIGHT ${F[ue] - F[ue - 1]} MASTERSTORY "Yes"  `);
        m.push(`  STORY "Base"  ELEV ${F[0]} `), m.push(""), m.push("$ MATERIAL PROPERTIES"), m.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), m.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`), m.push(""), m.push("$ FRAME SECTIONS"), m.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), m.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), m.push("");
        const Z = y.elements.some((ue) => ue.length === 4);
        Z && (m.push("$ WALL/SLAB/DECK SECTIONS"), m.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), m.push(""));
        const K = /* @__PURE__ */ new Map();
        let te = 0;
        y.nodes.forEach((ue) => {
          const q = `${ue[0]},${ue[2]}`;
          K.has(q) || K.set(q, `${++te}`);
        }), m.push("$ POINT COORDINATES");
        for (const [ue, q] of K) {
          const [oe, se] = ue.split(",").map(Number);
          m.push(`  POINT "${q}"  ${oe} ${se} `);
        }
        m.push("");
        const j = (ue) => {
          const q = y.nodes[ue], oe = `${q[0]},${q[2]}`;
          return {
            pt: K.get(oe) || "1",
            story: G.get(Math.round(q[1] * 1e4) / 1e4) || "Base"
          };
        };
        m.push("$ LINE CONNECTIVITIES");
        const he = [];
        if (y.elements.forEach((ue, q) => {
          if (ue.length !== 2) return;
          const oe = y.nodes[ue[0]], se = y.nodes[ue[1]], ee = Math.abs(se[1] - oe[1]), J = Math.sqrt((se[0] - oe[0]) ** 2 + (se[2] - oe[2]) ** 2), re = ee > J * 0.5, fe = j(ue[0]), Q = j(ue[1]), Ie = re ? "COL30" : "VIGA";
          re ? (m.push(`  LINE  "E${q + 1}"  COLUMN  "${fe.pt}"  "${fe.pt}"  1`), he.push(`  LINEASSIGN  "E${q + 1}"  "${Q.story}"  SECTION "${Ie}"  `)) : (m.push(`  LINE  "E${q + 1}"  BEAM  "${fe.pt}"  "${Q.pt}"  0`), he.push(`  LINEASSIGN  "E${q + 1}"  "${fe.story}"  SECTION "${Ie}"  `));
        }), m.push(""), Z) {
          m.push("$ AREA CONNECTIVITIES");
          const ue = [];
          y.elements.forEach((q, oe) => {
            if (q.length !== 4) return;
            const se = q.map((ee) => j(ee));
            m.push(`  AREA "W${oe + 1}"  PANEL  4  "${se[0].pt}"  "${se[1].pt}"  "${se[2].pt}"  "${se[3].pt}"  1  1  0  0  `), ue.push(`  AREAASSIGN  "W${oe + 1}"  "${se[2].story}"  SECTION "Muro20"  `);
          }), m.push(""), m.push("$ AREA ASSIGNS"), ue.forEach((q) => m.push(q)), m.push("");
        }
        m.push("$ POINT ASSIGNS"), y.nodes.forEach((ue, q) => {
          if (Math.abs(ue[1]) < 0.01) {
            const oe = j(q);
            m.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), m.push(""), m.push("$ LINE ASSIGNS"), he.forEach((ue) => m.push(ue)), m.push(""), m.push("$ LOAD PATTERNS"), m.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), m.push(""), m.push("$ POINT OBJECT LOADS");
        const ze = Math.max(...y.nodes.map((ue) => ue[1]));
        return y.nodes.forEach((ue, q) => {
          if (Math.abs(ue[1] - ze) < 0.01) {
            const oe = j(q);
            m.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), m.push(""), m.push("  END"), m.push("$ END OF MODEL FILE"), m.join(`\r
`);
      }
      function l(y) {
        const E = 15e3 * Math.sqrt(210) * 10, m = [];
        m.push(`"""ETABS API Validation: ${y.name}`), m.push('Generated by Awatif FEM Studio"""'), m.push("import comtypes.client, time, math"), m.push(""), m.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), m.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), m.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), m.push("myETABS.ApplicationStart()"), m.push("time.sleep(10)"), m.push("SapModel = myETABS.SapModel"), m.push("SapModel.InitializeNewModel()"), m.push("SapModel.File.NewBlank()"), m.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), m.push(""), m.push(`E = ${E}`), m.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), m.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), m.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), m.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), y.elements.some((H) => H.length === 4) && m.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), m.push(""), m.push("# Add elements"), m.push("FN = ' '"), y.elements.forEach((H, G) => {
          if (H.length === 2) {
            const Z = y.nodes[H[0]], K = y.nodes[H[1]], te = Math.abs(K[1] - Z[1]), j = Math.sqrt((K[0] - Z[0]) ** 2 + (K[2] - Z[2]) ** 2), he = te > j * 0.5 ? "COL30" : "VIGA";
            m.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Z[0]},${Z[2]},${Z[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${he}","E${G + 1}","Global")`);
          } else if (H.length === 4) {
            const Z = H.map((K) => y.nodes[K]);
            m.push(`SapModel.AreaObj.AddByCoord(4, [${Z.map((K) => K[0]).join(",")}], [${Z.map((K) => K[2]).join(",")}], [${Z.map((K) => K[1]).join(",")}], "", "Muro20")`);
          }
        }), m.push(""), m.push("# Supports at Z=0"), m.push("names = SapModel.PointObj.GetNameList()"), m.push("for i in range(int(names[0])):"), m.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), m.push("    if abs(float(c[2])) < 0.01:"), m.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), m.push(""), m.push("# Load at top"), m.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const F = Math.max(...y.nodes.map((H) => H[1]));
        m.push("names = SapModel.PointObj.GetNameList()"), m.push("for i in range(int(names[0])):"), m.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), m.push(`    if abs(float(c[2]) - ${F}) < 0.01:`), m.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), m.push(""), m.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${y.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), m.push("time.sleep(1)"), m.push("SapModel.Analyze.RunAnalysis()"), m.push("time.sleep(5)"), m.push(""), m.push("# Results"), m.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), m.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), m.push(`print(f"\\n=== ETABS: ${y.name} ===")`), m.push("names = SapModel.PointObj.GetNameList()"), m.push("for i in range(int(names[0])):"), m.push("    name = names[1][i]"), m.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), m.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), m.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), m.push("    if NR > 0:"), m.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), m.push(""), m.push('print("\\nAwatif results:")');
        for (const H of y.results) m.push(`print(f"  ${H.label}: Awatif=${H.awatif.toFixed(4)}, ETABS=${H.reference.toFixed(4)}, Ratio={${H.awatif.toFixed(4)}/${H.reference.toFixed(4)}:.4f}")`);
        return m.push("SapModel.View.RefreshView(0, False)"), m.join(`
`);
      }
      function s(y, E) {
        const m = new Blob([
          y
        ], {
          type: "text/plain"
        }), A = URL.createObjectURL(m), F = document.createElement("a");
        F.href = A, F.download = E, F.click(), URL.revokeObjectURL(A);
      }
      function c(y) {
        let E = document.getElementById("test-results-overlay");
        E && E.remove(), E = document.createElement("div"), E.id = "test-results-overlay", E.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let m = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, A = true;
        window.__awatifTests = y;
        for (let H = 0; H < y.length; H++) {
          const G = y[H];
          m += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', m += '<div style="display:flex;justify-content:space-between;align-items:center">', m += `<div style="font-weight:bold;color:#00d4ff">${G.name}</div>`, m += "<div>", m += `<button onclick="window.__awatifDownloadE2k(${H})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, m += `<button onclick="window.__awatifDownloadPy(${H})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, m += "</div></div>", m += `<div style="color:#888;font-size:11px;margin-bottom:8px">${G.formulation}</div>`, m += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Z of G.results) {
            const K = Z.reference !== 0 ? Z.awatif / Z.reference : 1, te = Math.abs(K - 1) < 0.05;
            te || (A = false);
            const j = te ? "#4caf50" : "#f44336", he = te ? "PASS" : "FAIL";
            m += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Z.label}</td>
            <td style="text-align:right;color:#fff">${Z.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Z.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${j};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Z.refSource}</td>
            <td style="text-align:center;color:${j};font-size:10px;font-weight:bold">${he}</td></tr>`;
          }
          m += "</table></div>";
        }
        m += A ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', E.innerHTML = m, document.body.appendChild(E), window.__awatifDownloadE2k = (H) => {
          const G = window.__awatifTests[H], Z = G.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(G), `${Z}.e2k`);
        }, window.__awatifDownloadPy = (H) => {
          const G = window.__awatifTests[H], Z = G.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(G), `${Z}_etabs.py`);
        };
      }
      (_h = we.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), Hs();
      });
      let a = "";
      const r = we.querySelector("#cad3d-io-menu"), p = we.querySelector("#cad3d-io-file");
      function d(y, E) {
        e.nodes.val = y.nodes, e.elements.val = y.elements, e.nodeInputs.val = y.nodeInputs, e.elementInputs.val = y.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${E}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function i(y) {
        be = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
        const E = /* @__PURE__ */ new Map();
        for (let j = 0; j < y.stories.length; j++) E.set(y.stories[j].name, j);
        for (let j = 0; j < y.elementTypes.length; j++) {
          const he = y.elementTypes[j], ze = y.elementStories[j], ue = E.get(ze) ?? 0;
          Oe.set(j, ue), he === "COLUMN" || he === "BRACE" ? be.add(j) : Pe.add(j);
        }
        L = "edificio";
        const m = y.grids.filter((j) => j.dir === "X").sort((j, he) => j.coord - he.coord), A = y.grids.filter((j) => j.dir === "Y").sort((j, he) => j.coord - he.coord);
        let F, H, G, Z;
        if (m.length > 0 || A.length > 0) F = m.map((j) => j.coord), H = A.map((j) => j.coord), G = m.map((j) => j.label), Z = A.map((j) => j.label);
        else {
          const j = new Set(y.nodes.map((ze) => ze[0])), he = new Set(y.nodes.map((ze) => ze[1]));
          F = [
            ...j
          ].sort((ze, ue) => ze - ue), H = [
            ...he
          ].sort((ze, ue) => ze - ue), G = F.map((ze, ue) => String(ue + 1)), Z = H.map((ze, ue) => String.fromCharCode(65 + ue));
        }
        const K = y.stories.length > 0 ? Math.max(...y.stories.map((j) => j.elev)) : Math.max(...y.nodes.map((j) => j[2]));
        qe = F, Fe = H, Qe = K, setTimeout(() => {
          Et(), No(F, H, K, G, Z), an(y.stories, F, H), yn(), $n();
        }, 100);
        const te = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const j of y.elementTypes) te[j]++;
        console.log(`E2K grids: X=[${G.join(",")}] Y=[${Z.join(",")}]`), console.log(`E2K stories: ${y.stories.map((j) => `${j.name}@${j.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${te.COLUMN} columns, ${te.BEAM} beams, ${te.BRACE} braces`), Je();
      }
      function b(y, E) {
        const m = new Blob([
          y
        ], {
          type: "text/plain"
        }), A = URL.createObjectURL(m), F = document.createElement("a");
        F.href = A, F.download = E, F.click(), URL.revokeObjectURL(A);
      }
      r && r.addEventListener("change", () => {
        if (a = r.value, r.value = "", a.startsWith("import")) a === "import-e2k" ? p.accept = ".e2k,.E2K" : a === "import-py" ? p.accept = ".py" : a === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (a.startsWith("export")) {
          const y = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? b(Da({
              ...y,
              title: "Awatif Model",
              e2kModel: st ?? void 0
            }), "model.e2k") : a === "export-py" ? b(Ga(y), "model_opensees.py") : a === "export-tcl" && b(Ja(y), "model_opensees.tcl");
          } catch (E) {
            alert("Export error: " + E.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const y = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!y) return;
        const E = new FileReader();
        E.onload = () => {
          const m = E.result;
          try {
            if (a === "import-e2k") {
              const A = Ba(m);
              st = A, d(A, "E2K imported"), i(A);
            } else if (a === "import-py") {
              const A = Va(m);
              d(A, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const A = Xa(m);
              d(A, "OpenSees Tcl imported");
            }
          } catch (A) {
            alert("Import error: " + A.message), console.error(A);
          }
        }, E.readAsText(y), p.value = "";
      });
      const M = we.querySelector("#cad3d-force-unit");
      M && (M.value = x, M.addEventListener("change", (y) => {
        y.stopPropagation(), x = M.value, T = vo(x, _), L && Xe(L);
      }));
      const w = we.querySelector("#cad3d-length-unit");
      w && (w.value = _, w.addEventListener("change", (y) => {
        y.stopPropagation(), _ = w.value, T = vo(x, _), L && Xe(L);
      })), we.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = y.dataset.preset, A = B[m];
          A && (x = A.force, _ = A.length, U = A.stress, T = vo(x, _), M && (M.value = x), w && (w.value = _), we.querySelectorAll("[data-preset]").forEach((F) => {
            F.classList.toggle("active", F.dataset.preset === m);
          }), L && Xe(L), console.log(`Preset: ${m} \u2192 ${x}+${_}, stress: ${U.label}`));
        });
      }), (_i = we.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), ea();
      }), (_j = we.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), ta();
      }), (_k = we.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), na();
      }), (_l = we.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), aa();
      }), (_m = we.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), ye = !ye, (_a3 = we.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ye);
        const m = we.querySelector("#cad3d-mode-prev"), A = we.querySelector("#cad3d-mode-next"), F = we.querySelector("#cad3d-mode-label"), H = we.querySelector("#cad3d-modal-scale");
        if (ye) {
          const G = tt();
          ((_b2 = G == null ? void 0 : G.settings) == null ? void 0 : _b2.loads) && (Re = G.settings.loads.rawVal, G.settings.loads.val = false), mn(), m.style.display = "", A.style.display = "", F.style.display = "", H && (H.style.display = ""), v();
        } else bn(), m.style.display = "none", A.style.display = "none", F.style.display = "none", H && (H.style.display = "none"), L && L !== "placa-q4" && L !== "placa-3q" && Se(), setTimeout(() => {
          var _a4;
          const G = tt();
          ((_a4 = G == null ? void 0 : G.settings) == null ? void 0 : _a4.loads) && Re && (G.settings.loads.val = true);
        }, 600);
      });
      function v() {
        var _a3;
        const y = we.querySelector("#cad3d-mode-label");
        if (!y || !(ae == null ? void 0 : ae.frequencies)) return;
        const E = ae.frequencies[Me], m = E > 0 ? 1 / E : 0, A = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let F = 0; F <= Me; F++) {
          const H = (_a3 = ae.massParticipation) == null ? void 0 : _a3[F];
          if (H) for (let G = 0; G < 6; G++) A[G] += H[G];
        }
        y.textContent = `Modo ${Me + 1} \u2014 ${E.toFixed(2)} Hz \u2014 T=${m.toFixed(3)}s \u2014 \u03A3Ux=${(A[0] * 100).toFixed(1)}% \u03A3Uy=${(A[1] * 100).toFixed(1)}% \u03A3Rz=${(A[5] * 100).toFixed(1)}%`;
      }
      (_n2 = we.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(ae == null ? void 0 : ae.modeShapes)) return;
        Me = (Me - 1 + ae.modeShapes.length) % ae.modeShapes.length;
        const E = ae.modeShapes[Me], { extent: m } = so();
        let A = 0;
        for (let F = 0; F < le.length; F++) {
          const H = E[F * 6] || 0, G = E[F * 6 + 1] || 0, Z = E[F * 6 + 2] || 0;
          A = Math.max(A, Math.sqrt(H * H + G * G + Z * Z));
        }
        ve = A > 1e-12 ? m * 0.05 / A : 1, _o(), v();
      }), (_o2 = we.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(ae == null ? void 0 : ae.modeShapes)) return;
        Me = (Me + 1) % ae.modeShapes.length;
        const E = ae.modeShapes[Me], { extent: m } = so();
        let A = 0;
        for (let F = 0; F < le.length; F++) {
          const H = E[F * 6] || 0, G = E[F * 6 + 1] || 0, Z = E[F * 6 + 2] || 0;
          A = Math.max(A, Math.sqrt(H * H + G * G + Z * Z));
        }
        ve = A > 1e-12 ? m * 0.05 / A : 1, _o(), v();
      });
      const f = we.querySelector("#cad3d-modal-scale");
      f == null ? void 0 : f.addEventListener("mousedown", (y) => y.stopPropagation()), f == null ? void 0 : f.addEventListener("change", () => {
        ye && (ae == null ? void 0 : ae.modeShapes) && _o();
      });
      const g = we.querySelector("#cad3d-cli-toggle"), S = we.querySelector("#cad3d-cli-panel"), I = we.querySelector("#cad3d-cli-output"), k = we.querySelector("#cad3d-cmd"), O = [];
      let N = -1;
      g == null ? void 0 : g.addEventListener("click", (y) => {
        if (y.stopPropagation(), S) {
          const E = S.style.display !== "none";
          S.style.display = E ? "none" : "block", E || (k == null ? void 0 : k.focus(), I && !I.textContent && (I.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), k == null ? void 0 : k.addEventListener("mousedown", (y) => y.stopPropagation()), document.addEventListener("keydown", (y) => {
        var _a3;
        if ((y.ctrlKey || y.metaKey) && y.key === "z" && !y.shiftKey) {
          y.preventDefault(), ps();
          return;
        }
        if ((y.ctrlKey || y.metaKey) && (y.key === "y" || y.key === "z" && y.shiftKey)) {
          y.preventDefault(), fs();
          return;
        }
        if ((y.key === "Delete" || y.key === "Backspace") && ct.size > 0) {
          y.preventDefault(), ct.forEach((E) => ne.add(E)), ct.clear(), Ut && (Ut.remove(), Ut = null), Se();
          return;
        }
        if (y.key === "Escape") {
          if (Vt) if (dt !== null) {
            dt = null;
            const E = tt();
            zt && E && (E.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), Tt && E && (E.scene.remove(Tt), Tt.geometry.dispose(), Tt.material.dispose(), Tt = null), E == null ? void 0 : E.render();
          } else Go();
          qt && Yo(), Dt && (Dt = false, bo(), (_a3 = we.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), k == null ? void 0 : k.addEventListener("keydown", (y) => {
        if (y.stopPropagation(), y.key === "Enter") {
          const E = k.value.trim();
          if (E) {
            O.unshift(E), N = -1, I && (I.textContent += `> ${E}
`);
            try {
              const m = new Function("cad", `return ${E}`)(We);
              if (m !== void 0 && I) {
                const A = typeof m == "object" ? JSON.stringify(m, null, 2) : String(m);
                I.textContent += `${A}
`;
              }
            } catch (m) {
              I && (I.textContent += `ERROR: ${m.message}
`);
            }
            I && (I.scrollTop = I.scrollHeight), k.value = "";
          }
        } else y.key === "ArrowUp" ? (y.preventDefault(), O.length > 0 && N < O.length - 1 && (N++, k.value = O[N])) : y.key === "ArrowDown" && (y.preventDefault(), N > 0 ? (N--, k.value = O[N]) : (N = -1, k.value = ""));
      });
      let h = false, u = 0, $ = 0, z = 0, C = 0;
      we.addEventListener("mousedown", (y) => {
        const E = y.target.tagName;
        if (E === "BUTTON" || E === "INPUT" || E === "SELECT") return;
        h = true;
        const m = we.getBoundingClientRect();
        we.style.bottom = "unset", u = y.clientX, $ = y.clientY, z = m.left, C = m.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        h && (y.preventDefault(), we.style.left = z + (y.clientX - u) + "px", we.style.top = C + (y.clientY - $) + "px");
      }), window.addEventListener("mouseup", () => {
        h = false;
      }), Je();
    }, 10);
    function tt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function so() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ke(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, a = -1 / 0;
      for (const [d, i, b] of t) d < o && (o = d), d > s && (s = d), i < n && (n = i), i > c && (c = i), b < l && (l = b), b > a && (a = b);
      const r = new ke((o + s) / 2, (n + c) / 2, (l + a) / 2), p = Math.max(s - o, c - n, a - l, 1);
      return {
        center: r,
        extent: p
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
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((M) => M instanceof Jo))).forEach((b) => {
        b.traverse((M) => {
          M.geometry && M.geometry.dispose(), M.material && (M.material.map && M.material.map.dispose(), M.material.dispose());
        }), o.scene.remove(b);
      });
      const p = 0.05 * l, d = new Vo();
      d.name = "viewerAxes";
      const i = c.axisArrow;
      d.add(new Jo(new ke(1, 0, 0), new ke(), 1, i, 0.2, 0.2)), d.add(new Jo(new ke(0, 1, 0), new ke(), 1, i, 0.2, 0.2)), d.add(new Jo(new ke(0, 0, 1), new ke(), 1, i, 0.2, 0.2)), d.children.forEach((b) => b.scale.set(p, p, p));
      for (const [b, M, w] of [
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
        const v = document.createElement("canvas");
        v.width = 64, v.height = 64;
        const f = v.getContext("2d");
        f.fillStyle = M, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(b, 32, 34);
        const g = new Fn(v);
        g.needsUpdate = true;
        const S = new Xo(new Uo({
          map: g,
          depthTest: false,
          transparent: true
        }));
        S.position.set(w[0], w[1], w[2]), S.scale.set(0.4 * p, 0.4 * p, 1), S.renderOrder = 99, d.add(S);
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
          const p = r.type === "GridHelper" || r.type === "AxesHelper", d = r.isSprite, i = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (p || d || i) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, p = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -c * s, r.right = c * s, r.top = c, r.bottom = -c, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const p = (d, i, b) => {
          r.position.copy(d), r.up.copy(b), o.controls.target.copy(i), r.lookAt(i), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new ke(n.x, n.y, n.z + l * 2), new ke(n.x, n.y, n.z), new ke(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const d = parseInt(t.split(":")[1]), i = ((_a2 = ie.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * i, M = i * 0.45;
          o.renderer.clippingPlanes = [
            new po(new ke(0, 0, -1), b + M),
            new po(new ke(0, 0, 1), -b + M)
          ], a(), p(new ke(n.x, n.y, b + l * 2), new ke(n.x, n.y, b), new ke(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const d = parseInt(t.split(":")[1]), i = qe[d] ?? n.x;
          if (Fe.length > 1) {
            const M = ds(qe, d, l);
            o.renderer.clippingPlanes = [
              new po(new ke(-1, 0, 0), i + M),
              new po(new ke(1, 0, 0), -i + M)
            ], a(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const d = parseInt(t.split(":")[1]), i = Fe[d] ?? n.y;
          if (qe.length > 1) {
            const M = ds(Fe, d, l);
            o.renderer.clippingPlanes = [
              new po(new ke(0, -1, 0), i + M),
              new po(new ke(0, 1, 0), -i + M)
            ], a(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function yn() {
      const t = we.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (qe.length < 2 && Fe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, a, r) => {
        const p = document.createElement("button");
        return p.textContent = c, p.dataset.view = a, p.title = r, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (d) => {
          var _a2;
          d.stopPropagation();
          const i = p.classList.contains("view-active");
          we.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), i ? (ao("3d"), (_a2 = we.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (ao(a), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      qe.forEach((c, a) => {
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
      const t = we.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = ie.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, c, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = c, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const d = r.classList.contains("view-active");
          we.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), d ? (ao("3d"), (_a3 = we.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (ao(c), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ds() {
      ao("3d"), we.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    We.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, ao(t), we.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Dt = false, qt = false, Vt = false, Pt = "line", _t = [], dt = null, zt = null, Tt = null, wo = null, Ht = null;
    const mt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Mn = 0.5;
    let wn = [], Bt = null, mo = null;
    const So = [], Wo = [], js = 50;
    function Eo() {
      So.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), So.length > js && So.shift(), Wo.length = 0;
    }
    function ps() {
      if (So.length === 0) return;
      Wo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = So.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, no(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function fs() {
      if (Wo.length === 0) return;
      So.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Wo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, no(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ct = /* @__PURE__ */ new Set();
    let Rt = null, lo = [], Xt = null, Ut = null;
    function Sn(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const p = n[l[r]], d = n[l[(r + 1) % l.length]];
        s.push(p[0], p[1], p[2], d[0], d[1], d[2]);
      }
      const c = new jt();
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
      Ut && Ut.remove();
      const t = V.size > 0 || Y;
      if (ct.size === 0 && !t) {
        Ut = null;
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
    `, document.body.appendChild(o), Ut = o, o.querySelector("#sel-assign").addEventListener("click", () => {
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
          let c = 0, a = 0, r = 0, p = 0;
          n.forEach((i) => {
            const b = s[i];
            if (b) if (b.length === 2) {
              const M = l[b[0]], w = l[b[1]], v = Math.abs(w[0] - M[0]), f = Math.abs(w[1] - M[1]), g = Math.abs(w[2] - M[2]);
              g > v && g > f ? c++ : a++;
            } else b.length === 3 ? r++ : b.length === 4 && p++;
          });
          const d = [];
          c && d.push(`${c} columnas`), a && d.push(`${a} vigas`), p && d.push(`${p} shells Q4`), r && d.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ct.forEach((n) => V.add(n)), ct.clear(), ro(), io(), Se();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        Y = true, W.clear(), ct.forEach((n) => W.add(n)), ct.clear(), ro(), io(), Se();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), Y = false, W.clear(), io(), Se();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Eo(), ct.forEach((n) => ne.add(n)), ct.clear(), ro(), io(), Se();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ct.clear(), ro(), io();
      });
    }
    function Yo() {
      var _a2;
      qt = false, ct.clear(), ro(), Ut && (Ut.remove(), Ut = null), (_a2 = we.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
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
    function Ws(t) {
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
        ]), p = new jt();
        p.setAttribute("position", new ma(r, 3));
        const d = new To({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new Lo(p, d);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), wn.push(i);
      }
      o.render();
    }
    function En() {
      const t = tt();
      for (const o of wn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      wn = [], mo = null, Bt && (Bt.remove(), Bt = null);
    }
    function us(t, o, n, l) {
      Bt || (Bt = document.createElement("div"), Bt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Bt));
      const s = l.x - n.x, c = l.y - n.y, a = l.z - n.z, r = Math.sqrt(s * s + c * c + a * a), p = Math.abs(s), d = Math.abs(c), i = Math.abs(a);
      let b = "";
      p > d && p > i ? b = `\u0394X=${s.toFixed(2)}` : d > p && d > i ? b = `\u0394Y=${c.toFixed(2)}` : i > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Bt.textContent = `${r.toFixed(3)} m  ${b}`, Bt.style.left = t + 20 + "px", Bt.style.top = o - 10 + "px";
    }
    function Ys(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ke(l[0], l[1], l[2]), c = t.clone(), a = c.clone().sub(s), r = 0.3, p = Math.abs(a.x), d = Math.abs(a.y), i = Math.abs(a.z);
      return d < r && i < r && p > 0.01 ? new ke(c.x, s.y, s.z) : p < r && i < r && d > 0.01 ? new ke(s.x, c.y, s.z) : p < r && d < r && i > 0.01 ? new ke(s.x, s.y, c.z) : null;
    }
    function Go() {
      var _a2;
      const t = tt();
      zt && t && (t.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), Tt && t && (t.scene.remove(Tt), Tt.geometry.dispose(), Tt.material.dispose(), Tt = null), En(), dt = null, Ht = null, Vt = false, wo && (wo.remove(), wo = null), (_a2 = we.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Gs() {
      wo && wo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Pt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Pt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Pt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Pt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(mt.node)}">Node</button>
      <button id="ds-grid" style="${n(mt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(mt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(mt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Mn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), wo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = o(Pt === "line")), c && (c.style.cssText = o(Pt === "arc")), a && (a.style.cssText = o(Pt === "node")), r && (r.style.cssText = o(Pt === "area"));
        const p = t.querySelector("#ds-node"), d = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        p && (p.style.cssText = n(mt.node)), d && (d.style.cssText = n(mt.grid)), i && (i.style.cssText = n(mt.midpoint)), b && (b.style.cssText = n(mt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Pt = "line", dt = null, Ht = null, _t = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Pt = "arc", dt = null, Ht = null, _t = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Pt = "node", dt = null, Ht = null, _t = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Pt = "area", dt = null, Ht = null, _t = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
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
      const p = e.nodes.val, d = e.elements.val, i = 0.12;
      if (mt.node) {
        let w = -1, v = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const g = p[f], S = new ke(g[0], g[1], g[2]).project(n), I = Math.sqrt((S.x - c) ** 2 + (S.y - a) ** 2);
          I < i && I < v && (v = I, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new ke(...p[w]),
          snapType: "node"
        };
      }
      if (mt.midpoint) {
        let w = 1 / 0, v = null;
        for (const f of d) {
          if (f.length !== 2) continue;
          const g = p[f[0]], S = p[f[1]], I = new ke((g[0] + S[0]) / 2, (g[1] + S[1]) / 2, (g[2] + S[2]) / 2), k = I.clone().project(n), O = Math.sqrt((k.x - c) ** 2 + (k.y - a) ** 2);
          O < i * 0.8 && O < w && (w = O, v = I);
        }
        if (v) return {
          nodeIdx: null,
          worldPos: v,
          snapType: "mid"
        };
      }
      if (mt.grid) {
        const w = new po(new ke(0, 0, 1), 0), v = new ke();
        if (r.ray.intersectPlane(w, v)) {
          const f = mt.gridSize || Mn;
          return v.x = Math.round(v.x / f) * f, v.y = Math.round(v.y / f) * f, v.z = Math.round(v.z / f) * f, {
            nodeIdx: null,
            worldPos: v,
            snapType: "grid"
          };
        }
      }
      const b = new po(new ke(0, 0, 1), 0), M = new ke();
      return r.ray.intersectPlane(b, M), {
        nodeIdx: null,
        worldPos: M,
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
        const l = n[dt], s = new jt();
        if (Pt === "arc" && Ht !== null) {
          const a = n[Ht], r = hs(new ke(l[0], l[1], l[2]), new ke(a[0], a[1], a[2]), t.worldPos, 16), p = [];
          for (let d = 0; d < r.length - 1; d++) p.push(r[d].x, r[d].y, r[d].z, r[d + 1].x, r[d + 1].y, r[d + 1].z);
          s.setAttribute("position", new ho(p, 3));
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
        zt = new go(s, c), Pt === "arc" && Ht !== null && (zt = new Lo(s, c)), zt.renderOrder = 9999, o.scene.add(zt);
      }
      o.render();
    }
    function hs(t, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const a = c / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - a) * (1 - a), d = 2 * (1 - a) * a, i = a * a;
        s.push(new ke(p * t.x + d * r.x + i * n.x, p * t.y + d * r.y + i * n.y, p * t.z + d * r.z + i * n.z));
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
      if (Pt === "node") {
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
      if (Pt === "line") {
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
      if (Pt === "arc") {
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
        const n = e.nodes.val, l = new ke(...n[dt]), s = new ke(...n[Ht]), c = new ke(...n[o]), a = Math.max(4, Math.round(((_a2 = ie.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = hs(l, s, c, a);
        Eo();
        const p = [
          ...e.nodes.val
        ], d = [
          ...e.elements.val
        ];
        let i = dt;
        for (let b = 1; b < r.length; b++) {
          let M;
          if (b === r.length - 1) M = o;
          else {
            const w = r[b];
            M = p.length, p.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          d.push([
            i,
            M
          ]), i = M;
        }
        e.nodes.val = p, e.elements.val = d, no(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, dt = o, Ht = null;
        return;
      }
      if (Pt === "area") {
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
              }, (r, p) => p),
              maxMeshSize: Mn || 0.5
            }), a = [];
            for (const r of c.nodes) {
              let p = -1;
              for (let d = 0; d < n.length; d++) {
                const i = Math.abs(n[d][0] - r[0]), b = Math.abs(n[d][1] - r[1]), M = Math.abs(n[d][2] - r[2]);
                if (i < 0.01 && b < 0.01 && M < 0.01) {
                  p = d;
                  break;
                }
              }
              p >= 0 ? a.push(p) : (a.push(n.length), n.push([
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
            const c = new jt().setFromPoints([
              new ke(...l[n]),
              new ke(...l[o])
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
        const r = n[l[a]], p = n[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], p[0], p[1], p[2]);
      }
      const c = new jt();
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
      let r = 1 / 0, p = -1;
      const d = s.ray;
      for (let b = 0; b < a.length; b++) {
        const M = a[b];
        if (M.length === 2) {
          const w = new ke(...c[M[0]]), v = new ke(...c[M[1]]), f = new va(w, v), g = new ke(), S = new ke();
          d.closestPointToPoint(f.getCenter(new ke()), g), f.closestPointToPoint(g, true, S);
          const I = g.distanceTo(S);
          I < r && (r = I, p = b);
        } else if (M.length === 3) {
          const w = new ke(...c[M[0]]), v = new ke(...c[M[1]]), f = new ke(...c[M[2]]), g = new ke();
          if (d.intersectTriangle(w, v, f, false, g)) {
            const I = d.origin.distanceTo(g);
            I < r && (r = I, p = b);
          } else {
            const I = w.add(v).add(f).divideScalar(3), k = new ke();
            d.closestPointToPoint(I, k);
            const O = k.distanceTo(I);
            O < r && (r = O, p = b);
          }
        } else if (M.length === 4) {
          const w = new ke(...c[M[0]]), v = new ke(...c[M[1]]), f = new ke(...c[M[2]]), g = new ke(...c[M[3]]), S = new ke();
          let I = d.intersectTriangle(w, v, f, false, S);
          if (I) {
            const k = d.origin.distanceTo(S);
            k < r && (r = k, p = b);
          }
          if (I = d.intersectTriangle(w, f, g, false, S), I) {
            const k = d.origin.distanceTo(S);
            k < r && (r = k, p = b);
          }
        }
      }
      const { extent: i } = so();
      return r < i * 0.1 ? p : -1;
    }
    function de(t, o = 4) {
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
          const p = t[a][r], d = Math.abs(p) > 1e-10 ? "nonzero" : "";
          c += `<td class="${d}">${de(p, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function Ae(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function R(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Vs(t, o, n, l, s, c, a) {
      const r = `${Ae(R("E") + "\xB7" + R("A"), R("L"))}`, p = `${Ae("12\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB3")}`, d = `${Ae("12\xB7" + R("E") + "\xB7" + R("I", "y"), R("L") + "\xB3")}`, i = `${Ae(R("G") + "\xB7" + R("J"), R("L"))}`, b = `${Ae("4\xB7" + R("E") + "\xB7" + R("I", "y"), R("L"))}`, M = `${Ae("4\xB7" + R("E") + "\xB7" + R("I", "z"), R("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${r} = ${Ae(de(t) + "\xB7" + de(o), de(a))} = <span class="highlight">${de(t * o / a)}</span></div>
      <div>${p} = ${Ae("12\xB7" + de(t) + "\xB7" + de(n), de(a) + "\xB3")} = <span class="highlight">${de(12 * t * n / a ** 3)}</span></div>
      <div>${d} = ${Ae("12\xB7" + de(t) + "\xB7" + de(l), de(a) + "\xB3")} = <span class="highlight">${de(12 * t * l / a ** 3)}</span></div>
      <div>${i} = ${Ae(de(s) + "\xB7" + de(c), de(a))} = <span class="highlight">${de(s * c / a)}</span></div>
      <div>${b} = ${Ae("4\xB7" + de(t) + "\xB7" + de(l), de(a))} = <span class="highlight">${de(4 * t * l / a)}</span></div>
      <div>${M} = ${Ae("4\xB7" + de(t) + "\xB7" + de(n), de(a))} = <span class="highlight">${de(4 * t * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${R("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Ae(R("EA"), R("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Ae("\u2212" + R("EA"), R("L"))}</span>
        <span class="cell">0</span><span class="cell">${Ae("12" + R("EI", "z"), R("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${Ae("\u2212" + R("EA"), R("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Ae(R("EA"), R("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Xs(t) {
      if (t.length === 2) {
        const n = oo(t[1], t[0]), l = yo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${R("l")} = cos(\u03B1) = ${Ae("\u0394x", R("L"))} = ${Ae(de(n[0]), de(l))} = <span class="highlight">${de(s)}</span></div>
        <div>${R("m")} = cos(\u03B2) = ${Ae("\u0394y", R("L"))} = ${Ae(de(n[1]), de(l))} = <span class="highlight">${de(c)}</span></div>
        <div>${R("n")} = cos(\u03B3) = ${Ae("\u0394z", R("L"))} = ${Ae(de(n[2]), de(l))} = <span class="highlight">${de(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${R("l")}</span><span class="cell">${R("m")}</span><span class="cell">${R("n")}</span>
          <span class="cell">${Ae("\u2212" + R("m"), R("D"))}</span><span class="cell">${Ae(R("l"), R("D"))}</span><span class="cell">0</span>
          <span class="cell">${Ae("\u2212" + R("l") + "\xB7" + R("n"), R("D"))}</span><span class="cell">${Ae("\u2212" + R("m") + "\xB7" + R("n"), R("D"))}</span><span class="cell">${R("D")}</span>
        </span>
        &nbsp; donde ${R("D")} = \u221A(${R("l")}\xB2 + ${R("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${R("T")} = ${R("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${R("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Us() {
      return `<div class="fem-eq">
      ${R("K", "global")} = ${R("T")}<sup>T</sup> \xB7 ${R("k", "local")} \xB7 ${R("T")}
    </div>`;
    }
    function Ks(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${R("K", "global")}[${R("i")}, ${R("j")}] += ${R("K", "elem")}[${R("i")}, ${R("j")}]</div>
      <div style="margin-top:4px">donde ${R("i")}, ${R("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Zs(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${R("u", "local")} = ${R("T")} \xB7 ${R("u", "global")}</div>
        <div>${R("f", "local")} = ${R("k", "local")} \xB7 ${R("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${R("f")} = [${R("N", "i")}, ${R("V", "y,i")}, ${R("V", "z,i")}, ${R("M", "x,i")}, ${R("M", "y,i")}, ${R("M", "z,i")}, ${R("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Ae("1", "2" + R("A"))} \xB7 ${R("D")} \xB7 ${R("B")} \xB7 ${R("u")}</div>
      <div>${R("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${R("t")} &nbsp;&nbsp; ${R("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Ae(R("t") + "\xB3", "12")}</div>
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
          l += `<td class="${r}">${de(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function xs() {
      const t = "0", o = Ae(R("EA"), R("L")), n = Ae("\u2212" + R("EA"), R("L")), l = Ae("12" + R("EI", "z"), R("L") + "\xB3"), s = Ae("\u221212" + R("EI", "z"), R("L") + "\xB3"), c = Ae("12" + R("EI", "y"), R("L") + "\xB3"), a = Ae("\u221212" + R("EI", "y"), R("L") + "\xB3"), r = Ae("6" + R("EI", "z"), R("L") + "\xB2"), p = Ae("\u22126" + R("EI", "z"), R("L") + "\xB2"), d = Ae("6" + R("EI", "y"), R("L") + "\xB2"), i = Ae("\u22126" + R("EI", "y"), R("L") + "\xB2"), b = Ae(R("GJ"), R("L")), M = Ae("\u2212" + R("GJ"), R("L")), w = Ae("4" + R("EI", "z"), R("L")), v = Ae("2" + R("EI", "z"), R("L")), f = Ae("4" + R("EI", "y"), R("L")), g = Ae("2" + R("EI", "y"), R("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', I = [
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
          M,
          t,
          t
        ],
        [
          t,
          t,
          i,
          t,
          f,
          t,
          t,
          t,
          d,
          t,
          g,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          w,
          t,
          p,
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
          M,
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
          g,
          t,
          t,
          t,
          d,
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
          v,
          t,
          p,
          t,
          t,
          t,
          w
        ]
      ];
      let N = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      N += '<table><tr><td class="hdr"></td>';
      for (const h of k) N += `<td class="hdr">${h}</td>`;
      N += "</tr>";
      for (let h = 0; h < 12; h++) {
        N += `<tr><td class="hdr">${I[h]}</td>`;
        for (let u = 0; u < 12; u++) if (u < h) N += `<td style="color:var(--fem-border-cell)">${u === 0 && h > 0 ? S : ""}</td>`;
        else {
          const $ = O[h][u], z = (h === u ? "diag " : "") + ($ !== "0" ? "nz" : "");
          N += `<td class="${z}">${$}</td>`;
        }
        N += "</tr>";
      }
      return N += "</table>", N;
    }
    function Qs(t, o, n, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${Ae(R("E") + "\xB7" + R("A"), R("L"))}`,
          calc: `${Ae(de(t) + "\xD7" + de(o), de(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${Ae("12\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB3")}`,
          calc: `${Ae("12\xD7" + de(t) + "\xD7" + de(n), de(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${Ae("6\xB7" + R("E") + "\xB7" + R("I", "z"), R("L") + "\xB2")}`,
          calc: `${Ae("6\xD7" + de(t) + "\xD7" + de(n), de(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Ae("12\xB7" + R("E") + "\xB7" + R("I", "y"), R("L") + "\xB3")}`,
          calc: `${Ae("12\xD7" + de(t) + "\xD7" + de(l), de(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${Ae("6\xB7" + R("E") + "\xB7" + R("I", "y"), R("L") + "\xB2")}`,
          calc: `${Ae("6\xD7" + de(t) + "\xD7" + de(l), de(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Ae(R("G") + "\xB7" + R("J"), R("L"))}`,
          calc: `${Ae(de(s) + "\xD7" + de(c), de(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${Ae("4\xB7" + R("E") + "\xB7" + R("I", "z"), R("L"))}`,
          calc: `${Ae("4\xD7" + de(t) + "\xD7" + de(n), de(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Ae("2\xB7" + R("E") + "\xB7" + R("I", "z"), R("L"))}`,
          calc: `${Ae("2\xD7" + de(t) + "\xD7" + de(n), de(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Ae("4\xB7" + R("E") + "\xB7" + R("I", "y"), R("L"))}`,
          calc: `${Ae("4\xD7" + de(t) + "\xD7" + de(l), de(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Ae("2\xB7" + R("E") + "\xB7" + R("I", "y"), R("L"))}`,
          calc: `${Ae("2\xD7" + de(t) + "\xD7" + de(l), de(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${de(p.val)}</span></div>`).join("")}</div>`;
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
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((h) => o[h]), c = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const h = yo(oo(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, $ = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, z = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, C = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, y = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, E = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${de(h)}${de(u)}${de($)}${de(z)}${de(C)}${de(y)}${de(E)}`;
      } else {
        const h = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, u = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, $ = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${de(h)}${de(u)}${de($)}`;
      }
      let d = "", i = "", b = "", M = "", w = "", v = "", f = "", g = "", S = null, I = null, k = null, O = [];
      try {
        if (S = on(s, a, t), I = nn(s), k = Wt(_n(I), Wt(S, I)), O = c ? [
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
          const z = yo(oo(s[1], s[0])), C = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, y = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, E = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, m = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, A = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, F = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          M = Vs(C, y, E, m, A, F, z);
        }
        w = Xs(s), v = Us(), f = Ks(l), g = Zs(c);
        const h = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', $ = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${h}</div>${zn(S, O)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${I.length}\xD7${I.length}) ${u}</div>${zn(I, O)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${$}</div>${zn(k, O)}`;
      } catch (h) {
        d = `<div style="color:red">Error: ${h.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
        const h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, $) => {
          var _a3;
          const z = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], C = h.map((y, E) => `<span class="prop-key">${y}</span>: <span class="${Math.abs(z[E]) > 1e-10 ? "result-val" : ""}">${de(z[E])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${C}</div>`;
        }).join("");
      }
      if (p && c && (r == null ? void 0 : r.deformations) && S && I) {
        const h = (_s2 = p.normals) == null ? void 0 : _s2.get(t), u = (_t2 = p.shearsY) == null ? void 0 : _t2.get(t), $ = (_u = p.shearsZ) == null ? void 0 : _u.get(t), z = (_v = p.torsions) == null ? void 0 : _v.get(t), C = (_w = p.bendingsY) == null ? void 0 : _w.get(t), y = (_x = p.bendingsZ) == null ? void 0 : _x.get(t), E = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], m = [];
        for (const K of l) {
          const te = ((_y = r.deformations) == null ? void 0 : _y.get(K)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          m.push(...te);
        }
        let A = [];
        try {
          A = Wt(I, m);
        } catch {
          A = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = Wt(S, A);
        } catch {
          F = new Array(12).fill(0);
        }
        const H = (K, te) => K.map((j, he) => `<span style="color:${Math.abs(j) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${te[he % 6]}=${de(j)}</span>`).join(", "), Z = [
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
        ].map((K, te) => `${K}${te < 6 ? "\u1D62" : "\u2C7C"}`);
        `${R("u", "global")}${l.map((K, te) => `<span style="color:var(--fem-label)">nodo ${K}:</span> ${E.map((j, he) => `<span style="color:${Math.abs(m[te * 6 + he]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${de(m[te * 6 + he])}</span>`).join(", ")}`).join(" | ")}${R("u", "local")}${R("T")}${R("u", "global")}${R("u", "local")}${H(A, [
          ...E,
          ...E
        ])}${R("f", "local")}${R("k", "local")}${R("u", "local")}${R("f", "local")}${F.map((K, te) => `<span style="color:${Math.abs(K) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Z[te]}=${de(K)}</span>`).join(", ")}${R("P", "1")}${R("N", "i")}${de(F[0])}${R("P", "7")}${R("N", "j")}${de(F[6])}${R("P", "2")}${R("V", "y,i")}${de(F[1])}${R("P", "8")}${R("V", "y,j")}${de(F[7])}${R("P", "3")}${R("V", "z,i")}${de(F[2])}${R("P", "9")}${R("V", "z,j")}${de(F[8])}${R("P", "4")}${R("M", "x,i")}${de(F[3])}${R("P", "10")}${R("M", "x,j")}${de(F[9])}${R("P", "5")}${R("M", "y,i")}${de(F[4])}${R("P", "11")}${R("M", "y,j")}${de(F[10])}${R("P", "6")}${R("M", "z,i")}${de(F[5])}${R("P", "12")}${R("M", "z,j")}${de(F[11])}${h ? h.map((K) => de(K)).join(", ") : "\u2014"}${u ? u.map((K) => de(K)).join(", ") : "\u2014"}${$ ? $.map((K) => de(K)).join(", ") : "\u2014"}${z ? z.map((K) => de(K)).join(", ") : "\u2014"}${C ? C.map((K) => de(K)).join(", ") : "\u2014"}${y ? y.map((K) => de(K)).join(", ") : "\u2014"}`;
      } else if (p && c) {
        const h = (_z = p.normals) == null ? void 0 : _z.get(t), u = (_A = p.shearsY) == null ? void 0 : _A.get(t), $ = (_B = p.shearsZ) == null ? void 0 : _B.get(t), z = (_C = p.torsions) == null ? void 0 : _C.get(t), C = (_D = p.bendingsY) == null ? void 0 : _D.get(t), y = (_E = p.bendingsZ) == null ? void 0 : _E.get(t);
        `${h ? h.map((E) => de(E)).join(", ") : "\u2014"}${u ? u.map((E) => de(E)).join(", ") : "\u2014"}${$ ? $.map((E) => de(E)).join(", ") : "\u2014"}${z ? z.map((E) => de(E)).join(", ") : "\u2014"}${C ? C.map((E) => de(E)).join(", ") : "\u2014"}${y ? y.map((E) => de(E)).join(", ") : "\u2014"}`;
      } else if (p && !c) {
        const h = (_F = p.bendingXX) == null ? void 0 : _F.get(t), u = (_G = p.bendingYY) == null ? void 0 : _G.get(t), $ = (_H = p.bendingXY) == null ? void 0 : _H.get(t), z = (_I = p.membraneXX) == null ? void 0 : _I.get(t), C = (_J = p.membraneYY) == null ? void 0 : _J.get(t), y = (_K = p.membraneXY) == null ? void 0 : _K.get(t);
        `${h ? h.map((E) => de(E)).join(", ") : "\u2014"}${u ? u.map((E) => de(E)).join(", ") : "\u2014"}${$ ? $.map((E) => de(E)).join(", ") : "\u2014"}${z ? z.map((E) => de(E)).join(", ") : "\u2014"}${C ? C.map((E) => de(E)).join(", ") : "\u2014"}${y ? y.map((E) => de(E)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Xt = Pa(t, o, n, a, r, p), Xt.id = "fem-inspect-panel", document.body.appendChild(Xt), (_L = Xt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => bo());
      const N = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const h = yo(oo(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, $ = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, z = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, C = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, y = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, E = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Qs(u, $, z, C, y, E, h);
      })() : void 0;
      Xt.querySelectorAll("[data-full]").forEach((h) => {
        h.addEventListener("click", (u) => {
          u.stopPropagation();
          const $ = h.dataset.full;
          if ($ === "kLocal" && S) {
            const z = c ? xs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Ln(`Elemento ${t} \u2014 Rigidez Local k_local`, z, Tn(S, O), N);
          } else if ($ === "T" && I) Ln(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, Tn(I, O));
          else if ($ === "kGlobal" && k) {
            const z = c ? xs() : "<em>Shell 18\xD718</em>";
            Ln(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, z, Tn(k, O), N);
          }
        });
      });
    }
    function ys() {
      const l = [], s = [];
      for (let v = 0; v <= 8; v++) {
        const f = v / 8, g = 30 * f, I = 12 * (1 - f) * (1 - f * 0.3) / 2, k = l.length;
        if (l.push([
          -I,
          -I,
          g
        ]), l.push([
          I,
          -I,
          g
        ]), l.push([
          I,
          I,
          g
        ]), l.push([
          -I,
          I,
          g
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
          const O = k - 4;
          for (let N = 0; N < 4; N++) s.push([
            O + N,
            k + N
          ]);
          s.push([
            O,
            k + 1
          ]), s.push([
            O + 1,
            k + 2
          ]), s.push([
            O + 2,
            k + 3
          ]), s.push([
            O + 3,
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
      const p = 2e8, d = 77e6, i = 5e-3, b = 2e-6, M = 1e-6, w = {
        elasticities: new Map(s.map((v, f) => [
          f,
          p
        ])),
        shearModuli: new Map(s.map((v, f) => [
          f,
          d
        ])),
        areas: new Map(s.map((v, f) => [
          f,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((v, f) => [
          f,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((v, f) => [
          f,
          b
        ])),
        torsionalConstants: new Map(s.map((v, f) => [
          f,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const v = Ft(l, s, {
          supports: c,
          loads: r
        }, w);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Eiffel deform:", v.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function $s() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const v = w / 20, f = 20 * v, g = 20 * (1 - Math.pow(2 * v - 1, 2)), S = 2;
        l.push([
          f,
          -2 / 2,
          g
        ]), l.push([
          f,
          S / 2,
          g
        ]);
      }
      for (let w = 0; w < 20; w++) s.push([
        w * 2,
        (w + 1) * 2
      ]), s.push([
        w * 2 + 1,
        (w + 1) * 2 + 1
      ]), s.push([
        w * 2,
        w * 2 + 1
      ]), s.push([
        w * 2,
        (w + 1) * 2 + 1
      ]), s.push([
        w * 2 + 1,
        (w + 1) * 2
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
      for (let w = 0; w <= 20; w++) a.set(w * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), a.set(w * 2 + 1, [
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
      const r = 2e8, p = 77e6, d = 0.01, i = 5e-6, b = 2e-6, M = {
        elasticities: new Map(s.map((w, v) => [
          v,
          r
        ])),
        shearModuli: new Map(s.map((w, v) => [
          v,
          p
        ])),
        areas: new Map(s.map((w, v) => [
          v,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((w, v) => [
          v,
          i
        ])),
        momentsOfInertiaY: new Map(s.map((w, v) => [
          v,
          i
        ])),
        torsionalConstants: new Map(s.map((w, v) => [
          v,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const w = Ft(l, s, {
          supports: c,
          loads: a
        }, M);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Ms() {
      const c = [], a = [];
      for (let f = 0; f <= 16; f++) {
        const g = 60 * f / 16;
        c.push([
          g,
          -6 / 2,
          8
        ]), c.push([
          g,
          6 / 2,
          8
        ]);
      }
      const r = c.length;
      for (let f = 0; f < 16; f++) a.push([
        f * 2,
        (f + 1) * 2
      ]), a.push([
        f * 2 + 1,
        (f + 1) * 2 + 1
      ]), a.push([
        f * 2,
        f * 2 + 1
      ]);
      a.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const p = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], d = [];
      for (const f of p) {
        const g = 60 * f / 16, S = c.length;
        c.push([
          g,
          -6 / 2,
          0
        ]);
        const I = c.length;
        c.push([
          g,
          6 / 2,
          0
        ]);
        const k = c.length;
        c.push([
          g,
          -6 / 2,
          28
        ]);
        const O = c.length;
        c.push([
          g,
          6 / 2,
          28
        ]), d.push(k, O), a.push([
          S,
          f * 2
        ]), a.push([
          f * 2,
          k
        ]), a.push([
          I,
          f * 2 + 1
        ]), a.push([
          f * 2 + 1,
          O
        ]), a.push([
          k,
          O
        ]);
      }
      for (const f of d) {
        const g = c[f][0];
        for (let S = 0; S <= 16; S++) {
          const I = 60 * S / 16;
          if (Math.abs(I - g) > 60 * 0.05 && Math.abs(I - g) < 60 * 0.45) {
            const k = c[f][1] < 0 ? S * 2 : S * 2 + 1;
            S % 2 === 0 && a.push([
              f,
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
      for (let f = r; f < r + p.length * 4; f += 4) i.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(f + 1, [
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
      e.nodes.val = c, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: b
      });
      const M = 2e8, w = 77e6, v = {
        elasticities: new Map(a.map((f, g) => [
          g,
          M
        ])),
        shearModuli: new Map(a.map((f, g) => [
          g,
          w
        ])),
        areas: new Map(a.map((f, g) => [
          g,
          g < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((f, g) => [
          g,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((f, g) => [
          g,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((f, g) => [
          g,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const f = Ft(c, a, {
          supports: i,
          loads: b
        }, v);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Puente atirantado: ${c.length} nodos, ${a.length} elem, span=60m`);
    }
    function ws() {
      const c = [], a = [];
      for (let g = 0; g <= 12; g++) {
        const S = g * 3.5, I = g * 5 * Math.PI / 180;
        for (let k = 0; k < 6; k++) {
          const O = I + 2 * Math.PI * k / 6, N = 5 * Math.cos(O), h = 5 * Math.sin(O);
          c.push([
            N,
            h,
            S
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const S = g * 6;
        for (let I = 0; I < 6; I++) a.push([
          S + I,
          S + (I + 1) % 6
        ]);
        if (g < 12) {
          const I = (g + 1) * 6;
          for (let k = 0; k < 6; k++) a.push([
            S + k,
            I + k
          ]), a.push([
            S + k,
            I + (k + 1) % 6
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const S = c.length;
        c.push([
          0,
          0,
          g * 3.5
        ]);
        const I = g * 6;
        for (let k = 0; k < 6; k++) a.push([
          S,
          I + k
        ]);
      }
      const r = 13 * 6;
      for (let g = 0; g < 12; g++) a.push([
        r + g,
        r + g + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let g = 0; g < 6; g++) p.set(g, [
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
      const d = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 12; g++) {
        const S = 10 * g / 12, I = g * 6;
        for (let k = 0; k < 6; k++) d.set(I + k, [
          S,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: d
      });
      const i = 2e8, b = 77e6, M = 8e-3, w = 1e-5, v = 5e-6, f = {
        elasticities: new Map(a.map((g, S) => [
          S,
          i
        ])),
        shearModuli: new Map(a.map((g, S) => [
          S,
          b
        ])),
        areas: new Map(a.map((g, S) => [
          S,
          M
        ])),
        momentsOfInertiaZ: new Map(a.map((g, S) => [
          S,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((g, S) => [
          S,
          w
        ])),
        torsionalConstants: new Map(a.map((g, S) => [
          S,
          v
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const g = Ft(c, a, {
          supports: p,
          loads: d
        }, f);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Torre Twist: ${c.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ss() {
      const s = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const g = f / 20, S = f * 3;
        let I = 8 * (1 - g * 0.7);
        g > 0.4 && (I *= 0.85), g > 0.7 && (I *= 0.7);
        const k = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let O = 0; O < 3; O++) {
          const N = O * 2 * Math.PI / 3 - Math.PI / 2, h = I * Math.cos(N), u = I * Math.sin(N), $ = s.length;
          s.push([
            h,
            u,
            S
          ]), c.push([
            k,
            $
          ]);
          const z = s.length;
          s.push([
            h * 0.5,
            u * 0.5,
            S
          ]), c.push([
            k,
            z
          ]), c.push([
            z,
            $
          ]);
        }
        for (let O = 0; O < 3; O++) {
          const N = k + 1 + O * 2, h = k + 1 + (O + 1) % 3 * 2;
          c.push([
            N,
            h
          ]);
        }
        if (f < 20) {
          const N = k + 7;
          c.push([
            k,
            N
          ]);
          for (let h = 0; h < 3; h++) c.push([
            k + 1 + h * 2,
            N + 1 + h * 2
          ]), c.push([
            k + 2 + h * 2,
            N + 2 + h * 2
          ]), c.push([
            k + 1 + h * 2,
            N + 2 + h * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let f = 0; f < r; f++) a.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const g = f * r, S = 5 * f / 20;
        p.set(g, [
          S,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: p
      });
      const d = 35e6, i = 14e6, b = 0.02, M = 5e-5, w = 2e-5, v = {
        elasticities: new Map(c.map((f, g) => [
          g,
          d
        ])),
        shearModuli: new Map(c.map((f, g) => [
          g,
          i
        ])),
        areas: new Map(c.map((f, g) => [
          g,
          b
        ])),
        momentsOfInertiaZ: new Map(c.map((f, g) => [
          g,
          M
        ])),
        momentsOfInertiaY: new Map(c.map((f, g) => [
          g,
          M
        ])),
        torsionalConstants: new Map(c.map((f, g) => [
          g,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const f = Ft(s, c, {
          supports: a,
          loads: p
        }, v);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Es() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const M = b * 12, w = 15 - b * 2, v = 20 - b * 3, f = 8 - b, g = t.length;
        for (let I = 0; I <= 4; I++) {
          const k = I / 4, O = -f / 2 + f * k, N = v * (1 - k * k * 0.3);
          for (let h = 0; h <= 12; h++) {
            const u = h / 12, $ = M + N * u, z = w * Math.sin(Math.PI * u) * (1 - k * k * 0.5), C = O;
            t.push([
              $,
              C,
              z
            ]);
          }
        }
        const S = 13;
        for (let I = 0; I < 4; I++) for (let k = 0; k < 12; k++) {
          const O = g + I * S + k, N = g + I * S + k + 1, h = g + (I + 1) * S + k + 1, u = g + (I + 1) * S + k;
          o.push([
            O,
            N,
            h,
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
      const a = 35e6, r = 0.2, p = 0.15, d = a / (2 * (1 + r)), i = {
        elasticities: new Map(o.map((b, M) => [
          M,
          a
        ])),
        poissonsRatios: new Map(o.map((b, M) => [
          M,
          r
        ])),
        thicknesses: new Map(o.map((b, M) => [
          M,
          p
        ])),
        shearModuli: new Map(o.map((b, M) => [
          M,
          d
        ]))
      };
      e.elementInputs && (e.elementInputs.val = i);
      try {
        const b = Ft(t, o, {
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
        const f = v / 15, g = v * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let k = 0; k < 12; k++) {
            const O = 2 * Math.PI * k / 12;
            l.push([
              Math.max(I, 1) * Math.cos(O),
              Math.max(I, 1) * Math.sin(O),
              g
            ]);
          }
        } else for (let I = 0; I < 12; I++) {
          const k = 2 * Math.PI * I / 12;
          l.push([
            S * Math.cos(k),
            S * Math.sin(k),
            g
          ]);
        }
      }
      for (let v = 0; v < 15; v++) {
        const f = v * 12, g = (v + 1) * 12;
        for (let I = 0; I < 12; I++) s.push([
          f + I,
          f + (I + 1) % 12
        ]);
        const S = v % 2 === 0 ? 1 : -1;
        for (let I = 0; I < 12; I++) {
          const k = (I + S + 12) % 12;
          s.push([
            f + I,
            g + k
          ]), s.push([
            f + I,
            g + I
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
        const f = v * 12, g = 3 * v / 15;
        for (let S = 0; S < 12; S += 3) r.set(f + S, [
          g,
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
      const p = 2e8, d = 77e6, i = 6e-3, b = 8e-6, M = 4e-6, w = {
        elasticities: new Map(s.map((v, f) => [
          f,
          p
        ])),
        shearModuli: new Map(s.map((v, f) => [
          f,
          d
        ])),
        areas: new Map(s.map((v, f) => [
          f,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((v, f) => [
          f,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((v, f) => [
          f,
          b
        ])),
        torsionalConstants: new Map(s.map((v, f) => [
          f,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const v = Ft(l, s, {
          supports: a,
          loads: r
        }, w);
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
        const o = (g) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${g}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, c = o("po-fy") * 1e3, a = o("po-H"), r = o("po-L"), p = o("po-As") * 1e-4, d = o("po-nbar"), i = o("po-drift") / 100, b = o("po-ncycles"), M = t.querySelector("#pushover-status");
        M.textContent = "Generando historia de desplazamientos...";
        const w = [], v = i * a, f = 40;
        for (let g = 1; g <= b; g++) {
          const S = v * g / b;
          for (let I = 0; I <= f; I++) w.push(S * Math.sin(2 * Math.PI * I / f));
        }
        M.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await ia(async () => {
            const { cyclicPushover: I } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: I
            };
          }, __vite__mapDeps([0,1]), import.meta.url), S = await g({
            colHeight: a,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: d
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: d
            },
            dispHistory: w
          });
          M.textContent = `Completado: ${S.nSteps} pasos`, oa(t.querySelector("#pushover-canvas"), S.displacements, S.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (g) {
          M.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
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
      }, p = c - r.left - r.right, d = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, c, a);
      let i = Math.min(...o), b = Math.max(...o), M = Math.min(...n), w = Math.max(...n);
      i === b && (i -= 0.01, b += 0.01), M === w && (M -= 1, w += 1);
      const v = b - i, f = w - M, g = (O) => r.left + (O - i) / v * p, S = (O) => r.top + d - (O - M) / f * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, i < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(g(0), r.top), s.lineTo(g(0), r.top + d), s.stroke()), M < 0 && w > 0 && (s.beginPath(), s.moveTo(r.left, S(0)), s.lineTo(r.left + p, S(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(g(o[0]), S(n[0]));
      for (let O = 1; O < o.length; O++) s.lineTo(g(o[O]), S(n[O]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + p / 2, a - 5), s.save(), s.translate(12, r.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const I = v / 5;
      for (let O = 0; O <= 5; O++) {
        const N = i + I * O;
        s.fillText((N * 1e3).toFixed(1), g(N), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const k = f / 5;
      for (let O = 0; O <= 5; O++) {
        const N = M + k * O;
        s.fillText(N.toFixed(0), r.left - 5, S(N) + 3);
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
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, p = [];
      for (let G = 0; G < a; G++) {
        const Z = c * (1 + G * 0.5);
        for (let K = 0; K < r; K++) {
          const te = K / r * 2 * Math.PI;
          p.push(Z * Math.sin(te));
        }
      }
      const d = o / n, i = l * n;
      let b = 0, M = 0, w = -d, v = d, f = 0, g = 0, S = 0, I = 0, k = 0, O = 0;
      const N = [];
      for (const G of p) {
        let Z = w, K = v, te = f, j = g, he = S, ze = I, ue = k, q = O, oe;
        const se = G - b;
        if (Math.abs(se) < 1e-20) {
          N.push(M);
          continue;
        }
        if ((q === 0 || q === 3) && (se < 0 ? (q = 2, j = -d, he = -o, te = j, ze = 0, ue = 0) : (q = 1, j = d, he = o, te = j, ze = 0, ue = 0)), q === 2 && se > 0) {
          q = 1, ze = b, ue = M, b < Z && (Z = b);
          const Ie = (K - Z) / (2 * 1 * d), je = 1 + 0 * Math.pow(Ie, 0.8);
          j = (o * je - i * d * je - ue + n * ze) / (n - i), he = o * je + i * (j - d * je), te = K;
        } else if (q === 1 && se < 0) {
          q = 2, ze = b, ue = M, b > K && (K = b);
          const Ie = (K - Z) / (2 * 1 * d), je = 1 + 0 * Math.pow(Ie, 0.8);
          j = (-o * je + i * d * je - ue + n * ze) / (n - i), he = -o * je + i * (j + d * je), te = Z;
        }
        const ee = Math.abs((te - j) / d);
        let J = s - 0.925 * ee / (0.15 + ee);
        J < 0.1 && (J = 0.1);
        const re = (G - ze) / (j - ze), fe = 1 + Math.pow(Math.abs(re), J), Q = Math.pow(fe, 1 / J);
        oe = l * re + (1 - l) * re / Q, oe = oe * (he - ue) + ue, N.push(oe), b = G, M = oe, w = Z, v = K, f = te, g = j, S = he, I = ze, k = ue, O = q;
      }
      const h = t.querySelector("#nl-canvas"), u = h.getContext("2d"), $ = h.width, z = h.height;
      u.clearRect(0, 0, $, z);
      const C = Math.max(...p.map(Math.abs)), y = Math.max(...N.map(Math.abs)), E = ($ - 40) / (2 * C), m = (z - 40) / (2 * y), A = $ / 2, F = z / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo($ - 20, F), u.stroke(), u.beginPath(), u.moveTo(A, 20), u.lineTo(A, z - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", $ - 40, F - 5), u.fillText("\u03C3 (stress)", A + 30, 15), u.fillText(`\xB1${(C * 100).toFixed(1)}%`, $ - 30, F + 12), u.fillText(`\xB1${(y / 1e3).toFixed(0)} MPa`, A + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let G = 0; G < p.length; G++) {
        const Z = A + p[G] * E, K = F - N[G] * m;
        G === 0 ? u.moveTo(Z, K) : u.lineTo(Z, K);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * m), u.lineTo($ - 20, F - o * m), u.stroke(), u.beginPath(), u.moveTo(20, F + o * m), u.lineTo($ - 20, F + o * m), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, $ - 50, F - o * m - 5);
      const H = t.querySelector("#nl-info");
      H.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
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
      function p() {
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
      a.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Io = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = a.value, i = {
          secType: d
        };
        d === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : d === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : d === "W" || d === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : d === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : d === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((b) => xe.set(b, {
          ...i
        })), o.remove(), Io = null, no(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((d) => xe.delete(d)), o.remove(), Io = null, no(), e.elementInputs.val = {
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
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), p = a > c && a > r, d = Math.sqrt(c * c + a * a + r * r), i = Oe.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), M = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${p ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${i + 1} &nbsp;
        <span style="color:#888;">L:</span> ${d.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${M}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(w), ko = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), ko = null, bo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        ne.add(t), w.remove(), ko = null, bo(), Se();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), ko = null, vs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function c(p) {
        const d = tt();
        if (!d) return null;
        const i = d.controls.object, b = new ke(p[0], p[1], p[2]);
        b.project(i);
        const M = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * M.width,
          y: (-b.y + 1) / 2 * M.height
        };
      }
      function a(p, d, i, b, M) {
        const w = Math.min(p, i), v = Math.max(p, i), f = Math.min(d, b), g = Math.max(d, b), S = e.nodes.val, I = e.elements.val, k = [];
        for (let O = 0; O < I.length; O++) {
          const N = I[O], h = N.map((u) => c(S[u])).filter(Boolean);
          if (h.length !== 0) if (M) h.every(($) => $.x >= w && $.x <= v && $.y >= f && $.y <= g) && k.push(O);
          else {
            if (h.some(($) => $.x >= w && $.x <= v && $.y >= f && $.y <= g)) {
              k.push(O);
              continue;
            }
            if (N.length === 2) {
              const $ = h[0], z = h[1];
              r($.x, $.y, z.x, z.y, w, f, v, g) && k.push(O);
            }
          }
        }
        return k;
      }
      function r(p, d, i, b, M, w, v, f) {
        const g = (I, k) => I >= M && I <= v && k >= w && k <= f;
        if (g(p, d) || g(i, b)) return true;
        const S = (I, k, O, N, h, u, $, z) => {
          const C = (O - I) * (z - u) - (N - k) * ($ - h);
          if (Math.abs(C) < 1e-10) return false;
          const y = ((h - I) * (z - u) - (u - k) * ($ - h)) / C, E = ((h - I) * (N - k) - (u - k) * (O - I)) / C;
          return y >= 0 && y <= 1 && E >= 0 && E <= 1;
        };
        return S(p, d, i, b, M, w, v, w) || S(p, d, i, b, v, w, v, f) || S(p, d, i, b, M, f, v, f) || S(p, d, i, b, M, w, M, f);
      }
      o.addEventListener("mousedown", (p) => {
        qt && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (Vt) {
          const i = tt();
          if (!i) return;
          const b = ms(p.clientX, p.clientY, i.camera, i.rendererElm);
          if (mt.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== mo && Ws(b.nodeIdx), mt.track && mo !== null && b.worldPos && b.snapType !== "node") {
            const M = Ys(b.worldPos, mo);
            M && (b.worldPos = M, b.snapType = "grid");
          }
          if (mo !== null && b.worldPos) {
            const M = e.nodes.val[mo];
            M && us(p.clientX, p.clientY, new ke(...M), b.worldPos);
          } else if (dt !== null && b.worldPos) {
            const M = e.nodes.val[dt];
            M && us(p.clientX, p.clientY, new ke(...M), b.worldPos);
          } else Bt && (Bt.remove(), Bt = null);
          b.nodeIdx, bs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Dt && !qt) return;
        if (qt && n) {
          const i = p.offsetX - n.x, b = p.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const M = i > 0, w = Math.min(n.x, p.offsetX), v = Math.min(n.y, p.offsetY), f = Math.abs(i), g = Math.abs(b);
            l.style.left = w + "px", l.style.top = v + "px", l.style.width = f + "px", l.style.height = g + "px", l.style.border = M ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = M ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = kn(p);
        if (d >= 0) gs(d), o.style.cursor = "pointer";
        else {
          if (Rt) {
            const i = tt();
            i == null ? void 0 : i.scene.remove(Rt), Rt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = qt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (qt && n) {
          const d = p.offsetX - n.x, i = p.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(i) > s) {
            const b = d > 0, M = a(n.x, n.y, p.offsetX, p.offsetY, b);
            p.ctrlKey || p.metaKey || (ct.clear(), ro()), M.forEach((v) => {
              ct.has(v) || (ct.add(v), Sn(v));
            }), io();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (Vt) {
          const d = tt();
          if (!d) return;
          const i = ms(p.clientX, p.clientY, d.camera, d.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (Js(i), bs(i));
          return;
        }
        if (qt) {
          if (l) return;
          const d = kn(p), i = p.ctrlKey || p.metaKey;
          if (d >= 0) {
            if (i) if (ct.has(d)) {
              ct.delete(d);
              const b = lo.findIndex((M) => M.__elemIdx === d);
              if (b >= 0) {
                const M = tt();
                M == null ? void 0 : M.scene.remove(lo[b]), lo[b].geometry.dispose(), lo[b].material.dispose(), lo.splice(b, 1), M == null ? void 0 : M.render();
              }
            } else ct.add(d), Sn(d);
            else ct.clear(), ro(), ct.add(d), Sn(d);
            io();
          } else i || (ct.clear(), ro(), io());
          return;
        }
        if (Dt) {
          const d = kn(p);
          d >= 0 && (gs(d), ra(d));
        }
      });
    }, 500), Po.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Je();
    }), We.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !ye), ye = t, (_a2 = we.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ye), ye) {
        const n = tt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Re = n.settings.loads.rawVal, n.settings.loads.val = false), mn(), we.querySelector("#cad3d-mode-prev").style.display = "", we.querySelector("#cad3d-mode-next").style.display = "", we.querySelector("#cad3d-mode-label").style.display = "";
      } else bn(), we.querySelector("#cad3d-mode-prev").style.display = "none", we.querySelector("#cad3d-mode-next").style.display = "none", we.querySelector("#cad3d-mode-label").style.display = "none", L && L !== "placa-q4" && L !== "placa-3q" && Se(), setTimeout(() => {
        var _a3;
        const n = tt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Re && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ye ? "ON" : "OFF"}`);
    }, We.setMode = (t) => {
      var _a2;
      if (!(ae == null ? void 0 : ae.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Me = Math.max(0, Math.min(t, ae.modeShapes.length - 1));
      const o = ae.modeShapes[Me], { extent: n } = so();
      let l = 0;
      for (let c = 0; c < le.length; c++) {
        const a = o[c * 6] || 0, r = o[c * 6 + 1] || 0, p = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + p * p));
      }
      ve = l > 1e-12 ? n * 0.05 / l : 1, _o();
      const s = we.querySelector("#cad3d-mode-label");
      s && ae.frequencies && (s.textContent = `Modo ${Me + 1} \u2014 ${ae.frequencies[Me].toFixed(2)} Hz`), console.log(`Modo ${Me + 1}: f = ${(_a2 = ae.frequencies) == null ? void 0 : _a2[Me].toFixed(4)} Hz`);
    }, window.cad = We, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(we), document.body.appendChild(Te.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Xe("edificio"), Se(), cs("edificio"));
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
