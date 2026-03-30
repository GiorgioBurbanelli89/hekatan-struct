const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { _ as la, p as Cn, m as ia, d as Ht, s as ra, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Co, P as Ho, g as ca, a as da, o as pa } from "./theme-CzzIlc4y.js";
import { V as Se, P as co, R as Is, b as ks, B as Dt, c as fa, d as zo, e as Lo, f as ua, S as ma, M as ba, g as ga, F as bo, a as To, L as go, h as ha, G as xa, A as Go, i as Jo, T as qn, j as Vo, k as Xo, C as va, l as ya } from "./Text-Cin90tvN.js";
import { g as tn, b as on, a as Ao } from "./analyze-B6dp1uvy.js";
import { g as eo, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as vo, s as to, m as jt, t as _n } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let Ts, Sa, el;
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
  const Nn = [
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
  function $a(t, h) {
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
    const _ = Nn.find((Y) => Y.id === t), k = qo.find((Y) => Y.id === h), W = _.toKN, R = k.toM, G = (Y, ge, z) => z / (Math.pow(W, Y) * Math.pow(R, ge));
    let D, B;
    switch (t) {
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
      id: `${t}-${h}`,
      label: `${_.label}, ${k.label}`,
      force: _.label,
      length: k.label,
      stress: $a(t, h),
      moment: `${_.label}\xB7${k.label}`,
      E: G(1, -2, ho.E),
      G: G(1, -2, ho.G),
      A: G(0, 2, ho.A),
      Iz: G(0, 4, ho.Iz),
      Iy: G(0, 4, ho.Iy),
      J: G(0, 4, ho.J),
      rho: G(1, -4, ho.rho),
      spanRange: k.spanRange,
      heightRange: k.heightRange,
      defaultSpan: k.defaultSpan,
      defaultHeight: k.defaultHeight,
      defaultForce: D,
      forceRange: B,
      galponSpan: k.galponSpan,
      galponLength: k.galponLength,
      galponHeight: k.galponHeight,
      galponRise: k.galponRise
    };
  }
  xo("kN", "m"), xo("kip", "in");
  function Ko() {
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
  function wa(t) {
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
  function Ma(t) {
    const h = t.force, [_, k, W] = t.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CV (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: t.defaultForce,
          min: _,
          max: k,
          step: W,
          label: `Ex sismo (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: t.defaultForce * 3,
          min: _,
          max: k,
          step: W,
          label: `Ex sismo (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: k,
          step: W,
          label: `Ex sismo (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: W,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: _,
          max: k,
          step: W,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: k,
          step: W,
          label: `Ey sismo (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: _,
          max: 0,
          step: W,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: _,
          max: 0,
          step: W,
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
          step: W,
          label: `CM (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: _,
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
  Sa = function() {
    const t = document.createElement("div");
    t.id = "modal-results", t.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let h = false;
    function _(k, W) {
      var _a2, _b;
      if (!k.frequencies || k.frequencies.length === 0) {
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
      for (const B of R) D += `<th style="padding:2px 5px">${B}</th>`;
      if (D += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, k.frequencies.forEach((B, Y) => {
        var _a3;
        const ge = B > 0 ? 1 / B : 0, z = B * 2 * Math.PI, Q = ((_a3 = k.massParticipation) == null ? void 0 : _a3[Y]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ye = 0; ye < 6; ye++) G[ye] += Q[ye];
        D += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${Y + 1}</td>
  <td style="padding:2px 6px; text-align:right">${B.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ge.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ye = 0; ye < 6; ye++) {
          const ce = (Q[ye] * 100).toFixed(1), ee = Q[ye] > 0.5 ? "#f00" : Q[ye] > 0.1 ? "#ff0" : "#0f0";
          D += `<td style="padding:2px 5px; text-align:right; color:${ee}">${ce}%</td>`;
        }
        D += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(G[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[5] * 100).toFixed(1)}%</td></tr>`;
      }), D += "</table></div>", t.innerHTML = D, h) {
        const B = t.querySelector("#modal-body"), Y = t.querySelector("#modal-minimize");
        B && (B.style.display = "none"), Y && (Y.textContent = "\u25A2", Y.title = "Restaurar");
      }
      (_a2 = t.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        h = !h;
        const B = t.querySelector("#modal-body"), Y = t.querySelector("#modal-minimize");
        h ? (B.style.display = "none", Y.textContent = "\u25A2", Y.title = "Restaurar") : (B.style.display = "block", Y.textContent = "\u25AC", Y.title = "Minimizar");
      }), (_b = t.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const B = [];
        B.push(`Modal Analysis \u2014 ${W.title}`);
        const Y = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${R.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        B.push(Y), B.push("-".repeat(Y.length));
        const ge = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        k.frequencies.forEach((Q, ye) => {
          var _a3;
          const ce = Q > 0 ? 1 / Q : 0, ee = Q * 2 * Math.PI, ne = ((_a3 = k.massParticipation) == null ? void 0 : _a3[ye]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Te = 0; Te < 6; Te++) ge[Te] += ne[Te];
          const de = ne.map((Te) => ((Te * 100).toFixed(1) + "%").padStart(6)).join(" ");
          B.push(`${String(ye + 1).padStart(4)}  ${Q.toFixed(4).padStart(9)}  ${ce.toFixed(4).padStart(9)}  ${ee.toFixed(2).padStart(9)}  ${de}  ${(ge[0] * 100).toFixed(1).padStart(5)}%  ${(ge[1] * 100).toFixed(1).padStart(5)}%  ${(ge[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(B.join(`
`));
        const z = t.querySelector("#modal-copy");
        z.textContent = "\u2713", setTimeout(() => z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: t,
      render: _
    };
  };
  const xe = 64516e-8, T = 416231e-12, H = 0.0254, po = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * xe,
      Iz: 16.4 * T,
      Iy: 2.2 * T,
      J: 0.0405 * T,
      d: 5.9 * H,
      bf: 3.94 * H
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * xe,
      Iz: 29.1 * T,
      Iy: 9.32 * T,
      J: 0.103 * T,
      d: 5.99 * H,
      bf: 5.99 * H
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * xe,
      Iz: 41.4 * T,
      Iy: 13.3 * T,
      J: 0.204 * T,
      d: 6.2 * H,
      bf: 6.02 * H
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * xe,
      Iz: 30.8 * T,
      Iy: 2.09 * T,
      J: 0.0426 * T,
      d: 7.89 * H,
      bf: 3.94 * H
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * xe,
      Iz: 61.9 * T,
      Iy: 7.97 * T,
      J: 0.172 * T,
      d: 8.14 * H,
      bf: 5.25 * H
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * xe,
      Iz: 82.7 * T,
      Iy: 18.3 * T,
      J: 0.346 * T,
      d: 7.93 * H,
      bf: 6.5 * H
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * xe,
      Iz: 110 * T,
      Iy: 37.1 * T,
      J: 0.536 * T,
      d: 8 * H,
      bf: 7.995 * H
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 146 * T,
      Iy: 49.1 * T,
      J: 0.871 * T,
      d: 8.25 * H,
      bf: 8.07 * H
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 184 * T,
      Iy: 60.9 * T,
      J: 1.45 * T,
      d: 8.5 * H,
      bf: 8.11 * H
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 272 * T,
      Iy: 88.6 * T,
      J: 3.54 * T,
      d: 9 * H,
      bf: 8.28 * H
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * xe,
      Iz: 53.8 * T,
      Iy: 2.18 * T,
      J: 0.0547 * T,
      d: 9.87 * H,
      bf: 3.96 * H
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 118 * T,
      Iy: 11.4 * T,
      J: 0.239 * T,
      d: 10.17 * H,
      bf: 5.75 * H
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * xe,
      Iz: 171 * T,
      Iy: 36.6 * T,
      J: 0.583 * T,
      d: 9.73 * H,
      bf: 7.96 * H
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * xe,
      Iz: 272 * T,
      Iy: 93.4 * T,
      J: 1.39 * T,
      d: 9.98 * H,
      bf: 10 * H
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * xe,
      Iz: 394 * T,
      Iy: 134 * T,
      J: 3.56 * T,
      d: 10.4 * H,
      bf: 10.13 * H
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * xe,
      Iz: 623 * T,
      Iy: 207 * T,
      J: 10.9 * T,
      d: 11.1 * H,
      bf: 10.34 * H
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * xe,
      Iz: 88.6 * T,
      Iy: 2.36 * T,
      J: 0.0704 * T,
      d: 11.91 * H,
      bf: 3.97 * H
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * xe,
      Iz: 156 * T,
      Iy: 4.66 * T,
      J: 0.293 * T,
      d: 12.31 * H,
      bf: 4.03 * H
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * xe,
      Iz: 204 * T,
      Iy: 17.3 * T,
      J: 0.3 * T,
      d: 12.22 * H,
      bf: 6.49 * H
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 310 * T,
      Iy: 44.1 * T,
      J: 0.906 * T,
      d: 11.94 * H,
      bf: 8.01 * H
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * xe,
      Iz: 425 * T,
      Iy: 95.8 * T,
      J: 1.58 * T,
      d: 12.06 * H,
      bf: 9.99 * H
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * xe,
      Iz: 597 * T,
      Iy: 195 * T,
      J: 4.05 * T,
      d: 12.25 * H,
      bf: 12.04 * H
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * xe,
      Iz: 833 * T,
      Iy: 270 * T,
      J: 8.44 * T,
      d: 12.71 * H,
      bf: 12.16 * H
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * xe,
      Iz: 1070 * T,
      Iy: 345 * T,
      J: 16 * T,
      d: 13.12 * H,
      bf: 12.32 * H
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 199 * T,
      Iy: 7 * T,
      J: 0.208 * T,
      d: 13.74 * H,
      bf: 5 * H
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * xe,
      Iz: 291 * T,
      Iy: 19.6 * T,
      J: 0.38 * T,
      d: 13.84 * H,
      bf: 6.73 * H
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * xe,
      Iz: 385 * T,
      Iy: 26.7 * T,
      J: 0.798 * T,
      d: 14.1 * H,
      bf: 6.77 * H
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 485 * T,
      Iy: 51.4 * T,
      J: 1.45 * T,
      d: 13.79 * H,
      bf: 8.03 * H
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * xe,
      Iz: 640 * T,
      Iy: 107 * T,
      J: 2.19 * T,
      d: 13.89 * H,
      bf: 9.99 * H
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * xe,
      Iz: 882 * T,
      Iy: 148 * T,
      J: 5.07 * T,
      d: 14.31 * H,
      bf: 10.13 * H
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * xe,
      Iz: 1240 * T,
      Iy: 447 * T,
      J: 7.12 * T,
      d: 14.32 * H,
      bf: 14.61 * H
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * xe,
      Iz: 1530 * T,
      Iy: 548 * T,
      J: 12.3 * T,
      d: 14.66 * H,
      bf: 14.73 * H
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * xe,
      Iz: 2140 * T,
      Iy: 838 * T,
      J: 23.7 * T,
      d: 15.22 * H,
      bf: 15.65 * H
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * xe,
      Iz: 301 * T,
      Iy: 9.59 * T,
      J: 0.262 * T,
      d: 15.69 * H,
      bf: 5.5 * H
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * xe,
      Iz: 448 * T,
      Iy: 24.5 * T,
      J: 0.545 * T,
      d: 15.86 * H,
      bf: 6.99 * H
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 659 * T,
      Iy: 37.2 * T,
      J: 1.52 * T,
      d: 16.26 * H,
      bf: 7.07 * H
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 954 * T,
      Iy: 119 * T,
      J: 2.39 * T,
      d: 16.33 * H,
      bf: 10.24 * H
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * xe,
      Iz: 1300 * T,
      Iy: 163 * T,
      J: 5.45 * T,
      d: 16.75 * H,
      bf: 10.37 * H
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * xe,
      Iz: 510 * T,
      Iy: 15.3 * T,
      J: 0.506 * T,
      d: 17.7 * H,
      bf: 6 * H
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 800 * T,
      Iy: 40.1 * T,
      J: 1.24 * T,
      d: 17.99 * H,
      bf: 7.5 * H
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * xe,
      Iz: 1170 * T,
      Iy: 60.3 * T,
      J: 3.49 * T,
      d: 18.47 * H,
      bf: 7.64 * H
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * xe,
      Iz: 1750 * T,
      Iy: 201 * T,
      J: 5.86 * T,
      d: 18.59 * H,
      bf: 11.15 * H
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * xe,
      Iz: 843 * T,
      Iy: 20.7 * T,
      J: 0.77 * T,
      d: 20.66 * H,
      bf: 6.5 * H
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * xe,
      Iz: 1330 * T,
      Iy: 57.5 * T,
      J: 1.83 * T,
      d: 20.99 * H,
      bf: 8.24 * H
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * xe,
      Iz: 1830 * T,
      Iy: 81.4 * T,
      J: 4.34 * T,
      d: 21.43 * H,
      bf: 8.36 * H
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * xe,
      Iz: 2670 * T,
      Iy: 274 * T,
      J: 6.83 * T,
      d: 21.51 * H,
      bf: 12.34 * H
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * xe,
      Iz: 1350 * T,
      Iy: 29.1 * T,
      J: 1.18 * T,
      d: 23.57 * H,
      bf: 7.01 * H
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * xe,
      Iz: 2100 * T,
      Iy: 82.5 * T,
      J: 2.68 * T,
      d: 23.92 * H,
      bf: 8.99 * H
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * xe,
      Iz: 3100 * T,
      Iy: 259 * T,
      J: 4.72 * T,
      d: 24.06 * H,
      bf: 12.75 * H
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * xe,
      Iz: 4020 * T,
      Iy: 340 * T,
      J: 9.5 * T,
      d: 24.48 * H,
      bf: 12.86 * H
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * xe,
      Iz: 4580 * T,
      Iy: 391 * T,
      J: 12.6 * T,
      d: 24.74 * H,
      bf: 12.9 * H
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * xe,
      Iz: 5680 * T,
      Iy: 479 * T,
      J: 21.2 * T,
      d: 25.24 * H,
      bf: 12.9 * H
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * xe,
      Iz: 2850 * T,
      Iy: 106 * T,
      J: 2.81 * T,
      d: 26.71 * H,
      bf: 9.96 * H
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * xe,
      Iz: 4090 * T,
      Iy: 159 * T,
      J: 6.77 * T,
      d: 27.29 * H,
      bf: 10.07 * H
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * xe,
      Iz: 3610 * T,
      Iy: 115 * T,
      J: 3.06 * T,
      d: 29.53 * H,
      bf: 10.4 * H
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * xe,
      Iz: 4930 * T,
      Iy: 164 * T,
      J: 6.43 * T,
      d: 30.01 * H,
      bf: 10.5 * H
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * xe,
      Iz: 5900 * T,
      Iy: 187 * T,
      J: 5.3 * T,
      d: 32.86 * H,
      bf: 11.48 * H
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * xe,
      Iz: 7800 * T,
      Iy: 225 * T,
      J: 7 * T,
      d: 35.55 * H,
      bf: 11.95 * H
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * xe,
      Iz: 8.22 * T,
      Iy: 8.22 * T,
      J: 13.4 * T,
      d: 4 * H,
      bf: 4 * H
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * xe,
      Iz: 10.7 * T,
      Iy: 10.7 * T,
      J: 17.9 * T,
      d: 4 * H,
      bf: 4 * H
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * xe,
      Iz: 12.3 * T,
      Iy: 12.3 * T,
      J: 21 * T,
      d: 4 * H,
      bf: 4 * H
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 30.3 * T,
      Iy: 30.3 * T,
      J: 48.3 * T,
      d: 6 * H,
      bf: 6 * H
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 41.1 * T,
      Iy: 41.1 * T,
      J: 66.9 * T,
      d: 6 * H,
      bf: 6 * H
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * xe,
      Iz: 49.6 * T,
      Iy: 49.6 * T,
      J: 82.2 * T,
      d: 6 * H,
      bf: 6 * H
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * xe,
      Iz: 70.7 * T,
      Iy: 70.7 * T,
      J: 112 * T,
      d: 8 * H,
      bf: 8 * H
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 98 * T,
      Iy: 98 * T,
      J: 158 * T,
      d: 8 * H,
      bf: 8 * H
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * xe,
      Iz: 122 * T,
      Iy: 122 * T,
      J: 199 * T,
      d: 8 * H,
      bf: 8 * H
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 202 * T,
      Iy: 202 * T,
      J: 323 * T,
      d: 10 * H,
      bf: 10 * H
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * xe,
      Iz: 254 * T,
      Iy: 254 * T,
      J: 412 * T,
      d: 10 * H,
      bf: 10 * H
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * xe,
      Iz: 355 * T,
      Iy: 355 * T,
      J: 564 * T,
      d: 12 * H,
      bf: 12 * H
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * xe,
      Iz: 452 * T,
      Iy: 452 * T,
      J: 724 * T,
      d: 12 * H,
      bf: 12 * H
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * xe,
      Iz: 18 * T,
      Iy: 9.58 * T,
      J: 22.6 * T,
      d: 6 * H,
      bf: 4 * H
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * xe,
      Iz: 23.8 * T,
      Iy: 12.3 * T,
      J: 30.3 * T,
      d: 6 * H,
      bf: 4 * H
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 33.6 * T,
      Iy: 11.8 * T,
      J: 33 * T,
      d: 8 * H,
      bf: 4 * H
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 45.1 * T,
      Iy: 15 * T,
      J: 44.5 * T,
      d: 8 * H,
      bf: 4 * H
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * xe,
      Iz: 46.1 * T,
      Iy: 28.2 * T,
      J: 61.3 * T,
      d: 8 * H,
      bf: 6 * H
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * xe,
      Iz: 63 * T,
      Iy: 37.5 * T,
      J: 84.6 * T,
      d: 8 * H,
      bf: 6 * H
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 103 * T,
      Iy: 47.1 * T,
      J: 115 * T,
      d: 10 * H,
      bf: 6 * H
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 196 * T,
      Iy: 102 * T,
      J: 249 * T,
      d: 12 * H,
      bf: 8 * H
    }
  ];
  function Uo() {
    const t = {};
    return po.forEach((h, _) => {
      h.type === "W" && (t[h.name] = _);
    }), t;
  }
  function Zo() {
    const t = {};
    return po.forEach((h, _) => {
      h.type === "HSS" && (t[h.name] = _);
    }), t;
  }
  function Ea(t) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: h, elements: _, elementInputs: k, nodeInputs: W, deformOutputs: R } = t, G = h.length * 6, D = _.length, B = _.filter((ee) => ee.length === 2).length, Y = _.filter((ee) => ee.length >= 3).length, ge = document.createElement("div");
    ge.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${D} (${B} frames, ${Y} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${G}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((ee, ne) => {
      z += `<tr><td>${ne}</td><td>${Xe(ee[0])}</td><td>${Xe(ee[1])}</td><td>${Xe(ee[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((ee, ne) => {
      var _a3, _b2, _c2, _d2;
      const de = ee.length === 2, Te = ee.map((Qe) => h[Qe]), He = de ? vo(to(Te[1], Te[0])) : 0, Fe = ((_a3 = k.elasticities) == null ? void 0 : _a3.get(ne)) ?? 0, Je = ((_b2 = k.areas) == null ? void 0 : _b2.get(ne)) ?? 0, st = ((_c2 = k.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, je = ((_d2 = k.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      z += `<tr><td>${ne}</td><td>${de ? "Frame" : "Shell"}</td><td>${ee.join(" \u2192 ")}</td>`, z += `<td>${Xe(He)}</td><td>${Xe(Fe)}</td><td>${Xe(Je)}</td><td>${Xe(st)}</td><td>${Xe(je)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", B > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += ka(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ee = 0; ee < D; ee++) {
      const ne = _[ee], de = ne.map((Pt) => h[Pt]);
      if (!(ne.length === 2)) continue;
      const He = vo(to(de[1], de[0])), Fe = ((_a2 = k.elasticities) == null ? void 0 : _a2.get(ee)) ?? 0, Je = ((_b = k.areas) == null ? void 0 : _b.get(ee)) ?? 0, st = ((_c = k.momentsOfInertiaZ) == null ? void 0 : _c.get(ee)) ?? 0, je = ((_d = k.momentsOfInertiaY) == null ? void 0 : _d.get(ee)) ?? 0, Qe = ((_e = k.shearModuli) == null ? void 0 : _e.get(ee)) ?? 0, Me = ((_f = k.torsionalConstants) == null ? void 0 : _f.get(ee)) ?? 0;
      let Re = null, _e2 = null, et = null;
      try {
        Re = tn(de, k, ee), _e2 = on(de), et = jt(_n(_e2), jt(Re, _e2));
      } catch {
        continue;
      }
      const dt = to(de[1], de[0]), ot = dt[0] / He, ut = dt[1] / He, $t = dt[2] / He;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${ee}">\u25B6 Element ${ee} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${Xe(He)}</h3>`, z += `<div id="rpt-elem${ee}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${Xe(Fe)} &nbsp;&nbsp; A = ${Xe(Je)} &nbsp;&nbsp; I<sub>z</sub> = ${Xe(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Xe(je)} &nbsp;&nbsp; G = ${Xe(Qe)} &nbsp;&nbsp; J = ${Xe(Me)}<br/>`, z += `EA/L = ${Xe(Fe)}\xB7${Xe(Je)}/${Xe(He)} = <b>${Xe(Fe * Je / He)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Xe(Fe)}\xB7${Xe(st)}/${Xe(He)}\xB3 = <b>${Xe(12 * Fe * st / He ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Xe(Fe)}\xB7${Xe(je)}/${Xe(He)}\xB3 = <b>${Xe(12 * Fe * je / He ** 3)}</b><br/>`, z += `GJ/L = ${Xe(Qe)}\xB7${Xe(Me)}/${Xe(He)} = <b>${Xe(Qe * Me / He)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${Qo(ot)}, m = ${Qo(ut)}, n = ${Qo($t)}, D = ${Qo(Math.sqrt(ot ** 2 + ut ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += Fn(Re, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += Fn(_e2, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += Fn(et, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${D - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += za(_, h.length), z += "<h2>5. Boundary Conditions</h2>";
    const Q = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ye = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", W.supports && W.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of Q) z += `<th>${ee}</th>`;
      z += "</tr></thead><tbody>", W.supports.forEach((ee, ne) => {
        z += `<tr><td>${ne}</td>`, ee.forEach((de, Te) => {
          de && ye.push(ne * 6 + Te), z += `<td class="${de ? "fixed" : ""}">${de ? "Fixed" : "Free"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += `<div class="rpt-eq-small">Fixed DOFs: [${ye.join(", ")}] \u2192 ${ye.length} constraints<br/>`, z += `Free DOFs: ${G} \u2212 ${ye.length} = <b>${G - ye.length}</b></div>`, z += "<h3>5.2 Applied Loads</h3>", W.loads && W.loads.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ee = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of ee) z += `<th>${ne}</th>`;
      z += "</tr></thead><tbody>", W.loads.forEach((ne, de) => {
        z += `<tr><td>${de}</td>`, ne.forEach((Te) => {
          const He = Math.abs(Te) > 1e-10;
          z += `<td class="${He ? "nz" : ""}">${He ? Xe(Te) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", R == null ? void 0 : R.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of Q) z += `<th>${ee}</th>`;
      z += "</tr></thead><tbody>", R.deformations.forEach((ee, ne) => {
        z += `<tr><td>${ne}</td>`, ee.forEach((de) => {
          const Te = Math.abs(de) > 1e-10;
          z += `<td class="${Te ? "nz" : ""}">${Xe(de, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', R == null ? void 0 : R.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of Q) z += `<th>${ee}</th>`;
      z += "</tr></thead><tbody>", R.reactions.forEach((ee, ne) => {
        z += `<tr><td>${ne}</td>`, ee.forEach((de) => {
          const Te = Math.abs(de) > 1e-10;
          z += `<td class="${Te ? "nz-react" : ""}">${Te ? Xe(de, 4) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>7. Internal Forces</h2>", z += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", z += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', z += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', R == null ? void 0 : R.deformations) {
      const ee = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of ee) z += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of ee) z += `<th>${ne}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let ne = 0; ne < D; ne++) {
        const de = _[ne];
        if (de.length !== 2) continue;
        const Te = de.map((He) => h[He]);
        try {
          const He = tn(Te, k, ne), Fe = on(Te), Je = [];
          for (const Qe of de) {
            const Me = ((_g = R.deformations) == null ? void 0 : _g.get(Qe)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Je.push(...Me);
          }
          const st = jt(Fe, Je), je = jt(He, st);
          z += `<tr><td>${ne}</td><td>${de.join("\u2192")}</td>`;
          for (let Qe = 0; Qe < 12; Qe++) {
            const Me = Math.abs(je[Qe]) > 1e-10;
            z += `<td class="${Me ? "nz" : ""}">${Xe(je[Qe], 2)}</td>`;
          }
          z += "</tr>";
        } catch {
        }
      }
      z += "</tbody></table>";
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
    return ge.innerHTML = ce + z, (_h = ge.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ge.remove()), ge.querySelectorAll("[data-toggle]").forEach((ee) => {
      ee.addEventListener("click", () => {
        const ne = ee.dataset.toggle, de = ge.querySelector(`#rpt-${ne}`);
        if (de) {
          const Te = de.style.display !== "none";
          de.style.display = Te ? "none" : "", ee.textContent = ee.textContent.replace(/^[▼▶]/, Te ? "\u25B6" : "\u25BC");
        }
      });
    }), ge;
  }
  function Xe(t, h = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(h) : t.toFixed(h);
  }
  function Qo(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function Fn(t, h) {
    var _a2;
    const _ = Math.min(h, 12);
    let k = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let W = 0; W < _; W++) {
      k += "<tr>";
      for (let R = 0; R < _; R++) {
        const G = ((_a2 = t[W]) == null ? void 0 : _a2[R]) ?? 0, D = Math.abs(G) < 1e-10;
        k += `<td class="${D ? "z" : ""} ${W === R && !D ? "diag" : ""}">${D ? "0" : Ia(G)}</td>`;
      }
      k += "</tr>";
    }
    return k += "</table>", h > _ && (k += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${h}\xD7${h})</div>`), k += "</div>", k;
  }
  function Ia(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function ka() {
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
      for (let ye = 0; ye <= 80; ye++) {
        const ce = ye / 80, ee = 30 + ce * 540, ne = 180 / 2 - B.fn(ce) * 60;
        Y += (ye === 0 ? "M" : "L") + `${ee.toFixed(1)},${ne.toFixed(1)}`;
      }
      D += `<path d="${Y}" fill="none" stroke="${B.color}" stroke-width="2.5"/>`;
      const ge = 0.75, z = 30 + ge * 540 + 8, Q = 180 / 2 - B.fn(ge) * 60 - 6;
      D += `<text x="${z}" y="${Q}" fill="${B.color}" font-size="11" font-weight="bold" font-family="sans-serif">${B.name}</text>`;
    }
    return D += "</svg>", D;
  }
  function za(t, h) {
    const _ = h * 6, k = Math.min(_, 30);
    let W = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    W += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', W += "<tr><td></td>";
    for (let G = 0; G < k; G++) W += `<td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
    W += "</tr>";
    const R = Array.from({
      length: k
    }, () => Array(k).fill(0));
    for (let G = 0; G < t.length; G++) {
      const D = t[G].map((B) => B * 6);
      for (const B of D) for (const Y of D) for (let ge = 0; ge < 6; ge++) for (let z = 0; z < 6; z++) {
        const Q = B + ge, ye = Y + z;
        Q < k && ye < k && R[Q][ye]++;
      }
    }
    for (let G = 0; G < k; G++) {
      W += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
      for (let D = 0; D < k; D++) {
        const B = R[G][D], Y = B === 0 ? "#fff" : B === 1 ? "#e8f0fe" : B === 2 ? "#c6dcf5" : "#a0c4e8", ge = B === 0 ? "" : B.toString();
        W += `<td style="background:${Y};color:#003366">${ge}</td>`;
      }
      W += "</tr>";
    }
    return W += "</table></div>", _ > k && (W += `<div style="color:#888;font-size:9pt">(showing ${k}\xD7${k} of ${_}\xD7${_})</div>`), W;
  }
  let Pn = false;
  function La(t) {
    if (Pn || window.katex) {
      Pn = true, t();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const _ = document.createElement("script");
    _.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", _.onload = () => {
      Pn = true, t();
    }, document.head.appendChild(_);
  }
  function zs(t, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(t, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${t}</code>`;
  }
  function Ta(t, h, _, k, W, R) {
    var _a2, _b, _c, _d, _e, _f;
    const G = _[t], D = G.map((_e2) => h[_e2]), B = G.length === 2, Y = B ? vo(to(D[1], D[0])) : 0, ge = ((_a2 = k.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, z = ((_b = k.areas) == null ? void 0 : _b.get(t)) ?? 0, Q = ((_c = k.momentsOfInertiaZ) == null ? void 0 : _c.get(t)) ?? 0, ye = ((_d = k.momentsOfInertiaY) == null ? void 0 : _d.get(t)) ?? 0, ce = ((_e = k.shearModuli) == null ? void 0 : _e.get(t)) ?? 0, ee = ((_f = k.torsionalConstants) == null ? void 0 : _f.get(t)) ?? 0;
    let ne = null, de = null, Te = null;
    try {
      ne = tn(D, k, t), de = on(D), Te = jt(_n(de), jt(ne, de));
    } catch {
    }
    const He = B ? to(D[1], D[0]) : [
      0,
      0,
      0
    ], Fe = Y > 0 ? He[0] / Y : 0, Je = Y > 0 ? He[1] / Y : 0, st = Y > 0 ? He[2] / Y : 0, je = Math.sqrt(Fe ** 2 + Je ** 2), Qe = [];
    if ((W == null ? void 0 : W.deformations) && B) for (const _e2 of G) {
      const et = W.deformations.get(_e2) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Qe.push(...et);
    }
    let Me = [], Re = [];
    if (Qe.length === 12 && de && ne) {
      try {
        Me = jt(de, Qe);
      } catch {
        Me = Array(12).fill(0);
      }
      try {
        Re = jt(ne, Me);
      } catch {
        Re = Array(12).fill(0);
      }
    }
    return {
      elemIdx: t,
      elem: G,
      elmNodes: D,
      isFrame: B,
      L: Y,
      E: ge,
      A: z,
      Iz: Q,
      Iy: ye,
      G: ce,
      J: ee,
      kLocal: ne,
      T: de,
      kGlobal: Te,
      l: Fe,
      m: Je,
      n: st,
      D: je,
      uGlobal: Qe,
      uLocal: Me,
      fLocal: Re,
      dOut: W,
      aOut: R,
      totalNodes: h.length
    };
  }
  function Aa(t, h, _, k, W, R) {
    var _a2, _b;
    const G = Ta(t, h, _, k, W, R), D = document.createElement("div");
    return D.className = "er-panel", D.innerHTML = Pa + `
    <div class="er-header">
      <span class="er-badge">Element ${t}</span>
      <span class="er-type">${G.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${G.elem.join(" \u2192 ")} \u2014 L = ${Oe(G.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Ca(G)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Ls(G)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${qa(G)}</div>
  `, D.querySelectorAll(".er-tab").forEach((B) => {
      B.addEventListener("click", () => {
        D.querySelectorAll(".er-tab").forEach((ge) => ge.classList.remove("active")), B.classList.add("active");
        const Y = B.dataset.tab;
        D.querySelectorAll(".er-body").forEach((ge) => ge.style.display = "none"), D.querySelector(`#er-body-${Y}`).style.display = "";
      });
    }), (_a2 = D.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => D.remove()), (_b = D.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const B = D.classList.toggle("er-fullscreen-mode"), Y = D.querySelector("#er-fullscreen");
      Y && (Y.textContent = B ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const B = D.querySelector("#er-sf-canvas");
      B && On(B);
      const Y = D.querySelector("#er-sf-canvas-math");
      Y && On(Y);
    }, 50), La(() => {
      const B = D.querySelector("#er-body-math");
      B && (B.innerHTML = Ls(G)), setTimeout(() => {
        const Y = D.querySelector("#er-sf-canvas-math");
        Y && On(Y);
      }, 50), D.querySelectorAll(".er-deriv-header").forEach((Y) => {
        Y.addEventListener("click", () => {
          const ge = Y.dataset.toggle, z = D.querySelector(`#er-${ge}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), D;
  }
  function Ca(t) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${Oe(t.E)}</td><td>A</td><td>${Oe(t.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${Oe(t.Iz)}</td><td>I<sub>y</sub></td><td>${Oe(t.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${Oe(t.G)}</td><td>J</td><td>${Oe(t.J)}</td></tr>`, h += "</table>", t.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${t.kLocal.length}\xD7${t.kLocal.length})</div>`, h += Do(t.kLocal)), t.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += Do(t.T)), t.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += Do(t.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', t.uGlobal.length > 0) {
      const _ = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let k = 0; k < t.elem.length; k++) {
        h += `<div class="er-sub">Nodo ${t.elem[k]}: `;
        for (let W = 0; W < 6; W++) {
          const R = t.uGlobal[k * 6 + W];
          h += `${_[W]}=<span class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${Oe(R, 6)}</span> `;
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
      for (const k of _) h += `<th>${k}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let k = 0; k < 6; k++) h += `<td class="${Math.abs(t.fLocal[k]) > 1e-10 ? "nz" : ""}">${Oe(t.fLocal[k], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let k = 6; k < 12; k++) h += `<td class="${Math.abs(t.fLocal[k]) > 1e-10 ? "nz" : ""}">${Oe(t.fLocal[k], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function Ls(t) {
    if (!t.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const _ = (ge) => zs(ge), k = (ge) => zs(ge, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${k("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${_("\\text{Nodo } i")} = (${t.elmNodes[0].map((ge) => Oe(ge)).join(", ")})<br/>`, h += `${_("\\text{Nodo } j")} = (${t.elmNodes[1].map((ge) => Oe(ge)).join(", ")})<br/>`, h += `${k(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Oe(t.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${k("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${k("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${k("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${k("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${k("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${k("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${k("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, h += `<div class="er-eq">${k("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, h += `<div class="er-eq">${k("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${k("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${k(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Oe(t.E)} \\times ${Oe(t.A)} = \\mathbf{${Oe(t.E * t.A)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Oe(t.E)} \\times ${Oe(t.Iz)} = \\mathbf{${Oe(t.E * t.Iz)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Oe(t.E)} \\times ${Oe(t.Iy)} = \\mathbf{${Oe(t.E * t.Iy)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Oe(t.G)} \\times ${Oe(t.J)} = \\mathbf{${Oe(t.G * t.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${k("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const W = t.E * t.A / t.L, R = t.E * t.Iz / t.L ** 3, G = t.E * t.Iy / t.L ** 3, D = t.G * t.J / t.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${k("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${k("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${k("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Oe(t.E)}\\times${Oe(t.A)}}{${Oe(t.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${k(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Oe(W)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, h += `<div class="er-eq">${k("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${k("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${k("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${k("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${k("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Oe(t.E)} \\times ${Oe(t.Iz)}}{${Oe(t.L)}^3} = \\mathbf{${Oe(12 * R)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, h += `<div class="er-eq">${k(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Oe(t.G)}\\times${Oe(t.J)}}{${Oe(t.L)}} = \\mathbf{${Oe(D)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${k("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Oe(6 * t.E * t.Iz / t.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${k(`\\frac{EA}{L} = \\mathbf{${Oe(W)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Oe(12 * R)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Oe(12 * G)}}`)}</div>`, h += `<div class="er-eq">${k(`\\frac{GJ}{L} = \\mathbf{${Oe(D)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Oe(4 * t.E * t.Iy / t.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Oe(4 * t.E * t.Iz / t.L)}}`)}</div>`, h += `<div class="er-eq">${k(`\\frac{6EI_z}{L^2} = \\mathbf{${Oe(6 * t.E * t.Iz / t.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Oe(6 * t.E * t.Iy / t.L ** 2)}}`)}</div>`, t.kLocal && (h += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, h += Do(t.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${k(`l = \\frac{x_j - x_i}{L} = ${en(t.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${en(t.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${en(t.n)}`)}</div>`, h += `<div class="er-eq">${k(`D = \\sqrt{l^2 + m^2} = ${en(t.D)}`)}</div>`, Math.abs(t.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${_(`n \\approx ${t.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ge = t.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${k(ge)}</div>`;
    } else h += `<div class="er-eq">${k("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${k("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${k("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, t.kGlobal && (h += Do(t.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const B = t.elem[0] * 6, Y = t.elem[1] * 6;
    if (h += `<div class="er-eq">${k(`\\text{Nodo } ${t.elem[0]} \\rightarrow \\text{DOFs } [${B} \\ldots ${B + 5}]`)}</div>`, h += `<div class="er-eq">${k(`\\text{Nodo } ${t.elem[1]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, h += `<div class="er-eq">${k("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${k("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${k("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, t.fLocal.length > 0 && t.fLocal.some((ge) => ge !== 0)) {
      const ge = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const z of ge) h += `<th>${z}</th>`;
      h += `</tr><tr><td>i (${t.elem[0]})</td>`;
      for (let z = 0; z < 6; z++) h += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${Oe(t.fLocal[z], 3)}</td>`;
      h += `</tr><tr><td>j (${t.elem[1]})</td>`;
      for (let z = 6; z < 12; z++) h += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${Oe(t.fLocal[z], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function qa(t) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${t.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${t.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${t.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${Oe(t.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${Oe(t.E)}</td></tr>`, h += `<tr><td>A</td><td>${Oe(t.A)}</td></tr>`, h += "</table>", t.uGlobal.length > 0) {
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
      for (const k of _) h += `<th>${k}</th>`;
      h += "</tr>";
      for (let k = 0; k < t.elem.length; k++) {
        h += `<tr><td>${t.elem[k]}</td>`;
        for (let W = 0; W < 6; W++) {
          const R = t.uGlobal[k * 6 + W];
          h += `<td class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${Oe(R, 6)}</td>`;
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
      for (const k of _) h += `<th>${k}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let k = 0; k < 6; k++) h += `<td class="${Math.abs(t.fLocal[k]) > 1e-10 ? "nz" : ""}">${Oe(t.fLocal[k], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let k = 6; k < 12; k++) h += `<td class="${Math.abs(t.fLocal[k]) > 1e-10 ? "nz" : ""}">${Oe(t.fLocal[k], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function Oe(t, h = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(h) : t.toFixed(h);
  }
  function en(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function Do(t) {
    var _a2;
    const h = t.length, _ = Math.min(h, 12);
    let k = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let W = 0; W < _; W++) {
      k += "<tr>";
      for (let R = 0; R < _; R++) {
        const G = ((_a2 = t[W]) == null ? void 0 : _a2[R]) ?? 0, D = Math.abs(G) < 1e-10;
        k += `<td class="${D ? "z" : ""} ${W === R && !D ? "diag" : ""}">${D ? "0" : Fa(G)}</td>`;
      }
      k += "</tr>";
    }
    return k += "</table>", h > _ && (k += `<div style="color:var(--fem-label);font-size:9px">(${_}\xD7${_} de ${h}\xD7${h})</div>`), k += "</div>", k;
  }
  function Fa(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function On(t) {
    const h = t.getContext("2d");
    if (!h) return;
    const _ = t.width, k = t.height, W = 30, R = _ - 2 * W, G = (k - 3 * W) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, _, k);
    const D = (B, Y, ge) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(W, B, R, G), h.strokeStyle = "#444", h.beginPath(), h.moveTo(W, B + G / 2), h.lineTo(W + R, B + G / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(Y, W + 4, B + 14);
      for (const Q of ge) {
        h.strokeStyle = Q.color, h.lineWidth = 2.5, h.beginPath();
        for (let ye = 0; ye <= 100; ye++) {
          const ce = ye / 100, ee = W + ce * R, ne = B + G / 2 - Q.fn(ce) * (G / 2 * 0.85);
          ye === 0 ? h.moveTo(ee, ne) : h.lineTo(ee, ne);
        }
        h.stroke();
      }
      let z = W + R - 90;
      for (const Q of ge) h.fillStyle = Q.color, h.font = "bold 10px sans-serif", h.fillText(Q.label, z, B + G - 6), z += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", W, B + G + 12), h.fillText("1", W + R - 6, B + G + 12), h.fillText("\u03BE", W + R / 2, B + G + 12);
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
  const Pa = `<style>
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
</style>`, Bo = [
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
  let nn = false, yo = null, Wt = null, Et = null, xt = null;
  function Oa() {
    xt = document.createElement("button"), xt.id = "help-tour-btn", xt.innerHTML = "?", xt.title = "Ayuda interactiva \u2014 Tour guiado", xt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, xt.addEventListener("mouseenter", () => {
      xt.style.transform = "scale(1.15)", xt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), xt.addEventListener("mouseleave", () => {
      xt.style.transform = "scale(1)", xt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), xt.addEventListener("click", () => {
      nn ? Rn() : Na();
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
  `, document.head.appendChild(t), xt;
  }
  function Na() {
    nn = true, xt && (xt.innerHTML = "\u2715", xt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", xt.style.animation = "none"), yo = document.createElement("div"), yo.id = "tour-overlay", yo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(yo), Fo(0);
  }
  function Rn() {
    nn = false, xt && (xt.innerHTML = "?", xt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", xt.style.animation = "helpPulse 2s infinite"), Wt && (Wt.remove(), Wt = null), Et && (Et.remove(), Et = null), yo && (yo.remove(), yo = null);
  }
  function Fo(t) {
    var _a2, _b;
    if (t >= Bo.length) {
      _a();
      return;
    }
    const h = Bo[t], _ = document.querySelector(h.selector);
    if (!_) {
      Fo(t + 1);
      return;
    }
    _.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Wt && Wt.remove(), Et && Et.remove();
    const k = _.getBoundingClientRect(), W = window.innerWidth, R = window.innerHeight, G = 320, D = 180;
    Wt = document.createElement("div"), Wt.style.cssText = `
    position: fixed;
    left: ${k.left - 6}px; top: ${k.top - 6}px;
    width: ${k.width + 12}px; height: ${k.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Wt);
    const B = W - k.right, Y = k.left, ge = R - k.bottom, z = k.top;
    let Q = h.position || "bottom";
    Q === "bottom" && ge < D + 20 && (Q = "top"), Q === "top" && z < D + 20 && (Q = "right"), Q === "right" && B < G + 20 && (Q = "left"), Q === "left" && Y < G + 20 && (Q = "bottom");
    let ye, ce, ee = "";
    switch (Q) {
      case "bottom":
        ye = k.left + k.width / 2 - G / 2, ce = k.bottom + 14, ee = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ye = k.left + k.width / 2 - G / 2, ce = k.top - D - 14, ee = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ye = k.right + 14, ce = k.top + k.height / 2 - D / 2, ee = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ye = k.left - G - 14, ce = k.top + k.height / 2 - D / 2, ee = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ye = Math.max(10, Math.min(ye, W - G - 10)), ce = Math.max(10, Math.min(ce, R - D - 10)), Et = document.createElement("div"), Et.style.cssText = `
    position: fixed;
    left: ${ye}px; top: ${ce}px;
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
    <div style="${ee}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${h.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${t + 1}/${Bo.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${h.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${t > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${t < Bo.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Bo.map((de, Te) => `<div style="width:${Te === t ? "16px" : "6px"};height:6px;border-radius:3px;background:${Te === t ? "#0099ff" : Te < t ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Et), (_a2 = Et.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Fo(t + 1);
    }), (_b = Et.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Fo(t - 1);
    });
    const ne = (de) => {
      if (!nn) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (de.key === "ArrowRight" || de.key === "Enter") && (Fo(t + 1), document.removeEventListener("keydown", ne)), de.key === "ArrowLeft" && (Fo(Math.max(0, t - 1)), document.removeEventListener("keydown", ne)), de.key === "Escape" && (Rn(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function _a() {
    var _a2;
    Wt && (Wt.remove(), Wt = null), Et && (Et.remove(), Et = null), Et = document.createElement("div"), Et.style.cssText = `
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
  `, document.body.appendChild(Et), (_a2 = Et.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Rn());
  }
  function Ra(t) {
    var _a2;
    const h = t.split(/\r?\n/), _ = {
      force: "TONF",
      length: "M"
    }, k = [], W = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = [], B = [], Y = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), z = [], Q = [];
    let ye = "", ce = "";
    const ee = /* @__PURE__ */ new Map();
    for (const fe of h) {
      const ke = fe.trim();
      if (!ke || ke.startsWith("$")) {
        ke.startsWith("$ ") && (ce = ke.substring(2).trim());
        continue;
      }
      if (ce && (ee.has(ce) || ee.set(ce, []), ee.get(ce).push(fe)), ce === "CONTROLS") {
        const ae = ke.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ae && (_.force = ae[1], _.length = ae[2]);
        const qe = ke.match(/TITLE2\s+"([^"]+)"/);
        qe && (ye = qe[1]);
      }
      if (ce === "STORIES - IN SEQUENCE FROM TOP") {
        const ae = ke.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ae) {
          const qe = ae[1], U = ae[2] ? parseFloat(ae[2]) : 0, be = ae[3] ? parseFloat(ae[3]) : void 0;
          k.push({
            name: qe,
            height: U,
            elev: be ?? 0
          });
        }
      }
      if (ce === "MATERIAL PROPERTIES") {
        const ae = ke.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ae) {
          const qe = ae[1];
          W.has(qe) || W.set(qe, {
            type: ae[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const U = W.get(qe);
          ae[2] && (U.type = ae[2]);
          const be = ke.match(/\bE\s+([\d.eE+-]+)/);
          be && (U.E = parseFloat(be[1]));
          const Ne = ke.match(/\bU\s+([\d.eE+-]+)/);
          Ne && (U.nu = parseFloat(Ne[1]), U.G = U.E / (2 * (1 + U.nu)));
          const pe = ke.match(/\bFY\s+([\d.eE+-]+)/);
          pe && (U.fy = parseFloat(pe[1]));
          const Pe = ke.match(/\bFC\s+([\d.eE+-]+)/);
          Pe && (U.fc = parseFloat(Pe[1]));
          const Ue = ke.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ue && (U.density = parseFloat(Ue[1]));
        }
      }
      if (ce === "FRAME SECTIONS") {
        const ae = ke.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ae) {
          const qe = ae[1];
          R.has(qe) || R.set(qe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const U = R.get(qe), be = ke.match(/MATERIAL\s+"([^"]+)"/);
          be && (U.material = be[1]);
          const Ne = ke.match(/SHAPE\s+"([^"]+)"/);
          Ne && (U.shape = Ne[1]);
          const pe = ke.match(/\bD\s+([\d.eE+-]+)/);
          pe && (U.D = parseFloat(pe[1]));
          const Pe = ke.match(/\bB\s+([\d.eE+-]+)/);
          Pe && (U.B = parseFloat(Pe[1]));
          const Ue = ke.match(/\bTF\s+([\d.eE+-]+)/);
          Ue && (U.TF = parseFloat(Ue[1]));
          const Be = ke.match(/\bTW\s+([\d.eE+-]+)/);
          Be && (U.TW = parseFloat(Be[1]));
          const We = ke.match(/\bR\s+([\d.eE+-]+)/);
          We && (U.R = parseFloat(We[1]));
          const ft = ke.match(/FILLMATERIAL\s+"([^"]+)"/);
          ft && (U.fillMaterial = ft[1]);
          const zt = ke.match(/I2MOD\s+([\d.eE+-]+)/);
          zt && (U.modI2 = parseFloat(zt[1]));
          const Ve = ke.match(/I3MOD\s+([\d.eE+-]+)/);
          Ve && (U.modI3 = parseFloat(Ve[1]));
        }
      }
      if (ce === "POINT COORDINATES") {
        const ae = ke.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ae && G.set(ae[1], [
          parseFloat(ae[2]),
          parseFloat(ae[3])
        ]);
      }
      if (ce === "LINE CONNECTIVITIES") {
        const ae = ke.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ae && D.push({
          name: ae[1],
          type: ae[2],
          pt1: ae[3],
          pt2: ae[4],
          nStories: parseInt(ae[5])
        });
      }
      if (ce === "POINT ASSIGNS") {
        const ae = ke.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ae && Y.set(`${ae[1]}@${ae[2]}`, ae[3].split(/\s+/));
      }
      if (ce === "LINE ASSIGNS") {
        const ae = ke.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ae) {
          const qe = {
            story: ae[2],
            section: ae[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, U = ke.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          U && (qe.rigidZone = parseFloat(U[1]));
          const be = ke.match(/RELEASE\s+"([^"]+)"/);
          be && (qe.releases = be[1].split(/\s+/));
          const Ne = ke.match(/ANG\s+([-\d.eE+]+)/);
          Ne && (qe.angle = parseFloat(Ne[1])), ge.set(`${ae[1]}@${ae[2]}`, qe);
        }
      }
      if (ce === "GRIDS") {
        const ae = ke.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ae && Q.push({
          label: ae[1],
          dir: ae[2],
          coord: parseFloat(ae[3])
        });
      }
      if (ce === "FRAME OBJECT LOADS") {
        const ae = ke.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ae && z.push({
          line: ae[1],
          story: ae[2],
          type: ae[3],
          dir: ae[4],
          lc: ae[5],
          val: parseFloat(ae[6])
        });
      }
      if (ce === "AREA CONNECTIVITIES") {
        const ae = ke.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ae) {
          const qe = ((_a2 = ae[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((U) => U.replace(/"/g, ""))) || [];
          B.push({
            name: ae[1],
            pts: qe,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if (k.length > 0) {
      const fe = k.length - 1;
      ne.set(k[fe].name, k[fe].elev);
      for (let ke = fe - 1; ke >= 0; ke--) {
        const qe = ne.get(k[ke + 1].name) + k[ke].height;
        k[ke].elev = qe, ne.set(k[ke].name, qe);
      }
    }
    const de = [], Te = [], He = /* @__PURE__ */ new Map(), Fe = (fe, ke) => `${fe}@${ke}`, Je = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const fe of D) st.set(fe.name, fe);
    for (const fe of D) for (const [ke, ae] of ge) {
      if (!ke.startsWith(fe.name + "@")) continue;
      const qe = ae.story, U = k.findIndex((be) => be.name === qe);
      if (!(U < 0)) if (fe.type === "COLUMN" || fe.type === "BRACE") {
        Je.add(Fe(fe.pt2, qe));
        const be = Math.max(fe.nStories, 1), Ne = Math.min(U + be, k.length - 1);
        Je.add(Fe(fe.pt1, k[Ne].name));
      } else Je.add(Fe(fe.pt1, qe)), Je.add(Fe(fe.pt2, qe));
    }
    for (const [fe] of Y) Je.add(fe);
    for (const fe of Je) {
      const [ke, ae] = fe.split("@"), qe = G.get(ke), U = ne.get(ae);
      qe === void 0 || U === void 0 || (de.push([
        qe[0],
        qe[1],
        U
      ]), Te.push(fe), He.set(fe, de.length - 1));
    }
    const je = [], Qe = [], Me = [], Re = [], _e = /* @__PURE__ */ new Map();
    for (const fe of D) for (const [ke, ae] of ge) {
      if (!ke.startsWith(fe.name + "@")) continue;
      const qe = ae.story, U = k.findIndex((Be) => Be.name === qe);
      if (U < 0) continue;
      let be, Ne;
      if (fe.type === "COLUMN" || fe.type === "BRACE") {
        const Be = Math.max(fe.nStories, 1), We = Math.min(U + Be, k.length - 1);
        be = Fe(fe.pt1, k[We].name), Ne = Fe(fe.pt2, qe);
      } else be = Fe(fe.pt1, qe), Ne = Fe(fe.pt2, qe);
      const pe = He.get(be), Pe = He.get(Ne);
      if (pe === void 0 || Pe === void 0 || pe === Pe) continue;
      const Ue = je.length;
      if (je.push([
        pe,
        Pe
      ]), Qe.push(fe.name), Me.push(fe.type), Re.push(qe), _e.set(Ue, ae.section), ae.rigidZone > 0 && Pt.set(Ue, [
        ae.rigidZone,
        ae.rigidZone
      ]), ae.releases.length > 0) {
        const Be = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const We of ae.releases) We === "TI" && (Be[0] = true), We === "M2I" && (Be[1] = true), We === "M3I" && (Be[2] = true), We === "TJ" && (Be[3] = true), We === "M2J" && (Be[4] = true), We === "M3J" && (Be[5] = true);
        Nt.set(Ue, Be);
      }
    }
    const et = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map();
    for (const [fe, ke] of _e) {
      const ae = R.get(ke);
      if (!ae) continue;
      const qe = W.get(ae.material);
      qe && (et.set(fe, qe.E), dt.set(fe, qe.G));
      const U = ae.D, be = ae.B, Ne = ae.TF, pe = ae.TW;
      let Pe = 0, Ue = 0, Be = 0, We = 0, ft = 0, zt = 0, Ve = "rect";
      switch (ae.shape) {
        case "Concrete Rectangular":
          Pe = U * be, Ue = be * U ** 3 / 12, Be = U * be ** 3 / 12, We = be * U ** 3 * (1 / 3 - 0.21 * (U / be) * (1 - U ** 4 / (12 * be ** 4))), ft = zt = 5 / 6 * Pe, Ve = "rect";
          break;
        case "Concrete Circle":
          Pe = Math.PI * U ** 2 / 4, Ue = Be = Math.PI * U ** 4 / 64, We = Math.PI * U ** 4 / 32, ft = zt = 0.9 * Pe, Ve = "circ";
          break;
        case "Steel I/Wide Flange":
          Pe = 2 * be * Ne + (U - 2 * Ne) * pe, Ue = (be * U ** 3 - (be - pe) * (U - 2 * Ne) ** 3) / 12, Be = (2 * Ne * be ** 3 + (U - 2 * Ne) * pe ** 3) / 12, We = (2 * be * Ne ** 3 + (U - 2 * Ne) * pe ** 3) / 3, ft = (U - 2 * Ne) * pe, zt = 2 * be * Ne * 5 / 6, Ve = "I";
          break;
        case "Steel Tube":
          Pe = U * be - (U - 2 * pe) * (be - 2 * pe), Ue = (be * U ** 3 - (be - 2 * pe) * (U - 2 * pe) ** 3) / 12, Be = (U * be ** 3 - (U - 2 * pe) * (be - 2 * pe) ** 3) / 12, We = 2 * pe * (U - pe) * (be - pe) * ((U - pe) * (be - pe)) / (U - pe + (be - pe)), ft = 2 * U * pe, zt = 2 * be * pe, Ve = "HSS";
          break;
        case "Filled Steel Tube":
          Pe = U * be, Ue = be * U ** 3 / 12, Be = U * be ** 3 / 12, We = 2 * pe * (U - pe) * (be - pe) * ((U - pe) * (be - pe)) / (U - pe + (be - pe)), ft = 2 * U * pe + 5 / 6 * (U - 2 * pe) * (be - 2 * pe), zt = 2 * be * pe + 5 / 6 * (U - 2 * pe) * (be - 2 * pe), Ve = "CFT";
          break;
        case "Steel Angle": {
          const Lt = Ne || pe;
          Pe = Lt * (U + be - Lt), Ue = Lt * (U ** 3 + be * Lt ** 2 + Lt ** 2 * (U - Lt)) / 12, Be = Lt * (be ** 3 + U * Lt ** 2 + Lt ** 2 * (be - Lt)) / 12, We = (U + be - Lt) * Lt ** 3 / 3, ft = U * Lt, zt = be * Lt, Ve = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          Pe = 2 * be * Ne + (U - 2 * Ne) * pe, Ue = (pe * U ** 3 + 2 * be * Ne * (U - Ne) ** 2) / 12, Be = (2 * Ne * be ** 3 + (U - 2 * Ne) * pe ** 3) / 12, We = (2 * be * Ne ** 3 + (U - 2 * Ne) * pe ** 3) / 3, ft = (U - 2 * Ne) * pe, zt = 2 * be * Ne * 5 / 6, Ve = ae.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          Pe = 2 * (2 * be * Ne + (U - 2 * Ne) * pe), Ue = 2 * (pe * U ** 3 + 2 * be * Ne * (U - Ne) ** 2) / 12, Be = 2 * (2 * Ne * be ** 3 + (U - 2 * Ne) * pe ** 3) / 12, We = 2 * (2 * be * Ne ** 3 + (U - 2 * Ne) * pe ** 3) / 3, ft = 2 * (U - 2 * Ne) * pe, zt = 4 * be * Ne * 5 / 6, Ve = "2C";
          break;
        default:
          U > 0 && be > 0 && (Pe = U * be, Ue = be * U ** 3 / 12, Be = U * be ** 3 / 12, We = Math.min(U, be) * Math.max(U, be) ** 3 / 3 * 0.3, ft = zt = 5 / 6 * Pe);
          break;
      }
      ae.modI2 && (Be *= ae.modI2), ae.modI3 && (Ue *= ae.modI3), ot.set(fe, Pe), Tt.set(fe, Ue), kt.set(fe, Be), wt.set(fe, We), ft > 0 && ut.set(fe, ft), zt > 0 && $t.set(fe, zt), Ce.set(fe, {
        type: Ve,
        b: be || void 0,
        h: U || void 0,
        d: Ve === "circ" || Ve === "pipe" ? U : void 0,
        tw: pe || void 0,
        tf: Ne || void 0,
        r: ae.R,
        name: ke
      });
    }
    const vt = /* @__PURE__ */ new Map();
    for (const [fe, ke] of Y) {
      const ae = He.get(fe);
      if (ae === void 0) continue;
      const qe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const U of ke) U === "UX" && (qe[0] = true), U === "UY" && (qe[1] = true), U === "UZ" && (qe[2] = true), U === "RX" && (qe[3] = true), U === "RY" && (qe[4] = true), U === "RZ" && (qe[5] = true);
      vt.set(ae, qe);
    }
    const pt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map();
    for (let fe = 0; fe < Qe.length; fe++) At.set(`${Qe[fe]}@${Re[fe]}`, fe);
    for (const fe of z) {
      const ke = At.get(`${fe.line}@${fe.story}`);
      if (ke === void 0) continue;
      const [ae, qe] = je[ke], U = de[ae], be = de[qe], Ne = Math.sqrt((be[0] - U[0]) ** 2 + (be[1] - U[1]) ** 2 + (be[2] - U[2]) ** 2);
      if (Ne < 1e-10) continue;
      const pe = fe.val * Ne / 2;
      let Pe = 0, Ue = 0, Be = 0;
      fe.dir === "GRAV" || fe.dir === "GRAVITY" ? Be = -pe : fe.dir === "X" ? Pe = pe : fe.dir === "Y" ? Ue = pe : fe.dir === "Z" && (Be = -pe);
      for (const We of [
        ae,
        qe
      ]) {
        const ft = pt.get(We) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        ft[0] += Pe, ft[1] += Ue, ft[2] += Be, pt.set(We, ft);
      }
    }
    const gt = /* @__PURE__ */ new Map();
    for (const [fe, ke] of _e) {
      const ae = R.get(ke);
      if (!ae) continue;
      const qe = W.get(ae.material);
      (qe == null ? void 0 : qe.density) && gt.set(fe, qe.density);
    }
    return {
      units: _,
      stories: k.reverse(),
      materials: W,
      frameSections: R,
      nodes: de,
      nodeNames: Te,
      nodeNameToIdx: He,
      elements: je,
      elementNames: Qe,
      elementTypes: Me,
      elementStories: Re,
      elementSections: _e,
      nodeInputs: {
        supports: vt,
        loads: pt
      },
      elementInputs: {
        elasticities: et,
        shearModuli: dt,
        areas: ot,
        momentsOfInertiaZ: Tt,
        momentsOfInertiaY: kt,
        torsionalConstants: wt,
        shearAreasY: ut,
        shearAreasZ: $t,
        rigidOffsets: Pt,
        momentReleases: Nt,
        densities: gt,
        sectionShapes: Ce
      },
      sectionShapes: Ce,
      grids: Q,
      info: {
        nNodes: de.length,
        nFrames: je.length,
        nAreas: B.length,
        title: ye
      },
      rawSections: ee
    };
  }
  function Ha(t) {
    const { e2kModel: h } = t, _ = h == null ? void 0 : h.rawSections;
    return _ && _.size > 0 ? Ba(_) : Da(t);
  }
  function Ba(t, h) {
    const _ = [], k = [
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
    for (const W of k) {
      const R = t.get(W);
      if (!(!R || R.length === 0)) {
        _.push(`$ ${W}`);
        for (const G of R) _.push(G);
        _.push("");
      }
    }
    for (const [W, R] of t) if (!k.includes(W) && R.length !== 0) {
      _.push(`$ ${W}`);
      for (const G of R) _.push(G);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function Da(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: k, elementInputs: W, title: R, units: G } = t, D = (G == null ? void 0 : G.force) || "TONF", B = (G == null ? void 0 : G.length) || "M", Y = [], ge = (Me) => Math.round(Me * 1e4) / 1e4;
    Y.push("$ File exported from Awatif FEM Studio"), Y.push(""), Y.push("$ PROGRAM INFORMATION"), Y.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), Y.push(""), Y.push("$ CONTROLS"), Y.push(`  UNITS  "${D}"  "${B}"  "C"  `), R && Y.push(`  TITLE2  "${R}"  `), Y.push("");
    const z = /* @__PURE__ */ new Set();
    h.forEach((Me) => z.add(ge(Me[1])));
    const Q = [
      ...z
    ].sort((Me, Re) => Me - Re), ye = [], ce = /* @__PURE__ */ new Map();
    ye.push("Base"), ce.set(Q[0], "Base");
    for (let Me = 1; Me < Q.length; Me++) {
      const Re = `Level_${Me}`;
      ye.push(Re), ce.set(Q[Me], Re);
    }
    Y.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let Me = Q.length - 1; Me >= 1; Me--) Y.push(`  STORY "${ye[Me]}"  HEIGHT ${ge(Q[Me] - Q[Me - 1])} MASTERSTORY "Yes"  `);
    Q.length > 0 && Y.push(`  STORY "Base"  ELEV ${Q[0]} `), Y.push(""), Y.push("$ MATERIAL PROPERTIES");
    const ee = /* @__PURE__ */ new Set();
    (_a2 = W.elasticities) == null ? void 0 : _a2.forEach((Me) => ee.add(Me));
    const ne = /* @__PURE__ */ new Map();
    let de = 0;
    for (const Me of ee) {
      const Re = `Mat_${++de}`;
      ne.set(Me, Re), Y.push(`  MATERIAL  "${Re}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), Y.push(`  MATERIAL  "${Re}"    SYMTYPE "Isotropic"  E ${Me}  U 0.2  A 1E-05`);
    }
    Y.push(""), Y.push("$ FRAME SECTIONS");
    const Te = /* @__PURE__ */ new Set(), He = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map();
    _.forEach((Me, Re) => {
      var _a3, _b2;
      if (Me.length !== 2) return;
      const _e = (_a3 = W.sectionShapes) == null ? void 0 : _a3.get(Re), et = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(Re)) ?? 0, dt = ne.get(et) || "Mat_1", ot = (_e == null ? void 0 : _e.h) ?? 0, ut = (_e == null ? void 0 : _e.b) ?? 0, $t = (_e == null ? void 0 : _e.d) ?? 0, Pt = (_e == null ? void 0 : _e.tf) ?? 0, Nt = (_e == null ? void 0 : _e.tw) ?? 0, Tt = (_e == null ? void 0 : _e.type) || "rect", kt = `${Tt}_${ot}_${ut}_${$t}_${Pt}_${Nt}`;
      (_e == null ? void 0 : _e.name) && !Fe.has(kt) && Fe.set(kt, _e.name);
      let wt = Fe.get(kt);
      if (wt || (Tt === "rect" ? wt = `R${ge(ut * 100)}x${ge(ot * 100)}` : Tt === "circ" ? wt = `C_D${ge($t * 100)}` : Tt === "I" ? wt = `I_${ge(ot * 100)}` : wt = `Sec_${Te.size + 1}`, Fe.set(kt, wt)), He.set(Re, wt), Te.has(wt)) return;
      Te.add(wt);
      const vt = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Tt] || "Concrete Rectangular";
      let pt = `  FRAMESECTION  "${wt}"  MATERIAL "${dt}"  SHAPE "${vt}"`;
      ot && (pt += `  D ${ot}`), ut && (pt += `  B ${ut}`), $t && !ot && (pt += `  D ${$t}`), Pt && (pt += `  TF ${Pt}`), Nt && (pt += `  TW ${Nt}`), Y.push(pt);
    }), Y.push("");
    const Je = /* @__PURE__ */ new Map();
    let st = 0;
    h.forEach((Me) => {
      const Re = `${ge(Me[0])},${ge(Me[2])}`;
      Je.has(Re) || Je.set(Re, `${++st}`);
    }), Y.push("$ POINT COORDINATES");
    for (const [Me, Re] of Je) {
      const [_e, et] = Me.split(",").map(Number);
      Y.push(`  POINT "${Re}"  ${_e} ${et} `);
    }
    Y.push("");
    const je = (Me) => {
      const Re = h[Me], _e = `${ge(Re[0])},${ge(Re[2])}`;
      return {
        pt: Je.get(_e) || "1",
        story: ce.get(ge(Re[1])) || "Base"
      };
    };
    Y.push("$ LINE CONNECTIVITIES");
    const Qe = [];
    return _.forEach((Me, Re) => {
      if (Me.length !== 2) return;
      const _e = ja(h, Me), et = He.get(Re) || `Sec_${Re}`;
      if (_e === "BEAM") {
        const dt = je(Me[0]), ot = je(Me[1]);
        Y.push(`  LINE  "E${Re + 1}"  BEAM  "${dt.pt}"  "${ot.pt}"  0`), Qe.push(`  LINEASSIGN  "E${Re + 1}"  "${dt.story}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const dt = h[Me[0]][1] <= h[Me[1]][1] ? Me[0] : Me[1], ot = h[Me[0]][1] <= h[Me[1]][1] ? Me[1] : Me[0];
        je(dt);
        const ut = je(ot), $t = ge(h[dt][1]), Pt = ge(h[ot][1]), Nt = Q.indexOf($t), Tt = Q.indexOf(Pt), kt = Math.max(1, Tt >= 0 && Nt >= 0 ? Tt - Nt : 1);
        Y.push(`  LINE  "E${Re + 1}"  ${_e}  "${ut.pt}"  "${ut.pt}"  ${kt}`);
        for (let wt = 0; wt < kt; wt++) {
          const Ce = Tt - wt;
          Ce >= 0 && Ce < ye.length && Qe.push(`  LINEASSIGN  "E${Re + 1}"  "${ye[Ce]}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), Y.push(""), Y.push("$ POINT ASSIGNS"), (_b = k.supports) == null ? void 0 : _b.forEach((Me, Re) => {
      const _e = [];
      if (Me[0] && _e.push("UX"), Me[1] && _e.push("UY"), Me[2] && _e.push("UZ"), Me[3] && _e.push("RX"), Me[4] && _e.push("RY"), Me[5] && _e.push("RZ"), _e.length > 0) {
        const et = je(Re);
        Y.push(`  POINTASSIGN  "${et.pt}"  "${et.story}"  RESTRAINT "${_e.join(" ")}"  `);
      }
    }), Y.push(""), Y.push("$ LINE ASSIGNS"), Qe.forEach((Me) => Y.push(Me)), Y.push(""), Y.push("$ LOAD PATTERNS"), Y.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), Y.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), Y.push(""), k.loads && k.loads.size > 0 && (Y.push("$ POINT OBJECT LOADS"), k.loads.forEach((Me, Re) => {
      const [_e, et, dt] = Me, ot = je(Re);
      Math.abs(_e) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FX ${_e}`), Math.abs(et) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FY ${et}`), Math.abs(dt) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FZ ${dt}`);
    }), Y.push("")), Y.push("  END"), Y.push("$ END OF MODEL FILE"), Y.join(`\r
`);
  }
  function ja(t, h) {
    const _ = t[h[0]], k = t[h[1]], W = Math.abs(k[1] - _[1]), R = Math.sqrt((k[0] - _[0]) ** 2 + (k[2] - _[2]) ** 2), G = W > R * 0.5;
    return G && R > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
  }
  function Wa(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: k, elementInputs: W } = t, R = [];
    return R.push("# OpenSeesPy model exported from Awatif FEM Studio"), R.push(`# ${h.length} nodes, ${_.length} elements`), R.push(""), R.push("import openseespy.opensees as ops"), R.push(""), R.push("ops.wipe()"), R.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), R.push(""), R.push("# --- Nodes ---"), h.forEach((G, D) => {
      R.push(`ops.node(${D + 1}, ${G[0]}, ${G[1]}, ${G[2]})`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = k.supports) == null ? void 0 : _a2.forEach((G, D) => {
      const B = G.map((Y) => Y ? 1 : 0).join(", ");
      R.push(`ops.fix(${D + 1}, ${B})`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), R.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), R.push(""), R.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((G, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const B = h[G[0]], Y = h[G[1]], z = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, Q = ((_a3 = W.areas) == null ? void 0 : _a3.get(D)) ?? 1, ye = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ce = ((_c = W.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, ee = ((_d = W.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, ne = ((_e = W.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, de = ((_f = W.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      R.push(`ops.element('elasticBeamColumn', ${D + 1}, ${G[0] + 1}, ${G[1] + 1}, ${Q}, ${ye}, ${ce}, ${ee}, ${ne}, ${de}, ${z})`);
    }), R.push(""), k.loads && k.loads.size > 0 && (R.push("# --- Loads ---"), R.push("ops.timeSeries('Linear', 1)"), R.push("ops.pattern('Plain', 1, 1)"), k.loads.forEach((G, D) => {
      const B = G.map((Y) => Y).join(", ");
      R.push(`ops.load(${D + 1}, ${B})`);
    }), R.push("")), R.push("# --- Analysis ---"), R.push("ops.system('BandGeneral')"), R.push("ops.numberer('RCM')"), R.push("ops.constraints('Plain')"), R.push("ops.integrator('LoadControl', 1.0)"), R.push("ops.algorithm('Linear')"), R.push("ops.analysis('Static')"), R.push("ops.analyze(1)"), R.push(""), R.push("# --- Results ---"), R.push('print("\\n=== Displacements ===")'), h.forEach((G, D) => {
      R.push(`print(f"Node {${D + 1}}: {ops.nodeDisp(${D + 1})}")`);
    }), R.push(""), R.push('print("\\n=== Reactions ===")'), R.push("ops.reactions()"), (_b = k.supports) == null ? void 0 : _b.forEach((G, D) => {
      R.push(`print(f"Node {${D + 1}}: {ops.nodeReaction(${D + 1})}")`);
    }), R.join(`
`);
  }
  function Ya(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: k, elementInputs: W } = t, R = [];
    return R.push("# OpenSees Tcl model exported from Awatif FEM Studio"), R.push(`# ${h.length} nodes, ${_.length} elements`), R.push(""), R.push("wipe"), R.push("model basic -ndm 3 -ndf 6"), R.push(""), R.push("# --- Nodes ---"), h.forEach((G, D) => {
      R.push(`node ${D + 1} ${G[0]} ${G[1]} ${G[2]}`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = k.supports) == null ? void 0 : _a2.forEach((G, D) => {
      const B = G.map((Y) => Y ? 1 : 0).join(" ");
      R.push(`fix ${D + 1} ${B}`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("geomTransf Linear 1 0.0 0.0 1.0"), R.push("geomTransf Linear 2 -1.0 0.0 0.0"), R.push(""), R.push("# --- Elements ---"), _.forEach((G, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const B = h[G[0]], Y = h[G[1]], z = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, Q = ((_a3 = W.areas) == null ? void 0 : _a3.get(D)) ?? 1, ye = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, ce = ((_c = W.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, ee = ((_d = W.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, ne = ((_e = W.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, de = ((_f = W.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      R.push(`element elasticBeamColumn ${D + 1} ${G[0] + 1} ${G[1] + 1} ${Q} ${ye} ${ce} ${ee} ${ne} ${de} ${z}`);
    }), R.push(""), k.loads && k.loads.size > 0 && (R.push("# --- Loads ---"), R.push("timeSeries Linear 1"), R.push("pattern Plain 1 1 {"), k.loads.forEach((G, D) => {
      const B = G.map((Y) => Y).join(" ");
      R.push(`  load ${D + 1} ${B}`);
    }), R.push("}"), R.push("")), R.push("# --- Analysis ---"), R.push("system BandGeneral"), R.push("numberer RCM"), R.push("constraints Plain"), R.push("integrator LoadControl 1.0"), R.push("algorithm Linear"), R.push("analysis Static"), R.push("analyze 1"), R.push(""), R.push("# --- Results ---"), R.push('puts "\\n=== Displacements ==="'), h.forEach((G, D) => {
      R.push(`puts "Node ${D + 1}: [nodeDisp ${D + 1}]"`);
    }), R.push('puts "\\n=== Reactions ==="'), R.push("reactions"), (_b = k.supports) == null ? void 0 : _b.forEach((G, D) => {
      R.push(`puts "Node ${D + 1}: [nodeReaction ${D + 1}]"`);
    }), R.join(`
`);
  }
  function Ga(t) {
    const h = [], _ = [], k = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    for (const ye of t.split(/\r?\n/)) {
      const ce = ye.trim(), ee = ce.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ee) {
        const He = parseInt(ee[1]), Fe = h.length;
        h.push([
          parseFloat(ee[2]),
          parseFloat(ee[3]),
          parseFloat(ee[4])
        ]), z.set(He, Fe);
        continue;
      }
      const ne = ce.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const He = parseInt(ne[1]), Fe = z.get(He);
        Fe !== void 0 && k.set(Fe, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const de = ce.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (de) {
        const He = parseInt(de[1]), Fe = z.get(parseInt(de[2])), Je = z.get(parseInt(de[3]));
        if (Fe !== void 0 && Je !== void 0) {
          const st = _.length;
          _.push([
            Fe,
            Je
          ]), Q.set(He, st), D.set(st, parseFloat(de[4])), R.set(st, parseFloat(de[5])), G.set(st, parseFloat(de[6])), ge.set(st, parseFloat(de[7])), B.set(st, parseFloat(de[8])), Y.set(st, parseFloat(de[9]));
        }
        continue;
      }
      const Te = ce.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Te) {
        const He = z.get(parseInt(Te[1]));
        He !== void 0 && W.set(He, [
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
        supports: k,
        loads: W
      },
      elementInputs: {
        elasticities: R,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: ge
      }
    };
  }
  function Ja(t) {
    const h = [], _ = [], k = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const Q of t.split(/\r?\n/)) {
      const ye = Q.trim();
      if (ye.startsWith("#") || ye.startsWith("//")) continue;
      const ce = ye.split(/\s+/);
      if (ce[0] === "node" && ce.length >= 5) {
        const ee = parseInt(ce[1]), ne = h.length;
        h.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), z.set(ee, ne);
        continue;
      }
      if (ce[0] === "fix" && ce.length >= 8) {
        const ee = z.get(parseInt(ce[1]));
        ee !== void 0 && k.set(ee, [
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
        const ee = z.get(parseInt(ce[3])), ne = z.get(parseInt(ce[4]));
        if (ee !== void 0 && ne !== void 0) {
          const de = _.length;
          _.push([
            ee,
            ne
          ]), D.set(de, parseFloat(ce[5])), R.set(de, parseFloat(ce[6])), G.set(de, parseFloat(ce[7])), ge.set(de, parseFloat(ce[8])), B.set(de, parseFloat(ce[9])), Y.set(de, parseFloat(ce[10]));
        }
        continue;
      }
      if (ce[0] === "load" && ce.length >= 8) {
        const ee = z.get(parseInt(ce[1]));
        ee !== void 0 && W.set(ee, [
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
      nodes: h,
      elements: _,
      nodeInputs: {
        supports: k,
        loads: W
      },
      elementInputs: {
        elasticities: R,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: ge
      }
    };
  }
  Ts = Co.state(false);
  el = function(t) {
    t.nodeInputs || (t.nodeInputs = Co.state({})), t.elementInputs || (t.elementInputs = Co.state({})), t.deformOutputs || (t.deformOutputs = Co.state({})), t.analyzeOutputs || (t.analyzeOutputs = Co.state({}));
    let h = "tonf", _ = "m", k = xo(h, _), W = {
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
    }, G = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
    let B = false;
    const Y = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Map();
    let z = "", Q = {}, ye = null, ce = "", ee = [], ne = [], de = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), He = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = null, je = [], Qe = 0.2, Me = 2, Re = 2, _e = false, et = 2, dt = "x", ot = /* @__PURE__ */ new Set(), ut = true, $t = 0.15, Pt = 2, Nt = 2, Tt = /* @__PURE__ */ new Set();
    const kt = () => ({
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
    }), wt = (e, o) => ({
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
      }, kt),
      vigasY: Array.from({
        length: o
      }, kt)
    }), Ce = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let vt = 0, pt = 3, At = false, gt = 0, fe = null, ke = 0, ae = [], qe = 1, U = true;
    const be = Sa();
    be.div.style.display = "none";
    function Ne() {
      const e = Ko()[z];
      return e && e[vt] ? e[vt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let pe = [], Pe = [], Ue = 0, Be = [], We = null;
    function ft() {
      if (!We) return;
      const e = Ze();
      e && e.scene.remove(We), We.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), We = null;
    }
    function zt(e, o, n, l, s) {
      ft();
      const c = Ze();
      if (!c) return;
      We = new Jo(), We.name = "refGrid";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = Math.max(...n), b = i - a || 1, $ = d - u || 1, w = 3359829, x = 2241348;
      for (const g of n) {
        for (const S of o) {
          const I = new Dt().setFromPoints([
            new Se(a, g, S),
            new Se(i, g, S)
          ]), E = new zo({
            color: w,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new go(I, E);
          F.computeLineDistances(), F.renderOrder = -10, We.add(F);
        }
        for (const S of e) {
          const I = new Dt().setFromPoints([
            new Se(S, g, u),
            new Se(S, g, d)
          ]), E = new zo({
            color: w,
            dashSize: $ * 0.015,
            gapSize: $ * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new go(I, E);
          F.computeLineDistances(), F.renderOrder = -10, We.add(F);
        }
      }
      for (const g of e) for (const S of o) {
        const I = new Dt().setFromPoints([
          new Se(g, 0, S),
          new Se(g, r, S)
        ]), E = new zo({
          color: x,
          dashSize: r * 0.01,
          gapSize: r * 8e-3,
          transparent: true,
          opacity: 0.15
        }), F = new go(I, E);
        F.computeLineDistances(), F.renderOrder = -10, We.add(F);
      }
      const f = Math.min(b, $) * 0.015;
      for (const g of n) for (const S of e) for (const I of o) {
        const E = [
          new Se(S - f, g, I),
          new Se(S + f, g, I),
          new Se(S, g, I - f),
          new Se(S, g, I + f)
        ], F = new Dt().setFromPoints(E), y = new To({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new Lo(F, y);
        m.renderOrder = -5, We.add(m);
      }
      We.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), c.scene.add(We), c.render();
    }
    let Ve = null;
    function Lt() {
      if (!Ve) return;
      const e = Ze();
      e && e.scene.remove(Ve), Ve.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ve = null;
    }
    function Po(e, o, n, l, s) {
      Lt();
      const c = Ze();
      if (!c) return;
      Ve = new Jo(), Ve.name = "gridAxes";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = i - a || 1, b = d - u || 1, $ = Math.max(r, b), w = $ * 0.08, x = l || e.map((m, p) => String.fromCharCode(65 + p)), f = s || o.map((m, p) => String(p + 1)), g = $ * 0.018, S = o.length <= 1, I = 8947848;
      for (let m = 0; m < e.length; m++) {
        const p = e[m];
        if (S) {
          const v = -w - g * 1.5;
          rn(p, 0, 0, p, 0, v + g, I, Ve), cn(x[m] || `${m}`, p, 0, v, g, Ve);
        } else {
          const v = u - w - g * 1.5;
          rn(p, u, 0, p, v + g, 0, I, Ve), cn(x[m] || `${m}`, p, v, 0, g, Ve);
        }
      }
      if (!S) for (let m = 0; m < o.length; m++) {
        const p = o[m], v = a - w - g * 1.5;
        rn(a, p, 0, v + g, p, 0, I, Ve), cn(f[m] || `${m}`, v, p, 0, g, Ve);
      }
      const E = g * 1.8, F = w * 1.2, y = w * 1.2;
      for (let m = 0; m < e.length - 1; m++) {
        const p = e[m], v = e[m + 1], M = Math.abs(v - p), L = (p + v) / 2, N = `${M.toFixed(2)} m`;
        S ? (an(N, L, 0, -F, E, Ve), ln(p, 0, -F * 0.7, v, 0, -F * 0.7, 16763904, Ve)) : (an(N, L, u - y, 0, E, Ve), ln(p, u - y * 0.7, 0, v, u - y * 0.7, 0, 16763904, Ve));
      }
      if (!S) for (let m = 0; m < o.length - 1; m++) {
        const p = o[m], v = o[m + 1], M = Math.abs(v - p), L = (p + v) / 2, N = `${M.toFixed(2)} m`;
        an(N, a - F, L, 0, E, Ve), ln(a - F * 0.7, p, 0, a - F * 0.7, v, 0, 16763904, Ve);
      }
      Ve.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((p) => {
          p.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(Ve), c.render();
    }
    let Ct = null;
    function Hn() {
      if (!Ct) return;
      const e = Ze();
      e && e.scene.remove(Ct), Ct.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ct = null;
    }
    function sn(e, o, n) {
      if (Hn(), e.length === 0) return;
      const l = Ze();
      if (!l) return;
      Ct = new Jo(), Ct.name = "storyLevels";
      const s = Math.min(...o), c = Math.max(...o), a = Math.min(...n), i = Math.max(...n), u = c - s || 1, d = i - a || 1, r = Math.max(u, d), b = r * 0.06, $ = n.length <= 1, w = 4491519, x = r * 0.015;
      for (const f of e) {
        const g = f.elev;
        $ ? (Oo(s - b, 0, g, c + b, 0, g, w, Ct), Bn(f.name, c + b * 1.5, 0, g, x, Ct)) : (Oo(s, a, g, c, a, g, w, Ct), Oo(c, a, g, c, i, g, w, Ct), Oo(c, i, g, s, i, g, w, Ct), Oo(s, i, g, s, a, g, w, Ct), Bn(f.name, s - b * 1.5, a, g, x, Ct));
      }
      Ct.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((g) => {
          g.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Ct), l.render();
    }
    function Oo(e, o, n, l, s, c, a, i) {
      const u = Math.sqrt((l - e) ** 2 + (s - o) ** 2 + (c - n) ** 2) || 1, d = new Dt().setFromPoints([
        new Se(e, o, n),
        new Se(l, s, c)
      ]), r = new zo({
        color: a,
        dashSize: u * 0.02,
        gapSize: u * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new go(d, r);
      b.computeLineDistances(), b.renderOrder = 50, i.add(b);
    }
    function Bn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 512, u = 64;
      a.width = i, a.height = u;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(30,60,120,0.8)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(i - r, 0), d.quadraticCurveTo(i, 0, i, r), d.lineTo(i, u - r), d.quadraticCurveTo(i, u, i - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#88bbff", d.font = "bold 38px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, i / 2, u / 2);
      const b = new qn(a);
      b.needsUpdate = true;
      const $ = new Xo({
        map: b,
        depthTest: false,
        transparent: true
      }), w = new Vo($);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, c.add(w);
    }
    function an(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 256, u = 64;
      a.width = i, a.height = u;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(i - r, 0), d.quadraticCurveTo(i, 0, i, r), d.lineTo(i, u - r), d.quadraticCurveTo(i, u, i - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, i / 2, u / 2);
      const b = new va(a);
      b.minFilter = ya;
      const $ = new Xo({
        map: b,
        transparent: true,
        depthTest: false
      }), w = new Vo($);
      w.position.set(o, n, l);
      const x = i / u;
      w.scale.set(s * x, s, 1), w.renderOrder = 999, c.add(w);
    }
    function ln(e, o, n, l, s, c, a, i) {
      const u = [
        new Se(e, o, n),
        new Se(l, s, c)
      ], d = new Dt().setFromPoints(u), r = new To({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new go(d, r);
      b.renderOrder = 998, i.add(b);
    }
    function rn(e, o, n, l, s, c, a, i) {
      const u = new Dt().setFromPoints([
        new Se(e, o, n),
        new Se(l, s, c)
      ]), d = new zo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - e), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - e), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), r = new go(u, d);
      r.computeLineDistances(), i.add(r);
    }
    function cn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const u = a.getContext("2d");
      u.beginPath(), u.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = i * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${i * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(e, i / 2, i / 2 + i * 0.02);
      const d = new qn(a);
      d.needsUpdate = true;
      const r = new Xo({
        map: d,
        depthTest: false,
        transparent: true
      }), b = new Vo(r);
      b.position.set(o, n, l);
      const $ = s * 2;
      b.scale.set($, $, 1), b.renderOrder = 100, c.add(b);
    }
    const Ye = {
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
        const n = ve.querySelectorAll("input[type=checkbox]");
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
        const e = ve.querySelectorAll("input[type=checkbox]"), o = {};
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
          ft(), console.log("Reference grid cleared");
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
        zt(l, s, c), pe = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), Pe = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), Ue = c[c.length - 1], Be = c.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Po(pe.map((a) => a.coord), Pe.map((a) => a.coord), Ue, pe.map((a) => a.label), Pe.map((a) => a.label));
        {
          const a = c.map((i, u) => ({
            name: u === 0 ? "Base" : `P${u}`,
            height: u > 0 ? i - c[u - 1] : 0,
            elev: i
          }));
          sn(a, pe.map((i) => i.coord), Pe.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(e) {
        if (pe.length === 0 || Be.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (e == null ? void 0 : e.col) || "40x40", n = (e == null ? void 0 : e.viga) || "30x40", l = (e == null ? void 0 : e.fc) || 210, [s, c] = o.split("x").map((ie) => parseFloat(ie) / 100), [a, i] = n.split("x").map((ie) => parseFloat(ie) / 100), u = pe.map((ie) => ie.coord), d = Pe.map((ie) => ie.coord), r = Be.map((ie) => ie.elev), b = u.length, $ = d.length, w = r.length, x = w - 1, f = [], g = {};
        for (let ie = 0; ie < w; ie++) for (let we = 0; we < $; we++) for (let V = 0; V < b; V++) g[`${V},${ie},${we}`] = f.length, f.push([
          u[V],
          r[ie],
          d[we]
        ]);
        const S = [], I = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
        for (let ie = 0; ie < x; ie++) for (let we = 0; we < $; we++) for (let V = 0; V < b; V++) {
          const ue = S.length;
          S.push([
            g[`${V},${ie},${we}`],
            g[`${V},${ie + 1},${we}`]
          ]), I.add(ue), F.set(ue, ie);
        }
        for (let ie = 1; ie < w; ie++) for (let we = 0; we < $; we++) for (let V = 0; V < b - 1; V++) {
          const ue = S.length;
          S.push([
            g[`${V},${ie},${we}`],
            g[`${V + 1},${ie},${we}`]
          ]), E.add(ue), F.set(ue, ie - 1);
        }
        for (let ie = 1; ie < w; ie++) for (let we = 0; we < b; we++) for (let V = 0; V < $ - 1; V++) {
          const ue = S.length;
          S.push([
            g[`${we},${ie},${V}`],
            g[`${we},${ie},${V + 1}`]
          ]), E.add(ue), F.set(ue, ie - 1);
        }
        const y = 15100 * Math.sqrt(l) * 10, m = y / (2 * (1 + 0.2)), p = s * c, v = s * c ** 3 / 12, M = c * s ** 3 / 12, L = s * c * (s ** 2 + c ** 2) / 12, N = a * i, A = a * i ** 3 / 12, C = i * a ** 3 / 12, P = a * i * (a ** 2 + i ** 2) / 12, q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
        for (let ie = 0; ie < S.length; ie++) q.set(ie, y), Z.set(ie, m), I.has(ie) ? (K.set(ie, p), le.set(ie, v), oe.set(ie, M), X.set(ie, L), re.set(ie, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${o}`
        })) : (K.set(ie, N), le.set(ie, A), oe.set(ie, C), X.set(ie, P), re.set(ie, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const Ee = /* @__PURE__ */ new Map();
        for (let ie = 0; ie < $; ie++) for (let we = 0; we < b; we++) Ee.set(g[`${we},0,${ie}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return t.nodes.val = f, t.elements.val = S, t.nodeInputs.val = {
          supports: Ee,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: q,
          shearModuli: Z,
          areas: K,
          momentsOfInertiaZ: le,
          momentsOfInertiaY: oe,
          torsionalConstants: X,
          sectionShapes: re
        }, de = I, Te = E, Fe = F, console.log(`Built: ${f.length} nodes, ${S.length} elements (${I.size} cols, ${E.size} beams)`), console.log(`  Col: ${o} (${s}x${c}m), Viga: ${n} (${a}x${i}m), f'c=${l}`), {
          nodes: f.length,
          elements: S.length
        };
      },
      addCol(e, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = pe.findIndex((x) => x.label === e), s = Pe.findIndex((x) => x.label === o);
        if (l < 0) {
          console.log(`Axis "${e}" not found. Available: ${pe.map((x) => x.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Pe.map((x) => x.label)}`);
          return;
        }
        const c = pe[l].coord, a = Pe[s].coord, i = [
          ...t.nodes.val
        ], u = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = t.elementInputs) == null ? void 0 : _b.val;
        const d = (x) => {
          const f = i.findIndex((g) => Math.abs(g[0] - c) < 1e-3 && Math.abs(g[1] - x) < 1e-3 && Math.abs(g[2] - a) < 1e-3);
          return f >= 0 ? f : (i.push([
            c,
            x,
            a
          ]), i.length - 1);
        }, r = n ? [
          Be.findIndex((x) => x.label === n)
        ] : Array.from({
          length: Be.length - 1
        }, (x, f) => f + 1), b = new Map(((_d = (_c = t.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), $ = d(Be[0].elev);
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
          if (x < 1 || x >= Be.length) continue;
          const f = d(Be[x - 1].elev), g = d(Be[x].elev);
          u.push([
            f,
            g
          ]), de.add(u.length - 1), Fe.set(u.length - 1, x - 1), w++;
        }
        return t.nodes.val = i, t.elements.val = u, t.nodeInputs.val = {
          ...t.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = t.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${e}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(e, o, n, l, s) {
        var _a2;
        const c = pe.findIndex((F) => F.label === e), a = Pe.findIndex((F) => F.label === o), i = pe.findIndex((F) => F.label === n), u = Pe.findIndex((F) => F.label === l), d = Be.findIndex((F) => F.label === s);
        if (c < 0 || a < 0 || i < 0 || u < 0) {
          console.log("Axis not found");
          return;
        }
        if (d < 1) {
          console.log(`Story "${s}" not found. Available: ${Be.filter((F) => F.label !== "Base").map((F) => F.label)}`);
          return;
        }
        const r = pe[c].coord, b = Pe[a].coord, $ = pe[i].coord, w = Pe[u].coord, x = Be[d].elev, f = [
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
        }, I = S(r, x, b), E = S($, x, w);
        return g.push([
          I,
          E
        ]), Te.add(g.length - 1), Fe.set(g.length - 1, d - 1), t.nodes.val = f, t.elements.val = g, console.log(`Added beam ${e}-${o} \u2192 ${n}-${l} at ${s}`), g.length - 1;
      },
      addBrace(e, o, n, l, s, c) {
        var _a2;
        const a = pe.findIndex((p) => p.label === e), i = Pe.findIndex((p) => p.label === o), u = Be.findIndex((p) => p.label === n), d = pe.findIndex((p) => p.label === l), r = Pe.findIndex((p) => p.label === s), b = Be.findIndex((p) => p.label === c);
        if (a < 0 || i < 0 || u < 0) {
          console.log(`Point 1 not found: ${e}-${o}@${n}`);
          return;
        }
        if (d < 0 || r < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const $ = pe[a].coord, w = Pe[i].coord, x = Be[u].elev, f = pe[d].coord, g = Pe[r].coord, S = Be[b].elev, I = [
          ...t.nodes.val
        ], E = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], F = (p, v, M) => {
          const L = I.findIndex((N) => Math.abs(N[0] - p) < 1e-3 && Math.abs(N[1] - v) < 1e-3 && Math.abs(N[2] - M) < 1e-3);
          return L >= 0 ? L : (I.push([
            p,
            v,
            M
          ]), I.length - 1);
        }, y = F($, x, w), m = F(f, S, g);
        return E.push([
          y,
          m
        ]), Fe.set(E.length - 1, Math.min(u, b)), t.nodes.val = I, t.elements.val = E, console.log(`Added brace ${e}-${o}@${n} \u2192 ${l}-${s}@${c}`), E.length - 1;
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
        Ye.clear();
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
        const x = b.length, f = $.length, g = w.length, S = l.length, I = [], E = {};
        for (let J = 0; J < g; J++) for (let he = 0; he < f; he++) for (let Le = 0; Le < x; Le++) E[`${Le},${J},${he}`] = I.length, I.push([
          b[Le],
          w[J],
          $[he]
        ]);
        const F = [], y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
        for (let J = 0; J < S; J++) for (let he = 0; he < f; he++) for (let Le = 0; Le < x; Le++) {
          const se = F.length;
          F.push([
            E[`${Le},${J},${he}`],
            E[`${Le},${J + 1},${he}`]
          ]), y.add(se), p.set(se, J);
        }
        for (let J = 1; J < g; J++) for (let he = 0; he < f; he++) for (let Le = 0; Le < x - 1; Le++) {
          const se = F.length;
          F.push([
            E[`${Le},${J},${he}`],
            E[`${Le + 1},${J},${he}`]
          ]), m.add(se), p.set(se, J - 1);
        }
        for (let J = 1; J < g; J++) for (let he = 0; he < x; he++) for (let Le = 0; Le < f - 1; Le++) {
          const se = F.length;
          F.push([
            E[`${he},${J},${Le}`],
            E[`${he},${J},${Le + 1}`]
          ]), m.add(se), p.set(se, J - 1);
        }
        const M = 15100 * Math.sqrt(a) * 10, L = M / (2 * (1 + 0.2)), N = i * u, A = i * u ** 3 / 12, C = u * i ** 3 / 12, P = i * u * (i ** 2 + u ** 2) / 12, q = d * r, Z = d * r ** 3 / 12, K = r * d ** 3 / 12, le = d * r * (d ** 2 + r ** 2) / 12, oe = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
        for (let J = 0; J < F.length; J++) oe.set(J, M), X.set(J, L), y.has(J) ? (re.set(J, N), Ee.set(J, A), ie.set(J, C), we.set(J, P), V.set(J, {
          type: "rect",
          b: i,
          h: u,
          name: `COL${s}`
        })) : (re.set(J, q), Ee.set(J, Z), ie.set(J, K), we.set(J, le), V.set(J, {
          type: "rect",
          b: d,
          h: r,
          name: `V${c}`
        }));
        const ue = /* @__PURE__ */ new Map();
        for (let J = 0; J < f; J++) for (let he = 0; he < x; he++) ue.set(E[`${he},0,${J}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        t.nodes.val = I, t.elements.val = F, t.nodeInputs.val = {
          supports: ue,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: oe,
          shearModuli: X,
          areas: re,
          momentsOfInertiaZ: Ee,
          momentsOfInertiaY: ie,
          torsionalConstants: we,
          sectionShapes: V
        }, de = y, Te = m, Fe = p, pe = b.map((J, he) => ({
          label: String.fromCharCode(65 + he),
          coord: J
        })), Pe = $.map((J, he) => ({
          label: `${he + 1}`,
          coord: J
        })), Ue = w[w.length - 1], Po(pe.map((J) => J.coord), Pe.map((J) => J.coord), Ue, pe.map((J) => J.label), Pe.map((J) => J.label));
        {
          const J = w.map((he, Le) => ({
            name: Le === 0 ? "Base" : `P${Le}`,
            height: Le > 0 ? he - w[Le - 1] : 0,
            elev: he
          }));
          sn(J, b, $);
        }
        const Ie = ve.querySelector("#cad3d-axis-buttons");
        if (Ie) {
          Ie.style.display = "flex";
          const J = pe.map((Le) => Le.label), he = Pe.map((Le) => Le.label);
          Ie.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Le of J) Ie.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Le}">${Le}</button>`;
          Ie.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Le of he) Ie.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Le}">${Le}</button>`;
        }
        const me = ve.querySelector("#cad3d-floor-buttons");
        if (me) {
          me.style.display = "flex", me.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let J = 0; J < S; J++) me.innerHTML += `<button class="floor-btn" data-floor="${J}">P${J + 1}</button>`;
        }
        return zt(b, $, w), Ge(), console.log(`Model3D: ${I.length}n ${F.length}e | ${x}x${f} grid, ${S} floors | COL${s} V${c} f'c=${a}`), {
          nodes: I.length,
          elements: F.length,
          columns: y.size,
          beams: m.size
        };
      },
      clear() {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs && (t.nodeInputs.val = {}), t.elementInputs && (t.elementInputs.val = {}), de = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), pe = [], Pe = [], Ue = 0, Lt(), Hn(), ft();
        const e = ve.querySelector("#cad3d-axis-buttons");
        e && (e.style.display = "none", e.innerHTML = ""), console.log("Model cleared"), Ge();
      },
      frame(e, o, n = 0, l = 0) {
        Ye.clear();
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
        de = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let f = 0; f < s.length; f++) u(f) || (de.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let f = 0; f < s.length - 1; f++) Te.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f + 1},${x}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), w = Ne();
        for (let x = 0; x < s.length; x++) {
          if (u(x)) continue;
          const f = `${x},0`;
          d[f] !== void 0 && $.set(d[f], [
            ...w
          ]);
        }
        return t.nodes.val = r, t.elements.val = b, t.nodeInputs && (t.nodeInputs.val = {
          supports: $
        }), pe = [
          ...s
        ], Pe = [
          0
        ], Ue = a[a.length - 1] || 0, setTimeout(() => {
          yt(), Po(s, [
            0
          ]), vn(), yn();
        }, 50), Ge(), {
          nodes: r.length,
          elements: b.length
        };
      },
      building(e, o, n, l = 3, s = 0, c = 0, a = 0, i = 0, u = 1) {
        Ye.clear();
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
        const S = f.length, I = [];
        de = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map();
        const E = [];
        for (let p = 0; p < b.length - 1; p++) for (let v = 0; v < r.length; v++) for (let M = 0; M < d.length; M++) x(M, v) || E.push({
          el: [
            g[`${M},${v},${p}`],
            g[`${M},${v},${p + 1}`]
          ],
          floor: p
        });
        for (const { el: [p, v], floor: M } of E) {
          if (u <= 1) {
            de.add(I.length), Fe.set(I.length, M), I.push([
              p,
              v
            ]);
            continue;
          }
          const L = f[p], N = f[v];
          let A = p;
          for (let C = 1; C < u; C++) {
            const P = C / u, q = f.length;
            f.push([
              L[0] + (N[0] - L[0]) * P,
              L[1] + (N[1] - L[1]) * P,
              L[2] + (N[2] - L[2]) * P
            ]), de.add(I.length), Fe.set(I.length, M), I.push([
              A,
              q
            ]), A = q;
          }
          de.add(I.length), Fe.set(I.length, M), I.push([
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
        for (const { el: [p, v], floor: M, dir: L, bay: N } of F) {
          const A = f[p], C = f[v];
          let P = p;
          for (let Z = 1; Z < l; Z++) {
            const K = Z / l, le = f.length;
            f.push([
              A[0] + (C[0] - A[0]) * K,
              A[1] + (C[1] - A[1]) * K,
              A[2] + (C[2] - A[2]) * K
            ]);
            const oe = I.length;
            Te.add(oe), Fe.set(oe, M), Je.set(oe, {
              dir: L,
              bay: N
            }), I.push([
              P,
              le
            ]), P = le;
          }
          const q = I.length;
          Te.add(q), Fe.set(q, M), Je.set(q, {
            dir: L,
            bay: N
          }), I.push([
            P,
            v
          ]);
        }
        if (ot = /* @__PURE__ */ new Set(), _e && et > 0) {
          const p = (v, M, L) => {
            for (let A = 0; A < f.length; A++) if (Math.abs(f[A][0] - v) < 1e-6 && Math.abs(f[A][1] - M) < 1e-6 && Math.abs(f[A][2] - L) < 1e-6) return A;
            const N = f.length;
            return f.push([
              v,
              M,
              L
            ]), N;
          };
          for (let v = 1; v < b.length; v++) if (dt === "x") for (let M = 0; M < r.length - 1; M++) {
            const L = r[M], N = r[M + 1];
            for (let A = 1; A <= et; A++) {
              const C = L + A / (et + 1) * (N - L), P = [];
              for (let q = 0; q < d.length; q++) P.push(p(d[q], C, b[v]));
              for (let q = 0; q < d.length - 1; q++) {
                const Z = I.length;
                ot.add(Z), Te.add(Z), Fe.set(Z, v - 1), Je.set(Z, {
                  dir: "x",
                  bay: q
                }), I.push([
                  P[q],
                  P[q + 1]
                ]);
              }
            }
          }
          else for (let M = 0; M < d.length - 1; M++) {
            const L = d[M], N = d[M + 1];
            for (let A = 1; A <= et; A++) {
              const C = L + A / (et + 1) * (N - L), P = [];
              for (let q = 0; q < r.length; q++) P.push(p(C, r[q], b[v]));
              for (let q = 0; q < r.length - 1; q++) {
                const Z = I.length;
                ot.add(Z), Te.add(Z), Fe.set(Z, v - 1), Je.set(Z, {
                  dir: "y",
                  bay: q
                }), I.push([
                  P[q],
                  P[q + 1]
                ]);
              }
            }
          }
        }
        const y = /* @__PURE__ */ new Map(), m = Ne();
        for (let p = 0; p < r.length; p++) for (let v = 0; v < d.length; v++) x(v, p) || y.set(g[`${v},${p},0`], [
          ...m
        ]);
        He = /* @__PURE__ */ new Set();
        for (const p of je) {
          const v = b.length - 1, M = p.floors.includes(-1) ? Array.from({
            length: v
          }, (L, N) => N) : p.floors.filter((L) => L < v);
          for (const L of M) {
            let N, A, C, P;
            p.dir === "x" ? (N = p.bay, C = p.bay + 1, A = p.axisIdx, P = p.axisIdx) : (N = p.axisIdx, C = p.axisIdx, A = p.bay, P = p.bay + 1);
            const q = g[`${N},${A},${L}`], Z = g[`${N},${A},${L + 1}`];
            let K, le;
            if (p.dir === "x" ? (K = g[`${C},${P},${L}`], le = g[`${C},${P},${L + 1}`]) : (K = g[`${C},${P},${L}`], le = g[`${C},${P},${L + 1}`]), q === void 0 || K === void 0 || Z === void 0 || le === void 0) continue;
            const oe = Re, X = Me, re = f[q], Ee = f[K], ie = f[Z], we = f[le], V = [];
            for (let ue = 0; ue <= X; ue++) {
              const Ie = [], me = ue / X;
              for (let J = 0; J <= oe; J++) {
                const he = J / oe, Le = (1 - me) * ((1 - he) * re[0] + he * Ee[0]) + me * ((1 - he) * ie[0] + he * we[0]), se = (1 - me) * ((1 - he) * re[1] + he * Ee[1]) + me * ((1 - he) * ie[1] + he * we[1]), Ae = (1 - me) * ((1 - he) * re[2] + he * Ee[2]) + me * ((1 - he) * ie[2] + he * we[2]);
                ue === 0 && J === 0 ? Ie.push(q) : ue === 0 && J === oe ? Ie.push(K) : ue === X && J === 0 ? Ie.push(Z) : ue === X && J === oe ? Ie.push(le) : (Ie.push(f.length), f.push([
                  Le,
                  se,
                  Ae
                ]));
              }
              V.push(Ie);
            }
            for (let ue = 0; ue < X; ue++) for (let Ie = 0; Ie < oe; Ie++) {
              const me = V[ue][Ie], J = V[ue][Ie + 1], he = V[ue + 1][Ie + 1], Le = V[ue + 1][Ie], se = I.length;
              He.add(se), Fe.set(se, L), I.push([
                me,
                J,
                he,
                Le
              ]);
            }
            if (L === 0) for (let ue = 0; ue <= oe; ue++) {
              const Ie = V[0][ue];
              Ie >= S && y.set(Ie, [
                ...m
              ]);
            }
          }
        }
        if (Tt = /* @__PURE__ */ new Set(), ut) {
          const p = l, v = l, M = /* @__PURE__ */ new Map(), L = (N, A, C) => `${Math.round(N * 1e4)},${Math.round(A * 1e4)},${Math.round(C * 1e4)}`;
          for (let N = 0; N < f.length; N++) M.set(L(f[N][0], f[N][1], f[N][2]), N);
          for (let N = 1; N < b.length; N++) {
            const A = b[N];
            for (let C = 0; C < d.length - 1; C++) for (let P = 0; P < r.length - 1; P++) {
              const q = d[C], Z = d[C + 1], K = r[P], le = r[P + 1], oe = [];
              for (let X = 0; X <= v; X++) {
                const re = [];
                for (let Ee = 0; Ee <= p; Ee++) {
                  const ie = q + Ee / p * (Z - q), we = K + X / v * (le - K);
                  if (X === 0 && Ee === 0) re.push(g[`${C},${P},${N}`]);
                  else if (X === 0 && Ee === p) re.push(g[`${C + 1},${P},${N}`]);
                  else if (X === v && Ee === 0) re.push(g[`${C},${P + 1},${N}`]);
                  else if (X === v && Ee === p) re.push(g[`${C + 1},${P + 1},${N}`]);
                  else {
                    const V = L(ie, we, A), ue = M.get(V);
                    if (ue !== void 0) re.push(ue);
                    else {
                      const Ie = f.length;
                      f.push([
                        ie,
                        we,
                        A
                      ]), M.set(V, Ie), re.push(Ie);
                    }
                  }
                }
                oe.push(re);
              }
              for (let X = 0; X < v; X++) for (let re = 0; re < p; re++) {
                const Ee = oe[X][re], ie = oe[X][re + 1], we = oe[X + 1][re + 1], V = oe[X + 1][re], ue = I.length;
                Tt.add(ue), Fe.set(ue, N - 1), I.push([
                  Ee,
                  ie,
                  we,
                  V
                ]);
              }
            }
          }
        }
        return t.nodes.val = f, t.elements.val = I, t.nodeInputs && (t.nodeInputs.val = {
          supports: y
        }), pe = [
          ...d
        ], Pe = [
          ...r
        ], Ue = b[b.length - 1] || 0, setTimeout(() => {
          yt(), Po(d, r), vn(), yn();
        }, 50), Ge(), {
          nodes: f.length,
          elements: I.length,
          nJointNodes: S
        };
      },
      galpon(e = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        Ye.clear();
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
        const b = /* @__PURE__ */ new Map(), $ = Ne();
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
            Ye.clear(), Ke("truss"), Wn();
            break;
          }
          case "beams": {
            Ye.clear(), Ke("beams"), Yn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Ye.clear(), Ke("3d"), Gn();
            break;
          }
          case "portico": {
            Ke("frame"), $e();
            break;
          }
          case "edificio": {
            Ke("edificio"), Ce.colMat = 0, Ce.vigaMat = 0, Ce.colShape = 0, je = [], ut = false, _e = false, $e();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ke("edificio"), Ce.colMat = 1, Ce.vigaMat = 1, Ce.steelColType = 0, Ce.steelVigaType = 0, je = [], _e = true, et = 2;
            const o = ee.reduce((l, s) => l + s, 0) / ee.length, n = ne.reduce((l, s) => l + s, 0) / ne.length;
            dt = o >= n ? "y" : "x", ut = true, $t = 0.08, $e();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ke("edificio"), Ce.colMat = 0, Ce.vigaMat = 0, Ce.colShape = 0, _e = false;
            const o = Math.round(((_a2 = Q.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = Q.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], ut = true, $t = 0.15, $e();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ke("edificio"), Ce.colMat = 2, Ce.vigaMat = 0, _e = false;
            const o = Math.round(((_c = Q.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = Q.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            ], ut = true, $t = 0.12, $e();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ke("edificio"), Q.nPisos && (Q.nPisos.val = 1), Q.hPiso && (Q.hPiso.val = 4.5), Q.nVanosX && (Q.nVanosX.val = 3), Q.nVanosY && (Q.nVanosY.val = 2), Q.nSubViga && (Q.nSubViga.val = 3), ee = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], Ce.colMat = 1, Ce.vigaMat = 1, Ce.steelColType = 0, Ce.steelVigaType = 0, je = [], _e = true, et = 2, dt = ee[0] >= ne[0] ? "y" : "x", ut = true, $t = 0.08, Pt = 3, Nt = 3, $e();
            break;
          }
          case "galpon": {
            Ke("galpon"), $e();
            break;
          }
          case "barra": {
            Ke("barra"), $e();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ye.clear(), Ke("placa-3q"), Jn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ye.clear(), Ke("placa-q4"), Vn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ye.clear(), Ke("losa-rect"), Xn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ye.clear(), Ke("losa-plana"), Kn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ye.clear(), Ke("viga-alta"), Un();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ye.clear(), Ke("muro-contencion"), Zn();
            break;
          }
          case "zapata":
          case "footing": {
            Ye.clear(), Ke("zapata"), Qn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ye.clear(), Ke("placa-orificios"), es();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ye.clear(), Ke("col-placa"), ts();
            break;
          }
          case "talud":
          case "slope": {
            Ye.clear(), Ke("talud"), os();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ye.clear(), Ke("eiffel"), xs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ye.clear(), Ke("arco"), vs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ye.clear(), Ke("puente"), ys();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ye.clear(), Ke("twisted"), $s();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ye.clear(), Ke("burj"), ws();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ye.clear(), Ke("opera"), Ms();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ye.clear(), Ke("diagrid"), Ss();
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
        const b = performance.now(), $ = Cn({
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
        const x = $.nodeResults.map((E) => [
          E.x,
          E.y,
          0
        ]), f = $.elementResults.map((E) => [
          ...E.nodes
        ]);
        t.nodes.val = x, t.elements.val = f;
        const g = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((E, F) => {
          g.set(F, [
            0,
            0,
            E.w,
            E.bx,
            E.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: g
        });
        const S = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((E, F) => {
          (E.x < 1e-10 || E.x > e - 1e-10 || E.y < 1e-10 || E.y > o - 1e-10) && S.set(F, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const I = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const E = c * e * o / x.length;
          x.forEach((F, y) => {
            S.has(y) || I.set(y, [
              0,
              0,
              E,
              0,
              0,
              0
            ]);
          });
        }
        if (t.nodeInputs && (t.nodeInputs.val = {
          supports: S,
          loads: I
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
          const E = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
          $.elementResults.forEach((m, p) => {
            E.set(p, [
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
            bendingXX: E,
            bendingYY: F,
            bendingXY: y
          };
        }
        return setTimeout(() => yt(), 50), Ge(), $;
      },
      set(e, o) {
        Q[e] ? (Q[e].val = o, console.log(`${e} = ${o}`), Gt(), $e()) : tt[e] ? (tt[e].val = o, console.log(`${e} = ${o}`), Gt(), $e()) : console.error(`Par\xE1metro "${e}" no encontrado. Disponibles: ${Object.keys({
          ...Q,
          ...tt
        }).join(", ")}`);
      },
      get(e) {
        if (!e) {
          const o = {};
          for (const l in Q) o[l] = Q[l].val;
          for (const l in tt) o[l] = tt[l].val;
          o.plateTheory = pt, o.supportType = vt;
          const n = Ko()[z];
          return n && n[vt] && (o.supportLabel = n[vt].label), console.table(o), o;
        }
        if (Q[e]) return Q[e].val;
        if (tt[e]) return tt[e].val;
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
        }[e.toLowerCase()] || 3), pt = e, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[pt] || pt}`), z.includes("placa") && (Gt(), $e());
      },
      setBc(e) {
        const o = Ko()[z];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof e == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(e.toLowerCase()));
          e = n >= 0 ? n : 0;
        }
        vt = e, vt >= o.length && (vt = 0), console.log(`Apoyo: ${o[vt].label} \u2192 DOFs: [${o[vt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Gt(), $e();
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
        e && (h = e), o && (_ = o), k = xo(h, _);
        const n = ve.querySelector("#cad3d-force-unit"), l = ve.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), l && (l.textContent = _), z && Ke(z), console.log(`Unidades: ${k.label} | E=${k.E.toExponential(3)} ${k.stress}`), k.id;
      },
      view(e) {
      },
      get mesh() {
        return t;
      }
    };
    function Dn() {
      return wa(k);
    }
    function jn() {
      return Ma(k);
    }
    let tt = {};
    function Ke(e) {
      var _a2, _b;
      z = e, Ts.val = true, vt = 0, ke && mn(), Q = {};
      const o = Dn()[e];
      if (o) for (const l of o) Q[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      tt = {};
      const n = jn()[e];
      if (n) for (const l of n) tt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (e === "edificio") {
        const l = Math.round(((_a2 = Q.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = Q.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ee = Array(l).fill(k.defaultSpan), ne = Array(s).fill(k.defaultSpan * 0.8);
      }
      Gt(), setTimeout(() => {
        Hs(), $e();
      }, 50);
    }
    function j(e) {
      var _a2, _b;
      return ((_a2 = Q[e]) == null ? void 0 : _a2.val) ?? ((_b = tt[e]) == null ? void 0 : _b.val) ?? 0;
    }
    function $e() {
      switch (z) {
        case "truss":
          Wn();
          break;
        case "beams":
          Yn();
          break;
        case "3d":
          Gn();
          break;
        case "frame": {
          const o = Math.round(j("nVanos")), n = j("spanV"), l = Math.round(j("nPisos")), s = j("hPiso");
          Ye.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(j("nPisos")), n = j("hPiso"), l = j("Lvix") || 0, s = j("Lvdx") || 0, c = j("Lviy") || 0, a = j("Lvdy") || 0, i = Math.max(1, Math.round(j("nSubViga") || 3)), u = Math.max(1, Math.round(j("nSubCol") || 1));
          Ye.building([
            ...ee
          ], [
            ...ne
          ], Array(o).fill(n), i, l, s, c, a, u);
          break;
        }
        case "galpon":
          Ye.galpon(j("span"), j("length"), j("height"), j("archRise"), Math.round(j("xDiv")), Math.round(j("yDiv")));
          break;
        case "barra":
          As();
          break;
        case "placa-3q":
          Jn();
          break;
        case "placa-q4":
          Vn();
          break;
        case "losa-rect":
          Xn();
          break;
        case "losa-plana":
          Kn();
          break;
        case "viga-alta":
          Un();
          break;
        case "muro-contencion":
          Zn();
          break;
        case "zapata":
          Qn();
          break;
        case "placa-orificios":
          es();
          break;
        case "col-placa":
          ts();
          break;
        case "talud":
          os();
          break;
        case "eiffel":
          xs();
          break;
        case "arco":
          vs();
          break;
        case "puente":
          ys();
          break;
        case "twisted":
          $s();
          break;
        case "burj":
          ws();
          break;
        case "opera":
          Ms();
          break;
        case "diagrid":
          Ss();
          break;
      }
      if ((z === "frame" || z === "edificio" || z === "galpon") && t.nodeInputs) {
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
      ].includes(z)) {
        if (G.size > 0 || D.size > 0 || B) {
          const o = t.elements.val, n = o.filter((l, s) => !(G.has(s) || D.has(s) || B && !Y.has(s)));
          n.length !== o.length && (t.elements.val = n);
        }
        setTimeout(() => {
          oo(), bn();
        }, 30);
      }
    }
    function Wn() {
      const e = j("span"), o = Math.round(j("divisions")), n = j("height"), l = e / o, s = [], c = [];
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
      ]), u = (j("CM") ?? 0) + (j("CV") ?? 0), d = /* @__PURE__ */ new Map();
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
    function Yn() {
      const e = j("width"), o = j("height"), n = j("Ex") ?? 0, l = (j("CM") ?? 0) + (j("CV") ?? 0), s = Math.max(1, Math.round(j("nSub") || 4)), c = [
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
    function Gn() {
      const e = j("dx"), o = j("dy"), n = j("dz"), l = Math.round(j("stories")), s = Math.max(1, Math.round(j("nSub") || 3)), c = [];
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
        const S = c[f], I = c[g];
        let E = f;
        for (let F = 1; F < s; F++) {
          const y = F / s, m = i.length;
          i.push([
            S[0] + (I[0] - S[0]) * y,
            S[1] + (I[1] - S[1]) * y,
            S[2] + (I[2] - S[2]) * y
          ]), u.push([
            E,
            m
          ]), E = m;
        }
        u.push([
          E,
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
      const b = j("Ex") ?? 0, $ = (j("CM") ?? 0) + (j("CV") ?? 0), w = a - 2, x = /* @__PURE__ */ new Map();
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
    function As() {
      const e = j("L"), o = Math.round(j("nElem")), n = j("F"), l = e / o, s = [], c = [];
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
    function Jn() {
      const e = j("Lx") || 15, o = j("Ly") || 10, n = j("meshSize") || 0.5, l = j("q") || -3, s = j("t") || 1, c = j("E") || 3e7, a = j("nu") || 0.3, i = c / (2 * (1 + a)), u = pt === 1 ? "Membrana" : pt === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: r, boundaryIndices: b } = eo({
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
    function Vn() {
      const e = j("Lx") || 10, o = j("Ly") || 10, n = Math.round(j("nx") || 16), l = Math.round(j("ny") || 16), s = j("t") || 0.2, c = j("q") || -10, a = j("E") || 3e7, i = j("nu") || 0.3, u = vt === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0;
      return Ye.plateQ4(e, o, n, l, u, c, s, a, i, r);
    }
    function Xn() {
      const e = j("a") || 6, o = j("b") || 4, n = Math.round(j("nx") || 12), l = Math.round(j("ny") || 8), s = j("t") || 0.1, c = j("q") || -10, a = j("E") || 35e6, i = j("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0, r = Ye.plateQ4(e, o, n, l, "simply-supported", c, s, a, i, d), b = a * s * s * s / (12 * (1 - i * i));
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
    function Kn() {
      const e = j("t") || 0.2, o = j("q") || -10, n = j("E") || 35e6, l = j("nu") || 0.2, s = j("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = c.reduce((A, C) => A + C, 0), u = a.reduce((A, C) => A + C, 0), d = [
        0
      ];
      for (const A of c) d.push(d[d.length - 1] + A);
      const r = [
        0
      ];
      for (const A of a) r.push(r[r.length - 1] + A);
      const b = Math.max(2, Math.round(i / s)), $ = Math.max(2, Math.round(u / s)), w = i / b, x = u / $, f = [];
      for (let A = 0; A <= $; A++) for (let C = 0; C <= b; C++) f.push([
        C * w,
        A * x
      ]);
      const g = [], S = /* @__PURE__ */ new Set();
      for (const A of d) for (const C of r) {
        let P = 1 / 0, q = 0;
        for (let Z = 0; Z < f.length; Z++) {
          const K = Math.hypot(f[Z][0] - A, f[Z][1] - C);
          K < P && (P = K, q = Z);
        }
        S.has(q) || (S.add(q), g.push({
          node: q,
          dof: 0,
          k: 1e15
        }));
      }
      const E = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][E]}]: ${i}\xD7${u}m, ${b}\xD7${$} elem, ${S.size} columnas`);
      const F = performance.now(), y = Cn({
        E: n,
        nu: l,
        thickness: e,
        meshLx: i,
        meshLy: u,
        meshNx: b,
        meshNy: $,
        bcType: "none",
        pressure: o,
        theoryType: E,
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
      y.nodeResults.forEach((A, C) => {
        M.set(C, [
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
      const L = /* @__PURE__ */ new Map();
      for (const A of S) L.set(A, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const N = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const A = o * i * u / p.length;
        p.forEach((C, P) => {
          L.has(P) || N.set(P, [
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
        supports: L,
        loads: N
      }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
        const A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        y.elementResults.forEach((q, Z) => {
          A.set(Z, [
            q.Mxx,
            q.Mxx,
            q.Mxx
          ]), C.set(Z, [
            q.Myy,
            q.Myy,
            q.Myy
          ]), P.set(Z, [
            q.Mxy,
            q.Mxy,
            q.Mxy
          ]);
        }), t.analyzeOutputs.val = {
          bendingXX: A,
          bendingYY: C,
          bendingXY: P
        };
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Un() {
      const e = j("L") || 4, o = j("H") || 2, n = j("t") || 0.1, l = j("E") || 2e7, s = j("nu") || 0.2, c = l / (2 * (1 + s)), a = j("q") || -100, i = j("b") || 0.8, u = j("meshSize") || 0.2, { nodes: d, elements: r, boundaryIndices: b } = eo({
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
      const I = a * i / Math.max(S.length, 1), E = /* @__PURE__ */ new Map();
      for (const m of S) E.set(m, [
        0,
        I,
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
        loads: E
      };
      try {
        const m = Ht($, r, y, F), p = Ao($, r, F, m), v = $.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        if (t.nodes.val = v, t.elements.val = r, m && m.deformations) {
          const L = /* @__PURE__ */ new Map();
          m.deformations.forEach((N, A) => {
            L.set(A, [
              N[0],
              N[2],
              N[1],
              N[3],
              N[5],
              N[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: L
          });
        }
        if (t.nodeInputs) {
          const L = /* @__PURE__ */ new Map();
          x.forEach((A, C) => L.set(C, A));
          const N = /* @__PURE__ */ new Map();
          E.forEach((A, C) => N.set(C, [
            A[0],
            A[2],
            A[1],
            A[3],
            A[5],
            A[4]
          ])), t.nodeInputs && (t.nodeInputs.val = {
            supports: L,
            loads: N
          });
        }
        t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let M = 0;
        m && m.deformations && m.deformations.forEach((L) => {
          const N = Math.sqrt(L[0] * L[0] + L[1] * L[1] + L[2] * L[2]);
          M = Math.max(M, N);
        }), console.log(`Viga Alta: ${$.length} nodos, ${r.length} triangulos`), console.log(`  L=${e}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Zn() {
      const e = j("H") || 4, o = j("B") || 3, n = j("tw") || 0.3, l = j("tb") || 0.4, s = j("meshSize") || 0.2, c = j("E") || 25e6, a = j("nu") || 0.2, i = c / (2 * (1 + a)), u = j("gamma") || 18, d = j("Ka") || 0.33, r = j("Es") || 5e4, b = j("nus") || 0.3, $ = r / (2 * (1 + b)), w = j("kn") || 1e6, x = j("ks") || 1e4, f = j("gammaW") || 9.81, g = j("Hw") || 3.5, S = j("qs") || 0, I = vt, E = o * 0.3, F = o * 0.7, y = [
        [
          -E,
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
          -E,
          l,
          0
        ]
      ];
      let m = [], p = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), L;
      if (I === 0) {
        const C = eo({
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
        m = C.nodes, p = C.elements;
        for (let q = 0; q < m.length; q++) Math.abs(m[q][1]) < 1e-6 && v.set(q, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let q = 0; q < m.length; q++) {
          const Z = m[q][0], K = m[q][1];
          Math.abs(Z - n) < s * 0.6 && K >= l - 1e-6 && P.push({
            idx: q,
            y: K
          });
        }
        P.sort((q, Z) => q.y - Z.y);
        for (let q = 0; q < P.length; q++) {
          const { idx: Z, y: K } = P[q], le = l + e - K, oe = d * u * le + d * S;
          let X = s;
          q > 0 && q < P.length - 1 ? X = (P[q + 1].y - P[q - 1].y) / 2 : q === 0 && P.length > 1 ? X = (P[1].y - P[0].y) / 2 : q === P.length - 1 && P.length > 1 && (X = (P[q].y - P[q - 1].y) / 2);
          const re = oe * X;
          Math.abs(re) > 1e-10 && M.set(Z, [
            re,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
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
      } else if (I === 1 || I === 2) {
        const C = F, P = l + e;
        if (I === 2) {
          const q = [
            [
              -E,
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
              l,
              0
            ],
            [
              -E,
              l,
              0
            ]
          ], Z = Math.max(3, Math.ceil((P - l) / s)), K = [];
          for (let se = 0; se <= Z; se++) K.push([
            n,
            l + se * (P - l) / Z,
            0
          ]);
          const le = eo({
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
          m = le.nodes, p = le.elements;
          const oe = s * 0.4, X = [];
          for (let se = 0; se < m.length; se++) {
            const Ae = m[se][0], De = m[se][1];
            Math.abs(Ae - n) < oe && De >= l - oe && X.push(se);
          }
          X.sort((se, Ae) => m[se][1] - m[Ae][1]);
          const re = [
            X[0]
          ];
          for (let se = 1; se < X.length; se++) {
            const Ae = m[X[se]][1] - m[re[re.length - 1]][1];
            Math.abs(Ae) > s * 0.05 && re.push(X[se]);
          }
          X.length = 0, X.push(...re);
          const Ee = /* @__PURE__ */ new Map();
          for (const se of X) {
            const Ae = m.length;
            m.push([
              m[se][0],
              m[se][1],
              m[se][2]
            ]), Ee.set(se, Ae);
          }
          const ie = p.length, we = [];
          for (let se = 0; se < ie; se++) {
            const Ae = p[se], De = (m[Ae[0]][0] + m[Ae[1]][0] + m[Ae[2]][0]) / 3, lt = (m[Ae[0]][1] + m[Ae[1]][1] + m[Ae[2]][1]) / 3, ht = De >= -E && De <= F && lt >= 0 && lt <= l, ko = De >= 0 && De <= n && lt >= l && lt <= l + e, ro = ht || ko;
            if (we.push(!ro), !ro) for (let Kt = 0; Kt < Ae.length; Kt++) {
              const Zt = Ee.get(Ae[Kt]);
              Zt !== void 0 && (Ae[Kt] = Zt);
            }
          }
          const V = p.length;
          for (let se = 0; se < X.length - 1; se++) {
            const Ae = X[se], De = X[se + 1], lt = Ee.get(Ae), ht = Ee.get(De);
            p.push([
              De,
              Ae,
              lt,
              ht
            ]);
          }
          const ue = p.length - V, Ie = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map();
          for (let se = 0; se < ie; se++) we[se] ? (Ie.set(se, r), me.set(se, r), he.set(se, b), Le.set(se, $), J.set(se, 1)) : (Ie.set(se, c), me.set(se, c), he.set(se, a), Le.set(se, i), J.set(se, 1));
          for (let se = V; se < p.length; se++) Ie.set(se, w), me.set(se, 0), he.set(se, 0), Le.set(se, x), J.set(se, 0);
          L = {
            elasticities: Ie,
            elasticitiesOrthogonal: me,
            thicknesses: J,
            poissonsRatios: he,
            shearModuli: Le
          };
          for (let se = 0; se < m.length; se++) {
            const Ae = m[se][0], De = m[se][1];
            Math.abs(De) < 1e-6 ? v.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ae - C) < s * 0.1 && v.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < ie; se++) {
            if (!we[se]) continue;
            const Ae = p[se], De = m[Ae[0]], lt = m[Ae[1]], ht = m[Ae[2]], ko = Math.abs((lt[0] - De[0]) * (ht[1] - De[1]) - (ht[0] - De[0]) * (lt[1] - De[1])) / 2, ro = -u * ko / 3;
            for (const Kt of Ae) {
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
            const se = [];
            for (let Ae = 0; Ae < m.length; Ae++) {
              const De = m[Ae][0], lt = m[Ae][1];
              Math.abs(lt - P) < s * 0.1 && De > n - 1e-6 && se.push({
                idx: Ae,
                x: De
              });
            }
            se.sort((Ae, De) => Ae.x - De.x);
            for (let Ae = 0; Ae < se.length; Ae++) {
              let De = s;
              Ae > 0 && Ae < se.length - 1 ? De = (se[Ae + 1].x - se[Ae - 1].x) / 2 : Ae === 0 && se.length > 1 ? De = (se[1].x - se[0].x) / 2 : Ae === se.length - 1 && se.length > 1 && (De = (se[Ae].x - se[Ae - 1].x) / 2);
              const lt = -S * De, ht = M.get(se[Ae].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ht[1] += lt, M.set(se[Ae].idx, ht);
            }
          }
          console.log(`  Interfaz Goodman: ${X.length} nodos interfaz, ${ue} elem interfaz, kn=${w}, ks=${x}`);
        } else {
          const q = [
            [
              -E,
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
              l,
              0
            ],
            [
              -E,
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
          const le = (V) => {
            const ue = (m[V[0]][0] + m[V[1]][0] + m[V[2]][0]) / 3, Ie = (m[V[0]][1] + m[V[1]][1] + m[V[2]][1]) / 3, me = ue >= -E && ue <= F && Ie >= 0 && Ie <= l, J = ue >= 0 && ue <= n && Ie >= l && Ie <= l + e;
            return me || J;
          }, oe = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), we = [];
          for (let V = 0; V < p.length; V++) {
            const ue = le(p[V]);
            we.push(!ue), ue ? (oe.set(V, c), X.set(V, c), Ee.set(V, a), ie.set(V, i), re.set(V, 1)) : (oe.set(V, r), X.set(V, r), Ee.set(V, b), ie.set(V, $), re.set(V, 1));
          }
          L = {
            elasticities: oe,
            elasticitiesOrthogonal: X,
            thicknesses: re,
            poissonsRatios: Ee,
            shearModuli: ie
          };
          for (let V = 0; V < m.length; V++) {
            const ue = m[V][0], Ie = m[V][1];
            Math.abs(Ie) < 1e-6 ? v.set(V, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ue - C) < s * 0.1 && v.set(V, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let V = 0; V < p.length; V++) {
            if (!we[V]) continue;
            const ue = p[V], Ie = m[ue[0]], me = m[ue[1]], J = m[ue[2]], he = Math.abs((me[0] - Ie[0]) * (J[1] - Ie[1]) - (J[0] - Ie[0]) * (me[1] - Ie[1])) / 2, Le = -u * he / 3;
            for (const se of ue) {
              const Ae = M.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ae[1] += Le, M.set(se, Ae);
            }
          }
          if (S > 0) {
            const V = [];
            for (let ue = 0; ue < m.length; ue++) {
              const Ie = m[ue][0], me = m[ue][1];
              Math.abs(me - P) < s * 0.1 && Ie > n - 1e-6 && V.push({
                idx: ue,
                x: Ie
              });
            }
            V.sort((ue, Ie) => ue.x - Ie.x);
            for (let ue = 0; ue < V.length; ue++) {
              let Ie = s;
              ue > 0 && ue < V.length - 1 ? Ie = (V[ue + 1].x - V[ue - 1].x) / 2 : ue === 0 && V.length > 1 ? Ie = (V[1].x - V[0].x) / 2 : ue === V.length - 1 && V.length > 1 && (Ie = (V[ue].x - V[ue - 1].x) / 2);
              const me = -S * Ie, J = M.get(V[ue].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              J[1] += me, M.set(V[ue].idx, J);
            }
          }
        }
      }
      if (I === 3) {
        const C = eo({
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
        m = C.nodes, p = C.elements;
        for (let le = 0; le < m.length; le++) Math.abs(m[le][1]) < 1e-6 && v.set(le, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + e, q = Math.min(g, e), Z = P - q, K = [];
        for (let le = 0; le < m.length; le++) {
          const oe = m[le][0], X = m[le][1];
          Math.abs(oe - n) < s * 0.6 && X >= l - 1e-6 && K.push({
            idx: le,
            y: X
          });
        }
        K.sort((le, oe) => le.y - oe.y);
        for (let le = 0; le < K.length; le++) {
          const { idx: oe, y: X } = K[le], re = Math.max(0, P - X);
          if (re <= 0 || X < Z - 1e-6) continue;
          const Ee = Math.min(re, q), ie = f * Ee;
          let we = s;
          le > 0 && le < K.length - 1 ? we = (K[le + 1].y - K[le - 1].y) / 2 : le === 0 && K.length > 1 ? we = (K[1].y - K[0].y) / 2 : le === K.length - 1 && K.length > 1 && (we = (K[le].y - K[le - 1].y) / 2);
          const V = ie * we;
          Math.abs(V) > 1e-10 && M.set(oe, [
            V,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(p.map((le, oe) => [
            oe,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((le, oe) => [
            oe,
            c
          ])),
          thicknesses: new Map(p.map((le, oe) => [
            oe,
            n
          ])),
          poissonsRatios: new Map(p.map((le, oe) => [
            oe,
            a
          ])),
          shearModuli: new Map(p.map((le, oe) => [
            oe,
            i
          ]))
        };
      }
      const N = {
        supports: v,
        loads: M
      }, A = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const C = Ht(m, p, N, L), P = p.filter((re) => re.length === 3), q = {};
        for (const re of Object.keys(L)) {
          const Ee = L[re];
          if (Ee && Ee instanceof Map) {
            const ie = /* @__PURE__ */ new Map();
            let we = 0;
            for (let V = 0; V < p.length; V++) p[V].length === 3 && (Ee.has(V) && ie.set(we, Ee.get(V)), we++);
            q[re] = ie;
          }
        }
        const Z = Ao(m, P, q, C), K = m.map((re) => [
          re[0],
          0,
          re[1]
        ]);
        if (t.nodes.val = K, t.elements.val = P, C && C.deformations) {
          const re = /* @__PURE__ */ new Map();
          C.deformations.forEach((Ee, ie) => {
            re.set(ie, [
              Ee[0],
              Ee[2],
              Ee[1],
              Ee[3],
              Ee[5],
              Ee[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: re
          });
        }
        const le = /* @__PURE__ */ new Map();
        v.forEach((re, Ee) => le.set(Ee, re));
        const oe = /* @__PURE__ */ new Map();
        M.forEach((re, Ee) => oe.set(Ee, [
          re[0],
          re[2],
          re[1],
          re[3],
          re[5],
          re[4]
        ])), t.nodeInputs && (t.nodeInputs.val = {
          supports: le,
          loads: oe
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let X = 0;
        C && C.deformations && C.deformations.forEach((re) => {
          const Ee = Math.sqrt(re[0] * re[0] + re[1] * re[1] + re[2] * re[2]);
          X = Math.max(X, Ee);
        }), console.log(`Muro Contencion [${A[I]}]: ${m.length} nodos, ${p.length} triangulos`), console.log(`  H=${e}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${S}`), I === 1 && console.log(`  Es=${r}, nus=${b}`), I === 2 && console.log(`  Es=${r}, nus=${b}, kn=${w}, ks=${x}`), I === 3 && console.log(`  gammaW=${f}, Hw=${g}`), console.log(`  max|u| = ${X.toExponential(4)}`);
      } catch (C) {
        console.warn("Muro Contencion failed:", C.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Qn() {
      const e = j("Lx") || 2, o = j("Ly") || 2, n = j("t") || 0.5, l = j("colA") || 0.4, s = j("colH") || 1.5, c = Math.round(j("nx") || 8), a = Math.round(j("ny") || 8), i = j("E") || 25e6, u = j("nu") || 0.2, d = j("P") || -500, r = j("Mx") || 0, b = j("My") || 0, $ = j("ks") || 2e4, w = e / c, x = o / a, f = e / 2, g = o / 2, S = l / 2, I = [];
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) {
        const L = v * (c + 1) + M;
        let N = w, A = x;
        (M === 0 || M === c) && (N = w / 2), (v === 0 || v === a) && (A = x / 2), I.push({
          node: L,
          dof: 0,
          k: $ * N * A
        });
      }
      let E = 0;
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) Math.abs(M * w - f) <= S + 1e-6 && Math.abs(v * x - g) <= S + 1e-6 && E++;
      const F = d / Math.max(E, 1), y = [];
      for (let v = 0; v <= a; v++) for (let M = 0; M <= c; M++) {
        const L = M * w, N = v * x;
        Math.abs(L - f) <= S + 1e-6 && Math.abs(N - g) <= S + 1e-6 && y.push({
          node: v * (c + 1) + M,
          dof: 0,
          value: F
        });
      }
      if (Math.abs(r) > 1e-6) {
        const v = S > 1e-6 ? S : x, M = r / v;
        for (let L = 0; L <= a; L++) for (let N = 0; N <= c; N++) {
          const A = N * w, C = L * x;
          if (Math.abs(A - f) <= S + 1e-6 && Math.abs(C - g) <= S + 1e-6) {
            const P = C - g;
            if (Math.abs(P) > 1e-6) {
              const q = P > 0 ? 1 : -1;
              y.push({
                node: L * (c + 1) + N,
                dof: 0,
                value: q * M / E * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const v = S > 1e-6 ? S : w, M = b / v;
        for (let L = 0; L <= a; L++) for (let N = 0; N <= c; N++) {
          const A = N * w, C = L * x;
          if (Math.abs(A - f) <= S + 1e-6 && Math.abs(C - g) <= S + 1e-6) {
            const P = A - f;
            if (Math.abs(P) > 1e-6) {
              const q = P > 0 ? 1 : -1;
              y.push({
                node: L * (c + 1) + N,
                dof: 0,
                value: q * M / E * 2
              });
            }
          }
        }
      }
      const p = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 1;
      console.log(`Zapata: ${e}x${o}m, t=${n}m, ${c}x${a} elem`), console.log(`  col=${l}m, P=${d}, Mx=${r}, My=${b}, ks=${$}`);
      try {
        const v = Cn({
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
          springs: I,
          pointLoads: y
        });
        console.log(`  Solved: w_max = ${v.maxW.toExponential(4)}`);
        const M = v.nodeResults.map((Z) => [
          Z.x,
          Z.y,
          0
        ]), L = M.length;
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
        const N = v.elementResults.map((Z) => [
          ...Z.nodes
        ]);
        N.push([
          L,
          L + 4
        ]), N.push([
          L + 1,
          L + 5
        ]), N.push([
          L + 2,
          L + 6
        ]), N.push([
          L + 3,
          L + 7
        ]), N.push([
          L + 4,
          L + 5
        ]), N.push([
          L + 5,
          L + 6
        ]), N.push([
          L + 6,
          L + 7
        ]), N.push([
          L + 7,
          L + 4
        ]), N.push([
          L,
          L + 1
        ]), N.push([
          L + 1,
          L + 2
        ]), N.push([
          L + 2,
          L + 3
        ]), N.push([
          L + 3,
          L
        ]), t.nodes.val = M, t.elements.val = N;
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
        const C = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((Z, K) => {
          const le = Z.x, oe = Z.y;
          (le < 1e-6 || le > e - 1e-6 || oe < 1e-6 || oe > o - 1e-6) && C.set(K, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const P = /* @__PURE__ */ new Map();
        if (P.set(L + 4, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), P.set(L + 5, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), P.set(L + 6, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), P.set(L + 7, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), t.nodeInputs && (t.nodeInputs.val = {
          supports: C,
          loads: P
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
          const Z = v.elementResults.length, K = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
          v.elementResults.forEach((X, re) => {
            K.set(re, [
              X.Mxx,
              X.Mxx,
              X.Mxx
            ]), le.set(re, [
              X.Myy,
              X.Myy,
              X.Myy
            ]), oe.set(re, [
              X.Mxy,
              X.Mxy,
              X.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: K,
            bendingYY: le,
            bendingXY: oe
          };
        }
        const q = Ze();
        q && (q.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function es() {
      const e = j("Lx") || 0.4, o = j("Ly") || 0.4, n = j("t") || 0.025, l = j("dBolt") || 0.022, s = j("sx") || 0.28, c = j("sy") || 0.28, a = j("colA") || 0.2, i = j("meshSize") || 8e-3, u = j("E") || 2e8, d = j("nu") || 0.3, r = u / (2 * (1 + d)), b = j("P") || -200, $ = Math.round(j("nBolts") || 4), w = e / 2, x = o / 2, f = l / 2, g = a / 2, S = [];
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
      const { nodes: I, elements: E } = eo({
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
      }), F = (A, C) => {
        for (const [P, q] of S) if ((A - P) * (A - P) + (C - q) * (C - q) < f * f) return true;
        return false;
      }, y = E.filter((A) => {
        const C = (I[A[0]][0] + I[A[1]][0] + I[A[2]][0]) / 3, P = (I[A[0]][1] + I[A[1]][1] + I[A[2]][1]) / 3;
        return !F(C, P);
      }), m = I, p = /* @__PURE__ */ new Map();
      for (let A = 0; A < m.length; A++) {
        const C = m[A][0], P = m[A][1];
        for (const [q, Z] of S) {
          const K = Math.sqrt((C - q) * (C - q) + (P - Z) * (P - Z));
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
        const C = m[A][0], P = m[A][1];
        Math.abs(C - w) <= g && Math.abs(P - x) <= g && M++;
      }
      const L = b / Math.max(M, 1);
      for (let A = 0; A < m.length; A++) {
        const C = m[A][0], P = m[A][1];
        if (Math.abs(C - w) <= g && Math.abs(P - x) <= g) {
          const q = v.get(A) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          q[2] += L, v.set(A, q);
        }
      }
      const N = {
        elasticities: new Map(y.map((A, C) => [
          C,
          u
        ])),
        elasticitiesOrthogonal: new Map(y.map((A, C) => [
          C,
          u
        ])),
        thicknesses: new Map(y.map((A, C) => [
          C,
          n
        ])),
        poissonsRatios: new Map(y.map((A, C) => [
          C,
          d
        ])),
        shearModuli: new Map(y.map((A, C) => [
          C,
          r
        ]))
      };
      console.log(`Placa Base: ${e * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${y.length} triangulos, ${m.length} nodos`);
      try {
        const A = Ht(m, y, {
          supports: p,
          loads: v
        }, N), C = Ao(m, y, N, A);
        t.nodes.val = m, t.elements.val = y, A && t.deformOutputs && (t.deformOutputs.val = A), t.nodeInputs && (t.nodeInputs.val = {
          supports: p,
          loads: v
        }), t.elementInputs && (t.elementInputs.val = {}), C && t.analyzeOutputs && (t.analyzeOutputs.val = C);
        let P = 0;
        A && A.deformations && A.deformations.forEach((q) => {
          const Z = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2]);
          P = Math.max(P, Z);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (A) {
        console.warn("Placa Base failed:", A.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function ts() {
      const e = j("colB") || 0.3, o = j("colH") || 0.3, n = j("colT") || 8e-3, l = j("colLen") || 1.5, s = j("Lx") || 0.45, c = j("Ly") || 0.45, a = j("tPlaca") || 0.025, i = j("dBolt") || 0.022, u = j("sx") || 0.32, d = j("sy") || 0.32, r = Math.round(j("nSubColV") || 6), b = Math.round(j("nSubColH") || 4), $ = Math.round(j("nSubPlaca") || 10), w = j("E") || 2e8, x = j("nu") || 0.3, f = w / (2 * (1 + x)), g = j("P") || -300, S = s / 2, I = c / 2, E = i / 2, F = e / 2, y = o / 2, m = [], p = [], v = $, M = s / v, L = c / v, N = (me, J) => J * (v + 1) + me;
      for (let me = 0; me <= v; me++) for (let J = 0; J <= v; J++) m.push([
        J * M,
        me * L,
        0
      ]);
      const A = [
        [
          S - u / 2,
          I - d / 2
        ],
        [
          S + u / 2,
          I - d / 2
        ],
        [
          S + u / 2,
          I + d / 2
        ],
        [
          S - u / 2,
          I + d / 2
        ]
      ], C = (me, J) => {
        for (const [he, Le] of A) if ((me - he) * (me - he) + (J - Le) * (J - Le) < E * E) return true;
        return false;
      }, P = p.length;
      for (let me = 0; me < v; me++) for (let J = 0; J < v; J++) {
        const he = (J + 0.5) * M, Le = (me + 0.5) * L;
        C(he, Le) || p.push([
          N(J, me),
          N(J + 1, me),
          N(J + 1, me + 1),
          N(J, me + 1)
        ]);
      }
      const q = p.length - P, Z = r, K = b, le = [
        [
          S - F,
          I - y
        ],
        [
          S + F,
          I - y
        ],
        [
          S + F,
          I + y
        ],
        [
          S - F,
          I + y
        ]
      ], oe = p.length, X = [
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
      ], re = (me, J) => {
        for (let he = 0; he < (v + 1) * (v + 1); he++) if (Math.abs(m[he][0] - me) < M * 0.3 && Math.abs(m[he][1] - J) < L * 0.3 && Math.abs(m[he][2]) < 1e-6) return he;
        return -1;
      };
      for (const [me, J] of X) {
        const [he, Le] = le[me], [se, Ae] = le[J], De = [];
        for (let lt = 0; lt <= Z; lt++) {
          const ht = [], ko = lt / Z * l;
          for (let ro = 0; ro <= K; ro++) {
            const Kt = ro / K, Zt = he + Kt * (se - he), Tn = Le + Kt * (Ae - Le);
            if (lt === 0) {
              const Qt = re(Zt, Tn);
              if (Qt >= 0) {
                ht.push(Qt);
                continue;
              }
            }
            let An = -1;
            for (let Qt = 0; Qt < m.length; Qt++) if (Math.abs(m[Qt][0] - Zt) < 1e-6 && Math.abs(m[Qt][1] - Tn) < 1e-6 && Math.abs(m[Qt][2] - ko) < 1e-6) {
              An = Qt;
              break;
            }
            An >= 0 ? ht.push(An) : (ht.push(m.length), m.push([
              Zt,
              Tn,
              ko
            ]));
          }
          De.push(ht);
        }
        for (let lt = 0; lt < Z; lt++) for (let ht = 0; ht < K; ht++) p.push([
          De[lt][ht],
          De[lt][ht + 1],
          De[lt + 1][ht + 1],
          De[lt + 1][ht]
        ]);
      }
      const Ee = p.length - oe, ie = /* @__PURE__ */ new Map();
      for (let me = 0; me < (v + 1) * (v + 1); me++) {
        const J = m[me][0], he = m[me][1];
        for (const [Le, se] of A) {
          const Ae = Math.sqrt((J - Le) * (J - Le) + (he - se) * (he - se));
          Ae >= E * 0.5 && Ae <= E * 2 && ie.set(me, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const we = /* @__PURE__ */ new Map(), V = [];
      for (let me = 0; me < m.length; me++) Math.abs(m[me][2] - l) < 1e-6 && V.push(me);
      const ue = g / Math.max(V.length, 1);
      for (const me of V) we.set(me, [
        0,
        0,
        ue,
        0,
        0,
        0
      ]);
      const Ie = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let me = P; me < P + q; me++) Ie.elasticities.set(me, w), Ie.poissonsRatios.set(me, x), Ie.thicknesses.set(me, a), Ie.shearModuli.set(me, f);
      for (let me = oe; me < oe + Ee; me++) Ie.elasticities.set(me, w), Ie.poissonsRatios.set(me, x), Ie.thicknesses.set(me, n), Ie.shearModuli.set(me, f);
      console.log(`Col+Placa 3D: col ${e * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${q} Q4 placa + ${Ee} Q4 columna = ${p.length} total`), console.log(`  ${m.length} nodos, P=${g} kN`);
      try {
        const me = Ht(m, p, {
          supports: ie,
          loads: we
        }, Ie), J = Ao(m, p, Ie, me);
        t.nodes.val = m, t.elements.val = p, me && t.deformOutputs && (t.deformOutputs.val = me), t.nodeInputs && (t.nodeInputs.val = {
          supports: ie,
          loads: we
        }), t.elementInputs && (t.elementInputs.val = Ie), J && t.analyzeOutputs && (t.analyzeOutputs.val = J);
        let he = 0;
        (me == null ? void 0 : me.deformations) && me.deformations.forEach((Le) => {
          const se = Math.sqrt(Le[0] * Le[0] + Le[1] * Le[1] + Le[2] * Le[2]);
          he = Math.max(he, se);
        }), console.log(`  max|u| = ${he.toExponential(4)}`);
      } catch (me) {
        console.warn("Col+Placa failed:", me.message), t.nodes.val = m, t.elements.val = p, t.nodeInputs && (t.nodeInputs.val = {
          supports: ie,
          loads: we
        });
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function os() {
      const e = j("H") || 6, o = j("angle") || 45, n = j("bTop") || 3, l = j("bBot") || 3, s = j("meshSize") || 2, c = j("E") || 5e4, a = j("nu") || 0.3, i = j("gamma") || 18, u = j("c") || 15, d = j("phi") || 30, r = j("qs") || 0, b = e / Math.tan(o * Math.PI / 180), $ = l + b + n, w = e, x = [
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
      }), S = f, I = [], E = /* @__PURE__ */ new Map();
      for (let y = 0; y < S.length; y++) {
        const m = S[y][0], p = S[y][1];
        Math.abs(p + w) < 1e-6 ? (I.push({
          node: y,
          fixX: true,
          fixY: true
        }), E.set(y, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - $) < 1e-6) && (I.push({
          node: y,
          fixX: true,
          fixY: false
        }), E.set(y, [
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
        const y = S.map((C) => [
          C[0],
          C[1]
        ]), m = g.map((C) => [
          C[0],
          C[1],
          C[2]
        ]), p = ra({
          nodes: y,
          elements: m,
          E: c,
          nu: a,
          gamma: i,
          c: u,
          phi: d,
          thickness: 1,
          supports: I,
          surcharge: r,
          surfaceYThreshold: F
        }), v = S.map((C) => [
          C[0],
          0,
          C[1]
        ]);
        t.nodes.val = v, t.elements.val = g;
        const M = /* @__PURE__ */ new Map();
        for (let C = 0; C < p.displacements.length; C++) {
          const [P, q] = p.displacements[C];
          M.set(C, [
            P,
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
          supports: E
        }), t.elementInputs && (t.elementInputs.val = {});
        const L = /* @__PURE__ */ new Map();
        for (let C = 0; C < p.plasticStrain.length; C++) {
          const P = p.plasticStrain[C];
          L.set(C, [
            P,
            P,
            P
          ]);
        }
        t.analyzeOutputs && (t.analyzeOutputs.val = {
          membraneXX: L
        });
        let N = 0;
        for (const [C, P] of p.displacements) {
          const q = Math.sqrt(C * C + P * P);
          N = Math.max(N, q);
        }
        let A = 0;
        for (const C of p.plasticStrain) A = Math.max(A, C);
        console.log(`Talud SRM: ${S.length} nodos, ${g.length} triangulos`), console.log(`  H=${e}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${p.fos.toFixed(3)}`), console.log(`  max|u| = ${N.toExponential(4)}`), console.log(`  max \u03B5_pl = ${A.toExponential(4)}`), p.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : p.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (y) {
        console.warn("Talud SRM failed:", y.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    let Yt = null, mt = null, Ut = null;
    function Cs() {
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
    function it(e) {
      const o = qo.find((n) => n.id === _);
      return e / o.toM;
    }
    function rt(e) {
      const o = qo.find((n) => n.id === _);
      return e * o.toM;
    }
    function fo(e) {
      const o = Nn.find((l) => l.id === W.forceId), n = qo.find((l) => l.id === W.lengthId);
      return e / (o.toKN / (n.toM * n.toM));
    }
    function dn(e) {
      const o = Nn.find((l) => l.id === W.forceId), n = qo.find((l) => l.id === W.lengthId);
      return e * (o.toKN / (n.toM * n.toM));
    }
    function pn() {
      return W.label;
    }
    function qs() {
      switch (qo.find((o) => o.id === _).id) {
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
    function Fs() {
      const e = fo(20594), o = fo(58840), n = Math.max(1, Math.round((o - e) / 40));
      return [
        Math.round(e),
        Math.round(o),
        n
      ];
    }
    function ns(e, o, n, l, s) {
      const c = Ce.steelVigaType, a = c === 0 ? Uo() : Zo();
      if (Ce.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = `b${n}${i}`, r = `h${n}${i}`, b = {};
          b[d] = +it(u.b).toFixed(2), b[r] = +it(u.h).toFixed(2), e.addBinding(b, d, {
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
          d && (o[parseInt(d[1])].b = rt(i.value), $e()), r && (o[parseInt(r[1])].h = rt(i.value), $e());
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
          d && (o[parseInt(d[1])].profileIdx = i.value, $e());
        });
      } else if (c === 2) {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = {}, r = `${n}${i}`;
          d[`bf${r}`] = +it(u.bf ?? 0.2).toFixed(3), d[`h${r}`] = +it(u.hf ?? 0.4).toFixed(3), d[`tf${r}`] = +it(u.tf ?? 0.015).toFixed(3), d[`tw${r}`] = +it(u.tw ?? 0.01).toFixed(3), e.addBinding(d, `bf${r}`, {
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
            u === `bf${r}` && (o[d].bf = rt(i.value), $e()), u === `h${r}` && (o[d].hf = rt(i.value), $e()), u === `tf${r}` && (o[d].tf = rt(i.value), $e()), u === `tw${r}` && (o[d].tw = rt(i.value), $e());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const u = o[i], d = {}, r = `${n}${i}`;
          d[`bc${r}`] = +it(u.bc ?? 0.2).toFixed(3), d[`hc${r}`] = +it(u.hc ?? 0.3).toFixed(3), d[`t${r}`] = +it(u.t ?? 8e-3).toFixed(3), e.addBinding(d, `bc${r}`, {
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
            u === `bc${r}` && (o[d].bc = rt(i.value), $e()), u === `hc${r}` && (o[d].hc = rt(i.value), $e()), u === `t${r}` && (o[d].t = rt(i.value), $e());
          }
        });
      }
    }
    function $o() {
      var _a2;
      if (mt) {
        try {
          mt.dispose();
        } catch {
        }
        mt = null;
      }
      const e = document.getElementById("sections");
      if (e && (e.innerHTML = ""), z !== "edificio" && z !== "frame") {
        e && (e.style.display = "none");
        return;
      }
      const o = Cs();
      if (!o) return;
      o.style.display = "";
      const n = k, l = Math.round(((_a2 = Q.nPisos) == null ? void 0 : _a2.val) ?? 3), s = qs(), c = Fs(), a = ee.length || 1, i = ne.length || 1;
      for (; Ce.perFloor.length < l; ) {
        const m = Ce.perFloor.length > 0 ? JSON.parse(JSON.stringify(Ce.perFloor[Ce.perFloor.length - 1])) : wt(a, i);
        Ce.perFloor.push(m);
      }
      Ce.perFloor.length > l && (Ce.perFloor.length = l);
      for (const m of Ce.perFloor) {
        for (; m.vigasX.length < a; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : kt());
        for (m.vigasX.length > a && (m.vigasX.length = a); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : kt());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      mt = new Ho({
        title: `Sections (${n.label})`,
        container: o
      });
      const u = {
        colMat: Ce.colMat
      };
      if (mt.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        Ce.colMat = m.value, $o(), $e();
      }), Ce.colMat === 0) {
        const m = {
          forma: Ce.colShape
        };
        mt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          Ce.colShape = v.value, $o(), $e();
        });
        const p = {
          fc: +fo(Ce.fc).toFixed(1)
        };
        mt.addBinding(p, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${pn()})`
        }), mt.on("change", (v) => {
          var _a3;
          ((_a3 = v.target) == null ? void 0 : _a3.key) === "fc" && (Ce.fc = dn(v.value), $e());
        });
      } else if (Ce.colMat === 1) {
        const m = {
          colType: Ce.steelColType
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
          Ce.steelColType = p.value, $o(), $e();
        });
      }
      mt.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: Ce.vigaMat
      };
      if (mt.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        Ce.vigaMat = m.value, $o(), $e();
      }), Ce.vigaMat === 1) {
        const m = {
          vigaType: Ce.steelVigaType
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
          Ce.steelVigaType = p.value, $o(), $e();
        });
      }
      const r = Ce.steelColType === 0 ? Uo() : Zo();
      Ce.steelVigaType === 0 ? Uo() : Zo();
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
        const p = Ce.perFloor[m], v = mt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (Ce.colMat === 0) if (Ce.colShape === 1) {
          const M = {
            dCol: +it(p.dCol).toFixed(2)
          };
          v.addBinding(M, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (L) => {
            var _a3;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "dCol" && (p.dCol = rt(L.value), $e());
          });
        } else {
          const M = {
            bCol: +it(p.bCol).toFixed(2),
            hCol: +it(p.hCol).toFixed(2)
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
          }), v.on("change", (L) => {
            var _a3, _b;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bCol" && (p.bCol = rt(L.value), $e()), ((_b = L.target) == null ? void 0 : _b.key) === "hCol" && (p.hCol = rt(L.value), $e());
          });
        }
        else if (Ce.colMat === 1) if (Ce.steelColType <= 1) {
          const M = {
            col: p.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: r
          }).on("change", (L) => {
            p.colProfileIdx = L.value, $e();
          });
        } else if (Ce.steelColType === 2) {
          const M = {
            bf: +it(p.colBf ?? 0.3).toFixed(3),
            h: +it(p.colHf ?? 0.3).toFixed(3),
            tf: +it(p.colTf ?? 0.02).toFixed(3),
            tw: +it(p.colTw ?? 0.012).toFixed(3)
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
          }), v.on("change", (L) => {
            var _a3, _b, _c, _d;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bf" && (p.colBf = rt(L.value), $e()), ((_b = L.target) == null ? void 0 : _b.key) === "h" && (p.colHf = rt(L.value), $e()), ((_c = L.target) == null ? void 0 : _c.key) === "tf" && (p.colTf = rt(L.value), $e()), ((_d = L.target) == null ? void 0 : _d.key) === "tw" && (p.colTw = rt(L.value), $e());
          });
        } else {
          const M = {
            bc: +it(p.colBc ?? 0.3).toFixed(3),
            hc: +it(p.colHc ?? 0.3).toFixed(3),
            t: +it(p.colT ?? 0.01).toFixed(3)
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
          }), v.on("change", (L) => {
            var _a3, _b, _c;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = rt(L.value), $e()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = rt(L.value), $e()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (p.colT = rt(L.value), $e());
          });
        }
        else {
          const M = {
            bc: +it(p.colBc ?? 0.3).toFixed(3),
            hc: +it(p.colHc ?? 0.3).toFixed(3),
            t: +it(p.colT ?? 0.01).toFixed(3),
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
          const L = +fo(1e8).toFixed(0), N = +fo(3e8).toFixed(0), A = Math.max(1, Math.round((N - L) / 200));
          v.addBinding(M, "Es", {
            min: L,
            max: N,
            step: A,
            label: `Es (${pn()})`
          }), v.addBinding(M, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(M, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${pn()})`
          }), v.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (C) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = C.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = rt(C.value), $e()), ((_b = C.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = rt(C.value), $e()), ((_c = C.target) == null ? void 0 : _c.key) === "t" && (p.colT = rt(C.value), $e()), ((_d = C.target) == null ? void 0 : _d.key) === "Es" && (p.colEs = dn(C.value), $e()), ((_e2 = C.target) == null ? void 0 : _e2.key) === "nuS" && (p.colNuS = C.value, $e()), ((_f = C.target) == null ? void 0 : _f.key) === "fc" && (p.colFc = dn(C.value), $e()), ((_g = C.target) == null ? void 0 : _g.key) === "nuC" && (p.colNuC = C.value, $e());
          });
        }
        if (p.vigasX.length > 0) {
          const M = v.addFolder({
            title: `Vigas X (${p.vigasX.length})`,
            expanded: false
          });
          ns(M, p.vigasX, "x", s, b);
        }
        if (p.vigasY.length > 0) {
          const M = v.addFolder({
            title: `Vigas Y (${p.vigasY.length})`,
            expanded: false
          });
          ns(M, p.vigasY, "y", s, b);
        }
      }
      mt.addBlade({
        view: "separator"
      });
      const $ = mt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: _e,
        direccion: dt === "x" ? 0 : 1,
        cantidad: et
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (_e = m.value, $e()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (dt = m.value === 0 ? "x" : "y", $e()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (et = Math.round(m.value), $e());
      }), mt.addBlade({
        view: "separator"
      });
      const x = mt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: ut,
        espesor: +it($t).toFixed(3),
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (ut = m.value, $e()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && ($t = rt(m.value), $e()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (Pt = Math.round(m.value), $e()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Nt = Math.round(m.value), $e());
      }), mt.addBlade({
        view: "separator"
      });
      const g = mt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +it(Qe).toFixed(3),
        subdivH: Me,
        subdivW: Re
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Qe = rt(m.value), $e()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (Me = Math.round(m.value), $e()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (Re = Math.round(m.value), $e());
      });
      const I = ee.length || 1, E = ne.length || 1, F = I + 1, y = E + 1;
      if (I > 0) {
        const m = g.addFolder({
          title: `Muros dir X (${I} vanos)`,
          expanded: false
        });
        for (let p = 0; p < I; p++) for (let v = 0; v < y; v++) {
          const M = `wx_${p}_${v}`, L = je.some((C) => C.dir === "x" && C.bay === p && C.axisIdx === v), N = {};
          N[M] = L;
          const A = `Vano X${p + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          m.addBinding(N, M, {
            label: A
          }).on("change", (C) => {
            C.value ? je.push({
              dir: "x",
              bay: p,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : je = je.filter((P) => !(P.dir === "x" && P.bay === p && P.axisIdx === v)), $e();
          });
        }
      }
      if (E > 0) {
        const m = g.addFolder({
          title: `Muros dir Y (${E} vanos)`,
          expanded: false
        });
        for (let p = 0; p < E; p++) for (let v = 0; v < F; v++) {
          const M = `wy_${p}_${v}`, L = je.some((C) => C.dir === "y" && C.bay === p && C.axisIdx === v), N = {};
          N[M] = L;
          const A = `Vano Y${p + 1} / Eje X${v + 1}`;
          m.addBinding(N, M, {
            label: A
          }).on("change", (C) => {
            C.value ? je.push({
              dir: "y",
              bay: p,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : je = je.filter((P) => !(P.dir === "y" && P.bay === p && P.axisIdx === v)), $e();
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
      if (ce || (ce = e.innerHTML), ye) {
        try {
          ye.dispose();
        } catch {
        }
        ye = null;
      }
      if (Yt) {
        try {
          Yt.dispose();
        } catch {
        }
        Yt = null;
      }
      e.innerHTML = "";
      const o = z.charAt(0).toUpperCase() + z.slice(1);
      ye = new Ho({
        title: `Parameters \u2014 ${o}`,
        container: e
      });
      const n = Dn()[z];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = Q[a.key].val;
        for (const a of n) ye.addBinding(s, a.key, {
          min: Q[a.key].min,
          max: Q[a.key].max,
          step: Q[a.key].step,
          label: Q[a.key].label
        });
        const c = ye.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const i = {
            min: Q[a.key].min,
            max: Q[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            Q[a.key] && (Q[a.key].min = i.min, Q[a.key].max = i.max, Q[a.key].val < i.min && (Q[a.key].val = i.min), Q[a.key].val > i.max && (Q[a.key].val = i.max)), Gt(), $e();
          });
        }
        ye.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && Q[i]) {
            if (Q[i].val = a.value, z === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const u = Math.round(Q.nVanosX.val), d = Math.round(Q.nVanosY.val);
                for (; ee.length < u; ) ee.push(ee[ee.length - 1] ?? k.defaultSpan);
                for (ee.length > u && (ee.length = u); ne.length < d; ) ne.push(ne[ne.length - 1] ?? k.defaultSpan * 0.8);
                ne.length > d && (ne.length = d);
              }
              Gt();
            }
            $e();
          }
        });
      }
      if (z === "edificio") {
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
          const c = k;
          Ut = new Ho({
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
            $ && (ee[parseInt($[1]) - 1] = r.value, $e());
          });
          const u = Ut.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let r = 0; r < ne.length; r++) d[`svy_${r + 1}`] = ne[r];
          for (let r = 0; r < ne.length; r++) u.addBinding(d, `svy_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${r + 1}`
          });
          u.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (ne[parseInt($[1]) - 1] = r.value, $e());
          });
        }
      }
      if ($o(), ye) {
        ye.addBlade({
          view: "separator"
        });
        const s = Ko()[z];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((i, u) => {
            c[i.label] = u;
          });
          const a = {
            apoyo: vt
          };
          ye.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (i) => {
            vt = i.value, $e();
          });
        }
        if (z === "placa-3q" || z === "placa-q4") {
          const c = {
            teoria: pt
          };
          ye.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            pt = a.value, $e();
          });
        }
      }
      const l = jn()[z];
      if (l && l.length > 0) {
        Yt = new Ho({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: e
        });
        const s = {};
        for (const a of l) s[a.key] = tt[a.key].val;
        for (const a of l) Yt.addBinding(s, a.key, {
          min: tt[a.key].min,
          max: tt[a.key].max,
          step: tt[a.key].step,
          label: tt[a.key].label
        });
        const c = Yt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: tt[a.key].min,
            max: tt[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            tt[a.key] && (tt[a.key].min = i.min, tt[a.key].max = i.max, tt[a.key].val < i.min && (tt[a.key].val = i.min), tt[a.key].val > i.max && (tt[a.key].val = i.max)), Gt(), $e();
          });
        }
        Yt.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && tt[i]) {
            if (tt[i].val = a.value, t.nodeInputs) {
              const u = t.nodeInputs.val;
              u.supports && (t.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => bn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (Q[s]) Q[s].val = c, $e(), Gt();
          else if (tt[s]) {
            if (tt[s].val = c, t.nodeInputs) {
              const a = t.nodeInputs.val;
              a.supports && (t.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              bn(), Gt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in Q) s[c] = Q[c].val;
          for (const c in tt) s[c] = tt[c].val;
          return s;
        },
        setGenerator: Ke,
        createCustomPanel: (s, c, a) => Ps(s, c, a),
        removeCustomPanel: (s) => {
          ss(s);
        }
      };
    }
    const fn = /* @__PURE__ */ new Map();
    function Ps(e, o, n) {
      var _a2;
      ss(e);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const c = new Ho({
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
      }), fn.set(e, {
        pane: c,
        values: a
      }), console.log(`Panel "${e}" created with ${Object.keys(o).length} params`), a;
    }
    function ss(e) {
      const o = fn.get(e);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        fn.delete(e);
      }
    }
    function Os() {
      if (ye) {
        try {
          ye.dispose();
        } catch {
        }
        ye = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ce && (n.innerHTML = ce);
    }
    const ve = document.createElement("div");
    ve.id = "cad3d-panel";
    const as = document.createElement("style");
    as.textContent = `
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
  `, document.head.appendChild(as), da() === "light" && document.documentElement.classList.add("awatif-light"), pa((e) => {
      e === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), z && yt(true);
    }), ve.innerHTML = `
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
    let bt = null;
    function Ns() {
      var _a2, _b, _c, _d, _e2, _f;
      const e = t.nodes.val, o = t.elements.val, n = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, l = (_b = t.elementInputs) == null ? void 0 : _b.val, s = _, c = h, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${z || "custom"}`), a.push(`# Units: ${c}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${e.length})`), a.push("# idx     X          Y          Z"), e.forEach((d, r) => {
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
      }), a.push("")), z) {
        a.push("## CLI COMMAND");
        const d = Object.entries(Q).map(([r, b]) => `${r}=${b.val}`).join(" ");
        a.push(`cad.${z === "edificio" ? "building" : z}(${d})`);
      }
      return a.join(`
`);
    }
    let No = false;
    function _s() {
      var _a2, _b, _c, _d;
      if (bt) {
        bt.remove(), bt = null, No = false;
        return;
      }
      const e = Ns();
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
        bt == null ? void 0 : bt.remove(), bt = null, No = false;
      }), (_b = bt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = bt.querySelector("#export-body"), n = bt.querySelector("#export-minimize");
        No = !No, No ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", bt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", bt.style.width = "720px");
      }), (_c = bt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = bt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = bt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = bt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = t.nodes.val, n = t.elements.val, l = (_a3 = t.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = t.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: z || "custom",
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
      const e = ve.querySelector("#cad3d-info");
      if (e) {
        const o = t.nodes.val.length, n = t.elements.val, l = n.length, s = ((_c = (_b = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, a = 0, i = 0;
        for (const d of n) d.length === 2 ? c++ : d.length === 3 ? a++ : d.length === 4 && i++;
        let u = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (u += ` | ${c}fr`, i > 0 && (u += ` ${i}q4`), a > 0 && (u += ` ${a}tri`)), e.textContent = u;
      }
    }
    function un() {
      var _a2;
      if (!At || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val, n = t.nodeInputs.val, l = t.elementInputs.val;
      if (!(e.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, e.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = ia(e, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          fe = c, ae = e.map((d) => [
            ...d
          ]), gt = 0;
          const { extent: a } = no(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let d = 0;
            for (let r = 0; r < e.length; r++) {
              const b = i[r * 6] || 0, $ = i[r * 6 + 1] || 0, w = i[r * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + $ * $ + w * w));
            }
            qe = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const u = `${z} \u2014 ${e.length}n ${o.length}e`;
          be.render(c, {
            title: u
          }), be.div.style.display = "", _o(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), fe = null;
      }
    }
    function mn() {
      ke && (cancelAnimationFrame(ke), ke = 0), ae.length > 0 && (t.nodes.val = ae.map((e) => [
        ...e
      ])), be.div.style.display = "none", fe = null;
    }
    function _o() {
      var _a2;
      if (ke && cancelAnimationFrame(ke), !(fe == null ? void 0 : fe.modeShapes) || !ae.length) return;
      const e = fe.modeShapes[gt];
      if (!e) return;
      const o = ((_a2 = fe.frequencies) == null ? void 0 : _a2[gt]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ae.length, c = t.elements.rawVal, { extent: a } = no(), i = ve.querySelector("#cad3d-modal-scale"), u = i && parseFloat(i.value) || 5;
      let d = 0;
      for (let E = 0; E < s; E++) {
        const F = e[E * 6] || 0, y = e[E * 6 + 1] || 0, m = e[E * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(F * F + y * y + m * m));
      }
      const r = d > 1e-12 ? a * u / 100 / d : 1, b = Ze();
      if (!b) return;
      let $ = null, w = null, x = null;
      b.scene.traverse((E) => {
        var _a3, _b;
        !$ && E.isPoints && E.geometry && ($ = E), !w && E.isLineSegments && E.geometry && !E.name && (w = E), !x && E.isMesh && ((_a3 = E.material) == null ? void 0 : _a3.transparent) && ((_b = E.material) == null ? void 0 : _b.opacity) < 0.5 && E.geometry && (x = E);
      });
      const f = new Float32Array(s * 3), g = [];
      for (const E of c) if (E.length === 2) g.push([
        E[0],
        E[1]
      ]);
      else for (let F = 0; F < E.length; F++) g.push([
        E[F],
        E[(F + 1) % E.length]
      ]);
      const S = new Float32Array(g.length * 6);
      function I() {
        const E = (performance.now() - l) / 1e3, F = Math.sin(2 * Math.PI * n * E) * r;
        for (let y = 0; y < s; y++) {
          const m = ae[y];
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
            const [p, v, M, L] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[v * 3], f[v * 3 + 1], f[v * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]), y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]), y.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]);
          }
          if (y.length > 0) {
            const m = x.geometry, p = new Float32Array(y), v = m.getAttribute("position");
            v && v.array.length === p.length ? (v.array.set(p), v.needsUpdate = true) : m.setAttribute("position", new bo(p, 3));
          }
        }
        b.render(), ke = requestAnimationFrame(I);
      }
      ke = requestAnimationFrame(I);
    }
    function bn() {
      var _a2, _b, _c, _d, _e2;
      if (!t.deformOutputs || !t.analyzeOutputs || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val;
      let n = t.nodeInputs.val;
      const l = t.elementInputs.val;
      if (e.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = j("CM") ?? 0, f = j("CV") ?? 0, g = x + f, S = j("Ex") ?? 0, I = j("Ey") ?? 0;
        if (g === 0 && S === 0 && I === 0) return;
        const E = /* @__PURE__ */ new Map(), F = [];
        for (let C = 0; C < e.length; C++) n.supports.has(C) || F.push(C);
        const y = (C) => Math.round(C * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((C, P) => {
          m.add(`${y(e[P][0])},${y(e[P][1])}`);
        });
        const p = /* @__PURE__ */ new Set();
        for (const C of F) m.has(`${y(e[C][0])},${y(e[C][1])}`) && p.add(C);
        const v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (S !== 0 || I !== 0) {
          let C = -1 / 0, P = -1 / 0;
          for (const Z of p) C = Math.max(C, y(e[Z][0])), P = Math.max(P, y(e[Z][1]));
          const q = /* @__PURE__ */ new Map();
          for (const Z of p) {
            const K = y(e[Z][2]);
            q.has(K) || q.set(K, []), q.get(K).push(Z);
          }
          q.forEach((Z) => {
            if (S !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const le of Z) if (y(e[le][0]) === C) {
                const oe = y(e[le][1]);
                K.has(oe) || (K.add(oe), v.add(le));
              }
            }
            if (I !== 0) {
              const K = /* @__PURE__ */ new Set();
              for (const le of Z) if (y(e[le][1]) === P) {
                const oe = y(e[le][0]);
                K.has(oe) || (K.add(oe), M.add(le));
              }
            }
          });
        }
        const L = 9.81, N = /* @__PURE__ */ new Map();
        for (let C = 0; C < o.length; C++) {
          const P = o[C], q = ((_a2 = l.densities) == null ? void 0 : _a2.get(C)) ?? 0;
          if (!(Math.abs(q) < 1e-15)) {
            if (P.length === 2) {
              const Z = ((_b = l.areas) == null ? void 0 : _b.get(C)) ?? 0, K = e[P[0]], le = e[P[1]], oe = Math.sqrt((le[0] - K[0]) ** 2 + (le[1] - K[1]) ** 2 + (le[2] - K[2]) ** 2), re = -(q * Z * oe * L) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + re), N.set(P[1], (N.get(P[1]) ?? 0) + re);
            } else if (P.length >= 3) {
              const Z = ((_c = l.thicknesses) == null ? void 0 : _c.get(C)) ?? 0;
              let K = 0;
              if (P.length === 3) {
                const [X, re, Ee] = P.map((ie) => e[ie]);
                K = 0.5 * Math.abs((re[0] - X[0]) * (Ee[1] - X[1]) - (Ee[0] - X[0]) * (re[1] - X[1]));
              } else if (P.length === 4) {
                const [X, re, Ee, ie] = P.map((we) => e[we]);
                if (K = 0.5 * Math.abs((re[0] - X[0]) * (Ee[1] - X[1]) - (Ee[0] - X[0]) * (re[1] - X[1])) + 0.5 * Math.abs((Ee[0] - X[0]) * (ie[1] - X[1]) - (ie[0] - X[0]) * (Ee[1] - X[1])), K < 1e-10) {
                  const we = [
                    re[0] - X[0],
                    re[1] - X[1],
                    re[2] - X[2]
                  ], V = [
                    ie[0] - X[0],
                    ie[1] - X[1],
                    ie[2] - X[2]
                  ], ue = [
                    we[1] * V[2] - we[2] * V[1],
                    we[2] * V[0] - we[0] * V[2],
                    we[0] * V[1] - we[1] * V[0]
                  ];
                  K = Math.sqrt(ue[0] ** 2 + ue[1] ** 2 + ue[2] ** 2);
                }
              }
              const oe = -(q * Z * K * L) / P.length;
              for (const X of P) N.set(X, (N.get(X) ?? 0) + oe);
            }
          }
        }
        const A = /* @__PURE__ */ new Set();
        for (const C of o) C.length === 2 && (A.add(C[0]), A.add(C[1]));
        for (const C of F) {
          const P = v.has(C) ? S : 0, q = M.has(C) ? I : 0, Z = N.get(C) ?? 0, K = A.has(C) ? g : 0, le = Z + K;
          (P !== 0 || q !== 0 || Math.abs(le) > 1e-10) && E.set(C, [
            P,
            q,
            le,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: E
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
          let g = 0, S = -1, I = 0, E = 0;
          x.deformations && x.deformations.forEach((v, M) => {
            const L = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            L > g && (g = L, S = M, I = v[0], E = v[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(I * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(E * 1e3).toFixed(4)} mm`);
          const F = performance.now(), y = Ao(e, o, l, x), m = performance.now() - F;
          y && (t.analyzeOutputs.val = y, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const p = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${p.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const f = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${e.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), At && setTimeout(() => un(), 50);
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
    function ls(e) {
      const o = e / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function hn(e, o, n, l) {
      const s = o - 2 * n, c = 2 * e * n + s * l, a = (e * o * o * o - (e - l) * s * s * s) / 12, i = (2 * n * e * e * e + s * l * l * l) / 12, u = (2 * e * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: a,
        Iy: i,
        J: u
      };
    }
    function xn(e, o, n) {
      const l = e - 2 * n, s = o - 2 * n, c = e * o - l * s, a = (e * o * o * o - l * s * s * s) / 12, i = (o * e * e * e - s * l * l * l) / 12, u = (e - n) * (o - n), d = 2 * ((e - n) / n + (o - n) / n), r = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: c,
        Iz: a,
        Iy: i,
        J: r
      };
    }
    function Rs(e, o, n, l, s, c, a) {
      const u = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = e - 2 * n, r = o - 2 * n, b = e * o - d * r, $ = (e * o * o * o - d * r * r * r) / 12, w = (o * e * e * e - r * d * d * d) / 12, x = d * r, f = d * r * r * r / 12, g = r * d * d * d / 12, S = b + u * x, I = $ + u * f, E = w + u * g, F = l / (2 * (1 + s)), y = (e - n) * (o - n), m = 2 * ((e - n) / n + (o - n) / n), p = 4 * y * y / (m > 0 ? m : 1);
      return {
        A: S,
        Iz: I,
        Iy: E,
        J: p,
        Es: l,
        Gs: F,
        A_steel: b,
        A_conc: x
      };
    }
    function oo() {
      if (!t.elementInputs) return;
      const e = t.elements.val, o = k, n = {
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
      if ((z === "edificio" || z === "frame") && de.size > 0) {
        const { colMat: s, vigaMat: c, colShape: a, fc: i, perFloor: u } = Ce, d = 4700 * Math.sqrt(i / 1e3) * 1e3, r = d / (2 * 1.2), b = 24 / 9.80665, $ = o.E, w = o.G, x = o.rho;
        for (let f = 0; f < e.length; f++) {
          if (He.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, M), n.thicknesses.set(f, Qe), n.shearModuli.set(f, v / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Tt.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, M), n.thicknesses.set(f, $t), n.shearModuli.set(f, v / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const g = de.has(f), S = Fe.get(f) ?? 0, I = u[S] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let E, F, y, m;
          if (g) if (s === 0) F = d, y = r, m = b, E = a === 1 ? ls(I.dCol) : gn(I.bCol, I.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: I.dCol
          } : {
            type: "rect",
            b: I.bCol,
            h: I.hCol
          });
          else if (s === 1) {
            F = $, y = w, m = x;
            const v = Ce.steelColType;
            if (v <= 1) {
              const M = po[I.colProfileIdx] ?? po[0];
              E = {
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
              const M = I.colBf ?? 0.3, L = I.colHf ?? 0.3, N = I.colTf ?? 0.02, A = I.colTw ?? 0.012;
              E = hn(M, L, N, A);
              const C = `I${(L * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: M,
                h: L,
                tf: N,
                tw: A,
                name: C
              });
            } else {
              const M = I.colBc ?? 0.3, L = I.colHc ?? 0.3, N = I.colT ?? 0.01;
              E = xn(M, L, N);
              const A = `\u25A1${(L * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(N * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: M,
                h: L,
                tw: N,
                name: A
              });
            }
          } else {
            const v = I.colBc ?? 0.3, M = I.colHc ?? 0.3, L = I.colT ?? 0.01, N = I.colFc ?? 28e3, A = I.colEs ?? 2e8, C = I.colNuS ?? 0.3;
            I.colNuC;
            const P = Rs(v, M, L, A, C, N);
            E = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, F = P.Es, y = P.Gs;
            const q = 7.85, Z = 24 / 9.80665;
            m = (q * P.A_steel + Z * P.A_conc) / (P.A_steel + P.A_conc);
            const K = `CFT ${(M * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(L * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: v,
              h: M,
              tw: L,
              name: K
            });
          }
          else {
            const v = Je.get(f), M = v ? v.dir === "x" ? I.vigasX : I.vigasY : [], L = v ? M[v.bay] ?? M[0] ?? kt() : kt();
            if (c === 0) F = d, y = r, m = b, E = gn(L.b, L.h), n.sectionShapes.set(f, {
              type: "rect",
              b: L.b,
              h: L.h
            });
            else {
              F = $, y = w, m = x;
              const N = Ce.steelVigaType;
              if (N <= 1) {
                const A = po[L.profileIdx ?? 0] ?? po[0];
                E = {
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
              } else if (N === 2) {
                const A = L.bf ?? 0.2, C = L.hf ?? 0.4, P = L.tf ?? 0.015, q = L.tw ?? 0.01;
                E = hn(A, C, P, q);
                const Z = `I${(C * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: A,
                  h: C,
                  tf: P,
                  tw: q,
                  name: Z
                });
              } else {
                const A = L.bc ?? 0.2, C = L.hc ?? 0.3, P = L.t ?? 8e-3;
                E = xn(A, C, P);
                const q = `\u25A1${(C * 100).toFixed(0)}x${(A * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: A,
                  h: C,
                  tw: P,
                  name: q
                });
              }
            }
          }
          const p = ge.get(f);
          if (p) {
            if ((p.material ?? 1) === 0 ? (F = d, y = r, m = b) : (F = $, y = w, m = x), p.secType === "rect" && p.b && p.h) E = gn(p.b, p.h), n.sectionShapes.set(f, {
              type: "rect",
              b: p.b,
              h: p.h
            });
            else if (p.secType === "circ" && p.b) E = ls(p.b), n.sectionShapes.set(f, {
              type: "circ",
              d: p.b
            });
            else if ((p.secType === "W" || p.secType === "HSS") && p.profileIdx !== void 0) {
              const M = po[p.profileIdx] ?? po[0];
              E = {
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
              E = hn(p.bf, p.hf, p.tf, p.tw);
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
              E = xn(p.bc, p.hc, p.t);
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
          n.elasticities.set(f, F), n.shearModuli.set(f, y), n.areas.set(f, E.A), n.momentsOfInertiaZ.set(f, E.Iy), n.momentsOfInertiaY.set(f, E.Iz), n.torsionalConstants.set(f, E.J), n.densities.set(f, m);
        }
      } else for (let s = 0; s < e.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      t.elementInputs.val = n;
    }
    function is(e) {
      ve.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === e);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = ve.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (y) => {
        y.stopPropagation(), ve.classList.add("collapsed");
      }), (_b = ve.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (y) => {
        y.stopPropagation(), ve.classList.remove("collapsed");
      }), ve.querySelectorAll("[data-ex]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.ex;
          is(p), Ye.example(p);
        });
      }), ve.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.view;
          so(p), ve.querySelectorAll("[data-view]").forEach((v) => v.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = ve.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), z = "", Ts.val = false, Os(), Ye.clear();
      }), (_d = ve.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && (Bt = false, mo()), Jt && Yo(), qt = !qt, (_a3 = ve.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", qt);
        const p = Ze();
        p && (p.controls.enabled = !qt), qt || Wo();
      }), (_e2 = ve.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && (Bt = false, mo()), qt && Wo(), Jt = !Jt, (_a3 = ve.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Jt), Jt ? Ws() : Yo();
      }), (_f = ve.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), qt && Wo(), Jt && Yo(), Bt = !Bt, (_a3 = ve.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Bt), Bt || mo();
      }), (_g = ve.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), Ye.clear(), st = null;
      }), (_h = ve.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), _s();
      });
      let e = "";
      const o = ve.querySelector("#cad3d-io-menu"), n = ve.querySelector("#cad3d-io-file");
      function l(y, m) {
        t.nodes.val = y.nodes, t.elements.val = y.elements, t.nodeInputs.val = y.nodeInputs, t.elementInputs.val = y.elementInputs, t.deformOutputs.val = {}, t.analyzeOutputs.val = {}, console.log(`${m}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function s(y) {
        de = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
        const m = /* @__PURE__ */ new Map();
        for (let q = 0; q < y.stories.length; q++) m.set(y.stories[q].name, q);
        for (let q = 0; q < y.elementTypes.length; q++) {
          const Z = y.elementTypes[q], K = y.elementStories[q], le = m.get(K) ?? 0;
          Fe.set(q, le), Z === "COLUMN" || Z === "BRACE" ? de.add(q) : Te.add(q);
        }
        z = "edificio";
        const p = y.grids.filter((q) => q.dir === "X").sort((q, Z) => q.coord - Z.coord), v = y.grids.filter((q) => q.dir === "Y").sort((q, Z) => q.coord - Z.coord);
        let M, L, N, A;
        if (p.length > 0 || v.length > 0) M = p.map((q) => q.coord), L = v.map((q) => q.coord), N = p.map((q) => q.label), A = v.map((q) => q.label);
        else {
          const q = new Set(y.nodes.map((K) => K[0])), Z = new Set(y.nodes.map((K) => K[1]));
          M = [
            ...q
          ].sort((K, le) => K - le), L = [
            ...Z
          ].sort((K, le) => K - le), N = M.map((K, le) => String(le + 1)), A = L.map((K, le) => String.fromCharCode(65 + le));
        }
        const C = y.stories.length > 0 ? Math.max(...y.stories.map((q) => q.elev)) : Math.max(...y.nodes.map((q) => q[2]));
        pe = M, Pe = L, Ue = C, setTimeout(() => {
          yt(), Po(M, L, C, N, A), sn(y.stories, M, L), vn(), yn();
        }, 100);
        const P = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const q of y.elementTypes) P[q]++;
        console.log(`E2K grids: X=[${N.join(",")}] Y=[${A.join(",")}]`), console.log(`E2K stories: ${y.stories.map((q) => `${q.name}@${q.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${P.COLUMN} columns, ${P.BEAM} beams, ${P.BRACE} braces`), Ge();
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
            e === "export-e2k" ? c(Ha({
              ...y,
              title: "Awatif Model",
              e2kModel: st ?? void 0
            }), "model.e2k") : e === "export-py" ? c(Wa(y), "model_opensees.py") : e === "export-tcl" && c(Ya(y), "model_opensees.tcl");
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
              const v = Ra(p);
              st = v, l(v, "E2K imported"), s(v);
            } else if (e === "import-py") {
              const v = Ga(p);
              l(v, "OpenSeesPy imported");
            } else if (e === "import-tcl") {
              const v = Ja(p);
              l(v, "OpenSees Tcl imported");
            }
          } catch (v) {
            alert("Import error: " + v.message), console.error(v);
          }
        }, m.readAsText(y), n.value = "";
      });
      const a = ve.querySelector("#cad3d-force-unit");
      a && (a.value = h, a.addEventListener("change", (y) => {
        y.stopPropagation(), h = a.value, k = xo(h, _), z && Ke(z);
      }));
      const i = ve.querySelector("#cad3d-length-unit");
      i && (i.value = _, i.addEventListener("change", (y) => {
        y.stopPropagation(), _ = i.value, k = xo(h, _), z && Ke(z);
      })), ve.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.preset, v = R[p];
          v && (h = v.force, _ = v.length, W = v.stress, k = xo(h, _), a && (a.value = h), i && (i.value = _), ve.querySelectorAll("[data-preset]").forEach((M) => {
            M.classList.toggle("active", M.dataset.preset === p);
          }), z && Ke(z), console.log(`Preset: ${p} \u2192 ${h}+${_}, stress: ${W.label}`));
        });
      }), (_i = ve.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), Zs();
      }), (_j = ve.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), Qs();
      }), (_k = ve.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), ta();
      }), (_l = ve.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), na();
      }), (_m = ve.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), At = !At, (_a3 = ve.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", At);
        const p = ve.querySelector("#cad3d-mode-prev"), v = ve.querySelector("#cad3d-mode-next"), M = ve.querySelector("#cad3d-mode-label"), L = ve.querySelector("#cad3d-modal-scale");
        if (At) {
          const N = Ze();
          ((_b2 = N == null ? void 0 : N.settings) == null ? void 0 : _b2.loads) && (U = N.settings.loads.rawVal, N.settings.loads.val = false), un(), p.style.display = "", v.style.display = "", M.style.display = "", L && (L.style.display = ""), u();
        } else mn(), p.style.display = "none", v.style.display = "none", M.style.display = "none", L && (L.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && $e(), setTimeout(() => {
          var _a4;
          const N = Ze();
          ((_a4 = N == null ? void 0 : N.settings) == null ? void 0 : _a4.loads) && U && (N.settings.loads.val = true);
        }, 600);
      });
      function u() {
        var _a3;
        const y = ve.querySelector("#cad3d-mode-label");
        if (!y || !(fe == null ? void 0 : fe.frequencies)) return;
        const m = fe.frequencies[gt], p = m > 0 ? 1 / m : 0, v = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let M = 0; M <= gt; M++) {
          const L = (_a3 = fe.massParticipation) == null ? void 0 : _a3[M];
          if (L) for (let N = 0; N < 6; N++) v[N] += L[N];
        }
        y.textContent = `Modo ${gt + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${p.toFixed(3)}s \u2014 \u03A3Ux=${(v[0] * 100).toFixed(1)}% \u03A3Uy=${(v[1] * 100).toFixed(1)}% \u03A3Rz=${(v[5] * 100).toFixed(1)}%`;
      }
      (_n2 = ve.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(fe == null ? void 0 : fe.modeShapes)) return;
        gt = (gt - 1 + fe.modeShapes.length) % fe.modeShapes.length;
        const m = fe.modeShapes[gt], { extent: p } = no();
        let v = 0;
        for (let M = 0; M < ae.length; M++) {
          const L = m[M * 6] || 0, N = m[M * 6 + 1] || 0, A = m[M * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(L * L + N * N + A * A));
        }
        qe = v > 1e-12 ? p * 0.05 / v : 1, _o(), u();
      }), (_o2 = ve.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(fe == null ? void 0 : fe.modeShapes)) return;
        gt = (gt + 1) % fe.modeShapes.length;
        const m = fe.modeShapes[gt], { extent: p } = no();
        let v = 0;
        for (let M = 0; M < ae.length; M++) {
          const L = m[M * 6] || 0, N = m[M * 6 + 1] || 0, A = m[M * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(L * L + N * N + A * A));
        }
        qe = v > 1e-12 ? p * 0.05 / v : 1, _o(), u();
      });
      const d = ve.querySelector("#cad3d-modal-scale");
      d == null ? void 0 : d.addEventListener("mousedown", (y) => y.stopPropagation()), d == null ? void 0 : d.addEventListener("change", () => {
        At && (fe == null ? void 0 : fe.modeShapes) && _o();
      });
      const r = ve.querySelector("#cad3d-cli-toggle"), b = ve.querySelector("#cad3d-cli-panel"), $ = ve.querySelector("#cad3d-cli-output"), w = ve.querySelector("#cad3d-cmd"), x = [];
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
          y.preventDefault(), cs();
          return;
        }
        if ((y.ctrlKey || y.metaKey) && (y.key === "y" || y.key === "z" && y.shiftKey)) {
          y.preventDefault(), ds();
          return;
        }
        if ((y.key === "Delete" || y.key === "Backspace") && nt.size > 0) {
          y.preventDefault(), nt.forEach((m) => G.add(m)), nt.clear(), Xt && (Xt.remove(), Xt = null), $e();
          return;
        }
        if (y.key === "Escape") {
          if (Jt) if (at !== null) {
            at = null;
            const m = Ze();
            Mt && m && (m.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), St && m && (m.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), m == null ? void 0 : m.render();
          } else Yo();
          qt && Wo(), Bt && (Bt = false, mo(), (_a3 = ve.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), w == null ? void 0 : w.addEventListener("keydown", (y) => {
        if (y.stopPropagation(), y.key === "Enter") {
          const m = w.value.trim();
          if (m) {
            x.unshift(m), f = -1, $ && ($.textContent += `> ${m}
`);
            try {
              const p = new Function("cad", `return ${m}`)(Ye);
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
      let g = false, S = 0, I = 0, E = 0, F = 0;
      ve.addEventListener("mousedown", (y) => {
        const m = y.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        g = true;
        const p = ve.getBoundingClientRect();
        ve.style.bottom = "unset", S = y.clientX, I = y.clientY, E = p.left, F = p.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        g && (y.preventDefault(), ve.style.left = E + (y.clientX - S) + "px", ve.style.top = F + (y.clientY - I) + "px");
      }), window.addEventListener("mouseup", () => {
        g = false;
      }), Ge();
    }, 10);
    function Ze() {
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
      const o = Ze();
      if (!o) return;
      const { extent: n } = no();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const c = ca(), a = new xa(l, 20, c.grid, c.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some(($) => $ instanceof Go))).forEach((b) => {
        b.traverse(($) => {
          $.geometry && $.geometry.dispose(), $.material && ($.material.map && $.material.map.dispose(), $.material.dispose());
        }), o.scene.remove(b);
      });
      const u = 0.05 * l, d = new Jo();
      d.name = "viewerAxes";
      const r = c.axisArrow;
      d.add(new Go(new Se(1, 0, 0), new Se(), 1, r, 0.2, 0.2)), d.add(new Go(new Se(0, 1, 0), new Se(), 1, r, 0.2, 0.2)), d.add(new Go(new Se(0, 0, 1), new Se(), 1, r, 0.2, 0.2)), d.children.forEach((b) => b.scale.set(u, u, u));
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
        const g = new qn(x);
        g.needsUpdate = true;
        const S = new Vo(new Xo({
          map: g,
          depthTest: false,
          transparent: true
        }));
        S.position.set(w[0], w[1], w[2]), S.scale.set(0.4 * u, 0.4 * u, 1), S.renderOrder = 99, d.add(S);
      }
      o.scene.add(d), e ? o.render() : so("3d");
    }
    function rs(e, o, n) {
      if (e.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(e[o] - e[o - 1]))), o < e.length - 1 && (l = Math.min(l, Math.abs(e[o + 1] - e[o]))), l * 0.45 || n * 0.1;
    }
    function so(e) {
      var _a2;
      const o = Ze();
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
          const d = parseInt(e.split(":")[1]), r = ((_a2 = Q.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * r, $ = r * 0.45;
          o.renderer.clippingPlanes = [
            new co(new Se(0, 0, -1), b + $),
            new co(new Se(0, 0, 1), -b + $)
          ], a(), u(new Se(n.x, n.y, b + l * 2), new Se(n.x, n.y, b), new Se(0, 1, 0));
        } else if (e === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (e === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (e.startsWith("axisX:")) {
          const d = parseInt(e.split(":")[1]), r = pe[d] ?? n.x;
          if (Pe.length > 1) {
            const $ = rs(pe, d, l);
            o.renderer.clippingPlanes = [
              new co(new Se(-1, 0, 0), r + $),
              new co(new Se(1, 0, 0), -r + $)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (e.startsWith("axisY:")) {
          const d = parseInt(e.split(":")[1]), r = Pe[d] ?? n.y;
          if (pe.length > 1) {
            const $ = rs(Pe, d, l);
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
    function vn() {
      const e = ve.querySelector("#cad3d-axis-buttons");
      if (!e) return;
      if (pe.length < 2 && Pe.length < 2) {
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
          ve.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), r ? (so("3d"), (_a2 = ve.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (so(a), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      pe.forEach((c, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        e.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", e.appendChild(s), Pe.forEach((c, a) => {
        const i = `${a + 1}`;
        e.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function yn() {
      var _a2;
      const e = ve.querySelector("#cad3d-floor-buttons");
      if (!e) return;
      const o = Math.round(((_a2 = Q.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
          ve.querySelectorAll("[data-view]").forEach((r) => r.classList.remove("view-active")), d ? (so("3d"), (_a3 = ve.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (so(c), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(l);
      for (let s = 0; s < o; s++) e.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Hs() {
      so("3d"), ve.querySelectorAll("[data-view]").forEach((e) => e.classList.toggle("view-active", e.dataset.view === "3d"));
    }
    Ye.view = (e) => {
      e = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[e] || e, so(e), ve.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === e));
    };
    let Bt = false, qt = false, Jt = false, It = "line", Ot = [], at = null, Mt = null, St = null, wo = null, _t = null;
    const ct = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, $n = 0.5;
    let wn = [], Rt = null, uo = null;
    const Mo = [], jo = [], Bs = 50;
    function So() {
      Mo.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      }), Mo.length > Bs && Mo.shift(), jo.length = 0;
    }
    function cs() {
      if (Mo.length === 0) return;
      jo.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      });
      const e = Mo.pop();
      t.nodes.val = e.nodes, t.elements.val = e.elements, oo(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    function ds() {
      if (jo.length === 0) return;
      Mo.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      });
      const e = jo.pop();
      t.nodes.val = e.nodes, t.elements.val = e.elements, oo(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    const nt = /* @__PURE__ */ new Set();
    let Ft = null, ao = [], Vt = null, Xt = null;
    function Mn(e) {
      const o = Ze();
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
      const a = new Lo(c, new To({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = e, o.scene.add(a), ao.push(a), o.render();
    }
    function lo() {
      const e = Ze();
      ao.forEach((o) => {
        e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), ao = [], e == null ? void 0 : e.render();
    }
    function io() {
      Xt && Xt.remove();
      const e = D.size > 0 || B;
      if (nt.size === 0 && !e) {
        Xt = null;
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
    `, document.body.appendChild(o), Xt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        sa([
          ...nt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (nt.size === 1) {
          const n = [
            ...nt
          ][0];
          hs(n);
        } else {
          const n = [
            ...nt
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
        nt.forEach((n) => D.add(n)), nt.clear(), lo(), io(), $e();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        B = true, Y.clear(), nt.forEach((n) => Y.add(n)), nt.clear(), lo(), io(), $e();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        D.clear(), B = false, Y.clear(), io(), $e();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        So(), nt.forEach((n) => G.add(n)), nt.clear(), lo(), io(), $e();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        nt.clear(), lo(), io();
      });
    }
    function Wo() {
      var _a2;
      qt = false, nt.clear(), lo(), Xt && (Xt.remove(), Xt = null), (_a2 = ve.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ze();
      o && (o.controls.enabled = true);
    }
    function mo() {
      if (Ft) {
        const e = Ze();
        e == null ? void 0 : e.scene.remove(Ft), Ft.geometry.dispose(), Ft.material.dispose(), Ft = null, e == null ? void 0 : e.render();
      }
      Vt && (Vt.remove(), Vt = null);
    }
    function Ds(e) {
      Sn();
      const o = Ze();
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
        u.setAttribute("position", new fa(i, 3));
        const d = new zo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), r = new Lo(u, d);
        r.computeLineDistances(), r.renderOrder = 9990, o.scene.add(r), wn.push(r);
      }
      o.render();
    }
    function Sn() {
      const e = Ze();
      for (const o of wn) e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      wn = [], uo = null, Rt && (Rt.remove(), Rt = null);
    }
    function ps(e, o, n, l) {
      Rt || (Rt = document.createElement("div"), Rt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Rt));
      const s = l.x - n.x, c = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + c * c + a * a), u = Math.abs(s), d = Math.abs(c), r = Math.abs(a);
      let b = "";
      u > d && u > r ? b = `\u0394X=${s.toFixed(2)}` : d > u && d > r ? b = `\u0394Y=${c.toFixed(2)}` : r > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), Rt.textContent = `${i.toFixed(3)} m  ${b}`, Rt.style.left = e + 20 + "px", Rt.style.top = o - 10 + "px";
    }
    function js(e, o) {
      const l = t.nodes.val[o];
      if (!l) return null;
      const s = new Se(l[0], l[1], l[2]), c = e.clone(), a = c.clone().sub(s), i = 0.3, u = Math.abs(a.x), d = Math.abs(a.y), r = Math.abs(a.z);
      return d < i && r < i && u > 0.01 ? new Se(c.x, s.y, s.z) : u < i && r < i && d > 0.01 ? new Se(s.x, c.y, s.z) : u < i && d < i && r > 0.01 ? new Se(s.x, s.y, c.z) : null;
    }
    function Yo() {
      var _a2;
      const e = Ze();
      Mt && e && (e.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), St && e && (e.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), Sn(), at = null, _t = null, Jt = false, wo && (wo.remove(), wo = null), (_a2 = ve.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), e == null ? void 0 : e.render();
    }
    function Ws() {
      wo && wo.remove();
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
      <button id="ds-node" style="${n(ct.node)}">Node</button>
      <button id="ds-grid" style="${n(ct.grid)}">Grid</button>
      <button id="ds-mid" style="${n(ct.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(ct.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${$n}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(e), wo = e;
      const l = () => {
        const s = e.querySelector("#dt-line"), c = e.querySelector("#dt-arc"), a = e.querySelector("#dt-node"), i = e.querySelector("#dt-area");
        s && (s.style.cssText = o(It === "line")), c && (c.style.cssText = o(It === "arc")), a && (a.style.cssText = o(It === "node")), i && (i.style.cssText = o(It === "area"));
        const u = e.querySelector("#ds-node"), d = e.querySelector("#ds-grid"), r = e.querySelector("#ds-mid"), b = e.querySelector("#ds-track");
        u && (u.style.cssText = n(ct.node)), d && (d.style.cssText = n(ct.grid)), r && (r.style.cssText = n(ct.midpoint)), b && (b.style.cssText = n(ct.track));
      };
      e.querySelector("#dt-line").addEventListener("click", () => {
        It = "line", at = null, _t = null, Ot = [], l();
      }), e.querySelector("#dt-arc").addEventListener("click", () => {
        It = "arc", at = null, _t = null, Ot = [], l();
      }), e.querySelector("#dt-node").addEventListener("click", () => {
        It = "node", at = null, _t = null, Ot = [], l();
      }), e.querySelector("#dt-area").addEventListener("click", () => {
        It = "area", at = null, _t = null, Ot = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), e.querySelector("#ds-node").addEventListener("click", () => {
        ct.node = !ct.node, l();
      }), e.querySelector("#ds-grid").addEventListener("click", () => {
        ct.grid = !ct.grid, l();
      }), e.querySelector("#ds-mid").addEventListener("click", () => {
        ct.midpoint = !ct.midpoint, l();
      }), e.querySelector("#ds-track").addEventListener("click", () => {
        ct.track = !ct.track, ct.track || Sn(), l();
      }), e.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ct.gridSize = parseFloat(s.target.value) || 0.5;
      }), e.querySelector("#dt-undo").addEventListener("click", () => cs()), e.querySelector("#dt-redo").addEventListener("click", () => ds());
    }
    function fs(e, o, n, l) {
      const s = l.getBoundingClientRect(), c = (e - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new Is();
      i.setFromCamera(new ks(c, a), n);
      const u = t.nodes.val, d = t.elements.val, r = 0.12;
      if (ct.node) {
        let w = -1, x = 1 / 0;
        for (let f = 0; f < u.length; f++) {
          const g = u[f], S = new Se(g[0], g[1], g[2]).project(n), I = Math.sqrt((S.x - c) ** 2 + (S.y - a) ** 2);
          I < r && I < x && (x = I, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Se(...u[w]),
          snapType: "node"
        };
      }
      if (ct.midpoint) {
        let w = 1 / 0, x = null;
        for (const f of d) {
          if (f.length !== 2) continue;
          const g = u[f[0]], S = u[f[1]], I = new Se((g[0] + S[0]) / 2, (g[1] + S[1]) / 2, (g[2] + S[2]) / 2), E = I.clone().project(n), F = Math.sqrt((E.x - c) ** 2 + (E.y - a) ** 2);
          F < r * 0.8 && F < w && (w = F, x = I);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (ct.grid) {
        const w = new co(new Se(0, 0, 1), 0), x = new Se();
        if (i.ray.intersectPlane(w, x)) {
          const f = ct.gridSize || $n;
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
    function us(e) {
      const o = Ze();
      if (!o) return;
      const n = t.nodes.val;
      if (St && (o.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), e.worldPos) {
        const l = e.snapType === "node" ? 16776960 : e.snapType === "mid" ? 16711935 : e.snapType === "grid" ? 65535 : 8947848, s = e.snapType === "node" ? 0.08 : 0.06, c = e.snapType === "mid" ? new ua(s * 2, s * 2, s * 2) : new ma(s, 12, 12), a = new ba({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        St = new ga(c, a), St.position.copy(e.worldPos), St.renderOrder = 9999, o.scene.add(St);
      }
      if (Mt && (o.scene.remove(Mt), Mt.geometry.dispose(), Mt.material.dispose(), Mt = null), at !== null && e.worldPos) {
        const l = n[at], s = new Dt();
        if (It === "arc" && _t !== null) {
          const a = n[_t], i = ms(new Se(l[0], l[1], l[2]), new Se(a[0], a[1], a[2]), e.worldPos, 16), u = [];
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
        const c = new To({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Mt = new go(s, c), It === "arc" && _t !== null && (Mt = new Lo(s, c)), Mt.renderOrder = 9999, o.scene.add(Mt);
      }
      o.render();
    }
    function ms(e, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const a = c / l, i = o.clone().multiplyScalar(2).sub(e.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), u = (1 - a) * (1 - a), d = 2 * (1 - a) * a, r = a * a;
        s.push(new Se(u * e.x + d * i.x + r * n.x, u * e.y + d * i.y + r * n.y, u * e.z + d * i.z + r * n.z));
      }
      return s;
    }
    function En(e) {
      if (e.nodeIdx !== null) return e.nodeIdx;
      if (!e.worldPos) return -1;
      const o = t.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - e.worldPos.x) < n && Math.abs(o[s][1] - e.worldPos.y) < n && Math.abs(o[s][2] - e.worldPos.z) < n) return s;
      So();
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
    function Ys(e) {
      var _a2;
      if (It === "node") {
        if (!e.worldPos) return;
        So();
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
        const o = En(e);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (o === at) return;
        So();
        const n = [
          ...t.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === at && s[1] === o || s[1] === at && s[0] === o)) || (n.push([
          at,
          o
        ]), t.elements.val = n, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        }), at = o;
        return;
      }
      if (It === "arc") {
        const o = En(e);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (_t === null) {
          if (o === at) return;
          _t = o;
          return;
        }
        if (o === at || o === _t) return;
        const n = t.nodes.val, l = new Se(...n[at]), s = new Se(...n[_t]), c = new Se(...n[o]), a = Math.max(4, Math.round(((_a2 = Q.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = ms(l, s, c, a);
        So();
        const u = [
          ...t.nodes.val
        ], d = [
          ...t.elements.val
        ];
        let r = at;
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
        }, at = o, _t = null;
        return;
      }
      if (It === "area") {
        const o = En(e);
        if (o < 0) return;
        if (Ot.length >= 3 && o === Ot[0]) {
          So();
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
              maxMeshSize: $n || 0.5
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
          const n = Ot[Ot.length - 2], l = t.nodes.val, s = Ze();
          if (s) {
            const c = new Dt().setFromPoints([
              new Se(...l[n]),
              new Se(...l[o])
            ]), a = new Lo(c, new To({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function bs(e) {
      const o = Ze();
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
      c.setAttribute("position", new bo(s, 3)), Ft = new Lo(c, new To({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Ft.renderOrder = 9999, o.scene.add(Ft), o.render();
    }
    function In(e) {
      const o = Ze();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ks((e.clientX - n.left) / n.width * 2 - 1, -((e.clientY - n.top) / n.height) * 2 + 1), s = new Is();
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
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new ha(w, x), g = new Se(), S = new Se();
          d.closestPointToPoint(f.getCenter(new Se()), g), f.closestPointToPoint(g, true, S);
          const I = g.distanceTo(S);
          I < i && (i = I, u = b);
        } else if ($.length === 3) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), g = new Se();
          if (d.intersectTriangle(w, x, f, false, g)) {
            const I = d.origin.distanceTo(g);
            I < i && (i = I, u = b);
          } else {
            const I = w.add(x).add(f).divideScalar(3), E = new Se();
            d.closestPointToPoint(I, E);
            const F = E.distanceTo(I);
            F < i && (i = F, u = b);
          }
        } else if ($.length === 4) {
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), g = new Se(...c[$[3]]), S = new Se();
          let I = d.intersectTriangle(w, x, f, false, S);
          if (I) {
            const E = d.origin.distanceTo(S);
            E < i && (i = E, u = b);
          }
          if (I = d.intersectTriangle(w, f, g, false, S), I) {
            const E = d.origin.distanceTo(S);
            E < i && (i = E, u = b);
          }
        }
      }
      const { extent: r } = no();
      return i < r * 0.1 ? u : -1;
    }
    function te(e, o = 4) {
      return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e6 ? e.toExponential(2) : Math.abs(e) >= 100 ? e.toFixed(1) : e.toFixed(o);
    }
    function kn(e, o, n = 12) {
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
          c += `<td class="${d}">${te(u, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function ze(e, o) {
      return `<span class="frac"><span class="frac-num">${e}</span><span class="frac-den">${o}</span></span>`;
    }
    function O(e, o, n) {
      let l = `<span class="var">${e}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Gs(e, o, n, l, s, c, a) {
      const i = `${ze(O("E") + "\xB7" + O("A"), O("L"))}`, u = `${ze("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3")}`, d = `${ze("12\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB3")}`, r = `${ze(O("G") + "\xB7" + O("J"), O("L"))}`, b = `${ze("4\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`, $ = `${ze("4\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${i} = ${ze(te(e) + "\xB7" + te(o), te(a))} = <span class="highlight">${te(e * o / a)}</span></div>
      <div>${u} = ${ze("12\xB7" + te(e) + "\xB7" + te(n), te(a) + "\xB3")} = <span class="highlight">${te(12 * e * n / a ** 3)}</span></div>
      <div>${d} = ${ze("12\xB7" + te(e) + "\xB7" + te(l), te(a) + "\xB3")} = <span class="highlight">${te(12 * e * l / a ** 3)}</span></div>
      <div>${r} = ${ze(te(s) + "\xB7" + te(c), te(a))} = <span class="highlight">${te(s * c / a)}</span></div>
      <div>${b} = ${ze("4\xB7" + te(e) + "\xB7" + te(l), te(a))} = <span class="highlight">${te(4 * e * l / a)}</span></div>
      <div>${$} = ${ze("4\xB7" + te(e) + "\xB7" + te(n), te(a))} = <span class="highlight">${te(4 * e * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${O("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ze(O("EA"), O("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ze("\u2212" + O("EA"), O("L"))}</span>
        <span class="cell">0</span><span class="cell">${ze("12" + O("EI", "z"), O("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ze("\u2212" + O("EA"), O("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ze(O("EA"), O("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Js(e) {
      if (e.length === 2) {
        const n = to(e[1], e[0]), l = vo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${O("l")} = cos(\u03B1) = ${ze("\u0394x", O("L"))} = ${ze(te(n[0]), te(l))} = <span class="highlight">${te(s)}</span></div>
        <div>${O("m")} = cos(\u03B2) = ${ze("\u0394y", O("L"))} = ${ze(te(n[1]), te(l))} = <span class="highlight">${te(c)}</span></div>
        <div>${O("n")} = cos(\u03B3) = ${ze("\u0394z", O("L"))} = ${ze(te(n[2]), te(l))} = <span class="highlight">${te(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${O("l")}</span><span class="cell">${O("m")}</span><span class="cell">${O("n")}</span>
          <span class="cell">${ze("\u2212" + O("m"), O("D"))}</span><span class="cell">${ze(O("l"), O("D"))}</span><span class="cell">0</span>
          <span class="cell">${ze("\u2212" + O("l") + "\xB7" + O("n"), O("D"))}</span><span class="cell">${ze("\u2212" + O("m") + "\xB7" + O("n"), O("D"))}</span><span class="cell">${O("D")}</span>
        </span>
        &nbsp; donde ${O("D")} = \u221A(${O("l")}\xB2 + ${O("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${O("T")} = ${O("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${O("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Vs() {
      return `<div class="fem-eq">
      ${O("K", "global")} = ${O("T")}<sup>T</sup> \xB7 ${O("k", "local")} \xB7 ${O("T")}
    </div>`;
    }
    function Xs(e) {
      const o = e.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${O("K", "global")}[${O("i")}, ${O("j")}] += ${O("K", "elem")}[${O("i")}, ${O("j")}]</div>
      <div style="margin-top:4px">donde ${O("i")}, ${O("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Ks(e) {
      return e ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${O("u", "local")} = ${O("T")} \xB7 ${O("u", "global")}</div>
        <div>${O("f", "local")} = ${O("k", "local")} \xB7 ${O("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${O("f")} = [${O("N", "i")}, ${O("V", "y,i")}, ${O("V", "z,i")}, ${O("M", "x,i")}, ${O("M", "y,i")}, ${O("M", "z,i")}, ${O("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${ze("1", "2" + O("A"))} \xB7 ${O("D")} \xB7 ${O("B")} \xB7 ${O("u")}</div>
      <div>${O("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${O("t")} &nbsp;&nbsp; ${O("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ze(O("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function zn(e, o) {
      const n = e.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let c = 0; c < n; c++) {
          const a = e[s][c], i = (s === c ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${te(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function gs() {
      const e = "0", o = ze(O("EA"), O("L")), n = ze("\u2212" + O("EA"), O("L")), l = ze("12" + O("EI", "z"), O("L") + "\xB3"), s = ze("\u221212" + O("EI", "z"), O("L") + "\xB3"), c = ze("12" + O("EI", "y"), O("L") + "\xB3"), a = ze("\u221212" + O("EI", "y"), O("L") + "\xB3"), i = ze("6" + O("EI", "z"), O("L") + "\xB2"), u = ze("\u22126" + O("EI", "z"), O("L") + "\xB2"), d = ze("6" + O("EI", "y"), O("L") + "\xB2"), r = ze("\u22126" + O("EI", "y"), O("L") + "\xB2"), b = ze(O("GJ"), O("L")), $ = ze("\u2212" + O("GJ"), O("L")), w = ze("4" + O("EI", "z"), O("L")), x = ze("2" + O("EI", "z"), O("L")), f = ze("4" + O("EI", "y"), O("L")), g = ze("2" + O("EI", "y"), O("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', I = [
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
      ], E = [
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
      for (const m of E) y += `<td class="hdr">${m}</td>`;
      y += "</tr>";
      for (let m = 0; m < 12; m++) {
        y += `<tr><td class="hdr">${I[m]}</td>`;
        for (let p = 0; p < 12; p++) if (p < m) y += `<td style="color:var(--fem-border-cell)">${p === 0 && m > 0 ? S : ""}</td>`;
        else {
          const v = F[m][p], M = (m === p ? "diag " : "") + (v !== "0" ? "nz" : "");
          y += `<td class="${M}">${v}</td>`;
        }
        y += "</tr>";
      }
      return y += "</table>", y;
    }
    function Us(e, o, n, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${ze(O("E") + "\xB7" + O("A"), O("L"))}`,
          calc: `${ze(te(e) + "\xD7" + te(o), te(a))}`,
          val: e * o / a,
          label: "Axial"
        },
        {
          name: `${ze("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3")}`,
          calc: `${ze("12\xD7" + te(e) + "\xD7" + te(n), te(a) + "\xB3")}`,
          val: 12 * e * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${ze("6\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB2")}`,
          calc: `${ze("6\xD7" + te(e) + "\xD7" + te(n), te(a) + "\xB2")}`,
          val: 6 * e * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ze("12\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB3")}`,
          calc: `${ze("12\xD7" + te(e) + "\xD7" + te(l), te(a) + "\xB3")}`,
          val: 12 * e * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${ze("6\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB2")}`,
          calc: `${ze("6\xD7" + te(e) + "\xD7" + te(l), te(a) + "\xB2")}`,
          val: 6 * e * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ze(O("G") + "\xB7" + O("J"), O("L"))}`,
          calc: `${ze(te(s) + "\xD7" + te(c), te(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${ze("4\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`,
          calc: `${ze("4\xD7" + te(e) + "\xD7" + te(n), te(a))}`,
          val: 4 * e * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ze("2\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`,
          calc: `${ze("2\xD7" + te(e) + "\xD7" + te(n), te(a))}`,
          val: 2 * e * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ze("4\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`,
          calc: `${ze("4\xD7" + te(e) + "\xD7" + te(l), te(a))}`,
          val: 4 * e * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ze("2\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`,
          calc: `${ze("2\xD7" + te(e) + "\xD7" + te(l), te(a))}`,
          val: 2 * e * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${te(u.val)}</span></div>`).join("")}</div>`;
    }
    function Ln(e, o, n, l) {
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
    function hs(e) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Vt && Vt.remove();
      const o = t.nodes.val, n = t.elements.val, l = n[e], s = l.map((m) => o[m]), c = l.length === 2, a = ((_a2 = t.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = t.deformOutputs) == null ? void 0 : _b.val, u = (_c = t.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const m = vo(to(s[1], s[0])), p = ((_d = a.elasticities) == null ? void 0 : _d.get(e)) ?? 0, v = ((_e2 = a.areas) == null ? void 0 : _e2.get(e)) ?? 0, M = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(e)) ?? 0, L = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(e)) ?? 0, N = ((_h = a.shearModuli) == null ? void 0 : _h.get(e)) ?? 0, A = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(e)) ?? 0;
        `${l[0]}${l[1]}${te(m)}${te(p)}${te(v)}${te(M)}${te(L)}${te(N)}${te(A)}`;
      } else {
        const m = ((_j = a.elasticities) == null ? void 0 : _j.get(e)) ?? 0, p = ((_k = a.thicknesses) == null ? void 0 : _k.get(e)) ?? 0, v = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(e)) ?? 0;
        `${l.join(", ")}${te(m)}${te(p)}${te(v)}`;
      }
      let d = "", r = "", b = "", $ = "", w = "", x = "", f = "", g = "", S = null, I = null, E = null, F = [];
      try {
        if (S = tn(s, a, e), I = on(s), E = jt(_n(I), jt(S, I)), F = c ? [
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
          const M = vo(to(s[1], s[0])), L = ((_m = a.elasticities) == null ? void 0 : _m.get(e)) ?? 0, N = ((_n2 = a.areas) == null ? void 0 : _n2.get(e)) ?? 0, A = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(e)) ?? 0, C = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(e)) ?? 0, P = ((_q = a.shearModuli) == null ? void 0 : _q.get(e)) ?? 0, q = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(e)) ?? 0;
          $ = Gs(L, N, A, C, P, q, M);
        }
        w = Js(s), x = Vs(), f = Xs(l), g = Ks(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', p = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${m}</div>${kn(S, F)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${I.length}\xD7${I.length}) ${p}</div>${kn(I, F)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${kn(E, F)}`;
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
          ], L = m.map((N, A) => `<span class="prop-key">${N}</span>: <span class="${Math.abs(M[A]) > 1e-10 ? "result-val" : ""}">${te(M[A])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${p}:</strong> ${L}</div>`;
        }).join("");
      }
      if (u && c && (i == null ? void 0 : i.deformations) && S && I) {
        const m = (_s2 = u.normals) == null ? void 0 : _s2.get(e), p = (_t2 = u.shearsY) == null ? void 0 : _t2.get(e), v = (_u = u.shearsZ) == null ? void 0 : _u.get(e), M = (_v = u.torsions) == null ? void 0 : _v.get(e), L = (_w = u.bendingsY) == null ? void 0 : _w.get(e), N = (_x = u.bendingsZ) == null ? void 0 : _x.get(e), A = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], C = [];
        for (const oe of l) {
          const X = ((_y = i.deformations) == null ? void 0 : _y.get(oe)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C.push(...X);
        }
        let P = [];
        try {
          P = jt(I, C);
        } catch {
          P = new Array(12).fill(0);
        }
        let q = [];
        try {
          q = jt(S, P);
        } catch {
          q = new Array(12).fill(0);
        }
        const Z = (oe, X) => oe.map((re, Ee) => `<span style="color:${Math.abs(re) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${X[Ee % 6]}=${te(re)}</span>`).join(", "), le = [
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
        ].map((oe, X) => `${oe}${X < 6 ? "\u1D62" : "\u2C7C"}`);
        `${O("u", "global")}${l.map((oe, X) => `<span style="color:var(--fem-label)">nodo ${oe}:</span> ${A.map((re, Ee) => `<span style="color:${Math.abs(C[X * 6 + Ee]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${te(C[X * 6 + Ee])}</span>`).join(", ")}`).join(" | ")}${O("u", "local")}${O("T")}${O("u", "global")}${O("u", "local")}${Z(P, [
          ...A,
          ...A
        ])}${O("f", "local")}${O("k", "local")}${O("u", "local")}${O("f", "local")}${q.map((oe, X) => `<span style="color:${Math.abs(oe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${le[X]}=${te(oe)}</span>`).join(", ")}${O("P", "1")}${O("N", "i")}${te(q[0])}${O("P", "7")}${O("N", "j")}${te(q[6])}${O("P", "2")}${O("V", "y,i")}${te(q[1])}${O("P", "8")}${O("V", "y,j")}${te(q[7])}${O("P", "3")}${O("V", "z,i")}${te(q[2])}${O("P", "9")}${O("V", "z,j")}${te(q[8])}${O("P", "4")}${O("M", "x,i")}${te(q[3])}${O("P", "10")}${O("M", "x,j")}${te(q[9])}${O("P", "5")}${O("M", "y,i")}${te(q[4])}${O("P", "11")}${O("M", "y,j")}${te(q[10])}${O("P", "6")}${O("M", "z,i")}${te(q[5])}${O("P", "12")}${O("M", "z,j")}${te(q[11])}${m ? m.map((oe) => te(oe)).join(", ") : "\u2014"}${p ? p.map((oe) => te(oe)).join(", ") : "\u2014"}${v ? v.map((oe) => te(oe)).join(", ") : "\u2014"}${M ? M.map((oe) => te(oe)).join(", ") : "\u2014"}${L ? L.map((oe) => te(oe)).join(", ") : "\u2014"}${N ? N.map((oe) => te(oe)).join(", ") : "\u2014"}`;
      } else if (u && c) {
        const m = (_z = u.normals) == null ? void 0 : _z.get(e), p = (_A = u.shearsY) == null ? void 0 : _A.get(e), v = (_B = u.shearsZ) == null ? void 0 : _B.get(e), M = (_C = u.torsions) == null ? void 0 : _C.get(e), L = (_D = u.bendingsY) == null ? void 0 : _D.get(e), N = (_E = u.bendingsZ) == null ? void 0 : _E.get(e);
        `${m ? m.map((A) => te(A)).join(", ") : "\u2014"}${p ? p.map((A) => te(A)).join(", ") : "\u2014"}${v ? v.map((A) => te(A)).join(", ") : "\u2014"}${M ? M.map((A) => te(A)).join(", ") : "\u2014"}${L ? L.map((A) => te(A)).join(", ") : "\u2014"}${N ? N.map((A) => te(A)).join(", ") : "\u2014"}`;
      } else if (u && !c) {
        const m = (_F = u.bendingXX) == null ? void 0 : _F.get(e), p = (_G = u.bendingYY) == null ? void 0 : _G.get(e), v = (_H = u.bendingXY) == null ? void 0 : _H.get(e), M = (_I = u.membraneXX) == null ? void 0 : _I.get(e), L = (_J = u.membraneYY) == null ? void 0 : _J.get(e), N = (_K = u.membraneXY) == null ? void 0 : _K.get(e);
        `${m ? m.map((A) => te(A)).join(", ") : "\u2014"}${p ? p.map((A) => te(A)).join(", ") : "\u2014"}${v ? v.map((A) => te(A)).join(", ") : "\u2014"}${M ? M.map((A) => te(A)).join(", ") : "\u2014"}${L ? L.map((A) => te(A)).join(", ") : "\u2014"}${N ? N.map((A) => te(A)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Vt = Aa(e, o, n, a, i, u), Vt.id = "fem-inspect-panel", document.body.appendChild(Vt), (_L = Vt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => mo());
      const y = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = vo(to(s[1], s[0])), p = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(e)) ?? 0, v = ((_b2 = a.areas) == null ? void 0 : _b2.get(e)) ?? 0, M = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(e)) ?? 0, L = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0, N = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(e)) ?? 0, A = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(e)) ?? 0;
        return Us(p, v, M, L, N, A, m);
      })() : void 0;
      Vt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (p) => {
          p.stopPropagation();
          const v = m.dataset.full;
          if (v === "kLocal" && S) {
            const M = c ? gs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Ln(`Elemento ${e} \u2014 Rigidez Local k_local`, M, zn(S, F), y);
          } else if (v === "T" && I) Ln(`Elemento ${e} \u2014 Transformaci\xF3n T`, w, zn(I, F));
          else if (v === "kGlobal" && E) {
            const M = c ? gs() : "<em>Shell 18\xD718</em>";
            Ln(`Elemento ${e} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, zn(E, F), y);
          }
        });
      });
    }
    function xs() {
      const l = [], s = [];
      for (let x = 0; x <= 8; x++) {
        const f = x / 8, g = 30 * f, I = 12 * (1 - f) * (1 - f * 0.3) / 2, E = l.length;
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
          E,
          E + 1
        ]), s.push([
          E + 1,
          E + 2
        ]), s.push([
          E + 2,
          E + 3
        ]), s.push([
          E + 3,
          E
        ]), x > 0 && x < 8 && (s.push([
          E,
          E + 2
        ]), s.push([
          E + 1,
          E + 3
        ])), x > 0) {
          const F = E - 4;
          for (let y = 0; y < 4; y++) s.push([
            F + y,
            E + y
          ]);
          s.push([
            F,
            E + 1
          ]), s.push([
            F + 1,
            E + 2
          ]), s.push([
            F + 2,
            E + 3
          ]), s.push([
            F + 3,
            E
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
    function vs() {
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
    function ys() {
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
        const I = c.length;
        c.push([
          g,
          6 / 2,
          0
        ]);
        const E = c.length;
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
        ]), d.push(E, F), a.push([
          S,
          f * 2
        ]), a.push([
          f * 2,
          E
        ]), a.push([
          I,
          f * 2 + 1
        ]), a.push([
          f * 2 + 1,
          F
        ]), a.push([
          E,
          F
        ]);
      }
      for (const f of d) {
        const g = c[f][0];
        for (let S = 0; S <= 16; S++) {
          const I = 60 * S / 16;
          if (Math.abs(I - g) > 60 * 0.05 && Math.abs(I - g) < 60 * 0.45) {
            const E = c[f][1] < 0 ? S * 2 : S * 2 + 1;
            S % 2 === 0 && a.push([
              f,
              E
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
    function $s() {
      const c = [], a = [];
      for (let g = 0; g <= 12; g++) {
        const S = g * 3.5, I = g * 5 * Math.PI / 180;
        for (let E = 0; E < 6; E++) {
          const F = I + 2 * Math.PI * E / 6, y = 5 * Math.cos(F), m = 5 * Math.sin(F);
          c.push([
            y,
            m,
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
          for (let E = 0; E < 6; E++) a.push([
            S + E,
            I + E
          ]), a.push([
            S + E,
            I + (E + 1) % 6
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
        const I = g * 6;
        for (let E = 0; E < 6; E++) a.push([
          S,
          I + E
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
        const S = 10 * g / 12, I = g * 6;
        for (let E = 0; E < 6; E++) d.set(I + E, [
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
    function ws() {
      const s = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const g = f / 20, S = f * 3;
        let I = 8 * (1 - g * 0.7);
        g > 0.4 && (I *= 0.85), g > 0.7 && (I *= 0.7);
        const E = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let F = 0; F < 3; F++) {
          const y = F * 2 * Math.PI / 3 - Math.PI / 2, m = I * Math.cos(y), p = I * Math.sin(y), v = s.length;
          s.push([
            m,
            p,
            S
          ]), c.push([
            E,
            v
          ]);
          const M = s.length;
          s.push([
            m * 0.5,
            p * 0.5,
            S
          ]), c.push([
            E,
            M
          ]), c.push([
            M,
            v
          ]);
        }
        for (let F = 0; F < 3; F++) {
          const y = E + 1 + F * 2, m = E + 1 + (F + 1) % 3 * 2;
          c.push([
            y,
            m
          ]);
        }
        if (f < 20) {
          const y = E + 7;
          c.push([
            E,
            y
          ]);
          for (let m = 0; m < 3; m++) c.push([
            E + 1 + m * 2,
            y + 1 + m * 2
          ]), c.push([
            E + 2 + m * 2,
            y + 2 + m * 2
          ]), c.push([
            E + 1 + m * 2,
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
    function Ms() {
      const e = [], o = [];
      for (let b = 0; b < 3; b++) {
        const $ = b * 12, w = 15 - b * 2, x = 20 - b * 3, f = 8 - b, g = e.length;
        for (let I = 0; I <= 4; I++) {
          const E = I / 4, F = -f / 2 + f * E, y = x * (1 - E * E * 0.3);
          for (let m = 0; m <= 12; m++) {
            const p = m / 12, v = $ + y * p, M = w * Math.sin(Math.PI * p) * (1 - E * E * 0.5), L = F;
            e.push([
              v,
              L,
              M
            ]);
          }
        }
        const S = 13;
        for (let I = 0; I < 4; I++) for (let E = 0; E < 12; E++) {
          const F = g + I * S + E, y = g + I * S + E + 1, m = g + (I + 1) * S + E + 1, p = g + (I + 1) * S + E;
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
    function Ss() {
      const l = [], s = [];
      for (let x = 0; x <= 15; x++) {
        const f = x / 15, g = x * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let E = 0; E < 12; E++) {
            const F = 2 * Math.PI * E / 12;
            l.push([
              Math.max(I, 1) * Math.cos(F),
              Math.max(I, 1) * Math.sin(F),
              g
            ]);
          }
        } else for (let I = 0; I < 12; I++) {
          const E = 2 * Math.PI * I / 12;
          l.push([
            S * Math.cos(E),
            S * Math.sin(E),
            g
          ]);
        }
      }
      for (let x = 0; x < 15; x++) {
        const f = x * 12, g = (x + 1) * 12;
        for (let I = 0; I < 12; I++) s.push([
          f + I,
          f + (I + 1) % 12
        ]);
        const S = x % 2 === 0 ? 1 : -1;
        for (let I = 0; I < 12; I++) {
          const E = (I + S + 12) % 12;
          s.push([
            f + I,
            g + E
          ]), s.push([
            f + I,
            g + I
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
    function Zs() {
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
    function Qs() {
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
          for (let I = 0; I <= f; I++) w.push(S * Math.sin(2 * Math.PI * I / f));
        }
        $.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await la(async () => {
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
          $.textContent = `Completado: ${S.nSteps} pasos`, ea(e.querySelector("#pushover-canvas"), S.displacements, S.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (g) {
          $.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
        }
      });
    }
    function ea(e, o, n, l) {
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
      const I = x / 5;
      for (let F = 0; F <= 5; F++) {
        const y = r + I * F;
        s.fillText((y * 1e3).toFixed(1), g(y), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const E = f / 5;
      for (let F = 0; F <= 5; F++) {
        const y = $ + E * F;
        s.fillText(y.toFixed(0), i.left - 5, S(y) + 3);
      }
    }
    let Ro = null;
    function ta() {
      if (Ro) {
        Ro.remove(), Ro = null;
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
    `, document.body.appendChild(e), Ro = e, e.querySelector("#nl-close").addEventListener("click", () => {
        e.remove(), Ro = null;
      }), e.querySelector("#nl-test").addEventListener("click", () => oa(e));
    }
    function oa(e) {
      const o = parseFloat(e.querySelector("#nl-fy").value), n = parseFloat(e.querySelector("#nl-e0").value), l = parseFloat(e.querySelector("#nl-b").value), s = parseFloat(e.querySelector("#nl-r0").value), c = parseFloat(e.querySelector("#nl-amp").value), a = parseInt(e.querySelector("#nl-cycles").value), i = 100, u = [];
      for (let K = 0; K < a; K++) {
        const le = c * (1 + K * 0.5);
        for (let oe = 0; oe < i; oe++) {
          const X = oe / i * 2 * Math.PI;
          u.push(le * Math.sin(X));
        }
      }
      const d = o / n, r = l * n;
      let b = 0, $ = 0, w = -d, x = d, f = 0, g = 0, S = 0, I = 0, E = 0, F = 0;
      const y = [];
      for (const K of u) {
        let le = w, oe = x, X = f, re = g, Ee = S, ie = I, we = E, V = F, ue;
        const Ie = K - b;
        if (Math.abs(Ie) < 1e-20) {
          y.push($);
          continue;
        }
        if ((V === 0 || V === 3) && (Ie < 0 ? (V = 2, re = -d, Ee = -o, X = re, ie = 0, we = 0) : (V = 1, re = d, Ee = o, X = re, ie = 0, we = 0)), V === 2 && Ie > 0) {
          V = 1, ie = b, we = $, b < le && (le = b);
          const Ae = (oe - le) / (2 * 1 * d), De = 1 + 0 * Math.pow(Ae, 0.8);
          re = (o * De - r * d * De - we + n * ie) / (n - r), Ee = o * De + r * (re - d * De), X = oe;
        } else if (V === 1 && Ie < 0) {
          V = 2, ie = b, we = $, b > oe && (oe = b);
          const Ae = (oe - le) / (2 * 1 * d), De = 1 + 0 * Math.pow(Ae, 0.8);
          re = (-o * De + r * d * De - we + n * ie) / (n - r), Ee = -o * De + r * (re + d * De), X = le;
        }
        const me = Math.abs((X - re) / d);
        let J = s - 0.925 * me / (0.15 + me);
        J < 0.1 && (J = 0.1);
        const he = (K - ie) / (re - ie), Le = 1 + Math.pow(Math.abs(he), J), se = Math.pow(Le, 1 / J);
        ue = l * he + (1 - l) * he / se, ue = ue * (Ee - we) + we, y.push(ue), b = K, $ = ue, w = le, x = oe, f = X, g = re, S = Ee, I = ie, E = we, F = V;
      }
      const m = e.querySelector("#nl-canvas"), p = m.getContext("2d"), v = m.width, M = m.height;
      p.clearRect(0, 0, v, M);
      const L = Math.max(...u.map(Math.abs)), N = Math.max(...y.map(Math.abs)), A = (v - 40) / (2 * L), C = (M - 40) / (2 * N), P = v / 2, q = M / 2;
      p.strokeStyle = "#444", p.lineWidth = 1, p.beginPath(), p.moveTo(20, q), p.lineTo(v - 20, q), p.stroke(), p.beginPath(), p.moveTo(P, 20), p.lineTo(P, M - 20), p.stroke(), p.fillStyle = "#888", p.font = "10px monospace", p.textAlign = "center", p.fillText("\u03B5 (strain)", v - 40, q - 5), p.fillText("\u03C3 (stress)", P + 30, 15), p.fillText(`\xB1${(L * 100).toFixed(1)}%`, v - 30, q + 12), p.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), p.strokeStyle = "#00ccff", p.lineWidth = 1.5, p.beginPath();
      for (let K = 0; K < u.length; K++) {
        const le = P + u[K] * A, oe = q - y[K] * C;
        K === 0 ? p.moveTo(le, oe) : p.lineTo(le, oe);
      }
      p.stroke(), p.strokeStyle = "#ff333366", p.lineWidth = 1, p.setLineDash([
        4,
        4
      ]), p.beginPath(), p.moveTo(20, q - o * C), p.lineTo(v - 20, q - o * C), p.stroke(), p.beginPath(), p.moveTo(20, q + o * C), p.lineTo(v - 20, q + o * C), p.stroke(), p.setLineDash([]), p.fillStyle = "#ff6666", p.font = "9px monospace", p.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, q - o * C - 5);
      const Z = e.querySelector("#nl-info");
      Z.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function na() {
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
      const a = Ea({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(a);
    }
    let Eo = null;
    function sa(e) {
      Eo && Eo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Uo(), l = Zo(), s = Object.entries(n).map(([d, r]) => `<option value="${r}">${d}</option>`).join(""), c = Object.entries(l).map(([d, r]) => `<option value="${r}">${d}</option>`).join("");
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
    `, document.body.appendChild(o), Eo = o;
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
        o.remove(), Eo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = a.value, r = {
          secType: d
        };
        d === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : d === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : d === "W" || d === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : d === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : d === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, e.forEach((b) => ge.set(b, {
          ...r
        })), o.remove(), Eo = null, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        e.forEach((d) => ge.delete(d)), o.remove(), Eo = null, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      });
    }
    let Io = null;
    function aa(e) {
      var _a2, _b, _c;
      Io && Io.remove();
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
    `, document.body.appendChild(w), Io = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), Io = null, mo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        G.add(e), w.remove(), Io = null, mo(), $e();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Io = null, hs(e);
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
        const d = Ze();
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
        const w = Math.min(u, r), x = Math.max(u, r), f = Math.min(d, b), g = Math.max(d, b), S = t.nodes.val, I = t.elements.val, E = [];
        for (let F = 0; F < I.length; F++) {
          const y = I[F], m = y.map((p) => c(S[p])).filter(Boolean);
          if (m.length !== 0) if ($) m.every((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= g) && E.push(F);
          else {
            if (m.some((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= g)) {
              E.push(F);
              continue;
            }
            if (y.length === 2) {
              const v = m[0], M = m[1];
              i(v.x, v.y, M.x, M.y, w, f, x, g) && E.push(F);
            }
          }
        }
        return E;
      }
      function i(u, d, r, b, $, w, x, f) {
        const g = (I, E) => I >= $ && I <= x && E >= w && E <= f;
        if (g(u, d) || g(r, b)) return true;
        const S = (I, E, F, y, m, p, v, M) => {
          const L = (F - I) * (M - p) - (y - E) * (v - m);
          if (Math.abs(L) < 1e-10) return false;
          const N = ((m - I) * (M - p) - (p - E) * (v - m)) / L, A = ((m - I) * (y - E) - (p - E) * (F - I)) / L;
          return N >= 0 && N <= 1 && A >= 0 && A <= 1;
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
          const r = Ze();
          if (!r) return;
          const b = fs(u.clientX, u.clientY, r.camera, r.rendererElm);
          if (ct.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== uo && Ds(b.nodeIdx), ct.track && uo !== null && b.worldPos && b.snapType !== "node") {
            const $ = js(b.worldPos, uo);
            $ && (b.worldPos = $, b.snapType = "grid");
          }
          if (uo !== null && b.worldPos) {
            const $ = t.nodes.val[uo];
            $ && ps(u.clientX, u.clientY, new Se(...$), b.worldPos);
          } else if (at !== null && b.worldPos) {
            const $ = t.nodes.val[at];
            $ && ps(u.clientX, u.clientY, new Se(...$), b.worldPos);
          } else Rt && (Rt.remove(), Rt = null);
          b.nodeIdx, us(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
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
        const d = In(u);
        if (d >= 0) bs(d), o.style.cursor = "pointer";
        else {
          if (Ft) {
            const r = Ze();
            r == null ? void 0 : r.scene.remove(Ft), Ft = null, r == null ? void 0 : r.render();
          }
          o.style.cursor = qt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (u) => {
        if (qt && n) {
          const d = u.offsetX - n.x, r = u.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(r) > s) {
            const b = d > 0, $ = a(n.x, n.y, u.offsetX, u.offsetY, b);
            u.ctrlKey || u.metaKey || (nt.clear(), lo()), $.forEach((x) => {
              nt.has(x) || (nt.add(x), Mn(x));
            }), io();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (u) => {
        if (Jt) {
          const d = Ze();
          if (!d) return;
          const r = fs(u.clientX, u.clientY, d.camera, d.rendererElm);
          (r.worldPos || r.nodeIdx !== null) && (Ys(r), us(r));
          return;
        }
        if (qt) {
          if (l) return;
          const d = In(u), r = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (r) if (nt.has(d)) {
              nt.delete(d);
              const b = ao.findIndex(($) => $.__elemIdx === d);
              if (b >= 0) {
                const $ = Ze();
                $ == null ? void 0 : $.scene.remove(ao[b]), ao[b].geometry.dispose(), ao[b].material.dispose(), ao.splice(b, 1), $ == null ? void 0 : $.render();
              }
            } else nt.add(d), Mn(d);
            else nt.clear(), lo(), nt.add(d), Mn(d);
            io();
          } else r || (nt.clear(), lo(), io());
          return;
        }
        if (Bt) {
          const d = In(u);
          d >= 0 && (bs(d), aa(d));
        }
      });
    }, 500), Co.derive(() => {
      var _a2;
      t.nodes.val, t.elements.val, (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, Ge();
    }), Ye.modal = (e) => {
      var _a2, _b;
      if (e === void 0 && (e = !At), At = e, (_a2 = ve.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", At), At) {
        const n = Ze();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (U = n.settings.loads.rawVal, n.settings.loads.val = false), un(), ve.querySelector("#cad3d-mode-prev").style.display = "", ve.querySelector("#cad3d-mode-next").style.display = "", ve.querySelector("#cad3d-mode-label").style.display = "";
      } else mn(), ve.querySelector("#cad3d-mode-prev").style.display = "none", ve.querySelector("#cad3d-mode-next").style.display = "none", ve.querySelector("#cad3d-mode-label").style.display = "none", z && z !== "placa-q4" && z !== "placa-3q" && $e(), setTimeout(() => {
        var _a3;
        const n = Ze();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && U && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${At ? "ON" : "OFF"}`);
    }, Ye.setMode = (e) => {
      var _a2;
      if (!(fe == null ? void 0 : fe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      gt = Math.max(0, Math.min(e, fe.modeShapes.length - 1));
      const o = fe.modeShapes[gt], { extent: n } = no();
      let l = 0;
      for (let c = 0; c < ae.length; c++) {
        const a = o[c * 6] || 0, i = o[c * 6 + 1] || 0, u = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + u * u));
      }
      qe = l > 1e-12 ? n * 0.05 / l : 1, _o();
      const s = ve.querySelector("#cad3d-mode-label");
      s && fe.frequencies && (s.textContent = `Modo ${gt + 1} \u2014 ${fe.frequencies[gt].toFixed(2)} Hz`), console.log(`Modo ${gt + 1}: f = ${(_a2 = fe.frequencies) == null ? void 0 : _a2[gt].toFixed(4)} Hz`);
    }, window.cad = Ye, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ve), document.body.appendChild(be.div);
    }, 0), setTimeout(() => {
      t.nodes.val.length === 0 && (Ke("edificio"), $e(), is("edificio"));
    }, 100), document.body.appendChild(Oa());
    const Es = document.createElement("span");
    return Es.style.display = "none", Es;
  };
});
export {
  __tla,
  Ts as a,
  Sa as c,
  el as g
};
