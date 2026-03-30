const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C2iwGR3p.js","./plateQ4Cpp-Duau68tz.js"])))=>i.map(i=>d[i]);
import { _ as Us, p as Sn, m as Zs, d as _t, s as Qs, __tla as __tla_0 } from "./plateQ4Cpp-Duau68tz.js";
import { v as ko, P as Ro, g as ea, a as ta, o as oa } from "./theme-CzzIlc4y.js";
import { V as Ee, P as lo, R as xs, b as vs, B as io, c as na, d as En, e as qo, f as sa, S as aa, M as la, g as ia, F as uo, a as Ao, L as Ho, h as ra, G as ca, A as Bo, i as kn, T as In, j as Do, k as jo, C as da, l as pa } from "./Text-Cin90tvN.js";
import { g as Xo, b as Ko, a as Eo } from "./analyze-B6dp1uvy.js";
import { g as Ut, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as ho, s as Zt, m as Rt, t as qn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let Ms, ba, Da;
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
  ], Io = [
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
  function fa(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
  }
  const mo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function bo(e, g) {
    const j = Fn.find((W) => W.id === e), z = Io.find((W) => W.id === g), Y = j.toKN, R = z.toM, J = (W, ue, I) => I / (Math.pow(Y, W) * Math.pow(R, ue));
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
      label: `${j.label}, ${z.label}`,
      force: j.label,
      length: z.label,
      stress: fa(e, g),
      moment: `${j.label}\xB7${z.label}`,
      E: J(1, -2, mo.E),
      G: J(1, -2, mo.G),
      A: J(0, 2, mo.A),
      Iz: J(0, 4, mo.Iz),
      Iy: J(0, 4, mo.Iy),
      J: J(0, 4, mo.J),
      rho: J(1, -4, mo.rho),
      spanRange: z.spanRange,
      heightRange: z.heightRange,
      defaultSpan: z.defaultSpan,
      defaultHeight: z.defaultHeight,
      defaultForce: D,
      forceRange: H,
      galponSpan: z.galponSpan,
      galponLength: z.galponLength,
      galponHeight: z.galponHeight,
      galponRise: z.galponRise
    };
  }
  bo("kN", "m"), bo("kip", "in");
  function Wo() {
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
  function ua(e) {
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
  function ma(e) {
    const g = e.force, [j, z, Y] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: j,
          max: z,
          step: Y,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: j,
          max: z,
          step: Y,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: j,
          max: z,
          step: Y,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: Y,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: j,
          max: z,
          step: Y,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: j,
          max: z,
          step: Y,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: Y,
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
          min: j,
          max: 0,
          step: Y,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: j,
          max: 0,
          step: Y,
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
  ba = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let g = false;
    function j(z, Y) {
      var _a, _b;
      if (!z.frequencies || z.frequencies.length === 0) {
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
      ], J = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let D = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${Y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (D += '<div id="modal-body" style="padding:0 12px 10px 12px;">', Y.properties) for (const H of Y.properties) D += `<span style="color:#888">${H}</span>
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
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, z.frequencies.forEach((H, W) => {
        var _a2;
        const ue = H > 0 ? 1 / H : 0, I = H * 2 * Math.PI, V = ((_a2 = z.massParticipation) == null ? void 0 : _a2[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let he = 0; he < 6; he++) J[he] += V[he];
        D += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${H.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ue.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${I.toFixed(2)}</td>`;
        for (let he = 0; he < 6; he++) {
          const ce = (V[he] * 100).toFixed(1), G = V[he] > 0.5 ? "#f00" : V[he] > 0.1 ? "#ff0" : "#0f0";
          D += `<td style="padding:2px 5px; text-align:right; color:${G}">${ce}%</td>`;
        }
        D += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(J[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(J[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(J[5] * 100).toFixed(1)}%</td></tr>`;
      }), D += "</table></div>", e.innerHTML = D, g) {
        const H = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        H && (H.style.display = "none"), W && (W.textContent = "\u25A2", W.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        g = !g;
        const H = e.querySelector("#modal-body"), W = e.querySelector("#modal-minimize");
        g ? (H.style.display = "none", W.textContent = "\u25A2", W.title = "Restaurar") : (H.style.display = "block", W.textContent = "\u25AC", W.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const H = [];
        H.push(`Modal Analysis \u2014 ${Y.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${R.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        H.push(W), H.push("-".repeat(W.length));
        const ue = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        z.frequencies.forEach((V, he) => {
          var _a2;
          const ce = V > 0 ? 1 / V : 0, G = V * 2 * Math.PI, Z = ((_a2 = z.massParticipation) == null ? void 0 : _a2[he]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let ke = 0; ke < 6; ke++) ue[ke] += Z[ke];
          const ie = Z.map((ke) => ((ke * 100).toFixed(1) + "%").padStart(6)).join(" ");
          H.push(`${String(he + 1).padStart(4)}  ${V.toFixed(4).padStart(9)}  ${ce.toFixed(4).padStart(9)}  ${G.toFixed(2).padStart(9)}  ${ie}  ${(ue[0] * 100).toFixed(1).padStart(5)}%  ${(ue[1] * 100).toFixed(1).padStart(5)}%  ${(ue[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(H.join(`
`));
        const I = e.querySelector("#modal-copy");
        I.textContent = "\u2713", setTimeout(() => I.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: j
    };
  };
  const fe = 64516e-8, T = 416231e-12, N = 0.0254, ro = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * fe,
      Iz: 16.4 * T,
      Iy: 2.2 * T,
      J: 0.0405 * T,
      d: 5.9 * N,
      bf: 3.94 * N
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * fe,
      Iz: 29.1 * T,
      Iy: 9.32 * T,
      J: 0.103 * T,
      d: 5.99 * N,
      bf: 5.99 * N
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * fe,
      Iz: 41.4 * T,
      Iy: 13.3 * T,
      J: 0.204 * T,
      d: 6.2 * N,
      bf: 6.02 * N
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * fe,
      Iz: 30.8 * T,
      Iy: 2.09 * T,
      J: 0.0426 * T,
      d: 7.89 * N,
      bf: 3.94 * N
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * fe,
      Iz: 61.9 * T,
      Iy: 7.97 * T,
      J: 0.172 * T,
      d: 8.14 * N,
      bf: 5.25 * N
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * fe,
      Iz: 82.7 * T,
      Iy: 18.3 * T,
      J: 0.346 * T,
      d: 7.93 * N,
      bf: 6.5 * N
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * fe,
      Iz: 110 * T,
      Iy: 37.1 * T,
      J: 0.536 * T,
      d: 8 * N,
      bf: 7.995 * N
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * fe,
      Iz: 146 * T,
      Iy: 49.1 * T,
      J: 0.871 * T,
      d: 8.25 * N,
      bf: 8.07 * N
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * fe,
      Iz: 184 * T,
      Iy: 60.9 * T,
      J: 1.45 * T,
      d: 8.5 * N,
      bf: 8.11 * N
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * fe,
      Iz: 272 * T,
      Iy: 88.6 * T,
      J: 3.54 * T,
      d: 9 * N,
      bf: 8.28 * N
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * fe,
      Iz: 53.8 * T,
      Iy: 2.18 * T,
      J: 0.0547 * T,
      d: 9.87 * N,
      bf: 3.96 * N
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * fe,
      Iz: 118 * T,
      Iy: 11.4 * T,
      J: 0.239 * T,
      d: 10.17 * N,
      bf: 5.75 * N
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * fe,
      Iz: 171 * T,
      Iy: 36.6 * T,
      J: 0.583 * T,
      d: 9.73 * N,
      bf: 7.96 * N
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * fe,
      Iz: 272 * T,
      Iy: 93.4 * T,
      J: 1.39 * T,
      d: 9.98 * N,
      bf: 10 * N
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * fe,
      Iz: 394 * T,
      Iy: 134 * T,
      J: 3.56 * T,
      d: 10.4 * N,
      bf: 10.13 * N
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * fe,
      Iz: 623 * T,
      Iy: 207 * T,
      J: 10.9 * T,
      d: 11.1 * N,
      bf: 10.34 * N
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * fe,
      Iz: 88.6 * T,
      Iy: 2.36 * T,
      J: 0.0704 * T,
      d: 11.91 * N,
      bf: 3.97 * N
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * fe,
      Iz: 156 * T,
      Iy: 4.66 * T,
      J: 0.293 * T,
      d: 12.31 * N,
      bf: 4.03 * N
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * fe,
      Iz: 204 * T,
      Iy: 17.3 * T,
      J: 0.3 * T,
      d: 12.22 * N,
      bf: 6.49 * N
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * fe,
      Iz: 310 * T,
      Iy: 44.1 * T,
      J: 0.906 * T,
      d: 11.94 * N,
      bf: 8.01 * N
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * fe,
      Iz: 425 * T,
      Iy: 95.8 * T,
      J: 1.58 * T,
      d: 12.06 * N,
      bf: 9.99 * N
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * fe,
      Iz: 597 * T,
      Iy: 195 * T,
      J: 4.05 * T,
      d: 12.25 * N,
      bf: 12.04 * N
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * fe,
      Iz: 833 * T,
      Iy: 270 * T,
      J: 8.44 * T,
      d: 12.71 * N,
      bf: 12.16 * N
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * fe,
      Iz: 1070 * T,
      Iy: 345 * T,
      J: 16 * T,
      d: 13.12 * N,
      bf: 12.32 * N
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * fe,
      Iz: 199 * T,
      Iy: 7 * T,
      J: 0.208 * T,
      d: 13.74 * N,
      bf: 5 * N
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * fe,
      Iz: 291 * T,
      Iy: 19.6 * T,
      J: 0.38 * T,
      d: 13.84 * N,
      bf: 6.73 * N
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * fe,
      Iz: 385 * T,
      Iy: 26.7 * T,
      J: 0.798 * T,
      d: 14.1 * N,
      bf: 6.77 * N
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * fe,
      Iz: 485 * T,
      Iy: 51.4 * T,
      J: 1.45 * T,
      d: 13.79 * N,
      bf: 8.03 * N
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * fe,
      Iz: 640 * T,
      Iy: 107 * T,
      J: 2.19 * T,
      d: 13.89 * N,
      bf: 9.99 * N
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * fe,
      Iz: 882 * T,
      Iy: 148 * T,
      J: 5.07 * T,
      d: 14.31 * N,
      bf: 10.13 * N
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * fe,
      Iz: 1240 * T,
      Iy: 447 * T,
      J: 7.12 * T,
      d: 14.32 * N,
      bf: 14.61 * N
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * fe,
      Iz: 1530 * T,
      Iy: 548 * T,
      J: 12.3 * T,
      d: 14.66 * N,
      bf: 14.73 * N
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * fe,
      Iz: 2140 * T,
      Iy: 838 * T,
      J: 23.7 * T,
      d: 15.22 * N,
      bf: 15.65 * N
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * fe,
      Iz: 301 * T,
      Iy: 9.59 * T,
      J: 0.262 * T,
      d: 15.69 * N,
      bf: 5.5 * N
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * fe,
      Iz: 448 * T,
      Iy: 24.5 * T,
      J: 0.545 * T,
      d: 15.86 * N,
      bf: 6.99 * N
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * fe,
      Iz: 659 * T,
      Iy: 37.2 * T,
      J: 1.52 * T,
      d: 16.26 * N,
      bf: 7.07 * N
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * fe,
      Iz: 954 * T,
      Iy: 119 * T,
      J: 2.39 * T,
      d: 16.33 * N,
      bf: 10.24 * N
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * fe,
      Iz: 1300 * T,
      Iy: 163 * T,
      J: 5.45 * T,
      d: 16.75 * N,
      bf: 10.37 * N
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * fe,
      Iz: 510 * T,
      Iy: 15.3 * T,
      J: 0.506 * T,
      d: 17.7 * N,
      bf: 6 * N
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * fe,
      Iz: 800 * T,
      Iy: 40.1 * T,
      J: 1.24 * T,
      d: 17.99 * N,
      bf: 7.5 * N
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * fe,
      Iz: 1170 * T,
      Iy: 60.3 * T,
      J: 3.49 * T,
      d: 18.47 * N,
      bf: 7.64 * N
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * fe,
      Iz: 1750 * T,
      Iy: 201 * T,
      J: 5.86 * T,
      d: 18.59 * N,
      bf: 11.15 * N
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * fe,
      Iz: 843 * T,
      Iy: 20.7 * T,
      J: 0.77 * T,
      d: 20.66 * N,
      bf: 6.5 * N
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * fe,
      Iz: 1330 * T,
      Iy: 57.5 * T,
      J: 1.83 * T,
      d: 20.99 * N,
      bf: 8.24 * N
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * fe,
      Iz: 1830 * T,
      Iy: 81.4 * T,
      J: 4.34 * T,
      d: 21.43 * N,
      bf: 8.36 * N
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * fe,
      Iz: 2670 * T,
      Iy: 274 * T,
      J: 6.83 * T,
      d: 21.51 * N,
      bf: 12.34 * N
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * fe,
      Iz: 1350 * T,
      Iy: 29.1 * T,
      J: 1.18 * T,
      d: 23.57 * N,
      bf: 7.01 * N
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * fe,
      Iz: 2100 * T,
      Iy: 82.5 * T,
      J: 2.68 * T,
      d: 23.92 * N,
      bf: 8.99 * N
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * fe,
      Iz: 3100 * T,
      Iy: 259 * T,
      J: 4.72 * T,
      d: 24.06 * N,
      bf: 12.75 * N
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * fe,
      Iz: 4020 * T,
      Iy: 340 * T,
      J: 9.5 * T,
      d: 24.48 * N,
      bf: 12.86 * N
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * fe,
      Iz: 4580 * T,
      Iy: 391 * T,
      J: 12.6 * T,
      d: 24.74 * N,
      bf: 12.9 * N
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * fe,
      Iz: 5680 * T,
      Iy: 479 * T,
      J: 21.2 * T,
      d: 25.24 * N,
      bf: 12.9 * N
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * fe,
      Iz: 2850 * T,
      Iy: 106 * T,
      J: 2.81 * T,
      d: 26.71 * N,
      bf: 9.96 * N
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * fe,
      Iz: 4090 * T,
      Iy: 159 * T,
      J: 6.77 * T,
      d: 27.29 * N,
      bf: 10.07 * N
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * fe,
      Iz: 3610 * T,
      Iy: 115 * T,
      J: 3.06 * T,
      d: 29.53 * N,
      bf: 10.4 * N
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * fe,
      Iz: 4930 * T,
      Iy: 164 * T,
      J: 6.43 * T,
      d: 30.01 * N,
      bf: 10.5 * N
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * fe,
      Iz: 5900 * T,
      Iy: 187 * T,
      J: 5.3 * T,
      d: 32.86 * N,
      bf: 11.48 * N
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * fe,
      Iz: 7800 * T,
      Iy: 225 * T,
      J: 7 * T,
      d: 35.55 * N,
      bf: 11.95 * N
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * fe,
      Iz: 8.22 * T,
      Iy: 8.22 * T,
      J: 13.4 * T,
      d: 4 * N,
      bf: 4 * N
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * fe,
      Iz: 10.7 * T,
      Iy: 10.7 * T,
      J: 17.9 * T,
      d: 4 * N,
      bf: 4 * N
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * fe,
      Iz: 12.3 * T,
      Iy: 12.3 * T,
      J: 21 * T,
      d: 4 * N,
      bf: 4 * N
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * fe,
      Iz: 30.3 * T,
      Iy: 30.3 * T,
      J: 48.3 * T,
      d: 6 * N,
      bf: 6 * N
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * fe,
      Iz: 41.1 * T,
      Iy: 41.1 * T,
      J: 66.9 * T,
      d: 6 * N,
      bf: 6 * N
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * fe,
      Iz: 49.6 * T,
      Iy: 49.6 * T,
      J: 82.2 * T,
      d: 6 * N,
      bf: 6 * N
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * fe,
      Iz: 70.7 * T,
      Iy: 70.7 * T,
      J: 112 * T,
      d: 8 * N,
      bf: 8 * N
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * fe,
      Iz: 98 * T,
      Iy: 98 * T,
      J: 158 * T,
      d: 8 * N,
      bf: 8 * N
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * fe,
      Iz: 122 * T,
      Iy: 122 * T,
      J: 199 * T,
      d: 8 * N,
      bf: 8 * N
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * fe,
      Iz: 202 * T,
      Iy: 202 * T,
      J: 323 * T,
      d: 10 * N,
      bf: 10 * N
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * fe,
      Iz: 254 * T,
      Iy: 254 * T,
      J: 412 * T,
      d: 10 * N,
      bf: 10 * N
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * fe,
      Iz: 355 * T,
      Iy: 355 * T,
      J: 564 * T,
      d: 12 * N,
      bf: 12 * N
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * fe,
      Iz: 452 * T,
      Iy: 452 * T,
      J: 724 * T,
      d: 12 * N,
      bf: 12 * N
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * fe,
      Iz: 18 * T,
      Iy: 9.58 * T,
      J: 22.6 * T,
      d: 6 * N,
      bf: 4 * N
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * fe,
      Iz: 23.8 * T,
      Iy: 12.3 * T,
      J: 30.3 * T,
      d: 6 * N,
      bf: 4 * N
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * fe,
      Iz: 33.6 * T,
      Iy: 11.8 * T,
      J: 33 * T,
      d: 8 * N,
      bf: 4 * N
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * fe,
      Iz: 45.1 * T,
      Iy: 15 * T,
      J: 44.5 * T,
      d: 8 * N,
      bf: 4 * N
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * fe,
      Iz: 46.1 * T,
      Iy: 28.2 * T,
      J: 61.3 * T,
      d: 8 * N,
      bf: 6 * N
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * fe,
      Iz: 63 * T,
      Iy: 37.5 * T,
      J: 84.6 * T,
      d: 8 * N,
      bf: 6 * N
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * fe,
      Iz: 103 * T,
      Iy: 47.1 * T,
      J: 115 * T,
      d: 10 * N,
      bf: 6 * N
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * fe,
      Iz: 196 * T,
      Iy: 102 * T,
      J: 249 * T,
      d: 12 * N,
      bf: 8 * N
    }
  ];
  function Yo() {
    const e = {};
    return ro.forEach((g, j) => {
      g.type === "W" && (e[g.name] = j);
    }), e;
  }
  function Jo() {
    const e = {};
    return ro.forEach((g, j) => {
      g.type === "HSS" && (e[g.name] = j);
    }), e;
  }
  function ha(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: j, elementInputs: z, nodeInputs: Y, deformOutputs: R } = e, J = g.length * 6, D = j.length, H = j.filter((G) => G.length === 2).length, W = j.filter((G) => G.length >= 3).length, ue = document.createElement("div");
    ue.className = "rpt-overlay";
    let I = "";
    I += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', I += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", I += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', I += '<hr class="rpt-sep"/>', I += "<h2>1. Input Data</h2>", I += '<table class="rpt-info"><tbody>', I += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, I += `<tr><td>Number of elements</td><td class="val">${D} (${H} frames, ${W} shells)</td></tr>`, I += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', I += `<tr><td>Total DOFs</td><td class="val">${J}</td></tr>`, I += "</tbody></table>", I += "<h3>1.1 Node Coordinates</h3>", I += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((G, Z) => {
      I += `<tr><td>${Z}</td><td>${Ve(G[0])}</td><td>${Ve(G[1])}</td><td>${Ve(G[2])}</td></tr>`;
    }), I += "</tbody></table>", I += "<h3>1.2 Element Connectivity</h3>", I += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', j.forEach((G, Z) => {
      var _a2, _b2, _c2, _d2;
      const ie = G.length === 2, ke = G.map((me) => g[me]), Ce = ie ? ho(Zt(ke[1], ke[0])) : 0, Pe = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(Z)) ?? 0, nt = ((_b2 = z.areas) == null ? void 0 : _b2.get(Z)) ?? 0, Be = ((_c2 = z.momentsOfInertiaZ) == null ? void 0 : _c2.get(Z)) ?? 0, ut = ((_d2 = z.momentsOfInertiaY) == null ? void 0 : _d2.get(Z)) ?? 0;
      I += `<tr><td>${Z}</td><td>${ie ? "Frame" : "Shell"}</td><td>${G.join(" \u2192 ")}</td>`, I += `<td>${Ve(Ce)}</td><td>${Ve(Pe)}</td><td>${Ve(nt)}</td><td>${Ve(Be)}</td><td>${Ve(ut)}</td></tr>`;
    }), I += "</tbody></table>", I += "<h2>2. Element Formulation</h2>", H > 0 && (I += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", I += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", I += "<h4>2.1.1 Shape Functions</h4>", I += "<p><b>Axial</b> (linear interpolation):</p>", I += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', I += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", I += '<table class="rpt-eq-table"><tbody>', I += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', I += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', I += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', I += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', I += "</tbody></table>", I += xa(), I += "<p><b>Torsion</b> (linear): same as axial.</p>", I += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", I += "<p>The B matrix relates nodal displacements to internal strains:</p>", I += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', I += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', I += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', I += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', I += "<h4>2.1.3 Constitutive Relations D</h4>", I += '<table class="rpt-eq-table"><tbody>', I += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', I += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', I += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', I += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', I += "</tbody></table>", I += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", I += "<p>Obtained by analytical integration:</p>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', I += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", I += '<div class="rpt-eq-small">', I += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", I += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", I += "</div>", I += "<h4>2.1.5 Transformation Matrix T</h4>", I += "<p>Direction cosines of element axis:</p>", I += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', I += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', I += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', I += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", I += "<h4>2.1.6 Global Stiffness Matrix</h4>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), I += "<h2>3. Numerical Results per Element</h2>", I += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let G = 0; G < D; G++) {
      const Z = j[G], ie = Z.map((Tt) => g[Tt]);
      if (!(Z.length === 2)) continue;
      const Ce = ho(Zt(ie[1], ie[0])), Pe = ((_a = z.elasticities) == null ? void 0 : _a.get(G)) ?? 0, nt = ((_b = z.areas) == null ? void 0 : _b.get(G)) ?? 0, Be = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(G)) ?? 0, ut = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(G)) ?? 0, me = ((_e = z.shearModuli) == null ? void 0 : _e.get(G)) ?? 0, Le = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(G)) ?? 0;
      let xe = null, je = null, Ue = null;
      try {
        xe = Xo(ie, z, G), je = Ko(ie), Ue = Rt(qn(je), Rt(xe, je));
      } catch {
        continue;
      }
      const Re = Zt(ie[1], ie[0]), Ze = Re[0] / Ce, Qe = Re[1] / Ce, ct = Re[2] / Ce;
      I += '<div class="rpt-elem-block">', I += `<h3 class="rpt-elem-title" data-toggle="elem${G}">\u25B6 Element ${G} \u2014 Nodes ${Z[0]} \u2192 ${Z[1]}, L = ${Ve(Ce)}</h3>`, I += `<div id="rpt-elem${G}" class="rpt-elem-body" style="display:none">`, I += "<h4>Properties (numerical substitution)</h4>", I += '<div class="rpt-eq-small">', I += `E = ${Ve(Pe)} &nbsp;&nbsp; A = ${Ve(nt)} &nbsp;&nbsp; I<sub>z</sub> = ${Ve(Be)} &nbsp;&nbsp; I<sub>y</sub> = ${Ve(ut)} &nbsp;&nbsp; G = ${Ve(me)} &nbsp;&nbsp; J = ${Ve(Le)}<br/>`, I += `EA/L = ${Ve(Pe)}\xB7${Ve(nt)}/${Ve(Ce)} = <b>${Ve(Pe * nt / Ce)}</b><br/>`, I += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ve(Pe)}\xB7${Ve(Be)}/${Ve(Ce)}\xB3 = <b>${Ve(12 * Pe * Be / Ce ** 3)}</b><br/>`, I += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ve(Pe)}\xB7${Ve(ut)}/${Ve(Ce)}\xB3 = <b>${Ve(12 * Pe * ut / Ce ** 3)}</b><br/>`, I += `GJ/L = ${Ve(me)}\xB7${Ve(Le)}/${Ve(Ce)} = <b>${Ve(me * Le / Ce)}</b>`, I += "</div>", I += "<h4>Direction cosines</h4>", I += `<div class="rpt-eq-small">l = ${Go(Ze)}, m = ${Go(Qe)}, n = ${Go(ct)}, D = ${Go(Math.sqrt(Ze ** 2 + Qe ** 2))}</div>`, I += "<h4>K<sub>local</sub> (12\xD712)</h4>", I += zn(xe, 12), I += "<h4>T \u2014 Transformation (12\xD712)</h4>", I += zn(je, 12), I += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", I += zn(Ue, 12), I += "<h4>Assembly</h4>", I += `<div class="rpt-eq-small">Global DOFs: node ${Z[0]} \u2192 [${Z[0] * 6}..${Z[0] * 6 + 5}], node ${Z[1]} \u2192 [${Z[1] * 6}..${Z[1] * 6 + 5}]</div>`, I += "</div></div>";
    }
    I += "<h2>4. Global Assembly</h2>", I += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${D - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, I += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", I += va(j, g.length), I += "<h2>5. Boundary Conditions</h2>";
    const V = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], he = [];
    if (I += "<h3>5.1 Supports (fixed DOFs)</h3>", Y.supports && Y.supports.size > 0) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const G of V) I += `<th>${G}</th>`;
      I += "</tr></thead><tbody>", Y.supports.forEach((G, Z) => {
        I += `<tr><td>${Z}</td>`, G.forEach((ie, ke) => {
          ie && he.push(Z * 6 + ke), I += `<td class="${ie ? "fixed" : ""}">${ie ? "Fixed" : "Free"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += `<div class="rpt-eq-small">Fixed DOFs: [${he.join(", ")}] \u2192 ${he.length} constraints<br/>`, I += `Free DOFs: ${J} \u2212 ${he.length} = <b>${J - he.length}</b></div>`, I += "<h3>5.2 Applied Loads</h3>", Y.loads && Y.loads.size > 0) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const G = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const Z of G) I += `<th>${Z}</th>`;
      I += "</tr></thead><tbody>", Y.loads.forEach((Z, ie) => {
        I += `<tr><td>${ie}</td>`, Z.forEach((ke) => {
          const Ce = Math.abs(ke) > 1e-10;
          I += `<td class="${Ce ? "nz" : ""}">${Ce ? Ve(ke) : "0"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h2>6. Solution</h2>", I += "<p>After removing fixed DOFs, the reduced system is:</p>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', I += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", I += "<h3>6.1 Nodal Displacements</h3>", R == null ? void 0 : R.deformations) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const G of V) I += `<th>${G}</th>`;
      I += "</tr></thead><tbody>", R.deformations.forEach((G, Z) => {
        I += `<tr><td>${Z}</td>`, G.forEach((ie) => {
          const ke = Math.abs(ie) > 1e-10;
          I += `<td class="${ke ? "nz" : ""}">${Ve(ie, 6)}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h3>6.2 Reactions</h3>", I += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', R == null ? void 0 : R.reactions) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const G of V) I += `<th>${G}</th>`;
      I += "</tr></thead><tbody>", R.reactions.forEach((G, Z) => {
        I += `<tr><td>${Z}</td>`, G.forEach((ie) => {
          const ke = Math.abs(ie) > 1e-10;
          I += `<td class="${ke ? "nz-react" : ""}">${ke ? Ve(ie, 4) : "0"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h2>7. Internal Forces</h2>", I += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", I += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', I += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', R == null ? void 0 : R.deformations) {
      const G = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      I += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const Z of G) I += `<th>${Z}<sub>i</sub></th>`;
      for (const Z of G) I += `<th>${Z}<sub>j</sub></th>`;
      I += "</tr></thead><tbody>";
      for (let Z = 0; Z < D; Z++) {
        const ie = j[Z];
        if (ie.length !== 2) continue;
        const ke = ie.map((Ce) => g[Ce]);
        try {
          const Ce = Xo(ke, z, Z), Pe = Ko(ke), nt = [];
          for (const me of ie) {
            const Le = ((_g = R.deformations) == null ? void 0 : _g.get(me)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            nt.push(...Le);
          }
          const Be = Rt(Pe, nt), ut = Rt(Ce, Be);
          I += `<tr><td>${Z}</td><td>${ie.join("\u2192")}</td>`;
          for (let me = 0; me < 12; me++) {
            const Le = Math.abs(ut[me]) > 1e-10;
            I += `<td class="${Le ? "nz" : ""}">${Ve(ut[me], 2)}</td>`;
          }
          I += "</tr>";
        } catch {
        }
      }
      I += "</tbody></table>";
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
    return ue.innerHTML = ce + I, (_h = ue.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ue.remove()), ue.querySelectorAll("[data-toggle]").forEach((G) => {
      G.addEventListener("click", () => {
        const Z = G.dataset.toggle, ie = ue.querySelector(`#rpt-${Z}`);
        if (ie) {
          const ke = ie.style.display !== "none";
          ie.style.display = ke ? "none" : "", G.textContent = G.textContent.replace(/^[▼▶]/, ke ? "\u25B6" : "\u25BC");
        }
      });
    }), ue;
  }
  function Ve(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function Go(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function zn(e, g) {
    var _a;
    const j = Math.min(g, 12);
    let z = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let Y = 0; Y < j; Y++) {
      z += "<tr>";
      for (let R = 0; R < j; R++) {
        const J = ((_a = e[Y]) == null ? void 0 : _a[R]) ?? 0, D = Math.abs(J) < 1e-10;
        z += `<td class="${D ? "z" : ""} ${Y === R && !D ? "diag" : ""}">${D ? "0" : ga(J)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", g > j && (z += `<div style="color:#888;font-size:9pt">(showing ${j}\xD7${j} of ${g}\xD7${g})</div>`), z += "</div>", z;
  }
  function ga(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function xa() {
    const J = [
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
    for (const H of J) {
      let W = "";
      for (let he = 0; he <= 80; he++) {
        const ce = he / 80, G = 30 + ce * 540, Z = 180 / 2 - H.fn(ce) * 60;
        W += (he === 0 ? "M" : "L") + `${G.toFixed(1)},${Z.toFixed(1)}`;
      }
      D += `<path d="${W}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const ue = 0.75, I = 30 + ue * 540 + 8, V = 180 / 2 - H.fn(ue) * 60 - 6;
      D += `<text x="${I}" y="${V}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return D += "</svg>", D;
  }
  function va(e, g) {
    const j = g * 6, z = Math.min(j, 30);
    let Y = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    Y += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', Y += "<tr><td></td>";
    for (let J = 0; J < z; J++) Y += `<td style="color:#003366;font-weight:bold;font-size:7px">${J}</td>`;
    Y += "</tr>";
    const R = Array.from({
      length: z
    }, () => Array(z).fill(0));
    for (let J = 0; J < e.length; J++) {
      const D = e[J].map((H) => H * 6);
      for (const H of D) for (const W of D) for (let ue = 0; ue < 6; ue++) for (let I = 0; I < 6; I++) {
        const V = H + ue, he = W + I;
        V < z && he < z && R[V][he]++;
      }
    }
    for (let J = 0; J < z; J++) {
      Y += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${J}</td>`;
      for (let D = 0; D < z; D++) {
        const H = R[J][D], W = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", ue = H === 0 ? "" : H.toString();
        Y += `<td style="background:${W};color:#003366">${ue}</td>`;
      }
      Y += "</tr>";
    }
    return Y += "</table></div>", j > z && (Y += `<div style="color:#888;font-size:9pt">(showing ${z}\xD7${z} of ${j}\xD7${j})</div>`), Y;
  }
  let Tn = false;
  function ya(e) {
    if (Tn || window.katex) {
      Tn = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const j = document.createElement("script");
    j.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", j.onload = () => {
      Tn = true, e();
    }, document.head.appendChild(j);
  }
  function ys(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function $a(e, g, j, z, Y, R) {
    var _a, _b, _c, _d, _e, _f;
    const J = j[e], D = J.map((je) => g[je]), H = J.length === 2, W = H ? ho(Zt(D[1], D[0])) : 0, ue = ((_a = z.elasticities) == null ? void 0 : _a.get(e)) ?? 0, I = ((_b = z.areas) == null ? void 0 : _b.get(e)) ?? 0, V = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, he = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ce = ((_e = z.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, G = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let Z = null, ie = null, ke = null;
    try {
      Z = Xo(D, z, e), ie = Ko(D), ke = Rt(qn(ie), Rt(Z, ie));
    } catch {
    }
    const Ce = H ? Zt(D[1], D[0]) : [
      0,
      0,
      0
    ], Pe = W > 0 ? Ce[0] / W : 0, nt = W > 0 ? Ce[1] / W : 0, Be = W > 0 ? Ce[2] / W : 0, ut = Math.sqrt(Pe ** 2 + nt ** 2), me = [];
    if ((Y == null ? void 0 : Y.deformations) && H) for (const je of J) {
      const Ue = Y.deformations.get(je) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      me.push(...Ue);
    }
    let Le = [], xe = [];
    if (me.length === 12 && ie && Z) {
      try {
        Le = Rt(ie, me);
      } catch {
        Le = Array(12).fill(0);
      }
      try {
        xe = Rt(Z, Le);
      } catch {
        xe = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: J,
      elmNodes: D,
      isFrame: H,
      L: W,
      E: ue,
      A: I,
      Iz: V,
      Iy: he,
      G: ce,
      J: G,
      kLocal: Z,
      T: ie,
      kGlobal: ke,
      l: Pe,
      m: nt,
      n: Be,
      D: ut,
      uGlobal: me,
      uLocal: Le,
      fLocal: xe,
      dOut: Y,
      aOut: R,
      totalNodes: g.length
    };
  }
  function Ma(e, g, j, z, Y, R) {
    var _a, _b;
    const J = $a(e, g, j, z, Y, R), D = document.createElement("div");
    return D.className = "er-panel", D.innerHTML = ka + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${J.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${J.elem.join(" \u2192 ")} \u2014 L = ${qe(J.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${wa(J)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${$s(J)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Sa(J)}</div>
  `, D.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        D.querySelectorAll(".er-tab").forEach((ue) => ue.classList.remove("active")), H.classList.add("active");
        const W = H.dataset.tab;
        D.querySelectorAll(".er-body").forEach((ue) => ue.style.display = "none"), D.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = D.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => D.remove()), (_b = D.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = D.classList.toggle("er-fullscreen-mode"), W = D.querySelector("#er-fullscreen");
      W && (W.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = D.querySelector("#er-sf-canvas");
      H && Ln(H);
      const W = D.querySelector("#er-sf-canvas-math");
      W && Ln(W);
    }, 50), ya(() => {
      const H = D.querySelector("#er-body-math");
      H && (H.innerHTML = $s(J)), setTimeout(() => {
        const W = D.querySelector("#er-sf-canvas-math");
        W && Ln(W);
      }, 50), D.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const ue = W.dataset.toggle, I = D.querySelector(`#er-${ue}`);
          I && (I.style.display = I.style.display === "none" ? "" : "none");
        });
      });
    }), D;
  }
  function wa(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${qe(e.E)}</td><td>A</td><td>${qe(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${qe(e.Iz)}</td><td>I<sub>y</sub></td><td>${qe(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${qe(e.G)}</td><td>J</td><td>${qe(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += Po(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += Po(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += Po(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const j = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let z = 0; z < e.elem.length; z++) {
        g += `<div class="er-sub">Nodo ${e.elem[z]}: `;
        for (let Y = 0; Y < 6; Y++) {
          const R = e.uGlobal[z * 6 + Y];
          g += `${j[Y]}=<span class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${qe(R, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((j) => j !== 0)) {
      const j = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const z of j) g += `<th>${z}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) g += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[z], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) g += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[z], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function $s(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const j = (ue) => ys(ue), z = (ue) => ys(ue, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${z("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${j("\\text{Nodo } i")} = (${e.elmNodes[0].map((ue) => qe(ue)).join(", ")})<br/>`, g += `${j("\\text{Nodo } j")} = (${e.elmNodes[1].map((ue) => qe(ue)).join(", ")})<br/>`, g += `${z(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${qe(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${z("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${z("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${j("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${z("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${j("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${z("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${z("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${z("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${z("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${j("I_z")})</div>`, g += `<div class="er-eq">${z("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${j("I_y")})</div>`, g += `<div class="er-eq">${z("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${z("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${z(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${qe(e.E)} \\times ${qe(e.A)} = \\mathbf{${qe(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${qe(e.E)} \\times ${qe(e.Iz)} = \\mathbf{${qe(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${qe(e.E)} \\times ${qe(e.Iy)} = \\mathbf{${qe(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${qe(e.G)} \\times ${qe(e.J)} = \\mathbf{${qe(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${j("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const Y = e.E * e.A / e.L, R = e.E * e.Iz / e.L ** 3, J = e.E * e.Iy / e.L ** 3, D = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${z("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${z("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${j("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${z("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${qe(e.E)}\\times${qe(e.A)}}{${qe(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${z(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${qe(Y)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${j("v(\\xi)")}</p>`, g += `<div class="er-eq">${z("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${z("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${z("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${j("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${z("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${j("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${z("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${qe(e.E)} \\times ${qe(e.Iz)}}{${qe(e.L)}^3} = \\mathbf{${qe(12 * R)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${j("\\theta_x")} y ${j("GJ")}:</p>`, g += `<div class="er-eq">${z(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${qe(e.G)}\\times${qe(e.J)}}{${qe(e.L)}} = \\mathbf{${qe(D)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${j("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${z("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${qe(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${z(`\\frac{EA}{L} = \\mathbf{${qe(Y)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${qe(12 * R)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${qe(12 * J)}}`)}</div>`, g += `<div class="er-eq">${z(`\\frac{GJ}{L} = \\mathbf{${qe(D)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${qe(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${qe(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${z(`\\frac{6EI_z}{L^2} = \\mathbf{${qe(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${qe(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${j("\\mathbf{K}_{local}")} (12x12)</div>`, g += Po(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${z(`l = \\frac{x_j - x_i}{L} = ${Vo(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Vo(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Vo(e.n)}`)}</div>`, g += `<div class="er-eq">${z(`D = \\sqrt{l^2 + m^2} = ${Vo(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${j(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ue = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${z(ue)}</div>`;
    } else g += `<div class="er-eq">${z("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${z("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${j("\\mathbf{K}_{global}")} = ${j("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += Po(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, W = e.elem[1] * 6;
    if (g += `<div class="er-eq">${z(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, g += `<div class="er-eq">${z(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, g += `<div class="er-eq">${z("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${z("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${z("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ue) => ue !== 0)) {
      const ue = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const I of ue) g += `<th>${I}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let I = 0; I < 6; I++) g += `<td class="${Math.abs(e.fLocal[I]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[I], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let I = 6; I < 12; I++) g += `<td class="${Math.abs(e.fLocal[I]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[I], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Sa(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${qe(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${qe(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${qe(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const j = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const z of j) g += `<th>${z}</th>`;
      g += "</tr>";
      for (let z = 0; z < e.elem.length; z++) {
        g += `<tr><td>${e.elem[z]}</td>`;
        for (let Y = 0; Y < 6; Y++) {
          const R = e.uGlobal[z * 6 + Y];
          g += `<td class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${qe(R, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((j) => j !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const j = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const z of j) g += `<th>${z}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) g += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[z], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) g += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[z], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function qe(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function Vo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Po(e) {
    var _a;
    const g = e.length, j = Math.min(g, 12);
    let z = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let Y = 0; Y < j; Y++) {
      z += "<tr>";
      for (let R = 0; R < j; R++) {
        const J = ((_a = e[Y]) == null ? void 0 : _a[R]) ?? 0, D = Math.abs(J) < 1e-10;
        z += `<td class="${D ? "z" : ""} ${Y === R && !D ? "diag" : ""}">${D ? "0" : Ea(J)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", g > j && (z += `<div style="color:var(--fem-label);font-size:9px">(${j}\xD7${j} de ${g}\xD7${g})</div>`), z += "</div>", z;
  }
  function Ea(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Ln(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const j = e.width, z = e.height, Y = 30, R = j - 2 * Y, J = (z - 3 * Y) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, j, z);
    const D = (H, W, ue) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(Y, H, R, J), g.strokeStyle = "#444", g.beginPath(), g.moveTo(Y, H + J / 2), g.lineTo(Y + R, H + J / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(W, Y + 4, H + 14);
      for (const V of ue) {
        g.strokeStyle = V.color, g.lineWidth = 2.5, g.beginPath();
        for (let he = 0; he <= 100; he++) {
          const ce = he / 100, G = Y + ce * R, Z = H + J / 2 - V.fn(ce) * (J / 2 * 0.85);
          he === 0 ? g.moveTo(G, Z) : g.lineTo(G, Z);
        }
        g.stroke();
      }
      let I = Y + R - 90;
      for (const V of ue) g.fillStyle = V.color, g.font = "bold 10px sans-serif", g.fillText(V.label, I, H + J - 6), I += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", Y, H + J + 12), g.fillText("1", Y + R - 6, H + J + 12), g.fillText("\u03BE", Y + R / 2, H + J + 12);
    };
    D(Y, "Axial (lineal)", [
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
    ]), D(Y + J + Y, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  const ka = `<style>
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
</style>`, Co = [
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
  let Uo = false, go = null, Ht = null, St = null, vt = null;
  function Ia() {
    vt = document.createElement("button"), vt.id = "help-tour-btn", vt.innerHTML = "?", vt.title = "Ayuda interactiva \u2014 Tour guiado", vt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, vt.addEventListener("mouseenter", () => {
      vt.style.transform = "scale(1.15)", vt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), vt.addEventListener("mouseleave", () => {
      vt.style.transform = "scale(1)", vt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), vt.addEventListener("click", () => {
      Uo ? An() : za();
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
  `, document.head.appendChild(e), vt;
  }
  function za() {
    Uo = true, vt && (vt.innerHTML = "\u2715", vt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", vt.style.animation = "none"), go = document.createElement("div"), go.id = "tour-overlay", go.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(go), zo(0);
  }
  function An() {
    Uo = false, vt && (vt.innerHTML = "?", vt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", vt.style.animation = "helpPulse 2s infinite"), Ht && (Ht.remove(), Ht = null), St && (St.remove(), St = null), go && (go.remove(), go = null);
  }
  function zo(e) {
    var _a, _b;
    if (e >= Co.length) {
      Ta();
      return;
    }
    const g = Co[e], j = document.querySelector(g.selector);
    if (!j) {
      zo(e + 1);
      return;
    }
    j.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Ht && Ht.remove(), St && St.remove();
    const z = j.getBoundingClientRect(), Y = window.innerWidth, R = window.innerHeight, J = 320, D = 180;
    Ht = document.createElement("div"), Ht.style.cssText = `
    position: fixed;
    left: ${z.left - 6}px; top: ${z.top - 6}px;
    width: ${z.width + 12}px; height: ${z.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Ht);
    const H = Y - z.right, W = z.left, ue = R - z.bottom, I = z.top;
    let V = g.position || "bottom";
    V === "bottom" && ue < D + 20 && (V = "top"), V === "top" && I < D + 20 && (V = "right"), V === "right" && H < J + 20 && (V = "left"), V === "left" && W < J + 20 && (V = "bottom");
    let he, ce, G = "";
    switch (V) {
      case "bottom":
        he = z.left + z.width / 2 - J / 2, ce = z.bottom + 14, G = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        he = z.left + z.width / 2 - J / 2, ce = z.top - D - 14, G = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        he = z.right + 14, ce = z.top + z.height / 2 - D / 2, G = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        he = z.left - J - 14, ce = z.top + z.height / 2 - D / 2, G = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    he = Math.max(10, Math.min(he, Y - J - 10)), ce = Math.max(10, Math.min(ce, R - D - 10)), St = document.createElement("div"), St.style.cssText = `
    position: fixed;
    left: ${he}px; top: ${ce}px;
    width: ${J}px;
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
  `, St.innerHTML = `
    <div style="${G}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Co.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Co.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Co.map((ie, ke) => `<div style="width:${ke === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${ke === e ? "#0099ff" : ke < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(St), (_a = St.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      zo(e + 1);
    }), (_b = St.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      zo(e - 1);
    });
    const Z = (ie) => {
      if (!Uo) {
        document.removeEventListener("keydown", Z);
        return;
      }
      (ie.key === "ArrowRight" || ie.key === "Enter") && (zo(e + 1), document.removeEventListener("keydown", Z)), ie.key === "ArrowLeft" && (zo(Math.max(0, e - 1)), document.removeEventListener("keydown", Z)), ie.key === "Escape" && (An(), document.removeEventListener("keydown", Z));
    };
    document.addEventListener("keydown", Z);
  }
  function Ta() {
    var _a;
    Ht && (Ht.remove(), Ht = null), St && (St.remove(), St = null), St = document.createElement("div"), St.style.cssText = `
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
  `, St.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(St), (_a = St.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => An());
  }
  function La(e) {
    var _a;
    const g = e.split(/\r?\n/), j = {
      force: "TONF",
      length: "M"
    }, z = [], Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), D = [], H = [], W = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), I = [], V = [];
    let he = "", ce = "";
    for (const le of g) {
      const ve = le.trim();
      if (!ve || ve.startsWith("$")) {
        ve.startsWith("$ ") && (ce = ve.substring(2).trim());
        continue;
      }
      if (ce === "CONTROLS") {
        const Q = ve.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        Q && (j.force = Q[1], j.length = Q[2]);
        const ze = ve.match(/TITLE2\s+"([^"]+)"/);
        ze && (he = ze[1]);
      }
      if (ce === "STORIES - IN SEQUENCE FROM TOP") {
        const Q = ve.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (Q) {
          const ze = Q[1], X = Q[2] ? parseFloat(Q[2]) : 0, de = Q[3] ? parseFloat(Q[3]) : void 0;
          z.push({
            name: ze,
            height: X,
            elev: de ?? 0
          });
        }
      }
      if (ce === "MATERIAL PROPERTIES") {
        const Q = ve.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (Q) {
          const ze = Q[1];
          Y.has(ze) || Y.set(ze, {
            type: Q[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const X = Y.get(ze);
          Q[2] && (X.type = Q[2]);
          const de = ve.match(/\bE\s+([\d.eE+-]+)/);
          de && (X.E = parseFloat(de[1]));
          const Ae = ve.match(/\bU\s+([\d.eE+-]+)/);
          Ae && (X.nu = parseFloat(Ae[1]), X.G = X.E / (2 * (1 + X.nu)));
          const ye = ve.match(/\bFY\s+([\d.eE+-]+)/);
          ye && (X.fy = parseFloat(ye[1]));
          const We = ve.match(/\bFC\s+([\d.eE+-]+)/);
          We && (X.fc = parseFloat(We[1]));
          const He = ve.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          He && (X.density = parseFloat(He[1]));
        }
      }
      if (ce === "FRAME SECTIONS") {
        const Q = ve.match(/FRAMESECTION\s+"([^"]+)"/);
        if (Q) {
          const ze = Q[1];
          R.has(ze) || R.set(ze, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const X = R.get(ze), de = ve.match(/MATERIAL\s+"([^"]+)"/);
          de && (X.material = de[1]);
          const Ae = ve.match(/SHAPE\s+"([^"]+)"/);
          Ae && (X.shape = Ae[1]);
          const ye = ve.match(/\bD\s+([\d.eE+-]+)/);
          ye && (X.D = parseFloat(ye[1]));
          const We = ve.match(/\bB\s+([\d.eE+-]+)/);
          We && (X.B = parseFloat(We[1]));
          const He = ve.match(/\bTF\s+([\d.eE+-]+)/);
          He && (X.TF = parseFloat(He[1]));
          const Ke = ve.match(/\bTW\s+([\d.eE+-]+)/);
          Ke && (X.TW = parseFloat(Ke[1]));
          const st = ve.match(/\bR\s+([\d.eE+-]+)/);
          st && (X.R = parseFloat(st[1]));
          const Ye = ve.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ye && (X.fillMaterial = Ye[1]);
          const zt = ve.match(/I2MOD\s+([\d.eE+-]+)/);
          zt && (X.modI2 = parseFloat(zt[1]));
          const Lt = ve.match(/I3MOD\s+([\d.eE+-]+)/);
          Lt && (X.modI3 = parseFloat(Lt[1]));
        }
      }
      if (ce === "POINT COORDINATES") {
        const Q = ve.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        Q && J.set(Q[1], [
          parseFloat(Q[2]),
          parseFloat(Q[3])
        ]);
      }
      if (ce === "LINE CONNECTIVITIES") {
        const Q = ve.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        Q && D.push({
          name: Q[1],
          type: Q[2],
          pt1: Q[3],
          pt2: Q[4],
          nStories: parseInt(Q[5])
        });
      }
      if (ce === "POINT ASSIGNS") {
        const Q = ve.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        Q && W.set(`${Q[1]}@${Q[2]}`, Q[3].split(/\s+/));
      }
      if (ce === "LINE ASSIGNS") {
        const Q = ve.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (Q) {
          const ze = {
            story: Q[2],
            section: Q[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, X = ve.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          X && (ze.rigidZone = parseFloat(X[1]));
          const de = ve.match(/RELEASE\s+"([^"]+)"/);
          de && (ze.releases = de[1].split(/\s+/));
          const Ae = ve.match(/ANG\s+([-\d.eE+]+)/);
          Ae && (ze.angle = parseFloat(Ae[1])), ue.set(`${Q[1]}@${Q[2]}`, ze);
        }
      }
      if (ce === "GRIDS") {
        const Q = ve.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        Q && V.push({
          label: Q[1],
          dir: Q[2],
          coord: parseFloat(Q[3])
        });
      }
      if (ce === "FRAME OBJECT LOADS") {
        const Q = ve.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        Q && I.push({
          line: Q[1],
          story: Q[2],
          type: Q[3],
          dir: Q[4],
          lc: Q[5],
          val: parseFloat(Q[6])
        });
      }
      if (ce === "AREA CONNECTIVITIES") {
        const Q = ve.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (Q) {
          const ze = ((_a = Q[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((X) => X.replace(/"/g, ""))) || [];
          H.push({
            name: Q[1],
            pts: ze,
            nStories: 0
          });
        }
      }
    }
    const G = /* @__PURE__ */ new Map();
    if (z.length > 0) {
      const le = z.length - 1;
      G.set(z[le].name, z[le].elev);
      for (let ve = le - 1; ve >= 0; ve--) {
        const ze = G.get(z[ve + 1].name) + z[ve].height;
        z[ve].elev = ze, G.set(z[ve].name, ze);
      }
    }
    const Z = [], ie = [], ke = /* @__PURE__ */ new Map(), Ce = (le, ve) => `${le}@${ve}`, Pe = /* @__PURE__ */ new Set(), nt = /* @__PURE__ */ new Map();
    for (const le of D) nt.set(le.name, le);
    for (const le of D) for (const [ve, Q] of ue) {
      if (!ve.startsWith(le.name + "@")) continue;
      const ze = Q.story, X = z.findIndex((de) => de.name === ze);
      if (!(X < 0)) if (le.type === "COLUMN" || le.type === "BRACE") {
        Pe.add(Ce(le.pt2, ze));
        const de = Math.max(le.nStories, 1), Ae = Math.min(X + de, z.length - 1);
        Pe.add(Ce(le.pt1, z[Ae].name));
      } else Pe.add(Ce(le.pt1, ze)), Pe.add(Ce(le.pt2, ze));
    }
    for (const [le] of W) Pe.add(le);
    for (const le of Pe) {
      const [ve, Q] = le.split("@"), ze = J.get(ve), X = G.get(Q);
      ze === void 0 || X === void 0 || (Z.push([
        ze[0],
        ze[1],
        X
      ]), ie.push(le), ke.set(le, Z.length - 1));
    }
    const Be = [], ut = [], me = [], Le = [], xe = /* @__PURE__ */ new Map();
    for (const le of D) for (const [ve, Q] of ue) {
      if (!ve.startsWith(le.name + "@")) continue;
      const ze = Q.story, X = z.findIndex((Ke) => Ke.name === ze);
      if (X < 0) continue;
      let de, Ae;
      if (le.type === "COLUMN" || le.type === "BRACE") {
        const Ke = Math.max(le.nStories, 1), st = Math.min(X + Ke, z.length - 1);
        de = Ce(le.pt1, z[st].name), Ae = Ce(le.pt2, ze);
      } else de = Ce(le.pt1, ze), Ae = Ce(le.pt2, ze);
      const ye = ke.get(de), We = ke.get(Ae);
      if (ye === void 0 || We === void 0 || ye === We) continue;
      const He = Be.length;
      if (Be.push([
        ye,
        We
      ]), ut.push(le.name), me.push(le.type), Le.push(ze), xe.set(He, Q.section), Q.rigidZone > 0 && ct.set(He, [
        Q.rigidZone,
        Q.rigidZone
      ]), Q.releases.length > 0) {
        const Ke = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const st of Q.releases) st === "TI" && (Ke[0] = true), st === "M2I" && (Ke[1] = true), st === "M3I" && (Ke[2] = true), st === "TJ" && (Ke[3] = true), st === "M2J" && (Ke[4] = true), st === "M3J" && (Ke[5] = true);
        Tt.set(He, Ke);
      }
    }
    const je = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
    for (const [le, ve] of xe) {
      const Q = R.get(ve);
      if (!Q) continue;
      const ze = Y.get(Q.material);
      ze && (je.set(le, ze.E), Ue.set(le, ze.G));
      const X = Q.D, de = Q.B, Ae = Q.TF, ye = Q.TW;
      let We = 0, He = 0, Ke = 0, st = 0, Ye = 0, zt = 0, Lt = "rect";
      switch (Q.shape) {
        case "Concrete Rectangular":
          We = X * de, He = de * X ** 3 / 12, Ke = X * de ** 3 / 12, st = de * X ** 3 * (1 / 3 - 0.21 * (X / de) * (1 - X ** 4 / (12 * de ** 4))), Ye = zt = 5 / 6 * We, Lt = "rect";
          break;
        case "Concrete Circle":
          We = Math.PI * X ** 2 / 4, He = Ke = Math.PI * X ** 4 / 64, st = Math.PI * X ** 4 / 32, Ye = zt = 0.9 * We, Lt = "circ";
          break;
        case "Steel I/Wide Flange":
          We = 2 * de * Ae + (X - 2 * Ae) * ye, He = (de * X ** 3 - (de - ye) * (X - 2 * Ae) ** 3) / 12, Ke = (2 * Ae * de ** 3 + (X - 2 * Ae) * ye ** 3) / 12, st = (2 * de * Ae ** 3 + (X - 2 * Ae) * ye ** 3) / 3, Ye = (X - 2 * Ae) * ye, zt = 2 * de * Ae * 5 / 6, Lt = "I";
          break;
        case "Steel Tube":
          We = X * de - (X - 2 * ye) * (de - 2 * ye), He = (de * X ** 3 - (de - 2 * ye) * (X - 2 * ye) ** 3) / 12, Ke = (X * de ** 3 - (X - 2 * ye) * (de - 2 * ye) ** 3) / 12, st = 2 * ye * (X - ye) * (de - ye) * ((X - ye) * (de - ye)) / (X - ye + (de - ye)), Ye = 2 * X * ye, zt = 2 * de * ye, Lt = "HSS";
          break;
        case "Filled Steel Tube":
          We = X * de, He = de * X ** 3 / 12, Ke = X * de ** 3 / 12, st = 2 * ye * (X - ye) * (de - ye) * ((X - ye) * (de - ye)) / (X - ye + (de - ye)), Ye = 2 * X * ye + 5 / 6 * (X - 2 * ye) * (de - 2 * ye), zt = 2 * de * ye + 5 / 6 * (X - 2 * ye) * (de - 2 * ye), Lt = "CFT";
          break;
        case "Steel Angle": {
          const yt = Ae || ye;
          We = yt * (X + de - yt), He = yt * (X ** 3 + de * yt ** 2 + yt ** 2 * (X - yt)) / 12, Ke = yt * (de ** 3 + X * yt ** 2 + yt ** 2 * (de - yt)) / 12, st = (X + de - yt) * yt ** 3 / 3, Ye = X * yt, zt = de * yt, Lt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          We = 2 * de * Ae + (X - 2 * Ae) * ye, He = (ye * X ** 3 + 2 * de * Ae * (X - Ae) ** 2) / 12, Ke = (2 * Ae * de ** 3 + (X - 2 * Ae) * ye ** 3) / 12, st = (2 * de * Ae ** 3 + (X - 2 * Ae) * ye ** 3) / 3, Ye = (X - 2 * Ae) * ye, zt = 2 * de * Ae * 5 / 6, Lt = Q.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          We = 2 * (2 * de * Ae + (X - 2 * Ae) * ye), He = 2 * (ye * X ** 3 + 2 * de * Ae * (X - Ae) ** 2) / 12, Ke = 2 * (2 * Ae * de ** 3 + (X - 2 * Ae) * ye ** 3) / 12, st = 2 * (2 * de * Ae ** 3 + (X - 2 * Ae) * ye ** 3) / 3, Ye = 2 * (X - 2 * Ae) * ye, zt = 4 * de * Ae * 5 / 6, Lt = "2C";
          break;
        default:
          X > 0 && de > 0 && (We = X * de, He = de * X ** 3 / 12, Ke = X * de ** 3 / 12, st = Math.min(X, de) * Math.max(X, de) ** 3 / 3 * 0.3, Ye = zt = 5 / 6 * We);
          break;
      }
      Q.modI2 && (Ke *= Q.modI2), Q.modI3 && (He *= Q.modI3), Re.set(le, We), Ot.set(le, He), at.set(le, Ke), Gt.set(le, st), Ye > 0 && Ze.set(le, Ye), zt > 0 && Qe.set(le, zt), Te.set(le, {
        type: Lt,
        b: de || void 0,
        h: X || void 0,
        d: Lt === "circ" || Lt === "pipe" ? X : void 0,
        tw: ye || void 0,
        tf: Ae || void 0,
        r: Q.R,
        name: ve
      });
    }
    const gt = /* @__PURE__ */ new Map();
    for (const [le, ve] of W) {
      const Q = ke.get(le);
      if (Q === void 0) continue;
      const ze = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const X of ve) X === "UX" && (ze[0] = true), X === "UY" && (ze[1] = true), X === "UZ" && (ze[2] = true), X === "RX" && (ze[3] = true), X === "RY" && (ze[4] = true), X === "RZ" && (ze[5] = true);
      gt.set(Q, ze);
    }
    const Et = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map();
    for (let le = 0; le < ut.length; le++) kt.set(`${ut[le]}@${Le[le]}`, le);
    for (const le of I) {
      const ve = kt.get(`${le.line}@${le.story}`);
      if (ve === void 0) continue;
      const [Q, ze] = Be[ve], X = Z[Q], de = Z[ze], Ae = Math.sqrt((de[0] - X[0]) ** 2 + (de[1] - X[1]) ** 2 + (de[2] - X[2]) ** 2);
      if (Ae < 1e-10) continue;
      const ye = le.val * Ae / 2;
      let We = 0, He = 0, Ke = 0;
      le.dir === "GRAV" || le.dir === "GRAVITY" ? Ke = -ye : le.dir === "X" ? We = ye : le.dir === "Y" ? He = ye : le.dir === "Z" && (Ke = -ye);
      for (const st of [
        Q,
        ze
      ]) {
        const Ye = Et.get(st) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ye[0] += We, Ye[1] += He, Ye[2] += Ke, Et.set(st, Ye);
      }
    }
    const mt = /* @__PURE__ */ new Map();
    for (const [le, ve] of xe) {
      const Q = R.get(ve);
      if (!Q) continue;
      const ze = Y.get(Q.material);
      (ze == null ? void 0 : ze.density) && mt.set(le, ze.density);
    }
    return {
      units: j,
      stories: z.reverse(),
      materials: Y,
      frameSections: R,
      nodes: Z,
      nodeNames: ie,
      nodeNameToIdx: ke,
      elements: Be,
      elementNames: ut,
      elementTypes: me,
      elementStories: Le,
      elementSections: xe,
      nodeInputs: {
        supports: gt,
        loads: Et
      },
      elementInputs: {
        elasticities: je,
        shearModuli: Ue,
        areas: Re,
        momentsOfInertiaZ: Ot,
        momentsOfInertiaY: at,
        torsionalConstants: Gt,
        shearAreasY: Ze,
        shearAreasZ: Qe,
        rigidOffsets: ct,
        momentReleases: Tt,
        densities: mt,
        sectionShapes: Te
      },
      sectionShapes: Te,
      grids: V,
      info: {
        nNodes: Z.length,
        nFrames: Be.length,
        nAreas: H.length,
        title: he
      }
    };
  }
  function Fa(e) {
    var _a, _b;
    const { nodes: g, elements: j, nodeInputs: z, elementInputs: Y, title: R, units: J } = e, D = (J == null ? void 0 : J.force) || "TONF", H = (J == null ? void 0 : J.length) || "M", W = [], ue = (me) => Math.round(me * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${D}"  "${H}"  "C"  `), R && W.push(`  TITLE2  "${R}"  `), W.push("");
    const I = /* @__PURE__ */ new Set();
    g.forEach((me) => I.add(ue(me[2])));
    const V = [
      ...I
    ].sort((me, Le) => me - Le), he = [], ce = /* @__PURE__ */ new Map();
    if (V.length > 0) {
      he.push("Base"), ce.set(V[0], "Base");
      for (let me = 1; me < V.length; me++) {
        const Le = `Level_${me}`;
        he.push(Le), ce.set(V[me], Le);
      }
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let me = V.length - 1; me >= 1; me--) {
      const Le = ue(V[me] - V[me - 1]);
      W.push(`  STORY "${he[me]}"  HEIGHT ${Le} MASTERSTORY "Yes"  `);
    }
    V.length > 0 && W.push(`  STORY "Base"  ELEV ${V[0]} `), W.push("");
    const G = /* @__PURE__ */ new Map();
    let Z = 0;
    g.forEach((me) => {
      const Le = `${ue(me[0])},${ue(me[1])}`;
      G.has(Le) || G.set(Le, `${++Z}`);
    });
    const ie = (me) => {
      const Le = g[me], xe = `${ue(Le[0])},${ue(Le[1])}`;
      return {
        pt: G.get(xe) || "1",
        story: ce.get(ue(Le[2])) || "Base"
      };
    };
    W.push("$ MATERIAL PROPERTIES");
    const ke = /* @__PURE__ */ new Set();
    (_a = Y.elasticities) == null ? void 0 : _a.forEach((me) => ke.add(me));
    let Ce = 0;
    const Pe = /* @__PURE__ */ new Map();
    for (const me of ke) {
      const Le = `Mat_${++Ce}`;
      Pe.set(me, Le);
      const xe = 0.3;
      W.push(`  MATERIAL  "${Le}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`), W.push(`  MATERIAL  "${Le}"    SYMTYPE "Isotropic"  E ${me}  U ${xe}  A 1.17E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const nt = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Set();
    j.forEach((me, Le) => {
      var _a2, _b2;
      if (me.length !== 2) return;
      const xe = (_a2 = Y.sectionShapes) == null ? void 0 : _a2.get(Le), je = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(Le)) ?? 0, Ue = Pe.get(je) || "Mat_1";
      let Re = (xe == null ? void 0 : xe.name) || `Sec_${Le}`, Ze = "";
      if (xe) {
        const Qe = xe.h ?? 0, ct = xe.b ?? 0, Tt = xe.d ?? 0, Ot = xe.tf ?? 0, at = xe.tw ?? 0;
        switch (xe.type) {
          case "rect":
            Re = xe.name || `Rect_${ct.toFixed(2)}x${Qe.toFixed(2)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Concrete Rectangular"  D ${Qe} B ${ct} `;
            break;
          case "circ":
            Re = xe.name || `Circ_D${Tt.toFixed(2)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Concrete Circle"  D ${Tt} `;
            break;
          case "I":
            Re = xe.name || `I_${Qe.toFixed(3)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Steel I/Wide Flange"  D ${Qe} B ${ct} TF ${Ot} TW ${at} `;
            break;
          case "HSS":
            Re = xe.name || `HSS_${ct.toFixed(3)}x${Qe.toFixed(3)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Steel Tube"  D ${Qe} B ${ct} TF ${at} TW ${at} `;
            break;
          case "CFT":
            Re = xe.name || `CFT_${ct.toFixed(3)}x${Qe.toFixed(3)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Filled Steel Tube"  D ${Qe} B ${ct} TF ${at} TW ${at} `;
            break;
          case "L":
            Re = xe.name || `L_${(Qe * 1e3).toFixed(0)}x${((xe.t || at) * 1e3).toFixed(0)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Steel Angle"  D ${Qe} B ${ct || Qe} TF ${xe.t || at} TW ${xe.t || at} `;
            break;
          case "C":
          case "coldC":
            Re = xe.name || `C_${(Qe * 1e3).toFixed(0)}x${(ct * 1e3).toFixed(0)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Steel Channel"  D ${Qe} B ${ct} TF ${Ot || xe.t || 0} TW ${at || xe.t || 0} `;
            break;
          case "2C":
            Re = xe.name || `2C_${(Qe * 1e3).toFixed(0)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Steel Double Channel"  D ${Qe} B ${ct} TF ${Ot} TW ${at} DIS ${xe.dis || 0} `;
            break;
          case "pipe":
            Re = xe.name || `Pipe_D${(Tt * 1e3).toFixed(0)}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Steel Pipe"  D ${Tt} TW ${at} `;
            break;
          default:
            Re = xe.name || `Sec_${Le}`, Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
        }
      } else Ze = `  FRAMESECTION  "${Re}"  MATERIAL "${Ue}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
      nt.set(Le, Re), Be.has(Re) || (Be.add(Re), W.push(Ze));
    }), W.push(""), W.push("$ POINT COORDINATES");
    for (const [me, Le] of G) {
      const [xe, je] = me.split(",").map(Number);
      W.push(`  POINT "${Le}"  ${xe} ${je} `);
    }
    W.push(""), W.push("$ LINE CONNECTIVITIES");
    const ut = [];
    return j.forEach((me, Le) => {
      if (me.length !== 2) return;
      const xe = g[me[0]], je = g[me[1]], Ue = Math.abs(je[2] - xe[2]), Re = Math.sqrt((je[0] - xe[0]) ** 2 + (je[1] - xe[1]) ** 2), Ze = Ue > Re * 0.5, ct = Ze && Re > 0.01 ? "BRACE" : Ze ? "COLUMN" : "BEAM", Tt = ie(me[0]), Ot = ie(me[1]);
      let at, Gt;
      if (ct === "BEAM") at = Tt.story, Gt = 0, W.push(`  LINE  "E${Le + 1}"  ${ct}  "${Tt.pt}"  "${Ot.pt}"  ${Gt}`), ut.push(`  LINEASSIGN  "E${Le + 1}"  "${at}"  SECTION "${nt.get(Le) || "Sec_1"}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      else {
        const Te = xe[2] <= je[2] ? me[0] : me[1], gt = xe[2] <= je[2] ? me[1] : me[0], Et = ie(Te), kt = ie(gt), mt = ue(g[Te][2]), le = ue(g[gt][2]), ve = V.indexOf(mt), Q = V.indexOf(le);
        Gt = Math.max(1, Q - ve), at = kt.story, W.push(`  LINE  "E${Le + 1}"  ${ct}  "${Et.pt}"  "${kt.pt}"  ${Gt}`), ut.push(`  LINEASSIGN  "E${Le + 1}"  "${at}"  SECTION "${nt.get(Le) || "Sec_1"}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = z.supports) == null ? void 0 : _b.forEach((me, Le) => {
      const xe = [];
      if (me[0] && xe.push("UX"), me[1] && xe.push("UY"), me[2] && xe.push("UZ"), me[3] && xe.push("RX"), me[4] && xe.push("RY"), me[5] && xe.push("RZ"), xe.length > 0) {
        const je = ie(Le);
        W.push(`  POINTASSIGN  "${je.pt}"  "${je.story}"  RESTRAINT "${xe.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), ut.forEach((me) => W.push(me)), W.push(""), W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1'), W.push('  LOADPATTERN "Live"  TYPE "Live"  '), W.push(""), z.loads && z.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), z.loads.forEach((me, Le) => {
      const [xe, je, Ue] = me, Re = ie(Le);
      Math.abs(xe) > 1e-10 && W.push(`  POINTLOAD  "${Re.pt}"  "${Re.story}"  "Dead"  TYPE "FORCE"  FX ${xe}`), Math.abs(je) > 1e-10 && W.push(`  POINTLOAD  "${Re.pt}"  "${Re.story}"  "Dead"  TYPE "FORCE"  FY ${je}`), Math.abs(Ue) > 1e-10 && W.push(`  POINTLOAD  "${Re.pt}"  "${Re.story}"  "Dead"  TYPE "FORCE"  FZ ${Ue}`);
    }), W.push("")), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function qa(e) {
    var _a, _b;
    const { nodes: g, elements: j, nodeInputs: z, elementInputs: Y } = e, R = [];
    return R.push("# OpenSeesPy model exported from Awatif FEM Studio"), R.push(`# ${g.length} nodes, ${j.length} elements`), R.push(""), R.push("import openseespy.opensees as ops"), R.push(""), R.push("ops.wipe()"), R.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), R.push(""), R.push("# --- Nodes ---"), g.forEach((J, D) => {
      R.push(`ops.node(${D + 1}, ${J[0]}, ${J[1]}, ${J[2]})`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a = z.supports) == null ? void 0 : _a.forEach((J, D) => {
      const H = J.map((W) => W ? 1 : 0).join(", ");
      R.push(`ops.fix(${D + 1}, ${H})`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), R.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), R.push(""), R.push("# --- Elements (elasticBeamColumn) ---"), j.forEach((J, D) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (J.length !== 2) return;
      const H = g[J[0]], W = g[J[1]], I = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, V = ((_a2 = Y.areas) == null ? void 0 : _a2.get(D)) ?? 1, he = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ce = ((_c = Y.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, G = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, Z = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, ie = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      R.push(`ops.element('elasticBeamColumn', ${D + 1}, ${J[0] + 1}, ${J[1] + 1}, ${V}, ${he}, ${ce}, ${G}, ${Z}, ${ie}, ${I})`);
    }), R.push(""), z.loads && z.loads.size > 0 && (R.push("# --- Loads ---"), R.push("ops.timeSeries('Linear', 1)"), R.push("ops.pattern('Plain', 1, 1)"), z.loads.forEach((J, D) => {
      const H = J.map((W) => W).join(", ");
      R.push(`ops.load(${D + 1}, ${H})`);
    }), R.push("")), R.push("# --- Analysis ---"), R.push("ops.system('BandGeneral')"), R.push("ops.numberer('RCM')"), R.push("ops.constraints('Plain')"), R.push("ops.integrator('LoadControl', 1.0)"), R.push("ops.algorithm('Linear')"), R.push("ops.analysis('Static')"), R.push("ops.analyze(1)"), R.push(""), R.push("# --- Results ---"), R.push('print("\\n=== Displacements ===")'), g.forEach((J, D) => {
      R.push(`print(f"Node {${D + 1}}: {ops.nodeDisp(${D + 1})}")`);
    }), R.push(""), R.push('print("\\n=== Reactions ===")'), R.push("ops.reactions()"), (_b = z.supports) == null ? void 0 : _b.forEach((J, D) => {
      R.push(`print(f"Node {${D + 1}}: {ops.nodeReaction(${D + 1})}")`);
    }), R.join(`
`);
  }
  function Aa(e) {
    var _a, _b;
    const { nodes: g, elements: j, nodeInputs: z, elementInputs: Y } = e, R = [];
    return R.push("# OpenSees Tcl model exported from Awatif FEM Studio"), R.push(`# ${g.length} nodes, ${j.length} elements`), R.push(""), R.push("wipe"), R.push("model basic -ndm 3 -ndf 6"), R.push(""), R.push("# --- Nodes ---"), g.forEach((J, D) => {
      R.push(`node ${D + 1} ${J[0]} ${J[1]} ${J[2]}`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a = z.supports) == null ? void 0 : _a.forEach((J, D) => {
      const H = J.map((W) => W ? 1 : 0).join(" ");
      R.push(`fix ${D + 1} ${H}`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("geomTransf Linear 1 0.0 0.0 1.0"), R.push("geomTransf Linear 2 -1.0 0.0 0.0"), R.push(""), R.push("# --- Elements ---"), j.forEach((J, D) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (J.length !== 2) return;
      const H = g[J[0]], W = g[J[1]], I = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, V = ((_a2 = Y.areas) == null ? void 0 : _a2.get(D)) ?? 1, he = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ce = ((_c = Y.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, G = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, Z = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, ie = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      R.push(`element elasticBeamColumn ${D + 1} ${J[0] + 1} ${J[1] + 1} ${V} ${he} ${ce} ${G} ${Z} ${ie} ${I}`);
    }), R.push(""), z.loads && z.loads.size > 0 && (R.push("# --- Loads ---"), R.push("timeSeries Linear 1"), R.push("pattern Plain 1 1 {"), z.loads.forEach((J, D) => {
      const H = J.map((W) => W).join(" ");
      R.push(`  load ${D + 1} ${H}`);
    }), R.push("}"), R.push("")), R.push("# --- Analysis ---"), R.push("system BandGeneral"), R.push("numberer RCM"), R.push("constraints Plain"), R.push("integrator LoadControl 1.0"), R.push("algorithm Linear"), R.push("analysis Static"), R.push("analyze 1"), R.push(""), R.push("# --- Results ---"), R.push('puts "\\n=== Displacements ==="'), g.forEach((J, D) => {
      R.push(`puts "Node ${D + 1}: [nodeDisp ${D + 1}]"`);
    }), R.push('puts "\\n=== Reactions ==="'), R.push("reactions"), (_b = z.supports) == null ? void 0 : _b.forEach((J, D) => {
      R.push(`puts "Node ${D + 1}: [nodeReaction ${D + 1}]"`);
    }), R.join(`
`);
  }
  function Ca(e) {
    const g = [], j = [], z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
    for (const he of e.split(/\r?\n/)) {
      const ce = he.trim(), G = ce.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (G) {
        const Ce = parseInt(G[1]), Pe = g.length;
        g.push([
          parseFloat(G[2]),
          parseFloat(G[3]),
          parseFloat(G[4])
        ]), I.set(Ce, Pe);
        continue;
      }
      const Z = ce.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (Z) {
        const Ce = parseInt(Z[1]), Pe = I.get(Ce);
        Pe !== void 0 && z.set(Pe, [
          Z[2] === "1",
          Z[3] === "1",
          Z[4] === "1",
          Z[5] === "1",
          Z[6] === "1",
          Z[7] === "1"
        ]);
        continue;
      }
      const ie = ce.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const Ce = parseInt(ie[1]), Pe = I.get(parseInt(ie[2])), nt = I.get(parseInt(ie[3]));
        if (Pe !== void 0 && nt !== void 0) {
          const Be = j.length;
          j.push([
            Pe,
            nt
          ]), V.set(Ce, Be), D.set(Be, parseFloat(ie[4])), R.set(Be, parseFloat(ie[5])), J.set(Be, parseFloat(ie[6])), ue.set(Be, parseFloat(ie[7])), H.set(Be, parseFloat(ie[8])), W.set(Be, parseFloat(ie[9]));
        }
        continue;
      }
      const ke = ce.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ke) {
        const Ce = I.get(parseInt(ke[1]));
        Ce !== void 0 && Y.set(Ce, [
          parseFloat(ke[2]),
          parseFloat(ke[3]),
          parseFloat(ke[4]),
          parseFloat(ke[5]),
          parseFloat(ke[6]),
          parseFloat(ke[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: j,
      nodeInputs: {
        supports: z,
        loads: Y
      },
      elementInputs: {
        elasticities: R,
        shearModuli: J,
        areas: D,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: ue
      }
    };
  }
  function Pa(e) {
    const g = [], j = [], z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
    for (const V of e.split(/\r?\n/)) {
      const he = V.trim();
      if (he.startsWith("#") || he.startsWith("//")) continue;
      const ce = he.split(/\s+/);
      if (ce[0] === "node" && ce.length >= 5) {
        const G = parseInt(ce[1]), Z = g.length;
        g.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), I.set(G, Z);
        continue;
      }
      if (ce[0] === "fix" && ce.length >= 8) {
        const G = I.get(parseInt(ce[1]));
        G !== void 0 && z.set(G, [
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
        const G = I.get(parseInt(ce[3])), Z = I.get(parseInt(ce[4]));
        if (G !== void 0 && Z !== void 0) {
          const ie = j.length;
          j.push([
            G,
            Z
          ]), D.set(ie, parseFloat(ce[5])), R.set(ie, parseFloat(ce[6])), J.set(ie, parseFloat(ce[7])), ue.set(ie, parseFloat(ce[8])), H.set(ie, parseFloat(ce[9])), W.set(ie, parseFloat(ce[10]));
        }
        continue;
      }
      if (ce[0] === "load" && ce.length >= 8) {
        const G = I.get(parseInt(ce[1]));
        G !== void 0 && Y.set(G, [
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
      elements: j,
      nodeInputs: {
        supports: z,
        loads: Y
      },
      elementInputs: {
        elasticities: R,
        shearModuli: J,
        areas: D,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: ue
      }
    };
  }
  Ms = ko.state(false);
  Da = function(e) {
    e.nodeInputs || (e.nodeInputs = ko.state({})), e.elementInputs || (e.elementInputs = ko.state({})), e.deformOutputs || (e.deformOutputs = ko.state({})), e.analyzeOutputs || (e.analyzeOutputs = ko.state({}));
    let g = "tonf", j = "m", z = bo(g, j), Y = {
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
    }, J = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
    let H = false;
    const W = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map();
    let I = "", V = {}, he = null, ce = "", G = [], Z = [], ie = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), Be = [], ut = 0.2, me = 2, Le = 2, xe = false, je = 2, Ue = "x", Re = /* @__PURE__ */ new Set(), Ze = true, Qe = 0.15, ct = 2, Tt = 2, Ot = /* @__PURE__ */ new Set();
    const at = () => ({
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
    }), Gt = (t, o) => ({
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
      }, at),
      vigasY: Array.from({
        length: o
      }, at)
    }), Te = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let gt = 0, Et = 3, kt = false, mt = 0, le = null, ve = 0, Q = [], ze = 1, X = true;
    const de = ba();
    de.div.style.display = "none";
    function Ae() {
      const t = Wo()[I];
      return t && t[gt] ? t[gt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let ye = [], We = [], He = null;
    function Ke() {
      if (!He) return;
      const t = tt();
      t && t.scene.remove(He), He.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), He = null;
    }
    function st(t, o, n, l, s) {
      Ke();
      const d = tt();
      if (!d) return;
      He = new kn(), He.name = "gridAxes";
      const a = Math.min(...t), c = Math.max(...t), m = Math.min(...o), r = Math.max(...o), i = c - a || 1, h = r - m || 1, S = Math.max(i, h), w = S * 0.08, x = l || t.map((b, f) => String.fromCharCode(65 + f)), p = s || o.map((b, f) => String(f + 1)), u = S * 0.018, v = o.length <= 1, M = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (v) {
          const y = -w - u * 1.5;
          en(f, 0, 0, f, 0, y + u, M, He), tn(x[b] || `${b}`, f, 0, y, u, He);
        } else {
          const y = m - w - u * 1.5;
          en(f, m, 0, f, y + u, 0, M, He), tn(x[b] || `${b}`, f, y, 0, u, He);
        }
      }
      if (!v) for (let b = 0; b < o.length; b++) {
        const f = o[b], y = a - w - u * 1.5;
        en(a, f, 0, y + u, f, 0, M, He), tn(p[b] || `${b}`, y, f, 0, u, He);
      }
      const $ = u * 1.8, A = w * 1.2, q = w * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], y = t[b + 1], E = Math.abs(y - f), k = (f + y) / 2, O = `${E.toFixed(2)} m`;
        v ? (Zo(O, k, 0, -A, $, He), Qo(f, 0, -A * 0.7, y, 0, -A * 0.7, 16763904, He)) : (Zo(O, k, m - q, 0, $, He), Qo(f, m - q * 0.7, 0, y, m - q * 0.7, 0, 16763904, He));
      }
      if (!v) for (let b = 0; b < o.length - 1; b++) {
        const f = o[b], y = o[b + 1], E = Math.abs(y - f), k = (f + y) / 2, O = `${E.toFixed(2)} m`;
        Zo(O, a - A, k, 0, $, He), Qo(a - A * 0.7, f, 0, a - A * 0.7, y, 0, 16763904, He);
      }
      He.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), d.scene.add(He), d.render();
    }
    let Ye = null;
    function zt() {
      if (!Ye) return;
      const t = tt();
      t && t.scene.remove(Ye), Ye.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ye = null;
    }
    function Lt(t, o, n) {
      if (zt(), t.length === 0) return;
      const l = tt();
      if (!l) return;
      Ye = new kn(), Ye.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), c = Math.max(...n), m = d - s || 1, r = c - a || 1, i = Math.max(m, r), h = i * 0.06, S = n.length <= 1, w = 4491519, x = i * 0.015;
      for (const p of t) {
        const u = p.elev;
        S ? (yt(s - h, 0, u, d + h, 0, u, w, Ye), Cn(p.name, d + h * 1.5, 0, u, x, Ye)) : (yt(s, a, u, d, a, u, w, Ye), yt(d, a, u, d, c, u, w, Ye), yt(d, c, u, s, c, u, w, Ye), yt(s, c, u, s, a, u, w, Ye), Cn(p.name, s - h * 1.5, a, u, x, Ye));
      }
      Ye.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Ye), l.render();
    }
    function yt(t, o, n, l, s, d, a, c) {
      const m = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, r = new io().setFromPoints([
        new Ee(t, o, n),
        new Ee(l, s, d)
      ]), i = new En({
        color: a,
        dashSize: m * 0.02,
        gapSize: m * 0.01,
        transparent: true,
        opacity: 0.5
      }), h = new Ho(r, i);
      h.computeLineDistances(), h.renderOrder = 50, c.add(h);
    }
    function Cn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 512, m = 64;
      a.width = c, a.height = m;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      r.beginPath(), r.moveTo(i, 0), r.lineTo(c - i, 0), r.quadraticCurveTo(c, 0, c, i), r.lineTo(c, m - i), r.quadraticCurveTo(c, m, c - i, m), r.lineTo(i, m), r.quadraticCurveTo(0, m, 0, m - i), r.lineTo(0, i), r.quadraticCurveTo(0, 0, i, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, c / 2, m / 2);
      const h = new In(a);
      h.needsUpdate = true;
      const S = new jo({
        map: h,
        depthTest: false,
        transparent: true
      }), w = new Do(S);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, d.add(w);
    }
    function Zo(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 256, m = 64;
      a.width = c, a.height = m;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      r.beginPath(), r.moveTo(i, 0), r.lineTo(c - i, 0), r.quadraticCurveTo(c, 0, c, i), r.lineTo(c, m - i), r.quadraticCurveTo(c, m, c - i, m), r.lineTo(i, m), r.quadraticCurveTo(0, m, 0, m - i), r.lineTo(0, i), r.quadraticCurveTo(0, 0, i, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, c / 2, m / 2);
      const h = new da(a);
      h.minFilter = pa;
      const S = new jo({
        map: h,
        transparent: true,
        depthTest: false
      }), w = new Do(S);
      w.position.set(o, n, l);
      const x = c / m;
      w.scale.set(s * x, s, 1), w.renderOrder = 999, d.add(w);
    }
    function Qo(t, o, n, l, s, d, a, c) {
      const m = [
        new Ee(t, o, n),
        new Ee(l, s, d)
      ], r = new io().setFromPoints(m), i = new Ao({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), h = new Ho(r, i);
      h.renderOrder = 998, c.add(h);
    }
    function en(t, o, n, l, s, d, a, c) {
      const m = new io().setFromPoints([
        new Ee(t, o, n),
        new Ee(l, s, d)
      ]), r = new En({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new Ho(m, r);
      i.computeLineDistances(), c.add(i);
    }
    function tn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 128;
      a.width = c, a.height = c;
      const m = a.getContext("2d");
      m.beginPath(), m.arc(c / 2, c / 2, c * 0.42, 0, Math.PI * 2), m.fillStyle = "rgba(255,255,255,0.9)", m.fill(), m.lineWidth = c * 0.04, m.strokeStyle = "#555", m.stroke(), m.fillStyle = "#222", m.font = `bold ${c * 0.45}px Arial`, m.textAlign = "center", m.textBaseline = "middle", m.fillText(t, c / 2, c / 2 + c * 0.02);
      const r = new In(a);
      r.needsUpdate = true;
      const i = new jo({
        map: r,
        depthTest: false,
        transparent: true
      }), h = new Do(i);
      h.position.set(o, n, l);
      const S = s * 2;
      h.scale.set(S, S, 1), h.renderOrder = 100, d.add(h);
    }
    const Je = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Ge(), s;
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
        ], l = n.length;
        return n.push([
          t,
          o
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Ge(), l;
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
        }, l = new Map(n.supports || []);
        l.set(t, o || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Ge();
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
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Ge();
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
        var _a, _b, _c, _d, _e, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), ie = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), ye = [], We = [], Ke(), zt();
        const t = $e.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Ge();
      },
      frame(t, o, n = 0, l = 0) {
        Je.clear();
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
        ie = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let p = 0; p < s.length; p++) m(p) || (ie.add(h.length), h.push([
          r[`${p},${x}`],
          r[`${p},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let p = 0; p < s.length - 1; p++) ke.add(h.length), h.push([
          r[`${p},${x}`],
          r[`${p + 1},${x}`]
        ]);
        const S = /* @__PURE__ */ new Map(), w = Ae();
        for (let x = 0; x < s.length; x++) {
          if (m(x)) continue;
          const p = `${x},0`;
          r[p] !== void 0 && S.set(r[p], [
            ...w
          ]);
        }
        return e.nodes.val = i, e.elements.val = h, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), ye = [
          ...s
        ], We = [
          0
        ], setTimeout(() => {
          $t(), st(s, [
            0
          ]), pn(), fn();
        }, 50), Ge(), {
          nodes: i.length,
          elements: h.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, c = 0, m = 1) {
        Je.clear();
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
        for (let f = 0; f < h.length; f++) for (let y = 0; y < i.length; y++) for (let E = 0; E < r.length; E++) f === 0 && x(E, y) || (u[`${E},${y},${f}`] = p.length, p.push([
          r[E],
          i[y],
          h[f]
        ]));
        const v = p.length, M = [];
        ie = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map();
        const $ = [];
        for (let f = 0; f < h.length - 1; f++) for (let y = 0; y < i.length; y++) for (let E = 0; E < r.length; E++) x(E, y) || $.push({
          el: [
            u[`${E},${y},${f}`],
            u[`${E},${y},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, y], floor: E } of $) {
          if (m <= 1) {
            ie.add(M.length), Pe.set(M.length, E), M.push([
              f,
              y
            ]);
            continue;
          }
          const k = p[f], O = p[y];
          let F = f;
          for (let L = 1; L < m; L++) {
            const P = L / m, _ = p.length;
            p.push([
              k[0] + (O[0] - k[0]) * P,
              k[1] + (O[1] - k[1]) * P,
              k[2] + (O[2] - k[2]) * P
            ]), ie.add(M.length), Pe.set(M.length, E), M.push([
              F,
              _
            ]), F = _;
          }
          ie.add(M.length), Pe.set(M.length, E), M.push([
            F,
            y
          ]);
        }
        nt = /* @__PURE__ */ new Map();
        const A = [];
        for (let f = 1; f < h.length; f++) for (let y = 0; y < i.length; y++) for (let E = 0; E < r.length - 1; E++) A.push({
          el: [
            u[`${E},${y},${f}`],
            u[`${E + 1},${y},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: E
        });
        for (let f = 1; f < h.length; f++) for (let y = 0; y < r.length; y++) for (let E = 0; E < i.length - 1; E++) A.push({
          el: [
            u[`${y},${E},${f}`],
            u[`${y},${E + 1},${f}`]
          ],
          floor: f - 1,
          dir: "y",
          bay: E
        });
        for (const { el: [f, y], floor: E, dir: k, bay: O } of A) {
          const F = p[f], L = p[y];
          let P = f;
          for (let te = 1; te < l; te++) {
            const ne = te / l, re = p.length;
            p.push([
              F[0] + (L[0] - F[0]) * ne,
              F[1] + (L[1] - F[1]) * ne,
              F[2] + (L[2] - F[2]) * ne
            ]);
            const ee = M.length;
            ke.add(ee), Pe.set(ee, E), nt.set(ee, {
              dir: k,
              bay: O
            }), M.push([
              P,
              re
            ]), P = re;
          }
          const _ = M.length;
          ke.add(_), Pe.set(_, E), nt.set(_, {
            dir: k,
            bay: O
          }), M.push([
            P,
            y
          ]);
        }
        if (Re = /* @__PURE__ */ new Set(), xe && je > 0) {
          const f = (y, E, k) => {
            for (let F = 0; F < p.length; F++) if (Math.abs(p[F][0] - y) < 1e-6 && Math.abs(p[F][1] - E) < 1e-6 && Math.abs(p[F][2] - k) < 1e-6) return F;
            const O = p.length;
            return p.push([
              y,
              E,
              k
            ]), O;
          };
          for (let y = 1; y < h.length; y++) if (Ue === "x") for (let E = 0; E < i.length - 1; E++) {
            const k = i[E], O = i[E + 1];
            for (let F = 1; F <= je; F++) {
              const L = k + F / (je + 1) * (O - k), P = [];
              for (let _ = 0; _ < r.length; _++) P.push(f(r[_], L, h[y]));
              for (let _ = 0; _ < r.length - 1; _++) {
                const te = M.length;
                Re.add(te), ke.add(te), Pe.set(te, y - 1), nt.set(te, {
                  dir: "x",
                  bay: _
                }), M.push([
                  P[_],
                  P[_ + 1]
                ]);
              }
            }
          }
          else for (let E = 0; E < r.length - 1; E++) {
            const k = r[E], O = r[E + 1];
            for (let F = 1; F <= je; F++) {
              const L = k + F / (je + 1) * (O - k), P = [];
              for (let _ = 0; _ < i.length; _++) P.push(f(L, i[_], h[y]));
              for (let _ = 0; _ < i.length - 1; _++) {
                const te = M.length;
                Re.add(te), ke.add(te), Pe.set(te, y - 1), nt.set(te, {
                  dir: "y",
                  bay: _
                }), M.push([
                  P[_],
                  P[_ + 1]
                ]);
              }
            }
          }
        }
        const q = /* @__PURE__ */ new Map(), b = Ae();
        for (let f = 0; f < i.length; f++) for (let y = 0; y < r.length; y++) x(y, f) || q.set(u[`${y},${f},0`], [
          ...b
        ]);
        Ce = /* @__PURE__ */ new Set();
        for (const f of Be) {
          const y = h.length - 1, E = f.floors.includes(-1) ? Array.from({
            length: y
          }, (k, O) => O) : f.floors.filter((k) => k < y);
          for (const k of E) {
            let O, F, L, P;
            f.dir === "x" ? (O = f.bay, L = f.bay + 1, F = f.axisIdx, P = f.axisIdx) : (O = f.axisIdx, L = f.axisIdx, F = f.bay, P = f.bay + 1);
            const _ = u[`${O},${F},${k}`], te = u[`${O},${F},${k + 1}`];
            let ne, re;
            if (f.dir === "x" ? (ne = u[`${L},${P},${k}`], re = u[`${L},${P},${k + 1}`]) : (ne = u[`${L},${P},${k}`], re = u[`${L},${P},${k + 1}`]), _ === void 0 || ne === void 0 || te === void 0 || re === void 0) continue;
            const ee = Le, U = me, se = p[_], we = p[ne], Ne = p[te], _e = p[re], ae = [];
            for (let ge = 0; ge <= U; ge++) {
              const Se = [], pe = ge / U;
              for (let Fe = 0; Fe <= ee; Fe++) {
                const Oe = Fe / ee, ot = (1 - pe) * ((1 - Oe) * se[0] + Oe * we[0]) + pe * ((1 - Oe) * Ne[0] + Oe * _e[0]), oe = (1 - pe) * ((1 - Oe) * se[1] + Oe * we[1]) + pe * ((1 - Oe) * Ne[1] + Oe * _e[1]), Ie = (1 - pe) * ((1 - Oe) * se[2] + Oe * we[2]) + pe * ((1 - Oe) * Ne[2] + Oe * _e[2]);
                ge === 0 && Fe === 0 ? Se.push(_) : ge === 0 && Fe === ee ? Se.push(ne) : ge === U && Fe === 0 ? Se.push(te) : ge === U && Fe === ee ? Se.push(re) : (Se.push(p.length), p.push([
                  ot,
                  oe,
                  Ie
                ]));
              }
              ae.push(Se);
            }
            for (let ge = 0; ge < U; ge++) for (let Se = 0; Se < ee; Se++) {
              const pe = ae[ge][Se], Fe = ae[ge][Se + 1], Oe = ae[ge + 1][Se + 1], ot = ae[ge + 1][Se], oe = M.length;
              Ce.add(oe), Pe.set(oe, k), M.push([
                pe,
                Fe,
                Oe,
                ot
              ]);
            }
            if (k === 0) for (let ge = 0; ge <= ee; ge++) {
              const Se = ae[0][ge];
              Se >= v && q.set(Se, [
                ...b
              ]);
            }
          }
        }
        if (Ot = /* @__PURE__ */ new Set(), Ze) {
          const f = l, y = l, E = /* @__PURE__ */ new Map(), k = (O, F, L) => `${Math.round(O * 1e4)},${Math.round(F * 1e4)},${Math.round(L * 1e4)}`;
          for (let O = 0; O < p.length; O++) E.set(k(p[O][0], p[O][1], p[O][2]), O);
          for (let O = 1; O < h.length; O++) {
            const F = h[O];
            for (let L = 0; L < r.length - 1; L++) for (let P = 0; P < i.length - 1; P++) {
              const _ = r[L], te = r[L + 1], ne = i[P], re = i[P + 1], ee = [];
              for (let U = 0; U <= y; U++) {
                const se = [];
                for (let we = 0; we <= f; we++) {
                  const Ne = _ + we / f * (te - _), _e = ne + U / y * (re - ne);
                  if (U === 0 && we === 0) se.push(u[`${L},${P},${O}`]);
                  else if (U === 0 && we === f) se.push(u[`${L + 1},${P},${O}`]);
                  else if (U === y && we === 0) se.push(u[`${L},${P + 1},${O}`]);
                  else if (U === y && we === f) se.push(u[`${L + 1},${P + 1},${O}`]);
                  else {
                    const ae = k(Ne, _e, F), ge = E.get(ae);
                    if (ge !== void 0) se.push(ge);
                    else {
                      const Se = p.length;
                      p.push([
                        Ne,
                        _e,
                        F
                      ]), E.set(ae, Se), se.push(Se);
                    }
                  }
                }
                ee.push(se);
              }
              for (let U = 0; U < y; U++) for (let se = 0; se < f; se++) {
                const we = ee[U][se], Ne = ee[U][se + 1], _e = ee[U + 1][se + 1], ae = ee[U + 1][se], ge = M.length;
                Ot.add(ge), Pe.set(ge, O - 1), M.push([
                  we,
                  Ne,
                  _e,
                  ae
                ]);
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
          supports: q
        }), ye = [
          ...r
        ], We = [
          ...i
        ], setTimeout(() => {
          $t(), st(r, i), pn(), fn();
        }, 50), Ge(), {
          nodes: p.length,
          elements: M.length,
          nJointNodes: v
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        Je.clear();
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
        const h = /* @__PURE__ */ new Map(), S = Ae();
        for (let w = 0; w < i; w++) h.set(r[w][0], [
          ...S
        ]), h.set(r[w][1], [
          ...S
        ]);
        return e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
          supports: h
        }), Ge(), {
          nodes: a.length,
          elements: c.length
        };
      },
      example(t) {
        var _a, _b, _c, _d;
        if (!t) {
          console.log("Ejemplos: truss, beams, 3d, portico, edificio, galpon");
          return;
        }
        switch (t) {
          case "truss": {
            Je.clear(), Xe("truss"), On();
            break;
          }
          case "beams": {
            Je.clear(), Xe("beams"), Nn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Je.clear(), Xe("3d"), Rn();
            break;
          }
          case "portico": {
            Xe("frame"), be();
            break;
          }
          case "edificio": {
            Xe("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, Be = [], Ze = false, xe = false, be();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Xe("edificio"), Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, Be = [], xe = true, je = 2;
            const o = G.reduce((l, s) => l + s, 0) / G.length, n = Z.reduce((l, s) => l + s, 0) / Z.length;
            Ue = o >= n ? "y" : "x", Ze = true, Qe = 0.08, be();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Xe("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, xe = false;
            const o = Math.round(((_a = V.nVanosX) == null ? void 0 : _a.val) ?? 2), n = Math.round(((_b = V.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Ze = true, Qe = 0.15, be();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Xe("edificio"), Te.colMat = 2, Te.vigaMat = 0, xe = false;
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
            ], Ze = true, Qe = 0.12, be();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Xe("edificio"), V.nPisos && (V.nPisos.val = 1), V.hPiso && (V.hPiso.val = 4.5), V.nVanosX && (V.nVanosX.val = 3), V.nVanosY && (V.nVanosY.val = 2), V.nSubViga && (V.nSubViga.val = 3), G = [
              6,
              6,
              6
            ], Z = [
              5,
              5
            ], Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, Be = [], xe = true, je = 2, Ue = G[0] >= Z[0] ? "y" : "x", Ze = true, Qe = 0.08, ct = 3, Tt = 3, be();
            break;
          }
          case "galpon": {
            Xe("galpon"), be();
            break;
          }
          case "barra": {
            Xe("barra"), be();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Je.clear(), Xe("placa-3q"), Hn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Je.clear(), Xe("placa-q4"), Bn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Je.clear(), Xe("losa-rect"), Dn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Je.clear(), Xe("losa-plana"), jn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Je.clear(), Xe("viga-alta"), Wn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Je.clear(), Xe("muro-contencion"), Yn();
            break;
          }
          case "zapata":
          case "footing": {
            Je.clear(), Xe("zapata"), Jn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Je.clear(), Xe("placa-orificios"), Gn();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Je.clear(), Xe("col-placa"), Vn();
            break;
          }
          case "talud":
          case "slope": {
            Je.clear(), Xe("talud"), Xn();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Je.clear(), Xe("eiffel"), ds();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Je.clear(), Xe("arco"), ps();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Je.clear(), Xe("puente"), fs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Je.clear(), Xe("twisted"), us();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Je.clear(), Xe("burj"), ms();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Je.clear(), Xe("opera"), bs();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Je.clear(), Xe("diagrid"), hs();
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
        const h = performance.now(), S = Sn({
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
          x.forEach((A, q) => {
            v.has(q) || M.set(q, [
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
          const $ = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
          S.elementResults.forEach((b, f) => {
            $.set(f, [
              b.Mxx,
              b.Mxx,
              b.Mxx
            ]), A.set(f, [
              b.Myy,
              b.Myy,
              b.Myy
            ]), q.set(f, [
              b.Mxy,
              b.Mxy,
              b.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: $,
            bendingYY: A,
            bendingXY: q
          };
        }
        return setTimeout(() => $t(), 50), Ge(), S;
      },
      set(t, o) {
        V[t] ? (V[t].val = o, console.log(`${t} = ${o}`), Dt(), be()) : et[t] ? (et[t].val = o, console.log(`${t} = ${o}`), Dt(), be()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...V,
          ...et
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in V) o[l] = V[l].val;
          for (const l in et) o[l] = et[l].val;
          o.plateTheory = Et, o.supportType = gt;
          const n = Wo()[I];
          return n && n[gt] && (o.supportLabel = n[gt].label), console.table(o), o;
        }
        if (V[t]) return V[t].val;
        if (et[t]) return et[t].val;
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
        }[t.toLowerCase()] || 3), Et = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Et] || Et}`), I.includes("placa") && (Dt(), be());
      },
      setBc(t) {
        const o = Wo()[I];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        gt = t, gt >= o.length && (gt = 0), console.log(`Apoyo: ${o[gt].label} \u2192 DOFs: [${o[gt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Dt(), be();
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
        t && (g = t), o && (j = o), z = bo(g, j);
        const n = $e.querySelector("#cad3d-force-unit"), l = $e.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = j), I && Xe(I), console.log(`Unidades: ${z.label} | E=${z.E.toExponential(3)} ${z.stress}`), z.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Pn() {
      return ua(z);
    }
    function _n() {
      return ma(z);
    }
    let et = {};
    function Xe(t) {
      var _a, _b;
      I = t, Ms.val = true, gt = 0, ve && an(), V = {};
      const o = Pn()[t];
      if (o) for (const l of o) V[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      et = {};
      const n = _n()[t];
      if (n) for (const l of n) et[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a = V.nVanosX) == null ? void 0 : _a.val) ?? 2), s = Math.round(((_b = V.nVanosY) == null ? void 0 : _b.val) ?? 2);
        G = Array(l).fill(z.defaultSpan), Z = Array(s).fill(z.defaultSpan * 0.8);
      }
      Dt(), setTimeout(() => {
        Fs(), be();
      }, 50);
    }
    function B(t) {
      var _a, _b;
      return ((_a = V[t]) == null ? void 0 : _a.val) ?? ((_b = et[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function be() {
      switch (I) {
        case "truss":
          On();
          break;
        case "beams":
          Nn();
          break;
        case "3d":
          Rn();
          break;
        case "frame": {
          const o = Math.round(B("nVanos")), n = B("spanV"), l = Math.round(B("nPisos")), s = B("hPiso");
          Je.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(B("nPisos")), n = B("hPiso"), l = B("Lvix") || 0, s = B("Lvdx") || 0, d = B("Lviy") || 0, a = B("Lvdy") || 0, c = Math.max(1, Math.round(B("nSubViga") || 3)), m = Math.max(1, Math.round(B("nSubCol") || 1));
          Je.building([
            ...G
          ], [
            ...Z
          ], Array(o).fill(n), c, l, s, d, a, m);
          break;
        }
        case "galpon":
          Je.galpon(B("span"), B("length"), B("height"), B("archRise"), Math.round(B("xDiv")), Math.round(B("yDiv")));
          break;
        case "barra":
          ws();
          break;
        case "placa-3q":
          Hn();
          break;
        case "placa-q4":
          Bn();
          break;
        case "losa-rect":
          Dn();
          break;
        case "losa-plana":
          jn();
          break;
        case "viga-alta":
          Wn();
          break;
        case "muro-contencion":
          Yn();
          break;
        case "zapata":
          Jn();
          break;
        case "placa-orificios":
          Gn();
          break;
        case "col-placa":
          Vn();
          break;
        case "talud":
          Xn();
          break;
        case "eiffel":
          ds();
          break;
        case "arco":
          ps();
          break;
        case "puente":
          fs();
          break;
        case "twisted":
          us();
          break;
        case "burj":
          ms();
          break;
        case "opera":
          bs();
          break;
        case "diagrid":
          hs();
          break;
      }
      if ((I === "frame" || I === "edificio" || I === "galpon") && e.nodeInputs) {
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
      ].includes(I)) {
        if (J.size > 0 || D.size > 0 || H) {
          const o = e.elements.val, n = o.filter((l, s) => !(J.has(s) || D.has(s) || H && !W.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Qt(), ln();
        }, 30);
      }
    }
    function On() {
      const t = B("span"), o = Math.round(B("divisions")), n = B("height"), l = t / o, s = [], d = [];
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
      ]), m = (B("CM") ?? 0) + (B("CV") ?? 0), r = /* @__PURE__ */ new Map();
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
      }), Ge();
    }
    function Nn() {
      const t = B("width"), o = B("height"), n = B("Ex") ?? 0, l = (B("CM") ?? 0) + (B("CV") ?? 0), s = Math.max(1, Math.round(B("nSub") || 4)), d = [
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
      }), Ge();
    }
    function Rn() {
      const t = B("dx"), o = B("dy"), n = B("dz"), l = Math.round(B("stories")), s = Math.max(1, Math.round(B("nSub") || 3)), d = [];
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
          const q = A / s, b = c.length;
          c.push([
            v[0] + (M[0] - v[0]) * q,
            v[1] + (M[1] - v[1]) * q,
            v[2] + (M[2] - v[2]) * q
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
      const h = B("Ex") ?? 0, S = (B("CM") ?? 0) + (B("CV") ?? 0), w = a - 2, x = /* @__PURE__ */ new Map();
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
      }), Ge();
    }
    function ws() {
      const t = B("L"), o = Math.round(B("nElem")), n = B("F"), l = t / o, s = [], d = [];
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
      }), Ge();
    }
    function Hn() {
      const t = B("Lx") || 15, o = B("Ly") || 10, n = B("meshSize") || 0.5, l = B("q") || -3, s = B("t") || 1, d = B("E") || 3e7, a = B("nu") || 0.3, c = d / (2 * (1 + a)), m = Et === 1 ? "Membrana" : Et === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: i, boundaryIndices: h } = Ut({
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
        const u = _t(r, i, e.nodeInputs.val, e.elementInputs.val);
        u && e.deformOutputs && (e.deformOutputs.val = u);
        const v = Eo(r, i, e.elementInputs.val, u);
        v && e.analyzeOutputs && (e.analyzeOutputs.val = v), console.log(`Plate 3Q [${m}]: ${r.length} nodes, ${i.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (u) {
        console.warn("Plate 3Q analysis failed:", u.message);
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Bn() {
      const t = B("Lx") || 10, o = B("Ly") || 10, n = Math.round(B("nx") || 16), l = Math.round(B("ny") || 16), s = B("t") || 0.2, d = B("q") || -10, a = B("E") || 3e7, c = B("nu") || 0.3, m = gt === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 0;
      return Je.plateQ4(t, o, n, l, m, d, s, a, c, i);
    }
    function Dn() {
      const t = B("a") || 6, o = B("b") || 4, n = Math.round(B("nx") || 12), l = Math.round(B("ny") || 8), s = B("t") || 0.1, d = B("q") || -10, a = B("E") || 35e6, c = B("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 0, i = Je.plateQ4(t, o, n, l, "simply-supported", d, s, a, c, r), h = a * s * s * s / (12 * (1 - c * c));
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
    function jn() {
      const t = B("t") || 0.2, o = B("q") || -10, n = B("E") || 35e6, l = B("nu") || 0.2, s = B("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], c = d.reduce((F, L) => F + L, 0), m = a.reduce((F, L) => F + L, 0), r = [
        0
      ];
      for (const F of d) r.push(r[r.length - 1] + F);
      const i = [
        0
      ];
      for (const F of a) i.push(i[i.length - 1] + F);
      const h = Math.max(2, Math.round(c / s)), S = Math.max(2, Math.round(m / s)), w = c / h, x = m / S, p = [];
      for (let F = 0; F <= S; F++) for (let L = 0; L <= h; L++) p.push([
        L * w,
        F * x
      ]);
      const u = [], v = /* @__PURE__ */ new Set();
      for (const F of r) for (const L of i) {
        let P = 1 / 0, _ = 0;
        for (let te = 0; te < p.length; te++) {
          const ne = Math.hypot(p[te][0] - F, p[te][1] - L);
          ne < P && (P = ne, _ = te);
        }
        v.has(_) || (v.add(_), u.push({
          node: _,
          dof: 0,
          k: 1e15
        }));
      }
      const $ = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][$]}]: ${c}\xD7${m}m, ${h}\xD7${S} elem, ${v.size} columnas`);
      const A = performance.now(), q = Sn({
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
      console.log(`Solved in ${b.toFixed(1)} ms, w_max = ${q.maxW.toExponential(4)}`);
      const f = q.nodeResults.map((F) => [
        F.x,
        F.y,
        0
      ]), y = q.elementResults.map((F) => [
        ...F.nodes
      ]);
      e.nodes.val = f, e.elements.val = y;
      const E = /* @__PURE__ */ new Map();
      q.nodeResults.forEach((F, L) => {
        E.set(L, [
          0,
          0,
          F.w,
          F.bx,
          F.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: E
      });
      const k = /* @__PURE__ */ new Map();
      for (const F of v) k.set(F, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const O = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const F = o * c * m / f.length;
        f.forEach((L, P) => {
          k.has(P) || O.set(P, [
            0,
            0,
            F,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: k,
        loads: O
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const F = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        q.elementResults.forEach((_, te) => {
          F.set(te, [
            _.Mxx,
            _.Mxx,
            _.Mxx
          ]), L.set(te, [
            _.Myy,
            _.Myy,
            _.Myy
          ]), P.set(te, [
            _.Mxy,
            _.Mxy,
            _.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: F,
          bendingYY: L,
          bendingXY: P
        };
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Wn() {
      const t = B("L") || 4, o = B("H") || 2, n = B("t") || 0.1, l = B("E") || 2e7, s = B("nu") || 0.2, d = l / (2 * (1 + s)), a = B("q") || -100, c = B("b") || 0.8, m = B("meshSize") || 0.2, { nodes: r, elements: i, boundaryIndices: h } = Ut({
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
      }, q = {
        supports: x,
        loads: $
      };
      try {
        const b = _t(S, i, q, A), f = Eo(S, i, A, b), y = S.map((k) => [
          k[0],
          0,
          k[1]
        ]);
        if (e.nodes.val = y, e.elements.val = i, b && b.deformations) {
          const k = /* @__PURE__ */ new Map();
          b.deformations.forEach((O, F) => {
            k.set(F, [
              O[0],
              O[2],
              O[1],
              O[3],
              O[5],
              O[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: k
          });
        }
        if (e.nodeInputs) {
          const k = /* @__PURE__ */ new Map();
          x.forEach((F, L) => k.set(L, F));
          const O = /* @__PURE__ */ new Map();
          $.forEach((F, L) => O.set(L, [
            F[0],
            F[2],
            F[1],
            F[3],
            F[5],
            F[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: k,
            loads: O
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let E = 0;
        b && b.deformations && b.deformations.forEach((k) => {
          const O = Math.sqrt(k[0] * k[0] + k[1] * k[1] + k[2] * k[2]);
          E = Math.max(E, O);
        }), console.log(`Viga Alta: ${S.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${c}m central`), console.log(`  max|u| = ${E.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Yn() {
      const t = B("H") || 4, o = B("B") || 3, n = B("tw") || 0.3, l = B("tb") || 0.4, s = B("meshSize") || 0.2, d = B("E") || 25e6, a = B("nu") || 0.2, c = d / (2 * (1 + a)), m = B("gamma") || 18, r = B("Ka") || 0.33, i = B("Es") || 5e4, h = B("nus") || 0.3, S = i / (2 * (1 + h)), w = B("kn") || 1e6, x = B("ks") || 1e4, p = B("gammaW") || 9.81, u = B("Hw") || 3.5, v = B("qs") || 0, M = gt, $ = o * 0.3, A = o * 0.7, q = [
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
      let b = [], f = [], y = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), k;
      if (M === 0) {
        const L = Ut({
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
        b = L.nodes, f = L.elements;
        for (let _ = 0; _ < b.length; _++) Math.abs(b[_][1]) < 1e-6 && y.set(_, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let _ = 0; _ < b.length; _++) {
          const te = b[_][0], ne = b[_][1];
          Math.abs(te - n) < s * 0.6 && ne >= l - 1e-6 && P.push({
            idx: _,
            y: ne
          });
        }
        P.sort((_, te) => _.y - te.y);
        for (let _ = 0; _ < P.length; _++) {
          const { idx: te, y: ne } = P[_], re = l + t - ne, ee = r * m * re + r * v;
          let U = s;
          _ > 0 && _ < P.length - 1 ? U = (P[_ + 1].y - P[_ - 1].y) / 2 : _ === 0 && P.length > 1 ? U = (P[1].y - P[0].y) / 2 : _ === P.length - 1 && P.length > 1 && (U = (P[_].y - P[_ - 1].y) / 2);
          const se = ee * U;
          Math.abs(se) > 1e-10 && E.set(te, [
            se,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        k = {
          elasticities: new Map(f.map((_, te) => [
            te,
            d
          ])),
          elasticitiesOrthogonal: new Map(f.map((_, te) => [
            te,
            d
          ])),
          thicknesses: new Map(f.map((_, te) => [
            te,
            n
          ])),
          poissonsRatios: new Map(f.map((_, te) => [
            te,
            a
          ])),
          shearModuli: new Map(f.map((_, te) => [
            te,
            c
          ]))
        };
      } else if (M === 1 || M === 2) {
        const L = A, P = l + t;
        if (M === 2) {
          const _ = [
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
          ], te = Math.max(3, Math.ceil((P - l) / s)), ne = [];
          for (let oe = 0; oe <= te; oe++) ne.push([
            n,
            l + oe * (P - l) / te,
            0
          ]);
          const re = Ut({
            points: [
              ..._,
              ...ne
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
          b = re.nodes, f = re.elements;
          const ee = s * 0.4, U = [];
          for (let oe = 0; oe < b.length; oe++) {
            const Ie = b[oe][0], De = b[oe][1];
            Math.abs(Ie - n) < ee && De >= l - ee && U.push(oe);
          }
          U.sort((oe, Ie) => b[oe][1] - b[Ie][1]);
          const se = [
            U[0]
          ];
          for (let oe = 1; oe < U.length; oe++) {
            const Ie = b[U[oe]][1] - b[se[se.length - 1]][1];
            Math.abs(Ie) > s * 0.05 && se.push(U[oe]);
          }
          U.length = 0, U.push(...se);
          const we = /* @__PURE__ */ new Map();
          for (const oe of U) {
            const Ie = b.length;
            b.push([
              b[oe][0],
              b[oe][1],
              b[oe][2]
            ]), we.set(oe, Ie);
          }
          const Ne = f.length, _e = [];
          for (let oe = 0; oe < Ne; oe++) {
            const Ie = f[oe], De = (b[Ie[0]][0] + b[Ie[1]][0] + b[Ie[2]][0]) / 3, rt = (b[Ie[0]][1] + b[Ie[1]][1] + b[Ie[2]][1]) / 3, xt = De >= -$ && De <= A && rt >= 0 && rt <= l, So = De >= 0 && De <= n && rt >= l && rt <= l + t, ao = xt || So;
            if (_e.push(!ao), !ao) for (let Jt = 0; Jt < Ie.length; Jt++) {
              const Xt = we.get(Ie[Jt]);
              Xt !== void 0 && (Ie[Jt] = Xt);
            }
          }
          const ae = f.length;
          for (let oe = 0; oe < U.length - 1; oe++) {
            const Ie = U[oe], De = U[oe + 1], rt = we.get(Ie), xt = we.get(De);
            f.push([
              De,
              Ie,
              rt,
              xt
            ]);
          }
          const ge = f.length - ae, Se = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map();
          for (let oe = 0; oe < Ne; oe++) _e[oe] ? (Se.set(oe, i), pe.set(oe, i), Oe.set(oe, h), ot.set(oe, S), Fe.set(oe, 1)) : (Se.set(oe, d), pe.set(oe, d), Oe.set(oe, a), ot.set(oe, c), Fe.set(oe, 1));
          for (let oe = ae; oe < f.length; oe++) Se.set(oe, w), pe.set(oe, 0), Oe.set(oe, 0), ot.set(oe, x), Fe.set(oe, 0);
          k = {
            elasticities: Se,
            elasticitiesOrthogonal: pe,
            thicknesses: Fe,
            poissonsRatios: Oe,
            shearModuli: ot
          };
          for (let oe = 0; oe < b.length; oe++) {
            const Ie = b[oe][0], De = b[oe][1];
            Math.abs(De) < 1e-6 ? y.set(oe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ie - L) < s * 0.1 && y.set(oe, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let oe = 0; oe < Ne; oe++) {
            if (!_e[oe]) continue;
            const Ie = f[oe], De = b[Ie[0]], rt = b[Ie[1]], xt = b[Ie[2]], So = Math.abs((rt[0] - De[0]) * (xt[1] - De[1]) - (xt[0] - De[0]) * (rt[1] - De[1])) / 2, ao = -m * So / 3;
            for (const Jt of Ie) {
              const Xt = E.get(Jt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Xt[1] += ao, E.set(Jt, Xt);
            }
          }
          if (v > 0) {
            const oe = [];
            for (let Ie = 0; Ie < b.length; Ie++) {
              const De = b[Ie][0], rt = b[Ie][1];
              Math.abs(rt - P) < s * 0.1 && De > n - 1e-6 && oe.push({
                idx: Ie,
                x: De
              });
            }
            oe.sort((Ie, De) => Ie.x - De.x);
            for (let Ie = 0; Ie < oe.length; Ie++) {
              let De = s;
              Ie > 0 && Ie < oe.length - 1 ? De = (oe[Ie + 1].x - oe[Ie - 1].x) / 2 : Ie === 0 && oe.length > 1 ? De = (oe[1].x - oe[0].x) / 2 : Ie === oe.length - 1 && oe.length > 1 && (De = (oe[Ie].x - oe[Ie - 1].x) / 2);
              const rt = -v * De, xt = E.get(oe[Ie].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              xt[1] += rt, E.set(oe[Ie].idx, xt);
            }
          }
          console.log(`  Interfaz Goodman: ${U.length} nodos interfaz, ${ge} elem interfaz, kn=${w}, ks=${x}`);
        } else {
          const _ = [
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
          ], te = [
            [
              n,
              l,
              0
            ]
          ], ne = Ut({
            points: [
              ..._,
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
          b = ne.nodes, f = ne.elements;
          const re = (ae) => {
            const ge = (b[ae[0]][0] + b[ae[1]][0] + b[ae[2]][0]) / 3, Se = (b[ae[0]][1] + b[ae[1]][1] + b[ae[2]][1]) / 3, pe = ge >= -$ && ge <= A && Se >= 0 && Se <= l, Fe = ge >= 0 && ge <= n && Se >= l && Se <= l + t;
            return pe || Fe;
          }, ee = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), _e = [];
          for (let ae = 0; ae < f.length; ae++) {
            const ge = re(f[ae]);
            _e.push(!ge), ge ? (ee.set(ae, d), U.set(ae, d), we.set(ae, a), Ne.set(ae, c), se.set(ae, 1)) : (ee.set(ae, i), U.set(ae, i), we.set(ae, h), Ne.set(ae, S), se.set(ae, 1));
          }
          k = {
            elasticities: ee,
            elasticitiesOrthogonal: U,
            thicknesses: se,
            poissonsRatios: we,
            shearModuli: Ne
          };
          for (let ae = 0; ae < b.length; ae++) {
            const ge = b[ae][0], Se = b[ae][1];
            Math.abs(Se) < 1e-6 ? y.set(ae, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ge - L) < s * 0.1 && y.set(ae, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ae = 0; ae < f.length; ae++) {
            if (!_e[ae]) continue;
            const ge = f[ae], Se = b[ge[0]], pe = b[ge[1]], Fe = b[ge[2]], Oe = Math.abs((pe[0] - Se[0]) * (Fe[1] - Se[1]) - (Fe[0] - Se[0]) * (pe[1] - Se[1])) / 2, ot = -m * Oe / 3;
            for (const oe of ge) {
              const Ie = E.get(oe) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ie[1] += ot, E.set(oe, Ie);
            }
          }
          if (v > 0) {
            const ae = [];
            for (let ge = 0; ge < b.length; ge++) {
              const Se = b[ge][0], pe = b[ge][1];
              Math.abs(pe - P) < s * 0.1 && Se > n - 1e-6 && ae.push({
                idx: ge,
                x: Se
              });
            }
            ae.sort((ge, Se) => ge.x - Se.x);
            for (let ge = 0; ge < ae.length; ge++) {
              let Se = s;
              ge > 0 && ge < ae.length - 1 ? Se = (ae[ge + 1].x - ae[ge - 1].x) / 2 : ge === 0 && ae.length > 1 ? Se = (ae[1].x - ae[0].x) / 2 : ge === ae.length - 1 && ae.length > 1 && (Se = (ae[ge].x - ae[ge - 1].x) / 2);
              const pe = -v * Se, Fe = E.get(ae[ge].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Fe[1] += pe, E.set(ae[ge].idx, Fe);
            }
          }
        }
      }
      if (M === 3) {
        const L = Ut({
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
        b = L.nodes, f = L.elements;
        for (let re = 0; re < b.length; re++) Math.abs(b[re][1]) < 1e-6 && y.set(re, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + t, _ = Math.min(u, t), te = P - _, ne = [];
        for (let re = 0; re < b.length; re++) {
          const ee = b[re][0], U = b[re][1];
          Math.abs(ee - n) < s * 0.6 && U >= l - 1e-6 && ne.push({
            idx: re,
            y: U
          });
        }
        ne.sort((re, ee) => re.y - ee.y);
        for (let re = 0; re < ne.length; re++) {
          const { idx: ee, y: U } = ne[re], se = Math.max(0, P - U);
          if (se <= 0 || U < te - 1e-6) continue;
          const we = Math.min(se, _), Ne = p * we;
          let _e = s;
          re > 0 && re < ne.length - 1 ? _e = (ne[re + 1].y - ne[re - 1].y) / 2 : re === 0 && ne.length > 1 ? _e = (ne[1].y - ne[0].y) / 2 : re === ne.length - 1 && ne.length > 1 && (_e = (ne[re].y - ne[re - 1].y) / 2);
          const ae = Ne * _e;
          Math.abs(ae) > 1e-10 && E.set(ee, [
            ae,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        k = {
          elasticities: new Map(f.map((re, ee) => [
            ee,
            d
          ])),
          elasticitiesOrthogonal: new Map(f.map((re, ee) => [
            ee,
            d
          ])),
          thicknesses: new Map(f.map((re, ee) => [
            ee,
            n
          ])),
          poissonsRatios: new Map(f.map((re, ee) => [
            ee,
            a
          ])),
          shearModuli: new Map(f.map((re, ee) => [
            ee,
            c
          ]))
        };
      }
      const O = {
        supports: y,
        loads: E
      }, F = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const L = _t(b, f, O, k), P = f.filter((se) => se.length === 3), _ = {};
        for (const se of Object.keys(k)) {
          const we = k[se];
          if (we && we instanceof Map) {
            const Ne = /* @__PURE__ */ new Map();
            let _e = 0;
            for (let ae = 0; ae < f.length; ae++) f[ae].length === 3 && (we.has(ae) && Ne.set(_e, we.get(ae)), _e++);
            _[se] = Ne;
          }
        }
        const te = Eo(b, P, _, L), ne = b.map((se) => [
          se[0],
          0,
          se[1]
        ]);
        if (e.nodes.val = ne, e.elements.val = P, L && L.deformations) {
          const se = /* @__PURE__ */ new Map();
          L.deformations.forEach((we, Ne) => {
            se.set(Ne, [
              we[0],
              we[2],
              we[1],
              we[3],
              we[5],
              we[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: se
          });
        }
        const re = /* @__PURE__ */ new Map();
        y.forEach((se, we) => re.set(we, se));
        const ee = /* @__PURE__ */ new Map();
        E.forEach((se, we) => ee.set(we, [
          se[0],
          se[2],
          se[1],
          se[3],
          se[5],
          se[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: re,
          loads: ee
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let U = 0;
        L && L.deformations && L.deformations.forEach((se) => {
          const we = Math.sqrt(se[0] * se[0] + se[1] * se[1] + se[2] * se[2]);
          U = Math.max(U, we);
        }), console.log(`Muro Contencion [${F[M]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${m}, qs=${v}`), M === 1 && console.log(`  Es=${i}, nus=${h}`), M === 2 && console.log(`  Es=${i}, nus=${h}, kn=${w}, ks=${x}`), M === 3 && console.log(`  gammaW=${p}, Hw=${u}`), console.log(`  max|u| = ${U.toExponential(4)}`);
      } catch (L) {
        console.warn("Muro Contencion failed:", L.message);
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Jn() {
      const t = B("Lx") || 2, o = B("Ly") || 2, n = B("t") || 0.5, l = B("colA") || 0.4, s = B("colH") || 1.5, d = Math.round(B("nx") || 8), a = Math.round(B("ny") || 8), c = B("E") || 25e6, m = B("nu") || 0.2, r = B("P") || -500, i = B("Mx") || 0, h = B("My") || 0, S = B("ks") || 2e4, w = t / d, x = o / a, p = t / 2, u = o / 2, v = l / 2, M = [];
      for (let y = 0; y <= a; y++) for (let E = 0; E <= d; E++) {
        const k = y * (d + 1) + E;
        let O = w, F = x;
        (E === 0 || E === d) && (O = w / 2), (y === 0 || y === a) && (F = x / 2), M.push({
          node: k,
          dof: 0,
          k: S * O * F
        });
      }
      let $ = 0;
      for (let y = 0; y <= a; y++) for (let E = 0; E <= d; E++) Math.abs(E * w - p) <= v + 1e-6 && Math.abs(y * x - u) <= v + 1e-6 && $++;
      const A = r / Math.max($, 1), q = [];
      for (let y = 0; y <= a; y++) for (let E = 0; E <= d; E++) {
        const k = E * w, O = y * x;
        Math.abs(k - p) <= v + 1e-6 && Math.abs(O - u) <= v + 1e-6 && q.push({
          node: y * (d + 1) + E,
          dof: 0,
          value: A
        });
      }
      if (Math.abs(i) > 1e-6) {
        const y = v > 1e-6 ? v : x, E = i / y;
        for (let k = 0; k <= a; k++) for (let O = 0; O <= d; O++) {
          const F = O * w, L = k * x;
          if (Math.abs(F - p) <= v + 1e-6 && Math.abs(L - u) <= v + 1e-6) {
            const P = L - u;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              q.push({
                node: k * (d + 1) + O,
                dof: 0,
                value: _ * E / $ * 2
              });
            }
          }
        }
      }
      if (Math.abs(h) > 1e-6) {
        const y = v > 1e-6 ? v : w, E = h / y;
        for (let k = 0; k <= a; k++) for (let O = 0; O <= d; O++) {
          const F = O * w, L = k * x;
          if (Math.abs(F - p) <= v + 1e-6 && Math.abs(L - u) <= v + 1e-6) {
            const P = F - p;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              q.push({
                node: k * (d + 1) + O,
                dof: 0,
                value: _ * E / $ * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[Et] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${r}, Mx=${i}, My=${h}, ks=${S}`);
      try {
        const y = Sn({
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
          pointLoads: q
        });
        console.log(`  Solved: w_max = ${y.maxW.toExponential(4)}`);
        const E = y.nodeResults.map((te) => [
          te.x,
          te.y,
          0
        ]), k = E.length;
        E.push([
          p - v,
          u - v,
          0
        ]), E.push([
          p + v,
          u - v,
          0
        ]), E.push([
          p + v,
          u + v,
          0
        ]), E.push([
          p - v,
          u + v,
          0
        ]), E.push([
          p - v,
          u - v,
          s
        ]), E.push([
          p + v,
          u - v,
          s
        ]), E.push([
          p + v,
          u + v,
          s
        ]), E.push([
          p - v,
          u + v,
          s
        ]);
        const O = y.elementResults.map((te) => [
          ...te.nodes
        ]);
        O.push([
          k,
          k + 4
        ]), O.push([
          k + 1,
          k + 5
        ]), O.push([
          k + 2,
          k + 6
        ]), O.push([
          k + 3,
          k + 7
        ]), O.push([
          k + 4,
          k + 5
        ]), O.push([
          k + 5,
          k + 6
        ]), O.push([
          k + 6,
          k + 7
        ]), O.push([
          k + 7,
          k + 4
        ]), O.push([
          k,
          k + 1
        ]), O.push([
          k + 1,
          k + 2
        ]), O.push([
          k + 2,
          k + 3
        ]), O.push([
          k + 3,
          k
        ]), e.nodes.val = E, e.elements.val = O;
        const F = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((te, ne) => {
          F.set(ne, [
            0,
            0,
            te.w,
            te.bx,
            te.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: F
        });
        const L = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((te, ne) => {
          const re = te.x, ee = te.y;
          (re < 1e-6 || re > t - 1e-6 || ee < 1e-6 || ee > o - 1e-6) && L.set(ne, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const P = /* @__PURE__ */ new Map();
        if (P.set(k + 4, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), P.set(k + 5, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), P.set(k + 6, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), P.set(k + 7, [
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
          const te = y.elementResults.length, ne = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
          y.elementResults.forEach((U, se) => {
            ne.set(se, [
              U.Mxx,
              U.Mxx,
              U.Mxx
            ]), re.set(se, [
              U.Myy,
              U.Myy,
              U.Myy
            ]), ee.set(se, [
              U.Mxy,
              U.Mxy,
              U.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: ne,
            bendingYY: re,
            bendingXY: ee
          };
        }
        const _ = tt();
        _ && (_.settings.shellResults.val = "bendingXX");
      } catch (y) {
        console.warn("Zapata solver failed:", y.message);
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Gn() {
      const t = B("Lx") || 0.4, o = B("Ly") || 0.4, n = B("t") || 0.025, l = B("dBolt") || 0.022, s = B("sx") || 0.28, d = B("sy") || 0.28, a = B("colA") || 0.2, c = B("meshSize") || 8e-3, m = B("E") || 2e8, r = B("nu") || 0.3, i = m / (2 * (1 + r)), h = B("P") || -200, S = Math.round(B("nBolts") || 4), w = t / 2, x = o / 2, p = l / 2, u = a / 2, v = [];
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
      const { nodes: M, elements: $ } = Ut({
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
      }), A = (F, L) => {
        for (const [P, _] of v) if ((F - P) * (F - P) + (L - _) * (L - _) < p * p) return true;
        return false;
      }, q = $.filter((F) => {
        const L = (M[F[0]][0] + M[F[1]][0] + M[F[2]][0]) / 3, P = (M[F[0]][1] + M[F[1]][1] + M[F[2]][1]) / 3;
        return !A(L, P);
      }), b = M, f = /* @__PURE__ */ new Map();
      for (let F = 0; F < b.length; F++) {
        const L = b[F][0], P = b[F][1];
        for (const [_, te] of v) {
          const ne = Math.sqrt((L - _) * (L - _) + (P - te) * (P - te));
          ne >= p * 0.7 && ne <= p * 1.5 && f.set(F, [
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
      let E = 0;
      for (let F = 0; F < b.length; F++) {
        const L = b[F][0], P = b[F][1];
        Math.abs(L - w) <= u && Math.abs(P - x) <= u && E++;
      }
      const k = h / Math.max(E, 1);
      for (let F = 0; F < b.length; F++) {
        const L = b[F][0], P = b[F][1];
        if (Math.abs(L - w) <= u && Math.abs(P - x) <= u) {
          const _ = y.get(F) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          _[2] += k, y.set(F, _);
        }
      }
      const O = {
        elasticities: new Map(q.map((F, L) => [
          L,
          m
        ])),
        elasticitiesOrthogonal: new Map(q.map((F, L) => [
          L,
          m
        ])),
        thicknesses: new Map(q.map((F, L) => [
          L,
          n
        ])),
        poissonsRatios: new Map(q.map((F, L) => [
          L,
          r
        ])),
        shearModuli: new Map(q.map((F, L) => [
          L,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${h} kN, col=${a * 1e3}mm, mesh=${c * 1e3}mm`), console.log(`  ${q.length} triangulos, ${b.length} nodos`);
      try {
        const F = _t(b, q, {
          supports: f,
          loads: y
        }, O), L = Eo(b, q, O, F);
        e.nodes.val = b, e.elements.val = q, F && e.deformOutputs && (e.deformOutputs.val = F), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: y
        }), e.elementInputs && (e.elementInputs.val = {}), L && e.analyzeOutputs && (e.analyzeOutputs.val = L);
        let P = 0;
        F && F.deformations && F.deformations.forEach((_) => {
          const te = Math.sqrt(_[0] * _[0] + _[1] * _[1] + _[2] * _[2]);
          P = Math.max(P, te);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (F) {
        console.warn("Placa Base failed:", F.message);
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Vn() {
      const t = B("colB") || 0.3, o = B("colH") || 0.3, n = B("colT") || 8e-3, l = B("colLen") || 1.5, s = B("Lx") || 0.45, d = B("Ly") || 0.45, a = B("tPlaca") || 0.025, c = B("dBolt") || 0.022, m = B("sx") || 0.32, r = B("sy") || 0.32, i = Math.round(B("nSubColV") || 6), h = Math.round(B("nSubColH") || 4), S = Math.round(B("nSubPlaca") || 10), w = B("E") || 2e8, x = B("nu") || 0.3, p = w / (2 * (1 + x)), u = B("P") || -300, v = s / 2, M = d / 2, $ = c / 2, A = t / 2, q = o / 2, b = [], f = [], y = S, E = s / y, k = d / y, O = (pe, Fe) => Fe * (y + 1) + pe;
      for (let pe = 0; pe <= y; pe++) for (let Fe = 0; Fe <= y; Fe++) b.push([
        Fe * E,
        pe * k,
        0
      ]);
      const F = [
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
      ], L = (pe, Fe) => {
        for (const [Oe, ot] of F) if ((pe - Oe) * (pe - Oe) + (Fe - ot) * (Fe - ot) < $ * $) return true;
        return false;
      }, P = f.length;
      for (let pe = 0; pe < y; pe++) for (let Fe = 0; Fe < y; Fe++) {
        const Oe = (Fe + 0.5) * E, ot = (pe + 0.5) * k;
        L(Oe, ot) || f.push([
          O(Fe, pe),
          O(Fe + 1, pe),
          O(Fe + 1, pe + 1),
          O(Fe, pe + 1)
        ]);
      }
      const _ = f.length - P, te = i, ne = h, re = [
        [
          v - A,
          M - q
        ],
        [
          v + A,
          M - q
        ],
        [
          v + A,
          M + q
        ],
        [
          v - A,
          M + q
        ]
      ], ee = f.length, U = [
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
      ], se = (pe, Fe) => {
        for (let Oe = 0; Oe < (y + 1) * (y + 1); Oe++) if (Math.abs(b[Oe][0] - pe) < E * 0.3 && Math.abs(b[Oe][1] - Fe) < k * 0.3 && Math.abs(b[Oe][2]) < 1e-6) return Oe;
        return -1;
      };
      for (const [pe, Fe] of U) {
        const [Oe, ot] = re[pe], [oe, Ie] = re[Fe], De = [];
        for (let rt = 0; rt <= te; rt++) {
          const xt = [], So = rt / te * l;
          for (let ao = 0; ao <= ne; ao++) {
            const Jt = ao / ne, Xt = Oe + Jt * (oe - Oe), Mn = ot + Jt * (Ie - ot);
            if (rt === 0) {
              const Kt = se(Xt, Mn);
              if (Kt >= 0) {
                xt.push(Kt);
                continue;
              }
            }
            let wn = -1;
            for (let Kt = 0; Kt < b.length; Kt++) if (Math.abs(b[Kt][0] - Xt) < 1e-6 && Math.abs(b[Kt][1] - Mn) < 1e-6 && Math.abs(b[Kt][2] - So) < 1e-6) {
              wn = Kt;
              break;
            }
            wn >= 0 ? xt.push(wn) : (xt.push(b.length), b.push([
              Xt,
              Mn,
              So
            ]));
          }
          De.push(xt);
        }
        for (let rt = 0; rt < te; rt++) for (let xt = 0; xt < ne; xt++) f.push([
          De[rt][xt],
          De[rt][xt + 1],
          De[rt + 1][xt + 1],
          De[rt + 1][xt]
        ]);
      }
      const we = f.length - ee, Ne = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (y + 1) * (y + 1); pe++) {
        const Fe = b[pe][0], Oe = b[pe][1];
        for (const [ot, oe] of F) {
          const Ie = Math.sqrt((Fe - ot) * (Fe - ot) + (Oe - oe) * (Oe - oe));
          Ie >= $ * 0.5 && Ie <= $ * 2 && Ne.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const _e = /* @__PURE__ */ new Map(), ae = [];
      for (let pe = 0; pe < b.length; pe++) Math.abs(b[pe][2] - l) < 1e-6 && ae.push(pe);
      const ge = u / Math.max(ae.length, 1);
      for (const pe of ae) _e.set(pe, [
        0,
        0,
        ge,
        0,
        0,
        0
      ]);
      const Se = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let pe = P; pe < P + _; pe++) Se.elasticities.set(pe, w), Se.poissonsRatios.set(pe, x), Se.thicknesses.set(pe, a), Se.shearModuli.set(pe, p);
      for (let pe = ee; pe < ee + we; pe++) Se.elasticities.set(pe, w), Se.poissonsRatios.set(pe, x), Se.thicknesses.set(pe, n), Se.shearModuli.set(pe, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${c * 1e3}mm`), console.log(`  ${_} Q4 placa + ${we} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${u} kN`);
      try {
        const pe = _t(b, f, {
          supports: Ne,
          loads: _e
        }, Se), Fe = Eo(b, f, Se, pe);
        e.nodes.val = b, e.elements.val = f, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ne,
          loads: _e
        }), e.elementInputs && (e.elementInputs.val = Se), Fe && e.analyzeOutputs && (e.analyzeOutputs.val = Fe);
        let Oe = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((ot) => {
          const oe = Math.sqrt(ot[0] * ot[0] + ot[1] * ot[1] + ot[2] * ot[2]);
          Oe = Math.max(Oe, oe);
        }), console.log(`  max|u| = ${Oe.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ne,
          loads: _e
        });
      }
      setTimeout(() => $t(), 50), Ge();
    }
    function Xn() {
      const t = B("H") || 6, o = B("angle") || 45, n = B("bTop") || 3, l = B("bBot") || 3, s = B("meshSize") || 2, d = B("E") || 5e4, a = B("nu") || 0.3, c = B("gamma") || 18, m = B("c") || 15, r = B("phi") || 30, i = B("qs") || 0, h = t / Math.tan(o * Math.PI / 180), S = l + h + n, w = t, x = [
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
      ], { nodes: p, elements: u } = Ut({
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
      for (let q = 0; q < v.length; q++) {
        const b = v[q][0], f = v[q][1];
        Math.abs(f + w) < 1e-6 ? (M.push({
          node: q,
          fixX: true,
          fixY: true
        }), $.set(q, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(b) < 1e-6 || Math.abs(b - S) < 1e-6) && (M.push({
          node: q,
          fixX: true,
          fixY: false
        }), $.set(q, [
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
        const q = v.map((L) => [
          L[0],
          L[1]
        ]), b = u.map((L) => [
          L[0],
          L[1],
          L[2]
        ]), f = Qs({
          nodes: q,
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
        const E = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.displacements.length; L++) {
          const [P, _] = f.displacements[L];
          E.set(L, [
            P,
            0,
            _,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: E
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), e.elementInputs && (e.elementInputs.val = {});
        const k = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.plasticStrain.length; L++) {
          const P = f.plasticStrain[L];
          k.set(L, [
            P,
            P,
            P
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: k
        });
        let O = 0;
        for (const [L, P] of f.displacements) {
          const _ = Math.sqrt(L * L + P * P);
          O = Math.max(O, _);
        }
        let F = 0;
        for (const L of f.plasticStrain) F = Math.max(F, L);
        console.log(`Talud SRM: ${v.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${m} kPa, \u03C6=${r}\xB0, \u03B3=${c}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${O.toExponential(4)}`), console.log(`  max \u03B5_pl = ${F.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (q) {
        console.warn("Talud SRM failed:", q.message);
      }
      setTimeout(() => $t(), 50), Ge();
    }
    let Bt = null, bt = null, Vt = null;
    function Ss() {
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
    function dt(t) {
      const o = Io.find((n) => n.id === j);
      return t / o.toM;
    }
    function pt(t) {
      const o = Io.find((n) => n.id === j);
      return t * o.toM;
    }
    function co(t) {
      const o = Fn.find((l) => l.id === Y.forceId), n = Io.find((l) => l.id === Y.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function on(t) {
      const o = Fn.find((l) => l.id === Y.forceId), n = Io.find((l) => l.id === Y.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function nn() {
      return Y.label;
    }
    function Es() {
      switch (Io.find((o) => o.id === j).id) {
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
    function ks() {
      const t = co(20594), o = co(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Kn(t, o, n, l, s) {
      const d = Te.steelVigaType, a = d === 0 ? Yo() : Jo();
      if (Te.vigaMat === 0) {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = `b${n}${c}`, i = `h${n}${c}`, h = {};
          h[r] = +dt(m.b).toFixed(2), h[i] = +dt(m.h).toFixed(2), t.addBinding(h, r, {
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
          var _a;
          const m = (_a = c.target) == null ? void 0 : _a.key, r = m == null ? void 0 : m.match(new RegExp(`^b${n}(\\d+)$`)), i = m == null ? void 0 : m.match(new RegExp(`^h${n}(\\d+)$`));
          r && (o[parseInt(r[1])].b = pt(c.value), be()), i && (o[parseInt(i[1])].h = pt(c.value), be());
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
          var _a, _b;
          const r = (_b = (_a = c.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          r && (o[parseInt(r[1])].profileIdx = c.value, be());
        });
      } else if (d === 2) {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = {}, i = `${n}${c}`;
          r[`bf${i}`] = +dt(m.bf ?? 0.2).toFixed(3), r[`h${i}`] = +dt(m.hf ?? 0.4).toFixed(3), r[`tf${i}`] = +dt(m.tf ?? 0.015).toFixed(3), r[`tw${i}`] = +dt(m.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${i}`, {
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
          var _a;
          const m = (_a = c.target) == null ? void 0 : _a.key;
          for (let r = 0; r < o.length; r++) {
            const i = `${n}${r}`;
            m === `bf${i}` && (o[r].bf = pt(c.value), be()), m === `h${i}` && (o[r].hf = pt(c.value), be()), m === `tf${i}` && (o[r].tf = pt(c.value), be()), m === `tw${i}` && (o[r].tw = pt(c.value), be());
          }
        });
      } else {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = {}, i = `${n}${c}`;
          r[`bc${i}`] = +dt(m.bc ?? 0.2).toFixed(3), r[`hc${i}`] = +dt(m.hc ?? 0.3).toFixed(3), r[`t${i}`] = +dt(m.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${i}`, {
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
          var _a;
          const m = (_a = c.target) == null ? void 0 : _a.key;
          for (let r = 0; r < o.length; r++) {
            const i = `${n}${r}`;
            m === `bc${i}` && (o[r].bc = pt(c.value), be()), m === `hc${i}` && (o[r].hc = pt(c.value), be()), m === `t${i}` && (o[r].t = pt(c.value), be());
          }
        });
      }
    }
    function xo() {
      var _a;
      if (bt) {
        try {
          bt.dispose();
        } catch {
        }
        bt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), I !== "edificio" && I !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Ss();
      if (!o) return;
      o.style.display = "";
      const n = z, l = Math.round(((_a = V.nPisos) == null ? void 0 : _a.val) ?? 3), s = Es(), d = ks(), a = G.length || 1, c = Z.length || 1;
      for (; Te.perFloor.length < l; ) {
        const b = Te.perFloor.length > 0 ? JSON.parse(JSON.stringify(Te.perFloor[Te.perFloor.length - 1])) : Gt(a, c);
        Te.perFloor.push(b);
      }
      Te.perFloor.length > l && (Te.perFloor.length = l);
      for (const b of Te.perFloor) {
        for (; b.vigasX.length < a; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : at());
        for (b.vigasX.length > a && (b.vigasX.length = a); b.vigasY.length < c; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : at());
        b.vigasY.length > c && (b.vigasY.length = c);
      }
      bt = new Ro({
        title: `Sections (${n.label})`,
        container: o
      });
      const m = {
        colMat: Te.colMat
      };
      if (bt.addBinding(m, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        Te.colMat = b.value, xo(), be();
      }), Te.colMat === 0) {
        const b = {
          forma: Te.colShape
        };
        bt.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (y) => {
          Te.colShape = y.value, xo(), be();
        });
        const f = {
          fc: +co(Te.fc).toFixed(1)
        };
        bt.addBinding(f, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${nn()})`
        }), bt.on("change", (y) => {
          var _a2;
          ((_a2 = y.target) == null ? void 0 : _a2.key) === "fc" && (Te.fc = on(y.value), be());
        });
      } else if (Te.colMat === 1) {
        const b = {
          colType: Te.steelColType
        };
        bt.addBinding(b, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          Te.steelColType = f.value, xo(), be();
        });
      }
      bt.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: Te.vigaMat
      };
      if (bt.addBinding(r, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        Te.vigaMat = b.value, xo(), be();
      }), Te.vigaMat === 1) {
        const b = {
          vigaType: Te.steelVigaType
        };
        bt.addBinding(b, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          Te.steelVigaType = f.value, xo(), be();
        });
      }
      const i = Te.steelColType === 0 ? Yo() : Jo();
      Te.steelVigaType === 0 ? Yo() : Jo();
      const h = j === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : j === "cm" ? [
        0.5,
        10,
        0.1
      ] : j === "mm" ? [
        5,
        100,
        1
      ] : j === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let b = 0; b < l; b++) {
        const f = Te.perFloor[b], y = bt.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (Te.colMat === 0) if (Te.colShape === 1) {
          const E = {
            dCol: +dt(f.dCol).toFixed(2)
          };
          y.addBinding(E, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), y.on("change", (k) => {
            var _a2;
            ((_a2 = k.target) == null ? void 0 : _a2.key) === "dCol" && (f.dCol = pt(k.value), be());
          });
        } else {
          const E = {
            bCol: +dt(f.bCol).toFixed(2),
            hCol: +dt(f.hCol).toFixed(2)
          };
          y.addBinding(E, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), y.addBinding(E, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), y.on("change", (k) => {
            var _a2, _b;
            ((_a2 = k.target) == null ? void 0 : _a2.key) === "bCol" && (f.bCol = pt(k.value), be()), ((_b = k.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = pt(k.value), be());
          });
        }
        else if (Te.colMat === 1) if (Te.steelColType <= 1) {
          const E = {
            col: f.colProfileIdx
          };
          y.addBinding(E, "col", {
            label: "Columna",
            options: i
          }).on("change", (k) => {
            f.colProfileIdx = k.value, be();
          });
        } else if (Te.steelColType === 2) {
          const E = {
            bf: +dt(f.colBf ?? 0.3).toFixed(3),
            h: +dt(f.colHf ?? 0.3).toFixed(3),
            tf: +dt(f.colTf ?? 0.02).toFixed(3),
            tw: +dt(f.colTw ?? 0.012).toFixed(3)
          };
          y.addBinding(E, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), y.addBinding(E, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), y.addBinding(E, "tf", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col tf"
          }), y.addBinding(E, "tw", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col tw"
          }), y.on("change", (k) => {
            var _a2, _b, _c, _d;
            ((_a2 = k.target) == null ? void 0 : _a2.key) === "bf" && (f.colBf = pt(k.value), be()), ((_b = k.target) == null ? void 0 : _b.key) === "h" && (f.colHf = pt(k.value), be()), ((_c = k.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = pt(k.value), be()), ((_d = k.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = pt(k.value), be());
          });
        } else {
          const E = {
            bc: +dt(f.colBc ?? 0.3).toFixed(3),
            hc: +dt(f.colHc ?? 0.3).toFixed(3),
            t: +dt(f.colT ?? 0.01).toFixed(3)
          };
          y.addBinding(E, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), y.addBinding(E, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), y.addBinding(E, "t", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col t"
          }), y.on("change", (k) => {
            var _a2, _b, _c;
            ((_a2 = k.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = pt(k.value), be()), ((_b = k.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = pt(k.value), be()), ((_c = k.target) == null ? void 0 : _c.key) === "t" && (f.colT = pt(k.value), be());
          });
        }
        else {
          const E = {
            bc: +dt(f.colBc ?? 0.3).toFixed(3),
            hc: +dt(f.colHc ?? 0.3).toFixed(3),
            t: +dt(f.colT ?? 0.01).toFixed(3),
            Es: +co(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +co(f.colFc ?? 28e3).toFixed(1),
            nuC: f.colNuC ?? 0.2
          };
          y.addBinding(E, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), y.addBinding(E, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), y.addBinding(E, "t", {
            min: h[0],
            max: h[1],
            step: h[2],
            label: "Col t"
          }), y.addBlade({
            view: "separator"
          });
          const k = +co(1e8).toFixed(0), O = +co(3e8).toFixed(0), F = Math.max(1, Math.round((O - k) / 200));
          y.addBinding(E, "Es", {
            min: k,
            max: O,
            step: F,
            label: `Es (${nn()})`
          }), y.addBinding(E, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), y.addBinding(E, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${nn()})`
          }), y.addBinding(E, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), y.on("change", (L) => {
            var _a2, _b, _c, _d, _e, _f, _g;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = pt(L.value), be()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = pt(L.value), be()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = pt(L.value), be()), ((_d = L.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = on(L.value), be()), ((_e = L.target) == null ? void 0 : _e.key) === "nuS" && (f.colNuS = L.value, be()), ((_f = L.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = on(L.value), be()), ((_g = L.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = L.value, be());
          });
        }
        if (f.vigasX.length > 0) {
          const E = y.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Kn(E, f.vigasX, "x", s, h);
        }
        if (f.vigasY.length > 0) {
          const E = y.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Kn(E, f.vigasY, "y", s, h);
        }
      }
      bt.addBlade({
        view: "separator"
      });
      const S = bt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: xe,
        direccion: Ue === "x" ? 0 : 1,
        cantidad: je
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
        var _a2, _b, _c;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (xe = b.value, be()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (Ue = b.value === 0 ? "x" : "y", be()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (je = Math.round(b.value), be());
      }), bt.addBlade({
        view: "separator"
      });
      const x = bt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: Ze,
        espesor: +dt(Qe).toFixed(3),
        subdivX: ct,
        subdivY: Tt
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
        var _a2, _b, _c, _d;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (Ze = b.value, be()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && (Qe = pt(b.value), be()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (ct = Math.round(b.value), be()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (Tt = Math.round(b.value), be());
      }), bt.addBlade({
        view: "separator"
      });
      const u = bt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), v = {
        espesor: +dt(ut).toFixed(3),
        subdivH: me,
        subdivW: Le
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
        var _a2, _b, _c;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "espesor" && (ut = pt(b.value), be()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (me = Math.round(b.value), be()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (Le = Math.round(b.value), be());
      });
      const M = G.length || 1, $ = Z.length || 1, A = M + 1, q = $ + 1;
      if (M > 0) {
        const b = u.addFolder({
          title: `Muros dir X (${M} vanos)`,
          expanded: false
        });
        for (let f = 0; f < M; f++) for (let y = 0; y < q; y++) {
          const E = `wx_${f}_${y}`, k = Be.some((L) => L.dir === "x" && L.bay === f && L.axisIdx === y), O = {};
          O[E] = k;
          const F = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + y)}`;
          b.addBinding(O, E, {
            label: F
          }).on("change", (L) => {
            L.value ? Be.push({
              dir: "x",
              bay: f,
              axisIdx: y,
              floors: [
                -1
              ]
            }) : Be = Be.filter((P) => !(P.dir === "x" && P.bay === f && P.axisIdx === y)), be();
          });
        }
      }
      if ($ > 0) {
        const b = u.addFolder({
          title: `Muros dir Y (${$} vanos)`,
          expanded: false
        });
        for (let f = 0; f < $; f++) for (let y = 0; y < A; y++) {
          const E = `wy_${f}_${y}`, k = Be.some((L) => L.dir === "y" && L.bay === f && L.axisIdx === y), O = {};
          O[E] = k;
          const F = `Vano Y${f + 1} / Eje X${y + 1}`;
          b.addBinding(O, E, {
            label: F
          }).on("change", (L) => {
            L.value ? Be.push({
              dir: "y",
              bay: f,
              axisIdx: y,
              floors: [
                -1
              ]
            }) : Be = Be.filter((P) => !(P.dir === "y" && P.bay === f && P.axisIdx === y)), be();
          });
        }
      }
      if (Be.length > 0) {
        u.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${Be.length} ubicaciones`
        };
        u.addBinding(b, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Dt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ce || (ce = t.innerHTML), he) {
        try {
          he.dispose();
        } catch {
        }
        he = null;
      }
      if (Bt) {
        try {
          Bt.dispose();
        } catch {
        }
        Bt = null;
      }
      t.innerHTML = "";
      const o = I.charAt(0).toUpperCase() + I.slice(1);
      he = new Ro({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Pn()[I];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = V[a.key].val;
        for (const a of n) he.addBinding(s, a.key, {
          min: V[a.key].min,
          max: V[a.key].max,
          step: V[a.key].step,
          label: V[a.key].label
        });
        const d = he.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const c = {
            min: V[a.key].min,
            max: V[a.key].max
          };
          d.addBinding(c, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(c, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            V[a.key] && (V[a.key].min = c.min, V[a.key].max = c.max, V[a.key].val < c.min && (V[a.key].val = c.min), V[a.key].val > c.max && (V[a.key].val = c.max)), Dt(), be();
          });
        }
        he.on("change", (a) => {
          var _a;
          const c = (_a = a.target) == null ? void 0 : _a.key;
          if (c && V[c]) {
            if (V[c].val = a.value, I === "edificio" && (c === "nVanosX" || c === "nVanosY" || c === "nPisos")) {
              if (c === "nVanosX" || c === "nVanosY") {
                const m = Math.round(V.nVanosX.val), r = Math.round(V.nVanosY.val);
                for (; G.length < m; ) G.push(G[G.length - 1] ?? z.defaultSpan);
                for (G.length > m && (G.length = m); Z.length < r; ) Z.push(Z[Z.length - 1] ?? z.defaultSpan * 0.8);
                Z.length > r && (Z.length = r);
              }
              Dt();
            }
            be();
          }
        });
      }
      if (I === "edificio") {
        if (Vt) {
          try {
            Vt.dispose();
          } catch {
          }
          Vt = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const d = z;
          Vt = new Ro({
            title: `Luces (${d.length})`,
            container: s
          });
          const a = Vt.addFolder({
            title: "Luces X",
            expanded: true
          }), c = {};
          for (let i = 0; i < G.length; i++) c[`svx_${i + 1}`] = G[i];
          for (let i = 0; i < G.length; i++) a.addBinding(c, `svx_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a, _b;
            const S = (_b = (_a = i.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            S && (G[parseInt(S[1]) - 1] = i.value, be());
          });
          const m = Vt.addFolder({
            title: "Luces Y",
            expanded: true
          }), r = {};
          for (let i = 0; i < Z.length; i++) r[`svy_${i + 1}`] = Z[i];
          for (let i = 0; i < Z.length; i++) m.addBinding(r, `svy_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svy${i + 1}`
          });
          m.on("change", (i) => {
            var _a, _b;
            const S = (_b = (_a = i.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            S && (Z[parseInt(S[1]) - 1] = i.value, be());
          });
        }
      }
      if (xo(), he) {
        he.addBlade({
          view: "separator"
        });
        const s = Wo()[I];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((c, m) => {
            d[c.label] = m;
          });
          const a = {
            apoyo: gt
          };
          he.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (c) => {
            gt = c.value, be();
          });
        }
        if (I === "placa-3q" || I === "placa-q4") {
          const d = {
            teoria: Et
          };
          he.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Et = a.value, be();
          });
        }
      }
      const l = _n()[I];
      if (l && l.length > 0) {
        Bt = new Ro({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = et[a.key].val;
        for (const a of l) Bt.addBinding(s, a.key, {
          min: et[a.key].min,
          max: et[a.key].max,
          step: et[a.key].step,
          label: et[a.key].label
        });
        const d = Bt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const c = {
            min: et[a.key].min,
            max: et[a.key].max
          };
          d.addBinding(c, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(c, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            et[a.key] && (et[a.key].min = c.min, et[a.key].max = c.max, et[a.key].val < c.min && (et[a.key].val = c.min), et[a.key].val > c.max && (et[a.key].val = c.max)), Dt(), be();
          });
        }
        Bt.on("change", (a) => {
          var _a;
          const c = (_a = a.target) == null ? void 0 : _a.key;
          if (c && et[c]) {
            if (et[c].val = a.value, e.nodeInputs) {
              const m = e.nodeInputs.val;
              m.supports && (e.nodeInputs.val = {
                supports: m.supports
              });
            }
            setTimeout(() => ln(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (V[s]) V[s].val = d, be(), Dt();
          else if (et[s]) {
            if (et[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              ln(), Dt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in V) s[d] = V[d].val;
          for (const d in et) s[d] = et[d].val;
          return s;
        },
        setGenerator: Xe
      };
    }
    function Is() {
      if (he) {
        try {
          he.dispose();
        } catch {
        }
        he = null;
      }
      if (Bt) {
        try {
          Bt.dispose();
        } catch {
        }
        Bt = null;
      }
      if (bt) {
        try {
          bt.dispose();
        } catch {
        }
        bt = null;
      }
      if (Vt) {
        try {
          Vt.dispose();
        } catch {
        }
        Vt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ce && (n.innerHTML = ce);
    }
    const $e = document.createElement("div");
    $e.id = "cad3d-panel";
    const Un = document.createElement("style");
    Un.textContent = `
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
  `, document.head.appendChild(Un), ta() === "light" && document.documentElement.classList.add("awatif-light"), oa((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), I && $t(true);
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
    let ht = null;
    function zs() {
      var _a, _b, _c, _d, _e, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a = e.nodeInputs) == null ? void 0 : _a.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = j, d = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${I || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((r, i) => {
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
            var _a2;
            const x = (_a2 = w.map) == null ? void 0 : _a2.get(h);
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
      }), a.push("")), I) {
        a.push("## CLI COMMAND");
        const r = Object.entries(V).map(([i, h]) => `${i}=${h.val}`).join(" ");
        a.push(`cad.${I === "edificio" ? "building" : I}(${r})`);
      }
      return a.join(`
`);
    }
    let To = false;
    function Ts() {
      var _a, _b, _c, _d;
      if (ht) {
        ht.remove(), ht = null, To = false;
        return;
      }
      const t = zs();
      ht = document.createElement("div"), ht.id = "export-overlay", ht.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, ht.innerHTML = `
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
    `, document.body.appendChild(ht), (_a = ht.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        ht == null ? void 0 : ht.remove(), ht = null, To = false;
      }), (_b = ht.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = ht.querySelector("#export-body"), n = ht.querySelector("#export-minimize");
        To = !To, To ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", ht.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", ht.style.width = "720px");
      }), (_c = ht.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = ht.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = ht.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = ht.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: I || "custom",
          units: {
            force: g,
            length: j
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
        const m = ht.querySelector("#export-text");
        m.value = JSON.stringify(d, null, 2);
        const r = ht.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ge() {
      var _a, _b, _c;
      const t = $e.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, c = 0;
        for (const r of n) r.length === 2 ? d++ : r.length === 3 ? a++ : r.length === 4 && c++;
        let m = `${o}n ${l}e ${s}s`;
        (c > 0 || a > 0) && (m += ` | ${d}fr`, c > 0 && (m += ` ${c}q4`), a > 0 && (m += ` ${a}tri`)), t.textContent = m;
      }
    }
    function sn() {
      var _a;
      if (!kt || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = Zs(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          le = d, Q = t.map((r) => [
            ...r
          ]), mt = 0;
          const { extent: a } = eo(), c = (_a = d.modeShapes) == null ? void 0 : _a[0];
          if (c) {
            let r = 0;
            for (let i = 0; i < t.length; i++) {
              const h = c[i * 6] || 0, S = c[i * 6 + 1] || 0, w = c[i * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(h * h + S * S + w * w));
            }
            ze = r > 1e-12 ? a * 0.05 / r : 1;
          }
          const m = `${I} \u2014 ${t.length}n ${o.length}e`;
          de.render(d, {
            title: m
          }), de.div.style.display = "", Lo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), le = null;
      }
    }
    function an() {
      ve && (cancelAnimationFrame(ve), ve = 0), Q.length > 0 && (e.nodes.val = Q.map((t) => [
        ...t
      ])), de.div.style.display = "none", le = null;
    }
    function Lo() {
      var _a;
      if (ve && cancelAnimationFrame(ve), !(le == null ? void 0 : le.modeShapes) || !Q.length) return;
      const t = le.modeShapes[mt];
      if (!t) return;
      const o = ((_a = le.frequencies) == null ? void 0 : _a[mt]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = Q.length, d = e.elements.rawVal, { extent: a } = eo(), c = $e.querySelector("#cad3d-modal-scale"), m = c && parseFloat(c.value) || 5;
      let r = 0;
      for (let $ = 0; $ < s; $++) {
        const A = t[$ * 6] || 0, q = t[$ * 6 + 1] || 0, b = t[$ * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(A * A + q * q + b * b));
      }
      const i = r > 1e-12 ? a * m / 100 / r : 1, h = tt();
      if (!h) return;
      let S = null, w = null, x = null;
      h.scene.traverse(($) => {
        var _a2, _b;
        !S && $.isPoints && $.geometry && (S = $), !w && $.isLineSegments && $.geometry && !$.name && (w = $), !x && $.isMesh && ((_a2 = $.material) == null ? void 0 : _a2.transparent) && ((_b = $.material) == null ? void 0 : _b.opacity) < 0.5 && $.geometry && (x = $);
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
        for (let q = 0; q < s; q++) {
          const b = Q[q];
          p[q * 3] = b[0] + (t[q * 6] || 0) * A, p[q * 3 + 1] = b[1] + (t[q * 6 + 1] || 0) * A, p[q * 3 + 2] = b[2] + (t[q * 6 + 2] || 0) * A;
        }
        if (S) {
          const q = S.geometry, b = q.getAttribute("position");
          b && b.array.length === p.length ? (b.array.set(p), b.needsUpdate = true) : q.setAttribute("position", new uo(p.slice(), 3));
        }
        if (w) {
          for (let f = 0; f < u.length; f++) {
            const [y, E] = u[f];
            v[f * 6] = p[y * 3], v[f * 6 + 1] = p[y * 3 + 1], v[f * 6 + 2] = p[y * 3 + 2], v[f * 6 + 3] = p[E * 3], v[f * 6 + 4] = p[E * 3 + 1], v[f * 6 + 5] = p[E * 3 + 2];
          }
          const q = w.geometry, b = q.getAttribute("position");
          b && b.array.length === v.length ? (b.array.set(v), b.needsUpdate = true) : q.setAttribute("position", new uo(v.slice(), 3));
        }
        if (x) {
          const q = [];
          for (const b of d) if (b.length === 3) {
            const [f, y, E] = b;
            q.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), q.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]);
          } else if (b.length === 4) {
            const [f, y, E, k] = b;
            q.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), q.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]), q.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), q.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]), q.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]);
          }
          if (q.length > 0) {
            const b = x.geometry, f = new Float32Array(q), y = b.getAttribute("position");
            y && y.array.length === f.length ? (y.array.set(f), y.needsUpdate = true) : b.setAttribute("position", new uo(f, 3));
          }
        }
        h.render(), ve = requestAnimationFrame(M);
      }
      ve = requestAnimationFrame(M);
    }
    function ln() {
      var _a, _b, _c, _d, _e;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = B("CM") ?? 0, p = B("CV") ?? 0, u = x + p, v = B("Ex") ?? 0, M = B("Ey") ?? 0;
        if (u === 0 && v === 0 && M === 0) return;
        const $ = /* @__PURE__ */ new Map(), A = [];
        for (let L = 0; L < t.length; L++) n.supports.has(L) || A.push(L);
        const q = (L) => Math.round(L * 1e3) / 1e3, b = /* @__PURE__ */ new Set();
        n.supports.forEach((L, P) => {
          b.add(`${q(t[P][0])},${q(t[P][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const L of A) b.has(`${q(t[L][0])},${q(t[L][1])}`) && f.add(L);
        const y = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
        if (v !== 0 || M !== 0) {
          let L = -1 / 0, P = -1 / 0;
          for (const te of f) L = Math.max(L, q(t[te][0])), P = Math.max(P, q(t[te][1]));
          const _ = /* @__PURE__ */ new Map();
          for (const te of f) {
            const ne = q(t[te][2]);
            _.has(ne) || _.set(ne, []), _.get(ne).push(te);
          }
          _.forEach((te) => {
            if (v !== 0) {
              const ne = /* @__PURE__ */ new Set();
              for (const re of te) if (q(t[re][0]) === L) {
                const ee = q(t[re][1]);
                ne.has(ee) || (ne.add(ee), y.add(re));
              }
            }
            if (M !== 0) {
              const ne = /* @__PURE__ */ new Set();
              for (const re of te) if (q(t[re][1]) === P) {
                const ee = q(t[re][0]);
                ne.has(ee) || (ne.add(ee), E.add(re));
              }
            }
          });
        }
        const k = 9.81, O = /* @__PURE__ */ new Map();
        for (let L = 0; L < o.length; L++) {
          const P = o[L], _ = ((_a = l.densities) == null ? void 0 : _a.get(L)) ?? 0;
          if (!(Math.abs(_) < 1e-15)) {
            if (P.length === 2) {
              const te = ((_b = l.areas) == null ? void 0 : _b.get(L)) ?? 0, ne = t[P[0]], re = t[P[1]], ee = Math.sqrt((re[0] - ne[0]) ** 2 + (re[1] - ne[1]) ** 2 + (re[2] - ne[2]) ** 2), se = -(_ * te * ee * k) / 2;
              O.set(P[0], (O.get(P[0]) ?? 0) + se), O.set(P[1], (O.get(P[1]) ?? 0) + se);
            } else if (P.length >= 3) {
              const te = ((_c = l.thicknesses) == null ? void 0 : _c.get(L)) ?? 0;
              let ne = 0;
              if (P.length === 3) {
                const [U, se, we] = P.map((Ne) => t[Ne]);
                ne = 0.5 * Math.abs((se[0] - U[0]) * (we[1] - U[1]) - (we[0] - U[0]) * (se[1] - U[1]));
              } else if (P.length === 4) {
                const [U, se, we, Ne] = P.map((_e2) => t[_e2]);
                if (ne = 0.5 * Math.abs((se[0] - U[0]) * (we[1] - U[1]) - (we[0] - U[0]) * (se[1] - U[1])) + 0.5 * Math.abs((we[0] - U[0]) * (Ne[1] - U[1]) - (Ne[0] - U[0]) * (we[1] - U[1])), ne < 1e-10) {
                  const _e2 = [
                    se[0] - U[0],
                    se[1] - U[1],
                    se[2] - U[2]
                  ], ae = [
                    Ne[0] - U[0],
                    Ne[1] - U[1],
                    Ne[2] - U[2]
                  ], ge = [
                    _e2[1] * ae[2] - _e2[2] * ae[1],
                    _e2[2] * ae[0] - _e2[0] * ae[2],
                    _e2[0] * ae[1] - _e2[1] * ae[0]
                  ];
                  ne = Math.sqrt(ge[0] ** 2 + ge[1] ** 2 + ge[2] ** 2);
                }
              }
              const ee = -(_ * te * ne * k) / P.length;
              for (const U of P) O.set(U, (O.get(U) ?? 0) + ee);
            }
          }
        }
        const F = /* @__PURE__ */ new Set();
        for (const L of o) L.length === 2 && (F.add(L[0]), F.add(L[1]));
        for (const L of A) {
          const P = y.has(L) ? v : 0, _ = E.has(L) ? M : 0, te = O.get(L) ?? 0, ne = F.has(L) ? u : 0, re = te + ne;
          (P !== 0 || _ !== 0 || Math.abs(re) > 1e-10) && $.set(L, [
            P,
            _,
            re,
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
        const x = _t(t, o, n, l), p = performance.now() - s;
        if (x) {
          e.deformOutputs.val = x, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let u = 0, v = -1, M = 0, $ = 0;
          x.deformations && x.deformations.forEach((y, E) => {
            const k = Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]);
            k > u && (u = k, v = E, M = y[0], $ = y[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${u.toExponential(3)}</b> m <span style="color:#666">(nodo ${v})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(M * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${($ * 1e3).toFixed(4)} mm`);
          const A = performance.now(), q = Eo(t, o, l, x), b = performance.now() - A;
          q && (e.analyzeOutputs.val = q, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const p = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), kt && setTimeout(() => sn(), 50);
    }
    function rn(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), c = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: c
      };
    }
    function Zn(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function cn(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, c = (2 * n * t * t * t + s * l * l * l) / 12, m = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: c,
        J: m
      };
    }
    function dn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, c = (o * t * t * t - s * l * l * l) / 12, m = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), i = 4 * m * m / (r > 0 ? r : 1);
      return {
        A: d,
        Iz: a,
        Iy: c,
        J: i
      };
    }
    function Ls(t, o, n, l, s, d, a) {
      const m = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, r = t - 2 * n, i = o - 2 * n, h = t * o - r * i, S = (t * o * o * o - r * i * i * i) / 12, w = (o * t * t * t - i * r * r * r) / 12, x = r * i, p = r * i * i * i / 12, u = i * r * r * r / 12, v = h + m * x, M = S + m * p, $ = w + m * u, A = l / (2 * (1 + s)), q = (t - n) * (o - n), b = 2 * ((t - n) / n + (o - n) / n), f = 4 * q * q / (b > 0 ? b : 1);
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
    function Qt() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = z, n = {
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
      if ((I === "edificio" || I === "frame") && ie.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: c, perFloor: m } = Te, r = 4700 * Math.sqrt(c / 1e3) * 1e3, i = r / (2 * 1.2), h = 24 / 9.80665, S = o.E, w = o.G, x = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (Ce.has(p)) {
            const y = 4700 * Math.sqrt(c / 1e3) * 1e3, E = 0.2;
            n.elasticities.set(p, y), n.poissonsRatios.set(p, E), n.thicknesses.set(p, ut), n.shearModuli.set(p, y / (2 * (1 + E))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (Ot.has(p)) {
            const y = 4700 * Math.sqrt(c / 1e3) * 1e3, E = 0.2;
            n.elasticities.set(p, y), n.poissonsRatios.set(p, E), n.thicknesses.set(p, Qe), n.shearModuli.set(p, y / (2 * (1 + E))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const u = ie.has(p), v = Pe.get(p) ?? 0, M = m[v] ?? m[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let $, A, q, b;
          if (u) if (s === 0) A = r, q = i, b = h, $ = a === 1 ? Zn(M.dCol) : rn(M.bCol, M.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: M.dCol
          } : {
            type: "rect",
            b: M.bCol,
            h: M.hCol
          });
          else if (s === 1) {
            A = S, q = w, b = x;
            const y = Te.steelColType;
            if (y <= 1) {
              const E = ro[M.colProfileIdx] ?? ro[0];
              $ = {
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
              const E = M.colBf ?? 0.3, k = M.colHf ?? 0.3, O = M.colTf ?? 0.02, F = M.colTw ?? 0.012;
              $ = cn(E, k, O, F);
              const L = `I${(k * 100).toFixed(0)}x${(E * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: E,
                h: k,
                tf: O,
                tw: F,
                name: L
              });
            } else {
              const E = M.colBc ?? 0.3, k = M.colHc ?? 0.3, O = M.colT ?? 0.01;
              $ = dn(E, k, O);
              const F = `\u25A1${(k * 100).toFixed(0)}x${(E * 100).toFixed(0)}x${(O * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: E,
                h: k,
                tw: O,
                name: F
              });
            }
          } else {
            const y = M.colBc ?? 0.3, E = M.colHc ?? 0.3, k = M.colT ?? 0.01, O = M.colFc ?? 28e3, F = M.colEs ?? 2e8, L = M.colNuS ?? 0.3;
            M.colNuC;
            const P = Ls(y, E, k, F, L, O);
            $ = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, A = P.Es, q = P.Gs;
            const _ = 7.85, te = 24 / 9.80665;
            b = (_ * P.A_steel + te * P.A_conc) / (P.A_steel + P.A_conc);
            const ne = `CFT ${(E * 1e3).toFixed(0)}X${(y * 1e3).toFixed(0)}X${(k * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: y,
              h: E,
              tw: k,
              name: ne
            });
          }
          else {
            const y = nt.get(p), E = y ? y.dir === "x" ? M.vigasX : M.vigasY : [], k = y ? E[y.bay] ?? E[0] ?? at() : at();
            if (d === 0) A = r, q = i, b = h, $ = rn(k.b, k.h), n.sectionShapes.set(p, {
              type: "rect",
              b: k.b,
              h: k.h
            });
            else {
              A = S, q = w, b = x;
              const O = Te.steelVigaType;
              if (O <= 1) {
                const F = ro[k.profileIdx ?? 0] ?? ro[0];
                $ = {
                  A: F.A,
                  Iz: F.Iz,
                  Iy: F.Iy,
                  J: F.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: F.bf,
                  h: F.d,
                  name: F.name
                });
              } else if (O === 2) {
                const F = k.bf ?? 0.2, L = k.hf ?? 0.4, P = k.tf ?? 0.015, _ = k.tw ?? 0.01;
                $ = cn(F, L, P, _);
                const te = `I${(L * 100).toFixed(0)}x${(F * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: F,
                  h: L,
                  tf: P,
                  tw: _,
                  name: te
                });
              } else {
                const F = k.bc ?? 0.2, L = k.hc ?? 0.3, P = k.t ?? 8e-3;
                $ = dn(F, L, P);
                const _ = `\u25A1${(L * 100).toFixed(0)}x${(F * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: F,
                  h: L,
                  tw: P,
                  name: _
                });
              }
            }
          }
          const f = ue.get(p);
          if (f) {
            if ((f.material ?? 1) === 0 ? (A = r, q = i, b = h) : (A = S, q = w, b = x), f.secType === "rect" && f.b && f.h) $ = rn(f.b, f.h), n.sectionShapes.set(p, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) $ = Zn(f.b), n.sectionShapes.set(p, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const E = ro[f.profileIdx] ?? ro[0];
              $ = {
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
            } else if (f.secType === "I-param" && f.bf && f.hf && f.tf && f.tw) {
              $ = cn(f.bf, f.hf, f.tf, f.tw);
              const E = `I${(f.hf * 100).toFixed(0)}x${(f.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: f.bf,
                h: f.hf,
                tf: f.tf,
                tw: f.tw,
                name: E
              });
            } else if (f.secType === "tubular" && f.bc && f.hc && f.t) {
              $ = dn(f.bc, f.hc, f.t);
              const E = `\u25A1${(f.hc * 100).toFixed(0)}x${(f.bc * 100).toFixed(0)}x${(f.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: f.bc,
                h: f.hc,
                tw: f.t,
                name: E
              });
            }
          }
          n.elasticities.set(p, A), n.shearModuli.set(p, q), n.areas.set(p, $.A), n.momentsOfInertiaZ.set(p, $.Iy), n.momentsOfInertiaY.set(p, $.Iz), n.torsionalConstants.set(p, $.J), n.densities.set(p, b);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function Qn(t) {
      $e.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
      (_a = $e.querySelector("#cad3d-toggle")) == null ? void 0 : _a.addEventListener("click", (u) => {
        u.stopPropagation(), $e.classList.add("collapsed");
      }), (_b = $e.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (u) => {
        u.stopPropagation(), $e.classList.remove("collapsed");
      }), $e.querySelectorAll("[data-ex]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.ex;
          Qn(M), Je.example(M);
        });
      }), $e.querySelectorAll("[data-view]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.view;
          to(M), $e.querySelectorAll("[data-view]").forEach(($) => $.classList.remove("view-active")), u.classList.add("view-active");
        });
      }), (_c = $e.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (u) => {
        u.stopPropagation(), I = "", Ms.val = false, Is(), Je.clear();
      }), (_d = $e.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (u) => {
        var _a2;
        u.stopPropagation(), Nt && (Nt = false, fo()), jt && No(), Ft = !Ft, (_a2 = $e.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.toggle("inspect-active", Ft);
        const M = tt();
        M && (M.controls.enabled = !Ft), Ft || Oo();
      }), (_e = $e.querySelector("#cad3d-draw")) == null ? void 0 : _e.addEventListener("click", (u) => {
        var _a2;
        u.stopPropagation(), Nt && (Nt = false, fo()), Ft && Oo(), jt = !jt, (_a2 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.toggle("inspect-active", jt), jt ? Ps() : No();
      }), (_f = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (u) => {
        var _a2;
        u.stopPropagation(), Ft && Oo(), jt && No(), Nt = !Nt, (_a2 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", Nt), Nt || fo();
      }), (_g = $e.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (u) => {
        u.stopPropagation(), Ts();
      });
      let t = "";
      const o = $e.querySelector("#cad3d-io-menu"), n = $e.querySelector("#cad3d-io-file");
      function l(u, v) {
        e.nodes.val = u.nodes, e.elements.val = u.elements, e.nodeInputs.val = u.nodeInputs, e.elementInputs.val = u.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${v}: ${u.nodes.length} nodes, ${u.elements.length} elements`);
      }
      function s(u) {
        ie = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map();
        const v = /* @__PURE__ */ new Map();
        for (let k = 0; k < u.stories.length; k++) v.set(u.stories[k].name, k);
        for (let k = 0; k < u.elementTypes.length; k++) {
          const O = u.elementTypes[k], F = u.elementStories[k], L = v.get(F) ?? 0;
          Pe.set(k, L), O === "COLUMN" || O === "BRACE" ? ie.add(k) : ke.add(k);
        }
        I = "edificio";
        const M = u.grids.filter((k) => k.dir === "X").sort((k, O) => k.coord - O.coord), $ = u.grids.filter((k) => k.dir === "Y").sort((k, O) => k.coord - O.coord);
        let A, q, b, f;
        if (M.length > 0 || $.length > 0) A = M.map((k) => k.coord), q = $.map((k) => k.coord), b = M.map((k) => k.label), f = $.map((k) => k.label);
        else {
          const k = new Set(u.nodes.map((F) => F[0])), O = new Set(u.nodes.map((F) => F[1]));
          A = [
            ...k
          ].sort((F, L) => F - L), q = [
            ...O
          ].sort((F, L) => F - L), b = A.map((F, L) => String(L + 1)), f = q.map((F, L) => String.fromCharCode(65 + L));
        }
        const y = u.stories.length > 0 ? Math.max(...u.stories.map((k) => k.elev)) : Math.max(...u.nodes.map((k) => k[2]));
        ye = A, We = q, setTimeout(() => {
          $t(), st(A, q, y, b, f), Lt(u.stories, A, q), pn(), fn();
        }, 100);
        const E = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const k of u.elementTypes) E[k]++;
        console.log(`E2K grids: X=[${b.join(",")}] Y=[${f.join(",")}]`), console.log(`E2K stories: ${u.stories.map((k) => `${k.name}@${k.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${E.COLUMN} columns, ${E.BEAM} beams, ${E.BRACE} braces`), Ge();
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
              title: "Awatif Model"
            }), "model.e2k") : t === "export-py" ? d(qa(u), "model_opensees.py") : t === "export-tcl" && d(Aa(u), "model_opensees.tcl");
          } catch (v) {
            alert("Export error: " + v.message);
          }
        }
      }), n && n.addEventListener("change", () => {
        var _a2;
        const u = (_a2 = n.files) == null ? void 0 : _a2[0];
        if (!u) return;
        const v = new FileReader();
        v.onload = () => {
          const M = v.result;
          try {
            if (t === "import-e2k") {
              const $ = La(M);
              l($, "E2K imported"), s($);
            } else if (t === "import-py") {
              const $ = Ca(M);
              l($, "OpenSeesPy imported");
            } else if (t === "import-tcl") {
              const $ = Pa(M);
              l($, "OpenSees Tcl imported");
            }
          } catch ($) {
            alert("Import error: " + $.message), console.error($);
          }
        }, v.readAsText(u), n.value = "";
      });
      const a = $e.querySelector("#cad3d-force-unit");
      a && (a.value = g, a.addEventListener("change", (u) => {
        u.stopPropagation(), g = a.value, z = bo(g, j), I && Xe(I);
      }));
      const c = $e.querySelector("#cad3d-length-unit");
      c && (c.value = j, c.addEventListener("change", (u) => {
        u.stopPropagation(), j = c.value, z = bo(g, j), I && Xe(I);
      })), $e.querySelectorAll("[data-preset]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.preset, $ = R[M];
          $ && (g = $.force, j = $.length, Y = $.stress, z = bo(g, j), a && (a.value = g), c && (c.value = j), $e.querySelectorAll("[data-preset]").forEach((A) => {
            A.classList.toggle("active", A.dataset.preset === M);
          }), I && Xe(I), console.log(`Preset: ${M} \u2192 ${g}+${j}, stress: ${Y.label}`));
        });
      }), (_h = $e.querySelector("#cad3d-log")) == null ? void 0 : _h.addEventListener("click", (u) => {
        u.stopPropagation(), js();
      }), (_i = $e.querySelector("#cad3d-pushover")) == null ? void 0 : _i.addEventListener("click", (u) => {
        u.stopPropagation(), Ws();
      }), (_j = $e.querySelector("#cad3d-nonlinear")) == null ? void 0 : _j.addEventListener("click", (u) => {
        u.stopPropagation(), Js();
      }), (_k = $e.querySelector("#cad3d-fem-solver")) == null ? void 0 : _k.addEventListener("click", (u) => {
        u.stopPropagation(), Vs();
      }), (_l = $e.querySelector("#cad3d-modal")) == null ? void 0 : _l.addEventListener("click", (u) => {
        var _a2, _b2;
        u.stopPropagation(), kt = !kt, (_a2 = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", kt);
        const M = $e.querySelector("#cad3d-mode-prev"), $ = $e.querySelector("#cad3d-mode-next"), A = $e.querySelector("#cad3d-mode-label"), q = $e.querySelector("#cad3d-modal-scale");
        if (kt) {
          const b = tt();
          ((_b2 = b == null ? void 0 : b.settings) == null ? void 0 : _b2.loads) && (X = b.settings.loads.rawVal, b.settings.loads.val = false), sn(), M.style.display = "", $.style.display = "", A.style.display = "", q && (q.style.display = ""), m();
        } else an(), M.style.display = "none", $.style.display = "none", A.style.display = "none", q && (q.style.display = "none"), I && I !== "placa-q4" && I !== "placa-3q" && be(), setTimeout(() => {
          var _a3;
          const b = tt();
          ((_a3 = b == null ? void 0 : b.settings) == null ? void 0 : _a3.loads) && X && (b.settings.loads.val = true);
        }, 600);
      });
      function m() {
        var _a2;
        const u = $e.querySelector("#cad3d-mode-label");
        if (!u || !(le == null ? void 0 : le.frequencies)) return;
        const v = le.frequencies[mt], M = v > 0 ? 1 / v : 0, $ = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let A = 0; A <= mt; A++) {
          const q = (_a2 = le.massParticipation) == null ? void 0 : _a2[A];
          if (q) for (let b = 0; b < 6; b++) $[b] += q[b];
        }
        u.textContent = `Modo ${mt + 1} \u2014 ${v.toFixed(2)} Hz \u2014 T=${M.toFixed(3)}s \u2014 \u03A3Ux=${($[0] * 100).toFixed(1)}% \u03A3Uy=${($[1] * 100).toFixed(1)}% \u03A3Rz=${($[5] * 100).toFixed(1)}%`;
      }
      (_m = $e.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (u) => {
        if (u.stopPropagation(), !(le == null ? void 0 : le.modeShapes)) return;
        mt = (mt - 1 + le.modeShapes.length) % le.modeShapes.length;
        const v = le.modeShapes[mt], { extent: M } = eo();
        let $ = 0;
        for (let A = 0; A < Q.length; A++) {
          const q = v[A * 6] || 0, b = v[A * 6 + 1] || 0, f = v[A * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(q * q + b * b + f * f));
        }
        ze = $ > 1e-12 ? M * 0.05 / $ : 1, Lo(), m();
      }), (_n2 = $e.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (u) => {
        if (u.stopPropagation(), !(le == null ? void 0 : le.modeShapes)) return;
        mt = (mt + 1) % le.modeShapes.length;
        const v = le.modeShapes[mt], { extent: M } = eo();
        let $ = 0;
        for (let A = 0; A < Q.length; A++) {
          const q = v[A * 6] || 0, b = v[A * 6 + 1] || 0, f = v[A * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(q * q + b * b + f * f));
        }
        ze = $ > 1e-12 ? M * 0.05 / $ : 1, Lo(), m();
      });
      const r = $e.querySelector("#cad3d-modal-scale");
      r == null ? void 0 : r.addEventListener("mousedown", (u) => u.stopPropagation()), r == null ? void 0 : r.addEventListener("change", () => {
        kt && (le == null ? void 0 : le.modeShapes) && Lo();
      });
      const i = $e.querySelector("#cad3d-cmd");
      i == null ? void 0 : i.addEventListener("mousedown", (u) => u.stopPropagation()), document.addEventListener("keydown", (u) => {
        var _a2;
        if ((u.ctrlKey || u.metaKey) && u.key === "z" && !u.shiftKey) {
          u.preventDefault(), ts();
          return;
        }
        if ((u.ctrlKey || u.metaKey) && (u.key === "y" || u.key === "z" && u.shiftKey)) {
          u.preventDefault(), os();
          return;
        }
        if ((u.key === "Delete" || u.key === "Backspace") && lt.size > 0) {
          u.preventDefault(), lt.forEach((v) => J.add(v)), lt.clear(), Yt && (Yt.remove(), Yt = null), be();
          return;
        }
        if (u.key === "Escape") {
          if (jt) if (it !== null) {
            it = null;
            const v = tt();
            Mt && v && (v.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), wt && v && (v.scene.remove(wt), wt.geometry.dispose(), wt.material.dispose(), wt = null), v == null ? void 0 : v.render();
          } else No();
          Ft && Oo(), Nt && (Nt = false, fo(), (_a2 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.remove("inspect-active"));
        }
      }), i == null ? void 0 : i.addEventListener("keydown", (u) => {
        if (u.key === "Enter") {
          const v = i.value.trim();
          if (v) {
            try {
              const M = new Function("cad", `return ${v}`)(Je);
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
      }), Ge();
    }, 10);
    function tt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function eo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ee(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [r, i, h] of t) r < o && (o = r), r > s && (s = r), i < n && (n = i), i > d && (d = i), h < l && (l = h), h > a && (a = h);
      const c = new Ee((o + s) / 2, (n + d) / 2, (l + a) / 2), m = Math.max(s - o, d - n, a - l, 1);
      return {
        center: c,
        extent: m
      };
    }
    function $t(t = false) {
      const o = tt();
      if (!o) return;
      const { extent: n } = eo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((h) => h.type === "GridHelper").forEach((h) => {
        var _a, _b;
        (_a = h.geometry) == null ? void 0 : _a.dispose(), (_b = h.material) == null ? void 0 : _b.dispose(), o.scene.remove(h);
      });
      const d = ea(), a = new ca(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((h) => h.type === "Group" && h.name !== "gridAxes" && h.name !== "loadsGroup" && (h.name === "viewerAxes" || h.children.some((S) => S instanceof Bo))).forEach((h) => {
        h.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(h);
      });
      const m = 0.05 * l, r = new kn();
      r.name = "viewerAxes";
      const i = d.axisArrow;
      r.add(new Bo(new Ee(1, 0, 0), new Ee(), 1, i, 0.2, 0.2)), r.add(new Bo(new Ee(0, 1, 0), new Ee(), 1, i, 0.2, 0.2)), r.add(new Bo(new Ee(0, 0, 1), new Ee(), 1, i, 0.2, 0.2)), r.children.forEach((h) => h.scale.set(m, m, m));
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
        const u = new In(x);
        u.needsUpdate = true;
        const v = new Do(new jo({
          map: u,
          depthTest: false,
          transparent: true
        }));
        v.position.set(w[0], w[1], w[2]), v.scale.set(0.4 * m, 0.4 * m, 1), v.renderOrder = 99, r.add(v);
      }
      o.scene.add(r), t ? o.render() : to("3d");
    }
    function es(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function to(t) {
      var _a;
      const o = tt();
      if (!o) return;
      const { center: n, extent: l } = eo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((c) => {
          var _a2;
          if (!c.material) return;
          const m = c.type === "GridHelper" || c.type === "AxesHelper", r = c.isSprite, i = ((_a2 = c.userData) == null ? void 0 : _a2.noClip) === true;
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
        if (t === "plan") o.renderer.clippingPlanes = [], m(new Ee(n.x, n.y, n.z + l * 2), new Ee(n.x, n.y, n.z), new Ee(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), i = ((_a = V.hPiso) == null ? void 0 : _a.val) ?? 3, h = (r + 1) * i, S = i * 0.45;
          o.renderer.clippingPlanes = [
            new lo(new Ee(0, 0, -1), h + S),
            new lo(new Ee(0, 0, 1), -h + S)
          ], a(), m(new Ee(n.x, n.y, h + l * 2), new Ee(n.x, n.y, h), new Ee(0, 1, 0));
        } else if (t === "elevX") c.position.set(n.x + l * 2, n.y, n.z), c.up.set(0, 0, 1);
        else if (t === "elevY") c.position.set(n.x, n.y - l * 2, n.z), c.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), i = ye[r] ?? n.x;
          if (We.length > 1) {
            const S = es(ye, r, l);
            o.renderer.clippingPlanes = [
              new lo(new Ee(-1, 0, 0), i + S),
              new lo(new Ee(1, 0, 0), -i + S)
            ], a(), c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), i = We[r] ?? n.y;
          if (ye.length > 1) {
            const S = es(We, r, l);
            o.renderer.clippingPlanes = [
              new lo(new Ee(0, -1, 0), i + S),
              new lo(new Ee(0, 1, 0), -i + S)
            ], a(), c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(c);
      }
    }
    function pn() {
      const t = $e.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (ye.length < 2 && We.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, c) => {
        const m = document.createElement("button");
        return m.textContent = d, m.dataset.view = a, m.title = c, m.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", m.addEventListener("click", (r) => {
          var _a;
          r.stopPropagation();
          const i = m.classList.contains("view-active");
          $e.querySelectorAll("[data-view]").forEach((h) => h.classList.remove("view-active")), i ? (to("3d"), (_a = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a.classList.add("view-active")) : (to(a), m.classList.add("view-active"));
        }), m;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      ye.forEach((d, a) => {
        const c = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(c, `axisX:${a}`, `Eje ${c} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), We.forEach((d, a) => {
        const c = `${a + 1}`;
        t.appendChild(o(c, `axisY:${a}`, `Eje ${c} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function fn() {
      var _a;
      const t = $e.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a = V.nPisos) == null ? void 0 : _a.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, d, a) => {
        const c = document.createElement("button");
        return c.textContent = s, c.dataset.view = d, c.title = a, c.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", c.addEventListener("click", (m) => {
          var _a2;
          m.stopPropagation();
          const r = c.classList.contains("view-active");
          $e.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), r ? (to("3d"), (_a2 = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (to(d), c.classList.add("view-active"));
        }), c;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Fs() {
      to("3d"), $e.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Je.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, to(t), $e.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Nt = false, Ft = false, jt = false, It = "line", At = [], it = null, Mt = null, wt = null, vo = null, Ct = null;
    const ft = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, un = 0.5;
    let mn = [], Pt = null, po = null;
    const yo = [], _o = [], qs = 50;
    function $o() {
      yo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), yo.length > qs && yo.shift(), _o.length = 0;
    }
    function ts() {
      if (yo.length === 0) return;
      _o.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = yo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Qt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function os() {
      if (_o.length === 0) return;
      yo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = _o.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Qt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const lt = /* @__PURE__ */ new Set();
    let qt = null, oo = [], Wt = null, Yt = null;
    function bn(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let c = 0; c < l.length; c++) {
        const m = n[l[c]], r = n[l[(c + 1) % l.length]];
        s.push(m[0], m[1], m[2], r[0], r[1], r[2]);
      }
      const d = new io();
      d.setAttribute("position", new uo(s, 3));
      const a = new qo(d, new Ao({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), oo.push(a), o.render();
    }
    function no() {
      const t = tt();
      oo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), oo = [], t == null ? void 0 : t.render();
    }
    function so() {
      Yt && Yt.remove();
      const t = D.size > 0 || H;
      if (lt.size === 0 && !t) {
        Yt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${lt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Yt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Xs([
          ...lt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (lt.size === 1) {
          const n = [
            ...lt
          ][0];
          cs(n);
        } else {
          const n = [
            ...lt
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
        lt.forEach((n) => D.add(n)), lt.clear(), no(), so(), be();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, W.clear(), lt.forEach((n) => W.add(n)), lt.clear(), no(), so(), be();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        D.clear(), H = false, W.clear(), so(), be();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        $o(), lt.forEach((n) => J.add(n)), lt.clear(), no(), so(), be();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        lt.clear(), no(), so();
      });
    }
    function Oo() {
      var _a;
      Ft = false, lt.clear(), no(), Yt && (Yt.remove(), Yt = null), (_a = $e.querySelector("#cad3d-select")) == null ? void 0 : _a.classList.remove("inspect-active");
      const o = tt();
      o && (o.controls.enabled = true);
    }
    function fo() {
      if (qt) {
        const t = tt();
        t == null ? void 0 : t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null, t == null ? void 0 : t.render();
      }
      Wt && (Wt.remove(), Wt = null);
    }
    function As(t) {
      hn();
      const o = tt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      po = t;
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
        ]), m = new io();
        m.setAttribute("position", new na(c, 3));
        const r = new En({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new qo(m, r);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), mn.push(i);
      }
      o.render();
    }
    function hn() {
      const t = tt();
      for (const o of mn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      mn = [], po = null, Pt && (Pt.remove(), Pt = null);
    }
    function ns(t, o, n, l) {
      Pt || (Pt = document.createElement("div"), Pt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Pt));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, c = Math.sqrt(s * s + d * d + a * a), m = Math.abs(s), r = Math.abs(d), i = Math.abs(a);
      let h = "";
      m > r && m > i ? h = `\u0394X=${s.toFixed(2)}` : r > m && r > i ? h = `\u0394Y=${d.toFixed(2)}` : i > 0.01 && (h = `\u0394Z=${a.toFixed(2)}`), Pt.textContent = `${c.toFixed(3)} m  ${h}`, Pt.style.left = t + 20 + "px", Pt.style.top = o - 10 + "px";
    }
    function Cs(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Ee(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), c = 0.3, m = Math.abs(a.x), r = Math.abs(a.y), i = Math.abs(a.z);
      return r < c && i < c && m > 0.01 ? new Ee(d.x, s.y, s.z) : m < c && i < c && r > 0.01 ? new Ee(s.x, d.y, s.z) : m < c && r < c && i > 0.01 ? new Ee(s.x, s.y, d.z) : null;
    }
    function No() {
      var _a;
      const t = tt();
      Mt && t && (t.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), wt && t && (t.scene.remove(wt), wt.geometry.dispose(), wt.material.dispose(), wt = null), hn(), it = null, Ct = null, jt = false, vo && (vo.remove(), vo = null), (_a = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ps() {
      vo && vo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(It === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(It === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(It === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(It === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(ft.node)}">Node</button>
      <button id="ds-grid" style="${n(ft.grid)}">Grid</button>
      <button id="ds-mid" style="${n(ft.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(ft.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${un}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), vo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), c = t.querySelector("#dt-area");
        s && (s.style.cssText = o(It === "line")), d && (d.style.cssText = o(It === "arc")), a && (a.style.cssText = o(It === "node")), c && (c.style.cssText = o(It === "area"));
        const m = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), h = t.querySelector("#ds-track");
        m && (m.style.cssText = n(ft.node)), r && (r.style.cssText = n(ft.grid)), i && (i.style.cssText = n(ft.midpoint)), h && (h.style.cssText = n(ft.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        It = "line", it = null, Ct = null, At = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        It = "arc", it = null, Ct = null, At = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        It = "node", it = null, Ct = null, At = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        It = "area", it = null, Ct = null, At = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        ft.node = !ft.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        ft.grid = !ft.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        ft.midpoint = !ft.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        ft.track = !ft.track, ft.track || hn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ft.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => ts()), t.querySelector("#dt-redo").addEventListener("click", () => os());
    }
    function ss(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, c = new xs();
      c.setFromCamera(new vs(d, a), n);
      const m = e.nodes.val, r = e.elements.val, i = 0.12;
      if (ft.node) {
        let w = -1, x = 1 / 0;
        for (let p = 0; p < m.length; p++) {
          const u = m[p], v = new Ee(u[0], u[1], u[2]).project(n), M = Math.sqrt((v.x - d) ** 2 + (v.y - a) ** 2);
          M < i && M < x && (x = M, w = p);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Ee(...m[w]),
          snapType: "node"
        };
      }
      if (ft.midpoint) {
        let w = 1 / 0, x = null;
        for (const p of r) {
          if (p.length !== 2) continue;
          const u = m[p[0]], v = m[p[1]], M = new Ee((u[0] + v[0]) / 2, (u[1] + v[1]) / 2, (u[2] + v[2]) / 2), $ = M.clone().project(n), A = Math.sqrt(($.x - d) ** 2 + ($.y - a) ** 2);
          A < i * 0.8 && A < w && (w = A, x = M);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (ft.grid) {
        const w = new lo(new Ee(0, 0, 1), 0), x = new Ee();
        if (c.ray.intersectPlane(w, x)) {
          const p = ft.gridSize || un;
          return x.x = Math.round(x.x / p) * p, x.y = Math.round(x.y / p) * p, x.z = Math.round(x.z / p) * p, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const h = new lo(new Ee(0, 0, 1), 0), S = new Ee();
      return c.ray.intersectPlane(h, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function as(t) {
      const o = tt();
      if (!o) return;
      const n = e.nodes.val;
      if (wt && (o.scene.remove(wt), wt.geometry.dispose(), wt.material.dispose(), wt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new sa(s * 2, s * 2, s * 2) : new aa(s, 12, 12), a = new la({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        wt = new ia(d, a), wt.position.copy(t.worldPos), wt.renderOrder = 9999, o.scene.add(wt);
      }
      if (Mt && (o.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), it !== null && t.worldPos) {
        const l = n[it], s = new io();
        if (It === "arc" && Ct !== null) {
          const a = n[Ct], c = ls(new Ee(l[0], l[1], l[2]), new Ee(a[0], a[1], a[2]), t.worldPos, 16), m = [];
          for (let r = 0; r < c.length - 1; r++) m.push(c[r].x, c[r].y, c[r].z, c[r + 1].x, c[r + 1].y, c[r + 1].z);
          s.setAttribute("position", new uo(m, 3));
        } else s.setAttribute("position", new uo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Ao({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Mt = new Ho(s, d), It === "arc" && Ct !== null && (Mt = new qo(s, d)), Mt.renderOrder = 9999, o.scene.add(Mt);
      }
      o.render();
    }
    function ls(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, c = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), m = (1 - a) * (1 - a), r = 2 * (1 - a) * a, i = a * a;
        s.push(new Ee(m * t.x + r * c.x + i * n.x, m * t.y + r * c.y + i * n.y, m * t.z + r * c.z + i * n.z));
      }
      return s;
    }
    function gn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      $o();
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
      var _a;
      if (It === "node") {
        if (!t.worldPos) return;
        $o();
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
      if (It === "line") {
        const o = gn(t);
        if (o < 0) return;
        if (it === null) {
          it = o;
          return;
        }
        if (o === it) return;
        $o();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === it && s[1] === o || s[1] === it && s[0] === o)) || (n.push([
          it,
          o
        ]), e.elements.val = n, Qt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), it = o;
        return;
      }
      if (It === "arc") {
        const o = gn(t);
        if (o < 0) return;
        if (it === null) {
          it = o;
          return;
        }
        if (Ct === null) {
          if (o === it) return;
          Ct = o;
          return;
        }
        if (o === it || o === Ct) return;
        const n = e.nodes.val, l = new Ee(...n[it]), s = new Ee(...n[Ct]), d = new Ee(...n[o]), a = Math.max(4, Math.round(((_a = V.nSubViga) == null ? void 0 : _a.val) ?? 8)), c = ls(l, s, d, a);
        $o();
        const m = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let i = it;
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
        e.nodes.val = m, e.elements.val = r, Qt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, it = o, Ct = null;
        return;
      }
      if (It === "area") {
        const o = gn(t);
        if (o < 0) return;
        if (At.length >= 3 && o === At[0]) {
          $o();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = At.map((d) => n[d]);
          try {
            const d = Ut({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (c, m) => m),
              maxMeshSize: un || 0.5
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
            e.nodes.val = n, e.elements.val = l, Qt(), console.log(`Area: ${d.elements.length} triangulos creados desde ${At.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          At = [];
          return;
        }
        if (At.push(o), console.log(`Area vertex ${At.length}: node ${o}`), At.length >= 2) {
          const n = At[At.length - 2], l = e.nodes.val, s = tt();
          if (s) {
            const d = new io().setFromPoints([
              new Ee(...l[n]),
              new Ee(...l[o])
            ]), a = new qo(d, new Ao({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function is(t) {
      const o = tt();
      if (!o) return;
      qt && (o.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const c = n[l[a]], m = n[l[(a + 1) % l.length]];
        s.push(c[0], c[1], c[2], m[0], m[1], m[2]);
      }
      const d = new io();
      d.setAttribute("position", new uo(s, 3)), qt = new qo(d, new Ao({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), qt.renderOrder = 9999, o.scene.add(qt), o.render();
    }
    function xn(t) {
      const o = tt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new vs((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new xs();
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
          const w = new Ee(...d[S[0]]), x = new Ee(...d[S[1]]), p = new ra(w, x), u = new Ee(), v = new Ee();
          r.closestPointToPoint(p.getCenter(new Ee()), u), p.closestPointToPoint(u, true, v);
          const M = u.distanceTo(v);
          M < c && (c = M, m = h);
        } else if (S.length === 3) {
          const w = new Ee(...d[S[0]]), x = new Ee(...d[S[1]]), p = new Ee(...d[S[2]]), u = new Ee();
          if (r.intersectTriangle(w, x, p, false, u)) {
            const M = r.origin.distanceTo(u);
            M < c && (c = M, m = h);
          } else {
            const M = w.add(x).add(p).divideScalar(3), $ = new Ee();
            r.closestPointToPoint(M, $);
            const A = $.distanceTo(M);
            A < c && (c = A, m = h);
          }
        } else if (S.length === 4) {
          const w = new Ee(...d[S[0]]), x = new Ee(...d[S[1]]), p = new Ee(...d[S[2]]), u = new Ee(...d[S[3]]), v = new Ee();
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
      const { extent: i } = eo();
      return c < i * 0.1 ? m : -1;
    }
    function K(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function vn(t, o, n = 12) {
      var _a;
      const l = Math.min(t.length, n), s = Math.min(((_a = t[0]) == null ? void 0 : _a.length) || 0, n);
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
          d += `<td class="${r}">${K(m, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function Me(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function C(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Os(t, o, n, l, s, d, a) {
      const c = `${Me(C("E") + "\xB7" + C("A"), C("L"))}`, m = `${Me("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`, r = `${Me("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`, i = `${Me(C("G") + "\xB7" + C("J"), C("L"))}`, h = `${Me("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`, S = `${Me("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${c} = ${Me(K(t) + "\xB7" + K(o), K(a))} = <span class="highlight">${K(t * o / a)}</span></div>
      <div>${m} = ${Me("12\xB7" + K(t) + "\xB7" + K(n), K(a) + "\xB3")} = <span class="highlight">${K(12 * t * n / a ** 3)}</span></div>
      <div>${r} = ${Me("12\xB7" + K(t) + "\xB7" + K(l), K(a) + "\xB3")} = <span class="highlight">${K(12 * t * l / a ** 3)}</span></div>
      <div>${i} = ${Me(K(s) + "\xB7" + K(d), K(a))} = <span class="highlight">${K(s * d / a)}</span></div>
      <div>${h} = ${Me("4\xB7" + K(t) + "\xB7" + K(l), K(a))} = <span class="highlight">${K(4 * t * l / a)}</span></div>
      <div>${S} = ${Me("4\xB7" + K(t) + "\xB7" + K(n), K(a))} = <span class="highlight">${K(4 * t * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Me(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Me("\u2212" + C("EA"), C("L"))}</span>
        <span class="cell">0</span><span class="cell">${Me("12" + C("EI", "z"), C("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${Me("\u2212" + C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Me(C("EA"), C("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Ns(t) {
      if (t.length === 2) {
        const n = Zt(t[1], t[0]), l = ho(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${Me("\u0394x", C("L"))} = ${Me(K(n[0]), K(l))} = <span class="highlight">${K(s)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${Me("\u0394y", C("L"))} = ${Me(K(n[1]), K(l))} = <span class="highlight">${K(d)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${Me("\u0394z", C("L"))} = ${Me(K(n[2]), K(l))} = <span class="highlight">${K(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${Me("\u2212" + C("m"), C("D"))}</span><span class="cell">${Me(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${Me("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${Me("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Rs() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function Hs(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Bs(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Me("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Me(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], c = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${c}">${K(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function rs() {
      const t = "0", o = Me(C("EA"), C("L")), n = Me("\u2212" + C("EA"), C("L")), l = Me("12" + C("EI", "z"), C("L") + "\xB3"), s = Me("\u221212" + C("EI", "z"), C("L") + "\xB3"), d = Me("12" + C("EI", "y"), C("L") + "\xB3"), a = Me("\u221212" + C("EI", "y"), C("L") + "\xB3"), c = Me("6" + C("EI", "z"), C("L") + "\xB2"), m = Me("\u22126" + C("EI", "z"), C("L") + "\xB2"), r = Me("6" + C("EI", "y"), C("L") + "\xB2"), i = Me("\u22126" + C("EI", "y"), C("L") + "\xB2"), h = Me(C("GJ"), C("L")), S = Me("\u2212" + C("GJ"), C("L")), w = Me("4" + C("EI", "z"), C("L")), x = Me("2" + C("EI", "z"), C("L")), p = Me("4" + C("EI", "y"), C("L")), u = Me("2" + C("EI", "y"), C("L")), v = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', M = [
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
      let q = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      q += '<table><tr><td class="hdr"></td>';
      for (const b of $) q += `<td class="hdr">${b}</td>`;
      q += "</tr>";
      for (let b = 0; b < 12; b++) {
        q += `<tr><td class="hdr">${M[b]}</td>`;
        for (let f = 0; f < 12; f++) if (f < b) q += `<td style="color:var(--fem-border-cell)">${f === 0 && b > 0 ? v : ""}</td>`;
        else {
          const y = A[b][f], E = (b === f ? "diag " : "") + (y !== "0" ? "nz" : "");
          q += `<td class="${E}">${y}</td>`;
        }
        q += "</tr>";
      }
      return q += "</table>", q;
    }
    function Ds(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${Me(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${Me(K(t) + "\xD7" + K(o), K(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${Me("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${Me("12\xD7" + K(t) + "\xD7" + K(n), K(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${Me("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${Me("6\xD7" + K(t) + "\xD7" + K(n), K(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Me("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${Me("12\xD7" + K(t) + "\xD7" + K(l), K(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${Me("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${Me("6\xD7" + K(t) + "\xD7" + K(l), K(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Me(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${Me(K(s) + "\xD7" + K(d), K(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${Me("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${Me("4\xD7" + K(t) + "\xD7" + K(n), K(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Me("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${Me("2\xD7" + K(t) + "\xD7" + K(n), K(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Me("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${Me("4\xD7" + K(t) + "\xD7" + K(l), K(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Me("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${Me("2\xD7" + K(t) + "\xD7" + K(l), K(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((m) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${m.label}</div>${m.name} = ${m.calc} = <span class="highlight">${K(m.val)}</span></div>`).join("")}</div>`;
    }
    function $n(t, o, n, l) {
      var _a;
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
    `, document.body.appendChild(d), (_a = d.querySelector("#fem-full-close")) == null ? void 0 : _a.addEventListener("click", () => d.remove()), d.addEventListener("click", (a) => {
        a.target === d && d.remove();
      });
    }
    function cs(t) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Wt && Wt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((b) => o[b]), d = l.length === 2, a = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, c = (_b = e.deformOutputs) == null ? void 0 : _b.val, m = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const b = ho(Zt(s[1], s[0])), f = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, y = ((_e = a.areas) == null ? void 0 : _e.get(t)) ?? 0, E = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, k = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, O = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, F = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${K(b)}${K(f)}${K(y)}${K(E)}${K(k)}${K(O)}${K(F)}`;
      } else {
        const b = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, y = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${K(b)}${K(f)}${K(y)}`;
      }
      let r = "", i = "", h = "", S = "", w = "", x = "", p = "", u = "", v = null, M = null, $ = null, A = [];
      try {
        if (v = Xo(s, a, t), M = Ko(s), $ = Rt(qn(M), Rt(v, M)), A = d ? [
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
          const E = ho(Zt(s[1], s[0])), k = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, O = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, F = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, L = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, _ = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          S = Os(k, O, F, L, P, _, E);
        }
        w = Ns(s), x = Rs(), p = Hs(l), u = Bs(d);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', y = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        r = `<div class="matrix-label">k_local (${v.length}\xD7${v.length}) ${b}</div>${vn(v, A)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${M.length}\xD7${M.length}) ${f}</div>${vn(M, A)}`, h = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${y}</div>${vn($, A)}`;
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
          var _a2;
          const E = ((_a2 = c.deformations) == null ? void 0 : _a2.get(f)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], k = b.map((O, F) => `<span class="prop-key">${O}</span>: <span class="${Math.abs(E[F]) > 1e-10 ? "result-val" : ""}">${K(E[F])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${f}:</strong> ${k}</div>`;
        }).join("");
      }
      if (m && d && (c == null ? void 0 : c.deformations) && v && M) {
        const b = (_s2 = m.normals) == null ? void 0 : _s2.get(t), f = (_t2 = m.shearsY) == null ? void 0 : _t2.get(t), y = (_u = m.shearsZ) == null ? void 0 : _u.get(t), E = (_v = m.torsions) == null ? void 0 : _v.get(t), k = (_w = m.bendingsY) == null ? void 0 : _w.get(t), O = (_x = m.bendingsZ) == null ? void 0 : _x.get(t), F = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], L = [];
        for (const ee of l) {
          const U = ((_y = c.deformations) == null ? void 0 : _y.get(ee)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          L.push(...U);
        }
        let P = [];
        try {
          P = Rt(M, L);
        } catch {
          P = new Array(12).fill(0);
        }
        let _ = [];
        try {
          _ = Rt(v, P);
        } catch {
          _ = new Array(12).fill(0);
        }
        const te = (ee, U) => ee.map((se, we) => `<span style="color:${Math.abs(se) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${U[we % 6]}=${K(se)}</span>`).join(", "), re = [
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
        ].map((ee, U) => `${ee}${U < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((ee, U) => `<span style="color:var(--fem-label)">nodo ${ee}:</span> ${F.map((se, we) => `<span style="color:${Math.abs(L[U * 6 + we]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${K(L[U * 6 + we])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${te(P, [
          ...F,
          ...F
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${_.map((ee, U) => `<span style="color:${Math.abs(ee) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${re[U]}=${K(ee)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${K(_[0])}${C("P", "7")}${C("N", "j")}${K(_[6])}${C("P", "2")}${C("V", "y,i")}${K(_[1])}${C("P", "8")}${C("V", "y,j")}${K(_[7])}${C("P", "3")}${C("V", "z,i")}${K(_[2])}${C("P", "9")}${C("V", "z,j")}${K(_[8])}${C("P", "4")}${C("M", "x,i")}${K(_[3])}${C("P", "10")}${C("M", "x,j")}${K(_[9])}${C("P", "5")}${C("M", "y,i")}${K(_[4])}${C("P", "11")}${C("M", "y,j")}${K(_[10])}${C("P", "6")}${C("M", "z,i")}${K(_[5])}${C("P", "12")}${C("M", "z,j")}${K(_[11])}${b ? b.map((ee) => K(ee)).join(", ") : "\u2014"}${f ? f.map((ee) => K(ee)).join(", ") : "\u2014"}${y ? y.map((ee) => K(ee)).join(", ") : "\u2014"}${E ? E.map((ee) => K(ee)).join(", ") : "\u2014"}${k ? k.map((ee) => K(ee)).join(", ") : "\u2014"}${O ? O.map((ee) => K(ee)).join(", ") : "\u2014"}`;
      } else if (m && d) {
        const b = (_z = m.normals) == null ? void 0 : _z.get(t), f = (_A = m.shearsY) == null ? void 0 : _A.get(t), y = (_B = m.shearsZ) == null ? void 0 : _B.get(t), E = (_C = m.torsions) == null ? void 0 : _C.get(t), k = (_D = m.bendingsY) == null ? void 0 : _D.get(t), O = (_E = m.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((F) => K(F)).join(", ") : "\u2014"}${f ? f.map((F) => K(F)).join(", ") : "\u2014"}${y ? y.map((F) => K(F)).join(", ") : "\u2014"}${E ? E.map((F) => K(F)).join(", ") : "\u2014"}${k ? k.map((F) => K(F)).join(", ") : "\u2014"}${O ? O.map((F) => K(F)).join(", ") : "\u2014"}`;
      } else if (m && !d) {
        const b = (_F = m.bendingXX) == null ? void 0 : _F.get(t), f = (_G = m.bendingYY) == null ? void 0 : _G.get(t), y = (_H = m.bendingXY) == null ? void 0 : _H.get(t), E = (_I = m.membraneXX) == null ? void 0 : _I.get(t), k = (_J = m.membraneYY) == null ? void 0 : _J.get(t), O = (_K = m.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((F) => K(F)).join(", ") : "\u2014"}${f ? f.map((F) => K(F)).join(", ") : "\u2014"}${y ? y.map((F) => K(F)).join(", ") : "\u2014"}${E ? E.map((F) => K(F)).join(", ") : "\u2014"}${k ? k.map((F) => K(F)).join(", ") : "\u2014"}${O ? O.map((F) => K(F)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Wt = Ma(t, o, n, a, c, m), Wt.id = "fem-inspect-panel", document.body.appendChild(Wt), (_L = Wt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => fo());
      const q = d ? (() => {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        const b = ho(Zt(s[1], s[0])), f = ((_a2 = a.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, y = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, E = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, k = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, O = ((_e2 = a.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, F = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Ds(f, y, E, k, O, F, b);
      })() : void 0;
      Wt.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const y = b.dataset.full;
          if (y === "kLocal" && v) {
            const E = d ? rs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            $n(`Elemento ${t} \u2014 Rigidez Local k_local`, E, yn(v, A), q);
          } else if (y === "T" && M) $n(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, yn(M, A));
          else if (y === "kGlobal" && $) {
            const E = d ? rs() : "<em>Shell 18\xD718</em>";
            $n(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, E, yn($, A), q);
          }
        });
      });
    }
    function ds() {
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
          for (let q = 0; q < 4; q++) s.push([
            A + q,
            $ + q
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
        const x = _t(l, s, {
          supports: d,
          loads: c
        }, w);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function ps() {
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
        const w = _t(l, s, {
          supports: d,
          loads: a
        }, S);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function fs() {
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
        const p = _t(d, a, {
          supports: i,
          loads: h
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function us() {
      const d = [], a = [];
      for (let u = 0; u <= 12; u++) {
        const v = u * 3.5, M = u * 5 * Math.PI / 180;
        for (let $ = 0; $ < 6; $++) {
          const A = M + 2 * Math.PI * $ / 6, q = 5 * Math.cos(A), b = 5 * Math.sin(A);
          d.push([
            q,
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
        const u = _t(d, a, {
          supports: m,
          loads: r
        }, p);
        u && e.deformOutputs && (e.deformOutputs.val = u);
      } catch (u) {
        console.warn("Twisted:", u.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function ms() {
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
          const q = A * 2 * Math.PI / 3 - Math.PI / 2, b = M * Math.cos(q), f = M * Math.sin(q), y = s.length;
          s.push([
            b,
            f,
            v
          ]), d.push([
            $,
            y
          ]);
          const E = s.length;
          s.push([
            b * 0.5,
            f * 0.5,
            v
          ]), d.push([
            $,
            E
          ]), d.push([
            E,
            y
          ]);
        }
        for (let A = 0; A < 3; A++) {
          const q = $ + 1 + A * 2, b = $ + 1 + (A + 1) % 3 * 2;
          d.push([
            q,
            b
          ]);
        }
        if (p < 20) {
          const q = $ + 7;
          d.push([
            $,
            q
          ]);
          for (let b = 0; b < 3; b++) d.push([
            $ + 1 + b * 2,
            q + 1 + b * 2
          ]), d.push([
            $ + 2 + b * 2,
            q + 2 + b * 2
          ]), d.push([
            $ + 1 + b * 2,
            q + 2 + b * 2
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
        const p = _t(s, d, {
          supports: a,
          loads: m
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function bs() {
      const t = [], o = [];
      for (let h = 0; h < 3; h++) {
        const S = h * 12, w = 15 - h * 2, x = 20 - h * 3, p = 8 - h, u = t.length;
        for (let M = 0; M <= 4; M++) {
          const $ = M / 4, A = -p / 2 + p * $, q = x * (1 - $ * $ * 0.3);
          for (let b = 0; b <= 12; b++) {
            const f = b / 12, y = S + q * f, E = w * Math.sin(Math.PI * f) * (1 - $ * $ * 0.5), k = A;
            t.push([
              y,
              k,
              E
            ]);
          }
        }
        const v = 13;
        for (let M = 0; M < 4; M++) for (let $ = 0; $ < 12; $++) {
          const A = u + M * v + $, q = u + M * v + $ + 1, b = u + (M + 1) * v + $ + 1, f = u + (M + 1) * v + $;
          o.push([
            A,
            q,
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
        const h = _t(t, o, {
          supports: s,
          loads: d
        }, i);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Opera:", h.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function hs() {
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
        const x = _t(l, s, {
          supports: a,
          loads: c
        }, w);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => $t(), 50), Ge(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function js() {
      var _a, _b;
      (_a = document.getElementById("fem-log-panel")) == null ? void 0 : _a.remove();
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
    function Ws() {
      var _a, _b, _c;
      (_a = document.getElementById("pushover-panel")) == null ? void 0 : _a.remove();
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
          var _a2;
          return parseFloat(((_a2 = t.querySelector(`#${u}`)) == null ? void 0 : _a2.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), c = o("po-L"), m = o("po-As") * 1e-4, r = o("po-nbar"), i = o("po-drift") / 100, h = o("po-ncycles"), S = t.querySelector("#pushover-status");
        S.textContent = "Generando historia de desplazamientos...";
        const w = [], x = i * a, p = 40;
        for (let u = 1; u <= h; u++) {
          const v = x * u / h;
          for (let M = 0; M <= p; M++) w.push(v * Math.sin(2 * Math.PI * M / p));
        }
        S.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: u } = await Us(async () => {
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
          S.textContent = `Completado: ${v.nSteps} pasos`, Ys(t.querySelector("#pushover-canvas"), v.displacements, v.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (u) {
          S.textContent = `Error: ${u.message}`, console.error("Pushover failed:", u);
        }
      });
    }
    function Ys(t, o, n, l) {
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
        const q = i + M * A;
        s.fillText((q * 1e3).toFixed(1), u(q), a - c.bottom + 15);
      }
      s.textAlign = "right";
      const $ = p / 5;
      for (let A = 0; A <= 5; A++) {
        const q = S + $ * A;
        s.fillText(q.toFixed(0), c.left - 5, v(q) + 3);
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
      }), t.querySelector("#nl-test").addEventListener("click", () => Gs(t));
    }
    function Gs(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), c = 100, m = [];
      for (let ne = 0; ne < a; ne++) {
        const re = d * (1 + ne * 0.5);
        for (let ee = 0; ee < c; ee++) {
          const U = ee / c * 2 * Math.PI;
          m.push(re * Math.sin(U));
        }
      }
      const r = o / n, i = l * n;
      let h = 0, S = 0, w = -r, x = r, p = 0, u = 0, v = 0, M = 0, $ = 0, A = 0;
      const q = [];
      for (const ne of m) {
        let re = w, ee = x, U = p, se = u, we = v, Ne = M, _e = $, ae = A, ge;
        const Se = ne - h;
        if (Math.abs(Se) < 1e-20) {
          q.push(S);
          continue;
        }
        if ((ae === 0 || ae === 3) && (Se < 0 ? (ae = 2, se = -r, we = -o, U = se, Ne = 0, _e = 0) : (ae = 1, se = r, we = o, U = se, Ne = 0, _e = 0)), ae === 2 && Se > 0) {
          ae = 1, Ne = h, _e = S, h < re && (re = h);
          const Ie = (ee - re) / (2 * 1 * r), De = 1 + 0 * Math.pow(Ie, 0.8);
          se = (o * De - i * r * De - _e + n * Ne) / (n - i), we = o * De + i * (se - r * De), U = ee;
        } else if (ae === 1 && Se < 0) {
          ae = 2, Ne = h, _e = S, h > ee && (ee = h);
          const Ie = (ee - re) / (2 * 1 * r), De = 1 + 0 * Math.pow(Ie, 0.8);
          se = (-o * De + i * r * De - _e + n * Ne) / (n - i), we = -o * De + i * (se + r * De), U = re;
        }
        const pe = Math.abs((U - se) / r);
        let Fe = s - 0.925 * pe / (0.15 + pe);
        Fe < 0.1 && (Fe = 0.1);
        const Oe = (ne - Ne) / (se - Ne), ot = 1 + Math.pow(Math.abs(Oe), Fe), oe = Math.pow(ot, 1 / Fe);
        ge = l * Oe + (1 - l) * Oe / oe, ge = ge * (we - _e) + _e, q.push(ge), h = ne, S = ge, w = re, x = ee, p = U, u = se, v = we, M = Ne, $ = _e, A = ae;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), y = b.width, E = b.height;
      f.clearRect(0, 0, y, E);
      const k = Math.max(...m.map(Math.abs)), O = Math.max(...q.map(Math.abs)), F = (y - 40) / (2 * k), L = (E - 40) / (2 * O), P = y / 2, _ = E / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, _), f.lineTo(y - 20, _), f.stroke(), f.beginPath(), f.moveTo(P, 20), f.lineTo(P, E - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", y - 40, _ - 5), f.fillText("\u03C3 (stress)", P + 30, 15), f.fillText(`\xB1${(k * 100).toFixed(1)}%`, y - 30, _ + 12), f.fillText(`\xB1${(O / 1e3).toFixed(0)} MPa`, P + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let ne = 0; ne < m.length; ne++) {
        const re = P + m[ne] * F, ee = _ - q[ne] * L;
        ne === 0 ? f.moveTo(re, ee) : f.lineTo(re, ee);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, _ - o * L), f.lineTo(y - 20, _ - o * L), f.stroke(), f.beginPath(), f.moveTo(20, _ + o * L), f.lineTo(y - 20, _ + o * L), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, y - 50, _ - o * L - 5);
      const te = t.querySelector("#nl-info");
      te.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Vs() {
      var _a, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = ha({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Mo = null;
    function Xs(t) {
      Mo && Mo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Yo(), l = Jo(), s = Object.entries(n).map(([r, i]) => `<option value="${i}">${r}</option>`).join(""), d = Object.entries(l).map(([r, i]) => `<option value="${i}">${r}</option>`).join("");
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
        o.remove(), Mo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const r = a.value, i = {
          secType: r
        };
        r === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : r === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : r === "W" || r === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : r === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : r === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((h) => ue.set(h, {
          ...i
        })), o.remove(), Mo = null, Qt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => ue.delete(r)), o.remove(), Mo = null, Qt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let wo = null;
    function Ks(t) {
      var _a, _b, _c;
      wo && wo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), c = Math.abs(s[2] - l[2]), m = a > d && a > c, r = Math.sqrt(d * d + a * a + c * c), i = Pe.get(t) ?? 0, h = (_c = (_b = (_a = e.elementInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (h == null ? void 0 : h.name) || (h ? `${h.type} ${((h.b ?? 0) * 100).toFixed(0)}x${((h.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
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
    `, document.body.appendChild(w), wo = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), wo = null, fo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        J.add(t), w.remove(), wo = null, fo(), be();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), wo = null, cs(t);
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
        const r = tt();
        if (!r) return null;
        const i = r.controls.object, h = new Ee(m[0], m[1], m[2]);
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
          const q = M[A], b = q.map((f) => d(v[f])).filter(Boolean);
          if (b.length !== 0) if (S) b.every((y) => y.x >= w && y.x <= x && y.y >= p && y.y <= u) && $.push(A);
          else {
            if (b.some((y) => y.x >= w && y.x <= x && y.y >= p && y.y <= u)) {
              $.push(A);
              continue;
            }
            if (q.length === 2) {
              const y = b[0], E = b[1];
              c(y.x, y.y, E.x, E.y, w, p, x, u) && $.push(A);
            }
          }
        }
        return $;
      }
      function c(m, r, i, h, S, w, x, p) {
        const u = (M, $) => M >= S && M <= x && $ >= w && $ <= p;
        if (u(m, r) || u(i, h)) return true;
        const v = (M, $, A, q, b, f, y, E) => {
          const k = (A - M) * (E - f) - (q - $) * (y - b);
          if (Math.abs(k) < 1e-10) return false;
          const O = ((b - M) * (E - f) - (f - $) * (y - b)) / k, F = ((b - M) * (q - $) - (f - $) * (A - M)) / k;
          return O >= 0 && O <= 1 && F >= 0 && F <= 1;
        };
        return v(m, r, i, h, S, w, x, w) || v(m, r, i, h, x, w, x, p) || v(m, r, i, h, S, p, x, p) || v(m, r, i, h, S, w, S, p);
      }
      o.addEventListener("mousedown", (m) => {
        Ft && (n = {
          x: m.offsetX,
          y: m.offsetY
        });
      }), o.addEventListener("mousemove", (m) => {
        if (jt) {
          const i = tt();
          if (!i) return;
          const h = ss(m.clientX, m.clientY, i.camera, i.rendererElm);
          if (ft.track && h.snapType === "node" && h.nodeIdx !== null && h.nodeIdx !== po && As(h.nodeIdx), ft.track && po !== null && h.worldPos && h.snapType !== "node") {
            const S = Cs(h.worldPos, po);
            S && (h.worldPos = S, h.snapType = "grid");
          }
          if (po !== null && h.worldPos) {
            const S = e.nodes.val[po];
            S && ns(m.clientX, m.clientY, new Ee(...S), h.worldPos);
          } else if (it !== null && h.worldPos) {
            const S = e.nodes.val[it];
            S && ns(m.clientX, m.clientY, new Ee(...S), h.worldPos);
          } else Pt && (Pt.remove(), Pt = null);
          h.nodeIdx, as(h), o.style.cursor = h.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Nt && !Ft) return;
        if (Ft && n) {
          const i = m.offsetX - n.x, h = m.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(h) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = i > 0, w = Math.min(n.x, m.offsetX), x = Math.min(n.y, m.offsetY), p = Math.abs(i), u = Math.abs(h);
            l.style.left = w + "px", l.style.top = x + "px", l.style.width = p + "px", l.style.height = u + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = xn(m);
        if (r >= 0) is(r), o.style.cursor = "pointer";
        else {
          if (qt) {
            const i = tt();
            i == null ? void 0 : i.scene.remove(qt), qt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = Ft ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (m) => {
        if (Ft && n) {
          const r = m.offsetX - n.x, i = m.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(i) > s) {
            const h = r > 0, S = a(n.x, n.y, m.offsetX, m.offsetY, h);
            m.ctrlKey || m.metaKey || (lt.clear(), no()), S.forEach((x) => {
              lt.has(x) || (lt.add(x), bn(x));
            }), so();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (m) => {
        if (jt) {
          const r = tt();
          if (!r) return;
          const i = ss(m.clientX, m.clientY, r.camera, r.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (_s(i), as(i));
          return;
        }
        if (Ft) {
          if (l) return;
          const r = xn(m), i = m.ctrlKey || m.metaKey;
          if (r >= 0) {
            if (i) if (lt.has(r)) {
              lt.delete(r);
              const h = oo.findIndex((S) => S.__elemIdx === r);
              if (h >= 0) {
                const S = tt();
                S == null ? void 0 : S.scene.remove(oo[h]), oo[h].geometry.dispose(), oo[h].material.dispose(), oo.splice(h, 1), S == null ? void 0 : S.render();
              }
            } else lt.add(r), bn(r);
            else lt.clear(), no(), lt.add(r), bn(r);
            so();
          } else i || (lt.clear(), no(), so());
          return;
        }
        if (Nt) {
          const r = xn(m);
          r >= 0 && (is(r), Ks(r));
        }
      });
    }, 500), ko.derive(() => {
      var _a;
      e.nodes.val, e.elements.val, (_a = e.nodeInputs) == null ? void 0 : _a.val, Ge();
    }), Je.modal = (t) => {
      var _a, _b;
      if (t === void 0 && (t = !kt), kt = t, (_a = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", kt), kt) {
        const n = tt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (X = n.settings.loads.rawVal, n.settings.loads.val = false), sn(), $e.querySelector("#cad3d-mode-prev").style.display = "", $e.querySelector("#cad3d-mode-next").style.display = "", $e.querySelector("#cad3d-mode-label").style.display = "";
      } else an(), $e.querySelector("#cad3d-mode-prev").style.display = "none", $e.querySelector("#cad3d-mode-next").style.display = "none", $e.querySelector("#cad3d-mode-label").style.display = "none", I && I !== "placa-q4" && I !== "placa-3q" && be(), setTimeout(() => {
        var _a2;
        const n = tt();
        ((_a2 = n == null ? void 0 : n.settings) == null ? void 0 : _a2.loads) && X && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${kt ? "ON" : "OFF"}`);
    }, Je.setMode = (t) => {
      var _a;
      if (!(le == null ? void 0 : le.modeShapes)) {
        console.error("No modal results");
        return;
      }
      mt = Math.max(0, Math.min(t, le.modeShapes.length - 1));
      const o = le.modeShapes[mt], { extent: n } = eo();
      let l = 0;
      for (let d = 0; d < Q.length; d++) {
        const a = o[d * 6] || 0, c = o[d * 6 + 1] || 0, m = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + c * c + m * m));
      }
      ze = l > 1e-12 ? n * 0.05 / l : 1, Lo();
      const s = $e.querySelector("#cad3d-mode-label");
      s && le.frequencies && (s.textContent = `Modo ${mt + 1} \u2014 ${le.frequencies[mt].toFixed(2)} Hz`), console.log(`Modo ${mt + 1}: f = ${(_a = le.frequencies) == null ? void 0 : _a[mt].toFixed(4)} Hz`);
    }, window.cad = Je, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild($e), document.body.appendChild(de.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Xe("edificio"), be(), Qn("edificio"));
    }, 100), document.body.appendChild(Ia());
    const gs = document.createElement("span");
    return gs.style.display = "none", gs;
  };
});
export {
  __tla,
  Ms as a,
  ba as c,
  Da as g
};
