const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-C1Mz4Itg.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-C93PWeaP.js","./cyclicPushoverCpp-C_AWr1zl.js"])))=>i.map(i=>d[i]);
import { d as kt, _ as ea, p as Uo, m as Va, s as Ua, __tla as __tla_0 } from "./didacticCpp-C93PWeaP.js";
import { v as Jn, P as no, g as Xa, a as Ka, o as Za } from "./theme-CzzIlc4y.js";
import { G as so, b as Qa, M as ta, D as na, B as tn, c as xo, d as el, C as tl, e as ca, V as Oe, P as In, R as oa, f as sa, g as Wn, h as Gn, i as nl, S as ol, j as sl, F as Ln, a as Yn, L as Cn, k as al, l as ll, A as co, T as Xo, m as po, n as fo, o as rl, p as il } from "./Text-CBH-tcJP.js";
import { g as vo, b as yo, a as gn } from "./analyze-ClLKGn9k.js";
import { g as hn, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as Rn, s as xn, m as on, t as os } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
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
  function cl(e, b) {
    return e === "kN" && b === "m" ? "kPa" : e === "kN" && b === "mm" || e === "N" && b === "mm" ? "MPa" : e === "N" && b === "m" ? "Pa" : e === "kip" && b === "in" ? "ksi" : e === "kip" && b === "ft" ? "ksf" : `${e}/${b}\xB2`;
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
  function Pn(e, b) {
    const R = ns.find((W) => W.id === e), $ = Vn.find((W) => W.id === b), J = R.toKN, H = $.toM, U = (W, ye, z) => z / (Math.pow(J, W) * Math.pow(H, ye));
    let Y, _;
    switch (e) {
      case "kN":
        Y = 10, _ = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        Y = 1, _ = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        Y = 1e3, _ = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        Y = 10, _ = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        Y = 5e3, _ = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        Y = 1e4, _ = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${R.label}, ${$.label}`,
      force: R.label,
      length: $.label,
      stress: cl(e, b),
      moment: `${R.label}\xB7${$.label}`,
      E: U(1, -2, Fn.E),
      G: U(1, -2, Fn.G),
      A: U(0, 2, Fn.A),
      Iz: U(0, 4, Fn.Iz),
      Iy: U(0, 4, Fn.Iy),
      J: U(0, 4, Fn.J),
      rho: U(1, -4, Fn.rho),
      spanRange: $.spanRange,
      heightRange: $.heightRange,
      defaultSpan: $.defaultSpan,
      defaultHeight: $.defaultHeight,
      defaultForce: Y,
      forceRange: _,
      galponSpan: $.galponSpan,
      galponLength: $.galponLength,
      galponHeight: $.galponHeight,
      galponRise: $.galponRise
    };
  }
  Pn("kN", "m"), Pn("kip", "in");
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
    const b = e.force, [R, $, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: R,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: R,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: R,
          max: $,
          step: J,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
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
          min: R,
          max: 0,
          step: J,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: R,
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
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let b = false;
    function R($, J) {
      var _a, _b;
      if (!$.frequencies || $.frequencies.length === 0) {
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
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${J.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (Y += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const _ of J.properties) Y += `<span style="color:#888">${_}</span>
`;
      Y += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const _ of H) Y += `<th style="padding:2px 5px">${_}</th>`;
      if (Y += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, $.frequencies.forEach((_, W) => {
        var _a2;
        const ye = _ > 0 ? 1 / _ : 0, z = _ * 2 * Math.PI, Z = ((_a2 = $.massParticipation) == null ? void 0 : _a2[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) U[ve] += Z[ve];
        Y += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${_.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ye.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const me = (Z[ve] * 100).toFixed(1), ie = Z[ve] > 0.5 ? "#f00" : Z[ve] > 0.1 ? "#ff0" : "#0f0";
          Y += `<td style="padding:2px 5px; text-align:right; color:${ie}">${me}%</td>`;
        }
        Y += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(U[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[5] * 100).toFixed(1)}%</td></tr>`;
      }), Y += "</table></div>", e.innerHTML = Y, b) {
        const _ = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        _ && (_.style.display = "none"), W && (W.textContent = "\u25A2", W.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const _ = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        b ? (_.style.display = "none", W.textContent = "\u25A2", W.title = "Restaurar") : (_.style.display = "block", W.textContent = "\u25AC", W.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const _ = [];
        _.push(`Modal Analysis \u2014 ${J.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        _.push(W), _.push("-".repeat(W.length));
        const ye = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        $.frequencies.forEach((Z, ve) => {
          var _a2;
          const me = Z > 0 ? 1 / Z : 0, ie = Z * 2 * Math.PI, ne = ((_a2 = $.massParticipation) == null ? void 0 : _a2[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let B = 0; B < 6; B++) ye[B] += ne[B];
          const q = ne.map((B) => ((B * 100).toFixed(1) + "%").padStart(6)).join(" ");
          _.push(`${String(ve + 1).padStart(4)}  ${Z.toFixed(4).padStart(9)}  ${me.toFixed(4).padStart(9)}  ${ie.toFixed(2).padStart(9)}  ${q}  ${(ye[0] * 100).toFixed(1).padStart(5)}%  ${(ye[1] * 100).toFixed(1).padStart(5)}%  ${(ye[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(_.join(`
`));
        const z = e.querySelector("#modal-copy");
        z.textContent = "\u2713", setTimeout(() => z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: R
    };
  };
  const Fe = 64516e-8, N = 416231e-12, te = 0.0254, kn = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Fe,
      Iz: 16.4 * N,
      Iy: 2.2 * N,
      J: 0.0405 * N,
      d: 5.9 * te,
      bf: 3.94 * te
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Fe,
      Iz: 29.1 * N,
      Iy: 9.32 * N,
      J: 0.103 * N,
      d: 5.99 * te,
      bf: 5.99 * te
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Fe,
      Iz: 41.4 * N,
      Iy: 13.3 * N,
      J: 0.204 * N,
      d: 6.2 * te,
      bf: 6.02 * te
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Fe,
      Iz: 30.8 * N,
      Iy: 2.09 * N,
      J: 0.0426 * N,
      d: 7.89 * te,
      bf: 3.94 * te
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Fe,
      Iz: 61.9 * N,
      Iy: 7.97 * N,
      J: 0.172 * N,
      d: 8.14 * te,
      bf: 5.25 * te
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Fe,
      Iz: 82.7 * N,
      Iy: 18.3 * N,
      J: 0.346 * N,
      d: 7.93 * te,
      bf: 6.5 * te
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Fe,
      Iz: 110 * N,
      Iy: 37.1 * N,
      J: 0.536 * N,
      d: 8 * te,
      bf: 7.995 * te
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 146 * N,
      Iy: 49.1 * N,
      J: 0.871 * N,
      d: 8.25 * te,
      bf: 8.07 * te
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 184 * N,
      Iy: 60.9 * N,
      J: 1.45 * N,
      d: 8.5 * te,
      bf: 8.11 * te
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 272 * N,
      Iy: 88.6 * N,
      J: 3.54 * N,
      d: 9 * te,
      bf: 8.28 * te
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Fe,
      Iz: 53.8 * N,
      Iy: 2.18 * N,
      J: 0.0547 * N,
      d: 9.87 * te,
      bf: 3.96 * te
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 118 * N,
      Iy: 11.4 * N,
      J: 0.239 * N,
      d: 10.17 * te,
      bf: 5.75 * te
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Fe,
      Iz: 171 * N,
      Iy: 36.6 * N,
      J: 0.583 * N,
      d: 9.73 * te,
      bf: 7.96 * te
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Fe,
      Iz: 272 * N,
      Iy: 93.4 * N,
      J: 1.39 * N,
      d: 9.98 * te,
      bf: 10 * te
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Fe,
      Iz: 394 * N,
      Iy: 134 * N,
      J: 3.56 * N,
      d: 10.4 * te,
      bf: 10.13 * te
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Fe,
      Iz: 623 * N,
      Iy: 207 * N,
      J: 10.9 * N,
      d: 11.1 * te,
      bf: 10.34 * te
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Fe,
      Iz: 88.6 * N,
      Iy: 2.36 * N,
      J: 0.0704 * N,
      d: 11.91 * te,
      bf: 3.97 * te
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Fe,
      Iz: 156 * N,
      Iy: 4.66 * N,
      J: 0.293 * N,
      d: 12.31 * te,
      bf: 4.03 * te
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Fe,
      Iz: 204 * N,
      Iy: 17.3 * N,
      J: 0.3 * N,
      d: 12.22 * te,
      bf: 6.49 * te
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 310 * N,
      Iy: 44.1 * N,
      J: 0.906 * N,
      d: 11.94 * te,
      bf: 8.01 * te
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Fe,
      Iz: 425 * N,
      Iy: 95.8 * N,
      J: 1.58 * N,
      d: 12.06 * te,
      bf: 9.99 * te
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Fe,
      Iz: 597 * N,
      Iy: 195 * N,
      J: 4.05 * N,
      d: 12.25 * te,
      bf: 12.04 * te
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Fe,
      Iz: 833 * N,
      Iy: 270 * N,
      J: 8.44 * N,
      d: 12.71 * te,
      bf: 12.16 * te
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Fe,
      Iz: 1070 * N,
      Iy: 345 * N,
      J: 16 * N,
      d: 13.12 * te,
      bf: 12.32 * te
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 199 * N,
      Iy: 7 * N,
      J: 0.208 * N,
      d: 13.74 * te,
      bf: 5 * te
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Fe,
      Iz: 291 * N,
      Iy: 19.6 * N,
      J: 0.38 * N,
      d: 13.84 * te,
      bf: 6.73 * te
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Fe,
      Iz: 385 * N,
      Iy: 26.7 * N,
      J: 0.798 * N,
      d: 14.1 * te,
      bf: 6.77 * te
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 485 * N,
      Iy: 51.4 * N,
      J: 1.45 * N,
      d: 13.79 * te,
      bf: 8.03 * te
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Fe,
      Iz: 640 * N,
      Iy: 107 * N,
      J: 2.19 * N,
      d: 13.89 * te,
      bf: 9.99 * te
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Fe,
      Iz: 882 * N,
      Iy: 148 * N,
      J: 5.07 * N,
      d: 14.31 * te,
      bf: 10.13 * te
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Fe,
      Iz: 1240 * N,
      Iy: 447 * N,
      J: 7.12 * N,
      d: 14.32 * te,
      bf: 14.61 * te
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Fe,
      Iz: 1530 * N,
      Iy: 548 * N,
      J: 12.3 * N,
      d: 14.66 * te,
      bf: 14.73 * te
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Fe,
      Iz: 2140 * N,
      Iy: 838 * N,
      J: 23.7 * N,
      d: 15.22 * te,
      bf: 15.65 * te
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Fe,
      Iz: 301 * N,
      Iy: 9.59 * N,
      J: 0.262 * N,
      d: 15.69 * te,
      bf: 5.5 * te
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Fe,
      Iz: 448 * N,
      Iy: 24.5 * N,
      J: 0.545 * N,
      d: 15.86 * te,
      bf: 6.99 * te
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 659 * N,
      Iy: 37.2 * N,
      J: 1.52 * N,
      d: 16.26 * te,
      bf: 7.07 * te
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 954 * N,
      Iy: 119 * N,
      J: 2.39 * N,
      d: 16.33 * te,
      bf: 10.24 * te
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Fe,
      Iz: 1300 * N,
      Iy: 163 * N,
      J: 5.45 * N,
      d: 16.75 * te,
      bf: 10.37 * te
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Fe,
      Iz: 510 * N,
      Iy: 15.3 * N,
      J: 0.506 * N,
      d: 17.7 * te,
      bf: 6 * te
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 800 * N,
      Iy: 40.1 * N,
      J: 1.24 * N,
      d: 17.99 * te,
      bf: 7.5 * te
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Fe,
      Iz: 1170 * N,
      Iy: 60.3 * N,
      J: 3.49 * N,
      d: 18.47 * te,
      bf: 7.64 * te
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Fe,
      Iz: 1750 * N,
      Iy: 201 * N,
      J: 5.86 * N,
      d: 18.59 * te,
      bf: 11.15 * te
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Fe,
      Iz: 843 * N,
      Iy: 20.7 * N,
      J: 0.77 * N,
      d: 20.66 * te,
      bf: 6.5 * te
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Fe,
      Iz: 1330 * N,
      Iy: 57.5 * N,
      J: 1.83 * N,
      d: 20.99 * te,
      bf: 8.24 * te
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Fe,
      Iz: 1830 * N,
      Iy: 81.4 * N,
      J: 4.34 * N,
      d: 21.43 * te,
      bf: 8.36 * te
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Fe,
      Iz: 2670 * N,
      Iy: 274 * N,
      J: 6.83 * N,
      d: 21.51 * te,
      bf: 12.34 * te
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Fe,
      Iz: 1350 * N,
      Iy: 29.1 * N,
      J: 1.18 * N,
      d: 23.57 * te,
      bf: 7.01 * te
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Fe,
      Iz: 2100 * N,
      Iy: 82.5 * N,
      J: 2.68 * N,
      d: 23.92 * te,
      bf: 8.99 * te
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Fe,
      Iz: 3100 * N,
      Iy: 259 * N,
      J: 4.72 * N,
      d: 24.06 * te,
      bf: 12.75 * te
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Fe,
      Iz: 4020 * N,
      Iy: 340 * N,
      J: 9.5 * N,
      d: 24.48 * te,
      bf: 12.86 * te
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Fe,
      Iz: 4580 * N,
      Iy: 391 * N,
      J: 12.6 * N,
      d: 24.74 * te,
      bf: 12.9 * te
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Fe,
      Iz: 5680 * N,
      Iy: 479 * N,
      J: 21.2 * N,
      d: 25.24 * te,
      bf: 12.9 * te
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Fe,
      Iz: 2850 * N,
      Iy: 106 * N,
      J: 2.81 * N,
      d: 26.71 * te,
      bf: 9.96 * te
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Fe,
      Iz: 4090 * N,
      Iy: 159 * N,
      J: 6.77 * N,
      d: 27.29 * te,
      bf: 10.07 * te
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Fe,
      Iz: 3610 * N,
      Iy: 115 * N,
      J: 3.06 * N,
      d: 29.53 * te,
      bf: 10.4 * te
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Fe,
      Iz: 4930 * N,
      Iy: 164 * N,
      J: 6.43 * N,
      d: 30.01 * te,
      bf: 10.5 * te
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Fe,
      Iz: 5900 * N,
      Iy: 187 * N,
      J: 5.3 * N,
      d: 32.86 * te,
      bf: 11.48 * te
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Fe,
      Iz: 7800 * N,
      Iy: 225 * N,
      J: 7 * N,
      d: 35.55 * te,
      bf: 11.95 * te
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Fe,
      Iz: 8.22 * N,
      Iy: 8.22 * N,
      J: 13.4 * N,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Fe,
      Iz: 10.7 * N,
      Iy: 10.7 * N,
      J: 17.9 * N,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Fe,
      Iz: 12.3 * N,
      Iy: 12.3 * N,
      J: 21 * N,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 30.3 * N,
      Iy: 30.3 * N,
      J: 48.3 * N,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 41.1 * N,
      Iy: 41.1 * N,
      J: 66.9 * N,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Fe,
      Iz: 49.6 * N,
      Iy: 49.6 * N,
      J: 82.2 * N,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Fe,
      Iz: 70.7 * N,
      Iy: 70.7 * N,
      J: 112 * N,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 98 * N,
      Iy: 98 * N,
      J: 158 * N,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Fe,
      Iz: 122 * N,
      Iy: 122 * N,
      J: 199 * N,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 202 * N,
      Iy: 202 * N,
      J: 323 * N,
      d: 10 * te,
      bf: 10 * te
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Fe,
      Iz: 254 * N,
      Iy: 254 * N,
      J: 412 * N,
      d: 10 * te,
      bf: 10 * te
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Fe,
      Iz: 355 * N,
      Iy: 355 * N,
      J: 564 * N,
      d: 12 * te,
      bf: 12 * te
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Fe,
      Iz: 452 * N,
      Iy: 452 * N,
      J: 724 * N,
      d: 12 * te,
      bf: 12 * te
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Fe,
      Iz: 18 * N,
      Iy: 9.58 * N,
      J: 22.6 * N,
      d: 6 * te,
      bf: 4 * te
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Fe,
      Iz: 23.8 * N,
      Iy: 12.3 * N,
      J: 30.3 * N,
      d: 6 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 33.6 * N,
      Iy: 11.8 * N,
      J: 33 * N,
      d: 8 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 45.1 * N,
      Iy: 15 * N,
      J: 44.5 * N,
      d: 8 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Fe,
      Iz: 46.1 * N,
      Iy: 28.2 * N,
      J: 61.3 * N,
      d: 8 * te,
      bf: 6 * te
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Fe,
      Iz: 63 * N,
      Iy: 37.5 * N,
      J: 84.6 * N,
      d: 8 * te,
      bf: 6 * te
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 103 * N,
      Iy: 47.1 * N,
      J: 115 * N,
      d: 10 * te,
      bf: 6 * te
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 196 * N,
      Iy: 102 * N,
      J: 249 * N,
      d: 12 * te,
      bf: 8 * te
    }
  ];
  function mo() {
    const e = {};
    return kn.forEach((b, R) => {
      b.type === "W" && (e[b.name] = R);
    }), e;
  }
  function bo() {
    const e = {};
    return kn.forEach((b, R) => {
      b.type === "HSS" && (e[b.name] = R);
    }), e;
  }
  function ul(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: R, elementInputs: $, nodeInputs: J, deformOutputs: H } = e, U = b.length * 6, Y = R.length, _ = R.filter((ie) => ie.length === 2).length, W = R.filter((ie) => ie.length >= 3).length, ye = document.createElement("div");
    ye.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${Y} (${_} frames, ${W} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${U}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((ie, ne) => {
      z += `<tr><td>${ne}</td><td>${ot(ie[0])}</td><td>${ot(ie[1])}</td><td>${ot(ie[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', R.forEach((ie, ne) => {
      var _a2, _b2, _c2, _d2;
      const q = ie.length === 2, B = ie.map((he) => b[he]), G = q ? Rn(xn(B[1], B[0])) : 0, ce = ((_a2 = $.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, $e = ((_b2 = $.areas) == null ? void 0 : _b2.get(ne)) ?? 0, Te = ((_c2 = $.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Ve = ((_d2 = $.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      z += `<tr><td>${ne}</td><td>${q ? "Frame" : "Shell"}</td><td>${ie.join(" \u2192 ")}</td>`, z += `<td>${ot(G)}</td><td>${ot(ce)}</td><td>${ot($e)}</td><td>${ot(Te)}</td><td>${ot(Ve)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", _ > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += bl(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ie = 0; ie < Y; ie++) {
      const ne = R[ie], q = ne.map((at) => b[at]);
      if (!(ne.length === 2)) continue;
      const G = Rn(xn(q[1], q[0])), ce = ((_a = $.elasticities) == null ? void 0 : _a.get(ie)) ?? 0, $e = ((_b = $.areas) == null ? void 0 : _b.get(ie)) ?? 0, Te = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(ie)) ?? 0, Ve = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(ie)) ?? 0, he = ((_e = $.shearModuli) == null ? void 0 : _e.get(ie)) ?? 0, Be = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(ie)) ?? 0;
      let He = null, be = null, Ee = null;
      try {
        He = vo(q, $, ie), be = yo(q), Ee = on(os(be), on(He, be));
      } catch {
        continue;
      }
      const ze = xn(q[1], q[0]), Je = ze[0] / G, st = ze[1] / G, Ue = ze[2] / G;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${ie}">\u25B6 Element ${ie} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${ot(G)}</h3>`, z += `<div id="rpt-elem${ie}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${ot(ce)} &nbsp;&nbsp; A = ${ot($e)} &nbsp;&nbsp; I<sub>z</sub> = ${ot(Te)} &nbsp;&nbsp; I<sub>y</sub> = ${ot(Ve)} &nbsp;&nbsp; G = ${ot(he)} &nbsp;&nbsp; J = ${ot(Be)}<br/>`, z += `EA/L = ${ot(ce)}\xB7${ot($e)}/${ot(G)} = <b>${ot(ce * $e / G)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${ot(ce)}\xB7${ot(Te)}/${ot(G)}\xB3 = <b>${ot(12 * ce * Te / G ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${ot(ce)}\xB7${ot(Ve)}/${ot(G)}\xB3 = <b>${ot(12 * ce * Ve / G ** 3)}</b><br/>`, z += `GJ/L = ${ot(he)}\xB7${ot(Be)}/${ot(G)} = <b>${ot(he * Be / G)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${go(Je)}, m = ${go(st)}, n = ${go(Ue)}, D = ${go(Math.sqrt(Je ** 2 + st ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += Ko(He, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += Ko(be, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += Ko(Ee, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Y - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += gl(R, b.length), z += "<h2>5. Boundary Conditions</h2>";
    const Z = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Z) z += `<th>${ie}</th>`;
      z += "</tr></thead><tbody>", J.supports.forEach((ie, ne) => {
        z += `<tr><td>${ne}</td>`, ie.forEach((q, B) => {
          q && ve.push(ne * 6 + B), z += `<td class="${q ? "fixed" : ""}">${q ? "Fixed" : "Free"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += `<div class="rpt-eq-small">Fixed DOFs: [${ve.join(", ")}] \u2192 ${ve.length} constraints<br/>`, z += `Free DOFs: ${U} \u2212 ${ve.length} = <b>${U - ve.length}</b></div>`, z += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ie = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of ie) z += `<th>${ne}</th>`;
      z += "</tr></thead><tbody>", J.loads.forEach((ne, q) => {
        z += `<tr><td>${q}</td>`, ne.forEach((B) => {
          const G = Math.abs(B) > 1e-10;
          z += `<td class="${G ? "nz" : ""}">${G ? ot(B) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Z) z += `<th>${ie}</th>`;
      z += "</tr></thead><tbody>", H.deformations.forEach((ie, ne) => {
        z += `<tr><td>${ne}</td>`, ie.forEach((q) => {
          const B = Math.abs(q) > 1e-10;
          z += `<td class="${B ? "nz" : ""}">${ot(q, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Z) z += `<th>${ie}</th>`;
      z += "</tr></thead><tbody>", H.reactions.forEach((ie, ne) => {
        z += `<tr><td>${ne}</td>`, ie.forEach((q) => {
          const B = Math.abs(q) > 1e-10;
          z += `<td class="${B ? "nz-react" : ""}">${B ? ot(q, 4) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>7. Internal Forces</h2>", z += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", z += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', z += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const ie = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of ie) z += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of ie) z += `<th>${ne}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let ne = 0; ne < Y; ne++) {
        const q = R[ne];
        if (q.length !== 2) continue;
        const B = q.map((G) => b[G]);
        try {
          const G = vo(B, $, ne), ce = yo(B), $e = [];
          for (const he of q) {
            const Be = ((_g = H.deformations) == null ? void 0 : _g.get(he)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            $e.push(...Be);
          }
          const Te = on(ce, $e), Ve = on(G, Te);
          z += `<tr><td>${ne}</td><td>${q.join("\u2192")}</td>`;
          for (let he = 0; he < 12; he++) {
            const Be = Math.abs(Ve[he]) > 1e-10;
            z += `<td class="${Be ? "nz" : ""}">${ot(Ve[he], 2)}</td>`;
          }
          z += "</tr>";
        } catch {
        }
      }
      z += "</tbody></table>";
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
    return ye.innerHTML = me + z, (_h = ye.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ye.remove()), ye.querySelectorAll("[data-toggle]").forEach((ie) => {
      ie.addEventListener("click", () => {
        const ne = ie.dataset.toggle, q = ye.querySelector(`#rpt-${ne}`);
        if (q) {
          const B = q.style.display !== "none";
          q.style.display = B ? "none" : "", ie.textContent = ie.textContent.replace(/^[▼▶]/, B ? "\u25B6" : "\u25BC");
        }
      });
    }), ye;
  }
  function ot(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function go(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Ko(e, b) {
    var _a;
    const R = Math.min(b, 12);
    let $ = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < R; J++) {
      $ += "<tr>";
      for (let H = 0; H < R; H++) {
        const U = ((_a = e[J]) == null ? void 0 : _a[H]) ?? 0, Y = Math.abs(U) < 1e-10;
        $ += `<td class="${Y ? "z" : ""} ${J === H && !Y ? "diag" : ""}">${Y ? "0" : ml(U)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", b > R && ($ += `<div style="color:#888;font-size:9pt">(showing ${R}\xD7${R} of ${b}\xD7${b})</div>`), $ += "</div>", $;
  }
  function ml(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function bl() {
    const U = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (_) => 1 - 3 * _ ** 2 + 2 * _ ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (_) => _ * (1 - _) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (_) => 3 * _ ** 2 - 2 * _ ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (_) => _ ** 2 * (_ - 1)
      }
    ];
    let Y = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    Y += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, Y += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', Y += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, Y += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, Y += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const _ of U) {
      let W = "";
      for (let ve = 0; ve <= 80; ve++) {
        const me = ve / 80, ie = 30 + me * 540, ne = 180 / 2 - _.fn(me) * 60;
        W += (ve === 0 ? "M" : "L") + `${ie.toFixed(1)},${ne.toFixed(1)}`;
      }
      Y += `<path d="${W}" fill="none" stroke="${_.color}" stroke-width="2.5"/>`;
      const ye = 0.75, z = 30 + ye * 540 + 8, Z = 180 / 2 - _.fn(ye) * 60 - 6;
      Y += `<text x="${z}" y="${Z}" fill="${_.color}" font-size="11" font-weight="bold" font-family="sans-serif">${_.name}</text>`;
    }
    return Y += "</svg>", Y;
  }
  function gl(e, b) {
    const R = b * 6, $ = Math.min(R, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let U = 0; U < $; U++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
    J += "</tr>";
    const H = Array.from({
      length: $
    }, () => Array($).fill(0));
    for (let U = 0; U < e.length; U++) {
      const Y = e[U].map((_) => _ * 6);
      for (const _ of Y) for (const W of Y) for (let ye = 0; ye < 6; ye++) for (let z = 0; z < 6; z++) {
        const Z = _ + ye, ve = W + z;
        Z < $ && ve < $ && H[Z][ve]++;
      }
    }
    for (let U = 0; U < $; U++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
      for (let Y = 0; Y < $; Y++) {
        const _ = H[U][Y], W = _ === 0 ? "#fff" : _ === 1 ? "#e8f0fe" : _ === 2 ? "#c6dcf5" : "#a0c4e8", ye = _ === 0 ? "" : _.toString();
        J += `<td style="background:${W};color:#003366">${ye}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", R > $ && (J += `<div style="color:#888;font-size:9pt">(showing ${$}\xD7${$} of ${R}\xD7${R})</div>`), J;
  }
  let Zo = false;
  function hl(e) {
    if (Zo || window.katex) {
      Zo = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const R = document.createElement("script");
    R.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", R.onload = () => {
      Zo = true, e();
    }, document.head.appendChild(R);
  }
  function aa(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function xl(e, b, R, $, J, H) {
    var _a, _b, _c, _d, _e, _f;
    const U = R[e], Y = U.map((be) => b[be]), _ = U.length === 2, W = _ ? Rn(xn(Y[1], Y[0])) : 0, ye = ((_a = $.elasticities) == null ? void 0 : _a.get(e)) ?? 0, z = ((_b = $.areas) == null ? void 0 : _b.get(e)) ?? 0, Z = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ve = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, me = ((_e = $.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ie = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, q = null, B = null;
    try {
      ne = vo(Y, $, e), q = yo(Y), B = on(os(q), on(ne, q));
    } catch {
    }
    const G = _ ? xn(Y[1], Y[0]) : [
      0,
      0,
      0
    ], ce = W > 0 ? G[0] / W : 0, $e = W > 0 ? G[1] / W : 0, Te = W > 0 ? G[2] / W : 0, Ve = Math.sqrt(ce ** 2 + $e ** 2), he = [];
    if ((J == null ? void 0 : J.deformations) && _) for (const be of U) {
      const Ee = J.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      he.push(...Ee);
    }
    let Be = [], He = [];
    if (he.length === 12 && q && ne) {
      try {
        Be = on(q, he);
      } catch {
        Be = Array(12).fill(0);
      }
      try {
        He = on(ne, Be);
      } catch {
        He = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: U,
      elmNodes: Y,
      isFrame: _,
      L: W,
      E: ye,
      A: z,
      Iz: Z,
      Iy: ve,
      G: me,
      J: ie,
      kLocal: ne,
      T: q,
      kGlobal: B,
      l: ce,
      m: $e,
      n: Te,
      D: Ve,
      uGlobal: he,
      uLocal: Be,
      fLocal: He,
      dOut: J,
      aOut: H,
      totalNodes: b.length
    };
  }
  function vl(e, b, R, $, J, H) {
    var _a, _b;
    const U = xl(e, b, R, $, J, H), Y = document.createElement("div");
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
  `, Y.querySelectorAll(".er-tab").forEach((_) => {
      _.addEventListener("click", () => {
        Y.querySelectorAll(".er-tab").forEach((ye) => ye.classList.remove("active")), _.classList.add("active");
        const W = _.dataset.tab;
        Y.querySelectorAll(".er-body").forEach((ye) => ye.style.display = "none"), Y.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = Y.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => Y.remove()), (_b = Y.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const _ = Y.classList.toggle("er-fullscreen-mode"), W = Y.querySelector("#er-fullscreen");
      W && (W.textContent = _ ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const _ = Y.querySelector("#er-sf-canvas");
      _ && Qo(_);
      const W = Y.querySelector("#er-sf-canvas-math");
      W && Qo(W);
    }, 50), hl(() => {
      const _ = Y.querySelector("#er-body-math");
      _ && (_.innerHTML = la(U)), setTimeout(() => {
        const W = Y.querySelector("#er-sf-canvas-math");
        W && Qo(W);
      }, 50), Y.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const ye = W.dataset.toggle, z = Y.querySelector(`#er-${ye}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), Y;
  }
  function yl(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ye(e.E)}</td><td>A</td><td>${Ye(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ye(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ye(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ye(e.G)}</td><td>J</td><td>${Ye(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += ao(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += ao(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += ao(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let $ = 0; $ < e.elem.length; $++) {
        b += `<div class="er-sub">Nodo ${e.elem[$]}: `;
        for (let J = 0; J < 6; J++) {
          const H = e.uGlobal[$ * 6 + J];
          b += `${R[J]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ye(H, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((R) => R !== 0)) {
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const $ of R) b += `<th>${$}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function la(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const R = (ye) => aa(ye), $ = (ye) => aa(ye, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${$("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${R("\\text{Nodo } i")} = (${e.elmNodes[0].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${R("\\text{Nodo } j")} = (${e.elmNodes[1].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${$(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ye(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${$("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${$("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${R("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${$("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${R("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${$("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${$("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${$("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${$("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${R("I_z")})</div>`, b += `<div class="er-eq">${$("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${R("I_y")})</div>`, b += `<div class="er-eq">${$("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${$("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${$(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ye(e.E)} \\times ${Ye(e.A)} = \\mathbf{${Ye(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ye(e.E)} \\times ${Ye(e.Iz)} = \\mathbf{${Ye(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ye(e.E)} \\times ${Ye(e.Iy)} = \\mathbf{${Ye(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ye(e.G)} \\times ${Ye(e.J)} = \\mathbf{${Ye(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${R("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, U = e.E * e.Iy / e.L ** 3, Y = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${$("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${$("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${R("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${$("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.E)}\\times${Ye(e.A)}}{${Ye(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${$(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ye(J)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${R("v(\\xi)")}</p>`, b += `<div class="er-eq">${$("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${$("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${$("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${R("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${$("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${R("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${$("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ye(e.E)} \\times ${Ye(e.Iz)}}{${Ye(e.L)}^3} = \\mathbf{${Ye(12 * H)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${R("\\theta_x")} y ${R("GJ")}:</p>`, b += `<div class="er-eq">${$(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.G)}\\times${Ye(e.J)}}{${Ye(e.L)}} = \\mathbf{${Ye(Y)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${R("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${$("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${$(`\\frac{EA}{L} = \\mathbf{${Ye(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ye(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ye(12 * U)}}`)}</div>`, b += `<div class="er-eq">${$(`\\frac{GJ}{L} = \\mathbf{${Ye(Y)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ye(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ye(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${$(`\\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${R("\\mathbf{K}_{local}")} (12x12)</div>`, b += ao(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${$(`l = \\frac{x_j - x_i}{L} = ${ho(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${ho(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${ho(e.n)}`)}</div>`, b += `<div class="er-eq">${$(`D = \\sqrt{l^2 + m^2} = ${ho(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${R(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ye = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${$(ye)}</div>`;
    } else b += `<div class="er-eq">${$("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${$("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${R("\\mathbf{K}_{global}")} = ${R("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += ao(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const _ = e.elem[0] * 6, W = e.elem[1] * 6;
    if (b += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${_} \\ldots ${_ + 5}]`)}</div>`, b += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, b += `<div class="er-eq">${$("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${$("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${$("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ye) => ye !== 0)) {
      const ye = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const z of ye) b += `<th>${z}</th>`;
      b += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let z = 0; z < 6; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[z], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let z = 6; z < 12; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[z], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function $l(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ye(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ye(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ye(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const $ of R) b += `<th>${$}</th>`;
      b += "</tr>";
      for (let $ = 0; $ < e.elem.length; $++) {
        b += `<tr><td>${e.elem[$]}</td>`;
        for (let J = 0; J < 6; J++) {
          const H = e.uGlobal[$ * 6 + J];
          b += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ye(H, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((R) => R !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const $ of R) b += `<th>${$}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ye(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function ho(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ao(e) {
    var _a;
    const b = e.length, R = Math.min(b, 12);
    let $ = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < R; J++) {
      $ += "<tr>";
      for (let H = 0; H < R; H++) {
        const U = ((_a = e[J]) == null ? void 0 : _a[H]) ?? 0, Y = Math.abs(U) < 1e-10;
        $ += `<td class="${Y ? "z" : ""} ${J === H && !Y ? "diag" : ""}">${Y ? "0" : Ml(U)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", b > R && ($ += `<div style="color:var(--fem-label);font-size:9px">(${R}\xD7${R} de ${b}\xD7${b})</div>`), $ += "</div>", $;
  }
  function Ml(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Qo(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const R = e.width, $ = e.height, J = 30, H = R - 2 * J, U = ($ - 3 * J) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, R, $);
    const Y = (_, W, ye) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(J, _, H, U), b.strokeStyle = "#444", b.beginPath(), b.moveTo(J, _ + U / 2), b.lineTo(J + H, _ + U / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(W, J + 4, _ + 14);
      for (const Z of ye) {
        b.strokeStyle = Z.color, b.lineWidth = 2.5, b.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const me = ve / 100, ie = J + me * H, ne = _ + U / 2 - Z.fn(me) * (U / 2 * 0.85);
          ve === 0 ? b.moveTo(ie, ne) : b.lineTo(ie, ne);
        }
        b.stroke();
      }
      let z = J + H - 90;
      for (const Z of ye) b.fillStyle = Z.color, b.font = "bold 10px sans-serif", b.fillText(Z.label, z, _ + U - 6), z += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", J, _ + U + 12), b.fillText("1", J + H - 6, _ + U + 12), b.fillText("\u03BE", J + H / 2, _ + U + 12);
    };
    Y(J, "Axial (lineal)", [
      {
        fn: (_) => 1 - _,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (_) => _,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), Y(J + U + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (_) => 1 - 3 * _ * _ + 2 * _ * _ * _,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (_) => _ * (1 - _) * (1 - _),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (_) => 3 * _ * _ - 2 * _ * _ * _,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (_) => _ * _ * (_ - 1),
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
    const b = ($) => {
      Tt.style.cssText = $ ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), Tt.addEventListener("contextmenu", ($) => {
      $.preventDefault(), e = !e, b(e), Tt.innerHTML = "?";
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
    const b = oo[e], R = document.querySelector(b.selector);
    if (!R) {
      Un(e + 1);
      return;
    }
    R.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), ln && ln.remove(), Bt && Bt.remove();
    const $ = R.getBoundingClientRect(), J = window.innerWidth, H = window.innerHeight, U = 320, Y = 180;
    ln = document.createElement("div"), ln.style.cssText = `
    position: fixed;
    left: ${$.left - 6}px; top: ${$.top - 6}px;
    width: ${$.width + 12}px; height: ${$.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(ln);
    const _ = J - $.right, W = $.left, ye = H - $.bottom, z = $.top;
    let Z = b.position || "bottom";
    Z === "bottom" && ye < Y + 20 && (Z = "top"), Z === "top" && z < Y + 20 && (Z = "right"), Z === "right" && _ < U + 20 && (Z = "left"), Z === "left" && W < U + 20 && (Z = "bottom");
    let ve, me, ie = "";
    switch (Z) {
      case "bottom":
        ve = $.left + $.width / 2 - U / 2, me = $.bottom + 14, ie = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ve = $.left + $.width / 2 - U / 2, me = $.top - Y - 14, ie = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ve = $.right + 14, me = $.top + $.height / 2 - Y / 2, ie = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ve = $.left - U - 14, me = $.top + $.height / 2 - Y / 2, ie = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ve = Math.max(10, Math.min(ve, J - U - 10)), me = Math.max(10, Math.min(me, H - Y - 10)), Bt = document.createElement("div"), Bt.style.cssText = `
    position: fixed;
    left: ${ve}px; top: ${me}px;
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
    <div style="${ie}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${oo.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < oo.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${oo.map((q, B) => `<div style="width:${B === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${B === e ? "#0099ff" : B < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Bt), (_a = Bt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Un(e + 1);
    }), (_b = Bt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Un(e - 1);
    });
    const ne = (q) => {
      if (!Mo) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (q.key === "ArrowRight" || q.key === "Enter") && (Un(e + 1), document.removeEventListener("keydown", ne)), q.key === "ArrowLeft" && (Un(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), q.key === "Escape" && (ss(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
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
    const b = e.split(/\r?\n/), R = {
      force: "TONF",
      length: "M"
    }, $ = [], J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], _ = [], W = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = [], Z = [];
    let ve = "", me = "";
    const ie = /* @__PURE__ */ new Map();
    for (const Le of b) {
      const qe = Le.trim();
      if (!qe || qe.startsWith("$")) {
        qe.startsWith("$ ") && (me = qe.substring(2).trim());
        continue;
      }
      if (me && (ie.has(me) || ie.set(me, []), ie.get(me).push(Le)), me === "CONTROLS") {
        const xe = qe.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (R.force = xe[1], R.length = xe[2]);
        const Ce = qe.match(/TITLE2\s+"([^"]+)"/);
        Ce && (ve = Ce[1]);
      }
      if (me === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = qe.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Ce = xe[1], ge = xe[2] ? parseFloat(xe[2]) : 0, ke = xe[3] ? parseFloat(xe[3]) : void 0;
          $.push({
            name: Ce,
            height: ge,
            elev: ke ?? 0
          });
        }
      }
      if (me === "MATERIAL PROPERTIES") {
        const xe = qe.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Ce = xe[1];
          J.has(Ce) || J.set(Ce, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ge = J.get(Ce);
          xe[2] && (ge.type = xe[2]);
          const ke = qe.match(/\bE\s+([\d.eE+-]+)/);
          ke && (ge.E = parseFloat(ke[1]));
          const Ge = qe.match(/\bU\s+([\d.eE+-]+)/);
          Ge && (ge.nu = parseFloat(Ge[1]), ge.G = ge.E / (2 * (1 + ge.nu)));
          const _e = qe.match(/\bFY\s+([\d.eE+-]+)/);
          _e && (ge.fy = parseFloat(_e[1]));
          const it = qe.match(/\bFC\s+([\d.eE+-]+)/);
          it && (ge.fc = parseFloat(it[1]));
          const mt = qe.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          mt && (ge.density = parseFloat(mt[1]));
        }
      }
      if (me === "FRAME SECTIONS") {
        const xe = qe.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Ce = xe[1];
          H.has(Ce) || H.set(Ce, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ge = H.get(Ce), ke = qe.match(/MATERIAL\s+"([^"]+)"/);
          ke && (ge.material = ke[1]);
          const Ge = qe.match(/SHAPE\s+"([^"]+)"/);
          Ge && (ge.shape = Ge[1]);
          const _e = qe.match(/\bD\s+([\d.eE+-]+)/);
          _e && (ge.D = parseFloat(_e[1]));
          const it = qe.match(/\bB\s+([\d.eE+-]+)/);
          it && (ge.B = parseFloat(it[1]));
          const mt = qe.match(/\bTF\s+([\d.eE+-]+)/);
          mt && (ge.TF = parseFloat(mt[1]));
          const We = qe.match(/\bTW\s+([\d.eE+-]+)/);
          We && (ge.TW = parseFloat(We[1]));
          const Xe = qe.match(/\bR\s+([\d.eE+-]+)/);
          Xe && (ge.R = parseFloat(Xe[1]));
          const pt = qe.match(/FILLMATERIAL\s+"([^"]+)"/);
          pt && (ge.fillMaterial = pt[1]);
          const lt = qe.match(/I2MOD\s+([\d.eE+-]+)/);
          lt && (ge.modI2 = parseFloat(lt[1]));
          const bt = qe.match(/I3MOD\s+([\d.eE+-]+)/);
          bt && (ge.modI3 = parseFloat(bt[1]));
        }
      }
      if (me === "POINT COORDINATES") {
        const xe = qe.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && U.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (me === "LINE CONNECTIVITIES") {
        const xe = qe.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && Y.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (me === "POINT ASSIGNS") {
        const xe = qe.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && W.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (me === "LINE ASSIGNS") {
        const xe = qe.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Ce = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ge = qe.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ge && (Ce.rigidZone = parseFloat(ge[1]));
          const ke = qe.match(/RELEASE\s+"([^"]+)"/);
          ke && (Ce.releases = ke[1].split(/\s+/));
          const Ge = qe.match(/ANG\s+([-\d.eE+]+)/);
          Ge && (Ce.angle = parseFloat(Ge[1])), ye.set(`${xe[1]}@${xe[2]}`, Ce);
        }
      }
      if (me === "GRIDS") {
        const xe = qe.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && Z.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (me === "FRAME OBJECT LOADS") {
        const xe = qe.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && z.push({
          line: xe[1],
          story: xe[2],
          type: xe[3],
          dir: xe[4],
          lc: xe[5],
          val: parseFloat(xe[6])
        });
      }
      if (me === "AREA CONNECTIVITIES") {
        const xe = qe.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Ce = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((ge) => ge.replace(/"/g, ""))) || [];
          _.push({
            name: xe[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if ($.length > 0) {
      const Le = $.length - 1;
      ne.set($[Le].name, $[Le].elev);
      for (let qe = Le - 1; qe >= 0; qe--) {
        const Ce = ne.get($[qe + 1].name) + $[qe].height;
        $[qe].elev = Ce, ne.set($[qe].name, Ce);
      }
    }
    const q = [], B = [], G = /* @__PURE__ */ new Map(), ce = (Le, qe) => `${Le}@${qe}`, $e = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
    for (const Le of Y) Te.set(Le.name, Le);
    for (const Le of Y) for (const [qe, xe] of ye) {
      if (!qe.startsWith(Le.name + "@")) continue;
      const Ce = xe.story, ge = $.findIndex((ke) => ke.name === Ce);
      if (!(ge < 0)) if (Le.type === "COLUMN" || Le.type === "BRACE") {
        $e.add(ce(Le.pt2, Ce));
        const ke = Math.max(Le.nStories, 1), Ge = Math.min(ge + ke, $.length - 1);
        $e.add(ce(Le.pt1, $[Ge].name));
      } else $e.add(ce(Le.pt1, Ce)), $e.add(ce(Le.pt2, Ce));
    }
    for (const [Le] of W) $e.add(Le);
    for (const Le of $e) {
      const [qe, xe] = Le.split("@"), Ce = U.get(qe), ge = ne.get(xe);
      Ce === void 0 || ge === void 0 || (q.push([
        Ce[0],
        Ce[1],
        ge
      ]), B.push(Le), G.set(Le, q.length - 1));
    }
    const Ve = [], he = [], Be = [], He = [], be = /* @__PURE__ */ new Map();
    for (const Le of Y) for (const [qe, xe] of ye) {
      if (!qe.startsWith(Le.name + "@")) continue;
      const Ce = xe.story, ge = $.findIndex((We) => We.name === Ce);
      if (ge < 0) continue;
      let ke, Ge;
      if (Le.type === "COLUMN" || Le.type === "BRACE") {
        const We = Math.max(Le.nStories, 1), Xe = Math.min(ge + We, $.length - 1);
        ke = ce(Le.pt1, $[Xe].name), Ge = ce(Le.pt2, Ce);
      } else ke = ce(Le.pt1, Ce), Ge = ce(Le.pt2, Ce);
      const _e = G.get(ke), it = G.get(Ge);
      if (_e === void 0 || it === void 0 || _e === it) continue;
      const mt = Ve.length;
      if (Ve.push([
        _e,
        it
      ]), he.push(Le.name), Be.push(Le.type), He.push(Ce), be.set(mt, xe.section), xe.rigidZone > 0 && at.set(mt, [
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
          const lt = Xe[pt];
          lt !== void 0 && (We[lt] = true);
        }
        dt.set(mt, We);
      }
    }
    const Ee = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map();
    for (const [Le, qe] of be) {
      const xe = H.get(qe);
      if (!xe) continue;
      const Ce = J.get(xe.material);
      Ce && (Ee.set(Le, Ce.E), ze.set(Le, Ce.G));
      const ge = xe.D, ke = xe.B, Ge = xe.TF, _e = xe.TW;
      let it = 0, mt = 0, We = 0, Xe = 0, pt = 0, lt = 0, bt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          it = ge * ke, mt = ke * ge ** 3 / 12, We = ge * ke ** 3 / 12, Xe = ke * ge ** 3 * (1 / 3 - 0.21 * (ge / ke) * (1 - ge ** 4 / (12 * ke ** 4))), pt = lt = 5 / 6 * it, bt = "rect";
          break;
        case "Concrete Circle":
          it = Math.PI * ge ** 2 / 4, mt = We = Math.PI * ge ** 4 / 64, Xe = Math.PI * ge ** 4 / 32, pt = lt = 0.9 * it, bt = "circ";
          break;
        case "Steel I/Wide Flange":
          it = 2 * ke * Ge + (ge - 2 * Ge) * _e, mt = (ke * ge ** 3 - (ke - _e) * (ge - 2 * Ge) ** 3) / 12, We = (2 * Ge * ke ** 3 + (ge - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (ge - 2 * Ge) * _e ** 3) / 3, pt = (ge - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = "I";
          break;
        case "Steel Tube":
          it = ge * ke - (ge - 2 * _e) * (ke - 2 * _e), mt = (ke * ge ** 3 - (ke - 2 * _e) * (ge - 2 * _e) ** 3) / 12, We = (ge * ke ** 3 - (ge - 2 * _e) * (ke - 2 * _e) ** 3) / 12, Xe = 2 * _e * (ge - _e) * (ke - _e) * ((ge - _e) * (ke - _e)) / (ge - _e + (ke - _e)), pt = 2 * ge * _e, lt = 2 * ke * _e, bt = "HSS";
          break;
        case "Filled Steel Tube":
          it = ge * ke, mt = ke * ge ** 3 / 12, We = ge * ke ** 3 / 12, Xe = 2 * _e * (ge - _e) * (ke - _e) * ((ge - _e) * (ke - _e)) / (ge - _e + (ke - _e)), pt = 2 * ge * _e + 5 / 6 * (ge - 2 * _e) * (ke - 2 * _e), lt = 2 * ke * _e + 5 / 6 * (ge - 2 * _e) * (ke - 2 * _e), bt = "CFT";
          break;
        case "Steel Angle": {
          const Ht = Ge || _e;
          it = Ht * (ge + ke - Ht), mt = Ht * (ge ** 3 + ke * Ht ** 2 + Ht ** 2 * (ge - Ht)) / 12, We = Ht * (ke ** 3 + ge * Ht ** 2 + Ht ** 2 * (ke - Ht)) / 12, Xe = (ge + ke - Ht) * Ht ** 3 / 3, pt = ge * Ht, lt = ke * Ht, bt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          it = 2 * ke * Ge + (ge - 2 * Ge) * _e, mt = (_e * ge ** 3 + 2 * ke * Ge * (ge - Ge) ** 2) / 12, We = (2 * Ge * ke ** 3 + (ge - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (ge - 2 * Ge) * _e ** 3) / 3, pt = (ge - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          it = 2 * (2 * ke * Ge + (ge - 2 * Ge) * _e), mt = 2 * (_e * ge ** 3 + 2 * ke * Ge * (ge - Ge) ** 2) / 12, We = 2 * (2 * Ge * ke ** 3 + (ge - 2 * Ge) * _e ** 3) / 12, Xe = 2 * (2 * ke * Ge ** 3 + (ge - 2 * Ge) * _e ** 3) / 3, pt = 2 * (ge - 2 * Ge) * _e, lt = 4 * ke * Ge * 5 / 6, bt = "2C";
          break;
        default:
          ge > 0 && ke > 0 && (it = ge * ke, mt = ke * ge ** 3 / 12, We = ge * ke ** 3 / 12, Xe = Math.min(ge, ke) * Math.max(ge, ke) ** 3 / 3 * 0.3, pt = lt = 5 / 6 * it);
          break;
      }
      xe.modI2 && (We *= xe.modI2), xe.modI3 && (mt *= xe.modI3), Je.set(Le, it), yt.set(Le, mt), zt.set(Le, We), Ft.set(Le, Xe), pt > 0 && st.set(Le, pt), lt > 0 && Ue.set(Le, lt), gt.set(Le, {
        type: bt,
        b: ke || void 0,
        h: ge || void 0,
        d: bt === "circ" || bt === "pipe" ? ge : void 0,
        tw: _e || void 0,
        tf: Ge || void 0,
        r: xe.R,
        name: qe
      });
    }
    const ut = /* @__PURE__ */ new Map();
    for (const [Le, qe] of W) {
      const xe = G.get(Le);
      if (xe === void 0) continue;
      const Ce = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ge of qe) ge === "UX" && (Ce[0] = true), ge === "UY" && (Ce[1] = true), ge === "UZ" && (Ce[2] = true), ge === "RX" && (Ce[3] = true), ge === "RY" && (Ce[4] = true), ge === "RZ" && (Ce[5] = true);
      ut.set(xe, Ce);
    }
    const rn = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
    for (let Le = 0; Le < he.length; Le++) Ne.set(`${he[Le]}@${He[Le]}`, Le);
    for (const Le of z) {
      const qe = Ne.get(`${Le.line}@${Le.story}`);
      if (qe === void 0) continue;
      const [xe, Ce] = Ve[qe], ge = q[xe], ke = q[Ce], Ge = Math.sqrt((ke[0] - ge[0]) ** 2 + (ke[1] - ge[1]) ** 2 + (ke[2] - ge[2]) ** 2);
      if (Ge < 1e-10) continue;
      const _e = Le.val * Ge / 2;
      let it = 0, mt = 0, We = 0;
      Le.dir === "GRAV" || Le.dir === "GRAVITY" ? We = -_e : Le.dir === "X" ? it = _e : Le.dir === "Y" ? mt = _e : Le.dir === "Z" && (We = -_e);
      for (const Xe of [
        xe,
        Ce
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
    for (const [Le, qe] of be) {
      const xe = H.get(qe);
      if (!xe) continue;
      const Ce = J.get(xe.material);
      (Ce == null ? void 0 : Ce.density) && xt.set(Le, Ce.density);
    }
    return {
      units: R,
      stories: $.reverse(),
      materials: J,
      frameSections: H,
      nodes: q,
      nodeNames: B,
      nodeNameToIdx: G,
      elements: Ve,
      elementNames: he,
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
        nAreas: _.length,
        title: ve
      },
      rawSections: ie
    };
  }
  function tt(e) {
    return e && parseFloat(e) || 0;
  }
  function da(e) {
    const b = /* @__PURE__ */ new Map(), R = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let $;
    for (; ($ = R.exec(e)) !== null; ) b.set($[1], $[2] !== void 0 ? $[2] : $[3]);
    return b;
  }
  function Tl(e) {
    const b = e.split(/\r?\n/);
    return b.some(($) => $.trim().startsWith("TABLE:")) ? zl(b) : Al(b);
  }
  function zl(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let R = "";
    for (const ne of e) {
      const q = ne.trimEnd();
      q.endsWith("_") ? R += q.slice(0, -1) + " " : (R += q, b.push(R), R = "");
    }
    R && b.push(R);
    const $ = {
      force: "KN",
      length: "m"
    };
    let J = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), W = [], ye = [], z = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), me = [];
    let ie = "";
    for (const ne of b) {
      const q = ne.trim();
      if (!q || q.startsWith(";") || q.startsWith("File ")) continue;
      if (q.startsWith("TABLE:")) {
        const G = q.match(/TABLE:\s+"(.+?)"/);
        ie = G ? G[1].toUpperCase() : "";
        continue;
      }
      if (q === "END TABLE DATA") {
        ie = "";
        continue;
      }
      const B = da(q);
      switch (ie) {
        case "PROGRAM CONTROL": {
          const G = B.get("CurrUnits");
          if (G) {
            const ce = G.split(",").map(($e) => $e.trim());
            ce[0] && ($.force = ce[0]), ce[1] && ($.length = ce[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const G = B.get("Material");
          G && !H.has(G) && H.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const G = B.get("Material");
          if (G) {
            const ce = H.get(G) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ce.E = tt(B.get("E1")), ce.G = tt(B.get("G12")), ce.nu = tt(B.get("U12")), ce.density = tt(B.get("UnitMass")), H.set(G, ce);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const G = B.get("Material");
          G && H.has(G) && (H.get(G).fy = tt(B.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const G = B.get("SectionName");
          G && U.set(G, {
            material: B.get("Material") || "",
            shape: B.get("Shape") || "Rectangular",
            D: tt(B.get("t3")),
            B: tt(B.get("t2")),
            TF: tt(B.get("tf")),
            TW: tt(B.get("tw")),
            A: tt(B.get("Area")),
            Iz: tt(B.get("I33")),
            Iy: tt(B.get("I22")),
            J: tt(B.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const G = B.get("Section");
          G && Y.set(G, {
            material: B.get("Material") || "",
            type: B.get("Type") || "Shell",
            thickness: tt(B.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const G = B.get("Joint");
          if (G) {
            const ce = tt(B.get("XorR")), $e = tt(B.get("Y")), Te = tt(B.get("Z"));
            _.set(G, [
              ce,
              $e,
              Te
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const G = B.get("Frame"), ce = B.get("JointI"), $e = B.get("JointJ");
          G && ce && $e && W.push({
            name: G,
            j1: ce,
            j2: $e
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const G = B.get("Area");
          if (G) {
            const ce = parseInt(B.get("NumJoints") || "4"), $e = [];
            for (let Te = 1; Te <= ce; Te++) {
              const Ve = B.get(`Joint${Te}`);
              Ve && $e.push(Ve);
            }
            $e.length >= 3 && ye.push({
              name: G,
              joints: $e
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const G = B.get("Joint");
          if (G) {
            const ce = [
              ((_a = B.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = B.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = B.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = B.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = B.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = B.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            z.set(G, ce);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const G = B.get("Frame"), ce = B.get("AnalSect");
          G && ce && Z.set(G, ce);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const G = B.get("Area"), ce = B.get("Section");
          G && ce && ve.set(G, ce);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const G = B.get("Joint");
          G && me.push({
            joint: G,
            fx: tt(B.get("F1")),
            fy: tt(B.get("F2")),
            fz: tt(B.get("F3")),
            mx: tt(B.get("M1")),
            my: tt(B.get("M2")),
            mz: tt(B.get("M3"))
          });
          break;
        }
      }
    }
    return pa($, J, H, U, Y, _, W, ye, z, Z, ve, me);
  }
  function Al(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let R = "UX,UY,UZ,RX,RY,RZ";
    const $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], _ = [], W = /* @__PURE__ */ new Map(), ye = [];
    let z = "", Z = "";
    for (const ie of e) {
      const ne = ie.trim();
      if (!ne || ne.startsWith(";")) continue;
      if (!ie.startsWith(" ") && !ie.startsWith("	")) {
        const G = ne.toUpperCase();
        if (G === "END") break;
        G.startsWith("SHELL SECTION") ? z = "SHELL SECTION" : G.startsWith("FRAME SECTION") ? z = "FRAME SECTION" : z = G.split(/\s+/)[0];
        continue;
      }
      const q = da(ne), B = ne.split(/\s+/);
      switch (z) {
        case "SYSTEM": {
          const G = q.get("DOF");
          G && (R = G);
          const ce = q.get("LENGTH");
          ce && (b.length = ce);
          const $e = q.get("FORCE");
          $e && (b.force = $e);
          break;
        }
        case "JOINT": {
          const G = B[0];
          U.set(G, [
            tt(q.get("X")),
            tt(q.get("Y")),
            tt(q.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const G = q.get("ADD"), ce = q.get("DOF");
          if (G && ce) {
            const $e = ce.split(","), Te = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ve of $e) {
              const he = Ve.toUpperCase();
              (he === "UX" || he === "U1") && (Te[0] = true), (he === "UY" || he === "U2") && (Te[1] = true), (he === "UZ" || he === "U3") && (Te[2] = true), (he === "RX" || he === "R1") && (Te[3] = true), (he === "RY" || he === "R2") && (Te[4] = true), (he === "RZ" || he === "R3") && (Te[5] = true);
            }
            W.set(G, Te);
          }
          break;
        }
        case "MATERIAL": {
          const G = q.get("NAME");
          if (G) Z = G, $.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (Z) {
            const ce = $.get(Z), $e = q.get("E");
            $e && (ce.E = tt($e));
            const Te = q.get("U");
            Te && (ce.nu = tt(Te)), ce.G = ce.E / (2 * (1 + ce.nu));
            const Ve = q.get("M");
            Ve && (ce.density = tt(Ve));
          }
          break;
        }
        case "SHELL": {
          const G = B[0], ce = q.get("J");
          q.get("SEC"), ce && _.push({
            name: G,
            joints: ce.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const G = q.get("NAME");
          G && H.set(G, {
            material: q.get("MAT") || "",
            type: q.get("TYPE") || "Shell",
            thickness: tt(q.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const G = B[0], ce = q.get("J");
          if (ce) {
            const $e = ce.split(",");
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
          G && ye.push({
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
    return pa(b, R, $, J, H, U, Y, _, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ye);
  }
  function pa(e, b, R, $, J, H, U, Y, _, W, ye, z) {
    var _a;
    const Z = [], ve = /* @__PURE__ */ new Map(), me = [];
    for (const [he, Be] of H) ve.set(he, me.length), Z.push(he), me.push(Be);
    const ie = [], ne = [], q = /* @__PURE__ */ new Map();
    for (const he of U) {
      const Be = ve.get(he.j1), He = ve.get(he.j2);
      if (Be !== void 0 && He !== void 0) {
        const be = ie.length;
        ie.push([
          Be,
          He
        ]), ne.push(he.name);
        const Ee = W.get(he.name);
        Ee && q.set(be, Ee);
      }
    }
    const B = ie.length;
    for (const he of Y) {
      const Be = he.joints.map((He) => ve.get(He)).filter((He) => He !== void 0);
      if (Be.length >= 3) {
        const He = ie.length;
        ie.push(Be), ne.push(he.name);
        const be = ye.get(he.name);
        be && q.set(He, be);
      }
    }
    const G = ie.length - B, ce = {
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
    for (let he = 0; he < ie.length; he++) {
      const Be = q.get(he), He = Be ? $.get(Be) : null, be = Be ? J.get(Be) : null;
      if (He || ie[he].length === 2) {
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
        ce.elasticities.set(he, Je), ce.shearModuli.set(he, Ue), ce.areas.set(he, Ee.A || Ee.D * Ee.B), ce.momentsOfInertiaZ.set(he, Ee.Iz || Ee.B * Ee.D ** 3 / 12), ce.momentsOfInertiaY.set(he, Ee.Iy || Ee.D * Ee.B ** 3 / 12), ce.torsionalConstants.set(he, Ee.J || 0), ce.densities.set(he, ze.density || 0), ((_a = Ee.shape) == null ? void 0 : _a.includes("Wide Flange")) || Ee.shape === "I" ? $e.set(he, {
          type: "I",
          b: Ee.B,
          h: Ee.D,
          name: Be || "I-section"
        }) : $e.set(he, {
          type: "rect",
          b: Ee.B,
          h: Ee.D
        });
      } else if (be) {
        const Ee = R.get(be.material) || Te, ze = Ee.E || Te.E, Je = Ee.nu || 0.2, st = Ee.G || ze / (2 * (1 + Je));
        ce.elasticities.set(he, ze), ce.shearModuli.set(he, st), ce.thicknesses.set(he, be.thickness), ce.poissonsRatios.set(he, Je), ce.densities.set(he, Ee.density || 0);
      }
    }
    const Ve = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [he, Be] of _) {
      const He = ve.get(he);
      He !== void 0 && Ve.supports.set(He, Be);
    }
    for (const he of z) {
      const Be = ve.get(he.joint);
      if (Be !== void 0) {
        const He = Ve.forces.get(Be) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        He[0] += he.fx, He[1] += he.fy, He[2] += he.fz, He[3] += he.mx, He[4] += he.my, He[5] += he.mz, Ve.forces.set(Be, He);
      }
    }
    return {
      units: e,
      dof: b,
      materials: R,
      frameSections: $,
      shellSections: J,
      nodes: me,
      nodeNames: Z,
      nodeNameToIdx: ve,
      elements: ie,
      elementNames: ne,
      elementSections: q,
      nodeInputs: Ve,
      elementInputs: ce,
      sectionShapes: $e,
      info: {
        nNodes: me.length,
        nFrames: B,
        nShells: G,
        title: `SAP2000 (${B} frames, ${G} shells)`
      }
    };
  }
  function Ll(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: R, nodeInputs: $, elementInputs: J } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, U = e.title || "Awatif Model", Y = [], _ = (q) => Y.push(q), W = () => Y.push(" ");
    _(`File ${U}.$2k was saved on m/d/yy at h:mm:ss`), W(), _('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), _("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
    const ye = [], z = [];
    if (R.forEach((q, B) => {
      q.length === 2 ? ye.push(B) : z.push(B);
    }), ye.length > 0) {
      _('TABLE:  "CONNECTIVITY - FRAME"');
      for (const q of ye) {
        const B = R[q];
        _(`   Frame=${q + 1}   JointI=${B[0] + 1}   JointJ=${B[1] + 1}   IsCurved=No`);
      }
      W();
    }
    if (z.length > 0) {
      _('TABLE:  "CONNECTIVITY - AREA"');
      for (const q of z) {
        const B = R[q], G = B.map((ce, $e) => `Joint${$e + 1}=${ce + 1}`).join("   ");
        _(`   Area=${q + 1}   NumJoints=${B.length}   ${G}`);
      }
      W();
    }
    _('TABLE:  "COORDINATE SYSTEMS"'), _("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), W(), _('TABLE:  "DATABASE FORMAT TYPES"'), _("   UnitsCurr=Yes   OverrideE=No"), W();
    const Z = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
    for (const q of ye) {
      const B = ((_a = J.areas) == null ? void 0 : _a.get(q)) || 0, G = ((_b = J.momentsOfInertiaZ) == null ? void 0 : _b.get(q)) || 0, ce = ((_c = J.momentsOfInertiaY) == null ? void 0 : _c.get(q)) || 0, $e = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(q)) || 0, Te = ((_e = J.elasticities) == null ? void 0 : _e.get(q)) || 0, Ve = `MAT_${Math.round(Te)}`, he = `A${B.toPrecision(6)}_Iz${G.toPrecision(6)}`;
      if (!Z.has(he)) {
        let He = 0.3, be = 0.3;
        B > 0 && G > 0 && (He = Math.sqrt(12 * G / B), be = B / He), Z.set(he, {
          A: B,
          Iz: G,
          Iy: ce,
          J: $e,
          b: be,
          h: He,
          matKey: Ve
        });
      }
      const Be = [
        ...Z.keys()
      ].indexOf(he) + 1;
      ve.set(q, `SEC${Be}`);
    }
    if (ye.length > 0) {
      _('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const q of ye) {
        const B = ve.get(q) || "SEC1";
        _(`   Frame=${q + 1}   AutoSelect=N.A.   AnalSect=${B}   MatProp=Default`);
      }
      W();
    }
    if (Z.size > 0) {
      _('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let q = 0;
      for (const [, B] of Z) {
        q++;
        const G = B.A * 5 / 6;
        _(`   SectionName=SEC${q}   Material=${B.matKey}   Shape=Rectangular   t3=${It(B.h)}   t2=${It(B.b)}   Area=${It(B.A)}   TorsConst=${It(B.J)}   I33=${It(B.Iz)}   I22=${It(B.Iy)}   I23=0   AS2=${It(G)}   AS3=${It(G)} _`), _("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const me = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const q of z) {
      const B = ((_f = J.thicknesses) == null ? void 0 : _f.get(q)) || 0.1, G = ((_g = J.elasticities) == null ? void 0 : _g.get(q)) || 0, ce = `MAT_${Math.round(G)}`, $e = `t${B.toPrecision(6)}`;
      me.has($e) || me.set($e, {
        t: B,
        matKey: ce
      });
      const Te = [
        ...me.keys()
      ].indexOf($e) + 1;
      ie.set(q, `SSEC${Te}`);
    }
    if (z.length > 0) {
      _('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const B of z) {
        const G = ie.get(B) || "SSEC1";
        _(`   Area=${B + 1}   Section=${G}   MatProp=Default`);
      }
      W(), _('TABLE:  "AREA SECTION PROPERTIES"');
      let q = 0;
      for (const [, B] of me) q++, _(`   Section=SSEC${q}   Material=${B.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${It(B.t)}   BendThick=${It(B.t)}   Color=Cyan`);
      W();
    }
    _('TABLE:  "JOINT COORDINATES"');
    for (let q = 0; q < b.length; q++) {
      const B = b[q];
      _(`   Joint=${q + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${It(B[0])}   Y=${It(B[1])}   Z=${It(B[2])}   SpecialJt=No`);
    }
    if (W(), $.supports && $.supports.size > 0) {
      _('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [q, B] of $.supports) {
        if (!B.some((ce) => ce)) continue;
        const G = (ce) => ce ? "Yes" : "No";
        _(`   Joint=${q + 1}   U1=${G(B[0])}   U2=${G(B[1])}   U3=${G(B[2])}   R1=${G(B[3])}   R2=${G(B[4])}   R3=${G(B[5])}`);
      }
      W();
    }
    if (_('TABLE:  "LOAD PATTERN DEFINITIONS"'), _("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), W(), _('TABLE:  "LOAD CASE DEFINITIONS"'), _('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), W(), _('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), _('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), W(), $.forces && $.forces.size > 0) {
      _('TABLE:  "JOINT LOADS - FORCE"');
      for (const [q, B] of $.forces) B.some((G) => Math.abs(G) > 1e-12) && _(`   Joint=${q + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${It(B[0])}   F2=${It(B[1])}   F3=${It(B[2])}   M1=${It(B[3])}   M2=${It(B[4])}   M3=${It(B[5])}`);
      W();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let q = 0; q < R.length; q++) {
      const B = ((_h = J.elasticities) == null ? void 0 : _h.get(q)) || 0, G = ((_i = J.shearModuli) == null ? void 0 : _i.get(q)) || 0, ce = B > 0 && G > 0 ? Math.max(0, Math.min(0.5, B / (2 * G) - 1)) : 0.2, $e = ((_j = J.densities) == null ? void 0 : _j.get(q)) || 0, Te = `MAT_${Math.round(B)}`;
      ne.has(Te) || ne.set(Te, {
        E: B,
        nu: ce,
        G,
        rho: $e
      });
    }
    _('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [q] of ne) _(`   Material=${q}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    W(), _('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [q, B] of ne) _(`   Material=${q}   UnitWeight=${It(B.rho * 9.81)}   UnitMass=${It(B.rho)}   E1=${It(B.E)}   G12=${It(B.G)}   U12=${It(B.nu)}   A1=9.9E-06`);
    W(), _('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [q] of ne) _(`   Material=${q}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), _('TABLE:  "PROGRAM CONTROL"'), _(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), _("END TABLE DATA"), _(""), Y.join(`\r
`);
  }
  function It(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Cl(e) {
    const { e2kModel: b } = e, R = b == null ? void 0 : b.rawSections;
    return R && R.size > 0 ? Fl(R) : Pl(e);
  }
  function Fl(e, b) {
    const R = [], $ = [
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
    for (const J of $) {
      const H = e.get(J);
      if (!(!H || H.length === 0)) {
        R.push(`$ ${J}`);
        for (const U of H) R.push(U);
        R.push("");
      }
    }
    for (const [J, H] of e) if (!$.includes(J) && H.length !== 0) {
      R.push(`$ ${J}`);
      for (const U of H) R.push(U);
      R.push("");
    }
    return R.push("  END"), R.push("$ END OF MODEL FILE"), R.join(`\r
`);
  }
  function Pl(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: R, nodeInputs: $, elementInputs: J, title: H, units: U } = e, Y = (U == null ? void 0 : U.force) || "TONF", _ = (U == null ? void 0 : U.length) || "M", W = [], ye = (be) => Math.round(be * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${Y}"  "${_}"  "C"  `), H && W.push(`  TITLE2  "${H}"  `), W.push("");
    const z = /* @__PURE__ */ new Set();
    b.forEach((be) => z.add(ye(be[1])));
    const Z = [
      ...z
    ].sort((be, Ee) => be - Ee), ve = [], me = /* @__PURE__ */ new Map();
    ve.push("Base"), me.set(Z[0], "Base");
    for (let be = 1; be < Z.length; be++) {
      const Ee = `Level_${be}`;
      ve.push(Ee), me.set(Z[be], Ee);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = Z.length - 1; be >= 1; be--) W.push(`  STORY "${ve[be]}"  HEIGHT ${ye(Z[be] - Z[be - 1])} MASTERSTORY "Yes"  `);
    Z.length > 0 && W.push(`  STORY "Base"  ELEV ${Z[0]} `), W.push(""), R.some((be) => be.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((be) => ne.add(be));
    const q = /* @__PURE__ */ new Map();
    let B = 0;
    for (const be of ne) {
      const Ee = `Mat_${++B}`;
      q.set(be, Ee), W.push(`  MATERIAL  "${Ee}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Ee}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const G = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    R.forEach((be, Ee) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const ze = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(Ee), Je = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Ee)) ?? 0, st = q.get(Je) || "Mat_1", Ue = (ze == null ? void 0 : ze.h) ?? 0, at = (ze == null ? void 0 : ze.b) ?? 0, dt = (ze == null ? void 0 : ze.d) ?? 0, yt = (ze == null ? void 0 : ze.tf) ?? 0, zt = (ze == null ? void 0 : ze.tw) ?? 0, Ft = (ze == null ? void 0 : ze.type) || "rect", gt = `${Ft}_${Ue}_${at}_${dt}_${yt}_${zt}`;
      (ze == null ? void 0 : ze.name) && !$e.has(gt) && $e.set(gt, ze.name);
      let ut = $e.get(gt);
      if (ut || (Ft === "rect" ? ut = `R${ye(at * 100)}x${ye(Ue * 100)}` : Ft === "circ" ? ut = `C_D${ye(dt * 100)}` : Ft === "I" ? ut = `I_${ye(Ue * 100)}` : ut = `Sec_${G.size + 1}`, $e.set(gt, ut)), ce.set(Ee, ut), G.has(ut)) return;
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
      Ue && (xt += `  D ${Ue}`), at && (xt += `  B ${at}`), dt && !Ue && (xt += `  D ${dt}`), yt && (xt += `  TF ${yt}`), zt && (xt += `  TW ${zt}`), W.push(xt);
    }), W.push("");
    const Te = /* @__PURE__ */ new Map();
    let Ve = 0;
    b.forEach((be) => {
      const Ee = `${ye(be[0])},${ye(be[2])}`;
      Te.has(Ee) || Te.set(Ee, `${++Ve}`);
    }), W.push("$ POINT COORDINATES");
    for (const [be, Ee] of Te) {
      const [ze, Je] = be.split(",").map(Number);
      W.push(`  POINT "${Ee}"  ${ze} ${Je} `);
    }
    W.push("");
    const he = (be) => {
      const Ee = b[be], ze = `${ye(Ee[0])},${ye(Ee[2])}`;
      return {
        pt: Te.get(ze) || "1",
        story: me.get(ye(Ee[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const Be = [];
    R.forEach((be, Ee) => {
      if (be.length !== 2) return;
      const ze = Rl(b, be), Je = ce.get(Ee) || `Sec_${Ee}`;
      if (ze === "BEAM") {
        const st = he(be[0]), Ue = he(be[1]);
        W.push(`  LINE  "E${Ee + 1}"  BEAM  "${st.pt}"  "${Ue.pt}"  0`), Be.push(`  LINEASSIGN  "E${Ee + 1}"  "${st.story}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const st = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ue = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        he(st);
        const at = he(Ue), dt = ye(b[st][1]), yt = ye(b[Ue][1]), zt = Z.indexOf(dt), Ft = Z.indexOf(yt), gt = Math.max(1, Ft >= 0 && zt >= 0 ? Ft - zt : 1);
        W.push(`  LINE  "E${Ee + 1}"  ${ze}  "${at.pt}"  "${at.pt}"  ${gt}`);
        for (let ut = 0; ut < gt; ut++) {
          const rn = Ft - ut;
          rn >= 0 && rn < ve.length && Be.push(`  LINEASSIGN  "E${Ee + 1}"  "${ve[rn]}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = $.supports) == null ? void 0 : _b.forEach((be, Ee) => {
      const ze = [];
      if (be[0] && ze.push("UX"), be[1] && ze.push("UY"), be[2] && ze.push("UZ"), be[3] && ze.push("RX"), be[4] && ze.push("RY"), be[5] && ze.push("RZ"), ze.length > 0) {
        const Je = he(Ee);
        W.push(`  POINTASSIGN  "${Je.pt}"  "${Je.story}"  RESTRAINT "${ze.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), Be.forEach((be) => W.push(be)), W.push("");
    const He = [];
    if (R.forEach((be, Ee) => {
      if (be.length === 4) {
        const ze = b[be[0]], Je = b[be[1]], st = b[be[2]], Ue = [
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
      W.push("$ SLAB PROPERTIES");
      const be = ((_c = J.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), W.push("");
    }
    if (He.some((be) => be.isWall)) {
      W.push("$ WALL PROPERTIES");
      const be = ((_d = J.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), W.push("");
    }
    if (He.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const be = [];
      He.forEach((Ee, ze) => {
        const { el: Je, isWall: st } = Ee, Ue = st ? `W${ze + 1}` : `F${ze + 1}`, at = st ? "PANEL" : "FLOOR", dt = Je.map((yt) => he(yt));
        if (st) {
          const yt = b[Je[0]][1] <= b[Je[2]][1] ? 0 : 2, zt = b[Je[1]][1] <= b[Je[3]][1] ? 1 : 3;
          W.push(`  AREA "${Ue}"  ${at}  4  "${dt[yt].pt}"  "${dt[zt].pt}"  "${dt[zt].pt}"  "${dt[yt].pt}"  1  1  0  0  `);
          const Ft = dt[yt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ue}"  "${Ft}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${Ue}"  ${at}  4  "${dt[0].pt}"  "${dt[1].pt}"  "${dt[2].pt}"  "${dt[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ue}"  "${dt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), be.forEach((Ee) => W.push(Ee)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), $.loads && $.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), $.loads.forEach((be, Ee) => {
      const [ze, Je, st] = be, Ue = he(Ee);
      Math.abs(ze) > 1e-10 && W.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FX ${ze}`), Math.abs(Je) > 1e-10 && W.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FY ${Je}`), Math.abs(st) > 1e-10 && W.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FZ ${st}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Rl(e, b) {
    const R = e[b[0]], $ = e[b[1]], J = Math.abs($[1] - R[1]), H = Math.sqrt(($[0] - R[0]) ** 2 + ($[2] - R[2]) ** 2), U = J > H * 0.5;
    return U && H > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
  }
  function Ol(e) {
    var _a, _b;
    const { nodes: b, elements: R, nodeInputs: $, elementInputs: J } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${R.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), b.forEach((U, Y) => {
      H.push(`ops.node(${Y + 1}, ${U[0]}, ${U[1]}, ${U[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((U, Y) => {
      const _ = U.map((W) => W ? 1 : 0).join(", ");
      H.push(`ops.fix(${Y + 1}, ${_})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), R.forEach((U, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (U.length !== 2) return;
      const _ = b[U[0]], W = b[U[1]], z = Math.abs(W[2] - _[2]) > Math.max(Math.abs(W[0] - _[0]), Math.abs(W[1] - _[1])) ? 2 : 1, Z = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, ve = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, me = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ie = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, ne = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${Y + 1}, ${U[0] + 1}, ${U[1] + 1}, ${Z}, ${ve}, ${me}, ${ie}, ${ne}, ${q}, ${z})`);
    }), H.push(""), $.loads && $.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), $.loads.forEach((U, Y) => {
      const _ = U.map((W) => W).join(", ");
      H.push(`ops.load(${Y + 1}, ${_})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), b.forEach((U, Y) => {
      H.push(`print(f"Node {${Y + 1}}: {ops.nodeDisp(${Y + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = $.supports) == null ? void 0 : _b.forEach((U, Y) => {
      H.push(`print(f"Node {${Y + 1}}: {ops.nodeReaction(${Y + 1})}")`);
    }), H.join(`
`);
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: b, elements: R, nodeInputs: $, elementInputs: J } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${R.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), b.forEach((U, Y) => {
      H.push(`node ${Y + 1} ${U[0]} ${U[1]} ${U[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((U, Y) => {
      const _ = U.map((W) => W ? 1 : 0).join(" ");
      H.push(`fix ${Y + 1} ${_}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), R.forEach((U, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (U.length !== 2) return;
      const _ = b[U[0]], W = b[U[1]], z = Math.abs(W[2] - _[2]) > Math.max(Math.abs(W[0] - _[0]), Math.abs(W[1] - _[1])) ? 2 : 1, Z = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, ve = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, me = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ie = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, ne = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      H.push(`element elasticBeamColumn ${Y + 1} ${U[0] + 1} ${U[1] + 1} ${Z} ${ve} ${me} ${ie} ${ne} ${q} ${z}`);
    }), H.push(""), $.loads && $.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), $.loads.forEach((U, Y) => {
      const _ = U.map((W) => W).join(" ");
      H.push(`  load ${Y + 1} ${_}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), b.forEach((U, Y) => {
      H.push(`puts "Node ${Y + 1}: [nodeDisp ${Y + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = $.supports) == null ? void 0 : _b.forEach((U, Y) => {
      H.push(`puts "Node ${Y + 1}: [nodeReaction ${Y + 1}]"`);
    }), H.join(`
`);
  }
  function ql(e) {
    const b = [], R = [], $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
    for (const ve of e.split(/\r?\n/)) {
      const me = ve.trim(), ie = me.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const G = parseInt(ie[1]), ce = b.length;
        b.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), z.set(G, ce);
        continue;
      }
      const ne = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const G = parseInt(ne[1]), ce = z.get(G);
        ce !== void 0 && $.set(ce, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const q = me.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (q) {
        const G = parseInt(q[1]), ce = z.get(parseInt(q[2])), $e = z.get(parseInt(q[3]));
        if (ce !== void 0 && $e !== void 0) {
          const Te = R.length;
          R.push([
            ce,
            $e
          ]), Z.set(G, Te), Y.set(Te, parseFloat(q[4])), H.set(Te, parseFloat(q[5])), U.set(Te, parseFloat(q[6])), ye.set(Te, parseFloat(q[7])), _.set(Te, parseFloat(q[8])), W.set(Te, parseFloat(q[9]));
        }
        continue;
      }
      const B = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (B) {
        const G = z.get(parseInt(B[1]));
        G !== void 0 && J.set(G, [
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
      elements: R,
      nodeInputs: {
        supports: $,
        loads: J
      },
      elementInputs: {
        elasticities: H,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: _,
        momentsOfInertiaZ: W,
        torsionalConstants: ye
      }
    };
  }
  function _l(e) {
    const b = [], R = [], $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const Z of e.split(/\r?\n/)) {
      const ve = Z.trim();
      if (ve.startsWith("#") || ve.startsWith("//")) continue;
      const me = ve.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const ie = parseInt(me[1]), ne = b.length;
        b.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), z.set(ie, ne);
        continue;
      }
      if (me[0] === "fix" && me.length >= 8) {
        const ie = z.get(parseInt(me[1]));
        ie !== void 0 && $.set(ie, [
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
        const ie = z.get(parseInt(me[3])), ne = z.get(parseInt(me[4]));
        if (ie !== void 0 && ne !== void 0) {
          const q = R.length;
          R.push([
            ie,
            ne
          ]), Y.set(q, parseFloat(me[5])), H.set(q, parseFloat(me[6])), U.set(q, parseFloat(me[7])), ye.set(q, parseFloat(me[8])), _.set(q, parseFloat(me[9])), W.set(q, parseFloat(me[10]));
        }
        continue;
      }
      if (me[0] === "load" && me.length >= 8) {
        const ie = z.get(parseInt(me[1]));
        ie !== void 0 && J.set(ie, [
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
      nodes: b,
      elements: R,
      nodeInputs: {
        supports: $,
        loads: J
      },
      elementInputs: {
        elasticities: H,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: _,
        momentsOfInertiaZ: W,
        torsionalConstants: ye
      }
    };
  }
  function Ut(e) {
    const b = [];
    let R = 0, $ = false, J = "";
    for (let H = 0; H < e.length; H++) {
      const U = e[H];
      if (U === "'" && (H === 0 || e[H - 1] !== "\\")) {
        $ = !$, J += U;
        continue;
      }
      if ($) {
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
        b.push(J.trim()), J = "";
        continue;
      }
      J += U;
    }
    return J.trim() && b.push(J.trim()), b;
  }
  function fa(e, b) {
    const R = Ut(e);
    if (b < R.length) {
      let $ = R[b].trim();
      return $.startsWith("'") && $.endsWith("'") && ($ = $.slice(1, -1)), $ === "$" ? null : $;
    }
    return null;
  }
  function Dl(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, R = {}, $ = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (b.schema = J[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let U;
    for (; (U = H.exec(e)) !== null; ) {
      const Y = parseInt(U[1]), _ = U[2].toUpperCase();
      R[Y] = {
        id: Y,
        type: _,
        args: U[3]
      }, $[_] || ($[_] = []), $[_].push(Y);
    }
    if ($.IFCPROJECT) {
      const Y = R[$.IFCPROJECT[0]];
      if (Y) {
        const _ = fa(Y.args, 2);
        _ && (b.project = _);
      }
    }
    return {
      meta: b,
      entities: R,
      typeIndex: $
    };
  }
  function Wt(e, b) {
    const R = b.match(/#(\d+)/);
    return R && e[parseInt(R[1])] || null;
  }
  function ua(e, b) {
    const R = Ut(b.args), $ = Wt(e, R[0]), J = $ ? Bl(e, $) : [
      0,
      0,
      0
    ];
    let H = [
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
      Y && (H = ra(e, Y));
    }
    if (R[2] && R[2] !== "$") {
      const Y = Wt(e, R[2]);
      Y && (U = ra(e, Y));
    }
    return {
      origin: J,
      dirZ: H,
      dirX: U
    };
  }
  function Bl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function ra(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function ma(e, b) {
    const R = Ut(b.args), $ = Wt(e, R[1]);
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
    if ($ && (J = ua(e, $)), R[0] && R[0] !== "$") {
      const H = Wt(e, R[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const U = ma(e, H), Y = ts(J.origin, U.dirX, es(U.dirZ, U.dirX), U.dirZ);
        J.origin = [
          U.origin[0] + Y[0],
          U.origin[1] + Y[1],
          U.origin[2] + Y[2]
        ], J.dirZ = ts(J.dirZ, U.dirX, es(U.dirZ, U.dirX), U.dirZ), J.dirX = ts(J.dirX, U.dirX, es(U.dirZ, U.dirX), U.dirZ);
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
  function ts(e, b, R, $) {
    return [
      e[0] * b[0] + e[1] * R[0] + e[2] * $[0],
      e[0] * b[1] + e[1] * R[1] + e[2] * $[1],
      e[0] * b[2] + e[1] * R[2] + e[2] * $[2]
    ];
  }
  const Hl = 0.01;
  function jl(e) {
    const b = Dl(e), { entities: R, typeIndex: $ } = b, J = [], H = [], U = /* @__PURE__ */ new Map();
    U.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), U.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let Y = 0, _ = 0;
    function W(ne, q, B) {
      for (const G of J) {
        const ce = G.x - ne, $e = G.y - q, Te = G.z - B;
        if (Math.sqrt(ce * ce + $e * $e + Te * Te) < Hl) return G.id;
      }
      return J.push({
        id: Y,
        x: ne,
        y: q,
        z: B
      }), Y++;
    }
    function ye(ne) {
      const q = fa(ne.args, 2) || "", B = $.IFCRELASSOCIATESMATERIAL || [];
      for (const ce of B) {
        const $e = R[ce];
        if (!$e) continue;
        const Te = Ut($e.args);
        if ((Te[4] || Te[3] || "").includes(`#${ne.id}`)) {
          const he = Te[5] || Te[4] || "", Be = Wt(R, he);
          if (Be) return z(Be);
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
    function z(ne) {
      const q = ne.type;
      if (q === "IFCRECTANGLEPROFILEDEF") {
        const B = Ut(ne.args), G = (B[1] || "").replace(/'/g, ""), ce = parseFloat(B[3]) || 0.3, $e = parseFloat(B[4]) || 0.3;
        return {
          b: ce,
          h: $e,
          name: G
        };
      }
      if (q === "IFCMATERIALPROFILE") {
        const B = Ut(ne.args), G = B[2] || B[1] || "", ce = Wt(R, G);
        if (ce) return z(ce);
      }
      if (q === "IFCMATERIALPROFILESET") {
        const B = Ut(ne.args), ce = (B[2] || B[1] || "").match(/#(\d+)/);
        if (ce) {
          const $e = R[parseInt(ce[1])];
          if ($e) return z($e);
        }
      }
      if (q === "IFCMATERIALPROFILESETUSAGE") {
        const G = Ut(ne.args)[0], ce = Wt(R, G);
        if (ce) return z(ce);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function Z(ne, q, B, G) {
      const ce = $[ne] || [];
      for (const $e of ce) {
        const Te = R[$e];
        if (!Te) continue;
        const Ve = Ut(Te.args), he = Ve[5] || Ve[4] || "", Be = Wt(R, he);
        if (!Be) continue;
        const He = ma(R, Be), be = ye(Te);
        let Ee = G, ze = null, Je = null;
        const st = Ve[6] || Ve[5] || "", Ue = Wt(R, st);
        if (Ue) {
          const ut = $o(R, Ue);
          ut && (Ee = ut.depth || G, ze = ut.origin, Je = ut.direction);
        }
        const at = ze ? ze[0] : He.origin[0], dt = ze ? ze[1] : He.origin[1], yt = ze ? ze[2] : He.origin[2], zt = Je || (B === "Z" ? He.dirZ : He.dirX), Ft = W(at, dt, yt), gt = W(at + zt[0] * Ee, dt + zt[1] * Ee, yt + zt[2] * Ee);
        H.push({
          id: _++,
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
    function ve(ne, q, B) {
      const G = $[ne] || [];
      for (const ce of G) {
        const $e = R[ce];
        if (!$e) continue;
        const Te = Ut($e.args), Ve = Te[5] || Te[4] || "";
        if (!Wt(R, Ve)) continue;
        let Be = B;
        const He = Te[6] || Te[5] || "", be = Wt(R, He);
        be && (Be = Wl(R, be) || B);
        const Ee = q === "slab" ? `Losa e=${(Be * 100).toFixed(0)}cm` : q === "wall" ? `Muro e=${(Be * 100).toFixed(0)}cm` : q === "footing" ? `Zapata e=${(Be * 100).toFixed(0)}cm` : `${q} e=${(Be * 100).toFixed(0)}cm`;
        H.push({
          id: _++,
          type: "shell",
          nodeIds: [],
          category: q,
          sectionName: Ee,
          b: Be,
          h: Be,
          material: "Hormigon",
          expressID: ce
        });
      }
    }
    ve("IFCSLAB", "slab", 0.15), ve("IFCWALL", "wall", 0.2), ve("IFCWALLSTANDARDCASE", "wall", 0.2), ve("IFCFOOTING", "footing", 0.5), ve("IFCROOF", "slab", 0.12);
    const me = [], ie = $.IFCBUILDINGSTOREY || [];
    for (const ne of ie) {
      const q = R[ne];
      if (!q) continue;
      const B = Ut(q.args), G = (B[2] || "").replace(/'/g, ""), ce = parseFloat(B[9]) || 0;
      me.push({
        name: G,
        elevation: ce
      });
    }
    return me.sort((ne, q) => ne.elevation - q.elevation), {
      nodes: J,
      elements: H,
      materials: U,
      levels: me,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function $o(e, b) {
    const R = Ut(b.args);
    for (const $ of R) {
      const J = $.match(/#(\d+)/g) || [];
      for (const H of J) {
        const U = parseInt(H.replace("#", "")), Y = e[U];
        if (Y) {
          if (Y.type === "IFCEXTRUDEDAREASOLID") {
            const _ = Ut(Y.args), W = parseFloat(_[3]) || 0, ye = Wt(e, _[1]);
            let z = [
              0,
              0,
              0
            ];
            ye && (z = ua(e, ye).origin);
            const Z = Wt(e, _[2]);
            let ve = [
              0,
              0,
              1
            ];
            if (Z && Z.type === "IFCDIRECTION") {
              const me = Z.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              me && me.length >= 3 && (ve = me.map(Number));
            }
            return {
              depth: W,
              origin: z,
              direction: ve
            };
          }
          if (Y.type === "IFCSHAPEREPRESENTATION") {
            const _ = $o(e, Y);
            if (_) return _;
          }
          if (Y.type === "IFCMAPPEDITEM") {
            const _ = Ut(Y.args), W = Wt(e, _[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const ye = Ut(W.args), z = Wt(e, ye[1]);
              if (z) {
                const Z = $o(e, z);
                if (Z) return Z;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Wl(e, b) {
    const R = $o(e, b);
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
  for (const [e, b] of ba) ha.set(e, b);
  function Gl(e) {
    return ha.get(e) ?? "other";
  }
  new Set(ga);
  async function Yl(e, b) {
    var _a, _b;
    const R = window.WebIFC;
    if (!R) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const $ = new R.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    $.SetWasmPath(J), await $.Init();
    const H = $.OpenModel(new Uint8Array(b)), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), _ = {
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
    for (const [ve] of ba) {
      const me = Gl(ve);
      try {
        const ie = $.GetLineIDsWithType(H, ve);
        for (let ne = 0; ne < ie.size(); ne++) {
          const q = ie.get(ne);
          U.set(q, me);
          let B = "";
          try {
            const G = $.GetLine(H, q);
            B = ((_a = G == null ? void 0 : G.Name) == null ? void 0 : _a.value) || ((_b = G == null ? void 0 : G.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          Y.set(q, {
            expressID: q,
            category: me,
            name: B,
            typeName: _[ve] || "Otro"
          });
        }
      } catch {
      }
    }
    const W = /* @__PURE__ */ new Map();
    for (const ve of ga) {
      const me = new so();
      me.name = `ifc-${ve}`, e.add(me), W.set(ve, me);
    }
    const ye = new Qa();
    let z = 0;
    const Z = new ta({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: na
    });
    return $.StreamAllMeshes(H, (ve) => {
      const me = U.get(ve.expressID) ?? "other", ie = W.get(me), ne = ve.geometries;
      for (let q = 0; q < ne.size(); q++) {
        const B = ne.get(q), G = $.GetGeometry(H, B.geometryExpressID), ce = $.GetVertexArray(G.GetVertexData(), G.GetVertexDataSize()), $e = $.GetIndexArray(G.GetIndexData(), G.GetIndexDataSize()), Te = new tn(), Ve = new Float32Array(ce.length / 2), he = new Float32Array(ce.length / 2);
        for (let ze = 0; ze < ce.length; ze += 6) {
          const Je = ze / 2;
          Ve[Je] = ce[ze], Ve[Je + 1] = ce[ze + 1], Ve[Je + 2] = ce[ze + 2], he[Je] = ce[ze + 3], he[Je + 1] = ce[ze + 4], he[Je + 2] = ce[ze + 5];
        }
        Te.setAttribute("position", new xo(Ve, 3)), Te.setAttribute("normal", new xo(he, 3)), Te.setIndex(new xo(new Uint32Array($e), 1));
        const Be = new el();
        Be.fromArray(B.flatTransformation);
        let He;
        const be = B.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? He = new ta({
          color: new tl(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: na
        }) : He = Z, He._origOpacity = He.opacity;
        const Ee = new ca(Te, He);
        Ee.applyMatrix4(Be), Ee.userData.expressID = ve.expressID, Ee.userData.category = me, ie.add(Ee), ye.expandByObject(Ee), z++, G.delete();
      }
    }), $.CloseModel(H), {
      meshCount: z,
      bbox: ye,
      detailCategories: W,
      elementInfo: Y
    };
  }
  ia = Jn.state(false);
  er = function(e) {
    e.nodeInputs || (e.nodeInputs = Jn.state({})), e.elementInputs || (e.elementInputs = Jn.state({})), e.deformOutputs || (e.deformOutputs = Jn.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jn.state({}));
    let b = "tonf", R = "m", $ = Pn(b, R), J = {
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
    let _ = false;
    const W = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
    let z = "", Z = {}, ve = null, me = "", ie = [], ne = [], q = [], B = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ve = null, he = [], Be = 0.2, He = 2, be = 2, Ee = false, ze = 2, Je = "x", st = /* @__PURE__ */ new Set(), Ue = true, at = 0.15, dt = 2, yt = 2, zt = /* @__PURE__ */ new Set(), Ft = false, gt = "perimeter";
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
    let xt = 0, Le = 3, qe = false, xe = 0, Ce = null, ge = 0, ke = [], Ge = 1, _e = true;
    const it = fl();
    it.div.style.display = "none";
    function mt() {
      const t = uo()[z];
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
      const d = Ze();
      if (!d) return;
      bt = new so(), bt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...n), i = Math.max(...n), c = Math.max(...o), m = r - a || 1, M = i - f || 1, w = 3359829, y = 2241348;
      for (const h of o) {
        for (const k of n) {
          const A = new tn().setFromPoints([
            new Oe(a, h, k),
            new Oe(r, h, k)
          ]), I = new Wn({
            color: w,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), T = new Cn(A, I);
          T.computeLineDistances(), T.renderOrder = -10, bt.add(T);
        }
        for (const k of t) {
          const A = new tn().setFromPoints([
            new Oe(k, h, f),
            new Oe(k, h, i)
          ]), I = new Wn({
            color: w,
            dashSize: M * 0.015,
            gapSize: M * 0.01,
            transparent: true,
            opacity: 0.25
          }), T = new Cn(A, I);
          T.computeLineDistances(), T.renderOrder = -10, bt.add(T);
        }
      }
      for (const h of t) for (const k of n) {
        const A = new tn().setFromPoints([
          new Oe(h, 0, k),
          new Oe(h, c, k)
        ]), I = new Wn({
          color: y,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), T = new Cn(A, I);
        T.computeLineDistances(), T.renderOrder = -10, bt.add(T);
      }
      const p = Math.min(m, M) * 0.015;
      for (const h of o) for (const k of t) for (const A of n) {
        const I = [
          new Oe(k - p, h, A),
          new Oe(k + p, h, A),
          new Oe(k, h, A - p),
          new Oe(k, h, A + p)
        ], T = new tn().setFromPoints(I), P = new Yn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), x = new Gn(T, P);
        x.renderOrder = -5, bt.add(x);
      }
      bt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((k) => {
          k.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(bt), d.render();
    }
    let Rt = null;
    function ls() {
      if (!Rt) return;
      const t = Ze();
      t && t.scene.remove(Rt), Rt.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Rt = null;
    }
    function Xn(t, n, o, l, s) {
      ls();
      const d = Ze();
      if (!d) return;
      Rt = new so(), Rt.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...n), i = Math.max(...n), c = r - a || 1, m = i - f || 1, M = Math.max(c, m), w = M * 0.08, y = l || t.map((x, u) => String.fromCharCode(65 + u)), p = s || n.map((x, u) => String(u + 1)), h = M * 0.018, k = n.length <= 1, A = 8947848;
      for (let x = 0; x < t.length; x++) {
        const u = t[x];
        if (k) {
          const S = -w - h * 1.5;
          Io(u, 0, 0, u, 0, S + h, A, Rt), ko(y[x] || `${x}`, u, 0, S, h, Rt);
        } else {
          const S = f - w - h * 1.5;
          Io(u, f, 0, u, S + h, 0, A, Rt), ko(y[x] || `${x}`, u, S, 0, h, Rt);
        }
      }
      if (!k) for (let x = 0; x < n.length; x++) {
        const u = n[x], S = a - w - h * 1.5;
        Io(a, u, 0, S + h, u, 0, A, Rt), ko(p[x] || `${x}`, S, u, 0, h, Rt);
      }
      const I = h * 1.8, T = w * 1.2, P = w * 1.2;
      for (let x = 0; x < t.length - 1; x++) {
        const u = t[x], S = t[x + 1], C = Math.abs(S - u), O = (u + S) / 2, j = `${C.toFixed(2)} m`;
        k ? (Eo(j, O, 0, -T, I, Rt), So(u, 0, -T * 0.7, S, 0, -T * 0.7, 16763904, Rt)) : (Eo(j, O, f - P, 0, I, Rt), So(u, f - P * 0.7, 0, S, f - P * 0.7, 0, 16763904, Rt));
      }
      if (!k) for (let x = 0; x < n.length - 1; x++) {
        const u = n[x], S = n[x + 1], C = Math.abs(S - u), O = (u + S) / 2, j = `${C.toFixed(2)} m`;
        Eo(j, a - T, O, 0, I, Rt), So(a - T * 0.7, u, 0, a - T * 0.7, S, 0, 16763904, Rt);
      }
      Rt.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(Rt), d.render();
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
      const s = Math.min(...n), d = Math.max(...n), a = Math.min(...o), r = Math.max(...o), f = d - s || 1, i = r - a || 1, c = Math.max(f, i), m = c * 0.06, M = o.length <= 1, w = 4491519, y = c * 0.015;
      for (const p of t) {
        const h = p.elev;
        M ? (Kn(s - m, 0, h, d + m, 0, h, w, Gt), is(p.name, d + m * 1.5, 0, h, y, Gt)) : (Kn(s, a, h, d, a, h, w, Gt), Kn(d, a, h, d, r, h, w, Gt), Kn(d, r, h, s, r, h, w, Gt), Kn(s, r, h, s, a, h, w, Gt), is(p.name, s - m * 1.5, a, h, y, Gt));
      }
      Gt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Gt), l.render();
    }
    function Kn(t, n, o, l, s, d, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - n) ** 2 + (d - o) ** 2) || 1, i = new tn().setFromPoints([
        new Oe(t, n, o),
        new Oe(l, s, d)
      ]), c = new Wn({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new Cn(i, c);
      m.computeLineDistances(), m.renderOrder = 50, r.add(m);
    }
    function is(t, n, o, l, s, d) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, f - c), i.quadraticCurveTo(r, f, r - c, f), i.lineTo(c, f), i.quadraticCurveTo(0, f, 0, f - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const m = new Xo(a);
      m.needsUpdate = true;
      const M = new fo({
        map: m,
        depthTest: false,
        transparent: true
      }), w = new po(M);
      w.position.set(n, o, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, d.add(w);
    }
    function Eo(t, n, o, l, s, d) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, f - c), i.quadraticCurveTo(r, f, r - c, f), i.lineTo(c, f), i.quadraticCurveTo(0, f, 0, f - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const m = new rl(a);
      m.minFilter = il;
      const M = new fo({
        map: m,
        transparent: true,
        depthTest: false
      }), w = new po(M);
      w.position.set(n, o, l);
      const y = r / f;
      w.scale.set(s * y, s, 1), w.renderOrder = 999, d.add(w);
    }
    function So(t, n, o, l, s, d, a, r) {
      const f = [
        new Oe(t, n, o),
        new Oe(l, s, d)
      ], i = new tn().setFromPoints(f), c = new Yn({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new Cn(i, c);
      m.renderOrder = 998, r.add(m);
    }
    function Io(t, n, o, l, s, d, a, r) {
      const f = new tn().setFromPoints([
        new Oe(t, n, o),
        new Oe(l, s, d)
      ]), i = new Wn({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(d - o), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(d - o), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new Cn(f, i);
      c.computeLineDistances(), r.add(c);
    }
    function ko(t, n, o, l, s, d) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new Xo(a);
      i.needsUpdate = true;
      const c = new fo({
        map: i,
        depthTest: false,
        transparent: true
      }), m = new po(c);
      m.position.set(n, o, l);
      const M = s * 2;
      m.scale.set(M, M, 1), m.renderOrder = 100, d.add(m);
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
          const d = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            d,
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
        const o = Ae.querySelectorAll("input[type=checkbox]");
        for (const l of o) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = n !== void 0 ? n : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || d}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Ae.querySelectorAll("input[type=checkbox]"), n = {};
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
        const d = [
          0
        ];
        for (const a of o || [
          3
        ]) d.push(d[d.length - 1] + a);
        as(l, s, d), We = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Xe = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), pt = d[d.length - 1], lt = d.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), Xn(We.map((a) => a.coord), Xe.map((a) => a.coord), pt, We.map((a) => a.label), Xe.map((a) => a.label));
        {
          const a = d.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - d[f - 1] : 0,
            elev: r
          }));
          wo(a, We.map((r) => r.coord), Xe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (We.length === 0 || lt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const n = (t == null ? void 0 : t.col) || "40x40", o = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = n.split("x").map((D) => parseFloat(D) / 100), [a, r] = o.split("x").map((D) => parseFloat(D) / 100), f = We.map((D) => D.coord), i = Xe.map((D) => D.coord), c = lt.map((D) => D.elev), m = f.length, M = i.length, w = c.length, y = w - 1, p = [], h = {};
        for (let D = 0; D < w; D++) for (let fe = 0; fe < M; fe++) for (let oe = 0; oe < m; oe++) h[`${oe},${fe},${D}`] = p.length, p.push([
          f[oe],
          i[fe],
          c[D]
        ]);
        const k = [], A = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Map();
        for (let D = 0; D < y; D++) for (let fe = 0; fe < M; fe++) for (let oe = 0; oe < m; oe++) {
          const pe = k.length;
          k.push([
            h[`${oe},${fe},${D}`],
            h[`${oe},${fe},${D + 1}`]
          ]), A.add(pe), T.set(pe, D);
        }
        for (let D = 1; D < w; D++) for (let fe = 0; fe < M; fe++) for (let oe = 0; oe < m - 1; oe++) {
          const pe = k.length;
          k.push([
            h[`${oe},${fe},${D}`],
            h[`${oe + 1},${fe},${D}`]
          ]), I.add(pe), T.set(pe, D - 1);
        }
        for (let D = 1; D < w; D++) for (let fe = 0; fe < m; fe++) for (let oe = 0; oe < M - 1; oe++) {
          const pe = k.length;
          k.push([
            h[`${fe},${oe},${D}`],
            h[`${fe},${oe + 1},${D}`]
          ]), I.add(pe), T.set(pe, D - 1);
        }
        const P = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", x = /* @__PURE__ */ new Set();
        if (P) {
          const D = P === "all" || P === "x" || P === "perimeter", fe = P === "all" || P === "y" || P === "perimeter";
          for (let oe = 0; oe < y; oe++) {
            if (D) for (let pe = 0; pe < M; pe++) {
              if (P === "perimeter" && pe !== 0 && pe !== M - 1) continue;
              const ee = Math.floor((m - 1) / 2);
              for (let ue = 0; ue < m - 1; ue++) {
                if (P === "perimeter" && ue !== ee) continue;
                const we = k.length;
                k.push([
                  h[`${ue},${pe},${oe}`],
                  h[`${ue + 1},${pe},${oe + 1}`]
                ]), x.add(we), T.set(we, oe);
                const se = k.length;
                k.push([
                  h[`${ue + 1},${pe},${oe}`],
                  h[`${ue},${pe},${oe + 1}`]
                ]), x.add(se), T.set(se, oe);
              }
            }
            if (fe) for (let pe = 0; pe < m; pe++) {
              if (P === "perimeter" && pe !== 0 && pe !== m - 1) continue;
              const ee = Math.floor((M - 1) / 2);
              for (let ue = 0; ue < M - 1; ue++) {
                if (P === "perimeter" && ue !== ee) continue;
                const we = k.length;
                k.push([
                  h[`${pe},${ue},${oe}`],
                  h[`${pe},${ue + 1},${oe + 1}`]
                ]), x.add(we), T.set(we, oe);
                const se = k.length;
                k.push([
                  h[`${pe},${ue + 1},${oe}`],
                  h[`${pe},${ue},${oe + 1}`]
                ]), x.add(se), T.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, S = u / (2 * (1 + 0.2)), C = s * d, O = s * d ** 3 / 12, j = d * s ** 3 / 12, g = s * d * (s ** 2 + d ** 2) / 12, E = a * r, v = a * r ** 3 / 12, F = r * a ** 3 / 12, X = a * r * (a ** 2 + r ** 2) / 12, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
        for (let D = 0; D < k.length; D++) V.set(D, u), ae.set(D, S), A.has(D) ? (Q.set(D, C), K.set(D, O), de.set(D, j), re.set(D, g), Ie.set(D, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${n}`
        })) : x.has(D) ? (Q.set(D, C), K.set(D, O), de.set(D, j), re.set(D, g), Ie.set(D, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${n}`
        })) : (Q.set(D, E), K.set(D, v), de.set(D, F), re.set(D, X), Ie.set(D, {
          type: "rect",
          b: a,
          h: r,
          name: `V${o}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let D = 0; D < M; D++) for (let fe = 0; fe < m; fe++) Re.set(h[`${fe},${D},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = k, e.nodeInputs.val = {
          supports: Re,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: V,
          shearModuli: ae,
          areas: Q,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: de,
          torsionalConstants: re,
          sectionShapes: Ie
        }, B = A, G = I, $e = T, console.log(`Built: ${p.length} nodes, ${k.length} elements (${A.size} cols, ${I.size} beams, ${x.size} braces)`), console.log(`  Col: ${n}, Viga: ${o}, f'c=${l}${P ? `, braces=${P}` : ""}`), {
          nodes: p.length,
          elements: k.length
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
        const d = We[l].coord, a = Xe[s].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const i = (y) => {
          const p = r.findIndex((h) => Math.abs(h[0] - d) < 1e-3 && Math.abs(h[1] - a) < 1e-3 && Math.abs(h[2] - y) < 1e-3);
          return p >= 0 ? p : (r.push([
            d,
            a,
            y
          ]), r.length - 1);
        }, c = o ? [
          lt.findIndex((y) => y.label === o)
        ] : Array.from({
          length: lt.length - 1
        }, (y, p) => p + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), M = i(lt[0].elev);
        m.has(M) || m.set(M, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let w = 0;
        for (const y of c) {
          if (y < 1 || y >= lt.length) continue;
          const p = i(lt[y - 1].elev), h = i(lt[y].elev);
          f.push([
            p,
            h
          ]), B.add(f.length - 1), $e.set(f.length - 1, y - 1), w++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${t}-${n}${o ? ` story ${o}` : ""}`), w;
      },
      addBeam(t, n, o, l, s) {
        var _a2;
        const d = We.findIndex((T) => T.label === t), a = Xe.findIndex((T) => T.label === n), r = We.findIndex((T) => T.label === o), f = Xe.findIndex((T) => T.label === l), i = lt.findIndex((T) => T.label === s);
        if (d < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${s}" not found. Available: ${lt.filter((T) => T.label !== "Base").map((T) => T.label)}`);
          return;
        }
        const c = We[d].coord, m = Xe[a].coord, M = We[r].coord, w = Xe[f].coord, y = lt[i].elev, p = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], k = (T, P, x) => {
          const u = p.findIndex((S) => Math.abs(S[0] - T) < 1e-3 && Math.abs(S[1] - P) < 1e-3 && Math.abs(S[2] - x) < 1e-3);
          return u >= 0 ? u : (p.push([
            T,
            P,
            x
          ]), p.length - 1);
        }, A = k(c, m, y), I = k(M, w, y);
        return h.push([
          A,
          I
        ]), G.add(h.length - 1), $e.set(h.length - 1, i - 1), e.nodes.val = p, e.elements.val = h, console.log(`Added beam ${t}-${n} \u2192 ${o}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, n, o, l, s, d) {
        var _a2;
        const a = We.findIndex((u) => u.label === t), r = Xe.findIndex((u) => u.label === n), f = lt.findIndex((u) => u.label === o), i = We.findIndex((u) => u.label === l), c = Xe.findIndex((u) => u.label === s), m = lt.findIndex((u) => u.label === d);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${n}@${o}`);
          return;
        }
        if (i < 0 || c < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const M = We[a].coord, w = Xe[r].coord, y = lt[f].elev, p = We[i].coord, h = Xe[c].coord, k = lt[m].elev, A = [
          ...e.nodes.val
        ], I = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], T = (u, S, C) => {
          const O = A.findIndex((j) => Math.abs(j[0] - u) < 1e-3 && Math.abs(j[1] - S) < 1e-3 && Math.abs(j[2] - C) < 1e-3);
          return O >= 0 ? O : (A.push([
            u,
            S,
            C
          ]), A.length - 1);
        }, P = T(M, w, y), x = T(p, h, k);
        return I.push([
          P,
          x
        ]), $e.set(I.length - 1, Math.min(f, m)), e.nodes.val = A, e.elements.val = I, console.log(`Added brace ${t}-${n}@${o} \u2192 ${l}-${s}@${d}`), I.length - 1;
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
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((ee) => parseFloat(ee) / 100), [i, c] = d.split("x").map((ee) => parseFloat(ee) / 100), m = [
          0
        ];
        for (const ee of n) m.push(m[m.length - 1] + ee);
        const M = [
          0
        ];
        for (const ee of o) M.push(M[M.length - 1] + ee);
        const w = [
          0
        ];
        for (const ee of l) w.push(w[w.length - 1] + ee);
        const y = m.length, p = M.length, h = w.length, k = l.length, A = [], I = {};
        for (let ee = 0; ee < h; ee++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y; we++) I[`${we},${ee},${ue}`] = A.length, A.push([
          m[we],
          w[ee],
          M[ue]
        ]);
        const T = [], P = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < k; ee++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y; we++) {
          const se = T.length;
          T.push([
            I[`${we},${ee},${ue}`],
            I[`${we},${ee + 1},${ue}`]
          ]), P.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y - 1; we++) {
          const se = T.length;
          T.push([
            I[`${we},${ee},${ue}`],
            I[`${we + 1},${ee},${ue}`]
          ]), x.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let ue = 0; ue < y; ue++) for (let we = 0; we < p - 1; we++) {
          const se = T.length;
          T.push([
            I[`${ue},${ee},${we}`],
            I[`${ue},${ee},${we + 1}`]
          ]), x.add(se), u.set(se, ee - 1);
        }
        const C = 15100 * Math.sqrt(a) * 10, O = C / (2 * (1 + 0.2)), j = r * f, g = r * f ** 3 / 12, E = f * r ** 3 / 12, v = r * f * (r ** 2 + f ** 2) / 12, F = i * c, X = i * c ** 3 / 12, V = c * i ** 3 / 12, ae = i * c * (i ** 2 + c ** 2) / 12, Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < T.length; ee++) Q.set(ee, C), K.set(ee, O), P.has(ee) ? (de.set(ee, j), re.set(ee, g), Ie.set(ee, E), Re.set(ee, v), D.set(ee, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (de.set(ee, F), re.set(ee, X), Ie.set(ee, V), Re.set(ee, ae), D.set(ee, {
          type: "rect",
          b: i,
          h: c,
          name: `V${d}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < p; ee++) for (let ue = 0; ue < y; ue++) fe.set(I[`${ue},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = A, e.elements.val = T, e.nodeInputs.val = {
          supports: fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Q,
          shearModuli: K,
          areas: de,
          momentsOfInertiaZ: re,
          momentsOfInertiaY: Ie,
          torsionalConstants: Re,
          sectionShapes: D
        }, B = P, G = x, $e = u, We = m.map((ee, ue) => ({
          label: String.fromCharCode(65 + ue),
          coord: ee
        })), Xe = M.map((ee, ue) => ({
          label: `${ue + 1}`,
          coord: ee
        })), pt = w[w.length - 1], Xn(We.map((ee) => ee.coord), Xe.map((ee) => ee.coord), pt, We.map((ee) => ee.label), Xe.map((ee) => ee.label));
        {
          const ee = w.map((ue, we) => ({
            name: we === 0 ? "Base" : `P${we}`,
            height: we > 0 ? ue - w[we - 1] : 0,
            elev: ue
          }));
          wo(ee, m, M);
        }
        const oe = Ae.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const ee = We.map((we) => we.label), ue = Xe.map((we) => we.label);
          oe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const we of ee) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${we}">${we}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const we of ue) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${we}">${we}</button>`;
        }
        const pe = Ae.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < k; ee++) pe.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return as(m, M, w), Qe(), console.log(`Model3D: ${A.length}n ${T.length}e | ${y}x${p} grid, ${k} floors | COL${s} V${d} f'c=${a}`), {
          nodes: A.length,
          elements: T.length,
          columns: P.size,
          beams: x.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), B = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), We = [], Xe = [], pt = 0, ls(), rs(), Ht();
        const t = Ae.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Qe();
      },
      frame(t, n, o = 0, l = 0) {
        Ke.clear();
        const s = [];
        o > 0 && s.push(-o);
        let d = 0;
        s.push(d);
        for (const y of t) d += y, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let r = 0;
        for (const y of n) r += y, a.push(r);
        const f = (y) => o > 0 && y === 0 || l > 0 && y === s.length - 1, i = {}, c = [];
        for (let y = 0; y < a.length; y++) for (let p = 0; p < s.length; p++) y === 0 && f(p) || (i[`${p},${y}`] = c.length, c.push([
          s[p],
          0,
          a[y]
        ]));
        const m = [];
        B = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let p = 0; p < s.length; p++) f(p) || (B.add(m.length), m.push([
          i[`${p},${y}`],
          i[`${p},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let p = 0; p < s.length - 1; p++) G.add(m.length), m.push([
          i[`${p},${y}`],
          i[`${p + 1},${y}`]
        ]);
        const M = /* @__PURE__ */ new Map(), w = mt();
        for (let y = 0; y < s.length; y++) {
          if (f(y)) continue;
          const p = `${y},0`;
          i[p] !== void 0 && M.set(i[p], [
            ...w
          ]);
        }
        return e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: M
        }), We = [
          ...s
        ], Xe = [
          0
        ], pt = a[a.length - 1] || 0, setTimeout(() => {
          wt(), Xn(s, [
            0
          ]), No(), qo();
        }, 50), Qe(), {
          nodes: c.length,
          elements: m.length
        };
      },
      building(t, n, o, l = 3, s = 0, d = 0, a = 0, r = 0, f = 1) {
        Ke.clear();
        const i = [];
        s > 0 && i.push(-s), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        d > 0 && i.push(i[i.length - 1] + d);
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const u of n) c.push(c[c.length - 1] + u);
        r > 0 && c.push(c[c.length - 1] + r);
        const m = [
          0
        ];
        for (const u of o) m.push(m[m.length - 1] + u);
        const M = (u) => s > 0 && u === 0 || d > 0 && u === i.length - 1, w = (u) => a > 0 && u === 0 || r > 0 && u === c.length - 1, y = (u, S) => M(u) || w(S), p = [], h = {};
        for (let u = 0; u < m.length; u++) for (let S = 0; S < c.length; S++) for (let C = 0; C < i.length; C++) u === 0 && y(C, S) || (h[`${C},${S},${u}`] = p.length, p.push([
          i[C],
          c[S],
          m[u]
        ]));
        const k = p.length, A = [];
        B = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
        const I = [];
        for (let u = 0; u < m.length - 1; u++) for (let S = 0; S < c.length; S++) for (let C = 0; C < i.length; C++) y(C, S) || I.push({
          el: [
            h[`${C},${S},${u}`],
            h[`${C},${S},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, S], floor: C } of I) {
          if (f <= 1) {
            B.add(A.length), $e.set(A.length, C), A.push([
              u,
              S
            ]);
            continue;
          }
          const O = p[u], j = p[S];
          let g = u;
          for (let E = 1; E < f; E++) {
            const v = E / f, F = p.length;
            p.push([
              O[0] + (j[0] - O[0]) * v,
              O[1] + (j[1] - O[1]) * v,
              O[2] + (j[2] - O[2]) * v
            ]), B.add(A.length), $e.set(A.length, C), A.push([
              g,
              F
            ]), g = F;
          }
          B.add(A.length), $e.set(A.length, C), A.push([
            g,
            S
          ]);
        }
        Te = /* @__PURE__ */ new Map();
        const T = [];
        for (let u = 1; u < m.length; u++) for (let S = 0; S < c.length; S++) for (let C = 0; C < i.length - 1; C++) T.push({
          el: [
            h[`${C},${S},${u}`],
            h[`${C + 1},${S},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: C
        });
        for (let u = 1; u < m.length; u++) for (let S = 0; S < i.length; S++) for (let C = 0; C < c.length - 1; C++) T.push({
          el: [
            h[`${S},${C},${u}`],
            h[`${S},${C + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: C
        });
        for (const { el: [u, S], floor: C, dir: O, bay: j } of T) {
          const g = p[u], E = p[S];
          let v = u;
          for (let X = 1; X < l; X++) {
            const V = X / l, ae = p.length;
            p.push([
              g[0] + (E[0] - g[0]) * V,
              g[1] + (E[1] - g[1]) * V,
              g[2] + (E[2] - g[2]) * V
            ]);
            const Q = A.length;
            G.add(Q), $e.set(Q, C), Te.set(Q, {
              dir: O,
              bay: j
            }), A.push([
              v,
              ae
            ]), v = ae;
          }
          const F = A.length;
          G.add(F), $e.set(F, C), Te.set(F, {
            dir: O,
            bay: j
          }), A.push([
            v,
            S
          ]);
        }
        if (st = /* @__PURE__ */ new Set(), Ee && ze > 0) {
          const u = (S, C, O) => {
            for (let g = 0; g < p.length; g++) if (Math.abs(p[g][0] - S) < 1e-6 && Math.abs(p[g][1] - C) < 1e-6 && Math.abs(p[g][2] - O) < 1e-6) return g;
            const j = p.length;
            return p.push([
              S,
              C,
              O
            ]), j;
          };
          for (let S = 1; S < m.length; S++) if (Je === "x") for (let C = 0; C < c.length - 1; C++) {
            const O = c[C], j = c[C + 1];
            for (let g = 1; g <= ze; g++) {
              const E = O + g / (ze + 1) * (j - O), v = [];
              for (let F = 0; F < i.length; F++) v.push(u(i[F], E, m[S]));
              for (let F = 0; F < i.length - 1; F++) {
                const X = A.length;
                st.add(X), G.add(X), $e.set(X, S - 1), Te.set(X, {
                  dir: "x",
                  bay: F
                }), A.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
          else for (let C = 0; C < i.length - 1; C++) {
            const O = i[C], j = i[C + 1];
            for (let g = 1; g <= ze; g++) {
              const E = O + g / (ze + 1) * (j - O), v = [];
              for (let F = 0; F < c.length; F++) v.push(u(E, c[F], m[S]));
              for (let F = 0; F < c.length - 1; F++) {
                const X = A.length;
                st.add(X), G.add(X), $e.set(X, S - 1), Te.set(X, {
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
        const P = /* @__PURE__ */ new Map(), x = mt();
        for (let u = 0; u < c.length; u++) for (let S = 0; S < i.length; S++) y(S, u) || P.set(h[`${S},${u},0`], [
          ...x
        ]);
        ce = /* @__PURE__ */ new Set();
        for (const u of he) {
          const S = m.length - 1, C = u.floors.includes(-1) ? Array.from({
            length: S
          }, (O, j) => j) : u.floors.filter((O) => O < S);
          for (const O of C) {
            let j, g, E, v;
            u.dir === "x" ? (j = u.bay, E = u.bay + 1, g = u.axisIdx, v = u.axisIdx) : (j = u.axisIdx, E = u.axisIdx, g = u.bay, v = u.bay + 1);
            const F = h[`${j},${g},${O}`], X = h[`${j},${g},${O + 1}`];
            let V, ae;
            if (u.dir === "x" ? (V = h[`${E},${v},${O}`], ae = h[`${E},${v},${O + 1}`]) : (V = h[`${E},${v},${O}`], ae = h[`${E},${v},${O + 1}`]), F === void 0 || V === void 0 || X === void 0 || ae === void 0) continue;
            const Q = be, K = He, de = p[F], re = p[V], Ie = p[X], Re = p[ae], D = [];
            for (let fe = 0; fe <= K; fe++) {
              const oe = [], pe = fe / K;
              for (let ee = 0; ee <= Q; ee++) {
                const ue = ee / Q, we = (1 - pe) * ((1 - ue) * de[0] + ue * re[0]) + pe * ((1 - ue) * Ie[0] + ue * Re[0]), se = (1 - pe) * ((1 - ue) * de[1] + ue * re[1]) + pe * ((1 - ue) * Ie[1] + ue * Re[1]), Se = (1 - pe) * ((1 - ue) * de[2] + ue * re[2]) + pe * ((1 - ue) * Ie[2] + ue * Re[2]);
                fe === 0 && ee === 0 ? oe.push(F) : fe === 0 && ee === Q ? oe.push(V) : fe === K && ee === 0 ? oe.push(X) : fe === K && ee === Q ? oe.push(ae) : (oe.push(p.length), p.push([
                  we,
                  se,
                  Se
                ]));
              }
              D.push(oe);
            }
            for (let fe = 0; fe < K; fe++) for (let oe = 0; oe < Q; oe++) {
              const pe = D[fe][oe], ee = D[fe][oe + 1], ue = D[fe + 1][oe + 1], we = D[fe + 1][oe], se = A.length;
              ce.add(se), $e.set(se, O), A.push([
                pe,
                ee,
                ue,
                we
              ]);
            }
            if (O === 0) for (let fe = 0; fe <= Q; fe++) {
              const oe = D[0][fe];
              oe >= k && P.set(oe, [
                ...x
              ]);
            }
          }
        }
        if (zt = /* @__PURE__ */ new Set(), Ue) {
          const u = l, S = l, C = /* @__PURE__ */ new Map(), O = (j, g, E) => `${Math.round(j * 1e4)},${Math.round(g * 1e4)},${Math.round(E * 1e4)}`;
          for (let j = 0; j < p.length; j++) C.set(O(p[j][0], p[j][1], p[j][2]), j);
          for (let j = 1; j < m.length; j++) {
            const g = m[j];
            for (let E = 0; E < i.length - 1; E++) for (let v = 0; v < c.length - 1; v++) {
              const F = i[E], X = i[E + 1], V = c[v], ae = c[v + 1], Q = [];
              for (let K = 0; K <= S; K++) {
                const de = [];
                for (let re = 0; re <= u; re++) {
                  const Ie = F + re / u * (X - F), Re = V + K / S * (ae - V);
                  if (K === 0 && re === 0) de.push(h[`${E},${v},${j}`]);
                  else if (K === 0 && re === u) de.push(h[`${E + 1},${v},${j}`]);
                  else if (K === S && re === 0) de.push(h[`${E},${v + 1},${j}`]);
                  else if (K === S && re === u) de.push(h[`${E + 1},${v + 1},${j}`]);
                  else {
                    const D = O(Ie, Re, g), fe = C.get(D);
                    if (fe !== void 0) de.push(fe);
                    else {
                      const oe = p.length;
                      p.push([
                        Ie,
                        Re,
                        g
                      ]), C.set(D, oe), de.push(oe);
                    }
                  }
                }
                Q.push(de);
              }
              for (let K = 0; K < S; K++) for (let de = 0; de < u; de++) {
                const re = Q[K][de], Ie = Q[K][de + 1], Re = Q[K + 1][de + 1], D = Q[K + 1][de], fe = A.length;
                zt.add(fe), $e.set(fe, j - 1), A.push([
                  re,
                  Ie,
                  Re,
                  D
                ]);
              }
            }
          }
        }
        if (Ft && gt) {
          const u = gt === "all" || gt === "x" || gt === "perimeter", S = gt === "all" || gt === "y" || gt === "perimeter", C = m.length - 1;
          for (let O = 0; O < C; O++) {
            if (u) for (let j = 0; j < c.length; j++) {
              if (gt === "perimeter" && j !== 0 && j !== c.length - 1) continue;
              const g = Math.floor((i.length - 1) / 2);
              for (let E = 0; E < i.length - 1; E++) {
                if (gt === "perimeter" && E !== g || y(E, j) || y(E + 1, j)) continue;
                const v = h[`${E},${j},${O}`], F = h[`${E + 1},${j},${O + 1}`], X = h[`${E + 1},${j},${O}`], V = h[`${E},${j},${O + 1}`];
                v !== void 0 && F !== void 0 && (A.push([
                  v,
                  F
                ]), $e.set(A.length - 1, O)), X !== void 0 && V !== void 0 && (A.push([
                  X,
                  V
                ]), $e.set(A.length - 1, O));
              }
            }
            if (S) for (let j = 0; j < i.length; j++) {
              if (gt === "perimeter" && j !== 0 && j !== i.length - 1) continue;
              const g = Math.floor((c.length - 1) / 2);
              for (let E = 0; E < c.length - 1; E++) {
                if (gt === "perimeter" && E !== g || y(j, E) || y(j, E + 1)) continue;
                const v = h[`${j},${E},${O}`], F = h[`${j},${E + 1},${O + 1}`], X = h[`${j},${E + 1},${O}`], V = h[`${j},${E},${O + 1}`];
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
          supports: P
        }), We = [
          ...i
        ], Xe = [
          ...c
        ], pt = m[m.length - 1] || 0, setTimeout(() => {
          wt(), Xn(i, c), No(), qo();
        }, 50), Qe(), {
          nodes: p.length,
          elements: A.length,
          nJointNodes: k
        };
      },
      galpon(t = 12, n = 20, o = 6, l = 3, s = 8, d = 4) {
        Ke.clear();
        const a = [], r = [], f = (w) => o + l * (1 - Math.pow(2 * w / t - 1, 2)), i = [], c = d + 1;
        for (let w = 0; w < c; w++) {
          const y = [], p = n / d * w;
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
            const k = t / s * h;
            y.push(a.length), a.push([
              k,
              p,
              f(k)
            ]);
          }
          y.push(a.length), a.push([
            t,
            p,
            o
          ]), i.push(y);
        }
        for (let w = 0; w < c; w++) {
          const y = i[w];
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
        for (let w = 0; w < d; w++) for (let y = 2; y < i[0].length; y++) r.push([
          i[w][y],
          i[w + 1][y]
        ]);
        for (let w = 0; w < d; w++) for (let y = 2; y < i[0].length - 1; y += 2) r.push([
          i[w][y],
          i[w + 1][y + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), M = mt();
        for (let w = 0; w < c; w++) m.set(i[w][0], [
          ...M
        ]), m.set(i[w][1], [
          ...M
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
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
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, et("frame"), Pe();
            break;
          }
          case "edificio": {
            et("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, he = [], Ue = false, Ee = false, Ft = false, Pe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            et("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, he = [], Ee = true, ze = 2;
            const n = ie.reduce((l, s) => l + s, 0) / ie.length, o = ne.reduce((l, s) => l + s, 0) / ne.length;
            Je = n >= o ? "y" : "x", Ue = true, at = 0.08, Ft = false, Pe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            et("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, he = [], Ee = true, ze = 2;
            const n = ie.reduce((l, s) => l + s, 0) / ie.length, o = ne.reduce((l, s) => l + s, 0) / ne.length;
            Je = n >= o ? "y" : "x", Ue = true, at = 0.08, Ft = true, gt = "perimeter", Pe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            et("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Ee = false;
            const n = Math.round(((_a2 = Z.nVanosX) == null ? void 0 : _a2.val) ?? 2), o = Math.round(((_b = Z.nVanosY) == null ? void 0 : _b.val) ?? 2);
            he = [
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
            ], Ue = true, at = 0.15, Pe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            et("edificio"), Ne.colMat = 2, Ne.vigaMat = 0, Ee = false;
            const n = Math.round(((_c = Z.nVanosX) == null ? void 0 : _c.val) ?? 2), o = Math.round(((_d = Z.nVanosY) == null ? void 0 : _d.val) ?? 2);
            he = [
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
            ], Ue = true, at = 0.12, Pe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            et("edificio"), Z.nPisos && (Z.nPisos.val = 1), Z.hPiso && (Z.hPiso.val = 4.5), Z.nVanosX && (Z.nVanosX.val = 3), Z.nVanosY && (Z.nVanosY.val = 2), Z.nSubViga && (Z.nSubViga.val = 3), ie = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, he = [], Ee = true, ze = 2, Je = ie[0] >= ne[0] ? "y" : "x", Ue = true, at = 0.08, dt = 3, yt = 3, Pe();
            break;
          }
          case "galpon": {
            et("galpon"), Ne.colMat = 1, Ne.vigaMat = 1, Pe();
            break;
          }
          case "barra": {
            et("barra"), Pe();
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
      plateQ4(t = 10, n = 10, o = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, r = 3e7, f = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${n}, ${o}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const m = performance.now(), M = Uo({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: n,
          meshNx: o,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: i
        }), w = performance.now() - m;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${M.maxW.toExponential(6)}`), console.log(`w_center = ${(M.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${M.maxMxx.toExponential(4)}, Myy_max = ${M.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${M.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${M.maxQx.toExponential(4)}, Qy_max = ${M.maxQy.toExponential(4)}`);
        const y = M.nodeResults.map((I) => [
          I.x,
          I.y,
          0
        ]), p = M.elementResults.map((I) => [
          ...I.nodes
        ]);
        e.nodes.val = y, e.elements.val = p;
        const h = /* @__PURE__ */ new Map();
        M.nodeResults.forEach((I, T) => {
          h.set(T, [
            0,
            0,
            I.w,
            I.bx,
            I.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const k = /* @__PURE__ */ new Map();
        M.nodeResults.forEach((I, T) => {
          (I.x < 1e-10 || I.x > t - 1e-10 || I.y < 1e-10 || I.y > n - 1e-10) && k.set(T, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const A = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const I = d * t * n / y.length;
          y.forEach((T, P) => {
            k.has(P) || A.set(P, [
              0,
              0,
              I,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: k,
          loads: A
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const I = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
          M.elementResults.forEach((x, u) => {
            I.set(u, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), T.set(u, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), P.set(u, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: I,
            bendingYY: T,
            bendingXY: P
          };
        }
        return setTimeout(() => wt(), 50), Qe(), M;
      },
      set(t, n) {
        Z[t] ? (Z[t].val = n, console.log(`${t} = ${n}`), sn(), Pe()) : ft[t] ? (ft[t].val = n, console.log(`${t} = ${n}`), sn(), Pe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...Z,
          ...ft
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const n = {};
          for (const l in Z) n[l] = Z[l].val;
          for (const l in ft) n[l] = ft[l].val;
          n.plateTheory = Le, n.supportType = xt;
          const o = uo()[z];
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
        }[t.toLowerCase()] || 3), Le = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Le] || Le}`), z.includes("placa") && (sn(), Pe());
      },
      setBc(t) {
        const n = uo()[z];
        if (!n || n.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const o = n.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = o >= 0 ? o : 0;
        }
        xt = t, xt >= n.length && (xt = 0), console.log(`Apoyo: ${n[xt].label} \u2192 DOFs: [${n[xt].dofs.map((o) => o ? "1" : "0").join(",")}]`), sn(), Pe();
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
        t && (b = t), n && (R = n), $ = Pn(b, R);
        const o = Ae.querySelector("#cad3d-force-unit"), l = Ae.querySelector("#cad3d-length-unit");
        return o && (o.textContent = b), l && (l.textContent = R), z && et(z), console.log(`Unidades: ${$.label} | E=${$.E.toExponential(3)} ${$.stress}`), $.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function cs() {
      return dl($);
    }
    function ds() {
      return pl($);
    }
    let ft = {};
    function et(t) {
      var _a2, _b, _c, _d;
      z = t, ia.val = true, xt = 0, ge && Co(), Z = {};
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
        ie = Array(l).fill($.defaultSpan), ne = Array(s).fill($.defaultSpan * 0.8);
        const d = Math.round(((_c = Z.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = Z.hPiso) == null ? void 0 : _d.val) ?? 3;
        q = Array(d).fill(a);
      }
      sn(), setTimeout(() => {
        ka(), Pe();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = Z[t]) == null ? void 0 : _a2.val) ?? ((_b = ft[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Pe() {
      switch (z) {
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
          const n = le("Lvix") || 0, o = le("Lvdx") || 0, l = le("Lviy") || 0, s = le("Lvdy") || 0, d = Math.max(1, Math.round(le("nSubViga") || 3)), a = Math.max(1, Math.round(le("nSubCol") || 1)), r = le("hPiso"), f = q.length > 0 ? [
            ...q
          ] : Array(Math.round(le("nPisos"))).fill(r);
          Ke.building([
            ...ie
          ], [
            ...ne
          ], f, d, n, o, l, s, a);
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
      if ((z === "frame" || z === "edificio" || z === "galpon") && e.nodeInputs) {
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
      ].includes(z)) {
        if (U.size > 0 || Y.size > 0 || _) {
          const n = e.elements.val, o = n.filter((l, s) => !(U.has(s) || Y.has(s) || _ && !W.has(s)));
          o.length !== n.length && (e.elements.val = o);
        }
        setTimeout(() => {
          vn(), Fo();
        }, 30);
      }
    }
    function ps() {
      const t = le("span"), n = Math.round(le("divisions")), o = le("height"), l = t / n, s = [], d = [];
      for (let c = 0; c <= n; c++) s.push([
        l * c,
        0,
        0
      ]);
      for (let c = 0; c <= n; c++) s.push([
        l * c,
        0,
        o
      ]);
      const a = n + 1;
      for (let c = 0; c < n; c++) d.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < n; c++) d.push([
        a + c,
        a + c + 1
      ]);
      for (let c = 0; c <= n; c++) d.push([
        c,
        a + c
      ]);
      for (let c = 0; c < n; c++) c < n / 2 ? d.push([
        c,
        a + c + 1
      ]) : d.push([
        a + c,
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
      if (f !== 0) for (let c = 0; c <= n; c++) i.set(c, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      }), Qe();
    }
    function fs() {
      const t = le("width"), n = le("height"), o = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), s = Math.max(1, Math.round(le("nSub") || 4)), d = [
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
      for (let m = 1; m < s; m++) {
        const M = m / s, w = d.length;
        d.push([
          r[0] + (f[0] - r[0]) * M,
          r[1] + (f[1] - r[1]) * M,
          r[2] + (f[2] - r[2]) * M
        ]), a.push([
          i,
          w
        ]), i = w;
      }
      a.push([
        i,
        2
      ]);
      const c = /* @__PURE__ */ new Map();
      if (o !== 0 && l === 0) c.set(2, [
        o,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && o === 0) for (let m = 1; m < d.length; m++) m === 0 || m === 3 || c.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (o !== 0 && l !== 0) for (let m = 1; m < d.length; m++) m === 0 || m === 3 || c.set(m, [
        m === 2 ? o : 0,
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
        loads: c
      }), Qe();
    }
    function us() {
      const t = le("dx"), n = le("dy"), o = le("dz"), l = Math.round(le("stories")), s = Math.max(1, Math.round(le("nSub") || 3)), d = [];
      for (let p = 0; p <= l; p++) d.push([
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
        const k = d[p], A = d[h];
        let I = p;
        for (let T = 1; T < s; T++) {
          const P = T / s, x = r.length;
          r.push([
            k[0] + (A[0] - k[0]) * P,
            k[1] + (A[1] - k[1]) * P,
            k[2] + (A[2] - k[2]) * P
          ]), f.push([
            I,
            x
          ]), I = x;
        }
        f.push([
          I,
          h
        ]);
      }
      const c = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) c.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = le("Ex") ?? 0, M = (le("CM") ?? 0) + (le("CV") ?? 0), w = a - 2, y = /* @__PURE__ */ new Map();
      if (m !== 0 && M === 0) y.set(w, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (M !== 0 && m === 0) for (let p = 0; p < r.length; p++) c.has(p) || y.set(p, [
        0,
        0,
        M,
        0,
        0,
        0
      ]);
      else if (m !== 0 && M !== 0) for (let p = 0; p < r.length; p++) c.has(p) || y.set(p, [
        p === w ? m : 0,
        0,
        M,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), Qe();
    }
    function xa() {
      const t = le("L"), n = Math.round(le("nElem")), o = le("F"), l = t / n, s = [], d = [];
      for (let f = 0; f <= n; f++) s.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < n; f++) d.push([
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
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      }), Qe();
    }
    function ms() {
      const t = le("Lx") || 15, n = le("Ly") || 10, o = le("meshSize") || 0.5, l = le("q") || -3, s = le("t") || 1, d = le("E") || 3e7, a = le("nu") || 0.3, r = d / (2 * (1 + a)), f = Le === 1 ? "Membrana" : Le === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: c, boundaryIndices: m } = hn({
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
      }), M = t * n, w = l * M / i.length, y = new Map(m.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(i.map((h, k) => [
        k,
        [
          0,
          0,
          w,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = i, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(c.map((h, k) => [
          k,
          d
        ])),
        elasticitiesOrthogonal: new Map(c.map((h, k) => [
          k,
          d
        ])),
        thicknesses: new Map(c.map((h, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map(c.map((h, k) => [
          k,
          a
        ])),
        shearModuli: new Map(c.map((h, k) => [
          k,
          r
        ]))
      });
      try {
        const h = kt(i, c, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const k = gn(i, c, e.elementInputs.val, h);
        k && e.analyzeOutputs && (e.analyzeOutputs.val = k), console.log(`Plate 3Q [${f}]: ${i.length} nodes, ${c.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function bs() {
      const t = le("Lx") || 10, n = le("Ly") || 10, o = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), s = le("t") || 0.2, d = le("q") || -10, a = le("E") || 3e7, r = le("nu") || 0.3, f = xt === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0;
      return Ke.plateQ4(t, n, o, l, f, d, s, a, r, c);
    }
    function gs() {
      const t = le("a") || 6, n = le("b") || 4, o = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), s = le("t") || 0.1, d = le("q") || -10, a = le("E") || 35e6, r = le("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0, c = Ke.plateQ4(t, n, o, l, "simply-supported", d, s, a, r, i), m = a * s * s * s / (12 * (1 - r * r));
      let M = 0;
      for (let w = 1; w <= 19; w += 2) for (let y = 1; y <= 19; y += 2) {
        const p = w * w / (t * t) + y * y / (n * n);
        M += 1 / (w * y * p * p);
      }
      if (M *= 16 * Math.abs(d) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${M.toExponential(6)}`), c) {
        const w = Math.abs((Math.abs(c.centerW || 0) - M) / M * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return c;
    }
    function hs() {
      const t = le("t") || 0.2, n = le("q") || -10, o = le("E") || 35e6, l = le("nu") || 0.2, s = le("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = d.reduce((g, E) => g + E, 0), f = a.reduce((g, E) => g + E, 0), i = [
        0
      ];
      for (const g of d) i.push(i[i.length - 1] + g);
      const c = [
        0
      ];
      for (const g of a) c.push(c[c.length - 1] + g);
      const m = Math.max(2, Math.round(r / s)), M = Math.max(2, Math.round(f / s)), w = r / m, y = f / M, p = [];
      for (let g = 0; g <= M; g++) for (let E = 0; E <= m; E++) p.push([
        E * w,
        g * y
      ]);
      const h = [], k = /* @__PURE__ */ new Set();
      for (const g of i) for (const E of c) {
        let v = 1 / 0, F = 0;
        for (let X = 0; X < p.length; X++) {
          const V = Math.hypot(p[X][0] - g, p[X][1] - E);
          V < v && (v = V, F = X);
        }
        k.has(F) || (k.add(F), h.push({
          node: F,
          dof: 0,
          k: 1e15
        }));
      }
      const I = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][I]}]: ${r}\xD7${f}m, ${m}\xD7${M} elem, ${k.size} columnas`);
      const T = performance.now(), P = Uo({
        E: o,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: m,
        meshNy: M,
        bcType: "none",
        pressure: n,
        theoryType: I,
        springs: h
      }), x = performance.now() - T;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${P.maxW.toExponential(4)}`);
      const u = P.nodeResults.map((g) => [
        g.x,
        g.y,
        0
      ]), S = P.elementResults.map((g) => [
        ...g.nodes
      ]);
      e.nodes.val = u, e.elements.val = S;
      const C = /* @__PURE__ */ new Map();
      P.nodeResults.forEach((g, E) => {
        C.set(E, [
          0,
          0,
          g.w,
          g.bx,
          g.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: C
      });
      const O = /* @__PURE__ */ new Map();
      for (const g of k) O.set(g, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const j = /* @__PURE__ */ new Map();
      if (Math.abs(n) > 1e-30) {
        const g = n * r * f / u.length;
        u.forEach((E, v) => {
          O.has(v) || j.set(v, [
            0,
            0,
            g,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: O,
        loads: j
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const g = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        P.elementResults.forEach((F, X) => {
          g.set(X, [
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
          bendingXX: g,
          bendingYY: E,
          bendingXY: v
        };
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function xs() {
      const t = le("L") || 4, n = le("H") || 2, o = le("t") || 0.1, l = le("E") || 2e7, s = le("nu") || 0.2, d = l / (2 * (1 + s)), a = le("q") || -100, r = le("b") || 0.8, f = le("meshSize") || 0.2, { nodes: i, elements: c, boundaryIndices: m } = hn({
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
      }), M = i, w = 0.4, y = /* @__PURE__ */ new Map();
      for (let x = 0; x < M.length; x++) {
        const u = M[x][0], S = M[x][1];
        Math.abs(S) < 1e-6 && (u <= w + 1e-6 || u >= t - w - 1e-6) && y.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - r) / 2, h = p + r, k = [];
      for (let x = 0; x < M.length; x++) if (Math.abs(M[x][1] - n) < 1e-6) {
        const u = M[x][0];
        u >= p - 1e-6 && u <= h + 1e-6 && k.push(x);
      }
      const A = a * r / Math.max(k.length, 1), I = /* @__PURE__ */ new Map();
      for (const x of k) I.set(x, [
        0,
        A,
        0,
        0,
        0,
        0
      ]);
      const T = {
        elasticities: new Map(c.map((x, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(c.map((x, u) => [
          u,
          l
        ])),
        thicknesses: new Map(c.map((x, u) => [
          u,
          o
        ])),
        poissonsRatios: new Map(c.map((x, u) => [
          u,
          s
        ])),
        shearModuli: new Map(c.map((x, u) => [
          u,
          d
        ]))
      }, P = {
        supports: y,
        loads: I
      };
      try {
        const x = kt(M, c, P, T), u = gn(M, c, T, x), S = M.map((O) => [
          O[0],
          0,
          O[1]
        ]);
        if (e.nodes.val = S, e.elements.val = c, x && x.deformations) {
          const O = /* @__PURE__ */ new Map();
          x.deformations.forEach((j, g) => {
            O.set(g, [
              j[0],
              j[2],
              j[1],
              j[3],
              j[5],
              j[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: O
          });
        }
        if (e.nodeInputs) {
          const O = /* @__PURE__ */ new Map();
          y.forEach((g, E) => O.set(E, g));
          const j = /* @__PURE__ */ new Map();
          I.forEach((g, E) => j.set(E, [
            g[0],
            g[2],
            g[1],
            g[3],
            g[5],
            g[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: O,
            loads: j
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let C = 0;
        x && x.deformations && x.deformations.forEach((O) => {
          const j = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]);
          C = Math.max(C, j);
        }), console.log(`Viga Alta: ${M.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${n}, t=${o}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${C.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function vs() {
      const t = le("H") || 4, n = le("B") || 3, o = le("tw") || 0.3, l = le("tb") || 0.4, s = le("meshSize") || 0.2, d = le("E") || 25e6, a = le("nu") || 0.2, r = d / (2 * (1 + a)), f = le("gamma") || 18, i = le("Ka") || 0.33, c = le("Es") || 5e4, m = le("nus") || 0.3, M = c / (2 * (1 + m)), w = le("kn") || 1e6, y = le("ks") || 1e4, p = le("gammaW") || 9.81, h = le("Hw") || 3.5, k = le("qs") || 0, A = xt, I = n * 0.3, T = n * 0.7, P = [
        [
          -I,
          0,
          0
        ],
        [
          T,
          0,
          0
        ],
        [
          T,
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
          -I,
          l,
          0
        ]
      ];
      let x = [], u = [], S = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), O;
      if (A === 0) {
        const E = hn({
          points: P,
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
        x = E.nodes, u = E.elements;
        for (let F = 0; F < x.length; F++) Math.abs(x[F][1]) < 1e-6 && S.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let F = 0; F < x.length; F++) {
          const X = x[F][0], V = x[F][1];
          Math.abs(X - o) < s * 0.6 && V >= l - 1e-6 && v.push({
            idx: F,
            y: V
          });
        }
        v.sort((F, X) => F.y - X.y);
        for (let F = 0; F < v.length; F++) {
          const { idx: X, y: V } = v[F], ae = l + t - V, Q = i * f * ae + i * k;
          let K = s;
          F > 0 && F < v.length - 1 ? K = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? K = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (K = (v[F].y - v[F - 1].y) / 2);
          const de = Q * K;
          Math.abs(de) > 1e-10 && C.set(X, [
            de,
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
        const E = T, v = l + t;
        if (A === 2) {
          const F = [
            [
              -I,
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
              -I,
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
          x = ae.nodes, u = ae.elements;
          const Q = s * 0.4, K = [];
          for (let se = 0; se < x.length; se++) {
            const Se = x[se][0], je = x[se][1];
            Math.abs(Se - o) < Q && je >= l - Q && K.push(se);
          }
          K.sort((se, Se) => x[se][1] - x[Se][1]);
          const de = [
            K[0]
          ];
          for (let se = 1; se < K.length; se++) {
            const Se = x[K[se]][1] - x[de[de.length - 1]][1];
            Math.abs(Se) > s * 0.05 && de.push(K[se]);
          }
          K.length = 0, K.push(...de);
          const re = /* @__PURE__ */ new Map();
          for (const se of K) {
            const Se = x.length;
            x.push([
              x[se][0],
              x[se][1],
              x[se][2]
            ]), re.set(se, Se);
          }
          const Ie = u.length, Re = [];
          for (let se = 0; se < Ie; se++) {
            const Se = u[se], je = (x[Se[0]][0] + x[Se[1]][0] + x[Se[2]][0]) / 3, rt = (x[Se[0]][1] + x[Se[1]][1] + x[Se[2]][1]) / 3, ct = je >= -I && je <= T && rt >= 0 && rt <= l, Ct = je >= 0 && je <= o && rt >= l && rt <= l + t, _t = ct || Ct;
            if (Re.push(!_t), !_t) for (let Pt = 0; Pt < Se.length; Pt++) {
              const Dt = re.get(Se[Pt]);
              Dt !== void 0 && (Se[Pt] = Dt);
            }
          }
          const D = u.length;
          for (let se = 0; se < K.length - 1; se++) {
            const Se = K[se], je = K[se + 1], rt = re.get(Se), ct = re.get(je);
            u.push([
              je,
              Se,
              rt,
              ct
            ]);
          }
          const fe = u.length - D, oe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
          for (let se = 0; se < Ie; se++) Re[se] ? (oe.set(se, c), pe.set(se, c), ue.set(se, m), we.set(se, M), ee.set(se, 1)) : (oe.set(se, d), pe.set(se, d), ue.set(se, a), we.set(se, r), ee.set(se, 1));
          for (let se = D; se < u.length; se++) oe.set(se, w), pe.set(se, 0), ue.set(se, 0), we.set(se, y), ee.set(se, 0);
          O = {
            elasticities: oe,
            elasticitiesOrthogonal: pe,
            thicknesses: ee,
            poissonsRatios: ue,
            shearModuli: we
          };
          for (let se = 0; se < x.length; se++) {
            const Se = x[se][0], je = x[se][1];
            Math.abs(je) < 1e-6 ? S.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - E) < s * 0.1 && S.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < Ie; se++) {
            if (!Re[se]) continue;
            const Se = u[se], je = x[Se[0]], rt = x[Se[1]], ct = x[Se[2]], Ct = Math.abs((rt[0] - je[0]) * (ct[1] - je[1]) - (ct[0] - je[0]) * (rt[1] - je[1])) / 2, _t = -f * Ct / 3;
            for (const Pt of Se) {
              const Dt = C.get(Pt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Dt[1] += _t, C.set(Pt, Dt);
            }
          }
          if (k > 0) {
            const se = [];
            for (let Se = 0; Se < x.length; Se++) {
              const je = x[Se][0], rt = x[Se][1];
              Math.abs(rt - v) < s * 0.1 && je > o - 1e-6 && se.push({
                idx: Se,
                x: je
              });
            }
            se.sort((Se, je) => Se.x - je.x);
            for (let Se = 0; Se < se.length; Se++) {
              let je = s;
              Se > 0 && Se < se.length - 1 ? je = (se[Se + 1].x - se[Se - 1].x) / 2 : Se === 0 && se.length > 1 ? je = (se[1].x - se[0].x) / 2 : Se === se.length - 1 && se.length > 1 && (je = (se[Se].x - se[Se - 1].x) / 2);
              const rt = -k * je, ct = C.get(se[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ct[1] += rt, C.set(se[Se].idx, ct);
            }
          }
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${fe} elem interfaz, kn=${w}, ks=${y}`);
        } else {
          const F = [
            [
              -I,
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
              -I,
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
          x = V.nodes, u = V.elements;
          const ae = (D) => {
            const fe = (x[D[0]][0] + x[D[1]][0] + x[D[2]][0]) / 3, oe = (x[D[0]][1] + x[D[1]][1] + x[D[2]][1]) / 3, pe = fe >= -I && fe <= T && oe >= 0 && oe <= l, ee = fe >= 0 && fe <= o && oe >= l && oe <= l + t;
            return pe || ee;
          }, Q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Re = [];
          for (let D = 0; D < u.length; D++) {
            const fe = ae(u[D]);
            Re.push(!fe), fe ? (Q.set(D, d), K.set(D, d), re.set(D, a), Ie.set(D, r), de.set(D, 1)) : (Q.set(D, c), K.set(D, c), re.set(D, m), Ie.set(D, M), de.set(D, 1));
          }
          O = {
            elasticities: Q,
            elasticitiesOrthogonal: K,
            thicknesses: de,
            poissonsRatios: re,
            shearModuli: Ie
          };
          for (let D = 0; D < x.length; D++) {
            const fe = x[D][0], oe = x[D][1];
            Math.abs(oe) < 1e-6 ? S.set(D, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - E) < s * 0.1 && S.set(D, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let D = 0; D < u.length; D++) {
            if (!Re[D]) continue;
            const fe = u[D], oe = x[fe[0]], pe = x[fe[1]], ee = x[fe[2]], ue = Math.abs((pe[0] - oe[0]) * (ee[1] - oe[1]) - (ee[0] - oe[0]) * (pe[1] - oe[1])) / 2, we = -f * ue / 3;
            for (const se of fe) {
              const Se = C.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += we, C.set(se, Se);
            }
          }
          if (k > 0) {
            const D = [];
            for (let fe = 0; fe < x.length; fe++) {
              const oe = x[fe][0], pe = x[fe][1];
              Math.abs(pe - v) < s * 0.1 && oe > o - 1e-6 && D.push({
                idx: fe,
                x: oe
              });
            }
            D.sort((fe, oe) => fe.x - oe.x);
            for (let fe = 0; fe < D.length; fe++) {
              let oe = s;
              fe > 0 && fe < D.length - 1 ? oe = (D[fe + 1].x - D[fe - 1].x) / 2 : fe === 0 && D.length > 1 ? oe = (D[1].x - D[0].x) / 2 : fe === D.length - 1 && D.length > 1 && (oe = (D[fe].x - D[fe - 1].x) / 2);
              const pe = -k * oe, ee = C.get(D[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += pe, C.set(D[fe].idx, ee);
            }
          }
        }
      }
      if (A === 3) {
        const E = hn({
          points: P,
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
        x = E.nodes, u = E.elements;
        for (let ae = 0; ae < x.length; ae++) Math.abs(x[ae][1]) < 1e-6 && S.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, F = Math.min(h, t), X = v - F, V = [];
        for (let ae = 0; ae < x.length; ae++) {
          const Q = x[ae][0], K = x[ae][1];
          Math.abs(Q - o) < s * 0.6 && K >= l - 1e-6 && V.push({
            idx: ae,
            y: K
          });
        }
        V.sort((ae, Q) => ae.y - Q.y);
        for (let ae = 0; ae < V.length; ae++) {
          const { idx: Q, y: K } = V[ae], de = Math.max(0, v - K);
          if (de <= 0 || K < X - 1e-6) continue;
          const re = Math.min(de, F), Ie = p * re;
          let Re = s;
          ae > 0 && ae < V.length - 1 ? Re = (V[ae + 1].y - V[ae - 1].y) / 2 : ae === 0 && V.length > 1 ? Re = (V[1].y - V[0].y) / 2 : ae === V.length - 1 && V.length > 1 && (Re = (V[ae].y - V[ae - 1].y) / 2);
          const D = Ie * Re;
          Math.abs(D) > 1e-10 && C.set(Q, [
            D,
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
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, Q) => [
            Q,
            d
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
      const j = {
        supports: S,
        loads: C
      }, g = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const E = kt(x, u, j, O), v = u.filter((de) => de.length === 3), F = {};
        for (const de of Object.keys(O)) {
          const re = O[de];
          if (re && re instanceof Map) {
            const Ie = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let D = 0; D < u.length; D++) u[D].length === 3 && (re.has(D) && Ie.set(Re, re.get(D)), Re++);
            F[de] = Ie;
          }
        }
        const X = gn(x, v, F, E), V = x.map((de) => [
          de[0],
          0,
          de[1]
        ]);
        if (e.nodes.val = V, e.elements.val = v, E && E.deformations) {
          const de = /* @__PURE__ */ new Map();
          E.deformations.forEach((re, Ie) => {
            de.set(Ie, [
              re[0],
              re[2],
              re[1],
              re[3],
              re[5],
              re[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: de
          });
        }
        const ae = /* @__PURE__ */ new Map();
        S.forEach((de, re) => ae.set(re, de));
        const Q = /* @__PURE__ */ new Map();
        C.forEach((de, re) => Q.set(re, [
          de[0],
          de[2],
          de[1],
          de[3],
          de[5],
          de[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Q
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let K = 0;
        E && E.deformations && E.deformations.forEach((de) => {
          const re = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          K = Math.max(K, re);
        }), console.log(`Muro Contencion [${g[A]}]: ${x.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${n}, tw=${o}, tb=${l}, Ka=${i}, gamma=${f}, qs=${k}`), A === 1 && console.log(`  Es=${c}, nus=${m}`), A === 2 && console.log(`  Es=${c}, nus=${m}, kn=${w}, ks=${y}`), A === 3 && console.log(`  gammaW=${p}, Hw=${h}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (E) {
        console.warn("Muro Contencion failed:", E.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function ys() {
      const t = le("Lx") || 2, n = le("Ly") || 2, o = le("t") || 0.5, l = le("colA") || 0.4, s = le("colH") || 1.5, d = Math.round(le("nx") || 8), a = Math.round(le("ny") || 8), r = le("E") || 25e6, f = le("nu") || 0.2, i = le("P") || -500, c = le("Mx") || 0, m = le("My") || 0, M = le("ks") || 2e4, w = t / d, y = n / a, p = t / 2, h = n / 2, k = l / 2, A = [];
      for (let S = 0; S <= a; S++) for (let C = 0; C <= d; C++) {
        const O = S * (d + 1) + C;
        let j = w, g = y;
        (C === 0 || C === d) && (j = w / 2), (S === 0 || S === a) && (g = y / 2), A.push({
          node: O,
          dof: 0,
          k: M * j * g
        });
      }
      let I = 0;
      for (let S = 0; S <= a; S++) for (let C = 0; C <= d; C++) Math.abs(C * w - p) <= k + 1e-6 && Math.abs(S * y - h) <= k + 1e-6 && I++;
      const T = i / Math.max(I, 1), P = [];
      for (let S = 0; S <= a; S++) for (let C = 0; C <= d; C++) {
        const O = C * w, j = S * y;
        Math.abs(O - p) <= k + 1e-6 && Math.abs(j - h) <= k + 1e-6 && P.push({
          node: S * (d + 1) + C,
          dof: 0,
          value: T
        });
      }
      if (Math.abs(c) > 1e-6) {
        const S = k > 1e-6 ? k : y, C = c / S;
        for (let O = 0; O <= a; O++) for (let j = 0; j <= d; j++) {
          const g = j * w, E = O * y;
          if (Math.abs(g - p) <= k + 1e-6 && Math.abs(E - h) <= k + 1e-6) {
            const v = E - h;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              P.push({
                node: O * (d + 1) + j,
                dof: 0,
                value: F * C / I * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const S = k > 1e-6 ? k : w, C = m / S;
        for (let O = 0; O <= a; O++) for (let j = 0; j <= d; j++) {
          const g = j * w, E = O * y;
          if (Math.abs(g - p) <= k + 1e-6 && Math.abs(E - h) <= k + 1e-6) {
            const v = g - p;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              P.push({
                node: O * (d + 1) + j,
                dof: 0,
                value: F * C / I * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 1;
      console.log(`Zapata: ${t}x${n}m, t=${o}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${i}, Mx=${c}, My=${m}, ks=${M}`);
      try {
        const S = Uo({
          E: r,
          nu: f,
          thickness: o,
          meshLx: t,
          meshLy: n,
          meshNx: d,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: A,
          pointLoads: P
        });
        console.log(`  Solved: w_max = ${S.maxW.toExponential(4)}`);
        const C = S.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), O = C.length;
        C.push([
          p - k,
          h - k,
          0
        ]), C.push([
          p + k,
          h - k,
          0
        ]), C.push([
          p + k,
          h + k,
          0
        ]), C.push([
          p - k,
          h + k,
          0
        ]), C.push([
          p - k,
          h - k,
          s
        ]), C.push([
          p + k,
          h - k,
          s
        ]), C.push([
          p + k,
          h + k,
          s
        ]), C.push([
          p - k,
          h + k,
          s
        ]);
        const j = S.elementResults.map((X) => [
          ...X.nodes
        ]);
        j.push([
          O,
          O + 4
        ]), j.push([
          O + 1,
          O + 5
        ]), j.push([
          O + 2,
          O + 6
        ]), j.push([
          O + 3,
          O + 7
        ]), j.push([
          O + 4,
          O + 5
        ]), j.push([
          O + 5,
          O + 6
        ]), j.push([
          O + 6,
          O + 7
        ]), j.push([
          O + 7,
          O + 4
        ]), j.push([
          O,
          O + 1
        ]), j.push([
          O + 1,
          O + 2
        ]), j.push([
          O + 2,
          O + 3
        ]), j.push([
          O + 3,
          O
        ]), e.nodes.val = C, e.elements.val = j;
        const g = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((X, V) => {
          g.set(V, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const E = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((X, V) => {
          const ae = X.x, Q = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Q < 1e-6 || Q > n - 1e-6) && E.set(V, [
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
          supports: E,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = S.elementResults.length, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
          S.elementResults.forEach((K, de) => {
            V.set(de, [
              K.Mxx,
              K.Mxx,
              K.Mxx
            ]), ae.set(de, [
              K.Myy,
              K.Myy,
              K.Myy
            ]), Q.set(de, [
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
      } catch (S) {
        console.warn("Zapata solver failed:", S.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function $s() {
      const t = le("Lx") || 0.4, n = le("Ly") || 0.4, o = le("t") || 0.025, l = le("dBolt") || 0.022, s = le("sx") || 0.28, d = le("sy") || 0.28, a = le("colA") || 0.2, r = le("meshSize") || 8e-3, f = le("E") || 2e8, i = le("nu") || 0.3, c = f / (2 * (1 + i)), m = le("P") || -200, M = Math.round(le("nBolts") || 4), w = t / 2, y = n / 2, p = l / 2, h = a / 2, k = [];
      M >= 4 && (k.push([
        w - s / 2,
        y - d / 2
      ]), k.push([
        w + s / 2,
        y - d / 2
      ]), k.push([
        w + s / 2,
        y + d / 2
      ]), k.push([
        w - s / 2,
        y + d / 2
      ])), M >= 6 && (k.push([
        w,
        y - d / 2
      ]), k.push([
        w,
        y + d / 2
      ])), M >= 8 && (k.push([
        w - s / 2,
        y
      ]), k.push([
        w + s / 2,
        y
      ]));
      const { nodes: A, elements: I } = hn({
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
      }), T = (g, E) => {
        for (const [v, F] of k) if ((g - v) * (g - v) + (E - F) * (E - F) < p * p) return true;
        return false;
      }, P = I.filter((g) => {
        const E = (A[g[0]][0] + A[g[1]][0] + A[g[2]][0]) / 3, v = (A[g[0]][1] + A[g[1]][1] + A[g[2]][1]) / 3;
        return !T(E, v);
      }), x = A, u = /* @__PURE__ */ new Map();
      for (let g = 0; g < x.length; g++) {
        const E = x[g][0], v = x[g][1];
        for (const [F, X] of k) {
          const V = Math.sqrt((E - F) * (E - F) + (v - X) * (v - X));
          V >= p * 0.7 && V <= p * 1.5 && u.set(g, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const S = /* @__PURE__ */ new Map();
      let C = 0;
      for (let g = 0; g < x.length; g++) {
        const E = x[g][0], v = x[g][1];
        Math.abs(E - w) <= h && Math.abs(v - y) <= h && C++;
      }
      const O = m / Math.max(C, 1);
      for (let g = 0; g < x.length; g++) {
        const E = x[g][0], v = x[g][1];
        if (Math.abs(E - w) <= h && Math.abs(v - y) <= h) {
          const F = S.get(g) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += O, S.set(g, F);
        }
      }
      const j = {
        elasticities: new Map(P.map((g, E) => [
          E,
          f
        ])),
        elasticitiesOrthogonal: new Map(P.map((g, E) => [
          E,
          f
        ])),
        thicknesses: new Map(P.map((g, E) => [
          E,
          o
        ])),
        poissonsRatios: new Map(P.map((g, E) => [
          E,
          i
        ])),
        shearModuli: new Map(P.map((g, E) => [
          E,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${n * 1e3}mm, t=${o * 1e3}mm, ${M} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${P.length} triangulos, ${x.length} nodos`);
      try {
        const g = kt(x, P, {
          supports: u,
          loads: S
        }, j), E = gn(x, P, j, g);
        e.nodes.val = x, e.elements.val = P, g && e.deformOutputs && (e.deformOutputs.val = g), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: S
        }), e.elementInputs && (e.elementInputs.val = {}), E && e.analyzeOutputs && (e.analyzeOutputs.val = E);
        let v = 0;
        g && g.deformations && g.deformations.forEach((F) => {
          const X = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (g) {
        console.warn("Placa Base failed:", g.message);
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function Ms() {
      const t = le("colB") || 0.3, n = le("colH") || 0.3, o = le("colT") || 8e-3, l = le("colLen") || 1.5, s = le("Lx") || 0.45, d = le("Ly") || 0.45, a = le("tPlaca") || 0.025, r = le("dBolt") || 0.022, f = le("sx") || 0.32, i = le("sy") || 0.32, c = Math.round(le("nSubColV") || 6), m = Math.round(le("nSubColH") || 4), M = Math.round(le("nSubPlaca") || 10), w = le("E") || 2e8, y = le("nu") || 0.3, p = w / (2 * (1 + y)), h = le("P") || -300, k = s / 2, A = d / 2, I = r / 2, T = t / 2, P = n / 2, x = [], u = [], S = M, C = s / S, O = d / S, j = (pe, ee) => ee * (S + 1) + pe;
      for (let pe = 0; pe <= S; pe++) for (let ee = 0; ee <= S; ee++) x.push([
        ee * C,
        pe * O,
        0
      ]);
      const g = [
        [
          k - f / 2,
          A - i / 2
        ],
        [
          k + f / 2,
          A - i / 2
        ],
        [
          k + f / 2,
          A + i / 2
        ],
        [
          k - f / 2,
          A + i / 2
        ]
      ], E = (pe, ee) => {
        for (const [ue, we] of g) if ((pe - ue) * (pe - ue) + (ee - we) * (ee - we) < I * I) return true;
        return false;
      }, v = u.length;
      for (let pe = 0; pe < S; pe++) for (let ee = 0; ee < S; ee++) {
        const ue = (ee + 0.5) * C, we = (pe + 0.5) * O;
        E(ue, we) || u.push([
          j(ee, pe),
          j(ee + 1, pe),
          j(ee + 1, pe + 1),
          j(ee, pe + 1)
        ]);
      }
      const F = u.length - v, X = c, V = m, ae = [
        [
          k - T,
          A - P
        ],
        [
          k + T,
          A - P
        ],
        [
          k + T,
          A + P
        ],
        [
          k - T,
          A + P
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
      ], de = (pe, ee) => {
        for (let ue = 0; ue < (S + 1) * (S + 1); ue++) if (Math.abs(x[ue][0] - pe) < C * 0.3 && Math.abs(x[ue][1] - ee) < O * 0.3 && Math.abs(x[ue][2]) < 1e-6) return ue;
        return -1;
      };
      for (const [pe, ee] of K) {
        const [ue, we] = ae[pe], [se, Se] = ae[ee], je = [];
        for (let rt = 0; rt <= X; rt++) {
          const ct = [], Ct = rt / X * l;
          for (let _t = 0; _t <= V; _t++) {
            const Pt = _t / V, Dt = ue + Pt * (se - ue), Sn = we + Pt * (Se - we);
            if (rt === 0) {
              const Vt = de(Dt, Sn);
              if (Vt >= 0) {
                ct.push(Vt);
                continue;
              }
            }
            let an = -1;
            for (let Vt = 0; Vt < x.length; Vt++) if (Math.abs(x[Vt][0] - Dt) < 1e-6 && Math.abs(x[Vt][1] - Sn) < 1e-6 && Math.abs(x[Vt][2] - Ct) < 1e-6) {
              an = Vt;
              break;
            }
            an >= 0 ? ct.push(an) : (ct.push(x.length), x.push([
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
      const re = u.length - Q, Ie = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (S + 1) * (S + 1); pe++) {
        const ee = x[pe][0], ue = x[pe][1];
        for (const [we, se] of g) {
          const Se = Math.sqrt((ee - we) * (ee - we) + (ue - se) * (ue - se));
          Se >= I * 0.5 && Se <= I * 2 && Ie.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Re = /* @__PURE__ */ new Map(), D = [];
      for (let pe = 0; pe < x.length; pe++) Math.abs(x[pe][2] - l) < 1e-6 && D.push(pe);
      const fe = h / Math.max(D.length, 1);
      for (const pe of D) Re.set(pe, [
        0,
        0,
        fe,
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
      for (let pe = v; pe < v + F; pe++) oe.elasticities.set(pe, w), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, a), oe.shearModuli.set(pe, p);
      for (let pe = Q; pe < Q + re; pe++) oe.elasticities.set(pe, w), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, o), oe.shearModuli.set(pe, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${n * 1e3}x${o * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${F} Q4 placa + ${re} Q4 columna = ${u.length} total`), console.log(`  ${x.length} nodos, P=${h} kN`);
      try {
        const pe = kt(x, u, {
          supports: Ie,
          loads: Re
        }, oe), ee = gn(x, u, oe, pe);
        e.nodes.val = x, e.elements.val = u, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Re
        }), e.elementInputs && (e.elementInputs.val = oe), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let ue = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((we) => {
          const se = Math.sqrt(we[0] * we[0] + we[1] * we[1] + we[2] * we[2]);
          ue = Math.max(ue, se);
        }), console.log(`  max|u| = ${ue.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = x, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Re
        });
      }
      setTimeout(() => wt(), 50), Qe();
    }
    function ws() {
      const t = le("H") || 6, n = le("angle") || 45, o = le("bTop") || 3, l = le("bBot") || 3, s = le("meshSize") || 2, d = le("E") || 5e4, a = le("nu") || 0.3, r = le("gamma") || 18, f = le("c") || 15, i = le("phi") || 30, c = le("qs") || 0, m = t / Math.tan(n * Math.PI / 180), M = l + m + o, w = t, y = [
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
          l + m,
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
      }), k = p, A = [], I = /* @__PURE__ */ new Map();
      for (let P = 0; P < k.length; P++) {
        const x = k[P][0], u = k[P][1];
        Math.abs(u + w) < 1e-6 ? (A.push({
          node: P,
          fixX: true,
          fixY: true
        }), I.set(P, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - M) < 1e-6) && (A.push({
          node: P,
          fixX: true,
          fixY: false
        }), I.set(P, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const T = t - s * 0.3;
      try {
        const P = k.map((E) => [
          E[0],
          E[1]
        ]), x = h.map((E) => [
          E[0],
          E[1],
          E[2]
        ]), u = Ua({
          nodes: P,
          elements: x,
          E: d,
          nu: a,
          gamma: r,
          c: f,
          phi: i,
          thickness: 1,
          supports: A,
          surcharge: c,
          surfaceYThreshold: T
        }), S = k.map((E) => [
          E[0],
          0,
          E[1]
        ]);
        e.nodes.val = S, e.elements.val = h;
        const C = /* @__PURE__ */ new Map();
        for (let E = 0; E < u.displacements.length; E++) {
          const [v, F] = u.displacements[E];
          C.set(E, [
            v,
            0,
            F,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: C
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: I
        }), e.elementInputs && (e.elementInputs.val = {});
        const O = /* @__PURE__ */ new Map();
        for (let E = 0; E < u.plasticStrain.length; E++) {
          const v = u.plasticStrain[E];
          O.set(E, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: O
        });
        let j = 0;
        for (const [E, v] of u.displacements) {
          const F = Math.sqrt(E * E + v * v);
          j = Math.max(j, F);
        }
        let g = 0;
        for (const E of u.plasticStrain) g = Math.max(g, E);
        console.log(`Talud SRM: ${k.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${n}\xB0, c=${f} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${j.toExponential(4)}`), console.log(`  max \u03B5_pl = ${g.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (P) {
        console.warn("Talud SRM failed:", P.message);
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
      const d = Ne.steelVigaType, a = d === 0 ? mo() : bo();
      if (Ne.vigaMat === 0) {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = `b${o}${r}`, c = `h${o}${r}`, m = {};
          m[i] = +$t(f.b).toFixed(2), m[c] = +$t(f.h).toFixed(2), t.addBinding(m, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${r + 1}`
          }), t.addBinding(m, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, i = f == null ? void 0 : f.match(new RegExp(`^b${o}(\\d+)$`)), c = f == null ? void 0 : f.match(new RegExp(`^h${o}(\\d+)$`));
          i && (n[parseInt(i[1])].b = Mt(r.value), Pe()), c && (n[parseInt(c[1])].h = Mt(r.value), Pe());
        });
      } else if (d <= 1) {
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
          i && (n[parseInt(i[1])].profileIdx = r.value, Pe());
        });
      } else if (d === 2) {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = {}, c = `${o}${r}`;
          i[`bf${c}`] = +$t(f.bf ?? 0.2).toFixed(3), i[`h${c}`] = +$t(f.hf ?? 0.4).toFixed(3), i[`tf${c}`] = +$t(f.tf ?? 0.015).toFixed(3), i[`tw${c}`] = +$t(f.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${o}${r + 1}`
          }), t.addBinding(i, `h${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          }), t.addBinding(i, `tf${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${o}${r + 1}`
          }), t.addBinding(i, `tw${c}`, {
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
            const c = `${o}${i}`;
            f === `bf${c}` && (n[i].bf = Mt(r.value), Pe()), f === `h${c}` && (n[i].hf = Mt(r.value), Pe()), f === `tf${c}` && (n[i].tf = Mt(r.value), Pe()), f === `tw${c}` && (n[i].tw = Mt(r.value), Pe());
          }
        });
      } else {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = {}, c = `${o}${r}`;
          i[`bc${c}`] = +$t(f.bc ?? 0.2).toFixed(3), i[`hc${c}`] = +$t(f.hc ?? 0.3).toFixed(3), i[`t${c}`] = +$t(f.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${r + 1}`
          }), t.addBinding(i, `hc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          }), t.addBinding(i, `t${c}`, {
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
            const c = `${o}${i}`;
            f === `bc${c}` && (n[i].bc = Mt(r.value), Pe()), f === `hc${c}` && (n[i].hc = Mt(r.value), Pe()), f === `t${c}` && (n[i].t = Mt(r.value), Pe());
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
      if (t && (t.innerHTML = ""), z !== "edificio" && z !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const n = va();
      if (!n) return;
      n.style.display = "";
      const o = $, l = Math.round(((_a2 = Z.nPisos) == null ? void 0 : _a2.val) ?? 3), s = ya(), d = $a(), a = ie.length || 1, r = ne.length || 1;
      for (; Ne.perFloor.length < l; ) {
        const x = Ne.perFloor.length > 0 ? JSON.parse(JSON.stringify(Ne.perFloor[Ne.perFloor.length - 1])) : rn(a, r);
        Ne.perFloor.push(x);
      }
      Ne.perFloor.length > l && (Ne.perFloor.length = l);
      for (const x of Ne.perFloor) {
        for (; x.vigasX.length < a; ) x.vigasX.push(x.vigasX.length > 0 ? {
          ...x.vigasX[x.vigasX.length - 1]
        } : ut());
        for (x.vigasX.length > a && (x.vigasX.length = a); x.vigasY.length < r; ) x.vigasY.push(x.vigasY.length > 0 ? {
          ...x.vigasY[x.vigasY.length - 1]
        } : ut());
        x.vigasY.length > r && (x.vigasY.length = r);
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
      }).on("change", (x) => {
        Ne.colMat = x.value, Nn(), Pe();
      }), Ne.colMat === 0) {
        const x = {
          forma: Ne.colShape
        };
        At.addBinding(x, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (S) => {
          Ne.colShape = S.value, Nn(), Pe();
        });
        const u = {
          fc: +Tn(Ne.fc).toFixed(1)
        };
        At.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${zo()})`
        }), At.on("change", (S) => {
          var _a3;
          ((_a3 = S.target) == null ? void 0 : _a3.key) === "fc" && (Ne.fc = To(S.value), Pe());
        });
      } else if (Ne.colMat === 1) {
        const x = {
          colType: Ne.steelColType
        };
        At.addBinding(x, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Ne.steelColType = u.value, Nn(), Pe();
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
      }).on("change", (x) => {
        Ne.vigaMat = x.value, Nn(), Pe();
      }), Ne.vigaMat === 1) {
        const x = {
          vigaType: Ne.steelVigaType
        };
        At.addBinding(x, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Ne.steelVigaType = u.value, Nn(), Pe();
        });
      }
      const c = Ne.steelColType === 0 ? mo() : bo();
      Ne.steelVigaType === 0 ? mo() : bo();
      const m = R === "m" ? [
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
      for (let x = 0; x < l; x++) {
        const u = Ne.perFloor[x], S = At.addFolder({
          title: `Piso ${x + 1}`,
          expanded: x < 2
        });
        if (Ne.colMat === 0) if (Ne.colShape === 1) {
          const C = {
            dCol: +$t(u.dCol).toFixed(2)
          };
          S.addBinding(C, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), S.on("change", (O) => {
            var _a3;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Mt(O.value), Pe());
          });
        } else {
          const C = {
            bCol: +$t(u.bCol).toFixed(2),
            hCol: +$t(u.hCol).toFixed(2)
          };
          S.addBinding(C, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), S.addBinding(C, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), S.on("change", (O) => {
            var _a3, _b;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Mt(O.value), Pe()), ((_b = O.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Mt(O.value), Pe());
          });
        }
        else if (Ne.colMat === 1) if (Ne.steelColType <= 1) {
          const C = {
            col: u.colProfileIdx
          };
          S.addBinding(C, "col", {
            label: "Columna",
            options: c
          }).on("change", (O) => {
            u.colProfileIdx = O.value, Pe();
          });
        } else if (Ne.steelColType === 2) {
          const C = {
            bf: +$t(u.colBf ?? 0.3).toFixed(3),
            h: +$t(u.colHf ?? 0.3).toFixed(3),
            tf: +$t(u.colTf ?? 0.02).toFixed(3),
            tw: +$t(u.colTw ?? 0.012).toFixed(3)
          };
          S.addBinding(C, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), S.addBinding(C, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), S.addBinding(C, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), S.addBinding(C, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), S.on("change", (O) => {
            var _a3, _b, _c, _d;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Mt(O.value), Pe()), ((_b = O.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Mt(O.value), Pe()), ((_c = O.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Mt(O.value), Pe()), ((_d = O.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Mt(O.value), Pe());
          });
        } else {
          const C = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3)
          };
          S.addBinding(C, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), S.addBinding(C, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), S.addBinding(C, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), S.on("change", (O) => {
            var _a3, _b, _c;
            ((_a3 = O.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(O.value), Pe()), ((_b = O.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(O.value), Pe()), ((_c = O.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(O.value), Pe());
          });
        }
        else {
          const C = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3),
            Es: +Tn(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +Tn(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          S.addBinding(C, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), S.addBinding(C, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), S.addBinding(C, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), S.addBlade({
            view: "separator"
          });
          const O = +Tn(1e8).toFixed(0), j = +Tn(3e8).toFixed(0), g = Math.max(1, Math.round((j - O) / 200));
          S.addBinding(C, "Es", {
            min: O,
            max: j,
            step: g,
            label: `Es (${zo()})`
          }), S.addBinding(C, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), S.addBinding(C, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${zo()})`
          }), S.addBinding(C, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), S.on("change", (E) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = E.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(E.value), Pe()), ((_b = E.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(E.value), Pe()), ((_c = E.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(E.value), Pe()), ((_d = E.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = To(E.value), Pe()), ((_e2 = E.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = E.value, Pe()), ((_f = E.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = To(E.value), Pe()), ((_g = E.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = E.value, Pe());
          });
        }
        if (u.vigasX.length > 0) {
          const C = S.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Es(C, u.vigasX, "x", s, m);
        }
        if (u.vigasY.length > 0) {
          const C = S.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Es(C, u.vigasY, "y", s, m);
        }
      }
      At.addBlade({
        view: "separator"
      });
      const M = At.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Ee,
        direccion: Je === "x" ? 0 : 1,
        cantidad: ze
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
      }), M.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ee = x.value, Pe()), ((_b = x.target) == null ? void 0 : _b.key) === "direccion" && (Je = x.value === 0 ? "x" : "y", Pe()), ((_c = x.target) == null ? void 0 : _c.key) === "cantidad" && (ze = Math.round(x.value), Pe());
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
      }), y.on("change", (x) => {
        var _a3, _b, _c, _d;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ue = x.value, Pe()), ((_b = x.target) == null ? void 0 : _b.key) === "espesor" && (at = Mt(x.value), Pe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivX" && (dt = Math.round(x.value), Pe()), ((_d = x.target) == null ? void 0 : _d.key) === "subdivY" && (yt = Math.round(x.value), Pe());
      }), At.addBlade({
        view: "separator"
      });
      const h = At.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), k = {
        espesor: +$t(Be).toFixed(3),
        subdivH: He,
        subdivW: be
      };
      h.addBinding(k, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${o.length})`
      }), h.addBinding(k, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(k, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "espesor" && (Be = Mt(x.value), Pe()), ((_b = x.target) == null ? void 0 : _b.key) === "subdivH" && (He = Math.round(x.value), Pe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(x.value), Pe());
      });
      const A = ie.length || 1, I = ne.length || 1, T = A + 1, P = I + 1;
      if (A > 0) {
        const x = h.addFolder({
          title: `Muros dir X (${A} vanos)`,
          expanded: false
        });
        for (let u = 0; u < A; u++) for (let S = 0; S < P; S++) {
          const C = `wx_${u}_${S}`, O = he.some((E) => E.dir === "x" && E.bay === u && E.axisIdx === S), j = {};
          j[C] = O;
          const g = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + S)}`;
          x.addBinding(j, C, {
            label: g
          }).on("change", (E) => {
            E.value ? he.push({
              dir: "x",
              bay: u,
              axisIdx: S,
              floors: [
                -1
              ]
            }) : he = he.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === S)), Pe();
          });
        }
      }
      if (I > 0) {
        const x = h.addFolder({
          title: `Muros dir Y (${I} vanos)`,
          expanded: false
        });
        for (let u = 0; u < I; u++) for (let S = 0; S < T; S++) {
          const C = `wy_${u}_${S}`, O = he.some((E) => E.dir === "y" && E.bay === u && E.axisIdx === S), j = {};
          j[C] = O;
          const g = `Vano Y${u + 1} / Eje X${S + 1}`;
          x.addBinding(j, C, {
            label: g
          }).on("change", (E) => {
            E.value ? he.push({
              dir: "y",
              bay: u,
              axisIdx: S,
              floors: [
                -1
              ]
            }) : he = he.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === S)), Pe();
          });
        }
      }
      if (he.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const x = {
          muros: `${he.length} ubicaciones`
        };
        h.addBinding(x, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function sn() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (me || (me = t.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (cn) {
        try {
          cn.dispose();
        } catch {
        }
        cn = null;
      }
      t.innerHTML = "";
      const n = z.charAt(0).toUpperCase() + z.slice(1);
      ve = new no({
        title: `Parameters \u2014 ${n}`,
        container: t
      });
      const o = cs()[z];
      if (o) {
        const s = {};
        for (const a of o) s[a.key] = Z[a.key].val;
        for (const a of o) ve.addBinding(s, a.key, {
          min: Z[a.key].min,
          max: Z[a.key].max,
          step: Z[a.key].step,
          label: Z[a.key].label
        });
        const d = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of o) {
          const r = {
            min: Z[a.key].min,
            max: Z[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            Z[a.key] && (Z[a.key].min = r.min, Z[a.key].max = r.max, Z[a.key].val < r.min && (Z[a.key].val = r.min), Z[a.key].val > r.max && (Z[a.key].val = r.max)), sn(), Pe();
          });
        }
        ve.on("change", (a) => {
          var _a2, _b;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && Z[r]) {
            if (Z[r].val = a.value, z === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(Z.nVanosX.val), i = Math.round(Z.nVanosY.val);
                for (; ie.length < f; ) ie.push(ie[ie.length - 1] ?? $.defaultSpan);
                for (ie.length > f && (ie.length = f); ne.length < i; ) ne.push(ne[ne.length - 1] ?? $.defaultSpan * 0.8);
                ne.length > i && (ne.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const f = Math.round(Z.nPisos.val), i = ((_b = Z.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; q.length < f; ) q.push(q[q.length - 1] ?? i);
                q.length > f && (q.length = f);
              }
              sn();
            }
            Pe();
          }
        });
      }
      if (z === "edificio") {
        if (dn) {
          try {
            dn.dispose();
          } catch {
          }
          dn = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          let d = function() {
            var _a2, _b, _c, _d;
            const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = Z.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = Z.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = Z.Lviy) == null ? void 0 : _c.val) || 0, M = ((_d = Z.Lvdy) == null ? void 0 : _d.val) || 0;
            let w = "X: ";
            i > 0 && (w += `\u251C${i.toFixed(1)}\u2524`);
            for (let h = 0; h < ie.length; h++) w += `[${f[h + (i > 0 ? 1 : 0)]}]\u2500\u2500${ie[h].toFixed(1)}\u2500\u2500`;
            w += `[${f[ie.length + (i > 0 ? 1 : 0)]}]`, c > 0 && (w += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            m > 0 && (y += `\u251C${m.toFixed(1)}\u2524`);
            for (let h = 0; h < ne.length; h++) y += `[${h + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${ne[h].toFixed(1)}\u2500\u2500`;
            y += `[${ne.length + 1 + (m > 0 ? 1 : 0)}]`, M > 0 && (y += `\u251C${M.toFixed(1)}\u2524`);
            let p = "Z: ";
            for (let h = 0; h < q.length; h++) p += `P${h + 1}=${q[h].toFixed(1)} `;
            r.textContent = w + `
` + y + `
` + p;
          };
          s.innerHTML = "";
          const a = $;
          try {
            dn = new no({
              title: `Luces (${a.length})`,
              container: s
            });
            const f = dn.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < ie.length; c++) {
              const m = c, M = {
                v: ie[c]
              };
              f.addBinding(M, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (w) => {
                ie[m] = w.value, Pe();
              });
            }
            const i = dn.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < ne.length; c++) {
              const m = c, M = {
                v: ne[c]
              };
              i.addBinding(M, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (w) => {
                ne[m] = w.value, Pe();
              });
            }
            if (q.length > 0) {
              const c = dn.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < q.length; m++) {
                const M = m, w = {
                  v: q[m]
                };
                c.addBinding(w, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (y) => {
                  q[M] = y.value, Pe();
                });
              }
            }
          } catch (f) {
            console.error("Luces Tweakpane error:", f);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", d(), s.appendChild(r);
        }
      }
      if (Nn(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const s = uo()[z];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((r, f) => {
            d[r.label] = f;
          });
          const a = {
            apoyo: xt
          };
          ve.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (r) => {
            xt = r.value, Pe();
          });
        }
        if (z === "placa-3q" || z === "placa-q4") {
          const d = {
            teoria: Le
          };
          ve.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Le = a.value, Pe();
          });
        }
      }
      const l = ds()[z];
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
        const d = cn.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const r = {
            min: ft[a.key].min,
            max: ft[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            ft[a.key] && (ft[a.key].min = r.min, ft[a.key].max = r.max, ft[a.key].val < r.min && (ft[a.key].val = r.min), ft[a.key].val > r.max && (ft[a.key].val = r.max)), sn(), Pe();
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
        setParam: (s, d) => {
          if (Z[s]) Z[s].val = d, Pe(), sn();
          else if (ft[s]) {
            if (ft[s].val = d, e.nodeInputs) {
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
          for (const d in Z) s[d] = Z[d].val;
          for (const d in ft) s[d] = ft[d].val;
          return s;
        },
        setGenerator: et,
        createCustomPanel: (s, d, a) => Ma(s, d, a),
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
      const d = new no({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(n)) {
        const i = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const c = {
            [r]: f.value.join(", ")
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            a[r] = m.value.split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M)), o && o({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const c = {
            [r]: f.value
          }, m = {};
          for (const M of f.options) m[M] = M;
          d.addBinding(c, r, {
            label: i,
            options: m
          }).on("change", (M) => {
            a[r] = M.value, o && o({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[r] = f.value;
          const c = {
            [r]: f.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            a[r] = m.value, o && o({
              ...a
            });
          });
        } else if (typeof f.value == "string") {
          a[r] = f.value;
          const c = {
            [r]: f.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            a[r] = m.value, o && o({
              ...a
            });
          });
        } else {
          a[r] = f.value;
          const c = {
            [r]: f.value
          }, m = {
            label: i
          };
          f.min !== void 0 && (m.min = f.min), f.max !== void 0 && (m.max = f.max), f.step !== void 0 && (m.step = f.step), d.addBinding(c, r, m).on("change", (M) => {
            a[r] = M.value, o && o({
              ...a
            });
          });
        }
      }
      return o && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        o({
          ...a
        });
      }), Ao.set(t, {
        pane: d,
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
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
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
      n && o && (o.style.cssText = "", document.body.appendChild(o), n.remove()), o && me && (o.innerHTML = me);
    }
    const Ae = document.createElement("div");
    Ae.id = "cad3d-panel";
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
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), z && wt(true);
    }), Ae.innerHTML = `
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
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="5" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
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
      const t = e.nodes.val, n = e.elements.val, o = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = R, d = b, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${z || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((i, c) => {
        a.push(`  ${String(c).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${n.length})`), a.push("# idx    nodeI  nodeJ"), n.forEach((i, c) => {
        const m = i.map((M) => String(M).padStart(6)).join("");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""), (o == null ? void 0 : o.supports) && o.supports.size > 0 && (a.push(`## SUPPORTS (${o.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), o.supports.forEach((i, c) => {
        const m = i.map((M) => M ? "  1" : "  0").join("");
        a.push(`  ${String(c).padStart(4)} ${m}`);
      }), a.push("")), (o == null ? void 0 : o.loads) && o.loads.size > 0 && (a.push(`## LOADS (${o.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), o.loads.forEach((i, c) => {
        const m = i.map((M) => M.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
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
        ], c = "# elem  " + i.map((m) => m.name.padStart(12)).join(" ");
        a.push(c);
        for (let m = 0; m < n.length; m++) {
          const M = i.map((w) => {
            var _a3;
            const y = (_a3 = w.map) == null ? void 0 : _a3.get(m);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(m).padStart(4)}  ${M}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, c) => {
        const m = i.map((M) => M.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((i, c) => {
        const m = i.map((M) => M.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push("")), z) {
        a.push("## CLI COMMAND");
        const i = Object.entries(Z).map(([c, m]) => `${c}=${m.val}`).join(" ");
        a.push(`cad.${z === "edificio" ? "building" : z}(${i})`);
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
        const n = e.nodes.val, o = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: z || "custom",
          units: {
            force: b,
            length: R
          },
          nodes: n.map((c, m) => ({
            id: m,
            x: c[0],
            y: c[1],
            z: c[2]
          })),
          elements: o.map((c, m) => ({
            id: m,
            nodes: c
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((c, m) => d.supports.push({
          node: m,
          dofs: c
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((c, m) => d.loads.push({
          node: m,
          forces: c
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((c, m) => d.displacements[m] = c));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (d.reactions = {}, r.forEach((c, m) => d.reactions[m] = c));
        const f = Lt.querySelector("#export-text");
        f.value = JSON.stringify(d, null, 2);
        const i = Lt.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Qe() {
      var _a2, _b, _c;
      const t = Ae.querySelector("#cad3d-info");
      if (t) {
        const n = e.nodes.val.length, o = e.elements.val, l = o.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, r = 0;
        for (const i of o) i.length === 2 ? d++ : i.length === 3 ? a++ : i.length === 4 && r++;
        let f = `${n}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${d}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function Lo() {
      var _a2;
      if (!qe || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val, o = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || n.length === 0) && !(!o.supports || o.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - o.supports.size * 6);
        if (s <= 0) return;
        const d = Va(t, n, o, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Ce = d, ke = t.map((i) => [
            ...i
          ]), xe = 0;
          const { extent: a } = yn(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let c = 0; c < t.length; c++) {
              const m = r[c * 6] || 0, M = r[c * 6 + 1] || 0, w = r[c * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(m * m + M * M + w * w));
            }
            Ge = i > 1e-12 ? a * 0.05 / i : 1;
          }
          const f = `${z} \u2014 ${t.length}n ${n.length}e`;
          it.render(d, {
            title: f
          }), it.div.style.display = "", Qn(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Ce = null;
      }
    }
    function Co() {
      ge && (cancelAnimationFrame(ge), ge = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), it.div.style.display = "none", Ce = null;
    }
    function Qn() {
      var _a2;
      if (ge && cancelAnimationFrame(ge), !(Ce == null ? void 0 : Ce.modeShapes) || !ke.length) return;
      const t = Ce.modeShapes[xe];
      if (!t) return;
      const n = ((_a2 = Ce.frequencies) == null ? void 0 : _a2[xe]) || 1, o = Math.max(0.5, Math.min(3, n * 0.1)), l = performance.now(), s = ke.length, d = e.elements.rawVal, { extent: a } = yn(), r = Ae.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let i = 0;
      for (let I = 0; I < s; I++) {
        const T = t[I * 6] || 0, P = t[I * 6 + 1] || 0, x = t[I * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(T * T + P * P + x * x));
      }
      const c = i > 1e-12 ? a * f / 100 / i : 1, m = Ze();
      if (!m) return;
      let M = null, w = null, y = null;
      m.scene.traverse((I) => {
        var _a3, _b;
        !M && I.isPoints && I.geometry && (M = I), !w && I.isLineSegments && I.geometry && !I.name && (w = I), !y && I.isMesh && ((_a3 = I.material) == null ? void 0 : _a3.transparent) && ((_b = I.material) == null ? void 0 : _b.opacity) < 0.5 && I.geometry && (y = I);
      });
      const p = new Float32Array(s * 3), h = [];
      for (const I of d) if (I.length === 2) h.push([
        I[0],
        I[1]
      ]);
      else for (let T = 0; T < I.length; T++) h.push([
        I[T],
        I[(T + 1) % I.length]
      ]);
      const k = new Float32Array(h.length * 6);
      function A() {
        const I = (performance.now() - l) / 1e3, T = Math.sin(2 * Math.PI * o * I) * c;
        for (let P = 0; P < s; P++) {
          const x = ke[P];
          p[P * 3] = x[0] + (t[P * 6] || 0) * T, p[P * 3 + 1] = x[1] + (t[P * 6 + 1] || 0) * T, p[P * 3 + 2] = x[2] + (t[P * 6 + 2] || 0) * T;
        }
        if (M) {
          const P = M.geometry, x = P.getAttribute("position");
          x && x.array.length === p.length ? (x.array.set(p), x.needsUpdate = true) : P.setAttribute("position", new Ln(p.slice(), 3));
        }
        if (w) {
          for (let u = 0; u < h.length; u++) {
            const [S, C] = h[u];
            k[u * 6] = p[S * 3], k[u * 6 + 1] = p[S * 3 + 1], k[u * 6 + 2] = p[S * 3 + 2], k[u * 6 + 3] = p[C * 3], k[u * 6 + 4] = p[C * 3 + 1], k[u * 6 + 5] = p[C * 3 + 2];
          }
          const P = w.geometry, x = P.getAttribute("position");
          x && x.array.length === k.length ? (x.array.set(k), x.needsUpdate = true) : P.setAttribute("position", new Ln(k.slice(), 3));
        }
        if (y) {
          const P = [];
          for (const x of d) if (x.length === 3) {
            const [u, S, C] = x;
            P.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), P.push(p[S * 3], p[S * 3 + 1], p[S * 3 + 2]), P.push(p[C * 3], p[C * 3 + 1], p[C * 3 + 2]);
          } else if (x.length === 4) {
            const [u, S, C, O] = x;
            P.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), P.push(p[S * 3], p[S * 3 + 1], p[S * 3 + 2]), P.push(p[C * 3], p[C * 3 + 1], p[C * 3 + 2]), P.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), P.push(p[C * 3], p[C * 3 + 1], p[C * 3 + 2]), P.push(p[O * 3], p[O * 3 + 1], p[O * 3 + 2]);
          }
          if (P.length > 0) {
            const x = y.geometry, u = new Float32Array(P), S = x.getAttribute("position");
            S && S.array.length === u.length ? (S.array.set(u), S.needsUpdate = true) : x.setAttribute("position", new Ln(u, 3));
          }
        }
        m.render(), ge = requestAnimationFrame(A);
      }
      ge = requestAnimationFrame(A);
    }
    function Fo() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val;
      let o = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || n.length === 0 || !o.supports || o.supports.size === 0) return;
      if (!o.loads || o.loads.size === 0) {
        const y = le("CM") ?? 0, p = le("CV") ?? 0, h = y + p, k = le("Ex") ?? 0, A = le("Ey") ?? 0;
        if (h === 0 && k === 0 && A === 0) return;
        const I = /* @__PURE__ */ new Map(), T = [];
        for (let E = 0; E < t.length; E++) o.supports.has(E) || T.push(E);
        const P = (E) => Math.round(E * 1e3) / 1e3, x = /* @__PURE__ */ new Set();
        o.supports.forEach((E, v) => {
          x.add(`${P(t[v][0])},${P(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const E of T) x.has(`${P(t[E][0])},${P(t[E][1])}`) && u.add(E);
        const S = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
        if (k !== 0 || A !== 0) {
          let E = -1 / 0, v = -1 / 0;
          for (const X of u) E = Math.max(E, P(t[X][0])), v = Math.max(v, P(t[X][1]));
          const F = /* @__PURE__ */ new Map();
          for (const X of u) {
            const V = P(t[X][2]);
            F.has(V) || F.set(V, []), F.get(V).push(X);
          }
          F.forEach((X) => {
            if (k !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (P(t[ae][0]) === E) {
                const Q = P(t[ae][1]);
                V.has(Q) || (V.add(Q), S.add(ae));
              }
            }
            if (A !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (P(t[ae][1]) === v) {
                const Q = P(t[ae][0]);
                V.has(Q) || (V.add(Q), C.add(ae));
              }
            }
          });
        }
        const O = 9.81, j = /* @__PURE__ */ new Map();
        for (let E = 0; E < n.length; E++) {
          const v = n[E], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(E)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(E)) ?? 0, V = t[v[0]], ae = t[v[1]], Q = Math.sqrt((ae[0] - V[0]) ** 2 + (ae[1] - V[1]) ** 2 + (ae[2] - V[2]) ** 2), de = -(F * X * Q * O) / 2;
              j.set(v[0], (j.get(v[0]) ?? 0) + de), j.set(v[1], (j.get(v[1]) ?? 0) + de);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(E)) ?? 0;
              let V = 0;
              if (v.length === 3) {
                const [K, de, re] = v.map((Ie) => t[Ie]);
                V = 0.5 * Math.abs((de[0] - K[0]) * (re[1] - K[1]) - (re[0] - K[0]) * (de[1] - K[1]));
              } else if (v.length === 4) {
                const [K, de, re, Ie] = v.map((Re) => t[Re]);
                if (V = 0.5 * Math.abs((de[0] - K[0]) * (re[1] - K[1]) - (re[0] - K[0]) * (de[1] - K[1])) + 0.5 * Math.abs((re[0] - K[0]) * (Ie[1] - K[1]) - (Ie[0] - K[0]) * (re[1] - K[1])), V < 1e-10) {
                  const Re = [
                    de[0] - K[0],
                    de[1] - K[1],
                    de[2] - K[2]
                  ], D = [
                    Ie[0] - K[0],
                    Ie[1] - K[1],
                    Ie[2] - K[2]
                  ], fe = [
                    Re[1] * D[2] - Re[2] * D[1],
                    Re[2] * D[0] - Re[0] * D[2],
                    Re[0] * D[1] - Re[1] * D[0]
                  ];
                  V = Math.sqrt(fe[0] ** 2 + fe[1] ** 2 + fe[2] ** 2);
                }
              }
              const Q = -(F * X * V * O) / v.length;
              for (const K of v) j.set(K, (j.get(K) ?? 0) + Q);
            }
          }
        }
        const g = /* @__PURE__ */ new Set();
        for (const E of n) E.length === 2 && (g.add(E[0]), g.add(E[1]));
        for (const E of T) {
          const v = S.has(E) ? k : 0, F = C.has(E) ? A : 0, X = j.get(E) ?? 0, V = g.has(E) ? h : 0, ae = X + V;
          (v !== 0 || F !== 0 || Math.abs(ae) > 1e-10) && I.set(E, [
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
          loads: I
        }, e.nodeInputs.val = o;
      }
      const s = performance.now();
      let d = 0, a = 0, r = 0;
      for (const y of n) y.length === 2 ? d++ : y.length === 3 ? r++ : y.length === 4 && a++;
      const f = ((_d = o.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = o.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, m = c - f * 6, M = [], w = (y) => M.push(y);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${n.length} elem`), d && w(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && w(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), w(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${i}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${m} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = kt(t, n, o, l), p = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let h = 0, k = -1, A = 0, I = 0;
          y.deformations && y.deformations.forEach((S, C) => {
            const O = Math.sqrt(S[0] * S[0] + S[1] * S[1] + S[2] * S[2]);
            O > h && (h = O, k = C, A = S[0], I = S[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${k})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(A * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(I * 1e3).toFixed(4)} mm`);
          const T = performance.now(), P = gn(t, n, l, y), x = performance.now() - T;
          P && (e.analyzeOutputs.val = P, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${x.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const p = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = M, console.log(`FEM Solver: ${t.length}n ${n.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), qe && setTimeout(() => Lo(), 50);
    }
    function Po(t, n) {
      const o = t * n, l = t * n * n * n / 12, s = n * t * t * t / 12, d = Math.min(t, n), a = Math.max(t, n), r = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
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
    function Ro(t, n, o, l) {
      const s = n - 2 * o, d = 2 * t * o + s * l, a = (t * n * n * n - (t - l) * s * s * s) / 12, r = (2 * o * t * t * t + s * l * l * l) / 12, f = (2 * t * o * o * o + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function Oo(t, n, o) {
      const l = t - 2 * o, s = n - 2 * o, d = t * n - l * s, a = (t * n * n * n - l * s * s * s) / 12, r = (n * t * t * t - s * l * l * l) / 12, f = (t - o) * (n - o), i = 2 * ((t - o) / o + (n - o) / o), c = 4 * f * f / (i > 0 ? i : 1);
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: c
      };
    }
    function Ia(t, n, o, l, s, d, a) {
      const f = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, i = t - 2 * o, c = n - 2 * o, m = t * n - i * c, M = (t * n * n * n - i * c * c * c) / 12, w = (n * t * t * t - c * i * i * i) / 12, y = i * c, p = i * c * c * c / 12, h = c * i * i * i / 12, k = m + f * y, A = M + f * p, I = w + f * h, T = l / (2 * (1 + s)), P = (t - o) * (n - o), x = 2 * ((t - o) / o + (n - o) / o), u = 4 * P * P / (x > 0 ? x : 1);
      return {
        A: k,
        Iz: A,
        Iy: I,
        J: u,
        Es: l,
        Gs: T,
        A_steel: m,
        A_conc: y
      };
    }
    function vn() {
      if (!e.elementInputs) return;
      const t = e.elements.val, n = $, o = {
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
      if ((z === "edificio" || z === "frame") && B.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: r, perFloor: f } = Ne, i = 4700 * Math.sqrt(r / 1e3) * 1e3, c = i / (2 * 1.2), m = 24 / 9.80665, M = n.E, w = n.G, y = n.rho;
        for (let p = 0; p < t.length; p++) {
          if (ce.has(p)) {
            const S = 4700 * Math.sqrt(r / 1e3) * 1e3, C = 0.2;
            o.elasticities.set(p, S), o.poissonsRatios.set(p, C), o.thicknesses.set(p, Be), o.shearModuli.set(p, S / (2 * (1 + C))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (zt.has(p)) {
            const S = 4700 * Math.sqrt(r / 1e3) * 1e3, C = 0.2;
            o.elasticities.set(p, S), o.poissonsRatios.set(p, C), o.thicknesses.set(p, at), o.shearModuli.set(p, S / (2 * (1 + C))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          const h = B.has(p), k = $e.get(p) ?? 0, A = f[k] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let I, T, P, x;
          if (h) if (s === 0) T = i, P = c, x = m, I = a === 1 ? ks(A.dCol) : Po(A.bCol, A.hCol), o.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: A.dCol
          } : {
            type: "rect",
            b: A.bCol,
            h: A.hCol
          });
          else if (s === 1) {
            T = M, P = w, x = y;
            const S = Ne.steelColType;
            if (S <= 1) {
              const C = kn[A.colProfileIdx] ?? kn[0];
              I = {
                A: C.A,
                Iz: C.Iz,
                Iy: C.Iy,
                J: C.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: C.bf,
                h: C.d,
                name: C.name
              });
            } else if (S === 2) {
              const C = A.colBf ?? 0.3, O = A.colHf ?? 0.3, j = A.colTf ?? 0.02, g = A.colTw ?? 0.012;
              I = Ro(C, O, j, g);
              const E = `I${(O * 100).toFixed(0)}x${(C * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: C,
                h: O,
                tf: j,
                tw: g,
                name: E
              });
            } else {
              const C = A.colBc ?? 0.3, O = A.colHc ?? 0.3, j = A.colT ?? 0.01;
              I = Oo(C, O, j);
              const g = `\u25A1${(O * 100).toFixed(0)}x${(C * 100).toFixed(0)}x${(j * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: C,
                h: O,
                tw: j,
                name: g
              });
            }
          } else {
            const S = A.colBc ?? 0.3, C = A.colHc ?? 0.3, O = A.colT ?? 0.01, j = A.colFc ?? 28e3, g = A.colEs ?? 2e8, E = A.colNuS ?? 0.3;
            A.colNuC;
            const v = Ia(S, C, O, g, E, j);
            I = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, T = v.Es, P = v.Gs;
            const F = 7.85, X = 24 / 9.80665;
            x = (F * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const V = `CFT ${(C * 1e3).toFixed(0)}X${(S * 1e3).toFixed(0)}X${(O * 1e3).toFixed(0)}`;
            o.sectionShapes.set(p, {
              type: "CFT",
              b: S,
              h: C,
              tw: O,
              name: V
            });
          }
          else {
            const S = Te.get(p), C = S ? S.dir === "x" ? A.vigasX : A.vigasY : [], O = S ? C[S.bay] ?? C[0] ?? ut() : ut();
            if (d === 0) T = i, P = c, x = m, I = Po(O.b, O.h), o.sectionShapes.set(p, {
              type: "rect",
              b: O.b,
              h: O.h
            });
            else {
              T = M, P = w, x = y;
              const j = Ne.steelVigaType;
              if (j <= 1) {
                const g = kn[O.profileIdx ?? 0] ?? kn[0];
                I = {
                  A: g.A,
                  Iz: g.Iz,
                  Iy: g.Iy,
                  J: g.J
                }, o.sectionShapes.set(p, {
                  type: "I",
                  b: g.bf,
                  h: g.d,
                  name: g.name
                });
              } else if (j === 2) {
                const g = O.bf ?? 0.2, E = O.hf ?? 0.4, v = O.tf ?? 0.015, F = O.tw ?? 0.01;
                I = Ro(g, E, v, F);
                const X = `I${(E * 100).toFixed(0)}x${(g * 100).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "I",
                  b: g,
                  h: E,
                  tf: v,
                  tw: F,
                  name: X
                });
              } else {
                const g = O.bc ?? 0.2, E = O.hc ?? 0.3, v = O.t ?? 8e-3;
                I = Oo(g, E, v);
                const F = `\u25A1${(E * 100).toFixed(0)}x${(g * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "HSS",
                  b: g,
                  h: E,
                  tw: v,
                  name: F
                });
              }
            }
          }
          const u = ye.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (T = i, P = c, x = m) : (T = M, P = w, x = y), u.secType === "rect" && u.b && u.h) I = Po(u.b, u.h), o.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) I = ks(u.b), o.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const C = kn[u.profileIdx] ?? kn[0];
              I = {
                A: C.A,
                Iz: C.Iz,
                Iy: C.Iy,
                J: C.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: C.bf,
                h: C.d,
                name: C.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              I = Ro(u.bf, u.hf, u.tf, u.tw);
              const C = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: C
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              I = Oo(u.bc, u.hc, u.t);
              const C = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: C
              });
            }
          }
          o.elasticities.set(p, T), o.shearModuli.set(p, P), o.areas.set(p, I.A), o.momentsOfInertiaZ.set(p, I.Iy), o.momentsOfInertiaY.set(p, I.Iz), o.torsionalConstants.set(p, I.J), o.densities.set(p, x), u && u.releases12 && u.releases12.some((S) => S) && (o.momentReleases || (o.momentReleases = /* @__PURE__ */ new Map()), o.momentReleases.set(p, u.releases12)), u && u.springs12 && u.springs12.some((S) => S > 0) && (o.partialFixitySprings || (o.partialFixitySprings = /* @__PURE__ */ new Map()), o.partialFixitySprings.set(p, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) o.elasticities.set(s, n.E), o.shearModuli.set(s, n.G), o.areas.set(s, n.A), o.momentsOfInertiaZ.set(s, n.Iy), o.momentsOfInertiaY.set(s, n.Iz), o.torsionalConstants.set(s, n.J), o.densities.set(s, n.rho);
      e.elementInputs.val = o;
    }
    function Ts(t) {
      Ae.querySelectorAll("[data-ex]").forEach((n) => {
        n.classList.toggle("active", n.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Ae.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Ae.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (g) => {
        g.stopPropagation(), Ae.classList.add("collapsed");
      }), (_b = Ae.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (g) => {
        g.stopPropagation(), Ae.classList.remove("collapsed");
      }), Ae.querySelectorAll("[data-ex]").forEach((g) => {
        g.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = g.dataset.ex;
          Ts(v), Ke.example(v);
        });
      }), Ae.querySelectorAll("[data-view]").forEach((g) => {
        g.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = g.dataset.view;
          $n(v), Ae.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), g.classList.add("view-active");
        });
      }), (_c = Ae.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (g) => {
        g.stopPropagation(), z = "", ia.val = false, wa(), Ke.clear();
      }), (_d = Ae.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), nn && (nn = false, An()), pn && io(), Yt = !Yt, (_a3 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt);
        const v = Ze();
        v && (v.controls.enabled = !Yt), Yt || ro();
      }), (_e2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), nn && (nn = false, An()), Yt && ro(), pn = !pn, (_a3 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", pn), pn ? La() : io();
      }), (_f = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), Yt && ro(), pn && io(), nn = !nn, (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", nn), nn || An();
      }), (_g = Ae.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (g) => {
        g.stopPropagation(), Ke.clear(), Ve = null;
      });
      const t = Ae.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const g = t.value;
        t.value = "", g && n(g);
      });
      function n(g) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const F = 15e3 * Math.sqrt(210) * 10, X = 0.2, V = F / (2 * (1 + X)), ae = 0.09, Q = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, re = 0.25 * 0.4 ** 3 / 12, Ie = 0.4 * 0.25 ** 3 / 12, Re = 1e-3, D = 5 / 6 * ae, fe = 5 / 6 * de, oe = [];
        function pe(ee, ue, we) {
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
          for (const Se of ue) se.elasticities.set(Se, F), se.shearModuli.set(Se, V), se.areas.set(Se, ae), se.momentsOfInertiaZ.set(Se, Q), se.momentsOfInertiaY.set(Se, Q), se.torsionalConstants.set(Se, K), se.shearAreasY.set(Se, D), se.shearAreasZ.set(Se, D);
          for (const Se of we) se.elasticities.set(Se, F), se.shearModuli.set(Se, V), se.areas.set(Se, de), se.momentsOfInertiaZ.set(Se, Ie), se.momentsOfInertiaY.set(Se, re), se.torsionalConstants.set(Se, Re), se.shearAreasY.set(Se, fe), se.shearAreasZ.set(Se, fe);
          return se;
        }
        if (g === "test-cantilever" || g === "test-all") {
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
          ], je = pe(1, [], []);
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
        if (g === "test-portal-1p" || g === "test-all") {
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
          ], ue = [
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
          ], we = pe(3, [
            0,
            1
          ], [
            2
          ]), se = kt(ee, ue, {
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
            elements: ue,
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
        if (g === "test-portal-2p" || g === "test-all") {
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
          ], ue = [
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
          ], we = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = kt(ee, ue, {
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
            elements: ue,
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
        if (g === "test-wall-only" || g === "test-all") {
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
          ], ue = [
            [
              0,
              1,
              2,
              3
            ]
          ], se = kt(ee, ue, {
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
            elements: ue,
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
        if (g === "test-portal-wall" || g === "test-all") {
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
          ], ue = [
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
          ], we = pe(6, [
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
          const se = kt(ee, ue, {
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
            elements: ue,
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
        if (g === "test-wilson-beam" || g === "test-all") {
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
          }, Pt = /* @__PURE__ */ new Map();
          Pt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Pt.set(5, [
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
              supports: Pt,
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
        if (g === "test-scordelis" || g === "test-all") {
          const rt = 40 * Math.PI / 180, ct = 8, Ct = 8, _t = [];
          for (let nt = 0; nt <= ct; nt++) for (let St = 0; St <= Ct; St++) {
            const en = 25 * nt / ct, Ot = rt * St / Ct, bn = 25 * Math.sin(Ot), mn = 25 * Math.cos(Ot) - 25 * Math.cos(rt);
            _t.push([
              en,
              bn,
              mn
            ]);
          }
          const Pt = [];
          for (let nt = 0; nt < ct; nt++) for (let St = 0; St < Ct; St++) {
            const en = nt * (Ct + 1) + St, Ot = (nt + 1) * (Ct + 1) + St, bn = (nt + 1) * (Ct + 1) + (St + 1), mn = nt * (Ct + 1) + (St + 1);
            Pt.push([
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
          for (let nt = 0; nt < Pt.length; nt++) Dt.elasticities.set(nt, 432e6), Dt.shearModuli.set(nt, Sn), Dt.thicknesses.set(nt, 0.25), Dt.poissonsRatios.set(nt, 0);
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
          for (const nt of Pt) {
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
            const nt = kt(_t, Pt, {
              supports: an,
              loads: Vt
            }, Dt), St = Ct, en = ((_f2 = (_e3 = nt.deformations) == null ? void 0 : _e3.get(St)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${ct}x${Ct} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: _t,
              elements: Pt,
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
              elements: Pt,
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
          const ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), se = Math.max(...ee.nodes.map((Se) => Se[2]));
          ee.nodes.forEach((Se, je) => {
            Math.abs(Se[2]) < 0.01 && ue.set(je, [
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
            supports: ue,
            loads: we
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function o(g) {
        const E = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${g.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        g.nodes.forEach((D) => F.add(Math.round(D[1] * 1e4) / 1e4));
        const X = [
          ...F
        ].sort((D, fe) => D - fe), V = X.map((D, fe) => fe === 0 ? "Base" : `Level_${fe}`), ae = /* @__PURE__ */ new Map();
        X.forEach((D, fe) => ae.set(D, V[fe])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let D = X.length - 1; D >= 1; D--) v.push(`  STORY "${V[D]}"  HEIGHT ${X[D] - X[D - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const Q = g.elements.some((D) => D.length === 4);
        Q && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const K = /* @__PURE__ */ new Map();
        let de = 0;
        g.nodes.forEach((D) => {
          const fe = `${D[0]},${D[2]}`;
          K.has(fe) || K.set(fe, `${++de}`);
        }), v.push("$ POINT COORDINATES");
        for (const [D, fe] of K) {
          const [oe, pe] = D.split(",").map(Number);
          v.push(`  POINT "${fe}"  ${oe} ${pe} `);
        }
        v.push("");
        const re = (D) => {
          const fe = g.nodes[D], oe = `${fe[0]},${fe[2]}`;
          return {
            pt: K.get(oe) || "1",
            story: ae.get(Math.round(fe[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Ie = [];
        if (g.elements.forEach((D, fe) => {
          if (D.length !== 2) return;
          const oe = g.nodes[D[0]], pe = g.nodes[D[1]], ee = Math.abs(pe[1] - oe[1]), ue = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), we = ee > ue * 0.5, se = re(D[0]), Se = re(D[1]), je = we ? "COL30" : "VIGA";
          we ? (v.push(`  LINE  "E${fe + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${Se.story}"  SECTION "${je}"  `)) : (v.push(`  LINE  "E${fe + 1}"  BEAM  "${se.pt}"  "${Se.pt}"  0`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${se.story}"  SECTION "${je}"  `));
        }), v.push(""), Q) {
          v.push("$ AREA CONNECTIVITIES");
          const D = [];
          g.elements.forEach((fe, oe) => {
            if (fe.length !== 4) return;
            const pe = fe.map((ee) => re(ee));
            v.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), D.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), D.forEach((fe) => v.push(fe)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), g.nodes.forEach((D, fe) => {
          if (Math.abs(D[1]) < 0.01) {
            const oe = re(fe);
            v.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Ie.forEach((D) => v.push(D)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Re = Math.max(...g.nodes.map((D) => D[1]));
        return g.nodes.forEach((D, fe) => {
          if (Math.abs(D[1] - Re) < 0.01) {
            const oe = re(fe);
            v.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(g) {
        const E = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${g.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${E}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), g.elements.some((V) => V.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), g.elements.forEach((V, ae) => {
          if (V.length === 2) {
            const Q = g.nodes[V[0]], K = g.nodes[V[1]], de = Math.abs(K[1] - Q[1]), re = Math.sqrt((K[0] - Q[0]) ** 2 + (K[2] - Q[2]) ** 2), Ie = de > re * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Q[0]},${Q[2]},${Q[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${Ie}","E${ae + 1}","Global")`);
          } else if (V.length === 4) {
            const Q = V.map((K) => g.nodes[K]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${Q.map((K) => K[0]).join(",")}], [${Q.map((K) => K[2]).join(",")}], [${Q.map((K) => K[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...g.nodes.map((V) => V[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${g.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${g.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const V of g.results) v.push(`print(f"  ${V.label}: Awatif=${V.awatif.toFixed(4)}, ETABS=${V.reference.toFixed(4)}, Ratio={${V.awatif.toFixed(4)}/${V.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function s(g, E) {
        const v = new Blob([
          g
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = E, X.click(), URL.revokeObjectURL(F);
      }
      function d(g) {
        let E = document.getElementById("test-results-overlay");
        E && E.remove(), E = document.createElement("div"), E.id = "test-results-overlay", E.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, F = true;
        window.__awatifTests = g;
        for (let V = 0; V < g.length; V++) {
          const ae = g[V];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${V})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${V})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Q of ae.results) {
            const K = Q.reference !== 0 ? Q.awatif / Q.reference : 1, de = Math.abs(K - 1) < 0.05;
            de || (F = false);
            const re = de ? "#4caf50" : "#f44336", Ie = de ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Q.label}</td>
            <td style="text-align:right;color:#fff">${Q.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Q.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${re};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Q.refSource}</td>
            <td style="text-align:center;color:${re};font-size:10px;font-weight:bold">${Ie}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', E.innerHTML = v, document.body.appendChild(E), window.__awatifDownloadE2k = (V) => {
          const ae = window.__awatifTests[V], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(o(ae), `${Q}.e2k`);
        }, window.__awatifDownloadPy = (V) => {
          const ae = window.__awatifTests[V], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(ae), `${Q}_etabs.py`);
        };
      }
      (_h = Ae.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (g) => {
        g.stopPropagation(), Sa();
      });
      let a = "";
      const r = Ae.querySelector("#cad3d-io-menu"), f = Ae.querySelector("#cad3d-io-file");
      function i(g, E) {
        e.nodes.val = g.nodes, e.elements.val = g.elements, e.nodeInputs.val = g.nodeInputs, e.elementInputs.val = g.elementInputs, g.sectionShapes && g.elementInputs && (g.elementInputs.sectionShapes = g.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = g.elements.filter((X) => X.length === 2).length, F = g.elements.filter((X) => X.length >= 3).length;
        console.log(`${E} (${g.nodes.length} nodos, ${v} frames, ${F} shells): ${g.nodes.length} nodes, ${g.elements.length} elements`), setTimeout(() => wt(), 50);
      }
      function c(g, E) {
        var _a3, _b2, _c2;
        const v = {};
        g.elementInfo.forEach((K) => v[K.category] = (v[K.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
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
          const de = v[K] || 0;
          if (de === 0) continue;
          const re = [
            "column",
            "beam",
            "slab"
          ].includes(K) ? "checked" : "";
          Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${K}" ${re}>
          <span>${ae[K] || K}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        Q += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const K of V) {
          const de = v[K] || 0;
          de !== 0 && (Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${K}" disabled>
          <span>${ae[K] || K}</span>
          <span style="margin-left:auto">(${de})</span>
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
            const de = K.dataset.ifcCat, re = g.detailCategories.get(de);
            if (re) {
              re.visible = K.checked;
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
          const de = E.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), re = [], Ie = {
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
          let D = 0;
          for (const oe of E.elements) if (K.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            re.push(oe.nodeIds);
            const pe = ((_a4 = E.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = oe.b || 0.3, ue = oe.h || 0.3, we = ee * ue, se = ee * ue * ue * ue / 12, Se = ue * ee * ee * ee / 12, je = ee * ue * (ee * ee + ue * ue) / 12, rt = pe.E / (2 * (1 + pe.nu));
            Ie.elasticities.set(D, pe.E), Ie.shearModuli.set(D, rt), Ie.areas.set(D, we), Ie.momentsOfInertiaZ.set(D, Se), Ie.momentsOfInertiaY.set(D, se), Ie.torsionalConstants.set(D, je), Ie.densities.set(D, pe.rho), Ie.sectionShapes.set(D, {
              type: "rect",
              b: ee,
              h: ue,
              name: oe.sectionName
            }), D++;
          }
          const fe = Math.min(...de.map((oe) => oe[2]));
          de.forEach((oe, pe) => {
            Math.abs(oe[2] - fe) < 0.05 && Re.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of g.detailCategories) {
            const pe = Ze();
            pe && pe.scene.remove(oe);
          }
          i({
            nodes: de,
            elements: re,
            nodeInputs: Re,
            elementInputs: Ie,
            sectionShapes: Ie.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: re.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of g.detailCategories) {
            const re = Ze();
            re && re.scene.remove(de);
          }
          const K = Ze();
          K && K.render(), F.remove();
        });
      }
      function m(g) {
        B = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
        const E = /* @__PURE__ */ new Map();
        for (let re = 0; re < g.stories.length; re++) E.set(g.stories[re].name, re);
        for (let re = 0; re < g.elementTypes.length; re++) {
          const Ie = g.elementTypes[re], Re = g.elementStories[re], D = E.get(Re) ?? 0;
          $e.set(re, D), Ie === "COLUMN" || Ie === "BRACE" ? B.add(re) : G.add(re);
        }
        z = "edificio";
        const v = g.grids.filter((re) => re.dir === "X").sort((re, Ie) => re.coord - Ie.coord), F = g.grids.filter((re) => re.dir === "Y").sort((re, Ie) => re.coord - Ie.coord);
        let X, V, ae, Q;
        if (v.length > 0 || F.length > 0) X = v.map((re) => re.coord), V = F.map((re) => re.coord), ae = v.map((re) => re.label), Q = F.map((re) => re.label);
        else {
          const re = new Set(g.nodes.map((Re) => Re[0])), Ie = new Set(g.nodes.map((Re) => Re[1]));
          X = [
            ...re
          ].sort((Re, D) => Re - D), V = [
            ...Ie
          ].sort((Re, D) => Re - D), ae = X.map((Re, D) => String(D + 1)), Q = V.map((Re, D) => String.fromCharCode(65 + D));
        }
        const K = g.stories.length > 0 ? Math.max(...g.stories.map((re) => re.elev)) : Math.max(...g.nodes.map((re) => re[2]));
        We = X, Xe = V, pt = K, setTimeout(() => {
          wt(), Xn(X, V, K, ae, Q), wo(g.stories, X, V), No(), qo();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const re of g.elementTypes) de[re]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Q.join(",")}]`), console.log(`E2K stories: ${g.stories.map((re) => `${re.name}@${re.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), Qe();
      }
      function M(g, E) {
        const v = new Blob([
          g
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), X = document.createElement("a");
        X.href = F, X.download = E, X.click(), URL.revokeObjectURL(F);
      }
      r && r.addEventListener("change", () => {
        if (a = r.value, r.value = "", a.startsWith("import")) a === "import-e2k" ? f.accept = ".e2k,.E2K" : a === "import-s2k" ? f.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? f.accept = ".ifc,.IFC" : a === "import-py" ? f.accept = ".py" : a === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (a.startsWith("export")) {
          const g = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? M(Cl({
              ...g,
              title: "Awatif Model",
              e2kModel: Ve ?? void 0
            }), "model.e2k") : a === "export-s2k" ? M(Ll({
              ...g,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? M(Ol(g), "model_opensees.py") : a === "export-tcl" && M(Nl(g), "model_opensees.tcl");
          } catch (E) {
            alert("Export error: " + E.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const g = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!g) return;
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
              const de = new FileReader();
              de.onload = () => {
                const re = de.result, Ie = jl(re);
                window.__ifcAnalytical = Ie;
                const Re = {};
                V.elementInfo.forEach((D) => Re[D.category] = (Re[D.category] || 0) + 1), console.log("IFC categories:", Re), console.log(`IFC: ${V.elementInfo.size} geometric elements, ${Ie.elements.length} analytical elements`), c(V, Ie);
              }, de.readAsText(g);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, v.readAsArrayBuffer(g), f.value = "";
          return;
        }
        const E = new FileReader();
        E.onload = () => {
          const v = E.result;
          try {
            if (a === "import-e2k") {
              const F = kl(v);
              Ve = F, i(F, "E2K imported"), m(F);
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
        }, E.readAsText(g), f.value = "";
      });
      const w = Ae.querySelector("#cad3d-force-unit");
      w && (w.value = b, w.addEventListener("change", (g) => {
        g.stopPropagation(), b = w.value, $ = Pn(b, R), z && et(z);
      }));
      const y = Ae.querySelector("#cad3d-length-unit");
      y && (y.value = R, y.addEventListener("change", (g) => {
        g.stopPropagation(), R = y.value, $ = Pn(b, R), z && et(z);
      })), Ae.querySelectorAll("[data-preset]").forEach((g) => {
        g.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = g.dataset.preset, F = H[v];
          F && (b = F.force, R = F.length, J = F.stress, $ = Pn(b, R), w && (w.value = b), y && (y.value = R), Ae.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), z && et(z), console.log(`Preset: ${v} \u2192 ${b}+${R}, stress: ${J.label}`));
        });
      }), (_i = Ae.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (g) => {
        g.stopPropagation(), _a();
      }), (_j = Ae.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (g) => {
        g.stopPropagation(), Da();
      }), (_k = Ae.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (g) => {
        g.stopPropagation(), Ha();
      }), (_l2 = Ae.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (g) => {
        g.stopPropagation(), Wa();
      }), (_m = Ae.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (g) => {
        g.stopPropagation(), ea(async () => {
          const { openCalcPanel: E } = await import("./calcPanel-C1Mz4Itg.js").then(async (m2) => {
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
            modelName: z ? z.charAt(0).toUpperCase() + z.slice(1) : "Modelo"
          };
          E(v);
        });
      }), (_n2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (g) => {
        var _a3, _b2;
        g.stopPropagation(), qe = !qe, (_a3 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", qe);
        const v = Ae.querySelector("#cad3d-mode-prev"), F = Ae.querySelector("#cad3d-mode-next"), X = Ae.querySelector("#cad3d-mode-label"), V = Ae.querySelector("#cad3d-modal-scale");
        if (qe) {
          const ae = Ze();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (_e = ae.settings.loads.rawVal, ae.settings.loads.val = false), Lo(), v.style.display = "", F.style.display = "", X.style.display = "", V && (V.style.display = ""), p();
        } else Co(), v.style.display = "none", F.style.display = "none", X.style.display = "none", V && (V.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && Pe(), setTimeout(() => {
          var _a4;
          const ae = Ze();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && _e && (ae.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a3;
        const g = Ae.querySelector("#cad3d-mode-label");
        if (!g || !(Ce == null ? void 0 : Ce.frequencies)) return;
        const E = Ce.frequencies[xe], v = E > 0 ? 1 / E : 0, F = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= xe; X++) {
          const V = (_a3 = Ce.massParticipation) == null ? void 0 : _a3[X];
          if (V) for (let ae = 0; ae < 6; ae++) F[ae] += V[ae];
        }
        g.textContent = `Modo ${xe + 1} \u2014 ${E.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(F[0] * 100).toFixed(1)}% \u03A3Uy=${(F[1] * 100).toFixed(1)}% \u03A3Rz=${(F[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ae.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        xe = (xe - 1 + Ce.modeShapes.length) % Ce.modeShapes.length;
        const E = Ce.modeShapes[xe], { extent: v } = yn();
        let F = 0;
        for (let X = 0; X < ke.length; X++) {
          const V = E[X * 6] || 0, ae = E[X * 6 + 1] || 0, Q = E[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(V * V + ae * ae + Q * Q));
        }
        Ge = F > 1e-12 ? v * 0.05 / F : 1, Qn(), p();
      }), (_p = Ae.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        xe = (xe + 1) % Ce.modeShapes.length;
        const E = Ce.modeShapes[xe], { extent: v } = yn();
        let F = 0;
        for (let X = 0; X < ke.length; X++) {
          const V = E[X * 6] || 0, ae = E[X * 6 + 1] || 0, Q = E[X * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(V * V + ae * ae + Q * Q));
        }
        Ge = F > 1e-12 ? v * 0.05 / F : 1, Qn(), p();
      });
      const h = Ae.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (g) => g.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        qe && (Ce == null ? void 0 : Ce.modeShapes) && Qn();
      });
      const k = Ae.querySelector("#cad3d-cli-toggle"), A = Ae.querySelector("#cad3d-cli-panel"), I = Ae.querySelector("#cad3d-cli-output"), T = Ae.querySelector("#cad3d-cmd"), P = [];
      let x = -1;
      k == null ? void 0 : k.addEventListener("click", (g) => {
        if (g.stopPropagation(), A) {
          const E = A.style.display !== "none";
          A.style.display = E ? "none" : "block", E || (T == null ? void 0 : T.focus(), I && !I.textContent && (I.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), T == null ? void 0 : T.addEventListener("mousedown", (g) => g.stopPropagation()), document.addEventListener("keydown", (g) => {
        var _a3;
        if ((g.ctrlKey || g.metaKey) && g.key === "z" && !g.shiftKey) {
          g.preventDefault(), As();
          return;
        }
        if ((g.ctrlKey || g.metaKey) && (g.key === "y" || g.key === "z" && g.shiftKey)) {
          g.preventDefault(), Ls();
          return;
        }
        if ((g.key === "Delete" || g.key === "Backspace") && ht.size > 0) {
          g.preventDefault(), ht.forEach((E) => U.add(E)), ht.clear(), fn && (fn.remove(), fn = null), Pe();
          return;
        }
        if (g.key === "Escape") {
          if (pn) if (vt !== null) {
            vt = null;
            const E = Ze();
            Nt && E && (E.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && E && (E.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), E == null ? void 0 : E.render();
          } else io();
          Yt && ro(), nn && (nn = false, An(), (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), T == null ? void 0 : T.addEventListener("keydown", (g) => {
        if (g.stopPropagation(), g.key === "Enter") {
          const E = T.value.trim();
          if (E) {
            P.unshift(E), x = -1, I && (I.textContent += `> ${E}
`);
            try {
              const v = new Function("cad", `return ${E}`)(Ke);
              if (v !== void 0 && I) {
                const F = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                I.textContent += `${F}
`;
              }
            } catch (v) {
              I && (I.textContent += `ERROR: ${v.message}
`);
            }
            I && (I.scrollTop = I.scrollHeight), T.value = "";
          }
        } else g.key === "ArrowUp" ? (g.preventDefault(), P.length > 0 && x < P.length - 1 && (x++, T.value = P[x])) : g.key === "ArrowDown" && (g.preventDefault(), x > 0 ? (x--, T.value = P[x]) : (x = -1, T.value = ""));
      });
      let u = false, S = 0, C = 0, O = 0, j = 0;
      Ae.addEventListener("mousedown", (g) => {
        const E = g.target.tagName;
        if (E === "BUTTON" || E === "INPUT" || E === "SELECT") return;
        u = true;
        const v = Ae.getBoundingClientRect();
        Ae.style.bottom = "unset", S = g.clientX, C = g.clientY, O = v.left, j = v.top, g.preventDefault();
      }), window.addEventListener("mousemove", (g) => {
        u && (g.preventDefault(), Ae.style.left = O + (g.clientX - S) + "px", Ae.style.top = j + (g.clientY - C) + "px");
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
      let n = 1 / 0, o = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [i, c, m] of t) i < n && (n = i), i > s && (s = i), c < o && (o = c), c > d && (d = c), m < l && (l = m), m > a && (a = m);
      const r = new Oe((n + s) / 2, (o + d) / 2, (l + a) / 2), f = Math.max(s - n, d - o, a - l, 1);
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
      o <= 5 ? l = Math.max(1, Math.ceil(o * 1.5)) : o <= 50 ? l = Math.max(5, Math.ceil(o * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(o * 1.3 / 10) * 10), n.settings.gridSize.val = l, n.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), n.scene.remove(m);
      });
      const d = Xa(), a = new ll(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), n.scene.add(a), n.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((M) => M instanceof co))).forEach((m) => {
        m.traverse((M) => {
          M.geometry && M.geometry.dispose(), M.material && (M.material.map && M.material.map.dispose(), M.material.dispose());
        }), n.scene.remove(m);
      });
      const f = 0.05 * l, i = new so();
      i.name = "viewerAxes";
      const c = d.axisArrow;
      i.add(new co(new Oe(1, 0, 0), new Oe(), 1, c, 0.2, 0.2)), i.add(new co(new Oe(0, 1, 0), new Oe(), 1, c, 0.2, 0.2)), i.add(new co(new Oe(0, 0, 1), new Oe(), 1, c, 0.2, 0.2)), i.children.forEach((m) => m.scale.set(f, f, f));
      for (const [m, M, w] of [
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
        p.fillStyle = M, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(m, 32, 34);
        const h = new Xo(y);
        h.needsUpdate = true;
        const k = new po(new fo({
          map: h,
          depthTest: false,
          transparent: true
        }));
        k.position.set(w[0], w[1], w[2]), k.scale.set(0.4 * f, 0.4 * f, 1), k.renderOrder = 99, i.add(k);
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
      const { center: o, extent: l } = yn(), s = n.renderer.domElement.clientWidth / (n.renderer.domElement.clientHeight || 1), d = l * 0.7;
      n.controls.maxDistance = l * 5, n.controls.minDistance = l * 0.05, n.renderer.clippingPlanes = [];
      const a = () => {
        n.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, c = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || i || c) && (Array.isArray(r.material) ? r.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = n.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        n.perspCamera.position.set(o.x + f * 0.5, o.y - f * 0.8, o.z + f * 0.5), n.controls.target.copy(o), n.setActiveCamera(n.perspCamera);
      } else {
        const r = n.orthoCamera;
        r.left = -d * s, r.right = d * s, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (i, c, m) => {
          r.position.copy(i), r.up.copy(m), n.controls.target.copy(c), r.lookAt(c), n.controls.update();
        };
        if (t === "plan") n.renderer.clippingPlanes = [], f(new Oe(o.x, o.y, o.z + l * 2), new Oe(o.x, o.y, o.z), new Oe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), c = ((_a2 = Z.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (i + 1) * c, M = c * 0.45;
          n.renderer.clippingPlanes = [
            new In(new Oe(0, 0, -1), m + M),
            new In(new Oe(0, 0, 1), -m + M)
          ], a(), f(new Oe(o.x, o.y, m + l * 2), new Oe(o.x, o.y, m), new Oe(0, 1, 0));
        } else if (t === "elevX") r.position.set(o.x + l * 2, o.y, o.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(o.x, o.y - l * 2, o.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), c = We[i] ?? o.x;
          if (Xe.length > 1) {
            const M = zs(We, i, l);
            n.renderer.clippingPlanes = [
              new In(new Oe(-1, 0, 0), c + M),
              new In(new Oe(1, 0, 0), -c + M)
            ], a(), r.position.set(o.x + l * 2, o.y, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else r.position.set(o.x, o.y - l * 2, o.z), n.controls.target.copy(o);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), c = Xe[i] ?? o.y;
          if (We.length > 1) {
            const M = zs(Xe, i, l);
            n.renderer.clippingPlanes = [
              new In(new Oe(0, -1, 0), c + M),
              new In(new Oe(0, 1, 0), -c + M)
            ], a(), r.position.set(o.x, o.y - l * 2, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else r.position.set(o.x + l * 2, o.y, o.z), n.controls.target.copy(o);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && n.controls.target.copy(o), n.setActiveCamera(r);
      }
    }
    function No() {
      const t = Ae.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (We.length < 2 && Xe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (d, a, r) => {
        const f = document.createElement("button");
        return f.textContent = d, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const c = f.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), c ? ($n("3d"), (_a2 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : ($n(a), f.classList.add("view-active"));
        }), f;
      }, o = document.createElement("span");
      o.textContent = "Ejes:", o.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(o);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      We.forEach((d, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(n(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Xe.forEach((d, a) => {
        const r = `${a + 1}`;
        t.appendChild(n(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qo() {
      var _a2;
      const t = Ae.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const n = Math.round(((_a2 = Z.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (n < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (s, d, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = d, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const i = r.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), i ? ($n("3d"), (_a3 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : ($n(d), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < n; s++) t.appendChild(o(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function ka() {
      $n("3d"), Ae.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ke.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, $n(t), Ae.querySelectorAll("[data-view]").forEach((o) => o.classList.toggle("view-active", o.dataset.view === t));
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
      const d = new tn();
      d.setAttribute("position", new Ln(s, 3));
      const a = new Gn(d, new Yn({
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
      const t = Y.size > 0 || _;
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
          let d = 0, a = 0, r = 0, f = 0;
          o.forEach((c) => {
            const m = s[c];
            if (m) if (m.length === 2) {
              const M = l[m[0]], w = l[m[1]], y = Math.abs(w[0] - M[0]), p = Math.abs(w[1] - M[1]), h = Math.abs(w[2] - M[2]);
              h > y && h > p ? d++ : a++;
            } else m.length === 3 ? r++ : m.length === 4 && f++;
          });
          const i = [];
          d && i.push(`${d} columnas`), a && i.push(`${a} vigas`), f && i.push(`${f} shells Q4`), r && i.push(`${r} triangulos`), alert(`${o.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), n.querySelector("#sel-hide").addEventListener("click", () => {
        ht.forEach((o) => Y.add(o)), ht.clear(), wn(), En(), Pe();
      }), n.querySelector("#sel-isolate").addEventListener("click", () => {
        _ = true, W.clear(), ht.forEach((o) => W.add(o)), ht.clear(), wn(), En(), Pe();
      }), n.querySelector("#sel-showall").addEventListener("click", () => {
        Y.clear(), _ = false, W.clear(), En(), Pe();
      }), n.querySelector("#sel-delete").addEventListener("click", () => {
        Dn(), ht.forEach((o) => U.add(o)), ht.clear(), wn(), En(), Pe();
      }), n.querySelector("#sel-clear").addEventListener("click", () => {
        ht.clear(), wn(), En();
      });
    }
    function ro() {
      var _a2;
      Yt = false, ht.clear(), wn(), fn && (fn.remove(), fn = null), (_a2 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
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
      for (const [d, a] of s) {
        const r = new Float32Array([
          o[0] - d[0] * l,
          o[1] - d[1] * l,
          o[2] - d[2] * l,
          o[0] + d[0] * l,
          o[1] + d[1] * l,
          o[2] + d[2] * l
        ]), f = new tn();
        f.setAttribute("position", new xo(r, 3));
        const i = new Wn({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Gn(f, i);
        c.computeLineDistances(), c.renderOrder = 9990, n.scene.add(c), Do.push(c);
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
      const s = l.x - o.x, d = l.y - o.y, a = l.z - o.z, r = Math.sqrt(s * s + d * d + a * a), f = Math.abs(s), i = Math.abs(d), c = Math.abs(a);
      let m = "";
      f > i && f > c ? m = `\u0394X=${s.toFixed(2)}` : i > f && i > c ? m = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (m = `\u0394Z=${a.toFixed(2)}`), Qt.textContent = `${r.toFixed(3)} m  ${m}`, Qt.style.left = t + 20 + "px", Qt.style.top = n - 10 + "px";
    }
    function Aa(t, n) {
      const l = e.nodes.val[n];
      if (!l) return null;
      const s = new Oe(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), r = 0.3, f = Math.abs(a.x), i = Math.abs(a.y), c = Math.abs(a.z);
      return i < r && c < r && f > 0.01 ? new Oe(d.x, s.y, s.z) : f < r && c < r && i > 0.01 ? new Oe(s.x, d.y, s.z) : f < r && i < r && c > 0.01 ? new Oe(s.x, s.y, d.z) : null;
    }
    function io() {
      var _a2;
      const t = Ze();
      Nt && t && (t.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), Ho(), vt = null, Zt = null, pn = false, qn && (qn.remove(), qn = null), (_a2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
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
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = n(jt === "line")), d && (d.style.cssText = n(jt === "arc")), a && (a.style.cssText = n(jt === "node")), r && (r.style.cssText = n(jt === "area"));
        const f = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        f && (f.style.cssText = o(Et.node)), i && (i.style.cssText = o(Et.grid)), c && (c.style.cssText = o(Et.midpoint)), m && (m.style.cssText = o(Et.track));
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
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((n - s.top) / s.height) * 2 + 1, r = new oa();
      r.setFromCamera(new sa(d, a), o);
      const f = e.nodes.val, i = e.elements.val, c = 0.12;
      if (Et.node) {
        let w = -1, y = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const h = f[p], k = new Oe(h[0], h[1], h[2]).project(o), A = Math.sqrt((k.x - d) ** 2 + (k.y - a) ** 2);
          A < c && A < y && (y = A, w = p);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Oe(...f[w]),
          snapType: "node"
        };
      }
      if (Et.midpoint) {
        let w = 1 / 0, y = null;
        for (const p of i) {
          if (p.length !== 2) continue;
          const h = f[p[0]], k = f[p[1]], A = new Oe((h[0] + k[0]) / 2, (h[1] + k[1]) / 2, (h[2] + k[2]) / 2), I = A.clone().project(o), T = Math.sqrt((I.x - d) ** 2 + (I.y - a) ** 2);
          T < c * 0.8 && T < w && (w = T, y = A);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Et.grid) {
        const w = new In(new Oe(0, 0, 1), 0), y = new Oe();
        if (r.ray.intersectPlane(w, y)) {
          const p = Et.gridSize || _o;
          return y.x = Math.round(y.x / p) * p, y.y = Math.round(y.y / p) * p, y.z = Math.round(y.z / p) * p, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const m = new In(new Oe(0, 0, 1), 0), M = new Oe();
      return r.ray.intersectPlane(m, M), {
        nodeIdx: null,
        worldPos: M,
        snapType: "free"
      };
    }
    function Ps(t) {
      const n = Ze();
      if (!n) return;
      const o = e.nodes.val;
      if (qt && (n.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new nl(s * 2, s * 2, s * 2) : new ol(s, 12, 12), a = new sl({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        qt = new ca(d, a), qt.position.copy(t.worldPos), qt.renderOrder = 9999, n.scene.add(qt);
      }
      if (Nt && (n.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), vt !== null && t.worldPos) {
        const l = o[vt], s = new tn();
        if (jt === "arc" && Zt !== null) {
          const a = o[Zt], r = Rs(new Oe(l[0], l[1], l[2]), new Oe(a[0], a[1], a[2]), t.worldPos, 16), f = [];
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
        const d = new Yn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Nt = new Cn(s, d), jt === "arc" && Zt !== null && (Nt = new Gn(s, d)), Nt.renderOrder = 9999, n.scene.add(Nt);
      }
      n.render();
    }
    function Rs(t, n, o, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, r = n.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(o.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), i = 2 * (1 - a) * a, c = a * a;
        s.push(new Oe(f * t.x + i * r.x + c * o.x, f * t.y + i * r.y + c * o.y, f * t.z + i * r.z + c * o.z));
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
        const o = e.nodes.val, l = new Oe(...o[vt]), s = new Oe(...o[Zt]), d = new Oe(...o[n]), a = Math.max(4, Math.round(((_a2 = Z.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Rs(l, s, d, a);
        Dn();
        const f = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let c = vt;
        for (let m = 1; m < r.length; m++) {
          let M;
          if (m === r.length - 1) M = n;
          else {
            const w = r[m];
            M = f.length, f.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          i.push([
            c,
            M
          ]), c = M;
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
          ], s = Xt.map((d) => o[d]);
          try {
            const d = hn({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: _o || 0.5
            }), a = [];
            for (const r of d.nodes) {
              let f = -1;
              for (let i = 0; i < o.length; i++) {
                const c = Math.abs(o[i][0] - r[0]), m = Math.abs(o[i][1] - r[1]), M = Math.abs(o[i][2] - r[2]);
                if (c < 0.01 && m < 0.01 && M < 0.01) {
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
            for (const r of d.elements) l.push([
              a[r[0]],
              a[r[1]],
              a[r[2]]
            ]);
            e.nodes.val = o, e.elements.val = l, vn(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Xt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Xt = [];
          return;
        }
        if (Xt.push(n), console.log(`Area vertex ${Xt.length}: node ${n}`), Xt.length >= 2) {
          const o = Xt[Xt.length - 2], l = e.nodes.val, s = Ze();
          if (s) {
            const d = new tn().setFromPoints([
              new Oe(...l[o]),
              new Oe(...l[n])
            ]), a = new Gn(d, new Yn({
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
      const d = new tn();
      d.setAttribute("position", new Ln(s, 3)), Jt = new Gn(d, new Yn({
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
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const i = s.ray;
      for (let m = 0; m < a.length; m++) {
        const M = a[m];
        if (M.length === 2) {
          const w = new Oe(...d[M[0]]), y = new Oe(...d[M[1]]), p = new al(w, y), h = new Oe(), k = new Oe();
          i.closestPointToPoint(p.getCenter(new Oe()), h), p.closestPointToPoint(h, true, k);
          const A = h.distanceTo(k);
          A < r && (r = A, f = m);
        } else if (M.length === 3) {
          const w = new Oe(...d[M[0]]), y = new Oe(...d[M[1]]), p = new Oe(...d[M[2]]), h = new Oe();
          if (i.intersectTriangle(w, y, p, false, h)) {
            const A = i.origin.distanceTo(h);
            A < r && (r = A, f = m);
          } else {
            const A = w.add(y).add(p).divideScalar(3), I = new Oe();
            i.closestPointToPoint(A, I);
            const T = I.distanceTo(A);
            T < r && (r = T, f = m);
          }
        } else if (M.length === 4) {
          const w = new Oe(...d[M[0]]), y = new Oe(...d[M[1]]), p = new Oe(...d[M[2]]), h = new Oe(...d[M[3]]), k = new Oe();
          let A = i.intersectTriangle(w, y, p, false, k);
          if (A) {
            const I = i.origin.distanceTo(k);
            I < r && (r = I, f = m);
          }
          if (A = i.intersectTriangle(w, p, h, false, k), A) {
            const I = i.origin.distanceTo(k);
            I < r && (r = I, f = m);
          }
        }
      }
      const { extent: c } = yn();
      return r < c * 0.1 ? f : -1;
    }
    function Me(t, n = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(n);
    }
    function Go(t, n, o = 12) {
      var _a2;
      const l = Math.min(t.length, o), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, o);
      let d = "<table>";
      if (n) {
        d += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) d += `<td class="header">${n[a] || a}</td>`;
        d += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        d += "<tr>", n && (d += `<td class="header">${n[a] || a}</td>`);
        for (let r = 0; r < s; r++) {
          const f = t[a][r], i = Math.abs(f) > 1e-10 ? "nonzero" : "";
          d += `<td class="${i}">${Me(f, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function De(t, n) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${n}</span></span>`;
    }
    function L(t, n, o) {
      let l = `<span class="var">${t}</span>`;
      return n && (l += `<sub>${n}</sub>`), l;
    }
    function Fa(t, n, o, l, s, d, a) {
      const r = 0.8333333333333334 * n, f = 5 / 6 * n, i = f > 0 && s > 0 ? 12 * t * o / (s * f * a ** 2) : 0, c = r > 0 && s > 0 ? 12 * t * l / (s * r * a ** 2) : 0, m = t * n / a, M = s * d / a, w = 12 * t * o / a ** 3 / (1 + i), y = 6 * t * o / a ** 2 / (1 + i), p = 4 * t * o / a * (1 + i / 4) / (1 + i), h = 2 * t * o / a * (1 - i / 2) / (1 + i), k = i > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${k ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${k ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${L("A", "s")} = ${De("5", "6")} \xB7 ${L("A")} = <span class="highlight">${Me(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${De("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("G") + "\xB7" + L("A", "s") + "\xB7" + L("L") + "\xB2")} = <span class="highlight">${Me(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Me(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${L("t", "z")} = ${De("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(w)}</span> &nbsp;(cortante)</div>
      <div>${L("b", "z")} = ${De("6\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${L("k", "z")} = ${De("4\xB7" + L("E") + "\xB7" + L("I", "z") + "\xB7(1+\u03C6/4)", L("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${L("a", "z")} = ${De("2\xB7" + L("E") + "\xB7" + L("I", "z") + "\xB7(1\u2212\u03C6/2)", L("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${De(L("E") + "\xB7" + L("A"), L("L"))} = <span class="highlight">${Me(m)}</span> &nbsp;(axial)</div>
      <div>${De(L("G") + "\xB7" + L("J"), L("L"))} = <span class="highlight">${Me(M)}</span> &nbsp;(torsi\xF3n)</div>
      ${k ? "" : `
      <div>${De("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3")} = <span class="highlight">${Me(w)}</span></div>
      <div>${De("4\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))} = <span class="highlight">${Me(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${L("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${De(L("EA"), L("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${De("\u2212" + L("EA"), L("L"))}</span>
        <span class="cell">0</span><span class="cell">${L("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${L("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${L("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${L("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${k ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${k ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${L("K", "f")} = ${L("B", "f")}<sup>T</sup> \xB7 ${L("E")}\xB7${L("I")} \xB7 ${L("B", "f")} \xB7 ${L("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${L("K", "c")} = ${L("B", "c")}<sup>T</sup> \xB7 ${L("G")}\xB7${L("A'")} \xB7 ${L("B", "c")} \xB7 ${L("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${L("K", "total")} = ${L("K", "f")} + ${L("K", "c")}</div>
    </div>` : ""}`;
    }
    function Pa(t) {
      if (t.length === 2) {
        const o = xn(t[1], t[0]), l = Rn(o), s = o[0] / l, d = o[1] / l, a = o[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${L("l")} = cos(\u03B1) = ${De("\u0394x", L("L"))} = ${De(Me(o[0]), Me(l))} = <span class="highlight">${Me(s)}</span></div>
        <div>${L("m")} = cos(\u03B2) = ${De("\u0394y", L("L"))} = ${De(Me(o[1]), Me(l))} = <span class="highlight">${Me(d)}</span></div>
        <div>${L("n")} = cos(\u03B3) = ${De("\u0394z", L("L"))} = ${De(Me(o[2]), Me(l))} = <span class="highlight">${Me(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${L("l")}</span><span class="cell">${L("m")}</span><span class="cell">${L("n")}</span>
          <span class="cell">${De("\u2212" + L("m"), L("D"))}</span><span class="cell">${De(L("l"), L("D"))}</span><span class="cell">0</span>
          <span class="cell">${De("\u2212" + L("l") + "\xB7" + L("n"), L("D"))}</span><span class="cell">${De("\u2212" + L("m") + "\xB7" + L("n"), L("D"))}</span><span class="cell">${L("D")}</span>
        </span>
        &nbsp; donde ${L("D")} = \u221A(${L("l")}\xB2 + ${L("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${L("T")} = ${L("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${L("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Ra() {
      return `<div class="fem-eq">
      ${L("K", "global")} = ${L("T")}<sup>T</sup> \xB7 ${L("k", "local")} \xB7 ${L("T")}
    </div>`;
    }
    function Oa(t) {
      const n = t.map((o) => `6\xB7${o} = ${6 * o}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${L("K", "global")}[${L("i")}, ${L("j")}] += ${L("K", "elem")}[${L("i")}, ${L("j")}]</div>
      <div style="margin-top:4px">donde ${L("i")}, ${L("j")} \u2208 {${n}} + (0..5)</div>
    </div>`;
    }
    function Na(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${L("u", "local")} = ${L("T")} \xB7 ${L("u", "global")}</div>
        <div>${L("f", "local")} = ${L("k", "local")} \xB7 ${L("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${L("f")} = [${L("N", "i")}, ${L("V", "y,i")}, ${L("V", "z,i")}, ${L("M", "x,i")}, ${L("M", "y,i")}, ${L("M", "z,i")}, ${L("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${De("1", "2" + L("A"))} \xB7 ${L("D")} \xB7 ${L("B")} \xB7 ${L("u")}</div>
      <div>${L("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${L("t")} &nbsp;&nbsp; ${L("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${De(L("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yo(t, n) {
      const o = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < o; s++) l += `<td class="hdr">${n[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < o; s++) {
        l += `<tr><td class="hdr">${n[s] || s}</td>`;
        for (let d = 0; d < o; d++) {
          const a = t[s][d], r = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${Me(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ns() {
      const t = "0", n = De(L("EA"), L("L")), o = De("\u2212" + L("EA"), L("L")), l = De("12" + L("EI", "z"), L("L") + "\xB3"), s = De("\u221212" + L("EI", "z"), L("L") + "\xB3"), d = De("12" + L("EI", "y"), L("L") + "\xB3"), a = De("\u221212" + L("EI", "y"), L("L") + "\xB3"), r = De("6" + L("EI", "z"), L("L") + "\xB2"), f = De("\u22126" + L("EI", "z"), L("L") + "\xB2"), i = De("6" + L("EI", "y"), L("L") + "\xB2"), c = De("\u22126" + L("EI", "y"), L("L") + "\xB2"), m = De(L("GJ"), L("L")), M = De("\u2212" + L("GJ"), L("L")), w = De("4" + L("EI", "z"), L("L")), y = De("2" + L("EI", "z"), L("L")), p = De("4" + L("EI", "y"), L("L")), h = De("2" + L("EI", "y"), L("L")), k = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', A = [
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
      ], I = [
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
      ], T = [
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
          d,
          t,
          c,
          t,
          t,
          t,
          a,
          t,
          c,
          t
        ],
        [
          t,
          t,
          t,
          m,
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
          c,
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
          w,
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
          d,
          t,
          i,
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
          m,
          t,
          t
        ],
        [
          t,
          t,
          c,
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
          w
        ]
      ];
      let P = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      P += '<table><tr><td class="hdr"></td>';
      for (const x of I) P += `<td class="hdr">${x}</td>`;
      P += "</tr>";
      for (let x = 0; x < 12; x++) {
        P += `<tr><td class="hdr">${A[x]}</td>`;
        for (let u = 0; u < 12; u++) if (u < x) P += `<td style="color:var(--fem-border-cell)">${u === 0 && x > 0 ? k : ""}</td>`;
        else {
          const S = T[x][u], C = (x === u ? "diag " : "") + (S !== "0" ? "nz" : "");
          P += `<td class="${C}">${S}</td>`;
        }
        P += "</tr>";
      }
      return P += "</table>", P;
    }
    function qa(t, n, o, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${De(L("E") + "\xB7" + L("A"), L("L"))}`,
          calc: `${De(Me(t) + "\xD7" + Me(n), Me(a))}`,
          val: t * n / a,
          label: "Axial"
        },
        {
          name: `${De("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3")}`,
          calc: `${De("12\xD7" + Me(t) + "\xD7" + Me(o), Me(a) + "\xB3")}`,
          val: 12 * t * o / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${De("6\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB2")}`,
          calc: `${De("6\xD7" + Me(t) + "\xD7" + Me(o), Me(a) + "\xB2")}`,
          val: 6 * t * o / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${De("12\xB7" + L("E") + "\xB7" + L("I", "y"), L("L") + "\xB3")}`,
          calc: `${De("12\xD7" + Me(t) + "\xD7" + Me(l), Me(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${De("6\xB7" + L("E") + "\xB7" + L("I", "y"), L("L") + "\xB2")}`,
          calc: `${De("6\xD7" + Me(t) + "\xD7" + Me(l), Me(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${De(L("G") + "\xB7" + L("J"), L("L"))}`,
          calc: `${De(Me(s) + "\xD7" + Me(d), Me(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${De("4\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))}`,
          calc: `${De("4\xD7" + Me(t) + "\xD7" + Me(o), Me(a))}`,
          val: 4 * t * o / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${De("2\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))}`,
          calc: `${De("2\xD7" + Me(t) + "\xD7" + Me(o), Me(a))}`,
          val: 2 * t * o / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${De("4\xB7" + L("E") + "\xB7" + L("I", "y"), L("L"))}`,
          calc: `${De("4\xD7" + Me(t) + "\xD7" + Me(l), Me(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${De("2\xB7" + L("E") + "\xB7" + L("I", "y"), L("L"))}`,
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
      const d = document.createElement("div");
      d.className = "fem-full-overlay", d.innerHTML = `
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
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (a) => {
        a.target === d && d.remove();
      });
    }
    function qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Kt && Kt.remove();
      const n = e.nodes.val, o = e.elements.val, l = o[t], s = l.map((x) => n[x]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const x = Rn(xn(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, S = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, C = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, O = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, j = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, g = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, E = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let V = 0; V < 6; V++) {
          const ae = V, Q = V + 6, K = (E.length >= 12 ? E[ae] : V >= 3 && E.length >= 6 && E[V - 3]) ? "checked" : "", de = (E.length >= 12 ? E[Q] : V >= 3 && E.length >= 6 && E[V]) ? "checked" : "", re = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", Ie = v.length >= 12 && v[Q] > 0 ? v[Q].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[V]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${K}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Q}" ${de}></td>
          <td><input type="number" data-spr="${ae}" value="${re}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Q}" value="${Ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Me(x)}${Me(u)}${Me(S)}${Me(C)}${Me(O)}${Me(j)}${Me(g)}${X}`;
      } else {
        const x = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, S = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, C = x / (2 * (1 + S)), O = l.length === 4, j = x / (1 - S * S);
        `${l.length}${l.join(", ")}${Me(x)}${Me(C)}${Me(u)}${Me(S)}`, O && (M = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${L("D")} = ${De(L("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${De("1\u2212\u03BD", "2")}</span>
          </span> = ${De(Me(x), "1\u2212" + Me(S) + "\xB2")} = <span class="highlight">${Me(j)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${L("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${L("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${L("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${L("u", "x")} = \u03A3${L("N", "i")}\xB7${L("u", "xi")} + \u03B1\u2081\xB7${L("N", "5")} + \u03B1\u2082\xB7${L("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${L("u", "y")} = \u03A3${L("N", "i")}\xB7${L("u", "yi")} + \u03B1\u2083\xB7${L("N", "5")} + \u03B1\u2084\xB7${L("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${L("d")} = [${L("B", "C")} &nbsp; ${L("B", "I")}] \xB7 [${L("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${L("k", "CC")} = \u222B${L("B", "C")}<sup>T</sup>\xB7${L("E")}\xB7${L("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${L("k", "CI")} = \u222B${L("B", "C")}<sup>T</sup>\xB7${L("E")}\xB7${L("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${L("k", "II")} = \u222B${L("B\u0304", "I")}<sup>T</sup>\xB7${L("E")}\xB7${L("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${L("k", "C")} = ${L("k", "CC")} \u2212 ${L("k", "CI")} \xB7 ${L("k", "II")}\u207B\xB9 \xB7 ${L("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${L("B\u0304", "I")} = ${L("B", "I")} + ${L("B", "IC")} &nbsp; donde &nbsp; ${L("B", "IC")} = \u2212${De("1", "V")}\u222B${L("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${L("K", "drill")} = \u03B1\xB7${L("G")}\xB7${L("t")} \xB7 \u222B${L("B", "d")}<sup>T</sup>\xB7${L("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${L("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${L("D", "b")} = ${De(L("E") + "\xB7" + L("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Me(x * u ** 3 / (12 * (1 - S ** 2)))}</span></div>
          <div>${L("D", "s")} = \u03BA\xB7${L("G")}\xB7${L("t")} = <span class="highlight">${Me(5 / 6 * C * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${L("K", "24\xD724")} = ${L("K", "membrana")}(8\xD78) + ${L("K", "flexi\xF3n")}(12\xD712) + ${L("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let i = "", c = "", m = "", M = "", w = "", y = "", p = "", h = "", k = null, A = null, I = null, T = [];
      try {
        if (k = vo(s, a, t), A = yo(s), I = on(os(A), on(k, A)), T = d ? [
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
          const C = Rn(xn(s[1], s[0])), O = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, j = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, g = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, E = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t = a.torsionalConstants) == null ? void 0 : _t.get(t)) ?? 0;
          M = Fa(O, j, g, E, v, F, C);
        }
        w = Pa(s), y = Ra(), p = Oa(l), h = Na(d);
        const x = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', S = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        i = `<div class="matrix-label">k_local (${k.length}\xD7${k.length}) ${x}</div>${Go(k, T)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${A.length}\xD7${A.length}) ${u}</div>${Go(A, T)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${S}</div>${Go(I, T)}`;
      } catch (x) {
        i = `<div style="color:red">Error: ${x.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
        const x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, S) => {
          var _a3;
          const C = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], O = x.map((j, g) => `<span class="prop-key">${j}</span>: <span class="${Math.abs(C[g]) > 1e-10 ? "result-val" : ""}">${Me(C[g])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${O}</div>`;
        }).join("");
      }
      if (f && d && (r == null ? void 0 : r.deformations) && k && A) {
        const x = (_u = f.normals) == null ? void 0 : _u.get(t), u = (_v = f.shearsY) == null ? void 0 : _v.get(t), S = (_w = f.shearsZ) == null ? void 0 : _w.get(t), C = (_x = f.torsions) == null ? void 0 : _x.get(t), O = (_y = f.bendingsY) == null ? void 0 : _y.get(t), j = (_z = f.bendingsZ) == null ? void 0 : _z.get(t), g = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], E = [];
        for (const Q of l) {
          const K = ((_A = r.deformations) == null ? void 0 : _A.get(Q)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          E.push(...K);
        }
        let v = [];
        try {
          v = on(A, E);
        } catch {
          v = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = on(k, v);
        } catch {
          F = new Array(12).fill(0);
        }
        const X = (Q, K) => Q.map((de, re) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[re % 6]}=${Me(de)}</span>`).join(", "), ae = [
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
        `${L("u", "global")}${l.map((Q, K) => `<span style="color:var(--fem-label)">nodo ${Q}:</span> ${g.map((de, re) => `<span style="color:${Math.abs(E[K * 6 + re]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Me(E[K * 6 + re])}</span>`).join(", ")}`).join(" | ")}${L("u", "local")}${L("T")}${L("u", "global")}${L("u", "local")}${X(v, [
          ...g,
          ...g
        ])}${L("f", "local")}${L("k", "local")}${L("u", "local")}${L("f", "local")}${F.map((Q, K) => `<span style="color:${Math.abs(Q) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[K]}=${Me(Q)}</span>`).join(", ")}${L("P", "1")}${L("N", "i")}${Me(F[0])}${L("P", "7")}${L("N", "j")}${Me(F[6])}${L("P", "2")}${L("V", "y,i")}${Me(F[1])}${L("P", "8")}${L("V", "y,j")}${Me(F[7])}${L("P", "3")}${L("V", "z,i")}${Me(F[2])}${L("P", "9")}${L("V", "z,j")}${Me(F[8])}${L("P", "4")}${L("M", "x,i")}${Me(F[3])}${L("P", "10")}${L("M", "x,j")}${Me(F[9])}${L("P", "5")}${L("M", "y,i")}${Me(F[4])}${L("P", "11")}${L("M", "y,j")}${Me(F[10])}${L("P", "6")}${L("M", "z,i")}${Me(F[5])}${L("P", "12")}${L("M", "z,j")}${Me(F[11])}${x ? x.map((Q) => Me(Q)).join(", ") : "\u2014"}${u ? u.map((Q) => Me(Q)).join(", ") : "\u2014"}${S ? S.map((Q) => Me(Q)).join(", ") : "\u2014"}${C ? C.map((Q) => Me(Q)).join(", ") : "\u2014"}${O ? O.map((Q) => Me(Q)).join(", ") : "\u2014"}${j ? j.map((Q) => Me(Q)).join(", ") : "\u2014"}`;
      } else if (f && d) {
        const x = (_B = f.normals) == null ? void 0 : _B.get(t), u = (_C = f.shearsY) == null ? void 0 : _C.get(t), S = (_D = f.shearsZ) == null ? void 0 : _D.get(t), C = (_E = f.torsions) == null ? void 0 : _E.get(t), O = (_F = f.bendingsY) == null ? void 0 : _F.get(t), j = (_G = f.bendingsZ) == null ? void 0 : _G.get(t);
        `${x ? x.map((g) => Me(g)).join(", ") : "\u2014"}${u ? u.map((g) => Me(g)).join(", ") : "\u2014"}${S ? S.map((g) => Me(g)).join(", ") : "\u2014"}${C ? C.map((g) => Me(g)).join(", ") : "\u2014"}${O ? O.map((g) => Me(g)).join(", ") : "\u2014"}${j ? j.map((g) => Me(g)).join(", ") : "\u2014"}`;
      } else if (f && !d) {
        const x = (_H = f.bendingXX) == null ? void 0 : _H.get(t), u = (_I = f.bendingYY) == null ? void 0 : _I.get(t), S = (_J = f.bendingXY) == null ? void 0 : _J.get(t), C = (_K = f.membraneXX) == null ? void 0 : _K.get(t), O = (_L = f.membraneYY) == null ? void 0 : _L.get(t), j = (_M = f.membraneXY) == null ? void 0 : _M.get(t);
        `${x ? x.map((g) => Me(g)).join(", ") : "\u2014"}${u ? u.map((g) => Me(g)).join(", ") : "\u2014"}${S ? S.map((g) => Me(g)).join(", ") : "\u2014"}${C ? C.map((g) => Me(g)).join(", ") : "\u2014"}${O ? O.map((g) => Me(g)).join(", ") : "\u2014"}${j ? j.map((g) => Me(g)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), n.length * 6, n.length * 6, Kt = vl(t, n, o, a, r, f), Kt.id = "fem-inspect-panel", document.body.appendChild(Kt), (_N = Kt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => An()), (_O = Kt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const x = Kt.querySelectorAll("input[data-rel]"), u = Kt.querySelectorAll("input[data-spr]"), S = new Array(12).fill(false), C = new Array(12).fill(0);
        x.forEach((j) => {
          S[parseInt(j.dataset.rel)] = j.checked;
        }), u.forEach((j) => {
          const g = parseFloat(j.value);
          g > 0 && (C[parseInt(j.dataset.spr)] = g);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), S.some((j) => j) ? a.momentReleases.set(t, S) : a.momentReleases.delete(t), C.some((j) => j > 0) ? a.partialFixitySprings.set(t, C) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, S.map((j, g) => j ? relIds[g] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, C);
        const O = Kt.querySelector("#rel-apply");
        O.textContent = "\u2713 Aplicado", O.style.background = "#4caf50", setTimeout(() => {
          O.textContent = "Aplicar", O.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const P = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const x = Rn(xn(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, S = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, C = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, O = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, j = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, g = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return qa(u, S, C, O, j, g, x);
      })() : void 0;
      Kt.querySelectorAll("[data-full]").forEach((x) => {
        x.addEventListener("click", (u) => {
          u.stopPropagation();
          const S = x.dataset.full;
          if (S === "kLocal" && k) {
            const C = d ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jo(`Elemento ${t} \u2014 Rigidez Local k_local`, C, Yo(k, T), P);
          } else if (S === "T" && A) Jo(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, Yo(A, T));
          else if (S === "kGlobal" && I) {
            const C = d ? Ns() : "<em>Shell 18\xD718</em>";
            Jo(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, C, Yo(I, T), P);
          }
        });
      });
    }
    function _s() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const p = y / 8, h = 30 * p, A = 12 * (1 - p) * (1 - p * 0.3) / 2, I = l.length;
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
          I,
          I + 1
        ]), s.push([
          I + 1,
          I + 2
        ]), s.push([
          I + 2,
          I + 3
        ]), s.push([
          I + 3,
          I
        ]), y > 0 && y < 8 && (s.push([
          I,
          I + 2
        ]), s.push([
          I + 1,
          I + 3
        ])), y > 0) {
          const T = I - 4;
          for (let P = 0; P < 4; P++) s.push([
            T + P,
            I + P
          ]);
          s.push([
            T,
            I + 1
          ]), s.push([
            T + 1,
            I + 2
          ]), s.push([
            T + 2,
            I + 3
          ]), s.push([
            T + 3,
            I
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
        supports: d,
        loads: r
      });
      const f = 2e8, i = 77e6, c = 5e-3, m = 2e-6, M = 1e-6, w = {
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
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = kt(l, s, {
          supports: d,
          loads: r
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Ds() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const y = w / 20, p = 20 * y, h = 20 * (1 - Math.pow(2 * y - 1, 2)), k = 2;
        l.push([
          p,
          -2 / 2,
          h
        ]), l.push([
          p,
          k / 2,
          h
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
        supports: d,
        loads: a
      });
      const r = 2e8, f = 77e6, i = 0.01, c = 5e-6, m = 2e-6, M = {
        elasticities: new Map(s.map((w, y) => [
          y,
          r
        ])),
        shearModuli: new Map(s.map((w, y) => [
          y,
          f
        ])),
        areas: new Map(s.map((w, y) => [
          y,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((w, y) => [
          y,
          c
        ])),
        momentsOfInertiaY: new Map(s.map((w, y) => [
          y,
          c
        ])),
        torsionalConstants: new Map(s.map((w, y) => [
          y,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const w = kt(l, s, {
          supports: d,
          loads: a
        }, M);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Bs() {
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
      ], i = [];
      for (const p of f) {
        const h = 60 * p / 16, k = d.length;
        d.push([
          h,
          -6 / 2,
          0
        ]);
        const A = d.length;
        d.push([
          h,
          6 / 2,
          0
        ]);
        const I = d.length;
        d.push([
          h,
          -6 / 2,
          28
        ]);
        const T = d.length;
        d.push([
          h,
          6 / 2,
          28
        ]), i.push(I, T), a.push([
          k,
          p * 2
        ]), a.push([
          p * 2,
          I
        ]), a.push([
          A,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          T
        ]), a.push([
          I,
          T
        ]);
      }
      for (const p of i) {
        const h = d[p][0];
        for (let k = 0; k <= 16; k++) {
          const A = 60 * k / 16;
          if (Math.abs(A - h) > 60 * 0.05 && Math.abs(A - h) < 60 * 0.45) {
            const I = d[p][1] < 0 ? k * 2 : k * 2 + 1;
            k % 2 === 0 && a.push([
              p,
              I
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
      for (let p = r; p < r + f.length * 4; p += 4) c.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(p + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let p = 0; p <= 16; p++) m.set(p * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), m.set(p * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: m
      });
      const M = 2e8, w = 77e6, y = {
        elasticities: new Map(a.map((p, h) => [
          h,
          M
        ])),
        shearModuli: new Map(a.map((p, h) => [
          h,
          w
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
        const p = kt(d, a, {
          supports: c,
          loads: m
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Hs() {
      const d = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const k = h * 3.5, A = h * 5 * Math.PI / 180;
        for (let I = 0; I < 6; I++) {
          const T = A + 2 * Math.PI * I / 6, P = 5 * Math.cos(T), x = 5 * Math.sin(T);
          d.push([
            P,
            x,
            k
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const k = h * 6;
        for (let A = 0; A < 6; A++) a.push([
          k + A,
          k + (A + 1) % 6
        ]);
        if (h < 12) {
          const A = (h + 1) * 6;
          for (let I = 0; I < 6; I++) a.push([
            k + I,
            A + I
          ]), a.push([
            k + I,
            A + (I + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const k = d.length;
        d.push([
          0,
          0,
          h * 3.5
        ]);
        const A = h * 6;
        for (let I = 0; I < 6; I++) a.push([
          k,
          A + I
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
        const k = 10 * h / 12, A = h * 6;
        for (let I = 0; I < 6; I++) i.set(A + I, [
          k,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: i
      });
      const c = 2e8, m = 77e6, M = 8e-3, w = 1e-5, y = 5e-6, p = {
        elasticities: new Map(a.map((h, k) => [
          k,
          c
        ])),
        shearModuli: new Map(a.map((h, k) => [
          k,
          m
        ])),
        areas: new Map(a.map((h, k) => [
          k,
          M
        ])),
        momentsOfInertiaZ: new Map(a.map((h, k) => [
          k,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((h, k) => [
          k,
          w
        ])),
        torsionalConstants: new Map(a.map((h, k) => [
          k,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const h = kt(d, a, {
          supports: f,
          loads: i
        }, p);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function js() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const h = p / 20, k = p * 3;
        let A = 8 * (1 - h * 0.7);
        h > 0.4 && (A *= 0.85), h > 0.7 && (A *= 0.7);
        const I = s.length;
        s.push([
          0,
          0,
          k
        ]);
        for (let T = 0; T < 3; T++) {
          const P = T * 2 * Math.PI / 3 - Math.PI / 2, x = A * Math.cos(P), u = A * Math.sin(P), S = s.length;
          s.push([
            x,
            u,
            k
          ]), d.push([
            I,
            S
          ]);
          const C = s.length;
          s.push([
            x * 0.5,
            u * 0.5,
            k
          ]), d.push([
            I,
            C
          ]), d.push([
            C,
            S
          ]);
        }
        for (let T = 0; T < 3; T++) {
          const P = I + 1 + T * 2, x = I + 1 + (T + 1) % 3 * 2;
          d.push([
            P,
            x
          ]);
        }
        if (p < 20) {
          const P = I + 7;
          d.push([
            I,
            P
          ]);
          for (let x = 0; x < 3; x++) d.push([
            I + 1 + x * 2,
            P + 1 + x * 2
          ]), d.push([
            I + 2 + x * 2,
            P + 2 + x * 2
          ]), d.push([
            I + 1 + x * 2,
            P + 2 + x * 2
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
        const h = p * r, k = 5 * p / 20;
        f.set(h, [
          k,
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
      const i = 35e6, c = 14e6, m = 0.02, M = 5e-5, w = 2e-5, y = {
        elasticities: new Map(d.map((p, h) => [
          h,
          i
        ])),
        shearModuli: new Map(d.map((p, h) => [
          h,
          c
        ])),
        areas: new Map(d.map((p, h) => [
          h,
          m
        ])),
        momentsOfInertiaZ: new Map(d.map((p, h) => [
          h,
          M
        ])),
        momentsOfInertiaY: new Map(d.map((p, h) => [
          h,
          M
        ])),
        torsionalConstants: new Map(d.map((p, h) => [
          h,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = kt(s, d, {
          supports: a,
          loads: f
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Ws() {
      const t = [], n = [];
      for (let m = 0; m < 3; m++) {
        const M = m * 12, w = 15 - m * 2, y = 20 - m * 3, p = 8 - m, h = t.length;
        for (let A = 0; A <= 4; A++) {
          const I = A / 4, T = -p / 2 + p * I, P = y * (1 - I * I * 0.3);
          for (let x = 0; x <= 12; x++) {
            const u = x / 12, S = M + P * u, C = w * Math.sin(Math.PI * u) * (1 - I * I * 0.5), O = T;
            t.push([
              S,
              O,
              C
            ]);
          }
        }
        const k = 13;
        for (let A = 0; A < 4; A++) for (let I = 0; I < 12; I++) {
          const T = h + A * k + I, P = h + A * k + I + 1, x = h + (A + 1) * k + I + 1, u = h + (A + 1) * k + I;
          n.push([
            T,
            P,
            x,
            u
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] < 0.5 && s.set(m, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] > 2 && d.set(m, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = n, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: d
      });
      const a = 35e6, r = 0.2, f = 0.15, i = a / (2 * (1 + r)), c = {
        elasticities: new Map(n.map((m, M) => [
          M,
          a
        ])),
        poissonsRatios: new Map(n.map((m, M) => [
          M,
          r
        ])),
        thicknesses: new Map(n.map((m, M) => [
          M,
          f
        ])),
        shearModuli: new Map(n.map((m, M) => [
          M,
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const m = kt(t, n, {
          supports: s,
          loads: d
        }, c);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Sydney Opera: ${t.length} nodos, ${n.length} shells Q4, 3 velas`);
    }
    function Gs() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const p = y / 15, h = y * 3.5, k = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const A = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let I = 0; I < 12; I++) {
            const T = 2 * Math.PI * I / 12;
            l.push([
              Math.max(A, 1) * Math.cos(T),
              Math.max(A, 1) * Math.sin(T),
              h
            ]);
          }
        } else for (let A = 0; A < 12; A++) {
          const I = 2 * Math.PI * A / 12;
          l.push([
            k * Math.cos(I),
            k * Math.sin(I),
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
        const k = y % 2 === 0 ? 1 : -1;
        for (let A = 0; A < 12; A++) {
          const I = (A + k + 12) % 12;
          s.push([
            p + A,
            h + I
          ]), s.push([
            p + A,
            h + A
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
      const r = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const p = y * 12, h = 3 * y / 15;
        for (let k = 0; k < 12; k += 3) r.set(p + k, [
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
      const f = 2e8, i = 77e6, c = 6e-3, m = 8e-6, M = 4e-6, w = {
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
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = kt(l, s, {
          supports: a,
          loads: r
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => wt(), 50), Qe(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Vo() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Z.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = Z.H) == null ? void 0 : _b.val) ?? 3, o = ((_c = Z.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Z.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Z.ny) == null ? void 0 : _e2.val) ?? 6), d = ((_f = Z.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Z.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Z.P) == null ? void 0 : _h.val) ?? 100, f = d / (2 * (1 + a)), i = t / l, c = n / s, m = [], M = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let T = 0; T <= s; T++) for (let P = 0; P <= l; P++) m.push([
        P * i,
        0,
        T * c
      ]);
      const p = l + 1;
      for (let T = 0; T < s; T++) for (let P = 0; P < l; P++) M.push([
        T * p + P,
        T * p + P + 1,
        (T + 1) * p + P + 1,
        (T + 1) * p + P
      ]);
      for (let T = 0; T <= l; T++) w.set(T, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = [];
      for (let T = 0; T <= l; T++) h.push(s * p + T);
      const k = r / h.length;
      for (const T of h) y.set(T, [
        k,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const A = {
        elasticities: new Map(M.map((T, P) => [
          P,
          d
        ])),
        poissonsRatios: new Map(M.map((T, P) => [
          P,
          a
        ])),
        thicknesses: new Map(M.map((T, P) => [
          P,
          o
        ])),
        shearModuli: new Map(M.map((T, P) => [
          P,
          f
        ])),
        densities: new Map(M.map((T, P) => [
          P,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = A);
      try {
        const T = kt(m, M, {
          supports: w,
          loads: y
        }, A);
        if (T && e.deformOutputs) {
          e.deformOutputs.val = T;
          const P = gn(m, M, A, T);
          e.analyzeOutputs && (e.analyzeOutputs.val = P);
          const x = s * p + Math.floor(l / 2), u = T.deformations.get(x), S = u ? u[0] : 0;
          console.log(`Muro Q4: Ux=${S.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (T) {
        console.warn("MuroQ4:", T.message);
      }
      const I = Ze();
      I && (I.settings.shellResults.val = "displacementX"), setTimeout(() => wt(), 50), Qe();
    }
    function Ys() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Z.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = Z.h) == null ? void 0 : _b.val) ?? 0.5, o = ((_c = Z.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Z.nx) == null ? void 0 : _d.val) ?? 12), s = Math.round(((_e2 = Z.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Z.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Z.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Z.P) == null ? void 0 : _h.val) ?? 50, f = d / (2 * (1 + a)), i = t / l, c = n / s, m = [], M = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let I = 0; I <= s; I++) for (let T = 0; T <= l; T++) m.push([
        T * i,
        I * c,
        0
      ]);
      const p = l + 1;
      for (let I = 0; I < s; I++) for (let T = 0; T < l; T++) M.push([
        I * p + T,
        I * p + T + 1,
        (I + 1) * p + T + 1,
        (I + 1) * p + T
      ]);
      for (let I = 0; I <= s; I++) w.set(I * p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = Math.floor(s / 2) * p + l;
      y.set(h, [
        0,
        -r,
        0,
        0,
        0,
        0
      ]), e.nodes.val = m, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const k = {
        elasticities: new Map(M.map((I, T) => [
          T,
          d
        ])),
        poissonsRatios: new Map(M.map((I, T) => [
          T,
          a
        ])),
        thicknesses: new Map(M.map((I, T) => [
          T,
          o
        ])),
        shearModuli: new Map(M.map((I, T) => [
          T,
          f
        ])),
        densities: new Map(M.map((I, T) => [
          T,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const I = kt(m, M, {
          supports: w,
          loads: y
        }, k);
        if (I && e.deformOutputs) {
          e.deformOutputs.val = I;
          const T = gn(m, M, k, I);
          e.analyzeOutputs && (e.analyzeOutputs.val = T);
          const P = I.deformations.get(h), x = P ? P[1] : 0, u = o * n * n * n / 12, S = r * t * t * t / (3 * d * u);
          console.log(`Viga Q4: Uy_tip=${x.toExponential(4)} | Analitico=${S.toExponential(4)} | ratio=${(Math.abs(x) / S).toFixed(4)}`);
        }
      } catch (I) {
        console.warn("VigaQ4:", I.message);
      }
      const A = Ze();
      A && (A.settings.shellResults.val = "displacementY"), setTimeout(() => wt(), 50), Qe();
    }
    function Js() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Z.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = Z.Lz) == null ? void 0 : _b.val) ?? 2, o = ((_c = Z.t) == null ? void 0 : _c.val) ?? 0.15, l = Math.round(((_d = Z.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Z.nz) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Z.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Z.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Z.P) == null ? void 0 : _h.val) ?? 20, f = d / (2 * (1 + a)), i = t / l, c = n / s, m = [], M = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let T = 0; T <= s; T++) for (let P = 0; P <= l; P++) m.push([
        P * i,
        0,
        T * c
      ]);
      const p = l + 1;
      for (let T = 0; T < s; T++) for (let P = 0; P < l; P++) M.push([
        T * p + P,
        T * p + P + 1,
        (T + 1) * p + P + 1,
        (T + 1) * p + P
      ]);
      for (let T = 0; T <= s; T++) w.set(T * p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = [];
      for (let T = 0; T <= s; T++) h.push(T * p + l);
      const k = r / h.length;
      for (const T of h) y.set(T, [
        0,
        0,
        -k,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const A = {
        elasticities: new Map(M.map((T, P) => [
          P,
          d
        ])),
        poissonsRatios: new Map(M.map((T, P) => [
          P,
          a
        ])),
        thicknesses: new Map(M.map((T, P) => [
          P,
          o
        ])),
        shearModuli: new Map(M.map((T, P) => [
          P,
          f
        ])),
        densities: new Map(M.map((T, P) => [
          P,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = A);
      try {
        const T = kt(m, M, {
          supports: w,
          loads: y
        }, A);
        if (T && e.deformOutputs) {
          e.deformOutputs.val = T;
          const P = gn(m, M, A, T);
          e.analyzeOutputs && (e.analyzeOutputs.val = P);
          const x = (s / 2 | 0) * p + l, u = T.deformations.get(x), S = u ? u[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${S.toExponential(4)} m`);
        }
      } catch (T) {
        console.warn("PlacaXZ:", T.message);
      }
      const I = Ze();
      I && (I.settings.shellResults.val = "displacementZ"), setTimeout(() => wt(), 50), Qe();
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
        }, o = n("po-colB"), l = n("po-colH"), s = n("po-fc") * 1e3, d = n("po-fy") * 1e3, a = n("po-H"), r = n("po-L"), f = n("po-As") * 1e-4, i = n("po-nbar"), c = n("po-drift") / 100, m = n("po-ncycles"), M = t.querySelector("#pushover-status");
        M.textContent = "Generando historia de desplazamientos...";
        const w = [], y = c * a, p = 40;
        for (let h = 1; h <= m; h++) {
          const k = y * h / m;
          for (let A = 0; A <= p; A++) w.push(k * Math.sin(2 * Math.PI * A / p));
        }
        M.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ea(async () => {
            const { cyclicPushover: A } = await import("./cyclicPushoverCpp-C_AWr1zl.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: A
            };
          }, __vite__mapDeps([6,5]), import.meta.url), k = await h({
            colHeight: a,
            beamLength: r,
            col: {
              b: o,
              h: l,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: i
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: i
            },
            dispHistory: w
          });
          M.textContent = `Completado: ${k.nSteps} pasos`, Ba(t.querySelector("#pushover-canvas"), k.displacements, k.forces, `Pushover: ${o * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (h) {
          M.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Ba(t, n, o, l) {
      const s = t.getContext("2d");
      if (!s || n.length === 0) return;
      const d = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = d - r.left - r.right, i = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let c = Math.min(...n), m = Math.max(...n), M = Math.min(...o), w = Math.max(...o);
      c === m && (c -= 0.01, m += 0.01), M === w && (M -= 1, w += 1);
      const y = m - c, p = w - M, h = (T) => r.left + (T - c) / y * f, k = (T) => r.top + i - (T - M) / p * i;
      s.strokeStyle = "#333", s.lineWidth = 0.5, c < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), r.top), s.lineTo(h(0), r.top + i), s.stroke()), M < 0 && w > 0 && (s.beginPath(), s.moveTo(r.left, k(0)), s.lineTo(r.left + f, k(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(n[0]), k(o[0]));
      for (let T = 1; T < n.length; T++) s.lineTo(h(n[T]), k(o[T]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + i / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const A = y / 5;
      for (let T = 0; T <= 5; T++) {
        const P = c + A * T;
        s.fillText((P * 1e3).toFixed(1), h(P), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const I = p / 5;
      for (let T = 0; T <= 5; T++) {
        const P = M + I * T;
        s.fillText(P.toFixed(0), r.left - 5, k(P) + 3);
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
      const n = parseFloat(t.querySelector("#nl-fy").value), o = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let V = 0; V < a; V++) {
        const ae = d * (1 + V * 0.5);
        for (let Q = 0; Q < r; Q++) {
          const K = Q / r * 2 * Math.PI;
          f.push(ae * Math.sin(K));
        }
      }
      const i = n / o, c = l * o;
      let m = 0, M = 0, w = -i, y = i, p = 0, h = 0, k = 0, A = 0, I = 0, T = 0;
      const P = [];
      for (const V of f) {
        let ae = w, Q = y, K = p, de = h, re = k, Ie = A, Re = I, D = T, fe;
        const oe = V - m;
        if (Math.abs(oe) < 1e-20) {
          P.push(M);
          continue;
        }
        if ((D === 0 || D === 3) && (oe < 0 ? (D = 2, de = -i, re = -n, K = de, Ie = 0, Re = 0) : (D = 1, de = i, re = n, K = de, Ie = 0, Re = 0)), D === 2 && oe > 0) {
          D = 1, Ie = m, Re = M, m < ae && (ae = m);
          const Se = (Q - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Se, 0.8);
          de = (n * je - c * i * je - Re + o * Ie) / (o - c), re = n * je + c * (de - i * je), K = Q;
        } else if (D === 1 && oe < 0) {
          D = 2, Ie = m, Re = M, m > Q && (Q = m);
          const Se = (Q - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Se, 0.8);
          de = (-n * je + c * i * je - Re + o * Ie) / (o - c), re = -n * je + c * (de + i * je), K = ae;
        }
        const pe = Math.abs((K - de) / i);
        let ee = s - 0.925 * pe / (0.15 + pe);
        ee < 0.1 && (ee = 0.1);
        const ue = (V - Ie) / (de - Ie), we = 1 + Math.pow(Math.abs(ue), ee), se = Math.pow(we, 1 / ee);
        fe = l * ue + (1 - l) * ue / se, fe = fe * (re - Re) + Re, P.push(fe), m = V, M = fe, w = ae, y = Q, p = K, h = de, k = re, A = Ie, I = Re, T = D;
      }
      const x = t.querySelector("#nl-canvas"), u = x.getContext("2d"), S = x.width, C = x.height;
      u.clearRect(0, 0, S, C);
      const O = Math.max(...f.map(Math.abs)), j = Math.max(...P.map(Math.abs)), g = (S - 40) / (2 * O), E = (C - 40) / (2 * j), v = S / 2, F = C / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(S - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, C - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", S - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(O * 100).toFixed(1)}%`, S - 30, F + 12), u.fillText(`\xB1${(j / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let V = 0; V < f.length; V++) {
        const ae = v + f[V] * g, Q = F - P[V] * E;
        V === 0 ? u.moveTo(ae, Q) : u.lineTo(ae, Q);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - n * E), u.lineTo(S - 20, F - n * E), u.stroke(), u.beginPath(), u.moveTo(20, F + n * E), u.lineTo(S - 20, F + n * E), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(n / 1e3).toFixed(0)} MPa`, S - 50, F - n * E - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(n / 1e3).toFixed(0)} MPa, E\u2080=${(o / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Wa() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const n = e.nodes.val, o = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !n.length || !o.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = ul({
        nodes: n,
        elements: o,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Bn = null;
    function Ga(t) {
      Bn && Bn.remove();
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const o = mo(), l = bo(), s = Object.entries(o).map(([i, c]) => `<option value="${c}">${i}</option>`).join(""), d = Object.entries(l).map(([i, c]) => `<option value="${c}">${i}</option>`).join("");
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
        let c = "";
        i === "rect" ? c = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : i === "circ" ? c = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : i === "W" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : i === "HSS" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : i === "I-param" ? c = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
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
      a.addEventListener("change", f), f(), n.querySelector("#asgn-close").addEventListener("click", () => {
        n.remove(), Bn = null;
      }), n.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = a.value, c = {
          secType: i
        };
        i === "rect" ? (c.b = parseFloat(n.querySelector("#ap-b").value), c.h = parseFloat(n.querySelector("#ap-h").value), c.material = 0) : i === "circ" ? (c.b = parseFloat(n.querySelector("#ap-d").value), c.material = 0) : i === "W" || i === "HSS" ? (c.profileIdx = parseInt(n.querySelector("#ap-profile").value), c.material = 1) : i === "I-param" ? (c.bf = parseFloat(n.querySelector("#ap-bf").value), c.hf = parseFloat(n.querySelector("#ap-hf").value), c.tf = parseFloat(n.querySelector("#ap-tf").value), c.tw = parseFloat(n.querySelector("#ap-tw").value), c.material = 1) : i === "tubular" && (c.bc = parseFloat(n.querySelector("#ap-bc").value), c.hc = parseFloat(n.querySelector("#ap-hc").value), c.t = parseFloat(n.querySelector("#ap-t").value), c.material = 1);
        const m = new Array(12).fill(false), M = new Array(12).fill(0);
        n.querySelectorAll("input[data-asgn-rel]").forEach((w) => {
          m[parseInt(w.dataset.asgnRel)] = w.checked;
        }), n.querySelectorAll("input[data-asgn-spr]").forEach((w) => {
          const y = parseFloat(w.value);
          y > 0 && (M[parseInt(w.dataset.asgnSpr)] = y);
        }), c.releases12 = m, c.springs12 = M, c.releaseRotStart = m[4] || m[5], c.releaseRotEnd = m[10] || m[11], c.releaseAxial = m[0], c.releaseTorsion = m[3], c.modI = parseFloat((_a2 = n.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = n.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = n.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = n.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = n.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = n.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = n.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = n.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((w) => ye.set(w, {
          ...c
        })), n.remove(), Bn = null, vn(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), n.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => ye.delete(i)), n.remove(), Bn = null, vn(), e.elementInputs.val = {
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
      const l = n[o[0]], s = n[o[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > d && a > r, i = Math.sqrt(d * d + a * a + r * r), c = $e.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), M = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${c + 1} &nbsp;
        <span style="color:#888;">L:</span> ${i.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${M}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${o[0]} \u2192 ${o[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(w), Hn = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), Hn = null, An();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        U.add(t), w.remove(), Hn = null, An(), Pe();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Hn = null, qs(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const n = t.querySelector("canvas");
      if (!n) return;
      let o = null, l = null;
      const s = 5;
      function d(f) {
        const i = Ze();
        if (!i) return null;
        const c = i.controls.object, m = new Oe(f[0], f[1], f[2]);
        m.project(c);
        const M = n.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * M.width,
          y: (-m.y + 1) / 2 * M.height
        };
      }
      function a(f, i, c, m, M) {
        const w = Math.min(f, c), y = Math.max(f, c), p = Math.min(i, m), h = Math.max(i, m), k = e.nodes.val, A = e.elements.val, I = [];
        for (let T = 0; T < A.length; T++) {
          const P = A[T], x = P.map((u) => d(k[u])).filter(Boolean);
          if (x.length !== 0) if (M) x.every((S) => S.x >= w && S.x <= y && S.y >= p && S.y <= h) && I.push(T);
          else {
            if (x.some((S) => S.x >= w && S.x <= y && S.y >= p && S.y <= h)) {
              I.push(T);
              continue;
            }
            if (P.length === 2) {
              const S = x[0], C = x[1];
              r(S.x, S.y, C.x, C.y, w, p, y, h) && I.push(T);
            }
          }
        }
        return I;
      }
      function r(f, i, c, m, M, w, y, p) {
        const h = (A, I) => A >= M && A <= y && I >= w && I <= p;
        if (h(f, i) || h(c, m)) return true;
        const k = (A, I, T, P, x, u, S, C) => {
          const O = (T - A) * (C - u) - (P - I) * (S - x);
          if (Math.abs(O) < 1e-10) return false;
          const j = ((x - A) * (C - u) - (u - I) * (S - x)) / O, g = ((x - A) * (P - I) - (u - I) * (T - A)) / O;
          return j >= 0 && j <= 1 && g >= 0 && g <= 1;
        };
        return k(f, i, c, m, M, w, y, w) || k(f, i, c, m, y, w, y, p) || k(f, i, c, m, M, p, y, p) || k(f, i, c, m, M, w, M, p);
      }
      n.addEventListener("mousedown", (f) => {
        Yt && (o = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), n.addEventListener("mousemove", (f) => {
        if (pn) {
          const c = Ze();
          if (!c) return;
          const m = Fs(f.clientX, f.clientY, c.camera, c.rendererElm);
          if (Et.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== zn && za(m.nodeIdx), Et.track && zn !== null && m.worldPos && m.snapType !== "node") {
            const M = Aa(m.worldPos, zn);
            M && (m.worldPos = M, m.snapType = "grid");
          }
          if (zn !== null && m.worldPos) {
            const M = e.nodes.val[zn];
            M && Cs(f.clientX, f.clientY, new Oe(...M), m.worldPos);
          } else if (vt !== null && m.worldPos) {
            const M = e.nodes.val[vt];
            M && Cs(f.clientX, f.clientY, new Oe(...M), m.worldPos);
          } else Qt && (Qt.remove(), Qt = null);
          m.nodeIdx, Ps(m), n.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!nn && !Yt) return;
        if (Yt && o) {
          const c = f.offsetX - o.x, m = f.offsetY - o.y;
          if (Math.abs(c) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", n.parentElement.style.position = "relative", n.parentElement.appendChild(l));
            const M = c > 0, w = Math.min(o.x, f.offsetX), y = Math.min(o.y, f.offsetY), p = Math.abs(c), h = Math.abs(m);
            l.style.left = w + "px", l.style.top = y + "px", l.style.width = p + "px", l.style.height = h + "px", l.style.border = M ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = M ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", n.style.cursor = "crosshair";
            return;
          }
        }
        const i = Wo(f);
        if (i >= 0) Os(i), n.style.cursor = "pointer";
        else {
          if (Jt) {
            const c = Ze();
            c == null ? void 0 : c.scene.remove(Jt), Jt = null, c == null ? void 0 : c.render();
          }
          n.style.cursor = Yt ? "crosshair" : "";
        }
      }), n.addEventListener("mouseup", (f) => {
        if (Yt && o) {
          const i = f.offsetX - o.x, c = f.offsetY - o.y;
          if (Math.abs(i) > s || Math.abs(c) > s) {
            const m = i > 0, M = a(o.x, o.y, f.offsetX, f.offsetY, m);
            f.ctrlKey || f.metaKey || (ht.clear(), wn()), M.forEach((y) => {
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
          const c = Fs(f.clientX, f.clientY, i.camera, i.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (Ca(c), Ps(c));
          return;
        }
        if (Yt) {
          if (l) return;
          const i = Wo(f), c = f.ctrlKey || f.metaKey;
          if (i >= 0) {
            if (c) if (ht.has(i)) {
              ht.delete(i);
              const m = Mn.findIndex((M) => M.__elemIdx === i);
              if (m >= 0) {
                const M = Ze();
                M == null ? void 0 : M.scene.remove(Mn[m]), Mn[m].geometry.dispose(), Mn[m].material.dispose(), Mn.splice(m, 1), M == null ? void 0 : M.render();
              }
            } else ht.add(i), Bo(i);
            else ht.clear(), wn(), ht.add(i), Bo(i);
            En();
          } else c || (ht.clear(), wn(), En());
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
      if (t === void 0 && (t = !qe), qe = t, (_a2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", qe), qe) {
        const o = Ze();
        ((_b = o == null ? void 0 : o.settings) == null ? void 0 : _b.loads) && (_e = o.settings.loads.rawVal, o.settings.loads.val = false), Lo(), Ae.querySelector("#cad3d-mode-prev").style.display = "", Ae.querySelector("#cad3d-mode-next").style.display = "", Ae.querySelector("#cad3d-mode-label").style.display = "";
      } else Co(), Ae.querySelector("#cad3d-mode-prev").style.display = "none", Ae.querySelector("#cad3d-mode-next").style.display = "none", Ae.querySelector("#cad3d-mode-label").style.display = "none", z && z !== "placa-q4" && z !== "placa-3q" && Pe(), setTimeout(() => {
        var _a3;
        const o = Ze();
        ((_a3 = o == null ? void 0 : o.settings) == null ? void 0 : _a3.loads) && _e && (o.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${qe ? "ON" : "OFF"}`);
    }, Ke.setMode = (t) => {
      var _a2;
      if (!(Ce == null ? void 0 : Ce.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Ce.modeShapes.length - 1));
      const n = Ce.modeShapes[xe], { extent: o } = yn();
      let l = 0;
      for (let d = 0; d < ke.length; d++) {
        const a = n[d * 6] || 0, r = n[d * 6 + 1] || 0, f = n[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      Ge = l > 1e-12 ? o * 0.05 / l : 1, Qn();
      const s = Ae.querySelector("#cad3d-mode-label");
      s && Ce.frequencies && (s.textContent = `Modo ${xe + 1} \u2014 ${Ce.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Ce.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = Ke, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ae), document.body.appendChild(it.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (et("muro-q4"), Vo(), Ts("muro-q4"), setTimeout(() => {
        z === "muro-q4" && sn();
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
