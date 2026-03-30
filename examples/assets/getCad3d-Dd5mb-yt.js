const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { d as Lt, _ as ya, p as _n, m as $a, s as Ma, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Ho, P as Xo, g as wa, a as Sa, o as Ea } from "./theme-CzzIlc4y.js";
import { V as ke, P as vo, R as _s, b as Bs, B as Ut, c as Ia, d as qo, e as Ro, f as ka, S as za, M as Ta, g as La, F as So, a as _o, L as Eo, h as Aa, G as Ca, A as tn, i as on, T as Bn, j as nn, k as sn, C as Fa, l as Pa } from "./Text-Cin90tvN.js";
import { g as pn, b as fn, a as Bo } from "./analyze-hNAfpj64.js";
import { g as po, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as zo, s as fo, m as Zt, t as Gn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
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
  const Io = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function ko(e, x) {
    const _ = Wn.find((G) => G.id === e), L = Do.find((G) => G.id === x), U = _.toKN, H = L.toM, ne = (G, xe, A) => A / (Math.pow(U, G) * Math.pow(H, xe));
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
      label: `${_.label}, ${L.label}`,
      force: _.label,
      length: L.label,
      stress: Oa(e, x),
      moment: `${_.label}\xB7${L.label}`,
      E: ne(1, -2, Io.E),
      G: ne(1, -2, Io.G),
      A: ne(0, 2, Io.A),
      Iz: ne(0, 4, Io.Iz),
      Iy: ne(0, 4, Io.Iy),
      J: ne(0, 4, Io.J),
      rho: ne(1, -4, Io.rho),
      spanRange: L.spanRange,
      heightRange: L.heightRange,
      defaultSpan: L.defaultSpan,
      defaultHeight: L.defaultHeight,
      defaultForce: V,
      forceRange: Y,
      galponSpan: L.galponSpan,
      galponLength: L.galponLength,
      galponHeight: L.galponHeight,
      galponRise: L.galponRise
    };
  }
  ko("kN", "m"), ko("kip", "in");
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
  function Na(e) {
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
  function qa(e) {
    const x = e.force, [_, L, U] = e.forceRange;
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
          max: L,
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
          max: L,
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
          max: L,
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
          max: L,
          step: U,
          label: `Ex sismo (${x})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: L,
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
    function _(L, U) {
      var _a2, _b;
      if (!L.frequencies || L.frequencies.length === 0) {
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
      for (const Y of H) V += `<th style="padding:2px 5px">${Y}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, L.frequencies.forEach((Y, G) => {
        var _a3;
        const xe = Y > 0 ? 1 / Y : 0, A = Y * 2 * Math.PI, re = ((_a3 = L.massParticipation) == null ? void 0 : _a3[G]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let Ie = 0; Ie < 6; Ie++) ne[Ie] += re[Ie];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${G + 1}</td>
  <td style="padding:2px 6px; text-align:right">${Y.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${xe.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${A.toFixed(2)}</td>`;
        for (let Ie = 0; Ie < 6; Ie++) {
          const ge = (re[Ie] * 100).toFixed(1), ce = re[Ie] > 0.5 ? "#f00" : re[Ie] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${ce}">${ge}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, x) {
        const Y = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        Y && (Y.style.display = "none"), G && (G.textContent = "\u25A2", G.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        x = !x;
        const Y = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        x ? (Y.style.display = "none", G.textContent = "\u25A2", G.title = "Restaurar") : (Y.style.display = "block", G.textContent = "\u25AC", G.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const Y = [];
        Y.push(`Modal Analysis \u2014 ${U.title}`);
        const G = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        Y.push(G), Y.push("-".repeat(G.length));
        const xe = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        L.frequencies.forEach((re, Ie) => {
          var _a3;
          const ge = re > 0 ? 1 / re : 0, ce = re * 2 * Math.PI, pe = ((_a3 = L.massParticipation) == null ? void 0 : _a3[Ie]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Fe = 0; Fe < 6; Fe++) xe[Fe] += pe[Fe];
          const be = pe.map((Fe) => ((Fe * 100).toFixed(1) + "%").padStart(6)).join(" ");
          Y.push(`${String(Ie + 1).padStart(4)}  ${re.toFixed(4).padStart(9)}  ${ge.toFixed(4).padStart(9)}  ${ce.toFixed(2).padStart(9)}  ${be}  ${(xe[0] * 100).toFixed(1).padStart(5)}%  ${(xe[1] * 100).toFixed(1).padStart(5)}%  ${(xe[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(Y.join(`
`));
        const A = e.querySelector("#modal-copy");
        A.textContent = "\u2713", setTimeout(() => A.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: _
    };
  };
  const $e = 64516e-8, P = 416231e-12, D = 0.0254, yo = [
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
    return yo.forEach((x, _) => {
      x.type === "W" && (e[x.name] = _);
    }), e;
  }
  function rn() {
    const e = {};
    return yo.forEach((x, _) => {
      x.type === "HSS" && (e[x.name] = _);
    }), e;
  }
  function _a(e) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h;
    const { nodes: x, elements: _, elementInputs: L, nodeInputs: U, deformOutputs: H } = e, ne = x.length * 6, V = _.length, Y = _.filter((ce) => ce.length === 2).length, G = _.filter((ce) => ce.length >= 3).length, xe = document.createElement("div");
    xe.className = "rpt-overlay";
    let A = "";
    A += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', A += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", A += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', A += '<hr class="rpt-sep"/>', A += "<h2>1. Input Data</h2>", A += '<table class="rpt-info"><tbody>', A += `<tr><td>Number of nodes</td><td class="val">${x.length}</td></tr>`, A += `<tr><td>Number of elements</td><td class="val">${V} (${Y} frames, ${G} shells)</td></tr>`, A += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', A += `<tr><td>Total DOFs</td><td class="val">${ne}</td></tr>`, A += "</tbody></table>", A += "<h3>1.1 Node Coordinates</h3>", A += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', x.forEach((ce, pe) => {
      A += `<tr><td>${pe}</td><td>${Qe(ce[0])}</td><td>${Qe(ce[1])}</td><td>${Qe(ce[2])}</td></tr>`;
    }), A += "</tbody></table>", A += "<h3>1.2 Element Connectivity</h3>", A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((ce, pe) => {
      var _a3, _b2, _c2, _d2;
      const be = ce.length === 2, Fe = ce.map((et) => x[et]), De = be ? zo(fo(Fe[1], Fe[0])) : 0, Oe = ((_a3 = L.elasticities) == null ? void 0 : _a3.get(pe)) ?? 0, Ue = ((_b2 = L.areas) == null ? void 0 : _b2.get(pe)) ?? 0, it = ((_c2 = L.momentsOfInertiaZ) == null ? void 0 : _c2.get(pe)) ?? 0, Je = ((_d2 = L.momentsOfInertiaY) == null ? void 0 : _d2.get(pe)) ?? 0;
      A += `<tr><td>${pe}</td><td>${be ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, A += `<td>${Qe(De)}</td><td>${Qe(Oe)}</td><td>${Qe(Ue)}</td><td>${Qe(it)}</td><td>${Qe(Je)}</td></tr>`;
    }), A += "</tbody></table>", A += "<h2>2. Element Formulation</h2>", Y > 0 && (A += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", A += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", A += "<h4>2.1.1 Shape Functions</h4>", A += "<p><b>Axial</b> (linear interpolation):</p>", A += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', A += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', A += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', A += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', A += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', A += "</tbody></table>", A += Ha(), A += "<p><b>Torsion</b> (linear): same as axial.</p>", A += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", A += "<p>The B matrix relates nodal displacements to internal strains:</p>", A += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', A += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', A += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', A += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', A += "<h4>2.1.3 Constitutive Relations D</h4>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', A += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', A += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', A += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', A += "</tbody></table>", A += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", A += "<p>Obtained by analytical integration:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', A += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", A += '<div class="rpt-eq-small">', A += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", A += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", A += "</div>", A += "<h4>2.1.5 Transformation Matrix T</h4>", A += "<p>Direction cosines of element axis:</p>", A += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', A += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', A += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', A += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", A += "<h4>2.1.6 Global Stiffness Matrix</h4>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), A += "<h2>3. Numerical Results per Element</h2>", A += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < V; ce++) {
      const pe = _[ce], be = pe.map((pt) => x[pt]);
      if (!(pe.length === 2)) continue;
      const De = zo(fo(be[1], be[0])), Oe = ((_a2 = L.elasticities) == null ? void 0 : _a2.get(ce)) ?? 0, Ue = ((_b = L.areas) == null ? void 0 : _b.get(ce)) ?? 0, it = ((_c = L.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Je = ((_d = L.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, et = ((_e2 = L.shearModuli) == null ? void 0 : _e2.get(ce)) ?? 0, xt = ((_f = L.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let Mt = null, me = null, Ne = null;
      try {
        Mt = pn(be, L, ce), me = fn(be), Ne = Zt(Gn(me), Zt(Mt, me));
      } catch {
        continue;
      }
      const Be = fo(be[1], be[0]), nt = Be[0] / De, tt = Be[1] / De, We = Be[2] / De;
      A += '<div class="rpt-elem-block">', A += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${pe[0]} \u2192 ${pe[1]}, L = ${Qe(De)}</h3>`, A += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, A += "<h4>Properties (numerical substitution)</h4>", A += '<div class="rpt-eq-small">', A += `E = ${Qe(Oe)} &nbsp;&nbsp; A = ${Qe(Ue)} &nbsp;&nbsp; I<sub>z</sub> = ${Qe(it)} &nbsp;&nbsp; I<sub>y</sub> = ${Qe(Je)} &nbsp;&nbsp; G = ${Qe(et)} &nbsp;&nbsp; J = ${Qe(xt)}<br/>`, A += `EA/L = ${Qe(Oe)}\xB7${Qe(Ue)}/${Qe(De)} = <b>${Qe(Oe * Ue / De)}</b><br/>`, A += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Qe(Oe)}\xB7${Qe(it)}/${Qe(De)}\xB3 = <b>${Qe(12 * Oe * it / De ** 3)}</b><br/>`, A += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Qe(Oe)}\xB7${Qe(Je)}/${Qe(De)}\xB3 = <b>${Qe(12 * Oe * Je / De ** 3)}</b><br/>`, A += `GJ/L = ${Qe(et)}\xB7${Qe(xt)}/${Qe(De)} = <b>${Qe(et * xt / De)}</b>`, A += "</div>", A += "<h4>Direction cosines</h4>", A += `<div class="rpt-eq-small">l = ${cn(nt)}, m = ${cn(tt)}, n = ${cn(We)}, D = ${cn(Math.sqrt(nt ** 2 + tt ** 2))}</div>`, A += "<h4>K<sub>local</sub> (12\xD712)</h4>", A += Hn(Mt, 12), A += "<h4>T \u2014 Transformation (12\xD712)</h4>", A += Hn(me, 12), A += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", A += Hn(Ne, 12), A += "<h4>Assembly</h4>", A += `<div class="rpt-eq-small">Global DOFs: node ${pe[0]} \u2192 [${pe[0] * 6}..${pe[0] * 6 + 5}], node ${pe[1]} \u2192 [${pe[1] * 6}..${pe[1] * 6 + 5}]</div>`, A += "</div></div>";
    }
    A += "<h2>4. Global Assembly</h2>", A += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, A += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", A += Da(_, x.length), A += "<h2>5. Boundary Conditions</h2>";
    const re = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], Ie = [];
    if (A += "<h3>5.1 Supports (fixed DOFs)</h3>", U.supports && U.supports.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of re) A += `<th>${ce}</th>`;
      A += "</tr></thead><tbody>", U.supports.forEach((ce, pe) => {
        A += `<tr><td>${pe}</td>`, ce.forEach((be, Fe) => {
          be && Ie.push(pe * 6 + Fe), A += `<td class="${be ? "fixed" : ""}">${be ? "Fixed" : "Free"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += `<div class="rpt-eq-small">Fixed DOFs: [${Ie.join(", ")}] \u2192 ${Ie.length} constraints<br/>`, A += `Free DOFs: ${ne} \u2212 ${Ie.length} = <b>${ne - Ie.length}</b></div>`, A += "<h3>5.2 Applied Loads</h3>", U.loads && U.loads.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ce = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const pe of ce) A += `<th>${pe}</th>`;
      A += "</tr></thead><tbody>", U.loads.forEach((pe, be) => {
        A += `<tr><td>${be}</td>`, pe.forEach((Fe) => {
          const De = Math.abs(Fe) > 1e-10;
          A += `<td class="${De ? "nz" : ""}">${De ? Qe(Fe) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>6. Solution</h2>", A += "<p>After removing fixed DOFs, the reduced system is:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', A += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", A += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of re) A += `<th>${ce}</th>`;
      A += "</tr></thead><tbody>", H.deformations.forEach((ce, pe) => {
        A += `<tr><td>${pe}</td>`, ce.forEach((be) => {
          const Fe = Math.abs(be) > 1e-10;
          A += `<td class="${Fe ? "nz" : ""}">${Qe(be, 6)}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h3>6.2 Reactions</h3>", A += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of re) A += `<th>${ce}</th>`;
      A += "</tr></thead><tbody>", H.reactions.forEach((ce, pe) => {
        A += `<tr><td>${pe}</td>`, ce.forEach((be) => {
          const Fe = Math.abs(be) > 1e-10;
          A += `<td class="${Fe ? "nz-react" : ""}">${Fe ? Qe(be, 4) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>7. Internal Forces</h2>", A += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", A += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', A += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const ce = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const pe of ce) A += `<th>${pe}<sub>i</sub></th>`;
      for (const pe of ce) A += `<th>${pe}<sub>j</sub></th>`;
      A += "</tr></thead><tbody>";
      for (let pe = 0; pe < V; pe++) {
        const be = _[pe];
        if (be.length !== 2) continue;
        const Fe = be.map((De) => x[De]);
        try {
          const De = pn(Fe, L, pe), Oe = fn(Fe), Ue = [];
          for (const et of be) {
            const xt = ((_g = H.deformations) == null ? void 0 : _g.get(et)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ue.push(...xt);
          }
          const it = Zt(Oe, Ue), Je = Zt(De, it);
          A += `<tr><td>${pe}</td><td>${be.join("\u2192")}</td>`;
          for (let et = 0; et < 12; et++) {
            const xt = Math.abs(Je[et]) > 1e-10;
            A += `<td class="${xt ? "nz" : ""}">${Qe(Je[et], 2)}</td>`;
          }
          A += "</tr>";
        } catch {
        }
      }
      A += "</tbody></table>";
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
    return xe.innerHTML = ge + A, (_h = xe.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => xe.remove()), xe.querySelectorAll("[data-toggle]").forEach((ce) => {
      ce.addEventListener("click", () => {
        const pe = ce.dataset.toggle, be = xe.querySelector(`#rpt-${pe}`);
        if (be) {
          const Fe = be.style.display !== "none";
          be.style.display = Fe ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, Fe ? "\u25B6" : "\u25BC");
        }
      });
    }), xe;
  }
  function Qe(e, x = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(x) : e.toFixed(x);
  }
  function cn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Hn(e, x) {
    var _a2;
    const _ = Math.min(x, 12);
    let L = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let U = 0; U < _; U++) {
      L += "<tr>";
      for (let H = 0; H < _; H++) {
        const ne = ((_a2 = e[U]) == null ? void 0 : _a2[H]) ?? 0, V = Math.abs(ne) < 1e-10;
        L += `<td class="${V ? "z" : ""} ${U === H && !V ? "diag" : ""}">${V ? "0" : Ba(ne)}</td>`;
      }
      L += "</tr>";
    }
    return L += "</table>", x > _ && (L += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${x}\xD7${x})</div>`), L += "</div>", L;
  }
  function Ba(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Ha() {
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
      let G = "";
      for (let Ie = 0; Ie <= 80; Ie++) {
        const ge = Ie / 80, ce = 30 + ge * 540, pe = 180 / 2 - Y.fn(ge) * 60;
        G += (Ie === 0 ? "M" : "L") + `${ce.toFixed(1)},${pe.toFixed(1)}`;
      }
      V += `<path d="${G}" fill="none" stroke="${Y.color}" stroke-width="2.5"/>`;
      const xe = 0.75, A = 30 + xe * 540 + 8, re = 180 / 2 - Y.fn(xe) * 60 - 6;
      V += `<text x="${A}" y="${re}" fill="${Y.color}" font-size="11" font-weight="bold" font-family="sans-serif">${Y.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function Da(e, x) {
    const _ = x * 6, L = Math.min(_, 30);
    let U = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    U += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', U += "<tr><td></td>";
    for (let ne = 0; ne < L; ne++) U += `<td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
    U += "</tr>";
    const H = Array.from({
      length: L
    }, () => Array(L).fill(0));
    for (let ne = 0; ne < e.length; ne++) {
      const V = e[ne].map((Y) => Y * 6);
      for (const Y of V) for (const G of V) for (let xe = 0; xe < 6; xe++) for (let A = 0; A < 6; A++) {
        const re = Y + xe, Ie = G + A;
        re < L && Ie < L && H[re][Ie]++;
      }
    }
    for (let ne = 0; ne < L; ne++) {
      U += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
      for (let V = 0; V < L; V++) {
        const Y = H[ne][V], G = Y === 0 ? "#fff" : Y === 1 ? "#e8f0fe" : Y === 2 ? "#c6dcf5" : "#a0c4e8", xe = Y === 0 ? "" : Y.toString();
        U += `<td style="background:${G};color:#003366">${xe}</td>`;
      }
      U += "</tr>";
    }
    return U += "</table></div>", _ > L && (U += `<div style="color:#888;font-size:9pt">(showing ${L}\xD7${L} of ${_}\xD7${_})</div>`), U;
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
  function Hs(e, x = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: x,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Wa(e, x, _, L, U, H) {
    var _a2, _b, _c, _d, _e2, _f;
    const ne = _[e], V = ne.map((me) => x[me]), Y = ne.length === 2, G = Y ? zo(fo(V[1], V[0])) : 0, xe = ((_a2 = L.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, A = ((_b = L.areas) == null ? void 0 : _b.get(e)) ?? 0, re = ((_c = L.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, Ie = ((_d = L.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ge = ((_e2 = L.shearModuli) == null ? void 0 : _e2.get(e)) ?? 0, ce = ((_f = L.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let pe = null, be = null, Fe = null;
    try {
      pe = pn(V, L, e), be = fn(V), Fe = Zt(Gn(be), Zt(pe, be));
    } catch {
    }
    const De = Y ? fo(V[1], V[0]) : [
      0,
      0,
      0
    ], Oe = G > 0 ? De[0] / G : 0, Ue = G > 0 ? De[1] / G : 0, it = G > 0 ? De[2] / G : 0, Je = Math.sqrt(Oe ** 2 + Ue ** 2), et = [];
    if ((U == null ? void 0 : U.deformations) && Y) for (const me of ne) {
      const Ne = U.deformations.get(me) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      et.push(...Ne);
    }
    let xt = [], Mt = [];
    if (et.length === 12 && be && pe) {
      try {
        xt = Zt(be, et);
      } catch {
        xt = Array(12).fill(0);
      }
      try {
        Mt = Zt(pe, xt);
      } catch {
        Mt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: ne,
      elmNodes: V,
      isFrame: Y,
      L: G,
      E: xe,
      A,
      Iz: re,
      Iy: Ie,
      G: ge,
      J: ce,
      kLocal: pe,
      T: be,
      kGlobal: Fe,
      l: Oe,
      m: Ue,
      n: it,
      D: Je,
      uGlobal: et,
      uLocal: xt,
      fLocal: Mt,
      dOut: U,
      aOut: H,
      totalNodes: x.length
    };
  }
  function Ga(e, x, _, L, U, H) {
    var _a2, _b;
    const ne = Wa(e, x, _, L, U, H), V = document.createElement("div");
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
    <div class="er-body" id="er-body-tabla">${Ya(ne)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Ds(ne)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ja(ne)}</div>
  `, V.querySelectorAll(".er-tab").forEach((Y) => {
      Y.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((xe) => xe.classList.remove("active")), Y.classList.add("active");
        const G = Y.dataset.tab;
        V.querySelectorAll(".er-body").forEach((xe) => xe.style.display = "none"), V.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a2 = V.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const Y = V.classList.toggle("er-fullscreen-mode"), G = V.querySelector("#er-fullscreen");
      G && (G.textContent = Y ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const Y = V.querySelector("#er-sf-canvas");
      Y && jn(Y);
      const G = V.querySelector("#er-sf-canvas-math");
      G && jn(G);
    }, 50), ja(() => {
      const Y = V.querySelector("#er-body-math");
      Y && (Y.innerHTML = Ds(ne)), setTimeout(() => {
        const G = V.querySelector("#er-sf-canvas-math");
        G && jn(G);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const xe = G.dataset.toggle, A = V.querySelector(`#er-${xe}`);
          A && (A.style.display = A.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function Ya(e) {
    let x = "";
    if (x += '<div class="er-section-title">1. Propiedades</div>', x += '<table class="er-props">', x += `<tr><td>E</td><td>${_e(e.E)}</td><td>A</td><td>${_e(e.A)}</td></tr>`, x += `<tr><td>I<sub>z</sub></td><td>${_e(e.Iz)}</td><td>I<sub>y</sub></td><td>${_e(e.Iy)}</td></tr>`, x += `<tr><td>G</td><td>${_e(e.G)}</td><td>J</td><td>${_e(e.J)}</td></tr>`, x += "</table>", e.kLocal && (x += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, x += Uo(e.kLocal)), e.T && (x += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', x += Uo(e.T)), e.kGlobal && (x += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', x += Uo(e.kGlobal)), x += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const _ = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let L = 0; L < e.elem.length; L++) {
        x += `<div class="er-sub">Nodo ${e.elem[L]}: `;
        for (let U = 0; U < 6; U++) {
          const H = e.uGlobal[L * 6 + U];
          x += `${_[U]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${_e(H, 6)}</span> `;
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
      for (const L of _) x += `<th>${L}</th>`;
      x += "</tr>", x += "<tr><td>Nodo i</td>";
      for (let L = 0; L < 6; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += "</tr><tr><td>Nodo j</td>";
      for (let L = 6; L < 12; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += "</tr></table>";
    } else x += '<div class="er-sub">Sin an\xE1lisis</div>';
    return x;
  }
  function Ds(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let x = "";
    const _ = (xe) => Hs(xe), L = (xe) => Hs(xe, true);
    x += '<div class="er-section-title">1. Geometria del elemento</div>', x += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", x += `<div class="er-eq">${L("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, x += '<div class="er-eq-num">', x += `${_("\\text{Nodo } i")} = (${e.elmNodes[0].map((xe) => _e(xe)).join(", ")})<br/>`, x += `${_("\\text{Nodo } j")} = (${e.elmNodes[1].map((xe) => _e(xe)).join(", ")})<br/>`, x += `${L(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${_e(e.L)}}`)}`, x += "</div>", x += '<div class="er-section-title">2. Funciones de forma</div>', x += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", x += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', x += `<div class="er-eq">${L("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, x += "<p>Primera derivada:</p>", x += `<div class="er-eq">${L("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, x += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', x += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, x += `<div class="er-eq">${L("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${L("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, x += `<div class="er-eq">${L("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, x += `<div class="er-eq">${L("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, x += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, x += `<div class="er-eq">${L("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, x += `<div class="er-eq">${L("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, x += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', x += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', x += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", x += `<div class="er-eq">${L("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, x += '<div class="er-subsec">3.1 Deformacion axial</div>', x += `<div class="er-eq">${L("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, x += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, x += `<div class="er-eq">${L("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, x += `<div class="er-eq">${L("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, x += `<div class="er-eq">${L("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, x += '<div class="er-subsec">3.4 Torsion</div>', x += `<div class="er-eq">${L("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, x += '<div class="er-section-title">4. Relaciones constitutivas D</div>', x += "<p>Cada modo de deformacion tiene su rigidez material:</p>", x += `<div class="er-eq">${L(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${_e(e.E)} \\times ${_e(e.A)} = \\mathbf{${_e(e.E * e.A)}}`)}</div>`, x += `<div class="er-eq">${L(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${_e(e.E)} \\times ${_e(e.Iz)} = \\mathbf{${_e(e.E * e.Iz)}}`)}</div>`, x += `<div class="er-eq">${L(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${_e(e.E)} \\times ${_e(e.Iy)} = \\mathbf{${_e(e.E * e.Iy)}}`)}</div>`, x += `<div class="er-eq">${L(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${_e(e.G)} \\times ${_e(e.J)} = \\mathbf{${_e(e.G * e.J)}}`)}</div>`, x += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, x += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", x += `<div class="er-eq er-eq-main">${L("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const U = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, ne = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', x += "<p><b>Paso 1:</b> Funcion de forma axial</p>", x += `<div class="er-eq">${L("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, x += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", x += `<div class="er-eq">${L("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, x += `<div class="er-eq">${L("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, x += `<div class="er-eq">${L("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, x += `<div class="er-eq">${L("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, x += `<div class="er-eq er-eq-main">${L(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.E)}\\times${_e(e.A)}}{${_e(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, x += `<div class="er-eq">${L(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${_e(U)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', x += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', x += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, x += `<div class="er-eq">${L("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, x += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", x += `<div class="er-eq">${L("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, x += `<div class="er-eq">${L("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, x += `<div class="er-eq">${L("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, x += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, x += `<div class="er-eq">${L("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, x += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, x += `<div class="er-eq">${L("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, x += `<div class="er-eq er-eq-main">${L(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${_e(e.E)} \\times ${_e(e.Iz)}}{${_e(e.L)}^3} = \\mathbf{${_e(12 * H)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', x += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', x += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, x += `<div class="er-eq">${L(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(e.G)}\\times${_e(e.J)}}{${_e(e.L)}} = \\mathbf{${_e(V)}}`)}</div>`, x += "</div></div>", x += '<div class="er-deriv-block">', x += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', x += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', x += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, x += `<div class="er-eq">${L("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, x += `<div class="er-eq">${L("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, x += `<div class="er-eq">${L("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, x += `<div class="er-eq er-eq-main">${L(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, x += "</div></div>", x += '<div class="er-subsec">Resumen de coeficientes:</div>', x += `<div class="er-eq">${L(`\\frac{EA}{L} = \\mathbf{${_e(U)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${_e(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${_e(12 * ne)}}`)}</div>`, x += `<div class="er-eq">${L(`\\frac{GJ}{L} = \\mathbf{${_e(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${_e(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${_e(4 * e.E * e.Iz / e.L)}}`)}</div>`, x += `<div class="er-eq">${L(`\\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${_e(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (x += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, x += Uo(e.kLocal)), x += '<div class="er-section-title">6. Transformacion de coordenadas</div>', x += "<p>Los cosenos directores del eje del elemento:</p>", x += `<div class="er-eq">${L(`l = \\frac{x_j - x_i}{L} = ${dn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${dn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${dn(e.n)}`)}</div>`, x += `<div class="er-eq">${L(`D = \\sqrt{l^2 + m^2} = ${dn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      x += `<p>Caso especial: elemento vertical (${_(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const xe = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      x += `<div class="er-eq">${L(xe)}</div>`;
    } else x += `<div class="er-eq">${L("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    x += `<div class="er-eq er-eq-main">${L("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, x += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, x += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", x += `<div class="er-eq er-eq-main">${L("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (x += Uo(e.kGlobal)), x += '<div class="er-section-title">8. Ensamblaje</div>';
    const Y = e.elem[0] * 6, G = e.elem[1] * 6;
    if (x += `<div class="er-eq">${L(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, x += `<div class="er-eq">${L(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, x += `<div class="er-eq">${L("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, x += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', x += `<div class="er-eq">${L("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, x += `<div class="er-eq er-eq-main">${L("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((xe) => xe !== 0)) {
      const xe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      x += '<table class="er-forces"><tr><th></th>';
      for (const A of xe) x += `<th>${A}</th>`;
      x += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let A = 0; A < 6; A++) x += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[A], 3)}</td>`;
      x += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let A = 6; A < 12; A++) x += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[A], 3)}</td>`;
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
      for (const L of _) x += `<th>${L}</th>`;
      x += "</tr>";
      for (let L = 0; L < e.elem.length; L++) {
        x += `<tr><td>${e.elem[L]}</td>`;
        for (let U = 0; U < 6; U++) {
          const H = e.uGlobal[L * 6 + U];
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
      for (const L of _) x += `<th>${L}</th>`;
      x += "</tr><tr><td>Nodo i</td>";
      for (let L = 0; L < 6; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
      x += "</tr><tr><td>Nodo j</td>";
      for (let L = 6; L < 12; L++) x += `<td class="${Math.abs(e.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(e.fLocal[L], 3)}</td>`;
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
  function Uo(e) {
    var _a2;
    const x = e.length, _ = Math.min(x, 12);
    let L = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let U = 0; U < _; U++) {
      L += "<tr>";
      for (let H = 0; H < _; H++) {
        const ne = ((_a2 = e[U]) == null ? void 0 : _a2[H]) ?? 0, V = Math.abs(ne) < 1e-10;
        L += `<td class="${V ? "z" : ""} ${U === H && !V ? "diag" : ""}">${V ? "0" : Va(ne)}</td>`;
      }
      L += "</tr>";
    }
    return L += "</table>", x > _ && (L += `<div style="color:var(--fem-label);font-size:9px">(${_}\xD7${_} de ${x}\xD7${x})</div>`), L += "</div>", L;
  }
  function Va(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function jn(e) {
    const x = e.getContext("2d");
    if (!x) return;
    const _ = e.width, L = e.height, U = 30, H = _ - 2 * U, ne = (L - 3 * U) / 2;
    x.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", x.fillRect(0, 0, _, L);
    const V = (Y, G, xe) => {
      x.strokeStyle = "#333", x.lineWidth = 1, x.strokeRect(U, Y, H, ne), x.strokeStyle = "#444", x.beginPath(), x.moveTo(U, Y + ne / 2), x.lineTo(U + H, Y + ne / 2), x.stroke(), x.fillStyle = "#888", x.font = "11px sans-serif", x.fillText(G, U + 4, Y + 14);
      for (const re of xe) {
        x.strokeStyle = re.color, x.lineWidth = 2.5, x.beginPath();
        for (let Ie = 0; Ie <= 100; Ie++) {
          const ge = Ie / 100, ce = U + ge * H, pe = Y + ne / 2 - re.fn(ge) * (ne / 2 * 0.85);
          Ie === 0 ? x.moveTo(ce, pe) : x.lineTo(ce, pe);
        }
        x.stroke();
      }
      let A = U + H - 90;
      for (const re of xe) x.fillStyle = re.color, x.font = "bold 10px sans-serif", x.fillText(re.label, A, Y + ne - 6), A += 36;
      x.fillStyle = "#666", x.font = "9px monospace", x.fillText("0", U, Y + ne + 12), x.fillText("1", U + H - 6, Y + ne + 12), x.fillText("\u03BE", U + H / 2, Y + ne + 12);
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
</style>`, Ko = [
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
  let un = false, To = null, eo = null, Nt = null, St = null;
  function Ka() {
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
      un ? Yn() : Ua();
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
  function Ua() {
    un = true, St && (St.innerHTML = "\u2715", St.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", St.style.animation = "none"), To = document.createElement("div"), To.id = "tour-overlay", To.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(To), jo(0);
  }
  function Yn() {
    un = false, St && (St.innerHTML = "?", St.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", St.style.animation = "helpPulse 2s infinite"), eo && (eo.remove(), eo = null), Nt && (Nt.remove(), Nt = null), To && (To.remove(), To = null);
  }
  function jo(e) {
    var _a2, _b;
    if (e >= Ko.length) {
      Za();
      return;
    }
    const x = Ko[e], _ = document.querySelector(x.selector);
    if (!_) {
      jo(e + 1);
      return;
    }
    _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), eo && eo.remove(), Nt && Nt.remove();
    const L = _.getBoundingClientRect(), U = window.innerWidth, H = window.innerHeight, ne = 320, V = 180;
    eo = document.createElement("div"), eo.style.cssText = `
    position: fixed;
    left: ${L.left - 6}px; top: ${L.top - 6}px;
    width: ${L.width + 12}px; height: ${L.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(eo);
    const Y = U - L.right, G = L.left, xe = H - L.bottom, A = L.top;
    let re = x.position || "bottom";
    re === "bottom" && xe < V + 20 && (re = "top"), re === "top" && A < V + 20 && (re = "right"), re === "right" && Y < ne + 20 && (re = "left"), re === "left" && G < ne + 20 && (re = "bottom");
    let Ie, ge, ce = "";
    switch (re) {
      case "bottom":
        Ie = L.left + L.width / 2 - ne / 2, ge = L.bottom + 14, ce = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        Ie = L.left + L.width / 2 - ne / 2, ge = L.top - V - 14, ce = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        Ie = L.right + 14, ge = L.top + L.height / 2 - V / 2, ce = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        Ie = L.left - ne - 14, ge = L.top + L.height / 2 - V / 2, ce = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    Ie = Math.max(10, Math.min(Ie, U - ne - 10)), ge = Math.max(10, Math.min(ge, H - V - 10)), Nt = document.createElement("div"), Nt.style.cssText = `
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
  `, Nt.innerHTML = `
    <div style="${ce}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${x.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Ko.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${x.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Ko.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Ko.map((be, Fe) => `<div style="width:${Fe === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${Fe === e ? "#0099ff" : Fe < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Nt), (_a2 = Nt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      jo(e + 1);
    }), (_b = Nt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      jo(e - 1);
    });
    const pe = (be) => {
      if (!un) {
        document.removeEventListener("keydown", pe);
        return;
      }
      (be.key === "ArrowRight" || be.key === "Enter") && (jo(e + 1), document.removeEventListener("keydown", pe)), be.key === "ArrowLeft" && (jo(Math.max(0, e - 1)), document.removeEventListener("keydown", pe)), be.key === "Escape" && (Yn(), document.removeEventListener("keydown", pe));
    };
    document.addEventListener("keydown", pe);
  }
  function Za() {
    var _a2;
    eo && (eo.remove(), eo = null), Nt && (Nt.remove(), Nt = null), Nt = document.createElement("div"), Nt.style.cssText = `
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
  `, Nt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Nt), (_a2 = Nt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Yn());
  }
  function Qa(e) {
    var _a2;
    const x = e.split(/\r?\n/), _ = {
      force: "TONF",
      length: "M"
    }, L = [], U = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = [], Y = [], G = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), A = [], re = [];
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
        const Ce = Me.match(/TITLE2\s+"([^"]+)"/);
        Ce && (Ie = Ce[1]);
      }
      if (ge === "STORIES - IN SEQUENCE FROM TOP") {
        const ae = Me.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ae) {
          const Ce = ae[1], ie = ae[2] ? parseFloat(ae[2]) : 0, ve = ae[3] ? parseFloat(ae[3]) : void 0;
          L.push({
            name: Ce,
            height: ie,
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
          const ie = U.get(Ce);
          ae[2] && (ie.type = ae[2]);
          const ve = Me.match(/\bE\s+([\d.eE+-]+)/);
          ve && (ie.E = parseFloat(ve[1]));
          const Re = Me.match(/\bU\s+([\d.eE+-]+)/);
          Re && (ie.nu = parseFloat(Re[1]), ie.G = ie.E / (2 * (1 + ie.nu)));
          const Te = Me.match(/\bFY\s+([\d.eE+-]+)/);
          Te && (ie.fy = parseFloat(Te[1]));
          const at = Me.match(/\bFC\s+([\d.eE+-]+)/);
          at && (ie.fc = parseFloat(at[1]));
          const qe = Me.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          qe && (ie.density = parseFloat(qe[1]));
        }
      }
      if (ge === "FRAME SECTIONS") {
        const ae = Me.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ae) {
          const Ce = ae[1];
          H.has(Ce) || H.set(Ce, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ie = H.get(Ce), ve = Me.match(/MATERIAL\s+"([^"]+)"/);
          ve && (ie.material = ve[1]);
          const Re = Me.match(/SHAPE\s+"([^"]+)"/);
          Re && (ie.shape = Re[1]);
          const Te = Me.match(/\bD\s+([\d.eE+-]+)/);
          Te && (ie.D = parseFloat(Te[1]));
          const at = Me.match(/\bB\s+([\d.eE+-]+)/);
          at && (ie.B = parseFloat(at[1]));
          const qe = Me.match(/\bTF\s+([\d.eE+-]+)/);
          qe && (ie.TF = parseFloat(qe[1]));
          const Pe = Me.match(/\bTW\s+([\d.eE+-]+)/);
          Pe && (ie.TW = parseFloat(Pe[1]));
          const ot = Me.match(/\bR\s+([\d.eE+-]+)/);
          ot && (ie.R = parseFloat(ot[1]));
          const Ve = Me.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ve && (ie.fillMaterial = Ve[1]);
          const dt = Me.match(/I2MOD\s+([\d.eE+-]+)/);
          dt && (ie.modI2 = parseFloat(dt[1]));
          const Rt = Me.match(/I3MOD\s+([\d.eE+-]+)/);
          Rt && (ie.modI3 = parseFloat(Rt[1]));
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
        ae && G.set(`${ae[1]}@${ae[2]}`, ae[3].split(/\s+/));
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
          }, ie = Me.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ie && (Ce.rigidZone = parseFloat(ie[1]));
          const ve = Me.match(/RELEASE\s+"([^"]+)"/);
          ve && (Ce.releases = ve[1].split(/\s+/));
          const Re = Me.match(/ANG\s+([-\d.eE+]+)/);
          Re && (Ce.angle = parseFloat(Re[1])), xe.set(`${ae[1]}@${ae[2]}`, Ce);
        }
      }
      if (ge === "GRIDS") {
        const ae = Me.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ae && re.push({
          label: ae[1],
          dir: ae[2],
          coord: parseFloat(ae[3])
        });
      }
      if (ge === "FRAME OBJECT LOADS") {
        const ae = Me.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ae && A.push({
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
          const Ce = ((_a2 = ae[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((ie) => ie.replace(/"/g, ""))) || [];
          Y.push({
            name: ae[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const pe = /* @__PURE__ */ new Map();
    if (L.length > 0) {
      const ye = L.length - 1;
      pe.set(L[ye].name, L[ye].elev);
      for (let Me = ye - 1; Me >= 0; Me--) {
        const Ce = pe.get(L[Me + 1].name) + L[Me].height;
        L[Me].elev = Ce, pe.set(L[Me].name, Ce);
      }
    }
    const be = [], Fe = [], De = /* @__PURE__ */ new Map(), Oe = (ye, Me) => `${ye}@${Me}`, Ue = /* @__PURE__ */ new Set(), it = /* @__PURE__ */ new Map();
    for (const ye of V) it.set(ye.name, ye);
    for (const ye of V) for (const [Me, ae] of xe) {
      if (!Me.startsWith(ye.name + "@")) continue;
      const Ce = ae.story, ie = L.findIndex((ve) => ve.name === Ce);
      if (!(ie < 0)) if (ye.type === "COLUMN" || ye.type === "BRACE") {
        Ue.add(Oe(ye.pt2, Ce));
        const ve = Math.max(ye.nStories, 1), Re = Math.min(ie + ve, L.length - 1);
        Ue.add(Oe(ye.pt1, L[Re].name));
      } else Ue.add(Oe(ye.pt1, Ce)), Ue.add(Oe(ye.pt2, Ce));
    }
    for (const [ye] of G) Ue.add(ye);
    for (const ye of Ue) {
      const [Me, ae] = ye.split("@"), Ce = ne.get(Me), ie = pe.get(ae);
      Ce === void 0 || ie === void 0 || (be.push([
        Ce[0],
        Ce[1],
        ie
      ]), Fe.push(ye), De.set(ye, be.length - 1));
    }
    const Je = [], et = [], xt = [], Mt = [], me = /* @__PURE__ */ new Map();
    for (const ye of V) for (const [Me, ae] of xe) {
      if (!Me.startsWith(ye.name + "@")) continue;
      const Ce = ae.story, ie = L.findIndex((Pe) => Pe.name === Ce);
      if (ie < 0) continue;
      let ve, Re;
      if (ye.type === "COLUMN" || ye.type === "BRACE") {
        const Pe = Math.max(ye.nStories, 1), ot = Math.min(ie + Pe, L.length - 1);
        ve = Oe(ye.pt1, L[ot].name), Re = Oe(ye.pt2, Ce);
      } else ve = Oe(ye.pt1, Ce), Re = Oe(ye.pt2, Ce);
      const Te = De.get(ve), at = De.get(Re);
      if (Te === void 0 || at === void 0 || Te === at) continue;
      const qe = Je.length;
      if (Je.push([
        Te,
        at
      ]), et.push(ye.name), xt.push(ye.type), Mt.push(Ce), me.set(qe, ae.section), ae.rigidZone > 0 && pt.set(qe, [
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
        for (const ot of ae.releases) ot === "TI" && (Pe[0] = true), ot === "M2I" && (Pe[1] = true), ot === "M3I" && (Pe[2] = true), ot === "TJ" && (Pe[3] = true), ot === "M2J" && (Pe[4] = true), ot === "M3J" && (Pe[5] = true);
        rt.set(qe, Pe);
      }
    }
    const Ne = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map();
    for (const [ye, Me] of me) {
      const ae = H.get(Me);
      if (!ae) continue;
      const Ce = U.get(ae.material);
      Ce && (Ne.set(ye, Ce.E), Be.set(ye, Ce.G));
      const ie = ae.D, ve = ae.B, Re = ae.TF, Te = ae.TW;
      let at = 0, qe = 0, Pe = 0, ot = 0, Ve = 0, dt = 0, Rt = "rect";
      switch (ae.shape) {
        case "Concrete Rectangular":
          at = ie * ve, qe = ve * ie ** 3 / 12, Pe = ie * ve ** 3 / 12, ot = ve * ie ** 3 * (1 / 3 - 0.21 * (ie / ve) * (1 - ie ** 4 / (12 * ve ** 4))), Ve = dt = 5 / 6 * at, Rt = "rect";
          break;
        case "Concrete Circle":
          at = Math.PI * ie ** 2 / 4, qe = Pe = Math.PI * ie ** 4 / 64, ot = Math.PI * ie ** 4 / 32, Ve = dt = 0.9 * at, Rt = "circ";
          break;
        case "Steel I/Wide Flange":
          at = 2 * ve * Re + (ie - 2 * Re) * Te, qe = (ve * ie ** 3 - (ve - Te) * (ie - 2 * Re) ** 3) / 12, Pe = (2 * Re * ve ** 3 + (ie - 2 * Re) * Te ** 3) / 12, ot = (2 * ve * Re ** 3 + (ie - 2 * Re) * Te ** 3) / 3, Ve = (ie - 2 * Re) * Te, dt = 2 * ve * Re * 5 / 6, Rt = "I";
          break;
        case "Steel Tube":
          at = ie * ve - (ie - 2 * Te) * (ve - 2 * Te), qe = (ve * ie ** 3 - (ve - 2 * Te) * (ie - 2 * Te) ** 3) / 12, Pe = (ie * ve ** 3 - (ie - 2 * Te) * (ve - 2 * Te) ** 3) / 12, ot = 2 * Te * (ie - Te) * (ve - Te) * ((ie - Te) * (ve - Te)) / (ie - Te + (ve - Te)), Ve = 2 * ie * Te, dt = 2 * ve * Te, Rt = "HSS";
          break;
        case "Filled Steel Tube":
          at = ie * ve, qe = ve * ie ** 3 / 12, Pe = ie * ve ** 3 / 12, ot = 2 * Te * (ie - Te) * (ve - Te) * ((ie - Te) * (ve - Te)) / (ie - Te + (ve - Te)), Ve = 2 * ie * Te + 5 / 6 * (ie - 2 * Te) * (ve - 2 * Te), dt = 2 * ve * Te + 5 / 6 * (ie - 2 * Te) * (ve - 2 * Te), Rt = "CFT";
          break;
        case "Steel Angle": {
          const Bt = Re || Te;
          at = Bt * (ie + ve - Bt), qe = Bt * (ie ** 3 + ve * Bt ** 2 + Bt ** 2 * (ie - Bt)) / 12, Pe = Bt * (ve ** 3 + ie * Bt ** 2 + Bt ** 2 * (ve - Bt)) / 12, ot = (ie + ve - Bt) * Bt ** 3 / 3, Ve = ie * Bt, dt = ve * Bt, Rt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          at = 2 * ve * Re + (ie - 2 * Re) * Te, qe = (Te * ie ** 3 + 2 * ve * Re * (ie - Re) ** 2) / 12, Pe = (2 * Re * ve ** 3 + (ie - 2 * Re) * Te ** 3) / 12, ot = (2 * ve * Re ** 3 + (ie - 2 * Re) * Te ** 3) / 3, Ve = (ie - 2 * Re) * Te, dt = 2 * ve * Re * 5 / 6, Rt = ae.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          at = 2 * (2 * ve * Re + (ie - 2 * Re) * Te), qe = 2 * (Te * ie ** 3 + 2 * ve * Re * (ie - Re) ** 2) / 12, Pe = 2 * (2 * Re * ve ** 3 + (ie - 2 * Re) * Te ** 3) / 12, ot = 2 * (2 * ve * Re ** 3 + (ie - 2 * Re) * Te ** 3) / 3, Ve = 2 * (ie - 2 * Re) * Te, dt = 4 * ve * Re * 5 / 6, Rt = "2C";
          break;
        default:
          ie > 0 && ve > 0 && (at = ie * ve, qe = ve * ie ** 3 / 12, Pe = ie * ve ** 3 / 12, ot = Math.min(ie, ve) * Math.max(ie, ve) ** 3 / 3 * 0.3, Ve = dt = 5 / 6 * at);
          break;
      }
      ae.modI2 && (Pe *= ae.modI2), ae.modI3 && (qe *= ae.modI3), nt.set(ye, at), wt.set(ye, qe), At.set(ye, Pe), ct.set(ye, ot), Ve > 0 && tt.set(ye, Ve), dt > 0 && We.set(ye, dt), qt.set(ye, {
        type: Rt,
        b: ve || void 0,
        h: ie || void 0,
        d: Rt === "circ" || Rt === "pipe" ? ie : void 0,
        tw: Te || void 0,
        tf: Re || void 0,
        r: ae.R,
        name: Me
      });
    }
    const Ct = /* @__PURE__ */ new Map();
    for (const [ye, Me] of G) {
      const ae = De.get(ye);
      if (ae === void 0) continue;
      const Ce = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ie of Me) ie === "UX" && (Ce[0] = true), ie === "UY" && (Ce[1] = true), ie === "UZ" && (Ce[2] = true), ie === "RX" && (Ce[3] = true), ie === "RY" && (Ce[4] = true), ie === "RZ" && (Ce[5] = true);
      Ct.set(ae, Ce);
    }
    const Le = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
    for (let ye = 0; ye < et.length; ye++) Et.set(`${et[ye]}@${Mt[ye]}`, ye);
    for (const ye of A) {
      const Me = Et.get(`${ye.line}@${ye.story}`);
      if (Me === void 0) continue;
      const [ae, Ce] = Je[Me], ie = be[ae], ve = be[Ce], Re = Math.sqrt((ve[0] - ie[0]) ** 2 + (ve[1] - ie[1]) ** 2 + (ve[2] - ie[2]) ** 2);
      if (Re < 1e-10) continue;
      const Te = ye.val * Re / 2;
      let at = 0, qe = 0, Pe = 0;
      ye.dir === "GRAV" || ye.dir === "GRAVITY" ? Pe = -Te : ye.dir === "X" ? at = Te : ye.dir === "Y" ? qe = Te : ye.dir === "Z" && (Pe = -Te);
      for (const ot of [
        ae,
        Ce
      ]) {
        const Ve = Le.get(ot) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ve[0] += at, Ve[1] += qe, Ve[2] += Pe, Le.set(ot, Ve);
      }
    }
    const vt = /* @__PURE__ */ new Map();
    for (const [ye, Me] of me) {
      const ae = H.get(Me);
      if (!ae) continue;
      const Ce = U.get(ae.material);
      (Ce == null ? void 0 : Ce.density) && vt.set(ye, Ce.density);
    }
    return {
      units: _,
      stories: L.reverse(),
      materials: U,
      frameSections: H,
      nodes: be,
      nodeNames: Fe,
      nodeNameToIdx: De,
      elements: Je,
      elementNames: et,
      elementTypes: xt,
      elementStories: Mt,
      elementSections: me,
      nodeInputs: {
        supports: Ct,
        loads: Le
      },
      elementInputs: {
        elasticities: Ne,
        shearModuli: Be,
        areas: nt,
        momentsOfInertiaZ: wt,
        momentsOfInertiaY: At,
        torsionalConstants: ct,
        shearAreasY: tt,
        shearAreasZ: We,
        rigidOffsets: pt,
        momentReleases: rt,
        densities: vt,
        sectionShapes: qt
      },
      sectionShapes: qt,
      grids: re,
      info: {
        nNodes: be.length,
        nFrames: Je.length,
        nAreas: Y.length,
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
    const _ = [], L = [
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
    for (const U of L) {
      const H = e.get(U);
      if (!(!H || H.length === 0)) {
        _.push(`$ ${U}`);
        for (const ne of H) _.push(ne);
        _.push("");
      }
    }
    for (const [U, H] of e) if (!L.includes(U) && H.length !== 0) {
      _.push(`$ ${U}`);
      for (const ne of H) _.push(ne);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function ol(e) {
    var _a2, _b, _c, _d;
    const { nodes: x, elements: _, nodeInputs: L, elementInputs: U, title: H, units: ne } = e, V = (ne == null ? void 0 : ne.force) || "TONF", Y = (ne == null ? void 0 : ne.length) || "M", G = [], xe = (me) => Math.round(me * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${V}"  "${Y}"  "C"  `), H && G.push(`  TITLE2  "${H}"  `), G.push("");
    const A = /* @__PURE__ */ new Set();
    x.forEach((me) => A.add(xe(me[1])));
    const re = [
      ...A
    ].sort((me, Ne) => me - Ne), Ie = [], ge = /* @__PURE__ */ new Map();
    Ie.push("Base"), ge.set(re[0], "Base");
    for (let me = 1; me < re.length; me++) {
      const Ne = `Level_${me}`;
      Ie.push(Ne), ge.set(re[me], Ne);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let me = re.length - 1; me >= 1; me--) G.push(`  STORY "${Ie[me]}"  HEIGHT ${xe(re[me] - re[me - 1])} MASTERSTORY "Yes"  `);
    re.length > 0 && G.push(`  STORY "Base"  ELEV ${re[0]} `), G.push(""), _.some((me) => me.length === 4) && (G.push("$ DIAPHRAGM NAMES"), G.push('  DIAPHRAGM "D1"    TYPE RIGID'), G.push("")), G.push("$ MATERIAL PROPERTIES");
    const pe = /* @__PURE__ */ new Set();
    (_a2 = U.elasticities) == null ? void 0 : _a2.forEach((me) => pe.add(me));
    const be = /* @__PURE__ */ new Map();
    let Fe = 0;
    for (const me of pe) {
      const Ne = `Mat_${++Fe}`;
      be.set(me, Ne), G.push(`  MATERIAL  "${Ne}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Ne}"    SYMTYPE "Isotropic"  E ${me}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const De = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map();
    _.forEach((me, Ne) => {
      var _a3, _b2;
      if (me.length !== 2) return;
      const Be = (_a3 = U.sectionShapes) == null ? void 0 : _a3.get(Ne), nt = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(Ne)) ?? 0, tt = be.get(nt) || "Mat_1", We = (Be == null ? void 0 : Be.h) ?? 0, pt = (Be == null ? void 0 : Be.b) ?? 0, rt = (Be == null ? void 0 : Be.d) ?? 0, wt = (Be == null ? void 0 : Be.tf) ?? 0, At = (Be == null ? void 0 : Be.tw) ?? 0, ct = (Be == null ? void 0 : Be.type) || "rect", qt = `${ct}_${We}_${pt}_${rt}_${wt}_${At}`;
      (Be == null ? void 0 : Be.name) && !Ue.has(qt) && Ue.set(qt, Be.name);
      let Ct = Ue.get(qt);
      if (Ct || (ct === "rect" ? Ct = `R${xe(pt * 100)}x${xe(We * 100)}` : ct === "circ" ? Ct = `C_D${xe(rt * 100)}` : ct === "I" ? Ct = `I_${xe(We * 100)}` : Ct = `Sec_${De.size + 1}`, Ue.set(qt, Ct)), Oe.set(Ne, Ct), De.has(Ct)) return;
      De.add(Ct);
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
      let vt = `  FRAMESECTION  "${Ct}"  MATERIAL "${tt}"  SHAPE "${Et}"`;
      We && (vt += `  D ${We}`), pt && (vt += `  B ${pt}`), rt && !We && (vt += `  D ${rt}`), wt && (vt += `  TF ${wt}`), At && (vt += `  TW ${At}`), G.push(vt);
    }), G.push("");
    const it = /* @__PURE__ */ new Map();
    let Je = 0;
    x.forEach((me) => {
      const Ne = `${xe(me[0])},${xe(me[2])}`;
      it.has(Ne) || it.set(Ne, `${++Je}`);
    }), G.push("$ POINT COORDINATES");
    for (const [me, Ne] of it) {
      const [Be, nt] = me.split(",").map(Number);
      G.push(`  POINT "${Ne}"  ${Be} ${nt} `);
    }
    G.push("");
    const et = (me) => {
      const Ne = x[me], Be = `${xe(Ne[0])},${xe(Ne[2])}`;
      return {
        pt: it.get(Be) || "1",
        story: ge.get(xe(Ne[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const xt = [];
    _.forEach((me, Ne) => {
      if (me.length !== 2) return;
      const Be = nl(x, me), nt = Oe.get(Ne) || `Sec_${Ne}`;
      if (Be === "BEAM") {
        const tt = et(me[0]), We = et(me[1]);
        G.push(`  LINE  "E${Ne + 1}"  BEAM  "${tt.pt}"  "${We.pt}"  0`), xt.push(`  LINEASSIGN  "E${Ne + 1}"  "${tt.story}"  SECTION "${nt}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const tt = x[me[0]][1] <= x[me[1]][1] ? me[0] : me[1], We = x[me[0]][1] <= x[me[1]][1] ? me[1] : me[0];
        et(tt);
        const pt = et(We), rt = xe(x[tt][1]), wt = xe(x[We][1]), At = re.indexOf(rt), ct = re.indexOf(wt), qt = Math.max(1, ct >= 0 && At >= 0 ? ct - At : 1);
        G.push(`  LINE  "E${Ne + 1}"  ${Be}  "${pt.pt}"  "${pt.pt}"  ${qt}`);
        for (let Ct = 0; Ct < qt; Ct++) {
          const Le = ct - Ct;
          Le >= 0 && Le < Ie.length && xt.push(`  LINEASSIGN  "E${Ne + 1}"  "${Ie[Le]}"  SECTION "${nt}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = L.supports) == null ? void 0 : _b.forEach((me, Ne) => {
      const Be = [];
      if (me[0] && Be.push("UX"), me[1] && Be.push("UY"), me[2] && Be.push("UZ"), me[3] && Be.push("RX"), me[4] && Be.push("RY"), me[5] && Be.push("RZ"), Be.length > 0) {
        const nt = et(Ne);
        G.push(`  POINTASSIGN  "${nt.pt}"  "${nt.story}"  RESTRAINT "${Be.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), xt.forEach((me) => G.push(me)), G.push("");
    const Mt = [];
    if (_.forEach((me, Ne) => {
      if (me.length === 4) {
        const Be = x[me[0]], nt = x[me[1]], tt = x[me[2]], We = [
          nt[0] - Be[0],
          nt[1] - Be[1],
          nt[2] - Be[2]
        ], pt = [
          tt[0] - Be[0],
          tt[1] - Be[1],
          tt[2] - Be[2]
        ], rt = Math.abs(We[2] * pt[0] - We[0] * pt[2]), wt = Math.sqrt((We[1] * pt[2] - We[2] * pt[1]) ** 2 + rt ** 2 + (We[0] * pt[1] - We[1] * pt[0]) ** 2), At = wt > 1e-10 && rt / wt < 0.5;
        Mt.push({
          idx: Ne,
          el: me,
          isWall: At
        });
      }
    }), Mt.some((me) => !me.isWall)) {
      G.push("$ SLAB PROPERTIES");
      const me = ((_c = U.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      G.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${be.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${me} `), G.push("");
    }
    if (Mt.some((me) => me.isWall)) {
      G.push("$ WALL PROPERTIES");
      const me = ((_d = U.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      G.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${be.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${me} `), G.push("");
    }
    if (Mt.length > 0) {
      G.push("$ AREA CONNECTIVITIES");
      const me = [];
      Mt.forEach((Ne, Be) => {
        const { el: nt, isWall: tt } = Ne, We = tt ? `W${Be + 1}` : `F${Be + 1}`, pt = tt ? "PANEL" : "FLOOR", rt = nt.map((wt) => et(wt));
        if (tt) {
          const wt = x[nt[0]][1] <= x[nt[2]][1] ? 0 : 2, At = x[nt[1]][1] <= x[nt[3]][1] ? 1 : 3;
          G.push(`  AREA "${We}"  ${pt}  4  "${rt[wt].pt}"  "${rt[At].pt}"  "${rt[At].pt}"  "${rt[wt].pt}"  1  1  0  0  `);
          const ct = rt[wt === 0 ? 2 : 0].story;
          me.push(`  AREAASSIGN  "${We}"  "${ct}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else G.push(`  AREA "${We}"  ${pt}  4  "${rt[0].pt}"  "${rt[1].pt}"  "${rt[2].pt}"  "${rt[3].pt}"  0  0  0  0  `), me.push(`  AREAASSIGN  "${We}"  "${rt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), G.push(""), G.push("$ AREA ASSIGNS"), me.forEach((Ne) => G.push(Ne)), G.push("");
    }
    return G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), L.loads && L.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), L.loads.forEach((me, Ne) => {
      const [Be, nt, tt] = me, We = et(Ne);
      Math.abs(Be) > 1e-10 && G.push(`  POINTLOAD  "${We.pt}"  "${We.story}"  "Dead"  TYPE "FORCE"  FX ${Be}`), Math.abs(nt) > 1e-10 && G.push(`  POINTLOAD  "${We.pt}"  "${We.story}"  "Dead"  TYPE "FORCE"  FY ${nt}`), Math.abs(tt) > 1e-10 && G.push(`  POINTLOAD  "${We.pt}"  "${We.story}"  "Dead"  TYPE "FORCE"  FZ ${tt}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function nl(e, x) {
    const _ = e[x[0]], L = e[x[1]], U = Math.abs(L[1] - _[1]), H = Math.sqrt((L[0] - _[0]) ** 2 + (L[2] - _[2]) ** 2), ne = U > H * 0.5;
    return ne && H > 0.01 ? "BRACE" : ne ? "COLUMN" : "BEAM";
  }
  function sl(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: L, elementInputs: U } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${x.length} nodes, ${_.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), x.forEach((ne, V) => {
      H.push(`ops.node(${V + 1}, ${ne[0]}, ${ne[1]}, ${ne[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a2 = L.supports) == null ? void 0 : _a2.forEach((ne, V) => {
      const Y = ne.map((G) => G ? 1 : 0).join(", ");
      H.push(`ops.fix(${V + 1}, ${Y})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((ne, V) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (ne.length !== 2) return;
      const Y = x[ne[0]], G = x[ne[1]], A = Math.abs(G[2] - Y[2]) > Math.max(Math.abs(G[0] - Y[0]), Math.abs(G[1] - Y[1])) ? 2 : 1, re = ((_a3 = U.areas) == null ? void 0 : _a3.get(V)) ?? 1, Ie = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ge = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ce = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, pe = ((_e2 = U.momentsOfInertiaY) == null ? void 0 : _e2.get(V)) ?? 1, be = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${V + 1}, ${ne[0] + 1}, ${ne[1] + 1}, ${re}, ${Ie}, ${ge}, ${ce}, ${pe}, ${be}, ${A})`);
    }), H.push(""), L.loads && L.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), L.loads.forEach((ne, V) => {
      const Y = ne.map((G) => G).join(", ");
      H.push(`ops.load(${V + 1}, ${Y})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), x.forEach((ne, V) => {
      H.push(`print(f"Node {${V + 1}}: {ops.nodeDisp(${V + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = L.supports) == null ? void 0 : _b.forEach((ne, V) => {
      H.push(`print(f"Node {${V + 1}}: {ops.nodeReaction(${V + 1})}")`);
    }), H.join(`
`);
  }
  function al(e) {
    var _a2, _b;
    const { nodes: x, elements: _, nodeInputs: L, elementInputs: U } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${x.length} nodes, ${_.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), x.forEach((ne, V) => {
      H.push(`node ${V + 1} ${ne[0]} ${ne[1]} ${ne[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a2 = L.supports) == null ? void 0 : _a2.forEach((ne, V) => {
      const Y = ne.map((G) => G ? 1 : 0).join(" ");
      H.push(`fix ${V + 1} ${Y}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), _.forEach((ne, V) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (ne.length !== 2) return;
      const Y = x[ne[0]], G = x[ne[1]], A = Math.abs(G[2] - Y[2]) > Math.max(Math.abs(G[0] - Y[0]), Math.abs(G[1] - Y[1])) ? 2 : 1, re = ((_a3 = U.areas) == null ? void 0 : _a3.get(V)) ?? 1, Ie = ((_b2 = U.elasticities) == null ? void 0 : _b2.get(V)) ?? 2e5, ge = ((_c = U.shearModuli) == null ? void 0 : _c.get(V)) ?? 8e4, ce = ((_d = U.torsionalConstants) == null ? void 0 : _d.get(V)) ?? 1, pe = ((_e2 = U.momentsOfInertiaY) == null ? void 0 : _e2.get(V)) ?? 1, be = ((_f = U.momentsOfInertiaZ) == null ? void 0 : _f.get(V)) ?? 1;
      H.push(`element elasticBeamColumn ${V + 1} ${ne[0] + 1} ${ne[1] + 1} ${re} ${Ie} ${ge} ${ce} ${pe} ${be} ${A}`);
    }), H.push(""), L.loads && L.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), L.loads.forEach((ne, V) => {
      const Y = ne.map((G) => G).join(" ");
      H.push(`  load ${V + 1} ${Y}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), x.forEach((ne, V) => {
      H.push(`puts "Node ${V + 1}: [nodeDisp ${V + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = L.supports) == null ? void 0 : _b.forEach((ne, V) => {
      H.push(`puts "Node ${V + 1}: [nodeReaction ${V + 1}]"`);
    }), H.join(`
`);
  }
  function ll(e) {
    const x = [], _ = [], L = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const Ie of e.split(/\r?\n/)) {
      const ge = Ie.trim(), ce = ge.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const De = parseInt(ce[1]), Oe = x.length;
        x.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), A.set(De, Oe);
        continue;
      }
      const pe = ge.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (pe) {
        const De = parseInt(pe[1]), Oe = A.get(De);
        Oe !== void 0 && L.set(Oe, [
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
        const De = parseInt(be[1]), Oe = A.get(parseInt(be[2])), Ue = A.get(parseInt(be[3]));
        if (Oe !== void 0 && Ue !== void 0) {
          const it = _.length;
          _.push([
            Oe,
            Ue
          ]), re.set(De, it), V.set(it, parseFloat(be[4])), H.set(it, parseFloat(be[5])), ne.set(it, parseFloat(be[6])), xe.set(it, parseFloat(be[7])), Y.set(it, parseFloat(be[8])), G.set(it, parseFloat(be[9]));
        }
        continue;
      }
      const Fe = ge.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Fe) {
        const De = A.get(parseInt(Fe[1]));
        De !== void 0 && U.set(De, [
          parseFloat(Fe[2]),
          parseFloat(Fe[3]),
          parseFloat(Fe[4]),
          parseFloat(Fe[5]),
          parseFloat(Fe[6]),
          parseFloat(Fe[7])
        ]);
      }
    }
    return {
      nodes: x,
      elements: _,
      nodeInputs: {
        supports: L,
        loads: U
      },
      elementInputs: {
        elasticities: H,
        shearModuli: ne,
        areas: V,
        momentsOfInertiaY: Y,
        momentsOfInertiaZ: G,
        torsionalConstants: xe
      }
    };
  }
  function il(e) {
    const x = [], _ = [], L = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
    for (const re of e.split(/\r?\n/)) {
      const Ie = re.trim();
      if (Ie.startsWith("#") || Ie.startsWith("//")) continue;
      const ge = Ie.split(/\s+/);
      if (ge[0] === "node" && ge.length >= 5) {
        const ce = parseInt(ge[1]), pe = x.length;
        x.push([
          parseFloat(ge[2]),
          parseFloat(ge[3]),
          parseFloat(ge[4])
        ]), A.set(ce, pe);
        continue;
      }
      if (ge[0] === "fix" && ge.length >= 8) {
        const ce = A.get(parseInt(ge[1]));
        ce !== void 0 && L.set(ce, [
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
        const ce = A.get(parseInt(ge[3])), pe = A.get(parseInt(ge[4]));
        if (ce !== void 0 && pe !== void 0) {
          const be = _.length;
          _.push([
            ce,
            pe
          ]), V.set(be, parseFloat(ge[5])), H.set(be, parseFloat(ge[6])), ne.set(be, parseFloat(ge[7])), xe.set(be, parseFloat(ge[8])), Y.set(be, parseFloat(ge[9])), G.set(be, parseFloat(ge[10]));
        }
        continue;
      }
      if (ge[0] === "load" && ge.length >= 8) {
        const ce = A.get(parseInt(ge[1]));
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
        supports: L,
        loads: U
      },
      elementInputs: {
        elasticities: H,
        shearModuli: ne,
        areas: V,
        momentsOfInertiaY: Y,
        momentsOfInertiaZ: G,
        torsionalConstants: xe
      }
    };
  }
  js = Ho.state(false);
  bl = function(e) {
    e.nodeInputs || (e.nodeInputs = Ho.state({})), e.elementInputs || (e.elementInputs = Ho.state({})), e.deformOutputs || (e.deformOutputs = Ho.state({})), e.analyzeOutputs || (e.analyzeOutputs = Ho.state({}));
    let x = "tonf", _ = "m", L = ko(x, _), U = {
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
    }, ne = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    let Y = false;
    const G = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Map();
    let A = "", re = {}, Ie = null, ge = "", ce = [], pe = [], be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), De = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), it = null, Je = [], et = 0.2, xt = 2, Mt = 2, me = false, Ne = 2, Be = "x", nt = /* @__PURE__ */ new Set(), tt = true, We = 0.15, pt = 2, rt = 2, wt = /* @__PURE__ */ new Set(), At = false, ct = "perimeter";
    const qt = () => ({
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
    }), Ct = (t, o) => ({
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
      }, qt),
      vigasY: Array.from({
        length: o
      }, qt)
    }), Le = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Et = 0, vt = 3, ye = false, Me = 0, ae = null, Ce = 0, ie = [], ve = 1, Re = true;
    const Te = Ra();
    Te.div.style.display = "none";
    function at() {
      const t = an()[A];
      return t && t[Et] ? t[Et].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let qe = [], Pe = [], ot = 0, Ve = [], dt = null;
    function Rt() {
      if (!dt) return;
      const t = st();
      t && t.scene.remove(dt), dt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), dt = null;
    }
    function Bt(t, o, n, l, s) {
      Rt();
      const d = st();
      if (!d) return;
      dt = new on(), dt.name = "refGrid";
      const a = Math.min(...t), i = Math.max(...t), f = Math.min(...o), c = Math.max(...o), r = Math.max(...n), b = i - a || 1, w = c - f || 1, M = 3359829, y = 2241348;
      for (const g of n) {
        for (const S of o) {
          const I = new Ut().setFromPoints([
            new ke(a, g, S),
            new ke(i, g, S)
          ]), k = new qo({
            color: M,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), N = new Eo(I, k);
          N.computeLineDistances(), N.renderOrder = -10, dt.add(N);
        }
        for (const S of t) {
          const I = new Ut().setFromPoints([
            new ke(S, g, f),
            new ke(S, g, c)
          ]), k = new qo({
            color: M,
            dashSize: w * 0.015,
            gapSize: w * 0.01,
            transparent: true,
            opacity: 0.25
          }), N = new Eo(I, k);
          N.computeLineDistances(), N.renderOrder = -10, dt.add(N);
        }
      }
      for (const g of t) for (const S of o) {
        const I = new Ut().setFromPoints([
          new ke(g, 0, S),
          new ke(g, r, S)
        ]), k = new qo({
          color: y,
          dashSize: r * 0.01,
          gapSize: r * 8e-3,
          transparent: true,
          opacity: 0.15
        }), N = new Eo(I, k);
        N.computeLineDistances(), N.renderOrder = -10, dt.add(N);
      }
      const p = Math.min(b, w) * 0.015;
      for (const g of n) for (const S of t) for (const I of o) {
        const k = [
          new ke(S - p, g, I),
          new ke(S + p, g, I),
          new ke(S, g, I - p),
          new ke(S, g, I + p)
        ], N = new Ut().setFromPoints(k), q = new _o({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), h = new Ro(N, q);
        h.renderOrder = -5, dt.add(h);
      }
      dt.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), d.scene.add(dt), d.render();
    }
    let It = null;
    function Jn() {
      if (!It) return;
      const t = st();
      t && t.scene.remove(It), It.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), It = null;
    }
    function Wo(t, o, n, l, s) {
      Jn();
      const d = st();
      if (!d) return;
      It = new on(), It.name = "gridAxes";
      const a = Math.min(...t), i = Math.max(...t), f = Math.min(...o), c = Math.max(...o), r = i - a || 1, b = c - f || 1, w = Math.max(r, b), M = w * 0.08, y = l || t.map((h, u) => String.fromCharCode(65 + u)), p = s || o.map((h, u) => String(u + 1)), g = w * 0.018, S = o.length <= 1, I = 8947848;
      for (let h = 0; h < t.length; h++) {
        const u = t[h];
        if (S) {
          const $ = -M - g * 1.5;
          gn(u, 0, 0, u, 0, $ + g, I, It), xn(y[h] || `${h}`, u, 0, $, g, It);
        } else {
          const $ = f - M - g * 1.5;
          gn(u, f, 0, u, $ + g, 0, I, It), xn(y[h] || `${h}`, u, $, 0, g, It);
        }
      }
      if (!S) for (let h = 0; h < o.length; h++) {
        const u = o[h], $ = a - M - g * 1.5;
        gn(a, u, 0, $ + g, u, 0, I, It), xn(p[h] || `${h}`, $, u, 0, g, It);
      }
      const k = g * 1.8, N = M * 1.2, q = M * 1.2;
      for (let h = 0; h < t.length - 1; h++) {
        const u = t[h], $ = t[h + 1], T = Math.abs($ - u), F = (u + $) / 2, v = `${T.toFixed(2)} m`;
        S ? (bn(v, F, 0, -N, k, It), hn(u, 0, -N * 0.7, $, 0, -N * 0.7, 16763904, It)) : (bn(v, F, f - q, 0, k, It), hn(u, f - q * 0.7, 0, $, f - q * 0.7, 0, 16763904, It));
      }
      if (!S) for (let h = 0; h < o.length - 1; h++) {
        const u = o[h], $ = o[h + 1], T = Math.abs($ - u), F = (u + $) / 2, v = `${T.toFixed(2)} m`;
        bn(v, a - N, F, 0, k, It), hn(a - N * 0.7, u, 0, a - N * 0.7, $, 0, 16763904, It);
      }
      It.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(It), d.render();
    }
    let Dt = null;
    function Vn() {
      if (!Dt) return;
      const t = st();
      t && t.scene.remove(Dt), Dt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Dt = null;
    }
    function mn(t, o, n) {
      if (Vn(), t.length === 0) return;
      const l = st();
      if (!l) return;
      Dt = new on(), Dt.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), i = Math.max(...n), f = d - s || 1, c = i - a || 1, r = Math.max(f, c), b = r * 0.06, w = n.length <= 1, M = 4491519, y = r * 0.015;
      for (const p of t) {
        const g = p.elev;
        w ? (Go(s - b, 0, g, d + b, 0, g, M, Dt), Xn(p.name, d + b * 1.5, 0, g, y, Dt)) : (Go(s, a, g, d, a, g, M, Dt), Go(d, a, g, d, i, g, M, Dt), Go(d, i, g, s, i, g, M, Dt), Go(s, i, g, s, a, g, M, Dt), Xn(p.name, s - b * 1.5, a, g, y, Dt));
      }
      Dt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((g) => {
          g.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Dt), l.render();
    }
    function Go(t, o, n, l, s, d, a, i) {
      const f = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, c = new Ut().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, d)
      ]), r = new qo({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Eo(c, r);
      b.computeLineDistances(), b.renderOrder = 50, i.add(b);
    }
    function Xn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 512, f = 64;
      a.width = i, a.height = f;
      const c = a.getContext("2d");
      c.fillStyle = "rgba(30,60,120,0.8)";
      const r = 8;
      c.beginPath(), c.moveTo(r, 0), c.lineTo(i - r, 0), c.quadraticCurveTo(i, 0, i, r), c.lineTo(i, f - r), c.quadraticCurveTo(i, f, i - r, f), c.lineTo(r, f), c.quadraticCurveTo(0, f, 0, f - r), c.lineTo(0, r), c.quadraticCurveTo(0, 0, r, 0), c.closePath(), c.fill(), c.fillStyle = "#88bbff", c.font = "bold 38px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, i / 2, f / 2);
      const b = new Bn(a);
      b.needsUpdate = true;
      const w = new sn({
        map: b,
        depthTest: false,
        transparent: true
      }), M = new nn(w);
      M.position.set(o, n, l), M.scale.set(s * 8, s, 1), M.renderOrder = 101, d.add(M);
    }
    function bn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 256, f = 64;
      a.width = i, a.height = f;
      const c = a.getContext("2d");
      c.fillStyle = "rgba(0,0,0,0.75)";
      const r = 8;
      c.beginPath(), c.moveTo(r, 0), c.lineTo(i - r, 0), c.quadraticCurveTo(i, 0, i, r), c.lineTo(i, f - r), c.quadraticCurveTo(i, f, i - r, f), c.lineTo(r, f), c.quadraticCurveTo(0, f, 0, f - r), c.lineTo(0, r), c.quadraticCurveTo(0, 0, r, 0), c.closePath(), c.fill(), c.fillStyle = "#ffcc00", c.font = "bold 36px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, i / 2, f / 2);
      const b = new Fa(a);
      b.minFilter = Pa;
      const w = new sn({
        map: b,
        transparent: true,
        depthTest: false
      }), M = new nn(w);
      M.position.set(o, n, l);
      const y = i / f;
      M.scale.set(s * y, s, 1), M.renderOrder = 999, d.add(M);
    }
    function hn(t, o, n, l, s, d, a, i) {
      const f = [
        new ke(t, o, n),
        new ke(l, s, d)
      ], c = new Ut().setFromPoints(f), r = new _o({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Eo(c, r);
      b.renderOrder = 998, i.add(b);
    }
    function gn(t, o, n, l, s, d, a, i) {
      const f = new Ut().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, d)
      ]), c = new qo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), r = new Eo(f, c);
      r.computeLineDistances(), i.add(r);
    }
    function xn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = i * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${i * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, i / 2, i / 2 + i * 0.02);
      const c = new Bn(a);
      c.needsUpdate = true;
      const r = new sn({
        map: c,
        depthTest: false,
        transparent: true
      }), b = new nn(r);
      b.position.set(o, n, l);
      const w = s * 2;
      b.scale.set(w, w, 1), b.renderOrder = 100, d.add(b);
    }
    const Ge = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Xe(), s;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Xe();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Xe(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Xe();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Xe();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Xe();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Xe();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Xe();
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
          Rt(), console.log("Reference grid cleared");
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
        Bt(l, s, d), qe = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), Pe = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), ot = d[d.length - 1], Ve = d.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Wo(qe.map((a) => a.coord), Pe.map((a) => a.coord), ot, qe.map((a) => a.label), Pe.map((a) => a.label));
        {
          const a = d.map((i, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? i - d[f - 1] : 0,
            elev: i
          }));
          mn(a, qe.map((i) => i.coord), Pe.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (qe.length === 0 || Ve.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = o.split("x").map((R) => parseFloat(R) / 100), [a, i] = n.split("x").map((R) => parseFloat(R) / 100), f = qe.map((R) => R.coord), c = Pe.map((R) => R.coord), r = Ve.map((R) => R.elev), b = f.length, w = c.length, M = r.length, y = M - 1, p = [], g = {};
        for (let R = 0; R < M; R++) for (let te = 0; te < w; te++) for (let se = 0; se < b; se++) g[`${se},${te},${R}`] = p.length, p.push([
          f[se],
          c[te],
          r[R]
        ]);
        const S = [], I = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map();
        for (let R = 0; R < y; R++) for (let te = 0; te < w; te++) for (let se = 0; se < b; se++) {
          const Q = S.length;
          S.push([
            g[`${se},${te},${R}`],
            g[`${se},${te},${R + 1}`]
          ]), I.add(Q), N.set(Q, R);
        }
        for (let R = 1; R < M; R++) for (let te = 0; te < w; te++) for (let se = 0; se < b - 1; se++) {
          const Q = S.length;
          S.push([
            g[`${se},${te},${R}`],
            g[`${se + 1},${te},${R}`]
          ]), k.add(Q), N.set(Q, R - 1);
        }
        for (let R = 1; R < M; R++) for (let te = 0; te < b; te++) for (let se = 0; se < w - 1; se++) {
          const Q = S.length;
          S.push([
            g[`${te},${se},${R}`],
            g[`${te},${se + 1},${R}`]
          ]), k.add(Q), N.set(Q, R - 1);
        }
        const q = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", h = /* @__PURE__ */ new Set();
        if (q) {
          const R = q === "all" || q === "x" || q === "perimeter", te = q === "all" || q === "y" || q === "perimeter";
          for (let se = 0; se < y; se++) {
            if (R) for (let Q = 0; Q < w; Q++) {
              if (q === "perimeter" && Q !== 0 && Q !== w - 1) continue;
              const W = Math.floor((b - 1) / 2);
              for (let le = 0; le < b - 1; le++) {
                if (q === "perimeter" && le !== W) continue;
                const de = S.length;
                S.push([
                  g[`${le},${Q},${se}`],
                  g[`${le + 1},${Q},${se + 1}`]
                ]), h.add(de), N.set(de, se);
                const K = S.length;
                S.push([
                  g[`${le + 1},${Q},${se}`],
                  g[`${le},${Q},${se + 1}`]
                ]), h.add(K), N.set(K, se);
              }
            }
            if (te) for (let Q = 0; Q < b; Q++) {
              if (q === "perimeter" && Q !== 0 && Q !== b - 1) continue;
              const W = Math.floor((w - 1) / 2);
              for (let le = 0; le < w - 1; le++) {
                if (q === "perimeter" && le !== W) continue;
                const de = S.length;
                S.push([
                  g[`${Q},${le},${se}`],
                  g[`${Q},${le + 1},${se + 1}`]
                ]), h.add(de), N.set(de, se);
                const K = S.length;
                S.push([
                  g[`${Q},${le + 1},${se}`],
                  g[`${Q},${le},${se + 1}`]
                ]), h.add(K), N.set(K, se);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, $ = u / (2 * (1 + 0.2)), T = s * d, F = s * d ** 3 / 12, v = d * s ** 3 / 12, E = s * d * (s ** 2 + d ** 2) / 12, m = a * i, C = a * i ** 3 / 12, O = i * a ** 3 / 12, B = a * i * (a ** 2 + i ** 2) / 12, J = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        for (let R = 0; R < S.length; R++) J.set(R, u), ee.set(R, $), I.has(R) ? (Z.set(R, T), oe.set(R, F), j.set(R, v), he.set(R, E), ze.set(R, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${o}`
        })) : h.has(R) ? (Z.set(R, T), oe.set(R, F), j.set(R, v), he.set(R, E), ze.set(R, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${o}`
        })) : (Z.set(R, m), oe.set(R, C), j.set(R, O), he.set(R, B), ze.set(R, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let R = 0; R < w; R++) for (let te = 0; te < b; te++) fe.set(g[`${te},${R},0`], [
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
          shearModuli: ee,
          areas: Z,
          momentsOfInertiaZ: oe,
          momentsOfInertiaY: j,
          torsionalConstants: he,
          sectionShapes: ze
        }, be = I, Fe = k, Oe = N, console.log(`Built: ${p.length} nodes, ${S.length} elements (${I.size} cols, ${k.size} beams, ${h.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${q ? `, braces=${q}` : ""}`), {
          nodes: p.length,
          elements: S.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = qe.findIndex((y) => y.label === t), s = Pe.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${qe.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Pe.map((y) => y.label)}`);
          return;
        }
        const d = qe[l].coord, a = Pe[s].coord, i = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const c = (y) => {
          const p = i.findIndex((g) => Math.abs(g[0] - d) < 1e-3 && Math.abs(g[1] - a) < 1e-3 && Math.abs(g[2] - y) < 1e-3);
          return p >= 0 ? p : (i.push([
            d,
            a,
            y
          ]), i.length - 1);
        }, r = n ? [
          Ve.findIndex((y) => y.label === n)
        ] : Array.from({
          length: Ve.length - 1
        }, (y, p) => p + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), w = c(Ve[0].elev);
        b.has(w) || b.set(w, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let M = 0;
        for (const y of r) {
          if (y < 1 || y >= Ve.length) continue;
          const p = c(Ve[y - 1].elev), g = c(Ve[y].elev);
          f.push([
            p,
            g
          ]), be.add(f.length - 1), Oe.set(f.length - 1, y - 1), M++;
        }
        return e.nodes.val = i, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${M} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), M;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const d = qe.findIndex((N) => N.label === t), a = Pe.findIndex((N) => N.label === o), i = qe.findIndex((N) => N.label === n), f = Pe.findIndex((N) => N.label === l), c = Ve.findIndex((N) => N.label === s);
        if (d < 0 || a < 0 || i < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (c < 1) {
          console.log(`Story "${s}" not found. Available: ${Ve.filter((N) => N.label !== "Base").map((N) => N.label)}`);
          return;
        }
        const r = qe[d].coord, b = Pe[a].coord, w = qe[i].coord, M = Pe[f].coord, y = Ve[c].elev, p = [
          ...e.nodes.val
        ], g = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], S = (N, q, h) => {
          const u = p.findIndex(($) => Math.abs($[0] - N) < 1e-3 && Math.abs($[1] - q) < 1e-3 && Math.abs($[2] - h) < 1e-3);
          return u >= 0 ? u : (p.push([
            N,
            q,
            h
          ]), p.length - 1);
        }, I = S(r, b, y), k = S(w, M, y);
        return g.push([
          I,
          k
        ]), Fe.add(g.length - 1), Oe.set(g.length - 1, c - 1), e.nodes.val = p, e.elements.val = g, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), g.length - 1;
      },
      addBrace(t, o, n, l, s, d) {
        var _a2;
        const a = qe.findIndex((u) => u.label === t), i = Pe.findIndex((u) => u.label === o), f = Ve.findIndex((u) => u.label === n), c = qe.findIndex((u) => u.label === l), r = Pe.findIndex((u) => u.label === s), b = Ve.findIndex((u) => u.label === d);
        if (a < 0 || i < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (c < 0 || r < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const w = qe[a].coord, M = Pe[i].coord, y = Ve[f].elev, p = qe[c].coord, g = Pe[r].coord, S = Ve[b].elev, I = [
          ...e.nodes.val
        ], k = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], N = (u, $, T) => {
          const F = I.findIndex((v) => Math.abs(v[0] - u) < 1e-3 && Math.abs(v[1] - $) < 1e-3 && Math.abs(v[2] - T) < 1e-3);
          return F >= 0 ? F : (I.push([
            u,
            $,
            T
          ]), I.length - 1);
        }, q = N(w, M, y), h = N(p, g, S);
        return k.push([
          q,
          h
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
        Ge.clear();
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
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [i, f] = s.split("x").map((W) => parseFloat(W) / 100), [c, r] = d.split("x").map((W) => parseFloat(W) / 100), b = [
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
        const y = b.length, p = w.length, g = M.length, S = l.length, I = [], k = {};
        for (let W = 0; W < g; W++) for (let le = 0; le < p; le++) for (let de = 0; de < y; de++) k[`${de},${W},${le}`] = I.length, I.push([
          b[de],
          M[W],
          w[le]
        ]);
        const N = [], q = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let W = 0; W < S; W++) for (let le = 0; le < p; le++) for (let de = 0; de < y; de++) {
          const K = N.length;
          N.push([
            k[`${de},${W},${le}`],
            k[`${de},${W + 1},${le}`]
          ]), q.add(K), u.set(K, W);
        }
        for (let W = 1; W < g; W++) for (let le = 0; le < p; le++) for (let de = 0; de < y - 1; de++) {
          const K = N.length;
          N.push([
            k[`${de},${W},${le}`],
            k[`${de + 1},${W},${le}`]
          ]), h.add(K), u.set(K, W - 1);
        }
        for (let W = 1; W < g; W++) for (let le = 0; le < y; le++) for (let de = 0; de < p - 1; de++) {
          const K = N.length;
          N.push([
            k[`${le},${W},${de}`],
            k[`${le},${W},${de + 1}`]
          ]), h.add(K), u.set(K, W - 1);
        }
        const T = 15100 * Math.sqrt(a) * 10, F = T / (2 * (1 + 0.2)), v = i * f, E = i * f ** 3 / 12, m = f * i ** 3 / 12, C = i * f * (i ** 2 + f ** 2) / 12, O = c * r, B = c * r ** 3 / 12, J = r * c ** 3 / 12, ee = c * r * (c ** 2 + r ** 2) / 12, Z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
        for (let W = 0; W < N.length; W++) Z.set(W, T), oe.set(W, F), q.has(W) ? (j.set(W, v), he.set(W, E), ze.set(W, m), fe.set(W, C), R.set(W, {
          type: "rect",
          b: i,
          h: f,
          name: `COL${s}`
        })) : (j.set(W, O), he.set(W, B), ze.set(W, J), fe.set(W, ee), R.set(W, {
          type: "rect",
          b: c,
          h: r,
          name: `V${d}`
        }));
        const te = /* @__PURE__ */ new Map();
        for (let W = 0; W < p; W++) for (let le = 0; le < y; le++) te.set(k[`${le},0,${W}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = I, e.elements.val = N, e.nodeInputs.val = {
          supports: te,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: oe,
          areas: j,
          momentsOfInertiaZ: he,
          momentsOfInertiaY: ze,
          torsionalConstants: fe,
          sectionShapes: R
        }, be = q, Fe = h, Oe = u, qe = b.map((W, le) => ({
          label: String.fromCharCode(65 + le),
          coord: W
        })), Pe = w.map((W, le) => ({
          label: `${le + 1}`,
          coord: W
        })), ot = M[M.length - 1], Wo(qe.map((W) => W.coord), Pe.map((W) => W.coord), ot, qe.map((W) => W.label), Pe.map((W) => W.label));
        {
          const W = M.map((le, de) => ({
            name: de === 0 ? "Base" : `P${de}`,
            height: de > 0 ? le - M[de - 1] : 0,
            elev: le
          }));
          mn(W, b, w);
        }
        const se = we.querySelector("#cad3d-axis-buttons");
        if (se) {
          se.style.display = "flex";
          const W = qe.map((de) => de.label), le = Pe.map((de) => de.label);
          se.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const de of W) se.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${de}">${de}</button>`;
          se.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const de of le) se.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${de}">${de}</button>`;
        }
        const Q = we.querySelector("#cad3d-floor-buttons");
        if (Q) {
          Q.style.display = "flex", Q.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let W = 0; W < S; W++) Q.innerHTML += `<button class="floor-btn" data-floor="${W}">P${W + 1}</button>`;
        }
        return Bt(b, w, M), Xe(), console.log(`Model3D: ${I.length}n ${N.length}e | ${y}x${p} grid, ${S} floors | COL${s} V${d} f'c=${a}`), {
          nodes: I.length,
          elements: N.length,
          columns: q.size,
          beams: h.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), qe = [], Pe = [], ot = 0, Jn(), Vn(), Rt();
        const t = we.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Xe();
      },
      frame(t, o, n = 0, l = 0) {
        Ge.clear();
        const s = [];
        n > 0 && s.push(-n);
        let d = 0;
        s.push(d);
        for (const y of t) d += y, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let i = 0;
        for (const y of o) i += y, a.push(i);
        const f = (y) => n > 0 && y === 0 || l > 0 && y === s.length - 1, c = {}, r = [];
        for (let y = 0; y < a.length; y++) for (let p = 0; p < s.length; p++) y === 0 && f(p) || (c[`${p},${y}`] = r.length, r.push([
          s[p],
          0,
          a[y]
        ]));
        const b = [];
        be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let p = 0; p < s.length; p++) f(p) || (be.add(b.length), b.push([
          c[`${p},${y}`],
          c[`${p},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let p = 0; p < s.length - 1; p++) Fe.add(b.length), b.push([
          c[`${p},${y}`],
          c[`${p + 1},${y}`]
        ]);
        const w = /* @__PURE__ */ new Map(), M = at();
        for (let y = 0; y < s.length; y++) {
          if (f(y)) continue;
          const p = `${y},0`;
          c[p] !== void 0 && w.set(c[p], [
            ...M
          ]);
        }
        return e.nodes.val = r, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: w
        }), qe = [
          ...s
        ], Pe = [
          0
        ], ot = a[a.length - 1] || 0, setTimeout(() => {
          kt(), Wo(s, [
            0
          ]), zn(), Tn();
        }, 50), Xe(), {
          nodes: r.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, i = 0, f = 1) {
        Ge.clear();
        const c = [];
        s > 0 && c.push(-s), c.push(0);
        for (const u of t) c.push(c[c.length - 1] + u);
        d > 0 && c.push(c[c.length - 1] + d);
        const r = [];
        a > 0 && r.push(-a), r.push(0);
        for (const u of o) r.push(r[r.length - 1] + u);
        i > 0 && r.push(r[r.length - 1] + i);
        const b = [
          0
        ];
        for (const u of n) b.push(b[b.length - 1] + u);
        const w = (u) => s > 0 && u === 0 || d > 0 && u === c.length - 1, M = (u) => a > 0 && u === 0 || i > 0 && u === r.length - 1, y = (u, $) => w(u) || M($), p = [], g = {};
        for (let u = 0; u < b.length; u++) for (let $ = 0; $ < r.length; $++) for (let T = 0; T < c.length; T++) u === 0 && y(T, $) || (g[`${T},${$},${u}`] = p.length, p.push([
          c[T],
          r[$],
          b[u]
        ]));
        const S = p.length, I = [];
        be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map();
        const k = [];
        for (let u = 0; u < b.length - 1; u++) for (let $ = 0; $ < r.length; $++) for (let T = 0; T < c.length; T++) y(T, $) || k.push({
          el: [
            g[`${T},${$},${u}`],
            g[`${T},${$},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, $], floor: T } of k) {
          if (f <= 1) {
            be.add(I.length), Oe.set(I.length, T), I.push([
              u,
              $
            ]);
            continue;
          }
          const F = p[u], v = p[$];
          let E = u;
          for (let m = 1; m < f; m++) {
            const C = m / f, O = p.length;
            p.push([
              F[0] + (v[0] - F[0]) * C,
              F[1] + (v[1] - F[1]) * C,
              F[2] + (v[2] - F[2]) * C
            ]), be.add(I.length), Oe.set(I.length, T), I.push([
              E,
              O
            ]), E = O;
          }
          be.add(I.length), Oe.set(I.length, T), I.push([
            E,
            $
          ]);
        }
        Ue = /* @__PURE__ */ new Map();
        const N = [];
        for (let u = 1; u < b.length; u++) for (let $ = 0; $ < r.length; $++) for (let T = 0; T < c.length - 1; T++) N.push({
          el: [
            g[`${T},${$},${u}`],
            g[`${T + 1},${$},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: T
        });
        for (let u = 1; u < b.length; u++) for (let $ = 0; $ < c.length; $++) for (let T = 0; T < r.length - 1; T++) N.push({
          el: [
            g[`${$},${T},${u}`],
            g[`${$},${T + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: T
        });
        for (const { el: [u, $], floor: T, dir: F, bay: v } of N) {
          const E = p[u], m = p[$];
          let C = u;
          for (let B = 1; B < l; B++) {
            const J = B / l, ee = p.length;
            p.push([
              E[0] + (m[0] - E[0]) * J,
              E[1] + (m[1] - E[1]) * J,
              E[2] + (m[2] - E[2]) * J
            ]);
            const Z = I.length;
            Fe.add(Z), Oe.set(Z, T), Ue.set(Z, {
              dir: F,
              bay: v
            }), I.push([
              C,
              ee
            ]), C = ee;
          }
          const O = I.length;
          Fe.add(O), Oe.set(O, T), Ue.set(O, {
            dir: F,
            bay: v
          }), I.push([
            C,
            $
          ]);
        }
        if (nt = /* @__PURE__ */ new Set(), me && Ne > 0) {
          const u = ($, T, F) => {
            for (let E = 0; E < p.length; E++) if (Math.abs(p[E][0] - $) < 1e-6 && Math.abs(p[E][1] - T) < 1e-6 && Math.abs(p[E][2] - F) < 1e-6) return E;
            const v = p.length;
            return p.push([
              $,
              T,
              F
            ]), v;
          };
          for (let $ = 1; $ < b.length; $++) if (Be === "x") for (let T = 0; T < r.length - 1; T++) {
            const F = r[T], v = r[T + 1];
            for (let E = 1; E <= Ne; E++) {
              const m = F + E / (Ne + 1) * (v - F), C = [];
              for (let O = 0; O < c.length; O++) C.push(u(c[O], m, b[$]));
              for (let O = 0; O < c.length - 1; O++) {
                const B = I.length;
                nt.add(B), Fe.add(B), Oe.set(B, $ - 1), Ue.set(B, {
                  dir: "x",
                  bay: O
                }), I.push([
                  C[O],
                  C[O + 1]
                ]);
              }
            }
          }
          else for (let T = 0; T < c.length - 1; T++) {
            const F = c[T], v = c[T + 1];
            for (let E = 1; E <= Ne; E++) {
              const m = F + E / (Ne + 1) * (v - F), C = [];
              for (let O = 0; O < r.length; O++) C.push(u(m, r[O], b[$]));
              for (let O = 0; O < r.length - 1; O++) {
                const B = I.length;
                nt.add(B), Fe.add(B), Oe.set(B, $ - 1), Ue.set(B, {
                  dir: "y",
                  bay: O
                }), I.push([
                  C[O],
                  C[O + 1]
                ]);
              }
            }
          }
        }
        const q = /* @__PURE__ */ new Map(), h = at();
        for (let u = 0; u < r.length; u++) for (let $ = 0; $ < c.length; $++) y($, u) || q.set(g[`${$},${u},0`], [
          ...h
        ]);
        De = /* @__PURE__ */ new Set();
        for (const u of Je) {
          const $ = b.length - 1, T = u.floors.includes(-1) ? Array.from({
            length: $
          }, (F, v) => v) : u.floors.filter((F) => F < $);
          for (const F of T) {
            let v, E, m, C;
            u.dir === "x" ? (v = u.bay, m = u.bay + 1, E = u.axisIdx, C = u.axisIdx) : (v = u.axisIdx, m = u.axisIdx, E = u.bay, C = u.bay + 1);
            const O = g[`${v},${E},${F}`], B = g[`${v},${E},${F + 1}`];
            let J, ee;
            if (u.dir === "x" ? (J = g[`${m},${C},${F}`], ee = g[`${m},${C},${F + 1}`]) : (J = g[`${m},${C},${F}`], ee = g[`${m},${C},${F + 1}`]), O === void 0 || J === void 0 || B === void 0 || ee === void 0) continue;
            const Z = Mt, oe = xt, j = p[O], he = p[J], ze = p[B], fe = p[ee], R = [];
            for (let te = 0; te <= oe; te++) {
              const se = [], Q = te / oe;
              for (let W = 0; W <= Z; W++) {
                const le = W / Z, de = (1 - Q) * ((1 - le) * j[0] + le * he[0]) + Q * ((1 - le) * ze[0] + le * fe[0]), K = (1 - Q) * ((1 - le) * j[1] + le * he[1]) + Q * ((1 - le) * ze[1] + le * fe[1]), Se = (1 - Q) * ((1 - le) * j[2] + le * he[2]) + Q * ((1 - le) * ze[2] + le * fe[2]);
                te === 0 && W === 0 ? se.push(O) : te === 0 && W === Z ? se.push(J) : te === oe && W === 0 ? se.push(B) : te === oe && W === Z ? se.push(ee) : (se.push(p.length), p.push([
                  de,
                  K,
                  Se
                ]));
              }
              R.push(se);
            }
            for (let te = 0; te < oe; te++) for (let se = 0; se < Z; se++) {
              const Q = R[te][se], W = R[te][se + 1], le = R[te + 1][se + 1], de = R[te + 1][se], K = I.length;
              De.add(K), Oe.set(K, F), I.push([
                Q,
                W,
                le,
                de
              ]);
            }
            if (F === 0) for (let te = 0; te <= Z; te++) {
              const se = R[0][te];
              se >= S && q.set(se, [
                ...h
              ]);
            }
          }
        }
        if (wt = /* @__PURE__ */ new Set(), tt) {
          const u = l, $ = l, T = /* @__PURE__ */ new Map(), F = (v, E, m) => `${Math.round(v * 1e4)},${Math.round(E * 1e4)},${Math.round(m * 1e4)}`;
          for (let v = 0; v < p.length; v++) T.set(F(p[v][0], p[v][1], p[v][2]), v);
          for (let v = 1; v < b.length; v++) {
            const E = b[v];
            for (let m = 0; m < c.length - 1; m++) for (let C = 0; C < r.length - 1; C++) {
              const O = c[m], B = c[m + 1], J = r[C], ee = r[C + 1], Z = [];
              for (let oe = 0; oe <= $; oe++) {
                const j = [];
                for (let he = 0; he <= u; he++) {
                  const ze = O + he / u * (B - O), fe = J + oe / $ * (ee - J);
                  if (oe === 0 && he === 0) j.push(g[`${m},${C},${v}`]);
                  else if (oe === 0 && he === u) j.push(g[`${m + 1},${C},${v}`]);
                  else if (oe === $ && he === 0) j.push(g[`${m},${C + 1},${v}`]);
                  else if (oe === $ && he === u) j.push(g[`${m + 1},${C + 1},${v}`]);
                  else {
                    const R = F(ze, fe, E), te = T.get(R);
                    if (te !== void 0) j.push(te);
                    else {
                      const se = p.length;
                      p.push([
                        ze,
                        fe,
                        E
                      ]), T.set(R, se), j.push(se);
                    }
                  }
                }
                Z.push(j);
              }
              for (let oe = 0; oe < $; oe++) for (let j = 0; j < u; j++) {
                const he = Z[oe][j], ze = Z[oe][j + 1], fe = Z[oe + 1][j + 1], R = Z[oe + 1][j], te = I.length;
                wt.add(te), Oe.set(te, v - 1), I.push([
                  he,
                  ze,
                  fe,
                  R
                ]);
              }
            }
          }
        }
        if (At && ct) {
          const u = ct === "all" || ct === "x" || ct === "perimeter", $ = ct === "all" || ct === "y" || ct === "perimeter", T = b.length - 1;
          for (let F = 0; F < T; F++) {
            if (u) for (let v = 0; v < r.length; v++) {
              if (ct === "perimeter" && v !== 0 && v !== r.length - 1) continue;
              const E = Math.floor((c.length - 1) / 2);
              for (let m = 0; m < c.length - 1; m++) {
                if (ct === "perimeter" && m !== E || y(m, v) || y(m + 1, v)) continue;
                const C = g[`${m},${v},${F}`], O = g[`${m + 1},${v},${F + 1}`], B = g[`${m + 1},${v},${F}`], J = g[`${m},${v},${F + 1}`];
                C !== void 0 && O !== void 0 && (I.push([
                  C,
                  O
                ]), Oe.set(I.length - 1, F)), B !== void 0 && J !== void 0 && (I.push([
                  B,
                  J
                ]), Oe.set(I.length - 1, F));
              }
            }
            if ($) for (let v = 0; v < c.length; v++) {
              if (ct === "perimeter" && v !== 0 && v !== c.length - 1) continue;
              const E = Math.floor((r.length - 1) / 2);
              for (let m = 0; m < r.length - 1; m++) {
                if (ct === "perimeter" && m !== E || y(v, m) || y(v, m + 1)) continue;
                const C = g[`${v},${m},${F}`], O = g[`${v},${m + 1},${F + 1}`], B = g[`${v},${m + 1},${F}`], J = g[`${v},${m},${F + 1}`];
                C !== void 0 && O !== void 0 && (I.push([
                  C,
                  O
                ]), Oe.set(I.length - 1, F)), B !== void 0 && J !== void 0 && (I.push([
                  B,
                  J
                ]), Oe.set(I.length - 1, F));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = I, e.nodeInputs && (e.nodeInputs.val = {
          supports: q
        }), qe = [
          ...c
        ], Pe = [
          ...r
        ], ot = b[b.length - 1] || 0, setTimeout(() => {
          kt(), Wo(c, r), zn(), Tn();
        }, 50), Xe(), {
          nodes: p.length,
          elements: I.length,
          nJointNodes: S
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        Ge.clear();
        const a = [], i = [], f = (M) => n + l * (1 - Math.pow(2 * M / t - 1, 2)), c = [], r = d + 1;
        for (let M = 0; M < r; M++) {
          const y = [], p = o / d * M;
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
            n
          ]);
          for (let g = 1; g < s; g++) {
            const S = t / s * g;
            y.push(a.length), a.push([
              S,
              p,
              f(S)
            ]);
          }
          y.push(a.length), a.push([
            t,
            p,
            n
          ]), c.push(y);
        }
        for (let M = 0; M < r; M++) {
          const y = c[M];
          i.push([
            y[0],
            y[2]
          ]), i.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let p = 2; p < y.length - 1; p++) i.push([
            y[p],
            y[p + 1]
          ]);
        }
        for (let M = 0; M < d; M++) for (let y = 2; y < c[0].length; y++) i.push([
          c[M][y],
          c[M + 1][y]
        ]);
        for (let M = 0; M < d; M++) for (let y = 2; y < c[0].length - 1; y += 2) i.push([
          c[M][y],
          c[M + 1][y + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), w = at();
        for (let M = 0; M < r; M++) b.set(c[M][0], [
          ...w
        ]), b.set(c[M][1], [
          ...w
        ]);
        return e.nodes.val = a, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), Xe(), {
          nodes: a.length,
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
            Ge.clear(), Ze("truss"), Zn();
            break;
          }
          case "beams": {
            Ge.clear(), Ze("beams"), Qn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Ge.clear(), Ze("3d"), es();
            break;
          }
          case "portico": {
            Ze("frame"), Ee();
            break;
          }
          case "edificio": {
            Ze("edificio"), Le.colMat = 0, Le.vigaMat = 0, Le.colShape = 0, Je = [], tt = false, me = false, At = false, Ee();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ze("edificio"), Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Je = [], me = true, Ne = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = pe.reduce((l, s) => l + s, 0) / pe.length;
            Be = o >= n ? "y" : "x", tt = true, We = 0.08, At = false, Ee();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Ze("edificio"), Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Je = [], me = true, Ne = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = pe.reduce((l, s) => l + s, 0) / pe.length;
            Be = o >= n ? "y" : "x", tt = true, We = 0.08, At = true, ct = "perimeter", Ee();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ze("edificio"), Le.colMat = 0, Le.vigaMat = 0, Le.colShape = 0, me = false;
            const o = Math.round(((_a2 = re.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = re.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Je = [
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
            ], tt = true, We = 0.15, Ee();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ze("edificio"), Le.colMat = 2, Le.vigaMat = 0, me = false;
            const o = Math.round(((_c = re.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = re.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Je = [
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
            ], tt = true, We = 0.12, Ee();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ze("edificio"), re.nPisos && (re.nPisos.val = 1), re.hPiso && (re.hPiso.val = 4.5), re.nVanosX && (re.nVanosX.val = 3), re.nVanosY && (re.nVanosY.val = 2), re.nSubViga && (re.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], pe = [
              5,
              5
            ], Le.colMat = 1, Le.vigaMat = 1, Le.steelColType = 0, Le.steelVigaType = 0, Je = [], me = true, Ne = 2, Be = ce[0] >= pe[0] ? "y" : "x", tt = true, We = 0.08, pt = 3, rt = 3, Ee();
            break;
          }
          case "galpon": {
            Ze("galpon"), Ee();
            break;
          }
          case "barra": {
            Ze("barra"), Ee();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ge.clear(), Ze("placa-3q"), ts();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ge.clear(), Ze("placa-q4"), os();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ge.clear(), Ze("losa-rect"), ns();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ge.clear(), Ze("losa-plana"), ss();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ge.clear(), Ze("viga-alta"), as();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ge.clear(), Ze("muro-contencion"), ls();
            break;
          }
          case "zapata":
          case "footing": {
            Ge.clear(), Ze("zapata"), is();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ge.clear(), Ze("placa-orificios"), rs();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ge.clear(), Ze("col-placa"), cs();
            break;
          }
          case "talud":
          case "slope": {
            Ge.clear(), Ze("talud"), ds();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ge.clear(), Ze("eiffel"), Is();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ge.clear(), Ze("arco"), ks();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ge.clear(), Ze("puente"), zs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ge.clear(), Ze("twisted"), Ts();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ge.clear(), Ze("burj"), Ls();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ge.clear(), Ze("opera"), As();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ge.clear(), Ze("diagrid"), Cs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, i = 3e7, f = 0.3, c = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][c]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const b = performance.now(), w = _n({
          E: i,
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
        const y = w.nodeResults.map((k) => [
          k.x,
          k.y,
          0
        ]), p = w.elementResults.map((k) => [
          ...k.nodes
        ]);
        e.nodes.val = y, e.elements.val = p;
        const g = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((k, N) => {
          g.set(N, [
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
        w.nodeResults.forEach((k, N) => {
          (k.x < 1e-10 || k.x > t - 1e-10 || k.y < 1e-10 || k.y > o - 1e-10) && S.set(N, [
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
          const k = d * t * o / y.length;
          y.forEach((N, q) => {
            S.has(q) || I.set(q, [
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
          const k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
          w.elementResults.forEach((h, u) => {
            k.set(u, [
              h.Mxx,
              h.Mxx,
              h.Mxx
            ]), N.set(u, [
              h.Myy,
              h.Myy,
              h.Myy
            ]), q.set(u, [
              h.Mxy,
              h.Mxy,
              h.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: k,
            bendingYY: N,
            bendingXY: q
          };
        }
        return setTimeout(() => kt(), 50), Xe(), w;
      },
      set(t, o) {
        re[t] ? (re[t].val = o, console.log(`${t} = ${o}`), oo(), Ee()) : lt[t] ? (lt[t].val = o, console.log(`${t} = ${o}`), oo(), Ee()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...re,
          ...lt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in re) o[l] = re[l].val;
          for (const l in lt) o[l] = lt[l].val;
          o.plateTheory = vt, o.supportType = Et;
          const n = an()[A];
          return n && n[Et] && (o.supportLabel = n[Et].label), console.table(o), o;
        }
        if (re[t]) return re[t].val;
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
        }[t.toLowerCase()] || 3), vt = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[vt] || vt}`), A.includes("placa") && (oo(), Ee());
      },
      setBc(t) {
        const o = an()[A];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        Et = t, Et >= o.length && (Et = 0), console.log(`Apoyo: ${o[Et].label} \u2192 DOFs: [${o[Et].dofs.map((n) => n ? "1" : "0").join(",")}]`), oo(), Ee();
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
        t && (x = t), o && (_ = o), L = ko(x, _);
        const n = we.querySelector("#cad3d-force-unit"), l = we.querySelector("#cad3d-length-unit");
        return n && (n.textContent = x), l && (l.textContent = _), A && Ze(A), console.log(`Unidades: ${L.label} | E=${L.E.toExponential(3)} ${L.stress}`), L.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Kn() {
      return Na(L);
    }
    function Un() {
      return qa(L);
    }
    let lt = {};
    function Ze(t) {
      var _a2, _b;
      A = t, js.val = true, Et = 0, Ce && wn(), re = {};
      const o = Kn()[t];
      if (o) for (const l of o) re[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      lt = {};
      const n = Un()[t];
      if (n) for (const l of n) lt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = re.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = re.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ce = Array(l).fill(L.defaultSpan), pe = Array(s).fill(L.defaultSpan * 0.8);
      }
      oo(), setTimeout(() => {
        Qs(), Ee();
      }, 50);
    }
    function X(t) {
      var _a2, _b;
      return ((_a2 = re[t]) == null ? void 0 : _a2.val) ?? ((_b = lt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Ee() {
      switch (A) {
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
          Ge.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(X("nPisos")), n = X("hPiso"), l = X("Lvix") || 0, s = X("Lvdx") || 0, d = X("Lviy") || 0, a = X("Lvdy") || 0, i = Math.max(1, Math.round(X("nSubViga") || 3)), f = Math.max(1, Math.round(X("nSubCol") || 1));
          Ge.building([
            ...ce
          ], [
            ...pe
          ], Array(o).fill(n), i, l, s, d, a, f);
          break;
        }
        case "galpon":
          Ge.galpon(X("span"), X("length"), X("height"), X("archRise"), Math.round(X("xDiv")), Math.round(X("yDiv")));
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
          is();
          break;
        case "placa-orificios":
          rs();
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
      if ((A === "frame" || A === "edificio" || A === "galpon") && e.nodeInputs) {
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
      ].includes(A)) {
        if (ne.size > 0 || V.size > 0 || Y) {
          const o = e.elements.val, n = o.filter((l, s) => !(ne.has(s) || V.has(s) || Y && !G.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          uo(), Sn();
        }, 30);
      }
    }
    function Zn() {
      const t = X("span"), o = Math.round(X("divisions")), n = X("height"), l = t / o, s = [], d = [];
      for (let r = 0; r <= o; r++) s.push([
        l * r,
        0,
        0
      ]);
      for (let r = 0; r <= o; r++) s.push([
        l * r,
        0,
        n
      ]);
      const a = o + 1;
      for (let r = 0; r < o; r++) d.push([
        r,
        r + 1
      ]);
      for (let r = 0; r < o; r++) d.push([
        a + r,
        a + r + 1
      ]);
      for (let r = 0; r <= o; r++) d.push([
        r,
        a + r
      ]);
      for (let r = 0; r < o; r++) r < o / 2 ? d.push([
        r,
        a + r + 1
      ]) : d.push([
        a + r,
        r + 1
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
      ]), f = (X("CM") ?? 0) + (X("CV") ?? 0), c = /* @__PURE__ */ new Map();
      if (f !== 0) for (let r = 0; r <= o; r++) c.set(r, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: c
      }), Xe();
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
      const i = [
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
          i[0] + (f[0] - i[0]) * w,
          i[1] + (f[1] - i[1]) * w,
          i[2] + (f[2] - i[2]) * w
        ]), a.push([
          c,
          M
        ]), c = M;
      }
      a.push([
        c,
        2
      ]);
      const r = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) r.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || r.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || r.set(b, [
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
        loads: r
      }), Xe();
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
      const a = d.length, i = [
        ...d
      ], f = [];
      for (let p = 0; p < l; p++) for (let g = 0; g < 4; g++) f.push([
        p * 4 + g,
        (p + 1) * 4 + g
      ]);
      for (let p = 0; p < l; p++) {
        const g = p * 4;
        f.push([
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
      const c = [];
      for (let p = 1; p <= l; p++) {
        const g = p * 4;
        c.push([
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
      for (const [p, g] of c) {
        const S = d[p], I = d[g];
        let k = p;
        for (let N = 1; N < s; N++) {
          const q = N / s, h = i.length;
          i.push([
            S[0] + (I[0] - S[0]) * q,
            S[1] + (I[1] - S[1]) * q,
            S[2] + (I[2] - S[2]) * q
          ]), f.push([
            k,
            h
          ]), k = h;
        }
        f.push([
          k,
          g
        ]);
      }
      const r = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) r.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = X("Ex") ?? 0, w = (X("CM") ?? 0) + (X("CV") ?? 0), M = a - 2, y = /* @__PURE__ */ new Map();
      if (b !== 0 && w === 0) y.set(M, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (w !== 0 && b === 0) for (let p = 0; p < i.length; p++) r.has(p) || y.set(p, [
        0,
        0,
        w,
        0,
        0,
        0
      ]);
      else if (b !== 0 && w !== 0) for (let p = 0; p < i.length; p++) r.has(p) || y.set(p, [
        p === M ? b : 0,
        0,
        w,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: y
      }), Xe();
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
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: i
      }), Xe();
    }
    function ts() {
      const t = X("Lx") || 15, o = X("Ly") || 10, n = X("meshSize") || 0.5, l = X("q") || -3, s = X("t") || 1, d = X("E") || 3e7, a = X("nu") || 0.3, i = d / (2 * (1 + a)), f = vt === 1 ? "Membrana" : vt === 2 ? "Kirchhoff" : "Mindlin", { nodes: c, elements: r, boundaryIndices: b } = po({
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
      }), w = t * o, M = l * w / c.length, y = new Map(b.map((g) => [
        g,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(c.map((g, S) => [
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
      e.nodes.val = c, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(r.map((g, S) => [
          S,
          d
        ])),
        elasticitiesOrthogonal: new Map(r.map((g, S) => [
          S,
          d
        ])),
        thicknesses: new Map(r.map((g, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(r.map((g, S) => [
          S,
          a
        ])),
        shearModuli: new Map(r.map((g, S) => [
          S,
          i
        ]))
      });
      try {
        const g = Lt(c, r, e.nodeInputs.val, e.elementInputs.val);
        g && e.deformOutputs && (e.deformOutputs.val = g);
        const S = Bo(c, r, e.elementInputs.val, g);
        S && e.analyzeOutputs && (e.analyzeOutputs.val = S), console.log(`Plate 3Q [${f}]: ${c.length} nodes, ${r.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function os() {
      const t = X("Lx") || 10, o = X("Ly") || 10, n = Math.round(X("nx") || 16), l = Math.round(X("ny") || 16), s = X("t") || 0.2, d = X("q") || -10, a = X("E") || 3e7, i = X("nu") || 0.3, f = Et === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[vt] ?? 0;
      return Ge.plateQ4(t, o, n, l, f, d, s, a, i, r);
    }
    function ns() {
      const t = X("a") || 6, o = X("b") || 4, n = Math.round(X("nx") || 12), l = Math.round(X("ny") || 8), s = X("t") || 0.1, d = X("q") || -10, a = X("E") || 35e6, i = X("nu") || 0.15, c = {
        1: 2,
        2: 1,
        3: 0
      }[vt] ?? 0, r = Ge.plateQ4(t, o, n, l, "simply-supported", d, s, a, i, c), b = a * s * s * s / (12 * (1 - i * i));
      let w = 0;
      for (let M = 1; M <= 19; M += 2) for (let y = 1; y <= 19; y += 2) {
        const p = M * M / (t * t) + y * y / (o * o);
        w += 1 / (M * y * p * p);
      }
      if (w *= 16 * Math.abs(d) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${w.toExponential(6)}`), r) {
        const M = Math.abs((Math.abs(r.centerW || 0) - w) / w * 100);
        console.log(`   WASM w_center = ${(r.centerW || 0).toExponential(6)}, error = ${M.toFixed(2)}%`);
      }
      return r;
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
      ], i = d.reduce((E, m) => E + m, 0), f = a.reduce((E, m) => E + m, 0), c = [
        0
      ];
      for (const E of d) c.push(c[c.length - 1] + E);
      const r = [
        0
      ];
      for (const E of a) r.push(r[r.length - 1] + E);
      const b = Math.max(2, Math.round(i / s)), w = Math.max(2, Math.round(f / s)), M = i / b, y = f / w, p = [];
      for (let E = 0; E <= w; E++) for (let m = 0; m <= b; m++) p.push([
        m * M,
        E * y
      ]);
      const g = [], S = /* @__PURE__ */ new Set();
      for (const E of c) for (const m of r) {
        let C = 1 / 0, O = 0;
        for (let B = 0; B < p.length; B++) {
          const J = Math.hypot(p[B][0] - E, p[B][1] - m);
          J < C && (C = J, O = B);
        }
        S.has(O) || (S.add(O), g.push({
          node: O,
          dof: 0,
          k: 1e15
        }));
      }
      const k = {
        1: 2,
        2: 1,
        3: 0
      }[vt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][k]}]: ${i}\xD7${f}m, ${b}\xD7${w} elem, ${S.size} columnas`);
      const N = performance.now(), q = _n({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: f,
        meshNx: b,
        meshNy: w,
        bcType: "none",
        pressure: o,
        theoryType: k,
        springs: g
      }), h = performance.now() - N;
      console.log(`Solved in ${h.toFixed(1)} ms, w_max = ${q.maxW.toExponential(4)}`);
      const u = q.nodeResults.map((E) => [
        E.x,
        E.y,
        0
      ]), $ = q.elementResults.map((E) => [
        ...E.nodes
      ]);
      e.nodes.val = u, e.elements.val = $;
      const T = /* @__PURE__ */ new Map();
      q.nodeResults.forEach((E, m) => {
        T.set(m, [
          0,
          0,
          E.w,
          E.bx,
          E.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: T
      });
      const F = /* @__PURE__ */ new Map();
      for (const E of S) F.set(E, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const v = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const E = o * i * f / u.length;
        u.forEach((m, C) => {
          F.has(C) || v.set(C, [
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
        supports: F,
        loads: v
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const E = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
        q.elementResults.forEach((O, B) => {
          E.set(B, [
            O.Mxx,
            O.Mxx,
            O.Mxx
          ]), m.set(B, [
            O.Myy,
            O.Myy,
            O.Myy
          ]), C.set(B, [
            O.Mxy,
            O.Mxy,
            O.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: E,
          bendingYY: m,
          bendingXY: C
        };
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function as() {
      const t = X("L") || 4, o = X("H") || 2, n = X("t") || 0.1, l = X("E") || 2e7, s = X("nu") || 0.2, d = l / (2 * (1 + s)), a = X("q") || -100, i = X("b") || 0.8, f = X("meshSize") || 0.2, { nodes: c, elements: r, boundaryIndices: b } = po({
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
      }), w = c, M = 0.4, y = /* @__PURE__ */ new Map();
      for (let h = 0; h < w.length; h++) {
        const u = w[h][0], $ = w[h][1];
        Math.abs($) < 1e-6 && (u <= M + 1e-6 || u >= t - M - 1e-6) && y.set(h, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - i) / 2, g = p + i, S = [];
      for (let h = 0; h < w.length; h++) if (Math.abs(w[h][1] - o) < 1e-6) {
        const u = w[h][0];
        u >= p - 1e-6 && u <= g + 1e-6 && S.push(h);
      }
      const I = a * i / Math.max(S.length, 1), k = /* @__PURE__ */ new Map();
      for (const h of S) k.set(h, [
        0,
        I,
        0,
        0,
        0,
        0
      ]);
      const N = {
        elasticities: new Map(r.map((h, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(r.map((h, u) => [
          u,
          l
        ])),
        thicknesses: new Map(r.map((h, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(r.map((h, u) => [
          u,
          s
        ])),
        shearModuli: new Map(r.map((h, u) => [
          u,
          d
        ]))
      }, q = {
        supports: y,
        loads: k
      };
      try {
        const h = Lt(w, r, q, N), u = Bo(w, r, N, h), $ = w.map((F) => [
          F[0],
          0,
          F[1]
        ]);
        if (e.nodes.val = $, e.elements.val = r, h && h.deformations) {
          const F = /* @__PURE__ */ new Map();
          h.deformations.forEach((v, E) => {
            F.set(E, [
              v[0],
              v[2],
              v[1],
              v[3],
              v[5],
              v[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: F
          });
        }
        if (e.nodeInputs) {
          const F = /* @__PURE__ */ new Map();
          y.forEach((E, m) => F.set(m, E));
          const v = /* @__PURE__ */ new Map();
          k.forEach((E, m) => v.set(m, [
            E[0],
            E[2],
            E[1],
            E[3],
            E[5],
            E[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: F,
            loads: v
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let T = 0;
        h && h.deformations && h.deformations.forEach((F) => {
          const v = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          T = Math.max(T, v);
        }), console.log(`Viga Alta: ${w.length} nodos, ${r.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${T.toExponential(4)}`);
      } catch (h) {
        console.warn("Viga Alta analysis failed:", h.message);
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function ls() {
      const t = X("H") || 4, o = X("B") || 3, n = X("tw") || 0.3, l = X("tb") || 0.4, s = X("meshSize") || 0.2, d = X("E") || 25e6, a = X("nu") || 0.2, i = d / (2 * (1 + a)), f = X("gamma") || 18, c = X("Ka") || 0.33, r = X("Es") || 5e4, b = X("nus") || 0.3, w = r / (2 * (1 + b)), M = X("kn") || 1e6, y = X("ks") || 1e4, p = X("gammaW") || 9.81, g = X("Hw") || 3.5, S = X("qs") || 0, I = Et, k = o * 0.3, N = o * 0.7, q = [
        [
          -k,
          0,
          0
        ],
        [
          N,
          0,
          0
        ],
        [
          N,
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
      let h = [], u = [], $ = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), F;
      if (I === 0) {
        const m = po({
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
        h = m.nodes, u = m.elements;
        for (let O = 0; O < h.length; O++) Math.abs(h[O][1]) < 1e-6 && $.set(O, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const C = [];
        for (let O = 0; O < h.length; O++) {
          const B = h[O][0], J = h[O][1];
          Math.abs(B - n) < s * 0.6 && J >= l - 1e-6 && C.push({
            idx: O,
            y: J
          });
        }
        C.sort((O, B) => O.y - B.y);
        for (let O = 0; O < C.length; O++) {
          const { idx: B, y: J } = C[O], ee = l + t - J, Z = c * f * ee + c * S;
          let oe = s;
          O > 0 && O < C.length - 1 ? oe = (C[O + 1].y - C[O - 1].y) / 2 : O === 0 && C.length > 1 ? oe = (C[1].y - C[0].y) / 2 : O === C.length - 1 && C.length > 1 && (oe = (C[O].y - C[O - 1].y) / 2);
          const j = Z * oe;
          Math.abs(j) > 1e-10 && T.set(B, [
            j,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        F = {
          elasticities: new Map(u.map((O, B) => [
            B,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((O, B) => [
            B,
            d
          ])),
          thicknesses: new Map(u.map((O, B) => [
            B,
            n
          ])),
          poissonsRatios: new Map(u.map((O, B) => [
            B,
            a
          ])),
          shearModuli: new Map(u.map((O, B) => [
            B,
            i
          ]))
        };
      } else if (I === 1 || I === 2) {
        const m = N, C = l + t;
        if (I === 2) {
          const O = [
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
              C,
              0
            ],
            [
              n,
              C,
              0
            ],
            [
              0,
              C,
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
          ], B = Math.max(3, Math.ceil((C - l) / s)), J = [];
          for (let K = 0; K <= B; K++) J.push([
            n,
            l + K * (C - l) / B,
            0
          ]);
          const ee = po({
            points: [
              ...O,
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
          h = ee.nodes, u = ee.elements;
          const Z = s * 0.4, oe = [];
          for (let K = 0; K < h.length; K++) {
            const Se = h[K][0], He = h[K][1];
            Math.abs(Se - n) < Z && He >= l - Z && oe.push(K);
          }
          oe.sort((K, Se) => h[K][1] - h[Se][1]);
          const j = [
            oe[0]
          ];
          for (let K = 1; K < oe.length; K++) {
            const Se = h[oe[K]][1] - h[j[j.length - 1]][1];
            Math.abs(Se) > s * 0.05 && j.push(oe[K]);
          }
          oe.length = 0, oe.push(...j);
          const he = /* @__PURE__ */ new Map();
          for (const K of oe) {
            const Se = h.length;
            h.push([
              h[K][0],
              h[K][1],
              h[K][2]
            ]), he.set(K, Se);
          }
          const ze = u.length, fe = [];
          for (let K = 0; K < ze; K++) {
            const Se = u[K], He = (h[Se[0]][0] + h[Se[1]][0] + h[Se[2]][0]) / 3, Ke = (h[Se[0]][1] + h[Se[1]][1] + h[Se[2]][1]) / 3, Ye = He >= -k && He <= N && Ke >= 0 && Ke <= l, Ht = He >= 0 && He <= n && Ke >= l && Ke <= l + t, Ot = Ye || Ht;
            if (fe.push(!Ot), !Ot) for (let zt = 0; zt < Se.length; zt++) {
              const Yt = he.get(Se[zt]);
              Yt !== void 0 && (Se[zt] = Yt);
            }
          }
          const R = u.length;
          for (let K = 0; K < oe.length - 1; K++) {
            const Se = oe[K], He = oe[K + 1], Ke = he.get(Se), Ye = he.get(He);
            u.push([
              He,
              Se,
              Ke,
              Ye
            ]);
          }
          const te = u.length - R, se = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
          for (let K = 0; K < ze; K++) fe[K] ? (se.set(K, r), Q.set(K, r), le.set(K, b), de.set(K, w), W.set(K, 1)) : (se.set(K, d), Q.set(K, d), le.set(K, a), de.set(K, i), W.set(K, 1));
          for (let K = R; K < u.length; K++) se.set(K, M), Q.set(K, 0), le.set(K, 0), de.set(K, y), W.set(K, 0);
          F = {
            elasticities: se,
            elasticitiesOrthogonal: Q,
            thicknesses: W,
            poissonsRatios: le,
            shearModuli: de
          };
          for (let K = 0; K < h.length; K++) {
            const Se = h[K][0], He = h[K][1];
            Math.abs(He) < 1e-6 ? $.set(K, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - m) < s * 0.1 && $.set(K, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let K = 0; K < ze; K++) {
            if (!fe[K]) continue;
            const Se = u[K], He = h[Se[0]], Ke = h[Se[1]], Ye = h[Se[2]], Ht = Math.abs((Ke[0] - He[0]) * (Ye[1] - He[1]) - (Ye[0] - He[0]) * (Ke[1] - He[1])) / 2, Ot = -f * Ht / 3;
            for (const zt of Se) {
              const Yt = T.get(zt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Yt[1] += Ot, T.set(zt, Yt);
            }
          }
          if (S > 0) {
            const K = [];
            for (let Se = 0; Se < h.length; Se++) {
              const He = h[Se][0], Ke = h[Se][1];
              Math.abs(Ke - C) < s * 0.1 && He > n - 1e-6 && K.push({
                idx: Se,
                x: He
              });
            }
            K.sort((Se, He) => Se.x - He.x);
            for (let Se = 0; Se < K.length; Se++) {
              let He = s;
              Se > 0 && Se < K.length - 1 ? He = (K[Se + 1].x - K[Se - 1].x) / 2 : Se === 0 && K.length > 1 ? He = (K[1].x - K[0].x) / 2 : Se === K.length - 1 && K.length > 1 && (He = (K[Se].x - K[Se - 1].x) / 2);
              const Ke = -S * He, Ye = T.get(K[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ye[1] += Ke, T.set(K[Se].idx, Ye);
            }
          }
          console.log(`  Interfaz Goodman: ${oe.length} nodos interfaz, ${te} elem interfaz, kn=${M}, ks=${y}`);
        } else {
          const O = [
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
              C,
              0
            ],
            [
              n,
              C,
              0
            ],
            [
              0,
              C,
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
          ], B = [
            [
              n,
              l,
              0
            ]
          ], J = po({
            points: [
              ...O,
              ...B
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
          h = J.nodes, u = J.elements;
          const ee = (R) => {
            const te = (h[R[0]][0] + h[R[1]][0] + h[R[2]][0]) / 3, se = (h[R[0]][1] + h[R[1]][1] + h[R[2]][1]) / 3, Q = te >= -k && te <= N && se >= 0 && se <= l, W = te >= 0 && te <= n && se >= l && se <= l + t;
            return Q || W;
          }, Z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), fe = [];
          for (let R = 0; R < u.length; R++) {
            const te = ee(u[R]);
            fe.push(!te), te ? (Z.set(R, d), oe.set(R, d), he.set(R, a), ze.set(R, i), j.set(R, 1)) : (Z.set(R, r), oe.set(R, r), he.set(R, b), ze.set(R, w), j.set(R, 1));
          }
          F = {
            elasticities: Z,
            elasticitiesOrthogonal: oe,
            thicknesses: j,
            poissonsRatios: he,
            shearModuli: ze
          };
          for (let R = 0; R < h.length; R++) {
            const te = h[R][0], se = h[R][1];
            Math.abs(se) < 1e-6 ? $.set(R, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(te - m) < s * 0.1 && $.set(R, [
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
            const te = u[R], se = h[te[0]], Q = h[te[1]], W = h[te[2]], le = Math.abs((Q[0] - se[0]) * (W[1] - se[1]) - (W[0] - se[0]) * (Q[1] - se[1])) / 2, de = -f * le / 3;
            for (const K of te) {
              const Se = T.get(K) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += de, T.set(K, Se);
            }
          }
          if (S > 0) {
            const R = [];
            for (let te = 0; te < h.length; te++) {
              const se = h[te][0], Q = h[te][1];
              Math.abs(Q - C) < s * 0.1 && se > n - 1e-6 && R.push({
                idx: te,
                x: se
              });
            }
            R.sort((te, se) => te.x - se.x);
            for (let te = 0; te < R.length; te++) {
              let se = s;
              te > 0 && te < R.length - 1 ? se = (R[te + 1].x - R[te - 1].x) / 2 : te === 0 && R.length > 1 ? se = (R[1].x - R[0].x) / 2 : te === R.length - 1 && R.length > 1 && (se = (R[te].x - R[te - 1].x) / 2);
              const Q = -S * se, W = T.get(R[te].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              W[1] += Q, T.set(R[te].idx, W);
            }
          }
        }
      }
      if (I === 3) {
        const m = po({
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
        h = m.nodes, u = m.elements;
        for (let ee = 0; ee < h.length; ee++) Math.abs(h[ee][1]) < 1e-6 && $.set(ee, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const C = l + t, O = Math.min(g, t), B = C - O, J = [];
        for (let ee = 0; ee < h.length; ee++) {
          const Z = h[ee][0], oe = h[ee][1];
          Math.abs(Z - n) < s * 0.6 && oe >= l - 1e-6 && J.push({
            idx: ee,
            y: oe
          });
        }
        J.sort((ee, Z) => ee.y - Z.y);
        for (let ee = 0; ee < J.length; ee++) {
          const { idx: Z, y: oe } = J[ee], j = Math.max(0, C - oe);
          if (j <= 0 || oe < B - 1e-6) continue;
          const he = Math.min(j, O), ze = p * he;
          let fe = s;
          ee > 0 && ee < J.length - 1 ? fe = (J[ee + 1].y - J[ee - 1].y) / 2 : ee === 0 && J.length > 1 ? fe = (J[1].y - J[0].y) / 2 : ee === J.length - 1 && J.length > 1 && (fe = (J[ee].y - J[ee - 1].y) / 2);
          const R = ze * fe;
          Math.abs(R) > 1e-10 && T.set(Z, [
            R,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        F = {
          elasticities: new Map(u.map((ee, Z) => [
            Z,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ee, Z) => [
            Z,
            d
          ])),
          thicknesses: new Map(u.map((ee, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(u.map((ee, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(u.map((ee, Z) => [
            Z,
            i
          ]))
        };
      }
      const v = {
        supports: $,
        loads: T
      }, E = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const m = Lt(h, u, v, F), C = u.filter((j) => j.length === 3), O = {};
        for (const j of Object.keys(F)) {
          const he = F[j];
          if (he && he instanceof Map) {
            const ze = /* @__PURE__ */ new Map();
            let fe = 0;
            for (let R = 0; R < u.length; R++) u[R].length === 3 && (he.has(R) && ze.set(fe, he.get(R)), fe++);
            O[j] = ze;
          }
        }
        const B = Bo(h, C, O, m), J = h.map((j) => [
          j[0],
          0,
          j[1]
        ]);
        if (e.nodes.val = J, e.elements.val = C, m && m.deformations) {
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
        const ee = /* @__PURE__ */ new Map();
        $.forEach((j, he) => ee.set(he, j));
        const Z = /* @__PURE__ */ new Map();
        T.forEach((j, he) => Z.set(he, [
          j[0],
          j[2],
          j[1],
          j[3],
          j[5],
          j[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ee,
          loads: Z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let oe = 0;
        m && m.deformations && m.deformations.forEach((j) => {
          const he = Math.sqrt(j[0] * j[0] + j[1] * j[1] + j[2] * j[2]);
          oe = Math.max(oe, he);
        }), console.log(`Muro Contencion [${E[I]}]: ${h.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${c}, gamma=${f}, qs=${S}`), I === 1 && console.log(`  Es=${r}, nus=${b}`), I === 2 && console.log(`  Es=${r}, nus=${b}, kn=${M}, ks=${y}`), I === 3 && console.log(`  gammaW=${p}, Hw=${g}`), console.log(`  max|u| = ${oe.toExponential(4)}`);
      } catch (m) {
        console.warn("Muro Contencion failed:", m.message);
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function is() {
      const t = X("Lx") || 2, o = X("Ly") || 2, n = X("t") || 0.5, l = X("colA") || 0.4, s = X("colH") || 1.5, d = Math.round(X("nx") || 8), a = Math.round(X("ny") || 8), i = X("E") || 25e6, f = X("nu") || 0.2, c = X("P") || -500, r = X("Mx") || 0, b = X("My") || 0, w = X("ks") || 2e4, M = t / d, y = o / a, p = t / 2, g = o / 2, S = l / 2, I = [];
      for (let $ = 0; $ <= a; $++) for (let T = 0; T <= d; T++) {
        const F = $ * (d + 1) + T;
        let v = M, E = y;
        (T === 0 || T === d) && (v = M / 2), ($ === 0 || $ === a) && (E = y / 2), I.push({
          node: F,
          dof: 0,
          k: w * v * E
        });
      }
      let k = 0;
      for (let $ = 0; $ <= a; $++) for (let T = 0; T <= d; T++) Math.abs(T * M - p) <= S + 1e-6 && Math.abs($ * y - g) <= S + 1e-6 && k++;
      const N = c / Math.max(k, 1), q = [];
      for (let $ = 0; $ <= a; $++) for (let T = 0; T <= d; T++) {
        const F = T * M, v = $ * y;
        Math.abs(F - p) <= S + 1e-6 && Math.abs(v - g) <= S + 1e-6 && q.push({
          node: $ * (d + 1) + T,
          dof: 0,
          value: N
        });
      }
      if (Math.abs(r) > 1e-6) {
        const $ = S > 1e-6 ? S : y, T = r / $;
        for (let F = 0; F <= a; F++) for (let v = 0; v <= d; v++) {
          const E = v * M, m = F * y;
          if (Math.abs(E - p) <= S + 1e-6 && Math.abs(m - g) <= S + 1e-6) {
            const C = m - g;
            if (Math.abs(C) > 1e-6) {
              const O = C > 0 ? 1 : -1;
              q.push({
                node: F * (d + 1) + v,
                dof: 0,
                value: O * T / k * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const $ = S > 1e-6 ? S : M, T = b / $;
        for (let F = 0; F <= a; F++) for (let v = 0; v <= d; v++) {
          const E = v * M, m = F * y;
          if (Math.abs(E - p) <= S + 1e-6 && Math.abs(m - g) <= S + 1e-6) {
            const C = E - p;
            if (Math.abs(C) > 1e-6) {
              const O = C > 0 ? 1 : -1;
              q.push({
                node: F * (d + 1) + v,
                dof: 0,
                value: O * T / k * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[vt] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${c}, Mx=${r}, My=${b}, ks=${w}`);
      try {
        const $ = _n({
          E: i,
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
          pointLoads: q
        });
        console.log(`  Solved: w_max = ${$.maxW.toExponential(4)}`);
        const T = $.nodeResults.map((B) => [
          B.x,
          B.y,
          0
        ]), F = T.length;
        T.push([
          p - S,
          g - S,
          0
        ]), T.push([
          p + S,
          g - S,
          0
        ]), T.push([
          p + S,
          g + S,
          0
        ]), T.push([
          p - S,
          g + S,
          0
        ]), T.push([
          p - S,
          g - S,
          s
        ]), T.push([
          p + S,
          g - S,
          s
        ]), T.push([
          p + S,
          g + S,
          s
        ]), T.push([
          p - S,
          g + S,
          s
        ]);
        const v = $.elementResults.map((B) => [
          ...B.nodes
        ]);
        v.push([
          F,
          F + 4
        ]), v.push([
          F + 1,
          F + 5
        ]), v.push([
          F + 2,
          F + 6
        ]), v.push([
          F + 3,
          F + 7
        ]), v.push([
          F + 4,
          F + 5
        ]), v.push([
          F + 5,
          F + 6
        ]), v.push([
          F + 6,
          F + 7
        ]), v.push([
          F + 7,
          F + 4
        ]), v.push([
          F,
          F + 1
        ]), v.push([
          F + 1,
          F + 2
        ]), v.push([
          F + 2,
          F + 3
        ]), v.push([
          F + 3,
          F
        ]), e.nodes.val = T, e.elements.val = v;
        const E = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((B, J) => {
          E.set(J, [
            0,
            0,
            B.w,
            B.bx,
            B.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: E
        });
        const m = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((B, J) => {
          const ee = B.x, Z = B.y;
          (ee < 1e-6 || ee > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && m.set(J, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const C = /* @__PURE__ */ new Map();
        if (C.set(F + 4, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), C.set(F + 5, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), C.set(F + 6, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), C.set(F + 7, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: m,
          loads: C
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const B = $.elementResults.length, J = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          $.elementResults.forEach((oe, j) => {
            J.set(j, [
              oe.Mxx,
              oe.Mxx,
              oe.Mxx
            ]), ee.set(j, [
              oe.Myy,
              oe.Myy,
              oe.Myy
            ]), Z.set(j, [
              oe.Mxy,
              oe.Mxy,
              oe.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: J,
            bendingYY: ee,
            bendingXY: Z
          };
        }
        const O = st();
        O && (O.settings.shellResults.val = "bendingXX");
      } catch ($) {
        console.warn("Zapata solver failed:", $.message);
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function rs() {
      const t = X("Lx") || 0.4, o = X("Ly") || 0.4, n = X("t") || 0.025, l = X("dBolt") || 0.022, s = X("sx") || 0.28, d = X("sy") || 0.28, a = X("colA") || 0.2, i = X("meshSize") || 8e-3, f = X("E") || 2e8, c = X("nu") || 0.3, r = f / (2 * (1 + c)), b = X("P") || -200, w = Math.round(X("nBolts") || 4), M = t / 2, y = o / 2, p = l / 2, g = a / 2, S = [];
      w >= 4 && (S.push([
        M - s / 2,
        y - d / 2
      ]), S.push([
        M + s / 2,
        y - d / 2
      ]), S.push([
        M + s / 2,
        y + d / 2
      ]), S.push([
        M - s / 2,
        y + d / 2
      ])), w >= 6 && (S.push([
        M,
        y - d / 2
      ]), S.push([
        M,
        y + d / 2
      ])), w >= 8 && (S.push([
        M - s / 2,
        y
      ]), S.push([
        M + s / 2,
        y
      ]));
      const { nodes: I, elements: k } = po({
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
      }), N = (E, m) => {
        for (const [C, O] of S) if ((E - C) * (E - C) + (m - O) * (m - O) < p * p) return true;
        return false;
      }, q = k.filter((E) => {
        const m = (I[E[0]][0] + I[E[1]][0] + I[E[2]][0]) / 3, C = (I[E[0]][1] + I[E[1]][1] + I[E[2]][1]) / 3;
        return !N(m, C);
      }), h = I, u = /* @__PURE__ */ new Map();
      for (let E = 0; E < h.length; E++) {
        const m = h[E][0], C = h[E][1];
        for (const [O, B] of S) {
          const J = Math.sqrt((m - O) * (m - O) + (C - B) * (C - B));
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
      let T = 0;
      for (let E = 0; E < h.length; E++) {
        const m = h[E][0], C = h[E][1];
        Math.abs(m - M) <= g && Math.abs(C - y) <= g && T++;
      }
      const F = b / Math.max(T, 1);
      for (let E = 0; E < h.length; E++) {
        const m = h[E][0], C = h[E][1];
        if (Math.abs(m - M) <= g && Math.abs(C - y) <= g) {
          const O = $.get(E) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O[2] += F, $.set(E, O);
        }
      }
      const v = {
        elasticities: new Map(q.map((E, m) => [
          m,
          f
        ])),
        elasticitiesOrthogonal: new Map(q.map((E, m) => [
          m,
          f
        ])),
        thicknesses: new Map(q.map((E, m) => [
          m,
          n
        ])),
        poissonsRatios: new Map(q.map((E, m) => [
          m,
          c
        ])),
        shearModuli: new Map(q.map((E, m) => [
          m,
          r
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${w} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${q.length} triangulos, ${h.length} nodos`);
      try {
        const E = Lt(h, q, {
          supports: u,
          loads: $
        }, v), m = Bo(h, q, v, E);
        e.nodes.val = h, e.elements.val = q, E && e.deformOutputs && (e.deformOutputs.val = E), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: $
        }), e.elementInputs && (e.elementInputs.val = {}), m && e.analyzeOutputs && (e.analyzeOutputs.val = m);
        let C = 0;
        E && E.deformations && E.deformations.forEach((O) => {
          const B = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]);
          C = Math.max(C, B);
        }), console.log(`  max|u| = ${C.toExponential(4)}`);
      } catch (E) {
        console.warn("Placa Base failed:", E.message);
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function cs() {
      const t = X("colB") || 0.3, o = X("colH") || 0.3, n = X("colT") || 8e-3, l = X("colLen") || 1.5, s = X("Lx") || 0.45, d = X("Ly") || 0.45, a = X("tPlaca") || 0.025, i = X("dBolt") || 0.022, f = X("sx") || 0.32, c = X("sy") || 0.32, r = Math.round(X("nSubColV") || 6), b = Math.round(X("nSubColH") || 4), w = Math.round(X("nSubPlaca") || 10), M = X("E") || 2e8, y = X("nu") || 0.3, p = M / (2 * (1 + y)), g = X("P") || -300, S = s / 2, I = d / 2, k = i / 2, N = t / 2, q = o / 2, h = [], u = [], $ = w, T = s / $, F = d / $, v = (Q, W) => W * ($ + 1) + Q;
      for (let Q = 0; Q <= $; Q++) for (let W = 0; W <= $; W++) h.push([
        W * T,
        Q * F,
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
      ], m = (Q, W) => {
        for (const [le, de] of E) if ((Q - le) * (Q - le) + (W - de) * (W - de) < k * k) return true;
        return false;
      }, C = u.length;
      for (let Q = 0; Q < $; Q++) for (let W = 0; W < $; W++) {
        const le = (W + 0.5) * T, de = (Q + 0.5) * F;
        m(le, de) || u.push([
          v(W, Q),
          v(W + 1, Q),
          v(W + 1, Q + 1),
          v(W, Q + 1)
        ]);
      }
      const O = u.length - C, B = r, J = b, ee = [
        [
          S - N,
          I - q
        ],
        [
          S + N,
          I - q
        ],
        [
          S + N,
          I + q
        ],
        [
          S - N,
          I + q
        ]
      ], Z = u.length, oe = [
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
      ], j = (Q, W) => {
        for (let le = 0; le < ($ + 1) * ($ + 1); le++) if (Math.abs(h[le][0] - Q) < T * 0.3 && Math.abs(h[le][1] - W) < F * 0.3 && Math.abs(h[le][2]) < 1e-6) return le;
        return -1;
      };
      for (const [Q, W] of oe) {
        const [le, de] = ee[Q], [K, Se] = ee[W], He = [];
        for (let Ke = 0; Ke <= B; Ke++) {
          const Ye = [], Ht = Ke / B * l;
          for (let Ot = 0; Ot <= J; Ot++) {
            const zt = Ot / J, Yt = le + zt * (K - le), Qt = de + zt * (Se - de);
            if (Ke === 0) {
              const je = j(Yt, Qt);
              if (je >= 0) {
                Ye.push(je);
                continue;
              }
            }
            let ro = -1;
            for (let je = 0; je < h.length; je++) if (Math.abs(h[je][0] - Yt) < 1e-6 && Math.abs(h[je][1] - Qt) < 1e-6 && Math.abs(h[je][2] - Ht) < 1e-6) {
              ro = je;
              break;
            }
            ro >= 0 ? Ye.push(ro) : (Ye.push(h.length), h.push([
              Yt,
              Qt,
              Ht
            ]));
          }
          He.push(Ye);
        }
        for (let Ke = 0; Ke < B; Ke++) for (let Ye = 0; Ye < J; Ye++) u.push([
          He[Ke][Ye],
          He[Ke][Ye + 1],
          He[Ke + 1][Ye + 1],
          He[Ke + 1][Ye]
        ]);
      }
      const he = u.length - Z, ze = /* @__PURE__ */ new Map();
      for (let Q = 0; Q < ($ + 1) * ($ + 1); Q++) {
        const W = h[Q][0], le = h[Q][1];
        for (const [de, K] of E) {
          const Se = Math.sqrt((W - de) * (W - de) + (le - K) * (le - K));
          Se >= k * 0.5 && Se <= k * 2 && ze.set(Q, [
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
      for (let Q = 0; Q < h.length; Q++) Math.abs(h[Q][2] - l) < 1e-6 && R.push(Q);
      const te = g / Math.max(R.length, 1);
      for (const Q of R) fe.set(Q, [
        0,
        0,
        te,
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
      for (let Q = C; Q < C + O; Q++) se.elasticities.set(Q, M), se.poissonsRatios.set(Q, y), se.thicknesses.set(Q, a), se.shearModuli.set(Q, p);
      for (let Q = Z; Q < Z + he; Q++) se.elasticities.set(Q, M), se.poissonsRatios.set(Q, y), se.thicknesses.set(Q, n), se.shearModuli.set(Q, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${O} Q4 placa + ${he} Q4 columna = ${u.length} total`), console.log(`  ${h.length} nodos, P=${g} kN`);
      try {
        const Q = Lt(h, u, {
          supports: ze,
          loads: fe
        }, se), W = Bo(h, u, se, Q);
        e.nodes.val = h, e.elements.val = u, Q && e.deformOutputs && (e.deformOutputs.val = Q), e.nodeInputs && (e.nodeInputs.val = {
          supports: ze,
          loads: fe
        }), e.elementInputs && (e.elementInputs.val = se), W && e.analyzeOutputs && (e.analyzeOutputs.val = W);
        let le = 0;
        (Q == null ? void 0 : Q.deformations) && Q.deformations.forEach((de) => {
          const K = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          le = Math.max(le, K);
        }), console.log(`  max|u| = ${le.toExponential(4)}`);
      } catch (Q) {
        console.warn("Col+Placa failed:", Q.message), e.nodes.val = h, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ze,
          loads: fe
        });
      }
      setTimeout(() => kt(), 50), Xe();
    }
    function ds() {
      const t = X("H") || 6, o = X("angle") || 45, n = X("bTop") || 3, l = X("bBot") || 3, s = X("meshSize") || 2, d = X("E") || 5e4, a = X("nu") || 0.3, i = X("gamma") || 18, f = X("c") || 15, c = X("phi") || 30, r = X("qs") || 0, b = t / Math.tan(o * Math.PI / 180), w = l + b + n, M = t, y = [
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
      ], { nodes: p, elements: g } = po({
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
      }), S = p, I = [], k = /* @__PURE__ */ new Map();
      for (let q = 0; q < S.length; q++) {
        const h = S[q][0], u = S[q][1];
        Math.abs(u + M) < 1e-6 ? (I.push({
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
        ])) : (Math.abs(h) < 1e-6 || Math.abs(h - w) < 1e-6) && (I.push({
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
      const N = t - s * 0.3;
      try {
        const q = S.map((m) => [
          m[0],
          m[1]
        ]), h = g.map((m) => [
          m[0],
          m[1],
          m[2]
        ]), u = Ma({
          nodes: q,
          elements: h,
          E: d,
          nu: a,
          gamma: i,
          c: f,
          phi: c,
          thickness: 1,
          supports: I,
          surcharge: r,
          surfaceYThreshold: N
        }), $ = S.map((m) => [
          m[0],
          0,
          m[1]
        ]);
        e.nodes.val = $, e.elements.val = g;
        const T = /* @__PURE__ */ new Map();
        for (let m = 0; m < u.displacements.length; m++) {
          const [C, O] = u.displacements[m];
          T.set(m, [
            C,
            0,
            O,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: T
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), e.elementInputs && (e.elementInputs.val = {});
        const F = /* @__PURE__ */ new Map();
        for (let m = 0; m < u.plasticStrain.length; m++) {
          const C = u.plasticStrain[m];
          F.set(m, [
            C,
            C,
            C
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: F
        });
        let v = 0;
        for (const [m, C] of u.displacements) {
          const O = Math.sqrt(m * m + C * C);
          v = Math.max(v, O);
        }
        let E = 0;
        for (const m of u.plasticStrain) E = Math.max(E, m);
        console.log(`Talud SRM: ${S.length} nodos, ${g.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${f} kPa, \u03C6=${c}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${v.toExponential(4)}`), console.log(`  max \u03B5_pl = ${E.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (q) {
        console.warn("Talud SRM failed:", q.message);
      }
      setTimeout(() => kt(), 50), Xe();
    }
    let to = null, yt = null, io = null;
    function Gs() {
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
    function $o(t) {
      const o = Wn.find((l) => l.id === U.forceId), n = Do.find((l) => l.id === U.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function vn(t) {
      const o = Wn.find((l) => l.id === U.forceId), n = Do.find((l) => l.id === U.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function yn() {
      return U.label;
    }
    function Ys() {
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
      const t = $o(20594), o = $o(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function ps(t, o, n, l, s) {
      const d = Le.steelVigaType, a = d === 0 ? ln() : rn();
      if (Le.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const f = o[i], c = `b${n}${i}`, r = `h${n}${i}`, b = {};
          b[c] = +mt(f.b).toFixed(2), b[r] = +mt(f.h).toFixed(2), t.addBinding(b, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(b, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const f = (_a2 = i.target) == null ? void 0 : _a2.key, c = f == null ? void 0 : f.match(new RegExp(`^b${n}(\\d+)$`)), r = f == null ? void 0 : f.match(new RegExp(`^h${n}(\\d+)$`));
          c && (o[parseInt(c[1])].b = bt(i.value), Ee()), r && (o[parseInt(r[1])].h = bt(i.value), Ee());
        });
      } else if (d <= 1) {
        for (let i = 0; i < o.length; i++) {
          const f = {};
          f[`p${n}${i}`] = o[i].profileIdx ?? 0, t.addBinding(f, `p${n}${i}`, {
            label: `sv${n}${i + 1}`,
            options: a
          });
        }
        t.on("change", (i) => {
          var _a2, _b;
          const c = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          c && (o[parseInt(c[1])].profileIdx = i.value, Ee());
        });
      } else if (d === 2) {
        for (let i = 0; i < o.length; i++) {
          const f = o[i], c = {}, r = `${n}${i}`;
          c[`bf${r}`] = +mt(f.bf ?? 0.2).toFixed(3), c[`h${r}`] = +mt(f.hf ?? 0.4).toFixed(3), c[`tf${r}`] = +mt(f.tf ?? 0.015).toFixed(3), c[`tw${r}`] = +mt(f.tw ?? 0.01).toFixed(3), t.addBinding(c, `bf${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${i + 1}`
          }), t.addBinding(c, `h${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(c, `tf${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${i + 1}`
          }), t.addBinding(c, `tw${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const f = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const r = `${n}${c}`;
            f === `bf${r}` && (o[c].bf = bt(i.value), Ee()), f === `h${r}` && (o[c].hf = bt(i.value), Ee()), f === `tf${r}` && (o[c].tf = bt(i.value), Ee()), f === `tw${r}` && (o[c].tw = bt(i.value), Ee());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const f = o[i], c = {}, r = `${n}${i}`;
          c[`bc${r}`] = +mt(f.bc ?? 0.2).toFixed(3), c[`hc${r}`] = +mt(f.hc ?? 0.3).toFixed(3), c[`t${r}`] = +mt(f.t ?? 8e-3).toFixed(3), t.addBinding(c, `bc${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(c, `hc${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(c, `t${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const f = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const r = `${n}${c}`;
            f === `bc${r}` && (o[c].bc = bt(i.value), Ee()), f === `hc${r}` && (o[c].hc = bt(i.value), Ee()), f === `t${r}` && (o[c].t = bt(i.value), Ee());
          }
        });
      }
    }
    function Lo() {
      var _a2;
      if (yt) {
        try {
          yt.dispose();
        } catch {
        }
        yt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), A !== "edificio" && A !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Gs();
      if (!o) return;
      o.style.display = "";
      const n = L, l = Math.round(((_a2 = re.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Ys(), d = Js(), a = ce.length || 1, i = pe.length || 1;
      for (; Le.perFloor.length < l; ) {
        const h = Le.perFloor.length > 0 ? JSON.parse(JSON.stringify(Le.perFloor[Le.perFloor.length - 1])) : Ct(a, i);
        Le.perFloor.push(h);
      }
      Le.perFloor.length > l && (Le.perFloor.length = l);
      for (const h of Le.perFloor) {
        for (; h.vigasX.length < a; ) h.vigasX.push(h.vigasX.length > 0 ? {
          ...h.vigasX[h.vigasX.length - 1]
        } : qt());
        for (h.vigasX.length > a && (h.vigasX.length = a); h.vigasY.length < i; ) h.vigasY.push(h.vigasY.length > 0 ? {
          ...h.vigasY[h.vigasY.length - 1]
        } : qt());
        h.vigasY.length > i && (h.vigasY.length = i);
      }
      yt = new Xo({
        title: `Sections (${n.label})`,
        container: o
      });
      const f = {
        colMat: Le.colMat
      };
      if (yt.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (h) => {
        Le.colMat = h.value, Lo(), Ee();
      }), Le.colMat === 0) {
        const h = {
          forma: Le.colShape
        };
        yt.addBinding(h, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", ($) => {
          Le.colShape = $.value, Lo(), Ee();
        });
        const u = {
          fc: +$o(Le.fc).toFixed(1)
        };
        yt.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${yn()})`
        }), yt.on("change", ($) => {
          var _a3;
          ((_a3 = $.target) == null ? void 0 : _a3.key) === "fc" && (Le.fc = vn($.value), Ee());
        });
      } else if (Le.colMat === 1) {
        const h = {
          colType: Le.steelColType
        };
        yt.addBinding(h, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Le.steelColType = u.value, Lo(), Ee();
        });
      }
      yt.addBlade({
        view: "separator"
      });
      const c = {
        vigaMat: Le.vigaMat
      };
      if (yt.addBinding(c, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (h) => {
        Le.vigaMat = h.value, Lo(), Ee();
      }), Le.vigaMat === 1) {
        const h = {
          vigaType: Le.steelVigaType
        };
        yt.addBinding(h, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Le.steelVigaType = u.value, Lo(), Ee();
        });
      }
      const r = Le.steelColType === 0 ? ln() : rn();
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
      for (let h = 0; h < l; h++) {
        const u = Le.perFloor[h], $ = yt.addFolder({
          title: `Piso ${h + 1}`,
          expanded: h < 2
        });
        if (Le.colMat === 0) if (Le.colShape === 1) {
          const T = {
            dCol: +mt(u.dCol).toFixed(2)
          };
          $.addBinding(T, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), $.on("change", (F) => {
            var _a3;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = bt(F.value), Ee());
          });
        } else {
          const T = {
            bCol: +mt(u.bCol).toFixed(2),
            hCol: +mt(u.hCol).toFixed(2)
          };
          $.addBinding(T, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), $.addBinding(T, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), $.on("change", (F) => {
            var _a3, _b;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = bt(F.value), Ee()), ((_b = F.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = bt(F.value), Ee());
          });
        }
        else if (Le.colMat === 1) if (Le.steelColType <= 1) {
          const T = {
            col: u.colProfileIdx
          };
          $.addBinding(T, "col", {
            label: "Columna",
            options: r
          }).on("change", (F) => {
            u.colProfileIdx = F.value, Ee();
          });
        } else if (Le.steelColType === 2) {
          const T = {
            bf: +mt(u.colBf ?? 0.3).toFixed(3),
            h: +mt(u.colHf ?? 0.3).toFixed(3),
            tf: +mt(u.colTf ?? 0.02).toFixed(3),
            tw: +mt(u.colTw ?? 0.012).toFixed(3)
          };
          $.addBinding(T, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), $.addBinding(T, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), $.addBinding(T, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), $.addBinding(T, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), $.on("change", (F) => {
            var _a3, _b, _c, _d;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = bt(F.value), Ee()), ((_b = F.target) == null ? void 0 : _b.key) === "h" && (u.colHf = bt(F.value), Ee()), ((_c = F.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = bt(F.value), Ee()), ((_d = F.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = bt(F.value), Ee());
          });
        } else {
          const T = {
            bc: +mt(u.colBc ?? 0.3).toFixed(3),
            hc: +mt(u.colHc ?? 0.3).toFixed(3),
            t: +mt(u.colT ?? 0.01).toFixed(3)
          };
          $.addBinding(T, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), $.addBinding(T, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), $.addBinding(T, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), $.on("change", (F) => {
            var _a3, _b, _c;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = bt(F.value), Ee()), ((_b = F.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = bt(F.value), Ee()), ((_c = F.target) == null ? void 0 : _c.key) === "t" && (u.colT = bt(F.value), Ee());
          });
        }
        else {
          const T = {
            bc: +mt(u.colBc ?? 0.3).toFixed(3),
            hc: +mt(u.colHc ?? 0.3).toFixed(3),
            t: +mt(u.colT ?? 0.01).toFixed(3),
            Es: +$o(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +$o(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          $.addBinding(T, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), $.addBinding(T, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), $.addBinding(T, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), $.addBlade({
            view: "separator"
          });
          const F = +$o(1e8).toFixed(0), v = +$o(3e8).toFixed(0), E = Math.max(1, Math.round((v - F) / 200));
          $.addBinding(T, "Es", {
            min: F,
            max: v,
            step: E,
            label: `Es (${yn()})`
          }), $.addBinding(T, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), $.addBinding(T, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${yn()})`
          }), $.addBinding(T, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), $.on("change", (m) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = m.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = bt(m.value), Ee()), ((_b = m.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = bt(m.value), Ee()), ((_c = m.target) == null ? void 0 : _c.key) === "t" && (u.colT = bt(m.value), Ee()), ((_d = m.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = vn(m.value), Ee()), ((_e2 = m.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = m.value, Ee()), ((_f = m.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = vn(m.value), Ee()), ((_g = m.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = m.value, Ee());
          });
        }
        if (u.vigasX.length > 0) {
          const T = $.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          ps(T, u.vigasX, "x", s, b);
        }
        if (u.vigasY.length > 0) {
          const T = $.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          ps(T, u.vigasY, "y", s, b);
        }
      }
      yt.addBlade({
        view: "separator"
      });
      const w = yt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), M = {
        activar: me,
        direccion: Be === "x" ? 0 : 1,
        cantidad: Ne
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
      }), w.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (me = h.value, Ee()), ((_b = h.target) == null ? void 0 : _b.key) === "direccion" && (Be = h.value === 0 ? "x" : "y", Ee()), ((_c = h.target) == null ? void 0 : _c.key) === "cantidad" && (Ne = Math.round(h.value), Ee());
      }), yt.addBlade({
        view: "separator"
      });
      const y = yt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: tt,
        espesor: +mt(We).toFixed(3),
        subdivX: pt,
        subdivY: rt
      };
      y.addBinding(p, "activar", {
        label: "Activar losas"
      }), y.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
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
      }), y.on("change", (h) => {
        var _a3, _b, _c, _d;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (tt = h.value, Ee()), ((_b = h.target) == null ? void 0 : _b.key) === "espesor" && (We = bt(h.value), Ee()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivX" && (pt = Math.round(h.value), Ee()), ((_d = h.target) == null ? void 0 : _d.key) === "subdivY" && (rt = Math.round(h.value), Ee());
      }), yt.addBlade({
        view: "separator"
      });
      const g = yt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +mt(et).toFixed(3),
        subdivH: xt,
        subdivW: Mt
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
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "espesor" && (et = bt(h.value), Ee()), ((_b = h.target) == null ? void 0 : _b.key) === "subdivH" && (xt = Math.round(h.value), Ee()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivW" && (Mt = Math.round(h.value), Ee());
      });
      const I = ce.length || 1, k = pe.length || 1, N = I + 1, q = k + 1;
      if (I > 0) {
        const h = g.addFolder({
          title: `Muros dir X (${I} vanos)`,
          expanded: false
        });
        for (let u = 0; u < I; u++) for (let $ = 0; $ < q; $++) {
          const T = `wx_${u}_${$}`, F = Je.some((m) => m.dir === "x" && m.bay === u && m.axisIdx === $), v = {};
          v[T] = F;
          const E = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + $)}`;
          h.addBinding(v, T, {
            label: E
          }).on("change", (m) => {
            m.value ? Je.push({
              dir: "x",
              bay: u,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : Je = Je.filter((C) => !(C.dir === "x" && C.bay === u && C.axisIdx === $)), Ee();
          });
        }
      }
      if (k > 0) {
        const h = g.addFolder({
          title: `Muros dir Y (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let $ = 0; $ < N; $++) {
          const T = `wy_${u}_${$}`, F = Je.some((m) => m.dir === "y" && m.bay === u && m.axisIdx === $), v = {};
          v[T] = F;
          const E = `Vano Y${u + 1} / Eje X${$ + 1}`;
          h.addBinding(v, T, {
            label: E
          }).on("change", (m) => {
            m.value ? Je.push({
              dir: "y",
              bay: u,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : Je = Je.filter((C) => !(C.dir === "y" && C.bay === u && C.axisIdx === $)), Ee();
          });
        }
      }
      if (Je.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const h = {
          muros: `${Je.length} ubicaciones`
        };
        g.addBinding(h, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function oo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ge || (ge = t.innerHTML), Ie) {
        try {
          Ie.dispose();
        } catch {
        }
        Ie = null;
      }
      if (to) {
        try {
          to.dispose();
        } catch {
        }
        to = null;
      }
      t.innerHTML = "";
      const o = A.charAt(0).toUpperCase() + A.slice(1);
      Ie = new Xo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Kn()[A];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = re[a.key].val;
        for (const a of n) Ie.addBinding(s, a.key, {
          min: re[a.key].min,
          max: re[a.key].max,
          step: re[a.key].step,
          label: re[a.key].label
        });
        const d = Ie.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const i = {
            min: re[a.key].min,
            max: re[a.key].max
          };
          d.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            re[a.key] && (re[a.key].min = i.min, re[a.key].max = i.max, re[a.key].val < i.min && (re[a.key].val = i.min), re[a.key].val > i.max && (re[a.key].val = i.max)), oo(), Ee();
          });
        }
        Ie.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && re[i]) {
            if (re[i].val = a.value, A === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const f = Math.round(re.nVanosX.val), c = Math.round(re.nVanosY.val);
                for (; ce.length < f; ) ce.push(ce[ce.length - 1] ?? L.defaultSpan);
                for (ce.length > f && (ce.length = f); pe.length < c; ) pe.push(pe[pe.length - 1] ?? L.defaultSpan * 0.8);
                pe.length > c && (pe.length = c);
              }
              oo();
            }
            Ee();
          }
        });
      }
      if (A === "edificio") {
        if (io) {
          try {
            io.dispose();
          } catch {
          }
          io = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const d = L;
          io = new Xo({
            title: `Luces (${d.length})`,
            container: s
          });
          const a = io.addFolder({
            title: "Luces X",
            expanded: true
          }), i = {};
          for (let r = 0; r < ce.length; r++) i[`svx_${r + 1}`] = ce[r];
          for (let r = 0; r < ce.length; r++) a.addBinding(i, `svx_${r + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svx${r + 1}`
          });
          a.on("change", (r) => {
            var _a2, _b;
            const w = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            w && (ce[parseInt(w[1]) - 1] = r.value, Ee());
          });
          const f = io.addFolder({
            title: "Luces Y",
            expanded: true
          }), c = {};
          for (let r = 0; r < pe.length; r++) c[`svy_${r + 1}`] = pe[r];
          for (let r = 0; r < pe.length; r++) f.addBinding(c, `svy_${r + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svy${r + 1}`
          });
          f.on("change", (r) => {
            var _a2, _b;
            const w = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            w && (pe[parseInt(w[1]) - 1] = r.value, Ee());
          });
        }
      }
      if (Lo(), Ie) {
        Ie.addBlade({
          view: "separator"
        });
        const s = an()[A];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((i, f) => {
            d[i.label] = f;
          });
          const a = {
            apoyo: Et
          };
          Ie.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (i) => {
            Et = i.value, Ee();
          });
        }
        if (A === "placa-3q" || A === "placa-q4") {
          const d = {
            teoria: vt
          };
          Ie.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            vt = a.value, Ee();
          });
        }
      }
      const l = Un()[A];
      if (l && l.length > 0) {
        to = new Xo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = lt[a.key].val;
        for (const a of l) to.addBinding(s, a.key, {
          min: lt[a.key].min,
          max: lt[a.key].max,
          step: lt[a.key].step,
          label: lt[a.key].label
        });
        const d = to.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: lt[a.key].min,
            max: lt[a.key].max
          };
          d.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            lt[a.key] && (lt[a.key].min = i.min, lt[a.key].max = i.max, lt[a.key].val < i.min && (lt[a.key].val = i.min), lt[a.key].val > i.max && (lt[a.key].val = i.max)), oo(), Ee();
          });
        }
        to.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && lt[i]) {
            if (lt[i].val = a.value, e.nodeInputs) {
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
          if (re[s]) re[s].val = d, Ee(), oo();
          else if (lt[s]) {
            if (lt[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Sn(), oo();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in re) s[d] = re[d].val;
          for (const d in lt) s[d] = lt[d].val;
          return s;
        },
        setGenerator: Ze,
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
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const d = new Xo({
        title: t,
        container: s
      }), a = {};
      for (const [i, f] of Object.entries(o)) {
        const c = f.label || i;
        if (Array.isArray(f.value)) {
          a[i] = f.value;
          const r = {
            [i]: f.value.join(", ")
          };
          d.addBinding(r, i, {
            label: c
          }).on("change", (b) => {
            a[i] = b.value.split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w)), n && n({
              ...a
            });
          });
        } else if (f.options) {
          a[i] = f.value;
          const r = {
            [i]: f.value
          }, b = {};
          for (const w of f.options) b[w] = w;
          d.addBinding(r, i, {
            label: c,
            options: b
          }).on("change", (w) => {
            a[i] = w.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[i] = f.value;
          const r = {
            [i]: f.value
          };
          d.addBinding(r, i, {
            label: c
          }).on("change", (b) => {
            a[i] = b.value, n && n({
              ...a
            });
          });
        } else if (typeof f.value == "string") {
          a[i] = f.value;
          const r = {
            [i]: f.value
          };
          d.addBinding(r, i, {
            label: c
          }).on("change", (b) => {
            a[i] = b.value, n && n({
              ...a
            });
          });
        } else {
          a[i] = f.value;
          const r = {
            [i]: f.value
          }, b = {
            label: c
          };
          f.min !== void 0 && (b.min = f.min), f.max !== void 0 && (b.max = f.max), f.step !== void 0 && (b.step = f.step), d.addBinding(r, i, b).on("change", (w) => {
            a[i] = w.value, n && n({
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
      if (to) {
        try {
          to.dispose();
        } catch {
        }
        to = null;
      }
      if (yt) {
        try {
          yt.dispose();
        } catch {
        }
        yt = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
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
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), A && kt(true);
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
    let $t = null;
    function Ks() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = _, d = x, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${A || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((c, r) => {
        a.push(`  ${String(r).padStart(4)}  ${c[0].toFixed(4).padStart(10)}  ${c[1].toFixed(4).padStart(10)}  ${c[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((c, r) => {
        const b = c.map((w) => String(w).padStart(6)).join("");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((c, r) => {
        const b = c.map((w) => w ? "  1" : "  0").join("");
        a.push(`  ${String(r).padStart(4)} ${b}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((c, r) => {
        const b = c.map((w) => w.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
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
        ], r = "# elem  " + c.map((b) => b.name.padStart(12)).join(" ");
        a.push(r);
        for (let b = 0; b < o.length; b++) {
          const w = c.map((M) => {
            var _a3;
            const y = (_a3 = M.map) == null ? void 0 : _a3.get(b);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${w}`);
        }
        a.push("");
      }
      const i = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      i && i.size > 0 && (a.push(`## DISPLACEMENTS (${i.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), i.forEach((c, r) => {
        const b = c.map((w) => w.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((c, r) => {
        const b = c.map((w) => w.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
      }), a.push("")), A) {
        a.push("## CLI COMMAND");
        const c = Object.entries(re).map(([r, b]) => `${r}=${b.val}`).join(" ");
        a.push(`cad.${A === "edificio" ? "building" : A}(${c})`);
      }
      return a.join(`
`);
    }
    let Yo = false;
    function Us() {
      var _a2, _b, _c, _d;
      if ($t) {
        $t.remove(), $t = null, Yo = false;
        return;
      }
      const t = Ks();
      $t = document.createElement("div"), $t.id = "export-overlay", $t.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, $t.innerHTML = `
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
    `, document.body.appendChild($t), (_a2 = $t.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        $t == null ? void 0 : $t.remove(), $t = null, Yo = false;
      }), (_b = $t.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = $t.querySelector("#export-body"), n = $t.querySelector("#export-minimize");
        Yo = !Yo, Yo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", $t.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", $t.style.width = "720px");
      }), (_c = $t.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = $t.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = $t.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = $t.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: A || "custom",
          units: {
            force: x,
            length: _
          },
          nodes: o.map((r, b) => ({
            id: b,
            x: r[0],
            y: r[1],
            z: r[2]
          })),
          elements: n.map((r, b) => ({
            id: b,
            nodes: r
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((r, b) => d.supports.push({
          node: b,
          dofs: r
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((r, b) => d.loads.push({
          node: b,
          forces: r
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((r, b) => d.displacements[b] = r));
        const i = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        i && i.size > 0 && (d.reactions = {}, i.forEach((r, b) => d.reactions[b] = r));
        const f = $t.querySelector("#export-text");
        f.value = JSON.stringify(d, null, 2);
        const c = $t.querySelector("#export-status");
        c.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Xe() {
      var _a2, _b, _c;
      const t = we.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, i = 0;
        for (const c of n) c.length === 2 ? d++ : c.length === 3 ? a++ : c.length === 4 && i++;
        let f = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (f += ` | ${d}fr`, i > 0 && (f += ` ${i}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
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
          ae = d, ie = t.map((c) => [
            ...c
          ]), Me = 0;
          const { extent: a } = mo(), i = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let c = 0;
            for (let r = 0; r < t.length; r++) {
              const b = i[r * 6] || 0, w = i[r * 6 + 1] || 0, M = i[r * 6 + 2] || 0;
              c = Math.max(c, Math.sqrt(b * b + w * w + M * M));
            }
            ve = c > 1e-12 ? a * 0.05 / c : 1;
          }
          const f = `${A} \u2014 ${t.length}n ${o.length}e`;
          Te.render(d, {
            title: f
          }), Te.div.style.display = "", Jo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ae = null;
      }
    }
    function wn() {
      Ce && (cancelAnimationFrame(Ce), Ce = 0), ie.length > 0 && (e.nodes.val = ie.map((t) => [
        ...t
      ])), Te.div.style.display = "none", ae = null;
    }
    function Jo() {
      var _a2;
      if (Ce && cancelAnimationFrame(Ce), !(ae == null ? void 0 : ae.modeShapes) || !ie.length) return;
      const t = ae.modeShapes[Me];
      if (!t) return;
      const o = ((_a2 = ae.frequencies) == null ? void 0 : _a2[Me]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ie.length, d = e.elements.rawVal, { extent: a } = mo(), i = we.querySelector("#cad3d-modal-scale"), f = i && parseFloat(i.value) || 5;
      let c = 0;
      for (let k = 0; k < s; k++) {
        const N = t[k * 6] || 0, q = t[k * 6 + 1] || 0, h = t[k * 6 + 2] || 0;
        c = Math.max(c, Math.sqrt(N * N + q * q + h * h));
      }
      const r = c > 1e-12 ? a * f / 100 / c : 1, b = st();
      if (!b) return;
      let w = null, M = null, y = null;
      b.scene.traverse((k) => {
        var _a3, _b;
        !w && k.isPoints && k.geometry && (w = k), !M && k.isLineSegments && k.geometry && !k.name && (M = k), !y && k.isMesh && ((_a3 = k.material) == null ? void 0 : _a3.transparent) && ((_b = k.material) == null ? void 0 : _b.opacity) < 0.5 && k.geometry && (y = k);
      });
      const p = new Float32Array(s * 3), g = [];
      for (const k of d) if (k.length === 2) g.push([
        k[0],
        k[1]
      ]);
      else for (let N = 0; N < k.length; N++) g.push([
        k[N],
        k[(N + 1) % k.length]
      ]);
      const S = new Float32Array(g.length * 6);
      function I() {
        const k = (performance.now() - l) / 1e3, N = Math.sin(2 * Math.PI * n * k) * r;
        for (let q = 0; q < s; q++) {
          const h = ie[q];
          p[q * 3] = h[0] + (t[q * 6] || 0) * N, p[q * 3 + 1] = h[1] + (t[q * 6 + 1] || 0) * N, p[q * 3 + 2] = h[2] + (t[q * 6 + 2] || 0) * N;
        }
        if (w) {
          const q = w.geometry, h = q.getAttribute("position");
          h && h.array.length === p.length ? (h.array.set(p), h.needsUpdate = true) : q.setAttribute("position", new So(p.slice(), 3));
        }
        if (M) {
          for (let u = 0; u < g.length; u++) {
            const [$, T] = g[u];
            S[u * 6] = p[$ * 3], S[u * 6 + 1] = p[$ * 3 + 1], S[u * 6 + 2] = p[$ * 3 + 2], S[u * 6 + 3] = p[T * 3], S[u * 6 + 4] = p[T * 3 + 1], S[u * 6 + 5] = p[T * 3 + 2];
          }
          const q = M.geometry, h = q.getAttribute("position");
          h && h.array.length === S.length ? (h.array.set(S), h.needsUpdate = true) : q.setAttribute("position", new So(S.slice(), 3));
        }
        if (y) {
          const q = [];
          for (const h of d) if (h.length === 3) {
            const [u, $, T] = h;
            q.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), q.push(p[$ * 3], p[$ * 3 + 1], p[$ * 3 + 2]), q.push(p[T * 3], p[T * 3 + 1], p[T * 3 + 2]);
          } else if (h.length === 4) {
            const [u, $, T, F] = h;
            q.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), q.push(p[$ * 3], p[$ * 3 + 1], p[$ * 3 + 2]), q.push(p[T * 3], p[T * 3 + 1], p[T * 3 + 2]), q.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), q.push(p[T * 3], p[T * 3 + 1], p[T * 3 + 2]), q.push(p[F * 3], p[F * 3 + 1], p[F * 3 + 2]);
          }
          if (q.length > 0) {
            const h = y.geometry, u = new Float32Array(q), $ = h.getAttribute("position");
            $ && $.array.length === u.length ? ($.array.set(u), $.needsUpdate = true) : h.setAttribute("position", new So(u, 3));
          }
        }
        b.render(), Ce = requestAnimationFrame(I);
      }
      Ce = requestAnimationFrame(I);
    }
    function Sn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = X("CM") ?? 0, p = X("CV") ?? 0, g = y + p, S = X("Ex") ?? 0, I = X("Ey") ?? 0;
        if (g === 0 && S === 0 && I === 0) return;
        const k = /* @__PURE__ */ new Map(), N = [];
        for (let m = 0; m < t.length; m++) n.supports.has(m) || N.push(m);
        const q = (m) => Math.round(m * 1e3) / 1e3, h = /* @__PURE__ */ new Set();
        n.supports.forEach((m, C) => {
          h.add(`${q(t[C][0])},${q(t[C][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const m of N) h.has(`${q(t[m][0])},${q(t[m][1])}`) && u.add(m);
        const $ = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
        if (S !== 0 || I !== 0) {
          let m = -1 / 0, C = -1 / 0;
          for (const B of u) m = Math.max(m, q(t[B][0])), C = Math.max(C, q(t[B][1]));
          const O = /* @__PURE__ */ new Map();
          for (const B of u) {
            const J = q(t[B][2]);
            O.has(J) || O.set(J, []), O.get(J).push(B);
          }
          O.forEach((B) => {
            if (S !== 0) {
              const J = /* @__PURE__ */ new Set();
              for (const ee of B) if (q(t[ee][0]) === m) {
                const Z = q(t[ee][1]);
                J.has(Z) || (J.add(Z), $.add(ee));
              }
            }
            if (I !== 0) {
              const J = /* @__PURE__ */ new Set();
              for (const ee of B) if (q(t[ee][1]) === C) {
                const Z = q(t[ee][0]);
                J.has(Z) || (J.add(Z), T.add(ee));
              }
            }
          });
        }
        const F = 9.81, v = /* @__PURE__ */ new Map();
        for (let m = 0; m < o.length; m++) {
          const C = o[m], O = ((_a2 = l.densities) == null ? void 0 : _a2.get(m)) ?? 0;
          if (!(Math.abs(O) < 1e-15)) {
            if (C.length === 2) {
              const B = ((_b = l.areas) == null ? void 0 : _b.get(m)) ?? 0, J = t[C[0]], ee = t[C[1]], Z = Math.sqrt((ee[0] - J[0]) ** 2 + (ee[1] - J[1]) ** 2 + (ee[2] - J[2]) ** 2), j = -(O * B * Z * F) / 2;
              v.set(C[0], (v.get(C[0]) ?? 0) + j), v.set(C[1], (v.get(C[1]) ?? 0) + j);
            } else if (C.length >= 3) {
              const B = ((_c = l.thicknesses) == null ? void 0 : _c.get(m)) ?? 0;
              let J = 0;
              if (C.length === 3) {
                const [oe, j, he] = C.map((ze) => t[ze]);
                J = 0.5 * Math.abs((j[0] - oe[0]) * (he[1] - oe[1]) - (he[0] - oe[0]) * (j[1] - oe[1]));
              } else if (C.length === 4) {
                const [oe, j, he, ze] = C.map((fe) => t[fe]);
                if (J = 0.5 * Math.abs((j[0] - oe[0]) * (he[1] - oe[1]) - (he[0] - oe[0]) * (j[1] - oe[1])) + 0.5 * Math.abs((he[0] - oe[0]) * (ze[1] - oe[1]) - (ze[0] - oe[0]) * (he[1] - oe[1])), J < 1e-10) {
                  const fe = [
                    j[0] - oe[0],
                    j[1] - oe[1],
                    j[2] - oe[2]
                  ], R = [
                    ze[0] - oe[0],
                    ze[1] - oe[1],
                    ze[2] - oe[2]
                  ], te = [
                    fe[1] * R[2] - fe[2] * R[1],
                    fe[2] * R[0] - fe[0] * R[2],
                    fe[0] * R[1] - fe[1] * R[0]
                  ];
                  J = Math.sqrt(te[0] ** 2 + te[1] ** 2 + te[2] ** 2);
                }
              }
              const Z = -(O * B * J * F) / C.length;
              for (const oe of C) v.set(oe, (v.get(oe) ?? 0) + Z);
            }
          }
        }
        const E = /* @__PURE__ */ new Set();
        for (const m of o) m.length === 2 && (E.add(m[0]), E.add(m[1]));
        for (const m of N) {
          const C = $.has(m) ? S : 0, O = T.has(m) ? I : 0, B = v.get(m) ?? 0, J = E.has(m) ? g : 0, ee = B + J;
          (C !== 0 || O !== 0 || Math.abs(ee) > 1e-10) && k.set(m, [
            C,
            O,
            ee,
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
      let d = 0, a = 0, i = 0;
      for (const y of o) y.length === 2 ? d++ : y.length === 3 ? i++ : y.length === 4 && a++;
      const f = ((_d = n.supports) == null ? void 0 : _d.size) || 0, c = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, r = t.length * 6, b = r - f * 6, w = [], M = (y) => w.push(y);
      M('<b style="color:var(--cad-heading)">FEM Solver</b>'), M(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && M(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && M(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), i && M(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), M(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${c}`), M(`<span style="color:var(--cad-info)">DOFs:</span> ${r} total, ~${b} libres`), M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${r}&times;${r})`), M("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Lt(t, o, n, l), p = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, M(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let g = 0, S = -1, I = 0, k = 0;
          y.deformations && y.deformations.forEach(($, T) => {
            const F = Math.sqrt($[0] * $[0] + $[1] * $[1] + $[2] * $[2]);
            F > g && (g = F, S = T, I = $[0], k = $[2]);
          }), M('<span style="color:#888">3.</span> Desplazamientos:'), M(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), M(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(I * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(k * 1e3).toFixed(4)} mm`);
          const N = performance.now(), q = Bo(t, o, l, y), h = performance.now() - N;
          q && (e.analyzeOutputs.val = q, M(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${h.toFixed(0)} ms</span>`), M("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const p = performance.now() - s;
        M(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = w, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ye && setTimeout(() => Mn(), 50);
    }
    function En(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), i = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: i
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
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, i = (2 * n * t * t * t + s * l * l * l) / 12, f = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: i,
        J: f
      };
    }
    function kn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, i = (o * t * t * t - s * l * l * l) / 12, f = (t - n) * (o - n), c = 2 * ((t - n) / n + (o - n) / n), r = 4 * f * f / (c > 0 ? c : 1);
      return {
        A: d,
        Iz: a,
        Iy: i,
        J: r
      };
    }
    function Zs(t, o, n, l, s, d, a) {
      const f = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, c = t - 2 * n, r = o - 2 * n, b = t * o - c * r, w = (t * o * o * o - c * r * r * r) / 12, M = (o * t * t * t - r * c * c * c) / 12, y = c * r, p = c * r * r * r / 12, g = r * c * c * c / 12, S = b + f * y, I = w + f * p, k = M + f * g, N = l / (2 * (1 + s)), q = (t - n) * (o - n), h = 2 * ((t - n) / n + (o - n) / n), u = 4 * q * q / (h > 0 ? h : 1);
      return {
        A: S,
        Iz: I,
        Iy: k,
        J: u,
        Es: l,
        Gs: N,
        A_steel: b,
        A_conc: y
      };
    }
    function uo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = L, n = {
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
      if ((A === "edificio" || A === "frame") && be.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: i, perFloor: f } = Le, c = 4700 * Math.sqrt(i / 1e3) * 1e3, r = c / (2 * 1.2), b = 24 / 9.80665, w = o.E, M = o.G, y = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (De.has(p)) {
            const $ = 4700 * Math.sqrt(i / 1e3) * 1e3, T = 0.2;
            n.elasticities.set(p, $), n.poissonsRatios.set(p, T), n.thicknesses.set(p, et), n.shearModuli.set(p, $ / (2 * (1 + T))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (wt.has(p)) {
            const $ = 4700 * Math.sqrt(i / 1e3) * 1e3, T = 0.2;
            n.elasticities.set(p, $), n.poissonsRatios.set(p, T), n.thicknesses.set(p, We), n.shearModuli.set(p, $ / (2 * (1 + T))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const g = be.has(p), S = Oe.get(p) ?? 0, I = f[S] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let k, N, q, h;
          if (g) if (s === 0) N = c, q = r, h = b, k = a === 1 ? ms(I.dCol) : En(I.bCol, I.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: I.dCol
          } : {
            type: "rect",
            b: I.bCol,
            h: I.hCol
          });
          else if (s === 1) {
            N = w, q = M, h = y;
            const $ = Le.steelColType;
            if ($ <= 1) {
              const T = yo[I.colProfileIdx] ?? yo[0];
              k = {
                A: T.A,
                Iz: T.Iz,
                Iy: T.Iy,
                J: T.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: T.bf,
                h: T.d,
                name: T.name
              });
            } else if ($ === 2) {
              const T = I.colBf ?? 0.3, F = I.colHf ?? 0.3, v = I.colTf ?? 0.02, E = I.colTw ?? 0.012;
              k = In(T, F, v, E);
              const m = `I${(F * 100).toFixed(0)}x${(T * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: T,
                h: F,
                tf: v,
                tw: E,
                name: m
              });
            } else {
              const T = I.colBc ?? 0.3, F = I.colHc ?? 0.3, v = I.colT ?? 0.01;
              k = kn(T, F, v);
              const E = `\u25A1${(F * 100).toFixed(0)}x${(T * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: T,
                h: F,
                tw: v,
                name: E
              });
            }
          } else {
            const $ = I.colBc ?? 0.3, T = I.colHc ?? 0.3, F = I.colT ?? 0.01, v = I.colFc ?? 28e3, E = I.colEs ?? 2e8, m = I.colNuS ?? 0.3;
            I.colNuC;
            const C = Zs($, T, F, E, m, v);
            k = {
              A: C.A,
              Iz: C.Iz,
              Iy: C.Iy,
              J: C.J
            }, N = C.Es, q = C.Gs;
            const O = 7.85, B = 24 / 9.80665;
            h = (O * C.A_steel + B * C.A_conc) / (C.A_steel + C.A_conc);
            const J = `CFT ${(T * 1e3).toFixed(0)}X${($ * 1e3).toFixed(0)}X${(F * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: $,
              h: T,
              tw: F,
              name: J
            });
          }
          else {
            const $ = Ue.get(p), T = $ ? $.dir === "x" ? I.vigasX : I.vigasY : [], F = $ ? T[$.bay] ?? T[0] ?? qt() : qt();
            if (d === 0) N = c, q = r, h = b, k = En(F.b, F.h), n.sectionShapes.set(p, {
              type: "rect",
              b: F.b,
              h: F.h
            });
            else {
              N = w, q = M, h = y;
              const v = Le.steelVigaType;
              if (v <= 1) {
                const E = yo[F.profileIdx ?? 0] ?? yo[0];
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
              } else if (v === 2) {
                const E = F.bf ?? 0.2, m = F.hf ?? 0.4, C = F.tf ?? 0.015, O = F.tw ?? 0.01;
                k = In(E, m, C, O);
                const B = `I${(m * 100).toFixed(0)}x${(E * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: E,
                  h: m,
                  tf: C,
                  tw: O,
                  name: B
                });
              } else {
                const E = F.bc ?? 0.2, m = F.hc ?? 0.3, C = F.t ?? 8e-3;
                k = kn(E, m, C);
                const O = `\u25A1${(m * 100).toFixed(0)}x${(E * 100).toFixed(0)}x${(C * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: E,
                  h: m,
                  tw: C,
                  name: O
                });
              }
            }
          }
          const u = xe.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (N = c, q = r, h = b) : (N = w, q = M, h = y), u.secType === "rect" && u.b && u.h) k = En(u.b, u.h), n.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) k = ms(u.b), n.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const T = yo[u.profileIdx] ?? yo[0];
              k = {
                A: T.A,
                Iz: T.Iz,
                Iy: T.Iy,
                J: T.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: T.bf,
                h: T.d,
                name: T.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              k = In(u.bf, u.hf, u.tf, u.tw);
              const T = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: T
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              k = kn(u.bc, u.hc, u.t);
              const T = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: T
              });
            }
          }
          n.elasticities.set(p, N), n.shearModuli.set(p, q), n.areas.set(p, k.A), n.momentsOfInertiaZ.set(p, k.Iy), n.momentsOfInertiaY.set(p, k.Iz), n.torsionalConstants.set(p, k.J), n.densities.set(p, h);
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
      (_a2 = we.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (v) => {
        v.stopPropagation(), we.classList.add("collapsed");
      }), (_b = we.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (v) => {
        v.stopPropagation(), we.classList.remove("collapsed");
      }), we.querySelectorAll("[data-ex]").forEach((v) => {
        v.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = v.dataset.ex;
          bs(m), Ge.example(m);
        });
      }), we.querySelectorAll("[data-view]").forEach((v) => {
        v.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = v.dataset.view;
          bo(m), we.querySelectorAll("[data-view]").forEach((C) => C.classList.remove("view-active")), v.classList.add("view-active");
        });
      }), (_c = we.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (v) => {
        v.stopPropagation(), A = "", js.val = false, Xs(), Ge.clear();
      }), (_d = we.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (v) => {
        var _a3;
        v.stopPropagation(), Kt && (Kt = false, wo()), no && en(), jt = !jt, (_a3 = we.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", jt);
        const m = st();
        m && (m.controls.enabled = !jt), jt || Qo();
      }), (_e2 = we.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (v) => {
        var _a3;
        v.stopPropagation(), Kt && (Kt = false, wo()), jt && Qo(), no = !no, (_a3 = we.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", no), no ? na() : en();
      }), (_f = we.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (v) => {
        var _a3;
        v.stopPropagation(), jt && Qo(), no && en(), Kt = !Kt, (_a3 = we.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Kt), Kt || wo();
      }), (_g = we.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (v) => {
        v.stopPropagation(), Ge.clear(), it = null;
      });
      const t = we.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const v = t.value;
        t.value = "", v && o(v);
      });
      function o(v) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const C = 15e3 * Math.sqrt(210) * 10, O = 0.2, B = C / (2 * (1 + O)), J = 0.09, ee = 0.3 ** 4 / 12, Z = 0.141 * 0.3 ** 4, oe = 0.25 * 0.4, j = 0.25 * 0.4 ** 3 / 12, he = 0.4 * 0.25 ** 3 / 12, ze = 1e-3, fe = 5 / 6 * J, R = 5 / 6 * oe, te = [];
        function se(Q, W, le) {
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
          for (const K of W) de.elasticities.set(K, C), de.shearModuli.set(K, B), de.areas.set(K, J), de.momentsOfInertiaZ.set(K, ee), de.momentsOfInertiaY.set(K, ee), de.torsionalConstants.set(K, Z), de.shearAreasY.set(K, fe), de.shearAreasZ.set(K, fe);
          for (const K of le) de.elasticities.set(K, C), de.shearModuli.set(K, B), de.areas.set(K, oe), de.momentsOfInertiaZ.set(K, he), de.momentsOfInertiaY.set(K, j), de.torsionalConstants.set(K, ze), de.shearAreasY.set(K, R), de.shearAreasZ.set(K, R);
          return de;
        }
        if (v === "test-cantilever" || v === "test-all") {
          const le = 270 / (3 * C * ee), de = [
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
          ], K = [
            [
              0,
              1
            ]
          ], Se = se(1, [], []);
          Se.elasticities.set(0, C), Se.shearModuli.set(0, B), Se.areas.set(0, J), Se.momentsOfInertiaZ.set(0, ee), Se.momentsOfInertiaY.set(0, ee), Se.torsionalConstants.set(0, Z);
          const He = Lt(de, K, {
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
          }, Se);
          te.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: de,
            elements: K,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: He.deformations.get(1)[2] * 100,
                reference: le * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (v === "test-portal-1p" || v === "test-all") {
          const Q = [
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
          ], le = se(3, [
            0,
            1
          ], [
            2
          ]), de = Lt(Q, W, {
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
          }, le);
          te.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: Q,
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
        if (v === "test-portal-2p" || v === "test-all") {
          const Q = [
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
          ], le = se(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), de = Lt(Q, W, {
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
          }, le);
          te.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: Q,
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
        if (v === "test-wall-only" || v === "test-all") {
          const Q = [
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
          ], de = Lt(Q, W, {
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
                B
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
                O
              ]
            ])
          });
          te.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: Q,
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
        if (v === "test-portal-wall" || v === "test-all") {
          const Q = [
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
          ], le = se(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          le.elasticities.set(6, C), le.shearModuli.set(6, B), le.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), le.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              O
            ]
          ]);
          const de = Lt(Q, W, {
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
          }, le);
          te.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: Q,
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
        if (v === "test-wilson-beam" || v === "test-all") {
          const He = 0.6666666666666666, Ke = [
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
          ], Ye = [
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
          ], Ht = {
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
          }, Ot = /* @__PURE__ */ new Map();
          Ot.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Ot.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const zt = /* @__PURE__ */ new Map();
          zt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), zt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const Yt = 5 ** 3 / (3 * 1500 * He);
          try {
            const Qt = Lt(Ke, Ye, {
              supports: Ot,
              loads: zt
            }, Ht), ro = Math.abs(((_b2 = (_a3 = Qt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), je = Math.abs(((_d2 = (_c2 = Qt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), gt = (ro + je) / 2, Xt = gt / Yt;
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: Ke,
              elements: Ye,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Xt,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: gt,
                  reference: Yt * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (Qt) {
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + Qt.message,
              nodes: Ke,
              elements: Ye,
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
        if (v === "test-scordelis" || v === "test-all") {
          const He = 40 * Math.PI / 180, Ke = 8, Ye = 8, Ht = [];
          for (let je = 0; je <= Ke; je++) for (let gt = 0; gt <= Ye; gt++) {
            const Xt = 25 * je / Ke, Tt = He * gt / Ye, co = 25 * Math.sin(Tt), lo = 25 * Math.cos(Tt) - 25 * Math.cos(He);
            Ht.push([
              Xt,
              co,
              lo
            ]);
          }
          const Ot = [];
          for (let je = 0; je < Ke; je++) for (let gt = 0; gt < Ye; gt++) {
            const Xt = je * (Ye + 1) + gt, Tt = (je + 1) * (Ye + 1) + gt, co = (je + 1) * (Ye + 1) + (gt + 1), lo = je * (Ye + 1) + (gt + 1);
            Ot.push([
              Xt,
              Tt,
              co,
              lo
            ]);
          }
          const zt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, Yt = 432e6 / (2 * 1);
          for (let je = 0; je < Ot.length; je++) zt.elasticities.set(je, 432e6), zt.shearModuli.set(je, Yt), zt.thicknesses.set(je, 0.25), zt.poissonsRatios.set(je, 0);
          const Qt = /* @__PURE__ */ new Map();
          for (let je = 0; je <= Ke; je++) for (let gt = 0; gt <= Ye; gt++) {
            const Xt = je * (Ye + 1) + gt, Tt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            je === 0 && (Tt[0] = true, Tt[4] = true, Tt[5] = true), je === Ke && (Tt[1] = true, Tt[2] = true, Tt[3] = true), gt === 0 && (Tt[1] = true, Tt[3] = true, Tt[5] = true), Tt.some((co) => co) && Qt.set(Xt, Tt);
          }
          const ro = /* @__PURE__ */ new Map();
          for (const je of Ot) {
            const gt = Ht[je[0]], Xt = Ht[je[1]], Tt = Ht[je[2]], co = Ht[je[3]], lo = [
              Tt[0] - gt[0],
              Tt[1] - gt[1],
              Tt[2] - gt[2]
            ], No = [
              co[0] - Xt[0],
              co[1] - Xt[1],
              co[2] - Xt[2]
            ], Ps = lo[1] * No[2] - lo[2] * No[1], Os = lo[2] * No[0] - lo[0] * No[2], Ns = lo[0] * No[1] - lo[1] * No[0], va = -90 * (0.5 * Math.sqrt(Ps * Ps + Os * Os + Ns * Ns)) / 4;
            for (const qs of je) {
              const Rs = ro.get(qs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Rs[2] += va, ro.set(qs, Rs);
            }
          }
          try {
            const je = Lt(Ht, Ot, {
              supports: Qt,
              loads: ro
            }, zt), gt = Ye, Xt = ((_f2 = (_e3 = je.deformations) == null ? void 0 : _e3.get(gt)) == null ? void 0 : _f2[2]) ?? 0;
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${Ke}x${Ye} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Ht,
              elements: Ot,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Xt),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (je) {
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + je.message,
              nodes: Ht,
              elements: Ot,
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
        if (d(te), te.length > 0) {
          const Q = te[te.length - 1];
          e.nodes.val = Q.nodes, e.elements.val = Q.elements;
          const W = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), de = Math.max(...Q.nodes.map((K) => K[2]));
          Q.nodes.forEach((K, Se) => {
            Math.abs(K[2]) < 0.01 && W.set(Se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(K[2] - de) < 0.01 && le.set(Se, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: W,
            loads: le
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(v) {
        const E = 15e3 * Math.sqrt(210) * 10, m = [];
        m.push(`$ File exported from Awatif FEM Validation: ${v.name}`), m.push(" "), m.push("$ PROGRAM INFORMATION"), m.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), m.push(""), m.push("$ CONTROLS"), m.push('  UNITS  "TONF"  "M"  "C"  '), m.push("");
        const C = /* @__PURE__ */ new Set();
        v.nodes.forEach((fe) => C.add(Math.round(fe[1] * 1e4) / 1e4));
        const O = [
          ...C
        ].sort((fe, R) => fe - R), B = O.map((fe, R) => R === 0 ? "Base" : `Level_${R}`), J = /* @__PURE__ */ new Map();
        O.forEach((fe, R) => J.set(fe, B[R])), m.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let fe = O.length - 1; fe >= 1; fe--) m.push(`  STORY "${B[fe]}"  HEIGHT ${O[fe] - O[fe - 1]} MASTERSTORY "Yes"  `);
        m.push(`  STORY "Base"  ELEV ${O[0]} `), m.push(""), m.push("$ MATERIAL PROPERTIES"), m.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), m.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`), m.push(""), m.push("$ FRAME SECTIONS"), m.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), m.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), m.push("");
        const ee = v.elements.some((fe) => fe.length === 4);
        ee && (m.push("$ WALL/SLAB/DECK SECTIONS"), m.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), m.push(""));
        const Z = /* @__PURE__ */ new Map();
        let oe = 0;
        v.nodes.forEach((fe) => {
          const R = `${fe[0]},${fe[2]}`;
          Z.has(R) || Z.set(R, `${++oe}`);
        }), m.push("$ POINT COORDINATES");
        for (const [fe, R] of Z) {
          const [te, se] = fe.split(",").map(Number);
          m.push(`  POINT "${R}"  ${te} ${se} `);
        }
        m.push("");
        const j = (fe) => {
          const R = v.nodes[fe], te = `${R[0]},${R[2]}`;
          return {
            pt: Z.get(te) || "1",
            story: J.get(Math.round(R[1] * 1e4) / 1e4) || "Base"
          };
        };
        m.push("$ LINE CONNECTIVITIES");
        const he = [];
        if (v.elements.forEach((fe, R) => {
          if (fe.length !== 2) return;
          const te = v.nodes[fe[0]], se = v.nodes[fe[1]], Q = Math.abs(se[1] - te[1]), W = Math.sqrt((se[0] - te[0]) ** 2 + (se[2] - te[2]) ** 2), le = Q > W * 0.5, de = j(fe[0]), K = j(fe[1]), Se = le ? "COL30" : "VIGA";
          le ? (m.push(`  LINE  "E${R + 1}"  COLUMN  "${de.pt}"  "${de.pt}"  1`), he.push(`  LINEASSIGN  "E${R + 1}"  "${K.story}"  SECTION "${Se}"  `)) : (m.push(`  LINE  "E${R + 1}"  BEAM  "${de.pt}"  "${K.pt}"  0`), he.push(`  LINEASSIGN  "E${R + 1}"  "${de.story}"  SECTION "${Se}"  `));
        }), m.push(""), ee) {
          m.push("$ AREA CONNECTIVITIES");
          const fe = [];
          v.elements.forEach((R, te) => {
            if (R.length !== 4) return;
            const se = R.map((Q) => j(Q));
            m.push(`  AREA "W${te + 1}"  PANEL  4  "${se[0].pt}"  "${se[1].pt}"  "${se[2].pt}"  "${se[3].pt}"  1  1  0  0  `), fe.push(`  AREAASSIGN  "W${te + 1}"  "${se[2].story}"  SECTION "Muro20"  `);
          }), m.push(""), m.push("$ AREA ASSIGNS"), fe.forEach((R) => m.push(R)), m.push("");
        }
        m.push("$ POINT ASSIGNS"), v.nodes.forEach((fe, R) => {
          if (Math.abs(fe[1]) < 0.01) {
            const te = j(R);
            m.push(`  POINTASSIGN  "${te.pt}"  "${te.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), m.push(""), m.push("$ LINE ASSIGNS"), he.forEach((fe) => m.push(fe)), m.push(""), m.push("$ LOAD PATTERNS"), m.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), m.push(""), m.push("$ POINT OBJECT LOADS");
        const ze = Math.max(...v.nodes.map((fe) => fe[1]));
        return v.nodes.forEach((fe, R) => {
          if (Math.abs(fe[1] - ze) < 0.01) {
            const te = j(R);
            m.push(`  POINTLOAD  "${te.pt}"  "${te.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), m.push(""), m.push("  END"), m.push("$ END OF MODEL FILE"), m.join(`\r
`);
      }
      function l(v) {
        const E = 15e3 * Math.sqrt(210) * 10, m = [];
        m.push(`"""ETABS API Validation: ${v.name}`), m.push('Generated by Awatif FEM Studio"""'), m.push("import comtypes.client, time, math"), m.push(""), m.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), m.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), m.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), m.push("myETABS.ApplicationStart()"), m.push("time.sleep(10)"), m.push("SapModel = myETABS.SapModel"), m.push("SapModel.InitializeNewModel()"), m.push("SapModel.File.NewBlank()"), m.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), m.push(""), m.push(`E = ${E}`), m.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), m.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), m.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), m.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), v.elements.some((B) => B.length === 4) && m.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), m.push(""), m.push("# Add elements"), m.push("FN = ' '"), v.elements.forEach((B, J) => {
          if (B.length === 2) {
            const ee = v.nodes[B[0]], Z = v.nodes[B[1]], oe = Math.abs(Z[1] - ee[1]), j = Math.sqrt((Z[0] - ee[0]) ** 2 + (Z[2] - ee[2]) ** 2), he = oe > j * 0.5 ? "COL30" : "VIGA";
            m.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${ee[0]},${ee[2]},${ee[1]}, ${Z[0]},${Z[2]},${Z[1]}, FN,"${he}","E${J + 1}","Global")`);
          } else if (B.length === 4) {
            const ee = B.map((Z) => v.nodes[Z]);
            m.push(`SapModel.AreaObj.AddByCoord(4, [${ee.map((Z) => Z[0]).join(",")}], [${ee.map((Z) => Z[2]).join(",")}], [${ee.map((Z) => Z[1]).join(",")}], "", "Muro20")`);
          }
        }), m.push(""), m.push("# Supports at Z=0"), m.push("names = SapModel.PointObj.GetNameList()"), m.push("for i in range(int(names[0])):"), m.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), m.push("    if abs(float(c[2])) < 0.01:"), m.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), m.push(""), m.push("# Load at top"), m.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const O = Math.max(...v.nodes.map((B) => B[1]));
        m.push("names = SapModel.PointObj.GetNameList()"), m.push("for i in range(int(names[0])):"), m.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), m.push(`    if abs(float(c[2]) - ${O}) < 0.01:`), m.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), m.push(""), m.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${v.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), m.push("time.sleep(1)"), m.push("SapModel.Analyze.RunAnalysis()"), m.push("time.sleep(5)"), m.push(""), m.push("# Results"), m.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), m.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), m.push(`print(f"\\n=== ETABS: ${v.name} ===")`), m.push("names = SapModel.PointObj.GetNameList()"), m.push("for i in range(int(names[0])):"), m.push("    name = names[1][i]"), m.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), m.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), m.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), m.push("    if NR > 0:"), m.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), m.push(""), m.push('print("\\nAwatif results:")');
        for (const B of v.results) m.push(`print(f"  ${B.label}: Awatif=${B.awatif.toFixed(4)}, ETABS=${B.reference.toFixed(4)}, Ratio={${B.awatif.toFixed(4)}/${B.reference.toFixed(4)}:.4f}")`);
        return m.push("SapModel.View.RefreshView(0, False)"), m.join(`
`);
      }
      function s(v, E) {
        const m = new Blob([
          v
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(m), O = document.createElement("a");
        O.href = C, O.download = E, O.click(), URL.revokeObjectURL(C);
      }
      function d(v) {
        let E = document.getElementById("test-results-overlay");
        E && E.remove(), E = document.createElement("div"), E.id = "test-results-overlay", E.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let m = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, C = true;
        window.__awatifTests = v;
        for (let B = 0; B < v.length; B++) {
          const J = v[B];
          m += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', m += '<div style="display:flex;justify-content:space-between;align-items:center">', m += `<div style="font-weight:bold;color:#00d4ff">${J.name}</div>`, m += "<div>", m += `<button onclick="window.__awatifDownloadE2k(${B})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, m += `<button onclick="window.__awatifDownloadPy(${B})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, m += "</div></div>", m += `<div style="color:#888;font-size:11px;margin-bottom:8px">${J.formulation}</div>`, m += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const ee of J.results) {
            const Z = ee.reference !== 0 ? ee.awatif / ee.reference : 1, oe = Math.abs(Z - 1) < 0.05;
            oe || (C = false);
            const j = oe ? "#4caf50" : "#f44336", he = oe ? "PASS" : "FAIL";
            m += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${ee.label}</td>
            <td style="text-align:right;color:#fff">${ee.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${ee.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${j};font-weight:bold">${Z.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${ee.refSource}</td>
            <td style="text-align:center;color:${j};font-size:10px;font-weight:bold">${he}</td></tr>`;
          }
          m += "</table></div>";
        }
        m += C ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', E.innerHTML = m, document.body.appendChild(E), window.__awatifDownloadE2k = (B) => {
          const J = window.__awatifTests[B], ee = J.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(J), `${ee}.e2k`);
        }, window.__awatifDownloadPy = (B) => {
          const J = window.__awatifTests[B], ee = J.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(J), `${ee}_etabs.py`);
        };
      }
      (_h = we.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (v) => {
        v.stopPropagation(), Us();
      });
      let a = "";
      const i = we.querySelector("#cad3d-io-menu"), f = we.querySelector("#cad3d-io-file");
      function c(v, E) {
        e.nodes.val = v.nodes, e.elements.val = v.elements, e.nodeInputs.val = v.nodeInputs, e.elementInputs.val = v.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${E}: ${v.nodes.length} nodes, ${v.elements.length} elements`);
      }
      function r(v) {
        be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map();
        const E = /* @__PURE__ */ new Map();
        for (let j = 0; j < v.stories.length; j++) E.set(v.stories[j].name, j);
        for (let j = 0; j < v.elementTypes.length; j++) {
          const he = v.elementTypes[j], ze = v.elementStories[j], fe = E.get(ze) ?? 0;
          Oe.set(j, fe), he === "COLUMN" || he === "BRACE" ? be.add(j) : Fe.add(j);
        }
        A = "edificio";
        const m = v.grids.filter((j) => j.dir === "X").sort((j, he) => j.coord - he.coord), C = v.grids.filter((j) => j.dir === "Y").sort((j, he) => j.coord - he.coord);
        let O, B, J, ee;
        if (m.length > 0 || C.length > 0) O = m.map((j) => j.coord), B = C.map((j) => j.coord), J = m.map((j) => j.label), ee = C.map((j) => j.label);
        else {
          const j = new Set(v.nodes.map((ze) => ze[0])), he = new Set(v.nodes.map((ze) => ze[1]));
          O = [
            ...j
          ].sort((ze, fe) => ze - fe), B = [
            ...he
          ].sort((ze, fe) => ze - fe), J = O.map((ze, fe) => String(fe + 1)), ee = B.map((ze, fe) => String.fromCharCode(65 + fe));
        }
        const Z = v.stories.length > 0 ? Math.max(...v.stories.map((j) => j.elev)) : Math.max(...v.nodes.map((j) => j[2]));
        qe = O, Pe = B, ot = Z, setTimeout(() => {
          kt(), Wo(O, B, Z, J, ee), mn(v.stories, O, B), zn(), Tn();
        }, 100);
        const oe = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const j of v.elementTypes) oe[j]++;
        console.log(`E2K grids: X=[${J.join(",")}] Y=[${ee.join(",")}]`), console.log(`E2K stories: ${v.stories.map((j) => `${j.name}@${j.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${oe.COLUMN} columns, ${oe.BEAM} beams, ${oe.BRACE} braces`), Xe();
      }
      function b(v, E) {
        const m = new Blob([
          v
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(m), O = document.createElement("a");
        O.href = C, O.download = E, O.click(), URL.revokeObjectURL(C);
      }
      i && i.addEventListener("change", () => {
        if (a = i.value, i.value = "", a.startsWith("import")) a === "import-e2k" ? f.accept = ".e2k,.E2K" : a === "import-py" ? f.accept = ".py" : a === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (a.startsWith("export")) {
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? b(el({
              ...v,
              title: "Awatif Model",
              e2kModel: it ?? void 0
            }), "model.e2k") : a === "export-py" ? b(sl(v), "model_opensees.py") : a === "export-tcl" && b(al(v), "model_opensees.tcl");
          } catch (E) {
            alert("Export error: " + E.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const v = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!v) return;
        const E = new FileReader();
        E.onload = () => {
          const m = E.result;
          try {
            if (a === "import-e2k") {
              const C = Qa(m);
              it = C, c(C, "E2K imported"), r(C);
            } else if (a === "import-py") {
              const C = ll(m);
              c(C, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const C = il(m);
              c(C, "OpenSees Tcl imported");
            }
          } catch (C) {
            alert("Import error: " + C.message), console.error(C);
          }
        }, E.readAsText(v), f.value = "";
      });
      const w = we.querySelector("#cad3d-force-unit");
      w && (w.value = x, w.addEventListener("change", (v) => {
        v.stopPropagation(), x = w.value, L = ko(x, _), A && Ze(A);
      }));
      const M = we.querySelector("#cad3d-length-unit");
      M && (M.value = _, M.addEventListener("change", (v) => {
        v.stopPropagation(), _ = M.value, L = ko(x, _), A && Ze(A);
      })), we.querySelectorAll("[data-preset]").forEach((v) => {
        v.addEventListener("click", (E) => {
          E.stopPropagation();
          const m = v.dataset.preset, C = H[m];
          C && (x = C.force, _ = C.length, U = C.stress, L = ko(x, _), w && (w.value = x), M && (M.value = _), we.querySelectorAll("[data-preset]").forEach((O) => {
            O.classList.toggle("active", O.dataset.preset === m);
          }), A && Ze(A), console.log(`Preset: ${m} \u2192 ${x}+${_}, stress: ${U.label}`));
        });
      }), (_i = we.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (v) => {
        v.stopPropagation(), pa();
      }), (_j = we.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (v) => {
        v.stopPropagation(), fa();
      }), (_k = we.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (v) => {
        v.stopPropagation(), ma();
      }), (_l = we.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (v) => {
        v.stopPropagation(), ha();
      }), (_m = we.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (v) => {
        var _a3, _b2;
        v.stopPropagation(), ye = !ye, (_a3 = we.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ye);
        const m = we.querySelector("#cad3d-mode-prev"), C = we.querySelector("#cad3d-mode-next"), O = we.querySelector("#cad3d-mode-label"), B = we.querySelector("#cad3d-modal-scale");
        if (ye) {
          const J = st();
          ((_b2 = J == null ? void 0 : J.settings) == null ? void 0 : _b2.loads) && (Re = J.settings.loads.rawVal, J.settings.loads.val = false), Mn(), m.style.display = "", C.style.display = "", O.style.display = "", B && (B.style.display = ""), y();
        } else wn(), m.style.display = "none", C.style.display = "none", O.style.display = "none", B && (B.style.display = "none"), A && A !== "placa-q4" && A !== "placa-3q" && Ee(), setTimeout(() => {
          var _a4;
          const J = st();
          ((_a4 = J == null ? void 0 : J.settings) == null ? void 0 : _a4.loads) && Re && (J.settings.loads.val = true);
        }, 600);
      });
      function y() {
        var _a3;
        const v = we.querySelector("#cad3d-mode-label");
        if (!v || !(ae == null ? void 0 : ae.frequencies)) return;
        const E = ae.frequencies[Me], m = E > 0 ? 1 / E : 0, C = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let O = 0; O <= Me; O++) {
          const B = (_a3 = ae.massParticipation) == null ? void 0 : _a3[O];
          if (B) for (let J = 0; J < 6; J++) C[J] += B[J];
        }
        v.textContent = `Modo ${Me + 1} \u2014 ${E.toFixed(2)} Hz \u2014 T=${m.toFixed(3)}s \u2014 \u03A3Ux=${(C[0] * 100).toFixed(1)}% \u03A3Uy=${(C[1] * 100).toFixed(1)}% \u03A3Rz=${(C[5] * 100).toFixed(1)}%`;
      }
      (_n2 = we.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (v) => {
        if (v.stopPropagation(), !(ae == null ? void 0 : ae.modeShapes)) return;
        Me = (Me - 1 + ae.modeShapes.length) % ae.modeShapes.length;
        const E = ae.modeShapes[Me], { extent: m } = mo();
        let C = 0;
        for (let O = 0; O < ie.length; O++) {
          const B = E[O * 6] || 0, J = E[O * 6 + 1] || 0, ee = E[O * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(B * B + J * J + ee * ee));
        }
        ve = C > 1e-12 ? m * 0.05 / C : 1, Jo(), y();
      }), (_o2 = we.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (v) => {
        if (v.stopPropagation(), !(ae == null ? void 0 : ae.modeShapes)) return;
        Me = (Me + 1) % ae.modeShapes.length;
        const E = ae.modeShapes[Me], { extent: m } = mo();
        let C = 0;
        for (let O = 0; O < ie.length; O++) {
          const B = E[O * 6] || 0, J = E[O * 6 + 1] || 0, ee = E[O * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(B * B + J * J + ee * ee));
        }
        ve = C > 1e-12 ? m * 0.05 / C : 1, Jo(), y();
      });
      const p = we.querySelector("#cad3d-modal-scale");
      p == null ? void 0 : p.addEventListener("mousedown", (v) => v.stopPropagation()), p == null ? void 0 : p.addEventListener("change", () => {
        ye && (ae == null ? void 0 : ae.modeShapes) && Jo();
      });
      const g = we.querySelector("#cad3d-cli-toggle"), S = we.querySelector("#cad3d-cli-panel"), I = we.querySelector("#cad3d-cli-output"), k = we.querySelector("#cad3d-cmd"), N = [];
      let q = -1;
      g == null ? void 0 : g.addEventListener("click", (v) => {
        if (v.stopPropagation(), S) {
          const E = S.style.display !== "none";
          S.style.display = E ? "none" : "block", E || (k == null ? void 0 : k.focus(), I && !I.textContent && (I.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), k == null ? void 0 : k.addEventListener("mousedown", (v) => v.stopPropagation()), document.addEventListener("keydown", (v) => {
        var _a3;
        if ((v.ctrlKey || v.metaKey) && v.key === "z" && !v.shiftKey) {
          v.preventDefault(), gs();
          return;
        }
        if ((v.ctrlKey || v.metaKey) && (v.key === "y" || v.key === "z" && v.shiftKey)) {
          v.preventDefault(), xs();
          return;
        }
        if ((v.key === "Delete" || v.key === "Backspace") && ft.size > 0) {
          v.preventDefault(), ft.forEach((E) => ne.add(E)), ft.clear(), ao && (ao.remove(), ao = null), Ee();
          return;
        }
        if (v.key === "Escape") {
          if (no) if (ut !== null) {
            ut = null;
            const E = st();
            Ft && E && (E.scene.remove(Ft), Ft.geometry.dispose(), Ft.material.dispose(), Ft = null), Pt && E && (E.scene.remove(Pt), Pt.geometry.dispose(), Pt.material.dispose(), Pt = null), E == null ? void 0 : E.render();
          } else en();
          jt && Qo(), Kt && (Kt = false, wo(), (_a3 = we.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), k == null ? void 0 : k.addEventListener("keydown", (v) => {
        if (v.stopPropagation(), v.key === "Enter") {
          const E = k.value.trim();
          if (E) {
            N.unshift(E), q = -1, I && (I.textContent += `> ${E}
`);
            try {
              const m = new Function("cad", `return ${E}`)(Ge);
              if (m !== void 0 && I) {
                const C = typeof m == "object" ? JSON.stringify(m, null, 2) : String(m);
                I.textContent += `${C}
`;
              }
            } catch (m) {
              I && (I.textContent += `ERROR: ${m.message}
`);
            }
            I && (I.scrollTop = I.scrollHeight), k.value = "";
          }
        } else v.key === "ArrowUp" ? (v.preventDefault(), N.length > 0 && q < N.length - 1 && (q++, k.value = N[q])) : v.key === "ArrowDown" && (v.preventDefault(), q > 0 ? (q--, k.value = N[q]) : (q = -1, k.value = ""));
      });
      let h = false, u = 0, $ = 0, T = 0, F = 0;
      we.addEventListener("mousedown", (v) => {
        const E = v.target.tagName;
        if (E === "BUTTON" || E === "INPUT" || E === "SELECT") return;
        h = true;
        const m = we.getBoundingClientRect();
        we.style.bottom = "unset", u = v.clientX, $ = v.clientY, T = m.left, F = m.top, v.preventDefault();
      }), window.addEventListener("mousemove", (v) => {
        h && (v.preventDefault(), we.style.left = T + (v.clientX - u) + "px", we.style.top = F + (v.clientY - $) + "px");
      }), window.addEventListener("mouseup", () => {
        h = false;
      }), Xe();
    }, 10);
    function st() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function mo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ke(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [c, r, b] of t) c < o && (o = c), c > s && (s = c), r < n && (n = r), r > d && (d = r), b < l && (l = b), b > a && (a = b);
      const i = new ke((o + s) / 2, (n + d) / 2, (l + a) / 2), f = Math.max(s - o, d - n, a - l, 1);
      return {
        center: i,
        extent: f
      };
    }
    function kt(t = false) {
      const o = st();
      if (!o) return;
      const { extent: n } = mo();
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
      const r = d.axisArrow;
      c.add(new tn(new ke(1, 0, 0), new ke(), 1, r, 0.2, 0.2)), c.add(new tn(new ke(0, 1, 0), new ke(), 1, r, 0.2, 0.2)), c.add(new tn(new ke(0, 0, 1), new ke(), 1, r, 0.2, 0.2)), c.children.forEach((b) => b.scale.set(f, f, f));
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
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const p = y.getContext("2d");
        p.fillStyle = w, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(b, 32, 34);
        const g = new Bn(y);
        g.needsUpdate = true;
        const S = new nn(new sn({
          map: g,
          depthTest: false,
          transparent: true
        }));
        S.position.set(M[0], M[1], M[2]), S.scale.set(0.4 * f, 0.4 * f, 1), S.renderOrder = 99, c.add(S);
      }
      o.scene.add(c), t ? o.render() : bo("3d");
    }
    function hs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function bo(t) {
      var _a2;
      const o = st();
      if (!o) return;
      const { center: n, extent: l } = mo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((i) => {
          var _a3;
          if (!i.material) return;
          const f = i.type === "GridHelper" || i.type === "AxesHelper", c = i.isSprite, r = ((_a3 = i.userData) == null ? void 0 : _a3.noClip) === true;
          (f || c || r) && (Array.isArray(i.material) ? i.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : i.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const i = o.perspCamera.fov, f = l / (2 * Math.tan(i * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + f * 0.5, n.y - f * 0.8, n.z + f * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const i = o.orthoCamera;
        i.left = -d * s, i.right = d * s, i.top = d, i.bottom = -d, i.near = -l * 10, i.far = l * 10, i.updateProjectionMatrix();
        const f = (c, r, b) => {
          i.position.copy(c), i.up.copy(b), o.controls.target.copy(r), i.lookAt(r), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], f(new ke(n.x, n.y, n.z + l * 2), new ke(n.x, n.y, n.z), new ke(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const c = parseInt(t.split(":")[1]), r = ((_a2 = re.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (c + 1) * r, w = r * 0.45;
          o.renderer.clippingPlanes = [
            new vo(new ke(0, 0, -1), b + w),
            new vo(new ke(0, 0, 1), -b + w)
          ], a(), f(new ke(n.x, n.y, b + l * 2), new ke(n.x, n.y, b), new ke(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const c = parseInt(t.split(":")[1]), r = qe[c] ?? n.x;
          if (Pe.length > 1) {
            const w = hs(qe, c, l);
            o.renderer.clippingPlanes = [
              new vo(new ke(-1, 0, 0), r + w),
              new vo(new ke(1, 0, 0), -r + w)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const c = parseInt(t.split(":")[1]), r = Pe[c] ?? n.y;
          if (qe.length > 1) {
            const w = hs(Pe, c, l);
            o.renderer.clippingPlanes = [
              new vo(new ke(0, -1, 0), r + w),
              new vo(new ke(0, 1, 0), -r + w)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function zn() {
      const t = we.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (qe.length < 2 && Pe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, i) => {
        const f = document.createElement("button");
        return f.textContent = d, f.dataset.view = a, f.title = i, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (c) => {
          var _a2;
          c.stopPropagation();
          const r = f.classList.contains("view-active");
          we.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), r ? (bo("3d"), (_a2 = we.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (bo(a), f.classList.add("view-active"));
        }), f;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      qe.forEach((d, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Pe.forEach((d, a) => {
        const i = `${a + 1}`;
        t.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Tn() {
      var _a2;
      const t = we.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = re.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, d, a) => {
        const i = document.createElement("button");
        return i.textContent = s, i.dataset.view = d, i.title = a, i.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", i.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const c = i.classList.contains("view-active");
          we.querySelectorAll("[data-view]").forEach((r) => r.classList.remove("view-active")), c ? (bo("3d"), (_a3 = we.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (bo(d), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Qs() {
      bo("3d"), we.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ge.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, bo(t), we.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Kt = false, jt = false, no = false, _t = "line", Gt = [], ut = null, Ft = null, Pt = null, Ao = null, Jt = null;
    const ht = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Ln = 0.5;
    let An = [], Vt = null, Mo = null;
    const Co = [], Zo = [], ea = 50;
    function Fo() {
      Co.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Co.length > ea && Co.shift(), Zo.length = 0;
    }
    function gs() {
      if (Co.length === 0) return;
      Zo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Co.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, uo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function xs() {
      if (Zo.length === 0) return;
      Co.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Zo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, uo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ft = /* @__PURE__ */ new Set();
    let Wt = null, ho = [], so = null, ao = null;
    function Cn(t) {
      const o = st();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const f = n[l[i]], c = n[l[(i + 1) % l.length]];
        s.push(f[0], f[1], f[2], c[0], c[1], c[2]);
      }
      const d = new Ut();
      d.setAttribute("position", new So(s, 3));
      const a = new Ro(d, new _o({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), ho.push(a), o.render();
    }
    function go() {
      const t = st();
      ho.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), ho = [], t == null ? void 0 : t.render();
    }
    function xo() {
      ao && ao.remove();
      const t = V.size > 0 || Y;
      if (ft.size === 0 && !t) {
        ao = null;
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
    `, document.body.appendChild(o), ao = o, o.querySelector("#sel-assign").addEventListener("click", () => {
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
          let d = 0, a = 0, i = 0, f = 0;
          n.forEach((r) => {
            const b = s[r];
            if (b) if (b.length === 2) {
              const w = l[b[0]], M = l[b[1]], y = Math.abs(M[0] - w[0]), p = Math.abs(M[1] - w[1]), g = Math.abs(M[2] - w[2]);
              g > y && g > p ? d++ : a++;
            } else b.length === 3 ? i++ : b.length === 4 && f++;
          });
          const c = [];
          d && c.push(`${d} columnas`), a && c.push(`${a} vigas`), f && c.push(`${f} shells Q4`), i && c.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${c.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ft.forEach((n) => V.add(n)), ft.clear(), go(), xo(), Ee();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        Y = true, G.clear(), ft.forEach((n) => G.add(n)), ft.clear(), go(), xo(), Ee();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), Y = false, G.clear(), xo(), Ee();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Fo(), ft.forEach((n) => ne.add(n)), ft.clear(), go(), xo(), Ee();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ft.clear(), go(), xo();
      });
    }
    function Qo() {
      var _a2;
      jt = false, ft.clear(), go(), ao && (ao.remove(), ao = null), (_a2 = we.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = st();
      o && (o.controls.enabled = true);
    }
    function wo() {
      if (Wt) {
        const t = st();
        t == null ? void 0 : t.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null, t == null ? void 0 : t.render();
      }
      so && (so.remove(), so = null);
    }
    function ta(t) {
      Fn();
      const o = st();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      Mo = t;
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
        const i = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), f = new Ut();
        f.setAttribute("position", new Ia(i, 3));
        const c = new qo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), r = new Ro(f, c);
        r.computeLineDistances(), r.renderOrder = 9990, o.scene.add(r), An.push(r);
      }
      o.render();
    }
    function Fn() {
      const t = st();
      for (const o of An) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      An = [], Mo = null, Vt && (Vt.remove(), Vt = null);
    }
    function vs(t, o, n, l) {
      Vt || (Vt = document.createElement("div"), Vt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Vt));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + d * d + a * a), f = Math.abs(s), c = Math.abs(d), r = Math.abs(a);
      let b = "";
      f > c && f > r ? b = `\u0394X=${s.toFixed(2)}` : c > f && c > r ? b = `\u0394Y=${d.toFixed(2)}` : r > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Vt.textContent = `${i.toFixed(3)} m  ${b}`, Vt.style.left = t + 20 + "px", Vt.style.top = o - 10 + "px";
    }
    function oa(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ke(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), i = 0.3, f = Math.abs(a.x), c = Math.abs(a.y), r = Math.abs(a.z);
      return c < i && r < i && f > 0.01 ? new ke(d.x, s.y, s.z) : f < i && r < i && c > 0.01 ? new ke(s.x, d.y, s.z) : f < i && c < i && r > 0.01 ? new ke(s.x, s.y, d.z) : null;
    }
    function en() {
      var _a2;
      const t = st();
      Ft && t && (t.scene.remove(Ft), Ft.geometry.dispose(), Ft.material.dispose(), Ft = null), Pt && t && (t.scene.remove(Pt), Pt.geometry.dispose(), Pt.material.dispose(), Pt = null), Fn(), ut = null, Jt = null, no = false, Ao && (Ao.remove(), Ao = null), (_a2 = we.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function na() {
      Ao && Ao.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(_t === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(_t === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(_t === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(_t === "area")}">\u25A2 Area</button>
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
    `, document.body.appendChild(t), Ao = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        s && (s.style.cssText = o(_t === "line")), d && (d.style.cssText = o(_t === "arc")), a && (a.style.cssText = o(_t === "node")), i && (i.style.cssText = o(_t === "area"));
        const f = t.querySelector("#ds-node"), c = t.querySelector("#ds-grid"), r = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        f && (f.style.cssText = n(ht.node)), c && (c.style.cssText = n(ht.grid)), r && (r.style.cssText = n(ht.midpoint)), b && (b.style.cssText = n(ht.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        _t = "line", ut = null, Jt = null, Gt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        _t = "arc", ut = null, Jt = null, Gt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        _t = "node", ut = null, Jt = null, Gt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        _t = "area", ut = null, Jt = null, Gt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        ht.node = !ht.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        ht.grid = !ht.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        ht.midpoint = !ht.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        ht.track = !ht.track, ht.track || Fn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ht.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => gs()), t.querySelector("#dt-redo").addEventListener("click", () => xs());
    }
    function ys(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new _s();
      i.setFromCamera(new Bs(d, a), n);
      const f = e.nodes.val, c = e.elements.val, r = 0.12;
      if (ht.node) {
        let M = -1, y = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const g = f[p], S = new ke(g[0], g[1], g[2]).project(n), I = Math.sqrt((S.x - d) ** 2 + (S.y - a) ** 2);
          I < r && I < y && (y = I, M = p);
        }
        if (M >= 0) return {
          nodeIdx: M,
          worldPos: new ke(...f[M]),
          snapType: "node"
        };
      }
      if (ht.midpoint) {
        let M = 1 / 0, y = null;
        for (const p of c) {
          if (p.length !== 2) continue;
          const g = f[p[0]], S = f[p[1]], I = new ke((g[0] + S[0]) / 2, (g[1] + S[1]) / 2, (g[2] + S[2]) / 2), k = I.clone().project(n), N = Math.sqrt((k.x - d) ** 2 + (k.y - a) ** 2);
          N < r * 0.8 && N < M && (M = N, y = I);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (ht.grid) {
        const M = new vo(new ke(0, 0, 1), 0), y = new ke();
        if (i.ray.intersectPlane(M, y)) {
          const p = ht.gridSize || Ln;
          return y.x = Math.round(y.x / p) * p, y.y = Math.round(y.y / p) * p, y.z = Math.round(y.z / p) * p, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const b = new vo(new ke(0, 0, 1), 0), w = new ke();
      return i.ray.intersectPlane(b, w), {
        nodeIdx: null,
        worldPos: w,
        snapType: "free"
      };
    }
    function $s(t) {
      const o = st();
      if (!o) return;
      const n = e.nodes.val;
      if (Pt && (o.scene.remove(Pt), Pt.geometry.dispose(), Pt.material.dispose(), Pt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new ka(s * 2, s * 2, s * 2) : new za(s, 12, 12), a = new Ta({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Pt = new La(d, a), Pt.position.copy(t.worldPos), Pt.renderOrder = 9999, o.scene.add(Pt);
      }
      if (Ft && (o.scene.remove(Ft), Ft.geometry.dispose(), Ft.material.dispose(), Ft = null), ut !== null && t.worldPos) {
        const l = n[ut], s = new Ut();
        if (_t === "arc" && Jt !== null) {
          const a = n[Jt], i = Ms(new ke(l[0], l[1], l[2]), new ke(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let c = 0; c < i.length - 1; c++) f.push(i[c].x, i[c].y, i[c].z, i[c + 1].x, i[c + 1].y, i[c + 1].z);
          s.setAttribute("position", new So(f, 3));
        } else s.setAttribute("position", new So([
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
        Ft = new Eo(s, d), _t === "arc" && Jt !== null && (Ft = new Ro(s, d)), Ft.renderOrder = 9999, o.scene.add(Ft);
      }
      o.render();
    }
    function Ms(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), c = 2 * (1 - a) * a, r = a * a;
        s.push(new ke(f * t.x + c * i.x + r * n.x, f * t.y + c * i.y + r * n.y, f * t.z + c * i.z + r * n.z));
      }
      return s;
    }
    function Pn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      Fo();
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
      if (_t === "node") {
        if (!t.worldPos) return;
        Fo();
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
      if (_t === "line") {
        const o = Pn(t);
        if (o < 0) return;
        if (ut === null) {
          ut = o;
          return;
        }
        if (o === ut) return;
        Fo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === ut && s[1] === o || s[1] === ut && s[0] === o)) || (n.push([
          ut,
          o
        ]), e.elements.val = n, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), ut = o;
        return;
      }
      if (_t === "arc") {
        const o = Pn(t);
        if (o < 0) return;
        if (ut === null) {
          ut = o;
          return;
        }
        if (Jt === null) {
          if (o === ut) return;
          Jt = o;
          return;
        }
        if (o === ut || o === Jt) return;
        const n = e.nodes.val, l = new ke(...n[ut]), s = new ke(...n[Jt]), d = new ke(...n[o]), a = Math.max(4, Math.round(((_a2 = re.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = Ms(l, s, d, a);
        Fo();
        const f = [
          ...e.nodes.val
        ], c = [
          ...e.elements.val
        ];
        let r = ut;
        for (let b = 1; b < i.length; b++) {
          let w;
          if (b === i.length - 1) w = o;
          else {
            const M = i[b];
            w = f.length, f.push([
              M.x,
              M.y,
              M.z
            ]);
          }
          c.push([
            r,
            w
          ]), r = w;
        }
        e.nodes.val = f, e.elements.val = c, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, ut = o, Jt = null;
        return;
      }
      if (_t === "area") {
        const o = Pn(t);
        if (o < 0) return;
        if (Gt.length >= 3 && o === Gt[0]) {
          Fo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = Gt.map((d) => n[d]);
          try {
            const d = po({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (i, f) => f),
              maxMeshSize: Ln || 0.5
            }), a = [];
            for (const i of d.nodes) {
              let f = -1;
              for (let c = 0; c < n.length; c++) {
                const r = Math.abs(n[c][0] - i[0]), b = Math.abs(n[c][1] - i[1]), w = Math.abs(n[c][2] - i[2]);
                if (r < 0.01 && b < 0.01 && w < 0.01) {
                  f = c;
                  break;
                }
              }
              f >= 0 ? a.push(f) : (a.push(n.length), n.push([
                i[0],
                i[1],
                i[2]
              ]));
            }
            for (const i of d.elements) l.push([
              a[i[0]],
              a[i[1]],
              a[i[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, uo(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Gt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Gt = [];
          return;
        }
        if (Gt.push(o), console.log(`Area vertex ${Gt.length}: node ${o}`), Gt.length >= 2) {
          const n = Gt[Gt.length - 2], l = e.nodes.val, s = st();
          if (s) {
            const d = new Ut().setFromPoints([
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
      const o = st();
      if (!o) return;
      Wt && (o.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const i = n[l[a]], f = n[l[(a + 1) % l.length]];
        s.push(i[0], i[1], i[2], f[0], f[1], f[2]);
      }
      const d = new Ut();
      d.setAttribute("position", new So(s, 3)), Wt = new Ro(d, new _o({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Wt.renderOrder = 9999, o.scene.add(Wt), o.render();
    }
    function On(t) {
      const o = st();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new Bs((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new _s();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let i = 1 / 0, f = -1;
      const c = s.ray;
      for (let b = 0; b < a.length; b++) {
        const w = a[b];
        if (w.length === 2) {
          const M = new ke(...d[w[0]]), y = new ke(...d[w[1]]), p = new Aa(M, y), g = new ke(), S = new ke();
          c.closestPointToPoint(p.getCenter(new ke()), g), p.closestPointToPoint(g, true, S);
          const I = g.distanceTo(S);
          I < i && (i = I, f = b);
        } else if (w.length === 3) {
          const M = new ke(...d[w[0]]), y = new ke(...d[w[1]]), p = new ke(...d[w[2]]), g = new ke();
          if (c.intersectTriangle(M, y, p, false, g)) {
            const I = c.origin.distanceTo(g);
            I < i && (i = I, f = b);
          } else {
            const I = M.add(y).add(p).divideScalar(3), k = new ke();
            c.closestPointToPoint(I, k);
            const N = k.distanceTo(I);
            N < i && (i = N, f = b);
          }
        } else if (w.length === 4) {
          const M = new ke(...d[w[0]]), y = new ke(...d[w[1]]), p = new ke(...d[w[2]]), g = new ke(...d[w[3]]), S = new ke();
          let I = c.intersectTriangle(M, y, p, false, S);
          if (I) {
            const k = c.origin.distanceTo(S);
            k < i && (i = k, f = b);
          }
          if (I = c.intersectTriangle(M, p, g, false, S), I) {
            const k = c.origin.distanceTo(S);
            k < i && (i = k, f = b);
          }
        }
      }
      const { extent: r } = mo();
      return i < r * 0.1 ? f : -1;
    }
    function ue(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Nn(t, o, n = 12) {
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
        for (let i = 0; i < s; i++) {
          const f = t[a][i], c = Math.abs(f) > 1e-10 ? "nonzero" : "";
          d += `<td class="${c}">${ue(f, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function Ae(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function z(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function aa(t, o, n, l, s, d, a) {
      const i = 0.8333333333333334 * o, f = 5 / 6 * o, c = f > 0 && s > 0 ? 12 * t * n / (s * f * a ** 2) : 0, r = i > 0 && s > 0 ? 12 * t * l / (s * i * a ** 2) : 0, b = t * o / a, w = s * d / a, M = 12 * t * n / a ** 3 / (1 + c), y = 6 * t * n / a ** 2 / (1 + c), p = 4 * t * n / a * (1 + c / 4) / (1 + c), g = 2 * t * n / a * (1 - c / 2) / (1 + c), S = c > 1e-10 || r > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${S ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${S ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${z("A", "s")} = ${Ae("5", "6")} \xB7 ${z("A")} = <span class="highlight">${ue(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Ae("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("G") + "\xB7" + z("A", "s") + "\xB7" + z("L") + "\xB2")} = <span class="highlight">${ue(c)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${ue(r)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${z("t", "z")} = ${Ae("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ue(M)}</span> &nbsp;(cortante)</div>
      <div>${z("b", "z")} = ${Ae("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ue(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${z("k", "z")} = ${Ae("4\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1+\u03C6/4)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ue(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${z("a", "z")} = ${Ae("2\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1\u2212\u03C6/2)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${ue(g)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Ae(z("E") + "\xB7" + z("A"), z("L"))} = <span class="highlight">${ue(b)}</span> &nbsp;(axial)</div>
      <div>${Ae(z("G") + "\xB7" + z("J"), z("L"))} = <span class="highlight">${ue(w)}</span> &nbsp;(torsi\xF3n)</div>
      ${S ? "" : `
      <div>${Ae("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")} = <span class="highlight">${ue(M)}</span></div>
      <div>${Ae("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))} = <span class="highlight">${ue(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${z("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Ae(z("EA"), z("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Ae("\u2212" + z("EA"), z("L"))}</span>
        <span class="cell">0</span><span class="cell">${z("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${z("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${S ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${S ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${z("K", "f")} = ${z("B", "f")}<sup>T</sup> \xB7 ${z("E")}\xB7${z("I")} \xB7 ${z("B", "f")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${z("K", "c")} = ${z("B", "c")}<sup>T</sup> \xB7 ${z("G")}\xB7${z("A'")} \xB7 ${z("B", "c")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${z("K", "total")} = ${z("K", "f")} + ${z("K", "c")}</div>
    </div>` : ""}`;
    }
    function la(t) {
      if (t.length === 2) {
        const n = fo(t[1], t[0]), l = zo(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${z("l")} = cos(\u03B1) = ${Ae("\u0394x", z("L"))} = ${Ae(ue(n[0]), ue(l))} = <span class="highlight">${ue(s)}</span></div>
        <div>${z("m")} = cos(\u03B2) = ${Ae("\u0394y", z("L"))} = ${Ae(ue(n[1]), ue(l))} = <span class="highlight">${ue(d)}</span></div>
        <div>${z("n")} = cos(\u03B3) = ${Ae("\u0394z", z("L"))} = ${Ae(ue(n[2]), ue(l))} = <span class="highlight">${ue(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${z("l")}</span><span class="cell">${z("m")}</span><span class="cell">${z("n")}</span>
          <span class="cell">${Ae("\u2212" + z("m"), z("D"))}</span><span class="cell">${Ae(z("l"), z("D"))}</span><span class="cell">0</span>
          <span class="cell">${Ae("\u2212" + z("l") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${Ae("\u2212" + z("m") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${z("D")}</span>
        </span>
        &nbsp; donde ${z("D")} = \u221A(${z("l")}\xB2 + ${z("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${z("T")} = ${z("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${z("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function ia() {
      return `<div class="fem-eq">
      ${z("K", "global")} = ${z("T")}<sup>T</sup> \xB7 ${z("k", "local")} \xB7 ${z("T")}
    </div>`;
    }
    function ra(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${z("K", "global")}[${z("i")}, ${z("j")}] += ${z("K", "elem")}[${z("i")}, ${z("j")}]</div>
      <div style="margin-top:4px">donde ${z("i")}, ${z("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function ca(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${z("u", "local")} = ${z("T")} \xB7 ${z("u", "global")}</div>
        <div>${z("f", "local")} = ${z("k", "local")} \xB7 ${z("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${z("f")} = [${z("N", "i")}, ${z("V", "y,i")}, ${z("V", "z,i")}, ${z("M", "x,i")}, ${z("M", "y,i")}, ${z("M", "z,i")}, ${z("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Ae("1", "2" + z("A"))} \xB7 ${z("D")} \xB7 ${z("B")} \xB7 ${z("u")}</div>
      <div>${z("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${z("t")} &nbsp;&nbsp; ${z("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Ae(z("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function qn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], i = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${ue(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ss() {
      const t = "0", o = Ae(z("EA"), z("L")), n = Ae("\u2212" + z("EA"), z("L")), l = Ae("12" + z("EI", "z"), z("L") + "\xB3"), s = Ae("\u221212" + z("EI", "z"), z("L") + "\xB3"), d = Ae("12" + z("EI", "y"), z("L") + "\xB3"), a = Ae("\u221212" + z("EI", "y"), z("L") + "\xB3"), i = Ae("6" + z("EI", "z"), z("L") + "\xB2"), f = Ae("\u22126" + z("EI", "z"), z("L") + "\xB2"), c = Ae("6" + z("EI", "y"), z("L") + "\xB2"), r = Ae("\u22126" + z("EI", "y"), z("L") + "\xB2"), b = Ae(z("GJ"), z("L")), w = Ae("\u2212" + z("GJ"), z("L")), M = Ae("4" + z("EI", "z"), z("L")), y = Ae("2" + z("EI", "z"), z("L")), p = Ae("4" + z("EI", "y"), z("L")), g = Ae("2" + z("EI", "y"), z("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', I = [
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
      ], N = [
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
          s,
          t,
          t,
          t,
          i
        ],
        [
          t,
          t,
          d,
          t,
          r,
          t,
          t,
          t,
          a,
          t,
          r,
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
          r,
          t,
          p,
          t,
          t,
          t,
          c,
          t,
          g,
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
          f,
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
          r,
          t,
          g,
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
          i,
          t,
          t,
          t,
          y,
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
      for (const h of k) q += `<td class="hdr">${h}</td>`;
      q += "</tr>";
      for (let h = 0; h < 12; h++) {
        q += `<tr><td class="hdr">${I[h]}</td>`;
        for (let u = 0; u < 12; u++) if (u < h) q += `<td style="color:var(--fem-border-cell)">${u === 0 && h > 0 ? S : ""}</td>`;
        else {
          const $ = N[h][u], T = (h === u ? "diag " : "") + ($ !== "0" ? "nz" : "");
          q += `<td class="${T}">${$}</td>`;
        }
        q += "</tr>";
      }
      return q += "</table>", q;
    }
    function da(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${Ae(z("E") + "\xB7" + z("A"), z("L"))}`,
          calc: `${Ae(ue(t) + "\xD7" + ue(o), ue(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${Ae("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")}`,
          calc: `${Ae("12\xD7" + ue(t) + "\xD7" + ue(n), ue(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${Ae("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2")}`,
          calc: `${Ae("6\xD7" + ue(t) + "\xD7" + ue(n), ue(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Ae("12\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB3")}`,
          calc: `${Ae("12\xD7" + ue(t) + "\xD7" + ue(l), ue(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${Ae("6\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB2")}`,
          calc: `${Ae("6\xD7" + ue(t) + "\xD7" + ue(l), ue(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Ae(z("G") + "\xB7" + z("J"), z("L"))}`,
          calc: `${Ae(ue(s) + "\xD7" + ue(d), ue(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${Ae("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${Ae("4\xD7" + ue(t) + "\xD7" + ue(n), ue(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Ae("2\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${Ae("2\xD7" + ue(t) + "\xD7" + ue(n), ue(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Ae("4\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${Ae("4\xD7" + ue(t) + "\xD7" + ue(l), ue(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Ae("2\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${Ae("2\xD7" + ue(t) + "\xD7" + ue(l), ue(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${ue(f.val)}</span></div>`).join("")}</div>`;
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
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      so && so.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((h) => o[h]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const h = zo(fo(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, $ = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, T = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, F = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, v = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, E = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${ue(h)}${ue(u)}${ue($)}${ue(T)}${ue(F)}${ue(v)}${ue(E)}`;
      } else {
        const h = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, u = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, $ = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0, T = h / (2 * (1 + $)), F = l.length === 4, v = h / (1 - $ * $);
        `${l.length}${l.join(", ")}${ue(h)}${ue(T)}${ue(u)}${ue($)}`, F && (w = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${z("D")} = ${Ae(z("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Ae("1\u2212\u03BD", "2")}</span>
          </span> = ${Ae(ue(h), "1\u2212" + ue($) + "\xB2")} = <span class="highlight">${ue(v)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${z("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${z("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${z("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${z("u", "x")} = \u03A3${z("N", "i")}\xB7${z("u", "xi")} + \u03B1\u2081\xB7${z("N", "5")} + \u03B1\u2082\xB7${z("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${z("u", "y")} = \u03A3${z("N", "i")}\xB7${z("u", "yi")} + \u03B1\u2083\xB7${z("N", "5")} + \u03B1\u2084\xB7${z("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${z("d")} = [${z("B", "C")} &nbsp; ${z("B", "I")}] \xB7 [${z("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${z("k", "CC")} = \u222B${z("B", "C")}<sup>T</sup>\xB7${z("E")}\xB7${z("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${z("k", "CI")} = \u222B${z("B", "C")}<sup>T</sup>\xB7${z("E")}\xB7${z("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${z("k", "II")} = \u222B${z("B\u0304", "I")}<sup>T</sup>\xB7${z("E")}\xB7${z("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${z("k", "C")} = ${z("k", "CC")} \u2212 ${z("k", "CI")} \xB7 ${z("k", "II")}\u207B\xB9 \xB7 ${z("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${z("B\u0304", "I")} = ${z("B", "I")} + ${z("B", "IC")} &nbsp; donde &nbsp; ${z("B", "IC")} = \u2212${Ae("1", "V")}\u222B${z("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${z("K", "drill")} = \u03B1\xB7${z("G")}\xB7${z("t")} \xB7 \u222B${z("B", "d")}<sup>T</sup>\xB7${z("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${z("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${z("D", "b")} = ${Ae(z("E") + "\xB7" + z("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${ue(h * u ** 3 / (12 * (1 - $ ** 2)))}</span></div>
          <div>${z("D", "s")} = \u03BA\xB7${z("G")}\xB7${z("t")} = <span class="highlight">${ue(5 / 6 * T * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${z("K", "24\xD724")} = ${z("K", "membrana")}(8\xD78) + ${z("K", "flexi\xF3n")}(12\xD712) + ${z("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let c = "", r = "", b = "", w = "", M = "", y = "", p = "", g = "", S = null, I = null, k = null, N = [];
      try {
        if (S = pn(s, a, t), I = fn(s), k = Zt(Gn(I), Zt(S, I)), N = d ? [
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
          const T = zo(fo(s[1], s[0])), F = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, v = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, E = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, m = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, C = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, O = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          w = aa(F, v, E, m, C, O, T);
        }
        M = la(s), y = ia(), p = ra(l), g = ca(d);
        const h = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', $ = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        c = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${h}</div>${Nn(S, N)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${I.length}\xD7${I.length}) ${u}</div>${Nn(I, N)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${$}</div>${Nn(k, N)}`;
      } catch (h) {
        c = `<div style="color:red">Error: ${h.message}</div>`;
      }
      if (i == null ? void 0 : i.deformations) {
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
          const T = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], F = h.map((v, E) => `<span class="prop-key">${v}</span>: <span class="${Math.abs(T[E]) > 1e-10 ? "result-val" : ""}">${ue(T[E])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${F}</div>`;
        }).join("");
      }
      if (f && d && (i == null ? void 0 : i.deformations) && S && I) {
        const h = (_s2 = f.normals) == null ? void 0 : _s2.get(t), u = (_t2 = f.shearsY) == null ? void 0 : _t2.get(t), $ = (_u = f.shearsZ) == null ? void 0 : _u.get(t), T = (_v = f.torsions) == null ? void 0 : _v.get(t), F = (_w = f.bendingsY) == null ? void 0 : _w.get(t), v = (_x = f.bendingsZ) == null ? void 0 : _x.get(t), E = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], m = [];
        for (const Z of l) {
          const oe = ((_y = i.deformations) == null ? void 0 : _y.get(Z)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          m.push(...oe);
        }
        let C = [];
        try {
          C = Zt(I, m);
        } catch {
          C = new Array(12).fill(0);
        }
        let O = [];
        try {
          O = Zt(S, C);
        } catch {
          O = new Array(12).fill(0);
        }
        const B = (Z, oe) => Z.map((j, he) => `<span style="color:${Math.abs(j) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${oe[he % 6]}=${ue(j)}</span>`).join(", "), ee = [
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
        ].map((Z, oe) => `${Z}${oe < 6 ? "\u1D62" : "\u2C7C"}`);
        `${z("u", "global")}${l.map((Z, oe) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${E.map((j, he) => `<span style="color:${Math.abs(m[oe * 6 + he]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${ue(m[oe * 6 + he])}</span>`).join(", ")}`).join(" | ")}${z("u", "local")}${z("T")}${z("u", "global")}${z("u", "local")}${B(C, [
          ...E,
          ...E
        ])}${z("f", "local")}${z("k", "local")}${z("u", "local")}${z("f", "local")}${O.map((Z, oe) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ee[oe]}=${ue(Z)}</span>`).join(", ")}${z("P", "1")}${z("N", "i")}${ue(O[0])}${z("P", "7")}${z("N", "j")}${ue(O[6])}${z("P", "2")}${z("V", "y,i")}${ue(O[1])}${z("P", "8")}${z("V", "y,j")}${ue(O[7])}${z("P", "3")}${z("V", "z,i")}${ue(O[2])}${z("P", "9")}${z("V", "z,j")}${ue(O[8])}${z("P", "4")}${z("M", "x,i")}${ue(O[3])}${z("P", "10")}${z("M", "x,j")}${ue(O[9])}${z("P", "5")}${z("M", "y,i")}${ue(O[4])}${z("P", "11")}${z("M", "y,j")}${ue(O[10])}${z("P", "6")}${z("M", "z,i")}${ue(O[5])}${z("P", "12")}${z("M", "z,j")}${ue(O[11])}${h ? h.map((Z) => ue(Z)).join(", ") : "\u2014"}${u ? u.map((Z) => ue(Z)).join(", ") : "\u2014"}${$ ? $.map((Z) => ue(Z)).join(", ") : "\u2014"}${T ? T.map((Z) => ue(Z)).join(", ") : "\u2014"}${F ? F.map((Z) => ue(Z)).join(", ") : "\u2014"}${v ? v.map((Z) => ue(Z)).join(", ") : "\u2014"}`;
      } else if (f && d) {
        const h = (_z = f.normals) == null ? void 0 : _z.get(t), u = (_A = f.shearsY) == null ? void 0 : _A.get(t), $ = (_B = f.shearsZ) == null ? void 0 : _B.get(t), T = (_C = f.torsions) == null ? void 0 : _C.get(t), F = (_D = f.bendingsY) == null ? void 0 : _D.get(t), v = (_E = f.bendingsZ) == null ? void 0 : _E.get(t);
        `${h ? h.map((E) => ue(E)).join(", ") : "\u2014"}${u ? u.map((E) => ue(E)).join(", ") : "\u2014"}${$ ? $.map((E) => ue(E)).join(", ") : "\u2014"}${T ? T.map((E) => ue(E)).join(", ") : "\u2014"}${F ? F.map((E) => ue(E)).join(", ") : "\u2014"}${v ? v.map((E) => ue(E)).join(", ") : "\u2014"}`;
      } else if (f && !d) {
        const h = (_F = f.bendingXX) == null ? void 0 : _F.get(t), u = (_G = f.bendingYY) == null ? void 0 : _G.get(t), $ = (_H = f.bendingXY) == null ? void 0 : _H.get(t), T = (_I = f.membraneXX) == null ? void 0 : _I.get(t), F = (_J = f.membraneYY) == null ? void 0 : _J.get(t), v = (_K = f.membraneXY) == null ? void 0 : _K.get(t);
        `${h ? h.map((E) => ue(E)).join(", ") : "\u2014"}${u ? u.map((E) => ue(E)).join(", ") : "\u2014"}${$ ? $.map((E) => ue(E)).join(", ") : "\u2014"}${T ? T.map((E) => ue(E)).join(", ") : "\u2014"}${F ? F.map((E) => ue(E)).join(", ") : "\u2014"}${v ? v.map((E) => ue(E)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, so = Ga(t, o, n, a, i, f), so.id = "fem-inspect-panel", document.body.appendChild(so), (_L = so.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => wo());
      const q = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const h = zo(fo(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, $ = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, T = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, F = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, v = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, E = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return da(u, $, T, F, v, E, h);
      })() : void 0;
      so.querySelectorAll("[data-full]").forEach((h) => {
        h.addEventListener("click", (u) => {
          u.stopPropagation();
          const $ = h.dataset.full;
          if ($ === "kLocal" && S) {
            const T = d ? Ss() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Rn(`Elemento ${t} \u2014 Rigidez Local k_local`, T, qn(S, N), q);
          } else if ($ === "T" && I) Rn(`Elemento ${t} \u2014 Transformaci\xF3n T`, M, qn(I, N));
          else if ($ === "kGlobal" && k) {
            const T = d ? Ss() : "<em>Shell 18\xD718</em>";
            Rn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, T, qn(k, N), q);
          }
        });
      });
    }
    function Is() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const p = y / 8, g = 30 * p, I = 12 * (1 - p) * (1 - p * 0.3) / 2, k = l.length;
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
        ]), y > 0 && y < 8 && (s.push([
          k,
          k + 2
        ]), s.push([
          k + 1,
          k + 3
        ])), y > 0) {
          const N = k - 4;
          for (let q = 0; q < 4; q++) s.push([
            N + q,
            k + q
          ]);
          s.push([
            N,
            k + 1
          ]), s.push([
            N + 1,
            k + 2
          ]), s.push([
            N + 2,
            k + 3
          ]), s.push([
            N + 3,
            k
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
      const a = l.length - 4, i = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) i.set(a + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: i
      });
      const f = 2e8, c = 77e6, r = 5e-3, b = 2e-6, w = 1e-6, M = {
        elasticities: new Map(s.map((y, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          c
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          r
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
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const y = Lt(l, s, {
          supports: d,
          loads: i
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function ks() {
      const l = [], s = [];
      for (let M = 0; M <= 20; M++) {
        const y = M / 20, p = 20 * y, g = 20 * (1 - Math.pow(2 * y - 1, 2)), S = 2;
        l.push([
          p,
          -2 / 2,
          g
        ]), l.push([
          p,
          S / 2,
          g
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
      const i = 2e8, f = 77e6, c = 0.01, r = 5e-6, b = 2e-6, w = {
        elasticities: new Map(s.map((M, y) => [
          y,
          i
        ])),
        shearModuli: new Map(s.map((M, y) => [
          y,
          f
        ])),
        areas: new Map(s.map((M, y) => [
          y,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((M, y) => [
          y,
          r
        ])),
        momentsOfInertiaY: new Map(s.map((M, y) => [
          y,
          r
        ])),
        torsionalConstants: new Map(s.map((M, y) => [
          y,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const M = Lt(l, s, {
          supports: d,
          loads: a
        }, w);
        M && e.deformOutputs && (e.deformOutputs.val = M);
      } catch (M) {
        console.warn("Arco:", M.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function zs() {
      const d = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const g = 60 * p / 16;
        d.push([
          g,
          -6 / 2,
          8
        ]), d.push([
          g,
          6 / 2,
          8
        ]);
      }
      const i = d.length;
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
        const g = 60 * p / 16, S = d.length;
        d.push([
          g,
          -6 / 2,
          0
        ]);
        const I = d.length;
        d.push([
          g,
          6 / 2,
          0
        ]);
        const k = d.length;
        d.push([
          g,
          -6 / 2,
          28
        ]);
        const N = d.length;
        d.push([
          g,
          6 / 2,
          28
        ]), c.push(k, N), a.push([
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
          N
        ]), a.push([
          k,
          N
        ]);
      }
      for (const p of c) {
        const g = d[p][0];
        for (let S = 0; S <= 16; S++) {
          const I = 60 * S / 16;
          if (Math.abs(I - g) > 60 * 0.05 && Math.abs(I - g) < 60 * 0.45) {
            const k = d[p][1] < 0 ? S * 2 : S * 2 + 1;
            S % 2 === 0 && a.push([
              p,
              k
            ]);
          }
        }
      }
      const r = /* @__PURE__ */ new Map();
      r.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), r.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), r.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), r.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let p = i; p < i + f.length * 4; p += 4) r.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), r.set(p + 1, [
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
        supports: r,
        loads: b
      });
      const w = 2e8, M = 77e6, y = {
        elasticities: new Map(a.map((p, g) => [
          g,
          w
        ])),
        shearModuli: new Map(a.map((p, g) => [
          g,
          M
        ])),
        areas: new Map(a.map((p, g) => [
          g,
          g < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((p, g) => [
          g,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((p, g) => [
          g,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((p, g) => [
          g,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = Lt(d, a, {
          supports: r,
          loads: b
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Ts() {
      const d = [], a = [];
      for (let g = 0; g <= 12; g++) {
        const S = g * 3.5, I = g * 5 * Math.PI / 180;
        for (let k = 0; k < 6; k++) {
          const N = I + 2 * Math.PI * k / 6, q = 5 * Math.cos(N), h = 5 * Math.sin(N);
          d.push([
            q,
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
        const S = d.length;
        d.push([
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
      const i = 13 * 6;
      for (let g = 0; g < 12; g++) a.push([
        i + g,
        i + g + 1
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let g = 0; g < 6; g++) f.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      f.set(i, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 12; g++) {
        const S = 10 * g / 12, I = g * 6;
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
      const r = 2e8, b = 77e6, w = 8e-3, M = 1e-5, y = 5e-6, p = {
        elasticities: new Map(a.map((g, S) => [
          S,
          r
        ])),
        shearModuli: new Map(a.map((g, S) => [
          S,
          b
        ])),
        areas: new Map(a.map((g, S) => [
          S,
          w
        ])),
        momentsOfInertiaZ: new Map(a.map((g, S) => [
          S,
          M
        ])),
        momentsOfInertiaY: new Map(a.map((g, S) => [
          S,
          M
        ])),
        torsionalConstants: new Map(a.map((g, S) => [
          S,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const g = Lt(d, a, {
          supports: f,
          loads: c
        }, p);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ls() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const g = p / 20, S = p * 3;
        let I = 8 * (1 - g * 0.7);
        g > 0.4 && (I *= 0.85), g > 0.7 && (I *= 0.7);
        const k = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let N = 0; N < 3; N++) {
          const q = N * 2 * Math.PI / 3 - Math.PI / 2, h = I * Math.cos(q), u = I * Math.sin(q), $ = s.length;
          s.push([
            h,
            u,
            S
          ]), d.push([
            k,
            $
          ]);
          const T = s.length;
          s.push([
            h * 0.5,
            u * 0.5,
            S
          ]), d.push([
            k,
            T
          ]), d.push([
            T,
            $
          ]);
        }
        for (let N = 0; N < 3; N++) {
          const q = k + 1 + N * 2, h = k + 1 + (N + 1) % 3 * 2;
          d.push([
            q,
            h
          ]);
        }
        if (p < 20) {
          const q = k + 7;
          d.push([
            k,
            q
          ]);
          for (let h = 0; h < 3; h++) d.push([
            k + 1 + h * 2,
            q + 1 + h * 2
          ]), d.push([
            k + 2 + h * 2,
            q + 2 + h * 2
          ]), d.push([
            k + 1 + h * 2,
            q + 2 + h * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), i = 1 + 3 * 2;
      for (let p = 0; p < i; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const g = p * i, S = 5 * p / 20;
        f.set(g, [
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
      const c = 35e6, r = 14e6, b = 0.02, w = 5e-5, M = 2e-5, y = {
        elasticities: new Map(d.map((p, g) => [
          g,
          c
        ])),
        shearModuli: new Map(d.map((p, g) => [
          g,
          r
        ])),
        areas: new Map(d.map((p, g) => [
          g,
          b
        ])),
        momentsOfInertiaZ: new Map(d.map((p, g) => [
          g,
          w
        ])),
        momentsOfInertiaY: new Map(d.map((p, g) => [
          g,
          w
        ])),
        torsionalConstants: new Map(d.map((p, g) => [
          g,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = Lt(s, d, {
          supports: a,
          loads: f
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function As() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const w = b * 12, M = 15 - b * 2, y = 20 - b * 3, p = 8 - b, g = t.length;
        for (let I = 0; I <= 4; I++) {
          const k = I / 4, N = -p / 2 + p * k, q = y * (1 - k * k * 0.3);
          for (let h = 0; h <= 12; h++) {
            const u = h / 12, $ = w + q * u, T = M * Math.sin(Math.PI * u) * (1 - k * k * 0.5), F = N;
            t.push([
              $,
              F,
              T
            ]);
          }
        }
        const S = 13;
        for (let I = 0; I < 4; I++) for (let k = 0; k < 12; k++) {
          const N = g + I * S + k, q = g + I * S + k + 1, h = g + (I + 1) * S + k + 1, u = g + (I + 1) * S + k;
          o.push([
            N,
            q,
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
      const a = 35e6, i = 0.2, f = 0.15, c = a / (2 * (1 + i)), r = {
        elasticities: new Map(o.map((b, w) => [
          w,
          a
        ])),
        poissonsRatios: new Map(o.map((b, w) => [
          w,
          i
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
      e.elementInputs && (e.elementInputs.val = r);
      try {
        const b = Lt(t, o, {
          supports: s,
          loads: d
        }, r);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Cs() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const p = y / 15, g = y * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let k = 0; k < 12; k++) {
            const N = 2 * Math.PI * k / 12;
            l.push([
              Math.max(I, 1) * Math.cos(N),
              Math.max(I, 1) * Math.sin(N),
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
      for (let y = 0; y < 15; y++) {
        const p = y * 12, g = (y + 1) * 12;
        for (let I = 0; I < 12; I++) s.push([
          p + I,
          p + (I + 1) % 12
        ]);
        const S = y % 2 === 0 ? 1 : -1;
        for (let I = 0; I < 12; I++) {
          const k = (I + S + 12) % 12;
          s.push([
            p + I,
            g + k
          ]), s.push([
            p + I,
            g + I
          ]);
        }
      }
      const d = 15 * 12;
      for (let y = 0; y < 12; y++) s.push([
        d + y,
        d + (y + 1) % 12
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
      const i = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const p = y * 12, g = 3 * y / 15;
        for (let S = 0; S < 12; S += 3) i.set(p + S, [
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
        loads: i
      });
      const f = 2e8, c = 77e6, r = 6e-3, b = 8e-6, w = 4e-6, M = {
        elasticities: new Map(s.map((y, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          c
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          r
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
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const y = Lt(l, s, {
          supports: a,
          loads: i
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => kt(), 50), Xe(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
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
        const o = (g) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${g}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), i = o("po-L"), f = o("po-As") * 1e-4, c = o("po-nbar"), r = o("po-drift") / 100, b = o("po-ncycles"), w = t.querySelector("#pushover-status");
        w.textContent = "Generando historia de desplazamientos...";
        const M = [], y = r * a, p = 40;
        for (let g = 1; g <= b; g++) {
          const S = y * g / b;
          for (let I = 0; I <= p; I++) M.push(S * Math.sin(2 * Math.PI * I / p));
        }
        w.textContent = `Resolviendo pushover (${M.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await ya(async () => {
            const { cyclicPushover: I } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: I
            };
          }, __vite__mapDeps([0,1]), import.meta.url), S = await g({
            colHeight: a,
            beamLength: i,
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
        } catch (g) {
          w.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
        }
      });
    }
    function ua(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = d - i.left - i.right, c = a - i.top - i.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let r = Math.min(...o), b = Math.max(...o), w = Math.min(...n), M = Math.max(...n);
      r === b && (r -= 0.01, b += 0.01), w === M && (w -= 1, M += 1);
      const y = b - r, p = M - w, g = (N) => i.left + (N - r) / y * f, S = (N) => i.top + c - (N - w) / p * c;
      s.strokeStyle = "#333", s.lineWidth = 0.5, r < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(g(0), i.top), s.lineTo(g(0), i.top + c), s.stroke()), w < 0 && M > 0 && (s.beginPath(), s.moveTo(i.left, S(0)), s.lineTo(i.left + f, S(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(g(o[0]), S(n[0]));
      for (let N = 1; N < o.length; N++) s.lineTo(g(o[N]), S(n[N]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + f / 2, a - 5), s.save(), s.translate(12, i.top + c / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const I = y / 5;
      for (let N = 0; N <= 5; N++) {
        const q = r + I * N;
        s.fillText((q * 1e3).toFixed(1), g(q), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const k = p / 5;
      for (let N = 0; N <= 5; N++) {
        const q = w + k * N;
        s.fillText(q.toFixed(0), i.left - 5, S(q) + 3);
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
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), i = 100, f = [];
      for (let J = 0; J < a; J++) {
        const ee = d * (1 + J * 0.5);
        for (let Z = 0; Z < i; Z++) {
          const oe = Z / i * 2 * Math.PI;
          f.push(ee * Math.sin(oe));
        }
      }
      const c = o / n, r = l * n;
      let b = 0, w = 0, M = -c, y = c, p = 0, g = 0, S = 0, I = 0, k = 0, N = 0;
      const q = [];
      for (const J of f) {
        let ee = M, Z = y, oe = p, j = g, he = S, ze = I, fe = k, R = N, te;
        const se = J - b;
        if (Math.abs(se) < 1e-20) {
          q.push(w);
          continue;
        }
        if ((R === 0 || R === 3) && (se < 0 ? (R = 2, j = -c, he = -o, oe = j, ze = 0, fe = 0) : (R = 1, j = c, he = o, oe = j, ze = 0, fe = 0)), R === 2 && se > 0) {
          R = 1, ze = b, fe = w, b < ee && (ee = b);
          const Se = (Z - ee) / (2 * 1 * c), He = 1 + 0 * Math.pow(Se, 0.8);
          j = (o * He - r * c * He - fe + n * ze) / (n - r), he = o * He + r * (j - c * He), oe = Z;
        } else if (R === 1 && se < 0) {
          R = 2, ze = b, fe = w, b > Z && (Z = b);
          const Se = (Z - ee) / (2 * 1 * c), He = 1 + 0 * Math.pow(Se, 0.8);
          j = (-o * He + r * c * He - fe + n * ze) / (n - r), he = -o * He + r * (j + c * He), oe = ee;
        }
        const Q = Math.abs((oe - j) / c);
        let W = s - 0.925 * Q / (0.15 + Q);
        W < 0.1 && (W = 0.1);
        const le = (J - ze) / (j - ze), de = 1 + Math.pow(Math.abs(le), W), K = Math.pow(de, 1 / W);
        te = l * le + (1 - l) * le / K, te = te * (he - fe) + fe, q.push(te), b = J, w = te, M = ee, y = Z, p = oe, g = j, S = he, I = ze, k = fe, N = R;
      }
      const h = t.querySelector("#nl-canvas"), u = h.getContext("2d"), $ = h.width, T = h.height;
      u.clearRect(0, 0, $, T);
      const F = Math.max(...f.map(Math.abs)), v = Math.max(...q.map(Math.abs)), E = ($ - 40) / (2 * F), m = (T - 40) / (2 * v), C = $ / 2, O = T / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, O), u.lineTo($ - 20, O), u.stroke(), u.beginPath(), u.moveTo(C, 20), u.lineTo(C, T - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", $ - 40, O - 5), u.fillText("\u03C3 (stress)", C + 30, 15), u.fillText(`\xB1${(F * 100).toFixed(1)}%`, $ - 30, O + 12), u.fillText(`\xB1${(v / 1e3).toFixed(0)} MPa`, C + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let J = 0; J < f.length; J++) {
        const ee = C + f[J] * E, Z = O - q[J] * m;
        J === 0 ? u.moveTo(ee, Z) : u.lineTo(ee, Z);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, O - o * m), u.lineTo($ - 20, O - o * m), u.stroke(), u.beginPath(), u.moveTo(20, O + o * m), u.lineTo($ - 20, O + o * m), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, $ - 50, O - o * m - 5);
      const B = t.querySelector("#nl-info");
      B.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
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
      const n = ln(), l = rn(), s = Object.entries(n).map(([c, r]) => `<option value="${r}">${c}</option>`).join(""), d = Object.entries(l).map(([c, r]) => `<option value="${r}">${c}</option>`).join("");
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
      const a = o.querySelector("#asgn-type"), i = o.querySelector("#asgn-params");
      function f() {
        const c = a.value;
        let r = "";
        c === "rect" ? r = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : c === "circ" ? r = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : c === "W" ? r = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : c === "HSS" ? r = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : c === "I-param" ? r = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : c === "tubular" && (r = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), i.innerHTML = r;
      }
      a.addEventListener("change", f), f(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Po = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const c = a.value, r = {
          secType: c
        };
        c === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : c === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : c === "W" || c === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : c === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : c === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((b) => xe.set(b, {
          ...r
        })), o.remove(), Po = null, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((c) => xe.delete(c)), o.remove(), Po = null, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Oo = null;
    function xa(t) {
      var _a2, _b, _c;
      Oo && Oo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), f = a > d && a > i, c = Math.sqrt(d * d + a * a + i * i), r = Oe.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), w = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), M = document.createElement("div");
      M.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", M.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${r + 1} &nbsp;
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
    `, document.body.appendChild(M), Oo = M, M.querySelector("#ep-close").addEventListener("click", () => {
        M.remove(), Oo = null, wo();
      }), M.querySelector("#ep-delete").addEventListener("click", () => {
        ne.add(t), M.remove(), Oo = null, wo(), Ee();
      }), M.querySelector("#ep-inspect").addEventListener("click", () => {
        M.remove(), Oo = null, Es(t);
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
        const c = st();
        if (!c) return null;
        const r = c.controls.object, b = new ke(f[0], f[1], f[2]);
        b.project(r);
        const w = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * w.width,
          y: (-b.y + 1) / 2 * w.height
        };
      }
      function a(f, c, r, b, w) {
        const M = Math.min(f, r), y = Math.max(f, r), p = Math.min(c, b), g = Math.max(c, b), S = e.nodes.val, I = e.elements.val, k = [];
        for (let N = 0; N < I.length; N++) {
          const q = I[N], h = q.map((u) => d(S[u])).filter(Boolean);
          if (h.length !== 0) if (w) h.every(($) => $.x >= M && $.x <= y && $.y >= p && $.y <= g) && k.push(N);
          else {
            if (h.some(($) => $.x >= M && $.x <= y && $.y >= p && $.y <= g)) {
              k.push(N);
              continue;
            }
            if (q.length === 2) {
              const $ = h[0], T = h[1];
              i($.x, $.y, T.x, T.y, M, p, y, g) && k.push(N);
            }
          }
        }
        return k;
      }
      function i(f, c, r, b, w, M, y, p) {
        const g = (I, k) => I >= w && I <= y && k >= M && k <= p;
        if (g(f, c) || g(r, b)) return true;
        const S = (I, k, N, q, h, u, $, T) => {
          const F = (N - I) * (T - u) - (q - k) * ($ - h);
          if (Math.abs(F) < 1e-10) return false;
          const v = ((h - I) * (T - u) - (u - k) * ($ - h)) / F, E = ((h - I) * (q - k) - (u - k) * (N - I)) / F;
          return v >= 0 && v <= 1 && E >= 0 && E <= 1;
        };
        return S(f, c, r, b, w, M, y, M) || S(f, c, r, b, y, M, y, p) || S(f, c, r, b, w, p, y, p) || S(f, c, r, b, w, M, w, p);
      }
      o.addEventListener("mousedown", (f) => {
        jt && (n = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), o.addEventListener("mousemove", (f) => {
        if (no) {
          const r = st();
          if (!r) return;
          const b = ys(f.clientX, f.clientY, r.camera, r.rendererElm);
          if (ht.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== Mo && ta(b.nodeIdx), ht.track && Mo !== null && b.worldPos && b.snapType !== "node") {
            const w = oa(b.worldPos, Mo);
            w && (b.worldPos = w, b.snapType = "grid");
          }
          if (Mo !== null && b.worldPos) {
            const w = e.nodes.val[Mo];
            w && vs(f.clientX, f.clientY, new ke(...w), b.worldPos);
          } else if (ut !== null && b.worldPos) {
            const w = e.nodes.val[ut];
            w && vs(f.clientX, f.clientY, new ke(...w), b.worldPos);
          } else Vt && (Vt.remove(), Vt = null);
          b.nodeIdx, $s(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Kt && !jt) return;
        if (jt && n) {
          const r = f.offsetX - n.x, b = f.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const w = r > 0, M = Math.min(n.x, f.offsetX), y = Math.min(n.y, f.offsetY), p = Math.abs(r), g = Math.abs(b);
            l.style.left = M + "px", l.style.top = y + "px", l.style.width = p + "px", l.style.height = g + "px", l.style.border = w ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = w ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const c = On(f);
        if (c >= 0) ws(c), o.style.cursor = "pointer";
        else {
          if (Wt) {
            const r = st();
            r == null ? void 0 : r.scene.remove(Wt), Wt = null, r == null ? void 0 : r.render();
          }
          o.style.cursor = jt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (f) => {
        if (jt && n) {
          const c = f.offsetX - n.x, r = f.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(r) > s) {
            const b = c > 0, w = a(n.x, n.y, f.offsetX, f.offsetY, b);
            f.ctrlKey || f.metaKey || (ft.clear(), go()), w.forEach((y) => {
              ft.has(y) || (ft.add(y), Cn(y));
            }), xo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (f) => {
        if (no) {
          const c = st();
          if (!c) return;
          const r = ys(f.clientX, f.clientY, c.camera, c.rendererElm);
          (r.worldPos || r.nodeIdx !== null) && (sa(r), $s(r));
          return;
        }
        if (jt) {
          if (l) return;
          const c = On(f), r = f.ctrlKey || f.metaKey;
          if (c >= 0) {
            if (r) if (ft.has(c)) {
              ft.delete(c);
              const b = ho.findIndex((w) => w.__elemIdx === c);
              if (b >= 0) {
                const w = st();
                w == null ? void 0 : w.scene.remove(ho[b]), ho[b].geometry.dispose(), ho[b].material.dispose(), ho.splice(b, 1), w == null ? void 0 : w.render();
              }
            } else ft.add(c), Cn(c);
            else ft.clear(), go(), ft.add(c), Cn(c);
            xo();
          } else r || (ft.clear(), go(), xo());
          return;
        }
        if (Kt) {
          const c = On(f);
          c >= 0 && (ws(c), xa(c));
        }
      });
    }, 500), Ho.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Xe();
    }), Ge.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !ye), ye = t, (_a2 = we.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ye), ye) {
        const n = st();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Re = n.settings.loads.rawVal, n.settings.loads.val = false), Mn(), we.querySelector("#cad3d-mode-prev").style.display = "", we.querySelector("#cad3d-mode-next").style.display = "", we.querySelector("#cad3d-mode-label").style.display = "";
      } else wn(), we.querySelector("#cad3d-mode-prev").style.display = "none", we.querySelector("#cad3d-mode-next").style.display = "none", we.querySelector("#cad3d-mode-label").style.display = "none", A && A !== "placa-q4" && A !== "placa-3q" && Ee(), setTimeout(() => {
        var _a3;
        const n = st();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Re && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ye ? "ON" : "OFF"}`);
    }, Ge.setMode = (t) => {
      var _a2;
      if (!(ae == null ? void 0 : ae.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Me = Math.max(0, Math.min(t, ae.modeShapes.length - 1));
      const o = ae.modeShapes[Me], { extent: n } = mo();
      let l = 0;
      for (let d = 0; d < ie.length; d++) {
        const a = o[d * 6] || 0, i = o[d * 6 + 1] || 0, f = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + f * f));
      }
      ve = l > 1e-12 ? n * 0.05 / l : 1, Jo();
      const s = we.querySelector("#cad3d-mode-label");
      s && ae.frequencies && (s.textContent = `Modo ${Me + 1} \u2014 ${ae.frequencies[Me].toFixed(2)} Hz`), console.log(`Modo ${Me + 1}: f = ${(_a2 = ae.frequencies) == null ? void 0 : _a2[Me].toFixed(4)} Hz`);
    }, window.cad = Ge, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(we), document.body.appendChild(Te.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ze("edificio"), Ee(), bs("edificio"));
    }, 100), document.body.appendChild(Ka());
    const Fs = document.createElement("span");
    return Fs.style.display = "none", Fs;
  };
});
export {
  __tla,
  js as a,
  Ra as c,
  bl as g
};
