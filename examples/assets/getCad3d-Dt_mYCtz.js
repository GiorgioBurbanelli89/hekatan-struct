const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-DZAQImEK.js","./plateQ4Cpp-CArWqXeL.js"])))=>i.map(i=>d[i]);
import { _ as Ya, p as fn, m as Va, d as ut, s as Ga, __tla as __tla_0 } from "./plateQ4Cpp-CArWqXeL.js";
import { v as fo, P as qo, g as Xa, a as Ka, o as Ua } from "./theme-CzzIlc4y.js";
import { V as ue, P as Wt, R as ca, b as da, B as Kt, c as Za, d as pa, e as $o, f as Qa, S as es, M as ts, g as os, F as Ut, a as wo, L as un, h as ns, G as as, A as To, i as fa, T as ua, j as mn, k as bn, C as ss, l as ls } from "./Text-Cin90tvN.js";
import { g as Ho, b as No, a as po } from "./analyze-B0bulnNq.js";
import { g as Ft, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as eo, s as Pt, m as gt, t as yn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let xa, ds, Ts;
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
  const vn = [
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
  ], uo = [
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
  function is(e, h) {
    return e === "kN" && h === "m" ? "kPa" : e === "kN" && h === "mm" || e === "N" && h === "mm" ? "MPa" : e === "N" && h === "m" ? "Pa" : e === "kip" && h === "in" ? "ksi" : e === "kip" && h === "ft" ? "ksf" : `${e}/${h}\xB2`;
  }
  const Zt = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Qt(e, h) {
    const B = vn.find((ie) => ie.id === e), T = uo.find((ie) => ie.id === h), J = B.toKN, be = T.toM, ne = (ie, me, E) => E / (Math.pow(J, ie) * Math.pow(be, me));
    let U, O;
    switch (e) {
      case "kN":
        U = 10, O = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        U = 1, O = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        U = 1e3, O = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        U = 10, O = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        U = 5e3, O = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        U = 1e4, O = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${h}`,
      label: `${B.label}, ${T.label}`,
      force: B.label,
      length: T.label,
      stress: is(e, h),
      moment: `${B.label}\xB7${T.label}`,
      E: ne(1, -2, Zt.E),
      G: ne(1, -2, Zt.G),
      A: ne(0, 2, Zt.A),
      Iz: ne(0, 4, Zt.Iz),
      Iy: ne(0, 4, Zt.Iy),
      J: ne(0, 4, Zt.J),
      rho: ne(1, -4, Zt.rho),
      spanRange: T.spanRange,
      heightRange: T.heightRange,
      defaultSpan: T.defaultSpan,
      defaultHeight: T.defaultHeight,
      defaultForce: U,
      forceRange: O,
      galponSpan: T.galponSpan,
      galponLength: T.galponLength,
      galponHeight: T.galponHeight,
      galponRise: T.galponRise
    };
  }
  Qt("kN", "m"), Qt("kip", "in");
  function Fo() {
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
  function rs(e) {
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
  function cs(e) {
    const h = e.force, [B, T, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CV (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: B,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: B,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: B,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: B,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: B,
          max: T,
          step: J,
          label: `Ey sismo (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: J,
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
          min: B,
          max: 0,
          step: J,
          label: `CM (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: J,
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
  ds = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let h = false;
    function B(T, J) {
      var _a, _b;
      if (!T.frequencies || T.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const be = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], ne = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let U = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${J.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (U += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const O of J.properties) U += `<span style="color:#888">${O}</span>
`;
      U += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const O of be) U += `<th style="padding:2px 5px">${O}</th>`;
      if (U += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, T.frequencies.forEach((O, ie) => {
        var _a2;
        const me = O > 0 ? 1 / O : 0, E = O * 2 * Math.PI, ee = ((_a2 = T.massParticipation) == null ? void 0 : _a2[ie]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) ne[ve] += ee[ve];
        U += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${ie + 1}</td>
  <td style="padding:2px 6px; text-align:right">${O.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${me.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${E.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const et = (ee[ve] * 100).toFixed(1), oe = ee[ve] > 0.5 ? "#f00" : ee[ve] > 0.1 ? "#ff0" : "#0f0";
          U += `<td style="padding:2px 5px; text-align:right; color:${oe}">${et}%</td>`;
        }
        U += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ne[5] * 100).toFixed(1)}%</td></tr>`;
      }), U += "</table></div>", e.innerHTML = U, h) {
        const O = e.querySelector("#modal-body"), ie = e.querySelector("#modal-minimize");
        O && (O.style.display = "none"), ie && (ie.textContent = "\u25A2", ie.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        h = !h;
        const O = e.querySelector("#modal-body"), ie = e.querySelector("#modal-minimize");
        h ? (O.style.display = "none", ie.textContent = "\u25A2", ie.title = "Restaurar") : (O.style.display = "block", ie.textContent = "\u25AC", ie.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const O = [];
        O.push(`Modal Analysis \u2014 ${J.title}`);
        const ie = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${be.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        O.push(ie), O.push("-".repeat(ie.length));
        const me = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        T.frequencies.forEach((ee, ve) => {
          var _a2;
          const et = ee > 0 ? 1 / ee : 0, oe = ee * 2 * Math.PI, se = ((_a2 = T.massParticipation) == null ? void 0 : _a2[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Se = 0; Se < 6; Se++) me[Se] += se[Se];
          const ye = se.map((Se) => ((Se * 100).toFixed(1) + "%").padStart(6)).join(" ");
          O.push(`${String(ve + 1).padStart(4)}  ${ee.toFixed(4).padStart(9)}  ${et.toFixed(4).padStart(9)}  ${oe.toFixed(2).padStart(9)}  ${ye}  ${(me[0] * 100).toFixed(1).padStart(5)}%  ${(me[1] * 100).toFixed(1).padStart(5)}%  ${(me[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(O.join(`
`));
        const E = e.querySelector("#modal-copy");
        E.textContent = "\u2713", setTimeout(() => E.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: B
    };
  };
  const te = 64516e-8, k = 416231e-12, A = 0.0254, Jt = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * te,
      Iz: 16.4 * k,
      Iy: 2.2 * k,
      J: 0.0405 * k,
      d: 5.9 * A,
      bf: 3.94 * A
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * te,
      Iz: 29.1 * k,
      Iy: 9.32 * k,
      J: 0.103 * k,
      d: 5.99 * A,
      bf: 5.99 * A
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * te,
      Iz: 41.4 * k,
      Iy: 13.3 * k,
      J: 0.204 * k,
      d: 6.2 * A,
      bf: 6.02 * A
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * te,
      Iz: 30.8 * k,
      Iy: 2.09 * k,
      J: 0.0426 * k,
      d: 7.89 * A,
      bf: 3.94 * A
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * te,
      Iz: 61.9 * k,
      Iy: 7.97 * k,
      J: 0.172 * k,
      d: 8.14 * A,
      bf: 5.25 * A
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * te,
      Iz: 82.7 * k,
      Iy: 18.3 * k,
      J: 0.346 * k,
      d: 7.93 * A,
      bf: 6.5 * A
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * te,
      Iz: 110 * k,
      Iy: 37.1 * k,
      J: 0.536 * k,
      d: 8 * A,
      bf: 7.995 * A
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * te,
      Iz: 146 * k,
      Iy: 49.1 * k,
      J: 0.871 * k,
      d: 8.25 * A,
      bf: 8.07 * A
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * te,
      Iz: 184 * k,
      Iy: 60.9 * k,
      J: 1.45 * k,
      d: 8.5 * A,
      bf: 8.11 * A
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * te,
      Iz: 272 * k,
      Iy: 88.6 * k,
      J: 3.54 * k,
      d: 9 * A,
      bf: 8.28 * A
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * te,
      Iz: 53.8 * k,
      Iy: 2.18 * k,
      J: 0.0547 * k,
      d: 9.87 * A,
      bf: 3.96 * A
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * te,
      Iz: 118 * k,
      Iy: 11.4 * k,
      J: 0.239 * k,
      d: 10.17 * A,
      bf: 5.75 * A
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * te,
      Iz: 171 * k,
      Iy: 36.6 * k,
      J: 0.583 * k,
      d: 9.73 * A,
      bf: 7.96 * A
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * te,
      Iz: 272 * k,
      Iy: 93.4 * k,
      J: 1.39 * k,
      d: 9.98 * A,
      bf: 10 * A
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * te,
      Iz: 394 * k,
      Iy: 134 * k,
      J: 3.56 * k,
      d: 10.4 * A,
      bf: 10.13 * A
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * te,
      Iz: 623 * k,
      Iy: 207 * k,
      J: 10.9 * k,
      d: 11.1 * A,
      bf: 10.34 * A
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * te,
      Iz: 88.6 * k,
      Iy: 2.36 * k,
      J: 0.0704 * k,
      d: 11.91 * A,
      bf: 3.97 * A
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * te,
      Iz: 156 * k,
      Iy: 4.66 * k,
      J: 0.293 * k,
      d: 12.31 * A,
      bf: 4.03 * A
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * te,
      Iz: 204 * k,
      Iy: 17.3 * k,
      J: 0.3 * k,
      d: 12.22 * A,
      bf: 6.49 * A
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * te,
      Iz: 310 * k,
      Iy: 44.1 * k,
      J: 0.906 * k,
      d: 11.94 * A,
      bf: 8.01 * A
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * te,
      Iz: 425 * k,
      Iy: 95.8 * k,
      J: 1.58 * k,
      d: 12.06 * A,
      bf: 9.99 * A
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * te,
      Iz: 597 * k,
      Iy: 195 * k,
      J: 4.05 * k,
      d: 12.25 * A,
      bf: 12.04 * A
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * te,
      Iz: 833 * k,
      Iy: 270 * k,
      J: 8.44 * k,
      d: 12.71 * A,
      bf: 12.16 * A
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * te,
      Iz: 1070 * k,
      Iy: 345 * k,
      J: 16 * k,
      d: 13.12 * A,
      bf: 12.32 * A
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * te,
      Iz: 199 * k,
      Iy: 7 * k,
      J: 0.208 * k,
      d: 13.74 * A,
      bf: 5 * A
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * te,
      Iz: 291 * k,
      Iy: 19.6 * k,
      J: 0.38 * k,
      d: 13.84 * A,
      bf: 6.73 * A
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * te,
      Iz: 385 * k,
      Iy: 26.7 * k,
      J: 0.798 * k,
      d: 14.1 * A,
      bf: 6.77 * A
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * te,
      Iz: 485 * k,
      Iy: 51.4 * k,
      J: 1.45 * k,
      d: 13.79 * A,
      bf: 8.03 * A
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * te,
      Iz: 640 * k,
      Iy: 107 * k,
      J: 2.19 * k,
      d: 13.89 * A,
      bf: 9.99 * A
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * te,
      Iz: 882 * k,
      Iy: 148 * k,
      J: 5.07 * k,
      d: 14.31 * A,
      bf: 10.13 * A
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * te,
      Iz: 1240 * k,
      Iy: 447 * k,
      J: 7.12 * k,
      d: 14.32 * A,
      bf: 14.61 * A
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * te,
      Iz: 1530 * k,
      Iy: 548 * k,
      J: 12.3 * k,
      d: 14.66 * A,
      bf: 14.73 * A
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * te,
      Iz: 2140 * k,
      Iy: 838 * k,
      J: 23.7 * k,
      d: 15.22 * A,
      bf: 15.65 * A
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * te,
      Iz: 301 * k,
      Iy: 9.59 * k,
      J: 0.262 * k,
      d: 15.69 * A,
      bf: 5.5 * A
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * te,
      Iz: 448 * k,
      Iy: 24.5 * k,
      J: 0.545 * k,
      d: 15.86 * A,
      bf: 6.99 * A
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * te,
      Iz: 659 * k,
      Iy: 37.2 * k,
      J: 1.52 * k,
      d: 16.26 * A,
      bf: 7.07 * A
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * te,
      Iz: 954 * k,
      Iy: 119 * k,
      J: 2.39 * k,
      d: 16.33 * A,
      bf: 10.24 * A
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * te,
      Iz: 1300 * k,
      Iy: 163 * k,
      J: 5.45 * k,
      d: 16.75 * A,
      bf: 10.37 * A
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * te,
      Iz: 510 * k,
      Iy: 15.3 * k,
      J: 0.506 * k,
      d: 17.7 * A,
      bf: 6 * A
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * te,
      Iz: 800 * k,
      Iy: 40.1 * k,
      J: 1.24 * k,
      d: 17.99 * A,
      bf: 7.5 * A
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * te,
      Iz: 1170 * k,
      Iy: 60.3 * k,
      J: 3.49 * k,
      d: 18.47 * A,
      bf: 7.64 * A
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * te,
      Iz: 1750 * k,
      Iy: 201 * k,
      J: 5.86 * k,
      d: 18.59 * A,
      bf: 11.15 * A
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * te,
      Iz: 843 * k,
      Iy: 20.7 * k,
      J: 0.77 * k,
      d: 20.66 * A,
      bf: 6.5 * A
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * te,
      Iz: 1330 * k,
      Iy: 57.5 * k,
      J: 1.83 * k,
      d: 20.99 * A,
      bf: 8.24 * A
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * te,
      Iz: 1830 * k,
      Iy: 81.4 * k,
      J: 4.34 * k,
      d: 21.43 * A,
      bf: 8.36 * A
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * te,
      Iz: 2670 * k,
      Iy: 274 * k,
      J: 6.83 * k,
      d: 21.51 * A,
      bf: 12.34 * A
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * te,
      Iz: 1350 * k,
      Iy: 29.1 * k,
      J: 1.18 * k,
      d: 23.57 * A,
      bf: 7.01 * A
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * te,
      Iz: 2100 * k,
      Iy: 82.5 * k,
      J: 2.68 * k,
      d: 23.92 * A,
      bf: 8.99 * A
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * te,
      Iz: 3100 * k,
      Iy: 259 * k,
      J: 4.72 * k,
      d: 24.06 * A,
      bf: 12.75 * A
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * te,
      Iz: 4020 * k,
      Iy: 340 * k,
      J: 9.5 * k,
      d: 24.48 * A,
      bf: 12.86 * A
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * te,
      Iz: 4580 * k,
      Iy: 391 * k,
      J: 12.6 * k,
      d: 24.74 * A,
      bf: 12.9 * A
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * te,
      Iz: 5680 * k,
      Iy: 479 * k,
      J: 21.2 * k,
      d: 25.24 * A,
      bf: 12.9 * A
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * te,
      Iz: 2850 * k,
      Iy: 106 * k,
      J: 2.81 * k,
      d: 26.71 * A,
      bf: 9.96 * A
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * te,
      Iz: 4090 * k,
      Iy: 159 * k,
      J: 6.77 * k,
      d: 27.29 * A,
      bf: 10.07 * A
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * te,
      Iz: 3610 * k,
      Iy: 115 * k,
      J: 3.06 * k,
      d: 29.53 * A,
      bf: 10.4 * A
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * te,
      Iz: 4930 * k,
      Iy: 164 * k,
      J: 6.43 * k,
      d: 30.01 * A,
      bf: 10.5 * A
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * te,
      Iz: 5900 * k,
      Iy: 187 * k,
      J: 5.3 * k,
      d: 32.86 * A,
      bf: 11.48 * A
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * te,
      Iz: 7800 * k,
      Iy: 225 * k,
      J: 7 * k,
      d: 35.55 * A,
      bf: 11.95 * A
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * te,
      Iz: 8.22 * k,
      Iy: 8.22 * k,
      J: 13.4 * k,
      d: 4 * A,
      bf: 4 * A
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * te,
      Iz: 10.7 * k,
      Iy: 10.7 * k,
      J: 17.9 * k,
      d: 4 * A,
      bf: 4 * A
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * te,
      Iz: 12.3 * k,
      Iy: 12.3 * k,
      J: 21 * k,
      d: 4 * A,
      bf: 4 * A
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * te,
      Iz: 30.3 * k,
      Iy: 30.3 * k,
      J: 48.3 * k,
      d: 6 * A,
      bf: 6 * A
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * te,
      Iz: 41.1 * k,
      Iy: 41.1 * k,
      J: 66.9 * k,
      d: 6 * A,
      bf: 6 * A
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * te,
      Iz: 49.6 * k,
      Iy: 49.6 * k,
      J: 82.2 * k,
      d: 6 * A,
      bf: 6 * A
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * te,
      Iz: 70.7 * k,
      Iy: 70.7 * k,
      J: 112 * k,
      d: 8 * A,
      bf: 8 * A
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * te,
      Iz: 98 * k,
      Iy: 98 * k,
      J: 158 * k,
      d: 8 * A,
      bf: 8 * A
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * te,
      Iz: 122 * k,
      Iy: 122 * k,
      J: 199 * k,
      d: 8 * A,
      bf: 8 * A
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * te,
      Iz: 202 * k,
      Iy: 202 * k,
      J: 323 * k,
      d: 10 * A,
      bf: 10 * A
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * te,
      Iz: 254 * k,
      Iy: 254 * k,
      J: 412 * k,
      d: 10 * A,
      bf: 10 * A
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * te,
      Iz: 355 * k,
      Iy: 355 * k,
      J: 564 * k,
      d: 12 * A,
      bf: 12 * A
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * te,
      Iz: 452 * k,
      Iy: 452 * k,
      J: 724 * k,
      d: 12 * A,
      bf: 12 * A
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * te,
      Iz: 18 * k,
      Iy: 9.58 * k,
      J: 22.6 * k,
      d: 6 * A,
      bf: 4 * A
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * te,
      Iz: 23.8 * k,
      Iy: 12.3 * k,
      J: 30.3 * k,
      d: 6 * A,
      bf: 4 * A
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * te,
      Iz: 33.6 * k,
      Iy: 11.8 * k,
      J: 33 * k,
      d: 8 * A,
      bf: 4 * A
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * te,
      Iz: 45.1 * k,
      Iy: 15 * k,
      J: 44.5 * k,
      d: 8 * A,
      bf: 4 * A
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * te,
      Iz: 46.1 * k,
      Iy: 28.2 * k,
      J: 61.3 * k,
      d: 8 * A,
      bf: 6 * A
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * te,
      Iz: 63 * k,
      Iy: 37.5 * k,
      J: 84.6 * k,
      d: 8 * A,
      bf: 6 * A
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * te,
      Iz: 103 * k,
      Iy: 47.1 * k,
      J: 115 * k,
      d: 10 * A,
      bf: 6 * A
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * te,
      Iz: 196 * k,
      Iy: 102 * k,
      J: 249 * k,
      d: 12 * A,
      bf: 8 * A
    }
  ];
  function Po() {
    const e = {};
    return Jt.forEach((h, B) => {
      h.type === "W" && (e[h.name] = B);
    }), e;
  }
  function Co() {
    const e = {};
    return Jt.forEach((h, B) => {
      h.type === "HSS" && (e[h.name] = B);
    }), e;
  }
  function ps(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: h, elements: B, elementInputs: T, nodeInputs: J, deformOutputs: be } = e, ne = h.length * 6, U = B.length, O = B.filter((oe) => oe.length === 2).length, ie = B.filter((oe) => oe.length >= 3).length, me = document.createElement("div");
    me.className = "rpt-overlay";
    let E = "";
    E += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', E += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", E += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', E += '<hr class="rpt-sep"/>', E += "<h2>1. Input Data</h2>", E += '<table class="rpt-info"><tbody>', E += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, E += `<tr><td>Number of elements</td><td class="val">${U} (${O} frames, ${ie} shells)</td></tr>`, E += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', E += `<tr><td>Total DOFs</td><td class="val">${ne}</td></tr>`, E += "</tbody></table>", E += "<h3>1.1 Node Coordinates</h3>", E += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((oe, se) => {
      E += `<tr><td>${se}</td><td>${Ee(oe[0])}</td><td>${Ee(oe[1])}</td><td>${Ee(oe[2])}</td></tr>`;
    }), E += "</tbody></table>", E += "<h3>1.2 Element Connectivity</h3>", E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', B.forEach((oe, se) => {
      var _a2, _b2, _c2, _d2;
      const ye = oe.length === 2, Se = oe.map((Je) => h[Je]), Fe = ye ? eo(Pt(Se[1], Se[0])) : 0, Pe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(se)) ?? 0, Xe = ((_b2 = T.areas) == null ? void 0 : _b2.get(se)) ?? 0, _e2 = ((_c2 = T.momentsOfInertiaZ) == null ? void 0 : _c2.get(se)) ?? 0, ct = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(se)) ?? 0;
      E += `<tr><td>${se}</td><td>${ye ? "Frame" : "Shell"}</td><td>${oe.join(" \u2192 ")}</td>`, E += `<td>${Ee(Fe)}</td><td>${Ee(Pe)}</td><td>${Ee(Xe)}</td><td>${Ee(_e2)}</td><td>${Ee(ct)}</td></tr>`;
    }), E += "</tbody></table>", E += "<h2>2. Element Formulation</h2>", O > 0 && (E += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", E += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", E += "<h4>2.1.1 Shape Functions</h4>", E += "<p><b>Axial</b> (linear interpolation):</p>", E += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', E += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', E += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', E += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', E += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', E += "</tbody></table>", E += us(), E += "<p><b>Torsion</b> (linear): same as axial.</p>", E += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", E += "<p>The B matrix relates nodal displacements to internal strains:</p>", E += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', E += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', E += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', E += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', E += "<h4>2.1.3 Constitutive Relations D</h4>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', E += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', E += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', E += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', E += "</tbody></table>", E += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", E += "<p>Obtained by analytical integration:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', E += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", E += '<div class="rpt-eq-small">', E += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", E += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", E += "</div>", E += "<h4>2.1.5 Transformation Matrix T</h4>", E += "<p>Direction cosines of element axis:</p>", E += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', E += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', E += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', E += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", E += "<h4>2.1.6 Global Stiffness Matrix</h4>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), E += "<h2>3. Numerical Results per Element</h2>", E += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let oe = 0; oe < U; oe++) {
      const se = B[oe], ye = se.map((xo) => h[xo]);
      if (!(se.length === 2)) continue;
      const Fe = eo(Pt(ye[1], ye[0])), Pe = ((_a = T.elasticities) == null ? void 0 : _a.get(oe)) ?? 0, Xe = ((_b = T.areas) == null ? void 0 : _b.get(oe)) ?? 0, _e2 = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(oe)) ?? 0, ct = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(oe)) ?? 0, Je = ((_e = T.shearModuli) == null ? void 0 : _e.get(oe)) ?? 0, at = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(oe)) ?? 0;
      let st = null, tt = null, yt = null;
      try {
        st = Ho(ye, T, oe), tt = No(ye), yt = gt(yn(tt), gt(st, tt));
      } catch {
        continue;
      }
      const Yt = Pt(ye[1], ye[0]), ht = Yt[0] / Fe, $t = Yt[1] / Fe, bo = Yt[2] / Fe;
      E += '<div class="rpt-elem-block">', E += `<h3 class="rpt-elem-title" data-toggle="elem${oe}">\u25B6 Element ${oe} \u2014 Nodes ${se[0]} \u2192 ${se[1]}, L = ${Ee(Fe)}</h3>`, E += `<div id="rpt-elem${oe}" class="rpt-elem-body" style="display:none">`, E += "<h4>Properties (numerical substitution)</h4>", E += '<div class="rpt-eq-small">', E += `E = ${Ee(Pe)} &nbsp;&nbsp; A = ${Ee(Xe)} &nbsp;&nbsp; I<sub>z</sub> = ${Ee(_e2)} &nbsp;&nbsp; I<sub>y</sub> = ${Ee(ct)} &nbsp;&nbsp; G = ${Ee(Je)} &nbsp;&nbsp; J = ${Ee(at)}<br/>`, E += `EA/L = ${Ee(Pe)}\xB7${Ee(Xe)}/${Ee(Fe)} = <b>${Ee(Pe * Xe / Fe)}</b><br/>`, E += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ee(Pe)}\xB7${Ee(_e2)}/${Ee(Fe)}\xB3 = <b>${Ee(12 * Pe * _e2 / Fe ** 3)}</b><br/>`, E += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ee(Pe)}\xB7${Ee(ct)}/${Ee(Fe)}\xB3 = <b>${Ee(12 * Pe * ct / Fe ** 3)}</b><br/>`, E += `GJ/L = ${Ee(Je)}\xB7${Ee(at)}/${Ee(Fe)} = <b>${Ee(Je * at / Fe)}</b>`, E += "</div>", E += "<h4>Direction cosines</h4>", E += `<div class="rpt-eq-small">l = ${_o(ht)}, m = ${_o($t)}, n = ${_o(bo)}, D = ${_o(Math.sqrt(ht ** 2 + $t ** 2))}</div>`, E += "<h4>K<sub>local</sub> (12\xD712)</h4>", E += xn(st, 12), E += "<h4>T \u2014 Transformation (12\xD712)</h4>", E += xn(tt, 12), E += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", E += xn(yt, 12), E += "<h4>Assembly</h4>", E += `<div class="rpt-eq-small">Global DOFs: node ${se[0]} \u2192 [${se[0] * 6}..${se[0] * 6 + 5}], node ${se[1]} \u2192 [${se[1] * 6}..${se[1] * 6 + 5}]</div>`, E += "</div></div>";
    }
    E += "<h2>4. Global Assembly</h2>", E += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${U - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, E += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", E += ms(B, h.length), E += "<h2>5. Boundary Conditions</h2>";
    const ee = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (E += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of ee) E += `<th>${oe}</th>`;
      E += "</tr></thead><tbody>", J.supports.forEach((oe, se) => {
        E += `<tr><td>${se}</td>`, oe.forEach((ye, Se) => {
          ye && ve.push(se * 6 + Se), E += `<td class="${ye ? "fixed" : ""}">${ye ? "Fixed" : "Free"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += `<div class="rpt-eq-small">Fixed DOFs: [${ve.join(", ")}] \u2192 ${ve.length} constraints<br/>`, E += `Free DOFs: ${ne} \u2212 ${ve.length} = <b>${ne - ve.length}</b></div>`, E += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const oe = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const se of oe) E += `<th>${se}</th>`;
      E += "</tr></thead><tbody>", J.loads.forEach((se, ye) => {
        E += `<tr><td>${ye}</td>`, se.forEach((Se) => {
          const Fe = Math.abs(Se) > 1e-10;
          E += `<td class="${Fe ? "nz" : ""}">${Fe ? Ee(Se) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>6. Solution</h2>", E += "<p>After removing fixed DOFs, the reduced system is:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', E += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", E += "<h3>6.1 Nodal Displacements</h3>", be == null ? void 0 : be.deformations) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of ee) E += `<th>${oe}</th>`;
      E += "</tr></thead><tbody>", be.deformations.forEach((oe, se) => {
        E += `<tr><td>${se}</td>`, oe.forEach((ye) => {
          const Se = Math.abs(ye) > 1e-10;
          E += `<td class="${Se ? "nz" : ""}">${Ee(ye, 6)}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h3>6.2 Reactions</h3>", E += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', be == null ? void 0 : be.reactions) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of ee) E += `<th>${oe}</th>`;
      E += "</tr></thead><tbody>", be.reactions.forEach((oe, se) => {
        E += `<tr><td>${se}</td>`, oe.forEach((ye) => {
          const Se = Math.abs(ye) > 1e-10;
          E += `<td class="${Se ? "nz-react" : ""}">${Se ? Ee(ye, 4) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>7. Internal Forces</h2>", E += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", E += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', E += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', be == null ? void 0 : be.deformations) {
      const oe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const se of oe) E += `<th>${se}<sub>i</sub></th>`;
      for (const se of oe) E += `<th>${se}<sub>j</sub></th>`;
      E += "</tr></thead><tbody>";
      for (let se = 0; se < U; se++) {
        const ye = B[se];
        if (ye.length !== 2) continue;
        const Se = ye.map((Fe) => h[Fe]);
        try {
          const Fe = Ho(Se, T, se), Pe = No(Se), Xe = [];
          for (const Je of ye) {
            const at = ((_g = be.deformations) == null ? void 0 : _g.get(Je)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Xe.push(...at);
          }
          const _e2 = gt(Pe, Xe), ct = gt(Fe, _e2);
          E += `<tr><td>${se}</td><td>${ye.join("\u2192")}</td>`;
          for (let Je = 0; Je < 12; Je++) {
            const at = Math.abs(ct[Je]) > 1e-10;
            E += `<td class="${at ? "nz" : ""}">${Ee(ct[Je], 2)}</td>`;
          }
          E += "</tr>";
        } catch {
        }
      }
      E += "</tbody></table>";
    }
    const et = `
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
    return me.innerHTML = et + E, (_h = me.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => me.remove()), me.querySelectorAll("[data-toggle]").forEach((oe) => {
      oe.addEventListener("click", () => {
        const se = oe.dataset.toggle, ye = me.querySelector(`#rpt-${se}`);
        if (ye) {
          const Se = ye.style.display !== "none";
          ye.style.display = Se ? "none" : "", oe.textContent = oe.textContent.replace(/^[▼▶]/, Se ? "\u25B6" : "\u25BC");
        }
      });
    }), me;
  }
  function Ee(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function _o(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function xn(e, h) {
    var _a;
    const B = Math.min(h, 12);
    let T = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < B; J++) {
      T += "<tr>";
      for (let be = 0; be < B; be++) {
        const ne = ((_a = e[J]) == null ? void 0 : _a[be]) ?? 0, U = Math.abs(ne) < 1e-10;
        T += `<td class="${U ? "z" : ""} ${J === be && !U ? "diag" : ""}">${U ? "0" : fs(ne)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", h > B && (T += `<div style="color:#888;font-size:9pt">(showing ${B}\xD7${B} of ${h}\xD7${h})</div>`), T += "</div>", T;
  }
  function fs(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function us() {
    const ne = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (O) => 1 - 3 * O ** 2 + 2 * O ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (O) => O * (1 - O) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (O) => 3 * O ** 2 - 2 * O ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (O) => O ** 2 * (O - 1)
      }
    ];
    let U = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    U += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, U += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', U += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, U += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, U += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const O of ne) {
      let ie = "";
      for (let ve = 0; ve <= 80; ve++) {
        const et = ve / 80, oe = 30 + et * 540, se = 180 / 2 - O.fn(et) * 60;
        ie += (ve === 0 ? "M" : "L") + `${oe.toFixed(1)},${se.toFixed(1)}`;
      }
      U += `<path d="${ie}" fill="none" stroke="${O.color}" stroke-width="2.5"/>`;
      const me = 0.75, E = 30 + me * 540 + 8, ee = 180 / 2 - O.fn(me) * 60 - 6;
      U += `<text x="${E}" y="${ee}" fill="${O.color}" font-size="11" font-weight="bold" font-family="sans-serif">${O.name}</text>`;
    }
    return U += "</svg>", U;
  }
  function ms(e, h) {
    const B = h * 6, T = Math.min(B, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let ne = 0; ne < T; ne++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
    J += "</tr>";
    const be = Array.from({
      length: T
    }, () => Array(T).fill(0));
    for (let ne = 0; ne < e.length; ne++) {
      const U = e[ne].map((O) => O * 6);
      for (const O of U) for (const ie of U) for (let me = 0; me < 6; me++) for (let E = 0; E < 6; E++) {
        const ee = O + me, ve = ie + E;
        ee < T && ve < T && be[ee][ve]++;
      }
    }
    for (let ne = 0; ne < T; ne++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${ne}</td>`;
      for (let U = 0; U < T; U++) {
        const O = be[ne][U], ie = O === 0 ? "#fff" : O === 1 ? "#e8f0fe" : O === 2 ? "#c6dcf5" : "#a0c4e8", me = O === 0 ? "" : O.toString();
        J += `<td style="background:${ie};color:#003366">${me}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", B > T && (J += `<div style="color:#888;font-size:9pt">(showing ${T}\xD7${T} of ${B}\xD7${B})</div>`), J;
  }
  let gn = false;
  function bs(e) {
    if (gn || window.katex) {
      gn = true, e();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const B = document.createElement("script");
    B.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", B.onload = () => {
      gn = true, e();
    }, document.head.appendChild(B);
  }
  function ma(e, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function xs(e, h, B, T, J, be) {
    var _a, _b, _c, _d, _e2, _f;
    const ne = B[e], U = ne.map((tt) => h[tt]), O = ne.length === 2, ie = O ? eo(Pt(U[1], U[0])) : 0, me = ((_a = T.elasticities) == null ? void 0 : _a.get(e)) ?? 0, E = ((_b = T.areas) == null ? void 0 : _b.get(e)) ?? 0, ee = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ve = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, et = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(e)) ?? 0, oe = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let se = null, ye = null, Se = null;
    try {
      se = Ho(U, T, e), ye = No(U), Se = gt(yn(ye), gt(se, ye));
    } catch {
    }
    const Fe = O ? Pt(U[1], U[0]) : [
      0,
      0,
      0
    ], Pe = ie > 0 ? Fe[0] / ie : 0, Xe = ie > 0 ? Fe[1] / ie : 0, _e = ie > 0 ? Fe[2] / ie : 0, ct = Math.sqrt(Pe ** 2 + Xe ** 2), Je = [];
    if ((J == null ? void 0 : J.deformations) && O) for (const tt of ne) {
      const yt = J.deformations.get(tt) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Je.push(...yt);
    }
    let at = [], st = [];
    if (Je.length === 12 && ye && se) {
      try {
        at = gt(ye, Je);
      } catch {
        at = Array(12).fill(0);
      }
      try {
        st = gt(se, at);
      } catch {
        st = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: ne,
      elmNodes: U,
      isFrame: O,
      L: ie,
      E: me,
      A: E,
      Iz: ee,
      Iy: ve,
      G: et,
      J: oe,
      kLocal: se,
      T: ye,
      kGlobal: Se,
      l: Pe,
      m: Xe,
      n: _e,
      D: ct,
      uGlobal: Je,
      uLocal: at,
      fLocal: st,
      dOut: J,
      aOut: be,
      totalNodes: h.length
    };
  }
  function gs(e, h, B, T, J, be) {
    var _a, _b;
    const ne = xs(e, h, B, T, J, be), U = document.createElement("div");
    return U.className = "er-panel", U.innerHTML = $s + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${ne.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${ne.elem.join(" \u2192 ")} \u2014 L = ${ge(ne.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${hs(ne)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ba(ne)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${vs(ne)}</div>
  `, U.querySelectorAll(".er-tab").forEach((O) => {
      O.addEventListener("click", () => {
        U.querySelectorAll(".er-tab").forEach((me) => me.classList.remove("active")), O.classList.add("active");
        const ie = O.dataset.tab;
        U.querySelectorAll(".er-body").forEach((me) => me.style.display = "none"), U.querySelector(`#er-body-${ie}`).style.display = "";
      });
    }), (_a = U.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => U.remove()), (_b = U.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const O = U.classList.toggle("er-fullscreen-mode"), ie = U.querySelector("#er-fullscreen");
      ie && (ie.textContent = O ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const O = U.querySelector("#er-sf-canvas");
      O && hn(O);
      const ie = U.querySelector("#er-sf-canvas-math");
      ie && hn(ie);
    }, 50), bs(() => {
      const O = U.querySelector("#er-body-math");
      O && (O.innerHTML = ba(ne)), setTimeout(() => {
        const ie = U.querySelector("#er-sf-canvas-math");
        ie && hn(ie);
      }, 50), U.querySelectorAll(".er-deriv-header").forEach((ie) => {
        ie.addEventListener("click", () => {
          const me = ie.dataset.toggle, E = U.querySelector(`#er-${me}`);
          E && (E.style.display = E.style.display === "none" ? "" : "none");
        });
      });
    }), U;
  }
  function hs(e) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${ge(e.E)}</td><td>A</td><td>${ge(e.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${ge(e.Iz)}</td><td>I<sub>y</sub></td><td>${ge(e.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${ge(e.G)}</td><td>J</td><td>${ge(e.J)}</td></tr>`, h += "</table>", e.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, h += ko(e.kLocal)), e.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += ko(e.T)), e.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += ko(e.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const B = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let T = 0; T < e.elem.length; T++) {
        h += `<div class="er-sub">Nodo ${e.elem[T]}: `;
        for (let J = 0; J < 6; J++) {
          const be = e.uGlobal[T * 6 + J];
          h += `${B[J]}=<span class="${Math.abs(be) > 1e-10 ? "nz" : ""}">${ge(be, 6)}</span> `;
        }
        h += "</div>";
      }
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (h += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((B) => B !== 0)) {
      const B = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const T of B) h += `<th>${T}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let T = 0; T < 6; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[T], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let T = 6; T < 12; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[T], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function ba(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const B = (me) => ma(me), T = (me) => ma(me, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${T("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${B("\\text{Nodo } i")} = (${e.elmNodes[0].map((me) => ge(me)).join(", ")})<br/>`, h += `${B("\\text{Nodo } j")} = (${e.elmNodes[1].map((me) => ge(me)).join(", ")})<br/>`, h += `${T(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${ge(e.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${T("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${T("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${B("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${T("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${B("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${T("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${T("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${T("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${T("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${B("I_z")})</div>`, h += `<div class="er-eq">${T("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${B("I_y")})</div>`, h += `<div class="er-eq">${T("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${T("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${T(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${ge(e.E)} \\times ${ge(e.A)} = \\mathbf{${ge(e.E * e.A)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${ge(e.E)} \\times ${ge(e.Iz)} = \\mathbf{${ge(e.E * e.Iz)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${ge(e.E)} \\times ${ge(e.Iy)} = \\mathbf{${ge(e.E * e.Iy)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${ge(e.G)} \\times ${ge(e.J)} = \\mathbf{${ge(e.G * e.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${B("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, be = e.E * e.Iz / e.L ** 3, ne = e.E * e.Iy / e.L ** 3, U = e.G * e.J / e.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${T("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${T("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${B("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${T("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${ge(e.E)}\\times${ge(e.A)}}{${ge(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${T(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${ge(J)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${B("v(\\xi)")}</p>`, h += `<div class="er-eq">${T("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${T("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${T("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${B("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${T("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${B("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${T("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${ge(e.E)} \\times ${ge(e.Iz)}}{${ge(e.L)}^3} = \\mathbf{${ge(12 * be)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${B("\\theta_x")} y ${B("GJ")}:</p>`, h += `<div class="er-eq">${T(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${ge(e.G)}\\times${ge(e.J)}}{${ge(e.L)}} = \\mathbf{${ge(U)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${B("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${T("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${ge(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${T(`\\frac{EA}{L} = \\mathbf{${ge(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${ge(12 * be)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${ge(12 * ne)}}`)}</div>`, h += `<div class="er-eq">${T(`\\frac{GJ}{L} = \\mathbf{${ge(U)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${ge(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${ge(4 * e.E * e.Iz / e.L)}}`)}</div>`, h += `<div class="er-eq">${T(`\\frac{6EI_z}{L^2} = \\mathbf{${ge(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${ge(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (h += `<div class="er-subsec">Resultado: ${B("\\mathbf{K}_{local}")} (12x12)</div>`, h += ko(e.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${T(`l = \\frac{x_j - x_i}{L} = ${Ao(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Ao(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Ao(e.n)}`)}</div>`, h += `<div class="er-eq">${T(`D = \\sqrt{l^2 + m^2} = ${Ao(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${B(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const me = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${T(me)}</div>`;
    } else h += `<div class="er-eq">${T("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${T("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${B("\\mathbf{K}_{global}")} = ${B("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (h += ko(e.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const O = e.elem[0] * 6, ie = e.elem[1] * 6;
    if (h += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${O} \\ldots ${O + 5}]`)}</div>`, h += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${ie} \\ldots ${ie + 5}]`)}</div>`, h += `<div class="er-eq">${T("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${T("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${T("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((me) => me !== 0)) {
      const me = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const E of me) h += `<th>${E}</th>`;
      h += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let E = 0; E < 6; E++) h += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[E], 3)}</td>`;
      h += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let E = 6; E < 12; E++) h += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[E], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function vs(e) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${ge(e.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${ge(e.E)}</td></tr>`, h += `<tr><td>A</td><td>${ge(e.A)}</td></tr>`, h += "</table>", e.uGlobal.length > 0) {
      h += '<div class="er-section-title">Desplazamientos</div>';
      const B = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const T of B) h += `<th>${T}</th>`;
      h += "</tr>";
      for (let T = 0; T < e.elem.length; T++) {
        h += `<tr><td>${e.elem[T]}</td>`;
        for (let J = 0; J < 6; J++) {
          const be = e.uGlobal[T * 6 + J];
          h += `<td class="${Math.abs(be) > 1e-10 ? "nz" : ""}">${ge(be, 6)}</td>`;
        }
        h += "</tr>";
      }
      h += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((B) => B !== 0)) {
      h += '<div class="er-section-title">Fuerzas internas</div>';
      const B = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const T of B) h += `<th>${T}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let T = 0; T < 6; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[T], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let T = 6; T < 12; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[T], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function ge(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Ao(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ko(e) {
    var _a;
    const h = e.length, B = Math.min(h, 12);
    let T = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < B; J++) {
      T += "<tr>";
      for (let be = 0; be < B; be++) {
        const ne = ((_a = e[J]) == null ? void 0 : _a[be]) ?? 0, U = Math.abs(ne) < 1e-10;
        T += `<td class="${U ? "z" : ""} ${J === be && !U ? "diag" : ""}">${U ? "0" : ys(ne)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", h > B && (T += `<div style="color:var(--fem-label);font-size:9px">(${B}\xD7${B} de ${h}\xD7${h})</div>`), T += "</div>", T;
  }
  function ys(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function hn(e) {
    const h = e.getContext("2d");
    if (!h) return;
    const B = e.width, T = e.height, J = 30, be = B - 2 * J, ne = (T - 3 * J) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, B, T);
    const U = (O, ie, me) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(J, O, be, ne), h.strokeStyle = "#444", h.beginPath(), h.moveTo(J, O + ne / 2), h.lineTo(J + be, O + ne / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(ie, J + 4, O + 14);
      for (const ee of me) {
        h.strokeStyle = ee.color, h.lineWidth = 2.5, h.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const et = ve / 100, oe = J + et * be, se = O + ne / 2 - ee.fn(et) * (ne / 2 * 0.85);
          ve === 0 ? h.moveTo(oe, se) : h.lineTo(oe, se);
        }
        h.stroke();
      }
      let E = J + be - 90;
      for (const ee of me) h.fillStyle = ee.color, h.font = "bold 10px sans-serif", h.fillText(ee.label, E, O + ne - 6), E += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", J, O + ne + 12), h.fillText("1", J + be - 6, O + ne + 12), h.fillText("\u03BE", J + be / 2, O + ne + 12);
    };
    U(J, "Axial (lineal)", [
      {
        fn: (O) => 1 - O,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (O) => O,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), U(J + ne + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (O) => 1 - 3 * O * O + 2 * O * O * O,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (O) => O * (1 - O) * (1 - O),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (O) => 3 * O * O - 2 * O * O * O,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (O) => O * O * (O - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const $s = `<style>
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
</style>`, Mo = [
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
  let Ro = false, to = null, vt = null, Qe = null, Ve = null;
  function ws() {
    Ve = document.createElement("button"), Ve.id = "help-tour-btn", Ve.innerHTML = "?", Ve.title = "Ayuda interactiva \u2014 Tour guiado", Ve.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 99999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, Ve.addEventListener("mouseenter", () => {
      Ve.style.transform = "scale(1.15)", Ve.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Ve.addEventListener("mouseleave", () => {
      Ve.style.transform = "scale(1)", Ve.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Ve.addEventListener("click", () => {
      Ro ? $n() : Ms();
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
  `, document.head.appendChild(e), Ve;
  }
  function Ms() {
    Ro = true, Ve && (Ve.innerHTML = "\u2715", Ve.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Ve.style.animation = "none"), to = document.createElement("div"), to.id = "tour-overlay", to.style.cssText = `
    position: fixed; inset: 0; z-index: 99990;
    pointer-events: none;
  `, document.body.appendChild(to), mo(0);
  }
  function $n() {
    Ro = false, Ve && (Ve.innerHTML = "?", Ve.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Ve.style.animation = "helpPulse 2s infinite"), vt && (vt.remove(), vt = null), Qe && (Qe.remove(), Qe = null), to && (to.remove(), to = null);
  }
  function mo(e) {
    var _a, _b;
    if (e >= Mo.length) {
      ks();
      return;
    }
    const h = Mo[e], B = document.querySelector(h.selector);
    if (!B) {
      mo(e + 1);
      return;
    }
    vt && vt.remove(), Qe && Qe.remove();
    const T = B.getBoundingClientRect();
    vt = document.createElement("div"), vt.style.cssText = `
    position: fixed;
    left: ${T.left - 6}px; top: ${T.top - 6}px;
    width: ${T.width + 12}px; height: ${T.height + 12}px;
    border-radius: 8px;
    z-index: 99991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
  `, document.body.appendChild(vt), Qe = document.createElement("div");
    const J = h.position || "bottom";
    let be = T.left, ne = T.bottom + 16;
    const U = 320;
    J === "top" && (ne = T.top - 16), J === "left" && (be = T.left - U - 16, ne = T.top), J === "right" && (be = T.right + 16, ne = T.top), be + U > window.innerWidth - 20 && (be = window.innerWidth - U - 20), be < 10 && (be = 10), ne + 200 > window.innerHeight - 20 && (ne = T.top - 180), Qe.style.cssText = `
    position: fixed;
    left: ${be}px; top: ${ne}px;
    width: ${U}px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #0099ff;
    border-radius: 12px;
    padding: 16px 18px;
    z-index: 99992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', sans-serif;
  `, Qe.innerHTML = `
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${h.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Mo.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${h.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Mo.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Mo.map((ie, me) => `<div style="width:${me === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${me === e ? "#0099ff" : me < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Qe), (_a = Qe.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      mo(e + 1);
    }), (_b = Qe.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      mo(e - 1);
    });
    const O = (ie) => {
      if (!Ro) {
        document.removeEventListener("keydown", O);
        return;
      }
      (ie.key === "ArrowRight" || ie.key === "Enter") && (mo(e + 1), document.removeEventListener("keydown", O)), ie.key === "ArrowLeft" && (mo(Math.max(0, e - 1)), document.removeEventListener("keydown", O)), ie.key === "Escape" && ($n(), document.removeEventListener("keydown", O));
    };
    document.addEventListener("keydown", O);
  }
  function ks() {
    var _a;
    vt && (vt.remove(), vt = null), Qe && (Qe.remove(), Qe = null), Qe = document.createElement("div"), Qe.style.cssText = `
    position: fixed;
    left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 400px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: #e0e0e0;
    border: 2px solid #00cc66;
    border-radius: 16px;
    padding: 30px;
    z-index: 99992;
    pointer-events: auto;
    animation: tooltipSlideIn 0.3s ease-out;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
  `, Qe.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Qe), (_a = Qe.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => $n());
  }
  xa = fo.state(false);
  Ts = function(e) {
    e.nodeInputs || (e.nodeInputs = fo.state({})), e.elementInputs || (e.elementInputs = fo.state({})), e.deformOutputs || (e.deformOutputs = fo.state({})), e.analyzeOutputs || (e.analyzeOutputs = fo.state({}));
    let h = "tonf", B = "m", T = Qt(h, B), J = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const be = {
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
    }, ne = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
    let O = false;
    const ie = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Map();
    let E = "", ee = {}, ve = null, et = "", oe = [], se = [], ye = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), _e = [], ct = 0.2, Je = 2, at = 2, st = false, tt = 2, yt = "x", Yt = /* @__PURE__ */ new Set(), ht = true, $t = 0.15, bo = 2, xo = 2, Oo = /* @__PURE__ */ new Set();
    const oo = () => ({
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
    }), ga = (t, o) => ({
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
      }, oo),
      vigasY: Array.from({
        length: o
      }, oo)
    }), he = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let lt = 0, mt = 3, bt = false, ot = 0, je = null, Ct = 0, It = [], So = 1, zo = true;
    const go = ds();
    go.div.style.display = "none";
    function Bo() {
      const t = Fo()[E];
      return t && t[lt] ? t[lt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let _t = [], At = [], Ge = null;
    function wn() {
      if (!Ge) return;
      const t = Ce();
      t && t.scene.remove(Ge), Ge.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ge = null;
    }
    function Mn(t, o, n, l, a) {
      wn();
      const r = Ce();
      if (!r) return;
      Ge = new fa(), Ge.name = "gridAxes";
      const i = Math.min(...t), c = Math.max(...t), u = Math.min(...o), d = Math.max(...o), s = c - i || 1, m = d - u || 1, $ = Math.max(s, m), y = $ * 0.08, x = t.map((b, f) => String.fromCharCode(65 + f)), p = o.map((b, f) => String(f + 1)), g = $ * 0.018, w = o.length <= 1, z = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (w) {
          const v = -y - g * 1.5;
          Wo(f, 0, 0, f, 0, v + g, z, Ge), Jo(x[b] || `${b}`, f, 0, v, g, Ge);
        } else {
          const v = u - y - g * 1.5;
          Wo(f, u, 0, f, v + g, 0, z, Ge), Jo(x[b] || `${b}`, f, v, 0, g, Ge);
        }
      }
      if (!w) for (let b = 0; b < o.length; b++) {
        const f = o[b], v = i - y - g * 1.5;
        Wo(i, f, 0, v + g, f, 0, z, Ge), Jo(p[b] || `${b}`, v, f, 0, g, Ge);
      }
      const S = g * 1.8, H = y * 1.2, C = y * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], v = t[b + 1], M = Math.abs(v - f), L = (f + v) / 2, N = `${M.toFixed(2)} m`;
        w ? (jo(N, L, 0, -H, S, Ge), Do(f, 0, -H * 0.7, v, 0, -H * 0.7, 16763904, Ge)) : (jo(N, L, u - C, 0, S, Ge), Do(f, u - C * 0.7, 0, v, u - C * 0.7, 0, 16763904, Ge));
      }
      if (!w) for (let b = 0; b < o.length - 1; b++) {
        const f = o[b], v = o[b + 1], M = Math.abs(v - f), L = (f + v) / 2, N = `${M.toFixed(2)} m`;
        jo(N, i - H, L, 0, S, Ge), Do(i - H * 0.7, f, 0, i - H * 0.7, v, 0, 16763904, Ge);
      }
      Ge.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), r.scene.add(Ge), r.render();
    }
    function jo(t, o, n, l, a, r) {
      const i = document.createElement("canvas"), c = 256, u = 64;
      i.width = c, i.height = u;
      const d = i.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const s = 8;
      d.beginPath(), d.moveTo(s, 0), d.lineTo(c - s, 0), d.quadraticCurveTo(c, 0, c, s), d.lineTo(c, u - s), d.quadraticCurveTo(c, u, c - s, u), d.lineTo(s, u), d.quadraticCurveTo(0, u, 0, u - s), d.lineTo(0, s), d.quadraticCurveTo(0, 0, s, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, c / 2, u / 2);
      const m = new ss(i);
      m.minFilter = ls;
      const $ = new bn({
        map: m,
        transparent: true,
        depthTest: false
      }), y = new mn($);
      y.position.set(o, n, l);
      const x = c / u;
      y.scale.set(a * x, a, 1), y.renderOrder = 999, r.add(y);
    }
    function Do(t, o, n, l, a, r, i, c) {
      const u = [
        new ue(t, o, n),
        new ue(l, a, r)
      ], d = new Kt().setFromPoints(u), s = new wo({
        color: i,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new un(d, s);
      m.renderOrder = 998, c.add(m);
    }
    function Wo(t, o, n, l, a, r, i, c) {
      const u = new Kt().setFromPoints([
        new ue(t, o, n),
        new ue(l, a, r)
      ]), d = new pa({
        color: i,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(r - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(r - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), s = new un(u, d);
      s.computeLineDistances(), c.add(s);
    }
    function Jo(t, o, n, l, a, r) {
      const i = document.createElement("canvas"), c = 128;
      i.width = c, i.height = c;
      const u = i.getContext("2d");
      u.beginPath(), u.arc(c / 2, c / 2, c * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = c * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${c * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(t, c / 2, c / 2 + c * 0.02);
      const d = new ua(i);
      d.needsUpdate = true;
      const s = new bn({
        map: d,
        depthTest: false,
        transparent: true
      }), m = new mn(s);
      m.position.set(o, n, l);
      const $ = a * 2;
      m.scale.set($, $, 1), m.renderOrder = 100, r.add(m);
    }
    const ze = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], a = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), Le(), a;
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
        const n = e.elements.val.map(([l, a]) => {
          const r = l > t ? l - 1 : l, i = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            r,
            i
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Le();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Le(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Le();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Le();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Le();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Le();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Le();
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
          dof: n.map((a) => a ? 1 : 0).join("")
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
        var _a2, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), ye = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), _t = [], At = [], wn();
        const t = re.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Le();
      },
      frame(t, o, n = 0, l = 0) {
        ze.clear();
        const a = [];
        n > 0 && a.push(-n);
        let r = 0;
        a.push(r);
        for (const x of t) r += x, a.push(r);
        l > 0 && a.push(r + l);
        const i = [
          0
        ];
        let c = 0;
        for (const x of o) c += x, i.push(c);
        const u = (x) => n > 0 && x === 0 || l > 0 && x === a.length - 1, d = {}, s = [];
        for (let x = 0; x < i.length; x++) for (let p = 0; p < a.length; p++) x === 0 && u(p) || (d[`${p},${x}`] = s.length, s.push([
          a[p],
          0,
          i[x]
        ]));
        const m = [];
        ye = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set();
        for (let x = 0; x < i.length - 1; x++) for (let p = 0; p < a.length; p++) u(p) || (ye.add(m.length), m.push([
          d[`${p},${x}`],
          d[`${p},${x + 1}`]
        ]));
        for (let x = 1; x < i.length; x++) for (let p = 0; p < a.length - 1; p++) Se.add(m.length), m.push([
          d[`${p},${x}`],
          d[`${p + 1},${x}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), y = Bo();
        for (let x = 0; x < a.length; x++) {
          if (u(x)) continue;
          const p = `${x},0`;
          d[p] !== void 0 && $.set(d[p], [
            ...y
          ]);
        }
        return e.nodes.val = s, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), _t = [
          ...a
        ], At = [
          0
        ], setTimeout(() => {
          Ke(), Mn(a, [
            0
          ]), Wn(), Jn();
        }, 50), Le(), {
          nodes: s.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, a = 0, r = 0, i = 0, c = 0, u = 1) {
        ze.clear();
        const d = [];
        a > 0 && d.push(-a), d.push(0);
        for (const f of t) d.push(d[d.length - 1] + f);
        r > 0 && d.push(d[d.length - 1] + r);
        const s = [];
        i > 0 && s.push(-i), s.push(0);
        for (const f of o) s.push(s[s.length - 1] + f);
        c > 0 && s.push(s[s.length - 1] + c);
        const m = [
          0
        ];
        for (const f of n) m.push(m[m.length - 1] + f);
        const $ = (f) => a > 0 && f === 0 || r > 0 && f === d.length - 1, y = (f) => i > 0 && f === 0 || c > 0 && f === s.length - 1, x = (f, v) => $(f) || y(v), p = [], g = {};
        for (let f = 0; f < m.length; f++) for (let v = 0; v < s.length; v++) for (let M = 0; M < d.length; M++) f === 0 && x(M, v) || (g[`${M},${v},${f}`] = p.length, p.push([
          d[M],
          s[v],
          m[f]
        ]));
        const w = p.length, z = [];
        ye = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map();
        const S = [];
        for (let f = 0; f < m.length - 1; f++) for (let v = 0; v < s.length; v++) for (let M = 0; M < d.length; M++) x(M, v) || S.push({
          el: [
            g[`${M},${v},${f}`],
            g[`${M},${v},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, v], floor: M } of S) {
          if (u <= 1) {
            ye.add(z.length), Pe.set(z.length, M), z.push([
              f,
              v
            ]);
            continue;
          }
          const L = p[f], N = p[v];
          let q = f;
          for (let I = 1; I < u; I++) {
            const P = I / u, _ = p.length;
            p.push([
              L[0] + (N[0] - L[0]) * P,
              L[1] + (N[1] - L[1]) * P,
              L[2] + (N[2] - L[2]) * P
            ]), ye.add(z.length), Pe.set(z.length, M), z.push([
              q,
              _
            ]), q = _;
          }
          ye.add(z.length), Pe.set(z.length, M), z.push([
            q,
            v
          ]);
        }
        Xe = /* @__PURE__ */ new Map();
        const H = [];
        for (let f = 1; f < m.length; f++) for (let v = 0; v < s.length; v++) for (let M = 0; M < d.length - 1; M++) H.push({
          el: [
            g[`${M},${v},${f}`],
            g[`${M + 1},${v},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: M
        });
        for (let f = 1; f < m.length; f++) for (let v = 0; v < d.length; v++) for (let M = 0; M < s.length - 1; M++) H.push({
          el: [
            g[`${v},${M},${f}`],
            g[`${v},${M + 1},${f}`]
          ],
          floor: f - 1,
          dir: "y",
          bay: M
        });
        for (const { el: [f, v], floor: M, dir: L, bay: N } of H) {
          const q = p[f], I = p[v];
          let P = f;
          for (let Y = 1; Y < l; Y++) {
            const G = Y / l, Z = p.length;
            p.push([
              q[0] + (I[0] - q[0]) * G,
              q[1] + (I[1] - q[1]) * G,
              q[2] + (I[2] - q[2]) * G
            ]);
            const W = z.length;
            Se.add(W), Pe.set(W, M), Xe.set(W, {
              dir: L,
              bay: N
            }), z.push([
              P,
              Z
            ]), P = Z;
          }
          const _ = z.length;
          Se.add(_), Pe.set(_, M), Xe.set(_, {
            dir: L,
            bay: N
          }), z.push([
            P,
            v
          ]);
        }
        if (Yt = /* @__PURE__ */ new Set(), st && tt > 0) {
          const f = (v, M, L) => {
            for (let q = 0; q < p.length; q++) if (Math.abs(p[q][0] - v) < 1e-6 && Math.abs(p[q][1] - M) < 1e-6 && Math.abs(p[q][2] - L) < 1e-6) return q;
            const N = p.length;
            return p.push([
              v,
              M,
              L
            ]), N;
          };
          for (let v = 1; v < m.length; v++) if (yt === "x") for (let M = 0; M < s.length - 1; M++) {
            const L = s[M], N = s[M + 1];
            for (let q = 1; q <= tt; q++) {
              const I = L + q / (tt + 1) * (N - L), P = [];
              for (let _ = 0; _ < d.length; _++) P.push(f(d[_], I, m[v]));
              for (let _ = 0; _ < d.length - 1; _++) {
                const Y = z.length;
                Yt.add(Y), Se.add(Y), Pe.set(Y, v - 1), Xe.set(Y, {
                  dir: "x",
                  bay: _
                }), z.push([
                  P[_],
                  P[_ + 1]
                ]);
              }
            }
          }
          else for (let M = 0; M < d.length - 1; M++) {
            const L = d[M], N = d[M + 1];
            for (let q = 1; q <= tt; q++) {
              const I = L + q / (tt + 1) * (N - L), P = [];
              for (let _ = 0; _ < s.length; _++) P.push(f(I, s[_], m[v]));
              for (let _ = 0; _ < s.length - 1; _++) {
                const Y = z.length;
                Yt.add(Y), Se.add(Y), Pe.set(Y, v - 1), Xe.set(Y, {
                  dir: "y",
                  bay: _
                }), z.push([
                  P[_],
                  P[_ + 1]
                ]);
              }
            }
          }
        }
        const C = /* @__PURE__ */ new Map(), b = Bo();
        for (let f = 0; f < s.length; f++) for (let v = 0; v < d.length; v++) x(v, f) || C.set(g[`${v},${f},0`], [
          ...b
        ]);
        Fe = /* @__PURE__ */ new Set();
        for (const f of _e) {
          const v = m.length - 1, M = f.floors.includes(-1) ? Array.from({
            length: v
          }, (L, N) => N) : f.floors.filter((L) => L < v);
          for (const L of M) {
            let N, q, I, P;
            f.dir === "x" ? (N = f.bay, I = f.bay + 1, q = f.axisIdx, P = f.axisIdx) : (N = f.axisIdx, I = f.axisIdx, q = f.bay, P = f.bay + 1);
            const _ = g[`${N},${q},${L}`], Y = g[`${N},${q},${L + 1}`];
            let G, Z;
            if (f.dir === "x" ? (G = g[`${I},${P},${L}`], Z = g[`${I},${P},${L + 1}`]) : (G = g[`${I},${P},${L}`], Z = g[`${I},${P},${L + 1}`]), _ === void 0 || G === void 0 || Y === void 0 || Z === void 0) continue;
            const W = at, D = Je, X = p[_], de = p[G], Me = p[Y], $e = p[Z], K = [];
            for (let le = 0; le <= D; le++) {
              const pe = [], Q = le / D;
              for (let xe = 0; xe <= W; xe++) {
                const we = xe / W, Te = (1 - Q) * ((1 - we) * X[0] + we * de[0]) + Q * ((1 - we) * Me[0] + we * $e[0]), V = (1 - Q) * ((1 - we) * X[1] + we * de[1]) + Q * ((1 - we) * Me[1] + we * $e[1]), fe = (1 - Q) * ((1 - we) * X[2] + we * de[2]) + Q * ((1 - we) * Me[2] + we * $e[2]);
                le === 0 && xe === 0 ? pe.push(_) : le === 0 && xe === W ? pe.push(G) : le === D && xe === 0 ? pe.push(Y) : le === D && xe === W ? pe.push(Z) : (pe.push(p.length), p.push([
                  Te,
                  V,
                  fe
                ]));
              }
              K.push(pe);
            }
            for (let le = 0; le < D; le++) for (let pe = 0; pe < W; pe++) {
              const Q = K[le][pe], xe = K[le][pe + 1], we = K[le + 1][pe + 1], Te = K[le + 1][pe], V = z.length;
              Fe.add(V), Pe.set(V, L), z.push([
                Q,
                xe,
                we,
                Te
              ]);
            }
            if (L === 0) for (let le = 0; le <= W; le++) {
              const pe = K[0][le];
              pe >= w && C.set(pe, [
                ...b
              ]);
            }
          }
        }
        if (Oo = /* @__PURE__ */ new Set(), ht) {
          const f = l, v = l, M = /* @__PURE__ */ new Map(), L = (N, q, I) => `${Math.round(N * 1e4)},${Math.round(q * 1e4)},${Math.round(I * 1e4)}`;
          for (let N = 0; N < p.length; N++) M.set(L(p[N][0], p[N][1], p[N][2]), N);
          for (let N = 1; N < m.length; N++) {
            const q = m[N];
            for (let I = 0; I < d.length - 1; I++) for (let P = 0; P < s.length - 1; P++) {
              const _ = d[I], Y = d[I + 1], G = s[P], Z = s[P + 1], W = [];
              for (let D = 0; D <= v; D++) {
                const X = [];
                for (let de = 0; de <= f; de++) {
                  const Me = _ + de / f * (Y - _), $e = G + D / v * (Z - G);
                  if (D === 0 && de === 0) X.push(g[`${I},${P},${N}`]);
                  else if (D === 0 && de === f) X.push(g[`${I + 1},${P},${N}`]);
                  else if (D === v && de === 0) X.push(g[`${I},${P + 1},${N}`]);
                  else if (D === v && de === f) X.push(g[`${I + 1},${P + 1},${N}`]);
                  else {
                    const K = L(Me, $e, q), le = M.get(K);
                    if (le !== void 0) X.push(le);
                    else {
                      const pe = p.length;
                      p.push([
                        Me,
                        $e,
                        q
                      ]), M.set(K, pe), X.push(pe);
                    }
                  }
                }
                W.push(X);
              }
              for (let D = 0; D < v; D++) for (let X = 0; X < f; X++) {
                const de = W[D][X], Me = W[D][X + 1], $e = W[D + 1][X + 1], K = W[D + 1][X], le = z.length;
                Oo.add(le), Pe.set(le, N - 1), z.push([
                  de,
                  Me,
                  $e,
                  K
                ]);
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = z, e.nodeInputs && (e.nodeInputs.val = {
          supports: C
        }), _t = [
          ...d
        ], At = [
          ...s
        ], setTimeout(() => {
          Ke(), Mn(d, s), Wn(), Jn();
        }, 50), Le(), {
          nodes: p.length,
          elements: z.length,
          nJointNodes: w
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, r = 4) {
        ze.clear();
        const i = [], c = [], u = (y) => n + l * (1 - Math.pow(2 * y / t - 1, 2)), d = [], s = r + 1;
        for (let y = 0; y < s; y++) {
          const x = [], p = o / r * y;
          x.push(i.length), i.push([
            0,
            p,
            0
          ]), x.push(i.length), i.push([
            t,
            p,
            0
          ]), x.push(i.length), i.push([
            0,
            p,
            n
          ]);
          for (let g = 1; g < a; g++) {
            const w = t / a * g;
            x.push(i.length), i.push([
              w,
              p,
              u(w)
            ]);
          }
          x.push(i.length), i.push([
            t,
            p,
            n
          ]), d.push(x);
        }
        for (let y = 0; y < s; y++) {
          const x = d[y];
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
        for (let y = 0; y < r; y++) for (let x = 2; x < d[0].length; x++) c.push([
          d[y][x],
          d[y + 1][x]
        ]);
        for (let y = 0; y < r; y++) for (let x = 2; x < d[0].length - 1; x += 2) c.push([
          d[y][x],
          d[y + 1][x + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), $ = Bo();
        for (let y = 0; y < s; y++) m.set(d[y][0], [
          ...$
        ]), m.set(d[y][1], [
          ...$
        ]);
        return e.nodes.val = i, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), Le(), {
          nodes: i.length,
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
            ze.clear(), Ie("truss"), zn();
            break;
          }
          case "beams": {
            ze.clear(), Ie("beams"), En();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            ze.clear(), Ie("3d"), In();
            break;
          }
          case "portico": {
            Ie("frame"), ae();
            break;
          }
          case "edificio": {
            Ie("edificio"), he.colMat = 0, he.vigaMat = 0, he.colShape = 0, _e = [], ht = false, st = false, ae();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ie("edificio"), he.colMat = 1, he.vigaMat = 1, he.steelColType = 0, he.steelVigaType = 0, _e = [], st = true, tt = 2;
            const o = oe.reduce((l, a) => l + a, 0) / oe.length, n = se.reduce((l, a) => l + a, 0) / se.length;
            yt = o >= n ? "y" : "x", ht = true, $t = 0.08, ae();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ie("edificio"), he.colMat = 0, he.vigaMat = 0, he.colShape = 0, st = false;
            const o = Math.round(((_a2 = ee.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
            _e = [
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
            ], ht = true, $t = 0.15, ae();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ie("edificio"), he.colMat = 2, he.vigaMat = 0, st = false;
            const o = Math.round(((_c = ee.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = ee.nVanosY) == null ? void 0 : _d.val) ?? 2);
            _e = [
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
            ], ht = true, $t = 0.12, ae();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ie("edificio"), ee.nPisos && (ee.nPisos.val = 1), ee.hPiso && (ee.hPiso.val = 4.5), ee.nVanosX && (ee.nVanosX.val = 3), ee.nVanosY && (ee.nVanosY.val = 2), ee.nSubViga && (ee.nSubViga.val = 3), oe = [
              6,
              6,
              6
            ], se = [
              5,
              5
            ], he.colMat = 1, he.vigaMat = 1, he.steelColType = 0, he.steelVigaType = 0, _e = [], st = true, tt = 2, yt = oe[0] >= se[0] ? "y" : "x", ht = true, $t = 0.08, bo = 3, xo = 3, ae();
            break;
          }
          case "galpon": {
            Ie("galpon"), ae();
            break;
          }
          case "barra": {
            Ie("barra"), ae();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            ze.clear(), Ie("placa-3q"), Ln();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            ze.clear(), Ie("placa-q4"), qn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            ze.clear(), Ie("losa-rect"), Tn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            ze.clear(), Ie("losa-plana"), Fn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            ze.clear(), Ie("viga-alta"), Pn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            ze.clear(), Ie("muro-contencion"), Cn();
            break;
          }
          case "zapata":
          case "footing": {
            ze.clear(), Ie("zapata"), _n();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            ze.clear(), Ie("placa-orificios"), An();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            ze.clear(), Ie("col-placa"), Hn();
            break;
          }
          case "talud":
          case "slope": {
            ze.clear(), Ie("talud"), Nn();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            ze.clear(), Ie("eiffel"), ta();
            break;
          }
          case "arco":
          case "arco-gateway": {
            ze.clear(), Ie("arco"), oa();
            break;
          }
          case "puente":
          case "puente-colgante": {
            ze.clear(), Ie("puente"), na();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            ze.clear(), Ie("twisted"), aa();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            ze.clear(), Ie("burj"), sa();
            break;
          }
          case "opera":
          case "sydney-opera": {
            ze.clear(), Ie("opera"), la();
            break;
          }
          case "diagrid":
          case "gherkin": {
            ze.clear(), Ie("diagrid"), ia();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", r = -10, i = 0.2, c = 3e7, u = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${r}, t=${i}`);
        const m = performance.now(), $ = fn({
          E: c,
          nu: u,
          thickness: i,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: r,
          theoryType: d
        }), y = performance.now() - m;
        console.log(`Solved in ${y.toFixed(1)} ms`), console.log(`w_max = ${$.maxW.toExponential(6)}`), console.log(`w_center = ${($.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${$.maxMxx.toExponential(4)}, Myy_max = ${$.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${$.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${$.maxQx.toExponential(4)}, Qy_max = ${$.maxQy.toExponential(4)}`);
        const x = $.nodeResults.map((S) => [
          S.x,
          S.y,
          0
        ]), p = $.elementResults.map((S) => [
          ...S.nodes
        ]);
        e.nodes.val = x, e.elements.val = p;
        const g = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((S, H) => {
          g.set(H, [
            0,
            0,
            S.w,
            S.bx,
            S.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const w = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((S, H) => {
          (S.x < 1e-10 || S.x > t - 1e-10 || S.y < 1e-10 || S.y > o - 1e-10) && w.set(H, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const z = /* @__PURE__ */ new Map();
        if (Math.abs(r) > 1e-30) {
          const S = r * t * o / x.length;
          x.forEach((H, C) => {
            w.has(C) || z.set(C, [
              0,
              0,
              S,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: w,
          loads: z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const S = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
          $.elementResults.forEach((b, f) => {
            S.set(f, [
              b.Mxx,
              b.Mxx,
              b.Mxx
            ]), H.set(f, [
              b.Myy,
              b.Myy,
              b.Myy
            ]), C.set(f, [
              b.Mxy,
              b.Mxy,
              b.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: S,
            bendingYY: H,
            bendingXY: C
          };
        }
        return setTimeout(() => Ke(), 50), Le(), $;
      },
      set(t, o) {
        ee[t] ? (ee[t].val = o, console.log(`${t} = ${o}`), Mt(), ae()) : qe[t] ? (qe[t].val = o, console.log(`${t} = ${o}`), Mt(), ae()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ee,
          ...qe
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in ee) o[l] = ee[l].val;
          for (const l in qe) o[l] = qe[l].val;
          o.plateTheory = mt, o.supportType = lt;
          const n = Fo()[E];
          return n && n[lt] && (o.supportLabel = n[lt].label), console.table(o), o;
        }
        if (ee[t]) return ee[t].val;
        if (qe[t]) return qe[t].val;
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
        }[t.toLowerCase()] || 3), mt = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[mt] || mt}`), E.includes("placa") && (Mt(), ae());
      },
      setBc(t) {
        const o = Fo()[E];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        lt = t, lt >= o.length && (lt = 0), console.log(`Apoyo: ${o[lt].label} \u2192 DOFs: [${o[lt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Mt(), ae();
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
        t && (h = t), o && (B = o), T = Qt(h, B);
        const n = re.querySelector("#cad3d-force-unit"), l = re.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), l && (l.textContent = B), E && Ie(E), console.log(`Unidades: ${T.label} | E=${T.E.toExponential(3)} ${T.stress}`), T.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function kn() {
      return rs(T);
    }
    function Sn() {
      return cs(T);
    }
    let qe = {};
    function Ie(t) {
      var _a2, _b;
      E = t, xa.val = true, lt = 0, Ct && Xo(), ee = {};
      const o = kn()[t];
      if (o) for (const l of o) ee[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      qe = {};
      const n = Sn()[t];
      if (n) for (const l of n) qe[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = ee.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
        oe = Array(l).fill(T.defaultSpan), se = Array(a).fill(T.defaultSpan * 0.8);
      }
      Mt(), setTimeout(() => {
        za(), ae();
      }, 50);
    }
    function R(t) {
      var _a2, _b;
      return ((_a2 = ee[t]) == null ? void 0 : _a2.val) ?? ((_b = qe[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function ae() {
      switch (E) {
        case "truss":
          zn();
          break;
        case "beams":
          En();
          break;
        case "3d":
          In();
          break;
        case "frame": {
          const o = Math.round(R("nVanos")), n = R("spanV"), l = Math.round(R("nPisos")), a = R("hPiso");
          ze.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = Math.round(R("nPisos")), n = R("hPiso"), l = R("Lvix") || 0, a = R("Lvdx") || 0, r = R("Lviy") || 0, i = R("Lvdy") || 0, c = Math.max(1, Math.round(R("nSubViga") || 3)), u = Math.max(1, Math.round(R("nSubCol") || 1));
          ze.building([
            ...oe
          ], [
            ...se
          ], Array(o).fill(n), c, l, a, r, i, u);
          break;
        }
        case "galpon":
          ze.galpon(R("span"), R("length"), R("height"), R("archRise"), Math.round(R("xDiv")), Math.round(R("yDiv")));
          break;
        case "barra":
          ha();
          break;
        case "placa-3q":
          Ln();
          break;
        case "placa-q4":
          qn();
          break;
        case "losa-rect":
          Tn();
          break;
        case "losa-plana":
          Fn();
          break;
        case "viga-alta":
          Pn();
          break;
        case "muro-contencion":
          Cn();
          break;
        case "zapata":
          _n();
          break;
        case "placa-orificios":
          An();
          break;
        case "col-placa":
          Hn();
          break;
        case "talud":
          Nn();
          break;
        case "eiffel":
          ta();
          break;
        case "arco":
          oa();
          break;
        case "puente":
          na();
          break;
        case "twisted":
          aa();
          break;
        case "burj":
          sa();
          break;
        case "opera":
          la();
          break;
        case "diagrid":
          ia();
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
        if (ne.size > 0 || U.size > 0 || O) {
          const o = e.elements.val, n = o.filter((l, a) => !(ne.has(a) || U.has(a) || O && !ie.has(a)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Ht(), Ko();
        }, 30);
      }
    }
    function zn() {
      const t = R("span"), o = Math.round(R("divisions")), n = R("height"), l = t / o, a = [], r = [];
      for (let s = 0; s <= o; s++) a.push([
        l * s,
        0,
        0
      ]);
      for (let s = 0; s <= o; s++) a.push([
        l * s,
        0,
        n
      ]);
      const i = o + 1;
      for (let s = 0; s < o; s++) r.push([
        s,
        s + 1
      ]);
      for (let s = 0; s < o; s++) r.push([
        i + s,
        i + s + 1
      ]);
      for (let s = 0; s <= o; s++) r.push([
        s,
        i + s
      ]);
      for (let s = 0; s < o; s++) s < o / 2 ? r.push([
        s,
        i + s + 1
      ]) : r.push([
        i + s,
        s + 1
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
      ]), u = (R("CM") ?? 0) + (R("CV") ?? 0), d = /* @__PURE__ */ new Map();
      if (u !== 0) for (let s = 0; s <= o; s++) d.set(s, [
        0,
        0,
        u,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: d
      }), Le();
    }
    function En() {
      const t = R("width"), o = R("height"), n = R("Ex") ?? 0, l = (R("CM") ?? 0) + (R("CV") ?? 0), a = Math.max(1, Math.round(R("nSub") || 4)), r = [
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
      ], i = [];
      i.push([
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
      ], u = [
        t,
        0,
        o
      ];
      let d = 1;
      for (let m = 1; m < a; m++) {
        const $ = m / a, y = r.length;
        r.push([
          c[0] + (u[0] - c[0]) * $,
          c[1] + (u[1] - c[1]) * $,
          c[2] + (u[2] - c[2]) * $
        ]), i.push([
          d,
          y
        ]), d = y;
      }
      i.push([
        d,
        2
      ]);
      const s = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) s.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let m = 1; m < r.length; m++) m === 0 || m === 3 || s.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let m = 1; m < r.length; m++) m === 0 || m === 3 || s.set(m, [
        m === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
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
        loads: s
      }), Le();
    }
    function In() {
      const t = R("dx"), o = R("dy"), n = R("dz"), l = Math.round(R("stories")), a = Math.max(1, Math.round(R("nSub") || 3)), r = [];
      for (let p = 0; p <= l; p++) r.push([
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
      const i = r.length, c = [
        ...r
      ], u = [];
      for (let p = 0; p < l; p++) for (let g = 0; g < 4; g++) u.push([
        p * 4 + g,
        (p + 1) * 4 + g
      ]);
      for (let p = 0; p < l; p++) {
        const g = p * 4;
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
      for (let p = 1; p <= l; p++) {
        const g = p * 4;
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
      for (const [p, g] of d) {
        const w = r[p], z = r[g];
        let S = p;
        for (let H = 1; H < a; H++) {
          const C = H / a, b = c.length;
          c.push([
            w[0] + (z[0] - w[0]) * C,
            w[1] + (z[1] - w[1]) * C,
            w[2] + (z[2] - w[2]) * C
          ]), u.push([
            S,
            b
          ]), S = b;
        }
        u.push([
          S,
          g
        ]);
      }
      const s = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) s.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = R("Ex") ?? 0, $ = (R("CM") ?? 0) + (R("CV") ?? 0), y = i - 2, x = /* @__PURE__ */ new Map();
      if (m !== 0 && $ === 0) x.set(y, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if ($ !== 0 && m === 0) for (let p = 0; p < c.length; p++) s.has(p) || x.set(p, [
        0,
        0,
        $,
        0,
        0,
        0
      ]);
      else if (m !== 0 && $ !== 0) for (let p = 0; p < c.length; p++) s.has(p) || x.set(p, [
        p === y ? m : 0,
        0,
        $,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: x
      }), Le();
    }
    function ha() {
      const t = R("L"), o = Math.round(R("nElem")), n = R("F"), l = t / o, a = [], r = [];
      for (let u = 0; u <= o; u++) a.push([
        l * u,
        0,
        0
      ]);
      for (let u = 0; u < o; u++) r.push([
        u,
        u + 1
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
      e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: c
      }), Le();
    }
    function Ln() {
      const t = R("Lx") || 15, o = R("Ly") || 10, n = R("meshSize") || 0.5, l = R("q") || -3, a = R("t") || 1, r = R("E") || 3e7, i = R("nu") || 0.3, c = r / (2 * (1 + i)), u = mt === 1 ? "Membrana" : mt === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: s, boundaryIndices: m } = Ft({
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
      }), $ = t * o, y = l * $ / d.length, x = new Map(m.map((g) => [
        g,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(d.map((g, w) => [
        w,
        [
          0,
          0,
          y,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: x,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(s.map((g, w) => [
          w,
          r
        ])),
        elasticitiesOrthogonal: new Map(s.map((g, w) => [
          w,
          r
        ])),
        thicknesses: new Map(s.map((g, w) => [
          w,
          a
        ])),
        poissonsRatios: new Map(s.map((g, w) => [
          w,
          i
        ])),
        shearModuli: new Map(s.map((g, w) => [
          w,
          c
        ]))
      });
      try {
        const g = ut(d, s, e.nodeInputs.val, e.elementInputs.val);
        g && e.deformOutputs && (e.deformOutputs.val = g);
        const w = po(d, s, e.elementInputs.val, g);
        w && e.analyzeOutputs && (e.analyzeOutputs.val = w), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${s.length} triangles, t=${a}, E=${r}, \u03BD=${i}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function qn() {
      const t = R("Lx") || 10, o = R("Ly") || 10, n = Math.round(R("nx") || 16), l = Math.round(R("ny") || 16), a = R("t") || 0.2, r = R("q") || -10, i = R("E") || 3e7, c = R("nu") || 0.3, u = lt === 1 ? "clamped" : "simply-supported", s = {
        1: 2,
        2: 1,
        3: 0
      }[mt] ?? 0;
      return ze.plateQ4(t, o, n, l, u, r, a, i, c, s);
    }
    function Tn() {
      const t = R("a") || 6, o = R("b") || 4, n = Math.round(R("nx") || 12), l = Math.round(R("ny") || 8), a = R("t") || 0.1, r = R("q") || -10, i = R("E") || 35e6, c = R("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[mt] ?? 0, s = ze.plateQ4(t, o, n, l, "simply-supported", r, a, i, c, d), m = i * a * a * a / (12 * (1 - c * c));
      let $ = 0;
      for (let y = 1; y <= 19; y += 2) for (let x = 1; x <= 19; x += 2) {
        const p = y * y / (t * t) + x * x / (o * o);
        $ += 1 / (y * x * p * p);
      }
      if ($ *= 16 * Math.abs(r) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${$.toExponential(6)}`), s) {
        const y = Math.abs((Math.abs(s.centerW || 0) - $) / $ * 100);
        console.log(`   WASM w_center = ${(s.centerW || 0).toExponential(6)}, error = ${y.toFixed(2)}%`);
      }
      return s;
    }
    function Fn() {
      const t = R("t") || 0.2, o = R("q") || -10, n = R("E") || 35e6, l = R("nu") || 0.2, a = R("meshSize") || 0.6, r = [
        3.6,
        4.2,
        4.2,
        3.6
      ], i = [
        3,
        3.6,
        3
      ], c = r.reduce((q, I) => q + I, 0), u = i.reduce((q, I) => q + I, 0), d = [
        0
      ];
      for (const q of r) d.push(d[d.length - 1] + q);
      const s = [
        0
      ];
      for (const q of i) s.push(s[s.length - 1] + q);
      const m = Math.max(2, Math.round(c / a)), $ = Math.max(2, Math.round(u / a)), y = c / m, x = u / $, p = [];
      for (let q = 0; q <= $; q++) for (let I = 0; I <= m; I++) p.push([
        I * y,
        q * x
      ]);
      const g = [], w = /* @__PURE__ */ new Set();
      for (const q of d) for (const I of s) {
        let P = 1 / 0, _ = 0;
        for (let Y = 0; Y < p.length; Y++) {
          const G = Math.hypot(p[Y][0] - q, p[Y][1] - I);
          G < P && (P = G, _ = Y);
        }
        w.has(_) || (w.add(_), g.push({
          node: _,
          dof: 0,
          k: 1e15
        }));
      }
      const S = {
        1: 2,
        2: 1,
        3: 0
      }[mt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][S]}]: ${c}\xD7${u}m, ${m}\xD7${$} elem, ${w.size} columnas`);
      const H = performance.now(), C = fn({
        E: n,
        nu: l,
        thickness: t,
        meshLx: c,
        meshLy: u,
        meshNx: m,
        meshNy: $,
        bcType: "none",
        pressure: o,
        theoryType: S,
        springs: g
      }), b = performance.now() - H;
      console.log(`Solved in ${b.toFixed(1)} ms, w_max = ${C.maxW.toExponential(4)}`);
      const f = C.nodeResults.map((q) => [
        q.x,
        q.y,
        0
      ]), v = C.elementResults.map((q) => [
        ...q.nodes
      ]);
      e.nodes.val = f, e.elements.val = v;
      const M = /* @__PURE__ */ new Map();
      C.nodeResults.forEach((q, I) => {
        M.set(I, [
          0,
          0,
          q.w,
          q.bx,
          q.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: M
      });
      const L = /* @__PURE__ */ new Map();
      for (const q of w) L.set(q, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const N = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const q = o * c * u / f.length;
        f.forEach((I, P) => {
          L.has(P) || N.set(P, [
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
        supports: L,
        loads: N
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const q = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        C.elementResults.forEach((_, Y) => {
          q.set(Y, [
            _.Mxx,
            _.Mxx,
            _.Mxx
          ]), I.set(Y, [
            _.Myy,
            _.Myy,
            _.Myy
          ]), P.set(Y, [
            _.Mxy,
            _.Mxy,
            _.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: q,
          bendingYY: I,
          bendingXY: P
        };
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function Pn() {
      const t = R("L") || 4, o = R("H") || 2, n = R("t") || 0.1, l = R("E") || 2e7, a = R("nu") || 0.2, r = l / (2 * (1 + a)), i = R("q") || -100, c = R("b") || 0.8, u = R("meshSize") || 0.2, { nodes: d, elements: s, boundaryIndices: m } = Ft({
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
        maxMeshSize: u
      }), $ = d, y = 0.4, x = /* @__PURE__ */ new Map();
      for (let b = 0; b < $.length; b++) {
        const f = $[b][0], v = $[b][1];
        Math.abs(v) < 1e-6 && (f <= y + 1e-6 || f >= t - y - 1e-6) && x.set(b, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - c) / 2, g = p + c, w = [];
      for (let b = 0; b < $.length; b++) if (Math.abs($[b][1] - o) < 1e-6) {
        const f = $[b][0];
        f >= p - 1e-6 && f <= g + 1e-6 && w.push(b);
      }
      const z = i * c / Math.max(w.length, 1), S = /* @__PURE__ */ new Map();
      for (const b of w) S.set(b, [
        0,
        z,
        0,
        0,
        0,
        0
      ]);
      const H = {
        elasticities: new Map(s.map((b, f) => [
          f,
          l
        ])),
        elasticitiesOrthogonal: new Map(s.map((b, f) => [
          f,
          l
        ])),
        thicknesses: new Map(s.map((b, f) => [
          f,
          n
        ])),
        poissonsRatios: new Map(s.map((b, f) => [
          f,
          a
        ])),
        shearModuli: new Map(s.map((b, f) => [
          f,
          r
        ]))
      }, C = {
        supports: x,
        loads: S
      };
      try {
        const b = ut($, s, C, H), f = po($, s, H, b), v = $.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        if (e.nodes.val = v, e.elements.val = s, b && b.deformations) {
          const L = /* @__PURE__ */ new Map();
          b.deformations.forEach((N, q) => {
            L.set(q, [
              N[0],
              N[2],
              N[1],
              N[3],
              N[5],
              N[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: L
          });
        }
        if (e.nodeInputs) {
          const L = /* @__PURE__ */ new Map();
          x.forEach((q, I) => L.set(I, q));
          const N = /* @__PURE__ */ new Map();
          S.forEach((q, I) => N.set(I, [
            q[0],
            q[2],
            q[1],
            q[3],
            q[5],
            q[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: L,
            loads: N
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let M = 0;
        b && b.deformations && b.deformations.forEach((L) => {
          const N = Math.sqrt(L[0] * L[0] + L[1] * L[1] + L[2] * L[2]);
          M = Math.max(M, N);
        }), console.log(`Viga Alta: ${$.length} nodos, ${s.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${i} kN/m sobre ${c}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function Cn() {
      const t = R("H") || 4, o = R("B") || 3, n = R("tw") || 0.3, l = R("tb") || 0.4, a = R("meshSize") || 0.2, r = R("E") || 25e6, i = R("nu") || 0.2, c = r / (2 * (1 + i)), u = R("gamma") || 18, d = R("Ka") || 0.33, s = R("Es") || 5e4, m = R("nus") || 0.3, $ = s / (2 * (1 + m)), y = R("kn") || 1e6, x = R("ks") || 1e4, p = R("gammaW") || 9.81, g = R("Hw") || 3.5, w = R("qs") || 0, z = lt, S = o * 0.3, H = o * 0.7, C = [
        [
          -S,
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
          -S,
          l,
          0
        ]
      ];
      let b = [], f = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), L;
      if (z === 0) {
        const I = Ft({
          points: C,
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
          maxMeshSize: a
        });
        b = I.nodes, f = I.elements;
        for (let _ = 0; _ < b.length; _++) Math.abs(b[_][1]) < 1e-6 && v.set(_, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let _ = 0; _ < b.length; _++) {
          const Y = b[_][0], G = b[_][1];
          Math.abs(Y - n) < a * 0.6 && G >= l - 1e-6 && P.push({
            idx: _,
            y: G
          });
        }
        P.sort((_, Y) => _.y - Y.y);
        for (let _ = 0; _ < P.length; _++) {
          const { idx: Y, y: G } = P[_], Z = l + t - G, W = d * u * Z + d * w;
          let D = a;
          _ > 0 && _ < P.length - 1 ? D = (P[_ + 1].y - P[_ - 1].y) / 2 : _ === 0 && P.length > 1 ? D = (P[1].y - P[0].y) / 2 : _ === P.length - 1 && P.length > 1 && (D = (P[_].y - P[_ - 1].y) / 2);
          const X = W * D;
          Math.abs(X) > 1e-10 && M.set(Y, [
            X,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(f.map((_, Y) => [
            Y,
            r
          ])),
          elasticitiesOrthogonal: new Map(f.map((_, Y) => [
            Y,
            r
          ])),
          thicknesses: new Map(f.map((_, Y) => [
            Y,
            n
          ])),
          poissonsRatios: new Map(f.map((_, Y) => [
            Y,
            i
          ])),
          shearModuli: new Map(f.map((_, Y) => [
            Y,
            c
          ]))
        };
      } else if (z === 1 || z === 2) {
        const I = H, P = l + t;
        if (z === 2) {
          const _ = [
            [
              -S,
              0,
              0
            ],
            [
              I,
              0,
              0
            ],
            [
              I,
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
              -S,
              l,
              0
            ]
          ], Y = Math.max(3, Math.ceil((P - l) / a)), G = [];
          for (let V = 0; V <= Y; V++) G.push([
            n,
            l + V * (P - l) / Y,
            0
          ]);
          const Z = Ft({
            points: [
              ..._,
              ...G
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
            maxMeshSize: a
          });
          b = Z.nodes, f = Z.elements;
          const W = a * 0.4, D = [];
          for (let V = 0; V < b.length; V++) {
            const fe = b[V][0], ke = b[V][1];
            Math.abs(fe - n) < W && ke >= l - W && D.push(V);
          }
          D.sort((V, fe) => b[V][1] - b[fe][1]);
          const X = [
            D[0]
          ];
          for (let V = 1; V < D.length; V++) {
            const fe = b[D[V]][1] - b[X[X.length - 1]][1];
            Math.abs(fe) > a * 0.05 && X.push(D[V]);
          }
          D.length = 0, D.push(...X);
          const de = /* @__PURE__ */ new Map();
          for (const V of D) {
            const fe = b.length;
            b.push([
              b[V][0],
              b[V][1],
              b[V][2]
            ]), de.set(V, fe);
          }
          const Me = f.length, $e = [];
          for (let V = 0; V < Me; V++) {
            const fe = f[V], ke = (b[fe[0]][0] + b[fe[1]][0] + b[fe[2]][0]) / 3, Ne = (b[fe[0]][1] + b[fe[1]][1] + b[fe[2]][1]) / 3, Ye = ke >= -S && ke <= H && Ne >= 0 && Ne <= l, co = ke >= 0 && ke <= n && Ne >= l && Ne <= l + t, Dt = Ye || co;
            if ($e.push(!Dt), !Dt) for (let Et = 0; Et < fe.length; Et++) {
              const qt = de.get(fe[Et]);
              qt !== void 0 && (fe[Et] = qt);
            }
          }
          const K = f.length;
          for (let V = 0; V < D.length - 1; V++) {
            const fe = D[V], ke = D[V + 1], Ne = de.get(fe), Ye = de.get(ke);
            f.push([
              ke,
              fe,
              Ne,
              Ye
            ]);
          }
          const le = f.length - K, pe = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
          for (let V = 0; V < Me; V++) $e[V] ? (pe.set(V, s), Q.set(V, s), we.set(V, m), Te.set(V, $), xe.set(V, 1)) : (pe.set(V, r), Q.set(V, r), we.set(V, i), Te.set(V, c), xe.set(V, 1));
          for (let V = K; V < f.length; V++) pe.set(V, y), Q.set(V, 0), we.set(V, 0), Te.set(V, x), xe.set(V, 0);
          L = {
            elasticities: pe,
            elasticitiesOrthogonal: Q,
            thicknesses: xe,
            poissonsRatios: we,
            shearModuli: Te
          };
          for (let V = 0; V < b.length; V++) {
            const fe = b[V][0], ke = b[V][1];
            Math.abs(ke) < 1e-6 ? v.set(V, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - I) < a * 0.1 && v.set(V, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let V = 0; V < Me; V++) {
            if (!$e[V]) continue;
            const fe = f[V], ke = b[fe[0]], Ne = b[fe[1]], Ye = b[fe[2]], co = Math.abs((Ne[0] - ke[0]) * (Ye[1] - ke[1]) - (Ye[0] - ke[0]) * (Ne[1] - ke[1])) / 2, Dt = -u * co / 3;
            for (const Et of fe) {
              const qt = M.get(Et) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              qt[1] += Dt, M.set(Et, qt);
            }
          }
          if (w > 0) {
            const V = [];
            for (let fe = 0; fe < b.length; fe++) {
              const ke = b[fe][0], Ne = b[fe][1];
              Math.abs(Ne - P) < a * 0.1 && ke > n - 1e-6 && V.push({
                idx: fe,
                x: ke
              });
            }
            V.sort((fe, ke) => fe.x - ke.x);
            for (let fe = 0; fe < V.length; fe++) {
              let ke = a;
              fe > 0 && fe < V.length - 1 ? ke = (V[fe + 1].x - V[fe - 1].x) / 2 : fe === 0 && V.length > 1 ? ke = (V[1].x - V[0].x) / 2 : fe === V.length - 1 && V.length > 1 && (ke = (V[fe].x - V[fe - 1].x) / 2);
              const Ne = -w * ke, Ye = M.get(V[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ye[1] += Ne, M.set(V[fe].idx, Ye);
            }
          }
          console.log(`  Interfaz Goodman: ${D.length} nodos interfaz, ${le} elem interfaz, kn=${y}, ks=${x}`);
        } else {
          const _ = [
            [
              -S,
              0,
              0
            ],
            [
              I,
              0,
              0
            ],
            [
              I,
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
              -S,
              l,
              0
            ]
          ], Y = [
            [
              n,
              l,
              0
            ]
          ], G = Ft({
            points: [
              ..._,
              ...Y
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
            maxMeshSize: a
          });
          b = G.nodes, f = G.elements;
          const Z = (K) => {
            const le = (b[K[0]][0] + b[K[1]][0] + b[K[2]][0]) / 3, pe = (b[K[0]][1] + b[K[1]][1] + b[K[2]][1]) / 3, Q = le >= -S && le <= H && pe >= 0 && pe <= l, xe = le >= 0 && le <= n && pe >= l && pe <= l + t;
            return Q || xe;
          }, W = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), $e = [];
          for (let K = 0; K < f.length; K++) {
            const le = Z(f[K]);
            $e.push(!le), le ? (W.set(K, r), D.set(K, r), de.set(K, i), Me.set(K, c), X.set(K, 1)) : (W.set(K, s), D.set(K, s), de.set(K, m), Me.set(K, $), X.set(K, 1));
          }
          L = {
            elasticities: W,
            elasticitiesOrthogonal: D,
            thicknesses: X,
            poissonsRatios: de,
            shearModuli: Me
          };
          for (let K = 0; K < b.length; K++) {
            const le = b[K][0], pe = b[K][1];
            Math.abs(pe) < 1e-6 ? v.set(K, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(le - I) < a * 0.1 && v.set(K, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let K = 0; K < f.length; K++) {
            if (!$e[K]) continue;
            const le = f[K], pe = b[le[0]], Q = b[le[1]], xe = b[le[2]], we = Math.abs((Q[0] - pe[0]) * (xe[1] - pe[1]) - (xe[0] - pe[0]) * (Q[1] - pe[1])) / 2, Te = -u * we / 3;
            for (const V of le) {
              const fe = M.get(V) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              fe[1] += Te, M.set(V, fe);
            }
          }
          if (w > 0) {
            const K = [];
            for (let le = 0; le < b.length; le++) {
              const pe = b[le][0], Q = b[le][1];
              Math.abs(Q - P) < a * 0.1 && pe > n - 1e-6 && K.push({
                idx: le,
                x: pe
              });
            }
            K.sort((le, pe) => le.x - pe.x);
            for (let le = 0; le < K.length; le++) {
              let pe = a;
              le > 0 && le < K.length - 1 ? pe = (K[le + 1].x - K[le - 1].x) / 2 : le === 0 && K.length > 1 ? pe = (K[1].x - K[0].x) / 2 : le === K.length - 1 && K.length > 1 && (pe = (K[le].x - K[le - 1].x) / 2);
              const Q = -w * pe, xe = M.get(K[le].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              xe[1] += Q, M.set(K[le].idx, xe);
            }
          }
        }
      }
      if (z === 3) {
        const I = Ft({
          points: C,
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
          maxMeshSize: a
        });
        b = I.nodes, f = I.elements;
        for (let Z = 0; Z < b.length; Z++) Math.abs(b[Z][1]) < 1e-6 && v.set(Z, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + t, _ = Math.min(g, t), Y = P - _, G = [];
        for (let Z = 0; Z < b.length; Z++) {
          const W = b[Z][0], D = b[Z][1];
          Math.abs(W - n) < a * 0.6 && D >= l - 1e-6 && G.push({
            idx: Z,
            y: D
          });
        }
        G.sort((Z, W) => Z.y - W.y);
        for (let Z = 0; Z < G.length; Z++) {
          const { idx: W, y: D } = G[Z], X = Math.max(0, P - D);
          if (X <= 0 || D < Y - 1e-6) continue;
          const de = Math.min(X, _), Me = p * de;
          let $e = a;
          Z > 0 && Z < G.length - 1 ? $e = (G[Z + 1].y - G[Z - 1].y) / 2 : Z === 0 && G.length > 1 ? $e = (G[1].y - G[0].y) / 2 : Z === G.length - 1 && G.length > 1 && ($e = (G[Z].y - G[Z - 1].y) / 2);
          const K = Me * $e;
          Math.abs(K) > 1e-10 && M.set(W, [
            K,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(f.map((Z, W) => [
            W,
            r
          ])),
          elasticitiesOrthogonal: new Map(f.map((Z, W) => [
            W,
            r
          ])),
          thicknesses: new Map(f.map((Z, W) => [
            W,
            n
          ])),
          poissonsRatios: new Map(f.map((Z, W) => [
            W,
            i
          ])),
          shearModuli: new Map(f.map((Z, W) => [
            W,
            c
          ]))
        };
      }
      const N = {
        supports: v,
        loads: M
      }, q = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const I = ut(b, f, N, L), P = f.filter((X) => X.length === 3), _ = {};
        for (const X of Object.keys(L)) {
          const de = L[X];
          if (de && de instanceof Map) {
            const Me = /* @__PURE__ */ new Map();
            let $e = 0;
            for (let K = 0; K < f.length; K++) f[K].length === 3 && (de.has(K) && Me.set($e, de.get(K)), $e++);
            _[X] = Me;
          }
        }
        const Y = po(b, P, _, I), G = b.map((X) => [
          X[0],
          0,
          X[1]
        ]);
        if (e.nodes.val = G, e.elements.val = P, I && I.deformations) {
          const X = /* @__PURE__ */ new Map();
          I.deformations.forEach((de, Me) => {
            X.set(Me, [
              de[0],
              de[2],
              de[1],
              de[3],
              de[5],
              de[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: X
          });
        }
        const Z = /* @__PURE__ */ new Map();
        v.forEach((X, de) => Z.set(de, X));
        const W = /* @__PURE__ */ new Map();
        M.forEach((X, de) => W.set(de, [
          X[0],
          X[2],
          X[1],
          X[3],
          X[5],
          X[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: Z,
          loads: W
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let D = 0;
        I && I.deformations && I.deformations.forEach((X) => {
          const de = Math.sqrt(X[0] * X[0] + X[1] * X[1] + X[2] * X[2]);
          D = Math.max(D, de);
        }), console.log(`Muro Contencion [${q[z]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${w}`), z === 1 && console.log(`  Es=${s}, nus=${m}`), z === 2 && console.log(`  Es=${s}, nus=${m}, kn=${y}, ks=${x}`), z === 3 && console.log(`  gammaW=${p}, Hw=${g}`), console.log(`  max|u| = ${D.toExponential(4)}`);
      } catch (I) {
        console.warn("Muro Contencion failed:", I.message);
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function _n() {
      const t = R("Lx") || 2, o = R("Ly") || 2, n = R("t") || 0.5, l = R("colA") || 0.4, a = R("colH") || 1.5, r = Math.round(R("nx") || 8), i = Math.round(R("ny") || 8), c = R("E") || 25e6, u = R("nu") || 0.2, d = R("P") || -500, s = R("Mx") || 0, m = R("My") || 0, $ = R("ks") || 2e4, y = t / r, x = o / i, p = t / 2, g = o / 2, w = l / 2, z = [];
      for (let v = 0; v <= i; v++) for (let M = 0; M <= r; M++) {
        const L = v * (r + 1) + M;
        let N = y, q = x;
        (M === 0 || M === r) && (N = y / 2), (v === 0 || v === i) && (q = x / 2), z.push({
          node: L,
          dof: 0,
          k: $ * N * q
        });
      }
      let S = 0;
      for (let v = 0; v <= i; v++) for (let M = 0; M <= r; M++) Math.abs(M * y - p) <= w + 1e-6 && Math.abs(v * x - g) <= w + 1e-6 && S++;
      const H = d / Math.max(S, 1), C = [];
      for (let v = 0; v <= i; v++) for (let M = 0; M <= r; M++) {
        const L = M * y, N = v * x;
        Math.abs(L - p) <= w + 1e-6 && Math.abs(N - g) <= w + 1e-6 && C.push({
          node: v * (r + 1) + M,
          dof: 0,
          value: H
        });
      }
      if (Math.abs(s) > 1e-6) {
        const v = w > 1e-6 ? w : x, M = s / v;
        for (let L = 0; L <= i; L++) for (let N = 0; N <= r; N++) {
          const q = N * y, I = L * x;
          if (Math.abs(q - p) <= w + 1e-6 && Math.abs(I - g) <= w + 1e-6) {
            const P = I - g;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              C.push({
                node: L * (r + 1) + N,
                dof: 0,
                value: _ * M / S * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const v = w > 1e-6 ? w : y, M = m / v;
        for (let L = 0; L <= i; L++) for (let N = 0; N <= r; N++) {
          const q = N * y, I = L * x;
          if (Math.abs(q - p) <= w + 1e-6 && Math.abs(I - g) <= w + 1e-6) {
            const P = q - p;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              C.push({
                node: L * (r + 1) + N,
                dof: 0,
                value: _ * M / S * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[mt] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${r}x${i} elem`), console.log(`  col=${l}m, P=${d}, Mx=${s}, My=${m}, ks=${$}`);
      try {
        const v = fn({
          E: c,
          nu: u,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: r,
          meshNy: i,
          bcType: "none",
          pressure: 0,
          theoryType: f,
          springs: z,
          pointLoads: C
        });
        console.log(`  Solved: w_max = ${v.maxW.toExponential(4)}`);
        const M = v.nodeResults.map((Y) => [
          Y.x,
          Y.y,
          0
        ]), L = M.length;
        M.push([
          p - w,
          g - w,
          0
        ]), M.push([
          p + w,
          g - w,
          0
        ]), M.push([
          p + w,
          g + w,
          0
        ]), M.push([
          p - w,
          g + w,
          0
        ]), M.push([
          p - w,
          g - w,
          a
        ]), M.push([
          p + w,
          g - w,
          a
        ]), M.push([
          p + w,
          g + w,
          a
        ]), M.push([
          p - w,
          g + w,
          a
        ]);
        const N = v.elementResults.map((Y) => [
          ...Y.nodes
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
        ]), e.nodes.val = M, e.elements.val = N;
        const q = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((Y, G) => {
          q.set(G, [
            0,
            0,
            Y.w,
            Y.bx,
            Y.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: q
        });
        const I = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((Y, G) => {
          const Z = Y.x, W = Y.y;
          (Z < 1e-6 || Z > t - 1e-6 || W < 1e-6 || W > o - 1e-6) && I.set(G, [
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
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: P
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const Y = v.elementResults.length, G = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
          v.elementResults.forEach((D, X) => {
            G.set(X, [
              D.Mxx,
              D.Mxx,
              D.Mxx
            ]), Z.set(X, [
              D.Myy,
              D.Myy,
              D.Myy
            ]), W.set(X, [
              D.Mxy,
              D.Mxy,
              D.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: G,
            bendingYY: Z,
            bendingXY: W
          };
        }
        const _ = Ce();
        _ && (_.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function An() {
      const t = R("Lx") || 0.4, o = R("Ly") || 0.4, n = R("t") || 0.025, l = R("dBolt") || 0.022, a = R("sx") || 0.28, r = R("sy") || 0.28, i = R("colA") || 0.2, c = R("meshSize") || 8e-3, u = R("E") || 2e8, d = R("nu") || 0.3, s = u / (2 * (1 + d)), m = R("P") || -200, $ = Math.round(R("nBolts") || 4), y = t / 2, x = o / 2, p = l / 2, g = i / 2, w = [];
      $ >= 4 && (w.push([
        y - a / 2,
        x - r / 2
      ]), w.push([
        y + a / 2,
        x - r / 2
      ]), w.push([
        y + a / 2,
        x + r / 2
      ]), w.push([
        y - a / 2,
        x + r / 2
      ])), $ >= 6 && (w.push([
        y,
        x - r / 2
      ]), w.push([
        y,
        x + r / 2
      ])), $ >= 8 && (w.push([
        y - a / 2,
        x
      ]), w.push([
        y + a / 2,
        x
      ]));
      const { nodes: z, elements: S } = Ft({
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
      }), H = (q, I) => {
        for (const [P, _] of w) if ((q - P) * (q - P) + (I - _) * (I - _) < p * p) return true;
        return false;
      }, C = S.filter((q) => {
        const I = (z[q[0]][0] + z[q[1]][0] + z[q[2]][0]) / 3, P = (z[q[0]][1] + z[q[1]][1] + z[q[2]][1]) / 3;
        return !H(I, P);
      }), b = z, f = /* @__PURE__ */ new Map();
      for (let q = 0; q < b.length; q++) {
        const I = b[q][0], P = b[q][1];
        for (const [_, Y] of w) {
          const G = Math.sqrt((I - _) * (I - _) + (P - Y) * (P - Y));
          G >= p * 0.7 && G <= p * 1.5 && f.set(q, [
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
      for (let q = 0; q < b.length; q++) {
        const I = b[q][0], P = b[q][1];
        Math.abs(I - y) <= g && Math.abs(P - x) <= g && M++;
      }
      const L = m / Math.max(M, 1);
      for (let q = 0; q < b.length; q++) {
        const I = b[q][0], P = b[q][1];
        if (Math.abs(I - y) <= g && Math.abs(P - x) <= g) {
          const _ = v.get(q) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          _[2] += L, v.set(q, _);
        }
      }
      const N = {
        elasticities: new Map(C.map((q, I) => [
          I,
          u
        ])),
        elasticitiesOrthogonal: new Map(C.map((q, I) => [
          I,
          u
        ])),
        thicknesses: new Map(C.map((q, I) => [
          I,
          n
        ])),
        poissonsRatios: new Map(C.map((q, I) => [
          I,
          d
        ])),
        shearModuli: new Map(C.map((q, I) => [
          I,
          s
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${i * 1e3}mm, mesh=${c * 1e3}mm`), console.log(`  ${C.length} triangulos, ${b.length} nodos`);
      try {
        const q = ut(b, C, {
          supports: f,
          loads: v
        }, N), I = po(b, C, N, q);
        e.nodes.val = b, e.elements.val = C, q && e.deformOutputs && (e.deformOutputs.val = q), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), I && e.analyzeOutputs && (e.analyzeOutputs.val = I);
        let P = 0;
        q && q.deformations && q.deformations.forEach((_) => {
          const Y = Math.sqrt(_[0] * _[0] + _[1] * _[1] + _[2] * _[2]);
          P = Math.max(P, Y);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (q) {
        console.warn("Placa Base failed:", q.message);
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function Hn() {
      const t = R("colB") || 0.3, o = R("colH") || 0.3, n = R("colT") || 8e-3, l = R("colLen") || 1.5, a = R("Lx") || 0.45, r = R("Ly") || 0.45, i = R("tPlaca") || 0.025, c = R("dBolt") || 0.022, u = R("sx") || 0.32, d = R("sy") || 0.32, s = Math.round(R("nSubColV") || 6), m = Math.round(R("nSubColH") || 4), $ = Math.round(R("nSubPlaca") || 10), y = R("E") || 2e8, x = R("nu") || 0.3, p = y / (2 * (1 + x)), g = R("P") || -300, w = a / 2, z = r / 2, S = c / 2, H = t / 2, C = o / 2, b = [], f = [], v = $, M = a / v, L = r / v, N = (Q, xe) => xe * (v + 1) + Q;
      for (let Q = 0; Q <= v; Q++) for (let xe = 0; xe <= v; xe++) b.push([
        xe * M,
        Q * L,
        0
      ]);
      const q = [
        [
          w - u / 2,
          z - d / 2
        ],
        [
          w + u / 2,
          z - d / 2
        ],
        [
          w + u / 2,
          z + d / 2
        ],
        [
          w - u / 2,
          z + d / 2
        ]
      ], I = (Q, xe) => {
        for (const [we, Te] of q) if ((Q - we) * (Q - we) + (xe - Te) * (xe - Te) < S * S) return true;
        return false;
      }, P = f.length;
      for (let Q = 0; Q < v; Q++) for (let xe = 0; xe < v; xe++) {
        const we = (xe + 0.5) * M, Te = (Q + 0.5) * L;
        I(we, Te) || f.push([
          N(xe, Q),
          N(xe + 1, Q),
          N(xe + 1, Q + 1),
          N(xe, Q + 1)
        ]);
      }
      const _ = f.length - P, Y = s, G = m, Z = [
        [
          w - H,
          z - C
        ],
        [
          w + H,
          z - C
        ],
        [
          w + H,
          z + C
        ],
        [
          w - H,
          z + C
        ]
      ], W = f.length, D = [
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
      ], X = (Q, xe) => {
        for (let we = 0; we < (v + 1) * (v + 1); we++) if (Math.abs(b[we][0] - Q) < M * 0.3 && Math.abs(b[we][1] - xe) < L * 0.3 && Math.abs(b[we][2]) < 1e-6) return we;
        return -1;
      };
      for (const [Q, xe] of D) {
        const [we, Te] = Z[Q], [V, fe] = Z[xe], ke = [];
        for (let Ne = 0; Ne <= Y; Ne++) {
          const Ye = [], co = Ne / Y * l;
          for (let Dt = 0; Dt <= G; Dt++) {
            const Et = Dt / G, qt = we + Et * (V - we), dn = Te + Et * (fe - Te);
            if (Ne === 0) {
              const Tt = X(qt, dn);
              if (Tt >= 0) {
                Ye.push(Tt);
                continue;
              }
            }
            let pn = -1;
            for (let Tt = 0; Tt < b.length; Tt++) if (Math.abs(b[Tt][0] - qt) < 1e-6 && Math.abs(b[Tt][1] - dn) < 1e-6 && Math.abs(b[Tt][2] - co) < 1e-6) {
              pn = Tt;
              break;
            }
            pn >= 0 ? Ye.push(pn) : (Ye.push(b.length), b.push([
              qt,
              dn,
              co
            ]));
          }
          ke.push(Ye);
        }
        for (let Ne = 0; Ne < Y; Ne++) for (let Ye = 0; Ye < G; Ye++) f.push([
          ke[Ne][Ye],
          ke[Ne][Ye + 1],
          ke[Ne + 1][Ye + 1],
          ke[Ne + 1][Ye]
        ]);
      }
      const de = f.length - W, Me = /* @__PURE__ */ new Map();
      for (let Q = 0; Q < (v + 1) * (v + 1); Q++) {
        const xe = b[Q][0], we = b[Q][1];
        for (const [Te, V] of q) {
          const fe = Math.sqrt((xe - Te) * (xe - Te) + (we - V) * (we - V));
          fe >= S * 0.5 && fe <= S * 2 && Me.set(Q, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const $e = /* @__PURE__ */ new Map(), K = [];
      for (let Q = 0; Q < b.length; Q++) Math.abs(b[Q][2] - l) < 1e-6 && K.push(Q);
      const le = g / Math.max(K.length, 1);
      for (const Q of K) $e.set(Q, [
        0,
        0,
        le,
        0,
        0,
        0
      ]);
      const pe = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let Q = P; Q < P + _; Q++) pe.elasticities.set(Q, y), pe.poissonsRatios.set(Q, x), pe.thicknesses.set(Q, i), pe.shearModuli.set(Q, p);
      for (let Q = W; Q < W + de; Q++) pe.elasticities.set(Q, y), pe.poissonsRatios.set(Q, x), pe.thicknesses.set(Q, n), pe.shearModuli.set(Q, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${r * 1e3}mm, t=${i * 1e3}mm, 4 pernos d=${c * 1e3}mm`), console.log(`  ${_} Q4 placa + ${de} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${g} kN`);
      try {
        const Q = ut(b, f, {
          supports: Me,
          loads: $e
        }, pe), xe = po(b, f, pe, Q);
        e.nodes.val = b, e.elements.val = f, Q && e.deformOutputs && (e.deformOutputs.val = Q), e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: $e
        }), e.elementInputs && (e.elementInputs.val = pe), xe && e.analyzeOutputs && (e.analyzeOutputs.val = xe);
        let we = 0;
        (Q == null ? void 0 : Q.deformations) && Q.deformations.forEach((Te) => {
          const V = Math.sqrt(Te[0] * Te[0] + Te[1] * Te[1] + Te[2] * Te[2]);
          we = Math.max(we, V);
        }), console.log(`  max|u| = ${we.toExponential(4)}`);
      } catch (Q) {
        console.warn("Col+Placa failed:", Q.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: $e
        });
      }
      setTimeout(() => Ke(), 50), Le();
    }
    function Nn() {
      const t = R("H") || 6, o = R("angle") || 45, n = R("bTop") || 3, l = R("bBot") || 3, a = R("meshSize") || 2, r = R("E") || 5e4, i = R("nu") || 0.3, c = R("gamma") || 18, u = R("c") || 15, d = R("phi") || 30, s = R("qs") || 0, m = t / Math.tan(o * Math.PI / 180), $ = l + m + n, y = t, x = [
        [
          0,
          -y,
          0
        ],
        [
          $,
          -y,
          0
        ],
        [
          $,
          t,
          0
        ],
        [
          l + m,
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
      ], { nodes: p, elements: g } = Ft({
        points: x,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: a
      }), w = p, z = [], S = /* @__PURE__ */ new Map();
      for (let C = 0; C < w.length; C++) {
        const b = w[C][0], f = w[C][1];
        Math.abs(f + y) < 1e-6 ? (z.push({
          node: C,
          fixX: true,
          fixY: true
        }), S.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(b) < 1e-6 || Math.abs(b - $) < 1e-6) && (z.push({
          node: C,
          fixX: true,
          fixY: false
        }), S.set(C, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const H = t - a * 0.3;
      try {
        const C = w.map((I) => [
          I[0],
          I[1]
        ]), b = g.map((I) => [
          I[0],
          I[1],
          I[2]
        ]), f = Ga({
          nodes: C,
          elements: b,
          E: r,
          nu: i,
          gamma: c,
          c: u,
          phi: d,
          thickness: 1,
          supports: z,
          surcharge: s,
          surfaceYThreshold: H
        }), v = w.map((I) => [
          I[0],
          0,
          I[1]
        ]);
        e.nodes.val = v, e.elements.val = g;
        const M = /* @__PURE__ */ new Map();
        for (let I = 0; I < f.displacements.length; I++) {
          const [P, _] = f.displacements[I];
          M.set(I, [
            P,
            0,
            _,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: M
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: S
        }), e.elementInputs && (e.elementInputs.val = {});
        const L = /* @__PURE__ */ new Map();
        for (let I = 0; I < f.plasticStrain.length; I++) {
          const P = f.plasticStrain[I];
          L.set(I, [
            P,
            P,
            P
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: L
        });
        let N = 0;
        for (const [I, P] of f.displacements) {
          const _ = Math.sqrt(I * I + P * P);
          N = Math.max(N, _);
        }
        let q = 0;
        for (const I of f.plasticStrain) q = Math.max(q, I);
        console.log(`Talud SRM: ${w.length} nodos, ${g.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${c}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${N.toExponential(4)}`), console.log(`  max \u03B5_pl = ${q.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (C) {
        console.warn("Talud SRM failed:", C.message);
      }
      setTimeout(() => Ke(), 50), Le();
    }
    let wt = null, De = null, Lt = null;
    function va() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const o = document.getElementById("parameters");
        let n = document.getElementById("right-panels-wrapper");
        if (!n && o) {
          n = document.createElement("div"), n.id = "right-panels-wrapper", n.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), o.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const a = o.parentElement;
          a.removeChild(o), n.appendChild(t), n.appendChild(l), n.appendChild(o), a.appendChild(n);
        }
        n ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function Re(t) {
      const o = uo.find((n) => n.id === B);
      return t / o.toM;
    }
    function Oe(t) {
      const o = uo.find((n) => n.id === B);
      return t * o.toM;
    }
    function Vt(t) {
      const o = vn.find((l) => l.id === J.forceId), n = uo.find((l) => l.id === J.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Yo(t) {
      const o = vn.find((l) => l.id === J.forceId), n = uo.find((l) => l.id === J.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function Vo() {
      return J.label;
    }
    function ya() {
      switch (uo.find((o) => o.id === B).id) {
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
    function $a() {
      const t = Vt(20594), o = Vt(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Rn(t, o, n, l, a) {
      const r = he.steelVigaType, i = r === 0 ? Po() : Co();
      if (he.vigaMat === 0) {
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = `b${n}${c}`, s = `h${n}${c}`, m = {};
          m[d] = +Re(u.b).toFixed(2), m[s] = +Re(u.h).toFixed(2), t.addBinding(m, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${c + 1}`
          }), t.addBinding(m, s, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a2;
          const u = (_a2 = c.target) == null ? void 0 : _a2.key, d = u == null ? void 0 : u.match(new RegExp(`^b${n}(\\d+)$`)), s = u == null ? void 0 : u.match(new RegExp(`^h${n}(\\d+)$`));
          d && (o[parseInt(d[1])].b = Oe(c.value), ae()), s && (o[parseInt(s[1])].h = Oe(c.value), ae());
        });
      } else if (r <= 1) {
        for (let c = 0; c < o.length; c++) {
          const u = {};
          u[`p${n}${c}`] = o[c].profileIdx ?? 0, t.addBinding(u, `p${n}${c}`, {
            label: `sv${n}${c + 1}`,
            options: i
          });
        }
        t.on("change", (c) => {
          var _a2, _b;
          const d = (_b = (_a2 = c.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          d && (o[parseInt(d[1])].profileIdx = c.value, ae());
        });
      } else if (r === 2) {
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = {}, s = `${n}${c}`;
          d[`bf${s}`] = +Re(u.bf ?? 0.2).toFixed(3), d[`h${s}`] = +Re(u.hf ?? 0.4).toFixed(3), d[`tf${s}`] = +Re(u.tf ?? 0.015).toFixed(3), d[`tw${s}`] = +Re(u.tw ?? 0.01).toFixed(3), t.addBinding(d, `bf${s}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${c + 1}`
          }), t.addBinding(d, `h${s}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          }), t.addBinding(d, `tf${s}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${c + 1}`
          }), t.addBinding(d, `tw${s}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a2;
          const u = (_a2 = c.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const s = `${n}${d}`;
            u === `bf${s}` && (o[d].bf = Oe(c.value), ae()), u === `h${s}` && (o[d].hf = Oe(c.value), ae()), u === `tf${s}` && (o[d].tf = Oe(c.value), ae()), u === `tw${s}` && (o[d].tw = Oe(c.value), ae());
          }
        });
      } else {
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = {}, s = `${n}${c}`;
          d[`bc${s}`] = +Re(u.bc ?? 0.2).toFixed(3), d[`hc${s}`] = +Re(u.hc ?? 0.3).toFixed(3), d[`t${s}`] = +Re(u.t ?? 8e-3).toFixed(3), t.addBinding(d, `bc${s}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${c + 1}`
          }), t.addBinding(d, `hc${s}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          }), t.addBinding(d, `t${s}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a2;
          const u = (_a2 = c.target) == null ? void 0 : _a2.key;
          for (let d = 0; d < o.length; d++) {
            const s = `${n}${d}`;
            u === `bc${s}` && (o[d].bc = Oe(c.value), ae()), u === `hc${s}` && (o[d].hc = Oe(c.value), ae()), u === `t${s}` && (o[d].t = Oe(c.value), ae());
          }
        });
      }
    }
    function no() {
      var _a2;
      if (De) {
        try {
          De.dispose();
        } catch {
        }
        De = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), E !== "edificio" && E !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = va();
      if (!o) return;
      o.style.display = "";
      const n = T, l = Math.round(((_a2 = ee.nPisos) == null ? void 0 : _a2.val) ?? 3), a = ya(), r = $a(), i = oe.length || 1, c = se.length || 1;
      for (; he.perFloor.length < l; ) {
        const b = he.perFloor.length > 0 ? JSON.parse(JSON.stringify(he.perFloor[he.perFloor.length - 1])) : ga(i, c);
        he.perFloor.push(b);
      }
      he.perFloor.length > l && (he.perFloor.length = l);
      for (const b of he.perFloor) {
        for (; b.vigasX.length < i; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : oo());
        for (b.vigasX.length > i && (b.vigasX.length = i); b.vigasY.length < c; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : oo());
        b.vigasY.length > c && (b.vigasY.length = c);
      }
      De = new qo({
        title: `Sections (${n.label})`,
        container: o
      });
      const u = {
        colMat: he.colMat
      };
      if (De.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        he.colMat = b.value, no(), ae();
      }), he.colMat === 0) {
        const b = {
          forma: he.colShape
        };
        De.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          he.colShape = v.value, no(), ae();
        });
        const f = {
          fc: +Vt(he.fc).toFixed(1)
        };
        De.addBinding(f, "fc", {
          min: r[0],
          max: r[1],
          step: r[2],
          label: `f'c col (${Vo()})`
        }), De.on("change", (v) => {
          var _a3;
          ((_a3 = v.target) == null ? void 0 : _a3.key) === "fc" && (he.fc = Yo(v.value), ae());
        });
      } else if (he.colMat === 1) {
        const b = {
          colType: he.steelColType
        };
        De.addBinding(b, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          he.steelColType = f.value, no(), ae();
        });
      }
      De.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: he.vigaMat
      };
      if (De.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        he.vigaMat = b.value, no(), ae();
      }), he.vigaMat === 1) {
        const b = {
          vigaType: he.steelVigaType
        };
        De.addBinding(b, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          he.steelVigaType = f.value, no(), ae();
        });
      }
      const s = he.steelColType === 0 ? Po() : Co();
      he.steelVigaType === 0 ? Po() : Co();
      const m = B === "m" ? [
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
        const f = he.perFloor[b], v = De.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (he.colMat === 0) if (he.colShape === 1) {
          const M = {
            dCol: +Re(f.dCol).toFixed(2)
          };
          v.addBinding(M, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), v.on("change", (L) => {
            var _a3;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "dCol" && (f.dCol = Oe(L.value), ae());
          });
        } else {
          const M = {
            bCol: +Re(f.bCol).toFixed(2),
            hCol: +Re(f.hCol).toFixed(2)
          };
          v.addBinding(M, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), v.addBinding(M, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), v.on("change", (L) => {
            var _a3, _b;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bCol" && (f.bCol = Oe(L.value), ae()), ((_b = L.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = Oe(L.value), ae());
          });
        }
        else if (he.colMat === 1) if (he.steelColType <= 1) {
          const M = {
            col: f.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: s
          }).on("change", (L) => {
            f.colProfileIdx = L.value, ae();
          });
        } else if (he.steelColType === 2) {
          const M = {
            bf: +Re(f.colBf ?? 0.3).toFixed(3),
            h: +Re(f.colHf ?? 0.3).toFixed(3),
            tf: +Re(f.colTf ?? 0.02).toFixed(3),
            tw: +Re(f.colTw ?? 0.012).toFixed(3)
          };
          v.addBinding(M, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), v.addBinding(M, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), v.addBinding(M, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), v.addBinding(M, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), v.on("change", (L) => {
            var _a3, _b, _c, _d;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bf" && (f.colBf = Oe(L.value), ae()), ((_b = L.target) == null ? void 0 : _b.key) === "h" && (f.colHf = Oe(L.value), ae()), ((_c = L.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = Oe(L.value), ae()), ((_d = L.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = Oe(L.value), ae());
          });
        } else {
          const M = {
            bc: +Re(f.colBc ?? 0.3).toFixed(3),
            hc: +Re(f.colHc ?? 0.3).toFixed(3),
            t: +Re(f.colT ?? 0.01).toFixed(3)
          };
          v.addBinding(M, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), v.addBinding(M, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), v.addBinding(M, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), v.on("change", (L) => {
            var _a3, _b, _c;
            ((_a3 = L.target) == null ? void 0 : _a3.key) === "bc" && (f.colBc = Oe(L.value), ae()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Oe(L.value), ae()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = Oe(L.value), ae());
          });
        }
        else {
          const M = {
            bc: +Re(f.colBc ?? 0.3).toFixed(3),
            hc: +Re(f.colHc ?? 0.3).toFixed(3),
            t: +Re(f.colT ?? 0.01).toFixed(3),
            Es: +Vt(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +Vt(f.colFc ?? 28e3).toFixed(1),
            nuC: f.colNuC ?? 0.2
          };
          v.addBinding(M, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), v.addBinding(M, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), v.addBinding(M, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), v.addBlade({
            view: "separator"
          });
          const L = +Vt(1e8).toFixed(0), N = +Vt(3e8).toFixed(0), q = Math.max(1, Math.round((N - L) / 200));
          v.addBinding(M, "Es", {
            min: L,
            max: N,
            step: q,
            label: `Es (${Vo()})`
          }), v.addBinding(M, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(M, "fc", {
            min: r[0],
            max: r[1],
            step: r[2],
            label: `f'c (${Vo()})`
          }), v.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (I) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = I.target) == null ? void 0 : _a3.key) === "bc" && (f.colBc = Oe(I.value), ae()), ((_b = I.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Oe(I.value), ae()), ((_c = I.target) == null ? void 0 : _c.key) === "t" && (f.colT = Oe(I.value), ae()), ((_d = I.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = Yo(I.value), ae()), ((_e2 = I.target) == null ? void 0 : _e2.key) === "nuS" && (f.colNuS = I.value, ae()), ((_f = I.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = Yo(I.value), ae()), ((_g = I.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = I.value, ae());
          });
        }
        if (f.vigasX.length > 0) {
          const M = v.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Rn(M, f.vigasX, "x", a, m);
        }
        if (f.vigasY.length > 0) {
          const M = v.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Rn(M, f.vigasY, "y", a, m);
        }
      }
      De.addBlade({
        view: "separator"
      });
      const $ = De.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), y = {
        activar: st,
        direccion: yt === "x" ? 0 : 1,
        cantidad: tt
      };
      $.addBinding(y, "activar", {
        label: "Activar"
      }), $.addBinding(y, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), $.addBinding(y, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), $.on("change", (b) => {
        var _a3, _b, _c;
        ((_a3 = b.target) == null ? void 0 : _a3.key) === "activar" && (st = b.value, ae()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (yt = b.value === 0 ? "x" : "y", ae()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (tt = Math.round(b.value), ae());
      }), De.addBlade({
        view: "separator"
      });
      const x = De.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: ht,
        espesor: +Re($t).toFixed(3),
        subdivX: bo,
        subdivY: xo
      };
      x.addBinding(p, "activar", {
        label: "Activar losas"
      }), x.addBinding(p, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
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
        ((_a3 = b.target) == null ? void 0 : _a3.key) === "activar" && (ht = b.value, ae()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && ($t = Oe(b.value), ae()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (bo = Math.round(b.value), ae()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (xo = Math.round(b.value), ae());
      }), De.addBlade({
        view: "separator"
      });
      const g = De.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), w = {
        espesor: +Re(ct).toFixed(3),
        subdivH: Je,
        subdivW: at
      };
      g.addBinding(w, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
        label: `Espesor (${n.length})`
      }), g.addBinding(w, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), g.addBinding(w, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), g.on("change", (b) => {
        var _a3, _b, _c;
        ((_a3 = b.target) == null ? void 0 : _a3.key) === "espesor" && (ct = Oe(b.value), ae()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (Je = Math.round(b.value), ae()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (at = Math.round(b.value), ae());
      });
      const z = oe.length || 1, S = se.length || 1, H = z + 1, C = S + 1;
      if (z > 0) {
        const b = g.addFolder({
          title: `Muros dir X (${z} vanos)`,
          expanded: false
        });
        for (let f = 0; f < z; f++) for (let v = 0; v < C; v++) {
          const M = `wx_${f}_${v}`, L = _e.some((I) => I.dir === "x" && I.bay === f && I.axisIdx === v), N = {};
          N[M] = L;
          const q = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          b.addBinding(N, M, {
            label: q
          }).on("change", (I) => {
            I.value ? _e.push({
              dir: "x",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : _e = _e.filter((P) => !(P.dir === "x" && P.bay === f && P.axisIdx === v)), ae();
          });
        }
      }
      if (S > 0) {
        const b = g.addFolder({
          title: `Muros dir Y (${S} vanos)`,
          expanded: false
        });
        for (let f = 0; f < S; f++) for (let v = 0; v < H; v++) {
          const M = `wy_${f}_${v}`, L = _e.some((I) => I.dir === "y" && I.bay === f && I.axisIdx === v), N = {};
          N[M] = L;
          const q = `Vano Y${f + 1} / Eje X${v + 1}`;
          b.addBinding(N, M, {
            label: q
          }).on("change", (I) => {
            I.value ? _e.push({
              dir: "y",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : _e = _e.filter((P) => !(P.dir === "y" && P.bay === f && P.axisIdx === v)), ae();
          });
        }
      }
      if (_e.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${_e.length} ubicaciones`
        };
        g.addBinding(b, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Mt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (et || (et = t.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (wt) {
        try {
          wt.dispose();
        } catch {
        }
        wt = null;
      }
      t.innerHTML = "";
      const o = E.charAt(0).toUpperCase() + E.slice(1);
      ve = new qo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = kn()[E];
      if (n) {
        const a = {};
        for (const i of n) a[i.key] = ee[i.key].val;
        for (const i of n) ve.addBinding(a, i.key, {
          min: ee[i.key].min,
          max: ee[i.key].max,
          step: ee[i.key].step,
          label: ee[i.key].label
        });
        const r = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const i of n) {
          const c = {
            min: ee[i.key].min,
            max: ee[i.key].max
          };
          r.addBinding(c, "min", {
            label: `${i.key} min`,
            step: i.step
          }), r.addBinding(c, "max", {
            label: `${i.key} max`,
            step: i.step
          }), r.on("change", () => {
            ee[i.key] && (ee[i.key].min = c.min, ee[i.key].max = c.max, ee[i.key].val < c.min && (ee[i.key].val = c.min), ee[i.key].val > c.max && (ee[i.key].val = c.max)), Mt(), ae();
          });
        }
        ve.on("change", (i) => {
          var _a2;
          const c = (_a2 = i.target) == null ? void 0 : _a2.key;
          if (c && ee[c]) {
            if (ee[c].val = i.value, E === "edificio" && (c === "nVanosX" || c === "nVanosY" || c === "nPisos")) {
              if (c === "nVanosX" || c === "nVanosY") {
                const u = Math.round(ee.nVanosX.val), d = Math.round(ee.nVanosY.val);
                for (; oe.length < u; ) oe.push(oe[oe.length - 1] ?? T.defaultSpan);
                for (oe.length > u && (oe.length = u); se.length < d; ) se.push(se[se.length - 1] ?? T.defaultSpan * 0.8);
                se.length > d && (se.length = d);
              }
              Mt();
            }
            ae();
          }
        });
      }
      if (E === "edificio") {
        if (Lt) {
          try {
            Lt.dispose();
          } catch {
          }
          Lt = null;
        }
        const a = document.getElementById("luces-panel");
        if (a) {
          a.innerHTML = "";
          const r = T;
          Lt = new qo({
            title: `Luces (${r.length})`,
            container: a
          });
          const i = Lt.addFolder({
            title: "Luces X",
            expanded: true
          }), c = {};
          for (let s = 0; s < oe.length; s++) c[`svx_${s + 1}`] = oe[s];
          for (let s = 0; s < oe.length; s++) i.addBinding(c, `svx_${s + 1}`, {
            min: r.spanRange[0],
            max: r.spanRange[1],
            step: r.spanRange[2],
            label: `svx${s + 1}`
          });
          i.on("change", (s) => {
            var _a2, _b;
            const $ = (_b = (_a2 = s.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (oe[parseInt($[1]) - 1] = s.value, ae());
          });
          const u = Lt.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let s = 0; s < se.length; s++) d[`svy_${s + 1}`] = se[s];
          for (let s = 0; s < se.length; s++) u.addBinding(d, `svy_${s + 1}`, {
            min: r.spanRange[0],
            max: r.spanRange[1],
            step: r.spanRange[2],
            label: `svy${s + 1}`
          });
          u.on("change", (s) => {
            var _a2, _b;
            const $ = (_b = (_a2 = s.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (se[parseInt($[1]) - 1] = s.value, ae());
          });
        }
      }
      if (no(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const a = Fo()[E];
        if (a && a.length > 0) {
          const r = {};
          a.forEach((c, u) => {
            r[c.label] = u;
          });
          const i = {
            apoyo: lt
          };
          ve.addBinding(i, "apoyo", {
            label: "Apoyo",
            options: r
          }).on("change", (c) => {
            lt = c.value, ae();
          });
        }
        if (E === "placa-3q" || E === "placa-q4") {
          const r = {
            teoria: mt
          };
          ve.addBinding(r, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (i) => {
            mt = i.value, ae();
          });
        }
      }
      const l = Sn()[E];
      if (l && l.length > 0) {
        wt = new qo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const i of l) a[i.key] = qe[i.key].val;
        for (const i of l) wt.addBinding(a, i.key, {
          min: qe[i.key].min,
          max: qe[i.key].max,
          step: qe[i.key].step,
          label: qe[i.key].label
        });
        const r = wt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const i of l) {
          const c = {
            min: qe[i.key].min,
            max: qe[i.key].max
          };
          r.addBinding(c, "min", {
            label: `${i.key} min`,
            step: i.step
          }), r.addBinding(c, "max", {
            label: `${i.key} max`,
            step: i.step
          }), r.on("change", () => {
            qe[i.key] && (qe[i.key].min = c.min, qe[i.key].max = c.max, qe[i.key].val < c.min && (qe[i.key].val = c.min), qe[i.key].val > c.max && (qe[i.key].val = c.max)), Mt(), ae();
          });
        }
        wt.on("change", (i) => {
          var _a2;
          const c = (_a2 = i.target) == null ? void 0 : _a2.key;
          if (c && qe[c]) {
            if (qe[c].val = i.value, e.nodeInputs) {
              const u = e.nodeInputs.val;
              u.supports && (e.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => Ko(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, r) => {
          if (ee[a]) ee[a].val = r, ae(), Mt();
          else if (qe[a]) {
            if (qe[a].val = r, e.nodeInputs) {
              const i = e.nodeInputs.val;
              i.supports && (e.nodeInputs.val = {
                supports: i.supports
              });
            }
            setTimeout(() => {
              Ko(), Mt();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const r in ee) a[r] = ee[r].val;
          for (const r in qe) a[r] = qe[r].val;
          return a;
        },
        setGenerator: Ie
      };
    }
    function wa() {
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (wt) {
        try {
          wt.dispose();
        } catch {
        }
        wt = null;
      }
      if (De) {
        try {
          De.dispose();
        } catch {
        }
        De = null;
      }
      if (Lt) {
        try {
          Lt.dispose();
        } catch {
        }
        Lt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && et && (n.innerHTML = et);
    }
    const re = document.createElement("div");
    re.id = "cad3d-panel";
    const On = document.createElement("style");
    On.textContent = `
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
  `, document.head.appendChild(On), Ka() === "light" && document.documentElement.classList.add("awatif-light"), Ua((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), E && Ke(true);
    }), re.innerHTML = `
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
    let We = null;
    function Ma() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = B, r = h, i = [];
      if (i.push("# Awatif FEM \u2014 Model Export"), i.push(`# Generator: ${E || "custom"}`), i.push(`# Units: ${r}, ${a}`), i.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), i.push(""), i.push(`## NODES (${t.length})`), i.push("# idx     X          Y          Z"), t.forEach((d, s) => {
        i.push(`  ${String(s).padStart(4)}  ${d[0].toFixed(4).padStart(10)}  ${d[1].toFixed(4).padStart(10)}  ${d[2].toFixed(4).padStart(10)}`);
      }), i.push(""), i.push(`## ELEMENTS (${o.length})`), i.push("# idx    nodeI  nodeJ"), o.forEach((d, s) => {
        const m = d.map(($) => String($).padStart(6)).join("");
        i.push(`  ${String(s).padStart(4)}  ${m}`);
      }), i.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (i.push(`## SUPPORTS (${n.supports.size})`), i.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((d, s) => {
        const m = d.map(($) => $ ? "  1" : "  0").join("");
        i.push(`  ${String(s).padStart(4)} ${m}`);
      }), i.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (i.push(`## LOADS (${n.loads.size})`), i.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((d, s) => {
        const m = d.map(($) => $.toFixed(3).padStart(11)).join(" ");
        i.push(`  ${String(s).padStart(4)}  ${m}`);
      }), i.push("")), l) {
        i.push("## ELEMENT PROPERTIES");
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
        ], s = "# elem  " + d.map((m) => m.name.padStart(12)).join(" ");
        i.push(s);
        for (let m = 0; m < o.length; m++) {
          const $ = d.map((y) => {
            var _a3;
            const x = (_a3 = y.map) == null ? void 0 : _a3.get(m);
            return x !== void 0 ? x.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          i.push(`  ${String(m).padStart(4)}  ${$}`);
        }
        i.push("");
      }
      const c = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      c && c.size > 0 && (i.push(`## DISPLACEMENTS (${c.size} nodes)`), i.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), c.forEach((d, s) => {
        const m = d.map(($) => $.toExponential(4).padStart(12)).join(" ");
        i.push(`  ${String(s).padStart(4)}  ${m}`);
      }), i.push(""));
      const u = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (u && u.size > 0 && (i.push(`## REACTIONS (${u.size} supports)`), i.push("# node          Rx           Ry           Rz           Mx           My           Mz"), u.forEach((d, s) => {
        const m = d.map(($) => $.toFixed(4).padStart(12)).join(" ");
        i.push(`  ${String(s).padStart(4)}  ${m}`);
      }), i.push("")), E) {
        i.push("## CLI COMMAND");
        const d = Object.entries(ee).map(([s, m]) => `${s}=${m.val}`).join(" ");
        i.push(`cad.${E === "edificio" ? "building" : E}(${d})`);
      }
      return i.join(`
`);
    }
    let ho = false;
    function ka() {
      var _a2, _b, _c, _d;
      if (We) {
        We.remove(), We = null, ho = false;
        return;
      }
      const t = Ma();
      We = document.createElement("div"), We.id = "export-overlay", We.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, We.innerHTML = `
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
    `, document.body.appendChild(We), (_a2 = We.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        We == null ? void 0 : We.remove(), We = null, ho = false;
      }), (_b = We.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = We.querySelector("#export-body"), n = We.querySelector("#export-minimize");
        ho = !ho, ho ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", We.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", We.style.width = "720px");
      }), (_c = We.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = We.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = We.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = We.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, r = {
          generator: E || "custom",
          units: {
            force: h,
            length: B
          },
          nodes: o.map((s, m) => ({
            id: m,
            x: s[0],
            y: s[1],
            z: s[2]
          })),
          elements: n.map((s, m) => ({
            id: m,
            nodes: s
          }))
        };
        (l == null ? void 0 : l.supports) && (r.supports = [], l.supports.forEach((s, m) => r.supports.push({
          node: m,
          dofs: s
        }))), (l == null ? void 0 : l.loads) && (r.loads = [], l.loads.forEach((s, m) => r.loads.push({
          node: m,
          forces: s
        }))), a && (r.properties = {}, a.elasticities && (r.properties.E = Object.fromEntries(a.elasticities)), a.areas && (r.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (r.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (r.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (r.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (r.properties.J = Object.fromEntries(a.torsionalConstants)));
        const i = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        i && i.size > 0 && (r.displacements = {}, i.forEach((s, m) => r.displacements[m] = s));
        const c = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        c && c.size > 0 && (r.reactions = {}, c.forEach((s, m) => r.reactions[m] = s));
        const u = We.querySelector("#export-text");
        u.value = JSON.stringify(r, null, 2);
        const d = We.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Le() {
      var _a2, _b, _c;
      const t = re.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let r = 0, i = 0, c = 0;
        for (const d of n) d.length === 2 ? r++ : d.length === 3 ? i++ : d.length === 4 && c++;
        let u = `${o}n ${l}e ${a}s`;
        (c > 0 || i > 0) && (u += ` | ${r}fr`, c > 0 && (u += ` ${c}q4`), i > 0 && (u += ` ${i}tri`)), t.textContent = u;
      }
    }
    function Go() {
      var _a2;
      if (!bt || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const r = Va(t, o, n, l, Math.min(a, 12));
        if (r.frequencies && r.frequencies.length > 0) {
          je = r, It = t.map((d) => [
            ...d
          ]), ot = 0;
          const { extent: i } = Nt(), c = (_a2 = r.modeShapes) == null ? void 0 : _a2[0];
          if (c) {
            let d = 0;
            for (let s = 0; s < t.length; s++) {
              const m = c[s * 6] || 0, $ = c[s * 6 + 1] || 0, y = c[s * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(m * m + $ * $ + y * y));
            }
            So = d > 1e-12 ? i * 0.05 / d : 1;
          }
          const u = `${E} \u2014 ${t.length}n ${o.length}e`;
          go.render(r, {
            title: u
          }), go.div.style.display = "", vo(), console.log(`Modal: ${r.frequencies.length} modos. f\u2081 = ${r.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), je = null;
      }
    }
    function Xo() {
      Ct && (cancelAnimationFrame(Ct), Ct = 0), It.length > 0 && (e.nodes.val = It.map((t) => [
        ...t
      ])), go.div.style.display = "none", je = null;
    }
    function vo() {
      var _a2;
      if (Ct && cancelAnimationFrame(Ct), !(je == null ? void 0 : je.modeShapes) || !It.length) return;
      const t = je.modeShapes[ot];
      if (!t) return;
      const o = ((_a2 = je.frequencies) == null ? void 0 : _a2[ot]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = It.length, r = e.elements.rawVal, { extent: i } = Nt(), c = re.querySelector("#cad3d-modal-scale"), u = c && parseFloat(c.value) || 5;
      let d = 0;
      for (let S = 0; S < a; S++) {
        const H = t[S * 6] || 0, C = t[S * 6 + 1] || 0, b = t[S * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(H * H + C * C + b * b));
      }
      const s = d > 1e-12 ? i * u / 100 / d : 1, m = Ce();
      if (!m) return;
      let $ = null, y = null, x = null;
      m.scene.traverse((S) => {
        var _a3, _b;
        !$ && S.isPoints && S.geometry && ($ = S), !y && S.isLineSegments && S.geometry && !S.name && (y = S), !x && S.isMesh && ((_a3 = S.material) == null ? void 0 : _a3.transparent) && ((_b = S.material) == null ? void 0 : _b.opacity) < 0.5 && S.geometry && (x = S);
      });
      const p = new Float32Array(a * 3), g = [];
      for (const S of r) if (S.length === 2) g.push([
        S[0],
        S[1]
      ]);
      else for (let H = 0; H < S.length; H++) g.push([
        S[H],
        S[(H + 1) % S.length]
      ]);
      const w = new Float32Array(g.length * 6);
      function z() {
        const S = (performance.now() - l) / 1e3, H = Math.sin(2 * Math.PI * n * S) * s;
        for (let C = 0; C < a; C++) {
          const b = It[C];
          p[C * 3] = b[0] + (t[C * 6] || 0) * H, p[C * 3 + 1] = b[1] + (t[C * 6 + 1] || 0) * H, p[C * 3 + 2] = b[2] + (t[C * 6 + 2] || 0) * H;
        }
        if ($) {
          const C = $.geometry, b = C.getAttribute("position");
          b && b.array.length === p.length ? (b.array.set(p), b.needsUpdate = true) : C.setAttribute("position", new Ut(p.slice(), 3));
        }
        if (y) {
          for (let f = 0; f < g.length; f++) {
            const [v, M] = g[f];
            w[f * 6] = p[v * 3], w[f * 6 + 1] = p[v * 3 + 1], w[f * 6 + 2] = p[v * 3 + 2], w[f * 6 + 3] = p[M * 3], w[f * 6 + 4] = p[M * 3 + 1], w[f * 6 + 5] = p[M * 3 + 2];
          }
          const C = y.geometry, b = C.getAttribute("position");
          b && b.array.length === w.length ? (b.array.set(w), b.needsUpdate = true) : C.setAttribute("position", new Ut(w.slice(), 3));
        }
        if (x) {
          const C = [];
          for (const b of r) if (b.length === 3) {
            const [f, v, M] = b;
            C.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), C.push(p[v * 3], p[v * 3 + 1], p[v * 3 + 2]), C.push(p[M * 3], p[M * 3 + 1], p[M * 3 + 2]);
          } else if (b.length === 4) {
            const [f, v, M, L] = b;
            C.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), C.push(p[v * 3], p[v * 3 + 1], p[v * 3 + 2]), C.push(p[M * 3], p[M * 3 + 1], p[M * 3 + 2]), C.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), C.push(p[M * 3], p[M * 3 + 1], p[M * 3 + 2]), C.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]);
          }
          if (C.length > 0) {
            const b = x.geometry, f = new Float32Array(C), v = b.getAttribute("position");
            v && v.array.length === f.length ? (v.array.set(f), v.needsUpdate = true) : b.setAttribute("position", new Ut(f, 3));
          }
        }
        m.render(), Ct = requestAnimationFrame(z);
      }
      Ct = requestAnimationFrame(z);
    }
    function Ko() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = R("CM") ?? 0, p = R("CV") ?? 0, g = x + p, w = R("Ex") ?? 0, z = R("Ey") ?? 0;
        if (g === 0 && w === 0 && z === 0) return;
        const S = /* @__PURE__ */ new Map(), H = [];
        for (let I = 0; I < t.length; I++) n.supports.has(I) || H.push(I);
        const C = (I) => Math.round(I * 1e3) / 1e3, b = /* @__PURE__ */ new Set();
        n.supports.forEach((I, P) => {
          b.add(`${C(t[P][0])},${C(t[P][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const I of H) b.has(`${C(t[I][0])},${C(t[I][1])}`) && f.add(I);
        const v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (w !== 0 || z !== 0) {
          let I = -1 / 0, P = -1 / 0;
          for (const Y of f) I = Math.max(I, C(t[Y][0])), P = Math.max(P, C(t[Y][1]));
          const _ = /* @__PURE__ */ new Map();
          for (const Y of f) {
            const G = C(t[Y][2]);
            _.has(G) || _.set(G, []), _.get(G).push(Y);
          }
          _.forEach((Y) => {
            if (w !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const Z of Y) if (C(t[Z][0]) === I) {
                const W = C(t[Z][1]);
                G.has(W) || (G.add(W), v.add(Z));
              }
            }
            if (z !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const Z of Y) if (C(t[Z][1]) === P) {
                const W = C(t[Z][0]);
                G.has(W) || (G.add(W), M.add(Z));
              }
            }
          });
        }
        const L = 9.81, N = /* @__PURE__ */ new Map();
        for (let I = 0; I < o.length; I++) {
          const P = o[I], _ = ((_a2 = l.densities) == null ? void 0 : _a2.get(I)) ?? 0;
          if (!(Math.abs(_) < 1e-15)) {
            if (P.length === 2) {
              const Y = ((_b = l.areas) == null ? void 0 : _b.get(I)) ?? 0, G = t[P[0]], Z = t[P[1]], W = Math.sqrt((Z[0] - G[0]) ** 2 + (Z[1] - G[1]) ** 2 + (Z[2] - G[2]) ** 2), X = -(_ * Y * W * L) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + X), N.set(P[1], (N.get(P[1]) ?? 0) + X);
            } else if (P.length >= 3) {
              const Y = ((_c = l.thicknesses) == null ? void 0 : _c.get(I)) ?? 0;
              let G = 0;
              if (P.length === 3) {
                const [D, X, de] = P.map((Me) => t[Me]);
                G = 0.5 * Math.abs((X[0] - D[0]) * (de[1] - D[1]) - (de[0] - D[0]) * (X[1] - D[1]));
              } else if (P.length === 4) {
                const [D, X, de, Me] = P.map(($e) => t[$e]);
                if (G = 0.5 * Math.abs((X[0] - D[0]) * (de[1] - D[1]) - (de[0] - D[0]) * (X[1] - D[1])) + 0.5 * Math.abs((de[0] - D[0]) * (Me[1] - D[1]) - (Me[0] - D[0]) * (de[1] - D[1])), G < 1e-10) {
                  const $e = [
                    X[0] - D[0],
                    X[1] - D[1],
                    X[2] - D[2]
                  ], K = [
                    Me[0] - D[0],
                    Me[1] - D[1],
                    Me[2] - D[2]
                  ], le = [
                    $e[1] * K[2] - $e[2] * K[1],
                    $e[2] * K[0] - $e[0] * K[2],
                    $e[0] * K[1] - $e[1] * K[0]
                  ];
                  G = Math.sqrt(le[0] ** 2 + le[1] ** 2 + le[2] ** 2);
                }
              }
              const W = -(_ * Y * G * L) / P.length;
              for (const D of P) N.set(D, (N.get(D) ?? 0) + W);
            }
          }
        }
        const q = /* @__PURE__ */ new Set();
        for (const I of o) I.length === 2 && (q.add(I[0]), q.add(I[1]));
        for (const I of H) {
          const P = v.has(I) ? w : 0, _ = M.has(I) ? z : 0, Y = N.get(I) ?? 0, G = q.has(I) ? g : 0, Z = Y + G;
          (P !== 0 || _ !== 0 || Math.abs(Z) > 1e-10) && S.set(I, [
            P,
            _,
            Z,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: S
        }, e.nodeInputs.val = n;
      }
      const a = performance.now();
      let r = 0, i = 0, c = 0;
      for (const x of o) x.length === 2 ? r++ : x.length === 3 ? c++ : x.length === 4 && i++;
      const u = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, s = t.length * 6, m = s - u * 6, $ = [], y = (x) => $.push(x);
      y('<b style="color:var(--cad-heading)">FEM Solver</b>'), y(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), r && y(`&nbsp;&nbsp;Frames: <b>${r}</b>`), i && y(`&nbsp;&nbsp;Shell Q4: <b>${i}</b>`), c && y(`&nbsp;&nbsp;Triangulos: <b>${c}</b>`), y(`&nbsp;&nbsp;Apoyos: ${u} &nbsp;|&nbsp; Cargas: ${d}`), y(`<span style="color:var(--cad-info)">DOFs:</span> ${s} total, ~${m} libres`), y('<hr style="border-color:var(--cad-border);margin:4px 0">'), y(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${s}&times;${s})`), y("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const x = ut(t, o, n, l), p = performance.now() - a;
        if (x) {
          e.deformOutputs.val = x, y(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let g = 0, w = -1, z = 0, S = 0;
          x.deformations && x.deformations.forEach((v, M) => {
            const L = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            L > g && (g = L, w = M, z = v[0], S = v[2]);
          }), y('<span style="color:#888">3.</span> Desplazamientos:'), y(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${w})</span>`), y(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(z * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(S * 1e3).toFixed(4)} mm`);
          const H = performance.now(), C = po(t, o, l, x), b = performance.now() - H;
          C && (e.analyzeOutputs.val = C, y(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), y("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - a;
          y('<hr style="border-color:var(--cad-border);margin:4px 0">'), y(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const p = performance.now() - a;
        y(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), bt && setTimeout(() => Go(), 50);
    }
    function Uo(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, r = Math.min(t, o), i = Math.max(t, o), c = r * r * r * i * (1 / 3 - 0.21 * r / i * (1 - r * r * r * r / (12 * i * i * i * i)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: c
      };
    }
    function Bn(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, a = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: a
      };
    }
    function Zo(t, o, n, l) {
      const a = o - 2 * n, r = 2 * t * n + a * l, i = (t * o * o * o - (t - l) * a * a * a) / 12, c = (2 * n * t * t * t + a * l * l * l) / 12, u = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: r,
        Iz: i,
        Iy: c,
        J: u
      };
    }
    function Qo(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, r = t * o - l * a, i = (t * o * o * o - l * a * a * a) / 12, c = (o * t * t * t - a * l * l * l) / 12, u = (t - n) * (o - n), d = 2 * ((t - n) / n + (o - n) / n), s = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: r,
        Iz: i,
        Iy: c,
        J: s
      };
    }
    function Sa(t, o, n, l, a, r, i) {
      const u = 4700 * Math.sqrt(r / 1e3) * 1e3 / l, d = t - 2 * n, s = o - 2 * n, m = t * o - d * s, $ = (t * o * o * o - d * s * s * s) / 12, y = (o * t * t * t - s * d * d * d) / 12, x = d * s, p = d * s * s * s / 12, g = s * d * d * d / 12, w = m + u * x, z = $ + u * p, S = y + u * g, H = l / (2 * (1 + a)), C = (t - n) * (o - n), b = 2 * ((t - n) / n + (o - n) / n), f = 4 * C * C / (b > 0 ? b : 1);
      return {
        A: w,
        Iz: z,
        Iy: S,
        J: f,
        Es: l,
        Gs: H,
        A_steel: m,
        A_conc: x
      };
    }
    function Ht() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = T, n = {
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
      if ((E === "edificio" || E === "frame") && ye.size > 0) {
        const { colMat: a, vigaMat: r, colShape: i, fc: c, perFloor: u } = he, d = 4700 * Math.sqrt(c / 1e3) * 1e3, s = d / (2 * 1.2), m = 24 / 9.80665, $ = o.E, y = o.G, x = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (Fe.has(p)) {
            const v = 4700 * Math.sqrt(c / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(p, v), n.poissonsRatios.set(p, M), n.thicknesses.set(p, ct), n.shearModuli.set(p, v / (2 * (1 + M))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (Oo.has(p)) {
            const v = 4700 * Math.sqrt(c / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(p, v), n.poissonsRatios.set(p, M), n.thicknesses.set(p, $t), n.shearModuli.set(p, v / (2 * (1 + M))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const g = ye.has(p), w = Pe.get(p) ?? 0, z = u[w] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let S, H, C, b;
          if (g) if (a === 0) H = d, C = s, b = m, S = i === 1 ? Bn(z.dCol) : Uo(z.bCol, z.hCol), n.sectionShapes.set(p, i === 1 ? {
            type: "circ",
            d: z.dCol
          } : {
            type: "rect",
            b: z.bCol,
            h: z.hCol
          });
          else if (a === 1) {
            H = $, C = y, b = x;
            const v = he.steelColType;
            if (v <= 1) {
              const M = Jt[z.colProfileIdx] ?? Jt[0];
              S = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (v === 2) {
              const M = z.colBf ?? 0.3, L = z.colHf ?? 0.3, N = z.colTf ?? 0.02, q = z.colTw ?? 0.012;
              S = Zo(M, L, N, q);
              const I = `I${(L * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: M,
                h: L,
                tf: N,
                tw: q,
                name: I
              });
            } else {
              const M = z.colBc ?? 0.3, L = z.colHc ?? 0.3, N = z.colT ?? 0.01;
              S = Qo(M, L, N);
              const q = `\u25A1${(L * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(N * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: M,
                h: L,
                tw: N,
                name: q
              });
            }
          } else {
            const v = z.colBc ?? 0.3, M = z.colHc ?? 0.3, L = z.colT ?? 0.01, N = z.colFc ?? 28e3, q = z.colEs ?? 2e8, I = z.colNuS ?? 0.3;
            z.colNuC;
            const P = Sa(v, M, L, q, I, N);
            S = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, H = P.Es, C = P.Gs;
            const _ = 7.85, Y = 24 / 9.80665;
            b = (_ * P.A_steel + Y * P.A_conc) / (P.A_steel + P.A_conc);
            const G = `CFT ${(M * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(L * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: v,
              h: M,
              tw: L,
              name: G
            });
          }
          else {
            const v = Xe.get(p), M = v ? v.dir === "x" ? z.vigasX : z.vigasY : [], L = v ? M[v.bay] ?? M[0] ?? oo() : oo();
            if (r === 0) H = d, C = s, b = m, S = Uo(L.b, L.h), n.sectionShapes.set(p, {
              type: "rect",
              b: L.b,
              h: L.h
            });
            else {
              H = $, C = y, b = x;
              const N = he.steelVigaType;
              if (N <= 1) {
                const q = Jt[L.profileIdx ?? 0] ?? Jt[0];
                S = {
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
              } else if (N === 2) {
                const q = L.bf ?? 0.2, I = L.hf ?? 0.4, P = L.tf ?? 0.015, _ = L.tw ?? 0.01;
                S = Zo(q, I, P, _);
                const Y = `I${(I * 100).toFixed(0)}x${(q * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: q,
                  h: I,
                  tf: P,
                  tw: _,
                  name: Y
                });
              } else {
                const q = L.bc ?? 0.2, I = L.hc ?? 0.3, P = L.t ?? 8e-3;
                S = Qo(q, I, P);
                const _ = `\u25A1${(I * 100).toFixed(0)}x${(q * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: q,
                  h: I,
                  tw: P,
                  name: _
                });
              }
            }
          }
          const f = me.get(p);
          if (f) {
            if ((f.material ?? 1) === 0 ? (H = d, C = s, b = m) : (H = $, C = y, b = x), f.secType === "rect" && f.b && f.h) S = Uo(f.b, f.h), n.sectionShapes.set(p, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) S = Bn(f.b), n.sectionShapes.set(p, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const M = Jt[f.profileIdx] ?? Jt[0];
              S = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (f.secType === "I-param" && f.bf && f.hf && f.tf && f.tw) {
              S = Zo(f.bf, f.hf, f.tf, f.tw);
              const M = `I${(f.hf * 100).toFixed(0)}x${(f.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: f.bf,
                h: f.hf,
                tf: f.tf,
                tw: f.tw,
                name: M
              });
            } else if (f.secType === "tubular" && f.bc && f.hc && f.t) {
              S = Qo(f.bc, f.hc, f.t);
              const M = `\u25A1${(f.hc * 100).toFixed(0)}x${(f.bc * 100).toFixed(0)}x${(f.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: f.bc,
                h: f.hc,
                tw: f.t,
                name: M
              });
            }
          }
          n.elasticities.set(p, H), n.shearModuli.set(p, C), n.areas.set(p, S.A), n.momentsOfInertiaZ.set(p, S.Iy), n.momentsOfInertiaY.set(p, S.Iz), n.torsionalConstants.set(p, S.J), n.densities.set(p, b);
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function jn(t) {
      re.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
      (_a2 = re.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (s) => {
        s.stopPropagation(), re.classList.add("collapsed");
      }), (_b = re.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (s) => {
        s.stopPropagation(), re.classList.remove("collapsed");
      }), re.querySelectorAll("[data-ex]").forEach((s) => {
        s.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = s.dataset.ex;
          jn($), ze.example($);
        });
      }), re.querySelectorAll("[data-view]").forEach((s) => {
        s.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = s.dataset.view;
          Rt($), re.querySelectorAll("[data-view]").forEach((y) => y.classList.remove("view-active")), s.classList.add("view-active");
        });
      }), (_c = re.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (s) => {
        s.stopPropagation(), E = "", xa.val = false, wa(), ze.clear();
      }), (_d = re.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (s) => {
        var _a3;
        s.stopPropagation(), xt && (xt = false, Xt()), kt && Lo(), it = !it, (_a3 = re.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", it);
        const $ = Ce();
        $ && ($.controls.enabled = !it), it || Io();
      }), (_e2 = re.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (s) => {
        var _a3;
        s.stopPropagation(), xt && (xt = false, Xt()), it && Io(), kt = !kt, (_a3 = re.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", kt), kt ? qa() : Lo();
      }), (_f = re.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (s) => {
        var _a3;
        s.stopPropagation(), it && Io(), kt && Lo(), xt = !xt, (_a3 = re.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", xt), xt || Xt();
      }), (_g = re.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (s) => {
        s.stopPropagation(), ka();
      });
      const t = re.querySelector("#cad3d-force-unit");
      t && (t.value = h, t.addEventListener("change", (s) => {
        s.stopPropagation(), h = t.value, T = Qt(h, B), E && Ie(E);
      }));
      const o = re.querySelector("#cad3d-length-unit");
      o && (o.value = B, o.addEventListener("change", (s) => {
        s.stopPropagation(), B = o.value, T = Qt(h, B), E && Ie(E);
      })), re.querySelectorAll("[data-preset]").forEach((s) => {
        s.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = s.dataset.preset, y = be[$];
          y && (h = y.force, B = y.length, J = y.stress, T = Qt(h, B), t && (t.value = h), o && (o.value = B), re.querySelectorAll("[data-preset]").forEach((x) => {
            x.classList.toggle("active", x.dataset.preset === $);
          }), E && Ie(E), console.log(`Preset: ${$} \u2192 ${h}+${B}, stress: ${J.label}`));
        });
      }), (_h = re.querySelector("#cad3d-log")) == null ? void 0 : _h.addEventListener("click", (s) => {
        s.stopPropagation(), Na();
      }), (_i = re.querySelector("#cad3d-pushover")) == null ? void 0 : _i.addEventListener("click", (s) => {
        s.stopPropagation(), Ra();
      }), (_j = re.querySelector("#cad3d-nonlinear")) == null ? void 0 : _j.addEventListener("click", (s) => {
        s.stopPropagation(), Ba();
      }), (_k = re.querySelector("#cad3d-fem-solver")) == null ? void 0 : _k.addEventListener("click", (s) => {
        s.stopPropagation(), Da();
      }), (_l = re.querySelector("#cad3d-modal")) == null ? void 0 : _l.addEventListener("click", (s) => {
        var _a3, _b2;
        s.stopPropagation(), bt = !bt, (_a3 = re.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", bt);
        const $ = re.querySelector("#cad3d-mode-prev"), y = re.querySelector("#cad3d-mode-next"), x = re.querySelector("#cad3d-mode-label"), p = re.querySelector("#cad3d-modal-scale");
        if (bt) {
          const g = Ce();
          ((_b2 = g == null ? void 0 : g.settings) == null ? void 0 : _b2.loads) && (zo = g.settings.loads.rawVal, g.settings.loads.val = false), Go(), $.style.display = "", y.style.display = "", x.style.display = "", p && (p.style.display = ""), n();
        } else Xo(), $.style.display = "none", y.style.display = "none", x.style.display = "none", p && (p.style.display = "none"), E && E !== "placa-q4" && E !== "placa-3q" && ae(), setTimeout(() => {
          var _a4;
          const g = Ce();
          ((_a4 = g == null ? void 0 : g.settings) == null ? void 0 : _a4.loads) && zo && (g.settings.loads.val = true);
        }, 600);
      });
      function n() {
        var _a3;
        const s = re.querySelector("#cad3d-mode-label");
        if (!s || !(je == null ? void 0 : je.frequencies)) return;
        const m = je.frequencies[ot], $ = m > 0 ? 1 / m : 0, y = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let x = 0; x <= ot; x++) {
          const p = (_a3 = je.massParticipation) == null ? void 0 : _a3[x];
          if (p) for (let g = 0; g < 6; g++) y[g] += p[g];
        }
        s.textContent = `Modo ${ot + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${$.toFixed(3)}s \u2014 \u03A3Ux=${(y[0] * 100).toFixed(1)}% \u03A3Uy=${(y[1] * 100).toFixed(1)}% \u03A3Rz=${(y[5] * 100).toFixed(1)}%`;
      }
      (_m = re.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (s) => {
        if (s.stopPropagation(), !(je == null ? void 0 : je.modeShapes)) return;
        ot = (ot - 1 + je.modeShapes.length) % je.modeShapes.length;
        const m = je.modeShapes[ot], { extent: $ } = Nt();
        let y = 0;
        for (let x = 0; x < It.length; x++) {
          const p = m[x * 6] || 0, g = m[x * 6 + 1] || 0, w = m[x * 6 + 2] || 0;
          y = Math.max(y, Math.sqrt(p * p + g * g + w * w));
        }
        So = y > 1e-12 ? $ * 0.05 / y : 1, vo(), n();
      }), (_n2 = re.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (s) => {
        if (s.stopPropagation(), !(je == null ? void 0 : je.modeShapes)) return;
        ot = (ot + 1) % je.modeShapes.length;
        const m = je.modeShapes[ot], { extent: $ } = Nt();
        let y = 0;
        for (let x = 0; x < It.length; x++) {
          const p = m[x * 6] || 0, g = m[x * 6 + 1] || 0, w = m[x * 6 + 2] || 0;
          y = Math.max(y, Math.sqrt(p * p + g * g + w * w));
        }
        So = y > 1e-12 ? $ * 0.05 / y : 1, vo(), n();
      });
      const l = re.querySelector("#cad3d-modal-scale");
      l == null ? void 0 : l.addEventListener("mousedown", (s) => s.stopPropagation()), l == null ? void 0 : l.addEventListener("change", () => {
        bt && (je == null ? void 0 : je.modeShapes) && vo();
      });
      const a = re.querySelector("#cad3d-cmd");
      a == null ? void 0 : a.addEventListener("mousedown", (s) => s.stopPropagation()), document.addEventListener("keydown", (s) => {
        var _a3;
        if ((s.ctrlKey || s.metaKey) && s.key === "z" && !s.shiftKey) {
          s.preventDefault(), Yn();
          return;
        }
        if ((s.ctrlKey || s.metaKey) && (s.key === "y" || s.key === "z" && s.shiftKey)) {
          s.preventDefault(), Vn();
          return;
        }
        if ((s.key === "Delete" || s.key === "Backspace") && Ae.size > 0) {
          s.preventDefault(), Ae.forEach((m) => ne.add(m)), Ae.clear(), zt && (zt.remove(), zt = null), ae();
          return;
        }
        if (s.key === "Escape") {
          if (kt) if (He !== null) {
            He = null;
            const m = Ce();
            Ue && m && (m.scene.remove(Ue), Ue.geometry.dispose(), Ue.material.dispose(), Ue = null), Ze && m && (m.scene.remove(Ze), Ze.geometry.dispose(), Ze.material.dispose(), Ze = null), m == null ? void 0 : m.render();
          } else Lo();
          it && Io(), xt && (xt = false, Xt(), (_a3 = re.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), a == null ? void 0 : a.addEventListener("keydown", (s) => {
        if (s.key === "Enter") {
          const m = a.value.trim();
          if (m) {
            try {
              const $ = new Function("cad", `return ${m}`)(ze);
              $ !== void 0 && console.log($);
            } catch ($) {
              console.error($.message);
            }
            a.value = "";
          }
        }
      });
      let r = false, i = 0, c = 0, u = 0, d = 0;
      re.addEventListener("mousedown", (s) => {
        const m = s.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        r = true;
        const $ = re.getBoundingClientRect();
        re.style.bottom = "unset", i = s.clientX, c = s.clientY, u = $.left, d = $.top, s.preventDefault();
      }), window.addEventListener("mousemove", (s) => {
        r && (s.preventDefault(), re.style.left = u + (s.clientX - i) + "px", re.style.top = d + (s.clientY - c) + "px");
      }), window.addEventListener("mouseup", () => {
        r = false;
      }), Le();
    }, 10);
    function Ce() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Nt() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ue(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, r = -1 / 0, i = -1 / 0;
      for (const [d, s, m] of t) d < o && (o = d), d > a && (a = d), s < n && (n = s), s > r && (r = s), m < l && (l = m), m > i && (i = m);
      const c = new ue((o + a) / 2, (n + r) / 2, (l + i) / 2), u = Math.max(a - o, r - n, i - l, 1);
      return {
        center: c,
        extent: u
      };
    }
    function Ke(t = false) {
      const o = Ce();
      if (!o) return;
      const { extent: n } = Nt();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const r = Xa(), i = new as(l, 20, r.grid, r.grid);
      i.rotation.x = Math.PI / 2, i.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(i), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some(($) => $ instanceof To))).forEach((m) => {
        m.traverse(($) => {
          $.geometry && $.geometry.dispose(), $.material && ($.material.map && $.material.map.dispose(), $.material.dispose());
        }), o.scene.remove(m);
      });
      const u = 0.05 * l, d = new fa();
      d.name = "viewerAxes";
      const s = r.axisArrow;
      d.add(new To(new ue(1, 0, 0), new ue(), 1, s, 0.2, 0.2)), d.add(new To(new ue(0, 1, 0), new ue(), 1, s, 0.2, 0.2)), d.add(new To(new ue(0, 0, 1), new ue(), 1, s, 0.2, 0.2)), d.children.forEach((m) => m.scale.set(u, u, u));
      for (const [m, $, y] of [
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
        const p = x.getContext("2d");
        p.fillStyle = $, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(m, 32, 34);
        const g = new ua(x);
        g.needsUpdate = true;
        const w = new mn(new bn({
          map: g,
          depthTest: false,
          transparent: true
        }));
        w.position.set(y[0], y[1], y[2]), w.scale.set(0.4 * u, 0.4 * u, 1), w.renderOrder = 99, d.add(w);
      }
      o.scene.add(d), t ? o.render() : Rt("3d");
    }
    function Dn(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Rt(t) {
      var _a2;
      const o = Ce();
      if (!o) return;
      const { center: n, extent: l } = Nt(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), r = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const i = () => {
        o.scene.traverse((c) => {
          var _a3;
          if (!c.material) return;
          const u = c.type === "GridHelper" || c.type === "AxesHelper", d = c.isSprite, s = ((_a3 = c.userData) == null ? void 0 : _a3.noClip) === true;
          (u || d || s) && (Array.isArray(c.material) ? c.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : c.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const c = o.perspCamera.fov, u = l / (2 * Math.tan(c * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + u * 0.5, n.y - u * 0.8, n.z + u * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const c = o.orthoCamera;
        c.left = -r * a, c.right = r * a, c.top = r, c.bottom = -r, c.near = -l * 10, c.far = l * 10, c.updateProjectionMatrix();
        const u = (d, s, m) => {
          c.position.copy(d), c.up.copy(m), o.controls.target.copy(s), c.lookAt(s), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], u(new ue(n.x, n.y, n.z + l * 2), new ue(n.x, n.y, n.z), new ue(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const d = parseInt(t.split(":")[1]), s = ((_a2 = ee.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (d + 1) * s, $ = s * 0.45;
          o.renderer.clippingPlanes = [
            new Wt(new ue(0, 0, -1), m + $),
            new Wt(new ue(0, 0, 1), -m + $)
          ], i(), u(new ue(n.x, n.y, m + l * 2), new ue(n.x, n.y, m), new ue(0, 1, 0));
        } else if (t === "elevX") c.position.set(n.x + l * 2, n.y, n.z), c.up.set(0, 0, 1);
        else if (t === "elevY") c.position.set(n.x, n.y - l * 2, n.z), c.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const d = parseInt(t.split(":")[1]), s = _t[d] ?? n.x;
          if (At.length > 1) {
            const $ = Dn(_t, d, l);
            o.renderer.clippingPlanes = [
              new Wt(new ue(-1, 0, 0), s + $),
              new Wt(new ue(1, 0, 0), -s + $)
            ], i(), c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const d = parseInt(t.split(":")[1]), s = At[d] ?? n.y;
          if (_t.length > 1) {
            const $ = Dn(At, d, l);
            o.renderer.clippingPlanes = [
              new Wt(new ue(0, -1, 0), s + $),
              new Wt(new ue(0, 1, 0), -s + $)
            ], i(), c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(c);
      }
    }
    function Wn() {
      const t = re.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (_t.length < 2 && At.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (r, i, c) => {
        const u = document.createElement("button");
        return u.textContent = r, u.dataset.view = i, u.title = c, u.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", u.addEventListener("click", (d) => {
          var _a2;
          d.stopPropagation();
          const s = u.classList.contains("view-active");
          re.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), s ? (Rt("3d"), (_a2 = re.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Rt(i), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      _t.forEach((r, i) => {
        const c = i < l.length ? l[i] : `X${i}`;
        t.appendChild(o(c, `axisX:${i}`, `Eje ${c} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), At.forEach((r, i) => {
        const c = `${i + 1}`;
        t.appendChild(o(c, `axisY:${i}`, `Eje ${c} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Jn() {
      var _a2;
      const t = re.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = ee.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (a, r, i) => {
        const c = document.createElement("button");
        return c.textContent = a, c.dataset.view = r, c.title = i, c.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", c.addEventListener("click", (u) => {
          var _a3;
          u.stopPropagation();
          const d = c.classList.contains("view-active");
          re.querySelectorAll("[data-view]").forEach((s) => s.classList.remove("view-active")), d ? (Rt("3d"), (_a3 = re.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Rt(r), c.classList.add("view-active"));
        }), c;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `Planta Piso ${a + 1}`));
    }
    function za() {
      Rt("3d"), re.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    ze.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Rt(t), re.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let xt = false, it = false, kt = false, nt = "line", dt = [], He = null, Ue = null, Ze = null, ao = null, pt = null;
    const Be = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, en = 0.5;
    let tn = [], ft = null, Gt = null;
    const so = [], Eo = [], Ea = 50;
    function lo() {
      so.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), so.length > Ea && so.shift(), Eo.length = 0;
    }
    function Yn() {
      if (so.length === 0) return;
      Eo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = so.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Ht(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Vn() {
      if (Eo.length === 0) return;
      so.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Eo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Ht(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Ae = /* @__PURE__ */ new Set();
    let rt = null, Ot = [], St = null, zt = null;
    function on(t) {
      const o = Ce();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let c = 0; c < l.length; c++) {
        const u = n[l[c]], d = n[l[(c + 1) % l.length]];
        a.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const r = new Kt();
      r.setAttribute("position", new Ut(a, 3));
      const i = new $o(r, new wo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      i.renderOrder = 9998, i.__elemIdx = t, o.scene.add(i), Ot.push(i), o.render();
    }
    function Bt() {
      const t = Ce();
      Ot.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Ot = [], t == null ? void 0 : t.render();
    }
    function jt() {
      zt && zt.remove();
      const t = U.size > 0 || O;
      if (Ae.size === 0 && !t) {
        zt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Ae.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), zt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Wa([
          ...Ae
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Ae.size === 1) {
          const n = [
            ...Ae
          ][0];
          ea(n);
        } else {
          const n = [
            ...Ae
          ], l = e.nodes.val, a = e.elements.val;
          let r = 0, i = 0, c = 0, u = 0;
          n.forEach((s) => {
            const m = a[s];
            if (m) if (m.length === 2) {
              const $ = l[m[0]], y = l[m[1]], x = Math.abs(y[0] - $[0]), p = Math.abs(y[1] - $[1]), g = Math.abs(y[2] - $[2]);
              g > x && g > p ? r++ : i++;
            } else m.length === 3 ? c++ : m.length === 4 && u++;
          });
          const d = [];
          r && d.push(`${r} columnas`), i && d.push(`${i} vigas`), u && d.push(`${u} shells Q4`), c && d.push(`${c} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        Ae.forEach((n) => U.add(n)), Ae.clear(), Bt(), jt(), ae();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        O = true, ie.clear(), Ae.forEach((n) => ie.add(n)), Ae.clear(), Bt(), jt(), ae();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        U.clear(), O = false, ie.clear(), jt(), ae();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        lo(), Ae.forEach((n) => ne.add(n)), Ae.clear(), Bt(), jt(), ae();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Ae.clear(), Bt(), jt();
      });
    }
    function Io() {
      var _a2;
      it = false, Ae.clear(), Bt(), zt && (zt.remove(), zt = null), (_a2 = re.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ce();
      o && (o.controls.enabled = true);
    }
    function Xt() {
      if (rt) {
        const t = Ce();
        t == null ? void 0 : t.scene.remove(rt), rt.geometry.dispose(), rt.material.dispose(), rt = null, t == null ? void 0 : t.render();
      }
      St && (St.remove(), St = null);
    }
    function Ia(t) {
      nn();
      const o = Ce();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      Gt = t;
      const l = 200, a = [
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
      for (const [r, i] of a) {
        const c = new Float32Array([
          n[0] - r[0] * l,
          n[1] - r[1] * l,
          n[2] - r[2] * l,
          n[0] + r[0] * l,
          n[1] + r[1] * l,
          n[2] + r[2] * l
        ]), u = new Kt();
        u.setAttribute("position", new Za(c, 3));
        const d = new pa({
          color: i,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), s = new $o(u, d);
        s.computeLineDistances(), s.renderOrder = 9990, o.scene.add(s), tn.push(s);
      }
      o.render();
    }
    function nn() {
      const t = Ce();
      for (const o of tn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      tn = [], Gt = null, ft && (ft.remove(), ft = null);
    }
    function Gn(t, o, n, l) {
      ft || (ft = document.createElement("div"), ft.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(ft));
      const a = l.x - n.x, r = l.y - n.y, i = l.z - n.z, c = Math.sqrt(a * a + r * r + i * i), u = Math.abs(a), d = Math.abs(r), s = Math.abs(i);
      let m = "";
      u > d && u > s ? m = `\u0394X=${a.toFixed(2)}` : d > u && d > s ? m = `\u0394Y=${r.toFixed(2)}` : s > 0.01 && (m = `\u0394Z=${i.toFixed(2)}`), ft.textContent = `${c.toFixed(3)} m  ${m}`, ft.style.left = t + 20 + "px", ft.style.top = o - 10 + "px";
    }
    function La(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new ue(l[0], l[1], l[2]), r = t.clone(), i = r.clone().sub(a), c = 0.3, u = Math.abs(i.x), d = Math.abs(i.y), s = Math.abs(i.z);
      return d < c && s < c && u > 0.01 ? new ue(r.x, a.y, a.z) : u < c && s < c && d > 0.01 ? new ue(a.x, r.y, a.z) : u < c && d < c && s > 0.01 ? new ue(a.x, a.y, r.z) : null;
    }
    function Lo() {
      var _a2;
      const t = Ce();
      Ue && t && (t.scene.remove(Ue), Ue.geometry.dispose(), Ue.material.dispose(), Ue = null), Ze && t && (t.scene.remove(Ze), Ze.geometry.dispose(), Ze.material.dispose(), Ze = null), nn(), He = null, pt = null, kt = false, ao && (ao.remove(), ao = null), (_a2 = re.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function qa() {
      ao && ao.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(nt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(nt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(nt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(nt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Be.node)}">Node</button>
      <button id="ds-grid" style="${n(Be.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Be.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Be.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${en}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), ao = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), r = t.querySelector("#dt-arc"), i = t.querySelector("#dt-node"), c = t.querySelector("#dt-area");
        a && (a.style.cssText = o(nt === "line")), r && (r.style.cssText = o(nt === "arc")), i && (i.style.cssText = o(nt === "node")), c && (c.style.cssText = o(nt === "area"));
        const u = t.querySelector("#ds-node"), d = t.querySelector("#ds-grid"), s = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        u && (u.style.cssText = n(Be.node)), d && (d.style.cssText = n(Be.grid)), s && (s.style.cssText = n(Be.midpoint)), m && (m.style.cssText = n(Be.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        nt = "line", He = null, pt = null, dt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        nt = "arc", He = null, pt = null, dt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        nt = "node", He = null, pt = null, dt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        nt = "area", He = null, pt = null, dt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Be.node = !Be.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Be.grid = !Be.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Be.midpoint = !Be.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Be.track = !Be.track, Be.track || nn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        Be.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Yn()), t.querySelector("#dt-redo").addEventListener("click", () => Vn());
    }
    function Xn(t, o, n, l) {
      const a = l.getBoundingClientRect(), r = (t - a.left) / a.width * 2 - 1, i = -((o - a.top) / a.height) * 2 + 1, c = new ca();
      c.setFromCamera(new da(r, i), n);
      const u = e.nodes.val, d = e.elements.val, s = 0.12;
      if (Be.node) {
        let y = -1, x = 1 / 0;
        for (let p = 0; p < u.length; p++) {
          const g = u[p], w = new ue(g[0], g[1], g[2]).project(n), z = Math.sqrt((w.x - r) ** 2 + (w.y - i) ** 2);
          z < s && z < x && (x = z, y = p);
        }
        if (y >= 0) return {
          nodeIdx: y,
          worldPos: new ue(...u[y]),
          snapType: "node"
        };
      }
      if (Be.midpoint) {
        let y = 1 / 0, x = null;
        for (const p of d) {
          if (p.length !== 2) continue;
          const g = u[p[0]], w = u[p[1]], z = new ue((g[0] + w[0]) / 2, (g[1] + w[1]) / 2, (g[2] + w[2]) / 2), S = z.clone().project(n), H = Math.sqrt((S.x - r) ** 2 + (S.y - i) ** 2);
          H < s * 0.8 && H < y && (y = H, x = z);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (Be.grid) {
        const y = new Wt(new ue(0, 0, 1), 0), x = new ue();
        if (c.ray.intersectPlane(y, x)) {
          const p = Be.gridSize || en;
          return x.x = Math.round(x.x / p) * p, x.y = Math.round(x.y / p) * p, x.z = Math.round(x.z / p) * p, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const m = new Wt(new ue(0, 0, 1), 0), $ = new ue();
      return c.ray.intersectPlane(m, $), {
        nodeIdx: null,
        worldPos: $,
        snapType: "free"
      };
    }
    function Kn(t) {
      const o = Ce();
      if (!o) return;
      const n = e.nodes.val;
      if (Ze && (o.scene.remove(Ze), Ze.geometry.dispose(), Ze.material.dispose(), Ze = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, r = t.snapType === "mid" ? new Qa(a * 2, a * 2, a * 2) : new es(a, 12, 12), i = new ts({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Ze = new os(r, i), Ze.position.copy(t.worldPos), Ze.renderOrder = 9999, o.scene.add(Ze);
      }
      if (Ue && (o.scene.remove(Ue), Ue.geometry.dispose(), Ue.material.dispose(), Ue = null), He !== null && t.worldPos) {
        const l = n[He], a = new Kt();
        if (nt === "arc" && pt !== null) {
          const i = n[pt], c = Un(new ue(l[0], l[1], l[2]), new ue(i[0], i[1], i[2]), t.worldPos, 16), u = [];
          for (let d = 0; d < c.length - 1; d++) u.push(c[d].x, c[d].y, c[d].z, c[d + 1].x, c[d + 1].y, c[d + 1].z);
          a.setAttribute("position", new Ut(u, 3));
        } else a.setAttribute("position", new Ut([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const r = new wo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Ue = new un(a, r), nt === "arc" && pt !== null && (Ue = new $o(a, r)), Ue.renderOrder = 9999, o.scene.add(Ue);
      }
      o.render();
    }
    function Un(t, o, n, l) {
      const a = [];
      for (let r = 0; r <= l; r++) {
        const i = r / l, c = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), u = (1 - i) * (1 - i), d = 2 * (1 - i) * i, s = i * i;
        a.push(new ue(u * t.x + d * c.x + s * n.x, u * t.y + d * c.y + s * n.y, u * t.z + d * c.z + s * n.z));
      }
      return a;
    }
    function an(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let a = 0; a < o.length; a++) if (Math.abs(o[a][0] - t.worldPos.x) < n && Math.abs(o[a][1] - t.worldPos.y) < n && Math.abs(o[a][2] - t.worldPos.z) < n) return a;
      lo();
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
    function Ta(t) {
      var _a2;
      if (nt === "node") {
        if (!t.worldPos) return;
        lo();
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
      if (nt === "line") {
        const o = an(t);
        if (o < 0) return;
        if (He === null) {
          He = o;
          return;
        }
        if (o === He) return;
        lo();
        const n = [
          ...e.elements.val
        ];
        n.some((a) => a.length === 2 && (a[0] === He && a[1] === o || a[1] === He && a[0] === o)) || (n.push([
          He,
          o
        ]), e.elements.val = n, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), He = o;
        return;
      }
      if (nt === "arc") {
        const o = an(t);
        if (o < 0) return;
        if (He === null) {
          He = o;
          return;
        }
        if (pt === null) {
          if (o === He) return;
          pt = o;
          return;
        }
        if (o === He || o === pt) return;
        const n = e.nodes.val, l = new ue(...n[He]), a = new ue(...n[pt]), r = new ue(...n[o]), i = Math.max(4, Math.round(((_a2 = ee.nSubViga) == null ? void 0 : _a2.val) ?? 8)), c = Un(l, a, r, i);
        lo();
        const u = [
          ...e.nodes.val
        ], d = [
          ...e.elements.val
        ];
        let s = He;
        for (let m = 1; m < c.length; m++) {
          let $;
          if (m === c.length - 1) $ = o;
          else {
            const y = c[m];
            $ = u.length, u.push([
              y.x,
              y.y,
              y.z
            ]);
          }
          d.push([
            s,
            $
          ]), s = $;
        }
        e.nodes.val = u, e.elements.val = d, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, He = o, pt = null;
        return;
      }
      if (nt === "area") {
        const o = an(t);
        if (o < 0) return;
        if (dt.length >= 3 && o === dt[0]) {
          lo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = dt.map((r) => n[r]);
          try {
            const r = Ft({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (c, u) => u),
              maxMeshSize: en || 0.5
            }), i = [];
            for (const c of r.nodes) {
              let u = -1;
              for (let d = 0; d < n.length; d++) {
                const s = Math.abs(n[d][0] - c[0]), m = Math.abs(n[d][1] - c[1]), $ = Math.abs(n[d][2] - c[2]);
                if (s < 0.01 && m < 0.01 && $ < 0.01) {
                  u = d;
                  break;
                }
              }
              u >= 0 ? i.push(u) : (i.push(n.length), n.push([
                c[0],
                c[1],
                c[2]
              ]));
            }
            for (const c of r.elements) l.push([
              i[c[0]],
              i[c[1]],
              i[c[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, Ht(), console.log(`Area: ${r.elements.length} triangulos creados desde ${dt.length} vertices`);
          } catch (r) {
            console.error("Area mesh failed:", r.message);
          }
          dt = [];
          return;
        }
        if (dt.push(o), console.log(`Area vertex ${dt.length}: node ${o}`), dt.length >= 2) {
          const n = dt[dt.length - 2], l = e.nodes.val, a = Ce();
          if (a) {
            const r = new Kt().setFromPoints([
              new ue(...l[n]),
              new ue(...l[o])
            ]), i = new $o(r, new wo({
              color: 65280,
              linewidth: 2
            }));
            i.name = "area-preview", a.scene.add(i), a.render();
          }
        }
        return;
      }
    }
    function Zn(t) {
      const o = Ce();
      if (!o) return;
      rt && (o.scene.remove(rt), rt.geometry.dispose(), rt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let i = 0; i < l.length; i++) {
        const c = n[l[i]], u = n[l[(i + 1) % l.length]];
        a.push(c[0], c[1], c[2], u[0], u[1], u[2]);
      }
      const r = new Kt();
      r.setAttribute("position", new Ut(a, 3)), rt = new $o(r, new wo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), rt.renderOrder = 9999, o.scene.add(rt), o.render();
    }
    function sn(t) {
      const o = Ce();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new da((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new ca();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const r = e.nodes.val, i = e.elements.val;
      if (r.length === 0 || i.length === 0) return -1;
      let c = 1 / 0, u = -1;
      const d = a.ray;
      for (let m = 0; m < i.length; m++) {
        const $ = i[m];
        if ($.length === 2) {
          const y = new ue(...r[$[0]]), x = new ue(...r[$[1]]), p = new ns(y, x), g = new ue(), w = new ue();
          d.closestPointToPoint(p.getCenter(new ue()), g), p.closestPointToPoint(g, true, w);
          const z = g.distanceTo(w);
          z < c && (c = z, u = m);
        } else if ($.length === 3) {
          const y = new ue(...r[$[0]]), x = new ue(...r[$[1]]), p = new ue(...r[$[2]]), g = new ue();
          if (d.intersectTriangle(y, x, p, false, g)) {
            const z = d.origin.distanceTo(g);
            z < c && (c = z, u = m);
          } else {
            const z = y.add(x).add(p).divideScalar(3), S = new ue();
            d.closestPointToPoint(z, S);
            const H = S.distanceTo(z);
            H < c && (c = H, u = m);
          }
        } else if ($.length === 4) {
          const y = new ue(...r[$[0]]), x = new ue(...r[$[1]]), p = new ue(...r[$[2]]), g = new ue(...r[$[3]]), w = new ue();
          let z = d.intersectTriangle(y, x, p, false, w);
          if (z) {
            const S = d.origin.distanceTo(w);
            S < c && (c = S, u = m);
          }
          if (z = d.intersectTriangle(y, p, g, false, w), z) {
            const S = d.origin.distanceTo(w);
            S < c && (c = S, u = m);
          }
        }
      }
      const { extent: s } = Nt();
      return c < s * 0.1 ? u : -1;
    }
    function j(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function ln(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let r = "<table>";
      if (o) {
        r += '<tr><td class="header"></td>';
        for (let i = 0; i < a; i++) r += `<td class="header">${o[i] || i}</td>`;
        r += "</tr>";
      }
      for (let i = 0; i < l; i++) {
        r += "<tr>", o && (r += `<td class="header">${o[i] || i}</td>`);
        for (let c = 0; c < a; c++) {
          const u = t[i][c], d = Math.abs(u) > 1e-10 ? "nonzero" : "";
          r += `<td class="${d}">${j(u, 2)}</td>`;
        }
        r += "</tr>";
      }
      return r += "</table>", r;
    }
    function ce(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Fa(t, o, n, l, a, r, i) {
      const c = `${ce(F("E") + "\xB7" + F("A"), F("L"))}`, u = `${ce("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`, d = `${ce("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`, s = `${ce(F("G") + "\xB7" + F("J"), F("L"))}`, m = `${ce("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`, $ = `${ce("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${c} = ${ce(j(t) + "\xB7" + j(o), j(i))} = <span class="highlight">${j(t * o / i)}</span></div>
      <div>${u} = ${ce("12\xB7" + j(t) + "\xB7" + j(n), j(i) + "\xB3")} = <span class="highlight">${j(12 * t * n / i ** 3)}</span></div>
      <div>${d} = ${ce("12\xB7" + j(t) + "\xB7" + j(l), j(i) + "\xB3")} = <span class="highlight">${j(12 * t * l / i ** 3)}</span></div>
      <div>${s} = ${ce(j(a) + "\xB7" + j(r), j(i))} = <span class="highlight">${j(a * r / i)}</span></div>
      <div>${m} = ${ce("4\xB7" + j(t) + "\xB7" + j(l), j(i))} = <span class="highlight">${j(4 * t * l / i)}</span></div>
      <div>${$} = ${ce("4\xB7" + j(t) + "\xB7" + j(n), j(i))} = <span class="highlight">${j(4 * t * n / i)}</span></div>
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ce(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ce("\u2212" + F("EA"), F("L"))}</span>
        <span class="cell">0</span><span class="cell">${ce("12" + F("EI", "z"), F("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ce("\u2212" + F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ce(F("EA"), F("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Pa(t) {
      if (t.length === 2) {
        const n = Pt(t[1], t[0]), l = eo(n), a = n[0] / l, r = n[1] / l, i = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${ce("\u0394x", F("L"))} = ${ce(j(n[0]), j(l))} = <span class="highlight">${j(a)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${ce("\u0394y", F("L"))} = ${ce(j(n[1]), j(l))} = <span class="highlight">${j(r)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${ce("\u0394z", F("L"))} = ${ce(j(n[2]), j(l))} = <span class="highlight">${j(i)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${ce("\u2212" + F("m"), F("D"))}</span><span class="cell">${ce(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${ce("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${ce("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Ca() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function _a(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Aa(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${ce("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ce(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function rn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let r = 0; r < n; r++) {
          const i = t[a][r], c = (a === r ? "diag " : "") + (Math.abs(i) > 1e-10 ? "nz" : "");
          l += `<td class="${c}">${j(i, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Qn() {
      const t = "0", o = ce(F("EA"), F("L")), n = ce("\u2212" + F("EA"), F("L")), l = ce("12" + F("EI", "z"), F("L") + "\xB3"), a = ce("\u221212" + F("EI", "z"), F("L") + "\xB3"), r = ce("12" + F("EI", "y"), F("L") + "\xB3"), i = ce("\u221212" + F("EI", "y"), F("L") + "\xB3"), c = ce("6" + F("EI", "z"), F("L") + "\xB2"), u = ce("\u22126" + F("EI", "z"), F("L") + "\xB2"), d = ce("6" + F("EI", "y"), F("L") + "\xB2"), s = ce("\u22126" + F("EI", "y"), F("L") + "\xB2"), m = ce(F("GJ"), F("L")), $ = ce("\u2212" + F("GJ"), F("L")), y = ce("4" + F("EI", "z"), F("L")), x = ce("2" + F("EI", "z"), F("L")), p = ce("4" + F("EI", "y"), F("L")), g = ce("2" + F("EI", "y"), F("L")), w = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', z = [
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
      ], S = [
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
          l,
          t,
          t,
          t,
          c,
          t,
          a,
          t,
          t,
          t,
          c
        ],
        [
          t,
          t,
          r,
          t,
          s,
          t,
          t,
          t,
          i,
          t,
          s,
          t
        ],
        [
          t,
          t,
          t,
          m,
          t,
          t,
          t,
          t,
          t,
          $,
          t,
          t
        ],
        [
          t,
          t,
          s,
          t,
          p,
          t,
          t,
          t,
          d,
          t,
          g,
          t
        ],
        [
          t,
          c,
          t,
          t,
          t,
          y,
          t,
          u,
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
          a,
          t,
          t,
          t,
          u,
          t,
          l,
          t,
          t,
          t,
          u
        ],
        [
          t,
          t,
          i,
          t,
          d,
          t,
          t,
          t,
          r,
          t,
          d,
          t
        ],
        [
          t,
          t,
          t,
          $,
          t,
          t,
          t,
          t,
          t,
          m,
          t,
          t
        ],
        [
          t,
          t,
          s,
          t,
          g,
          t,
          t,
          t,
          d,
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
          u,
          t,
          t,
          t,
          y
        ]
      ];
      let C = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      C += '<table><tr><td class="hdr"></td>';
      for (const b of S) C += `<td class="hdr">${b}</td>`;
      C += "</tr>";
      for (let b = 0; b < 12; b++) {
        C += `<tr><td class="hdr">${z[b]}</td>`;
        for (let f = 0; f < 12; f++) if (f < b) C += `<td style="color:var(--fem-border-cell)">${f === 0 && b > 0 ? w : ""}</td>`;
        else {
          const v = H[b][f], M = (b === f ? "diag " : "") + (v !== "0" ? "nz" : "");
          C += `<td class="${M}">${v}</td>`;
        }
        C += "</tr>";
      }
      return C += "</table>", C;
    }
    function Ha(t, o, n, l, a, r, i) {
      return `<div class="coeff-grid">${[
        {
          name: `${ce(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${ce(j(t) + "\xD7" + j(o), j(i))}`,
          val: t * o / i,
          label: "Axial"
        },
        {
          name: `${ce("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${ce("12\xD7" + j(t) + "\xD7" + j(n), j(i) + "\xB3")}`,
          val: 12 * t * n / i ** 3,
          label: "Corte Y"
        },
        {
          name: `${ce("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${ce("6\xD7" + j(t) + "\xD7" + j(n), j(i) + "\xB2")}`,
          val: 6 * t * n / i ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ce("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${ce("12\xD7" + j(t) + "\xD7" + j(l), j(i) + "\xB3")}`,
          val: 12 * t * l / i ** 3,
          label: "Corte Z"
        },
        {
          name: `${ce("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${ce("6\xD7" + j(t) + "\xD7" + j(l), j(i) + "\xB2")}`,
          val: 6 * t * l / i ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ce(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${ce(j(a) + "\xD7" + j(r), j(i))}`,
          val: a * r / i,
          label: "Torsi\xF3n"
        },
        {
          name: `${ce("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ce("4\xD7" + j(t) + "\xD7" + j(n), j(i))}`,
          val: 4 * t * n / i,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ce("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ce("2\xD7" + j(t) + "\xD7" + j(n), j(i))}`,
          val: 2 * t * n / i,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ce("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${ce("4\xD7" + j(t) + "\xD7" + j(l), j(i))}`,
          val: 4 * t * l / i,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ce("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${ce("2\xD7" + j(t) + "\xD7" + j(l), j(i))}`,
          val: 2 * t * l / i,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${j(u.val)}</span></div>`).join("")}</div>`;
    }
    function cn(t, o, n, l) {
      var _a2;
      const a = document.querySelector(".fem-full-overlay");
      a && a.remove();
      const r = document.createElement("div");
      r.className = "fem-full-overlay", r.innerHTML = `
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
    `, document.body.appendChild(r), (_a2 = r.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => r.remove()), r.addEventListener("click", (i) => {
        i.target === r && r.remove();
      });
    }
    function ea(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      St && St.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((b) => o[b]), r = l.length === 2, i = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, c = (_b = e.deformOutputs) == null ? void 0 : _b.val, u = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (r) {
        const b = eo(Pt(a[1], a[0])), f = ((_d = i.elasticities) == null ? void 0 : _d.get(t)) ?? 0, v = ((_e2 = i.areas) == null ? void 0 : _e2.get(t)) ?? 0, M = ((_f = i.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, L = ((_g = i.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, N = ((_h = i.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, q = ((_i = i.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${j(b)}${j(f)}${j(v)}${j(M)}${j(L)}${j(N)}${j(q)}`;
      } else {
        const b = ((_j = i.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = i.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, v = ((_l = i.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${j(b)}${j(f)}${j(v)}`;
      }
      let d = "", s = "", m = "", $ = "", y = "", x = "", p = "", g = "", w = null, z = null, S = null, H = [];
      try {
        if (w = Ho(a, i, t), z = No(a), S = gt(yn(z), gt(w, z)), H = r ? [
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
          const M = eo(Pt(a[1], a[0])), L = ((_m = i.elasticities) == null ? void 0 : _m.get(t)) ?? 0, N = ((_n2 = i.areas) == null ? void 0 : _n2.get(t)) ?? 0, q = ((_o2 = i.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, I = ((_p = i.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = i.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, _ = ((_r = i.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          $ = Fa(L, N, q, I, P, _, M);
        }
        y = Pa(a), x = Ca(), p = _a(l), g = Aa(r);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${w.length}\xD7${w.length}) ${b}</div>${ln(w, H)}`, s = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${z.length}\xD7${z.length}) ${f}</div>${ln(z, H)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${ln(S, H)}`;
      } catch (b) {
        d = `<div style="color:red">Error: ${b.message}</div>`;
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
        l.map((f, v) => {
          var _a3;
          const M = ((_a3 = c.deformations) == null ? void 0 : _a3.get(f)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], L = b.map((N, q) => `<span class="prop-key">${N}</span>: <span class="${Math.abs(M[q]) > 1e-10 ? "result-val" : ""}">${j(M[q])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${f}:</strong> ${L}</div>`;
        }).join("");
      }
      if (u && r && (c == null ? void 0 : c.deformations) && w && z) {
        const b = (_s = u.normals) == null ? void 0 : _s.get(t), f = (_t2 = u.shearsY) == null ? void 0 : _t2.get(t), v = (_u = u.shearsZ) == null ? void 0 : _u.get(t), M = (_v = u.torsions) == null ? void 0 : _v.get(t), L = (_w = u.bendingsY) == null ? void 0 : _w.get(t), N = (_x = u.bendingsZ) == null ? void 0 : _x.get(t), q = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], I = [];
        for (const W of l) {
          const D = ((_y = c.deformations) == null ? void 0 : _y.get(W)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          I.push(...D);
        }
        let P = [];
        try {
          P = gt(z, I);
        } catch {
          P = new Array(12).fill(0);
        }
        let _ = [];
        try {
          _ = gt(w, P);
        } catch {
          _ = new Array(12).fill(0);
        }
        const Y = (W, D) => W.map((X, de) => `<span style="color:${Math.abs(X) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${D[de % 6]}=${j(X)}</span>`).join(", "), Z = [
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
        ].map((W, D) => `${W}${D < 6 ? "\u1D62" : "\u2C7C"}`);
        `${F("u", "global")}${l.map((W, D) => `<span style="color:var(--fem-label)">nodo ${W}:</span> ${q.map((X, de) => `<span style="color:${Math.abs(I[D * 6 + de]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${j(I[D * 6 + de])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${Y(P, [
          ...q,
          ...q
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${_.map((W, D) => `<span style="color:${Math.abs(W) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Z[D]}=${j(W)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${j(_[0])}${F("P", "7")}${F("N", "j")}${j(_[6])}${F("P", "2")}${F("V", "y,i")}${j(_[1])}${F("P", "8")}${F("V", "y,j")}${j(_[7])}${F("P", "3")}${F("V", "z,i")}${j(_[2])}${F("P", "9")}${F("V", "z,j")}${j(_[8])}${F("P", "4")}${F("M", "x,i")}${j(_[3])}${F("P", "10")}${F("M", "x,j")}${j(_[9])}${F("P", "5")}${F("M", "y,i")}${j(_[4])}${F("P", "11")}${F("M", "y,j")}${j(_[10])}${F("P", "6")}${F("M", "z,i")}${j(_[5])}${F("P", "12")}${F("M", "z,j")}${j(_[11])}${b ? b.map((W) => j(W)).join(", ") : "\u2014"}${f ? f.map((W) => j(W)).join(", ") : "\u2014"}${v ? v.map((W) => j(W)).join(", ") : "\u2014"}${M ? M.map((W) => j(W)).join(", ") : "\u2014"}${L ? L.map((W) => j(W)).join(", ") : "\u2014"}${N ? N.map((W) => j(W)).join(", ") : "\u2014"}`;
      } else if (u && r) {
        const b = (_z = u.normals) == null ? void 0 : _z.get(t), f = (_A = u.shearsY) == null ? void 0 : _A.get(t), v = (_B = u.shearsZ) == null ? void 0 : _B.get(t), M = (_C = u.torsions) == null ? void 0 : _C.get(t), L = (_D = u.bendingsY) == null ? void 0 : _D.get(t), N = (_E = u.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${L ? L.map((q) => j(q)).join(", ") : "\u2014"}${N ? N.map((q) => j(q)).join(", ") : "\u2014"}`;
      } else if (u && !r) {
        const b = (_F = u.bendingXX) == null ? void 0 : _F.get(t), f = (_G = u.bendingYY) == null ? void 0 : _G.get(t), v = (_H = u.bendingXY) == null ? void 0 : _H.get(t), M = (_I = u.membraneXX) == null ? void 0 : _I.get(t), L = (_J = u.membraneYY) == null ? void 0 : _J.get(t), N = (_K = u.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${L ? L.map((q) => j(q)).join(", ") : "\u2014"}${N ? N.map((q) => j(q)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, St = gs(t, o, n, i, c, u), St.id = "fem-inspect-panel", document.body.appendChild(St), (_L = St.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => Xt());
      const C = r ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const b = eo(Pt(a[1], a[0])), f = ((_a3 = i.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, v = ((_b2 = i.areas) == null ? void 0 : _b2.get(t)) ?? 0, M = ((_c2 = i.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, L = ((_d2 = i.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, N = ((_e3 = i.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, q = ((_f2 = i.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Ha(f, v, M, L, N, q, b);
      })() : void 0;
      St.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const v = b.dataset.full;
          if (v === "kLocal" && w) {
            const M = r ? Qn() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            cn(`Elemento ${t} \u2014 Rigidez Local k_local`, M, rn(w, H), C);
          } else if (v === "T" && z) cn(`Elemento ${t} \u2014 Transformaci\xF3n T`, y, rn(z, H));
          else if (v === "kGlobal" && S) {
            const M = r ? Qn() : "<em>Shell 18\xD718</em>";
            cn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, rn(S, H), C);
          }
        });
      });
    }
    function ta() {
      const l = [], a = [];
      for (let x = 0; x <= 8; x++) {
        const p = x / 8, g = 30 * p, z = 12 * (1 - p) * (1 - p * 0.3) / 2, S = l.length;
        if (l.push([
          -z,
          -z,
          g
        ]), l.push([
          z,
          -z,
          g
        ]), l.push([
          z,
          z,
          g
        ]), l.push([
          -z,
          z,
          g
        ]), a.push([
          S,
          S + 1
        ]), a.push([
          S + 1,
          S + 2
        ]), a.push([
          S + 2,
          S + 3
        ]), a.push([
          S + 3,
          S
        ]), x > 0 && x < 8 && (a.push([
          S,
          S + 2
        ]), a.push([
          S + 1,
          S + 3
        ])), x > 0) {
          const H = S - 4;
          for (let C = 0; C < 4; C++) a.push([
            H + C,
            S + C
          ]);
          a.push([
            H,
            S + 1
          ]), a.push([
            H + 1,
            S + 2
          ]), a.push([
            H + 2,
            S + 3
          ]), a.push([
            H + 3,
            S
          ]);
        }
      }
      const r = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) r.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = l.length - 4, c = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) c.set(i + x, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      });
      const u = 2e8, d = 77e6, s = 5e-3, m = 2e-6, $ = 1e-6, y = {
        elasticities: new Map(a.map((x, p) => [
          p,
          u
        ])),
        shearModuli: new Map(a.map((x, p) => [
          p,
          d
        ])),
        areas: new Map(a.map((x, p) => [
          p,
          s
        ])),
        momentsOfInertiaZ: new Map(a.map((x, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(a.map((x, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(a.map((x, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const x = ut(l, a, {
          supports: r,
          loads: c
        }, y);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function oa() {
      const l = [], a = [];
      for (let y = 0; y <= 20; y++) {
        const x = y / 20, p = 20 * x, g = 20 * (1 - Math.pow(2 * x - 1, 2)), w = 2;
        l.push([
          p,
          -2 / 2,
          g
        ]), l.push([
          p,
          w / 2,
          g
        ]);
      }
      for (let y = 0; y < 20; y++) a.push([
        y * 2,
        (y + 1) * 2
      ]), a.push([
        y * 2 + 1,
        (y + 1) * 2 + 1
      ]), a.push([
        y * 2,
        y * 2 + 1
      ]), a.push([
        y * 2,
        (y + 1) * 2 + 1
      ]), a.push([
        y * 2 + 1,
        (y + 1) * 2
      ]);
      a.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const r = /* @__PURE__ */ new Map();
      r.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), r.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), r.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), r.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let y = 0; y <= 20; y++) i.set(y * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), i.set(y * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      });
      const c = 2e8, u = 77e6, d = 0.01, s = 5e-6, m = 2e-6, $ = {
        elasticities: new Map(a.map((y, x) => [
          x,
          c
        ])),
        shearModuli: new Map(a.map((y, x) => [
          x,
          u
        ])),
        areas: new Map(a.map((y, x) => [
          x,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((y, x) => [
          x,
          s
        ])),
        momentsOfInertiaY: new Map(a.map((y, x) => [
          x,
          s
        ])),
        torsionalConstants: new Map(a.map((y, x) => [
          x,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = ut(l, a, {
          supports: r,
          loads: i
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Arco:", y.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function na() {
      const r = [], i = [];
      for (let p = 0; p <= 16; p++) {
        const g = 60 * p / 16;
        r.push([
          g,
          -6 / 2,
          8
        ]), r.push([
          g,
          6 / 2,
          8
        ]);
      }
      const c = r.length;
      for (let p = 0; p < 16; p++) i.push([
        p * 2,
        (p + 1) * 2
      ]), i.push([
        p * 2 + 1,
        (p + 1) * 2 + 1
      ]), i.push([
        p * 2,
        p * 2 + 1
      ]);
      i.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const u = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], d = [];
      for (const p of u) {
        const g = 60 * p / 16, w = r.length;
        r.push([
          g,
          -6 / 2,
          0
        ]);
        const z = r.length;
        r.push([
          g,
          6 / 2,
          0
        ]);
        const S = r.length;
        r.push([
          g,
          -6 / 2,
          28
        ]);
        const H = r.length;
        r.push([
          g,
          6 / 2,
          28
        ]), d.push(S, H), i.push([
          w,
          p * 2
        ]), i.push([
          p * 2,
          S
        ]), i.push([
          z,
          p * 2 + 1
        ]), i.push([
          p * 2 + 1,
          H
        ]), i.push([
          S,
          H
        ]);
      }
      for (const p of d) {
        const g = r[p][0];
        for (let w = 0; w <= 16; w++) {
          const z = 60 * w / 16;
          if (Math.abs(z - g) > 60 * 0.05 && Math.abs(z - g) < 60 * 0.45) {
            const S = r[p][1] < 0 ? w * 2 : w * 2 + 1;
            w % 2 === 0 && i.push([
              p,
              S
            ]);
          }
        }
      }
      const s = /* @__PURE__ */ new Map();
      s.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), s.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), s.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), s.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let p = c; p < c + u.length * 4; p += 4) s.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), s.set(p + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let p = 0; p <= 16; p++) m.set(p * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), m.set(p * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: m
      });
      const $ = 2e8, y = 77e6, x = {
        elasticities: new Map(i.map((p, g) => [
          g,
          $
        ])),
        shearModuli: new Map(i.map((p, g) => [
          g,
          y
        ])),
        areas: new Map(i.map((p, g) => [
          g,
          g < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(i.map((p, g) => [
          g,
          5e-5
        ])),
        momentsOfInertiaY: new Map(i.map((p, g) => [
          g,
          2e-5
        ])),
        torsionalConstants: new Map(i.map((p, g) => [
          g,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const p = ut(r, i, {
          supports: s,
          loads: m
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Puente atirantado: ${r.length} nodos, ${i.length} elem, span=60m`);
    }
    function aa() {
      const r = [], i = [];
      for (let g = 0; g <= 12; g++) {
        const w = g * 3.5, z = g * 5 * Math.PI / 180;
        for (let S = 0; S < 6; S++) {
          const H = z + 2 * Math.PI * S / 6, C = 5 * Math.cos(H), b = 5 * Math.sin(H);
          r.push([
            C,
            b,
            w
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const w = g * 6;
        for (let z = 0; z < 6; z++) i.push([
          w + z,
          w + (z + 1) % 6
        ]);
        if (g < 12) {
          const z = (g + 1) * 6;
          for (let S = 0; S < 6; S++) i.push([
            w + S,
            z + S
          ]), i.push([
            w + S,
            z + (S + 1) % 6
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const w = r.length;
        r.push([
          0,
          0,
          g * 3.5
        ]);
        const z = g * 6;
        for (let S = 0; S < 6; S++) i.push([
          w,
          z + S
        ]);
      }
      const c = 13 * 6;
      for (let g = 0; g < 12; g++) i.push([
        c + g,
        c + g + 1
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
      u.set(c, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 12; g++) {
        const w = 10 * g / 12, z = g * 6;
        for (let S = 0; S < 6; S++) d.set(z + S, [
          w,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = r, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: u,
        loads: d
      });
      const s = 2e8, m = 77e6, $ = 8e-3, y = 1e-5, x = 5e-6, p = {
        elasticities: new Map(i.map((g, w) => [
          w,
          s
        ])),
        shearModuli: new Map(i.map((g, w) => [
          w,
          m
        ])),
        areas: new Map(i.map((g, w) => [
          w,
          $
        ])),
        momentsOfInertiaZ: new Map(i.map((g, w) => [
          w,
          y
        ])),
        momentsOfInertiaY: new Map(i.map((g, w) => [
          w,
          y
        ])),
        torsionalConstants: new Map(i.map((g, w) => [
          w,
          x
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const g = ut(r, i, {
          supports: u,
          loads: d
        }, p);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Torre Twist: ${r.length} nodos, ${i.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function sa() {
      const a = [], r = [];
      for (let p = 0; p <= 20; p++) {
        const g = p / 20, w = p * 3;
        let z = 8 * (1 - g * 0.7);
        g > 0.4 && (z *= 0.85), g > 0.7 && (z *= 0.7);
        const S = a.length;
        a.push([
          0,
          0,
          w
        ]);
        for (let H = 0; H < 3; H++) {
          const C = H * 2 * Math.PI / 3 - Math.PI / 2, b = z * Math.cos(C), f = z * Math.sin(C), v = a.length;
          a.push([
            b,
            f,
            w
          ]), r.push([
            S,
            v
          ]);
          const M = a.length;
          a.push([
            b * 0.5,
            f * 0.5,
            w
          ]), r.push([
            S,
            M
          ]), r.push([
            M,
            v
          ]);
        }
        for (let H = 0; H < 3; H++) {
          const C = S + 1 + H * 2, b = S + 1 + (H + 1) % 3 * 2;
          r.push([
            C,
            b
          ]);
        }
        if (p < 20) {
          const C = S + 7;
          r.push([
            S,
            C
          ]);
          for (let b = 0; b < 3; b++) r.push([
            S + 1 + b * 2,
            C + 1 + b * 2
          ]), r.push([
            S + 2 + b * 2,
            C + 2 + b * 2
          ]), r.push([
            S + 1 + b * 2,
            C + 2 + b * 2
          ]);
        }
      }
      const i = /* @__PURE__ */ new Map(), c = 1 + 3 * 2;
      for (let p = 0; p < c; p++) i.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const g = p * c, w = 5 * p / 20;
        u.set(g, [
          w,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: u
      });
      const d = 35e6, s = 14e6, m = 0.02, $ = 5e-5, y = 2e-5, x = {
        elasticities: new Map(r.map((p, g) => [
          g,
          d
        ])),
        shearModuli: new Map(r.map((p, g) => [
          g,
          s
        ])),
        areas: new Map(r.map((p, g) => [
          g,
          m
        ])),
        momentsOfInertiaZ: new Map(r.map((p, g) => [
          g,
          $
        ])),
        momentsOfInertiaY: new Map(r.map((p, g) => [
          g,
          $
        ])),
        torsionalConstants: new Map(r.map((p, g) => [
          g,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const p = ut(a, r, {
          supports: i,
          loads: u
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Burj Khalifa: ${a.length} nodos, ${r.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function la() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const $ = m * 12, y = 15 - m * 2, x = 20 - m * 3, p = 8 - m, g = t.length;
        for (let z = 0; z <= 4; z++) {
          const S = z / 4, H = -p / 2 + p * S, C = x * (1 - S * S * 0.3);
          for (let b = 0; b <= 12; b++) {
            const f = b / 12, v = $ + C * f, M = y * Math.sin(Math.PI * f) * (1 - S * S * 0.5), L = H;
            t.push([
              v,
              L,
              M
            ]);
          }
        }
        const w = 13;
        for (let z = 0; z < 4; z++) for (let S = 0; S < 12; S++) {
          const H = g + z * w + S, C = g + z * w + S + 1, b = g + (z + 1) * w + S + 1, f = g + (z + 1) * w + S;
          o.push([
            H,
            C,
            b,
            f
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] < 0.5 && a.set(m, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] > 2 && r.set(m, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      });
      const i = 35e6, c = 0.2, u = 0.15, d = i / (2 * (1 + c)), s = {
        elasticities: new Map(o.map((m, $) => [
          $,
          i
        ])),
        poissonsRatios: new Map(o.map((m, $) => [
          $,
          c
        ])),
        thicknesses: new Map(o.map((m, $) => [
          $,
          u
        ])),
        shearModuli: new Map(o.map((m, $) => [
          $,
          d
        ]))
      };
      e.elementInputs && (e.elementInputs.val = s);
      try {
        const m = ut(t, o, {
          supports: a,
          loads: r
        }, s);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function ia() {
      const l = [], a = [];
      for (let x = 0; x <= 15; x++) {
        const p = x / 15, g = x * 3.5, w = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const z = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let S = 0; S < 12; S++) {
            const H = 2 * Math.PI * S / 12;
            l.push([
              Math.max(z, 1) * Math.cos(H),
              Math.max(z, 1) * Math.sin(H),
              g
            ]);
          }
        } else for (let z = 0; z < 12; z++) {
          const S = 2 * Math.PI * z / 12;
          l.push([
            w * Math.cos(S),
            w * Math.sin(S),
            g
          ]);
        }
      }
      for (let x = 0; x < 15; x++) {
        const p = x * 12, g = (x + 1) * 12;
        for (let z = 0; z < 12; z++) a.push([
          p + z,
          p + (z + 1) % 12
        ]);
        const w = x % 2 === 0 ? 1 : -1;
        for (let z = 0; z < 12; z++) {
          const S = (z + w + 12) % 12;
          a.push([
            p + z,
            g + S
          ]), a.push([
            p + z,
            g + z
          ]);
        }
      }
      const r = 15 * 12;
      for (let x = 0; x < 12; x++) a.push([
        r + x,
        r + (x + 1) % 12
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let x = 0; x < 12; x++) i.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 15; x++) {
        const p = x * 12, g = 3 * x / 15;
        for (let w = 0; w < 12; w += 3) c.set(p + w, [
          g,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: c
      });
      const u = 2e8, d = 77e6, s = 6e-3, m = 8e-6, $ = 4e-6, y = {
        elasticities: new Map(a.map((x, p) => [
          p,
          u
        ])),
        shearModuli: new Map(a.map((x, p) => [
          p,
          d
        ])),
        areas: new Map(a.map((x, p) => [
          p,
          s
        ])),
        momentsOfInertiaZ: new Map(a.map((x, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(a.map((x, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(a.map((x, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const x = ut(l, a, {
          supports: i,
          loads: c
        }, y);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => Ke(), 50), Le(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Na() {
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
    function Ra() {
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
        const o = (g) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${g}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, r = o("po-fy") * 1e3, i = o("po-H"), c = o("po-L"), u = o("po-As") * 1e-4, d = o("po-nbar"), s = o("po-drift") / 100, m = o("po-ncycles"), $ = t.querySelector("#pushover-status");
        $.textContent = "Generando historia de desplazamientos...";
        const y = [], x = s * i, p = 40;
        for (let g = 1; g <= m; g++) {
          const w = x * g / m;
          for (let z = 0; z <= p; z++) y.push(w * Math.sin(2 * Math.PI * z / p));
        }
        $.textContent = `Resolviendo pushover (${y.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await Ya(async () => {
            const { cyclicPushover: z } = await import("./cyclicPushoverCpp-DZAQImEK.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: z
            };
          }, __vite__mapDeps([0,1]), import.meta.url), w = await g({
            colHeight: i,
            beamLength: c,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: r,
              E_rebar: 2e8,
              rebar_area: u,
              cover: 0.04,
              n_rebar: d
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: r,
              E_rebar: 2e8,
              rebar_area: u * 0.7,
              cover: 0.03,
              n_rebar: d
            },
            dispHistory: y
          });
          $.textContent = `Completado: ${w.nSteps} pasos`, Oa(t.querySelector("#pushover-canvas"), w.displacements, w.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${r / 1e3}MPa`);
        } catch (g) {
          $.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
        }
      });
    }
    function Oa(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const r = t.width, i = t.height, c = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, u = r - c.left - c.right, d = i - c.top - c.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, r, i);
      let s = Math.min(...o), m = Math.max(...o), $ = Math.min(...n), y = Math.max(...n);
      s === m && (s -= 0.01, m += 0.01), $ === y && ($ -= 1, y += 1);
      const x = m - s, p = y - $, g = (H) => c.left + (H - s) / x * u, w = (H) => c.top + d - (H - $) / p * d;
      a.strokeStyle = "#333", a.lineWidth = 0.5, s < 0 && m > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(g(0), c.top), a.lineTo(g(0), c.top + d), a.stroke()), $ < 0 && y > 0 && (a.beginPath(), a.moveTo(c.left, w(0)), a.lineTo(c.left + u, w(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(g(o[0]), w(n[0]));
      for (let H = 1; H < o.length; H++) a.lineTo(g(o[H]), w(n[H]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", c.left + u / 2, i - 5), a.save(), a.translate(12, c.top + d / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, r / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const z = x / 5;
      for (let H = 0; H <= 5; H++) {
        const C = s + z * H;
        a.fillText((C * 1e3).toFixed(1), g(C), i - c.bottom + 15);
      }
      a.textAlign = "right";
      const S = p / 5;
      for (let H = 0; H <= 5; H++) {
        const C = $ + S * H;
        a.fillText(C.toFixed(0), c.left - 5, w(C) + 3);
      }
    }
    let yo = null;
    function Ba() {
      if (yo) {
        yo.remove(), yo = null;
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
    `, document.body.appendChild(t), yo = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), yo = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => ja(t));
    }
    function ja(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), r = parseFloat(t.querySelector("#nl-amp").value), i = parseInt(t.querySelector("#nl-cycles").value), c = 100, u = [];
      for (let G = 0; G < i; G++) {
        const Z = r * (1 + G * 0.5);
        for (let W = 0; W < c; W++) {
          const D = W / c * 2 * Math.PI;
          u.push(Z * Math.sin(D));
        }
      }
      const d = o / n, s = l * n;
      let m = 0, $ = 0, y = -d, x = d, p = 0, g = 0, w = 0, z = 0, S = 0, H = 0;
      const C = [];
      for (const G of u) {
        let Z = y, W = x, D = p, X = g, de = w, Me = z, $e = S, K = H, le;
        const pe = G - m;
        if (Math.abs(pe) < 1e-20) {
          C.push($);
          continue;
        }
        if ((K === 0 || K === 3) && (pe < 0 ? (K = 2, X = -d, de = -o, D = X, Me = 0, $e = 0) : (K = 1, X = d, de = o, D = X, Me = 0, $e = 0)), K === 2 && pe > 0) {
          K = 1, Me = m, $e = $, m < Z && (Z = m);
          const fe = (W - Z) / (2 * 1 * d), ke = 1 + 0 * Math.pow(fe, 0.8);
          X = (o * ke - s * d * ke - $e + n * Me) / (n - s), de = o * ke + s * (X - d * ke), D = W;
        } else if (K === 1 && pe < 0) {
          K = 2, Me = m, $e = $, m > W && (W = m);
          const fe = (W - Z) / (2 * 1 * d), ke = 1 + 0 * Math.pow(fe, 0.8);
          X = (-o * ke + s * d * ke - $e + n * Me) / (n - s), de = -o * ke + s * (X + d * ke), D = Z;
        }
        const Q = Math.abs((D - X) / d);
        let xe = a - 0.925 * Q / (0.15 + Q);
        xe < 0.1 && (xe = 0.1);
        const we = (G - Me) / (X - Me), Te = 1 + Math.pow(Math.abs(we), xe), V = Math.pow(Te, 1 / xe);
        le = l * we + (1 - l) * we / V, le = le * (de - $e) + $e, C.push(le), m = G, $ = le, y = Z, x = W, p = D, g = X, w = de, z = Me, S = $e, H = K;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), v = b.width, M = b.height;
      f.clearRect(0, 0, v, M);
      const L = Math.max(...u.map(Math.abs)), N = Math.max(...C.map(Math.abs)), q = (v - 40) / (2 * L), I = (M - 40) / (2 * N), P = v / 2, _ = M / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, _), f.lineTo(v - 20, _), f.stroke(), f.beginPath(), f.moveTo(P, 20), f.lineTo(P, M - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", v - 40, _ - 5), f.fillText("\u03C3 (stress)", P + 30, 15), f.fillText(`\xB1${(L * 100).toFixed(1)}%`, v - 30, _ + 12), f.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let G = 0; G < u.length; G++) {
        const Z = P + u[G] * q, W = _ - C[G] * I;
        G === 0 ? f.moveTo(Z, W) : f.lineTo(Z, W);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, _ - o * I), f.lineTo(v - 20, _ - o * I), f.stroke(), f.beginPath(), f.moveTo(20, _ + o * I), f.lineTo(v - 20, _ + o * I), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, _ - o * I - 5);
      const Y = t.querySelector("#nl-info");
      Y.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${i} ciclos, amp=${(r * 100).toFixed(1)}%`;
    }
    function Da() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, r = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const i = ps({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: r
      });
      document.body.appendChild(i);
    }
    let io = null;
    function Wa(t) {
      io && io.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Po(), l = Co(), a = Object.entries(n).map(([d, s]) => `<option value="${s}">${d}</option>`).join(""), r = Object.entries(l).map(([d, s]) => `<option value="${s}">${d}</option>`).join("");
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
    `, document.body.appendChild(o), io = o;
      const i = o.querySelector("#asgn-type"), c = o.querySelector("#asgn-params");
      function u() {
        const d = i.value;
        let s = "";
        d === "rect" ? s = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : d === "circ" ? s = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : d === "W" ? s = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : d === "HSS" ? s = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${r}</select>` : d === "I-param" ? s = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : d === "tubular" && (s = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), c.innerHTML = s;
      }
      i.addEventListener("change", u), u(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), io = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = i.value, s = {
          secType: d
        };
        d === "rect" ? (s.b = parseFloat(o.querySelector("#ap-b").value), s.h = parseFloat(o.querySelector("#ap-h").value), s.material = 0) : d === "circ" ? (s.b = parseFloat(o.querySelector("#ap-d").value), s.material = 0) : d === "W" || d === "HSS" ? (s.profileIdx = parseInt(o.querySelector("#ap-profile").value), s.material = 1) : d === "I-param" ? (s.bf = parseFloat(o.querySelector("#ap-bf").value), s.hf = parseFloat(o.querySelector("#ap-hf").value), s.tf = parseFloat(o.querySelector("#ap-tf").value), s.tw = parseFloat(o.querySelector("#ap-tw").value), s.material = 1) : d === "tubular" && (s.bc = parseFloat(o.querySelector("#ap-bc").value), s.hc = parseFloat(o.querySelector("#ap-hc").value), s.t = parseFloat(o.querySelector("#ap-t").value), s.material = 1), s.releaseRotStart = (_a2 = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a2.checked, s.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, s.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, s.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, s.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, s.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, s.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, s.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, s.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, s.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, s.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, s.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((m) => me.set(m, {
          ...s
        })), o.remove(), io = null, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((d) => me.delete(d)), o.remove(), io = null, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let ro = null;
    function Ja(t) {
      var _a2, _b, _c;
      ro && ro.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], r = Math.abs(a[0] - l[0]), i = Math.abs(a[1] - l[1]), c = Math.abs(a[2] - l[2]), u = i > r && i > c, d = Math.sqrt(r * r + i * i + c * c), s = Pe.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), $ = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), y = document.createElement("div");
      y.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", y.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${u ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${s + 1} &nbsp;
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
    `, document.body.appendChild(y), ro = y, y.querySelector("#ep-close").addEventListener("click", () => {
        y.remove(), ro = null, Xt();
      }), y.querySelector("#ep-delete").addEventListener("click", () => {
        ne.add(t), y.remove(), ro = null, Xt(), ae();
      }), y.querySelector("#ep-inspect").addEventListener("click", () => {
        y.remove(), ro = null, ea(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const a = 5;
      function r(u) {
        const d = Ce();
        if (!d) return null;
        const s = d.controls.object, m = new ue(u[0], u[1], u[2]);
        m.project(s);
        const $ = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * $.width,
          y: (-m.y + 1) / 2 * $.height
        };
      }
      function i(u, d, s, m, $) {
        const y = Math.min(u, s), x = Math.max(u, s), p = Math.min(d, m), g = Math.max(d, m), w = e.nodes.val, z = e.elements.val, S = [];
        for (let H = 0; H < z.length; H++) {
          const C = z[H], b = C.map((f) => r(w[f])).filter(Boolean);
          if (b.length !== 0) if ($) b.every((v) => v.x >= y && v.x <= x && v.y >= p && v.y <= g) && S.push(H);
          else {
            if (b.some((v) => v.x >= y && v.x <= x && v.y >= p && v.y <= g)) {
              S.push(H);
              continue;
            }
            if (C.length === 2) {
              const v = b[0], M = b[1];
              c(v.x, v.y, M.x, M.y, y, p, x, g) && S.push(H);
            }
          }
        }
        return S;
      }
      function c(u, d, s, m, $, y, x, p) {
        const g = (z, S) => z >= $ && z <= x && S >= y && S <= p;
        if (g(u, d) || g(s, m)) return true;
        const w = (z, S, H, C, b, f, v, M) => {
          const L = (H - z) * (M - f) - (C - S) * (v - b);
          if (Math.abs(L) < 1e-10) return false;
          const N = ((b - z) * (M - f) - (f - S) * (v - b)) / L, q = ((b - z) * (C - S) - (f - S) * (H - z)) / L;
          return N >= 0 && N <= 1 && q >= 0 && q <= 1;
        };
        return w(u, d, s, m, $, y, x, y) || w(u, d, s, m, x, y, x, p) || w(u, d, s, m, $, p, x, p) || w(u, d, s, m, $, y, $, p);
      }
      o.addEventListener("mousedown", (u) => {
        it && (n = {
          x: u.offsetX,
          y: u.offsetY
        });
      }), o.addEventListener("mousemove", (u) => {
        if (kt) {
          const s = Ce();
          if (!s) return;
          const m = Xn(u.clientX, u.clientY, s.camera, s.rendererElm);
          if (Be.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== Gt && Ia(m.nodeIdx), Be.track && Gt !== null && m.worldPos && m.snapType !== "node") {
            const $ = La(m.worldPos, Gt);
            $ && (m.worldPos = $, m.snapType = "grid");
          }
          if (Gt !== null && m.worldPos) {
            const $ = e.nodes.val[Gt];
            $ && Gn(u.clientX, u.clientY, new ue(...$), m.worldPos);
          } else if (He !== null && m.worldPos) {
            const $ = e.nodes.val[He];
            $ && Gn(u.clientX, u.clientY, new ue(...$), m.worldPos);
          } else ft && (ft.remove(), ft = null);
          m.nodeIdx, Kn(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!xt && !it) return;
        if (it && n) {
          const s = u.offsetX - n.x, m = u.offsetY - n.y;
          if (Math.abs(s) > a || Math.abs(m) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const $ = s > 0, y = Math.min(n.x, u.offsetX), x = Math.min(n.y, u.offsetY), p = Math.abs(s), g = Math.abs(m);
            l.style.left = y + "px", l.style.top = x + "px", l.style.width = p + "px", l.style.height = g + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = sn(u);
        if (d >= 0) Zn(d), o.style.cursor = "pointer";
        else {
          if (rt) {
            const s = Ce();
            s == null ? void 0 : s.scene.remove(rt), rt = null, s == null ? void 0 : s.render();
          }
          o.style.cursor = it ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (u) => {
        if (it && n) {
          const d = u.offsetX - n.x, s = u.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(s) > a) {
            const m = d > 0, $ = i(n.x, n.y, u.offsetX, u.offsetY, m);
            u.ctrlKey || u.metaKey || (Ae.clear(), Bt()), $.forEach((x) => {
              Ae.has(x) || (Ae.add(x), on(x));
            }), jt();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (u) => {
        if (kt) {
          const d = Ce();
          if (!d) return;
          const s = Xn(u.clientX, u.clientY, d.camera, d.rendererElm);
          (s.worldPos || s.nodeIdx !== null) && (Ta(s), Kn(s));
          return;
        }
        if (it) {
          if (l) return;
          const d = sn(u), s = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (s) if (Ae.has(d)) {
              Ae.delete(d);
              const m = Ot.findIndex(($) => $.__elemIdx === d);
              if (m >= 0) {
                const $ = Ce();
                $ == null ? void 0 : $.scene.remove(Ot[m]), Ot[m].geometry.dispose(), Ot[m].material.dispose(), Ot.splice(m, 1), $ == null ? void 0 : $.render();
              }
            } else Ae.add(d), on(d);
            else Ae.clear(), Bt(), Ae.add(d), on(d);
            jt();
          } else s || (Ae.clear(), Bt(), jt());
          return;
        }
        if (xt) {
          const d = sn(u);
          d >= 0 && (Zn(d), Ja(d));
        }
      });
    }, 500), fo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Le();
    }), ze.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !bt), bt = t, (_a2 = re.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", bt), bt) {
        const n = Ce();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (zo = n.settings.loads.rawVal, n.settings.loads.val = false), Go(), re.querySelector("#cad3d-mode-prev").style.display = "", re.querySelector("#cad3d-mode-next").style.display = "", re.querySelector("#cad3d-mode-label").style.display = "";
      } else Xo(), re.querySelector("#cad3d-mode-prev").style.display = "none", re.querySelector("#cad3d-mode-next").style.display = "none", re.querySelector("#cad3d-mode-label").style.display = "none", E && E !== "placa-q4" && E !== "placa-3q" && ae(), setTimeout(() => {
        var _a3;
        const n = Ce();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && zo && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${bt ? "ON" : "OFF"}`);
    }, ze.setMode = (t) => {
      var _a2;
      if (!(je == null ? void 0 : je.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ot = Math.max(0, Math.min(t, je.modeShapes.length - 1));
      const o = je.modeShapes[ot], { extent: n } = Nt();
      let l = 0;
      for (let r = 0; r < It.length; r++) {
        const i = o[r * 6] || 0, c = o[r * 6 + 1] || 0, u = o[r * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(i * i + c * c + u * u));
      }
      So = l > 1e-12 ? n * 0.05 / l : 1, vo();
      const a = re.querySelector("#cad3d-mode-label");
      a && je.frequencies && (a.textContent = `Modo ${ot + 1} \u2014 ${je.frequencies[ot].toFixed(2)} Hz`), console.log(`Modo ${ot + 1}: f = ${(_a2 = je.frequencies) == null ? void 0 : _a2[ot].toFixed(4)} Hz`);
    }, window.cad = ze, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(re), document.body.appendChild(go.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ie("edificio"), ae(), jn("edificio"));
    }, 100), document.body.appendChild(ws());
    const ra = document.createElement("span");
    return ra.style.display = "none", ra;
  };
});
export {
  __tla,
  xa as a,
  ds as c,
  Ts as g
};
