const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { _ as ra, p as Fn, m as ca, d as Bt, s as da, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Fo, P as Bo, g as pa, a as fa, o as ua } from "./theme-CzzIlc4y.js";
import { V as Se, P as po, R as zs, b as Ls, B as jt, c as ma, d as Lo, e as To, f as ba, S as ha, M as ga, g as xa, F as ho, a as Ao, L as go, h as va, G as ya, A as Jo, i as Vo, T as qn, j as Xo, k as Ko, C as $a, l as wa } from "./Text-Cin90tvN.js";
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
  ], qo = [
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
  function Ma(t, g) {
    return t === "kN" && g === "m" ? "kPa" : t === "kN" && g === "mm" || t === "N" && g === "mm" ? "MPa" : t === "N" && g === "m" ? "Pa" : t === "kip" && g === "in" ? "ksi" : t === "kip" && g === "ft" ? "ksf" : `${t}/${g}\xB2`;
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
  function vo(t, g) {
    const R = Rn.find((D) => D.id === t), z = qo.find((D) => D.id === g), G = R.toKN, _ = z.toM, V = (D, be, L) => L / (Math.pow(G, D) * Math.pow(_, be));
    let W, j;
    switch (t) {
      case "kN":
        W = 10, j = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        W = 1, j = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        W = 1e3, j = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        W = 10, j = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        W = 5e3, j = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        W = 1e4, j = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${t}-${g}`,
      label: `${R.label}, ${z.label}`,
      force: R.label,
      length: z.label,
      stress: Ma(t, g),
      moment: `${R.label}\xB7${z.label}`,
      E: V(1, -2, xo.E),
      G: V(1, -2, xo.G),
      A: V(0, 2, xo.A),
      Iz: V(0, 4, xo.Iz),
      Iy: V(0, 4, xo.Iy),
      J: V(0, 4, xo.J),
      rho: V(1, -4, xo.rho),
      spanRange: z.spanRange,
      heightRange: z.heightRange,
      defaultSpan: z.defaultSpan,
      defaultHeight: z.defaultHeight,
      defaultForce: W,
      forceRange: j,
      galponSpan: z.galponSpan,
      galponLength: z.galponLength,
      galponHeight: z.galponHeight,
      galponRise: z.galponRise
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
  function Sa(t) {
    return {
      truss: [
        {
          key: "span",
          val: t.defaultSpan,
          min: t.spanRange[0],
          max: t.spanRange[1],
          step: t.spanRange[2],
          label: `Luz (${t.length})`
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
          val: t.defaultHeight * 0.5,
          min: t.heightRange[0] * 0.3,
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `Altura (${t.length})`
        }
      ],
      beams: [
        {
          key: "width",
          val: t.defaultSpan,
          min: t.spanRange[0],
          max: t.spanRange[1],
          step: t.spanRange[2],
          label: `Luz (${t.length})`
        },
        {
          key: "height",
          val: t.defaultHeight,
          min: t.heightRange[0],
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `Altura (${t.length})`
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
          val: t.defaultSpan,
          min: t.spanRange[0],
          max: t.spanRange[1],
          step: t.spanRange[2],
          label: `Dx (${t.length})`
        },
        {
          key: "dy",
          val: t.defaultSpan * 0.8,
          min: t.spanRange[0],
          max: t.spanRange[1],
          step: t.spanRange[2],
          label: `Dy (${t.length})`
        },
        {
          key: "dz",
          val: t.defaultHeight,
          min: t.heightRange[0],
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `Dz (${t.length})`
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
          val: t.defaultSpan,
          min: t.spanRange[0],
          max: t.spanRange[1],
          step: t.spanRange[2],
          label: `Luz vano (${t.length})`
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
          val: t.defaultHeight,
          min: t.heightRange[0],
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `h piso (${t.length})`
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
          val: t.defaultHeight,
          min: t.heightRange[0],
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `h piso (${t.length})`
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
          max: t.spanRange[1] * 0.5,
          step: t.spanRange[2],
          label: `Lvix (${t.length})`
        },
        {
          key: "Lvdx",
          val: 0,
          min: 0,
          max: t.spanRange[1] * 0.5,
          step: t.spanRange[2],
          label: `Lvdx (${t.length})`
        },
        {
          key: "Lviy",
          val: 0,
          min: 0,
          max: t.spanRange[1] * 0.5,
          step: t.spanRange[2],
          label: `Lviy (${t.length})`
        },
        {
          key: "Lvdy",
          val: 0,
          min: 0,
          max: t.spanRange[1] * 0.5,
          step: t.spanRange[2],
          label: `Lvdy (${t.length})`
        }
      ],
      galpon: [
        {
          key: "span",
          val: t.galponSpan,
          min: t.spanRange[0],
          max: t.spanRange[1] * 3,
          step: t.spanRange[2],
          label: `Luz (${t.length})`
        },
        {
          key: "length",
          val: t.galponLength,
          min: t.spanRange[0],
          max: t.spanRange[1] * 4,
          step: t.spanRange[2],
          label: `Largo (${t.length})`
        },
        {
          key: "height",
          val: t.galponHeight,
          min: t.heightRange[0],
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `Altura col (${t.length})`
        },
        {
          key: "archRise",
          val: t.galponRise,
          min: t.heightRange[2],
          max: t.heightRange[1],
          step: t.heightRange[2],
          label: `Flecha arco (${t.length})`
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
          val: t.defaultSpan,
          min: t.spanRange[0],
          max: t.spanRange[1],
          step: t.spanRange[2],
          label: `L total (${t.length})`
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
          val: t.defaultForce * 10,
          min: t.forceRange[0],
          max: t.forceRange[1] * 10,
          step: Math.abs(t.forceRange[2]) * 10,
          label: `F axial (${t.force})`
        }
      ],
      "placa-3q": [
        {
          key: "Lx",
          val: 15,
          min: 2,
          max: 30,
          step: 1,
          label: `Lx (${t.length})`
        },
        {
          key: "Ly",
          val: 10,
          min: 2,
          max: 30,
          step: 1,
          label: `Ly (${t.length})`
        },
        {
          key: "meshSize",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `Mesh size (${t.length})`
        },
        {
          key: "t",
          val: 1,
          min: 0.05,
          max: 5,
          step: 0.05,
          label: `t (${t.length})`
        },
        {
          key: "E",
          val: t.E * 3e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `q (${t.force}/${t.length}\xB2)`
        }
      ],
      "placa-q4": [
        {
          key: "Lx",
          val: 10,
          min: 1,
          max: 30,
          step: 1,
          label: `Lx (${t.length})`
        },
        {
          key: "Ly",
          val: 10,
          min: 1,
          max: 30,
          step: 1,
          label: `Ly (${t.length})`
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
          label: `t (${t.length})`
        },
        {
          key: "E",
          val: t.E * 3e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `q (${t.force}/${t.length}\xB2)`
        }
      ],
      "losa-rect": [
        {
          key: "a",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `a (${t.length})`
        },
        {
          key: "b",
          val: 4,
          min: 1,
          max: 20,
          step: 0.5,
          label: `b (${t.length})`
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
          label: `t (${t.length})`
        },
        {
          key: "E",
          val: t.E * 35e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `q (${t.force}/${t.length}\xB2)`
        }
      ],
      "losa-plana": [
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${t.length})`
        },
        {
          key: "meshSize",
          val: 0.6,
          min: 0.3,
          max: 2,
          step: 0.1,
          label: `Mesh (${t.length})`
        },
        {
          key: "E",
          val: t.E * 35e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `q (${t.force}/${t.length}\xB2)`
        }
      ],
      "viga-alta": [
        {
          key: "L",
          val: 4,
          min: 1,
          max: 20,
          step: 0.5,
          label: `L (${t.length})`
        },
        {
          key: "H",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `H (${t.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Mesh (${t.length})`
        },
        {
          key: "t",
          val: 0.1,
          min: 0.05,
          max: 1,
          step: 0.01,
          label: `t (${t.length})`
        },
        {
          key: "E",
          val: t.E * 2e7 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `q (${t.force}/${t.length})`
        },
        {
          key: "b",
          val: 0.8,
          min: 0.2,
          max: 4,
          step: 0.1,
          label: `Ancho carga (${t.length})`
        }
      ],
      "muro-contencion": [
        {
          key: "H",
          val: 4,
          min: 1,
          max: 10,
          step: 0.5,
          label: `H (${t.length})`
        },
        {
          key: "B",
          val: 3,
          min: 1,
          max: 8,
          step: 0.5,
          label: `B base (${t.length})`
        },
        {
          key: "tw",
          val: 0.3,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `t muro (${t.length})`
        },
        {
          key: "tb",
          val: 0.4,
          min: 0.1,
          max: 1,
          step: 0.05,
          label: `t base (${t.length})`
        },
        {
          key: "meshSize",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Mesh (${t.length})`
        },
        {
          key: "E",
          val: t.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E concreto (${t.stress})`
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
          label: `gamma suelo (${t.force}/${t.length}\xB3)`
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
          label: `q sobrecarga (${t.stress})`
        },
        {
          key: "Es",
          val: 5e4,
          min: 100,
          max: 1e6,
          step: 1e3,
          label: `E suelo (${t.stress})`
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
          label: `kn interfaz (${t.force}/${t.length}\xB3)`
        },
        {
          key: "ks",
          val: 1e4,
          min: 100,
          max: 1e7,
          step: 1e3,
          label: `ks interfaz (${t.force}/${t.length}\xB3)`
        },
        {
          key: "gammaW",
          val: 9.81,
          min: 5,
          max: 15,
          step: 0.1,
          label: `gamma agua (${t.force}/${t.length}\xB3)`
        },
        {
          key: "Hw",
          val: 3.5,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `H agua (${t.length})`
        }
      ],
      zapata: [
        {
          key: "Lx",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Lx zapata (${t.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Ly zapata (${t.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `t zapata (${t.length})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.15,
          max: 1.5,
          step: 0.05,
          label: `a columna (${t.length})`
        },
        {
          key: "colH",
          val: 1.5,
          min: 0.5,
          max: 5,
          step: 0.5,
          label: `h pedestal (${t.length})`
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
          val: t.E * 25e6 / 2e8,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `P axial (${t.force})`
        },
        {
          key: "Mx",
          val: 0,
          min: -500,
          max: 500,
          step: 10,
          label: `Mx (${t.force}\xB7${t.length})`
        },
        {
          key: "My",
          val: 0,
          min: -500,
          max: 500,
          step: 10,
          label: `My (${t.force}\xB7${t.length})`
        },
        {
          key: "ks",
          val: 2e4,
          min: 1e3,
          max: 2e5,
          step: 1e3,
          label: `ks (${t.force}/${t.length}\xB3)`
        }
      ],
      "placa-orificios": [
        {
          key: "Lx",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `Placa Lx (${t.length})`
        },
        {
          key: "Ly",
          val: 0.4,
          min: 0.15,
          max: 1,
          step: 0.05,
          label: `Placa Ly (${t.length})`
        },
        {
          key: "t",
          val: 0.025,
          min: 0.01,
          max: 0.1,
          step: 5e-3,
          label: `Espesor t (${t.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.01,
          max: 0.05,
          step: 2e-3,
          label: `d perno (${t.length})`
        },
        {
          key: "sx",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `Sep. pernos X (${t.length})`
        },
        {
          key: "sy",
          val: 0.28,
          min: 0.08,
          max: 0.8,
          step: 0.02,
          label: `Sep. pernos Y (${t.length})`
        },
        {
          key: "colA",
          val: 0.2,
          min: 0.1,
          max: 0.5,
          step: 0.02,
          label: `Col a (${t.length})`
        },
        {
          key: "meshSize",
          val: 8e-3,
          min: 3e-3,
          max: 0.03,
          step: 1e-3,
          label: `Mesh (${t.length})`
        },
        {
          key: "E",
          val: t.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E acero (${t.stress})`
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
          label: `P axial (${t.force})`
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
          label: `Col b (${t.length})`
        },
        {
          key: "colH",
          val: 0.3,
          min: 0.1,
          max: 0.6,
          step: 0.02,
          label: `Col h (${t.length})`
        },
        {
          key: "colT",
          val: 8e-3,
          min: 4e-3,
          max: 0.025,
          step: 2e-3,
          label: `Col t (${t.length})`
        },
        {
          key: "colLen",
          val: 1.5,
          min: 0.5,
          max: 4,
          step: 0.25,
          label: `Col altura (${t.length})`
        },
        {
          key: "Lx",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `Placa Lx (${t.length})`
        },
        {
          key: "Ly",
          val: 0.45,
          min: 0.2,
          max: 1,
          step: 0.05,
          label: `Placa Ly (${t.length})`
        },
        {
          key: "tPlaca",
          val: 0.025,
          min: 0.01,
          max: 0.06,
          step: 5e-3,
          label: `Placa t (${t.length})`
        },
        {
          key: "dBolt",
          val: 0.022,
          min: 0.012,
          max: 0.04,
          step: 2e-3,
          label: `d perno (${t.length})`
        },
        {
          key: "sx",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `Sep pernos X (${t.length})`
        },
        {
          key: "sy",
          val: 0.32,
          min: 0.1,
          max: 0.8,
          step: 0.02,
          label: `Sep pernos Y (${t.length})`
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
          val: t.E,
          min: 10,
          max: 1e12,
          step: 1e3,
          label: `E acero (${t.stress})`
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
          label: `P axial (${t.force})`
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
          label: `H (${t.length})`
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
          label: `b top (${t.length})`
        },
        {
          key: "bBot",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `b base (${t.length})`
        },
        {
          key: "meshSize",
          val: 0.8,
          min: 0.3,
          max: 3,
          step: 0.1,
          label: `Mesh (${t.length})`
        },
        {
          key: "E",
          val: t.E * 5e4 / 2e8,
          min: 100,
          max: 1e12,
          step: 1e3,
          label: `E (${t.stress})`
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
          label: `gamma (${t.force}/${t.length}\xB3)`
        },
        {
          key: "c",
          val: 15,
          min: 0,
          max: 100,
          step: 1,
          label: `Cohesion c (${t.stress})`
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
          label: `Sobrecarga (${t.stress})`
        }
      ]
    };
  }
  function Ea(t) {
    const g = t.force, [R, z, G] = t.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: t.defaultForce,
          min: R,
          max: z,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: t.defaultForce * 3,
          min: R,
          max: z,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: z,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: z,
          step: G,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: R,
          max: z,
          step: G,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CV (${g})`
        }
      ],
      barra: [
        {
          key: "F",
          val: t.defaultForce * 10,
          min: t.forceRange[0] * 10,
          max: t.forceRange[1] * 10,
          step: Math.abs(t.forceRange[2]) * 5,
          label: `F axial (${g})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: G,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: R,
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
  Ia = function() {
    const t = document.createElement("div");
    t.id = "modal-results", t.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let g = false;
    function R(z, G) {
      var _a2, _b;
      if (!z.frequencies || z.frequencies.length === 0) {
        t.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const _ = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], V = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let W = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${G.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (W += '<div id="modal-body" style="padding:0 12px 10px 12px;">', G.properties) for (const j of G.properties) W += `<span style="color:#888">${j}</span>
`;
      W += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const j of _) W += `<th style="padding:2px 5px">${j}</th>`;
      if (W += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, z.frequencies.forEach((j, D) => {
        var _a3;
        const be = j > 0 ? 1 / j : 0, L = j * 2 * Math.PI, te = ((_a3 = z.massParticipation) == null ? void 0 : _a3[D]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let we = 0; we < 6; we++) V[we] += te[we];
        W += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${D + 1}</td>
  <td style="padding:2px 6px; text-align:right">${j.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${be.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${L.toFixed(2)}</td>`;
        for (let we = 0; we < 6; we++) {
          const me = (te[we] * 100).toFixed(1), oe = te[we] > 0.5 ? "#f00" : te[we] > 0.1 ? "#ff0" : "#0f0";
          W += `<td style="padding:2px 5px; text-align:right; color:${oe}">${me}%</td>`;
        }
        W += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(V[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[5] * 100).toFixed(1)}%</td></tr>`;
      }), W += "</table></div>", t.innerHTML = W, g) {
        const j = t.querySelector("#modal-body"), D = t.querySelector("#modal-minimize");
        j && (j.style.display = "none"), D && (D.textContent = "\u25A2", D.title = "Restaurar");
      }
      (_a2 = t.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        g = !g;
        const j = t.querySelector("#modal-body"), D = t.querySelector("#modal-minimize");
        g ? (j.style.display = "none", D.textContent = "\u25A2", D.title = "Restaurar") : (j.style.display = "block", D.textContent = "\u25AC", D.title = "Minimizar");
      }), (_b = t.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const j = [];
        j.push(`Modal Analysis \u2014 ${G.title}`);
        const D = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${_.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        j.push(D), j.push("-".repeat(D.length));
        const be = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        z.frequencies.forEach((te, we) => {
          var _a3;
          const me = te > 0 ? 1 / te : 0, oe = te * 2 * Math.PI, le = ((_a3 = z.massParticipation) == null ? void 0 : _a3[we]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Ae = 0; Ae < 6; Ae++) be[Ae] += le[Ae];
          const ue = le.map((Ae) => ((Ae * 100).toFixed(1) + "%").padStart(6)).join(" ");
          j.push(`${String(we + 1).padStart(4)}  ${te.toFixed(4).padStart(9)}  ${me.toFixed(4).padStart(9)}  ${oe.toFixed(2).padStart(9)}  ${ue}  ${(be[0] * 100).toFixed(1).padStart(5)}%  ${(be[1] * 100).toFixed(1).padStart(5)}%  ${(be[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(j.join(`
`));
        const L = t.querySelector("#modal-copy");
        L.textContent = "\u2713", setTimeout(() => L.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: t,
      render: R
    };
  };
  const xe = 64516e-8, A = 416231e-12, B = 0.0254, fo = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * xe,
      Iz: 16.4 * A,
      Iy: 2.2 * A,
      J: 0.0405 * A,
      d: 5.9 * B,
      bf: 3.94 * B
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * xe,
      Iz: 29.1 * A,
      Iy: 9.32 * A,
      J: 0.103 * A,
      d: 5.99 * B,
      bf: 5.99 * B
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * xe,
      Iz: 41.4 * A,
      Iy: 13.3 * A,
      J: 0.204 * A,
      d: 6.2 * B,
      bf: 6.02 * B
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * xe,
      Iz: 30.8 * A,
      Iy: 2.09 * A,
      J: 0.0426 * A,
      d: 7.89 * B,
      bf: 3.94 * B
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * xe,
      Iz: 61.9 * A,
      Iy: 7.97 * A,
      J: 0.172 * A,
      d: 8.14 * B,
      bf: 5.25 * B
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * xe,
      Iz: 82.7 * A,
      Iy: 18.3 * A,
      J: 0.346 * A,
      d: 7.93 * B,
      bf: 6.5 * B
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * xe,
      Iz: 110 * A,
      Iy: 37.1 * A,
      J: 0.536 * A,
      d: 8 * B,
      bf: 7.995 * B
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 146 * A,
      Iy: 49.1 * A,
      J: 0.871 * A,
      d: 8.25 * B,
      bf: 8.07 * B
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 184 * A,
      Iy: 60.9 * A,
      J: 1.45 * A,
      d: 8.5 * B,
      bf: 8.11 * B
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 272 * A,
      Iy: 88.6 * A,
      J: 3.54 * A,
      d: 9 * B,
      bf: 8.28 * B
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * xe,
      Iz: 53.8 * A,
      Iy: 2.18 * A,
      J: 0.0547 * A,
      d: 9.87 * B,
      bf: 3.96 * B
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 118 * A,
      Iy: 11.4 * A,
      J: 0.239 * A,
      d: 10.17 * B,
      bf: 5.75 * B
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * xe,
      Iz: 171 * A,
      Iy: 36.6 * A,
      J: 0.583 * A,
      d: 9.73 * B,
      bf: 7.96 * B
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * xe,
      Iz: 272 * A,
      Iy: 93.4 * A,
      J: 1.39 * A,
      d: 9.98 * B,
      bf: 10 * B
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * xe,
      Iz: 394 * A,
      Iy: 134 * A,
      J: 3.56 * A,
      d: 10.4 * B,
      bf: 10.13 * B
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * xe,
      Iz: 623 * A,
      Iy: 207 * A,
      J: 10.9 * A,
      d: 11.1 * B,
      bf: 10.34 * B
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * xe,
      Iz: 88.6 * A,
      Iy: 2.36 * A,
      J: 0.0704 * A,
      d: 11.91 * B,
      bf: 3.97 * B
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * xe,
      Iz: 156 * A,
      Iy: 4.66 * A,
      J: 0.293 * A,
      d: 12.31 * B,
      bf: 4.03 * B
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * xe,
      Iz: 204 * A,
      Iy: 17.3 * A,
      J: 0.3 * A,
      d: 12.22 * B,
      bf: 6.49 * B
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 310 * A,
      Iy: 44.1 * A,
      J: 0.906 * A,
      d: 11.94 * B,
      bf: 8.01 * B
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * xe,
      Iz: 425 * A,
      Iy: 95.8 * A,
      J: 1.58 * A,
      d: 12.06 * B,
      bf: 9.99 * B
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * xe,
      Iz: 597 * A,
      Iy: 195 * A,
      J: 4.05 * A,
      d: 12.25 * B,
      bf: 12.04 * B
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * xe,
      Iz: 833 * A,
      Iy: 270 * A,
      J: 8.44 * A,
      d: 12.71 * B,
      bf: 12.16 * B
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * xe,
      Iz: 1070 * A,
      Iy: 345 * A,
      J: 16 * A,
      d: 13.12 * B,
      bf: 12.32 * B
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 199 * A,
      Iy: 7 * A,
      J: 0.208 * A,
      d: 13.74 * B,
      bf: 5 * B
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * xe,
      Iz: 291 * A,
      Iy: 19.6 * A,
      J: 0.38 * A,
      d: 13.84 * B,
      bf: 6.73 * B
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * xe,
      Iz: 385 * A,
      Iy: 26.7 * A,
      J: 0.798 * A,
      d: 14.1 * B,
      bf: 6.77 * B
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 485 * A,
      Iy: 51.4 * A,
      J: 1.45 * A,
      d: 13.79 * B,
      bf: 8.03 * B
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * xe,
      Iz: 640 * A,
      Iy: 107 * A,
      J: 2.19 * A,
      d: 13.89 * B,
      bf: 9.99 * B
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * xe,
      Iz: 882 * A,
      Iy: 148 * A,
      J: 5.07 * A,
      d: 14.31 * B,
      bf: 10.13 * B
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * xe,
      Iz: 1240 * A,
      Iy: 447 * A,
      J: 7.12 * A,
      d: 14.32 * B,
      bf: 14.61 * B
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * xe,
      Iz: 1530 * A,
      Iy: 548 * A,
      J: 12.3 * A,
      d: 14.66 * B,
      bf: 14.73 * B
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * xe,
      Iz: 2140 * A,
      Iy: 838 * A,
      J: 23.7 * A,
      d: 15.22 * B,
      bf: 15.65 * B
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * xe,
      Iz: 301 * A,
      Iy: 9.59 * A,
      J: 0.262 * A,
      d: 15.69 * B,
      bf: 5.5 * B
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * xe,
      Iz: 448 * A,
      Iy: 24.5 * A,
      J: 0.545 * A,
      d: 15.86 * B,
      bf: 6.99 * B
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 659 * A,
      Iy: 37.2 * A,
      J: 1.52 * A,
      d: 16.26 * B,
      bf: 7.07 * B
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 954 * A,
      Iy: 119 * A,
      J: 2.39 * A,
      d: 16.33 * B,
      bf: 10.24 * B
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * xe,
      Iz: 1300 * A,
      Iy: 163 * A,
      J: 5.45 * A,
      d: 16.75 * B,
      bf: 10.37 * B
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * xe,
      Iz: 510 * A,
      Iy: 15.3 * A,
      J: 0.506 * A,
      d: 17.7 * B,
      bf: 6 * B
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 800 * A,
      Iy: 40.1 * A,
      J: 1.24 * A,
      d: 17.99 * B,
      bf: 7.5 * B
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * xe,
      Iz: 1170 * A,
      Iy: 60.3 * A,
      J: 3.49 * A,
      d: 18.47 * B,
      bf: 7.64 * B
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * xe,
      Iz: 1750 * A,
      Iy: 201 * A,
      J: 5.86 * A,
      d: 18.59 * B,
      bf: 11.15 * B
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * xe,
      Iz: 843 * A,
      Iy: 20.7 * A,
      J: 0.77 * A,
      d: 20.66 * B,
      bf: 6.5 * B
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * xe,
      Iz: 1330 * A,
      Iy: 57.5 * A,
      J: 1.83 * A,
      d: 20.99 * B,
      bf: 8.24 * B
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * xe,
      Iz: 1830 * A,
      Iy: 81.4 * A,
      J: 4.34 * A,
      d: 21.43 * B,
      bf: 8.36 * B
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * xe,
      Iz: 2670 * A,
      Iy: 274 * A,
      J: 6.83 * A,
      d: 21.51 * B,
      bf: 12.34 * B
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * xe,
      Iz: 1350 * A,
      Iy: 29.1 * A,
      J: 1.18 * A,
      d: 23.57 * B,
      bf: 7.01 * B
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * xe,
      Iz: 2100 * A,
      Iy: 82.5 * A,
      J: 2.68 * A,
      d: 23.92 * B,
      bf: 8.99 * B
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * xe,
      Iz: 3100 * A,
      Iy: 259 * A,
      J: 4.72 * A,
      d: 24.06 * B,
      bf: 12.75 * B
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * xe,
      Iz: 4020 * A,
      Iy: 340 * A,
      J: 9.5 * A,
      d: 24.48 * B,
      bf: 12.86 * B
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * xe,
      Iz: 4580 * A,
      Iy: 391 * A,
      J: 12.6 * A,
      d: 24.74 * B,
      bf: 12.9 * B
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * xe,
      Iz: 5680 * A,
      Iy: 479 * A,
      J: 21.2 * A,
      d: 25.24 * B,
      bf: 12.9 * B
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * xe,
      Iz: 2850 * A,
      Iy: 106 * A,
      J: 2.81 * A,
      d: 26.71 * B,
      bf: 9.96 * B
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * xe,
      Iz: 4090 * A,
      Iy: 159 * A,
      J: 6.77 * A,
      d: 27.29 * B,
      bf: 10.07 * B
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * xe,
      Iz: 3610 * A,
      Iy: 115 * A,
      J: 3.06 * A,
      d: 29.53 * B,
      bf: 10.4 * B
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * xe,
      Iz: 4930 * A,
      Iy: 164 * A,
      J: 6.43 * A,
      d: 30.01 * B,
      bf: 10.5 * B
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * xe,
      Iz: 5900 * A,
      Iy: 187 * A,
      J: 5.3 * A,
      d: 32.86 * B,
      bf: 11.48 * B
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * xe,
      Iz: 7800 * A,
      Iy: 225 * A,
      J: 7 * A,
      d: 35.55 * B,
      bf: 11.95 * B
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * xe,
      Iz: 8.22 * A,
      Iy: 8.22 * A,
      J: 13.4 * A,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * xe,
      Iz: 10.7 * A,
      Iy: 10.7 * A,
      J: 17.9 * A,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * xe,
      Iz: 12.3 * A,
      Iy: 12.3 * A,
      J: 21 * A,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 30.3 * A,
      Iy: 30.3 * A,
      J: 48.3 * A,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 41.1 * A,
      Iy: 41.1 * A,
      J: 66.9 * A,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * xe,
      Iz: 49.6 * A,
      Iy: 49.6 * A,
      J: 82.2 * A,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * xe,
      Iz: 70.7 * A,
      Iy: 70.7 * A,
      J: 112 * A,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 98 * A,
      Iy: 98 * A,
      J: 158 * A,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * xe,
      Iz: 122 * A,
      Iy: 122 * A,
      J: 199 * A,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 202 * A,
      Iy: 202 * A,
      J: 323 * A,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * xe,
      Iz: 254 * A,
      Iy: 254 * A,
      J: 412 * A,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * xe,
      Iz: 355 * A,
      Iy: 355 * A,
      J: 564 * A,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * xe,
      Iz: 452 * A,
      Iy: 452 * A,
      J: 724 * A,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * xe,
      Iz: 18 * A,
      Iy: 9.58 * A,
      J: 22.6 * A,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * xe,
      Iz: 23.8 * A,
      Iy: 12.3 * A,
      J: 30.3 * A,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 33.6 * A,
      Iy: 11.8 * A,
      J: 33 * A,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 45.1 * A,
      Iy: 15 * A,
      J: 44.5 * A,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * xe,
      Iz: 46.1 * A,
      Iy: 28.2 * A,
      J: 61.3 * A,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * xe,
      Iz: 63 * A,
      Iy: 37.5 * A,
      J: 84.6 * A,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 103 * A,
      Iy: 47.1 * A,
      J: 115 * A,
      d: 10 * B,
      bf: 6 * B
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 196 * A,
      Iy: 102 * A,
      J: 249 * A,
      d: 12 * B,
      bf: 8 * B
    }
  ];
  function Zo() {
    const t = {};
    return fo.forEach((g, R) => {
      g.type === "W" && (t[g.name] = R);
    }), t;
  }
  function Qo() {
    const t = {};
    return fo.forEach((g, R) => {
      g.type === "HSS" && (t[g.name] = R);
    }), t;
  }
  function ka(t) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h;
    const { nodes: g, elements: R, elementInputs: z, nodeInputs: G, deformOutputs: _ } = t, V = g.length * 6, W = R.length, j = R.filter((oe) => oe.length === 2).length, D = R.filter((oe) => oe.length >= 3).length, be = document.createElement("div");
    be.className = "rpt-overlay";
    let L = "";
    L += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', L += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", L += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', L += '<hr class="rpt-sep"/>', L += "<h2>1. Input Data</h2>", L += '<table class="rpt-info"><tbody>', L += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, L += `<tr><td>Number of elements</td><td class="val">${W} (${j} frames, ${D} shells)</td></tr>`, L += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', L += `<tr><td>Total DOFs</td><td class="val">${V}</td></tr>`, L += "</tbody></table>", L += "<h3>1.1 Node Coordinates</h3>", L += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((oe, le) => {
      L += `<tr><td>${le}</td><td>${Ke(oe[0])}</td><td>${Ke(oe[1])}</td><td>${Ke(oe[2])}</td></tr>`;
    }), L += "</tbody></table>", L += "<h3>1.2 Element Connectivity</h3>", L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', R.forEach((oe, le) => {
      var _a3, _b2, _c2, _d2;
      const ue = oe.length === 2, Ae = oe.map((Ue) => g[Ue]), Be = ue ? yo(oo(Ae[1], Ae[0])) : 0, Fe = ((_a3 = z.elasticities) == null ? void 0 : _a3.get(le)) ?? 0, Ve = ((_b2 = z.areas) == null ? void 0 : _b2.get(le)) ?? 0, st = ((_c2 = z.momentsOfInertiaZ) == null ? void 0 : _c2.get(le)) ?? 0, Ye = ((_d2 = z.momentsOfInertiaY) == null ? void 0 : _d2.get(le)) ?? 0;
      L += `<tr><td>${le}</td><td>${ue ? "Frame" : "Shell"}</td><td>${oe.join(" \u2192 ")}</td>`, L += `<td>${Ke(Be)}</td><td>${Ke(Fe)}</td><td>${Ke(Ve)}</td><td>${Ke(st)}</td><td>${Ke(Ye)}</td></tr>`;
    }), L += "</tbody></table>", L += "<h2>2. Element Formulation</h2>", j > 0 && (L += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", L += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", L += "<h4>2.1.1 Shape Functions</h4>", L += "<p><b>Axial</b> (linear interpolation):</p>", L += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', L += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', L += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', L += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', L += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', L += "</tbody></table>", L += La(), L += "<p><b>Torsion</b> (linear): same as axial.</p>", L += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", L += "<p>The B matrix relates nodal displacements to internal strains:</p>", L += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', L += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', L += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', L += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', L += "<h4>2.1.3 Constitutive Relations D</h4>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', L += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', L += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', L += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', L += "</tbody></table>", L += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", L += "<p>Obtained by analytical integration:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', L += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", L += '<div class="rpt-eq-small">', L += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", L += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", L += "</div>", L += "<h4>2.1.5 Transformation Matrix T</h4>", L += "<p>Direction cosines of element axis:</p>", L += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', L += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', L += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', L += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", L += "<h4>2.1.6 Global Stiffness Matrix</h4>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), L += "<h2>3. Numerical Results per Element</h2>", L += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let oe = 0; oe < W; oe++) {
      const le = R[oe], ue = le.map((rt) => g[rt]);
      if (!(le.length === 2)) continue;
      const Be = yo(oo(ue[1], ue[0])), Fe = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(oe)) ?? 0, Ve = ((_b = z.areas) == null ? void 0 : _b.get(oe)) ?? 0, st = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(oe)) ?? 0, Ye = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(oe)) ?? 0, Ue = ((_e2 = z.shearModuli) == null ? void 0 : _e2.get(oe)) ?? 0, bt = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(oe)) ?? 0;
      let vt = null, pe = null, qe = null;
      try {
        vt = on(ue, z, oe), pe = nn(ue), qe = Wt(_n(pe), Wt(vt, pe));
      } catch {
        continue;
      }
      const He = oo(ue[1], ue[0]), et = He[0] / Be, Ze = He[1] / Be, De = He[2] / Be;
      L += '<div class="rpt-elem-block">', L += `<h3 class="rpt-elem-title" data-toggle="elem${oe}">\u25B6 Element ${oe} \u2014 Nodes ${le[0]} \u2192 ${le[1]}, L = ${Ke(Be)}</h3>`, L += `<div id="rpt-elem${oe}" class="rpt-elem-body" style="display:none">`, L += "<h4>Properties (numerical substitution)</h4>", L += '<div class="rpt-eq-small">', L += `E = ${Ke(Fe)} &nbsp;&nbsp; A = ${Ke(Ve)} &nbsp;&nbsp; I<sub>z</sub> = ${Ke(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Ke(Ye)} &nbsp;&nbsp; G = ${Ke(Ue)} &nbsp;&nbsp; J = ${Ke(bt)}<br/>`, L += `EA/L = ${Ke(Fe)}\xB7${Ke(Ve)}/${Ke(Be)} = <b>${Ke(Fe * Ve / Be)}</b><br/>`, L += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ke(Fe)}\xB7${Ke(st)}/${Ke(Be)}\xB3 = <b>${Ke(12 * Fe * st / Be ** 3)}</b><br/>`, L += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ke(Fe)}\xB7${Ke(Ye)}/${Ke(Be)}\xB3 = <b>${Ke(12 * Fe * Ye / Be ** 3)}</b><br/>`, L += `GJ/L = ${Ke(Ue)}\xB7${Ke(bt)}/${Ke(Be)} = <b>${Ke(Ue * bt / Be)}</b>`, L += "</div>", L += "<h4>Direction cosines</h4>", L += `<div class="rpt-eq-small">l = ${en(et)}, m = ${en(Ze)}, n = ${en(De)}, D = ${en(Math.sqrt(et ** 2 + Ze ** 2))}</div>`, L += "<h4>K<sub>local</sub> (12\xD712)</h4>", L += Pn(vt, 12), L += "<h4>T \u2014 Transformation (12\xD712)</h4>", L += Pn(pe, 12), L += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", L += Pn(qe, 12), L += "<h4>Assembly</h4>", L += `<div class="rpt-eq-small">Global DOFs: node ${le[0]} \u2192 [${le[0] * 6}..${le[0] * 6 + 5}], node ${le[1]} \u2192 [${le[1] * 6}..${le[1] * 6 + 5}]</div>`, L += "</div></div>";
    }
    L += "<h2>4. Global Assembly</h2>", L += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${W - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, L += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", L += Ta(R, g.length), L += "<h2>5. Boundary Conditions</h2>";
    const te = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], we = [];
    if (L += "<h3>5.1 Supports (fixed DOFs)</h3>", G.supports && G.supports.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of te) L += `<th>${oe}</th>`;
      L += "</tr></thead><tbody>", G.supports.forEach((oe, le) => {
        L += `<tr><td>${le}</td>`, oe.forEach((ue, Ae) => {
          ue && we.push(le * 6 + Ae), L += `<td class="${ue ? "fixed" : ""}">${ue ? "Fixed" : "Free"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += `<div class="rpt-eq-small">Fixed DOFs: [${we.join(", ")}] \u2192 ${we.length} constraints<br/>`, L += `Free DOFs: ${V} \u2212 ${we.length} = <b>${V - we.length}</b></div>`, L += "<h3>5.2 Applied Loads</h3>", G.loads && G.loads.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const oe = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const le of oe) L += `<th>${le}</th>`;
      L += "</tr></thead><tbody>", G.loads.forEach((le, ue) => {
        L += `<tr><td>${ue}</td>`, le.forEach((Ae) => {
          const Be = Math.abs(Ae) > 1e-10;
          L += `<td class="${Be ? "nz" : ""}">${Be ? Ke(Ae) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>6. Solution</h2>", L += "<p>After removing fixed DOFs, the reduced system is:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', L += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", L += "<h3>6.1 Nodal Displacements</h3>", _ == null ? void 0 : _.deformations) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of te) L += `<th>${oe}</th>`;
      L += "</tr></thead><tbody>", _.deformations.forEach((oe, le) => {
        L += `<tr><td>${le}</td>`, oe.forEach((ue) => {
          const Ae = Math.abs(ue) > 1e-10;
          L += `<td class="${Ae ? "nz" : ""}">${Ke(ue, 6)}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h3>6.2 Reactions</h3>", L += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', _ == null ? void 0 : _.reactions) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of te) L += `<th>${oe}</th>`;
      L += "</tr></thead><tbody>", _.reactions.forEach((oe, le) => {
        L += `<tr><td>${le}</td>`, oe.forEach((ue) => {
          const Ae = Math.abs(ue) > 1e-10;
          L += `<td class="${Ae ? "nz-react" : ""}">${Ae ? Ke(ue, 4) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>7. Internal Forces</h2>", L += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", L += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', L += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', _ == null ? void 0 : _.deformations) {
      const oe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const le of oe) L += `<th>${le}<sub>i</sub></th>`;
      for (const le of oe) L += `<th>${le}<sub>j</sub></th>`;
      L += "</tr></thead><tbody>";
      for (let le = 0; le < W; le++) {
        const ue = R[le];
        if (ue.length !== 2) continue;
        const Ae = ue.map((Be) => g[Be]);
        try {
          const Be = on(Ae, z, le), Fe = nn(Ae), Ve = [];
          for (const Ue of ue) {
            const bt = ((_g = _.deformations) == null ? void 0 : _g.get(Ue)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ve.push(...bt);
          }
          const st = Wt(Fe, Ve), Ye = Wt(Be, st);
          L += `<tr><td>${le}</td><td>${ue.join("\u2192")}</td>`;
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
    return be.innerHTML = me + L, (_h = be.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => be.remove()), be.querySelectorAll("[data-toggle]").forEach((oe) => {
      oe.addEventListener("click", () => {
        const le = oe.dataset.toggle, ue = be.querySelector(`#rpt-${le}`);
        if (ue) {
          const Ae = ue.style.display !== "none";
          ue.style.display = Ae ? "none" : "", oe.textContent = oe.textContent.replace(/^[▼▶]/, Ae ? "\u25B6" : "\u25BC");
        }
      });
    }), be;
  }
  function Ke(t, g = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(g) : t.toFixed(g);
  }
  function en(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function Pn(t, g) {
    var _a2;
    const R = Math.min(g, 12);
    let z = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let G = 0; G < R; G++) {
      z += "<tr>";
      for (let _ = 0; _ < R; _++) {
        const V = ((_a2 = t[G]) == null ? void 0 : _a2[_]) ?? 0, W = Math.abs(V) < 1e-10;
        z += `<td class="${W ? "z" : ""} ${G === _ && !W ? "diag" : ""}">${W ? "0" : za(V)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", g > R && (z += `<div style="color:#888;font-size:9pt">(showing ${R}\xD7${R} of ${g}\xD7${g})</div>`), z += "</div>", z;
  }
  function za(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function La() {
    const V = [
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
    let W = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    W += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, W += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', W += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, W += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, W += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const j of V) {
      let D = "";
      for (let we = 0; we <= 80; we++) {
        const me = we / 80, oe = 30 + me * 540, le = 180 / 2 - j.fn(me) * 60;
        D += (we === 0 ? "M" : "L") + `${oe.toFixed(1)},${le.toFixed(1)}`;
      }
      W += `<path d="${D}" fill="none" stroke="${j.color}" stroke-width="2.5"/>`;
      const be = 0.75, L = 30 + be * 540 + 8, te = 180 / 2 - j.fn(be) * 60 - 6;
      W += `<text x="${L}" y="${te}" fill="${j.color}" font-size="11" font-weight="bold" font-family="sans-serif">${j.name}</text>`;
    }
    return W += "</svg>", W;
  }
  function Ta(t, g) {
    const R = g * 6, z = Math.min(R, 30);
    let G = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    G += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', G += "<tr><td></td>";
    for (let V = 0; V < z; V++) G += `<td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
    G += "</tr>";
    const _ = Array.from({
      length: z
    }, () => Array(z).fill(0));
    for (let V = 0; V < t.length; V++) {
      const W = t[V].map((j) => j * 6);
      for (const j of W) for (const D of W) for (let be = 0; be < 6; be++) for (let L = 0; L < 6; L++) {
        const te = j + be, we = D + L;
        te < z && we < z && _[te][we]++;
      }
    }
    for (let V = 0; V < z; V++) {
      G += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
      for (let W = 0; W < z; W++) {
        const j = _[V][W], D = j === 0 ? "#fff" : j === 1 ? "#e8f0fe" : j === 2 ? "#c6dcf5" : "#a0c4e8", be = j === 0 ? "" : j.toString();
        G += `<td style="background:${D};color:#003366">${be}</td>`;
      }
      G += "</tr>";
    }
    return G += "</table></div>", R > z && (G += `<div style="color:#888;font-size:9pt">(showing ${z}\xD7${z} of ${R}\xD7${R})</div>`), G;
  }
  let On = false;
  function Aa(t) {
    if (On || window.katex) {
      On = true, t();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const R = document.createElement("script");
    R.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", R.onload = () => {
      On = true, t();
    }, document.head.appendChild(R);
  }
  function Ts(t, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(t, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${t}</code>`;
  }
  function Ca(t, g, R, z, G, _) {
    var _a2, _b, _c, _d, _e2, _f;
    const V = R[t], W = V.map((pe) => g[pe]), j = V.length === 2, D = j ? yo(oo(W[1], W[0])) : 0, be = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, L = ((_b = z.areas) == null ? void 0 : _b.get(t)) ?? 0, te = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(t)) ?? 0, we = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(t)) ?? 0, me = ((_e2 = z.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, oe = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(t)) ?? 0;
    let le = null, ue = null, Ae = null;
    try {
      le = on(W, z, t), ue = nn(W), Ae = Wt(_n(ue), Wt(le, ue));
    } catch {
    }
    const Be = j ? oo(W[1], W[0]) : [
      0,
      0,
      0
    ], Fe = D > 0 ? Be[0] / D : 0, Ve = D > 0 ? Be[1] / D : 0, st = D > 0 ? Be[2] / D : 0, Ye = Math.sqrt(Fe ** 2 + Ve ** 2), Ue = [];
    if ((G == null ? void 0 : G.deformations) && j) for (const pe of V) {
      const qe = G.deformations.get(pe) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ue.push(...qe);
    }
    let bt = [], vt = [];
    if (Ue.length === 12 && ue && le) {
      try {
        bt = Wt(ue, Ue);
      } catch {
        bt = Array(12).fill(0);
      }
      try {
        vt = Wt(le, bt);
      } catch {
        vt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: t,
      elem: V,
      elmNodes: W,
      isFrame: j,
      L: D,
      E: be,
      A: L,
      Iz: te,
      Iy: we,
      G: me,
      J: oe,
      kLocal: le,
      T: ue,
      kGlobal: Ae,
      l: Fe,
      m: Ve,
      n: st,
      D: Ye,
      uGlobal: Ue,
      uLocal: bt,
      fLocal: vt,
      dOut: G,
      aOut: _,
      totalNodes: g.length
    };
  }
  function Fa(t, g, R, z, G, _) {
    var _a2, _b;
    const V = Ca(t, g, R, z, G, _), W = document.createElement("div");
    return W.className = "er-panel", W.innerHTML = Na + `
    <div class="er-header">
      <span class="er-badge">Element ${t}</span>
      <span class="er-type">${V.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${V.elem.join(" \u2192 ")} \u2014 L = ${_e(V.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${qa(V)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${As(V)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Pa(V)}</div>
  `, W.querySelectorAll(".er-tab").forEach((j) => {
      j.addEventListener("click", () => {
        W.querySelectorAll(".er-tab").forEach((be) => be.classList.remove("active")), j.classList.add("active");
        const D = j.dataset.tab;
        W.querySelectorAll(".er-body").forEach((be) => be.style.display = "none"), W.querySelector(`#er-body-${D}`).style.display = "";
      });
    }), (_a2 = W.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => W.remove()), (_b = W.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const j = W.classList.toggle("er-fullscreen-mode"), D = W.querySelector("#er-fullscreen");
      D && (D.textContent = j ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const j = W.querySelector("#er-sf-canvas");
      j && Nn(j);
      const D = W.querySelector("#er-sf-canvas-math");
      D && Nn(D);
    }, 50), Aa(() => {
      const j = W.querySelector("#er-body-math");
      j && (j.innerHTML = As(V)), setTimeout(() => {
        const D = W.querySelector("#er-sf-canvas-math");
        D && Nn(D);
      }, 50), W.querySelectorAll(".er-deriv-header").forEach((D) => {
        D.addEventListener("click", () => {
          const be = D.dataset.toggle, L = W.querySelector(`#er-${be}`);
          L && (L.style.display = L.style.display === "none" ? "" : "none");
        });
      });
    }), W;
  }
  function qa(t) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${_e(t.E)}</td><td>A</td><td>${_e(t.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${_e(t.Iz)}</td><td>I<sub>y</sub></td><td>${_e(t.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${_e(t.G)}</td><td>J</td><td>${_e(t.J)}</td></tr>`, g += "</table>", t.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${t.kLocal.length}\xD7${t.kLocal.length})</div>`, g += jo(t.kLocal)), t.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += jo(t.T)), t.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += jo(t.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', t.uGlobal.length > 0) {
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let z = 0; z < t.elem.length; z++) {
        g += `<div class="er-sub">Nodo ${t.elem[z]}: `;
        for (let G = 0; G < 6; G++) {
          const _ = t.uGlobal[z * 6 + G];
          g += `${R[G]}=<span class="${Math.abs(_) > 1e-10 ? "nz" : ""}">${_e(_, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', t.fLocal.length > 0 && t.fLocal.some((R) => R !== 0)) {
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const z of R) g += `<th>${z}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) g += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) g += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function As(t) {
    if (!t.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const R = (be) => Ts(be), z = (be) => Ts(be, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${z("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${R("\\text{Nodo } i")} = (${t.elmNodes[0].map((be) => _e(be)).join(", ")})<br/>`, g += `${R("\\text{Nodo } j")} = (${t.elmNodes[1].map((be) => _e(be)).join(", ")})<br/>`, g += `${z(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${_e(t.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${z("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${z("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${R("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${z("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${z("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${R("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${z("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${z("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${z("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${z("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${R("I_z")})</div>`, g += `<div class="er-eq">${z("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${R("I_y")})</div>`, g += `<div class="er-eq">${z("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${z("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${z(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${_e(t.E)} \\times ${_e(t.A)} = \\mathbf{${_e(t.E * t.A)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${_e(t.E)} \\times ${_e(t.Iz)} = \\mathbf{${_e(t.E * t.Iz)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${_e(t.E)} \\times ${_e(t.Iy)} = \\mathbf{${_e(t.E * t.Iy)}}`)}</div>`, g += `<div class="er-eq">${z(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${_e(t.G)} \\times ${_e(t.J)} = \\mathbf{${_e(t.G * t.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${R("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const G = t.E * t.A / t.L, _ = t.E * t.Iz / t.L ** 3, V = t.E * t.Iy / t.L ** 3, W = t.G * t.J / t.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${z("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${z("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${R("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${z("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(t.E)}\\times${_e(t.A)}}{${_e(t.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${z(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${_e(G)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${R("v(\\xi)")}</p>`, g += `<div class="er-eq">${z("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${z("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${z("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${z("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${R("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${z("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${R("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${z("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${_e(t.E)} \\times ${_e(t.Iz)}}{${_e(t.L)}^3} = \\mathbf{${_e(12 * _)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${R("\\theta_x")} y ${R("GJ")}:</p>`, g += `<div class="er-eq">${z(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(t.G)}\\times${_e(t.J)}}{${_e(t.L)}} = \\mathbf{${_e(W)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${R("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${z("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${z("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${z(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * t.E * t.Iz / t.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${z(`\\frac{EA}{L} = \\mathbf{${_e(G)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${_e(12 * _)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${_e(12 * V)}}`)}</div>`, g += `<div class="er-eq">${z(`\\frac{GJ}{L} = \\mathbf{${_e(W)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${_e(4 * t.E * t.Iy / t.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${_e(4 * t.E * t.Iz / t.L)}}`)}</div>`, g += `<div class="er-eq">${z(`\\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * t.E * t.Iz / t.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${_e(6 * t.E * t.Iy / t.L ** 2)}}`)}</div>`, t.kLocal && (g += `<div class="er-subsec">Resultado: ${R("\\mathbf{K}_{local}")} (12x12)</div>`, g += jo(t.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${z(`l = \\frac{x_j - x_i}{L} = ${tn(t.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${tn(t.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${tn(t.n)}`)}</div>`, g += `<div class="er-eq">${z(`D = \\sqrt{l^2 + m^2} = ${tn(t.D)}`)}</div>`, Math.abs(t.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${R(`n \\approx ${t.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const be = t.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${z(be)}</div>`;
    } else g += `<div class="er-eq">${z("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${z("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${R("\\mathbf{K}_{global}")} = ${R("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, t.kGlobal && (g += jo(t.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const j = t.elem[0] * 6, D = t.elem[1] * 6;
    if (g += `<div class="er-eq">${z(`\\text{Nodo } ${t.elem[0]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, g += `<div class="er-eq">${z(`\\text{Nodo } ${t.elem[1]} \\rightarrow \\text{DOFs } [${D} \\ldots ${D + 5}]`)}</div>`, g += `<div class="er-eq">${z("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${z("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${z("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, t.fLocal.length > 0 && t.fLocal.some((be) => be !== 0)) {
      const be = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const L of be) g += `<th>${L}</th>`;
      g += `</tr><tr><td>i (${t.elem[0]})</td>`;
      for (let L = 0; L < 6; L++) g += `<td class="${Math.abs(t.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[L], 3)}</td>`;
      g += `</tr><tr><td>j (${t.elem[1]})</td>`;
      for (let L = 6; L < 12; L++) g += `<td class="${Math.abs(t.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[L], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Pa(t) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${t.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${t.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${t.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${_e(t.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${_e(t.E)}</td></tr>`, g += `<tr><td>A</td><td>${_e(t.A)}</td></tr>`, g += "</table>", t.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const z of R) g += `<th>${z}</th>`;
      g += "</tr>";
      for (let z = 0; z < t.elem.length; z++) {
        g += `<tr><td>${t.elem[z]}</td>`;
        for (let G = 0; G < 6; G++) {
          const _ = t.uGlobal[z * 6 + G];
          g += `<td class="${Math.abs(_) > 1e-10 ? "nz" : ""}">${_e(_, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (t.fLocal.length > 0 && t.fLocal.some((R) => R !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const R = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const z of R) g += `<th>${z}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) g += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) g += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function _e(t, g = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(g) : t.toFixed(g);
  }
  function tn(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function jo(t) {
    var _a2;
    const g = t.length, R = Math.min(g, 12);
    let z = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let G = 0; G < R; G++) {
      z += "<tr>";
      for (let _ = 0; _ < R; _++) {
        const V = ((_a2 = t[G]) == null ? void 0 : _a2[_]) ?? 0, W = Math.abs(V) < 1e-10;
        z += `<td class="${W ? "z" : ""} ${G === _ && !W ? "diag" : ""}">${W ? "0" : Oa(V)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", g > R && (z += `<div style="color:var(--fem-label);font-size:9px">(${R}\xD7${R} de ${g}\xD7${g})</div>`), z += "</div>", z;
  }
  function Oa(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function Nn(t) {
    const g = t.getContext("2d");
    if (!g) return;
    const R = t.width, z = t.height, G = 30, _ = R - 2 * G, V = (z - 3 * G) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, R, z);
    const W = (j, D, be) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(G, j, _, V), g.strokeStyle = "#444", g.beginPath(), g.moveTo(G, j + V / 2), g.lineTo(G + _, j + V / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(D, G + 4, j + 14);
      for (const te of be) {
        g.strokeStyle = te.color, g.lineWidth = 2.5, g.beginPath();
        for (let we = 0; we <= 100; we++) {
          const me = we / 100, oe = G + me * _, le = j + V / 2 - te.fn(me) * (V / 2 * 0.85);
          we === 0 ? g.moveTo(oe, le) : g.lineTo(oe, le);
        }
        g.stroke();
      }
      let L = G + _ - 90;
      for (const te of be) g.fillStyle = te.color, g.font = "bold 10px sans-serif", g.fillText(te.label, L, j + V - 6), L += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", G, j + V + 12), g.fillText("1", G + _ - 6, j + V + 12), g.fillText("\u03BE", G + _ / 2, j + V + 12);
    };
    W(G, "Axial (lineal)", [
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
    ]), W(G + V + G, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  let sn = false, $o = null, Yt = null, Tt = null, wt = null;
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
    const t = document.createElement("style");
    return t.textContent = `
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
  `, document.head.appendChild(t), wt;
  }
  function _a() {
    sn = true, wt && (wt.innerHTML = "\u2715", wt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", wt.style.animation = "none"), $o = document.createElement("div"), $o.id = "tour-overlay", $o.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild($o), Po(0);
  }
  function Hn() {
    sn = false, wt && (wt.innerHTML = "?", wt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", wt.style.animation = "helpPulse 2s infinite"), Yt && (Yt.remove(), Yt = null), Tt && (Tt.remove(), Tt = null), $o && ($o.remove(), $o = null);
  }
  function Po(t) {
    var _a2, _b;
    if (t >= Do.length) {
      Ha();
      return;
    }
    const g = Do[t], R = document.querySelector(g.selector);
    if (!R) {
      Po(t + 1);
      return;
    }
    R.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Yt && Yt.remove(), Tt && Tt.remove();
    const z = R.getBoundingClientRect(), G = window.innerWidth, _ = window.innerHeight, V = 320, W = 180;
    Yt = document.createElement("div"), Yt.style.cssText = `
    position: fixed;
    left: ${z.left - 6}px; top: ${z.top - 6}px;
    width: ${z.width + 12}px; height: ${z.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Yt);
    const j = G - z.right, D = z.left, be = _ - z.bottom, L = z.top;
    let te = g.position || "bottom";
    te === "bottom" && be < W + 20 && (te = "top"), te === "top" && L < W + 20 && (te = "right"), te === "right" && j < V + 20 && (te = "left"), te === "left" && D < V + 20 && (te = "bottom");
    let we, me, oe = "";
    switch (te) {
      case "bottom":
        we = z.left + z.width / 2 - V / 2, me = z.bottom + 14, oe = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        we = z.left + z.width / 2 - V / 2, me = z.top - W - 14, oe = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        we = z.right + 14, me = z.top + z.height / 2 - W / 2, oe = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        we = z.left - V - 14, me = z.top + z.height / 2 - W / 2, oe = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    we = Math.max(10, Math.min(we, G - V - 10)), me = Math.max(10, Math.min(me, _ - W - 10)), Tt = document.createElement("div"), Tt.style.cssText = `
    position: fixed;
    left: ${we}px; top: ${me}px;
    width: ${V}px;
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
  `, Tt.innerHTML = `
    <div style="${oe}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${t + 1}/${Do.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${t > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${t < Do.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Do.map((ue, Ae) => `<div style="width:${Ae === t ? "16px" : "6px"};height:6px;border-radius:3px;background:${Ae === t ? "#0099ff" : Ae < t ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Tt), (_a2 = Tt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Po(t + 1);
    }), (_b = Tt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Po(t - 1);
    });
    const le = (ue) => {
      if (!sn) {
        document.removeEventListener("keydown", le);
        return;
      }
      (ue.key === "ArrowRight" || ue.key === "Enter") && (Po(t + 1), document.removeEventListener("keydown", le)), ue.key === "ArrowLeft" && (Po(Math.max(0, t - 1)), document.removeEventListener("keydown", le)), ue.key === "Escape" && (Hn(), document.removeEventListener("keydown", le));
    };
    document.addEventListener("keydown", le);
  }
  function Ha() {
    var _a2;
    Yt && (Yt.remove(), Yt = null), Tt && (Tt.remove(), Tt = null), Tt = document.createElement("div"), Tt.style.cssText = `
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
  `, Tt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Tt), (_a2 = Tt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Hn());
  }
  function Ba(t) {
    var _a2;
    const g = t.split(/\r?\n/), R = {
      force: "TONF",
      length: "M"
    }, z = [], G = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = [], j = [], D = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = [], te = [];
    let we = "", me = "";
    const oe = /* @__PURE__ */ new Map();
    for (const ge of g) {
      const ve = ge.trim();
      if (!ve || ve.startsWith("$")) {
        ve.startsWith("$ ") && (me = ve.substring(2).trim());
        continue;
      }
      if (me && (oe.has(me) || oe.set(me, []), oe.get(me).push(ge)), me === "CONTROLS") {
        const X = ve.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        X && (R.force = X[1], R.length = X[2]);
        const Le = ve.match(/TITLE2\s+"([^"]+)"/);
        Le && (we = Le[1]);
      }
      if (me === "STORIES - IN SEQUENCE FROM TOP") {
        const X = ve.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (X) {
          const Le = X[1], U = X[2] ? parseFloat(X[2]) : 0, he = X[3] ? parseFloat(X[3]) : void 0;
          z.push({
            name: Le,
            height: U,
            elev: he ?? 0
          });
        }
      }
      if (me === "MATERIAL PROPERTIES") {
        const X = ve.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (X) {
          const Le = X[1];
          G.has(Le) || G.set(Le, {
            type: X[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const U = G.get(Le);
          X[2] && (U.type = X[2]);
          const he = ve.match(/\bE\s+([\d.eE+-]+)/);
          he && (U.E = parseFloat(he[1]));
          const Ne = ve.match(/\bU\s+([\d.eE+-]+)/);
          Ne && (U.nu = parseFloat(Ne[1]), U.G = U.E / (2 * (1 + U.nu)));
          const Ie = ve.match(/\bFY\s+([\d.eE+-]+)/);
          Ie && (U.fy = parseFloat(Ie[1]));
          const ot = ve.match(/\bFC\s+([\d.eE+-]+)/);
          ot && (U.fc = parseFloat(ot[1]));
          const Pe = ve.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Pe && (U.density = parseFloat(Pe[1]));
        }
      }
      if (me === "FRAME SECTIONS") {
        const X = ve.match(/FRAMESECTION\s+"([^"]+)"/);
        if (X) {
          const Le = X[1];
          _.has(Le) || _.set(Le, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const U = _.get(Le), he = ve.match(/MATERIAL\s+"([^"]+)"/);
          he && (U.material = he[1]);
          const Ne = ve.match(/SHAPE\s+"([^"]+)"/);
          Ne && (U.shape = Ne[1]);
          const Ie = ve.match(/\bD\s+([\d.eE+-]+)/);
          Ie && (U.D = parseFloat(Ie[1]));
          const ot = ve.match(/\bB\s+([\d.eE+-]+)/);
          ot && (U.B = parseFloat(ot[1]));
          const Pe = ve.match(/\bTF\s+([\d.eE+-]+)/);
          Pe && (U.TF = parseFloat(Pe[1]));
          const Ce = ve.match(/\bTW\s+([\d.eE+-]+)/);
          Ce && (U.TW = parseFloat(Ce[1]));
          const Qe = ve.match(/\bR\s+([\d.eE+-]+)/);
          Qe && (U.R = parseFloat(Qe[1]));
          const Ge = ve.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ge && (U.fillMaterial = Ge[1]);
          const it = ve.match(/I2MOD\s+([\d.eE+-]+)/);
          it && (U.modI2 = parseFloat(it[1]));
          const Ct = ve.match(/I3MOD\s+([\d.eE+-]+)/);
          Ct && (U.modI3 = parseFloat(Ct[1]));
        }
      }
      if (me === "POINT COORDINATES") {
        const X = ve.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        X && V.set(X[1], [
          parseFloat(X[2]),
          parseFloat(X[3])
        ]);
      }
      if (me === "LINE CONNECTIVITIES") {
        const X = ve.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        X && W.push({
          name: X[1],
          type: X[2],
          pt1: X[3],
          pt2: X[4],
          nStories: parseInt(X[5])
        });
      }
      if (me === "POINT ASSIGNS") {
        const X = ve.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        X && D.set(`${X[1]}@${X[2]}`, X[3].split(/\s+/));
      }
      if (me === "LINE ASSIGNS") {
        const X = ve.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (X) {
          const Le = {
            story: X[2],
            section: X[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, U = ve.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          U && (Le.rigidZone = parseFloat(U[1]));
          const he = ve.match(/RELEASE\s+"([^"]+)"/);
          he && (Le.releases = he[1].split(/\s+/));
          const Ne = ve.match(/ANG\s+([-\d.eE+]+)/);
          Ne && (Le.angle = parseFloat(Ne[1])), be.set(`${X[1]}@${X[2]}`, Le);
        }
      }
      if (me === "GRIDS") {
        const X = ve.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        X && te.push({
          label: X[1],
          dir: X[2],
          coord: parseFloat(X[3])
        });
      }
      if (me === "FRAME OBJECT LOADS") {
        const X = ve.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        X && L.push({
          line: X[1],
          story: X[2],
          type: X[3],
          dir: X[4],
          lc: X[5],
          val: parseFloat(X[6])
        });
      }
      if (me === "AREA CONNECTIVITIES") {
        const X = ve.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (X) {
          const Le = ((_a2 = X[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((U) => U.replace(/"/g, ""))) || [];
          j.push({
            name: X[1],
            pts: Le,
            nStories: 0
          });
        }
      }
    }
    const le = /* @__PURE__ */ new Map();
    if (z.length > 0) {
      const ge = z.length - 1;
      le.set(z[ge].name, z[ge].elev);
      for (let ve = ge - 1; ve >= 0; ve--) {
        const Le = le.get(z[ve + 1].name) + z[ve].height;
        z[ve].elev = Le, le.set(z[ve].name, Le);
      }
    }
    const ue = [], Ae = [], Be = /* @__PURE__ */ new Map(), Fe = (ge, ve) => `${ge}@${ve}`, Ve = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const ge of W) st.set(ge.name, ge);
    for (const ge of W) for (const [ve, X] of be) {
      if (!ve.startsWith(ge.name + "@")) continue;
      const Le = X.story, U = z.findIndex((he) => he.name === Le);
      if (!(U < 0)) if (ge.type === "COLUMN" || ge.type === "BRACE") {
        Ve.add(Fe(ge.pt2, Le));
        const he = Math.max(ge.nStories, 1), Ne = Math.min(U + he, z.length - 1);
        Ve.add(Fe(ge.pt1, z[Ne].name));
      } else Ve.add(Fe(ge.pt1, Le)), Ve.add(Fe(ge.pt2, Le));
    }
    for (const [ge] of D) Ve.add(ge);
    for (const ge of Ve) {
      const [ve, X] = ge.split("@"), Le = V.get(ve), U = le.get(X);
      Le === void 0 || U === void 0 || (ue.push([
        Le[0],
        Le[1],
        U
      ]), Ae.push(ge), Be.set(ge, ue.length - 1));
    }
    const Ye = [], Ue = [], bt = [], vt = [], pe = /* @__PURE__ */ new Map();
    for (const ge of W) for (const [ve, X] of be) {
      if (!ve.startsWith(ge.name + "@")) continue;
      const Le = X.story, U = z.findIndex((Ce) => Ce.name === Le);
      if (U < 0) continue;
      let he, Ne;
      if (ge.type === "COLUMN" || ge.type === "BRACE") {
        const Ce = Math.max(ge.nStories, 1), Qe = Math.min(U + Ce, z.length - 1);
        he = Fe(ge.pt1, z[Qe].name), Ne = Fe(ge.pt2, Le);
      } else he = Fe(ge.pt1, Le), Ne = Fe(ge.pt2, Le);
      const Ie = Be.get(he), ot = Be.get(Ne);
      if (Ie === void 0 || ot === void 0 || Ie === ot) continue;
      const Pe = Ye.length;
      if (Ye.push([
        Ie,
        ot
      ]), Ue.push(ge.name), bt.push(ge.type), vt.push(Le), pe.set(Pe, X.section), X.rigidZone > 0 && rt.set(Pe, [
        X.rigidZone,
        X.rigidZone
      ]), X.releases.length > 0) {
        const Ce = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const Qe of X.releases) Qe === "TI" && (Ce[0] = true), Qe === "M2I" && (Ce[1] = true), Qe === "M3I" && (Ce[2] = true), Qe === "TJ" && (Ce[3] = true), Qe === "M2J" && (Ce[4] = true), Qe === "M3J" && (Ce[5] = true);
        at.set(Pe, Ce);
      }
    }
    const qe = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map();
    for (const [ge, ve] of pe) {
      const X = _.get(ve);
      if (!X) continue;
      const Le = G.get(X.material);
      Le && (qe.set(ge, Le.E), He.set(ge, Le.G));
      const U = X.D, he = X.B, Ne = X.TF, Ie = X.TW;
      let ot = 0, Pe = 0, Ce = 0, Qe = 0, Ge = 0, it = 0, Ct = "rect";
      switch (X.shape) {
        case "Concrete Rectangular":
          ot = U * he, Pe = he * U ** 3 / 12, Ce = U * he ** 3 / 12, Qe = he * U ** 3 * (1 / 3 - 0.21 * (U / he) * (1 - U ** 4 / (12 * he ** 4))), Ge = it = 5 / 6 * ot, Ct = "rect";
          break;
        case "Concrete Circle":
          ot = Math.PI * U ** 2 / 4, Pe = Ce = Math.PI * U ** 4 / 64, Qe = Math.PI * U ** 4 / 32, Ge = it = 0.9 * ot, Ct = "circ";
          break;
        case "Steel I/Wide Flange":
          ot = 2 * he * Ne + (U - 2 * Ne) * Ie, Pe = (he * U ** 3 - (he - Ie) * (U - 2 * Ne) ** 3) / 12, Ce = (2 * Ne * he ** 3 + (U - 2 * Ne) * Ie ** 3) / 12, Qe = (2 * he * Ne ** 3 + (U - 2 * Ne) * Ie ** 3) / 3, Ge = (U - 2 * Ne) * Ie, it = 2 * he * Ne * 5 / 6, Ct = "I";
          break;
        case "Steel Tube":
          ot = U * he - (U - 2 * Ie) * (he - 2 * Ie), Pe = (he * U ** 3 - (he - 2 * Ie) * (U - 2 * Ie) ** 3) / 12, Ce = (U * he ** 3 - (U - 2 * Ie) * (he - 2 * Ie) ** 3) / 12, Qe = 2 * Ie * (U - Ie) * (he - Ie) * ((U - Ie) * (he - Ie)) / (U - Ie + (he - Ie)), Ge = 2 * U * Ie, it = 2 * he * Ie, Ct = "HSS";
          break;
        case "Filled Steel Tube":
          ot = U * he, Pe = he * U ** 3 / 12, Ce = U * he ** 3 / 12, Qe = 2 * Ie * (U - Ie) * (he - Ie) * ((U - Ie) * (he - Ie)) / (U - Ie + (he - Ie)), Ge = 2 * U * Ie + 5 / 6 * (U - 2 * Ie) * (he - 2 * Ie), it = 2 * he * Ie + 5 / 6 * (U - 2 * Ie) * (he - 2 * Ie), Ct = "CFT";
          break;
        case "Steel Angle": {
          const qt = Ne || Ie;
          ot = qt * (U + he - qt), Pe = qt * (U ** 3 + he * qt ** 2 + qt ** 2 * (U - qt)) / 12, Ce = qt * (he ** 3 + U * qt ** 2 + qt ** 2 * (he - qt)) / 12, Qe = (U + he - qt) * qt ** 3 / 3, Ge = U * qt, it = he * qt, Ct = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ot = 2 * he * Ne + (U - 2 * Ne) * Ie, Pe = (Ie * U ** 3 + 2 * he * Ne * (U - Ne) ** 2) / 12, Ce = (2 * Ne * he ** 3 + (U - 2 * Ne) * Ie ** 3) / 12, Qe = (2 * he * Ne ** 3 + (U - 2 * Ne) * Ie ** 3) / 3, Ge = (U - 2 * Ne) * Ie, it = 2 * he * Ne * 5 / 6, Ct = X.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ot = 2 * (2 * he * Ne + (U - 2 * Ne) * Ie), Pe = 2 * (Ie * U ** 3 + 2 * he * Ne * (U - Ne) ** 2) / 12, Ce = 2 * (2 * Ne * he ** 3 + (U - 2 * Ne) * Ie ** 3) / 12, Qe = 2 * (2 * he * Ne ** 3 + (U - 2 * Ne) * Ie ** 3) / 3, Ge = 2 * (U - 2 * Ne) * Ie, it = 4 * he * Ne * 5 / 6, Ct = "2C";
          break;
        default:
          U > 0 && he > 0 && (ot = U * he, Pe = he * U ** 3 / 12, Ce = U * he ** 3 / 12, Qe = Math.min(U, he) * Math.max(U, he) ** 3 / 3 * 0.3, Ge = it = 5 / 6 * ot);
          break;
      }
      X.modI2 && (Ce *= X.modI2), X.modI3 && (Pe *= X.modI3), et.set(ge, ot), yt.set(ge, Pe), It.set(ge, Ce), lt.set(ge, Qe), Ge > 0 && Ze.set(ge, Ge), it > 0 && De.set(ge, it), At.set(ge, {
        type: Ct,
        b: he || void 0,
        h: U || void 0,
        d: Ct === "circ" || Ct === "pipe" ? U : void 0,
        tw: Ie || void 0,
        tf: Ne || void 0,
        r: X.R,
        name: ve
      });
    }
    const kt = /* @__PURE__ */ new Map();
    for (const [ge, ve] of D) {
      const X = Be.get(ge);
      if (X === void 0) continue;
      const Le = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const U of ve) U === "UX" && (Le[0] = true), U === "UY" && (Le[1] = true), U === "UZ" && (Le[2] = true), U === "RX" && (Le[3] = true), U === "RY" && (Le[4] = true), U === "RZ" && (Le[5] = true);
      kt.set(X, Le);
    }
    const ke = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
    for (let ge = 0; ge < Ue.length; ge++) Mt.set(`${Ue[ge]}@${vt[ge]}`, ge);
    for (const ge of L) {
      const ve = Mt.get(`${ge.line}@${ge.story}`);
      if (ve === void 0) continue;
      const [X, Le] = Ye[ve], U = ue[X], he = ue[Le], Ne = Math.sqrt((he[0] - U[0]) ** 2 + (he[1] - U[1]) ** 2 + (he[2] - U[2]) ** 2);
      if (Ne < 1e-10) continue;
      const Ie = ge.val * Ne / 2;
      let ot = 0, Pe = 0, Ce = 0;
      ge.dir === "GRAV" || ge.dir === "GRAVITY" ? Ce = -Ie : ge.dir === "X" ? ot = Ie : ge.dir === "Y" ? Pe = Ie : ge.dir === "Z" && (Ce = -Ie);
      for (const Qe of [
        X,
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
        Ge[0] += ot, Ge[1] += Pe, Ge[2] += Ce, ke.set(Qe, Ge);
      }
    }
    const ht = /* @__PURE__ */ new Map();
    for (const [ge, ve] of pe) {
      const X = _.get(ve);
      if (!X) continue;
      const Le = G.get(X.material);
      (Le == null ? void 0 : Le.density) && ht.set(ge, Le.density);
    }
    return {
      units: R,
      stories: z.reverse(),
      materials: G,
      frameSections: _,
      nodes: ue,
      nodeNames: Ae,
      nodeNameToIdx: Be,
      elements: Ye,
      elementNames: Ue,
      elementTypes: bt,
      elementStories: vt,
      elementSections: pe,
      nodeInputs: {
        supports: kt,
        loads: ke
      },
      elementInputs: {
        elasticities: qe,
        shearModuli: He,
        areas: et,
        momentsOfInertiaZ: yt,
        momentsOfInertiaY: It,
        torsionalConstants: lt,
        shearAreasY: Ze,
        shearAreasZ: De,
        rigidOffsets: rt,
        momentReleases: at,
        densities: ht,
        sectionShapes: At
      },
      sectionShapes: At,
      grids: te,
      info: {
        nNodes: ue.length,
        nFrames: Ye.length,
        nAreas: j.length,
        title: we
      },
      rawSections: oe
    };
  }
  function Da(t) {
    const { e2kModel: g } = t, R = g == null ? void 0 : g.rawSections;
    return R && R.size > 0 ? ja(R) : Wa(t);
  }
  function ja(t, g) {
    const R = [], z = [
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
    for (const G of z) {
      const _ = t.get(G);
      if (!(!_ || _.length === 0)) {
        R.push(`$ ${G}`);
        for (const V of _) R.push(V);
        R.push("");
      }
    }
    for (const [G, _] of t) if (!z.includes(G) && _.length !== 0) {
      R.push(`$ ${G}`);
      for (const V of _) R.push(V);
      R.push("");
    }
    return R.push("  END"), R.push("$ END OF MODEL FILE"), R.join(`\r
`);
  }
  function Wa(t) {
    var _a2, _b, _c, _d;
    const { nodes: g, elements: R, nodeInputs: z, elementInputs: G, title: _, units: V } = t, W = (V == null ? void 0 : V.force) || "TONF", j = (V == null ? void 0 : V.length) || "M", D = [], be = (pe) => Math.round(pe * 1e4) / 1e4;
    D.push("$ File exported from Awatif FEM Studio"), D.push(""), D.push("$ PROGRAM INFORMATION"), D.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), D.push(""), D.push("$ CONTROLS"), D.push(`  UNITS  "${W}"  "${j}"  "C"  `), _ && D.push(`  TITLE2  "${_}"  `), D.push("");
    const L = /* @__PURE__ */ new Set();
    g.forEach((pe) => L.add(be(pe[1])));
    const te = [
      ...L
    ].sort((pe, qe) => pe - qe), we = [], me = /* @__PURE__ */ new Map();
    we.push("Base"), me.set(te[0], "Base");
    for (let pe = 1; pe < te.length; pe++) {
      const qe = `Level_${pe}`;
      we.push(qe), me.set(te[pe], qe);
    }
    D.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let pe = te.length - 1; pe >= 1; pe--) D.push(`  STORY "${we[pe]}"  HEIGHT ${be(te[pe] - te[pe - 1])} MASTERSTORY "Yes"  `);
    te.length > 0 && D.push(`  STORY "Base"  ELEV ${te[0]} `), D.push(""), R.some((pe) => pe.length === 4) && (D.push("$ DIAPHRAGM NAMES"), D.push('  DIAPHRAGM "D1"    TYPE RIGID'), D.push("")), D.push("$ MATERIAL PROPERTIES");
    const le = /* @__PURE__ */ new Set();
    (_a2 = G.elasticities) == null ? void 0 : _a2.forEach((pe) => le.add(pe));
    const ue = /* @__PURE__ */ new Map();
    let Ae = 0;
    for (const pe of le) {
      const qe = `Mat_${++Ae}`;
      ue.set(pe, qe), D.push(`  MATERIAL  "${qe}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), D.push(`  MATERIAL  "${qe}"    SYMTYPE "Isotropic"  E ${pe}  U 0.2  A 1E-05`);
    }
    D.push(""), D.push("$ FRAME SECTIONS");
    const Be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
    R.forEach((pe, qe) => {
      var _a3, _b2;
      if (pe.length !== 2) return;
      const He = (_a3 = G.sectionShapes) == null ? void 0 : _a3.get(qe), et = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(qe)) ?? 0, Ze = ue.get(et) || "Mat_1", De = (He == null ? void 0 : He.h) ?? 0, rt = (He == null ? void 0 : He.b) ?? 0, at = (He == null ? void 0 : He.d) ?? 0, yt = (He == null ? void 0 : He.tf) ?? 0, It = (He == null ? void 0 : He.tw) ?? 0, lt = (He == null ? void 0 : He.type) || "rect", At = `${lt}_${De}_${rt}_${at}_${yt}_${It}`;
      (He == null ? void 0 : He.name) && !Ve.has(At) && Ve.set(At, He.name);
      let kt = Ve.get(At);
      if (kt || (lt === "rect" ? kt = `R${be(rt * 100)}x${be(De * 100)}` : lt === "circ" ? kt = `C_D${be(at * 100)}` : lt === "I" ? kt = `I_${be(De * 100)}` : kt = `Sec_${Be.size + 1}`, Ve.set(At, kt)), Fe.set(qe, kt), Be.has(kt)) return;
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
      De && (ht += `  D ${De}`), rt && (ht += `  B ${rt}`), at && !De && (ht += `  D ${at}`), yt && (ht += `  TF ${yt}`), It && (ht += `  TW ${It}`), D.push(ht);
    }), D.push("");
    const st = /* @__PURE__ */ new Map();
    let Ye = 0;
    g.forEach((pe) => {
      const qe = `${be(pe[0])},${be(pe[2])}`;
      st.has(qe) || st.set(qe, `${++Ye}`);
    }), D.push("$ POINT COORDINATES");
    for (const [pe, qe] of st) {
      const [He, et] = pe.split(",").map(Number);
      D.push(`  POINT "${qe}"  ${He} ${et} `);
    }
    D.push("");
    const Ue = (pe) => {
      const qe = g[pe], He = `${be(qe[0])},${be(qe[2])}`;
      return {
        pt: st.get(He) || "1",
        story: me.get(be(qe[1])) || "Base"
      };
    };
    D.push("$ LINE CONNECTIVITIES");
    const bt = [];
    R.forEach((pe, qe) => {
      if (pe.length !== 2) return;
      const He = Ya(g, pe), et = Fe.get(qe) || `Sec_${qe}`;
      if (He === "BEAM") {
        const Ze = Ue(pe[0]), De = Ue(pe[1]);
        D.push(`  LINE  "E${qe + 1}"  BEAM  "${Ze.pt}"  "${De.pt}"  0`), bt.push(`  LINEASSIGN  "E${qe + 1}"  "${Ze.story}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const Ze = g[pe[0]][1] <= g[pe[1]][1] ? pe[0] : pe[1], De = g[pe[0]][1] <= g[pe[1]][1] ? pe[1] : pe[0];
        Ue(Ze);
        const rt = Ue(De), at = be(g[Ze][1]), yt = be(g[De][1]), It = te.indexOf(at), lt = te.indexOf(yt), At = Math.max(1, lt >= 0 && It >= 0 ? lt - It : 1);
        D.push(`  LINE  "E${qe + 1}"  ${He}  "${rt.pt}"  "${rt.pt}"  ${At}`);
        for (let kt = 0; kt < At; kt++) {
          const ke = lt - kt;
          ke >= 0 && ke < we.length && bt.push(`  LINEASSIGN  "E${qe + 1}"  "${we[ke]}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), D.push(""), D.push("$ POINT ASSIGNS"), (_b = z.supports) == null ? void 0 : _b.forEach((pe, qe) => {
      const He = [];
      if (pe[0] && He.push("UX"), pe[1] && He.push("UY"), pe[2] && He.push("UZ"), pe[3] && He.push("RX"), pe[4] && He.push("RY"), pe[5] && He.push("RZ"), He.length > 0) {
        const et = Ue(qe);
        D.push(`  POINTASSIGN  "${et.pt}"  "${et.story}"  RESTRAINT "${He.join(" ")}"  `);
      }
    }), D.push(""), D.push("$ LINE ASSIGNS"), bt.forEach((pe) => D.push(pe)), D.push("");
    const vt = [];
    if (R.forEach((pe, qe) => {
      if (pe.length === 4) {
        const He = g[pe[0]], et = g[pe[1]], Ze = g[pe[2]], De = [
          et[0] - He[0],
          et[1] - He[1],
          et[2] - He[2]
        ], rt = [
          Ze[0] - He[0],
          Ze[1] - He[1],
          Ze[2] - He[2]
        ], at = Math.abs(De[2] * rt[0] - De[0] * rt[2]), yt = Math.sqrt((De[1] * rt[2] - De[2] * rt[1]) ** 2 + at ** 2 + (De[0] * rt[1] - De[1] * rt[0]) ** 2), It = yt > 1e-10 && at / yt < 0.5;
        vt.push({
          idx: qe,
          el: pe,
          isWall: It
        });
      }
    }), vt.some((pe) => !pe.isWall)) {
      D.push("$ SLAB PROPERTIES");
      const pe = ((_c = G.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      D.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${ue.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${pe} `), D.push("");
    }
    if (vt.some((pe) => pe.isWall)) {
      D.push("$ WALL PROPERTIES");
      const pe = ((_d = G.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      D.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${ue.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${pe} `), D.push("");
    }
    if (vt.length > 0) {
      D.push("$ AREA CONNECTIVITIES");
      const pe = [];
      vt.forEach((qe, He) => {
        const { el: et, isWall: Ze } = qe, De = Ze ? `W${He + 1}` : `F${He + 1}`, rt = Ze ? "PANEL" : "FLOOR", at = et.map((yt) => Ue(yt));
        if (Ze) {
          const yt = g[et[0]][1] <= g[et[2]][1] ? 0 : 2, It = g[et[1]][1] <= g[et[3]][1] ? 1 : 3;
          D.push(`  AREA "${De}"  ${rt}  4  "${at[yt].pt}"  "${at[It].pt}"  "${at[It].pt}"  "${at[yt].pt}"  1  1  0  0  `);
          const lt = at[yt === 0 ? 2 : 0].story;
          pe.push(`  AREAASSIGN  "${De}"  "${lt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else D.push(`  AREA "${De}"  ${rt}  4  "${at[0].pt}"  "${at[1].pt}"  "${at[2].pt}"  "${at[3].pt}"  0  0  0  0  `), pe.push(`  AREAASSIGN  "${De}"  "${at[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), D.push(""), D.push("$ AREA ASSIGNS"), pe.forEach((qe) => D.push(qe)), D.push("");
    }
    return D.push("$ LOAD PATTERNS"), D.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), D.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), D.push(""), z.loads && z.loads.size > 0 && (D.push("$ POINT OBJECT LOADS"), z.loads.forEach((pe, qe) => {
      const [He, et, Ze] = pe, De = Ue(qe);
      Math.abs(He) > 1e-10 && D.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FX ${He}`), Math.abs(et) > 1e-10 && D.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FY ${et}`), Math.abs(Ze) > 1e-10 && D.push(`  POINTLOAD  "${De.pt}"  "${De.story}"  "Dead"  TYPE "FORCE"  FZ ${Ze}`);
    }), D.push("")), D.push("  END"), D.push("$ END OF MODEL FILE"), D.join(`\r
`);
  }
  function Ya(t, g) {
    const R = t[g[0]], z = t[g[1]], G = Math.abs(z[1] - R[1]), _ = Math.sqrt((z[0] - R[0]) ** 2 + (z[2] - R[2]) ** 2), V = G > _ * 0.5;
    return V && _ > 0.01 ? "BRACE" : V ? "COLUMN" : "BEAM";
  }
  function Ga(t) {
    var _a2, _b;
    const { nodes: g, elements: R, nodeInputs: z, elementInputs: G } = t, _ = [];
    return _.push("# OpenSeesPy model exported from Awatif FEM Studio"), _.push(`# ${g.length} nodes, ${R.length} elements`), _.push(""), _.push("import openseespy.opensees as ops"), _.push(""), _.push("ops.wipe()"), _.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), _.push(""), _.push("# --- Nodes ---"), g.forEach((V, W) => {
      _.push(`ops.node(${W + 1}, ${V[0]}, ${V[1]}, ${V[2]})`);
    }), _.push(""), _.push("# --- Boundary Conditions ---"), (_a2 = z.supports) == null ? void 0 : _a2.forEach((V, W) => {
      const j = V.map((D) => D ? 1 : 0).join(", ");
      _.push(`ops.fix(${W + 1}, ${j})`);
    }), _.push(""), _.push("# --- Geometric Transformations ---"), _.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), _.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), _.push(""), _.push("# --- Elements (elasticBeamColumn) ---"), R.forEach((V, W) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (V.length !== 2) return;
      const j = g[V[0]], D = g[V[1]], L = Math.abs(D[2] - j[2]) > Math.max(Math.abs(D[0] - j[0]), Math.abs(D[1] - j[1])) ? 2 : 1, te = ((_a3 = G.areas) == null ? void 0 : _a3.get(W)) ?? 1, we = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(W)) ?? 2e5, me = ((_c = G.shearModuli) == null ? void 0 : _c.get(W)) ?? 8e4, oe = ((_d = G.torsionalConstants) == null ? void 0 : _d.get(W)) ?? 1, le = ((_e2 = G.momentsOfInertiaY) == null ? void 0 : _e2.get(W)) ?? 1, ue = ((_f = G.momentsOfInertiaZ) == null ? void 0 : _f.get(W)) ?? 1;
      _.push(`ops.element('elasticBeamColumn', ${W + 1}, ${V[0] + 1}, ${V[1] + 1}, ${te}, ${we}, ${me}, ${oe}, ${le}, ${ue}, ${L})`);
    }), _.push(""), z.loads && z.loads.size > 0 && (_.push("# --- Loads ---"), _.push("ops.timeSeries('Linear', 1)"), _.push("ops.pattern('Plain', 1, 1)"), z.loads.forEach((V, W) => {
      const j = V.map((D) => D).join(", ");
      _.push(`ops.load(${W + 1}, ${j})`);
    }), _.push("")), _.push("# --- Analysis ---"), _.push("ops.system('BandGeneral')"), _.push("ops.numberer('RCM')"), _.push("ops.constraints('Plain')"), _.push("ops.integrator('LoadControl', 1.0)"), _.push("ops.algorithm('Linear')"), _.push("ops.analysis('Static')"), _.push("ops.analyze(1)"), _.push(""), _.push("# --- Results ---"), _.push('print("\\n=== Displacements ===")'), g.forEach((V, W) => {
      _.push(`print(f"Node {${W + 1}}: {ops.nodeDisp(${W + 1})}")`);
    }), _.push(""), _.push('print("\\n=== Reactions ===")'), _.push("ops.reactions()"), (_b = z.supports) == null ? void 0 : _b.forEach((V, W) => {
      _.push(`print(f"Node {${W + 1}}: {ops.nodeReaction(${W + 1})}")`);
    }), _.join(`
`);
  }
  function Ja(t) {
    var _a2, _b;
    const { nodes: g, elements: R, nodeInputs: z, elementInputs: G } = t, _ = [];
    return _.push("# OpenSees Tcl model exported from Awatif FEM Studio"), _.push(`# ${g.length} nodes, ${R.length} elements`), _.push(""), _.push("wipe"), _.push("model basic -ndm 3 -ndf 6"), _.push(""), _.push("# --- Nodes ---"), g.forEach((V, W) => {
      _.push(`node ${W + 1} ${V[0]} ${V[1]} ${V[2]}`);
    }), _.push(""), _.push("# --- Boundary Conditions ---"), (_a2 = z.supports) == null ? void 0 : _a2.forEach((V, W) => {
      const j = V.map((D) => D ? 1 : 0).join(" ");
      _.push(`fix ${W + 1} ${j}`);
    }), _.push(""), _.push("# --- Geometric Transformations ---"), _.push("geomTransf Linear 1 0.0 0.0 1.0"), _.push("geomTransf Linear 2 -1.0 0.0 0.0"), _.push(""), _.push("# --- Elements ---"), R.forEach((V, W) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (V.length !== 2) return;
      const j = g[V[0]], D = g[V[1]], L = Math.abs(D[2] - j[2]) > Math.max(Math.abs(D[0] - j[0]), Math.abs(D[1] - j[1])) ? 2 : 1, te = ((_a3 = G.areas) == null ? void 0 : _a3.get(W)) ?? 1, we = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(W)) ?? 2e5, me = ((_c = G.shearModuli) == null ? void 0 : _c.get(W)) ?? 8e4, oe = ((_d = G.torsionalConstants) == null ? void 0 : _d.get(W)) ?? 1, le = ((_e2 = G.momentsOfInertiaY) == null ? void 0 : _e2.get(W)) ?? 1, ue = ((_f = G.momentsOfInertiaZ) == null ? void 0 : _f.get(W)) ?? 1;
      _.push(`element elasticBeamColumn ${W + 1} ${V[0] + 1} ${V[1] + 1} ${te} ${we} ${me} ${oe} ${le} ${ue} ${L}`);
    }), _.push(""), z.loads && z.loads.size > 0 && (_.push("# --- Loads ---"), _.push("timeSeries Linear 1"), _.push("pattern Plain 1 1 {"), z.loads.forEach((V, W) => {
      const j = V.map((D) => D).join(" ");
      _.push(`  load ${W + 1} ${j}`);
    }), _.push("}"), _.push("")), _.push("# --- Analysis ---"), _.push("system BandGeneral"), _.push("numberer RCM"), _.push("constraints Plain"), _.push("integrator LoadControl 1.0"), _.push("algorithm Linear"), _.push("analysis Static"), _.push("analyze 1"), _.push(""), _.push("# --- Results ---"), _.push('puts "\\n=== Displacements ==="'), g.forEach((V, W) => {
      _.push(`puts "Node ${W + 1}: [nodeDisp ${W + 1}]"`);
    }), _.push('puts "\\n=== Reactions ==="'), _.push("reactions"), (_b = z.supports) == null ? void 0 : _b.forEach((V, W) => {
      _.push(`puts "Node ${W + 1}: [nodeReaction ${W + 1}]"`);
    }), _.join(`
`);
  }
  function Va(t) {
    const g = [], R = [], z = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
    for (const we of t.split(/\r?\n/)) {
      const me = we.trim(), oe = me.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (oe) {
        const Be = parseInt(oe[1]), Fe = g.length;
        g.push([
          parseFloat(oe[2]),
          parseFloat(oe[3]),
          parseFloat(oe[4])
        ]), L.set(Be, Fe);
        continue;
      }
      const le = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (le) {
        const Be = parseInt(le[1]), Fe = L.get(Be);
        Fe !== void 0 && z.set(Fe, [
          le[2] === "1",
          le[3] === "1",
          le[4] === "1",
          le[5] === "1",
          le[6] === "1",
          le[7] === "1"
        ]);
        continue;
      }
      const ue = me.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ue) {
        const Be = parseInt(ue[1]), Fe = L.get(parseInt(ue[2])), Ve = L.get(parseInt(ue[3]));
        if (Fe !== void 0 && Ve !== void 0) {
          const st = R.length;
          R.push([
            Fe,
            Ve
          ]), te.set(Be, st), W.set(st, parseFloat(ue[4])), _.set(st, parseFloat(ue[5])), V.set(st, parseFloat(ue[6])), be.set(st, parseFloat(ue[7])), j.set(st, parseFloat(ue[8])), D.set(st, parseFloat(ue[9]));
        }
        continue;
      }
      const Ae = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Ae) {
        const Be = L.get(parseInt(Ae[1]));
        Be !== void 0 && G.set(Be, [
          parseFloat(Ae[2]),
          parseFloat(Ae[3]),
          parseFloat(Ae[4]),
          parseFloat(Ae[5]),
          parseFloat(Ae[6]),
          parseFloat(Ae[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: R,
      nodeInputs: {
        supports: z,
        loads: G
      },
      elementInputs: {
        elasticities: _,
        shearModuli: V,
        areas: W,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: D,
        torsionalConstants: be
      }
    };
  }
  function Xa(t) {
    const g = [], R = [], z = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
    for (const te of t.split(/\r?\n/)) {
      const we = te.trim();
      if (we.startsWith("#") || we.startsWith("//")) continue;
      const me = we.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const oe = parseInt(me[1]), le = g.length;
        g.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), L.set(oe, le);
        continue;
      }
      if (me[0] === "fix" && me.length >= 8) {
        const oe = L.get(parseInt(me[1]));
        oe !== void 0 && z.set(oe, [
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
        const oe = L.get(parseInt(me[3])), le = L.get(parseInt(me[4]));
        if (oe !== void 0 && le !== void 0) {
          const ue = R.length;
          R.push([
            oe,
            le
          ]), W.set(ue, parseFloat(me[5])), _.set(ue, parseFloat(me[6])), V.set(ue, parseFloat(me[7])), be.set(ue, parseFloat(me[8])), j.set(ue, parseFloat(me[9])), D.set(ue, parseFloat(me[10]));
        }
        continue;
      }
      if (me[0] === "load" && me.length >= 8) {
        const oe = L.get(parseInt(me[1]));
        oe !== void 0 && G.set(oe, [
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
      nodes: g,
      elements: R,
      nodeInputs: {
        supports: z,
        loads: G
      },
      elementInputs: {
        elasticities: _,
        shearModuli: V,
        areas: W,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: D,
        torsionalConstants: be
      }
    };
  }
  Cs = Fo.state(false);
  ol = function(t) {
    t.nodeInputs || (t.nodeInputs = Fo.state({})), t.elementInputs || (t.elementInputs = Fo.state({})), t.deformOutputs || (t.deformOutputs = Fo.state({})), t.analyzeOutputs || (t.analyzeOutputs = Fo.state({}));
    let g = "tonf", R = "m", z = vo(g, R), G = {
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
    }, V = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set();
    let j = false;
    const D = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
    let L = "", te = {}, we = null, me = "", oe = [], le = [], ue = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), st = null, Ye = [], Ue = 0.2, bt = 2, vt = 2, pe = false, qe = 2, He = "x", et = /* @__PURE__ */ new Set(), Ze = true, De = 0.15, rt = 2, at = 2, yt = /* @__PURE__ */ new Set(), It = false, lt = "perimeter";
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
    }), kt = (e, o) => ({
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
        length: e
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
    let Mt = 0, ht = 3, ge = false, ve = 0, X = null, Le = 0, U = [], he = 1, Ne = true;
    const Ie = Ia();
    Ie.div.style.display = "none";
    function ot() {
      const e = Uo()[L];
      return e && e[Mt] ? e[Mt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Pe = [], Ce = [], Qe = 0, Ge = [], it = null;
    function Ct() {
      if (!it) return;
      const e = tt();
      e && e.scene.remove(it), it.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), it = null;
    }
    function qt(e, o, n, l, s) {
      Ct();
      const c = tt();
      if (!c) return;
      it = new Vo(), it.name = "refGrid";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = Math.max(...n), b = i - a || 1, $ = d - u || 1, w = 3359829, x = 2241348;
      for (const h of n) {
        for (const S of o) {
          const E = new jt().setFromPoints([
            new Se(a, h, S),
            new Se(i, h, S)
          ]), I = new Lo({
            color: w,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), q = new go(E, I);
          q.computeLineDistances(), q.renderOrder = -10, it.add(q);
        }
        for (const S of e) {
          const E = new jt().setFromPoints([
            new Se(S, h, u),
            new Se(S, h, d)
          ]), I = new Lo({
            color: w,
            dashSize: $ * 0.015,
            gapSize: $ * 0.01,
            transparent: true,
            opacity: 0.25
          }), q = new go(E, I);
          q.computeLineDistances(), q.renderOrder = -10, it.add(q);
        }
      }
      for (const h of e) for (const S of o) {
        const E = new jt().setFromPoints([
          new Se(h, 0, S),
          new Se(h, r, S)
        ]), I = new Lo({
          color: x,
          dashSize: r * 0.01,
          gapSize: r * 8e-3,
          transparent: true,
          opacity: 0.15
        }), q = new go(E, I);
        q.computeLineDistances(), q.renderOrder = -10, it.add(q);
      }
      const f = Math.min(b, $) * 0.015;
      for (const h of n) for (const S of e) for (const E of o) {
        const I = [
          new Se(S - f, h, E),
          new Se(S + f, h, E),
          new Se(S, h, E - f),
          new Se(S, h, E + f)
        ], q = new jt().setFromPoints(I), y = new Ao({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new To(q, y);
        m.renderOrder = -5, it.add(m);
      }
      it.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(it), c.render();
    }
    let St = null;
    function Bn() {
      if (!St) return;
      const e = tt();
      e && e.scene.remove(St), St.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), St = null;
    }
    function Oo(e, o, n, l, s) {
      Bn();
      const c = tt();
      if (!c) return;
      St = new Vo(), St.name = "gridAxes";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = i - a || 1, b = d - u || 1, $ = Math.max(r, b), w = $ * 0.08, x = l || e.map((m, p) => String.fromCharCode(65 + p)), f = s || o.map((m, p) => String(p + 1)), h = $ * 0.018, S = o.length <= 1, E = 8947848;
      for (let m = 0; m < e.length; m++) {
        const p = e[m];
        if (S) {
          const v = -w - h * 1.5;
          cn(p, 0, 0, p, 0, v + h, E, St), dn(x[m] || `${m}`, p, 0, v, h, St);
        } else {
          const v = u - w - h * 1.5;
          cn(p, u, 0, p, v + h, 0, E, St), dn(x[m] || `${m}`, p, v, 0, h, St);
        }
      }
      if (!S) for (let m = 0; m < o.length; m++) {
        const p = o[m], v = a - w - h * 1.5;
        cn(a, p, 0, v + h, p, 0, E, St), dn(f[m] || `${m}`, v, p, 0, h, St);
      }
      const I = h * 1.8, q = w * 1.2, y = w * 1.2;
      for (let m = 0; m < e.length - 1; m++) {
        const p = e[m], v = e[m + 1], M = Math.abs(v - p), k = (p + v) / 2, P = `${M.toFixed(2)} m`;
        S ? (ln(P, k, 0, -q, I, St), rn(p, 0, -q * 0.7, v, 0, -q * 0.7, 16763904, St)) : (ln(P, k, u - y, 0, I, St), rn(p, u - y * 0.7, 0, v, u - y * 0.7, 0, 16763904, St));
      }
      if (!S) for (let m = 0; m < o.length - 1; m++) {
        const p = o[m], v = o[m + 1], M = Math.abs(v - p), k = (p + v) / 2, P = `${M.toFixed(2)} m`;
        ln(P, a - q, k, 0, I, St), rn(a - q * 0.7, p, 0, a - q * 0.7, v, 0, 16763904, St);
      }
      St.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((p) => {
          p.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(St), c.render();
    }
    let Pt = null;
    function Dn() {
      if (!Pt) return;
      const e = tt();
      e && e.scene.remove(Pt), Pt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Pt = null;
    }
    function an(e, o, n) {
      if (Dn(), e.length === 0) return;
      const l = tt();
      if (!l) return;
      Pt = new Vo(), Pt.name = "storyLevels";
      const s = Math.min(...o), c = Math.max(...o), a = Math.min(...n), i = Math.max(...n), u = c - s || 1, d = i - a || 1, r = Math.max(u, d), b = r * 0.06, $ = n.length <= 1, w = 4491519, x = r * 0.015;
      for (const f of e) {
        const h = f.elev;
        $ ? (No(s - b, 0, h, c + b, 0, h, w, Pt), jn(f.name, c + b * 1.5, 0, h, x, Pt)) : (No(s, a, h, c, a, h, w, Pt), No(c, a, h, c, i, h, w, Pt), No(c, i, h, s, i, h, w, Pt), No(s, i, h, s, a, h, w, Pt), jn(f.name, s - b * 1.5, a, h, x, Pt));
      }
      Pt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Pt), l.render();
    }
    function No(e, o, n, l, s, c, a, i) {
      const u = Math.sqrt((l - e) ** 2 + (s - o) ** 2 + (c - n) ** 2) || 1, d = new jt().setFromPoints([
        new Se(e, o, n),
        new Se(l, s, c)
      ]), r = new Lo({
        color: a,
        dashSize: u * 0.02,
        gapSize: u * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new go(d, r);
      b.computeLineDistances(), b.renderOrder = 50, i.add(b);
    }
    function jn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 512, u = 64;
      a.width = i, a.height = u;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(30,60,120,0.8)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(i - r, 0), d.quadraticCurveTo(i, 0, i, r), d.lineTo(i, u - r), d.quadraticCurveTo(i, u, i - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#88bbff", d.font = "bold 38px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, i / 2, u / 2);
      const b = new qn(a);
      b.needsUpdate = true;
      const $ = new Ko({
        map: b,
        depthTest: false,
        transparent: true
      }), w = new Xo($);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, c.add(w);
    }
    function ln(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 256, u = 64;
      a.width = i, a.height = u;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(i - r, 0), d.quadraticCurveTo(i, 0, i, r), d.lineTo(i, u - r), d.quadraticCurveTo(i, u, i - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, i / 2, u / 2);
      const b = new $a(a);
      b.minFilter = wa;
      const $ = new Ko({
        map: b,
        transparent: true,
        depthTest: false
      }), w = new Xo($);
      w.position.set(o, n, l);
      const x = i / u;
      w.scale.set(s * x, s, 1), w.renderOrder = 999, c.add(w);
    }
    function rn(e, o, n, l, s, c, a, i) {
      const u = [
        new Se(e, o, n),
        new Se(l, s, c)
      ], d = new jt().setFromPoints(u), r = new Ao({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new go(d, r);
      b.renderOrder = 998, i.add(b);
    }
    function cn(e, o, n, l, s, c, a, i) {
      const u = new jt().setFromPoints([
        new Se(e, o, n),
        new Se(l, s, c)
      ]), d = new Lo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - e), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - e), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), r = new go(u, d);
      r.computeLineDistances(), i.add(r);
    }
    function dn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const u = a.getContext("2d");
      u.beginPath(), u.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = i * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${i * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(e, i / 2, i / 2 + i * 0.02);
      const d = new qn(a);
      d.needsUpdate = true;
      const r = new Ko({
        map: d,
        depthTest: false,
        transparent: true
      }), b = new Xo(r);
      b.position.set(o, n, l);
      const $ = s * 2;
      b.scale.set($, $, 1), b.renderOrder = 100, c.add(b);
    }
    const We = {
      addNode(e, o, n) {
        const l = [
          ...t.nodes.val
        ], s = l.length;
        return l.push([
          e,
          o,
          n
        ]), t.nodes.val = l, console.log(`Node ${s} at (${e}, ${o}, ${n})`), Je(), s;
      },
      removeNode(e) {
        const o = [
          ...t.nodes.val
        ];
        if (e < 0 || e >= o.length) {
          console.error(`Node ${e} not found`);
          return;
        }
        o.splice(e, 1);
        const n = t.elements.val.map(([l, s]) => {
          const c = l > e ? l - 1 : l, a = s > e ? s - 1 : s;
          return l === e || s === e ? null : [
            c,
            a
          ];
        }).filter((l) => l !== null);
        t.nodes.val = o, t.elements.val = n, console.log(`Node ${e} removed`), Je();
      },
      listNodes() {
        const e = t.nodes.val;
        return console.table(e.map((o, n) => ({
          id: n,
          x: o[0],
          y: o[1],
          z: o[2]
        }))), e;
      },
      addFrame(e, o) {
        const n = [
          ...t.elements.val
        ], l = n.length;
        return n.push([
          e,
          o
        ]), t.elements.val = n, console.log(`Element ${l}: node ${e} -> node ${o}`), Je(), l;
      },
      removeFrame(e) {
        const o = [
          ...t.elements.val
        ];
        if (e < 0 || e >= o.length) {
          console.error(`Element ${e} not found`);
          return;
        }
        o.splice(e, 1), t.elements.val = o, console.log(`Element ${e} removed`), Je();
      },
      listFrames() {
        const e = t.elements.val;
        return console.table(e.map((o, n) => ({
          id: n,
          nodeI: o[0],
          nodeJ: o[1]
        }))), e;
      },
      addSupport(e, o) {
        if (!t.nodeInputs) return;
        const n = {
          ...t.nodeInputs.val
        }, l = new Map(n.supports || []);
        l.set(e, o || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), n.supports = l, t.nodeInputs.val = n, console.log(`Support added at node ${e}`), Je();
      },
      removeSupport(e) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(e), o.supports = n, t.nodeInputs.val = o, console.log(`Support removed from node ${e}`), Je();
      },
      addLoad(e, o) {
        if (!t.nodeInputs) return;
        const n = {
          ...t.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(e, o), n.loads = l, t.nodeInputs.val = n, console.log(`Load added at node ${e}: [${o.join(", ")}]`), Je();
      },
      removeLoad(e) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(e), o.loads = n, t.nodeInputs.val = o, console.log(`Load removed from node ${e}`), Je();
      },
      listSupports() {
        if (!t.nodeInputs) return;
        const e = t.nodeInputs.val.supports;
        if (!e || e.size === 0) {
          console.log("No supports");
          return;
        }
        const o = [];
        return e.forEach((n, l) => o.push({
          node: l,
          dof: n.map((s) => s ? 1 : 0).join("")
        })), console.table(o), e;
      },
      listLoads() {
        if (!t.nodeInputs) return;
        const e = t.nodeInputs.val.loads;
        if (!e || e.size === 0) {
          console.log("No loads");
          return;
        }
        const o = [];
        return e.forEach((n, l) => o.push({
          node: l,
          Fx: n[0],
          Fy: n[1],
          Fz: n[2]
        })), console.table(o), e;
      },
      info() {
        var _a2, _b, _c, _d, _e2, _f;
        const e = t.nodes.val.length, o = t.elements.val.length, n = ((_c = (_b = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = t.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${e} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: e,
          elements: o,
          supports: n,
          loads: l
        };
      },
      set(e, o) {
        var _a2, _b, _c, _d;
        const n = $e.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", c = l.id || "";
          if (s.toLowerCase().includes(e.toLowerCase()) || c.toLowerCase().includes(e.toLowerCase())) {
            const a = l;
            return a.checked = o !== void 0 ? o : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || c}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${e}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const e = $e.querySelectorAll("input[type=checkbox]"), o = {};
        return e.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[s] = l.checked;
        }), console.table(o), o;
      },
      param(e, o) {
        const n = window.__cad;
        if (n == null ? void 0 : n.setParam) return n.setParam(e, o), console.log(`${e} = ${o}`), o;
        console.log("Parameters not available");
      },
      params() {
        const e = window.__cad;
        if (e == null ? void 0 : e.getParams) {
          const o = e.getParams();
          return console.table(o), o;
        }
        console.log("Parameters not available");
      },
      use(e) {
        const o = window.__cad;
        if (o == null ? void 0 : o.setGenerator) return o.setGenerator(e), console.log(`Generator: ${e}`), e;
      },
      panel(e, o, n) {
        const l = window.__cad;
        if (l == null ? void 0 : l.createCustomPanel) return l.createCustomPanel(e, o, n);
        console.log("Custom panels not available");
      },
      removePanel(e) {
        const o = window.__cad;
        (o == null ? void 0 : o.removeCustomPanel) && (o.removeCustomPanel(e), console.log(`Panel "${e}" removed`));
      },
      refgrid(e, o, n) {
        if (!e) {
          Ct(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const a of e) l.push(l[l.length - 1] + a);
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
        qt(l, s, c), Pe = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), Ce = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), Qe = c[c.length - 1], Ge = c.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Oo(Pe.map((a) => a.coord), Ce.map((a) => a.coord), Qe, Pe.map((a) => a.label), Ce.map((a) => a.label));
        {
          const a = c.map((i, u) => ({
            name: u === 0 ? "Base" : `P${u}`,
            height: u > 0 ? i - c[u - 1] : 0,
            elev: i
          }));
          an(a, Pe.map((i) => i.coord), Ce.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(e) {
        var _a2;
        if (Pe.length === 0 || Ge.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (e == null ? void 0 : e.col) || "40x40", n = (e == null ? void 0 : e.viga) || "30x40", l = (e == null ? void 0 : e.fc) || 210, [s, c] = o.split("x").map((H) => parseFloat(H) / 100), [a, i] = n.split("x").map((H) => parseFloat(H) / 100), u = Pe.map((H) => H.coord), d = Ce.map((H) => H.coord), r = Ge.map((H) => H.elev), b = u.length, $ = d.length, w = r.length, x = w - 1, f = [], h = {};
        for (let H = 0; H < w; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b; ie++) h[`${ie},${de},${H}`] = f.length, f.push([
          u[ie],
          d[de],
          r[H]
        ]);
        const S = [], E = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Map();
        for (let H = 0; H < x; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b; ie++) {
          const ee = S.length;
          S.push([
            h[`${ie},${de},${H}`],
            h[`${ie},${de},${H + 1}`]
          ]), E.add(ee), q.set(ee, H);
        }
        for (let H = 1; H < w; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b - 1; ie++) {
          const ee = S.length;
          S.push([
            h[`${ie},${de},${H}`],
            h[`${ie + 1},${de},${H}`]
          ]), I.add(ee), q.set(ee, H - 1);
        }
        for (let H = 1; H < w; H++) for (let de = 0; de < b; de++) for (let ie = 0; ie < $ - 1; ie++) {
          const ee = S.length;
          S.push([
            h[`${de},${ie},${H}`],
            h[`${de},${ie + 1},${H}`]
          ]), I.add(ee), q.set(ee, H - 1);
        }
        const y = ((_a2 = e == null ? void 0 : e.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (y) {
          const H = y === "all" || y === "x" || y === "perimeter", de = y === "all" || y === "y" || y === "perimeter";
          for (let ie = 0; ie < x; ie++) {
            if (H) for (let ee = 0; ee < $; ee++) {
              if (y === "perimeter" && ee !== 0 && ee !== $ - 1) continue;
              const J = Math.floor((b - 1) / 2);
              for (let fe = 0; fe < b - 1; fe++) {
                if (y === "perimeter" && fe !== J) continue;
                const Ee = S.length;
                S.push([
                  h[`${fe},${ee},${ie}`],
                  h[`${fe + 1},${ee},${ie + 1}`]
                ]), m.add(Ee), q.set(Ee, ie);
                const ne = S.length;
                S.push([
                  h[`${fe + 1},${ee},${ie}`],
                  h[`${fe},${ee},${ie + 1}`]
                ]), m.add(ne), q.set(ne, ie);
              }
            }
            if (de) for (let ee = 0; ee < b; ee++) {
              if (y === "perimeter" && ee !== 0 && ee !== b - 1) continue;
              const J = Math.floor(($ - 1) / 2);
              for (let fe = 0; fe < $ - 1; fe++) {
                if (y === "perimeter" && fe !== J) continue;
                const Ee = S.length;
                S.push([
                  h[`${ee},${fe},${ie}`],
                  h[`${ee},${fe + 1},${ie + 1}`]
                ]), m.add(Ee), q.set(Ee, ie);
                const ne = S.length;
                S.push([
                  h[`${ee},${fe + 1},${ie}`],
                  h[`${ee},${fe},${ie + 1}`]
                ]), m.add(ne), q.set(ne, ie);
              }
            }
          }
        }
        const p = 15100 * Math.sqrt(l) * 10, v = p / (2 * (1 + 0.2)), M = s * c, k = s * c ** 3 / 12, P = c * s ** 3 / 12, C = s * c * (s ** 2 + c ** 2) / 12, T = a * i, O = a * i ** 3 / 12, F = i * a ** 3 / 12, Z = a * i * (a ** 2 + i ** 2) / 12, K = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map();
        for (let H = 0; H < S.length; H++) K.set(H, p), re.set(H, v), E.has(H) ? (ae.set(H, M), Q.set(H, k), ce.set(H, P), Me.set(H, C), Oe.set(H, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${o}`
        })) : m.has(H) ? (ae.set(H, M), Q.set(H, k), ce.set(H, P), Me.set(H, C), Oe.set(H, {
          type: "rect",
          b: s,
          h: c,
          name: `BR${o}`
        })) : (ae.set(H, T), Q.set(H, O), ce.set(H, F), Me.set(H, Z), Oe.set(H, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let H = 0; H < $; H++) for (let de = 0; de < b; de++) Re.set(h[`${de},${H},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return t.nodes.val = f, t.elements.val = S, t.nodeInputs.val = {
          supports: Re,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: K,
          shearModuli: re,
          areas: ae,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: ce,
          torsionalConstants: Me,
          sectionShapes: Oe
        }, ue = E, Ae = I, Fe = q, console.log(`Built: ${f.length} nodes, ${S.length} elements (${E.size} cols, ${I.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${y ? `, braces=${y}` : ""}`), {
          nodes: f.length,
          elements: S.length
        };
      },
      addCol(e, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Pe.findIndex((x) => x.label === e), s = Ce.findIndex((x) => x.label === o);
        if (l < 0) {
          console.log(`Axis "${e}" not found. Available: ${Pe.map((x) => x.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ce.map((x) => x.label)}`);
          return;
        }
        const c = Pe[l].coord, a = Ce[s].coord, i = [
          ...t.nodes.val
        ], u = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = t.elementInputs) == null ? void 0 : _b.val;
        const d = (x) => {
          const f = i.findIndex((h) => Math.abs(h[0] - c) < 1e-3 && Math.abs(h[1] - a) < 1e-3 && Math.abs(h[2] - x) < 1e-3);
          return f >= 0 ? f : (i.push([
            c,
            a,
            x
          ]), i.length - 1);
        }, r = n ? [
          Ge.findIndex((x) => x.label === n)
        ] : Array.from({
          length: Ge.length - 1
        }, (x, f) => f + 1), b = new Map(((_d = (_c = t.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), $ = d(Ge[0].elev);
        b.has($) || b.set($, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let w = 0;
        for (const x of r) {
          if (x < 1 || x >= Ge.length) continue;
          const f = d(Ge[x - 1].elev), h = d(Ge[x].elev);
          u.push([
            f,
            h
          ]), ue.add(u.length - 1), Fe.set(u.length - 1, x - 1), w++;
        }
        return t.nodes.val = i, t.elements.val = u, t.nodeInputs.val = {
          ...t.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = t.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${e}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(e, o, n, l, s) {
        var _a2;
        const c = Pe.findIndex((q) => q.label === e), a = Ce.findIndex((q) => q.label === o), i = Pe.findIndex((q) => q.label === n), u = Ce.findIndex((q) => q.label === l), d = Ge.findIndex((q) => q.label === s);
        if (c < 0 || a < 0 || i < 0 || u < 0) {
          console.log("Axis not found");
          return;
        }
        if (d < 1) {
          console.log(`Story "${s}" not found. Available: ${Ge.filter((q) => q.label !== "Base").map((q) => q.label)}`);
          return;
        }
        const r = Pe[c].coord, b = Ce[a].coord, $ = Pe[i].coord, w = Ce[u].coord, x = Ge[d].elev, f = [
          ...t.nodes.val
        ], h = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], S = (q, y, m) => {
          const p = f.findIndex((v) => Math.abs(v[0] - q) < 1e-3 && Math.abs(v[1] - y) < 1e-3 && Math.abs(v[2] - m) < 1e-3);
          return p >= 0 ? p : (f.push([
            q,
            y,
            m
          ]), f.length - 1);
        }, E = S(r, b, x), I = S($, w, x);
        return h.push([
          E,
          I
        ]), Ae.add(h.length - 1), Fe.set(h.length - 1, d - 1), t.nodes.val = f, t.elements.val = h, console.log(`Added beam ${e}-${o} \u2192 ${n}-${l} at ${s}`), h.length - 1;
      },
      addBrace(e, o, n, l, s, c) {
        var _a2;
        const a = Pe.findIndex((p) => p.label === e), i = Ce.findIndex((p) => p.label === o), u = Ge.findIndex((p) => p.label === n), d = Pe.findIndex((p) => p.label === l), r = Ce.findIndex((p) => p.label === s), b = Ge.findIndex((p) => p.label === c);
        if (a < 0 || i < 0 || u < 0) {
          console.log(`Point 1 not found: ${e}-${o}@${n}`);
          return;
        }
        if (d < 0 || r < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const $ = Pe[a].coord, w = Ce[i].coord, x = Ge[u].elev, f = Pe[d].coord, h = Ce[r].coord, S = Ge[b].elev, E = [
          ...t.nodes.val
        ], I = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], q = (p, v, M) => {
          const k = E.findIndex((P) => Math.abs(P[0] - p) < 1e-3 && Math.abs(P[1] - v) < 1e-3 && Math.abs(P[2] - M) < 1e-3);
          return k >= 0 ? k : (E.push([
            p,
            v,
            M
          ]), E.length - 1);
        }, y = q($, w, x), m = q(f, h, S);
        return I.push([
          y,
          m
        ]), Fe.set(I.length - 1, Math.min(u, b)), t.nodes.val = E, t.elements.val = I, console.log(`Added brace ${e}-${o}@${n} \u2192 ${l}-${s}@${c}`), I.length - 1;
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
      model3d(e) {
        We.clear();
        const o = (e == null ? void 0 : e.bx) || [
          5,
          5
        ], n = (e == null ? void 0 : e.bz) || [
          4,
          4
        ], l = (e == null ? void 0 : e.h) || [
          3.5,
          3,
          3
        ], s = (e == null ? void 0 : e.col) || "40x40", c = (e == null ? void 0 : e.viga) || "30x40", a = (e == null ? void 0 : e.fc) || 210, [i, u] = s.split("x").map((J) => parseFloat(J) / 100), [d, r] = c.split("x").map((J) => parseFloat(J) / 100), b = [
          0
        ];
        for (const J of o) b.push(b[b.length - 1] + J);
        const $ = [
          0
        ];
        for (const J of n) $.push($[$.length - 1] + J);
        const w = [
          0
        ];
        for (const J of l) w.push(w[w.length - 1] + J);
        const x = b.length, f = $.length, h = w.length, S = l.length, E = [], I = {};
        for (let J = 0; J < h; J++) for (let fe = 0; fe < f; fe++) for (let Ee = 0; Ee < x; Ee++) I[`${Ee},${J},${fe}`] = E.length, E.push([
          b[Ee],
          w[J],
          $[fe]
        ]);
        const q = [], y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
        for (let J = 0; J < S; J++) for (let fe = 0; fe < f; fe++) for (let Ee = 0; Ee < x; Ee++) {
          const ne = q.length;
          q.push([
            I[`${Ee},${J},${fe}`],
            I[`${Ee},${J + 1},${fe}`]
          ]), y.add(ne), p.set(ne, J);
        }
        for (let J = 1; J < h; J++) for (let fe = 0; fe < f; fe++) for (let Ee = 0; Ee < x - 1; Ee++) {
          const ne = q.length;
          q.push([
            I[`${Ee},${J},${fe}`],
            I[`${Ee + 1},${J},${fe}`]
          ]), m.add(ne), p.set(ne, J - 1);
        }
        for (let J = 1; J < h; J++) for (let fe = 0; fe < x; fe++) for (let Ee = 0; Ee < f - 1; Ee++) {
          const ne = q.length;
          q.push([
            I[`${fe},${J},${Ee}`],
            I[`${fe},${J},${Ee + 1}`]
          ]), m.add(ne), p.set(ne, J - 1);
        }
        const M = 15100 * Math.sqrt(a) * 10, k = M / (2 * (1 + 0.2)), P = i * u, C = i * u ** 3 / 12, T = u * i ** 3 / 12, O = i * u * (i ** 2 + u ** 2) / 12, F = d * r, Z = d * r ** 3 / 12, K = r * d ** 3 / 12, re = d * r * (d ** 2 + r ** 2) / 12, ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
        for (let J = 0; J < q.length; J++) ae.set(J, M), Q.set(J, k), y.has(J) ? (ce.set(J, P), Me.set(J, C), Oe.set(J, T), Re.set(J, O), H.set(J, {
          type: "rect",
          b: i,
          h: u,
          name: `COL${s}`
        })) : (ce.set(J, F), Me.set(J, Z), Oe.set(J, K), Re.set(J, re), H.set(J, {
          type: "rect",
          b: d,
          h: r,
          name: `V${c}`
        }));
        const de = /* @__PURE__ */ new Map();
        for (let J = 0; J < f; J++) for (let fe = 0; fe < x; fe++) de.set(I[`${fe},0,${J}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        t.nodes.val = E, t.elements.val = q, t.nodeInputs.val = {
          supports: de,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: ae,
          shearModuli: Q,
          areas: ce,
          momentsOfInertiaZ: Me,
          momentsOfInertiaY: Oe,
          torsionalConstants: Re,
          sectionShapes: H
        }, ue = y, Ae = m, Fe = p, Pe = b.map((J, fe) => ({
          label: String.fromCharCode(65 + fe),
          coord: J
        })), Ce = $.map((J, fe) => ({
          label: `${fe + 1}`,
          coord: J
        })), Qe = w[w.length - 1], Oo(Pe.map((J) => J.coord), Ce.map((J) => J.coord), Qe, Pe.map((J) => J.label), Ce.map((J) => J.label));
        {
          const J = w.map((fe, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? fe - w[Ee - 1] : 0,
            elev: fe
          }));
          an(J, b, $);
        }
        const ie = $e.querySelector("#cad3d-axis-buttons");
        if (ie) {
          ie.style.display = "flex";
          const J = Pe.map((Ee) => Ee.label), fe = Ce.map((Ee) => Ee.label);
          ie.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of J) ie.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          ie.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of fe) ie.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const ee = $e.querySelector("#cad3d-floor-buttons");
        if (ee) {
          ee.style.display = "flex", ee.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let J = 0; J < S; J++) ee.innerHTML += `<button class="floor-btn" data-floor="${J}">P${J + 1}</button>`;
        }
        return qt(b, $, w), Je(), console.log(`Model3D: ${E.length}n ${q.length}e | ${x}x${f} grid, ${S} floors | COL${s} V${c} f'c=${a}`), {
          nodes: E.length,
          elements: q.length,
          columns: y.size,
          beams: m.size
        };
      },
      clear() {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs && (t.nodeInputs.val = {}), t.elementInputs && (t.elementInputs.val = {}), ue = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Pe = [], Ce = [], Qe = 0, Bn(), Dn(), Ct();
        const e = $e.querySelector("#cad3d-axis-buttons");
        e && (e.style.display = "none", e.innerHTML = ""), console.log("Model cleared"), Je();
      },
      frame(e, o, n = 0, l = 0) {
        We.clear();
        const s = [];
        n > 0 && s.push(-n);
        let c = 0;
        s.push(c);
        for (const x of e) c += x, s.push(c);
        l > 0 && s.push(c + l);
        const a = [
          0
        ];
        let i = 0;
        for (const x of o) i += x, a.push(i);
        const u = (x) => n > 0 && x === 0 || l > 0 && x === s.length - 1, d = {}, r = [];
        for (let x = 0; x < a.length; x++) for (let f = 0; f < s.length; f++) x === 0 && u(f) || (d[`${f},${x}`] = r.length, r.push([
          s[f],
          0,
          a[x]
        ]));
        const b = [];
        ue = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let f = 0; f < s.length; f++) u(f) || (ue.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let f = 0; f < s.length - 1; f++) Ae.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f + 1},${x}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), w = ot();
        for (let x = 0; x < s.length; x++) {
          if (u(x)) continue;
          const f = `${x},0`;
          d[f] !== void 0 && $.set(d[f], [
            ...w
          ]);
        }
        return t.nodes.val = r, t.elements.val = b, t.nodeInputs && (t.nodeInputs.val = {
          supports: $
        }), Pe = [
          ...s
        ], Ce = [
          0
        ], Qe = a[a.length - 1] || 0, setTimeout(() => {
          Et(), Oo(s, [
            0
          ]), yn(), $n();
        }, 50), Je(), {
          nodes: r.length,
          elements: b.length
        };
      },
      building(e, o, n, l = 3, s = 0, c = 0, a = 0, i = 0, u = 1) {
        We.clear();
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const p of e) d.push(d[d.length - 1] + p);
        c > 0 && d.push(d[d.length - 1] + c);
        const r = [];
        a > 0 && r.push(-a), r.push(0);
        for (const p of o) r.push(r[r.length - 1] + p);
        i > 0 && r.push(r[r.length - 1] + i);
        const b = [
          0
        ];
        for (const p of n) b.push(b[b.length - 1] + p);
        const $ = (p) => s > 0 && p === 0 || c > 0 && p === d.length - 1, w = (p) => a > 0 && p === 0 || i > 0 && p === r.length - 1, x = (p, v) => $(p) || w(v), f = [], h = {};
        for (let p = 0; p < b.length; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length; M++) p === 0 && x(M, v) || (h[`${M},${v},${p}`] = f.length, f.push([
          d[M],
          r[v],
          b[p]
        ]));
        const S = f.length, E = [];
        ue = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map();
        const I = [];
        for (let p = 0; p < b.length - 1; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length; M++) x(M, v) || I.push({
          el: [
            h[`${M},${v},${p}`],
            h[`${M},${v},${p + 1}`]
          ],
          floor: p
        });
        for (const { el: [p, v], floor: M } of I) {
          if (u <= 1) {
            ue.add(E.length), Fe.set(E.length, M), E.push([
              p,
              v
            ]);
            continue;
          }
          const k = f[p], P = f[v];
          let C = p;
          for (let T = 1; T < u; T++) {
            const O = T / u, F = f.length;
            f.push([
              k[0] + (P[0] - k[0]) * O,
              k[1] + (P[1] - k[1]) * O,
              k[2] + (P[2] - k[2]) * O
            ]), ue.add(E.length), Fe.set(E.length, M), E.push([
              C,
              F
            ]), C = F;
          }
          ue.add(E.length), Fe.set(E.length, M), E.push([
            C,
            v
          ]);
        }
        Ve = /* @__PURE__ */ new Map();
        const q = [];
        for (let p = 1; p < b.length; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length - 1; M++) q.push({
          el: [
            h[`${M},${v},${p}`],
            h[`${M + 1},${v},${p}`]
          ],
          floor: p - 1,
          dir: "x",
          bay: M
        });
        for (let p = 1; p < b.length; p++) for (let v = 0; v < d.length; v++) for (let M = 0; M < r.length - 1; M++) q.push({
          el: [
            h[`${v},${M},${p}`],
            h[`${v},${M + 1},${p}`]
          ],
          floor: p - 1,
          dir: "y",
          bay: M
        });
        for (const { el: [p, v], floor: M, dir: k, bay: P } of q) {
          const C = f[p], T = f[v];
          let O = p;
          for (let Z = 1; Z < l; Z++) {
            const K = Z / l, re = f.length;
            f.push([
              C[0] + (T[0] - C[0]) * K,
              C[1] + (T[1] - C[1]) * K,
              C[2] + (T[2] - C[2]) * K
            ]);
            const ae = E.length;
            Ae.add(ae), Fe.set(ae, M), Ve.set(ae, {
              dir: k,
              bay: P
            }), E.push([
              O,
              re
            ]), O = re;
          }
          const F = E.length;
          Ae.add(F), Fe.set(F, M), Ve.set(F, {
            dir: k,
            bay: P
          }), E.push([
            O,
            v
          ]);
        }
        if (et = /* @__PURE__ */ new Set(), pe && qe > 0) {
          const p = (v, M, k) => {
            for (let C = 0; C < f.length; C++) if (Math.abs(f[C][0] - v) < 1e-6 && Math.abs(f[C][1] - M) < 1e-6 && Math.abs(f[C][2] - k) < 1e-6) return C;
            const P = f.length;
            return f.push([
              v,
              M,
              k
            ]), P;
          };
          for (let v = 1; v < b.length; v++) if (He === "x") for (let M = 0; M < r.length - 1; M++) {
            const k = r[M], P = r[M + 1];
            for (let C = 1; C <= qe; C++) {
              const T = k + C / (qe + 1) * (P - k), O = [];
              for (let F = 0; F < d.length; F++) O.push(p(d[F], T, b[v]));
              for (let F = 0; F < d.length - 1; F++) {
                const Z = E.length;
                et.add(Z), Ae.add(Z), Fe.set(Z, v - 1), Ve.set(Z, {
                  dir: "x",
                  bay: F
                }), E.push([
                  O[F],
                  O[F + 1]
                ]);
              }
            }
          }
          else for (let M = 0; M < d.length - 1; M++) {
            const k = d[M], P = d[M + 1];
            for (let C = 1; C <= qe; C++) {
              const T = k + C / (qe + 1) * (P - k), O = [];
              for (let F = 0; F < r.length; F++) O.push(p(T, r[F], b[v]));
              for (let F = 0; F < r.length - 1; F++) {
                const Z = E.length;
                et.add(Z), Ae.add(Z), Fe.set(Z, v - 1), Ve.set(Z, {
                  dir: "y",
                  bay: F
                }), E.push([
                  O[F],
                  O[F + 1]
                ]);
              }
            }
          }
        }
        const y = /* @__PURE__ */ new Map(), m = ot();
        for (let p = 0; p < r.length; p++) for (let v = 0; v < d.length; v++) x(v, p) || y.set(h[`${v},${p},0`], [
          ...m
        ]);
        Be = /* @__PURE__ */ new Set();
        for (const p of Ye) {
          const v = b.length - 1, M = p.floors.includes(-1) ? Array.from({
            length: v
          }, (k, P) => P) : p.floors.filter((k) => k < v);
          for (const k of M) {
            let P, C, T, O;
            p.dir === "x" ? (P = p.bay, T = p.bay + 1, C = p.axisIdx, O = p.axisIdx) : (P = p.axisIdx, T = p.axisIdx, C = p.bay, O = p.bay + 1);
            const F = h[`${P},${C},${k}`], Z = h[`${P},${C},${k + 1}`];
            let K, re;
            if (p.dir === "x" ? (K = h[`${T},${O},${k}`], re = h[`${T},${O},${k + 1}`]) : (K = h[`${T},${O},${k}`], re = h[`${T},${O},${k + 1}`]), F === void 0 || K === void 0 || Z === void 0 || re === void 0) continue;
            const ae = vt, Q = bt, ce = f[F], Me = f[K], Oe = f[Z], Re = f[re], H = [];
            for (let de = 0; de <= Q; de++) {
              const ie = [], ee = de / Q;
              for (let J = 0; J <= ae; J++) {
                const fe = J / ae, Ee = (1 - ee) * ((1 - fe) * ce[0] + fe * Me[0]) + ee * ((1 - fe) * Oe[0] + fe * Re[0]), ne = (1 - ee) * ((1 - fe) * ce[1] + fe * Me[1]) + ee * ((1 - fe) * Oe[1] + fe * Re[1]), Te = (1 - ee) * ((1 - fe) * ce[2] + fe * Me[2]) + ee * ((1 - fe) * Oe[2] + fe * Re[2]);
                de === 0 && J === 0 ? ie.push(F) : de === 0 && J === ae ? ie.push(K) : de === Q && J === 0 ? ie.push(Z) : de === Q && J === ae ? ie.push(re) : (ie.push(f.length), f.push([
                  Ee,
                  ne,
                  Te
                ]));
              }
              H.push(ie);
            }
            for (let de = 0; de < Q; de++) for (let ie = 0; ie < ae; ie++) {
              const ee = H[de][ie], J = H[de][ie + 1], fe = H[de + 1][ie + 1], Ee = H[de + 1][ie], ne = E.length;
              Be.add(ne), Fe.set(ne, k), E.push([
                ee,
                J,
                fe,
                Ee
              ]);
            }
            if (k === 0) for (let de = 0; de <= ae; de++) {
              const ie = H[0][de];
              ie >= S && y.set(ie, [
                ...m
              ]);
            }
          }
        }
        if (yt = /* @__PURE__ */ new Set(), Ze) {
          const p = l, v = l, M = /* @__PURE__ */ new Map(), k = (P, C, T) => `${Math.round(P * 1e4)},${Math.round(C * 1e4)},${Math.round(T * 1e4)}`;
          for (let P = 0; P < f.length; P++) M.set(k(f[P][0], f[P][1], f[P][2]), P);
          for (let P = 1; P < b.length; P++) {
            const C = b[P];
            for (let T = 0; T < d.length - 1; T++) for (let O = 0; O < r.length - 1; O++) {
              const F = d[T], Z = d[T + 1], K = r[O], re = r[O + 1], ae = [];
              for (let Q = 0; Q <= v; Q++) {
                const ce = [];
                for (let Me = 0; Me <= p; Me++) {
                  const Oe = F + Me / p * (Z - F), Re = K + Q / v * (re - K);
                  if (Q === 0 && Me === 0) ce.push(h[`${T},${O},${P}`]);
                  else if (Q === 0 && Me === p) ce.push(h[`${T + 1},${O},${P}`]);
                  else if (Q === v && Me === 0) ce.push(h[`${T},${O + 1},${P}`]);
                  else if (Q === v && Me === p) ce.push(h[`${T + 1},${O + 1},${P}`]);
                  else {
                    const H = k(Oe, Re, C), de = M.get(H);
                    if (de !== void 0) ce.push(de);
                    else {
                      const ie = f.length;
                      f.push([
                        Oe,
                        Re,
                        C
                      ]), M.set(H, ie), ce.push(ie);
                    }
                  }
                }
                ae.push(ce);
              }
              for (let Q = 0; Q < v; Q++) for (let ce = 0; ce < p; ce++) {
                const Me = ae[Q][ce], Oe = ae[Q][ce + 1], Re = ae[Q + 1][ce + 1], H = ae[Q + 1][ce], de = E.length;
                yt.add(de), Fe.set(de, P - 1), E.push([
                  Me,
                  Oe,
                  Re,
                  H
                ]);
              }
            }
          }
        }
        if (It && lt) {
          const p = lt === "all" || lt === "x" || lt === "perimeter", v = lt === "all" || lt === "y" || lt === "perimeter", M = b.length - 1;
          for (let k = 0; k < M; k++) {
            if (p) for (let P = 0; P < r.length; P++) {
              if (lt === "perimeter" && P !== 0 && P !== r.length - 1) continue;
              const C = Math.floor((d.length - 1) / 2);
              for (let T = 0; T < d.length - 1; T++) {
                if (lt === "perimeter" && T !== C || x(T, P) || x(T + 1, P)) continue;
                const O = h[`${T},${P},${k}`], F = h[`${T + 1},${P},${k + 1}`], Z = h[`${T + 1},${P},${k}`], K = h[`${T},${P},${k + 1}`];
                O !== void 0 && F !== void 0 && (E.push([
                  O,
                  F
                ]), Fe.set(E.length - 1, k)), Z !== void 0 && K !== void 0 && (E.push([
                  Z,
                  K
                ]), Fe.set(E.length - 1, k));
              }
            }
            if (v) for (let P = 0; P < d.length; P++) {
              if (lt === "perimeter" && P !== 0 && P !== d.length - 1) continue;
              const C = Math.floor((r.length - 1) / 2);
              for (let T = 0; T < r.length - 1; T++) {
                if (lt === "perimeter" && T !== C || x(P, T) || x(P, T + 1)) continue;
                const O = h[`${P},${T},${k}`], F = h[`${P},${T + 1},${k + 1}`], Z = h[`${P},${T + 1},${k}`], K = h[`${P},${T},${k + 1}`];
                O !== void 0 && F !== void 0 && (E.push([
                  O,
                  F
                ]), Fe.set(E.length - 1, k)), Z !== void 0 && K !== void 0 && (E.push([
                  Z,
                  K
                ]), Fe.set(E.length - 1, k));
              }
            }
          }
        }
        return t.nodes.val = f, t.elements.val = E, t.nodeInputs && (t.nodeInputs.val = {
          supports: y
        }), Pe = [
          ...d
        ], Ce = [
          ...r
        ], Qe = b[b.length - 1] || 0, setTimeout(() => {
          Et(), Oo(d, r), yn(), $n();
        }, 50), Je(), {
          nodes: f.length,
          elements: E.length,
          nJointNodes: S
        };
      },
      galpon(e = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        We.clear();
        const a = [], i = [], u = (w) => n + l * (1 - Math.pow(2 * w / e - 1, 2)), d = [], r = c + 1;
        for (let w = 0; w < r; w++) {
          const x = [], f = o / c * w;
          x.push(a.length), a.push([
            0,
            f,
            0
          ]), x.push(a.length), a.push([
            e,
            f,
            0
          ]), x.push(a.length), a.push([
            0,
            f,
            n
          ]);
          for (let h = 1; h < s; h++) {
            const S = e / s * h;
            x.push(a.length), a.push([
              S,
              f,
              u(S)
            ]);
          }
          x.push(a.length), a.push([
            e,
            f,
            n
          ]), d.push(x);
        }
        for (let w = 0; w < r; w++) {
          const x = d[w];
          i.push([
            x[0],
            x[2]
          ]), i.push([
            x[1],
            x[x.length - 1]
          ]);
          for (let f = 2; f < x.length - 1; f++) i.push([
            x[f],
            x[f + 1]
          ]);
        }
        for (let w = 0; w < c; w++) for (let x = 2; x < d[0].length; x++) i.push([
          d[w][x],
          d[w + 1][x]
        ]);
        for (let w = 0; w < c; w++) for (let x = 2; x < d[0].length - 1; x += 2) i.push([
          d[w][x],
          d[w + 1][x + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), $ = ot();
        for (let w = 0; w < r; w++) b.set(d[w][0], [
          ...$
        ]), b.set(d[w][1], [
          ...$
        ]);
        return t.nodes.val = a, t.elements.val = i, t.nodeInputs && (t.nodeInputs.val = {
          supports: b
        }), Je(), {
          nodes: a.length,
          elements: i.length
        };
      },
      example(e) {
        var _a2, _b, _c, _d;
        if (!e) {
          console.log("Ejemplos: truss, beams, 3d, portico, edificio, galpon");
          return;
        }
        switch (e) {
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
            Xe("frame"), ye();
            break;
          }
          case "edificio": {
            Xe("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, Ye = [], Ze = false, pe = false, It = false, ye();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Xe("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Ye = [], pe = true, qe = 2;
            const o = oe.reduce((l, s) => l + s, 0) / oe.length, n = le.reduce((l, s) => l + s, 0) / le.length;
            He = o >= n ? "y" : "x", Ze = true, De = 0.08, It = false, ye();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Xe("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Ye = [], pe = true, qe = 2;
            const o = oe.reduce((l, s) => l + s, 0) / oe.length, n = le.reduce((l, s) => l + s, 0) / le.length;
            He = o >= n ? "y" : "x", Ze = true, De = 0.08, It = true, lt = "perimeter", ye();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Xe("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, pe = false;
            const o = Math.round(((_a2 = te.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = te.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], Ze = true, De = 0.15, ye();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Xe("edificio"), ke.colMat = 2, ke.vigaMat = 0, pe = false;
            const o = Math.round(((_c = te.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = te.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            ], Ze = true, De = 0.12, ye();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Xe("edificio"), te.nPisos && (te.nPisos.val = 1), te.hPiso && (te.hPiso.val = 4.5), te.nVanosX && (te.nVanosX.val = 3), te.nVanosY && (te.nVanosY.val = 2), te.nSubViga && (te.nSubViga.val = 3), oe = [
              6,
              6,
              6
            ], le = [
              5,
              5
            ], ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, Ye = [], pe = true, qe = 2, He = oe[0] >= le[0] ? "y" : "x", Ze = true, De = 0.08, rt = 3, at = 3, ye();
            break;
          }
          case "galpon": {
            Xe("galpon"), ye();
            break;
          }
          case "barra": {
            Xe("barra"), ye();
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
            We.clear(), Xe("placa-q4"), Kn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            We.clear(), Xe("losa-rect"), Un();
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
            We.clear(), Xe("puente"), ws();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            We.clear(), Xe("twisted"), Ms();
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
            console.error(`Ejemplo desconocido: "${e}".`);
        }
      },
      plateQ4(e = 10, o = 10, n = 16, l = 16, s = "simply-supported", c = -10, a = 0.2, i = 3e7, u = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${e}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${c}, t=${a}`);
        const b = performance.now(), $ = Fn({
          E: i,
          nu: u,
          thickness: a,
          meshLx: e,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: c,
          theoryType: d
        }), w = performance.now() - b;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${$.maxW.toExponential(6)}`), console.log(`w_center = ${($.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${$.maxMxx.toExponential(4)}, Myy_max = ${$.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${$.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${$.maxQx.toExponential(4)}, Qy_max = ${$.maxQy.toExponential(4)}`);
        const x = $.nodeResults.map((I) => [
          I.x,
          I.y,
          0
        ]), f = $.elementResults.map((I) => [
          ...I.nodes
        ]);
        t.nodes.val = x, t.elements.val = f;
        const h = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((I, q) => {
          h.set(q, [
            0,
            0,
            I.w,
            I.bx,
            I.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: h
        });
        const S = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((I, q) => {
          (I.x < 1e-10 || I.x > e - 1e-10 || I.y < 1e-10 || I.y > o - 1e-10) && S.set(q, [
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
          const I = c * e * o / x.length;
          x.forEach((q, y) => {
            S.has(y) || E.set(y, [
              0,
              0,
              I,
              0,
              0,
              0
            ]);
          });
        }
        if (t.nodeInputs && (t.nodeInputs.val = {
          supports: S,
          loads: E
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
          const I = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
          $.elementResults.forEach((m, p) => {
            I.set(p, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), q.set(p, [
              m.Myy,
              m.Myy,
              m.Myy
            ]), y.set(p, [
              m.Mxy,
              m.Mxy,
              m.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: I,
            bendingYY: q,
            bendingXY: y
          };
        }
        return setTimeout(() => Et(), 50), Je(), $;
      },
      set(e, o) {
        te[e] ? (te[e].val = o, console.log(`${e} = ${o}`), Jt(), ye()) : nt[e] ? (nt[e].val = o, console.log(`${e} = ${o}`), Jt(), ye()) : console.error(`Par\xE1metro "${e}" no encontrado. Disponibles: ${Object.keys({
          ...te,
          ...nt
        }).join(", ")}`);
      },
      get(e) {
        if (!e) {
          const o = {};
          for (const l in te) o[l] = te[l].val;
          for (const l in nt) o[l] = nt[l].val;
          o.plateTheory = ht, o.supportType = Mt;
          const n = Uo()[L];
          return n && n[Mt] && (o.supportLabel = n[Mt].label), console.table(o), o;
        }
        if (te[e]) return te[e].val;
        if (nt[e]) return nt[e].val;
        console.error(`Par\xE1metro "${e}" no encontrado.`);
      },
      setTheory(e) {
        typeof e == "string" && (e = {
          membrana: 1,
          membrane: 1,
          kirchhoff: 2,
          delgada: 2,
          thin: 2,
          mindlin: 3,
          gruesa: 3,
          thick: 3
        }[e.toLowerCase()] || 3), ht = e, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[ht] || ht}`), L.includes("placa") && (Jt(), ye());
      },
      setBc(e) {
        const o = Uo()[L];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof e == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(e.toLowerCase()));
          e = n >= 0 ? n : 0;
        }
        Mt = e, Mt >= o.length && (Mt = 0), console.log(`Apoyo: ${o[Mt].label} \u2192 DOFs: [${o[Mt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Jt(), ye();
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
      units(e, o) {
        e && (g = e), o && (R = o), z = vo(g, R);
        const n = $e.querySelector("#cad3d-force-unit"), l = $e.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = R), L && Xe(L), console.log(`Unidades: ${z.label} | E=${z.E.toExponential(3)} ${z.stress}`), z.id;
      },
      view(e) {
      },
      get mesh() {
        return t;
      }
    };
    function Wn() {
      return Sa(z);
    }
    function Yn() {
      return Ea(z);
    }
    let nt = {};
    function Xe(e) {
      var _a2, _b;
      L = e, Cs.val = true, Mt = 0, Le && bn(), te = {};
      const o = Wn()[e];
      if (o) for (const l of o) te[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      nt = {};
      const n = Yn()[e];
      if (n) for (const l of n) nt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (e === "edificio") {
        const l = Math.round(((_a2 = te.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = te.nVanosY) == null ? void 0 : _b.val) ?? 2);
        oe = Array(l).fill(z.defaultSpan), le = Array(s).fill(z.defaultSpan * 0.8);
      }
      Jt(), setTimeout(() => {
        Ds(), ye();
      }, 50);
    }
    function Y(e) {
      var _a2, _b;
      return ((_a2 = te[e]) == null ? void 0 : _a2.val) ?? ((_b = nt[e]) == null ? void 0 : _b.val) ?? 0;
    }
    function ye() {
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
          const o = Math.round(Y("nVanos")), n = Y("spanV"), l = Math.round(Y("nPisos")), s = Y("hPiso");
          We.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(Y("nPisos")), n = Y("hPiso"), l = Y("Lvix") || 0, s = Y("Lvdx") || 0, c = Y("Lviy") || 0, a = Y("Lvdy") || 0, i = Math.max(1, Math.round(Y("nSubViga") || 3)), u = Math.max(1, Math.round(Y("nSubCol") || 1));
          We.building([
            ...oe
          ], [
            ...le
          ], Array(o).fill(n), i, l, s, c, a, u);
          break;
        }
        case "galpon":
          We.galpon(Y("span"), Y("length"), Y("height"), Y("archRise"), Math.round(Y("xDiv")), Math.round(Y("yDiv")));
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
      if ((L === "frame" || L === "edificio" || L === "galpon") && t.nodeInputs) {
        const o = t.nodeInputs.val;
        o.supports && (t.nodeInputs.val = {
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
        if (V.size > 0 || W.size > 0 || j) {
          const o = t.elements.val, n = o.filter((l, s) => !(V.has(s) || W.has(s) || j && !D.has(s)));
          n.length !== o.length && (t.elements.val = n);
        }
        setTimeout(() => {
          no(), hn();
        }, 30);
      }
    }
    function Gn() {
      const e = Y("span"), o = Math.round(Y("divisions")), n = Y("height"), l = e / o, s = [], c = [];
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
      for (let r = 0; r < o; r++) c.push([
        r,
        r + 1
      ]);
      for (let r = 0; r < o; r++) c.push([
        a + r,
        a + r + 1
      ]);
      for (let r = 0; r <= o; r++) c.push([
        r,
        a + r
      ]);
      for (let r = 0; r < o; r++) r < o / 2 ? c.push([
        r,
        a + r + 1
      ]) : c.push([
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
      ]), u = (Y("CM") ?? 0) + (Y("CV") ?? 0), d = /* @__PURE__ */ new Map();
      if (u !== 0) for (let r = 0; r <= o; r++) d.set(r, [
        0,
        0,
        u,
        0,
        0,
        0
      ]);
      t.nodes.val = s, t.elements.val = c, t.nodeInputs && (t.nodeInputs.val = {
        supports: i,
        loads: d
      }), Je();
    }
    function Jn() {
      const e = Y("width"), o = Y("height"), n = Y("Ex") ?? 0, l = (Y("CM") ?? 0) + (Y("CV") ?? 0), s = Math.max(1, Math.round(Y("nSub") || 4)), c = [
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
          e,
          0,
          o
        ],
        [
          e,
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
      ], u = [
        e,
        0,
        o
      ];
      let d = 1;
      for (let b = 1; b < s; b++) {
        const $ = b / s, w = c.length;
        c.push([
          i[0] + (u[0] - i[0]) * $,
          i[1] + (u[1] - i[1]) * $,
          i[2] + (u[2] - i[2]) * $
        ]), a.push([
          d,
          w
        ]), d = w;
      }
      a.push([
        d,
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
      else if (l !== 0 && n === 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || r.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let b = 1; b < c.length; b++) b === 0 || b === 3 || r.set(b, [
        b === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      t.nodes.val = c, t.elements.val = a, t.nodeInputs && (t.nodeInputs.val = {
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
      }), Je();
    }
    function Vn() {
      const e = Y("dx"), o = Y("dy"), n = Y("dz"), l = Math.round(Y("stories")), s = Math.max(1, Math.round(Y("nSub") || 3)), c = [];
      for (let f = 0; f <= l; f++) c.push([
        0,
        0,
        n * f
      ], [
        e,
        0,
        n * f
      ], [
        e,
        o,
        n * f
      ], [
        0,
        o,
        n * f
      ]);
      const a = c.length, i = [
        ...c
      ], u = [];
      for (let f = 0; f < l; f++) for (let h = 0; h < 4; h++) u.push([
        f * 4 + h,
        (f + 1) * 4 + h
      ]);
      for (let f = 0; f < l; f++) {
        const h = f * 4;
        u.push([
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
      for (let f = 1; f <= l; f++) {
        const h = f * 4;
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
      for (const [f, h] of d) {
        const S = c[f], E = c[h];
        let I = f;
        for (let q = 1; q < s; q++) {
          const y = q / s, m = i.length;
          i.push([
            S[0] + (E[0] - S[0]) * y,
            S[1] + (E[1] - S[1]) * y,
            S[2] + (E[2] - S[2]) * y
          ]), u.push([
            I,
            m
          ]), I = m;
        }
        u.push([
          I,
          h
        ]);
      }
      const r = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) r.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = Y("Ex") ?? 0, $ = (Y("CM") ?? 0) + (Y("CV") ?? 0), w = a - 2, x = /* @__PURE__ */ new Map();
      if (b !== 0 && $ === 0) x.set(w, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if ($ !== 0 && b === 0) for (let f = 0; f < i.length; f++) r.has(f) || x.set(f, [
        0,
        0,
        $,
        0,
        0,
        0
      ]);
      else if (b !== 0 && $ !== 0) for (let f = 0; f < i.length; f++) r.has(f) || x.set(f, [
        f === w ? b : 0,
        0,
        $,
        0,
        0,
        0
      ]);
      t.nodes.val = i, t.elements.val = u, t.nodeInputs && (t.nodeInputs.val = {
        supports: r,
        loads: x
      }), Je();
    }
    function Fs() {
      const e = Y("L"), o = Math.round(Y("nElem")), n = Y("F"), l = e / o, s = [], c = [];
      for (let u = 0; u <= o; u++) s.push([
        l * u,
        0,
        0
      ]);
      for (let u = 0; u < o; u++) c.push([
        u,
        u + 1
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
      t.nodes.val = s, t.elements.val = c, t.nodeInputs && (t.nodeInputs.val = {
        supports: a,
        loads: i
      }), Je();
    }
    function Xn() {
      const e = Y("Lx") || 15, o = Y("Ly") || 10, n = Y("meshSize") || 0.5, l = Y("q") || -3, s = Y("t") || 1, c = Y("E") || 3e7, a = Y("nu") || 0.3, i = c / (2 * (1 + a)), u = ht === 1 ? "Membrana" : ht === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: r, boundaryIndices: b } = to({
        points: [
          [
            0,
            0,
            0
          ],
          [
            e,
            0,
            0
          ],
          [
            e,
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
      }), $ = e * o, w = l * $ / d.length, x = new Map(b.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(d.map((h, S) => [
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
      t.nodes.val = d, t.elements.val = r, t.nodeInputs && (t.nodeInputs.val = {
        supports: x,
        loads: f
      }), t.elementInputs && (t.elementInputs.val = {
        elasticities: new Map(r.map((h, S) => [
          S,
          c
        ])),
        elasticitiesOrthogonal: new Map(r.map((h, S) => [
          S,
          c
        ])),
        thicknesses: new Map(r.map((h, S) => [
          S,
          s
        ])),
        poissonsRatios: new Map(r.map((h, S) => [
          S,
          a
        ])),
        shearModuli: new Map(r.map((h, S) => [
          S,
          i
        ]))
      });
      try {
        const h = Bt(d, r, t.nodeInputs.val, t.elementInputs.val);
        h && t.deformOutputs && (t.deformOutputs.val = h);
        const S = Co(d, r, t.elementInputs.val, h);
        S && t.analyzeOutputs && (t.analyzeOutputs.val = S), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${r.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function Kn() {
      const e = Y("Lx") || 10, o = Y("Ly") || 10, n = Math.round(Y("nx") || 16), l = Math.round(Y("ny") || 16), s = Y("t") || 0.2, c = Y("q") || -10, a = Y("E") || 3e7, i = Y("nu") || 0.3, u = Mt === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 0;
      return We.plateQ4(e, o, n, l, u, c, s, a, i, r);
    }
    function Un() {
      const e = Y("a") || 6, o = Y("b") || 4, n = Math.round(Y("nx") || 12), l = Math.round(Y("ny") || 8), s = Y("t") || 0.1, c = Y("q") || -10, a = Y("E") || 35e6, i = Y("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 0, r = We.plateQ4(e, o, n, l, "simply-supported", c, s, a, i, d), b = a * s * s * s / (12 * (1 - i * i));
      let $ = 0;
      for (let w = 1; w <= 19; w += 2) for (let x = 1; x <= 19; x += 2) {
        const f = w * w / (e * e) + x * x / (o * o);
        $ += 1 / (w * x * f * f);
      }
      if ($ *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${$.toExponential(6)}`), r) {
        const w = Math.abs((Math.abs(r.centerW || 0) - $) / $ * 100);
        console.log(`   WASM w_center = ${(r.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return r;
    }
    function Zn() {
      const e = Y("t") || 0.2, o = Y("q") || -10, n = Y("E") || 35e6, l = Y("nu") || 0.2, s = Y("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = c.reduce((C, T) => C + T, 0), u = a.reduce((C, T) => C + T, 0), d = [
        0
      ];
      for (const C of c) d.push(d[d.length - 1] + C);
      const r = [
        0
      ];
      for (const C of a) r.push(r[r.length - 1] + C);
      const b = Math.max(2, Math.round(i / s)), $ = Math.max(2, Math.round(u / s)), w = i / b, x = u / $, f = [];
      for (let C = 0; C <= $; C++) for (let T = 0; T <= b; T++) f.push([
        T * w,
        C * x
      ]);
      const h = [], S = /* @__PURE__ */ new Set();
      for (const C of d) for (const T of r) {
        let O = 1 / 0, F = 0;
        for (let Z = 0; Z < f.length; Z++) {
          const K = Math.hypot(f[Z][0] - C, f[Z][1] - T);
          K < O && (O = K, F = Z);
        }
        S.has(F) || (S.add(F), h.push({
          node: F,
          dof: 0,
          k: 1e15
        }));
      }
      const I = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][I]}]: ${i}\xD7${u}m, ${b}\xD7${$} elem, ${S.size} columnas`);
      const q = performance.now(), y = Fn({
        E: n,
        nu: l,
        thickness: e,
        meshLx: i,
        meshLy: u,
        meshNx: b,
        meshNy: $,
        bcType: "none",
        pressure: o,
        theoryType: I,
        springs: h
      }), m = performance.now() - q;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${y.maxW.toExponential(4)}`);
      const p = y.nodeResults.map((C) => [
        C.x,
        C.y,
        0
      ]), v = y.elementResults.map((C) => [
        ...C.nodes
      ]);
      t.nodes.val = p, t.elements.val = v;
      const M = /* @__PURE__ */ new Map();
      y.nodeResults.forEach((C, T) => {
        M.set(T, [
          0,
          0,
          C.w,
          C.bx,
          C.by,
          0
        ]);
      }), t.deformOutputs && (t.deformOutputs.val = {
        deformations: M
      });
      const k = /* @__PURE__ */ new Map();
      for (const C of S) k.set(C, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const P = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const C = o * i * u / p.length;
        p.forEach((T, O) => {
          k.has(O) || P.set(O, [
            0,
            0,
            C,
            0,
            0,
            0
          ]);
        });
      }
      if (t.nodeInputs && (t.nodeInputs.val = {
        supports: k,
        loads: P
      }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
        const C = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
        y.elementResults.forEach((F, Z) => {
          C.set(Z, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), T.set(Z, [
            F.Myy,
            F.Myy,
            F.Myy
          ]), O.set(Z, [
            F.Mxy,
            F.Mxy,
            F.Mxy
          ]);
        }), t.analyzeOutputs.val = {
          bendingXX: C,
          bendingYY: T,
          bendingXY: O
        };
      }
      setTimeout(() => Et(), 50), Je();
    }
    function Qn() {
      const e = Y("L") || 4, o = Y("H") || 2, n = Y("t") || 0.1, l = Y("E") || 2e7, s = Y("nu") || 0.2, c = l / (2 * (1 + s)), a = Y("q") || -100, i = Y("b") || 0.8, u = Y("meshSize") || 0.2, { nodes: d, elements: r, boundaryIndices: b } = to({
        points: [
          [
            0,
            0,
            0
          ],
          [
            e,
            0,
            0
          ],
          [
            e,
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
        maxMeshSize: u
      }), $ = d, w = 0.4, x = /* @__PURE__ */ new Map();
      for (let m = 0; m < $.length; m++) {
        const p = $[m][0], v = $[m][1];
        Math.abs(v) < 1e-6 && (p <= w + 1e-6 || p >= e - w - 1e-6) && x.set(m, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (e - i) / 2, h = f + i, S = [];
      for (let m = 0; m < $.length; m++) if (Math.abs($[m][1] - o) < 1e-6) {
        const p = $[m][0];
        p >= f - 1e-6 && p <= h + 1e-6 && S.push(m);
      }
      const E = a * i / Math.max(S.length, 1), I = /* @__PURE__ */ new Map();
      for (const m of S) I.set(m, [
        0,
        E,
        0,
        0,
        0,
        0
      ]);
      const q = {
        elasticities: new Map(r.map((m, p) => [
          p,
          l
        ])),
        elasticitiesOrthogonal: new Map(r.map((m, p) => [
          p,
          l
        ])),
        thicknesses: new Map(r.map((m, p) => [
          p,
          n
        ])),
        poissonsRatios: new Map(r.map((m, p) => [
          p,
          s
        ])),
        shearModuli: new Map(r.map((m, p) => [
          p,
          c
        ]))
      }, y = {
        supports: x,
        loads: I
      };
      try {
        const m = Bt($, r, y, q), p = Co($, r, q, m), v = $.map((k) => [
          k[0],
          0,
          k[1]
        ]);
        if (t.nodes.val = v, t.elements.val = r, m && m.deformations) {
          const k = /* @__PURE__ */ new Map();
          m.deformations.forEach((P, C) => {
            k.set(C, [
              P[0],
              P[2],
              P[1],
              P[3],
              P[5],
              P[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: k
          });
        }
        if (t.nodeInputs) {
          const k = /* @__PURE__ */ new Map();
          x.forEach((C, T) => k.set(T, C));
          const P = /* @__PURE__ */ new Map();
          I.forEach((C, T) => P.set(T, [
            C[0],
            C[2],
            C[1],
            C[3],
            C[5],
            C[4]
          ])), t.nodeInputs && (t.nodeInputs.val = {
            supports: k,
            loads: P
          });
        }
        t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let M = 0;
        m && m.deformations && m.deformations.forEach((k) => {
          const P = Math.sqrt(k[0] * k[0] + k[1] * k[1] + k[2] * k[2]);
          M = Math.max(M, P);
        }), console.log(`Viga Alta: ${$.length} nodos, ${r.length} triangulos`), console.log(`  L=${e}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function es() {
      const e = Y("H") || 4, o = Y("B") || 3, n = Y("tw") || 0.3, l = Y("tb") || 0.4, s = Y("meshSize") || 0.2, c = Y("E") || 25e6, a = Y("nu") || 0.2, i = c / (2 * (1 + a)), u = Y("gamma") || 18, d = Y("Ka") || 0.33, r = Y("Es") || 5e4, b = Y("nus") || 0.3, $ = r / (2 * (1 + b)), w = Y("kn") || 1e6, x = Y("ks") || 1e4, f = Y("gammaW") || 9.81, h = Y("Hw") || 3.5, S = Y("qs") || 0, E = Mt, I = o * 0.3, q = o * 0.7, y = [
        [
          -I,
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
          l + e,
          0
        ],
        [
          0,
          l + e,
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
      let m = [], p = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k;
      if (E === 0) {
        const T = to({
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
        m = T.nodes, p = T.elements;
        for (let F = 0; F < m.length; F++) Math.abs(m[F][1]) < 1e-6 && v.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const O = [];
        for (let F = 0; F < m.length; F++) {
          const Z = m[F][0], K = m[F][1];
          Math.abs(Z - n) < s * 0.6 && K >= l - 1e-6 && O.push({
            idx: F,
            y: K
          });
        }
        O.sort((F, Z) => F.y - Z.y);
        for (let F = 0; F < O.length; F++) {
          const { idx: Z, y: K } = O[F], re = l + e - K, ae = d * u * re + d * S;
          let Q = s;
          F > 0 && F < O.length - 1 ? Q = (O[F + 1].y - O[F - 1].y) / 2 : F === 0 && O.length > 1 ? Q = (O[1].y - O[0].y) / 2 : F === O.length - 1 && O.length > 1 && (Q = (O[F].y - O[F - 1].y) / 2);
          const ce = ae * Q;
          Math.abs(ce) > 1e-10 && M.set(Z, [
            ce,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        k = {
          elasticities: new Map(p.map((F, Z) => [
            Z,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((F, Z) => [
            Z,
            c
          ])),
          thicknesses: new Map(p.map((F, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(p.map((F, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(p.map((F, Z) => [
            Z,
            i
          ]))
        };
      } else if (E === 1 || E === 2) {
        const T = q, O = l + e;
        if (E === 2) {
          const F = [
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
              O,
              0
            ],
            [
              n,
              O,
              0
            ],
            [
              0,
              O,
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
          ], Z = Math.max(3, Math.ceil((O - l) / s)), K = [];
          for (let ne = 0; ne <= Z; ne++) K.push([
            n,
            l + ne * (O - l) / Z,
            0
          ]);
          const re = to({
            points: [
              ...F,
              ...K
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
          m = re.nodes, p = re.elements;
          const ae = s * 0.4, Q = [];
          for (let ne = 0; ne < m.length; ne++) {
            const Te = m[ne][0], je = m[ne][1];
            Math.abs(Te - n) < ae && je >= l - ae && Q.push(ne);
          }
          Q.sort((ne, Te) => m[ne][1] - m[Te][1]);
          const ce = [
            Q[0]
          ];
          for (let ne = 1; ne < Q.length; ne++) {
            const Te = m[Q[ne]][1] - m[ce[ce.length - 1]][1];
            Math.abs(Te) > s * 0.05 && ce.push(Q[ne]);
          }
          Q.length = 0, Q.push(...ce);
          const Me = /* @__PURE__ */ new Map();
          for (const ne of Q) {
            const Te = m.length;
            m.push([
              m[ne][0],
              m[ne][1],
              m[ne][2]
            ]), Me.set(ne, Te);
          }
          const Oe = p.length, Re = [];
          for (let ne = 0; ne < Oe; ne++) {
            const Te = p[ne], je = (m[Te[0]][0] + m[Te[1]][0] + m[Te[2]][0]) / 3, pt = (m[Te[0]][1] + m[Te[1]][1] + m[Te[2]][1]) / 3, $t = je >= -I && je <= q && pt >= 0 && pt <= l, zo = je >= 0 && je <= n && pt >= l && pt <= l + e, co = $t || zo;
            if (Re.push(!co), !co) for (let Ut = 0; Ut < Te.length; Ut++) {
              const Qt = Me.get(Te[Ut]);
              Qt !== void 0 && (Te[Ut] = Qt);
            }
          }
          const H = p.length;
          for (let ne = 0; ne < Q.length - 1; ne++) {
            const Te = Q[ne], je = Q[ne + 1], pt = Me.get(Te), $t = Me.get(je);
            p.push([
              je,
              Te,
              pt,
              $t
            ]);
          }
          const de = p.length - H, ie = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let ne = 0; ne < Oe; ne++) Re[ne] ? (ie.set(ne, r), ee.set(ne, r), fe.set(ne, b), Ee.set(ne, $), J.set(ne, 1)) : (ie.set(ne, c), ee.set(ne, c), fe.set(ne, a), Ee.set(ne, i), J.set(ne, 1));
          for (let ne = H; ne < p.length; ne++) ie.set(ne, w), ee.set(ne, 0), fe.set(ne, 0), Ee.set(ne, x), J.set(ne, 0);
          k = {
            elasticities: ie,
            elasticitiesOrthogonal: ee,
            thicknesses: J,
            poissonsRatios: fe,
            shearModuli: Ee
          };
          for (let ne = 0; ne < m.length; ne++) {
            const Te = m[ne][0], je = m[ne][1];
            Math.abs(je) < 1e-6 ? v.set(ne, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Te - T) < s * 0.1 && v.set(ne, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ne = 0; ne < Oe; ne++) {
            if (!Re[ne]) continue;
            const Te = p[ne], je = m[Te[0]], pt = m[Te[1]], $t = m[Te[2]], zo = Math.abs((pt[0] - je[0]) * ($t[1] - je[1]) - ($t[0] - je[0]) * (pt[1] - je[1])) / 2, co = -u * zo / 3;
            for (const Ut of Te) {
              const Qt = M.get(Ut) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Qt[1] += co, M.set(Ut, Qt);
            }
          }
          if (S > 0) {
            const ne = [];
            for (let Te = 0; Te < m.length; Te++) {
              const je = m[Te][0], pt = m[Te][1];
              Math.abs(pt - O) < s * 0.1 && je > n - 1e-6 && ne.push({
                idx: Te,
                x: je
              });
            }
            ne.sort((Te, je) => Te.x - je.x);
            for (let Te = 0; Te < ne.length; Te++) {
              let je = s;
              Te > 0 && Te < ne.length - 1 ? je = (ne[Te + 1].x - ne[Te - 1].x) / 2 : Te === 0 && ne.length > 1 ? je = (ne[1].x - ne[0].x) / 2 : Te === ne.length - 1 && ne.length > 1 && (je = (ne[Te].x - ne[Te - 1].x) / 2);
              const pt = -S * je, $t = M.get(ne[Te].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              $t[1] += pt, M.set(ne[Te].idx, $t);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${de} elem interfaz, kn=${w}, ks=${x}`);
        } else {
          const F = [
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
              O,
              0
            ],
            [
              n,
              O,
              0
            ],
            [
              0,
              O,
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
          ], Z = [
            [
              n,
              l,
              0
            ]
          ], K = to({
            points: [
              ...F,
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
          m = K.nodes, p = K.elements;
          const re = (H) => {
            const de = (m[H[0]][0] + m[H[1]][0] + m[H[2]][0]) / 3, ie = (m[H[0]][1] + m[H[1]][1] + m[H[2]][1]) / 3, ee = de >= -I && de <= q && ie >= 0 && ie <= l, J = de >= 0 && de <= n && ie >= l && ie <= l + e;
            return ee || J;
          }, ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Re = [];
          for (let H = 0; H < p.length; H++) {
            const de = re(p[H]);
            Re.push(!de), de ? (ae.set(H, c), Q.set(H, c), Me.set(H, a), Oe.set(H, i), ce.set(H, 1)) : (ae.set(H, r), Q.set(H, r), Me.set(H, b), Oe.set(H, $), ce.set(H, 1));
          }
          k = {
            elasticities: ae,
            elasticitiesOrthogonal: Q,
            thicknesses: ce,
            poissonsRatios: Me,
            shearModuli: Oe
          };
          for (let H = 0; H < m.length; H++) {
            const de = m[H][0], ie = m[H][1];
            Math.abs(ie) < 1e-6 ? v.set(H, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(de - T) < s * 0.1 && v.set(H, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let H = 0; H < p.length; H++) {
            if (!Re[H]) continue;
            const de = p[H], ie = m[de[0]], ee = m[de[1]], J = m[de[2]], fe = Math.abs((ee[0] - ie[0]) * (J[1] - ie[1]) - (J[0] - ie[0]) * (ee[1] - ie[1])) / 2, Ee = -u * fe / 3;
            for (const ne of de) {
              const Te = M.get(ne) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Te[1] += Ee, M.set(ne, Te);
            }
          }
          if (S > 0) {
            const H = [];
            for (let de = 0; de < m.length; de++) {
              const ie = m[de][0], ee = m[de][1];
              Math.abs(ee - O) < s * 0.1 && ie > n - 1e-6 && H.push({
                idx: de,
                x: ie
              });
            }
            H.sort((de, ie) => de.x - ie.x);
            for (let de = 0; de < H.length; de++) {
              let ie = s;
              de > 0 && de < H.length - 1 ? ie = (H[de + 1].x - H[de - 1].x) / 2 : de === 0 && H.length > 1 ? ie = (H[1].x - H[0].x) / 2 : de === H.length - 1 && H.length > 1 && (ie = (H[de].x - H[de - 1].x) / 2);
              const ee = -S * ie, J = M.get(H[de].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              J[1] += ee, M.set(H[de].idx, J);
            }
          }
        }
      }
      if (E === 3) {
        const T = to({
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
        m = T.nodes, p = T.elements;
        for (let re = 0; re < m.length; re++) Math.abs(m[re][1]) < 1e-6 && v.set(re, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const O = l + e, F = Math.min(h, e), Z = O - F, K = [];
        for (let re = 0; re < m.length; re++) {
          const ae = m[re][0], Q = m[re][1];
          Math.abs(ae - n) < s * 0.6 && Q >= l - 1e-6 && K.push({
            idx: re,
            y: Q
          });
        }
        K.sort((re, ae) => re.y - ae.y);
        for (let re = 0; re < K.length; re++) {
          const { idx: ae, y: Q } = K[re], ce = Math.max(0, O - Q);
          if (ce <= 0 || Q < Z - 1e-6) continue;
          const Me = Math.min(ce, F), Oe = f * Me;
          let Re = s;
          re > 0 && re < K.length - 1 ? Re = (K[re + 1].y - K[re - 1].y) / 2 : re === 0 && K.length > 1 ? Re = (K[1].y - K[0].y) / 2 : re === K.length - 1 && K.length > 1 && (Re = (K[re].y - K[re - 1].y) / 2);
          const H = Oe * Re;
          Math.abs(H) > 1e-10 && M.set(ae, [
            H,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        k = {
          elasticities: new Map(p.map((re, ae) => [
            ae,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((re, ae) => [
            ae,
            c
          ])),
          thicknesses: new Map(p.map((re, ae) => [
            ae,
            n
          ])),
          poissonsRatios: new Map(p.map((re, ae) => [
            ae,
            a
          ])),
          shearModuli: new Map(p.map((re, ae) => [
            ae,
            i
          ]))
        };
      }
      const P = {
        supports: v,
        loads: M
      }, C = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const T = Bt(m, p, P, k), O = p.filter((ce) => ce.length === 3), F = {};
        for (const ce of Object.keys(k)) {
          const Me = k[ce];
          if (Me && Me instanceof Map) {
            const Oe = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let H = 0; H < p.length; H++) p[H].length === 3 && (Me.has(H) && Oe.set(Re, Me.get(H)), Re++);
            F[ce] = Oe;
          }
        }
        const Z = Co(m, O, F, T), K = m.map((ce) => [
          ce[0],
          0,
          ce[1]
        ]);
        if (t.nodes.val = K, t.elements.val = O, T && T.deformations) {
          const ce = /* @__PURE__ */ new Map();
          T.deformations.forEach((Me, Oe) => {
            ce.set(Oe, [
              Me[0],
              Me[2],
              Me[1],
              Me[3],
              Me[5],
              Me[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: ce
          });
        }
        const re = /* @__PURE__ */ new Map();
        v.forEach((ce, Me) => re.set(Me, ce));
        const ae = /* @__PURE__ */ new Map();
        M.forEach((ce, Me) => ae.set(Me, [
          ce[0],
          ce[2],
          ce[1],
          ce[3],
          ce[5],
          ce[4]
        ])), t.nodeInputs && (t.nodeInputs.val = {
          supports: re,
          loads: ae
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let Q = 0;
        T && T.deformations && T.deformations.forEach((ce) => {
          const Me = Math.sqrt(ce[0] * ce[0] + ce[1] * ce[1] + ce[2] * ce[2]);
          Q = Math.max(Q, Me);
        }), console.log(`Muro Contencion [${C[E]}]: ${m.length} nodos, ${p.length} triangulos`), console.log(`  H=${e}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${S}`), E === 1 && console.log(`  Es=${r}, nus=${b}`), E === 2 && console.log(`  Es=${r}, nus=${b}, kn=${w}, ks=${x}`), E === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch (T) {
        console.warn("Muro Contencion failed:", T.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ts() {
      const e = Y("Lx") || 2, o = Y("Ly") || 2, n = Y("t") || 0.5, l = Y("colA") || 0.4, s = Y("colH") || 1.5, c = Math.round(Y("nx") || 8), a = Math.round(Y("ny") || 8), i = Y("E") || 25e6, u = Y("nu") || 0.2, d = Y("P") || -500, r = Y("Mx") || 0, b = Y("My") || 0, $ = Y("ks") || 2e4, w = e / c, x = o / a, f = e / 2, h = o / 2, S = l / 2, E = [];
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) {
        const k = v * (c + 1) + M;
        let P = w, C = x;
        (M === 0 || M === c) && (P = w / 2), (v === 0 || v === a) && (C = x / 2), E.push({
          node: k,
          dof: 0,
          k: $ * P * C
        });
      }
      let I = 0;
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) Math.abs(M * w - f) <= S + 1e-6 && Math.abs(v * x - h) <= S + 1e-6 && I++;
      const q = d / Math.max(I, 1), y = [];
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) {
        const k = M * w, P = v * x;
        Math.abs(k - f) <= S + 1e-6 && Math.abs(P - h) <= S + 1e-6 && y.push({
          node: v * (c + 1) + M,
          dof: 0,
          value: q
        });
      }
      if (Math.abs(r) > 1e-6) {
        const v = S > 1e-6 ? S : x, M = r / v;
        for (let k = 0; k <= a; k++) for (let P = 0; P <= c; P++) {
          const C = P * w, T = k * x;
          if (Math.abs(C - f) <= S + 1e-6 && Math.abs(T - h) <= S + 1e-6) {
            const O = T - h;
            if (Math.abs(O) > 1e-6) {
              const F = O > 0 ? 1 : -1;
              y.push({
                node: k * (c + 1) + P,
                dof: 0,
                value: F * M / I * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const v = S > 1e-6 ? S : w, M = b / v;
        for (let k = 0; k <= a; k++) for (let P = 0; P <= c; P++) {
          const C = P * w, T = k * x;
          if (Math.abs(C - f) <= S + 1e-6 && Math.abs(T - h) <= S + 1e-6) {
            const O = C - f;
            if (Math.abs(O) > 1e-6) {
              const F = O > 0 ? 1 : -1;
              y.push({
                node: k * (c + 1) + P,
                dof: 0,
                value: F * M / I * 2
              });
            }
          }
        }
      }
      const p = {
        1: 2,
        2: 1,
        3: 0
      }[ht] ?? 1;
      console.log(`Zapata: ${e}x${o}m, t=${n}m, ${c}x${a} elem`), console.log(`  col=${l}m, P=${d}, Mx=${r}, My=${b}, ks=${$}`);
      try {
        const v = Fn({
          E: i,
          nu: u,
          thickness: n,
          meshLx: e,
          meshLy: o,
          meshNx: c,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: p,
          springs: E,
          pointLoads: y
        });
        console.log(`  Solved: w_max = ${v.maxW.toExponential(4)}`);
        const M = v.nodeResults.map((Z) => [
          Z.x,
          Z.y,
          0
        ]), k = M.length;
        M.push([
          f - S,
          h - S,
          0
        ]), M.push([
          f + S,
          h - S,
          0
        ]), M.push([
          f + S,
          h + S,
          0
        ]), M.push([
          f - S,
          h + S,
          0
        ]), M.push([
          f - S,
          h - S,
          s
        ]), M.push([
          f + S,
          h - S,
          s
        ]), M.push([
          f + S,
          h + S,
          s
        ]), M.push([
          f - S,
          h + S,
          s
        ]);
        const P = v.elementResults.map((Z) => [
          ...Z.nodes
        ]);
        P.push([
          k,
          k + 4
        ]), P.push([
          k + 1,
          k + 5
        ]), P.push([
          k + 2,
          k + 6
        ]), P.push([
          k + 3,
          k + 7
        ]), P.push([
          k + 4,
          k + 5
        ]), P.push([
          k + 5,
          k + 6
        ]), P.push([
          k + 6,
          k + 7
        ]), P.push([
          k + 7,
          k + 4
        ]), P.push([
          k,
          k + 1
        ]), P.push([
          k + 1,
          k + 2
        ]), P.push([
          k + 2,
          k + 3
        ]), P.push([
          k + 3,
          k
        ]), t.nodes.val = M, t.elements.val = P;
        const C = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((Z, K) => {
          C.set(K, [
            0,
            0,
            Z.w,
            Z.bx,
            Z.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: C
        });
        const T = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((Z, K) => {
          const re = Z.x, ae = Z.y;
          (re < 1e-6 || re > e - 1e-6 || ae < 1e-6 || ae > o - 1e-6) && T.set(K, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const O = /* @__PURE__ */ new Map();
        if (O.set(k + 4, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), O.set(k + 5, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), O.set(k + 6, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), O.set(k + 7, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), t.nodeInputs && (t.nodeInputs.val = {
          supports: T,
          loads: O
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
          const Z = v.elementResults.length, K = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map();
          v.elementResults.forEach((Q, ce) => {
            K.set(ce, [
              Q.Mxx,
              Q.Mxx,
              Q.Mxx
            ]), re.set(ce, [
              Q.Myy,
              Q.Myy,
              Q.Myy
            ]), ae.set(ce, [
              Q.Mxy,
              Q.Mxy,
              Q.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: K,
            bendingYY: re,
            bendingXY: ae
          };
        }
        const F = tt();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function os() {
      const e = Y("Lx") || 0.4, o = Y("Ly") || 0.4, n = Y("t") || 0.025, l = Y("dBolt") || 0.022, s = Y("sx") || 0.28, c = Y("sy") || 0.28, a = Y("colA") || 0.2, i = Y("meshSize") || 8e-3, u = Y("E") || 2e8, d = Y("nu") || 0.3, r = u / (2 * (1 + d)), b = Y("P") || -200, $ = Math.round(Y("nBolts") || 4), w = e / 2, x = o / 2, f = l / 2, h = a / 2, S = [];
      $ >= 4 && (S.push([
        w - s / 2,
        x - c / 2
      ]), S.push([
        w + s / 2,
        x - c / 2
      ]), S.push([
        w + s / 2,
        x + c / 2
      ]), S.push([
        w - s / 2,
        x + c / 2
      ])), $ >= 6 && (S.push([
        w,
        x - c / 2
      ]), S.push([
        w,
        x + c / 2
      ])), $ >= 8 && (S.push([
        w - s / 2,
        x
      ]), S.push([
        w + s / 2,
        x
      ]));
      const { nodes: E, elements: I } = to({
        points: [
          [
            0,
            0,
            0
          ],
          [
            e,
            0,
            0
          ],
          [
            e,
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
      }), q = (C, T) => {
        for (const [O, F] of S) if ((C - O) * (C - O) + (T - F) * (T - F) < f * f) return true;
        return false;
      }, y = I.filter((C) => {
        const T = (E[C[0]][0] + E[C[1]][0] + E[C[2]][0]) / 3, O = (E[C[0]][1] + E[C[1]][1] + E[C[2]][1]) / 3;
        return !q(T, O);
      }), m = E, p = /* @__PURE__ */ new Map();
      for (let C = 0; C < m.length; C++) {
        const T = m[C][0], O = m[C][1];
        for (const [F, Z] of S) {
          const K = Math.sqrt((T - F) * (T - F) + (O - Z) * (O - Z));
          K >= f * 0.7 && K <= f * 1.5 && p.set(C, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const v = /* @__PURE__ */ new Map();
      let M = 0;
      for (let C = 0; C < m.length; C++) {
        const T = m[C][0], O = m[C][1];
        Math.abs(T - w) <= h && Math.abs(O - x) <= h && M++;
      }
      const k = b / Math.max(M, 1);
      for (let C = 0; C < m.length; C++) {
        const T = m[C][0], O = m[C][1];
        if (Math.abs(T - w) <= h && Math.abs(O - x) <= h) {
          const F = v.get(C) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += k, v.set(C, F);
        }
      }
      const P = {
        elasticities: new Map(y.map((C, T) => [
          T,
          u
        ])),
        elasticitiesOrthogonal: new Map(y.map((C, T) => [
          T,
          u
        ])),
        thicknesses: new Map(y.map((C, T) => [
          T,
          n
        ])),
        poissonsRatios: new Map(y.map((C, T) => [
          T,
          d
        ])),
        shearModuli: new Map(y.map((C, T) => [
          T,
          r
        ]))
      };
      console.log(`Placa Base: ${e * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${y.length} triangulos, ${m.length} nodos`);
      try {
        const C = Bt(m, y, {
          supports: p,
          loads: v
        }, P), T = Co(m, y, P, C);
        t.nodes.val = m, t.elements.val = y, C && t.deformOutputs && (t.deformOutputs.val = C), t.nodeInputs && (t.nodeInputs.val = {
          supports: p,
          loads: v
        }), t.elementInputs && (t.elementInputs.val = {}), T && t.analyzeOutputs && (t.analyzeOutputs.val = T);
        let O = 0;
        C && C.deformations && C.deformations.forEach((F) => {
          const Z = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          O = Math.max(O, Z);
        }), console.log(`  max|u| = ${O.toExponential(4)}`);
      } catch (C) {
        console.warn("Placa Base failed:", C.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ns() {
      const e = Y("colB") || 0.3, o = Y("colH") || 0.3, n = Y("colT") || 8e-3, l = Y("colLen") || 1.5, s = Y("Lx") || 0.45, c = Y("Ly") || 0.45, a = Y("tPlaca") || 0.025, i = Y("dBolt") || 0.022, u = Y("sx") || 0.32, d = Y("sy") || 0.32, r = Math.round(Y("nSubColV") || 6), b = Math.round(Y("nSubColH") || 4), $ = Math.round(Y("nSubPlaca") || 10), w = Y("E") || 2e8, x = Y("nu") || 0.3, f = w / (2 * (1 + x)), h = Y("P") || -300, S = s / 2, E = c / 2, I = i / 2, q = e / 2, y = o / 2, m = [], p = [], v = $, M = s / v, k = c / v, P = (ee, J) => J * (v + 1) + ee;
      for (let ee = 0; ee <= v; ee++) for (let J = 0; J <= v; J++) m.push([
        J * M,
        ee * k,
        0
      ]);
      const C = [
        [
          S - u / 2,
          E - d / 2
        ],
        [
          S + u / 2,
          E - d / 2
        ],
        [
          S + u / 2,
          E + d / 2
        ],
        [
          S - u / 2,
          E + d / 2
        ]
      ], T = (ee, J) => {
        for (const [fe, Ee] of C) if ((ee - fe) * (ee - fe) + (J - Ee) * (J - Ee) < I * I) return true;
        return false;
      }, O = p.length;
      for (let ee = 0; ee < v; ee++) for (let J = 0; J < v; J++) {
        const fe = (J + 0.5) * M, Ee = (ee + 0.5) * k;
        T(fe, Ee) || p.push([
          P(J, ee),
          P(J + 1, ee),
          P(J + 1, ee + 1),
          P(J, ee + 1)
        ]);
      }
      const F = p.length - O, Z = r, K = b, re = [
        [
          S - q,
          E - y
        ],
        [
          S + q,
          E - y
        ],
        [
          S + q,
          E + y
        ],
        [
          S - q,
          E + y
        ]
      ], ae = p.length, Q = [
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
      ], ce = (ee, J) => {
        for (let fe = 0; fe < (v + 1) * (v + 1); fe++) if (Math.abs(m[fe][0] - ee) < M * 0.3 && Math.abs(m[fe][1] - J) < k * 0.3 && Math.abs(m[fe][2]) < 1e-6) return fe;
        return -1;
      };
      for (const [ee, J] of Q) {
        const [fe, Ee] = re[ee], [ne, Te] = re[J], je = [];
        for (let pt = 0; pt <= Z; pt++) {
          const $t = [], zo = pt / Z * l;
          for (let co = 0; co <= K; co++) {
            const Ut = co / K, Qt = fe + Ut * (ne - fe), An = Ee + Ut * (Te - Ee);
            if (pt === 0) {
              const eo = ce(Qt, An);
              if (eo >= 0) {
                $t.push(eo);
                continue;
              }
            }
            let Cn = -1;
            for (let eo = 0; eo < m.length; eo++) if (Math.abs(m[eo][0] - Qt) < 1e-6 && Math.abs(m[eo][1] - An) < 1e-6 && Math.abs(m[eo][2] - zo) < 1e-6) {
              Cn = eo;
              break;
            }
            Cn >= 0 ? $t.push(Cn) : ($t.push(m.length), m.push([
              Qt,
              An,
              zo
            ]));
          }
          je.push($t);
        }
        for (let pt = 0; pt < Z; pt++) for (let $t = 0; $t < K; $t++) p.push([
          je[pt][$t],
          je[pt][$t + 1],
          je[pt + 1][$t + 1],
          je[pt + 1][$t]
        ]);
      }
      const Me = p.length - ae, Oe = /* @__PURE__ */ new Map();
      for (let ee = 0; ee < (v + 1) * (v + 1); ee++) {
        const J = m[ee][0], fe = m[ee][1];
        for (const [Ee, ne] of C) {
          const Te = Math.sqrt((J - Ee) * (J - Ee) + (fe - ne) * (fe - ne));
          Te >= I * 0.5 && Te <= I * 2 && Oe.set(ee, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Re = /* @__PURE__ */ new Map(), H = [];
      for (let ee = 0; ee < m.length; ee++) Math.abs(m[ee][2] - l) < 1e-6 && H.push(ee);
      const de = h / Math.max(H.length, 1);
      for (const ee of H) Re.set(ee, [
        0,
        0,
        de,
        0,
        0,
        0
      ]);
      const ie = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let ee = O; ee < O + F; ee++) ie.elasticities.set(ee, w), ie.poissonsRatios.set(ee, x), ie.thicknesses.set(ee, a), ie.shearModuli.set(ee, f);
      for (let ee = ae; ee < ae + Me; ee++) ie.elasticities.set(ee, w), ie.poissonsRatios.set(ee, x), ie.thicknesses.set(ee, n), ie.shearModuli.set(ee, f);
      console.log(`Col+Placa 3D: col ${e * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${F} Q4 placa + ${Me} Q4 columna = ${p.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const ee = Bt(m, p, {
          supports: Oe,
          loads: Re
        }, ie), J = Co(m, p, ie, ee);
        t.nodes.val = m, t.elements.val = p, ee && t.deformOutputs && (t.deformOutputs.val = ee), t.nodeInputs && (t.nodeInputs.val = {
          supports: Oe,
          loads: Re
        }), t.elementInputs && (t.elementInputs.val = ie), J && t.analyzeOutputs && (t.analyzeOutputs.val = J);
        let fe = 0;
        (ee == null ? void 0 : ee.deformations) && ee.deformations.forEach((Ee) => {
          const ne = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          fe = Math.max(fe, ne);
        }), console.log(`  max|u| = ${fe.toExponential(4)}`);
      } catch (ee) {
        console.warn("Col+Placa failed:", ee.message), t.nodes.val = m, t.elements.val = p, t.nodeInputs && (t.nodeInputs.val = {
          supports: Oe,
          loads: Re
        });
      }
      setTimeout(() => Et(), 50), Je();
    }
    function ss() {
      const e = Y("H") || 6, o = Y("angle") || 45, n = Y("bTop") || 3, l = Y("bBot") || 3, s = Y("meshSize") || 2, c = Y("E") || 5e4, a = Y("nu") || 0.3, i = Y("gamma") || 18, u = Y("c") || 15, d = Y("phi") || 30, r = Y("qs") || 0, b = e / Math.tan(o * Math.PI / 180), $ = l + b + n, w = e, x = [
        [
          0,
          -w,
          0
        ],
        [
          $,
          -w,
          0
        ],
        [
          $,
          e,
          0
        ],
        [
          l + b,
          e,
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
      ], { nodes: f, elements: h } = to({
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
      }), S = f, E = [], I = /* @__PURE__ */ new Map();
      for (let y = 0; y < S.length; y++) {
        const m = S[y][0], p = S[y][1];
        Math.abs(p + w) < 1e-6 ? (E.push({
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
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - $) < 1e-6) && (E.push({
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
      const q = e - s * 0.3;
      try {
        const y = S.map((T) => [
          T[0],
          T[1]
        ]), m = h.map((T) => [
          T[0],
          T[1],
          T[2]
        ]), p = da({
          nodes: y,
          elements: m,
          E: c,
          nu: a,
          gamma: i,
          c: u,
          phi: d,
          thickness: 1,
          supports: E,
          surcharge: r,
          surfaceYThreshold: q
        }), v = S.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        t.nodes.val = v, t.elements.val = h;
        const M = /* @__PURE__ */ new Map();
        for (let T = 0; T < p.displacements.length; T++) {
          const [O, F] = p.displacements[T];
          M.set(T, [
            O,
            0,
            F,
            0,
            0,
            0
          ]);
        }
        t.deformOutputs && (t.deformOutputs.val = {
          deformations: M
        }), t.nodeInputs && (t.nodeInputs.val = {
          supports: I
        }), t.elementInputs && (t.elementInputs.val = {});
        const k = /* @__PURE__ */ new Map();
        for (let T = 0; T < p.plasticStrain.length; T++) {
          const O = p.plasticStrain[T];
          k.set(T, [
            O,
            O,
            O
          ]);
        }
        t.analyzeOutputs && (t.analyzeOutputs.val = {
          membraneXX: k
        });
        let P = 0;
        for (const [T, O] of p.displacements) {
          const F = Math.sqrt(T * T + O * O);
          P = Math.max(P, F);
        }
        let C = 0;
        for (const T of p.plasticStrain) C = Math.max(C, T);
        console.log(`Talud SRM: ${S.length} nodos, ${h.length} triangulos`), console.log(`  H=${e}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${p.fos.toFixed(3)}`), console.log(`  max|u| = ${P.toExponential(4)}`), console.log(`  max \u03B5_pl = ${C.toExponential(4)}`), p.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : p.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (y) {
        console.warn("Talud SRM failed:", y.message);
      }
      setTimeout(() => Et(), 50), Je();
    }
    let Gt = null, gt = null, Zt = null;
    function qs() {
      let e = document.getElementById("sections");
      if (!e) {
        e = document.createElement("div"), e.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const s = o.parentElement;
          s.removeChild(o), n.appendChild(e), n.appendChild(l), n.appendChild(o), s.appendChild(n);
        }
        n ? e.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (e.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(e));
      }
      return e;
    }
    function ft(e) {
      const o = qo.find((n) => n.id === R);
      return e / o.toM;
    }
    function ut(e) {
      const o = qo.find((n) => n.id === R);
      return e * o.toM;
    }
    function uo(e) {
      const o = Rn.find((l) => l.id === G.forceId), n = qo.find((l) => l.id === G.lengthId);
      return e / (o.toKN / (n.toM * n.toM));
    }
    function pn(e) {
      const o = Rn.find((l) => l.id === G.forceId), n = qo.find((l) => l.id === G.lengthId);
      return e * (o.toKN / (n.toM * n.toM));
    }
    function fn() {
      return G.label;
    }
    function Ps() {
      switch (qo.find((o) => o.id === R).id) {
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
      const e = uo(20594), o = uo(58840), n = Math.max(1, Math.round((o - e) / 40));
      return [
        Math.round(e),
        Math.round(o),
        n
      ];
    }
    function as(e, o, n, l, s) {
      const c = ke.steelVigaType, a = c === 0 ? Zo() : Qo();
      if (ke.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = `b${n}${i}`, r = `h${n}${i}`, b = {};
          b[d] = +ft(u.b).toFixed(2), b[r] = +ft(u.h).toFixed(2), e.addBinding(b, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), e.addBinding(b, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          });
        }
        e.on("change", (i) => {
          var _a2;
          const u = (_a2 = i.target) == null ? void 0 : _a2.key, d = u == null ? void 0 : u.match(new RegExp(`^b${n}(\\d+)$`)), r = u == null ? void 0 : u.match(new RegExp(`^h${n}(\\d+)$`));
          d && (o[parseInt(d[1])].b = ut(i.value), ye()), r && (o[parseInt(r[1])].h = ut(i.value), ye());
        });
      } else if (c <= 1) {
        for (let i = 0; i < o.length; i++) {
          const u = {};
          u[`p${n}${i}`] = o[i].profileIdx ?? 0, e.addBinding(u, `p${n}${i}`, {
            label: `sv${n}${i + 1}`,
            options: a
          });
        }
        e.on("change", (i) => {
          var _a2, _b;
          const d = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          d && (o[parseInt(d[1])].profileIdx = i.value, ye());
        });
      } else if (c === 2) {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = {}, r = `${n}${i}`;
          d[`bf${r}`] = +ft(u.bf ?? 0.2).toFixed(3), d[`h${r}`] = +ft(u.hf ?? 0.4).toFixed(3), d[`tf${r}`] = +ft(u.tf ?? 0.015).toFixed(3), d[`tw${r}`] = +ft(u.tw ?? 0.01).toFixed(3), e.addBinding(d, `bf${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${i + 1}`
          }), e.addBinding(d, `h${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), e.addBinding(d, `tf${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${i + 1}`
          }), e.addBinding(d, `tw${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${i + 1}`
          });
        }
        e.on("change", (i) => {
          var _a2;
          const u = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const r = `${n}${d}`;
            u === `bf${r}` && (o[d].bf = ut(i.value), ye()), u === `h${r}` && (o[d].hf = ut(i.value), ye()), u === `tf${r}` && (o[d].tf = ut(i.value), ye()), u === `tw${r}` && (o[d].tw = ut(i.value), ye());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = {}, r = `${n}${i}`;
          d[`bc${r}`] = +ft(u.bc ?? 0.2).toFixed(3), d[`hc${r}`] = +ft(u.hc ?? 0.3).toFixed(3), d[`t${r}`] = +ft(u.t ?? 8e-3).toFixed(3), e.addBinding(d, `bc${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), e.addBinding(d, `hc${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), e.addBinding(d, `t${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${i + 1}`
          });
        }
        e.on("change", (i) => {
          var _a2;
          const u = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const r = `${n}${d}`;
            u === `bc${r}` && (o[d].bc = ut(i.value), ye()), u === `hc${r}` && (o[d].hc = ut(i.value), ye()), u === `t${r}` && (o[d].t = ut(i.value), ye());
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
      const e = document.getElementById("sections");
      if (e && (e.innerHTML = ""), L !== "edificio" && L !== "frame") {
        e && (e.style.display = "none");
        return;
      }
      const o = qs();
      if (!o) return;
      o.style.display = "";
      const n = z, l = Math.round(((_a2 = te.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Ps(), c = Os(), a = oe.length || 1, i = le.length || 1;
      for (; ke.perFloor.length < l; ) {
        const m = ke.perFloor.length > 0 ? JSON.parse(JSON.stringify(ke.perFloor[ke.perFloor.length - 1])) : kt(a, i);
        ke.perFloor.push(m);
      }
      ke.perFloor.length > l && (ke.perFloor.length = l);
      for (const m of ke.perFloor) {
        for (; m.vigasX.length < a; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : At());
        for (m.vigasX.length > a && (m.vigasX.length = a); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : At());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      gt = new Bo({
        title: `Sections (${n.label})`,
        container: o
      });
      const u = {
        colMat: ke.colMat
      };
      if (gt.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        ke.colMat = m.value, wo(), ye();
      }), ke.colMat === 0) {
        const m = {
          forma: ke.colShape
        };
        gt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          ke.colShape = v.value, wo(), ye();
        });
        const p = {
          fc: +uo(ke.fc).toFixed(1)
        };
        gt.addBinding(p, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${fn()})`
        }), gt.on("change", (v) => {
          var _a3;
          ((_a3 = v.target) == null ? void 0 : _a3.key) === "fc" && (ke.fc = pn(v.value), ye());
        });
      } else if (ke.colMat === 1) {
        const m = {
          colType: ke.steelColType
        };
        gt.addBinding(m, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (p) => {
          ke.steelColType = p.value, wo(), ye();
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
      }).on("change", (m) => {
        ke.vigaMat = m.value, wo(), ye();
      }), ke.vigaMat === 1) {
        const m = {
          vigaType: ke.steelVigaType
        };
        gt.addBinding(m, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (p) => {
          ke.steelVigaType = p.value, wo(), ye();
        });
      }
      const r = ke.steelColType === 0 ? Zo() : Qo();
      ke.steelVigaType === 0 ? Zo() : Qo();
      const b = R === "m" ? [
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
      for (let m = 0; m < l; m++) {
        const p = ke.perFloor[m], v = gt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (ke.colMat === 0) if (ke.colShape === 1) {
          const M = {
            dCol: +ft(p.dCol).toFixed(2)
          };
          v.addBinding(M, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (k) => {
            var _a3;
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "dCol" && (p.dCol = ut(k.value), ye());
          });
        } else {
          const M = {
            bCol: +ft(p.bCol).toFixed(2),
            hCol: +ft(p.hCol).toFixed(2)
          };
          v.addBinding(M, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), v.addBinding(M, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), v.on("change", (k) => {
            var _a3, _b;
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "bCol" && (p.bCol = ut(k.value), ye()), ((_b = k.target) == null ? void 0 : _b.key) === "hCol" && (p.hCol = ut(k.value), ye());
          });
        }
        else if (ke.colMat === 1) if (ke.steelColType <= 1) {
          const M = {
            col: p.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: r
          }).on("change", (k) => {
            p.colProfileIdx = k.value, ye();
          });
        } else if (ke.steelColType === 2) {
          const M = {
            bf: +ft(p.colBf ?? 0.3).toFixed(3),
            h: +ft(p.colHf ?? 0.3).toFixed(3),
            tf: +ft(p.colTf ?? 0.02).toFixed(3),
            tw: +ft(p.colTw ?? 0.012).toFixed(3)
          };
          v.addBinding(M, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), v.addBinding(M, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(M, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), v.addBinding(M, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), v.on("change", (k) => {
            var _a3, _b, _c, _d;
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "bf" && (p.colBf = ut(k.value), ye()), ((_b = k.target) == null ? void 0 : _b.key) === "h" && (p.colHf = ut(k.value), ye()), ((_c = k.target) == null ? void 0 : _c.key) === "tf" && (p.colTf = ut(k.value), ye()), ((_d = k.target) == null ? void 0 : _d.key) === "tw" && (p.colTw = ut(k.value), ye());
          });
        } else {
          const M = {
            bc: +ft(p.colBc ?? 0.3).toFixed(3),
            hc: +ft(p.colHc ?? 0.3).toFixed(3),
            t: +ft(p.colT ?? 0.01).toFixed(3)
          };
          v.addBinding(M, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), v.addBinding(M, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(M, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), v.on("change", (k) => {
            var _a3, _b, _c;
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = ut(k.value), ye()), ((_b = k.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = ut(k.value), ye()), ((_c = k.target) == null ? void 0 : _c.key) === "t" && (p.colT = ut(k.value), ye());
          });
        }
        else {
          const M = {
            bc: +ft(p.colBc ?? 0.3).toFixed(3),
            hc: +ft(p.colHc ?? 0.3).toFixed(3),
            t: +ft(p.colT ?? 0.01).toFixed(3),
            Es: +uo(p.colEs ?? 2e8).toFixed(0),
            nuS: p.colNuS ?? 0.3,
            fc: +uo(p.colFc ?? 28e3).toFixed(1),
            nuC: p.colNuC ?? 0.2
          };
          v.addBinding(M, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), v.addBinding(M, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(M, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), v.addBlade({
            view: "separator"
          });
          const k = +uo(1e8).toFixed(0), P = +uo(3e8).toFixed(0), C = Math.max(1, Math.round((P - k) / 200));
          v.addBinding(M, "Es", {
            min: k,
            max: P,
            step: C,
            label: `Es (${fn()})`
          }), v.addBinding(M, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(M, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${fn()})`
          }), v.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (T) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = ut(T.value), ye()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = ut(T.value), ye()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (p.colT = ut(T.value), ye()), ((_d = T.target) == null ? void 0 : _d.key) === "Es" && (p.colEs = pn(T.value), ye()), ((_e2 = T.target) == null ? void 0 : _e2.key) === "nuS" && (p.colNuS = T.value, ye()), ((_f = T.target) == null ? void 0 : _f.key) === "fc" && (p.colFc = pn(T.value), ye()), ((_g = T.target) == null ? void 0 : _g.key) === "nuC" && (p.colNuC = T.value, ye());
          });
        }
        if (p.vigasX.length > 0) {
          const M = v.addFolder({
            title: `Vigas X (${p.vigasX.length})`,
            expanded: false
          });
          as(M, p.vigasX, "x", s, b);
        }
        if (p.vigasY.length > 0) {
          const M = v.addFolder({
            title: `Vigas Y (${p.vigasY.length})`,
            expanded: false
          });
          as(M, p.vigasY, "y", s, b);
        }
      }
      gt.addBlade({
        view: "separator"
      });
      const $ = gt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: pe,
        direccion: He === "x" ? 0 : 1,
        cantidad: qe
      };
      $.addBinding(w, "activar", {
        label: "Activar"
      }), $.addBinding(w, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), $.addBinding(w, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), $.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (pe = m.value, ye()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (He = m.value === 0 ? "x" : "y", ye()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (qe = Math.round(m.value), ye());
      }), gt.addBlade({
        view: "separator"
      });
      const x = gt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ze,
        espesor: +ft(De).toFixed(3),
        subdivX: rt,
        subdivY: at
      };
      x.addBinding(f, "activar", {
        label: "Activar losas"
      }), x.addBinding(f, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), x.addBinding(f, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), x.addBinding(f, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), x.on("change", (m) => {
        var _a3, _b, _c, _d;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Ze = m.value, ye()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (De = ut(m.value), ye()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (rt = Math.round(m.value), ye()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (at = Math.round(m.value), ye());
      }), gt.addBlade({
        view: "separator"
      });
      const h = gt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +ft(Ue).toFixed(3),
        subdivH: bt,
        subdivW: vt
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
      }), h.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Ue = ut(m.value), ye()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (bt = Math.round(m.value), ye()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (vt = Math.round(m.value), ye());
      });
      const E = oe.length || 1, I = le.length || 1, q = E + 1, y = I + 1;
      if (E > 0) {
        const m = h.addFolder({
          title: `Muros dir X (${E} vanos)`,
          expanded: false
        });
        for (let p = 0; p < E; p++) for (let v = 0; v < y; v++) {
          const M = `wx_${p}_${v}`, k = Ye.some((T) => T.dir === "x" && T.bay === p && T.axisIdx === v), P = {};
          P[M] = k;
          const C = `Vano X${p + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          m.addBinding(P, M, {
            label: C
          }).on("change", (T) => {
            T.value ? Ye.push({
              dir: "x",
              bay: p,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : Ye = Ye.filter((O) => !(O.dir === "x" && O.bay === p && O.axisIdx === v)), ye();
          });
        }
      }
      if (I > 0) {
        const m = h.addFolder({
          title: `Muros dir Y (${I} vanos)`,
          expanded: false
        });
        for (let p = 0; p < I; p++) for (let v = 0; v < q; v++) {
          const M = `wy_${p}_${v}`, k = Ye.some((T) => T.dir === "y" && T.bay === p && T.axisIdx === v), P = {};
          P[M] = k;
          const C = `Vano Y${p + 1} / Eje X${v + 1}`;
          m.addBinding(P, M, {
            label: C
          }).on("change", (T) => {
            T.value ? Ye.push({
              dir: "y",
              bay: p,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : Ye = Ye.filter((O) => !(O.dir === "y" && O.bay === p && O.axisIdx === v)), ye();
          });
        }
      }
      if (Ye.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${Ye.length} ubicaciones`
        };
        h.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Jt() {
      const e = document.getElementById("parameters");
      if (!e) return;
      if (me || (me = e.innerHTML), we) {
        try {
          we.dispose();
        } catch {
        }
        we = null;
      }
      if (Gt) {
        try {
          Gt.dispose();
        } catch {
        }
        Gt = null;
      }
      e.innerHTML = "";
      const o = L.charAt(0).toUpperCase() + L.slice(1);
      we = new Bo({
        title: `Parameters \u2014 ${o}`,
        container: e
      });
      const n = Wn()[L];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = te[a.key].val;
        for (const a of n) we.addBinding(s, a.key, {
          min: te[a.key].min,
          max: te[a.key].max,
          step: te[a.key].step,
          label: te[a.key].label
        });
        const c = we.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const i = {
            min: te[a.key].min,
            max: te[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            te[a.key] && (te[a.key].min = i.min, te[a.key].max = i.max, te[a.key].val < i.min && (te[a.key].val = i.min), te[a.key].val > i.max && (te[a.key].val = i.max)), Jt(), ye();
          });
        }
        we.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && te[i]) {
            if (te[i].val = a.value, L === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const u = Math.round(te.nVanosX.val), d = Math.round(te.nVanosY.val);
                for (; oe.length < u; ) oe.push(oe[oe.length - 1] ?? z.defaultSpan);
                for (oe.length > u && (oe.length = u); le.length < d; ) le.push(le[le.length - 1] ?? z.defaultSpan * 0.8);
                le.length > d && (le.length = d);
              }
              Jt();
            }
            ye();
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
          const c = z;
          Zt = new Bo({
            title: `Luces (${c.length})`,
            container: s
          });
          const a = Zt.addFolder({
            title: "Luces X",
            expanded: true
          }), i = {};
          for (let r = 0; r < oe.length; r++) i[`svx_${r + 1}`] = oe[r];
          for (let r = 0; r < oe.length; r++) a.addBinding(i, `svx_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${r + 1}`
          });
          a.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (oe[parseInt($[1]) - 1] = r.value, ye());
          });
          const u = Zt.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let r = 0; r < le.length; r++) d[`svy_${r + 1}`] = le[r];
          for (let r = 0; r < le.length; r++) u.addBinding(d, `svy_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${r + 1}`
          });
          u.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (le[parseInt($[1]) - 1] = r.value, ye());
          });
        }
      }
      if (wo(), we) {
        we.addBlade({
          view: "separator"
        });
        const s = Uo()[L];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((i, u) => {
            c[i.label] = u;
          });
          const a = {
            apoyo: Mt
          };
          we.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (i) => {
            Mt = i.value, ye();
          });
        }
        if (L === "placa-3q" || L === "placa-q4") {
          const c = {
            teoria: ht
          };
          we.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            ht = a.value, ye();
          });
        }
      }
      const l = Yn()[L];
      if (l && l.length > 0) {
        Gt = new Bo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: e
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
          const i = {
            min: nt[a.key].min,
            max: nt[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            nt[a.key] && (nt[a.key].min = i.min, nt[a.key].max = i.max, nt[a.key].val < i.min && (nt[a.key].val = i.min), nt[a.key].val > i.max && (nt[a.key].val = i.max)), Jt(), ye();
          });
        }
        Gt.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && nt[i]) {
            if (nt[i].val = a.value, t.nodeInputs) {
              const u = t.nodeInputs.val;
              u.supports && (t.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => hn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (te[s]) te[s].val = c, ye(), Jt();
          else if (nt[s]) {
            if (nt[s].val = c, t.nodeInputs) {
              const a = t.nodeInputs.val;
              a.supports && (t.nodeInputs.val = {
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
          for (const c in te) s[c] = te[c].val;
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
    function Ns(e, o, n) {
      var _a2;
      ls(e);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const c = new Bo({
        title: e,
        container: s
      }), a = {};
      for (const [i, u] of Object.entries(o)) {
        const d = u.label || i;
        if (Array.isArray(u.value)) {
          a[i] = u.value;
          const r = {
            [i]: u.value.join(", ")
          };
          c.addBinding(r, i, {
            label: d
          }).on("change", (b) => {
            a[i] = b.value.split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($)), n && n({
              ...a
            });
          });
        } else if (u.options) {
          a[i] = u.value;
          const r = {
            [i]: u.value
          }, b = {};
          for (const $ of u.options) b[$] = $;
          c.addBinding(r, i, {
            label: d,
            options: b
          }).on("change", ($) => {
            a[i] = $.value, n && n({
              ...a
            });
          });
        } else if (typeof u.value == "boolean") {
          a[i] = u.value;
          const r = {
            [i]: u.value
          };
          c.addBinding(r, i, {
            label: d
          }).on("change", (b) => {
            a[i] = b.value, n && n({
              ...a
            });
          });
        } else if (typeof u.value == "string") {
          a[i] = u.value;
          const r = {
            [i]: u.value
          };
          c.addBinding(r, i, {
            label: d
          }).on("change", (b) => {
            a[i] = b.value, n && n({
              ...a
            });
          });
        } else {
          a[i] = u.value;
          const r = {
            [i]: u.value
          }, b = {
            label: d
          };
          u.min !== void 0 && (b.min = u.min), u.max !== void 0 && (b.max = u.max), u.step !== void 0 && (b.step = u.step), c.addBinding(r, i, b).on("change", ($) => {
            a[i] = $.value, n && n({
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
      }), un.set(e, {
        pane: c,
        values: a
      }), console.log(`Panel "${e}" created with ${Object.keys(o).length} params`), a;
    }
    function ls(e) {
      const o = un.get(e);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        un.delete(e);
      }
    }
    function Rs() {
      if (we) {
        try {
          we.dispose();
        } catch {
        }
        we = null;
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
      const e = document.getElementById("sections");
      e && e.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && me && (n.innerHTML = me);
    }
    const $e = document.createElement("div");
    $e.id = "cad3d-panel";
    const is = document.createElement("style");
    is.textContent = `
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
  `, document.head.appendChild(is), fa() === "light" && document.documentElement.classList.add("awatif-light"), ua((e) => {
      e === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), L && Et(true);
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
      const e = t.nodes.val, o = t.elements.val, n = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, l = (_b = t.elementInputs) == null ? void 0 : _b.val, s = R, c = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${L || "custom"}`), a.push(`# Units: ${c}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${e.length})`), a.push("# idx     X          Y          Z"), e.forEach((d, r) => {
        a.push(`  ${String(r).padStart(4)}  ${d[0].toFixed(4).padStart(10)}  ${d[1].toFixed(4).padStart(10)}  ${d[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((d, r) => {
        const b = d.map(($) => String($).padStart(6)).join("");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((d, r) => {
        const b = d.map(($) => $ ? "  1" : "  0").join("");
        a.push(`  ${String(r).padStart(4)} ${b}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((d, r) => {
        const b = d.map(($) => $.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
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
        ], r = "# elem  " + d.map((b) => b.name.padStart(12)).join(" ");
        a.push(r);
        for (let b = 0; b < o.length; b++) {
          const $ = d.map((w) => {
            var _a3;
            const x = (_a3 = w.map) == null ? void 0 : _a3.get(b);
            return x !== void 0 ? x.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${$}`);
        }
        a.push("");
      }
      const i = (_d = (_c = t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      i && i.size > 0 && (a.push(`## DISPLACEMENTS (${i.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), i.forEach((d, r) => {
        const b = d.map(($) => $.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
      }), a.push(""));
      const u = (_f = (_e2 = t.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (u && u.size > 0 && (a.push(`## REACTIONS (${u.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), u.forEach((d, r) => {
        const b = d.map(($) => $.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(r).padStart(4)}  ${b}`);
      }), a.push("")), L) {
        a.push("## CLI COMMAND");
        const d = Object.entries(te).map(([r, b]) => `${r}=${b.val}`).join(" ");
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
      const e = _s();
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
          \u{1F4CB} Export \u2014 ${t.nodes.val.length}n ${t.elements.val.length}e
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
        >${e.replace(/</g, "&lt;")}</textarea>
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
        const o = t.nodes.val, n = t.elements.val, l = (_a3 = t.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = t.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: L || "custom",
          units: {
            force: g,
            length: R
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
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((r, b) => c.supports.push({
          node: b,
          dofs: r
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((r, b) => c.loads.push({
          node: b,
          forces: r
        }))), s && (c.properties = {}, s.elasticities && (c.properties.E = Object.fromEntries(s.elasticities)), s.areas && (c.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (c.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (c.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = t.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (c.displacements = {}, a.forEach((r, b) => c.displacements[b] = r));
        const i = (_f = (_e2 = t.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        i && i.size > 0 && (c.reactions = {}, i.forEach((r, b) => c.reactions[b] = r));
        const u = xt.querySelector("#export-text");
        u.value = JSON.stringify(c, null, 2);
        const d = xt.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Je() {
      var _a2, _b, _c;
      const e = $e.querySelector("#cad3d-info");
      if (e) {
        const o = t.nodes.val.length, n = t.elements.val, l = n.length, s = ((_c = (_b = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, a = 0, i = 0;
        for (const d of n) d.length === 2 ? c++ : d.length === 3 ? a++ : d.length === 4 && i++;
        let u = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (u += ` | ${c}fr`, i > 0 && (u += ` ${i}q4`), a > 0 && (u += ` ${a}tri`)), e.textContent = u;
      }
    }
    function mn() {
      var _a2;
      if (!ge || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val, n = t.nodeInputs.val, l = t.elementInputs.val;
      if (!(e.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, e.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = ca(e, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          X = c, U = e.map((d) => [
            ...d
          ]), ve = 0;
          const { extent: a } = so(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let d = 0;
            for (let r = 0; r < e.length; r++) {
              const b = i[r * 6] || 0, $ = i[r * 6 + 1] || 0, w = i[r * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + $ * $ + w * w));
            }
            he = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const u = `${L} \u2014 ${e.length}n ${o.length}e`;
          Ie.render(c, {
            title: u
          }), Ie.div.style.display = "", _o(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), X = null;
      }
    }
    function bn() {
      Le && (cancelAnimationFrame(Le), Le = 0), U.length > 0 && (t.nodes.val = U.map((e) => [
        ...e
      ])), Ie.div.style.display = "none", X = null;
    }
    function _o() {
      var _a2;
      if (Le && cancelAnimationFrame(Le), !(X == null ? void 0 : X.modeShapes) || !U.length) return;
      const e = X.modeShapes[ve];
      if (!e) return;
      const o = ((_a2 = X.frequencies) == null ? void 0 : _a2[ve]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = U.length, c = t.elements.rawVal, { extent: a } = so(), i = $e.querySelector("#cad3d-modal-scale"), u = i && parseFloat(i.value) || 5;
      let d = 0;
      for (let I = 0; I < s; I++) {
        const q = e[I * 6] || 0, y = e[I * 6 + 1] || 0, m = e[I * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(q * q + y * y + m * m));
      }
      const r = d > 1e-12 ? a * u / 100 / d : 1, b = tt();
      if (!b) return;
      let $ = null, w = null, x = null;
      b.scene.traverse((I) => {
        var _a3, _b;
        !$ && I.isPoints && I.geometry && ($ = I), !w && I.isLineSegments && I.geometry && !I.name && (w = I), !x && I.isMesh && ((_a3 = I.material) == null ? void 0 : _a3.transparent) && ((_b = I.material) == null ? void 0 : _b.opacity) < 0.5 && I.geometry && (x = I);
      });
      const f = new Float32Array(s * 3), h = [];
      for (const I of c) if (I.length === 2) h.push([
        I[0],
        I[1]
      ]);
      else for (let q = 0; q < I.length; q++) h.push([
        I[q],
        I[(q + 1) % I.length]
      ]);
      const S = new Float32Array(h.length * 6);
      function E() {
        const I = (performance.now() - l) / 1e3, q = Math.sin(2 * Math.PI * n * I) * r;
        for (let y = 0; y < s; y++) {
          const m = U[y];
          f[y * 3] = m[0] + (e[y * 6] || 0) * q, f[y * 3 + 1] = m[1] + (e[y * 6 + 1] || 0) * q, f[y * 3 + 2] = m[2] + (e[y * 6 + 2] || 0) * q;
        }
        if ($) {
          const y = $.geometry, m = y.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : y.setAttribute("position", new ho(f.slice(), 3));
        }
        if (w) {
          for (let p = 0; p < h.length; p++) {
            const [v, M] = h[p];
            S[p * 6] = f[v * 3], S[p * 6 + 1] = f[v * 3 + 1], S[p * 6 + 2] = f[v * 3 + 2], S[p * 6 + 3] = f[M * 3], S[p * 6 + 4] = f[M * 3 + 1], S[p * 6 + 5] = f[M * 3 + 2];
          }
          const y = w.geometry, m = y.getAttribute("position");
          m && m.array.length === S.length ? (m.array.set(S), m.needsUpdate = true) : y.setAttribute("position", new ho(S.slice(), 3));
        }
        if (x) {
          const y = [];
          for (const m of c) if (m.length === 3) {
            const [p, v, M] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[v * 3], f[v * 3 + 1], f[v * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]);
          } else if (m.length === 4) {
            const [p, v, M, k] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[v * 3], f[v * 3 + 1], f[v * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]), y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]), y.push(f[k * 3], f[k * 3 + 1], f[k * 3 + 2]);
          }
          if (y.length > 0) {
            const m = x.geometry, p = new Float32Array(y), v = m.getAttribute("position");
            v && v.array.length === p.length ? (v.array.set(p), v.needsUpdate = true) : m.setAttribute("position", new ho(p, 3));
          }
        }
        b.render(), Le = requestAnimationFrame(E);
      }
      Le = requestAnimationFrame(E);
    }
    function hn() {
      var _a2, _b, _c, _d, _e2;
      if (!t.deformOutputs || !t.analyzeOutputs || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val;
      let n = t.nodeInputs.val;
      const l = t.elementInputs.val;
      if (e.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = Y("CM") ?? 0, f = Y("CV") ?? 0, h = x + f, S = Y("Ex") ?? 0, E = Y("Ey") ?? 0;
        if (h === 0 && S === 0 && E === 0) return;
        const I = /* @__PURE__ */ new Map(), q = [];
        for (let T = 0; T < e.length; T++) n.supports.has(T) || q.push(T);
        const y = (T) => Math.round(T * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((T, O) => {
          m.add(`${y(e[O][0])},${y(e[O][1])}`);
        });
        const p = /* @__PURE__ */ new Set();
        for (const T of q) m.has(`${y(e[T][0])},${y(e[T][1])}`) && p.add(T);
        const v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (S !== 0 || E !== 0) {
          let T = -1 / 0, O = -1 / 0;
          for (const Z of p) T = Math.max(T, y(e[Z][0])), O = Math.max(O, y(e[Z][1]));
          const F = /* @__PURE__ */ new Map();
          for (const Z of p) {
            const K = y(e[Z][2]);
            F.has(K) || F.set(K, []), F.get(K).push(Z);
          }
          F.forEach((Z) => {
            if (S !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const re of Z) if (y(e[re][0]) === T) {
                const ae = y(e[re][1]);
                K.has(ae) || (K.add(ae), v.add(re));
              }
            }
            if (E !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const re of Z) if (y(e[re][1]) === O) {
                const ae = y(e[re][0]);
                K.has(ae) || (K.add(ae), M.add(re));
              }
            }
          });
        }
        const k = 9.81, P = /* @__PURE__ */ new Map();
        for (let T = 0; T < o.length; T++) {
          const O = o[T], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(T)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (O.length === 2) {
              const Z = ((_b = l.areas) == null ? void 0 : _b.get(T)) ?? 0, K = e[O[0]], re = e[O[1]], ae = Math.sqrt((re[0] - K[0]) ** 2 + (re[1] - K[1]) ** 2 + (re[2] - K[2]) ** 2), ce = -(F * Z * ae * k) / 2;
              P.set(O[0], (P.get(O[0]) ?? 0) + ce), P.set(O[1], (P.get(O[1]) ?? 0) + ce);
            } else if (O.length >= 3) {
              const Z = ((_c = l.thicknesses) == null ? void 0 : _c.get(T)) ?? 0;
              let K = 0;
              if (O.length === 3) {
                const [Q, ce, Me] = O.map((Oe) => e[Oe]);
                K = 0.5 * Math.abs((ce[0] - Q[0]) * (Me[1] - Q[1]) - (Me[0] - Q[0]) * (ce[1] - Q[1]));
              } else if (O.length === 4) {
                const [Q, ce, Me, Oe] = O.map((Re) => e[Re]);
                if (K = 0.5 * Math.abs((ce[0] - Q[0]) * (Me[1] - Q[1]) - (Me[0] - Q[0]) * (ce[1] - Q[1])) + 0.5 * Math.abs((Me[0] - Q[0]) * (Oe[1] - Q[1]) - (Oe[0] - Q[0]) * (Me[1] - Q[1])), K < 1e-10) {
                  const Re = [
                    ce[0] - Q[0],
                    ce[1] - Q[1],
                    ce[2] - Q[2]
                  ], H = [
                    Oe[0] - Q[0],
                    Oe[1] - Q[1],
                    Oe[2] - Q[2]
                  ], de = [
                    Re[1] * H[2] - Re[2] * H[1],
                    Re[2] * H[0] - Re[0] * H[2],
                    Re[0] * H[1] - Re[1] * H[0]
                  ];
                  K = Math.sqrt(de[0] ** 2 + de[1] ** 2 + de[2] ** 2);
                }
              }
              const ae = -(F * Z * K * k) / O.length;
              for (const Q of O) P.set(Q, (P.get(Q) ?? 0) + ae);
            }
          }
        }
        const C = /* @__PURE__ */ new Set();
        for (const T of o) T.length === 2 && (C.add(T[0]), C.add(T[1]));
        for (const T of q) {
          const O = v.has(T) ? S : 0, F = M.has(T) ? E : 0, Z = P.get(T) ?? 0, K = C.has(T) ? h : 0, re = Z + K;
          (O !== 0 || F !== 0 || Math.abs(re) > 1e-10) && I.set(T, [
            O,
            F,
            re,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: I
        }, t.nodeInputs.val = n;
      }
      const s = performance.now();
      let c = 0, a = 0, i = 0;
      for (const x of o) x.length === 2 ? c++ : x.length === 3 ? i++ : x.length === 4 && a++;
      const u = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, r = e.length * 6, b = r - u * 6, $ = [], w = (x) => $.push(x);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${e.length} nodos, ${o.length} elem`), c && w(`&nbsp;&nbsp;Frames: <b>${c}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), i && w(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), w(`&nbsp;&nbsp;Apoyos: ${u} &nbsp;|&nbsp; Cargas: ${d}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${r} total, ~${b} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${r}&times;${r})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const x = Bt(e, o, n, l), f = performance.now() - s;
        if (x) {
          t.deformOutputs.val = x, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, S = -1, E = 0, I = 0;
          x.deformations && x.deformations.forEach((v, M) => {
            const k = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            k > h && (h = k, S = M, E = v[0], I = v[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(E * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(I * 1e3).toFixed(4)} mm`);
          const q = performance.now(), y = Co(e, o, l, x), m = performance.now() - q;
          y && (t.analyzeOutputs.val = y, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const p = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${p.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const f = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${e.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ge && setTimeout(() => mn(), 50);
    }
    function gn(e, o) {
      const n = e * o, l = e * o * o * o / 12, s = o * e * e * e / 12, c = Math.min(e, o), a = Math.max(e, o), i = c * c * c * a * (1 / 3 - 0.21 * c / a * (1 - c * c * c * c / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: i
      };
    }
    function rs(e) {
      const o = e / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function xn(e, o, n, l) {
      const s = o - 2 * n, c = 2 * e * n + s * l, a = (e * o * o * o - (e - l) * s * s * s) / 12, i = (2 * n * e * e * e + s * l * l * l) / 12, u = (2 * e * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: a,
        Iy: i,
        J: u
      };
    }
    function vn(e, o, n) {
      const l = e - 2 * n, s = o - 2 * n, c = e * o - l * s, a = (e * o * o * o - l * s * s * s) / 12, i = (o * e * e * e - s * l * l * l) / 12, u = (e - n) * (o - n), d = 2 * ((e - n) / n + (o - n) / n), r = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: c,
        Iz: a,
        Iy: i,
        J: r
      };
    }
    function Bs(e, o, n, l, s, c, a) {
      const u = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = e - 2 * n, r = o - 2 * n, b = e * o - d * r, $ = (e * o * o * o - d * r * r * r) / 12, w = (o * e * e * e - r * d * d * d) / 12, x = d * r, f = d * r * r * r / 12, h = r * d * d * d / 12, S = b + u * x, E = $ + u * f, I = w + u * h, q = l / (2 * (1 + s)), y = (e - n) * (o - n), m = 2 * ((e - n) / n + (o - n) / n), p = 4 * y * y / (m > 0 ? m : 1);
      return {
        A: S,
        Iz: E,
        Iy: I,
        J: p,
        Es: l,
        Gs: q,
        A_steel: b,
        A_conc: x
      };
    }
    function no() {
      if (!t.elementInputs) return;
      const e = t.elements.val, o = z, n = {
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
        const { colMat: s, vigaMat: c, colShape: a, fc: i, perFloor: u } = ke, d = 4700 * Math.sqrt(i / 1e3) * 1e3, r = d / (2 * 1.2), b = 24 / 9.80665, $ = o.E, w = o.G, x = o.rho;
        for (let f = 0; f < e.length; f++) {
          if (Be.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, M), n.thicknesses.set(f, Ue), n.shearModuli.set(f, v / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (yt.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, M), n.thicknesses.set(f, De), n.shearModuli.set(f, v / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = ue.has(f), S = Fe.get(f) ?? 0, E = u[S] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let I, q, y, m;
          if (h) if (s === 0) q = d, y = r, m = b, I = a === 1 ? rs(E.dCol) : gn(E.bCol, E.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: E.dCol
          } : {
            type: "rect",
            b: E.bCol,
            h: E.hCol
          });
          else if (s === 1) {
            q = $, y = w, m = x;
            const v = ke.steelColType;
            if (v <= 1) {
              const M = fo[E.colProfileIdx] ?? fo[0];
              I = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (v === 2) {
              const M = E.colBf ?? 0.3, k = E.colHf ?? 0.3, P = E.colTf ?? 0.02, C = E.colTw ?? 0.012;
              I = xn(M, k, P, C);
              const T = `I${(k * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: M,
                h: k,
                tf: P,
                tw: C,
                name: T
              });
            } else {
              const M = E.colBc ?? 0.3, k = E.colHc ?? 0.3, P = E.colT ?? 0.01;
              I = vn(M, k, P);
              const C = `\u25A1${(k * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: M,
                h: k,
                tw: P,
                name: C
              });
            }
          } else {
            const v = E.colBc ?? 0.3, M = E.colHc ?? 0.3, k = E.colT ?? 0.01, P = E.colFc ?? 28e3, C = E.colEs ?? 2e8, T = E.colNuS ?? 0.3;
            E.colNuC;
            const O = Bs(v, M, k, C, T, P);
            I = {
              A: O.A,
              Iz: O.Iz,
              Iy: O.Iy,
              J: O.J
            }, q = O.Es, y = O.Gs;
            const F = 7.85, Z = 24 / 9.80665;
            m = (F * O.A_steel + Z * O.A_conc) / (O.A_steel + O.A_conc);
            const K = `CFT ${(M * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(k * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: v,
              h: M,
              tw: k,
              name: K
            });
          }
          else {
            const v = Ve.get(f), M = v ? v.dir === "x" ? E.vigasX : E.vigasY : [], k = v ? M[v.bay] ?? M[0] ?? At() : At();
            if (c === 0) q = d, y = r, m = b, I = gn(k.b, k.h), n.sectionShapes.set(f, {
              type: "rect",
              b: k.b,
              h: k.h
            });
            else {
              q = $, y = w, m = x;
              const P = ke.steelVigaType;
              if (P <= 1) {
                const C = fo[k.profileIdx ?? 0] ?? fo[0];
                I = {
                  A: C.A,
                  Iz: C.Iz,
                  Iy: C.Iy,
                  J: C.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: C.bf,
                  h: C.d,
                  name: C.name
                });
              } else if (P === 2) {
                const C = k.bf ?? 0.2, T = k.hf ?? 0.4, O = k.tf ?? 0.015, F = k.tw ?? 0.01;
                I = xn(C, T, O, F);
                const Z = `I${(T * 100).toFixed(0)}x${(C * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: C,
                  h: T,
                  tf: O,
                  tw: F,
                  name: Z
                });
              } else {
                const C = k.bc ?? 0.2, T = k.hc ?? 0.3, O = k.t ?? 8e-3;
                I = vn(C, T, O);
                const F = `\u25A1${(T * 100).toFixed(0)}x${(C * 100).toFixed(0)}x${(O * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: C,
                  h: T,
                  tw: O,
                  name: F
                });
              }
            }
          }
          const p = be.get(f);
          if (p) {
            if ((p.material ?? 1) === 0 ? (q = d, y = r, m = b) : (q = $, y = w, m = x), p.secType === "rect" && p.b && p.h) I = gn(p.b, p.h), n.sectionShapes.set(f, {
              type: "rect",
              b: p.b,
              h: p.h
            });
            else if (p.secType === "circ" && p.b) I = rs(p.b), n.sectionShapes.set(f, {
              type: "circ",
              d: p.b
            });
            else if ((p.secType === "W" || p.secType === "HSS") && p.profileIdx !== void 0) {
              const M = fo[p.profileIdx] ?? fo[0];
              I = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (p.secType === "I-param" && p.bf && p.hf && p.tf && p.tw) {
              I = xn(p.bf, p.hf, p.tf, p.tw);
              const M = `I${(p.hf * 100).toFixed(0)}x${(p.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: p.bf,
                h: p.hf,
                tf: p.tf,
                tw: p.tw,
                name: M
              });
            } else if (p.secType === "tubular" && p.bc && p.hc && p.t) {
              I = vn(p.bc, p.hc, p.t);
              const M = `\u25A1${(p.hc * 100).toFixed(0)}x${(p.bc * 100).toFixed(0)}x${(p.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: p.bc,
                h: p.hc,
                tw: p.t,
                name: M
              });
            }
          }
          n.elasticities.set(f, q), n.shearModuli.set(f, y), n.areas.set(f, I.A), n.momentsOfInertiaZ.set(f, I.Iy), n.momentsOfInertiaY.set(f, I.Iz), n.torsionalConstants.set(f, I.J), n.densities.set(f, m);
        }
      } else for (let s = 0; s < e.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      t.elementInputs.val = n;
    }
    function cs(e) {
      $e.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === e);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = $e.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (y) => {
        y.stopPropagation(), $e.classList.add("collapsed");
      }), (_b = $e.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (y) => {
        y.stopPropagation(), $e.classList.remove("collapsed");
      }), $e.querySelectorAll("[data-ex]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.ex;
          cs(p), We.example(p);
        });
      }), $e.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.view;
          ao(p), $e.querySelectorAll("[data-view]").forEach((v) => v.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = $e.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), L = "", Cs.val = false, Rs(), We.clear();
      }), (_d = $e.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Dt && (Dt = false, bo()), Vt && Go(), Ot = !Ot, (_a3 = $e.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Ot);
        const p = tt();
        p && (p.controls.enabled = !Ot), Ot || Yo();
      }), (_e2 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Dt && (Dt = false, bo()), Ot && Yo(), Vt = !Vt, (_a3 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Vt), Vt ? Gs() : Go();
      }), (_f = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Ot && Yo(), Vt && Go(), Dt = !Dt, (_a3 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Dt), Dt || bo();
      }), (_g = $e.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), We.clear(), st = null;
      }), (_h = $e.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), Hs();
      });
      let e = "";
      const o = $e.querySelector("#cad3d-io-menu"), n = $e.querySelector("#cad3d-io-file");
      function l(y, m) {
        t.nodes.val = y.nodes, t.elements.val = y.elements, t.nodeInputs.val = y.nodeInputs, t.elementInputs.val = y.elementInputs, t.deformOutputs.val = {}, t.analyzeOutputs.val = {}, console.log(`${m}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function s(y) {
        ue = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map();
        const m = /* @__PURE__ */ new Map();
        for (let F = 0; F < y.stories.length; F++) m.set(y.stories[F].name, F);
        for (let F = 0; F < y.elementTypes.length; F++) {
          const Z = y.elementTypes[F], K = y.elementStories[F], re = m.get(K) ?? 0;
          Fe.set(F, re), Z === "COLUMN" || Z === "BRACE" ? ue.add(F) : Ae.add(F);
        }
        L = "edificio";
        const p = y.grids.filter((F) => F.dir === "X").sort((F, Z) => F.coord - Z.coord), v = y.grids.filter((F) => F.dir === "Y").sort((F, Z) => F.coord - Z.coord);
        let M, k, P, C;
        if (p.length > 0 || v.length > 0) M = p.map((F) => F.coord), k = v.map((F) => F.coord), P = p.map((F) => F.label), C = v.map((F) => F.label);
        else {
          const F = new Set(y.nodes.map((K) => K[0])), Z = new Set(y.nodes.map((K) => K[1]));
          M = [
            ...F
          ].sort((K, re) => K - re), k = [
            ...Z
          ].sort((K, re) => K - re), P = M.map((K, re) => String(re + 1)), C = k.map((K, re) => String.fromCharCode(65 + re));
        }
        const T = y.stories.length > 0 ? Math.max(...y.stories.map((F) => F.elev)) : Math.max(...y.nodes.map((F) => F[2]));
        Pe = M, Ce = k, Qe = T, setTimeout(() => {
          Et(), Oo(M, k, T, P, C), an(y.stories, M, k), yn(), $n();
        }, 100);
        const O = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const F of y.elementTypes) O[F]++;
        console.log(`E2K grids: X=[${P.join(",")}] Y=[${C.join(",")}]`), console.log(`E2K stories: ${y.stories.map((F) => `${F.name}@${F.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${O.COLUMN} columns, ${O.BEAM} beams, ${O.BRACE} braces`), Je();
      }
      function c(y, m) {
        const p = new Blob([
          y
        ], {
          type: "text/plain"
        }), v = URL.createObjectURL(p), M = document.createElement("a");
        M.href = v, M.download = m, M.click(), URL.revokeObjectURL(v);
      }
      o && o.addEventListener("change", () => {
        if (e = o.value, o.value = "", e.startsWith("import")) e === "import-e2k" ? n.accept = ".e2k,.E2K" : e === "import-py" ? n.accept = ".py" : e === "import-tcl" && (n.accept = ".tcl"), n.click();
        else if (e.startsWith("export")) {
          const y = {
            nodes: t.nodes.val,
            elements: t.elements.val,
            nodeInputs: t.nodeInputs.val,
            elementInputs: t.elementInputs.val
          };
          try {
            e === "export-e2k" ? c(Da({
              ...y,
              title: "Awatif Model",
              e2kModel: st ?? void 0
            }), "model.e2k") : e === "export-py" ? c(Ga(y), "model_opensees.py") : e === "export-tcl" && c(Ja(y), "model_opensees.tcl");
          } catch (m) {
            alert("Export error: " + m.message);
          }
        }
      }), n && n.addEventListener("change", () => {
        var _a3;
        const y = (_a3 = n.files) == null ? void 0 : _a3[0];
        if (!y) return;
        const m = new FileReader();
        m.onload = () => {
          const p = m.result;
          try {
            if (e === "import-e2k") {
              const v = Ba(p);
              st = v, l(v, "E2K imported"), s(v);
            } else if (e === "import-py") {
              const v = Va(p);
              l(v, "OpenSeesPy imported");
            } else if (e === "import-tcl") {
              const v = Xa(p);
              l(v, "OpenSees Tcl imported");
            }
          } catch (v) {
            alert("Import error: " + v.message), console.error(v);
          }
        }, m.readAsText(y), n.value = "";
      });
      const a = $e.querySelector("#cad3d-force-unit");
      a && (a.value = g, a.addEventListener("change", (y) => {
        y.stopPropagation(), g = a.value, z = vo(g, R), L && Xe(L);
      }));
      const i = $e.querySelector("#cad3d-length-unit");
      i && (i.value = R, i.addEventListener("change", (y) => {
        y.stopPropagation(), R = i.value, z = vo(g, R), L && Xe(L);
      })), $e.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.preset, v = _[p];
          v && (g = v.force, R = v.length, G = v.stress, z = vo(g, R), a && (a.value = g), i && (i.value = R), $e.querySelectorAll("[data-preset]").forEach((M) => {
            M.classList.toggle("active", M.dataset.preset === p);
          }), L && Xe(L), console.log(`Preset: ${p} \u2192 ${g}+${R}, stress: ${G.label}`));
        });
      }), (_i = $e.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), ea();
      }), (_j = $e.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), ta();
      }), (_k = $e.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), na();
      }), (_l = $e.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), aa();
      }), (_m = $e.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), ge = !ge, (_a3 = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ge);
        const p = $e.querySelector("#cad3d-mode-prev"), v = $e.querySelector("#cad3d-mode-next"), M = $e.querySelector("#cad3d-mode-label"), k = $e.querySelector("#cad3d-modal-scale");
        if (ge) {
          const P = tt();
          ((_b2 = P == null ? void 0 : P.settings) == null ? void 0 : _b2.loads) && (Ne = P.settings.loads.rawVal, P.settings.loads.val = false), mn(), p.style.display = "", v.style.display = "", M.style.display = "", k && (k.style.display = ""), u();
        } else bn(), p.style.display = "none", v.style.display = "none", M.style.display = "none", k && (k.style.display = "none"), L && L !== "placa-q4" && L !== "placa-3q" && ye(), setTimeout(() => {
          var _a4;
          const P = tt();
          ((_a4 = P == null ? void 0 : P.settings) == null ? void 0 : _a4.loads) && Ne && (P.settings.loads.val = true);
        }, 600);
      });
      function u() {
        var _a3;
        const y = $e.querySelector("#cad3d-mode-label");
        if (!y || !(X == null ? void 0 : X.frequencies)) return;
        const m = X.frequencies[ve], p = m > 0 ? 1 / m : 0, v = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let M = 0; M <= ve; M++) {
          const k = (_a3 = X.massParticipation) == null ? void 0 : _a3[M];
          if (k) for (let P = 0; P < 6; P++) v[P] += k[P];
        }
        y.textContent = `Modo ${ve + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${p.toFixed(3)}s \u2014 \u03A3Ux=${(v[0] * 100).toFixed(1)}% \u03A3Uy=${(v[1] * 100).toFixed(1)}% \u03A3Rz=${(v[5] * 100).toFixed(1)}%`;
      }
      (_n2 = $e.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(X == null ? void 0 : X.modeShapes)) return;
        ve = (ve - 1 + X.modeShapes.length) % X.modeShapes.length;
        const m = X.modeShapes[ve], { extent: p } = so();
        let v = 0;
        for (let M = 0; M < U.length; M++) {
          const k = m[M * 6] || 0, P = m[M * 6 + 1] || 0, C = m[M * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(k * k + P * P + C * C));
        }
        he = v > 1e-12 ? p * 0.05 / v : 1, _o(), u();
      }), (_o2 = $e.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(X == null ? void 0 : X.modeShapes)) return;
        ve = (ve + 1) % X.modeShapes.length;
        const m = X.modeShapes[ve], { extent: p } = so();
        let v = 0;
        for (let M = 0; M < U.length; M++) {
          const k = m[M * 6] || 0, P = m[M * 6 + 1] || 0, C = m[M * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(k * k + P * P + C * C));
        }
        he = v > 1e-12 ? p * 0.05 / v : 1, _o(), u();
      });
      const d = $e.querySelector("#cad3d-modal-scale");
      d == null ? void 0 : d.addEventListener("mousedown", (y) => y.stopPropagation()), d == null ? void 0 : d.addEventListener("change", () => {
        ge && (X == null ? void 0 : X.modeShapes) && _o();
      });
      const r = $e.querySelector("#cad3d-cli-toggle"), b = $e.querySelector("#cad3d-cli-panel"), $ = $e.querySelector("#cad3d-cli-output"), w = $e.querySelector("#cad3d-cmd"), x = [];
      let f = -1;
      r == null ? void 0 : r.addEventListener("click", (y) => {
        if (y.stopPropagation(), b) {
          const m = b.style.display !== "none";
          b.style.display = m ? "none" : "block", m || (w == null ? void 0 : w.focus(), $ && !$.textContent && ($.textContent = `CLI ready. Commands:
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
          y.preventDefault(), ps();
          return;
        }
        if ((y.ctrlKey || y.metaKey) && (y.key === "y" || y.key === "z" && y.shiftKey)) {
          y.preventDefault(), fs();
          return;
        }
        if ((y.key === "Delete" || y.key === "Backspace") && ct.size > 0) {
          y.preventDefault(), ct.forEach((m) => V.add(m)), ct.clear(), Kt && (Kt.remove(), Kt = null), ye();
          return;
        }
        if (y.key === "Escape") {
          if (Vt) if (dt !== null) {
            dt = null;
            const m = tt();
            zt && m && (m.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), Lt && m && (m.scene.remove(Lt), Lt.geometry.dispose(), Lt.material.dispose(), Lt = null), m == null ? void 0 : m.render();
          } else Go();
          Ot && Yo(), Dt && (Dt = false, bo(), (_a3 = $e.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), w == null ? void 0 : w.addEventListener("keydown", (y) => {
        if (y.stopPropagation(), y.key === "Enter") {
          const m = w.value.trim();
          if (m) {
            x.unshift(m), f = -1, $ && ($.textContent += `> ${m}
`);
            try {
              const p = new Function("cad", `return ${m}`)(We);
              if (p !== void 0 && $) {
                const v = typeof p == "object" ? JSON.stringify(p, null, 2) : String(p);
                $.textContent += `${v}
`;
              }
            } catch (p) {
              $ && ($.textContent += `ERROR: ${p.message}
`);
            }
            $ && ($.scrollTop = $.scrollHeight), w.value = "";
          }
        } else y.key === "ArrowUp" ? (y.preventDefault(), x.length > 0 && f < x.length - 1 && (f++, w.value = x[f])) : y.key === "ArrowDown" && (y.preventDefault(), f > 0 ? (f--, w.value = x[f]) : (f = -1, w.value = ""));
      });
      let h = false, S = 0, E = 0, I = 0, q = 0;
      $e.addEventListener("mousedown", (y) => {
        const m = y.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        h = true;
        const p = $e.getBoundingClientRect();
        $e.style.bottom = "unset", S = y.clientX, E = y.clientY, I = p.left, q = p.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        h && (y.preventDefault(), $e.style.left = I + (y.clientX - S) + "px", $e.style.top = q + (y.clientY - E) + "px");
      }), window.addEventListener("mouseup", () => {
        h = false;
      }), Je();
    }, 10);
    function tt() {
      const e = document.getElementById("viewer");
      return e ? e.__ctx : null;
    }
    function so() {
      const e = t.nodes.val;
      if (e.length === 0) return {
        center: new Se(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, a = -1 / 0;
      for (const [d, r, b] of e) d < o && (o = d), d > s && (s = d), r < n && (n = r), r > c && (c = r), b < l && (l = b), b > a && (a = b);
      const i = new Se((o + s) / 2, (n + c) / 2, (l + a) / 2), u = Math.max(s - o, c - n, a - l, 1);
      return {
        center: i,
        extent: u
      };
    }
    function Et(e = false) {
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
      const u = 0.05 * l, d = new Vo();
      d.name = "viewerAxes";
      const r = c.axisArrow;
      d.add(new Jo(new Se(1, 0, 0), new Se(), 1, r, 0.2, 0.2)), d.add(new Jo(new Se(0, 1, 0), new Se(), 1, r, 0.2, 0.2)), d.add(new Jo(new Se(0, 0, 1), new Se(), 1, r, 0.2, 0.2)), d.children.forEach((b) => b.scale.set(u, u, u));
      for (const [b, $, w] of [
        [
          "X",
          "red",
          [
            1.3 * u,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * u,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * u
          ]
        ]
      ]) {
        const x = document.createElement("canvas");
        x.width = 64, x.height = 64;
        const f = x.getContext("2d");
        f.fillStyle = $, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(b, 32, 34);
        const h = new qn(x);
        h.needsUpdate = true;
        const S = new Xo(new Ko({
          map: h,
          depthTest: false,
          transparent: true
        }));
        S.position.set(w[0], w[1], w[2]), S.scale.set(0.4 * u, 0.4 * u, 1), S.renderOrder = 99, d.add(S);
      }
      o.scene.add(d), e ? o.render() : ao("3d");
    }
    function ds(e, o, n) {
      if (e.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(e[o] - e[o - 1]))), o < e.length - 1 && (l = Math.min(l, Math.abs(e[o + 1] - e[o]))), l * 0.45 || n * 0.1;
    }
    function ao(e) {
      var _a2;
      const o = tt();
      if (!o) return;
      const { center: n, extent: l } = so(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((i) => {
          var _a3;
          if (!i.material) return;
          const u = i.type === "GridHelper" || i.type === "AxesHelper", d = i.isSprite, r = ((_a3 = i.userData) == null ? void 0 : _a3.noClip) === true;
          (u || d || r) && (Array.isArray(i.material) ? i.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : i.material.clippingPlanes = []);
        });
      };
      if (e === "3d") {
        const i = o.perspCamera.fov, u = l / (2 * Math.tan(i * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + u * 0.5, n.y - u * 0.8, n.z + u * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const i = o.orthoCamera;
        i.left = -c * s, i.right = c * s, i.top = c, i.bottom = -c, i.near = -l * 10, i.far = l * 10, i.updateProjectionMatrix();
        const u = (d, r, b) => {
          i.position.copy(d), i.up.copy(b), o.controls.target.copy(r), i.lookAt(r), o.controls.update();
        };
        if (e === "plan") o.renderer.clippingPlanes = [], u(new Se(n.x, n.y, n.z + l * 2), new Se(n.x, n.y, n.z), new Se(0, 1, 0));
        else if (e.startsWith("plan:")) {
          const d = parseInt(e.split(":")[1]), r = ((_a2 = te.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * r, $ = r * 0.45;
          o.renderer.clippingPlanes = [
            new po(new Se(0, 0, -1), b + $),
            new po(new Se(0, 0, 1), -b + $)
          ], a(), u(new Se(n.x, n.y, b + l * 2), new Se(n.x, n.y, b), new Se(0, 1, 0));
        } else if (e === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (e === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (e.startsWith("axisX:")) {
          const d = parseInt(e.split(":")[1]), r = Pe[d] ?? n.x;
          if (Ce.length > 1) {
            const $ = ds(Pe, d, l);
            o.renderer.clippingPlanes = [
              new po(new Se(-1, 0, 0), r + $),
              new po(new Se(1, 0, 0), -r + $)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (e.startsWith("axisY:")) {
          const d = parseInt(e.split(":")[1]), r = Ce[d] ?? n.y;
          if (Pe.length > 1) {
            const $ = ds(Ce, d, l);
            o.renderer.clippingPlanes = [
              new po(new Se(0, -1, 0), r + $),
              new po(new Se(0, 1, 0), -r + $)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !e.startsWith("axisX:") && !e.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function yn() {
      const e = $e.querySelector("#cad3d-axis-buttons");
      if (!e) return;
      if (Pe.length < 2 && Ce.length < 2) {
        e.style.display = "none";
        return;
      }
      e.style.display = "", e.innerHTML = "";
      const o = (c, a, i) => {
        const u = document.createElement("button");
        return u.textContent = c, u.dataset.view = a, u.title = i, u.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", u.addEventListener("click", (d) => {
          var _a2;
          d.stopPropagation();
          const r = u.classList.contains("view-active");
          $e.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), r ? (ao("3d"), (_a2 = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (ao(a), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Pe.forEach((c, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        e.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", e.appendChild(s), Ce.forEach((c, a) => {
        const i = `${a + 1}`;
        e.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function $n() {
      var _a2;
      const e = $e.querySelector("#cad3d-floor-buttons");
      if (!e) return;
      const o = Math.round(((_a2 = te.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        e.style.display = "none";
        return;
      }
      e.style.display = "", e.innerHTML = "";
      const n = (s, c, a) => {
        const i = document.createElement("button");
        return i.textContent = s, i.dataset.view = c, i.title = a, i.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", i.addEventListener("click", (u) => {
          var _a3;
          u.stopPropagation();
          const d = i.classList.contains("view-active");
          $e.querySelectorAll("[data-view]").forEach((r) => r.classList.remove("view-active")), d ? (ao("3d"), (_a3 = $e.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (ao(c), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(l);
      for (let s = 0; s < o; s++) e.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ds() {
      ao("3d"), $e.querySelectorAll("[data-view]").forEach((e) => e.classList.toggle("view-active", e.dataset.view === "3d"));
    }
    We.view = (e) => {
      e = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[e] || e, ao(e), $e.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === e));
    };
    let Dt = false, Ot = false, Vt = false, Ft = "line", Rt = [], dt = null, zt = null, Lt = null, Mo = null, _t = null;
    const mt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, wn = 0.5;
    let Mn = [], Ht = null, mo = null;
    const So = [], Wo = [], js = 50;
    function Eo() {
      So.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      }), So.length > js && So.shift(), Wo.length = 0;
    }
    function ps() {
      if (So.length === 0) return;
      Wo.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      });
      const e = So.pop();
      t.nodes.val = e.nodes, t.elements.val = e.elements, no(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    function fs() {
      if (Wo.length === 0) return;
      So.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      });
      const e = Wo.pop();
      t.nodes.val = e.nodes, t.elements.val = e.elements, no(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    const ct = /* @__PURE__ */ new Set();
    let Nt = null, lo = [], Xt = null, Kt = null;
    function Sn(e) {
      const o = tt();
      if (!o) return;
      const n = t.nodes.val, l = t.elements.val[e];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const u = n[l[i]], d = n[l[(i + 1) % l.length]];
        s.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const c = new jt();
      c.setAttribute("position", new ho(s, 3));
      const a = new To(c, new Ao({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = e, o.scene.add(a), lo.push(a), o.render();
    }
    function io() {
      const e = tt();
      lo.forEach((o) => {
        e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), lo = [], e == null ? void 0 : e.render();
    }
    function ro() {
      Kt && Kt.remove();
      const e = W.size > 0 || j;
      if (ct.size === 0 && !e) {
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
          ], l = t.nodes.val, s = t.elements.val;
          let c = 0, a = 0, i = 0, u = 0;
          n.forEach((r) => {
            const b = s[r];
            if (b) if (b.length === 2) {
              const $ = l[b[0]], w = l[b[1]], x = Math.abs(w[0] - $[0]), f = Math.abs(w[1] - $[1]), h = Math.abs(w[2] - $[2]);
              h > x && h > f ? c++ : a++;
            } else b.length === 3 ? i++ : b.length === 4 && u++;
          });
          const d = [];
          c && d.push(`${c} columnas`), a && d.push(`${a} vigas`), u && d.push(`${u} shells Q4`), i && d.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        ct.forEach((n) => W.add(n)), ct.clear(), io(), ro(), ye();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        j = true, D.clear(), ct.forEach((n) => D.add(n)), ct.clear(), io(), ro(), ye();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        W.clear(), j = false, D.clear(), ro(), ye();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Eo(), ct.forEach((n) => V.add(n)), ct.clear(), io(), ro(), ye();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        ct.clear(), io(), ro();
      });
    }
    function Yo() {
      var _a2;
      Ot = false, ct.clear(), io(), Kt && (Kt.remove(), Kt = null), (_a2 = $e.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = tt();
      o && (o.controls.enabled = true);
    }
    function bo() {
      if (Nt) {
        const e = tt();
        e == null ? void 0 : e.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null, e == null ? void 0 : e.render();
      }
      Xt && (Xt.remove(), Xt = null);
    }
    function Ws(e) {
      En();
      const o = tt();
      if (!o) return;
      const n = t.nodes.val[e];
      if (!n) return;
      mo = e;
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
        const i = new Float32Array([
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), u = new jt();
        u.setAttribute("position", new ma(i, 3));
        const d = new Lo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), r = new To(u, d);
        r.computeLineDistances(), r.renderOrder = 9990, o.scene.add(r), Mn.push(r);
      }
      o.render();
    }
    function En() {
      const e = tt();
      for (const o of Mn) e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Mn = [], mo = null, Ht && (Ht.remove(), Ht = null);
    }
    function us(e, o, n, l) {
      Ht || (Ht = document.createElement("div"), Ht.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Ht));
      const s = l.x - n.x, c = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + c * c + a * a), u = Math.abs(s), d = Math.abs(c), r = Math.abs(a);
      let b = "";
      u > d && u > r ? b = `\u0394X=${s.toFixed(2)}` : d > u && d > r ? b = `\u0394Y=${c.toFixed(2)}` : r > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Ht.textContent = `${i.toFixed(3)} m  ${b}`, Ht.style.left = e + 20 + "px", Ht.style.top = o - 10 + "px";
    }
    function Ys(e, o) {
      const l = t.nodes.val[o];
      if (!l) return null;
      const s = new Se(l[0], l[1], l[2]), c = e.clone(), a = c.clone().sub(s), i = 0.3, u = Math.abs(a.x), d = Math.abs(a.y), r = Math.abs(a.z);
      return d < i && r < i && u > 0.01 ? new Se(c.x, s.y, s.z) : u < i && r < i && d > 0.01 ? new Se(s.x, c.y, s.z) : u < i && d < i && r > 0.01 ? new Se(s.x, s.y, c.z) : null;
    }
    function Go() {
      var _a2;
      const e = tt();
      zt && e && (e.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), Lt && e && (e.scene.remove(Lt), Lt.geometry.dispose(), Lt.material.dispose(), Lt = null), En(), dt = null, _t = null, Vt = false, Mo && (Mo.remove(), Mo = null), (_a2 = $e.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), e == null ? void 0 : e.render();
    }
    function Gs() {
      Mo && Mo.remove();
      const e = document.createElement("div");
      e.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      e.innerHTML = `
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
    `, document.body.appendChild(e), Mo = e;
      const l = () => {
        const s = e.querySelector("#dt-line"), c = e.querySelector("#dt-arc"), a = e.querySelector("#dt-node"), i = e.querySelector("#dt-area");
        s && (s.style.cssText = o(Ft === "line")), c && (c.style.cssText = o(Ft === "arc")), a && (a.style.cssText = o(Ft === "node")), i && (i.style.cssText = o(Ft === "area"));
        const u = e.querySelector("#ds-node"), d = e.querySelector("#ds-grid"), r = e.querySelector("#ds-mid"), b = e.querySelector("#ds-track");
        u && (u.style.cssText = n(mt.node)), d && (d.style.cssText = n(mt.grid)), r && (r.style.cssText = n(mt.midpoint)), b && (b.style.cssText = n(mt.track));
      };
      e.querySelector("#dt-line").addEventListener("click", () => {
        Ft = "line", dt = null, _t = null, Rt = [], l();
      }), e.querySelector("#dt-arc").addEventListener("click", () => {
        Ft = "arc", dt = null, _t = null, Rt = [], l();
      }), e.querySelector("#dt-node").addEventListener("click", () => {
        Ft = "node", dt = null, _t = null, Rt = [], l();
      }), e.querySelector("#dt-area").addEventListener("click", () => {
        Ft = "area", dt = null, _t = null, Rt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), e.querySelector("#ds-node").addEventListener("click", () => {
        mt.node = !mt.node, l();
      }), e.querySelector("#ds-grid").addEventListener("click", () => {
        mt.grid = !mt.grid, l();
      }), e.querySelector("#ds-mid").addEventListener("click", () => {
        mt.midpoint = !mt.midpoint, l();
      }), e.querySelector("#ds-track").addEventListener("click", () => {
        mt.track = !mt.track, mt.track || En(), l();
      }), e.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        mt.gridSize = parseFloat(s.target.value) || 0.5;
      }), e.querySelector("#dt-undo").addEventListener("click", () => ps()), e.querySelector("#dt-redo").addEventListener("click", () => fs());
    }
    function ms(e, o, n, l) {
      const s = l.getBoundingClientRect(), c = (e - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new zs();
      i.setFromCamera(new Ls(c, a), n);
      const u = t.nodes.val, d = t.elements.val, r = 0.12;
      if (mt.node) {
        let w = -1, x = 1 / 0;
        for (let f = 0; f < u.length; f++) {
          const h = u[f], S = new Se(h[0], h[1], h[2]).project(n), E = Math.sqrt((S.x - c) ** 2 + (S.y - a) ** 2);
          E < r && E < x && (x = E, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Se(...u[w]),
          snapType: "node"
        };
      }
      if (mt.midpoint) {
        let w = 1 / 0, x = null;
        for (const f of d) {
          if (f.length !== 2) continue;
          const h = u[f[0]], S = u[f[1]], E = new Se((h[0] + S[0]) / 2, (h[1] + S[1]) / 2, (h[2] + S[2]) / 2), I = E.clone().project(n), q = Math.sqrt((I.x - c) ** 2 + (I.y - a) ** 2);
          q < r * 0.8 && q < w && (w = q, x = E);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (mt.grid) {
        const w = new po(new Se(0, 0, 1), 0), x = new Se();
        if (i.ray.intersectPlane(w, x)) {
          const f = mt.gridSize || wn;
          return x.x = Math.round(x.x / f) * f, x.y = Math.round(x.y / f) * f, x.z = Math.round(x.z / f) * f, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const b = new po(new Se(0, 0, 1), 0), $ = new Se();
      return i.ray.intersectPlane(b, $), {
        nodeIdx: null,
        worldPos: $,
        snapType: "free"
      };
    }
    function bs(e) {
      const o = tt();
      if (!o) return;
      const n = t.nodes.val;
      if (Lt && (o.scene.remove(Lt), Lt.geometry.dispose(), Lt.material.dispose(), Lt = null), e.worldPos) {
        const l = e.snapType === "node" ? 16776960 : e.snapType === "mid" ? 16711935 : e.snapType === "grid" ? 65535 : 8947848, s = e.snapType === "node" ? 0.08 : 0.06, c = e.snapType === "mid" ? new ba(s * 2, s * 2, s * 2) : new ha(s, 12, 12), a = new ga({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Lt = new xa(c, a), Lt.position.copy(e.worldPos), Lt.renderOrder = 9999, o.scene.add(Lt);
      }
      if (zt && (o.scene.remove(zt), zt.geometry.dispose(), zt.material.dispose(), zt = null), dt !== null && e.worldPos) {
        const l = n[dt], s = new jt();
        if (Ft === "arc" && _t !== null) {
          const a = n[_t], i = hs(new Se(l[0], l[1], l[2]), new Se(a[0], a[1], a[2]), e.worldPos, 16), u = [];
          for (let d = 0; d < i.length - 1; d++) u.push(i[d].x, i[d].y, i[d].z, i[d + 1].x, i[d + 1].y, i[d + 1].z);
          s.setAttribute("position", new ho(u, 3));
        } else s.setAttribute("position", new ho([
          l[0],
          l[1],
          l[2],
          e.worldPos.x,
          e.worldPos.y,
          e.worldPos.z
        ], 3));
        const c = new Ao({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        zt = new go(s, c), Ft === "arc" && _t !== null && (zt = new To(s, c)), zt.renderOrder = 9999, o.scene.add(zt);
      }
      o.render();
    }
    function hs(e, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const a = c / l, i = o.clone().multiplyScalar(2).sub(e.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), u = (1 - a) * (1 - a), d = 2 * (1 - a) * a, r = a * a;
        s.push(new Se(u * e.x + d * i.x + r * n.x, u * e.y + d * i.y + r * n.y, u * e.z + d * i.z + r * n.z));
      }
      return s;
    }
    function In(e) {
      if (e.nodeIdx !== null) return e.nodeIdx;
      if (!e.worldPos) return -1;
      const o = t.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - e.worldPos.x) < n && Math.abs(o[s][1] - e.worldPos.y) < n && Math.abs(o[s][2] - e.worldPos.z) < n) return s;
      Eo();
      const l = [
        ...o,
        [
          e.worldPos.x,
          e.worldPos.y,
          e.worldPos.z
        ]
      ];
      return t.nodes.val = l, l.length - 1;
    }
    function Js(e) {
      var _a2;
      if (Ft === "node") {
        if (!e.worldPos) return;
        Eo();
        const o = [
          ...t.nodes.val
        ];
        o.push([
          e.worldPos.x,
          e.worldPos.y,
          e.worldPos.z
        ]), t.nodes.val = o;
        return;
      }
      if (Ft === "line") {
        const o = In(e);
        if (o < 0) return;
        if (dt === null) {
          dt = o;
          return;
        }
        if (o === dt) return;
        Eo();
        const n = [
          ...t.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === dt && s[1] === o || s[1] === dt && s[0] === o)) || (n.push([
          dt,
          o
        ]), t.elements.val = n, no(), t.elementInputs.val = {
          ...t.elementInputs.val
        }), dt = o;
        return;
      }
      if (Ft === "arc") {
        const o = In(e);
        if (o < 0) return;
        if (dt === null) {
          dt = o;
          return;
        }
        if (_t === null) {
          if (o === dt) return;
          _t = o;
          return;
        }
        if (o === dt || o === _t) return;
        const n = t.nodes.val, l = new Se(...n[dt]), s = new Se(...n[_t]), c = new Se(...n[o]), a = Math.max(4, Math.round(((_a2 = te.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = hs(l, s, c, a);
        Eo();
        const u = [
          ...t.nodes.val
        ], d = [
          ...t.elements.val
        ];
        let r = dt;
        for (let b = 1; b < i.length; b++) {
          let $;
          if (b === i.length - 1) $ = o;
          else {
            const w = i[b];
            $ = u.length, u.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          d.push([
            r,
            $
          ]), r = $;
        }
        t.nodes.val = u, t.elements.val = d, no(), t.elementInputs.val = {
          ...t.elementInputs.val
        }, dt = o, _t = null;
        return;
      }
      if (Ft === "area") {
        const o = In(e);
        if (o < 0) return;
        if (Rt.length >= 3 && o === Rt[0]) {
          Eo();
          const n = [
            ...t.nodes.val
          ], l = [
            ...t.elements.val
          ], s = Rt.map((c) => n[c]);
          try {
            const c = to({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (i, u) => u),
              maxMeshSize: wn || 0.5
            }), a = [];
            for (const i of c.nodes) {
              let u = -1;
              for (let d = 0; d < n.length; d++) {
                const r = Math.abs(n[d][0] - i[0]), b = Math.abs(n[d][1] - i[1]), $ = Math.abs(n[d][2] - i[2]);
                if (r < 0.01 && b < 0.01 && $ < 0.01) {
                  u = d;
                  break;
                }
              }
              u >= 0 ? a.push(u) : (a.push(n.length), n.push([
                i[0],
                i[1],
                i[2]
              ]));
            }
            for (const i of c.elements) l.push([
              a[i[0]],
              a[i[1]],
              a[i[2]]
            ]);
            t.nodes.val = n, t.elements.val = l, no(), console.log(`Area: ${c.elements.length} triangulos creados desde ${Rt.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          Rt = [];
          return;
        }
        if (Rt.push(o), console.log(`Area vertex ${Rt.length}: node ${o}`), Rt.length >= 2) {
          const n = Rt[Rt.length - 2], l = t.nodes.val, s = tt();
          if (s) {
            const c = new jt().setFromPoints([
              new Se(...l[n]),
              new Se(...l[o])
            ]), a = new To(c, new Ao({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function gs(e) {
      const o = tt();
      if (!o) return;
      Nt && (o.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose());
      const n = t.nodes.val, l = t.elements.val[e];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const i = n[l[a]], u = n[l[(a + 1) % l.length]];
        s.push(i[0], i[1], i[2], u[0], u[1], u[2]);
      }
      const c = new jt();
      c.setAttribute("position", new ho(s, 3)), Nt = new To(c, new Ao({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Nt.renderOrder = 9999, o.scene.add(Nt), o.render();
    }
    function kn(e) {
      const o = tt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new Ls((e.clientX - n.left) / n.width * 2 - 1, -((e.clientY - n.top) / n.height) * 2 + 1), s = new zs();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const c = t.nodes.val, a = t.elements.val;
      if (c.length === 0 || a.length === 0) return -1;
      let i = 1 / 0, u = -1;
      const d = s.ray;
      for (let b = 0; b < a.length; b++) {
        const $ = a[b];
        if ($.length === 2) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new va(w, x), h = new Se(), S = new Se();
          d.closestPointToPoint(f.getCenter(new Se()), h), f.closestPointToPoint(h, true, S);
          const E = h.distanceTo(S);
          E < i && (i = E, u = b);
        } else if ($.length === 3) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), h = new Se();
          if (d.intersectTriangle(w, x, f, false, h)) {
            const E = d.origin.distanceTo(h);
            E < i && (i = E, u = b);
          } else {
            const E = w.add(x).add(f).divideScalar(3), I = new Se();
            d.closestPointToPoint(E, I);
            const q = I.distanceTo(E);
            q < i && (i = q, u = b);
          }
        } else if ($.length === 4) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), h = new Se(...c[$[3]]), S = new Se();
          let E = d.intersectTriangle(w, x, f, false, S);
          if (E) {
            const I = d.origin.distanceTo(S);
            I < i && (i = I, u = b);
          }
          if (E = d.intersectTriangle(w, f, h, false, S), E) {
            const I = d.origin.distanceTo(S);
            I < i && (i = I, u = b);
          }
        }
      }
      const { extent: r } = so();
      return i < r * 0.1 ? u : -1;
    }
    function se(e, o = 4) {
      return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e6 ? e.toExponential(2) : Math.abs(e) >= 100 ? e.toFixed(1) : e.toFixed(o);
    }
    function zn(e, o, n = 12) {
      var _a2;
      const l = Math.min(e.length, n), s = Math.min(((_a2 = e[0]) == null ? void 0 : _a2.length) || 0, n);
      let c = "<table>";
      if (o) {
        c += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) c += `<td class="header">${o[a] || a}</td>`;
        c += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        c += "<tr>", o && (c += `<td class="header">${o[a] || a}</td>`);
        for (let i = 0; i < s; i++) {
          const u = e[a][i], d = Math.abs(u) > 1e-10 ? "nonzero" : "";
          c += `<td class="${d}">${se(u, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function ze(e, o) {
      return `<span class="frac"><span class="frac-num">${e}</span><span class="frac-den">${o}</span></span>`;
    }
    function N(e, o, n) {
      let l = `<span class="var">${e}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Vs(e, o, n, l, s, c, a) {
      const i = `${ze(N("E") + "\xB7" + N("A"), N("L"))}`, u = `${ze("12\xB7" + N("E") + "\xB7" + N("I", "z"), N("L") + "\xB3")}`, d = `${ze("12\xB7" + N("E") + "\xB7" + N("I", "y"), N("L") + "\xB3")}`, r = `${ze(N("G") + "\xB7" + N("J"), N("L"))}`, b = `${ze("4\xB7" + N("E") + "\xB7" + N("I", "y"), N("L"))}`, $ = `${ze("4\xB7" + N("E") + "\xB7" + N("I", "z"), N("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${i} = ${ze(se(e) + "\xB7" + se(o), se(a))} = <span class="highlight">${se(e * o / a)}</span></div>
      <div>${u} = ${ze("12\xB7" + se(e) + "\xB7" + se(n), se(a) + "\xB3")} = <span class="highlight">${se(12 * e * n / a ** 3)}</span></div>
      <div>${d} = ${ze("12\xB7" + se(e) + "\xB7" + se(l), se(a) + "\xB3")} = <span class="highlight">${se(12 * e * l / a ** 3)}</span></div>
      <div>${r} = ${ze(se(s) + "\xB7" + se(c), se(a))} = <span class="highlight">${se(s * c / a)}</span></div>
      <div>${b} = ${ze("4\xB7" + se(e) + "\xB7" + se(l), se(a))} = <span class="highlight">${se(4 * e * l / a)}</span></div>
      <div>${$} = ${ze("4\xB7" + se(e) + "\xB7" + se(n), se(a))} = <span class="highlight">${se(4 * e * n / a)}</span></div>
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
    function Xs(e) {
      if (e.length === 2) {
        const n = oo(e[1], e[0]), l = yo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${N("l")} = cos(\u03B1) = ${ze("\u0394x", N("L"))} = ${ze(se(n[0]), se(l))} = <span class="highlight">${se(s)}</span></div>
        <div>${N("m")} = cos(\u03B2) = ${ze("\u0394y", N("L"))} = ${ze(se(n[1]), se(l))} = <span class="highlight">${se(c)}</span></div>
        <div>${N("n")} = cos(\u03B3) = ${ze("\u0394z", N("L"))} = ${ze(se(n[2]), se(l))} = <span class="highlight">${se(a)}</span></div>
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
    function Us(e) {
      const o = e.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${N("K", "global")}[${N("i")}, ${N("j")}] += ${N("K", "elem")}[${N("i")}, ${N("j")}]</div>
      <div style="margin-top:4px">donde ${N("i")}, ${N("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Zs(e) {
      return e ? `<div class="fem-eq eq-box">
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
    function Ln(e, o) {
      const n = e.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let c = 0; c < n; c++) {
          const a = e[s][c], i = (s === c ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${se(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function xs() {
      const e = "0", o = ze(N("EA"), N("L")), n = ze("\u2212" + N("EA"), N("L")), l = ze("12" + N("EI", "z"), N("L") + "\xB3"), s = ze("\u221212" + N("EI", "z"), N("L") + "\xB3"), c = ze("12" + N("EI", "y"), N("L") + "\xB3"), a = ze("\u221212" + N("EI", "y"), N("L") + "\xB3"), i = ze("6" + N("EI", "z"), N("L") + "\xB2"), u = ze("\u22126" + N("EI", "z"), N("L") + "\xB2"), d = ze("6" + N("EI", "y"), N("L") + "\xB2"), r = ze("\u22126" + N("EI", "y"), N("L") + "\xB2"), b = ze(N("GJ"), N("L")), $ = ze("\u2212" + N("GJ"), N("L")), w = ze("4" + N("EI", "z"), N("L")), x = ze("2" + N("EI", "z"), N("L")), f = ze("4" + N("EI", "y"), N("L")), h = ze("2" + N("EI", "y"), N("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', E = [
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
      ], q = [
        [
          o,
          e,
          e,
          e,
          e,
          e,
          n,
          e,
          e,
          e,
          e,
          e
        ],
        [
          e,
          l,
          e,
          e,
          e,
          i,
          e,
          s,
          e,
          e,
          e,
          i
        ],
        [
          e,
          e,
          c,
          e,
          r,
          e,
          e,
          e,
          a,
          e,
          r,
          e
        ],
        [
          e,
          e,
          e,
          b,
          e,
          e,
          e,
          e,
          e,
          $,
          e,
          e
        ],
        [
          e,
          e,
          r,
          e,
          f,
          e,
          e,
          e,
          d,
          e,
          h,
          e
        ],
        [
          e,
          i,
          e,
          e,
          e,
          w,
          e,
          u,
          e,
          e,
          e,
          x
        ],
        [
          n,
          e,
          e,
          e,
          e,
          e,
          o,
          e,
          e,
          e,
          e,
          e
        ],
        [
          e,
          s,
          e,
          e,
          e,
          u,
          e,
          l,
          e,
          e,
          e,
          u
        ],
        [
          e,
          e,
          a,
          e,
          d,
          e,
          e,
          e,
          c,
          e,
          d,
          e
        ],
        [
          e,
          e,
          e,
          $,
          e,
          e,
          e,
          e,
          e,
          b,
          e,
          e
        ],
        [
          e,
          e,
          r,
          e,
          h,
          e,
          e,
          e,
          d,
          e,
          f,
          e
        ],
        [
          e,
          i,
          e,
          e,
          e,
          x,
          e,
          u,
          e,
          e,
          e,
          w
        ]
      ];
      let y = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      y += '<table><tr><td class="hdr"></td>';
      for (const m of I) y += `<td class="hdr">${m}</td>`;
      y += "</tr>";
      for (let m = 0; m < 12; m++) {
        y += `<tr><td class="hdr">${E[m]}</td>`;
        for (let p = 0; p < 12; p++) if (p < m) y += `<td style="color:var(--fem-border-cell)">${p === 0 && m > 0 ? S : ""}</td>`;
        else {
          const v = q[m][p], M = (m === p ? "diag " : "") + (v !== "0" ? "nz" : "");
          y += `<td class="${M}">${v}</td>`;
        }
        y += "</tr>";
      }
      return y += "</table>", y;
    }
    function Qs(e, o, n, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${ze(N("E") + "\xB7" + N("A"), N("L"))}`,
          calc: `${ze(se(e) + "\xD7" + se(o), se(a))}`,
          val: e * o / a,
          label: "Axial"
        },
        {
          name: `${ze("12\xB7" + N("E") + "\xB7" + N("I", "z"), N("L") + "\xB3")}`,
          calc: `${ze("12\xD7" + se(e) + "\xD7" + se(n), se(a) + "\xB3")}`,
          val: 12 * e * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${ze("6\xB7" + N("E") + "\xB7" + N("I", "z"), N("L") + "\xB2")}`,
          calc: `${ze("6\xD7" + se(e) + "\xD7" + se(n), se(a) + "\xB2")}`,
          val: 6 * e * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ze("12\xB7" + N("E") + "\xB7" + N("I", "y"), N("L") + "\xB3")}`,
          calc: `${ze("12\xD7" + se(e) + "\xD7" + se(l), se(a) + "\xB3")}`,
          val: 12 * e * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${ze("6\xB7" + N("E") + "\xB7" + N("I", "y"), N("L") + "\xB2")}`,
          calc: `${ze("6\xD7" + se(e) + "\xD7" + se(l), se(a) + "\xB2")}`,
          val: 6 * e * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ze(N("G") + "\xB7" + N("J"), N("L"))}`,
          calc: `${ze(se(s) + "\xD7" + se(c), se(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${ze("4\xB7" + N("E") + "\xB7" + N("I", "z"), N("L"))}`,
          calc: `${ze("4\xD7" + se(e) + "\xD7" + se(n), se(a))}`,
          val: 4 * e * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ze("2\xB7" + N("E") + "\xB7" + N("I", "z"), N("L"))}`,
          calc: `${ze("2\xD7" + se(e) + "\xD7" + se(n), se(a))}`,
          val: 2 * e * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ze("4\xB7" + N("E") + "\xB7" + N("I", "y"), N("L"))}`,
          calc: `${ze("4\xD7" + se(e) + "\xD7" + se(l), se(a))}`,
          val: 4 * e * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ze("2\xB7" + N("E") + "\xB7" + N("I", "y"), N("L"))}`,
          calc: `${ze("2\xD7" + se(e) + "\xD7" + se(l), se(a))}`,
          val: 2 * e * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${se(u.val)}</span></div>`).join("")}</div>`;
    }
    function Tn(e, o, n, l) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const c = document.createElement("div");
      c.className = "fem-full-overlay", c.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${e}</h2>
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
    function vs(e) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Xt && Xt.remove();
      const o = t.nodes.val, n = t.elements.val, l = n[e], s = l.map((m) => o[m]), c = l.length === 2, a = ((_a2 = t.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = t.deformOutputs) == null ? void 0 : _b.val, u = (_c = t.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const m = yo(oo(s[1], s[0])), p = ((_d = a.elasticities) == null ? void 0 : _d.get(e)) ?? 0, v = ((_e2 = a.areas) == null ? void 0 : _e2.get(e)) ?? 0, M = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(e)) ?? 0, k = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(e)) ?? 0, P = ((_h = a.shearModuli) == null ? void 0 : _h.get(e)) ?? 0, C = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(e)) ?? 0;
        `${l[0]}${l[1]}${se(m)}${se(p)}${se(v)}${se(M)}${se(k)}${se(P)}${se(C)}`;
      } else {
        const m = ((_j = a.elasticities) == null ? void 0 : _j.get(e)) ?? 0, p = ((_k = a.thicknesses) == null ? void 0 : _k.get(e)) ?? 0, v = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(e)) ?? 0;
        `${l.join(", ")}${se(m)}${se(p)}${se(v)}`;
      }
      let d = "", r = "", b = "", $ = "", w = "", x = "", f = "", h = "", S = null, E = null, I = null, q = [];
      try {
        if (S = on(s, a, e), E = nn(s), I = Wt(_n(E), Wt(S, E)), q = c ? [
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
          const M = yo(oo(s[1], s[0])), k = ((_m = a.elasticities) == null ? void 0 : _m.get(e)) ?? 0, P = ((_n2 = a.areas) == null ? void 0 : _n2.get(e)) ?? 0, C = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(e)) ?? 0, T = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(e)) ?? 0, O = ((_q = a.shearModuli) == null ? void 0 : _q.get(e)) ?? 0, F = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(e)) ?? 0;
          $ = Vs(k, P, C, T, O, F, M);
        }
        w = Xs(s), x = Ks(), f = Us(l), h = Zs(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', p = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${m}</div>${zn(S, q)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${E.length}\xD7${E.length}) ${p}</div>${zn(E, q)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${zn(I, q)}`;
      } catch (m) {
        d = `<div style="color:red">Error: ${m.message}</div>`;
      }
      if (i == null ? void 0 : i.deformations) {
        const m = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((p, v) => {
          var _a3;
          const M = ((_a3 = i.deformations) == null ? void 0 : _a3.get(p)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], k = m.map((P, C) => `<span class="prop-key">${P}</span>: <span class="${Math.abs(M[C]) > 1e-10 ? "result-val" : ""}">${se(M[C])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${p}:</strong> ${k}</div>`;
        }).join("");
      }
      if (u && c && (i == null ? void 0 : i.deformations) && S && E) {
        const m = (_s2 = u.normals) == null ? void 0 : _s2.get(e), p = (_t2 = u.shearsY) == null ? void 0 : _t2.get(e), v = (_u = u.shearsZ) == null ? void 0 : _u.get(e), M = (_v = u.torsions) == null ? void 0 : _v.get(e), k = (_w = u.bendingsY) == null ? void 0 : _w.get(e), P = (_x = u.bendingsZ) == null ? void 0 : _x.get(e), C = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], T = [];
        for (const ae of l) {
          const Q = ((_y = i.deformations) == null ? void 0 : _y.get(ae)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          T.push(...Q);
        }
        let O = [];
        try {
          O = Wt(E, T);
        } catch {
          O = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = Wt(S, O);
        } catch {
          F = new Array(12).fill(0);
        }
        const Z = (ae, Q) => ae.map((ce, Me) => `<span style="color:${Math.abs(ce) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[Me % 6]}=${se(ce)}</span>`).join(", "), re = [
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
        ].map((ae, Q) => `${ae}${Q < 6 ? "\u1D62" : "\u2C7C"}`);
        `${N("u", "global")}${l.map((ae, Q) => `<span style="color:var(--fem-label)">nodo ${ae}:</span> ${C.map((ce, Me) => `<span style="color:${Math.abs(T[Q * 6 + Me]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${se(T[Q * 6 + Me])}</span>`).join(", ")}`).join(" | ")}${N("u", "local")}${N("T")}${N("u", "global")}${N("u", "local")}${Z(O, [
          ...C,
          ...C
        ])}${N("f", "local")}${N("k", "local")}${N("u", "local")}${N("f", "local")}${F.map((ae, Q) => `<span style="color:${Math.abs(ae) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${re[Q]}=${se(ae)}</span>`).join(", ")}${N("P", "1")}${N("N", "i")}${se(F[0])}${N("P", "7")}${N("N", "j")}${se(F[6])}${N("P", "2")}${N("V", "y,i")}${se(F[1])}${N("P", "8")}${N("V", "y,j")}${se(F[7])}${N("P", "3")}${N("V", "z,i")}${se(F[2])}${N("P", "9")}${N("V", "z,j")}${se(F[8])}${N("P", "4")}${N("M", "x,i")}${se(F[3])}${N("P", "10")}${N("M", "x,j")}${se(F[9])}${N("P", "5")}${N("M", "y,i")}${se(F[4])}${N("P", "11")}${N("M", "y,j")}${se(F[10])}${N("P", "6")}${N("M", "z,i")}${se(F[5])}${N("P", "12")}${N("M", "z,j")}${se(F[11])}${m ? m.map((ae) => se(ae)).join(", ") : "\u2014"}${p ? p.map((ae) => se(ae)).join(", ") : "\u2014"}${v ? v.map((ae) => se(ae)).join(", ") : "\u2014"}${M ? M.map((ae) => se(ae)).join(", ") : "\u2014"}${k ? k.map((ae) => se(ae)).join(", ") : "\u2014"}${P ? P.map((ae) => se(ae)).join(", ") : "\u2014"}`;
      } else if (u && c) {
        const m = (_z = u.normals) == null ? void 0 : _z.get(e), p = (_A = u.shearsY) == null ? void 0 : _A.get(e), v = (_B = u.shearsZ) == null ? void 0 : _B.get(e), M = (_C = u.torsions) == null ? void 0 : _C.get(e), k = (_D = u.bendingsY) == null ? void 0 : _D.get(e), P = (_E = u.bendingsZ) == null ? void 0 : _E.get(e);
        `${m ? m.map((C) => se(C)).join(", ") : "\u2014"}${p ? p.map((C) => se(C)).join(", ") : "\u2014"}${v ? v.map((C) => se(C)).join(", ") : "\u2014"}${M ? M.map((C) => se(C)).join(", ") : "\u2014"}${k ? k.map((C) => se(C)).join(", ") : "\u2014"}${P ? P.map((C) => se(C)).join(", ") : "\u2014"}`;
      } else if (u && !c) {
        const m = (_F = u.bendingXX) == null ? void 0 : _F.get(e), p = (_G = u.bendingYY) == null ? void 0 : _G.get(e), v = (_H = u.bendingXY) == null ? void 0 : _H.get(e), M = (_I = u.membraneXX) == null ? void 0 : _I.get(e), k = (_J = u.membraneYY) == null ? void 0 : _J.get(e), P = (_K = u.membraneXY) == null ? void 0 : _K.get(e);
        `${m ? m.map((C) => se(C)).join(", ") : "\u2014"}${p ? p.map((C) => se(C)).join(", ") : "\u2014"}${v ? v.map((C) => se(C)).join(", ") : "\u2014"}${M ? M.map((C) => se(C)).join(", ") : "\u2014"}${k ? k.map((C) => se(C)).join(", ") : "\u2014"}${P ? P.map((C) => se(C)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Xt = Fa(e, o, n, a, i, u), Xt.id = "fem-inspect-panel", document.body.appendChild(Xt), (_L = Xt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => bo());
      const y = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = yo(oo(s[1], s[0])), p = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(e)) ?? 0, v = ((_b2 = a.areas) == null ? void 0 : _b2.get(e)) ?? 0, M = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(e)) ?? 0, k = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0, P = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(e)) ?? 0, C = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(e)) ?? 0;
        return Qs(p, v, M, k, P, C, m);
      })() : void 0;
      Xt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (p) => {
          p.stopPropagation();
          const v = m.dataset.full;
          if (v === "kLocal" && S) {
            const M = c ? xs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Tn(`Elemento ${e} \u2014 Rigidez Local k_local`, M, Ln(S, q), y);
          } else if (v === "T" && E) Tn(`Elemento ${e} \u2014 Transformaci\xF3n T`, w, Ln(E, q));
          else if (v === "kGlobal" && I) {
            const M = c ? xs() : "<em>Shell 18\xD718</em>";
            Tn(`Elemento ${e} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, Ln(I, q), y);
          }
        });
      });
    }
    function ys() {
      const l = [], s = [];
      for (let x = 0; x <= 8; x++) {
        const f = x / 8, h = 30 * f, E = 12 * (1 - f) * (1 - f * 0.3) / 2, I = l.length;
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
        ]), x > 0 && x < 8 && (s.push([
          I,
          I + 2
        ]), s.push([
          I + 1,
          I + 3
        ])), x > 0) {
          const q = I - 4;
          for (let y = 0; y < 4; y++) s.push([
            q + y,
            I + y
          ]);
          s.push([
            q,
            I + 1
          ]), s.push([
            q + 1,
            I + 2
          ]), s.push([
            q + 2,
            I + 3
          ]), s.push([
            q + 3,
            I
          ]);
        }
      }
      const c = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) c.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, i = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) i.set(a + x, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      t.nodes.val = l, t.elements.val = s, t.nodeInputs && (t.nodeInputs.val = {
        supports: c,
        loads: i
      });
      const u = 2e8, d = 77e6, r = 5e-3, b = 2e-6, $ = 1e-6, w = {
        elasticities: new Map(s.map((x, f) => [
          f,
          u
        ])),
        shearModuli: new Map(s.map((x, f) => [
          f,
          d
        ])),
        areas: new Map(s.map((x, f) => [
          f,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((x, f) => [
          f,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((x, f) => [
          f,
          b
        ])),
        torsionalConstants: new Map(s.map((x, f) => [
          f,
          $
        ]))
      };
      t.elementInputs && (t.elementInputs.val = w);
      try {
        const x = Bt(l, s, {
          supports: c,
          loads: i
        }, w);
        x && t.deformOutputs && (t.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function $s() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const x = w / 20, f = 20 * x, h = 20 * (1 - Math.pow(2 * x - 1, 2)), S = 2;
        l.push([
          f,
          -2 / 2,
          h
        ]), l.push([
          f,
          S / 2,
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
      t.nodes.val = l, t.elements.val = s, t.nodeInputs && (t.nodeInputs.val = {
        supports: c,
        loads: a
      });
      const i = 2e8, u = 77e6, d = 0.01, r = 5e-6, b = 2e-6, $ = {
        elasticities: new Map(s.map((w, x) => [
          x,
          i
        ])),
        shearModuli: new Map(s.map((w, x) => [
          x,
          u
        ])),
        areas: new Map(s.map((w, x) => [
          x,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((w, x) => [
          x,
          r
        ])),
        momentsOfInertiaY: new Map(s.map((w, x) => [
          x,
          r
        ])),
        torsionalConstants: new Map(s.map((w, x) => [
          x,
          b
        ]))
      };
      t.elementInputs && (t.elementInputs.val = $);
      try {
        const w = Bt(l, s, {
          supports: c,
          loads: a
        }, $);
        w && t.deformOutputs && (t.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ws() {
      const c = [], a = [];
      for (let f = 0; f <= 16; f++) {
        const h = 60 * f / 16;
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
      const i = c.length;
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
      const u = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], d = [];
      for (const f of u) {
        const h = 60 * f / 16, S = c.length;
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
        const I = c.length;
        c.push([
          h,
          -6 / 2,
          28
        ]);
        const q = c.length;
        c.push([
          h,
          6 / 2,
          28
        ]), d.push(I, q), a.push([
          S,
          f * 2
        ]), a.push([
          f * 2,
          I
        ]), a.push([
          E,
          f * 2 + 1
        ]), a.push([
          f * 2 + 1,
          q
        ]), a.push([
          I,
          q
        ]);
      }
      for (const f of d) {
        const h = c[f][0];
        for (let S = 0; S <= 16; S++) {
          const E = 60 * S / 16;
          if (Math.abs(E - h) > 60 * 0.05 && Math.abs(E - h) < 60 * 0.45) {
            const I = c[f][1] < 0 ? S * 2 : S * 2 + 1;
            S % 2 === 0 && a.push([
              f,
              I
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
      for (let f = i; f < i + u.length * 4; f += 4) r.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), r.set(f + 1, [
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
      t.nodes.val = c, t.elements.val = a, t.nodeInputs && (t.nodeInputs.val = {
        supports: r,
        loads: b
      });
      const $ = 2e8, w = 77e6, x = {
        elasticities: new Map(a.map((f, h) => [
          h,
          $
        ])),
        shearModuli: new Map(a.map((f, h) => [
          h,
          w
        ])),
        areas: new Map(a.map((f, h) => [
          h,
          h < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((f, h) => [
          h,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((f, h) => [
          h,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((f, h) => [
          h,
          1e-5
        ]))
      };
      t.elementInputs && (t.elementInputs.val = x);
      try {
        const f = Bt(c, a, {
          supports: r,
          loads: b
        }, x);
        f && t.deformOutputs && (t.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Puente atirantado: ${c.length} nodos, ${a.length} elem, span=60m`);
    }
    function Ms() {
      const c = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const S = h * 3.5, E = h * 5 * Math.PI / 180;
        for (let I = 0; I < 6; I++) {
          const q = E + 2 * Math.PI * I / 6, y = 5 * Math.cos(q), m = 5 * Math.sin(q);
          c.push([
            y,
            m,
            S
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const S = h * 6;
        for (let E = 0; E < 6; E++) a.push([
          S + E,
          S + (E + 1) % 6
        ]);
        if (h < 12) {
          const E = (h + 1) * 6;
          for (let I = 0; I < 6; I++) a.push([
            S + I,
            E + I
          ]), a.push([
            S + I,
            E + (I + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const S = c.length;
        c.push([
          0,
          0,
          h * 3.5
        ]);
        const E = h * 6;
        for (let I = 0; I < 6; I++) a.push([
          S,
          E + I
        ]);
      }
      const i = 13 * 6;
      for (let h = 0; h < 12; h++) a.push([
        i + h,
        i + h + 1
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let h = 0; h < 6; h++) u.set(h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      u.set(i, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const S = 10 * h / 12, E = h * 6;
        for (let I = 0; I < 6; I++) d.set(E + I, [
          S,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      t.nodes.val = c, t.elements.val = a, t.nodeInputs && (t.nodeInputs.val = {
        supports: u,
        loads: d
      });
      const r = 2e8, b = 77e6, $ = 8e-3, w = 1e-5, x = 5e-6, f = {
        elasticities: new Map(a.map((h, S) => [
          S,
          r
        ])),
        shearModuli: new Map(a.map((h, S) => [
          S,
          b
        ])),
        areas: new Map(a.map((h, S) => [
          S,
          $
        ])),
        momentsOfInertiaZ: new Map(a.map((h, S) => [
          S,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((h, S) => [
          S,
          w
        ])),
        torsionalConstants: new Map(a.map((h, S) => [
          S,
          x
        ]))
      };
      t.elementInputs && (t.elementInputs.val = f);
      try {
        const h = Bt(c, a, {
          supports: u,
          loads: d
        }, f);
        h && t.deformOutputs && (t.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Torre Twist: ${c.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ss() {
      const s = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const h = f / 20, S = f * 3;
        let E = 8 * (1 - h * 0.7);
        h > 0.4 && (E *= 0.85), h > 0.7 && (E *= 0.7);
        const I = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let q = 0; q < 3; q++) {
          const y = q * 2 * Math.PI / 3 - Math.PI / 2, m = E * Math.cos(y), p = E * Math.sin(y), v = s.length;
          s.push([
            m,
            p,
            S
          ]), c.push([
            I,
            v
          ]);
          const M = s.length;
          s.push([
            m * 0.5,
            p * 0.5,
            S
          ]), c.push([
            I,
            M
          ]), c.push([
            M,
            v
          ]);
        }
        for (let q = 0; q < 3; q++) {
          const y = I + 1 + q * 2, m = I + 1 + (q + 1) % 3 * 2;
          c.push([
            y,
            m
          ]);
        }
        if (f < 20) {
          const y = I + 7;
          c.push([
            I,
            y
          ]);
          for (let m = 0; m < 3; m++) c.push([
            I + 1 + m * 2,
            y + 1 + m * 2
          ]), c.push([
            I + 2 + m * 2,
            y + 2 + m * 2
          ]), c.push([
            I + 1 + m * 2,
            y + 2 + m * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), i = 1 + 3 * 2;
      for (let f = 0; f < i; f++) a.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const h = f * i, S = 5 * f / 20;
        u.set(h, [
          S,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      t.nodes.val = s, t.elements.val = c, t.nodeInputs && (t.nodeInputs.val = {
        supports: a,
        loads: u
      });
      const d = 35e6, r = 14e6, b = 0.02, $ = 5e-5, w = 2e-5, x = {
        elasticities: new Map(c.map((f, h) => [
          h,
          d
        ])),
        shearModuli: new Map(c.map((f, h) => [
          h,
          r
        ])),
        areas: new Map(c.map((f, h) => [
          h,
          b
        ])),
        momentsOfInertiaZ: new Map(c.map((f, h) => [
          h,
          $
        ])),
        momentsOfInertiaY: new Map(c.map((f, h) => [
          h,
          $
        ])),
        torsionalConstants: new Map(c.map((f, h) => [
          h,
          w
        ]))
      };
      t.elementInputs && (t.elementInputs.val = x);
      try {
        const f = Bt(s, c, {
          supports: a,
          loads: u
        }, x);
        f && t.deformOutputs && (t.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Es() {
      const e = [], o = [];
      for (let b = 0; b < 3; b++) {
        const $ = b * 12, w = 15 - b * 2, x = 20 - b * 3, f = 8 - b, h = e.length;
        for (let E = 0; E <= 4; E++) {
          const I = E / 4, q = -f / 2 + f * I, y = x * (1 - I * I * 0.3);
          for (let m = 0; m <= 12; m++) {
            const p = m / 12, v = $ + y * p, M = w * Math.sin(Math.PI * p) * (1 - I * I * 0.5), k = q;
            e.push([
              v,
              k,
              M
            ]);
          }
        }
        const S = 13;
        for (let E = 0; E < 4; E++) for (let I = 0; I < 12; I++) {
          const q = h + E * S + I, y = h + E * S + I + 1, m = h + (E + 1) * S + I + 1, p = h + (E + 1) * S + I;
          o.push([
            q,
            y,
            m,
            p
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let b = 0; b < e.length; b++) e[b][2] < 0.5 && s.set(b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let b = 0; b < e.length; b++) e[b][2] > 2 && c.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      t.nodes.val = e, t.elements.val = o, t.nodeInputs && (t.nodeInputs.val = {
        supports: s,
        loads: c
      });
      const a = 35e6, i = 0.2, u = 0.15, d = a / (2 * (1 + i)), r = {
        elasticities: new Map(o.map((b, $) => [
          $,
          a
        ])),
        poissonsRatios: new Map(o.map((b, $) => [
          $,
          i
        ])),
        thicknesses: new Map(o.map((b, $) => [
          $,
          u
        ])),
        shearModuli: new Map(o.map((b, $) => [
          $,
          d
        ]))
      };
      t.elementInputs && (t.elementInputs.val = r);
      try {
        const b = Bt(e, o, {
          supports: s,
          loads: c
        }, r);
        b && t.deformOutputs && (t.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Sydney Opera: ${e.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Is() {
      const l = [], s = [];
      for (let x = 0; x <= 15; x++) {
        const f = x / 15, h = x * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const E = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let I = 0; I < 12; I++) {
            const q = 2 * Math.PI * I / 12;
            l.push([
              Math.max(E, 1) * Math.cos(q),
              Math.max(E, 1) * Math.sin(q),
              h
            ]);
          }
        } else for (let E = 0; E < 12; E++) {
          const I = 2 * Math.PI * E / 12;
          l.push([
            S * Math.cos(I),
            S * Math.sin(I),
            h
          ]);
        }
      }
      for (let x = 0; x < 15; x++) {
        const f = x * 12, h = (x + 1) * 12;
        for (let E = 0; E < 12; E++) s.push([
          f + E,
          f + (E + 1) % 12
        ]);
        const S = x % 2 === 0 ? 1 : -1;
        for (let E = 0; E < 12; E++) {
          const I = (E + S + 12) % 12;
          s.push([
            f + E,
            h + I
          ]), s.push([
            f + E,
            h + E
          ]);
        }
      }
      const c = 15 * 12;
      for (let x = 0; x < 12; x++) s.push([
        c + x,
        c + (x + 1) % 12
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
      const i = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 15; x++) {
        const f = x * 12, h = 3 * x / 15;
        for (let S = 0; S < 12; S += 3) i.set(f + S, [
          h,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      t.nodes.val = l, t.elements.val = s, t.nodeInputs && (t.nodeInputs.val = {
        supports: a,
        loads: i
      });
      const u = 2e8, d = 77e6, r = 6e-3, b = 8e-6, $ = 4e-6, w = {
        elasticities: new Map(s.map((x, f) => [
          f,
          u
        ])),
        shearModuli: new Map(s.map((x, f) => [
          f,
          d
        ])),
        areas: new Map(s.map((x, f) => [
          f,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((x, f) => [
          f,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((x, f) => [
          f,
          b
        ])),
        torsionalConstants: new Map(s.map((x, f) => [
          f,
          $
        ]))
      };
      t.elementInputs && (t.elementInputs.val = w);
      try {
        const x = Bt(l, s, {
          supports: a,
          loads: i
        }, w);
        x && t.deformOutputs && (t.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => Et(), 50), Je(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function ea() {
      var _a2, _b;
      (_a2 = document.getElementById("fem-log-panel")) == null ? void 0 : _a2.remove();
      const e = window.__femLog || [
        "<i>No hay log. Ejecuta un analisis primero.</i>"
      ], o = document.createElement("div");
      o.id = "fem-log-panel", o.style.cssText = "position:fixed;top:60px;right:10px;width:360px;max-height:500px;overflow-y:auto;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:10px;z-index:10001;font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.6;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:bold;color:var(--cad-heading)">\u{1F4CB} Solver Log</span>
        <button id="fem-log-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;font-size:11px;">\u2715</button>
      </div>
      <div style="font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.7;">
        ${e.join("<br>")}
      </div>
    `, document.body.appendChild(o), (_b = o.querySelector("#fem-log-close")) == null ? void 0 : _b.addEventListener("click", () => o.remove());
    }
    function ta() {
      var _a2, _b, _c;
      (_a2 = document.getElementById("pushover-panel")) == null ? void 0 : _a2.remove();
      const e = document.createElement("div");
      e.id = "pushover-panel", e.style.cssText = "position:fixed;top:60px;right:10px;width:420px;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:12px;z-index:10000;font-family:monospace;font-size:12px;box-shadow:0 4px 20px var(--cad-shadow);", e.innerHTML = `
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
    `, document.body.appendChild(e), (_b = e.querySelector("#pushover-close")) == null ? void 0 : _b.addEventListener("click", () => e.remove()), (_c = e.querySelector("#pushover-run")) == null ? void 0 : _c.addEventListener("click", async () => {
        const o = (h) => {
          var _a3;
          return parseFloat(((_a3 = e.querySelector(`#${h}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, c = o("po-fy") * 1e3, a = o("po-H"), i = o("po-L"), u = o("po-As") * 1e-4, d = o("po-nbar"), r = o("po-drift") / 100, b = o("po-ncycles"), $ = e.querySelector("#pushover-status");
        $.textContent = "Generando historia de desplazamientos...";
        const w = [], x = r * a, f = 40;
        for (let h = 1; h <= b; h++) {
          const S = x * h / b;
          for (let E = 0; E <= f; E++) w.push(S * Math.sin(2 * Math.PI * E / f));
        }
        $.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ra(async () => {
            const { cyclicPushover: E } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: E
            };
          }, __vite__mapDeps([0,1]), import.meta.url), S = await h({
            colHeight: a,
            beamLength: i,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: u,
              cover: 0.04,
              n_rebar: d
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: u * 0.7,
              cover: 0.03,
              n_rebar: d
            },
            dispHistory: w
          });
          $.textContent = `Completado: ${S.nSteps} pasos`, oa(e.querySelector("#pushover-canvas"), S.displacements, S.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          $.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function oa(e, o, n, l) {
      const s = e.getContext("2d");
      if (!s || o.length === 0) return;
      const c = e.width, a = e.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, u = c - i.left - i.right, d = a - i.top - i.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, c, a);
      let r = Math.min(...o), b = Math.max(...o), $ = Math.min(...n), w = Math.max(...n);
      r === b && (r -= 0.01, b += 0.01), $ === w && ($ -= 1, w += 1);
      const x = b - r, f = w - $, h = (q) => i.left + (q - r) / x * u, S = (q) => i.top + d - (q - $) / f * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, r < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), i.top), s.lineTo(h(0), i.top + d), s.stroke()), $ < 0 && w > 0 && (s.beginPath(), s.moveTo(i.left, S(0)), s.lineTo(i.left + u, S(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), S(n[0]));
      for (let q = 1; q < o.length; q++) s.lineTo(h(o[q]), S(n[q]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + u / 2, a - 5), s.save(), s.translate(12, i.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const E = x / 5;
      for (let q = 0; q <= 5; q++) {
        const y = r + E * q;
        s.fillText((y * 1e3).toFixed(1), h(y), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const I = f / 5;
      for (let q = 0; q <= 5; q++) {
        const y = $ + I * q;
        s.fillText(y.toFixed(0), i.left - 5, S(y) + 3);
      }
    }
    let Ho = null;
    function na() {
      if (Ho) {
        Ho.remove(), Ho = null;
        return;
      }
      const e = document.createElement("div");
      e.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff6600;border-radius:8px;padding:16px;z-index:10001;width:400px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);max-height:80vh;overflow-y:auto;", e.innerHTML = `
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
    `, document.body.appendChild(e), Ho = e, e.querySelector("#nl-close").addEventListener("click", () => {
        e.remove(), Ho = null;
      }), e.querySelector("#nl-test").addEventListener("click", () => sa(e));
    }
    function sa(e) {
      const o = parseFloat(e.querySelector("#nl-fy").value), n = parseFloat(e.querySelector("#nl-e0").value), l = parseFloat(e.querySelector("#nl-b").value), s = parseFloat(e.querySelector("#nl-r0").value), c = parseFloat(e.querySelector("#nl-amp").value), a = parseInt(e.querySelector("#nl-cycles").value), i = 100, u = [];
      for (let K = 0; K < a; K++) {
        const re = c * (1 + K * 0.5);
        for (let ae = 0; ae < i; ae++) {
          const Q = ae / i * 2 * Math.PI;
          u.push(re * Math.sin(Q));
        }
      }
      const d = o / n, r = l * n;
      let b = 0, $ = 0, w = -d, x = d, f = 0, h = 0, S = 0, E = 0, I = 0, q = 0;
      const y = [];
      for (const K of u) {
        let re = w, ae = x, Q = f, ce = h, Me = S, Oe = E, Re = I, H = q, de;
        const ie = K - b;
        if (Math.abs(ie) < 1e-20) {
          y.push($);
          continue;
        }
        if ((H === 0 || H === 3) && (ie < 0 ? (H = 2, ce = -d, Me = -o, Q = ce, Oe = 0, Re = 0) : (H = 1, ce = d, Me = o, Q = ce, Oe = 0, Re = 0)), H === 2 && ie > 0) {
          H = 1, Oe = b, Re = $, b < re && (re = b);
          const Te = (ae - re) / (2 * 1 * d), je = 1 + 0 * Math.pow(Te, 0.8);
          ce = (o * je - r * d * je - Re + n * Oe) / (n - r), Me = o * je + r * (ce - d * je), Q = ae;
        } else if (H === 1 && ie < 0) {
          H = 2, Oe = b, Re = $, b > ae && (ae = b);
          const Te = (ae - re) / (2 * 1 * d), je = 1 + 0 * Math.pow(Te, 0.8);
          ce = (-o * je + r * d * je - Re + n * Oe) / (n - r), Me = -o * je + r * (ce + d * je), Q = re;
        }
        const ee = Math.abs((Q - ce) / d);
        let J = s - 0.925 * ee / (0.15 + ee);
        J < 0.1 && (J = 0.1);
        const fe = (K - Oe) / (ce - Oe), Ee = 1 + Math.pow(Math.abs(fe), J), ne = Math.pow(Ee, 1 / J);
        de = l * fe + (1 - l) * fe / ne, de = de * (Me - Re) + Re, y.push(de), b = K, $ = de, w = re, x = ae, f = Q, h = ce, S = Me, E = Oe, I = Re, q = H;
      }
      const m = e.querySelector("#nl-canvas"), p = m.getContext("2d"), v = m.width, M = m.height;
      p.clearRect(0, 0, v, M);
      const k = Math.max(...u.map(Math.abs)), P = Math.max(...y.map(Math.abs)), C = (v - 40) / (2 * k), T = (M - 40) / (2 * P), O = v / 2, F = M / 2;
      p.strokeStyle = "#444", p.lineWidth = 1, p.beginPath(), p.moveTo(20, F), p.lineTo(v - 20, F), p.stroke(), p.beginPath(), p.moveTo(O, 20), p.lineTo(O, M - 20), p.stroke(), p.fillStyle = "#888", p.font = "10px monospace", p.textAlign = "center", p.fillText("\u03B5 (strain)", v - 40, F - 5), p.fillText("\u03C3 (stress)", O + 30, 15), p.fillText(`\xB1${(k * 100).toFixed(1)}%`, v - 30, F + 12), p.fillText(`\xB1${(P / 1e3).toFixed(0)} MPa`, O + 40, 30), p.strokeStyle = "#00ccff", p.lineWidth = 1.5, p.beginPath();
      for (let K = 0; K < u.length; K++) {
        const re = O + u[K] * C, ae = F - y[K] * T;
        K === 0 ? p.moveTo(re, ae) : p.lineTo(re, ae);
      }
      p.stroke(), p.strokeStyle = "#ff333366", p.lineWidth = 1, p.setLineDash([
        4,
        4
      ]), p.beginPath(), p.moveTo(20, F - o * T), p.lineTo(v - 20, F - o * T), p.stroke(), p.beginPath(), p.moveTo(20, F + o * T), p.lineTo(v - 20, F + o * T), p.stroke(), p.setLineDash([]), p.fillStyle = "#ff6666", p.font = "9px monospace", p.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, F - o * T - 5);
      const Z = e.querySelector("#nl-info");
      Z.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function aa() {
      var _a2, _b, _c, _d;
      const e = document.querySelector(".rpt-overlay");
      if (e) {
        e.remove();
        return;
      }
      const o = t.nodes.val, n = t.elements.val, l = ((_a2 = t.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = t.nodeInputs) == null ? void 0 : _b.val) || {}, c = (_c = t.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = t.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
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
    function la(e) {
      Io && Io.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Zo(), l = Qo(), s = Object.entries(n).map(([d, r]) => `<option value="${r}">${d}</option>`).join(""), c = Object.entries(l).map(([d, r]) => `<option value="${r}">${d}</option>`).join("");
      o.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="color:#00ccff;">Asignar Secci\xF3n (${e.length} elem.)</b>
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
      const a = o.querySelector("#asgn-type"), i = o.querySelector("#asgn-params");
      function u() {
        const d = a.value;
        let r = "";
        d === "rect" ? r = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : d === "circ" ? r = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : d === "W" ? r = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : d === "HSS" ? r = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : d === "I-param" ? r = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : d === "tubular" && (r = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), i.innerHTML = r;
      }
      a.addEventListener("change", u), u(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Io = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = a.value, r = {
          secType: d
        };
        d === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : d === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : d === "W" || d === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : d === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : d === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, e.forEach((b) => be.set(b, {
          ...r
        })), o.remove(), Io = null, no(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        e.forEach((d) => be.delete(d)), o.remove(), Io = null, no(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      });
    }
    let ko = null;
    function ia(e) {
      var _a2, _b, _c;
      ko && ko.remove();
      const o = t.nodes.val, n = t.elements.val[e];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), u = a > c && a > i, d = Math.sqrt(c * c + a * a + i * i), r = Fe.get(e) ?? 0, b = (_c = (_b = (_a2 = t.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(e), $ = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${e}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${u ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${r + 1} &nbsp;
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
    `, document.body.appendChild(w), ko = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), ko = null, bo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        V.add(e), w.remove(), ko = null, bo(), ye();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), ko = null, vs(e);
      });
    }
    setTimeout(() => {
      const e = document.getElementById("viewer");
      if (!e) return;
      const o = e.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function c(u) {
        const d = tt();
        if (!d) return null;
        const r = d.controls.object, b = new Se(u[0], u[1], u[2]);
        b.project(r);
        const $ = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * $.width,
          y: (-b.y + 1) / 2 * $.height
        };
      }
      function a(u, d, r, b, $) {
        const w = Math.min(u, r), x = Math.max(u, r), f = Math.min(d, b), h = Math.max(d, b), S = t.nodes.val, E = t.elements.val, I = [];
        for (let q = 0; q < E.length; q++) {
          const y = E[q], m = y.map((p) => c(S[p])).filter(Boolean);
          if (m.length !== 0) if ($) m.every((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= h) && I.push(q);
          else {
            if (m.some((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= h)) {
              I.push(q);
              continue;
            }
            if (y.length === 2) {
              const v = m[0], M = m[1];
              i(v.x, v.y, M.x, M.y, w, f, x, h) && I.push(q);
            }
          }
        }
        return I;
      }
      function i(u, d, r, b, $, w, x, f) {
        const h = (E, I) => E >= $ && E <= x && I >= w && I <= f;
        if (h(u, d) || h(r, b)) return true;
        const S = (E, I, q, y, m, p, v, M) => {
          const k = (q - E) * (M - p) - (y - I) * (v - m);
          if (Math.abs(k) < 1e-10) return false;
          const P = ((m - E) * (M - p) - (p - I) * (v - m)) / k, C = ((m - E) * (y - I) - (p - I) * (q - E)) / k;
          return P >= 0 && P <= 1 && C >= 0 && C <= 1;
        };
        return S(u, d, r, b, $, w, x, w) || S(u, d, r, b, x, w, x, f) || S(u, d, r, b, $, f, x, f) || S(u, d, r, b, $, w, $, f);
      }
      o.addEventListener("mousedown", (u) => {
        Ot && (n = {
          x: u.offsetX,
          y: u.offsetY
        });
      }), o.addEventListener("mousemove", (u) => {
        if (Vt) {
          const r = tt();
          if (!r) return;
          const b = ms(u.clientX, u.clientY, r.camera, r.rendererElm);
          if (mt.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== mo && Ws(b.nodeIdx), mt.track && mo !== null && b.worldPos && b.snapType !== "node") {
            const $ = Ys(b.worldPos, mo);
            $ && (b.worldPos = $, b.snapType = "grid");
          }
          if (mo !== null && b.worldPos) {
            const $ = t.nodes.val[mo];
            $ && us(u.clientX, u.clientY, new Se(...$), b.worldPos);
          } else if (dt !== null && b.worldPos) {
            const $ = t.nodes.val[dt];
            $ && us(u.clientX, u.clientY, new Se(...$), b.worldPos);
          } else Ht && (Ht.remove(), Ht = null);
          b.nodeIdx, bs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Dt && !Ot) return;
        if (Ot && n) {
          const r = u.offsetX - n.x, b = u.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const $ = r > 0, w = Math.min(n.x, u.offsetX), x = Math.min(n.y, u.offsetY), f = Math.abs(r), h = Math.abs(b);
            l.style.left = w + "px", l.style.top = x + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = kn(u);
        if (d >= 0) gs(d), o.style.cursor = "pointer";
        else {
          if (Nt) {
            const r = tt();
            r == null ? void 0 : r.scene.remove(Nt), Nt = null, r == null ? void 0 : r.render();
          }
          o.style.cursor = Ot ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (u) => {
        if (Ot && n) {
          const d = u.offsetX - n.x, r = u.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(r) > s) {
            const b = d > 0, $ = a(n.x, n.y, u.offsetX, u.offsetY, b);
            u.ctrlKey || u.metaKey || (ct.clear(), io()), $.forEach((x) => {
              ct.has(x) || (ct.add(x), Sn(x));
            }), ro();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (u) => {
        if (Vt) {
          const d = tt();
          if (!d) return;
          const r = ms(u.clientX, u.clientY, d.camera, d.rendererElm);
          (r.worldPos || r.nodeIdx !== null) && (Js(r), bs(r));
          return;
        }
        if (Ot) {
          if (l) return;
          const d = kn(u), r = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (r) if (ct.has(d)) {
              ct.delete(d);
              const b = lo.findIndex(($) => $.__elemIdx === d);
              if (b >= 0) {
                const $ = tt();
                $ == null ? void 0 : $.scene.remove(lo[b]), lo[b].geometry.dispose(), lo[b].material.dispose(), lo.splice(b, 1), $ == null ? void 0 : $.render();
              }
            } else ct.add(d), Sn(d);
            else ct.clear(), io(), ct.add(d), Sn(d);
            ro();
          } else r || (ct.clear(), io(), ro());
          return;
        }
        if (Dt) {
          const d = kn(u);
          d >= 0 && (gs(d), ia(d));
        }
      });
    }, 500), Fo.derive(() => {
      var _a2;
      t.nodes.val, t.elements.val, (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, Je();
    }), We.modal = (e) => {
      var _a2, _b;
      if (e === void 0 && (e = !ge), ge = e, (_a2 = $e.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ge), ge) {
        const n = tt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Ne = n.settings.loads.rawVal, n.settings.loads.val = false), mn(), $e.querySelector("#cad3d-mode-prev").style.display = "", $e.querySelector("#cad3d-mode-next").style.display = "", $e.querySelector("#cad3d-mode-label").style.display = "";
      } else bn(), $e.querySelector("#cad3d-mode-prev").style.display = "none", $e.querySelector("#cad3d-mode-next").style.display = "none", $e.querySelector("#cad3d-mode-label").style.display = "none", L && L !== "placa-q4" && L !== "placa-3q" && ye(), setTimeout(() => {
        var _a3;
        const n = tt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Ne && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ge ? "ON" : "OFF"}`);
    }, We.setMode = (e) => {
      var _a2;
      if (!(X == null ? void 0 : X.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ve = Math.max(0, Math.min(e, X.modeShapes.length - 1));
      const o = X.modeShapes[ve], { extent: n } = so();
      let l = 0;
      for (let c = 0; c < U.length; c++) {
        const a = o[c * 6] || 0, i = o[c * 6 + 1] || 0, u = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + u * u));
      }
      he = l > 1e-12 ? n * 0.05 / l : 1, _o();
      const s = $e.querySelector("#cad3d-mode-label");
      s && X.frequencies && (s.textContent = `Modo ${ve + 1} \u2014 ${X.frequencies[ve].toFixed(2)} Hz`), console.log(`Modo ${ve + 1}: f = ${(_a2 = X.frequencies) == null ? void 0 : _a2[ve].toFixed(4)} Hz`);
    }, window.cad = We, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild($e), document.body.appendChild(Ie.div);
    }, 0), setTimeout(() => {
      t.nodes.val.length === 0 && (Xe("edificio"), ye(), cs("edificio"));
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
