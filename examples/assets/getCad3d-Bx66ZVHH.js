const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-C97I4pAY.js","./plateQ4Cpp-WQQsWWc3.js"])))=>i.map(i=>d[i]);
import { _ as aa, p as Cn, m as la, d as Ht, s as ia, __tla as __tla_0 } from "./plateQ4Cpp-WQQsWWc3.js";
import { v as Ao, P as _o, g as ra, a as ca, o as da } from "./theme-CzzIlc4y.js";
import { V as we, P as co, R as Es, b as ks, B as Dt, c as pa, d as zo, e as Lo, f as fa, S as ua, M as ma, g as ba, F as bo, a as To, L as go, h as ga, G as ha, A as Yo, i as Go, T as An, j as Jo, k as Vo, C as xa, l as va } from "./Text-Cin90tvN.js";
import { g as en, b as tn, a as Co } from "./analyze-B6dp1uvy.js";
import { g as eo, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as vo, s as to, m as jt, t as Nn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let Ls, Ma, Qa;
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
  const On = [
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
  function ya(t, g) {
    return t === "kN" && g === "m" ? "kPa" : t === "kN" && g === "mm" || t === "N" && g === "mm" ? "MPa" : t === "N" && g === "m" ? "Pa" : t === "kip" && g === "in" ? "ksi" : t === "kip" && g === "ft" ? "ksf" : `${t}/${g}\xB2`;
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
  function xo(t, g) {
    const R = On.find((Y) => Y.id === t), E = qo.find((Y) => Y.id === g), W = R.toKN, _ = E.toM, G = (Y, ue, z) => z / (Math.pow(W, Y) * Math.pow(_, ue));
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
      id: `${t}-${g}`,
      label: `${R.label}, ${E.label}`,
      force: R.label,
      length: E.label,
      stress: ya(t, g),
      moment: `${R.label}\xB7${E.label}`,
      E: G(1, -2, ho.E),
      G: G(1, -2, ho.G),
      A: G(0, 2, ho.A),
      Iz: G(0, 4, ho.Iz),
      Iy: G(0, 4, ho.Iy),
      J: G(0, 4, ho.J),
      rho: G(1, -4, ho.rho),
      spanRange: E.spanRange,
      heightRange: E.heightRange,
      defaultSpan: E.defaultSpan,
      defaultHeight: E.defaultHeight,
      defaultForce: D,
      forceRange: B,
      galponSpan: E.galponSpan,
      galponLength: E.galponLength,
      galponHeight: E.galponHeight,
      galponRise: E.galponRise
    };
  }
  xo("kN", "m"), xo("kip", "in");
  function Xo() {
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
  function $a(t) {
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
  function wa(t) {
    const g = t.force, [R, E, W] = t.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: W,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: t.defaultForce,
          min: R,
          max: E,
          step: W,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: t.defaultForce * 3,
          min: R,
          max: E,
          step: W,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: W,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: E,
          step: W,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: W,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: W,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: R,
          max: E,
          step: W,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: R,
          max: E,
          step: W,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: R,
          max: 0,
          step: W,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: R,
          max: 0,
          step: W,
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
          step: W,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: R,
          max: 0,
          step: W,
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
  Ma = function() {
    const t = document.createElement("div");
    t.id = "modal-results", t.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let g = false;
    function R(E, W) {
      var _a2, _b;
      if (!E.frequencies || E.frequencies.length === 0) {
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
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, E.frequencies.forEach((B, Y) => {
        var _a3;
        const ue = B > 0 ? 1 / B : 0, z = B * 2 * Math.PI, X = ((_a3 = E.massParticipation) == null ? void 0 : _a3[Y]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) G[ve] += X[ve];
        D += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${Y + 1}</td>
  <td style="padding:2px 6px; text-align:right">${B.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ue.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const re = (X[ve] * 100).toFixed(1), K = X[ve] > 0.5 ? "#f00" : X[ve] > 0.1 ? "#ff0" : "#0f0";
          D += `<td style="padding:2px 5px; text-align:right; color:${K}">${re}%</td>`;
        }
        D += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(G[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(G[5] * 100).toFixed(1)}%</td></tr>`;
      }), D += "</table></div>", t.innerHTML = D, g) {
        const B = t.querySelector("#modal-body"), Y = t.querySelector("#modal-minimize");
        B && (B.style.display = "none"), Y && (Y.textContent = "\u25A2", Y.title = "Restaurar");
      }
      (_a2 = t.querySelector("#modal-minimize")) == null ? void 0 : _a2.addEventListener("click", () => {
        g = !g;
        const B = t.querySelector("#modal-body"), Y = t.querySelector("#modal-minimize");
        g ? (B.style.display = "none", Y.textContent = "\u25A2", Y.title = "Restaurar") : (B.style.display = "block", Y.textContent = "\u25AC", Y.title = "Minimizar");
      }), (_b = t.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const B = [];
        B.push(`Modal Analysis \u2014 ${W.title}`);
        const Y = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${_.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        B.push(Y), B.push("-".repeat(Y.length));
        const ue = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        E.frequencies.forEach((X, ve) => {
          var _a3;
          const re = X > 0 ? 1 / X : 0, K = X * 2 * Math.PI, te = ((_a3 = E.massParticipation) == null ? void 0 : _a3[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Le = 0; Le < 6; Le++) ue[Le] += te[Le];
          const de = te.map((Le) => ((Le * 100).toFixed(1) + "%").padStart(6)).join(" ");
          B.push(`${String(ve + 1).padStart(4)}  ${X.toFixed(4).padStart(9)}  ${re.toFixed(4).padStart(9)}  ${K.toFixed(2).padStart(9)}  ${de}  ${(ue[0] * 100).toFixed(1).padStart(5)}%  ${(ue[1] * 100).toFixed(1).padStart(5)}%  ${(ue[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(B.join(`
`));
        const z = t.querySelector("#modal-copy");
        z.textContent = "\u2713", setTimeout(() => z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: t,
      render: R
    };
  };
  const be = 64516e-8, L = 416231e-12, H = 0.0254, po = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * be,
      Iz: 16.4 * L,
      Iy: 2.2 * L,
      J: 0.0405 * L,
      d: 5.9 * H,
      bf: 3.94 * H
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * be,
      Iz: 29.1 * L,
      Iy: 9.32 * L,
      J: 0.103 * L,
      d: 5.99 * H,
      bf: 5.99 * H
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * be,
      Iz: 41.4 * L,
      Iy: 13.3 * L,
      J: 0.204 * L,
      d: 6.2 * H,
      bf: 6.02 * H
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * be,
      Iz: 30.8 * L,
      Iy: 2.09 * L,
      J: 0.0426 * L,
      d: 7.89 * H,
      bf: 3.94 * H
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * be,
      Iz: 61.9 * L,
      Iy: 7.97 * L,
      J: 0.172 * L,
      d: 8.14 * H,
      bf: 5.25 * H
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * be,
      Iz: 82.7 * L,
      Iy: 18.3 * L,
      J: 0.346 * L,
      d: 7.93 * H,
      bf: 6.5 * H
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * be,
      Iz: 110 * L,
      Iy: 37.1 * L,
      J: 0.536 * L,
      d: 8 * H,
      bf: 7.995 * H
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * be,
      Iz: 146 * L,
      Iy: 49.1 * L,
      J: 0.871 * L,
      d: 8.25 * H,
      bf: 8.07 * H
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * be,
      Iz: 184 * L,
      Iy: 60.9 * L,
      J: 1.45 * L,
      d: 8.5 * H,
      bf: 8.11 * H
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * be,
      Iz: 272 * L,
      Iy: 88.6 * L,
      J: 3.54 * L,
      d: 9 * H,
      bf: 8.28 * H
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * be,
      Iz: 53.8 * L,
      Iy: 2.18 * L,
      J: 0.0547 * L,
      d: 9.87 * H,
      bf: 3.96 * H
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * be,
      Iz: 118 * L,
      Iy: 11.4 * L,
      J: 0.239 * L,
      d: 10.17 * H,
      bf: 5.75 * H
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * be,
      Iz: 171 * L,
      Iy: 36.6 * L,
      J: 0.583 * L,
      d: 9.73 * H,
      bf: 7.96 * H
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * be,
      Iz: 272 * L,
      Iy: 93.4 * L,
      J: 1.39 * L,
      d: 9.98 * H,
      bf: 10 * H
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * be,
      Iz: 394 * L,
      Iy: 134 * L,
      J: 3.56 * L,
      d: 10.4 * H,
      bf: 10.13 * H
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * be,
      Iz: 623 * L,
      Iy: 207 * L,
      J: 10.9 * L,
      d: 11.1 * H,
      bf: 10.34 * H
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * be,
      Iz: 88.6 * L,
      Iy: 2.36 * L,
      J: 0.0704 * L,
      d: 11.91 * H,
      bf: 3.97 * H
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * be,
      Iz: 156 * L,
      Iy: 4.66 * L,
      J: 0.293 * L,
      d: 12.31 * H,
      bf: 4.03 * H
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * be,
      Iz: 204 * L,
      Iy: 17.3 * L,
      J: 0.3 * L,
      d: 12.22 * H,
      bf: 6.49 * H
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * be,
      Iz: 310 * L,
      Iy: 44.1 * L,
      J: 0.906 * L,
      d: 11.94 * H,
      bf: 8.01 * H
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * be,
      Iz: 425 * L,
      Iy: 95.8 * L,
      J: 1.58 * L,
      d: 12.06 * H,
      bf: 9.99 * H
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * be,
      Iz: 597 * L,
      Iy: 195 * L,
      J: 4.05 * L,
      d: 12.25 * H,
      bf: 12.04 * H
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * be,
      Iz: 833 * L,
      Iy: 270 * L,
      J: 8.44 * L,
      d: 12.71 * H,
      bf: 12.16 * H
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * be,
      Iz: 1070 * L,
      Iy: 345 * L,
      J: 16 * L,
      d: 13.12 * H,
      bf: 12.32 * H
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * be,
      Iz: 199 * L,
      Iy: 7 * L,
      J: 0.208 * L,
      d: 13.74 * H,
      bf: 5 * H
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * be,
      Iz: 291 * L,
      Iy: 19.6 * L,
      J: 0.38 * L,
      d: 13.84 * H,
      bf: 6.73 * H
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * be,
      Iz: 385 * L,
      Iy: 26.7 * L,
      J: 0.798 * L,
      d: 14.1 * H,
      bf: 6.77 * H
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * be,
      Iz: 485 * L,
      Iy: 51.4 * L,
      J: 1.45 * L,
      d: 13.79 * H,
      bf: 8.03 * H
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * be,
      Iz: 640 * L,
      Iy: 107 * L,
      J: 2.19 * L,
      d: 13.89 * H,
      bf: 9.99 * H
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * be,
      Iz: 882 * L,
      Iy: 148 * L,
      J: 5.07 * L,
      d: 14.31 * H,
      bf: 10.13 * H
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * be,
      Iz: 1240 * L,
      Iy: 447 * L,
      J: 7.12 * L,
      d: 14.32 * H,
      bf: 14.61 * H
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * be,
      Iz: 1530 * L,
      Iy: 548 * L,
      J: 12.3 * L,
      d: 14.66 * H,
      bf: 14.73 * H
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * be,
      Iz: 2140 * L,
      Iy: 838 * L,
      J: 23.7 * L,
      d: 15.22 * H,
      bf: 15.65 * H
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * be,
      Iz: 301 * L,
      Iy: 9.59 * L,
      J: 0.262 * L,
      d: 15.69 * H,
      bf: 5.5 * H
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * be,
      Iz: 448 * L,
      Iy: 24.5 * L,
      J: 0.545 * L,
      d: 15.86 * H,
      bf: 6.99 * H
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * be,
      Iz: 659 * L,
      Iy: 37.2 * L,
      J: 1.52 * L,
      d: 16.26 * H,
      bf: 7.07 * H
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * be,
      Iz: 954 * L,
      Iy: 119 * L,
      J: 2.39 * L,
      d: 16.33 * H,
      bf: 10.24 * H
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * be,
      Iz: 1300 * L,
      Iy: 163 * L,
      J: 5.45 * L,
      d: 16.75 * H,
      bf: 10.37 * H
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * be,
      Iz: 510 * L,
      Iy: 15.3 * L,
      J: 0.506 * L,
      d: 17.7 * H,
      bf: 6 * H
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * be,
      Iz: 800 * L,
      Iy: 40.1 * L,
      J: 1.24 * L,
      d: 17.99 * H,
      bf: 7.5 * H
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * be,
      Iz: 1170 * L,
      Iy: 60.3 * L,
      J: 3.49 * L,
      d: 18.47 * H,
      bf: 7.64 * H
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * be,
      Iz: 1750 * L,
      Iy: 201 * L,
      J: 5.86 * L,
      d: 18.59 * H,
      bf: 11.15 * H
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * be,
      Iz: 843 * L,
      Iy: 20.7 * L,
      J: 0.77 * L,
      d: 20.66 * H,
      bf: 6.5 * H
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * be,
      Iz: 1330 * L,
      Iy: 57.5 * L,
      J: 1.83 * L,
      d: 20.99 * H,
      bf: 8.24 * H
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * be,
      Iz: 1830 * L,
      Iy: 81.4 * L,
      J: 4.34 * L,
      d: 21.43 * H,
      bf: 8.36 * H
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * be,
      Iz: 2670 * L,
      Iy: 274 * L,
      J: 6.83 * L,
      d: 21.51 * H,
      bf: 12.34 * H
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * be,
      Iz: 1350 * L,
      Iy: 29.1 * L,
      J: 1.18 * L,
      d: 23.57 * H,
      bf: 7.01 * H
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * be,
      Iz: 2100 * L,
      Iy: 82.5 * L,
      J: 2.68 * L,
      d: 23.92 * H,
      bf: 8.99 * H
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * be,
      Iz: 3100 * L,
      Iy: 259 * L,
      J: 4.72 * L,
      d: 24.06 * H,
      bf: 12.75 * H
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * be,
      Iz: 4020 * L,
      Iy: 340 * L,
      J: 9.5 * L,
      d: 24.48 * H,
      bf: 12.86 * H
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * be,
      Iz: 4580 * L,
      Iy: 391 * L,
      J: 12.6 * L,
      d: 24.74 * H,
      bf: 12.9 * H
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * be,
      Iz: 5680 * L,
      Iy: 479 * L,
      J: 21.2 * L,
      d: 25.24 * H,
      bf: 12.9 * H
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * be,
      Iz: 2850 * L,
      Iy: 106 * L,
      J: 2.81 * L,
      d: 26.71 * H,
      bf: 9.96 * H
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * be,
      Iz: 4090 * L,
      Iy: 159 * L,
      J: 6.77 * L,
      d: 27.29 * H,
      bf: 10.07 * H
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * be,
      Iz: 3610 * L,
      Iy: 115 * L,
      J: 3.06 * L,
      d: 29.53 * H,
      bf: 10.4 * H
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * be,
      Iz: 4930 * L,
      Iy: 164 * L,
      J: 6.43 * L,
      d: 30.01 * H,
      bf: 10.5 * H
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * be,
      Iz: 5900 * L,
      Iy: 187 * L,
      J: 5.3 * L,
      d: 32.86 * H,
      bf: 11.48 * H
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * be,
      Iz: 7800 * L,
      Iy: 225 * L,
      J: 7 * L,
      d: 35.55 * H,
      bf: 11.95 * H
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * be,
      Iz: 8.22 * L,
      Iy: 8.22 * L,
      J: 13.4 * L,
      d: 4 * H,
      bf: 4 * H
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * be,
      Iz: 10.7 * L,
      Iy: 10.7 * L,
      J: 17.9 * L,
      d: 4 * H,
      bf: 4 * H
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * be,
      Iz: 12.3 * L,
      Iy: 12.3 * L,
      J: 21 * L,
      d: 4 * H,
      bf: 4 * H
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * be,
      Iz: 30.3 * L,
      Iy: 30.3 * L,
      J: 48.3 * L,
      d: 6 * H,
      bf: 6 * H
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * be,
      Iz: 41.1 * L,
      Iy: 41.1 * L,
      J: 66.9 * L,
      d: 6 * H,
      bf: 6 * H
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * be,
      Iz: 49.6 * L,
      Iy: 49.6 * L,
      J: 82.2 * L,
      d: 6 * H,
      bf: 6 * H
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * be,
      Iz: 70.7 * L,
      Iy: 70.7 * L,
      J: 112 * L,
      d: 8 * H,
      bf: 8 * H
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * be,
      Iz: 98 * L,
      Iy: 98 * L,
      J: 158 * L,
      d: 8 * H,
      bf: 8 * H
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * be,
      Iz: 122 * L,
      Iy: 122 * L,
      J: 199 * L,
      d: 8 * H,
      bf: 8 * H
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * be,
      Iz: 202 * L,
      Iy: 202 * L,
      J: 323 * L,
      d: 10 * H,
      bf: 10 * H
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * be,
      Iz: 254 * L,
      Iy: 254 * L,
      J: 412 * L,
      d: 10 * H,
      bf: 10 * H
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * be,
      Iz: 355 * L,
      Iy: 355 * L,
      J: 564 * L,
      d: 12 * H,
      bf: 12 * H
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * be,
      Iz: 452 * L,
      Iy: 452 * L,
      J: 724 * L,
      d: 12 * H,
      bf: 12 * H
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * be,
      Iz: 18 * L,
      Iy: 9.58 * L,
      J: 22.6 * L,
      d: 6 * H,
      bf: 4 * H
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * be,
      Iz: 23.8 * L,
      Iy: 12.3 * L,
      J: 30.3 * L,
      d: 6 * H,
      bf: 4 * H
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * be,
      Iz: 33.6 * L,
      Iy: 11.8 * L,
      J: 33 * L,
      d: 8 * H,
      bf: 4 * H
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * be,
      Iz: 45.1 * L,
      Iy: 15 * L,
      J: 44.5 * L,
      d: 8 * H,
      bf: 4 * H
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * be,
      Iz: 46.1 * L,
      Iy: 28.2 * L,
      J: 61.3 * L,
      d: 8 * H,
      bf: 6 * H
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * be,
      Iz: 63 * L,
      Iy: 37.5 * L,
      J: 84.6 * L,
      d: 8 * H,
      bf: 6 * H
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * be,
      Iz: 103 * L,
      Iy: 47.1 * L,
      J: 115 * L,
      d: 10 * H,
      bf: 6 * H
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * be,
      Iz: 196 * L,
      Iy: 102 * L,
      J: 249 * L,
      d: 12 * H,
      bf: 8 * H
    }
  ];
  function Ko() {
    const t = {};
    return po.forEach((g, R) => {
      g.type === "W" && (t[g.name] = R);
    }), t;
  }
  function Uo() {
    const t = {};
    return po.forEach((g, R) => {
      g.type === "HSS" && (t[g.name] = R);
    }), t;
  }
  function Sa(t) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: R, elementInputs: E, nodeInputs: W, deformOutputs: _ } = t, G = g.length * 6, D = R.length, B = R.filter((K) => K.length === 2).length, Y = R.filter((K) => K.length >= 3).length, ue = document.createElement("div");
    ue.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${D} (${B} frames, ${Y} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${G}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((K, te) => {
      z += `<tr><td>${te}</td><td>${Ve(K[0])}</td><td>${Ve(K[1])}</td><td>${Ve(K[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', R.forEach((K, te) => {
      var _a3, _b2, _c2, _d2;
      const de = K.length === 2, Le = K.map((Ze) => g[Ze]), _e2 = de ? vo(to(Le[1], Le[0])) : 0, qe = ((_a3 = E.elasticities) == null ? void 0 : _a3.get(te)) ?? 0, Ge = ((_b2 = E.areas) == null ? void 0 : _b2.get(te)) ?? 0, st = ((_c2 = E.momentsOfInertiaZ) == null ? void 0 : _c2.get(te)) ?? 0, je = ((_d2 = E.momentsOfInertiaY) == null ? void 0 : _d2.get(te)) ?? 0;
      z += `<tr><td>${te}</td><td>${de ? "Frame" : "Shell"}</td><td>${K.join(" \u2192 ")}</td>`, z += `<td>${Ve(_e2)}</td><td>${Ve(qe)}</td><td>${Ve(Ge)}</td><td>${Ve(st)}</td><td>${Ve(je)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", B > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += ka(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let K = 0; K < D; K++) {
      const te = R[K], de = te.map((Pt) => g[Pt]);
      if (!(te.length === 2)) continue;
      const _e2 = vo(to(de[1], de[0])), qe = ((_a2 = E.elasticities) == null ? void 0 : _a2.get(K)) ?? 0, Ge = ((_b = E.areas) == null ? void 0 : _b.get(K)) ?? 0, st = ((_c = E.momentsOfInertiaZ) == null ? void 0 : _c.get(K)) ?? 0, je = ((_d = E.momentsOfInertiaY) == null ? void 0 : _d.get(K)) ?? 0, Ze = ((_e = E.shearModuli) == null ? void 0 : _e.get(K)) ?? 0, $e = ((_f = E.torsionalConstants) == null ? void 0 : _f.get(K)) ?? 0;
      let Re = null, Oe = null, Qe = null;
      try {
        Re = en(de, E, K), Oe = tn(de), Qe = jt(Nn(Oe), jt(Re, Oe));
      } catch {
        continue;
      }
      const dt = to(de[1], de[0]), ot = dt[0] / _e2, ft = dt[1] / _e2, wt = dt[2] / _e2;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${K}">\u25B6 Element ${K} \u2014 Nodes ${te[0]} \u2192 ${te[1]}, L = ${Ve(_e2)}</h3>`, z += `<div id="rpt-elem${K}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${Ve(qe)} &nbsp;&nbsp; A = ${Ve(Ge)} &nbsp;&nbsp; I<sub>z</sub> = ${Ve(st)} &nbsp;&nbsp; I<sub>y</sub> = ${Ve(je)} &nbsp;&nbsp; G = ${Ve(Ze)} &nbsp;&nbsp; J = ${Ve($e)}<br/>`, z += `EA/L = ${Ve(qe)}\xB7${Ve(Ge)}/${Ve(_e2)} = <b>${Ve(qe * Ge / _e2)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ve(qe)}\xB7${Ve(st)}/${Ve(_e2)}\xB3 = <b>${Ve(12 * qe * st / _e2 ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ve(qe)}\xB7${Ve(je)}/${Ve(_e2)}\xB3 = <b>${Ve(12 * qe * je / _e2 ** 3)}</b><br/>`, z += `GJ/L = ${Ve(Ze)}\xB7${Ve($e)}/${Ve(_e2)} = <b>${Ve(Ze * $e / _e2)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${Zo(ot)}, m = ${Zo(ft)}, n = ${Zo(wt)}, D = ${Zo(Math.sqrt(ot ** 2 + ft ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += qn(Re, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += qn(Oe, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += qn(Qe, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${te[0]} \u2192 [${te[0] * 6}..${te[0] * 6 + 5}], node ${te[1]} \u2192 [${te[1] * 6}..${te[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${D - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += Ia(R, g.length), z += "<h2>5. Boundary Conditions</h2>";
    const X = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", W.supports && W.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const K of X) z += `<th>${K}</th>`;
      z += "</tr></thead><tbody>", W.supports.forEach((K, te) => {
        z += `<tr><td>${te}</td>`, K.forEach((de, Le) => {
          de && ve.push(te * 6 + Le), z += `<td class="${de ? "fixed" : ""}">${de ? "Fixed" : "Free"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += `<div class="rpt-eq-small">Fixed DOFs: [${ve.join(", ")}] \u2192 ${ve.length} constraints<br/>`, z += `Free DOFs: ${G} \u2212 ${ve.length} = <b>${G - ve.length}</b></div>`, z += "<h3>5.2 Applied Loads</h3>", W.loads && W.loads.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const K = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const te of K) z += `<th>${te}</th>`;
      z += "</tr></thead><tbody>", W.loads.forEach((te, de) => {
        z += `<tr><td>${de}</td>`, te.forEach((Le) => {
          const _e2 = Math.abs(Le) > 1e-10;
          z += `<td class="${_e2 ? "nz" : ""}">${_e2 ? Ve(Le) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", _ == null ? void 0 : _.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const K of X) z += `<th>${K}</th>`;
      z += "</tr></thead><tbody>", _.deformations.forEach((K, te) => {
        z += `<tr><td>${te}</td>`, K.forEach((de) => {
          const Le = Math.abs(de) > 1e-10;
          z += `<td class="${Le ? "nz" : ""}">${Ve(de, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', _ == null ? void 0 : _.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const K of X) z += `<th>${K}</th>`;
      z += "</tr></thead><tbody>", _.reactions.forEach((K, te) => {
        z += `<tr><td>${te}</td>`, K.forEach((de) => {
          const Le = Math.abs(de) > 1e-10;
          z += `<td class="${Le ? "nz-react" : ""}">${Le ? Ve(de, 4) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>7. Internal Forces</h2>", z += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", z += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', z += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', _ == null ? void 0 : _.deformations) {
      const K = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const te of K) z += `<th>${te}<sub>i</sub></th>`;
      for (const te of K) z += `<th>${te}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let te = 0; te < D; te++) {
        const de = R[te];
        if (de.length !== 2) continue;
        const Le = de.map((_e2) => g[_e2]);
        try {
          const _e2 = en(Le, E, te), qe = tn(Le), Ge = [];
          for (const Ze of de) {
            const $e = ((_g = _.deformations) == null ? void 0 : _g.get(Ze)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ge.push(...$e);
          }
          const st = jt(qe, Ge), je = jt(_e2, st);
          z += `<tr><td>${te}</td><td>${de.join("\u2192")}</td>`;
          for (let Ze = 0; Ze < 12; Ze++) {
            const $e = Math.abs(je[Ze]) > 1e-10;
            z += `<td class="${$e ? "nz" : ""}">${Ve(je[Ze], 2)}</td>`;
          }
          z += "</tr>";
        } catch {
        }
      }
      z += "</tbody></table>";
    }
    const re = `
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
    return ue.innerHTML = re + z, (_h = ue.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ue.remove()), ue.querySelectorAll("[data-toggle]").forEach((K) => {
      K.addEventListener("click", () => {
        const te = K.dataset.toggle, de = ue.querySelector(`#rpt-${te}`);
        if (de) {
          const Le = de.style.display !== "none";
          de.style.display = Le ? "none" : "", K.textContent = K.textContent.replace(/^[▼▶]/, Le ? "\u25B6" : "\u25BC");
        }
      });
    }), ue;
  }
  function Ve(t, g = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(g) : t.toFixed(g);
  }
  function Zo(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function qn(t, g) {
    var _a2;
    const R = Math.min(g, 12);
    let E = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let W = 0; W < R; W++) {
      E += "<tr>";
      for (let _ = 0; _ < R; _++) {
        const G = ((_a2 = t[W]) == null ? void 0 : _a2[_]) ?? 0, D = Math.abs(G) < 1e-10;
        E += `<td class="${D ? "z" : ""} ${W === _ && !D ? "diag" : ""}">${D ? "0" : Ea(G)}</td>`;
      }
      E += "</tr>";
    }
    return E += "</table>", g > R && (E += `<div style="color:#888;font-size:9pt">(showing ${R}\xD7${R} of ${g}\xD7${g})</div>`), E += "</div>", E;
  }
  function Ea(t) {
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
      for (let ve = 0; ve <= 80; ve++) {
        const re = ve / 80, K = 30 + re * 540, te = 180 / 2 - B.fn(re) * 60;
        Y += (ve === 0 ? "M" : "L") + `${K.toFixed(1)},${te.toFixed(1)}`;
      }
      D += `<path d="${Y}" fill="none" stroke="${B.color}" stroke-width="2.5"/>`;
      const ue = 0.75, z = 30 + ue * 540 + 8, X = 180 / 2 - B.fn(ue) * 60 - 6;
      D += `<text x="${z}" y="${X}" fill="${B.color}" font-size="11" font-weight="bold" font-family="sans-serif">${B.name}</text>`;
    }
    return D += "</svg>", D;
  }
  function Ia(t, g) {
    const R = g * 6, E = Math.min(R, 30);
    let W = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    W += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', W += "<tr><td></td>";
    for (let G = 0; G < E; G++) W += `<td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
    W += "</tr>";
    const _ = Array.from({
      length: E
    }, () => Array(E).fill(0));
    for (let G = 0; G < t.length; G++) {
      const D = t[G].map((B) => B * 6);
      for (const B of D) for (const Y of D) for (let ue = 0; ue < 6; ue++) for (let z = 0; z < 6; z++) {
        const X = B + ue, ve = Y + z;
        X < E && ve < E && _[X][ve]++;
      }
    }
    for (let G = 0; G < E; G++) {
      W += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${G}</td>`;
      for (let D = 0; D < E; D++) {
        const B = _[G][D], Y = B === 0 ? "#fff" : B === 1 ? "#e8f0fe" : B === 2 ? "#c6dcf5" : "#a0c4e8", ue = B === 0 ? "" : B.toString();
        W += `<td style="background:${Y};color:#003366">${ue}</td>`;
      }
      W += "</tr>";
    }
    return W += "</table></div>", R > E && (W += `<div style="color:#888;font-size:9pt">(showing ${E}\xD7${E} of ${R}\xD7${R})</div>`), W;
  }
  let Fn = false;
  function za(t) {
    if (Fn || window.katex) {
      Fn = true, t();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const R = document.createElement("script");
    R.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", R.onload = () => {
      Fn = true, t();
    }, document.head.appendChild(R);
  }
  function Is(t, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(t, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${t}</code>`;
  }
  function La(t, g, R, E, W, _) {
    var _a2, _b, _c, _d, _e2, _f;
    const G = R[t], D = G.map((Oe) => g[Oe]), B = G.length === 2, Y = B ? vo(to(D[1], D[0])) : 0, ue = ((_a2 = E.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, z = ((_b = E.areas) == null ? void 0 : _b.get(t)) ?? 0, X = ((_c = E.momentsOfInertiaZ) == null ? void 0 : _c.get(t)) ?? 0, ve = ((_d = E.momentsOfInertiaY) == null ? void 0 : _d.get(t)) ?? 0, re = ((_e2 = E.shearModuli) == null ? void 0 : _e2.get(t)) ?? 0, K = ((_f = E.torsionalConstants) == null ? void 0 : _f.get(t)) ?? 0;
    let te = null, de = null, Le = null;
    try {
      te = en(D, E, t), de = tn(D), Le = jt(Nn(de), jt(te, de));
    } catch {
    }
    const _e = B ? to(D[1], D[0]) : [
      0,
      0,
      0
    ], qe = Y > 0 ? _e[0] / Y : 0, Ge = Y > 0 ? _e[1] / Y : 0, st = Y > 0 ? _e[2] / Y : 0, je = Math.sqrt(qe ** 2 + Ge ** 2), Ze = [];
    if ((W == null ? void 0 : W.deformations) && B) for (const Oe of G) {
      const Qe = W.deformations.get(Oe) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ze.push(...Qe);
    }
    let $e = [], Re = [];
    if (Ze.length === 12 && de && te) {
      try {
        $e = jt(de, Ze);
      } catch {
        $e = Array(12).fill(0);
      }
      try {
        Re = jt(te, $e);
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
      E: ue,
      A: z,
      Iz: X,
      Iy: ve,
      G: re,
      J: K,
      kLocal: te,
      T: de,
      kGlobal: Le,
      l: qe,
      m: Ge,
      n: st,
      D: je,
      uGlobal: Ze,
      uLocal: $e,
      fLocal: Re,
      dOut: W,
      aOut: _,
      totalNodes: g.length
    };
  }
  function Ta(t, g, R, E, W, _) {
    var _a2, _b;
    const G = La(t, g, R, E, W, _), D = document.createElement("div");
    return D.className = "er-panel", D.innerHTML = Fa + `
    <div class="er-header">
      <span class="er-badge">Element ${t}</span>
      <span class="er-type">${G.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${G.elem.join(" \u2192 ")} \u2014 L = ${Ae(G.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Ca(G)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${zs(G)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Aa(G)}</div>
  `, D.querySelectorAll(".er-tab").forEach((B) => {
      B.addEventListener("click", () => {
        D.querySelectorAll(".er-tab").forEach((ue) => ue.classList.remove("active")), B.classList.add("active");
        const Y = B.dataset.tab;
        D.querySelectorAll(".er-body").forEach((ue) => ue.style.display = "none"), D.querySelector(`#er-body-${Y}`).style.display = "";
      });
    }), (_a2 = D.querySelector("#er-close")) == null ? void 0 : _a2.addEventListener("click", () => D.remove()), (_b = D.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const B = D.classList.toggle("er-fullscreen-mode"), Y = D.querySelector("#er-fullscreen");
      Y && (Y.textContent = B ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const B = D.querySelector("#er-sf-canvas");
      B && Pn(B);
      const Y = D.querySelector("#er-sf-canvas-math");
      Y && Pn(Y);
    }, 50), za(() => {
      const B = D.querySelector("#er-body-math");
      B && (B.innerHTML = zs(G)), setTimeout(() => {
        const Y = D.querySelector("#er-sf-canvas-math");
        Y && Pn(Y);
      }, 50), D.querySelectorAll(".er-deriv-header").forEach((Y) => {
        Y.addEventListener("click", () => {
          const ue = Y.dataset.toggle, z = D.querySelector(`#er-${ue}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), D;
  }
  function Ca(t) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Ae(t.E)}</td><td>A</td><td>${Ae(t.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Ae(t.Iz)}</td><td>I<sub>y</sub></td><td>${Ae(t.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Ae(t.G)}</td><td>J</td><td>${Ae(t.J)}</td></tr>`, g += "</table>", t.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${t.kLocal.length}\xD7${t.kLocal.length})</div>`, g += Bo(t.kLocal)), t.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += Bo(t.T)), t.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += Bo(t.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', t.uGlobal.length > 0) {
      const R = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let E = 0; E < t.elem.length; E++) {
        g += `<div class="er-sub">Nodo ${t.elem[E]}: `;
        for (let W = 0; W < 6; W++) {
          const _ = t.uGlobal[E * 6 + W];
          g += `${R[W]}=<span class="${Math.abs(_) > 1e-10 ? "nz" : ""}">${Ae(_, 6)}</span> `;
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
      for (const E of R) g += `<th>${E}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(t.fLocal[E]) > 1e-10 ? "nz" : ""}">${Ae(t.fLocal[E], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(t.fLocal[E]) > 1e-10 ? "nz" : ""}">${Ae(t.fLocal[E], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function zs(t) {
    if (!t.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const R = (ue) => Is(ue), E = (ue) => Is(ue, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${E("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${R("\\text{Nodo } i")} = (${t.elmNodes[0].map((ue) => Ae(ue)).join(", ")})<br/>`, g += `${R("\\text{Nodo } j")} = (${t.elmNodes[1].map((ue) => Ae(ue)).join(", ")})<br/>`, g += `${E(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ae(t.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${E("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${E("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${R("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${E("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${R("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${E("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${E("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${E("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${E("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${R("I_z")})</div>`, g += `<div class="er-eq">${E("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${R("I_y")})</div>`, g += `<div class="er-eq">${E("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${E("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${E(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ae(t.E)} \\times ${Ae(t.A)} = \\mathbf{${Ae(t.E * t.A)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ae(t.E)} \\times ${Ae(t.Iz)} = \\mathbf{${Ae(t.E * t.Iz)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ae(t.E)} \\times ${Ae(t.Iy)} = \\mathbf{${Ae(t.E * t.Iy)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ae(t.G)} \\times ${Ae(t.J)} = \\mathbf{${Ae(t.G * t.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${R("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${E("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const W = t.E * t.A / t.L, _ = t.E * t.Iz / t.L ** 3, G = t.E * t.Iy / t.L ** 3, D = t.G * t.J / t.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${E("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${E("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${R("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${E("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ae(t.E)}\\times${Ae(t.A)}}{${Ae(t.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${E(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ae(W)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${R("v(\\xi)")}</p>`, g += `<div class="er-eq">${E("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${E("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${E("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${R("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${E("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${R("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${E("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ae(t.E)} \\times ${Ae(t.Iz)}}{${Ae(t.L)}^3} = \\mathbf{${Ae(12 * _)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${R("\\theta_x")} y ${R("GJ")}:</p>`, g += `<div class="er-eq">${E(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ae(t.G)}\\times${Ae(t.J)}}{${Ae(t.L)}} = \\mathbf{${Ae(D)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${R("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${E("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ae(6 * t.E * t.Iz / t.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${E(`\\frac{EA}{L} = \\mathbf{${Ae(W)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ae(12 * _)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ae(12 * G)}}`)}</div>`, g += `<div class="er-eq">${E(`\\frac{GJ}{L} = \\mathbf{${Ae(D)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ae(4 * t.E * t.Iy / t.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ae(4 * t.E * t.Iz / t.L)}}`)}</div>`, g += `<div class="er-eq">${E(`\\frac{6EI_z}{L^2} = \\mathbf{${Ae(6 * t.E * t.Iz / t.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ae(6 * t.E * t.Iy / t.L ** 2)}}`)}</div>`, t.kLocal && (g += `<div class="er-subsec">Resultado: ${R("\\mathbf{K}_{local}")} (12x12)</div>`, g += Bo(t.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${E(`l = \\frac{x_j - x_i}{L} = ${Qo(t.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Qo(t.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Qo(t.n)}`)}</div>`, g += `<div class="er-eq">${E(`D = \\sqrt{l^2 + m^2} = ${Qo(t.D)}`)}</div>`, Math.abs(t.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${R(`n \\approx ${t.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ue = t.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${E(ue)}</div>`;
    } else g += `<div class="er-eq">${E("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${E("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${R("\\mathbf{K}_{global}")} = ${R("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${E("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, t.kGlobal && (g += Bo(t.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const B = t.elem[0] * 6, Y = t.elem[1] * 6;
    if (g += `<div class="er-eq">${E(`\\text{Nodo } ${t.elem[0]} \\rightarrow \\text{DOFs } [${B} \\ldots ${B + 5}]`)}</div>`, g += `<div class="er-eq">${E(`\\text{Nodo } ${t.elem[1]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, g += `<div class="er-eq">${E("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${E("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${E("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, t.fLocal.length > 0 && t.fLocal.some((ue) => ue !== 0)) {
      const ue = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const z of ue) g += `<th>${z}</th>`;
      g += `</tr><tr><td>i (${t.elem[0]})</td>`;
      for (let z = 0; z < 6; z++) g += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ae(t.fLocal[z], 3)}</td>`;
      g += `</tr><tr><td>j (${t.elem[1]})</td>`;
      for (let z = 6; z < 12; z++) g += `<td class="${Math.abs(t.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ae(t.fLocal[z], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Aa(t) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${t.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${t.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${t.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Ae(t.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Ae(t.E)}</td></tr>`, g += `<tr><td>A</td><td>${Ae(t.A)}</td></tr>`, g += "</table>", t.uGlobal.length > 0) {
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
      for (const E of R) g += `<th>${E}</th>`;
      g += "</tr>";
      for (let E = 0; E < t.elem.length; E++) {
        g += `<tr><td>${t.elem[E]}</td>`;
        for (let W = 0; W < 6; W++) {
          const _ = t.uGlobal[E * 6 + W];
          g += `<td class="${Math.abs(_) > 1e-10 ? "nz" : ""}">${Ae(_, 6)}</td>`;
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
      for (const E of R) g += `<th>${E}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(t.fLocal[E]) > 1e-10 ? "nz" : ""}">${Ae(t.fLocal[E], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(t.fLocal[E]) > 1e-10 ? "nz" : ""}">${Ae(t.fLocal[E], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ae(t, g = 2) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e7 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(g) : t.toFixed(g);
  }
  function Qo(t) {
    return Math.abs(t) < 1e-10 ? "0" : t.toFixed(4);
  }
  function Bo(t) {
    var _a2;
    const g = t.length, R = Math.min(g, 12);
    let E = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let W = 0; W < R; W++) {
      E += "<tr>";
      for (let _ = 0; _ < R; _++) {
        const G = ((_a2 = t[W]) == null ? void 0 : _a2[_]) ?? 0, D = Math.abs(G) < 1e-10;
        E += `<td class="${D ? "z" : ""} ${W === _ && !D ? "diag" : ""}">${D ? "0" : qa(G)}</td>`;
      }
      E += "</tr>";
    }
    return E += "</table>", g > R && (E += `<div style="color:var(--fem-label);font-size:9px">(${R}\xD7${R} de ${g}\xD7${g})</div>`), E += "</div>", E;
  }
  function qa(t) {
    return Math.abs(t) >= 1e6 || Math.abs(t) < 0.01 && t !== 0 ? t.toExponential(1) : Math.abs(t) >= 100 ? t.toFixed(0) : t.toFixed(2);
  }
  function Pn(t) {
    const g = t.getContext("2d");
    if (!g) return;
    const R = t.width, E = t.height, W = 30, _ = R - 2 * W, G = (E - 3 * W) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, R, E);
    const D = (B, Y, ue) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(W, B, _, G), g.strokeStyle = "#444", g.beginPath(), g.moveTo(W, B + G / 2), g.lineTo(W + _, B + G / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(Y, W + 4, B + 14);
      for (const X of ue) {
        g.strokeStyle = X.color, g.lineWidth = 2.5, g.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const re = ve / 100, K = W + re * _, te = B + G / 2 - X.fn(re) * (G / 2 * 0.85);
          ve === 0 ? g.moveTo(K, te) : g.lineTo(K, te);
        }
        g.stroke();
      }
      let z = W + _ - 90;
      for (const X of ue) g.fillStyle = X.color, g.font = "bold 10px sans-serif", g.fillText(X.label, z, B + G - 6), z += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", W, B + G + 12), g.fillText("1", W + _ - 6, B + G + 12), g.fillText("\u03BE", W + _ / 2, B + G + 12);
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
  const Fa = `<style>
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
</style>`, Ho = [
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
  let on = false, yo = null, Wt = null, kt = null, xt = null;
  function Pa() {
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
      on ? Rn() : Oa();
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
  function Oa() {
    on = true, xt && (xt.innerHTML = "\u2715", xt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", xt.style.animation = "none"), yo = document.createElement("div"), yo.id = "tour-overlay", yo.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(yo), Fo(0);
  }
  function Rn() {
    on = false, xt && (xt.innerHTML = "?", xt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", xt.style.animation = "helpPulse 2s infinite"), Wt && (Wt.remove(), Wt = null), kt && (kt.remove(), kt = null), yo && (yo.remove(), yo = null);
  }
  function Fo(t) {
    var _a2, _b;
    if (t >= Ho.length) {
      Na();
      return;
    }
    const g = Ho[t], R = document.querySelector(g.selector);
    if (!R) {
      Fo(t + 1);
      return;
    }
    R.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Wt && Wt.remove(), kt && kt.remove();
    const E = R.getBoundingClientRect(), W = window.innerWidth, _ = window.innerHeight, G = 320, D = 180;
    Wt = document.createElement("div"), Wt.style.cssText = `
    position: fixed;
    left: ${E.left - 6}px; top: ${E.top - 6}px;
    width: ${E.width + 12}px; height: ${E.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Wt);
    const B = W - E.right, Y = E.left, ue = _ - E.bottom, z = E.top;
    let X = g.position || "bottom";
    X === "bottom" && ue < D + 20 && (X = "top"), X === "top" && z < D + 20 && (X = "right"), X === "right" && B < G + 20 && (X = "left"), X === "left" && Y < G + 20 && (X = "bottom");
    let ve, re, K = "";
    switch (X) {
      case "bottom":
        ve = E.left + E.width / 2 - G / 2, re = E.bottom + 14, K = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ve = E.left + E.width / 2 - G / 2, re = E.top - D - 14, K = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ve = E.right + 14, re = E.top + E.height / 2 - D / 2, K = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ve = E.left - G - 14, re = E.top + E.height / 2 - D / 2, K = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ve = Math.max(10, Math.min(ve, W - G - 10)), re = Math.max(10, Math.min(re, _ - D - 10)), kt = document.createElement("div"), kt.style.cssText = `
    position: fixed;
    left: ${ve}px; top: ${re}px;
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
  `, kt.innerHTML = `
    <div style="${K}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${t + 1}/${Ho.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${t > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${t < Ho.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Ho.map((de, Le) => `<div style="width:${Le === t ? "16px" : "6px"};height:6px;border-radius:3px;background:${Le === t ? "#0099ff" : Le < t ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(kt), (_a2 = kt.querySelector("#tour-next")) == null ? void 0 : _a2.addEventListener("click", () => {
      Fo(t + 1);
    }), (_b = kt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Fo(t - 1);
    });
    const te = (de) => {
      if (!on) {
        document.removeEventListener("keydown", te);
        return;
      }
      (de.key === "ArrowRight" || de.key === "Enter") && (Fo(t + 1), document.removeEventListener("keydown", te)), de.key === "ArrowLeft" && (Fo(Math.max(0, t - 1)), document.removeEventListener("keydown", te)), de.key === "Escape" && (Rn(), document.removeEventListener("keydown", te));
    };
    document.addEventListener("keydown", te);
  }
  function Na() {
    var _a2;
    Wt && (Wt.remove(), Wt = null), kt && (kt.remove(), kt = null), kt = document.createElement("div"), kt.style.cssText = `
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
  `, kt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(kt), (_a2 = kt.querySelector("#tour-done")) == null ? void 0 : _a2.addEventListener("click", () => Rn());
  }
  function Ra(t) {
    var _a2;
    const g = t.split(/\r?\n/), R = {
      force: "TONF",
      length: "M"
    }, E = [], W = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = [], B = [], Y = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), z = [], X = [];
    let ve = "", re = "";
    const K = /* @__PURE__ */ new Map();
    for (const ce of g) {
      const Ee = ce.trim();
      if (!Ee || Ee.startsWith("$")) {
        Ee.startsWith("$ ") && (re = Ee.substring(2).trim());
        continue;
      }
      if (re && (K.has(re) || K.set(re, []), K.get(re).push(ce)), re === "CONTROLS") {
        const ne = Ee.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ne && (R.force = ne[1], R.length = ne[2]);
        const Ce = Ee.match(/TITLE2\s+"([^"]+)"/);
        Ce && (ve = Ce[1]);
      }
      if (re === "STORIES - IN SEQUENCE FROM TOP") {
        const ne = Ee.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ne) {
          const Ce = ne[1], V = ne[2] ? parseFloat(ne[2]) : 0, fe = ne[3] ? parseFloat(ne[3]) : void 0;
          E.push({
            name: Ce,
            height: V,
            elev: fe ?? 0
          });
        }
      }
      if (re === "MATERIAL PROPERTIES") {
        const ne = Ee.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ne) {
          const Ce = ne[1];
          W.has(Ce) || W.set(Ce, {
            type: ne[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const V = W.get(Ce);
          ne[2] && (V.type = ne[2]);
          const fe = Ee.match(/\bE\s+([\d.eE+-]+)/);
          fe && (V.E = parseFloat(fe[1]));
          const Fe = Ee.match(/\bU\s+([\d.eE+-]+)/);
          Fe && (V.nu = parseFloat(Fe[1]), V.G = V.E / (2 * (1 + V.nu)));
          const ge = Ee.match(/\bFY\s+([\d.eE+-]+)/);
          ge && (V.fy = parseFloat(ge[1]));
          const He = Ee.match(/\bFC\s+([\d.eE+-]+)/);
          He && (V.fc = parseFloat(He[1]));
          const Ke = Ee.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Ke && (V.density = parseFloat(Ke[1]));
        }
      }
      if (re === "FRAME SECTIONS") {
        const ne = Ee.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ne) {
          const Ce = ne[1];
          _.has(Ce) || _.set(Ce, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const V = _.get(Ce), fe = Ee.match(/MATERIAL\s+"([^"]+)"/);
          fe && (V.material = fe[1]);
          const Fe = Ee.match(/SHAPE\s+"([^"]+)"/);
          Fe && (V.shape = Fe[1]);
          const ge = Ee.match(/\bD\s+([\d.eE+-]+)/);
          ge && (V.D = parseFloat(ge[1]));
          const He = Ee.match(/\bB\s+([\d.eE+-]+)/);
          He && (V.B = parseFloat(He[1]));
          const Ke = Ee.match(/\bTF\s+([\d.eE+-]+)/);
          Ke && (V.TF = parseFloat(Ke[1]));
          const Be = Ee.match(/\bTW\s+([\d.eE+-]+)/);
          Be && (V.TW = parseFloat(Be[1]));
          const tt = Ee.match(/\bR\s+([\d.eE+-]+)/);
          tt && (V.R = parseFloat(tt[1]));
          const ut = Ee.match(/FILLMATERIAL\s+"([^"]+)"/);
          ut && (V.fillMaterial = ut[1]);
          const Je = Ee.match(/I2MOD\s+([\d.eE+-]+)/);
          Je && (V.modI2 = parseFloat(Je[1]));
          const Lt = Ee.match(/I3MOD\s+([\d.eE+-]+)/);
          Lt && (V.modI3 = parseFloat(Lt[1]));
        }
      }
      if (re === "POINT COORDINATES") {
        const ne = Ee.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ne && G.set(ne[1], [
          parseFloat(ne[2]),
          parseFloat(ne[3])
        ]);
      }
      if (re === "LINE CONNECTIVITIES") {
        const ne = Ee.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ne && D.push({
          name: ne[1],
          type: ne[2],
          pt1: ne[3],
          pt2: ne[4],
          nStories: parseInt(ne[5])
        });
      }
      if (re === "POINT ASSIGNS") {
        const ne = Ee.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ne && Y.set(`${ne[1]}@${ne[2]}`, ne[3].split(/\s+/));
      }
      if (re === "LINE ASSIGNS") {
        const ne = Ee.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ne) {
          const Ce = {
            story: ne[2],
            section: ne[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, V = Ee.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          V && (Ce.rigidZone = parseFloat(V[1]));
          const fe = Ee.match(/RELEASE\s+"([^"]+)"/);
          fe && (Ce.releases = fe[1].split(/\s+/));
          const Fe = Ee.match(/ANG\s+([-\d.eE+]+)/);
          Fe && (Ce.angle = parseFloat(Fe[1])), ue.set(`${ne[1]}@${ne[2]}`, Ce);
        }
      }
      if (re === "GRIDS") {
        const ne = Ee.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ne && X.push({
          label: ne[1],
          dir: ne[2],
          coord: parseFloat(ne[3])
        });
      }
      if (re === "FRAME OBJECT LOADS") {
        const ne = Ee.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ne && z.push({
          line: ne[1],
          story: ne[2],
          type: ne[3],
          dir: ne[4],
          lc: ne[5],
          val: parseFloat(ne[6])
        });
      }
      if (re === "AREA CONNECTIVITIES") {
        const ne = Ee.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ne) {
          const Ce = ((_a2 = ne[2].match(/"([^"]+)"/g)) == null ? void 0 : _a2.map((V) => V.replace(/"/g, ""))) || [];
          B.push({
            name: ne[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const te = /* @__PURE__ */ new Map();
    if (E.length > 0) {
      const ce = E.length - 1;
      te.set(E[ce].name, E[ce].elev);
      for (let Ee = ce - 1; Ee >= 0; Ee--) {
        const Ce = te.get(E[Ee + 1].name) + E[Ee].height;
        E[Ee].elev = Ce, te.set(E[Ee].name, Ce);
      }
    }
    const de = [], Le = [], _e = /* @__PURE__ */ new Map(), qe = (ce, Ee) => `${ce}@${Ee}`, Ge = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map();
    for (const ce of D) st.set(ce.name, ce);
    for (const ce of D) for (const [Ee, ne] of ue) {
      if (!Ee.startsWith(ce.name + "@")) continue;
      const Ce = ne.story, V = E.findIndex((fe) => fe.name === Ce);
      if (!(V < 0)) if (ce.type === "COLUMN" || ce.type === "BRACE") {
        Ge.add(qe(ce.pt2, Ce));
        const fe = Math.max(ce.nStories, 1), Fe = Math.min(V + fe, E.length - 1);
        Ge.add(qe(ce.pt1, E[Fe].name));
      } else Ge.add(qe(ce.pt1, Ce)), Ge.add(qe(ce.pt2, Ce));
    }
    for (const [ce] of Y) Ge.add(ce);
    for (const ce of Ge) {
      const [Ee, ne] = ce.split("@"), Ce = G.get(Ee), V = te.get(ne);
      Ce === void 0 || V === void 0 || (de.push([
        Ce[0],
        Ce[1],
        V
      ]), Le.push(ce), _e.set(ce, de.length - 1));
    }
    const je = [], Ze = [], $e = [], Re = [], Oe = /* @__PURE__ */ new Map();
    for (const ce of D) for (const [Ee, ne] of ue) {
      if (!Ee.startsWith(ce.name + "@")) continue;
      const Ce = ne.story, V = E.findIndex((Be) => Be.name === Ce);
      if (V < 0) continue;
      let fe, Fe;
      if (ce.type === "COLUMN" || ce.type === "BRACE") {
        const Be = Math.max(ce.nStories, 1), tt = Math.min(V + Be, E.length - 1);
        fe = qe(ce.pt1, E[tt].name), Fe = qe(ce.pt2, Ce);
      } else fe = qe(ce.pt1, Ce), Fe = qe(ce.pt2, Ce);
      const ge = _e.get(fe), He = _e.get(Fe);
      if (ge === void 0 || He === void 0 || ge === He) continue;
      const Ke = je.length;
      if (je.push([
        ge,
        He
      ]), Ze.push(ce.name), $e.push(ce.type), Re.push(Ce), Oe.set(Ke, ne.section), ne.rigidZone > 0 && Pt.set(Ke, [
        ne.rigidZone,
        ne.rigidZone
      ]), ne.releases.length > 0) {
        const Be = [
          false,
          false,
          false,
          false,
          false,
          false
        ];
        for (const tt of ne.releases) tt === "TI" && (Be[0] = true), tt === "M2I" && (Be[1] = true), tt === "M3I" && (Be[2] = true), tt === "TJ" && (Be[3] = true), tt === "M2J" && (Be[4] = true), tt === "M3J" && (Be[5] = true);
        Nt.set(Ke, Be);
      }
    }
    const Qe = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
    for (const [ce, Ee] of Oe) {
      const ne = _.get(Ee);
      if (!ne) continue;
      const Ce = W.get(ne.material);
      Ce && (Qe.set(ce, Ce.E), dt.set(ce, Ce.G));
      const V = ne.D, fe = ne.B, Fe = ne.TF, ge = ne.TW;
      let He = 0, Ke = 0, Be = 0, tt = 0, ut = 0, Je = 0, Lt = "rect";
      switch (ne.shape) {
        case "Concrete Rectangular":
          He = V * fe, Ke = fe * V ** 3 / 12, Be = V * fe ** 3 / 12, tt = fe * V ** 3 * (1 / 3 - 0.21 * (V / fe) * (1 - V ** 4 / (12 * fe ** 4))), ut = Je = 5 / 6 * He, Lt = "rect";
          break;
        case "Concrete Circle":
          He = Math.PI * V ** 2 / 4, Ke = Be = Math.PI * V ** 4 / 64, tt = Math.PI * V ** 4 / 32, ut = Je = 0.9 * He, Lt = "circ";
          break;
        case "Steel I/Wide Flange":
          He = 2 * fe * Fe + (V - 2 * Fe) * ge, Ke = (fe * V ** 3 - (fe - ge) * (V - 2 * Fe) ** 3) / 12, Be = (2 * Fe * fe ** 3 + (V - 2 * Fe) * ge ** 3) / 12, tt = (2 * fe * Fe ** 3 + (V - 2 * Fe) * ge ** 3) / 3, ut = (V - 2 * Fe) * ge, Je = 2 * fe * Fe * 5 / 6, Lt = "I";
          break;
        case "Steel Tube":
          He = V * fe - (V - 2 * ge) * (fe - 2 * ge), Ke = (fe * V ** 3 - (fe - 2 * ge) * (V - 2 * ge) ** 3) / 12, Be = (V * fe ** 3 - (V - 2 * ge) * (fe - 2 * ge) ** 3) / 12, tt = 2 * ge * (V - ge) * (fe - ge) * ((V - ge) * (fe - ge)) / (V - ge + (fe - ge)), ut = 2 * V * ge, Je = 2 * fe * ge, Lt = "HSS";
          break;
        case "Filled Steel Tube":
          He = V * fe, Ke = fe * V ** 3 / 12, Be = V * fe ** 3 / 12, tt = 2 * ge * (V - ge) * (fe - ge) * ((V - ge) * (fe - ge)) / (V - ge + (fe - ge)), ut = 2 * V * ge + 5 / 6 * (V - 2 * ge) * (fe - 2 * ge), Je = 2 * fe * ge + 5 / 6 * (V - 2 * ge) * (fe - 2 * ge), Lt = "CFT";
          break;
        case "Steel Angle": {
          const yt = Fe || ge;
          He = yt * (V + fe - yt), Ke = yt * (V ** 3 + fe * yt ** 2 + yt ** 2 * (V - yt)) / 12, Be = yt * (fe ** 3 + V * yt ** 2 + yt ** 2 * (fe - yt)) / 12, tt = (V + fe - yt) * yt ** 3 / 3, ut = V * yt, Je = fe * yt, Lt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          He = 2 * fe * Fe + (V - 2 * Fe) * ge, Ke = (ge * V ** 3 + 2 * fe * Fe * (V - Fe) ** 2) / 12, Be = (2 * Fe * fe ** 3 + (V - 2 * Fe) * ge ** 3) / 12, tt = (2 * fe * Fe ** 3 + (V - 2 * Fe) * ge ** 3) / 3, ut = (V - 2 * Fe) * ge, Je = 2 * fe * Fe * 5 / 6, Lt = ne.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          He = 2 * (2 * fe * Fe + (V - 2 * Fe) * ge), Ke = 2 * (ge * V ** 3 + 2 * fe * Fe * (V - Fe) ** 2) / 12, Be = 2 * (2 * Fe * fe ** 3 + (V - 2 * Fe) * ge ** 3) / 12, tt = 2 * (2 * fe * Fe ** 3 + (V - 2 * Fe) * ge ** 3) / 3, ut = 2 * (V - 2 * Fe) * ge, Je = 4 * fe * Fe * 5 / 6, Lt = "2C";
          break;
        default:
          V > 0 && fe > 0 && (He = V * fe, Ke = fe * V ** 3 / 12, Be = V * fe ** 3 / 12, tt = Math.min(V, fe) * Math.max(V, fe) ** 3 / 3 * 0.3, ut = Je = 5 / 6 * He);
          break;
      }
      ne.modI2 && (Be *= ne.modI2), ne.modI3 && (Ke *= ne.modI3), ot.set(ce, He), Tt.set(ce, Ke), zt.set(ce, Be), Mt.set(ce, tt), ut > 0 && ft.set(ce, ut), Je > 0 && wt.set(ce, Je), Te.set(ce, {
        type: Lt,
        b: fe || void 0,
        h: V || void 0,
        d: Lt === "circ" || Lt === "pipe" ? V : void 0,
        tw: ge || void 0,
        tf: Fe || void 0,
        r: ne.R,
        name: Ee
      });
    }
    const vt = /* @__PURE__ */ new Map();
    for (const [ce, Ee] of Y) {
      const ne = _e.get(ce);
      if (ne === void 0) continue;
      const Ce = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const V of Ee) V === "UX" && (Ce[0] = true), V === "UY" && (Ce[1] = true), V === "UZ" && (Ce[2] = true), V === "RX" && (Ce[3] = true), V === "RY" && (Ce[4] = true), V === "RZ" && (Ce[5] = true);
      vt.set(ne, Ce);
    }
    const pt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
    for (let ce = 0; ce < Ze.length; ce++) Ct.set(`${Ze[ce]}@${Re[ce]}`, ce);
    for (const ce of z) {
      const Ee = Ct.get(`${ce.line}@${ce.story}`);
      if (Ee === void 0) continue;
      const [ne, Ce] = je[Ee], V = de[ne], fe = de[Ce], Fe = Math.sqrt((fe[0] - V[0]) ** 2 + (fe[1] - V[1]) ** 2 + (fe[2] - V[2]) ** 2);
      if (Fe < 1e-10) continue;
      const ge = ce.val * Fe / 2;
      let He = 0, Ke = 0, Be = 0;
      ce.dir === "GRAV" || ce.dir === "GRAVITY" ? Be = -ge : ce.dir === "X" ? He = ge : ce.dir === "Y" ? Ke = ge : ce.dir === "Z" && (Be = -ge);
      for (const tt of [
        ne,
        Ce
      ]) {
        const ut = pt.get(tt) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        ut[0] += He, ut[1] += Ke, ut[2] += Be, pt.set(tt, ut);
      }
    }
    const gt = /* @__PURE__ */ new Map();
    for (const [ce, Ee] of Oe) {
      const ne = _.get(Ee);
      if (!ne) continue;
      const Ce = W.get(ne.material);
      (Ce == null ? void 0 : Ce.density) && gt.set(ce, Ce.density);
    }
    return {
      units: R,
      stories: E.reverse(),
      materials: W,
      frameSections: _,
      nodes: de,
      nodeNames: Le,
      nodeNameToIdx: _e,
      elements: je,
      elementNames: Ze,
      elementTypes: $e,
      elementStories: Re,
      elementSections: Oe,
      nodeInputs: {
        supports: vt,
        loads: pt
      },
      elementInputs: {
        elasticities: Qe,
        shearModuli: dt,
        areas: ot,
        momentsOfInertiaZ: Tt,
        momentsOfInertiaY: zt,
        torsionalConstants: Mt,
        shearAreasY: ft,
        shearAreasZ: wt,
        rigidOffsets: Pt,
        momentReleases: Nt,
        densities: gt,
        sectionShapes: Te
      },
      sectionShapes: Te,
      grids: X,
      info: {
        nNodes: de.length,
        nFrames: je.length,
        nAreas: B.length,
        title: ve
      },
      rawSections: K
    };
  }
  function _a(t) {
    const { e2kModel: g } = t, R = g == null ? void 0 : g.rawSections;
    return R && R.size > 0 ? Ha(R) : Ba(t);
  }
  function Ha(t, g) {
    const R = [], E = [
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
    for (const W of E) {
      const _ = t.get(W);
      if (!(!_ || _.length === 0)) {
        R.push(`$ ${W}`);
        for (const G of _) R.push(G);
        R.push("");
      }
    }
    for (const [W, _] of t) if (!E.includes(W) && _.length !== 0) {
      R.push(`$ ${W}`);
      for (const G of _) R.push(G);
      R.push("");
    }
    return R.push("  END"), R.push("$ END OF MODEL FILE"), R.join(`\r
`);
  }
  function Ba(t) {
    var _a2, _b;
    const { nodes: g, elements: R, nodeInputs: E, elementInputs: W, title: _, units: G } = t, D = (G == null ? void 0 : G.force) || "TONF", B = (G == null ? void 0 : G.length) || "M", Y = [], ue = ($e) => Math.round($e * 1e4) / 1e4;
    Y.push("$ File exported from Awatif FEM Studio"), Y.push(""), Y.push("$ PROGRAM INFORMATION"), Y.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), Y.push(""), Y.push("$ CONTROLS"), Y.push(`  UNITS  "${D}"  "${B}"  "C"  `), _ && Y.push(`  TITLE2  "${_}"  `), Y.push("");
    const z = /* @__PURE__ */ new Set();
    g.forEach(($e) => z.add(ue($e[1])));
    const X = [
      ...z
    ].sort(($e, Re) => $e - Re), ve = [], re = /* @__PURE__ */ new Map();
    ve.push("Base"), re.set(X[0], "Base");
    for (let $e = 1; $e < X.length; $e++) {
      const Re = `Level_${$e}`;
      ve.push(Re), re.set(X[$e], Re);
    }
    Y.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let $e = X.length - 1; $e >= 1; $e--) Y.push(`  STORY "${ve[$e]}"  HEIGHT ${ue(X[$e] - X[$e - 1])} MASTERSTORY "Yes"  `);
    X.length > 0 && Y.push(`  STORY "Base"  ELEV ${X[0]} `), Y.push(""), Y.push("$ MATERIAL PROPERTIES");
    const K = /* @__PURE__ */ new Set();
    (_a2 = W.elasticities) == null ? void 0 : _a2.forEach(($e) => K.add($e));
    const te = /* @__PURE__ */ new Map();
    let de = 0;
    for (const $e of K) {
      const Re = `Mat_${++de}`;
      te.set($e, Re), Y.push(`  MATERIAL  "${Re}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), Y.push(`  MATERIAL  "${Re}"    SYMTYPE "Isotropic"  E ${$e}  U 0.2  A 1E-05`);
    }
    Y.push(""), Y.push("$ FRAME SECTIONS");
    const Le = /* @__PURE__ */ new Set(), _e = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
    R.forEach(($e, Re) => {
      var _a3, _b2;
      if ($e.length !== 2) return;
      const Oe = (_a3 = W.sectionShapes) == null ? void 0 : _a3.get(Re), Qe = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(Re)) ?? 0, dt = te.get(Qe) || "Mat_1", ot = (Oe == null ? void 0 : Oe.h) ?? 0, ft = (Oe == null ? void 0 : Oe.b) ?? 0, wt = (Oe == null ? void 0 : Oe.d) ?? 0, Pt = (Oe == null ? void 0 : Oe.tf) ?? 0, Nt = (Oe == null ? void 0 : Oe.tw) ?? 0, Tt = (Oe == null ? void 0 : Oe.type) || "rect", zt = `${Tt}_${ot}_${ft}_${wt}_${Pt}_${Nt}`;
      (Oe == null ? void 0 : Oe.name) && !qe.has(zt) && qe.set(zt, Oe.name);
      let Mt = qe.get(zt);
      if (Mt || (Tt === "rect" ? Mt = `R${ue(ft * 100)}x${ue(ot * 100)}` : Tt === "circ" ? Mt = `C_D${ue(wt * 100)}` : Tt === "I" ? Mt = `I_${ue(ot * 100)}` : Mt = `Sec_${Le.size + 1}`, qe.set(zt, Mt)), _e.set(Re, Mt), Le.has(Mt)) return;
      Le.add(Mt);
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
      let pt = `  FRAMESECTION  "${Mt}"  MATERIAL "${dt}"  SHAPE "${vt}"`;
      ot && (pt += `  D ${ot}`), ft && (pt += `  B ${ft}`), wt && !ot && (pt += `  D ${wt}`), Pt && (pt += `  TF ${Pt}`), Nt && (pt += `  TW ${Nt}`), Y.push(pt);
    }), Y.push("");
    const Ge = /* @__PURE__ */ new Map();
    let st = 0;
    g.forEach(($e) => {
      const Re = `${ue($e[0])},${ue($e[2])}`;
      Ge.has(Re) || Ge.set(Re, `${++st}`);
    }), Y.push("$ POINT COORDINATES");
    for (const [$e, Re] of Ge) {
      const [Oe, Qe] = $e.split(",").map(Number);
      Y.push(`  POINT "${Re}"  ${Oe} ${Qe} `);
    }
    Y.push("");
    const je = ($e) => {
      const Re = g[$e], Oe = `${ue(Re[0])},${ue(Re[2])}`;
      return {
        pt: Ge.get(Oe) || "1",
        story: re.get(ue(Re[1])) || "Base"
      };
    };
    Y.push("$ LINE CONNECTIVITIES");
    const Ze = [];
    return R.forEach(($e, Re) => {
      if ($e.length !== 2) return;
      const Oe = Da(g, $e), Qe = _e.get(Re) || `Sec_${Re}`;
      if (Oe === "BEAM") {
        const dt = je($e[0]), ot = je($e[1]);
        Y.push(`  LINE  "E${Re + 1}"  BEAM  "${dt.pt}"  "${ot.pt}"  0`), Ze.push(`  LINEASSIGN  "E${Re + 1}"  "${dt.story}"  SECTION "${Qe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const dt = g[$e[0]][1] <= g[$e[1]][1] ? $e[0] : $e[1], ot = g[$e[0]][1] <= g[$e[1]][1] ? $e[1] : $e[0];
        je(dt);
        const ft = je(ot), wt = ue(g[dt][1]), Pt = ue(g[ot][1]), Nt = X.indexOf(wt), Tt = X.indexOf(Pt), zt = Math.max(1, Tt >= 0 && Nt >= 0 ? Tt - Nt : 1);
        Y.push(`  LINE  "E${Re + 1}"  ${Oe}  "${ft.pt}"  "${ft.pt}"  ${zt}`);
        for (let Mt = 0; Mt < zt; Mt++) {
          const Te = Tt - Mt;
          Te >= 0 && Te < ve.length && Ze.push(`  LINEASSIGN  "E${Re + 1}"  "${ve[Te]}"  SECTION "${Qe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), Y.push(""), Y.push("$ POINT ASSIGNS"), (_b = E.supports) == null ? void 0 : _b.forEach(($e, Re) => {
      const Oe = [];
      if ($e[0] && Oe.push("UX"), $e[1] && Oe.push("UY"), $e[2] && Oe.push("UZ"), $e[3] && Oe.push("RX"), $e[4] && Oe.push("RY"), $e[5] && Oe.push("RZ"), Oe.length > 0) {
        const Qe = je(Re);
        Y.push(`  POINTASSIGN  "${Qe.pt}"  "${Qe.story}"  RESTRAINT "${Oe.join(" ")}"  `);
      }
    }), Y.push(""), Y.push("$ LINE ASSIGNS"), Ze.forEach(($e) => Y.push($e)), Y.push(""), Y.push("$ LOAD PATTERNS"), Y.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), Y.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), Y.push(""), E.loads && E.loads.size > 0 && (Y.push("$ POINT OBJECT LOADS"), E.loads.forEach(($e, Re) => {
      const [Oe, Qe, dt] = $e, ot = je(Re);
      Math.abs(Oe) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FX ${Oe}`), Math.abs(Qe) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FY ${Qe}`), Math.abs(dt) > 1e-10 && Y.push(`  POINTLOAD  "${ot.pt}"  "${ot.story}"  "Dead"  TYPE "FORCE"  FZ ${dt}`);
    }), Y.push("")), Y.push("  END"), Y.push("$ END OF MODEL FILE"), Y.join(`\r
`);
  }
  function Da(t, g) {
    const R = t[g[0]], E = t[g[1]], W = Math.abs(E[1] - R[1]), _ = Math.sqrt((E[0] - R[0]) ** 2 + (E[2] - R[2]) ** 2), G = W > _ * 0.5;
    return G && _ > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
  }
  function ja(t) {
    var _a2, _b;
    const { nodes: g, elements: R, nodeInputs: E, elementInputs: W } = t, _ = [];
    return _.push("# OpenSeesPy model exported from Awatif FEM Studio"), _.push(`# ${g.length} nodes, ${R.length} elements`), _.push(""), _.push("import openseespy.opensees as ops"), _.push(""), _.push("ops.wipe()"), _.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), _.push(""), _.push("# --- Nodes ---"), g.forEach((G, D) => {
      _.push(`ops.node(${D + 1}, ${G[0]}, ${G[1]}, ${G[2]})`);
    }), _.push(""), _.push("# --- Boundary Conditions ---"), (_a2 = E.supports) == null ? void 0 : _a2.forEach((G, D) => {
      const B = G.map((Y) => Y ? 1 : 0).join(", ");
      _.push(`ops.fix(${D + 1}, ${B})`);
    }), _.push(""), _.push("# --- Geometric Transformations ---"), _.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), _.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), _.push(""), _.push("# --- Elements (elasticBeamColumn) ---"), R.forEach((G, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const B = g[G[0]], Y = g[G[1]], z = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, X = ((_a3 = W.areas) == null ? void 0 : _a3.get(D)) ?? 1, ve = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, re = ((_c = W.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, K = ((_d = W.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, te = ((_e = W.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, de = ((_f = W.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      _.push(`ops.element('elasticBeamColumn', ${D + 1}, ${G[0] + 1}, ${G[1] + 1}, ${X}, ${ve}, ${re}, ${K}, ${te}, ${de}, ${z})`);
    }), _.push(""), E.loads && E.loads.size > 0 && (_.push("# --- Loads ---"), _.push("ops.timeSeries('Linear', 1)"), _.push("ops.pattern('Plain', 1, 1)"), E.loads.forEach((G, D) => {
      const B = G.map((Y) => Y).join(", ");
      _.push(`ops.load(${D + 1}, ${B})`);
    }), _.push("")), _.push("# --- Analysis ---"), _.push("ops.system('BandGeneral')"), _.push("ops.numberer('RCM')"), _.push("ops.constraints('Plain')"), _.push("ops.integrator('LoadControl', 1.0)"), _.push("ops.algorithm('Linear')"), _.push("ops.analysis('Static')"), _.push("ops.analyze(1)"), _.push(""), _.push("# --- Results ---"), _.push('print("\\n=== Displacements ===")'), g.forEach((G, D) => {
      _.push(`print(f"Node {${D + 1}}: {ops.nodeDisp(${D + 1})}")`);
    }), _.push(""), _.push('print("\\n=== Reactions ===")'), _.push("ops.reactions()"), (_b = E.supports) == null ? void 0 : _b.forEach((G, D) => {
      _.push(`print(f"Node {${D + 1}}: {ops.nodeReaction(${D + 1})}")`);
    }), _.join(`
`);
  }
  function Wa(t) {
    var _a2, _b;
    const { nodes: g, elements: R, nodeInputs: E, elementInputs: W } = t, _ = [];
    return _.push("# OpenSees Tcl model exported from Awatif FEM Studio"), _.push(`# ${g.length} nodes, ${R.length} elements`), _.push(""), _.push("wipe"), _.push("model basic -ndm 3 -ndf 6"), _.push(""), _.push("# --- Nodes ---"), g.forEach((G, D) => {
      _.push(`node ${D + 1} ${G[0]} ${G[1]} ${G[2]}`);
    }), _.push(""), _.push("# --- Boundary Conditions ---"), (_a2 = E.supports) == null ? void 0 : _a2.forEach((G, D) => {
      const B = G.map((Y) => Y ? 1 : 0).join(" ");
      _.push(`fix ${D + 1} ${B}`);
    }), _.push(""), _.push("# --- Geometric Transformations ---"), _.push("geomTransf Linear 1 0.0 0.0 1.0"), _.push("geomTransf Linear 2 -1.0 0.0 0.0"), _.push(""), _.push("# --- Elements ---"), R.forEach((G, D) => {
      var _a3, _b2, _c, _d, _e, _f;
      if (G.length !== 2) return;
      const B = g[G[0]], Y = g[G[1]], z = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, X = ((_a3 = W.areas) == null ? void 0 : _a3.get(D)) ?? 1, ve = ((_b2 = W.elasticities) == null ? void 0 : _b2.get(D)) ?? 2e5, re = ((_c = W.shearModuli) == null ? void 0 : _c.get(D)) ?? 8e4, K = ((_d = W.torsionalConstants) == null ? void 0 : _d.get(D)) ?? 1, te = ((_e = W.momentsOfInertiaY) == null ? void 0 : _e.get(D)) ?? 1, de = ((_f = W.momentsOfInertiaZ) == null ? void 0 : _f.get(D)) ?? 1;
      _.push(`element elasticBeamColumn ${D + 1} ${G[0] + 1} ${G[1] + 1} ${X} ${ve} ${re} ${K} ${te} ${de} ${z}`);
    }), _.push(""), E.loads && E.loads.size > 0 && (_.push("# --- Loads ---"), _.push("timeSeries Linear 1"), _.push("pattern Plain 1 1 {"), E.loads.forEach((G, D) => {
      const B = G.map((Y) => Y).join(" ");
      _.push(`  load ${D + 1} ${B}`);
    }), _.push("}"), _.push("")), _.push("# --- Analysis ---"), _.push("system BandGeneral"), _.push("numberer RCM"), _.push("constraints Plain"), _.push("integrator LoadControl 1.0"), _.push("algorithm Linear"), _.push("analysis Static"), _.push("analyze 1"), _.push(""), _.push("# --- Results ---"), _.push('puts "\\n=== Displacements ==="'), g.forEach((G, D) => {
      _.push(`puts "Node ${D + 1}: [nodeDisp ${D + 1}]"`);
    }), _.push('puts "\\n=== Reactions ==="'), _.push("reactions"), (_b = E.supports) == null ? void 0 : _b.forEach((G, D) => {
      _.push(`puts "Node ${D + 1}: [nodeReaction ${D + 1}]"`);
    }), _.join(`
`);
  }
  function Ya(t) {
    const g = [], R = [], E = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
    for (const ve of t.split(/\r?\n/)) {
      const re = ve.trim(), K = re.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (K) {
        const _e = parseInt(K[1]), qe = g.length;
        g.push([
          parseFloat(K[2]),
          parseFloat(K[3]),
          parseFloat(K[4])
        ]), z.set(_e, qe);
        continue;
      }
      const te = re.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (te) {
        const _e = parseInt(te[1]), qe = z.get(_e);
        qe !== void 0 && E.set(qe, [
          te[2] === "1",
          te[3] === "1",
          te[4] === "1",
          te[5] === "1",
          te[6] === "1",
          te[7] === "1"
        ]);
        continue;
      }
      const de = re.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (de) {
        const _e = parseInt(de[1]), qe = z.get(parseInt(de[2])), Ge = z.get(parseInt(de[3]));
        if (qe !== void 0 && Ge !== void 0) {
          const st = R.length;
          R.push([
            qe,
            Ge
          ]), X.set(_e, st), D.set(st, parseFloat(de[4])), _.set(st, parseFloat(de[5])), G.set(st, parseFloat(de[6])), ue.set(st, parseFloat(de[7])), B.set(st, parseFloat(de[8])), Y.set(st, parseFloat(de[9]));
        }
        continue;
      }
      const Le = re.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (Le) {
        const _e = z.get(parseInt(Le[1]));
        _e !== void 0 && W.set(_e, [
          parseFloat(Le[2]),
          parseFloat(Le[3]),
          parseFloat(Le[4]),
          parseFloat(Le[5]),
          parseFloat(Le[6]),
          parseFloat(Le[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: R,
      nodeInputs: {
        supports: E,
        loads: W
      },
      elementInputs: {
        elasticities: _,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: ue
      }
    };
  }
  function Ga(t) {
    const g = [], R = [], E = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const X of t.split(/\r?\n/)) {
      const ve = X.trim();
      if (ve.startsWith("#") || ve.startsWith("//")) continue;
      const re = ve.split(/\s+/);
      if (re[0] === "node" && re.length >= 5) {
        const K = parseInt(re[1]), te = g.length;
        g.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), z.set(K, te);
        continue;
      }
      if (re[0] === "fix" && re.length >= 8) {
        const K = z.get(parseInt(re[1]));
        K !== void 0 && E.set(K, [
          re[2] === "1",
          re[3] === "1",
          re[4] === "1",
          re[5] === "1",
          re[6] === "1",
          re[7] === "1"
        ]);
        continue;
      }
      if (re[0] === "element" && re[1] === "elasticBeamColumn" && re.length >= 12) {
        const K = z.get(parseInt(re[3])), te = z.get(parseInt(re[4]));
        if (K !== void 0 && te !== void 0) {
          const de = R.length;
          R.push([
            K,
            te
          ]), D.set(de, parseFloat(re[5])), _.set(de, parseFloat(re[6])), G.set(de, parseFloat(re[7])), ue.set(de, parseFloat(re[8])), B.set(de, parseFloat(re[9])), Y.set(de, parseFloat(re[10]));
        }
        continue;
      }
      if (re[0] === "load" && re.length >= 8) {
        const K = z.get(parseInt(re[1]));
        K !== void 0 && W.set(K, [
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4]),
          parseFloat(re[5]),
          parseFloat(re[6]),
          parseFloat(re[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: R,
      nodeInputs: {
        supports: E,
        loads: W
      },
      elementInputs: {
        elasticities: _,
        shearModuli: G,
        areas: D,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: ue
      }
    };
  }
  Ls = Ao.state(false);
  Qa = function(t) {
    t.nodeInputs || (t.nodeInputs = Ao.state({})), t.elementInputs || (t.elementInputs = Ao.state({})), t.deformOutputs || (t.deformOutputs = Ao.state({})), t.analyzeOutputs || (t.analyzeOutputs = Ao.state({}));
    let g = "tonf", R = "m", E = xo(g, R), W = {
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
    const Y = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map();
    let z = "", X = {}, ve = null, re = "", K = [], te = [], de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Set(), _e = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map(), st = null, je = [], Ze = 0.2, $e = 2, Re = 2, Oe = false, Qe = 2, dt = "x", ot = /* @__PURE__ */ new Set(), ft = true, wt = 0.15, Pt = 2, Nt = 2, Tt = /* @__PURE__ */ new Set();
    const zt = () => ({
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
    }), Mt = (e, o) => ({
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
      }, zt),
      vigasY: Array.from({
        length: o
      }, zt)
    }), Te = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let vt = 0, pt = 3, Ct = false, gt = 0, ce = null, Ee = 0, ne = [], Ce = 1, V = true;
    const fe = Ma();
    fe.div.style.display = "none";
    function Fe() {
      const e = Xo()[z];
      return e && e[vt] ? e[vt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let ge = [], He = [], Ke = 0, Be = null;
    function tt() {
      if (!Be) return;
      const e = Ue();
      e && e.scene.remove(Be), Be.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Be = null;
    }
    function ut(e, o, n, l, s) {
      tt();
      const c = Ue();
      if (!c) return;
      Be = new Go(), Be.name = "refGrid";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = Math.max(...n), b = i - a || 1, $ = d - u || 1, w = 3359829, v = 2241348;
      for (const h of n) {
        for (const S of o) {
          const I = new Dt().setFromPoints([
            new we(a, h, S),
            new we(i, h, S)
          ]), k = new zo({
            color: w,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new go(I, k);
          O.computeLineDistances(), O.renderOrder = -10, Be.add(O);
        }
        for (const S of e) {
          const I = new Dt().setFromPoints([
            new we(S, h, u),
            new we(S, h, d)
          ]), k = new zo({
            color: w,
            dashSize: $ * 0.015,
            gapSize: $ * 0.01,
            transparent: true,
            opacity: 0.25
          }), O = new go(I, k);
          O.computeLineDistances(), O.renderOrder = -10, Be.add(O);
        }
      }
      for (const h of e) for (const S of o) {
        const I = new Dt().setFromPoints([
          new we(h, 0, S),
          new we(h, r, S)
        ]), k = new zo({
          color: v,
          dashSize: r * 0.01,
          gapSize: r * 8e-3,
          transparent: true,
          opacity: 0.15
        }), O = new go(I, k);
        O.computeLineDistances(), O.renderOrder = -10, Be.add(O);
      }
      const f = Math.min(b, $) * 0.015;
      for (const h of n) for (const S of e) for (const I of o) {
        const k = [
          new we(S - f, h, I),
          new we(S + f, h, I),
          new we(S, h, I - f),
          new we(S, h, I + f)
        ], O = new Dt().setFromPoints(k), y = new To({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), m = new Lo(O, y);
        m.renderOrder = -5, Be.add(m);
      }
      Be.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((S) => {
          S.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), c.scene.add(Be), c.render();
    }
    let Je = null;
    function Lt() {
      if (!Je) return;
      const e = Ue();
      e && e.scene.remove(Je), Je.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Je = null;
    }
    function yt(e, o, n, l, s) {
      Lt();
      const c = Ue();
      if (!c) return;
      Je = new Go(), Je.name = "gridAxes";
      const a = Math.min(...e), i = Math.max(...e), u = Math.min(...o), d = Math.max(...o), r = i - a || 1, b = d - u || 1, $ = Math.max(r, b), w = $ * 0.08, v = l || e.map((m, p) => String.fromCharCode(65 + p)), f = s || o.map((m, p) => String(p + 1)), h = $ * 0.018, S = o.length <= 1, I = 8947848;
      for (let m = 0; m < e.length; m++) {
        const p = e[m];
        if (S) {
          const x = -w - h * 1.5;
          ln(p, 0, 0, p, 0, x + h, I, Je), rn(v[m] || `${m}`, p, 0, x, h, Je);
        } else {
          const x = u - w - h * 1.5;
          ln(p, u, 0, p, x + h, 0, I, Je), rn(v[m] || `${m}`, p, x, 0, h, Je);
        }
      }
      if (!S) for (let m = 0; m < o.length; m++) {
        const p = o[m], x = a - w - h * 1.5;
        ln(a, p, 0, x + h, p, 0, I, Je), rn(f[m] || `${m}`, x, p, 0, h, Je);
      }
      const k = h * 1.8, O = w * 1.2, y = w * 1.2;
      for (let m = 0; m < e.length - 1; m++) {
        const p = e[m], x = e[m + 1], M = Math.abs(x - p), T = (p + x) / 2, N = `${M.toFixed(2)} m`;
        S ? (sn(N, T, 0, -O, k, Je), an(p, 0, -O * 0.7, x, 0, -O * 0.7, 16763904, Je)) : (sn(N, T, u - y, 0, k, Je), an(p, u - y * 0.7, 0, x, u - y * 0.7, 0, 16763904, Je));
      }
      if (!S) for (let m = 0; m < o.length - 1; m++) {
        const p = o[m], x = o[m + 1], M = Math.abs(x - p), T = (p + x) / 2, N = `${M.toFixed(2)} m`;
        sn(N, a - O, T, 0, k, Je), an(a - O * 0.7, p, 0, a - O * 0.7, x, 0, 16763904, Je);
      }
      Je.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((p) => {
          p.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(Je), c.render();
    }
    let At = null;
    function _n() {
      if (!At) return;
      const e = Ue();
      e && e.scene.remove(At), At.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), At = null;
    }
    function nn(e, o, n) {
      if (_n(), e.length === 0) return;
      const l = Ue();
      if (!l) return;
      At = new Go(), At.name = "storyLevels";
      const s = Math.min(...o), c = Math.max(...o), a = Math.min(...n), i = Math.max(...n), u = c - s || 1, d = i - a || 1, r = Math.max(u, d), b = r * 0.06, $ = n.length <= 1, w = 4491519, v = r * 0.015;
      for (const f of e) {
        const h = f.elev;
        $ ? (Po(s - b, 0, h, c + b, 0, h, w, At), Hn(f.name, c + b * 1.5, 0, h, v, At)) : (Po(s, a, h, c, a, h, w, At), Po(c, a, h, c, i, h, w, At), Po(c, i, h, s, i, h, w, At), Po(s, i, h, s, a, h, w, At), Hn(f.name, s - b * 1.5, a, h, v, At));
      }
      At.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(At), l.render();
    }
    function Po(e, o, n, l, s, c, a, i) {
      const u = Math.sqrt((l - e) ** 2 + (s - o) ** 2 + (c - n) ** 2) || 1, d = new Dt().setFromPoints([
        new we(e, o, n),
        new we(l, s, c)
      ]), r = new zo({
        color: a,
        dashSize: u * 0.02,
        gapSize: u * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new go(d, r);
      b.computeLineDistances(), b.renderOrder = 50, i.add(b);
    }
    function Hn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 512, u = 64;
      a.width = i, a.height = u;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(30,60,120,0.8)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(i - r, 0), d.quadraticCurveTo(i, 0, i, r), d.lineTo(i, u - r), d.quadraticCurveTo(i, u, i - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#88bbff", d.font = "bold 38px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, i / 2, u / 2);
      const b = new An(a);
      b.needsUpdate = true;
      const $ = new Vo({
        map: b,
        depthTest: false,
        transparent: true
      }), w = new Jo($);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, c.add(w);
    }
    function sn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 256, u = 64;
      a.width = i, a.height = u;
      const d = a.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(i - r, 0), d.quadraticCurveTo(i, 0, i, r), d.lineTo(i, u - r), d.quadraticCurveTo(i, u, i - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, i / 2, u / 2);
      const b = new xa(a);
      b.minFilter = va;
      const $ = new Vo({
        map: b,
        transparent: true,
        depthTest: false
      }), w = new Jo($);
      w.position.set(o, n, l);
      const v = i / u;
      w.scale.set(s * v, s, 1), w.renderOrder = 999, c.add(w);
    }
    function an(e, o, n, l, s, c, a, i) {
      const u = [
        new we(e, o, n),
        new we(l, s, c)
      ], d = new Dt().setFromPoints(u), r = new To({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new go(d, r);
      b.renderOrder = 998, i.add(b);
    }
    function ln(e, o, n, l, s, c, a, i) {
      const u = new Dt().setFromPoints([
        new we(e, o, n),
        new we(l, s, c)
      ]), d = new zo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - e), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - e), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), r = new go(u, d);
      r.computeLineDistances(), i.add(r);
    }
    function rn(e, o, n, l, s, c) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const u = a.getContext("2d");
      u.beginPath(), u.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = i * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${i * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(e, i / 2, i / 2 + i * 0.02);
      const d = new An(a);
      d.needsUpdate = true;
      const r = new Vo({
        map: d,
        depthTest: false,
        transparent: true
      }), b = new Jo(r);
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
        ]), t.nodes.val = l, console.log(`Node ${s} at (${e}, ${o}, ${n})`), Ye(), s;
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
        t.nodes.val = o, t.elements.val = n, console.log(`Node ${e} removed`), Ye();
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
        ]), t.elements.val = n, console.log(`Element ${l}: node ${e} -> node ${o}`), Ye(), l;
      },
      removeFrame(e) {
        const o = [
          ...t.elements.val
        ];
        if (e < 0 || e >= o.length) {
          console.error(`Element ${e} not found`);
          return;
        }
        o.splice(e, 1), t.elements.val = o, console.log(`Element ${e} removed`), Ye();
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
        ]), n.supports = l, t.nodeInputs.val = n, console.log(`Support added at node ${e}`), Ye();
      },
      removeSupport(e) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(e), o.supports = n, t.nodeInputs.val = o, console.log(`Support removed from node ${e}`), Ye();
      },
      addLoad(e, o) {
        if (!t.nodeInputs) return;
        const n = {
          ...t.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(e, o), n.loads = l, t.nodeInputs.val = n, console.log(`Load added at node ${e}: [${o.join(", ")}]`), Ye();
      },
      removeLoad(e) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(e), o.loads = n, t.nodeInputs.val = o, console.log(`Load removed from node ${e}`), Ye();
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
        const n = he.querySelectorAll("input[type=checkbox]");
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
        const e = he.querySelectorAll("input[type=checkbox]"), o = {};
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
          tt(), console.log("Reference grid cleared");
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
        ut(l, s, c), ge = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), He = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), Ke = c[c.length - 1], yt(ge.map((a) => a.coord), He.map((a) => a.coord), Ke, ge.map((a) => a.label), He.map((a) => a.label));
        {
          const a = c.map((i, u) => ({
            name: u === 0 ? "Base" : `P${u}`,
            height: u > 0 ? i - c[u - 1] : 0,
            elev: i
          }));
          nn(a, ge.map((i) => i.coord), He.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${c}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: c
        };
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
        const v = b.length, f = $.length, h = w.length, S = l.length, I = [], k = {};
        for (let J = 0; J < h; J++) for (let me = 0; me < f; me++) for (let Ie = 0; Ie < v; Ie++) k[`${Ie},${J},${me}`] = I.length, I.push([
          b[Ie],
          w[J],
          $[me]
        ]);
        const O = [], y = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
        for (let J = 0; J < S; J++) for (let me = 0; me < f; me++) for (let Ie = 0; Ie < v; Ie++) {
          const oe = O.length;
          O.push([
            k[`${Ie},${J},${me}`],
            k[`${Ie},${J + 1},${me}`]
          ]), y.add(oe), p.set(oe, J);
        }
        for (let J = 1; J < h; J++) for (let me = 0; me < f; me++) for (let Ie = 0; Ie < v - 1; Ie++) {
          const oe = O.length;
          O.push([
            k[`${Ie},${J},${me}`],
            k[`${Ie + 1},${J},${me}`]
          ]), m.add(oe), p.set(oe, J - 1);
        }
        for (let J = 1; J < h; J++) for (let me = 0; me < v; me++) for (let Ie = 0; Ie < f - 1; Ie++) {
          const oe = O.length;
          O.push([
            k[`${me},${J},${Ie}`],
            k[`${me},${J},${Ie + 1}`]
          ]), m.add(oe), p.set(oe, J - 1);
        }
        const M = 15100 * Math.sqrt(a) * 10, T = M / (2 * (1 + 0.2)), N = i * u, C = i * u ** 3 / 12, A = u * i ** 3 / 12, P = i * u * (i ** 2 + u ** 2) / 12, q = d * r, Q = d * r ** 3 / 12, ee = r * d ** 3 / 12, ae = d * r * (d ** 2 + r ** 2) / 12, se = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
        for (let J = 0; J < O.length; J++) se.set(J, M), U.set(J, T), y.has(J) ? (le.set(J, N), Se.set(J, C), Ne.set(J, A), Pe.set(J, P), ie.set(J, {
          type: "rect",
          b: i,
          h: u,
          name: `COL${s}`
        })) : (le.set(J, q), Se.set(J, Q), Ne.set(J, ee), Pe.set(J, ae), ie.set(J, {
          type: "rect",
          b: d,
          h: r,
          name: `V${c}`
        }));
        const xe = /* @__PURE__ */ new Map();
        for (let J = 0; J < f; J++) for (let me = 0; me < v; me++) xe.set(k[`${me},0,${J}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        t.nodes.val = I, t.elements.val = O, t.nodeInputs.val = {
          supports: xe,
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {
          elasticities: se,
          shearModuli: U,
          areas: le,
          momentsOfInertiaZ: Se,
          momentsOfInertiaY: Ne,
          torsionalConstants: Pe,
          sectionShapes: ie
        }, de = y, Le = m, qe = p, ge = b.map((J, me) => ({
          label: String.fromCharCode(65 + me),
          coord: J
        })), He = $.map((J, me) => ({
          label: `${me + 1}`,
          coord: J
        })), Ke = w[w.length - 1], yt(ge.map((J) => J.coord), He.map((J) => J.coord), Ke, ge.map((J) => J.label), He.map((J) => J.label));
        {
          const J = w.map((me, Ie) => ({
            name: Ie === 0 ? "Base" : `P${Ie}`,
            height: Ie > 0 ? me - w[Ie - 1] : 0,
            elev: me
          }));
          nn(J, b, $);
        }
        const Me = he.querySelector("#cad3d-axis-buttons");
        if (Me) {
          Me.style.display = "flex";
          const J = ge.map((Ie) => Ie.label), me = He.map((Ie) => Ie.label);
          Me.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ie of J) Me.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ie}">${Ie}</button>`;
          Me.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ie of me) Me.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ie}">${Ie}</button>`;
        }
        const pe = he.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let J = 0; J < S; J++) pe.innerHTML += `<button class="floor-btn" data-floor="${J}">P${J + 1}</button>`;
        }
        return ut(b, $, w), Ye(), console.log(`Model3D: ${I.length}n ${O.length}e | ${v}x${f} grid, ${S} floors | COL${s} V${c} f'c=${a}`), {
          nodes: I.length,
          elements: O.length,
          columns: y.size,
          beams: m.size
        };
      },
      clear() {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs && (t.nodeInputs.val = {}), t.elementInputs && (t.elementInputs.val = {}), de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map(), ge = [], He = [], Ke = 0, Lt(), _n(), tt();
        const e = he.querySelector("#cad3d-axis-buttons");
        e && (e.style.display = "none", e.innerHTML = ""), console.log("Model cleared"), Ye();
      },
      frame(e, o, n = 0, l = 0) {
        We.clear();
        const s = [];
        n > 0 && s.push(-n);
        let c = 0;
        s.push(c);
        for (const v of e) c += v, s.push(c);
        l > 0 && s.push(c + l);
        const a = [
          0
        ];
        let i = 0;
        for (const v of o) i += v, a.push(i);
        const u = (v) => n > 0 && v === 0 || l > 0 && v === s.length - 1, d = {}, r = [];
        for (let v = 0; v < a.length; v++) for (let f = 0; f < s.length; f++) v === 0 && u(f) || (d[`${f},${v}`] = r.length, r.push([
          s[f],
          0,
          a[v]
        ]));
        const b = [];
        de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Set();
        for (let v = 0; v < a.length - 1; v++) for (let f = 0; f < s.length; f++) u(f) || (de.add(b.length), b.push([
          d[`${f},${v}`],
          d[`${f},${v + 1}`]
        ]));
        for (let v = 1; v < a.length; v++) for (let f = 0; f < s.length - 1; f++) Le.add(b.length), b.push([
          d[`${f},${v}`],
          d[`${f + 1},${v}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), w = Fe();
        for (let v = 0; v < s.length; v++) {
          if (u(v)) continue;
          const f = `${v},0`;
          d[f] !== void 0 && $.set(d[f], [
            ...w
          ]);
        }
        return t.nodes.val = r, t.elements.val = b, t.nodeInputs && (t.nodeInputs.val = {
          supports: $
        }), ge = [
          ...s
        ], He = [
          0
        ], Ke = a[a.length - 1] || 0, setTimeout(() => {
          $t(), yt(s, [
            0
          ]), xn(), vn();
        }, 50), Ye(), {
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
        const $ = (p) => s > 0 && p === 0 || c > 0 && p === d.length - 1, w = (p) => a > 0 && p === 0 || i > 0 && p === r.length - 1, v = (p, x) => $(p) || w(x), f = [], h = {};
        for (let p = 0; p < b.length; p++) for (let x = 0; x < r.length; x++) for (let M = 0; M < d.length; M++) p === 0 && v(M, x) || (h[`${M},${x},${p}`] = f.length, f.push([
          d[M],
          r[x],
          b[p]
        ]));
        const S = f.length, I = [];
        de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map();
        const k = [];
        for (let p = 0; p < b.length - 1; p++) for (let x = 0; x < r.length; x++) for (let M = 0; M < d.length; M++) v(M, x) || k.push({
          el: [
            h[`${M},${x},${p}`],
            h[`${M},${x},${p + 1}`]
          ],
          floor: p
        });
        for (const { el: [p, x], floor: M } of k) {
          if (u <= 1) {
            de.add(I.length), qe.set(I.length, M), I.push([
              p,
              x
            ]);
            continue;
          }
          const T = f[p], N = f[x];
          let C = p;
          for (let A = 1; A < u; A++) {
            const P = A / u, q = f.length;
            f.push([
              T[0] + (N[0] - T[0]) * P,
              T[1] + (N[1] - T[1]) * P,
              T[2] + (N[2] - T[2]) * P
            ]), de.add(I.length), qe.set(I.length, M), I.push([
              C,
              q
            ]), C = q;
          }
          de.add(I.length), qe.set(I.length, M), I.push([
            C,
            x
          ]);
        }
        Ge = /* @__PURE__ */ new Map();
        const O = [];
        for (let p = 1; p < b.length; p++) for (let x = 0; x < r.length; x++) for (let M = 0; M < d.length - 1; M++) O.push({
          el: [
            h[`${M},${x},${p}`],
            h[`${M + 1},${x},${p}`]
          ],
          floor: p - 1,
          dir: "x",
          bay: M
        });
        for (let p = 1; p < b.length; p++) for (let x = 0; x < d.length; x++) for (let M = 0; M < r.length - 1; M++) O.push({
          el: [
            h[`${x},${M},${p}`],
            h[`${x},${M + 1},${p}`]
          ],
          floor: p - 1,
          dir: "y",
          bay: M
        });
        for (const { el: [p, x], floor: M, dir: T, bay: N } of O) {
          const C = f[p], A = f[x];
          let P = p;
          for (let Q = 1; Q < l; Q++) {
            const ee = Q / l, ae = f.length;
            f.push([
              C[0] + (A[0] - C[0]) * ee,
              C[1] + (A[1] - C[1]) * ee,
              C[2] + (A[2] - C[2]) * ee
            ]);
            const se = I.length;
            Le.add(se), qe.set(se, M), Ge.set(se, {
              dir: T,
              bay: N
            }), I.push([
              P,
              ae
            ]), P = ae;
          }
          const q = I.length;
          Le.add(q), qe.set(q, M), Ge.set(q, {
            dir: T,
            bay: N
          }), I.push([
            P,
            x
          ]);
        }
        if (ot = /* @__PURE__ */ new Set(), Oe && Qe > 0) {
          const p = (x, M, T) => {
            for (let C = 0; C < f.length; C++) if (Math.abs(f[C][0] - x) < 1e-6 && Math.abs(f[C][1] - M) < 1e-6 && Math.abs(f[C][2] - T) < 1e-6) return C;
            const N = f.length;
            return f.push([
              x,
              M,
              T
            ]), N;
          };
          for (let x = 1; x < b.length; x++) if (dt === "x") for (let M = 0; M < r.length - 1; M++) {
            const T = r[M], N = r[M + 1];
            for (let C = 1; C <= Qe; C++) {
              const A = T + C / (Qe + 1) * (N - T), P = [];
              for (let q = 0; q < d.length; q++) P.push(p(d[q], A, b[x]));
              for (let q = 0; q < d.length - 1; q++) {
                const Q = I.length;
                ot.add(Q), Le.add(Q), qe.set(Q, x - 1), Ge.set(Q, {
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
            const T = d[M], N = d[M + 1];
            for (let C = 1; C <= Qe; C++) {
              const A = T + C / (Qe + 1) * (N - T), P = [];
              for (let q = 0; q < r.length; q++) P.push(p(A, r[q], b[x]));
              for (let q = 0; q < r.length - 1; q++) {
                const Q = I.length;
                ot.add(Q), Le.add(Q), qe.set(Q, x - 1), Ge.set(Q, {
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
        const y = /* @__PURE__ */ new Map(), m = Fe();
        for (let p = 0; p < r.length; p++) for (let x = 0; x < d.length; x++) v(x, p) || y.set(h[`${x},${p},0`], [
          ...m
        ]);
        _e = /* @__PURE__ */ new Set();
        for (const p of je) {
          const x = b.length - 1, M = p.floors.includes(-1) ? Array.from({
            length: x
          }, (T, N) => N) : p.floors.filter((T) => T < x);
          for (const T of M) {
            let N, C, A, P;
            p.dir === "x" ? (N = p.bay, A = p.bay + 1, C = p.axisIdx, P = p.axisIdx) : (N = p.axisIdx, A = p.axisIdx, C = p.bay, P = p.bay + 1);
            const q = h[`${N},${C},${T}`], Q = h[`${N},${C},${T + 1}`];
            let ee, ae;
            if (p.dir === "x" ? (ee = h[`${A},${P},${T}`], ae = h[`${A},${P},${T + 1}`]) : (ee = h[`${A},${P},${T}`], ae = h[`${A},${P},${T + 1}`]), q === void 0 || ee === void 0 || Q === void 0 || ae === void 0) continue;
            const se = Re, U = $e, le = f[q], Se = f[ee], Ne = f[Q], Pe = f[ae], ie = [];
            for (let xe = 0; xe <= U; xe++) {
              const Me = [], pe = xe / U;
              for (let J = 0; J <= se; J++) {
                const me = J / se, Ie = (1 - pe) * ((1 - me) * le[0] + me * Se[0]) + pe * ((1 - me) * Ne[0] + me * Pe[0]), oe = (1 - pe) * ((1 - me) * le[1] + me * Se[1]) + pe * ((1 - me) * Ne[1] + me * Pe[1]), ze = (1 - pe) * ((1 - me) * le[2] + me * Se[2]) + pe * ((1 - me) * Ne[2] + me * Pe[2]);
                xe === 0 && J === 0 ? Me.push(q) : xe === 0 && J === se ? Me.push(ee) : xe === U && J === 0 ? Me.push(Q) : xe === U && J === se ? Me.push(ae) : (Me.push(f.length), f.push([
                  Ie,
                  oe,
                  ze
                ]));
              }
              ie.push(Me);
            }
            for (let xe = 0; xe < U; xe++) for (let Me = 0; Me < se; Me++) {
              const pe = ie[xe][Me], J = ie[xe][Me + 1], me = ie[xe + 1][Me + 1], Ie = ie[xe + 1][Me], oe = I.length;
              _e.add(oe), qe.set(oe, T), I.push([
                pe,
                J,
                me,
                Ie
              ]);
            }
            if (T === 0) for (let xe = 0; xe <= se; xe++) {
              const Me = ie[0][xe];
              Me >= S && y.set(Me, [
                ...m
              ]);
            }
          }
        }
        if (Tt = /* @__PURE__ */ new Set(), ft) {
          const p = l, x = l, M = /* @__PURE__ */ new Map(), T = (N, C, A) => `${Math.round(N * 1e4)},${Math.round(C * 1e4)},${Math.round(A * 1e4)}`;
          for (let N = 0; N < f.length; N++) M.set(T(f[N][0], f[N][1], f[N][2]), N);
          for (let N = 1; N < b.length; N++) {
            const C = b[N];
            for (let A = 0; A < d.length - 1; A++) for (let P = 0; P < r.length - 1; P++) {
              const q = d[A], Q = d[A + 1], ee = r[P], ae = r[P + 1], se = [];
              for (let U = 0; U <= x; U++) {
                const le = [];
                for (let Se = 0; Se <= p; Se++) {
                  const Ne = q + Se / p * (Q - q), Pe = ee + U / x * (ae - ee);
                  if (U === 0 && Se === 0) le.push(h[`${A},${P},${N}`]);
                  else if (U === 0 && Se === p) le.push(h[`${A + 1},${P},${N}`]);
                  else if (U === x && Se === 0) le.push(h[`${A},${P + 1},${N}`]);
                  else if (U === x && Se === p) le.push(h[`${A + 1},${P + 1},${N}`]);
                  else {
                    const ie = T(Ne, Pe, C), xe = M.get(ie);
                    if (xe !== void 0) le.push(xe);
                    else {
                      const Me = f.length;
                      f.push([
                        Ne,
                        Pe,
                        C
                      ]), M.set(ie, Me), le.push(Me);
                    }
                  }
                }
                se.push(le);
              }
              for (let U = 0; U < x; U++) for (let le = 0; le < p; le++) {
                const Se = se[U][le], Ne = se[U][le + 1], Pe = se[U + 1][le + 1], ie = se[U + 1][le], xe = I.length;
                Tt.add(xe), qe.set(xe, N - 1), I.push([
                  Se,
                  Ne,
                  Pe,
                  ie
                ]);
              }
            }
          }
        }
        return t.nodes.val = f, t.elements.val = I, t.nodeInputs && (t.nodeInputs.val = {
          supports: y
        }), ge = [
          ...d
        ], He = [
          ...r
        ], Ke = b[b.length - 1] || 0, setTimeout(() => {
          $t(), yt(d, r), xn(), vn();
        }, 50), Ye(), {
          nodes: f.length,
          elements: I.length,
          nJointNodes: S
        };
      },
      galpon(e = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        We.clear();
        const a = [], i = [], u = (w) => n + l * (1 - Math.pow(2 * w / e - 1, 2)), d = [], r = c + 1;
        for (let w = 0; w < r; w++) {
          const v = [], f = o / c * w;
          v.push(a.length), a.push([
            0,
            f,
            0
          ]), v.push(a.length), a.push([
            e,
            f,
            0
          ]), v.push(a.length), a.push([
            0,
            f,
            n
          ]);
          for (let h = 1; h < s; h++) {
            const S = e / s * h;
            v.push(a.length), a.push([
              S,
              f,
              u(S)
            ]);
          }
          v.push(a.length), a.push([
            e,
            f,
            n
          ]), d.push(v);
        }
        for (let w = 0; w < r; w++) {
          const v = d[w];
          i.push([
            v[0],
            v[2]
          ]), i.push([
            v[1],
            v[v.length - 1]
          ]);
          for (let f = 2; f < v.length - 1; f++) i.push([
            v[f],
            v[f + 1]
          ]);
        }
        for (let w = 0; w < c; w++) for (let v = 2; v < d[0].length; v++) i.push([
          d[w][v],
          d[w + 1][v]
        ]);
        for (let w = 0; w < c; w++) for (let v = 2; v < d[0].length - 1; v += 2) i.push([
          d[w][v],
          d[w + 1][v + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), $ = Fe();
        for (let w = 0; w < r; w++) b.set(d[w][0], [
          ...$
        ]), b.set(d[w][1], [
          ...$
        ]);
        return t.nodes.val = a, t.elements.val = i, t.nodeInputs && (t.nodeInputs.val = {
          supports: b
        }), Ye(), {
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
            We.clear(), Xe("truss"), jn();
            break;
          }
          case "beams": {
            We.clear(), Xe("beams"), Wn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            We.clear(), Xe("3d"), Yn();
            break;
          }
          case "portico": {
            Xe("frame"), ye();
            break;
          }
          case "edificio": {
            Xe("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, je = [], ft = false, Oe = false, ye();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Xe("edificio"), Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, je = [], Oe = true, Qe = 2;
            const o = K.reduce((l, s) => l + s, 0) / K.length, n = te.reduce((l, s) => l + s, 0) / te.length;
            dt = o >= n ? "y" : "x", ft = true, wt = 0.08, ye();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Xe("edificio"), Te.colMat = 0, Te.vigaMat = 0, Te.colShape = 0, Oe = false;
            const o = Math.round(((_a2 = X.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = X.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], ft = true, wt = 0.15, ye();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Xe("edificio"), Te.colMat = 2, Te.vigaMat = 0, Oe = false;
            const o = Math.round(((_c = X.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = X.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            ], ft = true, wt = 0.12, ye();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Xe("edificio"), X.nPisos && (X.nPisos.val = 1), X.hPiso && (X.hPiso.val = 4.5), X.nVanosX && (X.nVanosX.val = 3), X.nVanosY && (X.nVanosY.val = 2), X.nSubViga && (X.nSubViga.val = 3), K = [
              6,
              6,
              6
            ], te = [
              5,
              5
            ], Te.colMat = 1, Te.vigaMat = 1, Te.steelColType = 0, Te.steelVigaType = 0, je = [], Oe = true, Qe = 2, dt = K[0] >= te[0] ? "y" : "x", ft = true, wt = 0.08, Pt = 3, Nt = 3, ye();
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
            We.clear(), Xe("placa-3q"), Gn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            We.clear(), Xe("placa-q4"), Jn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            We.clear(), Xe("losa-rect"), Vn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            We.clear(), Xe("losa-plana"), Xn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            We.clear(), Xe("viga-alta"), Kn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            We.clear(), Xe("muro-contencion"), Un();
            break;
          }
          case "zapata":
          case "footing": {
            We.clear(), Xe("zapata"), Zn();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            We.clear(), Xe("placa-orificios"), Qn();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            We.clear(), Xe("col-placa"), es();
            break;
          }
          case "talud":
          case "slope": {
            We.clear(), Xe("talud"), ts();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            We.clear(), Xe("eiffel"), hs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            We.clear(), Xe("arco"), xs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            We.clear(), Xe("puente"), vs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            We.clear(), Xe("twisted"), ys();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            We.clear(), Xe("burj"), $s();
            break;
          }
          case "opera":
          case "sydney-opera": {
            We.clear(), Xe("opera"), ws();
            break;
          }
          case "diagrid":
          case "gherkin": {
            We.clear(), Xe("diagrid"), Ms();
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
        const v = $.nodeResults.map((k) => [
          k.x,
          k.y,
          0
        ]), f = $.elementResults.map((k) => [
          ...k.nodes
        ]);
        t.nodes.val = v, t.elements.val = f;
        const h = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((k, O) => {
          h.set(O, [
            0,
            0,
            k.w,
            k.bx,
            k.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: h
        });
        const S = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((k, O) => {
          (k.x < 1e-10 || k.x > e - 1e-10 || k.y < 1e-10 || k.y > o - 1e-10) && S.set(O, [
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
          const k = c * e * o / v.length;
          v.forEach((O, y) => {
            S.has(y) || I.set(y, [
              0,
              0,
              k,
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
          const k = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
          $.elementResults.forEach((m, p) => {
            k.set(p, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), O.set(p, [
              m.Myy,
              m.Myy,
              m.Myy
            ]), y.set(p, [
              m.Mxy,
              m.Mxy,
              m.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: k,
            bendingYY: O,
            bendingXY: y
          };
        }
        return setTimeout(() => $t(), 50), Ye(), $;
      },
      set(e, o) {
        X[e] ? (X[e].val = o, console.log(`${e} = ${o}`), Gt(), ye()) : et[e] ? (et[e].val = o, console.log(`${e} = ${o}`), Gt(), ye()) : console.error(`Par\xE1metro "${e}" no encontrado. Disponibles: ${Object.keys({
          ...X,
          ...et
        }).join(", ")}`);
      },
      get(e) {
        if (!e) {
          const o = {};
          for (const l in X) o[l] = X[l].val;
          for (const l in et) o[l] = et[l].val;
          o.plateTheory = pt, o.supportType = vt;
          const n = Xo()[z];
          return n && n[vt] && (o.supportLabel = n[vt].label), console.table(o), o;
        }
        if (X[e]) return X[e].val;
        if (et[e]) return et[e].val;
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
        }[pt] || pt}`), z.includes("placa") && (Gt(), ye());
      },
      setBc(e) {
        const o = Xo()[z];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof e == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(e.toLowerCase()));
          e = n >= 0 ? n : 0;
        }
        vt = e, vt >= o.length && (vt = 0), console.log(`Apoyo: ${o[vt].label} \u2192 DOFs: [${o[vt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Gt(), ye();
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
        e && (g = e), o && (R = o), E = xo(g, R);
        const n = he.querySelector("#cad3d-force-unit"), l = he.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = R), z && Xe(z), console.log(`Unidades: ${E.label} | E=${E.E.toExponential(3)} ${E.stress}`), E.id;
      },
      view(e) {
      },
      get mesh() {
        return t;
      }
    };
    function Bn() {
      return $a(E);
    }
    function Dn() {
      return wa(E);
    }
    let et = {};
    function Xe(e) {
      var _a2, _b;
      z = e, Ls.val = true, vt = 0, Ee && un(), X = {};
      const o = Bn()[e];
      if (o) for (const l of o) X[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      et = {};
      const n = Dn()[e];
      if (n) for (const l of n) et[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (e === "edificio") {
        const l = Math.round(((_a2 = X.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = X.nVanosY) == null ? void 0 : _b.val) ?? 2);
        K = Array(l).fill(E.defaultSpan), te = Array(s).fill(E.defaultSpan * 0.8);
      }
      Gt(), setTimeout(() => {
        _s(), ye();
      }, 50);
    }
    function j(e) {
      var _a2, _b;
      return ((_a2 = X[e]) == null ? void 0 : _a2.val) ?? ((_b = et[e]) == null ? void 0 : _b.val) ?? 0;
    }
    function ye() {
      switch (z) {
        case "truss":
          jn();
          break;
        case "beams":
          Wn();
          break;
        case "3d":
          Yn();
          break;
        case "frame": {
          const o = Math.round(j("nVanos")), n = j("spanV"), l = Math.round(j("nPisos")), s = j("hPiso");
          We.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(j("nPisos")), n = j("hPiso"), l = j("Lvix") || 0, s = j("Lvdx") || 0, c = j("Lviy") || 0, a = j("Lvdy") || 0, i = Math.max(1, Math.round(j("nSubViga") || 3)), u = Math.max(1, Math.round(j("nSubCol") || 1));
          We.building([
            ...K
          ], [
            ...te
          ], Array(o).fill(n), i, l, s, c, a, u);
          break;
        }
        case "galpon":
          We.galpon(j("span"), j("length"), j("height"), j("archRise"), Math.round(j("xDiv")), Math.round(j("yDiv")));
          break;
        case "barra":
          Ts();
          break;
        case "placa-3q":
          Gn();
          break;
        case "placa-q4":
          Jn();
          break;
        case "losa-rect":
          Vn();
          break;
        case "losa-plana":
          Xn();
          break;
        case "viga-alta":
          Kn();
          break;
        case "muro-contencion":
          Un();
          break;
        case "zapata":
          Zn();
          break;
        case "placa-orificios":
          Qn();
          break;
        case "col-placa":
          es();
          break;
        case "talud":
          ts();
          break;
        case "eiffel":
          hs();
          break;
        case "arco":
          xs();
          break;
        case "puente":
          vs();
          break;
        case "twisted":
          ys();
          break;
        case "burj":
          $s();
          break;
        case "opera":
          ws();
          break;
        case "diagrid":
          Ms();
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
          oo(), mn();
        }, 30);
      }
    }
    function jn() {
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
      }), Ye();
    }
    function Wn() {
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
      }), Ye();
    }
    function Yn() {
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
        const S = c[f], I = c[h];
        let k = f;
        for (let O = 1; O < s; O++) {
          const y = O / s, m = i.length;
          i.push([
            S[0] + (I[0] - S[0]) * y,
            S[1] + (I[1] - S[1]) * y,
            S[2] + (I[2] - S[2]) * y
          ]), u.push([
            k,
            m
          ]), k = m;
        }
        u.push([
          k,
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
      const b = j("Ex") ?? 0, $ = (j("CM") ?? 0) + (j("CV") ?? 0), w = a - 2, v = /* @__PURE__ */ new Map();
      if (b !== 0 && $ === 0) v.set(w, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if ($ !== 0 && b === 0) for (let f = 0; f < i.length; f++) r.has(f) || v.set(f, [
        0,
        0,
        $,
        0,
        0,
        0
      ]);
      else if (b !== 0 && $ !== 0) for (let f = 0; f < i.length; f++) r.has(f) || v.set(f, [
        f === w ? b : 0,
        0,
        $,
        0,
        0,
        0
      ]);
      t.nodes.val = i, t.elements.val = u, t.nodeInputs && (t.nodeInputs.val = {
        supports: r,
        loads: v
      }), Ye();
    }
    function Ts() {
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
      }), Ye();
    }
    function Gn() {
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
      }), $ = e * o, w = l * $ / d.length, v = new Map(b.map((h) => [
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
        supports: v,
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
        const h = Ht(d, r, t.nodeInputs.val, t.elementInputs.val);
        h && t.deformOutputs && (t.deformOutputs.val = h);
        const S = Co(d, r, t.elementInputs.val, h);
        S && t.analyzeOutputs && (t.analyzeOutputs.val = S), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${r.length} triangles, t=${s}, E=${c}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function Jn() {
      const e = j("Lx") || 10, o = j("Ly") || 10, n = Math.round(j("nx") || 16), l = Math.round(j("ny") || 16), s = j("t") || 0.2, c = j("q") || -10, a = j("E") || 3e7, i = j("nu") || 0.3, u = vt === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0;
      return We.plateQ4(e, o, n, l, u, c, s, a, i, r);
    }
    function Vn() {
      const e = j("a") || 6, o = j("b") || 4, n = Math.round(j("nx") || 12), l = Math.round(j("ny") || 8), s = j("t") || 0.1, c = j("q") || -10, a = j("E") || 35e6, i = j("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 0, r = We.plateQ4(e, o, n, l, "simply-supported", c, s, a, i, d), b = a * s * s * s / (12 * (1 - i * i));
      let $ = 0;
      for (let w = 1; w <= 19; w += 2) for (let v = 1; v <= 19; v += 2) {
        const f = w * w / (e * e) + v * v / (o * o);
        $ += 1 / (w * v * f * f);
      }
      if ($ *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${$.toExponential(6)}`), r) {
        const w = Math.abs((Math.abs(r.centerW || 0) - $) / $ * 100);
        console.log(`   WASM w_center = ${(r.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return r;
    }
    function Xn() {
      const e = j("t") || 0.2, o = j("q") || -10, n = j("E") || 35e6, l = j("nu") || 0.2, s = j("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = c.reduce((C, A) => C + A, 0), u = a.reduce((C, A) => C + A, 0), d = [
        0
      ];
      for (const C of c) d.push(d[d.length - 1] + C);
      const r = [
        0
      ];
      for (const C of a) r.push(r[r.length - 1] + C);
      const b = Math.max(2, Math.round(i / s)), $ = Math.max(2, Math.round(u / s)), w = i / b, v = u / $, f = [];
      for (let C = 0; C <= $; C++) for (let A = 0; A <= b; A++) f.push([
        A * w,
        C * v
      ]);
      const h = [], S = /* @__PURE__ */ new Set();
      for (const C of d) for (const A of r) {
        let P = 1 / 0, q = 0;
        for (let Q = 0; Q < f.length; Q++) {
          const ee = Math.hypot(f[Q][0] - C, f[Q][1] - A);
          ee < P && (P = ee, q = Q);
        }
        S.has(q) || (S.add(q), h.push({
          node: q,
          dof: 0,
          k: 1e15
        }));
      }
      const k = {
        1: 2,
        2: 1,
        3: 0
      }[pt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][k]}]: ${i}\xD7${u}m, ${b}\xD7${$} elem, ${S.size} columnas`);
      const O = performance.now(), y = Cn({
        E: n,
        nu: l,
        thickness: e,
        meshLx: i,
        meshLy: u,
        meshNx: b,
        meshNy: $,
        bcType: "none",
        pressure: o,
        theoryType: k,
        springs: h
      }), m = performance.now() - O;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${y.maxW.toExponential(4)}`);
      const p = y.nodeResults.map((C) => [
        C.x,
        C.y,
        0
      ]), x = y.elementResults.map((C) => [
        ...C.nodes
      ]);
      t.nodes.val = p, t.elements.val = x;
      const M = /* @__PURE__ */ new Map();
      y.nodeResults.forEach((C, A) => {
        M.set(A, [
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
      const T = /* @__PURE__ */ new Map();
      for (const C of S) T.set(C, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const N = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const C = o * i * u / p.length;
        p.forEach((A, P) => {
          T.has(P) || N.set(P, [
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
        supports: T,
        loads: N
      }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
        const C = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        y.elementResults.forEach((q, Q) => {
          C.set(Q, [
            q.Mxx,
            q.Mxx,
            q.Mxx
          ]), A.set(Q, [
            q.Myy,
            q.Myy,
            q.Myy
          ]), P.set(Q, [
            q.Mxy,
            q.Mxy,
            q.Mxy
          ]);
        }), t.analyzeOutputs.val = {
          bendingXX: C,
          bendingYY: A,
          bendingXY: P
        };
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function Kn() {
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
      }), $ = d, w = 0.4, v = /* @__PURE__ */ new Map();
      for (let m = 0; m < $.length; m++) {
        const p = $[m][0], x = $[m][1];
        Math.abs(x) < 1e-6 && (p <= w + 1e-6 || p >= e - w - 1e-6) && v.set(m, [
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
      const I = a * i / Math.max(S.length, 1), k = /* @__PURE__ */ new Map();
      for (const m of S) k.set(m, [
        0,
        I,
        0,
        0,
        0,
        0
      ]);
      const O = {
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
        supports: v,
        loads: k
      };
      try {
        const m = Ht($, r, y, O), p = Co($, r, O, m), x = $.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        if (t.nodes.val = x, t.elements.val = r, m && m.deformations) {
          const T = /* @__PURE__ */ new Map();
          m.deformations.forEach((N, C) => {
            T.set(C, [
              N[0],
              N[2],
              N[1],
              N[3],
              N[5],
              N[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: T
          });
        }
        if (t.nodeInputs) {
          const T = /* @__PURE__ */ new Map();
          v.forEach((C, A) => T.set(A, C));
          const N = /* @__PURE__ */ new Map();
          k.forEach((C, A) => N.set(A, [
            C[0],
            C[2],
            C[1],
            C[3],
            C[5],
            C[4]
          ])), t.nodeInputs && (t.nodeInputs.val = {
            supports: T,
            loads: N
          });
        }
        t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let M = 0;
        m && m.deformations && m.deformations.forEach((T) => {
          const N = Math.sqrt(T[0] * T[0] + T[1] * T[1] + T[2] * T[2]);
          M = Math.max(M, N);
        }), console.log(`Viga Alta: ${$.length} nodos, ${r.length} triangulos`), console.log(`  L=${e}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function Un() {
      const e = j("H") || 4, o = j("B") || 3, n = j("tw") || 0.3, l = j("tb") || 0.4, s = j("meshSize") || 0.2, c = j("E") || 25e6, a = j("nu") || 0.2, i = c / (2 * (1 + a)), u = j("gamma") || 18, d = j("Ka") || 0.33, r = j("Es") || 5e4, b = j("nus") || 0.3, $ = r / (2 * (1 + b)), w = j("kn") || 1e6, v = j("ks") || 1e4, f = j("gammaW") || 9.81, h = j("Hw") || 3.5, S = j("qs") || 0, I = vt, k = o * 0.3, O = o * 0.7, y = [
        [
          -k,
          0,
          0
        ],
        [
          O,
          0,
          0
        ],
        [
          O,
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
          -k,
          l,
          0
        ]
      ];
      let m = [], p = [], x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), T;
      if (I === 0) {
        const A = eo({
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
        m = A.nodes, p = A.elements;
        for (let q = 0; q < m.length; q++) Math.abs(m[q][1]) < 1e-6 && x.set(q, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let q = 0; q < m.length; q++) {
          const Q = m[q][0], ee = m[q][1];
          Math.abs(Q - n) < s * 0.6 && ee >= l - 1e-6 && P.push({
            idx: q,
            y: ee
          });
        }
        P.sort((q, Q) => q.y - Q.y);
        for (let q = 0; q < P.length; q++) {
          const { idx: Q, y: ee } = P[q], ae = l + e - ee, se = d * u * ae + d * S;
          let U = s;
          q > 0 && q < P.length - 1 ? U = (P[q + 1].y - P[q - 1].y) / 2 : q === 0 && P.length > 1 ? U = (P[1].y - P[0].y) / 2 : q === P.length - 1 && P.length > 1 && (U = (P[q].y - P[q - 1].y) / 2);
          const le = se * U;
          Math.abs(le) > 1e-10 && M.set(Q, [
            le,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(p.map((q, Q) => [
            Q,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((q, Q) => [
            Q,
            c
          ])),
          thicknesses: new Map(p.map((q, Q) => [
            Q,
            n
          ])),
          poissonsRatios: new Map(p.map((q, Q) => [
            Q,
            a
          ])),
          shearModuli: new Map(p.map((q, Q) => [
            Q,
            i
          ]))
        };
      } else if (I === 1 || I === 2) {
        const A = O, P = l + e;
        if (I === 2) {
          const q = [
            [
              -k,
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
              -k,
              l,
              0
            ]
          ], Q = Math.max(3, Math.ceil((P - l) / s)), ee = [];
          for (let oe = 0; oe <= Q; oe++) ee.push([
            n,
            l + oe * (P - l) / Q,
            0
          ]);
          const ae = eo({
            points: [
              ...q,
              ...ee
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
          m = ae.nodes, p = ae.elements;
          const se = s * 0.4, U = [];
          for (let oe = 0; oe < m.length; oe++) {
            const ze = m[oe][0], De = m[oe][1];
            Math.abs(ze - n) < se && De >= l - se && U.push(oe);
          }
          U.sort((oe, ze) => m[oe][1] - m[ze][1]);
          const le = [
            U[0]
          ];
          for (let oe = 1; oe < U.length; oe++) {
            const ze = m[U[oe]][1] - m[le[le.length - 1]][1];
            Math.abs(ze) > s * 0.05 && le.push(U[oe]);
          }
          U.length = 0, U.push(...le);
          const Se = /* @__PURE__ */ new Map();
          for (const oe of U) {
            const ze = m.length;
            m.push([
              m[oe][0],
              m[oe][1],
              m[oe][2]
            ]), Se.set(oe, ze);
          }
          const Ne = p.length, Pe = [];
          for (let oe = 0; oe < Ne; oe++) {
            const ze = p[oe], De = (m[ze[0]][0] + m[ze[1]][0] + m[ze[2]][0]) / 3, lt = (m[ze[0]][1] + m[ze[1]][1] + m[ze[2]][1]) / 3, ht = De >= -k && De <= O && lt >= 0 && lt <= l, Io = De >= 0 && De <= n && lt >= l && lt <= l + e, ro = ht || Io;
            if (Pe.push(!ro), !ro) for (let Kt = 0; Kt < ze.length; Kt++) {
              const Zt = Se.get(ze[Kt]);
              Zt !== void 0 && (ze[Kt] = Zt);
            }
          }
          const ie = p.length;
          for (let oe = 0; oe < U.length - 1; oe++) {
            const ze = U[oe], De = U[oe + 1], lt = Se.get(ze), ht = Se.get(De);
            p.push([
              De,
              ze,
              lt,
              ht
            ]);
          }
          const xe = p.length - ie, Me = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
          for (let oe = 0; oe < Ne; oe++) Pe[oe] ? (Me.set(oe, r), pe.set(oe, r), me.set(oe, b), Ie.set(oe, $), J.set(oe, 1)) : (Me.set(oe, c), pe.set(oe, c), me.set(oe, a), Ie.set(oe, i), J.set(oe, 1));
          for (let oe = ie; oe < p.length; oe++) Me.set(oe, w), pe.set(oe, 0), me.set(oe, 0), Ie.set(oe, v), J.set(oe, 0);
          T = {
            elasticities: Me,
            elasticitiesOrthogonal: pe,
            thicknesses: J,
            poissonsRatios: me,
            shearModuli: Ie
          };
          for (let oe = 0; oe < m.length; oe++) {
            const ze = m[oe][0], De = m[oe][1];
            Math.abs(De) < 1e-6 ? x.set(oe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ze - A) < s * 0.1 && x.set(oe, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let oe = 0; oe < Ne; oe++) {
            if (!Pe[oe]) continue;
            const ze = p[oe], De = m[ze[0]], lt = m[ze[1]], ht = m[ze[2]], Io = Math.abs((lt[0] - De[0]) * (ht[1] - De[1]) - (ht[0] - De[0]) * (lt[1] - De[1])) / 2, ro = -u * Io / 3;
            for (const Kt of ze) {
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
            const oe = [];
            for (let ze = 0; ze < m.length; ze++) {
              const De = m[ze][0], lt = m[ze][1];
              Math.abs(lt - P) < s * 0.1 && De > n - 1e-6 && oe.push({
                idx: ze,
                x: De
              });
            }
            oe.sort((ze, De) => ze.x - De.x);
            for (let ze = 0; ze < oe.length; ze++) {
              let De = s;
              ze > 0 && ze < oe.length - 1 ? De = (oe[ze + 1].x - oe[ze - 1].x) / 2 : ze === 0 && oe.length > 1 ? De = (oe[1].x - oe[0].x) / 2 : ze === oe.length - 1 && oe.length > 1 && (De = (oe[ze].x - oe[ze - 1].x) / 2);
              const lt = -S * De, ht = M.get(oe[ze].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ht[1] += lt, M.set(oe[ze].idx, ht);
            }
          }
          console.log(`  Interfaz Goodman: ${U.length} nodos interfaz, ${xe} elem interfaz, kn=${w}, ks=${v}`);
        } else {
          const q = [
            [
              -k,
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
              -k,
              l,
              0
            ]
          ], Q = [
            [
              n,
              l,
              0
            ]
          ], ee = eo({
            points: [
              ...q,
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
          m = ee.nodes, p = ee.elements;
          const ae = (ie) => {
            const xe = (m[ie[0]][0] + m[ie[1]][0] + m[ie[2]][0]) / 3, Me = (m[ie[0]][1] + m[ie[1]][1] + m[ie[2]][1]) / 3, pe = xe >= -k && xe <= O && Me >= 0 && Me <= l, J = xe >= 0 && xe <= n && Me >= l && Me <= l + e;
            return pe || J;
          }, se = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), Pe = [];
          for (let ie = 0; ie < p.length; ie++) {
            const xe = ae(p[ie]);
            Pe.push(!xe), xe ? (se.set(ie, c), U.set(ie, c), Se.set(ie, a), Ne.set(ie, i), le.set(ie, 1)) : (se.set(ie, r), U.set(ie, r), Se.set(ie, b), Ne.set(ie, $), le.set(ie, 1));
          }
          T = {
            elasticities: se,
            elasticitiesOrthogonal: U,
            thicknesses: le,
            poissonsRatios: Se,
            shearModuli: Ne
          };
          for (let ie = 0; ie < m.length; ie++) {
            const xe = m[ie][0], Me = m[ie][1];
            Math.abs(Me) < 1e-6 ? x.set(ie, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(xe - A) < s * 0.1 && x.set(ie, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ie = 0; ie < p.length; ie++) {
            if (!Pe[ie]) continue;
            const xe = p[ie], Me = m[xe[0]], pe = m[xe[1]], J = m[xe[2]], me = Math.abs((pe[0] - Me[0]) * (J[1] - Me[1]) - (J[0] - Me[0]) * (pe[1] - Me[1])) / 2, Ie = -u * me / 3;
            for (const oe of xe) {
              const ze = M.get(oe) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ze[1] += Ie, M.set(oe, ze);
            }
          }
          if (S > 0) {
            const ie = [];
            for (let xe = 0; xe < m.length; xe++) {
              const Me = m[xe][0], pe = m[xe][1];
              Math.abs(pe - P) < s * 0.1 && Me > n - 1e-6 && ie.push({
                idx: xe,
                x: Me
              });
            }
            ie.sort((xe, Me) => xe.x - Me.x);
            for (let xe = 0; xe < ie.length; xe++) {
              let Me = s;
              xe > 0 && xe < ie.length - 1 ? Me = (ie[xe + 1].x - ie[xe - 1].x) / 2 : xe === 0 && ie.length > 1 ? Me = (ie[1].x - ie[0].x) / 2 : xe === ie.length - 1 && ie.length > 1 && (Me = (ie[xe].x - ie[xe - 1].x) / 2);
              const pe = -S * Me, J = M.get(ie[xe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              J[1] += pe, M.set(ie[xe].idx, J);
            }
          }
        }
      }
      if (I === 3) {
        const A = eo({
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
        m = A.nodes, p = A.elements;
        for (let ae = 0; ae < m.length; ae++) Math.abs(m[ae][1]) < 1e-6 && x.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + e, q = Math.min(h, e), Q = P - q, ee = [];
        for (let ae = 0; ae < m.length; ae++) {
          const se = m[ae][0], U = m[ae][1];
          Math.abs(se - n) < s * 0.6 && U >= l - 1e-6 && ee.push({
            idx: ae,
            y: U
          });
        }
        ee.sort((ae, se) => ae.y - se.y);
        for (let ae = 0; ae < ee.length; ae++) {
          const { idx: se, y: U } = ee[ae], le = Math.max(0, P - U);
          if (le <= 0 || U < Q - 1e-6) continue;
          const Se = Math.min(le, q), Ne = f * Se;
          let Pe = s;
          ae > 0 && ae < ee.length - 1 ? Pe = (ee[ae + 1].y - ee[ae - 1].y) / 2 : ae === 0 && ee.length > 1 ? Pe = (ee[1].y - ee[0].y) / 2 : ae === ee.length - 1 && ee.length > 1 && (Pe = (ee[ae].y - ee[ae - 1].y) / 2);
          const ie = Ne * Pe;
          Math.abs(ie) > 1e-10 && M.set(se, [
            ie,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(p.map((ae, se) => [
            se,
            c
          ])),
          elasticitiesOrthogonal: new Map(p.map((ae, se) => [
            se,
            c
          ])),
          thicknesses: new Map(p.map((ae, se) => [
            se,
            n
          ])),
          poissonsRatios: new Map(p.map((ae, se) => [
            se,
            a
          ])),
          shearModuli: new Map(p.map((ae, se) => [
            se,
            i
          ]))
        };
      }
      const N = {
        supports: x,
        loads: M
      }, C = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const A = Ht(m, p, N, T), P = p.filter((le) => le.length === 3), q = {};
        for (const le of Object.keys(T)) {
          const Se = T[le];
          if (Se && Se instanceof Map) {
            const Ne = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let ie = 0; ie < p.length; ie++) p[ie].length === 3 && (Se.has(ie) && Ne.set(Pe, Se.get(ie)), Pe++);
            q[le] = Ne;
          }
        }
        const Q = Co(m, P, q, A), ee = m.map((le) => [
          le[0],
          0,
          le[1]
        ]);
        if (t.nodes.val = ee, t.elements.val = P, A && A.deformations) {
          const le = /* @__PURE__ */ new Map();
          A.deformations.forEach((Se, Ne) => {
            le.set(Ne, [
              Se[0],
              Se[2],
              Se[1],
              Se[3],
              Se[5],
              Se[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: le
          });
        }
        const ae = /* @__PURE__ */ new Map();
        x.forEach((le, Se) => ae.set(Se, le));
        const se = /* @__PURE__ */ new Map();
        M.forEach((le, Se) => se.set(Se, [
          le[0],
          le[2],
          le[1],
          le[3],
          le[5],
          le[4]
        ])), t.nodeInputs && (t.nodeInputs.val = {
          supports: ae,
          loads: se
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let U = 0;
        A && A.deformations && A.deformations.forEach((le) => {
          const Se = Math.sqrt(le[0] * le[0] + le[1] * le[1] + le[2] * le[2]);
          U = Math.max(U, Se);
        }), console.log(`Muro Contencion [${C[I]}]: ${m.length} nodos, ${p.length} triangulos`), console.log(`  H=${e}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${S}`), I === 1 && console.log(`  Es=${r}, nus=${b}`), I === 2 && console.log(`  Es=${r}, nus=${b}, kn=${w}, ks=${v}`), I === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${U.toExponential(4)}`);
      } catch (A) {
        console.warn("Muro Contencion failed:", A.message);
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function Zn() {
      const e = j("Lx") || 2, o = j("Ly") || 2, n = j("t") || 0.5, l = j("colA") || 0.4, s = j("colH") || 1.5, c = Math.round(j("nx") || 8), a = Math.round(j("ny") || 8), i = j("E") || 25e6, u = j("nu") || 0.2, d = j("P") || -500, r = j("Mx") || 0, b = j("My") || 0, $ = j("ks") || 2e4, w = e / c, v = o / a, f = e / 2, h = o / 2, S = l / 2, I = [];
      for (let x = 0; x <= a; x++) for (let M = 0; M <= c; M++) {
        const T = x * (c + 1) + M;
        let N = w, C = v;
        (M === 0 || M === c) && (N = w / 2), (x === 0 || x === a) && (C = v / 2), I.push({
          node: T,
          dof: 0,
          k: $ * N * C
        });
      }
      let k = 0;
      for (let x = 0; x <= a; x++) for (let M = 0; M <= c; M++) Math.abs(M * w - f) <= S + 1e-6 && Math.abs(x * v - h) <= S + 1e-6 && k++;
      const O = d / Math.max(k, 1), y = [];
      for (let x = 0; x <= a; x++) for (let M = 0; M <= c; M++) {
        const T = M * w, N = x * v;
        Math.abs(T - f) <= S + 1e-6 && Math.abs(N - h) <= S + 1e-6 && y.push({
          node: x * (c + 1) + M,
          dof: 0,
          value: O
        });
      }
      if (Math.abs(r) > 1e-6) {
        const x = S > 1e-6 ? S : v, M = r / x;
        for (let T = 0; T <= a; T++) for (let N = 0; N <= c; N++) {
          const C = N * w, A = T * v;
          if (Math.abs(C - f) <= S + 1e-6 && Math.abs(A - h) <= S + 1e-6) {
            const P = A - h;
            if (Math.abs(P) > 1e-6) {
              const q = P > 0 ? 1 : -1;
              y.push({
                node: T * (c + 1) + N,
                dof: 0,
                value: q * M / k * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const x = S > 1e-6 ? S : w, M = b / x;
        for (let T = 0; T <= a; T++) for (let N = 0; N <= c; N++) {
          const C = N * w, A = T * v;
          if (Math.abs(C - f) <= S + 1e-6 && Math.abs(A - h) <= S + 1e-6) {
            const P = C - f;
            if (Math.abs(P) > 1e-6) {
              const q = P > 0 ? 1 : -1;
              y.push({
                node: T * (c + 1) + N,
                dof: 0,
                value: q * M / k * 2
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
        const x = Cn({
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
        console.log(`  Solved: w_max = ${x.maxW.toExponential(4)}`);
        const M = x.nodeResults.map((Q) => [
          Q.x,
          Q.y,
          0
        ]), T = M.length;
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
        const N = x.elementResults.map((Q) => [
          ...Q.nodes
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
        ]), t.nodes.val = M, t.elements.val = N;
        const C = /* @__PURE__ */ new Map();
        x.nodeResults.forEach((Q, ee) => {
          C.set(ee, [
            0,
            0,
            Q.w,
            Q.bx,
            Q.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: C
        });
        const A = /* @__PURE__ */ new Map();
        x.nodeResults.forEach((Q, ee) => {
          const ae = Q.x, se = Q.y;
          (ae < 1e-6 || ae > e - 1e-6 || se < 1e-6 || se > o - 1e-6) && A.set(ee, [
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
          d / 4,
          0,
          0,
          0
        ]), P.set(T + 5, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), P.set(T + 6, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), P.set(T + 7, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), t.nodeInputs && (t.nodeInputs.val = {
          supports: A,
          loads: P
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
          const Q = x.elementResults.length, ee = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
          x.elementResults.forEach((U, le) => {
            ee.set(le, [
              U.Mxx,
              U.Mxx,
              U.Mxx
            ]), ae.set(le, [
              U.Myy,
              U.Myy,
              U.Myy
            ]), se.set(le, [
              U.Mxy,
              U.Mxy,
              U.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: ee,
            bendingYY: ae,
            bendingXY: se
          };
        }
        const q = Ue();
        q && (q.settings.shellResults.val = "bendingXX");
      } catch (x) {
        console.warn("Zapata solver failed:", x.message);
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function Qn() {
      const e = j("Lx") || 0.4, o = j("Ly") || 0.4, n = j("t") || 0.025, l = j("dBolt") || 0.022, s = j("sx") || 0.28, c = j("sy") || 0.28, a = j("colA") || 0.2, i = j("meshSize") || 8e-3, u = j("E") || 2e8, d = j("nu") || 0.3, r = u / (2 * (1 + d)), b = j("P") || -200, $ = Math.round(j("nBolts") || 4), w = e / 2, v = o / 2, f = l / 2, h = a / 2, S = [];
      $ >= 4 && (S.push([
        w - s / 2,
        v - c / 2
      ]), S.push([
        w + s / 2,
        v - c / 2
      ]), S.push([
        w + s / 2,
        v + c / 2
      ]), S.push([
        w - s / 2,
        v + c / 2
      ])), $ >= 6 && (S.push([
        w,
        v - c / 2
      ]), S.push([
        w,
        v + c / 2
      ])), $ >= 8 && (S.push([
        w - s / 2,
        v
      ]), S.push([
        w + s / 2,
        v
      ]));
      const { nodes: I, elements: k } = eo({
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
      }), O = (C, A) => {
        for (const [P, q] of S) if ((C - P) * (C - P) + (A - q) * (A - q) < f * f) return true;
        return false;
      }, y = k.filter((C) => {
        const A = (I[C[0]][0] + I[C[1]][0] + I[C[2]][0]) / 3, P = (I[C[0]][1] + I[C[1]][1] + I[C[2]][1]) / 3;
        return !O(A, P);
      }), m = I, p = /* @__PURE__ */ new Map();
      for (let C = 0; C < m.length; C++) {
        const A = m[C][0], P = m[C][1];
        for (const [q, Q] of S) {
          const ee = Math.sqrt((A - q) * (A - q) + (P - Q) * (P - Q));
          ee >= f * 0.7 && ee <= f * 1.5 && p.set(C, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const x = /* @__PURE__ */ new Map();
      let M = 0;
      for (let C = 0; C < m.length; C++) {
        const A = m[C][0], P = m[C][1];
        Math.abs(A - w) <= h && Math.abs(P - v) <= h && M++;
      }
      const T = b / Math.max(M, 1);
      for (let C = 0; C < m.length; C++) {
        const A = m[C][0], P = m[C][1];
        if (Math.abs(A - w) <= h && Math.abs(P - v) <= h) {
          const q = x.get(C) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          q[2] += T, x.set(C, q);
        }
      }
      const N = {
        elasticities: new Map(y.map((C, A) => [
          A,
          u
        ])),
        elasticitiesOrthogonal: new Map(y.map((C, A) => [
          A,
          u
        ])),
        thicknesses: new Map(y.map((C, A) => [
          A,
          n
        ])),
        poissonsRatios: new Map(y.map((C, A) => [
          A,
          d
        ])),
        shearModuli: new Map(y.map((C, A) => [
          A,
          r
        ]))
      };
      console.log(`Placa Base: ${e * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${y.length} triangulos, ${m.length} nodos`);
      try {
        const C = Ht(m, y, {
          supports: p,
          loads: x
        }, N), A = Co(m, y, N, C);
        t.nodes.val = m, t.elements.val = y, C && t.deformOutputs && (t.deformOutputs.val = C), t.nodeInputs && (t.nodeInputs.val = {
          supports: p,
          loads: x
        }), t.elementInputs && (t.elementInputs.val = {}), A && t.analyzeOutputs && (t.analyzeOutputs.val = A);
        let P = 0;
        C && C.deformations && C.deformations.forEach((q) => {
          const Q = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2]);
          P = Math.max(P, Q);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (C) {
        console.warn("Placa Base failed:", C.message);
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function es() {
      const e = j("colB") || 0.3, o = j("colH") || 0.3, n = j("colT") || 8e-3, l = j("colLen") || 1.5, s = j("Lx") || 0.45, c = j("Ly") || 0.45, a = j("tPlaca") || 0.025, i = j("dBolt") || 0.022, u = j("sx") || 0.32, d = j("sy") || 0.32, r = Math.round(j("nSubColV") || 6), b = Math.round(j("nSubColH") || 4), $ = Math.round(j("nSubPlaca") || 10), w = j("E") || 2e8, v = j("nu") || 0.3, f = w / (2 * (1 + v)), h = j("P") || -300, S = s / 2, I = c / 2, k = i / 2, O = e / 2, y = o / 2, m = [], p = [], x = $, M = s / x, T = c / x, N = (pe, J) => J * (x + 1) + pe;
      for (let pe = 0; pe <= x; pe++) for (let J = 0; J <= x; J++) m.push([
        J * M,
        pe * T,
        0
      ]);
      const C = [
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
      ], A = (pe, J) => {
        for (const [me, Ie] of C) if ((pe - me) * (pe - me) + (J - Ie) * (J - Ie) < k * k) return true;
        return false;
      }, P = p.length;
      for (let pe = 0; pe < x; pe++) for (let J = 0; J < x; J++) {
        const me = (J + 0.5) * M, Ie = (pe + 0.5) * T;
        A(me, Ie) || p.push([
          N(J, pe),
          N(J + 1, pe),
          N(J + 1, pe + 1),
          N(J, pe + 1)
        ]);
      }
      const q = p.length - P, Q = r, ee = b, ae = [
        [
          S - O,
          I - y
        ],
        [
          S + O,
          I - y
        ],
        [
          S + O,
          I + y
        ],
        [
          S - O,
          I + y
        ]
      ], se = p.length, U = [
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
      ], le = (pe, J) => {
        for (let me = 0; me < (x + 1) * (x + 1); me++) if (Math.abs(m[me][0] - pe) < M * 0.3 && Math.abs(m[me][1] - J) < T * 0.3 && Math.abs(m[me][2]) < 1e-6) return me;
        return -1;
      };
      for (const [pe, J] of U) {
        const [me, Ie] = ae[pe], [oe, ze] = ae[J], De = [];
        for (let lt = 0; lt <= Q; lt++) {
          const ht = [], Io = lt / Q * l;
          for (let ro = 0; ro <= ee; ro++) {
            const Kt = ro / ee, Zt = me + Kt * (oe - me), Ln = Ie + Kt * (ze - Ie);
            if (lt === 0) {
              const Qt = le(Zt, Ln);
              if (Qt >= 0) {
                ht.push(Qt);
                continue;
              }
            }
            let Tn = -1;
            for (let Qt = 0; Qt < m.length; Qt++) if (Math.abs(m[Qt][0] - Zt) < 1e-6 && Math.abs(m[Qt][1] - Ln) < 1e-6 && Math.abs(m[Qt][2] - Io) < 1e-6) {
              Tn = Qt;
              break;
            }
            Tn >= 0 ? ht.push(Tn) : (ht.push(m.length), m.push([
              Zt,
              Ln,
              Io
            ]));
          }
          De.push(ht);
        }
        for (let lt = 0; lt < Q; lt++) for (let ht = 0; ht < ee; ht++) p.push([
          De[lt][ht],
          De[lt][ht + 1],
          De[lt + 1][ht + 1],
          De[lt + 1][ht]
        ]);
      }
      const Se = p.length - se, Ne = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (x + 1) * (x + 1); pe++) {
        const J = m[pe][0], me = m[pe][1];
        for (const [Ie, oe] of C) {
          const ze = Math.sqrt((J - Ie) * (J - Ie) + (me - oe) * (me - oe));
          ze >= k * 0.5 && ze <= k * 2 && Ne.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Pe = /* @__PURE__ */ new Map(), ie = [];
      for (let pe = 0; pe < m.length; pe++) Math.abs(m[pe][2] - l) < 1e-6 && ie.push(pe);
      const xe = h / Math.max(ie.length, 1);
      for (const pe of ie) Pe.set(pe, [
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
      for (let pe = P; pe < P + q; pe++) Me.elasticities.set(pe, w), Me.poissonsRatios.set(pe, v), Me.thicknesses.set(pe, a), Me.shearModuli.set(pe, f);
      for (let pe = se; pe < se + Se; pe++) Me.elasticities.set(pe, w), Me.poissonsRatios.set(pe, v), Me.thicknesses.set(pe, n), Me.shearModuli.set(pe, f);
      console.log(`Col+Placa 3D: col ${e * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${q} Q4 placa + ${Se} Q4 columna = ${p.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const pe = Ht(m, p, {
          supports: Ne,
          loads: Pe
        }, Me), J = Co(m, p, Me, pe);
        t.nodes.val = m, t.elements.val = p, pe && t.deformOutputs && (t.deformOutputs.val = pe), t.nodeInputs && (t.nodeInputs.val = {
          supports: Ne,
          loads: Pe
        }), t.elementInputs && (t.elementInputs.val = Me), J && t.analyzeOutputs && (t.analyzeOutputs.val = J);
        let me = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((Ie) => {
          const oe = Math.sqrt(Ie[0] * Ie[0] + Ie[1] * Ie[1] + Ie[2] * Ie[2]);
          me = Math.max(me, oe);
        }), console.log(`  max|u| = ${me.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), t.nodes.val = m, t.elements.val = p, t.nodeInputs && (t.nodeInputs.val = {
          supports: Ne,
          loads: Pe
        });
      }
      setTimeout(() => $t(), 50), Ye();
    }
    function ts() {
      const e = j("H") || 6, o = j("angle") || 45, n = j("bTop") || 3, l = j("bBot") || 3, s = j("meshSize") || 2, c = j("E") || 5e4, a = j("nu") || 0.3, i = j("gamma") || 18, u = j("c") || 15, d = j("phi") || 30, r = j("qs") || 0, b = e / Math.tan(o * Math.PI / 180), $ = l + b + n, w = e, v = [
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
      ], { nodes: f, elements: h } = eo({
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
      }), S = f, I = [], k = /* @__PURE__ */ new Map();
      for (let y = 0; y < S.length; y++) {
        const m = S[y][0], p = S[y][1];
        Math.abs(p + w) < 1e-6 ? (I.push({
          node: y,
          fixX: true,
          fixY: true
        }), k.set(y, [
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
        }), k.set(y, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const O = e - s * 0.3;
      try {
        const y = S.map((A) => [
          A[0],
          A[1]
        ]), m = h.map((A) => [
          A[0],
          A[1],
          A[2]
        ]), p = ia({
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
          surfaceYThreshold: O
        }), x = S.map((A) => [
          A[0],
          0,
          A[1]
        ]);
        t.nodes.val = x, t.elements.val = h;
        const M = /* @__PURE__ */ new Map();
        for (let A = 0; A < p.displacements.length; A++) {
          const [P, q] = p.displacements[A];
          M.set(A, [
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
          supports: k
        }), t.elementInputs && (t.elementInputs.val = {});
        const T = /* @__PURE__ */ new Map();
        for (let A = 0; A < p.plasticStrain.length; A++) {
          const P = p.plasticStrain[A];
          T.set(A, [
            P,
            P,
            P
          ]);
        }
        t.analyzeOutputs && (t.analyzeOutputs.val = {
          membraneXX: T
        });
        let N = 0;
        for (const [A, P] of p.displacements) {
          const q = Math.sqrt(A * A + P * P);
          N = Math.max(N, q);
        }
        let C = 0;
        for (const A of p.plasticStrain) C = Math.max(C, A);
        console.log(`Talud SRM: ${S.length} nodos, ${h.length} triangulos`), console.log(`  H=${e}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${p.fos.toFixed(3)}`), console.log(`  max|u| = ${N.toExponential(4)}`), console.log(`  max \u03B5_pl = ${C.toExponential(4)}`), p.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : p.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (y) {
        console.warn("Talud SRM failed:", y.message);
      }
      setTimeout(() => $t(), 50), Ye();
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
      const o = qo.find((n) => n.id === R);
      return e / o.toM;
    }
    function rt(e) {
      const o = qo.find((n) => n.id === R);
      return e * o.toM;
    }
    function fo(e) {
      const o = On.find((l) => l.id === W.forceId), n = qo.find((l) => l.id === W.lengthId);
      return e / (o.toKN / (n.toM * n.toM));
    }
    function cn(e) {
      const o = On.find((l) => l.id === W.forceId), n = qo.find((l) => l.id === W.lengthId);
      return e * (o.toKN / (n.toM * n.toM));
    }
    function dn() {
      return W.label;
    }
    function As() {
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
    function qs() {
      const e = fo(20594), o = fo(58840), n = Math.max(1, Math.round((o - e) / 40));
      return [
        Math.round(e),
        Math.round(o),
        n
      ];
    }
    function os(e, o, n, l, s) {
      const c = Te.steelVigaType, a = c === 0 ? Ko() : Uo();
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
          d && (o[parseInt(d[1])].b = rt(i.value), ye()), r && (o[parseInt(r[1])].h = rt(i.value), ye());
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
            u === `bf${r}` && (o[d].bf = rt(i.value), ye()), u === `h${r}` && (o[d].hf = rt(i.value), ye()), u === `tf${r}` && (o[d].tf = rt(i.value), ye()), u === `tw${r}` && (o[d].tw = rt(i.value), ye());
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
            u === `bc${r}` && (o[d].bc = rt(i.value), ye()), u === `hc${r}` && (o[d].hc = rt(i.value), ye()), u === `t${r}` && (o[d].t = rt(i.value), ye());
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
      const n = E, l = Math.round(((_a2 = X.nPisos) == null ? void 0 : _a2.val) ?? 3), s = As(), c = qs(), a = K.length || 1, i = te.length || 1;
      for (; Te.perFloor.length < l; ) {
        const m = Te.perFloor.length > 0 ? JSON.parse(JSON.stringify(Te.perFloor[Te.perFloor.length - 1])) : Mt(a, i);
        Te.perFloor.push(m);
      }
      Te.perFloor.length > l && (Te.perFloor.length = l);
      for (const m of Te.perFloor) {
        for (; m.vigasX.length < a; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : zt());
        for (m.vigasX.length > a && (m.vigasX.length = a); m.vigasY.length < i; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : zt());
        m.vigasY.length > i && (m.vigasY.length = i);
      }
      mt = new _o({
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
        Te.colMat = m.value, $o(), ye();
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
        }).on("change", (x) => {
          Te.colShape = x.value, $o(), ye();
        });
        const p = {
          fc: +fo(Te.fc).toFixed(1)
        };
        mt.addBinding(p, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${dn()})`
        }), mt.on("change", (x) => {
          var _a3;
          ((_a3 = x.target) == null ? void 0 : _a3.key) === "fc" && (Te.fc = cn(x.value), ye());
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
          Te.steelColType = p.value, $o(), ye();
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
        Te.vigaMat = m.value, $o(), ye();
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
          Te.steelVigaType = p.value, $o(), ye();
        });
      }
      const r = Te.steelColType === 0 ? Ko() : Uo();
      Te.steelVigaType === 0 ? Ko() : Uo();
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
        const p = Te.perFloor[m], x = mt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (Te.colMat === 0) if (Te.colShape === 1) {
          const M = {
            dCol: +it(p.dCol).toFixed(2)
          };
          x.addBinding(M, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), x.on("change", (T) => {
            var _a3;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "dCol" && (p.dCol = rt(T.value), ye());
          });
        } else {
          const M = {
            bCol: +it(p.bCol).toFixed(2),
            hCol: +it(p.hCol).toFixed(2)
          };
          x.addBinding(M, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), x.addBinding(M, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), x.on("change", (T) => {
            var _a3, _b;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bCol" && (p.bCol = rt(T.value), ye()), ((_b = T.target) == null ? void 0 : _b.key) === "hCol" && (p.hCol = rt(T.value), ye());
          });
        }
        else if (Te.colMat === 1) if (Te.steelColType <= 1) {
          const M = {
            col: p.colProfileIdx
          };
          x.addBinding(M, "col", {
            label: "Columna",
            options: r
          }).on("change", (T) => {
            p.colProfileIdx = T.value, ye();
          });
        } else if (Te.steelColType === 2) {
          const M = {
            bf: +it(p.colBf ?? 0.3).toFixed(3),
            h: +it(p.colHf ?? 0.3).toFixed(3),
            tf: +it(p.colTf ?? 0.02).toFixed(3),
            tw: +it(p.colTw ?? 0.012).toFixed(3)
          };
          x.addBinding(M, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), x.addBinding(M, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), x.addBinding(M, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), x.addBinding(M, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), x.on("change", (T) => {
            var _a3, _b, _c, _d;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bf" && (p.colBf = rt(T.value), ye()), ((_b = T.target) == null ? void 0 : _b.key) === "h" && (p.colHf = rt(T.value), ye()), ((_c = T.target) == null ? void 0 : _c.key) === "tf" && (p.colTf = rt(T.value), ye()), ((_d = T.target) == null ? void 0 : _d.key) === "tw" && (p.colTw = rt(T.value), ye());
          });
        } else {
          const M = {
            bc: +it(p.colBc ?? 0.3).toFixed(3),
            hc: +it(p.colHc ?? 0.3).toFixed(3),
            t: +it(p.colT ?? 0.01).toFixed(3)
          };
          x.addBinding(M, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), x.addBinding(M, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), x.addBinding(M, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), x.on("change", (T) => {
            var _a3, _b, _c;
            ((_a3 = T.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = rt(T.value), ye()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = rt(T.value), ye()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (p.colT = rt(T.value), ye());
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
          x.addBinding(M, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), x.addBinding(M, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), x.addBinding(M, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), x.addBlade({
            view: "separator"
          });
          const T = +fo(1e8).toFixed(0), N = +fo(3e8).toFixed(0), C = Math.max(1, Math.round((N - T) / 200));
          x.addBinding(M, "Es", {
            min: T,
            max: N,
            step: C,
            label: `Es (${dn()})`
          }), x.addBinding(M, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), x.addBinding(M, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${dn()})`
          }), x.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), x.on("change", (A) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = A.target) == null ? void 0 : _a3.key) === "bc" && (p.colBc = rt(A.value), ye()), ((_b = A.target) == null ? void 0 : _b.key) === "hc" && (p.colHc = rt(A.value), ye()), ((_c = A.target) == null ? void 0 : _c.key) === "t" && (p.colT = rt(A.value), ye()), ((_d = A.target) == null ? void 0 : _d.key) === "Es" && (p.colEs = cn(A.value), ye()), ((_e2 = A.target) == null ? void 0 : _e2.key) === "nuS" && (p.colNuS = A.value, ye()), ((_f = A.target) == null ? void 0 : _f.key) === "fc" && (p.colFc = cn(A.value), ye()), ((_g = A.target) == null ? void 0 : _g.key) === "nuC" && (p.colNuC = A.value, ye());
          });
        }
        if (p.vigasX.length > 0) {
          const M = x.addFolder({
            title: `Vigas X (${p.vigasX.length})`,
            expanded: false
          });
          os(M, p.vigasX, "x", s, b);
        }
        if (p.vigasY.length > 0) {
          const M = x.addFolder({
            title: `Vigas Y (${p.vigasY.length})`,
            expanded: false
          });
          os(M, p.vigasY, "y", s, b);
        }
      }
      mt.addBlade({
        view: "separator"
      });
      const $ = mt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Oe,
        direccion: dt === "x" ? 0 : 1,
        cantidad: Qe
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (Oe = m.value, ye()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (dt = m.value === 0 ? "x" : "y", ye()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (Qe = Math.round(m.value), ye());
      }), mt.addBlade({
        view: "separator"
      });
      const v = mt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: ft,
        espesor: +it(wt).toFixed(3),
        subdivX: Pt,
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
      }), v.on("change", (m) => {
        var _a3, _b, _c, _d;
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "activar" && (ft = m.value, ye()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && (wt = rt(m.value), ye()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (Pt = Math.round(m.value), ye()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Nt = Math.round(m.value), ye());
      }), mt.addBlade({
        view: "separator"
      });
      const h = mt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), S = {
        espesor: +it(Ze).toFixed(3),
        subdivH: $e,
        subdivW: Re
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
        ((_a3 = m.target) == null ? void 0 : _a3.key) === "espesor" && (Ze = rt(m.value), ye()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && ($e = Math.round(m.value), ye()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (Re = Math.round(m.value), ye());
      });
      const I = K.length || 1, k = te.length || 1, O = I + 1, y = k + 1;
      if (I > 0) {
        const m = h.addFolder({
          title: `Muros dir X (${I} vanos)`,
          expanded: false
        });
        for (let p = 0; p < I; p++) for (let x = 0; x < y; x++) {
          const M = `wx_${p}_${x}`, T = je.some((A) => A.dir === "x" && A.bay === p && A.axisIdx === x), N = {};
          N[M] = T;
          const C = `Vano X${p + 1} / Eje Y${String.fromCharCode(65 + x)}`;
          m.addBinding(N, M, {
            label: C
          }).on("change", (A) => {
            A.value ? je.push({
              dir: "x",
              bay: p,
              axisIdx: x,
              floors: [
                -1
              ]
            }) : je = je.filter((P) => !(P.dir === "x" && P.bay === p && P.axisIdx === x)), ye();
          });
        }
      }
      if (k > 0) {
        const m = h.addFolder({
          title: `Muros dir Y (${k} vanos)`,
          expanded: false
        });
        for (let p = 0; p < k; p++) for (let x = 0; x < O; x++) {
          const M = `wy_${p}_${x}`, T = je.some((A) => A.dir === "y" && A.bay === p && A.axisIdx === x), N = {};
          N[M] = T;
          const C = `Vano Y${p + 1} / Eje X${x + 1}`;
          m.addBinding(N, M, {
            label: C
          }).on("change", (A) => {
            A.value ? je.push({
              dir: "y",
              bay: p,
              axisIdx: x,
              floors: [
                -1
              ]
            }) : je = je.filter((P) => !(P.dir === "y" && P.bay === p && P.axisIdx === x)), ye();
          });
        }
      }
      if (je.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${je.length} ubicaciones`
        };
        h.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Gt() {
      const e = document.getElementById("parameters");
      if (!e) return;
      if (re || (re = e.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
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
      ve = new _o({
        title: `Parameters \u2014 ${o}`,
        container: e
      });
      const n = Bn()[z];
      if (n) {
        const s = {};
        for (const a of n) s[a.key] = X[a.key].val;
        for (const a of n) ve.addBinding(s, a.key, {
          min: X[a.key].min,
          max: X[a.key].max,
          step: X[a.key].step,
          label: X[a.key].label
        });
        const c = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of n) {
          const i = {
            min: X[a.key].min,
            max: X[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            X[a.key] && (X[a.key].min = i.min, X[a.key].max = i.max, X[a.key].val < i.min && (X[a.key].val = i.min), X[a.key].val > i.max && (X[a.key].val = i.max)), Gt(), ye();
          });
        }
        ve.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && X[i]) {
            if (X[i].val = a.value, z === "edificio" && (i === "nVanosX" || i === "nVanosY" || i === "nPisos")) {
              if (i === "nVanosX" || i === "nVanosY") {
                const u = Math.round(X.nVanosX.val), d = Math.round(X.nVanosY.val);
                for (; K.length < u; ) K.push(K[K.length - 1] ?? E.defaultSpan);
                for (K.length > u && (K.length = u); te.length < d; ) te.push(te[te.length - 1] ?? E.defaultSpan * 0.8);
                te.length > d && (te.length = d);
              }
              Gt();
            }
            ye();
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
          const c = E;
          Ut = new _o({
            title: `Luces (${c.length})`,
            container: s
          });
          const a = Ut.addFolder({
            title: "Luces X",
            expanded: true
          }), i = {};
          for (let r = 0; r < K.length; r++) i[`svx_${r + 1}`] = K[r];
          for (let r = 0; r < K.length; r++) a.addBinding(i, `svx_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${r + 1}`
          });
          a.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (K[parseInt($[1]) - 1] = r.value, ye());
          });
          const u = Ut.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let r = 0; r < te.length; r++) d[`svy_${r + 1}`] = te[r];
          for (let r = 0; r < te.length; r++) u.addBinding(d, `svy_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${r + 1}`
          });
          u.on("change", (r) => {
            var _a2, _b;
            const $ = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (te[parseInt($[1]) - 1] = r.value, ye());
          });
        }
      }
      if ($o(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const s = Xo()[z];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((i, u) => {
            c[i.label] = u;
          });
          const a = {
            apoyo: vt
          };
          ve.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (i) => {
            vt = i.value, ye();
          });
        }
        if (z === "placa-3q" || z === "placa-q4") {
          const c = {
            teoria: pt
          };
          ve.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            pt = a.value, ye();
          });
        }
      }
      const l = Dn()[z];
      if (l && l.length > 0) {
        Yt = new _o({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: e
        });
        const s = {};
        for (const a of l) s[a.key] = et[a.key].val;
        for (const a of l) Yt.addBinding(s, a.key, {
          min: et[a.key].min,
          max: et[a.key].max,
          step: et[a.key].step,
          label: et[a.key].label
        });
        const c = Yt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: et[a.key].min,
            max: et[a.key].max
          };
          c.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), c.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), c.on("change", () => {
            et[a.key] && (et[a.key].min = i.min, et[a.key].max = i.max, et[a.key].val < i.min && (et[a.key].val = i.min), et[a.key].val > i.max && (et[a.key].val = i.max)), Gt(), ye();
          });
        }
        Yt.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && et[i]) {
            if (et[i].val = a.value, t.nodeInputs) {
              const u = t.nodeInputs.val;
              u.supports && (t.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => mn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (X[s]) X[s].val = c, ye(), Gt();
          else if (et[s]) {
            if (et[s].val = c, t.nodeInputs) {
              const a = t.nodeInputs.val;
              a.supports && (t.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              mn(), Gt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in X) s[c] = X[c].val;
          for (const c in et) s[c] = et[c].val;
          return s;
        },
        setGenerator: Xe,
        createCustomPanel: (s, c, a) => Fs(s, c, a),
        removeCustomPanel: (s) => {
          ns(s);
        }
      };
    }
    const pn = /* @__PURE__ */ new Map();
    function Fs(e, o, n) {
      var _a2;
      ns(e);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const c = new _o({
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
      }), pn.set(e, {
        pane: c,
        values: a
      }), console.log(`Panel "${e}" created with ${Object.keys(o).length} params`), a;
    }
    function ns(e) {
      const o = pn.get(e);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        pn.delete(e);
      }
    }
    function Ps() {
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && re && (n.innerHTML = re);
    }
    const he = document.createElement("div");
    he.id = "cad3d-panel";
    const ss = document.createElement("style");
    ss.textContent = `
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
  `, document.head.appendChild(ss), ca() === "light" && document.documentElement.classList.add("awatif-light"), da((e) => {
      e === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), z && $t(true);
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
    let bt = null;
    function Os() {
      var _a2, _b, _c, _d, _e2, _f;
      const e = t.nodes.val, o = t.elements.val, n = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, l = (_b = t.elementInputs) == null ? void 0 : _b.val, s = R, c = g, a = [];
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
            const v = (_a3 = w.map) == null ? void 0 : _a3.get(b);
            return v !== void 0 ? v.toExponential(4).padStart(12) : "           -";
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
        const d = Object.entries(X).map(([r, b]) => `${r}=${b.val}`).join(" ");
        a.push(`cad.${z === "edificio" ? "building" : z}(${d})`);
      }
      return a.join(`
`);
    }
    let Oo = false;
    function Ns() {
      var _a2, _b, _c, _d;
      if (bt) {
        bt.remove(), bt = null, Oo = false;
        return;
      }
      const e = Os();
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
        bt == null ? void 0 : bt.remove(), bt = null, Oo = false;
      }), (_b = bt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = bt.querySelector("#export-body"), n = bt.querySelector("#export-minimize");
        Oo = !Oo, Oo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", bt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", bt.style.width = "720px");
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
        const u = bt.querySelector("#export-text");
        u.value = JSON.stringify(c, null, 2);
        const d = bt.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ye() {
      var _a2, _b, _c;
      const e = he.querySelector("#cad3d-info");
      if (e) {
        const o = t.nodes.val.length, n = t.elements.val, l = n.length, s = ((_c = (_b = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, a = 0, i = 0;
        for (const d of n) d.length === 2 ? c++ : d.length === 3 ? a++ : d.length === 4 && i++;
        let u = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (u += ` | ${c}fr`, i > 0 && (u += ` ${i}q4`), a > 0 && (u += ` ${a}tri`)), e.textContent = u;
      }
    }
    function fn() {
      var _a2;
      if (!Ct || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val, n = t.nodeInputs.val, l = t.elementInputs.val;
      if (!(e.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, e.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = la(e, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          ce = c, ne = e.map((d) => [
            ...d
          ]), gt = 0;
          const { extent: a } = no(), i = (_a2 = c.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let d = 0;
            for (let r = 0; r < e.length; r++) {
              const b = i[r * 6] || 0, $ = i[r * 6 + 1] || 0, w = i[r * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + $ * $ + w * w));
            }
            Ce = d > 1e-12 ? a * 0.05 / d : 1;
          }
          const u = `${z} \u2014 ${e.length}n ${o.length}e`;
          fe.render(c, {
            title: u
          }), fe.div.style.display = "", No(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ce = null;
      }
    }
    function un() {
      Ee && (cancelAnimationFrame(Ee), Ee = 0), ne.length > 0 && (t.nodes.val = ne.map((e) => [
        ...e
      ])), fe.div.style.display = "none", ce = null;
    }
    function No() {
      var _a2;
      if (Ee && cancelAnimationFrame(Ee), !(ce == null ? void 0 : ce.modeShapes) || !ne.length) return;
      const e = ce.modeShapes[gt];
      if (!e) return;
      const o = ((_a2 = ce.frequencies) == null ? void 0 : _a2[gt]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ne.length, c = t.elements.rawVal, { extent: a } = no(), i = he.querySelector("#cad3d-modal-scale"), u = i && parseFloat(i.value) || 5;
      let d = 0;
      for (let k = 0; k < s; k++) {
        const O = e[k * 6] || 0, y = e[k * 6 + 1] || 0, m = e[k * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(O * O + y * y + m * m));
      }
      const r = d > 1e-12 ? a * u / 100 / d : 1, b = Ue();
      if (!b) return;
      let $ = null, w = null, v = null;
      b.scene.traverse((k) => {
        var _a3, _b;
        !$ && k.isPoints && k.geometry && ($ = k), !w && k.isLineSegments && k.geometry && !k.name && (w = k), !v && k.isMesh && ((_a3 = k.material) == null ? void 0 : _a3.transparent) && ((_b = k.material) == null ? void 0 : _b.opacity) < 0.5 && k.geometry && (v = k);
      });
      const f = new Float32Array(s * 3), h = [];
      for (const k of c) if (k.length === 2) h.push([
        k[0],
        k[1]
      ]);
      else for (let O = 0; O < k.length; O++) h.push([
        k[O],
        k[(O + 1) % k.length]
      ]);
      const S = new Float32Array(h.length * 6);
      function I() {
        const k = (performance.now() - l) / 1e3, O = Math.sin(2 * Math.PI * n * k) * r;
        for (let y = 0; y < s; y++) {
          const m = ne[y];
          f[y * 3] = m[0] + (e[y * 6] || 0) * O, f[y * 3 + 1] = m[1] + (e[y * 6 + 1] || 0) * O, f[y * 3 + 2] = m[2] + (e[y * 6 + 2] || 0) * O;
        }
        if ($) {
          const y = $.geometry, m = y.getAttribute("position");
          m && m.array.length === f.length ? (m.array.set(f), m.needsUpdate = true) : y.setAttribute("position", new bo(f.slice(), 3));
        }
        if (w) {
          for (let p = 0; p < h.length; p++) {
            const [x, M] = h[p];
            S[p * 6] = f[x * 3], S[p * 6 + 1] = f[x * 3 + 1], S[p * 6 + 2] = f[x * 3 + 2], S[p * 6 + 3] = f[M * 3], S[p * 6 + 4] = f[M * 3 + 1], S[p * 6 + 5] = f[M * 3 + 2];
          }
          const y = w.geometry, m = y.getAttribute("position");
          m && m.array.length === S.length ? (m.array.set(S), m.needsUpdate = true) : y.setAttribute("position", new bo(S.slice(), 3));
        }
        if (v) {
          const y = [];
          for (const m of c) if (m.length === 3) {
            const [p, x, M] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[x * 3], f[x * 3 + 1], f[x * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]);
          } else if (m.length === 4) {
            const [p, x, M, T] = m;
            y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[x * 3], f[x * 3 + 1], f[x * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]), y.push(f[p * 3], f[p * 3 + 1], f[p * 3 + 2]), y.push(f[M * 3], f[M * 3 + 1], f[M * 3 + 2]), y.push(f[T * 3], f[T * 3 + 1], f[T * 3 + 2]);
          }
          if (y.length > 0) {
            const m = v.geometry, p = new Float32Array(y), x = m.getAttribute("position");
            x && x.array.length === p.length ? (x.array.set(p), x.needsUpdate = true) : m.setAttribute("position", new bo(p, 3));
          }
        }
        b.render(), Ee = requestAnimationFrame(I);
      }
      Ee = requestAnimationFrame(I);
    }
    function mn() {
      var _a2, _b, _c, _d, _e2;
      if (!t.deformOutputs || !t.analyzeOutputs || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, o = t.elements.val;
      let n = t.nodeInputs.val;
      const l = t.elementInputs.val;
      if (e.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const v = j("CM") ?? 0, f = j("CV") ?? 0, h = v + f, S = j("Ex") ?? 0, I = j("Ey") ?? 0;
        if (h === 0 && S === 0 && I === 0) return;
        const k = /* @__PURE__ */ new Map(), O = [];
        for (let A = 0; A < e.length; A++) n.supports.has(A) || O.push(A);
        const y = (A) => Math.round(A * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((A, P) => {
          m.add(`${y(e[P][0])},${y(e[P][1])}`);
        });
        const p = /* @__PURE__ */ new Set();
        for (const A of O) m.has(`${y(e[A][0])},${y(e[A][1])}`) && p.add(A);
        const x = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (S !== 0 || I !== 0) {
          let A = -1 / 0, P = -1 / 0;
          for (const Q of p) A = Math.max(A, y(e[Q][0])), P = Math.max(P, y(e[Q][1]));
          const q = /* @__PURE__ */ new Map();
          for (const Q of p) {
            const ee = y(e[Q][2]);
            q.has(ee) || q.set(ee, []), q.get(ee).push(Q);
          }
          q.forEach((Q) => {
            if (S !== 0) {
              const ee = /* @__PURE__ */ new Set();
              for (const ae of Q) if (y(e[ae][0]) === A) {
                const se = y(e[ae][1]);
                ee.has(se) || (ee.add(se), x.add(ae));
              }
            }
            if (I !== 0) {
              const ee = /* @__PURE__ */ new Set();
              for (const ae of Q) if (y(e[ae][1]) === P) {
                const se = y(e[ae][0]);
                ee.has(se) || (ee.add(se), M.add(ae));
              }
            }
          });
        }
        const T = 9.81, N = /* @__PURE__ */ new Map();
        for (let A = 0; A < o.length; A++) {
          const P = o[A], q = ((_a2 = l.densities) == null ? void 0 : _a2.get(A)) ?? 0;
          if (!(Math.abs(q) < 1e-15)) {
            if (P.length === 2) {
              const Q = ((_b = l.areas) == null ? void 0 : _b.get(A)) ?? 0, ee = e[P[0]], ae = e[P[1]], se = Math.sqrt((ae[0] - ee[0]) ** 2 + (ae[1] - ee[1]) ** 2 + (ae[2] - ee[2]) ** 2), le = -(q * Q * se * T) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + le), N.set(P[1], (N.get(P[1]) ?? 0) + le);
            } else if (P.length >= 3) {
              const Q = ((_c = l.thicknesses) == null ? void 0 : _c.get(A)) ?? 0;
              let ee = 0;
              if (P.length === 3) {
                const [U, le, Se] = P.map((Ne) => e[Ne]);
                ee = 0.5 * Math.abs((le[0] - U[0]) * (Se[1] - U[1]) - (Se[0] - U[0]) * (le[1] - U[1]));
              } else if (P.length === 4) {
                const [U, le, Se, Ne] = P.map((Pe) => e[Pe]);
                if (ee = 0.5 * Math.abs((le[0] - U[0]) * (Se[1] - U[1]) - (Se[0] - U[0]) * (le[1] - U[1])) + 0.5 * Math.abs((Se[0] - U[0]) * (Ne[1] - U[1]) - (Ne[0] - U[0]) * (Se[1] - U[1])), ee < 1e-10) {
                  const Pe = [
                    le[0] - U[0],
                    le[1] - U[1],
                    le[2] - U[2]
                  ], ie = [
                    Ne[0] - U[0],
                    Ne[1] - U[1],
                    Ne[2] - U[2]
                  ], xe = [
                    Pe[1] * ie[2] - Pe[2] * ie[1],
                    Pe[2] * ie[0] - Pe[0] * ie[2],
                    Pe[0] * ie[1] - Pe[1] * ie[0]
                  ];
                  ee = Math.sqrt(xe[0] ** 2 + xe[1] ** 2 + xe[2] ** 2);
                }
              }
              const se = -(q * Q * ee * T) / P.length;
              for (const U of P) N.set(U, (N.get(U) ?? 0) + se);
            }
          }
        }
        const C = /* @__PURE__ */ new Set();
        for (const A of o) A.length === 2 && (C.add(A[0]), C.add(A[1]));
        for (const A of O) {
          const P = x.has(A) ? S : 0, q = M.has(A) ? I : 0, Q = N.get(A) ?? 0, ee = C.has(A) ? h : 0, ae = Q + ee;
          (P !== 0 || q !== 0 || Math.abs(ae) > 1e-10) && k.set(A, [
            P,
            q,
            ae,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: k
        }, t.nodeInputs.val = n;
      }
      const s = performance.now();
      let c = 0, a = 0, i = 0;
      for (const v of o) v.length === 2 ? c++ : v.length === 3 ? i++ : v.length === 4 && a++;
      const u = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, r = e.length * 6, b = r - u * 6, $ = [], w = (v) => $.push(v);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${e.length} nodos, ${o.length} elem`), c && w(`&nbsp;&nbsp;Frames: <b>${c}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), i && w(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), w(`&nbsp;&nbsp;Apoyos: ${u} &nbsp;|&nbsp; Cargas: ${d}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${r} total, ~${b} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${r}&times;${r})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const v = Ht(e, o, n, l), f = performance.now() - s;
        if (v) {
          t.deformOutputs.val = v, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, S = -1, I = 0, k = 0;
          v.deformations && v.deformations.forEach((x, M) => {
            const T = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
            T > h && (h = T, S = M, I = x[0], k = x[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${S})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(I * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(k * 1e3).toFixed(4)} mm`);
          const O = performance.now(), y = Co(e, o, l, v), m = performance.now() - O;
          y && (t.analyzeOutputs.val = y, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const p = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${p.toFixed(0)} ms</b>`);
        }
      } catch (v) {
        const f = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${v.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${e.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), Ct && setTimeout(() => fn(), 50);
    }
    function bn(e, o) {
      const n = e * o, l = e * o * o * o / 12, s = o * e * e * e / 12, c = Math.min(e, o), a = Math.max(e, o), i = c * c * c * a * (1 / 3 - 0.21 * c / a * (1 - c * c * c * c / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: i
      };
    }
    function as(e) {
      const o = e / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function gn(e, o, n, l) {
      const s = o - 2 * n, c = 2 * e * n + s * l, a = (e * o * o * o - (e - l) * s * s * s) / 12, i = (2 * n * e * e * e + s * l * l * l) / 12, u = (2 * e * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: a,
        Iy: i,
        J: u
      };
    }
    function hn(e, o, n) {
      const l = e - 2 * n, s = o - 2 * n, c = e * o - l * s, a = (e * o * o * o - l * s * s * s) / 12, i = (o * e * e * e - s * l * l * l) / 12, u = (e - n) * (o - n), d = 2 * ((e - n) / n + (o - n) / n), r = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: c,
        Iz: a,
        Iy: i,
        J: r
      };
    }
    function Rs(e, o, n, l, s, c, a) {
      const u = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = e - 2 * n, r = o - 2 * n, b = e * o - d * r, $ = (e * o * o * o - d * r * r * r) / 12, w = (o * e * e * e - r * d * d * d) / 12, v = d * r, f = d * r * r * r / 12, h = r * d * d * d / 12, S = b + u * v, I = $ + u * f, k = w + u * h, O = l / (2 * (1 + s)), y = (e - n) * (o - n), m = 2 * ((e - n) / n + (o - n) / n), p = 4 * y * y / (m > 0 ? m : 1);
      return {
        A: S,
        Iz: I,
        Iy: k,
        J: p,
        Es: l,
        Gs: O,
        A_steel: b,
        A_conc: v
      };
    }
    function oo() {
      if (!t.elementInputs) return;
      const e = t.elements.val, o = E, n = {
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
        const { colMat: s, vigaMat: c, colShape: a, fc: i, perFloor: u } = Te, d = 4700 * Math.sqrt(i / 1e3) * 1e3, r = d / (2 * 1.2), b = 24 / 9.80665, $ = o.E, w = o.G, v = o.rho;
        for (let f = 0; f < e.length; f++) {
          if (_e.has(f)) {
            const x = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, x), n.poissonsRatios.set(f, M), n.thicknesses.set(f, Ze), n.shearModuli.set(f, x / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (Tt.has(f)) {
            const x = 4700 * Math.sqrt(i / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(f, x), n.poissonsRatios.set(f, M), n.thicknesses.set(f, wt), n.shearModuli.set(f, x / (2 * (1 + M))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = de.has(f), S = qe.get(f) ?? 0, I = u[S] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let k, O, y, m;
          if (h) if (s === 0) O = d, y = r, m = b, k = a === 1 ? as(I.dCol) : bn(I.bCol, I.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: I.dCol
          } : {
            type: "rect",
            b: I.bCol,
            h: I.hCol
          });
          else if (s === 1) {
            O = $, y = w, m = v;
            const x = Te.steelColType;
            if (x <= 1) {
              const M = po[I.colProfileIdx] ?? po[0];
              k = {
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
            } else if (x === 2) {
              const M = I.colBf ?? 0.3, T = I.colHf ?? 0.3, N = I.colTf ?? 0.02, C = I.colTw ?? 0.012;
              k = gn(M, T, N, C);
              const A = `I${(T * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: M,
                h: T,
                tf: N,
                tw: C,
                name: A
              });
            } else {
              const M = I.colBc ?? 0.3, T = I.colHc ?? 0.3, N = I.colT ?? 0.01;
              k = hn(M, T, N);
              const C = `\u25A1${(T * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(N * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: M,
                h: T,
                tw: N,
                name: C
              });
            }
          } else {
            const x = I.colBc ?? 0.3, M = I.colHc ?? 0.3, T = I.colT ?? 0.01, N = I.colFc ?? 28e3, C = I.colEs ?? 2e8, A = I.colNuS ?? 0.3;
            I.colNuC;
            const P = Rs(x, M, T, C, A, N);
            k = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, O = P.Es, y = P.Gs;
            const q = 7.85, Q = 24 / 9.80665;
            m = (q * P.A_steel + Q * P.A_conc) / (P.A_steel + P.A_conc);
            const ee = `CFT ${(M * 1e3).toFixed(0)}X${(x * 1e3).toFixed(0)}X${(T * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: x,
              h: M,
              tw: T,
              name: ee
            });
          }
          else {
            const x = Ge.get(f), M = x ? x.dir === "x" ? I.vigasX : I.vigasY : [], T = x ? M[x.bay] ?? M[0] ?? zt() : zt();
            if (c === 0) O = d, y = r, m = b, k = bn(T.b, T.h), n.sectionShapes.set(f, {
              type: "rect",
              b: T.b,
              h: T.h
            });
            else {
              O = $, y = w, m = v;
              const N = Te.steelVigaType;
              if (N <= 1) {
                const C = po[T.profileIdx ?? 0] ?? po[0];
                k = {
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
              } else if (N === 2) {
                const C = T.bf ?? 0.2, A = T.hf ?? 0.4, P = T.tf ?? 0.015, q = T.tw ?? 0.01;
                k = gn(C, A, P, q);
                const Q = `I${(A * 100).toFixed(0)}x${(C * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: C,
                  h: A,
                  tf: P,
                  tw: q,
                  name: Q
                });
              } else {
                const C = T.bc ?? 0.2, A = T.hc ?? 0.3, P = T.t ?? 8e-3;
                k = hn(C, A, P);
                const q = `\u25A1${(A * 100).toFixed(0)}x${(C * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: C,
                  h: A,
                  tw: P,
                  name: q
                });
              }
            }
          }
          const p = ue.get(f);
          if (p) {
            if ((p.material ?? 1) === 0 ? (O = d, y = r, m = b) : (O = $, y = w, m = v), p.secType === "rect" && p.b && p.h) k = bn(p.b, p.h), n.sectionShapes.set(f, {
              type: "rect",
              b: p.b,
              h: p.h
            });
            else if (p.secType === "circ" && p.b) k = as(p.b), n.sectionShapes.set(f, {
              type: "circ",
              d: p.b
            });
            else if ((p.secType === "W" || p.secType === "HSS") && p.profileIdx !== void 0) {
              const M = po[p.profileIdx] ?? po[0];
              k = {
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
              k = gn(p.bf, p.hf, p.tf, p.tw);
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
              k = hn(p.bc, p.hc, p.t);
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
          n.elasticities.set(f, O), n.shearModuli.set(f, y), n.areas.set(f, k.A), n.momentsOfInertiaZ.set(f, k.Iy), n.momentsOfInertiaY.set(f, k.Iz), n.torsionalConstants.set(f, k.J), n.densities.set(f, m);
        }
      } else for (let s = 0; s < e.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      t.elementInputs.val = n;
    }
    function ls(e) {
      he.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === e);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
      (_a2 = he.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (y) => {
        y.stopPropagation(), he.classList.add("collapsed");
      }), (_b = he.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (y) => {
        y.stopPropagation(), he.classList.remove("collapsed");
      }), he.querySelectorAll("[data-ex]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.ex;
          ls(p), We.example(p);
        });
      }), he.querySelectorAll("[data-view]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.view;
          so(p), he.querySelectorAll("[data-view]").forEach((x) => x.classList.remove("view-active")), y.classList.add("view-active");
        });
      }), (_c = he.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (y) => {
        y.stopPropagation(), z = "", Ls.val = false, Ps(), We.clear();
      }), (_d = he.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && (Bt = false, mo()), Jt && Wo(), qt = !qt, (_a3 = he.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", qt);
        const p = Ue();
        p && (p.controls.enabled = !qt), qt || jo();
      }), (_e2 = he.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), Bt && (Bt = false, mo()), qt && jo(), Jt = !Jt, (_a3 = he.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", Jt), Jt ? js() : Wo();
      }), (_f = he.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (y) => {
        var _a3;
        y.stopPropagation(), qt && jo(), Jt && Wo(), Bt = !Bt, (_a3 = he.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Bt), Bt || mo();
      }), (_g = he.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (y) => {
        y.stopPropagation(), We.clear(), st = null;
      }), (_h = he.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (y) => {
        y.stopPropagation(), Ns();
      });
      let e = "";
      const o = he.querySelector("#cad3d-io-menu"), n = he.querySelector("#cad3d-io-file");
      function l(y, m) {
        t.nodes.val = y.nodes, t.elements.val = y.elements, t.nodeInputs.val = y.nodeInputs, t.elementInputs.val = y.elementInputs, t.deformOutputs.val = {}, t.analyzeOutputs.val = {}, console.log(`${m}: ${y.nodes.length} nodes, ${y.elements.length} elements`);
      }
      function s(y) {
        de = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map();
        const m = /* @__PURE__ */ new Map();
        for (let q = 0; q < y.stories.length; q++) m.set(y.stories[q].name, q);
        for (let q = 0; q < y.elementTypes.length; q++) {
          const Q = y.elementTypes[q], ee = y.elementStories[q], ae = m.get(ee) ?? 0;
          qe.set(q, ae), Q === "COLUMN" || Q === "BRACE" ? de.add(q) : Le.add(q);
        }
        z = "edificio";
        const p = y.grids.filter((q) => q.dir === "X").sort((q, Q) => q.coord - Q.coord), x = y.grids.filter((q) => q.dir === "Y").sort((q, Q) => q.coord - Q.coord);
        let M, T, N, C;
        if (p.length > 0 || x.length > 0) M = p.map((q) => q.coord), T = x.map((q) => q.coord), N = p.map((q) => q.label), C = x.map((q) => q.label);
        else {
          const q = new Set(y.nodes.map((ee) => ee[0])), Q = new Set(y.nodes.map((ee) => ee[1]));
          M = [
            ...q
          ].sort((ee, ae) => ee - ae), T = [
            ...Q
          ].sort((ee, ae) => ee - ae), N = M.map((ee, ae) => String(ae + 1)), C = T.map((ee, ae) => String.fromCharCode(65 + ae));
        }
        const A = y.stories.length > 0 ? Math.max(...y.stories.map((q) => q.elev)) : Math.max(...y.nodes.map((q) => q[2]));
        ge = M, He = T, Ke = A, setTimeout(() => {
          $t(), yt(M, T, A, N, C), nn(y.stories, M, T), xn(), vn();
        }, 100);
        const P = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const q of y.elementTypes) P[q]++;
        console.log(`E2K grids: X=[${N.join(",")}] Y=[${C.join(",")}]`), console.log(`E2K stories: ${y.stories.map((q) => `${q.name}@${q.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${P.COLUMN} columns, ${P.BEAM} beams, ${P.BRACE} braces`), Ye();
      }
      function c(y, m) {
        const p = new Blob([
          y
        ], {
          type: "text/plain"
        }), x = URL.createObjectURL(p), M = document.createElement("a");
        M.href = x, M.download = m, M.click(), URL.revokeObjectURL(x);
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
            e === "export-e2k" ? c(_a({
              ...y,
              title: "Awatif Model",
              e2kModel: st ?? void 0
            }), "model.e2k") : e === "export-py" ? c(ja(y), "model_opensees.py") : e === "export-tcl" && c(Wa(y), "model_opensees.tcl");
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
              const x = Ra(p);
              st = x, l(x, "E2K imported"), s(x);
            } else if (e === "import-py") {
              const x = Ya(p);
              l(x, "OpenSeesPy imported");
            } else if (e === "import-tcl") {
              const x = Ga(p);
              l(x, "OpenSees Tcl imported");
            }
          } catch (x) {
            alert("Import error: " + x.message), console.error(x);
          }
        }, m.readAsText(y), n.value = "";
      });
      const a = he.querySelector("#cad3d-force-unit");
      a && (a.value = g, a.addEventListener("change", (y) => {
        y.stopPropagation(), g = a.value, E = xo(g, R), z && Xe(z);
      }));
      const i = he.querySelector("#cad3d-length-unit");
      i && (i.value = R, i.addEventListener("change", (y) => {
        y.stopPropagation(), R = i.value, E = xo(g, R), z && Xe(z);
      })), he.querySelectorAll("[data-preset]").forEach((y) => {
        y.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = y.dataset.preset, x = _[p];
          x && (g = x.force, R = x.length, W = x.stress, E = xo(g, R), a && (a.value = g), i && (i.value = R), he.querySelectorAll("[data-preset]").forEach((M) => {
            M.classList.toggle("active", M.dataset.preset === p);
          }), z && Xe(z), console.log(`Preset: ${p} \u2192 ${g}+${R}, stress: ${W.label}`));
        });
      }), (_i = he.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (y) => {
        y.stopPropagation(), Us();
      }), (_j = he.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (y) => {
        y.stopPropagation(), Zs();
      }), (_k = he.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (y) => {
        y.stopPropagation(), ea();
      }), (_l = he.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l.addEventListener("click", (y) => {
        y.stopPropagation(), oa();
      }), (_m = he.querySelector("#cad3d-modal")) == null ? void 0 : _m.addEventListener("click", (y) => {
        var _a3, _b2;
        y.stopPropagation(), Ct = !Ct, (_a3 = he.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", Ct);
        const p = he.querySelector("#cad3d-mode-prev"), x = he.querySelector("#cad3d-mode-next"), M = he.querySelector("#cad3d-mode-label"), T = he.querySelector("#cad3d-modal-scale");
        if (Ct) {
          const N = Ue();
          ((_b2 = N == null ? void 0 : N.settings) == null ? void 0 : _b2.loads) && (V = N.settings.loads.rawVal, N.settings.loads.val = false), fn(), p.style.display = "", x.style.display = "", M.style.display = "", T && (T.style.display = ""), u();
        } else un(), p.style.display = "none", x.style.display = "none", M.style.display = "none", T && (T.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && ye(), setTimeout(() => {
          var _a4;
          const N = Ue();
          ((_a4 = N == null ? void 0 : N.settings) == null ? void 0 : _a4.loads) && V && (N.settings.loads.val = true);
        }, 600);
      });
      function u() {
        var _a3;
        const y = he.querySelector("#cad3d-mode-label");
        if (!y || !(ce == null ? void 0 : ce.frequencies)) return;
        const m = ce.frequencies[gt], p = m > 0 ? 1 / m : 0, x = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let M = 0; M <= gt; M++) {
          const T = (_a3 = ce.massParticipation) == null ? void 0 : _a3[M];
          if (T) for (let N = 0; N < 6; N++) x[N] += T[N];
        }
        y.textContent = `Modo ${gt + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${p.toFixed(3)}s \u2014 \u03A3Ux=${(x[0] * 100).toFixed(1)}% \u03A3Uy=${(x[1] * 100).toFixed(1)}% \u03A3Rz=${(x[5] * 100).toFixed(1)}%`;
      }
      (_n2 = he.querySelector("#cad3d-mode-prev")) == null ? void 0 : _n2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(ce == null ? void 0 : ce.modeShapes)) return;
        gt = (gt - 1 + ce.modeShapes.length) % ce.modeShapes.length;
        const m = ce.modeShapes[gt], { extent: p } = no();
        let x = 0;
        for (let M = 0; M < ne.length; M++) {
          const T = m[M * 6] || 0, N = m[M * 6 + 1] || 0, C = m[M * 6 + 2] || 0;
          x = Math.max(x, Math.sqrt(T * T + N * N + C * C));
        }
        Ce = x > 1e-12 ? p * 0.05 / x : 1, No(), u();
      }), (_o2 = he.querySelector("#cad3d-mode-next")) == null ? void 0 : _o2.addEventListener("click", (y) => {
        if (y.stopPropagation(), !(ce == null ? void 0 : ce.modeShapes)) return;
        gt = (gt + 1) % ce.modeShapes.length;
        const m = ce.modeShapes[gt], { extent: p } = no();
        let x = 0;
        for (let M = 0; M < ne.length; M++) {
          const T = m[M * 6] || 0, N = m[M * 6 + 1] || 0, C = m[M * 6 + 2] || 0;
          x = Math.max(x, Math.sqrt(T * T + N * N + C * C));
        }
        Ce = x > 1e-12 ? p * 0.05 / x : 1, No(), u();
      });
      const d = he.querySelector("#cad3d-modal-scale");
      d == null ? void 0 : d.addEventListener("mousedown", (y) => y.stopPropagation()), d == null ? void 0 : d.addEventListener("change", () => {
        Ct && (ce == null ? void 0 : ce.modeShapes) && No();
      });
      const r = he.querySelector("#cad3d-cli-toggle"), b = he.querySelector("#cad3d-cli-panel"), $ = he.querySelector("#cad3d-cli-output"), w = he.querySelector("#cad3d-cmd"), v = [];
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
          y.preventDefault(), rs();
          return;
        }
        if ((y.ctrlKey || y.metaKey) && (y.key === "y" || y.key === "z" && y.shiftKey)) {
          y.preventDefault(), cs();
          return;
        }
        if ((y.key === "Delete" || y.key === "Backspace") && nt.size > 0) {
          y.preventDefault(), nt.forEach((m) => G.add(m)), nt.clear(), Xt && (Xt.remove(), Xt = null), ye();
          return;
        }
        if (y.key === "Escape") {
          if (Jt) if (at !== null) {
            at = null;
            const m = Ue();
            St && m && (m.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), Et && m && (m.scene.remove(Et), Et.geometry.dispose(), Et.material.dispose(), Et = null), m == null ? void 0 : m.render();
          } else Wo();
          qt && jo(), Bt && (Bt = false, mo(), (_a3 = he.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), w == null ? void 0 : w.addEventListener("keydown", (y) => {
        if (y.stopPropagation(), y.key === "Enter") {
          const m = w.value.trim();
          if (m) {
            v.unshift(m), f = -1, $ && ($.textContent += `> ${m}
`);
            try {
              const p = new Function("cad", `return ${m}`)(We);
              if (p !== void 0 && $) {
                const x = typeof p == "object" ? JSON.stringify(p, null, 2) : String(p);
                $.textContent += `${x}
`;
              }
            } catch (p) {
              $ && ($.textContent += `ERROR: ${p.message}
`);
            }
            $ && ($.scrollTop = $.scrollHeight), w.value = "";
          }
        } else y.key === "ArrowUp" ? (y.preventDefault(), v.length > 0 && f < v.length - 1 && (f++, w.value = v[f])) : y.key === "ArrowDown" && (y.preventDefault(), f > 0 ? (f--, w.value = v[f]) : (f = -1, w.value = ""));
      });
      let h = false, S = 0, I = 0, k = 0, O = 0;
      he.addEventListener("mousedown", (y) => {
        const m = y.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        h = true;
        const p = he.getBoundingClientRect();
        he.style.bottom = "unset", S = y.clientX, I = y.clientY, k = p.left, O = p.top, y.preventDefault();
      }), window.addEventListener("mousemove", (y) => {
        h && (y.preventDefault(), he.style.left = k + (y.clientX - S) + "px", he.style.top = O + (y.clientY - I) + "px");
      }), window.addEventListener("mouseup", () => {
        h = false;
      }), Ye();
    }, 10);
    function Ue() {
      const e = document.getElementById("viewer");
      return e ? e.__ctx : null;
    }
    function no() {
      const e = t.nodes.val;
      if (e.length === 0) return {
        center: new we(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, a = -1 / 0;
      for (const [d, r, b] of e) d < o && (o = d), d > s && (s = d), r < n && (n = r), r > c && (c = r), b < l && (l = b), b > a && (a = b);
      const i = new we((o + s) / 2, (n + c) / 2, (l + a) / 2), u = Math.max(s - o, c - n, a - l, 1);
      return {
        center: i,
        extent: u
      };
    }
    function $t(e = false) {
      const o = Ue();
      if (!o) return;
      const { extent: n } = no();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const c = ra(), a = new ha(l, 20, c.grid, c.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some(($) => $ instanceof Yo))).forEach((b) => {
        b.traverse(($) => {
          $.geometry && $.geometry.dispose(), $.material && ($.material.map && $.material.map.dispose(), $.material.dispose());
        }), o.scene.remove(b);
      });
      const u = 0.05 * l, d = new Go();
      d.name = "viewerAxes";
      const r = c.axisArrow;
      d.add(new Yo(new we(1, 0, 0), new we(), 1, r, 0.2, 0.2)), d.add(new Yo(new we(0, 1, 0), new we(), 1, r, 0.2, 0.2)), d.add(new Yo(new we(0, 0, 1), new we(), 1, r, 0.2, 0.2)), d.children.forEach((b) => b.scale.set(u, u, u));
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
        const v = document.createElement("canvas");
        v.width = 64, v.height = 64;
        const f = v.getContext("2d");
        f.fillStyle = $, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(b, 32, 34);
        const h = new An(v);
        h.needsUpdate = true;
        const S = new Jo(new Vo({
          map: h,
          depthTest: false,
          transparent: true
        }));
        S.position.set(w[0], w[1], w[2]), S.scale.set(0.4 * u, 0.4 * u, 1), S.renderOrder = 99, d.add(S);
      }
      o.scene.add(d), e ? o.render() : so("3d");
    }
    function is(e, o, n) {
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
        if (e === "plan") o.renderer.clippingPlanes = [], u(new we(n.x, n.y, n.z + l * 2), new we(n.x, n.y, n.z), new we(0, 1, 0));
        else if (e.startsWith("plan:")) {
          const d = parseInt(e.split(":")[1]), r = ((_a2 = X.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (d + 1) * r, $ = r * 0.45;
          o.renderer.clippingPlanes = [
            new co(new we(0, 0, -1), b + $),
            new co(new we(0, 0, 1), -b + $)
          ], a(), u(new we(n.x, n.y, b + l * 2), new we(n.x, n.y, b), new we(0, 1, 0));
        } else if (e === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (e === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (e.startsWith("axisX:")) {
          const d = parseInt(e.split(":")[1]), r = ge[d] ?? n.x;
          if (He.length > 1) {
            const $ = is(ge, d, l);
            o.renderer.clippingPlanes = [
              new co(new we(-1, 0, 0), r + $),
              new co(new we(1, 0, 0), -r + $)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (e.startsWith("axisY:")) {
          const d = parseInt(e.split(":")[1]), r = He[d] ?? n.y;
          if (ge.length > 1) {
            const $ = is(He, d, l);
            o.renderer.clippingPlanes = [
              new co(new we(0, -1, 0), r + $),
              new co(new we(0, 1, 0), -r + $)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !e.startsWith("axisX:") && !e.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function xn() {
      const e = he.querySelector("#cad3d-axis-buttons");
      if (!e) return;
      if (ge.length < 2 && He.length < 2) {
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
          he.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), r ? (so("3d"), (_a2 = he.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (so(a), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      ge.forEach((c, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        e.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", e.appendChild(s), He.forEach((c, a) => {
        const i = `${a + 1}`;
        e.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function vn() {
      var _a2;
      const e = he.querySelector("#cad3d-floor-buttons");
      if (!e) return;
      const o = Math.round(((_a2 = X.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
          he.querySelectorAll("[data-view]").forEach((r) => r.classList.remove("view-active")), d ? (so("3d"), (_a3 = he.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (so(c), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", e.appendChild(l);
      for (let s = 0; s < o; s++) e.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function _s() {
      so("3d"), he.querySelectorAll("[data-view]").forEach((e) => e.classList.toggle("view-active", e.dataset.view === "3d"));
    }
    We.view = (e) => {
      e = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[e] || e, so(e), he.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === e));
    };
    let Bt = false, qt = false, Jt = false, It = "line", Ot = [], at = null, St = null, Et = null, wo = null, Rt = null;
    const ct = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, yn = 0.5;
    let $n = [], _t = null, uo = null;
    const Mo = [], Do = [], Hs = 50;
    function So() {
      Mo.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      }), Mo.length > Hs && Mo.shift(), Do.length = 0;
    }
    function rs() {
      if (Mo.length === 0) return;
      Do.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      });
      const e = Mo.pop();
      t.nodes.val = e.nodes, t.elements.val = e.elements, oo(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    function cs() {
      if (Do.length === 0) return;
      Mo.push({
        nodes: JSON.parse(JSON.stringify(t.nodes.val)),
        elements: JSON.parse(JSON.stringify(t.elements.val))
      });
      const e = Do.pop();
      t.nodes.val = e.nodes, t.elements.val = e.elements, oo(), t.elementInputs.val = {
        ...t.elementInputs.val
      };
    }
    const nt = /* @__PURE__ */ new Set();
    let Ft = null, ao = [], Vt = null, Xt = null;
    function wn(e) {
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
      const a = new Lo(c, new To({
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
        na([
          ...nt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (nt.size === 1) {
          const n = [
            ...nt
          ][0];
          gs(n);
        } else {
          const n = [
            ...nt
          ], l = t.nodes.val, s = t.elements.val;
          let c = 0, a = 0, i = 0, u = 0;
          n.forEach((r) => {
            const b = s[r];
            if (b) if (b.length === 2) {
              const $ = l[b[0]], w = l[b[1]], v = Math.abs(w[0] - $[0]), f = Math.abs(w[1] - $[1]), h = Math.abs(w[2] - $[2]);
              h > v && h > f ? c++ : a++;
            } else b.length === 3 ? i++ : b.length === 4 && u++;
          });
          const d = [];
          c && d.push(`${c} columnas`), a && d.push(`${a} vigas`), u && d.push(`${u} shells Q4`), i && d.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        nt.forEach((n) => D.add(n)), nt.clear(), lo(), io(), ye();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        B = true, Y.clear(), nt.forEach((n) => Y.add(n)), nt.clear(), lo(), io(), ye();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        D.clear(), B = false, Y.clear(), io(), ye();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        So(), nt.forEach((n) => G.add(n)), nt.clear(), lo(), io(), ye();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        nt.clear(), lo(), io();
      });
    }
    function jo() {
      var _a2;
      qt = false, nt.clear(), lo(), Xt && (Xt.remove(), Xt = null), (_a2 = he.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
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
    function Bs(e) {
      Mn();
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
        u.setAttribute("position", new pa(i, 3));
        const d = new zo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), r = new Lo(u, d);
        r.computeLineDistances(), r.renderOrder = 9990, o.scene.add(r), $n.push(r);
      }
      o.render();
    }
    function Mn() {
      const e = Ue();
      for (const o of $n) e == null ? void 0 : e.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      $n = [], uo = null, _t && (_t.remove(), _t = null);
    }
    function ds(e, o, n, l) {
      _t || (_t = document.createElement("div"), _t.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(_t));
      const s = l.x - n.x, c = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + c * c + a * a), u = Math.abs(s), d = Math.abs(c), r = Math.abs(a);
      let b = "";
      u > d && u > r ? b = `\u0394X=${s.toFixed(2)}` : d > u && d > r ? b = `\u0394Y=${c.toFixed(2)}` : r > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), _t.textContent = `${i.toFixed(3)} m  ${b}`, _t.style.left = e + 20 + "px", _t.style.top = o - 10 + "px";
    }
    function Ds(e, o) {
      const l = t.nodes.val[o];
      if (!l) return null;
      const s = new we(l[0], l[1], l[2]), c = e.clone(), a = c.clone().sub(s), i = 0.3, u = Math.abs(a.x), d = Math.abs(a.y), r = Math.abs(a.z);
      return d < i && r < i && u > 0.01 ? new we(c.x, s.y, s.z) : u < i && r < i && d > 0.01 ? new we(s.x, c.y, s.z) : u < i && d < i && r > 0.01 ? new we(s.x, s.y, c.z) : null;
    }
    function Wo() {
      var _a2;
      const e = Ue();
      St && e && (e.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), Et && e && (e.scene.remove(Et), Et.geometry.dispose(), Et.material.dispose(), Et = null), Mn(), at = null, Rt = null, Jt = false, wo && (wo.remove(), wo = null), (_a2 = he.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), e == null ? void 0 : e.render();
    }
    function js() {
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
      <input id="ds-gridsize" type="number" value="${yn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
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
        It = "line", at = null, Rt = null, Ot = [], l();
      }), e.querySelector("#dt-arc").addEventListener("click", () => {
        It = "arc", at = null, Rt = null, Ot = [], l();
      }), e.querySelector("#dt-node").addEventListener("click", () => {
        It = "node", at = null, Rt = null, Ot = [], l();
      }), e.querySelector("#dt-area").addEventListener("click", () => {
        It = "area", at = null, Rt = null, Ot = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), e.querySelector("#ds-node").addEventListener("click", () => {
        ct.node = !ct.node, l();
      }), e.querySelector("#ds-grid").addEventListener("click", () => {
        ct.grid = !ct.grid, l();
      }), e.querySelector("#ds-mid").addEventListener("click", () => {
        ct.midpoint = !ct.midpoint, l();
      }), e.querySelector("#ds-track").addEventListener("click", () => {
        ct.track = !ct.track, ct.track || Mn(), l();
      }), e.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ct.gridSize = parseFloat(s.target.value) || 0.5;
      }), e.querySelector("#dt-undo").addEventListener("click", () => rs()), e.querySelector("#dt-redo").addEventListener("click", () => cs());
    }
    function ps(e, o, n, l) {
      const s = l.getBoundingClientRect(), c = (e - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new Es();
      i.setFromCamera(new ks(c, a), n);
      const u = t.nodes.val, d = t.elements.val, r = 0.12;
      if (ct.node) {
        let w = -1, v = 1 / 0;
        for (let f = 0; f < u.length; f++) {
          const h = u[f], S = new we(h[0], h[1], h[2]).project(n), I = Math.sqrt((S.x - c) ** 2 + (S.y - a) ** 2);
          I < r && I < v && (v = I, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new we(...u[w]),
          snapType: "node"
        };
      }
      if (ct.midpoint) {
        let w = 1 / 0, v = null;
        for (const f of d) {
          if (f.length !== 2) continue;
          const h = u[f[0]], S = u[f[1]], I = new we((h[0] + S[0]) / 2, (h[1] + S[1]) / 2, (h[2] + S[2]) / 2), k = I.clone().project(n), O = Math.sqrt((k.x - c) ** 2 + (k.y - a) ** 2);
          O < r * 0.8 && O < w && (w = O, v = I);
        }
        if (v) return {
          nodeIdx: null,
          worldPos: v,
          snapType: "mid"
        };
      }
      if (ct.grid) {
        const w = new co(new we(0, 0, 1), 0), v = new we();
        if (i.ray.intersectPlane(w, v)) {
          const f = ct.gridSize || yn;
          return v.x = Math.round(v.x / f) * f, v.y = Math.round(v.y / f) * f, v.z = Math.round(v.z / f) * f, {
            nodeIdx: null,
            worldPos: v,
            snapType: "grid"
          };
        }
      }
      const b = new co(new we(0, 0, 1), 0), $ = new we();
      return i.ray.intersectPlane(b, $), {
        nodeIdx: null,
        worldPos: $,
        snapType: "free"
      };
    }
    function fs(e) {
      const o = Ue();
      if (!o) return;
      const n = t.nodes.val;
      if (Et && (o.scene.remove(Et), Et.geometry.dispose(), Et.material.dispose(), Et = null), e.worldPos) {
        const l = e.snapType === "node" ? 16776960 : e.snapType === "mid" ? 16711935 : e.snapType === "grid" ? 65535 : 8947848, s = e.snapType === "node" ? 0.08 : 0.06, c = e.snapType === "mid" ? new fa(s * 2, s * 2, s * 2) : new ua(s, 12, 12), a = new ma({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Et = new ba(c, a), Et.position.copy(e.worldPos), Et.renderOrder = 9999, o.scene.add(Et);
      }
      if (St && (o.scene.remove(St), St.geometry.dispose(), St.material.dispose(), St = null), at !== null && e.worldPos) {
        const l = n[at], s = new Dt();
        if (It === "arc" && Rt !== null) {
          const a = n[Rt], i = us(new we(l[0], l[1], l[2]), new we(a[0], a[1], a[2]), e.worldPos, 16), u = [];
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
        St = new go(s, c), It === "arc" && Rt !== null && (St = new Lo(s, c)), St.renderOrder = 9999, o.scene.add(St);
      }
      o.render();
    }
    function us(e, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const a = c / l, i = o.clone().multiplyScalar(2).sub(e.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), u = (1 - a) * (1 - a), d = 2 * (1 - a) * a, r = a * a;
        s.push(new we(u * e.x + d * i.x + r * n.x, u * e.y + d * i.y + r * n.y, u * e.z + d * i.z + r * n.z));
      }
      return s;
    }
    function Sn(e) {
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
    function Ws(e) {
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
        const o = Sn(e);
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
        const o = Sn(e);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (Rt === null) {
          if (o === at) return;
          Rt = o;
          return;
        }
        if (o === at || o === Rt) return;
        const n = t.nodes.val, l = new we(...n[at]), s = new we(...n[Rt]), c = new we(...n[o]), a = Math.max(4, Math.round(((_a2 = X.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = us(l, s, c, a);
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
        }, at = o, Rt = null;
        return;
      }
      if (It === "area") {
        const o = Sn(e);
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
              maxMeshSize: yn || 0.5
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
              new we(...l[n]),
              new we(...l[o])
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
    function ms(e) {
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
      c.setAttribute("position", new bo(s, 3)), Ft = new Lo(c, new To({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Ft.renderOrder = 9999, o.scene.add(Ft), o.render();
    }
    function En(e) {
      const o = Ue();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ks((e.clientX - n.left) / n.width * 2 - 1, -((e.clientY - n.top) / n.height) * 2 + 1), s = new Es();
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
          const w = new we(...c[$[0]]), v = new we(...c[$[1]]), f = new ga(w, v), h = new we(), S = new we();
          d.closestPointToPoint(f.getCenter(new we()), h), f.closestPointToPoint(h, true, S);
          const I = h.distanceTo(S);
          I < i && (i = I, u = b);
        } else if ($.length === 3) {
          const w = new we(...c[$[0]]), v = new we(...c[$[1]]), f = new we(...c[$[2]]), h = new we();
          if (d.intersectTriangle(w, v, f, false, h)) {
            const I = d.origin.distanceTo(h);
            I < i && (i = I, u = b);
          } else {
            const I = w.add(v).add(f).divideScalar(3), k = new we();
            d.closestPointToPoint(I, k);
            const O = k.distanceTo(I);
            O < i && (i = O, u = b);
          }
        } else if ($.length === 4) {
          const w = new we(...c[$[0]]), v = new we(...c[$[1]]), f = new we(...c[$[2]]), h = new we(...c[$[3]]), S = new we();
          let I = d.intersectTriangle(w, v, f, false, S);
          if (I) {
            const k = d.origin.distanceTo(S);
            k < i && (i = k, u = b);
          }
          if (I = d.intersectTriangle(w, f, h, false, S), I) {
            const k = d.origin.distanceTo(S);
            k < i && (i = k, u = b);
          }
        }
      }
      const { extent: r } = no();
      return i < r * 0.1 ? u : -1;
    }
    function Z(e, o = 4) {
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
          c += `<td class="${d}">${Z(u, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function ke(e, o) {
      return `<span class="frac"><span class="frac-num">${e}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(e, o, n) {
      let l = `<span class="var">${e}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ys(e, o, n, l, s, c, a) {
      const i = `${ke(F("E") + "\xB7" + F("A"), F("L"))}`, u = `${ke("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`, d = `${ke("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`, r = `${ke(F("G") + "\xB7" + F("J"), F("L"))}`, b = `${ke("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`, $ = `${ke("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${i} = ${ke(Z(e) + "\xB7" + Z(o), Z(a))} = <span class="highlight">${Z(e * o / a)}</span></div>
      <div>${u} = ${ke("12\xB7" + Z(e) + "\xB7" + Z(n), Z(a) + "\xB3")} = <span class="highlight">${Z(12 * e * n / a ** 3)}</span></div>
      <div>${d} = ${ke("12\xB7" + Z(e) + "\xB7" + Z(l), Z(a) + "\xB3")} = <span class="highlight">${Z(12 * e * l / a ** 3)}</span></div>
      <div>${r} = ${ke(Z(s) + "\xB7" + Z(c), Z(a))} = <span class="highlight">${Z(s * c / a)}</span></div>
      <div>${b} = ${ke("4\xB7" + Z(e) + "\xB7" + Z(l), Z(a))} = <span class="highlight">${Z(4 * e * l / a)}</span></div>
      <div>${$} = ${ke("4\xB7" + Z(e) + "\xB7" + Z(n), Z(a))} = <span class="highlight">${Z(4 * e * n / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ke(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ke("\u2212" + F("EA"), F("L"))}</span>
        <span class="cell">0</span><span class="cell">${ke("12" + F("EI", "z"), F("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ke("\u2212" + F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ke(F("EA"), F("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Gs(e) {
      if (e.length === 2) {
        const n = to(e[1], e[0]), l = vo(n), s = n[0] / l, c = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${ke("\u0394x", F("L"))} = ${ke(Z(n[0]), Z(l))} = <span class="highlight">${Z(s)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${ke("\u0394y", F("L"))} = ${ke(Z(n[1]), Z(l))} = <span class="highlight">${Z(c)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${ke("\u0394z", F("L"))} = ${ke(Z(n[2]), Z(l))} = <span class="highlight">${Z(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${ke("\u2212" + F("m"), F("D"))}</span><span class="cell">${ke(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${ke("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${ke("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Js() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function Vs(e) {
      const o = e.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Xs(e) {
      return e ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${ke("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ke(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function In(e, o) {
      const n = e.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let c = 0; c < n; c++) {
          const a = e[s][c], i = (s === c ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${Z(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function bs() {
      const e = "0", o = ke(F("EA"), F("L")), n = ke("\u2212" + F("EA"), F("L")), l = ke("12" + F("EI", "z"), F("L") + "\xB3"), s = ke("\u221212" + F("EI", "z"), F("L") + "\xB3"), c = ke("12" + F("EI", "y"), F("L") + "\xB3"), a = ke("\u221212" + F("EI", "y"), F("L") + "\xB3"), i = ke("6" + F("EI", "z"), F("L") + "\xB2"), u = ke("\u22126" + F("EI", "z"), F("L") + "\xB2"), d = ke("6" + F("EI", "y"), F("L") + "\xB2"), r = ke("\u22126" + F("EI", "y"), F("L") + "\xB2"), b = ke(F("GJ"), F("L")), $ = ke("\u2212" + F("GJ"), F("L")), w = ke("4" + F("EI", "z"), F("L")), v = ke("2" + F("EI", "z"), F("L")), f = ke("4" + F("EI", "y"), F("L")), h = ke("2" + F("EI", "y"), F("L")), S = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', I = [
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
      ], k = [
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
      ], O = [
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
          v
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
          v,
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
      for (const m of k) y += `<td class="hdr">${m}</td>`;
      y += "</tr>";
      for (let m = 0; m < 12; m++) {
        y += `<tr><td class="hdr">${I[m]}</td>`;
        for (let p = 0; p < 12; p++) if (p < m) y += `<td style="color:var(--fem-border-cell)">${p === 0 && m > 0 ? S : ""}</td>`;
        else {
          const x = O[m][p], M = (m === p ? "diag " : "") + (x !== "0" ? "nz" : "");
          y += `<td class="${M}">${x}</td>`;
        }
        y += "</tr>";
      }
      return y += "</table>", y;
    }
    function Ks(e, o, n, l, s, c, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${ke(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${ke(Z(e) + "\xD7" + Z(o), Z(a))}`,
          val: e * o / a,
          label: "Axial"
        },
        {
          name: `${ke("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${ke("12\xD7" + Z(e) + "\xD7" + Z(n), Z(a) + "\xB3")}`,
          val: 12 * e * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${ke("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${ke("6\xD7" + Z(e) + "\xD7" + Z(n), Z(a) + "\xB2")}`,
          val: 6 * e * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ke("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${ke("12\xD7" + Z(e) + "\xD7" + Z(l), Z(a) + "\xB3")}`,
          val: 12 * e * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${ke("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${ke("6\xD7" + Z(e) + "\xD7" + Z(l), Z(a) + "\xB2")}`,
          val: 6 * e * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ke(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${ke(Z(s) + "\xD7" + Z(c), Z(a))}`,
          val: s * c / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${ke("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ke("4\xD7" + Z(e) + "\xD7" + Z(n), Z(a))}`,
          val: 4 * e * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ke("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ke("2\xD7" + Z(e) + "\xD7" + Z(n), Z(a))}`,
          val: 2 * e * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ke("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${ke("4\xD7" + Z(e) + "\xD7" + Z(l), Z(a))}`,
          val: 4 * e * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ke("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${ke("2\xD7" + Z(e) + "\xD7" + Z(l), Z(a))}`,
          val: 2 * e * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${Z(u.val)}</span></div>`).join("")}</div>`;
    }
    function zn(e, o, n, l) {
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
    function gs(e) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Vt && Vt.remove();
      const o = t.nodes.val, n = t.elements.val, l = n[e], s = l.map((m) => o[m]), c = l.length === 2, a = ((_a2 = t.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = t.deformOutputs) == null ? void 0 : _b.val, u = (_c = t.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const m = vo(to(s[1], s[0])), p = ((_d = a.elasticities) == null ? void 0 : _d.get(e)) ?? 0, x = ((_e2 = a.areas) == null ? void 0 : _e2.get(e)) ?? 0, M = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(e)) ?? 0, T = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(e)) ?? 0, N = ((_h = a.shearModuli) == null ? void 0 : _h.get(e)) ?? 0, C = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(e)) ?? 0;
        `${l[0]}${l[1]}${Z(m)}${Z(p)}${Z(x)}${Z(M)}${Z(T)}${Z(N)}${Z(C)}`;
      } else {
        const m = ((_j = a.elasticities) == null ? void 0 : _j.get(e)) ?? 0, p = ((_k = a.thicknesses) == null ? void 0 : _k.get(e)) ?? 0, x = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(e)) ?? 0;
        `${l.join(", ")}${Z(m)}${Z(p)}${Z(x)}`;
      }
      let d = "", r = "", b = "", $ = "", w = "", v = "", f = "", h = "", S = null, I = null, k = null, O = [];
      try {
        if (S = en(s, a, e), I = tn(s), k = jt(Nn(I), jt(S, I)), O = c ? [
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
          const M = vo(to(s[1], s[0])), T = ((_m = a.elasticities) == null ? void 0 : _m.get(e)) ?? 0, N = ((_n2 = a.areas) == null ? void 0 : _n2.get(e)) ?? 0, C = ((_o2 = a.momentsOfInertiaZ) == null ? void 0 : _o2.get(e)) ?? 0, A = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(e)) ?? 0, P = ((_q = a.shearModuli) == null ? void 0 : _q.get(e)) ?? 0, q = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(e)) ?? 0;
          $ = Ys(T, N, C, A, P, q, M);
        }
        w = Gs(s), v = Js(), f = Vs(l), h = Xs(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', p = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', x = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${m}</div>${kn(S, O)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${I.length}\xD7${I.length}) ${p}</div>${kn(I, O)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${x}</div>${kn(k, O)}`;
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
        l.map((p, x) => {
          var _a3;
          const M = ((_a3 = i.deformations) == null ? void 0 : _a3.get(p)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], T = m.map((N, C) => `<span class="prop-key">${N}</span>: <span class="${Math.abs(M[C]) > 1e-10 ? "result-val" : ""}">${Z(M[C])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${p}:</strong> ${T}</div>`;
        }).join("");
      }
      if (u && c && (i == null ? void 0 : i.deformations) && S && I) {
        const m = (_s2 = u.normals) == null ? void 0 : _s2.get(e), p = (_t2 = u.shearsY) == null ? void 0 : _t2.get(e), x = (_u = u.shearsZ) == null ? void 0 : _u.get(e), M = (_v = u.torsions) == null ? void 0 : _v.get(e), T = (_w = u.bendingsY) == null ? void 0 : _w.get(e), N = (_x = u.bendingsZ) == null ? void 0 : _x.get(e), C = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], A = [];
        for (const se of l) {
          const U = ((_y = i.deformations) == null ? void 0 : _y.get(se)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          A.push(...U);
        }
        let P = [];
        try {
          P = jt(I, A);
        } catch {
          P = new Array(12).fill(0);
        }
        let q = [];
        try {
          q = jt(S, P);
        } catch {
          q = new Array(12).fill(0);
        }
        const Q = (se, U) => se.map((le, Se) => `<span style="color:${Math.abs(le) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${U[Se % 6]}=${Z(le)}</span>`).join(", "), ae = [
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
        ].map((se, U) => `${se}${U < 6 ? "\u1D62" : "\u2C7C"}`);
        `${F("u", "global")}${l.map((se, U) => `<span style="color:var(--fem-label)">nodo ${se}:</span> ${C.map((le, Se) => `<span style="color:${Math.abs(A[U * 6 + Se]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Z(A[U * 6 + Se])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${Q(P, [
          ...C,
          ...C
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${q.map((se, U) => `<span style="color:${Math.abs(se) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[U]}=${Z(se)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${Z(q[0])}${F("P", "7")}${F("N", "j")}${Z(q[6])}${F("P", "2")}${F("V", "y,i")}${Z(q[1])}${F("P", "8")}${F("V", "y,j")}${Z(q[7])}${F("P", "3")}${F("V", "z,i")}${Z(q[2])}${F("P", "9")}${F("V", "z,j")}${Z(q[8])}${F("P", "4")}${F("M", "x,i")}${Z(q[3])}${F("P", "10")}${F("M", "x,j")}${Z(q[9])}${F("P", "5")}${F("M", "y,i")}${Z(q[4])}${F("P", "11")}${F("M", "y,j")}${Z(q[10])}${F("P", "6")}${F("M", "z,i")}${Z(q[5])}${F("P", "12")}${F("M", "z,j")}${Z(q[11])}${m ? m.map((se) => Z(se)).join(", ") : "\u2014"}${p ? p.map((se) => Z(se)).join(", ") : "\u2014"}${x ? x.map((se) => Z(se)).join(", ") : "\u2014"}${M ? M.map((se) => Z(se)).join(", ") : "\u2014"}${T ? T.map((se) => Z(se)).join(", ") : "\u2014"}${N ? N.map((se) => Z(se)).join(", ") : "\u2014"}`;
      } else if (u && c) {
        const m = (_z = u.normals) == null ? void 0 : _z.get(e), p = (_A = u.shearsY) == null ? void 0 : _A.get(e), x = (_B = u.shearsZ) == null ? void 0 : _B.get(e), M = (_C = u.torsions) == null ? void 0 : _C.get(e), T = (_D = u.bendingsY) == null ? void 0 : _D.get(e), N = (_E = u.bendingsZ) == null ? void 0 : _E.get(e);
        `${m ? m.map((C) => Z(C)).join(", ") : "\u2014"}${p ? p.map((C) => Z(C)).join(", ") : "\u2014"}${x ? x.map((C) => Z(C)).join(", ") : "\u2014"}${M ? M.map((C) => Z(C)).join(", ") : "\u2014"}${T ? T.map((C) => Z(C)).join(", ") : "\u2014"}${N ? N.map((C) => Z(C)).join(", ") : "\u2014"}`;
      } else if (u && !c) {
        const m = (_F = u.bendingXX) == null ? void 0 : _F.get(e), p = (_G = u.bendingYY) == null ? void 0 : _G.get(e), x = (_H = u.bendingXY) == null ? void 0 : _H.get(e), M = (_I = u.membraneXX) == null ? void 0 : _I.get(e), T = (_J = u.membraneYY) == null ? void 0 : _J.get(e), N = (_K = u.membraneXY) == null ? void 0 : _K.get(e);
        `${m ? m.map((C) => Z(C)).join(", ") : "\u2014"}${p ? p.map((C) => Z(C)).join(", ") : "\u2014"}${x ? x.map((C) => Z(C)).join(", ") : "\u2014"}${M ? M.map((C) => Z(C)).join(", ") : "\u2014"}${T ? T.map((C) => Z(C)).join(", ") : "\u2014"}${N ? N.map((C) => Z(C)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Vt = Ta(e, o, n, a, i, u), Vt.id = "fem-inspect-panel", document.body.appendChild(Vt), (_L = Vt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => mo());
      const y = c ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const m = vo(to(s[1], s[0])), p = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(e)) ?? 0, x = ((_b2 = a.areas) == null ? void 0 : _b2.get(e)) ?? 0, M = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(e)) ?? 0, T = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0, N = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(e)) ?? 0, C = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(e)) ?? 0;
        return Ks(p, x, M, T, N, C, m);
      })() : void 0;
      Vt.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (p) => {
          p.stopPropagation();
          const x = m.dataset.full;
          if (x === "kLocal" && S) {
            const M = c ? bs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            zn(`Elemento ${e} \u2014 Rigidez Local k_local`, M, In(S, O), y);
          } else if (x === "T" && I) zn(`Elemento ${e} \u2014 Transformaci\xF3n T`, w, In(I, O));
          else if (x === "kGlobal" && k) {
            const M = c ? bs() : "<em>Shell 18\xD718</em>";
            zn(`Elemento ${e} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, In(k, O), y);
          }
        });
      });
    }
    function hs() {
      const l = [], s = [];
      for (let v = 0; v <= 8; v++) {
        const f = v / 8, h = 30 * f, I = 12 * (1 - f) * (1 - f * 0.3) / 2, k = l.length;
        if (l.push([
          -I,
          -I,
          h
        ]), l.push([
          I,
          -I,
          h
        ]), l.push([
          I,
          I,
          h
        ]), l.push([
          -I,
          I,
          h
        ]), s.push([
          k,
          k + 1
        ]), s.push([
          k + 1,
          k + 2
        ]), s.push([
          k + 2,
          k + 3
        ]), s.push([
          k + 3,
          k
        ]), v > 0 && v < 8 && (s.push([
          k,
          k + 2
        ]), s.push([
          k + 1,
          k + 3
        ])), v > 0) {
          const O = k - 4;
          for (let y = 0; y < 4; y++) s.push([
            O + y,
            k + y
          ]);
          s.push([
            O,
            k + 1
          ]), s.push([
            O + 1,
            k + 2
          ]), s.push([
            O + 2,
            k + 3
          ]), s.push([
            O + 3,
            k
          ]);
        }
      }
      const c = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) c.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, i = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) i.set(a + v, [
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
        elasticities: new Map(s.map((v, f) => [
          f,
          u
        ])),
        shearModuli: new Map(s.map((v, f) => [
          f,
          d
        ])),
        areas: new Map(s.map((v, f) => [
          f,
          r
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
          $
        ]))
      };
      t.elementInputs && (t.elementInputs.val = w);
      try {
        const v = Ht(l, s, {
          supports: c,
          loads: i
        }, w);
        v && t.deformOutputs && (t.deformOutputs.val = v);
      } catch (v) {
        console.warn("Eiffel deform:", v.message);
      }
      setTimeout(() => $t(), 50), Ye(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function xs() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const v = w / 20, f = 20 * v, h = 20 * (1 - Math.pow(2 * v - 1, 2)), S = 2;
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
        elasticities: new Map(s.map((w, v) => [
          v,
          i
        ])),
        shearModuli: new Map(s.map((w, v) => [
          v,
          u
        ])),
        areas: new Map(s.map((w, v) => [
          v,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((w, v) => [
          v,
          r
        ])),
        momentsOfInertiaY: new Map(s.map((w, v) => [
          v,
          r
        ])),
        torsionalConstants: new Map(s.map((w, v) => [
          v,
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
      setTimeout(() => $t(), 50), Ye(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function vs() {
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
        const I = c.length;
        c.push([
          h,
          6 / 2,
          0
        ]);
        const k = c.length;
        c.push([
          h,
          -6 / 2,
          28
        ]);
        const O = c.length;
        c.push([
          h,
          6 / 2,
          28
        ]), d.push(k, O), a.push([
          S,
          f * 2
        ]), a.push([
          f * 2,
          k
        ]), a.push([
          I,
          f * 2 + 1
        ]), a.push([
          f * 2 + 1,
          O
        ]), a.push([
          k,
          O
        ]);
      }
      for (const f of d) {
        const h = c[f][0];
        for (let S = 0; S <= 16; S++) {
          const I = 60 * S / 16;
          if (Math.abs(I - h) > 60 * 0.05 && Math.abs(I - h) < 60 * 0.45) {
            const k = c[f][1] < 0 ? S * 2 : S * 2 + 1;
            S % 2 === 0 && a.push([
              f,
              k
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
      const $ = 2e8, w = 77e6, v = {
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
      t.elementInputs && (t.elementInputs.val = v);
      try {
        const f = Ht(c, a, {
          supports: r,
          loads: b
        }, v);
        f && t.deformOutputs && (t.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => $t(), 50), Ye(), console.log(`Puente atirantado: ${c.length} nodos, ${a.length} elem, span=60m`);
    }
    function ys() {
      const c = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const S = h * 3.5, I = h * 5 * Math.PI / 180;
        for (let k = 0; k < 6; k++) {
          const O = I + 2 * Math.PI * k / 6, y = 5 * Math.cos(O), m = 5 * Math.sin(O);
          c.push([
            y,
            m,
            S
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const S = h * 6;
        for (let I = 0; I < 6; I++) a.push([
          S + I,
          S + (I + 1) % 6
        ]);
        if (h < 12) {
          const I = (h + 1) * 6;
          for (let k = 0; k < 6; k++) a.push([
            S + k,
            I + k
          ]), a.push([
            S + k,
            I + (k + 1) % 6
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
        const I = h * 6;
        for (let k = 0; k < 6; k++) a.push([
          S,
          I + k
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
        const S = 10 * h / 12, I = h * 6;
        for (let k = 0; k < 6; k++) d.set(I + k, [
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
      const r = 2e8, b = 77e6, $ = 8e-3, w = 1e-5, v = 5e-6, f = {
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
          v
        ]))
      };
      t.elementInputs && (t.elementInputs.val = f);
      try {
        const h = Ht(c, a, {
          supports: u,
          loads: d
        }, f);
        h && t.deformOutputs && (t.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => $t(), 50), Ye(), console.log(`Torre Twist: ${c.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function $s() {
      const s = [], c = [];
      for (let f = 0; f <= 20; f++) {
        const h = f / 20, S = f * 3;
        let I = 8 * (1 - h * 0.7);
        h > 0.4 && (I *= 0.85), h > 0.7 && (I *= 0.7);
        const k = s.length;
        s.push([
          0,
          0,
          S
        ]);
        for (let O = 0; O < 3; O++) {
          const y = O * 2 * Math.PI / 3 - Math.PI / 2, m = I * Math.cos(y), p = I * Math.sin(y), x = s.length;
          s.push([
            m,
            p,
            S
          ]), c.push([
            k,
            x
          ]);
          const M = s.length;
          s.push([
            m * 0.5,
            p * 0.5,
            S
          ]), c.push([
            k,
            M
          ]), c.push([
            M,
            x
          ]);
        }
        for (let O = 0; O < 3; O++) {
          const y = k + 1 + O * 2, m = k + 1 + (O + 1) % 3 * 2;
          c.push([
            y,
            m
          ]);
        }
        if (f < 20) {
          const y = k + 7;
          c.push([
            k,
            y
          ]);
          for (let m = 0; m < 3; m++) c.push([
            k + 1 + m * 2,
            y + 1 + m * 2
          ]), c.push([
            k + 2 + m * 2,
            y + 2 + m * 2
          ]), c.push([
            k + 1 + m * 2,
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
      const d = 35e6, r = 14e6, b = 0.02, $ = 5e-5, w = 2e-5, v = {
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
      t.elementInputs && (t.elementInputs.val = v);
      try {
        const f = Ht(s, c, {
          supports: a,
          loads: u
        }, v);
        f && t.deformOutputs && (t.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => $t(), 50), Ye(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function ws() {
      const e = [], o = [];
      for (let b = 0; b < 3; b++) {
        const $ = b * 12, w = 15 - b * 2, v = 20 - b * 3, f = 8 - b, h = e.length;
        for (let I = 0; I <= 4; I++) {
          const k = I / 4, O = -f / 2 + f * k, y = v * (1 - k * k * 0.3);
          for (let m = 0; m <= 12; m++) {
            const p = m / 12, x = $ + y * p, M = w * Math.sin(Math.PI * p) * (1 - k * k * 0.5), T = O;
            e.push([
              x,
              T,
              M
            ]);
          }
        }
        const S = 13;
        for (let I = 0; I < 4; I++) for (let k = 0; k < 12; k++) {
          const O = h + I * S + k, y = h + I * S + k + 1, m = h + (I + 1) * S + k + 1, p = h + (I + 1) * S + k;
          o.push([
            O,
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
      setTimeout(() => $t(), 50), Ye(), console.log(`Sydney Opera: ${e.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Ms() {
      const l = [], s = [];
      for (let v = 0; v <= 15; v++) {
        const f = v / 15, h = v * 3.5, S = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let k = 0; k < 12; k++) {
            const O = 2 * Math.PI * k / 12;
            l.push([
              Math.max(I, 1) * Math.cos(O),
              Math.max(I, 1) * Math.sin(O),
              h
            ]);
          }
        } else for (let I = 0; I < 12; I++) {
          const k = 2 * Math.PI * I / 12;
          l.push([
            S * Math.cos(k),
            S * Math.sin(k),
            h
          ]);
        }
      }
      for (let v = 0; v < 15; v++) {
        const f = v * 12, h = (v + 1) * 12;
        for (let I = 0; I < 12; I++) s.push([
          f + I,
          f + (I + 1) % 12
        ]);
        const S = v % 2 === 0 ? 1 : -1;
        for (let I = 0; I < 12; I++) {
          const k = (I + S + 12) % 12;
          s.push([
            f + I,
            h + k
          ]), s.push([
            f + I,
            h + I
          ]);
        }
      }
      const c = 15 * 12;
      for (let v = 0; v < 12; v++) s.push([
        c + v,
        c + (v + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let v = 0; v < 12; v++) a.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let v = 1; v <= 15; v++) {
        const f = v * 12, h = 3 * v / 15;
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
        elasticities: new Map(s.map((v, f) => [
          f,
          u
        ])),
        shearModuli: new Map(s.map((v, f) => [
          f,
          d
        ])),
        areas: new Map(s.map((v, f) => [
          f,
          r
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
          $
        ]))
      };
      t.elementInputs && (t.elementInputs.val = w);
      try {
        const v = Ht(l, s, {
          supports: a,
          loads: i
        }, w);
        v && t.deformOutputs && (t.deformOutputs.val = v);
      } catch (v) {
        console.warn("Diagrid:", v.message);
      }
      setTimeout(() => $t(), 50), Ye(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Us() {
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
    function Zs() {
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
        const w = [], v = r * a, f = 40;
        for (let h = 1; h <= b; h++) {
          const S = v * h / b;
          for (let I = 0; I <= f; I++) w.push(S * Math.sin(2 * Math.PI * I / f));
        }
        $.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await aa(async () => {
            const { cyclicPushover: I } = await import("./cyclicPushoverCpp-C97I4pAY.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: I
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
          $.textContent = `Completado: ${S.nSteps} pasos`, Qs(e.querySelector("#pushover-canvas"), S.displacements, S.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          $.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Qs(e, o, n, l) {
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
      const v = b - r, f = w - $, h = (O) => i.left + (O - r) / v * u, S = (O) => i.top + d - (O - $) / f * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, r < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), i.top), s.lineTo(h(0), i.top + d), s.stroke()), $ < 0 && w > 0 && (s.beginPath(), s.moveTo(i.left, S(0)), s.lineTo(i.left + u, S(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), S(n[0]));
      for (let O = 1; O < o.length; O++) s.lineTo(h(o[O]), S(n[O]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + u / 2, a - 5), s.save(), s.translate(12, i.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const I = v / 5;
      for (let O = 0; O <= 5; O++) {
        const y = r + I * O;
        s.fillText((y * 1e3).toFixed(1), h(y), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const k = f / 5;
      for (let O = 0; O <= 5; O++) {
        const y = $ + k * O;
        s.fillText(y.toFixed(0), i.left - 5, S(y) + 3);
      }
    }
    let Ro = null;
    function ea() {
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
      }), e.querySelector("#nl-test").addEventListener("click", () => ta(e));
    }
    function ta(e) {
      const o = parseFloat(e.querySelector("#nl-fy").value), n = parseFloat(e.querySelector("#nl-e0").value), l = parseFloat(e.querySelector("#nl-b").value), s = parseFloat(e.querySelector("#nl-r0").value), c = parseFloat(e.querySelector("#nl-amp").value), a = parseInt(e.querySelector("#nl-cycles").value), i = 100, u = [];
      for (let ee = 0; ee < a; ee++) {
        const ae = c * (1 + ee * 0.5);
        for (let se = 0; se < i; se++) {
          const U = se / i * 2 * Math.PI;
          u.push(ae * Math.sin(U));
        }
      }
      const d = o / n, r = l * n;
      let b = 0, $ = 0, w = -d, v = d, f = 0, h = 0, S = 0, I = 0, k = 0, O = 0;
      const y = [];
      for (const ee of u) {
        let ae = w, se = v, U = f, le = h, Se = S, Ne = I, Pe = k, ie = O, xe;
        const Me = ee - b;
        if (Math.abs(Me) < 1e-20) {
          y.push($);
          continue;
        }
        if ((ie === 0 || ie === 3) && (Me < 0 ? (ie = 2, le = -d, Se = -o, U = le, Ne = 0, Pe = 0) : (ie = 1, le = d, Se = o, U = le, Ne = 0, Pe = 0)), ie === 2 && Me > 0) {
          ie = 1, Ne = b, Pe = $, b < ae && (ae = b);
          const ze = (se - ae) / (2 * 1 * d), De = 1 + 0 * Math.pow(ze, 0.8);
          le = (o * De - r * d * De - Pe + n * Ne) / (n - r), Se = o * De + r * (le - d * De), U = se;
        } else if (ie === 1 && Me < 0) {
          ie = 2, Ne = b, Pe = $, b > se && (se = b);
          const ze = (se - ae) / (2 * 1 * d), De = 1 + 0 * Math.pow(ze, 0.8);
          le = (-o * De + r * d * De - Pe + n * Ne) / (n - r), Se = -o * De + r * (le + d * De), U = ae;
        }
        const pe = Math.abs((U - le) / d);
        let J = s - 0.925 * pe / (0.15 + pe);
        J < 0.1 && (J = 0.1);
        const me = (ee - Ne) / (le - Ne), Ie = 1 + Math.pow(Math.abs(me), J), oe = Math.pow(Ie, 1 / J);
        xe = l * me + (1 - l) * me / oe, xe = xe * (Se - Pe) + Pe, y.push(xe), b = ee, $ = xe, w = ae, v = se, f = U, h = le, S = Se, I = Ne, k = Pe, O = ie;
      }
      const m = e.querySelector("#nl-canvas"), p = m.getContext("2d"), x = m.width, M = m.height;
      p.clearRect(0, 0, x, M);
      const T = Math.max(...u.map(Math.abs)), N = Math.max(...y.map(Math.abs)), C = (x - 40) / (2 * T), A = (M - 40) / (2 * N), P = x / 2, q = M / 2;
      p.strokeStyle = "#444", p.lineWidth = 1, p.beginPath(), p.moveTo(20, q), p.lineTo(x - 20, q), p.stroke(), p.beginPath(), p.moveTo(P, 20), p.lineTo(P, M - 20), p.stroke(), p.fillStyle = "#888", p.font = "10px monospace", p.textAlign = "center", p.fillText("\u03B5 (strain)", x - 40, q - 5), p.fillText("\u03C3 (stress)", P + 30, 15), p.fillText(`\xB1${(T * 100).toFixed(1)}%`, x - 30, q + 12), p.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), p.strokeStyle = "#00ccff", p.lineWidth = 1.5, p.beginPath();
      for (let ee = 0; ee < u.length; ee++) {
        const ae = P + u[ee] * C, se = q - y[ee] * A;
        ee === 0 ? p.moveTo(ae, se) : p.lineTo(ae, se);
      }
      p.stroke(), p.strokeStyle = "#ff333366", p.lineWidth = 1, p.setLineDash([
        4,
        4
      ]), p.beginPath(), p.moveTo(20, q - o * A), p.lineTo(x - 20, q - o * A), p.stroke(), p.beginPath(), p.moveTo(20, q + o * A), p.lineTo(x - 20, q + o * A), p.stroke(), p.setLineDash([]), p.fillStyle = "#ff6666", p.font = "9px monospace", p.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, x - 50, q - o * A - 5);
      const Q = e.querySelector("#nl-info");
      Q.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function oa() {
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
      const a = Sa({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(a);
    }
    let Eo = null;
    function na(e) {
      Eo && Eo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Ko(), l = Uo(), s = Object.entries(n).map(([d, r]) => `<option value="${r}">${d}</option>`).join(""), c = Object.entries(l).map(([d, r]) => `<option value="${r}">${d}</option>`).join("");
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
        d === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : d === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : d === "W" || d === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : d === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : d === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, e.forEach((b) => ue.set(b, {
          ...r
        })), o.remove(), Eo = null, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        e.forEach((d) => ue.delete(d)), o.remove(), Eo = null, oo(), t.elementInputs.val = {
          ...t.elementInputs.val
        };
      });
    }
    let ko = null;
    function sa(e) {
      var _a2, _b, _c;
      ko && ko.remove();
      const o = t.nodes.val, n = t.elements.val[e];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), u = a > c && a > i, d = Math.sqrt(c * c + a * a + i * i), r = qe.get(e) ?? 0, b = (_c = (_b = (_a2 = t.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(e), $ = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
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
        G.add(e), w.remove(), ko = null, mo(), ye();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), ko = null, gs(e);
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
        const r = d.controls.object, b = new we(u[0], u[1], u[2]);
        b.project(r);
        const $ = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * $.width,
          y: (-b.y + 1) / 2 * $.height
        };
      }
      function a(u, d, r, b, $) {
        const w = Math.min(u, r), v = Math.max(u, r), f = Math.min(d, b), h = Math.max(d, b), S = t.nodes.val, I = t.elements.val, k = [];
        for (let O = 0; O < I.length; O++) {
          const y = I[O], m = y.map((p) => c(S[p])).filter(Boolean);
          if (m.length !== 0) if ($) m.every((x) => x.x >= w && x.x <= v && x.y >= f && x.y <= h) && k.push(O);
          else {
            if (m.some((x) => x.x >= w && x.x <= v && x.y >= f && x.y <= h)) {
              k.push(O);
              continue;
            }
            if (y.length === 2) {
              const x = m[0], M = m[1];
              i(x.x, x.y, M.x, M.y, w, f, v, h) && k.push(O);
            }
          }
        }
        return k;
      }
      function i(u, d, r, b, $, w, v, f) {
        const h = (I, k) => I >= $ && I <= v && k >= w && k <= f;
        if (h(u, d) || h(r, b)) return true;
        const S = (I, k, O, y, m, p, x, M) => {
          const T = (O - I) * (M - p) - (y - k) * (x - m);
          if (Math.abs(T) < 1e-10) return false;
          const N = ((m - I) * (M - p) - (p - k) * (x - m)) / T, C = ((m - I) * (y - k) - (p - k) * (O - I)) / T;
          return N >= 0 && N <= 1 && C >= 0 && C <= 1;
        };
        return S(u, d, r, b, $, w, v, w) || S(u, d, r, b, v, w, v, f) || S(u, d, r, b, $, f, v, f) || S(u, d, r, b, $, w, $, f);
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
          const b = ps(u.clientX, u.clientY, r.camera, r.rendererElm);
          if (ct.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== uo && Bs(b.nodeIdx), ct.track && uo !== null && b.worldPos && b.snapType !== "node") {
            const $ = Ds(b.worldPos, uo);
            $ && (b.worldPos = $, b.snapType = "grid");
          }
          if (uo !== null && b.worldPos) {
            const $ = t.nodes.val[uo];
            $ && ds(u.clientX, u.clientY, new we(...$), b.worldPos);
          } else if (at !== null && b.worldPos) {
            const $ = t.nodes.val[at];
            $ && ds(u.clientX, u.clientY, new we(...$), b.worldPos);
          } else _t && (_t.remove(), _t = null);
          b.nodeIdx, fs(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Bt && !qt) return;
        if (qt && n) {
          const r = u.offsetX - n.x, b = u.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const $ = r > 0, w = Math.min(n.x, u.offsetX), v = Math.min(n.y, u.offsetY), f = Math.abs(r), h = Math.abs(b);
            l.style.left = w + "px", l.style.top = v + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = En(u);
        if (d >= 0) ms(d), o.style.cursor = "pointer";
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
            u.ctrlKey || u.metaKey || (nt.clear(), lo()), $.forEach((v) => {
              nt.has(v) || (nt.add(v), wn(v));
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
          const r = ps(u.clientX, u.clientY, d.camera, d.rendererElm);
          (r.worldPos || r.nodeIdx !== null) && (Ws(r), fs(r));
          return;
        }
        if (qt) {
          if (l) return;
          const d = En(u), r = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (r) if (nt.has(d)) {
              nt.delete(d);
              const b = ao.findIndex(($) => $.__elemIdx === d);
              if (b >= 0) {
                const $ = Ue();
                $ == null ? void 0 : $.scene.remove(ao[b]), ao[b].geometry.dispose(), ao[b].material.dispose(), ao.splice(b, 1), $ == null ? void 0 : $.render();
              }
            } else nt.add(d), wn(d);
            else nt.clear(), lo(), nt.add(d), wn(d);
            io();
          } else r || (nt.clear(), lo(), io());
          return;
        }
        if (Bt) {
          const d = En(u);
          d >= 0 && (ms(d), sa(d));
        }
      });
    }, 500), Ao.derive(() => {
      var _a2;
      t.nodes.val, t.elements.val, (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, Ye();
    }), We.modal = (e) => {
      var _a2, _b;
      if (e === void 0 && (e = !Ct), Ct = e, (_a2 = he.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", Ct), Ct) {
        const n = Ue();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (V = n.settings.loads.rawVal, n.settings.loads.val = false), fn(), he.querySelector("#cad3d-mode-prev").style.display = "", he.querySelector("#cad3d-mode-next").style.display = "", he.querySelector("#cad3d-mode-label").style.display = "";
      } else un(), he.querySelector("#cad3d-mode-prev").style.display = "none", he.querySelector("#cad3d-mode-next").style.display = "none", he.querySelector("#cad3d-mode-label").style.display = "none", z && z !== "placa-q4" && z !== "placa-3q" && ye(), setTimeout(() => {
        var _a3;
        const n = Ue();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && V && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${Ct ? "ON" : "OFF"}`);
    }, We.setMode = (e) => {
      var _a2;
      if (!(ce == null ? void 0 : ce.modeShapes)) {
        console.error("No modal results");
        return;
      }
      gt = Math.max(0, Math.min(e, ce.modeShapes.length - 1));
      const o = ce.modeShapes[gt], { extent: n } = no();
      let l = 0;
      for (let c = 0; c < ne.length; c++) {
        const a = o[c * 6] || 0, i = o[c * 6 + 1] || 0, u = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + u * u));
      }
      Ce = l > 1e-12 ? n * 0.05 / l : 1, No();
      const s = he.querySelector("#cad3d-mode-label");
      s && ce.frequencies && (s.textContent = `Modo ${gt + 1} \u2014 ${ce.frequencies[gt].toFixed(2)} Hz`), console.log(`Modo ${gt + 1}: f = ${(_a2 = ce.frequencies) == null ? void 0 : _a2[gt].toFixed(4)} Hz`);
    }, window.cad = We, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(he), document.body.appendChild(fe.div);
    }, 0), setTimeout(() => {
      t.nodes.val.length === 0 && (Xe("edificio"), ye(), ls("edificio"));
    }, 100), document.body.appendChild(Pa());
    const Ss = document.createElement("span");
    return Ss.style.display = "none", Ss;
  };
});
export {
  __tla,
  Ls as a,
  Ma as c,
  Qa as g
};
