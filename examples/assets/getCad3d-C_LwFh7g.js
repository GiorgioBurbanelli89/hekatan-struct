const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { _ as ra, p as qn, m as ca, d as Ht, s as da, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as qo, P as Bo, g as pa, a as fa, o as ua } from "./theme-CzzIlc4y.js";
import { V as Se, P as co, R as zs, b as Ls, B as Dt, c as ma, d as Lo, e as To, f as ba, S as ga, M as ha, g as xa, F as bo, a as Co, L as go, h as va, G as ya, A as Jo, i as Vo, T as Fn, j as Xo, k as Ko, C as $a, l as wa } from "./Text-Cin90tvN.js";
import { g as on, b as nn, a as Ao } from "./analyze-B6dp1uvy.js";
import { g as eo, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as vo, s as to, m as jt, t as Rn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let As, Ia, ol;
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
  const _n = [
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
  function Ma(t, h) {
    return t === "kN" && h === "m" ? "kPa" : t === "kN" && h === "mm" || t === "N" && h === "mm" ? "MPa" : t === "N" && h === "m" ? "Pa" : t === "kip" && h === "in" ? "ksi" : t === "kip" && h === "ft" ? "ksf" : `${t}/${h}\xB2`;
  }
  const ho = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function xo(t, h) {
    const _ = _n.find((G) => G.id === t), z = Fo.find((G) => G.id === h), Y = _.toKN, R = z.toM, V = (G, me, L) => L / (Math.pow(Y, G) * Math.pow(R, me));
    let j, D;
    switch (t) {
      case "kN":
        j = 10, D = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        j = 1, D = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        j = 1e3, D = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        j = 10, D = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        j = 5e3, D = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        j = 1e4, D = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${t}-${h}`,
      label: `${_.label}, ${z.label}`,
      force: _.label,
      length: z.label,
      stress: Ma(t, h),
      moment: `${_.label}\xB7${z.label}`,
      E: V(1, -2, ho.E),
      G: V(1, -2, ho.G),
      A: V(0, 2, ho.A),
      Iz: V(0, 4, ho.Iz),
      Iy: V(0, 4, ho.Iy),
      J: V(0, 4, ho.J),
      rho: V(1, -4, ho.rho),
      spanRange: z.spanRange,
      heightRange: z.heightRange,
      defaultSpan: z.defaultSpan,
      defaultHeight: z.defaultHeight,
      defaultForce: j,
      forceRange: D,
      galponSpan: z.galponSpan,
      galponLength: z.galponLength,
      galponHeight: z.galponHeight,
      galponRise: z.galponRise
    };
  }
  xo("kN", "m"), xo("kip", "in");
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
    const h = t.force, [_, z, Y] = t.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CV (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: t.defaultForce,
          min: _,
          max: z,
          step: Y,
          label: `Ex sismo (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: t.defaultForce * 3,
          min: _,
          max: z,
          step: Y,
          label: `Ex sismo (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: z,
          step: Y,
          label: `Ex sismo (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: z,
          step: Y,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: z,
          step: Y,
          label: `Ey sismo (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CV (${h})`
        }
      ],
      barra: [
        {
          key: "F",
          val: t.defaultForce * 10,
          min: t.forceRange[0] * 10,
          max: t.forceRange[1] * 10,
          step: Math.abs(t.forceRange[2]) * 5,
          label: `F axial (${h})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: Y,
          label: `CM (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: Y,
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
  Ia = function() {
    const t = document.createElement("div");
    t.id = "modal-results", t.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let h = false;
    function _(z, Y) {
      var _a2, _b;
      if (!z.frequencies || z.frequencies.length === 0) {
        t.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const R = [
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
      let j = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${Y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (j += '<div id="modal-body" style="padding:0 12px 10px 12px;">', Y.properties) for (const D of Y.properties) j += `<span style="color:#888">${D}</span>
`;
      j += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const D of R) j += `<th style="padding:2px 5px">${D}</th>`;
      if (j += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, z.frequencies.forEach((D, G) => {
        var _a3;
        const me = D > 0 ? 1 / D : 0, L = D * 2 * Math.PI, oe = ((_a3 = z.massParticipation) == null ? void 0 : _a3[G]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let $e = 0; $e < 6; $e++) V[$e] += oe[$e];
        j += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${G + 1}</td>
  <td style="padding:2px 6px; text-align:right">${D.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${me.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${L.toFixed(2)}</td>`;
        for (let $e = 0; $e < 6; $e++) {
          const fe = (oe[$e] * 100).toFixed(1), ee = oe[$e] > 0.5 ? "#f00" : oe[$e] > 0.1 ? "#ff0" : "#0f0";
          j += `<td style="padding:2px 5px; text-align:right; color:${ee}">${fe}%</td>`;
        }
        j += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(V[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[5] * 100).toFixed(1)}%</td></tr>`;
      }), j += "</table></div>", t.innerHTML = j, h) {
        const D = t.querySelector("#modal-body"), G = t.querySelector("#modal-minimize");
        D && (D.style.display = "none"), G && (G.textContent = "\u25A2", G.title = "Restaurar");
      }
      (_a2 = t.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        h = !h;
        const D = t.querySelector("#modal-body"), G = t.querySelector("#modal-minimize");
        h ? (D.style.display = "none", G.textContent = "\u25A2", G.title = "Restaurar") : (D.style.display = "block", G.textContent = "\u25AC", G.title = "Minimizar");
      }), (_b = t.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const D = [];
        D.push(`Modal Analysis \u2014 ${Y.title}`);
        const G = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${R.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        D.push(G), D.push("-".repeat(G.length));
        const me = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        z.frequencies.forEach((oe, $e) => {
          var _a3;
          const fe = oe > 0 ? 1 / oe : 0, ee = oe * 2 * Math.PI, le = ((_a3 = z.massParticipation) == null ? void 0 : _a3[$e]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Te = 0; Te < 6; Te++) me[Te] += le[Te];
          const ue = le.map((Te) => ((Te * 100).toFixed(1) + "%").padStart(6)).join(" ");
          D.push(`${String($e + 1).padStart(4)}  ${oe.toFixed(4).padStart(9)}  ${fe.toFixed(4).padStart(9)}  ${ee.toFixed(2).padStart(9)}  ${ue}  ${(me[0] * 100).toFixed(1).padStart(5)}%  ${(me[1] * 100).toFixed(1).padStart(5)}%  ${(me[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(D.join(`
`));
        const L = t.querySelector("#modal-copy");
        L.textContent = "\u2713", setTimeout(() => L.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: t,
      render: _
    };
  };
  const he = 64516e-8, C = 416231e-12, B = 0.0254, po = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * he,
      Iz: 16.4 * C,
      Iy: 2.2 * C,
      J: 0.0405 * C,
      d: 5.9 * B,
      bf: 3.94 * B
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * he,
      Iz: 29.1 * C,
      Iy: 9.32 * C,
      J: 0.103 * C,
      d: 5.99 * B,
      bf: 5.99 * B
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * he,
      Iz: 41.4 * C,
      Iy: 13.3 * C,
      J: 0.204 * C,
      d: 6.2 * B,
      bf: 6.02 * B
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * he,
      Iz: 30.8 * C,
      Iy: 2.09 * C,
      J: 0.0426 * C,
      d: 7.89 * B,
      bf: 3.94 * B
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * he,
      Iz: 61.9 * C,
      Iy: 7.97 * C,
      J: 0.172 * C,
      d: 8.14 * B,
      bf: 5.25 * B
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * he,
      Iz: 82.7 * C,
      Iy: 18.3 * C,
      J: 0.346 * C,
      d: 7.93 * B,
      bf: 6.5 * B
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * he,
      Iz: 110 * C,
      Iy: 37.1 * C,
      J: 0.536 * C,
      d: 8 * B,
      bf: 7.995 * B
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * he,
      Iz: 146 * C,
      Iy: 49.1 * C,
      J: 0.871 * C,
      d: 8.25 * B,
      bf: 8.07 * B
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * he,
      Iz: 184 * C,
      Iy: 60.9 * C,
      J: 1.45 * C,
      d: 8.5 * B,
      bf: 8.11 * B
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * he,
      Iz: 272 * C,
      Iy: 88.6 * C,
      J: 3.54 * C,
      d: 9 * B,
      bf: 8.28 * B
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * he,
      Iz: 53.8 * C,
      Iy: 2.18 * C,
      J: 0.0547 * C,
      d: 9.87 * B,
      bf: 3.96 * B
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * he,
      Iz: 118 * C,
      Iy: 11.4 * C,
      J: 0.239 * C,
      d: 10.17 * B,
      bf: 5.75 * B
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * he,
      Iz: 171 * C,
      Iy: 36.6 * C,
      J: 0.583 * C,
      d: 9.73 * B,
      bf: 7.96 * B
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * he,
      Iz: 272 * C,
      Iy: 93.4 * C,
      J: 1.39 * C,
      d: 9.98 * B,
      bf: 10 * B
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * he,
      Iz: 394 * C,
      Iy: 134 * C,
      J: 3.56 * C,
      d: 10.4 * B,
      bf: 10.13 * B
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * he,
      Iz: 623 * C,
      Iy: 207 * C,
      J: 10.9 * C,
      d: 11.1 * B,
      bf: 10.34 * B
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * he,
      Iz: 88.6 * C,
      Iy: 2.36 * C,
      J: 0.0704 * C,
      d: 11.91 * B,
      bf: 3.97 * B
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * he,
      Iz: 156 * C,
      Iy: 4.66 * C,
      J: 0.293 * C,
      d: 12.31 * B,
      bf: 4.03 * B
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * he,
      Iz: 204 * C,
      Iy: 17.3 * C,
      J: 0.3 * C,
      d: 12.22 * B,
      bf: 6.49 * B
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * he,
      Iz: 310 * C,
      Iy: 44.1 * C,
      J: 0.906 * C,
      d: 11.94 * B,
      bf: 8.01 * B
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * he,
      Iz: 425 * C,
      Iy: 95.8 * C,
      J: 1.58 * C,
      d: 12.06 * B,
      bf: 9.99 * B
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * he,
      Iz: 597 * C,
      Iy: 195 * C,
      J: 4.05 * C,
      d: 12.25 * B,
      bf: 12.04 * B
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * he,
      Iz: 833 * C,
      Iy: 270 * C,
      J: 8.44 * C,
      d: 12.71 * B,
      bf: 12.16 * B
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * he,
      Iz: 1070 * C,
      Iy: 345 * C,
      J: 16 * C,
      d: 13.12 * B,
      bf: 12.32 * B
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * he,
      Iz: 199 * C,
      Iy: 7 * C,
      J: 0.208 * C,
      d: 13.74 * B,
      bf: 5 * B
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * he,
      Iz: 291 * C,
      Iy: 19.6 * C,
      J: 0.38 * C,
      d: 13.84 * B,
      bf: 6.73 * B
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * he,
      Iz: 385 * C,
      Iy: 26.7 * C,
      J: 0.798 * C,
      d: 14.1 * B,
      bf: 6.77 * B
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * he,
      Iz: 485 * C,
      Iy: 51.4 * C,
      J: 1.45 * C,
      d: 13.79 * B,
      bf: 8.03 * B
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * he,
      Iz: 640 * C,
      Iy: 107 * C,
      J: 2.19 * C,
      d: 13.89 * B,
      bf: 9.99 * B
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * he,
      Iz: 882 * C,
      Iy: 148 * C,
      J: 5.07 * C,
      d: 14.31 * B,
      bf: 10.13 * B
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * he,
      Iz: 1240 * C,
      Iy: 447 * C,
      J: 7.12 * C,
      d: 14.32 * B,
      bf: 14.61 * B
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * he,
      Iz: 1530 * C,
      Iy: 548 * C,
      J: 12.3 * C,
      d: 14.66 * B,
      bf: 14.73 * B
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * he,
      Iz: 2140 * C,
      Iy: 838 * C,
      J: 23.7 * C,
      d: 15.22 * B,
      bf: 15.65 * B
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * he,
      Iz: 301 * C,
      Iy: 9.59 * C,
      J: 0.262 * C,
      d: 15.69 * B,
      bf: 5.5 * B
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * he,
      Iz: 448 * C,
      Iy: 24.5 * C,
      J: 0.545 * C,
      d: 15.86 * B,
      bf: 6.99 * B
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * he,
      Iz: 659 * C,
      Iy: 37.2 * C,
      J: 1.52 * C,
      d: 16.26 * B,
      bf: 7.07 * B
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * he,
      Iz: 954 * C,
      Iy: 119 * C,
      J: 2.39 * C,
      d: 16.33 * B,
      bf: 10.24 * B
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * he,
      Iz: 1300 * C,
      Iy: 163 * C,
      J: 5.45 * C,
      d: 16.75 * B,
      bf: 10.37 * B
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * he,
      Iz: 510 * C,
      Iy: 15.3 * C,
      J: 0.506 * C,
      d: 17.7 * B,
      bf: 6 * B
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * he,
      Iz: 800 * C,
      Iy: 40.1 * C,
      J: 1.24 * C,
      d: 17.99 * B,
      bf: 7.5 * B
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * he,
      Iz: 1170 * C,
      Iy: 60.3 * C,
      J: 3.49 * C,
      d: 18.47 * B,
      bf: 7.64 * B
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * he,
      Iz: 1750 * C,
      Iy: 201 * C,
      J: 5.86 * C,
      d: 18.59 * B,
      bf: 11.15 * B
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * he,
      Iz: 843 * C,
      Iy: 20.7 * C,
      J: 0.77 * C,
      d: 20.66 * B,
      bf: 6.5 * B
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * he,
      Iz: 1330 * C,
      Iy: 57.5 * C,
      J: 1.83 * C,
      d: 20.99 * B,
      bf: 8.24 * B
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * he,
      Iz: 1830 * C,
      Iy: 81.4 * C,
      J: 4.34 * C,
      d: 21.43 * B,
      bf: 8.36 * B
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * he,
      Iz: 2670 * C,
      Iy: 274 * C,
      J: 6.83 * C,
      d: 21.51 * B,
      bf: 12.34 * B
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * he,
      Iz: 1350 * C,
      Iy: 29.1 * C,
      J: 1.18 * C,
      d: 23.57 * B,
      bf: 7.01 * B
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * he,
      Iz: 2100 * C,
      Iy: 82.5 * C,
      J: 2.68 * C,
      d: 23.92 * B,
      bf: 8.99 * B
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * he,
      Iz: 3100 * C,
      Iy: 259 * C,
      J: 4.72 * C,
      d: 24.06 * B,
      bf: 12.75 * B
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * he,
      Iz: 4020 * C,
      Iy: 340 * C,
      J: 9.5 * C,
      d: 24.48 * B,
      bf: 12.86 * B
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * he,
      Iz: 4580 * C,
      Iy: 391 * C,
      J: 12.6 * C,
      d: 24.74 * B,
      bf: 12.9 * B
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * he,
      Iz: 5680 * C,
      Iy: 479 * C,
      J: 21.2 * C,
      d: 25.24 * B,
      bf: 12.9 * B
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * he,
      Iz: 2850 * C,
      Iy: 106 * C,
      J: 2.81 * C,
      d: 26.71 * B,
      bf: 9.96 * B
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * he,
      Iz: 4090 * C,
      Iy: 159 * C,
      J: 6.77 * C,
      d: 27.29 * B,
      bf: 10.07 * B
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * he,
      Iz: 3610 * C,
      Iy: 115 * C,
      J: 3.06 * C,
      d: 29.53 * B,
      bf: 10.4 * B
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * he,
      Iz: 4930 * C,
      Iy: 164 * C,
      J: 6.43 * C,
      d: 30.01 * B,
      bf: 10.5 * B
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * he,
      Iz: 5900 * C,
      Iy: 187 * C,
      J: 5.3 * C,
      d: 32.86 * B,
      bf: 11.48 * B
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * he,
      Iz: 7800 * C,
      Iy: 225 * C,
      J: 7 * C,
      d: 35.55 * B,
      bf: 11.95 * B
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * he,
      Iz: 8.22 * C,
      Iy: 8.22 * C,
      J: 13.4 * C,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * he,
      Iz: 10.7 * C,
      Iy: 10.7 * C,
      J: 17.9 * C,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * he,
      Iz: 12.3 * C,
      Iy: 12.3 * C,
      J: 21 * C,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * he,
      Iz: 30.3 * C,
      Iy: 30.3 * C,
      J: 48.3 * C,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * he,
      Iz: 41.1 * C,
      Iy: 41.1 * C,
      J: 66.9 * C,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * he,
      Iz: 49.6 * C,
      Iy: 49.6 * C,
      J: 82.2 * C,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * he,
      Iz: 70.7 * C,
      Iy: 70.7 * C,
      J: 112 * C,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * he,
      Iz: 98 * C,
      Iy: 98 * C,
      J: 158 * C,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * he,
      Iz: 122 * C,
      Iy: 122 * C,
      J: 199 * C,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * he,
      Iz: 202 * C,
      Iy: 202 * C,
      J: 323 * C,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * he,
      Iz: 254 * C,
      Iy: 254 * C,
      J: 412 * C,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * he,
      Iz: 355 * C,
      Iy: 355 * C,
      J: 564 * C,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * he,
      Iz: 452 * C,
      Iy: 452 * C,
      J: 724 * C,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * he,
      Iz: 18 * C,
      Iy: 9.58 * C,
      J: 22.6 * C,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * he,
      Iz: 23.8 * C,
      Iy: 12.3 * C,
      J: 30.3 * C,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * he,
      Iz: 33.6 * C,
      Iy: 11.8 * C,
      J: 33 * C,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * he,
      Iz: 45.1 * C,
      Iy: 15 * C,
      J: 44.5 * C,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * he,
      Iz: 46.1 * C,
      Iy: 28.2 * C,
      J: 61.3 * C,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * he,
      Iz: 63 * C,
      Iy: 37.5 * C,
      J: 84.6 * C,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * he,
      Iz: 103 * C,
      Iy: 47.1 * C,
      J: 115 * C,
      d: 10 * B,
      bf: 6 * B
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * he,
      Iz: 196 * C,
      Iy: 102 * C,
      J: 249 * C,
      d: 12 * B,
      bf: 8 * B
    }
  ];
  function Zo() {
    const t = {};
    return po.forEach((h, _) => {
      h.type === "W" && (t[h.name] = _);
    }), t;
  }
  function Qo() {
    const t = {};
    return po.forEach((h, _) => {
      h.type === "HSS" && (t[h.name] = _);
    }), t;
  }
  function ka(t) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h;
    const { nodes: h, elements: _, elementInputs: z, nodeInputs: Y, deformOutputs: R } = t, V = h.length * 6, j = _.length, D = _.filter((ee) => ee.length === 2).length, G = _.filter((ee) => ee.length >= 3).length, me = document.createElement("div");
    me.className = "rpt-overlay";
    let L = "";
    L += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', L += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", L += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', L += '<hr class="rpt-sep"/>', L += "<h2>1. Input Data</h2>", L += '<table class="rpt-info"><tbody>', L += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, L += `<tr><td>Number of elements</td><td class="val">${j} (${D} frames, ${G} shells)</td></tr>`, L += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', L += `<tr><td>Total DOFs</td><td class="val">${V}</td></tr>`, L += "</tbody></table>", L += "<h3>1.1 Node Coordinates</h3>", L += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((ee, le) => {
      L += `<tr><td>${le}</td><td>${Xe(ee[0])}</td><td>${Xe(ee[1])}</td><td>${Xe(ee[2])}</td></tr>`;
    }), L += "</tbody></table>", L += "<h3>1.2 Element Connectivity</h3>", L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((ee, le) => {
      var _a3, _b2, _c2, _d2;
      const ue = ee.length === 2, Te = ee.map((Qe) => h[Qe]), Be = ue ? vo(to(Te[1], Te[0])) : 0, Ae = ((_a3 = z.elasticities) == null ? void 0 : _a3.get(le)) ?? 0, Je = ((_b2 = z.areas) == null ? void 0 : _b2.get(le)) ?? 0, lt = ((_c2 = z.momentsOfInertiaZ) == null ? void 0 : _c2.get(le)) ?? 0, je = ((_d2 = z.momentsOfInertiaY) == null ? void 0 : _d2.get(le)) ?? 0;
      L += `<tr><td>${le}</td><td>${ue ? "Frame" : "Shell"}</td><td>${ee.join(" \u2192 ")}</td>`, L += `<td>${Xe(Be)}</td><td>${Xe(Ae)}</td><td>${Xe(Je)}</td><td>${Xe(lt)}</td><td>${Xe(je)}</td></tr>`;
    }), L += "</tbody></table>", L += "<h2>2. Element Formulation</h2>", D > 0 && (L += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", L += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", L += "<h4>2.1.1 Shape Functions</h4>", L += "<p><b>Axial</b> (linear interpolation):</p>", L += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', L += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', L += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', L += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', L += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', L += "</tbody></table>", L += La(), L += "<p><b>Torsion</b> (linear): same as axial.</p>", L += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", L += "<p>The B matrix relates nodal displacements to internal strains:</p>", L += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', L += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', L += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', L += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', L += "<h4>2.1.3 Constitutive Relations D</h4>", L += '<table class="rpt-eq-table"><tbody>', L += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', L += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', L += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', L += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', L += "</tbody></table>", L += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", L += "<p>Obtained by analytical integration:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', L += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", L += '<div class="rpt-eq-small">', L += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", L += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", L += "</div>", L += "<h4>2.1.5 Transformation Matrix T</h4>", L += "<p>Direction cosines of element axis:</p>", L += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', L += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', L += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', L += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", L += "<h4>2.1.6 Global Stiffness Matrix</h4>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), L += "<h2>3. Numerical Results per Element</h2>", L += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ee = 0; ee < j; ee++) {
      const le = _[ee], ue = le.map((Pt) => h[Pt]);
      if (!(le.length === 2)) continue;
      const Be = vo(to(ue[1], ue[0])), Ae = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(ee)) ?? 0, Je = ((_b = z.areas) == null ? void 0 : _b.get(ee)) ?? 0, lt = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(ee)) ?? 0, je = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(ee)) ?? 0, Qe = ((_e2 = z.shearModuli) == null ? void 0 : _e2.get(ee)) ?? 0, we = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(ee)) ?? 0;
      let He = null, Re = null, Ze = null;
      try {
        He = on(ue, z, ee), Re = nn(ue), Ze = jt(Rn(Re), jt(He, Re));
      } catch {
        continue;
      }
      const ct = to(ue[1], ue[0]), nt = ct[0] / Be, ut = ct[1] / Be, xt = ct[2] / Be;
      L += '<div class="rpt-elem-block">', L += `<h3 class="rpt-elem-title" data-toggle="elem${ee}">\u25B6 Element ${ee} \u2014 Nodes ${le[0]} \u2192 ${le[1]}, L = ${Xe(Be)}</h3>`, L += `<div id="rpt-elem${ee}" class="rpt-elem-body" style="display:none">`, L += "<h4>Properties (numerical substitution)</h4>", L += '<div class="rpt-eq-small">', L += `E = ${Xe(Ae)} &nbsp;&nbsp; A = ${Xe(Je)} &nbsp;&nbsp; I<sub>z</sub> = ${Xe(lt)} &nbsp;&nbsp; I<sub>y</sub> = ${Xe(je)} &nbsp;&nbsp; G = ${Xe(Qe)} &nbsp;&nbsp; J = ${Xe(we)}<br/>`, L += `EA/L = ${Xe(Ae)}\xB7${Xe(Je)}/${Xe(Be)} = <b>${Xe(Ae * Je / Be)}</b><br/>`, L += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Xe(Ae)}\xB7${Xe(lt)}/${Xe(Be)}\xB3 = <b>${Xe(12 * Ae * lt / Be ** 3)}</b><br/>`, L += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Xe(Ae)}\xB7${Xe(je)}/${Xe(Be)}\xB3 = <b>${Xe(12 * Ae * je / Be ** 3)}</b><br/>`, L += `GJ/L = ${Xe(Qe)}\xB7${Xe(we)}/${Xe(Be)} = <b>${Xe(Qe * we / Be)}</b>`, L += "</div>", L += "<h4>Direction cosines</h4>", L += `<div class="rpt-eq-small">l = ${en(nt)}, m = ${en(ut)}, n = ${en(xt)}, D = ${en(Math.sqrt(nt ** 2 + ut ** 2))}</div>`, L += "<h4>K<sub>local</sub> (12\xD712)</h4>", L += Pn(He, 12), L += "<h4>T \u2014 Transformation (12\xD712)</h4>", L += Pn(Re, 12), L += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", L += Pn(Ze, 12), L += "<h4>Assembly</h4>", L += `<div class="rpt-eq-small">Global DOFs: node ${le[0]} \u2192 [${le[0] * 6}..${le[0] * 6 + 5}], node ${le[1]} \u2192 [${le[1] * 6}..${le[1] * 6 + 5}]</div>`, L += "</div></div>";
    }
    L += "<h2>4. Global Assembly</h2>", L += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${j - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, L += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", L += Ta(_, h.length), L += "<h2>5. Boundary Conditions</h2>";
    const oe = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (L += "<h3>5.1 Supports (fixed DOFs)</h3>", Y.supports && Y.supports.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of oe) L += `<th>${ee}</th>`;
      L += "</tr></thead><tbody>", Y.supports.forEach((ee, le) => {
        L += `<tr><td>${le}</td>`, ee.forEach((ue, Te) => {
          ue && $e.push(le * 6 + Te), L += `<td class="${ue ? "fixed" : ""}">${ue ? "Fixed" : "Free"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, L += `Free DOFs: ${V} \u2212 ${$e.length} = <b>${V - $e.length}</b></div>`, L += "<h3>5.2 Applied Loads</h3>", Y.loads && Y.loads.size > 0) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ee = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const le of ee) L += `<th>${le}</th>`;
      L += "</tr></thead><tbody>", Y.loads.forEach((le, ue) => {
        L += `<tr><td>${ue}</td>`, le.forEach((Te) => {
          const Be = Math.abs(Te) > 1e-10;
          L += `<td class="${Be ? "nz" : ""}">${Be ? Xe(Te) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>6. Solution</h2>", L += "<p>After removing fixed DOFs, the reduced system is:</p>", L += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', L += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", L += "<h3>6.1 Nodal Displacements</h3>", R == null ? void 0 : R.deformations) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of oe) L += `<th>${ee}</th>`;
      L += "</tr></thead><tbody>", R.deformations.forEach((ee, le) => {
        L += `<tr><td>${le}</td>`, ee.forEach((ue) => {
          const Te = Math.abs(ue) > 1e-10;
          L += `<td class="${Te ? "nz" : ""}">${Xe(ue, 6)}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h3>6.2 Reactions</h3>", L += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', R == null ? void 0 : R.reactions) {
      L += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of oe) L += `<th>${ee}</th>`;
      L += "</tr></thead><tbody>", R.reactions.forEach((ee, le) => {
        L += `<tr><td>${le}</td>`, ee.forEach((ue) => {
          const Te = Math.abs(ue) > 1e-10;
          L += `<td class="${Te ? "nz-react" : ""}">${Te ? Xe(ue, 4) : "0"}</td>`;
        }), L += "</tr>";
      }), L += "</tbody></table>";
    }
    if (L += "<h2>7. Internal Forces</h2>", L += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", L += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', L += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', R == null ? void 0 : R.deformations) {
      const ee = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      L += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const le of ee) L += `<th>${le}<sub>i</sub></th>`;
      for (const le of ee) L += `<th>${le}<sub>j</sub></th>`;
      L += "</tr></thead><tbody>";
      for (let le = 0; le < j; le++) {
        const ue = _[le];
        if (ue.length !== 2) continue;
        const Te = ue.map((Be) => h[Be]);
        try {
          const Be = on(Te, z, le), Ae = nn(Te), Je = [];
          for (const Qe of ue) {
            const we = ((_g = R.deformations) == null ? void 0 : _g.get(Qe)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Je.push(...we);
          }
          const lt = jt(Ae, Je), je = jt(Be, lt);
          L += `<tr><td>${le}</td><td>${ue.join("\u2192")}</td>`;
          for (let Qe = 0; Qe < 12; Qe++) {
            const we = Math.abs(je[Qe]) > 1e-10;
            L += `<td class="${we ? "nz" : ""}">${Xe(je[Qe], 2)}</td>`;
          }
          L += "</tr>";
        } catch {
        }
      }
      L += "</tbody></table>";
    }
    const fe = `
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
    return me.innerHTML = fe + L, (_h = me.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => me.remove()), me.querySelectorAll("[data-toggle]").forEach((ee) => {
      ee.addEventListener("click", () => {
        const le = ee.dataset.toggle, ue = me.querySelector(`#rpt-${le}`);
        if (ue) {
          const Te = ue.style.display !== "none";
          ue.style.display = Te ? "none" : "", ee.textContent = ee.textContent.replace(/^[▼▶]/, Te ? "\u25B6" : "\u25BC");
        }
      });
    }), me;
  }
  function Xe(t, h = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(h) : t.toFixed(h);
  }
  function en(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function Pn(t, h) {
    var _a2;
    const _ = Math.min(h, 12);
    let z = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let Y = 0; Y < _; Y++) {
      z += "<tr>";
      for (let R = 0; R < _; R++) {
        const V = ((_a2 = t[Y]) == null ? void 0 : _a2[R]) ?? 0, j = Math.abs(V) < 1e-10;
        z += `<td class="${j ? "z" : ""} ${Y === R && !j ? "diag" : ""}">${j ? "0" : za(V)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", h > _ && (z += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${h}\xD7${h})</div>`), z += "</div>", z;
  }
  function za(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function La() {
    const V = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (D) => 1 - 3 * D ** 2 + 2 * D ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (D) => D * (1 - D) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (D) => 3 * D ** 2 - 2 * D ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (D) => D ** 2 * (D - 1)
      }
    ];
    let j = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    j += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, j += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', j += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, j += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, j += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const D of V) {
      let G = "";
      for (let $e = 0; $e <= 80; $e++) {
        const fe = $e / 80, ee = 30 + fe * 540, le = 180 / 2 - D.fn(fe) * 60;
        G += ($e === 0 ? "M" : "L") + `${ee.toFixed(1)},${le.toFixed(1)}`;
      }
      j += `<path d="${G}" fill="none" stroke="${D.color}" stroke-width="2.5"/>`;
      const me = 0.75, L = 30 + me * 540 + 8, oe = 180 / 2 - D.fn(me) * 60 - 6;
      j += `<text x="${L}" y="${oe}" fill="${D.color}" font-size="11" font-weight="bold" font-family="sans-serif">${D.name}</text>`;
    }
    return j += "</svg>", j;
  }
  function Ta(t, h) {
    const _ = h * 6, z = Math.min(_, 30);
    let Y = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    Y += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', Y += "<tr><td></td>";
    for (let V = 0; V < z; V++) Y += `<td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
    Y += "</tr>";
    const R = Array.from({
      length: z
    }, () => Array(z).fill(0));
    for (let V = 0; V < t.length; V++) {
      const j = t[V].map((D) => D * 6);
      for (const D of j) for (const G of j) for (let me = 0; me < 6; me++) for (let L = 0; L < 6; L++) {
        const oe = D + me, $e = G + L;
        oe < z && $e < z && R[oe][$e]++;
      }
    }
    for (let V = 0; V < z; V++) {
      Y += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
      for (let j = 0; j < z; j++) {
        const D = R[V][j], G = D === 0 ? "#fff" : D === 1 ? "#e8f0fe" : D === 2 ? "#c6dcf5" : "#a0c4e8", me = D === 0 ? "" : D.toString();
        Y += `<td style="background:${G};color:#003366">${me}</td>`;
      }
      Y += "</tr>";
    }
    return Y += "</table></div>", _ > z && (Y += `<div style="color:#888;font-size:9pt">(showing ${z}\xD7${z} of ${_}\xD7${_})</div>`), Y;
  }
  let On = false;
  function Ca(t) {
    if (On || window.katex) {
      On = true, t();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const _ = document.createElement("script");
    _.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", _.onload = () => {
      On = true, t();
    }, document.head.appendChild(_);
  }
  function Ts(t, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(t, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${t}</code>`;
  }
  function Aa(t, h, _, z, Y, R) {
    var _a2, _b, _c, _d, _e2, _f;
    const V = _[t], j = V.map((Re) => h[Re]), D = V.length === 2, G = D ? vo(to(j[1], j[0])) : 0, me = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, L = ((_b = z.areas) == null ? void 0 : _b.get(t)) ?? 0, oe = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(t)) ?? 0, $e = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(t)) ?? 0, fe = ((_e2 = z.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, ee = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(t)) ?? 0;
    let le = null, ue = null, Te = null;
    try {
      le = on(j, z, t), ue = nn(j), Te = jt(Rn(ue), jt(le, ue));
    } catch {
    }
    const Be = D ? to(j[1], j[0]) : [
      0,
      0,
      0
    ], Ae = G > 0 ? Be[0] / G : 0, Je = G > 0 ? Be[1] / G : 0, lt = G > 0 ? Be[2] / G : 0, je = Math.sqrt(Ae ** 2 + Je ** 2), Qe = [];
    if ((Y == null ? void 0 : Y.deformations) && D) for (const Re of V) {
      const Ze = Y.deformations.get(Re) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Qe.push(...Ze);
    }
    let we = [], He = [];
    if (Qe.length === 12 && ue && le) {
      try {
        we = jt(ue, Qe);
      } catch {
        we = Array(12).fill(0);
      }
      try {
        He = jt(le, we);
      } catch {
        He = Array(12).fill(0);
      }
    }
    return {
      elemIdx: t,
      elem: V,
      elmNodes: j,
      isFrame: D,
      L: G,
      E: me,
      A: L,
      Iz: oe,
      Iy: $e,
      G: fe,
      J: ee,
      kLocal: le,
      T: ue,
      kGlobal: Te,
      l: Ae,
      m: Je,
      n: lt,
      D: je,
      uGlobal: Qe,
      uLocal: we,
      fLocal: He,
      dOut: Y,
      aOut: R,
      totalNodes: h.length
    };
  }
  function qa(t, h, _, z, Y, R) {
    var _a2, _b;
    const V = Aa(t, h, _, z, Y, R), j = document.createElement("div");
    return j.className = "er-panel", j.innerHTML = Na + `
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
    <div class="er-body" id="er-body-tabla">${Fa(V)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Cs(V)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Pa(V)}</div>
  `, j.querySelectorAll(".er-tab").forEach((D) => {
      D.addEventListener("click", () => {
        j.querySelectorAll(".er-tab").forEach((me) => me.classList.remove("active")), D.classList.add("active");
        const G = D.dataset.tab;
        j.querySelectorAll(".er-body").forEach((me) => me.style.display = "none"), j.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a2 = j.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => j.remove()), (_b = j.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const D = j.classList.toggle("er-fullscreen-mode"), G = j.querySelector("#er-fullscreen");
      G && (G.textContent = D ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const D = j.querySelector("#er-sf-canvas");
      D && Nn(D);
      const G = j.querySelector("#er-sf-canvas-math");
      G && Nn(G);
    }, 50), Ca(() => {
      const D = j.querySelector("#er-body-math");
      D && (D.innerHTML = Cs(V)), setTimeout(() => {
        const G = j.querySelector("#er-sf-canvas-math");
        G && Nn(G);
      }, 50), j.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const me = G.dataset.toggle, L = j.querySelector(`#er-${me}`);
          L && (L.style.display = L.style.display === "none" ? "" : "none");
        });
      });
    }), j;
  }
  function Fa(t) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${_e(t.E)}</td><td>A</td><td>${_e(t.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${_e(t.Iz)}</td><td>I<sub>y</sub></td><td>${_e(t.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${_e(t.G)}</td><td>J</td><td>${_e(t.J)}</td></tr>`, h += "</table>", t.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${t.kLocal.length}\xD7${t.kLocal.length})</div>`, h += jo(t.kLocal)), t.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += jo(t.T)), t.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += jo(t.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', t.uGlobal.length > 0) {
      const _ = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let z = 0; z < t.elem.length; z++) {
        h += `<div class="er-sub">Nodo ${t.elem[z]}: `;
        for (let Y = 0; Y < 6; Y++) {
          const R = t.uGlobal[z * 6 + Y];
          h += `${_[Y]}=<span class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${_e(R, 6)}</span> `;
        }
        h += "</div>";
      }
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (h += '<div class="er-section-title">6. Fuerzas internas</div>', t.fLocal.length > 0 && t.fLocal.some((_) => _ !== 0)) {
      const _ = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const z of _) h += `<th>${z}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) h += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) h += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function Cs(t) {
    if (!t.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const _ = (me) => Ts(me), z = (me) => Ts(me, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${z("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${_("\\text{Nodo } i")} = (${t.elmNodes[0].map((me) => _e(me)).join(", ")})<br/>`, h += `${_("\\text{Nodo } j")} = (${t.elmNodes[1].map((me) => _e(me)).join(", ")})<br/>`, h += `${z(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${_e(t.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${z("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${z("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${z("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${z("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${z("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${z("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${z("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${z("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${z("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${z("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, h += `<div class="er-eq">${z("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${z("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, h += `<div class="er-eq">${z("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${z("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${z(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${_e(t.E)} \\times ${_e(t.A)} = \\mathbf{${_e(t.E * t.A)}}`)}</div>`, h += `<div class="er-eq">${z(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${_e(t.E)} \\times ${_e(t.Iz)} = \\mathbf{${_e(t.E * t.Iz)}}`)}</div>`, h += `<div class="er-eq">${z(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${_e(t.E)} \\times ${_e(t.Iy)} = \\mathbf{${_e(t.E * t.Iy)}}`)}</div>`, h += `<div class="er-eq">${z(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${_e(t.G)} \\times ${_e(t.J)} = \\mathbf{${_e(t.G * t.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const Y = t.E * t.A / t.L, R = t.E * t.Iz / t.L ** 3, V = t.E * t.Iy / t.L ** 3, j = t.G * t.J / t.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${z("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${z("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${z("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${z("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${z("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${z(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(t.E)}\\times${_e(t.A)}}{${_e(t.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${z(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${_e(Y)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, h += `<div class="er-eq">${z("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${z("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${z("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${z("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${z("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${z("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${z(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${_e(t.E)} \\times ${_e(t.Iz)}}{${_e(t.L)}^3} = \\mathbf{${_e(12 * R)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, h += `<div class="er-eq">${z(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${_e(t.G)}\\times${_e(t.J)}}{${_e(t.L)}} = \\mathbf{${_e(j)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${z("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${z("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${z("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${z(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * t.E * t.Iz / t.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${z(`\\frac{EA}{L} = \\mathbf{${_e(Y)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${_e(12 * R)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${_e(12 * V)}}`)}</div>`, h += `<div class="er-eq">${z(`\\frac{GJ}{L} = \\mathbf{${_e(j)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${_e(4 * t.E * t.Iy / t.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${_e(4 * t.E * t.Iz / t.L)}}`)}</div>`, h += `<div class="er-eq">${z(`\\frac{6EI_z}{L^2} = \\mathbf{${_e(6 * t.E * t.Iz / t.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${_e(6 * t.E * t.Iy / t.L ** 2)}}`)}</div>`, t.kLocal && (h += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, h += jo(t.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${z(`l = \\frac{x_j - x_i}{L} = ${tn(t.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${tn(t.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${tn(t.n)}`)}</div>`, h += `<div class="er-eq">${z(`D = \\sqrt{l^2 + m^2} = ${tn(t.D)}`)}</div>`, Math.abs(t.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${_(`n \\approx ${t.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const me = t.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${z(me)}</div>`;
    } else h += `<div class="er-eq">${z("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${z("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, t.kGlobal && (h += jo(t.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const D = t.elem[0] * 6, G = t.elem[1] * 6;
    if (h += `<div class="er-eq">${z(`\\text{Nodo } ${t.elem[0]} \\rightarrow \\text{DOFs } [${D} \\ldots ${D + 5}]`)}</div>`, h += `<div class="er-eq">${z(`\\text{Nodo } ${t.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, h += `<div class="er-eq">${z("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${z("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${z("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, t.fLocal.length > 0 && t.fLocal.some((me) => me !== 0)) {
      const me = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const L of me) h += `<th>${L}</th>`;
      h += `</tr><tr><td>i (${t.elem[0]})</td>`;
      for (let L = 0; L < 6; L++) h += `<td class="${Math.abs(t.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[L], 3)}</td>`;
      h += `</tr><tr><td>j (${t.elem[1]})</td>`;
      for (let L = 6; L < 12; L++) h += `<td class="${Math.abs(t.fLocal[L]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[L], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function Pa(t) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${t.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${t.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${t.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${_e(t.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${_e(t.E)}</td></tr>`, h += `<tr><td>A</td><td>${_e(t.A)}</td></tr>`, h += "</table>", t.uGlobal.length > 0) {
      h += '<div class="er-section-title">Desplazamientos</div>';
      const _ = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const z of _) h += `<th>${z}</th>`;
      h += "</tr>";
      for (let z = 0; z < t.elem.length; z++) {
        h += `<tr><td>${t.elem[z]}</td>`;
        for (let Y = 0; Y < 6; Y++) {
          const R = t.uGlobal[z * 6 + Y];
          h += `<td class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${_e(R, 6)}</td>`;
        }
        h += "</tr>";
      }
      h += "</table>";
    }
    if (t.fLocal.length > 0 && t.fLocal.some((_) => _ !== 0)) {
      h += '<div class="er-section-title">Fuerzas internas</div>';
      const _ = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const z of _) h += `<th>${z}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) h += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) h += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${_e(t.fLocal[z], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function _e(t, h = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(h) : t.toFixed(h);
  }
  function tn(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function jo(t) {
    var _a2;
    const h = t.length, _ = Math.min(h, 12);
    let z = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let Y = 0; Y < _; Y++) {
      z += "<tr>";
      for (let R = 0; R < _; R++) {
        const V = ((_a2 = t[Y]) == null ? void 0 : _a2[R]) ?? 0, j = Math.abs(V) < 1e-10;
        z += `<td class="${j ? "z" : ""} ${Y === R && !j ? "diag" : ""}">${j ? "0" : Oa(V)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", h > _ && (z += `<div style="color:var(--fem-label);font-size:9px">(${_}\xD7${_} de ${h}\xD7${h})</div>`), z += "</div>", z;
  }
  function Oa(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function Nn(t) {
    const h = t.getContext("2d");
    if (!h) return;
    const _ = t.width, z = t.height, Y = 30, R = _ - 2 * Y, V = (z - 3 * Y) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, _, z);
    const j = (D, G, me) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(Y, D, R, V), h.strokeStyle = "#444", h.beginPath(), h.moveTo(Y, D + V / 2), h.lineTo(Y + R, D + V / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(G, Y + 4, D + 14);
      for (const oe of me) {
        h.strokeStyle = oe.color, h.lineWidth = 2.5, h.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const fe = $e / 100, ee = Y + fe * R, le = D + V / 2 - oe.fn(fe) * (V / 2 * 0.85);
          $e === 0 ? h.moveTo(ee, le) : h.lineTo(ee, le);
        }
        h.stroke();
      }
      let L = Y + R - 90;
      for (const oe of me) h.fillStyle = oe.color, h.font = "bold 10px sans-serif", h.fillText(oe.label, L, D + V - 6), L += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", Y, D + V + 12), h.fillText("1", Y + R - 6, D + V + 12), h.fillText("\u03BE", Y + R / 2, D + V + 12);
    };
    j(Y, "Axial (lineal)", [
      {
        fn: (D) => 1 - D,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (D) => D,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), j(Y + V + Y, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (D) => 1 - 3 * D * D + 2 * D * D * D,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (D) => D * (1 - D) * (1 - D),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (D) => 3 * D * D - 2 * D * D * D,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (D) => D * D * (D - 1),
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
  let sn = false, yo = null, Wt = null, Mt = null, ht = null;
  function _a() {
    ht = document.createElement("button"), ht.id = "help-tour-btn", ht.innerHTML = "?", ht.title = "Ayuda interactiva \u2014 Tour guiado", ht.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, ht.addEventListener("mouseenter", () => {
      ht.style.transform = "scale(1.15)", ht.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), ht.addEventListener("mouseleave", () => {
      ht.style.transform = "scale(1)", ht.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), ht.addEventListener("click", () => {
      sn ? Hn() : Ra();
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
  `, document.head.appendChild(t), ht;
  }
  function Ra() {
    sn = true, ht && (ht.innerHTML = "\u2715", ht.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", ht.style.animation = "none"), yo = document.createElement("div"), yo.id = "tour-overlay", yo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(yo), Po(0);
  }
  function Hn() {
    sn = false, ht && (ht.innerHTML = "?", ht.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", ht.style.animation = "helpPulse 2s infinite"), Wt && (Wt.remove(), Wt = null), Mt && (Mt.remove(), Mt = null), yo && (yo.remove(), yo = null);
  }
  function Po(t) {
    var _a2, _b;
    if (t >= Do.length) {
      Ha();
      return;
    }
    const h = Do[t], _ = document.querySelector(h.selector);
    if (!_) {
      Po(t + 1);
      return;
    }
    _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Wt && Wt.remove(), Mt && Mt.remove();
    const z = _.getBoundingClientRect(), Y = window.innerWidth, R = window.innerHeight, V = 320, j = 180;
    Wt = document.createElement("div"), Wt.style.cssText = `
    position: fixed;
    left: ${z.left - 6}px; top: ${z.top - 6}px;
    width: ${z.width + 12}px; height: ${z.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Wt);
    const D = Y - z.right, G = z.left, me = R - z.bottom, L = z.top;
    let oe = h.position || "bottom";
    oe === "bottom" && me < j + 20 && (oe = "top"), oe === "top" && L < j + 20 && (oe = "right"), oe === "right" && D < V + 20 && (oe = "left"), oe === "left" && G < V + 20 && (oe = "bottom");
    let $e, fe, ee = "";
    switch (oe) {
      case "bottom":
        $e = z.left + z.width / 2 - V / 2, fe = z.bottom + 14, ee = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = z.left + z.width / 2 - V / 2, fe = z.top - j - 14, ee = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = z.right + 14, fe = z.top + z.height / 2 - j / 2, ee = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = z.left - V - 14, fe = z.top + z.height / 2 - j / 2, ee = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, Y - V - 10)), fe = Math.max(10, Math.min(fe, R - j - 10)), Mt = document.createElement("div"), Mt.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${fe}px;
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
  `, Mt.innerHTML = `
    <div style="${ee}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${h.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${t + 1}/${Do.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${h.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${t > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${t < Do.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Do.map((ue, Te) => `<div style="width:${Te === t ? "16px" : "6px"};height:6px;border-radius:3px;background:${Te === t ? "#0099ff" : Te < t ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Mt), (_a2 = Mt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Po(t + 1);
    }), (_b = Mt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
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
    Wt && (Wt.remove(), Wt = null), Mt && (Mt.remove(), Mt = null), Mt = document.createElement("div"), Mt.style.cssText = `
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
  `, Mt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Mt), (_a2 = Mt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Hn());
  }
  function Ba(t) {
    var _a2;
    const h = t.split(/\r?\n/), _ = {
      force: "TONF",
      length: "M"
    }, z = [], Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = [], D = [], G = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), L = [], oe = [];
    let $e = "", fe = "";
    const ee = /* @__PURE__ */ new Map();
    for (const ge of h) {
      const xe = ge.trim();
      if (!xe || xe.startsWith("$")) {
        xe.startsWith("$ ") && (fe = xe.substring(2).trim());
        continue;
      }
      if (fe && (ee.has(fe) || ee.set(fe, []), ee.get(fe).push(ge)), fe === "CONTROLS") {
        const X = xe.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        X && (_.force = X[1], _.length = X[2]);
        const Le = xe.match(/TITLE2\s+"([^"]+)"/);
        Le && ($e = Le[1]);
      }
      if (fe === "STORIES - IN SEQUENCE FROM TOP") {
        const X = xe.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (X) {
          const Le = X[1], U = X[2] ? parseFloat(X[2]) : 0, be = X[3] ? parseFloat(X[3]) : void 0;
          z.push({
            name: Le,
            height: U,
            elev: be ?? 0
          });
        }
      }
      if (fe === "MATERIAL PROPERTIES") {
        const X = xe.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (X) {
          const Le = X[1];
          Y.has(Le) || Y.set(Le, {
            type: X[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const U = Y.get(Le);
          X[2] && (U.type = X[2]);
          const be = xe.match(/\bE\s+([\d.eE+-]+)/);
          be && (U.E = parseFloat(be[1]));
          const Oe = xe.match(/\bU\s+([\d.eE+-]+)/);
          Oe && (U.nu = parseFloat(Oe[1]), U.G = U.E / (2 * (1 + U.nu)));
          const ke = xe.match(/\bFY\s+([\d.eE+-]+)/);
          ke && (U.fy = parseFloat(ke[1]));
          const tt = xe.match(/\bFC\s+([\d.eE+-]+)/);
          tt && (U.fc = parseFloat(tt[1]));
          const Fe = xe.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Fe && (U.density = parseFloat(Fe[1]));
        }
      }
      if (fe === "FRAME SECTIONS") {
        const X = xe.match(/FRAMESECTION\s+"([^"]+)"/);
        if (X) {
          const Le = X[1];
          R.has(Le) || R.set(Le, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const U = R.get(Le), be = xe.match(/MATERIAL\s+"([^"]+)"/);
          be && (U.material = be[1]);
          const Oe = xe.match(/SHAPE\s+"([^"]+)"/);
          Oe && (U.shape = Oe[1]);
          const ke = xe.match(/\bD\s+([\d.eE+-]+)/);
          ke && (U.D = parseFloat(ke[1]));
          const tt = xe.match(/\bB\s+([\d.eE+-]+)/);
          tt && (U.B = parseFloat(tt[1]));
          const Fe = xe.match(/\bTF\s+([\d.eE+-]+)/);
          Fe && (U.TF = parseFloat(Fe[1]));
          const qe = xe.match(/\bTW\s+([\d.eE+-]+)/);
          qe && (U.TW = parseFloat(qe[1]));
          const Ke = xe.match(/\bR\s+([\d.eE+-]+)/);
          Ke && (U.R = parseFloat(Ke[1]));
          const Ye = xe.match(/FILLMATERIAL\s+"([^"]+)"/);
          Ye && (U.fillMaterial = Ye[1]);
          const st = xe.match(/I2MOD\s+([\d.eE+-]+)/);
          st && (U.modI2 = parseFloat(st[1]));
          const Et = xe.match(/I3MOD\s+([\d.eE+-]+)/);
          Et && (U.modI3 = parseFloat(Et[1]));
        }
      }
      if (fe === "POINT COORDINATES") {
        const X = xe.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        X && V.set(X[1], [
          parseFloat(X[2]),
          parseFloat(X[3])
        ]);
      }
      if (fe === "LINE CONNECTIVITIES") {
        const X = xe.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        X && j.push({
          name: X[1],
          type: X[2],
          pt1: X[3],
          pt2: X[4],
          nStories: parseInt(X[5])
        });
      }
      if (fe === "POINT ASSIGNS") {
        const X = xe.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        X && G.set(`${X[1]}@${X[2]}`, X[3].split(/\s+/));
      }
      if (fe === "LINE ASSIGNS") {
        const X = xe.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (X) {
          const Le = {
            story: X[2],
            section: X[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, U = xe.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          U && (Le.rigidZone = parseFloat(U[1]));
          const be = xe.match(/RELEASE\s+"([^"]+)"/);
          be && (Le.releases = be[1].split(/\s+/));
          const Oe = xe.match(/ANG\s+([-\d.eE+]+)/);
          Oe && (Le.angle = parseFloat(Oe[1])), me.set(`${X[1]}@${X[2]}`, Le);
        }
      }
      if (fe === "GRIDS") {
        const X = xe.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        X && oe.push({
          label: X[1],
          dir: X[2],
          coord: parseFloat(X[3])
        });
      }
      if (fe === "FRAME OBJECT LOADS") {
        const X = xe.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        X && L.push({
          line: X[1],
          story: X[2],
          type: X[3],
          dir: X[4],
          lc: X[5],
          val: parseFloat(X[6])
        });
      }
      if (fe === "AREA CONNECTIVITIES") {
        const X = xe.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (X) {
          const Le = ((_a2 = X[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((U) => U.replace(/"/g, ""))) || [];
          D.push({
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
      for (let xe = ge - 1; xe >= 0; xe--) {
        const Le = le.get(z[xe + 1].name) + z[xe].height;
        z[xe].elev = Le, le.set(z[xe].name, Le);
      }
    }
    const ue = [], Te = [], Be = /* @__PURE__ */ new Map(), Ae = (ge, xe) => `${ge}@${xe}`, Je = /* @__PURE__ */ new Set(), lt = /* @__PURE__ */ new Map();
    for (const ge of j) lt.set(ge.name, ge);
    for (const ge of j) for (const [xe, X] of me) {
      if (!xe.startsWith(ge.name + "@")) continue;
      const Le = X.story, U = z.findIndex((be) => be.name === Le);
      if (!(U < 0)) if (ge.type === "COLUMN" || ge.type === "BRACE") {
        Je.add(Ae(ge.pt2, Le));
        const be = Math.max(ge.nStories, 1), Oe = Math.min(U + be, z.length - 1);
        Je.add(Ae(ge.pt1, z[Oe].name));
      } else Je.add(Ae(ge.pt1, Le)), Je.add(Ae(ge.pt2, Le));
    }
    for (const [ge] of G) Je.add(ge);
    for (const ge of Je) {
      const [xe, X] = ge.split("@"), Le = V.get(xe), U = le.get(X);
      Le === void 0 || U === void 0 || (ue.push([
        Le[0],
        Le[1],
        U
      ]), Te.push(ge), Be.set(ge, ue.length - 1));
    }
    const je = [], Qe = [], we = [], He = [], Re = /* @__PURE__ */ new Map();
    for (const ge of j) for (const [xe, X] of me) {
      if (!xe.startsWith(ge.name + "@")) continue;
      const Le = X.story, U = z.findIndex((qe) => qe.name === Le);
      if (U < 0) continue;
      let be, Oe;
      if (ge.type === "COLUMN" || ge.type === "BRACE") {
        const qe = Math.max(ge.nStories, 1), Ke = Math.min(U + qe, z.length - 1);
        be = Ae(ge.pt1, z[Ke].name), Oe = Ae(ge.pt2, Le);
      } else be = Ae(ge.pt1, Le), Oe = Ae(ge.pt2, Le);
      const ke = Be.get(be), tt = Be.get(Oe);
      if (ke === void 0 || tt === void 0 || ke === tt) continue;
      const Fe = je.length;
      if (je.push([
        ke,
        tt
      ]), Qe.push(ge.name), we.push(ge.type), He.push(Le), Re.set(Fe, X.section), X.rigidZone > 0 && Pt.set(Fe, [
        X.rigidZone,
        X.rigidZone
      ]), X.releases.length > 0) {
        const qe = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const Ke of X.releases) Ke === "TI" && (qe[0] = true), Ke === "M2I" && (qe[1] = true), Ke === "M3I" && (qe[2] = true), Ke === "TJ" && (qe[3] = true), Ke === "M2J" && (qe[4] = true), Ke === "M3J" && (qe[5] = true);
        Nt.set(Fe, qe);
      }
    }
    const Ze = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map();
    for (const [ge, xe] of Re) {
      const X = R.get(xe);
      if (!X) continue;
      const Le = Y.get(X.material);
      Le && (Ze.set(ge, Le.E), ct.set(ge, Le.G));
      const U = X.D, be = X.B, Oe = X.TF, ke = X.TW;
      let tt = 0, Fe = 0, qe = 0, Ke = 0, Ye = 0, st = 0, Et = "rect";
      switch (X.shape) {
        case "Concrete Rectangular":
          tt = U * be, Fe = be * U ** 3 / 12, qe = U * be ** 3 / 12, Ke = be * U ** 3 * (1 / 3 - 0.21 * (U / be) * (1 - U ** 4 / (12 * be ** 4))), Ye = st = 5 / 6 * tt, Et = "rect";
          break;
        case "Concrete Circle":
          tt = Math.PI * U ** 2 / 4, Fe = qe = Math.PI * U ** 4 / 64, Ke = Math.PI * U ** 4 / 32, Ye = st = 0.9 * tt, Et = "circ";
          break;
        case "Steel I/Wide Flange":
          tt = 2 * be * Oe + (U - 2 * Oe) * ke, Fe = (be * U ** 3 - (be - ke) * (U - 2 * Oe) ** 3) / 12, qe = (2 * Oe * be ** 3 + (U - 2 * Oe) * ke ** 3) / 12, Ke = (2 * be * Oe ** 3 + (U - 2 * Oe) * ke ** 3) / 3, Ye = (U - 2 * Oe) * ke, st = 2 * be * Oe * 5 / 6, Et = "I";
          break;
        case "Steel Tube":
          tt = U * be - (U - 2 * ke) * (be - 2 * ke), Fe = (be * U ** 3 - (be - 2 * ke) * (U - 2 * ke) ** 3) / 12, qe = (U * be ** 3 - (U - 2 * ke) * (be - 2 * ke) ** 3) / 12, Ke = 2 * ke * (U - ke) * (be - ke) * ((U - ke) * (be - ke)) / (U - ke + (be - ke)), Ye = 2 * U * ke, st = 2 * be * ke, Et = "HSS";
          break;
        case "Filled Steel Tube":
          tt = U * be, Fe = be * U ** 3 / 12, qe = U * be ** 3 / 12, Ke = 2 * ke * (U - ke) * (be - ke) * ((U - ke) * (be - ke)) / (U - ke + (be - ke)), Ye = 2 * U * ke + 5 / 6 * (U - 2 * ke) * (be - 2 * ke), st = 2 * be * ke + 5 / 6 * (U - 2 * ke) * (be - 2 * ke), Et = "CFT";
          break;
        case "Steel Angle": {
          const kt = Oe || ke;
          tt = kt * (U + be - kt), Fe = kt * (U ** 3 + be * kt ** 2 + kt ** 2 * (U - kt)) / 12, qe = kt * (be ** 3 + U * kt ** 2 + kt ** 2 * (be - kt)) / 12, Ke = (U + be - kt) * kt ** 3 / 3, Ye = U * kt, st = be * kt, Et = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          tt = 2 * be * Oe + (U - 2 * Oe) * ke, Fe = (ke * U ** 3 + 2 * be * Oe * (U - Oe) ** 2) / 12, qe = (2 * Oe * be ** 3 + (U - 2 * Oe) * ke ** 3) / 12, Ke = (2 * be * Oe ** 3 + (U - 2 * Oe) * ke ** 3) / 3, Ye = (U - 2 * Oe) * ke, st = 2 * be * Oe * 5 / 6, Et = X.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          tt = 2 * (2 * be * Oe + (U - 2 * Oe) * ke), Fe = 2 * (ke * U ** 3 + 2 * be * Oe * (U - Oe) ** 2) / 12, qe = 2 * (2 * Oe * be ** 3 + (U - 2 * Oe) * ke ** 3) / 12, Ke = 2 * (2 * be * Oe ** 3 + (U - 2 * Oe) * ke ** 3) / 3, Ye = 2 * (U - 2 * Oe) * ke, st = 4 * be * Oe * 5 / 6, Et = "2C";
          break;
        default:
          U > 0 && be > 0 && (tt = U * be, Fe = be * U ** 3 / 12, qe = U * be ** 3 / 12, Ke = Math.min(U, be) * Math.max(U, be) ** 3 / 3 * 0.3, Ye = st = 5 / 6 * tt);
          break;
      }
      X.modI2 && (qe *= X.modI2), X.modI3 && (Fe *= X.modI3), nt.set(ge, tt), zt.set(ge, Fe), Lt.set(ge, qe), et.set(ge, Ke), Ye > 0 && ut.set(ge, Ye), st > 0 && xt.set(ge, st), Tt.set(ge, {
        type: Et,
        b: be || void 0,
        h: U || void 0,
        d: Et === "circ" || Et === "pipe" ? U : void 0,
        tw: ke || void 0,
        tf: Oe || void 0,
        r: X.R,
        name: xe
      });
    }
    const $o = /* @__PURE__ */ new Map();
    for (const [ge, xe] of G) {
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
      for (const U of xe) U === "UX" && (Le[0] = true), U === "UY" && (Le[1] = true), U === "UZ" && (Le[2] = true), U === "RX" && (Le[3] = true), U === "RY" && (Le[4] = true), U === "RZ" && (Le[5] = true);
      $o.set(X, Le);
    }
    const Ie = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map();
    for (let ge = 0; ge < Qe.length; ge++) St.set(`${Qe[ge]}@${He[ge]}`, ge);
    for (const ge of L) {
      const xe = St.get(`${ge.line}@${ge.story}`);
      if (xe === void 0) continue;
      const [X, Le] = je[xe], U = ue[X], be = ue[Le], Oe = Math.sqrt((be[0] - U[0]) ** 2 + (be[1] - U[1]) ** 2 + (be[2] - U[2]) ** 2);
      if (Oe < 1e-10) continue;
      const ke = ge.val * Oe / 2;
      let tt = 0, Fe = 0, qe = 0;
      ge.dir === "GRAV" || ge.dir === "GRAVITY" ? qe = -ke : ge.dir === "X" ? tt = ke : ge.dir === "Y" ? Fe = ke : ge.dir === "Z" && (qe = -ke);
      for (const Ke of [
        X,
        Le
      ]) {
        const Ye = Ie.get(Ke) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        Ye[0] += tt, Ye[1] += Fe, Ye[2] += qe, Ie.set(Ke, Ye);
      }
    }
    const Ct = /* @__PURE__ */ new Map();
    for (const [ge, xe] of Re) {
      const X = R.get(xe);
      if (!X) continue;
      const Le = Y.get(X.material);
      (Le == null ? void 0 : Le.density) && Ct.set(ge, Le.density);
    }
    return {
      units: _,
      stories: z.reverse(),
      materials: Y,
      frameSections: R,
      nodes: ue,
      nodeNames: Te,
      nodeNameToIdx: Be,
      elements: je,
      elementNames: Qe,
      elementTypes: we,
      elementStories: He,
      elementSections: Re,
      nodeInputs: {
        supports: $o,
        loads: Ie
      },
      elementInputs: {
        elasticities: Ze,
        shearModuli: ct,
        areas: nt,
        momentsOfInertiaZ: zt,
        momentsOfInertiaY: Lt,
        torsionalConstants: et,
        shearAreasY: ut,
        shearAreasZ: xt,
        rigidOffsets: Pt,
        momentReleases: Nt,
        densities: Ct,
        sectionShapes: Tt
      },
      sectionShapes: Tt,
      grids: oe,
      info: {
        nNodes: ue.length,
        nFrames: je.length,
        nAreas: D.length,
        title: $e
      },
      rawSections: ee
    };
  }
  function Da(t) {
    const { e2kModel: h } = t, _ = h == null ? void 0 : h.rawSections;
    return _ && _.size > 0 ? ja(_) : Wa(t);
  }
  function ja(t, h) {
    const _ = [], z = [
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
    for (const Y of z) {
      const R = t.get(Y);
      if (!(!R || R.length === 0)) {
        _.push(`$ ${Y}`);
        for (const V of R) _.push(V);
        _.push("");
      }
    }
    for (const [Y, R] of t) if (!z.includes(Y) && R.length !== 0) {
      _.push(`$ ${Y}`);
      for (const V of R) _.push(V);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function Wa(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: z, elementInputs: Y, title: R, units: V } = t, j = (V == null ? void 0 : V.force) || "TONF", D = (V == null ? void 0 : V.length) || "M", G = [], me = (we) => Math.round(we * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${j}"  "${D}"  "C"  `), R && G.push(`  TITLE2  "${R}"  `), G.push("");
    const L = /* @__PURE__ */ new Set();
    h.forEach((we) => L.add(me(we[1])));
    const oe = [
      ...L
    ].sort((we, He) => we - He), $e = [], fe = /* @__PURE__ */ new Map();
    $e.push("Base"), fe.set(oe[0], "Base");
    for (let we = 1; we < oe.length; we++) {
      const He = `Level_${we}`;
      $e.push(He), fe.set(oe[we], He);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let we = oe.length - 1; we >= 1; we--) G.push(`  STORY "${$e[we]}"  HEIGHT ${me(oe[we] - oe[we - 1])} MASTERSTORY "Yes"  `);
    oe.length > 0 && G.push(`  STORY "Base"  ELEV ${oe[0]} `), G.push(""), G.push("$ MATERIAL PROPERTIES");
    const ee = /* @__PURE__ */ new Set();
    (_a2 = Y.elasticities) == null ? void 0 : _a2.forEach((we) => ee.add(we));
    const le = /* @__PURE__ */ new Map();
    let ue = 0;
    for (const we of ee) {
      const He = `Mat_${++ue}`;
      le.set(we, He), G.push(`  MATERIAL  "${He}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${He}"    SYMTYPE "Isotropic"  E ${we}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const Te = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
    _.forEach((we, He) => {
      var _a3, _b2;
      if (we.length !== 2) return;
      const Re = (_a3 = Y.sectionShapes) == null ? void 0 : _a3.get(He), Ze = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(He)) ?? 0, ct = le.get(Ze) || "Mat_1", nt = (Re == null ? void 0 : Re.h) ?? 0, ut = (Re == null ? void 0 : Re.b) ?? 0, xt = (Re == null ? void 0 : Re.d) ?? 0, Pt = (Re == null ? void 0 : Re.tf) ?? 0, Nt = (Re == null ? void 0 : Re.tw) ?? 0, zt = (Re == null ? void 0 : Re.type) || "rect", Lt = `${zt}_${nt}_${ut}_${xt}_${Pt}_${Nt}`;
      (Re == null ? void 0 : Re.name) && !Ae.has(Lt) && Ae.set(Lt, Re.name);
      let et = Ae.get(Lt);
      if (et || (zt === "rect" ? et = `R${me(ut * 100)}x${me(nt * 100)}` : zt === "circ" ? et = `C_D${me(xt * 100)}` : zt === "I" ? et = `I_${me(nt * 100)}` : et = `Sec_${Te.size + 1}`, Ae.set(Lt, et)), Be.set(He, et), Te.has(et)) return;
      Te.add(et);
      const $o = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[zt] || "Concrete Rectangular";
      let Ie = `  FRAMESECTION  "${et}"  MATERIAL "${ct}"  SHAPE "${$o}"`;
      nt && (Ie += `  D ${nt}`), ut && (Ie += `  B ${ut}`), xt && !nt && (Ie += `  D ${xt}`), Pt && (Ie += `  TF ${Pt}`), Nt && (Ie += `  TW ${Nt}`), G.push(Ie);
    }), G.push("");
    const Je = /* @__PURE__ */ new Map();
    let lt = 0;
    h.forEach((we) => {
      const He = `${me(we[0])},${me(we[2])}`;
      Je.has(He) || Je.set(He, `${++lt}`);
    }), G.push("$ POINT COORDINATES");
    for (const [we, He] of Je) {
      const [Re, Ze] = we.split(",").map(Number);
      G.push(`  POINT "${He}"  ${Re} ${Ze} `);
    }
    G.push("");
    const je = (we) => {
      const He = h[we], Re = `${me(He[0])},${me(He[2])}`;
      return {
        pt: Je.get(Re) || "1",
        story: fe.get(me(He[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const Qe = [];
    return _.forEach((we, He) => {
      if (we.length !== 2) return;
      const Re = Ya(h, we), Ze = Be.get(He) || `Sec_${He}`;
      if (Re === "BEAM") {
        const ct = je(we[0]), nt = je(we[1]);
        G.push(`  LINE  "E${He + 1}"  BEAM  "${ct.pt}"  "${nt.pt}"  0`), Qe.push(`  LINEASSIGN  "E${He + 1}"  "${ct.story}"  SECTION "${Ze}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const ct = h[we[0]][1] <= h[we[1]][1] ? we[0] : we[1], nt = h[we[0]][1] <= h[we[1]][1] ? we[1] : we[0];
        je(ct);
        const ut = je(nt), xt = me(h[ct][1]), Pt = me(h[nt][1]), Nt = oe.indexOf(xt), zt = oe.indexOf(Pt), Lt = Math.max(1, zt >= 0 && Nt >= 0 ? zt - Nt : 1);
        G.push(`  LINE  "E${He + 1}"  ${Re}  "${ut.pt}"  "${ut.pt}"  ${Lt}`);
        for (let et = 0; et < Lt; et++) {
          const Tt = zt - et;
          Tt >= 0 && Tt < $e.length && Qe.push(`  LINEASSIGN  "E${He + 1}"  "${$e[Tt]}"  SECTION "${Ze}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = z.supports) == null ? void 0 : _b.forEach((we, He) => {
      const Re = [];
      if (we[0] && Re.push("UX"), we[1] && Re.push("UY"), we[2] && Re.push("UZ"), we[3] && Re.push("RX"), we[4] && Re.push("RY"), we[5] && Re.push("RZ"), Re.length > 0) {
        const Ze = je(He);
        G.push(`  POINTASSIGN  "${Ze.pt}"  "${Ze.story}"  RESTRAINT "${Re.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), Qe.forEach((we) => G.push(we)), G.push(""), G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), z.loads && z.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), z.loads.forEach((we, He) => {
      const [Re, Ze, ct] = we, nt = je(He);
      Math.abs(Re) > 1e-10 && G.push(`  POINTLOAD  "${nt.pt}"  "${nt.story}"  "Dead"  TYPE "FORCE"  FX ${Re}`), Math.abs(Ze) > 1e-10 && G.push(`  POINTLOAD  "${nt.pt}"  "${nt.story}"  "Dead"  TYPE "FORCE"  FY ${Ze}`), Math.abs(ct) > 1e-10 && G.push(`  POINTLOAD  "${nt.pt}"  "${nt.story}"  "Dead"  TYPE "FORCE"  FZ ${ct}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function Ya(t, h) {
    const _ = t[h[0]], z = t[h[1]], Y = Math.abs(z[1] - _[1]), R = Math.sqrt((z[0] - _[0]) ** 2 + (z[2] - _[2]) ** 2), V = Y > R * 0.5;
    return V && R > 0.01 ? "BRACE" : V ? "COLUMN" : "BEAM";
  }
  function Ga(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: z, elementInputs: Y } = t, R = [];
    return R.push("# OpenSeesPy model exported from Awatif FEM Studio"), R.push(`# ${h.length} nodes, ${_.length} elements`), R.push(""), R.push("import openseespy.opensees as ops"), R.push(""), R.push("ops.wipe()"), R.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), R.push(""), R.push("# --- Nodes ---"), h.forEach((V, j) => {
      R.push(`ops.node(${j + 1}, ${V[0]}, ${V[1]}, ${V[2]})`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = z.supports) == null ? void 0 : _a2.forEach((V, j) => {
      const D = V.map((G) => G ? 1 : 0).join(", ");
      R.push(`ops.fix(${j + 1}, ${D})`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), R.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), R.push(""), R.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((V, j) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (V.length !== 2) return;
      const D = h[V[0]], G = h[V[1]], L = Math.abs(G[2] - D[2]) > Math.max(Math.abs(G[0] - D[0]), Math.abs(G[1] - D[1])) ? 2 : 1, oe = ((_a3 = Y.areas) == null ? void 0 : _a3.get(j)) ?? 1, $e = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, fe = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ee = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, le = ((_e2 = Y.momentsOfInertiaY) == null ? void 0 : _e2.get(j)) ?? 1, ue = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      R.push(`ops.element('elasticBeamColumn', ${j + 1}, ${V[0] + 1}, ${V[1] + 1}, ${oe}, ${$e}, ${fe}, ${ee}, ${le}, ${ue}, ${L})`);
    }), R.push(""), z.loads && z.loads.size > 0 && (R.push("# --- Loads ---"), R.push("ops.timeSeries('Linear', 1)"), R.push("ops.pattern('Plain', 1, 1)"), z.loads.forEach((V, j) => {
      const D = V.map((G) => G).join(", ");
      R.push(`ops.load(${j + 1}, ${D})`);
    }), R.push("")), R.push("# --- Analysis ---"), R.push("ops.system('BandGeneral')"), R.push("ops.numberer('RCM')"), R.push("ops.constraints('Plain')"), R.push("ops.integrator('LoadControl', 1.0)"), R.push("ops.algorithm('Linear')"), R.push("ops.analysis('Static')"), R.push("ops.analyze(1)"), R.push(""), R.push("# --- Results ---"), R.push('print("\\n=== Displacements ===")'), h.forEach((V, j) => {
      R.push(`print(f"Node {${j + 1}}: {ops.nodeDisp(${j + 1})}")`);
    }), R.push(""), R.push('print("\\n=== Reactions ===")'), R.push("ops.reactions()"), (_b = z.supports) == null ? void 0 : _b.forEach((V, j) => {
      R.push(`print(f"Node {${j + 1}}: {ops.nodeReaction(${j + 1})}")`);
    }), R.join(`
`);
  }
  function Ja(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: z, elementInputs: Y } = t, R = [];
    return R.push("# OpenSees Tcl model exported from Awatif FEM Studio"), R.push(`# ${h.length} nodes, ${_.length} elements`), R.push(""), R.push("wipe"), R.push("model basic -ndm 3 -ndf 6"), R.push(""), R.push("# --- Nodes ---"), h.forEach((V, j) => {
      R.push(`node ${j + 1} ${V[0]} ${V[1]} ${V[2]}`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = z.supports) == null ? void 0 : _a2.forEach((V, j) => {
      const D = V.map((G) => G ? 1 : 0).join(" ");
      R.push(`fix ${j + 1} ${D}`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("geomTransf Linear 1 0.0 0.0 1.0"), R.push("geomTransf Linear 2 -1.0 0.0 0.0"), R.push(""), R.push("# --- Elements ---"), _.forEach((V, j) => {
      var _a3, _b2, _c, _d, _e2, _f;
      if (V.length !== 2) return;
      const D = h[V[0]], G = h[V[1]], L = Math.abs(G[2] - D[2]) > Math.max(Math.abs(G[0] - D[0]), Math.abs(G[1] - D[1])) ? 2 : 1, oe = ((_a3 = Y.areas) == null ? void 0 : _a3.get(j)) ?? 1, $e = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, fe = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ee = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, le = ((_e2 = Y.momentsOfInertiaY) == null ? void 0 : _e2.get(j)) ?? 1, ue = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      R.push(`element elasticBeamColumn ${j + 1} ${V[0] + 1} ${V[1] + 1} ${oe} ${$e} ${fe} ${ee} ${le} ${ue} ${L}`);
    }), R.push(""), z.loads && z.loads.size > 0 && (R.push("# --- Loads ---"), R.push("timeSeries Linear 1"), R.push("pattern Plain 1 1 {"), z.loads.forEach((V, j) => {
      const D = V.map((G) => G).join(" ");
      R.push(`  load ${j + 1} ${D}`);
    }), R.push("}"), R.push("")), R.push("# --- Analysis ---"), R.push("system BandGeneral"), R.push("numberer RCM"), R.push("constraints Plain"), R.push("integrator LoadControl 1.0"), R.push("algorithm Linear"), R.push("analysis Static"), R.push("analyze 1"), R.push(""), R.push("# --- Results ---"), R.push('puts "\\n=== Displacements ==="'), h.forEach((V, j) => {
      R.push(`puts "Node ${j + 1}: [nodeDisp ${j + 1}]"`);
    }), R.push('puts "\\n=== Reactions ==="'), R.push("reactions"), (_b = z.supports) == null ? void 0 : _b.forEach((V, j) => {
      R.push(`puts "Node ${j + 1}: [nodeReaction ${j + 1}]"`);
    }), R.join(`
`);
  }
  function Va(t) {
    const h = [], _ = [], z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
    for (const $e of t.split(/\r?\n/)) {
      const fe = $e.trim(), ee = fe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ee) {
        const Be = parseInt(ee[1]), Ae = h.length;
        h.push([
          parseFloat(ee[2]),
          parseFloat(ee[3]),
          parseFloat(ee[4])
        ]), L.set(Be, Ae);
        continue;
      }
      const le = fe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (le) {
        const Be = parseInt(le[1]), Ae = L.get(Be);
        Ae !== void 0 && z.set(Ae, [
          le[2] === "1",
          le[3] === "1",
          le[4] === "1",
          le[5] === "1",
          le[6] === "1",
          le[7] === "1"
        ]);
        continue;
      }
      const ue = fe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ue) {
        const Be = parseInt(ue[1]), Ae = L.get(parseInt(ue[2])), Je = L.get(parseInt(ue[3]));
        if (Ae !== void 0 && Je !== void 0) {
          const lt = _.length;
          _.push([
            Ae,
            Je
          ]), oe.set(Be, lt), j.set(lt, parseFloat(ue[4])), R.set(lt, parseFloat(ue[5])), V.set(lt, parseFloat(ue[6])), me.set(lt, parseFloat(ue[7])), D.set(lt, parseFloat(ue[8])), G.set(lt, parseFloat(ue[9]));
        }
        continue;
      }
      const Te = fe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Te) {
        const Be = L.get(parseInt(Te[1]));
        Be !== void 0 && Y.set(Be, [
          parseFloat(Te[2]),
          parseFloat(Te[3]),
          parseFloat(Te[4]),
          parseFloat(Te[5]),
          parseFloat(Te[6]),
          parseFloat(Te[7])
        ]);
      }
    }
    return {
      nodes: h,
      elements: _,
      nodeInputs: {
        supports: z,
        loads: Y
      },
      elementInputs: {
        elasticities: R,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: D,
        momentsOfInertiaZ: G,
        torsionalConstants: me
      }
    };
  }
  function Xa(t) {
    const h = [], _ = [], z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
    for (const oe of t.split(/\r?\n/)) {
      const $e = oe.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const fe = $e.split(/\s+/);
      if (fe[0] === "node" && fe.length >= 5) {
        const ee = parseInt(fe[1]), le = h.length;
        h.push([
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4])
        ]), L.set(ee, le);
        continue;
      }
      if (fe[0] === "fix" && fe.length >= 8) {
        const ee = L.get(parseInt(fe[1]));
        ee !== void 0 && z.set(ee, [
          fe[2] === "1",
          fe[3] === "1",
          fe[4] === "1",
          fe[5] === "1",
          fe[6] === "1",
          fe[7] === "1"
        ]);
        continue;
      }
      if (fe[0] === "element" && fe[1] === "elasticBeamColumn" && fe.length >= 12) {
        const ee = L.get(parseInt(fe[3])), le = L.get(parseInt(fe[4]));
        if (ee !== void 0 && le !== void 0) {
          const ue = _.length;
          _.push([
            ee,
            le
          ]), j.set(ue, parseFloat(fe[5])), R.set(ue, parseFloat(fe[6])), V.set(ue, parseFloat(fe[7])), me.set(ue, parseFloat(fe[8])), D.set(ue, parseFloat(fe[9])), G.set(ue, parseFloat(fe[10]));
        }
        continue;
      }
      if (fe[0] === "load" && fe.length >= 8) {
        const ee = L.get(parseInt(fe[1]));
        ee !== void 0 && Y.set(ee, [
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4]),
          parseFloat(fe[5]),
          parseFloat(fe[6]),
          parseFloat(fe[7])
        ]);
      }
    }
    return {
      nodes: h,
      elements: _,
      nodeInputs: {
        supports: z,
        loads: Y
      },
      elementInputs: {
        elasticities: R,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: D,
        momentsOfInertiaZ: G,
        torsionalConstants: me
      }
    };
  }
  As = qo.state(false);
  ol = function(t) {
    t.nodeInputs || (t.nodeInputs = qo.state({})), t.elementInputs || (t.elementInputs = qo.state({})), t.deformOutputs || (t.deformOutputs = qo.state({})), t.analyzeOutputs || (t.analyzeOutputs = qo.state({}));
    let h = "tonf", _ = "m", z = xo(h, _), Y = {
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
    }, V = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set();
    let D = false;
    const G = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Map();
    let L = "", oe = {}, $e = null, fe = "", ee = [], le = [], ue = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), lt = null, je = [], Qe = 0.2, we = 2, He = 2, Re = false, Ze = 2, ct = "x", nt = /* @__PURE__ */ new Set(), ut = true, xt = 0.15, Pt = 2, Nt = 2, zt = /* @__PURE__ */ new Set(), Lt = false, et = "perimeter";
    const Tt = () => ({
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
    }), $o = (e, o) => ({
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
      }, Tt),
      vigasY: Array.from({
        length: o
      }, Tt)
    }), Ie = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let St = 0, Ct = 3, ge = false, xe = 0, X = null, Le = 0, U = [], be = 1, Oe = true;
    const ke = Ia();
    ke.div.style.display = "none";
    function tt() {
      const e = Uo()[L];
      return e && e[St] ? e[St].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Fe = [], qe = [], Ke = 0, Ye = [], st = null;
    function Et() {
      if (!st) return;
      const e = Ue();
      e && e.scene.remove(st), st.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), st = null;
    }
    function kt(e, o, n, l, s) {
      Et();
      const c = Ue();
      if (!c) return;
      st = new Vo(), st.name = "refGrid";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = Math.max(...n), b = i - a || 1, $ = d - u || 1, w = 3359829, x = 2241348;
      for (const g of n) {
        for (const S of o) {
          const E = new Dt().setFromPoints([
            new Se(a, g, S),
            new Se(i, g, S)
          ]), I = new Lo({
            color: w,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new go(E, I);
          F.computeLineDistances(), F.renderOrder = -10, st.add(F);
        }
        for (const S of e) {
          const E = new Dt().setFromPoints([
            new Se(S, g, u),
            new Se(S, g, d)
          ]), I = new Lo({
            color: w,
            dashSize: $ * 0.015,
            gapSize: $ * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new go(E, I);
          F.computeLineDistances(), F.renderOrder = -10, st.add(F);
        }
      }
      for (const g of e) for (const S of o) {
        const E = new Dt().setFromPoints([
          new Se(g, 0, S),
          new Se(g, r, S)
        ]), I = new Lo({
          color: x,
          dashSize: r * 0.01,
          gapSize: r * 8e-3,
          transparent: true,
          opacity: 0.15
        }), F = new go(E, I);
        F.computeLineDistances(), F.renderOrder = -10, st.add(F);
      }
      const f = Math.min(b, $) * 0.015;
      for (const g of n) for (const S of e) for (const E of o) {
        const I = [
          new Se(S - f, g, E),
          new Se(S + f, g, E),
          new Se(S, g, E - f),
          new Se(S, g, E + f)
        ], F = new Dt().setFromPoints(I), y = new Co({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new To(F, y);
        m.renderOrder = -5, st.add(m);
      }
      st.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), c.scene.add(st), c.render();
    }
    let vt = null;
    function Bn() {
      if (!vt) return;
      const e = Ue();
      e && e.scene.remove(vt), vt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), vt = null;
    }
    function Oo(e, o, n, l, s) {
      Bn();
      const c = Ue();
      if (!c) return;
      vt = new Vo(), vt.name = "gridAxes";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = i - a || 1, b = d - u || 1, $ = Math.max(r, b), w = $ * 0.08, x = l || e.map((m, p) => String.fromCharCode(65 + p)), f = s || o.map((m, p) => String(p + 1)), g = $ * 0.018, S = o.length <= 1, E = 8947848;
      for (let m = 0; m < e.length; m++) {
        const p = e[m];
        if (S) {
          const v = -w - g * 1.5;
          cn(p, 0, 0, p, 0, v + g, E, vt), dn(x[m] || `${m}`, p, 0, v, g, vt);
        } else {
          const v = u - w - g * 1.5;
          cn(p, u, 0, p, v + g, 0, E, vt), dn(x[m] || `${m}`, p, v, 0, g, vt);
        }
      }
      if (!S) for (let m = 0; m < o.length; m++) {
        const p = o[m], v = a - w - g * 1.5;
        cn(a, p, 0, v + g, p, 0, E, vt), dn(f[m] || `${m}`, v, p, 0, g, vt);
      }
      const I = g * 1.8, F = w * 1.2, y = w * 1.2;
      for (let m = 0; m < e.length - 1; m++) {
        const p = e[m], v = e[m + 1], M = Math.abs(v - p), k = (p + v) / 2, P = `${M.toFixed(2)} m`;
        S ? (ln(P, k, 0, -F, I, vt), rn(p, 0, -F * 0.7, v, 0, -F * 0.7, 16763904, vt)) : (ln(P, k, u - y, 0, I, vt), rn(p, u - y * 0.7, 0, v, u - y * 0.7, 0, 16763904, vt));
      }
      if (!S) for (let m = 0; m < o.length - 1; m++) {
        const p = o[m], v = o[m + 1], M = Math.abs(v - p), k = (p + v) / 2, P = `${M.toFixed(2)} m`;
        ln(P, a - F, k, 0, I, vt), rn(a - F * 0.7, p, 0, a - F * 0.7, v, 0, 16763904, vt);
      }
      vt.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((p) => {
          p.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(vt), c.render();
    }
    let At = null;
    function Dn() {
      if (!At) return;
      const e = Ue();
      e && e.scene.remove(At), At.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), At = null;
    }
    function an(e, o, n) {
      if (Dn(), e.length === 0) return;
      const l = Ue();
      if (!l) return;
      At = new Vo(), At.name = "storyLevels";
      const s = Math.min(...o), c = Math.max(...o), a = Math.min(...n), i = Math.max(...n), u = c - s || 1, d = i - a || 1, r = Math.max(u, d), b = r * 0.06, $ = n.length <= 1, w = 4491519, x = r * 0.015;
      for (const f of e) {
        const g = f.elev;
        $ ? (No(s - b, 0, g, c + b, 0, g, w, At), jn(f.name, c + b * 1.5, 0, g, x, At)) : (No(s, a, g, c, a, g, w, At), No(c, a, g, c, i, g, w, At), No(c, i, g, s, i, g, w, At), No(s, i, g, s, a, g, w, At), jn(f.name, s - b * 1.5, a, g, x, At));
      }
      At.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((g) => {
          g.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(At), l.render();
    }
    function No(e, o, n, l, s, c, a, i) {
      const u = Math.sqrt((l - e) ** 2 + (s - o) ** 2 + (c - n) ** 2) || 1, d = new Dt().setFromPoints([
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
      const b = new Fn(a);
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
      ], d = new Dt().setFromPoints(u), r = new Co({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new go(d, r);
      b.renderOrder = 998, i.add(b);
    }
    function cn(e, o, n, l, s, c, a, i) {
      const u = new Dt().setFromPoints([
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
      const d = new Fn(a);
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
        ]), t.nodes.val = l, console.log(`Node ${s} at (${e}, ${o}, ${n})`), Ge(), s;
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
        t.nodes.val = o, t.elements.val = n, console.log(`Node ${e} removed`), Ge();
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
        ]), t.elements.val = n, console.log(`Element ${l}: node ${e} -> node ${o}`), Ge(), l;
      },
      removeFrame(e) {
        const o = [
          ...t.elements.val
        ];
        if (e < 0 || e >= o.length) {
          console.error(`Element ${e} not found`);
          return;
        }
        o.splice(e, 1), t.elements.val = o, console.log(`Element ${e} removed`), Ge();
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
        ]), n.supports = l, t.nodeInputs.val = n, console.log(`Support added at node ${e}`), Ge();
      },
      removeSupport(e) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(e), o.supports = n, t.nodeInputs.val = o, console.log(`Support removed from node ${e}`), Ge();
      },
      addLoad(e, o) {
        if (!t.nodeInputs) return;
        const n = {
          ...t.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(e, o), n.loads = l, t.nodeInputs.val = n, console.log(`Load added at node ${e}: [${o.join(", ")}]`), Ge();
      },
      removeLoad(e) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(e), o.loads = n, t.nodeInputs.val = o, console.log(`Load removed from node ${e}`), Ge();
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
        const n = ye.querySelectorAll("input[type=checkbox]");
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
        const e = ye.querySelectorAll("input[type=checkbox]"), o = {};
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
          Et(), console.log("Reference grid cleared");
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
        kt(l, s, c), Fe = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), qe = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), Ke = c[c.length - 1], Ye = c.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Oo(Fe.map((a) => a.coord), qe.map((a) => a.coord), Ke, Fe.map((a) => a.label), qe.map((a) => a.label));
        {
          const a = c.map((i, u) => ({
            name: u === 0 ? "Base" : `P${u}`,
            height: u > 0 ? i - c[u - 1] : 0,
            elev: i
          }));
          an(a, Fe.map((i) => i.coord), qe.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(e) {
        var _a2;
        if (Fe.length === 0 || Ye.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (e == null ? void 0 : e.col) || "40x40", n = (e == null ? void 0 : e.viga) || "30x40", l = (e == null ? void 0 : e.fc) || 210, [s, c] = o.split("x").map((H) => parseFloat(H) / 100), [a, i] = n.split("x").map((H) => parseFloat(H) / 100), u = Fe.map((H) => H.coord), d = qe.map((H) => H.coord), r = Ye.map((H) => H.elev), b = u.length, $ = d.length, w = r.length, x = w - 1, f = [], g = {};
        for (let H = 0; H < w; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b; ie++) g[`${ie},${de},${H}`] = f.length, f.push([
          u[ie],
          d[de],
          r[H]
        ]);
        const S = [], E = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
        for (let H = 0; H < x; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b; ie++) {
          const te = S.length;
          S.push([
            g[`${ie},${de},${H}`],
            g[`${ie},${de},${H + 1}`]
          ]), E.add(te), F.set(te, H);
        }
        for (let H = 1; H < w; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b - 1; ie++) {
          const te = S.length;
          S.push([
            g[`${ie},${de},${H}`],
            g[`${ie + 1},${de},${H}`]
          ]), I.add(te), F.set(te, H - 1);
        }
        for (let H = 1; H < w; H++) for (let de = 0; de < b; de++) for (let ie = 0; ie < $ - 1; ie++) {
          const te = S.length;
          S.push([
            g[`${de},${ie},${H}`],
            g[`${de},${ie + 1},${H}`]
          ]), I.add(te), F.set(te, H - 1);
        }
        const y = ((_a2 = e == null ? void 0 : e.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (y) {
          const H = y === "all" || y === "x" || y === "perimeter", de = y === "all" || y === "y" || y === "perimeter";
          for (let ie = 0; ie < x; ie++) {
            if (H) for (let te = 0; te < $; te++) {
              if (y === "perimeter" && te !== 0 && te !== $ - 1) continue;
              const J = Math.floor((b - 1) / 2);
              for (let pe = 0; pe < b - 1; pe++) {
                if (y === "perimeter" && pe !== J) continue;
                const Ee = S.length;
                S.push([
                  g[`${pe},${te},${ie}`],
                  g[`${pe + 1},${te},${ie + 1}`]
                ]), m.add(Ee), F.set(Ee, ie);
                const ne = S.length;
                S.push([
                  g[`${pe + 1},${te},${ie}`],
                  g[`${pe},${te},${ie + 1}`]
                ]), m.add(ne), F.set(ne, ie);
              }
            }
            if (de) for (let te = 0; te < b; te++) {
              if (y === "perimeter" && te !== 0 && te !== b - 1) continue;
              const J = Math.floor(($ - 1) / 2);
              for (let pe = 0; pe < $ - 1; pe++) {
                if (y === "perimeter" && pe !== J) continue;
                const Ee = S.length;
                S.push([
                  g[`${te},${pe},${ie}`],
                  g[`${te},${pe + 1},${ie + 1}`]
                ]), m.add(Ee), F.set(Ee, ie);
                const ne = S.length;
                S.push([
                  g[`${te},${pe + 1},${ie}`],
                  g[`${te},${pe},${ie + 1}`]
                ]), m.add(ne), F.set(ne, ie);
              }
            }
          }
        }
        const p = 15100 * Math.sqrt(l) * 10, v = p / (2 * (1 + 0.2)), M = s * c, k = s * c ** 3 / 12, P = c * s ** 3 / 12, A = s * c * (s ** 2 + c ** 2) / 12, T = a * i, O = a * i ** 3 / 12, q = i * a ** 3 / 12, Z = a * i * (a ** 2 + i ** 2) / 12, K = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
        for (let H = 0; H < S.length; H++) K.set(H, p), re.set(H, v), E.has(H) ? (ae.set(H, M), Q.set(H, k), ce.set(H, P), Me.set(H, A), Pe.set(H, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${o}`
        })) : m.has(H) ? (ae.set(H, M), Q.set(H, k), ce.set(H, P), Me.set(H, A), Pe.set(H, {
          type: "rect",
          b: s,
          h: c,
          name: `BR${o}`
        })) : (ae.set(H, T), Q.set(H, O), ce.set(H, q), Me.set(H, Z), Pe.set(H, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const Ne = /* @__PURE__ */ new Map();
        for (let H = 0; H < $; H++) for (let de = 0; de < b; de++) Ne.set(g[`${de},${H},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return t.nodes.val = f, t.elements.val = S, t.nodeInputs.val = {
          supports: Ne,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: K,
          shearModuli: re,
          areas: ae,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: ce,
          torsionalConstants: Me,
          sectionShapes: Pe
        }, ue = E, Te = I, Ae = F, console.log(`Built: ${f.length} nodes, ${S.length} elements (${E.size} cols, ${I.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${y ? `, braces=${y}` : ""}`), {
          nodes: f.length,
          elements: S.length
        };
      },
      addCol(e, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Fe.findIndex((x) => x.label === e), s = qe.findIndex((x) => x.label === o);
        if (l < 0) {
          console.log(`Axis "${e}" not found. Available: ${Fe.map((x) => x.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${qe.map((x) => x.label)}`);
          return;
        }
        const c = Fe[l].coord, a = qe[s].coord, i = [
          ...t.nodes.val
        ], u = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = t.elementInputs) == null ? void 0 : _b.val;
        const d = (x) => {
          const f = i.findIndex((g) => Math.abs(g[0] - c) < 1e-3 && Math.abs(g[1] - a) < 1e-3 && Math.abs(g[2] - x) < 1e-3);
          return f >= 0 ? f : (i.push([
            c,
            a,
            x
          ]), i.length - 1);
        }, r = n ? [
          Ye.findIndex((x) => x.label === n)
        ] : Array.from({
          length: Ye.length - 1
        }, (x, f) => f + 1), b = new Map(((_d = (_c = t.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), $ = d(Ye[0].elev);
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
          if (x < 1 || x >= Ye.length) continue;
          const f = d(Ye[x - 1].elev), g = d(Ye[x].elev);
          u.push([
            f,
            g
          ]), ue.add(u.length - 1), Ae.set(u.length - 1, x - 1), w++;
        }
        return t.nodes.val = i, t.elements.val = u, t.nodeInputs.val = {
          ...t.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = t.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${e}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(e, o, n, l, s) {
        var _a2;
        const c = Fe.findIndex((F) => F.label === e), a = qe.findIndex((F) => F.label === o), i = Fe.findIndex((F) => F.label === n), u = qe.findIndex((F) => F.label === l), d = Ye.findIndex((F) => F.label === s);
        if (c < 0 || a < 0 || i < 0 || u < 0) {
          console.log("Axis not found");
          return;
        }
        if (d < 1) {
          console.log(`Story "${s}" not found. Available: ${Ye.filter((F) => F.label !== "Base").map((F) => F.label)}`);
          return;
        }
        const r = Fe[c].coord, b = qe[a].coord, $ = Fe[i].coord, w = qe[u].coord, x = Ye[d].elev, f = [
          ...t.nodes.val
        ], g = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], S = (F, y, m) => {
          const p = f.findIndex((v) => Math.abs(v[0] - F) < 1e-3 && Math.abs(v[1] - y) < 1e-3 && Math.abs(v[2] - m) < 1e-3);
          return p >= 0 ? p : (f.push([
            F,
            y,
            m
          ]), f.length - 1);
        }, E = S(r, b, x), I = S($, w, x);
        return g.push([
          E,
          I
        ]), Te.add(g.length - 1), Ae.set(g.length - 1, d - 1), t.nodes.val = f, t.elements.val = g, console.log(`Added beam ${e}-${o} \u2192 ${n}-${l} at ${s}`), g.length - 1;
      },
      addBrace(e, o, n, l, s, c) {
        var _a2;
        const a = Fe.findIndex((p) => p.label === e), i = qe.findIndex((p) => p.label === o), u = Ye.findIndex((p) => p.label === n), d = Fe.findIndex((p) => p.label === l), r = qe.findIndex((p) => p.label === s), b = Ye.findIndex((p) => p.label === c);
        if (a < 0 || i < 0 || u < 0) {
          console.log(`Point 1 not found: ${e}-${o}@${n}`);
          return;
        }
        if (d < 0 || r < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const $ = Fe[a].coord, w = qe[i].coord, x = Ye[u].elev, f = Fe[d].coord, g = qe[r].coord, S = Ye[b].elev, E = [
          ...t.nodes.val
        ], I = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], F = (p, v, M) => {
          const k = E.findIndex((P) => Math.abs(P[0] - p) < 1e-3 && Math.abs(P[1] - v) < 1e-3 && Math.abs(P[2] - M) < 1e-3);
          return k >= 0 ? k : (E.push([
            p,
            v,
            M
          ]), E.length - 1);
        }, y = F($, w, x), m = F(f, g, S);
        return I.push([
          y,
          m
        ]), Ae.set(I.length - 1, Math.min(u, b)), t.nodes.val = E, t.elements.val = I, console.log(`Added brace ${e}-${o}@${n} \u2192 ${l}-${s}@${c}`), I.length - 1;
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
        const x = b.length, f = $.length, g = w.length, S = l.length, E = [], I = {};
        for (let J = 0; J < g; J++) for (let pe = 0; pe < f; pe++) for (let Ee = 0; Ee < x; Ee++) I[`${Ee},${J},${pe}`] = E.length, E.push([
          b[Ee],
          w[J],
          $[pe]
        ]);
        const F = [], y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
        for (let J = 0; J < S; J++) for (let pe = 0; pe < f; pe++) for (let Ee = 0; Ee < x; Ee++) {
          const ne = F.length;
          F.push([
            I[`${Ee},${J},${pe}`],
            I[`${Ee},${J + 1},${pe}`]
          ]), y.add(ne), p.set(ne, J);
        }
        for (let J = 1; J < g; J++) for (let pe = 0; pe < f; pe++) for (let Ee = 0; Ee < x - 1; Ee++) {
          const ne = F.length;
          F.push([
            I[`${Ee},${J},${pe}`],
            I[`${Ee + 1},${J},${pe}`]
          ]), m.add(ne), p.set(ne, J - 1);
        }
        for (let J = 1; J < g; J++) for (let pe = 0; pe < x; pe++) for (let Ee = 0; Ee < f - 1; Ee++) {
          const ne = F.length;
          F.push([
            I[`${pe},${J},${Ee}`],
            I[`${pe},${J},${Ee + 1}`]
          ]), m.add(ne), p.set(ne, J - 1);
        }
        const M = 15100 * Math.sqrt(a) * 10, k = M / (2 * (1 + 0.2)), P = i * u, A = i * u ** 3 / 12, T = u * i ** 3 / 12, O = i * u * (i ** 2 + u ** 2) / 12, q = d * r, Z = d * r ** 3 / 12, K = r * d ** 3 / 12, re = d * r * (d ** 2 + r ** 2) / 12, ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
        for (let J = 0; J < F.length; J++) ae.set(J, M), Q.set(J, k), y.has(J) ? (ce.set(J, P), Me.set(J, A), Pe.set(J, T), Ne.set(J, O), H.set(J, {
          type: "rect",
          b: i,
          h: u,
          name: `COL${s}`
        })) : (ce.set(J, q), Me.set(J, Z), Pe.set(J, K), Ne.set(J, re), H.set(J, {
          type: "rect",
          b: d,
          h: r,
          name: `V${c}`
        }));
        const de = /* @__PURE__ */ new Map();
        for (let J = 0; J < f; J++) for (let pe = 0; pe < x; pe++) de.set(I[`${pe},0,${J}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        t.nodes.val = E, t.elements.val = F, t.nodeInputs.val = {
          supports: de,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: ae,
          shearModuli: Q,
          areas: ce,
          momentsOfInertiaZ: Me,
          momentsOfInertiaY: Pe,
          torsionalConstants: Ne,
          sectionShapes: H
        }, ue = y, Te = m, Ae = p, Fe = b.map((J, pe) => ({
          label: String.fromCharCode(65 + pe),
          coord: J
        })), qe = $.map((J, pe) => ({
          label: `${pe + 1}`,
          coord: J
        })), Ke = w[w.length - 1], Oo(Fe.map((J) => J.coord), qe.map((J) => J.coord), Ke, Fe.map((J) => J.label), qe.map((J) => J.label));
        {
          const J = w.map((pe, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? pe - w[Ee - 1] : 0,
            elev: pe
          }));
          an(J, b, $);
        }
        const ie = ye.querySelector("#cad3d-axis-buttons");
        if (ie) {
          ie.style.display = "flex";
          const J = Fe.map((Ee) => Ee.label), pe = qe.map((Ee) => Ee.label);
          ie.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of J) ie.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          ie.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of pe) ie.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const te = ye.querySelector("#cad3d-floor-buttons");
        if (te) {
          te.style.display = "flex", te.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let J = 0; J < S; J++) te.innerHTML += `<button class="floor-btn" data-floor="${J}">P${J + 1}</button>`;
        }
        return kt(b, $, w), Ge(), console.log(`Model3D: ${E.length}n ${F.length}e | ${x}x${f} grid, ${S} floors | COL${s} V${c} f'c=${a}`), {
          nodes: E.length,
          elements: F.length,
          columns: y.size,
          beams: m.size
        };
      },
      clear() {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs && (t.nodeInputs.val = {}), t.elementInputs && (t.elementInputs.val = {}), ue = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), Fe = [], qe = [], Ke = 0, Bn(), Dn(), Et();
        const e = ye.querySelector("#cad3d-axis-buttons");
        e && (e.style.display = "none", e.innerHTML = ""), console.log("Model cleared"), Ge();
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
        ue = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let f = 0; f < s.length; f++) u(f) || (ue.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let f = 0; f < s.length - 1; f++) Te.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f + 1},${x}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), w = tt();
        for (let x = 0; x < s.length; x++) {
          if (u(x)) continue;
          const f = `${x},0`;
          d[f] !== void 0 && $.set(d[f], [
            ...w
          ]);
        }
        return t.nodes.val = r, t.elements.val = b, t.nodeInputs && (t.nodeInputs.val = {
          supports: $
        }), Fe = [
          ...s
        ], qe = [
          0
        ], Ke = a[a.length - 1] || 0, setTimeout(() => {
          yt(), Oo(s, [
            0
          ]), yn(), $n();
        }, 50), Ge(), {
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
        const $ = (p) => s > 0 && p === 0 || c > 0 && p === d.length - 1, w = (p) => a > 0 && p === 0 || i > 0 && p === r.length - 1, x = (p, v) => $(p) || w(v), f = [], g = {};
        for (let p = 0; p < b.length; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length; M++) p === 0 && x(M, v) || (g[`${M},${v},${p}`] = f.length, f.push([
          d[M],
          r[v],
          b[p]
        ]));
        const S = f.length, E = [];
        ue = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
        const I = [];
        for (let p = 0; p < b.length - 1; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length; M++) x(M, v) || I.push({
          el: [
            g[`${M},${v},${p}`],
            g[`${M},${v},${p + 1}`]
          ],
          floor: p
        });
        for (const { el: [p, v], floor: M } of I) {
          if (u <= 1) {
            ue.add(E.length), Ae.set(E.length, M), E.push([
              p,
              v
            ]);
            continue;
          }
          const k = f[p], P = f[v];
          let A = p;
          for (let T = 1; T < u; T++) {
            const O = T / u, q = f.length;
            f.push([
              k[0] + (P[0] - k[0]) * O,
              k[1] + (P[1] - k[1]) * O,
              k[2] + (P[2] - k[2]) * O
            ]), ue.add(E.length), Ae.set(E.length, M), E.push([
              A,
              q
            ]), A = q;
          }
          ue.add(E.length), Ae.set(E.length, M), E.push([
            A,
            v
          ]);
        }
        Je = /* @__PURE__ */ new Map();
        const F = [];
        for (let p = 1; p < b.length; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length - 1; M++) F.push({
          el: [
            g[`${M},${v},${p}`],
            g[`${M + 1},${v},${p}`]
          ],
          floor: p - 1,
          dir: "x",
          bay: M
        });
        for (let p = 1; p < b.length; p++) for (let v = 0; v < d.length; v++) for (let M = 0; M < r.length - 1; M++) F.push({
          el: [
            g[`${v},${M},${p}`],
            g[`${v},${M + 1},${p}`]
          ],
          floor: p - 1,
          dir: "y",
          bay: M
        });
        for (const { el: [p, v], floor: M, dir: k, bay: P } of F) {
          const A = f[p], T = f[v];
          let O = p;
          for (let Z = 1; Z < l; Z++) {
            const K = Z / l, re = f.length;
            f.push([
              A[0] + (T[0] - A[0]) * K,
              A[1] + (T[1] - A[1]) * K,
              A[2] + (T[2] - A[2]) * K
            ]);
            const ae = E.length;
            Te.add(ae), Ae.set(ae, M), Je.set(ae, {
              dir: k,
              bay: P
            }), E.push([
              O,
              re
            ]), O = re;
          }
          const q = E.length;
          Te.add(q), Ae.set(q, M), Je.set(q, {
            dir: k,
            bay: P
          }), E.push([
            O,
            v
          ]);
        }
        if (nt = /* @__PURE__ */ new Set(), Re && Ze > 0) {
          const p = (v, M, k) => {
            for (let A = 0; A < f.length; A++) if (Math.abs(f[A][0] - v) < 1e-6 && Math.abs(f[A][1] - M) < 1e-6 && Math.abs(f[A][2] - k) < 1e-6) return A;
            const P = f.length;
            return f.push([
              v,
              M,
              k
            ]), P;
          };
          for (let v = 1; v < b.length; v++) if (ct === "x") for (let M = 0; M < r.length - 1; M++) {
            const k = r[M], P = r[M + 1];
            for (let A = 1; A <= Ze; A++) {
              const T = k + A / (Ze + 1) * (P - k), O = [];
              for (let q = 0; q < d.length; q++) O.push(p(d[q], T, b[v]));
              for (let q = 0; q < d.length - 1; q++) {
                const Z = E.length;
                nt.add(Z), Te.add(Z), Ae.set(Z, v - 1), Je.set(Z, {
                  dir: "x",
                  bay: q
                }), E.push([
                  O[q],
                  O[q + 1]
                ]);
              }
            }
          }
          else for (let M = 0; M < d.length - 1; M++) {
            const k = d[M], P = d[M + 1];
            for (let A = 1; A <= Ze; A++) {
              const T = k + A / (Ze + 1) * (P - k), O = [];
              for (let q = 0; q < r.length; q++) O.push(p(T, r[q], b[v]));
              for (let q = 0; q < r.length - 1; q++) {
                const Z = E.length;
                nt.add(Z), Te.add(Z), Ae.set(Z, v - 1), Je.set(Z, {
                  dir: "y",
                  bay: q
                }), E.push([
                  O[q],
                  O[q + 1]
                ]);
              }
            }
          }
        }
        const y = /* @__PURE__ */ new Map(), m = tt();
        for (let p = 0; p < r.length; p++) for (let v = 0; v < d.length; v++) x(v, p) || y.set(g[`${v},${p},0`], [
          ...m
        ]);
        Be = /* @__PURE__ */ new Set();
        for (const p of je) {
          const v = b.length - 1, M = p.floors.includes(-1) ? Array.from({
            length: v
          }, (k, P) => P) : p.floors.filter((k) => k < v);
          for (const k of M) {
            let P, A, T, O;
            p.dir === "x" ? (P = p.bay, T = p.bay + 1, A = p.axisIdx, O = p.axisIdx) : (P = p.axisIdx, T = p.axisIdx, A = p.bay, O = p.bay + 1);
            const q = g[`${P},${A},${k}`], Z = g[`${P},${A},${k + 1}`];
            let K, re;
            if (p.dir === "x" ? (K = g[`${T},${O},${k}`], re = g[`${T},${O},${k + 1}`]) : (K = g[`${T},${O},${k}`], re = g[`${T},${O},${k + 1}`]), q === void 0 || K === void 0 || Z === void 0 || re === void 0) continue;
            const ae = He, Q = we, ce = f[q], Me = f[K], Pe = f[Z], Ne = f[re], H = [];
            for (let de = 0; de <= Q; de++) {
              const ie = [], te = de / Q;
              for (let J = 0; J <= ae; J++) {
                const pe = J / ae, Ee = (1 - te) * ((1 - pe) * ce[0] + pe * Me[0]) + te * ((1 - pe) * Pe[0] + pe * Ne[0]), ne = (1 - te) * ((1 - pe) * ce[1] + pe * Me[1]) + te * ((1 - pe) * Pe[1] + pe * Ne[1]), Ce = (1 - te) * ((1 - pe) * ce[2] + pe * Me[2]) + te * ((1 - pe) * Pe[2] + pe * Ne[2]);
                de === 0 && J === 0 ? ie.push(q) : de === 0 && J === ae ? ie.push(K) : de === Q && J === 0 ? ie.push(Z) : de === Q && J === ae ? ie.push(re) : (ie.push(f.length), f.push([
                  Ee,
                  ne,
                  Ce
                ]));
              }
              H.push(ie);
            }
            for (let de = 0; de < Q; de++) for (let ie = 0; ie < ae; ie++) {
              const te = H[de][ie], J = H[de][ie + 1], pe = H[de + 1][ie + 1], Ee = H[de + 1][ie], ne = E.length;
              Be.add(ne), Ae.set(ne, k), E.push([
                te,
                J,
                pe,
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
        if (zt = /* @__PURE__ */ new Set(), ut) {
          const p = l, v = l, M = /* @__PURE__ */ new Map(), k = (P, A, T) => `${Math.round(P * 1e4)},${Math.round(A * 1e4)},${Math.round(T * 1e4)}`;
          for (let P = 0; P < f.length; P++) M.set(k(f[P][0], f[P][1], f[P][2]), P);
          for (let P = 1; P < b.length; P++) {
            const A = b[P];
            for (let T = 0; T < d.length - 1; T++) for (let O = 0; O < r.length - 1; O++) {
              const q = d[T], Z = d[T + 1], K = r[O], re = r[O + 1], ae = [];
              for (let Q = 0; Q <= v; Q++) {
                const ce = [];
                for (let Me = 0; Me <= p; Me++) {
                  const Pe = q + Me / p * (Z - q), Ne = K + Q / v * (re - K);
                  if (Q === 0 && Me === 0) ce.push(g[`${T},${O},${P}`]);
                  else if (Q === 0 && Me === p) ce.push(g[`${T + 1},${O},${P}`]);
                  else if (Q === v && Me === 0) ce.push(g[`${T},${O + 1},${P}`]);
                  else if (Q === v && Me === p) ce.push(g[`${T + 1},${O + 1},${P}`]);
                  else {
                    const H = k(Pe, Ne, A), de = M.get(H);
                    if (de !== void 0) ce.push(de);
                    else {
                      const ie = f.length;
                      f.push([
                        Pe,
                        Ne,
                        A
                      ]), M.set(H, ie), ce.push(ie);
                    }
                  }
                }
                ae.push(ce);
              }
              for (let Q = 0; Q < v; Q++) for (let ce = 0; ce < p; ce++) {
                const Me = ae[Q][ce], Pe = ae[Q][ce + 1], Ne = ae[Q + 1][ce + 1], H = ae[Q + 1][ce], de = E.length;
                zt.add(de), Ae.set(de, P - 1), E.push([
                  Me,
                  Pe,
                  Ne,
                  H
                ]);
              }
            }
          }
        }
        if (Lt && et) {
          const p = et === "all" || et === "x" || et === "perimeter", v = et === "all" || et === "y" || et === "perimeter", M = b.length - 1;
          for (let k = 0; k < M; k++) {
            if (p) for (let P = 0; P < r.length; P++) {
              if (et === "perimeter" && P !== 0 && P !== r.length - 1) continue;
              const A = Math.floor((d.length - 1) / 2);
              for (let T = 0; T < d.length - 1; T++) {
                if (et === "perimeter" && T !== A || x(T, P) || x(T + 1, P)) continue;
                const O = g[`${T},${P},${k}`], q = g[`${T + 1},${P},${k + 1}`], Z = g[`${T + 1},${P},${k}`], K = g[`${T},${P},${k + 1}`];
                O !== void 0 && q !== void 0 && (E.push([
                  O,
                  q
                ]), Ae.set(E.length - 1, k)), Z !== void 0 && K !== void 0 && (E.push([
                  Z,
                  K
                ]), Ae.set(E.length - 1, k));
              }
            }
            if (v) for (let P = 0; P < d.length; P++) {
              if (et === "perimeter" && P !== 0 && P !== d.length - 1) continue;
              const A = Math.floor((r.length - 1) / 2);
              for (let T = 0; T < r.length - 1; T++) {
                if (et === "perimeter" && T !== A || x(P, T) || x(P, T + 1)) continue;
                const O = g[`${P},${T},${k}`], q = g[`${P},${T + 1},${k + 1}`], Z = g[`${P},${T + 1},${k}`], K = g[`${P},${T},${k + 1}`];
                O !== void 0 && q !== void 0 && (E.push([
                  O,
                  q
                ]), Ae.set(E.length - 1, k)), Z !== void 0 && K !== void 0 && (E.push([
                  Z,
                  K
                ]), Ae.set(E.length - 1, k));
              }
            }
          }
        }
        return t.nodes.val = f, t.elements.val = E, t.nodeInputs && (t.nodeInputs.val = {
          supports: y
        }), Fe = [
          ...d
        ], qe = [
          ...r
        ], Ke = b[b.length - 1] || 0, setTimeout(() => {
          yt(), Oo(d, r), yn(), $n();
        }, 50), Ge(), {
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
          for (let g = 1; g < s; g++) {
            const S = e / s * g;
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
        const b = /* @__PURE__ */ new Map(), $ = tt();
        for (let w = 0; w < r; w++) b.set(d[w][0], [
          ...$
        ]), b.set(d[w][1], [
          ...$
        ]);
        return t.nodes.val = a, t.elements.val = i, t.nodeInputs && (t.nodeInputs.val = {
          supports: b
        }), Ge(), {
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
            We.clear(), Ve("truss"), Gn();
            break;
          }
          case "beams": {
            We.clear(), Ve("beams"), Jn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            We.clear(), Ve("3d"), Vn();
            break;
          }
          case "portico": {
            Ve("frame"), ve();
            break;
          }
          case "edificio": {
            Ve("edificio"), Ie.colMat = 0, Ie.vigaMat = 0, Ie.colShape = 0, je = [], ut = false, Re = false, Lt = false, ve();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ve("edificio"), Ie.colMat = 1, Ie.vigaMat = 1, Ie.steelColType = 0, Ie.steelVigaType = 0, je = [], Re = true, Ze = 2;
            const o = ee.reduce((l, s) => l + s, 0) / ee.length, n = le.reduce((l, s) => l + s, 0) / le.length;
            ct = o >= n ? "y" : "x", ut = true, xt = 0.08, Lt = false, ve();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Ve("edificio"), Ie.colMat = 1, Ie.vigaMat = 1, Ie.steelColType = 0, Ie.steelVigaType = 0, je = [], Re = true, Ze = 2;
            const o = ee.reduce((l, s) => l + s, 0) / ee.length, n = le.reduce((l, s) => l + s, 0) / le.length;
            ct = o >= n ? "y" : "x", ut = true, xt = 0.08, Lt = true, et = "perimeter", ve();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ve("edificio"), Ie.colMat = 0, Ie.vigaMat = 0, Ie.colShape = 0, Re = false;
            const o = Math.round(((_a2 = oe.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = oe.nVanosY) == null ? void 0 : _b.val) ?? 2);
            je = [
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
            ], ut = true, xt = 0.15, ve();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ve("edificio"), Ie.colMat = 2, Ie.vigaMat = 0, Re = false;
            const o = Math.round(((_c = oe.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = oe.nVanosY) == null ? void 0 : _d.val) ?? 2);
            je = [
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
            ], ut = true, xt = 0.12, ve();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ve("edificio"), oe.nPisos && (oe.nPisos.val = 1), oe.hPiso && (oe.hPiso.val = 4.5), oe.nVanosX && (oe.nVanosX.val = 3), oe.nVanosY && (oe.nVanosY.val = 2), oe.nSubViga && (oe.nSubViga.val = 3), ee = [
              6,
              6,
              6
            ], le = [
              5,
              5
            ], Ie.colMat = 1, Ie.vigaMat = 1, Ie.steelColType = 0, Ie.steelVigaType = 0, je = [], Re = true, Ze = 2, ct = ee[0] >= le[0] ? "y" : "x", ut = true, xt = 0.08, Pt = 3, Nt = 3, ve();
            break;
          }
          case "galpon": {
            Ve("galpon"), ve();
            break;
          }
          case "barra": {
            Ve("barra"), ve();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            We.clear(), Ve("placa-3q"), Xn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            We.clear(), Ve("placa-q4"), Kn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            We.clear(), Ve("losa-rect"), Un();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            We.clear(), Ve("losa-plana"), Zn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            We.clear(), Ve("viga-alta"), Qn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            We.clear(), Ve("muro-contencion"), es();
            break;
          }
          case "zapata":
          case "footing": {
            We.clear(), Ve("zapata"), ts();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            We.clear(), Ve("placa-orificios"), os();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            We.clear(), Ve("col-placa"), ns();
            break;
          }
          case "talud":
          case "slope": {
            We.clear(), Ve("talud"), ss();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            We.clear(), Ve("eiffel"), ys();
            break;
          }
          case "arco":
          case "arco-gateway": {
            We.clear(), Ve("arco"), $s();
            break;
          }
          case "puente":
          case "puente-colgante": {
            We.clear(), Ve("puente"), ws();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            We.clear(), Ve("twisted"), Ms();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            We.clear(), Ve("burj"), Ss();
            break;
          }
          case "opera":
          case "sydney-opera": {
            We.clear(), Ve("opera"), Es();
            break;
          }
          case "diagrid":
          case "gherkin": {
            We.clear(), Ve("diagrid"), Is();
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
        const b = performance.now(), $ = qn({
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
        const g = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((I, F) => {
          g.set(F, [
            0,
            0,
            I.w,
            I.bx,
            I.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: g
        });
        const S = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((I, F) => {
          (I.x < 1e-10 || I.x > e - 1e-10 || I.y < 1e-10 || I.y > o - 1e-10) && S.set(F, [
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
          x.forEach((F, y) => {
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
          const I = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
          $.elementResults.forEach((m, p) => {
            I.set(p, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), F.set(p, [
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
            bendingYY: F,
            bendingXY: y
          };
        }
        return setTimeout(() => yt(), 50), Ge(), $;
      },
      set(e, o) {
        oe[e] ? (oe[e].val = o, console.log(`${e} = ${o}`), Gt(), ve()) : ot[e] ? (ot[e].val = o, console.log(`${e} = ${o}`), Gt(), ve()) : console.error(`Par\xE1metro "${e}" no encontrado. Disponibles: ${Object.keys({
          ...oe,
          ...ot
        }).join(", ")}`);
      },
      get(e) {
        if (!e) {
          const o = {};
          for (const l in oe) o[l] = oe[l].val;
          for (const l in ot) o[l] = ot[l].val;
          o.plateTheory = Ct, o.supportType = St;
          const n = Uo()[L];
          return n && n[St] && (o.supportLabel = n[St].label), console.table(o), o;
        }
        if (oe[e]) return oe[e].val;
        if (ot[e]) return ot[e].val;
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
        }[e.toLowerCase()] || 3), Ct = e, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Ct] || Ct}`), L.includes("placa") && (Gt(), ve());
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
        St = e, St >= o.length && (St = 0), console.log(`Apoyo: ${o[St].label} \u2192 DOFs: [${o[St].dofs.map((n) => n ? "1" : "0").join(",")}]`), Gt(), ve();
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
        e && (h = e), o && (_ = o), z = xo(h, _);
        const n = ye.querySelector("#cad3d-force-unit"), l = ye.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), l && (l.textContent = _), L && Ve(L), console.log(`Unidades: ${z.label} | E=${z.E.toExponential(3)} ${z.stress}`), z.id;
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
    let ot = {};
    function Ve(e) {
      var _a2, _b;
      L = e, As.val = true, St = 0, Le && bn(), oe = {};
      const o = Wn()[e];
      if (o) for (const l of o) oe[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      ot = {};
      const n = Yn()[e];
      if (n) for (const l of n) ot[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (e === "edificio") {
        const l = Math.round(((_a2 = oe.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = oe.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ee = Array(l).fill(z.defaultSpan), le = Array(s).fill(z.defaultSpan * 0.8);
      }
      Gt(), setTimeout(() => {
        Ds(), ve();
      }, 50);
    }
    function W(e) {
      var _a2, _b;
      return ((_a2 = oe[e]) == null ? void 0 : _a2.val) ?? ((_b = ot[e]) == null ? void 0 : _b.val) ?? 0;
    }
    function ve() {
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
          const o = Math.round(W("nVanos")), n = W("spanV"), l = Math.round(W("nPisos")), s = W("hPiso");
          We.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(W("nPisos")), n = W("hPiso"), l = W("Lvix") || 0, s = W("Lvdx") || 0, c = W("Lviy") || 0, a = W("Lvdy") || 0, i = Math.max(1, Math.round(W("nSubViga") || 3)), u = Math.max(1, Math.round(W("nSubCol") || 1));
          We.building([
            ...ee
          ], [
            ...le
          ], Array(o).fill(n), i, l, s, c, a, u);
          break;
        }
        case "galpon":
          We.galpon(W("span"), W("length"), W("height"), W("archRise"), Math.round(W("xDiv")), Math.round(W("yDiv")));
          break;
        case "barra":
          qs();
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
        if (V.size > 0 || j.size > 0 || D) {
          const o = t.elements.val, n = o.filter((l, s) => !(V.has(s) || j.has(s) || D && !G.has(s)));
          n.length !== o.length && (t.elements.val = n);
        }
        setTimeout(() => {
          oo(), gn();
        }, 30);
      }
    }
    function Gn() {
      const e = W("span"), o = Math.round(W("divisions")), n = W("height"), l = e / o, s = [], c = [];
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
      ]), u = (W("CM") ?? 0) + (W("CV") ?? 0), d = /* @__PURE__ */ new Map();
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
      }), Ge();
    }
    function Jn() {
      const e = W("width"), o = W("height"), n = W("Ex") ?? 0, l = (W("CM") ?? 0) + (W("CV") ?? 0), s = Math.max(1, Math.round(W("nSub") || 4)), c = [
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
      }), Ge();
    }
    function Vn() {
      const e = W("dx"), o = W("dy"), n = W("dz"), l = Math.round(W("stories")), s = Math.max(1, Math.round(W("nSub") || 3)), c = [];
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
      for (let f = 0; f < l; f++) for (let g = 0; g < 4; g++) u.push([
        f * 4 + g,
        (f + 1) * 4 + g
      ]);
      for (let f = 0; f < l; f++) {
        const g = f * 4;
        u.push([
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
        const S = c[f], E = c[g];
        let I = f;
        for (let F = 1; F < s; F++) {
          const y = F / s, m = i.length;
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
          g
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
      const b = W("Ex") ?? 0, $ = (W("CM") ?? 0) + (W("CV") ?? 0), w = a - 2, x = /* @__PURE__ */ new Map();
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
      }), Ge();
    }
    function qs() {
      const e = W("L"), o = Math.round(W("nElem")), n = W("F"), l = e / o, s = [], c = [];
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
      }), Ge();
    }
    function Xn() {
      const e = W("Lx") || 15, o = W("Ly") || 10, n = W("meshSize") || 0.5, l = W("q") || -3, s = W("t") || 1, c = W("E") || 3e7, a = W("nu") || 0.3, i = c / (2 * (1 + a)), u = Ct === 1 ? "Membrana" : Ct === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: r, boundaryIndices: b } = eo({
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
      }), $ = e * o, w = l * $ / d.length, x = new Map(b.map((g) => [
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
      t.nodes.val = d, t.elements.val = r, t.nodeInputs && (t.nodeInputs.val = {
        supports: x,
        loads: f
      }), t.elementInputs && (t.elementInputs.val = {
        elasticities: new Map(r.map((g, S) => [
          S,
          c
        ])),
        elasticitiesOrthogonal: new Map(r.map((g, S) => [
          S,
          c
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
        const g = Ht(d, r, t.nodeInputs.val, t.elementInputs.val);
        g && t.deformOutputs && (t.deformOutputs.val = g);
        const S = Ao(d, r, t.elementInputs.val, g);
        S && t.analyzeOutputs && (t.analyzeOutputs.val = S), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${r.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Kn() {
      const e = W("Lx") || 10, o = W("Ly") || 10, n = Math.round(W("nx") || 16), l = Math.round(W("ny") || 16), s = W("t") || 0.2, c = W("q") || -10, a = W("E") || 3e7, i = W("nu") || 0.3, u = St === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[Ct] ?? 0;
      return We.plateQ4(e, o, n, l, u, c, s, a, i, r);
    }
    function Un() {
      const e = W("a") || 6, o = W("b") || 4, n = Math.round(W("nx") || 12), l = Math.round(W("ny") || 8), s = W("t") || 0.1, c = W("q") || -10, a = W("E") || 35e6, i = W("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[Ct] ?? 0, r = We.plateQ4(e, o, n, l, "simply-supported", c, s, a, i, d), b = a * s * s * s / (12 * (1 - i * i));
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
      const e = W("t") || 0.2, o = W("q") || -10, n = W("E") || 35e6, l = W("nu") || 0.2, s = W("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = c.reduce((A, T) => A + T, 0), u = a.reduce((A, T) => A + T, 0), d = [
        0
      ];
      for (const A of c) d.push(d[d.length - 1] + A);
      const r = [
        0
      ];
      for (const A of a) r.push(r[r.length - 1] + A);
      const b = Math.max(2, Math.round(i / s)), $ = Math.max(2, Math.round(u / s)), w = i / b, x = u / $, f = [];
      for (let A = 0; A <= $; A++) for (let T = 0; T <= b; T++) f.push([
        T * w,
        A * x
      ]);
      const g = [], S = /* @__PURE__ */ new Set();
      for (const A of d) for (const T of r) {
        let O = 1 / 0, q = 0;
        for (let Z = 0; Z < f.length; Z++) {
          const K = Math.hypot(f[Z][0] - A, f[Z][1] - T);
          K < O && (O = K, q = Z);
        }
        S.has(q) || (S.add(q), g.push({
          node: q,
          dof: 0,
          k: 1e15
        }));
      }
      const I = {
        1: 2,
        2: 1,
        3: 0
      }[Ct] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][I]}]: ${i}\xD7${u}m, ${b}\xD7${$} elem, ${S.size} columnas`);
      const F = performance.now(), y = qn({
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
        springs: g
      }), m = performance.now() - F;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${y.maxW.toExponential(4)}`);
      const p = y.nodeResults.map((A) => [
        A.x,
        A.y,
        0
      ]), v = y.elementResults.map((A) => [
        ...A.nodes
      ]);
      t.nodes.val = p, t.elements.val = v;
      const M = /* @__PURE__ */ new Map();
      y.nodeResults.forEach((A, T) => {
        M.set(T, [
          0,
          0,
          A.w,
          A.bx,
          A.by,
          0
        ]);
      }), t.deformOutputs && (t.deformOutputs.val = {
        deformations: M
      });
      const k = /* @__PURE__ */ new Map();
      for (const A of S) k.set(A, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const P = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const A = o * i * u / p.length;
        p.forEach((T, O) => {
          k.has(O) || P.set(O, [
            0,
            0,
            A,
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
        const A = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
        y.elementResults.forEach((q, Z) => {
          A.set(Z, [
            q.Mxx,
            q.Mxx,
            q.Mxx
          ]), T.set(Z, [
            q.Myy,
            q.Myy,
            q.Myy
          ]), O.set(Z, [
            q.Mxy,
            q.Mxy,
            q.Mxy
          ]);
        }), t.analyzeOutputs.val = {
          bendingXX: A,
          bendingYY: T,
          bendingXY: O
        };
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Qn() {
      const e = W("L") || 4, o = W("H") || 2, n = W("t") || 0.1, l = W("E") || 2e7, s = W("nu") || 0.2, c = l / (2 * (1 + s)), a = W("q") || -100, i = W("b") || 0.8, u = W("meshSize") || 0.2, { nodes: d, elements: r, boundaryIndices: b } = eo({
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
      const f = (e - i) / 2, g = f + i, S = [];
      for (let m = 0; m < $.length; m++) if (Math.abs($[m][1] - o) < 1e-6) {
        const p = $[m][0];
        p >= f - 1e-6 && p <= g + 1e-6 && S.push(m);
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
      const F = {
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
        const m = Ht($, r, y, F), p = Ao($, r, F, m), v = $.map((k) => [
          k[0],
          0,
          k[1]
        ]);
        if (t.nodes.val = v, t.elements.val = r, m && m.deformations) {
          const k = /* @__PURE__ */ new Map();
          m.deformations.forEach((P, A) => {
            k.set(A, [
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
          x.forEach((A, T) => k.set(T, A));
          const P = /* @__PURE__ */ new Map();
          I.forEach((A, T) => P.set(T, [
            A[0],
            A[2],
            A[1],
            A[3],
            A[5],
            A[4]
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
      setTimeout(() => yt(), 50), Ge();
    }
    function es() {
      const e = W("H") || 4, o = W("B") || 3, n = W("tw") || 0.3, l = W("tb") || 0.4, s = W("meshSize") || 0.2, c = W("E") || 25e6, a = W("nu") || 0.2, i = c / (2 * (1 + a)), u = W("gamma") || 18, d = W("Ka") || 0.33, r = W("Es") || 5e4, b = W("nus") || 0.3, $ = r / (2 * (1 + b)), w = W("kn") || 1e6, x = W("ks") || 1e4, f = W("gammaW") || 9.81, g = W("Hw") || 3.5, S = W("qs") || 0, E = St, I = o * 0.3, F = o * 0.7, y = [
        [
          -I,
          0,
          0
        ],
        [
          F,
          0,
          0
        ],
        [
          F,
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
        const T = eo({
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
        for (let q = 0; q < m.length; q++) Math.abs(m[q][1]) < 1e-6 && v.set(q, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const O = [];
        for (let q = 0; q < m.length; q++) {
          const Z = m[q][0], K = m[q][1];
          Math.abs(Z - n) < s * 0.6 && K >= l - 1e-6 && O.push({
            idx: q,
            y: K
          });
        }
        O.sort((q, Z) => q.y - Z.y);
        for (let q = 0; q < O.length; q++) {
          const { idx: Z, y: K } = O[q], re = l + e - K, ae = d * u * re + d * S;
          let Q = s;
          q > 0 && q < O.length - 1 ? Q = (O[q + 1].y - O[q - 1].y) / 2 : q === 0 && O.length > 1 ? Q = (O[1].y - O[0].y) / 2 : q === O.length - 1 && O.length > 1 && (Q = (O[q].y - O[q - 1].y) / 2);
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
          elasticities: new Map(p.map((q, Z) => [
            Z,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((q, Z) => [
            Z,
            c
          ])),
          thicknesses: new Map(p.map((q, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(p.map((q, Z) => [
            Z,
            a
          ])),
          shearModuli: new Map(p.map((q, Z) => [
            Z,
            i
          ]))
        };
      } else if (E === 1 || E === 2) {
        const T = F, O = l + e;
        if (E === 2) {
          const q = [
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
          const re = eo({
            points: [
              ...q,
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
            const Ce = m[ne][0], De = m[ne][1];
            Math.abs(Ce - n) < ae && De >= l - ae && Q.push(ne);
          }
          Q.sort((ne, Ce) => m[ne][1] - m[Ce][1]);
          const ce = [
            Q[0]
          ];
          for (let ne = 1; ne < Q.length; ne++) {
            const Ce = m[Q[ne]][1] - m[ce[ce.length - 1]][1];
            Math.abs(Ce) > s * 0.05 && ce.push(Q[ne]);
          }
          Q.length = 0, Q.push(...ce);
          const Me = /* @__PURE__ */ new Map();
          for (const ne of Q) {
            const Ce = m.length;
            m.push([
              m[ne][0],
              m[ne][1],
              m[ne][2]
            ]), Me.set(ne, Ce);
          }
          const Pe = p.length, Ne = [];
          for (let ne = 0; ne < Pe; ne++) {
            const Ce = p[ne], De = (m[Ce[0]][0] + m[Ce[1]][0] + m[Ce[2]][0]) / 3, rt = (m[Ce[0]][1] + m[Ce[1]][1] + m[Ce[2]][1]) / 3, gt = De >= -I && De <= F && rt >= 0 && rt <= l, zo = De >= 0 && De <= n && rt >= l && rt <= l + e, ro = gt || zo;
            if (Ne.push(!ro), !ro) for (let Kt = 0; Kt < Ce.length; Kt++) {
              const Zt = Me.get(Ce[Kt]);
              Zt !== void 0 && (Ce[Kt] = Zt);
            }
          }
          const H = p.length;
          for (let ne = 0; ne < Q.length - 1; ne++) {
            const Ce = Q[ne], De = Q[ne + 1], rt = Me.get(Ce), gt = Me.get(De);
            p.push([
              De,
              Ce,
              rt,
              gt
            ]);
          }
          const de = p.length - H, ie = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let ne = 0; ne < Pe; ne++) Ne[ne] ? (ie.set(ne, r), te.set(ne, r), pe.set(ne, b), Ee.set(ne, $), J.set(ne, 1)) : (ie.set(ne, c), te.set(ne, c), pe.set(ne, a), Ee.set(ne, i), J.set(ne, 1));
          for (let ne = H; ne < p.length; ne++) ie.set(ne, w), te.set(ne, 0), pe.set(ne, 0), Ee.set(ne, x), J.set(ne, 0);
          k = {
            elasticities: ie,
            elasticitiesOrthogonal: te,
            thicknesses: J,
            poissonsRatios: pe,
            shearModuli: Ee
          };
          for (let ne = 0; ne < m.length; ne++) {
            const Ce = m[ne][0], De = m[ne][1];
            Math.abs(De) < 1e-6 ? v.set(ne, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ce - T) < s * 0.1 && v.set(ne, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ne = 0; ne < Pe; ne++) {
            if (!Ne[ne]) continue;
            const Ce = p[ne], De = m[Ce[0]], rt = m[Ce[1]], gt = m[Ce[2]], zo = Math.abs((rt[0] - De[0]) * (gt[1] - De[1]) - (gt[0] - De[0]) * (rt[1] - De[1])) / 2, ro = -u * zo / 3;
            for (const Kt of Ce) {
              const Zt = M.get(Kt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Zt[1] += ro, M.set(Kt, Zt);
            }
          }
          if (S > 0) {
            const ne = [];
            for (let Ce = 0; Ce < m.length; Ce++) {
              const De = m[Ce][0], rt = m[Ce][1];
              Math.abs(rt - O) < s * 0.1 && De > n - 1e-6 && ne.push({
                idx: Ce,
                x: De
              });
            }
            ne.sort((Ce, De) => Ce.x - De.x);
            for (let Ce = 0; Ce < ne.length; Ce++) {
              let De = s;
              Ce > 0 && Ce < ne.length - 1 ? De = (ne[Ce + 1].x - ne[Ce - 1].x) / 2 : Ce === 0 && ne.length > 1 ? De = (ne[1].x - ne[0].x) / 2 : Ce === ne.length - 1 && ne.length > 1 && (De = (ne[Ce].x - ne[Ce - 1].x) / 2);
              const rt = -S * De, gt = M.get(ne[Ce].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              gt[1] += rt, M.set(ne[Ce].idx, gt);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${de} elem interfaz, kn=${w}, ks=${x}`);
        } else {
          const q = [
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
          ], K = eo({
            points: [
              ...q,
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
            const de = (m[H[0]][0] + m[H[1]][0] + m[H[2]][0]) / 3, ie = (m[H[0]][1] + m[H[1]][1] + m[H[2]][1]) / 3, te = de >= -I && de <= F && ie >= 0 && ie <= l, J = de >= 0 && de <= n && ie >= l && ie <= l + e;
            return te || J;
          }, ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Ne = [];
          for (let H = 0; H < p.length; H++) {
            const de = re(p[H]);
            Ne.push(!de), de ? (ae.set(H, c), Q.set(H, c), Me.set(H, a), Pe.set(H, i), ce.set(H, 1)) : (ae.set(H, r), Q.set(H, r), Me.set(H, b), Pe.set(H, $), ce.set(H, 1));
          }
          k = {
            elasticities: ae,
            elasticitiesOrthogonal: Q,
            thicknesses: ce,
            poissonsRatios: Me,
            shearModuli: Pe
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
            if (!Ne[H]) continue;
            const de = p[H], ie = m[de[0]], te = m[de[1]], J = m[de[2]], pe = Math.abs((te[0] - ie[0]) * (J[1] - ie[1]) - (J[0] - ie[0]) * (te[1] - ie[1])) / 2, Ee = -u * pe / 3;
            for (const ne of de) {
              const Ce = M.get(ne) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ce[1] += Ee, M.set(ne, Ce);
            }
          }
          if (S > 0) {
            const H = [];
            for (let de = 0; de < m.length; de++) {
              const ie = m[de][0], te = m[de][1];
              Math.abs(te - O) < s * 0.1 && ie > n - 1e-6 && H.push({
                idx: de,
                x: ie
              });
            }
            H.sort((de, ie) => de.x - ie.x);
            for (let de = 0; de < H.length; de++) {
              let ie = s;
              de > 0 && de < H.length - 1 ? ie = (H[de + 1].x - H[de - 1].x) / 2 : de === 0 && H.length > 1 ? ie = (H[1].x - H[0].x) / 2 : de === H.length - 1 && H.length > 1 && (ie = (H[de].x - H[de - 1].x) / 2);
              const te = -S * ie, J = M.get(H[de].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              J[1] += te, M.set(H[de].idx, J);
            }
          }
        }
      }
      if (E === 3) {
        const T = eo({
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
        const O = l + e, q = Math.min(g, e), Z = O - q, K = [];
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
          const Me = Math.min(ce, q), Pe = f * Me;
          let Ne = s;
          re > 0 && re < K.length - 1 ? Ne = (K[re + 1].y - K[re - 1].y) / 2 : re === 0 && K.length > 1 ? Ne = (K[1].y - K[0].y) / 2 : re === K.length - 1 && K.length > 1 && (Ne = (K[re].y - K[re - 1].y) / 2);
          const H = Pe * Ne;
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
      }, A = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const T = Ht(m, p, P, k), O = p.filter((ce) => ce.length === 3), q = {};
        for (const ce of Object.keys(k)) {
          const Me = k[ce];
          if (Me && Me instanceof Map) {
            const Pe = /* @__PURE__ */ new Map();
            let Ne = 0;
            for (let H = 0; H < p.length; H++) p[H].length === 3 && (Me.has(H) && Pe.set(Ne, Me.get(H)), Ne++);
            q[ce] = Pe;
          }
        }
        const Z = Ao(m, O, q, T), K = m.map((ce) => [
          ce[0],
          0,
          ce[1]
        ]);
        if (t.nodes.val = K, t.elements.val = O, T && T.deformations) {
          const ce = /* @__PURE__ */ new Map();
          T.deformations.forEach((Me, Pe) => {
            ce.set(Pe, [
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
        }), console.log(`Muro Contencion [${A[E]}]: ${m.length} nodos, ${p.length} triangulos`), console.log(`  H=${e}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${S}`), E === 1 && console.log(`  Es=${r}, nus=${b}`), E === 2 && console.log(`  Es=${r}, nus=${b}, kn=${w}, ks=${x}`), E === 3 && console.log(`  gammaW=${f}, Hw=${g}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch (T) {
        console.warn("Muro Contencion failed:", T.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function ts() {
      const e = W("Lx") || 2, o = W("Ly") || 2, n = W("t") || 0.5, l = W("colA") || 0.4, s = W("colH") || 1.5, c = Math.round(W("nx") || 8), a = Math.round(W("ny") || 8), i = W("E") || 25e6, u = W("nu") || 0.2, d = W("P") || -500, r = W("Mx") || 0, b = W("My") || 0, $ = W("ks") || 2e4, w = e / c, x = o / a, f = e / 2, g = o / 2, S = l / 2, E = [];
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) {
        const k = v * (c + 1) + M;
        let P = w, A = x;
        (M === 0 || M === c) && (P = w / 2), (v === 0 || v === a) && (A = x / 2), E.push({
          node: k,
          dof: 0,
          k: $ * P * A
        });
      }
      let I = 0;
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) Math.abs(M * w - f) <= S + 1e-6 && Math.abs(v * x - g) <= S + 1e-6 && I++;
      const F = d / Math.max(I, 1), y = [];
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) {
        const k = M * w, P = v * x;
        Math.abs(k - f) <= S + 1e-6 && Math.abs(P - g) <= S + 1e-6 && y.push({
          node: v * (c + 1) + M,
          dof: 0,
          value: F
        });
      }
      if (Math.abs(r) > 1e-6) {
        const v = S > 1e-6 ? S : x, M = r / v;
        for (let k = 0; k <= a; k++) for (let P = 0; P <= c; P++) {
          const A = P * w, T = k * x;
          if (Math.abs(A - f) <= S + 1e-6 && Math.abs(T - g) <= S + 1e-6) {
            const O = T - g;
            if (Math.abs(O) > 1e-6) {
              const q = O > 0 ? 1 : -1;
              y.push({
                node: k * (c + 1) + P,
                dof: 0,
                value: q * M / I * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const v = S > 1e-6 ? S : w, M = b / v;
        for (let k = 0; k <= a; k++) for (let P = 0; P <= c; P++) {
          const A = P * w, T = k * x;
          if (Math.abs(A - f) <= S + 1e-6 && Math.abs(T - g) <= S + 1e-6) {
            const O = A - f;
            if (Math.abs(O) > 1e-6) {
              const q = O > 0 ? 1 : -1;
              y.push({
                node: k * (c + 1) + P,
                dof: 0,
                value: q * M / I * 2
              });
            }
          }
        }
      }
      const p = {
        1: 2,
        2: 1,
        3: 0
      }[Ct] ?? 1;
      console.log(`Zapata: ${e}x${o}m, t=${n}m, ${c}x${a} elem`), console.log(`  col=${l}m, P=${d}, Mx=${r}, My=${b}, ks=${$}`);
      try {
        const v = qn({
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
          g - S,
          0
        ]), M.push([
          f + S,
          g - S,
          0
        ]), M.push([
          f + S,
          g + S,
          0
        ]), M.push([
          f - S,
          g + S,
          0
        ]), M.push([
          f - S,
          g - S,
          s
        ]), M.push([
          f + S,
          g - S,
          s
        ]), M.push([
          f + S,
          g + S,
          s
        ]), M.push([
          f - S,
          g + S,
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
        const A = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((Z, K) => {
          A.set(K, [
            0,
            0,
            Z.w,
            Z.bx,
            Z.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: A
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
        const q = Ue();
        q && (q.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function os() {
      const e = W("Lx") || 0.4, o = W("Ly") || 0.4, n = W("t") || 0.025, l = W("dBolt") || 0.022, s = W("sx") || 0.28, c = W("sy") || 0.28, a = W("colA") || 0.2, i = W("meshSize") || 8e-3, u = W("E") || 2e8, d = W("nu") || 0.3, r = u / (2 * (1 + d)), b = W("P") || -200, $ = Math.round(W("nBolts") || 4), w = e / 2, x = o / 2, f = l / 2, g = a / 2, S = [];
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
      const { nodes: E, elements: I } = eo({
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
      }), F = (A, T) => {
        for (const [O, q] of S) if ((A - O) * (A - O) + (T - q) * (T - q) < f * f) return true;
        return false;
      }, y = I.filter((A) => {
        const T = (E[A[0]][0] + E[A[1]][0] + E[A[2]][0]) / 3, O = (E[A[0]][1] + E[A[1]][1] + E[A[2]][1]) / 3;
        return !F(T, O);
      }), m = E, p = /* @__PURE__ */ new Map();
      for (let A = 0; A < m.length; A++) {
        const T = m[A][0], O = m[A][1];
        for (const [q, Z] of S) {
          const K = Math.sqrt((T - q) * (T - q) + (O - Z) * (O - Z));
          K >= f * 0.7 && K <= f * 1.5 && p.set(A, [
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
      for (let A = 0; A < m.length; A++) {
        const T = m[A][0], O = m[A][1];
        Math.abs(T - w) <= g && Math.abs(O - x) <= g && M++;
      }
      const k = b / Math.max(M, 1);
      for (let A = 0; A < m.length; A++) {
        const T = m[A][0], O = m[A][1];
        if (Math.abs(T - w) <= g && Math.abs(O - x) <= g) {
          const q = v.get(A) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          q[2] += k, v.set(A, q);
        }
      }
      const P = {
        elasticities: new Map(y.map((A, T) => [
          T,
          u
        ])),
        elasticitiesOrthogonal: new Map(y.map((A, T) => [
          T,
          u
        ])),
        thicknesses: new Map(y.map((A, T) => [
          T,
          n
        ])),
        poissonsRatios: new Map(y.map((A, T) => [
          T,
          d
        ])),
        shearModuli: new Map(y.map((A, T) => [
          T,
          r
        ]))
      };
      console.log(`Placa Base: ${e * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${y.length} triangulos, ${m.length} nodos`);
      try {
        const A = Ht(m, y, {
          supports: p,
          loads: v
        }, P), T = Ao(m, y, P, A);
        t.nodes.val = m, t.elements.val = y, A && t.deformOutputs && (t.deformOutputs.val = A), t.nodeInputs && (t.nodeInputs.val = {
          supports: p,
          loads: v
        }), t.elementInputs && (t.elementInputs.val = {}), T && t.analyzeOutputs && (t.analyzeOutputs.val = T);
        let O = 0;
        A && A.deformations && A.deformations.forEach((q) => {
          const Z = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2]);
          O = Math.max(O, Z);
        }), console.log(`  max|u| = ${O.toExponential(4)}`);
      } catch (A) {
        console.warn("Placa Base failed:", A.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function ns() {
      const e = W("colB") || 0.3, o = W("colH") || 0.3, n = W("colT") || 8e-3, l = W("colLen") || 1.5, s = W("Lx") || 0.45, c = W("Ly") || 0.45, a = W("tPlaca") || 0.025, i = W("dBolt") || 0.022, u = W("sx") || 0.32, d = W("sy") || 0.32, r = Math.round(W("nSubColV") || 6), b = Math.round(W("nSubColH") || 4), $ = Math.round(W("nSubPlaca") || 10), w = W("E") || 2e8, x = W("nu") || 0.3, f = w / (2 * (1 + x)), g = W("P") || -300, S = s / 2, E = c / 2, I = i / 2, F = e / 2, y = o / 2, m = [], p = [], v = $, M = s / v, k = c / v, P = (te, J) => J * (v + 1) + te;
      for (let te = 0; te <= v; te++) for (let J = 0; J <= v; J++) m.push([
        J * M,
        te * k,
        0
      ]);
      const A = [
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
      ], T = (te, J) => {
        for (const [pe, Ee] of A) if ((te - pe) * (te - pe) + (J - Ee) * (J - Ee) < I * I) return true;
        return false;
      }, O = p.length;
      for (let te = 0; te < v; te++) for (let J = 0; J < v; J++) {
        const pe = (J + 0.5) * M, Ee = (te + 0.5) * k;
        T(pe, Ee) || p.push([
          P(J, te),
          P(J + 1, te),
          P(J + 1, te + 1),
          P(J, te + 1)
        ]);
      }
      const q = p.length - O, Z = r, K = b, re = [
        [
          S - F,
          E - y
        ],
        [
          S + F,
          E - y
        ],
        [
          S + F,
          E + y
        ],
        [
          S - F,
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
      ], ce = (te, J) => {
        for (let pe = 0; pe < (v + 1) * (v + 1); pe++) if (Math.abs(m[pe][0] - te) < M * 0.3 && Math.abs(m[pe][1] - J) < k * 0.3 && Math.abs(m[pe][2]) < 1e-6) return pe;
        return -1;
      };
      for (const [te, J] of Q) {
        const [pe, Ee] = re[te], [ne, Ce] = re[J], De = [];
        for (let rt = 0; rt <= Z; rt++) {
          const gt = [], zo = rt / Z * l;
          for (let ro = 0; ro <= K; ro++) {
            const Kt = ro / K, Zt = pe + Kt * (ne - pe), Cn = Ee + Kt * (Ce - Ee);
            if (rt === 0) {
              const Qt = ce(Zt, Cn);
              if (Qt >= 0) {
                gt.push(Qt);
                continue;
              }
            }
            let An = -1;
            for (let Qt = 0; Qt < m.length; Qt++) if (Math.abs(m[Qt][0] - Zt) < 1e-6 && Math.abs(m[Qt][1] - Cn) < 1e-6 && Math.abs(m[Qt][2] - zo) < 1e-6) {
              An = Qt;
              break;
            }
            An >= 0 ? gt.push(An) : (gt.push(m.length), m.push([
              Zt,
              Cn,
              zo
            ]));
          }
          De.push(gt);
        }
        for (let rt = 0; rt < Z; rt++) for (let gt = 0; gt < K; gt++) p.push([
          De[rt][gt],
          De[rt][gt + 1],
          De[rt + 1][gt + 1],
          De[rt + 1][gt]
        ]);
      }
      const Me = p.length - ae, Pe = /* @__PURE__ */ new Map();
      for (let te = 0; te < (v + 1) * (v + 1); te++) {
        const J = m[te][0], pe = m[te][1];
        for (const [Ee, ne] of A) {
          const Ce = Math.sqrt((J - Ee) * (J - Ee) + (pe - ne) * (pe - ne));
          Ce >= I * 0.5 && Ce <= I * 2 && Pe.set(te, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Ne = /* @__PURE__ */ new Map(), H = [];
      for (let te = 0; te < m.length; te++) Math.abs(m[te][2] - l) < 1e-6 && H.push(te);
      const de = g / Math.max(H.length, 1);
      for (const te of H) Ne.set(te, [
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
      for (let te = O; te < O + q; te++) ie.elasticities.set(te, w), ie.poissonsRatios.set(te, x), ie.thicknesses.set(te, a), ie.shearModuli.set(te, f);
      for (let te = ae; te < ae + Me; te++) ie.elasticities.set(te, w), ie.poissonsRatios.set(te, x), ie.thicknesses.set(te, n), ie.shearModuli.set(te, f);
      console.log(`Col+Placa 3D: col ${e * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${q} Q4 placa + ${Me} Q4 columna = ${p.length} total`), console.log(`  ${m.length} nodos, P=${g} kN`);
      try {
        const te = Ht(m, p, {
          supports: Pe,
          loads: Ne
        }, ie), J = Ao(m, p, ie, te);
        t.nodes.val = m, t.elements.val = p, te && t.deformOutputs && (t.deformOutputs.val = te), t.nodeInputs && (t.nodeInputs.val = {
          supports: Pe,
          loads: Ne
        }), t.elementInputs && (t.elementInputs.val = ie), J && t.analyzeOutputs && (t.analyzeOutputs.val = J);
        let pe = 0;
        (te == null ? void 0 : te.deformations) && te.deformations.forEach((Ee) => {
          const ne = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          pe = Math.max(pe, ne);
        }), console.log(`  max|u| = ${pe.toExponential(4)}`);
      } catch (te) {
        console.warn("Col+Placa failed:", te.message), t.nodes.val = m, t.elements.val = p, t.nodeInputs && (t.nodeInputs.val = {
          supports: Pe,
          loads: Ne
        });
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function ss() {
      const e = W("H") || 6, o = W("angle") || 45, n = W("bTop") || 3, l = W("bBot") || 3, s = W("meshSize") || 2, c = W("E") || 5e4, a = W("nu") || 0.3, i = W("gamma") || 18, u = W("c") || 15, d = W("phi") || 30, r = W("qs") || 0, b = e / Math.tan(o * Math.PI / 180), $ = l + b + n, w = e, x = [
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
      ], { nodes: f, elements: g } = eo({
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
      const F = e - s * 0.3;
      try {
        const y = S.map((T) => [
          T[0],
          T[1]
        ]), m = g.map((T) => [
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
          surfaceYThreshold: F
        }), v = S.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        t.nodes.val = v, t.elements.val = g;
        const M = /* @__PURE__ */ new Map();
        for (let T = 0; T < p.displacements.length; T++) {
          const [O, q] = p.displacements[T];
          M.set(T, [
            O,
            0,
            q,
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
          const q = Math.sqrt(T * T + O * O);
          P = Math.max(P, q);
        }
        let A = 0;
        for (const T of p.plasticStrain) A = Math.max(A, T);
        console.log(`Talud SRM: ${S.length} nodos, ${g.length} triangulos`), console.log(`  H=${e}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${p.fos.toFixed(3)}`), console.log(`  max|u| = ${P.toExponential(4)}`), console.log(`  max \u03B5_pl = ${A.toExponential(4)}`), p.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : p.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (y) {
        console.warn("Talud SRM failed:", y.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    let Yt = null, mt = null, Ut = null;
    function Fs() {
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
    function dt(e) {
      const o = Fo.find((n) => n.id === _);
      return e / o.toM;
    }
    function pt(e) {
      const o = Fo.find((n) => n.id === _);
      return e * o.toM;
    }
    function fo(e) {
      const o = _n.find((l) => l.id === Y.forceId), n = Fo.find((l) => l.id === Y.lengthId);
      return e / (o.toKN / (n.toM * n.toM));
    }
    function pn(e) {
      const o = _n.find((l) => l.id === Y.forceId), n = Fo.find((l) => l.id === Y.lengthId);
      return e * (o.toKN / (n.toM * n.toM));
    }
    function fn() {
      return Y.label;
    }
    function Ps() {
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
    function Os() {
      const e = fo(20594), o = fo(58840), n = Math.max(1, Math.round((o - e) / 40));
      return [
        Math.round(e),
        Math.round(o),
        n
      ];
    }
    function as(e, o, n, l, s) {
      const c = Ie.steelVigaType, a = c === 0 ? Zo() : Qo();
      if (Ie.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = `b${n}${i}`, r = `h${n}${i}`, b = {};
          b[d] = +dt(u.b).toFixed(2), b[r] = +dt(u.h).toFixed(2), e.addBinding(b, d, {
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
          d && (o[parseInt(d[1])].b = pt(i.value), ve()), r && (o[parseInt(r[1])].h = pt(i.value), ve());
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
          d && (o[parseInt(d[1])].profileIdx = i.value, ve());
        });
      } else if (c === 2) {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = {}, r = `${n}${i}`;
          d[`bf${r}`] = +dt(u.bf ?? 0.2).toFixed(3), d[`h${r}`] = +dt(u.hf ?? 0.4).toFixed(3), d[`tf${r}`] = +dt(u.tf ?? 0.015).toFixed(3), d[`tw${r}`] = +dt(u.tw ?? 0.01).toFixed(3), e.addBinding(d, `bf${r}`, {
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
            u === `bf${r}` && (o[d].bf = pt(i.value), ve()), u === `h${r}` && (o[d].hf = pt(i.value), ve()), u === `tf${r}` && (o[d].tf = pt(i.value), ve()), u === `tw${r}` && (o[d].tw = pt(i.value), ve());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = {}, r = `${n}${i}`;
          d[`bc${r}`] = +dt(u.bc ?? 0.2).toFixed(3), d[`hc${r}`] = +dt(u.hc ?? 0.3).toFixed(3), d[`t${r}`] = +dt(u.t ?? 8e-3).toFixed(3), e.addBinding(d, `bc${r}`, {
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
            u === `bc${r}` && (o[d].bc = pt(i.value), ve()), u === `hc${r}` && (o[d].hc = pt(i.value), ve()), u === `t${r}` && (o[d].t = pt(i.value), ve());
          }
        });
      }
    }
    function wo() {
      var _a2;
      if (mt) {
        try {
          mt.dispose();
        } catch {
        }
        mt = null;
      }
      const e = document.getElementById("sections");
      if (e && (e.innerHTML = ""), L !== "edificio" && L !== "frame") {
        e && (e.style.display = "none");
        return;
      }
      const o = Fs();
      if (!o) return;
      o.style.display = "";
      const n = z, l = Math.round(((_a2 = oe.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Ps(), c = Os(), a = ee.length || 1, i = le.length || 1;
      for (; Ie.perFloor.length < l; ) {
        const m = Ie.perFloor.length > 0 ? JSON.parse(JSON.stringify(Ie.perFloor[Ie.perFloor.length - 1])) : $o(a, i);
        Ie.perFloor.push(m);
      }
      Ie.perFloor.length > l && (Ie.perFloor.length = l);
      for (const m of Ie.perFloor) {
        for (; m.vigasX.length < a; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : Tt());
        for (m.vigasX.length > a && (m.vigasX.length = a); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : Tt());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      mt = new Bo({
        title: `Sections (${n.label})`,
        container: o
      });
      const u = {
        colMat: Ie.colMat
      };
      if (mt.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        Ie.colMat = m.value, wo(), ve();
      }), Ie.colMat === 0) {
        const m = {
          forma: Ie.colShape
        };
        mt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          Ie.colShape = v.value, wo(), ve();
        });
        const p = {
          fc: +fo(Ie.fc).toFixed(1)
        };
        mt.addBinding(p, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${fn()})`
        }), mt.on("change", (v) => {
          var _a3;
          ((_a3 = v.target) == null ? void 0 : _a3.key) === "fc" && (Ie.fc = pn(v.value), ve());
        });
      } else if (Ie.colMat === 1) {
        const m = {
          colType: Ie.steelColType
        };
        mt.addBinding(m, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (p) => {
          Ie.steelColType = p.value, wo(), ve();
        });
      }
      mt.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: Ie.vigaMat
      };
      if (mt.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        Ie.vigaMat = m.value, wo(), ve();
      }), Ie.vigaMat === 1) {
        const m = {
          vigaType: Ie.steelVigaType
        };
        mt.addBinding(m, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (p) => {
          Ie.steelVigaType = p.value, wo(), ve();
        });
      }
      const r = Ie.steelColType === 0 ? Zo() : Qo();
      Ie.steelVigaType === 0 ? Zo() : Qo();
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
      for (let m = 0; m < l; m++) {
        const p = Ie.perFloor[m], v = mt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (Ie.colMat === 0) if (Ie.colShape === 1) {
          const M = {
            dCol: +dt(p.dCol).toFixed(2)
          };
          v.addBinding(M, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (k) => {
            var _a3;
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "dCol" && (p.dCol = pt(k.value), ve());
          });
        } else {
          const M = {
            bCol: +dt(p.bCol).toFixed(2),
            hCol: +dt(p.hCol).toFixed(2)
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
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "bCol" && (p.bCol = pt(k.value), ve()), ((_b = k.target) == null ? void 0 : _b.key) === "hCol" && (p.hCol = pt(k.value), ve());
          });
        }
        else if (Ie.colMat === 1) if (Ie.steelColType <= 1) {
          const M = {
            col: p.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: r
          }).on("change", (k) => {
            p.colProfileIdx = k.value, ve();
          });
        } else if (Ie.steelColType === 2) {
          const M = {
            bf: +dt(p.colBf ?? 0.3).toFixed(3),
            h: +dt(p.colHf ?? 0.3).toFixed(3),
            tf: +dt(p.colTf ?? 0.02).toFixed(3),
            tw: +dt(p.colTw ?? 0.012).toFixed(3)
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
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "bf" && (p.colBf = pt(k.value), ve()), ((_b = k.target) == null ? void 0 : _b.key) === "h" && (p.colHf = pt(k.value), ve()), ((_c = k.target) == null ? void 0 : _c.key) === "tf" && (p.colTf = pt(k.value), ve()), ((_d = k.target) == null ? void 0 : _d.key) === "tw" && (p.colTw = pt(k.value), ve());
          });
        } else {
          const M = {
            bc: +dt(p.colBc ?? 0.3).toFixed(3),
            hc: +dt(p.colHc ?? 0.3).toFixed(3),
            t: +dt(p.colT ?? 0.01).toFixed(3)
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
            ((_a3 = k.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = pt(k.value), ve()), ((_b = k.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = pt(k.value), ve()), ((_c = k.target) == null ? void 0 : _c.key) === "t" && (p.colT = pt(k.value), ve());
          });
        }
        else {
          const M = {
            bc: +dt(p.colBc ?? 0.3).toFixed(3),
            hc: +dt(p.colHc ?? 0.3).toFixed(3),
            t: +dt(p.colT ?? 0.01).toFixed(3),
            Es: +fo(p.colEs ?? 2e8).toFixed(0),
            nuS: p.colNuS ?? 0.3,
            fc: +fo(p.colFc ?? 28e3).toFixed(1),
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
          const k = +fo(1e8).toFixed(0), P = +fo(3e8).toFixed(0), A = Math.max(1, Math.round((P - k) / 200));
          v.addBinding(M, "Es", {
            min: k,
            max: P,
            step: A,
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
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = pt(T.value), ve()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = pt(T.value), ve()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (p.colT = pt(T.value), ve()), ((_d = T.target) == null ? void 0 : _d.key) === "Es" && (p.colEs = pn(T.value), ve()), ((_e2 = T.target) == null ? void 0 : _e2.key) === "nuS" && (p.colNuS = T.value, ve()), ((_f = T.target) == null ? void 0 : _f.key) === "fc" && (p.colFc = pn(T.value), ve()), ((_g = T.target) == null ? void 0 : _g.key) === "nuC" && (p.colNuC = T.value, ve());
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
      mt.addBlade({
        view: "separator"
      });
      const $ = mt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Re,
        direccion: ct === "x" ? 0 : 1,
        cantidad: Ze
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Re = m.value, ve()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (ct = m.value === 0 ? "x" : "y", ve()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Ze = Math.round(m.value), ve());
      }), mt.addBlade({
        view: "separator"
      });
      const x = mt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: ut,
        espesor: +dt(xt).toFixed(3),
        subdivX: Pt,
        subdivY: Nt
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (ut = m.value, ve()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (xt = pt(m.value), ve()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (Pt = Math.round(m.value), ve()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Nt = Math.round(m.value), ve());
      }), mt.addBlade({
        view: "separator"
      });
      const g = mt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +dt(Qe).toFixed(3),
        subdivH: we,
        subdivW: He
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
      }), g.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Qe = pt(m.value), ve()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (we = Math.round(m.value), ve()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (He = Math.round(m.value), ve());
      });
      const E = ee.length || 1, I = le.length || 1, F = E + 1, y = I + 1;
      if (E > 0) {
        const m = g.addFolder({
          title: `Muros dir X (${E} vanos)`,
          expanded: false
        });
        for (let p = 0; p < E; p++) for (let v = 0; v < y; v++) {
          const M = `wx_${p}_${v}`, k = je.some((T) => T.dir === "x" && T.bay === p && T.axisIdx === v), P = {};
          P[M] = k;
          const A = `Vano X${p + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          m.addBinding(P, M, {
            label: A
          }).on("change", (T) => {
            T.value ? je.push({
              dir: "x",
              bay: p,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : je = je.filter((O) => !(O.dir === "x" && O.bay === p && O.axisIdx === v)), ve();
          });
        }
      }
      if (I > 0) {
        const m = g.addFolder({
          title: `Muros dir Y (${I} vanos)`,
          expanded: false
        });
        for (let p = 0; p < I; p++) for (let v = 0; v < F; v++) {
          const M = `wy_${p}_${v}`, k = je.some((T) => T.dir === "y" && T.bay === p && T.axisIdx === v), P = {};
          P[M] = k;
          const A = `Vano Y${p + 1} / Eje X${v + 1}`;
          m.addBinding(P, M, {
            label: A
          }).on("change", (T) => {
            T.value ? je.push({
              dir: "y",
              bay: p,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : je = je.filter((O) => !(O.dir === "y" && O.bay === p && O.axisIdx === v)), ve();
          });
        }
      }
      if (je.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${je.length} ubicaciones`
        };
        g.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Gt() {
      const e = document.getElementById("parameters");
      if (!e) return;
      if (fe || (fe = e.innerHTML), $e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (Yt) {
        try {
          Yt.dispose();
        } catch {
        }
        Yt = null;
      }
      e.innerHTML = "";
      const o = L.charAt(0).toUpperCase() + L.slice(1);
      $e = new Bo({
        title: `Parameters \u2014 ${o}`,
        container: e
      });
      const n = Wn()[L];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = oe[a.key].val;
        for (const a of n) $e.addBinding(s, a.key, {
          min: oe[a.key].min,
          max: oe[a.key].max,
          step: oe[a.key].step,
          label: oe[a.key].label
        });
        const c = $e.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const i = {
            min: oe[a.key].min,
            max: oe[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            oe[a.key] && (oe[a.key].min = i.min, oe[a.key].max = i.max, oe[a.key].val < i.min && (oe[a.key].val = i.min), oe[a.key].val > i.max && (oe[a.key].val = i.max)), Gt(), ve();
          });
        }
        $e.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && oe[i]) {
            if (oe[i].val = a.value, L === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const u = Math.round(oe.nVanosX.val), d = Math.round(oe.nVanosY.val);
                for (; ee.length < u; ) ee.push(ee[ee.length - 1] ?? z.defaultSpan);
                for (ee.length > u && (ee.length = u); le.length < d; ) le.push(le[le.length - 1] ?? z.defaultSpan * 0.8);
                le.length > d && (le.length = d);
              }
              Gt();
            }
            ve();
          }
        });
      }
      if (L === "edificio") {
        if (Ut) {
          try {
            Ut.dispose();
          } catch {
          }
          Ut = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const c = z;
          Ut = new Bo({
            title: `Luces (${c.length})`,
            container: s
          });
          const a = Ut.addFolder({
            title: "Luces X",
            expanded: true
          }), i = {};
          for (let r = 0; r < ee.length; r++) i[`svx_${r + 1}`] = ee[r];
          for (let r = 0; r < ee.length; r++) a.addBinding(i, `svx_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${r + 1}`
          });
          a.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (ee[parseInt($[1]) - 1] = r.value, ve());
          });
          const u = Ut.addFolder({
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
            $ && (le[parseInt($[1]) - 1] = r.value, ve());
          });
        }
      }
      if (wo(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const s = Uo()[L];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((i, u) => {
            c[i.label] = u;
          });
          const a = {
            apoyo: St
          };
          $e.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (i) => {
            St = i.value, ve();
          });
        }
        if (L === "placa-3q" || L === "placa-q4") {
          const c = {
            teoria: Ct
          };
          $e.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Ct = a.value, ve();
          });
        }
      }
      const l = Yn()[L];
      if (l && l.length > 0) {
        Yt = new Bo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: e
        });
        const s = {};
        for (const a of l) s[a.key] = ot[a.key].val;
        for (const a of l) Yt.addBinding(s, a.key, {
          min: ot[a.key].min,
          max: ot[a.key].max,
          step: ot[a.key].step,
          label: ot[a.key].label
        });
        const c = Yt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: ot[a.key].min,
            max: ot[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            ot[a.key] && (ot[a.key].min = i.min, ot[a.key].max = i.max, ot[a.key].val < i.min && (ot[a.key].val = i.min), ot[a.key].val > i.max && (ot[a.key].val = i.max)), Gt(), ve();
          });
        }
        Yt.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && ot[i]) {
            if (ot[i].val = a.value, t.nodeInputs) {
              const u = t.nodeInputs.val;
              u.supports && (t.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => gn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (oe[s]) oe[s].val = c, ve(), Gt();
          else if (ot[s]) {
            if (ot[s].val = c, t.nodeInputs) {
              const a = t.nodeInputs.val;
              a.supports && (t.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              gn(), Gt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in oe) s[c] = oe[c].val;
          for (const c in ot) s[c] = ot[c].val;
          return s;
        },
        setGenerator: Ve,
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
    function _s() {
      if ($e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (Yt) {
        try {
          Yt.dispose();
        } catch {
        }
        Yt = null;
      }
      if (mt) {
        try {
          mt.dispose();
        } catch {
        }
        mt = null;
      }
      if (Ut) {
        try {
          Ut.dispose();
        } catch {
        }
        Ut = null;
      }
      const e = document.getElementById("sections");
      e && e.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && fe && (n.innerHTML = fe);
    }
    const ye = document.createElement("div");
    ye.id = "cad3d-panel";
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
      e === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), L && yt(true);
    }), ye.innerHTML = `
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
    let bt = null;
    function Rs() {
      var _a2, _b, _c, _d, _e2, _f;
      const e = t.nodes.val, o = t.elements.val, n = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, l = (_b = t.elementInputs) == null ? void 0 : _b.val, s = _, c = h, a = [];
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
        const d = Object.entries(oe).map(([r, b]) => `${r}=${b.val}`).join(" ");
        a.push(`cad.${L === "edificio" ? "building" : L}(${d})`);
      }
      return a.join(`
`);
    }
    let _o = false;
    function Hs() {
      var _a2, _b, _c, _d;
      if (bt) {
        bt.remove(), bt = null, _o = false;
        return;
      }
      const e = Rs();
      bt = document.createElement("div"), bt.id = "export-overlay", bt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, bt.innerHTML = `
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
    `, document.body.appendChild(bt), (_a2 = bt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        bt == null ? void 0 : bt.remove(), bt = null, _o = false;
      }), (_b = bt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = bt.querySelector("#export-body"), n = bt.querySelector("#export-minimize");
        _o = !_o, _o ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", bt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", bt.style.width = "720px");
      }), (_c = bt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = bt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = bt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = bt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = t.nodes.val, n = t.elements.val, l = (_a3 = t.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = t.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: L || "custom",
          units: {
            force: h,
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
        const u = bt.querySelector("#export-text");
        u.value = JSON.stringify(c, null, 2);
        const d = bt.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ge() {
      var _a2, _b, _c;
      const e = ye.querySelector("#cad3d-info");
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
          ]), xe = 0;
          const { extent: a } = no(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let d = 0;
            for (let r = 0; r < e.length; r++) {
              const b = i[r * 6] || 0, $ = i[r * 6 + 1] || 0, w = i[r * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + $ * $ + w * w));
            }
            be = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const u = `${L} \u2014 ${e.length}n ${o.length}e`;
          ke.render(c, {
            title: u
          }), ke.div.style.display = "", Ro(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), X = null;
      }
    }
    function bn() {
      Le && (cancelAnimationFrame(Le), Le = 0), U.length > 0 && (t.nodes.val = U.map((e) => [
        ...e
      ])), ke.div.style.display = "none", X = null;
    }
    function Ro() {
      var _a2;
      if (Le && cancelAnimationFrame(Le), !(X == null ? void 0 : X.modeShapes) || !U.length) return;
      const e = X.modeShapes[xe];
      if (!e) return;
      const o = ((_a2 = X.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = U.length, c = t.elements.rawVal, { extent: a } = no(), i = ye.querySelector("#cad3d-modal-scale"), u = i && parseFloat(i.value) || 5;
      let d = 0;
      for (let I = 0; I < s; I++) {
        const F = e[I * 6] || 0, y = e[I * 6 + 1] || 0, m = e[I * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(F * F + y * y + m * m));
      }
      const r = d > 1e-12 ? a * u / 100 / d : 1, b = Ue();
      if (!b) return;
      let $ = null, w = null, x = null;
      b.scene.traverse((I) => {
        var _a3, _b;
        !$ && I.isPoints && I.geometry && ($ = I), !w && I.isLineSegments && I.geometry && !I.name && (w = I), !x && I.isMesh && ((_a3 = I.material) == null ? void 0 : _a3.transparent) && ((_b = I.material) == null ? void 0 : _b.opacity) < 0.5 && I.geometry && (x = I);
      });
      const f = new Float32Array(s * 3), g = [];
      for (const I of c) if (I.length === 2) g.push([
        I[0],
        I[1]
      ]);
      else for (let F = 0; F < I.length; F++) g.push([
        I[F],
        I[(F + 1) % I.length]
      ]);
      const S = new Float32Array(g.length * 6);
      function E() {
        const I = (performance.now() - l) / 1e3, F = Math.sin(2 * Math.PI * n * I) * r;
        for (let y = 0; y < s; y++) {
          const m = U[y];
          f[y * 3] = m[0] + (e[y * 6] || 0) * F, f[y * 3 + 1] = m[1] + (e[y * 6 + 1] || 0) * F, f[y * 3 + 2] = m[2] + (e[y * 6 + 2] || 0) * F;
        }
        if ($) {
          const y = $.geometry, m = y.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : y.setAttribute("position", new bo(f.slice(), 3));
        }
        if (w) {
          for (let p = 0; p < g.length; p++) {
            const [v, M] = g[p];
            S[p * 6] = f[v * 3], S[p * 6 + 1] = f[v * 3 + 1], S[p * 6 + 2] = f[v * 3 + 2], S[p * 6 + 3] = f[M * 3], S[p * 6 + 4] = f[M * 3 + 1], S[p * 6 + 5] = f[M * 3 + 2];
          }
          const y = w.geometry, m = y.getAttribute("position");
          m && m.array.length === S.length ? (m.array.set(S), m.needsUpdate = true) : y.setAttribute("position", new bo(S.slice(), 3));
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
            v && v.array.length === p.length ? (v.array.set(p), v.needsUpdate = true) : m.setAttribute("position", new bo(p, 3));
          }
        }
        b.render(), Le = requestAnimationFrame(E);
      }
      Le = requestAnimationFrame(E);
    }
    function gn() {
      var _a2, _b, _c, _d, _e2;
      if (!t.deformOutputs || !t.analyzeOutputs || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val;
      let n = t.nodeInputs.val;
      const l = t.elementInputs.val;
      if (e.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = W("CM") ?? 0, f = W("CV") ?? 0, g = x + f, S = W("Ex") ?? 0, E = W("Ey") ?? 0;
        if (g === 0 && S === 0 && E === 0) return;
        const I = /* @__PURE__ */ new Map(), F = [];
        for (let T = 0; T < e.length; T++) n.supports.has(T) || F.push(T);
        const y = (T) => Math.round(T * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((T, O) => {
          m.add(`${y(e[O][0])},${y(e[O][1])}`);
        });
        const p = /* @__PURE__ */ new Set();
        for (const T of F) m.has(`${y(e[T][0])},${y(e[T][1])}`) && p.add(T);
        const v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (S !== 0 || E !== 0) {
          let T = -1 / 0, O = -1 / 0;
          for (const Z of p) T = Math.max(T, y(e[Z][0])), O = Math.max(O, y(e[Z][1]));
          const q = /* @__PURE__ */ new Map();
          for (const Z of p) {
            const K = y(e[Z][2]);
            q.has(K) || q.set(K, []), q.get(K).push(Z);
          }
          q.forEach((Z) => {
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
          const O = o[T], q = ((_a2 = l.densities) == null ? void 0 : _a2.get(T)) ?? 0;
          if (!(Math.abs(q) < 1e-15)) {
            if (O.length === 2) {
              const Z = ((_b = l.areas) == null ? void 0 : _b.get(T)) ?? 0, K = e[O[0]], re = e[O[1]], ae = Math.sqrt((re[0] - K[0]) ** 2 + (re[1] - K[1]) ** 2 + (re[2] - K[2]) ** 2), ce = -(q * Z * ae * k) / 2;
              P.set(O[0], (P.get(O[0]) ?? 0) + ce), P.set(O[1], (P.get(O[1]) ?? 0) + ce);
            } else if (O.length >= 3) {
              const Z = ((_c = l.thicknesses) == null ? void 0 : _c.get(T)) ?? 0;
              let K = 0;
              if (O.length === 3) {
                const [Q, ce, Me] = O.map((Pe) => e[Pe]);
                K = 0.5 * Math.abs((ce[0] - Q[0]) * (Me[1] - Q[1]) - (Me[0] - Q[0]) * (ce[1] - Q[1]));
              } else if (O.length === 4) {
                const [Q, ce, Me, Pe] = O.map((Ne) => e[Ne]);
                if (K = 0.5 * Math.abs((ce[0] - Q[0]) * (Me[1] - Q[1]) - (Me[0] - Q[0]) * (ce[1] - Q[1])) + 0.5 * Math.abs((Me[0] - Q[0]) * (Pe[1] - Q[1]) - (Pe[0] - Q[0]) * (Me[1] - Q[1])), K < 1e-10) {
                  const Ne = [
                    ce[0] - Q[0],
                    ce[1] - Q[1],
                    ce[2] - Q[2]
                  ], H = [
                    Pe[0] - Q[0],
                    Pe[1] - Q[1],
                    Pe[2] - Q[2]
                  ], de = [
                    Ne[1] * H[2] - Ne[2] * H[1],
                    Ne[2] * H[0] - Ne[0] * H[2],
                    Ne[0] * H[1] - Ne[1] * H[0]
                  ];
                  K = Math.sqrt(de[0] ** 2 + de[1] ** 2 + de[2] ** 2);
                }
              }
              const ae = -(q * Z * K * k) / O.length;
              for (const Q of O) P.set(Q, (P.get(Q) ?? 0) + ae);
            }
          }
        }
        const A = /* @__PURE__ */ new Set();
        for (const T of o) T.length === 2 && (A.add(T[0]), A.add(T[1]));
        for (const T of F) {
          const O = v.has(T) ? S : 0, q = M.has(T) ? E : 0, Z = P.get(T) ?? 0, K = A.has(T) ? g : 0, re = Z + K;
          (O !== 0 || q !== 0 || Math.abs(re) > 1e-10) && I.set(T, [
            O,
            q,
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
        const x = Ht(e, o, n, l), f = performance.now() - s;
        if (x) {
          t.deformOutputs.val = x, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let g = 0, S = -1, E = 0, I = 0;
          x.deformations && x.deformations.forEach((v, M) => {
            const k = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            k > g && (g = k, S = M, E = v[0], I = v[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(E * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(I * 1e3).toFixed(4)} mm`);
          const F = performance.now(), y = Ao(e, o, l, x), m = performance.now() - F;
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
    function hn(e, o) {
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
      const u = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = e - 2 * n, r = o - 2 * n, b = e * o - d * r, $ = (e * o * o * o - d * r * r * r) / 12, w = (o * e * e * e - r * d * d * d) / 12, x = d * r, f = d * r * r * r / 12, g = r * d * d * d / 12, S = b + u * x, E = $ + u * f, I = w + u * g, F = l / (2 * (1 + s)), y = (e - n) * (o - n), m = 2 * ((e - n) / n + (o - n) / n), p = 4 * y * y / (m > 0 ? m : 1);
      return {
        A: S,
        Iz: E,
        Iy: I,
        J: p,
        Es: l,
        Gs: F,
        A_steel: b,
        A_conc: x
      };
    }
    function oo() {
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
        const { colMat: s, vigaMat: c, colShape: a, fc: i, perFloor: u } = Ie, d = 4700 * Math.sqrt(i / 1e3) * 1e3, r = d / (2 * 1.2), b = 24 / 9.80665, $ = o.E, w = o.G, x = o.rho;
        for (let f = 0; f < e.length; f++) {
          if (Be.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, M), n.thicknesses.set(f, Qe), n.shearModuli.set(f, v / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (zt.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, M), n.thicknesses.set(f, xt), n.shearModuli.set(f, v / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const g = ue.has(f), S = Ae.get(f) ?? 0, E = u[S] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let I, F, y, m;
          if (g) if (s === 0) F = d, y = r, m = b, I = a === 1 ? rs(E.dCol) : hn(E.bCol, E.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: E.dCol
          } : {
            type: "rect",
            b: E.bCol,
            h: E.hCol
          });
          else if (s === 1) {
            F = $, y = w, m = x;
            const v = Ie.steelColType;
            if (v <= 1) {
              const M = po[E.colProfileIdx] ?? po[0];
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
              const M = E.colBf ?? 0.3, k = E.colHf ?? 0.3, P = E.colTf ?? 0.02, A = E.colTw ?? 0.012;
              I = xn(M, k, P, A);
              const T = `I${(k * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: M,
                h: k,
                tf: P,
                tw: A,
                name: T
              });
            } else {
              const M = E.colBc ?? 0.3, k = E.colHc ?? 0.3, P = E.colT ?? 0.01;
              I = vn(M, k, P);
              const A = `\u25A1${(k * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: M,
                h: k,
                tw: P,
                name: A
              });
            }
          } else {
            const v = E.colBc ?? 0.3, M = E.colHc ?? 0.3, k = E.colT ?? 0.01, P = E.colFc ?? 28e3, A = E.colEs ?? 2e8, T = E.colNuS ?? 0.3;
            E.colNuC;
            const O = Bs(v, M, k, A, T, P);
            I = {
              A: O.A,
              Iz: O.Iz,
              Iy: O.Iy,
              J: O.J
            }, F = O.Es, y = O.Gs;
            const q = 7.85, Z = 24 / 9.80665;
            m = (q * O.A_steel + Z * O.A_conc) / (O.A_steel + O.A_conc);
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
            const v = Je.get(f), M = v ? v.dir === "x" ? E.vigasX : E.vigasY : [], k = v ? M[v.bay] ?? M[0] ?? Tt() : Tt();
            if (c === 0) F = d, y = r, m = b, I = hn(k.b, k.h), n.sectionShapes.set(f, {
              type: "rect",
              b: k.b,
              h: k.h
            });
            else {
              F = $, y = w, m = x;
              const P = Ie.steelVigaType;
              if (P <= 1) {
                const A = po[k.profileIdx ?? 0] ?? po[0];
                I = {
                  A: A.A,
                  Iz: A.Iz,
                  Iy: A.Iy,
                  J: A.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: A.bf,
                  h: A.d,
                  name: A.name
                });
              } else if (P === 2) {
                const A = k.bf ?? 0.2, T = k.hf ?? 0.4, O = k.tf ?? 0.015, q = k.tw ?? 0.01;
                I = xn(A, T, O, q);
                const Z = `I${(T * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: A,
                  h: T,
                  tf: O,
                  tw: q,
                  name: Z
                });
              } else {
                const A = k.bc ?? 0.2, T = k.hc ?? 0.3, O = k.t ?? 8e-3;
                I = vn(A, T, O);
                const q = `\u25A1${(T * 100).toFixed(0)}x${(A * 100).toFixed(0)}x${(O * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: A,
                  h: T,
                  tw: O,
                  name: q
                });
              }
            }
          }
          const p = me.get(f);
          if (p) {
            if ((p.material ?? 1) === 0 ? (F = d, y = r, m = b) : (F = $, y = w, m = x), p.secType === "rect" && p.b && p.h) I = hn(p.b, p.h), n.sectionShapes.set(f, {
              type: "rect",
              b: p.b,
              h: p.h
            });
            else if (p.secType === "circ" && p.b) I = rs(p.b), n.sectionShapes.set(f, {
              type: "circ",
              d: p.b
            });
            else if ((p.secType === "W" || p.secType === "HSS") && p.profileIdx !== void 0) {
              const M = po[p.profileIdx] ?? po[0];
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
          n.elasticities.set(f, F), n.shearModuli.set(f, y), n.areas.set(f, I.A), n.momentsOfInertiaZ.set(f, I.Iy), n.momentsOfInertiaY.set(f, I.Iz), n.torsionalConstants.set(f, I.J), n.densities.set(f, m);
        }
      } else for (let s = 0; s < e.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      t.elementInputs.val = n;
    }
    function cs(e) {
      ye.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === e);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = ye.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (y) => {
        y.stopPropagation(), ye.classList.add("collapsed");
      }), (_b = ye.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (y) => {
        y.stopPropagation(), ye.classList.remove("collapsed");
      }), ye.querySelectorAll("[data-ex]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.ex;
          cs(p), We.example(p);
        });
      }), ye.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.view;
          so(p), ye.querySelectorAll("[data-view]").forEach((v) => v.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = ye.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), L = "", As.val = false, _s(), We.clear();
      }), (_d = ye.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && (Bt = false, mo()), Jt && Go(), qt = !qt, (_a3 = ye.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", qt);
        const p = Ue();
        p && (p.controls.enabled = !qt), qt || Yo();
      }), (_e2 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && (Bt = false, mo()), qt && Yo(), Jt = !Jt, (_a3 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Jt), Jt ? Gs() : Go();
      }), (_f = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), qt && Yo(), Jt && Go(), Bt = !Bt, (_a3 = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Bt), Bt || mo();
      }), (_g = ye.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), We.clear(), lt = null;
      }), (_h = ye.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), Hs();
      });
      let e = "";
      const o = ye.querySelector("#cad3d-io-menu"), n = ye.querySelector("#cad3d-io-file");
      function l(y, m) {
        t.nodes.val = y.nodes, t.elements.val = y.elements, t.nodeInputs.val = y.nodeInputs, t.elementInputs.val = y.elementInputs, t.deformOutputs.val = {}, t.analyzeOutputs.val = {}, console.log(`${m}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function s(y) {
        ue = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
        const m = /* @__PURE__ */ new Map();
        for (let q = 0; q < y.stories.length; q++) m.set(y.stories[q].name, q);
        for (let q = 0; q < y.elementTypes.length; q++) {
          const Z = y.elementTypes[q], K = y.elementStories[q], re = m.get(K) ?? 0;
          Ae.set(q, re), Z === "COLUMN" || Z === "BRACE" ? ue.add(q) : Te.add(q);
        }
        L = "edificio";
        const p = y.grids.filter((q) => q.dir === "X").sort((q, Z) => q.coord - Z.coord), v = y.grids.filter((q) => q.dir === "Y").sort((q, Z) => q.coord - Z.coord);
        let M, k, P, A;
        if (p.length > 0 || v.length > 0) M = p.map((q) => q.coord), k = v.map((q) => q.coord), P = p.map((q) => q.label), A = v.map((q) => q.label);
        else {
          const q = new Set(y.nodes.map((K) => K[0])), Z = new Set(y.nodes.map((K) => K[1]));
          M = [
            ...q
          ].sort((K, re) => K - re), k = [
            ...Z
          ].sort((K, re) => K - re), P = M.map((K, re) => String(re + 1)), A = k.map((K, re) => String.fromCharCode(65 + re));
        }
        const T = y.stories.length > 0 ? Math.max(...y.stories.map((q) => q.elev)) : Math.max(...y.nodes.map((q) => q[2]));
        Fe = M, qe = k, Ke = T, setTimeout(() => {
          yt(), Oo(M, k, T, P, A), an(y.stories, M, k), yn(), $n();
        }, 100);
        const O = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const q of y.elementTypes) O[q]++;
        console.log(`E2K grids: X=[${P.join(",")}] Y=[${A.join(",")}]`), console.log(`E2K stories: ${y.stories.map((q) => `${q.name}@${q.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${O.COLUMN} columns, ${O.BEAM} beams, ${O.BRACE} braces`), Ge();
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
              e2kModel: lt ?? void 0
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
              lt = v, l(v, "E2K imported"), s(v);
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
      const a = ye.querySelector("#cad3d-force-unit");
      a && (a.value = h, a.addEventListener("change", (y) => {
        y.stopPropagation(), h = a.value, z = xo(h, _), L && Ve(L);
      }));
      const i = ye.querySelector("#cad3d-length-unit");
      i && (i.value = _, i.addEventListener("change", (y) => {
        y.stopPropagation(), _ = i.value, z = xo(h, _), L && Ve(L);
      })), ye.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.preset, v = R[p];
          v && (h = v.force, _ = v.length, Y = v.stress, z = xo(h, _), a && (a.value = h), i && (i.value = _), ye.querySelectorAll("[data-preset]").forEach((M) => {
            M.classList.toggle("active", M.dataset.preset === p);
          }), L && Ve(L), console.log(`Preset: ${p} \u2192 ${h}+${_}, stress: ${Y.label}`));
        });
      }), (_i = ye.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), ea();
      }), (_j = ye.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), ta();
      }), (_k = ye.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), na();
      }), (_l = ye.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), aa();
      }), (_m = ye.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), ge = !ge, (_a3 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", ge);
        const p = ye.querySelector("#cad3d-mode-prev"), v = ye.querySelector("#cad3d-mode-next"), M = ye.querySelector("#cad3d-mode-label"), k = ye.querySelector("#cad3d-modal-scale");
        if (ge) {
          const P = Ue();
          ((_b2 = P == null ? void 0 : P.settings) == null ? void 0 : _b2.loads) && (Oe = P.settings.loads.rawVal, P.settings.loads.val = false), mn(), p.style.display = "", v.style.display = "", M.style.display = "", k && (k.style.display = ""), u();
        } else bn(), p.style.display = "none", v.style.display = "none", M.style.display = "none", k && (k.style.display = "none"), L && L !== "placa-q4" && L !== "placa-3q" && ve(), setTimeout(() => {
          var _a4;
          const P = Ue();
          ((_a4 = P == null ? void 0 : P.settings) == null ? void 0 : _a4.loads) && Oe && (P.settings.loads.val = true);
        }, 600);
      });
      function u() {
        var _a3;
        const y = ye.querySelector("#cad3d-mode-label");
        if (!y || !(X == null ? void 0 : X.frequencies)) return;
        const m = X.frequencies[xe], p = m > 0 ? 1 / m : 0, v = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let M = 0; M <= xe; M++) {
          const k = (_a3 = X.massParticipation) == null ? void 0 : _a3[M];
          if (k) for (let P = 0; P < 6; P++) v[P] += k[P];
        }
        y.textContent = `Modo ${xe + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${p.toFixed(3)}s \u2014 \u03A3Ux=${(v[0] * 100).toFixed(1)}% \u03A3Uy=${(v[1] * 100).toFixed(1)}% \u03A3Rz=${(v[5] * 100).toFixed(1)}%`;
      }
      (_n2 = ye.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(X == null ? void 0 : X.modeShapes)) return;
        xe = (xe - 1 + X.modeShapes.length) % X.modeShapes.length;
        const m = X.modeShapes[xe], { extent: p } = no();
        let v = 0;
        for (let M = 0; M < U.length; M++) {
          const k = m[M * 6] || 0, P = m[M * 6 + 1] || 0, A = m[M * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(k * k + P * P + A * A));
        }
        be = v > 1e-12 ? p * 0.05 / v : 1, Ro(), u();
      }), (_o2 = ye.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(X == null ? void 0 : X.modeShapes)) return;
        xe = (xe + 1) % X.modeShapes.length;
        const m = X.modeShapes[xe], { extent: p } = no();
        let v = 0;
        for (let M = 0; M < U.length; M++) {
          const k = m[M * 6] || 0, P = m[M * 6 + 1] || 0, A = m[M * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(k * k + P * P + A * A));
        }
        be = v > 1e-12 ? p * 0.05 / v : 1, Ro(), u();
      });
      const d = ye.querySelector("#cad3d-modal-scale");
      d == null ? void 0 : d.addEventListener("mousedown", (y) => y.stopPropagation()), d == null ? void 0 : d.addEventListener("change", () => {
        ge && (X == null ? void 0 : X.modeShapes) && Ro();
      });
      const r = ye.querySelector("#cad3d-cli-toggle"), b = ye.querySelector("#cad3d-cli-panel"), $ = ye.querySelector("#cad3d-cli-output"), w = ye.querySelector("#cad3d-cmd"), x = [];
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
        if ((y.key === "Delete" || y.key === "Backspace") && at.size > 0) {
          y.preventDefault(), at.forEach((m) => V.add(m)), at.clear(), Xt && (Xt.remove(), Xt = null), ve();
          return;
        }
        if (y.key === "Escape") {
          if (Jt) if (it !== null) {
            it = null;
            const m = Ue();
            $t && m && (m.scene.remove($t), $t.geometry.dispose(), $t.material.dispose(), $t = null), wt && m && (m.scene.remove(wt), wt.geometry.dispose(), wt.material.dispose(), wt = null), m == null ? void 0 : m.render();
          } else Go();
          qt && Yo(), Bt && (Bt = false, mo(), (_a3 = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
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
      let g = false, S = 0, E = 0, I = 0, F = 0;
      ye.addEventListener("mousedown", (y) => {
        const m = y.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        g = true;
        const p = ye.getBoundingClientRect();
        ye.style.bottom = "unset", S = y.clientX, E = y.clientY, I = p.left, F = p.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        g && (y.preventDefault(), ye.style.left = I + (y.clientX - S) + "px", ye.style.top = F + (y.clientY - E) + "px");
      }), window.addEventListener("mouseup", () => {
        g = false;
      }), Ge();
    }, 10);
    function Ue() {
      const e = document.getElementById("viewer");
      return e ? e.__ctx : null;
    }
    function no() {
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
    function yt(e = false) {
      const o = Ue();
      if (!o) return;
      const { extent: n } = no();
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
        const g = new Fn(x);
        g.needsUpdate = true;
        const S = new Xo(new Ko({
          map: g,
          depthTest: false,
          transparent: true
        }));
        S.position.set(w[0], w[1], w[2]), S.scale.set(0.4 * u, 0.4 * u, 1), S.renderOrder = 99, d.add(S);
      }
      o.scene.add(d), e ? o.render() : so("3d");
    }
    function ds(e, o, n) {
      if (e.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(e[o] - e[o - 1]))), o < e.length - 1 && (l = Math.min(l, Math.abs(e[o + 1] - e[o]))), l * 0.45 || n * 0.1;
    }
    function so(e) {
      var _a2;
      const o = Ue();
      if (!o) return;
      const { center: n, extent: l } = no(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
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
          const d = parseInt(e.split(":")[1]), r = ((_a2 = oe.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * r, $ = r * 0.45;
          o.renderer.clippingPlanes = [
            new co(new Se(0, 0, -1), b + $),
            new co(new Se(0, 0, 1), -b + $)
          ], a(), u(new Se(n.x, n.y, b + l * 2), new Se(n.x, n.y, b), new Se(0, 1, 0));
        } else if (e === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (e === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (e.startsWith("axisX:")) {
          const d = parseInt(e.split(":")[1]), r = Fe[d] ?? n.x;
          if (qe.length > 1) {
            const $ = ds(Fe, d, l);
            o.renderer.clippingPlanes = [
              new co(new Se(-1, 0, 0), r + $),
              new co(new Se(1, 0, 0), -r + $)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (e.startsWith("axisY:")) {
          const d = parseInt(e.split(":")[1]), r = qe[d] ?? n.y;
          if (Fe.length > 1) {
            const $ = ds(qe, d, l);
            o.renderer.clippingPlanes = [
              new co(new Se(0, -1, 0), r + $),
              new co(new Se(0, 1, 0), -r + $)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !e.startsWith("axisX:") && !e.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function yn() {
      const e = ye.querySelector("#cad3d-axis-buttons");
      if (!e) return;
      if (Fe.length < 2 && qe.length < 2) {
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
          ye.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), r ? (so("3d"), (_a2 = ye.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (so(a), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Fe.forEach((c, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        e.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", e.appendChild(s), qe.forEach((c, a) => {
        const i = `${a + 1}`;
        e.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function $n() {
      var _a2;
      const e = ye.querySelector("#cad3d-floor-buttons");
      if (!e) return;
      const o = Math.round(((_a2 = oe.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
          ye.querySelectorAll("[data-view]").forEach((r) => r.classList.remove("view-active")), d ? (so("3d"), (_a3 = ye.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (so(c), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(l);
      for (let s = 0; s < o; s++) e.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ds() {
      so("3d"), ye.querySelectorAll("[data-view]").forEach((e) => e.classList.toggle("view-active", e.dataset.view === "3d"));
    }
    We.view = (e) => {
      e = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[e] || e, so(e), ye.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === e));
    };
    let Bt = false, qt = false, Jt = false, It = "line", Ot = [], it = null, $t = null, wt = null, Mo = null, _t = null;
    const ft = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, wn = 0.5;
    let Mn = [], Rt = null, uo = null;
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
      t.nodes.val = e.nodes, t.elements.val = e.elements, oo(), t.elementInputs.val = {
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
      t.nodes.val = e.nodes, t.elements.val = e.elements, oo(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    const at = /* @__PURE__ */ new Set();
    let Ft = null, ao = [], Vt = null, Xt = null;
    function Sn(e) {
      const o = Ue();
      if (!o) return;
      const n = t.nodes.val, l = t.elements.val[e];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const u = n[l[i]], d = n[l[(i + 1) % l.length]];
        s.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const c = new Dt();
      c.setAttribute("position", new bo(s, 3));
      const a = new To(c, new Co({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = e, o.scene.add(a), ao.push(a), o.render();
    }
    function lo() {
      const e = Ue();
      ao.forEach((o) => {
        e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), ao = [], e == null ? void 0 : e.render();
    }
    function io() {
      Xt && Xt.remove();
      const e = j.size > 0 || D;
      if (at.size === 0 && !e) {
        Xt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${at.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Xt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        la([
          ...at
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (at.size === 1) {
          const n = [
            ...at
          ][0];
          vs(n);
        } else {
          const n = [
            ...at
          ], l = t.nodes.val, s = t.elements.val;
          let c = 0, a = 0, i = 0, u = 0;
          n.forEach((r) => {
            const b = s[r];
            if (b) if (b.length === 2) {
              const $ = l[b[0]], w = l[b[1]], x = Math.abs(w[0] - $[0]), f = Math.abs(w[1] - $[1]), g = Math.abs(w[2] - $[2]);
              g > x && g > f ? c++ : a++;
            } else b.length === 3 ? i++ : b.length === 4 && u++;
          });
          const d = [];
          c && d.push(`${c} columnas`), a && d.push(`${a} vigas`), u && d.push(`${u} shells Q4`), i && d.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        at.forEach((n) => j.add(n)), at.clear(), lo(), io(), ve();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        D = true, G.clear(), at.forEach((n) => G.add(n)), at.clear(), lo(), io(), ve();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        j.clear(), D = false, G.clear(), io(), ve();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Eo(), at.forEach((n) => V.add(n)), at.clear(), lo(), io(), ve();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        at.clear(), lo(), io();
      });
    }
    function Yo() {
      var _a2;
      qt = false, at.clear(), lo(), Xt && (Xt.remove(), Xt = null), (_a2 = ye.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ue();
      o && (o.controls.enabled = true);
    }
    function mo() {
      if (Ft) {
        const e = Ue();
        e == null ? void 0 : e.scene.remove(Ft), Ft.geometry.dispose(), Ft.material.dispose(), Ft = null, e == null ? void 0 : e.render();
      }
      Vt && (Vt.remove(), Vt = null);
    }
    function Ws(e) {
      En();
      const o = Ue();
      if (!o) return;
      const n = t.nodes.val[e];
      if (!n) return;
      uo = e;
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
        ]), u = new Dt();
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
      const e = Ue();
      for (const o of Mn) e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Mn = [], uo = null, Rt && (Rt.remove(), Rt = null);
    }
    function us(e, o, n, l) {
      Rt || (Rt = document.createElement("div"), Rt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Rt));
      const s = l.x - n.x, c = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + c * c + a * a), u = Math.abs(s), d = Math.abs(c), r = Math.abs(a);
      let b = "";
      u > d && u > r ? b = `\u0394X=${s.toFixed(2)}` : d > u && d > r ? b = `\u0394Y=${c.toFixed(2)}` : r > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Rt.textContent = `${i.toFixed(3)} m  ${b}`, Rt.style.left = e + 20 + "px", Rt.style.top = o - 10 + "px";
    }
    function Ys(e, o) {
      const l = t.nodes.val[o];
      if (!l) return null;
      const s = new Se(l[0], l[1], l[2]), c = e.clone(), a = c.clone().sub(s), i = 0.3, u = Math.abs(a.x), d = Math.abs(a.y), r = Math.abs(a.z);
      return d < i && r < i && u > 0.01 ? new Se(c.x, s.y, s.z) : u < i && r < i && d > 0.01 ? new Se(s.x, c.y, s.z) : u < i && d < i && r > 0.01 ? new Se(s.x, s.y, c.z) : null;
    }
    function Go() {
      var _a2;
      const e = Ue();
      $t && e && (e.scene.remove($t), $t.geometry.dispose(), $t.material.dispose(), $t = null), wt && e && (e.scene.remove(wt), wt.geometry.dispose(), wt.material.dispose(), wt = null), En(), it = null, _t = null, Jt = false, Mo && (Mo.remove(), Mo = null), (_a2 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), e == null ? void 0 : e.render();
    }
    function Gs() {
      Mo && Mo.remove();
      const e = document.createElement("div");
      e.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      e.innerHTML = `
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
      <input id="ds-gridsize" type="number" value="${wn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(e), Mo = e;
      const l = () => {
        const s = e.querySelector("#dt-line"), c = e.querySelector("#dt-arc"), a = e.querySelector("#dt-node"), i = e.querySelector("#dt-area");
        s && (s.style.cssText = o(It === "line")), c && (c.style.cssText = o(It === "arc")), a && (a.style.cssText = o(It === "node")), i && (i.style.cssText = o(It === "area"));
        const u = e.querySelector("#ds-node"), d = e.querySelector("#ds-grid"), r = e.querySelector("#ds-mid"), b = e.querySelector("#ds-track");
        u && (u.style.cssText = n(ft.node)), d && (d.style.cssText = n(ft.grid)), r && (r.style.cssText = n(ft.midpoint)), b && (b.style.cssText = n(ft.track));
      };
      e.querySelector("#dt-line").addEventListener("click", () => {
        It = "line", it = null, _t = null, Ot = [], l();
      }), e.querySelector("#dt-arc").addEventListener("click", () => {
        It = "arc", it = null, _t = null, Ot = [], l();
      }), e.querySelector("#dt-node").addEventListener("click", () => {
        It = "node", it = null, _t = null, Ot = [], l();
      }), e.querySelector("#dt-area").addEventListener("click", () => {
        It = "area", it = null, _t = null, Ot = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), e.querySelector("#ds-node").addEventListener("click", () => {
        ft.node = !ft.node, l();
      }), e.querySelector("#ds-grid").addEventListener("click", () => {
        ft.grid = !ft.grid, l();
      }), e.querySelector("#ds-mid").addEventListener("click", () => {
        ft.midpoint = !ft.midpoint, l();
      }), e.querySelector("#ds-track").addEventListener("click", () => {
        ft.track = !ft.track, ft.track || En(), l();
      }), e.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ft.gridSize = parseFloat(s.target.value) || 0.5;
      }), e.querySelector("#dt-undo").addEventListener("click", () => ps()), e.querySelector("#dt-redo").addEventListener("click", () => fs());
    }
    function ms(e, o, n, l) {
      const s = l.getBoundingClientRect(), c = (e - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new zs();
      i.setFromCamera(new Ls(c, a), n);
      const u = t.nodes.val, d = t.elements.val, r = 0.12;
      if (ft.node) {
        let w = -1, x = 1 / 0;
        for (let f = 0; f < u.length; f++) {
          const g = u[f], S = new Se(g[0], g[1], g[2]).project(n), E = Math.sqrt((S.x - c) ** 2 + (S.y - a) ** 2);
          E < r && E < x && (x = E, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Se(...u[w]),
          snapType: "node"
        };
      }
      if (ft.midpoint) {
        let w = 1 / 0, x = null;
        for (const f of d) {
          if (f.length !== 2) continue;
          const g = u[f[0]], S = u[f[1]], E = new Se((g[0] + S[0]) / 2, (g[1] + S[1]) / 2, (g[2] + S[2]) / 2), I = E.clone().project(n), F = Math.sqrt((I.x - c) ** 2 + (I.y - a) ** 2);
          F < r * 0.8 && F < w && (w = F, x = E);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (ft.grid) {
        const w = new co(new Se(0, 0, 1), 0), x = new Se();
        if (i.ray.intersectPlane(w, x)) {
          const f = ft.gridSize || wn;
          return x.x = Math.round(x.x / f) * f, x.y = Math.round(x.y / f) * f, x.z = Math.round(x.z / f) * f, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const b = new co(new Se(0, 0, 1), 0), $ = new Se();
      return i.ray.intersectPlane(b, $), {
        nodeIdx: null,
        worldPos: $,
        snapType: "free"
      };
    }
    function bs(e) {
      const o = Ue();
      if (!o) return;
      const n = t.nodes.val;
      if (wt && (o.scene.remove(wt), wt.geometry.dispose(), wt.material.dispose(), wt = null), e.worldPos) {
        const l = e.snapType === "node" ? 16776960 : e.snapType === "mid" ? 16711935 : e.snapType === "grid" ? 65535 : 8947848, s = e.snapType === "node" ? 0.08 : 0.06, c = e.snapType === "mid" ? new ba(s * 2, s * 2, s * 2) : new ga(s, 12, 12), a = new ha({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        wt = new xa(c, a), wt.position.copy(e.worldPos), wt.renderOrder = 9999, o.scene.add(wt);
      }
      if ($t && (o.scene.remove($t), $t.geometry.dispose(), $t.material.dispose(), $t = null), it !== null && e.worldPos) {
        const l = n[it], s = new Dt();
        if (It === "arc" && _t !== null) {
          const a = n[_t], i = gs(new Se(l[0], l[1], l[2]), new Se(a[0], a[1], a[2]), e.worldPos, 16), u = [];
          for (let d = 0; d < i.length - 1; d++) u.push(i[d].x, i[d].y, i[d].z, i[d + 1].x, i[d + 1].y, i[d + 1].z);
          s.setAttribute("position", new bo(u, 3));
        } else s.setAttribute("position", new bo([
          l[0],
          l[1],
          l[2],
          e.worldPos.x,
          e.worldPos.y,
          e.worldPos.z
        ], 3));
        const c = new Co({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        $t = new go(s, c), It === "arc" && _t !== null && ($t = new To(s, c)), $t.renderOrder = 9999, o.scene.add($t);
      }
      o.render();
    }
    function gs(e, o, n, l) {
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
      if (It === "node") {
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
      if (It === "line") {
        const o = In(e);
        if (o < 0) return;
        if (it === null) {
          it = o;
          return;
        }
        if (o === it) return;
        Eo();
        const n = [
          ...t.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === it && s[1] === o || s[1] === it && s[0] === o)) || (n.push([
          it,
          o
        ]), t.elements.val = n, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        }), it = o;
        return;
      }
      if (It === "arc") {
        const o = In(e);
        if (o < 0) return;
        if (it === null) {
          it = o;
          return;
        }
        if (_t === null) {
          if (o === it) return;
          _t = o;
          return;
        }
        if (o === it || o === _t) return;
        const n = t.nodes.val, l = new Se(...n[it]), s = new Se(...n[_t]), c = new Se(...n[o]), a = Math.max(4, Math.round(((_a2 = oe.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = gs(l, s, c, a);
        Eo();
        const u = [
          ...t.nodes.val
        ], d = [
          ...t.elements.val
        ];
        let r = it;
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
        t.nodes.val = u, t.elements.val = d, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        }, it = o, _t = null;
        return;
      }
      if (It === "area") {
        const o = In(e);
        if (o < 0) return;
        if (Ot.length >= 3 && o === Ot[0]) {
          Eo();
          const n = [
            ...t.nodes.val
          ], l = [
            ...t.elements.val
          ], s = Ot.map((c) => n[c]);
          try {
            const c = eo({
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
            t.nodes.val = n, t.elements.val = l, oo(), console.log(`Area: ${c.elements.length} triangulos creados desde ${Ot.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          Ot = [];
          return;
        }
        if (Ot.push(o), console.log(`Area vertex ${Ot.length}: node ${o}`), Ot.length >= 2) {
          const n = Ot[Ot.length - 2], l = t.nodes.val, s = Ue();
          if (s) {
            const c = new Dt().setFromPoints([
              new Se(...l[n]),
              new Se(...l[o])
            ]), a = new To(c, new Co({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function hs(e) {
      const o = Ue();
      if (!o) return;
      Ft && (o.scene.remove(Ft), Ft.geometry.dispose(), Ft.material.dispose());
      const n = t.nodes.val, l = t.elements.val[e];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const i = n[l[a]], u = n[l[(a + 1) % l.length]];
        s.push(i[0], i[1], i[2], u[0], u[1], u[2]);
      }
      const c = new Dt();
      c.setAttribute("position", new bo(s, 3)), Ft = new To(c, new Co({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Ft.renderOrder = 9999, o.scene.add(Ft), o.render();
    }
    function kn(e) {
      const o = Ue();
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
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new va(w, x), g = new Se(), S = new Se();
          d.closestPointToPoint(f.getCenter(new Se()), g), f.closestPointToPoint(g, true, S);
          const E = g.distanceTo(S);
          E < i && (i = E, u = b);
        } else if ($.length === 3) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), g = new Se();
          if (d.intersectTriangle(w, x, f, false, g)) {
            const E = d.origin.distanceTo(g);
            E < i && (i = E, u = b);
          } else {
            const E = w.add(x).add(f).divideScalar(3), I = new Se();
            d.closestPointToPoint(E, I);
            const F = I.distanceTo(E);
            F < i && (i = F, u = b);
          }
        } else if ($.length === 4) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), g = new Se(...c[$[3]]), S = new Se();
          let E = d.intersectTriangle(w, x, f, false, S);
          if (E) {
            const I = d.origin.distanceTo(S);
            I < i && (i = I, u = b);
          }
          if (E = d.intersectTriangle(w, f, g, false, S), E) {
            const I = d.origin.distanceTo(S);
            I < i && (i = I, u = b);
          }
        }
      }
      const { extent: r } = no();
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
        const n = to(e[1], e[0]), l = vo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
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
      const e = "0", o = ze(N("EA"), N("L")), n = ze("\u2212" + N("EA"), N("L")), l = ze("12" + N("EI", "z"), N("L") + "\xB3"), s = ze("\u221212" + N("EI", "z"), N("L") + "\xB3"), c = ze("12" + N("EI", "y"), N("L") + "\xB3"), a = ze("\u221212" + N("EI", "y"), N("L") + "\xB3"), i = ze("6" + N("EI", "z"), N("L") + "\xB2"), u = ze("\u22126" + N("EI", "z"), N("L") + "\xB2"), d = ze("6" + N("EI", "y"), N("L") + "\xB2"), r = ze("\u22126" + N("EI", "y"), N("L") + "\xB2"), b = ze(N("GJ"), N("L")), $ = ze("\u2212" + N("GJ"), N("L")), w = ze("4" + N("EI", "z"), N("L")), x = ze("2" + N("EI", "z"), N("L")), f = ze("4" + N("EI", "y"), N("L")), g = ze("2" + N("EI", "y"), N("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', E = [
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
      ], F = [
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
          g,
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
          g,
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
          const v = F[m][p], M = (m === p ? "diag " : "") + (v !== "0" ? "nz" : "");
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
      Vt && Vt.remove();
      const o = t.nodes.val, n = t.elements.val, l = n[e], s = l.map((m) => o[m]), c = l.length === 2, a = ((_a2 = t.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = t.deformOutputs) == null ? void 0 : _b.val, u = (_c = t.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const m = vo(to(s[1], s[0])), p = ((_d = a.elasticities) == null ? void 0 : _d.get(e)) ?? 0, v = ((_e2 = a.areas) == null ? void 0 : _e2.get(e)) ?? 0, M = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(e)) ?? 0, k = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(e)) ?? 0, P = ((_h = a.shearModuli) == null ? void 0 : _h.get(e)) ?? 0, A = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(e)) ?? 0;
        `${l[0]}${l[1]}${se(m)}${se(p)}${se(v)}${se(M)}${se(k)}${se(P)}${se(A)}`;
      } else {
        const m = ((_j = a.elasticities) == null ? void 0 : _j.get(e)) ?? 0, p = ((_k = a.thicknesses) == null ? void 0 : _k.get(e)) ?? 0, v = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(e)) ?? 0;
        `${l.join(", ")}${se(m)}${se(p)}${se(v)}`;
      }
      let d = "", r = "", b = "", $ = "", w = "", x = "", f = "", g = "", S = null, E = null, I = null, F = [];
      try {
        if (S = on(s, a, e), E = nn(s), I = jt(Rn(E), jt(S, E)), F = c ? [
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
          const M = vo(to(s[1], s[0])), k = ((_m = a.elasticities) == null ? void 0 : _m.get(e)) ?? 0, P = ((_n2 = a.areas) == null ? void 0 : _n2.get(e)) ?? 0, A = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(e)) ?? 0, T = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(e)) ?? 0, O = ((_q = a.shearModuli) == null ? void 0 : _q.get(e)) ?? 0, q = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(e)) ?? 0;
          $ = Vs(k, P, A, T, O, q, M);
        }
        w = Xs(s), x = Ks(), f = Us(l), g = Zs(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', p = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${m}</div>${zn(S, F)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${E.length}\xD7${E.length}) ${p}</div>${zn(E, F)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${zn(I, F)}`;
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
          ], k = m.map((P, A) => `<span class="prop-key">${P}</span>: <span class="${Math.abs(M[A]) > 1e-10 ? "result-val" : ""}">${se(M[A])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${p}:</strong> ${k}</div>`;
        }).join("");
      }
      if (u && c && (i == null ? void 0 : i.deformations) && S && E) {
        const m = (_s2 = u.normals) == null ? void 0 : _s2.get(e), p = (_t2 = u.shearsY) == null ? void 0 : _t2.get(e), v = (_u = u.shearsZ) == null ? void 0 : _u.get(e), M = (_v = u.torsions) == null ? void 0 : _v.get(e), k = (_w = u.bendingsY) == null ? void 0 : _w.get(e), P = (_x = u.bendingsZ) == null ? void 0 : _x.get(e), A = [
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
          O = jt(E, T);
        } catch {
          O = new Array(12).fill(0);
        }
        let q = [];
        try {
          q = jt(S, O);
        } catch {
          q = new Array(12).fill(0);
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
        `${N("u", "global")}${l.map((ae, Q) => `<span style="color:var(--fem-label)">nodo ${ae}:</span> ${A.map((ce, Me) => `<span style="color:${Math.abs(T[Q * 6 + Me]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${se(T[Q * 6 + Me])}</span>`).join(", ")}`).join(" | ")}${N("u", "local")}${N("T")}${N("u", "global")}${N("u", "local")}${Z(O, [
          ...A,
          ...A
        ])}${N("f", "local")}${N("k", "local")}${N("u", "local")}${N("f", "local")}${q.map((ae, Q) => `<span style="color:${Math.abs(ae) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${re[Q]}=${se(ae)}</span>`).join(", ")}${N("P", "1")}${N("N", "i")}${se(q[0])}${N("P", "7")}${N("N", "j")}${se(q[6])}${N("P", "2")}${N("V", "y,i")}${se(q[1])}${N("P", "8")}${N("V", "y,j")}${se(q[7])}${N("P", "3")}${N("V", "z,i")}${se(q[2])}${N("P", "9")}${N("V", "z,j")}${se(q[8])}${N("P", "4")}${N("M", "x,i")}${se(q[3])}${N("P", "10")}${N("M", "x,j")}${se(q[9])}${N("P", "5")}${N("M", "y,i")}${se(q[4])}${N("P", "11")}${N("M", "y,j")}${se(q[10])}${N("P", "6")}${N("M", "z,i")}${se(q[5])}${N("P", "12")}${N("M", "z,j")}${se(q[11])}${m ? m.map((ae) => se(ae)).join(", ") : "\u2014"}${p ? p.map((ae) => se(ae)).join(", ") : "\u2014"}${v ? v.map((ae) => se(ae)).join(", ") : "\u2014"}${M ? M.map((ae) => se(ae)).join(", ") : "\u2014"}${k ? k.map((ae) => se(ae)).join(", ") : "\u2014"}${P ? P.map((ae) => se(ae)).join(", ") : "\u2014"}`;
      } else if (u && c) {
        const m = (_z = u.normals) == null ? void 0 : _z.get(e), p = (_A = u.shearsY) == null ? void 0 : _A.get(e), v = (_B = u.shearsZ) == null ? void 0 : _B.get(e), M = (_C = u.torsions) == null ? void 0 : _C.get(e), k = (_D = u.bendingsY) == null ? void 0 : _D.get(e), P = (_E = u.bendingsZ) == null ? void 0 : _E.get(e);
        `${m ? m.map((A) => se(A)).join(", ") : "\u2014"}${p ? p.map((A) => se(A)).join(", ") : "\u2014"}${v ? v.map((A) => se(A)).join(", ") : "\u2014"}${M ? M.map((A) => se(A)).join(", ") : "\u2014"}${k ? k.map((A) => se(A)).join(", ") : "\u2014"}${P ? P.map((A) => se(A)).join(", ") : "\u2014"}`;
      } else if (u && !c) {
        const m = (_F = u.bendingXX) == null ? void 0 : _F.get(e), p = (_G = u.bendingYY) == null ? void 0 : _G.get(e), v = (_H = u.bendingXY) == null ? void 0 : _H.get(e), M = (_I = u.membraneXX) == null ? void 0 : _I.get(e), k = (_J = u.membraneYY) == null ? void 0 : _J.get(e), P = (_K = u.membraneXY) == null ? void 0 : _K.get(e);
        `${m ? m.map((A) => se(A)).join(", ") : "\u2014"}${p ? p.map((A) => se(A)).join(", ") : "\u2014"}${v ? v.map((A) => se(A)).join(", ") : "\u2014"}${M ? M.map((A) => se(A)).join(", ") : "\u2014"}${k ? k.map((A) => se(A)).join(", ") : "\u2014"}${P ? P.map((A) => se(A)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Vt = qa(e, o, n, a, i, u), Vt.id = "fem-inspect-panel", document.body.appendChild(Vt), (_L = Vt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => mo());
      const y = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = vo(to(s[1], s[0])), p = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(e)) ?? 0, v = ((_b2 = a.areas) == null ? void 0 : _b2.get(e)) ?? 0, M = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(e)) ?? 0, k = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0, P = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(e)) ?? 0, A = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(e)) ?? 0;
        return Qs(p, v, M, k, P, A, m);
      })() : void 0;
      Vt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (p) => {
          p.stopPropagation();
          const v = m.dataset.full;
          if (v === "kLocal" && S) {
            const M = c ? xs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Tn(`Elemento ${e} \u2014 Rigidez Local k_local`, M, Ln(S, F), y);
          } else if (v === "T" && E) Tn(`Elemento ${e} \u2014 Transformaci\xF3n T`, w, Ln(E, F));
          else if (v === "kGlobal" && I) {
            const M = c ? xs() : "<em>Shell 18\xD718</em>";
            Tn(`Elemento ${e} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, Ln(I, F), y);
          }
        });
      });
    }
    function ys() {
      const l = [], s = [];
      for (let x = 0; x <= 8; x++) {
        const f = x / 8, g = 30 * f, E = 12 * (1 - f) * (1 - f * 0.3) / 2, I = l.length;
        if (l.push([
          -E,
          -E,
          g
        ]), l.push([
          E,
          -E,
          g
        ]), l.push([
          E,
          E,
          g
        ]), l.push([
          -E,
          E,
          g
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
          const F = I - 4;
          for (let y = 0; y < 4; y++) s.push([
            F + y,
            I + y
          ]);
          s.push([
            F,
            I + 1
          ]), s.push([
            F + 1,
            I + 2
          ]), s.push([
            F + 2,
            I + 3
          ]), s.push([
            F + 3,
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
        const x = Ht(l, s, {
          supports: c,
          loads: i
        }, w);
        x && t.deformOutputs && (t.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function $s() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const x = w / 20, f = 20 * x, g = 20 * (1 - Math.pow(2 * x - 1, 2)), S = 2;
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
        const w = Ht(l, s, {
          supports: c,
          loads: a
        }, $);
        w && t.deformOutputs && (t.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ws() {
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
        const g = 60 * f / 16, S = c.length;
        c.push([
          g,
          -6 / 2,
          0
        ]);
        const E = c.length;
        c.push([
          g,
          6 / 2,
          0
        ]);
        const I = c.length;
        c.push([
          g,
          -6 / 2,
          28
        ]);
        const F = c.length;
        c.push([
          g,
          6 / 2,
          28
        ]), d.push(I, F), a.push([
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
          F
        ]), a.push([
          I,
          F
        ]);
      }
      for (const f of d) {
        const g = c[f][0];
        for (let S = 0; S <= 16; S++) {
          const E = 60 * S / 16;
          if (Math.abs(E - g) > 60 * 0.05 && Math.abs(E - g) < 60 * 0.45) {
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
        elasticities: new Map(a.map((f, g) => [
          g,
          $
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
      t.elementInputs && (t.elementInputs.val = x);
      try {
        const f = Ht(c, a, {
          supports: r,
          loads: b
        }, x);
        f && t.deformOutputs && (t.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Puente atirantado: ${c.length} nodos, ${a.length} elem, span=60m`);
    }
    function Ms() {
      const c = [], a = [];
      for (let g = 0; g <= 12; g++) {
        const S = g * 3.5, E = g * 5 * Math.PI / 180;
        for (let I = 0; I < 6; I++) {
          const F = E + 2 * Math.PI * I / 6, y = 5 * Math.cos(F), m = 5 * Math.sin(F);
          c.push([
            y,
            m,
            S
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const S = g * 6;
        for (let E = 0; E < 6; E++) a.push([
          S + E,
          S + (E + 1) % 6
        ]);
        if (g < 12) {
          const E = (g + 1) * 6;
          for (let I = 0; I < 6; I++) a.push([
            S + I,
            E + I
          ]), a.push([
            S + I,
            E + (I + 1) % 6
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
        const E = g * 6;
        for (let I = 0; I < 6; I++) a.push([
          S,
          E + I
        ]);
      }
      const i = 13 * 6;
      for (let g = 0; g < 12; g++) a.push([
        i + g,
        i + g + 1
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let g = 0; g < 6; g++) u.set(g, [
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
      for (let g = 1; g <= 12; g++) {
        const S = 10 * g / 12, E = g * 6;
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
          $
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
          x
        ]))
      };
      t.elementInputs && (t.elementInputs.val = f);
      try {
        const g = Ht(c, a, {
          supports: u,
          loads: d
        }, f);
        g && t.deformOutputs && (t.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Torre Twist: ${c.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ss() {
      const s = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const g = f / 20, S = f * 3;
        let E = 8 * (1 - g * 0.7);
        g > 0.4 && (E *= 0.85), g > 0.7 && (E *= 0.7);
        const I = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let F = 0; F < 3; F++) {
          const y = F * 2 * Math.PI / 3 - Math.PI / 2, m = E * Math.cos(y), p = E * Math.sin(y), v = s.length;
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
        for (let F = 0; F < 3; F++) {
          const y = I + 1 + F * 2, m = I + 1 + (F + 1) % 3 * 2;
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
        const g = f * i, S = 5 * f / 20;
        u.set(g, [
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
        elasticities: new Map(c.map((f, g) => [
          g,
          d
        ])),
        shearModuli: new Map(c.map((f, g) => [
          g,
          r
        ])),
        areas: new Map(c.map((f, g) => [
          g,
          b
        ])),
        momentsOfInertiaZ: new Map(c.map((f, g) => [
          g,
          $
        ])),
        momentsOfInertiaY: new Map(c.map((f, g) => [
          g,
          $
        ])),
        torsionalConstants: new Map(c.map((f, g) => [
          g,
          w
        ]))
      };
      t.elementInputs && (t.elementInputs.val = x);
      try {
        const f = Ht(s, c, {
          supports: a,
          loads: u
        }, x);
        f && t.deformOutputs && (t.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Es() {
      const e = [], o = [];
      for (let b = 0; b < 3; b++) {
        const $ = b * 12, w = 15 - b * 2, x = 20 - b * 3, f = 8 - b, g = e.length;
        for (let E = 0; E <= 4; E++) {
          const I = E / 4, F = -f / 2 + f * I, y = x * (1 - I * I * 0.3);
          for (let m = 0; m <= 12; m++) {
            const p = m / 12, v = $ + y * p, M = w * Math.sin(Math.PI * p) * (1 - I * I * 0.5), k = F;
            e.push([
              v,
              k,
              M
            ]);
          }
        }
        const S = 13;
        for (let E = 0; E < 4; E++) for (let I = 0; I < 12; I++) {
          const F = g + E * S + I, y = g + E * S + I + 1, m = g + (E + 1) * S + I + 1, p = g + (E + 1) * S + I;
          o.push([
            F,
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
        const b = Ht(e, o, {
          supports: s,
          loads: c
        }, r);
        b && t.deformOutputs && (t.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Sydney Opera: ${e.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Is() {
      const l = [], s = [];
      for (let x = 0; x <= 15; x++) {
        const f = x / 15, g = x * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const E = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let I = 0; I < 12; I++) {
            const F = 2 * Math.PI * I / 12;
            l.push([
              Math.max(E, 1) * Math.cos(F),
              Math.max(E, 1) * Math.sin(F),
              g
            ]);
          }
        } else for (let E = 0; E < 12; E++) {
          const I = 2 * Math.PI * E / 12;
          l.push([
            S * Math.cos(I),
            S * Math.sin(I),
            g
          ]);
        }
      }
      for (let x = 0; x < 15; x++) {
        const f = x * 12, g = (x + 1) * 12;
        for (let E = 0; E < 12; E++) s.push([
          f + E,
          f + (E + 1) % 12
        ]);
        const S = x % 2 === 0 ? 1 : -1;
        for (let E = 0; E < 12; E++) {
          const I = (E + S + 12) % 12;
          s.push([
            f + E,
            g + I
          ]), s.push([
            f + E,
            g + E
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
        const f = x * 12, g = 3 * x / 15;
        for (let S = 0; S < 12; S += 3) i.set(f + S, [
          g,
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
        const x = Ht(l, s, {
          supports: a,
          loads: i
        }, w);
        x && t.deformOutputs && (t.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => yt(), 50), Ge(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
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
        const o = (g) => {
          var _a3;
          return parseFloat(((_a3 = e.querySelector(`#${g}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, c = o("po-fy") * 1e3, a = o("po-H"), i = o("po-L"), u = o("po-As") * 1e-4, d = o("po-nbar"), r = o("po-drift") / 100, b = o("po-ncycles"), $ = e.querySelector("#pushover-status");
        $.textContent = "Generando historia de desplazamientos...";
        const w = [], x = r * a, f = 40;
        for (let g = 1; g <= b; g++) {
          const S = x * g / b;
          for (let E = 0; E <= f; E++) w.push(S * Math.sin(2 * Math.PI * E / f));
        }
        $.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await ra(async () => {
            const { cyclicPushover: E } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: E
            };
          }, __vite__mapDeps([0,1]), import.meta.url), S = await g({
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
        } catch (g) {
          $.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
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
      const x = b - r, f = w - $, g = (F) => i.left + (F - r) / x * u, S = (F) => i.top + d - (F - $) / f * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, r < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(g(0), i.top), s.lineTo(g(0), i.top + d), s.stroke()), $ < 0 && w > 0 && (s.beginPath(), s.moveTo(i.left, S(0)), s.lineTo(i.left + u, S(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(g(o[0]), S(n[0]));
      for (let F = 1; F < o.length; F++) s.lineTo(g(o[F]), S(n[F]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + u / 2, a - 5), s.save(), s.translate(12, i.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const E = x / 5;
      for (let F = 0; F <= 5; F++) {
        const y = r + E * F;
        s.fillText((y * 1e3).toFixed(1), g(y), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const I = f / 5;
      for (let F = 0; F <= 5; F++) {
        const y = $ + I * F;
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
      let b = 0, $ = 0, w = -d, x = d, f = 0, g = 0, S = 0, E = 0, I = 0, F = 0;
      const y = [];
      for (const K of u) {
        let re = w, ae = x, Q = f, ce = g, Me = S, Pe = E, Ne = I, H = F, de;
        const ie = K - b;
        if (Math.abs(ie) < 1e-20) {
          y.push($);
          continue;
        }
        if ((H === 0 || H === 3) && (ie < 0 ? (H = 2, ce = -d, Me = -o, Q = ce, Pe = 0, Ne = 0) : (H = 1, ce = d, Me = o, Q = ce, Pe = 0, Ne = 0)), H === 2 && ie > 0) {
          H = 1, Pe = b, Ne = $, b < re && (re = b);
          const Ce = (ae - re) / (2 * 1 * d), De = 1 + 0 * Math.pow(Ce, 0.8);
          ce = (o * De - r * d * De - Ne + n * Pe) / (n - r), Me = o * De + r * (ce - d * De), Q = ae;
        } else if (H === 1 && ie < 0) {
          H = 2, Pe = b, Ne = $, b > ae && (ae = b);
          const Ce = (ae - re) / (2 * 1 * d), De = 1 + 0 * Math.pow(Ce, 0.8);
          ce = (-o * De + r * d * De - Ne + n * Pe) / (n - r), Me = -o * De + r * (ce + d * De), Q = re;
        }
        const te = Math.abs((Q - ce) / d);
        let J = s - 0.925 * te / (0.15 + te);
        J < 0.1 && (J = 0.1);
        const pe = (K - Pe) / (ce - Pe), Ee = 1 + Math.pow(Math.abs(pe), J), ne = Math.pow(Ee, 1 / J);
        de = l * pe + (1 - l) * pe / ne, de = de * (Me - Ne) + Ne, y.push(de), b = K, $ = de, w = re, x = ae, f = Q, g = ce, S = Me, E = Pe, I = Ne, F = H;
      }
      const m = e.querySelector("#nl-canvas"), p = m.getContext("2d"), v = m.width, M = m.height;
      p.clearRect(0, 0, v, M);
      const k = Math.max(...u.map(Math.abs)), P = Math.max(...y.map(Math.abs)), A = (v - 40) / (2 * k), T = (M - 40) / (2 * P), O = v / 2, q = M / 2;
      p.strokeStyle = "#444", p.lineWidth = 1, p.beginPath(), p.moveTo(20, q), p.lineTo(v - 20, q), p.stroke(), p.beginPath(), p.moveTo(O, 20), p.lineTo(O, M - 20), p.stroke(), p.fillStyle = "#888", p.font = "10px monospace", p.textAlign = "center", p.fillText("\u03B5 (strain)", v - 40, q - 5), p.fillText("\u03C3 (stress)", O + 30, 15), p.fillText(`\xB1${(k * 100).toFixed(1)}%`, v - 30, q + 12), p.fillText(`\xB1${(P / 1e3).toFixed(0)} MPa`, O + 40, 30), p.strokeStyle = "#00ccff", p.lineWidth = 1.5, p.beginPath();
      for (let K = 0; K < u.length; K++) {
        const re = O + u[K] * A, ae = q - y[K] * T;
        K === 0 ? p.moveTo(re, ae) : p.lineTo(re, ae);
      }
      p.stroke(), p.strokeStyle = "#ff333366", p.lineWidth = 1, p.setLineDash([
        4,
        4
      ]), p.beginPath(), p.moveTo(20, q - o * T), p.lineTo(v - 20, q - o * T), p.stroke(), p.beginPath(), p.moveTo(20, q + o * T), p.lineTo(v - 20, q + o * T), p.stroke(), p.setLineDash([]), p.fillStyle = "#ff6666", p.font = "9px monospace", p.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, q - o * T - 5);
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
        d === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : d === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : d === "W" || d === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : d === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : d === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, e.forEach((b) => me.set(b, {
          ...r
        })), o.remove(), Io = null, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        e.forEach((d) => me.delete(d)), o.remove(), Io = null, oo(), t.elementInputs.val = {
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
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), u = a > c && a > i, d = Math.sqrt(c * c + a * a + i * i), r = Ae.get(e) ?? 0, b = (_c = (_b = (_a2 = t.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(e), $ = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
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
        w.remove(), ko = null, mo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        V.add(e), w.remove(), ko = null, mo(), ve();
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
        const d = Ue();
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
        const w = Math.min(u, r), x = Math.max(u, r), f = Math.min(d, b), g = Math.max(d, b), S = t.nodes.val, E = t.elements.val, I = [];
        for (let F = 0; F < E.length; F++) {
          const y = E[F], m = y.map((p) => c(S[p])).filter(Boolean);
          if (m.length !== 0) if ($) m.every((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= g) && I.push(F);
          else {
            if (m.some((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= g)) {
              I.push(F);
              continue;
            }
            if (y.length === 2) {
              const v = m[0], M = m[1];
              i(v.x, v.y, M.x, M.y, w, f, x, g) && I.push(F);
            }
          }
        }
        return I;
      }
      function i(u, d, r, b, $, w, x, f) {
        const g = (E, I) => E >= $ && E <= x && I >= w && I <= f;
        if (g(u, d) || g(r, b)) return true;
        const S = (E, I, F, y, m, p, v, M) => {
          const k = (F - E) * (M - p) - (y - I) * (v - m);
          if (Math.abs(k) < 1e-10) return false;
          const P = ((m - E) * (M - p) - (p - I) * (v - m)) / k, A = ((m - E) * (y - I) - (p - I) * (F - E)) / k;
          return P >= 0 && P <= 1 && A >= 0 && A <= 1;
        };
        return S(u, d, r, b, $, w, x, w) || S(u, d, r, b, x, w, x, f) || S(u, d, r, b, $, f, x, f) || S(u, d, r, b, $, w, $, f);
      }
      o.addEventListener("mousedown", (u) => {
        qt && (n = {
          x: u.offsetX,
          y: u.offsetY
        });
      }), o.addEventListener("mousemove", (u) => {
        if (Jt) {
          const r = Ue();
          if (!r) return;
          const b = ms(u.clientX, u.clientY, r.camera, r.rendererElm);
          if (ft.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== uo && Ws(b.nodeIdx), ft.track && uo !== null && b.worldPos && b.snapType !== "node") {
            const $ = Ys(b.worldPos, uo);
            $ && (b.worldPos = $, b.snapType = "grid");
          }
          if (uo !== null && b.worldPos) {
            const $ = t.nodes.val[uo];
            $ && us(u.clientX, u.clientY, new Se(...$), b.worldPos);
          } else if (it !== null && b.worldPos) {
            const $ = t.nodes.val[it];
            $ && us(u.clientX, u.clientY, new Se(...$), b.worldPos);
          } else Rt && (Rt.remove(), Rt = null);
          b.nodeIdx, bs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Bt && !qt) return;
        if (qt && n) {
          const r = u.offsetX - n.x, b = u.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const $ = r > 0, w = Math.min(n.x, u.offsetX), x = Math.min(n.y, u.offsetY), f = Math.abs(r), g = Math.abs(b);
            l.style.left = w + "px", l.style.top = x + "px", l.style.width = f + "px", l.style.height = g + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = kn(u);
        if (d >= 0) hs(d), o.style.cursor = "pointer";
        else {
          if (Ft) {
            const r = Ue();
            r == null ? void 0 : r.scene.remove(Ft), Ft = null, r == null ? void 0 : r.render();
          }
          o.style.cursor = qt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (u) => {
        if (qt && n) {
          const d = u.offsetX - n.x, r = u.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(r) > s) {
            const b = d > 0, $ = a(n.x, n.y, u.offsetX, u.offsetY, b);
            u.ctrlKey || u.metaKey || (at.clear(), lo()), $.forEach((x) => {
              at.has(x) || (at.add(x), Sn(x));
            }), io();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (u) => {
        if (Jt) {
          const d = Ue();
          if (!d) return;
          const r = ms(u.clientX, u.clientY, d.camera, d.rendererElm);
          (r.worldPos || r.nodeIdx !== null) && (Js(r), bs(r));
          return;
        }
        if (qt) {
          if (l) return;
          const d = kn(u), r = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (r) if (at.has(d)) {
              at.delete(d);
              const b = ao.findIndex(($) => $.__elemIdx === d);
              if (b >= 0) {
                const $ = Ue();
                $ == null ? void 0 : $.scene.remove(ao[b]), ao[b].geometry.dispose(), ao[b].material.dispose(), ao.splice(b, 1), $ == null ? void 0 : $.render();
              }
            } else at.add(d), Sn(d);
            else at.clear(), lo(), at.add(d), Sn(d);
            io();
          } else r || (at.clear(), lo(), io());
          return;
        }
        if (Bt) {
          const d = kn(u);
          d >= 0 && (hs(d), ia(d));
        }
      });
    }, 500), qo.derive(() => {
      var _a2;
      t.nodes.val, t.elements.val, (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, Ge();
    }), We.modal = (e) => {
      var _a2, _b;
      if (e === void 0 && (e = !ge), ge = e, (_a2 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ge), ge) {
        const n = Ue();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Oe = n.settings.loads.rawVal, n.settings.loads.val = false), mn(), ye.querySelector("#cad3d-mode-prev").style.display = "", ye.querySelector("#cad3d-mode-next").style.display = "", ye.querySelector("#cad3d-mode-label").style.display = "";
      } else bn(), ye.querySelector("#cad3d-mode-prev").style.display = "none", ye.querySelector("#cad3d-mode-next").style.display = "none", ye.querySelector("#cad3d-mode-label").style.display = "none", L && L !== "placa-q4" && L !== "placa-3q" && ve(), setTimeout(() => {
        var _a3;
        const n = Ue();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Oe && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ge ? "ON" : "OFF"}`);
    }, We.setMode = (e) => {
      var _a2;
      if (!(X == null ? void 0 : X.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(e, X.modeShapes.length - 1));
      const o = X.modeShapes[xe], { extent: n } = no();
      let l = 0;
      for (let c = 0; c < U.length; c++) {
        const a = o[c * 6] || 0, i = o[c * 6 + 1] || 0, u = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + u * u));
      }
      be = l > 1e-12 ? n * 0.05 / l : 1, Ro();
      const s = ye.querySelector("#cad3d-mode-label");
      s && X.frequencies && (s.textContent = `Modo ${xe + 1} \u2014 ${X.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = X.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = We, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ye), document.body.appendChild(ke.div);
    }, 0), setTimeout(() => {
      t.nodes.val.length === 0 && (Ve("edificio"), ve(), cs("edificio"));
    }, 100), document.body.appendChild(_a());
    const ks = document.createElement("span");
    return ks.style.display = "none", ks;
  };
});
export {
  __tla,
  As as a,
  Ia as c,
  ol as g
};
