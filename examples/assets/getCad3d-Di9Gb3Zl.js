const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C2iwGR3p.js","./plateQ4Cpp-Duau68tz.js"])))=>i.map(i=>d[i]);
import { _ as Zs, p as En, m as Qs, d as Ct, s as ea, __tla as __tla_0 } from "./plateQ4Cpp-Duau68tz.js";
import { v as Eo, P as Ho, g as ta, a as oa, o as na } from "./theme-CzzIlc4y.js";
import { V as Ie, P as ao, R as vs, b as ys, B as lo, c as sa, d as kn, e as Ao, f as aa, S as la, M as ia, g as ra, F as fo, a as Co, L as Bo, h as ca, G as da, A as Do, i as In, T as zn, j as jo, k as Wo, C as pa, l as fa } from "./Text-Cin90tvN.js";
import { g as Ko, b as Uo, a as So } from "./analyze-B6dp1uvy.js";
import { g as Kt, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as bo, s as Ut, m as _t, t as An } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let ws, ha, Wa;
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
  const Fn = [
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
  ], ko = [
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
  function ua(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
  }
  const uo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function mo(e, g) {
    const B = Fn.find((W) => W.id === e), E = ko.find((W) => W.id === g), G = B.toKN, R = E.toM, Y = (W, fe, z) => z / (Math.pow(G, W) * Math.pow(R, fe));
    let D, H;
    switch (e) {
      case "kN":
        D = 10, H = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        D = 1, H = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        D = 1e3, H = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        D = 10, H = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        D = 5e3, H = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        D = 1e4, H = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${g}`,
      label: `${B.label}, ${E.label}`,
      force: B.label,
      length: E.label,
      stress: ua(e, g),
      moment: `${B.label}\xB7${E.label}`,
      E: Y(1, -2, uo.E),
      G: Y(1, -2, uo.G),
      A: Y(0, 2, uo.A),
      Iz: Y(0, 4, uo.Iz),
      Iy: Y(0, 4, uo.Iy),
      J: Y(0, 4, uo.J),
      rho: Y(1, -4, uo.rho),
      spanRange: E.spanRange,
      heightRange: E.heightRange,
      defaultSpan: E.defaultSpan,
      defaultHeight: E.defaultHeight,
      defaultForce: D,
      forceRange: H,
      galponSpan: E.galponSpan,
      galponLength: E.galponLength,
      galponHeight: E.galponHeight,
      galponRise: E.galponRise
    };
  }
  mo("kN", "m"), mo("kip", "in");
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
    const g = e.force, [B, E, G] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: B,
          max: E,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: B,
          max: E,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: B,
          max: E,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: B,
          max: E,
          step: G,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: B,
          max: E,
          step: G,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
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
          min: B,
          max: 0,
          step: G,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: G,
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
    let g = false;
    function B(E, G) {
      var _a2, _b;
      if (!E.frequencies || E.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const R = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], Y = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let D = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${G.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (D += '<div id="modal-body" style="padding:0 12px 10px 12px;">', G.properties) for (const H of G.properties) D += `<span style="color:#888">${H}</span>
`;
      D += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const H of R) D += `<th style="padding:2px 5px">${H}</th>`;
      if (D += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, E.frequencies.forEach((H, W) => {
        var _a3;
        const fe = H > 0 ? 1 / H : 0, z = H * 2 * Math.PI, ee = ((_a3 = E.massParticipation) == null ? void 0 : _a3[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) Y[ve] += ee[ve];
        D += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${H.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${fe.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const de = (ee[ve] * 100).toFixed(1), X = ee[ve] > 0.5 ? "#f00" : ee[ve] > 0.1 ? "#ff0" : "#0f0";
          D += `<td style="padding:2px 5px; text-align:right; color:${X}">${de}%</td>`;
        }
        D += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Y[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Y[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Y[5] * 100).toFixed(1)}%</td></tr>`;
      }), D += "</table></div>", e.innerHTML = D, g) {
        const H = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        H && (H.style.display = "none"), W && (W.textContent = "\u25A2", W.title = "Restaurar");
      }
      (_a2 = e.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        g = !g;
        const H = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        g ? (H.style.display = "none", W.textContent = "\u25A2", W.title = "Restaurar") : (H.style.display = "block", W.textContent = "\u25AC", W.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const H = [];
        H.push(`Modal Analysis \u2014 ${G.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${R.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        H.push(W), H.push("-".repeat(W.length));
        const fe = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        E.frequencies.forEach((ee, ve) => {
          var _a3;
          const de = ee > 0 ? 1 / ee : 0, X = ee * 2 * Math.PI, Q = ((_a3 = E.massParticipation) == null ? void 0 : _a3[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let J = 0; J < 6; J++) fe[J] += Q[J];
          const pe = Q.map((J) => ((J * 100).toFixed(1) + "%").padStart(6)).join(" ");
          H.push(`${String(ve + 1).padStart(4)}  ${ee.toFixed(4).padStart(9)}  ${de.toFixed(4).padStart(9)}  ${X.toFixed(2).padStart(9)}  ${pe}  ${(fe[0] * 100).toFixed(1).padStart(5)}%  ${(fe[1] * 100).toFixed(1).padStart(5)}%  ${(fe[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(H.join(`
`));
        const z = e.querySelector("#modal-copy");
        z.textContent = "\u2713", setTimeout(() => z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: B
    };
  };
  const ge = 64516e-8, T = 416231e-12, N = 0.0254, io = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * ge,
      Iz: 16.4 * T,
      Iy: 2.2 * T,
      J: 0.0405 * T,
      d: 5.9 * N,
      bf: 3.94 * N
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * ge,
      Iz: 29.1 * T,
      Iy: 9.32 * T,
      J: 0.103 * T,
      d: 5.99 * N,
      bf: 5.99 * N
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * ge,
      Iz: 41.4 * T,
      Iy: 13.3 * T,
      J: 0.204 * T,
      d: 6.2 * N,
      bf: 6.02 * N
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * ge,
      Iz: 30.8 * T,
      Iy: 2.09 * T,
      J: 0.0426 * T,
      d: 7.89 * N,
      bf: 3.94 * N
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * ge,
      Iz: 61.9 * T,
      Iy: 7.97 * T,
      J: 0.172 * T,
      d: 8.14 * N,
      bf: 5.25 * N
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * ge,
      Iz: 82.7 * T,
      Iy: 18.3 * T,
      J: 0.346 * T,
      d: 7.93 * N,
      bf: 6.5 * N
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * ge,
      Iz: 110 * T,
      Iy: 37.1 * T,
      J: 0.536 * T,
      d: 8 * N,
      bf: 7.995 * N
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * ge,
      Iz: 146 * T,
      Iy: 49.1 * T,
      J: 0.871 * T,
      d: 8.25 * N,
      bf: 8.07 * N
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * ge,
      Iz: 184 * T,
      Iy: 60.9 * T,
      J: 1.45 * T,
      d: 8.5 * N,
      bf: 8.11 * N
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * ge,
      Iz: 272 * T,
      Iy: 88.6 * T,
      J: 3.54 * T,
      d: 9 * N,
      bf: 8.28 * N
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * ge,
      Iz: 53.8 * T,
      Iy: 2.18 * T,
      J: 0.0547 * T,
      d: 9.87 * N,
      bf: 3.96 * N
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * ge,
      Iz: 118 * T,
      Iy: 11.4 * T,
      J: 0.239 * T,
      d: 10.17 * N,
      bf: 5.75 * N
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * ge,
      Iz: 171 * T,
      Iy: 36.6 * T,
      J: 0.583 * T,
      d: 9.73 * N,
      bf: 7.96 * N
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * ge,
      Iz: 272 * T,
      Iy: 93.4 * T,
      J: 1.39 * T,
      d: 9.98 * N,
      bf: 10 * N
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * ge,
      Iz: 394 * T,
      Iy: 134 * T,
      J: 3.56 * T,
      d: 10.4 * N,
      bf: 10.13 * N
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * ge,
      Iz: 623 * T,
      Iy: 207 * T,
      J: 10.9 * T,
      d: 11.1 * N,
      bf: 10.34 * N
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * ge,
      Iz: 88.6 * T,
      Iy: 2.36 * T,
      J: 0.0704 * T,
      d: 11.91 * N,
      bf: 3.97 * N
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * ge,
      Iz: 156 * T,
      Iy: 4.66 * T,
      J: 0.293 * T,
      d: 12.31 * N,
      bf: 4.03 * N
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * ge,
      Iz: 204 * T,
      Iy: 17.3 * T,
      J: 0.3 * T,
      d: 12.22 * N,
      bf: 6.49 * N
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * ge,
      Iz: 310 * T,
      Iy: 44.1 * T,
      J: 0.906 * T,
      d: 11.94 * N,
      bf: 8.01 * N
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * ge,
      Iz: 425 * T,
      Iy: 95.8 * T,
      J: 1.58 * T,
      d: 12.06 * N,
      bf: 9.99 * N
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * ge,
      Iz: 597 * T,
      Iy: 195 * T,
      J: 4.05 * T,
      d: 12.25 * N,
      bf: 12.04 * N
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * ge,
      Iz: 833 * T,
      Iy: 270 * T,
      J: 8.44 * T,
      d: 12.71 * N,
      bf: 12.16 * N
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * ge,
      Iz: 1070 * T,
      Iy: 345 * T,
      J: 16 * T,
      d: 13.12 * N,
      bf: 12.32 * N
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * ge,
      Iz: 199 * T,
      Iy: 7 * T,
      J: 0.208 * T,
      d: 13.74 * N,
      bf: 5 * N
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * ge,
      Iz: 291 * T,
      Iy: 19.6 * T,
      J: 0.38 * T,
      d: 13.84 * N,
      bf: 6.73 * N
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * ge,
      Iz: 385 * T,
      Iy: 26.7 * T,
      J: 0.798 * T,
      d: 14.1 * N,
      bf: 6.77 * N
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * ge,
      Iz: 485 * T,
      Iy: 51.4 * T,
      J: 1.45 * T,
      d: 13.79 * N,
      bf: 8.03 * N
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * ge,
      Iz: 640 * T,
      Iy: 107 * T,
      J: 2.19 * T,
      d: 13.89 * N,
      bf: 9.99 * N
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * ge,
      Iz: 882 * T,
      Iy: 148 * T,
      J: 5.07 * T,
      d: 14.31 * N,
      bf: 10.13 * N
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * ge,
      Iz: 1240 * T,
      Iy: 447 * T,
      J: 7.12 * T,
      d: 14.32 * N,
      bf: 14.61 * N
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * ge,
      Iz: 1530 * T,
      Iy: 548 * T,
      J: 12.3 * T,
      d: 14.66 * N,
      bf: 14.73 * N
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * ge,
      Iz: 2140 * T,
      Iy: 838 * T,
      J: 23.7 * T,
      d: 15.22 * N,
      bf: 15.65 * N
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * ge,
      Iz: 301 * T,
      Iy: 9.59 * T,
      J: 0.262 * T,
      d: 15.69 * N,
      bf: 5.5 * N
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * ge,
      Iz: 448 * T,
      Iy: 24.5 * T,
      J: 0.545 * T,
      d: 15.86 * N,
      bf: 6.99 * N
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * ge,
      Iz: 659 * T,
      Iy: 37.2 * T,
      J: 1.52 * T,
      d: 16.26 * N,
      bf: 7.07 * N
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * ge,
      Iz: 954 * T,
      Iy: 119 * T,
      J: 2.39 * T,
      d: 16.33 * N,
      bf: 10.24 * N
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * ge,
      Iz: 1300 * T,
      Iy: 163 * T,
      J: 5.45 * T,
      d: 16.75 * N,
      bf: 10.37 * N
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * ge,
      Iz: 510 * T,
      Iy: 15.3 * T,
      J: 0.506 * T,
      d: 17.7 * N,
      bf: 6 * N
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * ge,
      Iz: 800 * T,
      Iy: 40.1 * T,
      J: 1.24 * T,
      d: 17.99 * N,
      bf: 7.5 * N
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * ge,
      Iz: 1170 * T,
      Iy: 60.3 * T,
      J: 3.49 * T,
      d: 18.47 * N,
      bf: 7.64 * N
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * ge,
      Iz: 1750 * T,
      Iy: 201 * T,
      J: 5.86 * T,
      d: 18.59 * N,
      bf: 11.15 * N
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * ge,
      Iz: 843 * T,
      Iy: 20.7 * T,
      J: 0.77 * T,
      d: 20.66 * N,
      bf: 6.5 * N
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * ge,
      Iz: 1330 * T,
      Iy: 57.5 * T,
      J: 1.83 * T,
      d: 20.99 * N,
      bf: 8.24 * N
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * ge,
      Iz: 1830 * T,
      Iy: 81.4 * T,
      J: 4.34 * T,
      d: 21.43 * N,
      bf: 8.36 * N
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * ge,
      Iz: 2670 * T,
      Iy: 274 * T,
      J: 6.83 * T,
      d: 21.51 * N,
      bf: 12.34 * N
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * ge,
      Iz: 1350 * T,
      Iy: 29.1 * T,
      J: 1.18 * T,
      d: 23.57 * N,
      bf: 7.01 * N
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * ge,
      Iz: 2100 * T,
      Iy: 82.5 * T,
      J: 2.68 * T,
      d: 23.92 * N,
      bf: 8.99 * N
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * ge,
      Iz: 3100 * T,
      Iy: 259 * T,
      J: 4.72 * T,
      d: 24.06 * N,
      bf: 12.75 * N
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * ge,
      Iz: 4020 * T,
      Iy: 340 * T,
      J: 9.5 * T,
      d: 24.48 * N,
      bf: 12.86 * N
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * ge,
      Iz: 4580 * T,
      Iy: 391 * T,
      J: 12.6 * T,
      d: 24.74 * N,
      bf: 12.9 * N
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * ge,
      Iz: 5680 * T,
      Iy: 479 * T,
      J: 21.2 * T,
      d: 25.24 * N,
      bf: 12.9 * N
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * ge,
      Iz: 2850 * T,
      Iy: 106 * T,
      J: 2.81 * T,
      d: 26.71 * N,
      bf: 9.96 * N
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * ge,
      Iz: 4090 * T,
      Iy: 159 * T,
      J: 6.77 * T,
      d: 27.29 * N,
      bf: 10.07 * N
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * ge,
      Iz: 3610 * T,
      Iy: 115 * T,
      J: 3.06 * T,
      d: 29.53 * N,
      bf: 10.4 * N
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * ge,
      Iz: 4930 * T,
      Iy: 164 * T,
      J: 6.43 * T,
      d: 30.01 * N,
      bf: 10.5 * N
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * ge,
      Iz: 5900 * T,
      Iy: 187 * T,
      J: 5.3 * T,
      d: 32.86 * N,
      bf: 11.48 * N
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * ge,
      Iz: 7800 * T,
      Iy: 225 * T,
      J: 7 * T,
      d: 35.55 * N,
      bf: 11.95 * N
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * ge,
      Iz: 8.22 * T,
      Iy: 8.22 * T,
      J: 13.4 * T,
      d: 4 * N,
      bf: 4 * N
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * ge,
      Iz: 10.7 * T,
      Iy: 10.7 * T,
      J: 17.9 * T,
      d: 4 * N,
      bf: 4 * N
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * ge,
      Iz: 12.3 * T,
      Iy: 12.3 * T,
      J: 21 * T,
      d: 4 * N,
      bf: 4 * N
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * ge,
      Iz: 30.3 * T,
      Iy: 30.3 * T,
      J: 48.3 * T,
      d: 6 * N,
      bf: 6 * N
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * ge,
      Iz: 41.1 * T,
      Iy: 41.1 * T,
      J: 66.9 * T,
      d: 6 * N,
      bf: 6 * N
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * ge,
      Iz: 49.6 * T,
      Iy: 49.6 * T,
      J: 82.2 * T,
      d: 6 * N,
      bf: 6 * N
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * ge,
      Iz: 70.7 * T,
      Iy: 70.7 * T,
      J: 112 * T,
      d: 8 * N,
      bf: 8 * N
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * ge,
      Iz: 98 * T,
      Iy: 98 * T,
      J: 158 * T,
      d: 8 * N,
      bf: 8 * N
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * ge,
      Iz: 122 * T,
      Iy: 122 * T,
      J: 199 * T,
      d: 8 * N,
      bf: 8 * N
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * ge,
      Iz: 202 * T,
      Iy: 202 * T,
      J: 323 * T,
      d: 10 * N,
      bf: 10 * N
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * ge,
      Iz: 254 * T,
      Iy: 254 * T,
      J: 412 * T,
      d: 10 * N,
      bf: 10 * N
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * ge,
      Iz: 355 * T,
      Iy: 355 * T,
      J: 564 * T,
      d: 12 * N,
      bf: 12 * N
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * ge,
      Iz: 452 * T,
      Iy: 452 * T,
      J: 724 * T,
      d: 12 * N,
      bf: 12 * N
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * ge,
      Iz: 18 * T,
      Iy: 9.58 * T,
      J: 22.6 * T,
      d: 6 * N,
      bf: 4 * N
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * ge,
      Iz: 23.8 * T,
      Iy: 12.3 * T,
      J: 30.3 * T,
      d: 6 * N,
      bf: 4 * N
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * ge,
      Iz: 33.6 * T,
      Iy: 11.8 * T,
      J: 33 * T,
      d: 8 * N,
      bf: 4 * N
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * ge,
      Iz: 45.1 * T,
      Iy: 15 * T,
      J: 44.5 * T,
      d: 8 * N,
      bf: 4 * N
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * ge,
      Iz: 46.1 * T,
      Iy: 28.2 * T,
      J: 61.3 * T,
      d: 8 * N,
      bf: 6 * N
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * ge,
      Iz: 63 * T,
      Iy: 37.5 * T,
      J: 84.6 * T,
      d: 8 * N,
      bf: 6 * N
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * ge,
      Iz: 103 * T,
      Iy: 47.1 * T,
      J: 115 * T,
      d: 10 * N,
      bf: 6 * N
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * ge,
      Iz: 196 * T,
      Iy: 102 * T,
      J: 249 * T,
      d: 12 * N,
      bf: 8 * N
    }
  ];
  function Go() {
    const e = {};
    return io.forEach((g, B) => {
      g.type === "W" && (e[g.name] = B);
    }), e;
  }
  function Jo() {
    const e = {};
    return io.forEach((g, B) => {
      g.type === "HSS" && (e[g.name] = B);
    }), e;
  }
  function ga(e) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: B, elementInputs: E, nodeInputs: G, deformOutputs: R } = e, Y = g.length * 6, D = B.length, H = B.filter((X) => X.length === 2).length, W = B.filter((X) => X.length >= 3).length, fe = document.createElement("div");
    fe.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${D} (${H} frames, ${W} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${Y}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((X, Q) => {
      z += `<tr><td>${Q}</td><td>${Ye(X[0])}</td><td>${Ye(X[1])}</td><td>${Ye(X[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', B.forEach((X, Q) => {
      var _a3, _b2, _c2, _d2;
      const pe = X.length === 2, J = X.map((Be) => g[Be]), V = pe ? bo(Ut(J[1], J[0])) : 0, ne = ((_a3 = E.elasticities) == null ? void 0 : _a3.get(Q)) ?? 0, Ae = ((_b2 = E.areas) == null ? void 0 : _b2.get(Q)) ?? 0, He = ((_c2 = E.momentsOfInertiaZ) == null ? void 0 : _c2.get(Q)) ?? 0, Ne = ((_d2 = E.momentsOfInertiaY) == null ? void 0 : _d2.get(Q)) ?? 0;
      z += `<tr><td>${Q}</td><td>${pe ? "Frame" : "Shell"}</td><td>${X.join(" \u2192 ")}</td>`, z += `<td>${Ye(V)}</td><td>${Ye(ne)}</td><td>${Ye(Ae)}</td><td>${Ye(He)}</td><td>${Ye(Ne)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", H > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += va(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let X = 0; X < D; X++) {
      const Q = B[X], pe = Q.map((Pt) => g[Pt]);
      if (!(Q.length === 2)) continue;
      const V = bo(Ut(pe[1], pe[0])), ne = ((_a2 = E.elasticities) == null ? void 0 : _a2.get(X)) ?? 0, Ae = ((_b = E.areas) == null ? void 0 : _b.get(X)) ?? 0, He = ((_c = E.momentsOfInertiaZ) == null ? void 0 : _c.get(X)) ?? 0, Ne = ((_d = E.momentsOfInertiaY) == null ? void 0 : _d.get(X)) ?? 0, Be = ((_e = E.shearModuli) == null ? void 0 : _e.get(X)) ?? 0, tt = ((_f = E.torsionalConstants) == null ? void 0 : _f.get(X)) ?? 0;
      let ct = null, Ve = null, Qe = null;
      try {
        ct = Ko(pe, E, X), Ve = Uo(pe), Qe = _t(An(Ve), _t(ct, Ve));
      } catch {
        continue;
      }
      const yt = Ut(pe[1], pe[0]), St = yt[0] / V, bt = yt[1] / V, Mt = yt[2] / V;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${X}">\u25B6 Element ${X} \u2014 Nodes ${Q[0]} \u2192 ${Q[1]}, L = ${Ye(V)}</h3>`, z += `<div id="rpt-elem${X}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${Ye(ne)} &nbsp;&nbsp; A = ${Ye(Ae)} &nbsp;&nbsp; I<sub>z</sub> = ${Ye(He)} &nbsp;&nbsp; I<sub>y</sub> = ${Ye(Ne)} &nbsp;&nbsp; G = ${Ye(Be)} &nbsp;&nbsp; J = ${Ye(tt)}<br/>`, z += `EA/L = ${Ye(ne)}\xB7${Ye(Ae)}/${Ye(V)} = <b>${Ye(ne * Ae / V)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ye(ne)}\xB7${Ye(He)}/${Ye(V)}\xB3 = <b>${Ye(12 * ne * He / V ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ye(ne)}\xB7${Ye(Ne)}/${Ye(V)}\xB3 = <b>${Ye(12 * ne * Ne / V ** 3)}</b><br/>`, z += `GJ/L = ${Ye(Be)}\xB7${Ye(tt)}/${Ye(V)} = <b>${Ye(Be * tt / V)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${Vo(St)}, m = ${Vo(bt)}, n = ${Vo(Mt)}, D = ${Vo(Math.sqrt(St ** 2 + bt ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += Tn(ct, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += Tn(Ve, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += Tn(Qe, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${Q[0]} \u2192 [${Q[0] * 6}..${Q[0] * 6 + 5}], node ${Q[1]} \u2192 [${Q[1] * 6}..${Q[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${D - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += ya(B, g.length), z += "<h2>5. Boundary Conditions</h2>";
    const ee = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", G.supports && G.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const X of ee) z += `<th>${X}</th>`;
      z += "</tr></thead><tbody>", G.supports.forEach((X, Q) => {
        z += `<tr><td>${Q}</td>`, X.forEach((pe, J) => {
          pe && ve.push(Q * 6 + J), z += `<td class="${pe ? "fixed" : ""}">${pe ? "Fixed" : "Free"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += `<div class="rpt-eq-small">Fixed DOFs: [${ve.join(", ")}] \u2192 ${ve.length} constraints<br/>`, z += `Free DOFs: ${Y} \u2212 ${ve.length} = <b>${Y - ve.length}</b></div>`, z += "<h3>5.2 Applied Loads</h3>", G.loads && G.loads.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const X = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const Q of X) z += `<th>${Q}</th>`;
      z += "</tr></thead><tbody>", G.loads.forEach((Q, pe) => {
        z += `<tr><td>${pe}</td>`, Q.forEach((J) => {
          const V = Math.abs(J) > 1e-10;
          z += `<td class="${V ? "nz" : ""}">${V ? Ye(J) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", R == null ? void 0 : R.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const X of ee) z += `<th>${X}</th>`;
      z += "</tr></thead><tbody>", R.deformations.forEach((X, Q) => {
        z += `<tr><td>${Q}</td>`, X.forEach((pe) => {
          const J = Math.abs(pe) > 1e-10;
          z += `<td class="${J ? "nz" : ""}">${Ye(pe, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', R == null ? void 0 : R.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const X of ee) z += `<th>${X}</th>`;
      z += "</tr></thead><tbody>", R.reactions.forEach((X, Q) => {
        z += `<tr><td>${Q}</td>`, X.forEach((pe) => {
          const J = Math.abs(pe) > 1e-10;
          z += `<td class="${J ? "nz-react" : ""}">${J ? Ye(pe, 4) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>7. Internal Forces</h2>", z += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", z += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', z += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', R == null ? void 0 : R.deformations) {
      const X = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const Q of X) z += `<th>${Q}<sub>i</sub></th>`;
      for (const Q of X) z += `<th>${Q}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let Q = 0; Q < D; Q++) {
        const pe = B[Q];
        if (pe.length !== 2) continue;
        const J = pe.map((V) => g[V]);
        try {
          const V = Ko(J, E, Q), ne = Uo(J), Ae = [];
          for (const Be of pe) {
            const tt = ((_g = R.deformations) == null ? void 0 : _g.get(Be)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ae.push(...tt);
          }
          const He = _t(ne, Ae), Ne = _t(V, He);
          z += `<tr><td>${Q}</td><td>${pe.join("\u2192")}</td>`;
          for (let Be = 0; Be < 12; Be++) {
            const tt = Math.abs(Ne[Be]) > 1e-10;
            z += `<td class="${tt ? "nz" : ""}">${Ye(Ne[Be], 2)}</td>`;
          }
          z += "</tr>";
        } catch {
        }
      }
      z += "</tbody></table>";
    }
    const de = `
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
    return fe.innerHTML = de + z, (_h = fe.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => fe.remove()), fe.querySelectorAll("[data-toggle]").forEach((X) => {
      X.addEventListener("click", () => {
        const Q = X.dataset.toggle, pe = fe.querySelector(`#rpt-${Q}`);
        if (pe) {
          const J = pe.style.display !== "none";
          pe.style.display = J ? "none" : "", X.textContent = X.textContent.replace(/^[▼▶]/, J ? "\u25B6" : "\u25BC");
        }
      });
    }), fe;
  }
  function Ye(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function Vo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Tn(e, g) {
    var _a2;
    const B = Math.min(g, 12);
    let E = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let G = 0; G < B; G++) {
      E += "<tr>";
      for (let R = 0; R < B; R++) {
        const Y = ((_a2 = e[G]) == null ? void 0 : _a2[R]) ?? 0, D = Math.abs(Y) < 1e-10;
        E += `<td class="${D ? "z" : ""} ${G === R && !D ? "diag" : ""}">${D ? "0" : xa(Y)}</td>`;
      }
      E += "</tr>";
    }
    return E += "</table>", g > B && (E += `<div style="color:#888;font-size:9pt">(showing ${B}\xD7${B} of ${g}\xD7${g})</div>`), E += "</div>", E;
  }
  function xa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function va() {
    const Y = [
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
    let D = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    D += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, D += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', D += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, D += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, D += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const H of Y) {
      let W = "";
      for (let ve = 0; ve <= 80; ve++) {
        const de = ve / 80, X = 30 + de * 540, Q = 180 / 2 - H.fn(de) * 60;
        W += (ve === 0 ? "M" : "L") + `${X.toFixed(1)},${Q.toFixed(1)}`;
      }
      D += `<path d="${W}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const fe = 0.75, z = 30 + fe * 540 + 8, ee = 180 / 2 - H.fn(fe) * 60 - 6;
      D += `<text x="${z}" y="${ee}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return D += "</svg>", D;
  }
  function ya(e, g) {
    const B = g * 6, E = Math.min(B, 30);
    let G = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    G += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', G += "<tr><td></td>";
    for (let Y = 0; Y < E; Y++) G += `<td style="color:#003366;font-weight:bold;font-size:7px">${Y}</td>`;
    G += "</tr>";
    const R = Array.from({
      length: E
    }, () => Array(E).fill(0));
    for (let Y = 0; Y < e.length; Y++) {
      const D = e[Y].map((H) => H * 6);
      for (const H of D) for (const W of D) for (let fe = 0; fe < 6; fe++) for (let z = 0; z < 6; z++) {
        const ee = H + fe, ve = W + z;
        ee < E && ve < E && R[ee][ve]++;
      }
    }
    for (let Y = 0; Y < E; Y++) {
      G += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Y}</td>`;
      for (let D = 0; D < E; D++) {
        const H = R[Y][D], W = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", fe = H === 0 ? "" : H.toString();
        G += `<td style="background:${W};color:#003366">${fe}</td>`;
      }
      G += "</tr>";
    }
    return G += "</table></div>", B > E && (G += `<div style="color:#888;font-size:9pt">(showing ${E}\xD7${E} of ${B}\xD7${B})</div>`), G;
  }
  let Ln = false;
  function $a(e) {
    if (Ln || window.katex) {
      Ln = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const B = document.createElement("script");
    B.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", B.onload = () => {
      Ln = true, e();
    }, document.head.appendChild(B);
  }
  function $s(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function Ma(e, g, B, E, G, R) {
    var _a2, _b, _c, _d, _e, _f;
    const Y = B[e], D = Y.map((Ve) => g[Ve]), H = Y.length === 2, W = H ? bo(Ut(D[1], D[0])) : 0, fe = ((_a2 = E.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, z = ((_b = E.areas) == null ? void 0 : _b.get(e)) ?? 0, ee = ((_c = E.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ve = ((_d = E.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, de = ((_e = E.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, X = ((_f = E.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let Q = null, pe = null, J = null;
    try {
      Q = Ko(D, E, e), pe = Uo(D), J = _t(An(pe), _t(Q, pe));
    } catch {
    }
    const V = H ? Ut(D[1], D[0]) : [
      0,
      0,
      0
    ], ne = W > 0 ? V[0] / W : 0, Ae = W > 0 ? V[1] / W : 0, He = W > 0 ? V[2] / W : 0, Ne = Math.sqrt(ne ** 2 + Ae ** 2), Be = [];
    if ((G == null ? void 0 : G.deformations) && H) for (const Ve of Y) {
      const Qe = G.deformations.get(Ve) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Be.push(...Qe);
    }
    let tt = [], ct = [];
    if (Be.length === 12 && pe && Q) {
      try {
        tt = _t(pe, Be);
      } catch {
        tt = Array(12).fill(0);
      }
      try {
        ct = _t(Q, tt);
      } catch {
        ct = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: Y,
      elmNodes: D,
      isFrame: H,
      L: W,
      E: fe,
      A: z,
      Iz: ee,
      Iy: ve,
      G: de,
      J: X,
      kLocal: Q,
      T: pe,
      kGlobal: J,
      l: ne,
      m: Ae,
      n: He,
      D: Ne,
      uGlobal: Be,
      uLocal: tt,
      fLocal: ct,
      dOut: G,
      aOut: R,
      totalNodes: g.length
    };
  }
  function wa(e, g, B, E, G, R) {
    var _a2, _b;
    const Y = Ma(e, g, B, E, G, R), D = document.createElement("div");
    return D.className = "er-panel", D.innerHTML = Ia + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Y.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Y.elem.join(" \u2192 ")} \u2014 L = ${Fe(Y.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Sa(Y)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Ms(Y)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ea(Y)}</div>
  `, D.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        D.querySelectorAll(".er-tab").forEach((fe) => fe.classList.remove("active")), H.classList.add("active");
        const W = H.dataset.tab;
        D.querySelectorAll(".er-body").forEach((fe) => fe.style.display = "none"), D.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a2 = D.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => D.remove()), (_b = D.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = D.classList.toggle("er-fullscreen-mode"), W = D.querySelector("#er-fullscreen");
      W && (W.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = D.querySelector("#er-sf-canvas");
      H && qn(H);
      const W = D.querySelector("#er-sf-canvas-math");
      W && qn(W);
    }, 50), $a(() => {
      const H = D.querySelector("#er-body-math");
      H && (H.innerHTML = Ms(Y)), setTimeout(() => {
        const W = D.querySelector("#er-sf-canvas-math");
        W && qn(W);
      }, 50), D.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const fe = W.dataset.toggle, z = D.querySelector(`#er-${fe}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), D;
  }
  function Sa(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Fe(e.E)}</td><td>A</td><td>${Fe(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Fe(e.Iz)}</td><td>I<sub>y</sub></td><td>${Fe(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Fe(e.G)}</td><td>J</td><td>${Fe(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += Oo(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += Oo(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += Oo(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const B = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let E = 0; E < e.elem.length; E++) {
        g += `<div class="er-sub">Nodo ${e.elem[E]}: `;
        for (let G = 0; G < 6; G++) {
          const R = e.uGlobal[E * 6 + G];
          g += `${B[G]}=<span class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${Fe(R, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((B) => B !== 0)) {
      const B = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const E of B) g += `<th>${E}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Fe(e.fLocal[E], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Fe(e.fLocal[E], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function Ms(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const B = (fe) => $s(fe), E = (fe) => $s(fe, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${E("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${B("\\text{Nodo } i")} = (${e.elmNodes[0].map((fe) => Fe(fe)).join(", ")})<br/>`, g += `${B("\\text{Nodo } j")} = (${e.elmNodes[1].map((fe) => Fe(fe)).join(", ")})<br/>`, g += `${E(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Fe(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${E("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${E("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${B("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${E("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${B("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${E("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${E("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${E("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${E("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${B("I_z")})</div>`, g += `<div class="er-eq">${E("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${B("I_y")})</div>`, g += `<div class="er-eq">${E("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${E("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${E(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Fe(e.E)} \\times ${Fe(e.A)} = \\mathbf{${Fe(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Fe(e.E)} \\times ${Fe(e.Iz)} = \\mathbf{${Fe(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Fe(e.E)} \\times ${Fe(e.Iy)} = \\mathbf{${Fe(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Fe(e.G)} \\times ${Fe(e.J)} = \\mathbf{${Fe(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${B("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${E("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const G = e.E * e.A / e.L, R = e.E * e.Iz / e.L ** 3, Y = e.E * e.Iy / e.L ** 3, D = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${E("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${E("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${B("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${E("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Fe(e.E)}\\times${Fe(e.A)}}{${Fe(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${E(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Fe(G)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${B("v(\\xi)")}</p>`, g += `<div class="er-eq">${E("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${E("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${E("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${B("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${E("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${B("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${E("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Fe(e.E)} \\times ${Fe(e.Iz)}}{${Fe(e.L)}^3} = \\mathbf{${Fe(12 * R)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${B("\\theta_x")} y ${B("GJ")}:</p>`, g += `<div class="er-eq">${E(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Fe(e.G)}\\times${Fe(e.J)}}{${Fe(e.L)}} = \\mathbf{${Fe(D)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${B("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${E("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Fe(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${E(`\\frac{EA}{L} = \\mathbf{${Fe(G)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Fe(12 * R)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Fe(12 * Y)}}`)}</div>`, g += `<div class="er-eq">${E(`\\frac{GJ}{L} = \\mathbf{${Fe(D)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Fe(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Fe(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${E(`\\frac{6EI_z}{L^2} = \\mathbf{${Fe(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Fe(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${B("\\mathbf{K}_{local}")} (12x12)</div>`, g += Oo(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${E(`l = \\frac{x_j - x_i}{L} = ${Xo(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Xo(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Xo(e.n)}`)}</div>`, g += `<div class="er-eq">${E(`D = \\sqrt{l^2 + m^2} = ${Xo(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${B(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const fe = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${E(fe)}</div>`;
    } else g += `<div class="er-eq">${E("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${E("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${B("\\mathbf{K}_{global}")} = ${B("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${E("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += Oo(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, W = e.elem[1] * 6;
    if (g += `<div class="er-eq">${E(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, g += `<div class="er-eq">${E(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, g += `<div class="er-eq">${E("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${E("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${E("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((fe) => fe !== 0)) {
      const fe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const z of fe) g += `<th>${z}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let z = 0; z < 6; z++) g += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Fe(e.fLocal[z], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let z = 6; z < 12; z++) g += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Fe(e.fLocal[z], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ea(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Fe(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Fe(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Fe(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const B = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const E of B) g += `<th>${E}</th>`;
      g += "</tr>";
      for (let E = 0; E < e.elem.length; E++) {
        g += `<tr><td>${e.elem[E]}</td>`;
        for (let G = 0; G < 6; G++) {
          const R = e.uGlobal[E * 6 + G];
          g += `<td class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${Fe(R, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((B) => B !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const B = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const E of B) g += `<th>${E}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Fe(e.fLocal[E], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Fe(e.fLocal[E], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Fe(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function Xo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Oo(e) {
    var _a2;
    const g = e.length, B = Math.min(g, 12);
    let E = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let G = 0; G < B; G++) {
      E += "<tr>";
      for (let R = 0; R < B; R++) {
        const Y = ((_a2 = e[G]) == null ? void 0 : _a2[R]) ?? 0, D = Math.abs(Y) < 1e-10;
        E += `<td class="${D ? "z" : ""} ${G === R && !D ? "diag" : ""}">${D ? "0" : ka(Y)}</td>`;
      }
      E += "</tr>";
    }
    return E += "</table>", g > B && (E += `<div style="color:var(--fem-label);font-size:9px">(${B}\xD7${B} de ${g}\xD7${g})</div>`), E += "</div>", E;
  }
  function ka(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function qn(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const B = e.width, E = e.height, G = 30, R = B - 2 * G, Y = (E - 3 * G) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, B, E);
    const D = (H, W, fe) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(G, H, R, Y), g.strokeStyle = "#444", g.beginPath(), g.moveTo(G, H + Y / 2), g.lineTo(G + R, H + Y / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(W, G + 4, H + 14);
      for (const ee of fe) {
        g.strokeStyle = ee.color, g.lineWidth = 2.5, g.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const de = ve / 100, X = G + de * R, Q = H + Y / 2 - ee.fn(de) * (Y / 2 * 0.85);
          ve === 0 ? g.moveTo(X, Q) : g.lineTo(X, Q);
        }
        g.stroke();
      }
      let z = G + R - 90;
      for (const ee of fe) g.fillStyle = ee.color, g.font = "bold 10px sans-serif", g.fillText(ee.label, z, H + Y - 6), z += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", G, H + Y + 12), g.fillText("1", G + R - 6, H + Y + 12), g.fillText("\u03BE", G + R / 2, H + Y + 12);
    };
    D(G, "Axial (lineal)", [
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
    ]), D(G + Y + G, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  let Zo = false, ho = null, Rt = null, vt = null, ut = null;
  function za() {
    ut = document.createElement("button"), ut.id = "help-tour-btn", ut.innerHTML = "?", ut.title = "Ayuda interactiva \u2014 Tour guiado", ut.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, ut.addEventListener("mouseenter", () => {
      ut.style.transform = "scale(1.15)", ut.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), ut.addEventListener("mouseleave", () => {
      ut.style.transform = "scale(1)", ut.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), ut.addEventListener("click", () => {
      Zo ? Cn() : Ta();
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
  `, document.head.appendChild(e), ut;
  }
  function Ta() {
    Zo = true, ut && (ut.innerHTML = "\u2715", ut.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", ut.style.animation = "none"), ho = document.createElement("div"), ho.id = "tour-overlay", ho.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(ho), Io(0);
  }
  function Cn() {
    Zo = false, ut && (ut.innerHTML = "?", ut.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", ut.style.animation = "helpPulse 2s infinite"), Rt && (Rt.remove(), Rt = null), vt && (vt.remove(), vt = null), ho && (ho.remove(), ho = null);
  }
  function Io(e) {
    var _a2, _b;
    if (e >= Po.length) {
      La();
      return;
    }
    const g = Po[e], B = document.querySelector(g.selector);
    if (!B) {
      Io(e + 1);
      return;
    }
    B.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Rt && Rt.remove(), vt && vt.remove();
    const E = B.getBoundingClientRect(), G = window.innerWidth, R = window.innerHeight, Y = 320, D = 180;
    Rt = document.createElement("div"), Rt.style.cssText = `
    position: fixed;
    left: ${E.left - 6}px; top: ${E.top - 6}px;
    width: ${E.width + 12}px; height: ${E.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Rt);
    const H = G - E.right, W = E.left, fe = R - E.bottom, z = E.top;
    let ee = g.position || "bottom";
    ee === "bottom" && fe < D + 20 && (ee = "top"), ee === "top" && z < D + 20 && (ee = "right"), ee === "right" && H < Y + 20 && (ee = "left"), ee === "left" && W < Y + 20 && (ee = "bottom");
    let ve, de, X = "";
    switch (ee) {
      case "bottom":
        ve = E.left + E.width / 2 - Y / 2, de = E.bottom + 14, X = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ve = E.left + E.width / 2 - Y / 2, de = E.top - D - 14, X = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ve = E.right + 14, de = E.top + E.height / 2 - D / 2, X = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ve = E.left - Y - 14, de = E.top + E.height / 2 - D / 2, X = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ve = Math.max(10, Math.min(ve, G - Y - 10)), de = Math.max(10, Math.min(de, R - D - 10)), vt = document.createElement("div"), vt.style.cssText = `
    position: fixed;
    left: ${ve}px; top: ${de}px;
    width: ${Y}px;
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
  `, vt.innerHTML = `
    <div style="${X}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Po.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Po.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Po.map((pe, J) => `<div style="width:${J === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${J === e ? "#0099ff" : J < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(vt), (_a2 = vt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Io(e + 1);
    }), (_b = vt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Io(e - 1);
    });
    const Q = (pe) => {
      if (!Zo) {
        document.removeEventListener("keydown", Q);
        return;
      }
      (pe.key === "ArrowRight" || pe.key === "Enter") && (Io(e + 1), document.removeEventListener("keydown", Q)), pe.key === "ArrowLeft" && (Io(Math.max(0, e - 1)), document.removeEventListener("keydown", Q)), pe.key === "Escape" && (Cn(), document.removeEventListener("keydown", Q));
    };
    document.addEventListener("keydown", Q);
  }
  function La() {
    var _a2;
    Rt && (Rt.remove(), Rt = null), vt && (vt.remove(), vt = null), vt = document.createElement("div"), vt.style.cssText = `
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
  `, vt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(vt), (_a2 = vt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Cn());
  }
  function qa(e) {
    var _a2;
    const g = e.split(/\r?\n/), B = {
      force: "TONF",
      length: "M"
    }, E = [], G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = [], H = [], W = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), z = [], ee = [];
    let ve = "", de = "";
    for (const ue of g) {
      const me = ue.trim();
      if (!me || me.startsWith("$")) {
        me.startsWith("$ ") && (de = me.substring(2).trim());
        continue;
      }
      if (de === "CONTROLS") {
        const te = me.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        te && (B.force = te[1], B.length = te[2]);
        const Me = me.match(/TITLE2\s+"([^"]+)"/);
        Me && (ve = Me[1]);
      }
      if (de === "STORIES - IN SEQUENCE FROM TOP") {
        const te = me.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (te) {
          const Me = te[1], K = te[2] ? parseFloat(te[2]) : 0, be = te[3] ? parseFloat(te[3]) : void 0;
          E.push({
            name: Me,
            height: K,
            elev: be ?? 0
          });
        }
      }
      if (de === "MATERIAL PROPERTIES") {
        const te = me.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (te) {
          const Me = te[1];
          G.has(Me) || G.set(Me, {
            type: te[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const K = G.get(Me);
          te[2] && (K.type = te[2]);
          const be = me.match(/\bE\s+([\d.eE+-]+)/);
          be && (K.E = parseFloat(be[1]));
          const Le = me.match(/\bU\s+([\d.eE+-]+)/);
          Le && (K.nu = parseFloat(Le[1]), K.G = K.E / (2 * (1 + K.nu)));
          const Ee = me.match(/\bFY\s+([\d.eE+-]+)/);
          Ee && (K.fy = parseFloat(Ee[1]));
          const De = me.match(/\bFC\s+([\d.eE+-]+)/);
          De && (K.fc = parseFloat(De[1]));
          const Ge = me.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ge && (K.density = parseFloat(Ge[1]));
        }
      }
      if (de === "FRAME SECTIONS") {
        const te = me.match(/FRAMESECTION\s+"([^"]+)"/);
        if (te) {
          const Me = te[1];
          R.has(Me) || R.set(Me, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const K = R.get(Me), be = me.match(/MATERIAL\s+"([^"]+)"/);
          be && (K.material = be[1]);
          const Le = me.match(/SHAPE\s+"([^"]+)"/);
          Le && (K.shape = Le[1]);
          const Ee = me.match(/\bD\s+([\d.eE+-]+)/);
          Ee && (K.D = parseFloat(Ee[1]));
          const De = me.match(/\bB\s+([\d.eE+-]+)/);
          De && (K.B = parseFloat(De[1]));
          const Ge = me.match(/\bTF\s+([\d.eE+-]+)/);
          Ge && (K.TF = parseFloat(Ge[1]));
          const Ce = me.match(/\bTW\s+([\d.eE+-]+)/);
          Ce && (K.TW = parseFloat(Ce[1]));
          const et = me.match(/\bR\s+([\d.eE+-]+)/);
          et && (K.R = parseFloat(et[1]));
          const rt = me.match(/FILLMATERIAL\s+"([^"]+)"/);
          rt && (K.fillMaterial = rt[1]);
          const Xe = me.match(/I2MOD\s+([\d.eE+-]+)/);
          Xe && (K.modI2 = parseFloat(Xe[1]));
          const wt = me.match(/I3MOD\s+([\d.eE+-]+)/);
          wt && (K.modI3 = parseFloat(wt[1]));
        }
      }
      if (de === "POINT COORDINATES") {
        const te = me.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        te && Y.set(te[1], [
          parseFloat(te[2]),
          parseFloat(te[3])
        ]);
      }
      if (de === "LINE CONNECTIVITIES") {
        const te = me.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        te && D.push({
          name: te[1],
          type: te[2],
          pt1: te[3],
          pt2: te[4],
          nStories: parseInt(te[5])
        });
      }
      if (de === "POINT ASSIGNS") {
        const te = me.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        te && W.set(`${te[1]}@${te[2]}`, te[3].split(/\s+/));
      }
      if (de === "LINE ASSIGNS") {
        const te = me.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (te) {
          const Me = {
            story: te[2],
            section: te[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, K = me.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          K && (Me.rigidZone = parseFloat(K[1]));
          const be = me.match(/RELEASE\s+"([^"]+)"/);
          be && (Me.releases = be[1].split(/\s+/));
          const Le = me.match(/ANG\s+([-\d.eE+]+)/);
          Le && (Me.angle = parseFloat(Le[1])), fe.set(`${te[1]}@${te[2]}`, Me);
        }
      }
      if (de === "GRIDS") {
        const te = me.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        te && ee.push({
          label: te[1],
          dir: te[2],
          coord: parseFloat(te[3])
        });
      }
      if (de === "FRAME OBJECT LOADS") {
        const te = me.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        te && z.push({
          line: te[1],
          story: te[2],
          type: te[3],
          dir: te[4],
          lc: te[5],
          val: parseFloat(te[6])
        });
      }
      if (de === "AREA CONNECTIVITIES") {
        const te = me.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (te) {
          const Me = ((_a2 = te[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((K) => K.replace(/"/g, ""))) || [];
          H.push({
            name: te[1],
            pts: Me,
            nStories: 0
          });
        }
      }
    }
    const X = /* @__PURE__ */ new Map();
    if (E.length > 0) {
      const ue = E.length - 1;
      X.set(E[ue].name, E[ue].elev);
      for (let me = ue - 1; me >= 0; me--) {
        const Me = X.get(E[me + 1].name) + E[me].height;
        E[me].elev = Me, X.set(E[me].name, Me);
      }
    }
    const Q = [], pe = [], J = /* @__PURE__ */ new Map(), V = (ue, me) => `${ue}@${me}`, ne = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
    for (const ue of D) Ae.set(ue.name, ue);
    for (const ue of D) for (const [me, te] of fe) {
      if (!me.startsWith(ue.name + "@")) continue;
      const Me = te.story, K = E.findIndex((be) => be.name === Me);
      if (!(K < 0)) if (ue.type === "COLUMN" || ue.type === "BRACE") {
        ne.add(V(ue.pt2, Me));
        const be = Math.max(ue.nStories, 1), Le = Math.min(K + be, E.length - 1);
        ne.add(V(ue.pt1, E[Le].name));
      } else ne.add(V(ue.pt1, Me)), ne.add(V(ue.pt2, Me));
    }
    for (const [ue] of W) ne.add(ue);
    for (const ue of ne) {
      const [me, te] = ue.split("@"), Me = Y.get(me), K = X.get(te);
      Me === void 0 || K === void 0 || (Q.push([
        Me[0],
        Me[1],
        K
      ]), pe.push(ue), J.set(ue, Q.length - 1));
    }
    const He = [], Ne = [], Be = [], tt = [], ct = /* @__PURE__ */ new Map();
    for (const ue of D) for (const [me, te] of fe) {
      if (!me.startsWith(ue.name + "@")) continue;
      const Me = te.story, K = E.findIndex((Ce) => Ce.name === Me);
      if (K < 0) continue;
      let be, Le;
      if (ue.type === "COLUMN" || ue.type === "BRACE") {
        const Ce = Math.max(ue.nStories, 1), et = Math.min(K + Ce, E.length - 1);
        be = V(ue.pt1, E[et].name), Le = V(ue.pt2, Me);
      } else be = V(ue.pt1, Me), Le = V(ue.pt2, Me);
      const Ee = J.get(be), De = J.get(Le);
      if (Ee === void 0 || De === void 0 || Ee === De) continue;
      const Ge = He.length;
      if (He.push([
        Ee,
        De
      ]), Ne.push(ue.name), Be.push(ue.type), tt.push(Me), ct.set(Ge, te.section), te.rigidZone > 0 && Mt.set(Ge, [
        te.rigidZone,
        te.rigidZone
      ]), te.releases.length > 0) {
        const Ce = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const et of te.releases) et === "TI" && (Ce[0] = true), et === "M2I" && (Ce[1] = true), et === "M3I" && (Ce[2] = true), et === "TJ" && (Ce[3] = true), et === "M2J" && (Ce[4] = true), et === "M3J" && (Ce[5] = true);
        Pt.set(Ge, Ce);
      }
    }
    const Ve = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map();
    for (const [ue, me] of ct) {
      const te = R.get(me);
      if (!te) continue;
      const Me = G.get(te.material);
      Me && (Ve.set(ue, Me.E), Qe.set(ue, Me.G));
      const K = te.D, be = te.B, Le = te.TF, Ee = te.TW;
      let De = 0, Ge = 0, Ce = 0, et = 0, rt = 0, Xe = 0, wt = "rect";
      switch (te.shape) {
        case "Concrete Rectangular":
          De = K * be, Ge = be * K ** 3 / 12, Ce = K * be ** 3 / 12, et = be * K ** 3 * (1 / 3 - 0.21 * (K / be) * (1 - K ** 4 / (12 * be ** 4))), rt = Xe = 5 / 6 * De, wt = "rect";
          break;
        case "Concrete Circle":
          De = Math.PI * K ** 2 / 4, Ge = Ce = Math.PI * K ** 4 / 64, et = Math.PI * K ** 4 / 32, rt = Xe = 0.9 * De, wt = "circ";
          break;
        case "Steel I/Wide Flange":
          De = 2 * be * Le + (K - 2 * Le) * Ee, Ge = (be * K ** 3 - (be - Ee) * (K - 2 * Le) ** 3) / 12, Ce = (2 * Le * be ** 3 + (K - 2 * Le) * Ee ** 3) / 12, et = (2 * be * Le ** 3 + (K - 2 * Le) * Ee ** 3) / 3, rt = (K - 2 * Le) * Ee, Xe = 2 * be * Le * 5 / 6, wt = "I";
          break;
        case "Steel Tube":
          De = K * be - (K - 2 * Ee) * (be - 2 * Ee), Ge = (be * K ** 3 - (be - 2 * Ee) * (K - 2 * Ee) ** 3) / 12, Ce = (K * be ** 3 - (K - 2 * Ee) * (be - 2 * Ee) ** 3) / 12, et = 2 * Ee * (K - Ee) * (be - Ee) * ((K - Ee) * (be - Ee)) / (K - Ee + (be - Ee)), rt = 2 * K * Ee, Xe = 2 * be * Ee, wt = "HSS";
          break;
        case "Filled Steel Tube":
          De = K * be, Ge = be * K ** 3 / 12, Ce = K * be ** 3 / 12, et = 2 * Ee * (K - Ee) * (be - Ee) * ((K - Ee) * (be - Ee)) / (K - Ee + (be - Ee)), rt = 2 * K * Ee + 5 / 6 * (K - 2 * Ee) * (be - 2 * Ee), Xe = 2 * be * Ee + 5 / 6 * (K - 2 * Ee) * (be - 2 * Ee), wt = "CFT";
          break;
        case "Steel Angle": {
          const Et = Le || Ee;
          De = Et * (K + be - Et), Ge = Et * (K ** 3 + be * Et ** 2 + Et ** 2 * (K - Et)) / 12, Ce = Et * (be ** 3 + K * Et ** 2 + Et ** 2 * (be - Et)) / 12, et = (K + be - Et) * Et ** 3 / 3, rt = K * Et, Xe = be * Et, wt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          De = 2 * be * Le + (K - 2 * Le) * Ee, Ge = (Ee * K ** 3 + 2 * be * Le * (K - Le) ** 2) / 12, Ce = (2 * Le * be ** 3 + (K - 2 * Le) * Ee ** 3) / 12, et = (2 * be * Le ** 3 + (K - 2 * Le) * Ee ** 3) / 3, rt = (K - 2 * Le) * Ee, Xe = 2 * be * Le * 5 / 6, wt = te.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          De = 2 * (2 * be * Le + (K - 2 * Le) * Ee), Ge = 2 * (Ee * K ** 3 + 2 * be * Le * (K - Le) ** 2) / 12, Ce = 2 * (2 * Le * be ** 3 + (K - 2 * Le) * Ee ** 3) / 12, et = 2 * (2 * be * Le ** 3 + (K - 2 * Le) * Ee ** 3) / 3, rt = 2 * (K - 2 * Le) * Ee, Xe = 4 * be * Le * 5 / 6, wt = "2C";
          break;
        default:
          K > 0 && be > 0 && (De = K * be, Ge = be * K ** 3 / 12, Ce = K * be ** 3 / 12, et = Math.min(K, be) * Math.max(K, be) ** 3 / 3 * 0.3, rt = Xe = 5 / 6 * De);
          break;
      }
      te.modI2 && (Ce *= te.modI2), te.modI3 && (Ge *= te.modI3), yt.set(ue, De), Nt.set(ue, Ge), kt.set(ue, Ce), Gt.set(ue, et), rt > 0 && St.set(ue, rt), Xe > 0 && bt.set(ue, Xe), zo.set(ue, {
        type: wt,
        b: be || void 0,
        h: K || void 0,
        d: wt === "circ" || wt === "pipe" ? K : void 0,
        tw: Ee || void 0,
        tf: Le || void 0,
        r: te.R,
        name: me
      });
    }
    const Te = /* @__PURE__ */ new Map();
    for (const [ue, me] of W) {
      const te = J.get(ue);
      if (te === void 0) continue;
      const Me = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const K of me) K === "UX" && (Me[0] = true), K === "UY" && (Me[1] = true), K === "UZ" && (Me[2] = true), K === "RX" && (Me[3] = true), K === "RY" && (Me[4] = true), K === "RZ" && (Me[5] = true);
      Te.set(te, Me);
    }
    const ht = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map();
    for (let ue = 0; ue < Ne.length; ue++) It.set(`${Ne[ue]}@${tt[ue]}`, ue);
    for (const ue of z) {
      const me = It.get(`${ue.line}@${ue.story}`);
      if (me === void 0) continue;
      const [te, Me] = He[me], K = Q[te], be = Q[Me], Le = Math.sqrt((be[0] - K[0]) ** 2 + (be[1] - K[1]) ** 2 + (be[2] - K[2]) ** 2);
      if (Le < 1e-10) continue;
      const Ee = ue.val * Le / 2;
      let De = 0, Ge = 0, Ce = 0;
      ue.dir === "GRAV" || ue.dir === "GRAVITY" ? Ce = -Ee : ue.dir === "X" ? De = Ee : ue.dir === "Y" ? Ge = Ee : ue.dir === "Z" && (Ce = -Ee);
      for (const et of [
        te,
        Me
      ]) {
        const rt = ht.get(et) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        rt[0] += De, rt[1] += Ge, rt[2] += Ce, ht.set(et, rt);
      }
    }
    const zt = /* @__PURE__ */ new Map();
    for (const [ue, me] of ct) {
      const te = R.get(me);
      if (!te) continue;
      const Me = G.get(te.material);
      (Me == null ? void 0 : Me.density) && zt.set(ue, Me.density);
    }
    return {
      units: B,
      stories: E.reverse(),
      materials: G,
      frameSections: R,
      nodes: Q,
      nodeNames: pe,
      nodeNameToIdx: J,
      elements: He,
      elementNames: Ne,
      elementTypes: Be,
      elementStories: tt,
      elementSections: ct,
      nodeInputs: {
        supports: Te,
        loads: ht
      },
      elementInputs: {
        elasticities: Ve,
        shearModuli: Qe,
        areas: yt,
        momentsOfInertiaZ: Nt,
        momentsOfInertiaY: kt,
        torsionalConstants: Gt,
        shearAreasY: St,
        shearAreasZ: bt,
        rigidOffsets: Mt,
        momentReleases: Pt,
        densities: zt,
        sectionShapes: zo
      },
      sectionShapes: zo,
      grids: ee,
      info: {
        nNodes: Q.length,
        nFrames: He.length,
        nAreas: H.length,
        title: ve
      }
    };
  }
  function Fa(e) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: g, elements: B, nodeInputs: E, elementInputs: G, title: R, e2kModel: Y } = e, D = ((_a2 = Y == null ? void 0 : Y.units) == null ? void 0 : _a2.force) || ((_b = e.units) == null ? void 0 : _b.force) || "TONF", H = ((_c = Y == null ? void 0 : Y.units) == null ? void 0 : _c.length) || ((_d = e.units) == null ? void 0 : _d.length) || "M", W = [], fe = (J) => Math.round(J * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${D}"  "${H}"  "C"  `), R && W.push(`  TITLE2  "${R}"  `), W.push("");
    let z = [], ee = /* @__PURE__ */ new Map();
    if ((_e = Y == null ? void 0 : Y.stories) == null ? void 0 : _e.length) {
      const J = Y.stories;
      W.push("$ STORIES - IN SEQUENCE FROM TOP");
      for (let V = J.length - 1; V >= 1; V--) {
        const ne = fe(J[V].height);
        W.push(`  STORY "${J[V].name}"  HEIGHT ${ne} MASTERSTORY "Yes"  `);
      }
      W.push(`  STORY "${J[0].name}"  ELEV ${fe(J[0].elev)} `);
      for (const V of J) z.push(V.name), ee.set(fe(V.elev), V.name);
    } else {
      const J = /* @__PURE__ */ new Set();
      g.forEach((ne) => J.add(fe(ne[2])));
      const V = [
        ...J
      ].sort((ne, Ae) => ne - Ae);
      z.push("Base"), ee.set(V[0], "Base");
      for (let ne = 1; ne < V.length; ne++) {
        const Ae = `Level_${ne}`;
        z.push(Ae), ee.set(V[ne], Ae);
      }
      W.push("$ STORIES - IN SEQUENCE FROM TOP");
      for (let ne = V.length - 1; ne >= 1; ne--) W.push(`  STORY "${z[ne]}"  HEIGHT ${fe(V[ne] - V[ne - 1])} MASTERSTORY "Yes"  `);
      V.length > 0 && W.push(`  STORY "Base"  ELEV ${V[0]} `);
    }
    if (W.push(""), (_f = Y == null ? void 0 : Y.grids) == null ? void 0 : _f.length) {
      W.push("$ GRID LINES");
      for (const J of Y.grids) W.push(`  GRID "${J.label}"  TYPE "${J.dir === "X" ? "X" : "Y"}"  COORD ${J.coord}  `);
      W.push("");
    }
    if (W.push("$ MATERIAL PROPERTIES"), Y == null ? void 0 : Y.materials) for (const [J, V] of Y.materials) {
      const ne = V.density ? V.density * 9.81 : 0;
      W.push(`  MATERIAL  "${J}"    TYPE "${V.type}"    WEIGHTPERVOLUME ${ne || 0}`), W.push(`  MATERIAL  "${J}"    SYMTYPE "Isotropic"  E ${V.E}  U ${V.nu}  A 1.17E-05`), V.fy && W.push(`  MATERIAL  "${J}"    FY ${V.fy}`), V.fc && W.push(`  MATERIAL  "${J}"    FC ${V.fc}`);
    }
    else {
      const J = /* @__PURE__ */ new Set();
      (_g = G.elasticities) == null ? void 0 : _g.forEach((ne) => J.add(ne));
      let V = 0;
      for (const ne of J) {
        const Ae = `Mat_${++V}`;
        W.push(`  MATERIAL  "${Ae}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`), W.push(`  MATERIAL  "${Ae}"    SYMTYPE "Isotropic"  E ${ne}  U 0.3  A 1.17E-05`);
      }
    }
    if (W.push(""), W.push("$ FRAME SECTIONS"), Y == null ? void 0 : Y.frameSections) for (const [J, V] of Y.frameSections) {
      let ne = `  FRAMESECTION  "${J}"  MATERIAL "${V.material}"  SHAPE "${V.shape}"`;
      V.D && (ne += `  D ${V.D}`), V.B && (ne += `  B ${V.B}`), V.TF && (ne += `  TF ${V.TF}`), V.TW && (ne += `  TW ${V.TW}`), W.push(ne);
    }
    else {
      const J = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
      (_h = G.elasticities) == null ? void 0 : _h.forEach((He) => V.add(He));
      const ne = /* @__PURE__ */ new Map();
      let Ae = 0;
      for (const He of V) ne.set(He, `Mat_${++Ae}`);
      B.forEach((He, Ne) => {
        var _a3, _b2;
        if (He.length !== 2) return;
        const Be = (_a3 = G.sectionShapes) == null ? void 0 : _a3.get(Ne), tt = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(Ne)) ?? 0, ct = ne.get(tt) || "Mat_1", Ve = (Be == null ? void 0 : Be.name) || `Sec_${Ne}`;
        if (!J.has(Ve)) if (J.add(Ve), Be) {
          const Qe = Be.h ?? 0, yt = Be.b ?? 0, St = Be.d ?? 0, bt = Be.tf ?? 0, Mt = Be.tw ?? 0, Nt = {
            rect: "Concrete Rectangular",
            circ: "Concrete Circle",
            I: "Steel I/Wide Flange",
            HSS: "Steel Tube",
            pipe: "Steel Pipe",
            L: "Steel Angle",
            C: "Steel Channel",
            "2C": "Steel Double Channel"
          }[Be.type] || "Concrete Rectangular";
          let kt = `  FRAMESECTION  "${Ve}"  MATERIAL "${ct}"  SHAPE "${Nt}"`;
          Qe && (kt += `  D ${Qe}`), yt && (kt += `  B ${yt}`), St && !Qe && (kt += `  D ${St}`), bt && (kt += `  TF ${bt}`), Mt && (kt += `  TW ${Mt}`), W.push(kt);
        } else W.push(`  FRAMESECTION  "${Ve}"  MATERIAL "${ct}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `);
      });
    }
    W.push(""), W.push("$ POINT COORDINATES");
    const ve = /* @__PURE__ */ new Map();
    let de = 0;
    if (g.forEach((J) => {
      const V = `${fe(J[0])},${fe(J[1])}`;
      ve.has(V) || ve.set(V, `${++de}`);
    }), (_i = Y == null ? void 0 : Y.nodeNames) == null ? void 0 : _i.length) {
      const J = /* @__PURE__ */ new Set();
      for (let V = 0; V < g.length; V++) {
        const ne = Y.nodeNames[V];
        if (!ne) continue;
        const Ae = ne.split("@")[0];
        if (J.has(Ae)) continue;
        J.add(Ae);
        const He = g[V];
        W.push(`  POINT "${Ae}"  ${fe(He[0])} ${fe(He[1])} `);
      }
    } else for (const [J, V] of ve) {
      const [ne, Ae] = J.split(",").map(Number);
      W.push(`  POINT "${V}"  ${ne} ${Ae} `);
    }
    W.push("");
    const X = (J) => {
      var _a3;
      if ((_a3 = Y == null ? void 0 : Y.nodeNames) == null ? void 0 : _a3[J]) {
        const Ae = Y.nodeNames[J].split("@");
        return {
          pt: Ae[0],
          story: Ae[1] || "Base"
        };
      }
      const V = g[J], ne = `${fe(V[0])},${fe(V[1])}`;
      return {
        pt: ve.get(ne) || "1",
        story: ee.get(fe(V[2])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const Q = [], pe = [
      ...ee.keys()
    ].sort((J, V) => J - V);
    return B.forEach((J, V) => {
      var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
      if (J.length !== 2) return;
      const ne = ((_a3 = Y == null ? void 0 : Y.elementNames) == null ? void 0 : _a3[V]) || `E${V + 1}`, Ae = ((_b2 = Y == null ? void 0 : Y.elementTypes) == null ? void 0 : _b2[V]) || Aa(g, J), He = ((_c2 = Y == null ? void 0 : Y.elementStories) == null ? void 0 : _c2[V]) || X(J[1]).story, Ne = ((_d2 = Y == null ? void 0 : Y.elementSections) == null ? void 0 : _d2.get(V)) || ((_f2 = (_e2 = G.sectionShapes) == null ? void 0 : _e2.get(V)) == null ? void 0 : _f2.name) || `Sec_${V}`;
      if (Ae === "BEAM") {
        const Ve = X(J[0]), Qe = X(J[1]);
        W.push(`  LINE  "${ne}"  BEAM  "${Ve.pt}"  "${Qe.pt}"  0`);
      } else {
        const Ve = g[J[0]][2] <= g[J[1]][2] ? J[0] : J[1], Qe = g[J[0]][2] <= g[J[1]][2] ? J[1] : J[0], yt = X(Ve), St = X(Qe), bt = fe(g[Ve][2]), Mt = fe(g[Qe][2]), Pt = pe.indexOf(bt), Nt = pe.indexOf(Mt), kt = Math.max(1, Nt >= 0 && Pt >= 0 ? Nt - Pt : 1);
        W.push(`  LINE  "${ne}"  ${Ae}  "${yt.pt}"  "${St.pt}"  ${kt}`);
      }
      let Be = `  LINEASSIGN  "${ne}"  "${He}"  SECTION "${Ne}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"`;
      const tt = (_g2 = G.rigidOffsets) == null ? void 0 : _g2.get(V);
      tt && (tt[0] > 0 || tt[1] > 0) && (Be += `  RIGIDZONE ${fe(tt[0])}`);
      const ct = (_h2 = G.momentReleases) == null ? void 0 : _h2.get(V);
      if (ct) {
        const Qe = [
          "TI",
          "M2I",
          "M3I",
          "TJ",
          "M2J",
          "M3J"
        ].filter((yt, St) => ct[St]);
        Qe.length > 0 && (Be += `  RELEASE "${Qe.join(" ")}"`);
      }
      Q.push(Be);
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_j = E.supports) == null ? void 0 : _j.forEach((J, V) => {
      const ne = [];
      if (J[0] && ne.push("UX"), J[1] && ne.push("UY"), J[2] && ne.push("UZ"), J[3] && ne.push("RX"), J[4] && ne.push("RY"), J[5] && ne.push("RZ"), ne.length > 0) {
        const Ae = X(V);
        W.push(`  POINTASSIGN  "${Ae.pt}"  "${Ae.story}"  RESTRAINT "${ne.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), Q.forEach((J) => W.push(J)), W.push(""), W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1'), W.push('  LOADPATTERN "Live"  TYPE "Live"  '), W.push(""), E.loads && E.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), E.loads.forEach((J, V) => {
      const [ne, Ae, He] = J, Ne = X(V);
      Math.abs(ne) > 1e-10 && W.push(`  POINTLOAD  "${Ne.pt}"  "${Ne.story}"  "Dead"  TYPE "FORCE"  FX ${ne}`), Math.abs(Ae) > 1e-10 && W.push(`  POINTLOAD  "${Ne.pt}"  "${Ne.story}"  "Dead"  TYPE "FORCE"  FY ${Ae}`), Math.abs(He) > 1e-10 && W.push(`  POINTLOAD  "${Ne.pt}"  "${Ne.story}"  "Dead"  TYPE "FORCE"  FZ ${He}`);
    }), W.push("")), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Aa(e, g) {
    const B = e[g[0]], E = e[g[1]], G = Math.abs(E[2] - B[2]), R = Math.sqrt((E[0] - B[0]) ** 2 + (E[1] - B[1]) ** 2), Y = G > R * 0.5;
    return Y && R > 0.01 ? "BRACE" : Y ? "COLUMN" : "BEAM";
  }
  function Ca(e) {
    var _a2, _b;
    const { nodes: g, elements: B, nodeInputs: E, elementInputs: G } = e, R = [];
    return R.push("# OpenSeesPy model exported from Awatif FEM Studio"), R.push(`# ${g.length} nodes, ${B.length} elements`), R.push(""), R.push("import openseespy.opensees as ops"), R.push(""), R.push("ops.wipe()"), R.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), R.push(""), R.push("# --- Nodes ---"), g.forEach((Y, D) => {
      R.push(`ops.node(${D + 1}, ${Y[0]}, ${Y[1]}, ${Y[2]})`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = E.supports) == null ? void 0 : _a2.forEach((Y, D) => {
      const H = Y.map((W) => W ? 1 : 0).join(", ");
      R.push(`ops.fix(${D + 1}, ${H})`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), R.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), R.push(""), R.push("# --- Elements (elasticBeamColumn) ---"), B.forEach((Y, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (Y.length !== 2) return;
      const H = g[Y[0]], W = g[Y[1]], z = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, ee = ((_a3 = G.areas) == null ? void 0 : _a3.get(D)) ?? 1, ve = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, de = ((_c = G.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, X = ((_d = G.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, Q = ((_e = G.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, pe = ((_f = G.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      R.push(`ops.element('elasticBeamColumn', ${D + 1}, ${Y[0] + 1}, ${Y[1] + 1}, ${ee}, ${ve}, ${de}, ${X}, ${Q}, ${pe}, ${z})`);
    }), R.push(""), E.loads && E.loads.size > 0 && (R.push("# --- Loads ---"), R.push("ops.timeSeries('Linear', 1)"), R.push("ops.pattern('Plain', 1, 1)"), E.loads.forEach((Y, D) => {
      const H = Y.map((W) => W).join(", ");
      R.push(`ops.load(${D + 1}, ${H})`);
    }), R.push("")), R.push("# --- Analysis ---"), R.push("ops.system('BandGeneral')"), R.push("ops.numberer('RCM')"), R.push("ops.constraints('Plain')"), R.push("ops.integrator('LoadControl', 1.0)"), R.push("ops.algorithm('Linear')"), R.push("ops.analysis('Static')"), R.push("ops.analyze(1)"), R.push(""), R.push("# --- Results ---"), R.push('print("\\n=== Displacements ===")'), g.forEach((Y, D) => {
      R.push(`print(f"Node {${D + 1}}: {ops.nodeDisp(${D + 1})}")`);
    }), R.push(""), R.push('print("\\n=== Reactions ===")'), R.push("ops.reactions()"), (_b = E.supports) == null ? void 0 : _b.forEach((Y, D) => {
      R.push(`print(f"Node {${D + 1}}: {ops.nodeReaction(${D + 1})}")`);
    }), R.join(`
`);
  }
  function Pa(e) {
    var _a2, _b;
    const { nodes: g, elements: B, nodeInputs: E, elementInputs: G } = e, R = [];
    return R.push("# OpenSees Tcl model exported from Awatif FEM Studio"), R.push(`# ${g.length} nodes, ${B.length} elements`), R.push(""), R.push("wipe"), R.push("model basic -ndm 3 -ndf 6"), R.push(""), R.push("# --- Nodes ---"), g.forEach((Y, D) => {
      R.push(`node ${D + 1} ${Y[0]} ${Y[1]} ${Y[2]}`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = E.supports) == null ? void 0 : _a2.forEach((Y, D) => {
      const H = Y.map((W) => W ? 1 : 0).join(" ");
      R.push(`fix ${D + 1} ${H}`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("geomTransf Linear 1 0.0 0.0 1.0"), R.push("geomTransf Linear 2 -1.0 0.0 0.0"), R.push(""), R.push("# --- Elements ---"), B.forEach((Y, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (Y.length !== 2) return;
      const H = g[Y[0]], W = g[Y[1]], z = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, ee = ((_a3 = G.areas) == null ? void 0 : _a3.get(D)) ?? 1, ve = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, de = ((_c = G.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, X = ((_d = G.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, Q = ((_e = G.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, pe = ((_f = G.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      R.push(`element elasticBeamColumn ${D + 1} ${Y[0] + 1} ${Y[1] + 1} ${ee} ${ve} ${de} ${X} ${Q} ${pe} ${z}`);
    }), R.push(""), E.loads && E.loads.size > 0 && (R.push("# --- Loads ---"), R.push("timeSeries Linear 1"), R.push("pattern Plain 1 1 {"), E.loads.forEach((Y, D) => {
      const H = Y.map((W) => W).join(" ");
      R.push(`  load ${D + 1} ${H}`);
    }), R.push("}"), R.push("")), R.push("# --- Analysis ---"), R.push("system BandGeneral"), R.push("numberer RCM"), R.push("constraints Plain"), R.push("integrator LoadControl 1.0"), R.push("algorithm Linear"), R.push("analysis Static"), R.push("analyze 1"), R.push(""), R.push("# --- Results ---"), R.push('puts "\\n=== Displacements ==="'), g.forEach((Y, D) => {
      R.push(`puts "Node ${D + 1}: [nodeDisp ${D + 1}]"`);
    }), R.push('puts "\\n=== Reactions ==="'), R.push("reactions"), (_b = E.supports) == null ? void 0 : _b.forEach((Y, D) => {
      R.push(`puts "Node ${D + 1}: [nodeReaction ${D + 1}]"`);
    }), R.join(`
`);
  }
  function Oa(e) {
    const g = [], B = [], E = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
    for (const ve of e.split(/\r?\n/)) {
      const de = ve.trim(), X = de.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (X) {
        const V = parseInt(X[1]), ne = g.length;
        g.push([
          parseFloat(X[2]),
          parseFloat(X[3]),
          parseFloat(X[4])
        ]), z.set(V, ne);
        continue;
      }
      const Q = de.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (Q) {
        const V = parseInt(Q[1]), ne = z.get(V);
        ne !== void 0 && E.set(ne, [
          Q[2] === "1",
          Q[3] === "1",
          Q[4] === "1",
          Q[5] === "1",
          Q[6] === "1",
          Q[7] === "1"
        ]);
        continue;
      }
      const pe = de.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (pe) {
        const V = parseInt(pe[1]), ne = z.get(parseInt(pe[2])), Ae = z.get(parseInt(pe[3]));
        if (ne !== void 0 && Ae !== void 0) {
          const He = B.length;
          B.push([
            ne,
            Ae
          ]), ee.set(V, He), D.set(He, parseFloat(pe[4])), R.set(He, parseFloat(pe[5])), Y.set(He, parseFloat(pe[6])), fe.set(He, parseFloat(pe[7])), H.set(He, parseFloat(pe[8])), W.set(He, parseFloat(pe[9]));
        }
        continue;
      }
      const J = de.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (J) {
        const V = z.get(parseInt(J[1]));
        V !== void 0 && G.set(V, [
          parseFloat(J[2]),
          parseFloat(J[3]),
          parseFloat(J[4]),
          parseFloat(J[5]),
          parseFloat(J[6]),
          parseFloat(J[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: B,
      nodeInputs: {
        supports: E,
        loads: G
      },
      elementInputs: {
        elasticities: R,
        shearModuli: Y,
        areas: D,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: fe
      }
    };
  }
  function _a(e) {
    const g = [], B = [], E = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const ee of e.split(/\r?\n/)) {
      const ve = ee.trim();
      if (ve.startsWith("#") || ve.startsWith("//")) continue;
      const de = ve.split(/\s+/);
      if (de[0] === "node" && de.length >= 5) {
        const X = parseInt(de[1]), Q = g.length;
        g.push([
          parseFloat(de[2]),
          parseFloat(de[3]),
          parseFloat(de[4])
        ]), z.set(X, Q);
        continue;
      }
      if (de[0] === "fix" && de.length >= 8) {
        const X = z.get(parseInt(de[1]));
        X !== void 0 && E.set(X, [
          de[2] === "1",
          de[3] === "1",
          de[4] === "1",
          de[5] === "1",
          de[6] === "1",
          de[7] === "1"
        ]);
        continue;
      }
      if (de[0] === "element" && de[1] === "elasticBeamColumn" && de.length >= 12) {
        const X = z.get(parseInt(de[3])), Q = z.get(parseInt(de[4]));
        if (X !== void 0 && Q !== void 0) {
          const pe = B.length;
          B.push([
            X,
            Q
          ]), D.set(pe, parseFloat(de[5])), R.set(pe, parseFloat(de[6])), Y.set(pe, parseFloat(de[7])), fe.set(pe, parseFloat(de[8])), H.set(pe, parseFloat(de[9])), W.set(pe, parseFloat(de[10]));
        }
        continue;
      }
      if (de[0] === "load" && de.length >= 8) {
        const X = z.get(parseInt(de[1]));
        X !== void 0 && G.set(X, [
          parseFloat(de[2]),
          parseFloat(de[3]),
          parseFloat(de[4]),
          parseFloat(de[5]),
          parseFloat(de[6]),
          parseFloat(de[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: B,
      nodeInputs: {
        supports: E,
        loads: G
      },
      elementInputs: {
        elasticities: R,
        shearModuli: Y,
        areas: D,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: fe
      }
    };
  }
  ws = Eo.state(false);
  Wa = function(e) {
    e.nodeInputs || (e.nodeInputs = Eo.state({})), e.elementInputs || (e.elementInputs = Eo.state({})), e.deformOutputs || (e.deformOutputs = Eo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Eo.state({}));
    let g = "tonf", B = "m", E = mo(g, B), G = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const R = {
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
    }, Y = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
    let H = false;
    const W = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Map();
    let z = "", ee = {}, ve = null, de = "", X = [], Q = [], pe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), He = null, Ne = [], Be = 0.2, tt = 2, ct = 2, Ve = false, Qe = 2, yt = "x", St = /* @__PURE__ */ new Set(), bt = true, Mt = 0.15, Pt = 2, Nt = 2, kt = /* @__PURE__ */ new Set();
    const Gt = () => ({
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
    }), zo = (t, o) => ({
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
      }, Gt),
      vigasY: Array.from({
        length: o
      }, Gt)
    }), Te = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let ht = 0, It = 3, zt = false, ue = 0, me = null, te = 0, Me = [], K = 1, be = true;
    const Le = ha();
    Le.div.style.display = "none";
    function Ee() {
      const t = Yo()[z];
      return t && t[ht] ? t[ht].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let De = [], Ge = [], Ce = null;
    function et() {
      if (!Ce) return;
      const t = Ue();
      t && t.scene.remove(Ce), Ce.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ce = null;
    }
    function rt(t, o, n, l, s) {
      et();
      const d = Ue();
      if (!d) return;
      Ce = new In(), Ce.name = "gridAxes";
      const a = Math.min(...t), c = Math.max(...t), m = Math.min(...o), r = Math.max(...o), i = c - a || 1, h = r - m || 1, S = Math.max(i, h), w = S * 0.08, x = l || t.map((b, f) => String.fromCharCode(65 + f)), p = s || o.map((b, f) => String(f + 1)), u = S * 0.018, v = o.length <= 1, M = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (v) {
          const y = -w - u * 1.5;
          tn(f, 0, 0, f, 0, y + u, M, Ce), on(x[b] || `${b}`, f, 0, y, u, Ce);
        } else {
          const y = m - w - u * 1.5;
          tn(f, m, 0, f, y + u, 0, M, Ce), on(x[b] || `${b}`, f, y, 0, u, Ce);
        }
      }
      if (!v) for (let b = 0; b < o.length; b++) {
        const f = o[b], y = a - w - u * 1.5;
        tn(a, f, 0, y + u, f, 0, M, Ce), on(p[b] || `${b}`, y, f, 0, u, Ce);
      }
      const $ = u * 1.8, A = w * 1.2, F = w * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], y = t[b + 1], k = Math.abs(y - f), I = (f + y) / 2, _ = `${k.toFixed(2)} m`;
        v ? (Qo(_, I, 0, -A, $, Ce), en(f, 0, -A * 0.7, y, 0, -A * 0.7, 16763904, Ce)) : (Qo(_, I, m - F, 0, $, Ce), en(f, m - F * 0.7, 0, y, m - F * 0.7, 0, 16763904, Ce));
      }
      if (!v) for (let b = 0; b < o.length - 1; b++) {
        const f = o[b], y = o[b + 1], k = Math.abs(y - f), I = (f + y) / 2, _ = `${k.toFixed(2)} m`;
        Qo(_, a - A, I, 0, $, Ce), en(a - A * 0.7, f, 0, a - A * 0.7, y, 0, 16763904, Ce);
      }
      Ce.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), d.scene.add(Ce), d.render();
    }
    let Xe = null;
    function wt() {
      if (!Xe) return;
      const t = Ue();
      t && t.scene.remove(Xe), Xe.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Xe = null;
    }
    function Et(t, o, n) {
      if (wt(), t.length === 0) return;
      const l = Ue();
      if (!l) return;
      Xe = new In(), Xe.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), c = Math.max(...n), m = d - s || 1, r = c - a || 1, i = Math.max(m, r), h = i * 0.06, S = n.length <= 1, w = 4491519, x = i * 0.015;
      for (const p of t) {
        const u = p.elev;
        S ? (To(s - h, 0, u, d + h, 0, u, w, Xe), Pn(p.name, d + h * 1.5, 0, u, x, Xe)) : (To(s, a, u, d, a, u, w, Xe), To(d, a, u, d, c, u, w, Xe), To(d, c, u, s, c, u, w, Xe), To(s, c, u, s, a, u, w, Xe), Pn(p.name, s - h * 1.5, a, u, x, Xe));
      }
      Xe.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Xe), l.render();
    }
    function To(t, o, n, l, s, d, a, c) {
      const m = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, r = new lo().setFromPoints([
        new Ie(t, o, n),
        new Ie(l, s, d)
      ]), i = new kn({
        color: a,
        dashSize: m * 0.02,
        gapSize: m * 0.01,
        transparent: true,
        opacity: 0.5
      }), h = new Bo(r, i);
      h.computeLineDistances(), h.renderOrder = 50, c.add(h);
    }
    function Pn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 512, m = 64;
      a.width = c, a.height = m;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      r.beginPath(), r.moveTo(i, 0), r.lineTo(c - i, 0), r.quadraticCurveTo(c, 0, c, i), r.lineTo(c, m - i), r.quadraticCurveTo(c, m, c - i, m), r.lineTo(i, m), r.quadraticCurveTo(0, m, 0, m - i), r.lineTo(0, i), r.quadraticCurveTo(0, 0, i, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, c / 2, m / 2);
      const h = new zn(a);
      h.needsUpdate = true;
      const S = new Wo({
        map: h,
        depthTest: false,
        transparent: true
      }), w = new jo(S);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, d.add(w);
    }
    function Qo(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 256, m = 64;
      a.width = c, a.height = m;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      r.beginPath(), r.moveTo(i, 0), r.lineTo(c - i, 0), r.quadraticCurveTo(c, 0, c, i), r.lineTo(c, m - i), r.quadraticCurveTo(c, m, c - i, m), r.lineTo(i, m), r.quadraticCurveTo(0, m, 0, m - i), r.lineTo(0, i), r.quadraticCurveTo(0, 0, i, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, c / 2, m / 2);
      const h = new pa(a);
      h.minFilter = fa;
      const S = new Wo({
        map: h,
        transparent: true,
        depthTest: false
      }), w = new jo(S);
      w.position.set(o, n, l);
      const x = c / m;
      w.scale.set(s * x, s, 1), w.renderOrder = 999, d.add(w);
    }
    function en(t, o, n, l, s, d, a, c) {
      const m = [
        new Ie(t, o, n),
        new Ie(l, s, d)
      ], r = new lo().setFromPoints(m), i = new Co({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), h = new Bo(r, i);
      h.renderOrder = 998, c.add(h);
    }
    function tn(t, o, n, l, s, d, a, c) {
      const m = new lo().setFromPoints([
        new Ie(t, o, n),
        new Ie(l, s, d)
      ]), r = new kn({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new Bo(m, r);
      i.computeLineDistances(), c.add(i);
    }
    function on(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 128;
      a.width = c, a.height = c;
      const m = a.getContext("2d");
      m.beginPath(), m.arc(c / 2, c / 2, c * 0.42, 0, Math.PI * 2), m.fillStyle = "rgba(255,255,255,0.9)", m.fill(), m.lineWidth = c * 0.04, m.strokeStyle = "#555", m.stroke(), m.fillStyle = "#222", m.font = `bold ${c * 0.45}px Arial`, m.textAlign = "center", m.textBaseline = "middle", m.fillText(t, c / 2, c / 2 + c * 0.02);
      const r = new zn(a);
      r.needsUpdate = true;
      const i = new Wo({
        map: r,
        depthTest: false,
        transparent: true
      }), h = new jo(i);
      h.position.set(o, n, l);
      const S = s * 2;
      h.scale.set(S, S, 1), h.renderOrder = 100, d.add(h);
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
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), We(), s;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), We();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), We(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), We();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), We();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), We();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), We();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), We();
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
        var _a2, _b, _c, _d, _e, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), pe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), De = [], Ge = [], et(), wt();
        const t = $e.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), We();
      },
      frame(t, o, n = 0, l = 0) {
        je.clear();
        const s = [];
        n > 0 && s.push(-n);
        let d = 0;
        s.push(d);
        for (const x of t) d += x, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let c = 0;
        for (const x of o) c += x, a.push(c);
        const m = (x) => n > 0 && x === 0 || l > 0 && x === s.length - 1, r = {}, i = [];
        for (let x = 0; x < a.length; x++) for (let p = 0; p < s.length; p++) x === 0 && m(p) || (r[`${p},${x}`] = i.length, i.push([
          s[p],
          0,
          a[x]
        ]));
        const h = [];
        pe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let p = 0; p < s.length; p++) m(p) || (pe.add(h.length), h.push([
          r[`${p},${x}`],
          r[`${p},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let p = 0; p < s.length - 1; p++) J.add(h.length), h.push([
          r[`${p},${x}`],
          r[`${p + 1},${x}`]
        ]);
        const S = /* @__PURE__ */ new Map(), w = Ee();
        for (let x = 0; x < s.length; x++) {
          if (m(x)) continue;
          const p = `${x},0`;
          r[p] !== void 0 && S.set(r[p], [
            ...w
          ]);
        }
        return e.nodes.val = i, e.elements.val = h, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), De = [
          ...s
        ], Ge = [
          0
        ], setTimeout(() => {
          mt(), rt(s, [
            0
          ]), fn(), un();
        }, 50), We(), {
          nodes: i.length,
          elements: h.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, c = 0, m = 1) {
        je.clear();
        const r = [];
        s > 0 && r.push(-s), r.push(0);
        for (const f of t) r.push(r[r.length - 1] + f);
        d > 0 && r.push(r[r.length - 1] + d);
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const f of o) i.push(i[i.length - 1] + f);
        c > 0 && i.push(i[i.length - 1] + c);
        const h = [
          0
        ];
        for (const f of n) h.push(h[h.length - 1] + f);
        const S = (f) => s > 0 && f === 0 || d > 0 && f === r.length - 1, w = (f) => a > 0 && f === 0 || c > 0 && f === i.length - 1, x = (f, y) => S(f) || w(y), p = [], u = {};
        for (let f = 0; f < h.length; f++) for (let y = 0; y < i.length; y++) for (let k = 0; k < r.length; k++) f === 0 && x(k, y) || (u[`${k},${y},${f}`] = p.length, p.push([
          r[k],
          i[y],
          h[f]
        ]));
        const v = p.length, M = [];
        pe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Map();
        const $ = [];
        for (let f = 0; f < h.length - 1; f++) for (let y = 0; y < i.length; y++) for (let k = 0; k < r.length; k++) x(k, y) || $.push({
          el: [
            u[`${k},${y},${f}`],
            u[`${k},${y},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, y], floor: k } of $) {
          if (m <= 1) {
            pe.add(M.length), ne.set(M.length, k), M.push([
              f,
              y
            ]);
            continue;
          }
          const I = p[f], _ = p[y];
          let q = f;
          for (let L = 1; L < m; L++) {
            const P = L / m, O = p.length;
            p.push([
              I[0] + (_[0] - I[0]) * P,
              I[1] + (_[1] - I[1]) * P,
              I[2] + (_[2] - I[2]) * P
            ]), pe.add(M.length), ne.set(M.length, k), M.push([
              q,
              O
            ]), q = O;
          }
          pe.add(M.length), ne.set(M.length, k), M.push([
            q,
            y
          ]);
        }
        Ae = /* @__PURE__ */ new Map();
        const A = [];
        for (let f = 1; f < h.length; f++) for (let y = 0; y < i.length; y++) for (let k = 0; k < r.length - 1; k++) A.push({
          el: [
            u[`${k},${y},${f}`],
            u[`${k + 1},${y},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: k
        });
        for (let f = 1; f < h.length; f++) for (let y = 0; y < r.length; y++) for (let k = 0; k < i.length - 1; k++) A.push({
          el: [
            u[`${y},${k},${f}`],
            u[`${y},${k + 1},${f}`]
          ],
          floor: f - 1,
          dir: "y",
          bay: k
        });
        for (const { el: [f, y], floor: k, dir: I, bay: _ } of A) {
          const q = p[f], L = p[y];
          let P = f;
          for (let se = 1; se < l; se++) {
            const le = se / l, ce = p.length;
            p.push([
              q[0] + (L[0] - q[0]) * le,
              q[1] + (L[1] - q[1]) * le,
              q[2] + (L[2] - q[2]) * le
            ]);
            const oe = M.length;
            J.add(oe), ne.set(oe, k), Ae.set(oe, {
              dir: I,
              bay: _
            }), M.push([
              P,
              ce
            ]), P = ce;
          }
          const O = M.length;
          J.add(O), ne.set(O, k), Ae.set(O, {
            dir: I,
            bay: _
          }), M.push([
            P,
            y
          ]);
        }
        if (St = /* @__PURE__ */ new Set(), Ve && Qe > 0) {
          const f = (y, k, I) => {
            for (let q = 0; q < p.length; q++) if (Math.abs(p[q][0] - y) < 1e-6 && Math.abs(p[q][1] - k) < 1e-6 && Math.abs(p[q][2] - I) < 1e-6) return q;
            const _ = p.length;
            return p.push([
              y,
              k,
              I
            ]), _;
          };
          for (let y = 1; y < h.length; y++) if (yt === "x") for (let k = 0; k < i.length - 1; k++) {
            const I = i[k], _ = i[k + 1];
            for (let q = 1; q <= Qe; q++) {
              const L = I + q / (Qe + 1) * (_ - I), P = [];
              for (let O = 0; O < r.length; O++) P.push(f(r[O], L, h[y]));
              for (let O = 0; O < r.length - 1; O++) {
                const se = M.length;
                St.add(se), J.add(se), ne.set(se, y - 1), Ae.set(se, {
                  dir: "x",
                  bay: O
                }), M.push([
                  P[O],
                  P[O + 1]
                ]);
              }
            }
          }
          else for (let k = 0; k < r.length - 1; k++) {
            const I = r[k], _ = r[k + 1];
            for (let q = 1; q <= Qe; q++) {
              const L = I + q / (Qe + 1) * (_ - I), P = [];
              for (let O = 0; O < i.length; O++) P.push(f(L, i[O], h[y]));
              for (let O = 0; O < i.length - 1; O++) {
                const se = M.length;
                St.add(se), J.add(se), ne.set(se, y - 1), Ae.set(se, {
                  dir: "y",
                  bay: O
                }), M.push([
                  P[O],
                  P[O + 1]
                ]);
              }
            }
          }
        }
        const F = /* @__PURE__ */ new Map(), b = Ee();
        for (let f = 0; f < i.length; f++) for (let y = 0; y < r.length; y++) x(y, f) || F.set(u[`${y},${f},0`], [
          ...b
        ]);
        V = /* @__PURE__ */ new Set();
        for (const f of Ne) {
          const y = h.length - 1, k = f.floors.includes(-1) ? Array.from({
            length: y
          }, (I, _) => _) : f.floors.filter((I) => I < y);
          for (const I of k) {
            let _, q, L, P;
            f.dir === "x" ? (_ = f.bay, L = f.bay + 1, q = f.axisIdx, P = f.axisIdx) : (_ = f.axisIdx, L = f.axisIdx, q = f.bay, P = f.bay + 1);
            const O = u[`${_},${q},${I}`], se = u[`${_},${q},${I + 1}`];
            let le, ce;
            if (f.dir === "x" ? (le = u[`${L},${P},${I}`], ce = u[`${L},${P},${I + 1}`]) : (le = u[`${L},${P},${I}`], ce = u[`${L},${P},${I + 1}`]), O === void 0 || le === void 0 || se === void 0 || ce === void 0) continue;
            const oe = ct, Z = tt, ie = p[O], Se = p[le], _e = p[se], Pe = p[ce], re = [];
            for (let ye = 0; ye <= Z; ye++) {
              const ke = [], he = ye / Z;
              for (let qe = 0; qe <= oe; qe++) {
                const Oe = qe / oe, Ze = (1 - he) * ((1 - Oe) * ie[0] + Oe * Se[0]) + he * ((1 - Oe) * _e[0] + Oe * Pe[0]), ae = (1 - he) * ((1 - Oe) * ie[1] + Oe * Se[1]) + he * ((1 - Oe) * _e[1] + Oe * Pe[1]), ze = (1 - he) * ((1 - Oe) * ie[2] + Oe * Se[2]) + he * ((1 - Oe) * _e[2] + Oe * Pe[2]);
                ye === 0 && qe === 0 ? ke.push(O) : ye === 0 && qe === oe ? ke.push(le) : ye === Z && qe === 0 ? ke.push(se) : ye === Z && qe === oe ? ke.push(ce) : (ke.push(p.length), p.push([
                  Ze,
                  ae,
                  ze
                ]));
              }
              re.push(ke);
            }
            for (let ye = 0; ye < Z; ye++) for (let ke = 0; ke < oe; ke++) {
              const he = re[ye][ke], qe = re[ye][ke + 1], Oe = re[ye + 1][ke + 1], Ze = re[ye + 1][ke], ae = M.length;
              V.add(ae), ne.set(ae, I), M.push([
                he,
                qe,
                Oe,
                Ze
              ]);
            }
            if (I === 0) for (let ye = 0; ye <= oe; ye++) {
              const ke = re[0][ye];
              ke >= v && F.set(ke, [
                ...b
              ]);
            }
          }
        }
        if (kt = /* @__PURE__ */ new Set(), bt) {
          const f = l, y = l, k = /* @__PURE__ */ new Map(), I = (_, q, L) => `${Math.round(_ * 1e4)},${Math.round(q * 1e4)},${Math.round(L * 1e4)}`;
          for (let _ = 0; _ < p.length; _++) k.set(I(p[_][0], p[_][1], p[_][2]), _);
          for (let _ = 1; _ < h.length; _++) {
            const q = h[_];
            for (let L = 0; L < r.length - 1; L++) for (let P = 0; P < i.length - 1; P++) {
              const O = r[L], se = r[L + 1], le = i[P], ce = i[P + 1], oe = [];
              for (let Z = 0; Z <= y; Z++) {
                const ie = [];
                for (let Se = 0; Se <= f; Se++) {
                  const _e = O + Se / f * (se - O), Pe = le + Z / y * (ce - le);
                  if (Z === 0 && Se === 0) ie.push(u[`${L},${P},${_}`]);
                  else if (Z === 0 && Se === f) ie.push(u[`${L + 1},${P},${_}`]);
                  else if (Z === y && Se === 0) ie.push(u[`${L},${P + 1},${_}`]);
                  else if (Z === y && Se === f) ie.push(u[`${L + 1},${P + 1},${_}`]);
                  else {
                    const re = I(_e, Pe, q), ye = k.get(re);
                    if (ye !== void 0) ie.push(ye);
                    else {
                      const ke = p.length;
                      p.push([
                        _e,
                        Pe,
                        q
                      ]), k.set(re, ke), ie.push(ke);
                    }
                  }
                }
                oe.push(ie);
              }
              for (let Z = 0; Z < y; Z++) for (let ie = 0; ie < f; ie++) {
                const Se = oe[Z][ie], _e = oe[Z][ie + 1], Pe = oe[Z + 1][ie + 1], re = oe[Z + 1][ie], ye = M.length;
                kt.add(ye), ne.set(ye, _ - 1), M.push([
                  Se,
                  _e,
                  Pe,
                  re
                ]);
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
          supports: F
        }), De = [
          ...r
        ], Ge = [
          ...i
        ], setTimeout(() => {
          mt(), rt(r, i), fn(), un();
        }, 50), We(), {
          nodes: p.length,
          elements: M.length,
          nJointNodes: v
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        je.clear();
        const a = [], c = [], m = (w) => n + l * (1 - Math.pow(2 * w / t - 1, 2)), r = [], i = d + 1;
        for (let w = 0; w < i; w++) {
          const x = [], p = o / d * w;
          x.push(a.length), a.push([
            0,
            p,
            0
          ]), x.push(a.length), a.push([
            t,
            p,
            0
          ]), x.push(a.length), a.push([
            0,
            p,
            n
          ]);
          for (let u = 1; u < s; u++) {
            const v = t / s * u;
            x.push(a.length), a.push([
              v,
              p,
              m(v)
            ]);
          }
          x.push(a.length), a.push([
            t,
            p,
            n
          ]), r.push(x);
        }
        for (let w = 0; w < i; w++) {
          const x = r[w];
          c.push([
            x[0],
            x[2]
          ]), c.push([
            x[1],
            x[x.length - 1]
          ]);
          for (let p = 2; p < x.length - 1; p++) c.push([
            x[p],
            x[p + 1]
          ]);
        }
        for (let w = 0; w < d; w++) for (let x = 2; x < r[0].length; x++) c.push([
          r[w][x],
          r[w + 1][x]
        ]);
        for (let w = 0; w < d; w++) for (let x = 2; x < r[0].length - 1; x += 2) c.push([
          r[w][x],
          r[w + 1][x + 1]
        ]);
        const h = /* @__PURE__ */ new Map(), S = Ee();
        for (let w = 0; w < i; w++) h.set(r[w][0], [
          ...S
        ]), h.set(r[w][1], [
          ...S
        ]);
        return e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
          supports: h
        }), We(), {
          nodes: a.length,
          elements: c.length
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
            je.clear(), Je("truss"), Nn();
            break;
          }
          case "beams": {
            je.clear(), Je("beams"), Rn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            je.clear(), Je("3d"), Hn();
            break;
          }
          case "portico": {
            Je("frame"), xe();
            break;
          }
          case "edificio": {
            Je("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, Ne = [], bt = false, Ve = false, xe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Je("edificio"), Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, Ne = [], Ve = true, Qe = 2;
            const o = X.reduce((l, s) => l + s, 0) / X.length, n = Q.reduce((l, s) => l + s, 0) / Q.length;
            yt = o >= n ? "y" : "x", bt = true, Mt = 0.08, xe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Je("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, Ve = false;
            const o = Math.round(((_a2 = ee.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Ne = [
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
            ], bt = true, Mt = 0.15, xe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Je("edificio"), Te.colMat = 2, Te.vigaMat = 0, Ve = false;
            const o = Math.round(((_c = ee.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = ee.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Ne = [
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
            ], bt = true, Mt = 0.12, xe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Je("edificio"), ee.nPisos && (ee.nPisos.val = 1), ee.hPiso && (ee.hPiso.val = 4.5), ee.nVanosX && (ee.nVanosX.val = 3), ee.nVanosY && (ee.nVanosY.val = 2), ee.nSubViga && (ee.nSubViga.val = 3), X = [
              6,
              6,
              6
            ], Q = [
              5,
              5
            ], Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, Ne = [], Ve = true, Qe = 2, yt = X[0] >= Q[0] ? "y" : "x", bt = true, Mt = 0.08, Pt = 3, Nt = 3, xe();
            break;
          }
          case "galpon": {
            Je("galpon"), xe();
            break;
          }
          case "barra": {
            Je("barra"), xe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            je.clear(), Je("placa-3q"), Bn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            je.clear(), Je("placa-q4"), Dn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            je.clear(), Je("losa-rect"), jn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            je.clear(), Je("losa-plana"), Wn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            je.clear(), Je("viga-alta"), Yn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            je.clear(), Je("muro-contencion"), Gn();
            break;
          }
          case "zapata":
          case "footing": {
            je.clear(), Je("zapata"), Jn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            je.clear(), Je("placa-orificios"), Vn();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            je.clear(), Je("col-placa"), Xn();
            break;
          }
          case "talud":
          case "slope": {
            je.clear(), Je("talud"), Kn();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            je.clear(), Je("eiffel"), ps();
            break;
          }
          case "arco":
          case "arco-gateway": {
            je.clear(), Je("arco"), fs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            je.clear(), Je("puente"), us();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            je.clear(), Je("twisted"), ms();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            je.clear(), Je("burj"), bs();
            break;
          }
          case "opera":
          case "sydney-opera": {
            je.clear(), Je("opera"), hs();
            break;
          }
          case "diagrid":
          case "gherkin": {
            je.clear(), Je("diagrid"), gs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, c = 3e7, m = 0.3, r = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][r]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const h = performance.now(), S = En({
          E: c,
          nu: m,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: r
        }), w = performance.now() - h;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${S.maxW.toExponential(6)}`), console.log(`w_center = ${(S.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${S.maxMxx.toExponential(4)}, Myy_max = ${S.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${S.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${S.maxQx.toExponential(4)}, Qy_max = ${S.maxQy.toExponential(4)}`);
        const x = S.nodeResults.map(($) => [
          $.x,
          $.y,
          0
        ]), p = S.elementResults.map(($) => [
          ...$.nodes
        ]);
        e.nodes.val = x, e.elements.val = p;
        const u = /* @__PURE__ */ new Map();
        S.nodeResults.forEach(($, A) => {
          u.set(A, [
            0,
            0,
            $.w,
            $.bx,
            $.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: u
        });
        const v = /* @__PURE__ */ new Map();
        S.nodeResults.forEach(($, A) => {
          ($.x < 1e-10 || $.x > t - 1e-10 || $.y < 1e-10 || $.y > o - 1e-10) && v.set(A, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const M = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const $ = d * t * o / x.length;
          x.forEach((A, F) => {
            v.has(F) || M.set(F, [
              0,
              0,
              $,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: v,
          loads: M
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const $ = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
          S.elementResults.forEach((b, f) => {
            $.set(f, [
              b.Mxx,
              b.Mxx,
              b.Mxx
            ]), A.set(f, [
              b.Myy,
              b.Myy,
              b.Myy
            ]), F.set(f, [
              b.Mxy,
              b.Mxy,
              b.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: $,
            bendingYY: A,
            bendingXY: F
          };
        }
        return setTimeout(() => mt(), 50), We(), S;
      },
      set(t, o) {
        ee[t] ? (ee[t].val = o, console.log(`${t} = ${o}`), Bt(), xe()) : Ke[t] ? (Ke[t].val = o, console.log(`${t} = ${o}`), Bt(), xe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ee,
          ...Ke
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in ee) o[l] = ee[l].val;
          for (const l in Ke) o[l] = Ke[l].val;
          o.plateTheory = It, o.supportType = ht;
          const n = Yo()[z];
          return n && n[ht] && (o.supportLabel = n[ht].label), console.table(o), o;
        }
        if (ee[t]) return ee[t].val;
        if (Ke[t]) return Ke[t].val;
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
        }[t.toLowerCase()] || 3), It = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[It] || It}`), z.includes("placa") && (Bt(), xe());
      },
      setBc(t) {
        const o = Yo()[z];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        ht = t, ht >= o.length && (ht = 0), console.log(`Apoyo: ${o[ht].label} \u2192 DOFs: [${o[ht].dofs.map((n) => n ? "1" : "0").join(",")}]`), Bt(), xe();
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
        t && (g = t), o && (B = o), E = mo(g, B);
        const n = $e.querySelector("#cad3d-force-unit"), l = $e.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = B), z && Je(z), console.log(`Unidades: ${E.label} | E=${E.E.toExponential(3)} ${E.stress}`), E.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function On() {
      return ma(E);
    }
    function _n() {
      return ba(E);
    }
    let Ke = {};
    function Je(t) {
      var _a2, _b;
      z = t, ws.val = true, ht = 0, te && ln(), ee = {};
      const o = On()[t];
      if (o) for (const l of o) ee[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      Ke = {};
      const n = _n()[t];
      if (n) for (const l of n) Ke[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = ee.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
        X = Array(l).fill(E.defaultSpan), Q = Array(s).fill(E.defaultSpan * 0.8);
      }
      Bt(), setTimeout(() => {
        Fs(), xe();
      }, 50);
    }
    function j(t) {
      var _a2, _b;
      return ((_a2 = ee[t]) == null ? void 0 : _a2.val) ?? ((_b = Ke[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function xe() {
      switch (z) {
        case "truss":
          Nn();
          break;
        case "beams":
          Rn();
          break;
        case "3d":
          Hn();
          break;
        case "frame": {
          const o = Math.round(j("nVanos")), n = j("spanV"), l = Math.round(j("nPisos")), s = j("hPiso");
          je.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(j("nPisos")), n = j("hPiso"), l = j("Lvix") || 0, s = j("Lvdx") || 0, d = j("Lviy") || 0, a = j("Lvdy") || 0, c = Math.max(1, Math.round(j("nSubViga") || 3)), m = Math.max(1, Math.round(j("nSubCol") || 1));
          je.building([
            ...X
          ], [
            ...Q
          ], Array(o).fill(n), c, l, s, d, a, m);
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
        "diagrid"
      ].includes(z)) {
        if (Y.size > 0 || D.size > 0 || H) {
          const o = e.elements.val, n = o.filter((l, s) => !(Y.has(s) || D.has(s) || H && !W.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Zt(), rn();
        }, 30);
      }
    }
    function Nn() {
      const t = j("span"), o = Math.round(j("divisions")), n = j("height"), l = t / o, s = [], d = [];
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
      const c = /* @__PURE__ */ new Map([
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
      ]), m = (j("CM") ?? 0) + (j("CV") ?? 0), r = /* @__PURE__ */ new Map();
      if (m !== 0) for (let i = 0; i <= o; i++) r.set(i, [
        0,
        0,
        m,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: r
      }), We();
    }
    function Rn() {
      const t = j("width"), o = j("height"), n = j("Ex") ?? 0, l = (j("CM") ?? 0) + (j("CV") ?? 0), s = Math.max(1, Math.round(j("nSub") || 4)), d = [
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
      const c = [
        0,
        0,
        o
      ], m = [
        t,
        0,
        o
      ];
      let r = 1;
      for (let h = 1; h < s; h++) {
        const S = h / s, w = d.length;
        d.push([
          c[0] + (m[0] - c[0]) * S,
          c[1] + (m[1] - c[1]) * S,
          c[2] + (m[2] - c[2]) * S
        ]), a.push([
          r,
          w
        ]), r = w;
      }
      a.push([
        r,
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
      else if (l !== 0 && n === 0) for (let h = 1; h < d.length; h++) h === 0 || h === 3 || i.set(h, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let h = 1; h < d.length; h++) h === 0 || h === 3 || i.set(h, [
        h === 2 ? n : 0,
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
      }), We();
    }
    function Hn() {
      const t = j("dx"), o = j("dy"), n = j("dz"), l = Math.round(j("stories")), s = Math.max(1, Math.round(j("nSub") || 3)), d = [];
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
      const a = d.length, c = [
        ...d
      ], m = [];
      for (let p = 0; p < l; p++) for (let u = 0; u < 4; u++) m.push([
        p * 4 + u,
        (p + 1) * 4 + u
      ]);
      for (let p = 0; p < l; p++) {
        const u = p * 4;
        m.push([
          u,
          u + 5
        ], [
          u + 3,
          u + 6
        ], [
          u,
          u + 7
        ], [
          u + 1,
          u + 6
        ]);
      }
      const r = [];
      for (let p = 1; p <= l; p++) {
        const u = p * 4;
        r.push([
          u,
          u + 1
        ], [
          u + 1,
          u + 2
        ], [
          u + 2,
          u + 3
        ], [
          u + 3,
          u
        ], [
          u,
          u + 2
        ]);
      }
      for (const [p, u] of r) {
        const v = d[p], M = d[u];
        let $ = p;
        for (let A = 1; A < s; A++) {
          const F = A / s, b = c.length;
          c.push([
            v[0] + (M[0] - v[0]) * F,
            v[1] + (M[1] - v[1]) * F,
            v[2] + (M[2] - v[2]) * F
          ]), m.push([
            $,
            b
          ]), $ = b;
        }
        m.push([
          $,
          u
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
      const h = j("Ex") ?? 0, S = (j("CM") ?? 0) + (j("CV") ?? 0), w = a - 2, x = /* @__PURE__ */ new Map();
      if (h !== 0 && S === 0) x.set(w, [
        h,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (S !== 0 && h === 0) for (let p = 0; p < c.length; p++) i.has(p) || x.set(p, [
        0,
        0,
        S,
        0,
        0,
        0
      ]);
      else if (h !== 0 && S !== 0) for (let p = 0; p < c.length; p++) i.has(p) || x.set(p, [
        p === w ? h : 0,
        0,
        S,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: x
      }), We();
    }
    function Ss() {
      const t = j("L"), o = Math.round(j("nElem")), n = j("F"), l = t / o, s = [], d = [];
      for (let m = 0; m <= o; m++) s.push([
        l * m,
        0,
        0
      ]);
      for (let m = 0; m < o; m++) d.push([
        m,
        m + 1
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
      ]), c = /* @__PURE__ */ new Map([
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
        loads: c
      }), We();
    }
    function Bn() {
      const t = j("Lx") || 15, o = j("Ly") || 10, n = j("meshSize") || 0.5, l = j("q") || -3, s = j("t") || 1, d = j("E") || 3e7, a = j("nu") || 0.3, c = d / (2 * (1 + a)), m = It === 1 ? "Membrana" : It === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: i, boundaryIndices: h } = Kt({
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
      }), S = t * o, w = l * S / r.length, x = new Map(h.map((u) => [
        u,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(r.map((u, v) => [
        v,
        [
          0,
          0,
          w,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = r, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: x,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(i.map((u, v) => [
          v,
          d
        ])),
        elasticitiesOrthogonal: new Map(i.map((u, v) => [
          v,
          d
        ])),
        thicknesses: new Map(i.map((u, v) => [
          v,
          s
        ])),
        poissonsRatios: new Map(i.map((u, v) => [
          v,
          a
        ])),
        shearModuli: new Map(i.map((u, v) => [
          v,
          c
        ]))
      });
      try {
        const u = Ct(r, i, e.nodeInputs.val, e.elementInputs.val);
        u && e.deformOutputs && (e.deformOutputs.val = u);
        const v = So(r, i, e.elementInputs.val, u);
        v && e.analyzeOutputs && (e.analyzeOutputs.val = v), console.log(`Plate 3Q [${m}]: ${r.length} nodes, ${i.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (u) {
        console.warn("Plate 3Q analysis failed:", u.message);
      }
      setTimeout(() => mt(), 50), We();
    }
    function Dn() {
      const t = j("Lx") || 10, o = j("Ly") || 10, n = Math.round(j("nx") || 16), l = Math.round(j("ny") || 16), s = j("t") || 0.2, d = j("q") || -10, a = j("E") || 3e7, c = j("nu") || 0.3, m = ht === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[It] ?? 0;
      return je.plateQ4(t, o, n, l, m, d, s, a, c, i);
    }
    function jn() {
      const t = j("a") || 6, o = j("b") || 4, n = Math.round(j("nx") || 12), l = Math.round(j("ny") || 8), s = j("t") || 0.1, d = j("q") || -10, a = j("E") || 35e6, c = j("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[It] ?? 0, i = je.plateQ4(t, o, n, l, "simply-supported", d, s, a, c, r), h = a * s * s * s / (12 * (1 - c * c));
      let S = 0;
      for (let w = 1; w <= 19; w += 2) for (let x = 1; x <= 19; x += 2) {
        const p = w * w / (t * t) + x * x / (o * o);
        S += 1 / (w * x * p * p);
      }
      if (S *= 16 * Math.abs(d) / (Math.PI ** 6 * h), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${S.toExponential(6)}`), i) {
        const w = Math.abs((Math.abs(i.centerW || 0) - S) / S * 100);
        console.log(`   WASM w_center = ${(i.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return i;
    }
    function Wn() {
      const t = j("t") || 0.2, o = j("q") || -10, n = j("E") || 35e6, l = j("nu") || 0.2, s = j("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], c = d.reduce((q, L) => q + L, 0), m = a.reduce((q, L) => q + L, 0), r = [
        0
      ];
      for (const q of d) r.push(r[r.length - 1] + q);
      const i = [
        0
      ];
      for (const q of a) i.push(i[i.length - 1] + q);
      const h = Math.max(2, Math.round(c / s)), S = Math.max(2, Math.round(m / s)), w = c / h, x = m / S, p = [];
      for (let q = 0; q <= S; q++) for (let L = 0; L <= h; L++) p.push([
        L * w,
        q * x
      ]);
      const u = [], v = /* @__PURE__ */ new Set();
      for (const q of r) for (const L of i) {
        let P = 1 / 0, O = 0;
        for (let se = 0; se < p.length; se++) {
          const le = Math.hypot(p[se][0] - q, p[se][1] - L);
          le < P && (P = le, O = se);
        }
        v.has(O) || (v.add(O), u.push({
          node: O,
          dof: 0,
          k: 1e15
        }));
      }
      const $ = {
        1: 2,
        2: 1,
        3: 0
      }[It] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][$]}]: ${c}\xD7${m}m, ${h}\xD7${S} elem, ${v.size} columnas`);
      const A = performance.now(), F = En({
        E: n,
        nu: l,
        thickness: t,
        meshLx: c,
        meshLy: m,
        meshNx: h,
        meshNy: S,
        bcType: "none",
        pressure: o,
        theoryType: $,
        springs: u
      }), b = performance.now() - A;
      console.log(`Solved in ${b.toFixed(1)} ms, w_max = ${F.maxW.toExponential(4)}`);
      const f = F.nodeResults.map((q) => [
        q.x,
        q.y,
        0
      ]), y = F.elementResults.map((q) => [
        ...q.nodes
      ]);
      e.nodes.val = f, e.elements.val = y;
      const k = /* @__PURE__ */ new Map();
      F.nodeResults.forEach((q, L) => {
        k.set(L, [
          0,
          0,
          q.w,
          q.bx,
          q.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: k
      });
      const I = /* @__PURE__ */ new Map();
      for (const q of v) I.set(q, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const _ = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const q = o * c * m / f.length;
        f.forEach((L, P) => {
          I.has(P) || _.set(P, [
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
        supports: I,
        loads: _
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const q = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        F.elementResults.forEach((O, se) => {
          q.set(se, [
            O.Mxx,
            O.Mxx,
            O.Mxx
          ]), L.set(se, [
            O.Myy,
            O.Myy,
            O.Myy
          ]), P.set(se, [
            O.Mxy,
            O.Mxy,
            O.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: q,
          bendingYY: L,
          bendingXY: P
        };
      }
      setTimeout(() => mt(), 50), We();
    }
    function Yn() {
      const t = j("L") || 4, o = j("H") || 2, n = j("t") || 0.1, l = j("E") || 2e7, s = j("nu") || 0.2, d = l / (2 * (1 + s)), a = j("q") || -100, c = j("b") || 0.8, m = j("meshSize") || 0.2, { nodes: r, elements: i, boundaryIndices: h } = Kt({
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
      }), S = r, w = 0.4, x = /* @__PURE__ */ new Map();
      for (let b = 0; b < S.length; b++) {
        const f = S[b][0], y = S[b][1];
        Math.abs(y) < 1e-6 && (f <= w + 1e-6 || f >= t - w - 1e-6) && x.set(b, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - c) / 2, u = p + c, v = [];
      for (let b = 0; b < S.length; b++) if (Math.abs(S[b][1] - o) < 1e-6) {
        const f = S[b][0];
        f >= p - 1e-6 && f <= u + 1e-6 && v.push(b);
      }
      const M = a * c / Math.max(v.length, 1), $ = /* @__PURE__ */ new Map();
      for (const b of v) $.set(b, [
        0,
        M,
        0,
        0,
        0,
        0
      ]);
      const A = {
        elasticities: new Map(i.map((b, f) => [
          f,
          l
        ])),
        elasticitiesOrthogonal: new Map(i.map((b, f) => [
          f,
          l
        ])),
        thicknesses: new Map(i.map((b, f) => [
          f,
          n
        ])),
        poissonsRatios: new Map(i.map((b, f) => [
          f,
          s
        ])),
        shearModuli: new Map(i.map((b, f) => [
          f,
          d
        ]))
      }, F = {
        supports: x,
        loads: $
      };
      try {
        const b = Ct(S, i, F, A), f = So(S, i, A, b), y = S.map((I) => [
          I[0],
          0,
          I[1]
        ]);
        if (e.nodes.val = y, e.elements.val = i, b && b.deformations) {
          const I = /* @__PURE__ */ new Map();
          b.deformations.forEach((_, q) => {
            I.set(q, [
              _[0],
              _[2],
              _[1],
              _[3],
              _[5],
              _[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: I
          });
        }
        if (e.nodeInputs) {
          const I = /* @__PURE__ */ new Map();
          x.forEach((q, L) => I.set(L, q));
          const _ = /* @__PURE__ */ new Map();
          $.forEach((q, L) => _.set(L, [
            q[0],
            q[2],
            q[1],
            q[3],
            q[5],
            q[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: I,
            loads: _
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let k = 0;
        b && b.deformations && b.deformations.forEach((I) => {
          const _ = Math.sqrt(I[0] * I[0] + I[1] * I[1] + I[2] * I[2]);
          k = Math.max(k, _);
        }), console.log(`Viga Alta: ${S.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${c}m central`), console.log(`  max|u| = ${k.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => mt(), 50), We();
    }
    function Gn() {
      const t = j("H") || 4, o = j("B") || 3, n = j("tw") || 0.3, l = j("tb") || 0.4, s = j("meshSize") || 0.2, d = j("E") || 25e6, a = j("nu") || 0.2, c = d / (2 * (1 + a)), m = j("gamma") || 18, r = j("Ka") || 0.33, i = j("Es") || 5e4, h = j("nus") || 0.3, S = i / (2 * (1 + h)), w = j("kn") || 1e6, x = j("ks") || 1e4, p = j("gammaW") || 9.81, u = j("Hw") || 3.5, v = j("qs") || 0, M = ht, $ = o * 0.3, A = o * 0.7, F = [
        [
          -$,
          0,
          0
        ],
        [
          A,
          0,
          0
        ],
        [
          A,
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
          -$,
          l,
          0
        ]
      ];
      let b = [], f = [], y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), I;
      if (M === 0) {
        const L = Kt({
          points: F,
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
        b = L.nodes, f = L.elements;
        for (let O = 0; O < b.length; O++) Math.abs(b[O][1]) < 1e-6 && y.set(O, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let O = 0; O < b.length; O++) {
          const se = b[O][0], le = b[O][1];
          Math.abs(se - n) < s * 0.6 && le >= l - 1e-6 && P.push({
            idx: O,
            y: le
          });
        }
        P.sort((O, se) => O.y - se.y);
        for (let O = 0; O < P.length; O++) {
          const { idx: se, y: le } = P[O], ce = l + t - le, oe = r * m * ce + r * v;
          let Z = s;
          O > 0 && O < P.length - 1 ? Z = (P[O + 1].y - P[O - 1].y) / 2 : O === 0 && P.length > 1 ? Z = (P[1].y - P[0].y) / 2 : O === P.length - 1 && P.length > 1 && (Z = (P[O].y - P[O - 1].y) / 2);
          const ie = oe * Z;
          Math.abs(ie) > 1e-10 && k.set(se, [
            ie,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        I = {
          elasticities: new Map(f.map((O, se) => [
            se,
            d
          ])),
          elasticitiesOrthogonal: new Map(f.map((O, se) => [
            se,
            d
          ])),
          thicknesses: new Map(f.map((O, se) => [
            se,
            n
          ])),
          poissonsRatios: new Map(f.map((O, se) => [
            se,
            a
          ])),
          shearModuli: new Map(f.map((O, se) => [
            se,
            c
          ]))
        };
      } else if (M === 1 || M === 2) {
        const L = A, P = l + t;
        if (M === 2) {
          const O = [
            [
              -$,
              0,
              0
            ],
            [
              L,
              0,
              0
            ],
            [
              L,
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
              l,
              0
            ],
            [
              -$,
              l,
              0
            ]
          ], se = Math.max(3, Math.ceil((P - l) / s)), le = [];
          for (let ae = 0; ae <= se; ae++) le.push([
            n,
            l + ae * (P - l) / se,
            0
          ]);
          const ce = Kt({
            points: [
              ...O,
              ...le
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
          b = ce.nodes, f = ce.elements;
          const oe = s * 0.4, Z = [];
          for (let ae = 0; ae < b.length; ae++) {
            const ze = b[ae][0], Re = b[ae][1];
            Math.abs(ze - n) < oe && Re >= l - oe && Z.push(ae);
          }
          Z.sort((ae, ze) => b[ae][1] - b[ze][1]);
          const ie = [
            Z[0]
          ];
          for (let ae = 1; ae < Z.length; ae++) {
            const ze = b[Z[ae]][1] - b[ie[ie.length - 1]][1];
            Math.abs(ze) > s * 0.05 && ie.push(Z[ae]);
          }
          Z.length = 0, Z.push(...ie);
          const Se = /* @__PURE__ */ new Map();
          for (const ae of Z) {
            const ze = b.length;
            b.push([
              b[ae][0],
              b[ae][1],
              b[ae][2]
            ]), Se.set(ae, ze);
          }
          const _e = f.length, Pe = [];
          for (let ae = 0; ae < _e; ae++) {
            const ze = f[ae], Re = (b[ze[0]][0] + b[ze[1]][0] + b[ze[2]][0]) / 3, st = (b[ze[0]][1] + b[ze[1]][1] + b[ze[2]][1]) / 3, ft = Re >= -$ && Re <= A && st >= 0 && st <= l, wo = Re >= 0 && Re <= n && st >= l && st <= l + t, so = ft || wo;
            if (Pe.push(!so), !so) for (let Yt = 0; Yt < ze.length; Yt++) {
              const Vt = Se.get(ze[Yt]);
              Vt !== void 0 && (ze[Yt] = Vt);
            }
          }
          const re = f.length;
          for (let ae = 0; ae < Z.length - 1; ae++) {
            const ze = Z[ae], Re = Z[ae + 1], st = Se.get(ze), ft = Se.get(Re);
            f.push([
              Re,
              ze,
              st,
              ft
            ]);
          }
          const ye = f.length - re, ke = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map();
          for (let ae = 0; ae < _e; ae++) Pe[ae] ? (ke.set(ae, i), he.set(ae, i), Oe.set(ae, h), Ze.set(ae, S), qe.set(ae, 1)) : (ke.set(ae, d), he.set(ae, d), Oe.set(ae, a), Ze.set(ae, c), qe.set(ae, 1));
          for (let ae = re; ae < f.length; ae++) ke.set(ae, w), he.set(ae, 0), Oe.set(ae, 0), Ze.set(ae, x), qe.set(ae, 0);
          I = {
            elasticities: ke,
            elasticitiesOrthogonal: he,
            thicknesses: qe,
            poissonsRatios: Oe,
            shearModuli: Ze
          };
          for (let ae = 0; ae < b.length; ae++) {
            const ze = b[ae][0], Re = b[ae][1];
            Math.abs(Re) < 1e-6 ? y.set(ae, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ze - L) < s * 0.1 && y.set(ae, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ae = 0; ae < _e; ae++) {
            if (!Pe[ae]) continue;
            const ze = f[ae], Re = b[ze[0]], st = b[ze[1]], ft = b[ze[2]], wo = Math.abs((st[0] - Re[0]) * (ft[1] - Re[1]) - (ft[0] - Re[0]) * (st[1] - Re[1])) / 2, so = -m * wo / 3;
            for (const Yt of ze) {
              const Vt = k.get(Yt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Vt[1] += so, k.set(Yt, Vt);
            }
          }
          if (v > 0) {
            const ae = [];
            for (let ze = 0; ze < b.length; ze++) {
              const Re = b[ze][0], st = b[ze][1];
              Math.abs(st - P) < s * 0.1 && Re > n - 1e-6 && ae.push({
                idx: ze,
                x: Re
              });
            }
            ae.sort((ze, Re) => ze.x - Re.x);
            for (let ze = 0; ze < ae.length; ze++) {
              let Re = s;
              ze > 0 && ze < ae.length - 1 ? Re = (ae[ze + 1].x - ae[ze - 1].x) / 2 : ze === 0 && ae.length > 1 ? Re = (ae[1].x - ae[0].x) / 2 : ze === ae.length - 1 && ae.length > 1 && (Re = (ae[ze].x - ae[ze - 1].x) / 2);
              const st = -v * Re, ft = k.get(ae[ze].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ft[1] += st, k.set(ae[ze].idx, ft);
            }
          }
          console.log(`  Interfaz Goodman: ${Z.length} nodos interfaz, ${ye} elem interfaz, kn=${w}, ks=${x}`);
        } else {
          const O = [
            [
              -$,
              0,
              0
            ],
            [
              L,
              0,
              0
            ],
            [
              L,
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
              l,
              0
            ],
            [
              -$,
              l,
              0
            ]
          ], se = [
            [
              n,
              l,
              0
            ]
          ], le = Kt({
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
          b = le.nodes, f = le.elements;
          const ce = (re) => {
            const ye = (b[re[0]][0] + b[re[1]][0] + b[re[2]][0]) / 3, ke = (b[re[0]][1] + b[re[1]][1] + b[re[2]][1]) / 3, he = ye >= -$ && ye <= A && ke >= 0 && ke <= l, qe = ye >= 0 && ye <= n && ke >= l && ke <= l + t;
            return he || qe;
          }, oe = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), Pe = [];
          for (let re = 0; re < f.length; re++) {
            const ye = ce(f[re]);
            Pe.push(!ye), ye ? (oe.set(re, d), Z.set(re, d), Se.set(re, a), _e.set(re, c), ie.set(re, 1)) : (oe.set(re, i), Z.set(re, i), Se.set(re, h), _e.set(re, S), ie.set(re, 1));
          }
          I = {
            elasticities: oe,
            elasticitiesOrthogonal: Z,
            thicknesses: ie,
            poissonsRatios: Se,
            shearModuli: _e
          };
          for (let re = 0; re < b.length; re++) {
            const ye = b[re][0], ke = b[re][1];
            Math.abs(ke) < 1e-6 ? y.set(re, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ye - L) < s * 0.1 && y.set(re, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let re = 0; re < f.length; re++) {
            if (!Pe[re]) continue;
            const ye = f[re], ke = b[ye[0]], he = b[ye[1]], qe = b[ye[2]], Oe = Math.abs((he[0] - ke[0]) * (qe[1] - ke[1]) - (qe[0] - ke[0]) * (he[1] - ke[1])) / 2, Ze = -m * Oe / 3;
            for (const ae of ye) {
              const ze = k.get(ae) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ze[1] += Ze, k.set(ae, ze);
            }
          }
          if (v > 0) {
            const re = [];
            for (let ye = 0; ye < b.length; ye++) {
              const ke = b[ye][0], he = b[ye][1];
              Math.abs(he - P) < s * 0.1 && ke > n - 1e-6 && re.push({
                idx: ye,
                x: ke
              });
            }
            re.sort((ye, ke) => ye.x - ke.x);
            for (let ye = 0; ye < re.length; ye++) {
              let ke = s;
              ye > 0 && ye < re.length - 1 ? ke = (re[ye + 1].x - re[ye - 1].x) / 2 : ye === 0 && re.length > 1 ? ke = (re[1].x - re[0].x) / 2 : ye === re.length - 1 && re.length > 1 && (ke = (re[ye].x - re[ye - 1].x) / 2);
              const he = -v * ke, qe = k.get(re[ye].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              qe[1] += he, k.set(re[ye].idx, qe);
            }
          }
        }
      }
      if (M === 3) {
        const L = Kt({
          points: F,
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
        b = L.nodes, f = L.elements;
        for (let ce = 0; ce < b.length; ce++) Math.abs(b[ce][1]) < 1e-6 && y.set(ce, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + t, O = Math.min(u, t), se = P - O, le = [];
        for (let ce = 0; ce < b.length; ce++) {
          const oe = b[ce][0], Z = b[ce][1];
          Math.abs(oe - n) < s * 0.6 && Z >= l - 1e-6 && le.push({
            idx: ce,
            y: Z
          });
        }
        le.sort((ce, oe) => ce.y - oe.y);
        for (let ce = 0; ce < le.length; ce++) {
          const { idx: oe, y: Z } = le[ce], ie = Math.max(0, P - Z);
          if (ie <= 0 || Z < se - 1e-6) continue;
          const Se = Math.min(ie, O), _e = p * Se;
          let Pe = s;
          ce > 0 && ce < le.length - 1 ? Pe = (le[ce + 1].y - le[ce - 1].y) / 2 : ce === 0 && le.length > 1 ? Pe = (le[1].y - le[0].y) / 2 : ce === le.length - 1 && le.length > 1 && (Pe = (le[ce].y - le[ce - 1].y) / 2);
          const re = _e * Pe;
          Math.abs(re) > 1e-10 && k.set(oe, [
            re,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        I = {
          elasticities: new Map(f.map((ce, oe) => [
            oe,
            d
          ])),
          elasticitiesOrthogonal: new Map(f.map((ce, oe) => [
            oe,
            d
          ])),
          thicknesses: new Map(f.map((ce, oe) => [
            oe,
            n
          ])),
          poissonsRatios: new Map(f.map((ce, oe) => [
            oe,
            a
          ])),
          shearModuli: new Map(f.map((ce, oe) => [
            oe,
            c
          ]))
        };
      }
      const _ = {
        supports: y,
        loads: k
      }, q = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const L = Ct(b, f, _, I), P = f.filter((ie) => ie.length === 3), O = {};
        for (const ie of Object.keys(I)) {
          const Se = I[ie];
          if (Se && Se instanceof Map) {
            const _e = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let re = 0; re < f.length; re++) f[re].length === 3 && (Se.has(re) && _e.set(Pe, Se.get(re)), Pe++);
            O[ie] = _e;
          }
        }
        const se = So(b, P, O, L), le = b.map((ie) => [
          ie[0],
          0,
          ie[1]
        ]);
        if (e.nodes.val = le, e.elements.val = P, L && L.deformations) {
          const ie = /* @__PURE__ */ new Map();
          L.deformations.forEach((Se, _e) => {
            ie.set(_e, [
              Se[0],
              Se[2],
              Se[1],
              Se[3],
              Se[5],
              Se[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: ie
          });
        }
        const ce = /* @__PURE__ */ new Map();
        y.forEach((ie, Se) => ce.set(Se, ie));
        const oe = /* @__PURE__ */ new Map();
        k.forEach((ie, Se) => oe.set(Se, [
          ie[0],
          ie[2],
          ie[1],
          ie[3],
          ie[5],
          ie[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ce,
          loads: oe
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Z = 0;
        L && L.deformations && L.deformations.forEach((ie) => {
          const Se = Math.sqrt(ie[0] * ie[0] + ie[1] * ie[1] + ie[2] * ie[2]);
          Z = Math.max(Z, Se);
        }), console.log(`Muro Contencion [${q[M]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${m}, qs=${v}`), M === 1 && console.log(`  Es=${i}, nus=${h}`), M === 2 && console.log(`  Es=${i}, nus=${h}, kn=${w}, ks=${x}`), M === 3 && console.log(`  gammaW=${p}, Hw=${u}`), console.log(`  max|u| = ${Z.toExponential(4)}`);
      } catch (L) {
        console.warn("Muro Contencion failed:", L.message);
      }
      setTimeout(() => mt(), 50), We();
    }
    function Jn() {
      const t = j("Lx") || 2, o = j("Ly") || 2, n = j("t") || 0.5, l = j("colA") || 0.4, s = j("colH") || 1.5, d = Math.round(j("nx") || 8), a = Math.round(j("ny") || 8), c = j("E") || 25e6, m = j("nu") || 0.2, r = j("P") || -500, i = j("Mx") || 0, h = j("My") || 0, S = j("ks") || 2e4, w = t / d, x = o / a, p = t / 2, u = o / 2, v = l / 2, M = [];
      for (let y = 0; y <= a; y++) for (let k = 0; k <= d; k++) {
        const I = y * (d + 1) + k;
        let _ = w, q = x;
        (k === 0 || k === d) && (_ = w / 2), (y === 0 || y === a) && (q = x / 2), M.push({
          node: I,
          dof: 0,
          k: S * _ * q
        });
      }
      let $ = 0;
      for (let y = 0; y <= a; y++) for (let k = 0; k <= d; k++) Math.abs(k * w - p) <= v + 1e-6 && Math.abs(y * x - u) <= v + 1e-6 && $++;
      const A = r / Math.max($, 1), F = [];
      for (let y = 0; y <= a; y++) for (let k = 0; k <= d; k++) {
        const I = k * w, _ = y * x;
        Math.abs(I - p) <= v + 1e-6 && Math.abs(_ - u) <= v + 1e-6 && F.push({
          node: y * (d + 1) + k,
          dof: 0,
          value: A
        });
      }
      if (Math.abs(i) > 1e-6) {
        const y = v > 1e-6 ? v : x, k = i / y;
        for (let I = 0; I <= a; I++) for (let _ = 0; _ <= d; _++) {
          const q = _ * w, L = I * x;
          if (Math.abs(q - p) <= v + 1e-6 && Math.abs(L - u) <= v + 1e-6) {
            const P = L - u;
            if (Math.abs(P) > 1e-6) {
              const O = P > 0 ? 1 : -1;
              F.push({
                node: I * (d + 1) + _,
                dof: 0,
                value: O * k / $ * 2
              });
            }
          }
        }
      }
      if (Math.abs(h) > 1e-6) {
        const y = v > 1e-6 ? v : w, k = h / y;
        for (let I = 0; I <= a; I++) for (let _ = 0; _ <= d; _++) {
          const q = _ * w, L = I * x;
          if (Math.abs(q - p) <= v + 1e-6 && Math.abs(L - u) <= v + 1e-6) {
            const P = q - p;
            if (Math.abs(P) > 1e-6) {
              const O = P > 0 ? 1 : -1;
              F.push({
                node: I * (d + 1) + _,
                dof: 0,
                value: O * k / $ * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[It] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${r}, Mx=${i}, My=${h}, ks=${S}`);
      try {
        const y = En({
          E: c,
          nu: m,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: d,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: f,
          springs: M,
          pointLoads: F
        });
        console.log(`  Solved: w_max = ${y.maxW.toExponential(4)}`);
        const k = y.nodeResults.map((se) => [
          se.x,
          se.y,
          0
        ]), I = k.length;
        k.push([
          p - v,
          u - v,
          0
        ]), k.push([
          p + v,
          u - v,
          0
        ]), k.push([
          p + v,
          u + v,
          0
        ]), k.push([
          p - v,
          u + v,
          0
        ]), k.push([
          p - v,
          u - v,
          s
        ]), k.push([
          p + v,
          u - v,
          s
        ]), k.push([
          p + v,
          u + v,
          s
        ]), k.push([
          p - v,
          u + v,
          s
        ]);
        const _ = y.elementResults.map((se) => [
          ...se.nodes
        ]);
        _.push([
          I,
          I + 4
        ]), _.push([
          I + 1,
          I + 5
        ]), _.push([
          I + 2,
          I + 6
        ]), _.push([
          I + 3,
          I + 7
        ]), _.push([
          I + 4,
          I + 5
        ]), _.push([
          I + 5,
          I + 6
        ]), _.push([
          I + 6,
          I + 7
        ]), _.push([
          I + 7,
          I + 4
        ]), _.push([
          I,
          I + 1
        ]), _.push([
          I + 1,
          I + 2
        ]), _.push([
          I + 2,
          I + 3
        ]), _.push([
          I + 3,
          I
        ]), e.nodes.val = k, e.elements.val = _;
        const q = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((se, le) => {
          q.set(le, [
            0,
            0,
            se.w,
            se.bx,
            se.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: q
        });
        const L = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((se, le) => {
          const ce = se.x, oe = se.y;
          (ce < 1e-6 || ce > t - 1e-6 || oe < 1e-6 || oe > o - 1e-6) && L.set(le, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const P = /* @__PURE__ */ new Map();
        if (P.set(I + 4, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), P.set(I + 5, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), P.set(I + 6, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), P.set(I + 7, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: L,
          loads: P
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const se = y.elementResults.length, le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
          y.elementResults.forEach((Z, ie) => {
            le.set(ie, [
              Z.Mxx,
              Z.Mxx,
              Z.Mxx
            ]), ce.set(ie, [
              Z.Myy,
              Z.Myy,
              Z.Myy
            ]), oe.set(ie, [
              Z.Mxy,
              Z.Mxy,
              Z.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: le,
            bendingYY: ce,
            bendingXY: oe
          };
        }
        const O = Ue();
        O && (O.settings.shellResults.val = "bendingXX");
      } catch (y) {
        console.warn("Zapata solver failed:", y.message);
      }
      setTimeout(() => mt(), 50), We();
    }
    function Vn() {
      const t = j("Lx") || 0.4, o = j("Ly") || 0.4, n = j("t") || 0.025, l = j("dBolt") || 0.022, s = j("sx") || 0.28, d = j("sy") || 0.28, a = j("colA") || 0.2, c = j("meshSize") || 8e-3, m = j("E") || 2e8, r = j("nu") || 0.3, i = m / (2 * (1 + r)), h = j("P") || -200, S = Math.round(j("nBolts") || 4), w = t / 2, x = o / 2, p = l / 2, u = a / 2, v = [];
      S >= 4 && (v.push([
        w - s / 2,
        x - d / 2
      ]), v.push([
        w + s / 2,
        x - d / 2
      ]), v.push([
        w + s / 2,
        x + d / 2
      ]), v.push([
        w - s / 2,
        x + d / 2
      ])), S >= 6 && (v.push([
        w,
        x - d / 2
      ]), v.push([
        w,
        x + d / 2
      ])), S >= 8 && (v.push([
        w - s / 2,
        x
      ]), v.push([
        w + s / 2,
        x
      ]));
      const { nodes: M, elements: $ } = Kt({
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
        maxMeshSize: c
      }), A = (q, L) => {
        for (const [P, O] of v) if ((q - P) * (q - P) + (L - O) * (L - O) < p * p) return true;
        return false;
      }, F = $.filter((q) => {
        const L = (M[q[0]][0] + M[q[1]][0] + M[q[2]][0]) / 3, P = (M[q[0]][1] + M[q[1]][1] + M[q[2]][1]) / 3;
        return !A(L, P);
      }), b = M, f = /* @__PURE__ */ new Map();
      for (let q = 0; q < b.length; q++) {
        const L = b[q][0], P = b[q][1];
        for (const [O, se] of v) {
          const le = Math.sqrt((L - O) * (L - O) + (P - se) * (P - se));
          le >= p * 0.7 && le <= p * 1.5 && f.set(q, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const y = /* @__PURE__ */ new Map();
      let k = 0;
      for (let q = 0; q < b.length; q++) {
        const L = b[q][0], P = b[q][1];
        Math.abs(L - w) <= u && Math.abs(P - x) <= u && k++;
      }
      const I = h / Math.max(k, 1);
      for (let q = 0; q < b.length; q++) {
        const L = b[q][0], P = b[q][1];
        if (Math.abs(L - w) <= u && Math.abs(P - x) <= u) {
          const O = y.get(q) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O[2] += I, y.set(q, O);
        }
      }
      const _ = {
        elasticities: new Map(F.map((q, L) => [
          L,
          m
        ])),
        elasticitiesOrthogonal: new Map(F.map((q, L) => [
          L,
          m
        ])),
        thicknesses: new Map(F.map((q, L) => [
          L,
          n
        ])),
        poissonsRatios: new Map(F.map((q, L) => [
          L,
          r
        ])),
        shearModuli: new Map(F.map((q, L) => [
          L,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${h} kN, col=${a * 1e3}mm, mesh=${c * 1e3}mm`), console.log(`  ${F.length} triangulos, ${b.length} nodos`);
      try {
        const q = Ct(b, F, {
          supports: f,
          loads: y
        }, _), L = So(b, F, _, q);
        e.nodes.val = b, e.elements.val = F, q && e.deformOutputs && (e.deformOutputs.val = q), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: y
        }), e.elementInputs && (e.elementInputs.val = {}), L && e.analyzeOutputs && (e.analyzeOutputs.val = L);
        let P = 0;
        q && q.deformations && q.deformations.forEach((O) => {
          const se = Math.sqrt(O[0] * O[0] + O[1] * O[1] + O[2] * O[2]);
          P = Math.max(P, se);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (q) {
        console.warn("Placa Base failed:", q.message);
      }
      setTimeout(() => mt(), 50), We();
    }
    function Xn() {
      const t = j("colB") || 0.3, o = j("colH") || 0.3, n = j("colT") || 8e-3, l = j("colLen") || 1.5, s = j("Lx") || 0.45, d = j("Ly") || 0.45, a = j("tPlaca") || 0.025, c = j("dBolt") || 0.022, m = j("sx") || 0.32, r = j("sy") || 0.32, i = Math.round(j("nSubColV") || 6), h = Math.round(j("nSubColH") || 4), S = Math.round(j("nSubPlaca") || 10), w = j("E") || 2e8, x = j("nu") || 0.3, p = w / (2 * (1 + x)), u = j("P") || -300, v = s / 2, M = d / 2, $ = c / 2, A = t / 2, F = o / 2, b = [], f = [], y = S, k = s / y, I = d / y, _ = (he, qe) => qe * (y + 1) + he;
      for (let he = 0; he <= y; he++) for (let qe = 0; qe <= y; qe++) b.push([
        qe * k,
        he * I,
        0
      ]);
      const q = [
        [
          v - m / 2,
          M - r / 2
        ],
        [
          v + m / 2,
          M - r / 2
        ],
        [
          v + m / 2,
          M + r / 2
        ],
        [
          v - m / 2,
          M + r / 2
        ]
      ], L = (he, qe) => {
        for (const [Oe, Ze] of q) if ((he - Oe) * (he - Oe) + (qe - Ze) * (qe - Ze) < $ * $) return true;
        return false;
      }, P = f.length;
      for (let he = 0; he < y; he++) for (let qe = 0; qe < y; qe++) {
        const Oe = (qe + 0.5) * k, Ze = (he + 0.5) * I;
        L(Oe, Ze) || f.push([
          _(qe, he),
          _(qe + 1, he),
          _(qe + 1, he + 1),
          _(qe, he + 1)
        ]);
      }
      const O = f.length - P, se = i, le = h, ce = [
        [
          v - A,
          M - F
        ],
        [
          v + A,
          M - F
        ],
        [
          v + A,
          M + F
        ],
        [
          v - A,
          M + F
        ]
      ], oe = f.length, Z = [
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
      ], ie = (he, qe) => {
        for (let Oe = 0; Oe < (y + 1) * (y + 1); Oe++) if (Math.abs(b[Oe][0] - he) < k * 0.3 && Math.abs(b[Oe][1] - qe) < I * 0.3 && Math.abs(b[Oe][2]) < 1e-6) return Oe;
        return -1;
      };
      for (const [he, qe] of Z) {
        const [Oe, Ze] = ce[he], [ae, ze] = ce[qe], Re = [];
        for (let st = 0; st <= se; st++) {
          const ft = [], wo = st / se * l;
          for (let so = 0; so <= le; so++) {
            const Yt = so / le, Vt = Oe + Yt * (ae - Oe), wn = Ze + Yt * (ze - Ze);
            if (st === 0) {
              const Xt = ie(Vt, wn);
              if (Xt >= 0) {
                ft.push(Xt);
                continue;
              }
            }
            let Sn = -1;
            for (let Xt = 0; Xt < b.length; Xt++) if (Math.abs(b[Xt][0] - Vt) < 1e-6 && Math.abs(b[Xt][1] - wn) < 1e-6 && Math.abs(b[Xt][2] - wo) < 1e-6) {
              Sn = Xt;
              break;
            }
            Sn >= 0 ? ft.push(Sn) : (ft.push(b.length), b.push([
              Vt,
              wn,
              wo
            ]));
          }
          Re.push(ft);
        }
        for (let st = 0; st < se; st++) for (let ft = 0; ft < le; ft++) f.push([
          Re[st][ft],
          Re[st][ft + 1],
          Re[st + 1][ft + 1],
          Re[st + 1][ft]
        ]);
      }
      const Se = f.length - oe, _e = /* @__PURE__ */ new Map();
      for (let he = 0; he < (y + 1) * (y + 1); he++) {
        const qe = b[he][0], Oe = b[he][1];
        for (const [Ze, ae] of q) {
          const ze = Math.sqrt((qe - Ze) * (qe - Ze) + (Oe - ae) * (Oe - ae));
          ze >= $ * 0.5 && ze <= $ * 2 && _e.set(he, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Pe = /* @__PURE__ */ new Map(), re = [];
      for (let he = 0; he < b.length; he++) Math.abs(b[he][2] - l) < 1e-6 && re.push(he);
      const ye = u / Math.max(re.length, 1);
      for (const he of re) Pe.set(he, [
        0,
        0,
        ye,
        0,
        0,
        0
      ]);
      const ke = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let he = P; he < P + O; he++) ke.elasticities.set(he, w), ke.poissonsRatios.set(he, x), ke.thicknesses.set(he, a), ke.shearModuli.set(he, p);
      for (let he = oe; he < oe + Se; he++) ke.elasticities.set(he, w), ke.poissonsRatios.set(he, x), ke.thicknesses.set(he, n), ke.shearModuli.set(he, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${c * 1e3}mm`), console.log(`  ${O} Q4 placa + ${Se} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${u} kN`);
      try {
        const he = Ct(b, f, {
          supports: _e,
          loads: Pe
        }, ke), qe = So(b, f, ke, he);
        e.nodes.val = b, e.elements.val = f, he && e.deformOutputs && (e.deformOutputs.val = he), e.nodeInputs && (e.nodeInputs.val = {
          supports: _e,
          loads: Pe
        }), e.elementInputs && (e.elementInputs.val = ke), qe && e.analyzeOutputs && (e.analyzeOutputs.val = qe);
        let Oe = 0;
        (he == null ? void 0 : he.deformations) && he.deformations.forEach((Ze) => {
          const ae = Math.sqrt(Ze[0] * Ze[0] + Ze[1] * Ze[1] + Ze[2] * Ze[2]);
          Oe = Math.max(Oe, ae);
        }), console.log(`  max|u| = ${Oe.toExponential(4)}`);
      } catch (he) {
        console.warn("Col+Placa failed:", he.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: _e,
          loads: Pe
        });
      }
      setTimeout(() => mt(), 50), We();
    }
    function Kn() {
      const t = j("H") || 6, o = j("angle") || 45, n = j("bTop") || 3, l = j("bBot") || 3, s = j("meshSize") || 2, d = j("E") || 5e4, a = j("nu") || 0.3, c = j("gamma") || 18, m = j("c") || 15, r = j("phi") || 30, i = j("qs") || 0, h = t / Math.tan(o * Math.PI / 180), S = l + h + n, w = t, x = [
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
          l + h,
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
      ], { nodes: p, elements: u } = Kt({
        points: x,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: s
      }), v = p, M = [], $ = /* @__PURE__ */ new Map();
      for (let F = 0; F < v.length; F++) {
        const b = v[F][0], f = v[F][1];
        Math.abs(f + w) < 1e-6 ? (M.push({
          node: F,
          fixX: true,
          fixY: true
        }), $.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(b) < 1e-6 || Math.abs(b - S) < 1e-6) && (M.push({
          node: F,
          fixX: true,
          fixY: false
        }), $.set(F, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const A = t - s * 0.3;
      try {
        const F = v.map((L) => [
          L[0],
          L[1]
        ]), b = u.map((L) => [
          L[0],
          L[1],
          L[2]
        ]), f = ea({
          nodes: F,
          elements: b,
          E: d,
          nu: a,
          gamma: c,
          c: m,
          phi: r,
          thickness: 1,
          supports: M,
          surcharge: i,
          surfaceYThreshold: A
        }), y = v.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        e.nodes.val = y, e.elements.val = u;
        const k = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.displacements.length; L++) {
          const [P, O] = f.displacements[L];
          k.set(L, [
            P,
            0,
            O,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: k
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), e.elementInputs && (e.elementInputs.val = {});
        const I = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.plasticStrain.length; L++) {
          const P = f.plasticStrain[L];
          I.set(L, [
            P,
            P,
            P
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: I
        });
        let _ = 0;
        for (const [L, P] of f.displacements) {
          const O = Math.sqrt(L * L + P * P);
          _ = Math.max(_, O);
        }
        let q = 0;
        for (const L of f.plasticStrain) q = Math.max(q, L);
        console.log(`Talud SRM: ${v.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${m} kPa, \u03C6=${r}\xB0, \u03B3=${c}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${_.toExponential(4)}`), console.log(`  max \u03B5_pl = ${q.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (F) {
        console.warn("Talud SRM failed:", F.message);
      }
      setTimeout(() => mt(), 50), We();
    }
    let Ht = null, dt = null, Jt = null;
    function Es() {
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
    function at(t) {
      const o = ko.find((n) => n.id === B);
      return t / o.toM;
    }
    function lt(t) {
      const o = ko.find((n) => n.id === B);
      return t * o.toM;
    }
    function ro(t) {
      const o = Fn.find((l) => l.id === G.forceId), n = ko.find((l) => l.id === G.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function nn(t) {
      const o = Fn.find((l) => l.id === G.forceId), n = ko.find((l) => l.id === G.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function sn() {
      return G.label;
    }
    function ks() {
      switch (ko.find((o) => o.id === B).id) {
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
      const t = ro(20594), o = ro(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Un(t, o, n, l, s) {
      const d = Te.steelVigaType, a = d === 0 ? Go() : Jo();
      if (Te.vigaMat === 0) {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = `b${n}${c}`, i = `h${n}${c}`, h = {};
          h[r] = +at(m.b).toFixed(2), h[i] = +at(m.h).toFixed(2), t.addBinding(h, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${c + 1}`
          }), t.addBinding(h, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a2;
          const m = (_a2 = c.target) == null ? void 0 : _a2.key, r = m == null ? void 0 : m.match(new RegExp(`^b${n}(\\d+)$`)), i = m == null ? void 0 : m.match(new RegExp(`^h${n}(\\d+)$`));
          r && (o[parseInt(r[1])].b = lt(c.value), xe()), i && (o[parseInt(i[1])].h = lt(c.value), xe());
        });
      } else if (d <= 1) {
        for (let c = 0; c < o.length; c++) {
          const m = {};
          m[`p${n}${c}`] = o[c].profileIdx ?? 0, t.addBinding(m, `p${n}${c}`, {
            label: `sv${n}${c + 1}`,
            options: a
          });
        }
        t.on("change", (c) => {
          var _a2, _b;
          const r = (_b = (_a2 = c.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          r && (o[parseInt(r[1])].profileIdx = c.value, xe());
        });
      } else if (d === 2) {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = {}, i = `${n}${c}`;
          r[`bf${i}`] = +at(m.bf ?? 0.2).toFixed(3), r[`h${i}`] = +at(m.hf ?? 0.4).toFixed(3), r[`tf${i}`] = +at(m.tf ?? 0.015).toFixed(3), r[`tw${i}`] = +at(m.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${c + 1}`
          }), t.addBinding(r, `h${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          }), t.addBinding(r, `tf${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${c + 1}`
          }), t.addBinding(r, `tw${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a2;
          const m = (_a2 = c.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const i = `${n}${r}`;
            m === `bf${i}` && (o[r].bf = lt(c.value), xe()), m === `h${i}` && (o[r].hf = lt(c.value), xe()), m === `tf${i}` && (o[r].tf = lt(c.value), xe()), m === `tw${i}` && (o[r].tw = lt(c.value), xe());
          }
        });
      } else {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = {}, i = `${n}${c}`;
          r[`bc${i}`] = +at(m.bc ?? 0.2).toFixed(3), r[`hc${i}`] = +at(m.hc ?? 0.3).toFixed(3), r[`t${i}`] = +at(m.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${c + 1}`
          }), t.addBinding(r, `hc${i}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          }), t.addBinding(r, `t${i}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a2;
          const m = (_a2 = c.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const i = `${n}${r}`;
            m === `bc${i}` && (o[r].bc = lt(c.value), xe()), m === `hc${i}` && (o[r].hc = lt(c.value), xe()), m === `t${i}` && (o[r].t = lt(c.value), xe());
          }
        });
      }
    }
    function go() {
      var _a2;
      if (dt) {
        try {
          dt.dispose();
        } catch {
        }
        dt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), z !== "edificio" && z !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Es();
      if (!o) return;
      o.style.display = "";
      const n = E, l = Math.round(((_a2 = ee.nPisos) == null ? void 0 : _a2.val) ?? 3), s = ks(), d = Is(), a = X.length || 1, c = Q.length || 1;
      for (; Te.perFloor.length < l; ) {
        const b = Te.perFloor.length > 0 ? JSON.parse(JSON.stringify(Te.perFloor[Te.perFloor.length - 1])) : zo(a, c);
        Te.perFloor.push(b);
      }
      Te.perFloor.length > l && (Te.perFloor.length = l);
      for (const b of Te.perFloor) {
        for (; b.vigasX.length < a; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : Gt());
        for (b.vigasX.length > a && (b.vigasX.length = a); b.vigasY.length < c; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : Gt());
        b.vigasY.length > c && (b.vigasY.length = c);
      }
      dt = new Ho({
        title: `Sections (${n.label})`,
        container: o
      });
      const m = {
        colMat: Te.colMat
      };
      if (dt.addBinding(m, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        Te.colMat = b.value, go(), xe();
      }), Te.colMat === 0) {
        const b = {
          forma: Te.colShape
        };
        dt.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (y) => {
          Te.colShape = y.value, go(), xe();
        });
        const f = {
          fc: +ro(Te.fc).toFixed(1)
        };
        dt.addBinding(f, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${sn()})`
        }), dt.on("change", (y) => {
          var _a3;
          ((_a3 = y.target) == null ? void 0 : _a3.key) === "fc" && (Te.fc = nn(y.value), xe());
        });
      } else if (Te.colMat === 1) {
        const b = {
          colType: Te.steelColType
        };
        dt.addBinding(b, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          Te.steelColType = f.value, go(), xe();
        });
      }
      dt.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: Te.vigaMat
      };
      if (dt.addBinding(r, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        Te.vigaMat = b.value, go(), xe();
      }), Te.vigaMat === 1) {
        const b = {
          vigaType: Te.steelVigaType
        };
        dt.addBinding(b, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          Te.steelVigaType = f.value, go(), xe();
        });
      }
      const i = Te.steelColType === 0 ? Go() : Jo();
      Te.steelVigaType === 0 ? Go() : Jo();
      const h = B === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : B === "cm" ? [
        0.5,
        10,
        0.1
      ] : B === "mm" ? [
        5,
        100,
        1
      ] : B === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let b = 0; b < l; b++) {
        const f = Te.perFloor[b], y = dt.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (Te.colMat === 0) if (Te.colShape === 1) {
          const k = {
            dCol: +at(f.dCol).toFixed(2)
          };
          y.addBinding(k, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), y.on("change", (I) => {
            var _a3;
            ((_a3 = I.target) == null ? void 0 : _a3.key) === "dCol" && (f.dCol = lt(I.value), xe());
          });
        } else {
          const k = {
            bCol: +at(f.bCol).toFixed(2),
            hCol: +at(f.hCol).toFixed(2)
          };
          y.addBinding(k, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), y.addBinding(k, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), y.on("change", (I) => {
            var _a3, _b;
            ((_a3 = I.target) == null ? void 0 : _a3.key) === "bCol" && (f.bCol = lt(I.value), xe()), ((_b = I.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = lt(I.value), xe());
          });
        }
        else if (Te.colMat === 1) if (Te.steelColType <= 1) {
          const k = {
            col: f.colProfileIdx
          };
          y.addBinding(k, "col", {
            label: "Columna",
            options: i
          }).on("change", (I) => {
            f.colProfileIdx = I.value, xe();
          });
        } else if (Te.steelColType === 2) {
          const k = {
            bf: +at(f.colBf ?? 0.3).toFixed(3),
            h: +at(f.colHf ?? 0.3).toFixed(3),
            tf: +at(f.colTf ?? 0.02).toFixed(3),
            tw: +at(f.colTw ?? 0.012).toFixed(3)
          };
          y.addBinding(k, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), y.addBinding(k, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), y.addBinding(k, "tf", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col tf"
          }), y.addBinding(k, "tw", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col tw"
          }), y.on("change", (I) => {
            var _a3, _b, _c, _d;
            ((_a3 = I.target) == null ? void 0 : _a3.key) === "bf" && (f.colBf = lt(I.value), xe()), ((_b = I.target) == null ? void 0 : _b.key) === "h" && (f.colHf = lt(I.value), xe()), ((_c = I.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = lt(I.value), xe()), ((_d = I.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = lt(I.value), xe());
          });
        } else {
          const k = {
            bc: +at(f.colBc ?? 0.3).toFixed(3),
            hc: +at(f.colHc ?? 0.3).toFixed(3),
            t: +at(f.colT ?? 0.01).toFixed(3)
          };
          y.addBinding(k, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), y.addBinding(k, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), y.addBinding(k, "t", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col t"
          }), y.on("change", (I) => {
            var _a3, _b, _c;
            ((_a3 = I.target) == null ? void 0 : _a3.key) === "bc" && (f.colBc = lt(I.value), xe()), ((_b = I.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = lt(I.value), xe()), ((_c = I.target) == null ? void 0 : _c.key) === "t" && (f.colT = lt(I.value), xe());
          });
        }
        else {
          const k = {
            bc: +at(f.colBc ?? 0.3).toFixed(3),
            hc: +at(f.colHc ?? 0.3).toFixed(3),
            t: +at(f.colT ?? 0.01).toFixed(3),
            Es: +ro(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +ro(f.colFc ?? 28e3).toFixed(1),
            nuC: f.colNuC ?? 0.2
          };
          y.addBinding(k, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), y.addBinding(k, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), y.addBinding(k, "t", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col t"
          }), y.addBlade({
            view: "separator"
          });
          const I = +ro(1e8).toFixed(0), _ = +ro(3e8).toFixed(0), q = Math.max(1, Math.round((_ - I) / 200));
          y.addBinding(k, "Es", {
            min: I,
            max: _,
            step: q,
            label: `Es (${sn()})`
          }), y.addBinding(k, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), y.addBinding(k, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${sn()})`
          }), y.addBinding(k, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), y.on("change", (L) => {
            var _a3, _b, _c, _d, _e, _f, _g;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bc" && (f.colBc = lt(L.value), xe()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = lt(L.value), xe()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = lt(L.value), xe()), ((_d = L.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = nn(L.value), xe()), ((_e = L.target) == null ? void 0 : _e.key) === "nuS" && (f.colNuS = L.value, xe()), ((_f = L.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = nn(L.value), xe()), ((_g = L.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = L.value, xe());
          });
        }
        if (f.vigasX.length > 0) {
          const k = y.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Un(k, f.vigasX, "x", s, h);
        }
        if (f.vigasY.length > 0) {
          const k = y.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Un(k, f.vigasY, "y", s, h);
        }
      }
      dt.addBlade({
        view: "separator"
      });
      const S = dt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Ve,
        direccion: yt === "x" ? 0 : 1,
        cantidad: Qe
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
      }), S.on("change", (b) => {
        var _a3, _b, _c;
        ((_a3 = b.target) == null ? void 0 : _a3.key) === "activar" && (Ve = b.value, xe()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (yt = b.value === 0 ? "x" : "y", xe()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (Qe = Math.round(b.value), xe());
      }), dt.addBlade({
        view: "separator"
      });
      const x = dt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: bt,
        espesor: +at(Mt).toFixed(3),
        subdivX: Pt,
        subdivY: Nt
      };
      x.addBinding(p, "activar", {
        label: "Activar losas"
      }), x.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), x.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), x.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), x.on("change", (b) => {
        var _a3, _b, _c, _d;
        ((_a3 = b.target) == null ? void 0 : _a3.key) === "activar" && (bt = b.value, xe()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && (Mt = lt(b.value), xe()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (Pt = Math.round(b.value), xe()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (Nt = Math.round(b.value), xe());
      }), dt.addBlade({
        view: "separator"
      });
      const u = dt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), v = {
        espesor: +at(Be).toFixed(3),
        subdivH: tt,
        subdivW: ct
      };
      u.addBinding(v, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), u.addBinding(v, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), u.addBinding(v, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), u.on("change", (b) => {
        var _a3, _b, _c;
        ((_a3 = b.target) == null ? void 0 : _a3.key) === "espesor" && (Be = lt(b.value), xe()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (tt = Math.round(b.value), xe()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (ct = Math.round(b.value), xe());
      });
      const M = X.length || 1, $ = Q.length || 1, A = M + 1, F = $ + 1;
      if (M > 0) {
        const b = u.addFolder({
          title: `Muros dir X (${M} vanos)`,
          expanded: false
        });
        for (let f = 0; f < M; f++) for (let y = 0; y < F; y++) {
          const k = `wx_${f}_${y}`, I = Ne.some((L) => L.dir === "x" && L.bay === f && L.axisIdx === y), _ = {};
          _[k] = I;
          const q = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + y)}`;
          b.addBinding(_, k, {
            label: q
          }).on("change", (L) => {
            L.value ? Ne.push({
              dir: "x",
              bay: f,
              axisIdx: y,
              floors: [
                -1
              ]
            }) : Ne = Ne.filter((P) => !(P.dir === "x" && P.bay === f && P.axisIdx === y)), xe();
          });
        }
      }
      if ($ > 0) {
        const b = u.addFolder({
          title: `Muros dir Y (${$} vanos)`,
          expanded: false
        });
        for (let f = 0; f < $; f++) for (let y = 0; y < A; y++) {
          const k = `wy_${f}_${y}`, I = Ne.some((L) => L.dir === "y" && L.bay === f && L.axisIdx === y), _ = {};
          _[k] = I;
          const q = `Vano Y${f + 1} / Eje X${y + 1}`;
          b.addBinding(_, k, {
            label: q
          }).on("change", (L) => {
            L.value ? Ne.push({
              dir: "y",
              bay: f,
              axisIdx: y,
              floors: [
                -1
              ]
            }) : Ne = Ne.filter((P) => !(P.dir === "y" && P.bay === f && P.axisIdx === y)), xe();
          });
        }
      }
      if (Ne.length > 0) {
        u.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${Ne.length} ubicaciones`
        };
        u.addBinding(b, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Bt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (de || (de = t.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (Ht) {
        try {
          Ht.dispose();
        } catch {
        }
        Ht = null;
      }
      t.innerHTML = "";
      const o = z.charAt(0).toUpperCase() + z.slice(1);
      ve = new Ho({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = On()[z];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = ee[a.key].val;
        for (const a of n) ve.addBinding(s, a.key, {
          min: ee[a.key].min,
          max: ee[a.key].max,
          step: ee[a.key].step,
          label: ee[a.key].label
        });
        const d = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const c = {
            min: ee[a.key].min,
            max: ee[a.key].max
          };
          d.addBinding(c, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(c, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            ee[a.key] && (ee[a.key].min = c.min, ee[a.key].max = c.max, ee[a.key].val < c.min && (ee[a.key].val = c.min), ee[a.key].val > c.max && (ee[a.key].val = c.max)), Bt(), xe();
          });
        }
        ve.on("change", (a) => {
          var _a2;
          const c = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (c && ee[c]) {
            if (ee[c].val = a.value, z === "edificio" && (c === "nVanosX" || c === "nVanosY" || c === "nPisos")) {
              if (c === "nVanosX" || c === "nVanosY") {
                const m = Math.round(ee.nVanosX.val), r = Math.round(ee.nVanosY.val);
                for (; X.length < m; ) X.push(X[X.length - 1] ?? E.defaultSpan);
                for (X.length > m && (X.length = m); Q.length < r; ) Q.push(Q[Q.length - 1] ?? E.defaultSpan * 0.8);
                Q.length > r && (Q.length = r);
              }
              Bt();
            }
            xe();
          }
        });
      }
      if (z === "edificio") {
        if (Jt) {
          try {
            Jt.dispose();
          } catch {
          }
          Jt = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const d = E;
          Jt = new Ho({
            title: `Luces (${d.length})`,
            container: s
          });
          const a = Jt.addFolder({
            title: "Luces X",
            expanded: true
          }), c = {};
          for (let i = 0; i < X.length; i++) c[`svx_${i + 1}`] = X[i];
          for (let i = 0; i < X.length; i++) a.addBinding(c, `svx_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a2, _b;
            const S = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            S && (X[parseInt(S[1]) - 1] = i.value, xe());
          });
          const m = Jt.addFolder({
            title: "Luces Y",
            expanded: true
          }), r = {};
          for (let i = 0; i < Q.length; i++) r[`svy_${i + 1}`] = Q[i];
          for (let i = 0; i < Q.length; i++) m.addBinding(r, `svy_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svy${i + 1}`
          });
          m.on("change", (i) => {
            var _a2, _b;
            const S = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            S && (Q[parseInt(S[1]) - 1] = i.value, xe());
          });
        }
      }
      if (go(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const s = Yo()[z];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((c, m) => {
            d[c.label] = m;
          });
          const a = {
            apoyo: ht
          };
          ve.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (c) => {
            ht = c.value, xe();
          });
        }
        if (z === "placa-3q" || z === "placa-q4") {
          const d = {
            teoria: It
          };
          ve.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            It = a.value, xe();
          });
        }
      }
      const l = _n()[z];
      if (l && l.length > 0) {
        Ht = new Ho({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = Ke[a.key].val;
        for (const a of l) Ht.addBinding(s, a.key, {
          min: Ke[a.key].min,
          max: Ke[a.key].max,
          step: Ke[a.key].step,
          label: Ke[a.key].label
        });
        const d = Ht.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const c = {
            min: Ke[a.key].min,
            max: Ke[a.key].max
          };
          d.addBinding(c, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(c, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            Ke[a.key] && (Ke[a.key].min = c.min, Ke[a.key].max = c.max, Ke[a.key].val < c.min && (Ke[a.key].val = c.min), Ke[a.key].val > c.max && (Ke[a.key].val = c.max)), Bt(), xe();
          });
        }
        Ht.on("change", (a) => {
          var _a2;
          const c = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (c && Ke[c]) {
            if (Ke[c].val = a.value, e.nodeInputs) {
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
        setParam: (s, d) => {
          if (ee[s]) ee[s].val = d, xe(), Bt();
          else if (Ke[s]) {
            if (Ke[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              rn(), Bt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in ee) s[d] = ee[d].val;
          for (const d in Ke) s[d] = Ke[d].val;
          return s;
        },
        setGenerator: Je
      };
    }
    function zs() {
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (Ht) {
        try {
          Ht.dispose();
        } catch {
        }
        Ht = null;
      }
      if (dt) {
        try {
          dt.dispose();
        } catch {
        }
        dt = null;
      }
      if (Jt) {
        try {
          Jt.dispose();
        } catch {
        }
        Jt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && de && (n.innerHTML = de);
    }
    const $e = document.createElement("div");
    $e.id = "cad3d-panel";
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
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), z && mt(true);
    }), $e.innerHTML = `
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
      <input class="cmd-input" id="cad3d-cmd" placeholder="cad.galpon(12,20,6,3)" />
    </div>
  `;
    let pt = null;
    function Ts() {
      var _a2, _b, _c, _d, _e, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = B, d = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${z || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((r, i) => {
        a.push(`  ${String(i).padStart(4)}  ${r[0].toFixed(4).padStart(10)}  ${r[1].toFixed(4).padStart(10)}  ${r[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((r, i) => {
        const h = r.map((S) => String(S).padStart(6)).join("");
        a.push(`  ${String(i).padStart(4)}  ${h}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((r, i) => {
        const h = r.map((S) => S ? "  1" : "  0").join("");
        a.push(`  ${String(i).padStart(4)} ${h}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((r, i) => {
        const h = r.map((S) => S.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${h}`);
      }), a.push("")), l) {
        a.push("## ELEMENT PROPERTIES");
        const r = [
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
        ], i = "# elem  " + r.map((h) => h.name.padStart(12)).join(" ");
        a.push(i);
        for (let h = 0; h < o.length; h++) {
          const S = r.map((w) => {
            var _a3;
            const x = (_a3 = w.map) == null ? void 0 : _a3.get(h);
            return x !== void 0 ? x.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(h).padStart(4)}  ${S}`);
        }
        a.push("");
      }
      const c = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      c && c.size > 0 && (a.push(`## DISPLACEMENTS (${c.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), c.forEach((r, i) => {
        const h = r.map((S) => S.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${h}`);
      }), a.push(""));
      const m = (_f = (_e = e.deformOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.reactions;
      if (m && m.size > 0 && (a.push(`## REACTIONS (${m.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), m.forEach((r, i) => {
        const h = r.map((S) => S.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(i).padStart(4)}  ${h}`);
      }), a.push("")), z) {
        a.push("## CLI COMMAND");
        const r = Object.entries(ee).map(([i, h]) => `${i}=${h.val}`).join(" ");
        a.push(`cad.${z === "edificio" ? "building" : z}(${r})`);
      }
      return a.join(`
`);
    }
    let Lo = false;
    function Ls() {
      var _a2, _b, _c, _d;
      if (pt) {
        pt.remove(), pt = null, Lo = false;
        return;
      }
      const t = Ts();
      pt = document.createElement("div"), pt.id = "export-overlay", pt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, pt.innerHTML = `
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
    `, document.body.appendChild(pt), (_a2 = pt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        pt == null ? void 0 : pt.remove(), pt = null, Lo = false;
      }), (_b = pt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = pt.querySelector("#export-body"), n = pt.querySelector("#export-minimize");
        Lo = !Lo, Lo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", pt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", pt.style.width = "720px");
      }), (_c = pt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = pt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = pt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = pt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: z || "custom",
          units: {
            force: g,
            length: B
          },
          nodes: o.map((i, h) => ({
            id: h,
            x: i[0],
            y: i[1],
            z: i[2]
          })),
          elements: n.map((i, h) => ({
            id: h,
            nodes: i
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((i, h) => d.supports.push({
          node: h,
          dofs: i
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((i, h) => d.loads.push({
          node: h,
          forces: i
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((i, h) => d.displacements[h] = i));
        const c = (_f = (_e = e.deformOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.reactions;
        c && c.size > 0 && (d.reactions = {}, c.forEach((i, h) => d.reactions[h] = i));
        const m = pt.querySelector("#export-text");
        m.value = JSON.stringify(d, null, 2);
        const r = pt.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function We() {
      var _a2, _b, _c;
      const t = $e.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, c = 0;
        for (const r of n) r.length === 2 ? d++ : r.length === 3 ? a++ : r.length === 4 && c++;
        let m = `${o}n ${l}e ${s}s`;
        (c > 0 || a > 0) && (m += ` | ${d}fr`, c > 0 && (m += ` ${c}q4`), a > 0 && (m += ` ${a}tri`)), t.textContent = m;
      }
    }
    function an() {
      var _a2;
      if (!zt || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = Qs(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          me = d, Me = t.map((r) => [
            ...r
          ]), ue = 0;
          const { extent: a } = Qt(), c = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (c) {
            let r = 0;
            for (let i = 0; i < t.length; i++) {
              const h = c[i * 6] || 0, S = c[i * 6 + 1] || 0, w = c[i * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(h * h + S * S + w * w));
            }
            K = r > 1e-12 ? a * 0.05 / r : 1;
          }
          const m = `${z} \u2014 ${t.length}n ${o.length}e`;
          Le.render(d, {
            title: m
          }), Le.div.style.display = "", qo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), me = null;
      }
    }
    function ln() {
      te && (cancelAnimationFrame(te), te = 0), Me.length > 0 && (e.nodes.val = Me.map((t) => [
        ...t
      ])), Le.div.style.display = "none", me = null;
    }
    function qo() {
      var _a2;
      if (te && cancelAnimationFrame(te), !(me == null ? void 0 : me.modeShapes) || !Me.length) return;
      const t = me.modeShapes[ue];
      if (!t) return;
      const o = ((_a2 = me.frequencies) == null ? void 0 : _a2[ue]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = Me.length, d = e.elements.rawVal, { extent: a } = Qt(), c = $e.querySelector("#cad3d-modal-scale"), m = c && parseFloat(c.value) || 5;
      let r = 0;
      for (let $ = 0; $ < s; $++) {
        const A = t[$ * 6] || 0, F = t[$ * 6 + 1] || 0, b = t[$ * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(A * A + F * F + b * b));
      }
      const i = r > 1e-12 ? a * m / 100 / r : 1, h = Ue();
      if (!h) return;
      let S = null, w = null, x = null;
      h.scene.traverse(($) => {
        var _a3, _b;
        !S && $.isPoints && $.geometry && (S = $), !w && $.isLineSegments && $.geometry && !$.name && (w = $), !x && $.isMesh && ((_a3 = $.material) == null ? void 0 : _a3.transparent) && ((_b = $.material) == null ? void 0 : _b.opacity) < 0.5 && $.geometry && (x = $);
      });
      const p = new Float32Array(s * 3), u = [];
      for (const $ of d) if ($.length === 2) u.push([
        $[0],
        $[1]
      ]);
      else for (let A = 0; A < $.length; A++) u.push([
        $[A],
        $[(A + 1) % $.length]
      ]);
      const v = new Float32Array(u.length * 6);
      function M() {
        const $ = (performance.now() - l) / 1e3, A = Math.sin(2 * Math.PI * n * $) * i;
        for (let F = 0; F < s; F++) {
          const b = Me[F];
          p[F * 3] = b[0] + (t[F * 6] || 0) * A, p[F * 3 + 1] = b[1] + (t[F * 6 + 1] || 0) * A, p[F * 3 + 2] = b[2] + (t[F * 6 + 2] || 0) * A;
        }
        if (S) {
          const F = S.geometry, b = F.getAttribute("position");
          b && b.array.length === p.length ? (b.array.set(p), b.needsUpdate = true) : F.setAttribute("position", new fo(p.slice(), 3));
        }
        if (w) {
          for (let f = 0; f < u.length; f++) {
            const [y, k] = u[f];
            v[f * 6] = p[y * 3], v[f * 6 + 1] = p[y * 3 + 1], v[f * 6 + 2] = p[y * 3 + 2], v[f * 6 + 3] = p[k * 3], v[f * 6 + 4] = p[k * 3 + 1], v[f * 6 + 5] = p[k * 3 + 2];
          }
          const F = w.geometry, b = F.getAttribute("position");
          b && b.array.length === v.length ? (b.array.set(v), b.needsUpdate = true) : F.setAttribute("position", new fo(v.slice(), 3));
        }
        if (x) {
          const F = [];
          for (const b of d) if (b.length === 3) {
            const [f, y, k] = b;
            F.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), F.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), F.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]);
          } else if (b.length === 4) {
            const [f, y, k, I] = b;
            F.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), F.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), F.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]), F.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), F.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]), F.push(p[I * 3], p[I * 3 + 1], p[I * 3 + 2]);
          }
          if (F.length > 0) {
            const b = x.geometry, f = new Float32Array(F), y = b.getAttribute("position");
            y && y.array.length === f.length ? (y.array.set(f), y.needsUpdate = true) : b.setAttribute("position", new fo(f, 3));
          }
        }
        h.render(), te = requestAnimationFrame(M);
      }
      te = requestAnimationFrame(M);
    }
    function rn() {
      var _a2, _b, _c, _d, _e;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = j("CM") ?? 0, p = j("CV") ?? 0, u = x + p, v = j("Ex") ?? 0, M = j("Ey") ?? 0;
        if (u === 0 && v === 0 && M === 0) return;
        const $ = /* @__PURE__ */ new Map(), A = [];
        for (let L = 0; L < t.length; L++) n.supports.has(L) || A.push(L);
        const F = (L) => Math.round(L * 1e3) / 1e3, b = /* @__PURE__ */ new Set();
        n.supports.forEach((L, P) => {
          b.add(`${F(t[P][0])},${F(t[P][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const L of A) b.has(`${F(t[L][0])},${F(t[L][1])}`) && f.add(L);
        const y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
        if (v !== 0 || M !== 0) {
          let L = -1 / 0, P = -1 / 0;
          for (const se of f) L = Math.max(L, F(t[se][0])), P = Math.max(P, F(t[se][1]));
          const O = /* @__PURE__ */ new Map();
          for (const se of f) {
            const le = F(t[se][2]);
            O.has(le) || O.set(le, []), O.get(le).push(se);
          }
          O.forEach((se) => {
            if (v !== 0) {
              const le = /* @__PURE__ */ new Set();
              for (const ce of se) if (F(t[ce][0]) === L) {
                const oe = F(t[ce][1]);
                le.has(oe) || (le.add(oe), y.add(ce));
              }
            }
            if (M !== 0) {
              const le = /* @__PURE__ */ new Set();
              for (const ce of se) if (F(t[ce][1]) === P) {
                const oe = F(t[ce][0]);
                le.has(oe) || (le.add(oe), k.add(ce));
              }
            }
          });
        }
        const I = 9.81, _ = /* @__PURE__ */ new Map();
        for (let L = 0; L < o.length; L++) {
          const P = o[L], O = ((_a2 = l.densities) == null ? void 0 : _a2.get(L)) ?? 0;
          if (!(Math.abs(O) < 1e-15)) {
            if (P.length === 2) {
              const se = ((_b = l.areas) == null ? void 0 : _b.get(L)) ?? 0, le = t[P[0]], ce = t[P[1]], oe = Math.sqrt((ce[0] - le[0]) ** 2 + (ce[1] - le[1]) ** 2 + (ce[2] - le[2]) ** 2), ie = -(O * se * oe * I) / 2;
              _.set(P[0], (_.get(P[0]) ?? 0) + ie), _.set(P[1], (_.get(P[1]) ?? 0) + ie);
            } else if (P.length >= 3) {
              const se = ((_c = l.thicknesses) == null ? void 0 : _c.get(L)) ?? 0;
              let le = 0;
              if (P.length === 3) {
                const [Z, ie, Se] = P.map((_e2) => t[_e2]);
                le = 0.5 * Math.abs((ie[0] - Z[0]) * (Se[1] - Z[1]) - (Se[0] - Z[0]) * (ie[1] - Z[1]));
              } else if (P.length === 4) {
                const [Z, ie, Se, _e2] = P.map((Pe) => t[Pe]);
                if (le = 0.5 * Math.abs((ie[0] - Z[0]) * (Se[1] - Z[1]) - (Se[0] - Z[0]) * (ie[1] - Z[1])) + 0.5 * Math.abs((Se[0] - Z[0]) * (_e2[1] - Z[1]) - (_e2[0] - Z[0]) * (Se[1] - Z[1])), le < 1e-10) {
                  const Pe = [
                    ie[0] - Z[0],
                    ie[1] - Z[1],
                    ie[2] - Z[2]
                  ], re = [
                    _e2[0] - Z[0],
                    _e2[1] - Z[1],
                    _e2[2] - Z[2]
                  ], ye = [
                    Pe[1] * re[2] - Pe[2] * re[1],
                    Pe[2] * re[0] - Pe[0] * re[2],
                    Pe[0] * re[1] - Pe[1] * re[0]
                  ];
                  le = Math.sqrt(ye[0] ** 2 + ye[1] ** 2 + ye[2] ** 2);
                }
              }
              const oe = -(O * se * le * I) / P.length;
              for (const Z of P) _.set(Z, (_.get(Z) ?? 0) + oe);
            }
          }
        }
        const q = /* @__PURE__ */ new Set();
        for (const L of o) L.length === 2 && (q.add(L[0]), q.add(L[1]));
        for (const L of A) {
          const P = y.has(L) ? v : 0, O = k.has(L) ? M : 0, se = _.get(L) ?? 0, le = q.has(L) ? u : 0, ce = se + le;
          (P !== 0 || O !== 0 || Math.abs(ce) > 1e-10) && $.set(L, [
            P,
            O,
            ce,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: $
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let d = 0, a = 0, c = 0;
      for (const x of o) x.length === 2 ? d++ : x.length === 3 ? c++ : x.length === 4 && a++;
      const m = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e = n.loads) == null ? void 0 : _e.size) || 0, i = t.length * 6, h = i - m * 6, S = [], w = (x) => S.push(x);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && w(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), c && w(`&nbsp;&nbsp;Triangulos: <b>${c}</b>`), w(`&nbsp;&nbsp;Apoyos: ${m} &nbsp;|&nbsp; Cargas: ${r}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${i} total, ~${h} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${i}&times;${i})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const x = Ct(t, o, n, l), p = performance.now() - s;
        if (x) {
          e.deformOutputs.val = x, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let u = 0, v = -1, M = 0, $ = 0;
          x.deformations && x.deformations.forEach((y, k) => {
            const I = Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]);
            I > u && (u = I, v = k, M = y[0], $ = y[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${u.toExponential(3)}</b> m <span style="color:#666">(nodo ${v})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(M * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${($ * 1e3).toFixed(4)} mm`);
          const A = performance.now(), F = So(t, o, l, x), b = performance.now() - A;
          F && (e.analyzeOutputs.val = F, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const p = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), zt && setTimeout(() => an(), 50);
    }
    function cn(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), c = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: c
      };
    }
    function Qn(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function dn(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, c = (2 * n * t * t * t + s * l * l * l) / 12, m = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: c,
        J: m
      };
    }
    function pn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, c = (o * t * t * t - s * l * l * l) / 12, m = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), i = 4 * m * m / (r > 0 ? r : 1);
      return {
        A: d,
        Iz: a,
        Iy: c,
        J: i
      };
    }
    function qs(t, o, n, l, s, d, a) {
      const m = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, r = t - 2 * n, i = o - 2 * n, h = t * o - r * i, S = (t * o * o * o - r * i * i * i) / 12, w = (o * t * t * t - i * r * r * r) / 12, x = r * i, p = r * i * i * i / 12, u = i * r * r * r / 12, v = h + m * x, M = S + m * p, $ = w + m * u, A = l / (2 * (1 + s)), F = (t - n) * (o - n), b = 2 * ((t - n) / n + (o - n) / n), f = 4 * F * F / (b > 0 ? b : 1);
      return {
        A: v,
        Iz: M,
        Iy: $,
        J: f,
        Es: l,
        Gs: A,
        A_steel: h,
        A_conc: x
      };
    }
    function Zt() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = E, n = {
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
      if ((z === "edificio" || z === "frame") && pe.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: c, perFloor: m } = Te, r = 4700 * Math.sqrt(c / 1e3) * 1e3, i = r / (2 * 1.2), h = 24 / 9.80665, S = o.E, w = o.G, x = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (V.has(p)) {
            const y = 4700 * Math.sqrt(c / 1e3) * 1e3, k = 0.2;
            n.elasticities.set(p, y), n.poissonsRatios.set(p, k), n.thicknesses.set(p, Be), n.shearModuli.set(p, y / (2 * (1 + k))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (kt.has(p)) {
            const y = 4700 * Math.sqrt(c / 1e3) * 1e3, k = 0.2;
            n.elasticities.set(p, y), n.poissonsRatios.set(p, k), n.thicknesses.set(p, Mt), n.shearModuli.set(p, y / (2 * (1 + k))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const u = pe.has(p), v = ne.get(p) ?? 0, M = m[v] ?? m[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let $, A, F, b;
          if (u) if (s === 0) A = r, F = i, b = h, $ = a === 1 ? Qn(M.dCol) : cn(M.bCol, M.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: M.dCol
          } : {
            type: "rect",
            b: M.bCol,
            h: M.hCol
          });
          else if (s === 1) {
            A = S, F = w, b = x;
            const y = Te.steelColType;
            if (y <= 1) {
              const k = io[M.colProfileIdx] ?? io[0];
              $ = {
                A: k.A,
                Iz: k.Iz,
                Iy: k.Iy,
                J: k.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: k.bf,
                h: k.d,
                name: k.name
              });
            } else if (y === 2) {
              const k = M.colBf ?? 0.3, I = M.colHf ?? 0.3, _ = M.colTf ?? 0.02, q = M.colTw ?? 0.012;
              $ = dn(k, I, _, q);
              const L = `I${(I * 100).toFixed(0)}x${(k * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: k,
                h: I,
                tf: _,
                tw: q,
                name: L
              });
            } else {
              const k = M.colBc ?? 0.3, I = M.colHc ?? 0.3, _ = M.colT ?? 0.01;
              $ = pn(k, I, _);
              const q = `\u25A1${(I * 100).toFixed(0)}x${(k * 100).toFixed(0)}x${(_ * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: k,
                h: I,
                tw: _,
                name: q
              });
            }
          } else {
            const y = M.colBc ?? 0.3, k = M.colHc ?? 0.3, I = M.colT ?? 0.01, _ = M.colFc ?? 28e3, q = M.colEs ?? 2e8, L = M.colNuS ?? 0.3;
            M.colNuC;
            const P = qs(y, k, I, q, L, _);
            $ = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, A = P.Es, F = P.Gs;
            const O = 7.85, se = 24 / 9.80665;
            b = (O * P.A_steel + se * P.A_conc) / (P.A_steel + P.A_conc);
            const le = `CFT ${(k * 1e3).toFixed(0)}X${(y * 1e3).toFixed(0)}X${(I * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: y,
              h: k,
              tw: I,
              name: le
            });
          }
          else {
            const y = Ae.get(p), k = y ? y.dir === "x" ? M.vigasX : M.vigasY : [], I = y ? k[y.bay] ?? k[0] ?? Gt() : Gt();
            if (d === 0) A = r, F = i, b = h, $ = cn(I.b, I.h), n.sectionShapes.set(p, {
              type: "rect",
              b: I.b,
              h: I.h
            });
            else {
              A = S, F = w, b = x;
              const _ = Te.steelVigaType;
              if (_ <= 1) {
                const q = io[I.profileIdx ?? 0] ?? io[0];
                $ = {
                  A: q.A,
                  Iz: q.Iz,
                  Iy: q.Iy,
                  J: q.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: q.bf,
                  h: q.d,
                  name: q.name
                });
              } else if (_ === 2) {
                const q = I.bf ?? 0.2, L = I.hf ?? 0.4, P = I.tf ?? 0.015, O = I.tw ?? 0.01;
                $ = dn(q, L, P, O);
                const se = `I${(L * 100).toFixed(0)}x${(q * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: q,
                  h: L,
                  tf: P,
                  tw: O,
                  name: se
                });
              } else {
                const q = I.bc ?? 0.2, L = I.hc ?? 0.3, P = I.t ?? 8e-3;
                $ = pn(q, L, P);
                const O = `\u25A1${(L * 100).toFixed(0)}x${(q * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: q,
                  h: L,
                  tw: P,
                  name: O
                });
              }
            }
          }
          const f = fe.get(p);
          if (f) {
            if ((f.material ?? 1) === 0 ? (A = r, F = i, b = h) : (A = S, F = w, b = x), f.secType === "rect" && f.b && f.h) $ = cn(f.b, f.h), n.sectionShapes.set(p, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) $ = Qn(f.b), n.sectionShapes.set(p, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const k = io[f.profileIdx] ?? io[0];
              $ = {
                A: k.A,
                Iz: k.Iz,
                Iy: k.Iy,
                J: k.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: k.bf,
                h: k.d,
                name: k.name
              });
            } else if (f.secType === "I-param" && f.bf && f.hf && f.tf && f.tw) {
              $ = dn(f.bf, f.hf, f.tf, f.tw);
              const k = `I${(f.hf * 100).toFixed(0)}x${(f.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: f.bf,
                h: f.hf,
                tf: f.tf,
                tw: f.tw,
                name: k
              });
            } else if (f.secType === "tubular" && f.bc && f.hc && f.t) {
              $ = pn(f.bc, f.hc, f.t);
              const k = `\u25A1${(f.hc * 100).toFixed(0)}x${(f.bc * 100).toFixed(0)}x${(f.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: f.bc,
                h: f.hc,
                tw: f.t,
                name: k
              });
            }
          }
          n.elasticities.set(p, A), n.shearModuli.set(p, F), n.areas.set(p, $.A), n.momentsOfInertiaZ.set(p, $.Iy), n.momentsOfInertiaY.set(p, $.Iz), n.torsionalConstants.set(p, $.J), n.densities.set(p, b);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function es(t) {
      $e.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
      (_a2 = $e.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (u) => {
        u.stopPropagation(), $e.classList.add("collapsed");
      }), (_b = $e.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (u) => {
        u.stopPropagation(), $e.classList.remove("collapsed");
      }), $e.querySelectorAll("[data-ex]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.ex;
          es(M), je.example(M);
        });
      }), $e.querySelectorAll("[data-view]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.view;
          eo(M), $e.querySelectorAll("[data-view]").forEach(($) => $.classList.remove("view-active")), u.classList.add("view-active");
        });
      }), (_c = $e.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (u) => {
        u.stopPropagation(), z = "", ws.val = false, zs(), je.clear();
      }), (_d = $e.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (u) => {
        var _a3;
        u.stopPropagation(), Ot && (Ot = false, po()), Dt && Ro(), Tt = !Tt, (_a3 = $e.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Tt);
        const M = Ue();
        M && (M.controls.enabled = !Tt), Tt || No();
      }), (_e = $e.querySelector("#cad3d-draw")) == null ? void 0 : _e.addEventListener("click", (u) => {
        var _a3;
        u.stopPropagation(), Ot && (Ot = false, po()), Tt && No(), Dt = !Dt, (_a3 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Dt), Dt ? Os() : Ro();
      }), (_f = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (u) => {
        var _a3;
        u.stopPropagation(), Tt && No(), Dt && Ro(), Ot = !Ot, (_a3 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Ot), Ot || po();
      }), (_g = $e.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (u) => {
        u.stopPropagation(), Ls();
      });
      let t = "";
      const o = $e.querySelector("#cad3d-io-menu"), n = $e.querySelector("#cad3d-io-file");
      function l(u, v) {
        e.nodes.val = u.nodes, e.elements.val = u.elements, e.nodeInputs.val = u.nodeInputs, e.elementInputs.val = u.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${v}: ${u.nodes.length} nodes, ${u.elements.length} elements`);
      }
      function s(u) {
        pe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
        const v = /* @__PURE__ */ new Map();
        for (let I = 0; I < u.stories.length; I++) v.set(u.stories[I].name, I);
        for (let I = 0; I < u.elementTypes.length; I++) {
          const _ = u.elementTypes[I], q = u.elementStories[I], L = v.get(q) ?? 0;
          ne.set(I, L), _ === "COLUMN" || _ === "BRACE" ? pe.add(I) : J.add(I);
        }
        z = "edificio";
        const M = u.grids.filter((I) => I.dir === "X").sort((I, _) => I.coord - _.coord), $ = u.grids.filter((I) => I.dir === "Y").sort((I, _) => I.coord - _.coord);
        let A, F, b, f;
        if (M.length > 0 || $.length > 0) A = M.map((I) => I.coord), F = $.map((I) => I.coord), b = M.map((I) => I.label), f = $.map((I) => I.label);
        else {
          const I = new Set(u.nodes.map((q) => q[0])), _ = new Set(u.nodes.map((q) => q[1]));
          A = [
            ...I
          ].sort((q, L) => q - L), F = [
            ..._
          ].sort((q, L) => q - L), b = A.map((q, L) => String(L + 1)), f = F.map((q, L) => String.fromCharCode(65 + L));
        }
        const y = u.stories.length > 0 ? Math.max(...u.stories.map((I) => I.elev)) : Math.max(...u.nodes.map((I) => I[2]));
        De = A, Ge = F, setTimeout(() => {
          mt(), rt(A, F, y, b, f), Et(u.stories, A, F), fn(), un();
        }, 100);
        const k = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const I of u.elementTypes) k[I]++;
        console.log(`E2K grids: X=[${b.join(",")}] Y=[${f.join(",")}]`), console.log(`E2K stories: ${u.stories.map((I) => `${I.name}@${I.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${k.COLUMN} columns, ${k.BEAM} beams, ${k.BRACE} braces`), We();
      }
      function d(u, v) {
        const M = new Blob([
          u
        ], {
          type: "text/plain"
        }), $ = URL.createObjectURL(M), A = document.createElement("a");
        A.href = $, A.download = v, A.click(), URL.revokeObjectURL($);
      }
      o && o.addEventListener("change", () => {
        if (t = o.value, o.value = "", t.startsWith("import")) t === "import-e2k" ? n.accept = ".e2k,.E2K" : t === "import-py" ? n.accept = ".py" : t === "import-tcl" && (n.accept = ".tcl"), n.click();
        else if (t.startsWith("export")) {
          const u = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            t === "export-e2k" ? d(Fa({
              ...u,
              title: "Awatif Model",
              e2kModel: He ?? void 0
            }), "model.e2k") : t === "export-py" ? d(Ca(u), "model_opensees.py") : t === "export-tcl" && d(Pa(u), "model_opensees.tcl");
          } catch (v) {
            alert("Export error: " + v.message);
          }
        }
      }), n && n.addEventListener("change", () => {
        var _a3;
        const u = (_a3 = n.files) == null ? void 0 : _a3[0];
        if (!u) return;
        const v = new FileReader();
        v.onload = () => {
          const M = v.result;
          try {
            if (t === "import-e2k") {
              const $ = qa(M);
              He = $, l($, "E2K imported"), s($);
            } else if (t === "import-py") {
              const $ = Oa(M);
              l($, "OpenSeesPy imported");
            } else if (t === "import-tcl") {
              const $ = _a(M);
              l($, "OpenSees Tcl imported");
            }
          } catch ($) {
            alert("Import error: " + $.message), console.error($);
          }
        }, v.readAsText(u), n.value = "";
      });
      const a = $e.querySelector("#cad3d-force-unit");
      a && (a.value = g, a.addEventListener("change", (u) => {
        u.stopPropagation(), g = a.value, E = mo(g, B), z && Je(z);
      }));
      const c = $e.querySelector("#cad3d-length-unit");
      c && (c.value = B, c.addEventListener("change", (u) => {
        u.stopPropagation(), B = c.value, E = mo(g, B), z && Je(z);
      })), $e.querySelectorAll("[data-preset]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.preset, $ = R[M];
          $ && (g = $.force, B = $.length, G = $.stress, E = mo(g, B), a && (a.value = g), c && (c.value = B), $e.querySelectorAll("[data-preset]").forEach((A) => {
            A.classList.toggle("active", A.dataset.preset === M);
          }), z && Je(z), console.log(`Preset: ${M} \u2192 ${g}+${B}, stress: ${G.label}`));
        });
      }), (_h = $e.querySelector("#cad3d-log")) == null ? void 0 : _h.addEventListener("click", (u) => {
        u.stopPropagation(), Ws();
      }), (_i = $e.querySelector("#cad3d-pushover")) == null ? void 0 : _i.addEventListener("click", (u) => {
        u.stopPropagation(), Ys();
      }), (_j = $e.querySelector("#cad3d-nonlinear")) == null ? void 0 : _j.addEventListener("click", (u) => {
        u.stopPropagation(), Js();
      }), (_k = $e.querySelector("#cad3d-fem-solver")) == null ? void 0 : _k.addEventListener("click", (u) => {
        u.stopPropagation(), Xs();
      }), (_l = $e.querySelector("#cad3d-modal")) == null ? void 0 : _l.addEventListener("click", (u) => {
        var _a3, _b2;
        u.stopPropagation(), zt = !zt, (_a3 = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", zt);
        const M = $e.querySelector("#cad3d-mode-prev"), $ = $e.querySelector("#cad3d-mode-next"), A = $e.querySelector("#cad3d-mode-label"), F = $e.querySelector("#cad3d-modal-scale");
        if (zt) {
          const b = Ue();
          ((_b2 = b == null ? void 0 : b.settings) == null ? void 0 : _b2.loads) && (be = b.settings.loads.rawVal, b.settings.loads.val = false), an(), M.style.display = "", $.style.display = "", A.style.display = "", F && (F.style.display = ""), m();
        } else ln(), M.style.display = "none", $.style.display = "none", A.style.display = "none", F && (F.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && xe(), setTimeout(() => {
          var _a4;
          const b = Ue();
          ((_a4 = b == null ? void 0 : b.settings) == null ? void 0 : _a4.loads) && be && (b.settings.loads.val = true);
        }, 600);
      });
      function m() {
        var _a3;
        const u = $e.querySelector("#cad3d-mode-label");
        if (!u || !(me == null ? void 0 : me.frequencies)) return;
        const v = me.frequencies[ue], M = v > 0 ? 1 / v : 0, $ = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let A = 0; A <= ue; A++) {
          const F = (_a3 = me.massParticipation) == null ? void 0 : _a3[A];
          if (F) for (let b = 0; b < 6; b++) $[b] += F[b];
        }
        u.textContent = `Modo ${ue + 1} \u2014 ${v.toFixed(2)} Hz \u2014 T=${M.toFixed(3)}s \u2014 \u03A3Ux=${($[0] * 100).toFixed(1)}% \u03A3Uy=${($[1] * 100).toFixed(1)}% \u03A3Rz=${($[5] * 100).toFixed(1)}%`;
      }
      (_m = $e.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (u) => {
        if (u.stopPropagation(), !(me == null ? void 0 : me.modeShapes)) return;
        ue = (ue - 1 + me.modeShapes.length) % me.modeShapes.length;
        const v = me.modeShapes[ue], { extent: M } = Qt();
        let $ = 0;
        for (let A = 0; A < Me.length; A++) {
          const F = v[A * 6] || 0, b = v[A * 6 + 1] || 0, f = v[A * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(F * F + b * b + f * f));
        }
        K = $ > 1e-12 ? M * 0.05 / $ : 1, qo(), m();
      }), (_n2 = $e.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (u) => {
        if (u.stopPropagation(), !(me == null ? void 0 : me.modeShapes)) return;
        ue = (ue + 1) % me.modeShapes.length;
        const v = me.modeShapes[ue], { extent: M } = Qt();
        let $ = 0;
        for (let A = 0; A < Me.length; A++) {
          const F = v[A * 6] || 0, b = v[A * 6 + 1] || 0, f = v[A * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(F * F + b * b + f * f));
        }
        K = $ > 1e-12 ? M * 0.05 / $ : 1, qo(), m();
      });
      const r = $e.querySelector("#cad3d-modal-scale");
      r == null ? void 0 : r.addEventListener("mousedown", (u) => u.stopPropagation()), r == null ? void 0 : r.addEventListener("change", () => {
        zt && (me == null ? void 0 : me.modeShapes) && qo();
      });
      const i = $e.querySelector("#cad3d-cmd");
      i == null ? void 0 : i.addEventListener("mousedown", (u) => u.stopPropagation()), document.addEventListener("keydown", (u) => {
        var _a3;
        if ((u.ctrlKey || u.metaKey) && u.key === "z" && !u.shiftKey) {
          u.preventDefault(), os();
          return;
        }
        if ((u.ctrlKey || u.metaKey) && (u.key === "y" || u.key === "z" && u.shiftKey)) {
          u.preventDefault(), ns();
          return;
        }
        if ((u.key === "Delete" || u.key === "Backspace") && ot.size > 0) {
          u.preventDefault(), ot.forEach((v) => Y.add(v)), ot.clear(), Wt && (Wt.remove(), Wt = null), xe();
          return;
        }
        if (u.key === "Escape") {
          if (Dt) if (nt !== null) {
            nt = null;
            const v = Ue();
            gt && v && (v.scene.remove(gt), gt.geometry.dispose(), gt.material.dispose(), gt = null), xt && v && (v.scene.remove(xt), xt.geometry.dispose(), xt.material.dispose(), xt = null), v == null ? void 0 : v.render();
          } else Ro();
          Tt && No(), Ot && (Ot = false, po(), (_a3 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), i == null ? void 0 : i.addEventListener("keydown", (u) => {
        if (u.key === "Enter") {
          const v = i.value.trim();
          if (v) {
            try {
              const M = new Function("cad", `return ${v}`)(je);
              M !== void 0 && console.log(M);
            } catch (M) {
              console.error(M.message);
            }
            i.value = "";
          }
        }
      });
      let h = false, S = 0, w = 0, x = 0, p = 0;
      $e.addEventListener("mousedown", (u) => {
        const v = u.target.tagName;
        if (v === "BUTTON" || v === "INPUT" || v === "SELECT") return;
        h = true;
        const M = $e.getBoundingClientRect();
        $e.style.bottom = "unset", S = u.clientX, w = u.clientY, x = M.left, p = M.top, u.preventDefault();
      }), window.addEventListener("mousemove", (u) => {
        h && (u.preventDefault(), $e.style.left = x + (u.clientX - S) + "px", $e.style.top = p + (u.clientY - w) + "px");
      }), window.addEventListener("mouseup", () => {
        h = false;
      }), We();
    }, 10);
    function Ue() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Qt() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ie(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [r, i, h] of t) r < o && (o = r), r > s && (s = r), i < n && (n = i), i > d && (d = i), h < l && (l = h), h > a && (a = h);
      const c = new Ie((o + s) / 2, (n + d) / 2, (l + a) / 2), m = Math.max(s - o, d - n, a - l, 1);
      return {
        center: c,
        extent: m
      };
    }
    function mt(t = false) {
      const o = Ue();
      if (!o) return;
      const { extent: n } = Qt();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((h) => h.type === "GridHelper").forEach((h) => {
        var _a2, _b;
        (_a2 = h.geometry) == null ? void 0 : _a2.dispose(), (_b = h.material) == null ? void 0 : _b.dispose(), o.scene.remove(h);
      });
      const d = ta(), a = new da(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((h) => h.type === "Group" && h.name !== "gridAxes" && h.name !== "loadsGroup" && (h.name === "viewerAxes" || h.children.some((S) => S instanceof Do))).forEach((h) => {
        h.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(h);
      });
      const m = 0.05 * l, r = new In();
      r.name = "viewerAxes";
      const i = d.axisArrow;
      r.add(new Do(new Ie(1, 0, 0), new Ie(), 1, i, 0.2, 0.2)), r.add(new Do(new Ie(0, 1, 0), new Ie(), 1, i, 0.2, 0.2)), r.add(new Do(new Ie(0, 0, 1), new Ie(), 1, i, 0.2, 0.2)), r.children.forEach((h) => h.scale.set(m, m, m));
      for (const [h, S, w] of [
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
        const x = document.createElement("canvas");
        x.width = 64, x.height = 64;
        const p = x.getContext("2d");
        p.fillStyle = S, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(h, 32, 34);
        const u = new zn(x);
        u.needsUpdate = true;
        const v = new jo(new Wo({
          map: u,
          depthTest: false,
          transparent: true
        }));
        v.position.set(w[0], w[1], w[2]), v.scale.set(0.4 * m, 0.4 * m, 1), v.renderOrder = 99, r.add(v);
      }
      o.scene.add(r), t ? o.render() : eo("3d");
    }
    function ts(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function eo(t) {
      var _a2;
      const o = Ue();
      if (!o) return;
      const { center: n, extent: l } = Qt(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((c) => {
          var _a3;
          if (!c.material) return;
          const m = c.type === "GridHelper" || c.type === "AxesHelper", r = c.isSprite, i = ((_a3 = c.userData) == null ? void 0 : _a3.noClip) === true;
          (m || r || i) && (Array.isArray(c.material) ? c.material.forEach((h) => {
            h.clippingPlanes = [];
          }) : c.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const c = o.perspCamera.fov, m = l / (2 * Math.tan(c * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + m * 0.5, n.y - m * 0.8, n.z + m * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const c = o.orthoCamera;
        c.left = -d * s, c.right = d * s, c.top = d, c.bottom = -d, c.near = -l * 10, c.far = l * 10, c.updateProjectionMatrix();
        const m = (r, i, h) => {
          c.position.copy(r), c.up.copy(h), o.controls.target.copy(i), c.lookAt(i), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], m(new Ie(n.x, n.y, n.z + l * 2), new Ie(n.x, n.y, n.z), new Ie(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), i = ((_a2 = ee.hPiso) == null ? void 0 : _a2.val) ?? 3, h = (r + 1) * i, S = i * 0.45;
          o.renderer.clippingPlanes = [
            new ao(new Ie(0, 0, -1), h + S),
            new ao(new Ie(0, 0, 1), -h + S)
          ], a(), m(new Ie(n.x, n.y, h + l * 2), new Ie(n.x, n.y, h), new Ie(0, 1, 0));
        } else if (t === "elevX") c.position.set(n.x + l * 2, n.y, n.z), c.up.set(0, 0, 1);
        else if (t === "elevY") c.position.set(n.x, n.y - l * 2, n.z), c.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), i = De[r] ?? n.x;
          if (Ge.length > 1) {
            const S = ts(De, r, l);
            o.renderer.clippingPlanes = [
              new ao(new Ie(-1, 0, 0), i + S),
              new ao(new Ie(1, 0, 0), -i + S)
            ], a(), c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), i = Ge[r] ?? n.y;
          if (De.length > 1) {
            const S = ts(Ge, r, l);
            o.renderer.clippingPlanes = [
              new ao(new Ie(0, -1, 0), i + S),
              new ao(new Ie(0, 1, 0), -i + S)
            ], a(), c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(c);
      }
    }
    function fn() {
      const t = $e.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (De.length < 2 && Ge.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, c) => {
        const m = document.createElement("button");
        return m.textContent = d, m.dataset.view = a, m.title = c, m.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", m.addEventListener("click", (r) => {
          var _a2;
          r.stopPropagation();
          const i = m.classList.contains("view-active");
          $e.querySelectorAll("[data-view]").forEach((h) => h.classList.remove("view-active")), i ? (eo("3d"), (_a2 = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (eo(a), m.classList.add("view-active"));
        }), m;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      De.forEach((d, a) => {
        const c = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(c, `axisX:${a}`, `Eje ${c} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ge.forEach((d, a) => {
        const c = `${a + 1}`;
        t.appendChild(o(c, `axisY:${a}`, `Eje ${c} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function un() {
      var _a2;
      const t = $e.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = ee.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, d, a) => {
        const c = document.createElement("button");
        return c.textContent = s, c.dataset.view = d, c.title = a, c.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", c.addEventListener("click", (m) => {
          var _a3;
          m.stopPropagation();
          const r = c.classList.contains("view-active");
          $e.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), r ? (eo("3d"), (_a3 = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (eo(d), c.classList.add("view-active"));
        }), c;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Fs() {
      eo("3d"), $e.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    je.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, eo(t), $e.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Ot = false, Tt = false, Dt = false, $t = "line", qt = [], nt = null, gt = null, xt = null, xo = null, Ft = null;
    const it = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, mn = 0.5;
    let bn = [], At = null, co = null;
    const vo = [], _o = [], As = 50;
    function yo() {
      vo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), vo.length > As && vo.shift(), _o.length = 0;
    }
    function os() {
      if (vo.length === 0) return;
      _o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = vo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Zt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function ns() {
      if (_o.length === 0) return;
      vo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = _o.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Zt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const ot = /* @__PURE__ */ new Set();
    let Lt = null, to = [], jt = null, Wt = null;
    function hn(t) {
      const o = Ue();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let c = 0; c < l.length; c++) {
        const m = n[l[c]], r = n[l[(c + 1) % l.length]];
        s.push(m[0], m[1], m[2], r[0], r[1], r[2]);
      }
      const d = new lo();
      d.setAttribute("position", new fo(s, 3));
      const a = new Ao(d, new Co({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), to.push(a), o.render();
    }
    function oo() {
      const t = Ue();
      to.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), to = [], t == null ? void 0 : t.render();
    }
    function no() {
      Wt && Wt.remove();
      const t = D.size > 0 || H;
      if (ot.size === 0 && !t) {
        Wt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${ot.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Wt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ks([
          ...ot
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (ot.size === 1) {
          const n = [
            ...ot
          ][0];
          ds(n);
        } else {
          const n = [
            ...ot
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, c = 0, m = 0;
          n.forEach((i) => {
            const h = s[i];
            if (h) if (h.length === 2) {
              const S = l[h[0]], w = l[h[1]], x = Math.abs(w[0] - S[0]), p = Math.abs(w[1] - S[1]), u = Math.abs(w[2] - S[2]);
              u > x && u > p ? d++ : a++;
            } else h.length === 3 ? c++ : h.length === 4 && m++;
          });
          const r = [];
          d && r.push(`${d} columnas`), a && r.push(`${a} vigas`), m && r.push(`${m} shells Q4`), c && r.push(`${c} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ot.forEach((n) => D.add(n)), ot.clear(), oo(), no(), xe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, W.clear(), ot.forEach((n) => W.add(n)), ot.clear(), oo(), no(), xe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        D.clear(), H = false, W.clear(), no(), xe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        yo(), ot.forEach((n) => Y.add(n)), ot.clear(), oo(), no(), xe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ot.clear(), oo(), no();
      });
    }
    function No() {
      var _a2;
      Tt = false, ot.clear(), oo(), Wt && (Wt.remove(), Wt = null), (_a2 = $e.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ue();
      o && (o.controls.enabled = true);
    }
    function po() {
      if (Lt) {
        const t = Ue();
        t == null ? void 0 : t.scene.remove(Lt), Lt.geometry.dispose(), Lt.material.dispose(), Lt = null, t == null ? void 0 : t.render();
      }
      jt && (jt.remove(), jt = null);
    }
    function Cs(t) {
      gn();
      const o = Ue();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      co = t;
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
        const c = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), m = new lo();
        m.setAttribute("position", new sa(c, 3));
        const r = new kn({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new Ao(m, r);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), bn.push(i);
      }
      o.render();
    }
    function gn() {
      const t = Ue();
      for (const o of bn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      bn = [], co = null, At && (At.remove(), At = null);
    }
    function ss(t, o, n, l) {
      At || (At = document.createElement("div"), At.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(At));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, c = Math.sqrt(s * s + d * d + a * a), m = Math.abs(s), r = Math.abs(d), i = Math.abs(a);
      let h = "";
      m > r && m > i ? h = `\u0394X=${s.toFixed(2)}` : r > m && r > i ? h = `\u0394Y=${d.toFixed(2)}` : i > 0.01 && (h = `\u0394Z=${a.toFixed(2)}`), At.textContent = `${c.toFixed(3)} m  ${h}`, At.style.left = t + 20 + "px", At.style.top = o - 10 + "px";
    }
    function Ps(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Ie(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), c = 0.3, m = Math.abs(a.x), r = Math.abs(a.y), i = Math.abs(a.z);
      return r < c && i < c && m > 0.01 ? new Ie(d.x, s.y, s.z) : m < c && i < c && r > 0.01 ? new Ie(s.x, d.y, s.z) : m < c && r < c && i > 0.01 ? new Ie(s.x, s.y, d.z) : null;
    }
    function Ro() {
      var _a2;
      const t = Ue();
      gt && t && (t.scene.remove(gt), gt.geometry.dispose(), gt.material.dispose(), gt = null), xt && t && (t.scene.remove(xt), xt.geometry.dispose(), xt.material.dispose(), xt = null), gn(), nt = null, Ft = null, Dt = false, xo && (xo.remove(), xo = null), (_a2 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Os() {
      xo && xo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o($t === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o($t === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o($t === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o($t === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(it.node)}">Node</button>
      <button id="ds-grid" style="${n(it.grid)}">Grid</button>
      <button id="ds-mid" style="${n(it.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(it.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${mn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), xo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), c = t.querySelector("#dt-area");
        s && (s.style.cssText = o($t === "line")), d && (d.style.cssText = o($t === "arc")), a && (a.style.cssText = o($t === "node")), c && (c.style.cssText = o($t === "area"));
        const m = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), h = t.querySelector("#ds-track");
        m && (m.style.cssText = n(it.node)), r && (r.style.cssText = n(it.grid)), i && (i.style.cssText = n(it.midpoint)), h && (h.style.cssText = n(it.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        $t = "line", nt = null, Ft = null, qt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        $t = "arc", nt = null, Ft = null, qt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        $t = "node", nt = null, Ft = null, qt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        $t = "area", nt = null, Ft = null, qt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        it.node = !it.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        it.grid = !it.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        it.midpoint = !it.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        it.track = !it.track, it.track || gn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        it.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => os()), t.querySelector("#dt-redo").addEventListener("click", () => ns());
    }
    function as(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, c = new vs();
      c.setFromCamera(new ys(d, a), n);
      const m = e.nodes.val, r = e.elements.val, i = 0.12;
      if (it.node) {
        let w = -1, x = 1 / 0;
        for (let p = 0; p < m.length; p++) {
          const u = m[p], v = new Ie(u[0], u[1], u[2]).project(n), M = Math.sqrt((v.x - d) ** 2 + (v.y - a) ** 2);
          M < i && M < x && (x = M, w = p);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Ie(...m[w]),
          snapType: "node"
        };
      }
      if (it.midpoint) {
        let w = 1 / 0, x = null;
        for (const p of r) {
          if (p.length !== 2) continue;
          const u = m[p[0]], v = m[p[1]], M = new Ie((u[0] + v[0]) / 2, (u[1] + v[1]) / 2, (u[2] + v[2]) / 2), $ = M.clone().project(n), A = Math.sqrt(($.x - d) ** 2 + ($.y - a) ** 2);
          A < i * 0.8 && A < w && (w = A, x = M);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (it.grid) {
        const w = new ao(new Ie(0, 0, 1), 0), x = new Ie();
        if (c.ray.intersectPlane(w, x)) {
          const p = it.gridSize || mn;
          return x.x = Math.round(x.x / p) * p, x.y = Math.round(x.y / p) * p, x.z = Math.round(x.z / p) * p, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const h = new ao(new Ie(0, 0, 1), 0), S = new Ie();
      return c.ray.intersectPlane(h, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function ls(t) {
      const o = Ue();
      if (!o) return;
      const n = e.nodes.val;
      if (xt && (o.scene.remove(xt), xt.geometry.dispose(), xt.material.dispose(), xt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new aa(s * 2, s * 2, s * 2) : new la(s, 12, 12), a = new ia({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        xt = new ra(d, a), xt.position.copy(t.worldPos), xt.renderOrder = 9999, o.scene.add(xt);
      }
      if (gt && (o.scene.remove(gt), gt.geometry.dispose(), gt.material.dispose(), gt = null), nt !== null && t.worldPos) {
        const l = n[nt], s = new lo();
        if ($t === "arc" && Ft !== null) {
          const a = n[Ft], c = is(new Ie(l[0], l[1], l[2]), new Ie(a[0], a[1], a[2]), t.worldPos, 16), m = [];
          for (let r = 0; r < c.length - 1; r++) m.push(c[r].x, c[r].y, c[r].z, c[r + 1].x, c[r + 1].y, c[r + 1].z);
          s.setAttribute("position", new fo(m, 3));
        } else s.setAttribute("position", new fo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Co({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        gt = new Bo(s, d), $t === "arc" && Ft !== null && (gt = new Ao(s, d)), gt.renderOrder = 9999, o.scene.add(gt);
      }
      o.render();
    }
    function is(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, c = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), m = (1 - a) * (1 - a), r = 2 * (1 - a) * a, i = a * a;
        s.push(new Ie(m * t.x + r * c.x + i * n.x, m * t.y + r * c.y + i * n.y, m * t.z + r * c.z + i * n.z));
      }
      return s;
    }
    function xn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      yo();
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
    function _s(t) {
      var _a2;
      if ($t === "node") {
        if (!t.worldPos) return;
        yo();
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
      if ($t === "line") {
        const o = xn(t);
        if (o < 0) return;
        if (nt === null) {
          nt = o;
          return;
        }
        if (o === nt) return;
        yo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === nt && s[1] === o || s[1] === nt && s[0] === o)) || (n.push([
          nt,
          o
        ]), e.elements.val = n, Zt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), nt = o;
        return;
      }
      if ($t === "arc") {
        const o = xn(t);
        if (o < 0) return;
        if (nt === null) {
          nt = o;
          return;
        }
        if (Ft === null) {
          if (o === nt) return;
          Ft = o;
          return;
        }
        if (o === nt || o === Ft) return;
        const n = e.nodes.val, l = new Ie(...n[nt]), s = new Ie(...n[Ft]), d = new Ie(...n[o]), a = Math.max(4, Math.round(((_a2 = ee.nSubViga) == null ? void 0 : _a2.val) ?? 8)), c = is(l, s, d, a);
        yo();
        const m = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let i = nt;
        for (let h = 1; h < c.length; h++) {
          let S;
          if (h === c.length - 1) S = o;
          else {
            const w = c[h];
            S = m.length, m.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          r.push([
            i,
            S
          ]), i = S;
        }
        e.nodes.val = m, e.elements.val = r, Zt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, nt = o, Ft = null;
        return;
      }
      if ($t === "area") {
        const o = xn(t);
        if (o < 0) return;
        if (qt.length >= 3 && o === qt[0]) {
          yo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = qt.map((d) => n[d]);
          try {
            const d = Kt({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (c, m) => m),
              maxMeshSize: mn || 0.5
            }), a = [];
            for (const c of d.nodes) {
              let m = -1;
              for (let r = 0; r < n.length; r++) {
                const i = Math.abs(n[r][0] - c[0]), h = Math.abs(n[r][1] - c[1]), S = Math.abs(n[r][2] - c[2]);
                if (i < 0.01 && h < 0.01 && S < 0.01) {
                  m = r;
                  break;
                }
              }
              m >= 0 ? a.push(m) : (a.push(n.length), n.push([
                c[0],
                c[1],
                c[2]
              ]));
            }
            for (const c of d.elements) l.push([
              a[c[0]],
              a[c[1]],
              a[c[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, Zt(), console.log(`Area: ${d.elements.length} triangulos creados desde ${qt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          qt = [];
          return;
        }
        if (qt.push(o), console.log(`Area vertex ${qt.length}: node ${o}`), qt.length >= 2) {
          const n = qt[qt.length - 2], l = e.nodes.val, s = Ue();
          if (s) {
            const d = new lo().setFromPoints([
              new Ie(...l[n]),
              new Ie(...l[o])
            ]), a = new Ao(d, new Co({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function rs(t) {
      const o = Ue();
      if (!o) return;
      Lt && (o.scene.remove(Lt), Lt.geometry.dispose(), Lt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const c = n[l[a]], m = n[l[(a + 1) % l.length]];
        s.push(c[0], c[1], c[2], m[0], m[1], m[2]);
      }
      const d = new lo();
      d.setAttribute("position", new fo(s, 3)), Lt = new Ao(d, new Co({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Lt.renderOrder = 9999, o.scene.add(Lt), o.render();
    }
    function vn(t) {
      const o = Ue();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ys((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new vs();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let c = 1 / 0, m = -1;
      const r = s.ray;
      for (let h = 0; h < a.length; h++) {
        const S = a[h];
        if (S.length === 2) {
          const w = new Ie(...d[S[0]]), x = new Ie(...d[S[1]]), p = new ca(w, x), u = new Ie(), v = new Ie();
          r.closestPointToPoint(p.getCenter(new Ie()), u), p.closestPointToPoint(u, true, v);
          const M = u.distanceTo(v);
          M < c && (c = M, m = h);
        } else if (S.length === 3) {
          const w = new Ie(...d[S[0]]), x = new Ie(...d[S[1]]), p = new Ie(...d[S[2]]), u = new Ie();
          if (r.intersectTriangle(w, x, p, false, u)) {
            const M = r.origin.distanceTo(u);
            M < c && (c = M, m = h);
          } else {
            const M = w.add(x).add(p).divideScalar(3), $ = new Ie();
            r.closestPointToPoint(M, $);
            const A = $.distanceTo(M);
            A < c && (c = A, m = h);
          }
        } else if (S.length === 4) {
          const w = new Ie(...d[S[0]]), x = new Ie(...d[S[1]]), p = new Ie(...d[S[2]]), u = new Ie(...d[S[3]]), v = new Ie();
          let M = r.intersectTriangle(w, x, p, false, v);
          if (M) {
            const $ = r.origin.distanceTo(v);
            $ < c && (c = $, m = h);
          }
          if (M = r.intersectTriangle(w, p, u, false, v), M) {
            const $ = r.origin.distanceTo(v);
            $ < c && (c = $, m = h);
          }
        }
      }
      const { extent: i } = Qt();
      return c < i * 0.1 ? m : -1;
    }
    function U(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function yn(t, o, n = 12) {
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
        for (let c = 0; c < s; c++) {
          const m = t[a][c], r = Math.abs(m) > 1e-10 ? "nonzero" : "";
          d += `<td class="${r}">${U(m, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function we(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function C(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ns(t, o, n, l, s, d, a) {
      const c = `${we(C("E") + "\xB7" + C("A"), C("L"))}`, m = `${we("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`, r = `${we("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`, i = `${we(C("G") + "\xB7" + C("J"), C("L"))}`, h = `${we("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`, S = `${we("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${c} = ${we(U(t) + "\xB7" + U(o), U(a))} = <span class="highlight">${U(t * o / a)}</span></div>
      <div>${m} = ${we("12\xB7" + U(t) + "\xB7" + U(n), U(a) + "\xB3")} = <span class="highlight">${U(12 * t * n / a ** 3)}</span></div>
      <div>${r} = ${we("12\xB7" + U(t) + "\xB7" + U(l), U(a) + "\xB3")} = <span class="highlight">${U(12 * t * l / a ** 3)}</span></div>
      <div>${i} = ${we(U(s) + "\xB7" + U(d), U(a))} = <span class="highlight">${U(s * d / a)}</span></div>
      <div>${h} = ${we("4\xB7" + U(t) + "\xB7" + U(l), U(a))} = <span class="highlight">${U(4 * t * l / a)}</span></div>
      <div>${S} = ${we("4\xB7" + U(t) + "\xB7" + U(n), U(a))} = <span class="highlight">${U(4 * t * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${we(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${we("\u2212" + C("EA"), C("L"))}</span>
        <span class="cell">0</span><span class="cell">${we("12" + C("EI", "z"), C("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${we("\u2212" + C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${we(C("EA"), C("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Rs(t) {
      if (t.length === 2) {
        const n = Ut(t[1], t[0]), l = bo(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${we("\u0394x", C("L"))} = ${we(U(n[0]), U(l))} = <span class="highlight">${U(s)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${we("\u0394y", C("L"))} = ${we(U(n[1]), U(l))} = <span class="highlight">${U(d)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${we("\u0394z", C("L"))} = ${we(U(n[2]), U(l))} = <span class="highlight">${U(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${we("\u2212" + C("m"), C("D"))}</span><span class="cell">${we(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${we("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${we("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Hs() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function Bs(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Ds(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${we("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${we(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function $n(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], c = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${c}">${U(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function cs() {
      const t = "0", o = we(C("EA"), C("L")), n = we("\u2212" + C("EA"), C("L")), l = we("12" + C("EI", "z"), C("L") + "\xB3"), s = we("\u221212" + C("EI", "z"), C("L") + "\xB3"), d = we("12" + C("EI", "y"), C("L") + "\xB3"), a = we("\u221212" + C("EI", "y"), C("L") + "\xB3"), c = we("6" + C("EI", "z"), C("L") + "\xB2"), m = we("\u22126" + C("EI", "z"), C("L") + "\xB2"), r = we("6" + C("EI", "y"), C("L") + "\xB2"), i = we("\u22126" + C("EI", "y"), C("L") + "\xB2"), h = we(C("GJ"), C("L")), S = we("\u2212" + C("GJ"), C("L")), w = we("4" + C("EI", "z"), C("L")), x = we("2" + C("EI", "z"), C("L")), p = we("4" + C("EI", "y"), C("L")), u = we("2" + C("EI", "y"), C("L")), v = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', M = [
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
      ], $ = [
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
      ], A = [
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
          c,
          t,
          s,
          t,
          t,
          t,
          c
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
          h,
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
          i,
          t,
          p,
          t,
          t,
          t,
          r,
          t,
          u,
          t
        ],
        [
          t,
          c,
          t,
          t,
          t,
          w,
          t,
          m,
          t,
          t,
          t,
          x
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
          l,
          t,
          t,
          t,
          m
        ],
        [
          t,
          t,
          a,
          t,
          r,
          t,
          t,
          t,
          d,
          t,
          r,
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
          h,
          t,
          t
        ],
        [
          t,
          t,
          i,
          t,
          u,
          t,
          t,
          t,
          r,
          t,
          p,
          t
        ],
        [
          t,
          c,
          t,
          t,
          t,
          x,
          t,
          m,
          t,
          t,
          t,
          w
        ]
      ];
      let F = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      F += '<table><tr><td class="hdr"></td>';
      for (const b of $) F += `<td class="hdr">${b}</td>`;
      F += "</tr>";
      for (let b = 0; b < 12; b++) {
        F += `<tr><td class="hdr">${M[b]}</td>`;
        for (let f = 0; f < 12; f++) if (f < b) F += `<td style="color:var(--fem-border-cell)">${f === 0 && b > 0 ? v : ""}</td>`;
        else {
          const y = A[b][f], k = (b === f ? "diag " : "") + (y !== "0" ? "nz" : "");
          F += `<td class="${k}">${y}</td>`;
        }
        F += "</tr>";
      }
      return F += "</table>", F;
    }
    function js(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${we(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${we(U(t) + "\xD7" + U(o), U(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${we("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${we("12\xD7" + U(t) + "\xD7" + U(n), U(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${we("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${we("6\xD7" + U(t) + "\xD7" + U(n), U(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${we("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${we("12\xD7" + U(t) + "\xD7" + U(l), U(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${we("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${we("6\xD7" + U(t) + "\xD7" + U(l), U(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${we(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${we(U(s) + "\xD7" + U(d), U(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${we("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${we("4\xD7" + U(t) + "\xD7" + U(n), U(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${we("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${we("2\xD7" + U(t) + "\xD7" + U(n), U(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${we("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${we("4\xD7" + U(t) + "\xD7" + U(l), U(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${we("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${we("2\xD7" + U(t) + "\xD7" + U(l), U(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((m) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${m.label}</div>${m.name} = ${m.calc} = <span class="highlight">${U(m.val)}</span></div>`).join("")}</div>`;
    }
    function Mn(t, o, n, l) {
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
    function ds(t) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      jt && jt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((b) => o[b]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, c = (_b = e.deformOutputs) == null ? void 0 : _b.val, m = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const b = bo(Ut(s[1], s[0])), f = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, y = ((_e = a.areas) == null ? void 0 : _e.get(t)) ?? 0, k = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, I = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, _ = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, q = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${U(b)}${U(f)}${U(y)}${U(k)}${U(I)}${U(_)}${U(q)}`;
      } else {
        const b = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, y = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${U(b)}${U(f)}${U(y)}`;
      }
      let r = "", i = "", h = "", S = "", w = "", x = "", p = "", u = "", v = null, M = null, $ = null, A = [];
      try {
        if (v = Ko(s, a, t), M = Uo(s), $ = _t(An(M), _t(v, M)), A = d ? [
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
          const k = bo(Ut(s[1], s[0])), I = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, _ = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, q = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, L = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, O = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          S = Ns(I, _, q, L, P, O, k);
        }
        w = Rs(s), x = Hs(), p = Bs(l), u = Ds(d);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', y = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        r = `<div class="matrix-label">k_local (${v.length}\xD7${v.length}) ${b}</div>${yn(v, A)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${M.length}\xD7${M.length}) ${f}</div>${yn(M, A)}`, h = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${y}</div>${yn($, A)}`;
      } catch (b) {
        r = `<div style="color:red">Error: ${b.message}</div>`;
      }
      if (c == null ? void 0 : c.deformations) {
        const b = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((f, y) => {
          var _a3;
          const k = ((_a3 = c.deformations) == null ? void 0 : _a3.get(f)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], I = b.map((_, q) => `<span class="prop-key">${_}</span>: <span class="${Math.abs(k[q]) > 1e-10 ? "result-val" : ""}">${U(k[q])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${f}:</strong> ${I}</div>`;
        }).join("");
      }
      if (m && d && (c == null ? void 0 : c.deformations) && v && M) {
        const b = (_s2 = m.normals) == null ? void 0 : _s2.get(t), f = (_t2 = m.shearsY) == null ? void 0 : _t2.get(t), y = (_u = m.shearsZ) == null ? void 0 : _u.get(t), k = (_v = m.torsions) == null ? void 0 : _v.get(t), I = (_w = m.bendingsY) == null ? void 0 : _w.get(t), _ = (_x = m.bendingsZ) == null ? void 0 : _x.get(t), q = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], L = [];
        for (const oe of l) {
          const Z = ((_y = c.deformations) == null ? void 0 : _y.get(oe)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          L.push(...Z);
        }
        let P = [];
        try {
          P = _t(M, L);
        } catch {
          P = new Array(12).fill(0);
        }
        let O = [];
        try {
          O = _t(v, P);
        } catch {
          O = new Array(12).fill(0);
        }
        const se = (oe, Z) => oe.map((ie, Se) => `<span style="color:${Math.abs(ie) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Z[Se % 6]}=${U(ie)}</span>`).join(", "), ce = [
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
        ].map((oe, Z) => `${oe}${Z < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((oe, Z) => `<span style="color:var(--fem-label)">nodo ${oe}:</span> ${q.map((ie, Se) => `<span style="color:${Math.abs(L[Z * 6 + Se]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${U(L[Z * 6 + Se])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${se(P, [
          ...q,
          ...q
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${O.map((oe, Z) => `<span style="color:${Math.abs(oe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ce[Z]}=${U(oe)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${U(O[0])}${C("P", "7")}${C("N", "j")}${U(O[6])}${C("P", "2")}${C("V", "y,i")}${U(O[1])}${C("P", "8")}${C("V", "y,j")}${U(O[7])}${C("P", "3")}${C("V", "z,i")}${U(O[2])}${C("P", "9")}${C("V", "z,j")}${U(O[8])}${C("P", "4")}${C("M", "x,i")}${U(O[3])}${C("P", "10")}${C("M", "x,j")}${U(O[9])}${C("P", "5")}${C("M", "y,i")}${U(O[4])}${C("P", "11")}${C("M", "y,j")}${U(O[10])}${C("P", "6")}${C("M", "z,i")}${U(O[5])}${C("P", "12")}${C("M", "z,j")}${U(O[11])}${b ? b.map((oe) => U(oe)).join(", ") : "\u2014"}${f ? f.map((oe) => U(oe)).join(", ") : "\u2014"}${y ? y.map((oe) => U(oe)).join(", ") : "\u2014"}${k ? k.map((oe) => U(oe)).join(", ") : "\u2014"}${I ? I.map((oe) => U(oe)).join(", ") : "\u2014"}${_ ? _.map((oe) => U(oe)).join(", ") : "\u2014"}`;
      } else if (m && d) {
        const b = (_z = m.normals) == null ? void 0 : _z.get(t), f = (_A = m.shearsY) == null ? void 0 : _A.get(t), y = (_B = m.shearsZ) == null ? void 0 : _B.get(t), k = (_C = m.torsions) == null ? void 0 : _C.get(t), I = (_D = m.bendingsY) == null ? void 0 : _D.get(t), _ = (_E = m.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((q) => U(q)).join(", ") : "\u2014"}${f ? f.map((q) => U(q)).join(", ") : "\u2014"}${y ? y.map((q) => U(q)).join(", ") : "\u2014"}${k ? k.map((q) => U(q)).join(", ") : "\u2014"}${I ? I.map((q) => U(q)).join(", ") : "\u2014"}${_ ? _.map((q) => U(q)).join(", ") : "\u2014"}`;
      } else if (m && !d) {
        const b = (_F = m.bendingXX) == null ? void 0 : _F.get(t), f = (_G = m.bendingYY) == null ? void 0 : _G.get(t), y = (_H = m.bendingXY) == null ? void 0 : _H.get(t), k = (_I = m.membraneXX) == null ? void 0 : _I.get(t), I = (_J = m.membraneYY) == null ? void 0 : _J.get(t), _ = (_K = m.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((q) => U(q)).join(", ") : "\u2014"}${f ? f.map((q) => U(q)).join(", ") : "\u2014"}${y ? y.map((q) => U(q)).join(", ") : "\u2014"}${k ? k.map((q) => U(q)).join(", ") : "\u2014"}${I ? I.map((q) => U(q)).join(", ") : "\u2014"}${_ ? _.map((q) => U(q)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, jt = wa(t, o, n, a, c, m), jt.id = "fem-inspect-panel", document.body.appendChild(jt), (_L = jt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => po());
      const F = d ? (() => {
        var _a3, _b2, _c2, _d2, _e2, _f2;
        const b = bo(Ut(s[1], s[0])), f = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, y = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, k = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, I = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, _ = ((_e2 = a.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, q = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return js(f, y, k, I, _, q, b);
      })() : void 0;
      jt.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const y = b.dataset.full;
          if (y === "kLocal" && v) {
            const k = d ? cs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Mn(`Elemento ${t} \u2014 Rigidez Local k_local`, k, $n(v, A), F);
          } else if (y === "T" && M) Mn(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, $n(M, A));
          else if (y === "kGlobal" && $) {
            const k = d ? cs() : "<em>Shell 18\xD718</em>";
            Mn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, k, $n($, A), F);
          }
        });
      });
    }
    function ps() {
      const l = [], s = [];
      for (let x = 0; x <= 8; x++) {
        const p = x / 8, u = 30 * p, M = 12 * (1 - p) * (1 - p * 0.3) / 2, $ = l.length;
        if (l.push([
          -M,
          -M,
          u
        ]), l.push([
          M,
          -M,
          u
        ]), l.push([
          M,
          M,
          u
        ]), l.push([
          -M,
          M,
          u
        ]), s.push([
          $,
          $ + 1
        ]), s.push([
          $ + 1,
          $ + 2
        ]), s.push([
          $ + 2,
          $ + 3
        ]), s.push([
          $ + 3,
          $
        ]), x > 0 && x < 8 && (s.push([
          $,
          $ + 2
        ]), s.push([
          $ + 1,
          $ + 3
        ])), x > 0) {
          const A = $ - 4;
          for (let F = 0; F < 4; F++) s.push([
            A + F,
            $ + F
          ]);
          s.push([
            A,
            $ + 1
          ]), s.push([
            A + 1,
            $ + 2
          ]), s.push([
            A + 2,
            $ + 3
          ]), s.push([
            A + 3,
            $
          ]);
        }
      }
      const d = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) d.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, c = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) c.set(a + x, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: c
      });
      const m = 2e8, r = 77e6, i = 5e-3, h = 2e-6, S = 1e-6, w = {
        elasticities: new Map(s.map((x, p) => [
          p,
          m
        ])),
        shearModuli: new Map(s.map((x, p) => [
          p,
          r
        ])),
        areas: new Map(s.map((x, p) => [
          p,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((x, p) => [
          p,
          h
        ])),
        momentsOfInertiaY: new Map(s.map((x, p) => [
          p,
          h
        ])),
        torsionalConstants: new Map(s.map((x, p) => [
          p,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const x = Ct(l, s, {
          supports: d,
          loads: c
        }, w);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => mt(), 50), We(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function fs() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const x = w / 20, p = 20 * x, u = 20 * (1 - Math.pow(2 * x - 1, 2)), v = 2;
        l.push([
          p,
          -2 / 2,
          u
        ]), l.push([
          p,
          v / 2,
          u
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
      const c = 2e8, m = 77e6, r = 0.01, i = 5e-6, h = 2e-6, S = {
        elasticities: new Map(s.map((w, x) => [
          x,
          c
        ])),
        shearModuli: new Map(s.map((w, x) => [
          x,
          m
        ])),
        areas: new Map(s.map((w, x) => [
          x,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((w, x) => [
          x,
          i
        ])),
        momentsOfInertiaY: new Map(s.map((w, x) => [
          x,
          i
        ])),
        torsionalConstants: new Map(s.map((w, x) => [
          x,
          h
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
      setTimeout(() => mt(), 50), We(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function us() {
      const d = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const u = 60 * p / 16;
        d.push([
          u,
          -6 / 2,
          8
        ]), d.push([
          u,
          6 / 2,
          8
        ]);
      }
      const c = d.length;
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
      const m = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], r = [];
      for (const p of m) {
        const u = 60 * p / 16, v = d.length;
        d.push([
          u,
          -6 / 2,
          0
        ]);
        const M = d.length;
        d.push([
          u,
          6 / 2,
          0
        ]);
        const $ = d.length;
        d.push([
          u,
          -6 / 2,
          28
        ]);
        const A = d.length;
        d.push([
          u,
          6 / 2,
          28
        ]), r.push($, A), a.push([
          v,
          p * 2
        ]), a.push([
          p * 2,
          $
        ]), a.push([
          M,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          A
        ]), a.push([
          $,
          A
        ]);
      }
      for (const p of r) {
        const u = d[p][0];
        for (let v = 0; v <= 16; v++) {
          const M = 60 * v / 16;
          if (Math.abs(M - u) > 60 * 0.05 && Math.abs(M - u) < 60 * 0.45) {
            const $ = d[p][1] < 0 ? v * 2 : v * 2 + 1;
            v % 2 === 0 && a.push([
              p,
              $
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
      for (let p = c; p < c + m.length * 4; p += 4) i.set(p, [
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
      const h = /* @__PURE__ */ new Map();
      for (let p = 0; p <= 16; p++) h.set(p * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), h.set(p * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: h
      });
      const S = 2e8, w = 77e6, x = {
        elasticities: new Map(a.map((p, u) => [
          u,
          S
        ])),
        shearModuli: new Map(a.map((p, u) => [
          u,
          w
        ])),
        areas: new Map(a.map((p, u) => [
          u,
          u < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((p, u) => [
          u,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((p, u) => [
          u,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((p, u) => [
          u,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const p = Ct(d, a, {
          supports: i,
          loads: h
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => mt(), 50), We(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function ms() {
      const d = [], a = [];
      for (let u = 0; u <= 12; u++) {
        const v = u * 3.5, M = u * 5 * Math.PI / 180;
        for (let $ = 0; $ < 6; $++) {
          const A = M + 2 * Math.PI * $ / 6, F = 5 * Math.cos(A), b = 5 * Math.sin(A);
          d.push([
            F,
            b,
            v
          ]);
        }
      }
      for (let u = 0; u <= 12; u++) {
        const v = u * 6;
        for (let M = 0; M < 6; M++) a.push([
          v + M,
          v + (M + 1) % 6
        ]);
        if (u < 12) {
          const M = (u + 1) * 6;
          for (let $ = 0; $ < 6; $++) a.push([
            v + $,
            M + $
          ]), a.push([
            v + $,
            M + ($ + 1) % 6
          ]);
        }
      }
      for (let u = 0; u <= 12; u++) {
        const v = d.length;
        d.push([
          0,
          0,
          u * 3.5
        ]);
        const M = u * 6;
        for (let $ = 0; $ < 6; $++) a.push([
          v,
          M + $
        ]);
      }
      const c = 13 * 6;
      for (let u = 0; u < 12; u++) a.push([
        c + u,
        c + u + 1
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let u = 0; u < 6; u++) m.set(u, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      m.set(c, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let u = 1; u <= 12; u++) {
        const v = 10 * u / 12, M = u * 6;
        for (let $ = 0; $ < 6; $++) r.set(M + $, [
          v,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: m,
        loads: r
      });
      const i = 2e8, h = 77e6, S = 8e-3, w = 1e-5, x = 5e-6, p = {
        elasticities: new Map(a.map((u, v) => [
          v,
          i
        ])),
        shearModuli: new Map(a.map((u, v) => [
          v,
          h
        ])),
        areas: new Map(a.map((u, v) => [
          v,
          S
        ])),
        momentsOfInertiaZ: new Map(a.map((u, v) => [
          v,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((u, v) => [
          v,
          w
        ])),
        torsionalConstants: new Map(a.map((u, v) => [
          v,
          x
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const u = Ct(d, a, {
          supports: m,
          loads: r
        }, p);
        u && e.deformOutputs && (e.deformOutputs.val = u);
      } catch (u) {
        console.warn("Twisted:", u.message);
      }
      setTimeout(() => mt(), 50), We(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function bs() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const u = p / 20, v = p * 3;
        let M = 8 * (1 - u * 0.7);
        u > 0.4 && (M *= 0.85), u > 0.7 && (M *= 0.7);
        const $ = s.length;
        s.push([
          0,
          0,
          v
        ]);
        for (let A = 0; A < 3; A++) {
          const F = A * 2 * Math.PI / 3 - Math.PI / 2, b = M * Math.cos(F), f = M * Math.sin(F), y = s.length;
          s.push([
            b,
            f,
            v
          ]), d.push([
            $,
            y
          ]);
          const k = s.length;
          s.push([
            b * 0.5,
            f * 0.5,
            v
          ]), d.push([
            $,
            k
          ]), d.push([
            k,
            y
          ]);
        }
        for (let A = 0; A < 3; A++) {
          const F = $ + 1 + A * 2, b = $ + 1 + (A + 1) % 3 * 2;
          d.push([
            F,
            b
          ]);
        }
        if (p < 20) {
          const F = $ + 7;
          d.push([
            $,
            F
          ]);
          for (let b = 0; b < 3; b++) d.push([
            $ + 1 + b * 2,
            F + 1 + b * 2
          ]), d.push([
            $ + 2 + b * 2,
            F + 2 + b * 2
          ]), d.push([
            $ + 1 + b * 2,
            F + 2 + b * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), c = 1 + 3 * 2;
      for (let p = 0; p < c; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const u = p * c, v = 5 * p / 20;
        m.set(u, [
          v,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: m
      });
      const r = 35e6, i = 14e6, h = 0.02, S = 5e-5, w = 2e-5, x = {
        elasticities: new Map(d.map((p, u) => [
          u,
          r
        ])),
        shearModuli: new Map(d.map((p, u) => [
          u,
          i
        ])),
        areas: new Map(d.map((p, u) => [
          u,
          h
        ])),
        momentsOfInertiaZ: new Map(d.map((p, u) => [
          u,
          S
        ])),
        momentsOfInertiaY: new Map(d.map((p, u) => [
          u,
          S
        ])),
        torsionalConstants: new Map(d.map((p, u) => [
          u,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const p = Ct(s, d, {
          supports: a,
          loads: m
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => mt(), 50), We(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function hs() {
      const t = [], o = [];
      for (let h = 0; h < 3; h++) {
        const S = h * 12, w = 15 - h * 2, x = 20 - h * 3, p = 8 - h, u = t.length;
        for (let M = 0; M <= 4; M++) {
          const $ = M / 4, A = -p / 2 + p * $, F = x * (1 - $ * $ * 0.3);
          for (let b = 0; b <= 12; b++) {
            const f = b / 12, y = S + F * f, k = w * Math.sin(Math.PI * f) * (1 - $ * $ * 0.5), I = A;
            t.push([
              y,
              I,
              k
            ]);
          }
        }
        const v = 13;
        for (let M = 0; M < 4; M++) for (let $ = 0; $ < 12; $++) {
          const A = u + M * v + $, F = u + M * v + $ + 1, b = u + (M + 1) * v + $ + 1, f = u + (M + 1) * v + $;
          o.push([
            A,
            F,
            b,
            f
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let h = 0; h < t.length; h++) t[h][2] < 0.5 && s.set(h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let h = 0; h < t.length; h++) t[h][2] > 2 && d.set(h, [
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
      const a = 35e6, c = 0.2, m = 0.15, r = a / (2 * (1 + c)), i = {
        elasticities: new Map(o.map((h, S) => [
          S,
          a
        ])),
        poissonsRatios: new Map(o.map((h, S) => [
          S,
          c
        ])),
        thicknesses: new Map(o.map((h, S) => [
          S,
          m
        ])),
        shearModuli: new Map(o.map((h, S) => [
          S,
          r
        ]))
      };
      e.elementInputs && (e.elementInputs.val = i);
      try {
        const h = Ct(t, o, {
          supports: s,
          loads: d
        }, i);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Opera:", h.message);
      }
      setTimeout(() => mt(), 50), We(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function gs() {
      const l = [], s = [];
      for (let x = 0; x <= 15; x++) {
        const p = x / 15, u = x * 3.5, v = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const M = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let $ = 0; $ < 12; $++) {
            const A = 2 * Math.PI * $ / 12;
            l.push([
              Math.max(M, 1) * Math.cos(A),
              Math.max(M, 1) * Math.sin(A),
              u
            ]);
          }
        } else for (let M = 0; M < 12; M++) {
          const $ = 2 * Math.PI * M / 12;
          l.push([
            v * Math.cos($),
            v * Math.sin($),
            u
          ]);
        }
      }
      for (let x = 0; x < 15; x++) {
        const p = x * 12, u = (x + 1) * 12;
        for (let M = 0; M < 12; M++) s.push([
          p + M,
          p + (M + 1) % 12
        ]);
        const v = x % 2 === 0 ? 1 : -1;
        for (let M = 0; M < 12; M++) {
          const $ = (M + v + 12) % 12;
          s.push([
            p + M,
            u + $
          ]), s.push([
            p + M,
            u + M
          ]);
        }
      }
      const d = 15 * 12;
      for (let x = 0; x < 12; x++) s.push([
        d + x,
        d + (x + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let x = 0; x < 12; x++) a.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 15; x++) {
        const p = x * 12, u = 3 * x / 15;
        for (let v = 0; v < 12; v += 3) c.set(p + v, [
          u,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: c
      });
      const m = 2e8, r = 77e6, i = 6e-3, h = 8e-6, S = 4e-6, w = {
        elasticities: new Map(s.map((x, p) => [
          p,
          m
        ])),
        shearModuli: new Map(s.map((x, p) => [
          p,
          r
        ])),
        areas: new Map(s.map((x, p) => [
          p,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((x, p) => [
          p,
          h
        ])),
        momentsOfInertiaY: new Map(s.map((x, p) => [
          p,
          h
        ])),
        torsionalConstants: new Map(s.map((x, p) => [
          p,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const x = Ct(l, s, {
          supports: a,
          loads: c
        }, w);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => mt(), 50), We(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
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
        const o = (u) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${u}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), c = o("po-L"), m = o("po-As") * 1e-4, r = o("po-nbar"), i = o("po-drift") / 100, h = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const w = [], x = i * a, p = 40;
        for (let u = 1; u <= h; u++) {
          const v = x * u / h;
          for (let M = 0; M <= p; M++) w.push(v * Math.sin(2 * Math.PI * M / p));
        }
        S.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: u } = await Zs(async () => {
            const { cyclicPushover: M } = await import("./cyclicPushoverCpp-C2iwGR3p.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: M
            };
          }, __vite__mapDeps([0,1]), import.meta.url), v = await u({
            colHeight: a,
            beamLength: c,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: m,
              cover: 0.04,
              n_rebar: r
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: m * 0.7,
              cover: 0.03,
              n_rebar: r
            },
            dispHistory: w
          });
          S.textContent = `Completado: ${v.nSteps} pasos`, Gs(t.querySelector("#pushover-canvas"), v.displacements, v.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (u) {
          S.textContent = `Error: ${u.message}`, console.error("Pushover failed:", u);
        }
      });
    }
    function Gs(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, c = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, m = d - c.left - c.right, r = a - c.top - c.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let i = Math.min(...o), h = Math.max(...o), S = Math.min(...n), w = Math.max(...n);
      i === h && (i -= 0.01, h += 0.01), S === w && (S -= 1, w += 1);
      const x = h - i, p = w - S, u = (A) => c.left + (A - i) / x * m, v = (A) => c.top + r - (A - S) / p * r;
      s.strokeStyle = "#333", s.lineWidth = 0.5, i < 0 && h > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(u(0), c.top), s.lineTo(u(0), c.top + r), s.stroke()), S < 0 && w > 0 && (s.beginPath(), s.moveTo(c.left, v(0)), s.lineTo(c.left + m, v(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(u(o[0]), v(n[0]));
      for (let A = 1; A < o.length; A++) s.lineTo(u(o[A]), v(n[A]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", c.left + m / 2, a - 5), s.save(), s.translate(12, c.top + r / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const M = x / 5;
      for (let A = 0; A <= 5; A++) {
        const F = i + M * A;
        s.fillText((F * 1e3).toFixed(1), u(F), a - c.bottom + 15);
      }
      s.textAlign = "right";
      const $ = p / 5;
      for (let A = 0; A <= 5; A++) {
        const F = S + $ * A;
        s.fillText(F.toFixed(0), c.left - 5, v(F) + 3);
      }
    }
    let Fo = null;
    function Js() {
      if (Fo) {
        Fo.remove(), Fo = null;
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
    `, document.body.appendChild(t), Fo = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), Fo = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Vs(t));
    }
    function Vs(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), c = 100, m = [];
      for (let le = 0; le < a; le++) {
        const ce = d * (1 + le * 0.5);
        for (let oe = 0; oe < c; oe++) {
          const Z = oe / c * 2 * Math.PI;
          m.push(ce * Math.sin(Z));
        }
      }
      const r = o / n, i = l * n;
      let h = 0, S = 0, w = -r, x = r, p = 0, u = 0, v = 0, M = 0, $ = 0, A = 0;
      const F = [];
      for (const le of m) {
        let ce = w, oe = x, Z = p, ie = u, Se = v, _e = M, Pe = $, re = A, ye;
        const ke = le - h;
        if (Math.abs(ke) < 1e-20) {
          F.push(S);
          continue;
        }
        if ((re === 0 || re === 3) && (ke < 0 ? (re = 2, ie = -r, Se = -o, Z = ie, _e = 0, Pe = 0) : (re = 1, ie = r, Se = o, Z = ie, _e = 0, Pe = 0)), re === 2 && ke > 0) {
          re = 1, _e = h, Pe = S, h < ce && (ce = h);
          const ze = (oe - ce) / (2 * 1 * r), Re = 1 + 0 * Math.pow(ze, 0.8);
          ie = (o * Re - i * r * Re - Pe + n * _e) / (n - i), Se = o * Re + i * (ie - r * Re), Z = oe;
        } else if (re === 1 && ke < 0) {
          re = 2, _e = h, Pe = S, h > oe && (oe = h);
          const ze = (oe - ce) / (2 * 1 * r), Re = 1 + 0 * Math.pow(ze, 0.8);
          ie = (-o * Re + i * r * Re - Pe + n * _e) / (n - i), Se = -o * Re + i * (ie + r * Re), Z = ce;
        }
        const he = Math.abs((Z - ie) / r);
        let qe = s - 0.925 * he / (0.15 + he);
        qe < 0.1 && (qe = 0.1);
        const Oe = (le - _e) / (ie - _e), Ze = 1 + Math.pow(Math.abs(Oe), qe), ae = Math.pow(Ze, 1 / qe);
        ye = l * Oe + (1 - l) * Oe / ae, ye = ye * (Se - Pe) + Pe, F.push(ye), h = le, S = ye, w = ce, x = oe, p = Z, u = ie, v = Se, M = _e, $ = Pe, A = re;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), y = b.width, k = b.height;
      f.clearRect(0, 0, y, k);
      const I = Math.max(...m.map(Math.abs)), _ = Math.max(...F.map(Math.abs)), q = (y - 40) / (2 * I), L = (k - 40) / (2 * _), P = y / 2, O = k / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, O), f.lineTo(y - 20, O), f.stroke(), f.beginPath(), f.moveTo(P, 20), f.lineTo(P, k - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", y - 40, O - 5), f.fillText("\u03C3 (stress)", P + 30, 15), f.fillText(`\xB1${(I * 100).toFixed(1)}%`, y - 30, O + 12), f.fillText(`\xB1${(_ / 1e3).toFixed(0)} MPa`, P + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let le = 0; le < m.length; le++) {
        const ce = P + m[le] * q, oe = O - F[le] * L;
        le === 0 ? f.moveTo(ce, oe) : f.lineTo(ce, oe);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, O - o * L), f.lineTo(y - 20, O - o * L), f.stroke(), f.beginPath(), f.moveTo(20, O + o * L), f.lineTo(y - 20, O + o * L), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, y - 50, O - o * L - 5);
      const se = t.querySelector("#nl-info");
      se.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Xs() {
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
      const a = ga({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let $o = null;
    function Ks(t) {
      $o && $o.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Go(), l = Jo(), s = Object.entries(n).map(([r, i]) => `<option value="${i}">${r}</option>`).join(""), d = Object.entries(l).map(([r, i]) => `<option value="${i}">${r}</option>`).join("");
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
    `, document.body.appendChild(o), $o = o;
      const a = o.querySelector("#asgn-type"), c = o.querySelector("#asgn-params");
      function m() {
        const r = a.value;
        let i = "";
        r === "rect" ? i = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : r === "circ" ? i = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : r === "W" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : r === "HSS" ? i = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : r === "I-param" ? i = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : r === "tubular" && (i = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), c.innerHTML = i;
      }
      a.addEventListener("change", m), m(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), $o = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const r = a.value, i = {
          secType: r
        };
        r === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : r === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : r === "W" || r === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : r === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : r === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((h) => fe.set(h, {
          ...i
        })), o.remove(), $o = null, Zt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => fe.delete(r)), o.remove(), $o = null, Zt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Mo = null;
    function Us(t) {
      var _a2, _b, _c;
      Mo && Mo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), c = Math.abs(s[2] - l[2]), m = a > d && a > c, r = Math.sqrt(d * d + a * a + c * c), i = ne.get(t) ?? 0, h = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (h == null ? void 0 : h.name) || (h ? `${h.type} ${((h.b ?? 0) * 100).toFixed(0)}x${((h.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${m ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${i + 1} &nbsp;
        <span style="color:#888;">L:</span> ${r.toFixed(3)} m
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
    `, document.body.appendChild(w), Mo = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), Mo = null, po();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        Y.add(t), w.remove(), Mo = null, po(), xe();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Mo = null, ds(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function d(m) {
        const r = Ue();
        if (!r) return null;
        const i = r.controls.object, h = new Ie(m[0], m[1], m[2]);
        h.project(i);
        const S = o.getBoundingClientRect();
        return {
          x: (h.x + 1) / 2 * S.width,
          y: (-h.y + 1) / 2 * S.height
        };
      }
      function a(m, r, i, h, S) {
        const w = Math.min(m, i), x = Math.max(m, i), p = Math.min(r, h), u = Math.max(r, h), v = e.nodes.val, M = e.elements.val, $ = [];
        for (let A = 0; A < M.length; A++) {
          const F = M[A], b = F.map((f) => d(v[f])).filter(Boolean);
          if (b.length !== 0) if (S) b.every((y) => y.x >= w && y.x <= x && y.y >= p && y.y <= u) && $.push(A);
          else {
            if (b.some((y) => y.x >= w && y.x <= x && y.y >= p && y.y <= u)) {
              $.push(A);
              continue;
            }
            if (F.length === 2) {
              const y = b[0], k = b[1];
              c(y.x, y.y, k.x, k.y, w, p, x, u) && $.push(A);
            }
          }
        }
        return $;
      }
      function c(m, r, i, h, S, w, x, p) {
        const u = (M, $) => M >= S && M <= x && $ >= w && $ <= p;
        if (u(m, r) || u(i, h)) return true;
        const v = (M, $, A, F, b, f, y, k) => {
          const I = (A - M) * (k - f) - (F - $) * (y - b);
          if (Math.abs(I) < 1e-10) return false;
          const _ = ((b - M) * (k - f) - (f - $) * (y - b)) / I, q = ((b - M) * (F - $) - (f - $) * (A - M)) / I;
          return _ >= 0 && _ <= 1 && q >= 0 && q <= 1;
        };
        return v(m, r, i, h, S, w, x, w) || v(m, r, i, h, x, w, x, p) || v(m, r, i, h, S, p, x, p) || v(m, r, i, h, S, w, S, p);
      }
      o.addEventListener("mousedown", (m) => {
        Tt && (n = {
          x: m.offsetX,
          y: m.offsetY
        });
      }), o.addEventListener("mousemove", (m) => {
        if (Dt) {
          const i = Ue();
          if (!i) return;
          const h = as(m.clientX, m.clientY, i.camera, i.rendererElm);
          if (it.track && h.snapType === "node" && h.nodeIdx !== null && h.nodeIdx !== co && Cs(h.nodeIdx), it.track && co !== null && h.worldPos && h.snapType !== "node") {
            const S = Ps(h.worldPos, co);
            S && (h.worldPos = S, h.snapType = "grid");
          }
          if (co !== null && h.worldPos) {
            const S = e.nodes.val[co];
            S && ss(m.clientX, m.clientY, new Ie(...S), h.worldPos);
          } else if (nt !== null && h.worldPos) {
            const S = e.nodes.val[nt];
            S && ss(m.clientX, m.clientY, new Ie(...S), h.worldPos);
          } else At && (At.remove(), At = null);
          h.nodeIdx, ls(h), o.style.cursor = h.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Ot && !Tt) return;
        if (Tt && n) {
          const i = m.offsetX - n.x, h = m.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(h) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = i > 0, w = Math.min(n.x, m.offsetX), x = Math.min(n.y, m.offsetY), p = Math.abs(i), u = Math.abs(h);
            l.style.left = w + "px", l.style.top = x + "px", l.style.width = p + "px", l.style.height = u + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = vn(m);
        if (r >= 0) rs(r), o.style.cursor = "pointer";
        else {
          if (Lt) {
            const i = Ue();
            i == null ? void 0 : i.scene.remove(Lt), Lt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = Tt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (m) => {
        if (Tt && n) {
          const r = m.offsetX - n.x, i = m.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(i) > s) {
            const h = r > 0, S = a(n.x, n.y, m.offsetX, m.offsetY, h);
            m.ctrlKey || m.metaKey || (ot.clear(), oo()), S.forEach((x) => {
              ot.has(x) || (ot.add(x), hn(x));
            }), no();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (m) => {
        if (Dt) {
          const r = Ue();
          if (!r) return;
          const i = as(m.clientX, m.clientY, r.camera, r.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (_s(i), ls(i));
          return;
        }
        if (Tt) {
          if (l) return;
          const r = vn(m), i = m.ctrlKey || m.metaKey;
          if (r >= 0) {
            if (i) if (ot.has(r)) {
              ot.delete(r);
              const h = to.findIndex((S) => S.__elemIdx === r);
              if (h >= 0) {
                const S = Ue();
                S == null ? void 0 : S.scene.remove(to[h]), to[h].geometry.dispose(), to[h].material.dispose(), to.splice(h, 1), S == null ? void 0 : S.render();
              }
            } else ot.add(r), hn(r);
            else ot.clear(), oo(), ot.add(r), hn(r);
            no();
          } else i || (ot.clear(), oo(), no());
          return;
        }
        if (Ot) {
          const r = vn(m);
          r >= 0 && (rs(r), Us(r));
        }
      });
    }, 500), Eo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, We();
    }), je.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !zt), zt = t, (_a2 = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", zt), zt) {
        const n = Ue();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (be = n.settings.loads.rawVal, n.settings.loads.val = false), an(), $e.querySelector("#cad3d-mode-prev").style.display = "", $e.querySelector("#cad3d-mode-next").style.display = "", $e.querySelector("#cad3d-mode-label").style.display = "";
      } else ln(), $e.querySelector("#cad3d-mode-prev").style.display = "none", $e.querySelector("#cad3d-mode-next").style.display = "none", $e.querySelector("#cad3d-mode-label").style.display = "none", z && z !== "placa-q4" && z !== "placa-3q" && xe(), setTimeout(() => {
        var _a3;
        const n = Ue();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && be && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${zt ? "ON" : "OFF"}`);
    }, je.setMode = (t) => {
      var _a2;
      if (!(me == null ? void 0 : me.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ue = Math.max(0, Math.min(t, me.modeShapes.length - 1));
      const o = me.modeShapes[ue], { extent: n } = Qt();
      let l = 0;
      for (let d = 0; d < Me.length; d++) {
        const a = o[d * 6] || 0, c = o[d * 6 + 1] || 0, m = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + c * c + m * m));
      }
      K = l > 1e-12 ? n * 0.05 / l : 1, qo();
      const s = $e.querySelector("#cad3d-mode-label");
      s && me.frequencies && (s.textContent = `Modo ${ue + 1} \u2014 ${me.frequencies[ue].toFixed(2)} Hz`), console.log(`Modo ${ue + 1}: f = ${(_a2 = me.frequencies) == null ? void 0 : _a2[ue].toFixed(4)} Hz`);
    }, window.cad = je, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild($e), document.body.appendChild(Le.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Je("edificio"), xe(), es("edificio"));
    }, 100), document.body.appendChild(za());
    const xs = document.createElement("span");
    return xs.style.display = "none", xs;
  };
});
export {
  __tla,
  ws as a,
  ha as c,
  Wa as g
};
