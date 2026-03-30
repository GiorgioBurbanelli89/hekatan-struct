const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { d as Pt, _ as ya, p as _n, m as $a, s as Ma, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Bo, P as Xo, g as wa, a as Sa, o as Ea } from "./theme-CzzIlc4y.js";
import { V as ke, P as go, R as _s, b as Hs, B as Xt, c as Ia, d as No, e as Ro, f as ka, S as za, M as Ta, g as La, F as wo, a as _o, L as So, h as Aa, G as Ca, A as tn, i as on, T as Hn, j as nn, k as sn, C as Pa, l as Fa } from "./Text-Cin90tvN.js";
import { g as pn, b as fn, a as Ho } from "./analyze-hNAfpj64.js";
import { g as io, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as ko, s as co, m as Ut, t as Yn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let js, Ra, bl;
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
  const Wn = [
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
  ], Do = [
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
  function Oa(e, x) {
    return e === "kN" && x === "m" ? "kPa" : e === "kN" && x === "mm" || e === "N" && x === "mm" ? "MPa" : e === "N" && x === "m" ? "Pa" : e === "kip" && x === "in" ? "ksi" : e === "kip" && x === "ft" ? "ksf" : `${e}/${x}\xB2`;
  }
  const Eo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Io(e, x) {
    const _ = Wn.find((Y) => Y.id === e), T = Do.find((Y) => Y.id === x), K = _.toKN, B = T.toM, ne = (Y, xe, L) => L / (Math.pow(K, Y) * Math.pow(B, xe));
    let V, G;
    switch (e) {
      case "kN":
        V = 10, G = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        V = 1, G = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        V = 1e3, G = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        V = 10, G = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        V = 5e3, G = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        V = 1e4, G = [
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
      stress: Oa(e, x),
      moment: `${_.label}\xB7${T.label}`,
      E: ne(1, -2, Eo.E),
      G: ne(1, -2, Eo.G),
      A: ne(0, 2, Eo.A),
      Iz: ne(0, 4, Eo.Iz),
      Iy: ne(0, 4, Eo.Iy),
      J: ne(0, 4, Eo.J),
      rho: ne(1, -4, Eo.rho),
      spanRange: T.spanRange,
      heightRange: T.heightRange,
      defaultSpan: T.defaultSpan,
      defaultHeight: T.defaultHeight,
      defaultForce: V,
      forceRange: G,
      galponSpan: T.galponSpan,
      galponLength: T.galponLength,
      galponHeight: T.galponHeight,
      galponRise: T.galponRise
    };
  }
  Io("kN", "m"), Io("kip", "in");
  function an() {
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
  function qa(e) {
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
  function Na(e) {
    const x = e.force, [_, T, K] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: K,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CV (${x})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: _,
          max: T,
          step: K,
          label: `Ex sismo (${x})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: _,
          max: T,
          step: K,
          label: `Ex sismo (${x})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: K,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: T,
          step: K,
          label: `Ex sismo (${x})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: K,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: K,
          label: `CV (${x})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: T,
          step: K,
          label: `Ex sismo (${x})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: T,
          step: K,
          label: `Ey sismo (${x})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: _,
          max: 0,
          step: K,
          label: `CM (${x})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: K,
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
          step: K,
          label: `CM (${x})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: K,
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
  Ra = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let x = false;
    function _(T, K) {
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
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${K.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (V += '<div id="modal-body" style="padding:0 12px 10px 12px;">', K.properties) for (const G of K.properties) V += `<span style="color:#888">${G}</span>
`;
      V += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const G of B) V += `<th style="padding:2px 5px">${G}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, T.frequencies.forEach((G, Y) => {
        var _a3;
        const xe = G > 0 ? 1 / G : 0, L = G * 2 * Math.PI, ie = ((_a3 = T.massParticipation) == null ? void 0 : _a3[Y]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let Ie = 0; Ie < 6; Ie++) ne[Ie] += ie[Ie];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${Y + 1}</td>
  <td style="padding:2px 6px; text-align:right">${G.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${xe.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${L.toFixed(2)}</td>`;
        for (let Ie = 0; Ie < 6; Ie++) {
          const ge = (ie[Ie] * 100).toFixed(1), ce = ie[Ie] > 0.5 ? "#f00" : ie[Ie] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${ce}">${ge}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, x) {
        const G = e.querySelector("#modal-body"), Y = e.querySelector("#modal-minimize");
        G && (G.style.display = "none"), Y && (Y.textContent = "\u25A2", Y.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        x = !x;
        const G = e.querySelector("#modal-body"), Y = e.querySelector("#modal-minimize");
        x ? (G.style.display = "none", Y.textContent = "\u25A2", Y.title = "Restaurar") : (G.style.display = "block", Y.textContent = "\u25AC", Y.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const G = [];
        G.push(`Modal Analysis \u2014 ${K.title}`);
        const Y = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${B.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        G.push(Y), G.push("-".repeat(Y.length));
        const xe = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        T.frequencies.forEach((ie, Ie) => {
          var _a3;
          const ge = ie > 0 ? 1 / ie : 0, ce = ie * 2 * Math.PI, pe = ((_a3 = T.massParticipation) == null ? void 0 : _a3[Ie]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Ce = 0; Ce < 6; Ce++) xe[Ce] += pe[Ce];
          const be = pe.map((Ce) => ((Ce * 100).toFixed(1) + "%").padStart(6)).join(" ");
          G.push(`${String(Ie + 1).padStart(4)}  ${ie.toFixed(4).padStart(9)}  ${ge.toFixed(4).padStart(9)}  ${ce.toFixed(2).padStart(9)}  ${be}  ${(xe[0] * 100).toFixed(1).padStart(5)}%  ${(xe[1] * 100).toFixed(1).padStart(5)}%  ${(xe[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(G.join(`
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
  const $e = 64516e-8, P = 416231e-12, D = 0.0254, xo = [
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
  function ln() {
    const e = {};
    return xo.forEach((x, _) => {
      x.type === "W" && (e[x.name] = _);
    }), e;
  }
  function rn() {
    const e = {};
    return xo.forEach((x, _) => {
      x.type === "HSS" && (e[x.name] = _);
    }), e;
  }
  function _a(e) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h;
    const { nodes: x, elements: _, elementInputs: T, nodeInputs: K, deformOutputs: B } = e, ne = x.length * 6, V = _.length, G = _.filter((ce) => ce.length === 2).length, Y = _.filter((ce) => ce.length >= 3).length, xe = document.createElement("div");
    xe.className = "rpt-overlay";
    let L = "";
    L += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', L += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", L += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', L += '<hr class="rpt-sep"/>', L += "<h2>1. Input Data</h2>", L += '<table class="rpt-info"><tbody>', L += `<tr><td>Number of nodes</td><td class="val">${x.length}</td></tr>`, L += `<tr><td>Number of elements</td><td class="val">${V} (${G} frames, ${Y} shells)</td></tr>`, L += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', L += `<tr><td>Total DOFs</td><td class="val">${ne}</td></tr>`, L += "</tbody></table>", L += "<h3>1.1 Node Coordinates</h3>", L += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', x.forEach((ce, pe) => {
      L += `<tr><td>${pe}</td><td>${Ke(ce[0])}</td><td>${Ke(ce[1])}</td><td>${Ke(ce[2])}</td></tr>`;
    }), L += "</tbody></table>", L += "<h3>1.2 Element Connectivity</h3>", L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((ce, pe) => {
      var _a3, _b2, _c2, _d2;
      const be = ce.length === 2, Ce = ce.map((Ze) => x[Ze]), Be = be ? ko(co(Ce[1], Ce[0])) : 0, Oe = ((_a3 = T.elasticities) == null ? void 0 : _a3.get(pe)) ?? 0, Xe = ((_b2 = T.areas) == null ? void 0 : _b2.get(pe)) ?? 0, rt = ((_c2 = T.momentsOfInertiaZ) == null ? void 0 : _c2.get(pe)) ?? 0, Ge = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(pe)) ?? 0;
      L += `<tr><td>${pe}</td><td>${be ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, L += `<td>${Ke(Be)}</td><td>${Ke(Oe)}</td><td>${Ke(Xe)}</td><td>${Ke(rt)}</td><td>${Ke(Ge)}</td></tr>`;
    }), L += "</tbody></table>", L += "<h2>2. Element Formulation</h2>", G > 0 && (L += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", L += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", L += "<h4>2.1.1 Shape Functions</h4>", L += "<p><b>Axial</b> (linear interpolation):</p>", L += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', L += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', L += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', L += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', L += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', L += "</tbody></table>", L += Ba(), L += "<p><b>Torsion</b> (linear): same as axial.</p>", L += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", L += "<p>The B matrix relates nodal displacements to internal strains:</p>", L += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', L += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', L += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', L += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', L += "<h4>2.1.3 Constitutive Relations D</h4>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', L += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', L += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', L += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', L += "</tbody></table>", L += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", L += "<p>Obtained by analytical integration:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', L += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", L += '<div class="rpt-eq-small">', L += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", L += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", L += "</div>", L += "<h4>2.1.5 Transformation Matrix T</h4>", L += "<p>Direction cosines of element axis:</p>", L += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', L += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', L += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', L += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", L += "<h4>2.1.6 Global Stiffness Matrix</h4>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), L += "<h2>3. Numerical Results per Element</h2>", L += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < V; ce++) {
      const pe = _[ce], be = pe.map((pt) => x[pt]);
      if (!(pe.length === 2)) continue;
      const Be = ko(co(be[1], be[0])), Oe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(ce)) ?? 0, Xe = ((_b = T.areas) == null ? void 0 : _b.get(ce)) ?? 0, rt = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Ge = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, Ze = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(ce)) ?? 0, gt = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let $t = null, ue = null, qe = null;
      try {
        $t = pn(be, T, ce), ue = fn(be), qe = Ut(Yn(ue), Ut($t, ue));
      } catch {
        continue;
      }
      const He = co(be[1], be[0]), ot = He[0] / Be, Qe = He[1] / Be, je = He[2] / Be;
      L += '<div class="rpt-elem-block">', L += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${pe[0]} \u2192 ${pe[1]}, L = ${Ke(Be)}</h3>`, L += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, L += "<h4>Properties (numerical substitution)</h4>", L += '<div class="rpt-eq-small">', L += `E = ${Ke(Oe)} &nbsp;&nbsp; A = ${Ke(Xe)} &nbsp;&nbsp; I<sub>z</sub> = ${Ke(rt)} &nbsp;&nbsp; I<sub>y</sub> = ${Ke(Ge)} &nbsp;&nbsp; G = ${Ke(Ze)} &nbsp;&nbsp; J = ${Ke(gt)}<br/>`, L += `EA/L = ${Ke(Oe)}\xB7${Ke(Xe)}/${Ke(Be)} = <b>${Ke(Oe * Xe / Be)}</b><br/>`, L += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ke(Oe)}\xB7${Ke(rt)}/${Ke(Be)}\xB3 = <b>${Ke(12 * Oe * rt / Be ** 3)}</b><br/>`, L += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ke(Oe)}\xB7${Ke(Ge)}/${Ke(Be)}\xB3 = <b>${Ke(12 * Oe * Ge / Be ** 3)}</b><br/>`, L += `GJ/L = ${Ke(Ze)}\xB7${Ke(gt)}/${Ke(Be)} = <b>${Ke(Ze * gt / Be)}</b>`, L += "</div>", L += "<h4>Direction cosines</h4>", L += `<div class="rpt-eq-small">l = ${cn(ot)}, m = ${cn(Qe)}, n = ${cn(je)}, D = ${cn(Math.sqrt(ot ** 2 + Qe ** 2))}</div>`, L += "<h4>K<sub>local</sub> (12\xD712)</h4>", L += Bn($t, 12), L += "<h4>T \u2014 Transformation (12\xD712)</h4>", L += Bn(ue, 12), L += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", L += Bn(qe, 12), L += "<h4>Assembly</h4>", L += `<div class="rpt-eq-small">Global DOFs: node ${pe[0]} \u2192 [${pe[0] * 6}..${pe[0] * 6 + 5}], node ${pe[1]} \u2192 [${pe[1] * 6}..${pe[1] * 6 + 5}]</div>`, L += "</div></div>";
    }
    L += "<h2>4. Global Assembly</h2>", L += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, L += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", L += Da(_, x.length), L += "<h2>5. Boundary Conditions</h2>";
    const ie = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], Ie = [];
    if (L += "<h3>5.1 Supports (fixed DOFs)</h3>", K.supports && K.supports.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of ie) L += `<th>${ce}</th>`;
      L += "</tr></thead><tbody>", K.supports.forEach((ce, pe) => {
        L += `<tr><td>${pe}</td>`, ce.forEach((be, Ce) => {
          be && Ie.push(pe * 6 + Ce), L += `<td class="${be ? "fixed" : ""}">${be ? "Fixed" : "Free"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += `<div class="rpt-eq-small">Fixed DOFs: [${Ie.join(", ")}] \u2192 ${Ie.length} constraints<br/>`, L += `Free DOFs: ${ne} \u2212 ${Ie.length} = <b>${ne - Ie.length}</b></div>`, L += "<h3>5.2 Applied Loads</h3>", K.loads && K.loads.size > 0) {
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
      L += "</tr></thead><tbody>", K.loads.forEach((pe, be) => {
        L += `<tr><td>${be}</td>`, pe.forEach((Ce) => {
          const Be = Math.abs(Ce) > 1e-10;
          L += `<td class="${Be ? "nz" : ""}">${Be ? Ke(Ce) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>6. Solution</h2>", L += "<p>After removing fixed DOFs, the reduced system is:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', L += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", L += "<h3>6.1 Nodal Displacements</h3>", B == null ? void 0 : B.deformations) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of ie) L += `<th>${ce}</th>`;
      L += "</tr></thead><tbody>", B.deformations.forEach((ce, pe) => {
        L += `<tr><td>${pe}</td>`, ce.forEach((be) => {
          const Ce = Math.abs(be) > 1e-10;
          L += `<td class="${Ce ? "nz" : ""}">${Ke(be, 6)}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h3>6.2 Reactions</h3>", L += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', B == null ? void 0 : B.reactions) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of ie) L += `<th>${ce}</th>`;
      L += "</tr></thead><tbody>", B.reactions.forEach((ce, pe) => {
        L += `<tr><td>${pe}</td>`, ce.forEach((be) => {
          const Ce = Math.abs(be) > 1e-10;
          L += `<td class="${Ce ? "nz-react" : ""}">${Ce ? Ke(be, 4) : "0"}</td>`;
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
        const Ce = be.map((Be) => x[Be]);
        try {
          const Be = pn(Ce, T, pe), Oe = fn(Ce), Xe = [];
          for (const Ze of be) {
            const gt = ((_g = B.deformations) == null ? void 0 : _g.get(Ze)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Xe.push(...gt);
          }
          const rt = Ut(Oe, Xe), Ge = Ut(Be, rt);
          L += `<tr><td>${pe}</td><td>${be.join("\u2192")}</td>`;
          for (let Ze = 0; Ze < 12; Ze++) {
            const gt = Math.abs(Ge[Ze]) > 1e-10;
            L += `<td class="${gt ? "nz" : ""}">${Ke(Ge[Ze], 2)}</td>`;
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
          const Ce = be.style.display !== "none";
          be.style.display = Ce ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, Ce ? "\u25B6" : "\u25BC");
        }
      });
    }), xe;
  }
  function Ke(e, x = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(x) : e.toFixed(x);
  }
  function cn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Bn(e, x) {
    var _a2;
    const _ = Math.min(x, 12);
    let T = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let K = 0; K < _; K++) {
      T += "<tr>";
      for (let B = 0; B < _; B++) {
        const ne = ((_a2 = e[K]) == null ? void 0 : _a2[B]) ?? 0, V = Math.abs(ne) < 1e-10;
        T += `<td class="${V ? "z" : ""} ${K === B && !V ? "diag" : ""}">${V ? "0" : Ha(ne)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", x > _ && (T += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${x}\xD7${x})</div>`), T += "</div>", T;
  }
  function Ha(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Ba() {
    const ne = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (G) => 1 - 3 * G ** 2 + 2 * G ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (G) => G * (1 - G) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (G) => 3 * G ** 2 - 2 * G ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (G) => G ** 2 * (G - 1)
      }
    ];
    let V = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    V += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, V += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', V += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, V += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, V += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const G of ne) {
      let Y = "";
      for (let Ie = 0; Ie <= 80; Ie++) {
        const ge = Ie / 80, ce = 30 + ge * 540, pe = 180 / 2 - G.fn(ge) * 60;
        Y += (Ie === 0 ? "M" : "L") + `${ce.toFixed(1)},${pe.toFixed(1)}`;
      }
      V += `<path d="${Y}" fill="none" stroke="${G.color}" stroke-width="2.5"/>`;
      const xe = 0.75, L = 30 + xe * 540 + 8, ie = 180 / 2 - G.fn(xe) * 60 - 6;
      V += `<text x="${L}" y="${ie}" fill="${G.color}" font-size="11" font-weight="bold" font-family="sans-serif">${G.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function Da(e, x) {
    const _ = x * 6, T = Math.min(_, 30);
    let K = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    K += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', K += "<tr><td></td>";
    for (let ne = 0; ne < T; ne++) K += `<td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
    K += "</tr>";
    const B = Array.from({
      length: T
    }, () => Array(T).fill(0));
    for (let ne = 0; ne < e.length; ne++) {
      const V = e[ne].map((G) => G * 6);
      for (const G of V) for (const Y of V) for (let xe = 0; xe < 6; xe++) for (let L = 0; L < 6; L++) {
        const ie = G + xe, Ie = Y + L;
        ie < T && Ie < T && B[ie][Ie]++;
      }
    }
    for (let ne = 0; ne < T; ne++) {
      K += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
      for (let V = 0; V < T; V++) {
        const G = B[ne][V], Y = G === 0 ? "#fff" : G === 1 ? "#e8f0fe" : G === 2 ? "#c6dcf5" : "#a0c4e8", xe = G === 0 ? "" : G.toString();
        K += `<td style="background:${Y};color:#003366">${xe}</td>`;
      }
      K += "</tr>";
    }
    return K += "</table></div>", _ > T && (K += `<div style="color:#888;font-size:9pt">(showing ${T}\xD7${T} of ${_}\xD7${_})</div>`), K;
  }
  let Dn = false;
  function ja(e) {
    if (Dn || window.katex) {
      Dn = true, e();
      return;
    }
    const x = document.createElement("link");
    x.rel = "stylesheet", x.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(x);
    const _ = document.createElement("script");
    _.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", _.onload = () => {
      Dn = true, e();
    }, document.head.appendChild(_);
  }
  function Bs(e, x = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: x,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Wa(e, x, _, T, K, B) {
    var _a2, _b, _c, _d, _e2, _f;
    const ne = _[e], V = ne.map((ue) => x[ue]), G = ne.length === 2, Y = G ? ko(co(V[1], V[0])) : 0, xe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, L = ((_b = T.areas) == null ? void 0 : _b.get(e)) ?? 0, ie = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, Ie = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ge = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(e)) ?? 0, ce = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let pe = null, be = null, Ce = null;
    try {
      pe = pn(V, T, e), be = fn(V), Ce = Ut(Yn(be), Ut(pe, be));
    } catch {
    }
    const Be = G ? co(V[1], V[0]) : [
      0,
      0,
      0
    ], Oe = Y > 0 ? Be[0] / Y : 0, Xe = Y > 0 ? Be[1] / Y : 0, rt = Y > 0 ? Be[2] / Y : 0, Ge = Math.sqrt(Oe ** 2 + Xe ** 2), Ze = [];
    if ((K == null ? void 0 : K.deformations) && G) for (const ue of ne) {
      const qe = K.deformations.get(ue) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ze.push(...qe);
    }
    let gt = [], $t = [];
    if (Ze.length === 12 && be && pe) {
      try {
        gt = Ut(be, Ze);
      } catch {
        gt = Array(12).fill(0);
      }
      try {
        $t = Ut(pe, gt);
      } catch {
        $t = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: ne,
      elmNodes: V,
      isFrame: G,
      L: Y,
      E: xe,
      A: L,
      Iz: ie,
      Iy: Ie,
      G: ge,
      J: ce,
      kLocal: pe,
      T: be,
      kGlobal: Ce,
      l: Oe,
      m: Xe,
      n: rt,
      D: Ge,
      uGlobal: Ze,
      uLocal: gt,
      fLocal: $t,
      dOut: K,
      aOut: B,
      totalNodes: x.length
    };
  }
  function Ya(e, x, _, T, K, B) {
    var _a2, _b;
    const ne = Wa(e, x, _, T, K, B), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = Xa + `
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
    <div class="er-body" id="er-body-tabla">${Ga(ne)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Ds(ne)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ja(ne)}</div>
  `, V.querySelectorAll(".er-tab").forEach((G) => {
      G.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((xe) => xe.classList.remove("active")), G.classList.add("active");
        const Y = G.dataset.tab;
        V.querySelectorAll(".er-body").forEach((xe) => xe.style.display = "none"), V.querySelector(`#er-body-${Y}`).style.display = "";
      });
    }), (_a2 = V.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const G = V.classList.toggle("er-fullscreen-mode"), Y = V.querySelector("#er-fullscreen");
      Y && (Y.textContent = G ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const G = V.querySelector("#er-sf-canvas");
      G && jn(G);
      const Y = V.querySelector("#er-sf-canvas-math");
      Y && jn(Y);
    }, 50), ja(() => {
      const G = V.querySelector("#er-body-math");
      G && (G.innerHTML = Ds(ne)), setTimeout(() => {
        const Y = V.querySelector("#er-sf-canvas-math");
        Y && jn(Y);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((Y) => {
        Y.addEventListener("click", () => {
          const xe = Y.dataset.toggle, L = V.querySelector(`#er-${xe}`);
          L && (L.style.display = L.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function Ga(e) {
    let x = "";
    if (x += '<div class="er-section-title">1. Propiedades</div>', x += '<table class="er-props">', x += `<tr><td>E</td><td>${_e(e.E)}</td><td>A</td><td>${_e(e.A)}</td></tr>`, x += `<tr><td>I<sub>z</sub></td><td>${_e(e.Iz)}</td><td>I<sub>y</sub></td><td>${_e(e.Iy)}</td></tr>`, x += `<tr><td>G</td><td>${_e(e.G)}</td><td>J</td><td>${_e(e.J)}</td></tr>`, x += "</table>", e.kLocal && (x += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, x += Ko(e.kLocal)), e.T && (x += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', x += Ko(e.T)), e.kGlobal && (x += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', x += Ko(e.kGlobal)), x += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
        for (let K = 0; K < 6; K++) {
          const B = e.uGlobal[T * 6 + K];
          x += `${_[K]}=<span class="${Math.abs(B) > 1e-10 ? "nz" : ""}">${_e(B, 6)}</span> `;
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
  function Ds(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let x = "";
    const _ = (xe) => Bs(xe), T = (xe) => Bs(xe, true);
    x += '<div class="er-section-title">1. Geometria del elemento</div>', x += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", x += `<div class="er-eq">${T("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, x += '<div class="er-eq-num">', x += `${_("\\text{Nodo } i")} = (${e.elmNodes[0].map((xe) => _e(xe)).join(", ")})<br/>`, x += `${_("\\text{Nodo } j")} = (${e.elmNodes[1].map((xe) => _e(xe)).join(", ")})<br/>`, x += `${T(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${_e(e.L)}}`)}`, x += "</div>", x += '<div class="er-section-title">2. Funciones de forma</div>', x += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", x += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', x += `<div class="er-eq">${T("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, x += "<p>Primera derivada:</p>", x += `<div class="er-eq">${T("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, x += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', x += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, x += `<div class="er-eq">${T("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, x += `<div class="er-eq">${T("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, x += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, x += `<div class="er-eq">${T("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, x += `<div class="er-eq">${T("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, x += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', x += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', x += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", x += `<div class="er-eq">${T("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, x += '<div class="er-subsec">3.1 Deformacion axial</div>', x += `<div class="er-eq">${T("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, x += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, x += `<div class="er-eq">${T("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, x += `<div class="er-eq">${T("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, x += '<div class="er-subsec">3.4 Torsion</div>', x += `<div class="er-eq">${T("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, x += '<div class="er-section-title">4. Relaciones constitutivas D</div>', x += "<p>Cada modo de deformacion tiene su rigidez material:</p>", x += `<div class="er-eq">${T(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${_e(e.E)} \\times ${_e(e.A)} = \\mathbf{${_e(e.E * e.A)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${_e(e.E)} \\times ${_e(e.Iz)} = \\mathbf{${_e(e.E * e.Iz)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${_e(e.E)} \\times ${_e(e.Iy)} = \\mathbf{${_e(e.E * e.Iy)}}`)}</div>`, x += `<div class="er-eq">${T(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${_e(e.G)} \\times ${_e(e.J)} = \\mathbf{${_e(e.G * e.J)}}`)}</div>`, x += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, x += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", x += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const K = e.E * e.A / e.L, B = e.E * e.Iz / e.L ** 3, ne = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', x += "<p><b>Paso 1:</b> Funcion de forma axial</p>", x += `<div class="er-eq">${T("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, x += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", x += `<div class="er-eq">${T("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, x += `<div class="er-eq">${T("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.E)}\\times${_e(e.A)}}{${_e(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, x += `<div class="er-eq">${T(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${_e(K)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', x += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, x += `<div class="er-eq">${T("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, x += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", x += `<div class="er-eq">${T("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, x += `<div class="er-eq">${T("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, x += `<div class="er-eq">${T("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, x += `<div class="er-eq">${T("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, x += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, x += `<div class="er-eq">${T("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${_e(e.E)} \\times ${_e(e.Iz)}}{${_e(e.L)}^3} = \\mathbf{${_e(12 * B)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', x += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', x += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, x += `<div class="er-eq">${T(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.G)}\\times${_e(e.J)}}{${_e(e.L)}} = \\mathbf{${_e(V)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', x += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', x += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, x += `<div class="er-eq">${T("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, x += `<div class="er-eq">${T("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, x += `<div class="er-eq er-eq-main">${T(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, x += "</div></div>", x += '<div class="er-subsec">Resumen de coeficientes:</div>', x += `<div class="er-eq">${T(`\\frac{EA}{L} = \\mathbf{${_e(K)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${_e(12 * B)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${_e(12 * ne)}}`)}</div>`, x += `<div class="er-eq">${T(`\\frac{GJ}{L} = \\mathbf{${_e(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${_e(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${_e(4 * e.E * e.Iz / e.L)}}`)}</div>`, x += `<div class="er-eq">${T(`\\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${_e(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (x += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, x += Ko(e.kLocal)), x += '<div class="er-section-title">6. Transformacion de coordenadas</div>', x += "<p>Los cosenos directores del eje del elemento:</p>", x += `<div class="er-eq">${T(`l = \\frac{x_j - x_i}{L} = ${dn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${dn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${dn(e.n)}`)}</div>`, x += `<div class="er-eq">${T(`D = \\sqrt{l^2 + m^2} = ${dn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      x += `<p>Caso especial: elemento vertical (${_(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const xe = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      x += `<div class="er-eq">${T(xe)}</div>`;
    } else x += `<div class="er-eq">${T("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    x += `<div class="er-eq er-eq-main">${T("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, x += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, x += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", x += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (x += Ko(e.kGlobal)), x += '<div class="er-section-title">8. Ensamblaje</div>';
    const G = e.elem[0] * 6, Y = e.elem[1] * 6;
    if (x += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, x += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, x += `<div class="er-eq">${T("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, x += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', x += `<div class="er-eq">${T("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, x += `<div class="er-eq er-eq-main">${T("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((xe) => xe !== 0)) {
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
  function Ja(e) {
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
        for (let K = 0; K < 6; K++) {
          const B = e.uGlobal[T * 6 + K];
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
  function dn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Ko(e) {
    var _a2;
    const x = e.length, _ = Math.min(x, 12);
    let T = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let K = 0; K < _; K++) {
      T += "<tr>";
      for (let B = 0; B < _; B++) {
        const ne = ((_a2 = e[K]) == null ? void 0 : _a2[B]) ?? 0, V = Math.abs(ne) < 1e-10;
        T += `<td class="${V ? "z" : ""} ${K === B && !V ? "diag" : ""}">${V ? "0" : Va(ne)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", x > _ && (T += `<div style="color:var(--fem-label);font-size:9px">(${_}\xD7${_} de ${x}\xD7${x})</div>`), T += "</div>", T;
  }
  function Va(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function jn(e) {
    const x = e.getContext("2d");
    if (!x) return;
    const _ = e.width, T = e.height, K = 30, B = _ - 2 * K, ne = (T - 3 * K) / 2;
    x.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", x.fillRect(0, 0, _, T);
    const V = (G, Y, xe) => {
      x.strokeStyle = "#333", x.lineWidth = 1, x.strokeRect(K, G, B, ne), x.strokeStyle = "#444", x.beginPath(), x.moveTo(K, G + ne / 2), x.lineTo(K + B, G + ne / 2), x.stroke(), x.fillStyle = "#888", x.font = "11px sans-serif", x.fillText(Y, K + 4, G + 14);
      for (const ie of xe) {
        x.strokeStyle = ie.color, x.lineWidth = 2.5, x.beginPath();
        for (let Ie = 0; Ie <= 100; Ie++) {
          const ge = Ie / 100, ce = K + ge * B, pe = G + ne / 2 - ie.fn(ge) * (ne / 2 * 0.85);
          Ie === 0 ? x.moveTo(ce, pe) : x.lineTo(ce, pe);
        }
        x.stroke();
      }
      let L = K + B - 90;
      for (const ie of xe) x.fillStyle = ie.color, x.font = "bold 10px sans-serif", x.fillText(ie.label, L, G + ne - 6), L += 36;
      x.fillStyle = "#666", x.font = "9px monospace", x.fillText("0", K, G + ne + 12), x.fillText("1", K + B - 6, G + ne + 12), x.fillText("\u03BE", K + B / 2, G + ne + 12);
    };
    V(K, "Axial (lineal)", [
      {
        fn: (G) => 1 - G,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (G) => G,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), V(K + ne + K, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (G) => 1 - 3 * G * G + 2 * G * G * G,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (G) => G * (1 - G) * (1 - G),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (G) => 3 * G * G - 2 * G * G * G,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (G) => G * G * (G - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Xa = `<style>
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
</style>`, Uo = [
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
  let un = false, zo = null, Qt = null, Ft = null, St = null;
  function Ua() {
    St = document.createElement("button"), St.id = "help-tour-btn", St.innerHTML = "?", St.title = "Ayuda interactiva \u2014 Tour guiado", St.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, St.addEventListener("mouseenter", () => {
      St.style.transform = "scale(1.15)", St.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), St.addEventListener("mouseleave", () => {
      St.style.transform = "scale(1)", St.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), St.addEventListener("click", () => {
      un ? Gn() : Ka();
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
  `, document.head.appendChild(e), St;
  }
  function Ka() {
    un = true, St && (St.innerHTML = "\u2715", St.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", St.style.animation = "none"), zo = document.createElement("div"), zo.id = "tour-overlay", zo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(zo), jo(0);
  }
  function Gn() {
    un = false, St && (St.innerHTML = "?", St.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", St.style.animation = "helpPulse 2s infinite"), Qt && (Qt.remove(), Qt = null), Ft && (Ft.remove(), Ft = null), zo && (zo.remove(), zo = null);
  }
  function jo(e) {
    var _a2, _b;
    if (e >= Uo.length) {
      Za();
      return;
    }
    const x = Uo[e], _ = document.querySelector(x.selector);
    if (!_) {
      jo(e + 1);
      return;
    }
    _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Qt && Qt.remove(), Ft && Ft.remove();
    const T = _.getBoundingClientRect(), K = window.innerWidth, B = window.innerHeight, ne = 320, V = 180;
    Qt = document.createElement("div"), Qt.style.cssText = `
    position: fixed;
    left: ${T.left - 6}px; top: ${T.top - 6}px;
    width: ${T.width + 12}px; height: ${T.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Qt);
    const G = K - T.right, Y = T.left, xe = B - T.bottom, L = T.top;
    let ie = x.position || "bottom";
    ie === "bottom" && xe < V + 20 && (ie = "top"), ie === "top" && L < V + 20 && (ie = "right"), ie === "right" && G < ne + 20 && (ie = "left"), ie === "left" && Y < ne + 20 && (ie = "bottom");
    let Ie, ge, ce = "";
    switch (ie) {
      case "bottom":
        Ie = T.left + T.width / 2 - ne / 2, ge = T.bottom + 14, ce = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        Ie = T.left + T.width / 2 - ne / 2, ge = T.top - V - 14, ce = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        Ie = T.right + 14, ge = T.top + T.height / 2 - V / 2, ce = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        Ie = T.left - ne - 14, ge = T.top + T.height / 2 - V / 2, ce = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    Ie = Math.max(10, Math.min(Ie, K - ne - 10)), ge = Math.max(10, Math.min(ge, B - V - 10)), Ft = document.createElement("div"), Ft.style.cssText = `
    position: fixed;
    left: ${Ie}px; top: ${ge}px;
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
  `, Ft.innerHTML = `
    <div style="${ce}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${x.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Uo.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${x.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Uo.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Uo.map((be, Ce) => `<div style="width:${Ce === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${Ce === e ? "#0099ff" : Ce < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Ft), (_a2 = Ft.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      jo(e + 1);
    }), (_b = Ft.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      jo(e - 1);
    });
    const pe = (be) => {
      if (!un) {
        document.removeEventListener("keydown", pe);
        return;
      }
      (be.key === "ArrowRight" || be.key === "Enter") && (jo(e + 1), document.removeEventListener("keydown", pe)), be.key === "ArrowLeft" && (jo(Math.max(0, e - 1)), document.removeEventListener("keydown", pe)), be.key === "Escape" && (Gn(), document.removeEventListener("keydown", pe));
    };
    document.addEventListener("keydown", pe);
  }
  function Za() {
    var _a2;
    Qt && (Qt.remove(), Qt = null), Ft && (Ft.remove(), Ft = null), Ft = document.createElement("div"), Ft.style.cssText = `
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
  `, Ft.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Ft), (_a2 = Ft.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Gn());
  }
  function Qa(e) {
    var _a2;
    const x = e.split(/\r?\n/), _ = {
      force: "TONF",
      length: "M"
    }, T = [], K = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = [], G = [], Y = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), L = [], ie = [];
    let Ie = "", ge = "";
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
        const Ae = Me.match(/TITLE2\s+"([^"]+)"/);
        Ae && (Ie = Ae[1]);
      }
      if (ge === "STORIES - IN SEQUENCE FROM TOP") {
        const ae = Me.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ae) {
          const Ae = ae[1], le = ae[2] ? parseFloat(ae[2]) : 0, ve = ae[3] ? parseFloat(ae[3]) : void 0;
          T.push({
            name: Ae,
            height: le,
            elev: ve ?? 0
          });
        }
      }
      if (ge === "MATERIAL PROPERTIES") {
        const ae = Me.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ae) {
          const Ae = ae[1];
          K.has(Ae) || K.set(Ae, {
            type: ae[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const le = K.get(Ae);
          ae[2] && (le.type = ae[2]);
          const ve = Me.match(/\bE\s+([\d.eE+-]+)/);
          ve && (le.E = parseFloat(ve[1]));
          const Re = Me.match(/\bU\s+([\d.eE+-]+)/);
          Re && (le.nu = parseFloat(Re[1]), le.G = le.E / (2 * (1 + le.nu)));
          const Te = Me.match(/\bFY\s+([\d.eE+-]+)/);
          Te && (le.fy = parseFloat(Te[1]));
          const at = Me.match(/\bFC\s+([\d.eE+-]+)/);
          at && (le.fc = parseFloat(at[1]));
          const Ne = Me.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ne && (le.density = parseFloat(Ne[1]));
        }
      }
      if (ge === "FRAME SECTIONS") {
        const ae = Me.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ae) {
          const Ae = ae[1];
          B.has(Ae) || B.set(Ae, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const le = B.get(Ae), ve = Me.match(/MATERIAL\s+"([^"]+)"/);
          ve && (le.material = ve[1]);
          const Re = Me.match(/SHAPE\s+"([^"]+)"/);
          Re && (le.shape = Re[1]);
          const Te = Me.match(/\bD\s+([\d.eE+-]+)/);
          Te && (le.D = parseFloat(Te[1]));
          const at = Me.match(/\bB\s+([\d.eE+-]+)/);
          at && (le.B = parseFloat(at[1]));
          const Ne = Me.match(/\bTF\s+([\d.eE+-]+)/);
          Ne && (le.TF = parseFloat(Ne[1]));
          const Pe = Me.match(/\bTW\s+([\d.eE+-]+)/);
          Pe && (le.TW = parseFloat(Pe[1]));
          const et = Me.match(/\bR\s+([\d.eE+-]+)/);
          et && (le.R = parseFloat(et[1]));
          const Je = Me.match(/FILLMATERIAL\s+"([^"]+)"/);
          Je && (le.fillMaterial = Je[1]);
          const dt = Me.match(/I2MOD\s+([\d.eE+-]+)/);
          dt && (le.modI2 = parseFloat(dt[1]));
          const qt = Me.match(/I3MOD\s+([\d.eE+-]+)/);
          qt && (le.modI3 = parseFloat(qt[1]));
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
        ae && Y.set(`${ae[1]}@${ae[2]}`, ae[3].split(/\s+/));
      }
      if (ge === "LINE ASSIGNS") {
        const ae = Me.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ae) {
          const Ae = {
            story: ae[2],
            section: ae[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, le = Me.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          le && (Ae.rigidZone = parseFloat(le[1]));
          const ve = Me.match(/RELEASE\s+"([^"]+)"/);
          ve && (Ae.releases = ve[1].split(/\s+/));
          const Re = Me.match(/ANG\s+([-\d.eE+]+)/);
          Re && (Ae.angle = parseFloat(Re[1])), xe.set(`${ae[1]}@${ae[2]}`, Ae);
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
          const Ae = ((_a2 = ae[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((le) => le.replace(/"/g, ""))) || [];
          G.push({
            name: ae[1],
            pts: Ae,
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
        const Ae = pe.get(T[Me + 1].name) + T[Me].height;
        T[Me].elev = Ae, pe.set(T[Me].name, Ae);
      }
    }
    const be = [], Ce = [], Be = /* @__PURE__ */ new Map(), Oe = (ye, Me) => `${ye}@${Me}`, Xe = /* @__PURE__ */ new Set(), rt = /* @__PURE__ */ new Map();
    for (const ye of V) rt.set(ye.name, ye);
    for (const ye of V) for (const [Me, ae] of xe) {
      if (!Me.startsWith(ye.name + "@")) continue;
      const Ae = ae.story, le = T.findIndex((ve) => ve.name === Ae);
      if (!(le < 0)) if (ye.type === "COLUMN" || ye.type === "BRACE") {
        Xe.add(Oe(ye.pt2, Ae));
        const ve = Math.max(ye.nStories, 1), Re = Math.min(le + ve, T.length - 1);
        Xe.add(Oe(ye.pt1, T[Re].name));
      } else Xe.add(Oe(ye.pt1, Ae)), Xe.add(Oe(ye.pt2, Ae));
    }
    for (const [ye] of Y) Xe.add(ye);
    for (const ye of Xe) {
      const [Me, ae] = ye.split("@"), Ae = ne.get(Me), le = pe.get(ae);
      Ae === void 0 || le === void 0 || (be.push([
        Ae[0],
        Ae[1],
        le
      ]), Ce.push(ye), Be.set(ye, be.length - 1));
    }
    const Ge = [], Ze = [], gt = [], $t = [], ue = /* @__PURE__ */ new Map();
    for (const ye of V) for (const [Me, ae] of xe) {
      if (!Me.startsWith(ye.name + "@")) continue;
      const Ae = ae.story, le = T.findIndex((Pe) => Pe.name === Ae);
      if (le < 0) continue;
      let ve, Re;
      if (ye.type === "COLUMN" || ye.type === "BRACE") {
        const Pe = Math.max(ye.nStories, 1), et = Math.min(le + Pe, T.length - 1);
        ve = Oe(ye.pt1, T[et].name), Re = Oe(ye.pt2, Ae);
      } else ve = Oe(ye.pt1, Ae), Re = Oe(ye.pt2, Ae);
      const Te = Be.get(ve), at = Be.get(Re);
      if (Te === void 0 || at === void 0 || Te === at) continue;
      const Ne = Ge.length;
      if (Ge.push([
        Te,
        at
      ]), Ze.push(ye.name), gt.push(ye.type), $t.push(Ae), ue.set(Ne, ae.section), ae.rigidZone > 0 && pt.set(Ne, [
        ae.rigidZone,
        ae.rigidZone
      ]), ae.releases.length > 0) {
        const Pe = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const et of ae.releases) et === "TI" && (Pe[0] = true), et === "M2I" && (Pe[1] = true), et === "M3I" && (Pe[2] = true), et === "TJ" && (Pe[3] = true), et === "M2J" && (Pe[4] = true), et === "M3J" && (Pe[5] = true);
        it.set(Ne, Pe);
      }
    }
    const qe = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map();
    for (const [ye, Me] of ue) {
      const ae = B.get(Me);
      if (!ae) continue;
      const Ae = K.get(ae.material);
      Ae && (qe.set(ye, Ae.E), He.set(ye, Ae.G));
      const le = ae.D, ve = ae.B, Re = ae.TF, Te = ae.TW;
      let at = 0, Ne = 0, Pe = 0, et = 0, Je = 0, dt = 0, qt = "rect";
      switch (ae.shape) {
        case "Concrete Rectangular":
          at = le * ve, Ne = ve * le ** 3 / 12, Pe = le * ve ** 3 / 12, et = ve * le ** 3 * (1 / 3 - 0.21 * (le / ve) * (1 - le ** 4 / (12 * ve ** 4))), Je = dt = 5 / 6 * at, qt = "rect";
          break;
        case "Concrete Circle":
          at = Math.PI * le ** 2 / 4, Ne = Pe = Math.PI * le ** 4 / 64, et = Math.PI * le ** 4 / 32, Je = dt = 0.9 * at, qt = "circ";
          break;
        case "Steel I/Wide Flange":
          at = 2 * ve * Re + (le - 2 * Re) * Te, Ne = (ve * le ** 3 - (ve - Te) * (le - 2 * Re) ** 3) / 12, Pe = (2 * Re * ve ** 3 + (le - 2 * Re) * Te ** 3) / 12, et = (2 * ve * Re ** 3 + (le - 2 * Re) * Te ** 3) / 3, Je = (le - 2 * Re) * Te, dt = 2 * ve * Re * 5 / 6, qt = "I";
          break;
        case "Steel Tube":
          at = le * ve - (le - 2 * Te) * (ve - 2 * Te), Ne = (ve * le ** 3 - (ve - 2 * Te) * (le - 2 * Te) ** 3) / 12, Pe = (le * ve ** 3 - (le - 2 * Te) * (ve - 2 * Te) ** 3) / 12, et = 2 * Te * (le - Te) * (ve - Te) * ((le - Te) * (ve - Te)) / (le - Te + (ve - Te)), Je = 2 * le * Te, dt = 2 * ve * Te, qt = "HSS";
          break;
        case "Filled Steel Tube":
          at = le * ve, Ne = ve * le ** 3 / 12, Pe = le * ve ** 3 / 12, et = 2 * Te * (le - Te) * (ve - Te) * ((le - Te) * (ve - Te)) / (le - Te + (ve - Te)), Je = 2 * le * Te + 5 / 6 * (le - 2 * Te) * (ve - 2 * Te), dt = 2 * ve * Te + 5 / 6 * (le - 2 * Te) * (ve - 2 * Te), qt = "CFT";
          break;
        case "Steel Angle": {
          const Rt = Re || Te;
          at = Rt * (le + ve - Rt), Ne = Rt * (le ** 3 + ve * Rt ** 2 + Rt ** 2 * (le - Rt)) / 12, Pe = Rt * (ve ** 3 + le * Rt ** 2 + Rt ** 2 * (ve - Rt)) / 12, et = (le + ve - Rt) * Rt ** 3 / 3, Je = le * Rt, dt = ve * Rt, qt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          at = 2 * ve * Re + (le - 2 * Re) * Te, Ne = (Te * le ** 3 + 2 * ve * Re * (le - Re) ** 2) / 12, Pe = (2 * Re * ve ** 3 + (le - 2 * Re) * Te ** 3) / 12, et = (2 * ve * Re ** 3 + (le - 2 * Re) * Te ** 3) / 3, Je = (le - 2 * Re) * Te, dt = 2 * ve * Re * 5 / 6, qt = ae.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          at = 2 * (2 * ve * Re + (le - 2 * Re) * Te), Ne = 2 * (Te * le ** 3 + 2 * ve * Re * (le - Re) ** 2) / 12, Pe = 2 * (2 * Re * ve ** 3 + (le - 2 * Re) * Te ** 3) / 12, et = 2 * (2 * ve * Re ** 3 + (le - 2 * Re) * Te ** 3) / 3, Je = 2 * (le - 2 * Re) * Te, dt = 4 * ve * Re * 5 / 6, qt = "2C";
          break;
        default:
          le > 0 && ve > 0 && (at = le * ve, Ne = ve * le ** 3 / 12, Pe = le * ve ** 3 / 12, et = Math.min(le, ve) * Math.max(le, ve) ** 3 / 3 * 0.3, Je = dt = 5 / 6 * at);
          break;
      }
      ae.modI2 && (Pe *= ae.modI2), ae.modI3 && (Ne *= ae.modI3), ot.set(ye, at), Mt.set(ye, Ne), Tt.set(ye, Pe), ct.set(ye, et), Je > 0 && Qe.set(ye, Je), dt > 0 && je.set(ye, dt), Ot.set(ye, {
        type: qt,
        b: ve || void 0,
        h: le || void 0,
        d: qt === "circ" || qt === "pipe" ? le : void 0,
        tw: Te || void 0,
        tf: Re || void 0,
        r: ae.R,
        name: Me
      });
    }
    const Lt = /* @__PURE__ */ new Map();
    for (const [ye, Me] of Y) {
      const ae = Be.get(ye);
      if (ae === void 0) continue;
      const Ae = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const le of Me) le === "UX" && (Ae[0] = true), le === "UY" && (Ae[1] = true), le === "UZ" && (Ae[2] = true), le === "RX" && (Ae[3] = true), le === "RY" && (Ae[4] = true), le === "RZ" && (Ae[5] = true);
      Lt.set(ae, Ae);
    }
    const Le = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
    for (let ye = 0; ye < Ze.length; ye++) Et.set(`${Ze[ye]}@${$t[ye]}`, ye);
    for (const ye of L) {
      const Me = Et.get(`${ye.line}@${ye.story}`);
      if (Me === void 0) continue;
      const [ae, Ae] = Ge[Me], le = be[ae], ve = be[Ae], Re = Math.sqrt((ve[0] - le[0]) ** 2 + (ve[1] - le[1]) ** 2 + (ve[2] - le[2]) ** 2);
      if (Re < 1e-10) continue;
      const Te = ye.val * Re / 2;
      let at = 0, Ne = 0, Pe = 0;
      ye.dir === "GRAV" || ye.dir === "GRAVITY" ? Pe = -Te : ye.dir === "X" ? at = Te : ye.dir === "Y" ? Ne = Te : ye.dir === "Z" && (Pe = -Te);
      for (const et of [
        ae,
        Ae
      ]) {
        const Je = Le.get(et) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Je[0] += at, Je[1] += Ne, Je[2] += Pe, Le.set(et, Je);
      }
    }
    const xt = /* @__PURE__ */ new Map();
    for (const [ye, Me] of ue) {
      const ae = B.get(Me);
      if (!ae) continue;
      const Ae = K.get(ae.material);
      (Ae == null ? void 0 : Ae.density) && xt.set(ye, Ae.density);
    }
    return {
      units: _,
      stories: T.reverse(),
      materials: K,
      frameSections: B,
      nodes: be,
      nodeNames: Ce,
      nodeNameToIdx: Be,
      elements: Ge,
      elementNames: Ze,
      elementTypes: gt,
      elementStories: $t,
      elementSections: ue,
      nodeInputs: {
        supports: Lt,
        loads: Le
      },
      elementInputs: {
        elasticities: qe,
        shearModuli: He,
        areas: ot,
        momentsOfInertiaZ: Mt,
        momentsOfInertiaY: Tt,
        torsionalConstants: ct,
        shearAreasY: Qe,
        shearAreasZ: je,
        rigidOffsets: pt,
        momentReleases: it,
        densities: xt,
        sectionShapes: Ot
      },
      sectionShapes: Ot,
      grids: ie,
      info: {
        nNodes: be.length,
        nFrames: Ge.length,
        nAreas: G.length,
        title: Ie
      },
      rawSections: ce
    };
  }
  function el(e) {
    const { e2kModel: x } = e, _ = x == null ? void 0 : x.rawSections;
    return _ && _.size > 0 ? tl(_) : ol(e);
  }
  function tl(e, x) {
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
    for (const K of T) {
      const B = e.get(K);
      if (!(!B || B.length === 0)) {
        _.push(`$ ${K}`);
        for (const ne of B) _.push(ne);
        _.push("");
      }
    }
    for (const [K, B] of e) if (!T.includes(K) && B.length !== 0) {
      _.push(`$ ${K}`);
      for (const ne of B) _.push(ne);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function ol(e) {
    var _a2, _b, _c, _d;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: K, title: B, units: ne } = e, V = (ne == null ? void 0 : ne.force) || "TONF", G = (ne == null ? void 0 : ne.length) || "M", Y = [], xe = (ue) => Math.round(ue * 1e4) / 1e4;
    Y.push("$ File exported from Awatif FEM Studio"), Y.push(""), Y.push("$ PROGRAM INFORMATION"), Y.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), Y.push(""), Y.push("$ CONTROLS"), Y.push(`  UNITS  "${V}"  "${G}"  "C"  `), B && Y.push(`  TITLE2  "${B}"  `), Y.push("");
    const L = /* @__PURE__ */ new Set();
    x.forEach((ue) => L.add(xe(ue[1])));
    const ie = [
      ...L
    ].sort((ue, qe) => ue - qe), Ie = [], ge = /* @__PURE__ */ new Map();
    Ie.push("Base"), ge.set(ie[0], "Base");
    for (let ue = 1; ue < ie.length; ue++) {
      const qe = `Level_${ue}`;
      Ie.push(qe), ge.set(ie[ue], qe);
    }
    Y.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let ue = ie.length - 1; ue >= 1; ue--) Y.push(`  STORY "${Ie[ue]}"  HEIGHT ${xe(ie[ue] - ie[ue - 1])} MASTERSTORY "Yes"  `);
    ie.length > 0 && Y.push(`  STORY "Base"  ELEV ${ie[0]} `), Y.push(""), _.some((ue) => ue.length === 4) && (Y.push("$ DIAPHRAGM NAMES"), Y.push('  DIAPHRAGM "D1"    TYPE RIGID'), Y.push("")), Y.push("$ MATERIAL PROPERTIES");
    const pe = /* @__PURE__ */ new Set();
    (_a2 = K.elasticities) == null ? void 0 : _a2.forEach((ue) => pe.add(ue));
    const be = /* @__PURE__ */ new Map();
    let Ce = 0;
    for (const ue of pe) {
      const qe = `Mat_${++Ce}`;
      be.set(ue, qe), Y.push(`  MATERIAL  "${qe}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), Y.push(`  MATERIAL  "${qe}"    SYMTYPE "Isotropic"  E ${ue}  U 0.2  A 1E-05`);
    }
    Y.push(""), Y.push("$ FRAME SECTIONS");
    const Be = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map();
    _.forEach((ue, qe) => {
      var _a3, _b2;
      if (ue.length !== 2) return;
      const He = (_a3 = K.sectionShapes) == null ? void 0 : _a3.get(qe), ot = ((_b2 = K.elasticities) == null ? void 0 : _b2.get(qe)) ?? 0, Qe = be.get(ot) || "Mat_1", je = (He == null ? void 0 : He.h) ?? 0, pt = (He == null ? void 0 : He.b) ?? 0, it = (He == null ? void 0 : He.d) ?? 0, Mt = (He == null ? void 0 : He.tf) ?? 0, Tt = (He == null ? void 0 : He.tw) ?? 0, ct = (He == null ? void 0 : He.type) || "rect", Ot = `${ct}_${je}_${pt}_${it}_${Mt}_${Tt}`;
      (He == null ? void 0 : He.name) && !Xe.has(Ot) && Xe.set(Ot, He.name);
      let Lt = Xe.get(Ot);
      if (Lt || (ct === "rect" ? Lt = `R${xe(pt * 100)}x${xe(je * 100)}` : ct === "circ" ? Lt = `C_D${xe(it * 100)}` : ct === "I" ? Lt = `I_${xe(je * 100)}` : Lt = `Sec_${Be.size + 1}`, Xe.set(Ot, Lt)), Oe.set(qe, Lt), Be.has(Lt)) return;
      Be.add(Lt);
      const Et = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[ct] || "Concrete Rectangular";
      let xt = `  FRAMESECTION  "${Lt}"  MATERIAL "${Qe}"  SHAPE "${Et}"`;
      je && (xt += `  D ${je}`), pt && (xt += `  B ${pt}`), it && !je && (xt += `  D ${it}`), Mt && (xt += `  TF ${Mt}`), Tt && (xt += `  TW ${Tt}`), Y.push(xt);
    }), Y.push("");
    const rt = /* @__PURE__ */ new Map();
    let Ge = 0;
    x.forEach((ue) => {
      const qe = `${xe(ue[0])},${xe(ue[2])}`;
      rt.has(qe) || rt.set(qe, `${++Ge}`);
    }), Y.push("$ POINT COORDINATES");
    for (const [ue, qe] of rt) {
      const [He, ot] = ue.split(",").map(Number);
      Y.push(`  POINT "${qe}"  ${He} ${ot} `);
    }
    Y.push("");
    const Ze = (ue) => {
      const qe = x[ue], He = `${xe(qe[0])},${xe(qe[2])}`;
      return {
        pt: rt.get(He) || "1",
        story: ge.get(xe(qe[1])) || "Base"
      };
    };
    Y.push("$ LINE CONNECTIVITIES");
    const gt = [];
    _.forEach((ue, qe) => {
      if (ue.length !== 2) return;
      const He = nl(x, ue), ot = Oe.get(qe) || `Sec_${qe}`;
      if (He === "BEAM") {
        const Qe = Ze(ue[0]), je = Ze(ue[1]);
        Y.push(`  LINE  "E${qe + 1}"  BEAM  "${Qe.pt}"  "${je.pt}"  0`), gt.push(`  LINEASSIGN  "E${qe + 1}"  "${Qe.story}"  SECTION "${ot}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const Qe = x[ue[0]][1] <= x[ue[1]][1] ? ue[0] : ue[1], je = x[ue[0]][1] <= x[ue[1]][1] ? ue[1] : ue[0];
        Ze(Qe);
        const pt = Ze(je), it = xe(x[Qe][1]), Mt = xe(x[je][1]), Tt = ie.indexOf(it), ct = ie.indexOf(Mt), Ot = Math.max(1, ct >= 0 && Tt >= 0 ? ct - Tt : 1);
        Y.push(`  LINE  "E${qe + 1}"  ${He}  "${pt.pt}"  "${pt.pt}"  ${Ot}`);
        for (let Lt = 0; Lt < Ot; Lt++) {
          const Le = ct - Lt;
          Le >= 0 && Le < Ie.length && gt.push(`  LINEASSIGN  "E${qe + 1}"  "${Ie[Le]}"  SECTION "${ot}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), Y.push(""), Y.push("$ POINT ASSIGNS"), (_b = T.supports) == null ? void 0 : _b.forEach((ue, qe) => {
      const He = [];
      if (ue[0] && He.push("UX"), ue[1] && He.push("UY"), ue[2] && He.push("UZ"), ue[3] && He.push("RX"), ue[4] && He.push("RY"), ue[5] && He.push("RZ"), He.length > 0) {
        const ot = Ze(qe);
        Y.push(`  POINTASSIGN  "${ot.pt}"  "${ot.story}"  RESTRAINT "${He.join(" ")}"  `);
      }
    }), Y.push(""), Y.push("$ LINE ASSIGNS"), gt.forEach((ue) => Y.push(ue)), Y.push("");
    const $t = [];
    if (_.forEach((ue, qe) => {
      if (ue.length === 4) {
        const He = x[ue[0]], ot = x[ue[1]], Qe = x[ue[2]], je = [
          ot[0] - He[0],
          ot[1] - He[1],
          ot[2] - He[2]
        ], pt = [
          Qe[0] - He[0],
          Qe[1] - He[1],
          Qe[2] - He[2]
        ], it = Math.abs(je[2] * pt[0] - je[0] * pt[2]), Mt = Math.sqrt((je[1] * pt[2] - je[2] * pt[1]) ** 2 + it ** 2 + (je[0] * pt[1] - je[1] * pt[0]) ** 2), Tt = Mt > 1e-10 && it / Mt < 0.5;
        $t.push({
          idx: qe,
          el: ue,
          isWall: Tt
        });
      }
    }), $t.some((ue) => !ue.isWall)) {
      Y.push("$ SLAB PROPERTIES");
      const ue = ((_c = K.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      Y.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${be.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${ue} `), Y.push("");
    }
    if ($t.some((ue) => ue.isWall)) {
      Y.push("$ WALL PROPERTIES");
      const ue = ((_d = K.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      Y.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${be.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${ue} `), Y.push("");
    }
    if ($t.length > 0) {
      Y.push("$ AREA CONNECTIVITIES");
      const ue = [];
      $t.forEach((qe, He) => {
        const { el: ot, isWall: Qe } = qe, je = Qe ? `W${He + 1}` : `F${He + 1}`, pt = Qe ? "PANEL" : "FLOOR", it = ot.map((Mt) => Ze(Mt));
        if (Qe) {
          const Mt = x[ot[0]][1] <= x[ot[2]][1] ? 0 : 2, Tt = x[ot[1]][1] <= x[ot[3]][1] ? 1 : 3;
          Y.push(`  AREA "${je}"  ${pt}  4  "${it[Mt].pt}"  "${it[Tt].pt}"  "${it[Tt].pt}"  "${it[Mt].pt}"  1  1  0  0  `);
          const ct = it[Mt === 0 ? 2 : 0].story;
          ue.push(`  AREAASSIGN  "${je}"  "${ct}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else Y.push(`  AREA "${je}"  ${pt}  4  "${it[0].pt}"  "${it[1].pt}"  "${it[2].pt}"  "${it[3].pt}"  0  0  0  0  `), ue.push(`  AREAASSIGN  "${je}"  "${it[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), Y.push(""), Y.push("$ AREA ASSIGNS"), ue.forEach((qe) => Y.push(qe)), Y.push("");
    }
    return Y.push("$ LOAD PATTERNS"), Y.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), Y.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), Y.push(""), T.loads && T.loads.size > 0 && (Y.push("$ POINT OBJECT LOADS"), T.loads.forEach((ue, qe) => {
      const [He, ot, Qe] = ue, je = Ze(qe);
      Math.abs(He) > 1e-10 && Y.push(`  POINTLOAD  "${je.pt}"  "${je.story}"  "Dead"  TYPE "FORCE"  FX ${He}`), Math.abs(ot) > 1e-10 && Y.push(`  POINTLOAD  "${je.pt}"  "${je.story}"  "Dead"  TYPE "FORCE"  FY ${ot}`), Math.abs(Qe) > 1e-10 && Y.push(`  POINTLOAD  "${je.pt}"  "${je.story}"  "Dead"  TYPE "FORCE"  FZ ${Qe}`);
    }), Y.push("")), Y.push("  END"), Y.push("$ END OF MODEL FILE"), Y.join(`\r
`);
  }
  function nl(e, x) {
    const _ = e[x[0]], T = e[x[1]], K = Math.abs(T[1] - _[1]), B = Math.sqrt((T[0] - _[0]) ** 2 + (T[2] - _[2]) ** 2), ne = K > B * 0.5;
    return ne && B > 0.01 ? "BRACE" : ne ? "COLUMN" : "BEAM";
  }
  function sl(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: K } = e, B = [];
    return B.push("# OpenSeesPy model exported from Awatif FEM Studio"), B.push(`# ${x.length} nodes, ${_.length} elements`), B.push(""), B.push("import openseespy.opensees as ops"), B.push(""), B.push("ops.wipe()"), B.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), B.push(""), B.push("# --- Nodes ---"), x.forEach((ne, V) => {
      B.push(`ops.node(${V + 1}, ${ne[0]}, ${ne[1]}, ${ne[2]})`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a2 = T.supports) == null ? void 0 : _a2.forEach((ne, V) => {
      const G = ne.map((Y) => Y ? 1 : 0).join(", ");
      B.push(`ops.fix(${V + 1}, ${G})`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), B.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), B.push(""), B.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((ne, V) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (ne.length !== 2) return;
      const G = x[ne[0]], Y = x[ne[1]], L = Math.abs(Y[2] - G[2]) > Math.max(Math.abs(Y[0] - G[0]), Math.abs(Y[1] - G[1])) ? 2 : 1, ie = ((_a3 = K.areas) == null ? void 0 : _a3.get(V)) ?? 1, Ie = ((_b2 = K.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ge = ((_c = K.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ce = ((_d = K.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, pe = ((_e2 = K.momentsOfInertiaY) == null ? void 0 : _e2.get(V)) ?? 1, be = ((_f = K.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      B.push(`ops.element('elasticBeamColumn', ${V + 1}, ${ne[0] + 1}, ${ne[1] + 1}, ${ie}, ${Ie}, ${ge}, ${ce}, ${pe}, ${be}, ${L})`);
    }), B.push(""), T.loads && T.loads.size > 0 && (B.push("# --- Loads ---"), B.push("ops.timeSeries('Linear', 1)"), B.push("ops.pattern('Plain', 1, 1)"), T.loads.forEach((ne, V) => {
      const G = ne.map((Y) => Y).join(", ");
      B.push(`ops.load(${V + 1}, ${G})`);
    }), B.push("")), B.push("# --- Analysis ---"), B.push("ops.system('BandGeneral')"), B.push("ops.numberer('RCM')"), B.push("ops.constraints('Plain')"), B.push("ops.integrator('LoadControl', 1.0)"), B.push("ops.algorithm('Linear')"), B.push("ops.analysis('Static')"), B.push("ops.analyze(1)"), B.push(""), B.push("# --- Results ---"), B.push('print("\\n=== Displacements ===")'), x.forEach((ne, V) => {
      B.push(`print(f"Node {${V + 1}}: {ops.nodeDisp(${V + 1})}")`);
    }), B.push(""), B.push('print("\\n=== Reactions ===")'), B.push("ops.reactions()"), (_b = T.supports) == null ? void 0 : _b.forEach((ne, V) => {
      B.push(`print(f"Node {${V + 1}}: {ops.nodeReaction(${V + 1})}")`);
    }), B.join(`
`);
  }
  function al(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: T, elementInputs: K } = e, B = [];
    return B.push("# OpenSees Tcl model exported from Awatif FEM Studio"), B.push(`# ${x.length} nodes, ${_.length} elements`), B.push(""), B.push("wipe"), B.push("model basic -ndm 3 -ndf 6"), B.push(""), B.push("# --- Nodes ---"), x.forEach((ne, V) => {
      B.push(`node ${V + 1} ${ne[0]} ${ne[1]} ${ne[2]}`);
    }), B.push(""), B.push("# --- Boundary Conditions ---"), (_a2 = T.supports) == null ? void 0 : _a2.forEach((ne, V) => {
      const G = ne.map((Y) => Y ? 1 : 0).join(" ");
      B.push(`fix ${V + 1} ${G}`);
    }), B.push(""), B.push("# --- Geometric Transformations ---"), B.push("geomTransf Linear 1 0.0 0.0 1.0"), B.push("geomTransf Linear 2 -1.0 0.0 0.0"), B.push(""), B.push("# --- Elements ---"), _.forEach((ne, V) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (ne.length !== 2) return;
      const G = x[ne[0]], Y = x[ne[1]], L = Math.abs(Y[2] - G[2]) > Math.max(Math.abs(Y[0] - G[0]), Math.abs(Y[1] - G[1])) ? 2 : 1, ie = ((_a3 = K.areas) == null ? void 0 : _a3.get(V)) ?? 1, Ie = ((_b2 = K.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ge = ((_c = K.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ce = ((_d = K.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, pe = ((_e2 = K.momentsOfInertiaY) == null ? void 0 : _e2.get(V)) ?? 1, be = ((_f = K.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      B.push(`element elasticBeamColumn ${V + 1} ${ne[0] + 1} ${ne[1] + 1} ${ie} ${Ie} ${ge} ${ce} ${pe} ${be} ${L}`);
    }), B.push(""), T.loads && T.loads.size > 0 && (B.push("# --- Loads ---"), B.push("timeSeries Linear 1"), B.push("pattern Plain 1 1 {"), T.loads.forEach((ne, V) => {
      const G = ne.map((Y) => Y).join(" ");
      B.push(`  load ${V + 1} ${G}`);
    }), B.push("}"), B.push("")), B.push("# --- Analysis ---"), B.push("system BandGeneral"), B.push("numberer RCM"), B.push("constraints Plain"), B.push("integrator LoadControl 1.0"), B.push("algorithm Linear"), B.push("analysis Static"), B.push("analyze 1"), B.push(""), B.push("# --- Results ---"), B.push('puts "\\n=== Displacements ==="'), x.forEach((ne, V) => {
      B.push(`puts "Node ${V + 1}: [nodeDisp ${V + 1}]"`);
    }), B.push('puts "\\n=== Reactions ==="'), B.push("reactions"), (_b = T.supports) == null ? void 0 : _b.forEach((ne, V) => {
      B.push(`puts "Node ${V + 1}: [nodeReaction ${V + 1}]"`);
    }), B.join(`
`);
  }
  function ll(e) {
    const x = [], _ = [], T = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const Ie of e.split(/\r?\n/)) {
      const ge = Ie.trim(), ce = ge.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
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
        const Be = parseInt(be[1]), Oe = L.get(parseInt(be[2])), Xe = L.get(parseInt(be[3]));
        if (Oe !== void 0 && Xe !== void 0) {
          const rt = _.length;
          _.push([
            Oe,
            Xe
          ]), ie.set(Be, rt), V.set(rt, parseFloat(be[4])), B.set(rt, parseFloat(be[5])), ne.set(rt, parseFloat(be[6])), xe.set(rt, parseFloat(be[7])), G.set(rt, parseFloat(be[8])), Y.set(rt, parseFloat(be[9]));
        }
        continue;
      }
      const Ce = ge.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Ce) {
        const Be = L.get(parseInt(Ce[1]));
        Be !== void 0 && K.set(Be, [
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
        loads: K
      },
      elementInputs: {
        elasticities: B,
        shearModuli: ne,
        areas: V,
        momentsOfInertiaY: G,
        momentsOfInertiaZ: Y,
        torsionalConstants: xe
      }
    };
  }
  function rl(e) {
    const x = [], _ = [], T = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
    for (const ie of e.split(/\r?\n/)) {
      const Ie = ie.trim();
      if (Ie.startsWith("#") || Ie.startsWith("//")) continue;
      const ge = Ie.split(/\s+/);
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
          ]), V.set(be, parseFloat(ge[5])), B.set(be, parseFloat(ge[6])), ne.set(be, parseFloat(ge[7])), xe.set(be, parseFloat(ge[8])), G.set(be, parseFloat(ge[9])), Y.set(be, parseFloat(ge[10]));
        }
        continue;
      }
      if (ge[0] === "load" && ge.length >= 8) {
        const ce = L.get(parseInt(ge[1]));
        ce !== void 0 && K.set(ce, [
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
        loads: K
      },
      elementInputs: {
        elasticities: B,
        shearModuli: ne,
        areas: V,
        momentsOfInertiaY: G,
        momentsOfInertiaZ: Y,
        torsionalConstants: xe
      }
    };
  }
  js = Bo.state(false);
  bl = function(e) {
    e.nodeInputs || (e.nodeInputs = Bo.state({})), e.elementInputs || (e.elementInputs = Bo.state({})), e.deformOutputs || (e.deformOutputs = Bo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Bo.state({}));
    let x = "tonf", _ = "m", T = Io(x, _), K = {
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
    let G = false;
    const Y = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Map();
    let L = "", ie = {}, Ie = null, ge = "", ce = [], pe = [], be = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), rt = null, Ge = [], Ze = 0.2, gt = 2, $t = 2, ue = false, qe = 2, He = "x", ot = /* @__PURE__ */ new Set(), Qe = true, je = 0.15, pt = 2, it = 2, Mt = /* @__PURE__ */ new Set(), Tt = false, ct = "perimeter";
    const Ot = () => ({
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
    }), Lt = (t, o) => ({
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
      }, Ot),
      vigasY: Array.from({
        length: o
      }, Ot)
    }), Le = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Et = 0, xt = 3, ye = false, Me = 0, ae = null, Ae = 0, le = [], ve = 1, Re = true;
    const Te = Ra();
    Te.div.style.display = "none";
    function at() {
      const t = an()[L];
      return t && t[Et] ? t[Et].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ne = [], Pe = [], et = 0, Je = [], dt = null;
    function qt() {
      if (!dt) return;
      const t = nt();
      t && t.scene.remove(dt), dt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), dt = null;
    }
    function Rt(t, o, n, l, s) {
      qt();
      const d = nt();
      if (!d) return;
      dt = new on(), dt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), c = Math.max(...o), i = Math.max(...n), b = r - a || 1, w = c - f || 1, M = 3359829, v = 2241348;
      for (const h of n) {
        for (const S of o) {
          const I = new Xt().setFromPoints([
            new ke(a, h, S),
            new ke(r, h, S)
          ]), k = new No({
            color: M,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), q = new So(I, k);
          q.computeLineDistances(), q.renderOrder = -10, dt.add(q);
        }
        for (const S of t) {
          const I = new Xt().setFromPoints([
            new ke(S, h, f),
            new ke(S, h, c)
          ]), k = new No({
            color: M,
            dashSize: w * 0.015,
            gapSize: w * 0.01,
            transparent: true,
            opacity: 0.25
          }), q = new So(I, k);
          q.computeLineDistances(), q.renderOrder = -10, dt.add(q);
        }
      }
      for (const h of t) for (const S of o) {
        const I = new Xt().setFromPoints([
          new ke(h, 0, S),
          new ke(h, i, S)
        ]), k = new No({
          color: v,
          dashSize: i * 0.01,
          gapSize: i * 8e-3,
          transparent: true,
          opacity: 0.15
        }), q = new So(I, k);
        q.computeLineDistances(), q.renderOrder = -10, dt.add(q);
      }
      const p = Math.min(b, w) * 0.015;
      for (const h of n) for (const S of t) for (const I of o) {
        const k = [
          new ke(S - p, h, I),
          new ke(S + p, h, I),
          new ke(S, h, I - p),
          new ke(S, h, I + p)
        ], q = new Xt().setFromPoints(k), N = new _o({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), g = new Ro(q, N);
        g.renderOrder = -5, dt.add(g);
      }
      dt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(dt), d.render();
    }
    let It = null;
    function Jn() {
      if (!It) return;
      const t = nt();
      t && t.scene.remove(It), It.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), It = null;
    }
    function Wo(t, o, n, l, s) {
      Jn();
      const d = nt();
      if (!d) return;
      It = new on(), It.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), c = Math.max(...o), i = r - a || 1, b = c - f || 1, w = Math.max(i, b), M = w * 0.08, v = l || t.map((g, u) => String.fromCharCode(65 + u)), p = s || o.map((g, u) => String(u + 1)), h = w * 0.018, S = o.length <= 1, I = 8947848;
      for (let g = 0; g < t.length; g++) {
        const u = t[g];
        if (S) {
          const $ = -M - h * 1.5;
          gn(u, 0, 0, u, 0, $ + h, I, It), xn(v[g] || `${g}`, u, 0, $, h, It);
        } else {
          const $ = f - M - h * 1.5;
          gn(u, f, 0, u, $ + h, 0, I, It), xn(v[g] || `${g}`, u, $, 0, h, It);
        }
      }
      if (!S) for (let g = 0; g < o.length; g++) {
        const u = o[g], $ = a - M - h * 1.5;
        gn(a, u, 0, $ + h, u, 0, I, It), xn(p[g] || `${g}`, $, u, 0, h, It);
      }
      const k = h * 1.8, q = M * 1.2, N = M * 1.2;
      for (let g = 0; g < t.length - 1; g++) {
        const u = t[g], $ = t[g + 1], z = Math.abs($ - u), C = (u + $) / 2, y = `${z.toFixed(2)} m`;
        S ? (bn(y, C, 0, -q, k, It), hn(u, 0, -q * 0.7, $, 0, -q * 0.7, 16763904, It)) : (bn(y, C, f - N, 0, k, It), hn(u, f - N * 0.7, 0, $, f - N * 0.7, 0, 16763904, It));
      }
      if (!S) for (let g = 0; g < o.length - 1; g++) {
        const u = o[g], $ = o[g + 1], z = Math.abs($ - u), C = (u + $) / 2, y = `${z.toFixed(2)} m`;
        bn(y, a - q, C, 0, k, It), hn(a - q * 0.7, u, 0, a - q * 0.7, $, 0, 16763904, It);
      }
      It.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), d.scene.add(It), d.render();
    }
    let Ht = null;
    function Vn() {
      if (!Ht) return;
      const t = nt();
      t && t.scene.remove(Ht), Ht.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ht = null;
    }
    function mn(t, o, n) {
      if (Vn(), t.length === 0) return;
      const l = nt();
      if (!l) return;
      Ht = new on(), Ht.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), r = Math.max(...n), f = d - s || 1, c = r - a || 1, i = Math.max(f, c), b = i * 0.06, w = n.length <= 1, M = 4491519, v = i * 0.015;
      for (const p of t) {
        const h = p.elev;
        w ? (Yo(s - b, 0, h, d + b, 0, h, M, Ht), Xn(p.name, d + b * 1.5, 0, h, v, Ht)) : (Yo(s, a, h, d, a, h, M, Ht), Yo(d, a, h, d, r, h, M, Ht), Yo(d, r, h, s, r, h, M, Ht), Yo(s, r, h, s, a, h, M, Ht), Xn(p.name, s - b * 1.5, a, h, v, Ht));
      }
      Ht.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Ht), l.render();
    }
    function Yo(t, o, n, l, s, d, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, c = new Xt().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, d)
      ]), i = new No({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new So(c, i);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function Xn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const c = a.getContext("2d");
      c.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      c.beginPath(), c.moveTo(i, 0), c.lineTo(r - i, 0), c.quadraticCurveTo(r, 0, r, i), c.lineTo(r, f - i), c.quadraticCurveTo(r, f, r - i, f), c.lineTo(i, f), c.quadraticCurveTo(0, f, 0, f - i), c.lineTo(0, i), c.quadraticCurveTo(0, 0, i, 0), c.closePath(), c.fill(), c.fillStyle = "#88bbff", c.font = "bold 38px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, f / 2);
      const b = new Hn(a);
      b.needsUpdate = true;
      const w = new sn({
        map: b,
        depthTest: false,
        transparent: true
      }), M = new nn(w);
      M.position.set(o, n, l), M.scale.set(s * 8, s, 1), M.renderOrder = 101, d.add(M);
    }
    function bn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const c = a.getContext("2d");
      c.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      c.beginPath(), c.moveTo(i, 0), c.lineTo(r - i, 0), c.quadraticCurveTo(r, 0, r, i), c.lineTo(r, f - i), c.quadraticCurveTo(r, f, r - i, f), c.lineTo(i, f), c.quadraticCurveTo(0, f, 0, f - i), c.lineTo(0, i), c.quadraticCurveTo(0, 0, i, 0), c.closePath(), c.fill(), c.fillStyle = "#ffcc00", c.font = "bold 36px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, f / 2);
      const b = new Pa(a);
      b.minFilter = Fa;
      const w = new sn({
        map: b,
        transparent: true,
        depthTest: false
      }), M = new nn(w);
      M.position.set(o, n, l);
      const v = r / f;
      M.scale.set(s * v, s, 1), M.renderOrder = 999, d.add(M);
    }
    function hn(t, o, n, l, s, d, a, r) {
      const f = [
        new ke(t, o, n),
        new ke(l, s, d)
      ], c = new Xt().setFromPoints(f), i = new _o({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new So(c, i);
      b.renderOrder = 998, r.add(b);
    }
    function gn(t, o, n, l, s, d, a, r) {
      const f = new Xt().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, d)
      ]), c = new No({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new So(f, c);
      i.computeLineDistances(), r.add(i);
    }
    function xn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const c = new Hn(a);
      c.needsUpdate = true;
      const i = new sn({
        map: c,
        depthTest: false,
        transparent: true
      }), b = new nn(i);
      b.position.set(o, n, l);
      const w = s * 2;
      b.scale.set(w, w, 1), b.renderOrder = 100, d.add(b);
    }
    const Ye = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Ve(), s;
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
          const d = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            d,
            a
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Ve();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Ve(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Ve();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Ve();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Ve();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Ve();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Ve();
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
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = o !== void 0 ? o : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || d}: ${a.checked}`), a.checked;
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
          qt(), console.log("Reference grid cleared");
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
        const d = [
          0
        ];
        for (const a of n || [
          3
        ]) d.push(d[d.length - 1] + a);
        Rt(l, s, d), Ne = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Pe = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), et = d[d.length - 1], Je = d.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), Wo(Ne.map((a) => a.coord), Pe.map((a) => a.coord), et, Ne.map((a) => a.label), Pe.map((a) => a.label));
        {
          const a = d.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - d[f - 1] : 0,
            elev: r
          }));
          mn(a, Ne.map((r) => r.coord), Pe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (Ne.length === 0 || Je.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = o.split("x").map((R) => parseFloat(R) / 100), [a, r] = n.split("x").map((R) => parseFloat(R) / 100), f = Ne.map((R) => R.coord), c = Pe.map((R) => R.coord), i = Je.map((R) => R.elev), b = f.length, w = c.length, M = i.length, v = M - 1, p = [], h = {};
        for (let R = 0; R < M; R++) for (let oe = 0; oe < w; oe++) for (let se = 0; se < b; se++) h[`${se},${oe},${R}`] = p.length, p.push([
          f[se],
          c[oe],
          i[R]
        ]);
        const S = [], I = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Map();
        for (let R = 0; R < v; R++) for (let oe = 0; oe < w; oe++) for (let se = 0; se < b; se++) {
          const ee = S.length;
          S.push([
            h[`${se},${oe},${R}`],
            h[`${se},${oe},${R + 1}`]
          ]), I.add(ee), q.set(ee, R);
        }
        for (let R = 1; R < M; R++) for (let oe = 0; oe < w; oe++) for (let se = 0; se < b - 1; se++) {
          const ee = S.length;
          S.push([
            h[`${se},${oe},${R}`],
            h[`${se + 1},${oe},${R}`]
          ]), k.add(ee), q.set(ee, R - 1);
        }
        for (let R = 1; R < M; R++) for (let oe = 0; oe < b; oe++) for (let se = 0; se < w - 1; se++) {
          const ee = S.length;
          S.push([
            h[`${oe},${se},${R}`],
            h[`${oe},${se + 1},${R}`]
          ]), k.add(ee), q.set(ee, R - 1);
        }
        const N = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", g = /* @__PURE__ */ new Set();
        if (N) {
          const R = N === "all" || N === "x" || N === "perimeter", oe = N === "all" || N === "y" || N === "perimeter";
          for (let se = 0; se < v; se++) {
            if (R) for (let ee = 0; ee < w; ee++) {
              if (N === "perimeter" && ee !== 0 && ee !== w - 1) continue;
              const W = Math.floor((b - 1) / 2);
              for (let re = 0; re < b - 1; re++) {
                if (N === "perimeter" && re !== W) continue;
                const de = S.length;
                S.push([
                  h[`${re},${ee},${se}`],
                  h[`${re + 1},${ee},${se + 1}`]
                ]), g.add(de), q.set(de, se);
                const U = S.length;
                S.push([
                  h[`${re + 1},${ee},${se}`],
                  h[`${re},${ee},${se + 1}`]
                ]), g.add(U), q.set(U, se);
              }
            }
            if (oe) for (let ee = 0; ee < b; ee++) {
              if (N === "perimeter" && ee !== 0 && ee !== b - 1) continue;
              const W = Math.floor((w - 1) / 2);
              for (let re = 0; re < w - 1; re++) {
                if (N === "perimeter" && re !== W) continue;
                const de = S.length;
                S.push([
                  h[`${ee},${re},${se}`],
                  h[`${ee},${re + 1},${se + 1}`]
                ]), g.add(de), q.set(de, se);
                const U = S.length;
                S.push([
                  h[`${ee},${re + 1},${se}`],
                  h[`${ee},${re},${se + 1}`]
                ]), g.add(U), q.set(U, se);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, $ = u / (2 * (1 + 0.2)), z = s * d, C = s * d ** 3 / 12, y = d * s ** 3 / 12, E = s * d * (s ** 2 + d ** 2) / 12, m = a * r, A = a * r ** 3 / 12, F = r * a ** 3 / 12, H = a * r * (a ** 2 + r ** 2) / 12, J = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        for (let R = 0; R < S.length; R++) J.set(R, u), Q.set(R, $), I.has(R) ? (Z.set(R, z), te.set(R, C), j.set(R, y), he.set(R, E), ze.set(R, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${o}`
        })) : g.has(R) ? (Z.set(R, z), te.set(R, C), j.set(R, y), he.set(R, E), ze.set(R, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${o}`
        })) : (Z.set(R, m), te.set(R, A), j.set(R, F), he.set(R, H), ze.set(R, {
          type: "rect",
          b: a,
          h: r,
          name: `V${n}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let R = 0; R < w; R++) for (let oe = 0; oe < b; oe++) fe.set(h[`${oe},${R},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = S, e.nodeInputs.val = {
          supports: fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: J,
          shearModuli: Q,
          areas: Z,
          momentsOfInertiaZ: te,
          momentsOfInertiaY: j,
          torsionalConstants: he,
          sectionShapes: ze
        }, be = I, Ce = k, Oe = q, console.log(`Built: ${p.length} nodes, ${S.length} elements (${I.size} cols, ${k.size} beams, ${g.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${N ? `, braces=${N}` : ""}`), {
          nodes: p.length,
          elements: S.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ne.findIndex((v) => v.label === t), s = Pe.findIndex((v) => v.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ne.map((v) => v.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Pe.map((v) => v.label)}`);
          return;
        }
        const d = Ne[l].coord, a = Pe[s].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const c = (v) => {
          const p = r.findIndex((h) => Math.abs(h[0] - d) < 1e-3 && Math.abs(h[1] - a) < 1e-3 && Math.abs(h[2] - v) < 1e-3);
          return p >= 0 ? p : (r.push([
            d,
            a,
            v
          ]), r.length - 1);
        }, i = n ? [
          Je.findIndex((v) => v.label === n)
        ] : Array.from({
          length: Je.length - 1
        }, (v, p) => p + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), w = c(Je[0].elev);
        b.has(w) || b.set(w, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let M = 0;
        for (const v of i) {
          if (v < 1 || v >= Je.length) continue;
          const p = c(Je[v - 1].elev), h = c(Je[v].elev);
          f.push([
            p,
            h
          ]), be.add(f.length - 1), Oe.set(f.length - 1, v - 1), M++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${M} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), M;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const d = Ne.findIndex((q) => q.label === t), a = Pe.findIndex((q) => q.label === o), r = Ne.findIndex((q) => q.label === n), f = Pe.findIndex((q) => q.label === l), c = Je.findIndex((q) => q.label === s);
        if (d < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (c < 1) {
          console.log(`Story "${s}" not found. Available: ${Je.filter((q) => q.label !== "Base").map((q) => q.label)}`);
          return;
        }
        const i = Ne[d].coord, b = Pe[a].coord, w = Ne[r].coord, M = Pe[f].coord, v = Je[c].elev, p = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], S = (q, N, g) => {
          const u = p.findIndex(($) => Math.abs($[0] - q) < 1e-3 && Math.abs($[1] - N) < 1e-3 && Math.abs($[2] - g) < 1e-3);
          return u >= 0 ? u : (p.push([
            q,
            N,
            g
          ]), p.length - 1);
        }, I = S(i, b, v), k = S(w, M, v);
        return h.push([
          I,
          k
        ]), Ce.add(h.length - 1), Oe.set(h.length - 1, c - 1), e.nodes.val = p, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, o, n, l, s, d) {
        var _a2;
        const a = Ne.findIndex((u) => u.label === t), r = Pe.findIndex((u) => u.label === o), f = Je.findIndex((u) => u.label === n), c = Ne.findIndex((u) => u.label === l), i = Pe.findIndex((u) => u.label === s), b = Je.findIndex((u) => u.label === d);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (c < 0 || i < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const w = Ne[a].coord, M = Pe[r].coord, v = Je[f].elev, p = Ne[c].coord, h = Pe[i].coord, S = Je[b].elev, I = [
          ...e.nodes.val
        ], k = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], q = (u, $, z) => {
          const C = I.findIndex((y) => Math.abs(y[0] - u) < 1e-3 && Math.abs(y[1] - $) < 1e-3 && Math.abs(y[2] - z) < 1e-3);
          return C >= 0 ? C : (I.push([
            u,
            $,
            z
          ]), I.length - 1);
        }, N = q(w, M, v), g = q(p, h, S);
        return k.push([
          N,
          g
        ]), Oe.set(k.length - 1, Math.min(f, b)), e.nodes.val = I, e.elements.val = k, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${d}`), k.length - 1;
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
        Ye.clear();
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
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((W) => parseFloat(W) / 100), [c, i] = d.split("x").map((W) => parseFloat(W) / 100), b = [
          0
        ];
        for (const W of o) b.push(b[b.length - 1] + W);
        const w = [
          0
        ];
        for (const W of n) w.push(w[w.length - 1] + W);
        const M = [
          0
        ];
        for (const W of l) M.push(M[M.length - 1] + W);
        const v = b.length, p = w.length, h = M.length, S = l.length, I = [], k = {};
        for (let W = 0; W < h; W++) for (let re = 0; re < p; re++) for (let de = 0; de < v; de++) k[`${de},${W},${re}`] = I.length, I.push([
          b[de],
          M[W],
          w[re]
        ]);
        const q = [], N = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let W = 0; W < S; W++) for (let re = 0; re < p; re++) for (let de = 0; de < v; de++) {
          const U = q.length;
          q.push([
            k[`${de},${W},${re}`],
            k[`${de},${W + 1},${re}`]
          ]), N.add(U), u.set(U, W);
        }
        for (let W = 1; W < h; W++) for (let re = 0; re < p; re++) for (let de = 0; de < v - 1; de++) {
          const U = q.length;
          q.push([
            k[`${de},${W},${re}`],
            k[`${de + 1},${W},${re}`]
          ]), g.add(U), u.set(U, W - 1);
        }
        for (let W = 1; W < h; W++) for (let re = 0; re < v; re++) for (let de = 0; de < p - 1; de++) {
          const U = q.length;
          q.push([
            k[`${re},${W},${de}`],
            k[`${re},${W},${de + 1}`]
          ]), g.add(U), u.set(U, W - 1);
        }
        const z = 15100 * Math.sqrt(a) * 10, C = z / (2 * (1 + 0.2)), y = r * f, E = r * f ** 3 / 12, m = f * r ** 3 / 12, A = r * f * (r ** 2 + f ** 2) / 12, F = c * i, H = c * i ** 3 / 12, J = i * c ** 3 / 12, Q = c * i * (c ** 2 + i ** 2) / 12, Z = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
        for (let W = 0; W < q.length; W++) Z.set(W, z), te.set(W, C), N.has(W) ? (j.set(W, y), he.set(W, E), ze.set(W, m), fe.set(W, A), R.set(W, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (j.set(W, F), he.set(W, H), ze.set(W, J), fe.set(W, Q), R.set(W, {
          type: "rect",
          b: c,
          h: i,
          name: `V${d}`
        }));
        const oe = /* @__PURE__ */ new Map();
        for (let W = 0; W < p; W++) for (let re = 0; re < v; re++) oe.set(k[`${re},0,${W}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = I, e.elements.val = q, e.nodeInputs.val = {
          supports: oe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: te,
          areas: j,
          momentsOfInertiaZ: he,
          momentsOfInertiaY: ze,
          torsionalConstants: fe,
          sectionShapes: R
        }, be = N, Ce = g, Oe = u, Ne = b.map((W, re) => ({
          label: String.fromCharCode(65 + re),
          coord: W
        })), Pe = w.map((W, re) => ({
          label: `${re + 1}`,
          coord: W
        })), et = M[M.length - 1], Wo(Ne.map((W) => W.coord), Pe.map((W) => W.coord), et, Ne.map((W) => W.label), Pe.map((W) => W.label));
        {
          const W = M.map((re, de) => ({
            name: de === 0 ? "Base" : `P${de}`,
            height: de > 0 ? re - M[de - 1] : 0,
            elev: re
          }));
          mn(W, b, w);
        }
        const se = we.querySelector("#cad3d-axis-buttons");
        if (se) {
          se.style.display = "flex";
          const W = Ne.map((de) => de.label), re = Pe.map((de) => de.label);
          se.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const de of W) se.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${de}">${de}</button>`;
          se.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const de of re) se.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${de}">${de}</button>`;
        }
        const ee = we.querySelector("#cad3d-floor-buttons");
        if (ee) {
          ee.style.display = "flex", ee.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let W = 0; W < S; W++) ee.innerHTML += `<button class="floor-btn" data-floor="${W}">P${W + 1}</button>`;
        }
        return Rt(b, w, M), Ve(), console.log(`Model3D: ${I.length}n ${q.length}e | ${v}x${p} grid, ${S} floors | COL${s} V${d} f'c=${a}`), {
          nodes: I.length,
          elements: q.length,
          columns: N.size,
          beams: g.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), be = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), Ne = [], Pe = [], et = 0, Jn(), Vn(), qt();
        const t = we.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Ve();
      },
      frame(t, o, n = 0, l = 0) {
        Ye.clear();
        const s = [];
        n > 0 && s.push(-n);
        let d = 0;
        s.push(d);
        for (const v of t) d += v, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let r = 0;
        for (const v of o) r += v, a.push(r);
        const f = (v) => n > 0 && v === 0 || l > 0 && v === s.length - 1, c = {}, i = [];
        for (let v = 0; v < a.length; v++) for (let p = 0; p < s.length; p++) v === 0 && f(p) || (c[`${p},${v}`] = i.length, i.push([
          s[p],
          0,
          a[v]
        ]));
        const b = [];
        be = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set();
        for (let v = 0; v < a.length - 1; v++) for (let p = 0; p < s.length; p++) f(p) || (be.add(b.length), b.push([
          c[`${p},${v}`],
          c[`${p},${v + 1}`]
        ]));
        for (let v = 1; v < a.length; v++) for (let p = 0; p < s.length - 1; p++) Ce.add(b.length), b.push([
          c[`${p},${v}`],
          c[`${p + 1},${v}`]
        ]);
        const w = /* @__PURE__ */ new Map(), M = at();
        for (let v = 0; v < s.length; v++) {
          if (f(v)) continue;
          const p = `${v},0`;
          c[p] !== void 0 && w.set(c[p], [
            ...M
          ]);
        }
        return e.nodes.val = i, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: w
        }), Ne = [
          ...s
        ], Pe = [
          0
        ], et = a[a.length - 1] || 0, setTimeout(() => {
          kt(), Wo(s, [
            0
          ]), zn(), Tn();
        }, 50), Ve(), {
          nodes: i.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, r = 0, f = 1) {
        Ye.clear();
        const c = [];
        s > 0 && c.push(-s), c.push(0);
        for (const u of t) c.push(c[c.length - 1] + u);
        d > 0 && c.push(c[c.length - 1] + d);
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of o) i.push(i[i.length - 1] + u);
        r > 0 && i.push(i[i.length - 1] + r);
        const b = [
          0
        ];
        for (const u of n) b.push(b[b.length - 1] + u);
        const w = (u) => s > 0 && u === 0 || d > 0 && u === c.length - 1, M = (u) => a > 0 && u === 0 || r > 0 && u === i.length - 1, v = (u, $) => w(u) || M($), p = [], h = {};
        for (let u = 0; u < b.length; u++) for (let $ = 0; $ < i.length; $++) for (let z = 0; z < c.length; z++) u === 0 && v(z, $) || (h[`${z},${$},${u}`] = p.length, p.push([
          c[z],
          i[$],
          b[u]
        ]));
        const S = p.length, I = [];
        be = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map();
        const k = [];
        for (let u = 0; u < b.length - 1; u++) for (let $ = 0; $ < i.length; $++) for (let z = 0; z < c.length; z++) v(z, $) || k.push({
          el: [
            h[`${z},${$},${u}`],
            h[`${z},${$},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, $], floor: z } of k) {
          if (f <= 1) {
            be.add(I.length), Oe.set(I.length, z), I.push([
              u,
              $
            ]);
            continue;
          }
          const C = p[u], y = p[$];
          let E = u;
          for (let m = 1; m < f; m++) {
            const A = m / f, F = p.length;
            p.push([
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
        Xe = /* @__PURE__ */ new Map();
        const q = [];
        for (let u = 1; u < b.length; u++) for (let $ = 0; $ < i.length; $++) for (let z = 0; z < c.length - 1; z++) q.push({
          el: [
            h[`${z},${$},${u}`],
            h[`${z + 1},${$},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: z
        });
        for (let u = 1; u < b.length; u++) for (let $ = 0; $ < c.length; $++) for (let z = 0; z < i.length - 1; z++) q.push({
          el: [
            h[`${$},${z},${u}`],
            h[`${$},${z + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: z
        });
        for (const { el: [u, $], floor: z, dir: C, bay: y } of q) {
          const E = p[u], m = p[$];
          let A = u;
          for (let H = 1; H < l; H++) {
            const J = H / l, Q = p.length;
            p.push([
              E[0] + (m[0] - E[0]) * J,
              E[1] + (m[1] - E[1]) * J,
              E[2] + (m[2] - E[2]) * J
            ]);
            const Z = I.length;
            Ce.add(Z), Oe.set(Z, z), Xe.set(Z, {
              dir: C,
              bay: y
            }), I.push([
              A,
              Q
            ]), A = Q;
          }
          const F = I.length;
          Ce.add(F), Oe.set(F, z), Xe.set(F, {
            dir: C,
            bay: y
          }), I.push([
            A,
            $
          ]);
        }
        if (ot = /* @__PURE__ */ new Set(), ue && qe > 0) {
          const u = ($, z, C) => {
            for (let E = 0; E < p.length; E++) if (Math.abs(p[E][0] - $) < 1e-6 && Math.abs(p[E][1] - z) < 1e-6 && Math.abs(p[E][2] - C) < 1e-6) return E;
            const y = p.length;
            return p.push([
              $,
              z,
              C
            ]), y;
          };
          for (let $ = 1; $ < b.length; $++) if (He === "x") for (let z = 0; z < i.length - 1; z++) {
            const C = i[z], y = i[z + 1];
            for (let E = 1; E <= qe; E++) {
              const m = C + E / (qe + 1) * (y - C), A = [];
              for (let F = 0; F < c.length; F++) A.push(u(c[F], m, b[$]));
              for (let F = 0; F < c.length - 1; F++) {
                const H = I.length;
                ot.add(H), Ce.add(H), Oe.set(H, $ - 1), Xe.set(H, {
                  dir: "x",
                  bay: F
                }), I.push([
                  A[F],
                  A[F + 1]
                ]);
              }
            }
          }
          else for (let z = 0; z < c.length - 1; z++) {
            const C = c[z], y = c[z + 1];
            for (let E = 1; E <= qe; E++) {
              const m = C + E / (qe + 1) * (y - C), A = [];
              for (let F = 0; F < i.length; F++) A.push(u(m, i[F], b[$]));
              for (let F = 0; F < i.length - 1; F++) {
                const H = I.length;
                ot.add(H), Ce.add(H), Oe.set(H, $ - 1), Xe.set(H, {
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
        const N = /* @__PURE__ */ new Map(), g = at();
        for (let u = 0; u < i.length; u++) for (let $ = 0; $ < c.length; $++) v($, u) || N.set(h[`${$},${u},0`], [
          ...g
        ]);
        Be = /* @__PURE__ */ new Set();
        for (const u of Ge) {
          const $ = b.length - 1, z = u.floors.includes(-1) ? Array.from({
            length: $
          }, (C, y) => y) : u.floors.filter((C) => C < $);
          for (const C of z) {
            let y, E, m, A;
            u.dir === "x" ? (y = u.bay, m = u.bay + 1, E = u.axisIdx, A = u.axisIdx) : (y = u.axisIdx, m = u.axisIdx, E = u.bay, A = u.bay + 1);
            const F = h[`${y},${E},${C}`], H = h[`${y},${E},${C + 1}`];
            let J, Q;
            if (u.dir === "x" ? (J = h[`${m},${A},${C}`], Q = h[`${m},${A},${C + 1}`]) : (J = h[`${m},${A},${C}`], Q = h[`${m},${A},${C + 1}`]), F === void 0 || J === void 0 || H === void 0 || Q === void 0) continue;
            const Z = $t, te = gt, j = p[F], he = p[J], ze = p[H], fe = p[Q], R = [];
            for (let oe = 0; oe <= te; oe++) {
              const se = [], ee = oe / te;
              for (let W = 0; W <= Z; W++) {
                const re = W / Z, de = (1 - ee) * ((1 - re) * j[0] + re * he[0]) + ee * ((1 - re) * ze[0] + re * fe[0]), U = (1 - ee) * ((1 - re) * j[1] + re * he[1]) + ee * ((1 - re) * ze[1] + re * fe[1]), Ee = (1 - ee) * ((1 - re) * j[2] + re * he[2]) + ee * ((1 - re) * ze[2] + re * fe[2]);
                oe === 0 && W === 0 ? se.push(F) : oe === 0 && W === Z ? se.push(J) : oe === te && W === 0 ? se.push(H) : oe === te && W === Z ? se.push(Q) : (se.push(p.length), p.push([
                  de,
                  U,
                  Ee
                ]));
              }
              R.push(se);
            }
            for (let oe = 0; oe < te; oe++) for (let se = 0; se < Z; se++) {
              const ee = R[oe][se], W = R[oe][se + 1], re = R[oe + 1][se + 1], de = R[oe + 1][se], U = I.length;
              Be.add(U), Oe.set(U, C), I.push([
                ee,
                W,
                re,
                de
              ]);
            }
            if (C === 0) for (let oe = 0; oe <= Z; oe++) {
              const se = R[0][oe];
              se >= S && N.set(se, [
                ...g
              ]);
            }
          }
        }
        if (Mt = /* @__PURE__ */ new Set(), Qe) {
          const u = l, $ = l, z = /* @__PURE__ */ new Map(), C = (y, E, m) => `${Math.round(y * 1e4)},${Math.round(E * 1e4)},${Math.round(m * 1e4)}`;
          for (let y = 0; y < p.length; y++) z.set(C(p[y][0], p[y][1], p[y][2]), y);
          for (let y = 1; y < b.length; y++) {
            const E = b[y];
            for (let m = 0; m < c.length - 1; m++) for (let A = 0; A < i.length - 1; A++) {
              const F = c[m], H = c[m + 1], J = i[A], Q = i[A + 1], Z = [];
              for (let te = 0; te <= $; te++) {
                const j = [];
                for (let he = 0; he <= u; he++) {
                  const ze = F + he / u * (H - F), fe = J + te / $ * (Q - J);
                  if (te === 0 && he === 0) j.push(h[`${m},${A},${y}`]);
                  else if (te === 0 && he === u) j.push(h[`${m + 1},${A},${y}`]);
                  else if (te === $ && he === 0) j.push(h[`${m},${A + 1},${y}`]);
                  else if (te === $ && he === u) j.push(h[`${m + 1},${A + 1},${y}`]);
                  else {
                    const R = C(ze, fe, E), oe = z.get(R);
                    if (oe !== void 0) j.push(oe);
                    else {
                      const se = p.length;
                      p.push([
                        ze,
                        fe,
                        E
                      ]), z.set(R, se), j.push(se);
                    }
                  }
                }
                Z.push(j);
              }
              for (let te = 0; te < $; te++) for (let j = 0; j < u; j++) {
                const he = Z[te][j], ze = Z[te][j + 1], fe = Z[te + 1][j + 1], R = Z[te + 1][j], oe = I.length;
                Mt.add(oe), Oe.set(oe, y - 1), I.push([
                  he,
                  ze,
                  fe,
                  R
                ]);
              }
            }
          }
        }
        if (Tt && ct) {
          const u = ct === "all" || ct === "x" || ct === "perimeter", $ = ct === "all" || ct === "y" || ct === "perimeter", z = b.length - 1;
          for (let C = 0; C < z; C++) {
            if (u) for (let y = 0; y < i.length; y++) {
              if (ct === "perimeter" && y !== 0 && y !== i.length - 1) continue;
              const E = Math.floor((c.length - 1) / 2);
              for (let m = 0; m < c.length - 1; m++) {
                if (ct === "perimeter" && m !== E || v(m, y) || v(m + 1, y)) continue;
                const A = h[`${m},${y},${C}`], F = h[`${m + 1},${y},${C + 1}`], H = h[`${m + 1},${y},${C}`], J = h[`${m},${y},${C + 1}`];
                A !== void 0 && F !== void 0 && (I.push([
                  A,
                  F
                ]), Oe.set(I.length - 1, C)), H !== void 0 && J !== void 0 && (I.push([
                  H,
                  J
                ]), Oe.set(I.length - 1, C));
              }
            }
            if ($) for (let y = 0; y < c.length; y++) {
              if (ct === "perimeter" && y !== 0 && y !== c.length - 1) continue;
              const E = Math.floor((i.length - 1) / 2);
              for (let m = 0; m < i.length - 1; m++) {
                if (ct === "perimeter" && m !== E || v(y, m) || v(y, m + 1)) continue;
                const A = h[`${y},${m},${C}`], F = h[`${y},${m + 1},${C + 1}`], H = h[`${y},${m + 1},${C}`], J = h[`${y},${m},${C + 1}`];
                A !== void 0 && F !== void 0 && (I.push([
                  A,
                  F
                ]), Oe.set(I.length - 1, C)), H !== void 0 && J !== void 0 && (I.push([
                  H,
                  J
                ]), Oe.set(I.length - 1, C));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = I, e.nodeInputs && (e.nodeInputs.val = {
          supports: N
        }), Ne = [
          ...c
        ], Pe = [
          ...i
        ], et = b[b.length - 1] || 0, setTimeout(() => {
          kt(), Wo(c, i), zn(), Tn();
        }, 50), Ve(), {
          nodes: p.length,
          elements: I.length,
          nJointNodes: S
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        Ye.clear();
        const a = [], r = [], f = (M) => n + l * (1 - Math.pow(2 * M / t - 1, 2)), c = [], i = d + 1;
        for (let M = 0; M < i; M++) {
          const v = [], p = o / d * M;
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
            const S = t / s * h;
            v.push(a.length), a.push([
              S,
              p,
              f(S)
            ]);
          }
          v.push(a.length), a.push([
            t,
            p,
            n
          ]), c.push(v);
        }
        for (let M = 0; M < i; M++) {
          const v = c[M];
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
        for (let M = 0; M < d; M++) for (let v = 2; v < c[0].length; v++) r.push([
          c[M][v],
          c[M + 1][v]
        ]);
        for (let M = 0; M < d; M++) for (let v = 2; v < c[0].length - 1; v += 2) r.push([
          c[M][v],
          c[M + 1][v + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), w = at();
        for (let M = 0; M < i; M++) b.set(c[M][0], [
          ...w
        ]), b.set(c[M][1], [
          ...w
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), Ve(), {
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
            Ye.clear(), Ue("truss"), Zn();
            break;
          }
          case "beams": {
            Ye.clear(), Ue("beams"), Qn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Ye.clear(), Ue("3d"), es();
            break;
          }
          case "portico": {
            Ue("frame"), Se();
            break;
          }
          case "edificio": {
            Ue("edificio"), Le.colMat = 0, Le.vigaMat = 0, Le.colShape = 0, Ge = [], Qe = false, ue = false, Tt = false, Se();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ue("edificio"), Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Ge = [], ue = true, qe = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = pe.reduce((l, s) => l + s, 0) / pe.length;
            He = o >= n ? "y" : "x", Qe = true, je = 0.08, Tt = false, Se();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Ue("edificio"), Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Ge = [], ue = true, qe = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = pe.reduce((l, s) => l + s, 0) / pe.length;
            He = o >= n ? "y" : "x", Qe = true, je = 0.08, Tt = true, ct = "perimeter", Se();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ue("edificio"), Le.colMat = 0, Le.vigaMat = 0, Le.colShape = 0, ue = false;
            const o = Math.round(((_a2 = ie.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = ie.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Ge = [
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
            ], Qe = true, je = 0.15, Se();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ue("edificio"), Le.colMat = 2, Le.vigaMat = 0, ue = false;
            const o = Math.round(((_c = ie.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = ie.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Ge = [
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
            ], Qe = true, je = 0.12, Se();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ue("edificio"), ie.nPisos && (ie.nPisos.val = 1), ie.hPiso && (ie.hPiso.val = 4.5), ie.nVanosX && (ie.nVanosX.val = 3), ie.nVanosY && (ie.nVanosY.val = 2), ie.nSubViga && (ie.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], pe = [
              5,
              5
            ], Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Ge = [], ue = true, qe = 2, He = ce[0] >= pe[0] ? "y" : "x", Qe = true, je = 0.08, pt = 3, it = 3, Se();
            break;
          }
          case "galpon": {
            Ue("galpon"), Se();
            break;
          }
          case "barra": {
            Ue("barra"), Se();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ye.clear(), Ue("placa-3q"), ts();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ye.clear(), Ue("placa-q4"), os();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ye.clear(), Ue("losa-rect"), ns();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ye.clear(), Ue("losa-plana"), ss();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ye.clear(), Ue("viga-alta"), as();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ye.clear(), Ue("muro-contencion"), ls();
            break;
          }
          case "zapata":
          case "footing": {
            Ye.clear(), Ue("zapata"), rs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ye.clear(), Ue("placa-orificios"), is();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ye.clear(), Ue("col-placa"), cs();
            break;
          }
          case "talud":
          case "slope": {
            Ye.clear(), Ue("talud"), ds();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ye.clear(), Ue("eiffel"), Is();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ye.clear(), Ue("arco"), ks();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ye.clear(), Ue("puente"), zs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ye.clear(), Ue("twisted"), Ts();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ye.clear(), Ue("burj"), Ls();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ye.clear(), Ue("opera"), As();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ye.clear(), Ue("diagrid"), Cs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, r = 3e7, f = 0.3, c = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][c]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const b = performance.now(), w = _n({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: c
        }), M = performance.now() - b;
        console.log(`Solved in ${M.toFixed(1)} ms`), console.log(`w_max = ${w.maxW.toExponential(6)}`), console.log(`w_center = ${(w.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${w.maxMxx.toExponential(4)}, Myy_max = ${w.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${w.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${w.maxQx.toExponential(4)}, Qy_max = ${w.maxQy.toExponential(4)}`);
        const v = w.nodeResults.map((k) => [
          k.x,
          k.y,
          0
        ]), p = w.elementResults.map((k) => [
          ...k.nodes
        ]);
        e.nodes.val = v, e.elements.val = p;
        const h = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((k, q) => {
          h.set(q, [
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
        const S = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((k, q) => {
          (k.x < 1e-10 || k.x > t - 1e-10 || k.y < 1e-10 || k.y > o - 1e-10) && S.set(q, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const I = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const k = d * t * o / v.length;
          v.forEach((q, N) => {
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
          const k = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
          w.elementResults.forEach((g, u) => {
            k.set(u, [
              g.Mxx,
              g.Mxx,
              g.Mxx
            ]), q.set(u, [
              g.Myy,
              g.Myy,
              g.Myy
            ]), N.set(u, [
              g.Mxy,
              g.Mxy,
              g.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: k,
            bendingYY: q,
            bendingXY: N
          };
        }
        return setTimeout(() => kt(), 50), Ve(), w;
      },
      set(t, o) {
        ie[t] ? (ie[t].val = o, console.log(`${t} = ${o}`), to(), Se()) : lt[t] ? (lt[t].val = o, console.log(`${t} = ${o}`), to(), Se()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ie,
          ...lt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in ie) o[l] = ie[l].val;
          for (const l in lt) o[l] = lt[l].val;
          o.plateTheory = xt, o.supportType = Et;
          const n = an()[L];
          return n && n[Et] && (o.supportLabel = n[Et].label), console.table(o), o;
        }
        if (ie[t]) return ie[t].val;
        if (lt[t]) return lt[t].val;
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
        }[t.toLowerCase()] || 3), xt = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[xt] || xt}`), L.includes("placa") && (to(), Se());
      },
      setBc(t) {
        const o = an()[L];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        Et = t, Et >= o.length && (Et = 0), console.log(`Apoyo: ${o[Et].label} \u2192 DOFs: [${o[Et].dofs.map((n) => n ? "1" : "0").join(",")}]`), to(), Se();
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
        t && (x = t), o && (_ = o), T = Io(x, _);
        const n = we.querySelector("#cad3d-force-unit"), l = we.querySelector("#cad3d-length-unit");
        return n && (n.textContent = x), l && (l.textContent = _), L && Ue(L), console.log(`Unidades: ${T.label} | E=${T.E.toExponential(3)} ${T.stress}`), T.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Un() {
      return qa(T);
    }
    function Kn() {
      return Na(T);
    }
    let lt = {};
    function Ue(t) {
      var _a2, _b;
      L = t, js.val = true, Et = 0, Ae && wn(), ie = {};
      const o = Un()[t];
      if (o) for (const l of o) ie[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      lt = {};
      const n = Kn()[t];
      if (n) for (const l of n) lt[l.key] = {
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
      to(), setTimeout(() => {
        Qs(), Se();
      }, 50);
    }
    function X(t) {
      var _a2, _b;
      return ((_a2 = ie[t]) == null ? void 0 : _a2.val) ?? ((_b = lt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Se() {
      switch (L) {
        case "truss":
          Zn();
          break;
        case "beams":
          Qn();
          break;
        case "3d":
          es();
          break;
        case "frame": {
          const o = Math.round(X("nVanos")), n = X("spanV"), l = Math.round(X("nPisos")), s = X("hPiso");
          Ye.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(X("nPisos")), n = X("hPiso"), l = X("Lvix") || 0, s = X("Lvdx") || 0, d = X("Lviy") || 0, a = X("Lvdy") || 0, r = Math.max(1, Math.round(X("nSubViga") || 3)), f = Math.max(1, Math.round(X("nSubCol") || 1));
          Ye.building([
            ...ce
          ], [
            ...pe
          ], Array(o).fill(n), r, l, s, d, a, f);
          break;
        }
        case "galpon":
          Ye.galpon(X("span"), X("length"), X("height"), X("archRise"), Math.round(X("xDiv")), Math.round(X("yDiv")));
          break;
        case "barra":
          Ws();
          break;
        case "placa-3q":
          ts();
          break;
        case "placa-q4":
          os();
          break;
        case "losa-rect":
          ns();
          break;
        case "losa-plana":
          ss();
          break;
        case "viga-alta":
          as();
          break;
        case "muro-contencion":
          ls();
          break;
        case "zapata":
          rs();
          break;
        case "placa-orificios":
          is();
          break;
        case "col-placa":
          cs();
          break;
        case "talud":
          ds();
          break;
        case "eiffel":
          Is();
          break;
        case "arco":
          ks();
          break;
        case "puente":
          zs();
          break;
        case "twisted":
          Ts();
          break;
        case "burj":
          Ls();
          break;
        case "opera":
          As();
          break;
        case "diagrid":
          Cs();
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
        if (ne.size > 0 || V.size > 0 || G) {
          const o = e.elements.val, n = o.filter((l, s) => !(ne.has(s) || V.has(s) || G && !Y.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          po(), Sn();
        }, 30);
      }
    }
    function Zn() {
      const t = X("span"), o = Math.round(X("divisions")), n = X("height"), l = t / o, s = [], d = [];
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
      for (let i = 0; i < o; i++) d.push([
        i,
        i + 1
      ]);
      for (let i = 0; i < o; i++) d.push([
        a + i,
        a + i + 1
      ]);
      for (let i = 0; i <= o; i++) d.push([
        i,
        a + i
      ]);
      for (let i = 0; i < o; i++) i < o / 2 ? d.push([
        i,
        a + i + 1
      ]) : d.push([
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
      ]), f = (X("CM") ?? 0) + (X("CV") ?? 0), c = /* @__PURE__ */ new Map();
      if (f !== 0) for (let i = 0; i <= o; i++) c.set(i, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      }), Ve();
    }
    function Qn() {
      const t = X("width"), o = X("height"), n = X("Ex") ?? 0, l = (X("CM") ?? 0) + (X("CV") ?? 0), s = Math.max(1, Math.round(X("nSub") || 4)), d = [
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
      let c = 1;
      for (let b = 1; b < s; b++) {
        const w = b / s, M = d.length;
        d.push([
          r[0] + (f[0] - r[0]) * w,
          r[1] + (f[1] - r[1]) * w,
          r[2] + (f[2] - r[2]) * w
        ]), a.push([
          c,
          M
        ]), c = M;
      }
      a.push([
        c,
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
      else if (l !== 0 && n === 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || i.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || i.set(b, [
        b === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
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
      }), Ve();
    }
    function es() {
      const t = X("dx"), o = X("dy"), n = X("dz"), l = Math.round(X("stories")), s = Math.max(1, Math.round(X("nSub") || 3)), d = [];
      for (let p = 0; p <= l; p++) d.push([
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
      const a = d.length, r = [
        ...d
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
      const c = [];
      for (let p = 1; p <= l; p++) {
        const h = p * 4;
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
      for (const [p, h] of c) {
        const S = d[p], I = d[h];
        let k = p;
        for (let q = 1; q < s; q++) {
          const N = q / s, g = r.length;
          r.push([
            S[0] + (I[0] - S[0]) * N,
            S[1] + (I[1] - S[1]) * N,
            S[2] + (I[2] - S[2]) * N
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
      const b = X("Ex") ?? 0, w = (X("CM") ?? 0) + (X("CV") ?? 0), M = a - 2, v = /* @__PURE__ */ new Map();
      if (b !== 0 && w === 0) v.set(M, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (w !== 0 && b === 0) for (let p = 0; p < r.length; p++) i.has(p) || v.set(p, [
        0,
        0,
        w,
        0,
        0,
        0
      ]);
      else if (b !== 0 && w !== 0) for (let p = 0; p < r.length; p++) i.has(p) || v.set(p, [
        p === M ? b : 0,
        0,
        w,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: v
      }), Ve();
    }
    function Ws() {
      const t = X("L"), o = Math.round(X("nElem")), n = X("F"), l = t / o, s = [], d = [];
      for (let f = 0; f <= o; f++) s.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < o; f++) d.push([
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
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      }), Ve();
    }
    function ts() {
      const t = X("Lx") || 15, o = X("Ly") || 10, n = X("meshSize") || 0.5, l = X("q") || -3, s = X("t") || 1, d = X("E") || 3e7, a = X("nu") || 0.3, r = d / (2 * (1 + a)), f = xt === 1 ? "Membrana" : xt === 2 ? "Kirchhoff" : "Mindlin", { nodes: c, elements: i, boundaryIndices: b } = io({
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
      }), w = t * o, M = l * w / c.length, v = new Map(b.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(c.map((h, S) => [
        S,
        [
          0,
          0,
          M,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: v,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(i.map((h, S) => [
          S,
          d
        ])),
        elasticitiesOrthogonal: new Map(i.map((h, S) => [
          S,
          d
        ])),
        thicknesses: new Map(i.map((h, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(i.map((h, S) => [
          S,
          a
        ])),
        shearModuli: new Map(i.map((h, S) => [
          S,
          r
        ]))
      });
      try {
        const h = Pt(c, i, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const S = Ho(c, i, e.elementInputs.val, h);
        S && e.analyzeOutputs && (e.analyzeOutputs.val = S), console.log(`Plate 3Q [${f}]: ${c.length} nodes, ${i.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => kt(), 50), Ve();
    }
    function os() {
      const t = X("Lx") || 10, o = X("Ly") || 10, n = Math.round(X("nx") || 16), l = Math.round(X("ny") || 16), s = X("t") || 0.2, d = X("q") || -10, a = X("E") || 3e7, r = X("nu") || 0.3, f = Et === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[xt] ?? 0;
      return Ye.plateQ4(t, o, n, l, f, d, s, a, r, i);
    }
    function ns() {
      const t = X("a") || 6, o = X("b") || 4, n = Math.round(X("nx") || 12), l = Math.round(X("ny") || 8), s = X("t") || 0.1, d = X("q") || -10, a = X("E") || 35e6, r = X("nu") || 0.15, c = {
        1: 2,
        2: 1,
        3: 0
      }[xt] ?? 0, i = Ye.plateQ4(t, o, n, l, "simply-supported", d, s, a, r, c), b = a * s * s * s / (12 * (1 - r * r));
      let w = 0;
      for (let M = 1; M <= 19; M += 2) for (let v = 1; v <= 19; v += 2) {
        const p = M * M / (t * t) + v * v / (o * o);
        w += 1 / (M * v * p * p);
      }
      if (w *= 16 * Math.abs(d) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${w.toExponential(6)}`), i) {
        const M = Math.abs((Math.abs(i.centerW || 0) - w) / w * 100);
        console.log(`   WASM w_center = ${(i.centerW || 0).toExponential(6)}, error = ${M.toFixed(2)}%`);
      }
      return i;
    }
    function ss() {
      const t = X("t") || 0.2, o = X("q") || -10, n = X("E") || 35e6, l = X("nu") || 0.2, s = X("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = d.reduce((E, m) => E + m, 0), f = a.reduce((E, m) => E + m, 0), c = [
        0
      ];
      for (const E of d) c.push(c[c.length - 1] + E);
      const i = [
        0
      ];
      for (const E of a) i.push(i[i.length - 1] + E);
      const b = Math.max(2, Math.round(r / s)), w = Math.max(2, Math.round(f / s)), M = r / b, v = f / w, p = [];
      for (let E = 0; E <= w; E++) for (let m = 0; m <= b; m++) p.push([
        m * M,
        E * v
      ]);
      const h = [], S = /* @__PURE__ */ new Set();
      for (const E of c) for (const m of i) {
        let A = 1 / 0, F = 0;
        for (let H = 0; H < p.length; H++) {
          const J = Math.hypot(p[H][0] - E, p[H][1] - m);
          J < A && (A = J, F = H);
        }
        S.has(F) || (S.add(F), h.push({
          node: F,
          dof: 0,
          k: 1e15
        }));
      }
      const k = {
        1: 2,
        2: 1,
        3: 0
      }[xt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][k]}]: ${r}\xD7${f}m, ${b}\xD7${w} elem, ${S.size} columnas`);
      const q = performance.now(), N = _n({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: b,
        meshNy: w,
        bcType: "none",
        pressure: o,
        theoryType: k,
        springs: h
      }), g = performance.now() - q;
      console.log(`Solved in ${g.toFixed(1)} ms, w_max = ${N.maxW.toExponential(4)}`);
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
        const E = o * r * f / u.length;
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
      setTimeout(() => kt(), 50), Ve();
    }
    function as() {
      const t = X("L") || 4, o = X("H") || 2, n = X("t") || 0.1, l = X("E") || 2e7, s = X("nu") || 0.2, d = l / (2 * (1 + s)), a = X("q") || -100, r = X("b") || 0.8, f = X("meshSize") || 0.2, { nodes: c, elements: i, boundaryIndices: b } = io({
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
      }), w = c, M = 0.4, v = /* @__PURE__ */ new Map();
      for (let g = 0; g < w.length; g++) {
        const u = w[g][0], $ = w[g][1];
        Math.abs($) < 1e-6 && (u <= M + 1e-6 || u >= t - M - 1e-6) && v.set(g, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - r) / 2, h = p + r, S = [];
      for (let g = 0; g < w.length; g++) if (Math.abs(w[g][1] - o) < 1e-6) {
        const u = w[g][0];
        u >= p - 1e-6 && u <= h + 1e-6 && S.push(g);
      }
      const I = a * r / Math.max(S.length, 1), k = /* @__PURE__ */ new Map();
      for (const g of S) k.set(g, [
        0,
        I,
        0,
        0,
        0,
        0
      ]);
      const q = {
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
          d
        ]))
      }, N = {
        supports: v,
        loads: k
      };
      try {
        const g = Pt(w, i, N, q), u = Ho(w, i, q, g), $ = w.map((C) => [
          C[0],
          0,
          C[1]
        ]);
        if (e.nodes.val = $, e.elements.val = i, g && g.deformations) {
          const C = /* @__PURE__ */ new Map();
          g.deformations.forEach((y, E) => {
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
        g && g.deformations && g.deformations.forEach((C) => {
          const y = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          z = Math.max(z, y);
        }), console.log(`Viga Alta: ${w.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${z.toExponential(4)}`);
      } catch (g) {
        console.warn("Viga Alta analysis failed:", g.message);
      }
      setTimeout(() => kt(), 50), Ve();
    }
    function ls() {
      const t = X("H") || 4, o = X("B") || 3, n = X("tw") || 0.3, l = X("tb") || 0.4, s = X("meshSize") || 0.2, d = X("E") || 25e6, a = X("nu") || 0.2, r = d / (2 * (1 + a)), f = X("gamma") || 18, c = X("Ka") || 0.33, i = X("Es") || 5e4, b = X("nus") || 0.3, w = i / (2 * (1 + b)), M = X("kn") || 1e6, v = X("ks") || 1e4, p = X("gammaW") || 9.81, h = X("Hw") || 3.5, S = X("qs") || 0, I = Et, k = o * 0.3, q = o * 0.7, N = [
        [
          -k,
          0,
          0
        ],
        [
          q,
          0,
          0
        ],
        [
          q,
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
      let g = [], u = [], $ = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C;
      if (I === 0) {
        const m = io({
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
        g = m.nodes, u = m.elements;
        for (let F = 0; F < g.length; F++) Math.abs(g[F][1]) < 1e-6 && $.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const A = [];
        for (let F = 0; F < g.length; F++) {
          const H = g[F][0], J = g[F][1];
          Math.abs(H - n) < s * 0.6 && J >= l - 1e-6 && A.push({
            idx: F,
            y: J
          });
        }
        A.sort((F, H) => F.y - H.y);
        for (let F = 0; F < A.length; F++) {
          const { idx: H, y: J } = A[F], Q = l + t - J, Z = c * f * Q + c * S;
          let te = s;
          F > 0 && F < A.length - 1 ? te = (A[F + 1].y - A[F - 1].y) / 2 : F === 0 && A.length > 1 ? te = (A[1].y - A[0].y) / 2 : F === A.length - 1 && A.length > 1 && (te = (A[F].y - A[F - 1].y) / 2);
          const j = Z * te;
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
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, H) => [
            H,
            d
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
        const m = q, A = l + t;
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
          ], H = Math.max(3, Math.ceil((A - l) / s)), J = [];
          for (let U = 0; U <= H; U++) J.push([
            n,
            l + U * (A - l) / H,
            0
          ]);
          const Q = io({
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
            maxMeshSize: s
          });
          g = Q.nodes, u = Q.elements;
          const Z = s * 0.4, te = [];
          for (let U = 0; U < g.length; U++) {
            const Ee = g[U][0], De = g[U][1];
            Math.abs(Ee - n) < Z && De >= l - Z && te.push(U);
          }
          te.sort((U, Ee) => g[U][1] - g[Ee][1]);
          const j = [
            te[0]
          ];
          for (let U = 1; U < te.length; U++) {
            const Ee = g[te[U]][1] - g[j[j.length - 1]][1];
            Math.abs(Ee) > s * 0.05 && j.push(te[U]);
          }
          te.length = 0, te.push(...j);
          const he = /* @__PURE__ */ new Map();
          for (const U of te) {
            const Ee = g.length;
            g.push([
              g[U][0],
              g[U][1],
              g[U][2]
            ]), he.set(U, Ee);
          }
          const ze = u.length, fe = [];
          for (let U = 0; U < ze; U++) {
            const Ee = u[U], De = (g[Ee[0]][0] + g[Ee[1]][0] + g[Ee[2]][0]) / 3, st = (g[Ee[0]][1] + g[Ee[1]][1] + g[Ee[2]][1]) / 3, tt = De >= -k && De <= q && st >= 0 && st <= l, jt = De >= 0 && De <= n && st >= l && st <= l + t, Wt = tt || jt;
            if (fe.push(!Wt), !Wt) for (let _t = 0; _t < Ee.length; _t++) {
              const Kt = he.get(Ee[_t]);
              Kt !== void 0 && (Ee[_t] = Kt);
            }
          }
          const R = u.length;
          for (let U = 0; U < te.length - 1; U++) {
            const Ee = te[U], De = te[U + 1], st = he.get(Ee), tt = he.get(De);
            u.push([
              De,
              Ee,
              st,
              tt
            ]);
          }
          const oe = u.length - R, se = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
          for (let U = 0; U < ze; U++) fe[U] ? (se.set(U, i), ee.set(U, i), re.set(U, b), de.set(U, w), W.set(U, 1)) : (se.set(U, d), ee.set(U, d), re.set(U, a), de.set(U, r), W.set(U, 1));
          for (let U = R; U < u.length; U++) se.set(U, M), ee.set(U, 0), re.set(U, 0), de.set(U, v), W.set(U, 0);
          C = {
            elasticities: se,
            elasticitiesOrthogonal: ee,
            thicknesses: W,
            poissonsRatios: re,
            shearModuli: de
          };
          for (let U = 0; U < g.length; U++) {
            const Ee = g[U][0], De = g[U][1];
            Math.abs(De) < 1e-6 ? $.set(U, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ee - m) < s * 0.1 && $.set(U, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let U = 0; U < ze; U++) {
            if (!fe[U]) continue;
            const Ee = u[U], De = g[Ee[0]], st = g[Ee[1]], tt = g[Ee[2]], jt = Math.abs((st[0] - De[0]) * (tt[1] - De[1]) - (tt[0] - De[0]) * (st[1] - De[1])) / 2, Wt = -f * jt / 3;
            for (const _t of Ee) {
              const Kt = z.get(_t) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Kt[1] += Wt, z.set(_t, Kt);
            }
          }
          if (S > 0) {
            const U = [];
            for (let Ee = 0; Ee < g.length; Ee++) {
              const De = g[Ee][0], st = g[Ee][1];
              Math.abs(st - A) < s * 0.1 && De > n - 1e-6 && U.push({
                idx: Ee,
                x: De
              });
            }
            U.sort((Ee, De) => Ee.x - De.x);
            for (let Ee = 0; Ee < U.length; Ee++) {
              let De = s;
              Ee > 0 && Ee < U.length - 1 ? De = (U[Ee + 1].x - U[Ee - 1].x) / 2 : Ee === 0 && U.length > 1 ? De = (U[1].x - U[0].x) / 2 : Ee === U.length - 1 && U.length > 1 && (De = (U[Ee].x - U[Ee - 1].x) / 2);
              const st = -S * De, tt = z.get(U[Ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              tt[1] += st, z.set(U[Ee].idx, tt);
            }
          }
          console.log(`  Interfaz Goodman: ${te.length} nodos interfaz, ${oe} elem interfaz, kn=${M}, ks=${v}`);
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
          ], J = io({
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
          g = J.nodes, u = J.elements;
          const Q = (R) => {
            const oe = (g[R[0]][0] + g[R[1]][0] + g[R[2]][0]) / 3, se = (g[R[0]][1] + g[R[1]][1] + g[R[2]][1]) / 3, ee = oe >= -k && oe <= q && se >= 0 && se <= l, W = oe >= 0 && oe <= n && se >= l && se <= l + t;
            return ee || W;
          }, Z = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), fe = [];
          for (let R = 0; R < u.length; R++) {
            const oe = Q(u[R]);
            fe.push(!oe), oe ? (Z.set(R, d), te.set(R, d), he.set(R, a), ze.set(R, r), j.set(R, 1)) : (Z.set(R, i), te.set(R, i), he.set(R, b), ze.set(R, w), j.set(R, 1));
          }
          C = {
            elasticities: Z,
            elasticitiesOrthogonal: te,
            thicknesses: j,
            poissonsRatios: he,
            shearModuli: ze
          };
          for (let R = 0; R < g.length; R++) {
            const oe = g[R][0], se = g[R][1];
            Math.abs(se) < 1e-6 ? $.set(R, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(oe - m) < s * 0.1 && $.set(R, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let R = 0; R < u.length; R++) {
            if (!fe[R]) continue;
            const oe = u[R], se = g[oe[0]], ee = g[oe[1]], W = g[oe[2]], re = Math.abs((ee[0] - se[0]) * (W[1] - se[1]) - (W[0] - se[0]) * (ee[1] - se[1])) / 2, de = -f * re / 3;
            for (const U of oe) {
              const Ee = z.get(U) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ee[1] += de, z.set(U, Ee);
            }
          }
          if (S > 0) {
            const R = [];
            for (let oe = 0; oe < g.length; oe++) {
              const se = g[oe][0], ee = g[oe][1];
              Math.abs(ee - A) < s * 0.1 && se > n - 1e-6 && R.push({
                idx: oe,
                x: se
              });
            }
            R.sort((oe, se) => oe.x - se.x);
            for (let oe = 0; oe < R.length; oe++) {
              let se = s;
              oe > 0 && oe < R.length - 1 ? se = (R[oe + 1].x - R[oe - 1].x) / 2 : oe === 0 && R.length > 1 ? se = (R[1].x - R[0].x) / 2 : oe === R.length - 1 && R.length > 1 && (se = (R[oe].x - R[oe - 1].x) / 2);
              const ee = -S * se, W = z.get(R[oe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              W[1] += ee, z.set(R[oe].idx, W);
            }
          }
        }
      }
      if (I === 3) {
        const m = io({
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
        g = m.nodes, u = m.elements;
        for (let Q = 0; Q < g.length; Q++) Math.abs(g[Q][1]) < 1e-6 && $.set(Q, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const A = l + t, F = Math.min(h, t), H = A - F, J = [];
        for (let Q = 0; Q < g.length; Q++) {
          const Z = g[Q][0], te = g[Q][1];
          Math.abs(Z - n) < s * 0.6 && te >= l - 1e-6 && J.push({
            idx: Q,
            y: te
          });
        }
        J.sort((Q, Z) => Q.y - Z.y);
        for (let Q = 0; Q < J.length; Q++) {
          const { idx: Z, y: te } = J[Q], j = Math.max(0, A - te);
          if (j <= 0 || te < H - 1e-6) continue;
          const he = Math.min(j, F), ze = p * he;
          let fe = s;
          Q > 0 && Q < J.length - 1 ? fe = (J[Q + 1].y - J[Q - 1].y) / 2 : Q === 0 && J.length > 1 ? fe = (J[1].y - J[0].y) / 2 : Q === J.length - 1 && J.length > 1 && (fe = (J[Q].y - J[Q - 1].y) / 2);
          const R = ze * fe;
          Math.abs(R) > 1e-10 && z.set(Z, [
            R,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        C = {
          elasticities: new Map(u.map((Q, Z) => [
            Z,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((Q, Z) => [
            Z,
            d
          ])),
          thicknesses: new Map(u.map((Q, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(u.map((Q, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(u.map((Q, Z) => [
            Z,
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
        const m = Pt(g, u, y, C), A = u.filter((j) => j.length === 3), F = {};
        for (const j of Object.keys(C)) {
          const he = C[j];
          if (he && he instanceof Map) {
            const ze = /* @__PURE__ */ new Map();
            let fe = 0;
            for (let R = 0; R < u.length; R++) u[R].length === 3 && (he.has(R) && ze.set(fe, he.get(R)), fe++);
            F[j] = ze;
          }
        }
        const H = Ho(g, A, F, m), J = g.map((j) => [
          j[0],
          0,
          j[1]
        ]);
        if (e.nodes.val = J, e.elements.val = A, m && m.deformations) {
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
        const Q = /* @__PURE__ */ new Map();
        $.forEach((j, he) => Q.set(he, j));
        const Z = /* @__PURE__ */ new Map();
        z.forEach((j, he) => Z.set(he, [
          j[0],
          j[2],
          j[1],
          j[3],
          j[5],
          j[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: Q,
          loads: Z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let te = 0;
        m && m.deformations && m.deformations.forEach((j) => {
          const he = Math.sqrt(j[0] * j[0] + j[1] * j[1] + j[2] * j[2]);
          te = Math.max(te, he);
        }), console.log(`Muro Contencion [${E[I]}]: ${g.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${c}, gamma=${f}, qs=${S}`), I === 1 && console.log(`  Es=${i}, nus=${b}`), I === 2 && console.log(`  Es=${i}, nus=${b}, kn=${M}, ks=${v}`), I === 3 && console.log(`  gammaW=${p}, Hw=${h}`), console.log(`  max|u| = ${te.toExponential(4)}`);
      } catch (m) {
        console.warn("Muro Contencion failed:", m.message);
      }
      setTimeout(() => kt(), 50), Ve();
    }
    function rs() {
      const t = X("Lx") || 2, o = X("Ly") || 2, n = X("t") || 0.5, l = X("colA") || 0.4, s = X("colH") || 1.5, d = Math.round(X("nx") || 8), a = Math.round(X("ny") || 8), r = X("E") || 25e6, f = X("nu") || 0.2, c = X("P") || -500, i = X("Mx") || 0, b = X("My") || 0, w = X("ks") || 2e4, M = t / d, v = o / a, p = t / 2, h = o / 2, S = l / 2, I = [];
      for (let $ = 0; $ <= a; $++) for (let z = 0; z <= d; z++) {
        const C = $ * (d + 1) + z;
        let y = M, E = v;
        (z === 0 || z === d) && (y = M / 2), ($ === 0 || $ === a) && (E = v / 2), I.push({
          node: C,
          dof: 0,
          k: w * y * E
        });
      }
      let k = 0;
      for (let $ = 0; $ <= a; $++) for (let z = 0; z <= d; z++) Math.abs(z * M - p) <= S + 1e-6 && Math.abs($ * v - h) <= S + 1e-6 && k++;
      const q = c / Math.max(k, 1), N = [];
      for (let $ = 0; $ <= a; $++) for (let z = 0; z <= d; z++) {
        const C = z * M, y = $ * v;
        Math.abs(C - p) <= S + 1e-6 && Math.abs(y - h) <= S + 1e-6 && N.push({
          node: $ * (d + 1) + z,
          dof: 0,
          value: q
        });
      }
      if (Math.abs(i) > 1e-6) {
        const $ = S > 1e-6 ? S : v, z = i / $;
        for (let C = 0; C <= a; C++) for (let y = 0; y <= d; y++) {
          const E = y * M, m = C * v;
          if (Math.abs(E - p) <= S + 1e-6 && Math.abs(m - h) <= S + 1e-6) {
            const A = m - h;
            if (Math.abs(A) > 1e-6) {
              const F = A > 0 ? 1 : -1;
              N.push({
                node: C * (d + 1) + y,
                dof: 0,
                value: F * z / k * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const $ = S > 1e-6 ? S : M, z = b / $;
        for (let C = 0; C <= a; C++) for (let y = 0; y <= d; y++) {
          const E = y * M, m = C * v;
          if (Math.abs(E - p) <= S + 1e-6 && Math.abs(m - h) <= S + 1e-6) {
            const A = E - p;
            if (Math.abs(A) > 1e-6) {
              const F = A > 0 ? 1 : -1;
              N.push({
                node: C * (d + 1) + y,
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
      }[xt] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${c}, Mx=${i}, My=${b}, ks=${w}`);
      try {
        const $ = _n({
          E: r,
          nu: f,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: d,
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
          p - S,
          h - S,
          0
        ]), z.push([
          p + S,
          h - S,
          0
        ]), z.push([
          p + S,
          h + S,
          0
        ]), z.push([
          p - S,
          h + S,
          0
        ]), z.push([
          p - S,
          h - S,
          s
        ]), z.push([
          p + S,
          h - S,
          s
        ]), z.push([
          p + S,
          h + S,
          s
        ]), z.push([
          p - S,
          h + S,
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
        $.nodeResults.forEach((H, J) => {
          E.set(J, [
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
        $.nodeResults.forEach((H, J) => {
          const Q = H.x, Z = H.y;
          (Q < 1e-6 || Q > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && m.set(J, [
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
          c / 4,
          0,
          0,
          0
        ]), A.set(C + 5, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), A.set(C + 6, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), A.set(C + 7, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: m,
          loads: A
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const H = $.elementResults.length, J = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          $.elementResults.forEach((te, j) => {
            J.set(j, [
              te.Mxx,
              te.Mxx,
              te.Mxx
            ]), Q.set(j, [
              te.Myy,
              te.Myy,
              te.Myy
            ]), Z.set(j, [
              te.Mxy,
              te.Mxy,
              te.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: J,
            bendingYY: Q,
            bendingXY: Z
          };
        }
        const F = nt();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch ($) {
        console.warn("Zapata solver failed:", $.message);
      }
      setTimeout(() => kt(), 50), Ve();
    }
    function is() {
      const t = X("Lx") || 0.4, o = X("Ly") || 0.4, n = X("t") || 0.025, l = X("dBolt") || 0.022, s = X("sx") || 0.28, d = X("sy") || 0.28, a = X("colA") || 0.2, r = X("meshSize") || 8e-3, f = X("E") || 2e8, c = X("nu") || 0.3, i = f / (2 * (1 + c)), b = X("P") || -200, w = Math.round(X("nBolts") || 4), M = t / 2, v = o / 2, p = l / 2, h = a / 2, S = [];
      w >= 4 && (S.push([
        M - s / 2,
        v - d / 2
      ]), S.push([
        M + s / 2,
        v - d / 2
      ]), S.push([
        M + s / 2,
        v + d / 2
      ]), S.push([
        M - s / 2,
        v + d / 2
      ])), w >= 6 && (S.push([
        M,
        v - d / 2
      ]), S.push([
        M,
        v + d / 2
      ])), w >= 8 && (S.push([
        M - s / 2,
        v
      ]), S.push([
        M + s / 2,
        v
      ]));
      const { nodes: I, elements: k } = io({
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
      }), q = (E, m) => {
        for (const [A, F] of S) if ((E - A) * (E - A) + (m - F) * (m - F) < p * p) return true;
        return false;
      }, N = k.filter((E) => {
        const m = (I[E[0]][0] + I[E[1]][0] + I[E[2]][0]) / 3, A = (I[E[0]][1] + I[E[1]][1] + I[E[2]][1]) / 3;
        return !q(m, A);
      }), g = I, u = /* @__PURE__ */ new Map();
      for (let E = 0; E < g.length; E++) {
        const m = g[E][0], A = g[E][1];
        for (const [F, H] of S) {
          const J = Math.sqrt((m - F) * (m - F) + (A - H) * (A - H));
          J >= p * 0.7 && J <= p * 1.5 && u.set(E, [
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
      for (let E = 0; E < g.length; E++) {
        const m = g[E][0], A = g[E][1];
        Math.abs(m - M) <= h && Math.abs(A - v) <= h && z++;
      }
      const C = b / Math.max(z, 1);
      for (let E = 0; E < g.length; E++) {
        const m = g[E][0], A = g[E][1];
        if (Math.abs(m - M) <= h && Math.abs(A - v) <= h) {
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
          f
        ])),
        elasticitiesOrthogonal: new Map(N.map((E, m) => [
          m,
          f
        ])),
        thicknesses: new Map(N.map((E, m) => [
          m,
          n
        ])),
        poissonsRatios: new Map(N.map((E, m) => [
          m,
          c
        ])),
        shearModuli: new Map(N.map((E, m) => [
          m,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${w} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${N.length} triangulos, ${g.length} nodos`);
      try {
        const E = Pt(g, N, {
          supports: u,
          loads: $
        }, y), m = Ho(g, N, y, E);
        e.nodes.val = g, e.elements.val = N, E && e.deformOutputs && (e.deformOutputs.val = E), e.nodeInputs && (e.nodeInputs.val = {
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
      setTimeout(() => kt(), 50), Ve();
    }
    function cs() {
      const t = X("colB") || 0.3, o = X("colH") || 0.3, n = X("colT") || 8e-3, l = X("colLen") || 1.5, s = X("Lx") || 0.45, d = X("Ly") || 0.45, a = X("tPlaca") || 0.025, r = X("dBolt") || 0.022, f = X("sx") || 0.32, c = X("sy") || 0.32, i = Math.round(X("nSubColV") || 6), b = Math.round(X("nSubColH") || 4), w = Math.round(X("nSubPlaca") || 10), M = X("E") || 2e8, v = X("nu") || 0.3, p = M / (2 * (1 + v)), h = X("P") || -300, S = s / 2, I = d / 2, k = r / 2, q = t / 2, N = o / 2, g = [], u = [], $ = w, z = s / $, C = d / $, y = (ee, W) => W * ($ + 1) + ee;
      for (let ee = 0; ee <= $; ee++) for (let W = 0; W <= $; W++) g.push([
        W * z,
        ee * C,
        0
      ]);
      const E = [
        [
          S - f / 2,
          I - c / 2
        ],
        [
          S + f / 2,
          I - c / 2
        ],
        [
          S + f / 2,
          I + c / 2
        ],
        [
          S - f / 2,
          I + c / 2
        ]
      ], m = (ee, W) => {
        for (const [re, de] of E) if ((ee - re) * (ee - re) + (W - de) * (W - de) < k * k) return true;
        return false;
      }, A = u.length;
      for (let ee = 0; ee < $; ee++) for (let W = 0; W < $; W++) {
        const re = (W + 0.5) * z, de = (ee + 0.5) * C;
        m(re, de) || u.push([
          y(W, ee),
          y(W + 1, ee),
          y(W + 1, ee + 1),
          y(W, ee + 1)
        ]);
      }
      const F = u.length - A, H = i, J = b, Q = [
        [
          S - q,
          I - N
        ],
        [
          S + q,
          I - N
        ],
        [
          S + q,
          I + N
        ],
        [
          S - q,
          I + N
        ]
      ], Z = u.length, te = [
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
      ], j = (ee, W) => {
        for (let re = 0; re < ($ + 1) * ($ + 1); re++) if (Math.abs(g[re][0] - ee) < z * 0.3 && Math.abs(g[re][1] - W) < C * 0.3 && Math.abs(g[re][2]) < 1e-6) return re;
        return -1;
      };
      for (const [ee, W] of te) {
        const [re, de] = Q[ee], [U, Ee] = Q[W], De = [];
        for (let st = 0; st <= H; st++) {
          const tt = [], jt = st / H * l;
          for (let Wt = 0; Wt <= J; Wt++) {
            const _t = Wt / J, Kt = re + _t * (U - re), Oo = de + _t * (Ee - de);
            if (st === 0) {
              const We = j(Kt, Oo);
              if (We >= 0) {
                tt.push(We);
                continue;
              }
            }
            let Mo = -1;
            for (let We = 0; We < g.length; We++) if (Math.abs(g[We][0] - Kt) < 1e-6 && Math.abs(g[We][1] - Oo) < 1e-6 && Math.abs(g[We][2] - jt) < 1e-6) {
              Mo = We;
              break;
            }
            Mo >= 0 ? tt.push(Mo) : (tt.push(g.length), g.push([
              Kt,
              Oo,
              jt
            ]));
          }
          De.push(tt);
        }
        for (let st = 0; st < H; st++) for (let tt = 0; tt < J; tt++) u.push([
          De[st][tt],
          De[st][tt + 1],
          De[st + 1][tt + 1],
          De[st + 1][tt]
        ]);
      }
      const he = u.length - Z, ze = /* @__PURE__ */ new Map();
      for (let ee = 0; ee < ($ + 1) * ($ + 1); ee++) {
        const W = g[ee][0], re = g[ee][1];
        for (const [de, U] of E) {
          const Ee = Math.sqrt((W - de) * (W - de) + (re - U) * (re - U));
          Ee >= k * 0.5 && Ee <= k * 2 && ze.set(ee, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const fe = /* @__PURE__ */ new Map(), R = [];
      for (let ee = 0; ee < g.length; ee++) Math.abs(g[ee][2] - l) < 1e-6 && R.push(ee);
      const oe = h / Math.max(R.length, 1);
      for (const ee of R) fe.set(ee, [
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
      for (let ee = A; ee < A + F; ee++) se.elasticities.set(ee, M), se.poissonsRatios.set(ee, v), se.thicknesses.set(ee, a), se.shearModuli.set(ee, p);
      for (let ee = Z; ee < Z + he; ee++) se.elasticities.set(ee, M), se.poissonsRatios.set(ee, v), se.thicknesses.set(ee, n), se.shearModuli.set(ee, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${he} Q4 columna = ${u.length} total`), console.log(`  ${g.length} nodos, P=${h} kN`);
      try {
        const ee = Pt(g, u, {
          supports: ze,
          loads: fe
        }, se), W = Ho(g, u, se, ee);
        e.nodes.val = g, e.elements.val = u, ee && e.deformOutputs && (e.deformOutputs.val = ee), e.nodeInputs && (e.nodeInputs.val = {
          supports: ze,
          loads: fe
        }), e.elementInputs && (e.elementInputs.val = se), W && e.analyzeOutputs && (e.analyzeOutputs.val = W);
        let re = 0;
        (ee == null ? void 0 : ee.deformations) && ee.deformations.forEach((de) => {
          const U = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          re = Math.max(re, U);
        }), console.log(`  max|u| = ${re.toExponential(4)}`);
      } catch (ee) {
        console.warn("Col+Placa failed:", ee.message), e.nodes.val = g, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ze,
          loads: fe
        });
      }
      setTimeout(() => kt(), 50), Ve();
    }
    function ds() {
      const t = X("H") || 6, o = X("angle") || 45, n = X("bTop") || 3, l = X("bBot") || 3, s = X("meshSize") || 2, d = X("E") || 5e4, a = X("nu") || 0.3, r = X("gamma") || 18, f = X("c") || 15, c = X("phi") || 30, i = X("qs") || 0, b = t / Math.tan(o * Math.PI / 180), w = l + b + n, M = t, v = [
        [
          0,
          -M,
          0
        ],
        [
          w,
          -M,
          0
        ],
        [
          w,
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
      ], { nodes: p, elements: h } = io({
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
      }), S = p, I = [], k = /* @__PURE__ */ new Map();
      for (let N = 0; N < S.length; N++) {
        const g = S[N][0], u = S[N][1];
        Math.abs(u + M) < 1e-6 ? (I.push({
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
        ])) : (Math.abs(g) < 1e-6 || Math.abs(g - w) < 1e-6) && (I.push({
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
      const q = t - s * 0.3;
      try {
        const N = S.map((m) => [
          m[0],
          m[1]
        ]), g = h.map((m) => [
          m[0],
          m[1],
          m[2]
        ]), u = Ma({
          nodes: N,
          elements: g,
          E: d,
          nu: a,
          gamma: r,
          c: f,
          phi: c,
          thickness: 1,
          supports: I,
          surcharge: i,
          surfaceYThreshold: q
        }), $ = S.map((m) => [
          m[0],
          0,
          m[1]
        ]);
        e.nodes.val = $, e.elements.val = h;
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
        console.log(`Talud SRM: ${S.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${f} kPa, \u03C6=${c}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${y.toExponential(4)}`), console.log(`  max \u03B5_pl = ${E.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (N) {
        console.warn("Talud SRM failed:", N.message);
      }
      setTimeout(() => kt(), 50), Ve();
    }
    let eo = null, vt = null, lo = null;
    function Ys() {
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
    function mt(t) {
      const o = Do.find((n) => n.id === _);
      return t / o.toM;
    }
    function bt(t) {
      const o = Do.find((n) => n.id === _);
      return t * o.toM;
    }
    function vo(t) {
      const o = Wn.find((l) => l.id === K.forceId), n = Do.find((l) => l.id === K.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function vn(t) {
      const o = Wn.find((l) => l.id === K.forceId), n = Do.find((l) => l.id === K.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function yn() {
      return K.label;
    }
    function Gs() {
      switch (Do.find((o) => o.id === _).id) {
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
    function Js() {
      const t = vo(20594), o = vo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function ps(t, o, n, l, s) {
      const d = Le.steelVigaType, a = d === 0 ? ln() : rn();
      if (Le.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = `b${n}${r}`, i = `h${n}${r}`, b = {};
          b[c] = +mt(f.b).toFixed(2), b[i] = +mt(f.h).toFixed(2), t.addBinding(b, c, {
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
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, c = f == null ? void 0 : f.match(new RegExp(`^b${n}(\\d+)$`)), i = f == null ? void 0 : f.match(new RegExp(`^h${n}(\\d+)$`));
          c && (o[parseInt(c[1])].b = bt(r.value), Se()), i && (o[parseInt(i[1])].h = bt(r.value), Se());
        });
      } else if (d <= 1) {
        for (let r = 0; r < o.length; r++) {
          const f = {};
          f[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(f, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: a
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const c = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          c && (o[parseInt(c[1])].profileIdx = r.value, Se());
        });
      } else if (d === 2) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = {}, i = `${n}${r}`;
          c[`bf${i}`] = +mt(f.bf ?? 0.2).toFixed(3), c[`h${i}`] = +mt(f.hf ?? 0.4).toFixed(3), c[`tf${i}`] = +mt(f.tf ?? 0.015).toFixed(3), c[`tw${i}`] = +mt(f.tw ?? 0.01).toFixed(3), t.addBinding(c, `bf${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(c, `h${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `tf${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(c, `tw${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const i = `${n}${c}`;
            f === `bf${i}` && (o[c].bf = bt(r.value), Se()), f === `h${i}` && (o[c].hf = bt(r.value), Se()), f === `tf${i}` && (o[c].tf = bt(r.value), Se()), f === `tw${i}` && (o[c].tw = bt(r.value), Se());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = {}, i = `${n}${r}`;
          c[`bc${i}`] = +mt(f.bc ?? 0.2).toFixed(3), c[`hc${i}`] = +mt(f.hc ?? 0.3).toFixed(3), c[`t${i}`] = +mt(f.t ?? 8e-3).toFixed(3), t.addBinding(c, `bc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(c, `hc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `t${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const i = `${n}${c}`;
            f === `bc${i}` && (o[c].bc = bt(r.value), Se()), f === `hc${i}` && (o[c].hc = bt(r.value), Se()), f === `t${i}` && (o[c].t = bt(r.value), Se());
          }
        });
      }
    }
    function To() {
      var _a2;
      if (vt) {
        try {
          vt.dispose();
        } catch {
        }
        vt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), L !== "edificio" && L !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Ys();
      if (!o) return;
      o.style.display = "";
      const n = T, l = Math.round(((_a2 = ie.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Gs(), d = Js(), a = ce.length || 1, r = pe.length || 1;
      for (; Le.perFloor.length < l; ) {
        const g = Le.perFloor.length > 0 ? JSON.parse(JSON.stringify(Le.perFloor[Le.perFloor.length - 1])) : Lt(a, r);
        Le.perFloor.push(g);
      }
      Le.perFloor.length > l && (Le.perFloor.length = l);
      for (const g of Le.perFloor) {
        for (; g.vigasX.length < a; ) g.vigasX.push(g.vigasX.length > 0 ? {
          ...g.vigasX[g.vigasX.length - 1]
        } : Ot());
        for (g.vigasX.length > a && (g.vigasX.length = a); g.vigasY.length < r; ) g.vigasY.push(g.vigasY.length > 0 ? {
          ...g.vigasY[g.vigasY.length - 1]
        } : Ot());
        g.vigasY.length > r && (g.vigasY.length = r);
      }
      vt = new Xo({
        title: `Sections (${n.label})`,
        container: o
      });
      const f = {
        colMat: Le.colMat
      };
      if (vt.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (g) => {
        Le.colMat = g.value, To(), Se();
      }), Le.colMat === 0) {
        const g = {
          forma: Le.colShape
        };
        vt.addBinding(g, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", ($) => {
          Le.colShape = $.value, To(), Se();
        });
        const u = {
          fc: +vo(Le.fc).toFixed(1)
        };
        vt.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${yn()})`
        }), vt.on("change", ($) => {
          var _a3;
          ((_a3 = $.target) == null ? void 0 : _a3.key) === "fc" && (Le.fc = vn($.value), Se());
        });
      } else if (Le.colMat === 1) {
        const g = {
          colType: Le.steelColType
        };
        vt.addBinding(g, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Le.steelColType = u.value, To(), Se();
        });
      }
      vt.addBlade({
        view: "separator"
      });
      const c = {
        vigaMat: Le.vigaMat
      };
      if (vt.addBinding(c, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (g) => {
        Le.vigaMat = g.value, To(), Se();
      }), Le.vigaMat === 1) {
        const g = {
          vigaType: Le.steelVigaType
        };
        vt.addBinding(g, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Le.steelVigaType = u.value, To(), Se();
        });
      }
      const i = Le.steelColType === 0 ? ln() : rn();
      Le.steelVigaType === 0 ? ln() : rn();
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
        const u = Le.perFloor[g], $ = vt.addFolder({
          title: `Piso ${g + 1}`,
          expanded: g < 2
        });
        if (Le.colMat === 0) if (Le.colShape === 1) {
          const z = {
            dCol: +mt(u.dCol).toFixed(2)
          };
          $.addBinding(z, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), $.on("change", (C) => {
            var _a3;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = bt(C.value), Se());
          });
        } else {
          const z = {
            bCol: +mt(u.bCol).toFixed(2),
            hCol: +mt(u.hCol).toFixed(2)
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
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = bt(C.value), Se()), ((_b = C.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = bt(C.value), Se());
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
            bf: +mt(u.colBf ?? 0.3).toFixed(3),
            h: +mt(u.colHf ?? 0.3).toFixed(3),
            tf: +mt(u.colTf ?? 0.02).toFixed(3),
            tw: +mt(u.colTw ?? 0.012).toFixed(3)
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
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = bt(C.value), Se()), ((_b = C.target) == null ? void 0 : _b.key) === "h" && (u.colHf = bt(C.value), Se()), ((_c = C.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = bt(C.value), Se()), ((_d = C.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = bt(C.value), Se());
          });
        } else {
          const z = {
            bc: +mt(u.colBc ?? 0.3).toFixed(3),
            hc: +mt(u.colHc ?? 0.3).toFixed(3),
            t: +mt(u.colT ?? 0.01).toFixed(3)
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
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = bt(C.value), Se()), ((_b = C.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = bt(C.value), Se()), ((_c = C.target) == null ? void 0 : _c.key) === "t" && (u.colT = bt(C.value), Se());
          });
        }
        else {
          const z = {
            bc: +mt(u.colBc ?? 0.3).toFixed(3),
            hc: +mt(u.colHc ?? 0.3).toFixed(3),
            t: +mt(u.colT ?? 0.01).toFixed(3),
            Es: +vo(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +vo(u.colFc ?? 28e3).toFixed(1),
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
          const C = +vo(1e8).toFixed(0), y = +vo(3e8).toFixed(0), E = Math.max(1, Math.round((y - C) / 200));
          $.addBinding(z, "Es", {
            min: C,
            max: y,
            step: E,
            label: `Es (${yn()})`
          }), $.addBinding(z, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), $.addBinding(z, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${yn()})`
          }), $.addBinding(z, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), $.on("change", (m) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = m.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = bt(m.value), Se()), ((_b = m.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = bt(m.value), Se()), ((_c = m.target) == null ? void 0 : _c.key) === "t" && (u.colT = bt(m.value), Se()), ((_d = m.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = vn(m.value), Se()), ((_e2 = m.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = m.value, Se()), ((_f = m.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = vn(m.value), Se()), ((_g = m.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = m.value, Se());
          });
        }
        if (u.vigasX.length > 0) {
          const z = $.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          ps(z, u.vigasX, "x", s, b);
        }
        if (u.vigasY.length > 0) {
          const z = $.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          ps(z, u.vigasY, "y", s, b);
        }
      }
      vt.addBlade({
        view: "separator"
      });
      const w = vt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), M = {
        activar: ue,
        direccion: He === "x" ? 0 : 1,
        cantidad: qe
      };
      w.addBinding(M, "activar", {
        label: "Activar"
      }), w.addBinding(M, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), w.addBinding(M, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), w.on("change", (g) => {
        var _a3, _b, _c;
        ((_a3 = g.target) == null ? void 0 : _a3.key) === "activar" && (ue = g.value, Se()), ((_b = g.target) == null ? void 0 : _b.key) === "direccion" && (He = g.value === 0 ? "x" : "y", Se()), ((_c = g.target) == null ? void 0 : _c.key) === "cantidad" && (qe = Math.round(g.value), Se());
      }), vt.addBlade({
        view: "separator"
      });
      const v = vt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: Qe,
        espesor: +mt(je).toFixed(3),
        subdivX: pt,
        subdivY: it
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
        ((_a3 = g.target) == null ? void 0 : _a3.key) === "activar" && (Qe = g.value, Se()), ((_b = g.target) == null ? void 0 : _b.key) === "espesor" && (je = bt(g.value), Se()), ((_c = g.target) == null ? void 0 : _c.key) === "subdivX" && (pt = Math.round(g.value), Se()), ((_d = g.target) == null ? void 0 : _d.key) === "subdivY" && (it = Math.round(g.value), Se());
      }), vt.addBlade({
        view: "separator"
      });
      const h = vt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +mt(Ze).toFixed(3),
        subdivH: gt,
        subdivW: $t
      };
      h.addBinding(S, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), h.addBinding(S, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(S, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (g) => {
        var _a3, _b, _c;
        ((_a3 = g.target) == null ? void 0 : _a3.key) === "espesor" && (Ze = bt(g.value), Se()), ((_b = g.target) == null ? void 0 : _b.key) === "subdivH" && (gt = Math.round(g.value), Se()), ((_c = g.target) == null ? void 0 : _c.key) === "subdivW" && ($t = Math.round(g.value), Se());
      });
      const I = ce.length || 1, k = pe.length || 1, q = I + 1, N = k + 1;
      if (I > 0) {
        const g = h.addFolder({
          title: `Muros dir X (${I} vanos)`,
          expanded: false
        });
        for (let u = 0; u < I; u++) for (let $ = 0; $ < N; $++) {
          const z = `wx_${u}_${$}`, C = Ge.some((m) => m.dir === "x" && m.bay === u && m.axisIdx === $), y = {};
          y[z] = C;
          const E = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + $)}`;
          g.addBinding(y, z, {
            label: E
          }).on("change", (m) => {
            m.value ? Ge.push({
              dir: "x",
              bay: u,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : Ge = Ge.filter((A) => !(A.dir === "x" && A.bay === u && A.axisIdx === $)), Se();
          });
        }
      }
      if (k > 0) {
        const g = h.addFolder({
          title: `Muros dir Y (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let $ = 0; $ < q; $++) {
          const z = `wy_${u}_${$}`, C = Ge.some((m) => m.dir === "y" && m.bay === u && m.axisIdx === $), y = {};
          y[z] = C;
          const E = `Vano Y${u + 1} / Eje X${$ + 1}`;
          g.addBinding(y, z, {
            label: E
          }).on("change", (m) => {
            m.value ? Ge.push({
              dir: "y",
              bay: u,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : Ge = Ge.filter((A) => !(A.dir === "y" && A.bay === u && A.axisIdx === $)), Se();
          });
        }
      }
      if (Ge.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const g = {
          muros: `${Ge.length} ubicaciones`
        };
        h.addBinding(g, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function to() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ge || (ge = t.innerHTML), Ie) {
        try {
          Ie.dispose();
        } catch {
        }
        Ie = null;
      }
      if (eo) {
        try {
          eo.dispose();
        } catch {
        }
        eo = null;
      }
      t.innerHTML = "";
      const o = L.charAt(0).toUpperCase() + L.slice(1);
      Ie = new Xo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Un()[L];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = ie[a.key].val;
        for (const a of n) Ie.addBinding(s, a.key, {
          min: ie[a.key].min,
          max: ie[a.key].max,
          step: ie[a.key].step,
          label: ie[a.key].label
        });
        const d = Ie.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const r = {
            min: ie[a.key].min,
            max: ie[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            ie[a.key] && (ie[a.key].min = r.min, ie[a.key].max = r.max, ie[a.key].val < r.min && (ie[a.key].val = r.min), ie[a.key].val > r.max && (ie[a.key].val = r.max)), to(), Se();
          });
        }
        Ie.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && ie[r]) {
            if (ie[r].val = a.value, L === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(ie.nVanosX.val), c = Math.round(ie.nVanosY.val);
                for (; ce.length < f; ) ce.push(ce[ce.length - 1] ?? T.defaultSpan);
                for (ce.length > f && (ce.length = f); pe.length < c; ) pe.push(pe[pe.length - 1] ?? T.defaultSpan * 0.8);
                pe.length > c && (pe.length = c);
              }
              to();
            }
            Se();
          }
        });
      }
      if (L === "edificio") {
        if (lo) {
          try {
            lo.dispose();
          } catch {
          }
          lo = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const d = T;
          lo = new Xo({
            title: `Luces (${d.length})`,
            container: s
          });
          const a = lo.addFolder({
            title: "Luces X",
            expanded: true
          }), r = {};
          for (let i = 0; i < ce.length; i++) r[`svx_${i + 1}`] = ce[i];
          for (let i = 0; i < ce.length; i++) a.addBinding(r, `svx_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a2, _b;
            const w = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            w && (ce[parseInt(w[1]) - 1] = i.value, Se());
          });
          const f = lo.addFolder({
            title: "Luces Y",
            expanded: true
          }), c = {};
          for (let i = 0; i < pe.length; i++) c[`svy_${i + 1}`] = pe[i];
          for (let i = 0; i < pe.length; i++) f.addBinding(c, `svy_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svy${i + 1}`
          });
          f.on("change", (i) => {
            var _a2, _b;
            const w = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            w && (pe[parseInt(w[1]) - 1] = i.value, Se());
          });
        }
      }
      if (To(), Ie) {
        Ie.addBlade({
          view: "separator"
        });
        const s = an()[L];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((r, f) => {
            d[r.label] = f;
          });
          const a = {
            apoyo: Et
          };
          Ie.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (r) => {
            Et = r.value, Se();
          });
        }
        if (L === "placa-3q" || L === "placa-q4") {
          const d = {
            teoria: xt
          };
          Ie.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            xt = a.value, Se();
          });
        }
      }
      const l = Kn()[L];
      if (l && l.length > 0) {
        eo = new Xo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = lt[a.key].val;
        for (const a of l) eo.addBinding(s, a.key, {
          min: lt[a.key].min,
          max: lt[a.key].max,
          step: lt[a.key].step,
          label: lt[a.key].label
        });
        const d = eo.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const r = {
            min: lt[a.key].min,
            max: lt[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            lt[a.key] && (lt[a.key].min = r.min, lt[a.key].max = r.max, lt[a.key].val < r.min && (lt[a.key].val = r.min), lt[a.key].val > r.max && (lt[a.key].val = r.max)), to(), Se();
          });
        }
        eo.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && lt[r]) {
            if (lt[r].val = a.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => Sn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (ie[s]) ie[s].val = d, Se(), to();
          else if (lt[s]) {
            if (lt[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Sn(), to();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in ie) s[d] = ie[d].val;
          for (const d in lt) s[d] = lt[d].val;
          return s;
        },
        setGenerator: Ue,
        createCustomPanel: (s, d, a) => Vs(s, d, a),
        removeCustomPanel: (s) => {
          fs(s);
        }
      };
    }
    const $n = /* @__PURE__ */ new Map();
    function Vs(t, o, n) {
      var _a2;
      fs(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const d = new Xo({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(o)) {
        const c = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const i = {
            [r]: f.value.join(", ")
          };
          d.addBinding(i, r, {
            label: c
          }).on("change", (b) => {
            a[r] = b.value.split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w)), n && n({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const i = {
            [r]: f.value
          }, b = {};
          for (const w of f.options) b[w] = w;
          d.addBinding(i, r, {
            label: c,
            options: b
          }).on("change", (w) => {
            a[r] = w.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[r] = f.value;
          const i = {
            [r]: f.value
          };
          d.addBinding(i, r, {
            label: c
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
          d.addBinding(i, r, {
            label: c
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
            label: c
          };
          f.min !== void 0 && (b.min = f.min), f.max !== void 0 && (b.max = f.max), f.step !== void 0 && (b.step = f.step), d.addBinding(i, r, b).on("change", (w) => {
            a[r] = w.value, n && n({
              ...a
            });
          });
        }
      }
      return n && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...a
        });
      }), $n.set(t, {
        pane: d,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
    }
    function fs(t) {
      const o = $n.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        $n.delete(t);
      }
    }
    function Xs() {
      if (Ie) {
        try {
          Ie.dispose();
        } catch {
        }
        Ie = null;
      }
      if (eo) {
        try {
          eo.dispose();
        } catch {
        }
        eo = null;
      }
      if (vt) {
        try {
          vt.dispose();
        } catch {
        }
        vt = null;
      }
      if (lo) {
        try {
          lo.dispose();
        } catch {
        }
        lo = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ge && (n.innerHTML = ge);
    }
    const we = document.createElement("div");
    we.id = "cad3d-panel";
    const us = document.createElement("style");
    us.textContent = `
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
  `, document.head.appendChild(us), Sa() === "light" && document.documentElement.classList.add("awatif-light"), Ea((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), L && kt(true);
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
          <!-- Scordelis-Lo requires MITC4 for curved shells - not yet implemented -->
          <!-- <option value="test-scordelis">6. Scordelis-Lo Barrel (Wilson)</option> -->
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
    let yt = null;
    function Us() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = _, d = x, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${L || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((c, i) => {
        a.push(`  ${String(i).padStart(4)}  ${c[0].toFixed(4).padStart(10)}  ${c[1].toFixed(4).padStart(10)}  ${c[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((c, i) => {
        const b = c.map((w) => String(w).padStart(6)).join("");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((c, i) => {
        const b = c.map((w) => w ? "  1" : "  0").join("");
        a.push(`  ${String(i).padStart(4)} ${b}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((c, i) => {
        const b = c.map((w) => w.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), l) {
        a.push("## ELEMENT PROPERTIES");
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
        ], i = "# elem  " + c.map((b) => b.name.padStart(12)).join(" ");
        a.push(i);
        for (let b = 0; b < o.length; b++) {
          const w = c.map((M) => {
            var _a3;
            const v = (_a3 = M.map) == null ? void 0 : _a3.get(b);
            return v !== void 0 ? v.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${w}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((c, i) => {
        const b = c.map((w) => w.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((c, i) => {
        const b = c.map((w) => w.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${b}`);
      }), a.push("")), L) {
        a.push("## CLI COMMAND");
        const c = Object.entries(ie).map(([i, b]) => `${i}=${b.val}`).join(" ");
        a.push(`cad.${L === "edificio" ? "building" : L}(${c})`);
      }
      return a.join(`
`);
    }
    let Go = false;
    function Ks() {
      var _a2, _b, _c, _d;
      if (yt) {
        yt.remove(), yt = null, Go = false;
        return;
      }
      const t = Us();
      yt = document.createElement("div"), yt.id = "export-overlay", yt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, yt.innerHTML = `
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
    `, document.body.appendChild(yt), (_a2 = yt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        yt == null ? void 0 : yt.remove(), yt = null, Go = false;
      }), (_b = yt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = yt.querySelector("#export-body"), n = yt.querySelector("#export-minimize");
        Go = !Go, Go ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", yt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", yt.style.width = "720px");
      }), (_c = yt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = yt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = yt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = yt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
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
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((i, b) => d.supports.push({
          node: b,
          dofs: i
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((i, b) => d.loads.push({
          node: b,
          forces: i
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((i, b) => d.displacements[b] = i));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (d.reactions = {}, r.forEach((i, b) => d.reactions[b] = i));
        const f = yt.querySelector("#export-text");
        f.value = JSON.stringify(d, null, 2);
        const c = yt.querySelector("#export-status");
        c.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ve() {
      var _a2, _b, _c;
      const t = we.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, r = 0;
        for (const c of n) c.length === 2 ? d++ : c.length === 3 ? a++ : c.length === 4 && r++;
        let f = `${o}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${d}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function Mn() {
      var _a2;
      if (!ye || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = $a(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          ae = d, le = t.map((c) => [
            ...c
          ]), Me = 0;
          const { extent: a } = fo(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let c = 0;
            for (let i = 0; i < t.length; i++) {
              const b = r[i * 6] || 0, w = r[i * 6 + 1] || 0, M = r[i * 6 + 2] || 0;
              c = Math.max(c, Math.sqrt(b * b + w * w + M * M));
            }
            ve = c > 1e-12 ? a * 0.05 / c : 1;
          }
          const f = `${L} \u2014 ${t.length}n ${o.length}e`;
          Te.render(d, {
            title: f
          }), Te.div.style.display = "", Jo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ae = null;
      }
    }
    function wn() {
      Ae && (cancelAnimationFrame(Ae), Ae = 0), le.length > 0 && (e.nodes.val = le.map((t) => [
        ...t
      ])), Te.div.style.display = "none", ae = null;
    }
    function Jo() {
      var _a2;
      if (Ae && cancelAnimationFrame(Ae), !(ae == null ? void 0 : ae.modeShapes) || !le.length) return;
      const t = ae.modeShapes[Me];
      if (!t) return;
      const o = ((_a2 = ae.frequencies) == null ? void 0 : _a2[Me]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = le.length, d = e.elements.rawVal, { extent: a } = fo(), r = we.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let c = 0;
      for (let k = 0; k < s; k++) {
        const q = t[k * 6] || 0, N = t[k * 6 + 1] || 0, g = t[k * 6 + 2] || 0;
        c = Math.max(c, Math.sqrt(q * q + N * N + g * g));
      }
      const i = c > 1e-12 ? a * f / 100 / c : 1, b = nt();
      if (!b) return;
      let w = null, M = null, v = null;
      b.scene.traverse((k) => {
        var _a3, _b;
        !w && k.isPoints && k.geometry && (w = k), !M && k.isLineSegments && k.geometry && !k.name && (M = k), !v && k.isMesh && ((_a3 = k.material) == null ? void 0 : _a3.transparent) && ((_b = k.material) == null ? void 0 : _b.opacity) < 0.5 && k.geometry && (v = k);
      });
      const p = new Float32Array(s * 3), h = [];
      for (const k of d) if (k.length === 2) h.push([
        k[0],
        k[1]
      ]);
      else for (let q = 0; q < k.length; q++) h.push([
        k[q],
        k[(q + 1) % k.length]
      ]);
      const S = new Float32Array(h.length * 6);
      function I() {
        const k = (performance.now() - l) / 1e3, q = Math.sin(2 * Math.PI * n * k) * i;
        for (let N = 0; N < s; N++) {
          const g = le[N];
          p[N * 3] = g[0] + (t[N * 6] || 0) * q, p[N * 3 + 1] = g[1] + (t[N * 6 + 1] || 0) * q, p[N * 3 + 2] = g[2] + (t[N * 6 + 2] || 0) * q;
        }
        if (w) {
          const N = w.geometry, g = N.getAttribute("position");
          g && g.array.length === p.length ? (g.array.set(p), g.needsUpdate = true) : N.setAttribute("position", new wo(p.slice(), 3));
        }
        if (M) {
          for (let u = 0; u < h.length; u++) {
            const [$, z] = h[u];
            S[u * 6] = p[$ * 3], S[u * 6 + 1] = p[$ * 3 + 1], S[u * 6 + 2] = p[$ * 3 + 2], S[u * 6 + 3] = p[z * 3], S[u * 6 + 4] = p[z * 3 + 1], S[u * 6 + 5] = p[z * 3 + 2];
          }
          const N = M.geometry, g = N.getAttribute("position");
          g && g.array.length === S.length ? (g.array.set(S), g.needsUpdate = true) : N.setAttribute("position", new wo(S.slice(), 3));
        }
        if (v) {
          const N = [];
          for (const g of d) if (g.length === 3) {
            const [u, $, z] = g;
            N.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), N.push(p[$ * 3], p[$ * 3 + 1], p[$ * 3 + 2]), N.push(p[z * 3], p[z * 3 + 1], p[z * 3 + 2]);
          } else if (g.length === 4) {
            const [u, $, z, C] = g;
            N.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), N.push(p[$ * 3], p[$ * 3 + 1], p[$ * 3 + 2]), N.push(p[z * 3], p[z * 3 + 1], p[z * 3 + 2]), N.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), N.push(p[z * 3], p[z * 3 + 1], p[z * 3 + 2]), N.push(p[C * 3], p[C * 3 + 1], p[C * 3 + 2]);
          }
          if (N.length > 0) {
            const g = v.geometry, u = new Float32Array(N), $ = g.getAttribute("position");
            $ && $.array.length === u.length ? ($.array.set(u), $.needsUpdate = true) : g.setAttribute("position", new wo(u, 3));
          }
        }
        b.render(), Ae = requestAnimationFrame(I);
      }
      Ae = requestAnimationFrame(I);
    }
    function Sn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const v = X("CM") ?? 0, p = X("CV") ?? 0, h = v + p, S = X("Ex") ?? 0, I = X("Ey") ?? 0;
        if (h === 0 && S === 0 && I === 0) return;
        const k = /* @__PURE__ */ new Map(), q = [];
        for (let m = 0; m < t.length; m++) n.supports.has(m) || q.push(m);
        const N = (m) => Math.round(m * 1e3) / 1e3, g = /* @__PURE__ */ new Set();
        n.supports.forEach((m, A) => {
          g.add(`${N(t[A][0])},${N(t[A][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const m of q) g.has(`${N(t[m][0])},${N(t[m][1])}`) && u.add(m);
        const $ = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
        if (S !== 0 || I !== 0) {
          let m = -1 / 0, A = -1 / 0;
          for (const H of u) m = Math.max(m, N(t[H][0])), A = Math.max(A, N(t[H][1]));
          const F = /* @__PURE__ */ new Map();
          for (const H of u) {
            const J = N(t[H][2]);
            F.has(J) || F.set(J, []), F.get(J).push(H);
          }
          F.forEach((H) => {
            if (S !== 0) {
              const J = /* @__PURE__ */ new Set();
              for (const Q of H) if (N(t[Q][0]) === m) {
                const Z = N(t[Q][1]);
                J.has(Z) || (J.add(Z), $.add(Q));
              }
            }
            if (I !== 0) {
              const J = /* @__PURE__ */ new Set();
              for (const Q of H) if (N(t[Q][1]) === A) {
                const Z = N(t[Q][0]);
                J.has(Z) || (J.add(Z), z.add(Q));
              }
            }
          });
        }
        const C = 9.81, y = /* @__PURE__ */ new Map();
        for (let m = 0; m < o.length; m++) {
          const A = o[m], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(m)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (A.length === 2) {
              const H = ((_b = l.areas) == null ? void 0 : _b.get(m)) ?? 0, J = t[A[0]], Q = t[A[1]], Z = Math.sqrt((Q[0] - J[0]) ** 2 + (Q[1] - J[1]) ** 2 + (Q[2] - J[2]) ** 2), j = -(F * H * Z * C) / 2;
              y.set(A[0], (y.get(A[0]) ?? 0) + j), y.set(A[1], (y.get(A[1]) ?? 0) + j);
            } else if (A.length >= 3) {
              const H = ((_c = l.thicknesses) == null ? void 0 : _c.get(m)) ?? 0;
              let J = 0;
              if (A.length === 3) {
                const [te, j, he] = A.map((ze) => t[ze]);
                J = 0.5 * Math.abs((j[0] - te[0]) * (he[1] - te[1]) - (he[0] - te[0]) * (j[1] - te[1]));
              } else if (A.length === 4) {
                const [te, j, he, ze] = A.map((fe) => t[fe]);
                if (J = 0.5 * Math.abs((j[0] - te[0]) * (he[1] - te[1]) - (he[0] - te[0]) * (j[1] - te[1])) + 0.5 * Math.abs((he[0] - te[0]) * (ze[1] - te[1]) - (ze[0] - te[0]) * (he[1] - te[1])), J < 1e-10) {
                  const fe = [
                    j[0] - te[0],
                    j[1] - te[1],
                    j[2] - te[2]
                  ], R = [
                    ze[0] - te[0],
                    ze[1] - te[1],
                    ze[2] - te[2]
                  ], oe = [
                    fe[1] * R[2] - fe[2] * R[1],
                    fe[2] * R[0] - fe[0] * R[2],
                    fe[0] * R[1] - fe[1] * R[0]
                  ];
                  J = Math.sqrt(oe[0] ** 2 + oe[1] ** 2 + oe[2] ** 2);
                }
              }
              const Z = -(F * H * J * C) / A.length;
              for (const te of A) y.set(te, (y.get(te) ?? 0) + Z);
            }
          }
        }
        const E = /* @__PURE__ */ new Set();
        for (const m of o) m.length === 2 && (E.add(m[0]), E.add(m[1]));
        for (const m of q) {
          const A = $.has(m) ? S : 0, F = z.has(m) ? I : 0, H = y.get(m) ?? 0, J = E.has(m) ? h : 0, Q = H + J;
          (A !== 0 || F !== 0 || Math.abs(Q) > 1e-10) && k.set(m, [
            A,
            F,
            Q,
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
      let d = 0, a = 0, r = 0;
      for (const v of o) v.length === 2 ? d++ : v.length === 3 ? r++ : v.length === 4 && a++;
      const f = ((_d = n.supports) == null ? void 0 : _d.size) || 0, c = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, i = t.length * 6, b = i - f * 6, w = [], M = (v) => w.push(v);
      M('<b style="color:var(--cad-heading)">FEM Solver</b>'), M(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && M(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && M(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && M(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), M(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${c}`), M(`<span style="color:var(--cad-info)">DOFs:</span> ${i} total, ~${b} libres`), M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${i}&times;${i})`), M("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const v = Pt(t, o, n, l), p = performance.now() - s;
        if (v) {
          e.deformOutputs.val = v, M(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let h = 0, S = -1, I = 0, k = 0;
          v.deformations && v.deformations.forEach(($, z) => {
            const C = Math.sqrt($[0] * $[0] + $[1] * $[1] + $[2] * $[2]);
            C > h && (h = C, S = z, I = $[0], k = $[2]);
          }), M('<span style="color:#888">3.</span> Desplazamientos:'), M(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), M(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(I * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(k * 1e3).toFixed(4)} mm`);
          const q = performance.now(), N = Ho(t, o, l, v), g = performance.now() - q;
          N && (e.analyzeOutputs.val = N, M(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${g.toFixed(0)} ms</span>`), M("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (v) {
        const p = performance.now() - s;
        M(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${v.message}</b>`);
      }
      window.__femLog = w, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ye && setTimeout(() => Mn(), 50);
    }
    function En(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), r = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: r
      };
    }
    function ms(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function In(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, r = (2 * n * t * t * t + s * l * l * l) / 12, f = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function kn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, r = (o * t * t * t - s * l * l * l) / 12, f = (t - n) * (o - n), c = 2 * ((t - n) / n + (o - n) / n), i = 4 * f * f / (c > 0 ? c : 1);
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: i
      };
    }
    function Zs(t, o, n, l, s, d, a) {
      const f = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, c = t - 2 * n, i = o - 2 * n, b = t * o - c * i, w = (t * o * o * o - c * i * i * i) / 12, M = (o * t * t * t - i * c * c * c) / 12, v = c * i, p = c * i * i * i / 12, h = i * c * c * c / 12, S = b + f * v, I = w + f * p, k = M + f * h, q = l / (2 * (1 + s)), N = (t - n) * (o - n), g = 2 * ((t - n) / n + (o - n) / n), u = 4 * N * N / (g > 0 ? g : 1);
      return {
        A: S,
        Iz: I,
        Iy: k,
        J: u,
        Es: l,
        Gs: q,
        A_steel: b,
        A_conc: v
      };
    }
    function po() {
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
        const { colMat: s, vigaMat: d, colShape: a, fc: r, perFloor: f } = Le, c = 4700 * Math.sqrt(r / 1e3) * 1e3, i = c / (2 * 1.2), b = 24 / 9.80665, w = o.E, M = o.G, v = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (Be.has(p)) {
            const $ = 4700 * Math.sqrt(r / 1e3) * 1e3, z = 0.2;
            n.elasticities.set(p, $), n.poissonsRatios.set(p, z), n.thicknesses.set(p, Ze), n.shearModuli.set(p, $ / (2 * (1 + z))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (Mt.has(p)) {
            const $ = 4700 * Math.sqrt(r / 1e3) * 1e3, z = 0.2;
            n.elasticities.set(p, $), n.poissonsRatios.set(p, z), n.thicknesses.set(p, je), n.shearModuli.set(p, $ / (2 * (1 + z))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const h = be.has(p), S = Oe.get(p) ?? 0, I = f[S] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let k, q, N, g;
          if (h) if (s === 0) q = c, N = i, g = b, k = a === 1 ? ms(I.dCol) : En(I.bCol, I.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: I.dCol
          } : {
            type: "rect",
            b: I.bCol,
            h: I.hCol
          });
          else if (s === 1) {
            q = w, N = M, g = v;
            const $ = Le.steelColType;
            if ($ <= 1) {
              const z = xo[I.colProfileIdx] ?? xo[0];
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
            } else if ($ === 2) {
              const z = I.colBf ?? 0.3, C = I.colHf ?? 0.3, y = I.colTf ?? 0.02, E = I.colTw ?? 0.012;
              k = In(z, C, y, E);
              const m = `I${(C * 100).toFixed(0)}x${(z * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: z,
                h: C,
                tf: y,
                tw: E,
                name: m
              });
            } else {
              const z = I.colBc ?? 0.3, C = I.colHc ?? 0.3, y = I.colT ?? 0.01;
              k = kn(z, C, y);
              const E = `\u25A1${(C * 100).toFixed(0)}x${(z * 100).toFixed(0)}x${(y * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
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
            const A = Zs($, z, C, E, m, y);
            k = {
              A: A.A,
              Iz: A.Iz,
              Iy: A.Iy,
              J: A.J
            }, q = A.Es, N = A.Gs;
            const F = 7.85, H = 24 / 9.80665;
            g = (F * A.A_steel + H * A.A_conc) / (A.A_steel + A.A_conc);
            const J = `CFT ${(z * 1e3).toFixed(0)}X${($ * 1e3).toFixed(0)}X${(C * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: $,
              h: z,
              tw: C,
              name: J
            });
          }
          else {
            const $ = Xe.get(p), z = $ ? $.dir === "x" ? I.vigasX : I.vigasY : [], C = $ ? z[$.bay] ?? z[0] ?? Ot() : Ot();
            if (d === 0) q = c, N = i, g = b, k = En(C.b, C.h), n.sectionShapes.set(p, {
              type: "rect",
              b: C.b,
              h: C.h
            });
            else {
              q = w, N = M, g = v;
              const y = Le.steelVigaType;
              if (y <= 1) {
                const E = xo[C.profileIdx ?? 0] ?? xo[0];
                k = {
                  A: E.A,
                  Iz: E.Iz,
                  Iy: E.Iy,
                  J: E.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: E.bf,
                  h: E.d,
                  name: E.name
                });
              } else if (y === 2) {
                const E = C.bf ?? 0.2, m = C.hf ?? 0.4, A = C.tf ?? 0.015, F = C.tw ?? 0.01;
                k = In(E, m, A, F);
                const H = `I${(m * 100).toFixed(0)}x${(E * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: E,
                  h: m,
                  tf: A,
                  tw: F,
                  name: H
                });
              } else {
                const E = C.bc ?? 0.2, m = C.hc ?? 0.3, A = C.t ?? 8e-3;
                k = kn(E, m, A);
                const F = `\u25A1${(m * 100).toFixed(0)}x${(E * 100).toFixed(0)}x${(A * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: E,
                  h: m,
                  tw: A,
                  name: F
                });
              }
            }
          }
          const u = xe.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (q = c, N = i, g = b) : (q = w, N = M, g = v), u.secType === "rect" && u.b && u.h) k = En(u.b, u.h), n.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) k = ms(u.b), n.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const z = xo[u.profileIdx] ?? xo[0];
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
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              k = In(u.bf, u.hf, u.tf, u.tw);
              const z = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: z
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              k = kn(u.bc, u.hc, u.t);
              const z = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: z
              });
            }
          }
          n.elasticities.set(p, q), n.shearModuli.set(p, N), n.areas.set(p, k.A), n.momentsOfInertiaZ.set(p, k.Iy), n.momentsOfInertiaY.set(p, k.Iz), n.torsionalConstants.set(p, k.J), n.densities.set(p, g);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function bs(t) {
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
          bs(m), Ye.example(m);
        });
      }), we.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = y.dataset.view;
          uo(m), we.querySelectorAll("[data-view]").forEach((A) => A.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = we.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), L = "", js.val = false, Xs(), Ye.clear();
      }), (_d = we.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Vt && (Vt = false, $o()), oo && en(), Bt = !Bt, (_a3 = we.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Bt);
        const m = nt();
        m && (m.controls.enabled = !Bt), Bt || Qo();
      }), (_e2 = we.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Vt && (Vt = false, $o()), Bt && Qo(), oo = !oo, (_a3 = we.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", oo), oo ? na() : en();
      }), (_f = we.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && Qo(), oo && en(), Vt = !Vt, (_a3 = we.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Vt), Vt || $o();
      }), (_g = we.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), Ye.clear(), rt = null;
      });
      const t = we.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const y = t.value;
        t.value = "", y && o(y);
      });
      function o(y) {
        var _a3, _b2;
        const A = 15e3 * Math.sqrt(210) * 10, F = 0.2, H = A / (2 * (1 + F)), J = 0.09, Q = 0.3 ** 4 / 12, Z = 0.141 * 0.3 ** 4, te = 0.25 * 0.4, j = 0.25 * 0.4 ** 3 / 12, he = 0.4 * 0.25 ** 3 / 12, ze = 1e-3, fe = 5 / 6 * J, R = 5 / 6 * te, oe = [];
        function se(ee, W, re) {
          const de = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const U of W) de.elasticities.set(U, A), de.shearModuli.set(U, H), de.areas.set(U, J), de.momentsOfInertiaZ.set(U, Q), de.momentsOfInertiaY.set(U, Q), de.torsionalConstants.set(U, Z), de.shearAreasY.set(U, fe), de.shearAreasZ.set(U, fe);
          for (const U of re) de.elasticities.set(U, A), de.shearModuli.set(U, H), de.areas.set(U, te), de.momentsOfInertiaZ.set(U, j), de.momentsOfInertiaY.set(U, he), de.torsionalConstants.set(U, ze), de.shearAreasY.set(U, R), de.shearAreasZ.set(U, R);
          return de;
        }
        if (y === "test-cantilever" || y === "test-all") {
          const re = 270 / (3 * A * Q), de = [
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
          ], U = [
            [
              0,
              1
            ]
          ], Ee = se(1, [], []);
          Ee.elasticities.set(0, A), Ee.shearModuli.set(0, H), Ee.areas.set(0, J), Ee.momentsOfInertiaZ.set(0, Q), Ee.momentsOfInertiaY.set(0, Q), Ee.torsionalConstants.set(0, Z);
          const De = Pt(de, U, {
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
          }, Ee);
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: de,
            elements: U,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: De.deformations.get(1)[2] * 100,
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
              0,
              3
            ],
            [
              4,
              0,
              3
            ]
          ], W = [
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
          ]), de = Pt(ee, W, {
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
            elements: W,
            results: [
              {
                label: "Ux top (cm)",
                awatif: de.deformations.get(2)[0] * 100,
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
          ], W = [
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
          ]), de = Pt(ee, W, {
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
            elements: W,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: de.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: de.deformations.get(4)[0] * 100,
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
              0,
              3
            ],
            [
              0,
              0,
              3
            ]
          ], W = [
            [
              0,
              1,
              2,
              3
            ]
          ], de = Pt(ee, W, {
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
            elements: W,
            results: [
              {
                label: "Ux top (cm)",
                awatif: de.deformations.get(2)[0] * 100,
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
          ], W = [
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
          const de = Pt(ee, W, {
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
            elements: W,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: de.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: de.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (y === "test-scordelis" || y === "test-all") {
          const De = 40 * Math.PI / 180, st = 8, tt = 8, jt = [];
          for (let We = 0; We <= st; We++) for (let wt = 0; wt <= tt; wt++) {
            const Zt = 25 * We / st, zt = De * wt / tt, ro = 25 * Math.sin(zt), ao = 25 * Math.cos(zt) - 25 * Math.cos(De);
            jt.push([
              Zt,
              ro,
              ao
            ]);
          }
          const Wt = [];
          for (let We = 0; We < st; We++) for (let wt = 0; wt < tt; wt++) {
            const Zt = We * (tt + 1) + wt, zt = (We + 1) * (tt + 1) + wt, ro = (We + 1) * (tt + 1) + (wt + 1), ao = We * (tt + 1) + (wt + 1);
            Wt.push([
              Zt,
              zt,
              ro,
              ao
            ]);
          }
          const _t = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, Kt = 432e6 / (2 * 1);
          for (let We = 0; We < Wt.length; We++) _t.elasticities.set(We, 432e6), _t.shearModuli.set(We, Kt), _t.thicknesses.set(We, 0.25), _t.poissonsRatios.set(We, 0);
          const Oo = /* @__PURE__ */ new Map();
          for (let We = 0; We <= st; We++) for (let wt = 0; wt <= tt; wt++) {
            const Zt = We * (tt + 1) + wt, zt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            We === 0 && (zt[0] = true, zt[4] = true, zt[5] = true), We === st && (zt[1] = true, zt[2] = true, zt[3] = true), wt === 0 && (zt[1] = true, zt[3] = true, zt[5] = true), zt.some((ro) => ro) && Oo.set(Zt, zt);
          }
          const Mo = /* @__PURE__ */ new Map();
          for (const We of Wt) {
            const wt = jt[We[0]], Zt = jt[We[1]], zt = jt[We[2]], ro = jt[We[3]], ao = [
              zt[0] - wt[0],
              zt[1] - wt[1],
              zt[2] - wt[2]
            ], qo = [
              ro[0] - Zt[0],
              ro[1] - Zt[1],
              ro[2] - Zt[2]
            ], Fs = ao[1] * qo[2] - ao[2] * qo[1], Os = ao[2] * qo[0] - ao[0] * qo[2], qs = ao[0] * qo[1] - ao[1] * qo[0], va = -90 * (0.5 * Math.sqrt(Fs * Fs + Os * Os + qs * qs)) / 4;
            for (const Ns of We) {
              const Rs = Mo.get(Ns) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Rs[2] += va, Mo.set(Ns, Rs);
            }
          }
          try {
            const We = Pt(jt, Wt, {
              supports: Oo,
              loads: Mo
            }, _t), wt = tt, Zt = ((_b2 = (_a3 = We.deformations) == null ? void 0 : _a3.get(wt)) == null ? void 0 : _b2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${st}x${tt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: jt,
              elements: Wt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Zt),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (We) {
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + We.message,
              nodes: jt,
              elements: Wt,
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
          const W = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), de = Math.max(...ee.nodes.map((U) => U[2]));
          ee.nodes.forEach((U, Ee) => {
            Math.abs(U[2]) < 0.01 && W.set(Ee, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(U[2] - de) < 0.01 && re.set(Ee, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: W,
            loads: re
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(y) {
        const E = 15e3 * Math.sqrt(210) * 10, m = [];
        m.push(`$ File exported from Awatif FEM Validation: ${y.name}`), m.push(" "), m.push("$ PROGRAM INFORMATION"), m.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), m.push(""), m.push("$ CONTROLS"), m.push('  UNITS  "TONF"  "M"  "C"  '), m.push("");
        const A = /* @__PURE__ */ new Set();
        y.nodes.forEach((fe) => A.add(Math.round(fe[1] * 1e4) / 1e4));
        const F = [
          ...A
        ].sort((fe, R) => fe - R), H = F.map((fe, R) => R === 0 ? "Base" : `Level_${R}`), J = /* @__PURE__ */ new Map();
        F.forEach((fe, R) => J.set(fe, H[R])), m.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let fe = F.length - 1; fe >= 1; fe--) m.push(`  STORY "${H[fe]}"  HEIGHT ${F[fe] - F[fe - 1]} MASTERSTORY "Yes"  `);
        m.push(`  STORY "Base"  ELEV ${F[0]} `), m.push(""), m.push("$ MATERIAL PROPERTIES"), m.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), m.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`), m.push(""), m.push("$ FRAME SECTIONS"), m.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), m.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), m.push("");
        const Q = y.elements.some((fe) => fe.length === 4);
        Q && (m.push("$ WALL/SLAB/DECK SECTIONS"), m.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), m.push(""));
        const Z = /* @__PURE__ */ new Map();
        let te = 0;
        y.nodes.forEach((fe) => {
          const R = `${fe[0]},${fe[2]}`;
          Z.has(R) || Z.set(R, `${++te}`);
        }), m.push("$ POINT COORDINATES");
        for (const [fe, R] of Z) {
          const [oe, se] = fe.split(",").map(Number);
          m.push(`  POINT "${R}"  ${oe} ${se} `);
        }
        m.push("");
        const j = (fe) => {
          const R = y.nodes[fe], oe = `${R[0]},${R[2]}`;
          return {
            pt: Z.get(oe) || "1",
            story: J.get(Math.round(R[1] * 1e4) / 1e4) || "Base"
          };
        };
        m.push("$ LINE CONNECTIVITIES");
        const he = [];
        if (y.elements.forEach((fe, R) => {
          if (fe.length !== 2) return;
          const oe = y.nodes[fe[0]], se = y.nodes[fe[1]], ee = Math.abs(se[1] - oe[1]), W = Math.sqrt((se[0] - oe[0]) ** 2 + (se[2] - oe[2]) ** 2), re = ee > W * 0.5, de = j(fe[0]), U = j(fe[1]), Ee = re ? "COL30" : "VIGA";
          re ? (m.push(`  LINE  "E${R + 1}"  COLUMN  "${de.pt}"  "${de.pt}"  1`), he.push(`  LINEASSIGN  "E${R + 1}"  "${U.story}"  SECTION "${Ee}"  `)) : (m.push(`  LINE  "E${R + 1}"  BEAM  "${de.pt}"  "${U.pt}"  0`), he.push(`  LINEASSIGN  "E${R + 1}"  "${de.story}"  SECTION "${Ee}"  `));
        }), m.push(""), Q) {
          m.push("$ AREA CONNECTIVITIES");
          const fe = [];
          y.elements.forEach((R, oe) => {
            if (R.length !== 4) return;
            const se = R.map((ee) => j(ee));
            m.push(`  AREA "W${oe + 1}"  PANEL  4  "${se[0].pt}"  "${se[1].pt}"  "${se[2].pt}"  "${se[3].pt}"  1  1  0  0  `), fe.push(`  AREAASSIGN  "W${oe + 1}"  "${se[2].story}"  SECTION "Muro20"  `);
          }), m.push(""), m.push("$ AREA ASSIGNS"), fe.forEach((R) => m.push(R)), m.push("");
        }
        m.push("$ POINT ASSIGNS"), y.nodes.forEach((fe, R) => {
          if (Math.abs(fe[1]) < 0.01) {
            const oe = j(R);
            m.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), m.push(""), m.push("$ LINE ASSIGNS"), he.forEach((fe) => m.push(fe)), m.push(""), m.push("$ LOAD PATTERNS"), m.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), m.push(""), m.push("$ POINT OBJECT LOADS");
        const ze = Math.max(...y.nodes.map((fe) => fe[1]));
        return y.nodes.forEach((fe, R) => {
          if (Math.abs(fe[1] - ze) < 0.01) {
            const oe = j(R);
            m.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), m.push(""), m.push("  END"), m.push("$ END OF MODEL FILE"), m.join(`\r
`);
      }
      function l(y) {
        const E = 15e3 * Math.sqrt(210) * 10, m = [];
        m.push(`"""ETABS API Validation: ${y.name}`), m.push('Generated by Awatif FEM Studio"""'), m.push("import comtypes.client, time, math"), m.push(""), m.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), m.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), m.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), m.push("myETABS.ApplicationStart()"), m.push("time.sleep(10)"), m.push("SapModel = myETABS.SapModel"), m.push("SapModel.InitializeNewModel()"), m.push("SapModel.File.NewBlank()"), m.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), m.push(""), m.push(`E = ${E}`), m.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), m.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), m.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), m.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), y.elements.some((H) => H.length === 4) && m.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), m.push(""), m.push("# Add elements"), m.push("FN = ' '"), y.elements.forEach((H, J) => {
          if (H.length === 2) {
            const Q = y.nodes[H[0]], Z = y.nodes[H[1]], te = Math.abs(Z[1] - Q[1]), j = Math.sqrt((Z[0] - Q[0]) ** 2 + (Z[2] - Q[2]) ** 2), he = te > j * 0.5 ? "COL30" : "VIGA";
            m.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Q[0]},${Q[2]},${Q[1]}, ${Z[0]},${Z[2]},${Z[1]}, FN,"${he}","E${J + 1}","Global")`);
          } else if (H.length === 4) {
            const Q = H.map((Z) => y.nodes[Z]);
            m.push(`SapModel.AreaObj.AddByCoord(4, [${Q.map((Z) => Z[0]).join(",")}], [${Q.map((Z) => Z[2]).join(",")}], [${Q.map((Z) => Z[1]).join(",")}], "", "Muro20")`);
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
      function d(y) {
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
          const J = y[H];
          m += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', m += '<div style="display:flex;justify-content:space-between;align-items:center">', m += `<div style="font-weight:bold;color:#00d4ff">${J.name}</div>`, m += "<div>", m += `<button onclick="window.__awatifDownloadE2k(${H})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, m += `<button onclick="window.__awatifDownloadPy(${H})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, m += "</div></div>", m += `<div style="color:#888;font-size:11px;margin-bottom:8px">${J.formulation}</div>`, m += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Q of J.results) {
            const Z = Q.reference !== 0 ? Q.awatif / Q.reference : 1, te = Math.abs(Z - 1) < 0.05;
            te || (A = false);
            const j = te ? "#4caf50" : "#f44336", he = te ? "PASS" : "FAIL";
            m += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Q.label}</td>
            <td style="text-align:right;color:#fff">${Q.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Q.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${j};font-weight:bold">${Z.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Q.refSource}</td>
            <td style="text-align:center;color:${j};font-size:10px;font-weight:bold">${he}</td></tr>`;
          }
          m += "</table></div>";
        }
        m += A ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', E.innerHTML = m, document.body.appendChild(E), window.__awatifDownloadE2k = (H) => {
          const J = window.__awatifTests[H], Q = J.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(J), `${Q}.e2k`);
        }, window.__awatifDownloadPy = (H) => {
          const J = window.__awatifTests[H], Q = J.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(J), `${Q}_etabs.py`);
        };
      }
      (_h = we.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), Ks();
      });
      let a = "";
      const r = we.querySelector("#cad3d-io-menu"), f = we.querySelector("#cad3d-io-file");
      function c(y, E) {
        e.nodes.val = y.nodes, e.elements.val = y.elements, e.nodeInputs.val = y.nodeInputs, e.elementInputs.val = y.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${E}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function i(y) {
        be = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map();
        const E = /* @__PURE__ */ new Map();
        for (let j = 0; j < y.stories.length; j++) E.set(y.stories[j].name, j);
        for (let j = 0; j < y.elementTypes.length; j++) {
          const he = y.elementTypes[j], ze = y.elementStories[j], fe = E.get(ze) ?? 0;
          Oe.set(j, fe), he === "COLUMN" || he === "BRACE" ? be.add(j) : Ce.add(j);
        }
        L = "edificio";
        const m = y.grids.filter((j) => j.dir === "X").sort((j, he) => j.coord - he.coord), A = y.grids.filter((j) => j.dir === "Y").sort((j, he) => j.coord - he.coord);
        let F, H, J, Q;
        if (m.length > 0 || A.length > 0) F = m.map((j) => j.coord), H = A.map((j) => j.coord), J = m.map((j) => j.label), Q = A.map((j) => j.label);
        else {
          const j = new Set(y.nodes.map((ze) => ze[0])), he = new Set(y.nodes.map((ze) => ze[1]));
          F = [
            ...j
          ].sort((ze, fe) => ze - fe), H = [
            ...he
          ].sort((ze, fe) => ze - fe), J = F.map((ze, fe) => String(fe + 1)), Q = H.map((ze, fe) => String.fromCharCode(65 + fe));
        }
        const Z = y.stories.length > 0 ? Math.max(...y.stories.map((j) => j.elev)) : Math.max(...y.nodes.map((j) => j[2]));
        Ne = F, Pe = H, et = Z, setTimeout(() => {
          kt(), Wo(F, H, Z, J, Q), mn(y.stories, F, H), zn(), Tn();
        }, 100);
        const te = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const j of y.elementTypes) te[j]++;
        console.log(`E2K grids: X=[${J.join(",")}] Y=[${Q.join(",")}]`), console.log(`E2K stories: ${y.stories.map((j) => `${j.name}@${j.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${te.COLUMN} columns, ${te.BEAM} beams, ${te.BRACE} braces`), Ve();
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
        if (a = r.value, r.value = "", a.startsWith("import")) a === "import-e2k" ? f.accept = ".e2k,.E2K" : a === "import-py" ? f.accept = ".py" : a === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (a.startsWith("export")) {
          const y = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? b(el({
              ...y,
              title: "Awatif Model",
              e2kModel: rt ?? void 0
            }), "model.e2k") : a === "export-py" ? b(sl(y), "model_opensees.py") : a === "export-tcl" && b(al(y), "model_opensees.tcl");
          } catch (E) {
            alert("Export error: " + E.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const y = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!y) return;
        const E = new FileReader();
        E.onload = () => {
          const m = E.result;
          try {
            if (a === "import-e2k") {
              const A = Qa(m);
              rt = A, c(A, "E2K imported"), i(A);
            } else if (a === "import-py") {
              const A = ll(m);
              c(A, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const A = rl(m);
              c(A, "OpenSees Tcl imported");
            }
          } catch (A) {
            alert("Import error: " + A.message), console.error(A);
          }
        }, E.readAsText(y), f.value = "";
      });
      const w = we.querySelector("#cad3d-force-unit");
      w && (w.value = x, w.addEventListener("change", (y) => {
        y.stopPropagation(), x = w.value, T = Io(x, _), L && Ue(L);
      }));
      const M = we.querySelector("#cad3d-length-unit");
      M && (M.value = _, M.addEventListener("change", (y) => {
        y.stopPropagation(), _ = M.value, T = Io(x, _), L && Ue(L);
      })), we.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = y.dataset.preset, A = B[m];
          A && (x = A.force, _ = A.length, K = A.stress, T = Io(x, _), w && (w.value = x), M && (M.value = _), we.querySelectorAll("[data-preset]").forEach((F) => {
            F.classList.toggle("active", F.dataset.preset === m);
          }), L && Ue(L), console.log(`Preset: ${m} \u2192 ${x}+${_}, stress: ${K.label}`));
        });
      }), (_i = we.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), pa();
      }), (_j = we.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), fa();
      }), (_k = we.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), ma();
      }), (_l = we.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), ha();
      }), (_m = we.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), ye = !ye, (_a3 = we.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ye);
        const m = we.querySelector("#cad3d-mode-prev"), A = we.querySelector("#cad3d-mode-next"), F = we.querySelector("#cad3d-mode-label"), H = we.querySelector("#cad3d-modal-scale");
        if (ye) {
          const J = nt();
          ((_b2 = J == null ? void 0 : J.settings) == null ? void 0 : _b2.loads) && (Re = J.settings.loads.rawVal, J.settings.loads.val = false), Mn(), m.style.display = "", A.style.display = "", F.style.display = "", H && (H.style.display = ""), v();
        } else wn(), m.style.display = "none", A.style.display = "none", F.style.display = "none", H && (H.style.display = "none"), L && L !== "placa-q4" && L !== "placa-3q" && Se(), setTimeout(() => {
          var _a4;
          const J = nt();
          ((_a4 = J == null ? void 0 : J.settings) == null ? void 0 : _a4.loads) && Re && (J.settings.loads.val = true);
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
          if (H) for (let J = 0; J < 6; J++) A[J] += H[J];
        }
        y.textContent = `Modo ${Me + 1} \u2014 ${E.toFixed(2)} Hz \u2014 T=${m.toFixed(3)}s \u2014 \u03A3Ux=${(A[0] * 100).toFixed(1)}% \u03A3Uy=${(A[1] * 100).toFixed(1)}% \u03A3Rz=${(A[5] * 100).toFixed(1)}%`;
      }
      (_n2 = we.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(ae == null ? void 0 : ae.modeShapes)) return;
        Me = (Me - 1 + ae.modeShapes.length) % ae.modeShapes.length;
        const E = ae.modeShapes[Me], { extent: m } = fo();
        let A = 0;
        for (let F = 0; F < le.length; F++) {
          const H = E[F * 6] || 0, J = E[F * 6 + 1] || 0, Q = E[F * 6 + 2] || 0;
          A = Math.max(A, Math.sqrt(H * H + J * J + Q * Q));
        }
        ve = A > 1e-12 ? m * 0.05 / A : 1, Jo(), v();
      }), (_o2 = we.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(ae == null ? void 0 : ae.modeShapes)) return;
        Me = (Me + 1) % ae.modeShapes.length;
        const E = ae.modeShapes[Me], { extent: m } = fo();
        let A = 0;
        for (let F = 0; F < le.length; F++) {
          const H = E[F * 6] || 0, J = E[F * 6 + 1] || 0, Q = E[F * 6 + 2] || 0;
          A = Math.max(A, Math.sqrt(H * H + J * J + Q * Q));
        }
        ve = A > 1e-12 ? m * 0.05 / A : 1, Jo(), v();
      });
      const p = we.querySelector("#cad3d-modal-scale");
      p == null ? void 0 : p.addEventListener("mousedown", (y) => y.stopPropagation()), p == null ? void 0 : p.addEventListener("change", () => {
        ye && (ae == null ? void 0 : ae.modeShapes) && Jo();
      });
      const h = we.querySelector("#cad3d-cli-toggle"), S = we.querySelector("#cad3d-cli-panel"), I = we.querySelector("#cad3d-cli-output"), k = we.querySelector("#cad3d-cmd"), q = [];
      let N = -1;
      h == null ? void 0 : h.addEventListener("click", (y) => {
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
          y.preventDefault(), gs();
          return;
        }
        if ((y.ctrlKey || y.metaKey) && (y.key === "y" || y.key === "z" && y.shiftKey)) {
          y.preventDefault(), xs();
          return;
        }
        if ((y.key === "Delete" || y.key === "Backspace") && ft.size > 0) {
          y.preventDefault(), ft.forEach((E) => ne.add(E)), ft.clear(), so && (so.remove(), so = null), Se();
          return;
        }
        if (y.key === "Escape") {
          if (oo) if (ut !== null) {
            ut = null;
            const E = nt();
            At && E && (E.scene.remove(At), At.geometry.dispose(), At.material.dispose(), At = null), Ct && E && (E.scene.remove(Ct), Ct.geometry.dispose(), Ct.material.dispose(), Ct = null), E == null ? void 0 : E.render();
          } else en();
          Bt && Qo(), Vt && (Vt = false, $o(), (_a3 = we.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), k == null ? void 0 : k.addEventListener("keydown", (y) => {
        if (y.stopPropagation(), y.key === "Enter") {
          const E = k.value.trim();
          if (E) {
            q.unshift(E), N = -1, I && (I.textContent += `> ${E}
`);
            try {
              const m = new Function("cad", `return ${E}`)(Ye);
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
        } else y.key === "ArrowUp" ? (y.preventDefault(), q.length > 0 && N < q.length - 1 && (N++, k.value = q[N])) : y.key === "ArrowDown" && (y.preventDefault(), N > 0 ? (N--, k.value = q[N]) : (N = -1, k.value = ""));
      });
      let g = false, u = 0, $ = 0, z = 0, C = 0;
      we.addEventListener("mousedown", (y) => {
        const E = y.target.tagName;
        if (E === "BUTTON" || E === "INPUT" || E === "SELECT") return;
        g = true;
        const m = we.getBoundingClientRect();
        we.style.bottom = "unset", u = y.clientX, $ = y.clientY, z = m.left, C = m.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        g && (y.preventDefault(), we.style.left = z + (y.clientX - u) + "px", we.style.top = C + (y.clientY - $) + "px");
      }), window.addEventListener("mouseup", () => {
        g = false;
      }), Ve();
    }, 10);
    function nt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function fo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ke(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [c, i, b] of t) c < o && (o = c), c > s && (s = c), i < n && (n = i), i > d && (d = i), b < l && (l = b), b > a && (a = b);
      const r = new ke((o + s) / 2, (n + d) / 2, (l + a) / 2), f = Math.max(s - o, d - n, a - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function kt(t = false) {
      const o = nt();
      if (!o) return;
      const { extent: n } = fo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const d = wa(), a = new Ca(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((w) => w instanceof tn))).forEach((b) => {
        b.traverse((w) => {
          w.geometry && w.geometry.dispose(), w.material && (w.material.map && w.material.map.dispose(), w.material.dispose());
        }), o.scene.remove(b);
      });
      const f = 0.05 * l, c = new on();
      c.name = "viewerAxes";
      const i = d.axisArrow;
      c.add(new tn(new ke(1, 0, 0), new ke(), 1, i, 0.2, 0.2)), c.add(new tn(new ke(0, 1, 0), new ke(), 1, i, 0.2, 0.2)), c.add(new tn(new ke(0, 0, 1), new ke(), 1, i, 0.2, 0.2)), c.children.forEach((b) => b.scale.set(f, f, f));
      for (const [b, w, M] of [
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
        p.fillStyle = w, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(b, 32, 34);
        const h = new Hn(v);
        h.needsUpdate = true;
        const S = new nn(new sn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        S.position.set(M[0], M[1], M[2]), S.scale.set(0.4 * f, 0.4 * f, 1), S.renderOrder = 99, c.add(S);
      }
      o.scene.add(c), t ? o.render() : uo("3d");
    }
    function hs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function uo(t) {
      var _a2;
      const o = nt();
      if (!o) return;
      const { center: n, extent: l } = fo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", c = r.isSprite, i = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || c || i) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + f * 0.5, n.y - f * 0.8, n.z + f * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -d * s, r.right = d * s, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (c, i, b) => {
          r.position.copy(c), r.up.copy(b), o.controls.target.copy(i), r.lookAt(i), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], f(new ke(n.x, n.y, n.z + l * 2), new ke(n.x, n.y, n.z), new ke(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const c = parseInt(t.split(":")[1]), i = ((_a2 = ie.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (c + 1) * i, w = i * 0.45;
          o.renderer.clippingPlanes = [
            new go(new ke(0, 0, -1), b + w),
            new go(new ke(0, 0, 1), -b + w)
          ], a(), f(new ke(n.x, n.y, b + l * 2), new ke(n.x, n.y, b), new ke(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const c = parseInt(t.split(":")[1]), i = Ne[c] ?? n.x;
          if (Pe.length > 1) {
            const w = hs(Ne, c, l);
            o.renderer.clippingPlanes = [
              new go(new ke(-1, 0, 0), i + w),
              new go(new ke(1, 0, 0), -i + w)
            ], a(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const c = parseInt(t.split(":")[1]), i = Pe[c] ?? n.y;
          if (Ne.length > 1) {
            const w = hs(Pe, c, l);
            o.renderer.clippingPlanes = [
              new go(new ke(0, -1, 0), i + w),
              new go(new ke(0, 1, 0), -i + w)
            ], a(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function zn() {
      const t = we.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ne.length < 2 && Pe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, r) => {
        const f = document.createElement("button");
        return f.textContent = d, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (c) => {
          var _a2;
          c.stopPropagation();
          const i = f.classList.contains("view-active");
          we.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), i ? (uo("3d"), (_a2 = we.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (uo(a), f.classList.add("view-active"));
        }), f;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ne.forEach((d, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Pe.forEach((d, a) => {
        const r = `${a + 1}`;
        t.appendChild(o(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Tn() {
      var _a2;
      const t = we.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = ie.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, d, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = d, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const c = r.classList.contains("view-active");
          we.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), c ? (uo("3d"), (_a3 = we.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (uo(d), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Qs() {
      uo("3d"), we.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ye.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, uo(t), we.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Vt = false, Bt = false, oo = false, Nt = "line", Yt = [], ut = null, At = null, Ct = null, Lo = null, Gt = null;
    const ht = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Ln = 0.5;
    let An = [], Jt = null, yo = null;
    const Ao = [], Zo = [], ea = 50;
    function Co() {
      Ao.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Ao.length > ea && Ao.shift(), Zo.length = 0;
    }
    function gs() {
      if (Ao.length === 0) return;
      Zo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Ao.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, po(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function xs() {
      if (Zo.length === 0) return;
      Ao.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Zo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, po(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ft = /* @__PURE__ */ new Set();
    let Dt = null, mo = [], no = null, so = null;
    function Cn(t) {
      const o = nt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const f = n[l[r]], c = n[l[(r + 1) % l.length]];
        s.push(f[0], f[1], f[2], c[0], c[1], c[2]);
      }
      const d = new Xt();
      d.setAttribute("position", new wo(s, 3));
      const a = new Ro(d, new _o({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), mo.push(a), o.render();
    }
    function bo() {
      const t = nt();
      mo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), mo = [], t == null ? void 0 : t.render();
    }
    function ho() {
      so && so.remove();
      const t = V.size > 0 || G;
      if (ft.size === 0 && !t) {
        so = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${ft.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), so = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        ga([
          ...ft
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (ft.size === 1) {
          const n = [
            ...ft
          ][0];
          Es(n);
        } else {
          const n = [
            ...ft
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, r = 0, f = 0;
          n.forEach((i) => {
            const b = s[i];
            if (b) if (b.length === 2) {
              const w = l[b[0]], M = l[b[1]], v = Math.abs(M[0] - w[0]), p = Math.abs(M[1] - w[1]), h = Math.abs(M[2] - w[2]);
              h > v && h > p ? d++ : a++;
            } else b.length === 3 ? r++ : b.length === 4 && f++;
          });
          const c = [];
          d && c.push(`${d} columnas`), a && c.push(`${a} vigas`), f && c.push(`${f} shells Q4`), r && c.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${c.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ft.forEach((n) => V.add(n)), ft.clear(), bo(), ho(), Se();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        G = true, Y.clear(), ft.forEach((n) => Y.add(n)), ft.clear(), bo(), ho(), Se();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), G = false, Y.clear(), ho(), Se();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Co(), ft.forEach((n) => ne.add(n)), ft.clear(), bo(), ho(), Se();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ft.clear(), bo(), ho();
      });
    }
    function Qo() {
      var _a2;
      Bt = false, ft.clear(), bo(), so && (so.remove(), so = null), (_a2 = we.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = nt();
      o && (o.controls.enabled = true);
    }
    function $o() {
      if (Dt) {
        const t = nt();
        t == null ? void 0 : t.scene.remove(Dt), Dt.geometry.dispose(), Dt.material.dispose(), Dt = null, t == null ? void 0 : t.render();
      }
      no && (no.remove(), no = null);
    }
    function ta(t) {
      Pn();
      const o = nt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      yo = t;
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
      for (const [d, a] of s) {
        const r = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), f = new Xt();
        f.setAttribute("position", new Ia(r, 3));
        const c = new No({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new Ro(f, c);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), An.push(i);
      }
      o.render();
    }
    function Pn() {
      const t = nt();
      for (const o of An) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      An = [], yo = null, Jt && (Jt.remove(), Jt = null);
    }
    function vs(t, o, n, l) {
      Jt || (Jt = document.createElement("div"), Jt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Jt));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, r = Math.sqrt(s * s + d * d + a * a), f = Math.abs(s), c = Math.abs(d), i = Math.abs(a);
      let b = "";
      f > c && f > i ? b = `\u0394X=${s.toFixed(2)}` : c > f && c > i ? b = `\u0394Y=${d.toFixed(2)}` : i > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Jt.textContent = `${r.toFixed(3)} m  ${b}`, Jt.style.left = t + 20 + "px", Jt.style.top = o - 10 + "px";
    }
    function oa(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ke(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), r = 0.3, f = Math.abs(a.x), c = Math.abs(a.y), i = Math.abs(a.z);
      return c < r && i < r && f > 0.01 ? new ke(d.x, s.y, s.z) : f < r && i < r && c > 0.01 ? new ke(s.x, d.y, s.z) : f < r && c < r && i > 0.01 ? new ke(s.x, s.y, d.z) : null;
    }
    function en() {
      var _a2;
      const t = nt();
      At && t && (t.scene.remove(At), At.geometry.dispose(), At.material.dispose(), At = null), Ct && t && (t.scene.remove(Ct), Ct.geometry.dispose(), Ct.material.dispose(), Ct = null), Pn(), ut = null, Gt = null, oo = false, Lo && (Lo.remove(), Lo = null), (_a2 = we.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function na() {
      Lo && Lo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Nt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Nt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Nt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Nt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(ht.node)}">Node</button>
      <button id="ds-grid" style="${n(ht.grid)}">Grid</button>
      <button id="ds-mid" style="${n(ht.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(ht.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Ln}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Lo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = o(Nt === "line")), d && (d.style.cssText = o(Nt === "arc")), a && (a.style.cssText = o(Nt === "node")), r && (r.style.cssText = o(Nt === "area"));
        const f = t.querySelector("#ds-node"), c = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        f && (f.style.cssText = n(ht.node)), c && (c.style.cssText = n(ht.grid)), i && (i.style.cssText = n(ht.midpoint)), b && (b.style.cssText = n(ht.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Nt = "line", ut = null, Gt = null, Yt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Nt = "arc", ut = null, Gt = null, Yt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Nt = "node", ut = null, Gt = null, Yt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Nt = "area", ut = null, Gt = null, Yt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        ht.node = !ht.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        ht.grid = !ht.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        ht.midpoint = !ht.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        ht.track = !ht.track, ht.track || Pn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ht.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => gs()), t.querySelector("#dt-redo").addEventListener("click", () => xs());
    }
    function ys(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, r = new _s();
      r.setFromCamera(new Hs(d, a), n);
      const f = e.nodes.val, c = e.elements.val, i = 0.12;
      if (ht.node) {
        let M = -1, v = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const h = f[p], S = new ke(h[0], h[1], h[2]).project(n), I = Math.sqrt((S.x - d) ** 2 + (S.y - a) ** 2);
          I < i && I < v && (v = I, M = p);
        }
        if (M >= 0) return {
          nodeIdx: M,
          worldPos: new ke(...f[M]),
          snapType: "node"
        };
      }
      if (ht.midpoint) {
        let M = 1 / 0, v = null;
        for (const p of c) {
          if (p.length !== 2) continue;
          const h = f[p[0]], S = f[p[1]], I = new ke((h[0] + S[0]) / 2, (h[1] + S[1]) / 2, (h[2] + S[2]) / 2), k = I.clone().project(n), q = Math.sqrt((k.x - d) ** 2 + (k.y - a) ** 2);
          q < i * 0.8 && q < M && (M = q, v = I);
        }
        if (v) return {
          nodeIdx: null,
          worldPos: v,
          snapType: "mid"
        };
      }
      if (ht.grid) {
        const M = new go(new ke(0, 0, 1), 0), v = new ke();
        if (r.ray.intersectPlane(M, v)) {
          const p = ht.gridSize || Ln;
          return v.x = Math.round(v.x / p) * p, v.y = Math.round(v.y / p) * p, v.z = Math.round(v.z / p) * p, {
            nodeIdx: null,
            worldPos: v,
            snapType: "grid"
          };
        }
      }
      const b = new go(new ke(0, 0, 1), 0), w = new ke();
      return r.ray.intersectPlane(b, w), {
        nodeIdx: null,
        worldPos: w,
        snapType: "free"
      };
    }
    function $s(t) {
      const o = nt();
      if (!o) return;
      const n = e.nodes.val;
      if (Ct && (o.scene.remove(Ct), Ct.geometry.dispose(), Ct.material.dispose(), Ct = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new ka(s * 2, s * 2, s * 2) : new za(s, 12, 12), a = new Ta({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Ct = new La(d, a), Ct.position.copy(t.worldPos), Ct.renderOrder = 9999, o.scene.add(Ct);
      }
      if (At && (o.scene.remove(At), At.geometry.dispose(), At.material.dispose(), At = null), ut !== null && t.worldPos) {
        const l = n[ut], s = new Xt();
        if (Nt === "arc" && Gt !== null) {
          const a = n[Gt], r = Ms(new ke(l[0], l[1], l[2]), new ke(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let c = 0; c < r.length - 1; c++) f.push(r[c].x, r[c].y, r[c].z, r[c + 1].x, r[c + 1].y, r[c + 1].z);
          s.setAttribute("position", new wo(f, 3));
        } else s.setAttribute("position", new wo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new _o({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        At = new So(s, d), Nt === "arc" && Gt !== null && (At = new Ro(s, d)), At.renderOrder = 9999, o.scene.add(At);
      }
      o.render();
    }
    function Ms(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), c = 2 * (1 - a) * a, i = a * a;
        s.push(new ke(f * t.x + c * r.x + i * n.x, f * t.y + c * r.y + i * n.y, f * t.z + c * r.z + i * n.z));
      }
      return s;
    }
    function Fn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      Co();
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
    function sa(t) {
      var _a2;
      if (Nt === "node") {
        if (!t.worldPos) return;
        Co();
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
      if (Nt === "line") {
        const o = Fn(t);
        if (o < 0) return;
        if (ut === null) {
          ut = o;
          return;
        }
        if (o === ut) return;
        Co();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === ut && s[1] === o || s[1] === ut && s[0] === o)) || (n.push([
          ut,
          o
        ]), e.elements.val = n, po(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), ut = o;
        return;
      }
      if (Nt === "arc") {
        const o = Fn(t);
        if (o < 0) return;
        if (ut === null) {
          ut = o;
          return;
        }
        if (Gt === null) {
          if (o === ut) return;
          Gt = o;
          return;
        }
        if (o === ut || o === Gt) return;
        const n = e.nodes.val, l = new ke(...n[ut]), s = new ke(...n[Gt]), d = new ke(...n[o]), a = Math.max(4, Math.round(((_a2 = ie.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ms(l, s, d, a);
        Co();
        const f = [
          ...e.nodes.val
        ], c = [
          ...e.elements.val
        ];
        let i = ut;
        for (let b = 1; b < r.length; b++) {
          let w;
          if (b === r.length - 1) w = o;
          else {
            const M = r[b];
            w = f.length, f.push([
              M.x,
              M.y,
              M.z
            ]);
          }
          c.push([
            i,
            w
          ]), i = w;
        }
        e.nodes.val = f, e.elements.val = c, po(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, ut = o, Gt = null;
        return;
      }
      if (Nt === "area") {
        const o = Fn(t);
        if (o < 0) return;
        if (Yt.length >= 3 && o === Yt[0]) {
          Co();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = Yt.map((d) => n[d]);
          try {
            const d = io({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: Ln || 0.5
            }), a = [];
            for (const r of d.nodes) {
              let f = -1;
              for (let c = 0; c < n.length; c++) {
                const i = Math.abs(n[c][0] - r[0]), b = Math.abs(n[c][1] - r[1]), w = Math.abs(n[c][2] - r[2]);
                if (i < 0.01 && b < 0.01 && w < 0.01) {
                  f = c;
                  break;
                }
              }
              f >= 0 ? a.push(f) : (a.push(n.length), n.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of d.elements) l.push([
              a[r[0]],
              a[r[1]],
              a[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, po(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Yt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Yt = [];
          return;
        }
        if (Yt.push(o), console.log(`Area vertex ${Yt.length}: node ${o}`), Yt.length >= 2) {
          const n = Yt[Yt.length - 2], l = e.nodes.val, s = nt();
          if (s) {
            const d = new Xt().setFromPoints([
              new ke(...l[n]),
              new ke(...l[o])
            ]), a = new Ro(d, new _o({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function ws(t) {
      const o = nt();
      if (!o) return;
      Dt && (o.scene.remove(Dt), Dt.geometry.dispose(), Dt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const r = n[l[a]], f = n[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const d = new Xt();
      d.setAttribute("position", new wo(s, 3)), Dt = new Ro(d, new _o({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Dt.renderOrder = 9999, o.scene.add(Dt), o.render();
    }
    function On(t) {
      const o = nt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new Hs((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new _s();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const c = s.ray;
      for (let b = 0; b < a.length; b++) {
        const w = a[b];
        if (w.length === 2) {
          const M = new ke(...d[w[0]]), v = new ke(...d[w[1]]), p = new Aa(M, v), h = new ke(), S = new ke();
          c.closestPointToPoint(p.getCenter(new ke()), h), p.closestPointToPoint(h, true, S);
          const I = h.distanceTo(S);
          I < r && (r = I, f = b);
        } else if (w.length === 3) {
          const M = new ke(...d[w[0]]), v = new ke(...d[w[1]]), p = new ke(...d[w[2]]), h = new ke();
          if (c.intersectTriangle(M, v, p, false, h)) {
            const I = c.origin.distanceTo(h);
            I < r && (r = I, f = b);
          } else {
            const I = M.add(v).add(p).divideScalar(3), k = new ke();
            c.closestPointToPoint(I, k);
            const q = k.distanceTo(I);
            q < r && (r = q, f = b);
          }
        } else if (w.length === 4) {
          const M = new ke(...d[w[0]]), v = new ke(...d[w[1]]), p = new ke(...d[w[2]]), h = new ke(...d[w[3]]), S = new ke();
          let I = c.intersectTriangle(M, v, p, false, S);
          if (I) {
            const k = c.origin.distanceTo(S);
            k < r && (r = k, f = b);
          }
          if (I = c.intersectTriangle(M, p, h, false, S), I) {
            const k = c.origin.distanceTo(S);
            k < r && (r = k, f = b);
          }
        }
      }
      const { extent: i } = fo();
      return r < i * 0.1 ? f : -1;
    }
    function me(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function qn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let d = "<table>";
      if (o) {
        d += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) d += `<td class="header">${o[a] || a}</td>`;
        d += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        d += "<tr>", o && (d += `<td class="header">${o[a] || a}</td>`);
        for (let r = 0; r < s; r++) {
          const f = t[a][r], c = Math.abs(f) > 1e-10 ? "nonzero" : "";
          d += `<td class="${c}">${me(f, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function Fe(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function O(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function aa(t, o, n, l, s, d, a) {
      const r = 0.8333333333333334 * o, f = 5 / 6 * o, c = f > 0 && s > 0 ? 12 * t * n / (s * f * a ** 2) : 0, i = r > 0 && s > 0 ? 12 * t * l / (s * r * a ** 2) : 0, b = t * o / a, w = s * d / a, M = 12 * t * n / a ** 3 / (1 + c), v = 6 * t * n / a ** 2 / (1 + c), p = 4 * t * n / a * (1 + c / 4) / (1 + c), h = 2 * t * n / a * (1 - c / 2) / (1 + c), S = c > 1e-10 || i > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${S ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${S ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${O("A", "s")} = ${Fe("5", "6")} \xB7 ${O("A")} = <span class="highlight">${me(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Fe("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("G") + "\xB7" + O("A", "s") + "\xB7" + O("L") + "\xB2")} = <span class="highlight">${me(c)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${me(i)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${O("t", "z")} = ${Fe("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${me(M)}</span> &nbsp;(cortante)</div>
      <div>${O("b", "z")} = ${Fe("6\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${me(v)}</span> &nbsp;(acoplamiento)</div>
      <div>${O("k", "z")} = ${Fe("4\xB7" + O("E") + "\xB7" + O("I", "z") + "\xB7(1+\u03C6/4)", O("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${me(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${O("a", "z")} = ${Fe("2\xB7" + O("E") + "\xB7" + O("I", "z") + "\xB7(1\u2212\u03C6/2)", O("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${me(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Fe(O("E") + "\xB7" + O("A"), O("L"))} = <span class="highlight">${me(b)}</span> &nbsp;(axial)</div>
      <div>${Fe(O("G") + "\xB7" + O("J"), O("L"))} = <span class="highlight">${me(w)}</span> &nbsp;(torsi\xF3n)</div>
      ${S ? "" : `
      <div>${Fe("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3")} = <span class="highlight">${me(M)}</span></div>
      <div>${Fe("4\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))} = <span class="highlight">${me(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${O("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Fe(O("EA"), O("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Fe("\u2212" + O("EA"), O("L"))}</span>
        <span class="cell">0</span><span class="cell">${O("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${O("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${O("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${O("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${S ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${S ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${O("K", "f")} = ${O("B", "f")}<sup>T</sup> \xB7 ${O("E")}\xB7${O("I")} \xB7 ${O("B", "f")} \xB7 ${O("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${O("K", "c")} = ${O("B", "c")}<sup>T</sup> \xB7 ${O("G")}\xB7${O("A'")} \xB7 ${O("B", "c")} \xB7 ${O("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${O("K", "total")} = ${O("K", "f")} + ${O("K", "c")}</div>
    </div>` : ""}`;
    }
    function la(t) {
      if (t.length === 2) {
        const n = co(t[1], t[0]), l = ko(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${O("l")} = cos(\u03B1) = ${Fe("\u0394x", O("L"))} = ${Fe(me(n[0]), me(l))} = <span class="highlight">${me(s)}</span></div>
        <div>${O("m")} = cos(\u03B2) = ${Fe("\u0394y", O("L"))} = ${Fe(me(n[1]), me(l))} = <span class="highlight">${me(d)}</span></div>
        <div>${O("n")} = cos(\u03B3) = ${Fe("\u0394z", O("L"))} = ${Fe(me(n[2]), me(l))} = <span class="highlight">${me(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${O("l")}</span><span class="cell">${O("m")}</span><span class="cell">${O("n")}</span>
          <span class="cell">${Fe("\u2212" + O("m"), O("D"))}</span><span class="cell">${Fe(O("l"), O("D"))}</span><span class="cell">0</span>
          <span class="cell">${Fe("\u2212" + O("l") + "\xB7" + O("n"), O("D"))}</span><span class="cell">${Fe("\u2212" + O("m") + "\xB7" + O("n"), O("D"))}</span><span class="cell">${O("D")}</span>
        </span>
        &nbsp; donde ${O("D")} = \u221A(${O("l")}\xB2 + ${O("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${O("T")} = ${O("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${O("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function ra() {
      return `<div class="fem-eq">
      ${O("K", "global")} = ${O("T")}<sup>T</sup> \xB7 ${O("k", "local")} \xB7 ${O("T")}
    </div>`;
    }
    function ia(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${O("K", "global")}[${O("i")}, ${O("j")}] += ${O("K", "elem")}[${O("i")}, ${O("j")}]</div>
      <div style="margin-top:4px">donde ${O("i")}, ${O("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function ca(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${O("u", "local")} = ${O("T")} \xB7 ${O("u", "global")}</div>
        <div>${O("f", "local")} = ${O("k", "local")} \xB7 ${O("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${O("f")} = [${O("N", "i")}, ${O("V", "y,i")}, ${O("V", "z,i")}, ${O("M", "x,i")}, ${O("M", "y,i")}, ${O("M", "z,i")}, ${O("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Fe("1", "2" + O("A"))} \xB7 ${O("D")} \xB7 ${O("B")} \xB7 ${O("u")}</div>
      <div>${O("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${O("t")} &nbsp;&nbsp; ${O("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Fe(O("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Nn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], r = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${me(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ss() {
      const t = "0", o = Fe(O("EA"), O("L")), n = Fe("\u2212" + O("EA"), O("L")), l = Fe("12" + O("EI", "z"), O("L") + "\xB3"), s = Fe("\u221212" + O("EI", "z"), O("L") + "\xB3"), d = Fe("12" + O("EI", "y"), O("L") + "\xB3"), a = Fe("\u221212" + O("EI", "y"), O("L") + "\xB3"), r = Fe("6" + O("EI", "z"), O("L") + "\xB2"), f = Fe("\u22126" + O("EI", "z"), O("L") + "\xB2"), c = Fe("6" + O("EI", "y"), O("L") + "\xB2"), i = Fe("\u22126" + O("EI", "y"), O("L") + "\xB2"), b = Fe(O("GJ"), O("L")), w = Fe("\u2212" + O("GJ"), O("L")), M = Fe("4" + O("EI", "z"), O("L")), v = Fe("2" + O("EI", "z"), O("L")), p = Fe("4" + O("EI", "y"), O("L")), h = Fe("2" + O("EI", "y"), O("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', I = [
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
      ], q = [
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
          d,
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
          w,
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
          c,
          t,
          t,
          t,
          d,
          t,
          c,
          t
        ],
        [
          t,
          t,
          t,
          w,
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
          c,
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
      let N = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      N += '<table><tr><td class="hdr"></td>';
      for (const g of k) N += `<td class="hdr">${g}</td>`;
      N += "</tr>";
      for (let g = 0; g < 12; g++) {
        N += `<tr><td class="hdr">${I[g]}</td>`;
        for (let u = 0; u < 12; u++) if (u < g) N += `<td style="color:var(--fem-border-cell)">${u === 0 && g > 0 ? S : ""}</td>`;
        else {
          const $ = q[g][u], z = (g === u ? "diag " : "") + ($ !== "0" ? "nz" : "");
          N += `<td class="${z}">${$}</td>`;
        }
        N += "</tr>";
      }
      return N += "</table>", N;
    }
    function da(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${Fe(O("E") + "\xB7" + O("A"), O("L"))}`,
          calc: `${Fe(me(t) + "\xD7" + me(o), me(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${Fe("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3")}`,
          calc: `${Fe("12\xD7" + me(t) + "\xD7" + me(n), me(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${Fe("6\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB2")}`,
          calc: `${Fe("6\xD7" + me(t) + "\xD7" + me(n), me(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Fe("12\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB3")}`,
          calc: `${Fe("12\xD7" + me(t) + "\xD7" + me(l), me(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${Fe("6\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB2")}`,
          calc: `${Fe("6\xD7" + me(t) + "\xD7" + me(l), me(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Fe(O("G") + "\xB7" + O("J"), O("L"))}`,
          calc: `${Fe(me(s) + "\xD7" + me(d), me(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${Fe("4\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`,
          calc: `${Fe("4\xD7" + me(t) + "\xD7" + me(n), me(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Fe("2\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`,
          calc: `${Fe("2\xD7" + me(t) + "\xD7" + me(n), me(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Fe("4\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`,
          calc: `${Fe("4\xD7" + me(t) + "\xD7" + me(l), me(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Fe("2\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`,
          calc: `${Fe("2\xD7" + me(t) + "\xD7" + me(l), me(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${me(f.val)}</span></div>`).join("")}</div>`;
    }
    function Rn(t, o, n, l) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
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
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (a) => {
        a.target === d && d.remove();
      });
    }
    function Es(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      no && no.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((g) => o[g]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const g = ko(co(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, $ = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, z = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, C = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, y = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, E = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${me(g)}${me(u)}${me($)}${me(z)}${me(C)}${me(y)}${me(E)}`;
      } else {
        const g = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, u = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, $ = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${me(g)}${me(u)}${me($)}`;
      }
      let c = "", i = "", b = "", w = "", M = "", v = "", p = "", h = "", S = null, I = null, k = null, q = [];
      try {
        if (S = pn(s, a, t), I = fn(s), k = Ut(Yn(I), Ut(S, I)), q = d ? [
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
        ], d) {
          const z = ko(co(s[1], s[0])), C = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, y = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, E = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, m = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, A = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, F = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          w = aa(C, y, E, m, A, F, z);
        }
        M = la(s), v = ra(), p = ia(l), h = ca(d);
        const g = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', $ = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        c = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${g}</div>${qn(S, q)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${I.length}\xD7${I.length}) ${u}</div>${qn(I, q)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${$}</div>${qn(k, q)}`;
      } catch (g) {
        c = `<div style="color:red">Error: ${g.message}</div>`;
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
        l.map((u, $) => {
          var _a3;
          const z = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], C = g.map((y, E) => `<span class="prop-key">${y}</span>: <span class="${Math.abs(z[E]) > 1e-10 ? "result-val" : ""}">${me(z[E])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${C}</div>`;
        }).join("");
      }
      if (f && d && (r == null ? void 0 : r.deformations) && S && I) {
        const g = (_s2 = f.normals) == null ? void 0 : _s2.get(t), u = (_t = f.shearsY) == null ? void 0 : _t.get(t), $ = (_u = f.shearsZ) == null ? void 0 : _u.get(t), z = (_v = f.torsions) == null ? void 0 : _v.get(t), C = (_w = f.bendingsY) == null ? void 0 : _w.get(t), y = (_x = f.bendingsZ) == null ? void 0 : _x.get(t), E = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], m = [];
        for (const Z of l) {
          const te = ((_y = r.deformations) == null ? void 0 : _y.get(Z)) || [
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
          A = Ut(I, m);
        } catch {
          A = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = Ut(S, A);
        } catch {
          F = new Array(12).fill(0);
        }
        const H = (Z, te) => Z.map((j, he) => `<span style="color:${Math.abs(j) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${te[he % 6]}=${me(j)}</span>`).join(", "), Q = [
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
        ].map((Z, te) => `${Z}${te < 6 ? "\u1D62" : "\u2C7C"}`);
        `${O("u", "global")}${l.map((Z, te) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${E.map((j, he) => `<span style="color:${Math.abs(m[te * 6 + he]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${me(m[te * 6 + he])}</span>`).join(", ")}`).join(" | ")}${O("u", "local")}${O("T")}${O("u", "global")}${O("u", "local")}${H(A, [
          ...E,
          ...E
        ])}${O("f", "local")}${O("k", "local")}${O("u", "local")}${O("f", "local")}${F.map((Z, te) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[te]}=${me(Z)}</span>`).join(", ")}${O("P", "1")}${O("N", "i")}${me(F[0])}${O("P", "7")}${O("N", "j")}${me(F[6])}${O("P", "2")}${O("V", "y,i")}${me(F[1])}${O("P", "8")}${O("V", "y,j")}${me(F[7])}${O("P", "3")}${O("V", "z,i")}${me(F[2])}${O("P", "9")}${O("V", "z,j")}${me(F[8])}${O("P", "4")}${O("M", "x,i")}${me(F[3])}${O("P", "10")}${O("M", "x,j")}${me(F[9])}${O("P", "5")}${O("M", "y,i")}${me(F[4])}${O("P", "11")}${O("M", "y,j")}${me(F[10])}${O("P", "6")}${O("M", "z,i")}${me(F[5])}${O("P", "12")}${O("M", "z,j")}${me(F[11])}${g ? g.map((Z) => me(Z)).join(", ") : "\u2014"}${u ? u.map((Z) => me(Z)).join(", ") : "\u2014"}${$ ? $.map((Z) => me(Z)).join(", ") : "\u2014"}${z ? z.map((Z) => me(Z)).join(", ") : "\u2014"}${C ? C.map((Z) => me(Z)).join(", ") : "\u2014"}${y ? y.map((Z) => me(Z)).join(", ") : "\u2014"}`;
      } else if (f && d) {
        const g = (_z = f.normals) == null ? void 0 : _z.get(t), u = (_A = f.shearsY) == null ? void 0 : _A.get(t), $ = (_B = f.shearsZ) == null ? void 0 : _B.get(t), z = (_C = f.torsions) == null ? void 0 : _C.get(t), C = (_D = f.bendingsY) == null ? void 0 : _D.get(t), y = (_E = f.bendingsZ) == null ? void 0 : _E.get(t);
        `${g ? g.map((E) => me(E)).join(", ") : "\u2014"}${u ? u.map((E) => me(E)).join(", ") : "\u2014"}${$ ? $.map((E) => me(E)).join(", ") : "\u2014"}${z ? z.map((E) => me(E)).join(", ") : "\u2014"}${C ? C.map((E) => me(E)).join(", ") : "\u2014"}${y ? y.map((E) => me(E)).join(", ") : "\u2014"}`;
      } else if (f && !d) {
        const g = (_F = f.bendingXX) == null ? void 0 : _F.get(t), u = (_G = f.bendingYY) == null ? void 0 : _G.get(t), $ = (_H = f.bendingXY) == null ? void 0 : _H.get(t), z = (_I = f.membraneXX) == null ? void 0 : _I.get(t), C = (_J = f.membraneYY) == null ? void 0 : _J.get(t), y = (_K = f.membraneXY) == null ? void 0 : _K.get(t);
        `${g ? g.map((E) => me(E)).join(", ") : "\u2014"}${u ? u.map((E) => me(E)).join(", ") : "\u2014"}${$ ? $.map((E) => me(E)).join(", ") : "\u2014"}${z ? z.map((E) => me(E)).join(", ") : "\u2014"}${C ? C.map((E) => me(E)).join(", ") : "\u2014"}${y ? y.map((E) => me(E)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, no = Ya(t, o, n, a, r, f), no.id = "fem-inspect-panel", document.body.appendChild(no), (_L = no.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => $o());
      const N = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const g = ko(co(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, $ = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, z = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, C = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, y = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, E = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return da(u, $, z, C, y, E, g);
      })() : void 0;
      no.querySelectorAll("[data-full]").forEach((g) => {
        g.addEventListener("click", (u) => {
          u.stopPropagation();
          const $ = g.dataset.full;
          if ($ === "kLocal" && S) {
            const z = d ? Ss() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Rn(`Elemento ${t} \u2014 Rigidez Local k_local`, z, Nn(S, q), N);
          } else if ($ === "T" && I) Rn(`Elemento ${t} \u2014 Transformaci\xF3n T`, M, Nn(I, q));
          else if ($ === "kGlobal" && k) {
            const z = d ? Ss() : "<em>Shell 18\xD718</em>";
            Rn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, z, Nn(k, q), N);
          }
        });
      });
    }
    function Is() {
      const l = [], s = [];
      for (let v = 0; v <= 8; v++) {
        const p = v / 8, h = 30 * p, I = 12 * (1 - p) * (1 - p * 0.3) / 2, k = l.length;
        if (l.push([
          -I,
          -I,
          h
        ]), l.push([
          I,
          -I,
          h
        ]), l.push([
          I,
          I,
          h
        ]), l.push([
          -I,
          I,
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
          const q = k - 4;
          for (let N = 0; N < 4; N++) s.push([
            q + N,
            k + N
          ]);
          s.push([
            q,
            k + 1
          ]), s.push([
            q + 1,
            k + 2
          ]), s.push([
            q + 2,
            k + 3
          ]), s.push([
            q + 3,
            k
          ]);
        }
      }
      const d = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) d.set(v, [
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
        supports: d,
        loads: r
      });
      const f = 2e8, c = 77e6, i = 5e-3, b = 2e-6, w = 1e-6, M = {
        elasticities: new Map(s.map((v, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((v, p) => [
          p,
          c
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
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const v = Pt(l, s, {
          supports: d,
          loads: r
        }, M);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Eiffel deform:", v.message);
      }
      setTimeout(() => kt(), 50), Ve(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function ks() {
      const l = [], s = [];
      for (let M = 0; M <= 20; M++) {
        const v = M / 20, p = 20 * v, h = 20 * (1 - Math.pow(2 * v - 1, 2)), S = 2;
        l.push([
          p,
          -2 / 2,
          h
        ]), l.push([
          p,
          S / 2,
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
        supports: d,
        loads: a
      });
      const r = 2e8, f = 77e6, c = 0.01, i = 5e-6, b = 2e-6, w = {
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
          c
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
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const M = Pt(l, s, {
          supports: d,
          loads: a
        }, w);
        M && e.deformOutputs && (e.deformOutputs.val = M);
      } catch (M) {
        console.warn("Arco:", M.message);
      }
      setTimeout(() => kt(), 50), Ve(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function zs() {
      const d = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const h = 60 * p / 16;
        d.push([
          h,
          -6 / 2,
          8
        ]), d.push([
          h,
          6 / 2,
          8
        ]);
      }
      const r = d.length;
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
      ], c = [];
      for (const p of f) {
        const h = 60 * p / 16, S = d.length;
        d.push([
          h,
          -6 / 2,
          0
        ]);
        const I = d.length;
        d.push([
          h,
          6 / 2,
          0
        ]);
        const k = d.length;
        d.push([
          h,
          -6 / 2,
          28
        ]);
        const q = d.length;
        d.push([
          h,
          6 / 2,
          28
        ]), c.push(k, q), a.push([
          S,
          p * 2
        ]), a.push([
          p * 2,
          k
        ]), a.push([
          I,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          q
        ]), a.push([
          k,
          q
        ]);
      }
      for (const p of c) {
        const h = d[p][0];
        for (let S = 0; S <= 16; S++) {
          const I = 60 * S / 16;
          if (Math.abs(I - h) > 60 * 0.05 && Math.abs(I - h) < 60 * 0.45) {
            const k = d[p][1] < 0 ? S * 2 : S * 2 + 1;
            S % 2 === 0 && a.push([
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
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: b
      });
      const w = 2e8, M = 77e6, v = {
        elasticities: new Map(a.map((p, h) => [
          h,
          w
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
        const p = Pt(d, a, {
          supports: i,
          loads: b
        }, v);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => kt(), 50), Ve(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Ts() {
      const d = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const S = h * 3.5, I = h * 5 * Math.PI / 180;
        for (let k = 0; k < 6; k++) {
          const q = I + 2 * Math.PI * k / 6, N = 5 * Math.cos(q), g = 5 * Math.sin(q);
          d.push([
            N,
            g,
            S
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const S = h * 6;
        for (let I = 0; I < 6; I++) a.push([
          S + I,
          S + (I + 1) % 6
        ]);
        if (h < 12) {
          const I = (h + 1) * 6;
          for (let k = 0; k < 6; k++) a.push([
            S + k,
            I + k
          ]), a.push([
            S + k,
            I + (k + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const S = d.length;
        d.push([
          0,
          0,
          h * 3.5
        ]);
        const I = h * 6;
        for (let k = 0; k < 6; k++) a.push([
          S,
          I + k
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
      const c = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const S = 10 * h / 12, I = h * 6;
        for (let k = 0; k < 6; k++) c.set(I + k, [
          S,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: c
      });
      const i = 2e8, b = 77e6, w = 8e-3, M = 1e-5, v = 5e-6, p = {
        elasticities: new Map(a.map((h, S) => [
          S,
          i
        ])),
        shearModuli: new Map(a.map((h, S) => [
          S,
          b
        ])),
        areas: new Map(a.map((h, S) => [
          S,
          w
        ])),
        momentsOfInertiaZ: new Map(a.map((h, S) => [
          S,
          M
        ])),
        momentsOfInertiaY: new Map(a.map((h, S) => [
          S,
          M
        ])),
        torsionalConstants: new Map(a.map((h, S) => [
          S,
          v
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const h = Pt(d, a, {
          supports: f,
          loads: c
        }, p);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => kt(), 50), Ve(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ls() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const h = p / 20, S = p * 3;
        let I = 8 * (1 - h * 0.7);
        h > 0.4 && (I *= 0.85), h > 0.7 && (I *= 0.7);
        const k = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let q = 0; q < 3; q++) {
          const N = q * 2 * Math.PI / 3 - Math.PI / 2, g = I * Math.cos(N), u = I * Math.sin(N), $ = s.length;
          s.push([
            g,
            u,
            S
          ]), d.push([
            k,
            $
          ]);
          const z = s.length;
          s.push([
            g * 0.5,
            u * 0.5,
            S
          ]), d.push([
            k,
            z
          ]), d.push([
            z,
            $
          ]);
        }
        for (let q = 0; q < 3; q++) {
          const N = k + 1 + q * 2, g = k + 1 + (q + 1) % 3 * 2;
          d.push([
            N,
            g
          ]);
        }
        if (p < 20) {
          const N = k + 7;
          d.push([
            k,
            N
          ]);
          for (let g = 0; g < 3; g++) d.push([
            k + 1 + g * 2,
            N + 1 + g * 2
          ]), d.push([
            k + 2 + g * 2,
            N + 2 + g * 2
          ]), d.push([
            k + 1 + g * 2,
            N + 2 + g * 2
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
        const h = p * r, S = 5 * p / 20;
        f.set(h, [
          S,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: f
      });
      const c = 35e6, i = 14e6, b = 0.02, w = 5e-5, M = 2e-5, v = {
        elasticities: new Map(d.map((p, h) => [
          h,
          c
        ])),
        shearModuli: new Map(d.map((p, h) => [
          h,
          i
        ])),
        areas: new Map(d.map((p, h) => [
          h,
          b
        ])),
        momentsOfInertiaZ: new Map(d.map((p, h) => [
          h,
          w
        ])),
        momentsOfInertiaY: new Map(d.map((p, h) => [
          h,
          w
        ])),
        torsionalConstants: new Map(d.map((p, h) => [
          h,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const p = Pt(s, d, {
          supports: a,
          loads: f
        }, v);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => kt(), 50), Ve(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function As() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const w = b * 12, M = 15 - b * 2, v = 20 - b * 3, p = 8 - b, h = t.length;
        for (let I = 0; I <= 4; I++) {
          const k = I / 4, q = -p / 2 + p * k, N = v * (1 - k * k * 0.3);
          for (let g = 0; g <= 12; g++) {
            const u = g / 12, $ = w + N * u, z = M * Math.sin(Math.PI * u) * (1 - k * k * 0.5), C = q;
            t.push([
              $,
              C,
              z
            ]);
          }
        }
        const S = 13;
        for (let I = 0; I < 4; I++) for (let k = 0; k < 12; k++) {
          const q = h + I * S + k, N = h + I * S + k + 1, g = h + (I + 1) * S + k + 1, u = h + (I + 1) * S + k;
          o.push([
            q,
            N,
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
      const d = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && d.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: d
      });
      const a = 35e6, r = 0.2, f = 0.15, c = a / (2 * (1 + r)), i = {
        elasticities: new Map(o.map((b, w) => [
          w,
          a
        ])),
        poissonsRatios: new Map(o.map((b, w) => [
          w,
          r
        ])),
        thicknesses: new Map(o.map((b, w) => [
          w,
          f
        ])),
        shearModuli: new Map(o.map((b, w) => [
          w,
          c
        ]))
      };
      e.elementInputs && (e.elementInputs.val = i);
      try {
        const b = Pt(t, o, {
          supports: s,
          loads: d
        }, i);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => kt(), 50), Ve(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Cs() {
      const l = [], s = [];
      for (let v = 0; v <= 15; v++) {
        const p = v / 15, h = v * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let k = 0; k < 12; k++) {
            const q = 2 * Math.PI * k / 12;
            l.push([
              Math.max(I, 1) * Math.cos(q),
              Math.max(I, 1) * Math.sin(q),
              h
            ]);
          }
        } else for (let I = 0; I < 12; I++) {
          const k = 2 * Math.PI * I / 12;
          l.push([
            S * Math.cos(k),
            S * Math.sin(k),
            h
          ]);
        }
      }
      for (let v = 0; v < 15; v++) {
        const p = v * 12, h = (v + 1) * 12;
        for (let I = 0; I < 12; I++) s.push([
          p + I,
          p + (I + 1) % 12
        ]);
        const S = v % 2 === 0 ? 1 : -1;
        for (let I = 0; I < 12; I++) {
          const k = (I + S + 12) % 12;
          s.push([
            p + I,
            h + k
          ]), s.push([
            p + I,
            h + I
          ]);
        }
      }
      const d = 15 * 12;
      for (let v = 0; v < 12; v++) s.push([
        d + v,
        d + (v + 1) % 12
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
        for (let S = 0; S < 12; S += 3) r.set(p + S, [
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
      const f = 2e8, c = 77e6, i = 6e-3, b = 8e-6, w = 4e-6, M = {
        elasticities: new Map(s.map((v, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((v, p) => [
          p,
          c
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
          w
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
      setTimeout(() => kt(), 50), Ve(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function pa() {
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
    function fa() {
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
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), r = o("po-L"), f = o("po-As") * 1e-4, c = o("po-nbar"), i = o("po-drift") / 100, b = o("po-ncycles"), w = t.querySelector("#pushover-status");
        w.textContent = "Generando historia de desplazamientos...";
        const M = [], v = i * a, p = 40;
        for (let h = 1; h <= b; h++) {
          const S = v * h / b;
          for (let I = 0; I <= p; I++) M.push(S * Math.sin(2 * Math.PI * I / p));
        }
        w.textContent = `Resolviendo pushover (${M.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ya(async () => {
            const { cyclicPushover: I } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: I
            };
          }, __vite__mapDeps([0,1]), import.meta.url), S = await h({
            colHeight: a,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: c
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: c
            },
            dispHistory: M
          });
          w.textContent = `Completado: ${S.nSteps} pasos`, ua(t.querySelector("#pushover-canvas"), S.displacements, S.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (h) {
          w.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function ua(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = d - r.left - r.right, c = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let i = Math.min(...o), b = Math.max(...o), w = Math.min(...n), M = Math.max(...n);
      i === b && (i -= 0.01, b += 0.01), w === M && (w -= 1, M += 1);
      const v = b - i, p = M - w, h = (q) => r.left + (q - i) / v * f, S = (q) => r.top + c - (q - w) / p * c;
      s.strokeStyle = "#333", s.lineWidth = 0.5, i < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), r.top), s.lineTo(h(0), r.top + c), s.stroke()), w < 0 && M > 0 && (s.beginPath(), s.moveTo(r.left, S(0)), s.lineTo(r.left + f, S(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), S(n[0]));
      for (let q = 1; q < o.length; q++) s.lineTo(h(o[q]), S(n[q]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + c / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const I = v / 5;
      for (let q = 0; q <= 5; q++) {
        const N = i + I * q;
        s.fillText((N * 1e3).toFixed(1), h(N), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const k = p / 5;
      for (let q = 0; q <= 5; q++) {
        const N = w + k * q;
        s.fillText(N.toFixed(0), r.left - 5, S(N) + 3);
      }
    }
    let Vo = null;
    function ma() {
      if (Vo) {
        Vo.remove(), Vo = null;
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
    `, document.body.appendChild(t), Vo = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), Vo = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => ba(t));
    }
    function ba(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let J = 0; J < a; J++) {
        const Q = d * (1 + J * 0.5);
        for (let Z = 0; Z < r; Z++) {
          const te = Z / r * 2 * Math.PI;
          f.push(Q * Math.sin(te));
        }
      }
      const c = o / n, i = l * n;
      let b = 0, w = 0, M = -c, v = c, p = 0, h = 0, S = 0, I = 0, k = 0, q = 0;
      const N = [];
      for (const J of f) {
        let Q = M, Z = v, te = p, j = h, he = S, ze = I, fe = k, R = q, oe;
        const se = J - b;
        if (Math.abs(se) < 1e-20) {
          N.push(w);
          continue;
        }
        if ((R === 0 || R === 3) && (se < 0 ? (R = 2, j = -c, he = -o, te = j, ze = 0, fe = 0) : (R = 1, j = c, he = o, te = j, ze = 0, fe = 0)), R === 2 && se > 0) {
          R = 1, ze = b, fe = w, b < Q && (Q = b);
          const Ee = (Z - Q) / (2 * 1 * c), De = 1 + 0 * Math.pow(Ee, 0.8);
          j = (o * De - i * c * De - fe + n * ze) / (n - i), he = o * De + i * (j - c * De), te = Z;
        } else if (R === 1 && se < 0) {
          R = 2, ze = b, fe = w, b > Z && (Z = b);
          const Ee = (Z - Q) / (2 * 1 * c), De = 1 + 0 * Math.pow(Ee, 0.8);
          j = (-o * De + i * c * De - fe + n * ze) / (n - i), he = -o * De + i * (j + c * De), te = Q;
        }
        const ee = Math.abs((te - j) / c);
        let W = s - 0.925 * ee / (0.15 + ee);
        W < 0.1 && (W = 0.1);
        const re = (J - ze) / (j - ze), de = 1 + Math.pow(Math.abs(re), W), U = Math.pow(de, 1 / W);
        oe = l * re + (1 - l) * re / U, oe = oe * (he - fe) + fe, N.push(oe), b = J, w = oe, M = Q, v = Z, p = te, h = j, S = he, I = ze, k = fe, q = R;
      }
      const g = t.querySelector("#nl-canvas"), u = g.getContext("2d"), $ = g.width, z = g.height;
      u.clearRect(0, 0, $, z);
      const C = Math.max(...f.map(Math.abs)), y = Math.max(...N.map(Math.abs)), E = ($ - 40) / (2 * C), m = (z - 40) / (2 * y), A = $ / 2, F = z / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo($ - 20, F), u.stroke(), u.beginPath(), u.moveTo(A, 20), u.lineTo(A, z - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", $ - 40, F - 5), u.fillText("\u03C3 (stress)", A + 30, 15), u.fillText(`\xB1${(C * 100).toFixed(1)}%`, $ - 30, F + 12), u.fillText(`\xB1${(y / 1e3).toFixed(0)} MPa`, A + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let J = 0; J < f.length; J++) {
        const Q = A + f[J] * E, Z = F - N[J] * m;
        J === 0 ? u.moveTo(Q, Z) : u.lineTo(Q, Z);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * m), u.lineTo($ - 20, F - o * m), u.stroke(), u.beginPath(), u.moveTo(20, F + o * m), u.lineTo($ - 20, F + o * m), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, $ - 50, F - o * m - 5);
      const H = t.querySelector("#nl-info");
      H.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function ha() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = _a({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Po = null;
    function ga(t) {
      Po && Po.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = ln(), l = rn(), s = Object.entries(n).map(([c, i]) => `<option value="${i}">${c}</option>`).join(""), d = Object.entries(l).map(([c, i]) => `<option value="${i}">${c}</option>`).join("");
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
    `, document.body.appendChild(o), Po = o;
      const a = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
      function f() {
        const c = a.value;
        let i = "";
        c === "rect" ? i = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : c === "circ" ? i = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : c === "W" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : c === "HSS" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : c === "I-param" ? i = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : c === "tubular" && (i = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = i;
      }
      a.addEventListener("change", f), f(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Po = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const c = a.value, i = {
          secType: c
        };
        c === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : c === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : c === "W" || c === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : c === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : c === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((b) => xe.set(b, {
          ...i
        })), o.remove(), Po = null, po(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((c) => xe.delete(c)), o.remove(), Po = null, po(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Fo = null;
    function xa(t) {
      var _a2, _b, _c;
      Fo && Fo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > d && a > r, c = Math.sqrt(d * d + a * a + r * r), i = Oe.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), w = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), M = document.createElement("div");
      M.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", M.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${i + 1} &nbsp;
        <span style="color:#888;">L:</span> ${c.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${w}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(M), Fo = M, M.querySelector("#ep-close").addEventListener("click", () => {
        M.remove(), Fo = null, $o();
      }), M.querySelector("#ep-delete").addEventListener("click", () => {
        ne.add(t), M.remove(), Fo = null, $o(), Se();
      }), M.querySelector("#ep-inspect").addEventListener("click", () => {
        M.remove(), Fo = null, Es(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function d(f) {
        const c = nt();
        if (!c) return null;
        const i = c.controls.object, b = new ke(f[0], f[1], f[2]);
        b.project(i);
        const w = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * w.width,
          y: (-b.y + 1) / 2 * w.height
        };
      }
      function a(f, c, i, b, w) {
        const M = Math.min(f, i), v = Math.max(f, i), p = Math.min(c, b), h = Math.max(c, b), S = e.nodes.val, I = e.elements.val, k = [];
        for (let q = 0; q < I.length; q++) {
          const N = I[q], g = N.map((u) => d(S[u])).filter(Boolean);
          if (g.length !== 0) if (w) g.every(($) => $.x >= M && $.x <= v && $.y >= p && $.y <= h) && k.push(q);
          else {
            if (g.some(($) => $.x >= M && $.x <= v && $.y >= p && $.y <= h)) {
              k.push(q);
              continue;
            }
            if (N.length === 2) {
              const $ = g[0], z = g[1];
              r($.x, $.y, z.x, z.y, M, p, v, h) && k.push(q);
            }
          }
        }
        return k;
      }
      function r(f, c, i, b, w, M, v, p) {
        const h = (I, k) => I >= w && I <= v && k >= M && k <= p;
        if (h(f, c) || h(i, b)) return true;
        const S = (I, k, q, N, g, u, $, z) => {
          const C = (q - I) * (z - u) - (N - k) * ($ - g);
          if (Math.abs(C) < 1e-10) return false;
          const y = ((g - I) * (z - u) - (u - k) * ($ - g)) / C, E = ((g - I) * (N - k) - (u - k) * (q - I)) / C;
          return y >= 0 && y <= 1 && E >= 0 && E <= 1;
        };
        return S(f, c, i, b, w, M, v, M) || S(f, c, i, b, v, M, v, p) || S(f, c, i, b, w, p, v, p) || S(f, c, i, b, w, M, w, p);
      }
      o.addEventListener("mousedown", (f) => {
        Bt && (n = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), o.addEventListener("mousemove", (f) => {
        if (oo) {
          const i = nt();
          if (!i) return;
          const b = ys(f.clientX, f.clientY, i.camera, i.rendererElm);
          if (ht.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== yo && ta(b.nodeIdx), ht.track && yo !== null && b.worldPos && b.snapType !== "node") {
            const w = oa(b.worldPos, yo);
            w && (b.worldPos = w, b.snapType = "grid");
          }
          if (yo !== null && b.worldPos) {
            const w = e.nodes.val[yo];
            w && vs(f.clientX, f.clientY, new ke(...w), b.worldPos);
          } else if (ut !== null && b.worldPos) {
            const w = e.nodes.val[ut];
            w && vs(f.clientX, f.clientY, new ke(...w), b.worldPos);
          } else Jt && (Jt.remove(), Jt = null);
          b.nodeIdx, $s(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Vt && !Bt) return;
        if (Bt && n) {
          const i = f.offsetX - n.x, b = f.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const w = i > 0, M = Math.min(n.x, f.offsetX), v = Math.min(n.y, f.offsetY), p = Math.abs(i), h = Math.abs(b);
            l.style.left = M + "px", l.style.top = v + "px", l.style.width = p + "px", l.style.height = h + "px", l.style.border = w ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = w ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const c = On(f);
        if (c >= 0) ws(c), o.style.cursor = "pointer";
        else {
          if (Dt) {
            const i = nt();
            i == null ? void 0 : i.scene.remove(Dt), Dt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = Bt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (f) => {
        if (Bt && n) {
          const c = f.offsetX - n.x, i = f.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(i) > s) {
            const b = c > 0, w = a(n.x, n.y, f.offsetX, f.offsetY, b);
            f.ctrlKey || f.metaKey || (ft.clear(), bo()), w.forEach((v) => {
              ft.has(v) || (ft.add(v), Cn(v));
            }), ho();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (f) => {
        if (oo) {
          const c = nt();
          if (!c) return;
          const i = ys(f.clientX, f.clientY, c.camera, c.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (sa(i), $s(i));
          return;
        }
        if (Bt) {
          if (l) return;
          const c = On(f), i = f.ctrlKey || f.metaKey;
          if (c >= 0) {
            if (i) if (ft.has(c)) {
              ft.delete(c);
              const b = mo.findIndex((w) => w.__elemIdx === c);
              if (b >= 0) {
                const w = nt();
                w == null ? void 0 : w.scene.remove(mo[b]), mo[b].geometry.dispose(), mo[b].material.dispose(), mo.splice(b, 1), w == null ? void 0 : w.render();
              }
            } else ft.add(c), Cn(c);
            else ft.clear(), bo(), ft.add(c), Cn(c);
            ho();
          } else i || (ft.clear(), bo(), ho());
          return;
        }
        if (Vt) {
          const c = On(f);
          c >= 0 && (ws(c), xa(c));
        }
      });
    }, 500), Bo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Ve();
    }), Ye.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !ye), ye = t, (_a2 = we.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ye), ye) {
        const n = nt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Re = n.settings.loads.rawVal, n.settings.loads.val = false), Mn(), we.querySelector("#cad3d-mode-prev").style.display = "", we.querySelector("#cad3d-mode-next").style.display = "", we.querySelector("#cad3d-mode-label").style.display = "";
      } else wn(), we.querySelector("#cad3d-mode-prev").style.display = "none", we.querySelector("#cad3d-mode-next").style.display = "none", we.querySelector("#cad3d-mode-label").style.display = "none", L && L !== "placa-q4" && L !== "placa-3q" && Se(), setTimeout(() => {
        var _a3;
        const n = nt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Re && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ye ? "ON" : "OFF"}`);
    }, Ye.setMode = (t) => {
      var _a2;
      if (!(ae == null ? void 0 : ae.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Me = Math.max(0, Math.min(t, ae.modeShapes.length - 1));
      const o = ae.modeShapes[Me], { extent: n } = fo();
      let l = 0;
      for (let d = 0; d < le.length; d++) {
        const a = o[d * 6] || 0, r = o[d * 6 + 1] || 0, f = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      ve = l > 1e-12 ? n * 0.05 / l : 1, Jo();
      const s = we.querySelector("#cad3d-mode-label");
      s && ae.frequencies && (s.textContent = `Modo ${Me + 1} \u2014 ${ae.frequencies[Me].toFixed(2)} Hz`), console.log(`Modo ${Me + 1}: f = ${(_a2 = ae.frequencies) == null ? void 0 : _a2[Me].toFixed(4)} Hz`);
    }, window.cad = Ye, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(we), document.body.appendChild(Te.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ue("edificio"), Se(), bs("edificio"));
    }, 100), document.body.appendChild(Ua());
    const Ps = document.createElement("span");
    return Ps.style.display = "none", Ps;
  };
});
export {
  __tla,
  js as a,
  Ra as c,
  bl as g
};
