import { v as Qe, P as At, g as An, a as Tn, o as Rn } from "./theme-DNr3SX9M.js";
import { V as we, b as Cn, R as Pn, c as Fn, B as sn, F as Tt, d as On, a as Wn, G as Nn, A as ut, e as on, T as ln, S as rn, f as cn, g as Hn, L as Jn } from "./Text-BJMxMB48.js";
import { g as jn, b as _n, a as rt } from "./analyze-C6GU_3Il.js";
import { p as Rt, m as Yn, s as Bn, d as ct, __tla as __tla_0 } from "./plateQ4Cpp-keaLMavB.js";
import { g as Ye, __tla as __tla_1 } from "./getMesh-C8P43tpY.js";
import { n as gt, s as xt, m as vt, t as Vn } from "./pureFunctionsAny.generated-BKcodEQ5.js";
let fn, Un, aa;
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
  const ht = [
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
  ], Ge = [
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
  function Dn(t, Y) {
    return t === "kN" && Y === "m" ? "kPa" : t === "kN" && Y === "mm" || t === "N" && Y === "mm" ? "MPa" : t === "N" && Y === "m" ? "Pa" : t === "kip" && Y === "in" ? "ksi" : t === "kip" && Y === "ft" ? "ksf" : `${t}/${Y}\xB2`;
  }
  const Xe = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function et(t, Y) {
    const G = ht.find((oe) => oe.id === t), K = Ge.find((oe) => oe.id === Y), N = G.toKN, te = K.toM, ie = (oe, $e, Ee) => Ee / (Math.pow(N, oe) * Math.pow(te, $e));
    let ge, Z;
    switch (t) {
      case "kN":
        ge = 10, Z = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        ge = 1, Z = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        ge = 1e3, Z = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        ge = 10, Z = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        ge = 5e3, Z = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        ge = 1e4, Z = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${t}-${Y}`,
      label: `${G.label}, ${K.label}`,
      force: G.label,
      length: K.label,
      stress: Dn(t, Y),
      moment: `${G.label}\xB7${K.label}`,
      E: ie(1, -2, Xe.E),
      G: ie(1, -2, Xe.G),
      A: ie(0, 2, Xe.A),
      Iz: ie(0, 4, Xe.Iz),
      Iy: ie(0, 4, Xe.Iy),
      J: ie(0, 4, Xe.J),
      rho: ie(1, -4, Xe.rho),
      spanRange: K.spanRange,
      heightRange: K.heightRange,
      defaultSpan: K.defaultSpan,
      defaultHeight: K.defaultHeight,
      defaultForce: ge,
      forceRange: Z,
      galponSpan: K.galponSpan,
      galponLength: K.galponLength,
      galponHeight: K.galponHeight,
      galponRise: K.galponRise
    };
  }
  et("kN", "m"), et("kip", "in");
  function bt() {
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
  function Xn(t) {
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
          val: 3,
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
          label: `Lx (${t.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 6,
          step: 0.1,
          label: `Ly (${t.length})`
        },
        {
          key: "t",
          val: 0.5,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `t (${t.length})`
        },
        {
          key: "nx",
          val: 16,
          min: 4,
          max: 40,
          step: 2,
          label: "nx elem"
        },
        {
          key: "ny",
          val: 16,
          min: 4,
          max: 40,
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
          label: `P (${t.force})`
        },
        {
          key: "colA",
          val: 0.4,
          min: 0.1,
          max: 2,
          step: 0.05,
          label: `col a (${t.length})`
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
          val: 4,
          min: 1,
          max: 10,
          step: 0.5,
          label: `Lx (${t.length})`
        },
        {
          key: "Ly",
          val: 3,
          min: 1,
          max: 10,
          step: 0.5,
          label: `Ly (${t.length})`
        },
        {
          key: "hx",
          val: 1,
          min: 0.2,
          max: 3,
          step: 0.1,
          label: `Hueco x (${t.length})`
        },
        {
          key: "hy",
          val: 0.8,
          min: 0.2,
          max: 3,
          step: 0.1,
          label: `Hueco y (${t.length})`
        },
        {
          key: "meshSize",
          val: 0.15,
          min: 0.05,
          max: 0.5,
          step: 0.05,
          label: `Mesh (${t.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
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
          val: 0.2,
          min: 0,
          max: 0.49,
          step: 0.01,
          label: "v"
        },
        {
          key: "q",
          val: -10,
          min: -100,
          max: 0,
          step: 1,
          label: `q (${t.force}/${t.length}\xB2)`
        }
      ],
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
          val: 0.5,
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
  function Gn(t) {
    const Y = t.force, [G, K, N] = t.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        },
        {
          key: "CV",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CV (${Y})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        },
        {
          key: "CV",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CV (${Y})`
        },
        {
          key: "Ex",
          val: t.defaultForce,
          min: G,
          max: K,
          step: N,
          label: `Ex sismo (${Y})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        },
        {
          key: "CV",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CV (${Y})`
        },
        {
          key: "Ex",
          val: t.defaultForce * 3,
          min: G,
          max: K,
          step: N,
          label: `Ex sismo (${Y})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        },
        {
          key: "CV",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CV (${Y})`
        },
        {
          key: "Ex",
          val: 0,
          min: G,
          max: K,
          step: N,
          label: `Ex sismo (${Y})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        },
        {
          key: "CV",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CV (${Y})`
        },
        {
          key: "Ex",
          val: 0,
          min: G,
          max: K,
          step: N,
          label: `Ex sismo (${Y})`
        },
        {
          key: "Ey",
          val: 0,
          min: G,
          max: K,
          step: N,
          label: `Ey sismo (${Y})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -t.defaultForce,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        },
        {
          key: "CV",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CV (${Y})`
        }
      ],
      barra: [
        {
          key: "F",
          val: t.defaultForce * 10,
          min: t.forceRange[0] * 10,
          max: t.forceRange[1] * 10,
          step: Math.abs(t.forceRange[2]) * 5,
          label: `F axial (${Y})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: G,
          max: 0,
          step: N,
          label: `CM (${Y})`
        }
      ],
      "losa-rect": [],
      "losa-plana": [],
      "viga-alta": [],
      "muro-contencion": [],
      zapata: [],
      "placa-orificios": [],
      talud: []
    };
  }
  Un = function() {
    const t = document.createElement("div");
    t.id = "modal-results", t.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let Y = false;
    function G(K, N) {
      var _a, _b;
      if (!K.frequencies || K.frequencies.length === 0) {
        t.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const te = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], ie = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let ge = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${N.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (ge += '<div id="modal-body" style="padding:0 12px 10px 12px;">', N.properties) for (const Z of N.properties) ge += `<span style="color:#888">${Z}</span>
`;
      ge += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const Z of te) ge += `<th style="padding:2px 5px">${Z}</th>`;
      if (ge += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, K.frequencies.forEach((Z, oe) => {
        var _a2;
        const $e = Z > 0 ? 1 / Z : 0, Ee = Z * 2 * Math.PI, Me = ((_a2 = K.massParticipation) == null ? void 0 : _a2[oe]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let he = 0; he < 6; he++) ie[he] += Me[he];
        ge += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${oe + 1}</td>
  <td style="padding:2px 6px; text-align:right">${Z.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${$e.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${Ee.toFixed(2)}</td>`;
        for (let he = 0; he < 6; he++) {
          const Oe = (Me[he] * 100).toFixed(1), nt = Me[he] > 0.5 ? "#f00" : Me[he] > 0.1 ? "#ff0" : "#0f0";
          ge += `<td style="padding:2px 5px; text-align:right; color:${nt}">${Oe}%</td>`;
        }
        ge += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(ie[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ie[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ie[5] * 100).toFixed(1)}%</td></tr>`;
      }), ge += "</table></div>", t.innerHTML = ge, Y) {
        const Z = t.querySelector("#modal-body"), oe = t.querySelector("#modal-minimize");
        Z && (Z.style.display = "none"), oe && (oe.textContent = "\u25A2", oe.title = "Restaurar");
      }
      (_a = t.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        Y = !Y;
        const Z = t.querySelector("#modal-body"), oe = t.querySelector("#modal-minimize");
        Y ? (Z.style.display = "none", oe.textContent = "\u25A2", oe.title = "Restaurar") : (Z.style.display = "block", oe.textContent = "\u25AC", oe.title = "Minimizar");
      }), (_b = t.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const Z = [];
        Z.push(`Modal Analysis \u2014 ${N.title}`);
        const oe = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${te.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        Z.push(oe), Z.push("-".repeat(oe.length));
        const $e = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        K.frequencies.forEach((Me, he) => {
          var _a2;
          const Oe = Me > 0 ? 1 / Me : 0, nt = Me * 2 * Math.PI, le = ((_a2 = K.massParticipation) == null ? void 0 : _a2[he]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let ye = 0; ye < 6; ye++) $e[ye] += le[ye];
          const Se = le.map((ye) => ((ye * 100).toFixed(1) + "%").padStart(6)).join(" ");
          Z.push(`${String(he + 1).padStart(4)}  ${Me.toFixed(4).padStart(9)}  ${Oe.toFixed(4).padStart(9)}  ${nt.toFixed(2).padStart(9)}  ${Se}  ${($e[0] * 100).toFixed(1).padStart(5)}%  ${($e[1] * 100).toFixed(1).padStart(5)}%  ${($e[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(Z.join(`
`));
        const Ee = t.querySelector("#modal-copy");
        Ee.textContent = "\u2713", setTimeout(() => Ee.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: t,
      render: G
    };
  };
  const F = 64516e-8, c = 416231e-12, $ = 0.0254, tt = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * F,
      Iz: 16.4 * c,
      Iy: 2.2 * c,
      J: 0.0405 * c,
      d: 5.9 * $,
      bf: 3.94 * $
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * F,
      Iz: 29.1 * c,
      Iy: 9.32 * c,
      J: 0.103 * c,
      d: 5.99 * $,
      bf: 5.99 * $
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * F,
      Iz: 41.4 * c,
      Iy: 13.3 * c,
      J: 0.204 * c,
      d: 6.2 * $,
      bf: 6.02 * $
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * F,
      Iz: 30.8 * c,
      Iy: 2.09 * c,
      J: 0.0426 * c,
      d: 7.89 * $,
      bf: 3.94 * $
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * F,
      Iz: 61.9 * c,
      Iy: 7.97 * c,
      J: 0.172 * c,
      d: 8.14 * $,
      bf: 5.25 * $
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * F,
      Iz: 82.7 * c,
      Iy: 18.3 * c,
      J: 0.346 * c,
      d: 7.93 * $,
      bf: 6.5 * $
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * F,
      Iz: 110 * c,
      Iy: 37.1 * c,
      J: 0.536 * c,
      d: 8 * $,
      bf: 7.995 * $
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * F,
      Iz: 146 * c,
      Iy: 49.1 * c,
      J: 0.871 * c,
      d: 8.25 * $,
      bf: 8.07 * $
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * F,
      Iz: 184 * c,
      Iy: 60.9 * c,
      J: 1.45 * c,
      d: 8.5 * $,
      bf: 8.11 * $
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * F,
      Iz: 272 * c,
      Iy: 88.6 * c,
      J: 3.54 * c,
      d: 9 * $,
      bf: 8.28 * $
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * F,
      Iz: 53.8 * c,
      Iy: 2.18 * c,
      J: 0.0547 * c,
      d: 9.87 * $,
      bf: 3.96 * $
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * F,
      Iz: 118 * c,
      Iy: 11.4 * c,
      J: 0.239 * c,
      d: 10.17 * $,
      bf: 5.75 * $
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * F,
      Iz: 171 * c,
      Iy: 36.6 * c,
      J: 0.583 * c,
      d: 9.73 * $,
      bf: 7.96 * $
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * F,
      Iz: 272 * c,
      Iy: 93.4 * c,
      J: 1.39 * c,
      d: 9.98 * $,
      bf: 10 * $
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * F,
      Iz: 394 * c,
      Iy: 134 * c,
      J: 3.56 * c,
      d: 10.4 * $,
      bf: 10.13 * $
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * F,
      Iz: 623 * c,
      Iy: 207 * c,
      J: 10.9 * c,
      d: 11.1 * $,
      bf: 10.34 * $
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * F,
      Iz: 88.6 * c,
      Iy: 2.36 * c,
      J: 0.0704 * c,
      d: 11.91 * $,
      bf: 3.97 * $
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * F,
      Iz: 156 * c,
      Iy: 4.66 * c,
      J: 0.293 * c,
      d: 12.31 * $,
      bf: 4.03 * $
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * F,
      Iz: 204 * c,
      Iy: 17.3 * c,
      J: 0.3 * c,
      d: 12.22 * $,
      bf: 6.49 * $
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * F,
      Iz: 310 * c,
      Iy: 44.1 * c,
      J: 0.906 * c,
      d: 11.94 * $,
      bf: 8.01 * $
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * F,
      Iz: 425 * c,
      Iy: 95.8 * c,
      J: 1.58 * c,
      d: 12.06 * $,
      bf: 9.99 * $
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * F,
      Iz: 597 * c,
      Iy: 195 * c,
      J: 4.05 * c,
      d: 12.25 * $,
      bf: 12.04 * $
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * F,
      Iz: 833 * c,
      Iy: 270 * c,
      J: 8.44 * c,
      d: 12.71 * $,
      bf: 12.16 * $
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * F,
      Iz: 1070 * c,
      Iy: 345 * c,
      J: 16 * c,
      d: 13.12 * $,
      bf: 12.32 * $
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * F,
      Iz: 199 * c,
      Iy: 7 * c,
      J: 0.208 * c,
      d: 13.74 * $,
      bf: 5 * $
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * F,
      Iz: 291 * c,
      Iy: 19.6 * c,
      J: 0.38 * c,
      d: 13.84 * $,
      bf: 6.73 * $
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * F,
      Iz: 385 * c,
      Iy: 26.7 * c,
      J: 0.798 * c,
      d: 14.1 * $,
      bf: 6.77 * $
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * F,
      Iz: 485 * c,
      Iy: 51.4 * c,
      J: 1.45 * c,
      d: 13.79 * $,
      bf: 8.03 * $
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * F,
      Iz: 640 * c,
      Iy: 107 * c,
      J: 2.19 * c,
      d: 13.89 * $,
      bf: 9.99 * $
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * F,
      Iz: 882 * c,
      Iy: 148 * c,
      J: 5.07 * c,
      d: 14.31 * $,
      bf: 10.13 * $
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * F,
      Iz: 1240 * c,
      Iy: 447 * c,
      J: 7.12 * c,
      d: 14.32 * $,
      bf: 14.61 * $
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * F,
      Iz: 1530 * c,
      Iy: 548 * c,
      J: 12.3 * c,
      d: 14.66 * $,
      bf: 14.73 * $
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * F,
      Iz: 2140 * c,
      Iy: 838 * c,
      J: 23.7 * c,
      d: 15.22 * $,
      bf: 15.65 * $
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * F,
      Iz: 301 * c,
      Iy: 9.59 * c,
      J: 0.262 * c,
      d: 15.69 * $,
      bf: 5.5 * $
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * F,
      Iz: 448 * c,
      Iy: 24.5 * c,
      J: 0.545 * c,
      d: 15.86 * $,
      bf: 6.99 * $
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * F,
      Iz: 659 * c,
      Iy: 37.2 * c,
      J: 1.52 * c,
      d: 16.26 * $,
      bf: 7.07 * $
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * F,
      Iz: 954 * c,
      Iy: 119 * c,
      J: 2.39 * c,
      d: 16.33 * $,
      bf: 10.24 * $
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * F,
      Iz: 1300 * c,
      Iy: 163 * c,
      J: 5.45 * c,
      d: 16.75 * $,
      bf: 10.37 * $
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * F,
      Iz: 510 * c,
      Iy: 15.3 * c,
      J: 0.506 * c,
      d: 17.7 * $,
      bf: 6 * $
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * F,
      Iz: 800 * c,
      Iy: 40.1 * c,
      J: 1.24 * c,
      d: 17.99 * $,
      bf: 7.5 * $
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * F,
      Iz: 1170 * c,
      Iy: 60.3 * c,
      J: 3.49 * c,
      d: 18.47 * $,
      bf: 7.64 * $
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * F,
      Iz: 1750 * c,
      Iy: 201 * c,
      J: 5.86 * c,
      d: 18.59 * $,
      bf: 11.15 * $
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * F,
      Iz: 843 * c,
      Iy: 20.7 * c,
      J: 0.77 * c,
      d: 20.66 * $,
      bf: 6.5 * $
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * F,
      Iz: 1330 * c,
      Iy: 57.5 * c,
      J: 1.83 * c,
      d: 20.99 * $,
      bf: 8.24 * $
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * F,
      Iz: 1830 * c,
      Iy: 81.4 * c,
      J: 4.34 * c,
      d: 21.43 * $,
      bf: 8.36 * $
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * F,
      Iz: 2670 * c,
      Iy: 274 * c,
      J: 6.83 * c,
      d: 21.51 * $,
      bf: 12.34 * $
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * F,
      Iz: 1350 * c,
      Iy: 29.1 * c,
      J: 1.18 * c,
      d: 23.57 * $,
      bf: 7.01 * $
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * F,
      Iz: 2100 * c,
      Iy: 82.5 * c,
      J: 2.68 * c,
      d: 23.92 * $,
      bf: 8.99 * $
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * F,
      Iz: 3100 * c,
      Iy: 259 * c,
      J: 4.72 * c,
      d: 24.06 * $,
      bf: 12.75 * $
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * F,
      Iz: 4020 * c,
      Iy: 340 * c,
      J: 9.5 * c,
      d: 24.48 * $,
      bf: 12.86 * $
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * F,
      Iz: 4580 * c,
      Iy: 391 * c,
      J: 12.6 * c,
      d: 24.74 * $,
      bf: 12.9 * $
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * F,
      Iz: 5680 * c,
      Iy: 479 * c,
      J: 21.2 * c,
      d: 25.24 * $,
      bf: 12.9 * $
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * F,
      Iz: 2850 * c,
      Iy: 106 * c,
      J: 2.81 * c,
      d: 26.71 * $,
      bf: 9.96 * $
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * F,
      Iz: 4090 * c,
      Iy: 159 * c,
      J: 6.77 * c,
      d: 27.29 * $,
      bf: 10.07 * $
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * F,
      Iz: 3610 * c,
      Iy: 115 * c,
      J: 3.06 * c,
      d: 29.53 * $,
      bf: 10.4 * $
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * F,
      Iz: 4930 * c,
      Iy: 164 * c,
      J: 6.43 * c,
      d: 30.01 * $,
      bf: 10.5 * $
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * F,
      Iz: 5900 * c,
      Iy: 187 * c,
      J: 5.3 * c,
      d: 32.86 * $,
      bf: 11.48 * $
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * F,
      Iz: 7800 * c,
      Iy: 225 * c,
      J: 7 * c,
      d: 35.55 * $,
      bf: 11.95 * $
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * F,
      Iz: 8.22 * c,
      Iy: 8.22 * c,
      J: 13.4 * c,
      d: 4 * $,
      bf: 4 * $
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * F,
      Iz: 10.7 * c,
      Iy: 10.7 * c,
      J: 17.9 * c,
      d: 4 * $,
      bf: 4 * $
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * F,
      Iz: 12.3 * c,
      Iy: 12.3 * c,
      J: 21 * c,
      d: 4 * $,
      bf: 4 * $
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * F,
      Iz: 30.3 * c,
      Iy: 30.3 * c,
      J: 48.3 * c,
      d: 6 * $,
      bf: 6 * $
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * F,
      Iz: 41.1 * c,
      Iy: 41.1 * c,
      J: 66.9 * c,
      d: 6 * $,
      bf: 6 * $
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * F,
      Iz: 49.6 * c,
      Iy: 49.6 * c,
      J: 82.2 * c,
      d: 6 * $,
      bf: 6 * $
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * F,
      Iz: 70.7 * c,
      Iy: 70.7 * c,
      J: 112 * c,
      d: 8 * $,
      bf: 8 * $
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * F,
      Iz: 98 * c,
      Iy: 98 * c,
      J: 158 * c,
      d: 8 * $,
      bf: 8 * $
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * F,
      Iz: 122 * c,
      Iy: 122 * c,
      J: 199 * c,
      d: 8 * $,
      bf: 8 * $
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * F,
      Iz: 202 * c,
      Iy: 202 * c,
      J: 323 * c,
      d: 10 * $,
      bf: 10 * $
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * F,
      Iz: 254 * c,
      Iy: 254 * c,
      J: 412 * c,
      d: 10 * $,
      bf: 10 * $
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * F,
      Iz: 355 * c,
      Iy: 355 * c,
      J: 564 * c,
      d: 12 * $,
      bf: 12 * $
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * F,
      Iz: 452 * c,
      Iy: 452 * c,
      J: 724 * c,
      d: 12 * $,
      bf: 12 * $
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * F,
      Iz: 18 * c,
      Iy: 9.58 * c,
      J: 22.6 * c,
      d: 6 * $,
      bf: 4 * $
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * F,
      Iz: 23.8 * c,
      Iy: 12.3 * c,
      J: 30.3 * c,
      d: 6 * $,
      bf: 4 * $
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * F,
      Iz: 33.6 * c,
      Iy: 11.8 * c,
      J: 33 * c,
      d: 8 * $,
      bf: 4 * $
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * F,
      Iz: 45.1 * c,
      Iy: 15 * c,
      J: 44.5 * c,
      d: 8 * $,
      bf: 4 * $
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * F,
      Iz: 46.1 * c,
      Iy: 28.2 * c,
      J: 61.3 * c,
      d: 8 * $,
      bf: 6 * $
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * F,
      Iz: 63 * c,
      Iy: 37.5 * c,
      J: 84.6 * c,
      d: 8 * $,
      bf: 6 * $
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * F,
      Iz: 103 * c,
      Iy: 47.1 * c,
      J: 115 * c,
      d: 10 * $,
      bf: 6 * $
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * F,
      Iz: 196 * c,
      Iy: 102 * c,
      J: 249 * c,
      d: 12 * $,
      bf: 8 * $
    }
  ];
  function pn() {
    const t = {};
    return tt.forEach((Y, G) => {
      Y.type === "W" && (t[Y.name] = G);
    }), t;
  }
  function dn() {
    const t = {};
    return tt.forEach((Y, G) => {
      Y.type === "HSS" && (t[Y.name] = G);
    }), t;
  }
  fn = Qe.state(false);
  aa = function(t) {
    t.nodeInputs || (t.nodeInputs = Qe.state({})), t.elementInputs || (t.elementInputs = Qe.state({})), t.deformOutputs || (t.deformOutputs = Qe.state({})), t.analyzeOutputs || (t.analyzeOutputs = Qe.state({}));
    let Y = "kN", G = "m", K = et(Y, G), N = "", te = {}, ie = null, ge = "", Z = [], oe = [], $e = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
    const Oe = () => ({
      b: 0.25,
      h: 0.5,
      profileIdx: 0
    }), nt = (e, n) => ({
      bCol: 0.3,
      hCol: 0.3,
      dCol: 0.4,
      colProfileIdx: 0,
      vigasX: Array.from({
        length: e
      }, Oe),
      vigasY: Array.from({
        length: n
      }, Oe)
    }), le = {
      material: 0,
      colShape: 0,
      fc: 28e3,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Se = 0, ye = 3, Re = false, ke = 0, xe = null, je = 0, He = [], pt = 1, dt = true;
    const at = Un();
    at.div.style.display = "none";
    function yt() {
      const e = bt()[N];
      return e && e[Se] ? e[Se].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Le = null;
    function Ct() {
      if (!Le) return;
      const e = Ie();
      e && e.scene.remove(Le), Le.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Le = null;
    }
    function Pt(e, n, o, s, l) {
      Ct();
      const r = Ie();
      if (!r) return;
      Le = new on(), Le.name = "gridAxes";
      const a = Math.min(...e), u = Math.max(...e), d = Math.min(...n), m = Math.max(...n), p = u - a || 1, i = m - d || 1, v = Math.max(p, i), k = v * 0.08, b = e.map((E, T) => String.fromCharCode(65 + T)), f = n.map((E, T) => String(T + 1)), h = v * 0.018, M = n.length <= 1, S = 8947848;
      for (let E = 0; E < e.length; E++) {
        const T = e[E];
        if (M) {
          const A = -k - h * 1.5;
          $t(T, 0, 0, T, 0, A + h, S, Le), Mt(b[E] || `${E}`, T, 0, A, h, Le);
        } else {
          const A = d - k - h * 1.5;
          $t(T, d, 0, T, A + h, 0, S, Le), Mt(b[E] || `${E}`, T, A, 0, h, Le);
        }
      }
      if (!M) for (let E = 0; E < n.length; E++) {
        const T = n[E], A = a - k - h * 1.5;
        $t(a, T, 0, A + h, T, 0, S, Le), Mt(f[E] || `${E}`, A, T, 0, h, Le);
      }
      r.scene.add(Le), r.render();
    }
    function $t(e, n, o, s, l, r, a, u) {
      const d = new sn().setFromPoints([
        new we(e, n, o),
        new we(s, l, r)
      ]), m = new Hn({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(s - e), Math.abs(l - n), Math.abs(r - o), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(s - e), Math.abs(l - n), Math.abs(r - o), 0.1),
        transparent: true,
        opacity: 0.6
      }), p = new Jn(d, m);
      p.computeLineDistances(), u.add(p);
    }
    function Mt(e, n, o, s, l, r) {
      const a = document.createElement("canvas"), u = 128;
      a.width = u, a.height = u;
      const d = a.getContext("2d");
      d.beginPath(), d.arc(u / 2, u / 2, u * 0.42, 0, Math.PI * 2), d.fillStyle = "rgba(255,255,255,0.9)", d.fill(), d.lineWidth = u * 0.04, d.strokeStyle = "#555", d.stroke(), d.fillStyle = "#222", d.font = `bold ${u * 0.45}px Arial`, d.textAlign = "center", d.textBaseline = "middle", d.fillText(e, u / 2, u / 2 + u * 0.02);
      const m = new ln(a);
      m.needsUpdate = true;
      const p = new cn({
        map: m,
        depthTest: false,
        transparent: true
      }), i = new rn(p);
      i.position.set(n, o, s);
      const v = l * 2;
      i.scale.set(v, v, 1), i.renderOrder = 100, r.add(i);
    }
    const pe = {
      addNode(e, n, o) {
        const s = [
          ...t.nodes.val
        ], l = s.length;
        return s.push([
          e,
          n,
          o
        ]), t.nodes.val = s, console.log(`Node ${l} at (${e}, ${n}, ${o})`), de(), l;
      },
      removeNode(e) {
        const n = [
          ...t.nodes.val
        ];
        if (e < 0 || e >= n.length) {
          console.error(`Node ${e} not found`);
          return;
        }
        n.splice(e, 1);
        const o = t.elements.val.map(([s, l]) => {
          const r = s > e ? s - 1 : s, a = l > e ? l - 1 : l;
          return s === e || l === e ? null : [
            r,
            a
          ];
        }).filter((s) => s !== null);
        t.nodes.val = n, t.elements.val = o, console.log(`Node ${e} removed`), de();
      },
      listNodes() {
        const e = t.nodes.val;
        return console.table(e.map((n, o) => ({
          id: o,
          x: n[0],
          y: n[1],
          z: n[2]
        }))), e;
      },
      addFrame(e, n) {
        const o = [
          ...t.elements.val
        ], s = o.length;
        return o.push([
          e,
          n
        ]), t.elements.val = o, console.log(`Element ${s}: node ${e} -> node ${n}`), de(), s;
      },
      removeFrame(e) {
        const n = [
          ...t.elements.val
        ];
        if (e < 0 || e >= n.length) {
          console.error(`Element ${e} not found`);
          return;
        }
        n.splice(e, 1), t.elements.val = n, console.log(`Element ${e} removed`), de();
      },
      listFrames() {
        const e = t.elements.val;
        return console.table(e.map((n, o) => ({
          id: o,
          nodeI: n[0],
          nodeJ: n[1]
        }))), e;
      },
      addSupport(e, n) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, s = new Map(o.supports || []);
        s.set(e, n || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), o.supports = s, t.nodeInputs.val = o, console.log(`Support added at node ${e}`), de();
      },
      removeSupport(e) {
        if (!t.nodeInputs) return;
        const n = {
          ...t.nodeInputs.val
        }, o = new Map(n.supports || []);
        o.delete(e), n.supports = o, t.nodeInputs.val = n, console.log(`Support removed from node ${e}`), de();
      },
      addLoad(e, n) {
        if (!t.nodeInputs) return;
        const o = {
          ...t.nodeInputs.val
        }, s = new Map(o.loads || []);
        s.set(e, n), o.loads = s, t.nodeInputs.val = o, console.log(`Load added at node ${e}: [${n.join(", ")}]`), de();
      },
      removeLoad(e) {
        if (!t.nodeInputs) return;
        const n = {
          ...t.nodeInputs.val
        }, o = new Map(n.loads || []);
        o.delete(e), n.loads = o, t.nodeInputs.val = n, console.log(`Load removed from node ${e}`), de();
      },
      listSupports() {
        if (!t.nodeInputs) return;
        const e = t.nodeInputs.val.supports;
        if (!e || e.size === 0) {
          console.log("No supports");
          return;
        }
        const n = [];
        return e.forEach((o, s) => n.push({
          node: s,
          dof: o.map((l) => l ? 1 : 0).join("")
        })), console.table(n), e;
      },
      listLoads() {
        if (!t.nodeInputs) return;
        const e = t.nodeInputs.val.loads;
        if (!e || e.size === 0) {
          console.log("No loads");
          return;
        }
        const n = [];
        return e.forEach((o, s) => n.push({
          node: s,
          Fx: o[0],
          Fy: o[1],
          Fz: o[2]
        })), console.table(n), e;
      },
      info() {
        var _a, _b, _c, _d, _e2, _f;
        const e = t.nodes.val.length, n = t.elements.val.length, o = ((_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, s = ((_f = (_e2 = (_d = t.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${e} nodes, ${n} elements, ${o} supports, ${s} loads`), {
          nodes: e,
          elements: n,
          supports: o,
          loads: s
        };
      },
      clear() {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs && (t.nodeInputs.val = {}), t.elementInputs && (t.elementInputs.val = {}), $e = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), Ct(), console.log("Model cleared"), de();
      },
      frame(e, n, o = 0, s = 0) {
        pe.clear();
        const l = [];
        o > 0 && l.push(-o);
        let r = 0;
        l.push(r);
        for (const b of e) r += b, l.push(r);
        s > 0 && l.push(r + s);
        const a = [
          0
        ];
        let u = 0;
        for (const b of n) u += b, a.push(u);
        const d = (b) => o > 0 && b === 0 || s > 0 && b === l.length - 1, m = {}, p = [];
        for (let b = 0; b < a.length; b++) for (let f = 0; f < l.length; f++) b === 0 && d(f) || (m[`${f},${b}`] = p.length, p.push([
          l[f],
          0,
          a[b]
        ]));
        const i = [];
        $e = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set();
        for (let b = 0; b < a.length - 1; b++) for (let f = 0; f < l.length; f++) d(f) || ($e.add(i.length), i.push([
          m[`${f},${b}`],
          m[`${f},${b + 1}`]
        ]));
        for (let b = 1; b < a.length; b++) for (let f = 0; f < l.length - 1; f++) Ee.add(i.length), i.push([
          m[`${f},${b}`],
          m[`${f + 1},${b}`]
        ]);
        const v = /* @__PURE__ */ new Map(), k = yt();
        for (let b = 0; b < l.length; b++) {
          if (d(b)) continue;
          const f = `${b},0`;
          m[f] !== void 0 && v.set(m[f], [
            ...k
          ]);
        }
        return t.nodes.val = p, t.elements.val = i, t.nodeInputs && (t.nodeInputs.val = {
          supports: v
        }), setTimeout(() => {
          Pe(), Pt(l, [
            0
          ]);
        }, 50), de(), {
          nodes: p.length,
          elements: i.length
        };
      },
      building(e, n, o, s = 3, l = 0, r = 0, a = 0, u = 0, d = 1) {
        pe.clear();
        const m = [];
        l > 0 && m.push(-l), m.push(0);
        for (const y of e) m.push(m[m.length - 1] + y);
        r > 0 && m.push(m[m.length - 1] + r);
        const p = [];
        a > 0 && p.push(-a), p.push(0);
        for (const y of n) p.push(p[p.length - 1] + y);
        u > 0 && p.push(p[p.length - 1] + u);
        const i = [
          0
        ];
        for (const y of o) i.push(i[i.length - 1] + y);
        const v = (y) => l > 0 && y === 0 || r > 0 && y === m.length - 1, k = (y) => a > 0 && y === 0 || u > 0 && y === p.length - 1, b = (y, O) => v(y) || k(O), f = [], h = {};
        for (let y = 0; y < i.length; y++) for (let O = 0; O < p.length; O++) for (let H = 0; H < m.length; H++) y === 0 && b(H, O) || (h[`${H},${O},${y}`] = f.length, f.push([
          m[H],
          p[O],
          i[y]
        ]));
        const M = f.length, S = [];
        $e = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const E = [];
        for (let y = 0; y < i.length - 1; y++) for (let O = 0; O < p.length; O++) for (let H = 0; H < m.length; H++) b(H, O) || E.push({
          el: [
            h[`${H},${O},${y}`],
            h[`${H},${O},${y + 1}`]
          ],
          floor: y
        });
        for (const { el: [y, O], floor: H } of E) {
          if (d <= 1) {
            $e.add(S.length), Me.set(S.length, H), S.push([
              y,
              O
            ]);
            continue;
          }
          const W = f[y], V = f[O];
          let R = y;
          for (let L = 1; L < d; L++) {
            const P = L / d, z = f.length;
            f.push([
              W[0] + (V[0] - W[0]) * P,
              W[1] + (V[1] - W[1]) * P,
              W[2] + (V[2] - W[2]) * P
            ]), $e.add(S.length), Me.set(S.length, H), S.push([
              R,
              z
            ]), R = z;
          }
          $e.add(S.length), Me.set(S.length, H), S.push([
            R,
            O
          ]);
        }
        he = /* @__PURE__ */ new Map();
        const T = [];
        for (let y = 1; y < i.length; y++) for (let O = 0; O < p.length; O++) for (let H = 0; H < m.length - 1; H++) T.push({
          el: [
            h[`${H},${O},${y}`],
            h[`${H + 1},${O},${y}`]
          ],
          floor: y - 1,
          dir: "x",
          bay: H
        });
        for (let y = 1; y < i.length; y++) for (let O = 0; O < m.length; O++) for (let H = 0; H < p.length - 1; H++) T.push({
          el: [
            h[`${O},${H},${y}`],
            h[`${O},${H + 1},${y}`]
          ],
          floor: y - 1,
          dir: "y",
          bay: H
        });
        for (const { el: [y, O], floor: H, dir: W, bay: V } of T) {
          const R = f[y], L = f[O];
          let P = y;
          for (let q = 1; q < s; q++) {
            const X = q / s, J = f.length;
            f.push([
              R[0] + (L[0] - R[0]) * X,
              R[1] + (L[1] - R[1]) * X,
              R[2] + (L[2] - R[2]) * X
            ]);
            const B = S.length;
            Ee.add(B), Me.set(B, H), he.set(B, {
              dir: W,
              bay: V
            }), S.push([
              P,
              J
            ]), P = J;
          }
          const z = S.length;
          Ee.add(z), Me.set(z, H), he.set(z, {
            dir: W,
            bay: V
          }), S.push([
            P,
            O
          ]);
        }
        const A = /* @__PURE__ */ new Map(), x = yt();
        for (let y = 0; y < p.length; y++) for (let O = 0; O < m.length; O++) b(O, y) || A.set(h[`${O},${y},0`], [
          ...x
        ]);
        return t.nodes.val = f, t.elements.val = S, t.nodeInputs && (t.nodeInputs.val = {
          supports: A
        }), setTimeout(() => {
          Pe(), Pt(m, p);
        }, 50), de(), {
          nodes: f.length,
          elements: S.length,
          nJointNodes: M
        };
      },
      galpon(e = 12, n = 20, o = 6, s = 3, l = 8, r = 4) {
        pe.clear();
        const a = [], u = [], d = (k) => o + s * (1 - Math.pow(2 * k / e - 1, 2)), m = [], p = r + 1;
        for (let k = 0; k < p; k++) {
          const b = [], f = n / r * k;
          b.push(a.length), a.push([
            0,
            f,
            0
          ]), b.push(a.length), a.push([
            e,
            f,
            0
          ]), b.push(a.length), a.push([
            0,
            f,
            o
          ]);
          for (let h = 1; h < l; h++) {
            const M = e / l * h;
            b.push(a.length), a.push([
              M,
              f,
              d(M)
            ]);
          }
          b.push(a.length), a.push([
            e,
            f,
            o
          ]), m.push(b);
        }
        for (let k = 0; k < p; k++) {
          const b = m[k];
          u.push([
            b[0],
            b[2]
          ]), u.push([
            b[1],
            b[b.length - 1]
          ]);
          for (let f = 2; f < b.length - 1; f++) u.push([
            b[f],
            b[f + 1]
          ]);
        }
        for (let k = 0; k < r; k++) for (let b = 2; b < m[0].length; b++) u.push([
          m[k][b],
          m[k + 1][b]
        ]);
        for (let k = 0; k < r; k++) for (let b = 2; b < m[0].length - 1; b += 2) u.push([
          m[k][b],
          m[k + 1][b + 1]
        ]);
        const i = /* @__PURE__ */ new Map(), v = yt();
        for (let k = 0; k < p; k++) i.set(m[k][0], [
          ...v
        ]), i.set(m[k][1], [
          ...v
        ]);
        return t.nodes.val = a, t.elements.val = u, t.nodeInputs && (t.nodeInputs.val = {
          supports: i
        }), de(), {
          nodes: a.length,
          elements: u.length
        };
      },
      example(e) {
        if (!e) {
          console.log("Ejemplos: truss, beams, 3d, portico, edificio, galpon");
          return;
        }
        switch (e) {
          case "truss": {
            pe.clear(), be("truss"), Wt();
            break;
          }
          case "beams": {
            pe.clear(), be("beams"), Nt();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            pe.clear(), be("3d"), Ht();
            break;
          }
          case "portico": {
            be("frame"), se();
            break;
          }
          case "edificio": {
            be("edificio"), se();
            break;
          }
          case "galpon": {
            be("galpon"), se();
            break;
          }
          case "barra": {
            be("barra"), se();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            pe.clear(), be("placa-3q"), Jt();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            pe.clear(), be("placa-q4"), jt();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            pe.clear(), be("losa-rect"), _t();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            pe.clear(), be("losa-plana"), Yt();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            pe.clear(), be("viga-alta"), Bt();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            pe.clear(), be("muro-contencion"), Vt();
            break;
          }
          case "zapata":
          case "footing": {
            pe.clear(), be("zapata"), Dt();
            break;
          }
          case "placa-orificios":
          case "plate-holes": {
            pe.clear(), be("placa-orificios"), Xt();
            break;
          }
          case "talud":
          case "slope": {
            pe.clear(), be("talud"), Gt();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${e}".`);
        }
      },
      plateQ4(e = 10, n = 10, o = 16, s = 16, l = "simply-supported", r = -10, a = 0.2, u = 3e7, d = 0.3, m = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][m]}]: ${e}\xD7${n}, ${o}\xD7${s} elem, BC=${l}, q=${r}, t=${a}`);
        const i = performance.now(), v = Rt({
          E: u,
          nu: d,
          thickness: a,
          meshLx: e,
          meshLy: n,
          meshNx: o,
          meshNy: s,
          bcType: l,
          pressure: r,
          theoryType: m
        }), k = performance.now() - i;
        console.log(`Solved in ${k.toFixed(1)} ms`), console.log(`w_max = ${v.maxW.toExponential(6)}`), console.log(`w_center = ${(v.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${v.maxMxx.toExponential(4)}, Myy_max = ${v.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${v.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${v.maxQx.toExponential(4)}, Qy_max = ${v.maxQy.toExponential(4)}`);
        const b = v.nodeResults.map((E) => [
          E.x,
          E.y,
          0
        ]), f = v.elementResults.map((E) => [
          ...E.nodes
        ]);
        t.nodes.val = b, t.elements.val = f;
        const h = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((E, T) => {
          h.set(T, [
            0,
            0,
            E.w,
            E.bx,
            E.by,
            0
          ]);
        }), t.deformOutputs && (t.deformOutputs.val = {
          deformations: h
        });
        const M = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((E, T) => {
          (E.x < 1e-10 || E.x > e - 1e-10 || E.y < 1e-10 || E.y > n - 1e-10) && M.set(T, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const S = /* @__PURE__ */ new Map();
        if (Math.abs(r) > 1e-30) {
          const E = r * e * n / b.length;
          b.forEach((T, A) => {
            M.has(A) || S.set(A, [
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
          loads: S
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
          const E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
          v.elementResults.forEach((x, y) => {
            E.set(y, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), T.set(y, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), A.set(y, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), t.analyzeOutputs.val = {
            bendingXX: E,
            bendingYY: T,
            bendingXY: A
          };
        }
        return setTimeout(() => Pe(), 50), de(), v;
      },
      set(e, n) {
        te[e] ? (te[e].val = n, console.log(`${e} = ${n}`), Ne(), se()) : re[e] ? (re[e].val = n, console.log(`${e} = ${n}`), Ne(), se()) : console.error(`Par\xE1metro "${e}" no encontrado. Disponibles: ${Object.keys({
          ...te,
          ...re
        }).join(", ")}`);
      },
      get(e) {
        if (!e) {
          const n = {};
          for (const s in te) n[s] = te[s].val;
          for (const s in re) n[s] = re[s].val;
          n.plateTheory = ye, n.supportType = Se;
          const o = bt()[N];
          return o && o[Se] && (n.supportLabel = o[Se].label), console.table(n), n;
        }
        if (te[e]) return te[e].val;
        if (re[e]) return re[e].val;
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
        }[e.toLowerCase()] || 3), ye = e, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[ye] || ye}`), N.includes("placa") && (Ne(), se());
      },
      setBc(e) {
        const n = bt()[N];
        if (!n || n.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof e == "string") {
          const o = n.findIndex((s) => s.label.toLowerCase().includes(e.toLowerCase()));
          e = o >= 0 ? o : 0;
        }
        Se = e, Se >= n.length && (Se = 0), console.log(`Apoyo: ${n[Se].label} \u2192 DOFs: [${n[Se].dofs.map((o) => o ? "1" : "0").join(",")}]`), Ne(), se();
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
      units(e, n) {
        e && (Y = e), n && (G = n), K = et(Y, G);
        const o = U.querySelector("#cad3d-force-unit"), s = U.querySelector("#cad3d-length-unit");
        return o && (o.textContent = Y), s && (s.textContent = G), N && be(N), console.log(`Unidades: ${K.label} | E=${K.E.toExponential(3)} ${K.stress}`), K.id;
      },
      view(e) {
      },
      get mesh() {
        return t;
      }
    };
    function Ft() {
      return Xn(K);
    }
    function Ot() {
      return Gn(K);
    }
    let re = {};
    function be(e) {
      var _a, _b;
      N = e, fn.val = true, Se = 0, je && St(), te = {};
      const n = Ft()[e];
      if (n) for (const s of n) te[s.key] = {
        val: s.val,
        min: s.min,
        max: s.max,
        step: s.step,
        label: s.label
      };
      re = {};
      const o = Ot()[e];
      if (o) for (const s of o) re[s.key] = {
        val: s.val,
        min: s.min,
        max: s.max,
        step: s.step,
        label: s.label
      };
      if (e === "edificio") {
        const s = Math.round(((_a = te.nVanosX) == null ? void 0 : _a.val) ?? 2), l = Math.round(((_b = te.nVanosY) == null ? void 0 : _b.val) ?? 2);
        Z = Array(s).fill(K.defaultSpan), oe = Array(l).fill(K.defaultSpan * 0.8);
      }
      Ne(), setTimeout(() => {
        kn(), se();
      }, 50);
    }
    function w(e) {
      var _a, _b;
      return ((_a = te[e]) == null ? void 0 : _a.val) ?? ((_b = re[e]) == null ? void 0 : _b.val) ?? 0;
    }
    function se() {
      switch (N) {
        case "truss":
          Wt();
          break;
        case "beams":
          Nt();
          break;
        case "3d":
          Ht();
          break;
        case "frame": {
          const n = Math.round(w("nVanos")), o = w("spanV"), s = Math.round(w("nPisos")), l = w("hPiso");
          pe.frame(Array(n).fill(o), Array(s).fill(l));
          break;
        }
        case "edificio": {
          const n = Math.round(w("nPisos")), o = w("hPiso"), s = w("Lvix") || 0, l = w("Lvdx") || 0, r = w("Lviy") || 0, a = w("Lvdy") || 0, u = Math.max(1, Math.round(w("nSubViga") || 3)), d = Math.max(1, Math.round(w("nSubCol") || 1));
          pe.building([
            ...Z
          ], [
            ...oe
          ], Array(n).fill(o), u, s, l, r, a, d);
          break;
        }
        case "galpon":
          pe.galpon(w("span"), w("length"), w("height"), w("archRise"), Math.round(w("xDiv")), Math.round(w("yDiv")));
          break;
        case "barra":
          mn();
          break;
        case "placa-3q":
          Jt();
          break;
        case "placa-q4":
          jt();
          break;
        case "losa-rect":
          _t();
          break;
        case "losa-plana":
          Yt();
          break;
        case "viga-alta":
          Bt();
          break;
        case "muro-contencion":
          Vt();
          break;
        case "zapata":
          Dt();
          break;
        case "placa-orificios":
          Xt();
          break;
        case "talud":
          Gt();
          break;
      }
      if ((N === "frame" || N === "edificio" || N === "galpon") && t.nodeInputs) {
        const n = t.nodeInputs.val;
        n.supports && (t.nodeInputs.val = {
          supports: n.supports
        });
      }
      [
        "placa-q4",
        "placa-3q",
        "losa-rect",
        "losa-plana",
        "viga-alta",
        "muro-contencion",
        "zapata",
        "placa-orificios",
        "talud"
      ].includes(N) || setTimeout(() => {
        Mn(), zt();
      }, 30);
    }
    function Wt() {
      const e = w("span"), n = Math.round(w("divisions")), o = w("height"), s = e / n, l = [], r = [];
      for (let p = 0; p <= n; p++) l.push([
        s * p,
        0,
        0
      ]);
      for (let p = 0; p <= n; p++) l.push([
        s * p,
        0,
        o
      ]);
      const a = n + 1;
      for (let p = 0; p < n; p++) r.push([
        p,
        p + 1
      ]);
      for (let p = 0; p < n; p++) r.push([
        a + p,
        a + p + 1
      ]);
      for (let p = 0; p <= n; p++) r.push([
        p,
        a + p
      ]);
      for (let p = 0; p < n; p++) p < n / 2 ? r.push([
        p,
        a + p + 1
      ]) : r.push([
        a + p,
        p + 1
      ]);
      const u = /* @__PURE__ */ new Map([
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
          Math.round(n),
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]), d = (w("CM") ?? 0) + (w("CV") ?? 0), m = /* @__PURE__ */ new Map();
      if (d !== 0) for (let p = 0; p <= n; p++) m.set(p, [
        0,
        0,
        d,
        0,
        0,
        0
      ]);
      t.nodes.val = l, t.elements.val = r, t.nodeInputs && (t.nodeInputs.val = {
        supports: u,
        loads: m
      }), de();
    }
    function Nt() {
      const e = w("width"), n = w("height"), o = w("Ex") ?? 0, s = (w("CM") ?? 0) + (w("CV") ?? 0), l = Math.max(1, Math.round(w("nSub") || 4)), r = [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          n
        ],
        [
          e,
          0,
          n
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
      const u = [
        0,
        0,
        n
      ], d = [
        e,
        0,
        n
      ];
      let m = 1;
      for (let i = 1; i < l; i++) {
        const v = i / l, k = r.length;
        r.push([
          u[0] + (d[0] - u[0]) * v,
          u[1] + (d[1] - u[1]) * v,
          u[2] + (d[2] - u[2]) * v
        ]), a.push([
          m,
          k
        ]), m = k;
      }
      a.push([
        m,
        2
      ]);
      const p = /* @__PURE__ */ new Map();
      if (o !== 0 && s === 0) p.set(2, [
        o,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (s !== 0 && o === 0) for (let i = 1; i < r.length; i++) i === 0 || i === 3 || p.set(i, [
        0,
        0,
        s,
        0,
        0,
        0
      ]);
      else if (o !== 0 && s !== 0) for (let i = 1; i < r.length; i++) i === 0 || i === 3 || p.set(i, [
        i === 2 ? o : 0,
        0,
        s,
        0,
        0,
        0
      ]);
      t.nodes.val = r, t.elements.val = a, t.nodeInputs && (t.nodeInputs.val = {
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
        loads: p
      }), de();
    }
    function Ht() {
      const e = w("dx"), n = w("dy"), o = w("dz"), s = Math.round(w("stories")), l = Math.max(1, Math.round(w("nSub") || 3)), r = [];
      for (let f = 0; f <= s; f++) r.push([
        0,
        0,
        o * f
      ], [
        e,
        0,
        o * f
      ], [
        e,
        n,
        o * f
      ], [
        0,
        n,
        o * f
      ]);
      const a = r.length, u = [
        ...r
      ], d = [];
      for (let f = 0; f < s; f++) for (let h = 0; h < 4; h++) d.push([
        f * 4 + h,
        (f + 1) * 4 + h
      ]);
      for (let f = 0; f < s; f++) {
        const h = f * 4;
        d.push([
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
      const m = [];
      for (let f = 1; f <= s; f++) {
        const h = f * 4;
        m.push([
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
      for (const [f, h] of m) {
        const M = r[f], S = r[h];
        let E = f;
        for (let T = 1; T < l; T++) {
          const A = T / l, x = u.length;
          u.push([
            M[0] + (S[0] - M[0]) * A,
            M[1] + (S[1] - M[1]) * A,
            M[2] + (S[2] - M[2]) * A
          ]), d.push([
            E,
            x
          ]), E = x;
        }
        d.push([
          E,
          h
        ]);
      }
      const p = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) p.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = w("Ex") ?? 0, v = (w("CM") ?? 0) + (w("CV") ?? 0), k = a - 2, b = /* @__PURE__ */ new Map();
      if (i !== 0 && v === 0) b.set(k, [
        i,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (v !== 0 && i === 0) for (let f = 0; f < u.length; f++) p.has(f) || b.set(f, [
        0,
        0,
        v,
        0,
        0,
        0
      ]);
      else if (i !== 0 && v !== 0) for (let f = 0; f < u.length; f++) p.has(f) || b.set(f, [
        f === k ? i : 0,
        0,
        v,
        0,
        0,
        0
      ]);
      t.nodes.val = u, t.elements.val = d, t.nodeInputs && (t.nodeInputs.val = {
        supports: p,
        loads: b
      }), de();
    }
    function mn() {
      const e = w("L"), n = Math.round(w("nElem")), o = w("F"), s = e / n, l = [], r = [];
      for (let d = 0; d <= n; d++) l.push([
        s * d,
        0,
        0
      ]);
      for (let d = 0; d < n; d++) r.push([
        d,
        d + 1
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
      ]), u = /* @__PURE__ */ new Map([
        [
          n,
          [
            o,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ]);
      t.nodes.val = l, t.elements.val = r, t.nodeInputs && (t.nodeInputs.val = {
        supports: a,
        loads: u
      }), de();
    }
    function Jt() {
      const e = w("Lx") || 15, n = w("Ly") || 10, o = w("meshSize") || 0.5, s = w("q") || -3, l = w("t") || 1, r = w("E") || 3e7, a = w("nu") || 0.3, u = r / (2 * (1 + a)), d = ye === 1 ? "Membrana" : ye === 2 ? "Kirchhoff" : "Mindlin", { nodes: m, elements: p, boundaryIndices: i } = Ye({
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
            n,
            0
          ],
          [
            0,
            n,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: o
      }), v = e * n, k = s * v / m.length, b = new Map(i.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(m.map((h, M) => [
        M,
        [
          0,
          0,
          k,
          0,
          0,
          0
        ]
      ]));
      t.nodes.val = m, t.elements.val = p, t.nodeInputs && (t.nodeInputs.val = {
        supports: b,
        loads: f
      }), t.elementInputs && (t.elementInputs.val = {
        elasticities: new Map(p.map((h, M) => [
          M,
          r
        ])),
        elasticitiesOrthogonal: new Map(p.map((h, M) => [
          M,
          r
        ])),
        thicknesses: new Map(p.map((h, M) => [
          M,
          l
        ])),
        poissonsRatios: new Map(p.map((h, M) => [
          M,
          a
        ])),
        shearModuli: new Map(p.map((h, M) => [
          M,
          u
        ]))
      });
      try {
        const h = ct(m, p, t.nodeInputs.val, t.elementInputs.val);
        h && t.deformOutputs && (t.deformOutputs.val = h);
        const M = rt(m, p, t.elementInputs.val, h);
        M && t.analyzeOutputs && (t.analyzeOutputs.val = M), console.log(`Plate 3Q [${d}]: ${m.length} nodes, ${p.length} triangles, t=${l}, E=${r}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => Pe(), 50), de();
    }
    function jt() {
      const e = w("Lx") || 10, n = w("Ly") || 10, o = Math.round(w("nx") || 16), s = Math.round(w("ny") || 16), l = w("t") || 0.2, r = w("q") || -10, a = w("E") || 3e7, u = w("nu") || 0.3, d = Se === 1 ? "clamped" : "simply-supported", p = {
        1: 2,
        2: 1,
        3: 0
      }[ye] ?? 0;
      return pe.plateQ4(e, n, o, s, d, r, l, a, u, p);
    }
    function _t() {
      const e = w("a") || 6, n = w("b") || 4, o = Math.round(w("nx") || 12), s = Math.round(w("ny") || 8), l = w("t") || 0.1, r = w("q") || -10, a = w("E") || 35e6, u = w("nu") || 0.15, m = {
        1: 2,
        2: 1,
        3: 0
      }[ye] ?? 0, p = pe.plateQ4(e, n, o, s, "simply-supported", r, l, a, u, m), i = a * l * l * l / (12 * (1 - u * u));
      let v = 0;
      for (let k = 1; k <= 19; k += 2) for (let b = 1; b <= 19; b += 2) {
        const f = k * k / (e * e) + b * b / (n * n);
        v += 1 / (k * b * f * f);
      }
      if (v *= 16 * Math.abs(r) / (Math.PI ** 6 * i), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${v.toExponential(6)}`), p) {
        const k = Math.abs((Math.abs(p.centerW || 0) - v) / v * 100);
        console.log(`   WASM w_center = ${(p.centerW || 0).toExponential(6)}, error = ${k.toFixed(2)}%`);
      }
      return p;
    }
    function Yt() {
      const e = w("t") || 0.2, n = w("q") || -10, o = w("E") || 35e6, s = w("nu") || 0.2, l = w("meshSize") || 0.6, r = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], u = r.reduce((R, L) => R + L, 0), d = a.reduce((R, L) => R + L, 0), m = [
        0
      ];
      for (const R of r) m.push(m[m.length - 1] + R);
      const p = [
        0
      ];
      for (const R of a) p.push(p[p.length - 1] + R);
      const i = Math.max(2, Math.round(u / l)), v = Math.max(2, Math.round(d / l)), k = u / i, b = d / v, f = [];
      for (let R = 0; R <= v; R++) for (let L = 0; L <= i; L++) f.push([
        L * k,
        R * b
      ]);
      const h = [], M = /* @__PURE__ */ new Set();
      for (const R of m) for (const L of p) {
        let P = 1 / 0, z = 0;
        for (let q = 0; q < f.length; q++) {
          const X = Math.hypot(f[q][0] - R, f[q][1] - L);
          X < P && (P = X, z = q);
        }
        M.has(z) || (M.add(z), h.push({
          node: z,
          dof: 0,
          k: 1e15
        }));
      }
      const E = {
        1: 2,
        2: 1,
        3: 0
      }[ye] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][E]}]: ${u}\xD7${d}m, ${i}\xD7${v} elem, ${M.size} columnas`);
      const T = performance.now(), A = Rt({
        E: o,
        nu: s,
        thickness: e,
        meshLx: u,
        meshLy: d,
        meshNx: i,
        meshNy: v,
        bcType: "none",
        pressure: n,
        theoryType: E,
        springs: h
      }), x = performance.now() - T;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${A.maxW.toExponential(4)}`);
      const y = A.nodeResults.map((R) => [
        R.x,
        R.y,
        0
      ]), O = A.elementResults.map((R) => [
        ...R.nodes
      ]);
      t.nodes.val = y, t.elements.val = O;
      const H = /* @__PURE__ */ new Map();
      A.nodeResults.forEach((R, L) => {
        H.set(L, [
          0,
          0,
          R.w,
          R.bx,
          R.by,
          0
        ]);
      }), t.deformOutputs && (t.deformOutputs.val = {
        deformations: H
      });
      const W = /* @__PURE__ */ new Map();
      for (const R of M) W.set(R, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const V = /* @__PURE__ */ new Map();
      if (Math.abs(n) > 1e-30) {
        const R = n * u * d / y.length;
        y.forEach((L, P) => {
          W.has(P) || V.set(P, [
            0,
            0,
            R,
            0,
            0,
            0
          ]);
        });
      }
      if (t.nodeInputs && (t.nodeInputs.val = {
        supports: W,
        loads: V
      }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
        const R = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        A.elementResults.forEach((z, q) => {
          R.set(q, [
            z.Mxx,
            z.Mxx,
            z.Mxx
          ]), L.set(q, [
            z.Myy,
            z.Myy,
            z.Myy
          ]), P.set(q, [
            z.Mxy,
            z.Mxy,
            z.Mxy
          ]);
        }), t.analyzeOutputs.val = {
          bendingXX: R,
          bendingYY: L,
          bendingXY: P
        };
      }
      setTimeout(() => Pe(), 50), de();
    }
    function Bt() {
      const e = w("L") || 4, n = w("H") || 2, o = w("t") || 0.1, s = w("E") || 2e7, l = w("nu") || 0.2, r = s / (2 * (1 + l)), a = w("q") || -100, u = w("b") || 0.8, d = w("meshSize") || 0.2, { nodes: m, elements: p, boundaryIndices: i } = Ye({
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
            n,
            0
          ],
          [
            0,
            n,
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
      }), v = m, k = 0.4, b = /* @__PURE__ */ new Map();
      for (let x = 0; x < v.length; x++) {
        const y = v[x][0], O = v[x][1];
        Math.abs(O) < 1e-6 && (y <= k + 1e-6 || y >= e - k - 1e-6) && b.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (e - u) / 2, h = f + u, M = [];
      for (let x = 0; x < v.length; x++) if (Math.abs(v[x][1] - n) < 1e-6) {
        const y = v[x][0];
        y >= f - 1e-6 && y <= h + 1e-6 && M.push(x);
      }
      const S = a * u / Math.max(M.length, 1), E = /* @__PURE__ */ new Map();
      for (const x of M) E.set(x, [
        0,
        S,
        0,
        0,
        0,
        0
      ]);
      const T = {
        elasticities: new Map(p.map((x, y) => [
          y,
          s
        ])),
        elasticitiesOrthogonal: new Map(p.map((x, y) => [
          y,
          s
        ])),
        thicknesses: new Map(p.map((x, y) => [
          y,
          o
        ])),
        poissonsRatios: new Map(p.map((x, y) => [
          y,
          l
        ])),
        shearModuli: new Map(p.map((x, y) => [
          y,
          r
        ]))
      }, A = {
        supports: b,
        loads: E
      };
      try {
        const x = ct(v, p, A, T), y = rt(v, p, T, x), O = v.map((W) => [
          W[0],
          0,
          W[1]
        ]);
        if (t.nodes.val = O, t.elements.val = p, x && x.deformations) {
          const W = /* @__PURE__ */ new Map();
          x.deformations.forEach((V, R) => {
            W.set(R, [
              V[0],
              V[2],
              V[1],
              V[3],
              V[5],
              V[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: W
          });
        }
        if (t.nodeInputs) {
          const W = /* @__PURE__ */ new Map();
          b.forEach((R, L) => W.set(L, R));
          const V = /* @__PURE__ */ new Map();
          E.forEach((R, L) => V.set(L, [
            R[0],
            R[2],
            R[1],
            R[3],
            R[5],
            R[4]
          ])), t.nodeInputs && (t.nodeInputs.val = {
            supports: W,
            loads: V
          });
        }
        t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let H = 0;
        x && x.deformations && x.deformations.forEach((W) => {
          const V = Math.sqrt(W[0] * W[0] + W[1] * W[1] + W[2] * W[2]);
          H = Math.max(H, V);
        }), console.log(`Viga Alta: ${v.length} nodos, ${p.length} triangulos`), console.log(`  L=${e}, H=${n}, t=${o}, E=${s}, nu=${l}`), console.log(`  Carga: q=${a} kN/m sobre ${u}m central`), console.log(`  max|u| = ${H.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => Pe(), 50), de();
    }
    function Vt() {
      const e = w("H") || 4, n = w("B") || 3, o = w("tw") || 0.3, s = w("tb") || 0.4, l = w("meshSize") || 0.2, r = w("E") || 25e6, a = w("nu") || 0.2, u = r / (2 * (1 + a)), d = w("gamma") || 18, m = w("Ka") || 0.33, p = w("Es") || 5e4, i = w("nus") || 0.3, v = p / (2 * (1 + i)), k = w("kn") || 1e6, b = w("ks") || 1e4, f = w("gammaW") || 9.81, h = w("Hw") || 3.5, M = w("qs") || 0, S = Se, E = n * 0.3, T = n * 0.7, A = [
        [
          -E,
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
          s,
          0
        ],
        [
          o,
          s,
          0
        ],
        [
          o,
          s + e,
          0
        ],
        [
          0,
          s + e,
          0
        ],
        [
          0,
          s,
          0
        ],
        [
          -E,
          s,
          0
        ]
      ];
      let x = [], y = [], O = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W;
      if (S === 0) {
        const L = Ye({
          points: A,
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
          maxMeshSize: l
        });
        x = L.nodes, y = L.elements;
        for (let z = 0; z < x.length; z++) Math.abs(x[z][1]) < 1e-6 && O.set(z, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let z = 0; z < x.length; z++) {
          const q = x[z][0], X = x[z][1];
          Math.abs(q - o) < l * 0.6 && X >= s - 1e-6 && P.push({
            idx: z,
            y: X
          });
        }
        P.sort((z, q) => z.y - q.y);
        for (let z = 0; z < P.length; z++) {
          const { idx: q, y: X } = P[z], J = s + e - X, B = m * d * J + m * M;
          let ae = l;
          z > 0 && z < P.length - 1 ? ae = (P[z + 1].y - P[z - 1].y) / 2 : z === 0 && P.length > 1 ? ae = (P[1].y - P[0].y) / 2 : z === P.length - 1 && P.length > 1 && (ae = (P[z].y - P[z - 1].y) / 2);
          const Q = B * ae;
          Math.abs(Q) > 1e-10 && H.set(q, [
            Q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        W = {
          elasticities: new Map(y.map((z, q) => [
            q,
            r
          ])),
          elasticitiesOrthogonal: new Map(y.map((z, q) => [
            q,
            r
          ])),
          thicknesses: new Map(y.map((z, q) => [
            q,
            1
          ])),
          poissonsRatios: new Map(y.map((z, q) => [
            q,
            a
          ])),
          shearModuli: new Map(y.map((z, q) => [
            q,
            u
          ]))
        };
      } else if (S === 1 || S === 2) {
        const L = T, P = s + e;
        if (S === 2) {
          const z = [
            [
              -E,
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
              o,
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
              s,
              0
            ],
            [
              -E,
              s,
              0
            ]
          ], q = Math.max(3, Math.ceil((P - s) / l)), X = [];
          for (let C = 0; C <= q; C++) X.push([
            o,
            s + C * (P - s) / q,
            0
          ]);
          const J = Ye({
            points: [
              ...z,
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
            maxMeshSize: l
          });
          x = J.nodes, y = J.elements;
          const B = l * 0.4, ae = [];
          for (let C = 0; C < x.length; C++) {
            const D = x[C][0], me = x[C][1];
            Math.abs(D - o) < B && me >= s - B && ae.push(C);
          }
          ae.sort((C, D) => x[C][1] - x[D][1]);
          const Q = [
            ae[0]
          ];
          for (let C = 1; C < ae.length; C++) {
            const D = x[ae[C]][1] - x[Q[Q.length - 1]][1];
            Math.abs(D) > l * 0.05 && Q.push(ae[C]);
          }
          ae.length = 0, ae.push(...Q);
          const ce = /* @__PURE__ */ new Map();
          for (const C of ae) {
            const D = x.length;
            x.push([
              x[C][0],
              x[C][1],
              x[C][2]
            ]), ce.set(C, D);
          }
          const ne = y.length, ue = [];
          for (let C = 0; C < ne; C++) {
            const D = y[C], me = (x[D[0]][0] + x[D[1]][0] + x[D[2]][0]) / 3, Te = (x[D[0]][1] + x[D[1]][1] + x[D[2]][1]) / 3, Je = me >= -E && me <= T && Te >= 0 && Te <= s, qt = me >= 0 && me <= o && Te >= s && Te <= s + e, mt = Je || qt;
            if (ue.push(!mt), !mt) for (let De = 0; De < D.length; De++) {
              const it = ce.get(D[De]);
              it !== void 0 && (D[De] = it);
            }
          }
          const _ = y.length;
          for (let C = 0; C < ae.length - 1; C++) {
            const D = ae[C], me = ae[C + 1], Te = ce.get(D), Je = ce.get(me);
            y.push([
              me,
              D,
              Te,
              Je
            ]);
          }
          const ee = y.length - _, fe = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map();
          for (let C = 0; C < ne; C++) ue[C] ? (fe.set(C, p), Ae.set(C, p), Ke.set(C, i), Ze.set(C, v), Ce.set(C, 1)) : (fe.set(C, r), Ae.set(C, r), Ke.set(C, a), Ze.set(C, u), Ce.set(C, 1));
          for (let C = _; C < y.length; C++) fe.set(C, k), Ae.set(C, 0), Ke.set(C, 0), Ze.set(C, b), Ce.set(C, 0);
          W = {
            elasticities: fe,
            elasticitiesOrthogonal: Ae,
            thicknesses: Ce,
            poissonsRatios: Ke,
            shearModuli: Ze
          };
          for (let C = 0; C < x.length; C++) {
            const D = x[C][0], me = x[C][1];
            Math.abs(me) < 1e-6 ? O.set(C, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(D - L) < l * 0.1 && O.set(C, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let C = 0; C < ne; C++) {
            if (!ue[C]) continue;
            const D = y[C], me = x[D[0]], Te = x[D[1]], Je = x[D[2]], qt = Math.abs((Te[0] - me[0]) * (Je[1] - me[1]) - (Je[0] - me[0]) * (Te[1] - me[1])) / 2, mt = -d * qt / 3;
            for (const De of D) {
              const it = H.get(De) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              it[1] += mt, H.set(De, it);
            }
          }
          if (M > 0) {
            const C = [];
            for (let D = 0; D < x.length; D++) {
              const me = x[D][0], Te = x[D][1];
              Math.abs(Te - P) < l * 0.1 && me > o - 1e-6 && C.push({
                idx: D,
                x: me
              });
            }
            C.sort((D, me) => D.x - me.x);
            for (let D = 0; D < C.length; D++) {
              let me = l;
              D > 0 && D < C.length - 1 ? me = (C[D + 1].x - C[D - 1].x) / 2 : D === 0 && C.length > 1 ? me = (C[1].x - C[0].x) / 2 : D === C.length - 1 && C.length > 1 && (me = (C[D].x - C[D - 1].x) / 2);
              const Te = -M * me, Je = H.get(C[D].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Je[1] += Te, H.set(C[D].idx, Je);
            }
          }
          console.log(`  Interfaz Goodman: ${ae.length} nodos interfaz, ${ee} elem interfaz, kn=${k}, ks=${b}`);
        } else {
          const z = [
            [
              -E,
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
              o,
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
              s,
              0
            ],
            [
              -E,
              s,
              0
            ]
          ], q = [
            [
              o,
              s,
              0
            ]
          ], X = Ye({
            points: [
              ...z,
              ...q
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
            maxMeshSize: l
          });
          x = X.nodes, y = X.elements;
          const J = (_) => {
            const ee = (x[_[0]][0] + x[_[1]][0] + x[_[2]][0]) / 3, fe = (x[_[0]][1] + x[_[1]][1] + x[_[2]][1]) / 3, Ae = ee >= -E && ee <= T && fe >= 0 && fe <= s, Ce = ee >= 0 && ee <= o && fe >= s && fe <= s + e;
            return Ae || Ce;
          }, B = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ue = [];
          for (let _ = 0; _ < y.length; _++) {
            const ee = J(y[_]);
            ue.push(!ee), ee ? (B.set(_, r), ae.set(_, r), ce.set(_, a), ne.set(_, u), Q.set(_, 1)) : (B.set(_, p), ae.set(_, p), ce.set(_, i), ne.set(_, v), Q.set(_, 1));
          }
          W = {
            elasticities: B,
            elasticitiesOrthogonal: ae,
            thicknesses: Q,
            poissonsRatios: ce,
            shearModuli: ne
          };
          for (let _ = 0; _ < x.length; _++) {
            const ee = x[_][0], fe = x[_][1];
            Math.abs(fe) < 1e-6 ? O.set(_, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ee - L) < l * 0.1 && O.set(_, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let _ = 0; _ < y.length; _++) {
            if (!ue[_]) continue;
            const ee = y[_], fe = x[ee[0]], Ae = x[ee[1]], Ce = x[ee[2]], Ke = Math.abs((Ae[0] - fe[0]) * (Ce[1] - fe[1]) - (Ce[0] - fe[0]) * (Ae[1] - fe[1])) / 2, Ze = -d * Ke / 3;
            for (const C of ee) {
              const D = H.get(C) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              D[1] += Ze, H.set(C, D);
            }
          }
          if (M > 0) {
            const _ = [];
            for (let ee = 0; ee < x.length; ee++) {
              const fe = x[ee][0], Ae = x[ee][1];
              Math.abs(Ae - P) < l * 0.1 && fe > o - 1e-6 && _.push({
                idx: ee,
                x: fe
              });
            }
            _.sort((ee, fe) => ee.x - fe.x);
            for (let ee = 0; ee < _.length; ee++) {
              let fe = l;
              ee > 0 && ee < _.length - 1 ? fe = (_[ee + 1].x - _[ee - 1].x) / 2 : ee === 0 && _.length > 1 ? fe = (_[1].x - _[0].x) / 2 : ee === _.length - 1 && _.length > 1 && (fe = (_[ee].x - _[ee - 1].x) / 2);
              const Ae = -M * fe, Ce = H.get(_[ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ce[1] += Ae, H.set(_[ee].idx, Ce);
            }
          }
        }
      }
      if (S === 3) {
        const L = Ye({
          points: A,
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
          maxMeshSize: l
        });
        x = L.nodes, y = L.elements;
        for (let J = 0; J < x.length; J++) Math.abs(x[J][1]) < 1e-6 && O.set(J, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = s + e, z = Math.min(h, e), q = P - z, X = [];
        for (let J = 0; J < x.length; J++) {
          const B = x[J][0], ae = x[J][1];
          Math.abs(B - o) < l * 0.6 && ae >= s - 1e-6 && X.push({
            idx: J,
            y: ae
          });
        }
        X.sort((J, B) => J.y - B.y);
        for (let J = 0; J < X.length; J++) {
          const { idx: B, y: ae } = X[J], Q = Math.max(0, P - ae);
          if (Q <= 0 || ae < q - 1e-6) continue;
          const ce = Math.min(Q, z), ne = f * ce;
          let ue = l;
          J > 0 && J < X.length - 1 ? ue = (X[J + 1].y - X[J - 1].y) / 2 : J === 0 && X.length > 1 ? ue = (X[1].y - X[0].y) / 2 : J === X.length - 1 && X.length > 1 && (ue = (X[J].y - X[J - 1].y) / 2);
          const _ = ne * ue;
          Math.abs(_) > 1e-10 && H.set(B, [
            _,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        W = {
          elasticities: new Map(y.map((J, B) => [
            B,
            r
          ])),
          elasticitiesOrthogonal: new Map(y.map((J, B) => [
            B,
            r
          ])),
          thicknesses: new Map(y.map((J, B) => [
            B,
            1
          ])),
          poissonsRatios: new Map(y.map((J, B) => [
            B,
            a
          ])),
          shearModuli: new Map(y.map((J, B) => [
            B,
            u
          ]))
        };
      }
      const V = {
        supports: O,
        loads: H
      }, R = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const L = ct(x, y, V, W), P = y.filter((Q) => Q.length === 3), z = {};
        for (const Q of Object.keys(W)) {
          const ce = W[Q];
          if (ce && ce instanceof Map) {
            const ne = /* @__PURE__ */ new Map();
            let ue = 0;
            for (let _ = 0; _ < y.length; _++) y[_].length === 3 && (ce.has(_) && ne.set(ue, ce.get(_)), ue++);
            z[Q] = ne;
          }
        }
        const q = rt(x, P, z, L), X = x.map((Q) => [
          Q[0],
          0,
          Q[1]
        ]);
        if (t.nodes.val = X, t.elements.val = P, L && L.deformations) {
          const Q = /* @__PURE__ */ new Map();
          L.deformations.forEach((ce, ne) => {
            Q.set(ne, [
              ce[0],
              ce[2],
              ce[1],
              ce[3],
              ce[5],
              ce[4]
            ]);
          }), t.deformOutputs && (t.deformOutputs.val = {
            deformations: Q
          });
        }
        const J = /* @__PURE__ */ new Map();
        O.forEach((Q, ce) => J.set(ce, Q));
        const B = /* @__PURE__ */ new Map();
        H.forEach((Q, ce) => B.set(ce, [
          Q[0],
          Q[2],
          Q[1],
          Q[3],
          Q[5],
          Q[4]
        ])), t.nodeInputs && (t.nodeInputs.val = {
          supports: J,
          loads: B
        }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs && (t.analyzeOutputs.val = {});
        let ae = 0;
        L && L.deformations && L.deformations.forEach((Q) => {
          const ce = Math.sqrt(Q[0] * Q[0] + Q[1] * Q[1] + Q[2] * Q[2]);
          ae = Math.max(ae, ce);
        }), console.log(`Muro Contencion [${R[S]}]: ${x.length} nodos, ${y.length} triangulos`), console.log(`  H=${e}, B=${n}, tw=${o}, tb=${s}, Ka=${m}, gamma=${d}, qs=${M}`), S === 1 && console.log(`  Es=${p}, nus=${i}`), S === 2 && console.log(`  Es=${p}, nus=${i}, kn=${k}, ks=${b}`), S === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${ae.toExponential(4)}`);
      } catch (L) {
        console.warn("Muro Contencion failed:", L.message);
      }
      setTimeout(() => Pe(), 50), de();
    }
    function Dt() {
      const e = w("Lx") || 2, n = w("Ly") || 2, o = w("t") || 0.5, s = Math.round(w("nx") || 16), l = Math.round(w("ny") || 16), r = w("E") || 25e6, a = w("nu") || 0.2, u = w("P") || -500, d = w("colA") || 0.4, m = w("ks") || 2e4, p = e / s, i = n / l, v = [];
      for (let z = 0; z <= l; z++) for (let q = 0; q <= s; q++) {
        const X = z * (s + 1) + q;
        let J = p, B = i;
        (q === 0 || q === s) && (J = p / 2), (z === 0 || z === l) && (B = i / 2);
        const ae = m * J * B;
        v.push({
          node: X,
          dof: 0,
          k: ae
        });
      }
      const b = {
        1: 2,
        2: 1,
        3: 0
      }[ye] ?? 1, f = d / 2, h = e / 2, M = n / 2;
      let S = 0;
      for (let z = 0; z <= l; z++) for (let q = 0; q <= s; q++) {
        const X = q * p, J = z * i;
        Math.abs(X - h) <= f + 1e-6 && Math.abs(J - M) <= f + 1e-6 && S++;
      }
      const E = [], T = u / Math.max(S, 1);
      for (let z = 0; z <= l; z++) for (let q = 0; q <= s; q++) {
        const X = q * p, J = z * i;
        Math.abs(X - h) <= f + 1e-6 && Math.abs(J - M) <= f + 1e-6 && E.push({
          node: z * (s + 1) + q,
          dof: 0,
          value: T
        });
      }
      console.log(`Zapata Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][b]}]: ${e}x${n}m, ${s}x${l} elem, P=${u}, ks=${m}, col nodes=${S}`);
      const A = performance.now(), x = Rt({
        E: r,
        nu: a,
        thickness: o,
        meshLx: e,
        meshLy: n,
        meshNx: s,
        meshNy: l,
        bcType: "none",
        pressure: 0,
        theoryType: b,
        springs: v,
        pointLoads: E
      }), y = performance.now() - A;
      console.log(`Solved in ${y.toFixed(1)} ms, w_max = ${x.maxW.toExponential(4)}`);
      const O = x.nodeResults.map((z) => [
        z.x,
        z.y,
        0
      ]), H = x.elementResults.map((z) => [
        ...z.nodes
      ]);
      t.nodes.val = O, t.elements.val = H;
      const W = /* @__PURE__ */ new Map();
      x.nodeResults.forEach((z, q) => {
        W.set(q, [
          0,
          0,
          z.w,
          z.bx,
          z.by,
          0
        ]);
      }), t.deformOutputs && (t.deformOutputs.val = {
        deformations: W
      });
      const V = /* @__PURE__ */ new Map();
      x.nodeResults.forEach((z, q) => {
        Math.abs(z.x - h) <= f + 1e-6 && Math.abs(z.y - M) <= f + 1e-6 && V.set(q, [
          false,
          false,
          true,
          false,
          false,
          false
        ]);
      });
      const R = /* @__PURE__ */ new Map(), L = u / Math.max(S, 1);
      if (x.nodeResults.forEach((z, q) => {
        Math.abs(z.x - h) <= f + 1e-6 && Math.abs(z.y - M) <= f + 1e-6 && R.set(q, [
          0,
          0,
          L,
          0,
          0,
          0
        ]);
      }), t.nodeInputs && (t.nodeInputs.val = {
        supports: V,
        loads: R
      }), t.elementInputs && (t.elementInputs.val = {}), t.analyzeOutputs) {
        const z = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
        x.elementResults.forEach((J, B) => {
          z.set(B, [
            J.Mxx,
            J.Mxx,
            J.Mxx
          ]), q.set(B, [
            J.Myy,
            J.Myy,
            J.Myy
          ]), X.set(B, [
            J.Mxy,
            J.Mxy,
            J.Mxy
          ]);
        }), t.analyzeOutputs.val = {
          bendingXX: z,
          bendingYY: q,
          bendingXY: X
        };
      }
      const P = Ie();
      P && (P.settings.shellResults.val = "bendingXX"), setTimeout(() => Pe(), 50), de();
    }
    function Xt() {
      const e = w("Lx") || 4, n = w("Ly") || 3, o = w("hx") || 1, s = w("hy") || 0.8, l = w("meshSize") || 0.15, r = w("t") || 0.2, a = w("E") || 3e7, u = w("nu") || 0.2, d = a / (2 * (1 + u)), m = w("q") || -10, { nodes: p, elements: i, boundaryIndices: v } = Ye({
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
            n,
            0
          ],
          [
            0,
            n,
            0
          ]
        ],
        polygon: [
          0,
          1,
          2,
          3
        ],
        maxMeshSize: l
      }), k = e / 2, b = n / 2, f = o / 2, h = s / 2, M = i.filter((x) => {
        const y = (p[x[0]][0] + p[x[1]][0] + p[x[2]][0]) / 3, O = (p[x[0]][1] + p[x[1]][1] + p[x[2]][1]) / 3;
        return !(y > k - f && y < k + f && O > b - h && O < b + h);
      }), S = p, E = /* @__PURE__ */ new Map();
      for (let x = 0; x < S.length; x++) {
        const y = S[x][0], O = S[x][1];
        (y < 1e-6 || y > e - 1e-6 || O < 1e-6 || O > n - 1e-6) && E.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const T = /* @__PURE__ */ new Map();
      for (let x = 0; x < M.length; x++) {
        const y = M[x], O = S[y[0]], H = S[y[1]], W = S[y[2]], V = 0.5 * Math.abs((H[0] - O[0]) * (W[1] - O[1]) - (W[0] - O[0]) * (H[1] - O[1])), R = m * V / 3;
        for (const L of y) {
          const P = T.get(L) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          P[2] += R, T.set(L, P);
        }
      }
      const A = {
        elasticities: new Map(M.map((x, y) => [
          y,
          a
        ])),
        elasticitiesOrthogonal: new Map(M.map((x, y) => [
          y,
          a
        ])),
        thicknesses: new Map(M.map((x, y) => [
          y,
          r
        ])),
        poissonsRatios: new Map(M.map((x, y) => [
          y,
          u
        ])),
        shearModuli: new Map(M.map((x, y) => [
          y,
          d
        ]))
      };
      try {
        const x = ct(S, M, {
          supports: E,
          loads: T
        }, A), y = rt(S, M, A, x);
        t.nodes.val = S, t.elements.val = M, x && t.deformOutputs && (t.deformOutputs.val = x), t.nodeInputs && (t.nodeInputs.val = {
          supports: E,
          loads: T
        }), t.elementInputs && (t.elementInputs.val = {}), y && t.analyzeOutputs && (t.analyzeOutputs.val = y);
        let O = 0;
        x && x.deformations && x.deformations.forEach((H) => {
          const W = Math.sqrt(H[0] * H[0] + H[1] * H[1] + H[2] * H[2]);
          O = Math.max(O, W);
        }), console.log(`Placa con Orificio: ${S.length} nodos, ${M.length} triangulos`), console.log(`  Lx=${e}, Ly=${n}, hueco=${o}x${s}, t=${r}`), console.log(`  max|u| = ${O.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa con Orificio failed:", x.message);
      }
      setTimeout(() => Pe(), 50), de();
    }
    function Gt() {
      const e = w("H") || 6, n = w("angle") || 45, o = w("bTop") || 3, s = w("bBot") || 3, l = w("meshSize") || 2, r = w("E") || 5e4, a = w("nu") || 0.3, u = w("gamma") || 18, d = w("c") || 15, m = w("phi") || 30, p = w("qs") || 0, i = e / Math.tan(n * Math.PI / 180), v = s + i + o, k = e, b = [
        [
          0,
          -k,
          0
        ],
        [
          v,
          -k,
          0
        ],
        [
          v,
          e,
          0
        ],
        [
          s + i,
          e,
          0
        ],
        [
          s,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ], { nodes: f, elements: h } = Ye({
        points: b,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: l
      }), M = f, S = [], E = /* @__PURE__ */ new Map();
      for (let A = 0; A < M.length; A++) {
        const x = M[A][0], y = M[A][1];
        Math.abs(y + k) < 1e-6 ? (S.push({
          node: A,
          fixX: true,
          fixY: true
        }), E.set(A, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - v) < 1e-6) && (S.push({
          node: A,
          fixX: true,
          fixY: false
        }), E.set(A, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const T = e - l * 0.3;
      try {
        const A = M.map((L) => [
          L[0],
          L[1]
        ]), x = h.map((L) => [
          L[0],
          L[1],
          L[2]
        ]), y = Bn({
          nodes: A,
          elements: x,
          E: r,
          nu: a,
          gamma: u,
          c: d,
          phi: m,
          thickness: 1,
          supports: S,
          surcharge: p,
          surfaceYThreshold: T
        }), O = M.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        t.nodes.val = O, t.elements.val = h;
        const H = /* @__PURE__ */ new Map();
        for (let L = 0; L < y.displacements.length; L++) {
          const [P, z] = y.displacements[L];
          H.set(L, [
            P,
            0,
            z,
            0,
            0,
            0
          ]);
        }
        t.deformOutputs && (t.deformOutputs.val = {
          deformations: H
        }), t.nodeInputs && (t.nodeInputs.val = {
          supports: E
        }), t.elementInputs && (t.elementInputs.val = {});
        const W = /* @__PURE__ */ new Map();
        for (let L = 0; L < y.plasticStrain.length; L++) {
          const P = y.plasticStrain[L];
          W.set(L, [
            P,
            P,
            P
          ]);
        }
        t.analyzeOutputs && (t.analyzeOutputs.val = {
          membraneXX: W
        });
        let V = 0;
        for (const [L, P] of y.displacements) {
          const z = Math.sqrt(L * L + P * P);
          V = Math.max(V, z);
        }
        let R = 0;
        for (const L of y.plasticStrain) R = Math.max(R, L);
        console.log(`Talud SRM: ${M.length} nodos, ${h.length} triangulos`), console.log(`  H=${e}, angulo=${n}\xB0, c=${d} kPa, \u03C6=${m}\xB0, \u03B3=${u}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${y.fos.toFixed(3)}`), console.log(`  max|u| = ${V.toExponential(4)}`), console.log(`  max \u03B5_pl = ${R.toExponential(4)}`), y.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : y.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (A) {
        console.warn("Talud SRM failed:", A.message);
      }
      setTimeout(() => Pe(), 50), de();
    }
    let We = null, qe = null;
    function un() {
      let e = document.getElementById("sections");
      return e || (e = document.createElement("div"), e.id = "sections", e.style.cssText = "position:absolute;bottom:0;right:316px;width:280px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(e)), e;
    }
    function Be(e) {
      const n = Ge.find((o) => o.id === G);
      return e / n.toM;
    }
    function Ve(e) {
      const n = Ge.find((o) => o.id === G);
      return e * n.toM;
    }
    function kt(e) {
      const n = ht.find((s) => s.id === Y), o = Ge.find((s) => s.id === G);
      return e / (n.toKN / (o.toM * o.toM));
    }
    function gn(e) {
      const n = ht.find((s) => s.id === Y), o = Ge.find((s) => s.id === G);
      return e * (n.toKN / (o.toM * o.toM));
    }
    function xn() {
      switch (Ge.find((n) => n.id === G).id) {
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
    function vn() {
      const e = kt(21e3), n = kt(6e4), o = Math.max(1, Math.round((n - e) / 40));
      return [
        Math.round(e),
        Math.round(n),
        o
      ];
    }
    function st() {
      var _a;
      if (qe) {
        try {
          qe.dispose();
        } catch {
        }
        qe = null;
      }
      const e = document.getElementById("sections");
      if (e && (e.innerHTML = ""), N !== "edificio" && N !== "frame") {
        e && (e.style.display = "none");
        return;
      }
      const n = un();
      if (!n) return;
      n.style.display = "";
      const o = K, s = Math.round(((_a = te.nPisos) == null ? void 0 : _a.val) ?? 3), l = xn(), r = vn(), a = Z.length || 1, u = oe.length || 1;
      for (; le.perFloor.length < s; ) {
        const i = le.perFloor.length > 0 ? JSON.parse(JSON.stringify(le.perFloor[le.perFloor.length - 1])) : nt(a, u);
        le.perFloor.push(i);
      }
      le.perFloor.length > s && (le.perFloor.length = s);
      for (const i of le.perFloor) {
        for (; i.vigasX.length < a; ) i.vigasX.push(i.vigasX.length > 0 ? {
          ...i.vigasX[i.vigasX.length - 1]
        } : Oe());
        for (i.vigasX.length > a && (i.vigasX.length = a); i.vigasY.length < u; ) i.vigasY.push(i.vigasY.length > 0 ? {
          ...i.vigasY[i.vigasY.length - 1]
        } : Oe());
        i.vigasY.length > u && (i.vigasY.length = u);
      }
      qe = new At({
        title: `Sections (${o.label})`,
        container: n
      });
      const d = {
        material: le.material
      };
      if (qe.addBinding(d, "material", {
        label: "Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (i) => {
        le.material = i.value, st(), se();
      }), le.material === 0) {
        const i = {
          forma: le.colShape
        };
        qe.addBinding(i, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (k) => {
          le.colShape = k.value, st(), se();
        });
        const v = {
          fc: +kt(le.fc).toFixed(1)
        };
        qe.addBinding(v, "fc", {
          min: r[0],
          max: r[1],
          step: r[2],
          label: `f'c (${o.stress})`
        }), qe.on("change", (k) => {
          var _a2;
          ((_a2 = k.target) == null ? void 0 : _a2.key) === "fc" && (le.fc = gn(k.value), se());
        });
      }
      if (qe.addBlade({
        view: "separator"
      }), le.material === 1 && qe) {
        const i = {
          colType: le.steelColType,
          vigaType: le.steelVigaType
        };
        qe.addBinding(i, "colType", {
          label: "Col tipo",
          options: {
            W: 0,
            HSS: 1
          }
        }).on("change", (v) => {
          le.steelColType = v.value, st(), se();
        }), qe.addBinding(i, "vigaType", {
          label: "Viga tipo",
          options: {
            W: 0,
            HSS: 1
          }
        }).on("change", (v) => {
          le.steelVigaType = v.value, st(), se();
        });
      }
      const m = le.steelColType === 0 ? pn() : dn(), p = le.steelVigaType === 0 ? pn() : dn();
      for (let i = 0; i < s; i++) {
        const v = le.perFloor[i], k = qe.addFolder({
          title: `Piso ${i + 1}`,
          expanded: i < 2
        });
        if (le.material === 0) if (le.colShape === 1) {
          const b = {
            dCol: +Be(v.dCol).toFixed(2)
          };
          k.addBinding(b, "dCol", {
            min: l[0],
            max: l[1],
            step: l[2],
            label: "d col"
          }), k.on("change", (f) => {
            var _a2;
            ((_a2 = f.target) == null ? void 0 : _a2.key) === "dCol" && (v.dCol = Ve(f.value), se());
          });
        } else {
          const b = {
            bCol: +Be(v.bCol).toFixed(2),
            hCol: +Be(v.hCol).toFixed(2)
          };
          k.addBinding(b, "bCol", {
            min: l[0],
            max: l[1],
            step: l[2],
            label: "b col"
          }), k.addBinding(b, "hCol", {
            min: l[0],
            max: l[1],
            step: l[2],
            label: "h col"
          }), k.on("change", (f) => {
            var _a2, _b;
            ((_a2 = f.target) == null ? void 0 : _a2.key) === "bCol" && (v.bCol = Ve(f.value), se()), ((_b = f.target) == null ? void 0 : _b.key) === "hCol" && (v.hCol = Ve(f.value), se());
          });
        }
        else {
          const b = {
            col: v.colProfileIdx
          };
          k.addBinding(b, "col", {
            label: "Columna",
            options: m
          }).on("change", (f) => {
            v.colProfileIdx = f.value, se();
          });
        }
        if (v.vigasX.length > 0) {
          const b = k.addFolder({
            title: `Vigas X (${v.vigasX.length})`,
            expanded: false
          });
          if (le.material === 0) {
            for (let f = 0; f < v.vigasX.length; f++) {
              const h = v.vigasX[f], M = {};
              M[`bx${f}`] = +Be(h.b).toFixed(2), M[`hx${f}`] = +Be(h.h).toFixed(2), b.addBinding(M, `bx${f}`, {
                min: l[0],
                max: l[1],
                step: l[2],
                label: `b svx${f + 1}`
              }), b.addBinding(M, `hx${f}`, {
                min: l[0],
                max: l[1],
                step: l[2],
                label: `h svx${f + 1}`
              });
            }
            b.on("change", (f) => {
              var _a2;
              const h = (_a2 = f.target) == null ? void 0 : _a2.key, M = h == null ? void 0 : h.match(/^bx(\d+)$/), S = h == null ? void 0 : h.match(/^hx(\d+)$/);
              M && (v.vigasX[parseInt(M[1])].b = Ve(f.value), se()), S && (v.vigasX[parseInt(S[1])].h = Ve(f.value), se());
            });
          } else {
            for (let f = 0; f < v.vigasX.length; f++) {
              const h = v.vigasX[f], M = {};
              M[`px${f}`] = h.profileIdx ?? 0, b.addBinding(M, `px${f}`, {
                label: `svx${f + 1}`,
                options: p
              });
            }
            b.on("change", (f) => {
              var _a2, _b;
              const M = (_b = (_a2 = f.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^px(\d+)$/);
              M && (v.vigasX[parseInt(M[1])].profileIdx = f.value, se());
            });
          }
        }
        if (v.vigasY.length > 0) {
          const b = k.addFolder({
            title: `Vigas Y (${v.vigasY.length})`,
            expanded: false
          });
          if (le.material === 0) {
            for (let f = 0; f < v.vigasY.length; f++) {
              const h = v.vigasY[f], M = {};
              M[`by${f}`] = +Be(h.b).toFixed(2), M[`hy${f}`] = +Be(h.h).toFixed(2), b.addBinding(M, `by${f}`, {
                min: l[0],
                max: l[1],
                step: l[2],
                label: `b svy${f + 1}`
              }), b.addBinding(M, `hy${f}`, {
                min: l[0],
                max: l[1],
                step: l[2],
                label: `h svy${f + 1}`
              });
            }
            b.on("change", (f) => {
              var _a2;
              const h = (_a2 = f.target) == null ? void 0 : _a2.key, M = h == null ? void 0 : h.match(/^by(\d+)$/), S = h == null ? void 0 : h.match(/^hy(\d+)$/);
              M && (v.vigasY[parseInt(M[1])].b = Ve(f.value), se()), S && (v.vigasY[parseInt(S[1])].h = Ve(f.value), se());
            });
          } else {
            for (let f = 0; f < v.vigasY.length; f++) {
              const h = v.vigasY[f], M = {};
              M[`py${f}`] = h.profileIdx ?? 0, b.addBinding(M, `py${f}`, {
                label: `svy${f + 1}`,
                options: p
              });
            }
            b.on("change", (f) => {
              var _a2, _b;
              const M = (_b = (_a2 = f.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^py(\d+)$/);
              M && (v.vigasY[parseInt(M[1])].profileIdx = f.value, se());
            });
          }
        }
      }
    }
    function Ne() {
      const e = document.getElementById("parameters");
      if (!e) return;
      if (ge || (ge = e.innerHTML), ie) {
        try {
          ie.dispose();
        } catch {
        }
        ie = null;
      }
      if (We) {
        try {
          We.dispose();
        } catch {
        }
        We = null;
      }
      e.innerHTML = "";
      const n = N.charAt(0).toUpperCase() + N.slice(1);
      ie = new At({
        title: `Parameters \u2014 ${n}`,
        container: e
      });
      const o = Ft()[N];
      if (o) {
        const l = {};
        for (const a of o) l[a.key] = te[a.key].val;
        for (const a of o) ie.addBinding(l, a.key, {
          min: te[a.key].min,
          max: te[a.key].max,
          step: te[a.key].step,
          label: te[a.key].label
        });
        const r = ie.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of o) {
          const u = {
            min: te[a.key].min,
            max: te[a.key].max
          };
          r.addBinding(u, "min", {
            label: `${a.key} min`,
            step: a.step
          }), r.addBinding(u, "max", {
            label: `${a.key} max`,
            step: a.step
          }), r.on("change", () => {
            te[a.key] && (te[a.key].min = u.min, te[a.key].max = u.max, te[a.key].val < u.min && (te[a.key].val = u.min), te[a.key].val > u.max && (te[a.key].val = u.max)), Ne(), se();
          });
        }
        ie.on("change", (a) => {
          var _a;
          const u = (_a = a.target) == null ? void 0 : _a.key;
          if (u && te[u]) {
            if (te[u].val = a.value, N === "edificio" && (u === "nVanosX" || u === "nVanosY" || u === "nPisos")) {
              if (u === "nVanosX" || u === "nVanosY") {
                const d = Math.round(te.nVanosX.val), m = Math.round(te.nVanosY.val);
                for (; Z.length < d; ) Z.push(Z[Z.length - 1] ?? K.defaultSpan);
                for (Z.length > d && (Z.length = d); oe.length < m; ) oe.push(oe[oe.length - 1] ?? K.defaultSpan * 0.8);
                oe.length > m && (oe.length = m);
              }
              Ne();
            }
            se();
          }
        });
      }
      if (N === "edificio" && ie) {
        const l = K, r = ie.addFolder({
          title: `Luces X (${l.length})`,
          expanded: true
        }), a = {};
        for (let m = 0; m < Z.length; m++) a[`svx_${m + 1}`] = Z[m];
        for (let m = 0; m < Z.length; m++) r.addBinding(a, `svx_${m + 1}`, {
          min: l.spanRange[0],
          max: l.spanRange[1],
          step: l.spanRange[2],
          label: `svx${m + 1}`
        });
        r.on("change", (m) => {
          var _a, _b;
          const i = (_b = (_a = m.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
          i && (Z[parseInt(i[1]) - 1] = m.value, se());
        });
        const u = ie.addFolder({
          title: `Luces Y (${l.length})`,
          expanded: true
        }), d = {};
        for (let m = 0; m < oe.length; m++) d[`svy_${m + 1}`] = oe[m];
        for (let m = 0; m < oe.length; m++) u.addBinding(d, `svy_${m + 1}`, {
          min: l.spanRange[0],
          max: l.spanRange[1],
          step: l.spanRange[2],
          label: `svy${m + 1}`
        });
        u.on("change", (m) => {
          var _a, _b;
          const i = (_b = (_a = m.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
          i && (oe[parseInt(i[1]) - 1] = m.value, se());
        });
      }
      if (st(), ie) {
        ie.addBlade({
          view: "separator"
        });
        const l = bt()[N];
        if (l && l.length > 0) {
          const r = {};
          l.forEach((u, d) => {
            r[u.label] = d;
          });
          const a = {
            apoyo: Se
          };
          ie.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: r
          }).on("change", (u) => {
            Se = u.value, se();
          });
        }
        if (N === "placa-3q" || N === "placa-q4") {
          const r = {
            teoria: ye
          };
          ie.addBinding(r, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            ye = a.value, se();
          });
        }
      }
      const s = Ot()[N];
      if (s && s.length > 0) {
        We = new At({
          title: `Cargas Est\xE1ticas \u2014 ${n}`,
          container: e
        });
        const l = {};
        for (const a of s) l[a.key] = re[a.key].val;
        for (const a of s) We.addBinding(l, a.key, {
          min: re[a.key].min,
          max: re[a.key].max,
          step: re[a.key].step,
          label: re[a.key].label
        });
        const r = We.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of s) {
          const u = {
            min: re[a.key].min,
            max: re[a.key].max
          };
          r.addBinding(u, "min", {
            label: `${a.key} min`,
            step: a.step
          }), r.addBinding(u, "max", {
            label: `${a.key} max`,
            step: a.step
          }), r.on("change", () => {
            re[a.key] && (re[a.key].min = u.min, re[a.key].max = u.max, re[a.key].val < u.min && (re[a.key].val = u.min), re[a.key].val > u.max && (re[a.key].val = u.max)), Ne(), se();
          });
        }
        We.on("change", (a) => {
          var _a;
          const u = (_a = a.target) == null ? void 0 : _a.key;
          if (u && re[u]) {
            if (re[u].val = a.value, t.nodeInputs) {
              const d = t.nodeInputs.val;
              d.supports && (t.nodeInputs.val = {
                supports: d.supports
              });
            }
            setTimeout(() => zt(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (l, r) => {
          if (te[l]) te[l].val = r, se(), Ne();
          else if (re[l]) {
            if (re[l].val = r, t.nodeInputs) {
              const a = t.nodeInputs.val;
              a.supports && (t.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              zt(), Ne();
            }, 30);
          }
        },
        getParams: () => {
          const l = {};
          for (const r in te) l[r] = te[r].val;
          for (const r in re) l[r] = re[r].val;
          return l;
        },
        setGenerator: be
      };
    }
    function bn() {
      if (ie) {
        try {
          ie.dispose();
        } catch {
        }
        ie = null;
      }
      if (We) {
        try {
          We.dispose();
        } catch {
        }
        We = null;
      }
      const e = document.getElementById("parameters");
      e && ge && (e.innerHTML = ge);
    }
    const U = document.createElement("div");
    U.id = "cad3d-panel";
    const Ut = document.createElement("style");
    Ut.textContent = `
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
  `, document.head.appendChild(Ut), Tn() === "light" && document.documentElement.classList.add("awatif-light"), Rn((e) => {
      e === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), N && Pe(true);
    }), U.innerHTML = `
    <button class="toggle-btn-collapsed" id="cad3d-expand">FEM Studio</button>
    <h3>FEM Studio <span style="font-size:10px;color:var(--cad-info);margin-left:6px" id="cad3d-info">0n 0e</span><button class="toggle-btn" id="cad3d-toggle">_</button></h3>
    <div class="panel-body">
      <div class="btn-row">
        <button data-ex="truss">Cercha</button>
        <button data-ex="beams">Portico</button>
        <button data-ex="3d">Torre</button>
        <button data-ex="galpon">Galpon</button>
        <button data-ex="edificio">Edificio</button>
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
        <button data-ex="muro-contencion">Muro</button>
        <button data-ex="zapata">Zapata</button>
        <button data-ex="placa-orificios">Placa Orif.</button>
        <button data-ex="talud">Talud</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button data-view="3d" class="view-active">3D</button>
        <button data-view="plan">Plan</button>
        <button data-view="elevX">EX</button>
        <button data-view="elevY">EY</button>
        <button id="cad3d-inspect">Inspect</button>
        <button id="cad3d-export" title="Exportar coordenadas y datos del modelo">\u{1F4CB} Export</button>
        <button id="cad3d-force-unit" class="active" title="Unidad de fuerza">kN</button>
        <button id="cad3d-length-unit" class="active" title="Unidad de longitud">m</button>
        <button id="cad3d-btn-clear" style="margin-left:auto">Clear</button>
      </div>
      <div class="btn-row" style="margin-top:4px">
        <button id="cad3d-modal" title="An\xE1lisis modal (frecuencias y modos)">\u26A1 Modal</button>
        <button id="cad3d-mode-prev" style="display:none" title="Modo anterior">\u25C0</button>
        <button id="cad3d-mode-next" style="display:none" title="Modo siguiente">\u25B6</button>
        <input id="cad3d-modal-scale" type="number" min="0.1" max="100" step="0.5" value="5" style="display:none;width:40px;font-size:10px;padding:1px 3px;background:var(--cad-bg);color:var(--cad-heading);border:1px solid var(--cad-border);border-radius:3px;text-align:center" title="Escala de animacion (% del modelo)" />
      </div>
      <div id="cad3d-mode-label" style="display:none;color:var(--cad-heading);font-size:10px;line-height:16px;padding:2px 4px;white-space:nowrap;overflow-x:auto">Modo 1</div>
      <input class="cmd-input" id="cad3d-cmd" placeholder="cad.galpon(12,20,6,3)" />
    </div>
  `;
    let ve = null;
    function hn() {
      var _a, _b, _c, _d, _e2, _f;
      const e = t.nodes.val, n = t.elements.val, o = (_a = t.nodeInputs) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val, l = G, r = Y, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${N || "custom"}`), a.push(`# Units: ${r}, ${l}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${e.length})`), a.push("# idx     X          Y          Z"), e.forEach((m, p) => {
        a.push(`  ${String(p).padStart(4)}  ${m[0].toFixed(4).padStart(10)}  ${m[1].toFixed(4).padStart(10)}  ${m[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${n.length})`), a.push("# idx    nodeI  nodeJ"), n.forEach((m, p) => {
        const i = m.map((v) => String(v).padStart(6)).join("");
        a.push(`  ${String(p).padStart(4)}  ${i}`);
      }), a.push(""), (o == null ? void 0 : o.supports) && o.supports.size > 0 && (a.push(`## SUPPORTS (${o.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), o.supports.forEach((m, p) => {
        const i = m.map((v) => v ? "  1" : "  0").join("");
        a.push(`  ${String(p).padStart(4)} ${i}`);
      }), a.push("")), (o == null ? void 0 : o.loads) && o.loads.size > 0 && (a.push(`## LOADS (${o.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), o.loads.forEach((m, p) => {
        const i = m.map((v) => v.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(p).padStart(4)}  ${i}`);
      }), a.push("")), s) {
        a.push("## ELEMENT PROPERTIES");
        const m = [
          {
            name: "E",
            map: s.elasticities
          },
          {
            name: "A",
            map: s.areas
          },
          {
            name: "Iz",
            map: s.momentsOfInertiaZ
          },
          {
            name: "Iy",
            map: s.momentsOfInertiaY
          },
          {
            name: "G",
            map: s.shearModuli
          },
          {
            name: "J",
            map: s.torsionalConstants
          },
          {
            name: "rho",
            map: s.densities
          }
        ], p = "# elem  " + m.map((i) => i.name.padStart(12)).join(" ");
        a.push(p);
        for (let i = 0; i < n.length; i++) {
          const v = m.map((k) => {
            var _a2;
            const b = (_a2 = k.map) == null ? void 0 : _a2.get(i);
            return b !== void 0 ? b.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(i).padStart(4)}  ${v}`);
        }
        a.push("");
      }
      const u = (_d = (_c = t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      u && u.size > 0 && (a.push(`## DISPLACEMENTS (${u.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), u.forEach((m, p) => {
        const i = m.map((v) => v.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(p).padStart(4)}  ${i}`);
      }), a.push(""));
      const d = (_f = (_e2 = t.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (d && d.size > 0 && (a.push(`## REACTIONS (${d.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), d.forEach((m, p) => {
        const i = m.map((v) => v.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(p).padStart(4)}  ${i}`);
      }), a.push("")), N) {
        a.push("## CLI COMMAND");
        const m = Object.entries(te).map(([p, i]) => `${p}=${i.val}`).join(" ");
        a.push(`cad.${N === "edificio" ? "building" : N}(${m})`);
      }
      return a.join(`
`);
    }
    let ot = false;
    function yn() {
      var _a, _b, _c, _d;
      if (ve) {
        ve.remove(), ve = null, ot = false;
        return;
      }
      const e = hn();
      ve = document.createElement("div"), ve.id = "export-overlay", ve.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, ve.innerHTML = `
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
    `, document.body.appendChild(ve), (_a = ve.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        ve == null ? void 0 : ve.remove(), ve = null, ot = false;
      }), (_b = ve.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const n = ve.querySelector("#export-body"), o = ve.querySelector("#export-minimize");
        ot = !ot, ot ? (n.style.display = "none", o.textContent = "\u25A2", o.title = "Restaurar", ve.style.width = "auto") : (n.style.display = "flex", o.textContent = "\u25AC", o.title = "Minimizar", ve.style.width = "720px");
      }), (_c = ve.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const n = ve.querySelector("#export-text");
        navigator.clipboard.writeText(n.value).then(() => {
          const o = ve.querySelector("#export-status");
          o.textContent = "\u2713 Copiado al clipboard", setTimeout(() => o.textContent = "", 2e3);
        });
      }), (_d = ve.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e2, _f;
        const n = t.nodes.val, o = t.elements.val, s = (_a2 = t.nodeInputs) == null ? void 0 : _a2.val, l = (_b2 = t.elementInputs) == null ? void 0 : _b2.val, r = {
          generator: N || "custom",
          units: {
            force: Y,
            length: G
          },
          nodes: n.map((p, i) => ({
            id: i,
            x: p[0],
            y: p[1],
            z: p[2]
          })),
          elements: o.map((p, i) => ({
            id: i,
            nodes: p
          }))
        };
        (s == null ? void 0 : s.supports) && (r.supports = [], s.supports.forEach((p, i) => r.supports.push({
          node: i,
          dofs: p
        }))), (s == null ? void 0 : s.loads) && (r.loads = [], s.loads.forEach((p, i) => r.loads.push({
          node: i,
          forces: p
        }))), l && (r.properties = {}, l.elasticities && (r.properties.E = Object.fromEntries(l.elasticities)), l.areas && (r.properties.A = Object.fromEntries(l.areas)), l.momentsOfInertiaZ && (r.properties.Iz = Object.fromEntries(l.momentsOfInertiaZ)), l.momentsOfInertiaY && (r.properties.Iy = Object.fromEntries(l.momentsOfInertiaY)), l.shearModuli && (r.properties.G = Object.fromEntries(l.shearModuli)), l.torsionalConstants && (r.properties.J = Object.fromEntries(l.torsionalConstants)));
        const a = (_d2 = (_c2 = t.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (r.displacements = {}, a.forEach((p, i) => r.displacements[i] = p));
        const u = (_f = (_e2 = t.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        u && u.size > 0 && (r.reactions = {}, u.forEach((p, i) => r.reactions[i] = p));
        const d = ve.querySelector("#export-text");
        d.value = JSON.stringify(r, null, 2);
        const m = ve.querySelector("#export-status");
        m.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function de() {
      var _a, _b, _c, _d, _e2, _f;
      const e = U.querySelector("#cad3d-info");
      if (e) {
        const n = t.nodes.val.length, o = t.elements.val.length, s = ((_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = t.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        e.textContent = `${n}n ${o}e ${s}s ${l}l`;
      }
    }
    function wt() {
      var _a;
      if (!Re || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, n = t.elements.val, o = t.nodeInputs.val, s = t.elementInputs.val;
      if (!(e.length === 0 || n.length === 0) && !(!o.supports || o.supports.size === 0) && !(!s.densities || s.densities.size === 0)) try {
        const l = Math.min(12, e.length * 6 - o.supports.size * 6);
        if (l <= 0) return;
        const r = Yn(e, n, o, s, Math.min(l, 12));
        if (r.frequencies && r.frequencies.length > 0) {
          xe = r, He = e.map((m) => [
            ...m
          ]), ke = 0;
          const { extent: a } = _e(), u = (_a = r.modeShapes) == null ? void 0 : _a[0];
          if (u) {
            let m = 0;
            for (let p = 0; p < e.length; p++) {
              const i = u[p * 6] || 0, v = u[p * 6 + 1] || 0, k = u[p * 6 + 2] || 0;
              m = Math.max(m, Math.sqrt(i * i + v * v + k * k));
            }
            pt = m > 1e-12 ? a * 0.05 / m : 1;
          }
          const d = `${N} \u2014 ${e.length}n ${n.length}e`;
          at.render(r, {
            title: d
          }), at.div.style.display = "", lt(), console.log(`Modal: ${r.frequencies.length} modos. f\u2081 = ${r.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (l) {
        console.warn("Modal analysis failed:", l.message), xe = null;
      }
    }
    function St() {
      je && (cancelAnimationFrame(je), je = 0), He.length > 0 && (t.nodes.val = He.map((e) => [
        ...e
      ])), at.div.style.display = "none", xe = null;
    }
    function lt() {
      var _a;
      if (je && cancelAnimationFrame(je), !(xe == null ? void 0 : xe.modeShapes) || !He.length) return;
      const e = xe.modeShapes[ke];
      if (!e) return;
      const n = ((_a = xe.frequencies) == null ? void 0 : _a[ke]) || 1, o = Math.max(0.5, Math.min(3, n * 0.1)), s = performance.now(), l = He.length, r = t.elements.rawVal, { extent: a } = _e(), u = U.querySelector("#cad3d-modal-scale"), d = u && parseFloat(u.value) || 5;
      let m = 0;
      for (let S = 0; S < l; S++) {
        const E = e[S * 6] || 0, T = e[S * 6 + 1] || 0, A = e[S * 6 + 2] || 0;
        m = Math.max(m, Math.sqrt(E * E + T * T + A * A));
      }
      const p = m > 1e-12 ? a * d / 100 / m : 1, i = Ie();
      if (!i) return;
      let v = null, k = null;
      i.scene.traverse((S) => {
        !v && S.isPoints && S.geometry && (v = S), !k && S.isLineSegments && S.geometry && !S.name && (k = S);
      });
      const b = new Float32Array(l * 3), f = [];
      for (const S of r) if (S.length === 2) f.push([
        S[0],
        S[1]
      ]);
      else for (let E = 0; E < S.length; E++) f.push([
        S[E],
        S[(E + 1) % S.length]
      ]);
      const h = new Float32Array(f.length * 6);
      function M() {
        const S = (performance.now() - s) / 1e3, E = Math.sin(2 * Math.PI * o * S) * p;
        for (let T = 0; T < l; T++) {
          const A = He[T];
          b[T * 3] = A[0] + (e[T * 6] || 0) * E, b[T * 3 + 1] = A[1] + (e[T * 6 + 1] || 0) * E, b[T * 3 + 2] = A[2] + (e[T * 6 + 2] || 0) * E;
        }
        if (v) {
          const T = v.geometry, A = T.getAttribute("position");
          A && A.array.length === b.length ? (A.array.set(b), A.needsUpdate = true) : T.setAttribute("position", new Tt(b.slice(), 3));
        }
        if (k) {
          for (let x = 0; x < f.length; x++) {
            const [y, O] = f[x];
            h[x * 6] = b[y * 3], h[x * 6 + 1] = b[y * 3 + 1], h[x * 6 + 2] = b[y * 3 + 2], h[x * 6 + 3] = b[O * 3], h[x * 6 + 4] = b[O * 3 + 1], h[x * 6 + 5] = b[O * 3 + 2];
          }
          const T = k.geometry, A = T.getAttribute("position");
          A && A.array.length === h.length ? (A.array.set(h), A.needsUpdate = true) : T.setAttribute("position", new Tt(h.slice(), 3));
        }
        i.render(), je = requestAnimationFrame(M);
      }
      je = requestAnimationFrame(M);
    }
    function zt() {
      if (!t.deformOutputs || !t.analyzeOutputs || !t.nodeInputs || !t.elementInputs) return;
      const e = t.nodes.val, n = t.elements.val;
      let o = t.nodeInputs.val;
      const s = t.elementInputs.val;
      if (!(e.length === 0 || n.length === 0) && !(!o.supports || o.supports.size === 0)) {
        if (!o.loads || o.loads.size === 0) {
          const l = w("CM") ?? 0, r = w("CV") ?? 0, a = l + r, u = w("Ex") ?? 0, d = w("Ey") ?? 0;
          if (a === 0 && u === 0 && d === 0) return;
          const m = /* @__PURE__ */ new Map(), p = [];
          for (let h = 0; h < e.length; h++) o.supports.has(h) || p.push(h);
          const i = (h) => Math.round(h * 1e3) / 1e3, v = /* @__PURE__ */ new Set();
          o.supports.forEach((h, M) => {
            v.add(`${i(e[M][0])},${i(e[M][1])}`);
          });
          const k = /* @__PURE__ */ new Set();
          for (const h of p) v.has(`${i(e[h][0])},${i(e[h][1])}`) && k.add(h);
          const b = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
          if (u !== 0 || d !== 0) {
            let h = -1 / 0, M = -1 / 0;
            for (const E of k) h = Math.max(h, i(e[E][0])), M = Math.max(M, i(e[E][1]));
            const S = /* @__PURE__ */ new Map();
            for (const E of k) {
              const T = i(e[E][2]);
              S.has(T) || S.set(T, []), S.get(T).push(E);
            }
            S.forEach((E) => {
              if (u !== 0) {
                const T = /* @__PURE__ */ new Set();
                for (const A of E) if (i(e[A][0]) === h) {
                  const x = i(e[A][1]);
                  T.has(x) || (T.add(x), b.add(A));
                }
              }
              if (d !== 0) {
                const T = /* @__PURE__ */ new Set();
                for (const A of E) if (i(e[A][1]) === M) {
                  const x = i(e[A][0]);
                  T.has(x) || (T.add(x), f.add(A));
                }
              }
            });
          }
          for (const h of p) {
            const M = b.has(h) ? u : 0, S = f.has(h) ? d : 0, E = a;
            (M !== 0 || S !== 0 || E !== 0) && m.set(h, [
              M,
              S,
              E,
              0,
              0,
              0
            ]);
          }
          o = {
            ...o,
            loads: m
          }, t.nodeInputs.val = o;
        }
        try {
          const l = ct(e, n, o, s);
          if (l) {
            t.deformOutputs.val = l;
            const r = rt(e, n, s, l);
            r && (t.analyzeOutputs.val = r), console.log("Analysis complete:", e.length, "nodes,", n.length, "elements");
          }
        } catch (l) {
          console.warn("Analysis failed:", l.message);
        }
        Re && setTimeout(() => wt(), 50);
      }
    }
    function Kt(e, n) {
      const o = e * n, s = e * n * n * n / 12, l = n * e * e * e / 12, r = Math.min(e, n), a = Math.max(e, n), u = r * r * r * a * (1 / 3 - 0.21 * r / a * (1 - r * r * r * r / (12 * a * a * a * a)));
      return {
        A: o,
        Iz: s,
        Iy: l,
        J: u
      };
    }
    function $n(e) {
      const n = e / 2, o = Math.PI * n * n, s = Math.PI * n * n * n * n / 4, l = Math.PI * n * n * n * n / 2;
      return {
        A: o,
        Iz: s,
        Iy: s,
        J: l
      };
    }
    function Mn() {
      if (!t.elementInputs) return;
      const e = t.elements.val, n = K, o = {
        elasticities: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map(),
        areas: /* @__PURE__ */ new Map(),
        momentsOfInertiaZ: /* @__PURE__ */ new Map(),
        momentsOfInertiaY: /* @__PURE__ */ new Map(),
        torsionalConstants: /* @__PURE__ */ new Map(),
        densities: /* @__PURE__ */ new Map()
      };
      if ((N === "edificio" || N === "frame") && $e.size > 0) {
        const { material: l, colShape: r, fc: a, perFloor: u } = le;
        let d, m, p;
        l === 0 ? (d = 4700 * Math.sqrt(a / 1e3) * 1e3, m = d / (2 * 1.2), p = 24 / 9.80665) : (d = n.E, m = n.G, p = n.rho);
        for (let i = 0; i < e.length; i++) {
          const v = $e.has(i), k = Me.get(i) ?? 0, b = u[k] ?? u[0] ?? {
            bCol: 0.3,
            hCol: 0.3,
            dCol: 0.4
          };
          let f;
          if (v) if (l === 0) f = r === 1 ? $n(b.dCol) : Kt(b.bCol, b.hCol);
          else {
            const h = tt[b.colProfileIdx] ?? tt[0];
            f = {
              A: h.A,
              Iz: h.Iz,
              Iy: h.Iy,
              J: h.J
            };
          }
          else {
            const h = he.get(i), M = h ? h.dir === "x" ? b.vigasX : b.vigasY : [], S = h ? M[h.bay] ?? M[0] ?? Oe() : Oe();
            if (l === 0) f = Kt(S.b, S.h);
            else {
              const E = tt[S.profileIdx ?? 0] ?? tt[0];
              f = {
                A: E.A,
                Iz: E.Iz,
                Iy: E.Iy,
                J: E.J
              };
            }
          }
          o.elasticities.set(i, d), o.shearModuli.set(i, m), o.areas.set(i, f.A), o.momentsOfInertiaZ.set(i, f.Iy), o.momentsOfInertiaY.set(i, f.Iz), o.torsionalConstants.set(i, f.J), o.densities.set(i, p);
        }
      } else for (let l = 0; l < e.length; l++) o.elasticities.set(l, n.E), o.shearModuli.set(l, n.G), o.areas.set(l, n.A), o.momentsOfInertiaZ.set(l, n.Iy), o.momentsOfInertiaY.set(l, n.Iz), o.torsionalConstants.set(l, n.J), o.densities.set(l, n.rho);
      t.elementInputs.val = o;
    }
    function Zt(e) {
      U.querySelectorAll("[data-ex]").forEach((n) => {
        n.classList.toggle("active", n.dataset.ex === e);
      });
    }
    setTimeout(() => {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
      (_a = U.querySelector("#cad3d-toggle")) == null ? void 0 : _a.addEventListener("click", (d) => {
        d.stopPropagation(), U.classList.add("collapsed");
      }), (_b = U.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (d) => {
        d.stopPropagation(), U.classList.remove("collapsed");
      }), U.querySelectorAll("[data-ex]").forEach((d) => {
        d.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = d.dataset.ex;
          Zt(p), pe.example(p);
        });
      }), U.querySelectorAll("[data-view]").forEach((d) => {
        d.addEventListener("click", (m) => {
          m.stopPropagation();
          const p = d.dataset.view;
          ft(p), U.querySelectorAll("[data-view]").forEach((i) => i.classList.remove("view-active")), d.classList.add("view-active");
        });
      }), (_c = U.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (d) => {
        d.stopPropagation(), N = "", fn.val = false, bn(), pe.clear();
      }), (_d = U.querySelector("#cad3d-inspect")) == null ? void 0 : _d.addEventListener("click", (d) => {
        var _a2;
        d.stopPropagation(), Ue = !Ue, (_a2 = U.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", Ue), Ue || Qt();
      }), (_e2 = U.querySelector("#cad3d-export")) == null ? void 0 : _e2.addEventListener("click", (d) => {
        d.stopPropagation(), yn();
      }), (_f = U.querySelector("#cad3d-force-unit")) == null ? void 0 : _f.addEventListener("click", (d) => {
        d.stopPropagation();
        const m = d.currentTarget, p = ht.map((v) => v.id), i = p.indexOf(Y);
        Y = p[(i + 1) % p.length], K = et(Y, G), m.textContent = Y, N && be(N);
      }), (_g = U.querySelector("#cad3d-length-unit")) == null ? void 0 : _g.addEventListener("click", (d) => {
        d.stopPropagation();
        const m = d.currentTarget, p = Ge.map((v) => v.id), i = p.indexOf(G);
        G = p[(i + 1) % p.length], K = et(Y, G), m.textContent = G, N && be(N);
      }), (_h = U.querySelector("#cad3d-modal")) == null ? void 0 : _h.addEventListener("click", (d) => {
        var _a2, _b2;
        d.stopPropagation(), Re = !Re, (_a2 = U.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", Re);
        const p = U.querySelector("#cad3d-mode-prev"), i = U.querySelector("#cad3d-mode-next"), v = U.querySelector("#cad3d-mode-label"), k = U.querySelector("#cad3d-modal-scale");
        if (Re) {
          const b = Ie();
          ((_b2 = b == null ? void 0 : b.settings) == null ? void 0 : _b2.loads) && (dt = b.settings.loads.rawVal, b.settings.loads.val = false), wt(), p.style.display = "", i.style.display = "", v.style.display = "", k && (k.style.display = ""), e();
        } else St(), p.style.display = "none", i.style.display = "none", v.style.display = "none", k && (k.style.display = "none"), N && N !== "placa-q4" && N !== "placa-3q" && se(), setTimeout(() => {
          var _a3;
          const b = Ie();
          ((_a3 = b == null ? void 0 : b.settings) == null ? void 0 : _a3.loads) && dt && (b.settings.loads.val = true);
        }, 600);
      });
      function e() {
        var _a2;
        const d = U.querySelector("#cad3d-mode-label");
        if (!d || !(xe == null ? void 0 : xe.frequencies)) return;
        const m = xe.frequencies[ke], p = m > 0 ? 1 / m : 0, i = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let v = 0; v <= ke; v++) {
          const k = (_a2 = xe.massParticipation) == null ? void 0 : _a2[v];
          if (k) for (let b = 0; b < 6; b++) i[b] += k[b];
        }
        d.textContent = `Modo ${ke + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${p.toFixed(3)}s \u2014 \u03A3Ux=${(i[0] * 100).toFixed(1)}% \u03A3Uy=${(i[1] * 100).toFixed(1)}% \u03A3Rz=${(i[5] * 100).toFixed(1)}%`;
      }
      (_i = U.querySelector("#cad3d-mode-prev")) == null ? void 0 : _i.addEventListener("click", (d) => {
        if (d.stopPropagation(), !(xe == null ? void 0 : xe.modeShapes)) return;
        ke = (ke - 1 + xe.modeShapes.length) % xe.modeShapes.length;
        const m = xe.modeShapes[ke], { extent: p } = _e();
        let i = 0;
        for (let v = 0; v < He.length; v++) {
          const k = m[v * 6] || 0, b = m[v * 6 + 1] || 0, f = m[v * 6 + 2] || 0;
          i = Math.max(i, Math.sqrt(k * k + b * b + f * f));
        }
        pt = i > 1e-12 ? p * 0.05 / i : 1, lt(), e();
      }), (_j = U.querySelector("#cad3d-mode-next")) == null ? void 0 : _j.addEventListener("click", (d) => {
        if (d.stopPropagation(), !(xe == null ? void 0 : xe.modeShapes)) return;
        ke = (ke + 1) % xe.modeShapes.length;
        const m = xe.modeShapes[ke], { extent: p } = _e();
        let i = 0;
        for (let v = 0; v < He.length; v++) {
          const k = m[v * 6] || 0, b = m[v * 6 + 1] || 0, f = m[v * 6 + 2] || 0;
          i = Math.max(i, Math.sqrt(k * k + b * b + f * f));
        }
        pt = i > 1e-12 ? p * 0.05 / i : 1, lt(), e();
      });
      const n = U.querySelector("#cad3d-modal-scale");
      n == null ? void 0 : n.addEventListener("mousedown", (d) => d.stopPropagation()), n == null ? void 0 : n.addEventListener("change", () => {
        Re && (xe == null ? void 0 : xe.modeShapes) && lt();
      });
      const o = U.querySelector("#cad3d-cmd");
      o == null ? void 0 : o.addEventListener("mousedown", (d) => d.stopPropagation()), o == null ? void 0 : o.addEventListener("keydown", (d) => {
        if (d.key === "Enter") {
          const m = o.value.trim();
          if (m) {
            try {
              const p = new Function("cad", `return ${m}`)(pe);
              p !== void 0 && console.log(p);
            } catch (p) {
              console.error(p.message);
            }
            o.value = "";
          }
        }
      });
      let s = false, l = 0, r = 0, a = 0, u = 0;
      U.addEventListener("mousedown", (d) => {
        const m = d.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        s = true;
        const p = U.getBoundingClientRect();
        U.style.bottom = "unset", l = d.clientX, r = d.clientY, a = p.left, u = p.top, d.preventDefault();
      }), window.addEventListener("mousemove", (d) => {
        s && (d.preventDefault(), U.style.left = a + (d.clientX - l) + "px", U.style.top = u + (d.clientY - r) + "px");
      }), window.addEventListener("mouseup", () => {
        s = false;
      }), de();
    }, 10);
    function Ie() {
      const e = document.getElementById("viewer");
      return e ? e.__ctx : null;
    }
    function _e() {
      const e = t.nodes.val;
      if (e.length === 0) return {
        center: new we(),
        extent: 10
      };
      let n = 1 / 0, o = 1 / 0, s = 1 / 0, l = -1 / 0, r = -1 / 0, a = -1 / 0;
      for (const [m, p, i] of e) m < n && (n = m), m > l && (l = m), p < o && (o = p), p > r && (r = p), i < s && (s = i), i > a && (a = i);
      const u = new we((n + l) / 2, (o + r) / 2, (s + a) / 2), d = Math.max(l - n, r - o, a - s, 1);
      return {
        center: u,
        extent: d
      };
    }
    function Pe(e = false) {
      const n = Ie();
      if (!n) return;
      const { extent: o } = _e();
      let s;
      o <= 5 ? s = Math.max(1, Math.ceil(o * 1.5)) : o <= 50 ? s = Math.max(5, Math.ceil(o * 1.3 / 5) * 5) : s = Math.max(20, Math.ceil(o * 1.3 / 10) * 10), n.settings.gridSize.val = s, n.scene.children.filter((i) => i.type === "GridHelper").forEach((i) => {
        var _a, _b;
        (_a = i.geometry) == null ? void 0 : _a.dispose(), (_b = i.material) == null ? void 0 : _b.dispose(), n.scene.remove(i);
      });
      const r = An(), a = new Nn(s, 20, r.grid, r.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * s, 0.5 * s, 0), n.scene.add(a), n.scene.children.filter((i) => i.type === "Group" && i.name !== "gridAxes" && i.name !== "loadsGroup" && (i.name === "viewerAxes" || i.children.some((v) => v instanceof ut))).forEach((i) => {
        i.traverse((v) => {
          v.geometry && v.geometry.dispose(), v.material && (v.material.map && v.material.map.dispose(), v.material.dispose());
        }), n.scene.remove(i);
      });
      const d = 0.05 * s, m = new on();
      m.name = "viewerAxes";
      const p = r.axisArrow;
      m.add(new ut(new we(1, 0, 0), new we(), 1, p, 0.2, 0.2)), m.add(new ut(new we(0, 1, 0), new we(), 1, p, 0.2, 0.2)), m.add(new ut(new we(0, 0, 1), new we(), 1, p, 0.2, 0.2)), m.children.forEach((i) => i.scale.set(d, d, d));
      for (const [i, v, k] of [
        [
          "X",
          "red",
          [
            1.3 * d,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * d,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * d
          ]
        ]
      ]) {
        const b = document.createElement("canvas");
        b.width = 64, b.height = 64;
        const f = b.getContext("2d");
        f.fillStyle = v, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(i, 32, 34);
        const h = new ln(b);
        h.needsUpdate = true;
        const M = new rn(new cn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        M.position.set(k[0], k[1], k[2]), M.scale.set(0.4 * d, 0.4 * d, 1), M.renderOrder = 99, m.add(M);
      }
      n.scene.add(m), e ? n.render() : ft("3d");
    }
    function ft(e) {
      const n = Ie();
      if (!n) return;
      const { center: o, extent: s } = _e(), l = n.renderer.domElement.clientWidth / (n.renderer.domElement.clientHeight || 1), r = s * 0.7;
      if (n.controls.maxDistance = s * 5, n.controls.minDistance = s * 0.05, n.renderer.clippingPlanes = [], e === "3d") {
        const a = n.perspCamera.fov, u = s / (2 * Math.tan(a * Math.PI / 360)) * 2.2;
        n.perspCamera.position.set(o.x + u * 0.5, o.y - u * 0.8, o.z + u * 0.5), n.controls.target.copy(o), n.setActiveCamera(n.perspCamera);
      } else {
        const a = n.orthoCamera;
        a.left = -r * l, a.right = r * l, a.top = r, a.bottom = -r, a.near = -s * 10, a.far = s * 10, a.updateProjectionMatrix(), e === "plan" ? (a.position.set(o.x, o.y, o.z + s * 2), a.up.set(0, 1, 0)) : e === "elevX" ? (a.position.set(o.x + s * 2, o.y, o.z), a.up.set(0, 0, 1)) : e === "elevY" && (a.position.set(o.x, o.y - s * 2, o.z), a.up.set(0, 0, 1)), n.controls.target.copy(o), n.setActiveCamera(a);
      }
    }
    function kn() {
      ft("3d"), U.querySelectorAll("[data-view]").forEach((e) => e.classList.toggle("view-active", e.dataset.view === "3d"));
    }
    pe.view = (e) => {
      e = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[e] || e, ft(e), U.querySelectorAll("[data-view]").forEach((o) => o.classList.toggle("view-active", o.dataset.view === e));
    };
    let Ue = false, ze = null, Fe = null;
    function Qt() {
      if (ze) {
        const e = Ie();
        e == null ? void 0 : e.scene.remove(ze), ze.geometry.dispose(), ze.material.dispose(), ze = null, e == null ? void 0 : e.render();
      }
      Fe && (Fe.remove(), Fe = null);
    }
    function en(e) {
      const n = Ie();
      if (!n) return;
      ze && (n.scene.remove(ze), ze.geometry.dispose(), ze.material.dispose());
      const o = t.nodes.val, s = t.elements.val[e];
      if (!s) return;
      const l = [];
      for (let a = 0; a < s.length; a++) {
        const u = o[s[a]], d = o[s[(a + 1) % s.length]];
        l.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const r = new sn();
      r.setAttribute("position", new Tt(l, 3)), ze = new On(r, new Wn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), ze.renderOrder = 9999, n.scene.add(ze), n.render();
    }
    function tn(e) {
      const n = Ie();
      if (!n) return -1;
      const o = n.renderer.domElement.getBoundingClientRect(), s = new Cn((e.clientX - o.left) / o.width * 2 - 1, -((e.clientY - o.top) / o.height) * 2 + 1), l = new Pn();
      l.setFromCamera(s, n.controls.object), l.params.Line = {
        threshold: 0.5
      };
      const r = t.nodes.val, a = t.elements.val;
      if (r.length === 0 || a.length === 0) return -1;
      let u = 1 / 0, d = -1;
      const m = l.ray;
      for (let i = 0; i < a.length; i++) {
        const v = a[i];
        if (v.length === 2) {
          const k = new we(...r[v[0]]), b = new we(...r[v[1]]), f = new Fn(k, b), h = new we(), M = new we();
          m.closestPointToPoint(f.getCenter(new we()), h), f.closestPointToPoint(h, true, M);
          const S = h.distanceTo(M);
          S < u && (u = S, d = i);
        } else if (v.length === 3) {
          const k = new we();
          for (const h of v) {
            const M = r[h];
            k.add(new we(M[0], M[1], M[2]));
          }
          k.divideScalar(3);
          const b = new we();
          m.closestPointToPoint(k, b);
          const f = b.distanceTo(k);
          f < u && (u = f, d = i);
        }
      }
      const { extent: p } = _e();
      return u < p * 0.1 ? d : -1;
    }
    function I(e, n = 4) {
      return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e6 ? e.toExponential(2) : Math.abs(e) >= 100 ? e.toFixed(1) : e.toFixed(n);
    }
    function It(e, n, o = 12) {
      var _a;
      const s = Math.min(e.length, o), l = Math.min(((_a = e[0]) == null ? void 0 : _a.length) || 0, o);
      let r = "<table>";
      if (n) {
        r += '<tr><td class="header"></td>';
        for (let a = 0; a < l; a++) r += `<td class="header">${n[a] || a}</td>`;
        r += "</tr>";
      }
      for (let a = 0; a < s; a++) {
        r += "<tr>", n && (r += `<td class="header">${n[a] || a}</td>`);
        for (let u = 0; u < l; u++) {
          const d = e[a][u], m = Math.abs(d) > 1e-10 ? "nonzero" : "";
          r += `<td class="${m}">${I(d, 2)}</td>`;
        }
        r += "</tr>";
      }
      return r += "</table>", r;
    }
    function j(e, n) {
      return `<span class="frac"><span class="frac-num">${e}</span><span class="frac-den">${n}</span></span>`;
    }
    function g(e, n, o) {
      let s = `<span class="var">${e}</span>`;
      return n && (s += `<sub>${n}</sub>`), s;
    }
    function wn(e, n, o, s, l, r, a) {
      const u = `${j(g("E") + "\xB7" + g("A"), g("L"))}`, d = `${j("12\xB7" + g("E") + "\xB7" + g("I", "z"), g("L") + "\xB3")}`, m = `${j("12\xB7" + g("E") + "\xB7" + g("I", "y"), g("L") + "\xB3")}`, p = `${j(g("G") + "\xB7" + g("J"), g("L"))}`, i = `${j("4\xB7" + g("E") + "\xB7" + g("I", "y"), g("L"))}`, v = `${j("4\xB7" + g("E") + "\xB7" + g("I", "z"), g("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${u} = ${j(I(e) + "\xB7" + I(n), I(a))} = <span class="highlight">${I(e * n / a)}</span></div>
      <div>${d} = ${j("12\xB7" + I(e) + "\xB7" + I(o), I(a) + "\xB3")} = <span class="highlight">${I(12 * e * o / a ** 3)}</span></div>
      <div>${m} = ${j("12\xB7" + I(e) + "\xB7" + I(s), I(a) + "\xB3")} = <span class="highlight">${I(12 * e * s / a ** 3)}</span></div>
      <div>${p} = ${j(I(l) + "\xB7" + I(r), I(a))} = <span class="highlight">${I(l * r / a)}</span></div>
      <div>${i} = ${j("4\xB7" + I(e) + "\xB7" + I(s), I(a))} = <span class="highlight">${I(4 * e * s / a)}</span></div>
      <div>${v} = ${j("4\xB7" + I(e) + "\xB7" + I(o), I(a))} = <span class="highlight">${I(4 * e * o / a)}</span></div>
    </div>
    <div class="fem-eq">
      ${g("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${j(g("EA"), g("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${j("\u2212" + g("EA"), g("L"))}</span>
        <span class="cell">0</span><span class="cell">${j("12" + g("EI", "z"), g("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${j("\u2212" + g("EA"), g("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${j(g("EA"), g("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Sn(e) {
      if (e.length === 2) {
        const o = xt(e[1], e[0]), s = gt(o), l = o[0] / s, r = o[1] / s, a = o[2] / s;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${g("l")} = cos(\u03B1) = ${j("\u0394x", g("L"))} = ${j(I(o[0]), I(s))} = <span class="highlight">${I(l)}</span></div>
        <div>${g("m")} = cos(\u03B2) = ${j("\u0394y", g("L"))} = ${j(I(o[1]), I(s))} = <span class="highlight">${I(r)}</span></div>
        <div>${g("n")} = cos(\u03B3) = ${j("\u0394z", g("L"))} = ${j(I(o[2]), I(s))} = <span class="highlight">${I(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${g("l")}</span><span class="cell">${g("m")}</span><span class="cell">${g("n")}</span>
          <span class="cell">${j("\u2212" + g("m"), g("D"))}</span><span class="cell">${j(g("l"), g("D"))}</span><span class="cell">0</span>
          <span class="cell">${j("\u2212" + g("l") + "\xB7" + g("n"), g("D"))}</span><span class="cell">${j("\u2212" + g("m") + "\xB7" + g("n"), g("D"))}</span><span class="cell">${g("D")}</span>
        </span>
        &nbsp; donde ${g("D")} = \u221A(${g("l")}\xB2 + ${g("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${g("T")} = ${g("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${g("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function zn() {
      return `<div class="fem-eq">
      ${g("K", "global")} = ${g("T")}<sup>T</sup> \xB7 ${g("k", "local")} \xB7 ${g("T")}
    </div>`;
    }
    function In(e) {
      const n = e.map((o) => `6\xB7${o} = ${6 * o}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${g("K", "global")}[${g("i")}, ${g("j")}] += ${g("K", "elem")}[${g("i")}, ${g("j")}]</div>
      <div style="margin-top:4px">donde ${g("i")}, ${g("j")} \u2208 {${n}} + (0..5)</div>
    </div>`;
    }
    function En(e) {
      return e ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${g("u", "local")} = ${g("T")} \xB7 ${g("u", "global")}</div>
        <div>${g("f", "local")} = ${g("k", "local")} \xB7 ${g("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${g("f")} = [${g("N", "i")}, ${g("V", "y,i")}, ${g("V", "z,i")}, ${g("M", "x,i")}, ${g("M", "y,i")}, ${g("M", "z,i")}, ${g("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${j("1", "2" + g("A"))} \xB7 ${g("D")} \xB7 ${g("B")} \xB7 ${g("u")}</div>
      <div>${g("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${g("t")} &nbsp;&nbsp; ${g("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${j(g("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Et(e, n) {
      const o = e.length;
      let s = '<table><tr><td class="hdr"></td>';
      for (let l = 0; l < o; l++) s += `<td class="hdr">${n[l] || l}</td>`;
      s += "</tr>";
      for (let l = 0; l < o; l++) {
        s += `<tr><td class="hdr">${n[l] || l}</td>`;
        for (let r = 0; r < o; r++) {
          const a = e[l][r], u = (l === r ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          s += `<td class="${u}">${I(a, 2)}</td>`;
        }
        s += "</tr>";
      }
      return s += "</table>", s;
    }
    function nn() {
      const e = "0", n = j(g("EA"), g("L")), o = j("\u2212" + g("EA"), g("L")), s = j("12" + g("EI", "z"), g("L") + "\xB3"), l = j("\u221212" + g("EI", "z"), g("L") + "\xB3"), r = j("12" + g("EI", "y"), g("L") + "\xB3"), a = j("\u221212" + g("EI", "y"), g("L") + "\xB3"), u = j("6" + g("EI", "z"), g("L") + "\xB2"), d = j("\u22126" + g("EI", "z"), g("L") + "\xB2"), m = j("6" + g("EI", "y"), g("L") + "\xB2"), p = j("\u22126" + g("EI", "y"), g("L") + "\xB2"), i = j(g("GJ"), g("L")), v = j("\u2212" + g("GJ"), g("L")), k = j("4" + g("EI", "z"), g("L")), b = j("2" + g("EI", "z"), g("L")), f = j("4" + g("EI", "y"), g("L")), h = j("2" + g("EI", "y"), g("L")), M = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', S = [
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
      ], T = [
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
          r,
          e,
          p,
          e,
          e,
          e,
          a,
          e,
          p,
          e
        ],
        [
          e,
          e,
          e,
          i,
          e,
          e,
          e,
          e,
          e,
          v,
          e,
          e
        ],
        [
          e,
          e,
          p,
          e,
          f,
          e,
          e,
          e,
          m,
          e,
          h,
          e
        ],
        [
          e,
          u,
          e,
          e,
          e,
          k,
          e,
          d,
          e,
          e,
          e,
          b
        ],
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
          d,
          e,
          s,
          e,
          e,
          e,
          d
        ],
        [
          e,
          e,
          a,
          e,
          m,
          e,
          e,
          e,
          r,
          e,
          m,
          e
        ],
        [
          e,
          e,
          e,
          v,
          e,
          e,
          e,
          e,
          e,
          i,
          e,
          e
        ],
        [
          e,
          e,
          p,
          e,
          h,
          e,
          e,
          e,
          m,
          e,
          f,
          e
        ],
        [
          e,
          u,
          e,
          e,
          e,
          b,
          e,
          d,
          e,
          e,
          e,
          k
        ]
      ];
      let A = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      A += '<table><tr><td class="hdr"></td>';
      for (const x of E) A += `<td class="hdr">${x}</td>`;
      A += "</tr>";
      for (let x = 0; x < 12; x++) {
        A += `<tr><td class="hdr">${S[x]}</td>`;
        for (let y = 0; y < 12; y++) if (y < x) A += `<td style="color:var(--fem-border-cell)">${y === 0 && x > 0 ? M : ""}</td>`;
        else {
          const O = T[x][y], H = (x === y ? "diag " : "") + (O !== "0" ? "nz" : "");
          A += `<td class="${H}">${O}</td>`;
        }
        A += "</tr>";
      }
      return A += "</table>", A;
    }
    function Ln(e, n, o, s, l, r, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${j(g("E") + "\xB7" + g("A"), g("L"))}`,
          calc: `${j(I(e) + "\xD7" + I(n), I(a))}`,
          val: e * n / a,
          label: "Axial"
        },
        {
          name: `${j("12\xB7" + g("E") + "\xB7" + g("I", "z"), g("L") + "\xB3")}`,
          calc: `${j("12\xD7" + I(e) + "\xD7" + I(o), I(a) + "\xB3")}`,
          val: 12 * e * o / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${j("6\xB7" + g("E") + "\xB7" + g("I", "z"), g("L") + "\xB2")}`,
          calc: `${j("6\xD7" + I(e) + "\xD7" + I(o), I(a) + "\xB2")}`,
          val: 6 * e * o / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${j("12\xB7" + g("E") + "\xB7" + g("I", "y"), g("L") + "\xB3")}`,
          calc: `${j("12\xD7" + I(e) + "\xD7" + I(s), I(a) + "\xB3")}`,
          val: 12 * e * s / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${j("6\xB7" + g("E") + "\xB7" + g("I", "y"), g("L") + "\xB2")}`,
          calc: `${j("6\xD7" + I(e) + "\xD7" + I(s), I(a) + "\xB2")}`,
          val: 6 * e * s / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${j(g("G") + "\xB7" + g("J"), g("L"))}`,
          calc: `${j(I(l) + "\xD7" + I(r), I(a))}`,
          val: l * r / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${j("4\xB7" + g("E") + "\xB7" + g("I", "z"), g("L"))}`,
          calc: `${j("4\xD7" + I(e) + "\xD7" + I(o), I(a))}`,
          val: 4 * e * o / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${j("2\xB7" + g("E") + "\xB7" + g("I", "z"), g("L"))}`,
          calc: `${j("2\xD7" + I(e) + "\xD7" + I(o), I(a))}`,
          val: 2 * e * o / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${j("4\xB7" + g("E") + "\xB7" + g("I", "y"), g("L"))}`,
          calc: `${j("4\xD7" + I(e) + "\xD7" + I(s), I(a))}`,
          val: 4 * e * s / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${j("2\xB7" + g("E") + "\xB7" + g("I", "y"), g("L"))}`,
          calc: `${j("2\xD7" + I(e) + "\xD7" + I(s), I(a))}`,
          val: 2 * e * s / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((d) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${d.label}</div>${d.name} = ${d.calc} = <span class="highlight">${I(d.val)}</span></div>`).join("")}</div>`;
    }
    function Lt(e, n, o, s) {
      var _a;
      const l = document.querySelector(".fem-full-overlay");
      l && l.remove();
      const r = document.createElement("div");
      r.className = "fem-full-overlay", r.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${e}</h2>
      <div class="fem-full-sections">
        <div class="full-section">
          <div class="side-title">\u2460 F\xF3rmula General (simb\xF3lica)</div>
          <div class="fem-full-sym">${n}</div>
        </div>
        ${s ? `<div class="full-section coeff">
          <div class="side-title">\u2461 C\xE1lculo de Coeficientes (sustituci\xF3n num\xE9rica)</div>
          ${s}
        </div>` : ""}
        <div class="full-section numeric">
          <div class="side-title">${s ? "\u2462" : "\u2461"} Matriz Num\xE9rica Resultante</div>
          ${o}
        </div>
      </div>
    `, document.body.appendChild(r), (_a = r.querySelector("#fem-full-close")) == null ? void 0 : _a.addEventListener("click", () => r.remove()), r.addEventListener("click", (a) => {
        a.target === r && r.remove();
      });
    }
    function qn(e) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Fe && Fe.remove();
      const n = t.nodes.val, s = t.elements.val[e], l = s.map((W) => n[W]), r = s.length === 2, a = ((_a = t.elementInputs) == null ? void 0 : _a.val) || {}, u = (_b = t.deformOutputs) == null ? void 0 : _b.val, d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val;
      let m = "";
      if (r) {
        const W = gt(xt(l[1], l[0])), V = ((_d = a.elasticities) == null ? void 0 : _d.get(e)) ?? 0, R = ((_e2 = a.areas) == null ? void 0 : _e2.get(e)) ?? 0, L = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(e)) ?? 0, P = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(e)) ?? 0, z = ((_h = a.shearModuli) == null ? void 0 : _h.get(e)) ?? 0, q = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(e)) ?? 0;
        m = `
        <div class="prop-row"><span class="prop-key">Tipo</span><span class="prop-val">Frame (2 nodos)</span></div>
        <div class="prop-row"><span class="prop-key">Nodos</span><span class="prop-val">${s[0]} \u2192 ${s[1]}</span></div>
        <div class="prop-row"><span class="prop-key">L</span><span class="prop-val">${I(W)} m</span></div>
        <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${I(V)}</span></div>
        <div class="prop-row"><span class="prop-key">A</span><span class="prop-val">${I(R)}</span></div>
        <div class="prop-row"><span class="prop-key">Iz</span><span class="prop-val">${I(L)}</span></div>
        <div class="prop-row"><span class="prop-key">Iy</span><span class="prop-val">${I(P)}</span></div>
        <div class="prop-row"><span class="prop-key">G</span><span class="prop-val">${I(z)}</span></div>
        <div class="prop-row"><span class="prop-key">J</span><span class="prop-val">${I(q)}</span></div>
      `;
      } else {
        const W = ((_j = a.elasticities) == null ? void 0 : _j.get(e)) ?? 0, V = ((_k = a.thicknesses) == null ? void 0 : _k.get(e)) ?? 0, R = ((_l = a.poissonsRatios) == null ? void 0 : _l.get(e)) ?? 0;
        m = `
        <div class="prop-row"><span class="prop-key">Tipo</span><span class="prop-val">Shell (3 nodos)</span></div>
        <div class="prop-row"><span class="prop-key">Nodos</span><span class="prop-val">${s.join(", ")}</span></div>
        <div class="prop-row"><span class="prop-key">E</span><span class="prop-val">${I(W)}</span></div>
        <div class="prop-row"><span class="prop-key">t</span><span class="prop-val">${I(V)} m</span></div>
        <div class="prop-row"><span class="prop-key">\u03BD</span><span class="prop-val">${I(R)}</span></div>
      `;
      }
      let p = "", i = "", v = "", k = "", b = "", f = "", h = "", M = "", S = null, E = null, T = null, A = [];
      try {
        if (S = jn(l, a, e), E = _n(l), T = vt(Vn(E), vt(S, E)), A = r ? [
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
        ], r) {
          const L = gt(xt(l[1], l[0])), P = ((_m = a.elasticities) == null ? void 0 : _m.get(e)) ?? 0, z = ((_n2 = a.areas) == null ? void 0 : _n2.get(e)) ?? 0, q = ((_o = a.momentsOfInertiaZ) == null ? void 0 : _o.get(e)) ?? 0, X = ((_p = a.momentsOfInertiaY) == null ? void 0 : _p.get(e)) ?? 0, J = ((_q = a.shearModuli) == null ? void 0 : _q.get(e)) ?? 0, B = ((_r = a.torsionalConstants) == null ? void 0 : _r.get(e)) ?? 0;
          k = wn(P, z, q, X, J, B, L);
        }
        b = Sn(l), f = zn(), h = In(s), M = En(r);
        const W = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', V = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', R = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        p = `<div class="matrix-label">k_local (${S.length}\xD7${S.length}) ${W}</div>${It(S, A)}`, i = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${E.length}\xD7${E.length}) ${V}</div>${It(E, A)}`, v = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${R}</div>${It(T, A)}`;
      } catch (W) {
        p = `<div style="color:red">Error: ${W.message}</div>`;
      }
      let x = "";
      if (u == null ? void 0 : u.deformations) {
        const W = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        x = s.map((V, R) => {
          var _a2;
          const L = ((_a2 = u.deformations) == null ? void 0 : _a2.get(V)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], P = W.map((z, q) => `<span class="prop-key">${z}</span>: <span class="${Math.abs(L[q]) > 1e-10 ? "result-val" : ""}">${I(L[q])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${V}:</strong> ${P}</div>`;
        }).join("");
      }
      let y = "";
      if (d && r && (u == null ? void 0 : u.deformations) && S && E) {
        const W = (_s = d.normals) == null ? void 0 : _s.get(e), V = (_t2 = d.shearsY) == null ? void 0 : _t2.get(e), R = (_u = d.shearsZ) == null ? void 0 : _u.get(e), L = (_v = d.torsions) == null ? void 0 : _v.get(e), P = (_w = d.bendingsY) == null ? void 0 : _w.get(e), z = (_x = d.bendingsZ) == null ? void 0 : _x.get(e), q = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], X = [];
        for (const ne of s) {
          const ue = ((_y = u.deformations) == null ? void 0 : _y.get(ne)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          X.push(...ue);
        }
        let J = [];
        try {
          J = vt(E, X);
        } catch {
          J = new Array(12).fill(0);
        }
        let B = [];
        try {
          B = vt(S, J);
        } catch {
          B = new Array(12).fill(0);
        }
        const ae = (ne, ue) => ne.map((_, ee) => `<span style="color:${Math.abs(_) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ue[ee % 6]}=${I(_)}</span>`).join(", "), ce = [
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
        ].map((ne, ue) => `${ne}${ue < 6 ? "\u1D62" : "\u2C7C"}`);
        y = `
        <div class="fem-step">
          <div class="step-title">Paso A \u2014 Desplazamientos globales del elemento</div>
          <div class="step-eq">${g("u", "global")} = [${s.map((ne, ue) => `<span style="color:var(--fem-label)">nodo ${ne}:</span> ${q.map((_, ee) => `<span style="color:${Math.abs(X[ue * 6 + ee]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${I(X[ue * 6 + ee])}</span>`).join(", ")}`).join(" | ")}]</div>
        </div>
        <div class="fem-step">
          <div class="step-title">Paso B \u2014 Transformar a coordenadas locales</div>
          <div class="step-eq">${g("u", "local")} = ${g("T")} \xB7 ${g("u", "global")}</div>
          <div class="step-eq" style="margin-top:4px">${g("u", "local")} = [${ae(J, [
          ...q,
          ...q
        ])}]</div>
        </div>
        <div class="fem-step">
          <div class="step-title">Paso C \u2014 Fuerzas internas: ${g("f", "local")} = ${g("k", "local")} \xB7 ${g("u", "local")}</div>
          <div class="step-eq" style="margin-top:4px">${g("f", "local")} = [${B.map((ne, ue) => `<span style="color:${Math.abs(ne) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ce[ue]}=${I(ne)}</span>`).join(", ")}]</div>
        </div>
        <div class="fem-step">
          <div class="step-title">Paso D \u2014 Identificaci\xF3n de esfuerzos (nodo i \u2192 nodo j)</div>
          <div class="step-eq" style="display:grid;grid-template-columns:1fr 1fr;gap:2px 12px">
            <div>${g("P", "1")} = ${g("N", "i")} = <span class="highlight">${I(B[0])}</span></div>
            <div>${g("P", "7")} = ${g("N", "j")} = <span class="highlight">${I(B[6])}</span></div>
            <div>${g("P", "2")} = ${g("V", "y,i")} = <span class="highlight">${I(B[1])}</span></div>
            <div>${g("P", "8")} = ${g("V", "y,j")} = <span class="highlight">${I(B[7])}</span></div>
            <div>${g("P", "3")} = ${g("V", "z,i")} = <span class="highlight">${I(B[2])}</span></div>
            <div>${g("P", "9")} = ${g("V", "z,j")} = <span class="highlight">${I(B[8])}</span></div>
            <div>${g("P", "4")} = ${g("M", "x,i")} = <span class="highlight">${I(B[3])}</span></div>
            <div>${g("P", "10")} = ${g("M", "x,j")} = <span class="highlight">${I(B[9])}</span></div>
            <div>${g("P", "5")} = ${g("M", "y,i")} = <span class="highlight">${I(B[4])}</span></div>
            <div>${g("P", "11")} = ${g("M", "y,j")} = <span class="highlight">${I(B[10])}</span></div>
            <div>${g("P", "6")} = ${g("M", "z,i")} = <span class="highlight">${I(B[5])}</span></div>
            <div>${g("P", "12")} = ${g("M", "z,j")} = <span class="highlight">${I(B[11])}</span></div>
          </div>
        </div>
        <div style="margin-top:8px;border-top:1px solid var(--fem-border);padding-top:6px">
          <div style="color:var(--fem-label);font-size:10px;margin-bottom:4px">RESUMEN (awatif-fem output):</div>
          <div class="prop-row"><span class="prop-key">N (normal)</span><span class="result-val">[${W ? W.map((ne) => I(ne)).join(", ") : "\u2014"}]</span></div>
          <div class="prop-row"><span class="prop-key">Vy (corte Y)</span><span class="result-val">[${V ? V.map((ne) => I(ne)).join(", ") : "\u2014"}]</span></div>
          <div class="prop-row"><span class="prop-key">Vz (corte Z)</span><span class="result-val">[${R ? R.map((ne) => I(ne)).join(", ") : "\u2014"}]</span></div>
          <div class="prop-row"><span class="prop-key">Mx (torsion)</span><span class="result-val">[${L ? L.map((ne) => I(ne)).join(", ") : "\u2014"}]</span></div>
          <div class="prop-row"><span class="prop-key">My (momento Y)</span><span class="result-val">[${P ? P.map((ne) => I(ne)).join(", ") : "\u2014"}]</span></div>
          <div class="prop-row"><span class="prop-key">Mz (momento Z)</span><span class="result-val">[${z ? z.map((ne) => I(ne)).join(", ") : "\u2014"}]</span></div>
        </div>
      `;
      } else if (d && r) {
        const W = (_z = d.normals) == null ? void 0 : _z.get(e), V = (_A = d.shearsY) == null ? void 0 : _A.get(e), R = (_B = d.shearsZ) == null ? void 0 : _B.get(e), L = (_C = d.torsions) == null ? void 0 : _C.get(e), P = (_D = d.bendingsY) == null ? void 0 : _D.get(e), z = (_E = d.bendingsZ) == null ? void 0 : _E.get(e);
        y = `
        <div class="prop-row"><span class="prop-key">N (normal)</span><span class="result-val">[${W ? W.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Vy (corte Y)</span><span class="result-val">[${V ? V.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Vz (corte Z)</span><span class="result-val">[${R ? R.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Mx (torsion)</span><span class="result-val">[${L ? L.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">My (momento Y)</span><span class="result-val">[${P ? P.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Mz (momento Z)</span><span class="result-val">[${z ? z.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
      `;
      } else if (d && !r) {
        const W = (_F = d.bendingXX) == null ? void 0 : _F.get(e), V = (_G = d.bendingYY) == null ? void 0 : _G.get(e), R = (_H = d.bendingXY) == null ? void 0 : _H.get(e), L = (_I = d.membraneXX) == null ? void 0 : _I.get(e), P = (_J = d.membraneYY) == null ? void 0 : _J.get(e), z = (_K = d.membraneXY) == null ? void 0 : _K.get(e);
        y = `
        <div class="prop-row"><span class="prop-key">Mxx (flexion)</span><span class="result-val">[${W ? W.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Myy</span><span class="result-val">[${V ? V.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Mxy</span><span class="result-val">[${R ? R.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Nxx (membrana)</span><span class="result-val">[${L ? L.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Nyy</span><span class="result-val">[${P ? P.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
        <div class="prop-row"><span class="prop-key">Nxy</span><span class="result-val">[${z ? z.map((q) => I(q)).join(", ") : "\u2014"}]</span></div>
      `;
      }
      const O = `
      <div class="prop-row"><span class="prop-key">DOF offset nodo ${s[0]}</span><span class="prop-val">${6 * s[0]}..${6 * s[0] + 5}</span></div>
      <div class="prop-row"><span class="prop-key">DOF offset nodo ${s[1]}</span><span class="prop-val">${6 * s[1]}..${6 * s[1] + 5}</span></div>
      ${s.length === 3 ? `<div class="prop-row"><span class="prop-key">DOF offset nodo ${s[2]}</span><span class="prop-val">${6 * s[2]}..${6 * s[2] + 5}</span></div>` : ""}
      <div class="prop-row"><span class="prop-key">K global total</span><span class="prop-val">${n.length * 6} \xD7 ${n.length * 6}</span></div>
    `;
      Fe = document.createElement("div"), Fe.id = "fem-inspect-panel", Fe.innerHTML = `
      <h3>Elemento ${e} <button class="close-btn" id="fem-close">\u2715</button></h3>
      <div class="section"><div class="section-title">1. Propiedades</div>${m}</div>
      <div class="section"><div class="section-title">2. Rigidez Local</div>${k}${p}</div>
      <div class="section"><div class="section-title">3. Transformaci\xF3n</div>${b}${i}</div>
      <div class="section"><div class="section-title">4. Rigidez Global</div>${f}${v}</div>
      <div class="section"><div class="section-title">5. Ensamblaje</div>${h}${O}</div>
      <div class="section"><div class="section-title">6. Desplazamientos</div>${x || "<span style='color:var(--fem-label)'>Sin an\xE1lisis</span>"}</div>
      <div class="section"><div class="section-title">7. Fuerzas Internas</div>${M}${y || "<span style='color:var(--fem-label)'>Sin an\xE1lisis</span>"}</div>
    `, document.body.appendChild(Fe), (_L = Fe.querySelector("#fem-close")) == null ? void 0 : _L.addEventListener("click", () => Qt());
      const H = r ? (() => {
        var _a2, _b2, _c2, _d2, _e3, _f2;
        const W = gt(xt(l[1], l[0])), V = ((_a2 = a.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, R = ((_b2 = a.areas) == null ? void 0 : _b2.get(e)) ?? 0, L = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(e)) ?? 0, P = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(e)) ?? 0, z = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(e)) ?? 0, q = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(e)) ?? 0;
        return Ln(V, R, L, P, z, q, W);
      })() : void 0;
      Fe.querySelectorAll("[data-full]").forEach((W) => {
        W.addEventListener("click", (V) => {
          V.stopPropagation();
          const R = W.dataset.full;
          if (R === "kLocal" && S) {
            const L = r ? nn() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Lt(`Elemento ${e} \u2014 Rigidez Local k_local`, L, Et(S, A), H);
          } else if (R === "T" && E) Lt(`Elemento ${e} \u2014 Transformaci\xF3n T`, b, Et(E, A));
          else if (R === "kGlobal" && T) {
            const L = r ? nn() : "<em>Shell 18\xD718</em>";
            Lt(`Elemento ${e} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, Et(T, A), H);
          }
        });
      });
    }
    setTimeout(() => {
      const e = document.getElementById("viewer");
      if (!e) return;
      const n = e.querySelector("canvas");
      n && (n.addEventListener("mousemove", (o) => {
        if (!Ue) return;
        const s = tn(o);
        if (s >= 0) en(s), n.style.cursor = "pointer";
        else {
          if (ze) {
            const l = Ie();
            l == null ? void 0 : l.scene.remove(ze), ze = null, l == null ? void 0 : l.render();
          }
          n.style.cursor = "";
        }
      }), n.addEventListener("click", (o) => {
        if (!Ue) return;
        const s = tn(o);
        s >= 0 && (en(s), qn(s));
      }));
    }, 500), Qe.derive(() => {
      var _a;
      t.nodes.val, t.elements.val, (_a = t.nodeInputs) == null ? void 0 : _a.val, de();
    }), pe.modal = (e) => {
      var _a, _b;
      if (e === void 0 && (e = !Re), Re = e, (_a = U.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", Re), Re) {
        const o = Ie();
        ((_b = o == null ? void 0 : o.settings) == null ? void 0 : _b.loads) && (dt = o.settings.loads.rawVal, o.settings.loads.val = false), wt(), U.querySelector("#cad3d-mode-prev").style.display = "", U.querySelector("#cad3d-mode-next").style.display = "", U.querySelector("#cad3d-mode-label").style.display = "";
      } else St(), U.querySelector("#cad3d-mode-prev").style.display = "none", U.querySelector("#cad3d-mode-next").style.display = "none", U.querySelector("#cad3d-mode-label").style.display = "none", N && N !== "placa-q4" && N !== "placa-3q" && se(), setTimeout(() => {
        var _a2;
        const o = Ie();
        ((_a2 = o == null ? void 0 : o.settings) == null ? void 0 : _a2.loads) && dt && (o.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${Re ? "ON" : "OFF"}`);
    }, pe.setMode = (e) => {
      var _a;
      if (!(xe == null ? void 0 : xe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ke = Math.max(0, Math.min(e, xe.modeShapes.length - 1));
      const n = xe.modeShapes[ke], { extent: o } = _e();
      let s = 0;
      for (let r = 0; r < He.length; r++) {
        const a = n[r * 6] || 0, u = n[r * 6 + 1] || 0, d = n[r * 6 + 2] || 0;
        s = Math.max(s, Math.sqrt(a * a + u * u + d * d));
      }
      pt = s > 1e-12 ? o * 0.05 / s : 1, lt();
      const l = U.querySelector("#cad3d-mode-label");
      l && xe.frequencies && (l.textContent = `Modo ${ke + 1} \u2014 ${xe.frequencies[ke].toFixed(2)} Hz`), console.log(`Modo ${ke + 1}: f = ${(_a = xe.frequencies) == null ? void 0 : _a[ke].toFixed(4)} Hz`);
    }, window.cad = pe, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(U), document.body.appendChild(at.div);
    }, 0), setTimeout(() => {
      t.nodes.val.length === 0 && (be("edificio"), se(), Zt("edificio"));
    }, 100);
    const an = document.createElement("span");
    return an.style.display = "none", an;
  };
});
export {
  __tla,
  fn as a,
  Un as c,
  aa as g
};
