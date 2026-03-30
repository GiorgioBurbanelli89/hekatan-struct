const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { _ as Zs, p as En, m as Qs, d as Rt, s as ea, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Io, P as Ho, g as ta, a as oa, o as na } from "./theme-CzzIlc4y.js";
import { V as Se, P as io, R as vs, b as ys, B as ro, c as sa, d as kn, e as Ao, f as aa, S as la, M as ia, g as ra, F as mo, a as Fo, L as Bo, h as ca, G as da, A as Do, i as In, T as zn, j as jo, k as Wo, C as pa, l as fa } from "./Text-Cin90tvN.js";
import { g as Ko, b as Uo, a as ko } from "./analyze-B6dp1uvy.js";
import { g as Zt, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as go, s as Qt, m as Bt, t as An } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let Ms, ha, Ga;
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
  const Cn = [
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
  ], zo = [
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
  function ua(e, h) {
    return e === "kN" && h === "m" ? "kPa" : e === "kN" && h === "mm" || e === "N" && h === "mm" ? "MPa" : e === "N" && h === "m" ? "Pa" : e === "kip" && h === "in" ? "ksi" : e === "kip" && h === "ft" ? "ksf" : `${e}/${h}\xB2`;
  }
  const bo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function ho(e, h) {
    const O = Cn.find((Y) => Y.id === e), S = zo.find((Y) => Y.id === h), W = O.toKN, _ = S.toM, G = (Y, pe, E) => E / (Math.pow(W, Y) * Math.pow(_, pe));
    let D, B;
    switch (e) {
      case "kN":
        D = 10, B = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        D = 1, B = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        D = 1e3, B = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        D = 10, B = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        D = 5e3, B = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        D = 1e4, B = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${h}`,
      label: `${O.label}, ${S.label}`,
      force: O.label,
      length: S.label,
      stress: ua(e, h),
      moment: `${O.label}\xB7${S.label}`,
      E: G(1, -2, bo.E),
      G: G(1, -2, bo.G),
      A: G(0, 2, bo.A),
      Iz: G(0, 4, bo.Iz),
      Iy: G(0, 4, bo.Iy),
      J: G(0, 4, bo.J),
      rho: G(1, -4, bo.rho),
      spanRange: S.spanRange,
      heightRange: S.heightRange,
      defaultSpan: S.defaultSpan,
      defaultHeight: S.defaultHeight,
      defaultForce: D,
      forceRange: B,
      galponSpan: S.galponSpan,
      galponLength: S.galponLength,
      galponHeight: S.galponHeight,
      galponRise: S.galponRise
    };
  }
  ho("kN", "m"), ho("kip", "in");
  function Yo() {
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
  function ma(e) {
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
  function ba(e) {
    const h = e.force, [O, S, W] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CV (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: O,
          max: S,
          step: W,
          label: `Ex sismo (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: O,
          max: S,
          step: W,
          label: `Ex sismo (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: S,
          step: W,
          label: `Ex sismo (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: S,
          step: W,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: O,
          max: S,
          step: W,
          label: `Ey sismo (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CV (${h})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `F axial (${h})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: W,
          label: `CM (${h})`
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
  ha = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let h = false;
    function O(S, W) {
      var _a2, _b;
      if (!S.frequencies || S.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const _ = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], G = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let D = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${W.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (D += '<div id="modal-body" style="padding:0 12px 10px 12px;">', W.properties) for (const B of W.properties) D += `<span style="color:#888">${B}</span>
`;
      D += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const B of _) D += `<th style="padding:2px 5px">${B}</th>`;
      if (D += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, S.frequencies.forEach((B, Y) => {
        var _a3;
        const pe = B > 0 ? 1 / B : 0, E = B * 2 * Math.PI, V = ((_a3 = S.massParticipation) == null ? void 0 : _a3[Y]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let me = 0; me < 6; me++) G[me] += V[me];
        D += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${Y + 1}</td>
  <td style="padding:2px 6px; text-align:right">${B.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${pe.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${E.toFixed(2)}</td>`;
        for (let me = 0; me < 6; me++) {
          const ie = (V[me] * 100).toFixed(1), X = V[me] > 0.5 ? "#f00" : V[me] > 0.1 ? "#ff0" : "#0f0";
          D += `<td style="padding:2px 5px; text-align:right; color:${X}">${ie}%</td>`;
        }
        D += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(G[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[5] * 100).toFixed(1)}%</td></tr>`;
      }), D += "</table></div>", e.innerHTML = D, h) {
        const B = e.querySelector("#modal-body"), Y = e.querySelector("#modal-minimize");
        B && (B.style.display = "none"), Y && (Y.textContent = "\u25A2", Y.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        h = !h;
        const B = e.querySelector("#modal-body"), Y = e.querySelector("#modal-minimize");
        h ? (B.style.display = "none", Y.textContent = "\u25A2", Y.title = "Restaurar") : (B.style.display = "block", Y.textContent = "\u25AC", Y.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const B = [];
        B.push(`Modal Analysis \u2014 ${W.title}`);
        const Y = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${_.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        B.push(Y), B.push("-".repeat(Y.length));
        const pe = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        S.frequencies.forEach((V, me) => {
          var _a3;
          const ie = V > 0 ? 1 / V : 0, X = V * 2 * Math.PI, ee = ((_a3 = S.massParticipation) == null ? void 0 : _a3[me]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Ie = 0; Ie < 6; Ie++) pe[Ie] += ee[Ie];
          const ce = ee.map((Ie) => ((Ie * 100).toFixed(1) + "%").padStart(6)).join(" ");
          B.push(`${String(me + 1).padStart(4)}  ${V.toFixed(4).padStart(9)}  ${ie.toFixed(4).padStart(9)}  ${X.toFixed(2).padStart(9)}  ${ce}  ${(pe[0] * 100).toFixed(1).padStart(5)}%  ${(pe[1] * 100).toFixed(1).padStart(5)}%  ${(pe[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(B.join(`
`));
        const E = e.querySelector("#modal-copy");
        E.textContent = "\u2713", setTimeout(() => E.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: O
    };
  };
  const ue = 64516e-8, z = 416231e-12, R = 0.0254, co = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * ue,
      Iz: 16.4 * z,
      Iy: 2.2 * z,
      J: 0.0405 * z,
      d: 5.9 * R,
      bf: 3.94 * R
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * ue,
      Iz: 29.1 * z,
      Iy: 9.32 * z,
      J: 0.103 * z,
      d: 5.99 * R,
      bf: 5.99 * R
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * ue,
      Iz: 41.4 * z,
      Iy: 13.3 * z,
      J: 0.204 * z,
      d: 6.2 * R,
      bf: 6.02 * R
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * ue,
      Iz: 30.8 * z,
      Iy: 2.09 * z,
      J: 0.0426 * z,
      d: 7.89 * R,
      bf: 3.94 * R
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * ue,
      Iz: 61.9 * z,
      Iy: 7.97 * z,
      J: 0.172 * z,
      d: 8.14 * R,
      bf: 5.25 * R
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * ue,
      Iz: 82.7 * z,
      Iy: 18.3 * z,
      J: 0.346 * z,
      d: 7.93 * R,
      bf: 6.5 * R
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * ue,
      Iz: 110 * z,
      Iy: 37.1 * z,
      J: 0.536 * z,
      d: 8 * R,
      bf: 7.995 * R
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * ue,
      Iz: 146 * z,
      Iy: 49.1 * z,
      J: 0.871 * z,
      d: 8.25 * R,
      bf: 8.07 * R
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * ue,
      Iz: 184 * z,
      Iy: 60.9 * z,
      J: 1.45 * z,
      d: 8.5 * R,
      bf: 8.11 * R
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * ue,
      Iz: 272 * z,
      Iy: 88.6 * z,
      J: 3.54 * z,
      d: 9 * R,
      bf: 8.28 * R
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * ue,
      Iz: 53.8 * z,
      Iy: 2.18 * z,
      J: 0.0547 * z,
      d: 9.87 * R,
      bf: 3.96 * R
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * ue,
      Iz: 118 * z,
      Iy: 11.4 * z,
      J: 0.239 * z,
      d: 10.17 * R,
      bf: 5.75 * R
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * ue,
      Iz: 171 * z,
      Iy: 36.6 * z,
      J: 0.583 * z,
      d: 9.73 * R,
      bf: 7.96 * R
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * ue,
      Iz: 272 * z,
      Iy: 93.4 * z,
      J: 1.39 * z,
      d: 9.98 * R,
      bf: 10 * R
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * ue,
      Iz: 394 * z,
      Iy: 134 * z,
      J: 3.56 * z,
      d: 10.4 * R,
      bf: 10.13 * R
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * ue,
      Iz: 623 * z,
      Iy: 207 * z,
      J: 10.9 * z,
      d: 11.1 * R,
      bf: 10.34 * R
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * ue,
      Iz: 88.6 * z,
      Iy: 2.36 * z,
      J: 0.0704 * z,
      d: 11.91 * R,
      bf: 3.97 * R
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * ue,
      Iz: 156 * z,
      Iy: 4.66 * z,
      J: 0.293 * z,
      d: 12.31 * R,
      bf: 4.03 * R
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * ue,
      Iz: 204 * z,
      Iy: 17.3 * z,
      J: 0.3 * z,
      d: 12.22 * R,
      bf: 6.49 * R
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * ue,
      Iz: 310 * z,
      Iy: 44.1 * z,
      J: 0.906 * z,
      d: 11.94 * R,
      bf: 8.01 * R
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * ue,
      Iz: 425 * z,
      Iy: 95.8 * z,
      J: 1.58 * z,
      d: 12.06 * R,
      bf: 9.99 * R
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * ue,
      Iz: 597 * z,
      Iy: 195 * z,
      J: 4.05 * z,
      d: 12.25 * R,
      bf: 12.04 * R
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * ue,
      Iz: 833 * z,
      Iy: 270 * z,
      J: 8.44 * z,
      d: 12.71 * R,
      bf: 12.16 * R
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * ue,
      Iz: 1070 * z,
      Iy: 345 * z,
      J: 16 * z,
      d: 13.12 * R,
      bf: 12.32 * R
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * ue,
      Iz: 199 * z,
      Iy: 7 * z,
      J: 0.208 * z,
      d: 13.74 * R,
      bf: 5 * R
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * ue,
      Iz: 291 * z,
      Iy: 19.6 * z,
      J: 0.38 * z,
      d: 13.84 * R,
      bf: 6.73 * R
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * ue,
      Iz: 385 * z,
      Iy: 26.7 * z,
      J: 0.798 * z,
      d: 14.1 * R,
      bf: 6.77 * R
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * ue,
      Iz: 485 * z,
      Iy: 51.4 * z,
      J: 1.45 * z,
      d: 13.79 * R,
      bf: 8.03 * R
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * ue,
      Iz: 640 * z,
      Iy: 107 * z,
      J: 2.19 * z,
      d: 13.89 * R,
      bf: 9.99 * R
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * ue,
      Iz: 882 * z,
      Iy: 148 * z,
      J: 5.07 * z,
      d: 14.31 * R,
      bf: 10.13 * R
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * ue,
      Iz: 1240 * z,
      Iy: 447 * z,
      J: 7.12 * z,
      d: 14.32 * R,
      bf: 14.61 * R
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * ue,
      Iz: 1530 * z,
      Iy: 548 * z,
      J: 12.3 * z,
      d: 14.66 * R,
      bf: 14.73 * R
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * ue,
      Iz: 2140 * z,
      Iy: 838 * z,
      J: 23.7 * z,
      d: 15.22 * R,
      bf: 15.65 * R
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * ue,
      Iz: 301 * z,
      Iy: 9.59 * z,
      J: 0.262 * z,
      d: 15.69 * R,
      bf: 5.5 * R
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * ue,
      Iz: 448 * z,
      Iy: 24.5 * z,
      J: 0.545 * z,
      d: 15.86 * R,
      bf: 6.99 * R
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * ue,
      Iz: 659 * z,
      Iy: 37.2 * z,
      J: 1.52 * z,
      d: 16.26 * R,
      bf: 7.07 * R
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * ue,
      Iz: 954 * z,
      Iy: 119 * z,
      J: 2.39 * z,
      d: 16.33 * R,
      bf: 10.24 * R
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * ue,
      Iz: 1300 * z,
      Iy: 163 * z,
      J: 5.45 * z,
      d: 16.75 * R,
      bf: 10.37 * R
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * ue,
      Iz: 510 * z,
      Iy: 15.3 * z,
      J: 0.506 * z,
      d: 17.7 * R,
      bf: 6 * R
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * ue,
      Iz: 800 * z,
      Iy: 40.1 * z,
      J: 1.24 * z,
      d: 17.99 * R,
      bf: 7.5 * R
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * ue,
      Iz: 1170 * z,
      Iy: 60.3 * z,
      J: 3.49 * z,
      d: 18.47 * R,
      bf: 7.64 * R
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * ue,
      Iz: 1750 * z,
      Iy: 201 * z,
      J: 5.86 * z,
      d: 18.59 * R,
      bf: 11.15 * R
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * ue,
      Iz: 843 * z,
      Iy: 20.7 * z,
      J: 0.77 * z,
      d: 20.66 * R,
      bf: 6.5 * R
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * ue,
      Iz: 1330 * z,
      Iy: 57.5 * z,
      J: 1.83 * z,
      d: 20.99 * R,
      bf: 8.24 * R
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * ue,
      Iz: 1830 * z,
      Iy: 81.4 * z,
      J: 4.34 * z,
      d: 21.43 * R,
      bf: 8.36 * R
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * ue,
      Iz: 2670 * z,
      Iy: 274 * z,
      J: 6.83 * z,
      d: 21.51 * R,
      bf: 12.34 * R
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * ue,
      Iz: 1350 * z,
      Iy: 29.1 * z,
      J: 1.18 * z,
      d: 23.57 * R,
      bf: 7.01 * R
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * ue,
      Iz: 2100 * z,
      Iy: 82.5 * z,
      J: 2.68 * z,
      d: 23.92 * R,
      bf: 8.99 * R
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * ue,
      Iz: 3100 * z,
      Iy: 259 * z,
      J: 4.72 * z,
      d: 24.06 * R,
      bf: 12.75 * R
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * ue,
      Iz: 4020 * z,
      Iy: 340 * z,
      J: 9.5 * z,
      d: 24.48 * R,
      bf: 12.86 * R
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * ue,
      Iz: 4580 * z,
      Iy: 391 * z,
      J: 12.6 * z,
      d: 24.74 * R,
      bf: 12.9 * R
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * ue,
      Iz: 5680 * z,
      Iy: 479 * z,
      J: 21.2 * z,
      d: 25.24 * R,
      bf: 12.9 * R
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * ue,
      Iz: 2850 * z,
      Iy: 106 * z,
      J: 2.81 * z,
      d: 26.71 * R,
      bf: 9.96 * R
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * ue,
      Iz: 4090 * z,
      Iy: 159 * z,
      J: 6.77 * z,
      d: 27.29 * R,
      bf: 10.07 * R
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * ue,
      Iz: 3610 * z,
      Iy: 115 * z,
      J: 3.06 * z,
      d: 29.53 * R,
      bf: 10.4 * R
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * ue,
      Iz: 4930 * z,
      Iy: 164 * z,
      J: 6.43 * z,
      d: 30.01 * R,
      bf: 10.5 * R
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * ue,
      Iz: 5900 * z,
      Iy: 187 * z,
      J: 5.3 * z,
      d: 32.86 * R,
      bf: 11.48 * R
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * ue,
      Iz: 7800 * z,
      Iy: 225 * z,
      J: 7 * z,
      d: 35.55 * R,
      bf: 11.95 * R
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * ue,
      Iz: 8.22 * z,
      Iy: 8.22 * z,
      J: 13.4 * z,
      d: 4 * R,
      bf: 4 * R
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * ue,
      Iz: 10.7 * z,
      Iy: 10.7 * z,
      J: 17.9 * z,
      d: 4 * R,
      bf: 4 * R
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * ue,
      Iz: 12.3 * z,
      Iy: 12.3 * z,
      J: 21 * z,
      d: 4 * R,
      bf: 4 * R
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * ue,
      Iz: 30.3 * z,
      Iy: 30.3 * z,
      J: 48.3 * z,
      d: 6 * R,
      bf: 6 * R
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * ue,
      Iz: 41.1 * z,
      Iy: 41.1 * z,
      J: 66.9 * z,
      d: 6 * R,
      bf: 6 * R
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * ue,
      Iz: 49.6 * z,
      Iy: 49.6 * z,
      J: 82.2 * z,
      d: 6 * R,
      bf: 6 * R
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * ue,
      Iz: 70.7 * z,
      Iy: 70.7 * z,
      J: 112 * z,
      d: 8 * R,
      bf: 8 * R
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * ue,
      Iz: 98 * z,
      Iy: 98 * z,
      J: 158 * z,
      d: 8 * R,
      bf: 8 * R
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * ue,
      Iz: 122 * z,
      Iy: 122 * z,
      J: 199 * z,
      d: 8 * R,
      bf: 8 * R
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * ue,
      Iz: 202 * z,
      Iy: 202 * z,
      J: 323 * z,
      d: 10 * R,
      bf: 10 * R
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * ue,
      Iz: 254 * z,
      Iy: 254 * z,
      J: 412 * z,
      d: 10 * R,
      bf: 10 * R
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * ue,
      Iz: 355 * z,
      Iy: 355 * z,
      J: 564 * z,
      d: 12 * R,
      bf: 12 * R
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * ue,
      Iz: 452 * z,
      Iy: 452 * z,
      J: 724 * z,
      d: 12 * R,
      bf: 12 * R
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * ue,
      Iz: 18 * z,
      Iy: 9.58 * z,
      J: 22.6 * z,
      d: 6 * R,
      bf: 4 * R
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * ue,
      Iz: 23.8 * z,
      Iy: 12.3 * z,
      J: 30.3 * z,
      d: 6 * R,
      bf: 4 * R
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * ue,
      Iz: 33.6 * z,
      Iy: 11.8 * z,
      J: 33 * z,
      d: 8 * R,
      bf: 4 * R
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * ue,
      Iz: 45.1 * z,
      Iy: 15 * z,
      J: 44.5 * z,
      d: 8 * R,
      bf: 4 * R
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * ue,
      Iz: 46.1 * z,
      Iy: 28.2 * z,
      J: 61.3 * z,
      d: 8 * R,
      bf: 6 * R
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * ue,
      Iz: 63 * z,
      Iy: 37.5 * z,
      J: 84.6 * z,
      d: 8 * R,
      bf: 6 * R
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * ue,
      Iz: 103 * z,
      Iy: 47.1 * z,
      J: 115 * z,
      d: 10 * R,
      bf: 6 * R
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * ue,
      Iz: 196 * z,
      Iy: 102 * z,
      J: 249 * z,
      d: 12 * R,
      bf: 8 * R
    }
  ];
  function Go() {
    const e = {};
    return co.forEach((h, O) => {
      h.type === "W" && (e[h.name] = O);
    }), e;
  }
  function Jo() {
    const e = {};
    return co.forEach((h, O) => {
      h.type === "HSS" && (e[h.name] = O);
    }), e;
  }
  function ga(e) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: h, elements: O, elementInputs: S, nodeInputs: W, deformOutputs: _ } = e, G = h.length * 6, D = O.length, B = O.filter((X) => X.length === 2).length, Y = O.filter((X) => X.length >= 3).length, pe = document.createElement("div");
    pe.className = "rpt-overlay";
    let E = "";
    E += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', E += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", E += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', E += '<hr class="rpt-sep"/>', E += "<h2>1. Input Data</h2>", E += '<table class="rpt-info"><tbody>', E += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, E += `<tr><td>Number of elements</td><td class="val">${D} (${B} frames, ${Y} shells)</td></tr>`, E += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', E += `<tr><td>Total DOFs</td><td class="val">${G}</td></tr>`, E += "</tbody></table>", E += "<h3>1.1 Node Coordinates</h3>", E += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((X, ee) => {
      E += `<tr><td>${ee}</td><td>${Je(X[0])}</td><td>${Je(X[1])}</td><td>${Je(X[2])}</td></tr>`;
    }), E += "</tbody></table>", E += "<h3>1.2 Element Connectivity</h3>", E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', O.forEach((X, ee) => {
      var _a3, _b2, _c2, _d2;
      const ce = X.length === 2, Ie = X.map((Ke) => h[Ke]), Pe = ce ? go(Qt(Ie[1], Ie[0])) : 0, Ce = ((_a3 = S.elasticities) == null ? void 0 : _a3.get(ee)) ?? 0, We = ((_b2 = S.areas) == null ? void 0 : _b2.get(ee)) ?? 0, st = ((_c2 = S.momentsOfInertiaZ) == null ? void 0 : _c2.get(ee)) ?? 0, Be = ((_d2 = S.momentsOfInertiaY) == null ? void 0 : _d2.get(ee)) ?? 0;
      E += `<tr><td>${ee}</td><td>${ce ? "Frame" : "Shell"}</td><td>${X.join(" \u2192 ")}</td>`, E += `<td>${Je(Pe)}</td><td>${Je(Ce)}</td><td>${Je(We)}</td><td>${Je(st)}</td><td>${Je(Be)}</td></tr>`;
    }), E += "</tbody></table>", E += "<h2>2. Element Formulation</h2>", B > 0 && (E += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", E += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", E += "<h4>2.1.1 Shape Functions</h4>", E += "<p><b>Axial</b> (linear interpolation):</p>", E += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', E += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', E += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', E += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', E += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', E += "</tbody></table>", E += va(), E += "<p><b>Torsion</b> (linear): same as axial.</p>", E += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", E += "<p>The B matrix relates nodal displacements to internal strains:</p>", E += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', E += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', E += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', E += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', E += "<h4>2.1.3 Constitutive Relations D</h4>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', E += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', E += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', E += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', E += "</tbody></table>", E += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", E += "<p>Obtained by analytical integration:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', E += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", E += '<div class="rpt-eq-small">', E += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", E += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", E += "</div>", E += "<h4>2.1.5 Transformation Matrix T</h4>", E += "<p>Direction cosines of element axis:</p>", E += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', E += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', E += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', E += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", E += "<h4>2.1.6 Global Stiffness Matrix</h4>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), E += "<h2>3. Numerical Results per Element</h2>", E += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let X = 0; X < D; X++) {
      const ee = O[X], ce = ee.map((Ft) => h[Ft]);
      if (!(ee.length === 2)) continue;
      const Pe = go(Qt(ce[1], ce[0])), Ce = ((_a2 = S.elasticities) == null ? void 0 : _a2.get(X)) ?? 0, We = ((_b = S.areas) == null ? void 0 : _b.get(X)) ?? 0, st = ((_c = S.momentsOfInertiaZ) == null ? void 0 : _c.get(X)) ?? 0, Be = ((_d = S.momentsOfInertiaY) == null ? void 0 : _d.get(X)) ?? 0, Ke = ((_e = S.shearModuli) == null ? void 0 : _e.get(X)) ?? 0, ge = ((_f = S.torsionalConstants) == null ? void 0 : _f.get(X)) ?? 0;
      let Fe = null, Ae = null, Ue = null;
      try {
        Fe = Ko(ce, S, X), Ae = Uo(ce), Ue = Bt(An(Ae), Bt(Fe, Ae));
      } catch {
        continue;
      }
      const dt = Qt(ce[1], ce[0]), ot = dt[0] / Pe, ft = dt[1] / Pe, $t = dt[2] / Pe;
      E += '<div class="rpt-elem-block">', E += `<h3 class="rpt-elem-title" data-toggle="elem${X}">\u25B6 Element ${X} \u2014 Nodes ${ee[0]} \u2192 ${ee[1]}, L = ${Je(Pe)}</h3>`, E += `<div id="rpt-elem${X}" class="rpt-elem-body" style="display:none">`, E += "<h4>Properties (numerical substitution)</h4>", E += '<div class="rpt-eq-small">', E += `E = ${Je(Ce)} &nbsp;&nbsp; A = ${Je(We)} &nbsp;&nbsp; I<sub>z</sub> = ${Je(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Je(Be)} &nbsp;&nbsp; G = ${Je(Ke)} &nbsp;&nbsp; J = ${Je(ge)}<br/>`, E += `EA/L = ${Je(Ce)}\xB7${Je(We)}/${Je(Pe)} = <b>${Je(Ce * We / Pe)}</b><br/>`, E += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Je(Ce)}\xB7${Je(st)}/${Je(Pe)}\xB3 = <b>${Je(12 * Ce * st / Pe ** 3)}</b><br/>`, E += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Je(Ce)}\xB7${Je(Be)}/${Je(Pe)}\xB3 = <b>${Je(12 * Ce * Be / Pe ** 3)}</b><br/>`, E += `GJ/L = ${Je(Ke)}\xB7${Je(ge)}/${Je(Pe)} = <b>${Je(Ke * ge / Pe)}</b>`, E += "</div>", E += "<h4>Direction cosines</h4>", E += `<div class="rpt-eq-small">l = ${Vo(ot)}, m = ${Vo(ft)}, n = ${Vo($t)}, D = ${Vo(Math.sqrt(ot ** 2 + ft ** 2))}</div>`, E += "<h4>K<sub>local</sub> (12\xD712)</h4>", E += Ln(Fe, 12), E += "<h4>T \u2014 Transformation (12\xD712)</h4>", E += Ln(Ae, 12), E += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", E += Ln(Ue, 12), E += "<h4>Assembly</h4>", E += `<div class="rpt-eq-small">Global DOFs: node ${ee[0]} \u2192 [${ee[0] * 6}..${ee[0] * 6 + 5}], node ${ee[1]} \u2192 [${ee[1] * 6}..${ee[1] * 6 + 5}]</div>`, E += "</div></div>";
    }
    E += "<h2>4. Global Assembly</h2>", E += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${D - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, E += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", E += ya(O, h.length), E += "<h2>5. Boundary Conditions</h2>";
    const V = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], me = [];
    if (E += "<h3>5.1 Supports (fixed DOFs)</h3>", W.supports && W.supports.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const X of V) E += `<th>${X}</th>`;
      E += "</tr></thead><tbody>", W.supports.forEach((X, ee) => {
        E += `<tr><td>${ee}</td>`, X.forEach((ce, Ie) => {
          ce && me.push(ee * 6 + Ie), E += `<td class="${ce ? "fixed" : ""}">${ce ? "Fixed" : "Free"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += `<div class="rpt-eq-small">Fixed DOFs: [${me.join(", ")}] \u2192 ${me.length} constraints<br/>`, E += `Free DOFs: ${G} \u2212 ${me.length} = <b>${G - me.length}</b></div>`, E += "<h3>5.2 Applied Loads</h3>", W.loads && W.loads.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const X = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ee of X) E += `<th>${ee}</th>`;
      E += "</tr></thead><tbody>", W.loads.forEach((ee, ce) => {
        E += `<tr><td>${ce}</td>`, ee.forEach((Ie) => {
          const Pe = Math.abs(Ie) > 1e-10;
          E += `<td class="${Pe ? "nz" : ""}">${Pe ? Je(Ie) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>6. Solution</h2>", E += "<p>After removing fixed DOFs, the reduced system is:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', E += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", E += "<h3>6.1 Nodal Displacements</h3>", _ == null ? void 0 : _.deformations) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const X of V) E += `<th>${X}</th>`;
      E += "</tr></thead><tbody>", _.deformations.forEach((X, ee) => {
        E += `<tr><td>${ee}</td>`, X.forEach((ce) => {
          const Ie = Math.abs(ce) > 1e-10;
          E += `<td class="${Ie ? "nz" : ""}">${Je(ce, 6)}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h3>6.2 Reactions</h3>", E += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', _ == null ? void 0 : _.reactions) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const X of V) E += `<th>${X}</th>`;
      E += "</tr></thead><tbody>", _.reactions.forEach((X, ee) => {
        E += `<tr><td>${ee}</td>`, X.forEach((ce) => {
          const Ie = Math.abs(ce) > 1e-10;
          E += `<td class="${Ie ? "nz-react" : ""}">${Ie ? Je(ce, 4) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>7. Internal Forces</h2>", E += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", E += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', E += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', _ == null ? void 0 : _.deformations) {
      const X = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ee of X) E += `<th>${ee}<sub>i</sub></th>`;
      for (const ee of X) E += `<th>${ee}<sub>j</sub></th>`;
      E += "</tr></thead><tbody>";
      for (let ee = 0; ee < D; ee++) {
        const ce = O[ee];
        if (ce.length !== 2) continue;
        const Ie = ce.map((Pe) => h[Pe]);
        try {
          const Pe = Ko(Ie, S, ee), Ce = Uo(Ie), We = [];
          for (const Ke of ce) {
            const ge = ((_g = _.deformations) == null ? void 0 : _g.get(Ke)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            We.push(...ge);
          }
          const st = Bt(Ce, We), Be = Bt(Pe, st);
          E += `<tr><td>${ee}</td><td>${ce.join("\u2192")}</td>`;
          for (let Ke = 0; Ke < 12; Ke++) {
            const ge = Math.abs(Be[Ke]) > 1e-10;
            E += `<td class="${ge ? "nz" : ""}">${Je(Be[Ke], 2)}</td>`;
          }
          E += "</tr>";
        } catch {
        }
      }
      E += "</tbody></table>";
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
    return pe.innerHTML = ie + E, (_h = pe.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => pe.remove()), pe.querySelectorAll("[data-toggle]").forEach((X) => {
      X.addEventListener("click", () => {
        const ee = X.dataset.toggle, ce = pe.querySelector(`#rpt-${ee}`);
        if (ce) {
          const Ie = ce.style.display !== "none";
          ce.style.display = Ie ? "none" : "", X.textContent = X.textContent.replace(/^[▼▶]/, Ie ? "\u25B6" : "\u25BC");
        }
      });
    }), pe;
  }
  function Je(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Vo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Ln(e, h) {
    var _a2;
    const O = Math.min(h, 12);
    let S = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let W = 0; W < O; W++) {
      S += "<tr>";
      for (let _ = 0; _ < O; _++) {
        const G = ((_a2 = e[W]) == null ? void 0 : _a2[_]) ?? 0, D = Math.abs(G) < 1e-10;
        S += `<td class="${D ? "z" : ""} ${W === _ && !D ? "diag" : ""}">${D ? "0" : xa(G)}</td>`;
      }
      S += "</tr>";
    }
    return S += "</table>", h > O && (S += `<div style="color:#888;font-size:9pt">(showing ${O}\xD7${O} of ${h}\xD7${h})</div>`), S += "</div>", S;
  }
  function xa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function va() {
    const G = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (B) => 1 - 3 * B ** 2 + 2 * B ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (B) => B * (1 - B) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (B) => 3 * B ** 2 - 2 * B ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (B) => B ** 2 * (B - 1)
      }
    ];
    let D = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    D += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, D += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', D += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, D += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, D += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const B of G) {
      let Y = "";
      for (let me = 0; me <= 80; me++) {
        const ie = me / 80, X = 30 + ie * 540, ee = 180 / 2 - B.fn(ie) * 60;
        Y += (me === 0 ? "M" : "L") + `${X.toFixed(1)},${ee.toFixed(1)}`;
      }
      D += `<path d="${Y}" fill="none" stroke="${B.color}" stroke-width="2.5"/>`;
      const pe = 0.75, E = 30 + pe * 540 + 8, V = 180 / 2 - B.fn(pe) * 60 - 6;
      D += `<text x="${E}" y="${V}" fill="${B.color}" font-size="11" font-weight="bold" font-family="sans-serif">${B.name}</text>`;
    }
    return D += "</svg>", D;
  }
  function ya(e, h) {
    const O = h * 6, S = Math.min(O, 30);
    let W = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    W += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', W += "<tr><td></td>";
    for (let G = 0; G < S; G++) W += `<td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
    W += "</tr>";
    const _ = Array.from({
      length: S
    }, () => Array(S).fill(0));
    for (let G = 0; G < e.length; G++) {
      const D = e[G].map((B) => B * 6);
      for (const B of D) for (const Y of D) for (let pe = 0; pe < 6; pe++) for (let E = 0; E < 6; E++) {
        const V = B + pe, me = Y + E;
        V < S && me < S && _[V][me]++;
      }
    }
    for (let G = 0; G < S; G++) {
      W += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
      for (let D = 0; D < S; D++) {
        const B = _[G][D], Y = B === 0 ? "#fff" : B === 1 ? "#e8f0fe" : B === 2 ? "#c6dcf5" : "#a0c4e8", pe = B === 0 ? "" : B.toString();
        W += `<td style="background:${Y};color:#003366">${pe}</td>`;
      }
      W += "</tr>";
    }
    return W += "</table></div>", O > S && (W += `<div style="color:#888;font-size:9pt">(showing ${S}\xD7${S} of ${O}\xD7${O})</div>`), W;
  }
  let Tn = false;
  function $a(e) {
    if (Tn || window.katex) {
      Tn = true, e();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const O = document.createElement("script");
    O.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", O.onload = () => {
      Tn = true, e();
    }, document.head.appendChild(O);
  }
  function $s(e, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function wa(e, h, O, S, W, _) {
    var _a2, _b, _c, _d, _e, _f;
    const G = O[e], D = G.map((Ae) => h[Ae]), B = G.length === 2, Y = B ? go(Qt(D[1], D[0])) : 0, pe = ((_a2 = S.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, E = ((_b = S.areas) == null ? void 0 : _b.get(e)) ?? 0, V = ((_c = S.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, me = ((_d = S.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ie = ((_e = S.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, X = ((_f = S.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ee = null, ce = null, Ie = null;
    try {
      ee = Ko(D, S, e), ce = Uo(D), Ie = Bt(An(ce), Bt(ee, ce));
    } catch {
    }
    const Pe = B ? Qt(D[1], D[0]) : [
      0,
      0,
      0
    ], Ce = Y > 0 ? Pe[0] / Y : 0, We = Y > 0 ? Pe[1] / Y : 0, st = Y > 0 ? Pe[2] / Y : 0, Be = Math.sqrt(Ce ** 2 + We ** 2), Ke = [];
    if ((W == null ? void 0 : W.deformations) && B) for (const Ae of G) {
      const Ue = W.deformations.get(Ae) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ke.push(...Ue);
    }
    let ge = [], Fe = [];
    if (Ke.length === 12 && ce && ee) {
      try {
        ge = Bt(ce, Ke);
      } catch {
        ge = Array(12).fill(0);
      }
      try {
        Fe = Bt(ee, ge);
      } catch {
        Fe = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: G,
      elmNodes: D,
      isFrame: B,
      L: Y,
      E: pe,
      A: E,
      Iz: V,
      Iy: me,
      G: ie,
      J: X,
      kLocal: ee,
      T: ce,
      kGlobal: Ie,
      l: Ce,
      m: We,
      n: st,
      D: Be,
      uGlobal: Ke,
      uLocal: ge,
      fLocal: Fe,
      dOut: W,
      aOut: _,
      totalNodes: h.length
    };
  }
  function Ma(e, h, O, S, W, _) {
    var _a2, _b;
    const G = wa(e, h, O, S, W, _), D = document.createElement("div");
    return D.className = "er-panel", D.innerHTML = Ia + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${G.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${G.elem.join(" \u2192 ")} \u2014 L = ${Te(G.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Sa(G)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ws(G)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ea(G)}</div>
  `, D.querySelectorAll(".er-tab").forEach((B) => {
      B.addEventListener("click", () => {
        D.querySelectorAll(".er-tab").forEach((pe) => pe.classList.remove("active")), B.classList.add("active");
        const Y = B.dataset.tab;
        D.querySelectorAll(".er-body").forEach((pe) => pe.style.display = "none"), D.querySelector(`#er-body-${Y}`).style.display = "";
      });
    }), (_a2 = D.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => D.remove()), (_b = D.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const B = D.classList.toggle("er-fullscreen-mode"), Y = D.querySelector("#er-fullscreen");
      Y && (Y.textContent = B ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const B = D.querySelector("#er-sf-canvas");
      B && qn(B);
      const Y = D.querySelector("#er-sf-canvas-math");
      Y && qn(Y);
    }, 50), $a(() => {
      const B = D.querySelector("#er-body-math");
      B && (B.innerHTML = ws(G)), setTimeout(() => {
        const Y = D.querySelector("#er-sf-canvas-math");
        Y && qn(Y);
      }, 50), D.querySelectorAll(".er-deriv-header").forEach((Y) => {
        Y.addEventListener("click", () => {
          const pe = Y.dataset.toggle, E = D.querySelector(`#er-${pe}`);
          E && (E.style.display = E.style.display === "none" ? "" : "none");
        });
      });
    }), D;
  }
  function Sa(e) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${Te(e.E)}</td><td>A</td><td>${Te(e.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${Te(e.Iz)}</td><td>I<sub>y</sub></td><td>${Te(e.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${Te(e.G)}</td><td>J</td><td>${Te(e.J)}</td></tr>`, h += "</table>", e.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, h += No(e.kLocal)), e.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += No(e.T)), e.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += No(e.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let S = 0; S < e.elem.length; S++) {
        h += `<div class="er-sub">Nodo ${e.elem[S]}: `;
        for (let W = 0; W < 6; W++) {
          const _ = e.uGlobal[S * 6 + W];
          h += `${O[W]}=<span class="${Math.abs(_) > 1e-10 ? "nz" : ""}">${Te(_, 6)}</span> `;
        }
        h += "</div>";
      }
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (h += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const S of O) h += `<th>${S}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let S = 0; S < 6; S++) h += `<td class="${Math.abs(e.fLocal[S]) > 1e-10 ? "nz" : ""}">${Te(e.fLocal[S], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let S = 6; S < 12; S++) h += `<td class="${Math.abs(e.fLocal[S]) > 1e-10 ? "nz" : ""}">${Te(e.fLocal[S], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function ws(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const O = (pe) => $s(pe), S = (pe) => $s(pe, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${S("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${O("\\text{Nodo } i")} = (${e.elmNodes[0].map((pe) => Te(pe)).join(", ")})<br/>`, h += `${O("\\text{Nodo } j")} = (${e.elmNodes[1].map((pe) => Te(pe)).join(", ")})<br/>`, h += `${S(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Te(e.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${S("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${S("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${O("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${S("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${S("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${S("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${S("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${O("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${S("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${S("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${S("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${S("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${O("I_z")})</div>`, h += `<div class="er-eq">${S("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${S("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${O("I_y")})</div>`, h += `<div class="er-eq">${S("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${S("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${S(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Te(e.E)} \\times ${Te(e.A)} = \\mathbf{${Te(e.E * e.A)}}`)}</div>`, h += `<div class="er-eq">${S(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Te(e.E)} \\times ${Te(e.Iz)} = \\mathbf{${Te(e.E * e.Iz)}}`)}</div>`, h += `<div class="er-eq">${S(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Te(e.E)} \\times ${Te(e.Iy)} = \\mathbf{${Te(e.E * e.Iy)}}`)}</div>`, h += `<div class="er-eq">${S(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Te(e.G)} \\times ${Te(e.J)} = \\mathbf{${Te(e.G * e.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${O("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${S("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const W = e.E * e.A / e.L, _ = e.E * e.Iz / e.L ** 3, G = e.E * e.Iy / e.L ** 3, D = e.G * e.J / e.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${S("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${S("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${S("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${O("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${S("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${S("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${S(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Te(e.E)}\\times${Te(e.A)}}{${Te(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${S(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Te(W)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${O("v(\\xi)")}</p>`, h += `<div class="er-eq">${S("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${S("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${S("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${S("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${O("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${S("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${O("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${S("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${S(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Te(e.E)} \\times ${Te(e.Iz)}}{${Te(e.L)}^3} = \\mathbf{${Te(12 * _)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${O("\\theta_x")} y ${O("GJ")}:</p>`, h += `<div class="er-eq">${S(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Te(e.G)}\\times${Te(e.J)}}{${Te(e.L)}} = \\mathbf{${Te(D)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${O("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${S("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${S("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${S("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${S(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Te(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${S(`\\frac{EA}{L} = \\mathbf{${Te(W)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Te(12 * _)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Te(12 * G)}}`)}</div>`, h += `<div class="er-eq">${S(`\\frac{GJ}{L} = \\mathbf{${Te(D)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Te(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Te(4 * e.E * e.Iz / e.L)}}`)}</div>`, h += `<div class="er-eq">${S(`\\frac{6EI_z}{L^2} = \\mathbf{${Te(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Te(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (h += `<div class="er-subsec">Resultado: ${O("\\mathbf{K}_{local}")} (12x12)</div>`, h += No(e.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${S(`l = \\frac{x_j - x_i}{L} = ${Xo(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Xo(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Xo(e.n)}`)}</div>`, h += `<div class="er-eq">${S(`D = \\sqrt{l^2 + m^2} = ${Xo(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${O(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const pe = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${S(pe)}</div>`;
    } else h += `<div class="er-eq">${S("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${S("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${O("\\mathbf{K}_{global}")} = ${O("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${S("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (h += No(e.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const B = e.elem[0] * 6, Y = e.elem[1] * 6;
    if (h += `<div class="er-eq">${S(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${B} \\ldots ${B + 5}]`)}</div>`, h += `<div class="er-eq">${S(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, h += `<div class="er-eq">${S("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${S("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${S("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((pe) => pe !== 0)) {
      const pe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const E of pe) h += `<th>${E}</th>`;
      h += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let E = 0; E < 6; E++) h += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Te(e.fLocal[E], 3)}</td>`;
      h += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let E = 6; E < 12; E++) h += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Te(e.fLocal[E], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function Ea(e) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${Te(e.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${Te(e.E)}</td></tr>`, h += `<tr><td>A</td><td>${Te(e.A)}</td></tr>`, h += "</table>", e.uGlobal.length > 0) {
      h += '<div class="er-section-title">Desplazamientos</div>';
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const S of O) h += `<th>${S}</th>`;
      h += "</tr>";
      for (let S = 0; S < e.elem.length; S++) {
        h += `<tr><td>${e.elem[S]}</td>`;
        for (let W = 0; W < 6; W++) {
          const _ = e.uGlobal[S * 6 + W];
          h += `<td class="${Math.abs(_) > 1e-10 ? "nz" : ""}">${Te(_, 6)}</td>`;
        }
        h += "</tr>";
      }
      h += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      h += '<div class="er-section-title">Fuerzas internas</div>';
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const S of O) h += `<th>${S}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let S = 0; S < 6; S++) h += `<td class="${Math.abs(e.fLocal[S]) > 1e-10 ? "nz" : ""}">${Te(e.fLocal[S], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let S = 6; S < 12; S++) h += `<td class="${Math.abs(e.fLocal[S]) > 1e-10 ? "nz" : ""}">${Te(e.fLocal[S], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function Te(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Xo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function No(e) {
    var _a2;
    const h = e.length, O = Math.min(h, 12);
    let S = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let W = 0; W < O; W++) {
      S += "<tr>";
      for (let _ = 0; _ < O; _++) {
        const G = ((_a2 = e[W]) == null ? void 0 : _a2[_]) ?? 0, D = Math.abs(G) < 1e-10;
        S += `<td class="${D ? "z" : ""} ${W === _ && !D ? "diag" : ""}">${D ? "0" : ka(G)}</td>`;
      }
      S += "</tr>";
    }
    return S += "</table>", h > O && (S += `<div style="color:var(--fem-label);font-size:9px">(${O}\xD7${O} de ${h}\xD7${h})</div>`), S += "</div>", S;
  }
  function ka(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function qn(e) {
    const h = e.getContext("2d");
    if (!h) return;
    const O = e.width, S = e.height, W = 30, _ = O - 2 * W, G = (S - 3 * W) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, O, S);
    const D = (B, Y, pe) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(W, B, _, G), h.strokeStyle = "#444", h.beginPath(), h.moveTo(W, B + G / 2), h.lineTo(W + _, B + G / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(Y, W + 4, B + 14);
      for (const V of pe) {
        h.strokeStyle = V.color, h.lineWidth = 2.5, h.beginPath();
        for (let me = 0; me <= 100; me++) {
          const ie = me / 100, X = W + ie * _, ee = B + G / 2 - V.fn(ie) * (G / 2 * 0.85);
          me === 0 ? h.moveTo(X, ee) : h.lineTo(X, ee);
        }
        h.stroke();
      }
      let E = W + _ - 90;
      for (const V of pe) h.fillStyle = V.color, h.font = "bold 10px sans-serif", h.fillText(V.label, E, B + G - 6), E += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", W, B + G + 12), h.fillText("1", W + _ - 6, B + G + 12), h.fillText("\u03BE", W + _ / 2, B + G + 12);
    };
    D(W, "Axial (lineal)", [
      {
        fn: (B) => 1 - B,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (B) => B,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), D(W + G + W, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (B) => 1 - 3 * B * B + 2 * B * B * B,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (B) => B * (1 - B) * (1 - B),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (B) => 3 * B * B - 2 * B * B * B,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (B) => B * B * (B - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Ia = `<style>
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
</style>`, Po = [
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
  let Zo = false, xo = null, Dt = null, Et = null, gt = null;
  function za() {
    gt = document.createElement("button"), gt.id = "help-tour-btn", gt.innerHTML = "?", gt.title = "Ayuda interactiva \u2014 Tour guiado", gt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, gt.addEventListener("mouseenter", () => {
      gt.style.transform = "scale(1.15)", gt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), gt.addEventListener("mouseleave", () => {
      gt.style.transform = "scale(1)", gt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), gt.addEventListener("click", () => {
      Zo ? Fn() : La();
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
  `, document.head.appendChild(e), gt;
  }
  function La() {
    Zo = true, gt && (gt.innerHTML = "\u2715", gt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", gt.style.animation = "none"), xo = document.createElement("div"), xo.id = "tour-overlay", xo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(xo), Lo(0);
  }
  function Fn() {
    Zo = false, gt && (gt.innerHTML = "?", gt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", gt.style.animation = "helpPulse 2s infinite"), Dt && (Dt.remove(), Dt = null), Et && (Et.remove(), Et = null), xo && (xo.remove(), xo = null);
  }
  function Lo(e) {
    var _a2, _b;
    if (e >= Po.length) {
      Ta();
      return;
    }
    const h = Po[e], O = document.querySelector(h.selector);
    if (!O) {
      Lo(e + 1);
      return;
    }
    O.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Dt && Dt.remove(), Et && Et.remove();
    const S = O.getBoundingClientRect(), W = window.innerWidth, _ = window.innerHeight, G = 320, D = 180;
    Dt = document.createElement("div"), Dt.style.cssText = `
    position: fixed;
    left: ${S.left - 6}px; top: ${S.top - 6}px;
    width: ${S.width + 12}px; height: ${S.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Dt);
    const B = W - S.right, Y = S.left, pe = _ - S.bottom, E = S.top;
    let V = h.position || "bottom";
    V === "bottom" && pe < D + 20 && (V = "top"), V === "top" && E < D + 20 && (V = "right"), V === "right" && B < G + 20 && (V = "left"), V === "left" && Y < G + 20 && (V = "bottom");
    let me, ie, X = "";
    switch (V) {
      case "bottom":
        me = S.left + S.width / 2 - G / 2, ie = S.bottom + 14, X = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        me = S.left + S.width / 2 - G / 2, ie = S.top - D - 14, X = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        me = S.right + 14, ie = S.top + S.height / 2 - D / 2, X = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        me = S.left - G - 14, ie = S.top + S.height / 2 - D / 2, X = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    me = Math.max(10, Math.min(me, W - G - 10)), ie = Math.max(10, Math.min(ie, _ - D - 10)), Et = document.createElement("div"), Et.style.cssText = `
    position: fixed;
    left: ${me}px; top: ${ie}px;
    width: ${G}px;
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
  `, Et.innerHTML = `
    <div style="${X}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${h.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Po.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${h.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Po.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Po.map((ce, Ie) => `<div style="width:${Ie === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${Ie === e ? "#0099ff" : Ie < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Et), (_a2 = Et.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Lo(e + 1);
    }), (_b = Et.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Lo(e - 1);
    });
    const ee = (ce) => {
      if (!Zo) {
        document.removeEventListener("keydown", ee);
        return;
      }
      (ce.key === "ArrowRight" || ce.key === "Enter") && (Lo(e + 1), document.removeEventListener("keydown", ee)), ce.key === "ArrowLeft" && (Lo(Math.max(0, e - 1)), document.removeEventListener("keydown", ee)), ce.key === "Escape" && (Fn(), document.removeEventListener("keydown", ee));
    };
    document.addEventListener("keydown", ee);
  }
  function Ta() {
    var _a2;
    Dt && (Dt.remove(), Dt = null), Et && (Et.remove(), Et = null), Et = document.createElement("div"), Et.style.cssText = `
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
  `, Et.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Et), (_a2 = Et.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Fn());
  }
  function qa(e) {
    var _a2;
    const h = e.split(/\r?\n/), O = {
      force: "TONF",
      length: "M"
    }, S = [], W = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = [], B = [], Y = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), E = [], V = [];
    let me = "", ie = "";
    const X = /* @__PURE__ */ new Map();
    for (const re of h) {
      const ye = re.trim();
      if (!ye || ye.startsWith("$")) {
        ye.startsWith("$ ") && (ie = ye.substring(2).trim());
        continue;
      }
      if (ie && (X.has(ie) || X.set(ie, []), X.get(ie).push(re)), ie === "CONTROLS") {
        const te = ye.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        te && (O.force = te[1], O.length = te[2]);
        const ze = ye.match(/TITLE2\s+"([^"]+)"/);
        ze && (me = ze[1]);
      }
      if (ie === "STORIES - IN SEQUENCE FROM TOP") {
        const te = ye.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (te) {
          const ze = te[1], J = te[2] ? parseFloat(te[2]) : 0, de = te[3] ? parseFloat(te[3]) : void 0;
          S.push({
            name: ze,
            height: J,
            elev: de ?? 0
          });
        }
      }
      if (ie === "MATERIAL PROPERTIES") {
        const te = ye.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (te) {
          const ze = te[1];
          W.has(ze) || W.set(ze, {
            type: te[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const J = W.get(ze);
          te[2] && (J.type = te[2]);
          const de = ye.match(/\bE\s+([\d.eE+-]+)/);
          de && (J.E = parseFloat(de[1]));
          const qe = ye.match(/\bU\s+([\d.eE+-]+)/);
          qe && (J.nu = parseFloat(qe[1]), J.G = J.E / (2 * (1 + J.nu)));
          const ve = ye.match(/\bFY\s+([\d.eE+-]+)/);
          ve && (J.fy = parseFloat(ve[1]));
          const De = ye.match(/\bFC\s+([\d.eE+-]+)/);
          De && (J.fc = parseFloat(De[1]));
          const Re = ye.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Re && (J.density = parseFloat(Re[1]));
        }
      }
      if (ie === "FRAME SECTIONS") {
        const te = ye.match(/FRAMESECTION\s+"([^"]+)"/);
        if (te) {
          const ze = te[1];
          _.has(ze) || _.set(ze, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const J = _.get(ze), de = ye.match(/MATERIAL\s+"([^"]+)"/);
          de && (J.material = de[1]);
          const qe = ye.match(/SHAPE\s+"([^"]+)"/);
          qe && (J.shape = qe[1]);
          const ve = ye.match(/\bD\s+([\d.eE+-]+)/);
          ve && (J.D = parseFloat(ve[1]));
          const De = ye.match(/\bB\s+([\d.eE+-]+)/);
          De && (J.B = parseFloat(De[1]));
          const Re = ye.match(/\bTF\s+([\d.eE+-]+)/);
          Re && (J.TF = parseFloat(Re[1]));
          const Xe = ye.match(/\bTW\s+([\d.eE+-]+)/);
          Xe && (J.TW = parseFloat(Xe[1]));
          const tt = ye.match(/\bR\s+([\d.eE+-]+)/);
          tt && (J.R = parseFloat(tt[1]));
          const Ye = ye.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ye && (J.fillMaterial = Ye[1]);
          const zt = ye.match(/I2MOD\s+([\d.eE+-]+)/);
          zt && (J.modI2 = parseFloat(zt[1]));
          const Tt = ye.match(/I3MOD\s+([\d.eE+-]+)/);
          Tt && (J.modI3 = parseFloat(Tt[1]));
        }
      }
      if (ie === "POINT COORDINATES") {
        const te = ye.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        te && G.set(te[1], [
          parseFloat(te[2]),
          parseFloat(te[3])
        ]);
      }
      if (ie === "LINE CONNECTIVITIES") {
        const te = ye.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        te && D.push({
          name: te[1],
          type: te[2],
          pt1: te[3],
          pt2: te[4],
          nStories: parseInt(te[5])
        });
      }
      if (ie === "POINT ASSIGNS") {
        const te = ye.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        te && Y.set(`${te[1]}@${te[2]}`, te[3].split(/\s+/));
      }
      if (ie === "LINE ASSIGNS") {
        const te = ye.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (te) {
          const ze = {
            story: te[2],
            section: te[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, J = ye.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          J && (ze.rigidZone = parseFloat(J[1]));
          const de = ye.match(/RELEASE\s+"([^"]+)"/);
          de && (ze.releases = de[1].split(/\s+/));
          const qe = ye.match(/ANG\s+([-\d.eE+]+)/);
          qe && (ze.angle = parseFloat(qe[1])), pe.set(`${te[1]}@${te[2]}`, ze);
        }
      }
      if (ie === "GRIDS") {
        const te = ye.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        te && V.push({
          label: te[1],
          dir: te[2],
          coord: parseFloat(te[3])
        });
      }
      if (ie === "FRAME OBJECT LOADS") {
        const te = ye.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        te && E.push({
          line: te[1],
          story: te[2],
          type: te[3],
          dir: te[4],
          lc: te[5],
          val: parseFloat(te[6])
        });
      }
      if (ie === "AREA CONNECTIVITIES") {
        const te = ye.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (te) {
          const ze = ((_a2 = te[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((J) => J.replace(/"/g, ""))) || [];
          B.push({
            name: te[1],
            pts: ze,
            nStories: 0
          });
        }
      }
    }
    const ee = /* @__PURE__ */ new Map();
    if (S.length > 0) {
      const re = S.length - 1;
      ee.set(S[re].name, S[re].elev);
      for (let ye = re - 1; ye >= 0; ye--) {
        const ze = ee.get(S[ye + 1].name) + S[ye].height;
        S[ye].elev = ze, ee.set(S[ye].name, ze);
      }
    }
    const ce = [], Ie = [], Pe = /* @__PURE__ */ new Map(), Ce = (re, ye) => `${re}@${ye}`, We = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const re of D) st.set(re.name, re);
    for (const re of D) for (const [ye, te] of pe) {
      if (!ye.startsWith(re.name + "@")) continue;
      const ze = te.story, J = S.findIndex((de) => de.name === ze);
      if (!(J < 0)) if (re.type === "COLUMN" || re.type === "BRACE") {
        We.add(Ce(re.pt2, ze));
        const de = Math.max(re.nStories, 1), qe = Math.min(J + de, S.length - 1);
        We.add(Ce(re.pt1, S[qe].name));
      } else We.add(Ce(re.pt1, ze)), We.add(Ce(re.pt2, ze));
    }
    for (const [re] of Y) We.add(re);
    for (const re of We) {
      const [ye, te] = re.split("@"), ze = G.get(ye), J = ee.get(te);
      ze === void 0 || J === void 0 || (ce.push([
        ze[0],
        ze[1],
        J
      ]), Ie.push(re), Pe.set(re, ce.length - 1));
    }
    const Be = [], Ke = [], ge = [], Fe = [], Ae = /* @__PURE__ */ new Map();
    for (const re of D) for (const [ye, te] of pe) {
      if (!ye.startsWith(re.name + "@")) continue;
      const ze = te.story, J = S.findIndex((Xe) => Xe.name === ze);
      if (J < 0) continue;
      let de, qe;
      if (re.type === "COLUMN" || re.type === "BRACE") {
        const Xe = Math.max(re.nStories, 1), tt = Math.min(J + Xe, S.length - 1);
        de = Ce(re.pt1, S[tt].name), qe = Ce(re.pt2, ze);
      } else de = Ce(re.pt1, ze), qe = Ce(re.pt2, ze);
      const ve = Pe.get(de), De = Pe.get(qe);
      if (ve === void 0 || De === void 0 || ve === De) continue;
      const Re = Be.length;
      if (Be.push([
        ve,
        De
      ]), Ke.push(re.name), ge.push(re.type), Fe.push(ze), Ae.set(Re, te.section), te.rigidZone > 0 && Ft.set(Re, [
        te.rigidZone,
        te.rigidZone
      ]), te.releases.length > 0) {
        const Xe = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const tt of te.releases) tt === "TI" && (Xe[0] = true), tt === "M2I" && (Xe[1] = true), tt === "M3I" && (Xe[2] = true), tt === "TJ" && (Xe[3] = true), tt === "M2J" && (Xe[4] = true), tt === "M3J" && (Xe[5] = true);
        Nt.set(Re, Xe);
      }
    }
    const Ue = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
    for (const [re, ye] of Ae) {
      const te = _.get(ye);
      if (!te) continue;
      const ze = W.get(te.material);
      ze && (Ue.set(re, ze.E), dt.set(re, ze.G));
      const J = te.D, de = te.B, qe = te.TF, ve = te.TW;
      let De = 0, Re = 0, Xe = 0, tt = 0, Ye = 0, zt = 0, Tt = "rect";
      switch (te.shape) {
        case "Concrete Rectangular":
          De = J * de, Re = de * J ** 3 / 12, Xe = J * de ** 3 / 12, tt = de * J ** 3 * (1 / 3 - 0.21 * (J / de) * (1 - J ** 4 / (12 * de ** 4))), Ye = zt = 5 / 6 * De, Tt = "rect";
          break;
        case "Concrete Circle":
          De = Math.PI * J ** 2 / 4, Re = Xe = Math.PI * J ** 4 / 64, tt = Math.PI * J ** 4 / 32, Ye = zt = 0.9 * De, Tt = "circ";
          break;
        case "Steel I/Wide Flange":
          De = 2 * de * qe + (J - 2 * qe) * ve, Re = (de * J ** 3 - (de - ve) * (J - 2 * qe) ** 3) / 12, Xe = (2 * qe * de ** 3 + (J - 2 * qe) * ve ** 3) / 12, tt = (2 * de * qe ** 3 + (J - 2 * qe) * ve ** 3) / 3, Ye = (J - 2 * qe) * ve, zt = 2 * de * qe * 5 / 6, Tt = "I";
          break;
        case "Steel Tube":
          De = J * de - (J - 2 * ve) * (de - 2 * ve), Re = (de * J ** 3 - (de - 2 * ve) * (J - 2 * ve) ** 3) / 12, Xe = (J * de ** 3 - (J - 2 * ve) * (de - 2 * ve) ** 3) / 12, tt = 2 * ve * (J - ve) * (de - ve) * ((J - ve) * (de - ve)) / (J - ve + (de - ve)), Ye = 2 * J * ve, zt = 2 * de * ve, Tt = "HSS";
          break;
        case "Filled Steel Tube":
          De = J * de, Re = de * J ** 3 / 12, Xe = J * de ** 3 / 12, tt = 2 * ve * (J - ve) * (de - ve) * ((J - ve) * (de - ve)) / (J - ve + (de - ve)), Ye = 2 * J * ve + 5 / 6 * (J - 2 * ve) * (de - 2 * ve), zt = 2 * de * ve + 5 / 6 * (J - 2 * ve) * (de - 2 * ve), Tt = "CFT";
          break;
        case "Steel Angle": {
          const vt = qe || ve;
          De = vt * (J + de - vt), Re = vt * (J ** 3 + de * vt ** 2 + vt ** 2 * (J - vt)) / 12, Xe = vt * (de ** 3 + J * vt ** 2 + vt ** 2 * (de - vt)) / 12, tt = (J + de - vt) * vt ** 3 / 3, Ye = J * vt, zt = de * vt, Tt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          De = 2 * de * qe + (J - 2 * qe) * ve, Re = (ve * J ** 3 + 2 * de * qe * (J - qe) ** 2) / 12, Xe = (2 * qe * de ** 3 + (J - 2 * qe) * ve ** 3) / 12, tt = (2 * de * qe ** 3 + (J - 2 * qe) * ve ** 3) / 3, Ye = (J - 2 * qe) * ve, zt = 2 * de * qe * 5 / 6, Tt = te.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          De = 2 * (2 * de * qe + (J - 2 * qe) * ve), Re = 2 * (ve * J ** 3 + 2 * de * qe * (J - qe) ** 2) / 12, Xe = 2 * (2 * qe * de ** 3 + (J - 2 * qe) * ve ** 3) / 12, tt = 2 * (2 * de * qe ** 3 + (J - 2 * qe) * ve ** 3) / 3, Ye = 2 * (J - 2 * qe) * ve, zt = 4 * de * qe * 5 / 6, Tt = "2C";
          break;
        default:
          J > 0 && de > 0 && (De = J * de, Re = de * J ** 3 / 12, Xe = J * de ** 3 / 12, tt = Math.min(J, de) * Math.max(J, de) ** 3 / 3 * 0.3, Ye = zt = 5 / 6 * De);
          break;
      }
      te.modI2 && (Xe *= te.modI2), te.modI3 && (Re *= te.modI3), ot.set(re, De), Lt.set(re, Re), It.set(re, Xe), wt.set(re, tt), Ye > 0 && ft.set(re, Ye), zt > 0 && $t.set(re, zt), ke.set(re, {
        type: Tt,
        b: de || void 0,
        h: J || void 0,
        d: Tt === "circ" || Tt === "pipe" ? J : void 0,
        tw: ve || void 0,
        tf: qe || void 0,
        r: te.R,
        name: ye
      });
    }
    const xt = /* @__PURE__ */ new Map();
    for (const [re, ye] of Y) {
      const te = Pe.get(re);
      if (te === void 0) continue;
      const ze = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const J of ye) J === "UX" && (ze[0] = true), J === "UY" && (ze[1] = true), J === "UZ" && (ze[2] = true), J === "RX" && (ze[3] = true), J === "RY" && (ze[4] = true), J === "RZ" && (ze[5] = true);
      xt.set(te, ze);
    }
    const pt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map();
    for (let re = 0; re < Ke.length; re++) qt.set(`${Ke[re]}@${Fe[re]}`, re);
    for (const re of E) {
      const ye = qt.get(`${re.line}@${re.story}`);
      if (ye === void 0) continue;
      const [te, ze] = Be[ye], J = ce[te], de = ce[ze], qe = Math.sqrt((de[0] - J[0]) ** 2 + (de[1] - J[1]) ** 2 + (de[2] - J[2]) ** 2);
      if (qe < 1e-10) continue;
      const ve = re.val * qe / 2;
      let De = 0, Re = 0, Xe = 0;
      re.dir === "GRAV" || re.dir === "GRAVITY" ? Xe = -ve : re.dir === "X" ? De = ve : re.dir === "Y" ? Re = ve : re.dir === "Z" && (Xe = -ve);
      for (const tt of [
        te,
        ze
      ]) {
        const Ye = pt.get(tt) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ye[0] += De, Ye[1] += Re, Ye[2] += Xe, pt.set(tt, Ye);
      }
    }
    const bt = /* @__PURE__ */ new Map();
    for (const [re, ye] of Ae) {
      const te = _.get(ye);
      if (!te) continue;
      const ze = W.get(te.material);
      (ze == null ? void 0 : ze.density) && bt.set(re, ze.density);
    }
    return {
      units: O,
      stories: S.reverse(),
      materials: W,
      frameSections: _,
      nodes: ce,
      nodeNames: Ie,
      nodeNameToIdx: Pe,
      elements: Be,
      elementNames: Ke,
      elementTypes: ge,
      elementStories: Fe,
      elementSections: Ae,
      nodeInputs: {
        supports: xt,
        loads: pt
      },
      elementInputs: {
        elasticities: Ue,
        shearModuli: dt,
        areas: ot,
        momentsOfInertiaZ: Lt,
        momentsOfInertiaY: It,
        torsionalConstants: wt,
        shearAreasY: ft,
        shearAreasZ: $t,
        rigidOffsets: Ft,
        momentReleases: Nt,
        densities: bt,
        sectionShapes: ke
      },
      sectionShapes: ke,
      grids: V,
      info: {
        nNodes: ce.length,
        nFrames: Be.length,
        nAreas: B.length,
        title: me
      },
      rawSections: X
    };
  }
  function Ca(e) {
    const { e2kModel: h } = e, O = h == null ? void 0 : h.rawSections;
    return O && O.size > 0 ? Aa(O) : Fa(e);
  }
  function Aa(e, h) {
    const O = [], S = [
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
    O.push("$ File exported from Awatif FEM Studio (round-trip)"), O.push("");
    for (const W of S) {
      const _ = e.get(W);
      if (!(!_ || _.length === 0)) {
        O.push(`$ ${W}`);
        for (const G of _) O.push(G);
        O.push("");
      }
    }
    for (const [W, _] of e) if (!S.includes(W) && _.length !== 0) {
      O.push(`$ ${W}`);
      for (const G of _) O.push(G);
      O.push("");
    }
    return O.push("  END"), O.push("$ END OF MODEL FILE"), O.join(`\r
`);
  }
  function Fa(e) {
    var _a2, _b;
    const { nodes: h, elements: O, nodeInputs: S, elementInputs: W, title: _, units: G } = e, D = (G == null ? void 0 : G.force) || "TONF", B = (G == null ? void 0 : G.length) || "M", Y = [], pe = (ge) => Math.round(ge * 1e4) / 1e4;
    Y.push("$ File exported from Awatif FEM Studio"), Y.push(""), Y.push("$ PROGRAM INFORMATION"), Y.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), Y.push(""), Y.push("$ CONTROLS"), Y.push(`  UNITS  "${D}"  "${B}"  "C"  `), _ && Y.push(`  TITLE2  "${_}"  `), Y.push("");
    const E = /* @__PURE__ */ new Set();
    h.forEach((ge) => E.add(pe(ge[1])));
    const V = [
      ...E
    ].sort((ge, Fe) => ge - Fe), me = [], ie = /* @__PURE__ */ new Map();
    me.push("Base"), ie.set(V[0], "Base");
    for (let ge = 1; ge < V.length; ge++) {
      const Fe = `Level_${ge}`;
      me.push(Fe), ie.set(V[ge], Fe);
    }
    Y.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let ge = V.length - 1; ge >= 1; ge--) Y.push(`  STORY "${me[ge]}"  HEIGHT ${pe(V[ge] - V[ge - 1])} MASTERSTORY "Yes"  `);
    V.length > 0 && Y.push(`  STORY "Base"  ELEV ${V[0]} `), Y.push(""), Y.push("$ MATERIAL PROPERTIES");
    const X = /* @__PURE__ */ new Set();
    (_a2 = W.elasticities) == null ? void 0 : _a2.forEach((ge) => X.add(ge));
    const ee = /* @__PURE__ */ new Map();
    let ce = 0;
    for (const ge of X) {
      const Fe = `Mat_${++ce}`;
      ee.set(ge, Fe), Y.push(`  MATERIAL  "${Fe}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), Y.push(`  MATERIAL  "${Fe}"    SYMTYPE "Isotropic"  E ${ge}  U 0.2  A 1E-05`);
    }
    Y.push(""), Y.push("$ FRAME SECTIONS");
    const Ie = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map();
    O.forEach((ge, Fe) => {
      var _a3, _b2;
      if (ge.length !== 2) return;
      const Ae = (_a3 = W.sectionShapes) == null ? void 0 : _a3.get(Fe), Ue = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(Fe)) ?? 0, dt = ee.get(Ue) || "Mat_1", ot = (Ae == null ? void 0 : Ae.h) ?? 0, ft = (Ae == null ? void 0 : Ae.b) ?? 0, $t = (Ae == null ? void 0 : Ae.d) ?? 0, Ft = (Ae == null ? void 0 : Ae.tf) ?? 0, Nt = (Ae == null ? void 0 : Ae.tw) ?? 0, Lt = (Ae == null ? void 0 : Ae.type) || "rect", It = `${Lt}_${ot}_${ft}_${$t}_${Ft}_${Nt}`;
      (Ae == null ? void 0 : Ae.name) && !Ce.has(It) && Ce.set(It, Ae.name);
      let wt = Ce.get(It);
      if (wt || (Lt === "rect" ? wt = `R${pe(ft * 100)}x${pe(ot * 100)}` : Lt === "circ" ? wt = `C_D${pe($t * 100)}` : Lt === "I" ? wt = `I_${pe(ot * 100)}` : wt = `Sec_${Ie.size + 1}`, Ce.set(It, wt)), Pe.set(Fe, wt), Ie.has(wt)) return;
      Ie.add(wt);
      const xt = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Lt] || "Concrete Rectangular";
      let pt = `  FRAMESECTION  "${wt}"  MATERIAL "${dt}"  SHAPE "${xt}"`;
      ot && (pt += `  D ${ot}`), ft && (pt += `  B ${ft}`), $t && !ot && (pt += `  D ${$t}`), Ft && (pt += `  TF ${Ft}`), Nt && (pt += `  TW ${Nt}`), Y.push(pt);
    }), Y.push("");
    const We = /* @__PURE__ */ new Map();
    let st = 0;
    h.forEach((ge) => {
      const Fe = `${pe(ge[0])},${pe(ge[2])}`;
      We.has(Fe) || We.set(Fe, `${++st}`);
    }), Y.push("$ POINT COORDINATES");
    for (const [ge, Fe] of We) {
      const [Ae, Ue] = ge.split(",").map(Number);
      Y.push(`  POINT "${Fe}"  ${Ae} ${Ue} `);
    }
    Y.push("");
    const Be = (ge) => {
      const Fe = h[ge], Ae = `${pe(Fe[0])},${pe(Fe[2])}`;
      return {
        pt: We.get(Ae) || "1",
        story: ie.get(pe(Fe[1])) || "Base"
      };
    };
    Y.push("$ LINE CONNECTIVITIES");
    const Ke = [];
    return O.forEach((ge, Fe) => {
      if (ge.length !== 2) return;
      const Ae = Pa(h, ge), Ue = Pe.get(Fe) || `Sec_${Fe}`;
      if (Ae === "BEAM") {
        const dt = Be(ge[0]), ot = Be(ge[1]);
        Y.push(`  LINE  "E${Fe + 1}"  BEAM  "${dt.pt}"  "${ot.pt}"  0`), Ke.push(`  LINEASSIGN  "E${Fe + 1}"  "${dt.story}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const dt = h[ge[0]][1] <= h[ge[1]][1] ? ge[0] : ge[1], ot = h[ge[0]][1] <= h[ge[1]][1] ? ge[1] : ge[0];
        Be(dt);
        const ft = Be(ot), $t = pe(h[dt][1]), Ft = pe(h[ot][1]), Nt = V.indexOf($t), Lt = V.indexOf(Ft), It = Math.max(1, Lt >= 0 && Nt >= 0 ? Lt - Nt : 1);
        Y.push(`  LINE  "E${Fe + 1}"  ${Ae}  "${ft.pt}"  "${ft.pt}"  ${It}`);
        for (let wt = 0; wt < It; wt++) {
          const ke = Lt - wt;
          ke >= 0 && ke < me.length && Ke.push(`  LINEASSIGN  "E${Fe + 1}"  "${me[ke]}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), Y.push(""), Y.push("$ POINT ASSIGNS"), (_b = S.supports) == null ? void 0 : _b.forEach((ge, Fe) => {
      const Ae = [];
      if (ge[0] && Ae.push("UX"), ge[1] && Ae.push("UY"), ge[2] && Ae.push("UZ"), ge[3] && Ae.push("RX"), ge[4] && Ae.push("RY"), ge[5] && Ae.push("RZ"), Ae.length > 0) {
        const Ue = Be(Fe);
        Y.push(`  POINTASSIGN  "${Ue.pt}"  "${Ue.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), Y.push(""), Y.push("$ LINE ASSIGNS"), Ke.forEach((ge) => Y.push(ge)), Y.push(""), Y.push("$ LOAD PATTERNS"), Y.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), Y.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), Y.push(""), S.loads && S.loads.size > 0 && (Y.push("$ POINT OBJECT LOADS"), S.loads.forEach((ge, Fe) => {
      const [Ae, Ue, dt] = ge, ot = Be(Fe);
      Math.abs(Ae) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Ue) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FY ${Ue}`), Math.abs(dt) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FZ ${dt}`);
    }), Y.push("")), Y.push("  END"), Y.push("$ END OF MODEL FILE"), Y.join(`\r
`);
  }
  function Pa(e, h) {
    const O = e[h[0]], S = e[h[1]], W = Math.abs(S[1] - O[1]), _ = Math.sqrt((S[0] - O[0]) ** 2 + (S[2] - O[2]) ** 2), G = W > _ * 0.5;
    return G && _ > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
  }
  function Na(e) {
    var _a2, _b;
    const { nodes: h, elements: O, nodeInputs: S, elementInputs: W } = e, _ = [];
    return _.push("# OpenSeesPy model exported from Awatif FEM Studio"), _.push(`# ${h.length} nodes, ${O.length} elements`), _.push(""), _.push("import openseespy.opensees as ops"), _.push(""), _.push("ops.wipe()"), _.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), _.push(""), _.push("# --- Nodes ---"), h.forEach((G, D) => {
      _.push(`ops.node(${D + 1}, ${G[0]}, ${G[1]}, ${G[2]})`);
    }), _.push(""), _.push("# --- Boundary Conditions ---"), (_a2 = S.supports) == null ? void 0 : _a2.forEach((G, D) => {
      const B = G.map((Y) => Y ? 1 : 0).join(", ");
      _.push(`ops.fix(${D + 1}, ${B})`);
    }), _.push(""), _.push("# --- Geometric Transformations ---"), _.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), _.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), _.push(""), _.push("# --- Elements (elasticBeamColumn) ---"), O.forEach((G, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const B = h[G[0]], Y = h[G[1]], E = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, V = ((_a3 = W.areas) == null ? void 0 : _a3.get(D)) ?? 1, me = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ie = ((_c = W.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, X = ((_d = W.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, ee = ((_e = W.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, ce = ((_f = W.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      _.push(`ops.element('elasticBeamColumn', ${D + 1}, ${G[0] + 1}, ${G[1] + 1}, ${V}, ${me}, ${ie}, ${X}, ${ee}, ${ce}, ${E})`);
    }), _.push(""), S.loads && S.loads.size > 0 && (_.push("# --- Loads ---"), _.push("ops.timeSeries('Linear', 1)"), _.push("ops.pattern('Plain', 1, 1)"), S.loads.forEach((G, D) => {
      const B = G.map((Y) => Y).join(", ");
      _.push(`ops.load(${D + 1}, ${B})`);
    }), _.push("")), _.push("# --- Analysis ---"), _.push("ops.system('BandGeneral')"), _.push("ops.numberer('RCM')"), _.push("ops.constraints('Plain')"), _.push("ops.integrator('LoadControl', 1.0)"), _.push("ops.algorithm('Linear')"), _.push("ops.analysis('Static')"), _.push("ops.analyze(1)"), _.push(""), _.push("# --- Results ---"), _.push('print("\\n=== Displacements ===")'), h.forEach((G, D) => {
      _.push(`print(f"Node {${D + 1}}: {ops.nodeDisp(${D + 1})}")`);
    }), _.push(""), _.push('print("\\n=== Reactions ===")'), _.push("ops.reactions()"), (_b = S.supports) == null ? void 0 : _b.forEach((G, D) => {
      _.push(`print(f"Node {${D + 1}}: {ops.nodeReaction(${D + 1})}")`);
    }), _.join(`
`);
  }
  function Oa(e) {
    var _a2, _b;
    const { nodes: h, elements: O, nodeInputs: S, elementInputs: W } = e, _ = [];
    return _.push("# OpenSees Tcl model exported from Awatif FEM Studio"), _.push(`# ${h.length} nodes, ${O.length} elements`), _.push(""), _.push("wipe"), _.push("model basic -ndm 3 -ndf 6"), _.push(""), _.push("# --- Nodes ---"), h.forEach((G, D) => {
      _.push(`node ${D + 1} ${G[0]} ${G[1]} ${G[2]}`);
    }), _.push(""), _.push("# --- Boundary Conditions ---"), (_a2 = S.supports) == null ? void 0 : _a2.forEach((G, D) => {
      const B = G.map((Y) => Y ? 1 : 0).join(" ");
      _.push(`fix ${D + 1} ${B}`);
    }), _.push(""), _.push("# --- Geometric Transformations ---"), _.push("geomTransf Linear 1 0.0 0.0 1.0"), _.push("geomTransf Linear 2 -1.0 0.0 0.0"), _.push(""), _.push("# --- Elements ---"), O.forEach((G, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const B = h[G[0]], Y = h[G[1]], E = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, V = ((_a3 = W.areas) == null ? void 0 : _a3.get(D)) ?? 1, me = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ie = ((_c = W.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, X = ((_d = W.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, ee = ((_e = W.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, ce = ((_f = W.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      _.push(`element elasticBeamColumn ${D + 1} ${G[0] + 1} ${G[1] + 1} ${V} ${me} ${ie} ${X} ${ee} ${ce} ${E}`);
    }), _.push(""), S.loads && S.loads.size > 0 && (_.push("# --- Loads ---"), _.push("timeSeries Linear 1"), _.push("pattern Plain 1 1 {"), S.loads.forEach((G, D) => {
      const B = G.map((Y) => Y).join(" ");
      _.push(`  load ${D + 1} ${B}`);
    }), _.push("}"), _.push("")), _.push("# --- Analysis ---"), _.push("system BandGeneral"), _.push("numberer RCM"), _.push("constraints Plain"), _.push("integrator LoadControl 1.0"), _.push("algorithm Linear"), _.push("analysis Static"), _.push("analyze 1"), _.push(""), _.push("# --- Results ---"), _.push('puts "\\n=== Displacements ==="'), h.forEach((G, D) => {
      _.push(`puts "Node ${D + 1}: [nodeDisp ${D + 1}]"`);
    }), _.push('puts "\\n=== Reactions ==="'), _.push("reactions"), (_b = S.supports) == null ? void 0 : _b.forEach((G, D) => {
      _.push(`puts "Node ${D + 1}: [nodeReaction ${D + 1}]"`);
    }), _.join(`
`);
  }
  function _a(e) {
    const h = [], O = [], S = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
    for (const me of e.split(/\r?\n/)) {
      const ie = me.trim(), X = ie.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (X) {
        const Pe = parseInt(X[1]), Ce = h.length;
        h.push([
          parseFloat(X[2]),
          parseFloat(X[3]),
          parseFloat(X[4])
        ]), E.set(Pe, Ce);
        continue;
      }
      const ee = ie.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ee) {
        const Pe = parseInt(ee[1]), Ce = E.get(Pe);
        Ce !== void 0 && S.set(Ce, [
          ee[2] === "1",
          ee[3] === "1",
          ee[4] === "1",
          ee[5] === "1",
          ee[6] === "1",
          ee[7] === "1"
        ]);
        continue;
      }
      const ce = ie.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const Pe = parseInt(ce[1]), Ce = E.get(parseInt(ce[2])), We = E.get(parseInt(ce[3]));
        if (Ce !== void 0 && We !== void 0) {
          const st = O.length;
          O.push([
            Ce,
            We
          ]), V.set(Pe, st), D.set(st, parseFloat(ce[4])), _.set(st, parseFloat(ce[5])), G.set(st, parseFloat(ce[6])), pe.set(st, parseFloat(ce[7])), B.set(st, parseFloat(ce[8])), Y.set(st, parseFloat(ce[9]));
        }
        continue;
      }
      const Ie = ie.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Ie) {
        const Pe = E.get(parseInt(Ie[1]));
        Pe !== void 0 && W.set(Pe, [
          parseFloat(Ie[2]),
          parseFloat(Ie[3]),
          parseFloat(Ie[4]),
          parseFloat(Ie[5]),
          parseFloat(Ie[6]),
          parseFloat(Ie[7])
        ]);
      }
    }
    return {
      nodes: h,
      elements: O,
      nodeInputs: {
        supports: S,
        loads: W
      },
      elementInputs: {
        elasticities: _,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: pe
      }
    };
  }
  function Ra(e) {
    const h = [], O = [], S = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
    for (const V of e.split(/\r?\n/)) {
      const me = V.trim();
      if (me.startsWith("#") || me.startsWith("//")) continue;
      const ie = me.split(/\s+/);
      if (ie[0] === "node" && ie.length >= 5) {
        const X = parseInt(ie[1]), ee = h.length;
        h.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), E.set(X, ee);
        continue;
      }
      if (ie[0] === "fix" && ie.length >= 8) {
        const X = E.get(parseInt(ie[1]));
        X !== void 0 && S.set(X, [
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
        const X = E.get(parseInt(ie[3])), ee = E.get(parseInt(ie[4]));
        if (X !== void 0 && ee !== void 0) {
          const ce = O.length;
          O.push([
            X,
            ee
          ]), D.set(ce, parseFloat(ie[5])), _.set(ce, parseFloat(ie[6])), G.set(ce, parseFloat(ie[7])), pe.set(ce, parseFloat(ie[8])), B.set(ce, parseFloat(ie[9])), Y.set(ce, parseFloat(ie[10]));
        }
        continue;
      }
      if (ie[0] === "load" && ie.length >= 8) {
        const X = E.get(parseInt(ie[1]));
        X !== void 0 && W.set(X, [
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
      nodes: h,
      elements: O,
      nodeInputs: {
        supports: S,
        loads: W
      },
      elementInputs: {
        elasticities: _,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: pe
      }
    };
  }
  Ms = Io.state(false);
  Ga = function(e) {
    e.nodeInputs || (e.nodeInputs = Io.state({})), e.elementInputs || (e.elementInputs = Io.state({})), e.deformOutputs || (e.deformOutputs = Io.state({})), e.analyzeOutputs || (e.analyzeOutputs = Io.state({}));
    let h = "tonf", O = "m", S = ho(h, O), W = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const _ = {
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
    }, G = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
    let B = false;
    const Y = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map();
    let E = "", V = {}, me = null, ie = "", X = [], ee = [], ce = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), st = null, Be = [], Ke = 0.2, ge = 2, Fe = 2, Ae = false, Ue = 2, dt = "x", ot = /* @__PURE__ */ new Set(), ft = true, $t = 0.15, Ft = 2, Nt = 2, Lt = /* @__PURE__ */ new Set();
    const It = () => ({
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
    }), wt = (t, o) => ({
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
      }, It),
      vigasY: Array.from({
        length: o
      }, It)
    }), ke = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let xt = 0, pt = 3, qt = false, bt = 0, re = null, ye = 0, te = [], ze = 1, J = true;
    const de = ha();
    de.div.style.display = "none";
    function qe() {
      const t = Yo()[E];
      return t && t[xt] ? t[xt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let ve = [], De = [], Re = null;
    function Xe() {
      if (!Re) return;
      const t = Qe();
      t && t.scene.remove(Re), Re.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Re = null;
    }
    function tt(t, o, n, a, s) {
      Xe();
      const p = Qe();
      if (!p) return;
      Re = new In(), Re.name = "gridAxes";
      const l = Math.min(...t), d = Math.max(...t), m = Math.min(...o), c = Math.max(...o), i = d - l || 1, b = c - m || 1, M = Math.max(i, b), w = M * 0.08, v = a || t.map((u, r) => String.fromCharCode(65 + r)), f = s || o.map((u, r) => String(r + 1)), x = M * 0.018, k = o.length <= 1, L = 8947848;
      for (let u = 0; u < t.length; u++) {
        const r = t[u];
        if (k) {
          const g = -w - x * 1.5;
          tn(r, 0, 0, r, 0, g + x, L, Re), on(v[u] || `${u}`, r, 0, g, x, Re);
        } else {
          const g = m - w - x * 1.5;
          tn(r, m, 0, r, g + x, 0, L, Re), on(v[u] || `${u}`, r, g, 0, x, Re);
        }
      }
      if (!k) for (let u = 0; u < o.length; u++) {
        const r = o[u], g = l - w - x * 1.5;
        tn(l, r, 0, g + x, r, 0, L, Re), on(f[u] || `${u}`, g, r, 0, x, Re);
      }
      const I = x * 1.8, H = w * 1.2, y = w * 1.2;
      for (let u = 0; u < t.length - 1; u++) {
        const r = t[u], g = t[u + 1], $ = Math.abs(g - r), T = (r + g) / 2, N = `${$.toFixed(2)} m`;
        k ? (Qo(N, T, 0, -H, I, Re), en(r, 0, -H * 0.7, g, 0, -H * 0.7, 16763904, Re)) : (Qo(N, T, m - y, 0, I, Re), en(r, m - y * 0.7, 0, g, m - y * 0.7, 0, 16763904, Re));
      }
      if (!k) for (let u = 0; u < o.length - 1; u++) {
        const r = o[u], g = o[u + 1], $ = Math.abs(g - r), T = (r + g) / 2, N = `${$.toFixed(2)} m`;
        Qo(N, l - H, T, 0, I, Re), en(l - H * 0.7, r, 0, l - H * 0.7, g, 0, 16763904, Re);
      }
      Re.traverse((u) => {
        u.material && (Array.isArray(u.material) ? u.material.forEach((r) => {
          r.clippingPlanes = [];
        }) : u.material.clippingPlanes = []);
      }), p.scene.add(Re), p.render();
    }
    let Ye = null;
    function zt() {
      if (!Ye) return;
      const t = Qe();
      t && t.scene.remove(Ye), Ye.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ye = null;
    }
    function Tt(t, o, n) {
      if (zt(), t.length === 0) return;
      const a = Qe();
      if (!a) return;
      Ye = new In(), Ye.name = "storyLevels";
      const s = Math.min(...o), p = Math.max(...o), l = Math.min(...n), d = Math.max(...n), m = p - s || 1, c = d - l || 1, i = Math.max(m, c), b = i * 0.06, M = n.length <= 1, w = 4491519, v = i * 0.015;
      for (const f of t) {
        const x = f.elev;
        M ? (vt(s - b, 0, x, p + b, 0, x, w, Ye), Pn(f.name, p + b * 1.5, 0, x, v, Ye)) : (vt(s, l, x, p, l, x, w, Ye), vt(p, l, x, p, d, x, w, Ye), vt(p, d, x, s, d, x, w, Ye), vt(s, d, x, s, l, x, w, Ye), Pn(f.name, s - b * 1.5, l, x, v, Ye));
      }
      Ye.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((x) => {
          x.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), a.scene.add(Ye), a.render();
    }
    function vt(t, o, n, a, s, p, l, d) {
      const m = Math.sqrt((a - t) ** 2 + (s - o) ** 2 + (p - n) ** 2) || 1, c = new ro().setFromPoints([
        new Se(t, o, n),
        new Se(a, s, p)
      ]), i = new kn({
        color: l,
        dashSize: m * 0.02,
        gapSize: m * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Bo(c, i);
      b.computeLineDistances(), b.renderOrder = 50, d.add(b);
    }
    function Pn(t, o, n, a, s, p) {
      const l = document.createElement("canvas"), d = 512, m = 64;
      l.width = d, l.height = m;
      const c = l.getContext("2d");
      c.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      c.beginPath(), c.moveTo(i, 0), c.lineTo(d - i, 0), c.quadraticCurveTo(d, 0, d, i), c.lineTo(d, m - i), c.quadraticCurveTo(d, m, d - i, m), c.lineTo(i, m), c.quadraticCurveTo(0, m, 0, m - i), c.lineTo(0, i), c.quadraticCurveTo(0, 0, i, 0), c.closePath(), c.fill(), c.fillStyle = "#88bbff", c.font = "bold 38px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, d / 2, m / 2);
      const b = new zn(l);
      b.needsUpdate = true;
      const M = new Wo({
        map: b,
        depthTest: false,
        transparent: true
      }), w = new jo(M);
      w.position.set(o, n, a), w.scale.set(s * 8, s, 1), w.renderOrder = 101, p.add(w);
    }
    function Qo(t, o, n, a, s, p) {
      const l = document.createElement("canvas"), d = 256, m = 64;
      l.width = d, l.height = m;
      const c = l.getContext("2d");
      c.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      c.beginPath(), c.moveTo(i, 0), c.lineTo(d - i, 0), c.quadraticCurveTo(d, 0, d, i), c.lineTo(d, m - i), c.quadraticCurveTo(d, m, d - i, m), c.lineTo(i, m), c.quadraticCurveTo(0, m, 0, m - i), c.lineTo(0, i), c.quadraticCurveTo(0, 0, i, 0), c.closePath(), c.fill(), c.fillStyle = "#ffcc00", c.font = "bold 36px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, d / 2, m / 2);
      const b = new pa(l);
      b.minFilter = fa;
      const M = new Wo({
        map: b,
        transparent: true,
        depthTest: false
      }), w = new jo(M);
      w.position.set(o, n, a);
      const v = d / m;
      w.scale.set(s * v, s, 1), w.renderOrder = 999, p.add(w);
    }
    function en(t, o, n, a, s, p, l, d) {
      const m = [
        new Se(t, o, n),
        new Se(a, s, p)
      ], c = new ro().setFromPoints(m), i = new Fo({
        color: l,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Bo(c, i);
      b.renderOrder = 998, d.add(b);
    }
    function tn(t, o, n, a, s, p, l, d) {
      const m = new ro().setFromPoints([
        new Se(t, o, n),
        new Se(a, s, p)
      ]), c = new kn({
        color: l,
        dashSize: 0.15 * Math.max(Math.abs(a - t), Math.abs(s - o), Math.abs(p - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(a - t), Math.abs(s - o), Math.abs(p - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new Bo(m, c);
      i.computeLineDistances(), d.add(i);
    }
    function on(t, o, n, a, s, p) {
      const l = document.createElement("canvas"), d = 128;
      l.width = d, l.height = d;
      const m = l.getContext("2d");
      m.beginPath(), m.arc(d / 2, d / 2, d * 0.42, 0, Math.PI * 2), m.fillStyle = "rgba(255,255,255,0.9)", m.fill(), m.lineWidth = d * 0.04, m.strokeStyle = "#555", m.stroke(), m.fillStyle = "#222", m.font = `bold ${d * 0.45}px Arial`, m.textAlign = "center", m.textBaseline = "middle", m.fillText(t, d / 2, d / 2 + d * 0.02);
      const c = new zn(l);
      c.needsUpdate = true;
      const i = new Wo({
        map: c,
        depthTest: false,
        transparent: true
      }), b = new jo(i);
      b.position.set(o, n, a);
      const M = s * 2;
      b.scale.set(M, M, 1), b.renderOrder = 100, p.add(b);
    }
    const je = {
      addNode(t, o, n) {
        const a = [
          ...e.nodes.val
        ], s = a.length;
        return a.push([
          t,
          o,
          n
        ]), e.nodes.val = a, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Ge(), s;
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
        const n = e.elements.val.map(([a, s]) => {
          const p = a > t ? a - 1 : a, l = s > t ? s - 1 : s;
          return a === t || s === t ? null : [
            p,
            l
          ];
        }).filter((a) => a !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Ge();
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
        ], a = n.length;
        return n.push([
          t,
          o
        ]), e.elements.val = n, console.log(`Element ${a}: node ${t} -> node ${o}`), Ge(), a;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Ge();
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
        }, a = new Map(n.supports || []);
        a.set(t, o || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), n.supports = a, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Ge();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Ge();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, a = new Map(n.loads || []);
        a.set(t, o), n.loads = a, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Ge();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Ge();
      },
      listSupports() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.supports;
        if (!t || t.size === 0) {
          console.log("No supports");
          return;
        }
        const o = [];
        return t.forEach((n, a) => o.push({
          node: a,
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
        return t.forEach((n, a) => o.push({
          node: a,
          Fx: n[0],
          Fy: n[1],
          Fz: n[2]
        })), console.table(o), t;
      },
      info() {
        var _a2, _b, _c, _d, _e, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, a = ((_f = (_e = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${a} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: a
        };
      },
      set(t, o) {
        var _a2, _b, _c, _d;
        const n = he.querySelectorAll("input[type=checkbox]");
        for (const a of n) {
          const s = ((_b = (_a2 = a.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = a.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", p = a.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || p.toLowerCase().includes(t.toLowerCase())) {
            const l = a;
            return l.checked = o !== void 0 ? o : !l.checked, l.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || p}: ${l.checked}`), l.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = he.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const a = n, s = ((_b = (_a2 = a.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = a.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || a.id || "?";
          o[s] = a.checked;
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
  cad.use("Edificio")           Switch generator
  cad.frame([5,5], [3,3])       2D portal frame
  cad.building([5,5],[4],[3])   3D building
  cad.galpon(12, 20, 6, 3)     Galpon/warehouse

SETTINGS & PARAMS:
  cad.settings()                List all settings
  cad.set("nodes", true)        Toggle setting on/off
  cad.set("deform")             Toggle setting
  cad.params()                  List all parameters
  cad.param("Vanos X", 3)       Set parameter value

VIEW:
  cad.view("3d")                3D view
  cad.view("plan")              Plan view
  cad.view("ex")                X elevation
  cad.view("ey")                Y elevation
`;
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), ce = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), ve = [], De = [], Xe(), zt();
        const t = he.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Ge();
      },
      frame(t, o, n = 0, a = 0) {
        je.clear();
        const s = [];
        n > 0 && s.push(-n);
        let p = 0;
        s.push(p);
        for (const v of t) p += v, s.push(p);
        a > 0 && s.push(p + a);
        const l = [
          0
        ];
        let d = 0;
        for (const v of o) d += v, l.push(d);
        const m = (v) => n > 0 && v === 0 || a > 0 && v === s.length - 1, c = {}, i = [];
        for (let v = 0; v < l.length; v++) for (let f = 0; f < s.length; f++) v === 0 && m(f) || (c[`${f},${v}`] = i.length, i.push([
          s[f],
          0,
          l[v]
        ]));
        const b = [];
        ce = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Set();
        for (let v = 0; v < l.length - 1; v++) for (let f = 0; f < s.length; f++) m(f) || (ce.add(b.length), b.push([
          c[`${f},${v}`],
          c[`${f},${v + 1}`]
        ]));
        for (let v = 1; v < l.length; v++) for (let f = 0; f < s.length - 1; f++) Ie.add(b.length), b.push([
          c[`${f},${v}`],
          c[`${f + 1},${v}`]
        ]);
        const M = /* @__PURE__ */ new Map(), w = qe();
        for (let v = 0; v < s.length; v++) {
          if (m(v)) continue;
          const f = `${v},0`;
          c[f] !== void 0 && M.set(c[f], [
            ...w
          ]);
        }
        return e.nodes.val = i, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: M
        }), ve = [
          ...s
        ], De = [
          0
        ], setTimeout(() => {
          yt(), tt(s, [
            0
          ]), fn(), un();
        }, 50), Ge(), {
          nodes: i.length,
          elements: b.length
        };
      },
      building(t, o, n, a = 3, s = 0, p = 0, l = 0, d = 0, m = 1) {
        je.clear();
        const c = [];
        s > 0 && c.push(-s), c.push(0);
        for (const r of t) c.push(c[c.length - 1] + r);
        p > 0 && c.push(c[c.length - 1] + p);
        const i = [];
        l > 0 && i.push(-l), i.push(0);
        for (const r of o) i.push(i[i.length - 1] + r);
        d > 0 && i.push(i[i.length - 1] + d);
        const b = [
          0
        ];
        for (const r of n) b.push(b[b.length - 1] + r);
        const M = (r) => s > 0 && r === 0 || p > 0 && r === c.length - 1, w = (r) => l > 0 && r === 0 || d > 0 && r === i.length - 1, v = (r, g) => M(r) || w(g), f = [], x = {};
        for (let r = 0; r < b.length; r++) for (let g = 0; g < i.length; g++) for (let $ = 0; $ < c.length; $++) r === 0 && v($, g) || (x[`${$},${g},${r}`] = f.length, f.push([
          c[$],
          i[g],
          b[r]
        ]));
        const k = f.length, L = [];
        ce = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map();
        const I = [];
        for (let r = 0; r < b.length - 1; r++) for (let g = 0; g < i.length; g++) for (let $ = 0; $ < c.length; $++) v($, g) || I.push({
          el: [
            x[`${$},${g},${r}`],
            x[`${$},${g},${r + 1}`]
          ],
          floor: r
        });
        for (const { el: [r, g], floor: $ } of I) {
          if (m <= 1) {
            ce.add(L.length), Ce.set(L.length, $), L.push([
              r,
              g
            ]);
            continue;
          }
          const T = f[r], N = f[g];
          let q = r;
          for (let C = 1; C < m; C++) {
            const P = C / m, A = f.length;
            f.push([
              T[0] + (N[0] - T[0]) * P,
              T[1] + (N[1] - T[1]) * P,
              T[2] + (N[2] - T[2]) * P
            ]), ce.add(L.length), Ce.set(L.length, $), L.push([
              q,
              A
            ]), q = A;
          }
          ce.add(L.length), Ce.set(L.length, $), L.push([
            q,
            g
          ]);
        }
        We = /* @__PURE__ */ new Map();
        const H = [];
        for (let r = 1; r < b.length; r++) for (let g = 0; g < i.length; g++) for (let $ = 0; $ < c.length - 1; $++) H.push({
          el: [
            x[`${$},${g},${r}`],
            x[`${$ + 1},${g},${r}`]
          ],
          floor: r - 1,
          dir: "x",
          bay: $
        });
        for (let r = 1; r < b.length; r++) for (let g = 0; g < c.length; g++) for (let $ = 0; $ < i.length - 1; $++) H.push({
          el: [
            x[`${g},${$},${r}`],
            x[`${g},${$ + 1},${r}`]
          ],
          floor: r - 1,
          dir: "y",
          bay: $
        });
        for (const { el: [r, g], floor: $, dir: T, bay: N } of H) {
          const q = f[r], C = f[g];
          let P = r;
          for (let Z = 1; Z < a; Z++) {
            const Q = Z / a, ne = f.length;
            f.push([
              q[0] + (C[0] - q[0]) * Q,
              q[1] + (C[1] - q[1]) * Q,
              q[2] + (C[2] - q[2]) * Q
            ]);
            const oe = L.length;
            Ie.add(oe), Ce.set(oe, $), We.set(oe, {
              dir: T,
              bay: N
            }), L.push([
              P,
              ne
            ]), P = ne;
          }
          const A = L.length;
          Ie.add(A), Ce.set(A, $), We.set(A, {
            dir: T,
            bay: N
          }), L.push([
            P,
            g
          ]);
        }
        if (ot = /* @__PURE__ */ new Set(), Ae && Ue > 0) {
          const r = (g, $, T) => {
            for (let q = 0; q < f.length; q++) if (Math.abs(f[q][0] - g) < 1e-6 && Math.abs(f[q][1] - $) < 1e-6 && Math.abs(f[q][2] - T) < 1e-6) return q;
            const N = f.length;
            return f.push([
              g,
              $,
              T
            ]), N;
          };
          for (let g = 1; g < b.length; g++) if (dt === "x") for (let $ = 0; $ < i.length - 1; $++) {
            const T = i[$], N = i[$ + 1];
            for (let q = 1; q <= Ue; q++) {
              const C = T + q / (Ue + 1) * (N - T), P = [];
              for (let A = 0; A < c.length; A++) P.push(r(c[A], C, b[g]));
              for (let A = 0; A < c.length - 1; A++) {
                const Z = L.length;
                ot.add(Z), Ie.add(Z), Ce.set(Z, g - 1), We.set(Z, {
                  dir: "x",
                  bay: A
                }), L.push([
                  P[A],
                  P[A + 1]
                ]);
              }
            }
          }
          else for (let $ = 0; $ < c.length - 1; $++) {
            const T = c[$], N = c[$ + 1];
            for (let q = 1; q <= Ue; q++) {
              const C = T + q / (Ue + 1) * (N - T), P = [];
              for (let A = 0; A < i.length; A++) P.push(r(C, i[A], b[g]));
              for (let A = 0; A < i.length - 1; A++) {
                const Z = L.length;
                ot.add(Z), Ie.add(Z), Ce.set(Z, g - 1), We.set(Z, {
                  dir: "y",
                  bay: A
                }), L.push([
                  P[A],
                  P[A + 1]
                ]);
              }
            }
          }
        }
        const y = /* @__PURE__ */ new Map(), u = qe();
        for (let r = 0; r < i.length; r++) for (let g = 0; g < c.length; g++) v(g, r) || y.set(x[`${g},${r},0`], [
          ...u
        ]);
        Pe = /* @__PURE__ */ new Set();
        for (const r of Be) {
          const g = b.length - 1, $ = r.floors.includes(-1) ? Array.from({
            length: g
          }, (T, N) => N) : r.floors.filter((T) => T < g);
          for (const T of $) {
            let N, q, C, P;
            r.dir === "x" ? (N = r.bay, C = r.bay + 1, q = r.axisIdx, P = r.axisIdx) : (N = r.axisIdx, C = r.axisIdx, q = r.bay, P = r.bay + 1);
            const A = x[`${N},${q},${T}`], Z = x[`${N},${q},${T + 1}`];
            let Q, ne;
            if (r.dir === "x" ? (Q = x[`${C},${P},${T}`], ne = x[`${C},${P},${T + 1}`]) : (Q = x[`${C},${P},${T}`], ne = x[`${C},${P},${T + 1}`]), A === void 0 || Q === void 0 || Z === void 0 || ne === void 0) continue;
            const oe = Fe, U = ge, ae = f[A], we = f[Q], _e = f[Z], Ne = f[ne], le = [];
            for (let xe = 0; xe <= U; xe++) {
              const Me = [], fe = xe / U;
              for (let Le = 0; Le <= oe; Le++) {
                const Oe = Le / oe, et = (1 - fe) * ((1 - Oe) * ae[0] + Oe * we[0]) + fe * ((1 - Oe) * _e[0] + Oe * Ne[0]), se = (1 - fe) * ((1 - Oe) * ae[1] + Oe * we[1]) + fe * ((1 - Oe) * _e[1] + Oe * Ne[1]), Ee = (1 - fe) * ((1 - Oe) * ae[2] + Oe * we[2]) + fe * ((1 - Oe) * _e[2] + Oe * Ne[2]);
                xe === 0 && Le === 0 ? Me.push(A) : xe === 0 && Le === oe ? Me.push(Q) : xe === U && Le === 0 ? Me.push(Z) : xe === U && Le === oe ? Me.push(ne) : (Me.push(f.length), f.push([
                  et,
                  se,
                  Ee
                ]));
              }
              le.push(Me);
            }
            for (let xe = 0; xe < U; xe++) for (let Me = 0; Me < oe; Me++) {
              const fe = le[xe][Me], Le = le[xe][Me + 1], Oe = le[xe + 1][Me + 1], et = le[xe + 1][Me], se = L.length;
              Pe.add(se), Ce.set(se, T), L.push([
                fe,
                Le,
                Oe,
                et
              ]);
            }
            if (T === 0) for (let xe = 0; xe <= oe; xe++) {
              const Me = le[0][xe];
              Me >= k && y.set(Me, [
                ...u
              ]);
            }
          }
        }
        if (Lt = /* @__PURE__ */ new Set(), ft) {
          const r = a, g = a, $ = /* @__PURE__ */ new Map(), T = (N, q, C) => `${Math.round(N * 1e4)},${Math.round(q * 1e4)},${Math.round(C * 1e4)}`;
          for (let N = 0; N < f.length; N++) $.set(T(f[N][0], f[N][1], f[N][2]), N);
          for (let N = 1; N < b.length; N++) {
            const q = b[N];
            for (let C = 0; C < c.length - 1; C++) for (let P = 0; P < i.length - 1; P++) {
              const A = c[C], Z = c[C + 1], Q = i[P], ne = i[P + 1], oe = [];
              for (let U = 0; U <= g; U++) {
                const ae = [];
                for (let we = 0; we <= r; we++) {
                  const _e = A + we / r * (Z - A), Ne = Q + U / g * (ne - Q);
                  if (U === 0 && we === 0) ae.push(x[`${C},${P},${N}`]);
                  else if (U === 0 && we === r) ae.push(x[`${C + 1},${P},${N}`]);
                  else if (U === g && we === 0) ae.push(x[`${C},${P + 1},${N}`]);
                  else if (U === g && we === r) ae.push(x[`${C + 1},${P + 1},${N}`]);
                  else {
                    const le = T(_e, Ne, q), xe = $.get(le);
                    if (xe !== void 0) ae.push(xe);
                    else {
                      const Me = f.length;
                      f.push([
                        _e,
                        Ne,
                        q
                      ]), $.set(le, Me), ae.push(Me);
                    }
                  }
                }
                oe.push(ae);
              }
              for (let U = 0; U < g; U++) for (let ae = 0; ae < r; ae++) {
                const we = oe[U][ae], _e = oe[U][ae + 1], Ne = oe[U + 1][ae + 1], le = oe[U + 1][ae], xe = L.length;
                Lt.add(xe), Ce.set(xe, N - 1), L.push([
                  we,
                  _e,
                  Ne,
                  le
                ]);
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: y
        }), ve = [
          ...c
        ], De = [
          ...i
        ], setTimeout(() => {
          yt(), tt(c, i), fn(), un();
        }, 50), Ge(), {
          nodes: f.length,
          elements: L.length,
          nJointNodes: k
        };
      },
      galpon(t = 12, o = 20, n = 6, a = 3, s = 8, p = 4) {
        je.clear();
        const l = [], d = [], m = (w) => n + a * (1 - Math.pow(2 * w / t - 1, 2)), c = [], i = p + 1;
        for (let w = 0; w < i; w++) {
          const v = [], f = o / p * w;
          v.push(l.length), l.push([
            0,
            f,
            0
          ]), v.push(l.length), l.push([
            t,
            f,
            0
          ]), v.push(l.length), l.push([
            0,
            f,
            n
          ]);
          for (let x = 1; x < s; x++) {
            const k = t / s * x;
            v.push(l.length), l.push([
              k,
              f,
              m(k)
            ]);
          }
          v.push(l.length), l.push([
            t,
            f,
            n
          ]), c.push(v);
        }
        for (let w = 0; w < i; w++) {
          const v = c[w];
          d.push([
            v[0],
            v[2]
          ]), d.push([
            v[1],
            v[v.length - 1]
          ]);
          for (let f = 2; f < v.length - 1; f++) d.push([
            v[f],
            v[f + 1]
          ]);
        }
        for (let w = 0; w < p; w++) for (let v = 2; v < c[0].length; v++) d.push([
          c[w][v],
          c[w + 1][v]
        ]);
        for (let w = 0; w < p; w++) for (let v = 2; v < c[0].length - 1; v += 2) d.push([
          c[w][v],
          c[w + 1][v + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), M = qe();
        for (let w = 0; w < i; w++) b.set(c[w][0], [
          ...M
        ]), b.set(c[w][1], [
          ...M
        ]);
        return e.nodes.val = l, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), Ge(), {
          nodes: l.length,
          elements: d.length
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
            je.clear(), Ve("truss"), _n();
            break;
          }
          case "beams": {
            je.clear(), Ve("beams"), Rn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            je.clear(), Ve("3d"), Hn();
            break;
          }
          case "portico": {
            Ve("frame"), be();
            break;
          }
          case "edificio": {
            Ve("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, Be = [], ft = false, Ae = false, be();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ve("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Be = [], Ae = true, Ue = 2;
            const o = X.reduce((a, s) => a + s, 0) / X.length, n = ee.reduce((a, s) => a + s, 0) / ee.length;
            dt = o >= n ? "y" : "x", ft = true, $t = 0.08, be();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ve("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, Ae = false;
            const o = Math.round(((_a2 = V.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = V.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Be = [
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
            ], ft = true, $t = 0.15, be();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ve("edificio"), ke.colMat = 2, ke.vigaMat = 0, Ae = false;
            const o = Math.round(((_c = V.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = V.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Be = [
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
            ], ft = true, $t = 0.12, be();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ve("edificio"), V.nPisos && (V.nPisos.val = 1), V.hPiso && (V.hPiso.val = 4.5), V.nVanosX && (V.nVanosX.val = 3), V.nVanosY && (V.nVanosY.val = 2), V.nSubViga && (V.nSubViga.val = 3), X = [
              6,
              6,
              6
            ], ee = [
              5,
              5
            ], ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Be = [], Ae = true, Ue = 2, dt = X[0] >= ee[0] ? "y" : "x", ft = true, $t = 0.08, Ft = 3, Nt = 3, be();
            break;
          }
          case "galpon": {
            Ve("galpon"), be();
            break;
          }
          case "barra": {
            Ve("barra"), be();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            je.clear(), Ve("placa-3q"), Bn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            je.clear(), Ve("placa-q4"), Dn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            je.clear(), Ve("losa-rect"), jn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            je.clear(), Ve("losa-plana"), Wn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            je.clear(), Ve("viga-alta"), Yn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            je.clear(), Ve("muro-contencion"), Gn();
            break;
          }
          case "zapata":
          case "footing": {
            je.clear(), Ve("zapata"), Jn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            je.clear(), Ve("placa-orificios"), Vn();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            je.clear(), Ve("col-placa"), Xn();
            break;
          }
          case "talud":
          case "slope": {
            je.clear(), Ve("talud"), Kn();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            je.clear(), Ve("eiffel"), ps();
            break;
          }
          case "arco":
          case "arco-gateway": {
            je.clear(), Ve("arco"), fs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            je.clear(), Ve("puente"), us();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            je.clear(), Ve("twisted"), ms();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            je.clear(), Ve("burj"), bs();
            break;
          }
          case "opera":
          case "sydney-opera": {
            je.clear(), Ve("opera"), hs();
            break;
          }
          case "diagrid":
          case "gherkin": {
            je.clear(), Ve("diagrid"), gs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, a = 16, s = "simply-supported", p = -10, l = 0.2, d = 3e7, m = 0.3, c = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][c]}]: ${t}\xD7${o}, ${n}\xD7${a} elem, BC=${s}, q=${p}, t=${l}`);
        const b = performance.now(), M = En({
          E: d,
          nu: m,
          thickness: l,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: a,
          bcType: s,
          pressure: p,
          theoryType: c
        }), w = performance.now() - b;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${M.maxW.toExponential(6)}`), console.log(`w_center = ${(M.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${M.maxMxx.toExponential(4)}, Myy_max = ${M.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${M.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${M.maxQx.toExponential(4)}, Qy_max = ${M.maxQy.toExponential(4)}`);
        const v = M.nodeResults.map((I) => [
          I.x,
          I.y,
          0
        ]), f = M.elementResults.map((I) => [
          ...I.nodes
        ]);
        e.nodes.val = v, e.elements.val = f;
        const x = /* @__PURE__ */ new Map();
        M.nodeResults.forEach((I, H) => {
          x.set(H, [
            0,
            0,
            I.w,
            I.bx,
            I.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const k = /* @__PURE__ */ new Map();
        M.nodeResults.forEach((I, H) => {
          (I.x < 1e-10 || I.x > t - 1e-10 || I.y < 1e-10 || I.y > o - 1e-10) && k.set(H, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const L = /* @__PURE__ */ new Map();
        if (Math.abs(p) > 1e-30) {
          const I = p * t * o / v.length;
          v.forEach((H, y) => {
            k.has(y) || L.set(y, [
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
          loads: L
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const I = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
          M.elementResults.forEach((u, r) => {
            I.set(r, [
              u.Mxx,
              u.Mxx,
              u.Mxx
            ]), H.set(r, [
              u.Myy,
              u.Myy,
              u.Myy
            ]), y.set(r, [
              u.Mxy,
              u.Mxy,
              u.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: I,
            bendingYY: H,
            bendingXY: y
          };
        }
        return setTimeout(() => yt(), 50), Ge(), M;
      },
      set(t, o) {
        V[t] ? (V[t].val = o, console.log(`${t} = ${o}`), Wt(), be()) : Ze[t] ? (Ze[t].val = o, console.log(`${t} = ${o}`), Wt(), be()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...V,
          ...Ze
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const a in V) o[a] = V[a].val;
          for (const a in Ze) o[a] = Ze[a].val;
          o.plateTheory = pt, o.supportType = xt;
          const n = Yo()[E];
          return n && n[xt] && (o.supportLabel = n[xt].label), console.table(o), o;
        }
        if (V[t]) return V[t].val;
        if (Ze[t]) return Ze[t].val;
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
        }[t.toLowerCase()] || 3), pt = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[pt] || pt}`), E.includes("placa") && (Wt(), be());
      },
      setBc(t) {
        const o = Yo()[E];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((a) => a.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        xt = t, xt >= o.length && (xt = 0), console.log(`Apoyo: ${o[xt].label} \u2192 DOFs: [${o[xt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Wt(), be();
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
        t && (h = t), o && (O = o), S = ho(h, O);
        const n = he.querySelector("#cad3d-force-unit"), a = he.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), a && (a.textContent = O), E && Ve(E), console.log(`Unidades: ${S.label} | E=${S.E.toExponential(3)} ${S.stress}`), S.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Nn() {
      return ma(S);
    }
    function On() {
      return ba(S);
    }
    let Ze = {};
    function Ve(t) {
      var _a2, _b;
      E = t, Ms.val = true, xt = 0, ye && ln(), V = {};
      const o = Nn()[t];
      if (o) for (const a of o) V[a.key] = {
        val: a.val,
        min: a.min,
        max: a.max,
        step: a.step,
        label: a.label
      };
      Ze = {};
      const n = On()[t];
      if (n) for (const a of n) Ze[a.key] = {
        val: a.val,
        min: a.min,
        max: a.max,
        step: a.step,
        label: a.label
      };
      if (t === "edificio") {
        const a = Math.round(((_a2 = V.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = V.nVanosY) == null ? void 0 : _b.val) ?? 2);
        X = Array(a).fill(S.defaultSpan), ee = Array(s).fill(S.defaultSpan * 0.8);
      }
      Wt(), setTimeout(() => {
        Cs(), be();
      }, 50);
    }
    function j(t) {
      var _a2, _b;
      return ((_a2 = V[t]) == null ? void 0 : _a2.val) ?? ((_b = Ze[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function be() {
      switch (E) {
        case "truss":
          _n();
          break;
        case "beams":
          Rn();
          break;
        case "3d":
          Hn();
          break;
        case "frame": {
          const o = Math.round(j("nVanos")), n = j("spanV"), a = Math.round(j("nPisos")), s = j("hPiso");
          je.frame(Array(o).fill(n), Array(a).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(j("nPisos")), n = j("hPiso"), a = j("Lvix") || 0, s = j("Lvdx") || 0, p = j("Lviy") || 0, l = j("Lvdy") || 0, d = Math.max(1, Math.round(j("nSubViga") || 3)), m = Math.max(1, Math.round(j("nSubCol") || 1));
          je.building([
            ...X
          ], [
            ...ee
          ], Array(o).fill(n), d, a, s, p, l, m);
          break;
        }
        case "galpon":
          je.galpon(j("span"), j("length"), j("height"), j("archRise"), Math.round(j("xDiv")), Math.round(j("yDiv")));
          break;
        case "barra":
          Ss();
          break;
        case "placa-3q":
          Bn();
          break;
        case "placa-q4":
          Dn();
          break;
        case "losa-rect":
          jn();
          break;
        case "losa-plana":
          Wn();
          break;
        case "viga-alta":
          Yn();
          break;
        case "muro-contencion":
          Gn();
          break;
        case "zapata":
          Jn();
          break;
        case "placa-orificios":
          Vn();
          break;
        case "col-placa":
          Xn();
          break;
        case "talud":
          Kn();
          break;
        case "eiffel":
          ps();
          break;
        case "arco":
          fs();
          break;
        case "puente":
          us();
          break;
        case "twisted":
          ms();
          break;
        case "burj":
          bs();
          break;
        case "opera":
          hs();
          break;
        case "diagrid":
          gs();
          break;
      }
      if ((E === "frame" || E === "edificio" || E === "galpon") && e.nodeInputs) {
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
      ].includes(E)) {
        if (G.size > 0 || D.size > 0 || B) {
          const o = e.elements.val, n = o.filter((a, s) => !(G.has(s) || D.has(s) || B && !Y.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          eo(), rn();
        }, 30);
      }
    }
    function _n() {
      const t = j("span"), o = Math.round(j("divisions")), n = j("height"), a = t / o, s = [], p = [];
      for (let i = 0; i <= o; i++) s.push([
        a * i,
        0,
        0
      ]);
      for (let i = 0; i <= o; i++) s.push([
        a * i,
        0,
        n
      ]);
      const l = o + 1;
      for (let i = 0; i < o; i++) p.push([
        i,
        i + 1
      ]);
      for (let i = 0; i < o; i++) p.push([
        l + i,
        l + i + 1
      ]);
      for (let i = 0; i <= o; i++) p.push([
        i,
        l + i
      ]);
      for (let i = 0; i < o; i++) i < o / 2 ? p.push([
        i,
        l + i + 1
      ]) : p.push([
        l + i,
        i + 1
      ]);
      const d = /* @__PURE__ */ new Map([
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
      ]), m = (j("CM") ?? 0) + (j("CV") ?? 0), c = /* @__PURE__ */ new Map();
      if (m !== 0) for (let i = 0; i <= o; i++) c.set(i, [
        0,
        0,
        m,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: c
      }), Ge();
    }
    function Rn() {
      const t = j("width"), o = j("height"), n = j("Ex") ?? 0, a = (j("CM") ?? 0) + (j("CV") ?? 0), s = Math.max(1, Math.round(j("nSub") || 4)), p = [
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
      ], l = [];
      l.push([
        0,
        1
      ], [
        2,
        3
      ]);
      const d = [
        0,
        0,
        o
      ], m = [
        t,
        0,
        o
      ];
      let c = 1;
      for (let b = 1; b < s; b++) {
        const M = b / s, w = p.length;
        p.push([
          d[0] + (m[0] - d[0]) * M,
          d[1] + (m[1] - d[1]) * M,
          d[2] + (m[2] - d[2]) * M
        ]), l.push([
          c,
          w
        ]), c = w;
      }
      l.push([
        c,
        2
      ]);
      const i = /* @__PURE__ */ new Map();
      if (n !== 0 && a === 0) i.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (a !== 0 && n === 0) for (let b = 1; b < p.length; b++) b === 0 || b === 3 || i.set(b, [
        0,
        0,
        a,
        0,
        0,
        0
      ]);
      else if (n !== 0 && a !== 0) for (let b = 1; b < p.length; b++) b === 0 || b === 3 || i.set(b, [
        b === 2 ? n : 0,
        0,
        a,
        0,
        0,
        0
      ]);
      e.nodes.val = p, e.elements.val = l, e.nodeInputs && (e.nodeInputs.val = {
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
      }), Ge();
    }
    function Hn() {
      const t = j("dx"), o = j("dy"), n = j("dz"), a = Math.round(j("stories")), s = Math.max(1, Math.round(j("nSub") || 3)), p = [];
      for (let f = 0; f <= a; f++) p.push([
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
      const l = p.length, d = [
        ...p
      ], m = [];
      for (let f = 0; f < a; f++) for (let x = 0; x < 4; x++) m.push([
        f * 4 + x,
        (f + 1) * 4 + x
      ]);
      for (let f = 0; f < a; f++) {
        const x = f * 4;
        m.push([
          x,
          x + 5
        ], [
          x + 3,
          x + 6
        ], [
          x,
          x + 7
        ], [
          x + 1,
          x + 6
        ]);
      }
      const c = [];
      for (let f = 1; f <= a; f++) {
        const x = f * 4;
        c.push([
          x,
          x + 1
        ], [
          x + 1,
          x + 2
        ], [
          x + 2,
          x + 3
        ], [
          x + 3,
          x
        ], [
          x,
          x + 2
        ]);
      }
      for (const [f, x] of c) {
        const k = p[f], L = p[x];
        let I = f;
        for (let H = 1; H < s; H++) {
          const y = H / s, u = d.length;
          d.push([
            k[0] + (L[0] - k[0]) * y,
            k[1] + (L[1] - k[1]) * y,
            k[2] + (L[2] - k[2]) * y
          ]), m.push([
            I,
            u
          ]), I = u;
        }
        m.push([
          I,
          x
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
      const b = j("Ex") ?? 0, M = (j("CM") ?? 0) + (j("CV") ?? 0), w = l - 2, v = /* @__PURE__ */ new Map();
      if (b !== 0 && M === 0) v.set(w, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (M !== 0 && b === 0) for (let f = 0; f < d.length; f++) i.has(f) || v.set(f, [
        0,
        0,
        M,
        0,
        0,
        0
      ]);
      else if (b !== 0 && M !== 0) for (let f = 0; f < d.length; f++) i.has(f) || v.set(f, [
        f === w ? b : 0,
        0,
        M,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: v
      }), Ge();
    }
    function Ss() {
      const t = j("L"), o = Math.round(j("nElem")), n = j("F"), a = t / o, s = [], p = [];
      for (let m = 0; m <= o; m++) s.push([
        a * m,
        0,
        0
      ]);
      for (let m = 0; m < o; m++) p.push([
        m,
        m + 1
      ]);
      const l = /* @__PURE__ */ new Map([
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
      ]), d = /* @__PURE__ */ new Map([
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
      e.nodes.val = s, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: l,
        loads: d
      }), Ge();
    }
    function Bn() {
      const t = j("Lx") || 15, o = j("Ly") || 10, n = j("meshSize") || 0.5, a = j("q") || -3, s = j("t") || 1, p = j("E") || 3e7, l = j("nu") || 0.3, d = p / (2 * (1 + l)), m = pt === 1 ? "Membrana" : pt === 2 ? "Kirchhoff" : "Mindlin", { nodes: c, elements: i, boundaryIndices: b } = Zt({
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
      }), M = t * o, w = a * M / c.length, v = new Map(b.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(c.map((x, k) => [
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
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: v,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(i.map((x, k) => [
          k,
          p
        ])),
        elasticitiesOrthogonal: new Map(i.map((x, k) => [
          k,
          p
        ])),
        thicknesses: new Map(i.map((x, k) => [
          k,
          s
        ])),
        poissonsRatios: new Map(i.map((x, k) => [
          k,
          l
        ])),
        shearModuli: new Map(i.map((x, k) => [
          k,
          d
        ]))
      });
      try {
        const x = Rt(c, i, e.nodeInputs.val, e.elementInputs.val);
        x && e.deformOutputs && (e.deformOutputs.val = x);
        const k = ko(c, i, e.elementInputs.val, x);
        k && e.analyzeOutputs && (e.analyzeOutputs.val = k), console.log(`Plate 3Q [${m}]: ${c.length} nodes, ${i.length} triangles, t=${s}, E=${p}, \u03BD=${l}`);
      } catch (x) {
        console.warn("Plate 3Q analysis failed:", x.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Dn() {
      const t = j("Lx") || 10, o = j("Ly") || 10, n = Math.round(j("nx") || 16), a = Math.round(j("ny") || 16), s = j("t") || 0.2, p = j("q") || -10, l = j("E") || 3e7, d = j("nu") || 0.3, m = xt === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0;
      return je.plateQ4(t, o, n, a, m, p, s, l, d, i);
    }
    function jn() {
      const t = j("a") || 6, o = j("b") || 4, n = Math.round(j("nx") || 12), a = Math.round(j("ny") || 8), s = j("t") || 0.1, p = j("q") || -10, l = j("E") || 35e6, d = j("nu") || 0.15, c = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0, i = je.plateQ4(t, o, n, a, "simply-supported", p, s, l, d, c), b = l * s * s * s / (12 * (1 - d * d));
      let M = 0;
      for (let w = 1; w <= 19; w += 2) for (let v = 1; v <= 19; v += 2) {
        const f = w * w / (t * t) + v * v / (o * o);
        M += 1 / (w * v * f * f);
      }
      if (M *= 16 * Math.abs(p) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${M.toExponential(6)}`), i) {
        const w = Math.abs((Math.abs(i.centerW || 0) - M) / M * 100);
        console.log(`   WASM w_center = ${(i.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return i;
    }
    function Wn() {
      const t = j("t") || 0.2, o = j("q") || -10, n = j("E") || 35e6, a = j("nu") || 0.2, s = j("meshSize") || 0.6, p = [
        3.6,
        4.2,
        4.2,
        3.6
      ], l = [
        3,
        3.6,
        3
      ], d = p.reduce((q, C) => q + C, 0), m = l.reduce((q, C) => q + C, 0), c = [
        0
      ];
      for (const q of p) c.push(c[c.length - 1] + q);
      const i = [
        0
      ];
      for (const q of l) i.push(i[i.length - 1] + q);
      const b = Math.max(2, Math.round(d / s)), M = Math.max(2, Math.round(m / s)), w = d / b, v = m / M, f = [];
      for (let q = 0; q <= M; q++) for (let C = 0; C <= b; C++) f.push([
        C * w,
        q * v
      ]);
      const x = [], k = /* @__PURE__ */ new Set();
      for (const q of c) for (const C of i) {
        let P = 1 / 0, A = 0;
        for (let Z = 0; Z < f.length; Z++) {
          const Q = Math.hypot(f[Z][0] - q, f[Z][1] - C);
          Q < P && (P = Q, A = Z);
        }
        k.has(A) || (k.add(A), x.push({
          node: A,
          dof: 0,
          k: 1e15
        }));
      }
      const I = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][I]}]: ${d}\xD7${m}m, ${b}\xD7${M} elem, ${k.size} columnas`);
      const H = performance.now(), y = En({
        E: n,
        nu: a,
        thickness: t,
        meshLx: d,
        meshLy: m,
        meshNx: b,
        meshNy: M,
        bcType: "none",
        pressure: o,
        theoryType: I,
        springs: x
      }), u = performance.now() - H;
      console.log(`Solved in ${u.toFixed(1)} ms, w_max = ${y.maxW.toExponential(4)}`);
      const r = y.nodeResults.map((q) => [
        q.x,
        q.y,
        0
      ]), g = y.elementResults.map((q) => [
        ...q.nodes
      ]);
      e.nodes.val = r, e.elements.val = g;
      const $ = /* @__PURE__ */ new Map();
      y.nodeResults.forEach((q, C) => {
        $.set(C, [
          0,
          0,
          q.w,
          q.bx,
          q.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: $
      });
      const T = /* @__PURE__ */ new Map();
      for (const q of k) T.set(q, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const N = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const q = o * d * m / r.length;
        r.forEach((C, P) => {
          T.has(P) || N.set(P, [
            0,
            0,
            q,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: T,
        loads: N
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const q = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        y.elementResults.forEach((A, Z) => {
          q.set(Z, [
            A.Mxx,
            A.Mxx,
            A.Mxx
          ]), C.set(Z, [
            A.Myy,
            A.Myy,
            A.Myy
          ]), P.set(Z, [
            A.Mxy,
            A.Mxy,
            A.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: q,
          bendingYY: C,
          bendingXY: P
        };
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Yn() {
      const t = j("L") || 4, o = j("H") || 2, n = j("t") || 0.1, a = j("E") || 2e7, s = j("nu") || 0.2, p = a / (2 * (1 + s)), l = j("q") || -100, d = j("b") || 0.8, m = j("meshSize") || 0.2, { nodes: c, elements: i, boundaryIndices: b } = Zt({
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
        maxMeshSize: m
      }), M = c, w = 0.4, v = /* @__PURE__ */ new Map();
      for (let u = 0; u < M.length; u++) {
        const r = M[u][0], g = M[u][1];
        Math.abs(g) < 1e-6 && (r <= w + 1e-6 || r >= t - w - 1e-6) && v.set(u, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - d) / 2, x = f + d, k = [];
      for (let u = 0; u < M.length; u++) if (Math.abs(M[u][1] - o) < 1e-6) {
        const r = M[u][0];
        r >= f - 1e-6 && r <= x + 1e-6 && k.push(u);
      }
      const L = l * d / Math.max(k.length, 1), I = /* @__PURE__ */ new Map();
      for (const u of k) I.set(u, [
        0,
        L,
        0,
        0,
        0,
        0
      ]);
      const H = {
        elasticities: new Map(i.map((u, r) => [
          r,
          a
        ])),
        elasticitiesOrthogonal: new Map(i.map((u, r) => [
          r,
          a
        ])),
        thicknesses: new Map(i.map((u, r) => [
          r,
          n
        ])),
        poissonsRatios: new Map(i.map((u, r) => [
          r,
          s
        ])),
        shearModuli: new Map(i.map((u, r) => [
          r,
          p
        ]))
      }, y = {
        supports: v,
        loads: I
      };
      try {
        const u = Rt(M, i, y, H), r = ko(M, i, H, u), g = M.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        if (e.nodes.val = g, e.elements.val = i, u && u.deformations) {
          const T = /* @__PURE__ */ new Map();
          u.deformations.forEach((N, q) => {
            T.set(q, [
              N[0],
              N[2],
              N[1],
              N[3],
              N[5],
              N[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: T
          });
        }
        if (e.nodeInputs) {
          const T = /* @__PURE__ */ new Map();
          v.forEach((q, C) => T.set(C, q));
          const N = /* @__PURE__ */ new Map();
          I.forEach((q, C) => N.set(C, [
            q[0],
            q[2],
            q[1],
            q[3],
            q[5],
            q[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: T,
            loads: N
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let $ = 0;
        u && u.deformations && u.deformations.forEach((T) => {
          const N = Math.sqrt(T[0] * T[0] + T[1] * T[1] + T[2] * T[2]);
          $ = Math.max($, N);
        }), console.log(`Viga Alta: ${M.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${a}, nu=${s}`), console.log(`  Carga: q=${l} kN/m sobre ${d}m central`), console.log(`  max|u| = ${$.toExponential(4)}`);
      } catch (u) {
        console.warn("Viga Alta analysis failed:", u.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Gn() {
      const t = j("H") || 4, o = j("B") || 3, n = j("tw") || 0.3, a = j("tb") || 0.4, s = j("meshSize") || 0.2, p = j("E") || 25e6, l = j("nu") || 0.2, d = p / (2 * (1 + l)), m = j("gamma") || 18, c = j("Ka") || 0.33, i = j("Es") || 5e4, b = j("nus") || 0.3, M = i / (2 * (1 + b)), w = j("kn") || 1e6, v = j("ks") || 1e4, f = j("gammaW") || 9.81, x = j("Hw") || 3.5, k = j("qs") || 0, L = xt, I = o * 0.3, H = o * 0.7, y = [
        [
          -I,
          0,
          0
        ],
        [
          H,
          0,
          0
        ],
        [
          H,
          a,
          0
        ],
        [
          n,
          a,
          0
        ],
        [
          n,
          a + t,
          0
        ],
        [
          0,
          a + t,
          0
        ],
        [
          0,
          a,
          0
        ],
        [
          -I,
          a,
          0
        ]
      ];
      let u = [], r = [], g = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), T;
      if (L === 0) {
        const C = Zt({
          points: y,
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
        u = C.nodes, r = C.elements;
        for (let A = 0; A < u.length; A++) Math.abs(u[A][1]) < 1e-6 && g.set(A, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let A = 0; A < u.length; A++) {
          const Z = u[A][0], Q = u[A][1];
          Math.abs(Z - n) < s * 0.6 && Q >= a - 1e-6 && P.push({
            idx: A,
            y: Q
          });
        }
        P.sort((A, Z) => A.y - Z.y);
        for (let A = 0; A < P.length; A++) {
          const { idx: Z, y: Q } = P[A], ne = a + t - Q, oe = c * m * ne + c * k;
          let U = s;
          A > 0 && A < P.length - 1 ? U = (P[A + 1].y - P[A - 1].y) / 2 : A === 0 && P.length > 1 ? U = (P[1].y - P[0].y) / 2 : A === P.length - 1 && P.length > 1 && (U = (P[A].y - P[A - 1].y) / 2);
          const ae = oe * U;
          Math.abs(ae) > 1e-10 && $.set(Z, [
            ae,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(r.map((A, Z) => [
            Z,
            p
          ])),
          elasticitiesOrthogonal: new Map(r.map((A, Z) => [
            Z,
            p
          ])),
          thicknesses: new Map(r.map((A, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(r.map((A, Z) => [
            Z,
            l
          ])),
          shearModuli: new Map(r.map((A, Z) => [
            Z,
            d
          ]))
        };
      } else if (L === 1 || L === 2) {
        const C = H, P = a + t;
        if (L === 2) {
          const A = [
            [
              -I,
              0,
              0
            ],
            [
              C,
              0,
              0
            ],
            [
              C,
              P,
              0
            ],
            [
              n,
              P,
              0
            ],
            [
              0,
              P,
              0
            ],
            [
              0,
              a,
              0
            ],
            [
              -I,
              a,
              0
            ]
          ], Z = Math.max(3, Math.ceil((P - a) / s)), Q = [];
          for (let se = 0; se <= Z; se++) Q.push([
            n,
            a + se * (P - a) / Z,
            0
          ]);
          const ne = Zt({
            points: [
              ...A,
              ...Q
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
          u = ne.nodes, r = ne.elements;
          const oe = s * 0.4, U = [];
          for (let se = 0; se < u.length; se++) {
            const Ee = u[se][0], He = u[se][1];
            Math.abs(Ee - n) < oe && He >= a - oe && U.push(se);
          }
          U.sort((se, Ee) => u[se][1] - u[Ee][1]);
          const ae = [
            U[0]
          ];
          for (let se = 1; se < U.length; se++) {
            const Ee = u[U[se]][1] - u[ae[ae.length - 1]][1];
            Math.abs(Ee) > s * 0.05 && ae.push(U[se]);
          }
          U.length = 0, U.push(...ae);
          const we = /* @__PURE__ */ new Map();
          for (const se of U) {
            const Ee = u.length;
            u.push([
              u[se][0],
              u[se][1],
              u[se][2]
            ]), we.set(se, Ee);
          }
          const _e = r.length, Ne = [];
          for (let se = 0; se < _e; se++) {
            const Ee = r[se], He = (u[Ee[0]][0] + u[Ee[1]][0] + u[Ee[2]][0]) / 3, lt = (u[Ee[0]][1] + u[Ee[1]][1] + u[Ee[2]][1]) / 3, ht = He >= -I && He <= H && lt >= 0 && lt <= a, Eo = He >= 0 && He <= n && lt >= a && lt <= a + t, lo = ht || Eo;
            if (Ne.push(!lo), !lo) for (let Vt = 0; Vt < Ee.length; Vt++) {
              const Kt = we.get(Ee[Vt]);
              Kt !== void 0 && (Ee[Vt] = Kt);
            }
          }
          const le = r.length;
          for (let se = 0; se < U.length - 1; se++) {
            const Ee = U[se], He = U[se + 1], lt = we.get(Ee), ht = we.get(He);
            r.push([
              He,
              Ee,
              lt,
              ht
            ]);
          }
          const xe = r.length - le, Me = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map();
          for (let se = 0; se < _e; se++) Ne[se] ? (Me.set(se, i), fe.set(se, i), Oe.set(se, b), et.set(se, M), Le.set(se, 1)) : (Me.set(se, p), fe.set(se, p), Oe.set(se, l), et.set(se, d), Le.set(se, 1));
          for (let se = le; se < r.length; se++) Me.set(se, w), fe.set(se, 0), Oe.set(se, 0), et.set(se, v), Le.set(se, 0);
          T = {
            elasticities: Me,
            elasticitiesOrthogonal: fe,
            thicknesses: Le,
            poissonsRatios: Oe,
            shearModuli: et
          };
          for (let se = 0; se < u.length; se++) {
            const Ee = u[se][0], He = u[se][1];
            Math.abs(He) < 1e-6 ? g.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ee - C) < s * 0.1 && g.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < _e; se++) {
            if (!Ne[se]) continue;
            const Ee = r[se], He = u[Ee[0]], lt = u[Ee[1]], ht = u[Ee[2]], Eo = Math.abs((lt[0] - He[0]) * (ht[1] - He[1]) - (ht[0] - He[0]) * (lt[1] - He[1])) / 2, lo = -m * Eo / 3;
            for (const Vt of Ee) {
              const Kt = $.get(Vt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Kt[1] += lo, $.set(Vt, Kt);
            }
          }
          if (k > 0) {
            const se = [];
            for (let Ee = 0; Ee < u.length; Ee++) {
              const He = u[Ee][0], lt = u[Ee][1];
              Math.abs(lt - P) < s * 0.1 && He > n - 1e-6 && se.push({
                idx: Ee,
                x: He
              });
            }
            se.sort((Ee, He) => Ee.x - He.x);
            for (let Ee = 0; Ee < se.length; Ee++) {
              let He = s;
              Ee > 0 && Ee < se.length - 1 ? He = (se[Ee + 1].x - se[Ee - 1].x) / 2 : Ee === 0 && se.length > 1 ? He = (se[1].x - se[0].x) / 2 : Ee === se.length - 1 && se.length > 1 && (He = (se[Ee].x - se[Ee - 1].x) / 2);
              const lt = -k * He, ht = $.get(se[Ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ht[1] += lt, $.set(se[Ee].idx, ht);
            }
          }
          console.log(`  Interfaz Goodman: ${U.length} nodos interfaz, ${xe} elem interfaz, kn=${w}, ks=${v}`);
        } else {
          const A = [
            [
              -I,
              0,
              0
            ],
            [
              C,
              0,
              0
            ],
            [
              C,
              P,
              0
            ],
            [
              n,
              P,
              0
            ],
            [
              0,
              P,
              0
            ],
            [
              0,
              a,
              0
            ],
            [
              -I,
              a,
              0
            ]
          ], Z = [
            [
              n,
              a,
              0
            ]
          ], Q = Zt({
            points: [
              ...A,
              ...Z
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
          u = Q.nodes, r = Q.elements;
          const ne = (le) => {
            const xe = (u[le[0]][0] + u[le[1]][0] + u[le[2]][0]) / 3, Me = (u[le[0]][1] + u[le[1]][1] + u[le[2]][1]) / 3, fe = xe >= -I && xe <= H && Me >= 0 && Me <= a, Le = xe >= 0 && xe <= n && Me >= a && Me <= a + t;
            return fe || Le;
          }, oe = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), Ne = [];
          for (let le = 0; le < r.length; le++) {
            const xe = ne(r[le]);
            Ne.push(!xe), xe ? (oe.set(le, p), U.set(le, p), we.set(le, l), _e.set(le, d), ae.set(le, 1)) : (oe.set(le, i), U.set(le, i), we.set(le, b), _e.set(le, M), ae.set(le, 1));
          }
          T = {
            elasticities: oe,
            elasticitiesOrthogonal: U,
            thicknesses: ae,
            poissonsRatios: we,
            shearModuli: _e
          };
          for (let le = 0; le < u.length; le++) {
            const xe = u[le][0], Me = u[le][1];
            Math.abs(Me) < 1e-6 ? g.set(le, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(xe - C) < s * 0.1 && g.set(le, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let le = 0; le < r.length; le++) {
            if (!Ne[le]) continue;
            const xe = r[le], Me = u[xe[0]], fe = u[xe[1]], Le = u[xe[2]], Oe = Math.abs((fe[0] - Me[0]) * (Le[1] - Me[1]) - (Le[0] - Me[0]) * (fe[1] - Me[1])) / 2, et = -m * Oe / 3;
            for (const se of xe) {
              const Ee = $.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ee[1] += et, $.set(se, Ee);
            }
          }
          if (k > 0) {
            const le = [];
            for (let xe = 0; xe < u.length; xe++) {
              const Me = u[xe][0], fe = u[xe][1];
              Math.abs(fe - P) < s * 0.1 && Me > n - 1e-6 && le.push({
                idx: xe,
                x: Me
              });
            }
            le.sort((xe, Me) => xe.x - Me.x);
            for (let xe = 0; xe < le.length; xe++) {
              let Me = s;
              xe > 0 && xe < le.length - 1 ? Me = (le[xe + 1].x - le[xe - 1].x) / 2 : xe === 0 && le.length > 1 ? Me = (le[1].x - le[0].x) / 2 : xe === le.length - 1 && le.length > 1 && (Me = (le[xe].x - le[xe - 1].x) / 2);
              const fe = -k * Me, Le = $.get(le[xe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Le[1] += fe, $.set(le[xe].idx, Le);
            }
          }
        }
      }
      if (L === 3) {
        const C = Zt({
          points: y,
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
        u = C.nodes, r = C.elements;
        for (let ne = 0; ne < u.length; ne++) Math.abs(u[ne][1]) < 1e-6 && g.set(ne, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = a + t, A = Math.min(x, t), Z = P - A, Q = [];
        for (let ne = 0; ne < u.length; ne++) {
          const oe = u[ne][0], U = u[ne][1];
          Math.abs(oe - n) < s * 0.6 && U >= a - 1e-6 && Q.push({
            idx: ne,
            y: U
          });
        }
        Q.sort((ne, oe) => ne.y - oe.y);
        for (let ne = 0; ne < Q.length; ne++) {
          const { idx: oe, y: U } = Q[ne], ae = Math.max(0, P - U);
          if (ae <= 0 || U < Z - 1e-6) continue;
          const we = Math.min(ae, A), _e = f * we;
          let Ne = s;
          ne > 0 && ne < Q.length - 1 ? Ne = (Q[ne + 1].y - Q[ne - 1].y) / 2 : ne === 0 && Q.length > 1 ? Ne = (Q[1].y - Q[0].y) / 2 : ne === Q.length - 1 && Q.length > 1 && (Ne = (Q[ne].y - Q[ne - 1].y) / 2);
          const le = _e * Ne;
          Math.abs(le) > 1e-10 && $.set(oe, [
            le,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(r.map((ne, oe) => [
            oe,
            p
          ])),
          elasticitiesOrthogonal: new Map(r.map((ne, oe) => [
            oe,
            p
          ])),
          thicknesses: new Map(r.map((ne, oe) => [
            oe,
            n
          ])),
          poissonsRatios: new Map(r.map((ne, oe) => [
            oe,
            l
          ])),
          shearModuli: new Map(r.map((ne, oe) => [
            oe,
            d
          ]))
        };
      }
      const N = {
        supports: g,
        loads: $
      }, q = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const C = Rt(u, r, N, T), P = r.filter((ae) => ae.length === 3), A = {};
        for (const ae of Object.keys(T)) {
          const we = T[ae];
          if (we && we instanceof Map) {
            const _e = /* @__PURE__ */ new Map();
            let Ne = 0;
            for (let le = 0; le < r.length; le++) r[le].length === 3 && (we.has(le) && _e.set(Ne, we.get(le)), Ne++);
            A[ae] = _e;
          }
        }
        const Z = ko(u, P, A, C), Q = u.map((ae) => [
          ae[0],
          0,
          ae[1]
        ]);
        if (e.nodes.val = Q, e.elements.val = P, C && C.deformations) {
          const ae = /* @__PURE__ */ new Map();
          C.deformations.forEach((we, _e) => {
            ae.set(_e, [
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
        const ne = /* @__PURE__ */ new Map();
        g.forEach((ae, we) => ne.set(we, ae));
        const oe = /* @__PURE__ */ new Map();
        $.forEach((ae, we) => oe.set(we, [
          ae[0],
          ae[2],
          ae[1],
          ae[3],
          ae[5],
          ae[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ne,
          loads: oe
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let U = 0;
        C && C.deformations && C.deformations.forEach((ae) => {
          const we = Math.sqrt(ae[0] * ae[0] + ae[1] * ae[1] + ae[2] * ae[2]);
          U = Math.max(U, we);
        }), console.log(`Muro Contencion [${q[L]}]: ${u.length} nodos, ${r.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${a}, Ka=${c}, gamma=${m}, qs=${k}`), L === 1 && console.log(`  Es=${i}, nus=${b}`), L === 2 && console.log(`  Es=${i}, nus=${b}, kn=${w}, ks=${v}`), L === 3 && console.log(`  gammaW=${f}, Hw=${x}`), console.log(`  max|u| = ${U.toExponential(4)}`);
      } catch (C) {
        console.warn("Muro Contencion failed:", C.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Jn() {
      const t = j("Lx") || 2, o = j("Ly") || 2, n = j("t") || 0.5, a = j("colA") || 0.4, s = j("colH") || 1.5, p = Math.round(j("nx") || 8), l = Math.round(j("ny") || 8), d = j("E") || 25e6, m = j("nu") || 0.2, c = j("P") || -500, i = j("Mx") || 0, b = j("My") || 0, M = j("ks") || 2e4, w = t / p, v = o / l, f = t / 2, x = o / 2, k = a / 2, L = [];
      for (let g = 0; g <= l; g++) for (let $ = 0; $ <= p; $++) {
        const T = g * (p + 1) + $;
        let N = w, q = v;
        ($ === 0 || $ === p) && (N = w / 2), (g === 0 || g === l) && (q = v / 2), L.push({
          node: T,
          dof: 0,
          k: M * N * q
        });
      }
      let I = 0;
      for (let g = 0; g <= l; g++) for (let $ = 0; $ <= p; $++) Math.abs($ * w - f) <= k + 1e-6 && Math.abs(g * v - x) <= k + 1e-6 && I++;
      const H = c / Math.max(I, 1), y = [];
      for (let g = 0; g <= l; g++) for (let $ = 0; $ <= p; $++) {
        const T = $ * w, N = g * v;
        Math.abs(T - f) <= k + 1e-6 && Math.abs(N - x) <= k + 1e-6 && y.push({
          node: g * (p + 1) + $,
          dof: 0,
          value: H
        });
      }
      if (Math.abs(i) > 1e-6) {
        const g = k > 1e-6 ? k : v, $ = i / g;
        for (let T = 0; T <= l; T++) for (let N = 0; N <= p; N++) {
          const q = N * w, C = T * v;
          if (Math.abs(q - f) <= k + 1e-6 && Math.abs(C - x) <= k + 1e-6) {
            const P = C - x;
            if (Math.abs(P) > 1e-6) {
              const A = P > 0 ? 1 : -1;
              y.push({
                node: T * (p + 1) + N,
                dof: 0,
                value: A * $ / I * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const g = k > 1e-6 ? k : w, $ = b / g;
        for (let T = 0; T <= l; T++) for (let N = 0; N <= p; N++) {
          const q = N * w, C = T * v;
          if (Math.abs(q - f) <= k + 1e-6 && Math.abs(C - x) <= k + 1e-6) {
            const P = q - f;
            if (Math.abs(P) > 1e-6) {
              const A = P > 0 ? 1 : -1;
              y.push({
                node: T * (p + 1) + N,
                dof: 0,
                value: A * $ / I * 2
              });
            }
          }
        }
      }
      const r = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${p}x${l} elem`), console.log(`  col=${a}m, P=${c}, Mx=${i}, My=${b}, ks=${M}`);
      try {
        const g = En({
          E: d,
          nu: m,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: p,
          meshNy: l,
          bcType: "none",
          pressure: 0,
          theoryType: r,
          springs: L,
          pointLoads: y
        });
        console.log(`  Solved: w_max = ${g.maxW.toExponential(4)}`);
        const $ = g.nodeResults.map((Z) => [
          Z.x,
          Z.y,
          0
        ]), T = $.length;
        $.push([
          f - k,
          x - k,
          0
        ]), $.push([
          f + k,
          x - k,
          0
        ]), $.push([
          f + k,
          x + k,
          0
        ]), $.push([
          f - k,
          x + k,
          0
        ]), $.push([
          f - k,
          x - k,
          s
        ]), $.push([
          f + k,
          x - k,
          s
        ]), $.push([
          f + k,
          x + k,
          s
        ]), $.push([
          f - k,
          x + k,
          s
        ]);
        const N = g.elementResults.map((Z) => [
          ...Z.nodes
        ]);
        N.push([
          T,
          T + 4
        ]), N.push([
          T + 1,
          T + 5
        ]), N.push([
          T + 2,
          T + 6
        ]), N.push([
          T + 3,
          T + 7
        ]), N.push([
          T + 4,
          T + 5
        ]), N.push([
          T + 5,
          T + 6
        ]), N.push([
          T + 6,
          T + 7
        ]), N.push([
          T + 7,
          T + 4
        ]), N.push([
          T,
          T + 1
        ]), N.push([
          T + 1,
          T + 2
        ]), N.push([
          T + 2,
          T + 3
        ]), N.push([
          T + 3,
          T
        ]), e.nodes.val = $, e.elements.val = N;
        const q = /* @__PURE__ */ new Map();
        g.nodeResults.forEach((Z, Q) => {
          q.set(Q, [
            0,
            0,
            Z.w,
            Z.bx,
            Z.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: q
        });
        const C = /* @__PURE__ */ new Map();
        g.nodeResults.forEach((Z, Q) => {
          const ne = Z.x, oe = Z.y;
          (ne < 1e-6 || ne > t - 1e-6 || oe < 1e-6 || oe > o - 1e-6) && C.set(Q, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const P = /* @__PURE__ */ new Map();
        if (P.set(T + 4, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), P.set(T + 5, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), P.set(T + 6, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), P.set(T + 7, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: C,
          loads: P
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const Z = g.elementResults.length, Q = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
          g.elementResults.forEach((U, ae) => {
            Q.set(ae, [
              U.Mxx,
              U.Mxx,
              U.Mxx
            ]), ne.set(ae, [
              U.Myy,
              U.Myy,
              U.Myy
            ]), oe.set(ae, [
              U.Mxy,
              U.Mxy,
              U.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: Q,
            bendingYY: ne,
            bendingXY: oe
          };
        }
        const A = Qe();
        A && (A.settings.shellResults.val = "bendingXX");
      } catch (g) {
        console.warn("Zapata solver failed:", g.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Vn() {
      const t = j("Lx") || 0.4, o = j("Ly") || 0.4, n = j("t") || 0.025, a = j("dBolt") || 0.022, s = j("sx") || 0.28, p = j("sy") || 0.28, l = j("colA") || 0.2, d = j("meshSize") || 8e-3, m = j("E") || 2e8, c = j("nu") || 0.3, i = m / (2 * (1 + c)), b = j("P") || -200, M = Math.round(j("nBolts") || 4), w = t / 2, v = o / 2, f = a / 2, x = l / 2, k = [];
      M >= 4 && (k.push([
        w - s / 2,
        v - p / 2
      ]), k.push([
        w + s / 2,
        v - p / 2
      ]), k.push([
        w + s / 2,
        v + p / 2
      ]), k.push([
        w - s / 2,
        v + p / 2
      ])), M >= 6 && (k.push([
        w,
        v - p / 2
      ]), k.push([
        w,
        v + p / 2
      ])), M >= 8 && (k.push([
        w - s / 2,
        v
      ]), k.push([
        w + s / 2,
        v
      ]));
      const { nodes: L, elements: I } = Zt({
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
        maxMeshSize: d
      }), H = (q, C) => {
        for (const [P, A] of k) if ((q - P) * (q - P) + (C - A) * (C - A) < f * f) return true;
        return false;
      }, y = I.filter((q) => {
        const C = (L[q[0]][0] + L[q[1]][0] + L[q[2]][0]) / 3, P = (L[q[0]][1] + L[q[1]][1] + L[q[2]][1]) / 3;
        return !H(C, P);
      }), u = L, r = /* @__PURE__ */ new Map();
      for (let q = 0; q < u.length; q++) {
        const C = u[q][0], P = u[q][1];
        for (const [A, Z] of k) {
          const Q = Math.sqrt((C - A) * (C - A) + (P - Z) * (P - Z));
          Q >= f * 0.7 && Q <= f * 1.5 && r.set(q, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const g = /* @__PURE__ */ new Map();
      let $ = 0;
      for (let q = 0; q < u.length; q++) {
        const C = u[q][0], P = u[q][1];
        Math.abs(C - w) <= x && Math.abs(P - v) <= x && $++;
      }
      const T = b / Math.max($, 1);
      for (let q = 0; q < u.length; q++) {
        const C = u[q][0], P = u[q][1];
        if (Math.abs(C - w) <= x && Math.abs(P - v) <= x) {
          const A = g.get(q) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          A[2] += T, g.set(q, A);
        }
      }
      const N = {
        elasticities: new Map(y.map((q, C) => [
          C,
          m
        ])),
        elasticitiesOrthogonal: new Map(y.map((q, C) => [
          C,
          m
        ])),
        thicknesses: new Map(y.map((q, C) => [
          C,
          n
        ])),
        poissonsRatios: new Map(y.map((q, C) => [
          C,
          c
        ])),
        shearModuli: new Map(y.map((q, C) => [
          C,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${M} pernos d=${a * 1e3}mm`), console.log(`  P=${b} kN, col=${l * 1e3}mm, mesh=${d * 1e3}mm`), console.log(`  ${y.length} triangulos, ${u.length} nodos`);
      try {
        const q = Rt(u, y, {
          supports: r,
          loads: g
        }, N), C = ko(u, y, N, q);
        e.nodes.val = u, e.elements.val = y, q && e.deformOutputs && (e.deformOutputs.val = q), e.nodeInputs && (e.nodeInputs.val = {
          supports: r,
          loads: g
        }), e.elementInputs && (e.elementInputs.val = {}), C && e.analyzeOutputs && (e.analyzeOutputs.val = C);
        let P = 0;
        q && q.deformations && q.deformations.forEach((A) => {
          const Z = Math.sqrt(A[0] * A[0] + A[1] * A[1] + A[2] * A[2]);
          P = Math.max(P, Z);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (q) {
        console.warn("Placa Base failed:", q.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Xn() {
      const t = j("colB") || 0.3, o = j("colH") || 0.3, n = j("colT") || 8e-3, a = j("colLen") || 1.5, s = j("Lx") || 0.45, p = j("Ly") || 0.45, l = j("tPlaca") || 0.025, d = j("dBolt") || 0.022, m = j("sx") || 0.32, c = j("sy") || 0.32, i = Math.round(j("nSubColV") || 6), b = Math.round(j("nSubColH") || 4), M = Math.round(j("nSubPlaca") || 10), w = j("E") || 2e8, v = j("nu") || 0.3, f = w / (2 * (1 + v)), x = j("P") || -300, k = s / 2, L = p / 2, I = d / 2, H = t / 2, y = o / 2, u = [], r = [], g = M, $ = s / g, T = p / g, N = (fe, Le) => Le * (g + 1) + fe;
      for (let fe = 0; fe <= g; fe++) for (let Le = 0; Le <= g; Le++) u.push([
        Le * $,
        fe * T,
        0
      ]);
      const q = [
        [
          k - m / 2,
          L - c / 2
        ],
        [
          k + m / 2,
          L - c / 2
        ],
        [
          k + m / 2,
          L + c / 2
        ],
        [
          k - m / 2,
          L + c / 2
        ]
      ], C = (fe, Le) => {
        for (const [Oe, et] of q) if ((fe - Oe) * (fe - Oe) + (Le - et) * (Le - et) < I * I) return true;
        return false;
      }, P = r.length;
      for (let fe = 0; fe < g; fe++) for (let Le = 0; Le < g; Le++) {
        const Oe = (Le + 0.5) * $, et = (fe + 0.5) * T;
        C(Oe, et) || r.push([
          N(Le, fe),
          N(Le + 1, fe),
          N(Le + 1, fe + 1),
          N(Le, fe + 1)
        ]);
      }
      const A = r.length - P, Z = i, Q = b, ne = [
        [
          k - H,
          L - y
        ],
        [
          k + H,
          L - y
        ],
        [
          k + H,
          L + y
        ],
        [
          k - H,
          L + y
        ]
      ], oe = r.length, U = [
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
      ], ae = (fe, Le) => {
        for (let Oe = 0; Oe < (g + 1) * (g + 1); Oe++) if (Math.abs(u[Oe][0] - fe) < $ * 0.3 && Math.abs(u[Oe][1] - Le) < T * 0.3 && Math.abs(u[Oe][2]) < 1e-6) return Oe;
        return -1;
      };
      for (const [fe, Le] of U) {
        const [Oe, et] = ne[fe], [se, Ee] = ne[Le], He = [];
        for (let lt = 0; lt <= Z; lt++) {
          const ht = [], Eo = lt / Z * a;
          for (let lo = 0; lo <= Q; lo++) {
            const Vt = lo / Q, Kt = Oe + Vt * (se - Oe), Mn = et + Vt * (Ee - et);
            if (lt === 0) {
              const Ut = ae(Kt, Mn);
              if (Ut >= 0) {
                ht.push(Ut);
                continue;
              }
            }
            let Sn = -1;
            for (let Ut = 0; Ut < u.length; Ut++) if (Math.abs(u[Ut][0] - Kt) < 1e-6 && Math.abs(u[Ut][1] - Mn) < 1e-6 && Math.abs(u[Ut][2] - Eo) < 1e-6) {
              Sn = Ut;
              break;
            }
            Sn >= 0 ? ht.push(Sn) : (ht.push(u.length), u.push([
              Kt,
              Mn,
              Eo
            ]));
          }
          He.push(ht);
        }
        for (let lt = 0; lt < Z; lt++) for (let ht = 0; ht < Q; ht++) r.push([
          He[lt][ht],
          He[lt][ht + 1],
          He[lt + 1][ht + 1],
          He[lt + 1][ht]
        ]);
      }
      const we = r.length - oe, _e = /* @__PURE__ */ new Map();
      for (let fe = 0; fe < (g + 1) * (g + 1); fe++) {
        const Le = u[fe][0], Oe = u[fe][1];
        for (const [et, se] of q) {
          const Ee = Math.sqrt((Le - et) * (Le - et) + (Oe - se) * (Oe - se));
          Ee >= I * 0.5 && Ee <= I * 2 && _e.set(fe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Ne = /* @__PURE__ */ new Map(), le = [];
      for (let fe = 0; fe < u.length; fe++) Math.abs(u[fe][2] - a) < 1e-6 && le.push(fe);
      const xe = x / Math.max(le.length, 1);
      for (const fe of le) Ne.set(fe, [
        0,
        0,
        xe,
        0,
        0,
        0
      ]);
      const Me = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let fe = P; fe < P + A; fe++) Me.elasticities.set(fe, w), Me.poissonsRatios.set(fe, v), Me.thicknesses.set(fe, l), Me.shearModuli.set(fe, f);
      for (let fe = oe; fe < oe + we; fe++) Me.elasticities.set(fe, w), Me.poissonsRatios.set(fe, v), Me.thicknesses.set(fe, n), Me.shearModuli.set(fe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${a}m`), console.log(`  Placa ${s * 1e3}x${p * 1e3}mm, t=${l * 1e3}mm, 4 pernos d=${d * 1e3}mm`), console.log(`  ${A} Q4 placa + ${we} Q4 columna = ${r.length} total`), console.log(`  ${u.length} nodos, P=${x} kN`);
      try {
        const fe = Rt(u, r, {
          supports: _e,
          loads: Ne
        }, Me), Le = ko(u, r, Me, fe);
        e.nodes.val = u, e.elements.val = r, fe && e.deformOutputs && (e.deformOutputs.val = fe), e.nodeInputs && (e.nodeInputs.val = {
          supports: _e,
          loads: Ne
        }), e.elementInputs && (e.elementInputs.val = Me), Le && e.analyzeOutputs && (e.analyzeOutputs.val = Le);
        let Oe = 0;
        (fe == null ? void 0 : fe.deformations) && fe.deformations.forEach((et) => {
          const se = Math.sqrt(et[0] * et[0] + et[1] * et[1] + et[2] * et[2]);
          Oe = Math.max(Oe, se);
        }), console.log(`  max|u| = ${Oe.toExponential(4)}`);
      } catch (fe) {
        console.warn("Col+Placa failed:", fe.message), e.nodes.val = u, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: _e,
          loads: Ne
        });
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Kn() {
      const t = j("H") || 6, o = j("angle") || 45, n = j("bTop") || 3, a = j("bBot") || 3, s = j("meshSize") || 2, p = j("E") || 5e4, l = j("nu") || 0.3, d = j("gamma") || 18, m = j("c") || 15, c = j("phi") || 30, i = j("qs") || 0, b = t / Math.tan(o * Math.PI / 180), M = a + b + n, w = t, v = [
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
          a + b,
          t,
          0
        ],
        [
          a,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ], { nodes: f, elements: x } = Zt({
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
      }), k = f, L = [], I = /* @__PURE__ */ new Map();
      for (let y = 0; y < k.length; y++) {
        const u = k[y][0], r = k[y][1];
        Math.abs(r + w) < 1e-6 ? (L.push({
          node: y,
          fixX: true,
          fixY: true
        }), I.set(y, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(u) < 1e-6 || Math.abs(u - M) < 1e-6) && (L.push({
          node: y,
          fixX: true,
          fixY: false
        }), I.set(y, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const H = t - s * 0.3;
      try {
        const y = k.map((C) => [
          C[0],
          C[1]
        ]), u = x.map((C) => [
          C[0],
          C[1],
          C[2]
        ]), r = ea({
          nodes: y,
          elements: u,
          E: p,
          nu: l,
          gamma: d,
          c: m,
          phi: c,
          thickness: 1,
          supports: L,
          surcharge: i,
          surfaceYThreshold: H
        }), g = k.map((C) => [
          C[0],
          0,
          C[1]
        ]);
        e.nodes.val = g, e.elements.val = x;
        const $ = /* @__PURE__ */ new Map();
        for (let C = 0; C < r.displacements.length; C++) {
          const [P, A] = r.displacements[C];
          $.set(C, [
            P,
            0,
            A,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: $
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: I
        }), e.elementInputs && (e.elementInputs.val = {});
        const T = /* @__PURE__ */ new Map();
        for (let C = 0; C < r.plasticStrain.length; C++) {
          const P = r.plasticStrain[C];
          T.set(C, [
            P,
            P,
            P
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: T
        });
        let N = 0;
        for (const [C, P] of r.displacements) {
          const A = Math.sqrt(C * C + P * P);
          N = Math.max(N, A);
        }
        let q = 0;
        for (const C of r.plasticStrain) q = Math.max(q, C);
        console.log(`Talud SRM: ${k.length} nodos, ${x.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${m} kPa, \u03C6=${c}\xB0, \u03B3=${d}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${r.fos.toFixed(3)}`), console.log(`  max|u| = ${N.toExponential(4)}`), console.log(`  max \u03B5_pl = ${q.toExponential(4)}`), r.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : r.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (y) {
        console.warn("Talud SRM failed:", y.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    let jt = null, ut = null, Xt = null;
    function Es() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let a = document.getElementById("luces-panel");
          a || (a = document.createElement("div"), a.id = "luces-panel", a.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const s = o.parentElement;
          s.removeChild(o), n.appendChild(t), n.appendChild(a), n.appendChild(o), s.appendChild(n);
        }
        n ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function it(t) {
      const o = zo.find((n) => n.id === O);
      return t / o.toM;
    }
    function rt(t) {
      const o = zo.find((n) => n.id === O);
      return t * o.toM;
    }
    function po(t) {
      const o = Cn.find((a) => a.id === W.forceId), n = zo.find((a) => a.id === W.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function nn(t) {
      const o = Cn.find((a) => a.id === W.forceId), n = zo.find((a) => a.id === W.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function sn() {
      return W.label;
    }
    function ks() {
      switch (zo.find((o) => o.id === O).id) {
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
    function Is() {
      const t = po(20594), o = po(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Un(t, o, n, a, s) {
      const p = ke.steelVigaType, l = p === 0 ? Go() : Jo();
      if (ke.vigaMat === 0) {
        for (let d = 0; d < o.length; d++) {
          const m = o[d], c = `b${n}${d}`, i = `h${n}${d}`, b = {};
          b[c] = +it(m.b).toFixed(2), b[i] = +it(m.h).toFixed(2), t.addBinding(b, c, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `b sv${n}${d + 1}`
          }), t.addBinding(b, i, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `h sv${n}${d + 1}`
          });
        }
        t.on("change", (d) => {
          var _a2;
          const m = (_a2 = d.target) == null ? void 0 : _a2.key, c = m == null ? void 0 : m.match(new RegExp(`^b${n}(\\d+)$`)), i = m == null ? void 0 : m.match(new RegExp(`^h${n}(\\d+)$`));
          c && (o[parseInt(c[1])].b = rt(d.value), be()), i && (o[parseInt(i[1])].h = rt(d.value), be());
        });
      } else if (p <= 1) {
        for (let d = 0; d < o.length; d++) {
          const m = {};
          m[`p${n}${d}`] = o[d].profileIdx ?? 0, t.addBinding(m, `p${n}${d}`, {
            label: `sv${n}${d + 1}`,
            options: l
          });
        }
        t.on("change", (d) => {
          var _a2, _b;
          const c = (_b = (_a2 = d.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          c && (o[parseInt(c[1])].profileIdx = d.value, be());
        });
      } else if (p === 2) {
        for (let d = 0; d < o.length; d++) {
          const m = o[d], c = {}, i = `${n}${d}`;
          c[`bf${i}`] = +it(m.bf ?? 0.2).toFixed(3), c[`h${i}`] = +it(m.hf ?? 0.4).toFixed(3), c[`tf${i}`] = +it(m.tf ?? 0.015).toFixed(3), c[`tw${i}`] = +it(m.tw ?? 0.01).toFixed(3), t.addBinding(c, `bf${i}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `bf sv${n}${d + 1}`
          }), t.addBinding(c, `h${i}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `h sv${n}${d + 1}`
          }), t.addBinding(c, `tf${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${d + 1}`
          }), t.addBinding(c, `tw${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${d + 1}`
          });
        }
        t.on("change", (d) => {
          var _a2;
          const m = (_a2 = d.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const i = `${n}${c}`;
            m === `bf${i}` && (o[c].bf = rt(d.value), be()), m === `h${i}` && (o[c].hf = rt(d.value), be()), m === `tf${i}` && (o[c].tf = rt(d.value), be()), m === `tw${i}` && (o[c].tw = rt(d.value), be());
          }
        });
      } else {
        for (let d = 0; d < o.length; d++) {
          const m = o[d], c = {}, i = `${n}${d}`;
          c[`bc${i}`] = +it(m.bc ?? 0.2).toFixed(3), c[`hc${i}`] = +it(m.hc ?? 0.3).toFixed(3), c[`t${i}`] = +it(m.t ?? 8e-3).toFixed(3), t.addBinding(c, `bc${i}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `b sv${n}${d + 1}`
          }), t.addBinding(c, `hc${i}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `h sv${n}${d + 1}`
          }), t.addBinding(c, `t${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${d + 1}`
          });
        }
        t.on("change", (d) => {
          var _a2;
          const m = (_a2 = d.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const i = `${n}${c}`;
            m === `bc${i}` && (o[c].bc = rt(d.value), be()), m === `hc${i}` && (o[c].hc = rt(d.value), be()), m === `t${i}` && (o[c].t = rt(d.value), be());
          }
        });
      }
    }
    function vo() {
      var _a2;
      if (ut) {
        try {
          ut.dispose();
        } catch {
        }
        ut = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), E !== "edificio" && E !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Es();
      if (!o) return;
      o.style.display = "";
      const n = S, a = Math.round(((_a2 = V.nPisos) == null ? void 0 : _a2.val) ?? 3), s = ks(), p = Is(), l = X.length || 1, d = ee.length || 1;
      for (; ke.perFloor.length < a; ) {
        const u = ke.perFloor.length > 0 ? JSON.parse(JSON.stringify(ke.perFloor[ke.perFloor.length - 1])) : wt(l, d);
        ke.perFloor.push(u);
      }
      ke.perFloor.length > a && (ke.perFloor.length = a);
      for (const u of ke.perFloor) {
        for (; u.vigasX.length < l; ) u.vigasX.push(u.vigasX.length > 0 ? {
          ...u.vigasX[u.vigasX.length - 1]
        } : It());
        for (u.vigasX.length > l && (u.vigasX.length = l); u.vigasY.length < d; ) u.vigasY.push(u.vigasY.length > 0 ? {
          ...u.vigasY[u.vigasY.length - 1]
        } : It());
        u.vigasY.length > d && (u.vigasY.length = d);
      }
      ut = new Ho({
        title: `Sections (${n.label})`,
        container: o
      });
      const m = {
        colMat: ke.colMat
      };
      if (ut.addBinding(m, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (u) => {
        ke.colMat = u.value, vo(), be();
      }), ke.colMat === 0) {
        const u = {
          forma: ke.colShape
        };
        ut.addBinding(u, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (g) => {
          ke.colShape = g.value, vo(), be();
        });
        const r = {
          fc: +po(ke.fc).toFixed(1)
        };
        ut.addBinding(r, "fc", {
          min: p[0],
          max: p[1],
          step: p[2],
          label: `f'c col (${sn()})`
        }), ut.on("change", (g) => {
          var _a3;
          ((_a3 = g.target) == null ? void 0 : _a3.key) === "fc" && (ke.fc = nn(g.value), be());
        });
      } else if (ke.colMat === 1) {
        const u = {
          colType: ke.steelColType
        };
        ut.addBinding(u, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (r) => {
          ke.steelColType = r.value, vo(), be();
        });
      }
      ut.addBlade({
        view: "separator"
      });
      const c = {
        vigaMat: ke.vigaMat
      };
      if (ut.addBinding(c, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (u) => {
        ke.vigaMat = u.value, vo(), be();
      }), ke.vigaMat === 1) {
        const u = {
          vigaType: ke.steelVigaType
        };
        ut.addBinding(u, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (r) => {
          ke.steelVigaType = r.value, vo(), be();
        });
      }
      const i = ke.steelColType === 0 ? Go() : Jo();
      ke.steelVigaType === 0 ? Go() : Jo();
      const b = O === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : O === "cm" ? [
        0.5,
        10,
        0.1
      ] : O === "mm" ? [
        5,
        100,
        1
      ] : O === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let u = 0; u < a; u++) {
        const r = ke.perFloor[u], g = ut.addFolder({
          title: `Piso ${u + 1}`,
          expanded: u < 2
        });
        if (ke.colMat === 0) if (ke.colShape === 1) {
          const $ = {
            dCol: +it(r.dCol).toFixed(2)
          };
          g.addBinding($, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), g.on("change", (T) => {
            var _a3;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "dCol" && (r.dCol = rt(T.value), be());
          });
        } else {
          const $ = {
            bCol: +it(r.bCol).toFixed(2),
            hCol: +it(r.hCol).toFixed(2)
          };
          g.addBinding($, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), g.addBinding($, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), g.on("change", (T) => {
            var _a3, _b;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bCol" && (r.bCol = rt(T.value), be()), ((_b = T.target) == null ? void 0 : _b.key) === "hCol" && (r.hCol = rt(T.value), be());
          });
        }
        else if (ke.colMat === 1) if (ke.steelColType <= 1) {
          const $ = {
            col: r.colProfileIdx
          };
          g.addBinding($, "col", {
            label: "Columna",
            options: i
          }).on("change", (T) => {
            r.colProfileIdx = T.value, be();
          });
        } else if (ke.steelColType === 2) {
          const $ = {
            bf: +it(r.colBf ?? 0.3).toFixed(3),
            h: +it(r.colHf ?? 0.3).toFixed(3),
            tf: +it(r.colTf ?? 0.02).toFixed(3),
            tw: +it(r.colTw ?? 0.012).toFixed(3)
          };
          g.addBinding($, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), g.addBinding($, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), g.addBinding($, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), g.addBinding($, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), g.on("change", (T) => {
            var _a3, _b, _c, _d;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bf" && (r.colBf = rt(T.value), be()), ((_b = T.target) == null ? void 0 : _b.key) === "h" && (r.colHf = rt(T.value), be()), ((_c = T.target) == null ? void 0 : _c.key) === "tf" && (r.colTf = rt(T.value), be()), ((_d = T.target) == null ? void 0 : _d.key) === "tw" && (r.colTw = rt(T.value), be());
          });
        } else {
          const $ = {
            bc: +it(r.colBc ?? 0.3).toFixed(3),
            hc: +it(r.colHc ?? 0.3).toFixed(3),
            t: +it(r.colT ?? 0.01).toFixed(3)
          };
          g.addBinding($, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), g.addBinding($, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), g.addBinding($, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), g.on("change", (T) => {
            var _a3, _b, _c;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bc" && (r.colBc = rt(T.value), be()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (r.colHc = rt(T.value), be()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (r.colT = rt(T.value), be());
          });
        }
        else {
          const $ = {
            bc: +it(r.colBc ?? 0.3).toFixed(3),
            hc: +it(r.colHc ?? 0.3).toFixed(3),
            t: +it(r.colT ?? 0.01).toFixed(3),
            Es: +po(r.colEs ?? 2e8).toFixed(0),
            nuS: r.colNuS ?? 0.3,
            fc: +po(r.colFc ?? 28e3).toFixed(1),
            nuC: r.colNuC ?? 0.2
          };
          g.addBinding($, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), g.addBinding($, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), g.addBinding($, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), g.addBlade({
            view: "separator"
          });
          const T = +po(1e8).toFixed(0), N = +po(3e8).toFixed(0), q = Math.max(1, Math.round((N - T) / 200));
          g.addBinding($, "Es", {
            min: T,
            max: N,
            step: q,
            label: `Es (${sn()})`
          }), g.addBinding($, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), g.addBinding($, "fc", {
            min: p[0],
            max: p[1],
            step: p[2],
            label: `f'c (${sn()})`
          }), g.addBinding($, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), g.on("change", (C) => {
            var _a3, _b, _c, _d, _e, _f, _g;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bc" && (r.colBc = rt(C.value), be()), ((_b = C.target) == null ? void 0 : _b.key) === "hc" && (r.colHc = rt(C.value), be()), ((_c = C.target) == null ? void 0 : _c.key) === "t" && (r.colT = rt(C.value), be()), ((_d = C.target) == null ? void 0 : _d.key) === "Es" && (r.colEs = nn(C.value), be()), ((_e = C.target) == null ? void 0 : _e.key) === "nuS" && (r.colNuS = C.value, be()), ((_f = C.target) == null ? void 0 : _f.key) === "fc" && (r.colFc = nn(C.value), be()), ((_g = C.target) == null ? void 0 : _g.key) === "nuC" && (r.colNuC = C.value, be());
          });
        }
        if (r.vigasX.length > 0) {
          const $ = g.addFolder({
            title: `Vigas X (${r.vigasX.length})`,
            expanded: false
          });
          Un($, r.vigasX, "x", s, b);
        }
        if (r.vigasY.length > 0) {
          const $ = g.addFolder({
            title: `Vigas Y (${r.vigasY.length})`,
            expanded: false
          });
          Un($, r.vigasY, "y", s, b);
        }
      }
      ut.addBlade({
        view: "separator"
      });
      const M = ut.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Ae,
        direccion: dt === "x" ? 0 : 1,
        cantidad: Ue
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
      }), M.on("change", (u) => {
        var _a3, _b, _c;
        ((_a3 = u.target) == null ? void 0 : _a3.key) === "activar" && (Ae = u.value, be()), ((_b = u.target) == null ? void 0 : _b.key) === "direccion" && (dt = u.value === 0 ? "x" : "y", be()), ((_c = u.target) == null ? void 0 : _c.key) === "cantidad" && (Ue = Math.round(u.value), be());
      }), ut.addBlade({
        view: "separator"
      });
      const v = ut.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: ft,
        espesor: +it($t).toFixed(3),
        subdivX: Ft,
        subdivY: Nt
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
      }), v.on("change", (u) => {
        var _a3, _b, _c, _d;
        ((_a3 = u.target) == null ? void 0 : _a3.key) === "activar" && (ft = u.value, be()), ((_b = u.target) == null ? void 0 : _b.key) === "espesor" && ($t = rt(u.value), be()), ((_c = u.target) == null ? void 0 : _c.key) === "subdivX" && (Ft = Math.round(u.value), be()), ((_d = u.target) == null ? void 0 : _d.key) === "subdivY" && (Nt = Math.round(u.value), be());
      }), ut.addBlade({
        view: "separator"
      });
      const x = ut.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), k = {
        espesor: +it(Ke).toFixed(3),
        subdivH: ge,
        subdivW: Fe
      };
      x.addBinding(k, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), x.addBinding(k, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), x.addBinding(k, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), x.on("change", (u) => {
        var _a3, _b, _c;
        ((_a3 = u.target) == null ? void 0 : _a3.key) === "espesor" && (Ke = rt(u.value), be()), ((_b = u.target) == null ? void 0 : _b.key) === "subdivH" && (ge = Math.round(u.value), be()), ((_c = u.target) == null ? void 0 : _c.key) === "subdivW" && (Fe = Math.round(u.value), be());
      });
      const L = X.length || 1, I = ee.length || 1, H = L + 1, y = I + 1;
      if (L > 0) {
        const u = x.addFolder({
          title: `Muros dir X (${L} vanos)`,
          expanded: false
        });
        for (let r = 0; r < L; r++) for (let g = 0; g < y; g++) {
          const $ = `wx_${r}_${g}`, T = Be.some((C) => C.dir === "x" && C.bay === r && C.axisIdx === g), N = {};
          N[$] = T;
          const q = `Vano X${r + 1} / Eje Y${String.fromCharCode(65 + g)}`;
          u.addBinding(N, $, {
            label: q
          }).on("change", (C) => {
            C.value ? Be.push({
              dir: "x",
              bay: r,
              axisIdx: g,
              floors: [
                -1
              ]
            }) : Be = Be.filter((P) => !(P.dir === "x" && P.bay === r && P.axisIdx === g)), be();
          });
        }
      }
      if (I > 0) {
        const u = x.addFolder({
          title: `Muros dir Y (${I} vanos)`,
          expanded: false
        });
        for (let r = 0; r < I; r++) for (let g = 0; g < H; g++) {
          const $ = `wy_${r}_${g}`, T = Be.some((C) => C.dir === "y" && C.bay === r && C.axisIdx === g), N = {};
          N[$] = T;
          const q = `Vano Y${r + 1} / Eje X${g + 1}`;
          u.addBinding(N, $, {
            label: q
          }).on("change", (C) => {
            C.value ? Be.push({
              dir: "y",
              bay: r,
              axisIdx: g,
              floors: [
                -1
              ]
            }) : Be = Be.filter((P) => !(P.dir === "y" && P.bay === r && P.axisIdx === g)), be();
          });
        }
      }
      if (Be.length > 0) {
        x.addBlade({
          view: "separator"
        });
        const u = {
          muros: `${Be.length} ubicaciones`
        };
        x.addBinding(u, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Wt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ie || (ie = t.innerHTML), me) {
        try {
          me.dispose();
        } catch {
        }
        me = null;
      }
      if (jt) {
        try {
          jt.dispose();
        } catch {
        }
        jt = null;
      }
      t.innerHTML = "";
      const o = E.charAt(0).toUpperCase() + E.slice(1);
      me = new Ho({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Nn()[E];
      if (n) {
        const s = {};
        for (const l of n) s[l.key] = V[l.key].val;
        for (const l of n) me.addBinding(s, l.key, {
          min: V[l.key].min,
          max: V[l.key].max,
          step: V[l.key].step,
          label: V[l.key].label
        });
        const p = me.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const l of n) {
          const d = {
            min: V[l.key].min,
            max: V[l.key].max
          };
          p.addBinding(d, "min", {
            label: `${l.key} min`,
            step: l.step
          }), p.addBinding(d, "max", {
            label: `${l.key} max`,
            step: l.step
          }), p.on("change", () => {
            V[l.key] && (V[l.key].min = d.min, V[l.key].max = d.max, V[l.key].val < d.min && (V[l.key].val = d.min), V[l.key].val > d.max && (V[l.key].val = d.max)), Wt(), be();
          });
        }
        me.on("change", (l) => {
          var _a2;
          const d = (_a2 = l.target) == null ? void 0 : _a2.key;
          if (d && V[d]) {
            if (V[d].val = l.value, E === "edificio" && (d === "nVanosX" || d === "nVanosY" || d === "nPisos")) {
              if (d === "nVanosX" || d === "nVanosY") {
                const m = Math.round(V.nVanosX.val), c = Math.round(V.nVanosY.val);
                for (; X.length < m; ) X.push(X[X.length - 1] ?? S.defaultSpan);
                for (X.length > m && (X.length = m); ee.length < c; ) ee.push(ee[ee.length - 1] ?? S.defaultSpan * 0.8);
                ee.length > c && (ee.length = c);
              }
              Wt();
            }
            be();
          }
        });
      }
      if (E === "edificio") {
        if (Xt) {
          try {
            Xt.dispose();
          } catch {
          }
          Xt = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const p = S;
          Xt = new Ho({
            title: `Luces (${p.length})`,
            container: s
          });
          const l = Xt.addFolder({
            title: "Luces X",
            expanded: true
          }), d = {};
          for (let i = 0; i < X.length; i++) d[`svx_${i + 1}`] = X[i];
          for (let i = 0; i < X.length; i++) l.addBinding(d, `svx_${i + 1}`, {
            min: p.spanRange[0],
            max: p.spanRange[1],
            step: p.spanRange[2],
            label: `svx${i + 1}`
          });
          l.on("change", (i) => {
            var _a2, _b;
            const M = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            M && (X[parseInt(M[1]) - 1] = i.value, be());
          });
          const m = Xt.addFolder({
            title: "Luces Y",
            expanded: true
          }), c = {};
          for (let i = 0; i < ee.length; i++) c[`svy_${i + 1}`] = ee[i];
          for (let i = 0; i < ee.length; i++) m.addBinding(c, `svy_${i + 1}`, {
            min: p.spanRange[0],
            max: p.spanRange[1],
            step: p.spanRange[2],
            label: `svy${i + 1}`
          });
          m.on("change", (i) => {
            var _a2, _b;
            const M = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            M && (ee[parseInt(M[1]) - 1] = i.value, be());
          });
        }
      }
      if (vo(), me) {
        me.addBlade({
          view: "separator"
        });
        const s = Yo()[E];
        if (s && s.length > 0) {
          const p = {};
          s.forEach((d, m) => {
            p[d.label] = m;
          });
          const l = {
            apoyo: xt
          };
          me.addBinding(l, "apoyo", {
            label: "Apoyo",
            options: p
          }).on("change", (d) => {
            xt = d.value, be();
          });
        }
        if (E === "placa-3q" || E === "placa-q4") {
          const p = {
            teoria: pt
          };
          me.addBinding(p, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (l) => {
            pt = l.value, be();
          });
        }
      }
      const a = On()[E];
      if (a && a.length > 0) {
        jt = new Ho({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const l of a) s[l.key] = Ze[l.key].val;
        for (const l of a) jt.addBinding(s, l.key, {
          min: Ze[l.key].min,
          max: Ze[l.key].max,
          step: Ze[l.key].step,
          label: Ze[l.key].label
        });
        const p = jt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const l of a) {
          const d = {
            min: Ze[l.key].min,
            max: Ze[l.key].max
          };
          p.addBinding(d, "min", {
            label: `${l.key} min`,
            step: l.step
          }), p.addBinding(d, "max", {
            label: `${l.key} max`,
            step: l.step
          }), p.on("change", () => {
            Ze[l.key] && (Ze[l.key].min = d.min, Ze[l.key].max = d.max, Ze[l.key].val < d.min && (Ze[l.key].val = d.min), Ze[l.key].val > d.max && (Ze[l.key].val = d.max)), Wt(), be();
          });
        }
        jt.on("change", (l) => {
          var _a2;
          const d = (_a2 = l.target) == null ? void 0 : _a2.key;
          if (d && Ze[d]) {
            if (Ze[d].val = l.value, e.nodeInputs) {
              const m = e.nodeInputs.val;
              m.supports && (e.nodeInputs.val = {
                supports: m.supports
              });
            }
            setTimeout(() => rn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, p) => {
          if (V[s]) V[s].val = p, be(), Wt();
          else if (Ze[s]) {
            if (Ze[s].val = p, e.nodeInputs) {
              const l = e.nodeInputs.val;
              l.supports && (e.nodeInputs.val = {
                supports: l.supports
              });
            }
            setTimeout(() => {
              rn(), Wt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const p in V) s[p] = V[p].val;
          for (const p in Ze) s[p] = Ze[p].val;
          return s;
        },
        setGenerator: Ve
      };
    }
    function zs() {
      if (me) {
        try {
          me.dispose();
        } catch {
        }
        me = null;
      }
      if (jt) {
        try {
          jt.dispose();
        } catch {
        }
        jt = null;
      }
      if (ut) {
        try {
          ut.dispose();
        } catch {
        }
        ut = null;
      }
      if (Xt) {
        try {
          Xt.dispose();
        } catch {
        }
        Xt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ie && (n.innerHTML = ie);
    }
    const he = document.createElement("div");
    he.id = "cad3d-panel";
    const Zn = document.createElement("style");
    Zn.textContent = `
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
  `, document.head.appendChild(Zn), oa() === "light" && document.documentElement.classList.add("awatif-light"), na((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), E && yt(true);
    }), he.innerHTML = `
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
    let mt = null;
    function Ls() {
      var _a2, _b, _c, _d, _e, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, a = (_b = e.elementInputs) == null ? void 0 : _b.val, s = O, p = h, l = [];
      if (l.push("# Awatif FEM \u2014 Model Export"), l.push(`# Generator: ${E || "custom"}`), l.push(`# Units: ${p}, ${s}`), l.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), l.push(""), l.push(`## NODES (${t.length})`), l.push("# idx     X          Y          Z"), t.forEach((c, i) => {
        l.push(`  ${String(i).padStart(4)}  ${c[0].toFixed(4).padStart(10)}  ${c[1].toFixed(4).padStart(10)}  ${c[2].toFixed(4).padStart(10)}`);
      }), l.push(""), l.push(`## ELEMENTS (${o.length})`), l.push("# idx    nodeI  nodeJ"), o.forEach((c, i) => {
        const b = c.map((M) => String(M).padStart(6)).join("");
        l.push(`  ${String(i).padStart(4)}  ${b}`);
      }), l.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (l.push(`## SUPPORTS (${n.supports.size})`), l.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((c, i) => {
        const b = c.map((M) => M ? "  1" : "  0").join("");
        l.push(`  ${String(i).padStart(4)} ${b}`);
      }), l.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (l.push(`## LOADS (${n.loads.size})`), l.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((c, i) => {
        const b = c.map((M) => M.toFixed(3).padStart(11)).join(" ");
        l.push(`  ${String(i).padStart(4)}  ${b}`);
      }), l.push("")), a) {
        l.push("## ELEMENT PROPERTIES");
        const c = [
          {
            name: "E",
            map: a.elasticities
          },
          {
            name: "A",
            map: a.areas
          },
          {
            name: "Iz",
            map: a.momentsOfInertiaZ
          },
          {
            name: "Iy",
            map: a.momentsOfInertiaY
          },
          {
            name: "G",
            map: a.shearModuli
          },
          {
            name: "J",
            map: a.torsionalConstants
          },
          {
            name: "rho",
            map: a.densities
          }
        ], i = "# elem  " + c.map((b) => b.name.padStart(12)).join(" ");
        l.push(i);
        for (let b = 0; b < o.length; b++) {
          const M = c.map((w) => {
            var _a3;
            const v = (_a3 = w.map) == null ? void 0 : _a3.get(b);
            return v !== void 0 ? v.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          l.push(`  ${String(b).padStart(4)}  ${M}`);
        }
        l.push("");
      }
      const d = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      d && d.size > 0 && (l.push(`## DISPLACEMENTS (${d.size} nodes)`), l.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), d.forEach((c, i) => {
        const b = c.map((M) => M.toExponential(4).padStart(12)).join(" ");
        l.push(`  ${String(i).padStart(4)}  ${b}`);
      }), l.push(""));
      const m = (_f = (_e = e.deformOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.reactions;
      if (m && m.size > 0 && (l.push(`## REACTIONS (${m.size} supports)`), l.push("# node          Rx           Ry           Rz           Mx           My           Mz"), m.forEach((c, i) => {
        const b = c.map((M) => M.toFixed(4).padStart(12)).join(" ");
        l.push(`  ${String(i).padStart(4)}  ${b}`);
      }), l.push("")), E) {
        l.push("## CLI COMMAND");
        const c = Object.entries(V).map(([i, b]) => `${i}=${b.val}`).join(" ");
        l.push(`cad.${E === "edificio" ? "building" : E}(${c})`);
      }
      return l.join(`
`);
    }
    let To = false;
    function Ts() {
      var _a2, _b, _c, _d;
      if (mt) {
        mt.remove(), mt = null, To = false;
        return;
      }
      const t = Ls();
      mt = document.createElement("div"), mt.id = "export-overlay", mt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, mt.innerHTML = `
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
    `, document.body.appendChild(mt), (_a2 = mt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        mt == null ? void 0 : mt.remove(), mt = null, To = false;
      }), (_b = mt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = mt.querySelector("#export-body"), n = mt.querySelector("#export-minimize");
        To = !To, To ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", mt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", mt.style.width = "720px");
      }), (_c = mt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = mt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = mt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = mt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e, _f;
        const o = e.nodes.val, n = e.elements.val, a = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, p = {
          generator: E || "custom",
          units: {
            force: h,
            length: O
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
        (a == null ? void 0 : a.supports) && (p.supports = [], a.supports.forEach((i, b) => p.supports.push({
          node: b,
          dofs: i
        }))), (a == null ? void 0 : a.loads) && (p.loads = [], a.loads.forEach((i, b) => p.loads.push({
          node: b,
          forces: i
        }))), s && (p.properties = {}, s.elasticities && (p.properties.E = Object.fromEntries(s.elasticities)), s.areas && (p.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (p.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (p.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (p.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (p.properties.J = Object.fromEntries(s.torsionalConstants)));
        const l = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        l && l.size > 0 && (p.displacements = {}, l.forEach((i, b) => p.displacements[b] = i));
        const d = (_f = (_e = e.deformOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.reactions;
        d && d.size > 0 && (p.reactions = {}, d.forEach((i, b) => p.reactions[b] = i));
        const m = mt.querySelector("#export-text");
        m.value = JSON.stringify(p, null, 2);
        const c = mt.querySelector("#export-status");
        c.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ge() {
      var _a2, _b, _c;
      const t = he.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, a = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let p = 0, l = 0, d = 0;
        for (const c of n) c.length === 2 ? p++ : c.length === 3 ? l++ : c.length === 4 && d++;
        let m = `${o}n ${a}e ${s}s`;
        (d > 0 || l > 0) && (m += ` | ${p}fr`, d > 0 && (m += ` ${d}q4`), l > 0 && (m += ` ${l}tri`)), t.textContent = m;
      }
    }
    function an() {
      var _a2;
      if (!qt || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, a = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!a.densities || a.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const p = Qs(t, o, n, a, Math.min(s, 12));
        if (p.frequencies && p.frequencies.length > 0) {
          re = p, te = t.map((c) => [
            ...c
          ]), bt = 0;
          const { extent: l } = to(), d = (_a2 = p.modeShapes) == null ? void 0 : _a2[0];
          if (d) {
            let c = 0;
            for (let i = 0; i < t.length; i++) {
              const b = d[i * 6] || 0, M = d[i * 6 + 1] || 0, w = d[i * 6 + 2] || 0;
              c = Math.max(c, Math.sqrt(b * b + M * M + w * w));
            }
            ze = c > 1e-12 ? l * 0.05 / c : 1;
          }
          const m = `${E} \u2014 ${t.length}n ${o.length}e`;
          de.render(p, {
            title: m
          }), de.div.style.display = "", qo(), console.log(`Modal: ${p.frequencies.length} modos. f\u2081 = ${p.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), re = null;
      }
    }
    function ln() {
      ye && (cancelAnimationFrame(ye), ye = 0), te.length > 0 && (e.nodes.val = te.map((t) => [
        ...t
      ])), de.div.style.display = "none", re = null;
    }
    function qo() {
      var _a2;
      if (ye && cancelAnimationFrame(ye), !(re == null ? void 0 : re.modeShapes) || !te.length) return;
      const t = re.modeShapes[bt];
      if (!t) return;
      const o = ((_a2 = re.frequencies) == null ? void 0 : _a2[bt]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), a = performance.now(), s = te.length, p = e.elements.rawVal, { extent: l } = to(), d = he.querySelector("#cad3d-modal-scale"), m = d && parseFloat(d.value) || 5;
      let c = 0;
      for (let I = 0; I < s; I++) {
        const H = t[I * 6] || 0, y = t[I * 6 + 1] || 0, u = t[I * 6 + 2] || 0;
        c = Math.max(c, Math.sqrt(H * H + y * y + u * u));
      }
      const i = c > 1e-12 ? l * m / 100 / c : 1, b = Qe();
      if (!b) return;
      let M = null, w = null, v = null;
      b.scene.traverse((I) => {
        var _a3, _b;
        !M && I.isPoints && I.geometry && (M = I), !w && I.isLineSegments && I.geometry && !I.name && (w = I), !v && I.isMesh && ((_a3 = I.material) == null ? void 0 : _a3.transparent) && ((_b = I.material) == null ? void 0 : _b.opacity) < 0.5 && I.geometry && (v = I);
      });
      const f = new Float32Array(s * 3), x = [];
      for (const I of p) if (I.length === 2) x.push([
        I[0],
        I[1]
      ]);
      else for (let H = 0; H < I.length; H++) x.push([
        I[H],
        I[(H + 1) % I.length]
      ]);
      const k = new Float32Array(x.length * 6);
      function L() {
        const I = (performance.now() - a) / 1e3, H = Math.sin(2 * Math.PI * n * I) * i;
        for (let y = 0; y < s; y++) {
          const u = te[y];
          f[y * 3] = u[0] + (t[y * 6] || 0) * H, f[y * 3 + 1] = u[1] + (t[y * 6 + 1] || 0) * H, f[y * 3 + 2] = u[2] + (t[y * 6 + 2] || 0) * H;
        }
        if (M) {
          const y = M.geometry, u = y.getAttribute("position");
          u && u.array.length === f.length ? (u.array.set(f), u.needsUpdate = true) : y.setAttribute("position", new mo(f.slice(), 3));
        }
        if (w) {
          for (let r = 0; r < x.length; r++) {
            const [g, $] = x[r];
            k[r * 6] = f[g * 3], k[r * 6 + 1] = f[g * 3 + 1], k[r * 6 + 2] = f[g * 3 + 2], k[r * 6 + 3] = f[$ * 3], k[r * 6 + 4] = f[$ * 3 + 1], k[r * 6 + 5] = f[$ * 3 + 2];
          }
          const y = w.geometry, u = y.getAttribute("position");
          u && u.array.length === k.length ? (u.array.set(k), u.needsUpdate = true) : y.setAttribute("position", new mo(k.slice(), 3));
        }
        if (v) {
          const y = [];
          for (const u of p) if (u.length === 3) {
            const [r, g, $] = u;
            y.push(f[r * 3], f[r * 3 + 1], f[r * 3 + 2]), y.push(f[g * 3], f[g * 3 + 1], f[g * 3 + 2]), y.push(f[$ * 3], f[$ * 3 + 1], f[$ * 3 + 2]);
          } else if (u.length === 4) {
            const [r, g, $, T] = u;
            y.push(f[r * 3], f[r * 3 + 1], f[r * 3 + 2]), y.push(f[g * 3], f[g * 3 + 1], f[g * 3 + 2]), y.push(f[$ * 3], f[$ * 3 + 1], f[$ * 3 + 2]), y.push(f[r * 3], f[r * 3 + 1], f[r * 3 + 2]), y.push(f[$ * 3], f[$ * 3 + 1], f[$ * 3 + 2]), y.push(f[T * 3], f[T * 3 + 1], f[T * 3 + 2]);
          }
          if (y.length > 0) {
            const u = v.geometry, r = new Float32Array(y), g = u.getAttribute("position");
            g && g.array.length === r.length ? (g.array.set(r), g.needsUpdate = true) : u.setAttribute("position", new mo(r, 3));
          }
        }
        b.render(), ye = requestAnimationFrame(L);
      }
      ye = requestAnimationFrame(L);
    }
    function rn() {
      var _a2, _b, _c, _d, _e;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const a = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const v = j("CM") ?? 0, f = j("CV") ?? 0, x = v + f, k = j("Ex") ?? 0, L = j("Ey") ?? 0;
        if (x === 0 && k === 0 && L === 0) return;
        const I = /* @__PURE__ */ new Map(), H = [];
        for (let C = 0; C < t.length; C++) n.supports.has(C) || H.push(C);
        const y = (C) => Math.round(C * 1e3) / 1e3, u = /* @__PURE__ */ new Set();
        n.supports.forEach((C, P) => {
          u.add(`${y(t[P][0])},${y(t[P][1])}`);
        });
        const r = /* @__PURE__ */ new Set();
        for (const C of H) u.has(`${y(t[C][0])},${y(t[C][1])}`) && r.add(C);
        const g = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
        if (k !== 0 || L !== 0) {
          let C = -1 / 0, P = -1 / 0;
          for (const Z of r) C = Math.max(C, y(t[Z][0])), P = Math.max(P, y(t[Z][1]));
          const A = /* @__PURE__ */ new Map();
          for (const Z of r) {
            const Q = y(t[Z][2]);
            A.has(Q) || A.set(Q, []), A.get(Q).push(Z);
          }
          A.forEach((Z) => {
            if (k !== 0) {
              const Q = /* @__PURE__ */ new Set();
              for (const ne of Z) if (y(t[ne][0]) === C) {
                const oe = y(t[ne][1]);
                Q.has(oe) || (Q.add(oe), g.add(ne));
              }
            }
            if (L !== 0) {
              const Q = /* @__PURE__ */ new Set();
              for (const ne of Z) if (y(t[ne][1]) === P) {
                const oe = y(t[ne][0]);
                Q.has(oe) || (Q.add(oe), $.add(ne));
              }
            }
          });
        }
        const T = 9.81, N = /* @__PURE__ */ new Map();
        for (let C = 0; C < o.length; C++) {
          const P = o[C], A = ((_a2 = a.densities) == null ? void 0 : _a2.get(C)) ?? 0;
          if (!(Math.abs(A) < 1e-15)) {
            if (P.length === 2) {
              const Z = ((_b = a.areas) == null ? void 0 : _b.get(C)) ?? 0, Q = t[P[0]], ne = t[P[1]], oe = Math.sqrt((ne[0] - Q[0]) ** 2 + (ne[1] - Q[1]) ** 2 + (ne[2] - Q[2]) ** 2), ae = -(A * Z * oe * T) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + ae), N.set(P[1], (N.get(P[1]) ?? 0) + ae);
            } else if (P.length >= 3) {
              const Z = ((_c = a.thicknesses) == null ? void 0 : _c.get(C)) ?? 0;
              let Q = 0;
              if (P.length === 3) {
                const [U, ae, we] = P.map((_e2) => t[_e2]);
                Q = 0.5 * Math.abs((ae[0] - U[0]) * (we[1] - U[1]) - (we[0] - U[0]) * (ae[1] - U[1]));
              } else if (P.length === 4) {
                const [U, ae, we, _e2] = P.map((Ne) => t[Ne]);
                if (Q = 0.5 * Math.abs((ae[0] - U[0]) * (we[1] - U[1]) - (we[0] - U[0]) * (ae[1] - U[1])) + 0.5 * Math.abs((we[0] - U[0]) * (_e2[1] - U[1]) - (_e2[0] - U[0]) * (we[1] - U[1])), Q < 1e-10) {
                  const Ne = [
                    ae[0] - U[0],
                    ae[1] - U[1],
                    ae[2] - U[2]
                  ], le = [
                    _e2[0] - U[0],
                    _e2[1] - U[1],
                    _e2[2] - U[2]
                  ], xe = [
                    Ne[1] * le[2] - Ne[2] * le[1],
                    Ne[2] * le[0] - Ne[0] * le[2],
                    Ne[0] * le[1] - Ne[1] * le[0]
                  ];
                  Q = Math.sqrt(xe[0] ** 2 + xe[1] ** 2 + xe[2] ** 2);
                }
              }
              const oe = -(A * Z * Q * T) / P.length;
              for (const U of P) N.set(U, (N.get(U) ?? 0) + oe);
            }
          }
        }
        const q = /* @__PURE__ */ new Set();
        for (const C of o) C.length === 2 && (q.add(C[0]), q.add(C[1]));
        for (const C of H) {
          const P = g.has(C) ? k : 0, A = $.has(C) ? L : 0, Z = N.get(C) ?? 0, Q = q.has(C) ? x : 0, ne = Z + Q;
          (P !== 0 || A !== 0 || Math.abs(ne) > 1e-10) && I.set(C, [
            P,
            A,
            ne,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: I
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let p = 0, l = 0, d = 0;
      for (const v of o) v.length === 2 ? p++ : v.length === 3 ? d++ : v.length === 4 && l++;
      const m = ((_d = n.supports) == null ? void 0 : _d.size) || 0, c = ((_e = n.loads) == null ? void 0 : _e.size) || 0, i = t.length * 6, b = i - m * 6, M = [], w = (v) => M.push(v);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), p && w(`&nbsp;&nbsp;Frames: <b>${p}</b>`), l && w(`&nbsp;&nbsp;Shell Q4: <b>${l}</b>`), d && w(`&nbsp;&nbsp;Triangulos: <b>${d}</b>`), w(`&nbsp;&nbsp;Apoyos: ${m} &nbsp;|&nbsp; Cargas: ${c}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${i} total, ~${b} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${i}&times;${i})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const v = Rt(t, o, n, a), f = performance.now() - s;
        if (v) {
          e.deformOutputs.val = v, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let x = 0, k = -1, L = 0, I = 0;
          v.deformations && v.deformations.forEach((g, $) => {
            const T = Math.sqrt(g[0] * g[0] + g[1] * g[1] + g[2] * g[2]);
            T > x && (x = T, k = $, L = g[0], I = g[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${x.toExponential(3)}</b> m <span style="color:#666">(nodo ${k})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(L * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(I * 1e3).toFixed(4)} mm`);
          const H = performance.now(), y = ko(t, o, a, v), u = performance.now() - H;
          y && (e.analyzeOutputs.val = y, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${u.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const r = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${r.toFixed(0)} ms</b>`);
        }
      } catch (v) {
        const f = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${v.message}</b>`);
      }
      window.__femLog = M, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), qt && setTimeout(() => an(), 50);
    }
    function cn(t, o) {
      const n = t * o, a = t * o * o * o / 12, s = o * t * t * t / 12, p = Math.min(t, o), l = Math.max(t, o), d = p * p * p * l * (1 / 3 - 0.21 * p / l * (1 - p * p * p * p / (12 * l * l * l * l)));
      return {
        A: n,
        Iz: a,
        Iy: s,
        J: d
      };
    }
    function Qn(t) {
      const o = t / 2, n = Math.PI * o * o, a = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: a,
        Iy: a,
        J: s
      };
    }
    function dn(t, o, n, a) {
      const s = o - 2 * n, p = 2 * t * n + s * a, l = (t * o * o * o - (t - a) * s * s * s) / 12, d = (2 * n * t * t * t + s * a * a * a) / 12, m = (2 * t * n * n * n + s * a * a * a) / 3;
      return {
        A: p,
        Iz: l,
        Iy: d,
        J: m
      };
    }
    function pn(t, o, n) {
      const a = t - 2 * n, s = o - 2 * n, p = t * o - a * s, l = (t * o * o * o - a * s * s * s) / 12, d = (o * t * t * t - s * a * a * a) / 12, m = (t - n) * (o - n), c = 2 * ((t - n) / n + (o - n) / n), i = 4 * m * m / (c > 0 ? c : 1);
      return {
        A: p,
        Iz: l,
        Iy: d,
        J: i
      };
    }
    function qs(t, o, n, a, s, p, l) {
      const m = 4700 * Math.sqrt(p / 1e3) * 1e3 / a, c = t - 2 * n, i = o - 2 * n, b = t * o - c * i, M = (t * o * o * o - c * i * i * i) / 12, w = (o * t * t * t - i * c * c * c) / 12, v = c * i, f = c * i * i * i / 12, x = i * c * c * c / 12, k = b + m * v, L = M + m * f, I = w + m * x, H = a / (2 * (1 + s)), y = (t - n) * (o - n), u = 2 * ((t - n) / n + (o - n) / n), r = 4 * y * y / (u > 0 ? u : 1);
      return {
        A: k,
        Iz: L,
        Iy: I,
        J: r,
        Es: a,
        Gs: H,
        A_steel: b,
        A_conc: v
      };
    }
    function eo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = S, n = {
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
      if ((E === "edificio" || E === "frame") && ce.size > 0) {
        const { colMat: s, vigaMat: p, colShape: l, fc: d, perFloor: m } = ke, c = 4700 * Math.sqrt(d / 1e3) * 1e3, i = c / (2 * 1.2), b = 24 / 9.80665, M = o.E, w = o.G, v = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (Pe.has(f)) {
            const g = 4700 * Math.sqrt(d / 1e3) * 1e3, $ = 0.2;
            n.elasticities.set(f, g), n.poissonsRatios.set(f, $), n.thicknesses.set(f, Ke), n.shearModuli.set(f, g / (2 * (1 + $))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Lt.has(f)) {
            const g = 4700 * Math.sqrt(d / 1e3) * 1e3, $ = 0.2;
            n.elasticities.set(f, g), n.poissonsRatios.set(f, $), n.thicknesses.set(f, $t), n.shearModuli.set(f, g / (2 * (1 + $))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const x = ce.has(f), k = Ce.get(f) ?? 0, L = m[k] ?? m[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let I, H, y, u;
          if (x) if (s === 0) H = c, y = i, u = b, I = l === 1 ? Qn(L.dCol) : cn(L.bCol, L.hCol), n.sectionShapes.set(f, l === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (s === 1) {
            H = M, y = w, u = v;
            const g = ke.steelColType;
            if (g <= 1) {
              const $ = co[L.colProfileIdx] ?? co[0];
              I = {
                A: $.A,
                Iz: $.Iz,
                Iy: $.Iy,
                J: $.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: $.bf,
                h: $.d,
                name: $.name
              });
            } else if (g === 2) {
              const $ = L.colBf ?? 0.3, T = L.colHf ?? 0.3, N = L.colTf ?? 0.02, q = L.colTw ?? 0.012;
              I = dn($, T, N, q);
              const C = `I${(T * 100).toFixed(0)}x${($ * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: $,
                h: T,
                tf: N,
                tw: q,
                name: C
              });
            } else {
              const $ = L.colBc ?? 0.3, T = L.colHc ?? 0.3, N = L.colT ?? 0.01;
              I = pn($, T, N);
              const q = `\u25A1${(T * 100).toFixed(0)}x${($ * 100).toFixed(0)}x${(N * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: $,
                h: T,
                tw: N,
                name: q
              });
            }
          } else {
            const g = L.colBc ?? 0.3, $ = L.colHc ?? 0.3, T = L.colT ?? 0.01, N = L.colFc ?? 28e3, q = L.colEs ?? 2e8, C = L.colNuS ?? 0.3;
            L.colNuC;
            const P = qs(g, $, T, q, C, N);
            I = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, H = P.Es, y = P.Gs;
            const A = 7.85, Z = 24 / 9.80665;
            u = (A * P.A_steel + Z * P.A_conc) / (P.A_steel + P.A_conc);
            const Q = `CFT ${($ * 1e3).toFixed(0)}X${(g * 1e3).toFixed(0)}X${(T * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: g,
              h: $,
              tw: T,
              name: Q
            });
          }
          else {
            const g = We.get(f), $ = g ? g.dir === "x" ? L.vigasX : L.vigasY : [], T = g ? $[g.bay] ?? $[0] ?? It() : It();
            if (p === 0) H = c, y = i, u = b, I = cn(T.b, T.h), n.sectionShapes.set(f, {
              type: "rect",
              b: T.b,
              h: T.h
            });
            else {
              H = M, y = w, u = v;
              const N = ke.steelVigaType;
              if (N <= 1) {
                const q = co[T.profileIdx ?? 0] ?? co[0];
                I = {
                  A: q.A,
                  Iz: q.Iz,
                  Iy: q.Iy,
                  J: q.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: q.bf,
                  h: q.d,
                  name: q.name
                });
              } else if (N === 2) {
                const q = T.bf ?? 0.2, C = T.hf ?? 0.4, P = T.tf ?? 0.015, A = T.tw ?? 0.01;
                I = dn(q, C, P, A);
                const Z = `I${(C * 100).toFixed(0)}x${(q * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: q,
                  h: C,
                  tf: P,
                  tw: A,
                  name: Z
                });
              } else {
                const q = T.bc ?? 0.2, C = T.hc ?? 0.3, P = T.t ?? 8e-3;
                I = pn(q, C, P);
                const A = `\u25A1${(C * 100).toFixed(0)}x${(q * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: q,
                  h: C,
                  tw: P,
                  name: A
                });
              }
            }
          }
          const r = pe.get(f);
          if (r) {
            if ((r.material ?? 1) === 0 ? (H = c, y = i, u = b) : (H = M, y = w, u = v), r.secType === "rect" && r.b && r.h) I = cn(r.b, r.h), n.sectionShapes.set(f, {
              type: "rect",
              b: r.b,
              h: r.h
            });
            else if (r.secType === "circ" && r.b) I = Qn(r.b), n.sectionShapes.set(f, {
              type: "circ",
              d: r.b
            });
            else if ((r.secType === "W" || r.secType === "HSS") && r.profileIdx !== void 0) {
              const $ = co[r.profileIdx] ?? co[0];
              I = {
                A: $.A,
                Iz: $.Iz,
                Iy: $.Iy,
                J: $.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: $.bf,
                h: $.d,
                name: $.name
              });
            } else if (r.secType === "I-param" && r.bf && r.hf && r.tf && r.tw) {
              I = dn(r.bf, r.hf, r.tf, r.tw);
              const $ = `I${(r.hf * 100).toFixed(0)}x${(r.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: r.bf,
                h: r.hf,
                tf: r.tf,
                tw: r.tw,
                name: $
              });
            } else if (r.secType === "tubular" && r.bc && r.hc && r.t) {
              I = pn(r.bc, r.hc, r.t);
              const $ = `\u25A1${(r.hc * 100).toFixed(0)}x${(r.bc * 100).toFixed(0)}x${(r.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: r.bc,
                h: r.hc,
                tw: r.t,
                name: $
              });
            }
          }
          n.elasticities.set(f, H), n.shearModuli.set(f, y), n.areas.set(f, I.A), n.momentsOfInertiaZ.set(f, I.Iy), n.momentsOfInertiaY.set(f, I.Iz), n.torsionalConstants.set(f, I.J), n.densities.set(f, u);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function es(t) {
      he.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = he.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (y) => {
        y.stopPropagation(), he.classList.add("collapsed");
      }), (_b = he.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (y) => {
        y.stopPropagation(), he.classList.remove("collapsed");
      }), he.querySelectorAll("[data-ex]").forEach((y) => {
        y.addEventListener("click", (u) => {
          u.stopPropagation();
          const r = y.dataset.ex;
          es(r), je.example(r);
        });
      }), he.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (u) => {
          u.stopPropagation();
          const r = y.dataset.view;
          oo(r), he.querySelectorAll("[data-view]").forEach((g) => g.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = he.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), E = "", Ms.val = false, zs(), je.clear();
      }), (_d = he.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Ht && (Ht = false, uo()), Yt && Ro(), Ct = !Ct, (_a3 = he.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Ct);
        const r = Qe();
        r && (r.controls.enabled = !Ct), Ct || _o();
      }), (_e = he.querySelector("#cad3d-draw")) == null ? void 0 : _e.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Ht && (Ht = false, uo()), Ct && _o(), Yt = !Yt, (_a3 = he.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt), Yt ? Ns() : Ro();
      }), (_f = he.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Ct && _o(), Yt && Ro(), Ht = !Ht, (_a3 = he.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Ht), Ht || uo();
      }), (_g = he.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), je.clear(), st = null, console.log("New empty model");
      }), (_h = he.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), Ts();
      });
      let t = "";
      const o = he.querySelector("#cad3d-io-menu"), n = he.querySelector("#cad3d-io-file");
      function a(y, u) {
        e.nodes.val = y.nodes, e.elements.val = y.elements, e.nodeInputs.val = y.nodeInputs, e.elementInputs.val = y.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${u}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function s(y) {
        ce = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map();
        const u = /* @__PURE__ */ new Map();
        for (let A = 0; A < y.stories.length; A++) u.set(y.stories[A].name, A);
        for (let A = 0; A < y.elementTypes.length; A++) {
          const Z = y.elementTypes[A], Q = y.elementStories[A], ne = u.get(Q) ?? 0;
          Ce.set(A, ne), Z === "COLUMN" || Z === "BRACE" ? ce.add(A) : Ie.add(A);
        }
        E = "edificio";
        const r = y.grids.filter((A) => A.dir === "X").sort((A, Z) => A.coord - Z.coord), g = y.grids.filter((A) => A.dir === "Y").sort((A, Z) => A.coord - Z.coord);
        let $, T, N, q;
        if (r.length > 0 || g.length > 0) $ = r.map((A) => A.coord), T = g.map((A) => A.coord), N = r.map((A) => A.label), q = g.map((A) => A.label);
        else {
          const A = new Set(y.nodes.map((Q) => Q[0])), Z = new Set(y.nodes.map((Q) => Q[1]));
          $ = [
            ...A
          ].sort((Q, ne) => Q - ne), T = [
            ...Z
          ].sort((Q, ne) => Q - ne), N = $.map((Q, ne) => String(ne + 1)), q = T.map((Q, ne) => String.fromCharCode(65 + ne));
        }
        const C = y.stories.length > 0 ? Math.max(...y.stories.map((A) => A.elev)) : Math.max(...y.nodes.map((A) => A[2]));
        ve = $, De = T, setTimeout(() => {
          yt(), tt($, T, C, N, q), Tt(y.stories, $, T), fn(), un();
        }, 100);
        const P = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const A of y.elementTypes) P[A]++;
        console.log(`E2K grids: X=[${N.join(",")}] Y=[${q.join(",")}]`), console.log(`E2K stories: ${y.stories.map((A) => `${A.name}@${A.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${P.COLUMN} columns, ${P.BEAM} beams, ${P.BRACE} braces`), Ge();
      }
      function p(y, u) {
        const r = new Blob([
          y
        ], {
          type: "text/plain"
        }), g = URL.createObjectURL(r), $ = document.createElement("a");
        $.href = g, $.download = u, $.click(), URL.revokeObjectURL(g);
      }
      o && o.addEventListener("change", () => {
        if (t = o.value, o.value = "", t.startsWith("import")) t === "import-e2k" ? n.accept = ".e2k,.E2K" : t === "import-py" ? n.accept = ".py" : t === "import-tcl" && (n.accept = ".tcl"), n.click();
        else if (t.startsWith("export")) {
          const y = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            t === "export-e2k" ? p(Ca({
              ...y,
              title: "Awatif Model",
              e2kModel: st ?? void 0
            }), "model.e2k") : t === "export-py" ? p(Na(y), "model_opensees.py") : t === "export-tcl" && p(Oa(y), "model_opensees.tcl");
          } catch (u) {
            alert("Export error: " + u.message);
          }
        }
      }), n && n.addEventListener("change", () => {
        var _a3;
        const y = (_a3 = n.files) == null ? void 0 : _a3[0];
        if (!y) return;
        const u = new FileReader();
        u.onload = () => {
          const r = u.result;
          try {
            if (t === "import-e2k") {
              const g = qa(r);
              st = g, a(g, "E2K imported"), s(g);
            } else if (t === "import-py") {
              const g = _a(r);
              a(g, "OpenSeesPy imported");
            } else if (t === "import-tcl") {
              const g = Ra(r);
              a(g, "OpenSees Tcl imported");
            }
          } catch (g) {
            alert("Import error: " + g.message), console.error(g);
          }
        }, u.readAsText(y), n.value = "";
      });
      const l = he.querySelector("#cad3d-force-unit");
      l && (l.value = h, l.addEventListener("change", (y) => {
        y.stopPropagation(), h = l.value, S = ho(h, O), E && Ve(E);
      }));
      const d = he.querySelector("#cad3d-length-unit");
      d && (d.value = O, d.addEventListener("change", (y) => {
        y.stopPropagation(), O = d.value, S = ho(h, O), E && Ve(E);
      })), he.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (u) => {
          u.stopPropagation();
          const r = y.dataset.preset, g = _[r];
          g && (h = g.force, O = g.length, W = g.stress, S = ho(h, O), l && (l.value = h), d && (d.value = O), he.querySelectorAll("[data-preset]").forEach(($) => {
            $.classList.toggle("active", $.dataset.preset === r);
          }), E && Ve(E), console.log(`Preset: ${r} \u2192 ${h}+${O}, stress: ${W.label}`));
        });
      }), (_i = he.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), Ws();
      }), (_j = he.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), Ys();
      }), (_k = he.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), Js();
      }), (_l = he.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), Xs();
      }), (_m = he.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), qt = !qt, (_a3 = he.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", qt);
        const r = he.querySelector("#cad3d-mode-prev"), g = he.querySelector("#cad3d-mode-next"), $ = he.querySelector("#cad3d-mode-label"), T = he.querySelector("#cad3d-modal-scale");
        if (qt) {
          const N = Qe();
          ((_b2 = N == null ? void 0 : N.settings) == null ? void 0 : _b2.loads) && (J = N.settings.loads.rawVal, N.settings.loads.val = false), an(), r.style.display = "", g.style.display = "", $.style.display = "", T && (T.style.display = ""), m();
        } else ln(), r.style.display = "none", g.style.display = "none", $.style.display = "none", T && (T.style.display = "none"), E && E !== "placa-q4" && E !== "placa-3q" && be(), setTimeout(() => {
          var _a4;
          const N = Qe();
          ((_a4 = N == null ? void 0 : N.settings) == null ? void 0 : _a4.loads) && J && (N.settings.loads.val = true);
        }, 600);
      });
      function m() {
        var _a3;
        const y = he.querySelector("#cad3d-mode-label");
        if (!y || !(re == null ? void 0 : re.frequencies)) return;
        const u = re.frequencies[bt], r = u > 0 ? 1 / u : 0, g = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let $ = 0; $ <= bt; $++) {
          const T = (_a3 = re.massParticipation) == null ? void 0 : _a3[$];
          if (T) for (let N = 0; N < 6; N++) g[N] += T[N];
        }
        y.textContent = `Modo ${bt + 1} \u2014 ${u.toFixed(2)} Hz \u2014 T=${r.toFixed(3)}s \u2014 \u03A3Ux=${(g[0] * 100).toFixed(1)}% \u03A3Uy=${(g[1] * 100).toFixed(1)}% \u03A3Rz=${(g[5] * 100).toFixed(1)}%`;
      }
      (_n2 = he.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(re == null ? void 0 : re.modeShapes)) return;
        bt = (bt - 1 + re.modeShapes.length) % re.modeShapes.length;
        const u = re.modeShapes[bt], { extent: r } = to();
        let g = 0;
        for (let $ = 0; $ < te.length; $++) {
          const T = u[$ * 6] || 0, N = u[$ * 6 + 1] || 0, q = u[$ * 6 + 2] || 0;
          g = Math.max(g, Math.sqrt(T * T + N * N + q * q));
        }
        ze = g > 1e-12 ? r * 0.05 / g : 1, qo(), m();
      }), (_o2 = he.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(re == null ? void 0 : re.modeShapes)) return;
        bt = (bt + 1) % re.modeShapes.length;
        const u = re.modeShapes[bt], { extent: r } = to();
        let g = 0;
        for (let $ = 0; $ < te.length; $++) {
          const T = u[$ * 6] || 0, N = u[$ * 6 + 1] || 0, q = u[$ * 6 + 2] || 0;
          g = Math.max(g, Math.sqrt(T * T + N * N + q * q));
        }
        ze = g > 1e-12 ? r * 0.05 / g : 1, qo(), m();
      });
      const c = he.querySelector("#cad3d-modal-scale");
      c == null ? void 0 : c.addEventListener("mousedown", (y) => y.stopPropagation()), c == null ? void 0 : c.addEventListener("change", () => {
        qt && (re == null ? void 0 : re.modeShapes) && qo();
      });
      const i = he.querySelector("#cad3d-cli-toggle"), b = he.querySelector("#cad3d-cli-panel"), M = he.querySelector("#cad3d-cli-output"), w = he.querySelector("#cad3d-cmd"), v = [];
      let f = -1;
      i == null ? void 0 : i.addEventListener("click", (y) => {
        if (y.stopPropagation(), b) {
          const u = b.style.display !== "none";
          b.style.display = u ? "none" : "block", u || (w == null ? void 0 : w.focus(), M && !M.textContent && (M.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), w == null ? void 0 : w.addEventListener("mousedown", (y) => y.stopPropagation()), document.addEventListener("keydown", (y) => {
        var _a3;
        if ((y.ctrlKey || y.metaKey) && y.key === "z" && !y.shiftKey) {
          y.preventDefault(), os();
          return;
        }
        if ((y.ctrlKey || y.metaKey) && (y.key === "y" || y.key === "z" && y.shiftKey)) {
          y.preventDefault(), ns();
          return;
        }
        if ((y.key === "Delete" || y.key === "Backspace") && nt.size > 0) {
          y.preventDefault(), nt.forEach((u) => G.add(u)), nt.clear(), Jt && (Jt.remove(), Jt = null), be();
          return;
        }
        if (y.key === "Escape") {
          if (Yt) if (at !== null) {
            at = null;
            const u = Qe();
            Mt && u && (u.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), St && u && (u.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), u == null ? void 0 : u.render();
          } else Ro();
          Ct && _o(), Ht && (Ht = false, uo(), (_a3 = he.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), w == null ? void 0 : w.addEventListener("keydown", (y) => {
        if (y.stopPropagation(), y.key === "Enter") {
          const u = w.value.trim();
          if (u) {
            v.unshift(u), f = -1, M && (M.textContent += `> ${u}
`);
            try {
              const r = new Function("cad", `return ${u}`)(je);
              if (r !== void 0 && M) {
                const g = typeof r == "object" ? JSON.stringify(r, null, 2) : String(r);
                M.textContent += `${g}
`;
              }
            } catch (r) {
              M && (M.textContent += `ERROR: ${r.message}
`);
            }
            M && (M.scrollTop = M.scrollHeight), w.value = "";
          }
        } else y.key === "ArrowUp" ? (y.preventDefault(), v.length > 0 && f < v.length - 1 && (f++, w.value = v[f])) : y.key === "ArrowDown" && (y.preventDefault(), f > 0 ? (f--, w.value = v[f]) : (f = -1, w.value = ""));
      });
      let x = false, k = 0, L = 0, I = 0, H = 0;
      he.addEventListener("mousedown", (y) => {
        const u = y.target.tagName;
        if (u === "BUTTON" || u === "INPUT" || u === "SELECT") return;
        x = true;
        const r = he.getBoundingClientRect();
        he.style.bottom = "unset", k = y.clientX, L = y.clientY, I = r.left, H = r.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        x && (y.preventDefault(), he.style.left = I + (y.clientX - k) + "px", he.style.top = H + (y.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        x = false;
      }), Ge();
    }, 10);
    function Qe() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function to() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Se(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, a = 1 / 0, s = -1 / 0, p = -1 / 0, l = -1 / 0;
      for (const [c, i, b] of t) c < o && (o = c), c > s && (s = c), i < n && (n = i), i > p && (p = i), b < a && (a = b), b > l && (l = b);
      const d = new Se((o + s) / 2, (n + p) / 2, (a + l) / 2), m = Math.max(s - o, p - n, l - a, 1);
      return {
        center: d,
        extent: m
      };
    }
    function yt(t = false) {
      const o = Qe();
      if (!o) return;
      const { extent: n } = to();
      let a;
      n <= 5 ? a = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? a = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : a = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = a, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const p = ta(), l = new da(a, 20, p.grid, p.grid);
      l.rotation.x = Math.PI / 2, l.position.set(0.5 * a, 0.5 * a, 0), o.scene.add(l), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((M) => M instanceof Do))).forEach((b) => {
        b.traverse((M) => {
          M.geometry && M.geometry.dispose(), M.material && (M.material.map && M.material.map.dispose(), M.material.dispose());
        }), o.scene.remove(b);
      });
      const m = 0.05 * a, c = new In();
      c.name = "viewerAxes";
      const i = p.axisArrow;
      c.add(new Do(new Se(1, 0, 0), new Se(), 1, i, 0.2, 0.2)), c.add(new Do(new Se(0, 1, 0), new Se(), 1, i, 0.2, 0.2)), c.add(new Do(new Se(0, 0, 1), new Se(), 1, i, 0.2, 0.2)), c.children.forEach((b) => b.scale.set(m, m, m));
      for (const [b, M, w] of [
        [
          "X",
          "red",
          [
            1.3 * m,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * m,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * m
          ]
        ]
      ]) {
        const v = document.createElement("canvas");
        v.width = 64, v.height = 64;
        const f = v.getContext("2d");
        f.fillStyle = M, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(b, 32, 34);
        const x = new zn(v);
        x.needsUpdate = true;
        const k = new jo(new Wo({
          map: x,
          depthTest: false,
          transparent: true
        }));
        k.position.set(w[0], w[1], w[2]), k.scale.set(0.4 * m, 0.4 * m, 1), k.renderOrder = 99, c.add(k);
      }
      o.scene.add(c), t ? o.render() : oo("3d");
    }
    function ts(t, o, n) {
      if (t.length < 2) return n * 10;
      let a = 1 / 0;
      return o > 0 && (a = Math.min(a, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (a = Math.min(a, Math.abs(t[o + 1] - t[o]))), a * 0.45 || n * 0.1;
    }
    function oo(t) {
      var _a2;
      const o = Qe();
      if (!o) return;
      const { center: n, extent: a } = to(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), p = a * 0.7;
      o.controls.maxDistance = a * 5, o.controls.minDistance = a * 0.05, o.renderer.clippingPlanes = [];
      const l = () => {
        o.scene.traverse((d) => {
          var _a3;
          if (!d.material) return;
          const m = d.type === "GridHelper" || d.type === "AxesHelper", c = d.isSprite, i = ((_a3 = d.userData) == null ? void 0 : _a3.noClip) === true;
          (m || c || i) && (Array.isArray(d.material) ? d.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : d.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const d = o.perspCamera.fov, m = a / (2 * Math.tan(d * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + m * 0.5, n.y - m * 0.8, n.z + m * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const d = o.orthoCamera;
        d.left = -p * s, d.right = p * s, d.top = p, d.bottom = -p, d.near = -a * 10, d.far = a * 10, d.updateProjectionMatrix();
        const m = (c, i, b) => {
          d.position.copy(c), d.up.copy(b), o.controls.target.copy(i), d.lookAt(i), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], m(new Se(n.x, n.y, n.z + a * 2), new Se(n.x, n.y, n.z), new Se(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const c = parseInt(t.split(":")[1]), i = ((_a2 = V.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (c + 1) * i, M = i * 0.45;
          o.renderer.clippingPlanes = [
            new io(new Se(0, 0, -1), b + M),
            new io(new Se(0, 0, 1), -b + M)
          ], l(), m(new Se(n.x, n.y, b + a * 2), new Se(n.x, n.y, b), new Se(0, 1, 0));
        } else if (t === "elevX") d.position.set(n.x + a * 2, n.y, n.z), d.up.set(0, 0, 1);
        else if (t === "elevY") d.position.set(n.x, n.y - a * 2, n.z), d.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const c = parseInt(t.split(":")[1]), i = ve[c] ?? n.x;
          if (De.length > 1) {
            const M = ts(ve, c, a);
            o.renderer.clippingPlanes = [
              new io(new Se(-1, 0, 0), i + M),
              new io(new Se(1, 0, 0), -i + M)
            ], l(), d.position.set(n.x + a * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else d.position.set(n.x, n.y - a * 2, n.z), o.controls.target.copy(n);
          d.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const c = parseInt(t.split(":")[1]), i = De[c] ?? n.y;
          if (ve.length > 1) {
            const M = ts(De, c, a);
            o.renderer.clippingPlanes = [
              new io(new Se(0, -1, 0), i + M),
              new io(new Se(0, 1, 0), -i + M)
            ], l(), d.position.set(n.x, n.y - a * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else d.position.set(n.x + a * 2, n.y, n.z), o.controls.target.copy(n);
          d.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(d);
      }
    }
    function fn() {
      const t = he.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (ve.length < 2 && De.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (p, l, d) => {
        const m = document.createElement("button");
        return m.textContent = p, m.dataset.view = l, m.title = d, m.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", m.addEventListener("click", (c) => {
          var _a2;
          c.stopPropagation();
          const i = m.classList.contains("view-active");
          he.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), i ? (oo("3d"), (_a2 = he.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (oo(l), m.classList.add("view-active"));
        }), m;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      ve.forEach((p, l) => {
        const d = l < a.length ? a[l] : `X${l}`;
        t.appendChild(o(d, `axisX:${l}`, `Eje ${d} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), De.forEach((p, l) => {
        const d = `${l + 1}`;
        t.appendChild(o(d, `axisY:${l}`, `Eje ${d} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function un() {
      var _a2;
      const t = he.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = V.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, p, l) => {
        const d = document.createElement("button");
        return d.textContent = s, d.dataset.view = p, d.title = l, d.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", d.addEventListener("click", (m) => {
          var _a3;
          m.stopPropagation();
          const c = d.classList.contains("view-active");
          he.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), c ? (oo("3d"), (_a3 = he.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (oo(p), d.classList.add("view-active"));
        }), d;
      }, a = document.createElement("span");
      a.textContent = "Planta:", a.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(a);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Cs() {
      oo("3d"), he.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    je.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, oo(t), he.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Ht = false, Ct = false, Yt = false, kt = "line", Pt = [], at = null, Mt = null, St = null, yo = null, Ot = null;
    const ct = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, mn = 0.5;
    let bn = [], _t = null, fo = null;
    const $o = [], Oo = [], As = 50;
    function wo() {
      $o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), $o.length > As && $o.shift(), Oo.length = 0;
    }
    function os() {
      if ($o.length === 0) return;
      Oo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = $o.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, eo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function ns() {
      if (Oo.length === 0) return;
      $o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Oo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, eo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const nt = /* @__PURE__ */ new Set();
    let At = null, no = [], Gt = null, Jt = null;
    function hn(t) {
      const o = Qe();
      if (!o) return;
      const n = e.nodes.val, a = e.elements.val[t];
      if (!a) return;
      const s = [];
      for (let d = 0; d < a.length; d++) {
        const m = n[a[d]], c = n[a[(d + 1) % a.length]];
        s.push(m[0], m[1], m[2], c[0], c[1], c[2]);
      }
      const p = new ro();
      p.setAttribute("position", new mo(s, 3));
      const l = new Ao(p, new Fo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      l.renderOrder = 9998, l.__elemIdx = t, o.scene.add(l), no.push(l), o.render();
    }
    function so() {
      const t = Qe();
      no.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), no = [], t == null ? void 0 : t.render();
    }
    function ao() {
      Jt && Jt.remove();
      const t = D.size > 0 || B;
      if (nt.size === 0 && !t) {
        Jt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${nt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Jt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ks([
          ...nt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (nt.size === 1) {
          const n = [
            ...nt
          ][0];
          ds(n);
        } else {
          const n = [
            ...nt
          ], a = e.nodes.val, s = e.elements.val;
          let p = 0, l = 0, d = 0, m = 0;
          n.forEach((i) => {
            const b = s[i];
            if (b) if (b.length === 2) {
              const M = a[b[0]], w = a[b[1]], v = Math.abs(w[0] - M[0]), f = Math.abs(w[1] - M[1]), x = Math.abs(w[2] - M[2]);
              x > v && x > f ? p++ : l++;
            } else b.length === 3 ? d++ : b.length === 4 && m++;
          });
          const c = [];
          p && c.push(`${p} columnas`), l && c.push(`${l} vigas`), m && c.push(`${m} shells Q4`), d && c.push(`${d} triangulos`), alert(`${n.length} elementos seleccionados:
${c.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        nt.forEach((n) => D.add(n)), nt.clear(), so(), ao(), be();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        B = true, Y.clear(), nt.forEach((n) => Y.add(n)), nt.clear(), so(), ao(), be();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        D.clear(), B = false, Y.clear(), ao(), be();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        wo(), nt.forEach((n) => G.add(n)), nt.clear(), so(), ao(), be();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        nt.clear(), so(), ao();
      });
    }
    function _o() {
      var _a2;
      Ct = false, nt.clear(), so(), Jt && (Jt.remove(), Jt = null), (_a2 = he.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Qe();
      o && (o.controls.enabled = true);
    }
    function uo() {
      if (At) {
        const t = Qe();
        t == null ? void 0 : t.scene.remove(At), At.geometry.dispose(), At.material.dispose(), At = null, t == null ? void 0 : t.render();
      }
      Gt && (Gt.remove(), Gt = null);
    }
    function Fs(t) {
      gn();
      const o = Qe();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      fo = t;
      const a = 200, s = [
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
      for (const [p, l] of s) {
        const d = new Float32Array([
          n[0] - p[0] * a,
          n[1] - p[1] * a,
          n[2] - p[2] * a,
          n[0] + p[0] * a,
          n[1] + p[1] * a,
          n[2] + p[2] * a
        ]), m = new ro();
        m.setAttribute("position", new sa(d, 3));
        const c = new kn({
          color: l,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new Ao(m, c);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), bn.push(i);
      }
      o.render();
    }
    function gn() {
      const t = Qe();
      for (const o of bn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      bn = [], fo = null, _t && (_t.remove(), _t = null);
    }
    function ss(t, o, n, a) {
      _t || (_t = document.createElement("div"), _t.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(_t));
      const s = a.x - n.x, p = a.y - n.y, l = a.z - n.z, d = Math.sqrt(s * s + p * p + l * l), m = Math.abs(s), c = Math.abs(p), i = Math.abs(l);
      let b = "";
      m > c && m > i ? b = `\u0394X=${s.toFixed(2)}` : c > m && c > i ? b = `\u0394Y=${p.toFixed(2)}` : i > 0.01 && (b = `\u0394Z=${l.toFixed(2)}`), _t.textContent = `${d.toFixed(3)} m  ${b}`, _t.style.left = t + 20 + "px", _t.style.top = o - 10 + "px";
    }
    function Ps(t, o) {
      const a = e.nodes.val[o];
      if (!a) return null;
      const s = new Se(a[0], a[1], a[2]), p = t.clone(), l = p.clone().sub(s), d = 0.3, m = Math.abs(l.x), c = Math.abs(l.y), i = Math.abs(l.z);
      return c < d && i < d && m > 0.01 ? new Se(p.x, s.y, s.z) : m < d && i < d && c > 0.01 ? new Se(s.x, p.y, s.z) : m < d && c < d && i > 0.01 ? new Se(s.x, s.y, p.z) : null;
    }
    function Ro() {
      var _a2;
      const t = Qe();
      Mt && t && (t.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), St && t && (t.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), gn(), at = null, Ot = null, Yt = false, yo && (yo.remove(), yo = null), (_a2 = he.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ns() {
      yo && yo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(kt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(kt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(kt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(kt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(ct.node)}">Node</button>
      <button id="ds-grid" style="${n(ct.grid)}">Grid</button>
      <button id="ds-mid" style="${n(ct.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(ct.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${mn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), yo = t;
      const a = () => {
        const s = t.querySelector("#dt-line"), p = t.querySelector("#dt-arc"), l = t.querySelector("#dt-node"), d = t.querySelector("#dt-area");
        s && (s.style.cssText = o(kt === "line")), p && (p.style.cssText = o(kt === "arc")), l && (l.style.cssText = o(kt === "node")), d && (d.style.cssText = o(kt === "area"));
        const m = t.querySelector("#ds-node"), c = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        m && (m.style.cssText = n(ct.node)), c && (c.style.cssText = n(ct.grid)), i && (i.style.cssText = n(ct.midpoint)), b && (b.style.cssText = n(ct.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        kt = "line", at = null, Ot = null, Pt = [], a();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        kt = "arc", at = null, Ot = null, Pt = [], a();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        kt = "node", at = null, Ot = null, Pt = [], a();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        kt = "area", at = null, Ot = null, Pt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), a();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        ct.node = !ct.node, a();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        ct.grid = !ct.grid, a();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        ct.midpoint = !ct.midpoint, a();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        ct.track = !ct.track, ct.track || gn(), a();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ct.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => os()), t.querySelector("#dt-redo").addEventListener("click", () => ns());
    }
    function as(t, o, n, a) {
      const s = a.getBoundingClientRect(), p = (t - s.left) / s.width * 2 - 1, l = -((o - s.top) / s.height) * 2 + 1, d = new vs();
      d.setFromCamera(new ys(p, l), n);
      const m = e.nodes.val, c = e.elements.val, i = 0.12;
      if (ct.node) {
        let w = -1, v = 1 / 0;
        for (let f = 0; f < m.length; f++) {
          const x = m[f], k = new Se(x[0], x[1], x[2]).project(n), L = Math.sqrt((k.x - p) ** 2 + (k.y - l) ** 2);
          L < i && L < v && (v = L, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Se(...m[w]),
          snapType: "node"
        };
      }
      if (ct.midpoint) {
        let w = 1 / 0, v = null;
        for (const f of c) {
          if (f.length !== 2) continue;
          const x = m[f[0]], k = m[f[1]], L = new Se((x[0] + k[0]) / 2, (x[1] + k[1]) / 2, (x[2] + k[2]) / 2), I = L.clone().project(n), H = Math.sqrt((I.x - p) ** 2 + (I.y - l) ** 2);
          H < i * 0.8 && H < w && (w = H, v = L);
        }
        if (v) return {
          nodeIdx: null,
          worldPos: v,
          snapType: "mid"
        };
      }
      if (ct.grid) {
        const w = new io(new Se(0, 0, 1), 0), v = new Se();
        if (d.ray.intersectPlane(w, v)) {
          const f = ct.gridSize || mn;
          return v.x = Math.round(v.x / f) * f, v.y = Math.round(v.y / f) * f, v.z = Math.round(v.z / f) * f, {
            nodeIdx: null,
            worldPos: v,
            snapType: "grid"
          };
        }
      }
      const b = new io(new Se(0, 0, 1), 0), M = new Se();
      return d.ray.intersectPlane(b, M), {
        nodeIdx: null,
        worldPos: M,
        snapType: "free"
      };
    }
    function ls(t) {
      const o = Qe();
      if (!o) return;
      const n = e.nodes.val;
      if (St && (o.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), t.worldPos) {
        const a = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, p = t.snapType === "mid" ? new aa(s * 2, s * 2, s * 2) : new la(s, 12, 12), l = new ia({
          color: a,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        St = new ra(p, l), St.position.copy(t.worldPos), St.renderOrder = 9999, o.scene.add(St);
      }
      if (Mt && (o.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), at !== null && t.worldPos) {
        const a = n[at], s = new ro();
        if (kt === "arc" && Ot !== null) {
          const l = n[Ot], d = is(new Se(a[0], a[1], a[2]), new Se(l[0], l[1], l[2]), t.worldPos, 16), m = [];
          for (let c = 0; c < d.length - 1; c++) m.push(d[c].x, d[c].y, d[c].z, d[c + 1].x, d[c + 1].y, d[c + 1].z);
          s.setAttribute("position", new mo(m, 3));
        } else s.setAttribute("position", new mo([
          a[0],
          a[1],
          a[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const p = new Fo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Mt = new Bo(s, p), kt === "arc" && Ot !== null && (Mt = new Ao(s, p)), Mt.renderOrder = 9999, o.scene.add(Mt);
      }
      o.render();
    }
    function is(t, o, n, a) {
      const s = [];
      for (let p = 0; p <= a; p++) {
        const l = p / a, d = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), m = (1 - l) * (1 - l), c = 2 * (1 - l) * l, i = l * l;
        s.push(new Se(m * t.x + c * d.x + i * n.x, m * t.y + c * d.y + i * n.y, m * t.z + c * d.z + i * n.z));
      }
      return s;
    }
    function xn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      wo();
      const a = [
        ...o,
        [
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]
      ];
      return e.nodes.val = a, a.length - 1;
    }
    function Os(t) {
      var _a2;
      if (kt === "node") {
        if (!t.worldPos) return;
        wo();
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
      if (kt === "line") {
        const o = xn(t);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (o === at) return;
        wo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === at && s[1] === o || s[1] === at && s[0] === o)) || (n.push([
          at,
          o
        ]), e.elements.val = n, eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), at = o;
        return;
      }
      if (kt === "arc") {
        const o = xn(t);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (Ot === null) {
          if (o === at) return;
          Ot = o;
          return;
        }
        if (o === at || o === Ot) return;
        const n = e.nodes.val, a = new Se(...n[at]), s = new Se(...n[Ot]), p = new Se(...n[o]), l = Math.max(4, Math.round(((_a2 = V.nSubViga) == null ? void 0 : _a2.val) ?? 8)), d = is(a, s, p, l);
        wo();
        const m = [
          ...e.nodes.val
        ], c = [
          ...e.elements.val
        ];
        let i = at;
        for (let b = 1; b < d.length; b++) {
          let M;
          if (b === d.length - 1) M = o;
          else {
            const w = d[b];
            M = m.length, m.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          c.push([
            i,
            M
          ]), i = M;
        }
        e.nodes.val = m, e.elements.val = c, eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, at = o, Ot = null;
        return;
      }
      if (kt === "area") {
        const o = xn(t);
        if (o < 0) return;
        if (Pt.length >= 3 && o === Pt[0]) {
          wo();
          const n = [
            ...e.nodes.val
          ], a = [
            ...e.elements.val
          ], s = Pt.map((p) => n[p]);
          try {
            const p = Zt({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (d, m) => m),
              maxMeshSize: mn || 0.5
            }), l = [];
            for (const d of p.nodes) {
              let m = -1;
              for (let c = 0; c < n.length; c++) {
                const i = Math.abs(n[c][0] - d[0]), b = Math.abs(n[c][1] - d[1]), M = Math.abs(n[c][2] - d[2]);
                if (i < 0.01 && b < 0.01 && M < 0.01) {
                  m = c;
                  break;
                }
              }
              m >= 0 ? l.push(m) : (l.push(n.length), n.push([
                d[0],
                d[1],
                d[2]
              ]));
            }
            for (const d of p.elements) a.push([
              l[d[0]],
              l[d[1]],
              l[d[2]]
            ]);
            e.nodes.val = n, e.elements.val = a, eo(), console.log(`Area: ${p.elements.length} triangulos creados desde ${Pt.length} vertices`);
          } catch (p) {
            console.error("Area mesh failed:", p.message);
          }
          Pt = [];
          return;
        }
        if (Pt.push(o), console.log(`Area vertex ${Pt.length}: node ${o}`), Pt.length >= 2) {
          const n = Pt[Pt.length - 2], a = e.nodes.val, s = Qe();
          if (s) {
            const p = new ro().setFromPoints([
              new Se(...a[n]),
              new Se(...a[o])
            ]), l = new Ao(p, new Fo({
              color: 65280,
              linewidth: 2
            }));
            l.name = "area-preview", s.scene.add(l), s.render();
          }
        }
        return;
      }
    }
    function rs(t) {
      const o = Qe();
      if (!o) return;
      At && (o.scene.remove(At), At.geometry.dispose(), At.material.dispose());
      const n = e.nodes.val, a = e.elements.val[t];
      if (!a) return;
      const s = [];
      for (let l = 0; l < a.length; l++) {
        const d = n[a[l]], m = n[a[(l + 1) % a.length]];
        s.push(d[0], d[1], d[2], m[0], m[1], m[2]);
      }
      const p = new ro();
      p.setAttribute("position", new mo(s, 3)), At = new Ao(p, new Fo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), At.renderOrder = 9999, o.scene.add(At), o.render();
    }
    function vn(t) {
      const o = Qe();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), a = new ys((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new vs();
      s.setFromCamera(a, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const p = e.nodes.val, l = e.elements.val;
      if (p.length === 0 || l.length === 0) return -1;
      let d = 1 / 0, m = -1;
      const c = s.ray;
      for (let b = 0; b < l.length; b++) {
        const M = l[b];
        if (M.length === 2) {
          const w = new Se(...p[M[0]]), v = new Se(...p[M[1]]), f = new ca(w, v), x = new Se(), k = new Se();
          c.closestPointToPoint(f.getCenter(new Se()), x), f.closestPointToPoint(x, true, k);
          const L = x.distanceTo(k);
          L < d && (d = L, m = b);
        } else if (M.length === 3) {
          const w = new Se(...p[M[0]]), v = new Se(...p[M[1]]), f = new Se(...p[M[2]]), x = new Se();
          if (c.intersectTriangle(w, v, f, false, x)) {
            const L = c.origin.distanceTo(x);
            L < d && (d = L, m = b);
          } else {
            const L = w.add(v).add(f).divideScalar(3), I = new Se();
            c.closestPointToPoint(L, I);
            const H = I.distanceTo(L);
            H < d && (d = H, m = b);
          }
        } else if (M.length === 4) {
          const w = new Se(...p[M[0]]), v = new Se(...p[M[1]]), f = new Se(...p[M[2]]), x = new Se(...p[M[3]]), k = new Se();
          let L = c.intersectTriangle(w, v, f, false, k);
          if (L) {
            const I = c.origin.distanceTo(k);
            I < d && (d = I, m = b);
          }
          if (L = c.intersectTriangle(w, f, x, false, k), L) {
            const I = c.origin.distanceTo(k);
            I < d && (d = I, m = b);
          }
        }
      }
      const { extent: i } = to();
      return d < i * 0.1 ? m : -1;
    }
    function K(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function yn(t, o, n = 12) {
      var _a2;
      const a = Math.min(t.length, n), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let p = "<table>";
      if (o) {
        p += '<tr><td class="header"></td>';
        for (let l = 0; l < s; l++) p += `<td class="header">${o[l] || l}</td>`;
        p += "</tr>";
      }
      for (let l = 0; l < a; l++) {
        p += "<tr>", o && (p += `<td class="header">${o[l] || l}</td>`);
        for (let d = 0; d < s; d++) {
          const m = t[l][d], c = Math.abs(m) > 1e-10 ? "nonzero" : "";
          p += `<td class="${c}">${K(m, 2)}</td>`;
        }
        p += "</tr>";
      }
      return p += "</table>", p;
    }
    function $e(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(t, o, n) {
      let a = `<span class="var">${t}</span>`;
      return o && (a += `<sub>${o}</sub>`), a;
    }
    function _s(t, o, n, a, s, p, l) {
      const d = `${$e(F("E") + "\xB7" + F("A"), F("L"))}`, m = `${$e("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`, c = `${$e("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`, i = `${$e(F("G") + "\xB7" + F("J"), F("L"))}`, b = `${$e("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`, M = `${$e("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${d} = ${$e(K(t) + "\xB7" + K(o), K(l))} = <span class="highlight">${K(t * o / l)}</span></div>
      <div>${m} = ${$e("12\xB7" + K(t) + "\xB7" + K(n), K(l) + "\xB3")} = <span class="highlight">${K(12 * t * n / l ** 3)}</span></div>
      <div>${c} = ${$e("12\xB7" + K(t) + "\xB7" + K(a), K(l) + "\xB3")} = <span class="highlight">${K(12 * t * a / l ** 3)}</span></div>
      <div>${i} = ${$e(K(s) + "\xB7" + K(p), K(l))} = <span class="highlight">${K(s * p / l)}</span></div>
      <div>${b} = ${$e("4\xB7" + K(t) + "\xB7" + K(a), K(l))} = <span class="highlight">${K(4 * t * a / l)}</span></div>
      <div>${M} = ${$e("4\xB7" + K(t) + "\xB7" + K(n), K(l))} = <span class="highlight">${K(4 * t * n / l)}</span></div>
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${$e(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${$e("\u2212" + F("EA"), F("L"))}</span>
        <span class="cell">0</span><span class="cell">${$e("12" + F("EI", "z"), F("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${$e("\u2212" + F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${$e(F("EA"), F("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Rs(t) {
      if (t.length === 2) {
        const n = Qt(t[1], t[0]), a = go(n), s = n[0] / a, p = n[1] / a, l = n[2] / a;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${$e("\u0394x", F("L"))} = ${$e(K(n[0]), K(a))} = <span class="highlight">${K(s)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${$e("\u0394y", F("L"))} = ${$e(K(n[1]), K(a))} = <span class="highlight">${K(p)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${$e("\u0394z", F("L"))} = ${$e(K(n[2]), K(a))} = <span class="highlight">${K(l)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${$e("\u2212" + F("m"), F("D"))}</span><span class="cell">${$e(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${$e("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${$e("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Hs() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function Bs(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Ds(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${$e("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${$e(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function $n(t, o) {
      const n = t.length;
      let a = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) a += `<td class="hdr">${o[s] || s}</td>`;
      a += "</tr>";
      for (let s = 0; s < n; s++) {
        a += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let p = 0; p < n; p++) {
          const l = t[s][p], d = (s === p ? "diag " : "") + (Math.abs(l) > 1e-10 ? "nz" : "");
          a += `<td class="${d}">${K(l, 2)}</td>`;
        }
        a += "</tr>";
      }
      return a += "</table>", a;
    }
    function cs() {
      const t = "0", o = $e(F("EA"), F("L")), n = $e("\u2212" + F("EA"), F("L")), a = $e("12" + F("EI", "z"), F("L") + "\xB3"), s = $e("\u221212" + F("EI", "z"), F("L") + "\xB3"), p = $e("12" + F("EI", "y"), F("L") + "\xB3"), l = $e("\u221212" + F("EI", "y"), F("L") + "\xB3"), d = $e("6" + F("EI", "z"), F("L") + "\xB2"), m = $e("\u22126" + F("EI", "z"), F("L") + "\xB2"), c = $e("6" + F("EI", "y"), F("L") + "\xB2"), i = $e("\u22126" + F("EI", "y"), F("L") + "\xB2"), b = $e(F("GJ"), F("L")), M = $e("\u2212" + F("GJ"), F("L")), w = $e("4" + F("EI", "z"), F("L")), v = $e("2" + F("EI", "z"), F("L")), f = $e("4" + F("EI", "y"), F("L")), x = $e("2" + F("EI", "y"), F("L")), k = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
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
      ], H = [
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
          a,
          t,
          t,
          t,
          d,
          t,
          s,
          t,
          t,
          t,
          d
        ],
        [
          t,
          t,
          p,
          t,
          i,
          t,
          t,
          t,
          l,
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
          c,
          t,
          x,
          t
        ],
        [
          t,
          d,
          t,
          t,
          t,
          w,
          t,
          m,
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
          m,
          t,
          a,
          t,
          t,
          t,
          m
        ],
        [
          t,
          t,
          l,
          t,
          c,
          t,
          t,
          t,
          p,
          t,
          c,
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
          x,
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
          d,
          t,
          t,
          t,
          v,
          t,
          m,
          t,
          t,
          t,
          w
        ]
      ];
      let y = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      y += '<table><tr><td class="hdr"></td>';
      for (const u of I) y += `<td class="hdr">${u}</td>`;
      y += "</tr>";
      for (let u = 0; u < 12; u++) {
        y += `<tr><td class="hdr">${L[u]}</td>`;
        for (let r = 0; r < 12; r++) if (r < u) y += `<td style="color:var(--fem-border-cell)">${r === 0 && u > 0 ? k : ""}</td>`;
        else {
          const g = H[u][r], $ = (u === r ? "diag " : "") + (g !== "0" ? "nz" : "");
          y += `<td class="${$}">${g}</td>`;
        }
        y += "</tr>";
      }
      return y += "</table>", y;
    }
    function js(t, o, n, a, s, p, l) {
      return `<div class="coeff-grid">${[
        {
          name: `${$e(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${$e(K(t) + "\xD7" + K(o), K(l))}`,
          val: t * o / l,
          label: "Axial"
        },
        {
          name: `${$e("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${$e("12\xD7" + K(t) + "\xD7" + K(n), K(l) + "\xB3")}`,
          val: 12 * t * n / l ** 3,
          label: "Corte Y"
        },
        {
          name: `${$e("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${$e("6\xD7" + K(t) + "\xD7" + K(n), K(l) + "\xB2")}`,
          val: 6 * t * n / l ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${$e("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${$e("12\xD7" + K(t) + "\xD7" + K(a), K(l) + "\xB3")}`,
          val: 12 * t * a / l ** 3,
          label: "Corte Z"
        },
        {
          name: `${$e("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${$e("6\xD7" + K(t) + "\xD7" + K(a), K(l) + "\xB2")}`,
          val: 6 * t * a / l ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${$e(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${$e(K(s) + "\xD7" + K(p), K(l))}`,
          val: s * p / l,
          label: "Torsi\xF3n"
        },
        {
          name: `${$e("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${$e("4\xD7" + K(t) + "\xD7" + K(n), K(l))}`,
          val: 4 * t * n / l,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${$e("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${$e("2\xD7" + K(t) + "\xD7" + K(n), K(l))}`,
          val: 2 * t * n / l,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${$e("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${$e("4\xD7" + K(t) + "\xD7" + K(a), K(l))}`,
          val: 4 * t * a / l,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${$e("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${$e("2\xD7" + K(t) + "\xD7" + K(a), K(l))}`,
          val: 2 * t * a / l,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((m) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${m.label}</div>${m.name} = ${m.calc} = <span class="highlight">${K(m.val)}</span></div>`).join("")}</div>`;
    }
    function wn(t, o, n, a) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const p = document.createElement("div");
      p.className = "fem-full-overlay", p.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${t}</h2>
      <div class="fem-full-sections">
        <div class="full-section">
          <div class="side-title">\u2460 F\xF3rmula General (simb\xF3lica)</div>
          <div class="fem-full-sym">${o}</div>
        </div>
        ${a ? `<div class="full-section coeff">
          <div class="side-title">\u2461 C\xE1lculo de Coeficientes (sustituci\xF3n num\xE9rica)</div>
          ${a}
        </div>` : ""}
        <div class="full-section numeric">
          <div class="side-title">${a ? "\u2462" : "\u2461"} Matriz Num\xE9rica Resultante</div>
          ${n}
        </div>
      </div>
    `, document.body.appendChild(p), (_a2 = p.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => p.remove()), p.addEventListener("click", (l) => {
        l.target === p && p.remove();
      });
    }
    function ds(t) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Gt && Gt.remove();
      const o = e.nodes.val, n = e.elements.val, a = n[t], s = a.map((u) => o[u]), p = a.length === 2, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, d = (_b = e.deformOutputs) == null ? void 0 : _b.val, m = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (p) {
        const u = go(Qt(s[1], s[0])), r = ((_d = l.elasticities) == null ? void 0 : _d.get(t)) ?? 0, g = ((_e = l.areas) == null ? void 0 : _e.get(t)) ?? 0, $ = ((_f = l.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, T = ((_g = l.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, N = ((_h = l.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, q = ((_i = l.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${a[0]}${a[1]}${K(u)}${K(r)}${K(g)}${K($)}${K(T)}${K(N)}${K(q)}`;
      } else {
        const u = ((_j = l.elasticities) == null ? void 0 : _j.get(t)) ?? 0, r = ((_k = l.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, g = ((_l = l.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${a.join(", ")}${K(u)}${K(r)}${K(g)}`;
      }
      let c = "", i = "", b = "", M = "", w = "", v = "", f = "", x = "", k = null, L = null, I = null, H = [];
      try {
        if (k = Ko(s, l, t), L = Uo(s), I = Bt(An(L), Bt(k, L)), H = p ? [
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
        ], p) {
          const $ = go(Qt(s[1], s[0])), T = ((_m = l.elasticities) == null ? void 0 : _m.get(t)) ?? 0, N = ((_n2 = l.areas) == null ? void 0 : _n2.get(t)) ?? 0, q = ((_o2 = l.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, C = ((_p = l.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = l.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, A = ((_r = l.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          M = _s(T, N, q, C, P, A, $);
        }
        w = Rs(s), v = Hs(), f = Bs(a), x = Ds(p);
        const u = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', r = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', g = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        c = `<div class="matrix-label">k_local (${k.length}\xD7${k.length}) ${u}</div>${yn(k, H)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${L.length}\xD7${L.length}) ${r}</div>${yn(L, H)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${g}</div>${yn(I, H)}`;
      } catch (u) {
        c = `<div style="color:red">Error: ${u.message}</div>`;
      }
      if (d == null ? void 0 : d.deformations) {
        const u = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        a.map((r, g) => {
          var _a3;
          const $ = ((_a3 = d.deformations) == null ? void 0 : _a3.get(r)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], T = u.map((N, q) => `<span class="prop-key">${N}</span>: <span class="${Math.abs($[q]) > 1e-10 ? "result-val" : ""}">${K($[q])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${r}:</strong> ${T}</div>`;
        }).join("");
      }
      if (m && p && (d == null ? void 0 : d.deformations) && k && L) {
        const u = (_s2 = m.normals) == null ? void 0 : _s2.get(t), r = (_t2 = m.shearsY) == null ? void 0 : _t2.get(t), g = (_u = m.shearsZ) == null ? void 0 : _u.get(t), $ = (_v = m.torsions) == null ? void 0 : _v.get(t), T = (_w = m.bendingsY) == null ? void 0 : _w.get(t), N = (_x = m.bendingsZ) == null ? void 0 : _x.get(t), q = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], C = [];
        for (const oe of a) {
          const U = ((_y = d.deformations) == null ? void 0 : _y.get(oe)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C.push(...U);
        }
        let P = [];
        try {
          P = Bt(L, C);
        } catch {
          P = new Array(12).fill(0);
        }
        let A = [];
        try {
          A = Bt(k, P);
        } catch {
          A = new Array(12).fill(0);
        }
        const Z = (oe, U) => oe.map((ae, we) => `<span style="color:${Math.abs(ae) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${U[we % 6]}=${K(ae)}</span>`).join(", "), ne = [
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
        ].map((oe, U) => `${oe}${U < 6 ? "\u1D62" : "\u2C7C"}`);
        `${F("u", "global")}${a.map((oe, U) => `<span style="color:var(--fem-label)">nodo ${oe}:</span> ${q.map((ae, we) => `<span style="color:${Math.abs(C[U * 6 + we]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${K(C[U * 6 + we])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${Z(P, [
          ...q,
          ...q
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${A.map((oe, U) => `<span style="color:${Math.abs(oe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ne[U]}=${K(oe)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${K(A[0])}${F("P", "7")}${F("N", "j")}${K(A[6])}${F("P", "2")}${F("V", "y,i")}${K(A[1])}${F("P", "8")}${F("V", "y,j")}${K(A[7])}${F("P", "3")}${F("V", "z,i")}${K(A[2])}${F("P", "9")}${F("V", "z,j")}${K(A[8])}${F("P", "4")}${F("M", "x,i")}${K(A[3])}${F("P", "10")}${F("M", "x,j")}${K(A[9])}${F("P", "5")}${F("M", "y,i")}${K(A[4])}${F("P", "11")}${F("M", "y,j")}${K(A[10])}${F("P", "6")}${F("M", "z,i")}${K(A[5])}${F("P", "12")}${F("M", "z,j")}${K(A[11])}${u ? u.map((oe) => K(oe)).join(", ") : "\u2014"}${r ? r.map((oe) => K(oe)).join(", ") : "\u2014"}${g ? g.map((oe) => K(oe)).join(", ") : "\u2014"}${$ ? $.map((oe) => K(oe)).join(", ") : "\u2014"}${T ? T.map((oe) => K(oe)).join(", ") : "\u2014"}${N ? N.map((oe) => K(oe)).join(", ") : "\u2014"}`;
      } else if (m && p) {
        const u = (_z = m.normals) == null ? void 0 : _z.get(t), r = (_A = m.shearsY) == null ? void 0 : _A.get(t), g = (_B = m.shearsZ) == null ? void 0 : _B.get(t), $ = (_C = m.torsions) == null ? void 0 : _C.get(t), T = (_D = m.bendingsY) == null ? void 0 : _D.get(t), N = (_E = m.bendingsZ) == null ? void 0 : _E.get(t);
        `${u ? u.map((q) => K(q)).join(", ") : "\u2014"}${r ? r.map((q) => K(q)).join(", ") : "\u2014"}${g ? g.map((q) => K(q)).join(", ") : "\u2014"}${$ ? $.map((q) => K(q)).join(", ") : "\u2014"}${T ? T.map((q) => K(q)).join(", ") : "\u2014"}${N ? N.map((q) => K(q)).join(", ") : "\u2014"}`;
      } else if (m && !p) {
        const u = (_F = m.bendingXX) == null ? void 0 : _F.get(t), r = (_G = m.bendingYY) == null ? void 0 : _G.get(t), g = (_H = m.bendingXY) == null ? void 0 : _H.get(t), $ = (_I = m.membraneXX) == null ? void 0 : _I.get(t), T = (_J = m.membraneYY) == null ? void 0 : _J.get(t), N = (_K = m.membraneXY) == null ? void 0 : _K.get(t);
        `${u ? u.map((q) => K(q)).join(", ") : "\u2014"}${r ? r.map((q) => K(q)).join(", ") : "\u2014"}${g ? g.map((q) => K(q)).join(", ") : "\u2014"}${$ ? $.map((q) => K(q)).join(", ") : "\u2014"}${T ? T.map((q) => K(q)).join(", ") : "\u2014"}${N ? N.map((q) => K(q)).join(", ") : "\u2014"}`;
      }
      `${a[0]}`, 6 * a[0], 6 * a[0] + 5, `${a[1]}`, 6 * a[1], 6 * a[1] + 5, a.length === 3 && (`${a[2]}`, 6 * a[2], 6 * a[2] + 5), o.length * 6, o.length * 6, Gt = Ma(t, o, n, l, d, m), Gt.id = "fem-inspect-panel", document.body.appendChild(Gt), (_L = Gt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => uo());
      const y = p ? (() => {
        var _a3, _b2, _c2, _d2, _e2, _f2;
        const u = go(Qt(s[1], s[0])), r = ((_a3 = l.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, g = ((_b2 = l.areas) == null ? void 0 : _b2.get(t)) ?? 0, $ = ((_c2 = l.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, T = ((_d2 = l.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, N = ((_e2 = l.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, q = ((_f2 = l.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return js(r, g, $, T, N, q, u);
      })() : void 0;
      Gt.querySelectorAll("[data-full]").forEach((u) => {
        u.addEventListener("click", (r) => {
          r.stopPropagation();
          const g = u.dataset.full;
          if (g === "kLocal" && k) {
            const $ = p ? cs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            wn(`Elemento ${t} \u2014 Rigidez Local k_local`, $, $n(k, H), y);
          } else if (g === "T" && L) wn(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, $n(L, H));
          else if (g === "kGlobal" && I) {
            const $ = p ? cs() : "<em>Shell 18\xD718</em>";
            wn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, $, $n(I, H), y);
          }
        });
      });
    }
    function ps() {
      const a = [], s = [];
      for (let v = 0; v <= 8; v++) {
        const f = v / 8, x = 30 * f, L = 12 * (1 - f) * (1 - f * 0.3) / 2, I = a.length;
        if (a.push([
          -L,
          -L,
          x
        ]), a.push([
          L,
          -L,
          x
        ]), a.push([
          L,
          L,
          x
        ]), a.push([
          -L,
          L,
          x
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
        ]), v > 0 && v < 8 && (s.push([
          I,
          I + 2
        ]), s.push([
          I + 1,
          I + 3
        ])), v > 0) {
          const H = I - 4;
          for (let y = 0; y < 4; y++) s.push([
            H + y,
            I + y
          ]);
          s.push([
            H,
            I + 1
          ]), s.push([
            H + 1,
            I + 2
          ]), s.push([
            H + 2,
            I + 3
          ]), s.push([
            H + 3,
            I
          ]);
        }
      }
      const p = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) p.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const l = a.length - 4, d = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) d.set(l + v, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: d
      });
      const m = 2e8, c = 77e6, i = 5e-3, b = 2e-6, M = 1e-6, w = {
        elasticities: new Map(s.map((v, f) => [
          f,
          m
        ])),
        shearModuli: new Map(s.map((v, f) => [
          f,
          c
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
        const v = Rt(a, s, {
          supports: p,
          loads: d
        }, w);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Eiffel deform:", v.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Torre Eiffel: ${a.length} nodos, ${s.length} elementos, H=30m`);
    }
    function fs() {
      const a = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const v = w / 20, f = 20 * v, x = 20 * (1 - Math.pow(2 * v - 1, 2)), k = 2;
        a.push([
          f,
          -2 / 2,
          x
        ]), a.push([
          f,
          k / 2,
          x
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
      const p = /* @__PURE__ */ new Map();
      p.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), p.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), p.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), p.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const l = /* @__PURE__ */ new Map();
      for (let w = 0; w <= 20; w++) l.set(w * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), l.set(w * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: l
      });
      const d = 2e8, m = 77e6, c = 0.01, i = 5e-6, b = 2e-6, M = {
        elasticities: new Map(s.map((w, v) => [
          v,
          d
        ])),
        shearModuli: new Map(s.map((w, v) => [
          v,
          m
        ])),
        areas: new Map(s.map((w, v) => [
          v,
          c
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
        const w = Rt(a, s, {
          supports: p,
          loads: l
        }, M);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Arco Gateway: ${a.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function us() {
      const p = [], l = [];
      for (let f = 0; f <= 16; f++) {
        const x = 60 * f / 16;
        p.push([
          x,
          -6 / 2,
          8
        ]), p.push([
          x,
          6 / 2,
          8
        ]);
      }
      const d = p.length;
      for (let f = 0; f < 16; f++) l.push([
        f * 2,
        (f + 1) * 2
      ]), l.push([
        f * 2 + 1,
        (f + 1) * 2 + 1
      ]), l.push([
        f * 2,
        f * 2 + 1
      ]);
      l.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const m = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], c = [];
      for (const f of m) {
        const x = 60 * f / 16, k = p.length;
        p.push([
          x,
          -6 / 2,
          0
        ]);
        const L = p.length;
        p.push([
          x,
          6 / 2,
          0
        ]);
        const I = p.length;
        p.push([
          x,
          -6 / 2,
          28
        ]);
        const H = p.length;
        p.push([
          x,
          6 / 2,
          28
        ]), c.push(I, H), l.push([
          k,
          f * 2
        ]), l.push([
          f * 2,
          I
        ]), l.push([
          L,
          f * 2 + 1
        ]), l.push([
          f * 2 + 1,
          H
        ]), l.push([
          I,
          H
        ]);
      }
      for (const f of c) {
        const x = p[f][0];
        for (let k = 0; k <= 16; k++) {
          const L = 60 * k / 16;
          if (Math.abs(L - x) > 60 * 0.05 && Math.abs(L - x) < 60 * 0.45) {
            const I = p[f][1] < 0 ? k * 2 : k * 2 + 1;
            k % 2 === 0 && l.push([
              f,
              I
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
      for (let f = d; f < d + m.length * 4; f += 4) i.set(f, [
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
      e.nodes.val = p, e.elements.val = l, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: b
      });
      const M = 2e8, w = 77e6, v = {
        elasticities: new Map(l.map((f, x) => [
          x,
          M
        ])),
        shearModuli: new Map(l.map((f, x) => [
          x,
          w
        ])),
        areas: new Map(l.map((f, x) => [
          x,
          x < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(l.map((f, x) => [
          x,
          5e-5
        ])),
        momentsOfInertiaY: new Map(l.map((f, x) => [
          x,
          2e-5
        ])),
        torsionalConstants: new Map(l.map((f, x) => [
          x,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const f = Rt(p, l, {
          supports: i,
          loads: b
        }, v);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Puente atirantado: ${p.length} nodos, ${l.length} elem, span=60m`);
    }
    function ms() {
      const p = [], l = [];
      for (let x = 0; x <= 12; x++) {
        const k = x * 3.5, L = x * 5 * Math.PI / 180;
        for (let I = 0; I < 6; I++) {
          const H = L + 2 * Math.PI * I / 6, y = 5 * Math.cos(H), u = 5 * Math.sin(H);
          p.push([
            y,
            u,
            k
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const k = x * 6;
        for (let L = 0; L < 6; L++) l.push([
          k + L,
          k + (L + 1) % 6
        ]);
        if (x < 12) {
          const L = (x + 1) * 6;
          for (let I = 0; I < 6; I++) l.push([
            k + I,
            L + I
          ]), l.push([
            k + I,
            L + (I + 1) % 6
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const k = p.length;
        p.push([
          0,
          0,
          x * 3.5
        ]);
        const L = x * 6;
        for (let I = 0; I < 6; I++) l.push([
          k,
          L + I
        ]);
      }
      const d = 13 * 6;
      for (let x = 0; x < 12; x++) l.push([
        d + x,
        d + x + 1
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let x = 0; x < 6; x++) m.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      m.set(d, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 12; x++) {
        const k = 10 * x / 12, L = x * 6;
        for (let I = 0; I < 6; I++) c.set(L + I, [
          k,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = p, e.elements.val = l, e.nodeInputs && (e.nodeInputs.val = {
        supports: m,
        loads: c
      });
      const i = 2e8, b = 77e6, M = 8e-3, w = 1e-5, v = 5e-6, f = {
        elasticities: new Map(l.map((x, k) => [
          k,
          i
        ])),
        shearModuli: new Map(l.map((x, k) => [
          k,
          b
        ])),
        areas: new Map(l.map((x, k) => [
          k,
          M
        ])),
        momentsOfInertiaZ: new Map(l.map((x, k) => [
          k,
          w
        ])),
        momentsOfInertiaY: new Map(l.map((x, k) => [
          k,
          w
        ])),
        torsionalConstants: new Map(l.map((x, k) => [
          k,
          v
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const x = Rt(p, l, {
          supports: m,
          loads: c
        }, f);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Twisted:", x.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Torre Twist: ${p.length} nodos, ${l.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function bs() {
      const s = [], p = [];
      for (let f = 0; f <= 20; f++) {
        const x = f / 20, k = f * 3;
        let L = 8 * (1 - x * 0.7);
        x > 0.4 && (L *= 0.85), x > 0.7 && (L *= 0.7);
        const I = s.length;
        s.push([
          0,
          0,
          k
        ]);
        for (let H = 0; H < 3; H++) {
          const y = H * 2 * Math.PI / 3 - Math.PI / 2, u = L * Math.cos(y), r = L * Math.sin(y), g = s.length;
          s.push([
            u,
            r,
            k
          ]), p.push([
            I,
            g
          ]);
          const $ = s.length;
          s.push([
            u * 0.5,
            r * 0.5,
            k
          ]), p.push([
            I,
            $
          ]), p.push([
            $,
            g
          ]);
        }
        for (let H = 0; H < 3; H++) {
          const y = I + 1 + H * 2, u = I + 1 + (H + 1) % 3 * 2;
          p.push([
            y,
            u
          ]);
        }
        if (f < 20) {
          const y = I + 7;
          p.push([
            I,
            y
          ]);
          for (let u = 0; u < 3; u++) p.push([
            I + 1 + u * 2,
            y + 1 + u * 2
          ]), p.push([
            I + 2 + u * 2,
            y + 2 + u * 2
          ]), p.push([
            I + 1 + u * 2,
            y + 2 + u * 2
          ]);
        }
      }
      const l = /* @__PURE__ */ new Map(), d = 1 + 3 * 2;
      for (let f = 0; f < d; f++) l.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const x = f * d, k = 5 * f / 20;
        m.set(x, [
          k,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: l,
        loads: m
      });
      const c = 35e6, i = 14e6, b = 0.02, M = 5e-5, w = 2e-5, v = {
        elasticities: new Map(p.map((f, x) => [
          x,
          c
        ])),
        shearModuli: new Map(p.map((f, x) => [
          x,
          i
        ])),
        areas: new Map(p.map((f, x) => [
          x,
          b
        ])),
        momentsOfInertiaZ: new Map(p.map((f, x) => [
          x,
          M
        ])),
        momentsOfInertiaY: new Map(p.map((f, x) => [
          x,
          M
        ])),
        torsionalConstants: new Map(p.map((f, x) => [
          x,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const f = Rt(s, p, {
          supports: l,
          loads: m
        }, v);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Burj Khalifa: ${s.length} nodos, ${p.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function hs() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const M = b * 12, w = 15 - b * 2, v = 20 - b * 3, f = 8 - b, x = t.length;
        for (let L = 0; L <= 4; L++) {
          const I = L / 4, H = -f / 2 + f * I, y = v * (1 - I * I * 0.3);
          for (let u = 0; u <= 12; u++) {
            const r = u / 12, g = M + y * r, $ = w * Math.sin(Math.PI * r) * (1 - I * I * 0.5), T = H;
            t.push([
              g,
              T,
              $
            ]);
          }
        }
        const k = 13;
        for (let L = 0; L < 4; L++) for (let I = 0; I < 12; I++) {
          const H = x + L * k + I, y = x + L * k + I + 1, u = x + (L + 1) * k + I + 1, r = x + (L + 1) * k + I;
          o.push([
            H,
            y,
            u,
            r
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
      const p = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && p.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: p
      });
      const l = 35e6, d = 0.2, m = 0.15, c = l / (2 * (1 + d)), i = {
        elasticities: new Map(o.map((b, M) => [
          M,
          l
        ])),
        poissonsRatios: new Map(o.map((b, M) => [
          M,
          d
        ])),
        thicknesses: new Map(o.map((b, M) => [
          M,
          m
        ])),
        shearModuli: new Map(o.map((b, M) => [
          M,
          c
        ]))
      };
      e.elementInputs && (e.elementInputs.val = i);
      try {
        const b = Rt(t, o, {
          supports: s,
          loads: p
        }, i);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function gs() {
      const a = [], s = [];
      for (let v = 0; v <= 15; v++) {
        const f = v / 15, x = v * 3.5, k = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const L = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let I = 0; I < 12; I++) {
            const H = 2 * Math.PI * I / 12;
            a.push([
              Math.max(L, 1) * Math.cos(H),
              Math.max(L, 1) * Math.sin(H),
              x
            ]);
          }
        } else for (let L = 0; L < 12; L++) {
          const I = 2 * Math.PI * L / 12;
          a.push([
            k * Math.cos(I),
            k * Math.sin(I),
            x
          ]);
        }
      }
      for (let v = 0; v < 15; v++) {
        const f = v * 12, x = (v + 1) * 12;
        for (let L = 0; L < 12; L++) s.push([
          f + L,
          f + (L + 1) % 12
        ]);
        const k = v % 2 === 0 ? 1 : -1;
        for (let L = 0; L < 12; L++) {
          const I = (L + k + 12) % 12;
          s.push([
            f + L,
            x + I
          ]), s.push([
            f + L,
            x + L
          ]);
        }
      }
      const p = 15 * 12;
      for (let v = 0; v < 12; v++) s.push([
        p + v,
        p + (v + 1) % 12
      ]);
      const l = /* @__PURE__ */ new Map();
      for (let v = 0; v < 12; v++) l.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let v = 1; v <= 15; v++) {
        const f = v * 12, x = 3 * v / 15;
        for (let k = 0; k < 12; k += 3) d.set(f + k, [
          x,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: l,
        loads: d
      });
      const m = 2e8, c = 77e6, i = 6e-3, b = 8e-6, M = 4e-6, w = {
        elasticities: new Map(s.map((v, f) => [
          f,
          m
        ])),
        shearModuli: new Map(s.map((v, f) => [
          f,
          c
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
        const v = Rt(a, s, {
          supports: l,
          loads: d
        }, w);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Diagrid:", v.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Diagrid Tower: ${a.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Ws() {
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
    function Ys() {
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
        const o = (x) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${x}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), a = o("po-colH"), s = o("po-fc") * 1e3, p = o("po-fy") * 1e3, l = o("po-H"), d = o("po-L"), m = o("po-As") * 1e-4, c = o("po-nbar"), i = o("po-drift") / 100, b = o("po-ncycles"), M = t.querySelector("#pushover-status");
        M.textContent = "Generando historia de desplazamientos...";
        const w = [], v = i * l, f = 40;
        for (let x = 1; x <= b; x++) {
          const k = v * x / b;
          for (let L = 0; L <= f; L++) w.push(k * Math.sin(2 * Math.PI * L / f));
        }
        M.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: x } = await Zs(async () => {
            const { cyclicPushover: L } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: L
            };
          }, __vite__mapDeps([0,1]), import.meta.url), k = await x({
            colHeight: l,
            beamLength: d,
            col: {
              b: n,
              h: a,
              fpc: -s,
              Fy_rebar: p,
              E_rebar: 2e8,
              rebar_area: m,
              cover: 0.04,
              n_rebar: c
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: p,
              E_rebar: 2e8,
              rebar_area: m * 0.7,
              cover: 0.03,
              n_rebar: c
            },
            dispHistory: w
          });
          M.textContent = `Completado: ${k.nSteps} pasos`, Gs(t.querySelector("#pushover-canvas"), k.displacements, k.forces, `Pushover: ${n * 100}x${a * 100}cm, f'c=${s / 1e3}MPa, Fy=${p / 1e3}MPa`);
        } catch (x) {
          M.textContent = `Error: ${x.message}`, console.error("Pushover failed:", x);
        }
      });
    }
    function Gs(t, o, n, a) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const p = t.width, l = t.height, d = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, m = p - d.left - d.right, c = l - d.top - d.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, p, l);
      let i = Math.min(...o), b = Math.max(...o), M = Math.min(...n), w = Math.max(...n);
      i === b && (i -= 0.01, b += 0.01), M === w && (M -= 1, w += 1);
      const v = b - i, f = w - M, x = (H) => d.left + (H - i) / v * m, k = (H) => d.top + c - (H - M) / f * c;
      s.strokeStyle = "#333", s.lineWidth = 0.5, i < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(x(0), d.top), s.lineTo(x(0), d.top + c), s.stroke()), M < 0 && w > 0 && (s.beginPath(), s.moveTo(d.left, k(0)), s.lineTo(d.left + m, k(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(x(o[0]), k(n[0]));
      for (let H = 1; H < o.length; H++) s.lineTo(x(o[H]), k(n[H]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", d.left + m / 2, l - 5), s.save(), s.translate(12, d.top + c / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(a, p / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const L = v / 5;
      for (let H = 0; H <= 5; H++) {
        const y = i + L * H;
        s.fillText((y * 1e3).toFixed(1), x(y), l - d.bottom + 15);
      }
      s.textAlign = "right";
      const I = f / 5;
      for (let H = 0; H <= 5; H++) {
        const y = M + I * H;
        s.fillText(y.toFixed(0), d.left - 5, k(y) + 3);
      }
    }
    let Co = null;
    function Js() {
      if (Co) {
        Co.remove(), Co = null;
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
    `, document.body.appendChild(t), Co = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), Co = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Vs(t));
    }
    function Vs(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), a = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), p = parseFloat(t.querySelector("#nl-amp").value), l = parseInt(t.querySelector("#nl-cycles").value), d = 100, m = [];
      for (let Q = 0; Q < l; Q++) {
        const ne = p * (1 + Q * 0.5);
        for (let oe = 0; oe < d; oe++) {
          const U = oe / d * 2 * Math.PI;
          m.push(ne * Math.sin(U));
        }
      }
      const c = o / n, i = a * n;
      let b = 0, M = 0, w = -c, v = c, f = 0, x = 0, k = 0, L = 0, I = 0, H = 0;
      const y = [];
      for (const Q of m) {
        let ne = w, oe = v, U = f, ae = x, we = k, _e = L, Ne = I, le = H, xe;
        const Me = Q - b;
        if (Math.abs(Me) < 1e-20) {
          y.push(M);
          continue;
        }
        if ((le === 0 || le === 3) && (Me < 0 ? (le = 2, ae = -c, we = -o, U = ae, _e = 0, Ne = 0) : (le = 1, ae = c, we = o, U = ae, _e = 0, Ne = 0)), le === 2 && Me > 0) {
          le = 1, _e = b, Ne = M, b < ne && (ne = b);
          const Ee = (oe - ne) / (2 * 1 * c), He = 1 + 0 * Math.pow(Ee, 0.8);
          ae = (o * He - i * c * He - Ne + n * _e) / (n - i), we = o * He + i * (ae - c * He), U = oe;
        } else if (le === 1 && Me < 0) {
          le = 2, _e = b, Ne = M, b > oe && (oe = b);
          const Ee = (oe - ne) / (2 * 1 * c), He = 1 + 0 * Math.pow(Ee, 0.8);
          ae = (-o * He + i * c * He - Ne + n * _e) / (n - i), we = -o * He + i * (ae + c * He), U = ne;
        }
        const fe = Math.abs((U - ae) / c);
        let Le = s - 0.925 * fe / (0.15 + fe);
        Le < 0.1 && (Le = 0.1);
        const Oe = (Q - _e) / (ae - _e), et = 1 + Math.pow(Math.abs(Oe), Le), se = Math.pow(et, 1 / Le);
        xe = a * Oe + (1 - a) * Oe / se, xe = xe * (we - Ne) + Ne, y.push(xe), b = Q, M = xe, w = ne, v = oe, f = U, x = ae, k = we, L = _e, I = Ne, H = le;
      }
      const u = t.querySelector("#nl-canvas"), r = u.getContext("2d"), g = u.width, $ = u.height;
      r.clearRect(0, 0, g, $);
      const T = Math.max(...m.map(Math.abs)), N = Math.max(...y.map(Math.abs)), q = (g - 40) / (2 * T), C = ($ - 40) / (2 * N), P = g / 2, A = $ / 2;
      r.strokeStyle = "#444", r.lineWidth = 1, r.beginPath(), r.moveTo(20, A), r.lineTo(g - 20, A), r.stroke(), r.beginPath(), r.moveTo(P, 20), r.lineTo(P, $ - 20), r.stroke(), r.fillStyle = "#888", r.font = "10px monospace", r.textAlign = "center", r.fillText("\u03B5 (strain)", g - 40, A - 5), r.fillText("\u03C3 (stress)", P + 30, 15), r.fillText(`\xB1${(T * 100).toFixed(1)}%`, g - 30, A + 12), r.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), r.strokeStyle = "#00ccff", r.lineWidth = 1.5, r.beginPath();
      for (let Q = 0; Q < m.length; Q++) {
        const ne = P + m[Q] * q, oe = A - y[Q] * C;
        Q === 0 ? r.moveTo(ne, oe) : r.lineTo(ne, oe);
      }
      r.stroke(), r.strokeStyle = "#ff333366", r.lineWidth = 1, r.setLineDash([
        4,
        4
      ]), r.beginPath(), r.moveTo(20, A - o * C), r.lineTo(g - 20, A - o * C), r.stroke(), r.beginPath(), r.moveTo(20, A + o * C), r.lineTo(g - 20, A + o * C), r.stroke(), r.setLineDash([]), r.fillStyle = "#ff6666", r.font = "9px monospace", r.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, g - 50, A - o * C - 5);
      const Z = t.querySelector("#nl-info");
      Z.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${a}, R\u2080=${s} \u2014 ${l} ciclos, amp=${(p * 100).toFixed(1)}%`;
    }
    function Xs() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, p = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const l = ga({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: a,
        deformOutputs: p
      });
      document.body.appendChild(l);
    }
    let Mo = null;
    function Ks(t) {
      Mo && Mo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Go(), a = Jo(), s = Object.entries(n).map(([c, i]) => `<option value="${i}">${c}</option>`).join(""), p = Object.entries(a).map(([c, i]) => `<option value="${i}">${c}</option>`).join("");
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
    `, document.body.appendChild(o), Mo = o;
      const l = o.querySelector("#asgn-type"), d = o.querySelector("#asgn-params");
      function m() {
        const c = l.value;
        let i = "";
        c === "rect" ? i = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : c === "circ" ? i = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : c === "W" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : c === "HSS" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${p}</select>` : c === "I-param" ? i = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : c === "tubular" && (i = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), d.innerHTML = i;
      }
      l.addEventListener("change", m), m(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Mo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const c = l.value, i = {
          secType: c
        };
        c === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : c === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : c === "W" || c === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : c === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : c === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((b) => pe.set(b, {
          ...i
        })), o.remove(), Mo = null, eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((c) => pe.delete(c)), o.remove(), Mo = null, eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let So = null;
    function Us(t) {
      var _a2, _b, _c;
      So && So.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const a = o[n[0]], s = o[n[1]], p = Math.abs(s[0] - a[0]), l = Math.abs(s[1] - a[1]), d = Math.abs(s[2] - a[2]), m = l > p && l > d, c = Math.sqrt(p * p + l * l + d * d), i = Ce.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), M = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${m ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${i + 1} &nbsp;
        <span style="color:#888;">L:</span> ${c.toFixed(3)} m
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
    `, document.body.appendChild(w), So = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), So = null, uo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        G.add(t), w.remove(), So = null, uo(), be();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), So = null, ds(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, a = null;
      const s = 5;
      function p(m) {
        const c = Qe();
        if (!c) return null;
        const i = c.controls.object, b = new Se(m[0], m[1], m[2]);
        b.project(i);
        const M = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * M.width,
          y: (-b.y + 1) / 2 * M.height
        };
      }
      function l(m, c, i, b, M) {
        const w = Math.min(m, i), v = Math.max(m, i), f = Math.min(c, b), x = Math.max(c, b), k = e.nodes.val, L = e.elements.val, I = [];
        for (let H = 0; H < L.length; H++) {
          const y = L[H], u = y.map((r) => p(k[r])).filter(Boolean);
          if (u.length !== 0) if (M) u.every((g) => g.x >= w && g.x <= v && g.y >= f && g.y <= x) && I.push(H);
          else {
            if (u.some((g) => g.x >= w && g.x <= v && g.y >= f && g.y <= x)) {
              I.push(H);
              continue;
            }
            if (y.length === 2) {
              const g = u[0], $ = u[1];
              d(g.x, g.y, $.x, $.y, w, f, v, x) && I.push(H);
            }
          }
        }
        return I;
      }
      function d(m, c, i, b, M, w, v, f) {
        const x = (L, I) => L >= M && L <= v && I >= w && I <= f;
        if (x(m, c) || x(i, b)) return true;
        const k = (L, I, H, y, u, r, g, $) => {
          const T = (H - L) * ($ - r) - (y - I) * (g - u);
          if (Math.abs(T) < 1e-10) return false;
          const N = ((u - L) * ($ - r) - (r - I) * (g - u)) / T, q = ((u - L) * (y - I) - (r - I) * (H - L)) / T;
          return N >= 0 && N <= 1 && q >= 0 && q <= 1;
        };
        return k(m, c, i, b, M, w, v, w) || k(m, c, i, b, v, w, v, f) || k(m, c, i, b, M, f, v, f) || k(m, c, i, b, M, w, M, f);
      }
      o.addEventListener("mousedown", (m) => {
        Ct && (n = {
          x: m.offsetX,
          y: m.offsetY
        });
      }), o.addEventListener("mousemove", (m) => {
        if (Yt) {
          const i = Qe();
          if (!i) return;
          const b = as(m.clientX, m.clientY, i.camera, i.rendererElm);
          if (ct.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== fo && Fs(b.nodeIdx), ct.track && fo !== null && b.worldPos && b.snapType !== "node") {
            const M = Ps(b.worldPos, fo);
            M && (b.worldPos = M, b.snapType = "grid");
          }
          if (fo !== null && b.worldPos) {
            const M = e.nodes.val[fo];
            M && ss(m.clientX, m.clientY, new Se(...M), b.worldPos);
          } else if (at !== null && b.worldPos) {
            const M = e.nodes.val[at];
            M && ss(m.clientX, m.clientY, new Se(...M), b.worldPos);
          } else _t && (_t.remove(), _t = null);
          b.nodeIdx, ls(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Ht && !Ct) return;
        if (Ct && n) {
          const i = m.offsetX - n.x, b = m.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(b) > s) {
            a || (a = document.createElement("div"), a.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(a));
            const M = i > 0, w = Math.min(n.x, m.offsetX), v = Math.min(n.y, m.offsetY), f = Math.abs(i), x = Math.abs(b);
            a.style.left = w + "px", a.style.top = v + "px", a.style.width = f + "px", a.style.height = x + "px", a.style.border = M ? "2px solid #3399ff" : "2px dashed #33ff33", a.style.background = M ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const c = vn(m);
        if (c >= 0) rs(c), o.style.cursor = "pointer";
        else {
          if (At) {
            const i = Qe();
            i == null ? void 0 : i.scene.remove(At), At = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = Ct ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (m) => {
        if (Ct && n) {
          const c = m.offsetX - n.x, i = m.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(i) > s) {
            const b = c > 0, M = l(n.x, n.y, m.offsetX, m.offsetY, b);
            m.ctrlKey || m.metaKey || (nt.clear(), so()), M.forEach((v) => {
              nt.has(v) || (nt.add(v), hn(v));
            }), ao();
          }
          a && (a.remove(), a = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (m) => {
        if (Yt) {
          const c = Qe();
          if (!c) return;
          const i = as(m.clientX, m.clientY, c.camera, c.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (Os(i), ls(i));
          return;
        }
        if (Ct) {
          if (a) return;
          const c = vn(m), i = m.ctrlKey || m.metaKey;
          if (c >= 0) {
            if (i) if (nt.has(c)) {
              nt.delete(c);
              const b = no.findIndex((M) => M.__elemIdx === c);
              if (b >= 0) {
                const M = Qe();
                M == null ? void 0 : M.scene.remove(no[b]), no[b].geometry.dispose(), no[b].material.dispose(), no.splice(b, 1), M == null ? void 0 : M.render();
              }
            } else nt.add(c), hn(c);
            else nt.clear(), so(), nt.add(c), hn(c);
            ao();
          } else i || (nt.clear(), so(), ao());
          return;
        }
        if (Ht) {
          const c = vn(m);
          c >= 0 && (rs(c), Us(c));
        }
      });
    }, 500), Io.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Ge();
    }), je.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !qt), qt = t, (_a2 = he.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", qt), qt) {
        const n = Qe();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (J = n.settings.loads.rawVal, n.settings.loads.val = false), an(), he.querySelector("#cad3d-mode-prev").style.display = "", he.querySelector("#cad3d-mode-next").style.display = "", he.querySelector("#cad3d-mode-label").style.display = "";
      } else ln(), he.querySelector("#cad3d-mode-prev").style.display = "none", he.querySelector("#cad3d-mode-next").style.display = "none", he.querySelector("#cad3d-mode-label").style.display = "none", E && E !== "placa-q4" && E !== "placa-3q" && be(), setTimeout(() => {
        var _a3;
        const n = Qe();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && J && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${qt ? "ON" : "OFF"}`);
    }, je.setMode = (t) => {
      var _a2;
      if (!(re == null ? void 0 : re.modeShapes)) {
        console.error("No modal results");
        return;
      }
      bt = Math.max(0, Math.min(t, re.modeShapes.length - 1));
      const o = re.modeShapes[bt], { extent: n } = to();
      let a = 0;
      for (let p = 0; p < te.length; p++) {
        const l = o[p * 6] || 0, d = o[p * 6 + 1] || 0, m = o[p * 6 + 2] || 0;
        a = Math.max(a, Math.sqrt(l * l + d * d + m * m));
      }
      ze = a > 1e-12 ? n * 0.05 / a : 1, qo();
      const s = he.querySelector("#cad3d-mode-label");
      s && re.frequencies && (s.textContent = `Modo ${bt + 1} \u2014 ${re.frequencies[bt].toFixed(2)} Hz`), console.log(`Modo ${bt + 1}: f = ${(_a2 = re.frequencies) == null ? void 0 : _a2[bt].toFixed(4)} Hz`);
    }, window.cad = je, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(he), document.body.appendChild(de.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ve("edificio"), be(), es("edificio"));
    }, 100), document.body.appendChild(za());
    const xs = document.createElement("span");
    return xs.style.display = "none", xs;
  };
});
export {
  __tla,
  Ms as a,
  ha as c,
  Ga as g
};
