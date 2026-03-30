const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-DZAQImEK.js","./plateQ4Cpp-CArWqXeL.js"])))=>i.map(i=>d[i]);
import { _ as Us, p as Mn, d as It, m as Zs, s as Qs, __tla as __tla_0 } from "./plateQ4Cpp-CArWqXeL.js";
import { v as yo, P as Oo, g as ea, a as ta, o as oa } from "./theme-CzzIlc4y.js";
import { V as ke, P as Qt, R as gs, b as xs, B as eo, c as na, d as wn, e as zo, f as sa, S as aa, M as la, g as ia, F as ao, a as Lo, L as Ro, h as ra, G as ca, A as No, i as Sn, T as En, j as Ho, k as Bo, C as da, l as pa } from "./Text-Cin90tvN.js";
import { g as Go, b as Vo, a as vo } from "./analyze-B0bulnNq.js";
import { g as jt, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as ro, s as Wt, m as Lt, t as Tn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let $s, ba, Da;
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
  const Ln = [
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
  ], $o = [
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
  const lo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function io(e, g) {
    const j = Ln.find((W) => W.id === e), z = $o.find((W) => W.id === g), J = j.toKN, N = z.toM, G = (W, xe, E) => E / (Math.pow(J, W) * Math.pow(N, xe));
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
      E: G(1, -2, lo.E),
      G: G(1, -2, lo.G),
      A: G(0, 2, lo.A),
      Iz: G(0, 4, lo.Iz),
      Iy: G(0, 4, lo.Iy),
      J: G(0, 4, lo.J),
      rho: G(1, -4, lo.rho),
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
  io("kN", "m"), io("kip", "in");
  function Do() {
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
    const g = e.force, [j, z, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: j,
          max: z,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: j,
          max: z,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: j,
          max: z,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: j,
          max: z,
          step: J,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: j,
          max: z,
          step: J,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: j,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: j,
          max: 0,
          step: J,
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
          step: J,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: j,
          max: 0,
          step: J,
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
    function j(z, J) {
      var _a, _b;
      if (!z.frequencies || z.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const N = [
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
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${J.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (D += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const H of J.properties) D += `<span style="color:#888">${H}</span>
`;
      D += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const H of N) D += `<th style="padding:2px 5px">${H}</th>`;
      if (D += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, z.frequencies.forEach((H, W) => {
        var _a2;
        const xe = H > 0 ? 1 / H : 0, E = H * 2 * Math.PI, ee = ((_a2 = z.massParticipation) == null ? void 0 : _a2[W]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ge = 0; ge < 6; ge++) G[ge] += ee[ge];
        D += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${W + 1}</td>
  <td style="padding:2px 6px; text-align:right">${H.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${xe.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${E.toFixed(2)}</td>`;
        for (let ge = 0; ge < 6; ge++) {
          const ce = (ee[ge] * 100).toFixed(1), K = ee[ge] > 0.5 ? "#f00" : ee[ge] > 0.1 ? "#ff0" : "#0f0";
          D += `<td style="padding:2px 5px; text-align:right; color:${K}">${ce}%</td>`;
        }
        D += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(G[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[5] * 100).toFixed(1)}%</td></tr>`;
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
        H.push(`Modal Analysis \u2014 ${J.title}`);
        const W = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${N.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        H.push(W), H.push("-".repeat(W.length));
        const xe = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        z.frequencies.forEach((ee, ge) => {
          var _a2;
          const ce = ee > 0 ? 1 / ee : 0, K = ee * 2 * Math.PI, Q = ((_a2 = z.massParticipation) == null ? void 0 : _a2[ge]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let de = 0; de < 6; de++) xe[de] += Q[de];
          const X = Q.map((de) => ((de * 100).toFixed(1) + "%").padStart(6)).join(" ");
          H.push(`${String(ge + 1).padStart(4)}  ${ee.toFixed(4).padStart(9)}  ${ce.toFixed(4).padStart(9)}  ${K.toFixed(2).padStart(9)}  ${X}  ${(xe[0] * 100).toFixed(1).padStart(5)}%  ${(xe[1] * 100).toFixed(1).padStart(5)}%  ${(xe[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(H.join(`
`));
        const E = e.querySelector("#modal-copy");
        E.textContent = "\u2713", setTimeout(() => E.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: j
    };
  };
  const ue = 64516e-8, L = 416231e-12, R = 0.0254, to = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * ue,
      Iz: 16.4 * L,
      Iy: 2.2 * L,
      J: 0.0405 * L,
      d: 5.9 * R,
      bf: 3.94 * R
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * ue,
      Iz: 29.1 * L,
      Iy: 9.32 * L,
      J: 0.103 * L,
      d: 5.99 * R,
      bf: 5.99 * R
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * ue,
      Iz: 41.4 * L,
      Iy: 13.3 * L,
      J: 0.204 * L,
      d: 6.2 * R,
      bf: 6.02 * R
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * ue,
      Iz: 30.8 * L,
      Iy: 2.09 * L,
      J: 0.0426 * L,
      d: 7.89 * R,
      bf: 3.94 * R
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * ue,
      Iz: 61.9 * L,
      Iy: 7.97 * L,
      J: 0.172 * L,
      d: 8.14 * R,
      bf: 5.25 * R
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * ue,
      Iz: 82.7 * L,
      Iy: 18.3 * L,
      J: 0.346 * L,
      d: 7.93 * R,
      bf: 6.5 * R
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * ue,
      Iz: 110 * L,
      Iy: 37.1 * L,
      J: 0.536 * L,
      d: 8 * R,
      bf: 7.995 * R
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * ue,
      Iz: 146 * L,
      Iy: 49.1 * L,
      J: 0.871 * L,
      d: 8.25 * R,
      bf: 8.07 * R
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * ue,
      Iz: 184 * L,
      Iy: 60.9 * L,
      J: 1.45 * L,
      d: 8.5 * R,
      bf: 8.11 * R
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * ue,
      Iz: 272 * L,
      Iy: 88.6 * L,
      J: 3.54 * L,
      d: 9 * R,
      bf: 8.28 * R
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * ue,
      Iz: 53.8 * L,
      Iy: 2.18 * L,
      J: 0.0547 * L,
      d: 9.87 * R,
      bf: 3.96 * R
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * ue,
      Iz: 118 * L,
      Iy: 11.4 * L,
      J: 0.239 * L,
      d: 10.17 * R,
      bf: 5.75 * R
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * ue,
      Iz: 171 * L,
      Iy: 36.6 * L,
      J: 0.583 * L,
      d: 9.73 * R,
      bf: 7.96 * R
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * ue,
      Iz: 272 * L,
      Iy: 93.4 * L,
      J: 1.39 * L,
      d: 9.98 * R,
      bf: 10 * R
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * ue,
      Iz: 394 * L,
      Iy: 134 * L,
      J: 3.56 * L,
      d: 10.4 * R,
      bf: 10.13 * R
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * ue,
      Iz: 623 * L,
      Iy: 207 * L,
      J: 10.9 * L,
      d: 11.1 * R,
      bf: 10.34 * R
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * ue,
      Iz: 88.6 * L,
      Iy: 2.36 * L,
      J: 0.0704 * L,
      d: 11.91 * R,
      bf: 3.97 * R
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * ue,
      Iz: 156 * L,
      Iy: 4.66 * L,
      J: 0.293 * L,
      d: 12.31 * R,
      bf: 4.03 * R
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * ue,
      Iz: 204 * L,
      Iy: 17.3 * L,
      J: 0.3 * L,
      d: 12.22 * R,
      bf: 6.49 * R
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * ue,
      Iz: 310 * L,
      Iy: 44.1 * L,
      J: 0.906 * L,
      d: 11.94 * R,
      bf: 8.01 * R
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * ue,
      Iz: 425 * L,
      Iy: 95.8 * L,
      J: 1.58 * L,
      d: 12.06 * R,
      bf: 9.99 * R
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * ue,
      Iz: 597 * L,
      Iy: 195 * L,
      J: 4.05 * L,
      d: 12.25 * R,
      bf: 12.04 * R
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * ue,
      Iz: 833 * L,
      Iy: 270 * L,
      J: 8.44 * L,
      d: 12.71 * R,
      bf: 12.16 * R
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * ue,
      Iz: 1070 * L,
      Iy: 345 * L,
      J: 16 * L,
      d: 13.12 * R,
      bf: 12.32 * R
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * ue,
      Iz: 199 * L,
      Iy: 7 * L,
      J: 0.208 * L,
      d: 13.74 * R,
      bf: 5 * R
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * ue,
      Iz: 291 * L,
      Iy: 19.6 * L,
      J: 0.38 * L,
      d: 13.84 * R,
      bf: 6.73 * R
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * ue,
      Iz: 385 * L,
      Iy: 26.7 * L,
      J: 0.798 * L,
      d: 14.1 * R,
      bf: 6.77 * R
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * ue,
      Iz: 485 * L,
      Iy: 51.4 * L,
      J: 1.45 * L,
      d: 13.79 * R,
      bf: 8.03 * R
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * ue,
      Iz: 640 * L,
      Iy: 107 * L,
      J: 2.19 * L,
      d: 13.89 * R,
      bf: 9.99 * R
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * ue,
      Iz: 882 * L,
      Iy: 148 * L,
      J: 5.07 * L,
      d: 14.31 * R,
      bf: 10.13 * R
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * ue,
      Iz: 1240 * L,
      Iy: 447 * L,
      J: 7.12 * L,
      d: 14.32 * R,
      bf: 14.61 * R
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * ue,
      Iz: 1530 * L,
      Iy: 548 * L,
      J: 12.3 * L,
      d: 14.66 * R,
      bf: 14.73 * R
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * ue,
      Iz: 2140 * L,
      Iy: 838 * L,
      J: 23.7 * L,
      d: 15.22 * R,
      bf: 15.65 * R
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * ue,
      Iz: 301 * L,
      Iy: 9.59 * L,
      J: 0.262 * L,
      d: 15.69 * R,
      bf: 5.5 * R
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * ue,
      Iz: 448 * L,
      Iy: 24.5 * L,
      J: 0.545 * L,
      d: 15.86 * R,
      bf: 6.99 * R
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * ue,
      Iz: 659 * L,
      Iy: 37.2 * L,
      J: 1.52 * L,
      d: 16.26 * R,
      bf: 7.07 * R
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * ue,
      Iz: 954 * L,
      Iy: 119 * L,
      J: 2.39 * L,
      d: 16.33 * R,
      bf: 10.24 * R
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * ue,
      Iz: 1300 * L,
      Iy: 163 * L,
      J: 5.45 * L,
      d: 16.75 * R,
      bf: 10.37 * R
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * ue,
      Iz: 510 * L,
      Iy: 15.3 * L,
      J: 0.506 * L,
      d: 17.7 * R,
      bf: 6 * R
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * ue,
      Iz: 800 * L,
      Iy: 40.1 * L,
      J: 1.24 * L,
      d: 17.99 * R,
      bf: 7.5 * R
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * ue,
      Iz: 1170 * L,
      Iy: 60.3 * L,
      J: 3.49 * L,
      d: 18.47 * R,
      bf: 7.64 * R
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * ue,
      Iz: 1750 * L,
      Iy: 201 * L,
      J: 5.86 * L,
      d: 18.59 * R,
      bf: 11.15 * R
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * ue,
      Iz: 843 * L,
      Iy: 20.7 * L,
      J: 0.77 * L,
      d: 20.66 * R,
      bf: 6.5 * R
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * ue,
      Iz: 1330 * L,
      Iy: 57.5 * L,
      J: 1.83 * L,
      d: 20.99 * R,
      bf: 8.24 * R
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * ue,
      Iz: 1830 * L,
      Iy: 81.4 * L,
      J: 4.34 * L,
      d: 21.43 * R,
      bf: 8.36 * R
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * ue,
      Iz: 2670 * L,
      Iy: 274 * L,
      J: 6.83 * L,
      d: 21.51 * R,
      bf: 12.34 * R
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * ue,
      Iz: 1350 * L,
      Iy: 29.1 * L,
      J: 1.18 * L,
      d: 23.57 * R,
      bf: 7.01 * R
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * ue,
      Iz: 2100 * L,
      Iy: 82.5 * L,
      J: 2.68 * L,
      d: 23.92 * R,
      bf: 8.99 * R
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * ue,
      Iz: 3100 * L,
      Iy: 259 * L,
      J: 4.72 * L,
      d: 24.06 * R,
      bf: 12.75 * R
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * ue,
      Iz: 4020 * L,
      Iy: 340 * L,
      J: 9.5 * L,
      d: 24.48 * R,
      bf: 12.86 * R
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * ue,
      Iz: 4580 * L,
      Iy: 391 * L,
      J: 12.6 * L,
      d: 24.74 * R,
      bf: 12.9 * R
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * ue,
      Iz: 5680 * L,
      Iy: 479 * L,
      J: 21.2 * L,
      d: 25.24 * R,
      bf: 12.9 * R
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * ue,
      Iz: 2850 * L,
      Iy: 106 * L,
      J: 2.81 * L,
      d: 26.71 * R,
      bf: 9.96 * R
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * ue,
      Iz: 4090 * L,
      Iy: 159 * L,
      J: 6.77 * L,
      d: 27.29 * R,
      bf: 10.07 * R
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * ue,
      Iz: 3610 * L,
      Iy: 115 * L,
      J: 3.06 * L,
      d: 29.53 * R,
      bf: 10.4 * R
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * ue,
      Iz: 4930 * L,
      Iy: 164 * L,
      J: 6.43 * L,
      d: 30.01 * R,
      bf: 10.5 * R
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * ue,
      Iz: 5900 * L,
      Iy: 187 * L,
      J: 5.3 * L,
      d: 32.86 * R,
      bf: 11.48 * R
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * ue,
      Iz: 7800 * L,
      Iy: 225 * L,
      J: 7 * L,
      d: 35.55 * R,
      bf: 11.95 * R
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * ue,
      Iz: 8.22 * L,
      Iy: 8.22 * L,
      J: 13.4 * L,
      d: 4 * R,
      bf: 4 * R
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * ue,
      Iz: 10.7 * L,
      Iy: 10.7 * L,
      J: 17.9 * L,
      d: 4 * R,
      bf: 4 * R
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * ue,
      Iz: 12.3 * L,
      Iy: 12.3 * L,
      J: 21 * L,
      d: 4 * R,
      bf: 4 * R
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * ue,
      Iz: 30.3 * L,
      Iy: 30.3 * L,
      J: 48.3 * L,
      d: 6 * R,
      bf: 6 * R
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * ue,
      Iz: 41.1 * L,
      Iy: 41.1 * L,
      J: 66.9 * L,
      d: 6 * R,
      bf: 6 * R
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * ue,
      Iz: 49.6 * L,
      Iy: 49.6 * L,
      J: 82.2 * L,
      d: 6 * R,
      bf: 6 * R
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * ue,
      Iz: 70.7 * L,
      Iy: 70.7 * L,
      J: 112 * L,
      d: 8 * R,
      bf: 8 * R
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * ue,
      Iz: 98 * L,
      Iy: 98 * L,
      J: 158 * L,
      d: 8 * R,
      bf: 8 * R
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * ue,
      Iz: 122 * L,
      Iy: 122 * L,
      J: 199 * L,
      d: 8 * R,
      bf: 8 * R
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * ue,
      Iz: 202 * L,
      Iy: 202 * L,
      J: 323 * L,
      d: 10 * R,
      bf: 10 * R
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * ue,
      Iz: 254 * L,
      Iy: 254 * L,
      J: 412 * L,
      d: 10 * R,
      bf: 10 * R
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * ue,
      Iz: 355 * L,
      Iy: 355 * L,
      J: 564 * L,
      d: 12 * R,
      bf: 12 * R
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * ue,
      Iz: 452 * L,
      Iy: 452 * L,
      J: 724 * L,
      d: 12 * R,
      bf: 12 * R
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * ue,
      Iz: 18 * L,
      Iy: 9.58 * L,
      J: 22.6 * L,
      d: 6 * R,
      bf: 4 * R
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * ue,
      Iz: 23.8 * L,
      Iy: 12.3 * L,
      J: 30.3 * L,
      d: 6 * R,
      bf: 4 * R
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * ue,
      Iz: 33.6 * L,
      Iy: 11.8 * L,
      J: 33 * L,
      d: 8 * R,
      bf: 4 * R
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * ue,
      Iz: 45.1 * L,
      Iy: 15 * L,
      J: 44.5 * L,
      d: 8 * R,
      bf: 4 * R
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * ue,
      Iz: 46.1 * L,
      Iy: 28.2 * L,
      J: 61.3 * L,
      d: 8 * R,
      bf: 6 * R
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * ue,
      Iz: 63 * L,
      Iy: 37.5 * L,
      J: 84.6 * L,
      d: 8 * R,
      bf: 6 * R
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * ue,
      Iz: 103 * L,
      Iy: 47.1 * L,
      J: 115 * L,
      d: 10 * R,
      bf: 6 * R
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * ue,
      Iz: 196 * L,
      Iy: 102 * L,
      J: 249 * L,
      d: 12 * R,
      bf: 8 * R
    }
  ];
  function jo() {
    const e = {};
    return to.forEach((g, j) => {
      g.type === "W" && (e[g.name] = j);
    }), e;
  }
  function Wo() {
    const e = {};
    return to.forEach((g, j) => {
      g.type === "HSS" && (e[g.name] = j);
    }), e;
  }
  function ha(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: j, elementInputs: z, nodeInputs: J, deformOutputs: N } = e, G = g.length * 6, D = j.length, H = j.filter((K) => K.length === 2).length, W = j.filter((K) => K.length >= 3).length, xe = document.createElement("div");
    xe.className = "rpt-overlay";
    let E = "";
    E += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', E += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", E += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', E += '<hr class="rpt-sep"/>', E += "<h2>1. Input Data</h2>", E += '<table class="rpt-info"><tbody>', E += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, E += `<tr><td>Number of elements</td><td class="val">${D} (${H} frames, ${W} shells)</td></tr>`, E += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', E += `<tr><td>Total DOFs</td><td class="val">${G}</td></tr>`, E += "</tbody></table>", E += "<h3>1.1 Node Coordinates</h3>", E += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((K, Q) => {
      E += `<tr><td>${Q}</td><td>${De(K[0])}</td><td>${De(K[1])}</td><td>${De(K[2])}</td></tr>`;
    }), E += "</tbody></table>", E += "<h3>1.2 Element Connectivity</h3>", E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', j.forEach((K, Q) => {
      var _a2, _b2, _c2, _d2;
      const X = K.length === 2, de = K.map((et) => g[et]), Y = X ? ro(Wt(de[1], de[0])) : 0, Le = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(Q)) ?? 0, Re = ((_b2 = z.areas) == null ? void 0 : _b2.get(Q)) ?? 0, Me = ((_c2 = z.momentsOfInertiaZ) == null ? void 0 : _c2.get(Q)) ?? 0, We = ((_d2 = z.momentsOfInertiaY) == null ? void 0 : _d2.get(Q)) ?? 0;
      E += `<tr><td>${Q}</td><td>${X ? "Frame" : "Shell"}</td><td>${K.join(" \u2192 ")}</td>`, E += `<td>${De(Y)}</td><td>${De(Le)}</td><td>${De(Re)}</td><td>${De(Me)}</td><td>${De(We)}</td></tr>`;
    }), E += "</tbody></table>", E += "<h2>2. Element Formulation</h2>", H > 0 && (E += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", E += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", E += "<h4>2.1.1 Shape Functions</h4>", E += "<p><b>Axial</b> (linear interpolation):</p>", E += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', E += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', E += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', E += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', E += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', E += "</tbody></table>", E += xa(), E += "<p><b>Torsion</b> (linear): same as axial.</p>", E += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", E += "<p>The B matrix relates nodal displacements to internal strains:</p>", E += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', E += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', E += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', E += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', E += "<h4>2.1.3 Constitutive Relations D</h4>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', E += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', E += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', E += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', E += "</tbody></table>", E += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", E += "<p>Obtained by analytical integration:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', E += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", E += '<div class="rpt-eq-small">', E += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", E += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", E += "</div>", E += "<h4>2.1.5 Transformation Matrix T</h4>", E += "<p>Direction cosines of element axis:</p>", E += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', E += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', E += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', E += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", E += "<h4>2.1.6 Global Stiffness Matrix</h4>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), E += "<h2>3. Numerical Results per Element</h2>", E += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let K = 0; K < D; K++) {
      const Q = j[K], X = Q.map((Nt) => g[Nt]);
      if (!(Q.length === 2)) continue;
      const Y = ro(Wt(X[1], X[0])), Le = ((_a = z.elasticities) == null ? void 0 : _a.get(K)) ?? 0, Re = ((_b = z.areas) == null ? void 0 : _b.get(K)) ?? 0, Me = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(K)) ?? 0, We = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(K)) ?? 0, et = ((_e = z.shearModuli) == null ? void 0 : _e.get(K)) ?? 0, ft = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(K)) ?? 0;
      let rt = null, ct = null, wt = null;
      try {
        rt = Go(X, z, K), ct = Vo(X), wt = Lt(Tn(ct), Lt(rt, ct));
      } catch {
        continue;
      }
      const Ft = Wt(X[1], X[0]), $t = Ft[0] / Y, St = Ft[1] / Y, Yt = Ft[2] / Y;
      E += '<div class="rpt-elem-block">', E += `<h3 class="rpt-elem-title" data-toggle="elem${K}">\u25B6 Element ${K} \u2014 Nodes ${Q[0]} \u2192 ${Q[1]}, L = ${De(Y)}</h3>`, E += `<div id="rpt-elem${K}" class="rpt-elem-body" style="display:none">`, E += "<h4>Properties (numerical substitution)</h4>", E += '<div class="rpt-eq-small">', E += `E = ${De(Le)} &nbsp;&nbsp; A = ${De(Re)} &nbsp;&nbsp; I<sub>z</sub> = ${De(Me)} &nbsp;&nbsp; I<sub>y</sub> = ${De(We)} &nbsp;&nbsp; G = ${De(et)} &nbsp;&nbsp; J = ${De(ft)}<br/>`, E += `EA/L = ${De(Le)}\xB7${De(Re)}/${De(Y)} = <b>${De(Le * Re / Y)}</b><br/>`, E += `12EI<sub>z</sub>/L\xB3 = 12\xB7${De(Le)}\xB7${De(Me)}/${De(Y)}\xB3 = <b>${De(12 * Le * Me / Y ** 3)}</b><br/>`, E += `12EI<sub>y</sub>/L\xB3 = 12\xB7${De(Le)}\xB7${De(We)}/${De(Y)}\xB3 = <b>${De(12 * Le * We / Y ** 3)}</b><br/>`, E += `GJ/L = ${De(et)}\xB7${De(ft)}/${De(Y)} = <b>${De(et * ft / Y)}</b>`, E += "</div>", E += "<h4>Direction cosines</h4>", E += `<div class="rpt-eq-small">l = ${Yo($t)}, m = ${Yo(St)}, n = ${Yo(Yt)}, D = ${Yo(Math.sqrt($t ** 2 + St ** 2))}</div>`, E += "<h4>K<sub>local</sub> (12\xD712)</h4>", E += kn(rt, 12), E += "<h4>T \u2014 Transformation (12\xD712)</h4>", E += kn(ct, 12), E += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", E += kn(wt, 12), E += "<h4>Assembly</h4>", E += `<div class="rpt-eq-small">Global DOFs: node ${Q[0]} \u2192 [${Q[0] * 6}..${Q[0] * 6 + 5}], node ${Q[1]} \u2192 [${Q[1] * 6}..${Q[1] * 6 + 5}]</div>`, E += "</div></div>";
    }
    E += "<h2>4. Global Assembly</h2>", E += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${D - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, E += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", E += va(j, g.length), E += "<h2>5. Boundary Conditions</h2>";
    const ee = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ge = [];
    if (E += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const K of ee) E += `<th>${K}</th>`;
      E += "</tr></thead><tbody>", J.supports.forEach((K, Q) => {
        E += `<tr><td>${Q}</td>`, K.forEach((X, de) => {
          X && ge.push(Q * 6 + de), E += `<td class="${X ? "fixed" : ""}">${X ? "Fixed" : "Free"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += `<div class="rpt-eq-small">Fixed DOFs: [${ge.join(", ")}] \u2192 ${ge.length} constraints<br/>`, E += `Free DOFs: ${G} \u2212 ${ge.length} = <b>${G - ge.length}</b></div>`, E += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const K = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const Q of K) E += `<th>${Q}</th>`;
      E += "</tr></thead><tbody>", J.loads.forEach((Q, X) => {
        E += `<tr><td>${X}</td>`, Q.forEach((de) => {
          const Y = Math.abs(de) > 1e-10;
          E += `<td class="${Y ? "nz" : ""}">${Y ? De(de) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>6. Solution</h2>", E += "<p>After removing fixed DOFs, the reduced system is:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', E += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", E += "<h3>6.1 Nodal Displacements</h3>", N == null ? void 0 : N.deformations) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const K of ee) E += `<th>${K}</th>`;
      E += "</tr></thead><tbody>", N.deformations.forEach((K, Q) => {
        E += `<tr><td>${Q}</td>`, K.forEach((X) => {
          const de = Math.abs(X) > 1e-10;
          E += `<td class="${de ? "nz" : ""}">${De(X, 6)}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h3>6.2 Reactions</h3>", E += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', N == null ? void 0 : N.reactions) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const K of ee) E += `<th>${K}</th>`;
      E += "</tr></thead><tbody>", N.reactions.forEach((K, Q) => {
        E += `<tr><td>${Q}</td>`, K.forEach((X) => {
          const de = Math.abs(X) > 1e-10;
          E += `<td class="${de ? "nz-react" : ""}">${de ? De(X, 4) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>7. Internal Forces</h2>", E += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", E += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', E += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', N == null ? void 0 : N.deformations) {
      const K = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const Q of K) E += `<th>${Q}<sub>i</sub></th>`;
      for (const Q of K) E += `<th>${Q}<sub>j</sub></th>`;
      E += "</tr></thead><tbody>";
      for (let Q = 0; Q < D; Q++) {
        const X = j[Q];
        if (X.length !== 2) continue;
        const de = X.map((Y) => g[Y]);
        try {
          const Y = Go(de, z, Q), Le = Vo(de), Re = [];
          for (const et of X) {
            const ft = ((_g = N.deformations) == null ? void 0 : _g.get(et)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Re.push(...ft);
          }
          const Me = Lt(Le, Re), We = Lt(Y, Me);
          E += `<tr><td>${Q}</td><td>${X.join("\u2192")}</td>`;
          for (let et = 0; et < 12; et++) {
            const ft = Math.abs(We[et]) > 1e-10;
            E += `<td class="${ft ? "nz" : ""}">${De(We[et], 2)}</td>`;
          }
          E += "</tr>";
        } catch {
        }
      }
      E += "</tbody></table>";
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
    return xe.innerHTML = ce + E, (_h = xe.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => xe.remove()), xe.querySelectorAll("[data-toggle]").forEach((K) => {
      K.addEventListener("click", () => {
        const Q = K.dataset.toggle, X = xe.querySelector(`#rpt-${Q}`);
        if (X) {
          const de = X.style.display !== "none";
          X.style.display = de ? "none" : "", K.textContent = K.textContent.replace(/^[▼▶]/, de ? "\u25B6" : "\u25BC");
        }
      });
    }), xe;
  }
  function De(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function Yo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function kn(e, g) {
    var _a;
    const j = Math.min(g, 12);
    let z = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < j; J++) {
      z += "<tr>";
      for (let N = 0; N < j; N++) {
        const G = ((_a = e[J]) == null ? void 0 : _a[N]) ?? 0, D = Math.abs(G) < 1e-10;
        z += `<td class="${D ? "z" : ""} ${J === N && !D ? "diag" : ""}">${D ? "0" : ga(G)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", g > j && (z += `<div style="color:#888;font-size:9pt">(showing ${j}\xD7${j} of ${g}\xD7${g})</div>`), z += "</div>", z;
  }
  function ga(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function xa() {
    const G = [
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
    for (const H of G) {
      let W = "";
      for (let ge = 0; ge <= 80; ge++) {
        const ce = ge / 80, K = 30 + ce * 540, Q = 180 / 2 - H.fn(ce) * 60;
        W += (ge === 0 ? "M" : "L") + `${K.toFixed(1)},${Q.toFixed(1)}`;
      }
      D += `<path d="${W}" fill="none" stroke="${H.color}" stroke-width="2.5"/>`;
      const xe = 0.75, E = 30 + xe * 540 + 8, ee = 180 / 2 - H.fn(xe) * 60 - 6;
      D += `<text x="${E}" y="${ee}" fill="${H.color}" font-size="11" font-weight="bold" font-family="sans-serif">${H.name}</text>`;
    }
    return D += "</svg>", D;
  }
  function va(e, g) {
    const j = g * 6, z = Math.min(j, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let G = 0; G < z; G++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
    J += "</tr>";
    const N = Array.from({
      length: z
    }, () => Array(z).fill(0));
    for (let G = 0; G < e.length; G++) {
      const D = e[G].map((H) => H * 6);
      for (const H of D) for (const W of D) for (let xe = 0; xe < 6; xe++) for (let E = 0; E < 6; E++) {
        const ee = H + xe, ge = W + E;
        ee < z && ge < z && N[ee][ge]++;
      }
    }
    for (let G = 0; G < z; G++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
      for (let D = 0; D < z; D++) {
        const H = N[G][D], W = H === 0 ? "#fff" : H === 1 ? "#e8f0fe" : H === 2 ? "#c6dcf5" : "#a0c4e8", xe = H === 0 ? "" : H.toString();
        J += `<td style="background:${W};color:#003366">${xe}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", j > z && (J += `<div style="color:#888;font-size:9pt">(showing ${z}\xD7${z} of ${j}\xD7${j})</div>`), J;
  }
  let In = false;
  function ya(e) {
    if (In || window.katex) {
      In = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const j = document.createElement("script");
    j.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", j.onload = () => {
      In = true, e();
    }, document.head.appendChild(j);
  }
  function vs(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function $a(e, g, j, z, J, N) {
    var _a, _b, _c, _d, _e, _f;
    const G = j[e], D = G.map((ct) => g[ct]), H = G.length === 2, W = H ? ro(Wt(D[1], D[0])) : 0, xe = ((_a = z.elasticities) == null ? void 0 : _a.get(e)) ?? 0, E = ((_b = z.areas) == null ? void 0 : _b.get(e)) ?? 0, ee = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ge = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ce = ((_e = z.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, K = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let Q = null, X = null, de = null;
    try {
      Q = Go(D, z, e), X = Vo(D), de = Lt(Tn(X), Lt(Q, X));
    } catch {
    }
    const Y = H ? Wt(D[1], D[0]) : [
      0,
      0,
      0
    ], Le = W > 0 ? Y[0] / W : 0, Re = W > 0 ? Y[1] / W : 0, Me = W > 0 ? Y[2] / W : 0, We = Math.sqrt(Le ** 2 + Re ** 2), et = [];
    if ((J == null ? void 0 : J.deformations) && H) for (const ct of G) {
      const wt = J.deformations.get(ct) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      et.push(...wt);
    }
    let ft = [], rt = [];
    if (et.length === 12 && X && Q) {
      try {
        ft = Lt(X, et);
      } catch {
        ft = Array(12).fill(0);
      }
      try {
        rt = Lt(Q, ft);
      } catch {
        rt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: G,
      elmNodes: D,
      isFrame: H,
      L: W,
      E: xe,
      A: E,
      Iz: ee,
      Iy: ge,
      G: ce,
      J: K,
      kLocal: Q,
      T: X,
      kGlobal: de,
      l: Le,
      m: Re,
      n: Me,
      D: We,
      uGlobal: et,
      uLocal: ft,
      fLocal: rt,
      dOut: J,
      aOut: N,
      totalNodes: g.length
    };
  }
  function Ma(e, g, j, z, J, N) {
    var _a, _b;
    const G = $a(e, g, j, z, J, N), D = document.createElement("div");
    return D.className = "er-panel", D.innerHTML = ka + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${G.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${G.elem.join(" \u2192 ")} \u2014 L = ${qe(G.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${wa(G)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ys(G)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Sa(G)}</div>
  `, D.querySelectorAll(".er-tab").forEach((H) => {
      H.addEventListener("click", () => {
        D.querySelectorAll(".er-tab").forEach((xe) => xe.classList.remove("active")), H.classList.add("active");
        const W = H.dataset.tab;
        D.querySelectorAll(".er-body").forEach((xe) => xe.style.display = "none"), D.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = D.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => D.remove()), (_b = D.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const H = D.classList.toggle("er-fullscreen-mode"), W = D.querySelector("#er-fullscreen");
      W && (W.textContent = H ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const H = D.querySelector("#er-sf-canvas");
      H && zn(H);
      const W = D.querySelector("#er-sf-canvas-math");
      W && zn(W);
    }, 50), ya(() => {
      const H = D.querySelector("#er-body-math");
      H && (H.innerHTML = ys(G)), setTimeout(() => {
        const W = D.querySelector("#er-sf-canvas-math");
        W && zn(W);
      }, 50), D.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const xe = W.dataset.toggle, E = D.querySelector(`#er-${xe}`);
          E && (E.style.display = E.style.display === "none" ? "" : "none");
        });
      });
    }), D;
  }
  function wa(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${qe(e.E)}</td><td>A</td><td>${qe(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${qe(e.Iz)}</td><td>I<sub>y</sub></td><td>${qe(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${qe(e.G)}</td><td>J</td><td>${qe(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += Fo(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += Fo(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += Fo(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
        for (let J = 0; J < 6; J++) {
          const N = e.uGlobal[z * 6 + J];
          g += `${j[J]}=<span class="${Math.abs(N) > 1e-10 ? "nz" : ""}">${qe(N, 6)}</span> `;
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
  function ys(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const j = (xe) => vs(xe), z = (xe) => vs(xe, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${z("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${j("\\text{Nodo } i")} = (${e.elmNodes[0].map((xe) => qe(xe)).join(", ")})<br/>`, g += `${j("\\text{Nodo } j")} = (${e.elmNodes[1].map((xe) => qe(xe)).join(", ")})<br/>`, g += `${z(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${qe(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${z("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${z("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${j("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${z("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${j("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${z("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${z("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${z("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${z("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${j("I_z")})</div>`, g += `<div class="er-eq">${z("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${j("I_y")})</div>`, g += `<div class="er-eq">${z("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${z("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${z(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${qe(e.E)} \\times ${qe(e.A)} = \\mathbf{${qe(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${qe(e.E)} \\times ${qe(e.Iz)} = \\mathbf{${qe(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${qe(e.E)} \\times ${qe(e.Iy)} = \\mathbf{${qe(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${qe(e.G)} \\times ${qe(e.J)} = \\mathbf{${qe(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${j("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, N = e.E * e.Iz / e.L ** 3, G = e.E * e.Iy / e.L ** 3, D = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${z("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${z("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${j("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${z("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${qe(e.E)}\\times${qe(e.A)}}{${qe(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${z(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${qe(J)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${j("v(\\xi)")}</p>`, g += `<div class="er-eq">${z("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${z("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${z("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${j("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${z("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${j("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${z("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${qe(e.E)} \\times ${qe(e.Iz)}}{${qe(e.L)}^3} = \\mathbf{${qe(12 * N)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${j("\\theta_x")} y ${j("GJ")}:</p>`, g += `<div class="er-eq">${z(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${qe(e.G)}\\times${qe(e.J)}}{${qe(e.L)}} = \\mathbf{${qe(D)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${j("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${z("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${qe(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${z(`\\frac{EA}{L} = \\mathbf{${qe(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${qe(12 * N)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${qe(12 * G)}}`)}</div>`, g += `<div class="er-eq">${z(`\\frac{GJ}{L} = \\mathbf{${qe(D)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${qe(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${qe(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${z(`\\frac{6EI_z}{L^2} = \\mathbf{${qe(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${qe(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${j("\\mathbf{K}_{local}")} (12x12)</div>`, g += Fo(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${z(`l = \\frac{x_j - x_i}{L} = ${Jo(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Jo(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Jo(e.n)}`)}</div>`, g += `<div class="er-eq">${z(`D = \\sqrt{l^2 + m^2} = ${Jo(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${j(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const xe = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${z(xe)}</div>`;
    } else g += `<div class="er-eq">${z("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${z("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${j("\\mathbf{K}_{global}")} = ${j("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += Fo(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const H = e.elem[0] * 6, W = e.elem[1] * 6;
    if (g += `<div class="er-eq">${z(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${H} \\ldots ${H + 5}]`)}</div>`, g += `<div class="er-eq">${z(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, g += `<div class="er-eq">${z("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${z("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${z("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((xe) => xe !== 0)) {
      const xe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const E of xe) g += `<th>${E}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[E], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${qe(e.fLocal[E], 3)}</td>`;
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
        for (let J = 0; J < 6; J++) {
          const N = e.uGlobal[z * 6 + J];
          g += `<td class="${Math.abs(N) > 1e-10 ? "nz" : ""}">${qe(N, 6)}</td>`;
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
  function Jo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Fo(e) {
    var _a;
    const g = e.length, j = Math.min(g, 12);
    let z = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < j; J++) {
      z += "<tr>";
      for (let N = 0; N < j; N++) {
        const G = ((_a = e[J]) == null ? void 0 : _a[N]) ?? 0, D = Math.abs(G) < 1e-10;
        z += `<td class="${D ? "z" : ""} ${J === N && !D ? "diag" : ""}">${D ? "0" : Ea(G)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", g > j && (z += `<div style="color:var(--fem-label);font-size:9px">(${j}\xD7${j} de ${g}\xD7${g})</div>`), z += "</div>", z;
  }
  function Ea(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function zn(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const j = e.width, z = e.height, J = 30, N = j - 2 * J, G = (z - 3 * J) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, j, z);
    const D = (H, W, xe) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(J, H, N, G), g.strokeStyle = "#444", g.beginPath(), g.moveTo(J, H + G / 2), g.lineTo(J + N, H + G / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(W, J + 4, H + 14);
      for (const ee of xe) {
        g.strokeStyle = ee.color, g.lineWidth = 2.5, g.beginPath();
        for (let ge = 0; ge <= 100; ge++) {
          const ce = ge / 100, K = J + ce * N, Q = H + G / 2 - ee.fn(ce) * (G / 2 * 0.85);
          ge === 0 ? g.moveTo(K, Q) : g.lineTo(K, Q);
        }
        g.stroke();
      }
      let E = J + N - 90;
      for (const ee of xe) g.fillStyle = ee.color, g.font = "bold 10px sans-serif", g.fillText(ee.label, E, H + G - 6), E += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", J, H + G + 12), g.fillText("1", J + N - 6, H + G + 12), g.fillText("\u03BE", J + N / 2, H + G + 12);
    };
    D(J, "Axial (lineal)", [
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
    ]), D(J + G + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
</style>`, To = [
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
  let Xo = false, co = null, Tt = null, ht = null, pt = null;
  function Ia() {
    pt = document.createElement("button"), pt.id = "help-tour-btn", pt.innerHTML = "?", pt.title = "Ayuda interactiva \u2014 Tour guiado", pt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, pt.addEventListener("mouseenter", () => {
      pt.style.transform = "scale(1.15)", pt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), pt.addEventListener("mouseleave", () => {
      pt.style.transform = "scale(1)", pt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), pt.addEventListener("click", () => {
      Xo ? Fn() : za();
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
  `, document.head.appendChild(e), pt;
  }
  function za() {
    Xo = true, pt && (pt.innerHTML = "\u2715", pt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", pt.style.animation = "none"), co = document.createElement("div"), co.id = "tour-overlay", co.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(co), Mo(0);
  }
  function Fn() {
    Xo = false, pt && (pt.innerHTML = "?", pt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", pt.style.animation = "helpPulse 2s infinite"), Tt && (Tt.remove(), Tt = null), ht && (ht.remove(), ht = null), co && (co.remove(), co = null);
  }
  function Mo(e) {
    var _a, _b;
    if (e >= To.length) {
      La();
      return;
    }
    const g = To[e], j = document.querySelector(g.selector);
    if (!j) {
      Mo(e + 1);
      return;
    }
    j.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Tt && Tt.remove(), ht && ht.remove();
    const z = j.getBoundingClientRect(), J = window.innerWidth, N = window.innerHeight, G = 320, D = 180;
    Tt = document.createElement("div"), Tt.style.cssText = `
    position: fixed;
    left: ${z.left - 6}px; top: ${z.top - 6}px;
    width: ${z.width + 12}px; height: ${z.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Tt);
    const H = J - z.right, W = z.left, xe = N - z.bottom, E = z.top;
    let ee = g.position || "bottom";
    ee === "bottom" && xe < D + 20 && (ee = "top"), ee === "top" && E < D + 20 && (ee = "right"), ee === "right" && H < G + 20 && (ee = "left"), ee === "left" && W < G + 20 && (ee = "bottom");
    let ge, ce, K = "";
    switch (ee) {
      case "bottom":
        ge = z.left + z.width / 2 - G / 2, ce = z.bottom + 14, K = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ge = z.left + z.width / 2 - G / 2, ce = z.top - D - 14, K = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ge = z.right + 14, ce = z.top + z.height / 2 - D / 2, K = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ge = z.left - G - 14, ce = z.top + z.height / 2 - D / 2, K = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ge = Math.max(10, Math.min(ge, J - G - 10)), ce = Math.max(10, Math.min(ce, N - D - 10)), ht = document.createElement("div"), ht.style.cssText = `
    position: fixed;
    left: ${ge}px; top: ${ce}px;
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
  `, ht.innerHTML = `
    <div style="${K}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${To.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < To.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${To.map((X, de) => `<div style="width:${de === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${de === e ? "#0099ff" : de < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(ht), (_a = ht.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Mo(e + 1);
    }), (_b = ht.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Mo(e - 1);
    });
    const Q = (X) => {
      if (!Xo) {
        document.removeEventListener("keydown", Q);
        return;
      }
      (X.key === "ArrowRight" || X.key === "Enter") && (Mo(e + 1), document.removeEventListener("keydown", Q)), X.key === "ArrowLeft" && (Mo(Math.max(0, e - 1)), document.removeEventListener("keydown", Q)), X.key === "Escape" && (Fn(), document.removeEventListener("keydown", Q));
    };
    document.addEventListener("keydown", Q);
  }
  function La() {
    var _a;
    Tt && (Tt.remove(), Tt = null), ht && (ht.remove(), ht = null), ht = document.createElement("div"), ht.style.cssText = `
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
  `, ht.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(ht), (_a = ht.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => Fn());
  }
  function Ta(e) {
    var _a;
    const g = e.split(/\r?\n/), j = {
      force: "TONF",
      length: "M"
    }, z = [], J = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = [], H = [], W = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), E = [], ee = [];
    let ge = "", ce = "";
    for (const fe of g) {
      const ve = fe.trim();
      if (!ve || ve.startsWith("$")) {
        ve.startsWith("$ ") && (ce = ve.substring(2).trim());
        continue;
      }
      if (ce === "CONTROLS") {
        const te = ve.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        te && (j.force = te[1], j.length = te[2]);
        const ye = ve.match(/TITLE2\s+"([^"]+)"/);
        ye && (ge = ye[1]);
      }
      if (ce === "STORIES - IN SEQUENCE FROM TOP") {
        const te = ve.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (te) {
          const ye = te[1], V = te[2] ? parseFloat(te[2]) : 0, be = te[3] ? parseFloat(te[3]) : void 0;
          z.push({
            name: ye,
            height: V,
            elev: be ?? 0
          });
        }
      }
      if (ce === "MATERIAL PROPERTIES") {
        const te = ve.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (te) {
          const ye = te[1];
          J.has(ye) || J.set(ye, {
            type: te[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const V = J.get(ye);
          te[2] && (V.type = te[2]);
          const be = ve.match(/\bE\s+([\d.eE+-]+)/);
          be && (V.E = parseFloat(be[1]));
          const Ae = ve.match(/\bU\s+([\d.eE+-]+)/);
          Ae && (V.nu = parseFloat(Ae[1]), V.G = V.E / (2 * (1 + V.nu)));
          const Te = ve.match(/\bFY\s+([\d.eE+-]+)/);
          Te && (V.fy = parseFloat(Te[1]));
          const Xe = ve.match(/\bFC\s+([\d.eE+-]+)/);
          Xe && (V.fc = parseFloat(Xe[1]));
          const Ke = ve.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ke && (V.density = parseFloat(Ke[1]));
        }
      }
      if (ce === "FRAME SECTIONS") {
        const te = ve.match(/FRAMESECTION\s+"([^"]+)"/);
        if (te) {
          const ye = te[1];
          N.has(ye) || N.set(ye, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const V = N.get(ye), be = ve.match(/MATERIAL\s+"([^"]+)"/);
          be && (V.material = be[1]);
          const Ae = ve.match(/SHAPE\s+"([^"]+)"/);
          Ae && (V.shape = Ae[1]);
          const Te = ve.match(/\bD\s+([\d.eE+-]+)/);
          Te && (V.D = parseFloat(Te[1]));
          const Xe = ve.match(/\bB\s+([\d.eE+-]+)/);
          Xe && (V.B = parseFloat(Xe[1]));
          const Ke = ve.match(/\bTF\s+([\d.eE+-]+)/);
          Ke && (V.TF = parseFloat(Ke[1]));
          const Ze = ve.match(/\bTW\s+([\d.eE+-]+)/);
          Ze && (V.TW = parseFloat(Ze[1]));
          const Ue = ve.match(/\bR\s+([\d.eE+-]+)/);
          Ue && (V.R = parseFloat(Ue[1]));
          const Ve = ve.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ve && (V.fillMaterial = Ve[1]);
          const Ne = ve.match(/I2MOD\s+([\d.eE+-]+)/);
          Ne && (V.modI2 = parseFloat(Ne[1]));
          const wo = ve.match(/I3MOD\s+([\d.eE+-]+)/);
          wo && (V.modI3 = parseFloat(wo[1]));
        }
      }
      if (ce === "POINT COORDINATES") {
        const te = ve.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        te && G.set(te[1], [
          parseFloat(te[2]),
          parseFloat(te[3])
        ]);
      }
      if (ce === "LINE CONNECTIVITIES") {
        const te = ve.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        te && D.push({
          name: te[1],
          type: te[2],
          pt1: te[3],
          pt2: te[4],
          nStories: parseInt(te[5])
        });
      }
      if (ce === "POINT ASSIGNS") {
        const te = ve.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        te && W.set(`${te[1]}@${te[2]}`, te[3].split(/\s+/));
      }
      if (ce === "LINE ASSIGNS") {
        const te = ve.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        te && xe.set(`${te[1]}@${te[2]}`, {
          story: te[2],
          section: te[3]
        });
      }
      if (ce === "GRIDS") {
        const te = ve.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        te && ee.push({
          label: te[1],
          dir: te[2],
          coord: parseFloat(te[3])
        });
      }
      if (ce === "FRAME OBJECT LOADS") {
        const te = ve.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        te && E.push({
          line: te[1],
          story: te[2],
          type: te[3],
          dir: te[4],
          lc: te[5],
          val: parseFloat(te[6])
        });
      }
      if (ce === "AREA CONNECTIVITIES") {
        const te = ve.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (te) {
          const ye = ((_a = te[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((V) => V.replace(/"/g, ""))) || [];
          H.push({
            name: te[1],
            pts: ye,
            nStories: 0
          });
        }
      }
    }
    const K = /* @__PURE__ */ new Map();
    if (z.length > 0) {
      const fe = z.length - 1;
      K.set(z[fe].name, z[fe].elev);
      for (let ve = fe - 1; ve >= 0; ve--) {
        const ye = K.get(z[ve + 1].name) + z[ve].height;
        z[ve].elev = ye, K.set(z[ve].name, ye);
      }
    }
    const Q = [], X = [], de = /* @__PURE__ */ new Map(), Y = (fe, ve) => `${fe}@${ve}`, Le = /* @__PURE__ */ new Set(), Re = /* @__PURE__ */ new Map();
    for (const fe of D) Re.set(fe.name, fe);
    for (const fe of D) for (const [ve, te] of xe) {
      if (!ve.startsWith(fe.name + "@")) continue;
      const ye = te.story, V = z.findIndex((be) => be.name === ye);
      if (!(V < 0)) if (fe.type === "COLUMN" || fe.type === "BRACE") {
        Le.add(Y(fe.pt2, ye));
        const be = Math.max(fe.nStories, 1), Ae = Math.min(V + be, z.length - 1);
        Le.add(Y(fe.pt1, z[Ae].name));
      } else Le.add(Y(fe.pt1, ye)), Le.add(Y(fe.pt2, ye));
    }
    for (const [fe] of W) Le.add(fe);
    for (const fe of Le) {
      const [ve, te] = fe.split("@"), ye = G.get(ve), V = K.get(te);
      ye === void 0 || V === void 0 || (Q.push([
        ye[0],
        ye[1],
        V
      ]), X.push(fe), de.set(fe, Q.length - 1));
    }
    const Me = [], We = [], et = [], ft = [], rt = /* @__PURE__ */ new Map();
    for (const fe of D) for (const [ve, te] of xe) {
      if (!ve.startsWith(fe.name + "@")) continue;
      const ye = te.story, V = z.findIndex((Ze) => Ze.name === ye);
      if (V < 0) continue;
      let be, Ae;
      if (fe.type === "COLUMN" || fe.type === "BRACE") {
        const Ze = Math.max(fe.nStories, 1), Ue = Math.min(V + Ze, z.length - 1);
        be = Y(fe.pt1, z[Ue].name), Ae = Y(fe.pt2, ye);
      } else be = Y(fe.pt1, ye), Ae = Y(fe.pt2, ye);
      const Te = de.get(be), Xe = de.get(Ae);
      if (Te === void 0 || Xe === void 0 || Te === Xe) continue;
      const Ke = Me.length;
      Me.push([
        Te,
        Xe
      ]), We.push(fe.name), et.push(fe.type), ft.push(ye), rt.set(Ke, te.section);
    }
    const ct = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map();
    for (const [fe, ve] of rt) {
      const te = N.get(ve);
      if (!te) continue;
      const ye = J.get(te.material);
      ye && (ct.set(fe, ye.E), wt.set(fe, ye.G));
      const V = te.D, be = te.B, Ae = te.TF, Te = te.TW;
      let Xe = 0, Ke = 0, Ze = 0, Ue = 0, Ve = "rect";
      switch (te.shape) {
        case "Concrete Rectangular":
          Xe = V * be, Ke = be * V ** 3 / 12, Ze = V * be ** 3 / 12, Ue = be * V ** 3 * (1 / 3 - 0.21 * (V / be) * (1 - V ** 4 / (12 * be ** 4))), Ve = "rect";
          break;
        case "Concrete Circle":
          Xe = Math.PI * V ** 2 / 4, Ke = Ze = Math.PI * V ** 4 / 64, Ue = Math.PI * V ** 4 / 32, Ve = "circ";
          break;
        case "Steel I/Wide Flange":
          Xe = 2 * be * Ae + (V - 2 * Ae) * Te, Ke = (be * V ** 3 - (be - Te) * (V - 2 * Ae) ** 3) / 12, Ze = (2 * Ae * be ** 3 + (V - 2 * Ae) * Te ** 3) / 12, Ue = (2 * be * Ae ** 3 + (V - 2 * Ae) * Te ** 3) / 3, Ve = "I";
          break;
        case "Steel Tube":
          Xe = V * be - (V - 2 * Te) * (be - 2 * Te), Ke = (be * V ** 3 - (be - 2 * Te) * (V - 2 * Te) ** 3) / 12, Ze = (V * be ** 3 - (V - 2 * Te) * (be - 2 * Te) ** 3) / 12, Ue = 2 * Te * (V - Te) * (be - Te) * ((V - Te) * (be - Te)) / (V - Te + (be - Te)), Ve = "HSS";
          break;
        case "Filled Steel Tube":
          Xe = V * be, Ke = be * V ** 3 / 12, Ze = V * be ** 3 / 12, Ue = 2 * Te * (V - Te) * (be - Te) * ((V - Te) * (be - Te)) / (V - Te + (be - Te)), Ve = "CFT";
          break;
        case "Steel Angle": {
          const Ne = Ae || Te;
          Xe = Ne * (V + be - Ne), Ke = Ne * (V ** 3 + be * Ne ** 2 + Ne ** 2 * (V - Ne)) / 12, Ze = Ne * (be ** 3 + V * Ne ** 2 + Ne ** 2 * (be - Ne)) / 12, Ue = (V + be - Ne) * Ne ** 3 / 3, Ve = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          Xe = 2 * be * Ae + (V - 2 * Ae) * Te, Ke = (Te * V ** 3 + 2 * be * Ae * (V - Ae) ** 2) / 12, Ze = (2 * Ae * be ** 3 + (V - 2 * Ae) * Te ** 3) / 12, Ue = (2 * be * Ae ** 3 + (V - 2 * Ae) * Te ** 3) / 3, Ve = te.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          Xe = 2 * (2 * be * Ae + (V - 2 * Ae) * Te), Ke = 2 * (Te * V ** 3 + 2 * be * Ae * (V - Ae) ** 2) / 12, Ze = 2 * (2 * Ae * be ** 3 + (V - 2 * Ae) * Te ** 3) / 12, Ue = 2 * (2 * be * Ae ** 3 + (V - 2 * Ae) * Te ** 3) / 3, Ve = "2C";
          break;
        default:
          V > 0 && be > 0 && (Xe = V * be, Ke = be * V ** 3 / 12, Ze = V * be ** 3 / 12, Ue = Math.min(V, be) * Math.max(V, be) ** 3 / 3 * 0.3);
          break;
      }
      te.modI2 && (Ze *= te.modI2), te.modI3 && (Ke *= te.modI3), Ft.set(fe, Xe), $t.set(fe, Ke), St.set(fe, Ze), Yt.set(fe, Ue), Nt.set(fe, {
        type: Ve,
        b: be || void 0,
        h: V || void 0,
        d: Ve === "circ" || Ve === "pipe" ? V : void 0,
        tw: Te || void 0,
        tf: Ae || void 0,
        r: te.R,
        name: ve
      });
    }
    const po = /* @__PURE__ */ new Map();
    for (const [fe, ve] of W) {
      const te = de.get(fe);
      if (te === void 0) continue;
      const ye = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const V of ve) V === "UX" && (ye[0] = true), V === "UY" && (ye[1] = true), V === "UZ" && (ye[2] = true), V === "RX" && (ye[3] = true), V === "RY" && (ye[4] = true), V === "RZ" && (ye[5] = true);
      po.set(te, ye);
    }
    const qt = /* @__PURE__ */ new Map(), qo = /* @__PURE__ */ new Map();
    for (let fe = 0; fe < We.length; fe++) qo.set(`${We[fe]}@${ft[fe]}`, fe);
    for (const fe of E) {
      const ve = qo.get(`${fe.line}@${fe.story}`);
      if (ve === void 0) continue;
      const [te, ye] = Me[ve], V = Q[te], be = Q[ye], Ae = Math.sqrt((be[0] - V[0]) ** 2 + (be[1] - V[1]) ** 2 + (be[2] - V[2]) ** 2);
      if (Ae < 1e-10) continue;
      const Te = fe.val * Ae / 2;
      let Xe = 0, Ke = 0, Ze = 0;
      fe.dir === "GRAV" || fe.dir === "GRAVITY" ? Ze = -Te : fe.dir === "X" ? Xe = Te : fe.dir === "Y" ? Ke = Te : fe.dir === "Z" && (Ze = -Te);
      for (const Ue of [
        te,
        ye
      ]) {
        const Ve = qt.get(Ue) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ve[0] += Xe, Ve[1] += Ke, Ve[2] += Ze, qt.set(Ue, Ve);
      }
    }
    const ze = /* @__PURE__ */ new Map();
    for (const [fe, ve] of rt) {
      const te = N.get(ve);
      if (!te) continue;
      const ye = J.get(te.material);
      (ye == null ? void 0 : ye.density) && ze.set(fe, ye.density);
    }
    return {
      units: j,
      stories: z.reverse(),
      materials: J,
      frameSections: N,
      nodes: Q,
      nodeNames: X,
      nodeNameToIdx: de,
      elements: Me,
      elementNames: We,
      elementTypes: et,
      elementStories: ft,
      elementSections: rt,
      nodeInputs: {
        supports: po,
        loads: qt
      },
      elementInputs: {
        elasticities: ct,
        shearModuli: wt,
        areas: Ft,
        momentsOfInertiaZ: $t,
        momentsOfInertiaY: St,
        torsionalConstants: Yt,
        densities: ze,
        sectionShapes: Nt
      },
      sectionShapes: Nt,
      grids: ee,
      info: {
        nNodes: Q.length,
        nFrames: Me.length,
        nAreas: H.length,
        title: ge
      }
    };
  }
  function Fa(e) {
    var _a, _b;
    const { nodes: g, elements: j, nodeInputs: z, elementInputs: J, title: N, units: G } = e, D = (G == null ? void 0 : G.force) || "TONF", H = (G == null ? void 0 : G.length) || "M", W = [];
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${D}"  "${H}"  "C"  `), N && W.push(`  TITLE2  "${N}"  `), W.push("");
    const xe = /* @__PURE__ */ new Set();
    g.forEach((X) => xe.add(Math.round(X[2] * 1e3) / 1e3));
    const E = [
      ...xe
    ].sort((X, de) => X - de);
    if (W.push("$ STORIES - IN SEQUENCE FROM TOP"), E.length > 1) {
      for (let X = E.length - 1; X >= 1; X--) {
        const de = Math.round((E[X] - E[X - 1]) * 1e3) / 1e3;
        W.push(`  STORY "Level_${X}"  HEIGHT ${de} MASTERSTORY "Yes"  `);
      }
      W.push(`  STORY "Base"  ELEV ${E[0]} `);
    } else W.push('  STORY "Base"  ELEV 0 ');
    W.push(""), W.push("$ MATERIAL PROPERTIES");
    const ee = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((X) => ee.add(X));
    let ge = 0;
    const ce = /* @__PURE__ */ new Map();
    for (const X of ee) {
      const Y = `Mat_${++ge}`;
      ce.set(X, Y), W.push(`  MATERIAL  "${Y}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`), W.push(`  MATERIAL  "${Y}"    SYMTYPE "Isotropic"  E ${X}  U ${0.3}  A 1.17E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Set();
    return j.forEach((X, de) => {
      var _a2, _b2;
      if (X.length !== 2) return;
      const Y = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(de), Le = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(de)) ?? 0, Re = ce.get(Le) || "Mat_1";
      let Me = (Y == null ? void 0 : Y.name) || `Sec_${de}`, We = "";
      if (Y) switch (Y.type) {
        case "rect":
          Me = Y.name || `Rect_${(Y.b || 0).toFixed(2)}x${(Y.h || 0).toFixed(2)}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Concrete Rectangular"  D ${Y.h} B ${Y.b} `;
          break;
        case "circ":
          Me = Y.name || `Circ_D${(Y.d || 0).toFixed(2)}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Concrete Circle"  D ${Y.d} `;
          break;
        case "I":
          Me = Y.name || `I_${(Y.h || 0).toFixed(3)}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Steel I/Wide Flange"  D ${Y.h} B ${Y.b} TF ${Y.tf || 0} TW ${Y.tw || 0} `;
          break;
        case "HSS":
          Me = Y.name || `HSS_${(Y.b || 0).toFixed(3)}x${(Y.h || 0).toFixed(3)}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Steel Tube"  D ${Y.h} B ${Y.b} TF ${Y.tw || 0} TW ${Y.tw || 0} `;
          break;
        case "CFT":
          Me = Y.name || `CFT_${(Y.b || 0).toFixed(3)}x${(Y.h || 0).toFixed(3)}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Filled Steel Tube"  D ${Y.h} B ${Y.b} TF ${Y.tw || 0} TW ${Y.tw || 0} `;
          break;
        case "L":
          Me = Y.name || `L_${(Y.h || 0) * 1e3}x${(Y.t || 0) * 1e3}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Steel Angle"  D ${Y.h} B ${Y.b || Y.h} TF ${Y.t || Y.tw || 0} TW ${Y.t || Y.tw || 0} `;
          break;
        case "C":
        case "coldC":
          Me = Y.name || `C_${(Y.h || 0) * 1e3}x${(Y.b || 0) * 1e3}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Steel Channel"  D ${Y.h} B ${Y.b} TF ${Y.tf || Y.t || 0} TW ${Y.tw || Y.t || 0} `;
          break;
        case "2C":
          Me = Y.name || `2C_${(Y.h || 0) * 1e3}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Steel Double Channel"  D ${Y.h} B ${Y.b} TF ${Y.tf || 0} TW ${Y.tw || 0} DIS ${Y.dis || 0} `;
          break;
        case "pipe":
          Me = Y.name || `Pipe_D${(Y.d || 0) * 1e3}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Steel Pipe"  D ${Y.d} TW ${Y.tw || 0} `;
          break;
        default:
          Me = Y.name || `Sec_${de}`, We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
      }
      else We = `  FRAMESECTION  "${Me}"  MATERIAL "${Re}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
      K.set(de, Me), Q.has(Me) || (Q.add(Me), W.push(We));
    }), W.push(""), W.push("$ POINT COORDINATES"), g.forEach((X, de) => {
      W.push(`  POINT "${de + 1}"  ${X[0]} ${X[1]} `);
    }), W.push(""), W.push("$ LINE CONNECTIVITIES"), j.forEach((X, de) => {
      if (X.length !== 2) return;
      const Y = g[X[0]], Le = g[X[1]], Me = Math.abs(Le[2] - Y[2]) > Math.max(Math.abs(Le[0] - Y[0]), Math.abs(Le[1] - Y[1])) ? "COLUMN" : "BEAM";
      W.push(`  LINE  "E${de + 1}"  ${Me}  "${X[0] + 1}"  "${X[1] + 1}"  0`);
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = z.supports) == null ? void 0 : _b.forEach((X, de) => {
      const Y = [];
      X[0] && Y.push("UX"), X[1] && Y.push("UY"), X[2] && Y.push("UZ"), X[3] && Y.push("RX"), X[4] && Y.push("RY"), X[5] && Y.push("RZ"), Y.length > 0 && W.push(`  POINTASSIGN  "${de + 1}"  "Base"  RESTRAINT "${Y.join(" ")}"  `);
    }), W.push(""), W.push("$ LINE ASSIGNS"), j.forEach((X, de) => {
      if (X.length !== 2) return;
      const Y = K.get(de) || "Sec_1";
      W.push(`  LINEASSIGN  "E${de + 1}"  "Base"  SECTION "${Y}"  `);
    }), W.push(""), W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1'), W.push('  LOADPATTERN "Live"  TYPE "Live"  '), W.push(""), z.loads && z.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), z.loads.forEach((X, de) => {
      if (X.some((Y) => Math.abs(Y) > 1e-10)) {
        const [Y, Le, Re, Me, We, et] = X;
        Math.abs(Y) > 1e-10 && W.push(`  POINTLOAD  "${de + 1}"  "Base"  "Dead"  TYPE "FORCE"  FX ${Y}`), Math.abs(Le) > 1e-10 && W.push(`  POINTLOAD  "${de + 1}"  "Base"  "Dead"  TYPE "FORCE"  FY ${Le}`), Math.abs(Re) > 1e-10 && W.push(`  POINTLOAD  "${de + 1}"  "Base"  "Dead"  TYPE "FORCE"  FZ ${Re}`);
      }
    }), W.push("")), W.push("$ END OF MODEL FILE"), W.join(`
`);
  }
  function qa(e) {
    var _a, _b;
    const { nodes: g, elements: j, nodeInputs: z, elementInputs: J } = e, N = [];
    return N.push("# OpenSeesPy model exported from Awatif FEM Studio"), N.push(`# ${g.length} nodes, ${j.length} elements`), N.push(""), N.push("import openseespy.opensees as ops"), N.push(""), N.push("ops.wipe()"), N.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), N.push(""), N.push("# --- Nodes ---"), g.forEach((G, D) => {
      N.push(`ops.node(${D + 1}, ${G[0]}, ${G[1]}, ${G[2]})`);
    }), N.push(""), N.push("# --- Boundary Conditions ---"), (_a = z.supports) == null ? void 0 : _a.forEach((G, D) => {
      const H = G.map((W) => W ? 1 : 0).join(", ");
      N.push(`ops.fix(${D + 1}, ${H})`);
    }), N.push(""), N.push("# --- Geometric Transformations ---"), N.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), N.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), N.push(""), N.push("# --- Elements (elasticBeamColumn) ---"), j.forEach((G, D) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const H = g[G[0]], W = g[G[1]], E = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, ee = ((_a2 = J.areas) == null ? void 0 : _a2.get(D)) ?? 1, ge = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ce = ((_c = J.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, K = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, Q = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, X = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      N.push(`ops.element('elasticBeamColumn', ${D + 1}, ${G[0] + 1}, ${G[1] + 1}, ${ee}, ${ge}, ${ce}, ${K}, ${Q}, ${X}, ${E})`);
    }), N.push(""), z.loads && z.loads.size > 0 && (N.push("# --- Loads ---"), N.push("ops.timeSeries('Linear', 1)"), N.push("ops.pattern('Plain', 1, 1)"), z.loads.forEach((G, D) => {
      const H = G.map((W) => W).join(", ");
      N.push(`ops.load(${D + 1}, ${H})`);
    }), N.push("")), N.push("# --- Analysis ---"), N.push("ops.system('BandGeneral')"), N.push("ops.numberer('RCM')"), N.push("ops.constraints('Plain')"), N.push("ops.integrator('LoadControl', 1.0)"), N.push("ops.algorithm('Linear')"), N.push("ops.analysis('Static')"), N.push("ops.analyze(1)"), N.push(""), N.push("# --- Results ---"), N.push('print("\\n=== Displacements ===")'), g.forEach((G, D) => {
      N.push(`print(f"Node {${D + 1}}: {ops.nodeDisp(${D + 1})}")`);
    }), N.push(""), N.push('print("\\n=== Reactions ===")'), N.push("ops.reactions()"), (_b = z.supports) == null ? void 0 : _b.forEach((G, D) => {
      N.push(`print(f"Node {${D + 1}}: {ops.nodeReaction(${D + 1})}")`);
    }), N.join(`
`);
  }
  function Aa(e) {
    var _a, _b;
    const { nodes: g, elements: j, nodeInputs: z, elementInputs: J } = e, N = [];
    return N.push("# OpenSees Tcl model exported from Awatif FEM Studio"), N.push(`# ${g.length} nodes, ${j.length} elements`), N.push(""), N.push("wipe"), N.push("model basic -ndm 3 -ndf 6"), N.push(""), N.push("# --- Nodes ---"), g.forEach((G, D) => {
      N.push(`node ${D + 1} ${G[0]} ${G[1]} ${G[2]}`);
    }), N.push(""), N.push("# --- Boundary Conditions ---"), (_a = z.supports) == null ? void 0 : _a.forEach((G, D) => {
      const H = G.map((W) => W ? 1 : 0).join(" ");
      N.push(`fix ${D + 1} ${H}`);
    }), N.push(""), N.push("# --- Geometric Transformations ---"), N.push("geomTransf Linear 1 0.0 0.0 1.0"), N.push("geomTransf Linear 2 -1.0 0.0 0.0"), N.push(""), N.push("# --- Elements ---"), j.forEach((G, D) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const H = g[G[0]], W = g[G[1]], E = Math.abs(W[2] - H[2]) > Math.max(Math.abs(W[0] - H[0]), Math.abs(W[1] - H[1])) ? 2 : 1, ee = ((_a2 = J.areas) == null ? void 0 : _a2.get(D)) ?? 1, ge = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ce = ((_c = J.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, K = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, Q = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, X = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      N.push(`element elasticBeamColumn ${D + 1} ${G[0] + 1} ${G[1] + 1} ${ee} ${ge} ${ce} ${K} ${Q} ${X} ${E}`);
    }), N.push(""), z.loads && z.loads.size > 0 && (N.push("# --- Loads ---"), N.push("timeSeries Linear 1"), N.push("pattern Plain 1 1 {"), z.loads.forEach((G, D) => {
      const H = G.map((W) => W).join(" ");
      N.push(`  load ${D + 1} ${H}`);
    }), N.push("}"), N.push("")), N.push("# --- Analysis ---"), N.push("system BandGeneral"), N.push("numberer RCM"), N.push("constraints Plain"), N.push("integrator LoadControl 1.0"), N.push("algorithm Linear"), N.push("analysis Static"), N.push("analyze 1"), N.push(""), N.push("# --- Results ---"), N.push('puts "\\n=== Displacements ==="'), g.forEach((G, D) => {
      N.push(`puts "Node ${D + 1}: [nodeDisp ${D + 1}]"`);
    }), N.push('puts "\\n=== Reactions ==="'), N.push("reactions"), (_b = z.supports) == null ? void 0 : _b.forEach((G, D) => {
      N.push(`puts "Node ${D + 1}: [nodeReaction ${D + 1}]"`);
    }), N.join(`
`);
  }
  function Ca(e) {
    const g = [], j = [], z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
    for (const ge of e.split(/\r?\n/)) {
      const ce = ge.trim(), K = ce.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (K) {
        const Y = parseInt(K[1]), Le = g.length;
        g.push([
          parseFloat(K[2]),
          parseFloat(K[3]),
          parseFloat(K[4])
        ]), E.set(Y, Le);
        continue;
      }
      const Q = ce.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (Q) {
        const Y = parseInt(Q[1]), Le = E.get(Y);
        Le !== void 0 && z.set(Le, [
          Q[2] === "1",
          Q[3] === "1",
          Q[4] === "1",
          Q[5] === "1",
          Q[6] === "1",
          Q[7] === "1"
        ]);
        continue;
      }
      const X = ce.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (X) {
        const Y = parseInt(X[1]), Le = E.get(parseInt(X[2])), Re = E.get(parseInt(X[3]));
        if (Le !== void 0 && Re !== void 0) {
          const Me = j.length;
          j.push([
            Le,
            Re
          ]), ee.set(Y, Me), D.set(Me, parseFloat(X[4])), N.set(Me, parseFloat(X[5])), G.set(Me, parseFloat(X[6])), xe.set(Me, parseFloat(X[7])), H.set(Me, parseFloat(X[8])), W.set(Me, parseFloat(X[9]));
        }
        continue;
      }
      const de = ce.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (de) {
        const Y = E.get(parseInt(de[1]));
        Y !== void 0 && J.set(Y, [
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
      elements: j,
      nodeInputs: {
        supports: z,
        loads: J
      },
      elementInputs: {
        elasticities: N,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: xe
      }
    };
  }
  function Pa(e) {
    const g = [], j = [], z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
    for (const ee of e.split(/\r?\n/)) {
      const ge = ee.trim();
      if (ge.startsWith("#") || ge.startsWith("//")) continue;
      const ce = ge.split(/\s+/);
      if (ce[0] === "node" && ce.length >= 5) {
        const K = parseInt(ce[1]), Q = g.length;
        g.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), E.set(K, Q);
        continue;
      }
      if (ce[0] === "fix" && ce.length >= 8) {
        const K = E.get(parseInt(ce[1]));
        K !== void 0 && z.set(K, [
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
        const K = E.get(parseInt(ce[3])), Q = E.get(parseInt(ce[4]));
        if (K !== void 0 && Q !== void 0) {
          const X = j.length;
          j.push([
            K,
            Q
          ]), D.set(X, parseFloat(ce[5])), N.set(X, parseFloat(ce[6])), G.set(X, parseFloat(ce[7])), xe.set(X, parseFloat(ce[8])), H.set(X, parseFloat(ce[9])), W.set(X, parseFloat(ce[10]));
        }
        continue;
      }
      if (ce[0] === "load" && ce.length >= 8) {
        const K = E.get(parseInt(ce[1]));
        K !== void 0 && J.set(K, [
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
        loads: J
      },
      elementInputs: {
        elasticities: N,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: H,
        momentsOfInertiaZ: W,
        torsionalConstants: xe
      }
    };
  }
  $s = yo.state(false);
  Da = function(e) {
    e.nodeInputs || (e.nodeInputs = yo.state({})), e.elementInputs || (e.elementInputs = yo.state({})), e.deformOutputs || (e.deformOutputs = yo.state({})), e.analyzeOutputs || (e.analyzeOutputs = yo.state({}));
    let g = "tonf", j = "m", z = io(g, j), J = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const N = {
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
    let H = false;
    const W = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Map();
    let E = "", ee = {}, ge = null, ce = "", K = [], Q = [], X = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Me = [], We = 0.2, et = 2, ft = 2, rt = false, ct = 2, wt = "x", Ft = /* @__PURE__ */ new Set(), $t = true, St = 0.15, Yt = 2, Nt = 2, po = /* @__PURE__ */ new Set();
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
    }), qo = (t, o) => ({
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
    }), ze = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let fe = 0, ve = 3, te = false, ye = 0, V = null, be = 0, Ae = [], Te = 1, Xe = true;
    const Ke = ba();
    Ke.div.style.display = "none";
    function Ze() {
      const t = Do()[E];
      return t && t[fe] ? t[fe].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ue = [], Ve = [], Ne = null;
    function wo() {
      if (!Ne) return;
      const t = Je();
      t && t.scene.remove(Ne), Ne.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ne = null;
    }
    function Ko(t, o, n, l, s) {
      wo();
      const d = Je();
      if (!d) return;
      Ne = new Sn(), Ne.name = "gridAxes";
      const a = Math.min(...t), c = Math.max(...t), m = Math.min(...o), r = Math.max(...o), i = c - a || 1, h = r - m || 1, S = Math.max(i, h), w = S * 0.08, x = l || t.map((b, f) => String.fromCharCode(65 + f)), p = s || o.map((b, f) => String(f + 1)), u = S * 0.018, v = o.length <= 1, M = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (v) {
          const y = -w - u * 1.5;
          Qo(f, 0, 0, f, 0, y + u, M, Ne), en(x[b] || `${b}`, f, 0, y, u, Ne);
        } else {
          const y = m - w - u * 1.5;
          Qo(f, m, 0, f, y + u, 0, M, Ne), en(x[b] || `${b}`, f, y, 0, u, Ne);
        }
      }
      if (!v) for (let b = 0; b < o.length; b++) {
        const f = o[b], y = a - w - u * 1.5;
        Qo(a, f, 0, y + u, f, 0, M, Ne), en(p[b] || `${b}`, y, f, 0, u, Ne);
      }
      const $ = u * 1.8, A = w * 1.2, q = w * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], y = t[b + 1], k = Math.abs(y - f), I = (f + y) / 2, O = `${k.toFixed(2)} m`;
        v ? (Uo(O, I, 0, -A, $, Ne), Zo(f, 0, -A * 0.7, y, 0, -A * 0.7, 16763904, Ne)) : (Uo(O, I, m - q, 0, $, Ne), Zo(f, m - q * 0.7, 0, y, m - q * 0.7, 0, 16763904, Ne));
      }
      if (!v) for (let b = 0; b < o.length - 1; b++) {
        const f = o[b], y = o[b + 1], k = Math.abs(y - f), I = (f + y) / 2, O = `${k.toFixed(2)} m`;
        Uo(O, a - A, I, 0, $, Ne), Zo(a - A * 0.7, f, 0, a - A * 0.7, y, 0, 16763904, Ne);
      }
      Ne.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), d.scene.add(Ne), d.render();
    }
    let xt = null;
    function qn() {
      if (!xt) return;
      const t = Je();
      t && t.scene.remove(xt), xt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), xt = null;
    }
    function Ms(t, o, n) {
      if (qn(), t.length === 0) return;
      const l = Je();
      if (!l) return;
      xt = new Sn(), xt.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), c = Math.max(...n), m = d - s || 1, r = c - a || 1, i = Math.max(m, r), h = i * 0.06, S = n.length <= 1, w = 4491519, x = i * 0.015;
      for (const p of t) {
        const u = p.elev;
        S ? (So(s - h, 0, u, d + h, 0, u, w, xt), An(p.name, d + h * 1.5, 0, u, x, xt)) : (So(s, a, u, d, a, u, w, xt), So(d, a, u, d, c, u, w, xt), So(d, c, u, s, c, u, w, xt), So(s, c, u, s, a, u, w, xt), An(p.name, s - h * 1.5, a, u, x, xt));
      }
      xt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(xt), l.render();
    }
    function So(t, o, n, l, s, d, a, c) {
      const m = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, r = new eo().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, d)
      ]), i = new wn({
        color: a,
        dashSize: m * 0.02,
        gapSize: m * 0.01,
        transparent: true,
        opacity: 0.5
      }), h = new Ro(r, i);
      h.computeLineDistances(), h.renderOrder = 50, c.add(h);
    }
    function An(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 512, m = 64;
      a.width = c, a.height = m;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const i = 8;
      r.beginPath(), r.moveTo(i, 0), r.lineTo(c - i, 0), r.quadraticCurveTo(c, 0, c, i), r.lineTo(c, m - i), r.quadraticCurveTo(c, m, c - i, m), r.lineTo(i, m), r.quadraticCurveTo(0, m, 0, m - i), r.lineTo(0, i), r.quadraticCurveTo(0, 0, i, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, c / 2, m / 2);
      const h = new En(a);
      h.needsUpdate = true;
      const S = new Bo({
        map: h,
        depthTest: false,
        transparent: true
      }), w = new Ho(S);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, d.add(w);
    }
    function Uo(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 256, m = 64;
      a.width = c, a.height = m;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const i = 8;
      r.beginPath(), r.moveTo(i, 0), r.lineTo(c - i, 0), r.quadraticCurveTo(c, 0, c, i), r.lineTo(c, m - i), r.quadraticCurveTo(c, m, c - i, m), r.lineTo(i, m), r.quadraticCurveTo(0, m, 0, m - i), r.lineTo(0, i), r.quadraticCurveTo(0, 0, i, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, c / 2, m / 2);
      const h = new da(a);
      h.minFilter = pa;
      const S = new Bo({
        map: h,
        transparent: true,
        depthTest: false
      }), w = new Ho(S);
      w.position.set(o, n, l);
      const x = c / m;
      w.scale.set(s * x, s, 1), w.renderOrder = 999, d.add(w);
    }
    function Zo(t, o, n, l, s, d, a, c) {
      const m = [
        new ke(t, o, n),
        new ke(l, s, d)
      ], r = new eo().setFromPoints(m), i = new Lo({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), h = new Ro(r, i);
      h.renderOrder = 998, c.add(h);
    }
    function Qo(t, o, n, l, s, d, a, c) {
      const m = new eo().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, d)
      ]), r = new wn({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), i = new Ro(m, r);
      i.computeLineDistances(), c.add(i);
    }
    function en(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), c = 128;
      a.width = c, a.height = c;
      const m = a.getContext("2d");
      m.beginPath(), m.arc(c / 2, c / 2, c * 0.42, 0, Math.PI * 2), m.fillStyle = "rgba(255,255,255,0.9)", m.fill(), m.lineWidth = c * 0.04, m.strokeStyle = "#555", m.stroke(), m.fillStyle = "#222", m.font = `bold ${c * 0.45}px Arial`, m.textAlign = "center", m.textBaseline = "middle", m.fillText(t, c / 2, c / 2 + c * 0.02);
      const r = new En(a);
      r.needsUpdate = true;
      const i = new Bo({
        map: r,
        depthTest: false,
        transparent: true
      }), h = new Ho(i);
      h.position.set(o, n, l);
      const S = s * 2;
      h.scale.set(S, S, 1), h.renderOrder = 100, d.add(h);
    }
    const He = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Be(), s;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Be();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Be(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Be();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Be();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Be();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Be();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Be();
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
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), X = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Ue = [], Ve = [], wo(), qn();
        const t = $e.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Be();
      },
      frame(t, o, n = 0, l = 0) {
        He.clear();
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
        X = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let p = 0; p < s.length; p++) m(p) || (X.add(h.length), h.push([
          r[`${p},${x}`],
          r[`${p},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let p = 0; p < s.length - 1; p++) de.add(h.length), h.push([
          r[`${p},${x}`],
          r[`${p + 1},${x}`]
        ]);
        const S = /* @__PURE__ */ new Map(), w = Ze();
        for (let x = 0; x < s.length; x++) {
          if (m(x)) continue;
          const p = `${x},0`;
          r[p] !== void 0 && S.set(r[p], [
            ...w
          ]);
        }
        return e.nodes.val = i, e.elements.val = h, e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), Ue = [
          ...s
        ], Ve = [
          0
        ], setTimeout(() => {
          ut(), Ko(s, [
            0
          ]), cn(), dn();
        }, 50), Be(), {
          nodes: i.length,
          elements: h.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, c = 0, m = 1) {
        He.clear();
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
        X = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map();
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
            X.add(M.length), Le.set(M.length, k), M.push([
              f,
              y
            ]);
            continue;
          }
          const I = p[f], O = p[y];
          let F = f;
          for (let T = 1; T < m; T++) {
            const P = T / m, _ = p.length;
            p.push([
              I[0] + (O[0] - I[0]) * P,
              I[1] + (O[1] - I[1]) * P,
              I[2] + (O[2] - I[2]) * P
            ]), X.add(M.length), Le.set(M.length, k), M.push([
              F,
              _
            ]), F = _;
          }
          X.add(M.length), Le.set(M.length, k), M.push([
            F,
            y
          ]);
        }
        Re = /* @__PURE__ */ new Map();
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
        for (const { el: [f, y], floor: k, dir: I, bay: O } of A) {
          const F = p[f], T = p[y];
          let P = f;
          for (let ne = 1; ne < l; ne++) {
            const ae = ne / l, re = p.length;
            p.push([
              F[0] + (T[0] - F[0]) * ae,
              F[1] + (T[1] - F[1]) * ae,
              F[2] + (T[2] - F[2]) * ae
            ]);
            const oe = M.length;
            de.add(oe), Le.set(oe, k), Re.set(oe, {
              dir: I,
              bay: O
            }), M.push([
              P,
              re
            ]), P = re;
          }
          const _ = M.length;
          de.add(_), Le.set(_, k), Re.set(_, {
            dir: I,
            bay: O
          }), M.push([
            P,
            y
          ]);
        }
        if (Ft = /* @__PURE__ */ new Set(), rt && ct > 0) {
          const f = (y, k, I) => {
            for (let F = 0; F < p.length; F++) if (Math.abs(p[F][0] - y) < 1e-6 && Math.abs(p[F][1] - k) < 1e-6 && Math.abs(p[F][2] - I) < 1e-6) return F;
            const O = p.length;
            return p.push([
              y,
              k,
              I
            ]), O;
          };
          for (let y = 1; y < h.length; y++) if (wt === "x") for (let k = 0; k < i.length - 1; k++) {
            const I = i[k], O = i[k + 1];
            for (let F = 1; F <= ct; F++) {
              const T = I + F / (ct + 1) * (O - I), P = [];
              for (let _ = 0; _ < r.length; _++) P.push(f(r[_], T, h[y]));
              for (let _ = 0; _ < r.length - 1; _++) {
                const ne = M.length;
                Ft.add(ne), de.add(ne), Le.set(ne, y - 1), Re.set(ne, {
                  dir: "x",
                  bay: _
                }), M.push([
                  P[_],
                  P[_ + 1]
                ]);
              }
            }
          }
          else for (let k = 0; k < r.length - 1; k++) {
            const I = r[k], O = r[k + 1];
            for (let F = 1; F <= ct; F++) {
              const T = I + F / (ct + 1) * (O - I), P = [];
              for (let _ = 0; _ < i.length; _++) P.push(f(T, i[_], h[y]));
              for (let _ = 0; _ < i.length - 1; _++) {
                const ne = M.length;
                Ft.add(ne), de.add(ne), Le.set(ne, y - 1), Re.set(ne, {
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
        const q = /* @__PURE__ */ new Map(), b = Ze();
        for (let f = 0; f < i.length; f++) for (let y = 0; y < r.length; y++) x(y, f) || q.set(u[`${y},${f},0`], [
          ...b
        ]);
        Y = /* @__PURE__ */ new Set();
        for (const f of Me) {
          const y = h.length - 1, k = f.floors.includes(-1) ? Array.from({
            length: y
          }, (I, O) => O) : f.floors.filter((I) => I < y);
          for (const I of k) {
            let O, F, T, P;
            f.dir === "x" ? (O = f.bay, T = f.bay + 1, F = f.axisIdx, P = f.axisIdx) : (O = f.axisIdx, T = f.axisIdx, F = f.bay, P = f.bay + 1);
            const _ = u[`${O},${F},${I}`], ne = u[`${O},${F},${I + 1}`];
            let ae, re;
            if (f.dir === "x" ? (ae = u[`${T},${P},${I}`], re = u[`${T},${P},${I + 1}`]) : (ae = u[`${T},${P},${I}`], re = u[`${T},${P},${I + 1}`]), _ === void 0 || ae === void 0 || ne === void 0 || re === void 0) continue;
            const oe = ft, Z = et, le = p[_], Se = p[ae], _e = p[ne], Ce = p[re], ie = [];
            for (let he = 0; he <= Z; he++) {
              const Ee = [], pe = he / Z;
              for (let Fe = 0; Fe <= oe; Fe++) {
                const Pe = Fe / oe, Ge = (1 - pe) * ((1 - Pe) * le[0] + Pe * Se[0]) + pe * ((1 - Pe) * _e[0] + Pe * Ce[0]), se = (1 - pe) * ((1 - Pe) * le[1] + Pe * Se[1]) + pe * ((1 - Pe) * _e[1] + Pe * Ce[1]), Ie = (1 - pe) * ((1 - Pe) * le[2] + Pe * Se[2]) + pe * ((1 - Pe) * _e[2] + Pe * Ce[2]);
                he === 0 && Fe === 0 ? Ee.push(_) : he === 0 && Fe === oe ? Ee.push(ae) : he === Z && Fe === 0 ? Ee.push(ne) : he === Z && Fe === oe ? Ee.push(re) : (Ee.push(p.length), p.push([
                  Ge,
                  se,
                  Ie
                ]));
              }
              ie.push(Ee);
            }
            for (let he = 0; he < Z; he++) for (let Ee = 0; Ee < oe; Ee++) {
              const pe = ie[he][Ee], Fe = ie[he][Ee + 1], Pe = ie[he + 1][Ee + 1], Ge = ie[he + 1][Ee], se = M.length;
              Y.add(se), Le.set(se, I), M.push([
                pe,
                Fe,
                Pe,
                Ge
              ]);
            }
            if (I === 0) for (let he = 0; he <= oe; he++) {
              const Ee = ie[0][he];
              Ee >= v && q.set(Ee, [
                ...b
              ]);
            }
          }
        }
        if (po = /* @__PURE__ */ new Set(), $t) {
          const f = l, y = l, k = /* @__PURE__ */ new Map(), I = (O, F, T) => `${Math.round(O * 1e4)},${Math.round(F * 1e4)},${Math.round(T * 1e4)}`;
          for (let O = 0; O < p.length; O++) k.set(I(p[O][0], p[O][1], p[O][2]), O);
          for (let O = 1; O < h.length; O++) {
            const F = h[O];
            for (let T = 0; T < r.length - 1; T++) for (let P = 0; P < i.length - 1; P++) {
              const _ = r[T], ne = r[T + 1], ae = i[P], re = i[P + 1], oe = [];
              for (let Z = 0; Z <= y; Z++) {
                const le = [];
                for (let Se = 0; Se <= f; Se++) {
                  const _e = _ + Se / f * (ne - _), Ce = ae + Z / y * (re - ae);
                  if (Z === 0 && Se === 0) le.push(u[`${T},${P},${O}`]);
                  else if (Z === 0 && Se === f) le.push(u[`${T + 1},${P},${O}`]);
                  else if (Z === y && Se === 0) le.push(u[`${T},${P + 1},${O}`]);
                  else if (Z === y && Se === f) le.push(u[`${T + 1},${P + 1},${O}`]);
                  else {
                    const ie = I(_e, Ce, F), he = k.get(ie);
                    if (he !== void 0) le.push(he);
                    else {
                      const Ee = p.length;
                      p.push([
                        _e,
                        Ce,
                        F
                      ]), k.set(ie, Ee), le.push(Ee);
                    }
                  }
                }
                oe.push(le);
              }
              for (let Z = 0; Z < y; Z++) for (let le = 0; le < f; le++) {
                const Se = oe[Z][le], _e = oe[Z][le + 1], Ce = oe[Z + 1][le + 1], ie = oe[Z + 1][le], he = M.length;
                po.add(he), Le.set(he, O - 1), M.push([
                  Se,
                  _e,
                  Ce,
                  ie
                ]);
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
          supports: q
        }), Ue = [
          ...r
        ], Ve = [
          ...i
        ], setTimeout(() => {
          ut(), Ko(r, i), cn(), dn();
        }, 50), Be(), {
          nodes: p.length,
          elements: M.length,
          nJointNodes: v
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        He.clear();
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
        const h = /* @__PURE__ */ new Map(), S = Ze();
        for (let w = 0; w < i; w++) h.set(r[w][0], [
          ...S
        ]), h.set(r[w][1], [
          ...S
        ]);
        return e.nodes.val = a, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
          supports: h
        }), Be(), {
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
            He.clear(), je("truss"), _n();
            break;
          }
          case "beams": {
            He.clear(), je("beams"), On();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            He.clear(), je("3d"), Rn();
            break;
          }
          case "portico": {
            je("frame"), me();
            break;
          }
          case "edificio": {
            je("edificio"), ze.colMat = 0, ze.vigaMat = 0, ze.colShape = 0, Me = [], $t = false, rt = false, me();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            je("edificio"), ze.colMat = 1, ze.vigaMat = 1, ze.steelColType = 0, ze.steelVigaType = 0, Me = [], rt = true, ct = 2;
            const o = K.reduce((l, s) => l + s, 0) / K.length, n = Q.reduce((l, s) => l + s, 0) / Q.length;
            wt = o >= n ? "y" : "x", $t = true, St = 0.08, me();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            je("edificio"), ze.colMat = 0, ze.vigaMat = 0, ze.colShape = 0, rt = false;
            const o = Math.round(((_a = ee.nVanosX) == null ? void 0 : _a.val) ?? 2), n = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Me = [
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
            ], $t = true, St = 0.15, me();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            je("edificio"), ze.colMat = 2, ze.vigaMat = 0, rt = false;
            const o = Math.round(((_c = ee.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = ee.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Me = [
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
            ], $t = true, St = 0.12, me();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            je("edificio"), ee.nPisos && (ee.nPisos.val = 1), ee.hPiso && (ee.hPiso.val = 4.5), ee.nVanosX && (ee.nVanosX.val = 3), ee.nVanosY && (ee.nVanosY.val = 2), ee.nSubViga && (ee.nSubViga.val = 3), K = [
              6,
              6,
              6
            ], Q = [
              5,
              5
            ], ze.colMat = 1, ze.vigaMat = 1, ze.steelColType = 0, ze.steelVigaType = 0, Me = [], rt = true, ct = 2, wt = K[0] >= Q[0] ? "y" : "x", $t = true, St = 0.08, Yt = 3, Nt = 3, me();
            break;
          }
          case "galpon": {
            je("galpon"), me();
            break;
          }
          case "barra": {
            je("barra"), me();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            He.clear(), je("placa-3q"), Nn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            He.clear(), je("placa-q4"), Hn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            He.clear(), je("losa-rect"), Bn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            He.clear(), je("losa-plana"), Dn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            He.clear(), je("viga-alta"), jn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            He.clear(), je("muro-contencion"), Wn();
            break;
          }
          case "zapata":
          case "footing": {
            He.clear(), je("zapata"), Yn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            He.clear(), je("placa-orificios"), Jn();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            He.clear(), je("col-placa"), Gn();
            break;
          }
          case "talud":
          case "slope": {
            He.clear(), je("talud"), Vn();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            He.clear(), je("eiffel"), cs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            He.clear(), je("arco"), ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            He.clear(), je("puente"), ps();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            He.clear(), je("twisted"), fs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            He.clear(), je("burj"), us();
            break;
          }
          case "opera":
          case "sydney-opera": {
            He.clear(), je("opera"), ms();
            break;
          }
          case "diagrid":
          case "gherkin": {
            He.clear(), je("diagrid"), bs();
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
        const h = performance.now(), S = Mn({
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
        return setTimeout(() => ut(), 50), Be(), S;
      },
      set(t, o) {
        ee[t] ? (ee[t].val = o, console.log(`${t} = ${o}`), Ct(), me()) : Ye[t] ? (Ye[t].val = o, console.log(`${t} = ${o}`), Ct(), me()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ee,
          ...Ye
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in ee) o[l] = ee[l].val;
          for (const l in Ye) o[l] = Ye[l].val;
          o.plateTheory = ve, o.supportType = fe;
          const n = Do()[E];
          return n && n[fe] && (o.supportLabel = n[fe].label), console.table(o), o;
        }
        if (ee[t]) return ee[t].val;
        if (Ye[t]) return Ye[t].val;
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
        }[t.toLowerCase()] || 3), ve = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[ve] || ve}`), E.includes("placa") && (Ct(), me());
      },
      setBc(t) {
        const o = Do()[E];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        fe = t, fe >= o.length && (fe = 0), console.log(`Apoyo: ${o[fe].label} \u2192 DOFs: [${o[fe].dofs.map((n) => n ? "1" : "0").join(",")}]`), Ct(), me();
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
        t && (g = t), o && (j = o), z = io(g, j);
        const n = $e.querySelector("#cad3d-force-unit"), l = $e.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = j), E && je(E), console.log(`Unidades: ${z.label} | E=${z.E.toExponential(3)} ${z.stress}`), z.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Cn() {
      return ua(z);
    }
    function Pn() {
      return ma(z);
    }
    let Ye = {};
    function je(t) {
      var _a, _b;
      E = t, $s.val = true, fe = 0, be && sn(), ee = {};
      const o = Cn()[t];
      if (o) for (const l of o) ee[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      Ye = {};
      const n = Pn()[t];
      if (n) for (const l of n) Ye[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a = ee.nVanosX) == null ? void 0 : _a.val) ?? 2), s = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
        K = Array(l).fill(z.defaultSpan), Q = Array(s).fill(z.defaultSpan * 0.8);
      }
      Ct(), setTimeout(() => {
        Fs(), me();
      }, 50);
    }
    function B(t) {
      var _a, _b;
      return ((_a = ee[t]) == null ? void 0 : _a.val) ?? ((_b = Ye[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function me() {
      switch (E) {
        case "truss":
          _n();
          break;
        case "beams":
          On();
          break;
        case "3d":
          Rn();
          break;
        case "frame": {
          const o = Math.round(B("nVanos")), n = B("spanV"), l = Math.round(B("nPisos")), s = B("hPiso");
          He.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(B("nPisos")), n = B("hPiso"), l = B("Lvix") || 0, s = B("Lvdx") || 0, d = B("Lviy") || 0, a = B("Lvdy") || 0, c = Math.max(1, Math.round(B("nSubViga") || 3)), m = Math.max(1, Math.round(B("nSubCol") || 1));
          He.building([
            ...K
          ], [
            ...Q
          ], Array(o).fill(n), c, l, s, d, a, m);
          break;
        }
        case "galpon":
          He.galpon(B("span"), B("length"), B("height"), B("archRise"), Math.round(B("xDiv")), Math.round(B("yDiv")));
          break;
        case "barra":
          ws();
          break;
        case "placa-3q":
          Nn();
          break;
        case "placa-q4":
          Hn();
          break;
        case "losa-rect":
          Bn();
          break;
        case "losa-plana":
          Dn();
          break;
        case "viga-alta":
          jn();
          break;
        case "muro-contencion":
          Wn();
          break;
        case "zapata":
          Yn();
          break;
        case "placa-orificios":
          Jn();
          break;
        case "col-placa":
          Gn();
          break;
        case "talud":
          Vn();
          break;
        case "eiffel":
          cs();
          break;
        case "arco":
          ds();
          break;
        case "puente":
          ps();
          break;
        case "twisted":
          fs();
          break;
        case "burj":
          us();
          break;
        case "opera":
          ms();
          break;
        case "diagrid":
          bs();
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
        if (G.size > 0 || D.size > 0 || H) {
          const o = e.elements.val, n = o.filter((l, s) => !(G.has(s) || D.has(s) || H && !W.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Jt(), Ao();
        }, 30);
      }
    }
    function _n() {
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
      }), Be();
    }
    function On() {
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
      }), Be();
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
      }), Be();
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
      }), Be();
    }
    function Nn() {
      const t = B("Lx") || 15, o = B("Ly") || 10, n = B("meshSize") || 0.5, l = B("q") || -3, s = B("t") || 1, d = B("E") || 3e7, a = B("nu") || 0.3, c = d / (2 * (1 + a)), m = ve === 1 ? "Membrana" : ve === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: i, boundaryIndices: h } = jt({
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
        const u = It(r, i, e.nodeInputs.val, e.elementInputs.val);
        u && e.deformOutputs && (e.deformOutputs.val = u);
        const v = vo(r, i, e.elementInputs.val, u);
        v && e.analyzeOutputs && (e.analyzeOutputs.val = v), console.log(`Plate 3Q [${m}]: ${r.length} nodes, ${i.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (u) {
        console.warn("Plate 3Q analysis failed:", u.message);
      }
      setTimeout(() => ut(), 50), Be();
    }
    function Hn() {
      const t = B("Lx") || 10, o = B("Ly") || 10, n = Math.round(B("nx") || 16), l = Math.round(B("ny") || 16), s = B("t") || 0.2, d = B("q") || -10, a = B("E") || 3e7, c = B("nu") || 0.3, m = fe === 1 ? "clamped" : "simply-supported", i = {
        1: 2,
        2: 1,
        3: 0
      }[ve] ?? 0;
      return He.plateQ4(t, o, n, l, m, d, s, a, c, i);
    }
    function Bn() {
      const t = B("a") || 6, o = B("b") || 4, n = Math.round(B("nx") || 12), l = Math.round(B("ny") || 8), s = B("t") || 0.1, d = B("q") || -10, a = B("E") || 35e6, c = B("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[ve] ?? 0, i = He.plateQ4(t, o, n, l, "simply-supported", d, s, a, c, r), h = a * s * s * s / (12 * (1 - c * c));
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
    function Dn() {
      const t = B("t") || 0.2, o = B("q") || -10, n = B("E") || 35e6, l = B("nu") || 0.2, s = B("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], c = d.reduce((F, T) => F + T, 0), m = a.reduce((F, T) => F + T, 0), r = [
        0
      ];
      for (const F of d) r.push(r[r.length - 1] + F);
      const i = [
        0
      ];
      for (const F of a) i.push(i[i.length - 1] + F);
      const h = Math.max(2, Math.round(c / s)), S = Math.max(2, Math.round(m / s)), w = c / h, x = m / S, p = [];
      for (let F = 0; F <= S; F++) for (let T = 0; T <= h; T++) p.push([
        T * w,
        F * x
      ]);
      const u = [], v = /* @__PURE__ */ new Set();
      for (const F of r) for (const T of i) {
        let P = 1 / 0, _ = 0;
        for (let ne = 0; ne < p.length; ne++) {
          const ae = Math.hypot(p[ne][0] - F, p[ne][1] - T);
          ae < P && (P = ae, _ = ne);
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
      }[ve] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][$]}]: ${c}\xD7${m}m, ${h}\xD7${S} elem, ${v.size} columnas`);
      const A = performance.now(), q = Mn({
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
      const k = /* @__PURE__ */ new Map();
      q.nodeResults.forEach((F, T) => {
        k.set(T, [
          0,
          0,
          F.w,
          F.bx,
          F.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: k
      });
      const I = /* @__PURE__ */ new Map();
      for (const F of v) I.set(F, [
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
        f.forEach((T, P) => {
          I.has(P) || O.set(P, [
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
        supports: I,
        loads: O
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const F = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        q.elementResults.forEach((_, ne) => {
          F.set(ne, [
            _.Mxx,
            _.Mxx,
            _.Mxx
          ]), T.set(ne, [
            _.Myy,
            _.Myy,
            _.Myy
          ]), P.set(ne, [
            _.Mxy,
            _.Mxy,
            _.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: F,
          bendingYY: T,
          bendingXY: P
        };
      }
      setTimeout(() => ut(), 50), Be();
    }
    function jn() {
      const t = B("L") || 4, o = B("H") || 2, n = B("t") || 0.1, l = B("E") || 2e7, s = B("nu") || 0.2, d = l / (2 * (1 + s)), a = B("q") || -100, c = B("b") || 0.8, m = B("meshSize") || 0.2, { nodes: r, elements: i, boundaryIndices: h } = jt({
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
        const b = It(S, i, q, A), f = vo(S, i, A, b), y = S.map((I) => [
          I[0],
          0,
          I[1]
        ]);
        if (e.nodes.val = y, e.elements.val = i, b && b.deformations) {
          const I = /* @__PURE__ */ new Map();
          b.deformations.forEach((O, F) => {
            I.set(F, [
              O[0],
              O[2],
              O[1],
              O[3],
              O[5],
              O[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: I
          });
        }
        if (e.nodeInputs) {
          const I = /* @__PURE__ */ new Map();
          x.forEach((F, T) => I.set(T, F));
          const O = /* @__PURE__ */ new Map();
          $.forEach((F, T) => O.set(T, [
            F[0],
            F[2],
            F[1],
            F[3],
            F[5],
            F[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: I,
            loads: O
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let k = 0;
        b && b.deformations && b.deformations.forEach((I) => {
          const O = Math.sqrt(I[0] * I[0] + I[1] * I[1] + I[2] * I[2]);
          k = Math.max(k, O);
        }), console.log(`Viga Alta: ${S.length} nodos, ${i.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${c}m central`), console.log(`  max|u| = ${k.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => ut(), 50), Be();
    }
    function Wn() {
      const t = B("H") || 4, o = B("B") || 3, n = B("tw") || 0.3, l = B("tb") || 0.4, s = B("meshSize") || 0.2, d = B("E") || 25e6, a = B("nu") || 0.2, c = d / (2 * (1 + a)), m = B("gamma") || 18, r = B("Ka") || 0.33, i = B("Es") || 5e4, h = B("nus") || 0.3, S = i / (2 * (1 + h)), w = B("kn") || 1e6, x = B("ks") || 1e4, p = B("gammaW") || 9.81, u = B("Hw") || 3.5, v = B("qs") || 0, M = fe, $ = o * 0.3, A = o * 0.7, q = [
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
        const T = jt({
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
        b = T.nodes, f = T.elements;
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
          const ne = b[_][0], ae = b[_][1];
          Math.abs(ne - n) < s * 0.6 && ae >= l - 1e-6 && P.push({
            idx: _,
            y: ae
          });
        }
        P.sort((_, ne) => _.y - ne.y);
        for (let _ = 0; _ < P.length; _++) {
          const { idx: ne, y: ae } = P[_], re = l + t - ae, oe = r * m * re + r * v;
          let Z = s;
          _ > 0 && _ < P.length - 1 ? Z = (P[_ + 1].y - P[_ - 1].y) / 2 : _ === 0 && P.length > 1 ? Z = (P[1].y - P[0].y) / 2 : _ === P.length - 1 && P.length > 1 && (Z = (P[_].y - P[_ - 1].y) / 2);
          const le = oe * Z;
          Math.abs(le) > 1e-10 && k.set(ne, [
            le,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        I = {
          elasticities: new Map(f.map((_, ne) => [
            ne,
            d
          ])),
          elasticitiesOrthogonal: new Map(f.map((_, ne) => [
            ne,
            d
          ])),
          thicknesses: new Map(f.map((_, ne) => [
            ne,
            n
          ])),
          poissonsRatios: new Map(f.map((_, ne) => [
            ne,
            a
          ])),
          shearModuli: new Map(f.map((_, ne) => [
            ne,
            c
          ]))
        };
      } else if (M === 1 || M === 2) {
        const T = A, P = l + t;
        if (M === 2) {
          const _ = [
            [
              -$,
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
          ], ne = Math.max(3, Math.ceil((P - l) / s)), ae = [];
          for (let se = 0; se <= ne; se++) ae.push([
            n,
            l + se * (P - l) / ne,
            0
          ]);
          const re = jt({
            points: [
              ..._,
              ...ae
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
          const oe = s * 0.4, Z = [];
          for (let se = 0; se < b.length; se++) {
            const Ie = b[se][0], Oe = b[se][1];
            Math.abs(Ie - n) < oe && Oe >= l - oe && Z.push(se);
          }
          Z.sort((se, Ie) => b[se][1] - b[Ie][1]);
          const le = [
            Z[0]
          ];
          for (let se = 1; se < Z.length; se++) {
            const Ie = b[Z[se]][1] - b[le[le.length - 1]][1];
            Math.abs(Ie) > s * 0.05 && le.push(Z[se]);
          }
          Z.length = 0, Z.push(...le);
          const Se = /* @__PURE__ */ new Map();
          for (const se of Z) {
            const Ie = b.length;
            b.push([
              b[se][0],
              b[se][1],
              b[se][2]
            ]), Se.set(se, Ie);
          }
          const _e = f.length, Ce = [];
          for (let se = 0; se < _e; se++) {
            const Ie = f[se], Oe = (b[Ie[0]][0] + b[Ie[1]][0] + b[Ie[2]][0]) / 3, ot = (b[Ie[0]][1] + b[Ie[1]][1] + b[Ie[2]][1]) / 3, dt = Oe >= -$ && Oe <= A && ot >= 0 && ot <= l, xo = Oe >= 0 && Oe <= n && ot >= l && ot <= l + t, Zt = dt || xo;
            if (Ce.push(!Zt), !Zt) for (let Rt = 0; Rt < Ie.length; Rt++) {
              const Bt = Se.get(Ie[Rt]);
              Bt !== void 0 && (Ie[Rt] = Bt);
            }
          }
          const ie = f.length;
          for (let se = 0; se < Z.length - 1; se++) {
            const Ie = Z[se], Oe = Z[se + 1], ot = Se.get(Ie), dt = Se.get(Oe);
            f.push([
              Oe,
              Ie,
              ot,
              dt
            ]);
          }
          const he = f.length - ie, Ee = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map();
          for (let se = 0; se < _e; se++) Ce[se] ? (Ee.set(se, i), pe.set(se, i), Pe.set(se, h), Ge.set(se, S), Fe.set(se, 1)) : (Ee.set(se, d), pe.set(se, d), Pe.set(se, a), Ge.set(se, c), Fe.set(se, 1));
          for (let se = ie; se < f.length; se++) Ee.set(se, w), pe.set(se, 0), Pe.set(se, 0), Ge.set(se, x), Fe.set(se, 0);
          I = {
            elasticities: Ee,
            elasticitiesOrthogonal: pe,
            thicknesses: Fe,
            poissonsRatios: Pe,
            shearModuli: Ge
          };
          for (let se = 0; se < b.length; se++) {
            const Ie = b[se][0], Oe = b[se][1];
            Math.abs(Oe) < 1e-6 ? y.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ie - T) < s * 0.1 && y.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < _e; se++) {
            if (!Ce[se]) continue;
            const Ie = f[se], Oe = b[Ie[0]], ot = b[Ie[1]], dt = b[Ie[2]], xo = Math.abs((ot[0] - Oe[0]) * (dt[1] - Oe[1]) - (dt[0] - Oe[0]) * (ot[1] - Oe[1])) / 2, Zt = -m * xo / 3;
            for (const Rt of Ie) {
              const Bt = k.get(Rt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Bt[1] += Zt, k.set(Rt, Bt);
            }
          }
          if (v > 0) {
            const se = [];
            for (let Ie = 0; Ie < b.length; Ie++) {
              const Oe = b[Ie][0], ot = b[Ie][1];
              Math.abs(ot - P) < s * 0.1 && Oe > n - 1e-6 && se.push({
                idx: Ie,
                x: Oe
              });
            }
            se.sort((Ie, Oe) => Ie.x - Oe.x);
            for (let Ie = 0; Ie < se.length; Ie++) {
              let Oe = s;
              Ie > 0 && Ie < se.length - 1 ? Oe = (se[Ie + 1].x - se[Ie - 1].x) / 2 : Ie === 0 && se.length > 1 ? Oe = (se[1].x - se[0].x) / 2 : Ie === se.length - 1 && se.length > 1 && (Oe = (se[Ie].x - se[Ie - 1].x) / 2);
              const ot = -v * Oe, dt = k.get(se[Ie].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              dt[1] += ot, k.set(se[Ie].idx, dt);
            }
          }
          console.log(`  Interfaz Goodman: ${Z.length} nodos interfaz, ${he} elem interfaz, kn=${w}, ks=${x}`);
        } else {
          const _ = [
            [
              -$,
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
          ], ne = [
            [
              n,
              l,
              0
            ]
          ], ae = jt({
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
          b = ae.nodes, f = ae.elements;
          const re = (ie) => {
            const he = (b[ie[0]][0] + b[ie[1]][0] + b[ie[2]][0]) / 3, Ee = (b[ie[0]][1] + b[ie[1]][1] + b[ie[2]][1]) / 3, pe = he >= -$ && he <= A && Ee >= 0 && Ee <= l, Fe = he >= 0 && he <= n && Ee >= l && Ee <= l + t;
            return pe || Fe;
          }, oe = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), Ce = [];
          for (let ie = 0; ie < f.length; ie++) {
            const he = re(f[ie]);
            Ce.push(!he), he ? (oe.set(ie, d), Z.set(ie, d), Se.set(ie, a), _e.set(ie, c), le.set(ie, 1)) : (oe.set(ie, i), Z.set(ie, i), Se.set(ie, h), _e.set(ie, S), le.set(ie, 1));
          }
          I = {
            elasticities: oe,
            elasticitiesOrthogonal: Z,
            thicknesses: le,
            poissonsRatios: Se,
            shearModuli: _e
          };
          for (let ie = 0; ie < b.length; ie++) {
            const he = b[ie][0], Ee = b[ie][1];
            Math.abs(Ee) < 1e-6 ? y.set(ie, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(he - T) < s * 0.1 && y.set(ie, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ie = 0; ie < f.length; ie++) {
            if (!Ce[ie]) continue;
            const he = f[ie], Ee = b[he[0]], pe = b[he[1]], Fe = b[he[2]], Pe = Math.abs((pe[0] - Ee[0]) * (Fe[1] - Ee[1]) - (Fe[0] - Ee[0]) * (pe[1] - Ee[1])) / 2, Ge = -m * Pe / 3;
            for (const se of he) {
              const Ie = k.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ie[1] += Ge, k.set(se, Ie);
            }
          }
          if (v > 0) {
            const ie = [];
            for (let he = 0; he < b.length; he++) {
              const Ee = b[he][0], pe = b[he][1];
              Math.abs(pe - P) < s * 0.1 && Ee > n - 1e-6 && ie.push({
                idx: he,
                x: Ee
              });
            }
            ie.sort((he, Ee) => he.x - Ee.x);
            for (let he = 0; he < ie.length; he++) {
              let Ee = s;
              he > 0 && he < ie.length - 1 ? Ee = (ie[he + 1].x - ie[he - 1].x) / 2 : he === 0 && ie.length > 1 ? Ee = (ie[1].x - ie[0].x) / 2 : he === ie.length - 1 && ie.length > 1 && (Ee = (ie[he].x - ie[he - 1].x) / 2);
              const pe = -v * Ee, Fe = k.get(ie[he].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Fe[1] += pe, k.set(ie[he].idx, Fe);
            }
          }
        }
      }
      if (M === 3) {
        const T = jt({
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
        b = T.nodes, f = T.elements;
        for (let re = 0; re < b.length; re++) Math.abs(b[re][1]) < 1e-6 && y.set(re, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + t, _ = Math.min(u, t), ne = P - _, ae = [];
        for (let re = 0; re < b.length; re++) {
          const oe = b[re][0], Z = b[re][1];
          Math.abs(oe - n) < s * 0.6 && Z >= l - 1e-6 && ae.push({
            idx: re,
            y: Z
          });
        }
        ae.sort((re, oe) => re.y - oe.y);
        for (let re = 0; re < ae.length; re++) {
          const { idx: oe, y: Z } = ae[re], le = Math.max(0, P - Z);
          if (le <= 0 || Z < ne - 1e-6) continue;
          const Se = Math.min(le, _), _e = p * Se;
          let Ce = s;
          re > 0 && re < ae.length - 1 ? Ce = (ae[re + 1].y - ae[re - 1].y) / 2 : re === 0 && ae.length > 1 ? Ce = (ae[1].y - ae[0].y) / 2 : re === ae.length - 1 && ae.length > 1 && (Ce = (ae[re].y - ae[re - 1].y) / 2);
          const ie = _e * Ce;
          Math.abs(ie) > 1e-10 && k.set(oe, [
            ie,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        I = {
          elasticities: new Map(f.map((re, oe) => [
            oe,
            d
          ])),
          elasticitiesOrthogonal: new Map(f.map((re, oe) => [
            oe,
            d
          ])),
          thicknesses: new Map(f.map((re, oe) => [
            oe,
            n
          ])),
          poissonsRatios: new Map(f.map((re, oe) => [
            oe,
            a
          ])),
          shearModuli: new Map(f.map((re, oe) => [
            oe,
            c
          ]))
        };
      }
      const O = {
        supports: y,
        loads: k
      }, F = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const T = It(b, f, O, I), P = f.filter((le) => le.length === 3), _ = {};
        for (const le of Object.keys(I)) {
          const Se = I[le];
          if (Se && Se instanceof Map) {
            const _e = /* @__PURE__ */ new Map();
            let Ce = 0;
            for (let ie = 0; ie < f.length; ie++) f[ie].length === 3 && (Se.has(ie) && _e.set(Ce, Se.get(ie)), Ce++);
            _[le] = _e;
          }
        }
        const ne = vo(b, P, _, T), ae = b.map((le) => [
          le[0],
          0,
          le[1]
        ]);
        if (e.nodes.val = ae, e.elements.val = P, T && T.deformations) {
          const le = /* @__PURE__ */ new Map();
          T.deformations.forEach((Se, _e) => {
            le.set(_e, [
              Se[0],
              Se[2],
              Se[1],
              Se[3],
              Se[5],
              Se[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: le
          });
        }
        const re = /* @__PURE__ */ new Map();
        y.forEach((le, Se) => re.set(Se, le));
        const oe = /* @__PURE__ */ new Map();
        k.forEach((le, Se) => oe.set(Se, [
          le[0],
          le[2],
          le[1],
          le[3],
          le[5],
          le[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: re,
          loads: oe
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Z = 0;
        T && T.deformations && T.deformations.forEach((le) => {
          const Se = Math.sqrt(le[0] * le[0] + le[1] * le[1] + le[2] * le[2]);
          Z = Math.max(Z, Se);
        }), console.log(`Muro Contencion [${F[M]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${m}, qs=${v}`), M === 1 && console.log(`  Es=${i}, nus=${h}`), M === 2 && console.log(`  Es=${i}, nus=${h}, kn=${w}, ks=${x}`), M === 3 && console.log(`  gammaW=${p}, Hw=${u}`), console.log(`  max|u| = ${Z.toExponential(4)}`);
      } catch (T) {
        console.warn("Muro Contencion failed:", T.message);
      }
      setTimeout(() => ut(), 50), Be();
    }
    function Yn() {
      const t = B("Lx") || 2, o = B("Ly") || 2, n = B("t") || 0.5, l = B("colA") || 0.4, s = B("colH") || 1.5, d = Math.round(B("nx") || 8), a = Math.round(B("ny") || 8), c = B("E") || 25e6, m = B("nu") || 0.2, r = B("P") || -500, i = B("Mx") || 0, h = B("My") || 0, S = B("ks") || 2e4, w = t / d, x = o / a, p = t / 2, u = o / 2, v = l / 2, M = [];
      for (let y = 0; y <= a; y++) for (let k = 0; k <= d; k++) {
        const I = y * (d + 1) + k;
        let O = w, F = x;
        (k === 0 || k === d) && (O = w / 2), (y === 0 || y === a) && (F = x / 2), M.push({
          node: I,
          dof: 0,
          k: S * O * F
        });
      }
      let $ = 0;
      for (let y = 0; y <= a; y++) for (let k = 0; k <= d; k++) Math.abs(k * w - p) <= v + 1e-6 && Math.abs(y * x - u) <= v + 1e-6 && $++;
      const A = r / Math.max($, 1), q = [];
      for (let y = 0; y <= a; y++) for (let k = 0; k <= d; k++) {
        const I = k * w, O = y * x;
        Math.abs(I - p) <= v + 1e-6 && Math.abs(O - u) <= v + 1e-6 && q.push({
          node: y * (d + 1) + k,
          dof: 0,
          value: A
        });
      }
      if (Math.abs(i) > 1e-6) {
        const y = v > 1e-6 ? v : x, k = i / y;
        for (let I = 0; I <= a; I++) for (let O = 0; O <= d; O++) {
          const F = O * w, T = I * x;
          if (Math.abs(F - p) <= v + 1e-6 && Math.abs(T - u) <= v + 1e-6) {
            const P = T - u;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              q.push({
                node: I * (d + 1) + O,
                dof: 0,
                value: _ * k / $ * 2
              });
            }
          }
        }
      }
      if (Math.abs(h) > 1e-6) {
        const y = v > 1e-6 ? v : w, k = h / y;
        for (let I = 0; I <= a; I++) for (let O = 0; O <= d; O++) {
          const F = O * w, T = I * x;
          if (Math.abs(F - p) <= v + 1e-6 && Math.abs(T - u) <= v + 1e-6) {
            const P = F - p;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              q.push({
                node: I * (d + 1) + O,
                dof: 0,
                value: _ * k / $ * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[ve] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${r}, Mx=${i}, My=${h}, ks=${S}`);
      try {
        const y = Mn({
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
        const k = y.nodeResults.map((ne) => [
          ne.x,
          ne.y,
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
        const O = y.elementResults.map((ne) => [
          ...ne.nodes
        ]);
        O.push([
          I,
          I + 4
        ]), O.push([
          I + 1,
          I + 5
        ]), O.push([
          I + 2,
          I + 6
        ]), O.push([
          I + 3,
          I + 7
        ]), O.push([
          I + 4,
          I + 5
        ]), O.push([
          I + 5,
          I + 6
        ]), O.push([
          I + 6,
          I + 7
        ]), O.push([
          I + 7,
          I + 4
        ]), O.push([
          I,
          I + 1
        ]), O.push([
          I + 1,
          I + 2
        ]), O.push([
          I + 2,
          I + 3
        ]), O.push([
          I + 3,
          I
        ]), e.nodes.val = k, e.elements.val = O;
        const F = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((ne, ae) => {
          F.set(ae, [
            0,
            0,
            ne.w,
            ne.bx,
            ne.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: F
        });
        const T = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((ne, ae) => {
          const re = ne.x, oe = ne.y;
          (re < 1e-6 || re > t - 1e-6 || oe < 1e-6 || oe > o - 1e-6) && T.set(ae, [
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
          supports: T,
          loads: P
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const ne = y.elementResults.length, ae = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
          y.elementResults.forEach((Z, le) => {
            ae.set(le, [
              Z.Mxx,
              Z.Mxx,
              Z.Mxx
            ]), re.set(le, [
              Z.Myy,
              Z.Myy,
              Z.Myy
            ]), oe.set(le, [
              Z.Mxy,
              Z.Mxy,
              Z.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: ae,
            bendingYY: re,
            bendingXY: oe
          };
        }
        const _ = Je();
        _ && (_.settings.shellResults.val = "bendingXX");
      } catch (y) {
        console.warn("Zapata solver failed:", y.message);
      }
      setTimeout(() => ut(), 50), Be();
    }
    function Jn() {
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
      const { nodes: M, elements: $ } = jt({
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
      }), A = (F, T) => {
        for (const [P, _] of v) if ((F - P) * (F - P) + (T - _) * (T - _) < p * p) return true;
        return false;
      }, q = $.filter((F) => {
        const T = (M[F[0]][0] + M[F[1]][0] + M[F[2]][0]) / 3, P = (M[F[0]][1] + M[F[1]][1] + M[F[2]][1]) / 3;
        return !A(T, P);
      }), b = M, f = /* @__PURE__ */ new Map();
      for (let F = 0; F < b.length; F++) {
        const T = b[F][0], P = b[F][1];
        for (const [_, ne] of v) {
          const ae = Math.sqrt((T - _) * (T - _) + (P - ne) * (P - ne));
          ae >= p * 0.7 && ae <= p * 1.5 && f.set(F, [
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
      for (let F = 0; F < b.length; F++) {
        const T = b[F][0], P = b[F][1];
        Math.abs(T - w) <= u && Math.abs(P - x) <= u && k++;
      }
      const I = h / Math.max(k, 1);
      for (let F = 0; F < b.length; F++) {
        const T = b[F][0], P = b[F][1];
        if (Math.abs(T - w) <= u && Math.abs(P - x) <= u) {
          const _ = y.get(F) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          _[2] += I, y.set(F, _);
        }
      }
      const O = {
        elasticities: new Map(q.map((F, T) => [
          T,
          m
        ])),
        elasticitiesOrthogonal: new Map(q.map((F, T) => [
          T,
          m
        ])),
        thicknesses: new Map(q.map((F, T) => [
          T,
          n
        ])),
        poissonsRatios: new Map(q.map((F, T) => [
          T,
          r
        ])),
        shearModuli: new Map(q.map((F, T) => [
          T,
          i
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${S} pernos d=${l * 1e3}mm`), console.log(`  P=${h} kN, col=${a * 1e3}mm, mesh=${c * 1e3}mm`), console.log(`  ${q.length} triangulos, ${b.length} nodos`);
      try {
        const F = It(b, q, {
          supports: f,
          loads: y
        }, O), T = vo(b, q, O, F);
        e.nodes.val = b, e.elements.val = q, F && e.deformOutputs && (e.deformOutputs.val = F), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: y
        }), e.elementInputs && (e.elementInputs.val = {}), T && e.analyzeOutputs && (e.analyzeOutputs.val = T);
        let P = 0;
        F && F.deformations && F.deformations.forEach((_) => {
          const ne = Math.sqrt(_[0] * _[0] + _[1] * _[1] + _[2] * _[2]);
          P = Math.max(P, ne);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (F) {
        console.warn("Placa Base failed:", F.message);
      }
      setTimeout(() => ut(), 50), Be();
    }
    function Gn() {
      const t = B("colB") || 0.3, o = B("colH") || 0.3, n = B("colT") || 8e-3, l = B("colLen") || 1.5, s = B("Lx") || 0.45, d = B("Ly") || 0.45, a = B("tPlaca") || 0.025, c = B("dBolt") || 0.022, m = B("sx") || 0.32, r = B("sy") || 0.32, i = Math.round(B("nSubColV") || 6), h = Math.round(B("nSubColH") || 4), S = Math.round(B("nSubPlaca") || 10), w = B("E") || 2e8, x = B("nu") || 0.3, p = w / (2 * (1 + x)), u = B("P") || -300, v = s / 2, M = d / 2, $ = c / 2, A = t / 2, q = o / 2, b = [], f = [], y = S, k = s / y, I = d / y, O = (pe, Fe) => Fe * (y + 1) + pe;
      for (let pe = 0; pe <= y; pe++) for (let Fe = 0; Fe <= y; Fe++) b.push([
        Fe * k,
        pe * I,
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
      ], T = (pe, Fe) => {
        for (const [Pe, Ge] of F) if ((pe - Pe) * (pe - Pe) + (Fe - Ge) * (Fe - Ge) < $ * $) return true;
        return false;
      }, P = f.length;
      for (let pe = 0; pe < y; pe++) for (let Fe = 0; Fe < y; Fe++) {
        const Pe = (Fe + 0.5) * k, Ge = (pe + 0.5) * I;
        T(Pe, Ge) || f.push([
          O(Fe, pe),
          O(Fe + 1, pe),
          O(Fe + 1, pe + 1),
          O(Fe, pe + 1)
        ]);
      }
      const _ = f.length - P, ne = i, ae = h, re = [
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
      ], le = (pe, Fe) => {
        for (let Pe = 0; Pe < (y + 1) * (y + 1); Pe++) if (Math.abs(b[Pe][0] - pe) < k * 0.3 && Math.abs(b[Pe][1] - Fe) < I * 0.3 && Math.abs(b[Pe][2]) < 1e-6) return Pe;
        return -1;
      };
      for (const [pe, Fe] of Z) {
        const [Pe, Ge] = re[pe], [se, Ie] = re[Fe], Oe = [];
        for (let ot = 0; ot <= ne; ot++) {
          const dt = [], xo = ot / ne * l;
          for (let Zt = 0; Zt <= ae; Zt++) {
            const Rt = Zt / ae, Bt = Pe + Rt * (se - Pe), yn = Ge + Rt * (Ie - Ge);
            if (ot === 0) {
              const Dt = le(Bt, yn);
              if (Dt >= 0) {
                dt.push(Dt);
                continue;
              }
            }
            let $n = -1;
            for (let Dt = 0; Dt < b.length; Dt++) if (Math.abs(b[Dt][0] - Bt) < 1e-6 && Math.abs(b[Dt][1] - yn) < 1e-6 && Math.abs(b[Dt][2] - xo) < 1e-6) {
              $n = Dt;
              break;
            }
            $n >= 0 ? dt.push($n) : (dt.push(b.length), b.push([
              Bt,
              yn,
              xo
            ]));
          }
          Oe.push(dt);
        }
        for (let ot = 0; ot < ne; ot++) for (let dt = 0; dt < ae; dt++) f.push([
          Oe[ot][dt],
          Oe[ot][dt + 1],
          Oe[ot + 1][dt + 1],
          Oe[ot + 1][dt]
        ]);
      }
      const Se = f.length - oe, _e = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (y + 1) * (y + 1); pe++) {
        const Fe = b[pe][0], Pe = b[pe][1];
        for (const [Ge, se] of F) {
          const Ie = Math.sqrt((Fe - Ge) * (Fe - Ge) + (Pe - se) * (Pe - se));
          Ie >= $ * 0.5 && Ie <= $ * 2 && _e.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Ce = /* @__PURE__ */ new Map(), ie = [];
      for (let pe = 0; pe < b.length; pe++) Math.abs(b[pe][2] - l) < 1e-6 && ie.push(pe);
      const he = u / Math.max(ie.length, 1);
      for (const pe of ie) Ce.set(pe, [
        0,
        0,
        he,
        0,
        0,
        0
      ]);
      const Ee = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let pe = P; pe < P + _; pe++) Ee.elasticities.set(pe, w), Ee.poissonsRatios.set(pe, x), Ee.thicknesses.set(pe, a), Ee.shearModuli.set(pe, p);
      for (let pe = oe; pe < oe + Se; pe++) Ee.elasticities.set(pe, w), Ee.poissonsRatios.set(pe, x), Ee.thicknesses.set(pe, n), Ee.shearModuli.set(pe, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${c * 1e3}mm`), console.log(`  ${_} Q4 placa + ${Se} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${u} kN`);
      try {
        const pe = It(b, f, {
          supports: _e,
          loads: Ce
        }, Ee), Fe = vo(b, f, Ee, pe);
        e.nodes.val = b, e.elements.val = f, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: _e,
          loads: Ce
        }), e.elementInputs && (e.elementInputs.val = Ee), Fe && e.analyzeOutputs && (e.analyzeOutputs.val = Fe);
        let Pe = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((Ge) => {
          const se = Math.sqrt(Ge[0] * Ge[0] + Ge[1] * Ge[1] + Ge[2] * Ge[2]);
          Pe = Math.max(Pe, se);
        }), console.log(`  max|u| = ${Pe.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: _e,
          loads: Ce
        });
      }
      setTimeout(() => ut(), 50), Be();
    }
    function Vn() {
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
      ], { nodes: p, elements: u } = jt({
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
        const q = v.map((T) => [
          T[0],
          T[1]
        ]), b = u.map((T) => [
          T[0],
          T[1],
          T[2]
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
        }), y = v.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        e.nodes.val = y, e.elements.val = u;
        const k = /* @__PURE__ */ new Map();
        for (let T = 0; T < f.displacements.length; T++) {
          const [P, _] = f.displacements[T];
          k.set(T, [
            P,
            0,
            _,
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
        for (let T = 0; T < f.plasticStrain.length; T++) {
          const P = f.plasticStrain[T];
          I.set(T, [
            P,
            P,
            P
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: I
        });
        let O = 0;
        for (const [T, P] of f.displacements) {
          const _ = Math.sqrt(T * T + P * P);
          O = Math.max(O, _);
        }
        let F = 0;
        for (const T of f.plasticStrain) F = Math.max(F, T);
        console.log(`Talud SRM: ${v.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${m} kPa, \u03C6=${r}\xB0, \u03B3=${c}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${O.toExponential(4)}`), console.log(`  max \u03B5_pl = ${F.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (q) {
        console.warn("Talud SRM failed:", q.message);
      }
      setTimeout(() => ut(), 50), Be();
    }
    let At = null, lt = null, Ht = null;
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
    function nt(t) {
      const o = $o.find((n) => n.id === j);
      return t / o.toM;
    }
    function st(t) {
      const o = $o.find((n) => n.id === j);
      return t * o.toM;
    }
    function oo(t) {
      const o = Ln.find((l) => l.id === J.forceId), n = $o.find((l) => l.id === J.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function tn(t) {
      const o = Ln.find((l) => l.id === J.forceId), n = $o.find((l) => l.id === J.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function on() {
      return J.label;
    }
    function Es() {
      switch ($o.find((o) => o.id === j).id) {
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
      const t = oo(20594), o = oo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Xn(t, o, n, l, s) {
      const d = ze.steelVigaType, a = d === 0 ? jo() : Wo();
      if (ze.vigaMat === 0) {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = `b${n}${c}`, i = `h${n}${c}`, h = {};
          h[r] = +nt(m.b).toFixed(2), h[i] = +nt(m.h).toFixed(2), t.addBinding(h, r, {
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
          r && (o[parseInt(r[1])].b = st(c.value), me()), i && (o[parseInt(i[1])].h = st(c.value), me());
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
          r && (o[parseInt(r[1])].profileIdx = c.value, me());
        });
      } else if (d === 2) {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = {}, i = `${n}${c}`;
          r[`bf${i}`] = +nt(m.bf ?? 0.2).toFixed(3), r[`h${i}`] = +nt(m.hf ?? 0.4).toFixed(3), r[`tf${i}`] = +nt(m.tf ?? 0.015).toFixed(3), r[`tw${i}`] = +nt(m.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${i}`, {
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
            m === `bf${i}` && (o[r].bf = st(c.value), me()), m === `h${i}` && (o[r].hf = st(c.value), me()), m === `tf${i}` && (o[r].tf = st(c.value), me()), m === `tw${i}` && (o[r].tw = st(c.value), me());
          }
        });
      } else {
        for (let c = 0; c < o.length; c++) {
          const m = o[c], r = {}, i = `${n}${c}`;
          r[`bc${i}`] = +nt(m.bc ?? 0.2).toFixed(3), r[`hc${i}`] = +nt(m.hc ?? 0.3).toFixed(3), r[`t${i}`] = +nt(m.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${i}`, {
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
            m === `bc${i}` && (o[r].bc = st(c.value), me()), m === `hc${i}` && (o[r].hc = st(c.value), me()), m === `t${i}` && (o[r].t = st(c.value), me());
          }
        });
      }
    }
    function fo() {
      var _a;
      if (lt) {
        try {
          lt.dispose();
        } catch {
        }
        lt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), E !== "edificio" && E !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Ss();
      if (!o) return;
      o.style.display = "";
      const n = z, l = Math.round(((_a = ee.nPisos) == null ? void 0 : _a.val) ?? 3), s = Es(), d = ks(), a = K.length || 1, c = Q.length || 1;
      for (; ze.perFloor.length < l; ) {
        const b = ze.perFloor.length > 0 ? JSON.parse(JSON.stringify(ze.perFloor[ze.perFloor.length - 1])) : qo(a, c);
        ze.perFloor.push(b);
      }
      ze.perFloor.length > l && (ze.perFloor.length = l);
      for (const b of ze.perFloor) {
        for (; b.vigasX.length < a; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : qt());
        for (b.vigasX.length > a && (b.vigasX.length = a); b.vigasY.length < c; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : qt());
        b.vigasY.length > c && (b.vigasY.length = c);
      }
      lt = new Oo({
        title: `Sections (${n.label})`,
        container: o
      });
      const m = {
        colMat: ze.colMat
      };
      if (lt.addBinding(m, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        ze.colMat = b.value, fo(), me();
      }), ze.colMat === 0) {
        const b = {
          forma: ze.colShape
        };
        lt.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (y) => {
          ze.colShape = y.value, fo(), me();
        });
        const f = {
          fc: +oo(ze.fc).toFixed(1)
        };
        lt.addBinding(f, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${on()})`
        }), lt.on("change", (y) => {
          var _a2;
          ((_a2 = y.target) == null ? void 0 : _a2.key) === "fc" && (ze.fc = tn(y.value), me());
        });
      } else if (ze.colMat === 1) {
        const b = {
          colType: ze.steelColType
        };
        lt.addBinding(b, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          ze.steelColType = f.value, fo(), me();
        });
      }
      lt.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: ze.vigaMat
      };
      if (lt.addBinding(r, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        ze.vigaMat = b.value, fo(), me();
      }), ze.vigaMat === 1) {
        const b = {
          vigaType: ze.steelVigaType
        };
        lt.addBinding(b, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          ze.steelVigaType = f.value, fo(), me();
        });
      }
      const i = ze.steelColType === 0 ? jo() : Wo();
      ze.steelVigaType === 0 ? jo() : Wo();
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
        const f = ze.perFloor[b], y = lt.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (ze.colMat === 0) if (ze.colShape === 1) {
          const k = {
            dCol: +nt(f.dCol).toFixed(2)
          };
          y.addBinding(k, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), y.on("change", (I) => {
            var _a2;
            ((_a2 = I.target) == null ? void 0 : _a2.key) === "dCol" && (f.dCol = st(I.value), me());
          });
        } else {
          const k = {
            bCol: +nt(f.bCol).toFixed(2),
            hCol: +nt(f.hCol).toFixed(2)
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
            var _a2, _b;
            ((_a2 = I.target) == null ? void 0 : _a2.key) === "bCol" && (f.bCol = st(I.value), me()), ((_b = I.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = st(I.value), me());
          });
        }
        else if (ze.colMat === 1) if (ze.steelColType <= 1) {
          const k = {
            col: f.colProfileIdx
          };
          y.addBinding(k, "col", {
            label: "Columna",
            options: i
          }).on("change", (I) => {
            f.colProfileIdx = I.value, me();
          });
        } else if (ze.steelColType === 2) {
          const k = {
            bf: +nt(f.colBf ?? 0.3).toFixed(3),
            h: +nt(f.colHf ?? 0.3).toFixed(3),
            tf: +nt(f.colTf ?? 0.02).toFixed(3),
            tw: +nt(f.colTw ?? 0.012).toFixed(3)
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
            var _a2, _b, _c, _d;
            ((_a2 = I.target) == null ? void 0 : _a2.key) === "bf" && (f.colBf = st(I.value), me()), ((_b = I.target) == null ? void 0 : _b.key) === "h" && (f.colHf = st(I.value), me()), ((_c = I.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = st(I.value), me()), ((_d = I.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = st(I.value), me());
          });
        } else {
          const k = {
            bc: +nt(f.colBc ?? 0.3).toFixed(3),
            hc: +nt(f.colHc ?? 0.3).toFixed(3),
            t: +nt(f.colT ?? 0.01).toFixed(3)
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
            var _a2, _b, _c;
            ((_a2 = I.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = st(I.value), me()), ((_b = I.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = st(I.value), me()), ((_c = I.target) == null ? void 0 : _c.key) === "t" && (f.colT = st(I.value), me());
          });
        }
        else {
          const k = {
            bc: +nt(f.colBc ?? 0.3).toFixed(3),
            hc: +nt(f.colHc ?? 0.3).toFixed(3),
            t: +nt(f.colT ?? 0.01).toFixed(3),
            Es: +oo(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +oo(f.colFc ?? 28e3).toFixed(1),
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
          const I = +oo(1e8).toFixed(0), O = +oo(3e8).toFixed(0), F = Math.max(1, Math.round((O - I) / 200));
          y.addBinding(k, "Es", {
            min: I,
            max: O,
            step: F,
            label: `Es (${on()})`
          }), y.addBinding(k, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), y.addBinding(k, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${on()})`
          }), y.addBinding(k, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), y.on("change", (T) => {
            var _a2, _b, _c, _d, _e, _f, _g;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = st(T.value), me()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = st(T.value), me()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (f.colT = st(T.value), me()), ((_d = T.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = tn(T.value), me()), ((_e = T.target) == null ? void 0 : _e.key) === "nuS" && (f.colNuS = T.value, me()), ((_f = T.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = tn(T.value), me()), ((_g = T.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = T.value, me());
          });
        }
        if (f.vigasX.length > 0) {
          const k = y.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Xn(k, f.vigasX, "x", s, h);
        }
        if (f.vigasY.length > 0) {
          const k = y.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Xn(k, f.vigasY, "y", s, h);
        }
      }
      lt.addBlade({
        view: "separator"
      });
      const S = lt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: rt,
        direccion: wt === "x" ? 0 : 1,
        cantidad: ct
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
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (rt = b.value, me()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (wt = b.value === 0 ? "x" : "y", me()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (ct = Math.round(b.value), me());
      }), lt.addBlade({
        view: "separator"
      });
      const x = lt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: $t,
        espesor: +nt(St).toFixed(3),
        subdivX: Yt,
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
        var _a2, _b, _c, _d;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && ($t = b.value, me()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && (St = st(b.value), me()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (Yt = Math.round(b.value), me()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (Nt = Math.round(b.value), me());
      }), lt.addBlade({
        view: "separator"
      });
      const u = lt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), v = {
        espesor: +nt(We).toFixed(3),
        subdivH: et,
        subdivW: ft
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
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "espesor" && (We = st(b.value), me()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (et = Math.round(b.value), me()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (ft = Math.round(b.value), me());
      });
      const M = K.length || 1, $ = Q.length || 1, A = M + 1, q = $ + 1;
      if (M > 0) {
        const b = u.addFolder({
          title: `Muros dir X (${M} vanos)`,
          expanded: false
        });
        for (let f = 0; f < M; f++) for (let y = 0; y < q; y++) {
          const k = `wx_${f}_${y}`, I = Me.some((T) => T.dir === "x" && T.bay === f && T.axisIdx === y), O = {};
          O[k] = I;
          const F = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + y)}`;
          b.addBinding(O, k, {
            label: F
          }).on("change", (T) => {
            T.value ? Me.push({
              dir: "x",
              bay: f,
              axisIdx: y,
              floors: [
                -1
              ]
            }) : Me = Me.filter((P) => !(P.dir === "x" && P.bay === f && P.axisIdx === y)), me();
          });
        }
      }
      if ($ > 0) {
        const b = u.addFolder({
          title: `Muros dir Y (${$} vanos)`,
          expanded: false
        });
        for (let f = 0; f < $; f++) for (let y = 0; y < A; y++) {
          const k = `wy_${f}_${y}`, I = Me.some((T) => T.dir === "y" && T.bay === f && T.axisIdx === y), O = {};
          O[k] = I;
          const F = `Vano Y${f + 1} / Eje X${y + 1}`;
          b.addBinding(O, k, {
            label: F
          }).on("change", (T) => {
            T.value ? Me.push({
              dir: "y",
              bay: f,
              axisIdx: y,
              floors: [
                -1
              ]
            }) : Me = Me.filter((P) => !(P.dir === "y" && P.bay === f && P.axisIdx === y)), me();
          });
        }
      }
      if (Me.length > 0) {
        u.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${Me.length} ubicaciones`
        };
        u.addBinding(b, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Ct() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ce || (ce = t.innerHTML), ge) {
        try {
          ge.dispose();
        } catch {
        }
        ge = null;
      }
      if (At) {
        try {
          At.dispose();
        } catch {
        }
        At = null;
      }
      t.innerHTML = "";
      const o = E.charAt(0).toUpperCase() + E.slice(1);
      ge = new Oo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Cn()[E];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = ee[a.key].val;
        for (const a of n) ge.addBinding(s, a.key, {
          min: ee[a.key].min,
          max: ee[a.key].max,
          step: ee[a.key].step,
          label: ee[a.key].label
        });
        const d = ge.addFolder({
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
            ee[a.key] && (ee[a.key].min = c.min, ee[a.key].max = c.max, ee[a.key].val < c.min && (ee[a.key].val = c.min), ee[a.key].val > c.max && (ee[a.key].val = c.max)), Ct(), me();
          });
        }
        ge.on("change", (a) => {
          var _a;
          const c = (_a = a.target) == null ? void 0 : _a.key;
          if (c && ee[c]) {
            if (ee[c].val = a.value, E === "edificio" && (c === "nVanosX" || c === "nVanosY" || c === "nPisos")) {
              if (c === "nVanosX" || c === "nVanosY") {
                const m = Math.round(ee.nVanosX.val), r = Math.round(ee.nVanosY.val);
                for (; K.length < m; ) K.push(K[K.length - 1] ?? z.defaultSpan);
                for (K.length > m && (K.length = m); Q.length < r; ) Q.push(Q[Q.length - 1] ?? z.defaultSpan * 0.8);
                Q.length > r && (Q.length = r);
              }
              Ct();
            }
            me();
          }
        });
      }
      if (E === "edificio") {
        if (Ht) {
          try {
            Ht.dispose();
          } catch {
          }
          Ht = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const d = z;
          Ht = new Oo({
            title: `Luces (${d.length})`,
            container: s
          });
          const a = Ht.addFolder({
            title: "Luces X",
            expanded: true
          }), c = {};
          for (let i = 0; i < K.length; i++) c[`svx_${i + 1}`] = K[i];
          for (let i = 0; i < K.length; i++) a.addBinding(c, `svx_${i + 1}`, {
            min: d.spanRange[0],
            max: d.spanRange[1],
            step: d.spanRange[2],
            label: `svx${i + 1}`
          });
          a.on("change", (i) => {
            var _a, _b;
            const S = (_b = (_a = i.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            S && (K[parseInt(S[1]) - 1] = i.value, me());
          });
          const m = Ht.addFolder({
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
            var _a, _b;
            const S = (_b = (_a = i.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            S && (Q[parseInt(S[1]) - 1] = i.value, me());
          });
        }
      }
      if (fo(), ge) {
        ge.addBlade({
          view: "separator"
        });
        const s = Do()[E];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((c, m) => {
            d[c.label] = m;
          });
          const a = {
            apoyo: fe
          };
          ge.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (c) => {
            fe = c.value, me();
          });
        }
        if (E === "placa-3q" || E === "placa-q4") {
          const d = {
            teoria: ve
          };
          ge.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            ve = a.value, me();
          });
        }
      }
      const l = Pn()[E];
      if (l && l.length > 0) {
        At = new Oo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = Ye[a.key].val;
        for (const a of l) At.addBinding(s, a.key, {
          min: Ye[a.key].min,
          max: Ye[a.key].max,
          step: Ye[a.key].step,
          label: Ye[a.key].label
        });
        const d = At.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const c = {
            min: Ye[a.key].min,
            max: Ye[a.key].max
          };
          d.addBinding(c, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(c, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            Ye[a.key] && (Ye[a.key].min = c.min, Ye[a.key].max = c.max, Ye[a.key].val < c.min && (Ye[a.key].val = c.min), Ye[a.key].val > c.max && (Ye[a.key].val = c.max)), Ct(), me();
          });
        }
        At.on("change", (a) => {
          var _a;
          const c = (_a = a.target) == null ? void 0 : _a.key;
          if (c && Ye[c]) {
            if (Ye[c].val = a.value, e.nodeInputs) {
              const m = e.nodeInputs.val;
              m.supports && (e.nodeInputs.val = {
                supports: m.supports
              });
            }
            setTimeout(() => Ao(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (ee[s]) ee[s].val = d, me(), Ct();
          else if (Ye[s]) {
            if (Ye[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Ao(), Ct();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in ee) s[d] = ee[d].val;
          for (const d in Ye) s[d] = Ye[d].val;
          return s;
        },
        setGenerator: je
      };
    }
    function Is() {
      if (ge) {
        try {
          ge.dispose();
        } catch {
        }
        ge = null;
      }
      if (At) {
        try {
          At.dispose();
        } catch {
        }
        At = null;
      }
      if (lt) {
        try {
          lt.dispose();
        } catch {
        }
        lt = null;
      }
      if (Ht) {
        try {
          Ht.dispose();
        } catch {
        }
        Ht = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ce && (n.innerHTML = ce);
    }
    const $e = document.createElement("div");
    $e.id = "cad3d-panel";
    const Kn = document.createElement("style");
    Kn.textContent = `
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
  `, document.head.appendChild(Kn), ta() === "light" && document.documentElement.classList.add("awatif-light"), oa((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), E && ut(true);
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
    let it = null;
    function zs() {
      var _a, _b, _c, _d, _e, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a = e.nodeInputs) == null ? void 0 : _a.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = j, d = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${E || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((r, i) => {
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
      }), a.push("")), E) {
        a.push("## CLI COMMAND");
        const r = Object.entries(ee).map(([i, h]) => `${i}=${h.val}`).join(" ");
        a.push(`cad.${E === "edificio" ? "building" : E}(${r})`);
      }
      return a.join(`
`);
    }
    let Eo = false;
    function Ls() {
      var _a, _b, _c, _d;
      if (it) {
        it.remove(), it = null, Eo = false;
        return;
      }
      const t = zs();
      it = document.createElement("div"), it.id = "export-overlay", it.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, it.innerHTML = `
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
    `, document.body.appendChild(it), (_a = it.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        it == null ? void 0 : it.remove(), it = null, Eo = false;
      }), (_b = it.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = it.querySelector("#export-body"), n = it.querySelector("#export-minimize");
        Eo = !Eo, Eo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", it.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", it.style.width = "720px");
      }), (_c = it.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = it.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = it.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = it.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: E || "custom",
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
        const m = it.querySelector("#export-text");
        m.value = JSON.stringify(d, null, 2);
        const r = it.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Be() {
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
    function nn() {
      var _a;
      if (!te || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = Zs(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          V = d, Ae = t.map((r) => [
            ...r
          ]), ye = 0;
          const { extent: a } = Gt(), c = (_a = d.modeShapes) == null ? void 0 : _a[0];
          if (c) {
            let r = 0;
            for (let i = 0; i < t.length; i++) {
              const h = c[i * 6] || 0, S = c[i * 6 + 1] || 0, w = c[i * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(h * h + S * S + w * w));
            }
            Te = r > 1e-12 ? a * 0.05 / r : 1;
          }
          const m = `${E} \u2014 ${t.length}n ${o.length}e`;
          Ke.render(d, {
            title: m
          }), Ke.div.style.display = "", ko(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), V = null;
      }
    }
    function sn() {
      be && (cancelAnimationFrame(be), be = 0), Ae.length > 0 && (e.nodes.val = Ae.map((t) => [
        ...t
      ])), Ke.div.style.display = "none", V = null;
    }
    function ko() {
      var _a;
      if (be && cancelAnimationFrame(be), !(V == null ? void 0 : V.modeShapes) || !Ae.length) return;
      const t = V.modeShapes[ye];
      if (!t) return;
      const o = ((_a = V.frequencies) == null ? void 0 : _a[ye]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = Ae.length, d = e.elements.rawVal, { extent: a } = Gt(), c = $e.querySelector("#cad3d-modal-scale"), m = c && parseFloat(c.value) || 5;
      let r = 0;
      for (let $ = 0; $ < s; $++) {
        const A = t[$ * 6] || 0, q = t[$ * 6 + 1] || 0, b = t[$ * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(A * A + q * q + b * b));
      }
      const i = r > 1e-12 ? a * m / 100 / r : 1, h = Je();
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
          const b = Ae[q];
          p[q * 3] = b[0] + (t[q * 6] || 0) * A, p[q * 3 + 1] = b[1] + (t[q * 6 + 1] || 0) * A, p[q * 3 + 2] = b[2] + (t[q * 6 + 2] || 0) * A;
        }
        if (S) {
          const q = S.geometry, b = q.getAttribute("position");
          b && b.array.length === p.length ? (b.array.set(p), b.needsUpdate = true) : q.setAttribute("position", new ao(p.slice(), 3));
        }
        if (w) {
          for (let f = 0; f < u.length; f++) {
            const [y, k] = u[f];
            v[f * 6] = p[y * 3], v[f * 6 + 1] = p[y * 3 + 1], v[f * 6 + 2] = p[y * 3 + 2], v[f * 6 + 3] = p[k * 3], v[f * 6 + 4] = p[k * 3 + 1], v[f * 6 + 5] = p[k * 3 + 2];
          }
          const q = w.geometry, b = q.getAttribute("position");
          b && b.array.length === v.length ? (b.array.set(v), b.needsUpdate = true) : q.setAttribute("position", new ao(v.slice(), 3));
        }
        if (x) {
          const q = [];
          for (const b of d) if (b.length === 3) {
            const [f, y, k] = b;
            q.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), q.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]);
          } else if (b.length === 4) {
            const [f, y, k, I] = b;
            q.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), q.push(p[y * 3], p[y * 3 + 1], p[y * 3 + 2]), q.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]), q.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), q.push(p[k * 3], p[k * 3 + 1], p[k * 3 + 2]), q.push(p[I * 3], p[I * 3 + 1], p[I * 3 + 2]);
          }
          if (q.length > 0) {
            const b = x.geometry, f = new Float32Array(q), y = b.getAttribute("position");
            y && y.array.length === f.length ? (y.array.set(f), y.needsUpdate = true) : b.setAttribute("position", new ao(f, 3));
          }
        }
        h.render(), be = requestAnimationFrame(M);
      }
      be = requestAnimationFrame(M);
    }
    function Ao() {
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
        for (let T = 0; T < t.length; T++) n.supports.has(T) || A.push(T);
        const q = (T) => Math.round(T * 1e3) / 1e3, b = /* @__PURE__ */ new Set();
        n.supports.forEach((T, P) => {
          b.add(`${q(t[P][0])},${q(t[P][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const T of A) b.has(`${q(t[T][0])},${q(t[T][1])}`) && f.add(T);
        const y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
        if (v !== 0 || M !== 0) {
          let T = -1 / 0, P = -1 / 0;
          for (const ne of f) T = Math.max(T, q(t[ne][0])), P = Math.max(P, q(t[ne][1]));
          const _ = /* @__PURE__ */ new Map();
          for (const ne of f) {
            const ae = q(t[ne][2]);
            _.has(ae) || _.set(ae, []), _.get(ae).push(ne);
          }
          _.forEach((ne) => {
            if (v !== 0) {
              const ae = /* @__PURE__ */ new Set();
              for (const re of ne) if (q(t[re][0]) === T) {
                const oe = q(t[re][1]);
                ae.has(oe) || (ae.add(oe), y.add(re));
              }
            }
            if (M !== 0) {
              const ae = /* @__PURE__ */ new Set();
              for (const re of ne) if (q(t[re][1]) === P) {
                const oe = q(t[re][0]);
                ae.has(oe) || (ae.add(oe), k.add(re));
              }
            }
          });
        }
        const I = 9.81, O = /* @__PURE__ */ new Map();
        for (let T = 0; T < o.length; T++) {
          const P = o[T], _ = ((_a = l.densities) == null ? void 0 : _a.get(T)) ?? 0;
          if (!(Math.abs(_) < 1e-15)) {
            if (P.length === 2) {
              const ne = ((_b = l.areas) == null ? void 0 : _b.get(T)) ?? 0, ae = t[P[0]], re = t[P[1]], oe = Math.sqrt((re[0] - ae[0]) ** 2 + (re[1] - ae[1]) ** 2 + (re[2] - ae[2]) ** 2), le = -(_ * ne * oe * I) / 2;
              O.set(P[0], (O.get(P[0]) ?? 0) + le), O.set(P[1], (O.get(P[1]) ?? 0) + le);
            } else if (P.length >= 3) {
              const ne = ((_c = l.thicknesses) == null ? void 0 : _c.get(T)) ?? 0;
              let ae = 0;
              if (P.length === 3) {
                const [Z, le, Se] = P.map((_e2) => t[_e2]);
                ae = 0.5 * Math.abs((le[0] - Z[0]) * (Se[1] - Z[1]) - (Se[0] - Z[0]) * (le[1] - Z[1]));
              } else if (P.length === 4) {
                const [Z, le, Se, _e2] = P.map((Ce) => t[Ce]);
                if (ae = 0.5 * Math.abs((le[0] - Z[0]) * (Se[1] - Z[1]) - (Se[0] - Z[0]) * (le[1] - Z[1])) + 0.5 * Math.abs((Se[0] - Z[0]) * (_e2[1] - Z[1]) - (_e2[0] - Z[0]) * (Se[1] - Z[1])), ae < 1e-10) {
                  const Ce = [
                    le[0] - Z[0],
                    le[1] - Z[1],
                    le[2] - Z[2]
                  ], ie = [
                    _e2[0] - Z[0],
                    _e2[1] - Z[1],
                    _e2[2] - Z[2]
                  ], he = [
                    Ce[1] * ie[2] - Ce[2] * ie[1],
                    Ce[2] * ie[0] - Ce[0] * ie[2],
                    Ce[0] * ie[1] - Ce[1] * ie[0]
                  ];
                  ae = Math.sqrt(he[0] ** 2 + he[1] ** 2 + he[2] ** 2);
                }
              }
              const oe = -(_ * ne * ae * I) / P.length;
              for (const Z of P) O.set(Z, (O.get(Z) ?? 0) + oe);
            }
          }
        }
        const F = /* @__PURE__ */ new Set();
        for (const T of o) T.length === 2 && (F.add(T[0]), F.add(T[1]));
        for (const T of A) {
          const P = y.has(T) ? v : 0, _ = k.has(T) ? M : 0, ne = O.get(T) ?? 0, ae = F.has(T) ? u : 0, re = ne + ae;
          (P !== 0 || _ !== 0 || Math.abs(re) > 1e-10) && $.set(T, [
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
        const x = It(t, o, n, l), p = performance.now() - s;
        if (x) {
          e.deformOutputs.val = x, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let u = 0, v = -1, M = 0, $ = 0;
          x.deformations && x.deformations.forEach((y, k) => {
            const I = Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]);
            I > u && (u = I, v = k, M = y[0], $ = y[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${u.toExponential(3)}</b> m <span style="color:#666">(nodo ${v})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(M * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${($ * 1e3).toFixed(4)} mm`);
          const A = performance.now(), q = vo(t, o, l, x), b = performance.now() - A;
          q && (e.analyzeOutputs.val = q, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const p = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = S, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), te && setTimeout(() => nn(), 50);
    }
    function an(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), c = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: c
      };
    }
    function Un(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function ln(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, c = (2 * n * t * t * t + s * l * l * l) / 12, m = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: c,
        J: m
      };
    }
    function rn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, c = (o * t * t * t - s * l * l * l) / 12, m = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), i = 4 * m * m / (r > 0 ? r : 1);
      return {
        A: d,
        Iz: a,
        Iy: c,
        J: i
      };
    }
    function Ts(t, o, n, l, s, d, a) {
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
    function Jt() {
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
      if ((E === "edificio" || E === "frame") && X.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: c, perFloor: m } = ze, r = 4700 * Math.sqrt(c / 1e3) * 1e3, i = r / (2 * 1.2), h = 24 / 9.80665, S = o.E, w = o.G, x = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (Y.has(p)) {
            const y = 4700 * Math.sqrt(c / 1e3) * 1e3, k = 0.2;
            n.elasticities.set(p, y), n.poissonsRatios.set(p, k), n.thicknesses.set(p, We), n.shearModuli.set(p, y / (2 * (1 + k))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (po.has(p)) {
            const y = 4700 * Math.sqrt(c / 1e3) * 1e3, k = 0.2;
            n.elasticities.set(p, y), n.poissonsRatios.set(p, k), n.thicknesses.set(p, St), n.shearModuli.set(p, y / (2 * (1 + k))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const u = X.has(p), v = Le.get(p) ?? 0, M = m[v] ?? m[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let $, A, q, b;
          if (u) if (s === 0) A = r, q = i, b = h, $ = a === 1 ? Un(M.dCol) : an(M.bCol, M.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: M.dCol
          } : {
            type: "rect",
            b: M.bCol,
            h: M.hCol
          });
          else if (s === 1) {
            A = S, q = w, b = x;
            const y = ze.steelColType;
            if (y <= 1) {
              const k = to[M.colProfileIdx] ?? to[0];
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
              const k = M.colBf ?? 0.3, I = M.colHf ?? 0.3, O = M.colTf ?? 0.02, F = M.colTw ?? 0.012;
              $ = ln(k, I, O, F);
              const T = `I${(I * 100).toFixed(0)}x${(k * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: k,
                h: I,
                tf: O,
                tw: F,
                name: T
              });
            } else {
              const k = M.colBc ?? 0.3, I = M.colHc ?? 0.3, O = M.colT ?? 0.01;
              $ = rn(k, I, O);
              const F = `\u25A1${(I * 100).toFixed(0)}x${(k * 100).toFixed(0)}x${(O * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: k,
                h: I,
                tw: O,
                name: F
              });
            }
          } else {
            const y = M.colBc ?? 0.3, k = M.colHc ?? 0.3, I = M.colT ?? 0.01, O = M.colFc ?? 28e3, F = M.colEs ?? 2e8, T = M.colNuS ?? 0.3;
            M.colNuC;
            const P = Ts(y, k, I, F, T, O);
            $ = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, A = P.Es, q = P.Gs;
            const _ = 7.85, ne = 24 / 9.80665;
            b = (_ * P.A_steel + ne * P.A_conc) / (P.A_steel + P.A_conc);
            const ae = `CFT ${(k * 1e3).toFixed(0)}X${(y * 1e3).toFixed(0)}X${(I * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: y,
              h: k,
              tw: I,
              name: ae
            });
          }
          else {
            const y = Re.get(p), k = y ? y.dir === "x" ? M.vigasX : M.vigasY : [], I = y ? k[y.bay] ?? k[0] ?? qt() : qt();
            if (d === 0) A = r, q = i, b = h, $ = an(I.b, I.h), n.sectionShapes.set(p, {
              type: "rect",
              b: I.b,
              h: I.h
            });
            else {
              A = S, q = w, b = x;
              const O = ze.steelVigaType;
              if (O <= 1) {
                const F = to[I.profileIdx ?? 0] ?? to[0];
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
                const F = I.bf ?? 0.2, T = I.hf ?? 0.4, P = I.tf ?? 0.015, _ = I.tw ?? 0.01;
                $ = ln(F, T, P, _);
                const ne = `I${(T * 100).toFixed(0)}x${(F * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: F,
                  h: T,
                  tf: P,
                  tw: _,
                  name: ne
                });
              } else {
                const F = I.bc ?? 0.2, T = I.hc ?? 0.3, P = I.t ?? 8e-3;
                $ = rn(F, T, P);
                const _ = `\u25A1${(T * 100).toFixed(0)}x${(F * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: F,
                  h: T,
                  tw: P,
                  name: _
                });
              }
            }
          }
          const f = xe.get(p);
          if (f) {
            if ((f.material ?? 1) === 0 ? (A = r, q = i, b = h) : (A = S, q = w, b = x), f.secType === "rect" && f.b && f.h) $ = an(f.b, f.h), n.sectionShapes.set(p, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) $ = Un(f.b), n.sectionShapes.set(p, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const k = to[f.profileIdx] ?? to[0];
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
              $ = ln(f.bf, f.hf, f.tf, f.tw);
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
              $ = rn(f.bc, f.hc, f.t);
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
          n.elasticities.set(p, A), n.shearModuli.set(p, q), n.areas.set(p, $.A), n.momentsOfInertiaZ.set(p, $.Iy), n.momentsOfInertiaY.set(p, $.Iz), n.torsionalConstants.set(p, $.J), n.densities.set(p, b);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function Zn(t) {
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
          Zn(M), He.example(M);
        });
      }), $e.querySelectorAll("[data-view]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.view;
          Vt(M), $e.querySelectorAll("[data-view]").forEach(($) => $.classList.remove("view-active")), u.classList.add("view-active");
        });
      }), (_c = $e.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (u) => {
        u.stopPropagation(), E = "", $s.val = false, Is(), He.clear();
      }), (_d = $e.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (u) => {
        var _a2;
        u.stopPropagation(), zt && (zt = false, so()), Pt && _o(), vt = !vt, (_a2 = $e.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.toggle("inspect-active", vt);
        const M = Je();
        M && (M.controls.enabled = !vt), vt || Po();
      }), (_e = $e.querySelector("#cad3d-draw")) == null ? void 0 : _e.addEventListener("click", (u) => {
        var _a2;
        u.stopPropagation(), zt && (zt = false, so()), vt && Po(), Pt = !Pt, (_a2 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.toggle("inspect-active", Pt), Pt ? Ps() : _o();
      }), (_f = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (u) => {
        var _a2;
        u.stopPropagation(), vt && Po(), Pt && _o(), zt = !zt, (_a2 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", zt), zt || so();
      }), (_g = $e.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (u) => {
        u.stopPropagation(), Ls();
      });
      let t = "";
      const o = $e.querySelector("#cad3d-io-menu"), n = $e.querySelector("#cad3d-io-file");
      function l(u, v) {
        e.nodes.val = u.nodes, e.elements.val = u.elements, e.nodeInputs.val = u.nodeInputs, e.elementInputs.val = u.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${v}: ${u.nodes.length} nodes, ${u.elements.length} elements`);
      }
      function s(u) {
        X = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map();
        const v = /* @__PURE__ */ new Map();
        for (let I = 0; I < u.stories.length; I++) v.set(u.stories[I].name, I);
        for (let I = 0; I < u.elementTypes.length; I++) {
          const O = u.elementTypes[I], F = u.elementStories[I], T = v.get(F) ?? 0;
          Le.set(I, T), O === "COLUMN" || O === "BRACE" ? X.add(I) : de.add(I);
        }
        E = "edificio";
        const M = u.grids.filter((I) => I.dir === "X").sort((I, O) => I.coord - O.coord), $ = u.grids.filter((I) => I.dir === "Y").sort((I, O) => I.coord - O.coord);
        let A, q, b, f;
        if (M.length > 0 || $.length > 0) A = M.map((I) => I.coord), q = $.map((I) => I.coord), b = M.map((I) => I.label), f = $.map((I) => I.label);
        else {
          const I = new Set(u.nodes.map((F) => F[0])), O = new Set(u.nodes.map((F) => F[1]));
          A = [
            ...I
          ].sort((F, T) => F - T), q = [
            ...O
          ].sort((F, T) => F - T), b = A.map((F, T) => String(T + 1)), f = q.map((F, T) => String.fromCharCode(65 + T));
        }
        const y = u.stories.length > 0 ? Math.max(...u.stories.map((I) => I.elev)) : Math.max(...u.nodes.map((I) => I[2]));
        Ue = A, Ve = q, setTimeout(() => {
          ut(), Ko(A, q, y, b, f), Ms(u.stories, A, q), cn(), dn();
        }, 100);
        const k = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const I of u.elementTypes) k[I]++;
        console.log(`E2K grids: X=[${b.join(",")}] Y=[${f.join(",")}]`), console.log(`E2K stories: ${u.stories.map((I) => `${I.name}@${I.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${k.COLUMN} columns, ${k.BEAM} beams, ${k.BRACE} braces`), Be();
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
              const $ = Ta(M);
              l($, "E2K imported"), s($), setTimeout(() => Ao(), 200);
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
        u.stopPropagation(), g = a.value, z = io(g, j), E && je(E);
      }));
      const c = $e.querySelector("#cad3d-length-unit");
      c && (c.value = j, c.addEventListener("change", (u) => {
        u.stopPropagation(), j = c.value, z = io(g, j), E && je(E);
      })), $e.querySelectorAll("[data-preset]").forEach((u) => {
        u.addEventListener("click", (v) => {
          v.stopPropagation();
          const M = u.dataset.preset, $ = N[M];
          $ && (g = $.force, j = $.length, J = $.stress, z = io(g, j), a && (a.value = g), c && (c.value = j), $e.querySelectorAll("[data-preset]").forEach((A) => {
            A.classList.toggle("active", A.dataset.preset === M);
          }), E && je(E), console.log(`Preset: ${M} \u2192 ${g}+${j}, stress: ${J.label}`));
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
        u.stopPropagation(), te = !te, (_a2 = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", te);
        const M = $e.querySelector("#cad3d-mode-prev"), $ = $e.querySelector("#cad3d-mode-next"), A = $e.querySelector("#cad3d-mode-label"), q = $e.querySelector("#cad3d-modal-scale");
        if (te) {
          const b = Je();
          ((_b2 = b == null ? void 0 : b.settings) == null ? void 0 : _b2.loads) && (Xe = b.settings.loads.rawVal, b.settings.loads.val = false), nn(), M.style.display = "", $.style.display = "", A.style.display = "", q && (q.style.display = ""), m();
        } else sn(), M.style.display = "none", $.style.display = "none", A.style.display = "none", q && (q.style.display = "none"), E && E !== "placa-q4" && E !== "placa-3q" && me(), setTimeout(() => {
          var _a3;
          const b = Je();
          ((_a3 = b == null ? void 0 : b.settings) == null ? void 0 : _a3.loads) && Xe && (b.settings.loads.val = true);
        }, 600);
      });
      function m() {
        var _a2;
        const u = $e.querySelector("#cad3d-mode-label");
        if (!u || !(V == null ? void 0 : V.frequencies)) return;
        const v = V.frequencies[ye], M = v > 0 ? 1 / v : 0, $ = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let A = 0; A <= ye; A++) {
          const q = (_a2 = V.massParticipation) == null ? void 0 : _a2[A];
          if (q) for (let b = 0; b < 6; b++) $[b] += q[b];
        }
        u.textContent = `Modo ${ye + 1} \u2014 ${v.toFixed(2)} Hz \u2014 T=${M.toFixed(3)}s \u2014 \u03A3Ux=${($[0] * 100).toFixed(1)}% \u03A3Uy=${($[1] * 100).toFixed(1)}% \u03A3Rz=${($[5] * 100).toFixed(1)}%`;
      }
      (_m = $e.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (u) => {
        if (u.stopPropagation(), !(V == null ? void 0 : V.modeShapes)) return;
        ye = (ye - 1 + V.modeShapes.length) % V.modeShapes.length;
        const v = V.modeShapes[ye], { extent: M } = Gt();
        let $ = 0;
        for (let A = 0; A < Ae.length; A++) {
          const q = v[A * 6] || 0, b = v[A * 6 + 1] || 0, f = v[A * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(q * q + b * b + f * f));
        }
        Te = $ > 1e-12 ? M * 0.05 / $ : 1, ko(), m();
      }), (_n2 = $e.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (u) => {
        if (u.stopPropagation(), !(V == null ? void 0 : V.modeShapes)) return;
        ye = (ye + 1) % V.modeShapes.length;
        const v = V.modeShapes[ye], { extent: M } = Gt();
        let $ = 0;
        for (let A = 0; A < Ae.length; A++) {
          const q = v[A * 6] || 0, b = v[A * 6 + 1] || 0, f = v[A * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(q * q + b * b + f * f));
        }
        Te = $ > 1e-12 ? M * 0.05 / $ : 1, ko(), m();
      });
      const r = $e.querySelector("#cad3d-modal-scale");
      r == null ? void 0 : r.addEventListener("mousedown", (u) => u.stopPropagation()), r == null ? void 0 : r.addEventListener("change", () => {
        te && (V == null ? void 0 : V.modeShapes) && ko();
      });
      const i = $e.querySelector("#cad3d-cmd");
      i == null ? void 0 : i.addEventListener("mousedown", (u) => u.stopPropagation()), document.addEventListener("keydown", (u) => {
        var _a2;
        if ((u.ctrlKey || u.metaKey) && u.key === "z" && !u.shiftKey) {
          u.preventDefault(), es();
          return;
        }
        if ((u.ctrlKey || u.metaKey) && (u.key === "y" || u.key === "z" && u.shiftKey)) {
          u.preventDefault(), ts();
          return;
        }
        if ((u.key === "Delete" || u.key === "Backspace") && Qe.size > 0) {
          u.preventDefault(), Qe.forEach((v) => G.add(v)), Qe.clear(), Ot && (Ot.remove(), Ot = null), me();
          return;
        }
        if (u.key === "Escape") {
          if (Pt) if (tt !== null) {
            tt = null;
            const v = Je();
            mt && v && (v.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), bt && v && (v.scene.remove(bt), bt.geometry.dispose(), bt.material.dispose(), bt = null), v == null ? void 0 : v.render();
          } else _o();
          vt && Po(), zt && (zt = false, so(), (_a2 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.remove("inspect-active"));
        }
      }), i == null ? void 0 : i.addEventListener("keydown", (u) => {
        if (u.key === "Enter") {
          const v = i.value.trim();
          if (v) {
            try {
              const M = new Function("cad", `return ${v}`)(He);
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
      }), Be();
    }, 10);
    function Je() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Gt() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ke(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [r, i, h] of t) r < o && (o = r), r > s && (s = r), i < n && (n = i), i > d && (d = i), h < l && (l = h), h > a && (a = h);
      const c = new ke((o + s) / 2, (n + d) / 2, (l + a) / 2), m = Math.max(s - o, d - n, a - l, 1);
      return {
        center: c,
        extent: m
      };
    }
    function ut(t = false) {
      const o = Je();
      if (!o) return;
      const { extent: n } = Gt();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((h) => h.type === "GridHelper").forEach((h) => {
        var _a, _b;
        (_a = h.geometry) == null ? void 0 : _a.dispose(), (_b = h.material) == null ? void 0 : _b.dispose(), o.scene.remove(h);
      });
      const d = ea(), a = new ca(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((h) => h.type === "Group" && h.name !== "gridAxes" && h.name !== "loadsGroup" && (h.name === "viewerAxes" || h.children.some((S) => S instanceof No))).forEach((h) => {
        h.traverse((S) => {
          S.geometry && S.geometry.dispose(), S.material && (S.material.map && S.material.map.dispose(), S.material.dispose());
        }), o.scene.remove(h);
      });
      const m = 0.05 * l, r = new Sn();
      r.name = "viewerAxes";
      const i = d.axisArrow;
      r.add(new No(new ke(1, 0, 0), new ke(), 1, i, 0.2, 0.2)), r.add(new No(new ke(0, 1, 0), new ke(), 1, i, 0.2, 0.2)), r.add(new No(new ke(0, 0, 1), new ke(), 1, i, 0.2, 0.2)), r.children.forEach((h) => h.scale.set(m, m, m));
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
        const u = new En(x);
        u.needsUpdate = true;
        const v = new Ho(new Bo({
          map: u,
          depthTest: false,
          transparent: true
        }));
        v.position.set(w[0], w[1], w[2]), v.scale.set(0.4 * m, 0.4 * m, 1), v.renderOrder = 99, r.add(v);
      }
      o.scene.add(r), t ? o.render() : Vt("3d");
    }
    function Qn(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Vt(t) {
      var _a;
      const o = Je();
      if (!o) return;
      const { center: n, extent: l } = Gt(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
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
        if (t === "plan") o.renderer.clippingPlanes = [], m(new ke(n.x, n.y, n.z + l * 2), new ke(n.x, n.y, n.z), new ke(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), i = ((_a = ee.hPiso) == null ? void 0 : _a.val) ?? 3, h = (r + 1) * i, S = i * 0.45;
          o.renderer.clippingPlanes = [
            new Qt(new ke(0, 0, -1), h + S),
            new Qt(new ke(0, 0, 1), -h + S)
          ], a(), m(new ke(n.x, n.y, h + l * 2), new ke(n.x, n.y, h), new ke(0, 1, 0));
        } else if (t === "elevX") c.position.set(n.x + l * 2, n.y, n.z), c.up.set(0, 0, 1);
        else if (t === "elevY") c.position.set(n.x, n.y - l * 2, n.z), c.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), i = Ue[r] ?? n.x;
          if (Ve.length > 1) {
            const S = Qn(Ue, r, l);
            o.renderer.clippingPlanes = [
              new Qt(new ke(-1, 0, 0), i + S),
              new Qt(new ke(1, 0, 0), -i + S)
            ], a(), c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), i = Ve[r] ?? n.y;
          if (Ue.length > 1) {
            const S = Qn(Ve, r, l);
            o.renderer.clippingPlanes = [
              new Qt(new ke(0, -1, 0), i + S),
              new Qt(new ke(0, 1, 0), -i + S)
            ], a(), c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(c);
      }
    }
    function cn() {
      const t = $e.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ue.length < 2 && Ve.length < 2) {
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
          $e.querySelectorAll("[data-view]").forEach((h) => h.classList.remove("view-active")), i ? (Vt("3d"), (_a = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a.classList.add("view-active")) : (Vt(a), m.classList.add("view-active"));
        }), m;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ue.forEach((d, a) => {
        const c = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(c, `axisX:${a}`, `Eje ${c} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ve.forEach((d, a) => {
        const c = `${a + 1}`;
        t.appendChild(o(c, `axisY:${a}`, `Eje ${c} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function dn() {
      var _a;
      const t = $e.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a = ee.nPisos) == null ? void 0 : _a.val) ?? 0);
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
          $e.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), r ? (Vt("3d"), (_a2 = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Vt(d), c.classList.add("view-active"));
        }), c;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Fs() {
      Vt("3d"), $e.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    He.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Vt(t), $e.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let zt = false, vt = false, Pt = false, gt = "line", Mt = [], tt = null, mt = null, bt = null, uo = null, Et = null;
    const at = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, pn = 0.5;
    let fn = [], kt = null, no = null;
    const mo = [], Co = [], qs = 50;
    function bo() {
      mo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), mo.length > qs && mo.shift(), Co.length = 0;
    }
    function es() {
      if (mo.length === 0) return;
      Co.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = mo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Jt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function ts() {
      if (Co.length === 0) return;
      mo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Co.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Jt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Qe = /* @__PURE__ */ new Set();
    let yt = null, Xt = [], _t = null, Ot = null;
    function un(t) {
      const o = Je();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let c = 0; c < l.length; c++) {
        const m = n[l[c]], r = n[l[(c + 1) % l.length]];
        s.push(m[0], m[1], m[2], r[0], r[1], r[2]);
      }
      const d = new eo();
      d.setAttribute("position", new ao(s, 3));
      const a = new zo(d, new Lo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), Xt.push(a), o.render();
    }
    function Kt() {
      const t = Je();
      Xt.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Xt = [], t == null ? void 0 : t.render();
    }
    function Ut() {
      Ot && Ot.remove();
      const t = D.size > 0 || H;
      if (Qe.size === 0 && !t) {
        Ot = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Qe.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Ot = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Xs([
          ...Qe
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Qe.size === 1) {
          const n = [
            ...Qe
          ][0];
          rs(n);
        } else {
          const n = [
            ...Qe
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
        Qe.forEach((n) => D.add(n)), Qe.clear(), Kt(), Ut(), me();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        H = true, W.clear(), Qe.forEach((n) => W.add(n)), Qe.clear(), Kt(), Ut(), me();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        D.clear(), H = false, W.clear(), Ut(), me();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        bo(), Qe.forEach((n) => G.add(n)), Qe.clear(), Kt(), Ut(), me();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Qe.clear(), Kt(), Ut();
      });
    }
    function Po() {
      var _a;
      vt = false, Qe.clear(), Kt(), Ot && (Ot.remove(), Ot = null), (_a = $e.querySelector("#cad3d-select")) == null ? void 0 : _a.classList.remove("inspect-active");
      const o = Je();
      o && (o.controls.enabled = true);
    }
    function so() {
      if (yt) {
        const t = Je();
        t == null ? void 0 : t.scene.remove(yt), yt.geometry.dispose(), yt.material.dispose(), yt = null, t == null ? void 0 : t.render();
      }
      _t && (_t.remove(), _t = null);
    }
    function As(t) {
      mn();
      const o = Je();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      no = t;
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
        ]), m = new eo();
        m.setAttribute("position", new na(c, 3));
        const r = new wn({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), i = new zo(m, r);
        i.computeLineDistances(), i.renderOrder = 9990, o.scene.add(i), fn.push(i);
      }
      o.render();
    }
    function mn() {
      const t = Je();
      for (const o of fn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      fn = [], no = null, kt && (kt.remove(), kt = null);
    }
    function os(t, o, n, l) {
      kt || (kt = document.createElement("div"), kt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(kt));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, c = Math.sqrt(s * s + d * d + a * a), m = Math.abs(s), r = Math.abs(d), i = Math.abs(a);
      let h = "";
      m > r && m > i ? h = `\u0394X=${s.toFixed(2)}` : r > m && r > i ? h = `\u0394Y=${d.toFixed(2)}` : i > 0.01 && (h = `\u0394Z=${a.toFixed(2)}`), kt.textContent = `${c.toFixed(3)} m  ${h}`, kt.style.left = t + 20 + "px", kt.style.top = o - 10 + "px";
    }
    function Cs(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ke(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), c = 0.3, m = Math.abs(a.x), r = Math.abs(a.y), i = Math.abs(a.z);
      return r < c && i < c && m > 0.01 ? new ke(d.x, s.y, s.z) : m < c && i < c && r > 0.01 ? new ke(s.x, d.y, s.z) : m < c && r < c && i > 0.01 ? new ke(s.x, s.y, d.z) : null;
    }
    function _o() {
      var _a;
      const t = Je();
      mt && t && (t.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), bt && t && (t.scene.remove(bt), bt.geometry.dispose(), bt.material.dispose(), bt = null), mn(), tt = null, Et = null, Pt = false, uo && (uo.remove(), uo = null), (_a = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ps() {
      uo && uo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(gt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(gt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(gt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(gt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(at.node)}">Node</button>
      <button id="ds-grid" style="${n(at.grid)}">Grid</button>
      <button id="ds-mid" style="${n(at.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(at.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${pn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), uo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), c = t.querySelector("#dt-area");
        s && (s.style.cssText = o(gt === "line")), d && (d.style.cssText = o(gt === "arc")), a && (a.style.cssText = o(gt === "node")), c && (c.style.cssText = o(gt === "area"));
        const m = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), i = t.querySelector("#ds-mid"), h = t.querySelector("#ds-track");
        m && (m.style.cssText = n(at.node)), r && (r.style.cssText = n(at.grid)), i && (i.style.cssText = n(at.midpoint)), h && (h.style.cssText = n(at.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        gt = "line", tt = null, Et = null, Mt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        gt = "arc", tt = null, Et = null, Mt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        gt = "node", tt = null, Et = null, Mt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        gt = "area", tt = null, Et = null, Mt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        at.node = !at.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        at.grid = !at.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        at.midpoint = !at.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        at.track = !at.track, at.track || mn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        at.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => es()), t.querySelector("#dt-redo").addEventListener("click", () => ts());
    }
    function ns(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, c = new gs();
      c.setFromCamera(new xs(d, a), n);
      const m = e.nodes.val, r = e.elements.val, i = 0.12;
      if (at.node) {
        let w = -1, x = 1 / 0;
        for (let p = 0; p < m.length; p++) {
          const u = m[p], v = new ke(u[0], u[1], u[2]).project(n), M = Math.sqrt((v.x - d) ** 2 + (v.y - a) ** 2);
          M < i && M < x && (x = M, w = p);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new ke(...m[w]),
          snapType: "node"
        };
      }
      if (at.midpoint) {
        let w = 1 / 0, x = null;
        for (const p of r) {
          if (p.length !== 2) continue;
          const u = m[p[0]], v = m[p[1]], M = new ke((u[0] + v[0]) / 2, (u[1] + v[1]) / 2, (u[2] + v[2]) / 2), $ = M.clone().project(n), A = Math.sqrt(($.x - d) ** 2 + ($.y - a) ** 2);
          A < i * 0.8 && A < w && (w = A, x = M);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (at.grid) {
        const w = new Qt(new ke(0, 0, 1), 0), x = new ke();
        if (c.ray.intersectPlane(w, x)) {
          const p = at.gridSize || pn;
          return x.x = Math.round(x.x / p) * p, x.y = Math.round(x.y / p) * p, x.z = Math.round(x.z / p) * p, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const h = new Qt(new ke(0, 0, 1), 0), S = new ke();
      return c.ray.intersectPlane(h, S), {
        nodeIdx: null,
        worldPos: S,
        snapType: "free"
      };
    }
    function ss(t) {
      const o = Je();
      if (!o) return;
      const n = e.nodes.val;
      if (bt && (o.scene.remove(bt), bt.geometry.dispose(), bt.material.dispose(), bt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new sa(s * 2, s * 2, s * 2) : new aa(s, 12, 12), a = new la({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        bt = new ia(d, a), bt.position.copy(t.worldPos), bt.renderOrder = 9999, o.scene.add(bt);
      }
      if (mt && (o.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), tt !== null && t.worldPos) {
        const l = n[tt], s = new eo();
        if (gt === "arc" && Et !== null) {
          const a = n[Et], c = as(new ke(l[0], l[1], l[2]), new ke(a[0], a[1], a[2]), t.worldPos, 16), m = [];
          for (let r = 0; r < c.length - 1; r++) m.push(c[r].x, c[r].y, c[r].z, c[r + 1].x, c[r + 1].y, c[r + 1].z);
          s.setAttribute("position", new ao(m, 3));
        } else s.setAttribute("position", new ao([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Lo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        mt = new Ro(s, d), gt === "arc" && Et !== null && (mt = new zo(s, d)), mt.renderOrder = 9999, o.scene.add(mt);
      }
      o.render();
    }
    function as(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, c = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), m = (1 - a) * (1 - a), r = 2 * (1 - a) * a, i = a * a;
        s.push(new ke(m * t.x + r * c.x + i * n.x, m * t.y + r * c.y + i * n.y, m * t.z + r * c.z + i * n.z));
      }
      return s;
    }
    function bn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      bo();
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
      if (gt === "node") {
        if (!t.worldPos) return;
        bo();
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
      if (gt === "line") {
        const o = bn(t);
        if (o < 0) return;
        if (tt === null) {
          tt = o;
          return;
        }
        if (o === tt) return;
        bo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === tt && s[1] === o || s[1] === tt && s[0] === o)) || (n.push([
          tt,
          o
        ]), e.elements.val = n, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), tt = o;
        return;
      }
      if (gt === "arc") {
        const o = bn(t);
        if (o < 0) return;
        if (tt === null) {
          tt = o;
          return;
        }
        if (Et === null) {
          if (o === tt) return;
          Et = o;
          return;
        }
        if (o === tt || o === Et) return;
        const n = e.nodes.val, l = new ke(...n[tt]), s = new ke(...n[Et]), d = new ke(...n[o]), a = Math.max(4, Math.round(((_a = ee.nSubViga) == null ? void 0 : _a.val) ?? 8)), c = as(l, s, d, a);
        bo();
        const m = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let i = tt;
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
        e.nodes.val = m, e.elements.val = r, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, tt = o, Et = null;
        return;
      }
      if (gt === "area") {
        const o = bn(t);
        if (o < 0) return;
        if (Mt.length >= 3 && o === Mt[0]) {
          bo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = Mt.map((d) => n[d]);
          try {
            const d = jt({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (c, m) => m),
              maxMeshSize: pn || 0.5
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
            e.nodes.val = n, e.elements.val = l, Jt(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Mt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Mt = [];
          return;
        }
        if (Mt.push(o), console.log(`Area vertex ${Mt.length}: node ${o}`), Mt.length >= 2) {
          const n = Mt[Mt.length - 2], l = e.nodes.val, s = Je();
          if (s) {
            const d = new eo().setFromPoints([
              new ke(...l[n]),
              new ke(...l[o])
            ]), a = new zo(d, new Lo({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function ls(t) {
      const o = Je();
      if (!o) return;
      yt && (o.scene.remove(yt), yt.geometry.dispose(), yt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const c = n[l[a]], m = n[l[(a + 1) % l.length]];
        s.push(c[0], c[1], c[2], m[0], m[1], m[2]);
      }
      const d = new eo();
      d.setAttribute("position", new ao(s, 3)), yt = new zo(d, new Lo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), yt.renderOrder = 9999, o.scene.add(yt), o.render();
    }
    function hn(t) {
      const o = Je();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new xs((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new gs();
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
          const w = new ke(...d[S[0]]), x = new ke(...d[S[1]]), p = new ra(w, x), u = new ke(), v = new ke();
          r.closestPointToPoint(p.getCenter(new ke()), u), p.closestPointToPoint(u, true, v);
          const M = u.distanceTo(v);
          M < c && (c = M, m = h);
        } else if (S.length === 3) {
          const w = new ke(...d[S[0]]), x = new ke(...d[S[1]]), p = new ke(...d[S[2]]), u = new ke();
          if (r.intersectTriangle(w, x, p, false, u)) {
            const M = r.origin.distanceTo(u);
            M < c && (c = M, m = h);
          } else {
            const M = w.add(x).add(p).divideScalar(3), $ = new ke();
            r.closestPointToPoint(M, $);
            const A = $.distanceTo(M);
            A < c && (c = A, m = h);
          }
        } else if (S.length === 4) {
          const w = new ke(...d[S[0]]), x = new ke(...d[S[1]]), p = new ke(...d[S[2]]), u = new ke(...d[S[3]]), v = new ke();
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
      const { extent: i } = Gt();
      return c < i * 0.1 ? m : -1;
    }
    function U(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function gn(t, o, n = 12) {
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
    function Os(t, o, n, l, s, d, a) {
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
        const n = Wt(t[1], t[0]), l = ro(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
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
    function Ns() {
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
      <div>\u03C3 = ${we("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${we(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function xn(t, o) {
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
    function is() {
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
      let q = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      q += '<table><tr><td class="hdr"></td>';
      for (const b of $) q += `<td class="hdr">${b}</td>`;
      q += "</tr>";
      for (let b = 0; b < 12; b++) {
        q += `<tr><td class="hdr">${M[b]}</td>`;
        for (let f = 0; f < 12; f++) if (f < b) q += `<td style="color:var(--fem-border-cell)">${f === 0 && b > 0 ? v : ""}</td>`;
        else {
          const y = A[b][f], k = (b === f ? "diag " : "") + (y !== "0" ? "nz" : "");
          q += `<td class="${k}">${y}</td>`;
        }
        q += "</tr>";
      }
      return q += "</table>", q;
    }
    function Ds(t, o, n, l, s, d, a) {
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
    function vn(t, o, n, l) {
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
    function rs(t) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      _t && _t.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((b) => o[b]), d = l.length === 2, a = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, c = (_b = e.deformOutputs) == null ? void 0 : _b.val, m = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const b = ro(Wt(s[1], s[0])), f = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, y = ((_e = a.areas) == null ? void 0 : _e.get(t)) ?? 0, k = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, I = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, O = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, F = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${U(b)}${U(f)}${U(y)}${U(k)}${U(I)}${U(O)}${U(F)}`;
      } else {
        const b = ((_j = a.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = a.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, y = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${U(b)}${U(f)}${U(y)}`;
      }
      let r = "", i = "", h = "", S = "", w = "", x = "", p = "", u = "", v = null, M = null, $ = null, A = [];
      try {
        if (v = Go(s, a, t), M = Vo(s), $ = Lt(Tn(M), Lt(v, M)), A = d ? [
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
          const k = ro(Wt(s[1], s[0])), I = ((_m = a.elasticities) == null ? void 0 : _m.get(t)) ?? 0, O = ((_n2 = a.areas) == null ? void 0 : _n2.get(t)) ?? 0, F = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, T = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = a.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, _ = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          S = Os(I, O, F, T, P, _, k);
        }
        w = Rs(s), x = Ns(), p = Hs(l), u = Bs(d);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', y = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        r = `<div class="matrix-label">k_local (${v.length}\xD7${v.length}) ${b}</div>${gn(v, A)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${M.length}\xD7${M.length}) ${f}</div>${gn(M, A)}`, h = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${y}</div>${gn($, A)}`;
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
          const k = ((_a2 = c.deformations) == null ? void 0 : _a2.get(f)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], I = b.map((O, F) => `<span class="prop-key">${O}</span>: <span class="${Math.abs(k[F]) > 1e-10 ? "result-val" : ""}">${U(k[F])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${f}:</strong> ${I}</div>`;
        }).join("");
      }
      if (m && d && (c == null ? void 0 : c.deformations) && v && M) {
        const b = (_s2 = m.normals) == null ? void 0 : _s2.get(t), f = (_t2 = m.shearsY) == null ? void 0 : _t2.get(t), y = (_u = m.shearsZ) == null ? void 0 : _u.get(t), k = (_v = m.torsions) == null ? void 0 : _v.get(t), I = (_w = m.bendingsY) == null ? void 0 : _w.get(t), O = (_x = m.bendingsZ) == null ? void 0 : _x.get(t), F = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], T = [];
        for (const oe of l) {
          const Z = ((_y = c.deformations) == null ? void 0 : _y.get(oe)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          T.push(...Z);
        }
        let P = [];
        try {
          P = Lt(M, T);
        } catch {
          P = new Array(12).fill(0);
        }
        let _ = [];
        try {
          _ = Lt(v, P);
        } catch {
          _ = new Array(12).fill(0);
        }
        const ne = (oe, Z) => oe.map((le, Se) => `<span style="color:${Math.abs(le) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Z[Se % 6]}=${U(le)}</span>`).join(", "), re = [
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
        `${C("u", "global")}${l.map((oe, Z) => `<span style="color:var(--fem-label)">nodo ${oe}:</span> ${F.map((le, Se) => `<span style="color:${Math.abs(T[Z * 6 + Se]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${U(T[Z * 6 + Se])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${ne(P, [
          ...F,
          ...F
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${_.map((oe, Z) => `<span style="color:${Math.abs(oe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${re[Z]}=${U(oe)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${U(_[0])}${C("P", "7")}${C("N", "j")}${U(_[6])}${C("P", "2")}${C("V", "y,i")}${U(_[1])}${C("P", "8")}${C("V", "y,j")}${U(_[7])}${C("P", "3")}${C("V", "z,i")}${U(_[2])}${C("P", "9")}${C("V", "z,j")}${U(_[8])}${C("P", "4")}${C("M", "x,i")}${U(_[3])}${C("P", "10")}${C("M", "x,j")}${U(_[9])}${C("P", "5")}${C("M", "y,i")}${U(_[4])}${C("P", "11")}${C("M", "y,j")}${U(_[10])}${C("P", "6")}${C("M", "z,i")}${U(_[5])}${C("P", "12")}${C("M", "z,j")}${U(_[11])}${b ? b.map((oe) => U(oe)).join(", ") : "\u2014"}${f ? f.map((oe) => U(oe)).join(", ") : "\u2014"}${y ? y.map((oe) => U(oe)).join(", ") : "\u2014"}${k ? k.map((oe) => U(oe)).join(", ") : "\u2014"}${I ? I.map((oe) => U(oe)).join(", ") : "\u2014"}${O ? O.map((oe) => U(oe)).join(", ") : "\u2014"}`;
      } else if (m && d) {
        const b = (_z = m.normals) == null ? void 0 : _z.get(t), f = (_A = m.shearsY) == null ? void 0 : _A.get(t), y = (_B = m.shearsZ) == null ? void 0 : _B.get(t), k = (_C = m.torsions) == null ? void 0 : _C.get(t), I = (_D = m.bendingsY) == null ? void 0 : _D.get(t), O = (_E = m.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((F) => U(F)).join(", ") : "\u2014"}${f ? f.map((F) => U(F)).join(", ") : "\u2014"}${y ? y.map((F) => U(F)).join(", ") : "\u2014"}${k ? k.map((F) => U(F)).join(", ") : "\u2014"}${I ? I.map((F) => U(F)).join(", ") : "\u2014"}${O ? O.map((F) => U(F)).join(", ") : "\u2014"}`;
      } else if (m && !d) {
        const b = (_F = m.bendingXX) == null ? void 0 : _F.get(t), f = (_G = m.bendingYY) == null ? void 0 : _G.get(t), y = (_H = m.bendingXY) == null ? void 0 : _H.get(t), k = (_I = m.membraneXX) == null ? void 0 : _I.get(t), I = (_J = m.membraneYY) == null ? void 0 : _J.get(t), O = (_K = m.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((F) => U(F)).join(", ") : "\u2014"}${f ? f.map((F) => U(F)).join(", ") : "\u2014"}${y ? y.map((F) => U(F)).join(", ") : "\u2014"}${k ? k.map((F) => U(F)).join(", ") : "\u2014"}${I ? I.map((F) => U(F)).join(", ") : "\u2014"}${O ? O.map((F) => U(F)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, _t = Ma(t, o, n, a, c, m), _t.id = "fem-inspect-panel", document.body.appendChild(_t), (_L = _t.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => so());
      const q = d ? (() => {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        const b = ro(Wt(s[1], s[0])), f = ((_a2 = a.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, y = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, k = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, I = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, O = ((_e2 = a.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, F = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Ds(f, y, k, I, O, F, b);
      })() : void 0;
      _t.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const y = b.dataset.full;
          if (y === "kLocal" && v) {
            const k = d ? is() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            vn(`Elemento ${t} \u2014 Rigidez Local k_local`, k, xn(v, A), q);
          } else if (y === "T" && M) vn(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, xn(M, A));
          else if (y === "kGlobal" && $) {
            const k = d ? is() : "<em>Shell 18\xD718</em>";
            vn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, k, xn($, A), q);
          }
        });
      });
    }
    function cs() {
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
        const x = It(l, s, {
          supports: d,
          loads: c
        }, w);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function ds() {
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
        const w = It(l, s, {
          supports: d,
          loads: a
        }, S);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ps() {
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
        const p = It(d, a, {
          supports: i,
          loads: h
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function fs() {
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
        const u = It(d, a, {
          supports: m,
          loads: r
        }, p);
        u && e.deformOutputs && (e.deformOutputs.val = u);
      } catch (u) {
        console.warn("Twisted:", u.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function us() {
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
        const p = It(s, d, {
          supports: a,
          loads: m
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function ms() {
      const t = [], o = [];
      for (let h = 0; h < 3; h++) {
        const S = h * 12, w = 15 - h * 2, x = 20 - h * 3, p = 8 - h, u = t.length;
        for (let M = 0; M <= 4; M++) {
          const $ = M / 4, A = -p / 2 + p * $, q = x * (1 - $ * $ * 0.3);
          for (let b = 0; b <= 12; b++) {
            const f = b / 12, y = S + q * f, k = w * Math.sin(Math.PI * f) * (1 - $ * $ * 0.5), I = A;
            t.push([
              y,
              I,
              k
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
        const h = It(t, o, {
          supports: s,
          loads: d
        }, i);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Opera:", h.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function bs() {
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
        const x = It(l, s, {
          supports: a,
          loads: c
        }, w);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => ut(), 50), Be(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
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
            const { cyclicPushover: M } = await import("./cyclicPushoverCpp-DZAQImEK.js").then(async (m2) => {
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
    let Io = null;
    function Js() {
      if (Io) {
        Io.remove(), Io = null;
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
    `, document.body.appendChild(t), Io = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), Io = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Gs(t));
    }
    function Gs(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), c = 100, m = [];
      for (let ae = 0; ae < a; ae++) {
        const re = d * (1 + ae * 0.5);
        for (let oe = 0; oe < c; oe++) {
          const Z = oe / c * 2 * Math.PI;
          m.push(re * Math.sin(Z));
        }
      }
      const r = o / n, i = l * n;
      let h = 0, S = 0, w = -r, x = r, p = 0, u = 0, v = 0, M = 0, $ = 0, A = 0;
      const q = [];
      for (const ae of m) {
        let re = w, oe = x, Z = p, le = u, Se = v, _e = M, Ce = $, ie = A, he;
        const Ee = ae - h;
        if (Math.abs(Ee) < 1e-20) {
          q.push(S);
          continue;
        }
        if ((ie === 0 || ie === 3) && (Ee < 0 ? (ie = 2, le = -r, Se = -o, Z = le, _e = 0, Ce = 0) : (ie = 1, le = r, Se = o, Z = le, _e = 0, Ce = 0)), ie === 2 && Ee > 0) {
          ie = 1, _e = h, Ce = S, h < re && (re = h);
          const Ie = (oe - re) / (2 * 1 * r), Oe = 1 + 0 * Math.pow(Ie, 0.8);
          le = (o * Oe - i * r * Oe - Ce + n * _e) / (n - i), Se = o * Oe + i * (le - r * Oe), Z = oe;
        } else if (ie === 1 && Ee < 0) {
          ie = 2, _e = h, Ce = S, h > oe && (oe = h);
          const Ie = (oe - re) / (2 * 1 * r), Oe = 1 + 0 * Math.pow(Ie, 0.8);
          le = (-o * Oe + i * r * Oe - Ce + n * _e) / (n - i), Se = -o * Oe + i * (le + r * Oe), Z = re;
        }
        const pe = Math.abs((Z - le) / r);
        let Fe = s - 0.925 * pe / (0.15 + pe);
        Fe < 0.1 && (Fe = 0.1);
        const Pe = (ae - _e) / (le - _e), Ge = 1 + Math.pow(Math.abs(Pe), Fe), se = Math.pow(Ge, 1 / Fe);
        he = l * Pe + (1 - l) * Pe / se, he = he * (Se - Ce) + Ce, q.push(he), h = ae, S = he, w = re, x = oe, p = Z, u = le, v = Se, M = _e, $ = Ce, A = ie;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), y = b.width, k = b.height;
      f.clearRect(0, 0, y, k);
      const I = Math.max(...m.map(Math.abs)), O = Math.max(...q.map(Math.abs)), F = (y - 40) / (2 * I), T = (k - 40) / (2 * O), P = y / 2, _ = k / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, _), f.lineTo(y - 20, _), f.stroke(), f.beginPath(), f.moveTo(P, 20), f.lineTo(P, k - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", y - 40, _ - 5), f.fillText("\u03C3 (stress)", P + 30, 15), f.fillText(`\xB1${(I * 100).toFixed(1)}%`, y - 30, _ + 12), f.fillText(`\xB1${(O / 1e3).toFixed(0)} MPa`, P + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let ae = 0; ae < m.length; ae++) {
        const re = P + m[ae] * F, oe = _ - q[ae] * T;
        ae === 0 ? f.moveTo(re, oe) : f.lineTo(re, oe);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, _ - o * T), f.lineTo(y - 20, _ - o * T), f.stroke(), f.beginPath(), f.moveTo(20, _ + o * T), f.lineTo(y - 20, _ + o * T), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, y - 50, _ - o * T - 5);
      const ne = t.querySelector("#nl-info");
      ne.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
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
    let ho = null;
    function Xs(t) {
      ho && ho.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = jo(), l = Wo(), s = Object.entries(n).map(([r, i]) => `<option value="${i}">${r}</option>`).join(""), d = Object.entries(l).map(([r, i]) => `<option value="${i}">${r}</option>`).join("");
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
    `, document.body.appendChild(o), ho = o;
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
        o.remove(), ho = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const r = a.value, i = {
          secType: r
        };
        r === "rect" ? (i.b = parseFloat(o.querySelector("#ap-b").value), i.h = parseFloat(o.querySelector("#ap-h").value), i.material = 0) : r === "circ" ? (i.b = parseFloat(o.querySelector("#ap-d").value), i.material = 0) : r === "W" || r === "HSS" ? (i.profileIdx = parseInt(o.querySelector("#ap-profile").value), i.material = 1) : r === "I-param" ? (i.bf = parseFloat(o.querySelector("#ap-bf").value), i.hf = parseFloat(o.querySelector("#ap-hf").value), i.tf = parseFloat(o.querySelector("#ap-tf").value), i.tw = parseFloat(o.querySelector("#ap-tw").value), i.material = 1) : r === "tubular" && (i.bc = parseFloat(o.querySelector("#ap-bc").value), i.hc = parseFloat(o.querySelector("#ap-hc").value), i.t = parseFloat(o.querySelector("#ap-t").value), i.material = 1), i.releaseRotStart = (_a = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a.checked, i.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, i.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, i.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, i.modI = parseFloat((_e = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e.value) || 1, i.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, i.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, i.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, i.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, i.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, i.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, i.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((h) => xe.set(h, {
          ...i
        })), o.remove(), ho = null, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => xe.delete(r)), o.remove(), ho = null, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let go = null;
    function Ks(t) {
      var _a, _b, _c;
      go && go.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), c = Math.abs(s[2] - l[2]), m = a > d && a > c, r = Math.sqrt(d * d + a * a + c * c), i = Le.get(t) ?? 0, h = (_c = (_b = (_a = e.elementInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), S = (h == null ? void 0 : h.name) || (h ? `${h.type} ${((h.b ?? 0) * 100).toFixed(0)}x${((h.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
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
    `, document.body.appendChild(w), go = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), go = null, so();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        G.add(t), w.remove(), go = null, so(), me();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), go = null, rs(t);
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
        const r = Je();
        if (!r) return null;
        const i = r.controls.object, h = new ke(m[0], m[1], m[2]);
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
        const v = (M, $, A, q, b, f, y, k) => {
          const I = (A - M) * (k - f) - (q - $) * (y - b);
          if (Math.abs(I) < 1e-10) return false;
          const O = ((b - M) * (k - f) - (f - $) * (y - b)) / I, F = ((b - M) * (q - $) - (f - $) * (A - M)) / I;
          return O >= 0 && O <= 1 && F >= 0 && F <= 1;
        };
        return v(m, r, i, h, S, w, x, w) || v(m, r, i, h, x, w, x, p) || v(m, r, i, h, S, p, x, p) || v(m, r, i, h, S, w, S, p);
      }
      o.addEventListener("mousedown", (m) => {
        vt && (n = {
          x: m.offsetX,
          y: m.offsetY
        });
      }), o.addEventListener("mousemove", (m) => {
        if (Pt) {
          const i = Je();
          if (!i) return;
          const h = ns(m.clientX, m.clientY, i.camera, i.rendererElm);
          if (at.track && h.snapType === "node" && h.nodeIdx !== null && h.nodeIdx !== no && As(h.nodeIdx), at.track && no !== null && h.worldPos && h.snapType !== "node") {
            const S = Cs(h.worldPos, no);
            S && (h.worldPos = S, h.snapType = "grid");
          }
          if (no !== null && h.worldPos) {
            const S = e.nodes.val[no];
            S && os(m.clientX, m.clientY, new ke(...S), h.worldPos);
          } else if (tt !== null && h.worldPos) {
            const S = e.nodes.val[tt];
            S && os(m.clientX, m.clientY, new ke(...S), h.worldPos);
          } else kt && (kt.remove(), kt = null);
          h.nodeIdx, ss(h), o.style.cursor = h.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!zt && !vt) return;
        if (vt && n) {
          const i = m.offsetX - n.x, h = m.offsetY - n.y;
          if (Math.abs(i) > s || Math.abs(h) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const S = i > 0, w = Math.min(n.x, m.offsetX), x = Math.min(n.y, m.offsetY), p = Math.abs(i), u = Math.abs(h);
            l.style.left = w + "px", l.style.top = x + "px", l.style.width = p + "px", l.style.height = u + "px", l.style.border = S ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = S ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = hn(m);
        if (r >= 0) ls(r), o.style.cursor = "pointer";
        else {
          if (yt) {
            const i = Je();
            i == null ? void 0 : i.scene.remove(yt), yt = null, i == null ? void 0 : i.render();
          }
          o.style.cursor = vt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (m) => {
        if (vt && n) {
          const r = m.offsetX - n.x, i = m.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(i) > s) {
            const h = r > 0, S = a(n.x, n.y, m.offsetX, m.offsetY, h);
            m.ctrlKey || m.metaKey || (Qe.clear(), Kt()), S.forEach((x) => {
              Qe.has(x) || (Qe.add(x), un(x));
            }), Ut();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (m) => {
        if (Pt) {
          const r = Je();
          if (!r) return;
          const i = ns(m.clientX, m.clientY, r.camera, r.rendererElm);
          (i.worldPos || i.nodeIdx !== null) && (_s(i), ss(i));
          return;
        }
        if (vt) {
          if (l) return;
          const r = hn(m), i = m.ctrlKey || m.metaKey;
          if (r >= 0) {
            if (i) if (Qe.has(r)) {
              Qe.delete(r);
              const h = Xt.findIndex((S) => S.__elemIdx === r);
              if (h >= 0) {
                const S = Je();
                S == null ? void 0 : S.scene.remove(Xt[h]), Xt[h].geometry.dispose(), Xt[h].material.dispose(), Xt.splice(h, 1), S == null ? void 0 : S.render();
              }
            } else Qe.add(r), un(r);
            else Qe.clear(), Kt(), Qe.add(r), un(r);
            Ut();
          } else i || (Qe.clear(), Kt(), Ut());
          return;
        }
        if (zt) {
          const r = hn(m);
          r >= 0 && (ls(r), Ks(r));
        }
      });
    }, 500), yo.derive(() => {
      var _a;
      e.nodes.val, e.elements.val, (_a = e.nodeInputs) == null ? void 0 : _a.val, Be();
    }), He.modal = (t) => {
      var _a, _b;
      if (t === void 0 && (t = !te), te = t, (_a = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", te), te) {
        const n = Je();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Xe = n.settings.loads.rawVal, n.settings.loads.val = false), nn(), $e.querySelector("#cad3d-mode-prev").style.display = "", $e.querySelector("#cad3d-mode-next").style.display = "", $e.querySelector("#cad3d-mode-label").style.display = "";
      } else sn(), $e.querySelector("#cad3d-mode-prev").style.display = "none", $e.querySelector("#cad3d-mode-next").style.display = "none", $e.querySelector("#cad3d-mode-label").style.display = "none", E && E !== "placa-q4" && E !== "placa-3q" && me(), setTimeout(() => {
        var _a2;
        const n = Je();
        ((_a2 = n == null ? void 0 : n.settings) == null ? void 0 : _a2.loads) && Xe && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${te ? "ON" : "OFF"}`);
    }, He.setMode = (t) => {
      var _a;
      if (!(V == null ? void 0 : V.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ye = Math.max(0, Math.min(t, V.modeShapes.length - 1));
      const o = V.modeShapes[ye], { extent: n } = Gt();
      let l = 0;
      for (let d = 0; d < Ae.length; d++) {
        const a = o[d * 6] || 0, c = o[d * 6 + 1] || 0, m = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + c * c + m * m));
      }
      Te = l > 1e-12 ? n * 0.05 / l : 1, ko();
      const s = $e.querySelector("#cad3d-mode-label");
      s && V.frequencies && (s.textContent = `Modo ${ye + 1} \u2014 ${V.frequencies[ye].toFixed(2)} Hz`), console.log(`Modo ${ye + 1}: f = ${(_a = V.frequencies) == null ? void 0 : _a[ye].toFixed(4)} Hz`);
    }, window.cad = He, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild($e), document.body.appendChild(Ke.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (je("edificio"), me(), Zn("edificio"));
    }, 100), document.body.appendChild(Ia());
    const hs = document.createElement("span");
    return hs.style.display = "none", hs;
  };
});
export {
  __tla,
  $s as a,
  ba as c,
  Da as g
};
