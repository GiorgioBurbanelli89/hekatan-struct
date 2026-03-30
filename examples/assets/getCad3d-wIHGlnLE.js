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
    const _ = Nn.find((G) => G.id === t), k = qo.find((G) => G.id === h), Y = _.toKN, R = k.toM, V = (G, he, z) => z / (Math.pow(Y, G) * Math.pow(R, he));
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
      label: `${_.label}, ${k.label}`,
      force: _.label,
      length: k.label,
      stress: $a(t, h),
      moment: `${_.label}\xB7${k.label}`,
      E: V(1, -2, ho.E),
      G: V(1, -2, ho.G),
      A: V(0, 2, ho.A),
      Iz: V(0, 4, ho.Iz),
      Iy: V(0, 4, ho.Iy),
      J: V(0, 4, ho.J),
      rho: V(1, -4, ho.rho),
      spanRange: k.spanRange,
      heightRange: k.heightRange,
      defaultSpan: k.defaultSpan,
      defaultHeight: k.defaultHeight,
      defaultForce: j,
      forceRange: D,
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
    const h = t.force, [_, k, Y] = t.forceRange;
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
          max: k,
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
          max: k,
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
          max: k,
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
          max: k,
          step: Y,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: _,
          max: k,
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
    function _(k, Y) {
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
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, k.frequencies.forEach((D, G) => {
        var _a3;
        const he = D > 0 ? 1 / D : 0, z = D * 2 * Math.PI, K = ((_a3 = k.massParticipation) == null ? void 0 : _a3[G]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ye = 0; ye < 6; ye++) V[ye] += K[ye];
        j += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${G + 1}</td>
  <td style="padding:2px 6px; text-align:right">${D.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${he.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ye = 0; ye < 6; ye++) {
          const fe = (K[ye] * 100).toFixed(1), ee = K[ye] > 0.5 ? "#f00" : K[ye] > 0.1 ? "#ff0" : "#0f0";
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
        const he = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        k.frequencies.forEach((K, ye) => {
          var _a3;
          const fe = K > 0 ? 1 / K : 0, ee = K * 2 * Math.PI, ae = ((_a3 = k.massParticipation) == null ? void 0 : _a3[ye]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let ze = 0; ze < 6; ze++) he[ze] += ae[ze];
          const ue = ae.map((ze) => ((ze * 100).toFixed(1) + "%").padStart(6)).join(" ");
          D.push(`${String(ye + 1).padStart(4)}  ${K.toFixed(4).padStart(9)}  ${fe.toFixed(4).padStart(9)}  ${ee.toFixed(2).padStart(9)}  ${ue}  ${(he[0] * 100).toFixed(1).padStart(5)}%  ${(he[1] * 100).toFixed(1).padStart(5)}%  ${(he[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(D.join(`
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
  const xe = 64516e-8, T = 416231e-12, B = 0.0254, po = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * xe,
      Iz: 16.4 * T,
      Iy: 2.2 * T,
      J: 0.0405 * T,
      d: 5.9 * B,
      bf: 3.94 * B
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * xe,
      Iz: 29.1 * T,
      Iy: 9.32 * T,
      J: 0.103 * T,
      d: 5.99 * B,
      bf: 5.99 * B
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * xe,
      Iz: 41.4 * T,
      Iy: 13.3 * T,
      J: 0.204 * T,
      d: 6.2 * B,
      bf: 6.02 * B
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * xe,
      Iz: 30.8 * T,
      Iy: 2.09 * T,
      J: 0.0426 * T,
      d: 7.89 * B,
      bf: 3.94 * B
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * xe,
      Iz: 61.9 * T,
      Iy: 7.97 * T,
      J: 0.172 * T,
      d: 8.14 * B,
      bf: 5.25 * B
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * xe,
      Iz: 82.7 * T,
      Iy: 18.3 * T,
      J: 0.346 * T,
      d: 7.93 * B,
      bf: 6.5 * B
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * xe,
      Iz: 110 * T,
      Iy: 37.1 * T,
      J: 0.536 * T,
      d: 8 * B,
      bf: 7.995 * B
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 146 * T,
      Iy: 49.1 * T,
      J: 0.871 * T,
      d: 8.25 * B,
      bf: 8.07 * B
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 184 * T,
      Iy: 60.9 * T,
      J: 1.45 * T,
      d: 8.5 * B,
      bf: 8.11 * B
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 272 * T,
      Iy: 88.6 * T,
      J: 3.54 * T,
      d: 9 * B,
      bf: 8.28 * B
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * xe,
      Iz: 53.8 * T,
      Iy: 2.18 * T,
      J: 0.0547 * T,
      d: 9.87 * B,
      bf: 3.96 * B
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 118 * T,
      Iy: 11.4 * T,
      J: 0.239 * T,
      d: 10.17 * B,
      bf: 5.75 * B
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * xe,
      Iz: 171 * T,
      Iy: 36.6 * T,
      J: 0.583 * T,
      d: 9.73 * B,
      bf: 7.96 * B
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * xe,
      Iz: 272 * T,
      Iy: 93.4 * T,
      J: 1.39 * T,
      d: 9.98 * B,
      bf: 10 * B
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * xe,
      Iz: 394 * T,
      Iy: 134 * T,
      J: 3.56 * T,
      d: 10.4 * B,
      bf: 10.13 * B
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * xe,
      Iz: 623 * T,
      Iy: 207 * T,
      J: 10.9 * T,
      d: 11.1 * B,
      bf: 10.34 * B
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * xe,
      Iz: 88.6 * T,
      Iy: 2.36 * T,
      J: 0.0704 * T,
      d: 11.91 * B,
      bf: 3.97 * B
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * xe,
      Iz: 156 * T,
      Iy: 4.66 * T,
      J: 0.293 * T,
      d: 12.31 * B,
      bf: 4.03 * B
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * xe,
      Iz: 204 * T,
      Iy: 17.3 * T,
      J: 0.3 * T,
      d: 12.22 * B,
      bf: 6.49 * B
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * xe,
      Iz: 310 * T,
      Iy: 44.1 * T,
      J: 0.906 * T,
      d: 11.94 * B,
      bf: 8.01 * B
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * xe,
      Iz: 425 * T,
      Iy: 95.8 * T,
      J: 1.58 * T,
      d: 12.06 * B,
      bf: 9.99 * B
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * xe,
      Iz: 597 * T,
      Iy: 195 * T,
      J: 4.05 * T,
      d: 12.25 * B,
      bf: 12.04 * B
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * xe,
      Iz: 833 * T,
      Iy: 270 * T,
      J: 8.44 * T,
      d: 12.71 * B,
      bf: 12.16 * B
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * xe,
      Iz: 1070 * T,
      Iy: 345 * T,
      J: 16 * T,
      d: 13.12 * B,
      bf: 12.32 * B
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * xe,
      Iz: 199 * T,
      Iy: 7 * T,
      J: 0.208 * T,
      d: 13.74 * B,
      bf: 5 * B
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * xe,
      Iz: 291 * T,
      Iy: 19.6 * T,
      J: 0.38 * T,
      d: 13.84 * B,
      bf: 6.73 * B
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * xe,
      Iz: 385 * T,
      Iy: 26.7 * T,
      J: 0.798 * T,
      d: 14.1 * B,
      bf: 6.77 * B
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * xe,
      Iz: 485 * T,
      Iy: 51.4 * T,
      J: 1.45 * T,
      d: 13.79 * B,
      bf: 8.03 * B
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * xe,
      Iz: 640 * T,
      Iy: 107 * T,
      J: 2.19 * T,
      d: 13.89 * B,
      bf: 9.99 * B
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * xe,
      Iz: 882 * T,
      Iy: 148 * T,
      J: 5.07 * T,
      d: 14.31 * B,
      bf: 10.13 * B
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * xe,
      Iz: 1240 * T,
      Iy: 447 * T,
      J: 7.12 * T,
      d: 14.32 * B,
      bf: 14.61 * B
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * xe,
      Iz: 1530 * T,
      Iy: 548 * T,
      J: 12.3 * T,
      d: 14.66 * B,
      bf: 14.73 * B
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * xe,
      Iz: 2140 * T,
      Iy: 838 * T,
      J: 23.7 * T,
      d: 15.22 * B,
      bf: 15.65 * B
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * xe,
      Iz: 301 * T,
      Iy: 9.59 * T,
      J: 0.262 * T,
      d: 15.69 * B,
      bf: 5.5 * B
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * xe,
      Iz: 448 * T,
      Iy: 24.5 * T,
      J: 0.545 * T,
      d: 15.86 * B,
      bf: 6.99 * B
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 659 * T,
      Iy: 37.2 * T,
      J: 1.52 * T,
      d: 16.26 * B,
      bf: 7.07 * B
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * xe,
      Iz: 954 * T,
      Iy: 119 * T,
      J: 2.39 * T,
      d: 16.33 * B,
      bf: 10.24 * B
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * xe,
      Iz: 1300 * T,
      Iy: 163 * T,
      J: 5.45 * T,
      d: 16.75 * B,
      bf: 10.37 * B
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * xe,
      Iz: 510 * T,
      Iy: 15.3 * T,
      J: 0.506 * T,
      d: 17.7 * B,
      bf: 6 * B
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * xe,
      Iz: 800 * T,
      Iy: 40.1 * T,
      J: 1.24 * T,
      d: 17.99 * B,
      bf: 7.5 * B
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * xe,
      Iz: 1170 * T,
      Iy: 60.3 * T,
      J: 3.49 * T,
      d: 18.47 * B,
      bf: 7.64 * B
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * xe,
      Iz: 1750 * T,
      Iy: 201 * T,
      J: 5.86 * T,
      d: 18.59 * B,
      bf: 11.15 * B
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * xe,
      Iz: 843 * T,
      Iy: 20.7 * T,
      J: 0.77 * T,
      d: 20.66 * B,
      bf: 6.5 * B
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * xe,
      Iz: 1330 * T,
      Iy: 57.5 * T,
      J: 1.83 * T,
      d: 20.99 * B,
      bf: 8.24 * B
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * xe,
      Iz: 1830 * T,
      Iy: 81.4 * T,
      J: 4.34 * T,
      d: 21.43 * B,
      bf: 8.36 * B
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * xe,
      Iz: 2670 * T,
      Iy: 274 * T,
      J: 6.83 * T,
      d: 21.51 * B,
      bf: 12.34 * B
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * xe,
      Iz: 1350 * T,
      Iy: 29.1 * T,
      J: 1.18 * T,
      d: 23.57 * B,
      bf: 7.01 * B
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * xe,
      Iz: 2100 * T,
      Iy: 82.5 * T,
      J: 2.68 * T,
      d: 23.92 * B,
      bf: 8.99 * B
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * xe,
      Iz: 3100 * T,
      Iy: 259 * T,
      J: 4.72 * T,
      d: 24.06 * B,
      bf: 12.75 * B
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * xe,
      Iz: 4020 * T,
      Iy: 340 * T,
      J: 9.5 * T,
      d: 24.48 * B,
      bf: 12.86 * B
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * xe,
      Iz: 4580 * T,
      Iy: 391 * T,
      J: 12.6 * T,
      d: 24.74 * B,
      bf: 12.9 * B
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * xe,
      Iz: 5680 * T,
      Iy: 479 * T,
      J: 21.2 * T,
      d: 25.24 * B,
      bf: 12.9 * B
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * xe,
      Iz: 2850 * T,
      Iy: 106 * T,
      J: 2.81 * T,
      d: 26.71 * B,
      bf: 9.96 * B
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * xe,
      Iz: 4090 * T,
      Iy: 159 * T,
      J: 6.77 * T,
      d: 27.29 * B,
      bf: 10.07 * B
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * xe,
      Iz: 3610 * T,
      Iy: 115 * T,
      J: 3.06 * T,
      d: 29.53 * B,
      bf: 10.4 * B
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * xe,
      Iz: 4930 * T,
      Iy: 164 * T,
      J: 6.43 * T,
      d: 30.01 * B,
      bf: 10.5 * B
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * xe,
      Iz: 5900 * T,
      Iy: 187 * T,
      J: 5.3 * T,
      d: 32.86 * B,
      bf: 11.48 * B
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * xe,
      Iz: 7800 * T,
      Iy: 225 * T,
      J: 7 * T,
      d: 35.55 * B,
      bf: 11.95 * B
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * xe,
      Iz: 8.22 * T,
      Iy: 8.22 * T,
      J: 13.4 * T,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * xe,
      Iz: 10.7 * T,
      Iy: 10.7 * T,
      J: 17.9 * T,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * xe,
      Iz: 12.3 * T,
      Iy: 12.3 * T,
      J: 21 * T,
      d: 4 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 30.3 * T,
      Iy: 30.3 * T,
      J: 48.3 * T,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 41.1 * T,
      Iy: 41.1 * T,
      J: 66.9 * T,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * xe,
      Iz: 49.6 * T,
      Iy: 49.6 * T,
      J: 82.2 * T,
      d: 6 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * xe,
      Iz: 70.7 * T,
      Iy: 70.7 * T,
      J: 112 * T,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 98 * T,
      Iy: 98 * T,
      J: 158 * T,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * xe,
      Iz: 122 * T,
      Iy: 122 * T,
      J: 199 * T,
      d: 8 * B,
      bf: 8 * B
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 202 * T,
      Iy: 202 * T,
      J: 323 * T,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * xe,
      Iz: 254 * T,
      Iy: 254 * T,
      J: 412 * T,
      d: 10 * B,
      bf: 10 * B
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * xe,
      Iz: 355 * T,
      Iy: 355 * T,
      J: 564 * T,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * xe,
      Iz: 452 * T,
      Iy: 452 * T,
      J: 724 * T,
      d: 12 * B,
      bf: 12 * B
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * xe,
      Iz: 18 * T,
      Iy: 9.58 * T,
      J: 22.6 * T,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * xe,
      Iz: 23.8 * T,
      Iy: 12.3 * T,
      J: 30.3 * T,
      d: 6 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * xe,
      Iz: 33.6 * T,
      Iy: 11.8 * T,
      J: 33 * T,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * xe,
      Iz: 45.1 * T,
      Iy: 15 * T,
      J: 44.5 * T,
      d: 8 * B,
      bf: 4 * B
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * xe,
      Iz: 46.1 * T,
      Iy: 28.2 * T,
      J: 61.3 * T,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * xe,
      Iz: 63 * T,
      Iy: 37.5 * T,
      J: 84.6 * T,
      d: 8 * B,
      bf: 6 * B
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * xe,
      Iz: 103 * T,
      Iy: 47.1 * T,
      J: 115 * T,
      d: 10 * B,
      bf: 6 * B
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * xe,
      Iz: 196 * T,
      Iy: 102 * T,
      J: 249 * T,
      d: 12 * B,
      bf: 8 * B
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
    const { nodes: h, elements: _, elementInputs: k, nodeInputs: Y, deformOutputs: R } = t, V = h.length * 6, j = _.length, D = _.filter((ee) => ee.length === 2).length, G = _.filter((ee) => ee.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${j} (${D} frames, ${G} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${V}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((ee, ae) => {
      z += `<tr><td>${ae}</td><td>${Xe(ee[0])}</td><td>${Xe(ee[1])}</td><td>${Xe(ee[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', _.forEach((ee, ae) => {
      var _a3, _b2, _c2, _d2;
      const ue = ee.length === 2, ze = ee.map((Qe) => h[Qe]), He = ue ? vo(to(ze[1], ze[0])) : 0, Ce = ((_a3 = k.elasticities) == null ? void 0 : _a3.get(ae)) ?? 0, Je = ((_b2 = k.areas) == null ? void 0 : _b2.get(ae)) ?? 0, st = ((_c2 = k.momentsOfInertiaZ) == null ? void 0 : _c2.get(ae)) ?? 0, je = ((_d2 = k.momentsOfInertiaY) == null ? void 0 : _d2.get(ae)) ?? 0;
      z += `<tr><td>${ae}</td><td>${ue ? "Frame" : "Shell"}</td><td>${ee.join(" \u2192 ")}</td>`, z += `<td>${Xe(He)}</td><td>${Xe(Ce)}</td><td>${Xe(Je)}</td><td>${Xe(st)}</td><td>${Xe(je)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", D > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += ka(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ee = 0; ee < j; ee++) {
      const ae = _[ee], ue = ae.map((Pt) => h[Pt]);
      if (!(ae.length === 2)) continue;
      const He = vo(to(ue[1], ue[0])), Ce = ((_a2 = k.elasticities) == null ? void 0 : _a2.get(ee)) ?? 0, Je = ((_b = k.areas) == null ? void 0 : _b.get(ee)) ?? 0, st = ((_c = k.momentsOfInertiaZ) == null ? void 0 : _c.get(ee)) ?? 0, je = ((_d = k.momentsOfInertiaY) == null ? void 0 : _d.get(ee)) ?? 0, Qe = ((_e = k.shearModuli) == null ? void 0 : _e.get(ee)) ?? 0, we = ((_f = k.torsionalConstants) == null ? void 0 : _f.get(ee)) ?? 0;
      let Re = null, _e2 = null, et = null;
      try {
        Re = tn(ue, k, ee), _e2 = on(ue), et = jt(_n(_e2), jt(Re, _e2));
      } catch {
        continue;
      }
      const dt = to(ue[1], ue[0]), ot = dt[0] / He, ut = dt[1] / He, $t = dt[2] / He;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${ee}">\u25B6 Element ${ee} \u2014 Nodes ${ae[0]} \u2192 ${ae[1]}, L = ${Xe(He)}</h3>`, z += `<div id="rpt-elem${ee}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${Xe(Ce)} &nbsp;&nbsp; A = ${Xe(Je)} &nbsp;&nbsp; I<sub>z</sub> = ${Xe(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Xe(je)} &nbsp;&nbsp; G = ${Xe(Qe)} &nbsp;&nbsp; J = ${Xe(we)}<br/>`, z += `EA/L = ${Xe(Ce)}\xB7${Xe(Je)}/${Xe(He)} = <b>${Xe(Ce * Je / He)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Xe(Ce)}\xB7${Xe(st)}/${Xe(He)}\xB3 = <b>${Xe(12 * Ce * st / He ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Xe(Ce)}\xB7${Xe(je)}/${Xe(He)}\xB3 = <b>${Xe(12 * Ce * je / He ** 3)}</b><br/>`, z += `GJ/L = ${Xe(Qe)}\xB7${Xe(we)}/${Xe(He)} = <b>${Xe(Qe * we / He)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${Qo(ot)}, m = ${Qo(ut)}, n = ${Qo($t)}, D = ${Qo(Math.sqrt(ot ** 2 + ut ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += Fn(Re, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += Fn(_e2, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += Fn(et, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${ae[0]} \u2192 [${ae[0] * 6}..${ae[0] * 6 + 5}], node ${ae[1]} \u2192 [${ae[1] * 6}..${ae[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${j - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += za(_, h.length), z += "<h2>5. Boundary Conditions</h2>";
    const K = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ye = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", Y.supports && Y.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of K) z += `<th>${ee}</th>`;
      z += "</tr></thead><tbody>", Y.supports.forEach((ee, ae) => {
        z += `<tr><td>${ae}</td>`, ee.forEach((ue, ze) => {
          ue && ye.push(ae * 6 + ze), z += `<td class="${ue ? "fixed" : ""}">${ue ? "Fixed" : "Free"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += `<div class="rpt-eq-small">Fixed DOFs: [${ye.join(", ")}] \u2192 ${ye.length} constraints<br/>`, z += `Free DOFs: ${V} \u2212 ${ye.length} = <b>${V - ye.length}</b></div>`, z += "<h3>5.2 Applied Loads</h3>", Y.loads && Y.loads.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ee = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ae of ee) z += `<th>${ae}</th>`;
      z += "</tr></thead><tbody>", Y.loads.forEach((ae, ue) => {
        z += `<tr><td>${ue}</td>`, ae.forEach((ze) => {
          const He = Math.abs(ze) > 1e-10;
          z += `<td class="${He ? "nz" : ""}">${He ? Xe(ze) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", R == null ? void 0 : R.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of K) z += `<th>${ee}</th>`;
      z += "</tr></thead><tbody>", R.deformations.forEach((ee, ae) => {
        z += `<tr><td>${ae}</td>`, ee.forEach((ue) => {
          const ze = Math.abs(ue) > 1e-10;
          z += `<td class="${ze ? "nz" : ""}">${Xe(ue, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', R == null ? void 0 : R.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of K) z += `<th>${ee}</th>`;
      z += "</tr></thead><tbody>", R.reactions.forEach((ee, ae) => {
        z += `<tr><td>${ae}</td>`, ee.forEach((ue) => {
          const ze = Math.abs(ue) > 1e-10;
          z += `<td class="${ze ? "nz-react" : ""}">${ze ? Xe(ue, 4) : "0"}</td>`;
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
      for (const ae of ee) z += `<th>${ae}<sub>i</sub></th>`;
      for (const ae of ee) z += `<th>${ae}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let ae = 0; ae < j; ae++) {
        const ue = _[ae];
        if (ue.length !== 2) continue;
        const ze = ue.map((He) => h[He]);
        try {
          const He = tn(ze, k, ae), Ce = on(ze), Je = [];
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
          const st = jt(Ce, Je), je = jt(He, st);
          z += `<tr><td>${ae}</td><td>${ue.join("\u2192")}</td>`;
          for (let Qe = 0; Qe < 12; Qe++) {
            const we = Math.abs(je[Qe]) > 1e-10;
            z += `<td class="${we ? "nz" : ""}">${Xe(je[Qe], 2)}</td>`;
          }
          z += "</tr>";
        } catch {
        }
      }
      z += "</tbody></table>";
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
    return he.innerHTML = fe + z, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((ee) => {
      ee.addEventListener("click", () => {
        const ae = ee.dataset.toggle, ue = he.querySelector(`#rpt-${ae}`);
        if (ue) {
          const ze = ue.style.display !== "none";
          ue.style.display = ze ? "none" : "", ee.textContent = ee.textContent.replace(/^[▼▶]/, ze ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
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
    for (let Y = 0; Y < _; Y++) {
      k += "<tr>";
      for (let R = 0; R < _; R++) {
        const V = ((_a2 = t[Y]) == null ? void 0 : _a2[R]) ?? 0, j = Math.abs(V) < 1e-10;
        k += `<td class="${j ? "z" : ""} ${Y === R && !j ? "diag" : ""}">${j ? "0" : Ia(V)}</td>`;
      }
      k += "</tr>";
    }
    return k += "</table>", h > _ && (k += `<div style="color:#888;font-size:9pt">(showing ${_}\xD7${_} of ${h}\xD7${h})</div>`), k += "</div>", k;
  }
  function Ia(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function ka() {
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
      for (let ye = 0; ye <= 80; ye++) {
        const fe = ye / 80, ee = 30 + fe * 540, ae = 180 / 2 - D.fn(fe) * 60;
        G += (ye === 0 ? "M" : "L") + `${ee.toFixed(1)},${ae.toFixed(1)}`;
      }
      j += `<path d="${G}" fill="none" stroke="${D.color}" stroke-width="2.5"/>`;
      const he = 0.75, z = 30 + he * 540 + 8, K = 180 / 2 - D.fn(he) * 60 - 6;
      j += `<text x="${z}" y="${K}" fill="${D.color}" font-size="11" font-weight="bold" font-family="sans-serif">${D.name}</text>`;
    }
    return j += "</svg>", j;
  }
  function za(t, h) {
    const _ = h * 6, k = Math.min(_, 30);
    let Y = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    Y += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', Y += "<tr><td></td>";
    for (let V = 0; V < k; V++) Y += `<td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
    Y += "</tr>";
    const R = Array.from({
      length: k
    }, () => Array(k).fill(0));
    for (let V = 0; V < t.length; V++) {
      const j = t[V].map((D) => D * 6);
      for (const D of j) for (const G of j) for (let he = 0; he < 6; he++) for (let z = 0; z < 6; z++) {
        const K = D + he, ye = G + z;
        K < k && ye < k && R[K][ye]++;
      }
    }
    for (let V = 0; V < k; V++) {
      Y += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
      for (let j = 0; j < k; j++) {
        const D = R[V][j], G = D === 0 ? "#fff" : D === 1 ? "#e8f0fe" : D === 2 ? "#c6dcf5" : "#a0c4e8", he = D === 0 ? "" : D.toString();
        Y += `<td style="background:${G};color:#003366">${he}</td>`;
      }
      Y += "</tr>";
    }
    return Y += "</table></div>", _ > k && (Y += `<div style="color:#888;font-size:9pt">(showing ${k}\xD7${k} of ${_}\xD7${_})</div>`), Y;
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
  function Ta(t, h, _, k, Y, R) {
    var _a2, _b, _c, _d, _e, _f;
    const V = _[t], j = V.map((_e2) => h[_e2]), D = V.length === 2, G = D ? vo(to(j[1], j[0])) : 0, he = ((_a2 = k.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, z = ((_b = k.areas) == null ? void 0 : _b.get(t)) ?? 0, K = ((_c = k.momentsOfInertiaZ) == null ? void 0 : _c.get(t)) ?? 0, ye = ((_d = k.momentsOfInertiaY) == null ? void 0 : _d.get(t)) ?? 0, fe = ((_e = k.shearModuli) == null ? void 0 : _e.get(t)) ?? 0, ee = ((_f = k.torsionalConstants) == null ? void 0 : _f.get(t)) ?? 0;
    let ae = null, ue = null, ze = null;
    try {
      ae = tn(j, k, t), ue = on(j), ze = jt(_n(ue), jt(ae, ue));
    } catch {
    }
    const He = D ? to(j[1], j[0]) : [
      0,
      0,
      0
    ], Ce = G > 0 ? He[0] / G : 0, Je = G > 0 ? He[1] / G : 0, st = G > 0 ? He[2] / G : 0, je = Math.sqrt(Ce ** 2 + Je ** 2), Qe = [];
    if ((Y == null ? void 0 : Y.deformations) && D) for (const _e2 of V) {
      const et = Y.deformations.get(_e2) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Qe.push(...et);
    }
    let we = [], Re = [];
    if (Qe.length === 12 && ue && ae) {
      try {
        we = jt(ue, Qe);
      } catch {
        we = Array(12).fill(0);
      }
      try {
        Re = jt(ae, we);
      } catch {
        Re = Array(12).fill(0);
      }
    }
    return {
      elemIdx: t,
      elem: V,
      elmNodes: j,
      isFrame: D,
      L: G,
      E: he,
      A: z,
      Iz: K,
      Iy: ye,
      G: fe,
      J: ee,
      kLocal: ae,
      T: ue,
      kGlobal: ze,
      l: Ce,
      m: Je,
      n: st,
      D: je,
      uGlobal: Qe,
      uLocal: we,
      fLocal: Re,
      dOut: Y,
      aOut: R,
      totalNodes: h.length
    };
  }
  function Aa(t, h, _, k, Y, R) {
    var _a2, _b;
    const V = Ta(t, h, _, k, Y, R), j = document.createElement("div");
    return j.className = "er-panel", j.innerHTML = Pa + `
    <div class="er-header">
      <span class="er-badge">Element ${t}</span>
      <span class="er-type">${V.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${V.elem.join(" \u2192 ")} \u2014 L = ${Oe(V.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Ca(V)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${Ls(V)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${qa(V)}</div>
  `, j.querySelectorAll(".er-tab").forEach((D) => {
      D.addEventListener("click", () => {
        j.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), D.classList.add("active");
        const G = D.dataset.tab;
        j.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), j.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a2 = j.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => j.remove()), (_b = j.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const D = j.classList.toggle("er-fullscreen-mode"), G = j.querySelector("#er-fullscreen");
      G && (G.textContent = D ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const D = j.querySelector("#er-sf-canvas");
      D && On(D);
      const G = j.querySelector("#er-sf-canvas-math");
      G && On(G);
    }, 50), La(() => {
      const D = j.querySelector("#er-body-math");
      D && (D.innerHTML = Ls(V)), setTimeout(() => {
        const G = j.querySelector("#er-sf-canvas-math");
        G && On(G);
      }, 50), j.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const he = G.dataset.toggle, z = j.querySelector(`#er-${he}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), j;
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
        for (let Y = 0; Y < 6; Y++) {
          const R = t.uGlobal[k * 6 + Y];
          h += `${_[Y]}=<span class="${Math.abs(R) > 1e-10 ? "nz" : ""}">${Oe(R, 6)}</span> `;
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
    const _ = (he) => zs(he), k = (he) => zs(he, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${k("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${_("\\text{Nodo } i")} = (${t.elmNodes[0].map((he) => Oe(he)).join(", ")})<br/>`, h += `${_("\\text{Nodo } j")} = (${t.elmNodes[1].map((he) => Oe(he)).join(", ")})<br/>`, h += `${k(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Oe(t.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${k("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${k("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${_("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${k("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${_("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${k("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${k("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${k("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${k("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${_("I_z")})</div>`, h += `<div class="er-eq">${k("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${_("I_y")})</div>`, h += `<div class="er-eq">${k("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${k("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${k(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Oe(t.E)} \\times ${Oe(t.A)} = \\mathbf{${Oe(t.E * t.A)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Oe(t.E)} \\times ${Oe(t.Iz)} = \\mathbf{${Oe(t.E * t.Iz)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Oe(t.E)} \\times ${Oe(t.Iy)} = \\mathbf{${Oe(t.E * t.Iy)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Oe(t.G)} \\times ${Oe(t.J)} = \\mathbf{${Oe(t.G * t.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${_("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${k("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const Y = t.E * t.A / t.L, R = t.E * t.Iz / t.L ** 3, V = t.E * t.Iy / t.L ** 3, j = t.G * t.J / t.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${k("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${k("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${_("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${k("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Oe(t.E)}\\times${Oe(t.A)}}{${Oe(t.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${k(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Oe(Y)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${_("v(\\xi)")}</p>`, h += `<div class="er-eq">${k("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${k("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${k("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${_("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${k("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${_("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${k("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Oe(t.E)} \\times ${Oe(t.Iz)}}{${Oe(t.L)}^3} = \\mathbf{${Oe(12 * R)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${_("\\theta_x")} y ${_("GJ")}:</p>`, h += `<div class="er-eq">${k(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Oe(t.G)}\\times${Oe(t.J)}}{${Oe(t.L)}} = \\mathbf{${Oe(j)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${_("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${k("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Oe(6 * t.E * t.Iz / t.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${k(`\\frac{EA}{L} = \\mathbf{${Oe(Y)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Oe(12 * R)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Oe(12 * V)}}`)}</div>`, h += `<div class="er-eq">${k(`\\frac{GJ}{L} = \\mathbf{${Oe(j)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Oe(4 * t.E * t.Iy / t.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Oe(4 * t.E * t.Iz / t.L)}}`)}</div>`, h += `<div class="er-eq">${k(`\\frac{6EI_z}{L^2} = \\mathbf{${Oe(6 * t.E * t.Iz / t.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Oe(6 * t.E * t.Iy / t.L ** 2)}}`)}</div>`, t.kLocal && (h += `<div class="er-subsec">Resultado: ${_("\\mathbf{K}_{local}")} (12x12)</div>`, h += Do(t.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${k(`l = \\frac{x_j - x_i}{L} = ${en(t.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${en(t.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${en(t.n)}`)}</div>`, h += `<div class="er-eq">${k(`D = \\sqrt{l^2 + m^2} = ${en(t.D)}`)}</div>`, Math.abs(t.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${_(`n \\approx ${t.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = t.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${k(he)}</div>`;
    } else h += `<div class="er-eq">${k("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${k("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${_("\\mathbf{K}_{global}")} = ${_("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${k("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, t.kGlobal && (h += Do(t.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const D = t.elem[0] * 6, G = t.elem[1] * 6;
    if (h += `<div class="er-eq">${k(`\\text{Nodo } ${t.elem[0]} \\rightarrow \\text{DOFs } [${D} \\ldots ${D + 5}]`)}</div>`, h += `<div class="er-eq">${k(`\\text{Nodo } ${t.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, h += `<div class="er-eq">${k("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${k("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${k("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, t.fLocal.length > 0 && t.fLocal.some((he) => he !== 0)) {
      const he = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const z of he) h += `<th>${z}</th>`;
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
        for (let Y = 0; Y < 6; Y++) {
          const R = t.uGlobal[k * 6 + Y];
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
    for (let Y = 0; Y < _; Y++) {
      k += "<tr>";
      for (let R = 0; R < _; R++) {
        const V = ((_a2 = t[Y]) == null ? void 0 : _a2[R]) ?? 0, j = Math.abs(V) < 1e-10;
        k += `<td class="${j ? "z" : ""} ${Y === R && !j ? "diag" : ""}">${j ? "0" : Fa(V)}</td>`;
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
    const _ = t.width, k = t.height, Y = 30, R = _ - 2 * Y, V = (k - 3 * Y) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, _, k);
    const j = (D, G, he) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(Y, D, R, V), h.strokeStyle = "#444", h.beginPath(), h.moveTo(Y, D + V / 2), h.lineTo(Y + R, D + V / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(G, Y + 4, D + 14);
      for (const K of he) {
        h.strokeStyle = K.color, h.lineWidth = 2.5, h.beginPath();
        for (let ye = 0; ye <= 100; ye++) {
          const fe = ye / 100, ee = Y + fe * R, ae = D + V / 2 - K.fn(fe) * (V / 2 * 0.85);
          ye === 0 ? h.moveTo(ee, ae) : h.lineTo(ee, ae);
        }
        h.stroke();
      }
      let z = Y + R - 90;
      for (const K of he) h.fillStyle = K.color, h.font = "bold 10px sans-serif", h.fillText(K.label, z, D + V - 6), z += 36;
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
    const k = _.getBoundingClientRect(), Y = window.innerWidth, R = window.innerHeight, V = 320, j = 180;
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
    const D = Y - k.right, G = k.left, he = R - k.bottom, z = k.top;
    let K = h.position || "bottom";
    K === "bottom" && he < j + 20 && (K = "top"), K === "top" && z < j + 20 && (K = "right"), K === "right" && D < V + 20 && (K = "left"), K === "left" && G < V + 20 && (K = "bottom");
    let ye, fe, ee = "";
    switch (K) {
      case "bottom":
        ye = k.left + k.width / 2 - V / 2, fe = k.bottom + 14, ee = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ye = k.left + k.width / 2 - V / 2, fe = k.top - j - 14, ee = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ye = k.right + 14, fe = k.top + k.height / 2 - j / 2, ee = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ye = k.left - V - 14, fe = k.top + k.height / 2 - j / 2, ee = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ye = Math.max(10, Math.min(ye, Y - V - 10)), fe = Math.max(10, Math.min(fe, R - j - 10)), Et = document.createElement("div"), Et.style.cssText = `
    position: fixed;
    left: ${ye}px; top: ${fe}px;
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
      ${Bo.map((ue, ze) => `<div style="width:${ze === t ? "16px" : "6px"};height:6px;border-radius:3px;background:${ze === t ? "#0099ff" : ze < t ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Et), (_a2 = Et.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Fo(t + 1);
    }), (_b = Et.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Fo(t - 1);
    });
    const ae = (ue) => {
      if (!nn) {
        document.removeEventListener("keydown", ae);
        return;
      }
      (ue.key === "ArrowRight" || ue.key === "Enter") && (Fo(t + 1), document.removeEventListener("keydown", ae)), ue.key === "ArrowLeft" && (Fo(Math.max(0, t - 1)), document.removeEventListener("keydown", ae)), ue.key === "Escape" && (Rn(), document.removeEventListener("keydown", ae));
    };
    document.addEventListener("keydown", ae);
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
    }, k = [], Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = [], D = [], G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), z = [], K = [];
    let ye = "", fe = "";
    const ee = /* @__PURE__ */ new Map();
    for (const be of h) {
      const Ie = be.trim();
      if (!Ie || Ie.startsWith("$")) {
        Ie.startsWith("$ ") && (fe = Ie.substring(2).trim());
        continue;
      }
      if (fe && (ee.has(fe) || ee.set(fe, []), ee.get(fe).push(be)), fe === "CONTROLS") {
        const le = Ie.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        le && (_.force = le[1], _.length = le[2]);
        const Ae = Ie.match(/TITLE2\s+"([^"]+)"/);
        Ae && (ye = Ae[1]);
      }
      if (fe === "STORIES - IN SEQUENCE FROM TOP") {
        const le = Ie.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (le) {
          const Ae = le[1], U = le[2] ? parseFloat(le[2]) : 0, ge = le[3] ? parseFloat(le[3]) : void 0;
          k.push({
            name: Ae,
            height: U,
            elev: ge ?? 0
          });
        }
      }
      if (fe === "MATERIAL PROPERTIES") {
        const le = Ie.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (le) {
          const Ae = le[1];
          Y.has(Ae) || Y.set(Ae, {
            type: le[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const U = Y.get(Ae);
          le[2] && (U.type = le[2]);
          const ge = Ie.match(/\bE\s+([\d.eE+-]+)/);
          ge && (U.E = parseFloat(ge[1]));
          const Ne = Ie.match(/\bU\s+([\d.eE+-]+)/);
          Ne && (U.nu = parseFloat(Ne[1]), U.G = U.E / (2 * (1 + U.nu)));
          const me = Ie.match(/\bFY\s+([\d.eE+-]+)/);
          me && (U.fy = parseFloat(me[1]));
          const qe = Ie.match(/\bFC\s+([\d.eE+-]+)/);
          qe && (U.fc = parseFloat(qe[1]));
          const Ue = Ie.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ue && (U.density = parseFloat(Ue[1]));
        }
      }
      if (fe === "FRAME SECTIONS") {
        const le = Ie.match(/FRAMESECTION\s+"([^"]+)"/);
        if (le) {
          const Ae = le[1];
          R.has(Ae) || R.set(Ae, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const U = R.get(Ae), ge = Ie.match(/MATERIAL\s+"([^"]+)"/);
          ge && (U.material = ge[1]);
          const Ne = Ie.match(/SHAPE\s+"([^"]+)"/);
          Ne && (U.shape = Ne[1]);
          const me = Ie.match(/\bD\s+([\d.eE+-]+)/);
          me && (U.D = parseFloat(me[1]));
          const qe = Ie.match(/\bB\s+([\d.eE+-]+)/);
          qe && (U.B = parseFloat(qe[1]));
          const Ue = Ie.match(/\bTF\s+([\d.eE+-]+)/);
          Ue && (U.TF = parseFloat(Ue[1]));
          const Be = Ie.match(/\bTW\s+([\d.eE+-]+)/);
          Be && (U.TW = parseFloat(Be[1]));
          const Ye = Ie.match(/\bR\s+([\d.eE+-]+)/);
          Ye && (U.R = parseFloat(Ye[1]));
          const ft = Ie.match(/FILLMATERIAL\s+"([^"]+)"/);
          ft && (U.fillMaterial = ft[1]);
          const zt = Ie.match(/I2MOD\s+([\d.eE+-]+)/);
          zt && (U.modI2 = parseFloat(zt[1]));
          const Ve = Ie.match(/I3MOD\s+([\d.eE+-]+)/);
          Ve && (U.modI3 = parseFloat(Ve[1]));
        }
      }
      if (fe === "POINT COORDINATES") {
        const le = Ie.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        le && V.set(le[1], [
          parseFloat(le[2]),
          parseFloat(le[3])
        ]);
      }
      if (fe === "LINE CONNECTIVITIES") {
        const le = Ie.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        le && j.push({
          name: le[1],
          type: le[2],
          pt1: le[3],
          pt2: le[4],
          nStories: parseInt(le[5])
        });
      }
      if (fe === "POINT ASSIGNS") {
        const le = Ie.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        le && G.set(`${le[1]}@${le[2]}`, le[3].split(/\s+/));
      }
      if (fe === "LINE ASSIGNS") {
        const le = Ie.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (le) {
          const Ae = {
            story: le[2],
            section: le[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, U = Ie.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          U && (Ae.rigidZone = parseFloat(U[1]));
          const ge = Ie.match(/RELEASE\s+"([^"]+)"/);
          ge && (Ae.releases = ge[1].split(/\s+/));
          const Ne = Ie.match(/ANG\s+([-\d.eE+]+)/);
          Ne && (Ae.angle = parseFloat(Ne[1])), he.set(`${le[1]}@${le[2]}`, Ae);
        }
      }
      if (fe === "GRIDS") {
        const le = Ie.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        le && K.push({
          label: le[1],
          dir: le[2],
          coord: parseFloat(le[3])
        });
      }
      if (fe === "FRAME OBJECT LOADS") {
        const le = Ie.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        le && z.push({
          line: le[1],
          story: le[2],
          type: le[3],
          dir: le[4],
          lc: le[5],
          val: parseFloat(le[6])
        });
      }
      if (fe === "AREA CONNECTIVITIES") {
        const le = Ie.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (le) {
          const Ae = ((_a2 = le[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((U) => U.replace(/"/g, ""))) || [];
          D.push({
            name: le[1],
            pts: Ae,
            nStories: 0
          });
        }
      }
    }
    const ae = /* @__PURE__ */ new Map();
    if (k.length > 0) {
      const be = k.length - 1;
      ae.set(k[be].name, k[be].elev);
      for (let Ie = be - 1; Ie >= 0; Ie--) {
        const Ae = ae.get(k[Ie + 1].name) + k[Ie].height;
        k[Ie].elev = Ae, ae.set(k[Ie].name, Ae);
      }
    }
    const ue = [], ze = [], He = /* @__PURE__ */ new Map(), Ce = (be, Ie) => `${be}@${Ie}`, Je = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const be of j) st.set(be.name, be);
    for (const be of j) for (const [Ie, le] of he) {
      if (!Ie.startsWith(be.name + "@")) continue;
      const Ae = le.story, U = k.findIndex((ge) => ge.name === Ae);
      if (!(U < 0)) if (be.type === "COLUMN" || be.type === "BRACE") {
        Je.add(Ce(be.pt2, Ae));
        const ge = Math.max(be.nStories, 1), Ne = Math.min(U + ge, k.length - 1);
        Je.add(Ce(be.pt1, k[Ne].name));
      } else Je.add(Ce(be.pt1, Ae)), Je.add(Ce(be.pt2, Ae));
    }
    for (const [be] of G) Je.add(be);
    for (const be of Je) {
      const [Ie, le] = be.split("@"), Ae = V.get(Ie), U = ae.get(le);
      Ae === void 0 || U === void 0 || (ue.push([
        Ae[0],
        Ae[1],
        U
      ]), ze.push(be), He.set(be, ue.length - 1));
    }
    const je = [], Qe = [], we = [], Re = [], _e = /* @__PURE__ */ new Map();
    for (const be of j) for (const [Ie, le] of he) {
      if (!Ie.startsWith(be.name + "@")) continue;
      const Ae = le.story, U = k.findIndex((Be) => Be.name === Ae);
      if (U < 0) continue;
      let ge, Ne;
      if (be.type === "COLUMN" || be.type === "BRACE") {
        const Be = Math.max(be.nStories, 1), Ye = Math.min(U + Be, k.length - 1);
        ge = Ce(be.pt1, k[Ye].name), Ne = Ce(be.pt2, Ae);
      } else ge = Ce(be.pt1, Ae), Ne = Ce(be.pt2, Ae);
      const me = He.get(ge), qe = He.get(Ne);
      if (me === void 0 || qe === void 0 || me === qe) continue;
      const Ue = je.length;
      if (je.push([
        me,
        qe
      ]), Qe.push(be.name), we.push(be.type), Re.push(Ae), _e.set(Ue, le.section), le.rigidZone > 0 && Pt.set(Ue, [
        le.rigidZone,
        le.rigidZone
      ]), le.releases.length > 0) {
        const Be = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const Ye of le.releases) Ye === "TI" && (Be[0] = true), Ye === "M2I" && (Be[1] = true), Ye === "M3I" && (Be[2] = true), Ye === "TJ" && (Be[3] = true), Ye === "M2J" && (Be[4] = true), Ye === "M3J" && (Be[5] = true);
        Nt.set(Ue, Be);
      }
    }
    const et = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
    for (const [be, Ie] of _e) {
      const le = R.get(Ie);
      if (!le) continue;
      const Ae = Y.get(le.material);
      Ae && (et.set(be, Ae.E), dt.set(be, Ae.G));
      const U = le.D, ge = le.B, Ne = le.TF, me = le.TW;
      let qe = 0, Ue = 0, Be = 0, Ye = 0, ft = 0, zt = 0, Ve = "rect";
      switch (le.shape) {
        case "Concrete Rectangular":
          qe = U * ge, Ue = ge * U ** 3 / 12, Be = U * ge ** 3 / 12, Ye = ge * U ** 3 * (1 / 3 - 0.21 * (U / ge) * (1 - U ** 4 / (12 * ge ** 4))), ft = zt = 5 / 6 * qe, Ve = "rect";
          break;
        case "Concrete Circle":
          qe = Math.PI * U ** 2 / 4, Ue = Be = Math.PI * U ** 4 / 64, Ye = Math.PI * U ** 4 / 32, ft = zt = 0.9 * qe, Ve = "circ";
          break;
        case "Steel I/Wide Flange":
          qe = 2 * ge * Ne + (U - 2 * Ne) * me, Ue = (ge * U ** 3 - (ge - me) * (U - 2 * Ne) ** 3) / 12, Be = (2 * Ne * ge ** 3 + (U - 2 * Ne) * me ** 3) / 12, Ye = (2 * ge * Ne ** 3 + (U - 2 * Ne) * me ** 3) / 3, ft = (U - 2 * Ne) * me, zt = 2 * ge * Ne * 5 / 6, Ve = "I";
          break;
        case "Steel Tube":
          qe = U * ge - (U - 2 * me) * (ge - 2 * me), Ue = (ge * U ** 3 - (ge - 2 * me) * (U - 2 * me) ** 3) / 12, Be = (U * ge ** 3 - (U - 2 * me) * (ge - 2 * me) ** 3) / 12, Ye = 2 * me * (U - me) * (ge - me) * ((U - me) * (ge - me)) / (U - me + (ge - me)), ft = 2 * U * me, zt = 2 * ge * me, Ve = "HSS";
          break;
        case "Filled Steel Tube":
          qe = U * ge, Ue = ge * U ** 3 / 12, Be = U * ge ** 3 / 12, Ye = 2 * me * (U - me) * (ge - me) * ((U - me) * (ge - me)) / (U - me + (ge - me)), ft = 2 * U * me + 5 / 6 * (U - 2 * me) * (ge - 2 * me), zt = 2 * ge * me + 5 / 6 * (U - 2 * me) * (ge - 2 * me), Ve = "CFT";
          break;
        case "Steel Angle": {
          const Lt = Ne || me;
          qe = Lt * (U + ge - Lt), Ue = Lt * (U ** 3 + ge * Lt ** 2 + Lt ** 2 * (U - Lt)) / 12, Be = Lt * (ge ** 3 + U * Lt ** 2 + Lt ** 2 * (ge - Lt)) / 12, Ye = (U + ge - Lt) * Lt ** 3 / 3, ft = U * Lt, zt = ge * Lt, Ve = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          qe = 2 * ge * Ne + (U - 2 * Ne) * me, Ue = (me * U ** 3 + 2 * ge * Ne * (U - Ne) ** 2) / 12, Be = (2 * Ne * ge ** 3 + (U - 2 * Ne) * me ** 3) / 12, Ye = (2 * ge * Ne ** 3 + (U - 2 * Ne) * me ** 3) / 3, ft = (U - 2 * Ne) * me, zt = 2 * ge * Ne * 5 / 6, Ve = le.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          qe = 2 * (2 * ge * Ne + (U - 2 * Ne) * me), Ue = 2 * (me * U ** 3 + 2 * ge * Ne * (U - Ne) ** 2) / 12, Be = 2 * (2 * Ne * ge ** 3 + (U - 2 * Ne) * me ** 3) / 12, Ye = 2 * (2 * ge * Ne ** 3 + (U - 2 * Ne) * me ** 3) / 3, ft = 2 * (U - 2 * Ne) * me, zt = 4 * ge * Ne * 5 / 6, Ve = "2C";
          break;
        default:
          U > 0 && ge > 0 && (qe = U * ge, Ue = ge * U ** 3 / 12, Be = U * ge ** 3 / 12, Ye = Math.min(U, ge) * Math.max(U, ge) ** 3 / 3 * 0.3, ft = zt = 5 / 6 * qe);
          break;
      }
      le.modI2 && (Be *= le.modI2), le.modI3 && (Ue *= le.modI3), ot.set(be, qe), Tt.set(be, Ue), kt.set(be, Be), wt.set(be, Ye), ft > 0 && ut.set(be, ft), zt > 0 && $t.set(be, zt), Te.set(be, {
        type: Ve,
        b: ge || void 0,
        h: U || void 0,
        d: Ve === "circ" || Ve === "pipe" ? U : void 0,
        tw: me || void 0,
        tf: Ne || void 0,
        r: le.R,
        name: Ie
      });
    }
    const vt = /* @__PURE__ */ new Map();
    for (const [be, Ie] of G) {
      const le = He.get(be);
      if (le === void 0) continue;
      const Ae = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const U of Ie) U === "UX" && (Ae[0] = true), U === "UY" && (Ae[1] = true), U === "UZ" && (Ae[2] = true), U === "RX" && (Ae[3] = true), U === "RY" && (Ae[4] = true), U === "RZ" && (Ae[5] = true);
      vt.set(le, Ae);
    }
    const pt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map();
    for (let be = 0; be < Qe.length; be++) At.set(`${Qe[be]}@${Re[be]}`, be);
    for (const be of z) {
      const Ie = At.get(`${be.line}@${be.story}`);
      if (Ie === void 0) continue;
      const [le, Ae] = je[Ie], U = ue[le], ge = ue[Ae], Ne = Math.sqrt((ge[0] - U[0]) ** 2 + (ge[1] - U[1]) ** 2 + (ge[2] - U[2]) ** 2);
      if (Ne < 1e-10) continue;
      const me = be.val * Ne / 2;
      let qe = 0, Ue = 0, Be = 0;
      be.dir === "GRAV" || be.dir === "GRAVITY" ? Be = -me : be.dir === "X" ? qe = me : be.dir === "Y" ? Ue = me : be.dir === "Z" && (Be = -me);
      for (const Ye of [
        le,
        Ae
      ]) {
        const ft = pt.get(Ye) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        ft[0] += qe, ft[1] += Ue, ft[2] += Be, pt.set(Ye, ft);
      }
    }
    const gt = /* @__PURE__ */ new Map();
    for (const [be, Ie] of _e) {
      const le = R.get(Ie);
      if (!le) continue;
      const Ae = Y.get(le.material);
      (Ae == null ? void 0 : Ae.density) && gt.set(be, Ae.density);
    }
    return {
      units: _,
      stories: k.reverse(),
      materials: Y,
      frameSections: R,
      nodes: ue,
      nodeNames: ze,
      nodeNameToIdx: He,
      elements: je,
      elementNames: Qe,
      elementTypes: we,
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
        sectionShapes: Te
      },
      sectionShapes: Te,
      grids: K,
      info: {
        nNodes: ue.length,
        nFrames: je.length,
        nAreas: D.length,
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
    for (const Y of k) {
      const R = t.get(Y);
      if (!(!R || R.length === 0)) {
        _.push(`$ ${Y}`);
        for (const V of R) _.push(V);
        _.push("");
      }
    }
    for (const [Y, R] of t) if (!k.includes(Y) && R.length !== 0) {
      _.push(`$ ${Y}`);
      for (const V of R) _.push(V);
      _.push("");
    }
    return _.push("  END"), _.push("$ END OF MODEL FILE"), _.join(`\r
`);
  }
  function Da(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: k, elementInputs: Y, title: R, units: V } = t, j = (V == null ? void 0 : V.force) || "TONF", D = (V == null ? void 0 : V.length) || "M", G = [], he = (we) => Math.round(we * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${j}"  "${D}"  "C"  `), R && G.push(`  TITLE2  "${R}"  `), G.push("");
    const z = /* @__PURE__ */ new Set();
    h.forEach((we) => z.add(he(we[1])));
    const K = [
      ...z
    ].sort((we, Re) => we - Re), ye = [], fe = /* @__PURE__ */ new Map();
    ye.push("Base"), fe.set(K[0], "Base");
    for (let we = 1; we < K.length; we++) {
      const Re = `Level_${we}`;
      ye.push(Re), fe.set(K[we], Re);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let we = K.length - 1; we >= 1; we--) G.push(`  STORY "${ye[we]}"  HEIGHT ${he(K[we] - K[we - 1])} MASTERSTORY "Yes"  `);
    K.length > 0 && G.push(`  STORY "Base"  ELEV ${K[0]} `), G.push(""), G.push("$ MATERIAL PROPERTIES");
    const ee = /* @__PURE__ */ new Set();
    (_a2 = Y.elasticities) == null ? void 0 : _a2.forEach((we) => ee.add(we));
    const ae = /* @__PURE__ */ new Map();
    let ue = 0;
    for (const we of ee) {
      const Re = `Mat_${++ue}`;
      ae.set(we, Re), G.push(`  MATERIAL  "${Re}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Re}"    SYMTYPE "Isotropic"  E ${we}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const ze = /* @__PURE__ */ new Set(), He = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map();
    _.forEach((we, Re) => {
      var _a3, _b2;
      if (we.length !== 2) return;
      const _e = (_a3 = Y.sectionShapes) == null ? void 0 : _a3.get(Re), et = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(Re)) ?? 0, dt = ae.get(et) || "Mat_1", ot = (_e == null ? void 0 : _e.h) ?? 0, ut = (_e == null ? void 0 : _e.b) ?? 0, $t = (_e == null ? void 0 : _e.d) ?? 0, Pt = (_e == null ? void 0 : _e.tf) ?? 0, Nt = (_e == null ? void 0 : _e.tw) ?? 0, Tt = (_e == null ? void 0 : _e.type) || "rect", kt = `${Tt}_${ot}_${ut}_${$t}_${Pt}_${Nt}`;
      (_e == null ? void 0 : _e.name) && !Ce.has(kt) && Ce.set(kt, _e.name);
      let wt = Ce.get(kt);
      if (wt || (Tt === "rect" ? wt = `R${he(ut * 100)}x${he(ot * 100)}` : Tt === "circ" ? wt = `C_D${he($t * 100)}` : Tt === "I" ? wt = `I_${he(ot * 100)}` : wt = `Sec_${ze.size + 1}`, Ce.set(kt, wt)), He.set(Re, wt), ze.has(wt)) return;
      ze.add(wt);
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
      ot && (pt += `  D ${ot}`), ut && (pt += `  B ${ut}`), $t && !ot && (pt += `  D ${$t}`), Pt && (pt += `  TF ${Pt}`), Nt && (pt += `  TW ${Nt}`), G.push(pt);
    }), G.push("");
    const Je = /* @__PURE__ */ new Map();
    let st = 0;
    h.forEach((we) => {
      const Re = `${he(we[0])},${he(we[2])}`;
      Je.has(Re) || Je.set(Re, `${++st}`);
    }), G.push("$ POINT COORDINATES");
    for (const [we, Re] of Je) {
      const [_e, et] = we.split(",").map(Number);
      G.push(`  POINT "${Re}"  ${_e} ${et} `);
    }
    G.push("");
    const je = (we) => {
      const Re = h[we], _e = `${he(Re[0])},${he(Re[2])}`;
      return {
        pt: Je.get(_e) || "1",
        story: fe.get(he(Re[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const Qe = [];
    return _.forEach((we, Re) => {
      if (we.length !== 2) return;
      const _e = ja(h, we), et = He.get(Re) || `Sec_${Re}`;
      if (_e === "BEAM") {
        const dt = je(we[0]), ot = je(we[1]);
        G.push(`  LINE  "E${Re + 1}"  BEAM  "${dt.pt}"  "${ot.pt}"  0`), Qe.push(`  LINEASSIGN  "E${Re + 1}"  "${dt.story}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const dt = h[we[0]][1] <= h[we[1]][1] ? we[0] : we[1], ot = h[we[0]][1] <= h[we[1]][1] ? we[1] : we[0];
        je(dt);
        const ut = je(ot), $t = he(h[dt][1]), Pt = he(h[ot][1]), Nt = K.indexOf($t), Tt = K.indexOf(Pt), kt = Math.max(1, Tt >= 0 && Nt >= 0 ? Tt - Nt : 1);
        G.push(`  LINE  "E${Re + 1}"  ${_e}  "${ut.pt}"  "${ut.pt}"  ${kt}`);
        for (let wt = 0; wt < kt; wt++) {
          const Te = Tt - wt;
          Te >= 0 && Te < ye.length && Qe.push(`  LINEASSIGN  "E${Re + 1}"  "${ye[Te]}"  SECTION "${et}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = k.supports) == null ? void 0 : _b.forEach((we, Re) => {
      const _e = [];
      if (we[0] && _e.push("UX"), we[1] && _e.push("UY"), we[2] && _e.push("UZ"), we[3] && _e.push("RX"), we[4] && _e.push("RY"), we[5] && _e.push("RZ"), _e.length > 0) {
        const et = je(Re);
        G.push(`  POINTASSIGN  "${et.pt}"  "${et.story}"  RESTRAINT "${_e.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), Qe.forEach((we) => G.push(we)), G.push(""), G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), k.loads && k.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), k.loads.forEach((we, Re) => {
      const [_e, et, dt] = we, ot = je(Re);
      Math.abs(_e) > 1e-10 && G.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FX ${_e}`), Math.abs(et) > 1e-10 && G.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FY ${et}`), Math.abs(dt) > 1e-10 && G.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FZ ${dt}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function ja(t, h) {
    const _ = t[h[0]], k = t[h[1]], Y = Math.abs(k[1] - _[1]), R = Math.sqrt((k[0] - _[0]) ** 2 + (k[2] - _[2]) ** 2), V = Y > R * 0.5;
    return V && R > 0.01 ? "BRACE" : V ? "COLUMN" : "BEAM";
  }
  function Wa(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: k, elementInputs: Y } = t, R = [];
    return R.push("# OpenSeesPy model exported from Awatif FEM Studio"), R.push(`# ${h.length} nodes, ${_.length} elements`), R.push(""), R.push("import openseespy.opensees as ops"), R.push(""), R.push("ops.wipe()"), R.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), R.push(""), R.push("# --- Nodes ---"), h.forEach((V, j) => {
      R.push(`ops.node(${j + 1}, ${V[0]}, ${V[1]}, ${V[2]})`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = k.supports) == null ? void 0 : _a2.forEach((V, j) => {
      const D = V.map((G) => G ? 1 : 0).join(", ");
      R.push(`ops.fix(${j + 1}, ${D})`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), R.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), R.push(""), R.push("# --- Elements (elasticBeamColumn) ---"), _.forEach((V, j) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const D = h[V[0]], G = h[V[1]], z = Math.abs(G[2] - D[2]) > Math.max(Math.abs(G[0] - D[0]), Math.abs(G[1] - D[1])) ? 2 : 1, K = ((_a3 = Y.areas) == null ? void 0 : _a3.get(j)) ?? 1, ye = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, fe = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ee = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, ae = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, ue = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      R.push(`ops.element('elasticBeamColumn', ${j + 1}, ${V[0] + 1}, ${V[1] + 1}, ${K}, ${ye}, ${fe}, ${ee}, ${ae}, ${ue}, ${z})`);
    }), R.push(""), k.loads && k.loads.size > 0 && (R.push("# --- Loads ---"), R.push("ops.timeSeries('Linear', 1)"), R.push("ops.pattern('Plain', 1, 1)"), k.loads.forEach((V, j) => {
      const D = V.map((G) => G).join(", ");
      R.push(`ops.load(${j + 1}, ${D})`);
    }), R.push("")), R.push("# --- Analysis ---"), R.push("ops.system('BandGeneral')"), R.push("ops.numberer('RCM')"), R.push("ops.constraints('Plain')"), R.push("ops.integrator('LoadControl', 1.0)"), R.push("ops.algorithm('Linear')"), R.push("ops.analysis('Static')"), R.push("ops.analyze(1)"), R.push(""), R.push("# --- Results ---"), R.push('print("\\n=== Displacements ===")'), h.forEach((V, j) => {
      R.push(`print(f"Node {${j + 1}}: {ops.nodeDisp(${j + 1})}")`);
    }), R.push(""), R.push('print("\\n=== Reactions ===")'), R.push("ops.reactions()"), (_b = k.supports) == null ? void 0 : _b.forEach((V, j) => {
      R.push(`print(f"Node {${j + 1}}: {ops.nodeReaction(${j + 1})}")`);
    }), R.join(`
`);
  }
  function Ya(t) {
    var _a2, _b;
    const { nodes: h, elements: _, nodeInputs: k, elementInputs: Y } = t, R = [];
    return R.push("# OpenSees Tcl model exported from Awatif FEM Studio"), R.push(`# ${h.length} nodes, ${_.length} elements`), R.push(""), R.push("wipe"), R.push("model basic -ndm 3 -ndf 6"), R.push(""), R.push("# --- Nodes ---"), h.forEach((V, j) => {
      R.push(`node ${j + 1} ${V[0]} ${V[1]} ${V[2]}`);
    }), R.push(""), R.push("# --- Boundary Conditions ---"), (_a2 = k.supports) == null ? void 0 : _a2.forEach((V, j) => {
      const D = V.map((G) => G ? 1 : 0).join(" ");
      R.push(`fix ${j + 1} ${D}`);
    }), R.push(""), R.push("# --- Geometric Transformations ---"), R.push("geomTransf Linear 1 0.0 0.0 1.0"), R.push("geomTransf Linear 2 -1.0 0.0 0.0"), R.push(""), R.push("# --- Elements ---"), _.forEach((V, j) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const D = h[V[0]], G = h[V[1]], z = Math.abs(G[2] - D[2]) > Math.max(Math.abs(G[0] - D[0]), Math.abs(G[1] - D[1])) ? 2 : 1, K = ((_a3 = Y.areas) == null ? void 0 : _a3.get(j)) ?? 1, ye = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, fe = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ee = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, ae = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, ue = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      R.push(`element elasticBeamColumn ${j + 1} ${V[0] + 1} ${V[1] + 1} ${K} ${ye} ${fe} ${ee} ${ae} ${ue} ${z}`);
    }), R.push(""), k.loads && k.loads.size > 0 && (R.push("# --- Loads ---"), R.push("timeSeries Linear 1"), R.push("pattern Plain 1 1 {"), k.loads.forEach((V, j) => {
      const D = V.map((G) => G).join(" ");
      R.push(`  load ${j + 1} ${D}`);
    }), R.push("}"), R.push("")), R.push("# --- Analysis ---"), R.push("system BandGeneral"), R.push("numberer RCM"), R.push("constraints Plain"), R.push("integrator LoadControl 1.0"), R.push("algorithm Linear"), R.push("analysis Static"), R.push("analyze 1"), R.push(""), R.push("# --- Results ---"), R.push('puts "\\n=== Displacements ==="'), h.forEach((V, j) => {
      R.push(`puts "Node ${j + 1}: [nodeDisp ${j + 1}]"`);
    }), R.push('puts "\\n=== Reactions ==="'), R.push("reactions"), (_b = k.supports) == null ? void 0 : _b.forEach((V, j) => {
      R.push(`puts "Node ${j + 1}: [nodeReaction ${j + 1}]"`);
    }), R.join(`
`);
  }
  function Ga(t) {
    const h = [], _ = [], k = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
    for (const ye of t.split(/\r?\n/)) {
      const fe = ye.trim(), ee = fe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ee) {
        const He = parseInt(ee[1]), Ce = h.length;
        h.push([
          parseFloat(ee[2]),
          parseFloat(ee[3]),
          parseFloat(ee[4])
        ]), z.set(He, Ce);
        continue;
      }
      const ae = fe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ae) {
        const He = parseInt(ae[1]), Ce = z.get(He);
        Ce !== void 0 && k.set(Ce, [
          ae[2] === "1",
          ae[3] === "1",
          ae[4] === "1",
          ae[5] === "1",
          ae[6] === "1",
          ae[7] === "1"
        ]);
        continue;
      }
      const ue = fe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ue) {
        const He = parseInt(ue[1]), Ce = z.get(parseInt(ue[2])), Je = z.get(parseInt(ue[3]));
        if (Ce !== void 0 && Je !== void 0) {
          const st = _.length;
          _.push([
            Ce,
            Je
          ]), K.set(He, st), j.set(st, parseFloat(ue[4])), R.set(st, parseFloat(ue[5])), V.set(st, parseFloat(ue[6])), he.set(st, parseFloat(ue[7])), D.set(st, parseFloat(ue[8])), G.set(st, parseFloat(ue[9]));
        }
        continue;
      }
      const ze = fe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ze) {
        const He = z.get(parseInt(ze[1]));
        He !== void 0 && Y.set(He, [
          parseFloat(ze[2]),
          parseFloat(ze[3]),
          parseFloat(ze[4]),
          parseFloat(ze[5]),
          parseFloat(ze[6]),
          parseFloat(ze[7])
        ]);
      }
    }
    return {
      nodes: h,
      elements: _,
      nodeInputs: {
        supports: k,
        loads: Y
      },
      elementInputs: {
        elasticities: R,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: D,
        momentsOfInertiaZ: G,
        torsionalConstants: he
      }
    };
  }
  function Ja(t) {
    const h = [], _ = [], k = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const K of t.split(/\r?\n/)) {
      const ye = K.trim();
      if (ye.startsWith("#") || ye.startsWith("//")) continue;
      const fe = ye.split(/\s+/);
      if (fe[0] === "node" && fe.length >= 5) {
        const ee = parseInt(fe[1]), ae = h.length;
        h.push([
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4])
        ]), z.set(ee, ae);
        continue;
      }
      if (fe[0] === "fix" && fe.length >= 8) {
        const ee = z.get(parseInt(fe[1]));
        ee !== void 0 && k.set(ee, [
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
        const ee = z.get(parseInt(fe[3])), ae = z.get(parseInt(fe[4]));
        if (ee !== void 0 && ae !== void 0) {
          const ue = _.length;
          _.push([
            ee,
            ae
          ]), j.set(ue, parseFloat(fe[5])), R.set(ue, parseFloat(fe[6])), V.set(ue, parseFloat(fe[7])), he.set(ue, parseFloat(fe[8])), D.set(ue, parseFloat(fe[9])), G.set(ue, parseFloat(fe[10]));
        }
        continue;
      }
      if (fe[0] === "load" && fe.length >= 8) {
        const ee = z.get(parseInt(fe[1]));
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
        supports: k,
        loads: Y
      },
      elementInputs: {
        elasticities: R,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: D,
        momentsOfInertiaZ: G,
        torsionalConstants: he
      }
    };
  }
  Ts = Co.state(false);
  el = function(t) {
    t.nodeInputs || (t.nodeInputs = Co.state({})), t.elementInputs || (t.elementInputs = Co.state({})), t.deformOutputs || (t.deformOutputs = Co.state({})), t.analyzeOutputs || (t.analyzeOutputs = Co.state({}));
    let h = "tonf", _ = "m", k = xo(h, _), Y = {
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
    const G = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let z = "", K = {}, ye = null, fe = "", ee = [], ae = [], ue = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set(), He = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = null, je = [], Qe = 0.2, we = 2, Re = 2, _e = false, et = 2, dt = "x", ot = /* @__PURE__ */ new Set(), ut = true, $t = 0.15, Pt = 2, Nt = 2, Tt = /* @__PURE__ */ new Set();
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
    }), Te = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let vt = 0, pt = 3, At = false, gt = 0, be = null, Ie = 0, le = [], Ae = 1, U = true;
    const ge = Sa();
    ge.div.style.display = "none";
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
    let me = [], qe = [], Ue = 0, Be = [], Ye = null;
    function ft() {
      if (!Ye) return;
      const e = Ze();
      e && e.scene.remove(Ye), Ye.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ye = null;
    }
    function zt(e, o, n, l, s) {
      ft();
      const c = Ze();
      if (!c) return;
      Ye = new Jo(), Ye.name = "refGrid";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = Math.max(...n), b = i - a || 1, $ = d - u || 1, w = 3359829, x = 2241348;
      for (const g of n) {
        for (const M of o) {
          const I = new Dt().setFromPoints([
            new Se(a, g, M),
            new Se(i, g, M)
          ]), E = new zo({
            color: w,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new go(I, E);
          F.computeLineDistances(), F.renderOrder = -10, Ye.add(F);
        }
        for (const M of e) {
          const I = new Dt().setFromPoints([
            new Se(M, g, u),
            new Se(M, g, d)
          ]), E = new zo({
            color: w,
            dashSize: $ * 0.015,
            gapSize: $ * 0.01,
            transparent: true,
            opacity: 0.25
          }), F = new go(I, E);
          F.computeLineDistances(), F.renderOrder = -10, Ye.add(F);
        }
      }
      for (const g of e) for (const M of o) {
        const I = new Dt().setFromPoints([
          new Se(g, 0, M),
          new Se(g, r, M)
        ]), E = new zo({
          color: x,
          dashSize: r * 0.01,
          gapSize: r * 8e-3,
          transparent: true,
          opacity: 0.15
        }), F = new go(I, E);
        F.computeLineDistances(), F.renderOrder = -10, Ye.add(F);
      }
      const f = Math.min(b, $) * 0.015;
      for (const g of n) for (const M of e) for (const I of o) {
        const E = [
          new Se(M - f, g, I),
          new Se(M + f, g, I),
          new Se(M, g, I - f),
          new Se(M, g, I + f)
        ], F = new Dt().setFromPoints(E), y = new To({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new Lo(F, y);
        m.renderOrder = -5, Ye.add(m);
      }
      Ye.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((M) => {
          M.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), c.scene.add(Ye), c.render();
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
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = i - a || 1, b = d - u || 1, $ = Math.max(r, b), w = $ * 0.08, x = l || e.map((m, p) => String.fromCharCode(65 + p)), f = s || o.map((m, p) => String(p + 1)), g = $ * 0.018, M = o.length <= 1, I = 8947848;
      for (let m = 0; m < e.length; m++) {
        const p = e[m];
        if (M) {
          const v = -w - g * 1.5;
          rn(p, 0, 0, p, 0, v + g, I, Ve), cn(x[m] || `${m}`, p, 0, v, g, Ve);
        } else {
          const v = u - w - g * 1.5;
          rn(p, u, 0, p, v + g, 0, I, Ve), cn(x[m] || `${m}`, p, v, 0, g, Ve);
        }
      }
      if (!M) for (let m = 0; m < o.length; m++) {
        const p = o[m], v = a - w - g * 1.5;
        rn(a, p, 0, v + g, p, 0, I, Ve), cn(f[m] || `${m}`, v, p, 0, g, Ve);
      }
      const E = g * 1.8, F = w * 1.2, y = w * 1.2;
      for (let m = 0; m < e.length - 1; m++) {
        const p = e[m], v = e[m + 1], S = Math.abs(v - p), L = (p + v) / 2, N = `${S.toFixed(2)} m`;
        M ? (an(N, L, 0, -F, E, Ve), ln(p, 0, -F * 0.7, v, 0, -F * 0.7, 16763904, Ve)) : (an(N, L, u - y, 0, E, Ve), ln(p, u - y * 0.7, 0, v, u - y * 0.7, 0, 16763904, Ve));
      }
      if (!M) for (let m = 0; m < o.length - 1; m++) {
        const p = o[m], v = o[m + 1], S = Math.abs(v - p), L = (p + v) / 2, N = `${S.toFixed(2)} m`;
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
        zt(l, s, c), me = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), qe = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), Ue = c[c.length - 1], Be = c.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Po(me.map((a) => a.coord), qe.map((a) => a.coord), Ue, me.map((a) => a.label), qe.map((a) => a.label));
        {
          const a = c.map((i, u) => ({
            name: u === 0 ? "Base" : `P${u}`,
            height: u > 0 ? i - c[u - 1] : 0,
            elev: i
          }));
          sn(a, me.map((i) => i.coord), qe.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
      },
      build(e) {
        var _a2;
        if (me.length === 0 || Be.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (e == null ? void 0 : e.col) || "40x40", n = (e == null ? void 0 : e.viga) || "30x40", l = (e == null ? void 0 : e.fc) || 210, [s, c] = o.split("x").map((H) => parseFloat(H) / 100), [a, i] = n.split("x").map((H) => parseFloat(H) / 100), u = me.map((H) => H.coord), d = qe.map((H) => H.coord), r = Be.map((H) => H.elev), b = u.length, $ = d.length, w = r.length, x = w - 1, f = [], g = {};
        for (let H = 0; H < w; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b; ie++) g[`${ie},${H},${de}`] = f.length, f.push([
          u[ie],
          r[H],
          d[de]
        ]);
        const M = [], I = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
        for (let H = 0; H < x; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b; ie++) {
          const Q = M.length;
          M.push([
            g[`${ie},${H},${de}`],
            g[`${ie},${H + 1},${de}`]
          ]), I.add(Q), F.set(Q, H);
        }
        for (let H = 1; H < w; H++) for (let de = 0; de < $; de++) for (let ie = 0; ie < b - 1; ie++) {
          const Q = M.length;
          M.push([
            g[`${ie},${H},${de}`],
            g[`${ie + 1},${H},${de}`]
          ]), E.add(Q), F.set(Q, H - 1);
        }
        for (let H = 1; H < w; H++) for (let de = 0; de < b; de++) for (let ie = 0; ie < $ - 1; ie++) {
          const Q = M.length;
          M.push([
            g[`${de},${H},${ie}`],
            g[`${de},${H},${ie + 1}`]
          ]), E.add(Q), F.set(Q, H - 1);
        }
        const y = ((_a2 = e == null ? void 0 : e.braces) == null ? void 0 : _a2.toLowerCase()) || "", m = /* @__PURE__ */ new Set();
        if (y) {
          const H = y === "all" || y === "x" || y === "perimeter", de = y === "all" || y === "y" || y === "perimeter";
          for (let ie = 0; ie < x; ie++) {
            if (H) for (let Q = 0; Q < $; Q++) {
              if (y === "perimeter" && Q !== 0 && Q !== $ - 1) continue;
              const J = Math.floor((b - 1) / 2);
              for (let pe = 0; pe < b - 1; pe++) {
                if (y === "perimeter" && pe !== J) continue;
                const Ee = M.length;
                M.push([
                  g[`${pe},${ie},${Q}`],
                  g[`${pe + 1},${ie + 1},${Q}`]
                ]), m.add(Ee), F.set(Ee, ie);
                const oe = M.length;
                M.push([
                  g[`${pe + 1},${ie},${Q}`],
                  g[`${pe},${ie + 1},${Q}`]
                ]), m.add(oe), F.set(oe, ie);
              }
            }
            if (de) for (let Q = 0; Q < b; Q++) {
              if (y === "perimeter" && Q !== 0 && Q !== b - 1) continue;
              const J = Math.floor(($ - 1) / 2);
              for (let pe = 0; pe < $ - 1; pe++) {
                if (y === "perimeter" && pe !== J) continue;
                const Ee = M.length;
                M.push([
                  g[`${Q},${ie},${pe}`],
                  g[`${Q},${ie + 1},${pe + 1}`]
                ]), m.add(Ee), F.set(Ee, ie);
                const oe = M.length;
                M.push([
                  g[`${Q},${ie},${pe + 1}`],
                  g[`${Q},${ie + 1},${pe}`]
                ]), m.add(oe), F.set(oe, ie);
              }
            }
          }
        }
        const p = 15100 * Math.sqrt(l) * 10, v = p / (2 * (1 + 0.2)), S = s * c, L = s * c ** 3 / 12, N = c * s ** 3 / 12, A = s * c * (s ** 2 + c ** 2) / 12, C = a * i, P = a * i ** 3 / 12, q = i * a ** 3 / 12, te = a * i * (a ** 2 + i ** 2) / 12, Z = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map();
        for (let H = 0; H < M.length; H++) Z.set(H, p), re.set(H, v), I.has(H) ? (se.set(H, S), X.set(H, L), ce.set(H, N), Me.set(H, A), Fe.set(H, {
          type: "rect",
          b: s,
          h: c,
          name: `COL${o}`
        })) : m.has(H) ? (se.set(H, S), X.set(H, L), ce.set(H, N), Me.set(H, A), Fe.set(H, {
          type: "rect",
          b: s,
          h: c,
          name: `BR${o}`
        })) : (se.set(H, C), X.set(H, P), ce.set(H, q), Me.set(H, te), Fe.set(H, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const Pe = /* @__PURE__ */ new Map();
        for (let H = 0; H < $; H++) for (let de = 0; de < b; de++) Pe.set(g[`${de},0,${H}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return t.nodes.val = f, t.elements.val = M, t.nodeInputs.val = {
          supports: Pe,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: Z,
          shearModuli: re,
          areas: se,
          momentsOfInertiaZ: X,
          momentsOfInertiaY: ce,
          torsionalConstants: Me,
          sectionShapes: Fe
        }, ue = I, ze = E, Ce = F, console.log(`Built: ${f.length} nodes, ${M.length} elements (${I.size} cols, ${E.size} beams, ${m.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${y ? `, braces=${y}` : ""}`), {
          nodes: f.length,
          elements: M.length
        };
      },
      addCol(e, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = me.findIndex((x) => x.label === e), s = qe.findIndex((x) => x.label === o);
        if (l < 0) {
          console.log(`Axis "${e}" not found. Available: ${me.map((x) => x.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${qe.map((x) => x.label)}`);
          return;
        }
        const c = me[l].coord, a = qe[s].coord, i = [
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
          ]), ue.add(u.length - 1), Ce.set(u.length - 1, x - 1), w++;
        }
        return t.nodes.val = i, t.elements.val = u, t.nodeInputs.val = {
          ...t.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = t.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${e}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(e, o, n, l, s) {
        var _a2;
        const c = me.findIndex((F) => F.label === e), a = qe.findIndex((F) => F.label === o), i = me.findIndex((F) => F.label === n), u = qe.findIndex((F) => F.label === l), d = Be.findIndex((F) => F.label === s);
        if (c < 0 || a < 0 || i < 0 || u < 0) {
          console.log("Axis not found");
          return;
        }
        if (d < 1) {
          console.log(`Story "${s}" not found. Available: ${Be.filter((F) => F.label !== "Base").map((F) => F.label)}`);
          return;
        }
        const r = me[c].coord, b = qe[a].coord, $ = me[i].coord, w = qe[u].coord, x = Be[d].elev, f = [
          ...t.nodes.val
        ], g = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], M = (F, y, m) => {
          const p = f.findIndex((v) => Math.abs(v[0] - F) < 1e-3 && Math.abs(v[1] - y) < 1e-3 && Math.abs(v[2] - m) < 1e-3);
          return p >= 0 ? p : (f.push([
            F,
            y,
            m
          ]), f.length - 1);
        }, I = M(r, x, b), E = M($, x, w);
        return g.push([
          I,
          E
        ]), ze.add(g.length - 1), Ce.set(g.length - 1, d - 1), t.nodes.val = f, t.elements.val = g, console.log(`Added beam ${e}-${o} \u2192 ${n}-${l} at ${s}`), g.length - 1;
      },
      addBrace(e, o, n, l, s, c) {
        var _a2;
        const a = me.findIndex((p) => p.label === e), i = qe.findIndex((p) => p.label === o), u = Be.findIndex((p) => p.label === n), d = me.findIndex((p) => p.label === l), r = qe.findIndex((p) => p.label === s), b = Be.findIndex((p) => p.label === c);
        if (a < 0 || i < 0 || u < 0) {
          console.log(`Point 1 not found: ${e}-${o}@${n}`);
          return;
        }
        if (d < 0 || r < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${c}`);
          return;
        }
        const $ = me[a].coord, w = qe[i].coord, x = Be[u].elev, f = me[d].coord, g = qe[r].coord, M = Be[b].elev, I = [
          ...t.nodes.val
        ], E = [
          ...((_a2 = t.elements) == null ? void 0 : _a2.val) || []
        ], F = (p, v, S) => {
          const L = I.findIndex((N) => Math.abs(N[0] - p) < 1e-3 && Math.abs(N[1] - v) < 1e-3 && Math.abs(N[2] - S) < 1e-3);
          return L >= 0 ? L : (I.push([
            p,
            v,
            S
          ]), I.length - 1);
        }, y = F($, x, w), m = F(f, M, g);
        return E.push([
          y,
          m
        ]), Ce.set(E.length - 1, Math.min(u, b)), t.nodes.val = I, t.elements.val = E, console.log(`Added brace ${e}-${o}@${n} \u2192 ${l}-${s}@${c}`), E.length - 1;
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
        const x = b.length, f = $.length, g = w.length, M = l.length, I = [], E = {};
        for (let J = 0; J < g; J++) for (let pe = 0; pe < f; pe++) for (let Ee = 0; Ee < x; Ee++) E[`${Ee},${J},${pe}`] = I.length, I.push([
          b[Ee],
          w[J],
          $[pe]
        ]);
        const F = [], y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
        for (let J = 0; J < M; J++) for (let pe = 0; pe < f; pe++) for (let Ee = 0; Ee < x; Ee++) {
          const oe = F.length;
          F.push([
            E[`${Ee},${J},${pe}`],
            E[`${Ee},${J + 1},${pe}`]
          ]), y.add(oe), p.set(oe, J);
        }
        for (let J = 1; J < g; J++) for (let pe = 0; pe < f; pe++) for (let Ee = 0; Ee < x - 1; Ee++) {
          const oe = F.length;
          F.push([
            E[`${Ee},${J},${pe}`],
            E[`${Ee + 1},${J},${pe}`]
          ]), m.add(oe), p.set(oe, J - 1);
        }
        for (let J = 1; J < g; J++) for (let pe = 0; pe < x; pe++) for (let Ee = 0; Ee < f - 1; Ee++) {
          const oe = F.length;
          F.push([
            E[`${pe},${J},${Ee}`],
            E[`${pe},${J},${Ee + 1}`]
          ]), m.add(oe), p.set(oe, J - 1);
        }
        const S = 15100 * Math.sqrt(a) * 10, L = S / (2 * (1 + 0.2)), N = i * u, A = i * u ** 3 / 12, C = u * i ** 3 / 12, P = i * u * (i ** 2 + u ** 2) / 12, q = d * r, te = d * r ** 3 / 12, Z = r * d ** 3 / 12, re = d * r * (d ** 2 + r ** 2) / 12, se = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
        for (let J = 0; J < F.length; J++) se.set(J, S), X.set(J, L), y.has(J) ? (ce.set(J, N), Me.set(J, A), Fe.set(J, C), Pe.set(J, P), H.set(J, {
          type: "rect",
          b: i,
          h: u,
          name: `COL${s}`
        })) : (ce.set(J, q), Me.set(J, te), Fe.set(J, Z), Pe.set(J, re), H.set(J, {
          type: "rect",
          b: d,
          h: r,
          name: `V${c}`
        }));
        const de = /* @__PURE__ */ new Map();
        for (let J = 0; J < f; J++) for (let pe = 0; pe < x; pe++) de.set(E[`${pe},0,${J}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        t.nodes.val = I, t.elements.val = F, t.nodeInputs.val = {
          supports: de,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: se,
          shearModuli: X,
          areas: ce,
          momentsOfInertiaZ: Me,
          momentsOfInertiaY: Fe,
          torsionalConstants: Pe,
          sectionShapes: H
        }, ue = y, ze = m, Ce = p, me = b.map((J, pe) => ({
          label: String.fromCharCode(65 + pe),
          coord: J
        })), qe = $.map((J, pe) => ({
          label: `${pe + 1}`,
          coord: J
        })), Ue = w[w.length - 1], Po(me.map((J) => J.coord), qe.map((J) => J.coord), Ue, me.map((J) => J.label), qe.map((J) => J.label));
        {
          const J = w.map((pe, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? pe - w[Ee - 1] : 0,
            elev: pe
          }));
          sn(J, b, $);
        }
        const ie = ve.querySelector("#cad3d-axis-buttons");
        if (ie) {
          ie.style.display = "flex";
          const J = me.map((Ee) => Ee.label), pe = qe.map((Ee) => Ee.label);
          ie.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of J) ie.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          ie.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of pe) ie.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const Q = ve.querySelector("#cad3d-floor-buttons");
        if (Q) {
          Q.style.display = "flex", Q.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let J = 0; J < M; J++) Q.innerHTML += `<button class="floor-btn" data-floor="${J}">P${J + 1}</button>`;
        }
        return zt(b, $, w), Ge(), console.log(`Model3D: ${I.length}n ${F.length}e | ${x}x${f} grid, ${M} floors | COL${s} V${c} f'c=${a}`), {
          nodes: I.length,
          elements: F.length,
          columns: y.size,
          beams: m.size
        };
      },
      clear() {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs && (t.nodeInputs.val = {}), t.elementInputs && (t.elementInputs.val = {}), ue = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), me = [], qe = [], Ue = 0, Lt(), Hn(), ft();
        const e = ve.querySelector("#cad3d-axis-buttons");
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
        ue = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set();
        for (let x = 0; x < a.length - 1; x++) for (let f = 0; f < s.length; f++) u(f) || (ue.add(b.length), b.push([
          d[`${f},${x}`],
          d[`${f},${x + 1}`]
        ]));
        for (let x = 1; x < a.length; x++) for (let f = 0; f < s.length - 1; f++) ze.add(b.length), b.push([
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
        }), me = [
          ...s
        ], qe = [
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
        for (let p = 0; p < b.length; p++) for (let v = 0; v < r.length; v++) for (let S = 0; S < d.length; S++) p === 0 && x(S, v) || (g[`${S},${v},${p}`] = f.length, f.push([
          d[S],
          r[v],
          b[p]
        ]));
        const M = f.length, I = [];
        ue = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map();
        const E = [];
        for (let p = 0; p < b.length - 1; p++) for (let v = 0; v < r.length; v++) for (let S = 0; S < d.length; S++) x(S, v) || E.push({
          el: [
            g[`${S},${v},${p}`],
            g[`${S},${v},${p + 1}`]
          ],
          floor: p
        });
        for (const { el: [p, v], floor: S } of E) {
          if (u <= 1) {
            ue.add(I.length), Ce.set(I.length, S), I.push([
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
            ]), ue.add(I.length), Ce.set(I.length, S), I.push([
              A,
              q
            ]), A = q;
          }
          ue.add(I.length), Ce.set(I.length, S), I.push([
            A,
            v
          ]);
        }
        Je = /* @__PURE__ */ new Map();
        const F = [];
        for (let p = 1; p < b.length; p++) for (let v = 0; v < r.length; v++) for (let S = 0; S < d.length - 1; S++) F.push({
          el: [
            g[`${S},${v},${p}`],
            g[`${S + 1},${v},${p}`]
          ],
          floor: p - 1,
          dir: "x",
          bay: S
        });
        for (let p = 1; p < b.length; p++) for (let v = 0; v < d.length; v++) for (let S = 0; S < r.length - 1; S++) F.push({
          el: [
            g[`${v},${S},${p}`],
            g[`${v},${S + 1},${p}`]
          ],
          floor: p - 1,
          dir: "y",
          bay: S
        });
        for (const { el: [p, v], floor: S, dir: L, bay: N } of F) {
          const A = f[p], C = f[v];
          let P = p;
          for (let te = 1; te < l; te++) {
            const Z = te / l, re = f.length;
            f.push([
              A[0] + (C[0] - A[0]) * Z,
              A[1] + (C[1] - A[1]) * Z,
              A[2] + (C[2] - A[2]) * Z
            ]);
            const se = I.length;
            ze.add(se), Ce.set(se, S), Je.set(se, {
              dir: L,
              bay: N
            }), I.push([
              P,
              re
            ]), P = re;
          }
          const q = I.length;
          ze.add(q), Ce.set(q, S), Je.set(q, {
            dir: L,
            bay: N
          }), I.push([
            P,
            v
          ]);
        }
        if (ot = /* @__PURE__ */ new Set(), _e && et > 0) {
          const p = (v, S, L) => {
            for (let A = 0; A < f.length; A++) if (Math.abs(f[A][0] - v) < 1e-6 && Math.abs(f[A][1] - S) < 1e-6 && Math.abs(f[A][2] - L) < 1e-6) return A;
            const N = f.length;
            return f.push([
              v,
              S,
              L
            ]), N;
          };
          for (let v = 1; v < b.length; v++) if (dt === "x") for (let S = 0; S < r.length - 1; S++) {
            const L = r[S], N = r[S + 1];
            for (let A = 1; A <= et; A++) {
              const C = L + A / (et + 1) * (N - L), P = [];
              for (let q = 0; q < d.length; q++) P.push(p(d[q], C, b[v]));
              for (let q = 0; q < d.length - 1; q++) {
                const te = I.length;
                ot.add(te), ze.add(te), Ce.set(te, v - 1), Je.set(te, {
                  dir: "x",
                  bay: q
                }), I.push([
                  P[q],
                  P[q + 1]
                ]);
              }
            }
          }
          else for (let S = 0; S < d.length - 1; S++) {
            const L = d[S], N = d[S + 1];
            for (let A = 1; A <= et; A++) {
              const C = L + A / (et + 1) * (N - L), P = [];
              for (let q = 0; q < r.length; q++) P.push(p(C, r[q], b[v]));
              for (let q = 0; q < r.length - 1; q++) {
                const te = I.length;
                ot.add(te), ze.add(te), Ce.set(te, v - 1), Je.set(te, {
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
          const v = b.length - 1, S = p.floors.includes(-1) ? Array.from({
            length: v
          }, (L, N) => N) : p.floors.filter((L) => L < v);
          for (const L of S) {
            let N, A, C, P;
            p.dir === "x" ? (N = p.bay, C = p.bay + 1, A = p.axisIdx, P = p.axisIdx) : (N = p.axisIdx, C = p.axisIdx, A = p.bay, P = p.bay + 1);
            const q = g[`${N},${A},${L}`], te = g[`${N},${A},${L + 1}`];
            let Z, re;
            if (p.dir === "x" ? (Z = g[`${C},${P},${L}`], re = g[`${C},${P},${L + 1}`]) : (Z = g[`${C},${P},${L}`], re = g[`${C},${P},${L + 1}`]), q === void 0 || Z === void 0 || te === void 0 || re === void 0) continue;
            const se = Re, X = we, ce = f[q], Me = f[Z], Fe = f[te], Pe = f[re], H = [];
            for (let de = 0; de <= X; de++) {
              const ie = [], Q = de / X;
              for (let J = 0; J <= se; J++) {
                const pe = J / se, Ee = (1 - Q) * ((1 - pe) * ce[0] + pe * Me[0]) + Q * ((1 - pe) * Fe[0] + pe * Pe[0]), oe = (1 - Q) * ((1 - pe) * ce[1] + pe * Me[1]) + Q * ((1 - pe) * Fe[1] + pe * Pe[1]), Le = (1 - Q) * ((1 - pe) * ce[2] + pe * Me[2]) + Q * ((1 - pe) * Fe[2] + pe * Pe[2]);
                de === 0 && J === 0 ? ie.push(q) : de === 0 && J === se ? ie.push(Z) : de === X && J === 0 ? ie.push(te) : de === X && J === se ? ie.push(re) : (ie.push(f.length), f.push([
                  Ee,
                  oe,
                  Le
                ]));
              }
              H.push(ie);
            }
            for (let de = 0; de < X; de++) for (let ie = 0; ie < se; ie++) {
              const Q = H[de][ie], J = H[de][ie + 1], pe = H[de + 1][ie + 1], Ee = H[de + 1][ie], oe = I.length;
              He.add(oe), Ce.set(oe, L), I.push([
                Q,
                J,
                pe,
                Ee
              ]);
            }
            if (L === 0) for (let de = 0; de <= se; de++) {
              const ie = H[0][de];
              ie >= M && y.set(ie, [
                ...m
              ]);
            }
          }
        }
        if (Tt = /* @__PURE__ */ new Set(), ut) {
          const p = l, v = l, S = /* @__PURE__ */ new Map(), L = (N, A, C) => `${Math.round(N * 1e4)},${Math.round(A * 1e4)},${Math.round(C * 1e4)}`;
          for (let N = 0; N < f.length; N++) S.set(L(f[N][0], f[N][1], f[N][2]), N);
          for (let N = 1; N < b.length; N++) {
            const A = b[N];
            for (let C = 0; C < d.length - 1; C++) for (let P = 0; P < r.length - 1; P++) {
              const q = d[C], te = d[C + 1], Z = r[P], re = r[P + 1], se = [];
              for (let X = 0; X <= v; X++) {
                const ce = [];
                for (let Me = 0; Me <= p; Me++) {
                  const Fe = q + Me / p * (te - q), Pe = Z + X / v * (re - Z);
                  if (X === 0 && Me === 0) ce.push(g[`${C},${P},${N}`]);
                  else if (X === 0 && Me === p) ce.push(g[`${C + 1},${P},${N}`]);
                  else if (X === v && Me === 0) ce.push(g[`${C},${P + 1},${N}`]);
                  else if (X === v && Me === p) ce.push(g[`${C + 1},${P + 1},${N}`]);
                  else {
                    const H = L(Fe, Pe, A), de = S.get(H);
                    if (de !== void 0) ce.push(de);
                    else {
                      const ie = f.length;
                      f.push([
                        Fe,
                        Pe,
                        A
                      ]), S.set(H, ie), ce.push(ie);
                    }
                  }
                }
                se.push(ce);
              }
              for (let X = 0; X < v; X++) for (let ce = 0; ce < p; ce++) {
                const Me = se[X][ce], Fe = se[X][ce + 1], Pe = se[X + 1][ce + 1], H = se[X + 1][ce], de = I.length;
                Tt.add(de), Ce.set(de, N - 1), I.push([
                  Me,
                  Fe,
                  Pe,
                  H
                ]);
              }
            }
          }
        }
        return t.nodes.val = f, t.elements.val = I, t.nodeInputs && (t.nodeInputs.val = {
          supports: y
        }), me = [
          ...d
        ], qe = [
          ...r
        ], Ue = b[b.length - 1] || 0, setTimeout(() => {
          yt(), Po(d, r), vn(), yn();
        }, 50), Ge(), {
          nodes: f.length,
          elements: I.length,
          nJointNodes: M
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
            const M = e / s * g;
            x.push(a.length), a.push([
              M,
              f,
              u(M)
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
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        if (!e) {
          console.log("Ejemplos: truss, beams, 3d, portico, edificio, galpon");
          return;
        }
        switch (e) {
          case "truss": {
            We.clear(), Ke("truss"), Wn();
            break;
          }
          case "beams": {
            We.clear(), Ke("beams"), Yn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            We.clear(), Ke("3d"), Gn();
            break;
          }
          case "portico": {
            Ke("frame"), $e();
            break;
          }
          case "edificio": {
            Ke("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, je = [], ut = false, _e = false, $e();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ke("edificio"), Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, je = [], _e = true, et = 2;
            const o = ee.reduce((l, s) => l + s, 0) / ee.length, n = ae.reduce((l, s) => l + s, 0) / ae.length;
            dt = o >= n ? "y" : "x", ut = true, $t = 0.08, $e();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            We.clear();
            const o = Math.round(((_a2 = K.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2), l = Math.round(((_c = K.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = K.hPiso) == null ? void 0 : _d.val) ?? 3.5, c = Array(o).fill(6), a = Array(n).fill(5), i = Array(l).fill(s);
            We.refgrid(c, a, i), We.build({
              col: "40x40",
              viga: "30x50",
              braces: "perimeter",
              fc: 280
            });
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ke("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, _e = false;
            const o = Math.round(((_e2 = K.nVanosX) == null ? void 0 : _e2.val) ?? 2), n = Math.round(((_f = K.nVanosY) == null ? void 0 : _f.val) ?? 2);
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
            Ke("edificio"), Te.colMat = 2, Te.vigaMat = 0, _e = false;
            const o = Math.round(((_g = K.nVanosX) == null ? void 0 : _g.val) ?? 2), n = Math.round(((_h = K.nVanosY) == null ? void 0 : _h.val) ?? 2);
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
            Ke("edificio"), K.nPisos && (K.nPisos.val = 1), K.hPiso && (K.hPiso.val = 4.5), K.nVanosX && (K.nVanosX.val = 3), K.nVanosY && (K.nVanosY.val = 2), K.nSubViga && (K.nSubViga.val = 3), ee = [
              6,
              6,
              6
            ], ae = [
              5,
              5
            ], Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, je = [], _e = true, et = 2, dt = ee[0] >= ae[0] ? "y" : "x", ut = true, $t = 0.08, Pt = 3, Nt = 3, $e();
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
            We.clear(), Ke("placa-3q"), Jn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            We.clear(), Ke("placa-q4"), Vn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            We.clear(), Ke("losa-rect"), Xn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            We.clear(), Ke("losa-plana"), Kn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            We.clear(), Ke("viga-alta"), Un();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            We.clear(), Ke("muro-contencion"), Zn();
            break;
          }
          case "zapata":
          case "footing": {
            We.clear(), Ke("zapata"), Qn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            We.clear(), Ke("placa-orificios"), es();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            We.clear(), Ke("col-placa"), ts();
            break;
          }
          case "talud":
          case "slope": {
            We.clear(), Ke("talud"), os();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            We.clear(), Ke("eiffel"), xs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            We.clear(), Ke("arco"), vs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            We.clear(), Ke("puente"), ys();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            We.clear(), Ke("twisted"), $s();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            We.clear(), Ke("burj"), ws();
            break;
          }
          case "opera":
          case "sydney-opera": {
            We.clear(), Ke("opera"), Ms();
            break;
          }
          case "diagrid":
          case "gherkin": {
            We.clear(), Ke("diagrid"), Ss();
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
        const M = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((E, F) => {
          (E.x < 1e-10 || E.x > e - 1e-10 || E.y < 1e-10 || E.y > o - 1e-10) && M.set(F, [
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
            M.has(y) || I.set(y, [
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
          supports: M,
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
        K[e] ? (K[e].val = o, console.log(`${e} = ${o}`), Gt(), $e()) : tt[e] ? (tt[e].val = o, console.log(`${e} = ${o}`), Gt(), $e()) : console.error(`Par\xE1metro "${e}" no encontrado. Disponibles: ${Object.keys({
          ...K,
          ...tt
        }).join(", ")}`);
      },
      get(e) {
        if (!e) {
          const o = {};
          for (const l in K) o[l] = K[l].val;
          for (const l in tt) o[l] = tt[l].val;
          o.plateTheory = pt, o.supportType = vt;
          const n = Ko()[z];
          return n && n[vt] && (o.supportLabel = n[vt].label), console.table(o), o;
        }
        if (K[e]) return K[e].val;
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
      z = e, Ts.val = true, vt = 0, Ie && mn(), K = {};
      const o = Dn()[e];
      if (o) for (const l of o) K[l.key] = {
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
        const l = Math.round(((_a2 = K.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ee = Array(l).fill(k.defaultSpan), ae = Array(s).fill(k.defaultSpan * 0.8);
      }
      Gt(), setTimeout(() => {
        Hs(), $e();
      }, 50);
    }
    function W(e) {
      var _a2, _b;
      return ((_a2 = K[e]) == null ? void 0 : _a2.val) ?? ((_b = tt[e]) == null ? void 0 : _b.val) ?? 0;
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
          const o = Math.round(W("nVanos")), n = W("spanV"), l = Math.round(W("nPisos")), s = W("hPiso");
          We.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(W("nPisos")), n = W("hPiso"), l = W("Lvix") || 0, s = W("Lvdx") || 0, c = W("Lviy") || 0, a = W("Lvdy") || 0, i = Math.max(1, Math.round(W("nSubViga") || 3)), u = Math.max(1, Math.round(W("nSubCol") || 1));
          We.building([
            ...ee
          ], [
            ...ae
          ], Array(o).fill(n), i, l, s, c, a, u);
          break;
        }
        case "galpon":
          We.galpon(W("span"), W("length"), W("height"), W("archRise"), Math.round(W("xDiv")), Math.round(W("yDiv")));
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
        if (V.size > 0 || j.size > 0 || D) {
          const o = t.elements.val, n = o.filter((l, s) => !(V.has(s) || j.has(s) || D && !G.has(s)));
          n.length !== o.length && (t.elements.val = n);
        }
        setTimeout(() => {
          oo(), bn();
        }, 30);
      }
    }
    function Wn() {
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
    function Yn() {
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
    function Gn() {
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
        const M = c[f], I = c[g];
        let E = f;
        for (let F = 1; F < s; F++) {
          const y = F / s, m = i.length;
          i.push([
            M[0] + (I[0] - M[0]) * y,
            M[1] + (I[1] - M[1]) * y,
            M[2] + (I[2] - M[2]) * y
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
    function As() {
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
    function Jn() {
      const e = W("Lx") || 15, o = W("Ly") || 10, n = W("meshSize") || 0.5, l = W("q") || -3, s = W("t") || 1, c = W("E") || 3e7, a = W("nu") || 0.3, i = c / (2 * (1 + a)), u = pt === 1 ? "Membrana" : pt === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: r, boundaryIndices: b } = eo({
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
      ])), f = new Map(d.map((g, M) => [
        M,
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
        elasticities: new Map(r.map((g, M) => [
          M,
          c
        ])),
        elasticitiesOrthogonal: new Map(r.map((g, M) => [
          M,
          c
        ])),
        thicknesses: new Map(r.map((g, M) => [
          M,
          s
        ])),
        poissonsRatios: new Map(r.map((g, M) => [
          M,
          a
        ])),
        shearModuli: new Map(r.map((g, M) => [
          M,
          i
        ]))
      });
      try {
        const g = Ht(d, r, t.nodeInputs.val, t.elementInputs.val);
        g && t.deformOutputs && (t.deformOutputs.val = g);
        const M = Ao(d, r, t.elementInputs.val, g);
        M && t.analyzeOutputs && (t.analyzeOutputs.val = M), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${r.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Vn() {
      const e = W("Lx") || 10, o = W("Ly") || 10, n = Math.round(W("nx") || 16), l = Math.round(W("ny") || 16), s = W("t") || 0.2, c = W("q") || -10, a = W("E") || 3e7, i = W("nu") || 0.3, u = vt === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0;
      return We.plateQ4(e, o, n, l, u, c, s, a, i, r);
    }
    function Xn() {
      const e = W("a") || 6, o = W("b") || 4, n = Math.round(W("nx") || 12), l = Math.round(W("ny") || 8), s = W("t") || 0.1, c = W("q") || -10, a = W("E") || 35e6, i = W("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0, r = We.plateQ4(e, o, n, l, "simply-supported", c, s, a, i, d), b = a * s * s * s / (12 * (1 - i * i));
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
      const e = W("t") || 0.2, o = W("q") || -10, n = W("E") || 35e6, l = W("nu") || 0.2, s = W("meshSize") || 0.6, c = [
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
      const g = [], M = /* @__PURE__ */ new Set();
      for (const A of d) for (const C of r) {
        let P = 1 / 0, q = 0;
        for (let te = 0; te < f.length; te++) {
          const Z = Math.hypot(f[te][0] - A, f[te][1] - C);
          Z < P && (P = Z, q = te);
        }
        M.has(q) || (M.add(q), g.push({
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
      ][E]}]: ${i}\xD7${u}m, ${b}\xD7${$} elem, ${M.size} columnas`);
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
      const S = /* @__PURE__ */ new Map();
      y.nodeResults.forEach((A, C) => {
        S.set(C, [
          0,
          0,
          A.w,
          A.bx,
          A.by,
          0
        ]);
      }), t.deformOutputs && (t.deformOutputs.val = {
        deformations: S
      });
      const L = /* @__PURE__ */ new Map();
      for (const A of M) L.set(A, [
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
        y.elementResults.forEach((q, te) => {
          A.set(te, [
            q.Mxx,
            q.Mxx,
            q.Mxx
          ]), C.set(te, [
            q.Myy,
            q.Myy,
            q.Myy
          ]), P.set(te, [
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
      const f = (e - i) / 2, g = f + i, M = [];
      for (let m = 0; m < $.length; m++) if (Math.abs($[m][1] - o) < 1e-6) {
        const p = $[m][0];
        p >= f - 1e-6 && p <= g + 1e-6 && M.push(m);
      }
      const I = a * i / Math.max(M.length, 1), E = /* @__PURE__ */ new Map();
      for (const m of M) E.set(m, [
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
        let S = 0;
        m && m.deformations && m.deformations.forEach((L) => {
          const N = Math.sqrt(L[0] * L[0] + L[1] * L[1] + L[2] * L[2]);
          S = Math.max(S, N);
        }), console.log(`Viga Alta: ${$.length} nodos, ${r.length} triangulos`), console.log(`  L=${e}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${S.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Zn() {
      const e = W("H") || 4, o = W("B") || 3, n = W("tw") || 0.3, l = W("tb") || 0.4, s = W("meshSize") || 0.2, c = W("E") || 25e6, a = W("nu") || 0.2, i = c / (2 * (1 + a)), u = W("gamma") || 18, d = W("Ka") || 0.33, r = W("Es") || 5e4, b = W("nus") || 0.3, $ = r / (2 * (1 + b)), w = W("kn") || 1e6, x = W("ks") || 1e4, f = W("gammaW") || 9.81, g = W("Hw") || 3.5, M = W("qs") || 0, I = vt, E = o * 0.3, F = o * 0.7, y = [
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
      let m = [], p = [], v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), L;
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
          const te = m[q][0], Z = m[q][1];
          Math.abs(te - n) < s * 0.6 && Z >= l - 1e-6 && P.push({
            idx: q,
            y: Z
          });
        }
        P.sort((q, te) => q.y - te.y);
        for (let q = 0; q < P.length; q++) {
          const { idx: te, y: Z } = P[q], re = l + e - Z, se = d * u * re + d * M;
          let X = s;
          q > 0 && q < P.length - 1 ? X = (P[q + 1].y - P[q - 1].y) / 2 : q === 0 && P.length > 1 ? X = (P[1].y - P[0].y) / 2 : q === P.length - 1 && P.length > 1 && (X = (P[q].y - P[q - 1].y) / 2);
          const ce = se * X;
          Math.abs(ce) > 1e-10 && S.set(te, [
            ce,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(p.map((q, te) => [
            te,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((q, te) => [
            te,
            c
          ])),
          thicknesses: new Map(p.map((q, te) => [
            te,
            n
          ])),
          poissonsRatios: new Map(p.map((q, te) => [
            te,
            a
          ])),
          shearModuli: new Map(p.map((q, te) => [
            te,
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
          ], te = Math.max(3, Math.ceil((P - l) / s)), Z = [];
          for (let oe = 0; oe <= te; oe++) Z.push([
            n,
            l + oe * (P - l) / te,
            0
          ]);
          const re = eo({
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
          m = re.nodes, p = re.elements;
          const se = s * 0.4, X = [];
          for (let oe = 0; oe < m.length; oe++) {
            const Le = m[oe][0], De = m[oe][1];
            Math.abs(Le - n) < se && De >= l - se && X.push(oe);
          }
          X.sort((oe, Le) => m[oe][1] - m[Le][1]);
          const ce = [
            X[0]
          ];
          for (let oe = 1; oe < X.length; oe++) {
            const Le = m[X[oe]][1] - m[ce[ce.length - 1]][1];
            Math.abs(Le) > s * 0.05 && ce.push(X[oe]);
          }
          X.length = 0, X.push(...ce);
          const Me = /* @__PURE__ */ new Map();
          for (const oe of X) {
            const Le = m.length;
            m.push([
              m[oe][0],
              m[oe][1],
              m[oe][2]
            ]), Me.set(oe, Le);
          }
          const Fe = p.length, Pe = [];
          for (let oe = 0; oe < Fe; oe++) {
            const Le = p[oe], De = (m[Le[0]][0] + m[Le[1]][0] + m[Le[2]][0]) / 3, lt = (m[Le[0]][1] + m[Le[1]][1] + m[Le[2]][1]) / 3, ht = De >= -E && De <= F && lt >= 0 && lt <= l, ko = De >= 0 && De <= n && lt >= l && lt <= l + e, ro = ht || ko;
            if (Pe.push(!ro), !ro) for (let Kt = 0; Kt < Le.length; Kt++) {
              const Zt = Me.get(Le[Kt]);
              Zt !== void 0 && (Le[Kt] = Zt);
            }
          }
          const H = p.length;
          for (let oe = 0; oe < X.length - 1; oe++) {
            const Le = X[oe], De = X[oe + 1], lt = Me.get(Le), ht = Me.get(De);
            p.push([
              De,
              Le,
              lt,
              ht
            ]);
          }
          const de = p.length - H, ie = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let oe = 0; oe < Fe; oe++) Pe[oe] ? (ie.set(oe, r), Q.set(oe, r), pe.set(oe, b), Ee.set(oe, $), J.set(oe, 1)) : (ie.set(oe, c), Q.set(oe, c), pe.set(oe, a), Ee.set(oe, i), J.set(oe, 1));
          for (let oe = H; oe < p.length; oe++) ie.set(oe, w), Q.set(oe, 0), pe.set(oe, 0), Ee.set(oe, x), J.set(oe, 0);
          L = {
            elasticities: ie,
            elasticitiesOrthogonal: Q,
            thicknesses: J,
            poissonsRatios: pe,
            shearModuli: Ee
          };
          for (let oe = 0; oe < m.length; oe++) {
            const Le = m[oe][0], De = m[oe][1];
            Math.abs(De) < 1e-6 ? v.set(oe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Le - C) < s * 0.1 && v.set(oe, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let oe = 0; oe < Fe; oe++) {
            if (!Pe[oe]) continue;
            const Le = p[oe], De = m[Le[0]], lt = m[Le[1]], ht = m[Le[2]], ko = Math.abs((lt[0] - De[0]) * (ht[1] - De[1]) - (ht[0] - De[0]) * (lt[1] - De[1])) / 2, ro = -u * ko / 3;
            for (const Kt of Le) {
              const Zt = S.get(Kt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Zt[1] += ro, S.set(Kt, Zt);
            }
          }
          if (M > 0) {
            const oe = [];
            for (let Le = 0; Le < m.length; Le++) {
              const De = m[Le][0], lt = m[Le][1];
              Math.abs(lt - P) < s * 0.1 && De > n - 1e-6 && oe.push({
                idx: Le,
                x: De
              });
            }
            oe.sort((Le, De) => Le.x - De.x);
            for (let Le = 0; Le < oe.length; Le++) {
              let De = s;
              Le > 0 && Le < oe.length - 1 ? De = (oe[Le + 1].x - oe[Le - 1].x) / 2 : Le === 0 && oe.length > 1 ? De = (oe[1].x - oe[0].x) / 2 : Le === oe.length - 1 && oe.length > 1 && (De = (oe[Le].x - oe[Le - 1].x) / 2);
              const lt = -M * De, ht = S.get(oe[Le].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ht[1] += lt, S.set(oe[Le].idx, ht);
            }
          }
          console.log(`  Interfaz Goodman: ${X.length} nodos interfaz, ${de} elem interfaz, kn=${w}, ks=${x}`);
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
          ], te = [
            [
              n,
              l,
              0
            ]
          ], Z = eo({
            points: [
              ...q,
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
          m = Z.nodes, p = Z.elements;
          const re = (H) => {
            const de = (m[H[0]][0] + m[H[1]][0] + m[H[2]][0]) / 3, ie = (m[H[0]][1] + m[H[1]][1] + m[H[2]][1]) / 3, Q = de >= -E && de <= F && ie >= 0 && ie <= l, J = de >= 0 && de <= n && ie >= l && ie <= l + e;
            return Q || J;
          }, se = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), Pe = [];
          for (let H = 0; H < p.length; H++) {
            const de = re(p[H]);
            Pe.push(!de), de ? (se.set(H, c), X.set(H, c), Me.set(H, a), Fe.set(H, i), ce.set(H, 1)) : (se.set(H, r), X.set(H, r), Me.set(H, b), Fe.set(H, $), ce.set(H, 1));
          }
          L = {
            elasticities: se,
            elasticitiesOrthogonal: X,
            thicknesses: ce,
            poissonsRatios: Me,
            shearModuli: Fe
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
            ]) : Math.abs(de - C) < s * 0.1 && v.set(H, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let H = 0; H < p.length; H++) {
            if (!Pe[H]) continue;
            const de = p[H], ie = m[de[0]], Q = m[de[1]], J = m[de[2]], pe = Math.abs((Q[0] - ie[0]) * (J[1] - ie[1]) - (J[0] - ie[0]) * (Q[1] - ie[1])) / 2, Ee = -u * pe / 3;
            for (const oe of de) {
              const Le = S.get(oe) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Le[1] += Ee, S.set(oe, Le);
            }
          }
          if (M > 0) {
            const H = [];
            for (let de = 0; de < m.length; de++) {
              const ie = m[de][0], Q = m[de][1];
              Math.abs(Q - P) < s * 0.1 && ie > n - 1e-6 && H.push({
                idx: de,
                x: ie
              });
            }
            H.sort((de, ie) => de.x - ie.x);
            for (let de = 0; de < H.length; de++) {
              let ie = s;
              de > 0 && de < H.length - 1 ? ie = (H[de + 1].x - H[de - 1].x) / 2 : de === 0 && H.length > 1 ? ie = (H[1].x - H[0].x) / 2 : de === H.length - 1 && H.length > 1 && (ie = (H[de].x - H[de - 1].x) / 2);
              const Q = -M * ie, J = S.get(H[de].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              J[1] += Q, S.set(H[de].idx, J);
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
        for (let re = 0; re < m.length; re++) Math.abs(m[re][1]) < 1e-6 && v.set(re, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + e, q = Math.min(g, e), te = P - q, Z = [];
        for (let re = 0; re < m.length; re++) {
          const se = m[re][0], X = m[re][1];
          Math.abs(se - n) < s * 0.6 && X >= l - 1e-6 && Z.push({
            idx: re,
            y: X
          });
        }
        Z.sort((re, se) => re.y - se.y);
        for (let re = 0; re < Z.length; re++) {
          const { idx: se, y: X } = Z[re], ce = Math.max(0, P - X);
          if (ce <= 0 || X < te - 1e-6) continue;
          const Me = Math.min(ce, q), Fe = f * Me;
          let Pe = s;
          re > 0 && re < Z.length - 1 ? Pe = (Z[re + 1].y - Z[re - 1].y) / 2 : re === 0 && Z.length > 1 ? Pe = (Z[1].y - Z[0].y) / 2 : re === Z.length - 1 && Z.length > 1 && (Pe = (Z[re].y - Z[re - 1].y) / 2);
          const H = Fe * Pe;
          Math.abs(H) > 1e-10 && S.set(se, [
            H,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(p.map((re, se) => [
            se,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((re, se) => [
            se,
            c
          ])),
          thicknesses: new Map(p.map((re, se) => [
            se,
            n
          ])),
          poissonsRatios: new Map(p.map((re, se) => [
            se,
            a
          ])),
          shearModuli: new Map(p.map((re, se) => [
            se,
            i
          ]))
        };
      }
      const N = {
        supports: v,
        loads: S
      }, A = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const C = Ht(m, p, N, L), P = p.filter((ce) => ce.length === 3), q = {};
        for (const ce of Object.keys(L)) {
          const Me = L[ce];
          if (Me && Me instanceof Map) {
            const Fe = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let H = 0; H < p.length; H++) p[H].length === 3 && (Me.has(H) && Fe.set(Pe, Me.get(H)), Pe++);
            q[ce] = Fe;
          }
        }
        const te = Ao(m, P, q, C), Z = m.map((ce) => [
          ce[0],
          0,
          ce[1]
        ]);
        if (t.nodes.val = Z, t.elements.val = P, C && C.deformations) {
          const ce = /* @__PURE__ */ new Map();
          C.deformations.forEach((Me, Fe) => {
            ce.set(Fe, [
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
        const se = /* @__PURE__ */ new Map();
        S.forEach((ce, Me) => se.set(Me, [
          ce[0],
          ce[2],
          ce[1],
          ce[3],
          ce[5],
          ce[4]
        ])), t.nodeInputs && (t.nodeInputs.val = {
          supports: re,
          loads: se
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let X = 0;
        C && C.deformations && C.deformations.forEach((ce) => {
          const Me = Math.sqrt(ce[0] * ce[0] + ce[1] * ce[1] + ce[2] * ce[2]);
          X = Math.max(X, Me);
        }), console.log(`Muro Contencion [${A[I]}]: ${m.length} nodos, ${p.length} triangulos`), console.log(`  H=${e}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${M}`), I === 1 && console.log(`  Es=${r}, nus=${b}`), I === 2 && console.log(`  Es=${r}, nus=${b}, kn=${w}, ks=${x}`), I === 3 && console.log(`  gammaW=${f}, Hw=${g}`), console.log(`  max|u| = ${X.toExponential(4)}`);
      } catch (C) {
        console.warn("Muro Contencion failed:", C.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function Qn() {
      const e = W("Lx") || 2, o = W("Ly") || 2, n = W("t") || 0.5, l = W("colA") || 0.4, s = W("colH") || 1.5, c = Math.round(W("nx") || 8), a = Math.round(W("ny") || 8), i = W("E") || 25e6, u = W("nu") || 0.2, d = W("P") || -500, r = W("Mx") || 0, b = W("My") || 0, $ = W("ks") || 2e4, w = e / c, x = o / a, f = e / 2, g = o / 2, M = l / 2, I = [];
      for (let v = 0; v <= a; v++) for (let S = 0; S <= c; S++) {
        const L = v * (c + 1) + S;
        let N = w, A = x;
        (S === 0 || S === c) && (N = w / 2), (v === 0 || v === a) && (A = x / 2), I.push({
          node: L,
          dof: 0,
          k: $ * N * A
        });
      }
      let E = 0;
      for (let v = 0; v <= a; v++) for (let S = 0; S <= c; S++) Math.abs(S * w - f) <= M + 1e-6 && Math.abs(v * x - g) <= M + 1e-6 && E++;
      const F = d / Math.max(E, 1), y = [];
      for (let v = 0; v <= a; v++) for (let S = 0; S <= c; S++) {
        const L = S * w, N = v * x;
        Math.abs(L - f) <= M + 1e-6 && Math.abs(N - g) <= M + 1e-6 && y.push({
          node: v * (c + 1) + S,
          dof: 0,
          value: F
        });
      }
      if (Math.abs(r) > 1e-6) {
        const v = M > 1e-6 ? M : x, S = r / v;
        for (let L = 0; L <= a; L++) for (let N = 0; N <= c; N++) {
          const A = N * w, C = L * x;
          if (Math.abs(A - f) <= M + 1e-6 && Math.abs(C - g) <= M + 1e-6) {
            const P = C - g;
            if (Math.abs(P) > 1e-6) {
              const q = P > 0 ? 1 : -1;
              y.push({
                node: L * (c + 1) + N,
                dof: 0,
                value: q * S / E * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const v = M > 1e-6 ? M : w, S = b / v;
        for (let L = 0; L <= a; L++) for (let N = 0; N <= c; N++) {
          const A = N * w, C = L * x;
          if (Math.abs(A - f) <= M + 1e-6 && Math.abs(C - g) <= M + 1e-6) {
            const P = A - f;
            if (Math.abs(P) > 1e-6) {
              const q = P > 0 ? 1 : -1;
              y.push({
                node: L * (c + 1) + N,
                dof: 0,
                value: q * S / E * 2
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
        const S = v.nodeResults.map((te) => [
          te.x,
          te.y,
          0
        ]), L = S.length;
        S.push([
          f - M,
          g - M,
          0
        ]), S.push([
          f + M,
          g - M,
          0
        ]), S.push([
          f + M,
          g + M,
          0
        ]), S.push([
          f - M,
          g + M,
          0
        ]), S.push([
          f - M,
          g - M,
          s
        ]), S.push([
          f + M,
          g - M,
          s
        ]), S.push([
          f + M,
          g + M,
          s
        ]), S.push([
          f - M,
          g + M,
          s
        ]);
        const N = v.elementResults.map((te) => [
          ...te.nodes
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
        ]), t.nodes.val = S, t.elements.val = N;
        const A = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((te, Z) => {
          A.set(Z, [
            0,
            0,
            te.w,
            te.bx,
            te.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: A
        });
        const C = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((te, Z) => {
          const re = te.x, se = te.y;
          (re < 1e-6 || re > e - 1e-6 || se < 1e-6 || se > o - 1e-6) && C.set(Z, [
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
          const te = v.elementResults.length, Z = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
          v.elementResults.forEach((X, ce) => {
            Z.set(ce, [
              X.Mxx,
              X.Mxx,
              X.Mxx
            ]), re.set(ce, [
              X.Myy,
              X.Myy,
              X.Myy
            ]), se.set(ce, [
              X.Mxy,
              X.Mxy,
              X.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: Z,
            bendingYY: re,
            bendingXY: se
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
      const e = W("Lx") || 0.4, o = W("Ly") || 0.4, n = W("t") || 0.025, l = W("dBolt") || 0.022, s = W("sx") || 0.28, c = W("sy") || 0.28, a = W("colA") || 0.2, i = W("meshSize") || 8e-3, u = W("E") || 2e8, d = W("nu") || 0.3, r = u / (2 * (1 + d)), b = W("P") || -200, $ = Math.round(W("nBolts") || 4), w = e / 2, x = o / 2, f = l / 2, g = a / 2, M = [];
      $ >= 4 && (M.push([
        w - s / 2,
        x - c / 2
      ]), M.push([
        w + s / 2,
        x - c / 2
      ]), M.push([
        w + s / 2,
        x + c / 2
      ]), M.push([
        w - s / 2,
        x + c / 2
      ])), $ >= 6 && (M.push([
        w,
        x - c / 2
      ]), M.push([
        w,
        x + c / 2
      ])), $ >= 8 && (M.push([
        w - s / 2,
        x
      ]), M.push([
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
        for (const [P, q] of M) if ((A - P) * (A - P) + (C - q) * (C - q) < f * f) return true;
        return false;
      }, y = E.filter((A) => {
        const C = (I[A[0]][0] + I[A[1]][0] + I[A[2]][0]) / 3, P = (I[A[0]][1] + I[A[1]][1] + I[A[2]][1]) / 3;
        return !F(C, P);
      }), m = I, p = /* @__PURE__ */ new Map();
      for (let A = 0; A < m.length; A++) {
        const C = m[A][0], P = m[A][1];
        for (const [q, te] of M) {
          const Z = Math.sqrt((C - q) * (C - q) + (P - te) * (P - te));
          Z >= f * 0.7 && Z <= f * 1.5 && p.set(A, [
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
      let S = 0;
      for (let A = 0; A < m.length; A++) {
        const C = m[A][0], P = m[A][1];
        Math.abs(C - w) <= g && Math.abs(P - x) <= g && S++;
      }
      const L = b / Math.max(S, 1);
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
          const te = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2]);
          P = Math.max(P, te);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (A) {
        console.warn("Placa Base failed:", A.message);
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function ts() {
      const e = W("colB") || 0.3, o = W("colH") || 0.3, n = W("colT") || 8e-3, l = W("colLen") || 1.5, s = W("Lx") || 0.45, c = W("Ly") || 0.45, a = W("tPlaca") || 0.025, i = W("dBolt") || 0.022, u = W("sx") || 0.32, d = W("sy") || 0.32, r = Math.round(W("nSubColV") || 6), b = Math.round(W("nSubColH") || 4), $ = Math.round(W("nSubPlaca") || 10), w = W("E") || 2e8, x = W("nu") || 0.3, f = w / (2 * (1 + x)), g = W("P") || -300, M = s / 2, I = c / 2, E = i / 2, F = e / 2, y = o / 2, m = [], p = [], v = $, S = s / v, L = c / v, N = (Q, J) => J * (v + 1) + Q;
      for (let Q = 0; Q <= v; Q++) for (let J = 0; J <= v; J++) m.push([
        J * S,
        Q * L,
        0
      ]);
      const A = [
        [
          M - u / 2,
          I - d / 2
        ],
        [
          M + u / 2,
          I - d / 2
        ],
        [
          M + u / 2,
          I + d / 2
        ],
        [
          M - u / 2,
          I + d / 2
        ]
      ], C = (Q, J) => {
        for (const [pe, Ee] of A) if ((Q - pe) * (Q - pe) + (J - Ee) * (J - Ee) < E * E) return true;
        return false;
      }, P = p.length;
      for (let Q = 0; Q < v; Q++) for (let J = 0; J < v; J++) {
        const pe = (J + 0.5) * S, Ee = (Q + 0.5) * L;
        C(pe, Ee) || p.push([
          N(J, Q),
          N(J + 1, Q),
          N(J + 1, Q + 1),
          N(J, Q + 1)
        ]);
      }
      const q = p.length - P, te = r, Z = b, re = [
        [
          M - F,
          I - y
        ],
        [
          M + F,
          I - y
        ],
        [
          M + F,
          I + y
        ],
        [
          M - F,
          I + y
        ]
      ], se = p.length, X = [
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
      ], ce = (Q, J) => {
        for (let pe = 0; pe < (v + 1) * (v + 1); pe++) if (Math.abs(m[pe][0] - Q) < S * 0.3 && Math.abs(m[pe][1] - J) < L * 0.3 && Math.abs(m[pe][2]) < 1e-6) return pe;
        return -1;
      };
      for (const [Q, J] of X) {
        const [pe, Ee] = re[Q], [oe, Le] = re[J], De = [];
        for (let lt = 0; lt <= te; lt++) {
          const ht = [], ko = lt / te * l;
          for (let ro = 0; ro <= Z; ro++) {
            const Kt = ro / Z, Zt = pe + Kt * (oe - pe), Tn = Ee + Kt * (Le - Ee);
            if (lt === 0) {
              const Qt = ce(Zt, Tn);
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
        for (let lt = 0; lt < te; lt++) for (let ht = 0; ht < Z; ht++) p.push([
          De[lt][ht],
          De[lt][ht + 1],
          De[lt + 1][ht + 1],
          De[lt + 1][ht]
        ]);
      }
      const Me = p.length - se, Fe = /* @__PURE__ */ new Map();
      for (let Q = 0; Q < (v + 1) * (v + 1); Q++) {
        const J = m[Q][0], pe = m[Q][1];
        for (const [Ee, oe] of A) {
          const Le = Math.sqrt((J - Ee) * (J - Ee) + (pe - oe) * (pe - oe));
          Le >= E * 0.5 && Le <= E * 2 && Fe.set(Q, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Pe = /* @__PURE__ */ new Map(), H = [];
      for (let Q = 0; Q < m.length; Q++) Math.abs(m[Q][2] - l) < 1e-6 && H.push(Q);
      const de = g / Math.max(H.length, 1);
      for (const Q of H) Pe.set(Q, [
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
      for (let Q = P; Q < P + q; Q++) ie.elasticities.set(Q, w), ie.poissonsRatios.set(Q, x), ie.thicknesses.set(Q, a), ie.shearModuli.set(Q, f);
      for (let Q = se; Q < se + Me; Q++) ie.elasticities.set(Q, w), ie.poissonsRatios.set(Q, x), ie.thicknesses.set(Q, n), ie.shearModuli.set(Q, f);
      console.log(`Col+Placa 3D: col ${e * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${q} Q4 placa + ${Me} Q4 columna = ${p.length} total`), console.log(`  ${m.length} nodos, P=${g} kN`);
      try {
        const Q = Ht(m, p, {
          supports: Fe,
          loads: Pe
        }, ie), J = Ao(m, p, ie, Q);
        t.nodes.val = m, t.elements.val = p, Q && t.deformOutputs && (t.deformOutputs.val = Q), t.nodeInputs && (t.nodeInputs.val = {
          supports: Fe,
          loads: Pe
        }), t.elementInputs && (t.elementInputs.val = ie), J && t.analyzeOutputs && (t.analyzeOutputs.val = J);
        let pe = 0;
        (Q == null ? void 0 : Q.deformations) && Q.deformations.forEach((Ee) => {
          const oe = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          pe = Math.max(pe, oe);
        }), console.log(`  max|u| = ${pe.toExponential(4)}`);
      } catch (Q) {
        console.warn("Col+Placa failed:", Q.message), t.nodes.val = m, t.elements.val = p, t.nodeInputs && (t.nodeInputs.val = {
          supports: Fe,
          loads: Pe
        });
      }
      setTimeout(() => yt(), 50), Ge();
    }
    function os() {
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
      }), M = f, I = [], E = /* @__PURE__ */ new Map();
      for (let y = 0; y < M.length; y++) {
        const m = M[y][0], p = M[y][1];
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
        const y = M.map((C) => [
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
        }), v = M.map((C) => [
          C[0],
          0,
          C[1]
        ]);
        t.nodes.val = v, t.elements.val = g;
        const S = /* @__PURE__ */ new Map();
        for (let C = 0; C < p.displacements.length; C++) {
          const [P, q] = p.displacements[C];
          S.set(C, [
            P,
            0,
            q,
            0,
            0,
            0
          ]);
        }
        t.deformOutputs && (t.deformOutputs.val = {
          deformations: S
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
        console.log(`Talud SRM: ${M.length} nodos, ${g.length} triangulos`), console.log(`  H=${e}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${p.fos.toFixed(3)}`), console.log(`  max|u| = ${N.toExponential(4)}`), console.log(`  max \u03B5_pl = ${A.toExponential(4)}`), p.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : p.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
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
      const o = Nn.find((l) => l.id === Y.forceId), n = qo.find((l) => l.id === Y.lengthId);
      return e / (o.toKN / (n.toM * n.toM));
    }
    function dn(e) {
      const o = Nn.find((l) => l.id === Y.forceId), n = qo.find((l) => l.id === Y.lengthId);
      return e * (o.toKN / (n.toM * n.toM));
    }
    function pn() {
      return Y.label;
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
      const c = Te.steelVigaType, a = c === 0 ? Uo() : Zo();
      if (Te.vigaMat === 0) {
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
      const n = k, l = Math.round(((_a2 = K.nPisos) == null ? void 0 : _a2.val) ?? 3), s = qs(), c = Fs(), a = ee.length || 1, i = ae.length || 1;
      for (; Te.perFloor.length < l; ) {
        const m = Te.perFloor.length > 0 ? JSON.parse(JSON.stringify(Te.perFloor[Te.perFloor.length - 1])) : wt(a, i);
        Te.perFloor.push(m);
      }
      Te.perFloor.length > l && (Te.perFloor.length = l);
      for (const m of Te.perFloor) {
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
        colMat: Te.colMat
      };
      if (mt.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        Te.colMat = m.value, $o(), $e();
      }), Te.colMat === 0) {
        const m = {
          forma: Te.colShape
        };
        mt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          Te.colShape = v.value, $o(), $e();
        });
        const p = {
          fc: +fo(Te.fc).toFixed(1)
        };
        mt.addBinding(p, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${pn()})`
        }), mt.on("change", (v) => {
          var _a3;
          ((_a3 = v.target) == null ? void 0 : _a3.key) === "fc" && (Te.fc = dn(v.value), $e());
        });
      } else if (Te.colMat === 1) {
        const m = {
          colType: Te.steelColType
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
          Te.steelColType = p.value, $o(), $e();
        });
      }
      mt.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: Te.vigaMat
      };
      if (mt.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        Te.vigaMat = m.value, $o(), $e();
      }), Te.vigaMat === 1) {
        const m = {
          vigaType: Te.steelVigaType
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
          Te.steelVigaType = p.value, $o(), $e();
        });
      }
      const r = Te.steelColType === 0 ? Uo() : Zo();
      Te.steelVigaType === 0 ? Uo() : Zo();
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
        const p = Te.perFloor[m], v = mt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (Te.colMat === 0) if (Te.colShape === 1) {
          const S = {
            dCol: +it(p.dCol).toFixed(2)
          };
          v.addBinding(S, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (L) => {
            var _a3;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "dCol" && (p.dCol = rt(L.value), $e());
          });
        } else {
          const S = {
            bCol: +it(p.bCol).toFixed(2),
            hCol: +it(p.hCol).toFixed(2)
          };
          v.addBinding(S, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), v.addBinding(S, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), v.on("change", (L) => {
            var _a3, _b;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bCol" && (p.bCol = rt(L.value), $e()), ((_b = L.target) == null ? void 0 : _b.key) === "hCol" && (p.hCol = rt(L.value), $e());
          });
        }
        else if (Te.colMat === 1) if (Te.steelColType <= 1) {
          const S = {
            col: p.colProfileIdx
          };
          v.addBinding(S, "col", {
            label: "Columna",
            options: r
          }).on("change", (L) => {
            p.colProfileIdx = L.value, $e();
          });
        } else if (Te.steelColType === 2) {
          const S = {
            bf: +it(p.colBf ?? 0.3).toFixed(3),
            h: +it(p.colHf ?? 0.3).toFixed(3),
            tf: +it(p.colTf ?? 0.02).toFixed(3),
            tw: +it(p.colTw ?? 0.012).toFixed(3)
          };
          v.addBinding(S, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), v.addBinding(S, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(S, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), v.addBinding(S, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), v.on("change", (L) => {
            var _a3, _b, _c, _d;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bf" && (p.colBf = rt(L.value), $e()), ((_b = L.target) == null ? void 0 : _b.key) === "h" && (p.colHf = rt(L.value), $e()), ((_c = L.target) == null ? void 0 : _c.key) === "tf" && (p.colTf = rt(L.value), $e()), ((_d = L.target) == null ? void 0 : _d.key) === "tw" && (p.colTw = rt(L.value), $e());
          });
        } else {
          const S = {
            bc: +it(p.colBc ?? 0.3).toFixed(3),
            hc: +it(p.colHc ?? 0.3).toFixed(3),
            t: +it(p.colT ?? 0.01).toFixed(3)
          };
          v.addBinding(S, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), v.addBinding(S, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(S, "t", {
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
          const S = {
            bc: +it(p.colBc ?? 0.3).toFixed(3),
            hc: +it(p.colHc ?? 0.3).toFixed(3),
            t: +it(p.colT ?? 0.01).toFixed(3),
            Es: +fo(p.colEs ?? 2e8).toFixed(0),
            nuS: p.colNuS ?? 0.3,
            fc: +fo(p.colFc ?? 28e3).toFixed(1),
            nuC: p.colNuC ?? 0.2
          };
          v.addBinding(S, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), v.addBinding(S, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(S, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), v.addBlade({
            view: "separator"
          });
          const L = +fo(1e8).toFixed(0), N = +fo(3e8).toFixed(0), A = Math.max(1, Math.round((N - L) / 200));
          v.addBinding(S, "Es", {
            min: L,
            max: N,
            step: A,
            label: `Es (${pn()})`
          }), v.addBinding(S, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(S, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${pn()})`
          }), v.addBinding(S, "nuC", {
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
          const S = v.addFolder({
            title: `Vigas X (${p.vigasX.length})`,
            expanded: false
          });
          ns(S, p.vigasX, "x", s, b);
        }
        if (p.vigasY.length > 0) {
          const S = v.addFolder({
            title: `Vigas Y (${p.vigasY.length})`,
            expanded: false
          });
          ns(S, p.vigasY, "y", s, b);
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
      }), M = {
        espesor: +it(Qe).toFixed(3),
        subdivH: we,
        subdivW: Re
      };
      g.addBinding(M, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), g.addBinding(M, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), g.addBinding(M, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), g.on("change", (m) => {
        var _a3, _b, _c;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Qe = rt(m.value), $e()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (we = Math.round(m.value), $e()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (Re = Math.round(m.value), $e());
      });
      const I = ee.length || 1, E = ae.length || 1, F = I + 1, y = E + 1;
      if (I > 0) {
        const m = g.addFolder({
          title: `Muros dir X (${I} vanos)`,
          expanded: false
        });
        for (let p = 0; p < I; p++) for (let v = 0; v < y; v++) {
          const S = `wx_${p}_${v}`, L = je.some((C) => C.dir === "x" && C.bay === p && C.axisIdx === v), N = {};
          N[S] = L;
          const A = `Vano X${p + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          m.addBinding(N, S, {
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
          const S = `wy_${p}_${v}`, L = je.some((C) => C.dir === "y" && C.bay === p && C.axisIdx === v), N = {};
          N[S] = L;
          const A = `Vano Y${p + 1} / Eje X${v + 1}`;
          m.addBinding(N, S, {
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
      if (fe || (fe = e.innerHTML), ye) {
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
        for (const a of n) s[a.key] = K[a.key].val;
        for (const a of n) ye.addBinding(s, a.key, {
          min: K[a.key].min,
          max: K[a.key].max,
          step: K[a.key].step,
          label: K[a.key].label
        });
        const c = ye.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const i = {
            min: K[a.key].min,
            max: K[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            K[a.key] && (K[a.key].min = i.min, K[a.key].max = i.max, K[a.key].val < i.min && (K[a.key].val = i.min), K[a.key].val > i.max && (K[a.key].val = i.max)), Gt(), $e();
          });
        }
        ye.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && K[i]) {
            if (K[i].val = a.value, z === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const u = Math.round(K.nVanosX.val), d = Math.round(K.nVanosY.val);
                for (; ee.length < u; ) ee.push(ee[ee.length - 1] ?? k.defaultSpan);
                for (ee.length > u && (ee.length = u); ae.length < d; ) ae.push(ae[ae.length - 1] ?? k.defaultSpan * 0.8);
                ae.length > d && (ae.length = d);
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
          for (let r = 0; r < ae.length; r++) d[`svy_${r + 1}`] = ae[r];
          for (let r = 0; r < ae.length; r++) u.addBinding(d, `svy_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${r + 1}`
          });
          u.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (ae[parseInt($[1]) - 1] = r.value, $e());
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
          if (K[s]) K[s].val = c, $e(), Gt();
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
          for (const c in K) s[c] = K[c].val;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && fe && (n.innerHTML = fe);
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
        const d = Object.entries(K).map(([r, b]) => `${r}=${b.val}`).join(" ");
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
          be = c, le = e.map((d) => [
            ...d
          ]), gt = 0;
          const { extent: a } = no(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let d = 0;
            for (let r = 0; r < e.length; r++) {
              const b = i[r * 6] || 0, $ = i[r * 6 + 1] || 0, w = i[r * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + $ * $ + w * w));
            }
            Ae = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const u = `${z} \u2014 ${e.length}n ${o.length}e`;
          ge.render(c, {
            title: u
          }), ge.div.style.display = "", _o(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), be = null;
      }
    }
    function mn() {
      Ie && (cancelAnimationFrame(Ie), Ie = 0), le.length > 0 && (t.nodes.val = le.map((e) => [
        ...e
      ])), ge.div.style.display = "none", be = null;
    }
    function _o() {
      var _a2;
      if (Ie && cancelAnimationFrame(Ie), !(be == null ? void 0 : be.modeShapes) || !le.length) return;
      const e = be.modeShapes[gt];
      if (!e) return;
      const o = ((_a2 = be.frequencies) == null ? void 0 : _a2[gt]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = le.length, c = t.elements.rawVal, { extent: a } = no(), i = ve.querySelector("#cad3d-modal-scale"), u = i && parseFloat(i.value) || 5;
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
      const M = new Float32Array(g.length * 6);
      function I() {
        const E = (performance.now() - l) / 1e3, F = Math.sin(2 * Math.PI * n * E) * r;
        for (let y = 0; y < s; y++) {
          const m = le[y];
          f[y * 3] = m[0] + (e[y * 6] || 0) * F, f[y * 3 + 1] = m[1] + (e[y * 6 + 1] || 0) * F, f[y * 3 + 2] = m[2] + (e[y * 6 + 2] || 0) * F;
        }
        if ($) {
          const y = $.geometry, m = y.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : y.setAttribute("position", new bo(f.slice(), 3));
        }
        if (w) {
          for (let p = 0; p < g.length; p++) {
            const [v, S] = g[p];
            M[p * 6] = f[v * 3], M[p * 6 + 1] = f[v * 3 + 1], M[p * 6 + 2] = f[v * 3 + 2], M[p * 6 + 3] = f[S * 3], M[p * 6 + 4] = f[S * 3 + 1], M[p * 6 + 5] = f[S * 3 + 2];
          }
          const y = w.geometry, m = y.getAttribute("position");
          m && m.array.length === M.length ? (m.array.set(M), m.needsUpdate = true) : y.setAttribute("position", new bo(M.slice(), 3));
        }
        if (x) {
          const y = [];
          for (const m of c) if (m.length === 3) {
            const [p, v, S] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[v * 3], f[v * 3 + 1], f[v * 3 + 2]), y.push(f[S * 3], f[S * 3 + 1], f[S * 3 + 2]);
          } else if (m.length === 4) {
            const [p, v, S, L] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[v * 3], f[v * 3 + 1], f[v * 3 + 2]), y.push(f[S * 3], f[S * 3 + 1], f[S * 3 + 2]), y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[S * 3], f[S * 3 + 1], f[S * 3 + 2]), y.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]);
          }
          if (y.length > 0) {
            const m = x.geometry, p = new Float32Array(y), v = m.getAttribute("position");
            v && v.array.length === p.length ? (v.array.set(p), v.needsUpdate = true) : m.setAttribute("position", new bo(p, 3));
          }
        }
        b.render(), Ie = requestAnimationFrame(I);
      }
      Ie = requestAnimationFrame(I);
    }
    function bn() {
      var _a2, _b, _c, _d, _e2;
      if (!t.deformOutputs || !t.analyzeOutputs || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val;
      let n = t.nodeInputs.val;
      const l = t.elementInputs.val;
      if (e.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = W("CM") ?? 0, f = W("CV") ?? 0, g = x + f, M = W("Ex") ?? 0, I = W("Ey") ?? 0;
        if (g === 0 && M === 0 && I === 0) return;
        const E = /* @__PURE__ */ new Map(), F = [];
        for (let C = 0; C < e.length; C++) n.supports.has(C) || F.push(C);
        const y = (C) => Math.round(C * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((C, P) => {
          m.add(`${y(e[P][0])},${y(e[P][1])}`);
        });
        const p = /* @__PURE__ */ new Set();
        for (const C of F) m.has(`${y(e[C][0])},${y(e[C][1])}`) && p.add(C);
        const v = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
        if (M !== 0 || I !== 0) {
          let C = -1 / 0, P = -1 / 0;
          for (const te of p) C = Math.max(C, y(e[te][0])), P = Math.max(P, y(e[te][1]));
          const q = /* @__PURE__ */ new Map();
          for (const te of p) {
            const Z = y(e[te][2]);
            q.has(Z) || q.set(Z, []), q.get(Z).push(te);
          }
          q.forEach((te) => {
            if (M !== 0) {
              const Z = /* @__PURE__ */ new Set();
              for (const re of te) if (y(e[re][0]) === C) {
                const se = y(e[re][1]);
                Z.has(se) || (Z.add(se), v.add(re));
              }
            }
            if (I !== 0) {
              const Z = /* @__PURE__ */ new Set();
              for (const re of te) if (y(e[re][1]) === P) {
                const se = y(e[re][0]);
                Z.has(se) || (Z.add(se), S.add(re));
              }
            }
          });
        }
        const L = 9.81, N = /* @__PURE__ */ new Map();
        for (let C = 0; C < o.length; C++) {
          const P = o[C], q = ((_a2 = l.densities) == null ? void 0 : _a2.get(C)) ?? 0;
          if (!(Math.abs(q) < 1e-15)) {
            if (P.length === 2) {
              const te = ((_b = l.areas) == null ? void 0 : _b.get(C)) ?? 0, Z = e[P[0]], re = e[P[1]], se = Math.sqrt((re[0] - Z[0]) ** 2 + (re[1] - Z[1]) ** 2 + (re[2] - Z[2]) ** 2), ce = -(q * te * se * L) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + ce), N.set(P[1], (N.get(P[1]) ?? 0) + ce);
            } else if (P.length >= 3) {
              const te = ((_c = l.thicknesses) == null ? void 0 : _c.get(C)) ?? 0;
              let Z = 0;
              if (P.length === 3) {
                const [X, ce, Me] = P.map((Fe) => e[Fe]);
                Z = 0.5 * Math.abs((ce[0] - X[0]) * (Me[1] - X[1]) - (Me[0] - X[0]) * (ce[1] - X[1]));
              } else if (P.length === 4) {
                const [X, ce, Me, Fe] = P.map((Pe) => e[Pe]);
                if (Z = 0.5 * Math.abs((ce[0] - X[0]) * (Me[1] - X[1]) - (Me[0] - X[0]) * (ce[1] - X[1])) + 0.5 * Math.abs((Me[0] - X[0]) * (Fe[1] - X[1]) - (Fe[0] - X[0]) * (Me[1] - X[1])), Z < 1e-10) {
                  const Pe = [
                    ce[0] - X[0],
                    ce[1] - X[1],
                    ce[2] - X[2]
                  ], H = [
                    Fe[0] - X[0],
                    Fe[1] - X[1],
                    Fe[2] - X[2]
                  ], de = [
                    Pe[1] * H[2] - Pe[2] * H[1],
                    Pe[2] * H[0] - Pe[0] * H[2],
                    Pe[0] * H[1] - Pe[1] * H[0]
                  ];
                  Z = Math.sqrt(de[0] ** 2 + de[1] ** 2 + de[2] ** 2);
                }
              }
              const se = -(q * te * Z * L) / P.length;
              for (const X of P) N.set(X, (N.get(X) ?? 0) + se);
            }
          }
        }
        const A = /* @__PURE__ */ new Set();
        for (const C of o) C.length === 2 && (A.add(C[0]), A.add(C[1]));
        for (const C of F) {
          const P = v.has(C) ? M : 0, q = S.has(C) ? I : 0, te = N.get(C) ?? 0, Z = A.has(C) ? g : 0, re = te + Z;
          (P !== 0 || q !== 0 || Math.abs(re) > 1e-10) && E.set(C, [
            P,
            q,
            re,
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
          let g = 0, M = -1, I = 0, E = 0;
          x.deformations && x.deformations.forEach((v, S) => {
            const L = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            L > g && (g = L, M = S, I = v[0], E = v[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${M})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(I * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(E * 1e3).toFixed(4)} mm`);
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
      const u = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = e - 2 * n, r = o - 2 * n, b = e * o - d * r, $ = (e * o * o * o - d * r * r * r) / 12, w = (o * e * e * e - r * d * d * d) / 12, x = d * r, f = d * r * r * r / 12, g = r * d * d * d / 12, M = b + u * x, I = $ + u * f, E = w + u * g, F = l / (2 * (1 + s)), y = (e - n) * (o - n), m = 2 * ((e - n) / n + (o - n) / n), p = 4 * y * y / (m > 0 ? m : 1);
      return {
        A: M,
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
      if ((z === "edificio" || z === "frame") && ue.size > 0) {
        const { colMat: s, vigaMat: c, colShape: a, fc: i, perFloor: u } = Te, d = 4700 * Math.sqrt(i / 1e3) * 1e3, r = d / (2 * 1.2), b = 24 / 9.80665, $ = o.E, w = o.G, x = o.rho;
        for (let f = 0; f < e.length; f++) {
          if (He.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, S = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, S), n.thicknesses.set(f, Qe), n.shearModuli.set(f, v / (2 * (1 + S))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Tt.has(f)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, S = 0.2;
            n.elasticities.set(f, v), n.poissonsRatios.set(f, S), n.thicknesses.set(f, $t), n.shearModuli.set(f, v / (2 * (1 + S))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const g = ue.has(f), M = Ce.get(f) ?? 0, I = u[M] ?? u[0] ?? {
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
            const v = Te.steelColType;
            if (v <= 1) {
              const S = po[I.colProfileIdx] ?? po[0];
              E = {
                A: S.A,
                Iz: S.Iz,
                Iy: S.Iy,
                J: S.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: S.bf,
                h: S.d,
                name: S.name
              });
            } else if (v === 2) {
              const S = I.colBf ?? 0.3, L = I.colHf ?? 0.3, N = I.colTf ?? 0.02, A = I.colTw ?? 0.012;
              E = hn(S, L, N, A);
              const C = `I${(L * 100).toFixed(0)}x${(S * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: S,
                h: L,
                tf: N,
                tw: A,
                name: C
              });
            } else {
              const S = I.colBc ?? 0.3, L = I.colHc ?? 0.3, N = I.colT ?? 0.01;
              E = xn(S, L, N);
              const A = `\u25A1${(L * 100).toFixed(0)}x${(S * 100).toFixed(0)}x${(N * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: S,
                h: L,
                tw: N,
                name: A
              });
            }
          } else {
            const v = I.colBc ?? 0.3, S = I.colHc ?? 0.3, L = I.colT ?? 0.01, N = I.colFc ?? 28e3, A = I.colEs ?? 2e8, C = I.colNuS ?? 0.3;
            I.colNuC;
            const P = Rs(v, S, L, A, C, N);
            E = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, F = P.Es, y = P.Gs;
            const q = 7.85, te = 24 / 9.80665;
            m = (q * P.A_steel + te * P.A_conc) / (P.A_steel + P.A_conc);
            const Z = `CFT ${(S * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(L * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: v,
              h: S,
              tw: L,
              name: Z
            });
          }
          else {
            const v = Je.get(f), S = v ? v.dir === "x" ? I.vigasX : I.vigasY : [], L = v ? S[v.bay] ?? S[0] ?? kt() : kt();
            if (c === 0) F = d, y = r, m = b, E = gn(L.b, L.h), n.sectionShapes.set(f, {
              type: "rect",
              b: L.b,
              h: L.h
            });
            else {
              F = $, y = w, m = x;
              const N = Te.steelVigaType;
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
                const te = `I${(C * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: A,
                  h: C,
                  tf: P,
                  tw: q,
                  name: te
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
          const p = he.get(f);
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
              const S = po[p.profileIdx] ?? po[0];
              E = {
                A: S.A,
                Iz: S.Iz,
                Iy: S.Iy,
                J: S.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: S.bf,
                h: S.d,
                name: S.name
              });
            } else if (p.secType === "I-param" && p.bf && p.hf && p.tf && p.tw) {
              E = hn(p.bf, p.hf, p.tf, p.tw);
              const S = `I${(p.hf * 100).toFixed(0)}x${(p.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: p.bf,
                h: p.hf,
                tf: p.tf,
                tw: p.tw,
                name: S
              });
            } else if (p.secType === "tubular" && p.bc && p.hc && p.t) {
              E = xn(p.bc, p.hc, p.t);
              const S = `\u25A1${(p.hc * 100).toFixed(0)}x${(p.bc * 100).toFixed(0)}x${(p.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: p.bc,
                h: p.hc,
                tw: p.t,
                name: S
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
          is(p), We.example(p);
        });
      }), ve.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.view;
          so(p), ve.querySelectorAll("[data-view]").forEach((v) => v.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = ve.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), z = "", Ts.val = false, Os(), We.clear();
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
        y.stopPropagation(), We.clear(), st = null;
      }), (_h = ve.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), _s();
      });
      let e = "";
      const o = ve.querySelector("#cad3d-io-menu"), n = ve.querySelector("#cad3d-io-file");
      function l(y, m) {
        t.nodes.val = y.nodes, t.elements.val = y.elements, t.nodeInputs.val = y.nodeInputs, t.elementInputs.val = y.elementInputs, t.deformOutputs.val = {}, t.analyzeOutputs.val = {}, console.log(`${m}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function s(y) {
        ue = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
        const m = /* @__PURE__ */ new Map();
        for (let q = 0; q < y.stories.length; q++) m.set(y.stories[q].name, q);
        for (let q = 0; q < y.elementTypes.length; q++) {
          const te = y.elementTypes[q], Z = y.elementStories[q], re = m.get(Z) ?? 0;
          Ce.set(q, re), te === "COLUMN" || te === "BRACE" ? ue.add(q) : ze.add(q);
        }
        z = "edificio";
        const p = y.grids.filter((q) => q.dir === "X").sort((q, te) => q.coord - te.coord), v = y.grids.filter((q) => q.dir === "Y").sort((q, te) => q.coord - te.coord);
        let S, L, N, A;
        if (p.length > 0 || v.length > 0) S = p.map((q) => q.coord), L = v.map((q) => q.coord), N = p.map((q) => q.label), A = v.map((q) => q.label);
        else {
          const q = new Set(y.nodes.map((Z) => Z[0])), te = new Set(y.nodes.map((Z) => Z[1]));
          S = [
            ...q
          ].sort((Z, re) => Z - re), L = [
            ...te
          ].sort((Z, re) => Z - re), N = S.map((Z, re) => String(re + 1)), A = L.map((Z, re) => String.fromCharCode(65 + re));
        }
        const C = y.stories.length > 0 ? Math.max(...y.stories.map((q) => q.elev)) : Math.max(...y.nodes.map((q) => q[2]));
        me = S, qe = L, Ue = C, setTimeout(() => {
          yt(), Po(S, L, C, N, A), sn(y.stories, S, L), vn(), yn();
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
        }), v = URL.createObjectURL(p), S = document.createElement("a");
        S.href = v, S.download = m, S.click(), URL.revokeObjectURL(v);
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
          v && (h = v.force, _ = v.length, Y = v.stress, k = xo(h, _), a && (a.value = h), i && (i.value = _), ve.querySelectorAll("[data-preset]").forEach((S) => {
            S.classList.toggle("active", S.dataset.preset === p);
          }), z && Ke(z), console.log(`Preset: ${p} \u2192 ${h}+${_}, stress: ${Y.label}`));
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
        const p = ve.querySelector("#cad3d-mode-prev"), v = ve.querySelector("#cad3d-mode-next"), S = ve.querySelector("#cad3d-mode-label"), L = ve.querySelector("#cad3d-modal-scale");
        if (At) {
          const N = Ze();
          ((_b2 = N == null ? void 0 : N.settings) == null ? void 0 : _b2.loads) && (U = N.settings.loads.rawVal, N.settings.loads.val = false), un(), p.style.display = "", v.style.display = "", S.style.display = "", L && (L.style.display = ""), u();
        } else mn(), p.style.display = "none", v.style.display = "none", S.style.display = "none", L && (L.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && $e(), setTimeout(() => {
          var _a4;
          const N = Ze();
          ((_a4 = N == null ? void 0 : N.settings) == null ? void 0 : _a4.loads) && U && (N.settings.loads.val = true);
        }, 600);
      });
      function u() {
        var _a3;
        const y = ve.querySelector("#cad3d-mode-label");
        if (!y || !(be == null ? void 0 : be.frequencies)) return;
        const m = be.frequencies[gt], p = m > 0 ? 1 / m : 0, v = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let S = 0; S <= gt; S++) {
          const L = (_a3 = be.massParticipation) == null ? void 0 : _a3[S];
          if (L) for (let N = 0; N < 6; N++) v[N] += L[N];
        }
        y.textContent = `Modo ${gt + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${p.toFixed(3)}s \u2014 \u03A3Ux=${(v[0] * 100).toFixed(1)}% \u03A3Uy=${(v[1] * 100).toFixed(1)}% \u03A3Rz=${(v[5] * 100).toFixed(1)}%`;
      }
      (_n2 = ve.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(be == null ? void 0 : be.modeShapes)) return;
        gt = (gt - 1 + be.modeShapes.length) % be.modeShapes.length;
        const m = be.modeShapes[gt], { extent: p } = no();
        let v = 0;
        for (let S = 0; S < le.length; S++) {
          const L = m[S * 6] || 0, N = m[S * 6 + 1] || 0, A = m[S * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(L * L + N * N + A * A));
        }
        Ae = v > 1e-12 ? p * 0.05 / v : 1, _o(), u();
      }), (_o2 = ve.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(be == null ? void 0 : be.modeShapes)) return;
        gt = (gt + 1) % be.modeShapes.length;
        const m = be.modeShapes[gt], { extent: p } = no();
        let v = 0;
        for (let S = 0; S < le.length; S++) {
          const L = m[S * 6] || 0, N = m[S * 6 + 1] || 0, A = m[S * 6 + 2] || 0;
          v = Math.max(v, Math.sqrt(L * L + N * N + A * A));
        }
        Ae = v > 1e-12 ? p * 0.05 / v : 1, _o(), u();
      });
      const d = ve.querySelector("#cad3d-modal-scale");
      d == null ? void 0 : d.addEventListener("mousedown", (y) => y.stopPropagation()), d == null ? void 0 : d.addEventListener("change", () => {
        At && (be == null ? void 0 : be.modeShapes) && _o();
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
          y.preventDefault(), nt.forEach((m) => V.add(m)), nt.clear(), Xt && (Xt.remove(), Xt = null), $e();
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
      let g = false, M = 0, I = 0, E = 0, F = 0;
      ve.addEventListener("mousedown", (y) => {
        const m = y.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        g = true;
        const p = ve.getBoundingClientRect();
        ve.style.bottom = "unset", M = y.clientX, I = y.clientY, E = p.left, F = p.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        g && (y.preventDefault(), ve.style.left = E + (y.clientX - M) + "px", ve.style.top = F + (y.clientY - I) + "px");
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
        const M = new Vo(new Xo({
          map: g,
          depthTest: false,
          transparent: true
        }));
        M.position.set(w[0], w[1], w[2]), M.scale.set(0.4 * u, 0.4 * u, 1), M.renderOrder = 99, d.add(M);
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
          const d = parseInt(e.split(":")[1]), r = ((_a2 = K.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * r, $ = r * 0.45;
          o.renderer.clippingPlanes = [
            new co(new Se(0, 0, -1), b + $),
            new co(new Se(0, 0, 1), -b + $)
          ], a(), u(new Se(n.x, n.y, b + l * 2), new Se(n.x, n.y, b), new Se(0, 1, 0));
        } else if (e === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (e === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (e.startsWith("axisX:")) {
          const d = parseInt(e.split(":")[1]), r = me[d] ?? n.x;
          if (qe.length > 1) {
            const $ = rs(me, d, l);
            o.renderer.clippingPlanes = [
              new co(new Se(-1, 0, 0), r + $),
              new co(new Se(1, 0, 0), -r + $)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (e.startsWith("axisY:")) {
          const d = parseInt(e.split(":")[1]), r = qe[d] ?? n.y;
          if (me.length > 1) {
            const $ = rs(qe, d, l);
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
      if (me.length < 2 && qe.length < 2) {
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
      me.forEach((c, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        e.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", e.appendChild(s), qe.forEach((c, a) => {
        const i = `${a + 1}`;
        e.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function yn() {
      var _a2;
      const e = ve.querySelector("#cad3d-floor-buttons");
      if (!e) return;
      const o = Math.round(((_a2 = K.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
    We.view = (e) => {
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
      const e = j.size > 0 || D;
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
        nt.forEach((n) => j.add(n)), nt.clear(), lo(), io(), $e();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        D = true, G.clear(), nt.forEach((n) => G.add(n)), nt.clear(), lo(), io(), $e();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        j.clear(), D = false, G.clear(), io(), $e();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        So(), nt.forEach((n) => V.add(n)), nt.clear(), lo(), io(), $e();
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
          const g = u[f], M = new Se(g[0], g[1], g[2]).project(n), I = Math.sqrt((M.x - c) ** 2 + (M.y - a) ** 2);
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
          const g = u[f[0]], M = u[f[1]], I = new Se((g[0] + M[0]) / 2, (g[1] + M[1]) / 2, (g[2] + M[2]) / 2), E = I.clone().project(n), F = Math.sqrt((E.x - c) ** 2 + (E.y - a) ** 2);
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
        const n = t.nodes.val, l = new Se(...n[at]), s = new Se(...n[_t]), c = new Se(...n[o]), a = Math.max(4, Math.round(((_a2 = K.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = ms(l, s, c, a);
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
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new ha(w, x), g = new Se(), M = new Se();
          d.closestPointToPoint(f.getCenter(new Se()), g), f.closestPointToPoint(g, true, M);
          const I = g.distanceTo(M);
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
          const w = new Se(...c[$[0]]), x = new Se(...c[$[1]]), f = new Se(...c[$[2]]), g = new Se(...c[$[3]]), M = new Se();
          let I = d.intersectTriangle(w, x, f, false, M);
          if (I) {
            const E = d.origin.distanceTo(M);
            E < i && (i = E, u = b);
          }
          if (I = d.intersectTriangle(w, f, g, false, M), I) {
            const E = d.origin.distanceTo(M);
            E < i && (i = E, u = b);
          }
        }
      }
      const { extent: r } = no();
      return i < r * 0.1 ? u : -1;
    }
    function ne(e, o = 4) {
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
          c += `<td class="${d}">${ne(u, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function ke(e, o) {
      return `<span class="frac"><span class="frac-num">${e}</span><span class="frac-den">${o}</span></span>`;
    }
    function O(e, o, n) {
      let l = `<span class="var">${e}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Gs(e, o, n, l, s, c, a) {
      const i = `${ke(O("E") + "\xB7" + O("A"), O("L"))}`, u = `${ke("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3")}`, d = `${ke("12\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB3")}`, r = `${ke(O("G") + "\xB7" + O("J"), O("L"))}`, b = `${ke("4\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`, $ = `${ke("4\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${i} = ${ke(ne(e) + "\xB7" + ne(o), ne(a))} = <span class="highlight">${ne(e * o / a)}</span></div>
      <div>${u} = ${ke("12\xB7" + ne(e) + "\xB7" + ne(n), ne(a) + "\xB3")} = <span class="highlight">${ne(12 * e * n / a ** 3)}</span></div>
      <div>${d} = ${ke("12\xB7" + ne(e) + "\xB7" + ne(l), ne(a) + "\xB3")} = <span class="highlight">${ne(12 * e * l / a ** 3)}</span></div>
      <div>${r} = ${ke(ne(s) + "\xB7" + ne(c), ne(a))} = <span class="highlight">${ne(s * c / a)}</span></div>
      <div>${b} = ${ke("4\xB7" + ne(e) + "\xB7" + ne(l), ne(a))} = <span class="highlight">${ne(4 * e * l / a)}</span></div>
      <div>${$} = ${ke("4\xB7" + ne(e) + "\xB7" + ne(n), ne(a))} = <span class="highlight">${ne(4 * e * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${O("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ke(O("EA"), O("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ke("\u2212" + O("EA"), O("L"))}</span>
        <span class="cell">0</span><span class="cell">${ke("12" + O("EI", "z"), O("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ke("\u2212" + O("EA"), O("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ke(O("EA"), O("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Js(e) {
      if (e.length === 2) {
        const n = to(e[1], e[0]), l = vo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${O("l")} = cos(\u03B1) = ${ke("\u0394x", O("L"))} = ${ke(ne(n[0]), ne(l))} = <span class="highlight">${ne(s)}</span></div>
        <div>${O("m")} = cos(\u03B2) = ${ke("\u0394y", O("L"))} = ${ke(ne(n[1]), ne(l))} = <span class="highlight">${ne(c)}</span></div>
        <div>${O("n")} = cos(\u03B3) = ${ke("\u0394z", O("L"))} = ${ke(ne(n[2]), ne(l))} = <span class="highlight">${ne(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${O("l")}</span><span class="cell">${O("m")}</span><span class="cell">${O("n")}</span>
          <span class="cell">${ke("\u2212" + O("m"), O("D"))}</span><span class="cell">${ke(O("l"), O("D"))}</span><span class="cell">0</span>
          <span class="cell">${ke("\u2212" + O("l") + "\xB7" + O("n"), O("D"))}</span><span class="cell">${ke("\u2212" + O("m") + "\xB7" + O("n"), O("D"))}</span><span class="cell">${O("D")}</span>
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
      <div>\u03C3 = ${ke("1", "2" + O("A"))} \xB7 ${O("D")} \xB7 ${O("B")} \xB7 ${O("u")}</div>
      <div>${O("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${O("t")} &nbsp;&nbsp; ${O("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ke(O("t") + "\xB3", "12")}</div>
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
          l += `<td class="${i}">${ne(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function gs() {
      const e = "0", o = ke(O("EA"), O("L")), n = ke("\u2212" + O("EA"), O("L")), l = ke("12" + O("EI", "z"), O("L") + "\xB3"), s = ke("\u221212" + O("EI", "z"), O("L") + "\xB3"), c = ke("12" + O("EI", "y"), O("L") + "\xB3"), a = ke("\u221212" + O("EI", "y"), O("L") + "\xB3"), i = ke("6" + O("EI", "z"), O("L") + "\xB2"), u = ke("\u22126" + O("EI", "z"), O("L") + "\xB2"), d = ke("6" + O("EI", "y"), O("L") + "\xB2"), r = ke("\u22126" + O("EI", "y"), O("L") + "\xB2"), b = ke(O("GJ"), O("L")), $ = ke("\u2212" + O("GJ"), O("L")), w = ke("4" + O("EI", "z"), O("L")), x = ke("2" + O("EI", "z"), O("L")), f = ke("4" + O("EI", "y"), O("L")), g = ke("2" + O("EI", "y"), O("L")), M = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', I = [
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
        for (let p = 0; p < 12; p++) if (p < m) y += `<td style="color:var(--fem-border-cell)">${p === 0 && m > 0 ? M : ""}</td>`;
        else {
          const v = F[m][p], S = (m === p ? "diag " : "") + (v !== "0" ? "nz" : "");
          y += `<td class="${S}">${v}</td>`;
        }
        y += "</tr>";
      }
      return y += "</table>", y;
    }
    function Us(e, o, n, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${ke(O("E") + "\xB7" + O("A"), O("L"))}`,
          calc: `${ke(ne(e) + "\xD7" + ne(o), ne(a))}`,
          val: e * o / a,
          label: "Axial"
        },
        {
          name: `${ke("12\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB3")}`,
          calc: `${ke("12\xD7" + ne(e) + "\xD7" + ne(n), ne(a) + "\xB3")}`,
          val: 12 * e * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${ke("6\xB7" + O("E") + "\xB7" + O("I", "z"), O("L") + "\xB2")}`,
          calc: `${ke("6\xD7" + ne(e) + "\xD7" + ne(n), ne(a) + "\xB2")}`,
          val: 6 * e * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ke("12\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB3")}`,
          calc: `${ke("12\xD7" + ne(e) + "\xD7" + ne(l), ne(a) + "\xB3")}`,
          val: 12 * e * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${ke("6\xB7" + O("E") + "\xB7" + O("I", "y"), O("L") + "\xB2")}`,
          calc: `${ke("6\xD7" + ne(e) + "\xD7" + ne(l), ne(a) + "\xB2")}`,
          val: 6 * e * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ke(O("G") + "\xB7" + O("J"), O("L"))}`,
          calc: `${ke(ne(s) + "\xD7" + ne(c), ne(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${ke("4\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`,
          calc: `${ke("4\xD7" + ne(e) + "\xD7" + ne(n), ne(a))}`,
          val: 4 * e * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ke("2\xB7" + O("E") + "\xB7" + O("I", "z"), O("L"))}`,
          calc: `${ke("2\xD7" + ne(e) + "\xD7" + ne(n), ne(a))}`,
          val: 2 * e * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ke("4\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`,
          calc: `${ke("4\xD7" + ne(e) + "\xD7" + ne(l), ne(a))}`,
          val: 4 * e * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ke("2\xB7" + O("E") + "\xB7" + O("I", "y"), O("L"))}`,
          calc: `${ke("2\xD7" + ne(e) + "\xD7" + ne(l), ne(a))}`,
          val: 2 * e * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${ne(u.val)}</span></div>`).join("")}</div>`;
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
        const m = vo(to(s[1], s[0])), p = ((_d = a.elasticities) == null ? void 0 : _d.get(e)) ?? 0, v = ((_e2 = a.areas) == null ? void 0 : _e2.get(e)) ?? 0, S = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(e)) ?? 0, L = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(e)) ?? 0, N = ((_h = a.shearModuli) == null ? void 0 : _h.get(e)) ?? 0, A = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(e)) ?? 0;
        `${l[0]}${l[1]}${ne(m)}${ne(p)}${ne(v)}${ne(S)}${ne(L)}${ne(N)}${ne(A)}`;
      } else {
        const m = ((_j = a.elasticities) == null ? void 0 : _j.get(e)) ?? 0, p = ((_k = a.thicknesses) == null ? void 0 : _k.get(e)) ?? 0, v = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(e)) ?? 0;
        `${l.join(", ")}${ne(m)}${ne(p)}${ne(v)}`;
      }
      let d = "", r = "", b = "", $ = "", w = "", x = "", f = "", g = "", M = null, I = null, E = null, F = [];
      try {
        if (M = tn(s, a, e), I = on(s), E = jt(_n(I), jt(M, I)), F = c ? [
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
          const S = vo(to(s[1], s[0])), L = ((_m = a.elasticities) == null ? void 0 : _m.get(e)) ?? 0, N = ((_n2 = a.areas) == null ? void 0 : _n2.get(e)) ?? 0, A = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(e)) ?? 0, C = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(e)) ?? 0, P = ((_q = a.shearModuli) == null ? void 0 : _q.get(e)) ?? 0, q = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(e)) ?? 0;
          $ = Gs(L, N, A, C, P, q, S);
        }
        w = Js(s), x = Vs(), f = Xs(l), g = Ks(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', p = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${M.length}\xD7${M.length}) ${m}</div>${kn(M, F)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${I.length}\xD7${I.length}) ${p}</div>${kn(I, F)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${kn(E, F)}`;
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
          const S = ((_a3 = i.deformations) == null ? void 0 : _a3.get(p)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], L = m.map((N, A) => `<span class="prop-key">${N}</span>: <span class="${Math.abs(S[A]) > 1e-10 ? "result-val" : ""}">${ne(S[A])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${p}:</strong> ${L}</div>`;
        }).join("");
      }
      if (u && c && (i == null ? void 0 : i.deformations) && M && I) {
        const m = (_s2 = u.normals) == null ? void 0 : _s2.get(e), p = (_t2 = u.shearsY) == null ? void 0 : _t2.get(e), v = (_u = u.shearsZ) == null ? void 0 : _u.get(e), S = (_v = u.torsions) == null ? void 0 : _v.get(e), L = (_w = u.bendingsY) == null ? void 0 : _w.get(e), N = (_x = u.bendingsZ) == null ? void 0 : _x.get(e), A = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], C = [];
        for (const se of l) {
          const X = ((_y = i.deformations) == null ? void 0 : _y.get(se)) || [
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
          q = jt(M, P);
        } catch {
          q = new Array(12).fill(0);
        }
        const te = (se, X) => se.map((ce, Me) => `<span style="color:${Math.abs(ce) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${X[Me % 6]}=${ne(ce)}</span>`).join(", "), re = [
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
        ].map((se, X) => `${se}${X < 6 ? "\u1D62" : "\u2C7C"}`);
        `${O("u", "global")}${l.map((se, X) => `<span style="color:var(--fem-label)">nodo ${se}:</span> ${A.map((ce, Me) => `<span style="color:${Math.abs(C[X * 6 + Me]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${ne(C[X * 6 + Me])}</span>`).join(", ")}`).join(" | ")}${O("u", "local")}${O("T")}${O("u", "global")}${O("u", "local")}${te(P, [
          ...A,
          ...A
        ])}${O("f", "local")}${O("k", "local")}${O("u", "local")}${O("f", "local")}${q.map((se, X) => `<span style="color:${Math.abs(se) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${re[X]}=${ne(se)}</span>`).join(", ")}${O("P", "1")}${O("N", "i")}${ne(q[0])}${O("P", "7")}${O("N", "j")}${ne(q[6])}${O("P", "2")}${O("V", "y,i")}${ne(q[1])}${O("P", "8")}${O("V", "y,j")}${ne(q[7])}${O("P", "3")}${O("V", "z,i")}${ne(q[2])}${O("P", "9")}${O("V", "z,j")}${ne(q[8])}${O("P", "4")}${O("M", "x,i")}${ne(q[3])}${O("P", "10")}${O("M", "x,j")}${ne(q[9])}${O("P", "5")}${O("M", "y,i")}${ne(q[4])}${O("P", "11")}${O("M", "y,j")}${ne(q[10])}${O("P", "6")}${O("M", "z,i")}${ne(q[5])}${O("P", "12")}${O("M", "z,j")}${ne(q[11])}${m ? m.map((se) => ne(se)).join(", ") : "\u2014"}${p ? p.map((se) => ne(se)).join(", ") : "\u2014"}${v ? v.map((se) => ne(se)).join(", ") : "\u2014"}${S ? S.map((se) => ne(se)).join(", ") : "\u2014"}${L ? L.map((se) => ne(se)).join(", ") : "\u2014"}${N ? N.map((se) => ne(se)).join(", ") : "\u2014"}`;
      } else if (u && c) {
        const m = (_z = u.normals) == null ? void 0 : _z.get(e), p = (_A = u.shearsY) == null ? void 0 : _A.get(e), v = (_B = u.shearsZ) == null ? void 0 : _B.get(e), S = (_C = u.torsions) == null ? void 0 : _C.get(e), L = (_D = u.bendingsY) == null ? void 0 : _D.get(e), N = (_E = u.bendingsZ) == null ? void 0 : _E.get(e);
        `${m ? m.map((A) => ne(A)).join(", ") : "\u2014"}${p ? p.map((A) => ne(A)).join(", ") : "\u2014"}${v ? v.map((A) => ne(A)).join(", ") : "\u2014"}${S ? S.map((A) => ne(A)).join(", ") : "\u2014"}${L ? L.map((A) => ne(A)).join(", ") : "\u2014"}${N ? N.map((A) => ne(A)).join(", ") : "\u2014"}`;
      } else if (u && !c) {
        const m = (_F = u.bendingXX) == null ? void 0 : _F.get(e), p = (_G = u.bendingYY) == null ? void 0 : _G.get(e), v = (_H = u.bendingXY) == null ? void 0 : _H.get(e), S = (_I = u.membraneXX) == null ? void 0 : _I.get(e), L = (_J = u.membraneYY) == null ? void 0 : _J.get(e), N = (_K = u.membraneXY) == null ? void 0 : _K.get(e);
        `${m ? m.map((A) => ne(A)).join(", ") : "\u2014"}${p ? p.map((A) => ne(A)).join(", ") : "\u2014"}${v ? v.map((A) => ne(A)).join(", ") : "\u2014"}${S ? S.map((A) => ne(A)).join(", ") : "\u2014"}${L ? L.map((A) => ne(A)).join(", ") : "\u2014"}${N ? N.map((A) => ne(A)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Vt = Aa(e, o, n, a, i, u), Vt.id = "fem-inspect-panel", document.body.appendChild(Vt), (_L = Vt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => mo());
      const y = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = vo(to(s[1], s[0])), p = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(e)) ?? 0, v = ((_b2 = a.areas) == null ? void 0 : _b2.get(e)) ?? 0, S = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(e)) ?? 0, L = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0, N = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(e)) ?? 0, A = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(e)) ?? 0;
        return Us(p, v, S, L, N, A, m);
      })() : void 0;
      Vt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (p) => {
          p.stopPropagation();
          const v = m.dataset.full;
          if (v === "kLocal" && M) {
            const S = c ? gs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Ln(`Elemento ${e} \u2014 Rigidez Local k_local`, S, zn(M, F), y);
          } else if (v === "T" && I) Ln(`Elemento ${e} \u2014 Transformaci\xF3n T`, w, zn(I, F));
          else if (v === "kGlobal" && E) {
            const S = c ? gs() : "<em>Shell 18\xD718</em>";
            Ln(`Elemento ${e} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, S, zn(E, F), y);
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
        const x = w / 20, f = 20 * x, g = 20 * (1 - Math.pow(2 * x - 1, 2)), M = 2;
        l.push([
          f,
          -2 / 2,
          g
        ]), l.push([
          f,
          M / 2,
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
        const g = 60 * f / 16, M = c.length;
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
          M,
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
        for (let M = 0; M <= 16; M++) {
          const I = 60 * M / 16;
          if (Math.abs(I - g) > 60 * 0.05 && Math.abs(I - g) < 60 * 0.45) {
            const E = c[f][1] < 0 ? M * 2 : M * 2 + 1;
            M % 2 === 0 && a.push([
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
        const M = g * 3.5, I = g * 5 * Math.PI / 180;
        for (let E = 0; E < 6; E++) {
          const F = I + 2 * Math.PI * E / 6, y = 5 * Math.cos(F), m = 5 * Math.sin(F);
          c.push([
            y,
            m,
            M
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const M = g * 6;
        for (let I = 0; I < 6; I++) a.push([
          M + I,
          M + (I + 1) % 6
        ]);
        if (g < 12) {
          const I = (g + 1) * 6;
          for (let E = 0; E < 6; E++) a.push([
            M + E,
            I + E
          ]), a.push([
            M + E,
            I + (E + 1) % 6
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const M = c.length;
        c.push([
          0,
          0,
          g * 3.5
        ]);
        const I = g * 6;
        for (let E = 0; E < 6; E++) a.push([
          M,
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
        const M = 10 * g / 12, I = g * 6;
        for (let E = 0; E < 6; E++) d.set(I + E, [
          M,
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
        elasticities: new Map(a.map((g, M) => [
          M,
          r
        ])),
        shearModuli: new Map(a.map((g, M) => [
          M,
          b
        ])),
        areas: new Map(a.map((g, M) => [
          M,
          $
        ])),
        momentsOfInertiaZ: new Map(a.map((g, M) => [
          M,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((g, M) => [
          M,
          w
        ])),
        torsionalConstants: new Map(a.map((g, M) => [
          M,
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
        const g = f / 20, M = f * 3;
        let I = 8 * (1 - g * 0.7);
        g > 0.4 && (I *= 0.85), g > 0.7 && (I *= 0.7);
        const E = s.length;
        s.push([
          0,
          0,
          M
        ]);
        for (let F = 0; F < 3; F++) {
          const y = F * 2 * Math.PI / 3 - Math.PI / 2, m = I * Math.cos(y), p = I * Math.sin(y), v = s.length;
          s.push([
            m,
            p,
            M
          ]), c.push([
            E,
            v
          ]);
          const S = s.length;
          s.push([
            m * 0.5,
            p * 0.5,
            M
          ]), c.push([
            E,
            S
          ]), c.push([
            S,
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
        const g = f * i, M = 5 * f / 20;
        u.set(g, [
          M,
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
            const p = m / 12, v = $ + y * p, S = w * Math.sin(Math.PI * p) * (1 - E * E * 0.5), L = F;
            e.push([
              v,
              L,
              S
            ]);
          }
        }
        const M = 13;
        for (let I = 0; I < 4; I++) for (let E = 0; E < 12; E++) {
          const F = g + I * M + E, y = g + I * M + E + 1, m = g + (I + 1) * M + E + 1, p = g + (I + 1) * M + E;
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
        const f = x / 15, g = x * 3.5, M = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
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
            M * Math.cos(E),
            M * Math.sin(E),
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
        const M = x % 2 === 0 ? 1 : -1;
        for (let I = 0; I < 12; I++) {
          const E = (I + M + 12) % 12;
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
        for (let M = 0; M < 12; M += 3) i.set(f + M, [
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
          const M = x * g / b;
          for (let I = 0; I <= f; I++) w.push(M * Math.sin(2 * Math.PI * I / f));
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
          }, __vite__mapDeps([0,1]), import.meta.url), M = await g({
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
          $.textContent = `Completado: ${M.nSteps} pasos`, ea(e.querySelector("#pushover-canvas"), M.displacements, M.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
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
      const x = b - r, f = w - $, g = (F) => i.left + (F - r) / x * u, M = (F) => i.top + d - (F - $) / f * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, r < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(g(0), i.top), s.lineTo(g(0), i.top + d), s.stroke()), $ < 0 && w > 0 && (s.beginPath(), s.moveTo(i.left, M(0)), s.lineTo(i.left + u, M(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(g(o[0]), M(n[0]));
      for (let F = 1; F < o.length; F++) s.lineTo(g(o[F]), M(n[F]));
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
        s.fillText(y.toFixed(0), i.left - 5, M(y) + 3);
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
      for (let Z = 0; Z < a; Z++) {
        const re = c * (1 + Z * 0.5);
        for (let se = 0; se < i; se++) {
          const X = se / i * 2 * Math.PI;
          u.push(re * Math.sin(X));
        }
      }
      const d = o / n, r = l * n;
      let b = 0, $ = 0, w = -d, x = d, f = 0, g = 0, M = 0, I = 0, E = 0, F = 0;
      const y = [];
      for (const Z of u) {
        let re = w, se = x, X = f, ce = g, Me = M, Fe = I, Pe = E, H = F, de;
        const ie = Z - b;
        if (Math.abs(ie) < 1e-20) {
          y.push($);
          continue;
        }
        if ((H === 0 || H === 3) && (ie < 0 ? (H = 2, ce = -d, Me = -o, X = ce, Fe = 0, Pe = 0) : (H = 1, ce = d, Me = o, X = ce, Fe = 0, Pe = 0)), H === 2 && ie > 0) {
          H = 1, Fe = b, Pe = $, b < re && (re = b);
          const Le = (se - re) / (2 * 1 * d), De = 1 + 0 * Math.pow(Le, 0.8);
          ce = (o * De - r * d * De - Pe + n * Fe) / (n - r), Me = o * De + r * (ce - d * De), X = se;
        } else if (H === 1 && ie < 0) {
          H = 2, Fe = b, Pe = $, b > se && (se = b);
          const Le = (se - re) / (2 * 1 * d), De = 1 + 0 * Math.pow(Le, 0.8);
          ce = (-o * De + r * d * De - Pe + n * Fe) / (n - r), Me = -o * De + r * (ce + d * De), X = re;
        }
        const Q = Math.abs((X - ce) / d);
        let J = s - 0.925 * Q / (0.15 + Q);
        J < 0.1 && (J = 0.1);
        const pe = (Z - Fe) / (ce - Fe), Ee = 1 + Math.pow(Math.abs(pe), J), oe = Math.pow(Ee, 1 / J);
        de = l * pe + (1 - l) * pe / oe, de = de * (Me - Pe) + Pe, y.push(de), b = Z, $ = de, w = re, x = se, f = X, g = ce, M = Me, I = Fe, E = Pe, F = H;
      }
      const m = e.querySelector("#nl-canvas"), p = m.getContext("2d"), v = m.width, S = m.height;
      p.clearRect(0, 0, v, S);
      const L = Math.max(...u.map(Math.abs)), N = Math.max(...y.map(Math.abs)), A = (v - 40) / (2 * L), C = (S - 40) / (2 * N), P = v / 2, q = S / 2;
      p.strokeStyle = "#444", p.lineWidth = 1, p.beginPath(), p.moveTo(20, q), p.lineTo(v - 20, q), p.stroke(), p.beginPath(), p.moveTo(P, 20), p.lineTo(P, S - 20), p.stroke(), p.fillStyle = "#888", p.font = "10px monospace", p.textAlign = "center", p.fillText("\u03B5 (strain)", v - 40, q - 5), p.fillText("\u03C3 (stress)", P + 30, 15), p.fillText(`\xB1${(L * 100).toFixed(1)}%`, v - 30, q + 12), p.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), p.strokeStyle = "#00ccff", p.lineWidth = 1.5, p.beginPath();
      for (let Z = 0; Z < u.length; Z++) {
        const re = P + u[Z] * A, se = q - y[Z] * C;
        Z === 0 ? p.moveTo(re, se) : p.lineTo(re, se);
      }
      p.stroke(), p.strokeStyle = "#ff333366", p.lineWidth = 1, p.setLineDash([
        4,
        4
      ]), p.beginPath(), p.moveTo(20, q - o * C), p.lineTo(v - 20, q - o * C), p.stroke(), p.beginPath(), p.moveTo(20, q + o * C), p.lineTo(v - 20, q + o * C), p.stroke(), p.setLineDash([]), p.fillStyle = "#ff6666", p.font = "9px monospace", p.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, q - o * C - 5);
      const te = e.querySelector("#nl-info");
      te.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
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
        d === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : d === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : d === "W" || d === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : d === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : d === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, e.forEach((b) => he.set(b, {
          ...r
        })), o.remove(), Eo = null, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        e.forEach((d) => he.delete(d)), o.remove(), Eo = null, oo(), t.elementInputs.val = {
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
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), u = a > c && a > i, d = Math.sqrt(c * c + a * a + i * i), r = Ce.get(e) ?? 0, b = (_c = (_b = (_a2 = t.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(e), $ = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
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
        V.add(e), w.remove(), Io = null, mo(), $e();
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
        const w = Math.min(u, r), x = Math.max(u, r), f = Math.min(d, b), g = Math.max(d, b), M = t.nodes.val, I = t.elements.val, E = [];
        for (let F = 0; F < I.length; F++) {
          const y = I[F], m = y.map((p) => c(M[p])).filter(Boolean);
          if (m.length !== 0) if ($) m.every((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= g) && E.push(F);
          else {
            if (m.some((v) => v.x >= w && v.x <= x && v.y >= f && v.y <= g)) {
              E.push(F);
              continue;
            }
            if (y.length === 2) {
              const v = m[0], S = m[1];
              i(v.x, v.y, S.x, S.y, w, f, x, g) && E.push(F);
            }
          }
        }
        return E;
      }
      function i(u, d, r, b, $, w, x, f) {
        const g = (I, E) => I >= $ && I <= x && E >= w && E <= f;
        if (g(u, d) || g(r, b)) return true;
        const M = (I, E, F, y, m, p, v, S) => {
          const L = (F - I) * (S - p) - (y - E) * (v - m);
          if (Math.abs(L) < 1e-10) return false;
          const N = ((m - I) * (S - p) - (p - E) * (v - m)) / L, A = ((m - I) * (y - E) - (p - E) * (F - I)) / L;
          return N >= 0 && N <= 1 && A >= 0 && A <= 1;
        };
        return M(u, d, r, b, $, w, x, w) || M(u, d, r, b, x, w, x, f) || M(u, d, r, b, $, f, x, f) || M(u, d, r, b, $, w, $, f);
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
    }), We.modal = (e) => {
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
    }, We.setMode = (e) => {
      var _a2;
      if (!(be == null ? void 0 : be.modeShapes)) {
        console.error("No modal results");
        return;
      }
      gt = Math.max(0, Math.min(e, be.modeShapes.length - 1));
      const o = be.modeShapes[gt], { extent: n } = no();
      let l = 0;
      for (let c = 0; c < le.length; c++) {
        const a = o[c * 6] || 0, i = o[c * 6 + 1] || 0, u = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + u * u));
      }
      Ae = l > 1e-12 ? n * 0.05 / l : 1, _o();
      const s = ve.querySelector("#cad3d-mode-label");
      s && be.frequencies && (s.textContent = `Modo ${gt + 1} \u2014 ${be.frequencies[gt].toFixed(2)} Hz`), console.log(`Modo ${gt + 1}: f = ${(_a2 = be.frequencies) == null ? void 0 : _a2[gt].toFixed(4)} Hz`);
    }, window.cad = We, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ve), document.body.appendChild(ge.div);
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
