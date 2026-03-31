const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-C1Mz4Itg.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-C93PWeaP.js","./cyclicPushoverCpp-C_AWr1zl.js"])))=>i.map(i=>d[i]);
import { d as Ct, _ as Qs, p as Un, m as Ja, s as Va, __tla as __tla_0 } from "./didacticCpp-C93PWeaP.js";
import { v as Jo, P as on, g as Ua, a as Xa, o as Ka } from "./theme-CzzIlc4y.js";
import { G as sn, b as Za, M as ea, D as ta, B as to, c as xn, d as Qa, C as el, e as ia, V as Oe, P as So, R as oa, f as na, g as Wo, h as Go, i as tl, S as ol, j as nl, F as Lo, a as Yo, L as Co, k as sl, l as al, A as dn, T as Xn, m as pn, n as fn, o as ll, p as rl } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as Io } from "./analyze-ClLKGn9k.js";
import { g as go, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as Po, s as ho, m as no, t as ns } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ra, pl, Ql;
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
  function il(e, b) {
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
    const F = os.find((W) => W.id === e), $ = Vo.find((W) => W.id === b), J = F.toKN, H = $.toM, U = (W, ye, z) => z / (Math.pow(J, W) * Math.pow(H, ye));
    let Y, q;
    switch (e) {
      case "kN":
        Y = 10, q = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        Y = 1, q = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        Y = 1e3, q = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        Y = 10, q = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        Y = 5e3, q = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        Y = 1e4, q = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${F.label}, ${$.label}`,
      force: F.label,
      length: $.label,
      stress: il(e, b),
      moment: `${F.label}\xB7${$.label}`,
      E: U(1, -2, Fo.E),
      G: U(1, -2, Fo.G),
      A: U(0, 2, Fo.A),
      Iz: U(0, 4, Fo.Iz),
      Iy: U(0, 4, Fo.Iy),
      J: U(0, 4, Fo.J),
      rho: U(1, -4, Fo.rho),
      spanRange: $.spanRange,
      heightRange: $.heightRange,
      defaultSpan: $.defaultSpan,
      defaultHeight: $.defaultHeight,
      defaultForce: Y,
      forceRange: q,
      galponSpan: $.galponSpan,
      galponLength: $.galponLength,
      galponHeight: $.galponHeight,
      galponRise: $.galponRise
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
  function cl(e) {
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
  function dl(e) {
    const b = e.force, [F, $, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: F,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: F,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: $,
          step: J,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: F,
          max: $,
          step: J,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
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
          min: F,
          max: 0,
          step: J,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: F,
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
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  pl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let b = false;
    function F($, J) {
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
      if (Y += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const q of J.properties) Y += `<span style="color:#888">${q}</span>
`;
      Y += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const q of H) Y += `<th style="padding:2px 5px">${q}</th>`;
      if (Y += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, $.frequencies.forEach((q, W) => {
        var _a2;
        const ye = q > 0 ? 1 / q : 0, z = q * 2 * Math.PI, Q = ((_a2 = $.massParticipation) == null ? void 0 : _a2[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) U[ve] += Q[ve];
        Y += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${q.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ye.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const me = (Q[ve] * 100).toFixed(1), ie = Q[ve] > 0.5 ? "#f00" : Q[ve] > 0.1 ? "#ff0" : "#0f0";
          Y += `<td style="padding:2px 5px; text-align:right; color:${ie}">${me}%</td>`;
        }
        Y += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(U[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(U[5] * 100).toFixed(1)}%</td></tr>`;
      }), Y += "</table></div>", e.innerHTML = Y, b) {
        const q = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        q && (q.style.display = "none"), W && (W.textContent = "\u25A2", W.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const q = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        b ? (q.style.display = "none", W.textContent = "\u25A2", W.title = "Restaurar") : (q.style.display = "block", W.textContent = "\u25AC", W.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const q = [];
        q.push(`Modal Analysis \u2014 ${J.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        q.push(W), q.push("-".repeat(W.length));
        const ye = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        $.frequencies.forEach((Q, ve) => {
          var _a2;
          const me = Q > 0 ? 1 / Q : 0, ie = Q * 2 * Math.PI, oe = ((_a2 = $.massParticipation) == null ? void 0 : _a2[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let D = 0; D < 6; D++) ye[D] += oe[D];
          const N = oe.map((D) => ((D * 100).toFixed(1) + "%").padStart(6)).join(" ");
          q.push(`${String(ve + 1).padStart(4)}  ${Q.toFixed(4).padStart(9)}  ${me.toFixed(4).padStart(9)}  ${ie.toFixed(2).padStart(9)}  ${N}  ${(ye[0] * 100).toFixed(1).padStart(5)}%  ${(ye[1] * 100).toFixed(1).padStart(5)}%  ${(ye[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(q.join(`
`));
        const z = e.querySelector("#modal-copy");
        z.textContent = "\u2713", setTimeout(() => z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: F
    };
  };
  const Fe = 64516e-8, O = 416231e-12, te = 0.0254, ko = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Fe,
      Iz: 16.4 * O,
      Iy: 2.2 * O,
      J: 0.0405 * O,
      d: 5.9 * te,
      bf: 3.94 * te
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Fe,
      Iz: 29.1 * O,
      Iy: 9.32 * O,
      J: 0.103 * O,
      d: 5.99 * te,
      bf: 5.99 * te
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Fe,
      Iz: 41.4 * O,
      Iy: 13.3 * O,
      J: 0.204 * O,
      d: 6.2 * te,
      bf: 6.02 * te
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Fe,
      Iz: 30.8 * O,
      Iy: 2.09 * O,
      J: 0.0426 * O,
      d: 7.89 * te,
      bf: 3.94 * te
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Fe,
      Iz: 61.9 * O,
      Iy: 7.97 * O,
      J: 0.172 * O,
      d: 8.14 * te,
      bf: 5.25 * te
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Fe,
      Iz: 82.7 * O,
      Iy: 18.3 * O,
      J: 0.346 * O,
      d: 7.93 * te,
      bf: 6.5 * te
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Fe,
      Iz: 110 * O,
      Iy: 37.1 * O,
      J: 0.536 * O,
      d: 8 * te,
      bf: 7.995 * te
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 146 * O,
      Iy: 49.1 * O,
      J: 0.871 * O,
      d: 8.25 * te,
      bf: 8.07 * te
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 184 * O,
      Iy: 60.9 * O,
      J: 1.45 * O,
      d: 8.5 * te,
      bf: 8.11 * te
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 272 * O,
      Iy: 88.6 * O,
      J: 3.54 * O,
      d: 9 * te,
      bf: 8.28 * te
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Fe,
      Iz: 53.8 * O,
      Iy: 2.18 * O,
      J: 0.0547 * O,
      d: 9.87 * te,
      bf: 3.96 * te
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 118 * O,
      Iy: 11.4 * O,
      J: 0.239 * O,
      d: 10.17 * te,
      bf: 5.75 * te
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Fe,
      Iz: 171 * O,
      Iy: 36.6 * O,
      J: 0.583 * O,
      d: 9.73 * te,
      bf: 7.96 * te
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Fe,
      Iz: 272 * O,
      Iy: 93.4 * O,
      J: 1.39 * O,
      d: 9.98 * te,
      bf: 10 * te
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Fe,
      Iz: 394 * O,
      Iy: 134 * O,
      J: 3.56 * O,
      d: 10.4 * te,
      bf: 10.13 * te
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Fe,
      Iz: 623 * O,
      Iy: 207 * O,
      J: 10.9 * O,
      d: 11.1 * te,
      bf: 10.34 * te
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Fe,
      Iz: 88.6 * O,
      Iy: 2.36 * O,
      J: 0.0704 * O,
      d: 11.91 * te,
      bf: 3.97 * te
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Fe,
      Iz: 156 * O,
      Iy: 4.66 * O,
      J: 0.293 * O,
      d: 12.31 * te,
      bf: 4.03 * te
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Fe,
      Iz: 204 * O,
      Iy: 17.3 * O,
      J: 0.3 * O,
      d: 12.22 * te,
      bf: 6.49 * te
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 310 * O,
      Iy: 44.1 * O,
      J: 0.906 * O,
      d: 11.94 * te,
      bf: 8.01 * te
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Fe,
      Iz: 425 * O,
      Iy: 95.8 * O,
      J: 1.58 * O,
      d: 12.06 * te,
      bf: 9.99 * te
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Fe,
      Iz: 597 * O,
      Iy: 195 * O,
      J: 4.05 * O,
      d: 12.25 * te,
      bf: 12.04 * te
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Fe,
      Iz: 833 * O,
      Iy: 270 * O,
      J: 8.44 * O,
      d: 12.71 * te,
      bf: 12.16 * te
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Fe,
      Iz: 1070 * O,
      Iy: 345 * O,
      J: 16 * O,
      d: 13.12 * te,
      bf: 12.32 * te
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 199 * O,
      Iy: 7 * O,
      J: 0.208 * O,
      d: 13.74 * te,
      bf: 5 * te
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Fe,
      Iz: 291 * O,
      Iy: 19.6 * O,
      J: 0.38 * O,
      d: 13.84 * te,
      bf: 6.73 * te
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Fe,
      Iz: 385 * O,
      Iy: 26.7 * O,
      J: 0.798 * O,
      d: 14.1 * te,
      bf: 6.77 * te
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 485 * O,
      Iy: 51.4 * O,
      J: 1.45 * O,
      d: 13.79 * te,
      bf: 8.03 * te
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Fe,
      Iz: 640 * O,
      Iy: 107 * O,
      J: 2.19 * O,
      d: 13.89 * te,
      bf: 9.99 * te
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Fe,
      Iz: 882 * O,
      Iy: 148 * O,
      J: 5.07 * O,
      d: 14.31 * te,
      bf: 10.13 * te
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Fe,
      Iz: 1240 * O,
      Iy: 447 * O,
      J: 7.12 * O,
      d: 14.32 * te,
      bf: 14.61 * te
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Fe,
      Iz: 1530 * O,
      Iy: 548 * O,
      J: 12.3 * O,
      d: 14.66 * te,
      bf: 14.73 * te
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Fe,
      Iz: 2140 * O,
      Iy: 838 * O,
      J: 23.7 * O,
      d: 15.22 * te,
      bf: 15.65 * te
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Fe,
      Iz: 301 * O,
      Iy: 9.59 * O,
      J: 0.262 * O,
      d: 15.69 * te,
      bf: 5.5 * te
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Fe,
      Iz: 448 * O,
      Iy: 24.5 * O,
      J: 0.545 * O,
      d: 15.86 * te,
      bf: 6.99 * te
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 659 * O,
      Iy: 37.2 * O,
      J: 1.52 * O,
      d: 16.26 * te,
      bf: 7.07 * te
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 954 * O,
      Iy: 119 * O,
      J: 2.39 * O,
      d: 16.33 * te,
      bf: 10.24 * te
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Fe,
      Iz: 1300 * O,
      Iy: 163 * O,
      J: 5.45 * O,
      d: 16.75 * te,
      bf: 10.37 * te
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Fe,
      Iz: 510 * O,
      Iy: 15.3 * O,
      J: 0.506 * O,
      d: 17.7 * te,
      bf: 6 * te
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 800 * O,
      Iy: 40.1 * O,
      J: 1.24 * O,
      d: 17.99 * te,
      bf: 7.5 * te
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Fe,
      Iz: 1170 * O,
      Iy: 60.3 * O,
      J: 3.49 * O,
      d: 18.47 * te,
      bf: 7.64 * te
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Fe,
      Iz: 1750 * O,
      Iy: 201 * O,
      J: 5.86 * O,
      d: 18.59 * te,
      bf: 11.15 * te
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Fe,
      Iz: 843 * O,
      Iy: 20.7 * O,
      J: 0.77 * O,
      d: 20.66 * te,
      bf: 6.5 * te
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Fe,
      Iz: 1330 * O,
      Iy: 57.5 * O,
      J: 1.83 * O,
      d: 20.99 * te,
      bf: 8.24 * te
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Fe,
      Iz: 1830 * O,
      Iy: 81.4 * O,
      J: 4.34 * O,
      d: 21.43 * te,
      bf: 8.36 * te
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Fe,
      Iz: 2670 * O,
      Iy: 274 * O,
      J: 6.83 * O,
      d: 21.51 * te,
      bf: 12.34 * te
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Fe,
      Iz: 1350 * O,
      Iy: 29.1 * O,
      J: 1.18 * O,
      d: 23.57 * te,
      bf: 7.01 * te
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Fe,
      Iz: 2100 * O,
      Iy: 82.5 * O,
      J: 2.68 * O,
      d: 23.92 * te,
      bf: 8.99 * te
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Fe,
      Iz: 3100 * O,
      Iy: 259 * O,
      J: 4.72 * O,
      d: 24.06 * te,
      bf: 12.75 * te
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Fe,
      Iz: 4020 * O,
      Iy: 340 * O,
      J: 9.5 * O,
      d: 24.48 * te,
      bf: 12.86 * te
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Fe,
      Iz: 4580 * O,
      Iy: 391 * O,
      J: 12.6 * O,
      d: 24.74 * te,
      bf: 12.9 * te
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Fe,
      Iz: 5680 * O,
      Iy: 479 * O,
      J: 21.2 * O,
      d: 25.24 * te,
      bf: 12.9 * te
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Fe,
      Iz: 2850 * O,
      Iy: 106 * O,
      J: 2.81 * O,
      d: 26.71 * te,
      bf: 9.96 * te
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Fe,
      Iz: 4090 * O,
      Iy: 159 * O,
      J: 6.77 * O,
      d: 27.29 * te,
      bf: 10.07 * te
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Fe,
      Iz: 3610 * O,
      Iy: 115 * O,
      J: 3.06 * O,
      d: 29.53 * te,
      bf: 10.4 * te
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Fe,
      Iz: 4930 * O,
      Iy: 164 * O,
      J: 6.43 * O,
      d: 30.01 * te,
      bf: 10.5 * te
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Fe,
      Iz: 5900 * O,
      Iy: 187 * O,
      J: 5.3 * O,
      d: 32.86 * te,
      bf: 11.48 * te
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Fe,
      Iz: 7800 * O,
      Iy: 225 * O,
      J: 7 * O,
      d: 35.55 * te,
      bf: 11.95 * te
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Fe,
      Iz: 8.22 * O,
      Iy: 8.22 * O,
      J: 13.4 * O,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Fe,
      Iz: 10.7 * O,
      Iy: 10.7 * O,
      J: 17.9 * O,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Fe,
      Iz: 12.3 * O,
      Iy: 12.3 * O,
      J: 21 * O,
      d: 4 * te,
      bf: 4 * te
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 30.3 * O,
      Iy: 30.3 * O,
      J: 48.3 * O,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 41.1 * O,
      Iy: 41.1 * O,
      J: 66.9 * O,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Fe,
      Iz: 49.6 * O,
      Iy: 49.6 * O,
      J: 82.2 * O,
      d: 6 * te,
      bf: 6 * te
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Fe,
      Iz: 70.7 * O,
      Iy: 70.7 * O,
      J: 112 * O,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 98 * O,
      Iy: 98 * O,
      J: 158 * O,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Fe,
      Iz: 122 * O,
      Iy: 122 * O,
      J: 199 * O,
      d: 8 * te,
      bf: 8 * te
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 202 * O,
      Iy: 202 * O,
      J: 323 * O,
      d: 10 * te,
      bf: 10 * te
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Fe,
      Iz: 254 * O,
      Iy: 254 * O,
      J: 412 * O,
      d: 10 * te,
      bf: 10 * te
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Fe,
      Iz: 355 * O,
      Iy: 355 * O,
      J: 564 * O,
      d: 12 * te,
      bf: 12 * te
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Fe,
      Iz: 452 * O,
      Iy: 452 * O,
      J: 724 * O,
      d: 12 * te,
      bf: 12 * te
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Fe,
      Iz: 18 * O,
      Iy: 9.58 * O,
      J: 22.6 * O,
      d: 6 * te,
      bf: 4 * te
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Fe,
      Iz: 23.8 * O,
      Iy: 12.3 * O,
      J: 30.3 * O,
      d: 6 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 33.6 * O,
      Iy: 11.8 * O,
      J: 33 * O,
      d: 8 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 45.1 * O,
      Iy: 15 * O,
      J: 44.5 * O,
      d: 8 * te,
      bf: 4 * te
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Fe,
      Iz: 46.1 * O,
      Iy: 28.2 * O,
      J: 61.3 * O,
      d: 8 * te,
      bf: 6 * te
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Fe,
      Iz: 63 * O,
      Iy: 37.5 * O,
      J: 84.6 * O,
      d: 8 * te,
      bf: 6 * te
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 103 * O,
      Iy: 47.1 * O,
      J: 115 * O,
      d: 10 * te,
      bf: 6 * te
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 196 * O,
      Iy: 102 * O,
      J: 249 * O,
      d: 12 * te,
      bf: 8 * te
    }
  ];
  function mn() {
    const e = {};
    return ko.forEach((b, F) => {
      b.type === "W" && (e[b.name] = F);
    }), e;
  }
  function bn() {
    const e = {};
    return ko.forEach((b, F) => {
      b.type === "HSS" && (e[b.name] = F);
    }), e;
  }
  function fl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: F, elementInputs: $, nodeInputs: J, deformOutputs: H } = e, U = b.length * 6, Y = F.length, q = F.filter((ie) => ie.length === 2).length, W = F.filter((ie) => ie.length >= 3).length, ye = document.createElement("div");
    ye.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${Y} (${q} frames, ${W} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${U}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((ie, oe) => {
      z += `<tr><td>${oe}</td><td>${nt(ie[0])}</td><td>${nt(ie[1])}</td><td>${nt(ie[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', F.forEach((ie, oe) => {
      var _a2, _b2, _c2, _d2;
      const N = ie.length === 2, D = ie.map((he) => b[he]), G = N ? Po(ho(D[1], D[0])) : 0, ce = ((_a2 = $.elasticities) == null ? void 0 : _a2.get(oe)) ?? 0, $e = ((_b2 = $.areas) == null ? void 0 : _b2.get(oe)) ?? 0, Te = ((_c2 = $.momentsOfInertiaZ) == null ? void 0 : _c2.get(oe)) ?? 0, Ve = ((_d2 = $.momentsOfInertiaY) == null ? void 0 : _d2.get(oe)) ?? 0;
      z += `<tr><td>${oe}</td><td>${N ? "Frame" : "Shell"}</td><td>${ie.join(" \u2192 ")}</td>`, z += `<td>${nt(G)}</td><td>${nt(ce)}</td><td>${nt($e)}</td><td>${nt(Te)}</td><td>${nt(Ve)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", q > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += ml(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ie = 0; ie < Y; ie++) {
      const oe = F[ie], N = oe.map((at) => b[at]);
      if (!(oe.length === 2)) continue;
      const G = Po(ho(N[1], N[0])), ce = ((_a = $.elasticities) == null ? void 0 : _a.get(ie)) ?? 0, $e = ((_b = $.areas) == null ? void 0 : _b.get(ie)) ?? 0, Te = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(ie)) ?? 0, Ve = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(ie)) ?? 0, he = ((_e = $.shearModuli) == null ? void 0 : _e.get(ie)) ?? 0, Be = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(ie)) ?? 0;
      let He = null, be = null, Ee = null;
      try {
        He = vn(N, $, ie), be = yn(N), Ee = no(ns(be), no(He, be));
      } catch {
        continue;
      }
      const ze = ho(N[1], N[0]), Je = ze[0] / G, st = ze[1] / G, Ue = ze[2] / G;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${ie}">\u25B6 Element ${ie} \u2014 Nodes ${oe[0]} \u2192 ${oe[1]}, L = ${nt(G)}</h3>`, z += `<div id="rpt-elem${ie}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${nt(ce)} &nbsp;&nbsp; A = ${nt($e)} &nbsp;&nbsp; I<sub>z</sub> = ${nt(Te)} &nbsp;&nbsp; I<sub>y</sub> = ${nt(Ve)} &nbsp;&nbsp; G = ${nt(he)} &nbsp;&nbsp; J = ${nt(Be)}<br/>`, z += `EA/L = ${nt(ce)}\xB7${nt($e)}/${nt(G)} = <b>${nt(ce * $e / G)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${nt(ce)}\xB7${nt(Te)}/${nt(G)}\xB3 = <b>${nt(12 * ce * Te / G ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${nt(ce)}\xB7${nt(Ve)}/${nt(G)}\xB3 = <b>${nt(12 * ce * Ve / G ** 3)}</b><br/>`, z += `GJ/L = ${nt(he)}\xB7${nt(Be)}/${nt(G)} = <b>${nt(he * Be / G)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${gn(Je)}, m = ${gn(st)}, n = ${gn(Ue)}, D = ${gn(Math.sqrt(Je ** 2 + st ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += Kn(He, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += Kn(be, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += Kn(Ee, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${oe[0]} \u2192 [${oe[0] * 6}..${oe[0] * 6 + 5}], node ${oe[1]} \u2192 [${oe[1] * 6}..${oe[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Y - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += bl(F, b.length), z += "<h2>5. Boundary Conditions</h2>";
    const Q = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Q) z += `<th>${ie}</th>`;
      z += "</tr></thead><tbody>", J.supports.forEach((ie, oe) => {
        z += `<tr><td>${oe}</td>`, ie.forEach((N, D) => {
          N && ve.push(oe * 6 + D), z += `<td class="${N ? "fixed" : ""}">${N ? "Fixed" : "Free"}</td>`;
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
      for (const oe of ie) z += `<th>${oe}</th>`;
      z += "</tr></thead><tbody>", J.loads.forEach((oe, N) => {
        z += `<tr><td>${N}</td>`, oe.forEach((D) => {
          const G = Math.abs(D) > 1e-10;
          z += `<td class="${G ? "nz" : ""}">${G ? nt(D) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Q) z += `<th>${ie}</th>`;
      z += "</tr></thead><tbody>", H.deformations.forEach((ie, oe) => {
        z += `<tr><td>${oe}</td>`, ie.forEach((N) => {
          const D = Math.abs(N) > 1e-10;
          z += `<td class="${D ? "nz" : ""}">${nt(N, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Q) z += `<th>${ie}</th>`;
      z += "</tr></thead><tbody>", H.reactions.forEach((ie, oe) => {
        z += `<tr><td>${oe}</td>`, ie.forEach((N) => {
          const D = Math.abs(N) > 1e-10;
          z += `<td class="${D ? "nz-react" : ""}">${D ? nt(N, 4) : "0"}</td>`;
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
      for (const oe of ie) z += `<th>${oe}<sub>i</sub></th>`;
      for (const oe of ie) z += `<th>${oe}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let oe = 0; oe < Y; oe++) {
        const N = F[oe];
        if (N.length !== 2) continue;
        const D = N.map((G) => b[G]);
        try {
          const G = vn(D, $, oe), ce = yn(D), $e = [];
          for (const he of N) {
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
          const Te = no(ce, $e), Ve = no(G, Te);
          z += `<tr><td>${oe}</td><td>${N.join("\u2192")}</td>`;
          for (let he = 0; he < 12; he++) {
            const Be = Math.abs(Ve[he]) > 1e-10;
            z += `<td class="${Be ? "nz" : ""}">${nt(Ve[he], 2)}</td>`;
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
        const oe = ie.dataset.toggle, N = ye.querySelector(`#rpt-${oe}`);
        if (N) {
          const D = N.style.display !== "none";
          N.style.display = D ? "none" : "", ie.textContent = ie.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), ye;
  }
  function nt(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function gn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Kn(e, b) {
    var _a;
    const F = Math.min(b, 12);
    let $ = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < F; J++) {
      $ += "<tr>";
      for (let H = 0; H < F; H++) {
        const U = ((_a = e[J]) == null ? void 0 : _a[H]) ?? 0, Y = Math.abs(U) < 1e-10;
        $ += `<td class="${Y ? "z" : ""} ${J === H && !Y ? "diag" : ""}">${Y ? "0" : ul(U)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", b > F && ($ += `<div style="color:#888;font-size:9pt">(showing ${F}\xD7${F} of ${b}\xD7${b})</div>`), $ += "</div>", $;
  }
  function ul(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ml() {
    const U = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (q) => 1 - 3 * q ** 2 + 2 * q ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (q) => q * (1 - q) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (q) => 3 * q ** 2 - 2 * q ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (q) => q ** 2 * (q - 1)
      }
    ];
    let Y = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    Y += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, Y += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', Y += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, Y += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, Y += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const q of U) {
      let W = "";
      for (let ve = 0; ve <= 80; ve++) {
        const me = ve / 80, ie = 30 + me * 540, oe = 180 / 2 - q.fn(me) * 60;
        W += (ve === 0 ? "M" : "L") + `${ie.toFixed(1)},${oe.toFixed(1)}`;
      }
      Y += `<path d="${W}" fill="none" stroke="${q.color}" stroke-width="2.5"/>`;
      const ye = 0.75, z = 30 + ye * 540 + 8, Q = 180 / 2 - q.fn(ye) * 60 - 6;
      Y += `<text x="${z}" y="${Q}" fill="${q.color}" font-size="11" font-weight="bold" font-family="sans-serif">${q.name}</text>`;
    }
    return Y += "</svg>", Y;
  }
  function bl(e, b) {
    const F = b * 6, $ = Math.min(F, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let U = 0; U < $; U++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
    J += "</tr>";
    const H = Array.from({
      length: $
    }, () => Array($).fill(0));
    for (let U = 0; U < e.length; U++) {
      const Y = e[U].map((q) => q * 6);
      for (const q of Y) for (const W of Y) for (let ye = 0; ye < 6; ye++) for (let z = 0; z < 6; z++) {
        const Q = q + ye, ve = W + z;
        Q < $ && ve < $ && H[Q][ve]++;
      }
    }
    for (let U = 0; U < $; U++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${U}</td>`;
      for (let Y = 0; Y < $; Y++) {
        const q = H[U][Y], W = q === 0 ? "#fff" : q === 1 ? "#e8f0fe" : q === 2 ? "#c6dcf5" : "#a0c4e8", ye = q === 0 ? "" : q.toString();
        J += `<td style="background:${W};color:#003366">${ye}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", F > $ && (J += `<div style="color:#888;font-size:9pt">(showing ${$}\xD7${$} of ${F}\xD7${F})</div>`), J;
  }
  let Zn = false;
  function gl(e) {
    if (Zn || window.katex) {
      Zn = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const F = document.createElement("script");
    F.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", F.onload = () => {
      Zn = true, e();
    }, document.head.appendChild(F);
  }
  function sa(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function hl(e, b, F, $, J, H) {
    var _a, _b, _c, _d, _e, _f;
    const U = F[e], Y = U.map((be) => b[be]), q = U.length === 2, W = q ? Po(ho(Y[1], Y[0])) : 0, ye = ((_a = $.elasticities) == null ? void 0 : _a.get(e)) ?? 0, z = ((_b = $.areas) == null ? void 0 : _b.get(e)) ?? 0, Q = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ve = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, me = ((_e = $.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ie = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let oe = null, N = null, D = null;
    try {
      oe = vn(Y, $, e), N = yn(Y), D = no(ns(N), no(oe, N));
    } catch {
    }
    const G = q ? ho(Y[1], Y[0]) : [
      0,
      0,
      0
    ], ce = W > 0 ? G[0] / W : 0, $e = W > 0 ? G[1] / W : 0, Te = W > 0 ? G[2] / W : 0, Ve = Math.sqrt(ce ** 2 + $e ** 2), he = [];
    if ((J == null ? void 0 : J.deformations) && q) for (const be of U) {
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
    if (he.length === 12 && N && oe) {
      try {
        Be = no(N, he);
      } catch {
        Be = Array(12).fill(0);
      }
      try {
        He = no(oe, Be);
      } catch {
        He = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: U,
      elmNodes: Y,
      isFrame: q,
      L: W,
      E: ye,
      A: z,
      Iz: Q,
      Iy: ve,
      G: me,
      J: ie,
      kLocal: oe,
      T: N,
      kGlobal: D,
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
  function xl(e, b, F, $, J, H) {
    var _a, _b;
    const U = hl(e, b, F, $, J, H), Y = document.createElement("div");
    return Y.className = "er-panel", Y.innerHTML = Ml + `
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
    <div class="er-body" id="er-body-tabla">${vl(U)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${aa(U)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${yl(U)}</div>
  `, Y.querySelectorAll(".er-tab").forEach((q) => {
      q.addEventListener("click", () => {
        Y.querySelectorAll(".er-tab").forEach((ye) => ye.classList.remove("active")), q.classList.add("active");
        const W = q.dataset.tab;
        Y.querySelectorAll(".er-body").forEach((ye) => ye.style.display = "none"), Y.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = Y.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => Y.remove()), (_b = Y.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const q = Y.classList.toggle("er-fullscreen-mode"), W = Y.querySelector("#er-fullscreen");
      W && (W.textContent = q ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const q = Y.querySelector("#er-sf-canvas");
      q && Qn(q);
      const W = Y.querySelector("#er-sf-canvas-math");
      W && Qn(W);
    }, 50), gl(() => {
      const q = Y.querySelector("#er-body-math");
      q && (q.innerHTML = aa(U)), setTimeout(() => {
        const W = Y.querySelector("#er-sf-canvas-math");
        W && Qn(W);
      }, 50), Y.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const ye = W.dataset.toggle, z = Y.querySelector(`#er-${ye}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), Y;
  }
  function vl(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ye(e.E)}</td><td>A</td><td>${Ye(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ye(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ye(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ye(e.G)}</td><td>J</td><td>${Ye(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += an(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += an(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += an(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const F = [
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
          b += `${F[J]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ye(H, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const $ of F) b += `<th>${$}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function aa(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const F = (ye) => sa(ye), $ = (ye) => sa(ye, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${$("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${F("\\text{Nodo } i")} = (${e.elmNodes[0].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${F("\\text{Nodo } j")} = (${e.elmNodes[1].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${$(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ye(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${$("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${$("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${F("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${$("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${F("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${$("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${$("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${$("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${$("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${F("I_z")})</div>`, b += `<div class="er-eq">${$("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${F("I_y")})</div>`, b += `<div class="er-eq">${$("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${$("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${$(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ye(e.E)} \\times ${Ye(e.A)} = \\mathbf{${Ye(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ye(e.E)} \\times ${Ye(e.Iz)} = \\mathbf{${Ye(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ye(e.E)} \\times ${Ye(e.Iy)} = \\mathbf{${Ye(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ye(e.G)} \\times ${Ye(e.J)} = \\mathbf{${Ye(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${F("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, U = e.E * e.Iy / e.L ** 3, Y = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${$("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${$("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${F("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${$("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.E)}\\times${Ye(e.A)}}{${Ye(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${$(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ye(J)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${F("v(\\xi)")}</p>`, b += `<div class="er-eq">${$("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${$("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${$("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${F("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${$("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${F("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${$("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ye(e.E)} \\times ${Ye(e.Iz)}}{${Ye(e.L)}^3} = \\mathbf{${Ye(12 * H)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${F("\\theta_x")} y ${F("GJ")}:</p>`, b += `<div class="er-eq">${$(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.G)}\\times${Ye(e.J)}}{${Ye(e.L)}} = \\mathbf{${Ye(Y)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${F("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${$("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${$(`\\frac{EA}{L} = \\mathbf{${Ye(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ye(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ye(12 * U)}}`)}</div>`, b += `<div class="er-eq">${$(`\\frac{GJ}{L} = \\mathbf{${Ye(Y)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ye(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ye(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${$(`\\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${F("\\mathbf{K}_{local}")} (12x12)</div>`, b += an(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${$(`l = \\frac{x_j - x_i}{L} = ${hn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${hn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${hn(e.n)}`)}</div>`, b += `<div class="er-eq">${$(`D = \\sqrt{l^2 + m^2} = ${hn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${F(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ye = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${$(ye)}</div>`;
    } else b += `<div class="er-eq">${$("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${$("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${F("\\mathbf{K}_{global}")} = ${F("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += an(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const q = e.elem[0] * 6, W = e.elem[1] * 6;
    if (b += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${q} \\ldots ${q + 5}]`)}</div>`, b += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, b += `<div class="er-eq">${$("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${$("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${$("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ye) => ye !== 0)) {
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
  function yl(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ye(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ye(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ye(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const $ of F) b += `<th>${$}</th>`;
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
    if (e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const $ of F) b += `<th>${$}</th>`;
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
  function hn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function an(e) {
    var _a;
    const b = e.length, F = Math.min(b, 12);
    let $ = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < F; J++) {
      $ += "<tr>";
      for (let H = 0; H < F; H++) {
        const U = ((_a = e[J]) == null ? void 0 : _a[H]) ?? 0, Y = Math.abs(U) < 1e-10;
        $ += `<td class="${Y ? "z" : ""} ${J === H && !Y ? "diag" : ""}">${Y ? "0" : $l(U)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", b > F && ($ += `<div style="color:var(--fem-label);font-size:9px">(${F}\xD7${F} de ${b}\xD7${b})</div>`), $ += "</div>", $;
  }
  function $l(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Qn(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const F = e.width, $ = e.height, J = 30, H = F - 2 * J, U = ($ - 3 * J) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, F, $);
    const Y = (q, W, ye) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(J, q, H, U), b.strokeStyle = "#444", b.beginPath(), b.moveTo(J, q + U / 2), b.lineTo(J + H, q + U / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(W, J + 4, q + 14);
      for (const Q of ye) {
        b.strokeStyle = Q.color, b.lineWidth = 2.5, b.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const me = ve / 100, ie = J + me * H, oe = q + U / 2 - Q.fn(me) * (U / 2 * 0.85);
          ve === 0 ? b.moveTo(ie, oe) : b.lineTo(ie, oe);
        }
        b.stroke();
      }
      let z = J + H - 90;
      for (const Q of ye) b.fillStyle = Q.color, b.font = "bold 10px sans-serif", b.fillText(Q.label, z, q + U - 6), z += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", J, q + U + 12), b.fillText("1", J + H - 6, q + U + 12), b.fillText("\u03BE", J + H / 2, q + U + 12);
    };
    Y(J, "Axial (lineal)", [
      {
        fn: (q) => 1 - q,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (q) => q,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), Y(J + U + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (q) => 1 - 3 * q * q + 2 * q * q * q,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (q) => q * (1 - q) * (1 - q),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (q) => 3 * q * q - 2 * q * q * q,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (q) => q * q * (q - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Ml = `<style>
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
  let Mn = false, Oo = null, lo = null, Bt = null, kt = null;
  function wl() {
    kt = document.createElement("button"), kt.id = "help-tour-btn", kt.innerHTML = "?", kt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const b = ($) => {
      kt.style.cssText = $ ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), kt.addEventListener("contextmenu", ($) => {
      $.preventDefault(), e = !e, b(e), kt.innerHTML = "?";
    }), kt.addEventListener("mouseenter", () => {
      kt.style.transform = "scale(1.15)", kt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), kt.addEventListener("mouseleave", () => {
      kt.style.transform = "scale(1)", kt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), kt.addEventListener("click", () => {
      Mn ? ss() : El();
    });
    const F = document.createElement("style");
    return F.textContent = `
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
  `, document.head.appendChild(F), kt;
  }
  function El() {
    Mn = true, kt && (kt.innerHTML = "\u2715", kt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", kt.style.animation = "none"), Oo = document.createElement("div"), Oo.id = "tour-overlay", Oo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Oo), Uo(0);
  }
  function ss() {
    Mn = false, kt && (kt.innerHTML = "?", kt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", kt.style.animation = "helpPulse 2s infinite"), lo && (lo.remove(), lo = null), Bt && (Bt.remove(), Bt = null), Oo && (Oo.remove(), Oo = null);
  }
  function Uo(e) {
    var _a, _b;
    if (e >= nn.length) {
      Sl();
      return;
    }
    const b = nn[e], F = document.querySelector(b.selector);
    if (!F) {
      Uo(e + 1);
      return;
    }
    F.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), lo && lo.remove(), Bt && Bt.remove();
    const $ = F.getBoundingClientRect(), J = window.innerWidth, H = window.innerHeight, U = 320, Y = 180;
    lo = document.createElement("div"), lo.style.cssText = `
    position: fixed;
    left: ${$.left - 6}px; top: ${$.top - 6}px;
    width: ${$.width + 12}px; height: ${$.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(lo);
    const q = J - $.right, W = $.left, ye = H - $.bottom, z = $.top;
    let Q = b.position || "bottom";
    Q === "bottom" && ye < Y + 20 && (Q = "top"), Q === "top" && z < Y + 20 && (Q = "right"), Q === "right" && q < U + 20 && (Q = "left"), Q === "left" && W < U + 20 && (Q = "bottom");
    let ve, me, ie = "";
    switch (Q) {
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
      ${nn.map((N, D) => `<div style="width:${D === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${D === e ? "#0099ff" : D < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Bt), (_a = Bt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Uo(e + 1);
    }), (_b = Bt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Uo(e - 1);
    });
    const oe = (N) => {
      if (!Mn) {
        document.removeEventListener("keydown", oe);
        return;
      }
      (N.key === "ArrowRight" || N.key === "Enter") && (Uo(e + 1), document.removeEventListener("keydown", oe)), N.key === "ArrowLeft" && (Uo(Math.max(0, e - 1)), document.removeEventListener("keydown", oe)), N.key === "Escape" && (ss(), document.removeEventListener("keydown", oe));
    };
    document.addEventListener("keydown", oe);
  }
  function Sl() {
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
  function Il(e) {
    var _a;
    const b = e.split(/\r?\n/), F = {
      force: "TONF",
      length: "M"
    }, $ = [], J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], q = [], W = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = [], Q = [];
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
        xe && (F.force = xe[1], F.length = xe[2]);
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
        xe && Q.push({
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
          q.push({
            name: xe[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const oe = /* @__PURE__ */ new Map();
    if ($.length > 0) {
      const Le = $.length - 1;
      oe.set($[Le].name, $[Le].elev);
      for (let qe = Le - 1; qe >= 0; qe--) {
        const Ce = oe.get($[qe + 1].name) + $[qe].height;
        $[qe].elev = Ce, oe.set($[qe].name, Ce);
      }
    }
    const N = [], D = [], G = /* @__PURE__ */ new Map(), ce = (Le, qe) => `${Le}@${qe}`, $e = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
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
      const [qe, xe] = Le.split("@"), Ce = U.get(qe), ge = oe.get(xe);
      Ce === void 0 || ge === void 0 || (N.push([
        Ce[0],
        Ce[1],
        ge
      ]), D.push(Le), G.set(Le, N.length - 1));
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
    const Ee = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map();
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
      xe.modI2 && (We *= xe.modI2), xe.modI3 && (mt *= xe.modI3), Je.set(Le, it), yt.set(Le, mt), Tt.set(Le, We), Ft.set(Le, Xe), pt > 0 && st.set(Le, pt), lt > 0 && Ue.set(Le, lt), gt.set(Le, {
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
    const ro = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
    for (let Le = 0; Le < he.length; Le++) Ne.set(`${he[Le]}@${He[Le]}`, Le);
    for (const Le of z) {
      const qe = Ne.get(`${Le.line}@${Le.story}`);
      if (qe === void 0) continue;
      const [xe, Ce] = Ve[qe], ge = N[xe], ke = N[Ce], Ge = Math.sqrt((ke[0] - ge[0]) ** 2 + (ke[1] - ge[1]) ** 2 + (ke[2] - ge[2]) ** 2);
      if (Ge < 1e-10) continue;
      const _e = Le.val * Ge / 2;
      let it = 0, mt = 0, We = 0;
      Le.dir === "GRAV" || Le.dir === "GRAVITY" ? We = -_e : Le.dir === "X" ? it = _e : Le.dir === "Y" ? mt = _e : Le.dir === "Z" && (We = -_e);
      for (const Xe of [
        xe,
        Ce
      ]) {
        const pt = ro.get(Xe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        pt[0] += it, pt[1] += mt, pt[2] += We, ro.set(Xe, pt);
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
      units: F,
      stories: $.reverse(),
      materials: J,
      frameSections: H,
      nodes: N,
      nodeNames: D,
      nodeNameToIdx: G,
      elements: Ve,
      elementNames: he,
      elementTypes: Be,
      elementStories: He,
      elementSections: be,
      nodeInputs: {
        supports: ut,
        loads: ro
      },
      elementInputs: {
        elasticities: Ee,
        shearModuli: ze,
        areas: Je,
        momentsOfInertiaZ: yt,
        momentsOfInertiaY: Tt,
        torsionalConstants: Ft,
        shearAreasY: st,
        shearAreasZ: Ue,
        rigidOffsets: at,
        momentReleases: dt,
        densities: xt,
        sectionShapes: gt
      },
      sectionShapes: gt,
      grids: Q,
      info: {
        nNodes: N.length,
        nFrames: Ve.length,
        nAreas: q.length,
        title: ve
      },
      rawSections: ie
    };
  }
  function tt(e) {
    return e && parseFloat(e) || 0;
  }
  function ca(e) {
    const b = /* @__PURE__ */ new Map(), F = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let $;
    for (; ($ = F.exec(e)) !== null; ) b.set($[1], $[2] !== void 0 ? $[2] : $[3]);
    return b;
  }
  function kl(e) {
    const b = e.split(/\r?\n/);
    return b.some(($) => $.trim().startsWith("TABLE:")) ? Tl(b) : zl(b);
  }
  function Tl(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let F = "";
    for (const oe of e) {
      const N = oe.trimEnd();
      N.endsWith("_") ? F += N.slice(0, -1) + " " : (F += N, b.push(F), F = "");
    }
    F && b.push(F);
    const $ = {
      force: "KN",
      length: "m"
    };
    let J = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = [], ye = [], z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), me = [];
    let ie = "";
    for (const oe of b) {
      const N = oe.trim();
      if (!N || N.startsWith(";") || N.startsWith("File ")) continue;
      if (N.startsWith("TABLE:")) {
        const G = N.match(/TABLE:\s+"(.+?)"/);
        ie = G ? G[1].toUpperCase() : "";
        continue;
      }
      if (N === "END TABLE DATA") {
        ie = "";
        continue;
      }
      const D = ca(N);
      switch (ie) {
        case "PROGRAM CONTROL": {
          const G = D.get("CurrUnits");
          if (G) {
            const ce = G.split(",").map(($e) => $e.trim());
            ce[0] && ($.force = ce[0]), ce[1] && ($.length = ce[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const G = D.get("Material");
          G && !H.has(G) && H.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const G = D.get("Material");
          if (G) {
            const ce = H.get(G) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ce.E = tt(D.get("E1")), ce.G = tt(D.get("G12")), ce.nu = tt(D.get("U12")), ce.density = tt(D.get("UnitMass")), H.set(G, ce);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const G = D.get("Material");
          G && H.has(G) && (H.get(G).fy = tt(D.get("Fy")));
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
            const ce = tt(D.get("XorR")), $e = tt(D.get("Y")), Te = tt(D.get("Z"));
            q.set(G, [
              ce,
              $e,
              Te
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const G = D.get("Frame"), ce = D.get("JointI"), $e = D.get("JointJ");
          G && ce && $e && W.push({
            name: G,
            j1: ce,
            j2: $e
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const G = D.get("Area");
          if (G) {
            const ce = parseInt(D.get("NumJoints") || "4"), $e = [];
            for (let Te = 1; Te <= ce; Te++) {
              const Ve = D.get(`Joint${Te}`);
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
          const G = D.get("Joint");
          if (G) {
            const ce = [
              ((_a = D.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = D.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = D.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = D.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = D.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = D.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            z.set(G, ce);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const G = D.get("Frame"), ce = D.get("AnalSect");
          G && ce && Q.set(G, ce);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const G = D.get("Area"), ce = D.get("Section");
          G && ce && ve.set(G, ce);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const G = D.get("Joint");
          G && me.push({
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
    return da($, J, H, U, Y, q, W, ye, z, Q, ve, me);
  }
  function zl(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let F = "UX,UY,UZ,RX,RY,RZ";
    const $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = [], q = [], W = /* @__PURE__ */ new Map(), ye = [];
    let z = "", Q = "";
    for (const ie of e) {
      const oe = ie.trim();
      if (!oe || oe.startsWith(";")) continue;
      if (!ie.startsWith(" ") && !ie.startsWith("	")) {
        const G = oe.toUpperCase();
        if (G === "END") break;
        G.startsWith("SHELL SECTION") ? z = "SHELL SECTION" : G.startsWith("FRAME SECTION") ? z = "FRAME SECTION" : z = G.split(/\s+/)[0];
        continue;
      }
      const N = ca(oe), D = oe.split(/\s+/);
      switch (z) {
        case "SYSTEM": {
          const G = N.get("DOF");
          G && (F = G);
          const ce = N.get("LENGTH");
          ce && (b.length = ce);
          const $e = N.get("FORCE");
          $e && (b.force = $e);
          break;
        }
        case "JOINT": {
          const G = D[0];
          U.set(G, [
            tt(N.get("X")),
            tt(N.get("Y")),
            tt(N.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const G = N.get("ADD"), ce = N.get("DOF");
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
          const G = N.get("NAME");
          if (G) Q = G, $.set(G, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (Q) {
            const ce = $.get(Q), $e = N.get("E");
            $e && (ce.E = tt($e));
            const Te = N.get("U");
            Te && (ce.nu = tt(Te)), ce.G = ce.E / (2 * (1 + ce.nu));
            const Ve = N.get("M");
            Ve && (ce.density = tt(Ve));
          }
          break;
        }
        case "SHELL": {
          const G = D[0], ce = N.get("J");
          N.get("SEC"), ce && q.push({
            name: G,
            joints: ce.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const G = N.get("NAME");
          G && H.set(G, {
            material: N.get("MAT") || "",
            type: N.get("TYPE") || "Shell",
            thickness: tt(N.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const G = D[0], ce = N.get("J");
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
          const G = N.get("ADD");
          G && ye.push({
            joint: G,
            fx: tt(N.get("UX")),
            fy: tt(N.get("UY")),
            fz: tt(N.get("UZ")),
            mx: tt(N.get("MX")),
            my: tt(N.get("MY")),
            mz: tt(N.get("MZ"))
          });
          break;
        }
      }
    }
    return da(b, F, $, J, H, U, Y, q, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ye);
  }
  function da(e, b, F, $, J, H, U, Y, q, W, ye, z) {
    var _a;
    const Q = [], ve = /* @__PURE__ */ new Map(), me = [];
    for (const [he, Be] of H) ve.set(he, me.length), Q.push(he), me.push(Be);
    const ie = [], oe = [], N = /* @__PURE__ */ new Map();
    for (const he of U) {
      const Be = ve.get(he.j1), He = ve.get(he.j2);
      if (Be !== void 0 && He !== void 0) {
        const be = ie.length;
        ie.push([
          Be,
          He
        ]), oe.push(he.name);
        const Ee = W.get(he.name);
        Ee && N.set(be, Ee);
      }
    }
    const D = ie.length;
    for (const he of Y) {
      const Be = he.joints.map((He) => ve.get(He)).filter((He) => He !== void 0);
      if (Be.length >= 3) {
        const He = ie.length;
        ie.push(Be), oe.push(he.name);
        const be = ye.get(he.name);
        be && N.set(He, be);
      }
    }
    const G = ie.length - D, ce = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, $e = /* @__PURE__ */ new Map(), Te = F.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let he = 0; he < ie.length; he++) {
      const Be = N.get(he), He = Be ? $.get(Be) : null, be = Be ? J.get(Be) : null;
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
        }, ze = F.get(Ee.material) || Te, Je = ze.E || Te.E, st = ze.nu || 0.3, Ue = ze.G || Je / (2 * (1 + st));
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
        const Ee = F.get(be.material) || Te, ze = Ee.E || Te.E, Je = Ee.nu || 0.2, st = Ee.G || ze / (2 * (1 + Je));
        ce.elasticities.set(he, ze), ce.shearModuli.set(he, st), ce.thicknesses.set(he, be.thickness), ce.poissonsRatios.set(he, Je), ce.densities.set(he, Ee.density || 0);
      }
    }
    const Ve = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [he, Be] of q) {
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
      materials: F,
      frameSections: $,
      shellSections: J,
      nodes: me,
      nodeNames: Q,
      nodeNameToIdx: ve,
      elements: ie,
      elementNames: oe,
      elementSections: N,
      nodeInputs: Ve,
      elementInputs: ce,
      sectionShapes: $e,
      info: {
        nNodes: me.length,
        nFrames: D,
        nShells: G,
        title: `SAP2000 (${D} frames, ${G} shells)`
      }
    };
  }
  function Al(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: J } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, U = e.title || "Awatif Model", Y = [], q = (N) => Y.push(N), W = () => Y.push(" ");
    q(`File ${U}.$2k was saved on m/d/yy at h:mm:ss`), W(), q('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), q("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
    const ye = [], z = [];
    if (F.forEach((N, D) => {
      N.length === 2 ? ye.push(D) : z.push(D);
    }), ye.length > 0) {
      q('TABLE:  "CONNECTIVITY - FRAME"');
      for (const N of ye) {
        const D = F[N];
        q(`   Frame=${N + 1}   JointI=${D[0] + 1}   JointJ=${D[1] + 1}   IsCurved=No`);
      }
      W();
    }
    if (z.length > 0) {
      q('TABLE:  "CONNECTIVITY - AREA"');
      for (const N of z) {
        const D = F[N], G = D.map((ce, $e) => `Joint${$e + 1}=${ce + 1}`).join("   ");
        q(`   Area=${N + 1}   NumJoints=${D.length}   ${G}`);
      }
      W();
    }
    q('TABLE:  "COORDINATE SYSTEMS"'), q("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), W(), q('TABLE:  "DATABASE FORMAT TYPES"'), q("   UnitsCurr=Yes   OverrideE=No"), W();
    const Q = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
    for (const N of ye) {
      const D = ((_a = J.areas) == null ? void 0 : _a.get(N)) || 0, G = ((_b = J.momentsOfInertiaZ) == null ? void 0 : _b.get(N)) || 0, ce = ((_c = J.momentsOfInertiaY) == null ? void 0 : _c.get(N)) || 0, $e = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(N)) || 0, Te = ((_e = J.elasticities) == null ? void 0 : _e.get(N)) || 0, Ve = `MAT_${Math.round(Te)}`, he = `A${D.toPrecision(6)}_Iz${G.toPrecision(6)}`;
      if (!Q.has(he)) {
        let He = 0.3, be = 0.3;
        D > 0 && G > 0 && (He = Math.sqrt(12 * G / D), be = D / He), Q.set(he, {
          A: D,
          Iz: G,
          Iy: ce,
          J: $e,
          b: be,
          h: He,
          matKey: Ve
        });
      }
      const Be = [
        ...Q.keys()
      ].indexOf(he) + 1;
      ve.set(N, `SEC${Be}`);
    }
    if (ye.length > 0) {
      q('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const N of ye) {
        const D = ve.get(N) || "SEC1";
        q(`   Frame=${N + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      W();
    }
    if (Q.size > 0) {
      q('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let N = 0;
      for (const [, D] of Q) {
        N++;
        const G = D.A * 5 / 6;
        q(`   SectionName=SEC${N}   Material=${D.matKey}   Shape=Rectangular   t3=${St(D.h)}   t2=${St(D.b)}   Area=${St(D.A)}   TorsConst=${St(D.J)}   I33=${St(D.Iz)}   I22=${St(D.Iy)}   I23=0   AS2=${St(G)}   AS3=${St(G)} _`), q("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const me = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const N of z) {
      const D = ((_f = J.thicknesses) == null ? void 0 : _f.get(N)) || 0.1, G = ((_g = J.elasticities) == null ? void 0 : _g.get(N)) || 0, ce = `MAT_${Math.round(G)}`, $e = `t${D.toPrecision(6)}`;
      me.has($e) || me.set($e, {
        t: D,
        matKey: ce
      });
      const Te = [
        ...me.keys()
      ].indexOf($e) + 1;
      ie.set(N, `SSEC${Te}`);
    }
    if (z.length > 0) {
      q('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of z) {
        const G = ie.get(D) || "SSEC1";
        q(`   Area=${D + 1}   Section=${G}   MatProp=Default`);
      }
      W(), q('TABLE:  "AREA SECTION PROPERTIES"');
      let N = 0;
      for (const [, D] of me) N++, q(`   Section=SSEC${N}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${St(D.t)}   BendThick=${St(D.t)}   Color=Cyan`);
      W();
    }
    q('TABLE:  "JOINT COORDINATES"');
    for (let N = 0; N < b.length; N++) {
      const D = b[N];
      q(`   Joint=${N + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${St(D[0])}   Y=${St(D[1])}   Z=${St(D[2])}   SpecialJt=No`);
    }
    if (W(), $.supports && $.supports.size > 0) {
      q('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [N, D] of $.supports) {
        if (!D.some((ce) => ce)) continue;
        const G = (ce) => ce ? "Yes" : "No";
        q(`   Joint=${N + 1}   U1=${G(D[0])}   U2=${G(D[1])}   U3=${G(D[2])}   R1=${G(D[3])}   R2=${G(D[4])}   R3=${G(D[5])}`);
      }
      W();
    }
    if (q('TABLE:  "LOAD PATTERN DEFINITIONS"'), q("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), W(), q('TABLE:  "LOAD CASE DEFINITIONS"'), q('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), W(), q('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), q('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), W(), $.forces && $.forces.size > 0) {
      q('TABLE:  "JOINT LOADS - FORCE"');
      for (const [N, D] of $.forces) D.some((G) => Math.abs(G) > 1e-12) && q(`   Joint=${N + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${St(D[0])}   F2=${St(D[1])}   F3=${St(D[2])}   M1=${St(D[3])}   M2=${St(D[4])}   M3=${St(D[5])}`);
      W();
    }
    const oe = /* @__PURE__ */ new Map();
    for (let N = 0; N < F.length; N++) {
      const D = ((_h = J.elasticities) == null ? void 0 : _h.get(N)) || 0, G = ((_i = J.shearModuli) == null ? void 0 : _i.get(N)) || 0, ce = D > 0 && G > 0 ? Math.max(0, Math.min(0.5, D / (2 * G) - 1)) : 0.2, $e = ((_j = J.densities) == null ? void 0 : _j.get(N)) || 0, Te = `MAT_${Math.round(D)}`;
      oe.has(Te) || oe.set(Te, {
        E: D,
        nu: ce,
        G,
        rho: $e
      });
    }
    q('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [N] of oe) q(`   Material=${N}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    W(), q('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [N, D] of oe) q(`   Material=${N}   UnitWeight=${St(D.rho * 9.81)}   UnitMass=${St(D.rho)}   E1=${St(D.E)}   G12=${St(D.G)}   U12=${St(D.nu)}   A1=9.9E-06`);
    W(), q('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [N] of oe) q(`   Material=${N}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), q('TABLE:  "PROGRAM CONTROL"'), q(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), q("END TABLE DATA"), q(""), Y.join(`\r
`);
  }
  function St(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Ll(e) {
    const { e2kModel: b } = e, F = b == null ? void 0 : b.rawSections;
    return F && F.size > 0 ? Cl(F) : Fl(e);
  }
  function Cl(e, b) {
    const F = [], $ = [
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
    F.push("$ File exported from Awatif FEM Studio (round-trip)"), F.push("");
    for (const J of $) {
      const H = e.get(J);
      if (!(!H || H.length === 0)) {
        F.push(`$ ${J}`);
        for (const U of H) F.push(U);
        F.push("");
      }
    }
    for (const [J, H] of e) if (!$.includes(J) && H.length !== 0) {
      F.push(`$ ${J}`);
      for (const U of H) F.push(U);
      F.push("");
    }
    return F.push("  END"), F.push("$ END OF MODEL FILE"), F.join(`\r
`);
  }
  function Fl(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: J, title: H, units: U } = e, Y = (U == null ? void 0 : U.force) || "TONF", q = (U == null ? void 0 : U.length) || "M", W = [], ye = (be) => Math.round(be * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${Y}"  "${q}"  "C"  `), H && W.push(`  TITLE2  "${H}"  `), W.push("");
    const z = /* @__PURE__ */ new Set();
    b.forEach((be) => z.add(ye(be[1])));
    const Q = [
      ...z
    ].sort((be, Ee) => be - Ee), ve = [], me = /* @__PURE__ */ new Map();
    ve.push("Base"), me.set(Q[0], "Base");
    for (let be = 1; be < Q.length; be++) {
      const Ee = `Level_${be}`;
      ve.push(Ee), me.set(Q[be], Ee);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = Q.length - 1; be >= 1; be--) W.push(`  STORY "${ve[be]}"  HEIGHT ${ye(Q[be] - Q[be - 1])} MASTERSTORY "Yes"  `);
    Q.length > 0 && W.push(`  STORY "Base"  ELEV ${Q[0]} `), W.push(""), F.some((be) => be.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const oe = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((be) => oe.add(be));
    const N = /* @__PURE__ */ new Map();
    let D = 0;
    for (const be of oe) {
      const Ee = `Mat_${++D}`;
      N.set(be, Ee), W.push(`  MATERIAL  "${Ee}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Ee}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const G = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    F.forEach((be, Ee) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const ze = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(Ee), Je = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Ee)) ?? 0, st = N.get(Je) || "Mat_1", Ue = (ze == null ? void 0 : ze.h) ?? 0, at = (ze == null ? void 0 : ze.b) ?? 0, dt = (ze == null ? void 0 : ze.d) ?? 0, yt = (ze == null ? void 0 : ze.tf) ?? 0, Tt = (ze == null ? void 0 : ze.tw) ?? 0, Ft = (ze == null ? void 0 : ze.type) || "rect", gt = `${Ft}_${Ue}_${at}_${dt}_${yt}_${Tt}`;
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
      Ue && (xt += `  D ${Ue}`), at && (xt += `  B ${at}`), dt && !Ue && (xt += `  D ${dt}`), yt && (xt += `  TF ${yt}`), Tt && (xt += `  TW ${Tt}`), W.push(xt);
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
    F.forEach((be, Ee) => {
      if (be.length !== 2) return;
      const ze = Rl(b, be), Je = ce.get(Ee) || `Sec_${Ee}`;
      if (ze === "BEAM") {
        const st = he(be[0]), Ue = he(be[1]);
        W.push(`  LINE  "E${Ee + 1}"  BEAM  "${st.pt}"  "${Ue.pt}"  0`), Be.push(`  LINEASSIGN  "E${Ee + 1}"  "${st.story}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const st = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ue = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        he(st);
        const at = he(Ue), dt = ye(b[st][1]), yt = ye(b[Ue][1]), Tt = Q.indexOf(dt), Ft = Q.indexOf(yt), gt = Math.max(1, Ft >= 0 && Tt >= 0 ? Ft - Tt : 1);
        W.push(`  LINE  "E${Ee + 1}"  ${ze}  "${at.pt}"  "${at.pt}"  ${gt}`);
        for (let ut = 0; ut < gt; ut++) {
          const ro = Ft - ut;
          ro >= 0 && ro < ve.length && Be.push(`  LINEASSIGN  "E${Ee + 1}"  "${ve[ro]}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
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
    if (F.forEach((be, Ee) => {
      if (be.length === 4) {
        const ze = b[be[0]], Je = b[be[1]], st = b[be[2]], Ue = [
          Je[0] - ze[0],
          Je[1] - ze[1],
          Je[2] - ze[2]
        ], at = [
          st[0] - ze[0],
          st[1] - ze[1],
          st[2] - ze[2]
        ], dt = Math.abs(Ue[2] * at[0] - Ue[0] * at[2]), yt = Math.sqrt((Ue[1] * at[2] - Ue[2] * at[1]) ** 2 + dt ** 2 + (Ue[0] * at[1] - Ue[1] * at[0]) ** 2), Tt = yt > 1e-10 && dt / yt < 0.5;
        He.push({
          idx: Ee,
          el: be,
          isWall: Tt
        });
      }
    }), He.some((be) => !be.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const be = ((_c = J.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${N.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), W.push("");
    }
    if (He.some((be) => be.isWall)) {
      W.push("$ WALL PROPERTIES");
      const be = ((_d = J.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${N.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), W.push("");
    }
    if (He.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const be = [];
      He.forEach((Ee, ze) => {
        const { el: Je, isWall: st } = Ee, Ue = st ? `W${ze + 1}` : `F${ze + 1}`, at = st ? "PANEL" : "FLOOR", dt = Je.map((yt) => he(yt));
        if (st) {
          const yt = b[Je[0]][1] <= b[Je[2]][1] ? 0 : 2, Tt = b[Je[1]][1] <= b[Je[3]][1] ? 1 : 3;
          W.push(`  AREA "${Ue}"  ${at}  4  "${dt[yt].pt}"  "${dt[Tt].pt}"  "${dt[Tt].pt}"  "${dt[yt].pt}"  1  1  0  0  `);
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
    const F = e[b[0]], $ = e[b[1]], J = Math.abs($[1] - F[1]), H = Math.sqrt(($[0] - F[0]) ** 2 + ($[2] - F[2]) ** 2), U = J > H * 0.5;
    return U && H > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
  }
  function Pl(e) {
    var _a, _b;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: J } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${F.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), b.forEach((U, Y) => {
      H.push(`ops.node(${Y + 1}, ${U[0]}, ${U[1]}, ${U[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((U, Y) => {
      const q = U.map((W) => W ? 1 : 0).join(", ");
      H.push(`ops.fix(${Y + 1}, ${q})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), F.forEach((U, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (U.length !== 2) return;
      const q = b[U[0]], W = b[U[1]], z = Math.abs(W[2] - q[2]) > Math.max(Math.abs(W[0] - q[0]), Math.abs(W[1] - q[1])) ? 2 : 1, Q = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, ve = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, me = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ie = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, oe = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, N = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${Y + 1}, ${U[0] + 1}, ${U[1] + 1}, ${Q}, ${ve}, ${me}, ${ie}, ${oe}, ${N}, ${z})`);
    }), H.push(""), $.loads && $.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), $.loads.forEach((U, Y) => {
      const q = U.map((W) => W).join(", ");
      H.push(`ops.load(${Y + 1}, ${q})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), b.forEach((U, Y) => {
      H.push(`print(f"Node {${Y + 1}}: {ops.nodeDisp(${Y + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = $.supports) == null ? void 0 : _b.forEach((U, Y) => {
      H.push(`print(f"Node {${Y + 1}}: {ops.nodeReaction(${Y + 1})}")`);
    }), H.join(`
`);
  }
  function Ol(e) {
    var _a, _b;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: J } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${F.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), b.forEach((U, Y) => {
      H.push(`node ${Y + 1} ${U[0]} ${U[1]} ${U[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((U, Y) => {
      const q = U.map((W) => W ? 1 : 0).join(" ");
      H.push(`fix ${Y + 1} ${q}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), F.forEach((U, Y) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (U.length !== 2) return;
      const q = b[U[0]], W = b[U[1]], z = Math.abs(W[2] - q[2]) > Math.max(Math.abs(W[0] - q[0]), Math.abs(W[1] - q[1])) ? 2 : 1, Q = ((_a2 = J.areas) == null ? void 0 : _a2.get(Y)) ?? 1, ve = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Y)) ?? 2e5, me = ((_c = J.shearModuli) == null ? void 0 : _c.get(Y)) ?? 8e4, ie = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(Y)) ?? 1, oe = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(Y)) ?? 1, N = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(Y)) ?? 1;
      H.push(`element elasticBeamColumn ${Y + 1} ${U[0] + 1} ${U[1] + 1} ${Q} ${ve} ${me} ${ie} ${oe} ${N} ${z}`);
    }), H.push(""), $.loads && $.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), $.loads.forEach((U, Y) => {
      const q = U.map((W) => W).join(" ");
      H.push(`  load ${Y + 1} ${q}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), b.forEach((U, Y) => {
      H.push(`puts "Node ${Y + 1}: [nodeDisp ${Y + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = $.supports) == null ? void 0 : _b.forEach((U, Y) => {
      H.push(`puts "Node ${Y + 1}: [nodeReaction ${Y + 1}]"`);
    }), H.join(`
`);
  }
  function Nl(e) {
    const b = [], F = [], $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
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
      const oe = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (oe) {
        const G = parseInt(oe[1]), ce = z.get(G);
        ce !== void 0 && $.set(ce, [
          oe[2] === "1",
          oe[3] === "1",
          oe[4] === "1",
          oe[5] === "1",
          oe[6] === "1",
          oe[7] === "1"
        ]);
        continue;
      }
      const N = me.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (N) {
        const G = parseInt(N[1]), ce = z.get(parseInt(N[2])), $e = z.get(parseInt(N[3]));
        if (ce !== void 0 && $e !== void 0) {
          const Te = F.length;
          F.push([
            ce,
            $e
          ]), Q.set(G, Te), Y.set(Te, parseFloat(N[4])), H.set(Te, parseFloat(N[5])), U.set(Te, parseFloat(N[6])), ye.set(Te, parseFloat(N[7])), q.set(Te, parseFloat(N[8])), W.set(Te, parseFloat(N[9]));
        }
        continue;
      }
      const D = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (D) {
        const G = z.get(parseInt(D[1]));
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
      elements: F,
      nodeInputs: {
        supports: $,
        loads: J
      },
      elementInputs: {
        elasticities: H,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: q,
        momentsOfInertiaZ: W,
        torsionalConstants: ye
      }
    };
  }
  function ql(e) {
    const b = [], F = [], $ = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const Q of e.split(/\r?\n/)) {
      const ve = Q.trim();
      if (ve.startsWith("#") || ve.startsWith("//")) continue;
      const me = ve.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const ie = parseInt(me[1]), oe = b.length;
        b.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), z.set(ie, oe);
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
        const ie = z.get(parseInt(me[3])), oe = z.get(parseInt(me[4]));
        if (ie !== void 0 && oe !== void 0) {
          const N = F.length;
          F.push([
            ie,
            oe
          ]), Y.set(N, parseFloat(me[5])), H.set(N, parseFloat(me[6])), U.set(N, parseFloat(me[7])), ye.set(N, parseFloat(me[8])), q.set(N, parseFloat(me[9])), W.set(N, parseFloat(me[10]));
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
      elements: F,
      nodeInputs: {
        supports: $,
        loads: J
      },
      elementInputs: {
        elasticities: H,
        shearModuli: U,
        areas: Y,
        momentsOfInertiaY: q,
        momentsOfInertiaZ: W,
        torsionalConstants: ye
      }
    };
  }
  function Ut(e) {
    const b = [];
    let F = 0, $ = false, J = "";
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
        F++, J += U;
        continue;
      }
      if (U === ")") {
        F--, J += U;
        continue;
      }
      if (U === "," && F === 0) {
        b.push(J.trim()), J = "";
        continue;
      }
      J += U;
    }
    return J.trim() && b.push(J.trim()), b;
  }
  function pa(e, b) {
    const F = Ut(e);
    if (b < F.length) {
      let $ = F[b].trim();
      return $.startsWith("'") && $.endsWith("'") && ($ = $.slice(1, -1)), $ === "$" ? null : $;
    }
    return null;
  }
  function _l(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, F = {}, $ = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (b.schema = J[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let U;
    for (; (U = H.exec(e)) !== null; ) {
      const Y = parseInt(U[1]), q = U[2].toUpperCase();
      F[Y] = {
        id: Y,
        type: q,
        args: U[3]
      }, $[q] || ($[q] = []), $[q].push(Y);
    }
    if ($.IFCPROJECT) {
      const Y = F[$.IFCPROJECT[0]];
      if (Y) {
        const q = pa(Y.args, 2);
        q && (b.project = q);
      }
    }
    return {
      meta: b,
      entities: F,
      typeIndex: $
    };
  }
  function Wt(e, b) {
    const F = b.match(/#(\d+)/);
    return F && e[parseInt(F[1])] || null;
  }
  function fa(e, b) {
    const F = Ut(b.args), $ = Wt(e, F[0]), J = $ ? Dl(e, $) : [
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
    if (F[1] && F[1] !== "$") {
      const Y = Wt(e, F[1]);
      Y && (H = la(e, Y));
    }
    if (F[2] && F[2] !== "$") {
      const Y = Wt(e, F[2]);
      Y && (U = la(e, Y));
    }
    return {
      origin: J,
      dirZ: H,
      dirX: U
    };
  }
  function Dl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function la(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function ua(e, b) {
    const F = Ut(b.args), $ = Wt(e, F[1]);
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
    if ($ && (J = fa(e, $)), F[0] && F[0] !== "$") {
      const H = Wt(e, F[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const U = ua(e, H), Y = ts(J.origin, U.dirX, es(U.dirZ, U.dirX), U.dirZ);
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
  function ts(e, b, F, $) {
    return [
      e[0] * b[0] + e[1] * F[0] + e[2] * $[0],
      e[0] * b[1] + e[1] * F[1] + e[2] * $[1],
      e[0] * b[2] + e[1] * F[2] + e[2] * $[2]
    ];
  }
  const Bl = 0.01;
  function Hl(e) {
    const b = _l(e), { entities: F, typeIndex: $ } = b, J = [], H = [], U = /* @__PURE__ */ new Map();
    U.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), U.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let Y = 0, q = 0;
    function W(oe, N, D) {
      for (const G of J) {
        const ce = G.x - oe, $e = G.y - N, Te = G.z - D;
        if (Math.sqrt(ce * ce + $e * $e + Te * Te) < Bl) return G.id;
      }
      return J.push({
        id: Y,
        x: oe,
        y: N,
        z: D
      }), Y++;
    }
    function ye(oe) {
      const N = pa(oe.args, 2) || "", D = $.IFCRELASSOCIATESMATERIAL || [];
      for (const ce of D) {
        const $e = F[ce];
        if (!$e) continue;
        const Te = Ut($e.args);
        if ((Te[4] || Te[3] || "").includes(`#${oe.id}`)) {
          const he = Te[5] || Te[4] || "", Be = Wt(F, he);
          if (Be) return z(Be);
        }
      }
      const G = N.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return G ? {
        b: parseFloat(G[1]) / 100,
        h: parseFloat(G[2]) / 100,
        name: N
      } : {
        b: 0.3,
        h: 0.3,
        name: N || "Default"
      };
    }
    function z(oe) {
      const N = oe.type;
      if (N === "IFCRECTANGLEPROFILEDEF") {
        const D = Ut(oe.args), G = (D[1] || "").replace(/'/g, ""), ce = parseFloat(D[3]) || 0.3, $e = parseFloat(D[4]) || 0.3;
        return {
          b: ce,
          h: $e,
          name: G
        };
      }
      if (N === "IFCMATERIALPROFILE") {
        const D = Ut(oe.args), G = D[2] || D[1] || "", ce = Wt(F, G);
        if (ce) return z(ce);
      }
      if (N === "IFCMATERIALPROFILESET") {
        const D = Ut(oe.args), ce = (D[2] || D[1] || "").match(/#(\d+)/);
        if (ce) {
          const $e = F[parseInt(ce[1])];
          if ($e) return z($e);
        }
      }
      if (N === "IFCMATERIALPROFILESETUSAGE") {
        const G = Ut(oe.args)[0], ce = Wt(F, G);
        if (ce) return z(ce);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function Q(oe, N, D, G) {
      const ce = $[oe] || [];
      for (const $e of ce) {
        const Te = F[$e];
        if (!Te) continue;
        const Ve = Ut(Te.args), he = Ve[5] || Ve[4] || "", Be = Wt(F, he);
        if (!Be) continue;
        const He = ua(F, Be), be = ye(Te);
        let Ee = G, ze = null, Je = null;
        const st = Ve[6] || Ve[5] || "", Ue = Wt(F, st);
        if (Ue) {
          const ut = $n(F, Ue);
          ut && (Ee = ut.depth || G, ze = ut.origin, Je = ut.direction);
        }
        const at = ze ? ze[0] : He.origin[0], dt = ze ? ze[1] : He.origin[1], yt = ze ? ze[2] : He.origin[2], Tt = Je || (D === "Z" ? He.dirZ : He.dirX), Ft = W(at, dt, yt), gt = W(at + Tt[0] * Ee, dt + Tt[1] * Ee, yt + Tt[2] * Ee);
        H.push({
          id: q++,
          type: "frame",
          nodeIds: [
            Ft,
            gt
          ],
          category: N,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: $e
        });
      }
    }
    Q("IFCCOLUMN", "column", "Z", 3), Q("IFCBEAM", "beam", "X", 5), Q("IFCMEMBER", "diagonal", "X", 4), Q("IFCPILE", "pile", "Z", 10), Q("IFCSTAIRFLIGHT", "stair", "X", 3), Q("IFCRAMPFLIGHT", "ramp", "X", 4);
    function ve(oe, N, D) {
      const G = $[oe] || [];
      for (const ce of G) {
        const $e = F[ce];
        if (!$e) continue;
        const Te = Ut($e.args), Ve = Te[5] || Te[4] || "";
        if (!Wt(F, Ve)) continue;
        let Be = D;
        const He = Te[6] || Te[5] || "", be = Wt(F, He);
        be && (Be = jl(F, be) || D);
        const Ee = N === "slab" ? `Losa e=${(Be * 100).toFixed(0)}cm` : N === "wall" ? `Muro e=${(Be * 100).toFixed(0)}cm` : N === "footing" ? `Zapata e=${(Be * 100).toFixed(0)}cm` : `${N} e=${(Be * 100).toFixed(0)}cm`;
        H.push({
          id: q++,
          type: "shell",
          nodeIds: [],
          category: N,
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
    for (const oe of ie) {
      const N = F[oe];
      if (!N) continue;
      const D = Ut(N.args), G = (D[2] || "").replace(/'/g, ""), ce = parseFloat(D[9]) || 0;
      me.push({
        name: G,
        elevation: ce
      });
    }
    return me.sort((oe, N) => oe.elevation - N.elevation), {
      nodes: J,
      elements: H,
      materials: U,
      levels: me,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function $n(e, b) {
    const F = Ut(b.args);
    for (const $ of F) {
      const J = $.match(/#(\d+)/g) || [];
      for (const H of J) {
        const U = parseInt(H.replace("#", "")), Y = e[U];
        if (Y) {
          if (Y.type === "IFCEXTRUDEDAREASOLID") {
            const q = Ut(Y.args), W = parseFloat(q[3]) || 0, ye = Wt(e, q[1]);
            let z = [
              0,
              0,
              0
            ];
            ye && (z = fa(e, ye).origin);
            const Q = Wt(e, q[2]);
            let ve = [
              0,
              0,
              1
            ];
            if (Q && Q.type === "IFCDIRECTION") {
              const me = Q.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              me && me.length >= 3 && (ve = me.map(Number));
            }
            return {
              depth: W,
              origin: z,
              direction: ve
            };
          }
          if (Y.type === "IFCSHAPEREPRESENTATION") {
            const q = $n(e, Y);
            if (q) return q;
          }
          if (Y.type === "IFCMAPPEDITEM") {
            const q = Ut(Y.args), W = Wt(e, q[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const ye = Ut(W.args), z = Wt(e, ye[1]);
              if (z) {
                const Q = $n(e, z);
                if (Q) return Q;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function jl(e, b) {
    const F = $n(e, b);
    return F ? F.depth : null;
  }
  const ma = [
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
  ], ba = [
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
  ], ga = /* @__PURE__ */ new Map();
  for (const [e, b] of ma) ga.set(e, b);
  function Wl(e) {
    return ga.get(e) ?? "other";
  }
  new Set(ba);
  async function Gl(e, b) {
    var _a, _b;
    const F = window.WebIFC;
    if (!F) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const $ = new F.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    $.SetWasmPath(J), await $.Init();
    const H = $.OpenModel(new Uint8Array(b)), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), q = {
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
    for (const [ve] of ma) {
      const me = Wl(ve);
      try {
        const ie = $.GetLineIDsWithType(H, ve);
        for (let oe = 0; oe < ie.size(); oe++) {
          const N = ie.get(oe);
          U.set(N, me);
          let D = "";
          try {
            const G = $.GetLine(H, N);
            D = ((_a = G == null ? void 0 : G.Name) == null ? void 0 : _a.value) || ((_b = G == null ? void 0 : G.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          Y.set(N, {
            expressID: N,
            category: me,
            name: D,
            typeName: q[ve] || "Otro"
          });
        }
      } catch {
      }
    }
    const W = /* @__PURE__ */ new Map();
    for (const ve of ba) {
      const me = new sn();
      me.name = `ifc-${ve}`, e.add(me), W.set(ve, me);
    }
    const ye = new Za();
    let z = 0;
    const Q = new ea({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: ta
    });
    return $.StreamAllMeshes(H, (ve) => {
      const me = U.get(ve.expressID) ?? "other", ie = W.get(me), oe = ve.geometries;
      for (let N = 0; N < oe.size(); N++) {
        const D = oe.get(N), G = $.GetGeometry(H, D.geometryExpressID), ce = $.GetVertexArray(G.GetVertexData(), G.GetVertexDataSize()), $e = $.GetIndexArray(G.GetIndexData(), G.GetIndexDataSize()), Te = new to(), Ve = new Float32Array(ce.length / 2), he = new Float32Array(ce.length / 2);
        for (let ze = 0; ze < ce.length; ze += 6) {
          const Je = ze / 2;
          Ve[Je] = ce[ze], Ve[Je + 1] = ce[ze + 1], Ve[Je + 2] = ce[ze + 2], he[Je] = ce[ze + 3], he[Je + 1] = ce[ze + 4], he[Je + 2] = ce[ze + 5];
        }
        Te.setAttribute("position", new xn(Ve, 3)), Te.setAttribute("normal", new xn(he, 3)), Te.setIndex(new xn(new Uint32Array($e), 1));
        const Be = new Qa();
        Be.fromArray(D.flatTransformation);
        let He;
        const be = D.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? He = new ea({
          color: new el(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: ta
        }) : He = Q, He._origOpacity = He.opacity;
        const Ee = new ia(Te, He);
        Ee.applyMatrix4(Be), Ee.userData.expressID = ve.expressID, Ee.userData.category = me, ie.add(Ee), ye.expandByObject(Ee), z++, G.delete();
      }
    }), $.CloseModel(H), {
      meshCount: z,
      bbox: ye,
      detailCategories: W,
      elementInfo: Y
    };
  }
  ra = Jo.state(false);
  Ql = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let b = "tonf", F = "m", $ = Ro(b, F), J = {
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
    let q = false;
    const W = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
    let z = "", Q = {}, ve = null, me = "", ie = [], oe = [], N = [], D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ve = null, he = [], Be = 0.2, He = 2, be = 2, Ee = false, ze = 2, Je = "x", st = /* @__PURE__ */ new Set(), Ue = true, at = 0.15, dt = 2, yt = 2, Tt = /* @__PURE__ */ new Set(), Ft = false, gt = "perimeter";
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
    const it = pl();
    it.div.style.display = "none";
    function mt() {
      const t = un()[z];
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
      const t = et();
      t && t.scene.remove(bt), bt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), bt = null;
    }
    function as(t, o, n, l, s) {
      Ht();
      const d = et();
      if (!d) return;
      bt = new sn(), bt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), i = Math.max(...o), c = Math.max(...n), m = r - a || 1, S = i - f || 1, w = 3359829, y = 2241348;
      for (const h of n) {
        for (const T of o) {
          const k = new to().setFromPoints([
            new Oe(a, h, T),
            new Oe(r, h, T)
          ]), M = new Wo({
            color: w,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), P = new Co(k, M);
          P.computeLineDistances(), P.renderOrder = -10, bt.add(P);
        }
        for (const T of t) {
          const k = new to().setFromPoints([
            new Oe(T, h, f),
            new Oe(T, h, i)
          ]), M = new Wo({
            color: w,
            dashSize: S * 0.015,
            gapSize: S * 0.01,
            transparent: true,
            opacity: 0.25
          }), P = new Co(k, M);
          P.computeLineDistances(), P.renderOrder = -10, bt.add(P);
        }
      }
      for (const h of t) for (const T of o) {
        const k = new to().setFromPoints([
          new Oe(h, 0, T),
          new Oe(h, c, T)
        ]), M = new Wo({
          color: y,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), P = new Co(k, M);
        P.computeLineDistances(), P.renderOrder = -10, bt.add(P);
      }
      const p = Math.min(m, S) * 0.015;
      for (const h of n) for (const T of t) for (const k of o) {
        const M = [
          new Oe(T - p, h, k),
          new Oe(T + p, h, k),
          new Oe(T, h, k - p),
          new Oe(T, h, k + p)
        ], P = new to().setFromPoints(M), B = new Yo({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), x = new Go(P, B);
        x.renderOrder = -5, bt.add(x);
      }
      bt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((T) => {
          T.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(bt), d.render();
    }
    let Pt = null;
    function ls() {
      if (!Pt) return;
      const t = et();
      t && t.scene.remove(Pt), Pt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Pt = null;
    }
    function Xo(t, o, n, l, s) {
      ls();
      const d = et();
      if (!d) return;
      Pt = new sn(), Pt.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...o), i = Math.max(...o), c = r - a || 1, m = i - f || 1, S = Math.max(c, m), w = S * 0.08, y = l || t.map((x, u) => String.fromCharCode(65 + u)), p = s || o.map((x, u) => String(u + 1)), h = S * 0.018, T = o.length <= 1, k = 8947848;
      for (let x = 0; x < t.length; x++) {
        const u = t[x];
        if (T) {
          const I = -w - h * 1.5;
          In(u, 0, 0, u, 0, I + h, k, Pt), kn(y[x] || `${x}`, u, 0, I, h, Pt);
        } else {
          const I = f - w - h * 1.5;
          In(u, f, 0, u, I + h, 0, k, Pt), kn(y[x] || `${x}`, u, I, 0, h, Pt);
        }
      }
      if (!T) for (let x = 0; x < o.length; x++) {
        const u = o[x], I = a - w - h * 1.5;
        In(a, u, 0, I + h, u, 0, k, Pt), kn(p[x] || `${x}`, I, u, 0, h, Pt);
      }
      const M = h * 1.8, P = w * 1.2, B = w * 1.2;
      for (let x = 0; x < t.length - 1; x++) {
        const u = t[x], I = t[x + 1], L = Math.abs(I - u), R = (u + I) / 2, j = `${L.toFixed(2)} m`;
        T ? (En(j, R, 0, -P, M, Pt), Sn(u, 0, -P * 0.7, I, 0, -P * 0.7, 16763904, Pt)) : (En(j, R, f - B, 0, M, Pt), Sn(u, f - B * 0.7, 0, I, f - B * 0.7, 0, 16763904, Pt));
      }
      if (!T) for (let x = 0; x < o.length - 1; x++) {
        const u = o[x], I = o[x + 1], L = Math.abs(I - u), R = (u + I) / 2, j = `${L.toFixed(2)} m`;
        En(j, a - P, R, 0, M, Pt), Sn(a - P * 0.7, u, 0, a - P * 0.7, I, 0, 16763904, Pt);
      }
      Pt.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(Pt), d.render();
    }
    let Gt = null;
    function rs() {
      if (!Gt) return;
      const t = et();
      t && t.scene.remove(Gt), Gt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Gt = null;
    }
    function wn(t, o, n) {
      if (rs(), t.length === 0) return;
      const l = et();
      if (!l) return;
      Gt = new sn(), Gt.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), r = Math.max(...n), f = d - s || 1, i = r - a || 1, c = Math.max(f, i), m = c * 0.06, S = n.length <= 1, w = 4491519, y = c * 0.015;
      for (const p of t) {
        const h = p.elev;
        S ? (Ko(s - m, 0, h, d + m, 0, h, w, Gt), is(p.name, d + m * 1.5, 0, h, y, Gt)) : (Ko(s, a, h, d, a, h, w, Gt), Ko(d, a, h, d, r, h, w, Gt), Ko(d, r, h, s, r, h, w, Gt), Ko(s, r, h, s, a, h, w, Gt), is(p.name, s - m * 1.5, a, h, y, Gt));
      }
      Gt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Gt), l.render();
    }
    function Ko(t, o, n, l, s, d, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, i = new to().setFromPoints([
        new Oe(t, o, n),
        new Oe(l, s, d)
      ]), c = new Wo({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new Co(i, c);
      m.computeLineDistances(), m.renderOrder = 50, r.add(m);
    }
    function is(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, f - c), i.quadraticCurveTo(r, f, r - c, f), i.lineTo(c, f), i.quadraticCurveTo(0, f, 0, f - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const m = new Xn(a);
      m.needsUpdate = true;
      const S = new fn({
        map: m,
        depthTest: false,
        transparent: true
      }), w = new pn(S);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, d.add(w);
    }
    function En(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, f - c), i.quadraticCurveTo(r, f, r - c, f), i.lineTo(c, f), i.quadraticCurveTo(0, f, 0, f - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const m = new ll(a);
      m.minFilter = rl;
      const S = new fn({
        map: m,
        transparent: true,
        depthTest: false
      }), w = new pn(S);
      w.position.set(o, n, l);
      const y = r / f;
      w.scale.set(s * y, s, 1), w.renderOrder = 999, d.add(w);
    }
    function Sn(t, o, n, l, s, d, a, r) {
      const f = [
        new Oe(t, o, n),
        new Oe(l, s, d)
      ], i = new to().setFromPoints(f), c = new Yo({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new Co(i, c);
      m.renderOrder = 998, r.add(m);
    }
    function In(t, o, n, l, s, d, a, r) {
      const f = new to().setFromPoints([
        new Oe(t, o, n),
        new Oe(l, s, d)
      ]), i = new Wo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new Co(f, i);
      c.computeLineDistances(), r.add(c);
    }
    function kn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new Xn(a);
      i.needsUpdate = true;
      const c = new fn({
        map: i,
        depthTest: false,
        transparent: true
      }), m = new pn(c);
      m.position.set(o, n, l);
      const S = s * 2;
      m.scale.set(S, S, 1), m.renderOrder = 100, d.add(m);
    }
    const Ke = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Ze(), s;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Ze();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Ze(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Ze();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Ze();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Ze();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Ze();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Ze();
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
        const n = Ae.querySelectorAll("input[type=checkbox]");
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
        const t = Ae.querySelectorAll("input[type=checkbox]"), o = {};
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
        for (const a of o || [
          0
        ]) s.push(s[s.length - 1] + a);
        const d = [
          0
        ];
        for (const a of n || [
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
        })), Xo(We.map((a) => a.coord), Xe.map((a) => a.coord), pt, We.map((a) => a.label), Xe.map((a) => a.label));
        {
          const a = d.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - d[f - 1] : 0,
            elev: r
          }));
          wn(a, We.map((r) => r.coord), Xe.map((r) => r.coord));
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
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = o.split("x").map((_) => parseFloat(_) / 100), [a, r] = n.split("x").map((_) => parseFloat(_) / 100), f = We.map((_) => _.coord), i = Xe.map((_) => _.coord), c = lt.map((_) => _.elev), m = f.length, S = i.length, w = c.length, y = w - 1, p = [], h = {};
        for (let _ = 0; _ < w; _++) for (let fe = 0; fe < S; fe++) for (let ne = 0; ne < m; ne++) h[`${ne},${fe},${_}`] = p.length, p.push([
          f[ne],
          i[fe],
          c[_]
        ]);
        const T = [], k = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < y; _++) for (let fe = 0; fe < S; fe++) for (let ne = 0; ne < m; ne++) {
          const pe = T.length;
          T.push([
            h[`${ne},${fe},${_}`],
            h[`${ne},${fe},${_ + 1}`]
          ]), k.add(pe), P.set(pe, _);
        }
        for (let _ = 1; _ < w; _++) for (let fe = 0; fe < S; fe++) for (let ne = 0; ne < m - 1; ne++) {
          const pe = T.length;
          T.push([
            h[`${ne},${fe},${_}`],
            h[`${ne + 1},${fe},${_}`]
          ]), M.add(pe), P.set(pe, _ - 1);
        }
        for (let _ = 1; _ < w; _++) for (let fe = 0; fe < m; fe++) for (let ne = 0; ne < S - 1; ne++) {
          const pe = T.length;
          T.push([
            h[`${fe},${ne},${_}`],
            h[`${fe},${ne + 1},${_}`]
          ]), M.add(pe), P.set(pe, _ - 1);
        }
        const B = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", x = /* @__PURE__ */ new Set();
        if (B) {
          const _ = B === "all" || B === "x" || B === "perimeter", fe = B === "all" || B === "y" || B === "perimeter";
          for (let ne = 0; ne < y; ne++) {
            if (_) for (let pe = 0; pe < S; pe++) {
              if (B === "perimeter" && pe !== 0 && pe !== S - 1) continue;
              const ee = Math.floor((m - 1) / 2);
              for (let ue = 0; ue < m - 1; ue++) {
                if (B === "perimeter" && ue !== ee) continue;
                const we = T.length;
                T.push([
                  h[`${ue},${pe},${ne}`],
                  h[`${ue + 1},${pe},${ne + 1}`]
                ]), x.add(we), P.set(we, ne);
                const se = T.length;
                T.push([
                  h[`${ue + 1},${pe},${ne}`],
                  h[`${ue},${pe},${ne + 1}`]
                ]), x.add(se), P.set(se, ne);
              }
            }
            if (fe) for (let pe = 0; pe < m; pe++) {
              if (B === "perimeter" && pe !== 0 && pe !== m - 1) continue;
              const ee = Math.floor((S - 1) / 2);
              for (let ue = 0; ue < S - 1; ue++) {
                if (B === "perimeter" && ue !== ee) continue;
                const we = T.length;
                T.push([
                  h[`${pe},${ue},${ne}`],
                  h[`${pe},${ue + 1},${ne + 1}`]
                ]), x.add(we), P.set(we, ne);
                const se = T.length;
                T.push([
                  h[`${pe},${ue + 1},${ne}`],
                  h[`${pe},${ue},${ne + 1}`]
                ]), x.add(se), P.set(se, ne);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, I = u / (2 * (1 + 0.2)), L = s * d, R = s * d ** 3 / 12, j = d * s ** 3 / 12, g = s * d * (s ** 2 + d ** 2) / 12, E = a * r, v = a * r ** 3 / 12, C = r * a ** 3 / 12, X = a * r * (a ** 2 + r ** 2) / 12, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < T.length; _++) V.set(_, u), ae.set(_, I), k.has(_) ? (Z.set(_, L), K.set(_, R), de.set(_, j), re.set(_, g), Ie.set(_, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${o}`
        })) : x.has(_) ? (Z.set(_, L), K.set(_, R), de.set(_, j), re.set(_, g), Ie.set(_, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${o}`
        })) : (Z.set(_, E), K.set(_, v), de.set(_, C), re.set(_, X), Ie.set(_, {
          type: "rect",
          b: a,
          h: r,
          name: `V${n}`
        }));
        const Pe = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < S; _++) for (let fe = 0; fe < m; fe++) Pe.set(h[`${fe},${_},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = T, e.nodeInputs.val = {
          supports: Pe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: V,
          shearModuli: ae,
          areas: Z,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: de,
          torsionalConstants: re,
          sectionShapes: Ie
        }, D = k, G = M, $e = P, console.log(`Built: ${p.length} nodes, ${T.length} elements (${k.size} cols, ${M.size} beams, ${x.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${B ? `, braces=${B}` : ""}`), {
          nodes: p.length,
          elements: T.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = We.findIndex((y) => y.label === t), s = Xe.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${We.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Xe.map((y) => y.label)}`);
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
        }, c = n ? [
          lt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: lt.length - 1
        }, (y, p) => p + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), S = i(lt[0].elev);
        m.has(S) || m.set(S, [
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
          ]), D.add(f.length - 1), $e.set(f.length - 1, y - 1), w++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const d = We.findIndex((P) => P.label === t), a = Xe.findIndex((P) => P.label === o), r = We.findIndex((P) => P.label === n), f = Xe.findIndex((P) => P.label === l), i = lt.findIndex((P) => P.label === s);
        if (d < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${s}" not found. Available: ${lt.filter((P) => P.label !== "Base").map((P) => P.label)}`);
          return;
        }
        const c = We[d].coord, m = Xe[a].coord, S = We[r].coord, w = Xe[f].coord, y = lt[i].elev, p = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], T = (P, B, x) => {
          const u = p.findIndex((I) => Math.abs(I[0] - P) < 1e-3 && Math.abs(I[1] - B) < 1e-3 && Math.abs(I[2] - x) < 1e-3);
          return u >= 0 ? u : (p.push([
            P,
            B,
            x
          ]), p.length - 1);
        }, k = T(c, m, y), M = T(S, w, y);
        return h.push([
          k,
          M
        ]), G.add(h.length - 1), $e.set(h.length - 1, i - 1), e.nodes.val = p, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, o, n, l, s, d) {
        var _a2;
        const a = We.findIndex((u) => u.label === t), r = Xe.findIndex((u) => u.label === o), f = lt.findIndex((u) => u.label === n), i = We.findIndex((u) => u.label === l), c = Xe.findIndex((u) => u.label === s), m = lt.findIndex((u) => u.label === d);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (i < 0 || c < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const S = We[a].coord, w = Xe[r].coord, y = lt[f].elev, p = We[i].coord, h = Xe[c].coord, T = lt[m].elev, k = [
          ...e.nodes.val
        ], M = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], P = (u, I, L) => {
          const R = k.findIndex((j) => Math.abs(j[0] - u) < 1e-3 && Math.abs(j[1] - I) < 1e-3 && Math.abs(j[2] - L) < 1e-3);
          return R >= 0 ? R : (k.push([
            u,
            I,
            L
          ]), k.length - 1);
        }, B = P(S, w, y), x = P(p, h, T);
        return M.push([
          B,
          x
        ]), $e.set(M.length - 1, Math.min(f, m)), e.nodes.val = k, e.elements.val = M, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${d}`), M.length - 1;
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
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((ee) => parseFloat(ee) / 100), [i, c] = d.split("x").map((ee) => parseFloat(ee) / 100), m = [
          0
        ];
        for (const ee of o) m.push(m[m.length - 1] + ee);
        const S = [
          0
        ];
        for (const ee of n) S.push(S[S.length - 1] + ee);
        const w = [
          0
        ];
        for (const ee of l) w.push(w[w.length - 1] + ee);
        const y = m.length, p = S.length, h = w.length, T = l.length, k = [], M = {};
        for (let ee = 0; ee < h; ee++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y; we++) M[`${we},${ee},${ue}`] = k.length, k.push([
          m[we],
          w[ee],
          S[ue]
        ]);
        const P = [], B = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < T; ee++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y; we++) {
          const se = P.length;
          P.push([
            M[`${we},${ee},${ue}`],
            M[`${we},${ee + 1},${ue}`]
          ]), B.add(se), u.set(se, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let ue = 0; ue < p; ue++) for (let we = 0; we < y - 1; we++) {
          const se = P.length;
          P.push([
            M[`${we},${ee},${ue}`],
            M[`${we + 1},${ee},${ue}`]
          ]), x.add(se), u.set(se, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let ue = 0; ue < y; ue++) for (let we = 0; we < p - 1; we++) {
          const se = P.length;
          P.push([
            M[`${ue},${ee},${we}`],
            M[`${ue},${ee},${we + 1}`]
          ]), x.add(se), u.set(se, ee - 1);
        }
        const L = 15100 * Math.sqrt(a) * 10, R = L / (2 * (1 + 0.2)), j = r * f, g = r * f ** 3 / 12, E = f * r ** 3 / 12, v = r * f * (r ** 2 + f ** 2) / 12, C = i * c, X = i * c ** 3 / 12, V = c * i ** 3 / 12, ae = i * c * (i ** 2 + c ** 2) / 12, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < P.length; ee++) Z.set(ee, L), K.set(ee, R), B.has(ee) ? (de.set(ee, j), re.set(ee, g), Ie.set(ee, E), Pe.set(ee, v), _.set(ee, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (de.set(ee, C), re.set(ee, X), Ie.set(ee, V), Pe.set(ee, ae), _.set(ee, {
          type: "rect",
          b: i,
          h: c,
          name: `V${d}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < p; ee++) for (let ue = 0; ue < y; ue++) fe.set(M[`${ue},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = k, e.elements.val = P, e.nodeInputs.val = {
          supports: fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: K,
          areas: de,
          momentsOfInertiaZ: re,
          momentsOfInertiaY: Ie,
          torsionalConstants: Pe,
          sectionShapes: _
        }, D = B, G = x, $e = u, We = m.map((ee, ue) => ({
          label: String.fromCharCode(65 + ue),
          coord: ee
        })), Xe = S.map((ee, ue) => ({
          label: `${ue + 1}`,
          coord: ee
        })), pt = w[w.length - 1], Xo(We.map((ee) => ee.coord), Xe.map((ee) => ee.coord), pt, We.map((ee) => ee.label), Xe.map((ee) => ee.label));
        {
          const ee = w.map((ue, we) => ({
            name: we === 0 ? "Base" : `P${we}`,
            height: we > 0 ? ue - w[we - 1] : 0,
            elev: ue
          }));
          wn(ee, m, S);
        }
        const ne = Ae.querySelector("#cad3d-axis-buttons");
        if (ne) {
          ne.style.display = "flex";
          const ee = We.map((we) => we.label), ue = Xe.map((we) => we.label);
          ne.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const we of ee) ne.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${we}">${we}</button>`;
          ne.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const we of ue) ne.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${we}">${we}</button>`;
        }
        const pe = Ae.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < T; ee++) pe.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return as(m, S, w), Ze(), console.log(`Model3D: ${k.length}n ${P.length}e | ${y}x${p} grid, ${T} floors | COL${s} V${d} f'c=${a}`), {
          nodes: k.length,
          elements: P.length,
          columns: B.size,
          beams: x.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), We = [], Xe = [], pt = 0, ls(), rs(), Ht();
        const t = Ae.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Ze();
      },
      frame(t, o, n = 0, l = 0) {
        Ke.clear();
        const s = [];
        n > 0 && s.push(-n);
        let d = 0;
        s.push(d);
        for (const y of t) d += y, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let r = 0;
        for (const y of o) r += y, a.push(r);
        const f = (y) => n > 0 && y === 0 || l > 0 && y === s.length - 1, i = {}, c = [];
        for (let y = 0; y < a.length; y++) for (let p = 0; p < s.length; p++) y === 0 && f(p) || (i[`${p},${y}`] = c.length, c.push([
          s[p],
          0,
          a[y]
        ]));
        const m = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let p = 0; p < s.length; p++) f(p) || (D.add(m.length), m.push([
          i[`${p},${y}`],
          i[`${p},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let p = 0; p < s.length - 1; p++) G.add(m.length), m.push([
          i[`${p},${y}`],
          i[`${p + 1},${y}`]
        ]);
        const S = /* @__PURE__ */ new Map(), w = mt();
        for (let y = 0; y < s.length; y++) {
          if (f(y)) continue;
          const p = `${y},0`;
          i[p] !== void 0 && S.set(i[p], [
            ...w
          ]);
        }
        return e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), We = [
          ...s
        ], Xe = [
          0
        ], pt = a[a.length - 1] || 0, setTimeout(() => {
          It(), Xo(s, [
            0
          ]), Nn(), qn();
        }, 50), Ze(), {
          nodes: c.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, r = 0, f = 1) {
        Ke.clear();
        const i = [];
        s > 0 && i.push(-s), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        d > 0 && i.push(i[i.length - 1] + d);
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const u of o) c.push(c[c.length - 1] + u);
        r > 0 && c.push(c[c.length - 1] + r);
        const m = [
          0
        ];
        for (const u of n) m.push(m[m.length - 1] + u);
        const S = (u) => s > 0 && u === 0 || d > 0 && u === i.length - 1, w = (u) => a > 0 && u === 0 || r > 0 && u === c.length - 1, y = (u, I) => S(u) || w(I), p = [], h = {};
        for (let u = 0; u < m.length; u++) for (let I = 0; I < c.length; I++) for (let L = 0; L < i.length; L++) u === 0 && y(L, I) || (h[`${L},${I},${u}`] = p.length, p.push([
          i[L],
          c[I],
          m[u]
        ]));
        const T = p.length, k = [];
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
        const M = [];
        for (let u = 0; u < m.length - 1; u++) for (let I = 0; I < c.length; I++) for (let L = 0; L < i.length; L++) y(L, I) || M.push({
          el: [
            h[`${L},${I},${u}`],
            h[`${L},${I},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, I], floor: L } of M) {
          if (f <= 1) {
            D.add(k.length), $e.set(k.length, L), k.push([
              u,
              I
            ]);
            continue;
          }
          const R = p[u], j = p[I];
          let g = u;
          for (let E = 1; E < f; E++) {
            const v = E / f, C = p.length;
            p.push([
              R[0] + (j[0] - R[0]) * v,
              R[1] + (j[1] - R[1]) * v,
              R[2] + (j[2] - R[2]) * v
            ]), D.add(k.length), $e.set(k.length, L), k.push([
              g,
              C
            ]), g = C;
          }
          D.add(k.length), $e.set(k.length, L), k.push([
            g,
            I
          ]);
        }
        Te = /* @__PURE__ */ new Map();
        const P = [];
        for (let u = 1; u < m.length; u++) for (let I = 0; I < c.length; I++) for (let L = 0; L < i.length - 1; L++) P.push({
          el: [
            h[`${L},${I},${u}`],
            h[`${L + 1},${I},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < m.length; u++) for (let I = 0; I < i.length; I++) for (let L = 0; L < c.length - 1; L++) P.push({
          el: [
            h[`${I},${L},${u}`],
            h[`${I},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, I], floor: L, dir: R, bay: j } of P) {
          const g = p[u], E = p[I];
          let v = u;
          for (let X = 1; X < l; X++) {
            const V = X / l, ae = p.length;
            p.push([
              g[0] + (E[0] - g[0]) * V,
              g[1] + (E[1] - g[1]) * V,
              g[2] + (E[2] - g[2]) * V
            ]);
            const Z = k.length;
            G.add(Z), $e.set(Z, L), Te.set(Z, {
              dir: R,
              bay: j
            }), k.push([
              v,
              ae
            ]), v = ae;
          }
          const C = k.length;
          G.add(C), $e.set(C, L), Te.set(C, {
            dir: R,
            bay: j
          }), k.push([
            v,
            I
          ]);
        }
        if (st = /* @__PURE__ */ new Set(), Ee && ze > 0) {
          const u = (I, L, R) => {
            for (let g = 0; g < p.length; g++) if (Math.abs(p[g][0] - I) < 1e-6 && Math.abs(p[g][1] - L) < 1e-6 && Math.abs(p[g][2] - R) < 1e-6) return g;
            const j = p.length;
            return p.push([
              I,
              L,
              R
            ]), j;
          };
          for (let I = 1; I < m.length; I++) if (Je === "x") for (let L = 0; L < c.length - 1; L++) {
            const R = c[L], j = c[L + 1];
            for (let g = 1; g <= ze; g++) {
              const E = R + g / (ze + 1) * (j - R), v = [];
              for (let C = 0; C < i.length; C++) v.push(u(i[C], E, m[I]));
              for (let C = 0; C < i.length - 1; C++) {
                const X = k.length;
                st.add(X), G.add(X), $e.set(X, I - 1), Te.set(X, {
                  dir: "x",
                  bay: C
                }), k.push([
                  v[C],
                  v[C + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < i.length - 1; L++) {
            const R = i[L], j = i[L + 1];
            for (let g = 1; g <= ze; g++) {
              const E = R + g / (ze + 1) * (j - R), v = [];
              for (let C = 0; C < c.length; C++) v.push(u(E, c[C], m[I]));
              for (let C = 0; C < c.length - 1; C++) {
                const X = k.length;
                st.add(X), G.add(X), $e.set(X, I - 1), Te.set(X, {
                  dir: "y",
                  bay: C
                }), k.push([
                  v[C],
                  v[C + 1]
                ]);
              }
            }
          }
        }
        const B = /* @__PURE__ */ new Map(), x = mt();
        for (let u = 0; u < c.length; u++) for (let I = 0; I < i.length; I++) y(I, u) || B.set(h[`${I},${u},0`], [
          ...x
        ]);
        ce = /* @__PURE__ */ new Set();
        for (const u of he) {
          const I = m.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: I
          }, (R, j) => j) : u.floors.filter((R) => R < I);
          for (const R of L) {
            let j, g, E, v;
            u.dir === "x" ? (j = u.bay, E = u.bay + 1, g = u.axisIdx, v = u.axisIdx) : (j = u.axisIdx, E = u.axisIdx, g = u.bay, v = u.bay + 1);
            const C = h[`${j},${g},${R}`], X = h[`${j},${g},${R + 1}`];
            let V, ae;
            if (u.dir === "x" ? (V = h[`${E},${v},${R}`], ae = h[`${E},${v},${R + 1}`]) : (V = h[`${E},${v},${R}`], ae = h[`${E},${v},${R + 1}`]), C === void 0 || V === void 0 || X === void 0 || ae === void 0) continue;
            const Z = be, K = He, de = p[C], re = p[V], Ie = p[X], Pe = p[ae], _ = [];
            for (let fe = 0; fe <= K; fe++) {
              const ne = [], pe = fe / K;
              for (let ee = 0; ee <= Z; ee++) {
                const ue = ee / Z, we = (1 - pe) * ((1 - ue) * de[0] + ue * re[0]) + pe * ((1 - ue) * Ie[0] + ue * Pe[0]), se = (1 - pe) * ((1 - ue) * de[1] + ue * re[1]) + pe * ((1 - ue) * Ie[1] + ue * Pe[1]), Se = (1 - pe) * ((1 - ue) * de[2] + ue * re[2]) + pe * ((1 - ue) * Ie[2] + ue * Pe[2]);
                fe === 0 && ee === 0 ? ne.push(C) : fe === 0 && ee === Z ? ne.push(V) : fe === K && ee === 0 ? ne.push(X) : fe === K && ee === Z ? ne.push(ae) : (ne.push(p.length), p.push([
                  we,
                  se,
                  Se
                ]));
              }
              _.push(ne);
            }
            for (let fe = 0; fe < K; fe++) for (let ne = 0; ne < Z; ne++) {
              const pe = _[fe][ne], ee = _[fe][ne + 1], ue = _[fe + 1][ne + 1], we = _[fe + 1][ne], se = k.length;
              ce.add(se), $e.set(se, R), k.push([
                pe,
                ee,
                ue,
                we
              ]);
            }
            if (R === 0) for (let fe = 0; fe <= Z; fe++) {
              const ne = _[0][fe];
              ne >= T && B.set(ne, [
                ...x
              ]);
            }
          }
        }
        if (Tt = /* @__PURE__ */ new Set(), Ue) {
          const u = l, I = l, L = /* @__PURE__ */ new Map(), R = (j, g, E) => `${Math.round(j * 1e4)},${Math.round(g * 1e4)},${Math.round(E * 1e4)}`;
          for (let j = 0; j < p.length; j++) L.set(R(p[j][0], p[j][1], p[j][2]), j);
          for (let j = 1; j < m.length; j++) {
            const g = m[j];
            for (let E = 0; E < i.length - 1; E++) for (let v = 0; v < c.length - 1; v++) {
              const C = i[E], X = i[E + 1], V = c[v], ae = c[v + 1], Z = [];
              for (let K = 0; K <= I; K++) {
                const de = [];
                for (let re = 0; re <= u; re++) {
                  const Ie = C + re / u * (X - C), Pe = V + K / I * (ae - V);
                  if (K === 0 && re === 0) de.push(h[`${E},${v},${j}`]);
                  else if (K === 0 && re === u) de.push(h[`${E + 1},${v},${j}`]);
                  else if (K === I && re === 0) de.push(h[`${E},${v + 1},${j}`]);
                  else if (K === I && re === u) de.push(h[`${E + 1},${v + 1},${j}`]);
                  else {
                    const _ = R(Ie, Pe, g), fe = L.get(_);
                    if (fe !== void 0) de.push(fe);
                    else {
                      const ne = p.length;
                      p.push([
                        Ie,
                        Pe,
                        g
                      ]), L.set(_, ne), de.push(ne);
                    }
                  }
                }
                Z.push(de);
              }
              for (let K = 0; K < I; K++) for (let de = 0; de < u; de++) {
                const re = Z[K][de], Ie = Z[K][de + 1], Pe = Z[K + 1][de + 1], _ = Z[K + 1][de], fe = k.length;
                Tt.add(fe), $e.set(fe, j - 1), k.push([
                  re,
                  Ie,
                  Pe,
                  _
                ]);
              }
            }
          }
        }
        if (Ft && gt) {
          const u = gt === "all" || gt === "x" || gt === "perimeter", I = gt === "all" || gt === "y" || gt === "perimeter", L = m.length - 1;
          for (let R = 0; R < L; R++) {
            if (u) for (let j = 0; j < c.length; j++) {
              if (gt === "perimeter" && j !== 0 && j !== c.length - 1) continue;
              const g = Math.floor((i.length - 1) / 2);
              for (let E = 0; E < i.length - 1; E++) {
                if (gt === "perimeter" && E !== g || y(E, j) || y(E + 1, j)) continue;
                const v = h[`${E},${j},${R}`], C = h[`${E + 1},${j},${R + 1}`], X = h[`${E + 1},${j},${R}`], V = h[`${E},${j},${R + 1}`];
                v !== void 0 && C !== void 0 && (k.push([
                  v,
                  C
                ]), $e.set(k.length - 1, R)), X !== void 0 && V !== void 0 && (k.push([
                  X,
                  V
                ]), $e.set(k.length - 1, R));
              }
            }
            if (I) for (let j = 0; j < i.length; j++) {
              if (gt === "perimeter" && j !== 0 && j !== i.length - 1) continue;
              const g = Math.floor((c.length - 1) / 2);
              for (let E = 0; E < c.length - 1; E++) {
                if (gt === "perimeter" && E !== g || y(j, E) || y(j, E + 1)) continue;
                const v = h[`${j},${E},${R}`], C = h[`${j},${E + 1},${R + 1}`], X = h[`${j},${E + 1},${R}`], V = h[`${j},${E},${R + 1}`];
                v !== void 0 && C !== void 0 && (k.push([
                  v,
                  C
                ]), $e.set(k.length - 1, R)), X !== void 0 && V !== void 0 && (k.push([
                  X,
                  V
                ]), $e.set(k.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = k, e.nodeInputs && (e.nodeInputs.val = {
          supports: B
        }), We = [
          ...i
        ], Xe = [
          ...c
        ], pt = m[m.length - 1] || 0, setTimeout(() => {
          It(), Xo(i, c), Nn(), qn();
        }, 50), Ze(), {
          nodes: p.length,
          elements: k.length,
          nJointNodes: T
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        Ke.clear();
        const a = [], r = [], f = (w) => n + l * (1 - Math.pow(2 * w / t - 1, 2)), i = [], c = d + 1;
        for (let w = 0; w < c; w++) {
          const y = [], p = o / d * w;
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
          for (let h = 1; h < s; h++) {
            const T = t / s * h;
            y.push(a.length), a.push([
              T,
              p,
              f(T)
            ]);
          }
          y.push(a.length), a.push([
            t,
            p,
            n
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
        const m = /* @__PURE__ */ new Map(), S = mt();
        for (let w = 0; w < c; w++) m.set(i[w][0], [
          ...S
        ]), m.set(i[w][1], [
          ...S
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), Ze(), {
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
            Ne.colMat = 1, Ne.vigaMat = 1, Ke.clear(), Qe("truss"), ps();
            break;
          }
          case "beams": {
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Ke.clear(), Qe("beams"), fs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Ne.colMat = 1, Ne.vigaMat = 1, Ke.clear(), Qe("3d"), us();
            break;
          }
          case "portico": {
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Qe("frame"), Re();
            break;
          }
          case "edificio": {
            Qe("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, he = [], Ue = false, Ee = false, Ft = false, Re();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Qe("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, he = [], Ee = true, ze = 2;
            const o = ie.reduce((l, s) => l + s, 0) / ie.length, n = oe.reduce((l, s) => l + s, 0) / oe.length;
            Je = o >= n ? "y" : "x", Ue = true, at = 0.08, Ft = false, Re();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Qe("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, he = [], Ee = true, ze = 2;
            const o = ie.reduce((l, s) => l + s, 0) / ie.length, n = oe.reduce((l, s) => l + s, 0) / oe.length;
            Je = o >= n ? "y" : "x", Ue = true, at = 0.08, Ft = true, gt = "perimeter", Re();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Qe("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Ee = false;
            const o = Math.round(((_a2 = Q.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = Q.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Ue = true, at = 0.15, Re();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Qe("edificio"), Ne.colMat = 2, Ne.vigaMat = 0, Ee = false;
            const o = Math.round(((_c = Q.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = Q.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], Ue = true, at = 0.12, Re();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Qe("edificio"), Q.nPisos && (Q.nPisos.val = 1), Q.hPiso && (Q.hPiso.val = 4.5), Q.nVanosX && (Q.nVanosX.val = 3), Q.nVanosY && (Q.nVanosY.val = 2), Q.nSubViga && (Q.nSubViga.val = 3), ie = [
              6,
              6,
              6
            ], oe = [
              5,
              5
            ], Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, he = [], Ee = true, ze = 2, Je = ie[0] >= oe[0] ? "y" : "x", Ue = true, at = 0.08, dt = 3, yt = 3, Re();
            break;
          }
          case "galpon": {
            Qe("galpon"), Ne.colMat = 1, Ne.vigaMat = 1, Re();
            break;
          }
          case "barra": {
            Qe("barra"), Re();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ke.clear(), Qe("placa-3q"), ms();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ke.clear(), Qe("placa-q4"), bs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ke.clear(), Qe("losa-rect"), gs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ke.clear(), Qe("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ke.clear(), Qe("viga-alta"), xs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ke.clear(), Qe("muro-contencion"), vs();
            break;
          }
          case "zapata":
          case "footing": {
            Ke.clear(), Qe("zapata"), ys();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ke.clear(), Qe("placa-orificios"), $s();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ke.clear(), Qe("col-placa"), Ms();
            break;
          }
          case "talud":
          case "slope": {
            Ke.clear(), Qe("talud"), ws();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ke.clear(), Qe("eiffel"), _s();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ke.clear(), Qe("arco"), Ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ke.clear(), Qe("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ke.clear(), Qe("twisted"), Hs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ke.clear(), Qe("burj"), js();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ke.clear(), Qe("opera"), Ws();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ke.clear(), Qe("diagrid"), Gs();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            Ke.clear(), Qe("muro-q4"), Vn();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            Ke.clear(), Qe("viga-q4"), Ys();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, r = 3e7, f = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const m = performance.now(), S = Un({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: i
        }), w = performance.now() - m;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const y = S.nodeResults.map((M) => [
          M.x,
          M.y,
          0
        ]), p = S.elementResults.map((M) => [
          ...M.nodes
        ]);
        e.nodes.val = y, e.elements.val = p;
        const h = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((M, P) => {
          h.set(P, [
            0,
            0,
            M.w,
            M.bx,
            M.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const T = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((M, P) => {
          (M.x < 1e-10 || M.x > t - 1e-10 || M.y < 1e-10 || M.y > o - 1e-10) && T.set(P, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const k = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const M = d * t * o / y.length;
          y.forEach((P, B) => {
            T.has(B) || k.set(B, [
              0,
              0,
              M,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: T,
          loads: k
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
          S.elementResults.forEach((x, u) => {
            M.set(u, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), P.set(u, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), B.set(u, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: M,
            bendingYY: P,
            bendingXY: B
          };
        }
        return setTimeout(() => It(), 50), Ze(), S;
      },
      set(t, o) {
        Q[t] ? (Q[t].val = o, console.log(`${t} = ${o}`), so(), Re()) : ft[t] ? (ft[t].val = o, console.log(`${t} = ${o}`), so(), Re()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...Q,
          ...ft
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in Q) o[l] = Q[l].val;
          for (const l in ft) o[l] = ft[l].val;
          o.plateTheory = Le, o.supportType = xt;
          const n = un()[z];
          return n && n[xt] && (o.supportLabel = n[xt].label), console.table(o), o;
        }
        if (Q[t]) return Q[t].val;
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
        }[Le] || Le}`), z.includes("placa") && (so(), Re());
      },
      setBc(t) {
        const o = un()[z];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        xt = t, xt >= o.length && (xt = 0), console.log(`Apoyo: ${o[xt].label} \u2192 DOFs: [${o[xt].dofs.map((n) => n ? "1" : "0").join(",")}]`), so(), Re();
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
        t && (b = t), o && (F = o), $ = Ro(b, F);
        const n = Ae.querySelector("#cad3d-force-unit"), l = Ae.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = F), z && Qe(z), console.log(`Unidades: ${$.label} | E=${$.E.toExponential(3)} ${$.stress}`), $.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function cs() {
      return cl($);
    }
    function ds() {
      return dl($);
    }
    let ft = {};
    function Qe(t) {
      var _a2, _b, _c, _d;
      z = t, ra.val = true, xt = 0, ge && Cn(), Q = {};
      const o = cs()[t];
      if (o) for (const l of o) Q[l.key] = {
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
        const l = Math.round(((_a2 = Q.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = Q.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ie = Array(l).fill($.defaultSpan), oe = Array(s).fill($.defaultSpan * 0.8);
        const d = Math.round(((_c = Q.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = Q.hPiso) == null ? void 0 : _d.val) ?? 3;
        N = Array(d).fill(a);
      }
      so(), setTimeout(() => {
        Ia(), Re();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = Q[t]) == null ? void 0 : _a2.val) ?? ((_b = ft[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Re() {
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
          const o = Math.round(le("nVanos")), n = le("spanV"), l = Math.round(le("nPisos")), s = le("hPiso");
          Ke.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = le("Lvix") || 0, n = le("Lvdx") || 0, l = le("Lviy") || 0, s = le("Lvdy") || 0, d = Math.max(1, Math.round(le("nSubViga") || 3)), a = Math.max(1, Math.round(le("nSubCol") || 1)), r = le("hPiso"), f = N.length > 0 ? [
            ...N
          ] : Array(Math.round(le("nPisos"))).fill(r);
          Ke.building([
            ...ie
          ], [
            ...oe
          ], f, d, o, n, l, s, a);
          break;
        }
        case "galpon":
          Ke.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          ha();
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
      }
      if ((z === "frame" || z === "edificio" || z === "galpon") && e.nodeInputs) {
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
        "viga-q4"
      ].includes(z)) {
        if (U.size > 0 || Y.size > 0 || q) {
          const o = e.elements.val, n = o.filter((l, s) => !(U.has(s) || Y.has(s) || q && !W.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          xo(), Fn();
        }, 30);
      }
    }
    function ps() {
      const t = le("span"), o = Math.round(le("divisions")), n = le("height"), l = t / o, s = [], d = [];
      for (let c = 0; c <= o; c++) s.push([
        l * c,
        0,
        0
      ]);
      for (let c = 0; c <= o; c++) s.push([
        l * c,
        0,
        n
      ]);
      const a = o + 1;
      for (let c = 0; c < o; c++) d.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < o; c++) d.push([
        a + c,
        a + c + 1
      ]);
      for (let c = 0; c <= o; c++) d.push([
        c,
        a + c
      ]);
      for (let c = 0; c < o; c++) c < o / 2 ? d.push([
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
      ]), f = (le("CM") ?? 0) + (le("CV") ?? 0), i = /* @__PURE__ */ new Map();
      if (f !== 0) for (let c = 0; c <= o; c++) i.set(c, [
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
      }), Ze();
    }
    function fs() {
      const t = le("width"), o = le("height"), n = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), s = Math.max(1, Math.round(le("nSub") || 4)), d = [
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
      let i = 1;
      for (let m = 1; m < s; m++) {
        const S = m / s, w = d.length;
        d.push([
          r[0] + (f[0] - r[0]) * S,
          r[1] + (f[1] - r[1]) * S,
          r[2] + (f[2] - r[2]) * S
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
      if (n !== 0 && l === 0) c.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let m = 1; m < d.length; m++) m === 0 || m === 3 || c.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let m = 1; m < d.length; m++) m === 0 || m === 3 || c.set(m, [
        m === 2 ? n : 0,
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
      }), Ze();
    }
    function us() {
      const t = le("dx"), o = le("dy"), n = le("dz"), l = Math.round(le("stories")), s = Math.max(1, Math.round(le("nSub") || 3)), d = [];
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
        const T = d[p], k = d[h];
        let M = p;
        for (let P = 1; P < s; P++) {
          const B = P / s, x = r.length;
          r.push([
            T[0] + (k[0] - T[0]) * B,
            T[1] + (k[1] - T[1]) * B,
            T[2] + (k[2] - T[2]) * B
          ]), f.push([
            M,
            x
          ]), M = x;
        }
        f.push([
          M,
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
      const m = le("Ex") ?? 0, S = (le("CM") ?? 0) + (le("CV") ?? 0), w = a - 2, y = /* @__PURE__ */ new Map();
      if (m !== 0 && S === 0) y.set(w, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && m === 0) for (let p = 0; p < r.length; p++) c.has(p) || y.set(p, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (m !== 0 && S !== 0) for (let p = 0; p < r.length; p++) c.has(p) || y.set(p, [
        p === w ? m : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), Ze();
    }
    function ha() {
      const t = le("L"), o = Math.round(le("nElem")), n = le("F"), l = t / o, s = [], d = [];
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
      }), Ze();
    }
    function ms() {
      const t = le("Lx") || 15, o = le("Ly") || 10, n = le("meshSize") || 0.5, l = le("q") || -3, s = le("t") || 1, d = le("E") || 3e7, a = le("nu") || 0.3, r = d / (2 * (1 + a)), f = Le === 1 ? "Membrana" : Le === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: c, boundaryIndices: m } = go({
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
      }), S = t * o, w = l * S / i.length, y = new Map(m.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(i.map((h, T) => [
        T,
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
        elasticities: new Map(c.map((h, T) => [
          T,
          d
        ])),
        elasticitiesOrthogonal: new Map(c.map((h, T) => [
          T,
          d
        ])),
        thicknesses: new Map(c.map((h, T) => [
          T,
          s
        ])),
        poissonsRatios: new Map(c.map((h, T) => [
          T,
          a
        ])),
        shearModuli: new Map(c.map((h, T) => [
          T,
          r
        ]))
      });
      try {
        const h = Ct(i, c, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const T = Io(i, c, e.elementInputs.val, h);
        T && e.analyzeOutputs && (e.analyzeOutputs.val = T), console.log(`Plate 3Q [${f}]: ${i.length} nodes, ${c.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function bs() {
      const t = le("Lx") || 10, o = le("Ly") || 10, n = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), s = le("t") || 0.2, d = le("q") || -10, a = le("E") || 3e7, r = le("nu") || 0.3, f = xt === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0;
      return Ke.plateQ4(t, o, n, l, f, d, s, a, r, c);
    }
    function gs() {
      const t = le("a") || 6, o = le("b") || 4, n = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), s = le("t") || 0.1, d = le("q") || -10, a = le("E") || 35e6, r = le("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0, c = Ke.plateQ4(t, o, n, l, "simply-supported", d, s, a, r, i), m = a * s * s * s / (12 * (1 - r * r));
      let S = 0;
      for (let w = 1; w <= 19; w += 2) for (let y = 1; y <= 19; y += 2) {
        const p = w * w / (t * t) + y * y / (o * o);
        S += 1 / (w * y * p * p);
      }
      if (S *= 16 * Math.abs(d) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), c) {
        const w = Math.abs((Math.abs(c.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return c;
    }
    function hs() {
      const t = le("t") || 0.2, o = le("q") || -10, n = le("E") || 35e6, l = le("nu") || 0.2, s = le("meshSize") || 0.6, d = [
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
      const m = Math.max(2, Math.round(r / s)), S = Math.max(2, Math.round(f / s)), w = r / m, y = f / S, p = [];
      for (let g = 0; g <= S; g++) for (let E = 0; E <= m; E++) p.push([
        E * w,
        g * y
      ]);
      const h = [], T = /* @__PURE__ */ new Set();
      for (const g of i) for (const E of c) {
        let v = 1 / 0, C = 0;
        for (let X = 0; X < p.length; X++) {
          const V = Math.hypot(p[X][0] - g, p[X][1] - E);
          V < v && (v = V, C = X);
        }
        T.has(C) || (T.add(C), h.push({
          node: C,
          dof: 0,
          k: 1e15
        }));
      }
      const M = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][M]}]: ${r}\xD7${f}m, ${m}\xD7${S} elem, ${T.size} columnas`);
      const P = performance.now(), B = Un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: m,
        meshNy: S,
        bcType: "none",
        pressure: o,
        theoryType: M,
        springs: h
      }), x = performance.now() - P;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${B.maxW.toExponential(4)}`);
      const u = B.nodeResults.map((g) => [
        g.x,
        g.y,
        0
      ]), I = B.elementResults.map((g) => [
        ...g.nodes
      ]);
      e.nodes.val = u, e.elements.val = I;
      const L = /* @__PURE__ */ new Map();
      B.nodeResults.forEach((g, E) => {
        L.set(E, [
          0,
          0,
          g.w,
          g.bx,
          g.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: L
      });
      const R = /* @__PURE__ */ new Map();
      for (const g of T) R.set(g, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const j = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const g = o * r * f / u.length;
        u.forEach((E, v) => {
          R.has(v) || j.set(v, [
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
        supports: R,
        loads: j
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const g = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        B.elementResults.forEach((C, X) => {
          g.set(X, [
            C.Mxx,
            C.Mxx,
            C.Mxx
          ]), E.set(X, [
            C.Myy,
            C.Myy,
            C.Myy
          ]), v.set(X, [
            C.Mxy,
            C.Mxy,
            C.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: g,
          bendingYY: E,
          bendingXY: v
        };
      }
      setTimeout(() => It(), 50), Ze();
    }
    function xs() {
      const t = le("L") || 4, o = le("H") || 2, n = le("t") || 0.1, l = le("E") || 2e7, s = le("nu") || 0.2, d = l / (2 * (1 + s)), a = le("q") || -100, r = le("b") || 0.8, f = le("meshSize") || 0.2, { nodes: i, elements: c, boundaryIndices: m } = go({
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
      }), S = i, w = 0.4, y = /* @__PURE__ */ new Map();
      for (let x = 0; x < S.length; x++) {
        const u = S[x][0], I = S[x][1];
        Math.abs(I) < 1e-6 && (u <= w + 1e-6 || u >= t - w - 1e-6) && y.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - r) / 2, h = p + r, T = [];
      for (let x = 0; x < S.length; x++) if (Math.abs(S[x][1] - o) < 1e-6) {
        const u = S[x][0];
        u >= p - 1e-6 && u <= h + 1e-6 && T.push(x);
      }
      const k = a * r / Math.max(T.length, 1), M = /* @__PURE__ */ new Map();
      for (const x of T) M.set(x, [
        0,
        k,
        0,
        0,
        0,
        0
      ]);
      const P = {
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
          n
        ])),
        poissonsRatios: new Map(c.map((x, u) => [
          u,
          s
        ])),
        shearModuli: new Map(c.map((x, u) => [
          u,
          d
        ]))
      }, B = {
        supports: y,
        loads: M
      };
      try {
        const x = Ct(S, c, B, P), u = Io(S, c, P, x), I = S.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = I, e.elements.val = c, x && x.deformations) {
          const R = /* @__PURE__ */ new Map();
          x.deformations.forEach((j, g) => {
            R.set(g, [
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
          y.forEach((g, E) => R.set(E, g));
          const j = /* @__PURE__ */ new Map();
          M.forEach((g, E) => j.set(E, [
            g[0],
            g[2],
            g[1],
            g[3],
            g[5],
            g[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: j
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        x && x.deformations && x.deformations.forEach((R) => {
          const j = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          L = Math.max(L, j);
        }), console.log(`Viga Alta: ${S.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function vs() {
      const t = le("H") || 4, o = le("B") || 3, n = le("tw") || 0.3, l = le("tb") || 0.4, s = le("meshSize") || 0.2, d = le("E") || 25e6, a = le("nu") || 0.2, r = d / (2 * (1 + a)), f = le("gamma") || 18, i = le("Ka") || 0.33, c = le("Es") || 5e4, m = le("nus") || 0.3, S = c / (2 * (1 + m)), w = le("kn") || 1e6, y = le("ks") || 1e4, p = le("gammaW") || 9.81, h = le("Hw") || 3.5, T = le("qs") || 0, k = xt, M = o * 0.3, P = o * 0.7, B = [
        [
          -M,
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
          -M,
          l,
          0
        ]
      ];
      let x = [], u = [], I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), R;
      if (k === 0) {
        const E = go({
          points: B,
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
        for (let C = 0; C < x.length; C++) Math.abs(x[C][1]) < 1e-6 && I.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let C = 0; C < x.length; C++) {
          const X = x[C][0], V = x[C][1];
          Math.abs(X - n) < s * 0.6 && V >= l - 1e-6 && v.push({
            idx: C,
            y: V
          });
        }
        v.sort((C, X) => C.y - X.y);
        for (let C = 0; C < v.length; C++) {
          const { idx: X, y: V } = v[C], ae = l + t - V, Z = i * f * ae + i * T;
          let K = s;
          C > 0 && C < v.length - 1 ? K = (v[C + 1].y - v[C - 1].y) / 2 : C === 0 && v.length > 1 ? K = (v[1].y - v[0].y) / 2 : C === v.length - 1 && v.length > 1 && (K = (v[C].y - v[C - 1].y) / 2);
          const de = Z * K;
          Math.abs(de) > 1e-10 && L.set(X, [
            de,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((C, X) => [
            X,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((C, X) => [
            X,
            d
          ])),
          thicknesses: new Map(u.map((C, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(u.map((C, X) => [
            X,
            a
          ])),
          shearModuli: new Map(u.map((C, X) => [
            X,
            r
          ]))
        };
      } else if (k === 1 || k === 2) {
        const E = P, v = l + t;
        if (k === 2) {
          const C = [
            [
              -M,
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
              -M,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((v - l) / s)), V = [];
          for (let se = 0; se <= X; se++) V.push([
            n,
            l + se * (v - l) / X,
            0
          ]);
          const ae = go({
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
            maxMeshSize: s
          });
          x = ae.nodes, u = ae.elements;
          const Z = s * 0.4, K = [];
          for (let se = 0; se < x.length; se++) {
            const Se = x[se][0], je = x[se][1];
            Math.abs(Se - n) < Z && je >= l - Z && K.push(se);
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
          const Ie = u.length, Pe = [];
          for (let se = 0; se < Ie; se++) {
            const Se = u[se], je = (x[Se[0]][0] + x[Se[1]][0] + x[Se[2]][0]) / 3, rt = (x[Se[0]][1] + x[Se[1]][1] + x[Se[2]][1]) / 3, ct = je >= -M && je <= P && rt >= 0 && rt <= l, Lt = je >= 0 && je <= n && rt >= l && rt <= l + t, _t = ct || Lt;
            if (Pe.push(!_t), !_t) for (let Rt = 0; Rt < Se.length; Rt++) {
              const Dt = re.get(Se[Rt]);
              Dt !== void 0 && (Se[Rt] = Dt);
            }
          }
          const _ = u.length;
          for (let se = 0; se < K.length - 1; se++) {
            const Se = K[se], je = K[se + 1], rt = re.get(Se), ct = re.get(je);
            u.push([
              je,
              Se,
              rt,
              ct
            ]);
          }
          const fe = u.length - _, ne = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
          for (let se = 0; se < Ie; se++) Pe[se] ? (ne.set(se, c), pe.set(se, c), ue.set(se, m), we.set(se, S), ee.set(se, 1)) : (ne.set(se, d), pe.set(se, d), ue.set(se, a), we.set(se, r), ee.set(se, 1));
          for (let se = _; se < u.length; se++) ne.set(se, w), pe.set(se, 0), ue.set(se, 0), we.set(se, y), ee.set(se, 0);
          R = {
            elasticities: ne,
            elasticitiesOrthogonal: pe,
            thicknesses: ee,
            poissonsRatios: ue,
            shearModuli: we
          };
          for (let se = 0; se < x.length; se++) {
            const Se = x[se][0], je = x[se][1];
            Math.abs(je) < 1e-6 ? I.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - E) < s * 0.1 && I.set(se, [
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
            const Se = u[se], je = x[Se[0]], rt = x[Se[1]], ct = x[Se[2]], Lt = Math.abs((rt[0] - je[0]) * (ct[1] - je[1]) - (ct[0] - je[0]) * (rt[1] - je[1])) / 2, _t = -f * Lt / 3;
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
          if (T > 0) {
            const se = [];
            for (let Se = 0; Se < x.length; Se++) {
              const je = x[Se][0], rt = x[Se][1];
              Math.abs(rt - v) < s * 0.1 && je > n - 1e-6 && se.push({
                idx: Se,
                x: je
              });
            }
            se.sort((Se, je) => Se.x - je.x);
            for (let Se = 0; Se < se.length; Se++) {
              let je = s;
              Se > 0 && Se < se.length - 1 ? je = (se[Se + 1].x - se[Se - 1].x) / 2 : Se === 0 && se.length > 1 ? je = (se[1].x - se[0].x) / 2 : Se === se.length - 1 && se.length > 1 && (je = (se[Se].x - se[Se - 1].x) / 2);
              const rt = -T * je, ct = L.get(se[Se].idx) || [
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
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${fe} elem interfaz, kn=${w}, ks=${y}`);
        } else {
          const C = [
            [
              -M,
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
              -M,
              l,
              0
            ]
          ], X = [
            [
              n,
              l,
              0
            ]
          ], V = go({
            points: [
              ...C,
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
          const ae = (_) => {
            const fe = (x[_[0]][0] + x[_[1]][0] + x[_[2]][0]) / 3, ne = (x[_[0]][1] + x[_[1]][1] + x[_[2]][1]) / 3, pe = fe >= -M && fe <= P && ne >= 0 && ne <= l, ee = fe >= 0 && fe <= n && ne >= l && ne <= l + t;
            return pe || ee;
          }, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = [];
          for (let _ = 0; _ < u.length; _++) {
            const fe = ae(u[_]);
            Pe.push(!fe), fe ? (Z.set(_, d), K.set(_, d), re.set(_, a), Ie.set(_, r), de.set(_, 1)) : (Z.set(_, c), K.set(_, c), re.set(_, m), Ie.set(_, S), de.set(_, 1));
          }
          R = {
            elasticities: Z,
            elasticitiesOrthogonal: K,
            thicknesses: de,
            poissonsRatios: re,
            shearModuli: Ie
          };
          for (let _ = 0; _ < x.length; _++) {
            const fe = x[_][0], ne = x[_][1];
            Math.abs(ne) < 1e-6 ? I.set(_, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - E) < s * 0.1 && I.set(_, [
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
            const fe = u[_], ne = x[fe[0]], pe = x[fe[1]], ee = x[fe[2]], ue = Math.abs((pe[0] - ne[0]) * (ee[1] - ne[1]) - (ee[0] - ne[0]) * (pe[1] - ne[1])) / 2, we = -f * ue / 3;
            for (const se of fe) {
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
          if (T > 0) {
            const _ = [];
            for (let fe = 0; fe < x.length; fe++) {
              const ne = x[fe][0], pe = x[fe][1];
              Math.abs(pe - v) < s * 0.1 && ne > n - 1e-6 && _.push({
                idx: fe,
                x: ne
              });
            }
            _.sort((fe, ne) => fe.x - ne.x);
            for (let fe = 0; fe < _.length; fe++) {
              let ne = s;
              fe > 0 && fe < _.length - 1 ? ne = (_[fe + 1].x - _[fe - 1].x) / 2 : fe === 0 && _.length > 1 ? ne = (_[1].x - _[0].x) / 2 : fe === _.length - 1 && _.length > 1 && (ne = (_[fe].x - _[fe - 1].x) / 2);
              const pe = -T * ne, ee = L.get(_[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += pe, L.set(_[fe].idx, ee);
            }
          }
        }
      }
      if (k === 3) {
        const E = go({
          points: B,
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
        for (let ae = 0; ae < x.length; ae++) Math.abs(x[ae][1]) < 1e-6 && I.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, C = Math.min(h, t), X = v - C, V = [];
        for (let ae = 0; ae < x.length; ae++) {
          const Z = x[ae][0], K = x[ae][1];
          Math.abs(Z - n) < s * 0.6 && K >= l - 1e-6 && V.push({
            idx: ae,
            y: K
          });
        }
        V.sort((ae, Z) => ae.y - Z.y);
        for (let ae = 0; ae < V.length; ae++) {
          const { idx: Z, y: K } = V[ae], de = Math.max(0, v - K);
          if (de <= 0 || K < X - 1e-6) continue;
          const re = Math.min(de, C), Ie = p * re;
          let Pe = s;
          ae > 0 && ae < V.length - 1 ? Pe = (V[ae + 1].y - V[ae - 1].y) / 2 : ae === 0 && V.length > 1 ? Pe = (V[1].y - V[0].y) / 2 : ae === V.length - 1 && V.length > 1 && (Pe = (V[ae].y - V[ae - 1].y) / 2);
          const _ = Ie * Pe;
          Math.abs(_) > 1e-10 && L.set(Z, [
            _,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((ae, Z) => [
            Z,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, Z) => [
            Z,
            d
          ])),
          thicknesses: new Map(u.map((ae, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(u.map((ae, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(u.map((ae, Z) => [
            Z,
            r
          ]))
        };
      }
      const j = {
        supports: I,
        loads: L
      }, g = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const E = Ct(x, u, j, R), v = u.filter((de) => de.length === 3), C = {};
        for (const de of Object.keys(R)) {
          const re = R[de];
          if (re && re instanceof Map) {
            const Ie = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let _ = 0; _ < u.length; _++) u[_].length === 3 && (re.has(_) && Ie.set(Pe, re.get(_)), Pe++);
            C[de] = Ie;
          }
        }
        const X = Io(x, v, C, E), V = x.map((de) => [
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
        I.forEach((de, re) => ae.set(re, de));
        const Z = /* @__PURE__ */ new Map();
        L.forEach((de, re) => Z.set(re, [
          de[0],
          de[2],
          de[1],
          de[3],
          de[5],
          de[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let K = 0;
        E && E.deformations && E.deformations.forEach((de) => {
          const re = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          K = Math.max(K, re);
        }), console.log(`Muro Contencion [${g[k]}]: ${x.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${i}, gamma=${f}, qs=${T}`), k === 1 && console.log(`  Es=${c}, nus=${m}`), k === 2 && console.log(`  Es=${c}, nus=${m}, kn=${w}, ks=${y}`), k === 3 && console.log(`  gammaW=${p}, Hw=${h}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (E) {
        console.warn("Muro Contencion failed:", E.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function ys() {
      const t = le("Lx") || 2, o = le("Ly") || 2, n = le("t") || 0.5, l = le("colA") || 0.4, s = le("colH") || 1.5, d = Math.round(le("nx") || 8), a = Math.round(le("ny") || 8), r = le("E") || 25e6, f = le("nu") || 0.2, i = le("P") || -500, c = le("Mx") || 0, m = le("My") || 0, S = le("ks") || 2e4, w = t / d, y = o / a, p = t / 2, h = o / 2, T = l / 2, k = [];
      for (let I = 0; I <= a; I++) for (let L = 0; L <= d; L++) {
        const R = I * (d + 1) + L;
        let j = w, g = y;
        (L === 0 || L === d) && (j = w / 2), (I === 0 || I === a) && (g = y / 2), k.push({
          node: R,
          dof: 0,
          k: S * j * g
        });
      }
      let M = 0;
      for (let I = 0; I <= a; I++) for (let L = 0; L <= d; L++) Math.abs(L * w - p) <= T + 1e-6 && Math.abs(I * y - h) <= T + 1e-6 && M++;
      const P = i / Math.max(M, 1), B = [];
      for (let I = 0; I <= a; I++) for (let L = 0; L <= d; L++) {
        const R = L * w, j = I * y;
        Math.abs(R - p) <= T + 1e-6 && Math.abs(j - h) <= T + 1e-6 && B.push({
          node: I * (d + 1) + L,
          dof: 0,
          value: P
        });
      }
      if (Math.abs(c) > 1e-6) {
        const I = T > 1e-6 ? T : y, L = c / I;
        for (let R = 0; R <= a; R++) for (let j = 0; j <= d; j++) {
          const g = j * w, E = R * y;
          if (Math.abs(g - p) <= T + 1e-6 && Math.abs(E - h) <= T + 1e-6) {
            const v = E - h;
            if (Math.abs(v) > 1e-6) {
              const C = v > 0 ? 1 : -1;
              B.push({
                node: R * (d + 1) + j,
                dof: 0,
                value: C * L / M * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const I = T > 1e-6 ? T : w, L = m / I;
        for (let R = 0; R <= a; R++) for (let j = 0; j <= d; j++) {
          const g = j * w, E = R * y;
          if (Math.abs(g - p) <= T + 1e-6 && Math.abs(E - h) <= T + 1e-6) {
            const v = g - p;
            if (Math.abs(v) > 1e-6) {
              const C = v > 0 ? 1 : -1;
              B.push({
                node: R * (d + 1) + j,
                dof: 0,
                value: C * L / M * 2
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
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${i}, Mx=${c}, My=${m}, ks=${S}`);
      try {
        const I = Un({
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
          springs: k,
          pointLoads: B
        });
        console.log(`  Solved: w_max = ${I.maxW.toExponential(4)}`);
        const L = I.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), R = L.length;
        L.push([
          p - T,
          h - T,
          0
        ]), L.push([
          p + T,
          h - T,
          0
        ]), L.push([
          p + T,
          h + T,
          0
        ]), L.push([
          p - T,
          h + T,
          0
        ]), L.push([
          p - T,
          h - T,
          s
        ]), L.push([
          p + T,
          h - T,
          s
        ]), L.push([
          p + T,
          h + T,
          s
        ]), L.push([
          p - T,
          h + T,
          s
        ]);
        const j = I.elementResults.map((X) => [
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
        ]), e.nodes.val = L, e.elements.val = j;
        const g = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((X, V) => {
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
        I.nodeResults.forEach((X, V) => {
          const ae = X.x, Z = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && E.set(V, [
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
          const X = I.elementResults.length, V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          I.elementResults.forEach((K, de) => {
            V.set(de, [
              K.Mxx,
              K.Mxx,
              K.Mxx
            ]), ae.set(de, [
              K.Myy,
              K.Myy,
              K.Myy
            ]), Z.set(de, [
              K.Mxy,
              K.Mxy,
              K.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: V,
            bendingYY: ae,
            bendingXY: Z
          };
        }
        const C = et();
        C && (C.settings.shellResults.val = "bendingXX");
      } catch (I) {
        console.warn("Zapata solver failed:", I.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function $s() {
      const t = le("Lx") || 0.4, o = le("Ly") || 0.4, n = le("t") || 0.025, l = le("dBolt") || 0.022, s = le("sx") || 0.28, d = le("sy") || 0.28, a = le("colA") || 0.2, r = le("meshSize") || 8e-3, f = le("E") || 2e8, i = le("nu") || 0.3, c = f / (2 * (1 + i)), m = le("P") || -200, S = Math.round(le("nBolts") || 4), w = t / 2, y = o / 2, p = l / 2, h = a / 2, T = [];
      S >= 4 && (T.push([
        w - s / 2,
        y - d / 2
      ]), T.push([
        w + s / 2,
        y - d / 2
      ]), T.push([
        w + s / 2,
        y + d / 2
      ]), T.push([
        w - s / 2,
        y + d / 2
      ])), S >= 6 && (T.push([
        w,
        y - d / 2
      ]), T.push([
        w,
        y + d / 2
      ])), S >= 8 && (T.push([
        w - s / 2,
        y
      ]), T.push([
        w + s / 2,
        y
      ]));
      const { nodes: k, elements: M } = go({
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
      }), P = (g, E) => {
        for (const [v, C] of T) if ((g - v) * (g - v) + (E - C) * (E - C) < p * p) return true;
        return false;
      }, B = M.filter((g) => {
        const E = (k[g[0]][0] + k[g[1]][0] + k[g[2]][0]) / 3, v = (k[g[0]][1] + k[g[1]][1] + k[g[2]][1]) / 3;
        return !P(E, v);
      }), x = k, u = /* @__PURE__ */ new Map();
      for (let g = 0; g < x.length; g++) {
        const E = x[g][0], v = x[g][1];
        for (const [C, X] of T) {
          const V = Math.sqrt((E - C) * (E - C) + (v - X) * (v - X));
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
      const I = /* @__PURE__ */ new Map();
      let L = 0;
      for (let g = 0; g < x.length; g++) {
        const E = x[g][0], v = x[g][1];
        Math.abs(E - w) <= h && Math.abs(v - y) <= h && L++;
      }
      const R = m / Math.max(L, 1);
      for (let g = 0; g < x.length; g++) {
        const E = x[g][0], v = x[g][1];
        if (Math.abs(E - w) <= h && Math.abs(v - y) <= h) {
          const C = I.get(g) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += R, I.set(g, C);
        }
      }
      const j = {
        elasticities: new Map(B.map((g, E) => [
          E,
          f
        ])),
        elasticitiesOrthogonal: new Map(B.map((g, E) => [
          E,
          f
        ])),
        thicknesses: new Map(B.map((g, E) => [
          E,
          n
        ])),
        poissonsRatios: new Map(B.map((g, E) => [
          E,
          i
        ])),
        shearModuli: new Map(B.map((g, E) => [
          E,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${B.length} triangulos, ${x.length} nodos`);
      try {
        const g = Ct(x, B, {
          supports: u,
          loads: I
        }, j), E = Io(x, B, j, g);
        e.nodes.val = x, e.elements.val = B, g && e.deformOutputs && (e.deformOutputs.val = g), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: I
        }), e.elementInputs && (e.elementInputs.val = {}), E && e.analyzeOutputs && (e.analyzeOutputs.val = E);
        let v = 0;
        g && g.deformations && g.deformations.forEach((C) => {
          const X = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (g) {
        console.warn("Placa Base failed:", g.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function Ms() {
      const t = le("colB") || 0.3, o = le("colH") || 0.3, n = le("colT") || 8e-3, l = le("colLen") || 1.5, s = le("Lx") || 0.45, d = le("Ly") || 0.45, a = le("tPlaca") || 0.025, r = le("dBolt") || 0.022, f = le("sx") || 0.32, i = le("sy") || 0.32, c = Math.round(le("nSubColV") || 6), m = Math.round(le("nSubColH") || 4), S = Math.round(le("nSubPlaca") || 10), w = le("E") || 2e8, y = le("nu") || 0.3, p = w / (2 * (1 + y)), h = le("P") || -300, T = s / 2, k = d / 2, M = r / 2, P = t / 2, B = o / 2, x = [], u = [], I = S, L = s / I, R = d / I, j = (pe, ee) => ee * (I + 1) + pe;
      for (let pe = 0; pe <= I; pe++) for (let ee = 0; ee <= I; ee++) x.push([
        ee * L,
        pe * R,
        0
      ]);
      const g = [
        [
          T - f / 2,
          k - i / 2
        ],
        [
          T + f / 2,
          k - i / 2
        ],
        [
          T + f / 2,
          k + i / 2
        ],
        [
          T - f / 2,
          k + i / 2
        ]
      ], E = (pe, ee) => {
        for (const [ue, we] of g) if ((pe - ue) * (pe - ue) + (ee - we) * (ee - we) < M * M) return true;
        return false;
      }, v = u.length;
      for (let pe = 0; pe < I; pe++) for (let ee = 0; ee < I; ee++) {
        const ue = (ee + 0.5) * L, we = (pe + 0.5) * R;
        E(ue, we) || u.push([
          j(ee, pe),
          j(ee + 1, pe),
          j(ee + 1, pe + 1),
          j(ee, pe + 1)
        ]);
      }
      const C = u.length - v, X = c, V = m, ae = [
        [
          T - P,
          k - B
        ],
        [
          T + P,
          k - B
        ],
        [
          T + P,
          k + B
        ],
        [
          T - P,
          k + B
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
      ], de = (pe, ee) => {
        for (let ue = 0; ue < (I + 1) * (I + 1); ue++) if (Math.abs(x[ue][0] - pe) < L * 0.3 && Math.abs(x[ue][1] - ee) < R * 0.3 && Math.abs(x[ue][2]) < 1e-6) return ue;
        return -1;
      };
      for (const [pe, ee] of K) {
        const [ue, we] = ae[pe], [se, Se] = ae[ee], je = [];
        for (let rt = 0; rt <= X; rt++) {
          const ct = [], Lt = rt / X * l;
          for (let _t = 0; _t <= V; _t++) {
            const Rt = _t / V, Dt = ue + Rt * (se - ue), Eo = we + Rt * (Se - we);
            if (rt === 0) {
              const Vt = de(Dt, Eo);
              if (Vt >= 0) {
                ct.push(Vt);
                continue;
              }
            }
            let ao = -1;
            for (let Vt = 0; Vt < x.length; Vt++) if (Math.abs(x[Vt][0] - Dt) < 1e-6 && Math.abs(x[Vt][1] - Eo) < 1e-6 && Math.abs(x[Vt][2] - Lt) < 1e-6) {
              ao = Vt;
              break;
            }
            ao >= 0 ? ct.push(ao) : (ct.push(x.length), x.push([
              Dt,
              Eo,
              Lt
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
      const re = u.length - Z, Ie = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (I + 1) * (I + 1); pe++) {
        const ee = x[pe][0], ue = x[pe][1];
        for (const [we, se] of g) {
          const Se = Math.sqrt((ee - we) * (ee - we) + (ue - se) * (ue - se));
          Se >= M * 0.5 && Se <= M * 2 && Ie.set(pe, [
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
      for (let pe = 0; pe < x.length; pe++) Math.abs(x[pe][2] - l) < 1e-6 && _.push(pe);
      const fe = h / Math.max(_.length, 1);
      for (const pe of _) Pe.set(pe, [
        0,
        0,
        fe,
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
      for (let pe = v; pe < v + C; pe++) ne.elasticities.set(pe, w), ne.poissonsRatios.set(pe, y), ne.thicknesses.set(pe, a), ne.shearModuli.set(pe, p);
      for (let pe = Z; pe < Z + re; pe++) ne.elasticities.set(pe, w), ne.poissonsRatios.set(pe, y), ne.thicknesses.set(pe, n), ne.shearModuli.set(pe, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${C} Q4 placa + ${re} Q4 columna = ${u.length} total`), console.log(`  ${x.length} nodos, P=${h} kN`);
      try {
        const pe = Ct(x, u, {
          supports: Ie,
          loads: Pe
        }, ne), ee = Io(x, u, ne, pe);
        e.nodes.val = x, e.elements.val = u, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Pe
        }), e.elementInputs && (e.elementInputs.val = ne), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let ue = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((we) => {
          const se = Math.sqrt(we[0] * we[0] + we[1] * we[1] + we[2] * we[2]);
          ue = Math.max(ue, se);
        }), console.log(`  max|u| = ${ue.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = x, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Pe
        });
      }
      setTimeout(() => It(), 50), Ze();
    }
    function ws() {
      const t = le("H") || 6, o = le("angle") || 45, n = le("bTop") || 3, l = le("bBot") || 3, s = le("meshSize") || 2, d = le("E") || 5e4, a = le("nu") || 0.3, r = le("gamma") || 18, f = le("c") || 15, i = le("phi") || 30, c = le("qs") || 0, m = t / Math.tan(o * Math.PI / 180), S = l + m + n, w = t, y = [
        [
          0,
          -w,
          0
        ],
        [
          S,
          -w,
          0
        ],
        [
          S,
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
      ], { nodes: p, elements: h } = go({
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
      }), T = p, k = [], M = /* @__PURE__ */ new Map();
      for (let B = 0; B < T.length; B++) {
        const x = T[B][0], u = T[B][1];
        Math.abs(u + w) < 1e-6 ? (k.push({
          node: B,
          fixX: true,
          fixY: true
        }), M.set(B, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - S) < 1e-6) && (k.push({
          node: B,
          fixX: true,
          fixY: false
        }), M.set(B, [
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
        const B = T.map((E) => [
          E[0],
          E[1]
        ]), x = h.map((E) => [
          E[0],
          E[1],
          E[2]
        ]), u = Va({
          nodes: B,
          elements: x,
          E: d,
          nu: a,
          gamma: r,
          c: f,
          phi: i,
          thickness: 1,
          supports: k,
          surcharge: c,
          surfaceYThreshold: P
        }), I = T.map((E) => [
          E[0],
          0,
          E[1]
        ]);
        e.nodes.val = I, e.elements.val = h;
        const L = /* @__PURE__ */ new Map();
        for (let E = 0; E < u.displacements.length; E++) {
          const [v, C] = u.displacements[E];
          L.set(E, [
            v,
            0,
            C,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: L
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: M
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
          const C = Math.sqrt(E * E + v * v);
          j = Math.max(j, C);
        }
        let g = 0;
        for (const E of u.plasticStrain) g = Math.max(g, E);
        console.log(`Talud SRM: ${T.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${f} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${j.toExponential(4)}`), console.log(`  max \u03B5_pl = ${g.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (B) {
        console.warn("Talud SRM failed:", B.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    let io = null, zt = null, co = null;
    function xa() {
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
    function $t(t) {
      const o = Vo.find((n) => n.id === F);
      return t / o.toM;
    }
    function Mt(t) {
      const o = Vo.find((n) => n.id === F);
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
    function va() {
      switch (Vo.find((o) => o.id === F).id) {
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
    function ya() {
      const t = To(20594), o = To(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Es(t, o, n, l, s) {
      const d = Ne.steelVigaType, a = d === 0 ? mn() : bn();
      if (Ne.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], i = `b${n}${r}`, c = `h${n}${r}`, m = {};
          m[i] = +$t(f.b).toFixed(2), m[c] = +$t(f.h).toFixed(2), t.addBinding(m, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(m, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, i = f == null ? void 0 : f.match(new RegExp(`^b${n}(\\d+)$`)), c = f == null ? void 0 : f.match(new RegExp(`^h${n}(\\d+)$`));
          i && (o[parseInt(i[1])].b = Mt(r.value), Re()), c && (o[parseInt(c[1])].h = Mt(r.value), Re());
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
          const i = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          i && (o[parseInt(i[1])].profileIdx = r.value, Re());
        });
      } else if (d === 2) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], i = {}, c = `${n}${r}`;
          i[`bf${c}`] = +$t(f.bf ?? 0.2).toFixed(3), i[`h${c}`] = +$t(f.hf ?? 0.4).toFixed(3), i[`tf${c}`] = +$t(f.tf ?? 0.015).toFixed(3), i[`tw${c}`] = +$t(f.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${c}`, {
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
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(i, `tw${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < o.length; i++) {
            const c = `${n}${i}`;
            f === `bf${c}` && (o[i].bf = Mt(r.value), Re()), f === `h${c}` && (o[i].hf = Mt(r.value), Re()), f === `tf${c}` && (o[i].tf = Mt(r.value), Re()), f === `tw${c}` && (o[i].tw = Mt(r.value), Re());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], i = {}, c = `${n}${r}`;
          i[`bc${c}`] = +$t(f.bc ?? 0.2).toFixed(3), i[`hc${c}`] = +$t(f.hc ?? 0.3).toFixed(3), i[`t${c}`] = +$t(f.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${c}`, {
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
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < o.length; i++) {
            const c = `${n}${i}`;
            f === `bc${c}` && (o[i].bc = Mt(r.value), Re()), f === `hc${c}` && (o[i].hc = Mt(r.value), Re()), f === `t${c}` && (o[i].t = Mt(r.value), Re());
          }
        });
      }
    }
    function No() {
      var _a2;
      if (zt) {
        try {
          zt.dispose();
        } catch {
        }
        zt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), z !== "edificio" && z !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = xa();
      if (!o) return;
      o.style.display = "";
      const n = $, l = Math.round(((_a2 = Q.nPisos) == null ? void 0 : _a2.val) ?? 3), s = va(), d = ya(), a = ie.length || 1, r = oe.length || 1;
      for (; Ne.perFloor.length < l; ) {
        const x = Ne.perFloor.length > 0 ? JSON.parse(JSON.stringify(Ne.perFloor[Ne.perFloor.length - 1])) : ro(a, r);
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
      zt = new on({
        title: `Sections (${n.label})`,
        container: o
      });
      const f = {
        colMat: Ne.colMat
      };
      if (zt.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (x) => {
        Ne.colMat = x.value, No(), Re();
      }), Ne.colMat === 0) {
        const x = {
          forma: Ne.colShape
        };
        zt.addBinding(x, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (I) => {
          Ne.colShape = I.value, No(), Re();
        });
        const u = {
          fc: +To(Ne.fc).toFixed(1)
        };
        zt.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${zn()})`
        }), zt.on("change", (I) => {
          var _a3;
          ((_a3 = I.target) == null ? void 0 : _a3.key) === "fc" && (Ne.fc = Tn(I.value), Re());
        });
      } else if (Ne.colMat === 1) {
        const x = {
          colType: Ne.steelColType
        };
        zt.addBinding(x, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Ne.steelColType = u.value, No(), Re();
        });
      }
      zt.addBlade({
        view: "separator"
      });
      const i = {
        vigaMat: Ne.vigaMat
      };
      if (zt.addBinding(i, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (x) => {
        Ne.vigaMat = x.value, No(), Re();
      }), Ne.vigaMat === 1) {
        const x = {
          vigaType: Ne.steelVigaType
        };
        zt.addBinding(x, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Ne.steelVigaType = u.value, No(), Re();
        });
      }
      const c = Ne.steelColType === 0 ? mn() : bn();
      Ne.steelVigaType === 0 ? mn() : bn();
      const m = F === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : F === "cm" ? [
        0.5,
        10,
        0.1
      ] : F === "mm" ? [
        5,
        100,
        1
      ] : F === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let x = 0; x < l; x++) {
        const u = Ne.perFloor[x], I = zt.addFolder({
          title: `Piso ${x + 1}`,
          expanded: x < 2
        });
        if (Ne.colMat === 0) if (Ne.colShape === 1) {
          const L = {
            dCol: +$t(u.dCol).toFixed(2)
          };
          I.addBinding(L, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), I.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Mt(R.value), Re());
          });
        } else {
          const L = {
            bCol: +$t(u.bCol).toFixed(2),
            hCol: +$t(u.hCol).toFixed(2)
          };
          I.addBinding(L, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), I.addBinding(L, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), I.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Mt(R.value), Re()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Mt(R.value), Re());
          });
        }
        else if (Ne.colMat === 1) if (Ne.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          I.addBinding(L, "col", {
            label: "Columna",
            options: c
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Re();
          });
        } else if (Ne.steelColType === 2) {
          const L = {
            bf: +$t(u.colBf ?? 0.3).toFixed(3),
            h: +$t(u.colHf ?? 0.3).toFixed(3),
            tf: +$t(u.colTf ?? 0.02).toFixed(3),
            tw: +$t(u.colTw ?? 0.012).toFixed(3)
          };
          I.addBinding(L, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), I.addBinding(L, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(L, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), I.addBinding(L, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), I.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Mt(R.value), Re()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Mt(R.value), Re()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Mt(R.value), Re()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Mt(R.value), Re());
          });
        } else {
          const L = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3)
          };
          I.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(L, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), I.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(R.value), Re()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(R.value), Re()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(R.value), Re());
          });
        }
        else {
          const L = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3),
            Es: +To(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +To(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          I.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(L, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), I.addBlade({
            view: "separator"
          });
          const R = +To(1e8).toFixed(0), j = +To(3e8).toFixed(0), g = Math.max(1, Math.round((j - R) / 200));
          I.addBinding(L, "Es", {
            min: R,
            max: j,
            step: g,
            label: `Es (${zn()})`
          }), I.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), I.addBinding(L, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${zn()})`
          }), I.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), I.on("change", (E) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = E.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(E.value), Re()), ((_b = E.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(E.value), Re()), ((_c = E.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(E.value), Re()), ((_d = E.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Tn(E.value), Re()), ((_e2 = E.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = E.value, Re()), ((_f = E.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Tn(E.value), Re()), ((_g = E.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = E.value, Re());
          });
        }
        if (u.vigasX.length > 0) {
          const L = I.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Es(L, u.vigasX, "x", s, m);
        }
        if (u.vigasY.length > 0) {
          const L = I.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Es(L, u.vigasY, "y", s, m);
        }
      }
      zt.addBlade({
        view: "separator"
      });
      const S = zt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Ee,
        direccion: Je === "x" ? 0 : 1,
        cantidad: ze
      };
      S.addBinding(w, "activar", {
        label: "Activar"
      }), S.addBinding(w, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), S.addBinding(w, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), S.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ee = x.value, Re()), ((_b = x.target) == null ? void 0 : _b.key) === "direccion" && (Je = x.value === 0 ? "x" : "y", Re()), ((_c = x.target) == null ? void 0 : _c.key) === "cantidad" && (ze = Math.round(x.value), Re());
      }), zt.addBlade({
        view: "separator"
      });
      const y = zt.addFolder({
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
      }), y.on("change", (x) => {
        var _a3, _b, _c, _d;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ue = x.value, Re()), ((_b = x.target) == null ? void 0 : _b.key) === "espesor" && (at = Mt(x.value), Re()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivX" && (dt = Math.round(x.value), Re()), ((_d = x.target) == null ? void 0 : _d.key) === "subdivY" && (yt = Math.round(x.value), Re());
      }), zt.addBlade({
        view: "separator"
      });
      const h = zt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), T = {
        espesor: +$t(Be).toFixed(3),
        subdivH: He,
        subdivW: be
      };
      h.addBinding(T, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), h.addBinding(T, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(T, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "espesor" && (Be = Mt(x.value), Re()), ((_b = x.target) == null ? void 0 : _b.key) === "subdivH" && (He = Math.round(x.value), Re()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(x.value), Re());
      });
      const k = ie.length || 1, M = oe.length || 1, P = k + 1, B = M + 1;
      if (k > 0) {
        const x = h.addFolder({
          title: `Muros dir X (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let I = 0; I < B; I++) {
          const L = `wx_${u}_${I}`, R = he.some((E) => E.dir === "x" && E.bay === u && E.axisIdx === I), j = {};
          j[L] = R;
          const g = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + I)}`;
          x.addBinding(j, L, {
            label: g
          }).on("change", (E) => {
            E.value ? he.push({
              dir: "x",
              bay: u,
              axisIdx: I,
              floors: [
                -1
              ]
            }) : he = he.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === I)), Re();
          });
        }
      }
      if (M > 0) {
        const x = h.addFolder({
          title: `Muros dir Y (${M} vanos)`,
          expanded: false
        });
        for (let u = 0; u < M; u++) for (let I = 0; I < P; I++) {
          const L = `wy_${u}_${I}`, R = he.some((E) => E.dir === "y" && E.bay === u && E.axisIdx === I), j = {};
          j[L] = R;
          const g = `Vano Y${u + 1} / Eje X${I + 1}`;
          x.addBinding(j, L, {
            label: g
          }).on("change", (E) => {
            E.value ? he.push({
              dir: "y",
              bay: u,
              axisIdx: I,
              floors: [
                -1
              ]
            }) : he = he.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === I)), Re();
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
    function so() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (me || (me = t.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
      }
      t.innerHTML = "";
      const o = z.charAt(0).toUpperCase() + z.slice(1);
      ve = new on({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = cs()[z];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = Q[a.key].val;
        for (const a of n) ve.addBinding(s, a.key, {
          min: Q[a.key].min,
          max: Q[a.key].max,
          step: Q[a.key].step,
          label: Q[a.key].label
        });
        const d = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const r = {
            min: Q[a.key].min,
            max: Q[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            Q[a.key] && (Q[a.key].min = r.min, Q[a.key].max = r.max, Q[a.key].val < r.min && (Q[a.key].val = r.min), Q[a.key].val > r.max && (Q[a.key].val = r.max)), so(), Re();
          });
        }
        ve.on("change", (a) => {
          var _a2, _b;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && Q[r]) {
            if (Q[r].val = a.value, z === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(Q.nVanosX.val), i = Math.round(Q.nVanosY.val);
                for (; ie.length < f; ) ie.push(ie[ie.length - 1] ?? $.defaultSpan);
                for (ie.length > f && (ie.length = f); oe.length < i; ) oe.push(oe[oe.length - 1] ?? $.defaultSpan * 0.8);
                oe.length > i && (oe.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const f = Math.round(Q.nPisos.val), i = ((_b = Q.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; N.length < f; ) N.push(N[N.length - 1] ?? i);
                N.length > f && (N.length = f);
              }
              so();
            }
            Re();
          }
        });
      }
      if (z === "edificio") {
        if (co) {
          try {
            co.dispose();
          } catch {
          }
          co = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          let d = function() {
            var _a2, _b, _c, _d;
            const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = Q.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = Q.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = Q.Lviy) == null ? void 0 : _c.val) || 0, S = ((_d = Q.Lvdy) == null ? void 0 : _d.val) || 0;
            let w = "X: ";
            i > 0 && (w += `\u251C${i.toFixed(1)}\u2524`);
            for (let h = 0; h < ie.length; h++) w += `[${f[h + (i > 0 ? 1 : 0)]}]\u2500\u2500${ie[h].toFixed(1)}\u2500\u2500`;
            w += `[${f[ie.length + (i > 0 ? 1 : 0)]}]`, c > 0 && (w += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            m > 0 && (y += `\u251C${m.toFixed(1)}\u2524`);
            for (let h = 0; h < oe.length; h++) y += `[${h + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${oe[h].toFixed(1)}\u2500\u2500`;
            y += `[${oe.length + 1 + (m > 0 ? 1 : 0)}]`, S > 0 && (y += `\u251C${S.toFixed(1)}\u2524`);
            let p = "Z: ";
            for (let h = 0; h < N.length; h++) p += `P${h + 1}=${N[h].toFixed(1)} `;
            r.textContent = w + `
` + y + `
` + p;
          };
          s.innerHTML = "";
          const a = $;
          try {
            co = new on({
              title: `Luces (${a.length})`,
              container: s
            });
            const f = co.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < ie.length; c++) {
              const m = c, S = {
                v: ie[c]
              };
              f.addBinding(S, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (w) => {
                ie[m] = w.value, Re();
              });
            }
            const i = co.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < oe.length; c++) {
              const m = c, S = {
                v: oe[c]
              };
              i.addBinding(S, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (w) => {
                oe[m] = w.value, Re();
              });
            }
            if (N.length > 0) {
              const c = co.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < N.length; m++) {
                const S = m, w = {
                  v: N[m]
                };
                c.addBinding(w, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (y) => {
                  N[S] = y.value, Re();
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
      if (No(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const s = un()[z];
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
            xt = r.value, Re();
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
            Le = a.value, Re();
          });
        }
      }
      const l = ds()[z];
      if (l && l.length > 0) {
        io = new on({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = ft[a.key].val;
        for (const a of l) io.addBinding(s, a.key, {
          min: ft[a.key].min,
          max: ft[a.key].max,
          step: ft[a.key].step,
          label: ft[a.key].label
        });
        const d = io.addFolder({
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
            ft[a.key] && (ft[a.key].min = r.min, ft[a.key].max = r.max, ft[a.key].val < r.min && (ft[a.key].val = r.min), ft[a.key].val > r.max && (ft[a.key].val = r.max)), so(), Re();
          });
        }
        io.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && ft[r]) {
            if (ft[r].val = a.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => Fn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (Q[s]) Q[s].val = d, Re(), so();
          else if (ft[s]) {
            if (ft[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Fn(), so();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in Q) s[d] = Q[d].val;
          for (const d in ft) s[d] = ft[d].val;
          return s;
        },
        setGenerator: Qe,
        createCustomPanel: (s, d, a) => $a(s, d, a),
        removeCustomPanel: (s) => {
          Ss(s);
        }
      };
    }
    const An = /* @__PURE__ */ new Map();
    function $a(t, o, n) {
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
      const d = new on({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(o)) {
        const i = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const c = {
            [r]: f.value.join(", ")
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            a[r] = m.value.split(",").map((S) => parseFloat(S.trim())).filter((S) => !isNaN(S)), n && n({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const c = {
            [r]: f.value
          }, m = {};
          for (const S of f.options) m[S] = S;
          d.addBinding(c, r, {
            label: i,
            options: m
          }).on("change", (S) => {
            a[r] = S.value, n && n({
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
            a[r] = m.value, n && n({
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
            a[r] = m.value, n && n({
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
          f.min !== void 0 && (m.min = f.min), f.max !== void 0 && (m.max = f.max), f.step !== void 0 && (m.step = f.step), d.addBinding(c, r, m).on("change", (S) => {
            a[r] = S.value, n && n({
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
      }), An.set(t, {
        pane: d,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
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
    function Ma() {
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
      }
      if (zt) {
        try {
          zt.dispose();
        } catch {
        }
        zt = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && me && (n.innerHTML = me);
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
  `, document.head.appendChild(Is), Xa() === "light" && document.documentElement.classList.add("awatif-light"), Ka((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), z && It(true);
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
    let At = null;
    function wa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = F, d = b, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${z || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((i, c) => {
        a.push(`  ${String(c).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((i, c) => {
        const m = i.map((S) => String(S).padStart(6)).join("");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((i, c) => {
        const m = i.map((S) => S ? "  1" : "  0").join("");
        a.push(`  ${String(c).padStart(4)} ${m}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((i, c) => {
        const m = i.map((S) => S.toFixed(3).padStart(11)).join(" ");
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
        for (let m = 0; m < o.length; m++) {
          const S = i.map((w) => {
            var _a3;
            const y = (_a3 = w.map) == null ? void 0 : _a3.get(m);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(m).padStart(4)}  ${S}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, c) => {
        const m = i.map((S) => S.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((i, c) => {
        const m = i.map((S) => S.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push("")), z) {
        a.push("## CLI COMMAND");
        const i = Object.entries(Q).map(([c, m]) => `${c}=${m.val}`).join(" ");
        a.push(`cad.${z === "edificio" ? "building" : z}(${i})`);
      }
      return a.join(`
`);
    }
    let Zo = false;
    function Ea() {
      var _a2, _b, _c, _d;
      if (At) {
        At.remove(), At = null, Zo = false;
        return;
      }
      const t = wa();
      At = document.createElement("div"), At.id = "export-overlay", At.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, At.innerHTML = `
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
    `, document.body.appendChild(At), (_a2 = At.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        At == null ? void 0 : At.remove(), At = null, Zo = false;
      }), (_b = At.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = At.querySelector("#export-body"), n = At.querySelector("#export-minimize");
        Zo = !Zo, Zo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", At.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", At.style.width = "720px");
      }), (_c = At.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = At.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = At.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = At.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: z || "custom",
          units: {
            force: b,
            length: F
          },
          nodes: o.map((c, m) => ({
            id: m,
            x: c[0],
            y: c[1],
            z: c[2]
          })),
          elements: n.map((c, m) => ({
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
        const f = At.querySelector("#export-text");
        f.value = JSON.stringify(d, null, 2);
        const i = At.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ze() {
      var _a2, _b, _c;
      const t = Ae.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, r = 0;
        for (const i of n) i.length === 2 ? d++ : i.length === 3 ? a++ : i.length === 4 && r++;
        let f = `${o}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${d}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function Ln() {
      var _a2;
      if (!qe || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = Ja(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Ce = d, ke = t.map((i) => [
            ...i
          ]), xe = 0;
          const { extent: a } = vo(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let c = 0; c < t.length; c++) {
              const m = r[c * 6] || 0, S = r[c * 6 + 1] || 0, w = r[c * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(m * m + S * S + w * w));
            }
            Ge = i > 1e-12 ? a * 0.05 / i : 1;
          }
          const f = `${z} \u2014 ${t.length}n ${o.length}e`;
          it.render(d, {
            title: f
          }), it.div.style.display = "", Qo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Ce = null;
      }
    }
    function Cn() {
      ge && (cancelAnimationFrame(ge), ge = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), it.div.style.display = "none", Ce = null;
    }
    function Qo() {
      var _a2;
      if (ge && cancelAnimationFrame(ge), !(Ce == null ? void 0 : Ce.modeShapes) || !ke.length) return;
      const t = Ce.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Ce.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ke.length, d = e.elements.rawVal, { extent: a } = vo(), r = Ae.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let i = 0;
      for (let M = 0; M < s; M++) {
        const P = t[M * 6] || 0, B = t[M * 6 + 1] || 0, x = t[M * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(P * P + B * B + x * x));
      }
      const c = i > 1e-12 ? a * f / 100 / i : 1, m = et();
      if (!m) return;
      let S = null, w = null, y = null;
      m.scene.traverse((M) => {
        var _a3, _b;
        !S && M.isPoints && M.geometry && (S = M), !w && M.isLineSegments && M.geometry && !M.name && (w = M), !y && M.isMesh && ((_a3 = M.material) == null ? void 0 : _a3.transparent) && ((_b = M.material) == null ? void 0 : _b.opacity) < 0.5 && M.geometry && (y = M);
      });
      const p = new Float32Array(s * 3), h = [];
      for (const M of d) if (M.length === 2) h.push([
        M[0],
        M[1]
      ]);
      else for (let P = 0; P < M.length; P++) h.push([
        M[P],
        M[(P + 1) % M.length]
      ]);
      const T = new Float32Array(h.length * 6);
      function k() {
        const M = (performance.now() - l) / 1e3, P = Math.sin(2 * Math.PI * n * M) * c;
        for (let B = 0; B < s; B++) {
          const x = ke[B];
          p[B * 3] = x[0] + (t[B * 6] || 0) * P, p[B * 3 + 1] = x[1] + (t[B * 6 + 1] || 0) * P, p[B * 3 + 2] = x[2] + (t[B * 6 + 2] || 0) * P;
        }
        if (S) {
          const B = S.geometry, x = B.getAttribute("position");
          x && x.array.length === p.length ? (x.array.set(p), x.needsUpdate = true) : B.setAttribute("position", new Lo(p.slice(), 3));
        }
        if (w) {
          for (let u = 0; u < h.length; u++) {
            const [I, L] = h[u];
            T[u * 6] = p[I * 3], T[u * 6 + 1] = p[I * 3 + 1], T[u * 6 + 2] = p[I * 3 + 2], T[u * 6 + 3] = p[L * 3], T[u * 6 + 4] = p[L * 3 + 1], T[u * 6 + 5] = p[L * 3 + 2];
          }
          const B = w.geometry, x = B.getAttribute("position");
          x && x.array.length === T.length ? (x.array.set(T), x.needsUpdate = true) : B.setAttribute("position", new Lo(T.slice(), 3));
        }
        if (y) {
          const B = [];
          for (const x of d) if (x.length === 3) {
            const [u, I, L] = x;
            B.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), B.push(p[I * 3], p[I * 3 + 1], p[I * 3 + 2]), B.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]);
          } else if (x.length === 4) {
            const [u, I, L, R] = x;
            B.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), B.push(p[I * 3], p[I * 3 + 1], p[I * 3 + 2]), B.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]), B.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), B.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]), B.push(p[R * 3], p[R * 3 + 1], p[R * 3 + 2]);
          }
          if (B.length > 0) {
            const x = y.geometry, u = new Float32Array(B), I = x.getAttribute("position");
            I && I.array.length === u.length ? (I.array.set(u), I.needsUpdate = true) : x.setAttribute("position", new Lo(u, 3));
          }
        }
        m.render(), ge = requestAnimationFrame(k);
      }
      ge = requestAnimationFrame(k);
    }
    function Fn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = le("CM") ?? 0, p = le("CV") ?? 0, h = y + p, T = le("Ex") ?? 0, k = le("Ey") ?? 0;
        if (h === 0 && T === 0 && k === 0) return;
        const M = /* @__PURE__ */ new Map(), P = [];
        for (let E = 0; E < t.length; E++) n.supports.has(E) || P.push(E);
        const B = (E) => Math.round(E * 1e3) / 1e3, x = /* @__PURE__ */ new Set();
        n.supports.forEach((E, v) => {
          x.add(`${B(t[v][0])},${B(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const E of P) x.has(`${B(t[E][0])},${B(t[E][1])}`) && u.add(E);
        const I = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        if (T !== 0 || k !== 0) {
          let E = -1 / 0, v = -1 / 0;
          for (const X of u) E = Math.max(E, B(t[X][0])), v = Math.max(v, B(t[X][1]));
          const C = /* @__PURE__ */ new Map();
          for (const X of u) {
            const V = B(t[X][2]);
            C.has(V) || C.set(V, []), C.get(V).push(X);
          }
          C.forEach((X) => {
            if (T !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (B(t[ae][0]) === E) {
                const Z = B(t[ae][1]);
                V.has(Z) || (V.add(Z), I.add(ae));
              }
            }
            if (k !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const ae of X) if (B(t[ae][1]) === v) {
                const Z = B(t[ae][0]);
                V.has(Z) || (V.add(Z), L.add(ae));
              }
            }
          });
        }
        const R = 9.81, j = /* @__PURE__ */ new Map();
        for (let E = 0; E < o.length; E++) {
          const v = o[E], C = ((_a2 = l.densities) == null ? void 0 : _a2.get(E)) ?? 0;
          if (!(Math.abs(C) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(E)) ?? 0, V = t[v[0]], ae = t[v[1]], Z = Math.sqrt((ae[0] - V[0]) ** 2 + (ae[1] - V[1]) ** 2 + (ae[2] - V[2]) ** 2), de = -(C * X * Z * R) / 2;
              j.set(v[0], (j.get(v[0]) ?? 0) + de), j.set(v[1], (j.get(v[1]) ?? 0) + de);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(E)) ?? 0;
              let V = 0;
              if (v.length === 3) {
                const [K, de, re] = v.map((Ie) => t[Ie]);
                V = 0.5 * Math.abs((de[0] - K[0]) * (re[1] - K[1]) - (re[0] - K[0]) * (de[1] - K[1]));
              } else if (v.length === 4) {
                const [K, de, re, Ie] = v.map((Pe) => t[Pe]);
                if (V = 0.5 * Math.abs((de[0] - K[0]) * (re[1] - K[1]) - (re[0] - K[0]) * (de[1] - K[1])) + 0.5 * Math.abs((re[0] - K[0]) * (Ie[1] - K[1]) - (Ie[0] - K[0]) * (re[1] - K[1])), V < 1e-10) {
                  const Pe = [
                    de[0] - K[0],
                    de[1] - K[1],
                    de[2] - K[2]
                  ], _ = [
                    Ie[0] - K[0],
                    Ie[1] - K[1],
                    Ie[2] - K[2]
                  ], fe = [
                    Pe[1] * _[2] - Pe[2] * _[1],
                    Pe[2] * _[0] - Pe[0] * _[2],
                    Pe[0] * _[1] - Pe[1] * _[0]
                  ];
                  V = Math.sqrt(fe[0] ** 2 + fe[1] ** 2 + fe[2] ** 2);
                }
              }
              const Z = -(C * X * V * R) / v.length;
              for (const K of v) j.set(K, (j.get(K) ?? 0) + Z);
            }
          }
        }
        const g = /* @__PURE__ */ new Set();
        for (const E of o) E.length === 2 && (g.add(E[0]), g.add(E[1]));
        for (const E of P) {
          const v = I.has(E) ? T : 0, C = L.has(E) ? k : 0, X = j.get(E) ?? 0, V = g.has(E) ? h : 0, ae = X + V;
          (v !== 0 || C !== 0 || Math.abs(ae) > 1e-10) && M.set(E, [
            v,
            C,
            ae,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: M
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let d = 0, a = 0, r = 0;
      for (const y of o) y.length === 2 ? d++ : y.length === 3 ? r++ : y.length === 4 && a++;
      const f = ((_d = n.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, m = c - f * 6, S = [], w = (y) => S.push(y);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && w(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && w(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), w(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${i}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${m} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Ct(t, o, n, l), p = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let h = 0, T = -1, k = 0, M = 0;
          y.deformations && y.deformations.forEach((I, L) => {
            const R = Math.sqrt(I[0] * I[0] + I[1] * I[1] + I[2] * I[2]);
            R > h && (h = R, T = L, k = I[0], M = I[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${T})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(k * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(M * 1e3).toFixed(4)} mm`);
          const P = performance.now(), B = Io(t, o, l, y), x = performance.now() - P;
          B && (e.analyzeOutputs.val = B, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${x.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const p = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), qe && setTimeout(() => Ln(), 50);
    }
    function Rn(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), r = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: r
      };
    }
    function ks(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Pn(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, r = (2 * n * t * t * t + s * l * l * l) / 12, f = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function On(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, r = (o * t * t * t - s * l * l * l) / 12, f = (t - n) * (o - n), i = 2 * ((t - n) / n + (o - n) / n), c = 4 * f * f / (i > 0 ? i : 1);
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: c
      };
    }
    function Sa(t, o, n, l, s, d, a) {
      const f = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, i = t - 2 * n, c = o - 2 * n, m = t * o - i * c, S = (t * o * o * o - i * c * c * c) / 12, w = (o * t * t * t - c * i * i * i) / 12, y = i * c, p = i * c * c * c / 12, h = c * i * i * i / 12, T = m + f * y, k = S + f * p, M = w + f * h, P = l / (2 * (1 + s)), B = (t - n) * (o - n), x = 2 * ((t - n) / n + (o - n) / n), u = 4 * B * B / (x > 0 ? x : 1);
      return {
        A: T,
        Iz: k,
        Iy: M,
        J: u,
        Es: l,
        Gs: P,
        A_steel: m,
        A_conc: y
      };
    }
    function xo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = $, n = {
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
      if ((z === "edificio" || z === "frame") && D.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: r, perFloor: f } = Ne, i = 4700 * Math.sqrt(r / 1e3) * 1e3, c = i / (2 * 1.2), m = 24 / 9.80665, S = o.E, w = o.G, y = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (ce.has(p)) {
            const I = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(p, I), n.poissonsRatios.set(p, L), n.thicknesses.set(p, Be), n.shearModuli.set(p, I / (2 * (1 + L))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (Tt.has(p)) {
            const I = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(p, I), n.poissonsRatios.set(p, L), n.thicknesses.set(p, at), n.shearModuli.set(p, I / (2 * (1 + L))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const h = D.has(p), T = $e.get(p) ?? 0, k = f[T] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let M, P, B, x;
          if (h) if (s === 0) P = i, B = c, x = m, M = a === 1 ? ks(k.dCol) : Rn(k.bCol, k.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: k.dCol
          } : {
            type: "rect",
            b: k.bCol,
            h: k.hCol
          });
          else if (s === 1) {
            P = S, B = w, x = y;
            const I = Ne.steelColType;
            if (I <= 1) {
              const L = ko[k.colProfileIdx] ?? ko[0];
              M = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (I === 2) {
              const L = k.colBf ?? 0.3, R = k.colHf ?? 0.3, j = k.colTf ?? 0.02, g = k.colTw ?? 0.012;
              M = Pn(L, R, j, g);
              const E = `I${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: L,
                h: R,
                tf: j,
                tw: g,
                name: E
              });
            } else {
              const L = k.colBc ?? 0.3, R = k.colHc ?? 0.3, j = k.colT ?? 0.01;
              M = On(L, R, j);
              const g = `\u25A1${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(j * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: L,
                h: R,
                tw: j,
                name: g
              });
            }
          } else {
            const I = k.colBc ?? 0.3, L = k.colHc ?? 0.3, R = k.colT ?? 0.01, j = k.colFc ?? 28e3, g = k.colEs ?? 2e8, E = k.colNuS ?? 0.3;
            k.colNuC;
            const v = Sa(I, L, R, g, E, j);
            M = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, P = v.Es, B = v.Gs;
            const C = 7.85, X = 24 / 9.80665;
            x = (C * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const V = `CFT ${(L * 1e3).toFixed(0)}X${(I * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: I,
              h: L,
              tw: R,
              name: V
            });
          }
          else {
            const I = Te.get(p), L = I ? I.dir === "x" ? k.vigasX : k.vigasY : [], R = I ? L[I.bay] ?? L[0] ?? ut() : ut();
            if (d === 0) P = i, B = c, x = m, M = Rn(R.b, R.h), n.sectionShapes.set(p, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              P = S, B = w, x = y;
              const j = Ne.steelVigaType;
              if (j <= 1) {
                const g = ko[R.profileIdx ?? 0] ?? ko[0];
                M = {
                  A: g.A,
                  Iz: g.Iz,
                  Iy: g.Iy,
                  J: g.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: g.bf,
                  h: g.d,
                  name: g.name
                });
              } else if (j === 2) {
                const g = R.bf ?? 0.2, E = R.hf ?? 0.4, v = R.tf ?? 0.015, C = R.tw ?? 0.01;
                M = Pn(g, E, v, C);
                const X = `I${(E * 100).toFixed(0)}x${(g * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: g,
                  h: E,
                  tf: v,
                  tw: C,
                  name: X
                });
              } else {
                const g = R.bc ?? 0.2, E = R.hc ?? 0.3, v = R.t ?? 8e-3;
                M = On(g, E, v);
                const C = `\u25A1${(E * 100).toFixed(0)}x${(g * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: g,
                  h: E,
                  tw: v,
                  name: C
                });
              }
            }
          }
          const u = ye.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (P = i, B = c, x = m) : (P = S, B = w, x = y), u.secType === "rect" && u.b && u.h) M = Rn(u.b, u.h), n.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) M = ks(u.b), n.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = ko[u.profileIdx] ?? ko[0];
              M = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              M = Pn(u.bf, u.hf, u.tf, u.tw);
              const L = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: L
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              M = On(u.bc, u.hc, u.t);
              const L = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: L
              });
            }
          }
          n.elasticities.set(p, P), n.shearModuli.set(p, B), n.areas.set(p, M.A), n.momentsOfInertiaZ.set(p, M.Iy), n.momentsOfInertiaY.set(p, M.Iz), n.torsionalConstants.set(p, M.J), n.densities.set(p, x), u && u.releases12 && u.releases12.some((I) => I) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(p, u.releases12)), u && u.springs12 && u.springs12.some((I) => I > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(p, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function Ts(t) {
      Ae.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
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
          yo(v), Ae.querySelectorAll("[data-view]").forEach((C) => C.classList.remove("view-active")), g.classList.add("view-active");
        });
      }), (_c = Ae.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (g) => {
        g.stopPropagation(), z = "", ra.val = false, Ma(), Ke.clear();
      }), (_d = Ae.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), oo && (oo = false, Ao()), po && cn(), Yt = !Yt, (_a3 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt);
        const v = et();
        v && (v.controls.enabled = !Yt), Yt || rn();
      }), (_e2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), oo && (oo = false, Ao()), Yt && rn(), po = !po, (_a3 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po ? Aa() : cn();
      }), (_f = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), Yt && rn(), po && cn(), oo = !oo, (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", oo), oo || Ao();
      }), (_g = Ae.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (g) => {
        g.stopPropagation(), Ke.clear(), Ve = null;
      });
      const t = Ae.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const g = t.value;
        t.value = "", g && o(g);
      });
      function o(g) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const C = 15e3 * Math.sqrt(210) * 10, X = 0.2, V = C / (2 * (1 + X)), ae = 0.09, Z = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, re = 0.25 * 0.4 ** 3 / 12, Ie = 0.4 * 0.25 ** 3 / 12, Pe = 1e-3, _ = 5 / 6 * ae, fe = 5 / 6 * de, ne = [];
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
          for (const Se of ue) se.elasticities.set(Se, C), se.shearModuli.set(Se, V), se.areas.set(Se, ae), se.momentsOfInertiaZ.set(Se, Z), se.momentsOfInertiaY.set(Se, Z), se.torsionalConstants.set(Se, K), se.shearAreasY.set(Se, _), se.shearAreasZ.set(Se, _);
          for (const Se of we) se.elasticities.set(Se, C), se.shearModuli.set(Se, V), se.areas.set(Se, de), se.momentsOfInertiaZ.set(Se, Ie), se.momentsOfInertiaY.set(Se, re), se.torsionalConstants.set(Se, Pe), se.shearAreasY.set(Se, fe), se.shearAreasZ.set(Se, fe);
          return se;
        }
        if (g === "test-cantilever" || g === "test-all") {
          const we = 270 / (3 * C * Z), se = [
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
          je.elasticities.set(0, C), je.shearModuli.set(0, V), je.areas.set(0, ae), je.momentsOfInertiaZ.set(0, Z), je.momentsOfInertiaY.set(0, Z), je.torsionalConstants.set(0, K);
          const rt = Ct(se, Se, {
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
          ne.push({
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
          ]), se = Ct(ee, ue, {
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
          ne.push({
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
          ]), se = Ct(ee, ue, {
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
          ne.push({
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
          ], se = Ct(ee, ue, {
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
                X
              ]
            ])
          });
          ne.push({
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
          we.elasticities.set(6, C), we.shearModuli.set(6, V), we.thicknesses = /* @__PURE__ */ new Map([
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
          const se = Ct(ee, ue, {
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
          ne.push({
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
          ], Lt = [
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
          const Eo = 5 ** 3 / (3 * 1500 * rt);
          try {
            const ao = Ct(ct, Lt, {
              supports: Rt,
              loads: Dt
            }, _t), Vt = Math.abs(((_b2 = (_a3 = ao.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), ot = Math.abs(((_d2 = (_c2 = ao.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), Et = (Vt + ot) / 2, eo = Et / Eo;
            ne.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: ct,
              elements: Lt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: eo,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: Et,
                  reference: Eo * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (ao) {
            ne.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + ao.message,
              nodes: ct,
              elements: Lt,
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
          const rt = 40 * Math.PI / 180, ct = 8, Lt = 8, _t = [];
          for (let ot = 0; ot <= ct; ot++) for (let Et = 0; Et <= Lt; Et++) {
            const eo = 25 * ot / ct, Ot = rt * Et / Lt, bo = 25 * Math.sin(Ot), mo = 25 * Math.cos(Ot) - 25 * Math.cos(rt);
            _t.push([
              eo,
              bo,
              mo
            ]);
          }
          const Rt = [];
          for (let ot = 0; ot < ct; ot++) for (let Et = 0; Et < Lt; Et++) {
            const eo = ot * (Lt + 1) + Et, Ot = (ot + 1) * (Lt + 1) + Et, bo = (ot + 1) * (Lt + 1) + (Et + 1), mo = ot * (Lt + 1) + (Et + 1);
            Rt.push([
              eo,
              Ot,
              bo,
              mo
            ]);
          }
          const Dt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, Eo = 432e6 / (2 * 1);
          for (let ot = 0; ot < Rt.length; ot++) Dt.elasticities.set(ot, 432e6), Dt.shearModuli.set(ot, Eo), Dt.thicknesses.set(ot, 0.25), Dt.poissonsRatios.set(ot, 0);
          const ao = /* @__PURE__ */ new Map();
          for (let ot = 0; ot <= ct; ot++) for (let Et = 0; Et <= Lt; Et++) {
            const eo = ot * (Lt + 1) + Et, Ot = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            ot === 0 && (Ot[0] = true, Ot[4] = true, Ot[5] = true), ot === ct && (Ot[1] = true, Ot[2] = true, Ot[3] = true), Et === 0 && (Ot[1] = true, Ot[3] = true, Ot[5] = true), Ot.some((bo) => bo) && ao.set(eo, Ot);
          }
          const Vt = /* @__PURE__ */ new Map();
          for (const ot of Rt) {
            const Et = _t[ot[0]], eo = _t[ot[1]], Ot = _t[ot[2]], bo = _t[ot[3]], mo = [
              Ot[0] - Et[0],
              Ot[1] - Et[1],
              Ot[2] - Et[2]
            ], jo = [
              bo[0] - eo[0],
              bo[1] - eo[1],
              bo[2] - eo[2]
            ], Vs = mo[1] * jo[2] - mo[2] * jo[1], Us = mo[2] * jo[0] - mo[0] * jo[2], Xs = mo[0] * jo[1] - mo[1] * jo[0], Ya = -90 * (0.5 * Math.sqrt(Vs * Vs + Us * Us + Xs * Xs)) / 4;
            for (const Ks of ot) {
              const Zs = Vt.get(Ks) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Zs[2] += Ya, Vt.set(Ks, Zs);
            }
          }
          try {
            const ot = Ct(_t, Rt, {
              supports: ao,
              loads: Vt
            }, Dt), Et = Lt, eo = ((_f2 = (_e3 = ot.deformations) == null ? void 0 : _e3.get(Et)) == null ? void 0 : _f2[2]) ?? 0;
            ne.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${ct}x${Lt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: _t,
              elements: Rt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(eo),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (ot) {
            ne.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + ot.message,
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
        if (d(ne), ne.length > 0) {
          const ee = ne[ne.length - 1];
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
      function n(g) {
        const E = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${g.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const C = /* @__PURE__ */ new Set();
        g.nodes.forEach((_) => C.add(Math.round(_[1] * 1e4) / 1e4));
        const X = [
          ...C
        ].sort((_, fe) => _ - fe), V = X.map((_, fe) => fe === 0 ? "Base" : `Level_${fe}`), ae = /* @__PURE__ */ new Map();
        X.forEach((_, fe) => ae.set(_, V[fe])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let _ = X.length - 1; _ >= 1; _--) v.push(`  STORY "${V[_]}"  HEIGHT ${X[_] - X[_ - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const Z = g.elements.some((_) => _.length === 4);
        Z && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const K = /* @__PURE__ */ new Map();
        let de = 0;
        g.nodes.forEach((_) => {
          const fe = `${_[0]},${_[2]}`;
          K.has(fe) || K.set(fe, `${++de}`);
        }), v.push("$ POINT COORDINATES");
        for (const [_, fe] of K) {
          const [ne, pe] = _.split(",").map(Number);
          v.push(`  POINT "${fe}"  ${ne} ${pe} `);
        }
        v.push("");
        const re = (_) => {
          const fe = g.nodes[_], ne = `${fe[0]},${fe[2]}`;
          return {
            pt: K.get(ne) || "1",
            story: ae.get(Math.round(fe[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Ie = [];
        if (g.elements.forEach((_, fe) => {
          if (_.length !== 2) return;
          const ne = g.nodes[_[0]], pe = g.nodes[_[1]], ee = Math.abs(pe[1] - ne[1]), ue = Math.sqrt((pe[0] - ne[0]) ** 2 + (pe[2] - ne[2]) ** 2), we = ee > ue * 0.5, se = re(_[0]), Se = re(_[1]), je = we ? "COL30" : "VIGA";
          we ? (v.push(`  LINE  "E${fe + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${Se.story}"  SECTION "${je}"  `)) : (v.push(`  LINE  "E${fe + 1}"  BEAM  "${se.pt}"  "${Se.pt}"  0`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${se.story}"  SECTION "${je}"  `));
        }), v.push(""), Z) {
          v.push("$ AREA CONNECTIVITIES");
          const _ = [];
          g.elements.forEach((fe, ne) => {
            if (fe.length !== 4) return;
            const pe = fe.map((ee) => re(ee));
            v.push(`  AREA "W${ne + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), _.push(`  AREAASSIGN  "W${ne + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), _.forEach((fe) => v.push(fe)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), g.nodes.forEach((_, fe) => {
          if (Math.abs(_[1]) < 0.01) {
            const ne = re(fe);
            v.push(`  POINTASSIGN  "${ne.pt}"  "${ne.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Ie.forEach((_) => v.push(_)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Pe = Math.max(...g.nodes.map((_) => _[1]));
        return g.nodes.forEach((_, fe) => {
          if (Math.abs(_[1] - Pe) < 0.01) {
            const ne = re(fe);
            v.push(`  POINTLOAD  "${ne.pt}"  "${ne.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(g) {
        const E = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${g.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${E}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), g.elements.some((V) => V.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), g.elements.forEach((V, ae) => {
          if (V.length === 2) {
            const Z = g.nodes[V[0]], K = g.nodes[V[1]], de = Math.abs(K[1] - Z[1]), re = Math.sqrt((K[0] - Z[0]) ** 2 + (K[2] - Z[2]) ** 2), Ie = de > re * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Z[0]},${Z[2]},${Z[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${Ie}","E${ae + 1}","Global")`);
          } else if (V.length === 4) {
            const Z = V.map((K) => g.nodes[K]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${Z.map((K) => K[0]).join(",")}], [${Z.map((K) => K[2]).join(",")}], [${Z.map((K) => K[1]).join(",")}], "", "Muro20")`);
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
        }), C = URL.createObjectURL(v), X = document.createElement("a");
        X.href = C, X.download = E, X.click(), URL.revokeObjectURL(C);
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
      </div>`, C = true;
        window.__awatifTests = g;
        for (let V = 0; V < g.length; V++) {
          const ae = g[V];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${V})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${V})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Z of ae.results) {
            const K = Z.reference !== 0 ? Z.awatif / Z.reference : 1, de = Math.abs(K - 1) < 0.05;
            de || (C = false);
            const re = de ? "#4caf50" : "#f44336", Ie = de ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Z.label}</td>
            <td style="text-align:right;color:#fff">${Z.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Z.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${re};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Z.refSource}</td>
            <td style="text-align:center;color:${re};font-size:10px;font-weight:bold">${Ie}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += C ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', E.innerHTML = v, document.body.appendChild(E), window.__awatifDownloadE2k = (V) => {
          const ae = window.__awatifTests[V], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(ae), `${Z}.e2k`);
        }, window.__awatifDownloadPy = (V) => {
          const ae = window.__awatifTests[V], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(ae), `${Z}_etabs.py`);
        };
      }
      (_h = Ae.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (g) => {
        g.stopPropagation(), Ea();
      });
      let a = "";
      const r = Ae.querySelector("#cad3d-io-menu"), f = Ae.querySelector("#cad3d-io-file");
      function i(g, E) {
        e.nodes.val = g.nodes, e.elements.val = g.elements, e.nodeInputs.val = g.nodeInputs, e.elementInputs.val = g.elementInputs, g.sectionShapes && g.elementInputs && (g.elementInputs.sectionShapes = g.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = g.elements.filter((X) => X.length === 2).length, C = g.elements.filter((X) => X.length >= 3).length;
        console.log(`${E} (${g.nodes.length} nodos, ${v} frames, ${C} shells): ${g.nodes.length} nodes, ${g.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function c(g, E) {
        var _a3, _b2, _c2;
        const v = {};
        g.elementInfo.forEach((K) => v[K.category] = (v[K.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const C = document.createElement("div");
        C.id = "ifc-filter-panel", C.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
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
        let Z = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
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
          Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${K}" ${re}>
          <span>${ae[K] || K}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        Z += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const K of V) {
          const de = v[K] || 0;
          de !== 0 && (Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${K}" disabled>
          <span>${ae[K] || K}</span>
          <span style="margin-left:auto">(${de})</span>
        </label>`);
        }
        Z += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, C.innerHTML = Z, document.body.appendChild(C), C.querySelectorAll("input[data-ifc-cat]").forEach((K) => {
          K.addEventListener("change", () => {
            const de = K.dataset.ifcCat, re = g.detailCategories.get(de);
            if (re) {
              re.visible = K.checked;
              const Ie = et();
              Ie && Ie.render();
            }
          });
        }), (_b2 = C.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const K = /* @__PURE__ */ new Set();
          C.querySelectorAll("input[data-ifc-cat]:checked").forEach((ne) => {
            K.add(ne.dataset.ifcCat);
          });
          const de = E.nodes.map((ne) => [
            ne.x,
            ne.y,
            ne.z
          ]), re = [], Ie = {
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
          for (const ne of E.elements) if (K.has(ne.category) && ne.type === "frame" && ne.nodeIds.length >= 2) {
            re.push(ne.nodeIds);
            const pe = ((_a4 = E.materials) == null ? void 0 : _a4.get(ne.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = ne.b || 0.3, ue = ne.h || 0.3, we = ee * ue, se = ee * ue * ue * ue / 12, Se = ue * ee * ee * ee / 12, je = ee * ue * (ee * ee + ue * ue) / 12, rt = pe.E / (2 * (1 + pe.nu));
            Ie.elasticities.set(_, pe.E), Ie.shearModuli.set(_, rt), Ie.areas.set(_, we), Ie.momentsOfInertiaZ.set(_, Se), Ie.momentsOfInertiaY.set(_, se), Ie.torsionalConstants.set(_, je), Ie.densities.set(_, pe.rho), Ie.sectionShapes.set(_, {
              type: "rect",
              b: ee,
              h: ue,
              name: ne.sectionName
            }), _++;
          }
          const fe = Math.min(...de.map((ne) => ne[2]));
          de.forEach((ne, pe) => {
            Math.abs(ne[2] - fe) < 0.05 && Pe.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, ne] of g.detailCategories) {
            const pe = et();
            pe && pe.scene.remove(ne);
          }
          i({
            nodes: de,
            elements: re,
            nodeInputs: Pe,
            elementInputs: Ie,
            sectionShapes: Ie.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: re.length
            }
          }, "IFC analytical"), C.remove();
        }), (_c2 = C.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of g.detailCategories) {
            const re = et();
            re && re.scene.remove(de);
          }
          const K = et();
          K && K.render(), C.remove();
        });
      }
      function m(g) {
        D = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
        const E = /* @__PURE__ */ new Map();
        for (let re = 0; re < g.stories.length; re++) E.set(g.stories[re].name, re);
        for (let re = 0; re < g.elementTypes.length; re++) {
          const Ie = g.elementTypes[re], Pe = g.elementStories[re], _ = E.get(Pe) ?? 0;
          $e.set(re, _), Ie === "COLUMN" || Ie === "BRACE" ? D.add(re) : G.add(re);
        }
        z = "edificio";
        const v = g.grids.filter((re) => re.dir === "X").sort((re, Ie) => re.coord - Ie.coord), C = g.grids.filter((re) => re.dir === "Y").sort((re, Ie) => re.coord - Ie.coord);
        let X, V, ae, Z;
        if (v.length > 0 || C.length > 0) X = v.map((re) => re.coord), V = C.map((re) => re.coord), ae = v.map((re) => re.label), Z = C.map((re) => re.label);
        else {
          const re = new Set(g.nodes.map((Pe) => Pe[0])), Ie = new Set(g.nodes.map((Pe) => Pe[1]));
          X = [
            ...re
          ].sort((Pe, _) => Pe - _), V = [
            ...Ie
          ].sort((Pe, _) => Pe - _), ae = X.map((Pe, _) => String(_ + 1)), Z = V.map((Pe, _) => String.fromCharCode(65 + _));
        }
        const K = g.stories.length > 0 ? Math.max(...g.stories.map((re) => re.elev)) : Math.max(...g.nodes.map((re) => re[2]));
        We = X, Xe = V, pt = K, setTimeout(() => {
          It(), Xo(X, V, K, ae, Z), wn(g.stories, X, V), Nn(), qn();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const re of g.elementTypes) de[re]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Z.join(",")}]`), console.log(`E2K stories: ${g.stories.map((re) => `${re.name}@${re.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), Ze();
      }
      function S(g, E) {
        const v = new Blob([
          g
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(v), X = document.createElement("a");
        X.href = C, X.download = E, X.click(), URL.revokeObjectURL(C);
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
            a === "export-e2k" ? S(Ll({
              ...g,
              title: "Awatif Model",
              e2kModel: Ve ?? void 0
            }), "model.e2k") : a === "export-s2k" ? S(Al({
              ...g,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? S(Pl(g), "model_opensees.py") : a === "export-tcl" && S(Ol(g), "model_opensees.tcl");
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
            const C = v.result;
            try {
              const X = et();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const V = await Gl(X.scene, C);
              console.log(`IFC: ${V.meshCount} meshes loaded, bbox:`, V.bbox);
              const ae = new Oe();
              V.bbox.getCenter(ae);
              const Z = new Oe();
              V.bbox.getSize(Z);
              const K = Math.max(Z.x, Z.y, Z.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + K, ae.y + K * 0.5, ae.z + K), X.camera.lookAt(ae), X.controls.maxDistance = K * 5, X.controls.update(), X.render(), window.__ifcLoadResult = V, window.__ifcArrayBuffer = C;
              const de = new FileReader();
              de.onload = () => {
                const re = de.result, Ie = Hl(re);
                window.__ifcAnalytical = Ie;
                const Pe = {};
                V.elementInfo.forEach((_) => Pe[_.category] = (Pe[_.category] || 0) + 1), console.log("IFC categories:", Pe), console.log(`IFC: ${V.elementInfo.size} geometric elements, ${Ie.elements.length} analytical elements`), c(V, Ie);
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
              const C = Il(v);
              Ve = C, i(C, "E2K imported"), m(C);
            } else if (a === "import-s2k") {
              const C = kl(v);
              i({
                nodes: C.nodes,
                elements: C.elements,
                nodeInputs: C.nodeInputs,
                elementInputs: C.elementInputs,
                sectionShapes: C.sectionShapes,
                info: C.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const C = Nl(v);
              i(C, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const C = ql(v);
              i(C, "OpenSees Tcl imported");
            }
          } catch (C) {
            alert("Import error: " + C.message), console.error(C);
          }
        }, E.readAsText(g), f.value = "";
      });
      const w = Ae.querySelector("#cad3d-force-unit");
      w && (w.value = b, w.addEventListener("change", (g) => {
        g.stopPropagation(), b = w.value, $ = Ro(b, F), z && Qe(z);
      }));
      const y = Ae.querySelector("#cad3d-length-unit");
      y && (y.value = F, y.addEventListener("change", (g) => {
        g.stopPropagation(), F = y.value, $ = Ro(b, F), z && Qe(z);
      })), Ae.querySelectorAll("[data-preset]").forEach((g) => {
        g.addEventListener("click", (E) => {
          E.stopPropagation();
          const v = g.dataset.preset, C = H[v];
          C && (b = C.force, F = C.length, J = C.stress, $ = Ro(b, F), w && (w.value = b), y && (y.value = F), Ae.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), z && Qe(z), console.log(`Preset: ${v} \u2192 ${b}+${F}, stress: ${J.label}`));
        });
      }), (_i = Ae.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (g) => {
        g.stopPropagation(), qa();
      }), (_j = Ae.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (g) => {
        g.stopPropagation(), _a();
      }), (_k = Ae.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (g) => {
        g.stopPropagation(), Ba();
      }), (_l2 = Ae.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (g) => {
        g.stopPropagation(), ja();
      }), (_m = Ae.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (g) => {
        g.stopPropagation(), Qs(async () => {
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
        const v = Ae.querySelector("#cad3d-mode-prev"), C = Ae.querySelector("#cad3d-mode-next"), X = Ae.querySelector("#cad3d-mode-label"), V = Ae.querySelector("#cad3d-modal-scale");
        if (qe) {
          const ae = et();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (_e = ae.settings.loads.rawVal, ae.settings.loads.val = false), Ln(), v.style.display = "", C.style.display = "", X.style.display = "", V && (V.style.display = ""), p();
        } else Cn(), v.style.display = "none", C.style.display = "none", X.style.display = "none", V && (V.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && Re(), setTimeout(() => {
          var _a4;
          const ae = et();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && _e && (ae.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a3;
        const g = Ae.querySelector("#cad3d-mode-label");
        if (!g || !(Ce == null ? void 0 : Ce.frequencies)) return;
        const E = Ce.frequencies[xe], v = E > 0 ? 1 / E : 0, C = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= xe; X++) {
          const V = (_a3 = Ce.massParticipation) == null ? void 0 : _a3[X];
          if (V) for (let ae = 0; ae < 6; ae++) C[ae] += V[ae];
        }
        g.textContent = `Modo ${xe + 1} \u2014 ${E.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(C[0] * 100).toFixed(1)}% \u03A3Uy=${(C[1] * 100).toFixed(1)}% \u03A3Rz=${(C[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ae.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        xe = (xe - 1 + Ce.modeShapes.length) % Ce.modeShapes.length;
        const E = Ce.modeShapes[xe], { extent: v } = vo();
        let C = 0;
        for (let X = 0; X < ke.length; X++) {
          const V = E[X * 6] || 0, ae = E[X * 6 + 1] || 0, Z = E[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(V * V + ae * ae + Z * Z));
        }
        Ge = C > 1e-12 ? v * 0.05 / C : 1, Qo(), p();
      }), (_p = Ae.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        xe = (xe + 1) % Ce.modeShapes.length;
        const E = Ce.modeShapes[xe], { extent: v } = vo();
        let C = 0;
        for (let X = 0; X < ke.length; X++) {
          const V = E[X * 6] || 0, ae = E[X * 6 + 1] || 0, Z = E[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(V * V + ae * ae + Z * Z));
        }
        Ge = C > 1e-12 ? v * 0.05 / C : 1, Qo(), p();
      });
      const h = Ae.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (g) => g.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        qe && (Ce == null ? void 0 : Ce.modeShapes) && Qo();
      });
      const T = Ae.querySelector("#cad3d-cli-toggle"), k = Ae.querySelector("#cad3d-cli-panel"), M = Ae.querySelector("#cad3d-cli-output"), P = Ae.querySelector("#cad3d-cmd"), B = [];
      let x = -1;
      T == null ? void 0 : T.addEventListener("click", (g) => {
        if (g.stopPropagation(), k) {
          const E = k.style.display !== "none";
          k.style.display = E ? "none" : "block", E || (P == null ? void 0 : P.focus(), M && !M.textContent && (M.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), P == null ? void 0 : P.addEventListener("mousedown", (g) => g.stopPropagation()), document.addEventListener("keydown", (g) => {
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
          g.preventDefault(), ht.forEach((E) => U.add(E)), ht.clear(), fo && (fo.remove(), fo = null), Re();
          return;
        }
        if (g.key === "Escape") {
          if (po) if (vt !== null) {
            vt = null;
            const E = et();
            Nt && E && (E.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && E && (E.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), E == null ? void 0 : E.render();
          } else cn();
          Yt && rn(), oo && (oo = false, Ao(), (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), P == null ? void 0 : P.addEventListener("keydown", (g) => {
        if (g.stopPropagation(), g.key === "Enter") {
          const E = P.value.trim();
          if (E) {
            B.unshift(E), x = -1, M && (M.textContent += `> ${E}
`);
            try {
              const v = new Function("cad", `return ${E}`)(Ke);
              if (v !== void 0 && M) {
                const C = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                M.textContent += `${C}
`;
              }
            } catch (v) {
              M && (M.textContent += `ERROR: ${v.message}
`);
            }
            M && (M.scrollTop = M.scrollHeight), P.value = "";
          }
        } else g.key === "ArrowUp" ? (g.preventDefault(), B.length > 0 && x < B.length - 1 && (x++, P.value = B[x])) : g.key === "ArrowDown" && (g.preventDefault(), x > 0 ? (x--, P.value = B[x]) : (x = -1, P.value = ""));
      });
      let u = false, I = 0, L = 0, R = 0, j = 0;
      Ae.addEventListener("mousedown", (g) => {
        const E = g.target.tagName;
        if (E === "BUTTON" || E === "INPUT" || E === "SELECT") return;
        u = true;
        const v = Ae.getBoundingClientRect();
        Ae.style.bottom = "unset", I = g.clientX, L = g.clientY, R = v.left, j = v.top, g.preventDefault();
      }), window.addEventListener("mousemove", (g) => {
        u && (g.preventDefault(), Ae.style.left = R + (g.clientX - I) + "px", Ae.style.top = j + (g.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), Ze();
    }, 10);
    function et() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function vo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Oe(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [i, c, m] of t) i < o && (o = i), i > s && (s = i), c < n && (n = c), c > d && (d = c), m < l && (l = m), m > a && (a = m);
      const r = new Oe((o + s) / 2, (n + d) / 2, (l + a) / 2), f = Math.max(s - o, d - n, a - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function It(t = false) {
      const o = et();
      if (!o) return;
      const { extent: n } = vo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const d = Ua(), a = new al(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((S) => S instanceof dn))).forEach((m) => {
        m.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(m);
      });
      const f = 0.05 * l, i = new sn();
      i.name = "viewerAxes";
      const c = d.axisArrow;
      i.add(new dn(new Oe(1, 0, 0), new Oe(), 1, c, 0.2, 0.2)), i.add(new dn(new Oe(0, 1, 0), new Oe(), 1, c, 0.2, 0.2)), i.add(new dn(new Oe(0, 0, 1), new Oe(), 1, c, 0.2, 0.2)), i.children.forEach((m) => m.scale.set(f, f, f));
      for (const [m, S, w] of [
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
        p.fillStyle = S, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(m, 32, 34);
        const h = new Xn(y);
        h.needsUpdate = true;
        const T = new pn(new fn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        T.position.set(w[0], w[1], w[2]), T.scale.set(0.4 * f, 0.4 * f, 1), T.renderOrder = 99, i.add(T);
      }
      o.scene.add(i), t ? o.render() : yo("3d");
    }
    function zs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function yo(t) {
      var _a2;
      const o = et();
      if (!o) return;
      const { center: n, extent: l } = vo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, c = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || i || c) && (Array.isArray(r.material) ? r.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + f * 0.5, n.y - f * 0.8, n.z + f * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -d * s, r.right = d * s, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (i, c, m) => {
          r.position.copy(i), r.up.copy(m), o.controls.target.copy(c), r.lookAt(c), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], f(new Oe(n.x, n.y, n.z + l * 2), new Oe(n.x, n.y, n.z), new Oe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), c = ((_a2 = Q.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (i + 1) * c, S = c * 0.45;
          o.renderer.clippingPlanes = [
            new So(new Oe(0, 0, -1), m + S),
            new So(new Oe(0, 0, 1), -m + S)
          ], a(), f(new Oe(n.x, n.y, m + l * 2), new Oe(n.x, n.y, m), new Oe(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), c = We[i] ?? n.x;
          if (Xe.length > 1) {
            const S = zs(We, i, l);
            o.renderer.clippingPlanes = [
              new So(new Oe(-1, 0, 0), c + S),
              new So(new Oe(1, 0, 0), -c + S)
            ], a(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), c = Xe[i] ?? n.y;
          if (We.length > 1) {
            const S = zs(Xe, i, l);
            o.renderer.clippingPlanes = [
              new So(new Oe(0, -1, 0), c + S),
              new So(new Oe(0, 1, 0), -c + S)
            ], a(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function Nn() {
      const t = Ae.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (We.length < 2 && Xe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, r) => {
        const f = document.createElement("button");
        return f.textContent = d, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const c = f.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), c ? (yo("3d"), (_a2 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (yo(a), f.classList.add("view-active"));
        }), f;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      We.forEach((d, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Xe.forEach((d, a) => {
        const r = `${a + 1}`;
        t.appendChild(o(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qn() {
      var _a2;
      const t = Ae.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = Q.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
          const i = r.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), i ? (yo("3d"), (_a3 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (yo(d), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ia() {
      yo("3d"), Ae.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ke.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, yo(t), Ae.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let oo = false, Yt = false, po = false, jt = "line", Xt = [], vt = null, Nt = null, qt = null, qo = null, Zt = null;
    const wt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Dn = [], Qt = null, zo = null;
    const _o = [], ln = [], ka = 50;
    function Do() {
      _o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), _o.length > ka && _o.shift(), ln.length = 0;
    }
    function As() {
      if (_o.length === 0) return;
      ln.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = _o.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, xo(), e.elementInputs.val = {
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
      e.nodes.val = t.nodes, e.elements.val = t.elements, xo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ht = /* @__PURE__ */ new Set();
    let Jt = null, $o = [], Kt = null, fo = null;
    function Bn(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const f = n[l[r]], i = n[l[(r + 1) % l.length]];
        s.push(f[0], f[1], f[2], i[0], i[1], i[2]);
      }
      const d = new to();
      d.setAttribute("position", new Lo(s, 3));
      const a = new Go(d, new Yo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), $o.push(a), o.render();
    }
    function Mo() {
      const t = et();
      $o.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), $o = [], t == null ? void 0 : t.render();
    }
    function wo() {
      fo && fo.remove();
      const t = Y.size > 0 || q;
      if (ht.size === 0 && !t) {
        fo = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${ht.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), fo = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Wa([
          ...ht
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (ht.size === 1) {
          const n = [
            ...ht
          ][0];
          qs(n);
        } else {
          const n = [
            ...ht
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, r = 0, f = 0;
          n.forEach((c) => {
            const m = s[c];
            if (m) if (m.length === 2) {
              const S = l[m[0]], w = l[m[1]], y = Math.abs(w[0] - S[0]), p = Math.abs(w[1] - S[1]), h = Math.abs(w[2] - S[2]);
              h > y && h > p ? d++ : a++;
            } else m.length === 3 ? r++ : m.length === 4 && f++;
          });
          const i = [];
          d && i.push(`${d} columnas`), a && i.push(`${a} vigas`), f && i.push(`${f} shells Q4`), r && i.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ht.forEach((n) => Y.add(n)), ht.clear(), Mo(), wo(), Re();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        q = true, W.clear(), ht.forEach((n) => W.add(n)), ht.clear(), Mo(), wo(), Re();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        Y.clear(), q = false, W.clear(), wo(), Re();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Do(), ht.forEach((n) => U.add(n)), ht.clear(), Mo(), wo(), Re();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ht.clear(), Mo(), wo();
      });
    }
    function rn() {
      var _a2;
      Yt = false, ht.clear(), Mo(), fo && (fo.remove(), fo = null), (_a2 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = et();
      o && (o.controls.enabled = true);
    }
    function Ao() {
      if (Jt) {
        const t = et();
        t == null ? void 0 : t.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose(), Jt = null, t == null ? void 0 : t.render();
      }
      Kt && (Kt.remove(), Kt = null);
    }
    function Ta(t) {
      Hn();
      const o = et();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      zo = t;
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
        ]), f = new to();
        f.setAttribute("position", new xn(r, 3));
        const i = new Wo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Go(f, i);
        c.computeLineDistances(), c.renderOrder = 9990, o.scene.add(c), Dn.push(c);
      }
      o.render();
    }
    function Hn() {
      const t = et();
      for (const o of Dn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Dn = [], zo = null, Qt && (Qt.remove(), Qt = null);
    }
    function Cs(t, o, n, l) {
      Qt || (Qt = document.createElement("div"), Qt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Qt));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, r = Math.sqrt(s * s + d * d + a * a), f = Math.abs(s), i = Math.abs(d), c = Math.abs(a);
      let m = "";
      f > i && f > c ? m = `\u0394X=${s.toFixed(2)}` : i > f && i > c ? m = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (m = `\u0394Z=${a.toFixed(2)}`), Qt.textContent = `${r.toFixed(3)} m  ${m}`, Qt.style.left = t + 20 + "px", Qt.style.top = o - 10 + "px";
    }
    function za(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Oe(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), r = 0.3, f = Math.abs(a.x), i = Math.abs(a.y), c = Math.abs(a.z);
      return i < r && c < r && f > 0.01 ? new Oe(d.x, s.y, s.z) : f < r && c < r && i > 0.01 ? new Oe(s.x, d.y, s.z) : f < r && i < r && c > 0.01 ? new Oe(s.x, s.y, d.z) : null;
    }
    function cn() {
      var _a2;
      const t = et();
      Nt && t && (t.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), Hn(), vt = null, Zt = null, po = false, qo && (qo.remove(), qo = null), (_a2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Aa() {
      qo && qo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(wt.node)}">Node</button>
      <button id="ds-grid" style="${n(wt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(wt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(wt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${_n}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), qo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = o(jt === "line")), d && (d.style.cssText = o(jt === "arc")), a && (a.style.cssText = o(jt === "node")), r && (r.style.cssText = o(jt === "area"));
        const f = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        f && (f.style.cssText = n(wt.node)), i && (i.style.cssText = n(wt.grid)), c && (c.style.cssText = n(wt.midpoint)), m && (m.style.cssText = n(wt.track));
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
        wt.node = !wt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        wt.grid = !wt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        wt.midpoint = !wt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        wt.track = !wt.track, wt.track || Hn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        wt.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => As()), t.querySelector("#dt-redo").addEventListener("click", () => Ls());
    }
    function Fs(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, r = new oa();
      r.setFromCamera(new na(d, a), n);
      const f = e.nodes.val, i = e.elements.val, c = 0.12;
      if (wt.node) {
        let w = -1, y = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const h = f[p], T = new Oe(h[0], h[1], h[2]).project(n), k = Math.sqrt((T.x - d) ** 2 + (T.y - a) ** 2);
          k < c && k < y && (y = k, w = p);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Oe(...f[w]),
          snapType: "node"
        };
      }
      if (wt.midpoint) {
        let w = 1 / 0, y = null;
        for (const p of i) {
          if (p.length !== 2) continue;
          const h = f[p[0]], T = f[p[1]], k = new Oe((h[0] + T[0]) / 2, (h[1] + T[1]) / 2, (h[2] + T[2]) / 2), M = k.clone().project(n), P = Math.sqrt((M.x - d) ** 2 + (M.y - a) ** 2);
          P < c * 0.8 && P < w && (w = P, y = k);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (wt.grid) {
        const w = new So(new Oe(0, 0, 1), 0), y = new Oe();
        if (r.ray.intersectPlane(w, y)) {
          const p = wt.gridSize || _n;
          return y.x = Math.round(y.x / p) * p, y.y = Math.round(y.y / p) * p, y.z = Math.round(y.z / p) * p, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const m = new So(new Oe(0, 0, 1), 0), S = new Oe();
      return r.ray.intersectPlane(m, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function Rs(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val;
      if (qt && (o.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new tl(s * 2, s * 2, s * 2) : new ol(s, 12, 12), a = new nl({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        qt = new ia(d, a), qt.position.copy(t.worldPos), qt.renderOrder = 9999, o.scene.add(qt);
      }
      if (Nt && (o.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), vt !== null && t.worldPos) {
        const l = n[vt], s = new to();
        if (jt === "arc" && Zt !== null) {
          const a = n[Zt], r = Ps(new Oe(l[0], l[1], l[2]), new Oe(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let i = 0; i < r.length - 1; i++) f.push(r[i].x, r[i].y, r[i].z, r[i + 1].x, r[i + 1].y, r[i + 1].z);
          s.setAttribute("position", new Lo(f, 3));
        } else s.setAttribute("position", new Lo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Yo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Nt = new Co(s, d), jt === "arc" && Zt !== null && (Nt = new Go(s, d)), Nt.renderOrder = 9999, o.scene.add(Nt);
      }
      o.render();
    }
    function Ps(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), i = 2 * (1 - a) * a, c = a * a;
        s.push(new Oe(f * t.x + i * r.x + c * n.x, f * t.y + i * r.y + c * n.y, f * t.z + i * r.z + c * n.z));
      }
      return s;
    }
    function jn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
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
    function La(t) {
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
        if (vt === null) {
          vt = o;
          return;
        }
        if (o === vt) return;
        Do();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === vt && s[1] === o || s[1] === vt && s[0] === o)) || (n.push([
          vt,
          o
        ]), e.elements.val = n, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), vt = o;
        return;
      }
      if (jt === "arc") {
        const o = jn(t);
        if (o < 0) return;
        if (vt === null) {
          vt = o;
          return;
        }
        if (Zt === null) {
          if (o === vt) return;
          Zt = o;
          return;
        }
        if (o === vt || o === Zt) return;
        const n = e.nodes.val, l = new Oe(...n[vt]), s = new Oe(...n[Zt]), d = new Oe(...n[o]), a = Math.max(4, Math.round(((_a2 = Q.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ps(l, s, d, a);
        Do();
        const f = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let c = vt;
        for (let m = 1; m < r.length; m++) {
          let S;
          if (m === r.length - 1) S = o;
          else {
            const w = r[m];
            S = f.length, f.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          i.push([
            c,
            S
          ]), c = S;
        }
        e.nodes.val = f, e.elements.val = i, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, vt = o, Zt = null;
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
          ], s = Xt.map((d) => n[d]);
          try {
            const d = go({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: _n || 0.5
            }), a = [];
            for (const r of d.nodes) {
              let f = -1;
              for (let i = 0; i < n.length; i++) {
                const c = Math.abs(n[i][0] - r[0]), m = Math.abs(n[i][1] - r[1]), S = Math.abs(n[i][2] - r[2]);
                if (c < 0.01 && m < 0.01 && S < 0.01) {
                  f = i;
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
            e.nodes.val = n, e.elements.val = l, xo(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Xt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Xt = [];
          return;
        }
        if (Xt.push(o), console.log(`Area vertex ${Xt.length}: node ${o}`), Xt.length >= 2) {
          const n = Xt[Xt.length - 2], l = e.nodes.val, s = et();
          if (s) {
            const d = new to().setFromPoints([
              new Oe(...l[n]),
              new Oe(...l[o])
            ]), a = new Go(d, new Yo({
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
      const o = et();
      if (!o) return;
      Jt && (o.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const r = n[l[a]], f = n[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const d = new to();
      d.setAttribute("position", new Lo(s, 3)), Jt = new Go(d, new Yo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Jt.renderOrder = 9999, o.scene.add(Jt), o.render();
    }
    function Wn(t) {
      const o = et();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new na((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new oa();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const i = s.ray;
      for (let m = 0; m < a.length; m++) {
        const S = a[m];
        if (S.length === 2) {
          const w = new Oe(...d[S[0]]), y = new Oe(...d[S[1]]), p = new sl(w, y), h = new Oe(), T = new Oe();
          i.closestPointToPoint(p.getCenter(new Oe()), h), p.closestPointToPoint(h, true, T);
          const k = h.distanceTo(T);
          k < r && (r = k, f = m);
        } else if (S.length === 3) {
          const w = new Oe(...d[S[0]]), y = new Oe(...d[S[1]]), p = new Oe(...d[S[2]]), h = new Oe();
          if (i.intersectTriangle(w, y, p, false, h)) {
            const k = i.origin.distanceTo(h);
            k < r && (r = k, f = m);
          } else {
            const k = w.add(y).add(p).divideScalar(3), M = new Oe();
            i.closestPointToPoint(k, M);
            const P = M.distanceTo(k);
            P < r && (r = P, f = m);
          }
        } else if (S.length === 4) {
          const w = new Oe(...d[S[0]]), y = new Oe(...d[S[1]]), p = new Oe(...d[S[2]]), h = new Oe(...d[S[3]]), T = new Oe();
          let k = i.intersectTriangle(w, y, p, false, T);
          if (k) {
            const M = i.origin.distanceTo(T);
            M < r && (r = M, f = m);
          }
          if (k = i.intersectTriangle(w, p, h, false, T), k) {
            const M = i.origin.distanceTo(T);
            M < r && (r = M, f = m);
          }
        }
      }
      const { extent: c } = vo();
      return r < c * 0.1 ? f : -1;
    }
    function Me(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
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
          const f = t[a][r], i = Math.abs(f) > 1e-10 ? "nonzero" : "";
          d += `<td class="${i}">${Me(f, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function De(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function A(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ca(t, o, n, l, s, d, a) {
      const r = 0.8333333333333334 * o, f = 5 / 6 * o, i = f > 0 && s > 0 ? 12 * t * n / (s * f * a ** 2) : 0, c = r > 0 && s > 0 ? 12 * t * l / (s * r * a ** 2) : 0, m = t * o / a, S = s * d / a, w = 12 * t * n / a ** 3 / (1 + i), y = 6 * t * n / a ** 2 / (1 + i), p = 4 * t * n / a * (1 + i / 4) / (1 + i), h = 2 * t * n / a * (1 - i / 2) / (1 + i), T = i > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${T ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${T ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${A("A", "s")} = ${De("5", "6")} \xB7 ${A("A")} = <span class="highlight">${Me(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${De("12\xB7" + A("E") + "\xB7" + A("I", "z"), A("G") + "\xB7" + A("A", "s") + "\xB7" + A("L") + "\xB2")} = <span class="highlight">${Me(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Me(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${A("t", "z")} = ${De("12\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(w)}</span> &nbsp;(cortante)</div>
      <div>${A("b", "z")} = ${De("6\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${A("k", "z")} = ${De("4\xB7" + A("E") + "\xB7" + A("I", "z") + "\xB7(1+\u03C6/4)", A("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${A("a", "z")} = ${De("2\xB7" + A("E") + "\xB7" + A("I", "z") + "\xB7(1\u2212\u03C6/2)", A("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${De(A("E") + "\xB7" + A("A"), A("L"))} = <span class="highlight">${Me(m)}</span> &nbsp;(axial)</div>
      <div>${De(A("G") + "\xB7" + A("J"), A("L"))} = <span class="highlight">${Me(S)}</span> &nbsp;(torsi\xF3n)</div>
      ${T ? "" : `
      <div>${De("12\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB3")} = <span class="highlight">${Me(w)}</span></div>
      <div>${De("4\xB7" + A("E") + "\xB7" + A("I", "z"), A("L"))} = <span class="highlight">${Me(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${A("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${De(A("EA"), A("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${De("\u2212" + A("EA"), A("L"))}</span>
        <span class="cell">0</span><span class="cell">${A("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${A("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${A("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${A("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${T ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${T ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${A("K", "f")} = ${A("B", "f")}<sup>T</sup> \xB7 ${A("E")}\xB7${A("I")} \xB7 ${A("B", "f")} \xB7 ${A("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${A("K", "c")} = ${A("B", "c")}<sup>T</sup> \xB7 ${A("G")}\xB7${A("A'")} \xB7 ${A("B", "c")} \xB7 ${A("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${A("K", "total")} = ${A("K", "f")} + ${A("K", "c")}</div>
    </div>` : ""}`;
    }
    function Fa(t) {
      if (t.length === 2) {
        const n = ho(t[1], t[0]), l = Po(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${A("l")} = cos(\u03B1) = ${De("\u0394x", A("L"))} = ${De(Me(n[0]), Me(l))} = <span class="highlight">${Me(s)}</span></div>
        <div>${A("m")} = cos(\u03B2) = ${De("\u0394y", A("L"))} = ${De(Me(n[1]), Me(l))} = <span class="highlight">${Me(d)}</span></div>
        <div>${A("n")} = cos(\u03B3) = ${De("\u0394z", A("L"))} = ${De(Me(n[2]), Me(l))} = <span class="highlight">${Me(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${A("l")}</span><span class="cell">${A("m")}</span><span class="cell">${A("n")}</span>
          <span class="cell">${De("\u2212" + A("m"), A("D"))}</span><span class="cell">${De(A("l"), A("D"))}</span><span class="cell">0</span>
          <span class="cell">${De("\u2212" + A("l") + "\xB7" + A("n"), A("D"))}</span><span class="cell">${De("\u2212" + A("m") + "\xB7" + A("n"), A("D"))}</span><span class="cell">${A("D")}</span>
        </span>
        &nbsp; donde ${A("D")} = \u221A(${A("l")}\xB2 + ${A("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${A("T")} = ${A("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${A("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Ra() {
      return `<div class="fem-eq">
      ${A("K", "global")} = ${A("T")}<sup>T</sup> \xB7 ${A("k", "local")} \xB7 ${A("T")}
    </div>`;
    }
    function Pa(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${A("K", "global")}[${A("i")}, ${A("j")}] += ${A("K", "elem")}[${A("i")}, ${A("j")}]</div>
      <div style="margin-top:4px">donde ${A("i")}, ${A("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Oa(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${A("u", "local")} = ${A("T")} \xB7 ${A("u", "global")}</div>
        <div>${A("f", "local")} = ${A("k", "local")} \xB7 ${A("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${A("f")} = [${A("N", "i")}, ${A("V", "y,i")}, ${A("V", "z,i")}, ${A("M", "x,i")}, ${A("M", "y,i")}, ${A("M", "z,i")}, ${A("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${De("1", "2" + A("A"))} \xB7 ${A("D")} \xB7 ${A("B")} \xB7 ${A("u")}</div>
      <div>${A("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${A("t")} &nbsp;&nbsp; ${A("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${De(A("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], r = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${Me(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ns() {
      const t = "0", o = De(A("EA"), A("L")), n = De("\u2212" + A("EA"), A("L")), l = De("12" + A("EI", "z"), A("L") + "\xB3"), s = De("\u221212" + A("EI", "z"), A("L") + "\xB3"), d = De("12" + A("EI", "y"), A("L") + "\xB3"), a = De("\u221212" + A("EI", "y"), A("L") + "\xB3"), r = De("6" + A("EI", "z"), A("L") + "\xB2"), f = De("\u22126" + A("EI", "z"), A("L") + "\xB2"), i = De("6" + A("EI", "y"), A("L") + "\xB2"), c = De("\u22126" + A("EI", "y"), A("L") + "\xB2"), m = De(A("GJ"), A("L")), S = De("\u2212" + A("GJ"), A("L")), w = De("4" + A("EI", "z"), A("L")), y = De("2" + A("EI", "z"), A("L")), p = De("4" + A("EI", "y"), A("L")), h = De("2" + A("EI", "y"), A("L")), T = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', k = [
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
      ], M = [
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
          S,
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
      let B = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      B += '<table><tr><td class="hdr"></td>';
      for (const x of M) B += `<td class="hdr">${x}</td>`;
      B += "</tr>";
      for (let x = 0; x < 12; x++) {
        B += `<tr><td class="hdr">${k[x]}</td>`;
        for (let u = 0; u < 12; u++) if (u < x) B += `<td style="color:var(--fem-border-cell)">${u === 0 && x > 0 ? T : ""}</td>`;
        else {
          const I = P[x][u], L = (x === u ? "diag " : "") + (I !== "0" ? "nz" : "");
          B += `<td class="${L}">${I}</td>`;
        }
        B += "</tr>";
      }
      return B += "</table>", B;
    }
    function Na(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${De(A("E") + "\xB7" + A("A"), A("L"))}`,
          calc: `${De(Me(t) + "\xD7" + Me(o), Me(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${De("12\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB3")}`,
          calc: `${De("12\xD7" + Me(t) + "\xD7" + Me(n), Me(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${De("6\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB2")}`,
          calc: `${De("6\xD7" + Me(t) + "\xD7" + Me(n), Me(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${De("12\xB7" + A("E") + "\xB7" + A("I", "y"), A("L") + "\xB3")}`,
          calc: `${De("12\xD7" + Me(t) + "\xD7" + Me(l), Me(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${De("6\xB7" + A("E") + "\xB7" + A("I", "y"), A("L") + "\xB2")}`,
          calc: `${De("6\xD7" + Me(t) + "\xD7" + Me(l), Me(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${De(A("G") + "\xB7" + A("J"), A("L"))}`,
          calc: `${De(Me(s) + "\xD7" + Me(d), Me(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${De("4\xB7" + A("E") + "\xB7" + A("I", "z"), A("L"))}`,
          calc: `${De("4\xD7" + Me(t) + "\xD7" + Me(n), Me(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${De("2\xB7" + A("E") + "\xB7" + A("I", "z"), A("L"))}`,
          calc: `${De("2\xD7" + Me(t) + "\xD7" + Me(n), Me(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${De("4\xB7" + A("E") + "\xB7" + A("I", "y"), A("L"))}`,
          calc: `${De("4\xD7" + Me(t) + "\xD7" + Me(l), Me(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${De("2\xB7" + A("E") + "\xB7" + A("I", "y"), A("L"))}`,
          calc: `${De("2\xD7" + Me(t) + "\xD7" + Me(l), Me(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${Me(f.val)}</span></div>`).join("")}</div>`;
    }
    function Jn(t, o, n, l) {
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
    function qs(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Kt && Kt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((x) => o[x]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const x = Po(ho(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, I = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, j = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, g = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, E = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], C = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let V = 0; V < 6; V++) {
          const ae = V, Z = V + 6, K = (E.length >= 12 ? E[ae] : V >= 3 && E.length >= 6 && E[V - 3]) ? "checked" : "", de = (E.length >= 12 ? E[Z] : V >= 3 && E.length >= 6 && E[V]) ? "checked" : "", re = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", Ie = v.length >= 12 && v[Z] > 0 ? v[Z].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${C[V]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${K}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Z}" ${de}></td>
          <td><input type="number" data-spr="${ae}" value="${re}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Z}" value="${Ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Me(x)}${Me(u)}${Me(I)}${Me(L)}${Me(R)}${Me(j)}${Me(g)}${X}`;
      } else {
        const x = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, I = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = x / (2 * (1 + I)), R = l.length === 4, j = x / (1 - I * I);
        `${l.length}${l.join(", ")}${Me(x)}${Me(L)}${Me(u)}${Me(I)}`, R && (S = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${A("D")} = ${De(A("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${De("1\u2212\u03BD", "2")}</span>
          </span> = ${De(Me(x), "1\u2212" + Me(I) + "\xB2")} = <span class="highlight">${Me(j)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${A("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${A("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${A("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${A("u", "x")} = \u03A3${A("N", "i")}\xB7${A("u", "xi")} + \u03B1\u2081\xB7${A("N", "5")} + \u03B1\u2082\xB7${A("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${A("u", "y")} = \u03A3${A("N", "i")}\xB7${A("u", "yi")} + \u03B1\u2083\xB7${A("N", "5")} + \u03B1\u2084\xB7${A("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${A("d")} = [${A("B", "C")} &nbsp; ${A("B", "I")}] \xB7 [${A("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${A("k", "CC")} = \u222B${A("B", "C")}<sup>T</sup>\xB7${A("E")}\xB7${A("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${A("k", "CI")} = \u222B${A("B", "C")}<sup>T</sup>\xB7${A("E")}\xB7${A("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${A("k", "II")} = \u222B${A("B\u0304", "I")}<sup>T</sup>\xB7${A("E")}\xB7${A("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${A("k", "C")} = ${A("k", "CC")} \u2212 ${A("k", "CI")} \xB7 ${A("k", "II")}\u207B\xB9 \xB7 ${A("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${A("B\u0304", "I")} = ${A("B", "I")} + ${A("B", "IC")} &nbsp; donde &nbsp; ${A("B", "IC")} = \u2212${De("1", "V")}\u222B${A("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${A("K", "drill")} = \u03B1\xB7${A("G")}\xB7${A("t")} \xB7 \u222B${A("B", "d")}<sup>T</sup>\xB7${A("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${A("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${A("D", "b")} = ${De(A("E") + "\xB7" + A("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Me(x * u ** 3 / (12 * (1 - I ** 2)))}</span></div>
          <div>${A("D", "s")} = \u03BA\xB7${A("G")}\xB7${A("t")} = <span class="highlight">${Me(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${A("K", "24\xD724")} = ${A("K", "membrana")}(8\xD78) + ${A("K", "flexi\xF3n")}(12\xD712) + ${A("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let i = "", c = "", m = "", S = "", w = "", y = "", p = "", h = "", T = null, k = null, M = null, P = [];
      try {
        if (T = vn(s, a, t), k = yn(s), M = no(ns(k), no(T, k)), P = d ? [
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
          const L = Po(ho(s[1], s[0])), R = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, j = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, g = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, E = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, C = ((_t = a.torsionalConstants) == null ? void 0 : _t.get(t)) ?? 0;
          S = Ca(R, j, g, E, v, C, L);
        }
        w = Fa(s), y = Ra(), p = Pa(l), h = Oa(d);
        const x = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', I = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        i = `<div class="matrix-label">k_local (${T.length}\xD7${T.length}) ${x}</div>${Gn(T, P)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${k.length}\xD7${k.length}) ${u}</div>${Gn(k, P)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${I}</div>${Gn(M, P)}`;
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
        l.map((u, I) => {
          var _a3;
          const L = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = x.map((j, g) => `<span class="prop-key">${j}</span>: <span class="${Math.abs(L[g]) > 1e-10 ? "result-val" : ""}">${Me(L[g])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (f && d && (r == null ? void 0 : r.deformations) && T && k) {
        const x = (_u = f.normals) == null ? void 0 : _u.get(t), u = (_v = f.shearsY) == null ? void 0 : _v.get(t), I = (_w = f.shearsZ) == null ? void 0 : _w.get(t), L = (_x = f.torsions) == null ? void 0 : _x.get(t), R = (_y = f.bendingsY) == null ? void 0 : _y.get(t), j = (_z = f.bendingsZ) == null ? void 0 : _z.get(t), g = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], E = [];
        for (const Z of l) {
          const K = ((_A = r.deformations) == null ? void 0 : _A.get(Z)) || [
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
          v = no(k, E);
        } catch {
          v = new Array(12).fill(0);
        }
        let C = [];
        try {
          C = no(T, v);
        } catch {
          C = new Array(12).fill(0);
        }
        const X = (Z, K) => Z.map((de, re) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[re % 6]}=${Me(de)}</span>`).join(", "), ae = [
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
        `${A("u", "global")}${l.map((Z, K) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${g.map((de, re) => `<span style="color:${Math.abs(E[K * 6 + re]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Me(E[K * 6 + re])}</span>`).join(", ")}`).join(" | ")}${A("u", "local")}${A("T")}${A("u", "global")}${A("u", "local")}${X(v, [
          ...g,
          ...g
        ])}${A("f", "local")}${A("k", "local")}${A("u", "local")}${A("f", "local")}${C.map((Z, K) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[K]}=${Me(Z)}</span>`).join(", ")}${A("P", "1")}${A("N", "i")}${Me(C[0])}${A("P", "7")}${A("N", "j")}${Me(C[6])}${A("P", "2")}${A("V", "y,i")}${Me(C[1])}${A("P", "8")}${A("V", "y,j")}${Me(C[7])}${A("P", "3")}${A("V", "z,i")}${Me(C[2])}${A("P", "9")}${A("V", "z,j")}${Me(C[8])}${A("P", "4")}${A("M", "x,i")}${Me(C[3])}${A("P", "10")}${A("M", "x,j")}${Me(C[9])}${A("P", "5")}${A("M", "y,i")}${Me(C[4])}${A("P", "11")}${A("M", "y,j")}${Me(C[10])}${A("P", "6")}${A("M", "z,i")}${Me(C[5])}${A("P", "12")}${A("M", "z,j")}${Me(C[11])}${x ? x.map((Z) => Me(Z)).join(", ") : "\u2014"}${u ? u.map((Z) => Me(Z)).join(", ") : "\u2014"}${I ? I.map((Z) => Me(Z)).join(", ") : "\u2014"}${L ? L.map((Z) => Me(Z)).join(", ") : "\u2014"}${R ? R.map((Z) => Me(Z)).join(", ") : "\u2014"}${j ? j.map((Z) => Me(Z)).join(", ") : "\u2014"}`;
      } else if (f && d) {
        const x = (_B = f.normals) == null ? void 0 : _B.get(t), u = (_C = f.shearsY) == null ? void 0 : _C.get(t), I = (_D = f.shearsZ) == null ? void 0 : _D.get(t), L = (_E = f.torsions) == null ? void 0 : _E.get(t), R = (_F = f.bendingsY) == null ? void 0 : _F.get(t), j = (_G = f.bendingsZ) == null ? void 0 : _G.get(t);
        `${x ? x.map((g) => Me(g)).join(", ") : "\u2014"}${u ? u.map((g) => Me(g)).join(", ") : "\u2014"}${I ? I.map((g) => Me(g)).join(", ") : "\u2014"}${L ? L.map((g) => Me(g)).join(", ") : "\u2014"}${R ? R.map((g) => Me(g)).join(", ") : "\u2014"}${j ? j.map((g) => Me(g)).join(", ") : "\u2014"}`;
      } else if (f && !d) {
        const x = (_H = f.bendingXX) == null ? void 0 : _H.get(t), u = (_I = f.bendingYY) == null ? void 0 : _I.get(t), I = (_J = f.bendingXY) == null ? void 0 : _J.get(t), L = (_K = f.membraneXX) == null ? void 0 : _K.get(t), R = (_L = f.membraneYY) == null ? void 0 : _L.get(t), j = (_M = f.membraneXY) == null ? void 0 : _M.get(t);
        `${x ? x.map((g) => Me(g)).join(", ") : "\u2014"}${u ? u.map((g) => Me(g)).join(", ") : "\u2014"}${I ? I.map((g) => Me(g)).join(", ") : "\u2014"}${L ? L.map((g) => Me(g)).join(", ") : "\u2014"}${R ? R.map((g) => Me(g)).join(", ") : "\u2014"}${j ? j.map((g) => Me(g)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Kt = xl(t, o, n, a, r, f), Kt.id = "fem-inspect-panel", document.body.appendChild(Kt), (_N = Kt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ao()), (_O = Kt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const x = Kt.querySelectorAll("input[data-rel]"), u = Kt.querySelectorAll("input[data-spr]"), I = new Array(12).fill(false), L = new Array(12).fill(0);
        x.forEach((j) => {
          I[parseInt(j.dataset.rel)] = j.checked;
        }), u.forEach((j) => {
          const g = parseFloat(j.value);
          g > 0 && (L[parseInt(j.dataset.spr)] = g);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), I.some((j) => j) ? a.momentReleases.set(t, I) : a.momentReleases.delete(t), L.some((j) => j > 0) ? a.partialFixitySprings.set(t, L) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, I.map((j, g) => j ? relIds[g] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const R = Kt.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const B = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const x = Po(ho(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, I = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, j = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, g = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Na(u, I, L, R, j, g, x);
      })() : void 0;
      Kt.querySelectorAll("[data-full]").forEach((x) => {
        x.addEventListener("click", (u) => {
          u.stopPropagation();
          const I = x.dataset.full;
          if (I === "kLocal" && T) {
            const L = d ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, L, Yn(T, P), B);
          } else if (I === "T" && k) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, Yn(k, P));
          else if (I === "kGlobal" && M) {
            const L = d ? Ns() : "<em>Shell 18\xD718</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, Yn(M, P), B);
          }
        });
      });
    }
    function _s() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const p = y / 8, h = 30 * p, k = 12 * (1 - p) * (1 - p * 0.3) / 2, M = l.length;
        if (l.push([
          -k,
          -k,
          h
        ]), l.push([
          k,
          -k,
          h
        ]), l.push([
          k,
          k,
          h
        ]), l.push([
          -k,
          k,
          h
        ]), s.push([
          M,
          M + 1
        ]), s.push([
          M + 1,
          M + 2
        ]), s.push([
          M + 2,
          M + 3
        ]), s.push([
          M + 3,
          M
        ]), y > 0 && y < 8 && (s.push([
          M,
          M + 2
        ]), s.push([
          M + 1,
          M + 3
        ])), y > 0) {
          const P = M - 4;
          for (let B = 0; B < 4; B++) s.push([
            P + B,
            M + B
          ]);
          s.push([
            P,
            M + 1
          ]), s.push([
            P + 1,
            M + 2
          ]), s.push([
            P + 2,
            M + 3
          ]), s.push([
            P + 3,
            M
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
      const f = 2e8, i = 77e6, c = 5e-3, m = 2e-6, S = 1e-6, w = {
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
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = Ct(l, s, {
          supports: d,
          loads: r
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Ds() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const y = w / 20, p = 20 * y, h = 20 * (1 - Math.pow(2 * y - 1, 2)), T = 2;
        l.push([
          p,
          -2 / 2,
          h
        ]), l.push([
          p,
          T / 2,
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
      const r = 2e8, f = 77e6, i = 0.01, c = 5e-6, m = 2e-6, S = {
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
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const w = Ct(l, s, {
          supports: d,
          loads: a
        }, S);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
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
        const h = 60 * p / 16, T = d.length;
        d.push([
          h,
          -6 / 2,
          0
        ]);
        const k = d.length;
        d.push([
          h,
          6 / 2,
          0
        ]);
        const M = d.length;
        d.push([
          h,
          -6 / 2,
          28
        ]);
        const P = d.length;
        d.push([
          h,
          6 / 2,
          28
        ]), i.push(M, P), a.push([
          T,
          p * 2
        ]), a.push([
          p * 2,
          M
        ]), a.push([
          k,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          P
        ]), a.push([
          M,
          P
        ]);
      }
      for (const p of i) {
        const h = d[p][0];
        for (let T = 0; T <= 16; T++) {
          const k = 60 * T / 16;
          if (Math.abs(k - h) > 60 * 0.05 && Math.abs(k - h) < 60 * 0.45) {
            const M = d[p][1] < 0 ? T * 2 : T * 2 + 1;
            T % 2 === 0 && a.push([
              p,
              M
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
      const S = 2e8, w = 77e6, y = {
        elasticities: new Map(a.map((p, h) => [
          h,
          S
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
        const p = Ct(d, a, {
          supports: c,
          loads: m
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Hs() {
      const d = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const T = h * 3.5, k = h * 5 * Math.PI / 180;
        for (let M = 0; M < 6; M++) {
          const P = k + 2 * Math.PI * M / 6, B = 5 * Math.cos(P), x = 5 * Math.sin(P);
          d.push([
            B,
            x,
            T
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const T = h * 6;
        for (let k = 0; k < 6; k++) a.push([
          T + k,
          T + (k + 1) % 6
        ]);
        if (h < 12) {
          const k = (h + 1) * 6;
          for (let M = 0; M < 6; M++) a.push([
            T + M,
            k + M
          ]), a.push([
            T + M,
            k + (M + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const T = d.length;
        d.push([
          0,
          0,
          h * 3.5
        ]);
        const k = h * 6;
        for (let M = 0; M < 6; M++) a.push([
          T,
          k + M
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
        const T = 10 * h / 12, k = h * 6;
        for (let M = 0; M < 6; M++) i.set(k + M, [
          T,
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
      const c = 2e8, m = 77e6, S = 8e-3, w = 1e-5, y = 5e-6, p = {
        elasticities: new Map(a.map((h, T) => [
          T,
          c
        ])),
        shearModuli: new Map(a.map((h, T) => [
          T,
          m
        ])),
        areas: new Map(a.map((h, T) => [
          T,
          S
        ])),
        momentsOfInertiaZ: new Map(a.map((h, T) => [
          T,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((h, T) => [
          T,
          w
        ])),
        torsionalConstants: new Map(a.map((h, T) => [
          T,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const h = Ct(d, a, {
          supports: f,
          loads: i
        }, p);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function js() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const h = p / 20, T = p * 3;
        let k = 8 * (1 - h * 0.7);
        h > 0.4 && (k *= 0.85), h > 0.7 && (k *= 0.7);
        const M = s.length;
        s.push([
          0,
          0,
          T
        ]);
        for (let P = 0; P < 3; P++) {
          const B = P * 2 * Math.PI / 3 - Math.PI / 2, x = k * Math.cos(B), u = k * Math.sin(B), I = s.length;
          s.push([
            x,
            u,
            T
          ]), d.push([
            M,
            I
          ]);
          const L = s.length;
          s.push([
            x * 0.5,
            u * 0.5,
            T
          ]), d.push([
            M,
            L
          ]), d.push([
            L,
            I
          ]);
        }
        for (let P = 0; P < 3; P++) {
          const B = M + 1 + P * 2, x = M + 1 + (P + 1) % 3 * 2;
          d.push([
            B,
            x
          ]);
        }
        if (p < 20) {
          const B = M + 7;
          d.push([
            M,
            B
          ]);
          for (let x = 0; x < 3; x++) d.push([
            M + 1 + x * 2,
            B + 1 + x * 2
          ]), d.push([
            M + 2 + x * 2,
            B + 2 + x * 2
          ]), d.push([
            M + 1 + x * 2,
            B + 2 + x * 2
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
        const h = p * r, T = 5 * p / 20;
        f.set(h, [
          T,
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
      const i = 35e6, c = 14e6, m = 0.02, S = 5e-5, w = 2e-5, y = {
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
          S
        ])),
        momentsOfInertiaY: new Map(d.map((p, h) => [
          h,
          S
        ])),
        torsionalConstants: new Map(d.map((p, h) => [
          h,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = Ct(s, d, {
          supports: a,
          loads: f
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Ws() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const S = m * 12, w = 15 - m * 2, y = 20 - m * 3, p = 8 - m, h = t.length;
        for (let k = 0; k <= 4; k++) {
          const M = k / 4, P = -p / 2 + p * M, B = y * (1 - M * M * 0.3);
          for (let x = 0; x <= 12; x++) {
            const u = x / 12, I = S + B * u, L = w * Math.sin(Math.PI * u) * (1 - M * M * 0.5), R = P;
            t.push([
              I,
              R,
              L
            ]);
          }
        }
        const T = 13;
        for (let k = 0; k < 4; k++) for (let M = 0; M < 12; M++) {
          const P = h + k * T + M, B = h + k * T + M + 1, x = h + (k + 1) * T + M + 1, u = h + (k + 1) * T + M;
          o.push([
            P,
            B,
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
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: d
      });
      const a = 35e6, r = 0.2, f = 0.15, i = a / (2 * (1 + r)), c = {
        elasticities: new Map(o.map((m, S) => [
          S,
          a
        ])),
        poissonsRatios: new Map(o.map((m, S) => [
          S,
          r
        ])),
        thicknesses: new Map(o.map((m, S) => [
          S,
          f
        ])),
        shearModuli: new Map(o.map((m, S) => [
          S,
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const m = Ct(t, o, {
          supports: s,
          loads: d
        }, c);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Gs() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const p = y / 15, h = y * 3.5, T = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const k = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let M = 0; M < 12; M++) {
            const P = 2 * Math.PI * M / 12;
            l.push([
              Math.max(k, 1) * Math.cos(P),
              Math.max(k, 1) * Math.sin(P),
              h
            ]);
          }
        } else for (let k = 0; k < 12; k++) {
          const M = 2 * Math.PI * k / 12;
          l.push([
            T * Math.cos(M),
            T * Math.sin(M),
            h
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const p = y * 12, h = (y + 1) * 12;
        for (let k = 0; k < 12; k++) s.push([
          p + k,
          p + (k + 1) % 12
        ]);
        const T = y % 2 === 0 ? 1 : -1;
        for (let k = 0; k < 12; k++) {
          const M = (k + T + 12) % 12;
          s.push([
            p + k,
            h + M
          ]), s.push([
            p + k,
            h + k
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
        for (let T = 0; T < 12; T += 3) r.set(p + T, [
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
      const f = 2e8, i = 77e6, c = 6e-3, m = 8e-6, S = 4e-6, w = {
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
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = Ct(l, s, {
          supports: a,
          loads: r
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Vn() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Q.W) == null ? void 0 : _a2.val) ?? 5, o = ((_b = Q.H) == null ? void 0 : _b.val) ?? 3, n = ((_c = Q.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Q.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Q.ny) == null ? void 0 : _e2.val) ?? 6), d = ((_f = Q.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Q.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Q.P) == null ? void 0 : _h.val) ?? 100, f = d / (2 * (1 + a)), i = t / l, c = o / s, m = [], S = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let M = 0; M <= s; M++) for (let P = 0; P <= l; P++) m.push([
        P * i,
        0,
        M * c
      ]);
      const p = l + 1;
      for (let M = 0; M < s; M++) for (let P = 0; P < l; P++) S.push([
        M * p + P,
        M * p + P + 1,
        (M + 1) * p + P + 1,
        (M + 1) * p + P
      ]);
      for (let M = 0; M <= l; M++) w.set(M, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = [];
      for (let M = 0; M <= l; M++) h.push(s * p + M);
      const T = r / h.length;
      for (const M of h) y.set(M, [
        T,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = S, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const k = {
        elasticities: new Map(S.map((M, P) => [
          P,
          d
        ])),
        poissonsRatios: new Map(S.map((M, P) => [
          P,
          a
        ])),
        thicknesses: new Map(S.map((M, P) => [
          P,
          n
        ])),
        shearModuli: new Map(S.map((M, P) => [
          P,
          f
        ])),
        densities: new Map(S.map((M, P) => [
          P,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const M = Ct(m, S, {
          supports: w,
          loads: y
        }, k);
        if (M && e.deformOutputs) {
          e.deformOutputs.val = M;
          const P = Io(m, S, k, M);
          e.analyzeOutputs && (e.analyzeOutputs.val = P);
          const B = s * p + Math.floor(l / 2), x = M.deformations.get(B), u = x ? x[0] : 0;
          console.log(`Muro Q4: Ux=${u.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (M) {
        console.warn("MuroQ4:", M.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function Ys() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Q.L) == null ? void 0 : _a2.val) ?? 6, o = ((_b = Q.h) == null ? void 0 : _b.val) ?? 0.5, n = ((_c = Q.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Q.nx) == null ? void 0 : _d.val) ?? 12), s = Math.round(((_e2 = Q.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Q.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Q.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Q.P) == null ? void 0 : _h.val) ?? 50, f = d / (2 * (1 + a)), i = t / l, c = o / s, m = [], S = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let k = 0; k <= s; k++) for (let M = 0; M <= l; M++) m.push([
        M * i,
        0,
        k * c
      ]);
      const p = l + 1;
      for (let k = 0; k < s; k++) for (let M = 0; M < l; M++) S.push([
        k * p + M,
        k * p + M + 1,
        (k + 1) * p + M + 1,
        (k + 1) * p + M
      ]);
      for (let k = 0; k <= s; k++) w.set(k * p, [
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
        0,
        -r,
        0,
        0,
        0
      ]), e.nodes.val = m, e.elements.val = S, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const T = {
        elasticities: new Map(S.map((k, M) => [
          M,
          d
        ])),
        poissonsRatios: new Map(S.map((k, M) => [
          M,
          a
        ])),
        thicknesses: new Map(S.map((k, M) => [
          M,
          n
        ])),
        shearModuli: new Map(S.map((k, M) => [
          M,
          f
        ])),
        densities: new Map(S.map((k, M) => [
          M,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = T);
      try {
        const k = Ct(m, S, {
          supports: w,
          loads: y
        }, T);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const M = Io(m, S, T, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = M);
          const P = k.deformations.get(h), B = P ? P[2] : 0, x = n * o * o * o / 12, u = r * t * t * t / (3 * d * x);
          console.log(`Viga Q4: Uz_tip=${B.toExponential(4)} | Analitico=${u.toExponential(4)} | ratio=${(Math.abs(B) / u).toFixed(4)}`);
        }
      } catch (k) {
        console.warn("VigaQ4:", k.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function qa() {
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
    function _a() {
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
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), r = o("po-L"), f = o("po-As") * 1e-4, i = o("po-nbar"), c = o("po-drift") / 100, m = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const w = [], y = c * a, p = 40;
        for (let h = 1; h <= m; h++) {
          const T = y * h / m;
          for (let k = 0; k <= p; k++) w.push(T * Math.sin(2 * Math.PI * k / p));
        }
        S.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await Qs(async () => {
            const { cyclicPushover: k } = await import("./cyclicPushoverCpp-C_AWr1zl.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: k
            };
          }, __vite__mapDeps([6,5]), import.meta.url), T = await h({
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
          S.textContent = `Completado: ${T.nSteps} pasos`, Da(t.querySelector("#pushover-canvas"), T.displacements, T.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (h) {
          S.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Da(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = d - r.left - r.right, i = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let c = Math.min(...o), m = Math.max(...o), S = Math.min(...n), w = Math.max(...n);
      c === m && (c -= 0.01, m += 0.01), S === w && (S -= 1, w += 1);
      const y = m - c, p = w - S, h = (P) => r.left + (P - c) / y * f, T = (P) => r.top + i - (P - S) / p * i;
      s.strokeStyle = "#333", s.lineWidth = 0.5, c < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), r.top), s.lineTo(h(0), r.top + i), s.stroke()), S < 0 && w > 0 && (s.beginPath(), s.moveTo(r.left, T(0)), s.lineTo(r.left + f, T(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), T(n[0]));
      for (let P = 1; P < o.length; P++) s.lineTo(h(o[P]), T(n[P]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + i / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const k = y / 5;
      for (let P = 0; P <= 5; P++) {
        const B = c + k * P;
        s.fillText((B * 1e3).toFixed(1), h(B), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const M = p / 5;
      for (let P = 0; P <= 5; P++) {
        const B = S + M * P;
        s.fillText(B.toFixed(0), r.left - 5, T(B) + 3);
      }
    }
    let en = null;
    function Ba() {
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
      }), t.querySelector("#nl-test").addEventListener("click", () => Ha(t));
    }
    function Ha(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let V = 0; V < a; V++) {
        const ae = d * (1 + V * 0.5);
        for (let Z = 0; Z < r; Z++) {
          const K = Z / r * 2 * Math.PI;
          f.push(ae * Math.sin(K));
        }
      }
      const i = o / n, c = l * n;
      let m = 0, S = 0, w = -i, y = i, p = 0, h = 0, T = 0, k = 0, M = 0, P = 0;
      const B = [];
      for (const V of f) {
        let ae = w, Z = y, K = p, de = h, re = T, Ie = k, Pe = M, _ = P, fe;
        const ne = V - m;
        if (Math.abs(ne) < 1e-20) {
          B.push(S);
          continue;
        }
        if ((_ === 0 || _ === 3) && (ne < 0 ? (_ = 2, de = -i, re = -o, K = de, Ie = 0, Pe = 0) : (_ = 1, de = i, re = o, K = de, Ie = 0, Pe = 0)), _ === 2 && ne > 0) {
          _ = 1, Ie = m, Pe = S, m < ae && (ae = m);
          const Se = (Z - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Se, 0.8);
          de = (o * je - c * i * je - Pe + n * Ie) / (n - c), re = o * je + c * (de - i * je), K = Z;
        } else if (_ === 1 && ne < 0) {
          _ = 2, Ie = m, Pe = S, m > Z && (Z = m);
          const Se = (Z - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Se, 0.8);
          de = (-o * je + c * i * je - Pe + n * Ie) / (n - c), re = -o * je + c * (de + i * je), K = ae;
        }
        const pe = Math.abs((K - de) / i);
        let ee = s - 0.925 * pe / (0.15 + pe);
        ee < 0.1 && (ee = 0.1);
        const ue = (V - Ie) / (de - Ie), we = 1 + Math.pow(Math.abs(ue), ee), se = Math.pow(we, 1 / ee);
        fe = l * ue + (1 - l) * ue / se, fe = fe * (re - Pe) + Pe, B.push(fe), m = V, S = fe, w = ae, y = Z, p = K, h = de, T = re, k = Ie, M = Pe, P = _;
      }
      const x = t.querySelector("#nl-canvas"), u = x.getContext("2d"), I = x.width, L = x.height;
      u.clearRect(0, 0, I, L);
      const R = Math.max(...f.map(Math.abs)), j = Math.max(...B.map(Math.abs)), g = (I - 40) / (2 * R), E = (L - 40) / (2 * j), v = I / 2, C = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, C), u.lineTo(I - 20, C), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", I - 40, C - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, I - 30, C + 12), u.fillText(`\xB1${(j / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let V = 0; V < f.length; V++) {
        const ae = v + f[V] * g, Z = C - B[V] * E;
        V === 0 ? u.moveTo(ae, Z) : u.lineTo(ae, Z);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, C - o * E), u.lineTo(I - 20, C - o * E), u.stroke(), u.beginPath(), u.moveTo(20, C + o * E), u.lineTo(I - 20, C + o * E), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, I - 50, C - o * E - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function ja() {
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
      const a = fl({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Bo = null;
    function Wa(t) {
      Bo && Bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = mn(), l = bn(), s = Object.entries(n).map(([i, c]) => `<option value="${c}">${i}</option>`).join(""), d = Object.entries(l).map(([i, c]) => `<option value="${c}">${i}</option>`).join("");
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
      const a = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
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
      a.addEventListener("change", f), f(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = a.value, c = {
          secType: i
        };
        i === "rect" ? (c.b = parseFloat(o.querySelector("#ap-b").value), c.h = parseFloat(o.querySelector("#ap-h").value), c.material = 0) : i === "circ" ? (c.b = parseFloat(o.querySelector("#ap-d").value), c.material = 0) : i === "W" || i === "HSS" ? (c.profileIdx = parseInt(o.querySelector("#ap-profile").value), c.material = 1) : i === "I-param" ? (c.bf = parseFloat(o.querySelector("#ap-bf").value), c.hf = parseFloat(o.querySelector("#ap-hf").value), c.tf = parseFloat(o.querySelector("#ap-tf").value), c.tw = parseFloat(o.querySelector("#ap-tw").value), c.material = 1) : i === "tubular" && (c.bc = parseFloat(o.querySelector("#ap-bc").value), c.hc = parseFloat(o.querySelector("#ap-hc").value), c.t = parseFloat(o.querySelector("#ap-t").value), c.material = 1);
        const m = new Array(12).fill(false), S = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((w) => {
          m[parseInt(w.dataset.asgnRel)] = w.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((w) => {
          const y = parseFloat(w.value);
          y > 0 && (S[parseInt(w.dataset.asgnSpr)] = y);
        }), c.releases12 = m, c.springs12 = S, c.releaseRotStart = m[4] || m[5], c.releaseRotEnd = m[10] || m[11], c.releaseAxial = m[0], c.releaseTorsion = m[3], c.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((w) => ye.set(w, {
          ...c
        })), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => ye.delete(i)), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Ho = null;
    function Ga(t) {
      var _a2, _b, _c;
      Ho && Ho.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > d && a > r, i = Math.sqrt(d * d + a * a + r * r), c = $e.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
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
    `, document.body.appendChild(w), Ho = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), Ho = null, Ao();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        U.add(t), w.remove(), Ho = null, Ao(), Re();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Ho = null, qs(t);
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
        const i = et();
        if (!i) return null;
        const c = i.controls.object, m = new Oe(f[0], f[1], f[2]);
        m.project(c);
        const S = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * S.width,
          y: (-m.y + 1) / 2 * S.height
        };
      }
      function a(f, i, c, m, S) {
        const w = Math.min(f, c), y = Math.max(f, c), p = Math.min(i, m), h = Math.max(i, m), T = e.nodes.val, k = e.elements.val, M = [];
        for (let P = 0; P < k.length; P++) {
          const B = k[P], x = B.map((u) => d(T[u])).filter(Boolean);
          if (x.length !== 0) if (S) x.every((I) => I.x >= w && I.x <= y && I.y >= p && I.y <= h) && M.push(P);
          else {
            if (x.some((I) => I.x >= w && I.x <= y && I.y >= p && I.y <= h)) {
              M.push(P);
              continue;
            }
            if (B.length === 2) {
              const I = x[0], L = x[1];
              r(I.x, I.y, L.x, L.y, w, p, y, h) && M.push(P);
            }
          }
        }
        return M;
      }
      function r(f, i, c, m, S, w, y, p) {
        const h = (k, M) => k >= S && k <= y && M >= w && M <= p;
        if (h(f, i) || h(c, m)) return true;
        const T = (k, M, P, B, x, u, I, L) => {
          const R = (P - k) * (L - u) - (B - M) * (I - x);
          if (Math.abs(R) < 1e-10) return false;
          const j = ((x - k) * (L - u) - (u - M) * (I - x)) / R, g = ((x - k) * (B - M) - (u - M) * (P - k)) / R;
          return j >= 0 && j <= 1 && g >= 0 && g <= 1;
        };
        return T(f, i, c, m, S, w, y, w) || T(f, i, c, m, y, w, y, p) || T(f, i, c, m, S, p, y, p) || T(f, i, c, m, S, w, S, p);
      }
      o.addEventListener("mousedown", (f) => {
        Yt && (n = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), o.addEventListener("mousemove", (f) => {
        if (po) {
          const c = et();
          if (!c) return;
          const m = Fs(f.clientX, f.clientY, c.camera, c.rendererElm);
          if (wt.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== zo && Ta(m.nodeIdx), wt.track && zo !== null && m.worldPos && m.snapType !== "node") {
            const S = za(m.worldPos, zo);
            S && (m.worldPos = S, m.snapType = "grid");
          }
          if (zo !== null && m.worldPos) {
            const S = e.nodes.val[zo];
            S && Cs(f.clientX, f.clientY, new Oe(...S), m.worldPos);
          } else if (vt !== null && m.worldPos) {
            const S = e.nodes.val[vt];
            S && Cs(f.clientX, f.clientY, new Oe(...S), m.worldPos);
          } else Qt && (Qt.remove(), Qt = null);
          m.nodeIdx, Rs(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!oo && !Yt) return;
        if (Yt && n) {
          const c = f.offsetX - n.x, m = f.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = c > 0, w = Math.min(n.x, f.offsetX), y = Math.min(n.y, f.offsetY), p = Math.abs(c), h = Math.abs(m);
            l.style.left = w + "px", l.style.top = y + "px", l.style.width = p + "px", l.style.height = h + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const i = Wn(f);
        if (i >= 0) Os(i), o.style.cursor = "pointer";
        else {
          if (Jt) {
            const c = et();
            c == null ? void 0 : c.scene.remove(Jt), Jt = null, c == null ? void 0 : c.render();
          }
          o.style.cursor = Yt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (f) => {
        if (Yt && n) {
          const i = f.offsetX - n.x, c = f.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(c) > s) {
            const m = i > 0, S = a(n.x, n.y, f.offsetX, f.offsetY, m);
            f.ctrlKey || f.metaKey || (ht.clear(), Mo()), S.forEach((y) => {
              ht.has(y) || (ht.add(y), Bn(y));
            }), wo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (f) => {
        if (po) {
          const i = et();
          if (!i) return;
          const c = Fs(f.clientX, f.clientY, i.camera, i.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (La(c), Rs(c));
          return;
        }
        if (Yt) {
          if (l) return;
          const i = Wn(f), c = f.ctrlKey || f.metaKey;
          if (i >= 0) {
            if (c) if (ht.has(i)) {
              ht.delete(i);
              const m = $o.findIndex((S) => S.__elemIdx === i);
              if (m >= 0) {
                const S = et();
                S == null ? void 0 : S.scene.remove($o[m]), $o[m].geometry.dispose(), $o[m].material.dispose(), $o.splice(m, 1), S == null ? void 0 : S.render();
              }
            } else ht.add(i), Bn(i);
            else ht.clear(), Mo(), ht.add(i), Bn(i);
            wo();
          } else c || (ht.clear(), Mo(), wo());
          return;
        }
        if (oo) {
          const i = Wn(f);
          i >= 0 && (Os(i), Ga(i));
        }
      });
    }, 500), Jo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Ze();
    }), Ke.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !qe), qe = t, (_a2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", qe), qe) {
        const n = et();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (_e = n.settings.loads.rawVal, n.settings.loads.val = false), Ln(), Ae.querySelector("#cad3d-mode-prev").style.display = "", Ae.querySelector("#cad3d-mode-next").style.display = "", Ae.querySelector("#cad3d-mode-label").style.display = "";
      } else Cn(), Ae.querySelector("#cad3d-mode-prev").style.display = "none", Ae.querySelector("#cad3d-mode-next").style.display = "none", Ae.querySelector("#cad3d-mode-label").style.display = "none", z && z !== "placa-q4" && z !== "placa-3q" && Re(), setTimeout(() => {
        var _a3;
        const n = et();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && _e && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${qe ? "ON" : "OFF"}`);
    }, Ke.setMode = (t) => {
      var _a2;
      if (!(Ce == null ? void 0 : Ce.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Ce.modeShapes.length - 1));
      const o = Ce.modeShapes[xe], { extent: n } = vo();
      let l = 0;
      for (let d = 0; d < ke.length; d++) {
        const a = o[d * 6] || 0, r = o[d * 6 + 1] || 0, f = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      Ge = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const s = Ae.querySelector("#cad3d-mode-label");
      s && Ce.frequencies && (s.textContent = `Modo ${xe + 1} \u2014 ${Ce.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Ce.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = Ke, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ae), document.body.appendChild(it.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Qe("muro-q4"), Vn(), Ts("muro-q4"), setTimeout(() => {
        z === "muro-q4" && so();
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
    }), document.body.appendChild(uo), document.body.appendChild(wl());
    const Js = document.createElement("span");
    return Js.style.display = "none", Js;
  };
});
export {
  __tla,
  ra as a,
  pl as c,
  Ql as g
};
